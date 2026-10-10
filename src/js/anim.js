// Hero visuals and their procedural animation: springy run, wind-up and recoil, super moves, flinch, death, victory.
import * as THREE from 'three';
import { buildHero, addWings, HEROES } from './heroes.js';
import { heroMaterial, outlineMaterial, silhouetteMaterial } from './rig.js';
import { spring, sp, clamp, angDiff, TAU } from './util.js';

export const TEAM_COL = { me:'#FFD23F', ally:'#4FC3FF', foe:'#FF4D4D' };
const ringTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  g.strokeStyle = '#fff'; g.lineWidth = 9; g.beginPath(); g.arc(64, 64, 52, 0, TAU); g.stroke();
  g.globalAlpha = 0.25; g.fillStyle = '#fff'; g.beginPath(); g.arc(64, 64, 50, 0, TAU); g.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
const ringGeo = new THREE.PlaneGeometry(1.25, 1.25); ringGeo.rotateX(-Math.PI / 2);

export function makeVisual(heroId){
  const { rig, parts } = buildHero(heroId);
  const mat = heroMaterial();
  const { mesh, geo, skel } = rig.build(mat);
  mesh.renderOrder = 2;
  const ol = new THREE.SkinnedMesh(geo, outlineMaterial()); ol.bind(skel, mesh.bindMatrix); ol.frustumCulled = false; ol.renderOrder = 2; rig.root.add(ol);
  const silMat = silhouetteMaterial('#FFFFFF');
  const sil = new THREE.SkinnedMesh(geo, silMat); sil.bind(skel, mesh.bindMatrix); sil.frustumCulled = false; sil.renderOrder = 1; rig.root.add(sil);
  const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ map:ringTex, transparent:true, depthWrite:false, color:'#fff', opacity:0.9 }));
  ring.position.y = 0.03; ring.renderOrder = 1; rig.root.add(ring);
  const B = rig.bones;
  for(const b of rig.list){ b.userData.rest = b.position.clone(); b.userData.rot = b.rotation.clone(); }
  const muzzle = new THREE.Object3D(); muzzle.position.fromArray(parts.muzzle); B.gun.add(muzzle);
  const wings = heroId === 'wasp' ? addWings(rig) : null;
  const V = { id:heroId, H:HEROES[heroId], root:rig.root, B, mesh, ol, sil, silMat, mat, ring, muzzle, wings, yaw:0, ph:0, lastStep:0,
    sp:{ twist:sp(), leanX:sp(), leanZ:sp(), headX:sp(), headZ:sp(), squash:sp(), kick:sp(), bodyX:sp(), armR:sp(), armL:sp(), ant:sp(), ely:sp(), pop:sp(1), lift:sp(), gunS:sp(1) },
    prevVX:0, prevVZ:0 };
  return V;
}

export function setTeamLook(V, kind){
  const c = new THREE.Color(TEAM_COL[kind]);
  V.ring.material.color.copy(c);
  V.silMat.color.copy(kind === 'foe' ? new THREE.Color('#FF3B3B') : kind === 'me' ? new THREE.Color('#FFE58A') : new THREE.Color('#7FD8FF'));
}

