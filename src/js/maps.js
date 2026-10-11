// Arena maps. Only the enemy half (top rows) plus the middle row is written by hand; the player half is the same
// half turned 180°, so every map is point-symmetric and fair for both teams.
//   .  floor        #  hedge wall (blocks moves and shots)     R  rock (cover)     T  stump (cover)
//   "  tall grass   ~  pond (blocks moves, shots fly over)     r  red spawn        M  spore mine (middle)
//   ,  flowers (decor only)      C  crate (cover that breaks; holds a power spore)     s  spawn (battle royale)
export const TILE = 1.6;

const SPORE_GLADE = {
  id:'glade', name:'Грибная поляна', desc:'Грибница в центре, кусты-изгороди по бокам и высокая трава для засад.',
  half:[
    '""..,..r.r.r..,..""',
    '""...............""',
    '.....##.....##.....',
    '...................',
    '####...........####',
    '.......T...T.......',
    '"""......R......"""',
    '"""...#####....."""',
    '"""............."""',
    '.~~.....""....R....',
    '.~~..R..""".....##.',
    '........"""....##..',
    '.##................',
    '"""...R..M..R..."""'
  ]
};

export const MAPS = { glade:build(SPORE_GLADE), maze:buildMaze(2718) };

function build(def){
  const top = def.half;
  const W = top[0].length;
  for(const r of top) if(r.length !== W) throw new Error('map ' + def.id + ': row width ' + r.length + ' != ' + W + ' in «' + r + '»');
  const mid = top[top.length - 1];
  if(mid !== [...mid].reverse().join('')) throw new Error('map ' + def.id + ': middle row must be a palindrome');
  const swap = ch => ch === 'r' ? 'b' : ch;
  const bottom = top.slice(0, -1).reverse().map(r => [...r].reverse().map(swap).join(''));
  const rows = [...top, ...bottom];
  return Object.assign({}, def, { rows, W, H:rows.length });
}

