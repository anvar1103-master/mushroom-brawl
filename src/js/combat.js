// Fighters, movement, attacks, projectiles, damage, supers and visibility (tall grass hides you).
import * as THREE from 'three';
import { scene } from './engine.js';
import { G, emit, isEnemy } from './state.js';
import { HEROES, AMMO } from './heroes.js';
import { makeVisual, animate, kick, setTeamLook } from './anim.js';
import { collide, segHit, inGrass, A, blocksMove, tileAtXZ } from './arena.js';
import { glow, smoke, puff, explosion, hitSpark, sporeBurst, dmgNumber, dust, ring } from './fx.js';
import { clamp, rand, TAU, lerp } from './util.js';
import { sfx } from './audio.js';

export const SHOT_Y = 0.75;
export const REGEN_DELAY = 3, REGEN_RATE = 0.13;
const RESPAWN = 3, SPAWN_SHIELD = 1.6;
let FID = 0;

export function newInput(){ return { mx:0, mz:0, aim:0, tx:0, tz:0, fire:false, sup:false, aiming:false }; }
export function makeFighter(o){
  const H = HEROES[o.hero];
  const f = { id:++FID, name:o.name, team:o.team, hero:o.hero, H, isMe:!!o.isMe, bot:null, level:o.level || 1,
    x:0, z:0, vx:0, vz:0, kx:0, kz:0, aim:o.team === 0 ? Math.PI : 0,
    alive:false, hp:H.hp, max:H.hp, ammo:AMMO, cdT:0, charge:0, regenT:0, spawnT:0, shieldT:0, deadT:0, respawnT:0.01,
    atkT:9, supT:9, flash:0, stunT:0, revealT:0, inGrass:false, gems:0, kills:0, deaths:0, dmgDone:0, lastHitBy:null,
    pendingBeam:null, inp:newInput(), V:null, tag:null, victory:false, defeat:false };
  // levels add a little power (progression): +5% hp and damage per level above 1
  f.pow = 1 + (f.level - 1) * 0.05;
  f.max = f.hp = Math.round(H.hp * f.pow);
  f.V = makeVisual(o.hero); f.V.root.visible = false; scene.add(f.V.root);
  G.fighters.push(f);
  return f;
}
export function removeFighters(){
  for(const f of G.fighters){ scene.remove(f.V.root); f.V.mesh.geometry.dispose(); f.V.mat.dispose(); if(f.tag) f.tag.el.remove(); }
  G.fighters.length = 0; G.me = null;
}
export function lookFor(f){ return f === G.me ? 'me' : G.me && f.team === G.me.team ? 'ally' : 'foe'; }

export function spawn(f, at){
  const list = A.spawns[f.team];
  const p = at || list[(f.slot ?? 0) % list.length];
  f.x = p.x; f.z = p.z; f.vx = f.vz = f.kx = f.kz = 0;
  f.alive = true; f.hp = f.max; f.ammo = AMMO; f.cdT = 0; f.deadT = 0; f.spawnT = 0; f.shieldT = SPAWN_SHIELD; f.regenT = 0;
  f.aim = f.team === 0 ? Math.PI : 0; f.V.yaw = f.aim; f.atkT = f.supT = 9; f.pendingBeam = null; f.stunT = 0; f.gems = 0;
  f.V.root.visible = true; f.V.root.scale.setScalar(1);
  setTeamLook(f.V, lookFor(f));
  kick.spawn(f.V);
  f.V.root.position.set(f.x, 0, f.z);
  puff(glow, f.x, 0.3, f.z, { n:18, color:lookFor(f) === 'foe' ? '#FF7A6A' : '#8FE0FF', sp:1.5, upMin:0.6, upMax:1, vy:3, life:0.7, s0:0.25, s1:0.05, drag:1.5, soft:true });
  ring(f.x, f.z, 0.2, 1.3, 0.5, lookFor(f) === 'foe' ? '#FF5A4A' : '#6FD8FF');
  emit('spawn', f);
}

