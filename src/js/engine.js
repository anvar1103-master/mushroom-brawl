// Renderer, scene, camera, sky, lights and the automatic graphics quality.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { $, TOUCH, store, rand } from './util.js';

export const canvas = $('c');
export const renderer = new THREE.WebGLRenderer({ canvas, antialias:!TOUCH, powerPreference:'high-performance', stencil:false });
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
// soft shadows cost several texture reads per pixel: phones get the plain filter
renderer.shadowMap.type = store.get('q', TOUCH ? 'low' : 'high') === 'high' ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;

export const scene = new THREE.Scene();
export const FOG_COL = new THREE.Color('#B9A08A');   // warm evening haze
scene.fog = new THREE.Fog(FOG_COL, 48, 120);
export const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 400);

// ---- sky: gradient, sun glow and drifting clouds (from «Лесная война») ----
// late afternoon: a low sun off to one side (neither team stares into it), golden horizon on the sun's side,
// dusky violet on the far side
export const SUN_DIR = new THREE.Vector3(-0.86, 0.3, 0.22).normalize();
const skyU = { top:{ value:new THREE.Color('#27477E') }, hor:{ value:new THREE.Color('#FFB46A') }, hor2:{ value:new THREE.Color('#9C7FB0') }, sunDir:{ value:SUN_DIR }, t:{ value:0 }, disc:{ value:new THREE.Color('#FFA040') }, cloud:{ value:new THREE.Color('#F6C6A4') } };
const skyMat = new THREE.ShaderMaterial({ side:THREE.BackSide, depthWrite:false, fog:false, uniforms:skyU,
  vertexShader:'varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader:`uniform vec3 top; uniform vec3 hor; uniform vec3 hor2; uniform vec3 sunDir; uniform float t; uniform vec3 disc; uniform vec3 cloud; varying vec3 vDir;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y); }
float fbm(vec2 p){ float v = 0.0, a = 0.5; for(int i = 0; i < 5; i++){ v += a * noise(p); p = p * 2.03 + 1.7; a *= 0.5; } return v; }
void main(){
  vec3 d = normalize(vDir); float h = d.y;
  vec2 dxz = d.xz; float dl = length(dxz); dxz = dl > 1e-3 ? dxz / dl : vec2(0.0, 1.0);
  float side = clamp(dot(dxz, normalize(sunDir.xz)) * 0.5 + 0.5, 0.0, 1.0);
  vec3 horc = mix(hor2, hor, side * side);
  vec3 col = mix(horc, top, pow(clamp(h, 0.0, 1.0), 0.45));
  col = mix(col, horc * 0.8, clamp(-h / 0.3, 0.0, 1.0));
  float s = max(dot(d, sunDir), 0.0);
  col += disc * (pow(s, 1200.0) * 10.0 + pow(s, 40.0) * 0.55 + pow(s, 6.0) * 0.18);
  if(h > 0.0){
    vec2 uv = d.xz / (h + 0.16) * 1.3 + vec2(t * 0.012, t * 0.005);
    float c = smoothstep(0.48, 0.78, fbm(uv)) * smoothstep(0.0, 0.25, h);
    vec3 cc = mix(cloud * vec3(0.75, 0.68, 0.85), cloud, side) * (0.85 + 0.2 * fbm(uv * 2.0 + 3.0)) + disc * pow(s, 5.0) * 0.9;
    col = mix(col, cc, c * 0.9);
  }
  col = clamp(col, 0.0, 8.0); if(!(col.r == col.r && col.g == col.g && col.b == col.b)) col = top;
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}` });
export const sky = new THREE.Mesh(new THREE.SphereGeometry(300, 32, 16), skyMat);
sky.renderOrder = -10; sky.frustumCulled = false; scene.add(sky);
export function skyTick(dt){ skyU.t.value += dt; }

// image-based light from the sky so standard materials pick up its colours
export function buildEnv(){
  const pm = new THREE.PMREMGenerator(renderer), es = new THREE.Scene();
  es.add(new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), skyMat));
  const gnd = new THREE.Mesh(new THREE.CircleGeometry(49, 24), new THREE.MeshBasicMaterial({ color:'#4A6A2E', side:THREE.DoubleSide }));
  gnd.rotation.x = -Math.PI / 2; gnd.position.y = -4; es.add(gnd);
  const rt = pm.fromScene(es, 0.04, 0.1, 200); pm.dispose();
  scene.environment = rt.texture;
}

export const hemi = new THREE.HemisphereLight('#AFC2EC', '#4E5E2C', 0.8); scene.add(hemi);
export const sun = new THREE.DirectionalLight('#FFC88C', 2.5);
sun.castShadow = true;
sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
scene.add(sun, sun.target);
// the arena is small: one fixed shadow box covers all of it
export function fitShadow(halfX, halfZ){
  const c = sun.shadow.camera, r = Math.hypot(halfX, halfZ) + 3;
  c.left = -r; c.right = r; c.top = r; c.bottom = -r; c.near = 1; c.far = 160; c.updateProjectionMatrix();
  sun.position.copy(SUN_DIR).multiplyScalar(70); sun.target.position.set(0, 0, 0);
}

// ---- canvas textures ----
export function canvasTex(w, h, draw, opt = {}){
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = opt.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  if(opt.repeat){ t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.anisotropy = 4;
  return t;
}

// ---- quality: «high» gets bloom and full resolution; the frame watcher trims resolution when frames run long ----
export const Q = { level:store.get('q', TOUCH ? 'low' : 'high'), PR:1, post:false, composer:null, bloom:null, perfN:0, perfSum:0, calm:0 };
export function maxPR(){ return Math.min(Q.level === 'high' ? 2 : 1.2, devicePixelRatio || 1); }
export function resize(){
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.fov = camera.aspect < 0.75 ? 72 : camera.aspect < 1.2 ? 62 : 55;
  camera.updateProjectionMatrix();
  if(Q.composer){ Q.composer.setPixelRatio(Q.PR); Q.composer.setSize(w, h); }
}
function initPost(){
  if(Q.composer) return;
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type:THREE.HalfFloatType, samples:4 });
  Q.composer = new EffectComposer(renderer, rt);
  Q.composer.addPass(new RenderPass(scene, camera));
  Q.bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.35, 0.5, 0.92);
  Q.composer.addPass(Q.bloom);
  Q.composer.addPass(new OutputPass());
}
export function applyQuality(level){
  if(level){ Q.level = level; store.set('q', level); }
  const hi = Q.level === 'high';
  Q.PR = Math.min(maxPR(), hi ? 2 : 1); renderer.setPixelRatio(Q.PR);
  scene.fog.near = hi ? 48 : 30; scene.fog.far = hi ? 120 : 80; camera.far = hi ? 400 : 160; camera.updateProjectionMatrix();
  sky.scale.setScalar(hi ? 1 : 0.45);   // the sky dome must stay inside the far plane
  const sz = hi ? 2048 : 1024;
  if(sun.shadow.mapSize.x !== sz){ sun.shadow.mapSize.set(sz, sz); if(sun.shadow.map){ sun.shadow.map.dispose(); sun.shadow.map = null; } }
  if(hi){ try{ initPost(); }catch(e){ Q.composer = null; } }
  Q.post = hi && !!Q.composer;
  Q.perfN = Q.perfSum = Q.calm = 0;
  resize();
}
// called every frame with the raw frame time
export function perfWatch(raw, active){
  if(!active || raw > 0.5 || document.hidden) return;
  Q.perfN++; Q.perfSum += raw;
  if(Q.perfN < 90) return;
  const avg = Q.perfSum / Q.perfN; Q.perfN = 0; Q.perfSum = 0;
  if(avg > 0.0195){
    Q.calm = 0;
    if(Q.post){ Q.post = false; Q.noPost = true; }
    else if(Q.PR > 0.65){ Q.PR = Math.max(0.65, Q.PR * 0.85); renderer.setPixelRatio(Q.PR); resize(); }
  } else if(avg < 0.0125 && ++Q.calm >= 3){
    Q.calm = 0;
    if(Q.PR < maxPR()){ Q.PR = Math.min(maxPR(), Q.PR * 1.12); renderer.setPixelRatio(Q.PR); resize(); }
    else if(!Q.post && Q.composer && Q.level === 'high' && !Q.noPost) Q.post = true;
  }
}
export function render(){ if(Q.post && Q.composer) Q.composer.render(); else renderer.render(scene, camera); }
export const rnd = rand;
