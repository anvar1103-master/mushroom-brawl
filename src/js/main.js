// Boot, match flow and the main loop.
import * as THREE from 'three';
import { $, TOUCH, store, shuffle, esc } from './util.js';
import { renderer, scene, camera, resize, applyQuality, render, perfWatch, skyTick, buildEnv, bakeSky, sky, Q } from './engine.js';
import { loadNature } from './assets.js';
import { buildArena, U, A, segHit } from './arena.js';
import { applyLang, tr, L } from './i18n.js';
import { G, on } from './state.js';
import { HEROES, HERO_IDS } from './heroes.js';
import { effectSamples, makeFighter, removeFighters, spawn, stepFighter, updateShots, updateLobs, updatePuddles, updateBeams, updateFighterVisuals, damage } from './combat.js';
import { makeVisual, animate, setTeamLook, kick } from './anim.js';
import { newBot, botThink } from './bots.js';
import { buildMine, startSpores, updateSpores, clearSpores } from './mode.js';
import { playerInput, updateCamera, updateGuide, CAM, releaseLock, lockHint } from './player.js';
import { makeTag, updateTags, updateHud, feed, announce, tickAnnounce, renderHeroes, showEnd } from './hud.js';
import { updateFx, clearFx, explosion, hitSpark, sporeBurst } from './fx.js';
import { preloadSfx, unlockAudio, sfx, AU, setSfx, setMusic } from './audio.js';
import { yaInit, yaLoaded, yaTick, yaInterstitial, YA, onYandex } from './yandex.js';

const MENU = { hero:HEROES[store.get('hero', 'shroom')] ? store.get('hero', 'shroom') : 'shroom', diff:store.get('diff', 'normal') };
const NAMES = ['Груздь', 'Опёнок', 'Сморчок', 'Рыжик', 'Маслёнок', 'Волнушка', 'Строчок', 'Белянка', 'Ежовик', 'Дубовик', 'Вешенка', 'Короед', 'Шершень', 'Жужелица', 'Щелкун', 'Светлячок', 'Медведка', 'Долгоносик'];

// ---------------- boot ----------------
if(onYandex()) await yaInit(); else applyLang();
const setLoad = k => { $('load-bar').style.width = Math.round(k * 100) + '%'; };
await Promise.all([loadNature(k => setLoad(k * 0.85)), preloadSfx()]);
setLoad(0.92);
buildEnv();
bakeSky();
buildArena('glade');
buildMine();
applyQuality();
addEventListener('resize', resize);
// warm up: put one of every effect in the scene and compile all shaders now, not during the first fight
{
  const samples = effectSamples(); samples.forEach(m => scene.add(m));
  explosion(A.mine.x, A.mine.z, 1.7); hitSpark(0, 1, 0, '#fff'); sporeBurst(0, 1, 0, '#fff', 4);
  for(const H of HERO_IDS){ const V = makeVisual(H); scene.add(V.root); samples.push(V.root); }
  try{ renderer.compile(scene, camera); }catch(e){}
  samples.forEach(m => scene.remove(m)); clearFx(); G.shake = 0;
}
$('load').hidden = true;

// ---------------- menu ----------------
let preview = null;
function setPreview(id){
  if(preview){ scene.remove(preview.V.root); preview.V.mesh.geometry.dispose(); }
  const V = makeVisual(id); setTeamLook(V, 'me'); scene.add(V.root);
  const s = A.spawns[0][1];
  preview = { V, hop:1.2, f:{ id:99, x:s.x, z:s.z - 1.2, vx:0, vz:0, aim:Math.PI, alive:true, atkT:9, supT:0, flash:0, deadT:0, victory:false } };
  V.yaw = Math.PI; kick.spawn(V);
}
function renderMenu(){
  renderHeroes(MENU.hero, id => { MENU.hero = id; store.set('hero', id); sfx('select'); renderMenu(); setPreview(id); });
  for(const [id, val] of [['m-diff', MENU.diff], ['m-q', Q.level]]) for(const b of $(id).querySelectorAll('button')) b.classList.toggle('sel', b.dataset.v === val);
  for(const b of $('m-snd').querySelectorAll('button')){ const on = b.dataset.v === 'sfx' ? AU.sfxOn : AU.musicOn; b.classList.toggle('sel', on); b.classList.toggle('off', !on); }
  $('howto').textContent = tr(TOUCH ? 'Левый палец — бег, правый — поворот камеры. Кнопка атаки: короткое нажатие — автоприцел, с протяжкой — целишься сам. Звезда — супер.' : 'WASD — бег, мышь — камера и прицел, ЛКМ — атака, ПКМ или E — супер, Esc — пауза.');
}
$('m-diff').onclick = e => { const v = e.target.dataset.v; if(!v) return; MENU.diff = v; store.set('diff', v); sfx('click'); renderMenu(); };
$('m-q').onclick = e => { const v = e.target.dataset.v; if(!v || v === Q.level) return; applyQuality(v); sfx('click'); setTimeout(() => location.reload(), 120); };
$('m-snd').onclick = e => { const v = e.target.dataset.v; if(!v) return; unlockAudio(); if(v === 'sfx') setSfx(!AU.sfxOn); else setMusic(!AU.musicOn); sfx('click'); renderMenu(); };
$('play').onclick = () => { unlockAudio(); sfx('confirm'); startMatch(); };
function showMenu(){
  G.state = 'menu'; G.paused = false;
  cleanup();
  $('menu').hidden = false; $('hud').hidden = true; $('end').hidden = true; $('pause').hidden = true;
  renderMenu(); setPreview(MENU.hero);
}
function cleanup(){
  removeFighters(); clearSpores(); clearFx();
  for(const s of G.shots) scene.remove(s.m); G.shots.length = 0;
  for(const l of G.lobs){ scene.remove(l.m); scene.remove(l.mark); } G.lobs.length = 0;
  for(const p of G.puddles) scene.remove(p.m); G.puddles.length = 0;
  for(const b of G.beams){ scene.remove(b.core); scene.remove(b.outer); } G.beams.length = 0;
  G.match = null;
}

