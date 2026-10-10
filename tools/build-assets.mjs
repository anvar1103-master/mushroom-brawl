// Builds src/assets/nature.glb from the Quaternius kit and src/assets/sfx/*.mp3 from Kenney packs.
// Needs: python3 tools/fetch-assets.py, a static server on :8123 at the repo root (npm run serve), ffmpeg.
import { chromium } from 'playwright';
import fs from 'fs'; import path from 'path'; import { execFileSync } from 'child_process';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const RAW = path.join(ROOT, '.cache/raw');

// ---------- models ----------
if(!process.argv.includes('--sfx-only')){
  const b = await chromium.launch({ args:['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage();
  p.on('pageerror', e => console.log('page error', e.message));
  await p.goto('http://localhost:' + (process.env.PORT || 8123) + '/tools/asset-page.html');
  await p.waitForFunction('window.OUT', null, { timeout:180000 });
  const out = await p.evaluate('window.OUT');
  fs.writeFileSync(path.join(ROOT, 'src/assets/nature.glb'), Buffer.from(out.glb, 'base64'));
  console.log('nature.glb', Math.round(Buffer.from(out.glb, 'base64').length / 1024) + ' KB', out.info);
  await b.close();
}

// ---------- sounds: [output name, pack, file] ----------
const SFX = [
  ['shot_shotgun', 'kenney_impact-sounds', 'impactPunch_heavy_001'],
  ['shot_pop', 'kenney_sci-fi-sounds', 'laserSmall_001'],
  ['shot_beam', 'kenney_sci-fi-sounds', 'laserLarge_000'],
  ['shot_throw', 'kenney_rpg-audio', 'cloth2'],
  ['boom', 'kenney_sci-fi-sounds', 'explosionCrunch_000'],
  ['boom_big', 'kenney_sci-fi-sounds', 'lowFrequency_explosion_000'],
  ['hit', 'kenney_impact-sounds', 'impactSoft_heavy_001'],
  ['hit2', 'kenney_impact-sounds', 'impactSoft_medium_000'],
  ['hit_wall', 'kenney_impact-sounds', 'impactWood_light_002'],
  ['hurt', 'kenney_impact-sounds', 'impactPunch_medium_003'],
  ['die', 'kenney_sci-fi-sounds', 'slime_000'],
  ['super_ready', 'kenney_digital-audio', 'powerUp7'],
  ['super', 'kenney_digital-audio', 'phaserUp6'],
  ['gem', 'kenney_digital-audio', 'pepSound3'],
  ['gem_drop', 'kenney_digital-audio', 'phaserDown2'],
  ['heal', 'kenney_digital-audio', 'powerUp2'],
  ['empty', 'kenney_interface-sounds', 'error_004'],
  ['click', 'kenney_interface-sounds', 'click_002'],
  ['select', 'kenney_interface-sounds', 'select_002'],
  ['confirm', 'kenney_interface-sounds', 'confirmation_002'],
  ['step', 'kenney_impact-sounds', 'footstep_grass_000'],
  ['rustle', 'kenney_rpg-audio', 'cloth4'],
  ['countdown', 'kenney_interface-sounds', 'tick_002'],
  ['start', 'kenney_interface-sounds', 'confirmation_003'],
  ['win', 'kenney_music-jingles', 'jingles_PIZZI10'],
  ['lose', 'kenney_music-jingles', 'jingles_PIZZI07'],
  ['respawn', 'kenney_digital-audio', 'phaseJump1'],
  ['kill', 'kenney_digital-audio', 'zapThreeToneUp'],
];
const find = (dir, name) => { for(const e of fs.readdirSync(dir, { withFileTypes:true })){ const p = path.join(dir, e.name); if(e.isDirectory()){ const r = find(p, name); if(r) return r; } else if(e.name === name + '.ogg') return p; } return null; };
const outDir = path.join(ROOT, 'src/assets/sfx'); fs.mkdirSync(outDir, { recursive:true });
let total = 0;
for(const [out, pack, file] of SFX){
  const src = find(path.join(RAW, pack), file); if(!src){ console.log('missing', pack, file); continue; }
  const dst = path.join(outDir, out + '.mp3');
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', src, '-ac', '1', '-ar', '44100', '-b:a', '96k', '-af', 'silenceremove=start_periods=1:start_threshold=-60dB', dst]);
  total += fs.statSync(dst).size;
}
console.log('sfx', SFX.length, Math.round(total / 1024) + ' KB');
