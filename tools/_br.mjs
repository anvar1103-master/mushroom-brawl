import { chromium } from 'playwright';
const SP = process.argv[2];
const browser = await chromium.launch({ args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport:{ width:1280, height:720 } });
const errors = [];
page.on('pageerror', e => errors.push(e.message)); page.on('console', m => { if(m.type() === 'error') errors.push(m.text()); });
await page.goto('http://localhost:8124/src/index.html?lang=ru');
await page.waitForFunction('window.__bgReady', null, { timeout:120000 });
const t0 = Date.now();
await page.evaluate(() => { __bg.start({ mode:'br', hero:'shroom', skipCount:true }); });
console.log('start ms', Date.now() - t0);
await page.evaluate(() => __bg.sim(0.5));
await page.screenshot({ path:SP + '/br_start.png' });
await page.evaluate(() => __bg.autopilot(true));
let s;
for(let i = 0; i < 60; i++){
  await page.evaluate(() => __bg.sim(5)); s = await page.evaluate(() => __bg.s);
  if(i % 4 === 0) console.log(JSON.stringify({ t:s.t, alive:s.alive, fog:s.fog, me:s.me && [s.me.alive, s.me.hp], st:s.state, pk:s.pickups }));
  if(i === 6) await page.screenshot({ path:SP + '/br_mid.png' });
  if(s.state === 'end') break;
}
console.log('END', JSON.stringify(s));
console.log((await page.evaluate(() => __bg.G.fighters.map(f => `${f.name} ${f.hero} place${f.place} k${f.kills} pw${f.power} dmg${Math.round(f.dmgDone)} alive${f.alive}`))).join('\n'));
console.log('crates broken', await page.evaluate(() => __bg.G.match.crates));
await page.evaluate(() => __bg.sim(4));
await page.screenshot({ path:SP + '/br_end.png' });
console.log('errors', errors.slice(0, 5));
await browser.close();
