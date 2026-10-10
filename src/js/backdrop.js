// What lies beyond the hedges: giant mushrooms over the treeline, strange light rising from somewhere behind the
// fence, eyes blinking between the trees and fireflies. Two draw calls for the giants, one for the light columns.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { scene, Q } from './engine.js';
import { A } from './arena.js';
import { glow } from './fx.js';
import { rand, seeded, TAU } from './util.js';

let group = null;
const U = { t:{ value:0 } };
const sources = [];   // where the mysterious light comes from
const eyes = [];

function paint(g, color){
  const c = new THREE.Color(color), n = g.attributes.position.count, a = new Float32Array(n * 3);
  for(let i = 0; i < n; i++){ a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3));
  return g;
}
const xf = (g, x, y, z, sx = 1, sy = sx, sz = sx, rx = 0, rz = 0) => {
  g.applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, 0, rz)), new THREE.Vector3(sx, sy, sz)));
  return g;
};

// one giant: a bent stem, a cap, gills underneath; bioluminescent kinds glow
function giant(body, lights, o){
  const { x, z, h, r, cap, stem, glowCol, spots } = o;
  const lean = o.lean || 0;
  // stem: a lathe that bends as it rises
  const pts = []; for(let i = 0; i <= 8; i++){ const k = i / 8; pts.push(new THREE.Vector2(r * (0.16 + 0.1 * (1 - k) + (k < 0.12 ? 0.12 * (1 - k / 0.12) : 0)), k * h)); }
  const sg = new THREE.LatheGeometry(pts, 12);
  const p = sg.attributes.position;
  for(let i = 0; i < p.count; i++){ const k = p.getY(i) / h; p.setX(i, p.getX(i) + lean * k * k * h * 0.25); }
  sg.computeVertexNormals();
  body.push(paint(xf(sg, x, 0, z), stem));
  // a frilly ring on the stem
  body.push(paint(xf(new THREE.TorusGeometry(r * 0.28, r * 0.06, 6, 16), x + lean * 0.62 * 0.62 * h * 0.25, h * 0.62, z, 1, 1, 0.6, Math.PI / 2), stem));
  const cx = x + lean * h * 0.25, cy = h;
  // cap: a squashed dome with a rolled rim, gills underneath
  body.push(paint(xf(new THREE.SphereGeometry(r, 20, 8, 0, TAU, 0, Math.PI / 2), cx, cy - r * 0.08, z, 1, o.flat || 0.55, 1, o.tilt || 0, (o.tilt || 0) * 0.6), cap));
  const gills = paint(xf(new THREE.CircleGeometry(r * 0.98, 20), cx, cy - r * 0.08, z, 1, 1, 1, Math.PI / 2 + (o.tilt || 0)), glowCol || '#E8D6B0');
  (glowCol ? lights : body).push(gills);
  if(spots){
    for(let i = 0; i < spots; i++){
      const a = rand(0, TAU), el = rand(0.25, 1.2), sx = Math.cos(a) * Math.cos(el) * r, sy = Math.sin(el) * r * (o.flat || 0.55), sz = Math.sin(a) * Math.cos(el) * r;
      const s = rand(0.06, 0.12) * r, g = xf(new THREE.SphereGeometry(1, 8, 5), cx + sx, cy - r * 0.08 + sy, z + sz, s, s * 0.35, s);
      (o.glowSpots ? lights : body).push(paint(g, o.glowSpots ? glowCol : '#FFF6E6'));
    }
  }
  // glowing beads spiralling up the stem
  if(glowCol) for(let i = 0; i < 9; i++){ const k = 0.08 + i * 0.09, a = i * 1.9; lights.push(paint(xf(new THREE.SphereGeometry(r * 0.035, 6, 4), x + lean * k * k * h * 0.25 + Math.cos(a) * r * 0.22, k * h, z + Math.sin(a) * r * 0.22), glowCol)); }
  if(glowCol) sources.push({ x:cx, y:cy - r * 0.2, z, r, col:new THREE.Color(glowCol), spore:true });
}