const R = (b) => b.userData.rest;
// the time since the last attack/super decides which pose layer is active
export function animate(V, f, dt, t){
  const B = V.B, S = V.sp, H = V.H;
  const root = V.root;
  // ---------------- dead: knocked back, tumble, pop ----------------
  if(!f.alive){
    const d = f.deadT;
    const k = clamp(d / 0.75, 0, 1);
    root.position.set(f.x, Math.max(0, Math.sin(Math.min(d / 0.5, 1) * Math.PI) * 0.7), f.z);
    root.rotation.set(-k * 1.4, V.yaw + d * 4, 0, 'YXZ');
    const s = d < 0.55 ? 1 + Math.sin(d * 18) * 0.06 : Math.max(0, 1 - (d - 0.55) / 0.2);
    root.scale.setScalar(s);
    V.ring.visible = false;
    root.visible = s > 0.01;
    V.mat.userData.u.uFlash.value = d < 0.1 ? 0.8 : 0;
    return;
  }
  root.rotation.x = 0; root.rotation.z = 0;
  V.ring.visible = true;
  // ---------------- facing ----------------
  const spd = Math.hypot(f.vx, f.vz), moving = spd > 0.4;
  const aimHold = f.atkT < 0.55 || f.supT < 0.8 || f.aiming;
  const want = aimHold || !moving ? f.aim : Math.atan2(f.vx, f.vz);
  V.yaw += clamp(angDiff(V.yaw, want), -dt * 16, dt * 16);
  root.rotation.y = V.yaw;
  root.position.set(f.x, 0, f.z);
  // ---------------- locomotion ----------------
  const mv = clamp(spd / H.speed, 0, 1);
  const prevPh = V.ph;
  V.ph += dt * (3 + spd * 2.1);
  // footfall: squash the body and nudge the cap
  if(moving && Math.floor(prevPh / Math.PI) !== Math.floor(V.ph / Math.PI)){ S.squash.v -= 2.4 * mv; S.headX.v += 1.6 * mv; V.step = true; }
  const fx = Math.sin(V.ph), fy = Math.cos(V.ph);
  if(!H.hover){
    const stride = 0.2 * mv;
    for(const [b, s] of [[B.footL, 1], [B.footR, -1]]){
      b.position.z = R(b).z + fx * s * stride;
      b.position.y = R(b).y + Math.max(0, fy * s) * 0.14 * mv;
      b.rotation.x = -fy * s * 0.6 * mv;
    }
  } else {
    for(const [b, s] of [[B.footL, 1], [B.footR, -1]]) b.rotation.x = Math.sin(t * 3 + s) * 0.25 - mv * 0.6;
  }
  // local velocity for leaning
  const cy = Math.cos(V.yaw), sy = Math.sin(V.yaw);
  const ax = (f.vx - V.prevVX) / Math.max(dt, 1e-3), az = (f.vz - V.prevVZ) / Math.max(dt, 1e-3);
  V.prevVX = f.vx; V.prevVZ = f.vz;
  const fwd = f.vx * sy + f.vz * cy, side = f.vx * cy - f.vz * sy;
  const afwd = ax * sy + az * cy;
  spring(S.leanX, clamp(fwd / H.speed * 0.16 + afwd * 0.012, -0.3, 0.35), 120, 14, dt);
  spring(S.leanZ, clamp(-side / H.speed * 0.2, -0.3, 0.3), 120, 14, dt);
  spring(S.squash, 0, 260, 13, dt);
  spring(S.headX, 0, 150, 7, dt); spring(S.headZ, 0, 150, 7, dt);
  spring(S.kick, 0, 200, 15, dt); spring(S.bodyX, 0, 140, 11, dt);
  spring(S.ant, 0, 90, 5, dt); spring(S.pop, 1, 220, 12, dt); spring(S.lift, 0, 60, 10, dt); spring(S.gunS, 1, 200, 12, dt);
  // head lags behind turns and acceleration
  S.headZ.v += side * 0.02 * dt * 60 * 0.05; S.headX.v -= afwd * 0.002;
  S.ant.v += (afwd * 0.004 + S.headX.v * 0.02);
  const breath = Math.sin(t * 2.4 + f.id) * 0.012;
  const bob = Math.abs(fy) * 0.07 * mv;
  B.hips.position.y = R(B.hips).y + bob + breath + S.lift.x + (H.hover ? Math.sin(t * 4 + f.id) * 0.05 : 0);
  const sq = S.squash.x;
  const push = Math.max(0, Math.sin(V.ph * 2)) * 0.05 * mv;
  B.hips.scale.set(1 - sq * 0.07 - push * 0.5, 1 + sq * 0.12 + push, 1 - sq * 0.07 - push * 0.5);
  B.hips.rotation.x = S.leanX.x + S.bodyX.x;
  B.hips.rotation.z = S.leanZ.x + Math.sin(V.ph) * 0.05 * mv;
  // upper body turns toward the aim even while the legs run another way
  spring(S.twist, clamp(angDiff(V.yaw, f.aim), -1.0, 1.0), 160, 16, dt);
  B.body.rotation.y = S.twist.x;
  B.head.rotation.x = S.headX.x * 0.5 + (H.hover ? 0 : 0);
  B.head.rotation.z = S.headZ.x * 0.5 + Math.sin(V.ph) * 0.06 * mv;
  for(const n of ['antL', 'antR']) if(B[n]){ B[n].rotation.x = -S.ant.x * 0.8 + Math.sin(t * 2 + (n === 'antL' ? 0 : 1)) * 0.06; }
  // arms: the off hand swings while running, the weapon arm stays up
  const swing = Math.sin(V.ph) * 0.5 * mv * (aimHold ? 0.3 : 1);
  B.armL.rotation.set(R(B.armL).x + swing, 0, 0);
  B.armR.rotation.set(-swing * 0.3, 0, 0);
  B.gun.position.copy(R(B.gun));
  B.gun.rotation.x = 0;
  B.gun.scale.setScalar(1);
  // ---------------- attack layers ----------------
  const kind = H.attack.kind;
  if(f.atkT < 0.6){
    const a = f.atkT;
    if(kind === 'lob'){
      // over-the-head throw: wind back, whip forward, follow through
      const w = a < 0.07 ? -a / 0.07 * 2.4 : a < 0.2 ? -2.4 + (a - 0.07) / 0.13 * 3.2 : 0.8 * Math.max(0, 1 - (a - 0.2) / 0.3);
      B.armR.rotation.x = w; B.hips.rotation.x += a < 0.07 ? -0.15 : a < 0.3 ? 0.18 : 0;
      B.gun.scale.setScalar(a < 0.12 ? 1 : Math.min(1, Math.max(0, (a - 0.35) / 0.15)));
    } else {
      const big = V.id === 'shroom' ? 1.6 : 1;
      B.armR.rotation.x += -S.kick.x * 0.9 * big;
      B.armL.rotation.x += -S.kick.x * 0.5 * big;
      B.gun.position.z -= S.kick.x * 0.2 * big;
      B.gun.rotation.x = -S.kick.x * 0.5 * big;
      B.hips.rotation.x -= S.kick.x * 0.12 * big;
      if(V.B.abd) V.B.abd.rotation.x = S.kick.x * 0.9;
    }
  }
  B.armL.rotation.x += -S.kick.x * 0.4;
  // ---------------- supers ----------------
  if(f.supT < 1.2){
    const s = f.supT;
    if(V.id === 'shroom'){
      // brace, then the big blast throws the whole mushroom back
      const crouch = s < 0.12 ? s / 0.12 : Math.max(0, 1 - (s - 0.12) / 0.3);
      B.hips.position.y -= crouch * 0.12;
      B.hips.scale.y *= 1 - crouch * 0.12;
      B.head.rotation.x += -crouch * 0.25;
    } else if(V.id === 'beetle'){
      const open = s < 0.9 ? Math.min(1, s / 0.15) : Math.max(0, 1 - (s - 0.9) / 0.3);
      if(B.elyL){ B.elyL.rotation.z = open * 0.9; B.elyR.rotation.z = -open * 0.9; B.elyL.rotation.x = B.elyR.rotation.x = -open * 0.4; }
      B.armL.rotation.x = B.armR.rotation.x = -2.2 * open + (s > 0.15 && s < 0.6 ? Math.sin((s - 0.15) * 30) * 0.5 : 0);
      B.hips.position.y += Math.sin(Math.min(s / 0.5, 1) * Math.PI) * 0.35;
    } else if(V.id === 'wasp'){
      const W = H.super.windup;
      const rise = s < W ? s / W : Math.max(0, 1 - (s - W) / 0.5);
      B.hips.position.y += rise * 0.35;
      B.hips.rotation.x += -rise * 0.25;
      V.mat.userData.u.uTint.value.setRGB(0.5, 0.38, 0.05).multiplyScalar(s < W ? s / W : 0);
    }
  } else if(V.id === 'wasp') V.mat.userData.u.uTint.value.setRGB(0, 0, 0);
  if(V.id !== 'beetle' && B.elyL){ B.elyL.rotation.z = 0; }
  // ---------------- wings ----------------
  if(V.wings){
    const fast = f.supT < H.super.windup + 0.2 ? 1.6 : 1;
    const flap = Math.sin(t * 62 * fast + f.id) * 0.55;
    B.wingL.rotation.z = flap; B.wingR.rotation.z = -flap;
    if(B.abd) B.abd.rotation.x += Math.sin(t * 3 + f.id) * 0.08;
  }
  // ---------------- victory / defeat poses ----------------
  if(f.victory){
    const j = Math.abs(Math.sin(t * 5.5 + f.id));
    root.position.y = j * 0.45;
    B.armL.rotation.x = B.armR.rotation.x = -2.6 + Math.sin(t * 11) * 0.3;
    B.hips.scale.y *= 1 + (j < 0.15 ? -0.12 : 0.05);
  } else if(f.defeat){
    B.hips.position.y -= 0.06; B.head.rotation.x += 0.45; B.armL.rotation.x = B.armR.rotation.x = 0.5;
  }
  // ---------------- blinking ----------------
  if(B.eyes){
    V.blink = (V.blink ?? 2 + Math.random() * 3) - dt;
    if(V.blink < 0){ B.eyes.scale.y = 0.12; if(V.blink < -0.11) V.blink = 1.8 + Math.random() * 3.5; } else B.eyes.scale.y = f.flash > 0.5 ? 0.6 : 1;
  }
  // ---------------- hit flash, spawn pop ----------------
  V.mat.userData.u.uFlash.value = Math.max(0, f.flash) * 0.55;
  root.scale.setScalar(Math.max(0.01, S.pop.x));
  root.visible = true;
}

// kicks for the springs, called from gameplay events
export const kick = {
  attack(V){ V.sp.kick.v += V.id === 'wasp' ? 9 : V.id === 'shroom' ? 13 : 0; V.sp.bodyX.v -= 2.2; V.sp.headX.v -= 3; V.sp.ant.v += 3; },
  super(V){ V.sp.kick.v += 22; V.sp.bodyX.v -= 5; V.sp.headX.v -= 6; V.sp.ant.v += 6; V.sp.squash.v += 3; },
  hurt(V, dx, dz){ V.sp.bodyX.v -= 5; V.sp.headX.v -= 7; V.sp.headZ.v += (Math.random() - 0.5) * 8; V.sp.squash.v -= 3; V.sp.ant.v += 5; },
  spawn(V){ V.sp.pop.x = 0.05; V.sp.pop.v = 0; },
  land(V){ V.sp.squash.v -= 4; }
};
