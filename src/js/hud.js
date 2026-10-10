// HUD: labels over heroes, score bar, countdown, feed, announcements, super meter, touch buttons, menus.
import * as THREE from 'three';
import { camera } from './engine.js';
import { G } from './state.js';
import { $, esc, TOUCH, clamp } from './util.js';
import { HEROES, HERO_IDS, ICONS, AMMO } from './heroes.js';
import { lookFor } from './combat.js';
import { SPORES } from './mode.js';
import { tr } from './i18n.js';

const V3 = new THREE.Vector3();
const gem = '<span class="gem-ico"></span>';

// ---------------- labels above heroes ----------------
export function makeTag(f){
  const el = document.createElement('div');
  el.className = 'tag ' + lookFor(f);
  el.innerHTML = `<div class="gm" hidden>${gem}<b></b></div><div class="tn">${esc(f.name)}</div><div class="hpb"><s></s><u></u><b></b></div>` + (f === G.me ? '<div class="am">' + '<i><u></u></i>'.repeat(AMMO) + '</div>' : '') + '<i class="sup"></i>';
  $('hud-world').appendChild(el);
  f.tag = { el, gm:el.querySelector('.gm'), gmb:el.querySelector('.gm b'), u:el.querySelector('.hpb u'), s:el.querySelector('.hpb s'), b:el.querySelector('.hpb b'), am:[...el.querySelectorAll('.am i')], last:{} };
}
export function updateTags(){
  const w = innerWidth, h = innerHeight;
  for(const f of G.fighters){
    const T = f.tag; if(!T) continue;
    const show = f.alive && f.seen && G.state !== 'menu' && $('end').hidden;
    if(!show){ if(T.last.vis !== false){ T.el.style.display = 'none'; T.last.vis = false; } continue; }
    V3.set(f.V.root.position.x, f.H.height + (f.H.hover || 0) + 0.45, f.V.root.position.z).project(camera);
    if(V3.z > 1 || Math.abs(V3.x) > 1.2 || Math.abs(V3.y) > 1.2){ if(T.last.vis !== false){ T.el.style.display = 'none'; T.last.vis = false; } continue; }
    if(T.last.vis !== true){ T.el.style.display = ''; T.last.vis = true; }
    T.el.style.transform = `translate(${((V3.x * 0.5 + 0.5) * w).toFixed(1)}px,${((-V3.y * 0.5 + 0.5) * h).toFixed(1)}px) translate(-50%,-100%)`;
    const hp = Math.max(0, Math.ceil(f.hp)), pct = (hp / f.max * 100).toFixed(1) + '%';
    if(T.last.hp !== hp){ T.u.style.width = pct; T.s.style.width = pct; T.b.textContent = hp; T.last.hp = hp; }
    if(T.last.gems !== f.gems){ T.gm.hidden = !f.gems; T.gmb.textContent = f.gems; T.last.gems = f.gems; }
    const ready = f.charge >= 1;
    if(T.last.ready !== ready){ T.el.classList.toggle('ready', ready); T.last.ready = ready; }
    if(T.am.length) T.am.forEach((el, i) => { const k = clamp(f.ammo - i, 0, 1); el.firstChild.style.width = (k * 100).toFixed(0) + '%'; el.classList.toggle('full', k >= 1); });
  }
}

// ---------------- top bar, countdown, super meter ----------------
const fmt = t => { t = Math.max(0, Math.ceil(t)); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); };
let lastCd = null;
export function updateHud(){
  const M = G.match, me = G.me; if(!M || !me) return;
  const mt = me.team;
  $('sc0').textContent = M.count[mt]; $('sc1').textContent = M.count[1 - mt];
  $('timer').textContent = fmt(M.dur - M.t);
  const cd = $('cdown');
  if(M.cd && !M.over){
    cd.hidden = false; const ours = M.cd.team === mt, n = Math.ceil(M.cd.t);
    cd.classList.toggle('foe', !ours);
    if(n !== lastCd){ $('cd-n').textContent = n; cd.classList.remove('pulse'); void cd.offsetWidth; cd.classList.add('pulse'); lastCd = n; }
    $('cd-t').textContent = ours ? tr('Держим споры!') : tr('Враг уносит споры!');
  } else { cd.hidden = true; lastCd = null; }
  // super meter
  const k = me.charge, ready = k >= 1;
  $('sp-ring').style.strokeDashoffset = (214 * (1 - k)).toFixed(1);
  $('superpc').classList.toggle('ready', ready);
  $('tsp-ring').style.strokeDashoffset = (277 * (1 - k)).toFixed(1);
  $('b-sup').classList.toggle('ready', ready);
  // ammo
  const segs = $('ammopc').children;
  for(let i = 0; i < segs.length; i++){ const a = clamp(me.ammo - i, 0, 1); segs[i].firstChild.style.width = (a * 100).toFixed(0) + '%'; segs[i].classList.toggle('full', a >= 1); }
  touchAmmo(me);
  // respawn
  const dead = $('dead');
  if(!me.alive && !M.over){ dead.hidden = false; $('dead-n').textContent = Math.max(1, Math.ceil(me.respawnT)); } else dead.hidden = true;
}
// the attack button doubles as the ammo gauge: three arcs around it
function touchAmmo(me){
  if(!TOUCH) return;
  const g = $('tammo'); if(!g.childElementCount){
    let s = ''; for(let i = 0; i < AMMO; i++){ s += `<path class="tammo-seg" stroke="rgba(0,0,0,.35)" d="${arc(i)}"/><path class="tammo-seg" id="tam${i}" stroke="#FFC93C" d="${arc(i)}"/>`; }
    g.innerHTML = s;
  }
  for(let i = 0; i < AMMO; i++){ const a = clamp(me.ammo - i, 0, 1), el = $('tam' + i), len = el.getTotalLength(); el.style.strokeDasharray = len; el.style.strokeDashoffset = (len * (1 - a)).toFixed(1); el.setAttribute('stroke', a >= 1 ? '#FFC93C' : '#FF8A3D'); }
}
function arc(i){
  const c = 60, r = 54, gap = 0.12, a0 = -Math.PI / 2 + (i / AMMO) * Math.PI * 2 + gap, a1 = -Math.PI / 2 + ((i + 1) / AMMO) * Math.PI * 2 - gap;
  return `M${(c + Math.cos(a0) * r).toFixed(1)} ${(c + Math.sin(a0) * r).toFixed(1)}A${r} ${r} 0 0 1 ${(c + Math.cos(a1) * r).toFixed(1)} ${(c + Math.sin(a1) * r).toFixed(1)}`;
}

