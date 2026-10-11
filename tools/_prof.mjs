import { chromium } from 'playwright';
const browser = await chromium.launch({ args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport:{ width:640, height:360 } });
page.on('pageerror', e => console.log('ERR', e.message));
await page.goto('http://localhost:8124/src/index.html?lang=ru');
await page.waitForFunction('window.__bgReady', null, { timeout:120000 });
const tris = () => page.evaluate(() => { const out = []; __bg.A.group.traverse(o => { if(o.isMesh){ const g = o.geometry, n = (g.index ? g.index.count : g.attributes.position.count) / 3 * (o.isInstancedMesh ? o.count : 1); out.push([o.material.type + (o.isInstancedMesh ? ' x' + o.count : ''), Math.round(n)]); } }); return out.sort((a, b) => b[1] - a[1]).slice(0, 5); });
console.log('glade', JSON.stringify(await tris()));
for(const mode of ['spores', 'br']){
  await page.evaluate(m => { __bg.start({ mode:m, skipCount:true }); __bg.autopilot(true); __bg.sim(2); }, mode);
  await page.evaluate(() => __bg.bench(3));
  const ms = await page.evaluate(() => __bg.bench(10));
  console.log(mode, 'bench ms', ms.toFixed(1), JSON.stringify(await page.evaluate(() => __bg.info())));
  if(mode === 'br') console.log('maze', JSON.stringify(await tris()));
}
await browser.close();