// ---------------- visibility: tall grass hides you unless an enemy is close, or you just attacked or got hit ----------------
export const REVEAL_R = 3.2;
export function visibleTo(team, f){
  if(f.team === team) return true;
  if(!f.alive) return true;
  if(!f.inGrass || f.revealT > 0) return true;
  for(const o of G.fighters) if(o.alive && o.team === team && (o.x - f.x) ** 2 + (o.z - f.z) ** 2 < REVEAL_R * REVEAL_R) return true;
  return false;
}

// ---------------- per-frame fighter update ----------------
const P = { x:0, z:0 };
export function stepFighter(f, dt){
  if(!f.alive){
    f.deadT += dt;
    if(G.match && G.match.respawn && !G.match.over){ f.respawnT -= dt; if(f.respawnT <= 0) spawn(f); }
    return;
  }
  const H = f.H, inp = f.inp;
  f.spawnT += dt; f.atkT += dt; f.supT += dt; f.regenT += dt;
  f.shieldT = Math.max(0, f.shieldT - dt); f.revealT = Math.max(0, f.revealT - dt); f.flash = Math.max(0, f.flash - dt * 6);
  f.cdT = Math.max(0, f.cdT - dt); f.stunT = Math.max(0, f.stunT - dt);
  // charges come back one by one
  if(f.ammo < AMMO){ f.ammo = Math.min(AMMO, f.ammo + dt / H.attack.reload); if(f.ammo >= AMMO && f.isMe) emit('ammoFull', f); }
  // heal up after a few seconds out of the fight
  if(f.regenT > REGEN_DELAY && f.hp < f.max){ const h = Math.min(f.max - f.hp, f.max * REGEN_RATE * dt); f.hp += h; f.healAcc = (f.healAcc || 0) + h; if(f.healAcc > 400){ if(f === G.me) dmgNumber(f.x, H.height + 0.3, f.z, f.healAcc, 'heal'); f.healAcc = 0; } }
  // movement with a short acceleration ramp
  const frozen = G.state !== 'play' || f.stunT > 0 || f.pendingBeam;
  let mx = frozen ? 0 : inp.mx, mz = frozen ? 0 : inp.mz; const ml = Math.hypot(mx, mz); if(ml > 1){ mx /= ml; mz /= ml; }
  const sp = H.speed * (f.gems > 0 ? 1 : 1);
  const a = 1 - Math.exp(-dt * 18);
  f.vx += (mx * sp - f.vx) * a; f.vz += (mz * sp - f.vz) * a;
  const kd = Math.exp(-dt * 7); f.kx *= kd; f.kz *= kd;
  P.x = f.x + (f.vx + f.kx) * dt; P.z = f.z + (f.vz + f.kz) * dt;
  collide(P, H.rad);
  // fighters gently push each other apart
  for(const o of G.fighters){
    if(o === f || !o.alive) continue;
    const dx = P.x - o.x, dz = P.z - o.z, d2 = dx * dx + dz * dz, r = H.rad + o.H.rad;
    if(d2 < r * r && d2 > 1e-6){ const d = Math.sqrt(d2), k = (r - d) * 0.5 / d; P.x += dx * k; P.z += dz * k; }
  }
  collide(P, H.rad);
  // real velocity after collisions (drives the run animation)
  if(dt > 0){ const rvx = (P.x - f.x) / dt, rvz = (P.z - f.z) / dt; f.vx = lerp(f.vx, rvx, 0.5); f.vz = lerp(f.vz, rvz, 0.5); }
  f.x = P.x; f.z = P.z;
  const g = inGrass(f.x, f.z);
  if(g && !f.inGrass && f.V.root.visible) puff(smoke, f.x, 0.6, f.z, { n:4, color:'#7FC24E', sp:1.2, life:0.5, s0:0.12, s1:0.06, grav:4, drag:1 });
  f.inGrass = g;
  if(Math.hypot(f.vx, f.vz) > 2 && Math.random() < dt * 4 && !f.H.hover && !g) dust(f.x, f.z, 1);
  // aim + attacks
  if(!frozen || f.pendingBeam){ if(!f.pendingBeam) f.aim = inp.aim; }
  if(f.pendingBeam){ f.pendingBeam.t -= dt; if(f.pendingBeam.t <= 0) fireBeam(f); }
  if(!frozen){
    if(inp.sup && f.charge >= 1) doSuper(f, inp.tx, inp.tz);
    else if(inp.fire) doAttack(f, inp.tx, inp.tz);
  }
  inp.fire = inp.sup = false;
}

