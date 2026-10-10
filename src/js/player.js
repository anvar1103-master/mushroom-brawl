// The player's controls (mouse + keys on PC, joystick + attack buttons on phones), follow camera and aim guides.
import * as THREE from 'three';
import { camera, canvas, scene } from './engine.js';
import { G } from './state.js';
import { $, clamp, angDiff, TOUCH, TAU, store, lerp } from './util.js';
import { visibleTo, canAttack, SHOT_Y } from './combat.js';
import { segHit, A } from './arena.js';
import { unlockAudio } from './audio.js';

export const CAM = { yaw:Math.PI, look:6.5, x:0, z:0, y:0, dist:6.6, height:5.0, autoT:0, sens:store.get('sens', 1), shakeT:0 };
const keys = {}, mouse = { l:false, r:false, x:0, y:0, free:true };
export let locked = false;
export const T = { move:null, atk:null, sup:null, cam:null, autoAim:true };   // active touches

// ---------------- keyboard & mouse ----------------
addEventListener('keydown', e => {
  keys[e.code] = true;
  if(['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code) && G.state !== 'menu') e.preventDefault();
  if((e.code === 'KeyE' || e.code === 'Space') && G.me) G.me.wantSup = true;
});
addEventListener('keyup', e => { keys[e.code] = false; });
addEventListener('blur', () => { for(const k in keys) keys[k] = false; mouse.l = mouse.r = false; });
canvas.addEventListener('mousedown', e => {
  unlockAudio();
  if(TOUCH) return;
  if(inMatch() && !locked && canvas.requestPointerLock){ try{ const p = canvas.requestPointerLock(); if(p && p.catch) p.catch(() => {}); }catch(err){} }
  if(e.button === 0) mouse.l = true;
  if(e.button === 2 && G.me) G.me.wantSup = true;
});
addEventListener('mouseup', e => { if(e.button === 0) mouse.l = false; if(e.button === 2) mouse.r = false; });
canvas.addEventListener('contextmenu', e => e.preventDefault());
addEventListener('mousemove', e => {
  mouse.x = e.clientX; mouse.y = e.clientY;
  if(locked){
    CAM.yaw -= e.movementX * 0.0032 * CAM.sens;
    CAM.look = clamp(CAM.look - e.movementY * 0.03 * CAM.sens, 2.5, 16);
  }
});
let everLocked = false;
document.addEventListener('pointerlockchange', () => { locked = document.pointerLockElement === canvas; if(locked) everLocked = true; });
export function lockHint(){ const el = $('lockhint'); const v = !locked && !everLocked && !TOUCH && G.state === 'play' && G.match && G.match.t < 12 && G.me && G.me.alive && !G.paused && !mouse.l; if(el.hidden === v) el.hidden = !v; }
export function releaseLock(){ if(document.exitPointerLock && locked) document.exitPointerLock(); }
const inMatch = () => G.state === 'play' || G.state === 'countdown';

// ---------------- touch: left joystick, attack + super buttons, drag to turn the camera ----------------
const stick = { el:null, knob:null };
function stickAt(x, y){ const b = $('stick'); b.style.left = x + 'px'; b.style.top = y + 'px'; b.hidden = false; }
function onTouchStart(e){
  unlockAudio();
  if(!inMatch()) return;
  for(const t of e.changedTouches){
    const tgt = t.target.closest && t.target.closest('[data-btn]');
    if(tgt){
      const kind = tgt.dataset.btn;
      if(kind === 'atk' && !T.atk){ T.atk = { id:t.identifier, x0:t.clientX, y0:t.clientY, dx:0, dy:0, manual:false, el:tgt }; tgt.classList.add('on'); }
      else if(kind === 'sup' && !T.sup && G.me && G.me.charge >= 1){ T.sup = { id:t.identifier, x0:t.clientX, y0:t.clientY, dx:0, dy:0, manual:false, el:tgt }; tgt.classList.add('on'); }
      continue;
    }
    if(t.clientX < innerWidth * 0.45 && !T.move){ T.move = { id:t.identifier, x0:t.clientX, y0:t.clientY, dx:0, dy:0 }; stickAt(t.clientX, t.clientY); }
    else if(!T.cam){ T.cam = { id:t.identifier, x:t.clientX, y:t.clientY }; }
  }
  e.preventDefault();
}
function onTouchMove(e){
  for(const t of e.changedTouches){
    if(T.move && t.identifier === T.move.id){
      let dx = t.clientX - T.move.x0, dy = t.clientY - T.move.y0; const d = Math.hypot(dx, dy), R = 56;
      if(d > R){ T.move.x0 += dx * (1 - R / d); T.move.y0 += dy * (1 - R / d); dx = t.clientX - T.move.x0; dy = t.clientY - T.move.y0; stickAt(T.move.x0, T.move.y0); }
      T.move.dx = dx / R; T.move.dy = dy / R;
      $('knob').style.transform = `translate(${dx}px,${dy}px)`;
    } else if(T.cam && t.identifier === T.cam.id){
      CAM.yaw -= (t.clientX - T.cam.x) * 0.006; CAM.autoT = 1.5;
      T.cam.x = t.clientX; T.cam.y = t.clientY;
    } else for(const k of ['atk', 'sup']){
      const B = T[k]; if(!B || t.identifier !== B.id) continue;
      B.dx = t.clientX - B.x0; B.dy = t.clientY - B.y0;
      if(Math.hypot(B.dx, B.dy) > 18) B.manual = true;
    }
  }
  e.preventDefault();
}
function onTouchEnd(e){
  for(const t of e.changedTouches){
    if(T.move && t.identifier === T.move.id){ T.move = null; $('stick').hidden = true; $('knob').style.transform = ''; }
    if(T.cam && t.identifier === T.cam.id) T.cam = null;
    for(const k of ['atk', 'sup']){
      const B = T[k]; if(!B || t.identifier !== B.id) continue;
      B.el.classList.remove('on');
      if(G.me && G.me.alive){
        const pt = B.manual ? manualTarget(k === 'sup', B) : autoTarget(k === 'sup');
        G.me.inp.tx = pt.x; G.me.inp.tz = pt.z;
        if(k === 'sup') G.me.inp.sup = true; else G.me.inp.fire = true;
        G.me.touchAim = pt;
      }
      T[k] = null;
    }
  }
}
for(const el of [document]){
  el.addEventListener('touchstart', onTouchStart, { passive:false });
  el.addEventListener('touchmove', onTouchMove, { passive:false });
  el.addEventListener('touchend', onTouchEnd); el.addEventListener('touchcancel', onTouchEnd);
}

// manual aim from a dragged button: screen drag → direction relative to the camera, length → distance (for lobs)
function manualTarget(sup, B){
  const me = G.me, W = sup ? me.H.super : me.H.attack;
  const a = CAM.yaw + Math.atan2(B.dx, -B.dy) + Math.PI;
  const k = clamp(Math.hypot(B.dx, B.dy) / 90, 0.15, 1);
  const r = W.kind === 'lob' || W.kind === 'barrage' ? W.range * k : W.range;
  return { x:me.x + Math.sin(a) * r, z:me.z + Math.cos(a) * r, a };
}
// tap: aim at the nearest enemy we can see (in range first), else straight ahead
export function autoTarget(sup){
  const me = G.me, W = sup ? me.H.super : me.H.attack;
  let best = null, bd = 1e9;
  for(const o of G.fighters){
    if(!o.alive || o.team === me.team || !visibleTo(me.team, o)) continue;
    const d = Math.hypot(o.x - me.x, o.z - me.z);
    const lob = W.kind === 'lob' || W.kind === 'barrage' || W.kind === 'beam';
    const score = d + (d > W.range ? 20 : 0) + (!lob && segHit(me.x, me.z, o.x, o.z) >= 0 ? 8 : 0);
    if(score < bd){ bd = score; best = o; }
  }
  if(best && Math.hypot(best.x - me.x, best.z - me.z) < W.range * 1.25){
    const d = Math.hypot(best.x - me.x, best.z - me.z), sp = W.speed || 30, tl = W.kind === 'lob' ? W.flight * 0.8 : d / sp;
    return { x:best.x + best.vx * tl * 0.7, z:best.z + best.vz * tl * 0.7 };
  }
  const a = me.aim;
  return { x:me.x + Math.sin(a) * W.range * 0.8, z:me.z + Math.cos(a) * W.range * 0.8 };
}

// ---------------- per-frame: turn input into the hero's intent ----------------
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -SHOT_Y * 0.0), hitP = new THREE.Vector3();
export function playerInput(dt){
  const me = G.me; if(!me) return;
  const inp = me.inp;
  // movement relative to the camera
  let fx = 0, fz = 0;
  if(T.move){ fx = -T.move.dy; fz = T.move.dx; const l = Math.hypot(fx, fz); if(l > 1){ fx /= l; fz /= l; } }
  else { fx = (keys.KeyW || keys.ArrowUp ? 1 : 0) - (keys.KeyS || keys.ArrowDown ? 1 : 0); fz = (keys.KeyD || keys.ArrowRight ? 1 : 0) - (keys.KeyA || keys.ArrowLeft ? 1 : 0); const l = Math.hypot(fx, fz); if(l > 1){ fx /= l; fz /= l; } }
  const sy = Math.sin(CAM.yaw), cy = Math.cos(CAM.yaw);
  // camera forward is (sin yaw, cos yaw); right is (-cos yaw, sin yaw)
  inp.mx = sy * fx - cy * fz; inp.mz = cy * fx + sy * fz;
  // phones: the camera slowly swings behind the direction you run
  if(TOUCH && T.move && Math.hypot(fx, fz) > 0.5){
    CAM.autoT -= dt;
    const mv = Math.atan2(inp.mx, inp.mz), d = angDiff(CAM.yaw, mv);
    if(CAM.autoT <= 0 && Math.abs(d) < 1.9) CAM.yaw += d * Math.min(1, dt * 1.1);
  }
  // aim point
  let tx, tz;
  if(TOUCH){
    const B = T.sup || T.atk;
    if(B && B.manual){ const p = manualTarget(B === T.sup, B); tx = p.x; tz = p.z; }
    else if(me.touchAim && me.atkT < 0.6){ tx = me.touchAim.x; tz = me.touchAim.z; }
    else { tx = me.x + Math.sin(CAM.yaw) * CAM.look; tz = me.z + Math.cos(CAM.yaw) * CAM.look; if(Math.hypot(inp.mx, inp.mz) > 0.3){ const a = Math.atan2(inp.mx, inp.mz); tx = me.x + Math.sin(a) * 5; tz = me.z + Math.cos(a) * 5; } }
  } else if(locked){
    tx = me.x + Math.sin(CAM.yaw) * CAM.look; tz = me.z + Math.cos(CAM.yaw) * CAM.look;
  } else {
    // free cursor: aim where the mouse points on the ground
    ndc.set(mouse.x / innerWidth * 2 - 1, -(mouse.y / innerHeight) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    plane.constant = -SHOT_Y * 0.5;
    if(ray.ray.intersectPlane(plane, hitP)){ tx = hitP.x; tz = hitP.z; } else { tx = me.x + Math.sin(CAM.yaw) * 6; tz = me.z + Math.cos(CAM.yaw) * 6; }
  }
  inp.tx = inp.tx || tx; inp.tz = inp.tz || tz;
  if(!inp.fire && !inp.sup){ inp.tx = tx; inp.tz = tz; }
  inp.aim = Math.atan2(tx - me.x, tz - me.z);
  me.aiming = !TOUCH || !!(T.atk && T.atk.manual) || !!(T.sup && T.sup.manual);
  if(!TOUCH){
    if(mouse.l && canAttack(me)) inp.fire = true;
    if(me.wantSup){ me.wantSup = false; if(me.charge >= 1) inp.sup = true; }
  }
}

// ---------------- follow camera ----------------
const look = new THREE.Vector3();
export function updateCamera(dt){
  const me = G.me; if(!me) return;
  const k = 1 - Math.exp(-dt * 10);
  CAM.x = lerp(CAM.x, me.x, k); CAM.z = lerp(CAM.z, me.z, k);
  const sy = Math.sin(CAM.yaw), cy = Math.cos(CAM.yaw);
  const far = (CAM.look - 2.5) / 13.5;
  const dist = CAM.dist + far * 0.8, h = CAM.height - far * 0.9;
  let px = CAM.x - sy * dist, pz = CAM.z - cy * dist, py = h;
  // behind the outer fence: climb so the fence doesn't hide the hero
  const out = Math.max(Math.abs(px) - A.hx, Math.abs(pz) - A.hz, 0);
  py += out * 0.55;
  if(G.shake > 0){ const s = G.shake * 0.25; px += (Math.random() - 0.5) * s; py += (Math.random() - 0.5) * s; pz += (Math.random() - 0.5) * s; G.shake = Math.max(0, G.shake - dt * 2.2); }
  camera.position.set(px, py, pz);
  look.set(CAM.x + sy * CAM.look * 0.55, 0.9, CAM.z + cy * CAM.look * 0.55);
  camera.lookAt(look);
}
// overview camera for the menu and the start of a match
export function orbitCamera(t, focus){
  const a = t * 0.06 + 0.6;
  const fx = focus ? focus.x : 0, fz = focus ? focus.z : 0;
  camera.position.set(fx + Math.sin(a) * 26, 22, fz + Math.cos(a) * 26);
  camera.lookAt(fx, 0, fz);
}

// ---------------- aim guides on the ground ----------------
const guide = new THREE.Group(); guide.visible = false; scene.add(guide);
const gMat = new THREE.MeshBasicMaterial({ color:'#FFFFFF', transparent:true, opacity:0.22, depthWrite:false });
const gSup = new THREE.MeshBasicMaterial({ color:'#FFD23F', transparent:true, opacity:0.3, depthWrite:false });
const shapes = {};
function shape(kind, W){
  const key = kind + W.range + (W.spread || 0) + (W.radius || 0);
  if(shapes[key]) return shapes[key];
  let g;
  if(kind === 'fan'){ g = new THREE.CircleGeometry(W.range, 24, -Math.PI / 2 - W.spread / 2 - 0.04, W.spread + 0.08); g.rotateX(-Math.PI / 2); }
  else if(kind === 'needle' || kind === 'beam'){ const w = kind === 'beam' ? W.width : 0.36; g = new THREE.PlaneGeometry(w, W.range); g.rotateX(-Math.PI / 2); g.translate(0, 0, W.range / 2); }
  else { g = new THREE.RingGeometry(W.radius * 0.86, W.radius, 36); g.rotateX(-Math.PI / 2); }
  return shapes[key] = g;
}
const gMesh = new THREE.Mesh(new THREE.BufferGeometry(), gMat); gMesh.renderOrder = 3; guide.add(gMesh);
const gFill = new THREE.Mesh(new THREE.CircleGeometry(1, 32).rotateX(-Math.PI / 2), gMat); gFill.renderOrder = 3; guide.add(gFill);
const dots = []; for(let i = 0; i < 9; i++){ const d = new THREE.Mesh(new THREE.CircleGeometry(0.07, 10).rotateX(-Math.PI / 2), gMat); d.renderOrder = 3; guide.add(d); dots.push(d); }
export function updateGuide(){
  const me = G.me;
  const touchAiming = TOUCH && ((T.atk && T.atk.manual) || (T.sup && T.sup.manual));
  const show = me && me.alive && G.state === 'play' && (!TOUCH || touchAiming);
  guide.visible = !!show; if(!show) return;
  const sup = TOUCH && !!T.sup;
  const W = sup ? me.H.super : me.H.attack, kind = W.kind === 'barrage' ? 'lob' : W.kind;
  const mat = sup ? gSup : gMat;
  mat.opacity = TOUCH ? 0.35 : canAttack(me) ? 0.22 : 0.1;
  gMesh.material = gFill.material = mat; dots.forEach(d => d.material = mat);
  gMesh.geometry = shape(kind, W);
  const a = me.inp.aim;
  const lob = kind === 'lob';
  gFill.visible = lob; dots.forEach(d => d.visible = lob);
  if(lob){
    const d = clamp(Math.hypot(me.inp.tx - me.x, me.inp.tz - me.z), 1.5, W.range);
    const x = me.x + Math.sin(a) * d, z = me.z + Math.cos(a) * d;
    gMesh.position.set(x, 0.06, z); gMesh.rotation.y = 0;
    gFill.position.set(x, 0.055, z); gFill.scale.setScalar(W.radius * 0.86);
    dots.forEach((dt, i) => { const k = (i + 1) / (dots.length + 1); dt.position.set(lerp(me.x, x, k), 0.06, lerp(me.z, z, k)); });
  } else {
    gMesh.position.set(me.x, 0.06, me.z); gMesh.rotation.y = a;
  }
}
