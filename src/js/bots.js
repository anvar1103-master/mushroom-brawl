// Bot brains for «Споры»: collect spores, fight at their weapon's best range, protect carriers, run home when hurt.
import { G } from './state.js';
import { A, findPath, losClear, walkClear, inGrass, tileAtXZ, sightClear, segHit, colOf, rowOf } from './arena.js';
import { fogR, fogAhead, ROYALE } from './royale.js';
import { canSee, canAttack } from './combat.js';
import { rand, clamp, angDiff, TAU } from './util.js';

export const SKILL = { easy:{ err:0.22, react:0.6, lead:0.4, dodge:0.2 }, normal:{ err:0.11, react:0.35, lead:0.75, dodge:0.5 }, hard:{ err:0.05, react:0.18, lead:1, dodge:0.85 } };
const PREF = { shroom:0.5, beetle:0.72, wasp:0.82 };

export function newBot(skill = 'normal'){
  return { S:SKILL[skill], path:null, pathT:0, gx:null, gz:null, mode:'idle', target:null, seenT:0, mem:new Map(), strafe:rand() < 0.5 ? -1 : 1, strafeT:rand(0.6, 1.6), thinkT:0, holdX:0, holdZ:0, stuck:0, lx:0, lz:0 };
}

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

function goTo(f, x, z, dt){
  const B = f.bot;
  B.pathT -= dt;
  if(!B.path || B.pathT <= 0 || Math.hypot((B.gx ?? 1e9) - x, (B.gz ?? 1e9) - z) > 1.2){
    B.path = walkClear(f.x, f.z, x, z) ? [{ x, z }] : findPath(f.x, f.z, x, z);
    B.gx = x; B.gz = z; B.pathT = rand(0.5, 0.9);
  }
  if(!B.path || !B.path.length) return [0, 0];
  let p = B.path[0];
  while(B.path.length > 1 && Math.hypot(p.x - f.x, p.z - f.z) < 0.45){ B.path.shift(); p = B.path[0]; }
  const dx = p.x - f.x, dz = p.z - f.z, d = Math.hypot(dx, dz);
  if(d < 0.25) return [0, 0];
  return [dx / d, dz / d];
}

export function botThink(f, dt){
  const B = f.bot, H = f.H, inp = f.inp, M = G.match;
  if(!f.alive || !M) return;
  const now = G.time;
  // ---- perception ----
  let best = null, bestScore = -1e9;
  for(const o of G.fighters){
    if(!o.alive || o.team === f.team) continue;
    if(canSee(f, o)){ B.mem.set(o.id, { x:o.x, z:o.z, t:now, o }); }
    else continue;
    const d = dist(f, o);
    const score = -d + (o.gems || 0) * 1.2 + (o.power || 0) * 0.5 + (1 - o.hp / o.max) * 4 + (o === B.target ? 2 : 0);
    if(score > bestScore){ bestScore = score; best = o; }
  }
  if(best !== B.target){ B.target = best; B.seenT = 0; } else B.seenT += dt;
  const T = B.target;
  B.shootAt = null;
  let mx = 0, mz = 0;
  if(M.mode === 'br') [mx, mz] = royaleGoal(f, B, T, dt);
  else [mx, mz] = sporesGoal(f, B, T, dt);
  fightMoveAndShoot(f, B, T, mx, mz, dt);
}