// «Последний гриб»: a hedge maze for ten fighters. One quarter is generated (a maze with extra openings, grass,
// crates in dead ends) and turned four times around the middle, so every corner plays the same.
function buildMaze(seed){
  let st = seed >>> 0;
  const rnd = () => { st = (st + 0x6D2B79F5) >>> 0; let t = st; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const h = 17, N = h * 2 - 1;
  const q = Array.from({ length:h }, () => Array(h).fill('#'));
  const inQ = (r, c) => r >= 0 && c >= 0 && r < h && c < h;
  // 1) a perfect maze over the even cells
  const seen = new Set(), stack = [[0, 0]]; q[0][0] = '.'; seen.add('0,0');
  while(stack.length){
    const [r, c] = stack[stack.length - 1];
    const nb = [[2, 0], [-2, 0], [0, 2], [0, -2]].map(([dr, dc]) => [r + dr, c + dc, dr, dc]).filter(([a, b]) => inQ(a, b) && !seen.has(a + ',' + b));
    if(!nb.length){ stack.pop(); continue; }
    const [a, b, dr, dc] = nb[Math.floor(rnd() * nb.length)];
    q[r + dr / 2][c + dc / 2] = '.'; q[a][b] = '.'; seen.add(a + ',' + b); stack.push([a, b]);
  }
  // 2) knock out extra walls so there are loops and flanks, and lone pillars in open spots
  for(let r = 0; r < h; r++) for(let c = 0; c < h; c++) if(q[r][c] === '#' && (r % 2) !== (c % 2) && rnd() < 0.2) q[r][c] = '.';
  for(let r = 1; r < h; r += 2) for(let c = 1; c < h; c += 2){
    const open = [[1, 0], [-1, 0], [0, 1], [0, -1]].every(([dr, dc]) => !inQ(r + dr, c + dc) || q[r + dr][c + dc] === '.');
    if(open && rnd() < 0.35) q[r][c] = '.';
  }
  // 3) an open clearing in the middle and room around the three spawns of this quarter
  for(let r = 0; r < h; r++) for(let c = 0; c < h; c++) if(Math.max(h - 1 - r, h - 1 - c) <= 3) q[r][c] = '.';
  const spawns = [[1, 1], [1, 11], [11, 1]];
  for(const [sr, sc] of spawns) for(let r = sr - 1; r <= sr + 1; r++) for(let c = sc - 1; c <= sc + 1; c++) if(inQ(r, c)) q[r][c] = '.';
  const near = (r, c, d) => spawns.some(([a, b]) => Math.abs(a - r) <= d && Math.abs(b - c) <= d) || Math.max(h - 1 - r, h - 1 - c) <= 4;
  // 4) tall grass in a few clumps
  for(let k = 0; k < 9; k++){
    let r = Math.floor(rnd() * h), c = Math.floor(rnd() * h);
    for(let n = 0; n < 6; n++){
      if(inQ(r, c) && q[r][c] === '.' && !near(r, c, 1)) q[r][c] = '"';
      const d = Math.floor(rnd() * 4); r += [1, -1, 0, 0][d]; c += [0, 0, 1, -1][d];
    }
  }
  // 5) crates in dead ends and around the middle, a few rocks
  let crates = 0;
  const wallsAt = (r, c) => [[1, 0], [-1, 0], [0, 1], [0, -1]].filter(([dr, dc]) => inQ(r + dr, c + dc) && q[r + dr][c + dc] === '#').length;
  // dead ends first (a crate there never blocks a route), then a few in corridor corners
  for(const need of [3, 2]) for(let r = 0; r < h - 1 && crates < 11; r++) for(let c = 0; c < h - 1 && crates < 11; c++){
    if(q[r][c] !== '.' || near(r, c, 2)) continue;
    if(wallsAt(r, c) >= need && rnd() < (need === 3 ? 0.8 : 0.18)){ q[r][c] = 'C'; crates++; }
  }
  q[h - 4][h - 3] = 'C'; q[h - 3][h - 4] = 'C'; q[h - 3][h - 3] = 'R';
  for(let r = 0; r < h; r++) for(let c = 0; c < h; c++) if(q[r][c] === '.' && !near(r, c, 2) && rnd() < 0.025) q[r][c] = 'R';
  // the middle row and column belong to two quarters at once: make them agree
  for(let c = 0; c < h; c++) q[h - 1][c] = q[c][h - 1];
  for(const [sr, sc] of spawns) q[sr][sc] = 's';
  // 6) turn the quarter four times
  const full = Array.from({ length:N }, () => Array(N).fill('#'));
  for(let r = 0; r < N; r++) for(let c = 0; c < N; c++){
    let rr = r, cc = c;
    for(let k = 0; k < 4 && !(rr < h && cc < h); k++){ const t = rr; rr = N - 1 - cc; cc = t; }
    full[r][c] = q[rr][cc];
  }
  // 7) every open tile must be reachable (crates count as walls until they break)
  const pass = ch => ch !== '#' && ch !== 'R' && ch !== 'C';
  for(let guard = 0; guard < 200; guard++){
    const vis = Array.from({ length:N }, () => Array(N).fill(false)), qq = [[1, 1]]; vis[1][1] = true;
    while(qq.length){ const [r, c] = qq.pop(); for(const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]){ const a = r + dr, b = c + dc; if(a >= 0 && b >= 0 && a < N && b < N && !vis[a][b] && pass(full[a][b])){ vis[a][b] = true; qq.push([a, b]); } } }
    let lost = null;
    for(let r = 0; r < N && !lost; r++) for(let c = 0; c < N && !lost; c++) if(pass(full[r][c]) && !vis[r][c]) lost = [r, c];
    if(!lost) break;
    // open the wall between the lost tile and its first reachable neighbour two steps away (in all four quarters)
    const [r, c] = lost;
    for(const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]){
      const a = r + dr, b = c + dc;
      if(a >= 0 && b >= 0 && a < N && b < N && full[a][b] !== '.' && full[a][b] !== '"'){
        let ra = a, rb = b; for(let k = 0; k < 4; k++){ full[ra][rb] = '.'; const t = ra; ra = rb; rb = N - 1 - t; }
        break;
      }
    }
  }
  const rows = full.map(r => r.join(''));
  return { id:'maze', name:'Лесной лабиринт', desc:'Узкие проходы между кустами, тайники с силой и поляна в центре.', rows, W:N, H:N, mode:'br' };
}
