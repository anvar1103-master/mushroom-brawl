// The arena: tile grid, collisions, line of sight, path finding and the 3D dressing around it.
import * as THREE from 'three';
import { mergeVertices, mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { scene, canvasTex, fitShadow, stdMat, LOW } from './engine.js';
import { NATURE } from './assets.js';
import { TILE, MAPS } from './maps.js';
import { rand, pick, seeded, clamp, TAU, TOUCH } from './util.js';
import { Q } from './engine.js';

export const A = { map:null, W:0, H:0, rows:null, group:null, hx:0, hz:0, spawns:{ 0:[], 1:[] }, mine:{ x:0, z:0 }, grassTiles:[], shared:{} };
export const U = { time:{ value:0 }, push:{ value:Array.from({ length:10 }, () => new THREE.Vector3(0, 0, 0)) }, me:{ value:new THREE.Vector3(0, 0, 0) } };

// ---------------- tiles ----------------
export const tileX = c => (c - (A.W - 1) / 2) * TILE;
export const tileZ = r => (r - (A.H - 1) / 2) * TILE;
export const colOf = x => Math.floor(x / TILE + A.W / 2);
export const rowOf = z => Math.floor(z / TILE + A.H / 2);
export function tileAt(c, r){ if(c < 0 || r < 0 || c >= A.W || r >= A.H) return 'X'; return A.rows[r][c]; }
export const tileAtXZ = (x, z) => tileAt(colOf(x), rowOf(z));
const MOVE_BLOCK = new Set(['#', 'R', 'T', '~', 'X']);
const SHOT_BLOCK = new Set(['#', 'R', 'T', 'X']);
export const blocksMove = ch => MOVE_BLOCK.has(ch);
export const blocksShot = ch => SHOT_BLOCK.has(ch);
// tall hedges (and the fence) block the view; rocks and stumps are low enough to see over
const SIGHT_BLOCK = new Set(['#', 'X']);
export const blocksSight = ch => SIGHT_BLOCK.has(ch);
export const sightClear = (x0, z0, x1, z1) => segHit(x0, z0, x1, z1, blocksSight) < 0;
// height of whatever stands on a tile (for aiming rays and the camera)
export const tileHeight = ch => ch === '#' || ch === 'X' ? HEDGE_H : ch === 'R' ? 1.15 : ch === 'T' ? 0.9 : 0;
export const inGrass = (x, z) => tileAtXZ(x, z) === '"';

// push a circle out of every blocked tile it overlaps
export function collide(p, rad){
  const c0 = colOf(p.x - rad), c1 = colOf(p.x + rad), r0 = rowOf(p.z - rad), r1 = rowOf(p.z + rad);
  let hit = false;
  for(let r = r0; r <= r1; r++) for(let c = c0; c <= c1; c++){
    if(!blocksMove(tileAt(c, r))) continue;
    const minX = tileX(c) - TILE / 2, maxX = minX + TILE, minZ = tileZ(r) - TILE / 2, maxZ = minZ + TILE;
    const nx = clamp(p.x, minX, maxX), nz = clamp(p.z, minZ, maxZ);
    let dx = p.x - nx, dz = p.z - nz; const d2 = dx * dx + dz * dz;
    if(d2 >= rad * rad) continue;
    hit = true;
    if(d2 > 1e-8){ const d = Math.sqrt(d2), k = (rad - d) / d; p.x += dx * k; p.z += dz * k; }
    else { // centre inside the tile: leave by the nearest edge
      const e = [p.x - minX, maxX - p.x, p.z - minZ, maxZ - p.z], m = Math.min(...e);
      if(m === e[0]) p.x = minX - rad; else if(m === e[1]) p.x = maxX + rad; else if(m === e[2]) p.z = minZ - rad; else p.z = maxZ + rad;
    }
  }
  return hit;
}

// first point where a segment enters a shot-blocking tile: returns t in [0,1] or -1 (grid DDA)
export function segHit(x0, z0, x1, z1, block = blocksShot){
  const dx = x1 - x0, dz = z1 - z0;
  let c = colOf(x0), r = rowOf(z0);
  if(block(tileAt(c, r))) return 0;
  const c1 = colOf(x1), r1 = rowOf(z1);
  const stepC = dx > 0 ? 1 : -1, stepR = dz > 0 ? 1 : -1;
  const ox = x0 / TILE + A.W / 2, oz = z0 / TILE + A.H / 2, ddx = dx / TILE, ddz = dz / TILE;
  const tdC = ddx !== 0 ? Math.abs(1 / ddx) : Infinity, tdR = ddz !== 0 ? Math.abs(1 / ddz) : Infinity;
  let tC = ddx !== 0 ? ((stepC > 0 ? Math.floor(ox) + 1 - ox : ox - Math.floor(ox)) * tdC) : Infinity;
  let tR = ddz !== 0 ? ((stepR > 0 ? Math.floor(oz) + 1 - oz : oz - Math.floor(oz)) * tdR) : Infinity;
  for(let i = 0; i < 200; i++){
    if(c === c1 && r === r1) return -1;
    let t;
    if(tC < tR){ t = tC; tC += tdC; c += stepC; } else { t = tR; tR += tdR; r += stepR; }
    if(t > 1) return -1;
    if(block(tileAt(c, r))) return t;
  }
  return -1;
}
export const losClear = (x0, z0, x1, z1) => segHit(x0, z0, x1, z1) < 0;

// ---------------- path finding: A* over tiles, 8 directions, then string-pulled ----------------
export function findPath(x0, z0, x1, z1){
  const W = A.W, H = A.H, sc = clamp(colOf(x0), 0, W - 1), sr = clamp(rowOf(z0), 0, H - 1);
  let gc = clamp(colOf(x1), 0, W - 1), gr = clamp(rowOf(z1), 0, H - 1);
  if(blocksMove(tileAt(gc, gr))){ const f = nearestFree(gc, gr); if(!f) return null; gc = f[0]; gr = f[1]; }
  const N = W * H, g = new Float32Array(N).fill(1e9), from = new Int32Array(N).fill(-1), closed = new Uint8Array(N);
  const open = [sr * W + sc]; g[open[0]] = 0;
  const h = i => { const dc = Math.abs(i % W - gc), dr = Math.abs((i / W | 0) - gr); return Math.max(dc, dr) + 0.414 * Math.min(dc, dr); };
  const goal = gr * W + gc;
  while(open.length){
    let bi = 0, bf = 1e9;
    for(let k = 0; k < open.length; k++){ const f = g[open[k]] + h(open[k]); if(f < bf){ bf = f; bi = k; } }
    const cur = open[bi]; open[bi] = open[open.length - 1]; open.pop();
    if(cur === goal) break;
    closed[cur] = 1;
    const cc = cur % W, cr = cur / W | 0;
    for(let dr = -1; dr <= 1; dr++) for(let dc = -1; dc <= 1; dc++){
      if(!dc && !dr) continue;
      const nc = cc + dc, nr = cr + dr;
      if(nc < 0 || nr < 0 || nc >= W || nr >= H || blocksMove(A.rows[nr][nc])) continue;
      if(dc && dr && (blocksMove(A.rows[cr][nc]) || blocksMove(A.rows[nr][cc]))) continue;
      const ni = nr * W + nc; if(closed[ni]) continue;
      const ng = g[cur] + (dc && dr ? 1.414 : 1) + (A.rows[nr][nc] === '"' ? 0.15 : 0);
      if(ng < g[ni]){ if(g[ni] >= 1e9) open.push(ni); g[ni] = ng; from[ni] = cur; }
    }
  }
  if(from[goal] < 0 && goal !== sr * W + sc) return null;
  const cells = []; for(let i = goal; i >= 0; i = from[i]) cells.push(i);
  cells.reverse();
  const pts = cells.map(i => ({ x:tileX(i % W), z:tileZ(i / W | 0) }));
  pts[pts.length - 1] = { x:clamp(x1, tileX(gc) - TILE * 0.45, tileX(gc) + TILE * 0.45), z:clamp(z1, tileZ(gr) - TILE * 0.45, tileZ(gr) + TILE * 0.45) };
  // string pulling: skip points we can walk straight past (checked with a fat ray)
  const out = []; let a = { x:x0, z:z0 }, i = 0;
  while(i < pts.length){
    let j = pts.length - 1;
    while(j > i && !walkClear(a.x, a.z, pts[j].x, pts[j].z)) j--;
    out.push(pts[j]); a = pts[j]; i = j + 1;
  }
  return out;
}
export function walkClear(x0, z0, x1, z1){
  const dx = x1 - x0, dz = z1 - z0, d = Math.hypot(dx, dz) || 1, nx = -dz / d * 0.42, nz = dx / d * 0.42;
  return segHit(x0 + nx, z0 + nz, x1 + nx, z1 + nz, blocksMove) < 0 && segHit(x0 - nx, z0 - nz, x1 - nx, z1 - nz, blocksMove) < 0;
}
function nearestFree(c, r){
  for(let d = 1; d < 6; d++) for(let dr = -d; dr <= d; dr++) for(let dc = -d; dc <= d; dc++){
    if(Math.max(Math.abs(dc), Math.abs(dr)) !== d) continue;
    if(!blocksMove(tileAt(c + dc, r + dr))) return [c + dc, r + dr];
  }
  return null;
}

// ---------------- materials ----------------
// wind sway and «pushed aside by fighters» for grass and leaves (world-space bend, weighted by local height)
function windify(mat, heightNorm, amt, push){
  mat.onBeforeCompile = sh => {
    sh.uniforms.uTime = U.time; sh.uniforms.uPush = U.push; sh.uniforms.uMe = U.me;
    if(push){
      // see-through near the camera and around your own hero (dithered, so the grass stays opaque and cheap)
      sh.fragmentShader = 'uniform vec3 uMe;\nvarying vec3 vWPg;\n' + sh.fragmentShader.replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
        float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        float keep = smoothstep(1.2, 2.8, distance(vWPg, cameraPosition));
        if(uMe.z > 0.0) keep = min(keep, mix(0.35, 1.0, smoothstep(uMe.z * 0.6, uMe.z, distance(vWPg.xz, uMe.xy))));
        if(ign > keep) discard;`);
    }
    sh.vertexShader = 'uniform float uTime;\nuniform vec3 uPush[10];\nvarying vec3 vWPg;\n' + sh.vertexShader.replace('#include <project_vertex>', `
      vec4 mvPosition = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
      #endif
      vec4 wp = modelMatrix * mvPosition;
      float hw = clamp(position.y / ${heightNorm.toFixed(3)}, 0.0, 1.0); hw *= hw;
      float ph = wp.x * 0.35 + wp.z * 0.27;
      wp.x += (sin(uTime * 1.7 + ph) * 0.6 + sin(uTime * 3.1 + ph * 2.3) * 0.25) * ${amt.toFixed(3)} * hw;
      wp.z += cos(uTime * 1.3 + ph * 1.2) * ${(amt * 0.6).toFixed(3)} * hw;
      ${push ? `for(int i = 0; i < 10; i++){
        vec2 d = wp.xz - uPush[i].xy; float l = length(d);
        float k = uPush[i].z > 0.01 ? 1.0 - smoothstep(0.0, uPush[i].z, l) : 0.0;
        wp.xz += d / max(l, 0.01) * k * 0.55 * hw; wp.y -= k * 0.45 * hw * ${heightNorm.toFixed(3)};
      }` : ''}
      vWPg = wp.xyz;
      mvPosition = viewMatrix * wp;
      gl_Position = projectionMatrix * mvPosition;`);
  };
  mat.customProgramCacheKey = () => 'wind' + heightNorm + amt + push;
  return mat;
}

// leafy texture for hedges (seen from every side through world-space triplanar mapping)
function leafTex(){
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#3E7F2C'; g.fillRect(0, 0, w, h);
    const cols = ['#2F6A22', '#4C9634', '#5AAA3A', '#3A7A28', '#6CBB45', '#2A5C1E'];
    for(let i = 0; i < 900; i++){
      const x = rand(0, w), y = rand(0, h), s = rand(5, 11), a = rand(0, TAU);
      g.fillStyle = pick(cols);
      for(const ox of [-w, 0, w]) for(const oy of [-h, 0, h]){
        g.beginPath(); g.ellipse(x + ox, y + oy, s, s * 0.55, a, 0, TAU); g.fill();
      }
    }
    g.globalAlpha = 0.25; g.fillStyle = '#B9E87A';
    for(let i = 0; i < 160; i++){ const x = rand(0, w), y = rand(0, h); g.beginPath(); g.ellipse(x, y, 3, 1.6, rand(0, TAU), 0, TAU); g.fill(); }
  }, { repeat:true });
}
function triplanar(mat, scale){
  mat.onBeforeCompile = sh => {
    sh.vertexShader = 'varying vec3 vWP; varying vec3 vWN;\n' + sh.vertexShader.replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\n vWP = (modelMatrix * vec4(transformed, 1.0)).xyz; vWN = normalize(mat3(modelMatrix) * objectNormal);');
    sh.fragmentShader = 'varying vec3 vWP; varying vec3 vWN;\n' + sh.fragmentShader.replace('#include <map_fragment>', `
      ${LOW ? `vec3 an = abs(vWN);   // phones: one texture read along the main axis instead of three
      vec2 tuv = an.y > an.x && an.y > an.z ? vWP.xz : an.x > an.z ? vWP.zy : vWP.xy;
      diffuseColor *= texture2D(map, tuv * ${scale.toFixed(3)});` : `vec3 bw = pow(abs(vWN), vec3(4.0)); bw /= max(bw.x + bw.y + bw.z, 1e-4);
      vec4 tx = texture2D(map, vWP.zy * ${scale.toFixed(3)}), ty = texture2D(map, vWP.xz * ${scale.toFixed(3)}), tz = texture2D(map, vWP.xy * ${scale.toFixed(3)});
      diffuseColor *= tx * bw.x + ty * bw.y + tz * bw.z;`}`);
  };
  mat.customProgramCacheKey = () => 'tri' + scale;
  return mat;
}

// rounded, lumpy box: the base shape of every hedge
function hedgeGeo(sx, sy, sz, seed){
  const res = 2.2, rad = 0.32;
  let g = new THREE.BoxGeometry(sx, sy, sz, Math.ceil(sx * res), Math.ceil(sy * res), Math.ceil(sz * res));
  g.deleteAttribute('normal'); g.deleteAttribute('uv');
  g = mergeVertices(g);
  const p = g.attributes.position, hx = sx / 2 - rad, hy = sy / 2 - rad, hz = sz / 2 - rad, v = new THREE.Vector3(), n = new THREE.Vector3();
  const col = new Float32Array(p.count * 3);
  for(let i = 0; i < p.count; i++){
    v.fromBufferAttribute(p, i);
    const ix = clamp(v.x, -hx, hx), iy = clamp(v.y, -hy, hy), iz = clamp(v.z, -hz, hz);
    n.set(v.x - ix, v.y - iy, v.z - iz).normalize();
    const bump = 0.07 * (Math.sin(v.x * 4.1 + seed) * Math.sin(v.z * 3.7 - seed) + Math.sin(v.y * 5.3 + v.x * 2.1 + seed * 2)) + (v.y > hy - 0.01 ? 0.05 * Math.sin(v.x * 2.3 + v.z * 2.9 + seed) : 0);
    v.set(ix, iy, iz).addScaledVector(n, rad + bump);
    p.setXYZ(i, v.x, v.y + sy / 2, v.z);
    const k = clamp((v.y + sy / 2) / sy, 0, 1), sh = 0.55 + 0.45 * Math.pow(k, 0.7) + rand(-0.05, 0.05);
    col[i * 3] = sh * 0.95; col[i * 3 + 1] = sh; col[i * 3 + 2] = sh * 0.9;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.computeVertexNormals();
  return g;
}

function stumpGeo(){
  const pts = [[0.0, 0], [0.78, 0], [0.62, 0.12], [0.55, 0.3], [0.53, 0.7], [0.56, 0.84], [0.5, 0.86]].map(p => new THREE.Vector2(p[0], p[1]));
  const side = new THREE.LatheGeometry(pts, 18);
  const top = new THREE.CircleGeometry(0.5, 18); top.rotateX(-Math.PI / 2); top.translate(0, 0.86, 0);
  // jitter the bark so the stump isn't a perfect lathe
  const p = side.attributes.position;
  for(let i = 0; i < p.count; i++){ const x = p.getX(i), z = p.getZ(i), a = Math.atan2(z, x), y = p.getY(i); const k = 1 + 0.07 * Math.sin(a * 7) + 0.04 * Math.sin(a * 13 + y * 6); p.setX(i, x * k); p.setZ(i, z * k); }
  side.computeVertexNormals();
  return { side, top };
}

// ---------------- instancing helpers ----------------
const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpS = new THREE.Vector3(), tmpP = new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0);
// place copies of a nature model: list of {x, y, z, rot, s}; materials come from matFor(part)
function instanceModel(name, list, matFor, opt = {}){
  const M = NATURE[name]; if(!M || !list.length) return [];
  const out = [];
  for(const part of M.parts){
    const mat = matFor(part); if(!mat) continue;
    const im = new THREE.InstancedMesh(part.geometry, mat, list.length);
    list.forEach((t, i) => {
      tmpQ.setFromAxisAngle(UP, t.rot || 0); tmpS.setScalar(t.s || 1); if(t.sy) tmpS.y *= t.sy;
      tmpM.compose(tmpP.set(t.x, t.y || 0, t.z), tmpQ, tmpS).multiply(part.matrix);
      im.setMatrixAt(i, tmpM);
      if(t.color && im.setColorAt) im.setColorAt(i, t.color);
    });
    im.castShadow = !!opt.cast; im.receiveShadow = opt.receive !== false;
    im.computeBoundingSphere();
    A.group.add(im); out.push(im);
  }
  return out;
}

// ---------------- building ----------------
export function buildArena(id){
  if(A.group){ scene.remove(A.group); A.group.traverse(o => { if(o.geometry && !o.userData.shared) o.geometry.dispose(); }); }
  const map = MAPS[id];
  Object.assign(A, { map, W:map.W, H:map.H, rows:map.rows, hx:map.W * TILE / 2, hz:map.H * TILE / 2, spawns:{ 0:[], 1:[] }, grassTiles:[] });
  A.group = new THREE.Group(); scene.add(A.group);
  fitShadow(A.hx + 2, A.hz + 2);
  for(let r = 0; r < A.H; r++) for(let c = 0; c < A.W; c++){
    const ch = A.rows[r][c];
    // spawn a little inside the fence so the camera has room behind the hero
    if(ch === 'b') A.spawns[0].push({ x:tileX(c), z:tileZ(r) - 3.2 });
    if(ch === 'r') A.spawns[1].push({ x:tileX(c), z:tileZ(r) + 3.2 });
    if(ch === 'M') A.mine = { x:tileX(c), z:tileZ(r) };
    if(ch === '"') A.grassTiles.push([c, r]);
  }
  seeded(7331, () => { buildGround(); buildHedges(); buildCover(); buildGrass(); buildWater(); buildDecor(); buildOutside(); });
  return A;
}

function buildGround(){
  // the arena floor is painted tile by tile: soft checkerboard, dirt around spawns and the mine, shade under walls
  const S = 40, W = A.W * S, H = A.H * S;
  const tex = canvasTex(W, H, (g) => {
    for(let r = 0; r < A.H; r++) for(let c = 0; c < A.W; c++){
      const light = (r + c) % 2 === 0;
      g.fillStyle = light ? '#7CC24E' : '#71B847'; g.fillRect(c * S, r * S, S, S);
    }
    const dirt = (x, y, rad) => { const gr = g.createRadialGradient(x, y, rad * 0.2, x, y, rad); gr.addColorStop(0, 'rgba(201,164,106,0.95)'); gr.addColorStop(0.7, 'rgba(190,156,98,0.6)'); gr.addColorStop(1, 'rgba(190,156,98,0)'); g.fillStyle = gr; g.beginPath(); g.arc(x, y, rad, 0, TAU); g.fill(); };
    for(let r = 0; r < A.H; r++) for(let c = 0; c < A.W; c++){
      const ch = A.rows[r][c], x = (c + 0.5) * S, y = (r + 0.5) * S;
      if(ch === 'M') dirt(x, y, S * 2.6);
      if(ch === 'b' || ch === 'r') dirt(x, y, S * 1.1);
    }
    // grass speckles and blades
    for(let i = 0; i < W * H / 60; i++){
      const x = rand(0, W), y = rand(0, H);
      g.strokeStyle = pick(['rgba(70,140,40,.5)', 'rgba(150,215,90,.45)', 'rgba(55,115,35,.45)', 'rgba(180,230,120,.3)']);
      g.lineWidth = rand(1, 2.2); g.beginPath(); g.moveTo(x, y); g.lineTo(x + rand(-2, 2), y - rand(3, 7)); g.stroke();
    }
    // darker ground under hedges, rocks and grass (fake ambient occlusion), mud under ponds
    g.filter = 'blur(6px)';
    for(let r = 0; r < A.H; r++) for(let c = 0; c < A.W; c++){
      const ch = A.rows[r][c];
      if(ch === '#'){ g.fillStyle = 'rgba(30,60,20,.55)'; g.fillRect(c * S - 6, r * S - 6, S + 12, S + 12); }
      else if(ch === 'R' || ch === 'T'){ g.fillStyle = 'rgba(30,60,20,.35)'; g.beginPath(); g.arc((c + 0.5) * S, (r + 0.5) * S, S * 0.65, 0, TAU); g.fill(); }
      else if(ch === '"'){ g.fillStyle = 'rgba(40,90,25,.35)'; g.fillRect(c * S, r * S, S, S); }
      else if(ch === '~'){ g.fillStyle = '#4B5E2E'; g.fillRect(c * S - 4, r * S - 4, S + 8, S + 8); }
    }
    g.filter = 'none';
    // spawn pads in team colours
    for(let r = 0; r < A.H; r++) for(let c = 0; c < A.W; c++){
      const ch = A.rows[r][c]; if(ch !== 'b' && ch !== 'r') continue;
      g.strokeStyle = ch === 'b' ? 'rgba(80,190,255,.85)' : 'rgba(255,90,90,.85)'; g.lineWidth = 4;
      g.beginPath(); g.arc((c + 0.5) * S, (r + 0.5) * S, S * 0.38, 0, TAU); g.stroke();
    }
  });
  tex.anisotropy = 8;
  // the floor dips under ponds, so it is a displaced grid rather than a flat quad
  const seg = 0.8, gx = Math.round(A.W * TILE / seg), gz = Math.round(A.H * TILE / seg);
  const geo = new THREE.PlaneGeometry(A.W * TILE, A.H * TILE, gx, gz); geo.rotateX(-Math.PI / 2);
  const p = geo.attributes.position;
  for(let i = 0; i < p.count; i++){
    const x = p.getX(i), z = p.getZ(i);
    let d = 0; // depth: distance into a pond
    for(const [dx, dz] of [[0, 0], [0.35, 0], [-0.35, 0], [0, 0.35], [0, -0.35]]) if(tileAtXZ(x + dx, z + dz) === '~') d += 0.2;
    p.setY(i, -d * 0.7);
  }
  geo.computeVertexNormals();
  const floor = new THREE.Mesh(geo, stdMat({ map:tex, roughness:0.95 }));
  floor.receiveShadow = true; A.group.add(floor);
  // the ground outside the fence: a big tiling grass texture that fades into fog
  const outTex = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#5E9E3A'; g.fillRect(0, 0, w, h);
    for(let i = 0; i < 1400; i++){ const x = rand(0, w), y = rand(0, h); g.strokeStyle = pick(['rgba(40,100,30,.5)', 'rgba(120,190,70,.45)', 'rgba(70,130,40,.5)']); g.lineWidth = rand(1, 2); g.beginPath(); g.moveTo(x, y); g.lineTo(x + rand(-2, 2), y - rand(3, 8)); g.stroke(); }
  }, { repeat:true });
  outTex.repeat.set(40, 40);
  const outer = new THREE.Mesh(new THREE.PlaneGeometry(260, 260), stdMat({ map:outTex, roughness:1 }));
  outer.rotation.x = -Math.PI / 2; outer.position.y = -0.02; outer.receiveShadow = true; A.group.add(outer);
}

function hedgeMat(){
  if(!A.shared.hedge){ A.shared.hedge = triplanar(stdMat({ map:leafTex(), vertexColors:true, roughness:0.85, color:'#E8FFD8' }), 0.55); }
  return A.shared.hedge;
}
export const HEDGE_H = 2.6;
function buildHedges(){
  const geos = [], used = new Set(), W = A.W, H = A.H;
  const isH = (c, r) => tileAt(c, r) === '#';
  // horizontal runs first, then vertical runs of what's left; single tiles become cubes
  for(let r = 0; r < H; r++) for(let c = 0; c < W; c++){
    if(!isH(c, r) || used.has(r * W + c)) continue;
    let e = c; while(isH(e + 1, r)) e++;
    if(e > c){ for(let k = c; k <= e; k++) used.add(r * W + k); addBlock(geos, tileX(c) - TILE / 2, tileZ(r) - TILE / 2, (e - c + 1) * TILE, TILE); }
  }
  for(let c = 0; c < W; c++) for(let r = 0; r < H; r++){
    if(!isH(c, r) || used.has(r * W + c)) continue;
    let e = r; while(isH(c, e + 1) && !used.has((e + 1) * W + c)) e++;
    for(let k = r; k <= e; k++) used.add(k * W + c);
    addBlock(geos, tileX(c) - TILE / 2, tileZ(r) - TILE / 2, TILE, (e - r + 1) * TILE);
  }
  // the fence around the arena
  const hx = A.hx, hz = A.hz, t = 1.3;
  addBlock(geos, -hx - t, -hz - t, A.W * TILE + 2 * t, t, 3.0);
  addBlock(geos, -hx - t, hz, A.W * TILE + 2 * t, t, 3.0);
  addBlock(geos, -hx - t, -hz, t, A.H * TILE, 3.0);
  addBlock(geos, hx, -hz, t, A.H * TILE, 3.0);
  const m = new THREE.Mesh(mergeGeometries(geos), hedgeMat());
  m.castShadow = m.receiveShadow = true; A.group.add(m);
  geos.forEach(g => g.dispose());
  // a few leafy tufts and flowers on top so the walls read as living bushes
  const tufts = [];
  for(let r = 0; r < H; r++) for(let c = 0; c < W; c++) if(isH(c, r) && Q.level === 'high' && rand() < 0.3) tufts.push({ x:tileX(c) + rand(-0.4, 0.4), y:HEDGE_H - 0.3, z:tileZ(r) + rand(-0.4, 0.4), rot:rand(0, TAU), s:rand(0.32, 0.42) });
  instanceModel('Bush_Common', tufts, () => leafMat('#4FA23A'), { cast:false });
}
function addBlock(geos, x0, z0, sx, sz, h = HEDGE_H){
  const g = hedgeGeo(sx - 0.06, h, sz - 0.06, rand(0, 100));
  g.translate(x0 + sx / 2, 0, z0 + sz / 2); geos.push(g);
}

function leafMat(color){
  const key = 'leaf' + color;
  if(!A.shared[key]){
    const map = NATURE.Bush_Common.parts[0].map;
    A.shared[key] = windify(stdMat({ map, color, alphaTest:0.45, side:THREE.DoubleSide, roughness:0.8 }), 1.6, 0.05, false);
  }
  return A.shared[key];
}

function buildCover(){
  const rocks = [[], [], []], stumps = [];
  for(let r = 0; r < A.H; r++) for(let c = 0; c < A.W; c++){
    const ch = A.rows[r][c], x = tileX(c), z = tileZ(r);
    if(ch === 'R'){ const k = (r * 7 + c * 3) % 3; rocks[k].push({ x, z, y:-0.05, rot:rand(0, TAU), s:0.56 }); }
    if(ch === 'T') stumps.push({ x, z, rot:rand(0, TAU), s:rand(0.95, 1.05) });
  }
  const rockMat = stdMat({ map:NATURE.Rock_Medium_1.parts[0].map, roughness:0.9, color:'#D8E0D0' });
  rocks.forEach((list, i) => instanceModel('Rock_Medium_' + (i + 1), list, () => rockMat, { cast:true }));
  // stumps: lathe with bark, rings on top
  const { side, top } = stumpGeo();
  const bark = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = '#6B4A2E'; g.fillRect(0, 0, w, h);
    for(let i = 0; i < 40; i++){ const x = rand(0, w); g.strokeStyle = pick(['#4E3420', '#7E5A38', '#5A3D25']); g.lineWidth = rand(2, 6); g.beginPath(); g.moveTo(x, 0); g.bezierCurveTo(x + rand(-8, 8), h * 0.3, x + rand(-8, 8), h * 0.7, x + rand(-4, 4), h); g.stroke(); }
  }, { repeat:true });
  bark.repeat.set(3, 1);
  const rings = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = '#E2B97A'; g.fillRect(0, 0, w, h);
    for(let r = 4; r < 64; r += rand(4, 7)){ g.strokeStyle = `rgba(150,95,45,${rand(0.35, 0.7)})`; g.lineWidth = rand(1, 2.5); g.beginPath(); g.arc(64 + rand(-1, 1), 64 + rand(-1, 1), r, 0, TAU); g.stroke(); }
    g.strokeStyle = '#6B4A2E'; g.lineWidth = 8; g.beginPath(); g.arc(64, 64, 62, 0, TAU); g.stroke();
  });
  const mk = (geo, mat) => {
    const im = new THREE.InstancedMesh(geo, mat, stumps.length);
    stumps.forEach((t, i) => { tmpQ.setFromAxisAngle(UP, t.rot); tmpM.compose(tmpP.set(t.x, 0, t.z), tmpQ, tmpS.setScalar(t.s)); im.setMatrixAt(i, tmpM); });
    im.castShadow = im.receiveShadow = true; A.group.add(im);
  };
  if(stumps.length){ mk(side, stdMat({ map:bark, roughness:0.9 })); mk(top, stdMat({ map:rings, roughness:0.8 })); }
}

export let grassMeshes = [];
// a tile-sized tuft of tall blades: tapered, bent, dark at the root and bright at the tip (vertex colours)
function grassPatchGeo(n){
  const pos = [], col = [], nor = [], idx = [];
  const c0 = new THREE.Color(), c1 = new THREE.Color();
  for(let i = 0; i < n; i++){
    const x = rand(-0.82, 0.82), z = rand(-0.82, 0.82), h = rand(1.15, 1.65), w = rand(0.08, 0.13), a = rand(0, TAU), lean = rand(0.15, 0.45), la = rand(0, TAU);
    const ca = Math.cos(a), sa = Math.sin(a);
    c0.setHSL(rand(0.27, 0.31), rand(0.6, 0.75), rand(0.1, 0.15)); c1.setHSL(rand(0.22, 0.28), rand(0.6, 0.8), rand(0.3, 0.4));
    const base = pos.length / 3;
    const segs = [[0, 1], [0.45, 0.8], [0.8, 0.45], [1, 0]];
    for(const [t, wk] of segs){
      const bx = x + Math.cos(la) * lean * t * t, bz = z + Math.sin(la) * lean * t * t, y = h * t * (1 - lean * lean * 0.3 * t);
      const k = t === 1 ? 0 : 1;
      for(const s of k ? [-1, 1] : [0]){
        pos.push(bx + ca * w * wk * s * 0.5, y, bz + sa * w * wk * s * 0.5);
        const c = c0.clone().lerp(c1, Math.pow(t, 0.8)); col.push(c.r, c.g, c.b);
        nor.push(-sa * 0.7, 0.5, ca * 0.7);
      }
    }
    // verts: 0,1 | 2,3 | 4,5 | 6 (tip)
    idx.push(base, base + 1, base + 3, base, base + 3, base + 2, base + 2, base + 3, base + 5, base + 2, base + 5, base + 4, base + 4, base + 5, base + 6);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  return g;
}
function buildGrass(){
  const n = Q.level === 'high' ? 70 : 46;
  const geos = [grassPatchGeo(n), grassPatchGeo(n), grassPatchGeo(n)];
  const mat = windify(stdMat({ vertexColors:true, roughness:1, side:THREE.DoubleSide, envMapIntensity:0.5 }), 1.6, 0.12, true);
  grassMeshes = [];
  geos.forEach((geo, k) => {
    const tiles = A.grassTiles.filter((t, i) => i % 3 === k);
    if(!tiles.length) return;
    const im = new THREE.InstancedMesh(geo, mat, tiles.length);
    tiles.forEach(([c, r], i) => { tmpQ.setFromAxisAngle(UP, Math.floor(rand(0, 4)) * Math.PI / 2); tmpM.compose(tmpP.set(tileX(c), 0, tileZ(r)), tmpQ, tmpS.set(1, rand(0.92, 1.08), 1)); im.setMatrixAt(i, tmpM); });
    im.receiveShadow = true; im.computeBoundingSphere(); A.group.add(im); grassMeshes.push(im);
  });
}

function buildWater(){
  const list = [];
  for(let r = 0; r < A.H; r++) for(let c = 0; c < A.W; c++) if(A.rows[r][c] === '~') list.push([c, r]);
  if(!list.length) return;
  const geos = list.map(([c, r]) => { const g = new THREE.PlaneGeometry(TILE + 0.5, TILE + 0.5); g.rotateX(-Math.PI / 2); g.translate(tileX(c), -0.16, tileZ(r)); return g; });
  const mat = stdMat({ color:'#4FB5C8', roughness:0.12, metalness:0.1, transparent:true, opacity:0.82 });
  mat.onBeforeCompile = sh => {
    sh.uniforms.uTime = U.time;
    sh.vertexShader = 'varying vec3 vWP2;\n' + sh.vertexShader.replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\n vWP2 = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = 'uniform float uTime; varying vec3 vWP2;\n' + sh.fragmentShader.replace('#include <map_fragment>', `
      float rip = sin(vWP2.x * 5.0 + uTime * 1.6) * sin(vWP2.z * 4.3 - uTime * 1.2) + sin((vWP2.x + vWP2.z) * 7.0 + uTime * 2.3) * 0.5;
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.85, 1.0, 1.0), smoothstep(0.9, 1.4, rip) * 0.5);`);
  };
  const m = new THREE.Mesh(mergeGeometries(geos), mat); m.receiveShadow = true; A.group.add(m);
  // lily pads
  const pads = list.filter(() => rand() < 0.7).map(([c, r]) => ({ x:tileX(c) + rand(-0.4, 0.4), y:-0.14, z:tileZ(r) + rand(-0.4, 0.4), rot:rand(0, TAU), s:rand(0.5, 0.7) }));
  instanceModel('Plant_1', pads.map(p => Object.assign(p, { sy:0.25 })), () => leafMat('#6DBB4A'));
}

function buildDecor(){
  const flowers = [], shortGrass = [], pebbles = [], clover = [];
  for(let r = 0; r < A.H; r++) for(let c = 0; c < A.W; c++){
    const ch = A.rows[r][c], x = tileX(c), z = tileZ(r);
    if(ch === ',') flowers.push({ x:x + rand(-0.3, 0.3), z:z + rand(-0.3, 0.3), rot:rand(0, TAU), s:rand(0.32, 0.4) });
    if(ch === '.' && rand() < 0.22) shortGrass.push({ x:x + rand(-0.6, 0.6), z:z + rand(-0.6, 0.6), rot:rand(0, TAU), s:rand(0.3, 0.42), color:new THREE.Color().setHSL(rand(0.23, 0.29), 0.6, rand(0.42, 0.5)) });
    if(ch === '.' && rand() < 0.06) pebbles.push({ x:x + rand(-0.6, 0.6), z:z + rand(-0.6, 0.6), rot:rand(0, TAU), s:rand(0.4, 0.7) });
    if(ch === '.' && rand() < 0.05) clover.push({ x:x + rand(-0.6, 0.6), z:z + rand(-0.6, 0.6), rot:rand(0, TAU), s:rand(0.35, 0.5) });
  }
  const gm = windify(stdMat({ map:NATURE.Grass_Common_Short.parts[0].map, roughness:0.9, side:THREE.DoubleSide, color:'#A8E07A' }), 1.3, 0.06, true);
  instanceModel('Grass_Common_Short', shortGrass, () => gm);
  instanceModel('Flower_3_Group', flowers, p => p.matName === 'Flowers' ? flowerMat() : leafMat2('#5DB043'));
  const pm = stdMat({ map:NATURE.Pebble_Round_1.parts[0].map, roughness:0.9 });
  instanceModel('Pebble_Round_1', pebbles, () => pm);
  instanceModel('Clover_1', clover, () => leafMat2('#5AAE42'));
}
function flowerMat(){ return A.shared.fl || (A.shared.fl = windify(stdMat({ map:NATURE.Flower_3_Group.parts.find(p => p.matName === 'Flowers').map, alphaTest:0.4, side:THREE.DoubleSide, roughness:0.7 }), 2, 0.05, true)); }
function leafMat2(color){
  const key = 'leaves' + color;
  if(!A.shared[key]){ const part = NATURE.Fern_1.parts[0]; A.shared[key] = windify(stdMat({ map:part.map, color, alphaTest:0.4, side:THREE.DoubleSide, roughness:0.8 }), 2, 0.05, true); }
  return A.shared[key];
}

function buildOutside(){
  // a forest ring: trees far enough out that the follow camera never ends up inside one
  const trees = { CommonTree_3:[], Pine_1:[] }, bushes = [], ferns = [], mush = [], flowers = [];
  const n = Q.level === 'high' && !TOUCH ? 30 : 18;
  const out = (x, z, m) => Math.abs(x) > A.hx + m || Math.abs(z) > A.hz + m;
  for(let i = 0, tries = 0; i < n && tries < 2000; tries++){
    const a = rand(0, TAU), d = rand(0, 1), x = Math.sin(a) * (A.hx + 9 + d * 16), z = Math.cos(a) * (A.hz + 9 + d * 14);
    if(!out(x, z, 8.5)) continue;
    const k = rand() < 0.55 ? 'CommonTree_3' : 'Pine_1';
    trees[k].push({ x, z, rot:rand(0, TAU), s:rand(0.85, 1.25) * (k === 'Pine_1' ? 1.1 : 1), color:new THREE.Color().setHSL(rand(0.22, 0.32), rand(0.45, 0.65), rand(0.36, 0.48)) }); i++;
  }
  for(let i = 0, N = Q.level === 'high' && !TOUCH ? 56 : 34; i < N; i++){
    const side = Math.floor(rand(0, 4)), t = rand(-1, 1), m = rand(1.8, 7);
    const x = side < 2 ? t * (A.hx + 4) : (side === 2 ? -1 : 1) * (A.hx + m), z = side < 2 ? (side === 0 ? -1 : 1) * (A.hz + m) : t * (A.hz + 4);
    const r = rand();
    if(r < 0.4) bushes.push({ x, z, rot:rand(0, TAU), s:rand(0.7, 1.2), color:new THREE.Color().setHSL(rand(0.22, 0.3), 0.55, rand(0.38, 0.48)) });
    else if(r < 0.65) ferns.push({ x, z, rot:rand(0, TAU), s:rand(0.18, 0.26) });
    else if(r < 0.78) mush.push({ x, z, rot:rand(0, TAU), s:rand(0.9, 1.6) });
    else flowers.push({ x, z, rot:rand(0, TAU), s:rand(0.5, 0.7) });
  }
  const bark = stdMat({ map:NATURE.CommonTree_3.parts.find(p => /Bark/.test(p.matName)).map, roughness:0.9 });
  const leaves = name => windify(stdMat({ map:NATURE[name].parts.find(p => /Lea/.test(p.matName)).map, alphaTest:0.45, side:THREE.DoubleSide, roughness:0.8, color:'#FFFFFF' }), 8, 0.12, false);
  const shadows = false;
  for(const k in trees){ const lm = leaves(k); instanceModel(k, trees[k], p => /Bark/.test(p.matName) ? bark : lm, { cast:shadows }); }
  instanceModel('Bush_Common', bushes, () => windify(stdMat({ map:NATURE.Bush_Common.parts[0].map, alphaTest:0.45, side:THREE.DoubleSide, roughness:0.8 }), 1.6, 0.05, false));
  instanceModel('Fern_1', ferns, () => leafMat2('#4E9E38'));
  const mm = stdMat({ map:NATURE.Mushroom_Common.parts[0].map, roughness:0.7 });
  instanceModel('Mushroom_Common', mush, () => mm);
  instanceModel('Flower_3_Group', flowers, p => p.matName === 'Flowers' ? flowerMat() : leafMat2('#5DB043'));
}