export function buildBackdrop(){
  if(group){ scene.remove(group); group.traverse(o => o.geometry && o.geometry.dispose()); }
  sources.length = 0; eyes.length = 0;
  group = new THREE.Group(); scene.add(group);
  const body = [], lights = [];
  seeded(4242, () => {
    const hx = A.hx, hz = A.hz;
    // a classic fly agaric against the sunset, a bolete, and bioluminescent ones on the dusky side
    giant(body, lights, { x:-hx - 30, z:4, h:26, r:9.5, cap:'#C8322A', stem:'#EADCC4', spots:22, lean:0.35, tilt:0.08 });
    giant(body, lights, { x:-hx - 22, z:-hz - 22, h:19, r:7, cap:'#8A5230', stem:'#D9C6A0', lean:-0.4, flat:0.62 });
    giant(body, lights, { x:hx + 28, z:-hz - 10, h:21, r:7.5, cap:'#2E6E8E', stem:'#CFE6EE', glowCol:'#5FE8FF', spots:14, glowSpots:true, lean:0.5, tilt:-0.1 });
    giant(body, lights, { x:hx + 24, z:hz + 18, h:15, r:5.5, cap:'#5B3A86', stem:'#E6DAF2', glowCol:'#C68BFF', spots:10, glowSpots:true, lean:-0.6 });
    giant(body, lights, { x:hx + 33, z:hz + 26, h:10, r:3.8, cap:'#6B3F96', stem:'#E6DAF2', glowCol:'#C68BFF', lean:0.8 });
    giant(body, lights, { x:-6, z:hz + 40, h:23, r:8, cap:'#B23A2E', stem:'#EADCC4', spots:18, lean:-0.25, flat:0.5 });
    giant(body, lights, { x:10, z:-hz - 38, h:17, r:6, cap:'#2F7A6E', stem:'#D6EEE6', glowCol:'#7DFFC8', spots:12, glowSpots:true, lean:0.3 });
  });
  const bm = new THREE.Mesh(mergeGeometries(body), new THREE.MeshLambertMaterial({ vertexColors:true }));
  const lm = new THREE.Mesh(mergeGeometries(lights), new THREE.MeshBasicMaterial({ vertexColors:true, fog:false, toneMapped:false, color:new THREE.Color(1.6, 1.6, 1.6) }));
  body.forEach(g => g.dispose()); lights.forEach(g => g.dispose());
  group.add(bm, lm);
  buildLightColumns();
  buildEyes();
}