export function canAttack(f){ return f.alive && f.ammo >= 1 && f.cdT <= 0 && !f.pendingBeam && G.state === 'play'; }
export function muzzlePos(f, out){
  f.V.muzzle.getWorldPosition(out);
  // keep shots at the common shot height so they collide the same for everyone
  out.y = SHOT_Y; return out;
}
const MZ = new THREE.Vector3();

function doAttack(f, tx, tz){
  if(!canAttack(f)) { if(f.isMe && f.ammo < 1 && f.cdT <= 0) emit('empty', f); return; }
  const H = f.H, W = H.attack;
  f.ammo -= 1; f.cdT = W.cd; f.atkT = 0; f.regenT = 0; f.revealT = Math.max(f.revealT, 1.0);
  const aim = Math.atan2(tx - f.x, tz - f.z);
  f.aim = aim; f.V.yaw = aim;   // snap so the shot leaves where the hero faces
  kick.attack(f.V);
  fireWeapon(f, W, aim, tx, tz, false);
  emit('attack', f, false);
}
function doSuper(f, tx, tz){
  if(!f.alive || f.pendingBeam || G.state !== 'play') return;
  const H = f.H, S = H.super;
  f.charge = 0; f.supT = 0; f.atkT = 0; f.regenT = 0; f.revealT = Math.max(f.revealT, 1.2);
  const aim = Math.atan2(tx - f.x, tz - f.z);
  f.aim = aim; f.V.yaw = aim;
  kick.super(f.V);
  if(S.kind === 'beam'){ f.pendingBeam = { t:S.windup, aim }; emit('super', f, true); sfx('super', f); return; }
  fireWeapon(f, S, aim, tx, tz, true);
  emit('super', f, false);
  sfx('super', f);
}

function fireWeapon(f, W, aim, tx, tz, isSuper){
  muzzlePos(f, MZ);
  const pow = f.pow;
  if(W.kind === 'fan'){
    for(let i = 0; i < W.count; i++){
      const a = aim + (W.count > 1 ? (i / (W.count - 1) - 0.5) * W.spread : 0) + rand(-0.015, 0.015);
      addShot(f, MZ.x, MZ.z, a, W, W.dmg * pow, isSuper);
    }
    puff(glow, MZ.x, MZ.y, MZ.z, { n:isSuper ? 16 : 8, color:W.color, sp:isSuper ? 7 : 4, vx:Math.sin(aim) * 4, vz:Math.cos(aim) * 4, life:0.22, s0:0.35, s1:0.05, drag:6 });
    puff(smoke, MZ.x, MZ.y, MZ.z, { n:isSuper ? 10 : 5, color:'#F2E8D0', sp:1.5, vx:Math.sin(aim) * 3, vz:Math.cos(aim) * 3, life:0.5, s0:0.18, s1:0.5, drag:4, soft:true, a:0.6 });
    if(isSuper){ f.kx -= Math.sin(aim) * 7; f.kz -= Math.cos(aim) * 7; G.shake = Math.max(G.shake, f.isMe ? 0.5 : 0); }
    sfx(isSuper ? 'boom' : 'shot_shotgun', f);
  } else if(W.kind === 'needle'){
    addShot(f, MZ.x, MZ.z, aim, W, W.dmg * pow, isSuper);
    puff(glow, MZ.x, MZ.y, MZ.z, { n:6, color:W.color, sp:3, life:0.18, s0:0.3, s1:0.05, drag:6 });
    sfx('shot_beam', f, 0.6);
  } else if(W.kind === 'lob'){
    const d = clamp(Math.hypot(tx - f.x, tz - f.z), 1.5, W.range);
    addLob(f, f.x + Math.sin(aim) * d, f.z + Math.cos(aim) * d, W, W.flight * (0.65 + 0.35 * d / W.range), 0, isSuper);
    sfx('shot_throw', f);
  } else if(W.kind === 'barrage'){
    const d = clamp(Math.hypot(tx - f.x, tz - f.z), 3, W.range);
    for(let i = 0; i < W.count; i++){
      const off = (i - (W.count - 1) / 2) * W.step, dd = clamp(d + off, 1.5, W.range + W.step);
      addLob(f, f.x + Math.sin(aim) * dd + rand(-0.3, 0.3), f.z + Math.cos(aim) * dd + rand(-0.3, 0.3), W, W.flight * (0.7 + 0.3 * dd / W.range), i * 0.08, true);
    }
    sfx('shot_throw', f);
  }
}

