// Heroes: stats, attacks, supers and their rigged models.
import * as THREE from 'three';
import { Rig } from './rig.js';
import { stdMat } from './engine.js';
import { TAU } from './util.js';

// Numbers are in metres, seconds and hit points.
// attack kinds: fan (spread of pellets), lob (thrown over walls, splash + puddle), needle (long fast shot, harder far away),
// bounce (a pebble that ricochets off hedges; bounces: how many times; pierce: rolls through fighters instead of stopping;
//   ricochet: damage multiplier once it has bounced), burst (a quick string of small shots; bloom: how much each shot
//   widens the spread while you keep firing), frenzy (super: a few seconds of faster, tighter bursts)
export const HEROES = {
  shroom:{
    name:'Шляпник', species:'мухомор', role:'Дробовик', color:'#E23A2E', hp:3900, speed:5.0, rad:0.42, height:1.35,
    desc:'Споровый дробовик бьёт веером: вблизи разносит любого.',
    attack:{ kind:'fan', name:'Споровый веер', count:5, spread:0.5, range:7.2, speed:24, dmg:310, reload:1.5, cd:0.42, size:0.2, color:'#FF6B4A' },
    super:{ kind:'fan', name:'Грибной залп', desc:'широкий залп отбрасывает врагов', count:11, spread:0.85, range:8.6, speed:27, dmg:330, knock:3.4, size:0.28, color:'#FFD24A', charge:4600 }
  },
  beetle:{
    name:'Бабах', species:'жук-бомбардир', role:'Метатель', color:'#3B57D6', hp:3000, speed:4.7, rad:0.44, height:1.25,
    desc:'Кидает бомбы навесом через стены. Взрыв оставляет горящую лужу.',
    attack:{ kind:'lob', name:'Жучиная бомба', range:10, flight:0.78, radius:1.7, dmg:820, reload:1.9, cd:0.5, puddle:{ r:1.35, dps:320, t:1.8 }, color:'#FF9A2E' },
    super:{ kind:'barrage', name:'Ковровая бомбёжка', desc:'пять бомб ложатся дорожкой', count:5, range:12, flight:0.95, radius:1.9, dmg:1050, knock:2.2, step:1.9, color:'#FF5A2E', charge:3900 }
  },
  wasp:{
    name:'Жалка', species:'оса', role:'Снайпер', color:'#F5C21B', hp:2500, speed:5.2, rad:0.4, height:1.45, hover:0.22,
    desc:'Дальнобойное жало: чем дальше цель, тем больнее.',
    attack:{ kind:'needle', name:'Жало', range:15, speed:40, dmg:900, dmgFar:1650, reload:1.9, cd:0.5, size:0.16, color:'#FFB21E' },
    super:{ kind:'beam', name:'Пронзающий луч', desc:'луч прошивает стены и всех на пути', range:21, width:0.75, dmg:2100, windup:0.38, color:'#FFE15A', charge:3600 }
  },
  roly:{
    name:'Катыш', species:'мокрица', role:'Рикошет', color:'#6E7FA3', hp:3500, speed:5.0, rad:0.42, height:1.3,
    desc:'Рогатка стреляет скачущими катышами: они отлетают от кустов и достают врага за углом.',
    attack:{ kind:'bounce', name:'Скачущий катыш', range:12, speed:24, dmg:800, bounces:2, ricochet:1.35, reload:1.2, cd:0.38, size:0.24, color:'#7FE7FF' },
    super:{ kind:'bounce', name:'Большой катыш', desc:'огромный шар долго скачет по коридорам и бьёт всех на пути', range:30, speed:13, dmg:1150, bounces:7, pierce:true, knock:2.4, size:0.5, color:'#B8F4FF', charge:3000 }
  },
  hopper:{
    name:'Стрекот', species:'кузнечик', role:'Автоматчик', color:'#5DB83A', hp:3400, speed:5.3, rad:0.4, height:1.35,
    desc:'Споровый автомат бьёт очередями. Держи кнопку — разброс растёт, стреляй короткими очередями.',
    attack:{ kind:'burst', name:'Споровая очередь', count:5, gap:0.07, spread:0.05, bloom:0.12, range:9.5, speed:30, dmg:200, reload:1.05, cd:0.42, size:0.13, color:'#B6FF5A' },
    super:{ kind:'frenzy', name:'Стрекотня', desc:'4 секунды стреляет быстрее и точнее, очереди длиннее', time:4, color:'#E2FF8A', charge:4200 }
  }
};
export const HERO_IDS = Object.keys(HEROES);
export const AMMO = 3;

