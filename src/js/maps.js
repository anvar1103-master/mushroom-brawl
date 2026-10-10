// Arena maps. Only the enemy half (top rows) plus the middle row is written by hand; the player half is the same
// half turned 180°, so every map is point-symmetric and fair for both teams.
//   .  floor        #  hedge wall (blocks moves and shots)     R  rock (cover)     T  stump (cover)
//   "  tall grass   ~  pond (blocks moves, shots fly over)     r  red spawn        M  spore mine (middle)
//   ,  flowers (decor only)
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

export const MAPS = { glade:build(SPORE_GLADE) };

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