// columns of soft light rising from places behind the hedges you can't see into
function buildLightColumns(){
  const hx = A.hx, hz = A.hz;
  const spots = [[-hx - 7, -7, '#B98BFF'], [hx + 8, 8, '#6FF0FF'], [5, -hz - 8, '#FFD27A'], [-4, hz + 9, '#8CFFB0']];
  const geos = [];
  for(const [x, z, col] of spots){
    const g = new THREE.CylinderGeometry(2.2, 3.4, 16, 18, 1, true); g.translate(x, 8, z);
    const n = g.attributes.position.count, ph = new Float32Array(n).fill(rand(0, TAU));
    g.setAttribute('aPh', new THREE.BufferAttribute(ph, 1));
    geos.push(paint(g, col));
    sources.push({ x, y:0.5, z, r:2.5, col:new THREE.Color(col), column:true });
  }
  const mat = new THREE.ShaderMaterial({ transparent:true, depthWrite:false, blending:THREE.AdditiveBlending, side:THREE.DoubleSide, fog:false, uniforms:U,
    vertexShader:`attribute float aPh; attribute vec3 color; varying vec3 vC; varying float vY; varying float vPh; varying vec3 vN; varying vec3 vV;
      void main(){ vC = color; vY = uv.y; vPh = aPh; vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz);
        gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader:`uniform float t; varying vec3 vC; varying float vY; varying float vPh; varying vec3 vN; varying vec3 vV;
      void main(){ float edge = pow(1.0 - abs(dot(vN, vV)), 1.5);
        float pulse = 0.65 + 0.35 * sin(t * 0.8 + vPh) * sin(t * 1.7 + vPh * 2.0);
        float a = pow(1.0 - vY, 1.6) * (0.35 + 0.65 * (1.0 - edge)) * 0.75 * pulse;
        gl_FragColor = vec4(vC * a, a);
        #include <colorspace_fragment>
      }` });
  const m = new THREE.Mesh(mergeGeometries(geos), mat); m.renderOrder = 4; m.frustumCulled = false;
  geos.forEach(g => g.dispose());
  group.add(m);
}

// pairs of eyes that open between the trees now and then
function buildEyes(){
  const geo = new THREE.SphereGeometry(0.09, 8, 6);
  for(let i = 0; i < 3; i++){
    const g = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({ color:new THREE.Color('#FFE36A').multiplyScalar(2), fog:false, toneMapped:false, transparent:true, opacity:0 });
    for(const s of [-1, 1]){ const e = new THREE.Mesh(geo, mat); e.position.x = s * 0.17; e.scale.y = 0.6; g.add(e); }
    group.add(g);
    eyes.push({ g, mat, t:rand(2, 8), on:0 });
  }
}
function placeEyes(e){
  const side = Math.floor(rand(0, 4)), d = rand(4, 9), u = rand(-0.8, 0.8);
  const x = side < 2 ? u * A.hx : (side === 2 ? -1 : 1) * (A.hx + d), z = side < 2 ? (side === 0 ? -1 : 1) * (A.hz + d) : u * A.hz;
  e.g.position.set(x, rand(0.8, 2.2), z);
  e.g.lookAt(0, e.g.position.y, 0);
}

export function updateBackdrop(dt, t){
  if(!group) return;
  U.t.value = t;
  // spores drift up from the glowing places; fireflies wander near the hedges
  const rate = Q.level === 'high' ? 1 : 0.5;
  for(const s of sources){
    if(Math.random() > dt * (s.column ? 5 : 3) * rate) continue;
    const r = s.r * (s.column ? 1 : 0.8), a = rand(0, TAU), q = rand(0, 1);
    glow.emit({ x:s.x + Math.cos(a) * r * q, y:s.y + (s.column ? rand(0, 3) : 0), z:s.z + Math.sin(a) * r * q, vx:rand(-0.2, 0.2), vy:rand(0.6, 1.4), vz:rand(-0.2, 0.2),
      life:rand(3, 5), t:0, s0:s.column ? 0.25 : 0.6, s1:0.05, r:s.col.r * 1.4, g:s.col.g * 1.4, b:s.col.b * 1.4, a:0.9, grav:0, drag:0.2, soft:1 });
  }
  if(Math.random() < dt * 2.5 * rate){
    const x = rand(-A.hx, A.hx), z = rand(-A.hz, A.hz);
    glow.emit({ x, y:rand(0.6, 2.4), z, vx:rand(-0.3, 0.3), vy:rand(-0.05, 0.15), vz:rand(-0.3, 0.3), life:rand(2.5, 4), t:0, s0:0.12, s1:0.12, r:1.4, g:1.3, b:0.5, a:0.9, grav:0, drag:0.1, soft:1 });
  }
  for(const e of eyes){
    e.t -= dt;
    if(e.t <= 0){
      if(e.on > 0){ e.on = 0; e.t = rand(4, 10); }
      else { placeEyes(e); e.on = rand(2, 4); e.t = e.on; }
    }
    // open slowly, blink once in a while, close
    const k = e.on > 0 ? Math.min(1, (e.on - e.t) / 0.4, e.t / 0.4) : 0;
    const blink = e.on > 0 && Math.sin(t * 7 + e.on * 10) > 0.97 ? 0.1 : 1;
    e.mat.opacity = k;
    e.g.children.forEach(c => { c.scale.y = 0.6 * blink * Math.max(0.05, k); });
  }
}