const SK = '#FFF0D9'; // light stem colour

// ---------------- models ----------------
export function buildHero(id){
  const R = new Rig();
  const B = R.bones;
  const parts = {};
  if(id === 'shroom'){
    R.bone('hips', null, 0, 0.42, 0);
    R.bone('body', 'hips');
    R.bone('head', 'body', 0, 0.68, 0);
    R.bone('eyes', 'body', 0, 0.36, 0.27);
    R.bone('armL', 'body', 0.3, 0.36, 0.04); R.bone('armR', 'body', -0.3, 0.36, 0.04);
    R.bone('gun', 'armR', 0.04, -0.14, 0.24);
    R.bone('footL', null, 0.16, 0, 0); R.bone('footR', null, -0.16, 0, 0);
    // stem with a face
    R.lathe(B.body, SK, [[0, -0.36], [0.24, -0.35], [0.31, -0.18], [0.33, 0.1], [0.31, 0.4], [0.27, 0.66], [0, 0.72]]);
    R.eyes(B.eyes, 0, 0, 0.115, 0.085, { brow:0.32 });
    R.sph(B.body, '#5A2A22', [0, 0.2, 0.295], [0.06, 0.035, 0.03]);
    for(const s of [-1, 1]) R.sph(B.body, '#FF9C9C', [s * 0.19, 0.25, 0.25], [0.05, 0.03, 0.02]);
    R.prim(B.body, 'torus', '#F3DFC0', [0, 0.58, 0], [0.3, 0.3, 0.42], [Math.PI / 2, 0, 0]);
    R.prim(B.body, 'torus', '#3FA34D', [0, -0.02, 0], [0.33, 0.33, 0.4], [Math.PI / 2, 0, 0]);   // belt
    R.prim(B.body, 'box', '#2E7A38', [0.0, -0.02, 0.33], [0.12, 0.1, 0.04]);
    // cap with spots
    R.prim(B.head, 'dome', '#E0332A', [0, -0.05, 0], [0.66, 0.46, 0.66]);
    R.prim(B.head, 'disc', '#F6E2C2', [0, -0.05, 0], [0.65, 1, 0.65], [Math.PI, 0, 0]);
    R.prim(B.head, 'torus', '#E9CFA6', [0, -0.07, 0], [0.5, 0.5, 0.25], [Math.PI / 2, 0, 0]);
    const spots = [[0, 0.95], [0.9, 0.55], [2.0, 0.6], [3.1, 0.55], [4.2, 0.6], [5.3, 0.55], [0.5, 0.25], [2.6, 0.25], [4.6, 0.28], [1.6, 0.25]];
    for(const [a, el] of spots){
      const x = Math.cos(a) * Math.cos(el) * 0.66, y = Math.sin(el) * 0.46, z = Math.sin(a) * Math.cos(el) * 0.66;
      const n = new THREE.Vector3(x / 0.44, y / 0.21, z / 0.44).normalize();
      const s = 0.1 + (el > 0.9 ? 0.05 : 0.02);
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), n), e = new THREE.Euler().setFromQuaternion(q);
      R.sph(B.head, '#FFF8EC', [x, y - 0.05, z], [s, s * 0.3, s], [e.x, e.y, e.z]);
    }
    // arms and the blunderbuss
    R.limb(B.armR, SK, [0, 0, 0], [0.02, -0.12, 0.2], 0.065); R.sph(B.armR, SK, [0.03, -0.14, 0.24], 0.085);
    R.limb(B.armL, SK, [0, 0, 0], [-0.12, -0.1, 0.26], 0.065); R.sph(B.armL, SK, [-0.15, -0.11, 0.33], 0.085);
    R.prim(B.gun, 'box', '#8A5A32', [0, 0, -0.08], [0.1, 0.13, 0.26]);
    R.prim(B.gun, 'cyl', '#5E8F3A', [0, 0.03, 0.2], [0.07, 0.36, 0.07], [Math.PI / 2, 0, 0]);
    R.prim(B.gun, 'cone', '#C9A24A', [0, 0.03, 0.44], [0.15, 0.2, 0.15], [-Math.PI / 2, 0, 0]);
    R.prim(B.gun, 'torus', '#E7C35C', [0, 0.03, 0.54], [0.14, 0.14, 0.14]);
    R.sph(B.gun, '#9BFF6A', [0, 0.13, 0.08], [0.07, 0.07, 0.1], null, { glow:0.7 });
    parts.muzzle = [0, 0.03, 0.56];
    for(const s of ['L', 'R']) R.sph(B['foot' + s], '#7A4A2A', [0, 0.07, 0.03], [0.11, 0.08, 0.15]);
  }
  else if(id === 'beetle'){
    R.bone('hips', null, 0, 0.4, 0);
    R.bone('body', 'hips');
    R.bone('elyL', 'body', 0.04, 0.3, 0.1); R.bone('elyR', 'body', -0.04, 0.3, 0.1);
    R.bone('head', 'body', 0, 0.12, 0.36);
    R.bone('antL', 'head', 0.08, 0.17, 0.08); R.bone('antR', 'head', -0.08, 0.17, 0.08);
    R.bone('eyes', 'head', 0, 0.05, 0.15);
    R.bone('armL', 'body', 0.38, 0.06, 0.16); R.bone('armR', 'body', -0.38, 0.06, 0.16);
    R.bone('gun', 'armR', -0.02, -0.06, 0.2);
    R.bone('footL', null, 0.18, 0, 0); R.bone('footR', null, -0.18, 0, 0);
    // belly and shell (two wing cases that open for the super)
    R.sph(B.body, '#C98A3A', [0, -0.05, 0.02], [0.4, 0.36, 0.42]);
    for(let i = 0; i < 4; i++) R.prim(B.body, 'torus', '#A86C2C', [0, -0.18 + i * 0.07, 0.06], [0.33 - Math.abs(i - 1.5) * 0.03, 0.33 - Math.abs(i - 1.5) * 0.03, 0.2], [Math.PI / 2, 0, 0]);
    for(const [s, bn] of [[1, 'elyL'], [-1, 'elyR']]){
      const g = new THREE.SphereGeometry(1, 16, 12, s > 0 ? -Math.PI / 2 : Math.PI / 2, Math.PI, 0, Math.PI * 0.62);
      g.scale(0.45, 0.46, 0.5); g.translate(-s * 0.04, -0.2, -0.12);
      R.add(B[bn], g, '#2E45B8');
      R.prim(B[bn], 'sph', '#7FA0FF', [s * 0.17, 0.12, -0.08], [0.09, 0.05, 0.16], [0.3, 0, s * 0.4], { glow:0.25 });
      R.prim(B[bn], 'sph', '#22348A', [s * 0.22, -0.02, -0.3], [0.06, 0.06, 0.06]);
    }
    // bomb belt on the side
    for(let i = 0; i < 3; i++){ R.sph(B.body, '#2A2A30', [0.36 - i * 0.03, -0.12, -0.12 + i * 0.13], 0.08); R.prim(B.body, 'cyl', '#C9A24A', [0.37 - i * 0.03, -0.04, -0.12 + i * 0.13], [0.02, 0.05, 0.02]); }
    // little legs
    for(const s of [-1, 1]) for(let k = 0; k < 2; k++) R.limb(B.body, '#1F1A24', [s * 0.3, -0.1, 0.12 - k * 0.24], [s * 0.46, -0.32, 0.16 - k * 0.3], 0.03);
    // head: big eyes, mandibles, antennae
    R.sph(B.head, '#1F2340', [0, 0, 0], [0.24, 0.22, 0.22]);
    R.eyes(B.eyes, 0, 0, 0.1, 0.085, { brow:-0.25, browColor:'#0E0F1E' });
    for(const s of [-1, 1]){ R.prim(B.head, 'cone', '#C98A3A', [s * 0.08, -0.11, 0.2], [0.035, 0.12, 0.035], [1.9, 0, s * -0.5]); }
    for(const [s, bn] of [[1, 'antL'], [-1, 'antR']]){
      R.tube(B[bn], '#1F2340', [[0, 0, 0], [s * 0.06, 0.12, 0.04], [s * 0.15, 0.2, 0.02], [s * 0.22, 0.22, -0.04]], 0.018);
      R.sph(B[bn], '#FF8A3A', [s * 0.22, 0.22, -0.04], 0.04, null, { glow:0.4 });
    }
    // arms; the right hand holds a lit bomb
    R.limb(B.armR, '#1F1A24', [0, 0, 0], [-0.02, -0.06, 0.18], 0.05); R.sph(B.armR, '#C98A3A', [-0.02, -0.07, 0.2], 0.07);
    R.limb(B.armL, '#1F1A24', [0, 0, 0], [0.04, -0.08, 0.18], 0.05); R.sph(B.armL, '#C98A3A', [0.04, -0.09, 0.2], 0.07);
    R.sph(B.gun, '#25252C', [0, 0.06, 0.08], 0.15);
    R.sph(B.gun, '#4A4A58', [0.05, 0.12, 0.13], 0.04, null, { glow:0.3 });
    R.prim(B.gun, 'cyl', '#C9A24A', [0, 0.22, 0.08], [0.025, 0.08, 0.025]);
    R.sph(B.gun, '#FFD04A', [0, 0.27, 0.08], 0.035, null, { glow:2.5 });
    parts.muzzle = [0, 0.06, 0.1];
    for(const s of ['L', 'R']) R.sph(B['foot' + s], '#C98A3A', [0, 0.06, 0.04], [0.11, 0.07, 0.15]);
  }
  else if(id === 'wasp'){
    const hv = HEROES.wasp.hover;
    R.bone('hips', null, 0, 0.62 + hv, 0);
    R.bone('body', 'hips');
    R.bone('abd', 'body', 0, -0.04, -0.2);
    R.bone('head', 'body', 0, 0.3, 0.06);
    R.bone('antL', 'head', 0.07, 0.17, 0.08); R.bone('antR', 'head', -0.07, 0.17, 0.08);
    R.bone('wingL', 'body', 0.1, 0.17, -0.08); R.bone('wingR', 'body', -0.1, 0.17, -0.08);
    R.bone('armL', 'body', 0.2, 0.06, 0.1); R.bone('armR', 'body', -0.2, 0.06, 0.1);
    R.bone('gun', 'armR', 0.06, -0.1, 0.12);
    R.bone('footL', 'hips', 0.1, -0.26, 0.02); R.bone('footR', 'hips', -0.1, -0.26, 0.02);
    // fuzzy thorax with a yellow collar
    R.sph(B.body, '#2E2620', [0, 0.04, 0], [0.24, 0.27, 0.25]);
    R.prim(B.body, 'torus', '#F5C21B', [0, 0.22, 0.02], [0.17, 0.17, 0.3], [Math.PI / 2, 0, 0]);
    // striped abdomen
    const rings = [[0.0, 0.17], [0.12, 0.23], [0.25, 0.25], [0.38, 0.23], [0.5, 0.18], [0.6, 0.11]];
    for(let i = 0; i < rings.length; i++){
      const [z, r] = rings[i];
      R.prim(B.abd, 'sph', i % 2 ? '#26201A' : '#F5C21B', [0, -0.06 - z * 0.25, -z], [r, r, 0.09]);
    }
    R.prim(B.abd, 'cone', '#26201A', [0, -0.22, -0.72], [0.04, 0.16, 0.04], [-1.9, 0, 0]);
    // head: big compound eyes, smile, antennae
    R.sph(B.head, '#F5C21B', [0, 0, 0], [0.22, 0.21, 0.2]);
    for(const s of [-1, 1]){
      R.sph(B.head, '#1B1A2A', [s * 0.13, 0.03, 0.1], [0.1, 0.14, 0.09], [0, s * 0.3, 0]);
      R.prim(B.head, 'sphLo', '#FFFFFF', [s * 0.11, 0.09, 0.18], 0.025, null, { glow:0.8 });
      R.prim(B.head, 'sphLo', '#8FA8FF', [s * 0.16, -0.02, 0.17], 0.018, null, { glow:0.5 });
    }
    R.prim(B.head, 'torus', '#5A2A1A', [0, -0.09, 0.17], [0.05, 0.05, 0.05], [0, 0, Math.PI]);
    for(const [s, bn] of [[1, 'antL'], [-1, 'antR']]){
      R.tube(B[bn], '#26201A', [[0, 0, 0], [s * 0.03, 0.14, 0.06], [s * 0.1, 0.24, 0.1], [s * 0.18, 0.27, 0.16]], 0.015);
      R.sph(B[bn], '#26201A', [s * 0.18, 0.27, 0.16], 0.03);
    }
    // arms and the long stinger rifle
    R.limb(B.armR, '#26201A', [0, 0, 0], [0.04, -0.08, 0.1], 0.035); R.sph(B.armR, '#F5C21B', [0.05, -0.1, 0.12], 0.05);
    R.limb(B.armL, '#26201A', [0, 0, 0], [-0.1, -0.08, 0.26], 0.035); R.sph(B.armL, '#F5C21B', [-0.11, -0.09, 0.3], 0.05);
    R.prim(B.gun, 'box', '#6B4A2E', [0, -0.01, -0.1], [0.07, 0.1, 0.3]);
    R.prim(B.gun, 'cyl', '#3A3A44', [0, 0.02, 0.32], [0.035, 0.66, 0.035], [Math.PI / 2, 0, 0]);
    R.prim(B.gun, 'cone', '#E8C84A', [0, 0.02, 0.72], [0.04, 0.16, 0.04], [Math.PI / 2, 0, 0]);
    R.prim(B.gun, 'cyl', '#26201A', [0, 0.1, 0.12], [0.04, 0.26, 0.04], [Math.PI / 2, 0, 0]);
    R.sph(B.gun, '#FFB21E', [0, 0.1, 0.26], [0.04, 0.04, 0.02], null, { glow:2 });
    parts.muzzle = [0, 0.02, 0.82];
    for(const s of ['L', 'R']){ R.limb(B['foot' + s], '#26201A', [0, 0.1, 0], [0, -0.05, 0.03], 0.03); R.sph(B['foot' + s], '#26201A', [0, -0.07, 0.05], [0.05, 0.035, 0.07]); }
  }
  else if(id === 'roly'){
    // a woodlouse: banded armour on the back, a pale soft belly, long feelers and a slingshot
    R.bone('hips', null, 0, 0.42, 0);
    R.bone('body', 'hips');
    R.bone('head', 'body', 0, 0.42, 0.1);
    R.bone('antL', 'head', 0.08, 0.14, 0.1); R.bone('antR', 'head', -0.08, 0.14, 0.1);
    R.bone('eyes', 'head', 0, 0.01, 0.2);
    R.bone('armL', 'body', 0.32, 0.14, 0.12); R.bone('armR', 'body', -0.32, 0.14, 0.12);
    R.bone('gun', 'armR', -0.02, -0.1, 0.2);
    R.bone('footL', null, 0.16, 0, 0); R.bone('footR', null, -0.16, 0, 0);
    R.sph(B.body, '#E4DCEE', [0, 0.02, 0.06], [0.3, 0.38, 0.28]);
    // seven armour bands, widest in the middle, each with a pale rim
    for(let i = 0; i < 7; i++){
      const y = -0.3 + i * 0.105, w = 0.37 - Math.abs(i - 3) * 0.035;
      R.prim(B.body, 'sph', i % 2 ? '#5F6E91' : '#6E7FA3', [0, y, -0.05], [w, 0.085, w * 0.92]);
      R.prim(B.body, 'torus', '#B9C4DE', [0, y + 0.03, -0.05], [w * 0.93, w * 0.86, 0.09], [Math.PI / 2, 0, 0]);
    }
    // tail plates
    for(const sx of [-1, 1]) R.prim(B.body, 'sph', '#56638A', [sx * 0.12, -0.36, -0.2], [0.07, 0.05, 0.12], [0.4, 0, 0]);
    // many small legs along the belly
    for(const sx of [-1, 1]) for(let k = 0; k < 3; k++) R.limb(B.body, '#4A5575', [sx * 0.24, -0.1 + k * 0.12, 0.14], [sx * 0.36, -0.2 + k * 0.12, 0.24], 0.022);
    // head: a rounded cap of armour over big kind eyes
    // a pale face under a slate armour cap
    R.sph(B.head, '#E4DCEE', [0, -0.03, 0.04], [0.21, 0.17, 0.18]);
    R.prim(B.head, 'dome', '#6E7FA3', [0, 0.02, -0.04], [0.24, 0.2, 0.23], [0.5, 0, 0]);
    R.prim(B.head, 'torus', '#B9C4DE', [0, 0.02, -0.04], [0.23, 0.21, 0.12], [Math.PI / 2 + 0.5, 0, 0]);
    R.eyes(B.eyes, 0, 0, 0.1, 0.075, { brow:0.15, browColor:'#3A4463' });
    R.sph(B.head, '#FFB0C0', [0.14, -0.09, 0.17], [0.04, 0.025, 0.02]); R.sph(B.head, '#FFB0C0', [-0.14, -0.09, 0.17], [0.04, 0.025, 0.02]);
    // feelers go up and curl forward
    for(const [sx, bn] of [[1, 'antL'], [-1, 'antR']]){
      R.tube(B[bn], '#3A4463', [[0, 0, 0], [sx * 0.07, 0.14, 0.02], [sx * 0.15, 0.25, 0.08], [sx * 0.24, 0.28, 0.18]], 0.016);
      R.sph(B[bn], '#7FE7FF', [sx * 0.24, 0.28, 0.18], 0.03, null, { glow:0.6 });
    }
    // arms and the slingshot: a forked stick with a stretched band and a glowing pebble
    R.limb(B.armR, '#4A5575', [0, 0, 0], [-0.02, -0.1, 0.18], 0.045); R.sph(B.armR, '#E4DCEE', [-0.02, -0.11, 0.2], 0.065);
    R.limb(B.armL, '#4A5575', [0, 0, 0], [-0.1, -0.06, 0.3], 0.045); R.sph(B.armL, '#E4DCEE', [-0.12, -0.06, 0.33], 0.065);
    R.prim(B.gun, 'cyl', '#8A5A32', [0, 0, 0.04], [0.035, 0.18, 0.035]);
    R.limb(B.gun, '#8A5A32', [0, 0.08, 0.04], [0.09, 0.2, 0.08], 0.028); R.limb(B.gun, '#8A5A32', [0, 0.08, 0.04], [-0.09, 0.2, 0.08], 0.028);
    R.tube(B.gun, '#3A3030', [[0.09, 0.2, 0.08], [0, 0.17, -0.04], [-0.09, 0.2, 0.08]], 0.012);
    R.sph(B.gun, '#7FE7FF', [0, 0.18, 0.02], 0.05, null, { glow:1.6 });
    parts.muzzle = [0, 0.19, 0.12];
    for(const sx of ['L', 'R']) R.sph(B['foot' + sx], '#4A5575', [0, 0.06, 0.04], [0.1, 0.07, 0.14]);
  }
  else if(id === 'hopper'){
    // a grasshopper: long green body, big side eyes, folded hind legs and a drum-fed spore gun
    R.bone('hips', null, 0, 0.46, 0);
    R.bone('body', 'hips');
    R.bone('head', 'body', 0, 0.42, 0.08);
    R.bone('antL', 'head', 0.07, 0.16, 0.06); R.bone('antR', 'head', -0.07, 0.16, 0.06);
    R.bone('eyes', 'head', 0, 0.04, 0.17);
    R.bone('armL', 'body', 0.26, 0.16, 0.12); R.bone('armR', 'body', -0.26, 0.16, 0.12);
    R.bone('gun', 'armR', -0.02, -0.1, 0.2);
    R.bone('footL', null, 0.15, 0, 0); R.bone('footR', null, -0.15, 0, 0);
    R.sph(B.body, '#5DB83A', [0, 0.04, 0], [0.26, 0.34, 0.26]);
    R.sph(B.body, '#C9EE7A', [0, 0.02, 0.1], [0.19, 0.28, 0.18]);
    for(let i = 0; i < 4; i++) R.prim(B.body, 'torus', '#4A9A2E', [0, -0.2 + i * 0.1, 0.02], [0.24 - Math.abs(i - 1.5) * 0.02, 0.24 - Math.abs(i - 1.5) * 0.02, 0.08], [Math.PI / 2, 0, 0]);
    // wing covers down the back
    for(const sx of [-1, 1]) R.prim(B.body, 'sph', '#3F8A2A', [sx * 0.1, 0.02, -0.2], [0.09, 0.32, 0.06], [0.25, 0, sx * 0.12]);
    // the big folded jumping legs on both sides
    for(const sx of [-1, 1]){
      R.limb(B.body, '#4E9E31', [sx * 0.22, -0.12, -0.04], [sx * 0.3, 0.2, -0.22], 0.06);
      R.limb(B.body, '#4E9E31', [sx * 0.3, 0.2, -0.22], [sx * 0.3, -0.38, -0.12], 0.04);
      R.sph(B.body, '#C9EE7A', [sx * 0.3, 0.2, -0.22], 0.065);
    }
    // head: long face, eyes on the sides, a grin
    R.sph(B.head, '#5DB83A', [0, 0, 0.04], [0.19, 0.22, 0.2]);
    R.eyes(B.eyes, 0, 0, 0.12, 0.085, { brow:-0.2, browColor:'#2E5A1E' });
    R.prim(B.head, 'torus', '#2E5A1E', [0, -0.1, 0.18], [0.06, 0.04, 0.05], [0, 0, Math.PI]);
    for(const [sx, bn] of [[1, 'antL'], [-1, 'antR']]){
      R.tube(B[bn], '#2E5A1E', [[0, 0, 0], [sx * 0.05, 0.16, -0.04], [sx * 0.12, 0.3, -0.16], [sx * 0.2, 0.36, -0.32]], 0.013);
      R.sph(B[bn], '#B6FF5A', [sx * 0.2, 0.36, -0.32], 0.025, null, { glow:0.6 });
    }
    // arms and the spore gun: a body, a drum magazine, a short barrel with a glowing tip
    R.limb(B.armR, '#4E9E31', [0, 0, 0], [-0.02, -0.1, 0.18], 0.04); R.sph(B.armR, '#C9EE7A', [-0.02, -0.11, 0.2], 0.055);
    R.limb(B.armL, '#4E9E31', [0, 0, 0], [-0.1, -0.08, 0.3], 0.04); R.sph(B.armL, '#C9EE7A', [-0.12, -0.08, 0.33], 0.055);
    R.prim(B.gun, 'box', '#6B4A2E', [0, 0, 0.02], [0.1, 0.12, 0.3]);
    R.prim(B.gun, 'cyl', '#3E6B2A', [0, -0.09, 0.06], [0.09, 0.07, 0.09], [Math.PI / 2, 0, 0]);
    R.prim(B.gun, 'cyl', '#2E3A2A', [0, 0.02, 0.26], [0.035, 0.24, 0.035], [Math.PI / 2, 0, 0]);
    R.sph(B.gun, '#B6FF5A', [0, 0.02, 0.4], 0.04, null, { glow:1.8 });
    R.sph(B.gun, '#B6FF5A', [0, 0.08, 0.0], [0.04, 0.03, 0.08], null, { glow:0.8 });
    parts.muzzle = [0, 0.02, 0.42];
    for(const sx of ['L', 'R']) R.sph(B['foot' + sx], '#3F8A2A', [0, 0.06, 0.04], [0.09, 0.06, 0.15]);
  }
  return { rig:R, parts };
}