// ---------------- straight shots ----------------
const shotGeo = new THREE.SphereGeometry(1, 10, 8), needleGeo = new THREE.CapsuleGeometry(0.5, 2.2, 3, 8);
needleGeo.rotateX(Math.PI / 2);
const matCache = {};
const glowMat = (c, k = 2.4) => matCache[c + k] || (matCache[c + k] = new THREE.MeshBasicMaterial({ color:new THREE.Color(c).multiplyScalar(k), toneMapped:false }));
function addShot(f, x, z, a, W, dmg, isSuper){
  const m = new THREE.Mesh(W.kind === 'needle' ? needleGeo : shotGeo, glowMat(W.color, isSuper ? 3 : 2.2));
  m.scale.setScalar(W.size || 0.2); m.position.set(x, SHOT_Y, z); m.rotation.y = a;
  scene.add(m);
  G.shots.push({ owner:f, team:f.team, x, z, x0:f.x, z0:f.z, vx:Math.sin(a) * W.speed, vz:Math.cos(a) * W.speed, range:W.range, dist:0, dmg, W, isSuper, m, knock:W.knock || 0 });
}
function segPointDist2(ax, az, bx, bz, px, pz){
  const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz;
  let t = l2 > 0 ? ((px - ax) * dx + (pz - az) * dz) / l2 : 0; t = clamp(t, 0, 1);
  const qx = ax + dx * t - px, qz = az + dz * t - pz; return qx * qx + qz * qz;
}
export function updateShots(dt){
  for(let i = G.shots.length - 1; i >= 0; i--){
    const s = G.shots[i];
    const step = Math.hypot(s.vx, s.vz) * dt;
    let nx = s.x + s.vx * dt, nz = s.z + s.vz * dt, end = false;
    if(s.dist + step >= s.range){ const k = (s.range - s.dist) / step; nx = s.x + s.vx * dt * k; nz = s.z + s.vz * dt * k; end = true; }
    const wall = segHit(s.x, s.z, nx, nz);
    if(wall >= 0){ nx = s.x + (nx - s.x) * wall; nz = s.z + (nz - s.z) * wall; end = true; hitSpark(nx, SHOT_Y, nz, s.W.color); sfx('hit_wall', { x:nx, z:nz }, 0.35); }
    // fighters along the path
    for(const o of G.fighters){
      if(!o.alive || o.team === s.team) continue;
      const r = o.H.rad + (s.W.size || 0.2) * 0.8;
      if(segPointDist2(s.x, s.z, nx, nz, o.x, o.z) < r * r){
        let dmg = s.dmg;
        if(s.W.dmgFar) dmg = lerp(s.dmg, s.W.dmgFar * s.owner.pow, clamp((s.dist + step) / s.range, 0, 1));
        damage(o, dmg, s.owner, s.isSuper);
        if(s.knock){ const l = Math.hypot(s.vx, s.vz); o.kx += s.vx / l * s.knock * 2.2; o.kz += s.vz / l * s.knock * 2.2; o.stunT = Math.max(o.stunT, 0.25); }
        hitSpark(o.x, SHOT_Y + 0.1, o.z, s.W.color);
        end = true; nx = o.x; nz = o.z; break;
      }
    }
    s.dist += Math.hypot(nx - s.x, nz - s.z);
    s.x = nx; s.z = nz;
    s.m.position.set(nx, SHOT_Y, nz);
    // trail
    if(Math.random() < 0.7) glow.emit({ x:nx, y:SHOT_Y, z:nz, vx:0, vy:0, vz:0, life:s.W.kind === 'needle' ? 0.3 : 0.16, t:0, s0:(s.W.size || 0.2) * (s.W.kind === 'needle' ? 1.6 : 1.4), s1:0.02, r:1, g:0.8, b:0.4, a:0.7, grav:0, drag:0, soft:1 });
    if(end){ scene.remove(s.m); G.shots.splice(i, 1); }
  }
}