function sporesGoal(f, B, T, dt){
  const H = f.H, M = G.match, now = G.time;
  const myCount = M.count[f.team], foeCount = M.count[1 - f.team];
  const home = A.spawns[f.team][1] || A.spawns[f.team][0];
  // ---- goal ----
  B.thinkT -= dt;
  if(B.thinkT <= 0){
    B.thinkT = rand(0.2, 0.35);
    const hurt = f.hp < f.max * 0.42;
    if(f.gems >= 3 && hurt) B.mode = 'retreat';
    else if(M.cd && M.cd.team === f.team && f.gems > 0) B.mode = T && dist(f, T) < H.attack.range * 0.8 ? 'fight' : 'hold';
    else if(hurt && T && dist(f, T) < 6 && f.hp < T.hp) B.mode = 'retreat';
    else if(T && dist(f, T) < H.attack.range * 1.35) B.mode = 'fight';
    else if(G.pickups.length && !(M.cd && M.cd.team === f.team)) B.mode = 'collect';
    else if(M.cd && M.cd.team !== f.team) B.mode = 'hunt';
    else B.mode = 'patrol';
  }
  let mx = 0, mz = 0;
  if(B.mode === 'retreat' || B.mode === 'hold'){
    // back toward spawn; a little sideways shuffle when already safe
    const hx = home.x + (f.slot - 1) * 2.5, hz = home.z + (f.team === 0 ? -3 : 3);
    [mx, mz] = goTo(f, hx, hz, dt);
    if(Math.hypot(f.x - hx, f.z - hz) < 1.5){ mx = Math.sin(now * 1.3 + f.id) * 0.4; mz = 0; }
  } else if(B.mode === 'collect'){
    let pk = null, pd = 1e9;
    for(const p of G.pickups){ const d = Math.hypot(p.x - f.x, p.z - f.z) + (p.landed ? 0 : 1); if(d < pd){ pd = d; pk = p; } }
    // don't all three dive for the same spore: the furthest teammate patrols instead
    if(pk) [mx, mz] = goTo(f, pk.x, pk.z, dt);
  } else if(B.mode === 'hunt'){
    // go after the enemy carrier with the most spores (last place we saw them)
    let c = null; for(const o of G.fighters) if(o.alive && o.team !== f.team && (!c || o.gems > c.gems)) c = o;
    const m = c && B.mem.get(c.id);
      const mid = A.mine || { x:0, z:0 };
    const tx = m && now - m.t < 4 ? m.x : mid.x, tz = m && now - m.t < 4 ? m.z : mid.z + (f.team === 0 ? -4 : 4);
    [mx, mz] = goTo(f, tx, tz, dt);
  } else if(B.mode === 'patrol'){
    // hold a spot near the mine on our own side, spread out by slot
    const side = f.team === 0 ? 1 : -1;
    const mid = A.mine || { x:0, z:0 };
    const px = mid.x + (f.slot - 1) * 3.2, pz = mid.z + side * (2.5 + (f.slot === 1 ? 0 : 1.5));
    [mx, mz] = goTo(f, px, pz, dt);
  }
  return [mx, mz];
}