// ---------------- match ----------------
let countT = 0, endT = 0, lastCount = 0;
function startMatch(opts = {}){
  cleanup();
  if(preview){ scene.remove(preview.V.root); preview = null; }
  startSpores();
  const names = shuffle([...NAMES]);
  const myHero = opts.hero || MENU.hero;
  // allies take the heroes you didn't pick; enemies get a random line-up
  const allyHeroes = shuffle(HERO_IDS.filter(h => h !== myHero)).concat(HERO_IDS).slice(0, 2);
  const foeHeroes = shuffle([...HERO_IDS]);
  const team0 = [allyHeroes[0], myHero, allyHeroes[1]];
  for(let team = 0; team < 2; team++) for(let slot = 0; slot < 3; slot++){
    const isMe = team === 0 && slot === 1;
    const hero = team === 0 ? team0[slot] : foeHeroes[slot];
    const f = makeFighter({ name:isMe ? tr('Ты') : tr(names.pop()), team, hero, isMe });
    f.slot = slot; f.gemsPicked = 0;
    if(isMe) G.me = f; else f.bot = newBot(opts.diff || MENU.diff);
  }
  for(const f of G.fighters){ makeTag(f); spawn(f); }
  CAM.yaw = G.me.team === 0 ? Math.PI : 0; CAM.x = G.me.x; CAM.z = G.me.z; CAM.pitch = -0.08;
  G.state = 'countdown'; countT = 3.2; lastCount = 4; endT = 0;
  $('menu').hidden = true; $('end').hidden = true; $('hud').hidden = false;
  $('touch').hidden = !TOUCH; $('superpc').hidden = TOUCH; $('ammopc').hidden = TOUCH; document.body.classList.toggle('touch-on', TOUCH);
  $('lockhint').hidden = TOUCH;
  announce('Споры', 'Собери 10 спор и удержи их 15 секунд', 'sun', 2.4);
}
function countdown(dt){
  countT -= dt;
  const n = Math.ceil(countT);
  if(n !== lastCount && n >= 1 && n <= 3){ lastCount = n; announce(String(n), '', 'sun', 0.8); sfx('countdown'); }
  if(countT <= 0){ G.state = 'play'; announce('В бой!', '', 'sun', 1); sfx('start'); }
}
function endMatch(team){
  G.state = 'end'; endT = 0;
  const me = G.me, res = team < 0 ? 'draw' : team === me.team ? 'win' : 'lose';
  G.result = res;
  for(const f of G.fighters){
    if(team >= 0 && f.team === team){ if(!f.alive) spawn(f, { x:f.x, z:f.z }); f.victory = true; }
    else if(team >= 0) f.defeat = true;
    f.inp.mx = f.inp.mz = 0;
  }
  // the camera visits the best fighter of the winning side (you, if you won)
  const score = f => f.kills * 3 + f.dmgDone / 1500 + (f.gemsPicked || 0) * 0.6;
  G.endFocus = team < 0 || team === me.team ? me : G.fighters.filter(f => f.team === team).sort((a, b) => score(b) - score(a))[0];
  // look at the hero from the front, from whichever side has no hedge in the way
  G.endYaw = G.endFocus.V.yaw;
  for(const d of [0, 0.6, -0.6, 1.2, -1.2, 1.8, -1.8, 2.6, -2.6, Math.PI]){
    const a = G.endFocus.V.yaw + d, f = G.endFocus;
    if(segHit(f.x, f.z, f.x + Math.sin(a) * 5, f.z + Math.cos(a) * 5) < 0){ G.endYaw = a; break; }
  }
  for(const f of G.fighters) if(f.victory) f.aim = G.endYaw;
  announce(res === 'win' ? 'Победа!' : res === 'lose' ? 'Поражение' : 'Ничья', '', res === 'win' ? 'sun' : res === 'lose' ? 'foe' : 'ally', 2.2);
  sfx(res === 'lose' ? 'lose' : 'win');
  releaseLock();
}
$('e-again').onclick = () => { sfx('confirm'); yaInterstitial(() => startMatch()); };
$('e-menu').onclick = () => { sfx('click'); yaInterstitial(showMenu); };