// ---------------- lobbed bombs ----------------
const bombGeo = new THREE.SphereGeometry(0.16, 12, 10), bombMat = new THREE.MeshStandardMaterial({ color:'#26262E', roughness:0.35, metalness:0.2 });
const markGeo = new THREE.RingGeometry(0.9, 1, 36); markGeo.rotateX(-Math.PI / 2);
function addLob(f, x1, z1, W, T, delay, isSuper){
  const m = new THREE.Mesh(bombGeo, bombMat); m.castShadow = true;
  const fuse = new THREE.Mesh(shotGeo, glowMat('#FFC04A', 3)); fuse.scale.setScalar(0.05); fuse.position.y = 0.17; m.add(fuse);
  m.visible = false; scene.add(m);
  const mark = new THREE.Mesh(markGeo, new THREE.MeshBasicMaterial({ color:lookFor(f) === 'foe' ? '#FF4A3A' : '#5FC8FF', transparent:true, opacity:0, depthWrite:false }));
  mark.position.set(x1, 0.05, z1); mark.scale.setScalar(W.radius); mark.renderOrder = 3; scene.add(mark);
  // start from the throwing hand
  muzzlePos(f, MZ);
  G.lobs.push({ owner:f, team:f.team, x0:MZ.x, z0:MZ.z, y0:1.0, x1, z1, T, t:-delay, W, isSuper, m, mark, h:2.2 + Math.hypot(x1 - f.x, z1 - f.z) * 0.18 });
}
export function updateLobs(dt){
  for(let i = G.lobs.length - 1; i >= 0; i--){
    const L = G.lobs[i]; L.t += dt;
    if(L.t < 0) continue;
    const k = Math.min(1, L.t / L.T);
    const x = lerp(L.x0, L.x1, k), z = lerp(L.z0, L.z1, k), y = lerp(L.y0, 0.15, k) + Math.sin(k * Math.PI) * L.h;
    L.m.visible = true; L.m.position.set(x, y, z); L.m.rotation.x += dt * 9; L.m.rotation.z += dt * 5;
    L.mark.material.opacity = 0.25 + 0.55 * k; L.mark.scale.setScalar(L.W.radius * (1.25 - 0.25 * k));
    if(Math.random() < 0.6) glow.emit({ x, y:y + 0.17, z, vx:rand(-0.4, 0.4), vy:0.6, vz:rand(-0.4, 0.4), life:0.3, t:0, s0:0.12, s1:0.02, r:1, g:0.75, b:0.3, a:1, grav:0, drag:1, soft:0 });
    if(k >= 1){
      scene.remove(L.m); scene.remove(L.mark); L.mark.material.dispose();
      G.lobs.splice(i, 1);
      blast(L.owner, L.x1, L.z1, L.W, L.isSuper);
    }
  }
}
function blast(owner, x, z, W, isSuper){
  explosion(x, z, W.radius, W.color);
  sfx(isSuper ? 'boom_big' : 'boom', { x, z });
  for(const o of G.fighters){
    if(!o.alive || o.team === owner.team) continue;
    const d = Math.hypot(o.x - x, o.z - z);
    if(d > W.radius + o.H.rad) continue;
    damage(o, W.dmg * owner.pow, owner, isSuper);
    if(W.knock){ const l = d || 1; o.kx += (o.x - x) / l * W.knock * 3; o.kz += (o.z - z) / l * W.knock * 3; o.stunT = Math.max(o.stunT, 0.3); }
  }
  if(W.puddle) addPuddle(owner, x, z, W.puddle);
}