// «Последний гриб»: stay ahead of the fog, break crates and grab power, pick fights you can win
function royaleGoal(f, B, T, dt){
  const H = f.H, now = G.time, R = fogR(), soon = fogAhead(6);
  const rc = Math.hypot(f.x, f.z);
  B.thinkT -= dt;
  if(B.thinkT <= 0){
    B.thinkT = rand(0.25, 0.4);
    const hurt = f.hp < f.max * 0.38, calm = G.match.t < ROYALE.wait && f.regenT > 1.5;
    B.crate = null; B.pk = null;
    if(rc > Math.min(R, soon) - 2.5) B.mode = 'zone';
    else if(hurt && T && dist(f, T) < 7 && f.hp < T.hp) B.mode = 'retreat';
    // the first seconds are for looting, as long as nobody is right in our face or shooting at us
    else if(T && dist(f, T) < H.attack.range * (calm ? 0.7 : 1.35)) B.mode = 'fight';
    else {
      // the nearest power spore or crate that lies inside the safe area
      let pk = null, pd = 13;
      for(const p of G.pickups){ const d = Math.hypot(p.x - f.x, p.z - f.z); if(d < pd && Math.hypot(p.x, p.z) < soon - 1.5){ pd = d; pk = p; } }
      if(pk){ B.mode = 'collect'; B.pk = pk; }
      else {
        let kc = null, kd = 15;
        for(const k of A.crates){ if(!k.alive) continue; const d = Math.hypot(k.x - f.x, k.z - f.z); if(d < kd && Math.hypot(k.x, k.z) < soon - 1.5){ kd = d; kc = k; } }
        let seen = null; for(const m of B.mem.values()) if(m.o.alive && now - m.t < 5 && (!seen || m.t > seen.t)) seen = m;
        if(kc && !(seen && f.hp > f.max * 0.7 && rand() < 0.3)){ B.mode = 'crate'; B.crate = kc; }
        else if(seen && f.hp > f.max * 0.6 && !calm){ B.mode = 'hunt'; B.huntX = seen.x; B.huntZ = seen.z; }
        else B.mode = 'roam';
      }
    }
  }
  if(B.mode === 'zone'){
    // head for a spot well inside the circle, on our side of the middle
    const k = Math.max(0, Math.min(R, soon) * 0.45) / (rc || 1);
    return goTo(f, f.x * k, f.z * k, dt);
  }
  if(B.mode === 'retreat' && T){
    // run away from the threat, but never out into the fog
    const d = dist(f, T) || 1;
    let ax = f.x + (f.x - T.x) / d * 5, az = f.z + (f.z - T.z) / d * 5;
    const ra = Math.hypot(ax, az), lim = Math.max(2, Math.min(R, soon) - 3);
    if(ra > lim){ ax *= lim / ra; az *= lim / ra; }
    return goTo(f, ax, az, dt);
  }
  if(B.mode === 'collect' && B.pk && G.pickups.includes(B.pk)) return goTo(f, B.pk.x, B.pk.z, dt);
  if(B.mode === 'crate' && B.crate && B.crate.alive){
    const k = B.crate, d = Math.hypot(k.x - f.x, k.z - f.z), want = Math.min(H.attack.range * 0.7, 6);
    // a clear shot means the first thing the ray meets is the crate itself
    const t = segHit(f.x, f.z, k.x, k.z), hx = f.x + (k.x - f.x) * t, hz = f.z + (k.z - f.z) * t;
    const clear = t < 0 || (colOf(hx + (k.x - f.x) / (d || 1) * 0.08) === k.c && rowOf(hz + (k.z - f.z) / (d || 1) * 0.08) === k.r);
    if(d < want + 0.5 && (clear || H.attack.kind === 'lob')){ B.shootAt = k; return [Math.sin(now * 1.7 + f.id) * 0.3, Math.cos(now * 1.3 + f.id) * 0.3]; }
    return goTo(f, k.x, k.z, dt);
  }
  if(B.mode === 'hunt'){
    if(Math.hypot(B.huntX - f.x, B.huntZ - f.z) > 1.2) return goTo(f, B.huntX, B.huntZ, dt);
    B.thinkT = 0;
  }
  if(B.mode === 'roam' || B.mode === 'hunt'){
    // wander between random open spots inside the safe area
    if(!B.wp || now > B.wpT || Math.hypot(B.wp.x - f.x, B.wp.z - f.z) < 1.2 || Math.hypot(B.wp.x, B.wp.z) > soon - 2){
      const lim = Math.max(2, soon - 3);
      for(let i = 0; i < 12; i++){
        const a = rand(0, TAU), r = Math.sqrt(rand()) * lim, x = Math.sin(a) * r, z = Math.cos(a) * r;
        if(tileAtXZ(x, z) === '.' || tileAtXZ(x, z) === '"'){ B.wp = { x, z }; break; }
      }
      B.wpT = now + rand(5, 8);
    }
    if(B.wp) return goTo(f, B.wp.x, B.wp.z, dt);
  }
  return [0, 0];
}