// ---------------- feed & announcements ----------------
export function feed(html, cls){
  const el = document.createElement('div'); el.className = cls || ''; el.innerHTML = html;
  const box = $('feed'); box.appendChild(el);
  while(box.children.length > 4) box.firstChild.remove();
  setTimeout(() => el.remove(), 4200);
}
let annT = 0;
export function announce(big, small, cls, time = 1.8){
  const el = $('ann');
  el.className = 'ann ' + (cls || ''); el.innerHTML = '<b>' + esc(tr(big)) + '</b>' + (small ? '<span>' + esc(tr(small)) + '</span>' : '');
  void el.offsetWidth; el.classList.add('show');
  el.style.opacity = 1; annT = time;
}
export function tickAnnounce(dt){ if(annT > 0){ annT -= dt; if(annT <= 0) $('ann').style.opacity = 0; } }

// ---------------- menu ----------------
export function renderHeroes(sel, onPick){
  const box = $('heroes');
  box.innerHTML = HERO_IDS.map(id => { const H = HEROES[id]; return `<button class="hcard${id === sel ? ' sel' : ''}" data-h="${id}">${ICONS[id]}<b>${esc(H.name)}</b><small>${esc(H.role)}</small></button>`; }).join('');
  for(const b of box.querySelectorAll('.hcard')) b.onclick = () => onPick(b.dataset.h);
  const H = HEROES[sel];
  const bar = (label, v, max, txt) => `<div class="stat"><span>${label}</span><i><u style="width:${clamp(v / max * 100, 6, 100).toFixed(0)}%"></u></i><em>${txt}</em></div>`;
  const dps = H.attack.kind === 'fan' ? H.attack.dmg * H.attack.count : H.attack.kind === 'needle' ? H.attack.dmgFar : H.attack.dmg;
  $('hero-info').innerHTML = `<h3>${esc(H.name)}</h3><div class="sub">${esc(H.species)} · ${esc(H.role)}</div><p>${esc(H.desc)}</p>` +
    bar('Здоровье', H.hp, 4200, H.hp) + bar('Урон', dps, 1600, Math.round(dps)) + bar('Дальность', H.attack.range, 15, H.attack.range.toFixed(0) + ' м') + bar('Скорость', H.speed - 3.5, 2, H.speed.toFixed(1)) +
    `<div class="abil"><span class="k">⚔</span><div><b>${esc(H.attack.name)}</b><small>${esc(attackText(H.attack))}</small></div></div>` +
    `<div class="abil"><span class="k s">★</span><div><b>${esc(H.super.name)}</b><small>${esc(H.super.desc)}</small></div></div>`;
}
function attackText(W){
  if(W.kind === 'fan') return W.count + ' спор веером';
  if(W.kind === 'lob') return 'бомба через стены, горящая лужа';
  return 'дальний выстрел, урон растёт с расстоянием';
}

// ---------------- end of match ----------------
export function showEnd(result){
  const me = G.me, M = G.match;
  const t = $('e-title');
  t.textContent = tr(result === 'win' ? 'Победа!' : result === 'lose' ? 'Поражение' : 'Ничья');
  t.className = result;
  $('e-sub').textContent = tr(M.why === 'spores' ? (M.winner === me.team ? 'Твоя команда удержала споры.' : 'Враги удержали споры.') : 'Время вышло: ') + (M.why === 'time' ? M.count[me.team] + ' : ' + M.count[1 - me.team] : '');
  // MVP: kills, spores, damage
  const score = f => f.kills * 3 + f.dmgDone / 1500 + (f.gemsPicked || 0) * 0.6;
  const mvp = [...G.fighters].sort((a, b) => score(b) - score(a))[0];
  const rows = [...G.fighters].sort((a, b) => (a.team === me.team ? 0 : 1) - (b.team === me.team ? 0 : 1) || score(b) - score(a));
  $('e-board').innerHTML = rows.map(f => `<tr class="t${f.team === me.team ? 0 : 1}${f === me ? ' me' : ''}"><td>${ICONS[f.hero]}</td><td>${esc(f.name)}${f === mvp ? '<span class="mvp">MVP</span>' : ''}</td><td>⚔ ${f.kills}</td><td>☠ ${f.deaths}</td><td>${gem} ${f.gemsPicked || 0}</td><td>${Math.round(f.dmgDone)}</td></tr>`).join('');
  $('end').hidden = false;
}