// ---------------- burning puddles ----------------
const puddleGeo = new THREE.CircleGeometry(1, 32); puddleGeo.rotateX(-Math.PI / 2);
const puddleU = { uTime:{ value:0 } };
const puddleMat = new THREE.ShaderMaterial({ transparent:true, depthWrite:false, uniforms:Object.assign({ uK:{ value:1 } }, puddleU),
  vertexShader:'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader:`uniform float uTime; uniform float uK; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
    float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
    void main(){ vec2 p = vUv - 0.5; float d = length(p) * 2.0;
      float e = n(p * 7.0 + uTime * 0.7) * 0.25 + n(p * 15.0 - uTime) * 0.12;
      float a = smoothstep(1.0, 0.82, d + e * 0.6);
      float bub = smoothstep(0.62, 0.8, n(p * 12.0 + vec2(uTime * 0.5, -uTime * 0.8)));
      vec3 col = mix(vec3(0.95, 0.35, 0.05), vec3(1.0, 0.8, 0.25), bub + (1.0 - d) * 0.4);
      gl_FragColor = vec4(col * 1.6, a * 0.78 * uK);
      #include <colorspace_fragment>
    }` });
function addPuddle(owner, x, z, P){
  const m = new THREE.Mesh(puddleGeo, puddleMat.clone()); m.material.uniforms.uTime = puddleU.uTime;
  m.position.set(x, 0.045, z); m.scale.setScalar(0.2); m.renderOrder = 3; scene.add(m);
  G.puddles.push({ owner, team:owner.team, x, z, r:P.r, dps:P.dps * owner.pow, t:0, life:P.t, tick:0, m });
}
export function updatePuddles(dt){
  puddleU.uTime.value += dt;
  for(let i = G.puddles.length - 1; i >= 0; i--){
    const p = G.puddles[i]; p.t += dt; p.tick -= dt;
    const k = p.t / p.life;
    p.m.scale.setScalar(p.r * Math.min(1, p.t / 0.15));
    p.m.material.uniforms.uK.value = k > 0.75 ? (1 - k) / 0.25 : 1;
    if(Math.random() < dt * 14) glow.emit({ x:p.x + rand(-p.r, p.r) * 0.7, y:0.1, z:p.z + rand(-p.r, p.r) * 0.7, vx:0, vy:rand(0.6, 1.4), vz:0, life:0.5, t:0, s0:0.14, s1:0.02, r:1, g:0.6, b:0.15, a:1, grav:0, drag:0.5, soft:1 });
    if(p.tick <= 0){
      p.tick = 0.25;
      for(const o of G.fighters) if(o.alive && o.team !== p.team && (o.x - p.x) ** 2 + (o.z - p.z) ** 2 < (p.r + o.H.rad * 0.5) ** 2) damage(o, p.dps * 0.25, p.owner, false, true);
    }
    if(p.t >= p.life){ scene.remove(p.m); p.m.material.dispose(); G.puddles.splice(i, 1); }
  }
}

// ---------------- the wasp's piercing beam ----------------
const beamGeo = new THREE.CylinderGeometry(1, 1, 1, 12, 1, true); beamGeo.rotateX(Math.PI / 2); beamGeo.translate(0, 0, 0.5);
function fireBeam(f){
  const S = f.H.super, aim = f.pendingBeam.aim; f.pendingBeam = null;
  f.aim = aim;
  muzzlePos(f, MZ);
  const x0 = MZ.x, z0 = MZ.z, x1 = x0 + Math.sin(aim) * S.range, z1 = z0 + Math.cos(aim) * S.range;
  for(const o of G.fighters){
    if(!o.alive || o.team === f.team) continue;
    const r = S.width / 2 + o.H.rad;
    if(segPointDist2(x0, z0, x1, z1, o.x, o.z) < r * r){ damage(o, S.dmg * f.pow, f, true); o.kx += Math.sin(aim) * 6; o.kz += Math.cos(aim) * 6; hitSpark(o.x, SHOT_Y, o.z, S.color); }
  }
  const core = new THREE.Mesh(beamGeo, glowMat('#FFF6C0', 3)), outer = new THREE.Mesh(beamGeo, new THREE.MeshBasicMaterial({ color:new THREE.Color(S.color).multiplyScalar(2), transparent:true, opacity:0.55, depthWrite:false, blending:THREE.AdditiveBlending }));
  for(const m of [core, outer]){ m.position.set(x0, SHOT_Y + 0.05, z0); m.rotation.y = aim; scene.add(m); }
  core.scale.set(0.08, 0.08, S.range); outer.scale.set(S.width * 0.5, S.width * 0.5, S.range);
  G.beams.push({ core, outer, t:0, life:0.45, w:S.width });
  for(let d = 0; d < S.range; d += 0.6) puff(glow, x0 + Math.sin(aim) * d, SHOT_Y, z0 + Math.cos(aim) * d, { n:1, color:S.color, sp:1.5, life:0.5, s0:0.25, s1:0.02, drag:2, soft:true });
  f.kx -= Math.sin(aim) * 5; f.kz -= Math.cos(aim) * 5;
  kick.super(f.V);
  if(f.isMe) G.shake = Math.max(G.shake, 0.4);
  sfx('shot_beam', f, 1.2);
}
export function updateBeams(dt){
  for(let i = G.beams.length - 1; i >= 0; i--){
    const b = G.beams[i]; b.t += dt; const k = b.t / b.life;
    const w = (1 - k) * b.w * 0.5;
    b.outer.scale.x = b.outer.scale.y = Math.max(0.001, w); b.core.scale.x = b.core.scale.y = Math.max(0.001, 0.08 * (1 - k));
    b.outer.material.opacity = 0.55 * (1 - k);
    if(k >= 1){ scene.remove(b.core); scene.remove(b.outer); b.outer.material.dispose(); G.beams.splice(i, 1); }
  }
}

// ---------------- damage, death ----------------
export function damage(o, amount, src, isSuper, quiet){
  if(!o.alive || o.shieldT > 0 || amount <= 0 || (G.match && G.match.over)) return 0;
  amount = Math.round(amount);
  o.hp -= amount; o.flash = 1; o.regenT = 0; o.revealT = Math.max(o.revealT, 0.6); o.lastHitBy = src;
  if(src){
    src.dmgDone += amount; src.regenT = Math.min(src.regenT, REGEN_DELAY * 0.5);
    if(!isSuper && src.charge < 1){ src.charge = Math.min(1, src.charge + amount / src.H.super.charge); if(src.charge >= 1) emit('superReady', src); }
  }
  if(!quiet) kick.hurt(o.V);
  const meTeam = G.me ? G.me.team : 0;
  if(visibleTo(meTeam, o) || o === G.me) dmgNumber(o.x, o.H.height + 0.25, o.z, amount, o === G.me ? 'me' : src === G.me ? 'mine' : '');
  emit('damage', o, amount, src);
  if(o.hp <= 0) kill(o, src);
  return amount;
}
export function kill(o, src){
  o.hp = 0; o.alive = false; o.deadT = 0; o.deaths++; o.respawnT = RESPAWN; o.pendingBeam = null;
  if(src && src !== o) src.kills++;
  sporeBurst(o.x, 0.8, o.z, o.H.color, 34);
  sfx('die', o);
  emit('kill', o, src);
}

export function updateFighterVisuals(dt, t){
  const meTeam = G.me ? G.me.team : 0;
  for(const f of G.fighters){
    const V = f.V;
    f.seen = visibleTo(meTeam, f);
    animate(V, f, dt, t);
    if(f.alive && !f.seen) V.root.visible = false;
    // hiding in grass: you and your allies turn see-through
    const ghost = f.alive && f.inGrass && f.team === meTeam;
    if(V.mat.transparent !== ghost){ V.mat.transparent = ghost; V.mat.opacity = ghost ? 0.55 : 1; V.mat.depthWrite = !ghost; }
    // spawn shield shimmer
    if(f.shieldT > 0) V.mat.userData.u.uTint.value.setScalar(0.12 + Math.sin(t * 20) * 0.08);
    else if(V.id !== 'wasp' || f.supT >= 1.2) V.mat.userData.u.uTint.value.setScalar(0);
  }
}