function fightMoveAndShoot(f, B, T, mx, mz, dt){
  const H = f.H, inp = f.inp, now = G.time;
  // ---- fighting: keep the weapon's best distance and strafe ----
  if(T && (B.mode === 'fight' || dist(f, T) < H.attack.range)){
    const d = dist(f, T), want = H.attack.range * PREF[f.hero];
    const dx = (T.x - f.x) / (d || 1), dz = (T.z - f.z) / (d || 1);
    B.strafeT -= dt; if(B.strafeT <= 0){ B.strafeT = rand(0.5, 1.4); B.strafe = -B.strafe; }
    if(B.mode === 'fight'){
      let ax = 0, az = 0;
      if(d > want + 1 || !losClear(f.x, f.z, T.x, T.z) && f.hero !== 'beetle') [ax, az] = goTo(f, T.x, T.z, dt);
      else if(d < want - 1.5){ ax = -dx; az = -dz; }
      mx = ax * 0.9 + -dz * B.strafe * 0.7; mz = az * 0.9 + dx * B.strafe * 0.7;
    }
  }
  // ---- dodge incoming shots ----
  if(Math.random() < B.S.dodge){
    for(const s of G.shots){
      if(s.team === f.team) continue;
      const rx = f.x - s.x, rz = f.z - s.z, sv = Math.hypot(s.vx, s.vz), along = (rx * s.vx + rz * s.vz) / sv;
      if(along < 0 || along > 6) continue;
      const side = (rx * s.vz - rz * s.vx) / sv;
      if(Math.abs(side) < 1.1){ const k = side >= 0 ? 1 : -1; mx += s.vz / sv * k * 1.4; mz += -s.vx / sv * k * 1.4; break; }
    }
  }
  // step out of burning puddles
  for(const p of G.puddles) if(p.team !== f.team){ const dx = f.x - p.x, dz = f.z - p.z, d = Math.hypot(dx, dz); if(d < p.r + 0.5){ mx += dx / (d || 1) * 1.5; mz += dz / (d || 1) * 1.5; } }
  // unstick: if we haven't moved for a while, wiggle and re-path
  const moved = Math.hypot(f.x - B.lx, f.z - B.lz); B.lx = f.x; B.lz = f.z;
  if(Math.hypot(mx, mz) > 0.3 && moved < 0.01) B.stuck += dt; else B.stuck = Math.max(0, B.stuck - dt);
  if(B.stuck > 0.6){ B.path = null; mx += rand(-1, 1); mz += rand(-1, 1); if(B.stuck > 1.2) B.stuck = 0; }
  const ml = Math.hypot(mx, mz); if(ml > 1){ mx /= ml; mz /= ml; }
  inp.mx = mx; inp.mz = mz;
  // ---- aim and shoot ----
  if(ml > 0.1) inp.aim = Math.atan2(mx, mz);
  inp.fire = inp.sup = false;
  if(T){
    const d = dist(f, T), W = H.attack, Sp = H.super;
    const speed = W.speed || (W.range / (W.flight || 0.8));
    const tl = (W.kind === 'lob' ? W.flight * (0.65 + 0.35 * d / W.range) : d / speed) * B.S.lead;
    let tx = T.x + T.vx * tl, tz = T.z + T.vz * tl;
    const err = B.S.err * (1 + (T.inGrass ? 0.5 : 0));
    const a = Math.atan2(tx - f.x, tz - f.z) + rand(-err, err);
    tx = f.x + Math.sin(a) * d; tz = f.z + Math.cos(a) * d;
    inp.aim = a; inp.tx = tx; inp.tz = tz;
    const los = losClear(f.x, f.z, T.x, T.z);
    const ready = B.seenT > B.S.react;
    // supers: shotgun up close, bombs on anyone in reach, beam lined up from far
    if(ready && f.charge >= 1){
      if((Sp.kind === 'fan' && d < Sp.range * 0.75 && los) || (Sp.kind === 'barrage' && d < Sp.range) || (Sp.kind === 'beam' && d < Sp.range * 0.9)) inp.sup = true;
    }
    if(!inp.sup && ready && canAttack(f)){
      const inRange = d < W.range * (W.kind === 'fan' ? 0.85 : W.kind === 'lob' ? 1.0 : 0.95);
      // keep one charge in reserve unless the target is close or weak
      const spare = f.ammo >= 2 || d < W.range * 0.6 || T.hp < T.max * 0.4;
      if(inRange && (los || W.kind === 'lob') && spare) inp.fire = true;
    }
  } else if(B.shootAt){
    // break the crate in front of us (no reason to keep a charge in reserve here)
    const k = B.shootAt;
    inp.aim = Math.atan2(k.x - f.x, k.z - f.z); inp.tx = k.x; inp.tz = k.z;
    if(canAttack(f) && f.ammo >= 1) inp.fire = true;
  } else if(f.hero === 'beetle' && canAttack(f) && f.ammo >= 2.5){
    // bomb the bush where an enemy was last seen
    for(const m of B.mem.values()){
      if(!m.o.alive || now - m.t > 2.5 || now - m.t < 0.4) continue;
      const d = Math.hypot(m.x - f.x, m.z - f.z);
      if(d < H.attack.range && (inGrass(m.x, m.z) || !sightClear(f.x, f.z, m.x, m.z))){ inp.aim = Math.atan2(m.x - f.x, m.z - f.z); inp.tx = m.x; inp.tz = m.z; inp.fire = true; break; }
    }
  }
}