// ---------------- events → HUD ----------------
const nameOf = f => `<b style="color:${f === G.me ? 'var(--sun)' : f.team === G.me.team ? 'var(--ally)' : 'var(--foe)'}">${esc(f.name)}</b>`;
on('kill', (o, src) => {
  if(!G.me) return;
  if(src && src !== o) feed(nameOf(src) + ' ⚔ ' + nameOf(o), src === G.me ? 'm' : src.team === G.me.team ? 'a' : 'f');
  if(src === G.me && o !== G.me){ announce('Срезал!', o.name, 'sun', 1.1); sfx('kill'); }
  if(o === G.me) announce('Тебя срезали', src ? src.name : '', 'foe', 1.6);
});
on('pickup', f => { f.gemsPicked = (f.gemsPicked || 0) + 1; });
on('countdownStart', team => { const ours = team === G.me.team; announce(ours ? 'Споры у нас!' : 'Враг набрал споры!', ours ? 'Держитесь 15 секунд' : 'Отберите их!', ours ? 'ally' : 'foe', 1.8); sfx(ours ? 'super_ready' : 'gem_drop'); });
on('countdownStop', () => { if(G.state === 'play') announce('Отсчёт сброшен', '', 'sun', 1.2); });
on('countdownTick', n => { if(n <= 5) sfx('countdown', null, 0.8); });
on('matchOver', team => endMatch(team));
on('superReady', f => { if(f === G.me) sfx('super_ready'); });
on('empty', f => { if(f === G.me) sfx('empty'); });
on('damage', (o, amt, src) => { if(o === G.me) sfx('hurt', null, 0.7); else if(src === G.me) sfx('hit', null, 0.6); });
on('spawn', f => { if(f === G.me && G.state === 'play'){ sfx('respawn'); CAM.yaw = f.team === 0 ? Math.PI : 0; CAM.x = f.x; CAM.z = f.z; } });

// ---------------- pause ----------------
function setPause(p){
  if(G.state !== 'play' && G.state !== 'countdown') p = false;
  G.paused = p; $('pause').hidden = !p;
  if(p) releaseLock();
}
$('pause-btn').onclick = () => setPause(true);
$('p-resume').onclick = () => { sfx('click'); setPause(false); };
$('p-quit').onclick = () => { sfx('click'); setPause(false); showMenu(); };
addEventListener('keydown', e => { if((e.code === 'Escape' || e.code === 'KeyP') && (G.state === 'play' || G.state === 'countdown')) setPause(!G.paused); });
document.addEventListener('visibilitychange', () => { if(document.hidden && G.state === 'play') setPause(true); });