// glassy wings for the wasp: plain meshes that ride on the wing bones
export function addWings(rig){
  const wm = stdMat({ color:'#E6F6FF', transparent:true, opacity:0.5, side:THREE.DoubleSide, roughness:0.1, depthWrite:false, emissive:'#9FD8FF', emissiveIntensity:0.15 });
  const wg = new THREE.PlaneGeometry(0.62, 0.24); wg.translate(0.31, 0, 0); wg.rotateX(-Math.PI / 2);
  const out = [];
  for(const [s, bn] of [[1, 'wingL'], [-1, 'wingR']]) for(let k = 0; k < 2; k++){
    const w = new THREE.Mesh(wg, wm); w.scale.set(s * (1 - k * 0.25), 1, 1 - k * 0.15); w.position.z = -k * 0.08; w.rotation.y = s * (0.35 + k * 0.4);
    rig.bones[bn].add(w); out.push(w);
  }
  return out;
}

// menu icons (simple flat portraits)
export const ICONS = {
  shroom:'<svg viewBox="0 0 72 72" aria-hidden="true"><rect x="22" y="34" width="28" height="30" rx="12" fill="#FFF0D9"/><circle cx="30" cy="45" r="3.4" fill="#17131A"/><circle cx="42" cy="45" r="3.4" fill="#17131A"/><path d="M25 39l8 3M47 39l-8 3" stroke="#2A1A12" stroke-width="3" stroke-linecap="round"/><path d="M4 36Q36-8 68 36Z" fill="#E0332A"/><circle cx="20" cy="24" r="4.5" fill="#FFF8EC"/><circle cx="36" cy="13" r="4" fill="#FFF8EC"/><circle cx="53" cy="25" r="4.5" fill="#FFF8EC"/><rect x="22" y="55" width="28" height="5" rx="2" fill="#3FA34D"/></svg>',
  beetle:'<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="36" cy="44" rx="25" ry="22" fill="#2E45B8"/><path d="M36 22V66" stroke="#1B2A78" stroke-width="3"/><ellipse cx="25" cy="38" rx="5" ry="8" fill="#7FA0FF" opacity=".7"/><circle cx="36" cy="24" r="13" fill="#1F2340"/><circle cx="30" cy="22" r="5" fill="#fff"/><circle cx="42" cy="22" r="5" fill="#fff"/><circle cx="31" cy="23" r="2.6" fill="#17131A"/><circle cx="41" cy="23" r="2.6" fill="#17131A"/><path d="M30 12Q24 2 16 4M42 12Q48 2 56 4" stroke="#1F2340" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="16" cy="4" r="3" fill="#FF8A3A"/><circle cx="56" cy="4" r="3" fill="#FF8A3A"/><circle cx="60" cy="56" r="8" fill="#25252C"/><circle cx="62" cy="46" r="2.5" fill="#FFD04A"/></svg>',
  wasp:'<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="17" cy="30" rx="15" ry="7" fill="#DDF2FF" opacity=".8" transform="rotate(-25 17 30)"/><ellipse cx="55" cy="30" rx="15" ry="7" fill="#DDF2FF" opacity=".8" transform="rotate(25 55 30)"/><ellipse cx="36" cy="55" rx="12" ry="14" fill="#F5C21B"/><path d="M25 52H47M26 60H46" stroke="#26201A" stroke-width="4.5"/><circle cx="36" cy="30" r="14" fill="#F5C21B"/><ellipse cx="29" cy="30" rx="5.5" ry="7.5" fill="#1B1A2A"/><ellipse cx="43" cy="30" rx="5.5" ry="7.5" fill="#1B1A2A"/><circle cx="28" cy="27" r="1.8" fill="#fff"/><circle cx="42" cy="27" r="1.8" fill="#fff"/><path d="M32 39Q36 42 40 39" stroke="#5A2A1A" stroke-width="2" fill="none"/><path d="M31 17Q27 7 22 6M41 17Q45 7 50 6" stroke="#26201A" stroke-width="2.5" fill="none"/></svg>'
};
ICONS.roly = '<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="36" cy="46" rx="22" ry="22" fill="#6E7FA3"/><path d="M15 36Q36 30 57 36M14 46Q36 40 58 46M16 56Q36 50 56 56" stroke="#B9C4DE" stroke-width="3.5" fill="none"/><ellipse cx="36" cy="25" rx="15" ry="12" fill="#6E7FA3"/><circle cx="30" cy="25" r="5" fill="#fff"/><circle cx="42" cy="25" r="5" fill="#fff"/><circle cx="31" cy="26" r="2.6" fill="#17131A"/><circle cx="41" cy="26" r="2.6" fill="#17131A"/><path d="M29 15Q22 4 12 8M43 15Q50 4 60 8" stroke="#3A4463" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="12" cy="8" r="3" fill="#7FE7FF"/><circle cx="60" cy="8" r="3" fill="#7FE7FF"/><path d="M58 50V64M58 52L52 44M58 52L64 44" stroke="#8A5A32" stroke-width="3" stroke-linecap="round"/><circle cx="58" cy="45" r="3.4" fill="#7FE7FF"/></svg>';
ICONS.hopper = '<svg viewBox="0 0 72 72" aria-hidden="true"><path d="M14 62L22 30L30 62" stroke="#4E9E31" stroke-width="5" fill="none" stroke-linejoin="round"/><path d="M58 62L50 30L42 62" stroke="#4E9E31" stroke-width="5" fill="none" stroke-linejoin="round"/><ellipse cx="36" cy="48" rx="15" ry="18" fill="#5DB83A"/><ellipse cx="36" cy="50" rx="9" ry="13" fill="#C9EE7A"/><ellipse cx="36" cy="24" rx="13" ry="14" fill="#5DB83A"/><circle cx="27" cy="22" r="6" fill="#fff"/><circle cx="45" cy="22" r="6" fill="#fff"/><circle cx="28" cy="23" r="3" fill="#17131A"/><circle cx="44" cy="23" r="3" fill="#17131A"/><path d="M30 31Q36 35 42 31" stroke="#2E5A1E" stroke-width="2.5" fill="none"/><path d="M31 12Q26 2 16 2M41 12Q46 2 56 2" stroke="#2E5A1E" stroke-width="2.2" fill="none"/><rect x="50" y="44" width="16" height="7" rx="2" fill="#6B4A2E"/><circle cx="68" cy="47" r="3" fill="#B6FF5A"/></svg>';
export const TAU_ = TAU;