// ---------------- loop ----------------
const PUSH_R = 0.95, endCam = new THREE.Vector3();
function tick(dt){
  G.time += dt; U.time.value = G.time; skyTick(dt);
  yaTick();
  const live = G.state === 'play' || G.state === 'countdown' || G.state === 'end';
  if(live){
    if(G.state === 'countdown') countdown(dt);
    if(G.state === 'play' && G.me && G.me.alive && !G.me.bot && !G.noInput) playerInput(dt);
    for(const f of G.fighters) if(f.bot && G.state === 'play') botThink(f, dt);
    for(const f of G.fighters) stepFighter(f, dt);
    updateShots(dt); updateLobs(dt); updatePuddles(dt); updateBeams(dt);
    updateSpores(dt, G.time);
    if(G.state === 'end'){ endT += dt; if(endT > 2.6 && $('end').hidden){ showEnd(G.result); $('hud').hidden = true; } }
  }
  updateFighterVisuals(dt, G.time);
  // grass bends away from everyone walking through it
  let n = 0;
  for(const f of G.fighters) if(f.alive && n < U.push.value.length) U.push.value[n++].set(f.x, f.z, PUSH_R);
  if(preview && n < U.push.value.length) U.push.value[n++].set(preview.f.x, preview.f.z, PUSH_R);
  for(; n < U.push.value.length; n++) U.push.value[n].set(0, 0, 0);
  if(G.me && G.me.alive && G.state !== 'menu') U.me.value.set(G.me.x, G.me.z, 2.2); else U.me.value.set(0, 0, 0);
  // camera
  if(G.dbgCam){ camera.position.set(G.dbgCam[0], G.dbgCam[1], G.dbgCam[2]); camera.lookAt(G.dbgCam[3], G.dbgCam[4], G.dbgCam[5]); }
  else if(G.state === 'menu' && preview){
    const p = preview, f = p.f;
    p.hop -= dt; f.victory = p.hop > 0; f.supT += dt;
    animate(p.V, f, dt, G.time);
    const off = innerWidth / innerHeight > 1.3 ? 0.35 : 0;
    camera.position.set(f.x + off * 1.5, 1.55, f.z - 4.4);
    camera.lookAt(f.x + off, 0.75, f.z);
  } else if(G.state === 'end' && G.me){
    const f = G.endFocus || G.me, a = G.endYaw + Math.sin(G.time * 0.3) * 0.35;
    endCam.set(f.x + Math.sin(a) * 4.6, 2.7, f.z + Math.cos(a) * 4.6);
    camera.position.lerp(endCam, 1 - Math.exp(-dt * 2.5));
    camera.lookAt(f.x, 0.8, f.z);
  } else if(G.me) updateCamera(dt);
  updateGuide(); lockHint();
  updateFx(dt);
  updateTags();
  if(G.state !== 'menu') updateHud();
  tickAnnounce(dt);
  sky.position.copy(camera.position);
}
let last = performance.now();
function frame(now){
  const raw = (now - last) / 1000; last = now;
  let dt = Math.min(0.05, raw);
  if(G.state === 'end' && endT < 1.2) dt *= 0.4;
  if(!G.paused && !YA.adOn) tick(dt);
  perfWatch(raw, G.state === 'play');
  render();
  requestAnimationFrame(frame);
}

showMenu();
yaLoaded();
requestAnimationFrame(frame);

// ---------------- test hooks (used by tools/test.mjs) ----------------
window.__bg = {
  start(o = {}){ if(o.hero) MENU.hero = o.hero; if(o.diff) MENU.diff = o.diff; startMatch(o); if(o.skipCount){ countT = 0; G.state = 'play'; } },
  autopilot(on){ if(G.me) G.me.bot = on ? newBot('normal') : null; },
  sim(sec, step = 1 / 30){ const n = Math.round(sec / step); for(let i = 0; i < n; i++){ tick(step); if(G.state === 'end' && endT > 3) break; } },
  get s(){ const M = G.match; return { state:G.state, t:M && +M.t.toFixed(1), count:M && [...M.count], cd:M && M.cd && { team:M.cd.team, t:+M.cd.t.toFixed(1) }, over:M && M.over, winner:M && M.winner, why:M && M.why, pickups:G.pickups.length,
    me:G.me && { hp:Math.round(G.me.hp), alive:G.me.alive, x:+G.me.x.toFixed(1), z:+G.me.z.toFixed(1), gems:G.me.gems, charge:+G.me.charge.toFixed(2), ammo:+G.me.ammo.toFixed(2) } }; },
  board:() => G.fighters.map(f => `${f.name}[${f.hero}/t${f.team}] k${f.kills} d${f.deaths} g${f.gemsPicked} dmg${Math.round(f.dmgDone)}`),
  fighters:() => G.fighters, G, A, CAM, menu:MENU, showMenu, cam(a){ G.dbgCam = a; },
  info:() => ({ calls:renderer.info.render.calls, tris:renderer.info.render.triangles, geos:renderer.info.memory.geometries, tex:renderer.info.memory.textures, progs:renderer.info.programs.length, PR:Q.PR, post:Q.post }),
  post(v){ Q.post = !!v && !!Q.composer; Q.noPost = !v; },
  pause:setPause, tr, L, tick, dmg:damage,
  // frame-time benchmark for tools: n frames of game update + render, waiting for the GPU each frame
  bench(n = 60, pr){ if(pr){ renderer.setPixelRatio(pr); resize(); } const gl = renderer.getContext(), t0 = performance.now(); const px = new Uint8Array(4); for(let i = 0; i < n; i++){ tick(1 / 60); render(); gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px); } return (performance.now() - t0) / n; }
};
window.__bgReady = true;
