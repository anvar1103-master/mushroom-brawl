var kh="160";var zg=0,Nd=1,Og=2;var wl=1,Bh=2,Li=3,_i=0,Gt=1,Tt=2;var xi=0,Qi=1,Tn=2,zd=3,Od=4,Hh=5,Ls=100,kg=101,Bg=102,kd=103,Bd=104,Hg=200,Gg=201,Vg=202,Wg=203,bo=204,So=205,Xg=206,qg=207,Yg=208,Zg=209,$g=210,Kg=211,Jg=212,jg=213,Qg=214,ex=0,tx=1,nx=2,ka=3,ix=4,sx=5,Gh=6,rx=7,Vh=0,ox=1,ax=2,es=0,Wh=1,Xh=2,qh=3,Oo=4,lx=5,Yh=6,Hd="attached",cx="detached",Ep=300,xr=301,_r=302,nh=303,ih=304,Tl=306,Ui=1e3,Bn=1001,Eo=1002,Wt=1003,Ba=1004;var mo=1005;var bn=1006,Zh=1007;var ns=1008;var ts=1009,hx=1010,ux=1011,$h=1012,wp=1013,Ji=1014,Di=1015,An=1016,Tp=1017,Ap=1018,Ds=1020,dx=1021,Kn=1023,fx=1024,px=1025,Fs=1026,vr=1027,mx=1028,Rp=1029,gx=1030,Cp=1031,Pp=1033,yc=33776,Mc=33777,bc=33778,Sc=33779,Gd=35840,Vd=35841,Wd=35842,Xd=35843,Lp=36196,qd=37492,Yd=37496,Zd=37808,$d=37809,Kd=37810,Jd=37811,jd=37812,Qd=37813,ef=37814,tf=37815,nf=37816,sf=37817,rf=37818,of=37819,af=37820,lf=37821,Ec=36492,cf=36494,hf=36495,xx=36283,uf=36284,df=36285,ff=36286;var yr=2300,Ns=2301,wc=2302,pf=2400,mf=2401,gf=2402,_x=2500;var Ip=0,Al=1,ko=2,Dp=3e3,Us=3001,vx=3200,yx=3201,Kh=0,Mx=1,wn="",ct="srgb",Yt="srgb-linear",Jh="display-p3",Rl="display-p3-linear",Ha="linear",xt="srgb",Ga="rec709",Va="p3";var $s=7680;var xf=519,bx=512,Sx=513,Ex=514,Fp=515,wx=516,Tx=517,Ax=518,Rx=519,sh=35044,Cl=35048;var _f="300 es",rh=1035,Fi=2e3,Wa=2001,is=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vf=1234567,go=Math.PI/180,Mr=180/Math.PI;function li(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function jh(n,e){return(n%e+e)%e}function Cx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Px(n,e,t){return n!==e?(t-n)/(e-n):0}function xo(n,e,t){return(1-t)*n+t*e}function Lx(n,e,t,i){return xo(n,e,1-Math.exp(-t*i))}function Ix(n,e=1){return e-Math.abs(jh(n,e*2)-e)}function Dx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Fx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ux(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Nx(n,e){return n+Math.random()*(e-n)}function zx(n){return n*(.5-Math.random())}function Ox(n){n!==void 0&&(vf=n);let e=vf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kx(n){return n*go}function Bx(n){return n*Mr}function oh(n){return(n&n-1)===0&&n!==0}function Hx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Up={DEG2RAD:go,RAD2DEG:Mr,generateUUID:li,clamp:Xt,euclideanModulo:jh,mapLinear:Cx,inverseLerp:Px,lerp:xo,damp:Lx,pingpong:Ix,smoothstep:Dx,smootherstep:Fx,randInt:Ux,randFloat:Nx,randFloatSpread:zx,seededRandom:Ox,degToRad:kx,radToDeg:Bx,isPowerOfTwo:oh,ceilPowerOfTwo:Hx,floorPowerOfTwo:Xa,setQuaternionFromProperEuler:Gx,normalize:mt,denormalize:gi},ne=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],p=s[3],m=s[6],_=s[1],v=s[4],y=s[7],w=s[2],S=s[5],R=s[8];return r[0]=o*x+a*_+l*w,r[3]=o*p+a*v+l*S,r[6]=o*m+a*y+l*R,r[1]=c*x+h*_+u*w,r[4]=c*p+h*v+u*S,r[7]=c*m+h*y+u*R,r[2]=d*x+f*_+g*w,r[5]=d*p+f*v+g*S,r[8]=d*m+f*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tc.makeScale(e,t)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Tc=new et;function Np(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vx(){let n=wo("canvas");return n.style.display="block",n}var yf={};function _o(n){n in yf||(yf[n]=!0,console.warn(n))}var Mf=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bf=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ha={[Yt]:{transfer:Ha,primaries:Ga,toReference:n=>n,fromReference:n=>n},[ct]:{transfer:xt,primaries:Ga,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Rl]:{transfer:Ha,primaries:Va,toReference:n=>n.applyMatrix3(bf),fromReference:n=>n.applyMatrix3(Mf)},[Jh]:{transfer:xt,primaries:Va,toReference:n=>n.convertSRGBToLinear().applyMatrix3(bf),fromReference:n=>n.applyMatrix3(Mf).convertLinearToSRGB()}},Wx=new Set([Yt,Rl]),lt={enabled:!0,_workingColorSpace:Yt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Wx.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ha[e].toReference,s=ha[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ha[n].primaries},getTransfer:function(n){return n===wn?Ha:ha[n].transfer}};function mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ac(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ks,qa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ks===void 0&&(Ks=wo("canvas")),Ks.width=e.width,Ks.height=e.height;let i=Ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mr(t[i]/255)*255):t[i]=mr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xx=0,Ya=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rc(s[o].image)):r.push(Rc(s[o]))}else r=Rc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Rc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qx=0,on=class n extends is{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Bn,s=Bn,r=bn,o=ns,a=Kn,l=ts,c=n.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=li(),this.name="",this.source=new Ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Us?ct:wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ui:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ui:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?Us:Dp}set encoding(e){_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Us?ct:wn}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Ep;on.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(f+1)/2,w=(m+1)/2,S=(h+d)/4,R=(u+x)/4,D=(g+p)/4;return v>y&&v>w?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=S/i,r=R/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=S/s,r=D/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=D/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ah=class extends is{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(_o("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Us?ct:wn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ya(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends ah{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Za=class extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lh=class extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ln=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let p=1-a,m=l*d+c*f+h*g+u*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let w=Math.sqrt(v),S=Math.atan2(w,m*_);p=Math.sin(p*S)/w,a=Math.sin(a*S)/w}let y=a*_;if(l=l*p+d*y,c=c*p+f*y,h=h*p+g*y,u=u*p+x*y,p===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cc=new P,Sf=new ln,Rn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),da.subVectors(this.max,ao),Js.subVectors(e.a,ao),js.subVectors(e.b,ao),Qs.subVectors(e.c,ao),qi.subVectors(js,Js),Yi.subVectors(Qs,js),Ts.subVectors(Js,Qs);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-Ts.z,Ts.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,Ts.z,0,-Ts.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-Ts.y,Ts.x,0];return!Pc(t,Js,js,Qs,da)||(t=[1,0,0,0,1,0,0,0,1],!Pc(t,Js,js,Qs,da))?!1:(fa.crossVectors(qi,Yi),t=[fa.x,fa.y,fa.z],Pc(t,Js,js,Qs,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wi=[new P,new P,new P,new P,new P,new P,new P,new P],ri=new P,ua=new Rn,Js=new P,js=new P,Qs=new P,qi=new P,Yi=new P,Ts=new P,ao=new P,da=new P,fa=new P,As=new P;function Pc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){As.fromArray(n,r);let a=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),l=e.dot(As),c=t.dot(As),h=i.dot(As);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Yx=new Rn,lo=new P,Lc=new P,Hn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Yx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);let t=lo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(lo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Lc)),this.expandByPoint(lo.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ti=new P,Ic=new P,pa=new P,Zi=new P,Dc=new P,ma=new P,Fc=new P,br=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ic.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Ic);let r=e.distanceTo(t)*.5,o=-this.direction.dot(pa),a=Zi.dot(this.direction),l=-Zi.dot(pa),c=Zi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ic).addScaledVector(pa,d),f}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let i=Ti.dot(this.direction),s=Ti.dot(Ti)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,s,r){Dc.subVectors(t,e),ma.subVectors(i,e),Fc.crossVectors(Dc,ma);let o=this.direction.dot(Fc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);let l=a*this.direction.dot(ma.crossVectors(Zi,ma));if(l<0)return null;let c=a*this.direction.dot(Dc.cross(Zi));if(c<0||l+c>o)return null;let h=-a*Zi.dot(Fc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,p)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),o=1/er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zx,e,$x)}lookAt(e,t,i){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),$i.crossVectors(i,On),$i.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),$i.crossVectors(i,On)),$i.normalize(),ga.crossVectors(On,$i),s[0]=$i.x,s[4]=ga.x,s[8]=On.x,s[1]=$i.y,s[5]=ga.y,s[9]=On.y,s[2]=$i.z,s[6]=ga.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],_=i[3],v=i[7],y=i[11],w=i[15],S=s[0],R=s[4],D=s[8],M=s[12],T=s[1],F=s[5],k=s[9],O=s[13],L=s[2],U=s[6],q=s[10],K=s[14],$=s[3],Z=s[7],te=s[11],oe=s[15];return r[0]=o*S+a*T+l*L+c*$,r[4]=o*R+a*F+l*U+c*Z,r[8]=o*D+a*k+l*q+c*te,r[12]=o*M+a*O+l*K+c*oe,r[1]=h*S+u*T+d*L+f*$,r[5]=h*R+u*F+d*U+f*Z,r[9]=h*D+u*k+d*q+f*te,r[13]=h*M+u*O+d*K+f*oe,r[2]=g*S+x*T+p*L+m*$,r[6]=g*R+x*F+p*U+m*Z,r[10]=g*D+x*k+p*q+m*te,r[14]=g*M+x*O+p*K+m*oe,r[3]=_*S+v*T+y*L+w*$,r[7]=_*R+v*F+y*U+w*Z,r[11]=_*D+v*k+y*q+w*te,r[15]=_*M+v*O+y*K+w*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],_=u*p*c-x*d*c+x*l*f-a*p*f-u*l*m+a*d*m,v=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,y=h*x*c-g*u*c+g*a*f-o*x*f-h*a*m+o*u*m,w=g*u*l-h*x*l-g*a*d+o*x*d+h*a*p-o*u*p,S=t*_+i*v+s*y+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/S;return e[0]=_*R,e[1]=(x*d*r-u*p*r-x*s*f+i*p*f+u*s*m-i*d*m)*R,e[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*m+i*l*m)*R,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*R,e[4]=v*R,e[5]=(h*p*r-g*d*r+g*s*f-t*p*f-h*s*m+t*d*m)*R,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=y*R,e[9]=(g*u*r-h*x*r-g*i*f+t*x*f+h*i*m-t*u*m)*R,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*m+t*a*m)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*R,e[12]=w*R,e[13]=(h*x*s-g*u*s+g*i*d-t*x*d-h*i*p+t*u*p)*R,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*p-t*a*p)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,p=o*u,m=a*u,_=l*c,v=l*h,y=l*u,w=i.x,S=i.y,R=i.z;return s[0]=(1-(x+m))*w,s[1]=(f+y)*w,s[2]=(g-v)*w,s[3]=0,s[4]=(f-y)*S,s[5]=(1-(d+m))*S,s[6]=(p+_)*S,s[7]=0,s[8]=(g+v)*R,s[9]=(p-_)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=er.set(s[0],s[1],s[2]).length(),o=er.set(s[4],s[5],s[6]).length(),a=er.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],oi.copy(this);let c=1/r,h=1/o,u=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,t.setFromRotationMatrix(oi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Fi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(a===Fi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Wa)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Fi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,f=(i+s)*h,g,x;if(a===Fi)g=(o+r)*u,x=-2*u;else if(a===Wa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},er=new P,oi=new De,Zx=new P(0,0,0),$x=new P(1,1,1),$i=new P,ga=new P,On=new P,Ef=new De,wf=new ln,ss=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ef,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wf.setFromEuler(this),this.setFromQuaternion(wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ss.DEFAULT_ORDER="XYZ";var $a=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kx=0,Tf=new P,tr=new ln,Ai=new De,xa=new P,co=new P,Jx=new P,jx=new ln,Af=new P(1,0,0),Rf=new P(0,1,0),Cf=new P(0,0,1),Qx={type:"added"},e_={type:"removed"},vt=class n extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new ss,i=new ln,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new et}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(Af,e)}rotateY(e){return this.rotateOnAxis(Rf,e)}rotateZ(e){return this.rotateOnAxis(Cf,e)}translateOnAxis(e,t){return Tf.copy(e).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Af,e)}translateY(e){return this.translateOnAxis(Rf,e)}translateZ(e){return this.translateOnAxis(Cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xa.copy(e):xa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(co,xa,this.up):Ai.lookAt(xa,co,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Ai),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e_)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,Jx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,jx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};vt.DEFAULT_UP=new P(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new P,Ri=new P,Uc=new P,Ci=new P,nr=new P,ir=new P,Pf=new P,Nc=new P,zc=new P,Oc=new P,_a=!1,dr=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ai.subVectors(e,t),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ai.subVectors(s,t),Ri.subVectors(i,t),Uc.subVectors(e,t);let o=ai.dot(ai),a=ai.dot(Ri),l=ai.dot(Uc),c=Ri.dot(Ri),h=Ri.dot(Uc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(e,t,i,s,r,o,a,l){return _a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_a=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static isFrontFacing(e,t,i,s){return ai.subVectors(i,t),Ri.subVectors(e,t),ai.cross(Ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ai.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return _a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_a=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;nr.subVectors(s,i),ir.subVectors(r,i),Nc.subVectors(e,i);let l=nr.dot(Nc),c=ir.dot(Nc);if(l<=0&&c<=0)return t.copy(i);zc.subVectors(e,s);let h=nr.dot(zc),u=ir.dot(zc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(nr,o);Oc.subVectors(e,r);let f=nr.dot(Oc),g=ir.dot(Oc);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ir,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Pf.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Pf,a);let m=1/(p+x+d);return o=x*m,a=d*m,t.copy(i).addScaledVector(nr,o).addScaledVector(ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},va={h:0,s:0,l:0};function kc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var se=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=jh(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=kc(o,r,e+1/3),this.g=kc(o,r,e),this.b=kc(o,r,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=ct){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){let i=zp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=Ac(e.r),this.g=Ac(e.g),this.b=Ac(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return lt.fromWorkingColorSpace(fn.copy(this),e),Math.round(Xt(fn.r*255,0,255))*65536+Math.round(Xt(fn.g*255,0,255))*256+Math.round(Xt(fn.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(fn.copy(this),t);let i=fn.r,s=fn.g,r=fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=ct){lt.fromWorkingColorSpace(fn.copy(this),e);let t=fn.r,i=fn.g,s=fn.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(va);let i=xo(Ki.h,va.h,t),s=xo(Ki.s,va.s,t),r=xo(Ki.l,va.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new se;se.NAMES=zp;var t_=0,Cn=class extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Qi,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bo,this.blendDst=So,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bo&&(i.blendSrc=this.blendSrc),this.blendDst!==So&&(i.blendDst=this.blendDst),this.blendEquation!==Ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ka&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ke=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ht=new P,ya=new ne,ht=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sh&&(e.usage=this.usage),e}};var Sr=class extends ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ka=class extends ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var He=class extends ht{constructor(e,t,i){super(new Float32Array(e),t,i)}};var n_=0,$n=new De,Bc=new vt,sr=new P,kn=new Rn,ho=new Rn,tn=new P,wt=class n extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Np(e)?Ka:Sr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,i){return $n.makeTranslation(e,t,i),this.applyMatrix4($n),this}scale(e,t,i){return $n.makeScale(e,t,i),this.applyMatrix4($n),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new He(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(kn.min,ho.min),kn.expandByPoint(tn),tn.addVectors(kn.max,ho.max),kn.expandByPoint(tn)):(kn.expandByPoint(ho.min),kn.expandByPoint(ho.max))}kn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(sr.fromBufferAttribute(e,c),tn.add(sr)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new P,h[T]=new P;let u=new P,d=new P,f=new P,g=new ne,x=new ne,p=new ne,m=new P,_=new P;function v(T,F,k){u.fromArray(s,T*3),d.fromArray(s,F*3),f.fromArray(s,k*3),g.fromArray(o,T*2),x.fromArray(o,F*2),p.fromArray(o,k*2),d.sub(u),f.sub(u),x.sub(g),p.sub(g);let O=1/(x.x*p.y-p.x*x.y);isFinite(O)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-x.y).multiplyScalar(O),_.copy(f).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(O),c[T].add(m),c[F].add(m),c[k].add(m),h[T].add(_),h[F].add(_),h[k].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,F=y.length;T<F;++T){let k=y[T],O=k.start,L=k.count;for(let U=O,q=O+L;U<q;U+=3)v(i[U+0],i[U+1],i[U+2])}let w=new P,S=new P,R=new P,D=new P;function M(T){R.fromArray(r,T*3),D.copy(R);let F=c[T];w.copy(F),w.sub(R.multiplyScalar(R.dot(F))).normalize(),S.crossVectors(D,F);let O=S.dot(h[T])<0?-1:1;l[T*4]=w.x,l[T*4+1]=w.y,l[T*4+2]=w.z,l[T*4+3]=O}for(let T=0,F=y.length;T<F;++T){let k=y[T],O=k.start,L=k.count;for(let U=O,q=O+L;U<q;U+=3)M(i[U+0]),M(i[U+1]),M(i[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new ht(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lf=new De,Rs=new br,Ma=new Hn,If=new P,rr=new P,or=new P,ar=new P,Hc=new P,ba=new P,Sa=new ne,Ea=new ne,wa=new ne,Df=new P,Ff=new P,Uf=new P,Ta=new P,Aa=new P,ae=class extends vt{constructor(e=new wt,t=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Hc.fromBufferAttribute(u,e),o?ba.addScaledVector(Hc,h):ba.addScaledVector(Hc.sub(t),h))}t.add(ba)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(Ma.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Ma,If)===null||Rs.origin.distanceToSquared(If)>(e.far-e.near)**2))&&(Lf.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(Lf),!(i.boundingBox!==null&&Rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,w=v;y<w;y+=3){let S=a.getX(y),R=a.getX(y+1),D=a.getX(y+2);s=Ra(this,m,e,i,c,h,u,S,R,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let _=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);s=Ra(this,o,e,i,c,h,u,_,v,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,w=v;y<w;y+=3){let S=y,R=y+1,D=y+2;s=Ra(this,m,e,i,c,h,u,S,R,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let _=p,v=p+1,y=p+2;s=Ra(this,o,e,i,c,h,u,_,v,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function i_(n,e,t,i,s,r,o,a){let l;if(e.side===Gt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===_i,a),l===null)return null;Aa.copy(a),Aa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Aa);return c<t.near||c>t.far?null:{distance:c,point:Aa.clone(),object:n}}function Ra(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,rr),n.getVertexPosition(l,or),n.getVertexPosition(c,ar);let h=i_(n,e,t,i,rr,or,ar,Ta);if(h){s&&(Sa.fromBufferAttribute(s,a),Ea.fromBufferAttribute(s,l),wa.fromBufferAttribute(s,c),h.uv=dr.getInterpolation(Ta,rr,or,ar,Sa,Ea,wa,new ne)),r&&(Sa.fromBufferAttribute(r,a),Ea.fromBufferAttribute(r,l),wa.fromBufferAttribute(r,c),h.uv1=dr.getInterpolation(Ta,rr,or,ar,Sa,Ea,wa,new ne),h.uv2=h.uv1),o&&(Df.fromBufferAttribute(o,a),Ff.fromBufferAttribute(o,l),Uf.fromBufferAttribute(o,c),h.normal=dr.getInterpolation(Ta,rr,or,ar,Df,Ff,Uf,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};dr.getNormal(rr,or,ar,u.normal),h.face=u}return h}var vi=class n extends wt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(u,2));function g(x,p,m,_,v,y,w,S,R,D,M){let T=y/R,F=w/D,k=y/2,O=w/2,L=S/2,U=R+1,q=D+1,K=0,$=0,Z=new P;for(let te=0;te<q;te++){let oe=te*F-O;for(let xe=0;xe<U;xe++){let Y=xe*T-k;Z[x]=Y*_,Z[p]=oe*v,Z[m]=L,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[p]=0,Z[m]=S>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(xe/R),u.push(1-te/D),K+=1}}for(let te=0;te<D;te++)for(let oe=0;oe<R;oe++){let xe=d+oe+U*te,Y=d+oe+U*(te+1),j=d+(oe+1)+U*(te+1),me=d+(oe+1)+U*te;l.push(xe,Y,me),l.push(Y,j,me),$+=6}a.addGroup(f,$,M),f+=$,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Er(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Mn(n){let e={};for(let t=0;t<n.length;t++){let i=Er(n[t]);for(let s in i)e[s]=i[s]}return e}function s_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Op(n){return n.getRenderTarget()===null?n.outputColorSpace:lt.workingColorSpace}var ds={clone:Er,merge:Mn},r_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ut=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r_,this.fragmentShader=o_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=s_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ja=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qt=class extends Ja{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(go*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lr=-90,cr=1,To=class extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(lr,cr,e,t);s.layers=this.layers,this.add(s);let r=new qt(lr,cr,e,t);r.layers=this.layers,this.add(r);let o=new qt(lr,cr,e,t);o.layers=this.layers,this.add(o);let a=new qt(lr,cr,e,t);a.layers=this.layers,this.add(a);let l=new qt(lr,cr,e,t);l.layers=this.layers,this.add(l);let c=new qt(lr,cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ja=class extends on{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ao=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(_o("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Us?ct:wn),this.texture=new ja(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vi(5,5,5),r=new ut({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:xi});r.uniforms.tEquirect.value=t;let o=new ae(s,r),a=t.minFilter;return t.minFilter===ns&&(t.minFilter=bn),new To(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Gc=new P,a_=new P,l_=new et,Ii=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Gc.subVectors(i,t).cross(a_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Gc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||l_.getNormalMatrix(e),s=this.coplanarPoint(Gc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cs=new Hn,Ca=new P,Ro=class{constructor(e=new Ii,t=new Ii,i=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],p=s[11],m=s[12],_=s[13],v=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,p-f,y-m).normalize(),i[1].setComponents(l+r,d+c,p+f,y+m).normalize(),i[2].setComponents(l+o,d+h,p+g,y+_).normalize(),i[3].setComponents(l-o,d-h,p-g,y-_).normalize(),i[4].setComponents(l-a,d-u,p-x,y-v).normalize(),t===Fi)i[5].setComponents(l+a,d+u,p+x,y+v).normalize();else if(t===Wa)i[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ca.x=s.normal.x>0?e.max.x:e.min.x,Ca.y=s.normal.y>0?e.max.y:e.min.y,Ca.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function c_(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,p=g.length;x<p;x++){let m=g[x];t?n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Bt=class n extends wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let _=m*d-o;for(let v=0;v<c;v++){let y=v*u-r;g.push(y,-_,0),x.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let v=_+c*m,y=_+c*(m+1),w=_+1+c*(m+1),S=_+1+c*m;f.push(v,y,S),f.push(y,w,S)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},h_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,d_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,m_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,__=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,S_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,D_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,F_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B_="gl_FragColor = linearToOutputTexel( gl_FragColor );",H_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,G_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,j_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,av=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ev=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Tv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ov=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ey=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ty=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ny=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ly=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_y=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ey=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ty=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ry=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Py=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ly=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ny=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ky=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:h_,alphahash_pars_fragment:u_,alphamap_fragment:d_,alphamap_pars_fragment:f_,alphatest_fragment:p_,alphatest_pars_fragment:m_,aomap_fragment:g_,aomap_pars_fragment:x_,batching_pars_vertex:__,batching_vertex:v_,begin_vertex:y_,beginnormal_vertex:M_,bsdfs:b_,iridescence_fragment:S_,bumpmap_pars_fragment:E_,clipping_planes_fragment:w_,clipping_planes_pars_fragment:T_,clipping_planes_pars_vertex:A_,clipping_planes_vertex:R_,color_fragment:C_,color_pars_fragment:P_,color_pars_vertex:L_,color_vertex:I_,common:D_,cube_uv_reflection_fragment:F_,defaultnormal_vertex:U_,displacementmap_pars_vertex:N_,displacementmap_vertex:z_,emissivemap_fragment:O_,emissivemap_pars_fragment:k_,colorspace_fragment:B_,colorspace_pars_fragment:H_,envmap_fragment:G_,envmap_common_pars_fragment:V_,envmap_pars_fragment:W_,envmap_pars_vertex:X_,envmap_physical_pars_fragment:iv,envmap_vertex:q_,fog_vertex:Y_,fog_pars_vertex:Z_,fog_fragment:$_,fog_pars_fragment:K_,gradientmap_pars_fragment:J_,lightmap_fragment:j_,lightmap_pars_fragment:Q_,lights_lambert_fragment:ev,lights_lambert_pars_fragment:tv,lights_pars_begin:nv,lights_toon_fragment:sv,lights_toon_pars_fragment:rv,lights_phong_fragment:ov,lights_phong_pars_fragment:av,lights_physical_fragment:lv,lights_physical_pars_fragment:cv,lights_fragment_begin:hv,lights_fragment_maps:uv,lights_fragment_end:dv,logdepthbuf_fragment:fv,logdepthbuf_pars_fragment:pv,logdepthbuf_pars_vertex:mv,logdepthbuf_vertex:gv,map_fragment:xv,map_pars_fragment:_v,map_particle_fragment:vv,map_particle_pars_fragment:yv,metalnessmap_fragment:Mv,metalnessmap_pars_fragment:bv,morphcolor_vertex:Sv,morphnormal_vertex:Ev,morphtarget_pars_vertex:wv,morphtarget_vertex:Tv,normal_fragment_begin:Av,normal_fragment_maps:Rv,normal_pars_fragment:Cv,normal_pars_vertex:Pv,normal_vertex:Lv,normalmap_pars_fragment:Iv,clearcoat_normal_fragment_begin:Dv,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:Uv,iridescence_pars_fragment:Nv,opaque_fragment:zv,packing:Ov,premultiplied_alpha_fragment:kv,project_vertex:Bv,dithering_fragment:Hv,dithering_pars_fragment:Gv,roughnessmap_fragment:Vv,roughnessmap_pars_fragment:Wv,shadowmap_pars_fragment:Xv,shadowmap_pars_vertex:qv,shadowmap_vertex:Yv,shadowmask_pars_fragment:Zv,skinbase_vertex:$v,skinning_pars_vertex:Kv,skinning_vertex:Jv,skinnormal_vertex:jv,specularmap_fragment:Qv,specularmap_pars_fragment:ey,tonemapping_fragment:ty,tonemapping_pars_fragment:ny,transmission_fragment:iy,transmission_pars_fragment:sy,uv_pars_fragment:ry,uv_pars_vertex:oy,uv_vertex:ay,worldpos_vertex:ly,background_vert:cy,background_frag:hy,backgroundCube_vert:uy,backgroundCube_frag:dy,cube_vert:fy,cube_frag:py,depth_vert:my,depth_frag:gy,distanceRGBA_vert:xy,distanceRGBA_frag:_y,equirect_vert:vy,equirect_frag:yy,linedashed_vert:My,linedashed_frag:by,meshbasic_vert:Sy,meshbasic_frag:Ey,meshlambert_vert:wy,meshlambert_frag:Ty,meshmatcap_vert:Ay,meshmatcap_frag:Ry,meshnormal_vert:Cy,meshnormal_frag:Py,meshphong_vert:Ly,meshphong_frag:Iy,meshphysical_vert:Dy,meshphysical_frag:Fy,meshtoon_vert:Uy,meshtoon_frag:Ny,points_vert:zy,points_frag:Oy,shadow_vert:ky,shadow_frag:By,sprite_vert:Hy,sprite_frag:Gy},ce={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},mi={basic:{uniforms:Mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new se(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Mn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Mn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new se(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Mn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Mn([ce.points,ce.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Mn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Mn([ce.common,ce.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Mn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Mn([ce.sprite,ce.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Mn([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Mn([ce.lights,ce.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};mi.physical={uniforms:Mn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Pa={r:0,b:0,g:0};function Vy(n,e,t,i,s,r,o){let a=new se(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(p,m){let _=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),_=!0);let y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Tl)?(h===void 0&&(h=new ae(new vi(1,1,1),new ut({name:"BackgroundCubeMaterial",uniforms:Er(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=lt.getTransfer(v.colorSpace)!==xt,(u!==v||d!==v.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ae(new Bt(2,2),new ut({name:"BackgroundMaterial",uniforms:Er(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=lt.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,m){p.getRGB(Pa,Op(n)),i.buffers.color.setClear(Pa.r,Pa.g,Pa.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:g}}function Wy(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function u(L,U,q,K,$){let Z=!1;if(o){let te=x(K,q,U);c!==te&&(c=te,f(c.object)),Z=m(L,K,q,$),Z&&_(L,K,q,$)}else{let te=U.wireframe===!0;(c.geometry!==K.id||c.program!==q.id||c.wireframe!==te)&&(c.geometry=K.id,c.program=q.id,c.wireframe=te,Z=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,D(L,U,q,K),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,U,q){let K=q.wireframe===!0,$=a[L.id];$===void 0&&($={},a[L.id]=$);let Z=$[U.id];Z===void 0&&(Z={},$[U.id]=Z);let te=Z[K];return te===void 0&&(te=p(d()),Z[K]=te),te}function p(L){let U=[],q=[],K=[];for(let $=0;$<s;$++)U[$]=0,q[$]=0,K[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:K,object:L,attributes:{},index:null}}function m(L,U,q,K){let $=c.attributes,Z=U.attributes,te=0,oe=q.getAttributes();for(let xe in oe)if(oe[xe].location>=0){let j=$[xe],me=Z[xe];if(me===void 0&&(xe==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),xe==="instanceColor"&&L.instanceColor&&(me=L.instanceColor)),j===void 0||j.attribute!==me||me&&j.data!==me.data)return!0;te++}return c.attributesNum!==te||c.index!==K}function _(L,U,q,K){let $={},Z=U.attributes,te=0,oe=q.getAttributes();for(let xe in oe)if(oe[xe].location>=0){let j=Z[xe];j===void 0&&(xe==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),xe==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let me={};me.attribute=j,j&&j.data&&(me.data=j.data),$[xe]=me,te++}c.attributes=$,c.attributesNum=te,c.index=K}function v(){let L=c.newAttributes;for(let U=0,q=L.length;U<q;U++)L[U]=0}function y(L){w(L,0)}function w(L,U){let q=c.newAttributes,K=c.enabledAttributes,$=c.attributeDivisors;q[L]=1,K[L]===0&&(n.enableVertexAttribArray(L),K[L]=1),$[L]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),$[L]=U)}function S(){let L=c.newAttributes,U=c.enabledAttributes;for(let q=0,K=U.length;q<K;q++)U[q]!==L[q]&&(n.disableVertexAttribArray(q),U[q]=0)}function R(L,U,q,K,$,Z,te){te===!0?n.vertexAttribIPointer(L,U,q,$,Z):n.vertexAttribPointer(L,U,q,K,$,Z)}function D(L,U,q,K){if(i.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let $=K.attributes,Z=q.getAttributes(),te=U.defaultAttributeValues;for(let oe in Z){let xe=Z[oe];if(xe.location>=0){let Y=$[oe];if(Y===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){let j=Y.normalized,me=Y.itemSize,Ee=t.get(Y);if(Ee===void 0)continue;let Se=Ee.buffer,We=Ee.type,qe=Ee.bytesPerElement,Ue=i.isWebGL2===!0&&(We===n.INT||We===n.UNSIGNED_INT||Y.gpuType===wp);if(Y.isInterleavedBufferAttribute){let at=Y.data,H=at.stride,xn=Y.offset;if(at.isInstancedInterleavedBuffer){for(let Ae=0;Ae<xe.locationSize;Ae++)w(xe.location+Ae,at.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ae=0;Ae<xe.locationSize;Ae++)y(xe.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let Ae=0;Ae<xe.locationSize;Ae++)R(xe.location+Ae,me/xe.locationSize,We,j,H*qe,(xn+me/xe.locationSize*Ae)*qe,Ue)}else{if(Y.isInstancedBufferAttribute){for(let at=0;at<xe.locationSize;at++)w(xe.location+at,Y.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let at=0;at<xe.locationSize;at++)y(xe.location+at);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let at=0;at<xe.locationSize;at++)R(xe.location+at,me/xe.locationSize,We,j,me*qe,me/xe.locationSize*at*qe,Ue)}}else if(te!==void 0){let j=te[oe];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(xe.location,j);break;case 3:n.vertexAttrib3fv(xe.location,j);break;case 4:n.vertexAttrib4fv(xe.location,j);break;default:n.vertexAttrib1fv(xe.location,j)}}}}S()}function M(){k();for(let L in a){let U=a[L];for(let q in U){let K=U[q];for(let $ in K)g(K[$].object),delete K[$];delete U[q]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;let U=a[L.id];for(let q in U){let K=U[q];for(let $ in K)g(K[$].object),delete K[$];delete U[q]}delete a[L.id]}function F(L){for(let U in a){let q=a[U];if(q[L.id]===void 0)continue;let K=q[L.id];for(let $ in K)g(K[$].object),delete K[$];delete q[L.id]}}function k(){O(),h=!0,c!==l&&(c=l,f(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:k,resetDefaultState:O,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:y,disableUnusedAttributes:S}}function Xy(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function qy(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),w=v&&y,S=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:S}}function Yy(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Ii,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let _=r?0:i,v=_*4,y=m.clippingState||null;l.value=y,y=h(g,d,v,f);for(let w=0;w!==v;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=f;v!==x;++v,y+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Zy(n){let e=new WeakMap;function t(o,a){return a===nh?o.mapping=xr:a===ih&&(o.mapping=_r),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===nh||a===ih)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ao(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var rs=class extends Ja{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fr=4,Nf=[.125,.215,.35,.446,.526,.582],Is=20,Vc=new rs,zf=new se,Wc=null,Xc=0,qc=0,Ps=(1+Math.sqrt(5))/2,hr=1/Ps,Of=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Ps,hr),new P(0,Ps,-hr),new P(hr,0,Ps),new P(-hr,0,Ps),new P(Ps,hr,0),new P(-Ps,hr,0)],wr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,qc),e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:An,format:Kn,colorSpace:Yt,depthBuffer:!1},s=kf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$y(r)),this._blurMaterial=Ky(r,e,t)}return s}_compileMaterial(e){let t=new ae(this._lodPlanes[0],e);this._renderer.compile(t,Vc)}_sceneToCubeUV(e,t,i,s){let a=new qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zf),h.toneMapping=es,h.autoClear=!1;let f=new ke({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new ae(new vi,f),x=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(zf),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;La(s,_*v,m>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===xr||e.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;La(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Vc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Of[(s-1)%Of.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ae(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Is-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Is;p>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Is}`);let m=[],_=0;for(let R=0;R<Is;++R){let D=R/x,M=Math.exp(-D*D/2);m.push(M),R===0?_+=M:R<p&&(_+=2*M)}for(let R=0;R<m.length;R++)m[R]=m[R]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let y=this._sizeLods[s],w=3*y*(s>v-fr?s-v+fr:0),S=4*(this._cubeSize-y);La(t,w,S,3*y,2*y),l.setRenderTarget(t),l.render(u,Vc)}};function $y(n){let e=[],t=[],i=[],s=n,r=n-fr+1+Nf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-fr?l=Nf[o-n+fr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,p=2,m=1,_=new Float32Array(x*g*f),v=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let S=0;S<f;S++){let R=S%3*2/3-1,D=S>2?0:-1,M=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];_.set(M,x*g*S),v.set(d,p*g*S);let T=[S,S,S,S,S,S];y.set(T,m*g*S)}let w=new wt;w.setAttribute("position",new ht(_,x)),w.setAttribute("uv",new ht(v,p)),w.setAttribute("faceIndex",new ht(y,m)),e.push(w),s>fr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kf(n,e,t){let i=new an(n,e,t);return i.texture.mapping=Tl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function La(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ky(n,e,t){let i=new Float32Array(Is),s=new P(0,1,0);return new ut({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Bf(){return new ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Hf(){return new ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Qh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===nh||l===ih,h=l===xr||l===_r;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new wr(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new wr(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function jy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Qy(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let v=0,y=_.length;v<y;v+=3){let w=_[v+0],S=_[v+1],R=_[v+2];d.push(w,S,S,R,R,w)}}else if(g!==void 0){let _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let w=v+0,S=v+1,R=v+2;d.push(w,S,S,R,R,w)}}else return;let p=new(Np(d)?Ka:Sr)(d,1);p.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function eM(n,e,t,i){let s=i.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){n.drawElements(r,g,a,f*l),t.update(g,r,1)}function u(f,g,x){if(x===0)return;let p,m;if(s)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,f*l,x),t.update(g,r,x)}function d(f,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<x;m++)this.render(f[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let m=0;for(let _=0;_<x;_++)m+=g[_];t.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function tM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function nM(n,e){return n[0]-e[0]}function iM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function sM(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],D=0;_===!0&&(D=1),v===!0&&(D=2),y===!0&&(D=3);let M=h.attributes.position.count*D,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let F=new Float32Array(M*T*4*g),k=new Za(F,M,T,g);k.type=Di,k.needsUpdate=!0;let O=D*4;for(let U=0;U<g;U++){let q=w[U],K=S[U],$=R[U],Z=M*T*4*U;for(let te=0;te<q.count;te++){let oe=te*O;_===!0&&(o.fromBufferAttribute(q,te),F[Z+oe+0]=o.x,F[Z+oe+1]=o.y,F[Z+oe+2]=o.z,F[Z+oe+3]=0),v===!0&&(o.fromBufferAttribute(K,te),F[Z+oe+4]=o.x,F[Z+oe+5]=o.y,F[Z+oe+6]=o.z,F[Z+oe+7]=0),y===!0&&(o.fromBufferAttribute($,te),F[Z+oe+8]=o.x,F[Z+oe+9]=o.y,F[Z+oe+10]=o.z,F[Z+oe+11]=$.itemSize===4?o.w:1)}}x={count:g,texture:k,size:new ne(M,T)},r.set(h,x),h.addEventListener("dispose",L)}let p=0;for(let _=0;_<d.length;_++)p+=d[_];let m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",m),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<f;v++){let y=g[v];y[0]=v,y[1]=d[v]}g.sort(iM);for(let v=0;v<8;v++)v<f&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(nM);let x=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let y=a[v],w=y[0],S=y[1];w!==Number.MAX_SAFE_INTEGER&&S?(x&&h.getAttribute("morphTarget"+v)!==x[w]&&h.setAttribute("morphTarget"+v,x[w]),p&&h.getAttribute("morphNormal"+v)!==p[w]&&h.setAttribute("morphNormal"+v,p[w]),s[v]=S,m+=S):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let _=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",_),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function rM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Qa=class extends on{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Fs,h!==Fs&&h!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Fs&&(i=Ji),i===void 0&&h===vr&&(i=Ds),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bp=new on,Hp=new Qa(1,1);Hp.compareFunction=Fp;var Gp=new Za,Vp=new lh,Wp=new ja,Gf=[],Vf=[],Wf=new Float32Array(16),Xf=new Float32Array(9),qf=new Float32Array(4);function Dr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Gf[s];if(r===void 0&&(r=new Float32Array(s),Gf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pl(n,e){let t=Vf[e];t===void 0&&(t=new Int32Array(e),Vf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function aM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function lM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function cM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function hM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,i))return;qf.set(i),n.uniformMatrix2fv(this.addr,!1,qf),$t(t,i)}}function uM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,i))return;Xf.set(i),n.uniformMatrix3fv(this.addr,!1,Xf),$t(t,i)}}function dM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,i))return;Wf.set(i),n.uniformMatrix4fv(this.addr,!1,Wf),$t(t,i)}}function fM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function mM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function gM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function xM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _M(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function vM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function yM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function MM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Hp:Bp;t.setTexture2D(e||r,s)}function bM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vp,s)}function SM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Wp,s)}function EM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Gp,s)}function wM(n){switch(n){case 5126:return oM;case 35664:return aM;case 35665:return lM;case 35666:return cM;case 35674:return hM;case 35675:return uM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return xM;case 36294:return _M;case 36295:return vM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return EM}}function TM(n,e){n.uniform1fv(this.addr,e)}function AM(n,e){let t=Dr(e,this.size,2);n.uniform2fv(this.addr,t)}function RM(n,e){let t=Dr(e,this.size,3);n.uniform3fv(this.addr,t)}function CM(n,e){let t=Dr(e,this.size,4);n.uniform4fv(this.addr,t)}function PM(n,e){let t=Dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function LM(n,e){let t=Dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function IM(n,e){let t=Dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function DM(n,e){n.uniform1iv(this.addr,e)}function FM(n,e){n.uniform2iv(this.addr,e)}function UM(n,e){n.uniform3iv(this.addr,e)}function NM(n,e){n.uniform4iv(this.addr,e)}function zM(n,e){n.uniform1uiv(this.addr,e)}function OM(n,e){n.uniform2uiv(this.addr,e)}function kM(n,e){n.uniform3uiv(this.addr,e)}function BM(n,e){n.uniform4uiv(this.addr,e)}function HM(n,e,t){let i=this.cache,s=e.length,r=Pl(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Bp,r[o])}function GM(n,e,t){let i=this.cache,s=e.length,r=Pl(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vp,r[o])}function VM(n,e,t){let i=this.cache,s=e.length,r=Pl(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Wp,r[o])}function WM(n,e,t){let i=this.cache,s=e.length,r=Pl(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gp,r[o])}function XM(n){switch(n){case 5126:return TM;case 35664:return AM;case 35665:return RM;case 35666:return CM;case 35674:return PM;case 35675:return LM;case 35676:return IM;case 5124:case 35670:return DM;case 35667:case 35671:return FM;case 35668:case 35672:return UM;case 35669:case 35673:return NM;case 5125:return zM;case 36294:return OM;case 36295:return kM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return WM}}var ch=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wM(t.type)}},hh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XM(t.type)}},uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Yc=/(\w+)(\])?(\[|\.)?/g;function Yf(n,e){n.seq.push(e),n.map[e.id]=e}function qM(n,e,t){let i=n.name,s=i.length;for(Yc.lastIndex=0;;){let r=Yc.exec(i),o=Yc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yf(t,c===void 0?new ch(a,n,e):new hh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new uh(a),Yf(t,u)),t=u}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);qM(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Zf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var YM=37297,ZM=0;function $M(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function KM(n){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n),i;switch(e===t?i="":e===Va&&t===Ga?i="LinearDisplayP3ToLinearSRGB":e===Ga&&t===Va&&(i="LinearSRGBToLinearDisplayP3"),n){case Yt:case Rl:return[i,"LinearTransferOETF"];case ct:case Jh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function $f(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+$M(n.getShaderSource(e),o)}else return s}function JM(n,e){let t=KM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jM(n,e){let t;switch(e){case Wh:t="Linear";break;case Xh:t="Reinhard";break;case qh:t="OptimizedCineon";break;case Oo:t="ACESFilmic";break;case Yh:t="AgX";break;case lx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function QM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pr).join(`
`)}function eb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(pr).join(`
`)}function tb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function pr(n){return n!==""}function Kf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(n){return n.replace(ib,rb)}var sb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rb(n,e){let t=Ze[e];if(t===void 0){let i=sb.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dh(t)}var ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jf(n){return n.replace(ob,ab)}function ab(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function cb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case _r:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function ub(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case ox:e="ENVMAP_BLENDING_MIX";break;case ax:e="ENVMAP_BLENDING_ADD";break}return e}function db(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=lb(t),c=cb(t),h=hb(t),u=ub(t),d=db(t),f=t.isWebGL2?"":QM(t),g=eb(t),x=tb(r),p=s.createProgram(),m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(pr).join(`
`),m.length>0&&(m+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(pr).join(`
`),_.length>0&&(_+=`
`)):(m=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),_=[f,Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?Ze.tonemapping_pars_fragment:"",t.toneMapping!==es?jM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,JM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),o=dh(o),o=Kf(o,t),o=Jf(o,t),a=dh(a),a=Kf(a,t),a=Jf(a,t),o=jf(o),a=jf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===_f?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=v+m+o,w=v+_+a,S=Zf(s,s.VERTEX_SHADER,y),R=Zf(s,s.FRAGMENT_SHADER,w);s.attachShader(p,S),s.attachShader(p,R),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function D(k){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(S).trim(),U=s.getShaderInfoLog(R).trim(),q=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,S,R);else{let $=$f(s,S,"vertex"),Z=$f(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+$+`
`+Z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||U==="")&&(K=!1);K&&(k.diagnostics={runnable:q,programLog:O,vertexShader:{log:L,prefix:m},fragmentShader:{log:U,prefix:_}})}s.deleteShader(S),s.deleteShader(R),M=new gr(s,p),T=nb(s,p)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(p,YM)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=R,this}var pb=0,fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ph(e),t.set(e,i)),i}},ph=class{constructor(e){this.id=pb++,this.code=e,this.usedTimes=0}};function mb(n,e,t,i,s,r,o){let a=new $a,l=new fh,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,T,F,k,O){let L=k.fog,U=O.geometry,q=M.isMeshStandardMaterial?k.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),$=K&&K.mapping===Tl?K.image.height:null,Z=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let te=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,oe=te!==void 0?te.length:0,xe=0;U.morphAttributes.position!==void 0&&(xe=1),U.morphAttributes.normal!==void 0&&(xe=2),U.morphAttributes.color!==void 0&&(xe=3);let Y,j,me,Ee;if(Z){let _n=mi[Z];Y=_n.vertexShader,j=_n.fragmentShader}else Y=M.vertexShader,j=M.fragmentShader,l.update(M),me=l.getVertexShaderID(M),Ee=l.getFragmentShaderID(M);let Se=n.getRenderTarget(),We=O.isInstancedMesh===!0,qe=O.isBatchedMesh===!0,Ue=!!M.map,at=!!M.matcap,H=!!K,xn=!!M.aoMap,Ae=!!M.lightMap,Ge=!!M.bumpMap,ye=!!M.normalMap,It=!!M.displacementMap,$e=!!M.emissiveMap,C=!!M.metalnessMap,E=!!M.roughnessMap,V=M.anisotropy>0,ie=M.clearcoat>0,ee=M.iridescence>0,re=M.sheen>0,Me=M.transmission>0,fe=V&&!!M.anisotropyMap,_e=ie&&!!M.clearcoatMap,Ie=ie&&!!M.clearcoatNormalMap,Ke=ie&&!!M.clearcoatRoughnessMap,Q=ee&&!!M.iridescenceMap,pt=ee&&!!M.iridescenceThicknessMap,nt=re&&!!M.sheenColorMap,Be=re&&!!M.sheenRoughnessMap,we=!!M.specularMap,ve=!!M.specularColorMap,Ye=!!M.specularIntensityMap,dt=Me&&!!M.transmissionMap,Ut=Me&&!!M.thicknessMap,je=!!M.gradientMap,le=!!M.alphaMap,I=M.alphaTest>0,ue=!!M.alphaHash,de=!!M.extensions,Ne=!!U.attributes.uv1,Re=!!U.attributes.uv2,Mt=!!U.attributes.uv3,bt=es;return M.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(bt=n.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:j,defines:M.defines,customVertexShaderID:me,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:qe,instancing:We,instancingColor:We&&O.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Yt,map:Ue,matcap:at,envMap:H,envMapMode:H&&K.mapping,envMapCubeUVHeight:$,aoMap:xn,lightMap:Ae,bumpMap:Ge,normalMap:ye,displacementMap:d&&It,emissiveMap:$e,normalMapObjectSpace:ye&&M.normalMapType===Mx,normalMapTangentSpace:ye&&M.normalMapType===Kh,metalnessMap:C,roughnessMap:E,anisotropy:V,anisotropyMap:fe,clearcoat:ie,clearcoatMap:_e,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Ke,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:pt,sheen:re,sheenColorMap:nt,sheenRoughnessMap:Be,specularMap:we,specularColorMap:ve,specularIntensityMap:Ye,transmission:Me,transmissionMap:dt,thicknessMap:Ut,gradientMap:je,opaque:M.transparent===!1&&M.blending===Qi,alphaMap:le,alphaTest:I,alphaHash:ue,combine:M.combine,mapUv:Ue&&x(M.map.channel),aoMapUv:xn&&x(M.aoMap.channel),lightMapUv:Ae&&x(M.lightMap.channel),bumpMapUv:Ge&&x(M.bumpMap.channel),normalMapUv:ye&&x(M.normalMap.channel),displacementMapUv:It&&x(M.displacementMap.channel),emissiveMapUv:$e&&x(M.emissiveMap.channel),metalnessMapUv:C&&x(M.metalnessMap.channel),roughnessMapUv:E&&x(M.roughnessMap.channel),anisotropyMapUv:fe&&x(M.anisotropyMap.channel),clearcoatMapUv:_e&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(M.sheenRoughnessMap.channel),specularMapUv:we&&x(M.specularMap.channel),specularColorMapUv:ve&&x(M.specularColorMap.channel),specularIntensityMapUv:Ye&&x(M.specularIntensityMap.channel),transmissionMapUv:dt&&x(M.transmissionMap.channel),thicknessMapUv:Ut&&x(M.thicknessMap.channel),alphaMapUv:le&&x(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ye||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:Re,vertexUv3s:Mt,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(Ue||le),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:O.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:xe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ue&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===xt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Tt,flipSided:M.side===Gt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:de&&M.extensions.derivatives===!0,extensionFragDepth:de&&M.extensions.fragDepth===!0,extensionDrawBuffers:de&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let F in M.defines)T.push(F),T.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(_(T,M),v(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){let T=g[M.type],F;if(T){let k=mi[T];F=ds.clone(k.uniforms)}else F=M.uniforms;return F}function w(M,T){let F;for(let k=0,O=c.length;k<O;k++){let L=c[k];if(L.cacheKey===T){F=L,++F.usedTimes;break}}return F===void 0&&(F=new fb(n,T,M,r),c.push(F)),F}function S(M){if(--M.usedTimes===0){let T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:w,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:D}}function gb(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function xb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ep(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,x,p){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},n[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),e++,m}function a(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||xb),i.length>1&&i.sort(d||ep),s.length>1&&s.sort(d||ep)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function _b(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new tp,n.set(i,[o])):s>=r.length?(o=new tp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function vb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new se};break;case"SpotLight":t={position:new P,direction:new P,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function yb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Mb=0;function bb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Sb(n,e){let t=new vb,i=yb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,o=new De,a=new De;function l(h,u){let d=0,f=0,g=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let x=0,p=0,m=0,_=0,v=0,y=0,w=0,S=0,R=0,D=0,M=0;h.sort(bb);let T=u===!0?Math.PI:1;for(let k=0,O=h.length;k<O;k++){let L=h[k],U=L.color,q=L.intensity,K=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=U.r*q*T,f+=U.g*q*T,g+=U.b*q*T;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(L.sh.coefficients[Z],q);M++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){let te=L.shadow,oe=i.get(L);oe.shadowBias=te.bias,oe.shadowNormalBias=te.normalBias,oe.shadowRadius=te.radius,oe.shadowMapSize=te.mapSize,s.directionalShadow[x]=oe,s.directionalShadowMap[x]=$,s.directionalShadowMatrix[x]=L.shadow.matrix,y++}s.directional[x]=Z,x++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(U).multiplyScalar(q*T),Z.distance=K,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,s.spot[m]=Z;let te=L.shadow;if(L.map&&(s.spotLightMap[R]=L.map,R++,te.updateMatrices(L),L.castShadow&&D++),s.spotLightMatrix[m]=te.matrix,L.castShadow){let oe=i.get(L);oe.shadowBias=te.bias,oe.shadowNormalBias=te.normalBias,oe.shadowRadius=te.radius,oe.shadowMapSize=te.mapSize,s.spotShadow[m]=oe,s.spotShadowMap[m]=$,S++}m++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(U).multiplyScalar(q),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),s.rectArea[_]=Z,_++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*T),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let te=L.shadow,oe=i.get(L);oe.shadowBias=te.bias,oe.shadowNormalBias=te.normalBias,oe.shadowRadius=te.radius,oe.shadowMapSize=te.mapSize,oe.shadowCameraNear=te.camera.near,oe.shadowCameraFar=te.camera.far,s.pointShadow[p]=oe,s.pointShadowMap[p]=$,s.pointShadowMatrix[p]=L.shadow.matrix,w++}s.point[p]=Z,p++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(q*T),Z.groundColor.copy(L.groundColor).multiplyScalar(q*T),s.hemi[v]=Z,v++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==x||F.pointLength!==p||F.spotLength!==m||F.rectAreaLength!==_||F.hemiLength!==v||F.numDirectionalShadows!==y||F.numPointShadows!==w||F.numSpotShadows!==S||F.numSpotMaps!==R||F.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=m,s.rectArea.length=_,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=S+R-D,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=M,F.directionalLength=x,F.pointLength=p,F.spotLength=m,F.rectAreaLength=_,F.hemiLength=v,F.numDirectionalShadows=y,F.numPointShadows=w,F.numSpotShadows=S,F.numSpotMaps=R,F.numLightProbes=M,s.version=Mb++)}function c(h,u){let d=0,f=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){let y=h[_];if(y.isDirectionalLight){let w=s.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),d++}else if(y.isSpotLight){let w=s.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let w=s.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let w=s.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let w=s.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:s}}function np(n,e){let t=new Sb(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Eb(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new np(n,e),t.set(r,[l])):o>=a.length?(l=new np(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var mh=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gh=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ab(n,e,t){let i=new Ro,s=new ne,r=new ne,o=new _t,a=new mh({depthPacking:yx}),l=new gh,c={},h=t.maxTextureSize,u={[_i]:Gt,[Gt]:_i,[Tt]:Tt},d=new ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:wb,fragmentShader:Tb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new wt;g.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ae(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let m=this.type;this.render=function(S,R,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let M=n.getRenderTarget(),T=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),k=n.state;k.setBlending(xi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let O=m!==Li&&this.type===Li,L=m===Li&&this.type!==Li;for(let U=0,q=S.length;U<q;U++){let K=S[U],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let Z=$.getFrameExtents();if(s.multiply(Z),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,$.mapSize.y=r.y)),$.map===null||O===!0||L===!0){let oe=this.type!==Li?{minFilter:Wt,magFilter:Wt}:{};$.map!==null&&$.map.dispose(),$.map=new an(s.x,s.y,oe),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let te=$.getViewportCount();for(let oe=0;oe<te;oe++){let xe=$.getViewport(oe);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),k.viewport(o),$.updateMatrices(K,oe),i=$.getFrustum(),y(R,D,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===Li&&_($,D),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(M,T,F)};function _(S,R){let D=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new an(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(R,null,D,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(R,null,D,f,x,null)}function v(S,R,D,M){let T=null,F=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)T=F;else if(T=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let k=T.uuid,O=R.uuid,L=c[k];L===void 0&&(L={},c[k]=L);let U=L[O];U===void 0&&(U=T.clone(),L[O]=U,R.addEventListener("dispose",w)),T=U}if(T.visible=R.visible,T.wireframe=R.wireframe,M===Li?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:u[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let k=n.properties.get(T);k.light=D}return T}function y(S,R,D,M,T){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===Li)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);let O=e.update(S),L=S.material;if(Array.isArray(L)){let U=O.groups;for(let q=0,K=U.length;q<K;q++){let $=U[q],Z=L[$.materialIndex];if(Z&&Z.visible){let te=v(S,Z,M,T);S.onBeforeShadow(n,S,R,D,O,te,$),n.renderBufferDirect(D,null,O,te,S,$),S.onAfterShadow(n,S,R,D,O,te,$)}}}else if(L.visible){let U=v(S,L,M,T);S.onBeforeShadow(n,S,R,D,O,U,null),n.renderBufferDirect(D,null,O,U,S,null),S.onAfterShadow(n,S,R,D,O,U,null)}}let k=S.children;for(let O=0,L=k.length;O<L;O++)y(k[O],R,D,M,T)}function w(S){S.target.removeEventListener("dispose",w);for(let D in c){let M=c[D],T=S.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function Rb(n,e,t){let i=t.isWebGL2;function s(){let I=!1,ue=new _t,de=null,Ne=new _t(0,0,0,0);return{setMask:function(Re){de!==Re&&!I&&(n.colorMask(Re,Re,Re,Re),de=Re)},setLocked:function(Re){I=Re},setClear:function(Re,Mt,bt,Qt,_n){_n===!0&&(Re*=Qt,Mt*=Qt,bt*=Qt),ue.set(Re,Mt,bt,Qt),Ne.equals(ue)===!1&&(n.clearColor(Re,Mt,bt,Qt),Ne.copy(ue))},reset:function(){I=!1,de=null,Ne.set(-1,0,0,0)}}}function r(){let I=!1,ue=null,de=null,Ne=null;return{setTest:function(Re){Re?qe(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(Re){ue!==Re&&!I&&(n.depthMask(Re),ue=Re)},setFunc:function(Re){if(de!==Re){switch(Re){case ex:n.depthFunc(n.NEVER);break;case tx:n.depthFunc(n.ALWAYS);break;case nx:n.depthFunc(n.LESS);break;case ka:n.depthFunc(n.LEQUAL);break;case ix:n.depthFunc(n.EQUAL);break;case sx:n.depthFunc(n.GEQUAL);break;case Gh:n.depthFunc(n.GREATER);break;case rx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=Re}},setLocked:function(Re){I=Re},setClear:function(Re){Ne!==Re&&(n.clearDepth(Re),Ne=Re)},reset:function(){I=!1,ue=null,de=null,Ne=null}}}function o(){let I=!1,ue=null,de=null,Ne=null,Re=null,Mt=null,bt=null,Qt=null,_n=null;return{setTest:function(St){I||(St?qe(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(St){ue!==St&&!I&&(n.stencilMask(St),ue=St)},setFunc:function(St,vn,pi){(de!==St||Ne!==vn||Re!==pi)&&(n.stencilFunc(St,vn,pi),de=St,Ne=vn,Re=pi)},setOp:function(St,vn,pi){(Mt!==St||bt!==vn||Qt!==pi)&&(n.stencilOp(St,vn,pi),Mt=St,bt=vn,Qt=pi)},setLocked:function(St){I=St},setClear:function(St){_n!==St&&(n.clearStencil(St),_n=St)},reset:function(){I=!1,ue=null,de=null,Ne=null,Re=null,Mt=null,bt=null,Qt=null,_n=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],p=null,m=!1,_=null,v=null,y=null,w=null,S=null,R=null,D=null,M=new se(0,0,0),T=0,F=!1,k=null,O=null,L=null,U=null,q=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,Z=0,te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(te)[1]),$=Z>=1):te.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),$=Z>=2);let oe=null,xe={},Y=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),me=new _t().fromArray(Y),Ee=new _t().fromArray(j);function Se(I,ue,de,Ne){let Re=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(I,Mt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let bt=0;bt<de;bt++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(ue,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(ue+bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return Mt}let We={};We[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),We[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(We[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),We[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),qe(n.DEPTH_TEST),l.setFunc(ka),$e(!1),C(Nd),qe(n.CULL_FACE),ye(xi);function qe(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function Ue(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function at(I,ue){return f[I]!==ue?(n.bindFramebuffer(I,ue),f[I]=ue,i&&(I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ue),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ue)),!0):!1}function H(I,ue){let de=x,Ne=!1;if(I)if(de=g.get(ue),de===void 0&&(de=[],g.set(ue,de)),I.isWebGLMultipleRenderTargets){let Re=I.texture;if(de.length!==Re.length||de[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,bt=Re.length;Mt<bt;Mt++)de[Mt]=n.COLOR_ATTACHMENT0+Mt;de.length=Re.length,Ne=!0}}else de[0]!==n.COLOR_ATTACHMENT0&&(de[0]=n.COLOR_ATTACHMENT0,Ne=!0);else de[0]!==n.BACK&&(de[0]=n.BACK,Ne=!0);Ne&&(t.isWebGL2?n.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function xn(I){return p!==I?(n.useProgram(I),p=I,!0):!1}let Ae={[Ls]:n.FUNC_ADD,[kg]:n.FUNC_SUBTRACT,[Bg]:n.FUNC_REVERSE_SUBTRACT};if(i)Ae[kd]=n.MIN,Ae[Bd]=n.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(Ae[kd]=I.MIN_EXT,Ae[Bd]=I.MAX_EXT)}let Ge={[Hg]:n.ZERO,[Gg]:n.ONE,[Vg]:n.SRC_COLOR,[bo]:n.SRC_ALPHA,[$g]:n.SRC_ALPHA_SATURATE,[Yg]:n.DST_COLOR,[Xg]:n.DST_ALPHA,[Wg]:n.ONE_MINUS_SRC_COLOR,[So]:n.ONE_MINUS_SRC_ALPHA,[Zg]:n.ONE_MINUS_DST_COLOR,[qg]:n.ONE_MINUS_DST_ALPHA,[Kg]:n.CONSTANT_COLOR,[Jg]:n.ONE_MINUS_CONSTANT_COLOR,[jg]:n.CONSTANT_ALPHA,[Qg]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(I,ue,de,Ne,Re,Mt,bt,Qt,_n,St){if(I===xi){m===!0&&(Ue(n.BLEND),m=!1);return}if(m===!1&&(qe(n.BLEND),m=!0),I!==Hh){if(I!==_||St!==F){if((v!==Ls||S!==Ls)&&(n.blendEquation(n.FUNC_ADD),v=Ls,S=Ls),St)switch(I){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tn:n.blendFunc(n.ONE,n.ONE);break;case zd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Od:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Od:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,w=null,R=null,D=null,M.set(0,0,0),T=0,_=I,F=St}return}Re=Re||ue,Mt=Mt||de,bt=bt||Ne,(ue!==v||Re!==S)&&(n.blendEquationSeparate(Ae[ue],Ae[Re]),v=ue,S=Re),(de!==y||Ne!==w||Mt!==R||bt!==D)&&(n.blendFuncSeparate(Ge[de],Ge[Ne],Ge[Mt],Ge[bt]),y=de,w=Ne,R=Mt,D=bt),(Qt.equals(M)===!1||_n!==T)&&(n.blendColor(Qt.r,Qt.g,Qt.b,_n),M.copy(Qt),T=_n),_=I,F=!1}function It(I,ue){I.side===Tt?Ue(n.CULL_FACE):qe(n.CULL_FACE);let de=I.side===Gt;ue&&(de=!de),$e(de),I.blending===Qi&&I.transparent===!1?ye(xi):ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);let Ne=I.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?qe(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function $e(I){k!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),k=I)}function C(I){I!==zg?(qe(n.CULL_FACE),I!==O&&(I===Nd?n.cullFace(n.BACK):I===Og?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),O=I}function E(I){I!==L&&($&&n.lineWidth(I),L=I)}function V(I,ue,de){I?(qe(n.POLYGON_OFFSET_FILL),(U!==ue||q!==de)&&(n.polygonOffset(ue,de),U=ue,q=de)):Ue(n.POLYGON_OFFSET_FILL)}function ie(I){I?qe(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function ee(I){I===void 0&&(I=n.TEXTURE0+K-1),oe!==I&&(n.activeTexture(I),oe=I)}function re(I,ue,de){de===void 0&&(oe===null?de=n.TEXTURE0+K-1:de=oe);let Ne=xe[de];Ne===void 0&&(Ne={type:void 0,texture:void 0},xe[de]=Ne),(Ne.type!==I||Ne.texture!==ue)&&(oe!==de&&(n.activeTexture(de),oe=de),n.bindTexture(I,ue||We[I]),Ne.type=I,Ne.texture=ue)}function Me(){let I=xe[oe];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function fe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(I){me.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),me.copy(I))}function dt(I){Ee.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ee.copy(I))}function Ut(I,ue){let de=u.get(ue);de===void 0&&(de=new WeakMap,u.set(ue,de));let Ne=de.get(I);Ne===void 0&&(Ne=n.getUniformBlockIndex(ue,I.name),de.set(I,Ne))}function je(I,ue){let Ne=u.get(ue).get(I);h.get(ue)!==Ne&&(n.uniformBlockBinding(ue,Ne,I.__bindingPointIndex),h.set(ue,Ne))}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},oe=null,xe={},f={},g=new WeakMap,x=[],p=null,m=!1,_=null,v=null,y=null,w=null,S=null,R=null,D=null,M=new se(0,0,0),T=0,F=!1,k=null,O=null,L=null,U=null,q=null,me.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:qe,disable:Ue,bindFramebuffer:at,drawBuffers:H,useProgram:xn,setBlending:ye,setMaterial:It,setFlipSided:$e,setCullFace:C,setLineWidth:E,setPolygonOffset:V,setScissorTest:ie,activeTexture:ee,bindTexture:re,unbindTexture:Me,compressedTexImage2D:fe,compressedTexImage3D:_e,texImage2D:we,texImage3D:ve,updateUBOMapping:Ut,uniformBlockBinding:je,texStorage2D:nt,texStorage3D:Be,texSubImage2D:Ie,texSubImage3D:Ke,compressedTexSubImage2D:Q,compressedTexSubImage3D:pt,scissor:Ye,viewport:dt,reset:le}}function Cb(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return f?new OffscreenCanvas(C,E):wo("canvas")}function x(C,E,V,ie){let ee=1;if((C.width>ie||C.height>ie)&&(ee=ie/Math.max(C.width,C.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let re=E?Xa:Math.floor,Me=re(ee*C.width),fe=re(ee*C.height);u===void 0&&(u=g(Me,fe));let _e=V?g(Me,fe):u;return _e.width=Me,_e.height=fe,_e.getContext("2d").drawImage(C,0,0,Me,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+fe+")."),_e}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return oh(C.width)&&oh(C.height)}function m(C){return a?!1:C.wrapS!==Bn||C.wrapT!==Bn||C.minFilter!==Wt&&C.minFilter!==bn}function _(C,E){return C.generateMipmaps&&E&&C.minFilter!==Wt&&C.minFilter!==bn}function v(C){n.generateMipmap(C)}function y(C,E,V,ie,ee=!1){if(a===!1)return E;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re=E;if(E===n.RED&&(V===n.FLOAT&&(re=n.R32F),V===n.HALF_FLOAT&&(re=n.R16F),V===n.UNSIGNED_BYTE&&(re=n.R8)),E===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(re=n.R8UI),V===n.UNSIGNED_SHORT&&(re=n.R16UI),V===n.UNSIGNED_INT&&(re=n.R32UI),V===n.BYTE&&(re=n.R8I),V===n.SHORT&&(re=n.R16I),V===n.INT&&(re=n.R32I)),E===n.RG&&(V===n.FLOAT&&(re=n.RG32F),V===n.HALF_FLOAT&&(re=n.RG16F),V===n.UNSIGNED_BYTE&&(re=n.RG8)),E===n.RGBA){let Me=ee?Ha:lt.getTransfer(ie);V===n.FLOAT&&(re=n.RGBA32F),V===n.HALF_FLOAT&&(re=n.RGBA16F),V===n.UNSIGNED_BYTE&&(re=Me===xt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function w(C,E,V){return _(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Wt&&C.minFilter!==bn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function S(C){return C===Wt||C===Ba||C===mo?n.NEAREST:n.LINEAR}function R(C){let E=C.target;E.removeEventListener("dispose",R),M(E),E.isVideoTexture&&h.delete(E)}function D(C){let E=C.target;E.removeEventListener("dispose",D),F(E)}function M(C){let E=i.get(C);if(E.__webglInit===void 0)return;let V=C.source,ie=d.get(V);if(ie){let ee=ie[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(C),Object.keys(ie).length===0&&d.delete(V)}i.remove(C)}function T(C){let E=i.get(C);n.deleteTexture(E.__webglTexture);let V=C.source,ie=d.get(V);delete ie[E.__cacheKey],o.memory.textures--}function F(C){let E=C.texture,V=i.get(C),ie=i.get(E);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(V.__webglFramebuffer[ee]))for(let re=0;re<V.__webglFramebuffer[ee].length;re++)n.deleteFramebuffer(V.__webglFramebuffer[ee][re]);else n.deleteFramebuffer(V.__webglFramebuffer[ee]);V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[ee])}else{if(Array.isArray(V.__webglFramebuffer))for(let ee=0;ee<V.__webglFramebuffer.length;ee++)n.deleteFramebuffer(V.__webglFramebuffer[ee]);else n.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ee=0;ee<V.__webglColorRenderbuffer.length;ee++)V.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[ee]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,re=E.length;ee<re;ee++){let Me=i.get(E[ee]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(E[ee])}i.remove(E),i.remove(C)}let k=0;function O(){k=0}function L(){let C=k;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),k+=1,C}function U(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function q(C,E){let V=i.get(C);if(C.isVideoTexture&&It(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){let ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(V,C,E);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+E)}function K(C,E){let V=i.get(C);if(C.version>0&&V.__version!==C.version){me(V,C,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+E)}function $(C,E){let V=i.get(C);if(C.version>0&&V.__version!==C.version){me(V,C,E);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+E)}function Z(C,E){let V=i.get(C);if(C.version>0&&V.__version!==C.version){Ee(V,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+E)}let te={[Ui]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},oe={[Wt]:n.NEAREST,[Ba]:n.NEAREST_MIPMAP_NEAREST,[mo]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[Zh]:n.LINEAR_MIPMAP_NEAREST,[ns]:n.LINEAR_MIPMAP_LINEAR},xe={[bx]:n.NEVER,[Rx]:n.ALWAYS,[Sx]:n.LESS,[Fp]:n.LEQUAL,[Ex]:n.EQUAL,[Ax]:n.GEQUAL,[wx]:n.GREATER,[Tx]:n.NOTEQUAL};function Y(C,E,V){if(V?(n.texParameteri(C,n.TEXTURE_WRAP_S,te[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,te[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,te[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,oe[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,oe[E.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Bn||E.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,S(E.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,S(E.minFilter)),E.minFilter!==Wt&&E.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Wt||E.minFilter!==mo&&E.minFilter!==ns||E.type===Di&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===An&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(C,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function j(C,E){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",R));let ie=E.source,ee=d.get(ie);ee===void 0&&(ee={},d.set(ie,ee));let re=U(E);if(re!==C.__cacheKey){ee[re]===void 0&&(ee[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ee[re].usedTimes++;let Me=ee[C.__cacheKey];Me!==void 0&&(ee[C.__cacheKey].usedTimes--,Me.usedTimes===0&&T(E)),C.__cacheKey=re,C.__webglTexture=ee[re].texture}return V}function me(C,E,V){let ie=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=n.TEXTURE_3D);let ee=j(C,E),re=E.source;t.bindTexture(ie,C.__webglTexture,n.TEXTURE0+V);let Me=i.get(re);if(re.version!==Me.__version||ee===!0){t.activeTexture(n.TEXTURE0+V);let fe=lt.getPrimaries(lt.workingColorSpace),_e=E.colorSpace===wn?null:lt.getPrimaries(E.colorSpace),Ie=E.colorSpace===wn||fe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ke=m(E)&&p(E.image)===!1,Q=x(E.image,Ke,!1,s.maxTextureSize);Q=$e(E,Q);let pt=p(Q)||a,nt=r.convert(E.format,E.colorSpace),Be=r.convert(E.type),we=y(E.internalFormat,nt,Be,E.colorSpace,E.isVideoTexture);Y(ie,E,pt);let ve,Ye=E.mipmaps,dt=a&&E.isVideoTexture!==!0&&we!==Lp,Ut=Me.__version===void 0||ee===!0,je=w(E,Q,pt);if(E.isDepthTexture)we=n.DEPTH_COMPONENT,a?E.type===Di?we=n.DEPTH_COMPONENT32F:E.type===Ji?we=n.DEPTH_COMPONENT24:E.type===Ds?we=n.DEPTH24_STENCIL8:we=n.DEPTH_COMPONENT16:E.type===Di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Fs&&we===n.DEPTH_COMPONENT&&E.type!==$h&&E.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ji,Be=r.convert(E.type)),E.format===vr&&we===n.DEPTH_COMPONENT&&(we=n.DEPTH_STENCIL,E.type!==Ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ds,Be=r.convert(E.type))),Ut&&(dt?t.texStorage2D(n.TEXTURE_2D,1,we,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,we,Q.width,Q.height,0,nt,Be,null));else if(E.isDataTexture)if(Ye.length>0&&pt){dt&&Ut&&t.texStorage2D(n.TEXTURE_2D,je,we,Ye[0].width,Ye[0].height);for(let le=0,I=Ye.length;le<I;le++)ve=Ye[le],dt?t.texSubImage2D(n.TEXTURE_2D,le,0,0,ve.width,ve.height,nt,Be,ve.data):t.texImage2D(n.TEXTURE_2D,le,we,ve.width,ve.height,0,nt,Be,ve.data);E.generateMipmaps=!1}else dt?(Ut&&t.texStorage2D(n.TEXTURE_2D,je,we,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,nt,Be,Q.data)):t.texImage2D(n.TEXTURE_2D,0,we,Q.width,Q.height,0,nt,Be,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){dt&&Ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,we,Ye[0].width,Ye[0].height,Q.depth);for(let le=0,I=Ye.length;le<I;le++)ve=Ye[le],E.format!==Kn?nt!==null?dt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,ve.width,ve.height,Q.depth,nt,ve.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,we,ve.width,ve.height,Q.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,ve.width,ve.height,Q.depth,nt,Be,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,we,ve.width,ve.height,Q.depth,0,nt,Be,ve.data)}else{dt&&Ut&&t.texStorage2D(n.TEXTURE_2D,je,we,Ye[0].width,Ye[0].height);for(let le=0,I=Ye.length;le<I;le++)ve=Ye[le],E.format!==Kn?nt!==null?dt?t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,ve.width,ve.height,nt,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,le,we,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage2D(n.TEXTURE_2D,le,0,0,ve.width,ve.height,nt,Be,ve.data):t.texImage2D(n.TEXTURE_2D,le,we,ve.width,ve.height,0,nt,Be,ve.data)}else if(E.isDataArrayTexture)dt?(Ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,we,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,nt,Be,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,Q.width,Q.height,Q.depth,0,nt,Be,Q.data);else if(E.isData3DTexture)dt?(Ut&&t.texStorage3D(n.TEXTURE_3D,je,we,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,nt,Be,Q.data)):t.texImage3D(n.TEXTURE_3D,0,we,Q.width,Q.height,Q.depth,0,nt,Be,Q.data);else if(E.isFramebufferTexture){if(Ut)if(dt)t.texStorage2D(n.TEXTURE_2D,je,we,Q.width,Q.height);else{let le=Q.width,I=Q.height;for(let ue=0;ue<je;ue++)t.texImage2D(n.TEXTURE_2D,ue,we,le,I,0,nt,Be,null),le>>=1,I>>=1}}else if(Ye.length>0&&pt){dt&&Ut&&t.texStorage2D(n.TEXTURE_2D,je,we,Ye[0].width,Ye[0].height);for(let le=0,I=Ye.length;le<I;le++)ve=Ye[le],dt?t.texSubImage2D(n.TEXTURE_2D,le,0,0,nt,Be,ve):t.texImage2D(n.TEXTURE_2D,le,we,nt,Be,ve);E.generateMipmaps=!1}else dt?(Ut&&t.texStorage2D(n.TEXTURE_2D,je,we,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,nt,Be,Q)):t.texImage2D(n.TEXTURE_2D,0,we,nt,Be,Q);_(E,pt)&&v(ie),Me.__version=re.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ee(C,E,V){if(E.image.length!==6)return;let ie=j(C,E),ee=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);let re=i.get(ee);if(ee.version!==re.__version||ie===!0){t.activeTexture(n.TEXTURE0+V);let Me=lt.getPrimaries(lt.workingColorSpace),fe=E.colorSpace===wn?null:lt.getPrimaries(E.colorSpace),_e=E.colorSpace===wn||Me===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,Ke=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let le=0;le<6;le++)!Ie&&!Ke?Q[le]=x(E.image[le],!1,!0,s.maxCubemapSize):Q[le]=Ke?E.image[le].image:E.image[le],Q[le]=$e(E,Q[le]);let pt=Q[0],nt=p(pt)||a,Be=r.convert(E.format,E.colorSpace),we=r.convert(E.type),ve=y(E.internalFormat,Be,we,E.colorSpace),Ye=a&&E.isVideoTexture!==!0,dt=re.__version===void 0||ie===!0,Ut=w(E,pt,nt);Y(n.TEXTURE_CUBE_MAP,E,nt);let je;if(Ie){Ye&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,ve,pt.width,pt.height);for(let le=0;le<6;le++){je=Q[le].mipmaps;for(let I=0;I<je.length;I++){let ue=je[I];E.format!==Kn?Be!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,0,0,ue.width,ue.height,Be,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,ve,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,0,0,ue.width,ue.height,Be,we,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,ve,ue.width,ue.height,0,Be,we,ue.data)}}}else{je=E.mipmaps,Ye&&dt&&(je.length>0&&Ut++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,ve,Q[0].width,Q[0].height));for(let le=0;le<6;le++)if(Ke){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Q[le].width,Q[le].height,Be,we,Q[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ve,Q[le].width,Q[le].height,0,Be,we,Q[le].data);for(let I=0;I<je.length;I++){let de=je[I].image[le].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,0,0,de.width,de.height,Be,we,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,ve,de.width,de.height,0,Be,we,de.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Be,we,Q[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ve,Be,we,Q[le]);for(let I=0;I<je.length;I++){let ue=je[I];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,0,0,Be,we,ue.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,ve,Be,we,ue.image[le])}}}_(E,nt)&&v(n.TEXTURE_CUBE_MAP),re.__version=ee.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Se(C,E,V,ie,ee,re){let Me=r.convert(V.format,V.colorSpace),fe=r.convert(V.type),_e=y(V.internalFormat,Me,fe,V.colorSpace);if(!i.get(E).__hasExternalTextures){let Ke=Math.max(1,E.width>>re),Q=Math.max(1,E.height>>re);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,re,_e,Ke,Q,E.depth,0,Me,fe,null):t.texImage2D(ee,re,_e,Ke,Q,0,Me,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ye(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ee,i.get(V).__webglTexture,0,Ge(E)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ee,i.get(V).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(C,E,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let ie=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||ye(E)){let ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Di?ie=n.DEPTH_COMPONENT32F:ee.type===Ji&&(ie=n.DEPTH_COMPONENT24));let re=Ge(E);ye(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,ie,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ie,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){let ie=Ge(E);V&&ye(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,E.width,E.height):ye(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{let ie=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<ie.length;ee++){let re=ie[ee],Me=r.convert(re.format,re.colorSpace),fe=r.convert(re.type),_e=y(re.internalFormat,Me,fe,re.colorSpace),Ie=Ge(E);V&&ye(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,_e,E.width,E.height):ye(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,_e,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,_e,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);let ie=i.get(E.depthTexture).__webglTexture,ee=Ge(E);if(E.depthTexture.format===Fs)ye(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(E.depthTexture.format===vr)ye(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ue(C){let E=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");qe(E.__webglFramebuffer,C)}else if(V){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]=n.createRenderbuffer(),We(E.__webglDepthbuffer[ie],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),We(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(C,E,V){let ie=i.get(C);E!==void 0&&Se(ie.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Ue(C)}function H(C){let E=C.texture,V=i.get(C),ie=i.get(E);C.addEventListener("dispose",D),C.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=E.version,o.memory.textures++);let ee=C.isWebGLCubeRenderTarget===!0,re=C.isWebGLMultipleRenderTargets===!0,Me=p(C)||a;if(ee){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let _e=0;_e<E.mipmaps.length;_e++)V.__webglFramebuffer[fe][_e]=n.createFramebuffer()}else V.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)V.__webglFramebuffer[fe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(re)if(s.drawBuffers){let fe=C.texture;for(let _e=0,Ie=fe.length;_e<Ie;_e++){let Ke=i.get(fe[_e]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ye(C)===!1){let fe=re?E:[E];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let _e=0;_e<fe.length;_e++){let Ie=fe[_e];V.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[_e]);let Ke=r.convert(Ie.format,Ie.colorSpace),Q=r.convert(Ie.type),pt=y(Ie.internalFormat,Ke,Q,Ie.colorSpace,C.isXRRenderTarget===!0),nt=Ge(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,pt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,V.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),We(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Y(n.TEXTURE_CUBE_MAP,E,Me);for(let fe=0;fe<6;fe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Se(V.__webglFramebuffer[fe][_e],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else Se(V.__webglFramebuffer[fe],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(E,Me)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){let fe=C.texture;for(let _e=0,Ie=fe.length;_e<Ie;_e++){let Ke=fe[_e],Q=i.get(Ke);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Y(n.TEXTURE_2D,Ke,Me),Se(V.__webglFramebuffer,C,Ke,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),_(Ke,Me)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?fe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ie.__webglTexture),Y(fe,E,Me),a&&E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Se(V.__webglFramebuffer[_e],C,E,n.COLOR_ATTACHMENT0,fe,_e);else Se(V.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,fe,0);_(E,Me)&&v(fe),t.unbindTexture()}C.depthBuffer&&Ue(C)}function xn(C){let E=p(C)||a,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0,ee=V.length;ie<ee;ie++){let re=V[ie];if(_(re,E)){let Me=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(re).__webglTexture;t.bindTexture(Me,fe),v(Me),t.unbindTexture()}}}function Ae(C){if(a&&C.samples>0&&ye(C)===!1){let E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,ie=C.height,ee=n.COLOR_BUFFER_BIT,re=[],Me=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(C),_e=C.isWebGLMultipleRenderTargets===!0;if(_e)for(let Ie=0;Ie<E.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){re.push(n.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&re.push(Me);let Ke=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Ke===!1&&(C.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Ie]),Ke===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),_e){let Q=i.get(E[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,V,ie,0,0,V,ie,ee,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Ie=0;Ie<E.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Ie]);let Ke=i.get(E[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Ge(C){return Math.min(s.maxSamples,C.samples)}function ye(C){let E=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function It(C){let E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function $e(C,E){let V=C.colorSpace,ie=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===rh||V!==Yt&&V!==wn&&(lt.getTransfer(V)===xt?a===!1?e.has("EXT_sRGB")===!0&&ie===Kn?(C.format=rh,C.minFilter=bn,C.generateMipmaps=!1):E=qa.sRGBToLinear(E):(ie!==Kn||ee!==ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=$,this.setTextureCube=Z,this.rebindTextures=at,this.setupRenderTarget=H,this.updateRenderTargetMipmap=xn,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ye}function Pb(n,e,t){let i=t.isWebGL2;function s(r,o=wn){let a,l=lt.getTransfer(o);if(r===ts)return n.UNSIGNED_BYTE;if(r===Tp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Ap)return n.UNSIGNED_SHORT_5_5_5_1;if(r===hx)return n.BYTE;if(r===ux)return n.SHORT;if(r===$h)return n.UNSIGNED_SHORT;if(r===wp)return n.INT;if(r===Ji)return n.UNSIGNED_INT;if(r===Di)return n.FLOAT;if(r===An)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===dx)return n.ALPHA;if(r===Kn)return n.RGBA;if(r===fx)return n.LUMINANCE;if(r===px)return n.LUMINANCE_ALPHA;if(r===Fs)return n.DEPTH_COMPONENT;if(r===vr)return n.DEPTH_STENCIL;if(r===rh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===mx)return n.RED;if(r===Rp)return n.RED_INTEGER;if(r===gx)return n.RG;if(r===Cp)return n.RG_INTEGER;if(r===Pp)return n.RGBA_INTEGER;if(r===yc||r===Mc||r===bc||r===Sc)if(l===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===yc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===yc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gd||r===Vd||r===Wd||r===Xd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Gd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===qd||r===Yd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===qd)return l===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Yd)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zd||r===$d||r===Kd||r===Jd||r===jd||r===Qd||r===ef||r===tf||r===nf||r===sf||r===rf||r===of||r===af||r===lf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Zd)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$d)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kd)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jd)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jd)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qd)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ef)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===tf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===of)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===af)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ec||r===cf||r===hf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ec)return l===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xx||r===uf||r===df||r===ff)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ec)return a.COMPRESSED_RED_RGTC1_EXT;if(r===uf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===df)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ff)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ds?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var xh=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},zt=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lb={type:"move"},vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},_h=class extends is{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=t.getContextAttributes(),p=null,m=null,_=[],v=[],y=new ne,w=null,S=new qt;S.layers.enable(1),S.viewport=new _t;let R=new qt;R.layers.enable(2),R.viewport=new _t;let D=[S,R],M=new xh;M.layers.enable(1),M.layers.enable(2);let T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=_[Y];return j===void 0&&(j=new vo,_[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=_[Y];return j===void 0&&(j=new vo,_[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=_[Y];return j===void 0&&(j=new vo,_[Y]=j),j.getHandSpace()};function k(Y){let j=v.indexOf(Y.inputSource);if(j===-1)return;let me=_[j];me!==void 0&&(me.update(Y.inputSource,Y.frame,c||o),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",L);for(let Y=0;Y<_.length;Y++){let j=v[Y];j!==null&&(v[Y]=null,_[Y].disconnect(j))}T=null,F=null,e.setRenderTarget(p),f=null,d=null,u=null,s=null,m=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",O),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new an(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:ts,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let j=null,me=null,Ee=null;x.depth&&(Ee=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=x.stencil?vr:Fs,me=x.stencil?Ds:Ji);let Se={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new an(d.textureWidth,d.textureHeight,{format:Kn,type:ts,depthTexture:new Qa(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let We=e.properties.get(m);We.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(Y){for(let j=0;j<Y.removed.length;j++){let me=Y.removed[j],Ee=v.indexOf(me);Ee>=0&&(v[Ee]=null,_[Ee].disconnect(me))}for(let j=0;j<Y.added.length;j++){let me=Y.added[j],Ee=v.indexOf(me);if(Ee===-1){for(let We=0;We<_.length;We++)if(We>=v.length){v.push(me),Ee=We;break}else if(v[We]===null){v[We]=me,Ee=We;break}if(Ee===-1)break}let Se=_[Ee];Se&&Se.connect(me)}}let U=new P,q=new P;function K(Y,j,me){U.setFromMatrixPosition(j.matrixWorld),q.setFromMatrixPosition(me.matrixWorld);let Ee=U.distanceTo(q),Se=j.projectionMatrix.elements,We=me.projectionMatrix.elements,qe=Se[14]/(Se[10]-1),Ue=Se[14]/(Se[10]+1),at=(Se[9]+1)/Se[5],H=(Se[9]-1)/Se[5],xn=(Se[8]-1)/Se[0],Ae=(We[8]+1)/We[0],Ge=qe*xn,ye=qe*Ae,It=Ee/(-xn+Ae),$e=It*-xn;j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($e),Y.translateZ(It),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let C=qe+It,E=Ue+It,V=Ge-$e,ie=ye+(Ee-$e),ee=at*Ue/E*C,re=H*Ue/E*C;Y.projectionMatrix.makePerspective(V,ie,ee,re,C,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function $(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;M.near=R.near=S.near=Y.near,M.far=R.far=S.far=Y.far,(T!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,F=M.far);let j=Y.parent,me=M.cameras;$(M,j);for(let Ee=0;Ee<me.length;Ee++)$(me[Ee],j);me.length===2?K(M,S,R):M.projectionMatrix.copy(S.projectionMatrix),Z(Y,M,j)};function Z(Y,j,me){me===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Mr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)};let te=null;function oe(Y,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let me=h.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let Ee=!1;me.length!==M.cameras.length&&(M.cameras.length=0,Ee=!0);for(let Se=0;Se<me.length;Se++){let We=me[Se],qe=null;if(f!==null)qe=f.getViewport(We);else{let at=u.getViewSubImage(d,We);qe=at.viewport,Se===0&&(e.setRenderTargetTextures(m,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(m))}let Ue=D[Se];Ue===void 0&&(Ue=new qt,Ue.layers.enable(Se),Ue.viewport=new _t,D[Se]=Ue),Ue.matrix.fromArray(We.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(We.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(qe.x,qe.y,qe.width,qe.height),Se===0&&(M.matrix.copy(Ue.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ee===!0&&M.cameras.push(Ue)}}for(let me=0;me<_.length;me++){let Ee=v[me],Se=_[me];Ee!==null&&Se!==void 0&&Se.update(Ee,j,c||o)}te&&te(Y,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let xe=new kp;xe.setAnimationLoop(oe),this.setAnimationLoop=function(Y){te=Y},this.dispose=function(){}}};function Ib(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Op(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,_,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Gt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Gt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Db(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){let y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=s[_.id];y===void 0&&(g(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",p));let w=v.program;i.updateUBOMapping(_,w);let S=e.render.frame;r[_.id]!==S&&(d(_),r[_.id]=S)}function h(_){let v=u();_.__bindingPointIndex=v;let y=n.createBuffer(),w=_.__size,S=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],y=_.uniforms,w=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let S=0,R=y.length;S<R;S++){let D=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,T=D.length;M<T;M++){let F=D[M];if(f(F,S,M,w)===!0){let k=F.__offset,O=Array.isArray(F.value)?F.value:[F.value],L=0;for(let U=0;U<O.length;U++){let q=O[U],K=x(q);typeof q=="number"||typeof q=="boolean"?(F.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,k+L,F.__data)):q.isMatrix3?(F.__data[0]=q.elements[0],F.__data[1]=q.elements[1],F.__data[2]=q.elements[2],F.__data[3]=0,F.__data[4]=q.elements[3],F.__data[5]=q.elements[4],F.__data[6]=q.elements[5],F.__data[7]=0,F.__data[8]=q.elements[6],F.__data[9]=q.elements[7],F.__data[10]=q.elements[8],F.__data[11]=0):(q.toArray(F.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,v,y,w){let S=_.value,R=v+"_"+y;if(w[R]===void 0)return typeof S=="number"||typeof S=="boolean"?w[R]=S:w[R]=S.clone(),!0;{let D=w[R];if(typeof S=="number"||typeof S=="boolean"){if(D!==S)return w[R]=S,!0}else if(D.equals(S)===!1)return D.copy(S),!0}return!1}function g(_){let v=_.uniforms,y=0,w=16;for(let R=0,D=v.length;R<D;R++){let M=Array.isArray(v[R])?v[R]:[v[R]];for(let T=0,F=M.length;T<F;T++){let k=M[T],O=Array.isArray(k.value)?k.value:[k.value];for(let L=0,U=O.length;L<U;L++){let q=O[L],K=x(q),$=y%w;$!==0&&w-$<K.boundary&&(y+=w-$),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=K.storage}}}let S=y%w;return S>0&&(y+=w-S),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){let v=_.target;v.removeEventListener("dispose",p);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Co=class{constructor(e={}){let{canvas:t=Vx(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=es,this.toneMappingExposure=1;let v=this,y=!1,w=0,S=0,R=null,D=-1,M=null,T=new _t,F=new _t,k=null,O=new se(0),L=0,U=t.width,q=t.height,K=1,$=null,Z=null,te=new _t(0,0,U,q),oe=new _t(0,0,U,q),xe=!1,Y=new Ro,j=!1,me=!1,Ee=null,Se=new De,We=new ne,qe=new P,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function at(){return R===null?K:1}let H=i;function xn(A,N){for(let W=0;W<A.length;W++){let X=A[W],G=t.getContext(X,N);if(G!==null)return G}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kh}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ue,!1),H===null){let N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),H=xn(N,A),H===null)throw xn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ae,Ge,ye,It,$e,C,E,V,ie,ee,re,Me,fe,_e,Ie,Ke,Q,pt,nt,Be,we,ve,Ye,dt;function Ut(){Ae=new jy(H),Ge=new qy(H,Ae,e),Ae.init(Ge),ve=new Pb(H,Ae,Ge),ye=new Rb(H,Ae,Ge),It=new tM(H),$e=new gb,C=new Cb(H,Ae,ye,$e,Ge,ve,It),E=new Zy(v),V=new Jy(v),ie=new c_(H,Ge),Ye=new Wy(H,Ae,ie,Ge),ee=new Qy(H,ie,It,Ye),re=new rM(H,ee,ie,It),nt=new sM(H,Ge,C),Ke=new Yy($e),Me=new mb(v,E,V,Ae,Ge,Ye,Ke),fe=new Ib(v,$e),_e=new _b,Ie=new Eb(Ae,Ge),pt=new Vy(v,E,V,ye,re,d,l),Q=new Ab(v,re,Ge),dt=new Db(H,It,Ge,ye),Be=new Xy(H,Ae,It,Ge),we=new eM(H,Ae,It,Ge),It.programs=Me.programs,v.capabilities=Ge,v.extensions=Ae,v.properties=$e,v.renderLists=_e,v.shadowMap=Q,v.state=ye,v.info=It}Ut();let je=new _h(v,H);this.xr=je,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=Ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(U,q,!1))},this.getSize=function(A){return A.set(U,q)},this.setSize=function(A,N,W=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,q=N,t.width=Math.floor(A*K),t.height=Math.floor(N*K),W===!0&&(t.style.width=A+"px",t.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(U*K,q*K).floor()},this.setDrawingBufferSize=function(A,N,W){U=A,q=N,K=W,t.width=Math.floor(A*W),t.height=Math.floor(N*W),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,N,W,X){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,N,W,X),ye.viewport(T.copy(te).multiplyScalar(K).floor())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,N,W,X){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,N,W,X),ye.scissor(F.copy(oe).multiplyScalar(K).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(A){ye.setScissorTest(xe=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(A=!0,N=!0,W=!0){let X=0;if(A){let G=!1;if(R!==null){let ge=R.texture.format;G=ge===Pp||ge===Cp||ge===Rp}if(G){let ge=R.texture.type,be=ge===ts||ge===Ji||ge===$h||ge===Ds||ge===Tp||ge===Ap,Pe=pt.getClearColor(),Oe=pt.getClearAlpha(),Je=Pe.r,Ve=Pe.g,Xe=Pe.b;be?(f[0]=Je,f[1]=Ve,f[2]=Xe,f[3]=Oe,H.clearBufferuiv(H.COLOR,0,f)):(g[0]=Je,g[1]=Ve,g[2]=Xe,g[3]=Oe,H.clearBufferiv(H.COLOR,0,g))}else X|=H.COLOR_BUFFER_BIT}N&&(X|=H.DEPTH_BUFFER_BIT),W&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),_e.dispose(),Ie.dispose(),$e.dispose(),E.dispose(),V.dispose(),re.dispose(),Ye.dispose(),dt.dispose(),Me.dispose(),je.dispose(),je.removeEventListener("sessionstart",_n),je.removeEventListener("sessionend",St),Ee&&(Ee.dispose(),Ee=null),vn.stop()};function le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let A=It.autoReset,N=Q.enabled,W=Q.autoUpdate,X=Q.needsUpdate,G=Q.type;Ut(),It.autoReset=A,Q.enabled=N,Q.autoUpdate=W,Q.needsUpdate=X,Q.type=G}function ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function de(A){let N=A.target;N.removeEventListener("dispose",de),Ne(N)}function Ne(A){Re(A),$e.remove(A)}function Re(A){let N=$e.get(A).programs;N!==void 0&&(N.forEach(function(W){Me.releaseProgram(W)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,W,X,G,ge){N===null&&(N=Ue);let be=G.isMesh&&G.matrixWorld.determinant()<0,Pe=Dg(A,N,W,X,G);ye.setMaterial(X,be);let Oe=W.index,Je=1;if(X.wireframe===!0){if(Oe=ee.getWireframeAttribute(W),Oe===void 0)return;Je=2}let Ve=W.drawRange,Xe=W.attributes.position,kt=Ve.start*Je,zn=(Ve.start+Ve.count)*Je;ge!==null&&(kt=Math.max(kt,ge.start*Je),zn=Math.min(zn,(ge.start+ge.count)*Je)),Oe!==null?(kt=Math.max(kt,0),zn=Math.min(zn,Oe.count)):Xe!=null&&(kt=Math.max(kt,0),zn=Math.min(zn,Xe.count));let en=zn-kt;if(en<0||en===1/0)return;Ye.setup(G,X,Pe,W,Oe);let Ei,Dt=Be;if(Oe!==null&&(Ei=ie.get(Oe),Dt=we,Dt.setIndex(Ei)),G.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*at()),Dt.setMode(H.LINES)):Dt.setMode(H.TRIANGLES);else if(G.isLine){let Qe=X.linewidth;Qe===void 0&&(Qe=1),ye.setLineWidth(Qe*at()),G.isLineSegments?Dt.setMode(H.LINES):G.isLineLoop?Dt.setMode(H.LINE_LOOP):Dt.setMode(H.LINE_STRIP)}else G.isPoints?Dt.setMode(H.POINTS):G.isSprite&&Dt.setMode(H.TRIANGLES);if(G.isBatchedMesh)Dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Dt.renderInstances(kt,en,G.count);else if(W.isInstancedBufferGeometry){let Qe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,gc=Math.min(W.instanceCount,Qe);Dt.renderInstances(kt,en,gc)}else Dt.render(kt,en)};function Mt(A,N,W){A.transparent===!0&&A.side===Tt&&A.forceSinglePass===!1?(A.side=Gt,A.needsUpdate=!0,ca(A,N,W),A.side=_i,A.needsUpdate=!0,ca(A,N,W),A.side=Tt):ca(A,N,W)}this.compile=function(A,N,W=null){W===null&&(W=A),p=Ie.get(W),p.init(),_.push(p),W.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==W&&A.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(v._useLegacyLights);let X=new Set;return A.traverse(function(G){let ge=G.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){let Pe=ge[be];Mt(Pe,W,G),X.add(Pe)}else Mt(ge,W,G),X.add(ge)}),_.pop(),p=null,X},this.compileAsync=function(A,N,W=null){let X=this.compile(A,N,W);return new Promise(G=>{function ge(){if(X.forEach(function(be){$e.get(be).currentProgram.isReady()&&X.delete(be)}),X.size===0){G(A);return}setTimeout(ge,10)}Ae.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let bt=null;function Qt(A){bt&&bt(A)}function _n(){vn.stop()}function St(){vn.start()}let vn=new kp;vn.setAnimationLoop(Qt),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(A){bt=A,je.setAnimationLoop(A),A===null?vn.stop():vn.start()},je.addEventListener("sessionstart",_n),je.addEventListener("sessionend",St),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(N),N=je.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,N,R),p=Ie.get(A,_.length),p.init(),_.push(p),Se.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(Se),me=this.localClippingEnabled,j=Ke.init(this.clippingPlanes,me),x=_e.get(A,m.length),x.init(),m.push(x),pi(A,N,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort($,Z),this.info.render.frame++,j===!0&&Ke.beginShadows();let W=p.state.shadowsArray;if(Q.render(W,A,N),j===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),pt.render(x,A),p.setupLights(v._useLegacyLights),N.isArrayCamera){let X=N.cameras;for(let G=0,ge=X.length;G<ge;G++){let be=X[G];Pd(x,A,be,be.viewport)}}else Pd(x,A,N);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,N),Ye.resetDefaultState(),D=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function pi(A,N,W,X){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){X&&qe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Se);let be=re.update(A),Pe=A.material;Pe.visible&&x.push(A,be,Pe,W,qe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){let be=re.update(A),Pe=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qe.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),qe.copy(be.boundingSphere.center)),qe.applyMatrix4(A.matrixWorld).applyMatrix4(Se)),Array.isArray(Pe)){let Oe=be.groups;for(let Je=0,Ve=Oe.length;Je<Ve;Je++){let Xe=Oe[Je],kt=Pe[Xe.materialIndex];kt&&kt.visible&&x.push(A,be,kt,W,qe.z,Xe)}}else Pe.visible&&x.push(A,be,Pe,W,qe.z,null)}}let ge=A.children;for(let be=0,Pe=ge.length;be<Pe;be++)pi(ge[be],N,W,X)}function Pd(A,N,W,X){let G=A.opaque,ge=A.transmissive,be=A.transparent;p.setupLightsView(W),j===!0&&Ke.setGlobalState(v.clippingPlanes,W),ge.length>0&&Ig(G,ge,N,W),X&&ye.viewport(T.copy(X)),G.length>0&&la(G,N,W),ge.length>0&&la(ge,N,W),be.length>0&&la(be,N,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ig(A,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let ge=Ge.isWebGL2;Ee===null&&(Ee=new an(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?An:ts,minFilter:ns,samples:ge?4:0})),v.getDrawingBufferSize(We),ge?Ee.setSize(We.x,We.y):Ee.setSize(Xa(We.x),Xa(We.y));let be=v.getRenderTarget();v.setRenderTarget(Ee),v.getClearColor(O),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let Pe=v.toneMapping;v.toneMapping=es,la(A,W,X),C.updateMultisampleRenderTarget(Ee),C.updateRenderTargetMipmap(Ee);let Oe=!1;for(let Je=0,Ve=N.length;Je<Ve;Je++){let Xe=N[Je],kt=Xe.object,zn=Xe.geometry,en=Xe.material,Ei=Xe.group;if(en.side===Tt&&kt.layers.test(X.layers)){let Dt=en.side;en.side=Gt,en.needsUpdate=!0,Ld(kt,W,X,zn,en,Ei),en.side=Dt,en.needsUpdate=!0,Oe=!0}}Oe===!0&&(C.updateMultisampleRenderTarget(Ee),C.updateRenderTargetMipmap(Ee)),v.setRenderTarget(be),v.setClearColor(O,L),v.toneMapping=Pe}function la(A,N,W){let X=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ge=A.length;G<ge;G++){let be=A[G],Pe=be.object,Oe=be.geometry,Je=X===null?be.material:X,Ve=be.group;Pe.layers.test(W.layers)&&Ld(Pe,N,W,Oe,Je,Ve)}}function Ld(A,N,W,X,G,ge){A.onBeforeRender(v,N,W,X,G,ge),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(v,N,W,X,A,ge),G.transparent===!0&&G.side===Tt&&G.forceSinglePass===!1?(G.side=Gt,G.needsUpdate=!0,v.renderBufferDirect(W,N,X,G,A,ge),G.side=_i,G.needsUpdate=!0,v.renderBufferDirect(W,N,X,G,A,ge),G.side=Tt):v.renderBufferDirect(W,N,X,G,A,ge),A.onAfterRender(v,N,W,X,G,ge)}function ca(A,N,W){N.isScene!==!0&&(N=Ue);let X=$e.get(A),G=p.state.lights,ge=p.state.shadowsArray,be=G.state.version,Pe=Me.getParameters(A,G.state,ge,N,W),Oe=Me.getProgramCacheKey(Pe),Je=X.programs;X.environment=A.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(A.isMeshStandardMaterial?V:E).get(A.envMap||X.environment),Je===void 0&&(A.addEventListener("dispose",de),Je=new Map,X.programs=Je);let Ve=Je.get(Oe);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===be)return Dd(A,Pe),Ve}else Pe.uniforms=Me.getUniforms(A),A.onBuild(W,Pe,v),A.onBeforeCompile(Pe,v),Ve=Me.acquireProgram(Pe,Oe),Je.set(Oe,Ve),X.uniforms=Pe.uniforms;let Xe=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Ke.uniform),Dd(A,Pe),X.needsLights=Ug(A),X.lightsStateVersion=be,X.needsLights&&(Xe.ambientLightColor.value=G.state.ambient,Xe.lightProbe.value=G.state.probe,Xe.directionalLights.value=G.state.directional,Xe.directionalLightShadows.value=G.state.directionalShadow,Xe.spotLights.value=G.state.spot,Xe.spotLightShadows.value=G.state.spotShadow,Xe.rectAreaLights.value=G.state.rectArea,Xe.ltc_1.value=G.state.rectAreaLTC1,Xe.ltc_2.value=G.state.rectAreaLTC2,Xe.pointLights.value=G.state.point,Xe.pointLightShadows.value=G.state.pointShadow,Xe.hemisphereLights.value=G.state.hemi,Xe.directionalShadowMap.value=G.state.directionalShadowMap,Xe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Xe.spotShadowMap.value=G.state.spotShadowMap,Xe.spotLightMatrix.value=G.state.spotLightMatrix,Xe.spotLightMap.value=G.state.spotLightMap,Xe.pointShadowMap.value=G.state.pointShadowMap,Xe.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function Id(A){if(A.uniformsList===null){let N=A.currentProgram.getUniforms();A.uniformsList=gr.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function Dd(A,N){let W=$e.get(A);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Dg(A,N,W,X,G){N.isScene!==!0&&(N=Ue),C.resetTextureUnits();let ge=N.fog,be=X.isMeshStandardMaterial?N.environment:null,Pe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Yt,Oe=(X.isMeshStandardMaterial?V:E).get(X.envMap||be),Je=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Xe=!!W.morphAttributes.position,kt=!!W.morphAttributes.normal,zn=!!W.morphAttributes.color,en=es;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(en=v.toneMapping);let Ei=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Dt=Ei!==void 0?Ei.length:0,Qe=$e.get(X),gc=p.state.lights;if(j===!0&&(me===!0||A!==M)){let Zn=A===M&&X.id===D;Ke.setState(X,A,Zn)}let Nt=!1;X.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==gc.state.version||Qe.outputColorSpace!==Pe||G.isBatchedMesh&&Qe.batching===!1||!G.isBatchedMesh&&Qe.batching===!0||G.isInstancedMesh&&Qe.instancing===!1||!G.isInstancedMesh&&Qe.instancing===!0||G.isSkinnedMesh&&Qe.skinning===!1||!G.isSkinnedMesh&&Qe.skinning===!0||G.isInstancedMesh&&Qe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Qe.instancingColor===!1&&G.instanceColor!==null||Qe.envMap!==Oe||X.fog===!0&&Qe.fog!==ge||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ke.numPlanes||Qe.numIntersection!==Ke.numIntersection)||Qe.vertexAlphas!==Je||Qe.vertexTangents!==Ve||Qe.morphTargets!==Xe||Qe.morphNormals!==kt||Qe.morphColors!==zn||Qe.toneMapping!==en||Ge.isWebGL2===!0&&Qe.morphTargetsCount!==Dt)&&(Nt=!0):(Nt=!0,Qe.__version=X.version);let Es=Qe.currentProgram;Nt===!0&&(Es=ca(X,N,G));let Fd=!1,oo=!1,xc=!1,un=Es.getUniforms(),ws=Qe.uniforms;if(ye.useProgram(Es.program)&&(Fd=!0,oo=!0,xc=!0),X.id!==D&&(D=X.id,oo=!0),Fd||M!==A){un.setValue(H,"projectionMatrix",A.projectionMatrix),un.setValue(H,"viewMatrix",A.matrixWorldInverse);let Zn=un.map.cameraPosition;Zn!==void 0&&Zn.setValue(H,qe.setFromMatrixPosition(A.matrixWorld)),Ge.logarithmicDepthBuffer&&un.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&un.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,oo=!0,xc=!0)}if(G.isSkinnedMesh){un.setOptional(H,G,"bindMatrix"),un.setOptional(H,G,"bindMatrixInverse");let Zn=G.skeleton;Zn&&(Ge.floatVertexTextures?(Zn.boneTexture===null&&Zn.computeBoneTexture(),un.setValue(H,"boneTexture",Zn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(un.setOptional(H,G,"batchingTexture"),un.setValue(H,"batchingTexture",G._matricesTexture,C));let _c=W.morphAttributes;if((_c.position!==void 0||_c.normal!==void 0||_c.color!==void 0&&Ge.isWebGL2===!0)&&nt.update(G,W,Es),(oo||Qe.receiveShadow!==G.receiveShadow)&&(Qe.receiveShadow=G.receiveShadow,un.setValue(H,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ws.envMap.value=Oe,ws.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),oo&&(un.setValue(H,"toneMappingExposure",v.toneMappingExposure),Qe.needsLights&&Fg(ws,xc),ge&&X.fog===!0&&fe.refreshFogUniforms(ws,ge),fe.refreshMaterialUniforms(ws,X,K,q,Ee),gr.upload(H,Id(Qe),ws,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(gr.upload(H,Id(Qe),ws,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&un.setValue(H,"center",G.center),un.setValue(H,"modelViewMatrix",G.modelViewMatrix),un.setValue(H,"normalMatrix",G.normalMatrix),un.setValue(H,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Zn=X.uniformsGroups;for(let vc=0,Ng=Zn.length;vc<Ng;vc++)if(Ge.isWebGL2){let Ud=Zn[vc];dt.update(Ud,Es),dt.bind(Ud,Es)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Es}function Fg(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function Ug(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,N,W){$e.get(A.texture).__webglTexture=N,$e.get(A.depthTexture).__webglTexture=W;let X=$e.get(A);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,N){let W=$e.get(A);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,W=0){R=A,w=N,S=W;let X=!0,G=null,ge=!1,be=!1;if(A){let Oe=$e.get(A);Oe.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):Oe.__webglFramebuffer===void 0?C.setupRenderTarget(A):Oe.__hasExternalTextures&&C.rebindTextures(A,$e.get(A.texture).__webglTexture,$e.get(A.depthTexture).__webglTexture);let Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(be=!0);let Ve=$e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[N])?G=Ve[N][W]:G=Ve[N],ge=!0):Ge.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?G=$e.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?G=Ve[W]:G=Ve,T.copy(A.viewport),F.copy(A.scissor),k=A.scissorTest}else T.copy(te).multiplyScalar(K).floor(),F.copy(oe).multiplyScalar(K).floor(),k=xe;if(ye.bindFramebuffer(H.FRAMEBUFFER,G)&&Ge.drawBuffers&&X&&ye.drawBuffers(A,G),ye.viewport(T),ye.scissor(F),ye.setScissorTest(k),ge){let Oe=$e.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+N,Oe.__webglTexture,W)}else if(be){let Oe=$e.get(A.texture),Je=N||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.__webglTexture,W||0,Je)}D=-1},this.readRenderTargetPixels=function(A,N,W,X,G,ge,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){ye.bindFramebuffer(H.FRAMEBUFFER,Pe);try{let Oe=A.texture,Je=Oe.format,Ve=Oe.type;if(Je!==Kn&&ve.convert(Je)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xe=Ve===An&&(Ae.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Ve!==ts&&ve.convert(Ve)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Di&&(Ge.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-X&&W>=0&&W<=A.height-G&&H.readPixels(N,W,X,G,ve.convert(Je),ve.convert(Ve),ge)}finally{let Oe=R!==null?$e.get(R).__webglFramebuffer:null;ye.bindFramebuffer(H.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(A,N,W=0){let X=Math.pow(2,-W),G=Math.floor(N.image.width*X),ge=Math.floor(N.image.height*X);C.setTexture2D(N,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,A.x,A.y,G,ge),ye.unbindTexture()},this.copyTextureToTexture=function(A,N,W,X=0){let G=N.image.width,ge=N.image.height,be=ve.convert(W.format),Pe=ve.convert(W.type);C.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),N.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,A.x,A.y,G,ge,be,Pe,N.image.data):N.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,A.x,A.y,N.mipmaps[0].width,N.mipmaps[0].height,be,N.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,A.x,A.y,be,Pe,N.image),X===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(A,N,W,X,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ge=A.max.x-A.min.x+1,be=A.max.y-A.min.y+1,Pe=A.max.z-A.min.z+1,Oe=ve.convert(X.format),Je=ve.convert(X.type),Ve;if(X.isData3DTexture)C.setTexture3D(X,0),Ve=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)C.setTexture2DArray(X,0),Ve=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);let Xe=H.getParameter(H.UNPACK_ROW_LENGTH),kt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),zn=H.getParameter(H.UNPACK_SKIP_PIXELS),en=H.getParameter(H.UNPACK_SKIP_ROWS),Ei=H.getParameter(H.UNPACK_SKIP_IMAGES),Dt=W.isCompressedTexture?W.mipmaps[G]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Dt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Dt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,A.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,A.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,A.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(Ve,G,N.x,N.y,N.z,ge,be,Pe,Oe,Je,Dt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ve,G,N.x,N.y,N.z,ge,be,Pe,Oe,Dt.data)):H.texSubImage3D(Ve,G,N.x,N.y,N.z,ge,be,Pe,Oe,Je,Dt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Xe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,kt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,zn),H.pixelStorei(H.UNPACK_SKIP_ROWS,en),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ei),G===0&&X.generateMipmaps&&H.generateMipmap(Ve),ye.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),ye.unbindTexture()},this.resetState=function(){w=0,S=0,R=null,ye.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Jh?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Rl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?Us:Dp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Us?ct:Yt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},vh=class extends Co{};vh.prototype.isWebGL1Renderer=!0;var el=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new se(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Tr=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Po=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new P,Lo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var ip=new P,sp=new _t,rp=new _t,Fb=new P,op=new De,Ia=new P,Zc=new Hn,ap=new De,$c=new br,Ni=class extends ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hd,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ia),this.boundingBox.expandByPoint(Ia)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ia),this.boundingSphere.expandByPoint(Ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zc.copy(this.boundingSphere),Zc.applyMatrix4(s),e.ray.intersectsSphere(Zc)!==!1&&(ap.copy(s).invert(),$c.copy(e.ray).applyMatrix4(ap),!(this.boundingBox!==null&&$c.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$c)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;sp.fromBufferAttribute(s.attributes.skinIndex,e),rp.fromBufferAttribute(s.attributes.skinWeight,e),ip.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=rp.getComponent(r);if(o!==0){let a=sp.getComponent(r);op.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Fb.copy(ip).applyMatrix4(op),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},zs=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},yh=class extends on{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Wt,h=Wt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lp=new De,Ub=new De,Ar=class n{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new De;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Ub;lp.multiplyMatrices(a,t[r]),lp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new yh(t,e,e,Kn,Di);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new zs),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},ci=class extends ht{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ur=new De,cp=new De,Da=[],hp=new Rn,Nb=new De,uo=new ae,fo=new Hn,zi=class extends ae{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ci(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Nb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ur),hp.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union(hp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ur),fo.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(uo.geometry=this.geometry,uo.material=this.material,uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(i),e.ray.intersectsSphere(fo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ur),cp.multiplyMatrices(i,ur),uo.matrixWorld=cp,uo.raycast(e,Da);for(let o=0,a=Da.length;o<a;o++){let l=Da[o];l.instanceId=r,l.object=this,t.push(l)}Da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ci(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Io=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},up=new P,dp=new P,fp=new De,Kc=new br,Fa=new Hn,Rr=class extends vt{constructor(e=new wt,t=new Io){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)up.fromBufferAttribute(t,s-1),dp.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=up.distanceTo(dp);e.setAttribute("lineDistance",new He(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;fp.copy(s).invert(),Kc.copy(e.ray).applyMatrix4(fp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let m=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let v=m,y=_-1;v<y;v+=f){let w=g.getX(v),S=g.getX(v+1);if(c.fromBufferAttribute(p,w),h.fromBufferAttribute(p,S),Kc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=m,y=_-1;v<y;v+=f){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Kc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},pp=new P,mp=new P,tl=class extends Rr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)pp.fromBufferAttribute(t,s),mp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+pp.distanceTo(mp);e.setAttribute("lineDistance",new He(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},nl=class extends Rr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Do=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gp=new De,Mh=new br,Ua=new Hn,Na=new P,il=class extends vt{constructor(e=new wt,t=new Do){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,e.ray.intersectsSphere(Ua)===!1)return;gp.copy(s).invert(),Mh.copy(e.ray).applyMatrix4(gp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let p=c.getX(g);Na.fromBufferAttribute(u,p),xp(Na,p,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Na.fromBufferAttribute(u,g),xp(Na,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xp(n,e,t,i,s,r,o){let a=Mh.distanceSqToPoint(n);if(a<t){let l=new P;Mh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Pn=class extends on{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ne:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new P,s=[],r=[],o=[],a=new P,l=new De;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Xt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Xt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fo=class extends Jn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new ne,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bh=class extends Fo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function eu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var za=new P,Jc=new eu,jc=new eu,Qc=new eu,Uo=class extends Jn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(za.subVectors(s[0],s[1]).add(s[0]),c=za);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(za.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=za),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Jc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,p),jc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,p),Qc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Jc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),jc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Qc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Jc.calc(l),jc.calc(l),Qc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _p(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function zb(n,e){let t=1-n;return t*t*e}function Ob(n,e){return 2*(1-n)*n*e}function kb(n,e){return n*n*e}function yo(n,e,t,i){return zb(n,e)+Ob(n,t)+kb(n,i)}function Bb(n,e){let t=1-n;return t*t*t*e}function Hb(n,e){let t=1-n;return 3*t*t*n*e}function Gb(n,e){return 3*(1-n)*n*n*e}function Vb(n,e){return n*n*n*e}function Mo(n,e,t,i,s){return Bb(n,e)+Hb(n,t)+Gb(n,i)+Vb(n,s)}var sl=class extends Jn{constructor(e=new ne,t=new ne,i=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ne){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mo(e,s.x,r.x,o.x,a.x),Mo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sh=class extends Jn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mo(e,s.x,r.x,o.x,a.x),Mo(e,s.y,r.y,o.y,a.y),Mo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rl=class extends Jn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eh=class extends Jn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends Jn{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yo(e,s.x,r.x,o.x),yo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends Jn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yo(e,s.x,r.x,o.x),yo(e,s.y,r.y,o.y),yo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ll=class extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(_p(a,l.x,c.x,h.x,u.x),_p(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},wh=Object.freeze({__proto__:null,ArcCurve:bh,CatmullRomCurve3:Uo,CubicBezierCurve:sl,CubicBezierCurve3:Sh,EllipseCurve:Fo,LineCurve:rl,LineCurve3:Eh,QuadraticBezierCurve:ol,QuadraticBezierCurve3:al,SplineCurve:ll}),Th=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new wh[s.type]().fromJSON(s))}return this}},Ah=class extends Th{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new rl(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ol(this.currentPoint.clone(),new ne(e,t),new ne(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new sl(this.currentPoint.clone(),new ne(e,t),new ne(i,s),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ll(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Fo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Os=class n extends wt{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Xt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new P,d=new ne,f=new P,g=new P,x=new P,p=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=t;_++){let v=i+_*h*s,y=Math.sin(v),w=Math.cos(v);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*y,u.y=e[S].y,u.z=e[S].x*w,o.push(u.x,u.y,u.z),d.x=_/t,d.y=S/(e.length-1),a.push(d.x,d.y);let R=l[3*S+0]*y,D=l[3*S+1],M=l[3*S+0]*w;c.push(R,D,M)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let y=v+_*e.length,w=y,S=y+e.length,R=y+e.length+1,D=y+1;r.push(w,S,D),r.push(R,D,S)}this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("uv",new He(a,2)),this.setAttribute("normal",new He(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Cr=class n extends Os{constructor(e=1,t=1,i=4,s=8){let r=new Ah;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Ln=class n extends wt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(a,3)),this.setAttribute("uv",new He(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pn=class n extends wt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],p=i/2,m=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(f,2));function _(){let y=new P,w=new P,S=0,R=(t-e)/i;for(let D=0;D<=r;D++){let M=[],T=D/r,F=T*(t-e)+e;for(let k=0;k<=s;k++){let O=k/s,L=O*l+a,U=Math.sin(L),q=Math.cos(L);w.x=F*U,w.y=-T*i+p,w.z=F*q,u.push(w.x,w.y,w.z),y.set(U,R,q).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-T),M.push(g++)}x.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){let T=x[M][D],F=x[M+1][D],k=x[M+1][D+1],O=x[M][D+1];h.push(T,F,O),h.push(F,k,O),S+=6}c.addGroup(m,S,0),m+=S}function v(y){let w=g,S=new ne,R=new P,D=0,M=y===!0?e:t,T=y===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,p*T,0),d.push(0,T,0),f.push(.5,.5),g++;let F=g;for(let k=0;k<=s;k++){let L=k/s*l+a,U=Math.cos(L),q=Math.sin(L);R.x=M*q,R.y=p*T,R.z=M*U,u.push(R.x,R.y,R.z),d.push(0,T,0),S.x=U*.5+.5,S.y=q*.5*T+.5,f.push(S.x,S.y),g++}for(let k=0;k<s;k++){let O=w+k,L=F+k;y===!0?h.push(L,L+1,O):h.push(L+1,L,O),D+=3}c.addGroup(m,D,y===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cl=class n extends pn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hl=class n extends wt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new P,y=new P,w=new P;for(let S=0;S<t.length;S+=3)f(t[S+0],v),f(t[S+1],y),f(t[S+2],w),l(v,y,w,_)}function l(_,v,y,w){let S=w+1,R=[];for(let D=0;D<=S;D++){R[D]=[];let M=_.clone().lerp(y,D/S),T=v.clone().lerp(y,D/S),F=S-D;for(let k=0;k<=F;k++)k===0&&D===S?R[D][k]=M:R[D][k]=M.clone().lerp(T,k/F)}for(let D=0;D<S;D++)for(let M=0;M<2*(S-D)-1;M++){let T=Math.floor(M/2);M%2===0?(d(R[D][T+1]),d(R[D+1][T]),d(R[D][T])):(d(R[D][T+1]),d(R[D+1][T+1]),d(R[D+1][T]))}}function c(_){let v=new P;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let _=new P;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let y=p(_)/2/Math.PI+.5,w=m(_)/Math.PI+.5;o.push(y,1-w)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let v=o[_+0],y=o[_+2],w=o[_+4],S=Math.max(v,y,w),R=Math.min(v,y,w);S>.9&&R<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){let y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function g(){let _=new P,v=new P,y=new P,w=new P,S=new ne,R=new ne,D=new ne;for(let M=0,T=0;M<r.length;M+=9,T+=6){_.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),S.set(o[T+0],o[T+1]),R.set(o[T+2],o[T+3]),D.set(o[T+4],o[T+5]),w.copy(_).add(v).add(y).divideScalar(3);let F=p(w);x(S,T+0,_,F),x(R,T+2,v,F),x(D,T+4,y,F)}}function x(_,v,y,w){w<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=w/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var ul=class n extends hl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},dl=class n extends hl{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},os=class n extends wt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new P,g=new ne;for(let x=0;x<=s;x++){for(let p=0;p<=i;p++){let m=r+p/i*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let p=x*(i+1);for(let m=0;m<i;m++){let _=m+p,v=_,y=_+i+1,w=_+i+2,S=_+1;a.push(v,y,S),a.push(y,w,S)}}this.setIndex(a),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Kt=class n extends wt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,d=new P,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let _=[],v=m/i,y=0;m===0&&o===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let S=w/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(S+y,1-v),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let v=h[m][_+1],y=h[m][_],w=h[m+1][_],S=h[m+1][_+1];(m!==0||o>0)&&f.push(v,y,S),(m!==i-1||l<Math.PI)&&f.push(y,w,S)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Pr=class n extends wt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,p=f/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(x,p,_),o.push(p,m,_)}this.setIndex(o),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var fl=class n extends wt{constructor(e=new al(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new ne,h=new P,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(f,2));function x(){for(let v=0;v<t;v++)p(v);p(r===!1?t:0),_(),m()}function p(v){h=e.getPointAt(v/t,h);let y=o.normals[v],w=o.binormals[v];for(let S=0;S<=s;S++){let R=S/s*Math.PI*2,D=Math.sin(R),M=-Math.cos(R);l.x=M*y.x+D*w.x,l.y=M*y.y+D*w.y,l.z=M*y.z+D*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=t;v++)for(let y=1;y<=s;y++){let w=(s+1)*(v-1)+(y-1),S=(s+1)*v+(y-1),R=(s+1)*v+y,D=(s+1)*(v-1)+y;g.push(w,S,D),g.push(S,R,D)}}function _(){for(let v=0;v<=t;v++)for(let y=0;y<=s;y++)c.x=v/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new wh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var pl=class extends ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},as=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jn=class extends as{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ml=class extends Cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Oa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Wb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Xb(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function vp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Xp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var ls=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rh=class extends ls{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pf,endingEnd:pf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case mf:r=e,a=2*t-i;break;case gf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case mf:o=e,l=2*i-t;break;case gf:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,_=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*p+(1.5+f)*x+.5*g,y=f*p-f*x;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+_*o[c+w]+v*o[l+w]+y*o[u+w];return r}},Ch=class extends ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ph=class extends ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oa(t,this.TimeBufferType),this.values=Oa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Oa(e.times,Array),values:Oa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case Ns:t=this.InterpolantFactoryMethodLinear;break;case wc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return Ns;case this.InterpolantFactoryMethodSmooth:return wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Wb(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Ns;var cs=class extends Qn{};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=yr;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends Qn{};gl.prototype.ValueTypeName="color";var Oi=class extends Qn{};Oi.prototype.ValueTypeName="number";var Lh=class extends ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ln.slerpFlat(r,0,o,c-a,o,c,l);return r}},yi=class extends Qn{InterpolantFactoryMethodLinear(e){return new Lh(this.times,this.values,this.getValueSize(),e)}};yi.prototype.ValueTypeName="quaternion";yi.prototype.DefaultInterpolation=Ns;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Qn{};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=yr;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Qn{};ki.prototype.ValueTypeName="vector";var xl=class{constructor(e,t=-1,i,s=_x){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=li(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Yb(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Qn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Xb(l);l=vp(l,1,h),c=vp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Oi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,g,x){if(f.length!==0){let p=[],m=[];Xp(f,p,m,g),p.length!==0&&x.push(new u(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let p=[],m=[];for(let _=0;_!==d[g].morphTargets.length;++_){let v=d[g];p.push(v.time),m.push(v.morphTarget===x?1:0)}s.push(new Oi(".morphTargetInfluence["+x+"]",p,m))}l=f.length*o}else{let f=".bones["+t[u].name+"]";i(ki,f+".position",d,"pos",s),i(yi,f+".quaternion",d,"rot",s),i(ki,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function qb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oi;case"vector":case"vector2":case"vector3":case"vector4":return ki;case"color":return gl;case"quaternion":return yi;case"bool":case"boolean":return cs;case"string":return hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Yb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=qb(n.type);if(n.times===void 0){let t=[],i=[];Xp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var ji={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Ih=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Zb=new Ih,Bi=class{constructor(e){this.manager=e!==void 0?e:Zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pi={},Dh=class extends Error{constructor(e,t){super(e),this.response=t}},No=class extends Bi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ji.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:i,onError:s});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Pi[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,x=0,p=new ReadableStream({start(m){_();function _(){u.read().then(({done:v,value:y})=>{if(v)m.close();else{x+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let S=0,R=h.length;S<R;S++){let D=h[S];D.onProgress&&D.onProgress(w)}m.enqueue(y),_()}})}}});return new Response(p)}else throw new Dh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ji.add(e,c);let h=Pi[e];delete Pi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Pi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Pi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Fh=class extends Bi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ji.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=wo("img");function l(){h(),ji.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var _l=class extends Bi{constructor(e){super(e)}load(e,t,i,s){let r=new on,o=new Fh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Lr=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},vl=class extends Lr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},eh=new De,yp=new P,Mp=new P,zo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(yp),Mp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mp),t.updateMatrixWorld(),eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Uh=class extends zo{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},yl=class extends Lr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Uh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},bp=new De,po=new P,th=new P,Nh=class extends zo{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),po.setFromMatrixPosition(e.matrixWorld),i.position.copy(po),th.copy(i.position),th.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(th),i.updateMatrixWorld(),s.makeTranslation(-po.x,-po.y,-po.z),bp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bp)}},Ml=class extends Lr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Nh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},zh=class extends zo{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ir=class extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new zh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var us=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},bl=class extends wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Sl=class extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ji.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ji.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ji.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ji.add(e,l),r.manager.itemStart(e)}};var El=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Sp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Sp(){return(typeof performance>"u"?Date:performance).now()}var tu="\\[\\]\\.:\\/",$b=new RegExp("["+tu+"]","g"),nu="[^"+tu+"]",Kb="[^"+tu.replace("\\.","")+"]",Jb=/((?:WC+[\/:])*)/.source.replace("WC",nu),jb=/(WCOD+)?/.source.replace("WCOD",Kb),Qb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),e1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),t1=new RegExp("^"+Jb+jb+Qb+e1+"$"),n1=["material","materials","bones","map"],Oh=class{constructor(e,t,i){let s=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($b,"")}static parseTrackName(e){let t=t1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);n1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Oh;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);var J=n=>document.getElementById(n),Le=Math.PI*2,tt=(n,e,t)=>n<e?e:n>t?t:n,Dn=(n,e,t)=>n+(e-n)*t;var Jt=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window&&navigator.maxTouchPoints>0,Bo=Math.random,z=(n=0,e=1)=>n+Bo()*(e-n),Ho=n=>n[Math.floor(Bo()*n.length)];function iu(n,e){let t=n>>>0,i=Bo;Bo=()=>{t=t+1831565813>>>0;let s=t;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};try{return e()}finally{Bo=i}}function Fr(n,e){let t=(e-n)%Le;return t>Math.PI&&(t-=Le),t<-Math.PI&&(t+=Le),t}var Ur=n=>{for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},At={get(n,e){try{let t=localStorage.getItem("bg_"+n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem("bg_"+n,JSON.stringify(e))}catch{}}},nn=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Gn(n,e,t,i,s){return n.v+=((e-n.x)*t-n.v*i)*s,n.x+=n.v*s,n.x}var mn=(n=0)=>({x:n,v:0});var Ll={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},i1=new rs(-1,1,1,-1,0,1),su=class extends wt{constructor(){super(),this.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new He([0,2,0,0,2,0],2))}},s1=new su,fs=class{constructor(e){this._mesh=new ae(s1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,i1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Il=class extends Vn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ds.clone(e.uniforms),this.material=new ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new fs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Go=class extends Vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Dl=class extends Vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Fl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ne);this._width=i.width,this._height=i.height,t=new an(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Il(Ll),this.copyPass.material.blending=xi,this.clock=new El}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Go!==void 0&&(o instanceof Go?i=!0:o instanceof Dl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ul=class extends Vn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new se}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var qp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Nr=class n extends Vn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new an(r,o,{type:An}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new an(r,o,{type:An});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new an(r,o,{type:An});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=qp;this.highPassUniforms=ds.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ut({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ne(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ll;this.copyUniforms=ds.clone(h.uniforms),this.blendMaterial=new ut({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Tn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.basic=new ke,this.fsQuad=new fs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Nr.BlurDirectionX=new ne(1,0);Nr.BlurDirectionY=new ne(0,1);var Yp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Nl=class extends Vn{constructor(){super();let e=Yp;this.uniforms=ds.clone(e.uniforms),this.material=new pl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new fs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Oo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ks=J("c"),ou=(()=>{let n=At.get("gfx",Jt?"low":"medium");return["low","medium","high"].includes(n)?n:"medium"})(),gt=ou==="low",Hi=ou==="high",r1=["roughness","metalness","envMapIntensity","roughnessMap","metalnessMap"];function ft(n={}){if(!gt)return new as(n);let e=Object.assign({},n);for(let t of r1)delete e[t];return new ml(e)}var Ft=new Co({canvas:ks,antialias:!Jt,powerPreference:"high-performance",stencil:!1});Ft.toneMapping=Oo;Ft.toneMappingExposure=1;Ft.shadowMap.enabled=!gt;Ft.shadowMap.type=Hi?Bh:wl;var pe=new Tr,o1=new se("#B9A08A");pe.fog=new el(o1,48,120);var it=new qt(55,1,.1,400),$p=new P(-.86,.3,.22).normalize(),Kp={top:{value:new se("#27477E")},hor:{value:new se("#FFB46A")},hor2:{value:new se("#9C7FB0")},sunDir:{value:$p},t:{value:0},disc:{value:new se("#FFA040")},cloud:{value:new se("#F6C6A4")}},au=new ut({side:Gt,depthWrite:!1,fog:!1,uniforms:Kp,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 hor; uniform vec3 hor2; uniform vec3 sunDir; uniform float t; uniform vec3 disc; uniform vec3 cloud; varying vec3 vDir;
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
}`}),Or=new ae(new Kt(300,32,16),au);Or.renderOrder=-10;Or.frustumCulled=!1;pe.add(Or);function Jp(n){Kp.t.value+=n}function jp(){let n=new wr(Ft),e=new Tr;e.add(new ae(new Kt(50,32,16),au));let t=new ae(new Ln(49,24),new ke({color:"#4A6A2E",side:Tt}));t.rotation.x=-Math.PI/2,t.position.y=-4,e.add(t);let i=n.fromScene(e,.04,.1,200);n.dispose(),pe.environment=i.texture}function Qp(){let n=new Ao(gt?256:512,{type:An}),e=new To(.5,400,n),t=new Tr,i=new ae(new Kt(100,32,16),au);t.add(i),e.update(Ft,t),pe.background=n.texture,Or.visible=!1}var em=new vl("#AFC2EC","#4E5E2C",.8);pe.add(em);var Fn=new Ir("#FFC88C",2.5);gt&&(em.intensity=1.55,Fn.intensity=2.3);Fn.castShadow=!0;Fn.shadow.bias=-4e-4;Fn.shadow.normalBias=.03;pe.add(Fn,Fn.target);function tm(n,e){let t=Fn.shadow.camera,i=Math.hypot(n,e)+3;t.left=-i,t.right=i,t.top=i,t.bottom=-i,t.near=1,t.far=160,t.updateProjectionMatrix(),Fn.position.copy($p).multiplyScalar(70),Fn.target.position.set(0,0,0)}function ps(n,e,t,i={}){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new Pn(s);return r.colorSpace=i.linear?wn:ct,i.repeat&&(r.wrapS=r.wrapT=Ui),r.anisotropy=4,r}var he={level:ou,PR:1,post:!1,composer:null,bloom:null,perfN:0,perfSum:0,calm:0,shadows:!gt,fps:0,frames:0,fpsT:0,onShadows:null};function ru(){return Math.min(Hi?2:gt?1.3:1.5,devicePixelRatio||1)}var Zp=()=>Math.min(gt?.8:.75,devicePixelRatio||1);function zr(){let n=innerWidth,e=innerHeight;Ft.setSize(n,e,!1),it.aspect=n/e,it.fov=it.aspect<.75?72:it.aspect<1.2?62:55,it.updateProjectionMatrix(),he.composer&&(he.composer.setPixelRatio(he.PR),he.composer.setSize(n,e))}function a1(){if(he.composer)return;let n=Ft.getDrawingBufferSize(new ne),e=new an(n.x,n.y,{type:An,samples:2});he.composer=new Fl(Ft,e),he.composer.addPass(new Ul(pe,it)),he.bloom=new Nr(new ne(innerWidth,innerHeight),.35,.5,.92),he.composer.addPass(he.bloom),he.composer.addPass(new Nl)}function nm(n){At.set("gfx",n)}function im(){he.PR=Math.min(ru(),gt?1.15:1.25),Ft.setPixelRatio(he.PR),pe.fog.near=gt?30:40,pe.fog.far=gt?85:110,it.far=160,it.updateProjectionMatrix();let n=Hi?2048:1024;if(Fn.shadow.mapSize.x!==n&&(Fn.shadow.mapSize.set(n,n),Fn.shadow.map&&(Fn.shadow.map.dispose(),Fn.shadow.map=null)),Hi)try{a1()}catch{he.composer=null}he.post=Hi&&!!he.composer,he.perfN=he.perfSum=he.calm=0,zr()}function l1(){he.shadows=!1,Ft.shadowMap.enabled=!1,pe.traverse(n=>{if(n.material)for(let e of[].concat(n.material))e.needsUpdate=!0}),he.onShadows&&he.onShadows(!1)}function sm(n,e){if(he.frames++,he.fpsT+=n,he.fpsT>=.5&&(he.fps=Math.round(he.frames/he.fpsT),he.frames=0,he.fpsT=0),!e||n>.5||document.hidden||(he.perfN++,he.perfSum+=n,he.perfN<60))return;let t=he.perfSum/he.perfN;he.perfN=0,he.perfSum=0,t>.0205?(he.calm=0,he.post?(he.post=!1,he.noPost=!0):he.PR>Zp()+.01?(he.PR=Math.max(Zp(),he.PR*.88),Ft.setPixelRatio(he.PR),zr()):he.shadows&&++he.slow>=2&&l1()):t<.0135&&++he.calm>=3&&(he.calm=0,he.slow=0,he.PR<ru()-.01?(he.PR=Math.min(ru(),he.PR*1.1),Ft.setPixelRatio(he.PR),zr()):!he.post&&he.composer&&Hi&&!he.noPost&&(he.post=!0))}he.slow=0;function lu(){he.post&&he.composer?he.composer.render():Ft.render(pe,it)}function Vo(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new wt,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=rm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=rm(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function rm(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<n.length;++c)o.set(n[c].array,a),a+=n[c].array.length;let l=new ht(o,t,i);return s!==void 0&&(l.gpuType=s),l}function om(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let _=0,v=a.length;_<v;_++){let y=a[_],w=n.attributes[y];l[y]=new ht(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);let S=n.morphAttributes[y];S&&(c[y]=new ht(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized))}let f=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),p=f*x;for(let _=0;_<r;_++){let v=i?i.getX(_):_,y="";for(let w=0,S=a.length;w<S;w++){let R=a[w],D=n.getAttribute(R),M=D.itemSize;for(let T=0;T<M;T++)y+=`${~~(D[u[T]](v)*x+p)},`}if(y in t)h.push(t[y]);else{for(let w=0,S=a.length;w<S;w++){let R=a[w],D=n.getAttribute(R),M=n.morphAttributes[R],T=D.itemSize,F=l[R],k=c[R];for(let O=0;O<T;O++){let L=u[O],U=d[O];if(F[U](o,D[L](v)),M)for(let q=0,K=M.length;q<K;q++)k[q][U](o,M[q][L](v))}}t[y]=o,h.push(o),o++}}let m=n.clone();for(let _ in n.attributes){let v=l[_];if(m.setAttribute(_,new ht(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),_ in c)for(let y=0;y<c[_].length;y++){let w=c[_][y];m.morphAttributes[_][y]=new ht(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)}}return m.setIndex(h),m}function cu(n,e){if(e===Ip)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===ko||e===Al){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===ko)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var Xo=class extends Bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=us.extractUrlBase(e);o=us.resolveURL(c,this.path)}else o=us.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new No(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===um){try{o[st.KHR_BINARY_GLTF]=new Pu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new zu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:o[u]=new pu;break;case st.KHR_DRACO_MESH_COMPRESSION:o[u]=new Lu(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[u]=new Iu;break;case st.KHR_MESH_QUANTIZATION:o[u]=new Du;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function c1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fu=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Yt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ir(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ml(h),c.distance=u;break;case"spot":c=new yl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,gs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},pu=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return ke}extendParams(e,t,i){let s=[];e.color=new se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,ct))}return Promise.all(s)}},mu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},gu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ne(a,a)}return Promise.all(r)}},xu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},_u=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new se(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Yt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ct)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},yu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new se().setRGB(a[0],a[1],a[2],Yt),Promise.all(r)}},Mu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},bu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new se().setRGB(a[0],a[1],a[2],Yt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,ct)),Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Eu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Tu=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Au=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ru=class{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Cu=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==ei.TRIANGLES&&c.mode!==ei.TRIANGLE_STRIP&&c.mode!==ei.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let x=new De,p=new P,m=new ln,_=new P(1,1,1),v=new zi(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,x.compose(p,m,_));for(let y in l)if(y==="_COLOR_0"){let w=l[y];v.instanceColor=new ci(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);vt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},um="glTF",Wo=12,am={JSON:1313821514,BIN:5130562},Pu=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Wo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==um)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Wo,r=new DataView(e,Wo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===am.JSON){let c=new Uint8Array(e,Wo+o,a);this.content=i.decode(c)}else if(l===am.BIN){let c=Wo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Lu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Uu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Uu[h]||h.toLowerCase();if(o[h]!==void 0){let d=i.accessors[e.attributes[h]],f=kr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],p=l[g];p!==void 0&&(x.normalized=p)}u(f)},a,c,Yt,d)})})}},Iu=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Du=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},zl=class extends ls{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,p=-2*f+3*d,m=f-d,_=1-p,v=m-d+u;for(let y=0;y!==a;y++){let w=o[x+y+a],S=o[x+y+l]*h,R=o[g+y+a],D=o[g+y]*h;r[y]=_*w+v*S+p*R+m*D}return r}},h1=new ln,Fu=class extends zl{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return h1.fromArray(r).normalize().toArray(r),r}},ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lm={9728:Wt,9729:bn,9984:Ba,9985:Zh,9986:mo,9987:ns},cm={33071:Bn,33648:Eo,10497:Ui},hu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},u1={CUBICSPLINE:void 0,LINEAR:Ns,STEP:yr},uu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function d1(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new as({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),n.DefaultMaterial}function Bs(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function gs(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function f1(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function p1(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function m1(n){let e,t=n.extensions&&n.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+du(t.attributes):e=n.indices+":"+du(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+du(n.targets[i]);return e}function du(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Nu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function g1(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var x1=new De,zu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new c1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new _l(this.options.manager):this.textureLoader=new Sl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new No(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Bs(r,a,s),gs(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(us.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=hu[s.type],a=kr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new ht(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=hu[s.type],c=kr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,p;if(f&&f!==u){let m=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,v=t.cache.get(_);v||(x=new c(a,m*f,s.count*f/h),v=new Po(x,f/h),t.cache.add(_,v)),p=new Lo(v,l,d%f/h,g)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),p=new ht(x,l,g);if(s.sparse!==void 0){let m=hu.SCALAR,_=kr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,w=new _(o[1],v,s.sparse.count*m),S=new c(o[2],y,s.sparse.count*l);a!==null&&(p=new ht(p.array.slice(),p.itemSize,p.normalized));for(let R=0,D=w.length;R<D;R++){let M=w[R];if(p.setX(M,S[R*l]),l>=2&&p.setY(M,S[R*l+1]),l>=3&&p.setZ(M,S[R*l+2]),l>=4&&p.setW(M,S[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=lm[d.magFilter]||bn,h.minFilter=lm[d.minFilter]||ns,h.wrapS=cm[d.wrapS]||Ui,h.wrapT=cm[d.wrapT]||Ui,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let p=new on(x);p.needsUpdate=!0,d(p)}),t.load(us.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||g1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Do,Cn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Io,Cn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return as}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){let u=s[st.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new se(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Yt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,ct)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Tt);let h=r.alphaMode||uu.OPAQUE;if(h===uu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===uu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ke&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ne(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==ke&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ke){let u=r.emissiveFactor;a.emissive=new se().setRGB(u[0],u[1],u[2],Yt)}return r.emissiveTexture!==void 0&&o!==ke&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ct)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),gs(u,r),t.associations.set(u,{materials:e}),r.extensions&&Bs(s,u,r),u})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return hm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=m1(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=hm(new wt,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?d1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],p=o[f],m,_=c[f];if(p.mode===ei.TRIANGLES||p.mode===ei.TRIANGLE_STRIP||p.mode===ei.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Ni(x,_):new ae(x,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===ei.TRIANGLE_STRIP?m.geometry=cu(m.geometry,Al):p.mode===ei.TRIANGLE_FAN&&(m.geometry=cu(m.geometry,ko));else if(p.mode===ei.LINES)m=new tl(x,_);else if(p.mode===ei.LINE_STRIP)m=new Rr(x,_);else if(p.mode===ei.LINE_LOOP)m=new nl(x,_);else if(p.mode===ei.POINTS)m=new il(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&p1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),gs(m,r),p.extensions&&Bs(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Bs(s,u[0],r),u[0];let d=new zt;r.extensions&&Bs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new qt(Up.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new rs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),gs(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new De;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ar(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,p=x.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],p=u[4],m=[];for(let _=0,v=d.length;_<v;_++){let y=d[_],w=f[_],S=g[_],R=x[_],D=p[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let M=i._createAnimationTracks(y,w,S,R,D);if(M)for(let T=0;T<M.length;T++)m.push(M[T])}return new xl(r,void 0,m)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,x1)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new zs:c.length>1?h=new zt:c.length===1?h=c[0]:h=new vt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),gs(h,r),r.extensions&&Bs(i,h,r),r.matrix!==void 0){let u=new De;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new zt;i.name&&(r.name=s.createUniqueName(i.name)),gs(r,i),i.extensions&&Bs(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Cn||d instanceof on)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];ms[r.path]===ms.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ms[r.path]){case ms.weights:c=Oi;break;case ms.rotation:c=yi;break;case ms.position:case ms.scale:c=ki;break;default:switch(i.itemSize){case 1:c=Oi;break;case 2:case 3:default:c=ki;break}break}let h=s.interpolation!==void 0?u1[s.interpolation]:Ns,u=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+ms[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Nu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof yi?Fu:zl;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function _1(n,e,t){let i=e.attributes,s=new Rn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){let h=Nu(kr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Nu(kr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Hn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function hm(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Uu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return lt.workingColorSpace!==Yt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),gs(n,e),_1(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?f1(n,e.targets,t):n})}var Mi={};async function dm(n){let e;if(window.BG_NATURE_B64){let t=await(await fetch(window.BG_NATURE_B64)).text(),i=Uint8Array.from(atob(t.trim()),o=>o.charCodeAt(0)),s=window.createImageBitmap;window.createImageBitmap=void 0;let r=new Promise((o,a)=>new Xo().parse(i.buffer,"",o,a));window.createImageBitmap=s,e=await r,n&&n(1)}else e=await new Promise((t,i)=>new Xo().load("assets/nature.glb",t,s=>{n&&s.total&&n(s.loaded/s.total)},i));for(let t of e.scene.children){t.updateMatrixWorld(!0);let i=new De().copy(t.matrixWorld).invert(),s=[],r=new Rn;t.traverse(o=>{if(!o.isMesh)return;let a=new De().multiplyMatrices(i,o.matrixWorld);s.push({geometry:o.geometry,map:o.material.map||null,matName:o.material.name||"",matrix:a});let l=o.geometry;l.computeBoundingBox(),r.union(l.boundingBox.clone().applyMatrix4(a))}),Mi[t.name]={parts:s,box:r,size:r.getSize(new P)}}return Mi}var v1={id:"glade",name:"\u0413\u0440\u0438\u0431\u043D\u0430\u044F \u043F\u043E\u043B\u044F\u043D\u0430",desc:"\u0413\u0440\u0438\u0431\u043D\u0438\u0446\u0430 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435, \u043A\u0443\u0441\u0442\u044B-\u0438\u0437\u0433\u043E\u0440\u043E\u0434\u0438 \u043F\u043E \u0431\u043E\u043A\u0430\u043C \u0438 \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u0442\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0437\u0430\u0441\u0430\u0434.",half:['""..,..r.r.r..,..""','""...............""',".....##.....##.....","...................","####...........####",".......T...T.......",'"""......R......"""','"""...#####....."""','"""............."""','.~~.....""....R....','.~~..R..""".....##.','........"""....##..',".##................",'"""...R..M..R..."""']},fm={glade:y1(v1),maze:M1(2718)};function y1(n){let e=n.half,t=e[0].length;for(let a of e)if(a.length!==t)throw new Error("map "+n.id+": row width "+a.length+" != "+t+" in \xAB"+a+"\xBB");let i=e[e.length-1];if(i!==[...i].reverse().join(""))throw new Error("map "+n.id+": middle row must be a palindrome");let s=a=>a==="r"?"b":a,r=e.slice(0,-1).reverse().map(a=>[...a].reverse().map(s).join("")),o=[...e,...r];return Object.assign({},n,{rows:o,W:t,H:o.length})}function M1(n){let e=n>>>0,t=()=>{e=e+1831565813>>>0;let _=e;return _=Math.imul(_^_>>>15,_|1),_^=_+Math.imul(_^_>>>7,_|61),((_^_>>>14)>>>0)/4294967296},i=12,s=i*2-1,r=Array.from({length:i},()=>Array(i).fill("#")),o=(_,v)=>_>=0&&v>=0&&_<i&&v<i,a=new Set,l=[[0,0]];for(r[0][0]=".",a.add("0,0");l.length;){let[_,v]=l[l.length-1],y=[[2,0],[-2,0],[0,2],[0,-2]].map(([M,T])=>[_+M,v+T,M,T]).filter(([M,T])=>o(M,T)&&!a.has(M+","+T));if(!y.length){l.pop();continue}let[w,S,R,D]=y[Math.floor(t()*y.length)];r[_+R/2][v+D/2]=".",r[w][S]=".",a.add(w+","+S),l.push([w,S])}for(let _=0;_<i;_++)for(let v=0;v<i;v++)r[_][v]==="#"&&_%2!==v%2&&t()<.12&&(r[_][v]=".");for(let _=1;_<i;_+=2)for(let v=1;v<i;v+=2)[[1,0],[-1,0],[0,1],[0,-1]].every(([w,S])=>!o(_+w,v+S)||r[_+w][v+S]===".")&&t()<.15&&(r[_][v]=".");for(let _=0;_<i;_++)for(let v=0;v<i;v++)Math.max(i-1-_,i-1-v)<=2&&(r[_][v]=".");let c=[[1,1],[1,8],[8,1]];for(let[_,v]of c)for(let y=_-1;y<=_+1;y++)for(let w=v-1;w<=v+1;w++)o(y,w)&&(r[y][w]=".");let h=(_,v,y)=>c.some(([w,S])=>Math.abs(w-_)<=y&&Math.abs(S-v)<=y)||Math.max(i-1-_,i-1-v)<=3;for(let _=0;_<9;_++){let v=Math.floor(t()*i),y=Math.floor(t()*i);for(let w=0;w<6;w++){o(v,y)&&r[v][y]==="."&&!h(v,y,1)&&(r[v][y]='"');let S=Math.floor(t()*4);v+=[1,-1,0,0][S],y+=[0,0,1,-1][S]}}let u=0,d=(_,v)=>[[1,0],[-1,0],[0,1],[0,-1]].filter(([y,w])=>o(_+y,v+w)&&r[_+y][v+w]==="#").length;for(let _ of[3,2])for(let v=0;v<i-1&&u<10;v++)for(let y=0;y<i-1&&u<10;y++)r[v][y]!=="."||h(v,y,2)||d(v,y)>=_&&t()<(_===3?.9:.4)&&(r[v][y]="C",u++);r[i-4][i-3]="C",r[i-3][i-4]="C",r[i-3][i-3]="R";for(let _=0;_<i;_++)for(let v=0;v<i;v++)r[_][v]==="."&&!h(_,v,2)&&t()<.025&&(r[_][v]="R");for(let _=0;_<i;_++)r[i-1][_]=r[_][i-1];for(let[_,v]of c)r[_][v]="s";let f=Array.from({length:s},()=>Array(s).fill("#"));for(let _=0;_<s;_++)for(let v=0;v<s;v++){let y=_,w=v;for(let S=0;S<4&&!(y<i&&w<i);S++){let R=y;y=s-1-w,w=R}f[_][v]=r[y][w]}let g=_=>_!=="#"&&_!=="R"&&_!=="C";for(let _=0;_<200;_++){let v=Array.from({length:s},()=>Array(s).fill(!1)),y=[[1,1]];for(v[1][1]=!0;y.length;){let[D,M]=y.pop();for(let[T,F]of[[1,0],[-1,0],[0,1],[0,-1]]){let k=D+T,O=M+F;k>=0&&O>=0&&k<s&&O<s&&!v[k][O]&&g(f[k][O])&&(v[k][O]=!0,y.push([k,O]))}}let w=null;for(let D=0;D<s&&!w;D++)for(let M=0;M<s&&!w;M++)g(f[D][M])&&!v[D][M]&&(w=[D,M]);if(!w)break;let[S,R]=w;for(let[D,M]of[[1,0],[-1,0],[0,1],[0,-1]]){let T=S+D,F=R+M;if(T>=0&&F>=0&&T<s&&F<s&&f[T][F]!=="."&&f[T][F]!=='"'){let k=T,O=F;for(let L=0;L<4;L++){f[k][O]=".";let U=k;k=O,O=s-1-U}break}}}let x=_=>_%2?1:2,p=[];for(let _=0;_<s;_++)for(let v=0;v<x(_);v++){let y="";for(let w=0;w<s;w++)for(let S=0;S<x(w);S++){let R=f[_][w],D=v===0&&S===0;y+="CRs".includes(R)&&!D?".":R}p.push(y)}let m=p[0].length;return{id:"maze",name:"\u041B\u0435\u0441\u043D\u043E\u0439 \u043B\u0430\u0431\u0438\u0440\u0438\u043D\u0442",desc:"\u0423\u0437\u043A\u0438\u0435 \u043F\u0440\u043E\u0445\u043E\u0434\u044B \u043C\u0435\u0436\u0434\u0443 \u043A\u0443\u0441\u0442\u0430\u043C\u0438, \u0442\u0430\u0439\u043D\u0438\u043A\u0438 \u0441 \u0441\u0438\u043B\u043E\u0439 \u0438 \u043F\u043E\u043B\u044F\u043D\u0430 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435.",rows:p,W:m,H:p.length,mode:"br"}}var B={map:null,W:0,H:0,rows:null,group:null,hx:0,hz:0,spawns:{0:[],1:[],ffa:[]},mine:null,grassTiles:[],crates:[],shared:{}},Sn={time:{value:0},push:{value:Array.from({length:10},()=>new P(0,0,0))},me:{value:new P(0,0,0)}},cn=n=>(n-(B.W-1)/2)*1.6,hn=n=>(n-(B.H-1)/2)*1.6,hi=n=>Math.floor(n/1.6+B.W/2),ui=n=>Math.floor(n/1.6+B.H/2);function Vi(n,e){return n<0||e<0||n>=B.W||e>=B.H?"X":B.rows[e][n]}var bi=(n,e)=>Vi(hi(n),ui(e)),b1=new Set(["#","R","T","~","X","C"]),S1=new Set(["#","R","T","X","C"]),xs=n=>b1.has(n),Ol=n=>S1.has(n),E1=new Set(["#","X"]),ku=n=>E1.has(n),Vr=(n,e,t,i)=>gn(n,e,t,i,ku)<0,gm=n=>n==="#"||n==="X"?Xu:n==="R"?1.15:n==="C"?1.1:n==="T"?.9:0,kl=(n,e)=>bi(n,e)==='"';function Gs(n,e){let t=hi(n.x-e),i=hi(n.x+e),s=ui(n.z-e),r=ui(n.z+e),o=!1;for(let a=s;a<=r;a++)for(let l=t;l<=i;l++){if(!xs(Vi(l,a)))continue;let c=cn(l)-1.6/2,h=c+1.6,u=hn(a)-1.6/2,d=u+1.6,f=tt(n.x,c,h),g=tt(n.z,u,d),x=n.x-f,p=n.z-g,m=x*x+p*p;if(!(m>=e*e))if(o=!0,m>1e-8){let _=Math.sqrt(m),v=(e-_)/_;n.x+=x*v,n.z+=p*v}else{let _=[n.x-c,h-n.x,n.z-u,d-n.z],v=Math.min(..._);v===_[0]?n.x=c-e:v===_[1]?n.x=h+e:v===_[2]?n.z=u-e:n.z=d+e}}return o}function gn(n,e,t,i,s=Ol){let r=t-n,o=i-e,a=hi(n),l=ui(e);if(s(Vi(a,l)))return 0;let c=hi(t),h=ui(i),u=r>0?1:-1,d=o>0?1:-1,f=n/1.6+B.W/2,g=e/1.6+B.H/2,x=r/1.6,p=o/1.6,m=x!==0?Math.abs(1/x):1/0,_=p!==0?Math.abs(1/p):1/0,v=x!==0?(u>0?Math.floor(f)+1-f:f-Math.floor(f))*m:1/0,y=p!==0?(d>0?Math.floor(g)+1-g:g-Math.floor(g))*_:1/0;for(let w=0;w<200;w++){if(a===c&&l===h)return-1;let S;if(v<y?(S=v,v+=m,a+=u):(S=y,y+=_,l+=d),S>1)return-1;if(s(Vi(a,l)))return S}return-1}var Bu=(n,e,t,i)=>gn(n,e,t,i)<0;function xm(n,e,t,i){let s=B.W,r=B.H,o=tt(hi(n),0,s-1),a=tt(ui(e),0,r-1),l=tt(hi(t),0,s-1),c=tt(ui(i),0,r-1);if(xs(Vi(l,c))){let S=w1(l,c);if(!S)return null;l=S[0],c=S[1]}let h=s*r,u=new Float32Array(h).fill(1e9),d=new Int32Array(h).fill(-1),f=new Uint8Array(h),g=[a*s+o];u[g[0]]=0;let x=S=>{let R=Math.abs(S%s-l),D=Math.abs((S/s|0)-c);return Math.max(R,D)+.414*Math.min(R,D)},p=c*s+l;for(;g.length;){let S=0,R=1e9;for(let F=0;F<g.length;F++){let k=u[g[F]]+x(g[F]);k<R&&(R=k,S=F)}let D=g[S];if(g[S]=g[g.length-1],g.pop(),D===p)break;f[D]=1;let M=D%s,T=D/s|0;for(let F=-1;F<=1;F++)for(let k=-1;k<=1;k++){if(!k&&!F)continue;let O=M+k,L=T+F;if(O<0||L<0||O>=s||L>=r||xs(B.rows[L][O])||k&&F&&(xs(B.rows[T][O])||xs(B.rows[L][M])))continue;let U=L*s+O;if(f[U])continue;let q=u[D]+(k&&F?1.414:1)+(B.rows[L][O]==='"'?.15:0);q<u[U]&&(u[U]>=1e9&&g.push(U),u[U]=q,d[U]=D)}}if(d[p]<0&&p!==a*s+o)return null;let m=[];for(let S=p;S>=0;S=d[S])m.push(S);m.reverse();let _=m.map(S=>({x:cn(S%s),z:hn(S/s|0)}));_[_.length-1]={x:tt(t,cn(l)-1.6*.45,cn(l)+1.6*.45),z:tt(i,hn(c)-1.6*.45,hn(c)+1.6*.45)};let v=[],y={x:n,z:e},w=0;for(;w<_.length;){let S=_.length-1;for(;S>w&&!Hu(y.x,y.z,_[S].x,_[S].z);)S--;v.push(_[S]),y=_[S],w=S+1}return v}function Hu(n,e,t,i){let s=t-n,r=i-e,o=Math.hypot(s,r)||1,a=-r/o*.42,l=s/o*.42;return gn(n+a,e+l,t+a,i+l,xs)<0&&gn(n-a,e-l,t-a,i-l,xs)<0}function w1(n,e){for(let t=1;t<6;t++)for(let i=-t;i<=t;i++)for(let s=-t;s<=t;s++)if(Math.max(Math.abs(s),Math.abs(i))===t&&!xs(Vi(n+s,e+i)))return[n+s,e+i];return null}function $o(n,e,t,i){return n.onBeforeCompile=s=>{s.uniforms.uTime=Sn.time,s.uniforms.uPush=Sn.push,s.uniforms.uMe=Sn.me,i&&(s.fragmentShader=`uniform vec3 uMe;
varying vec3 vWPg;
`+s.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        float keep = smoothstep(1.2, 2.8, distance(vWPg, cameraPosition));
        if(uMe.z > 0.0) keep = min(keep, mix(0.35, 1.0, smoothstep(uMe.z * 0.6, uMe.z, distance(vWPg.xz, uMe.xy))));
        if(ign > keep) discard;`)),s.vertexShader=`uniform float uTime;
uniform vec3 uPush[10];
varying vec3 vWPg;
`+s.vertexShader.replace("#include <project_vertex>",`
      vec4 mvPosition = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
      #endif
      vec4 wp = modelMatrix * mvPosition;
      float hw = clamp(position.y / ${e.toFixed(3)}, 0.0, 1.0); hw *= hw;
      float ph = wp.x * 0.35 + wp.z * 0.27;
      wp.x += (sin(uTime * 1.7 + ph) * 0.6 + sin(uTime * 3.1 + ph * 2.3) * 0.25) * ${t.toFixed(3)} * hw;
      wp.z += cos(uTime * 1.3 + ph * 1.2) * ${(t*.6).toFixed(3)} * hw;
      ${i?`for(int i = 0; i < 10; i++){
        vec2 d = wp.xz - uPush[i].xy; float l = length(d);
        float k = uPush[i].z > 0.01 ? 1.0 - smoothstep(0.0, uPush[i].z, l) : 0.0;
        wp.xz += d / max(l, 0.01) * k * 0.55 * hw; wp.y -= k * 0.45 * hw * ${e.toFixed(3)};
      }`:""}
      vWPg = wp.xyz;
      mvPosition = viewMatrix * wp;
      gl_Position = projectionMatrix * mvPosition;`)},n.customProgramCacheKey=()=>"wind"+e+t+i,n}function T1(){return ps(256,256,(n,e,t)=>{n.fillStyle="#3E7F2C",n.fillRect(0,0,e,t);let i=["#2F6A22","#4C9634","#5AAA3A","#3A7A28","#6CBB45","#2A5C1E"];for(let s=0;s<900;s++){let r=z(0,e),o=z(0,t),a=z(5,11),l=z(0,Le);n.fillStyle=Ho(i);for(let c of[-e,0,e])for(let h of[-t,0,t])n.beginPath(),n.ellipse(r+c,o+h,a,a*.55,l,0,Le),n.fill()}n.globalAlpha=.25,n.fillStyle="#B9E87A";for(let s=0;s<160;s++){let r=z(0,e),o=z(0,t);n.beginPath(),n.ellipse(r,o,3,1.6,z(0,Le),0,Le),n.fill()}},{repeat:!0})}var A1=`
  if(uMe.z > 0.0){
    vec3 P = vec3(uMe.x, 1.0, uMe.y), C = cameraPosition, D = P - C;
    float t = dot(vWP - C, D) / max(dot(D, D), 1e-4);
    if(t > 0.0 && t < 1.08){
      float r = mix(0.7, 1.7, clamp(t, 0.0, 1.0)), d = length(vWP - (C + D * t));
      float keep = mix(0.14, 1.0, smoothstep(r * 0.55, r, d));
      float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
      if(ign > keep) discard;
    }
  }`;function R1(n,e,t){return n.onBeforeCompile=i=>{t&&(i.uniforms.uMe=Sn.me,i.fragmentShader=`uniform vec3 uMe;
`+i.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
`+A1)),i.vertexShader=`varying vec3 vWP; varying vec3 vWN;
`+i.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vWP = (modelMatrix * vec4(transformed, 1.0)).xyz; vWN = normalize(mat3(modelMatrix) * objectNormal);`),i.fragmentShader=`varying vec3 vWP; varying vec3 vWN;
`+i.fragmentShader.replace("#include <map_fragment>",`
      ${gt?`vec3 an = abs(vWN);   // phones: one texture read along the main axis instead of three
      vec2 tuv = an.y > an.x && an.y > an.z ? vWP.xz : an.x > an.z ? vWP.zy : vWP.xy;
      diffuseColor *= texture2D(map, tuv * ${e.toFixed(3)});`:`vec3 bw = pow(abs(vWN), vec3(4.0)); bw /= max(bw.x + bw.y + bw.z, 1e-4);
      vec4 tx = texture2D(map, vWP.zy * ${e.toFixed(3)}), ty = texture2D(map, vWP.xz * ${e.toFixed(3)}), tz = texture2D(map, vWP.xy * ${e.toFixed(3)});
      diffuseColor *= tx * bw.x + ty * bw.y + tz * bw.z;`}`)},n.customProgramCacheKey=()=>"tri"+e+(t?"see":""),n}function C1(n,e,t,i){let s=B.W*B.H>700,r=s?gt?1.2:1.5:gt?1.7:2.2,o=.32,a=new vi(n,e,t,Math.ceil(n*r),Math.ceil(e*r),Math.ceil(t*r));a.deleteAttribute("normal"),a.deleteAttribute("uv"),a=om(a);let l=a.attributes.position,c=n/2-o,h=e/2-o,u=t/2-o,d=new P,f=new P,g=new Float32Array(l.count*3);for(let x=0;x<l.count;x++){d.fromBufferAttribute(l,x);let p=tt(d.x,-c,c),m=tt(d.y,-h,h),_=tt(d.z,-u,u);f.set(d.x-p,d.y-m,d.z-_).normalize();let v=.07*(Math.sin(d.x*4.1+i)*Math.sin(d.z*3.7-i)+Math.sin(d.y*5.3+d.x*2.1+i*2))+(d.y>h-.01?.05*Math.sin(d.x*2.3+d.z*2.9+i):0);d.set(p,m,_).addScaledVector(f,o+v),l.setXYZ(x,d.x,d.y+e/2,d.z);let y=tt((d.y+e/2)/e,0,1),w=.55+.45*Math.pow(y,.7)+z(-.05,.05);g[x*3]=w*.95,g[x*3+1]=w,g[x*3+2]=w*.9}return a.setAttribute("color",new ht(g,3)),a.computeVertexNormals(),a}function P1(){let n=[[0,0],[.78,0],[.62,.12],[.55,.3],[.53,.7],[.56,.84],[.5,.86]].map(s=>new ne(s[0],s[1])),e=new Os(n,18),t=new Ln(.5,18);t.rotateX(-Math.PI/2),t.translate(0,.86,0);let i=e.attributes.position;for(let s=0;s<i.count;s++){let r=i.getX(s),o=i.getZ(s),a=Math.atan2(o,r),l=i.getY(s),c=1+.07*Math.sin(a*7)+.04*Math.sin(a*13+l*6);i.setX(s,r*c),i.setZ(s,o*c)}return e.computeVertexNormals(),{side:e,top:t}}var Hr=new De,Gr=new ln,Yo=new P,Gu=new P,Vu=new P(0,1,0);function Hs(n,e,t,i={}){let s=Mi[n];if(!s||!e.length)return[];let r=[];for(let o of s.parts){let a=t(o);if(!a)continue;let l=new zi(o.geometry,a,e.length);e.forEach((c,h)=>{Gr.setFromAxisAngle(Vu,c.rot||0),Yo.setScalar(c.s||1),c.sy&&(Yo.y*=c.sy),Hr.compose(Gu.set(c.x,c.y||0,c.z),Gr,Yo).multiply(o.matrix),l.setMatrixAt(h,Hr),c.color&&l.setColorAt&&l.setColorAt(h,c.color)}),l.castShadow=!!i.cast,l.receiveShadow=i.receive!==!1,l.computeBoundingSphere(),B.group.add(l),r.push(l)}return r}function Wu(n){B.group&&(pe.remove(B.group),B.group.traverse(t=>{t.geometry&&!t.userData.shared&&t.geometry.dispose()}));let e=fm[n];Object.assign(B,{map:e,W:e.W,H:e.H,rows:e.rows.map(t=>[...t]),hx:e.W*1.6/2,hz:e.H*1.6/2,spawns:{0:[],1:[],ffa:[]},grassTiles:[],crates:[],mine:null}),B.group=new zt,pe.add(B.group),tm(B.hx+2,B.hz+2);for(let t=0;t<B.H;t++)for(let i=0;i<B.W;i++){let s=B.rows[t][i];if(s==="b"&&B.spawns[0].push({x:cn(i),z:hn(t)-3.2}),s==="r"&&B.spawns[1].push({x:cn(i),z:hn(t)+3.2}),s==="M"&&(B.mine={x:cn(i),z:hn(t)}),s==="s"){let r=cn(i),o=hn(t),a=Math.hypot(r,o)||1;B.spawns.ffa.push({x:r-r/a*1,z:o-o/a*1})}s==='"'&&B.grassTiles.push([i,t])}return B.spawns[0].length||(B.spawns[0]=B.spawns[1]=B.spawns.ffa),iu(7331,()=>{L1(),D1(),z1(),N1(),O1(),k1(),B1(),V1()}),B}function L1(){let e=B.W*40,t=B.H*40,i=ps(e,t,d=>{for(let g=0;g<B.H;g++)for(let x=0;x<B.W;x++){let p=(g+x)%2===0;d.fillStyle=p?"#7CC24E":"#71B847",d.fillRect(x*40,g*40,40,40)}let f=(g,x,p)=>{let m=d.createRadialGradient(g,x,p*.2,g,x,p);m.addColorStop(0,"rgba(201,164,106,0.95)"),m.addColorStop(.7,"rgba(190,156,98,0.6)"),m.addColorStop(1,"rgba(190,156,98,0)"),d.fillStyle=m,d.beginPath(),d.arc(g,x,p,0,Le),d.fill()};for(let g=0;g<B.H;g++)for(let x=0;x<B.W;x++){let p=B.rows[g][x],m=(x+.5)*40,_=(g+.5)*40;p==="M"&&f(m,_,40*2.6),(p==="b"||p==="r"||p==="s")&&f(m,_,40*1.1)}for(let g=0;g<e*t/60;g++){let x=z(0,e),p=z(0,t);d.strokeStyle=Ho(["rgba(70,140,40,.5)","rgba(150,215,90,.45)","rgba(55,115,35,.45)","rgba(180,230,120,.3)"]),d.lineWidth=z(1,2.2),d.beginPath(),d.moveTo(x,p),d.lineTo(x+z(-2,2),p-z(3,7)),d.stroke()}d.filter="blur(6px)";for(let g=0;g<B.H;g++)for(let x=0;x<B.W;x++){let p=B.rows[g][x];p==="#"?(d.fillStyle="rgba(30,60,20,.55)",d.fillRect(x*40-6,g*40-6,52,52)):p==="R"||p==="T"?(d.fillStyle="rgba(30,60,20,.35)",d.beginPath(),d.arc((x+.5)*40,(g+.5)*40,40*.65,0,Le),d.fill()):p==='"'?(d.fillStyle="rgba(40,90,25,.35)",d.fillRect(x*40,g*40,40,40)):p==="~"&&(d.fillStyle="#4B5E2E",d.fillRect(x*40-4,g*40-4,48,48))}d.filter="none";for(let g=0;g<B.H;g++)for(let x=0;x<B.W;x++){let p=B.rows[g][x];p!=="b"&&p!=="r"&&p!=="s"||(d.strokeStyle=p==="b"?"rgba(80,190,255,.85)":p==="r"?"rgba(255,90,90,.85)":"rgba(255,215,90,.8)",d.lineWidth=4,d.beginPath(),d.arc((x+.5)*40,(g+.5)*40,40*.38,0,Le),d.stroke())}});i.anisotropy=8;let s=.8,r=Math.round(B.W*1.6/s),o=Math.round(B.H*1.6/s),a=new Bt(B.W*1.6,B.H*1.6,r,o);a.rotateX(-Math.PI/2);let l=a.attributes.position;for(let d=0;d<l.count;d++){let f=l.getX(d),g=l.getZ(d),x=0;for(let[p,m]of[[0,0],[.35,0],[-.35,0],[0,.35],[0,-.35]])bi(f+p,g+m)==="~"&&(x+=.2);l.setY(d,-x*.7)}a.computeVertexNormals();let c=new ae(a,ft({map:i,roughness:.95}));c.receiveShadow=!0,B.group.add(c);let h=ps(256,256,(d,f,g)=>{d.fillStyle="#5E9E3A",d.fillRect(0,0,f,g);for(let x=0;x<1400;x++){let p=z(0,f),m=z(0,g);d.strokeStyle=Ho(["rgba(40,100,30,.5)","rgba(120,190,70,.45)","rgba(70,130,40,.5)"]),d.lineWidth=z(1,2),d.beginPath(),d.moveTo(p,m),d.lineTo(p+z(-2,2),m-z(3,8)),d.stroke()}},{repeat:!0});h.repeat.set(40,40);let u=new ae(new Bt(260,260),ft({map:h,roughness:1}));u.rotation.x=-Math.PI/2,u.position.y=-.02,u.receiveShadow=!0,B.group.add(u)}function I1(){return B.shared.hedge||(B.shared.hedge=R1(ft({map:T1(),vertexColors:!0,roughness:.85,color:"#E8FFD8"}),.55,!0)),B.shared.hedge}var Xu=2.6;function D1(){let n=[],e=new Set,t=B.W,i=B.H,s=(h,u)=>Vi(h,u)==="#";for(let h=0;h<i;h++)for(let u=0;u<t;u++){if(!s(u,h)||e.has(h*t+u))continue;let d=u;for(;s(d+1,h);)d++;if(d>u){for(let f=u;f<=d;f++)e.add(h*t+f);Br(n,cn(u)-1.6/2,hn(h)-1.6/2,(d-u+1)*1.6,1.6)}}for(let h=0;h<t;h++)for(let u=0;u<i;u++){if(!s(h,u)||e.has(u*t+h))continue;let d=u;for(;s(h,d+1)&&!e.has((d+1)*t+h);)d++;for(let f=u;f<=d;f++)e.add(f*t+h);Br(n,cn(h)-1.6/2,hn(u)-1.6/2,1.6,(d-u+1)*1.6)}let r=B.hx,o=B.hz,a=1.3;Br(n,-r-a,-o-a,B.W*1.6+2*a,a,3),Br(n,-r-a,o,B.W*1.6+2*a,a,3),Br(n,-r-a,-o,a,B.H*1.6,3),Br(n,r,-o,a,B.H*1.6,3);let l=new ae(Vo(n),I1());l.castShadow=l.receiveShadow=!0,B.group.add(l),n.forEach(h=>h.dispose());let c=[];for(let h=0;h<i;h++)for(let u=0;u<t;u++)s(u,h)&&Hi&&z()<.3&&c.push({x:cn(u)+z(-.4,.4),y:Xu-.3,z:hn(h)+z(-.4,.4),rot:z(0,Le),s:z(.32,.42)});Hs("Bush_Common",c,()=>_m("#4FA23A"),{cast:!1})}function Br(n,e,t,i,s,r=Xu){let o=C1(i-.06,r,s-.06,z(0,100));o.translate(e+i/2,0,t+s/2),n.push(o)}function _m(n){let e="leaf"+n;if(!B.shared[e]){let t=Mi.Bush_Common.parts[0].map;B.shared[e]=$o(ft({map:t,color:n,alphaTest:.45,side:Tt,roughness:.8}),1.6,.05,!1)}return B.shared[e]}var vm=3e3,Gi=null,qo=new vt;function F1(){let n=new vi(1.3,1.1,1.3);return n.translate(0,.55,0),n}function U1(){return ps(128,128,(n,e,t)=>{n.fillStyle="#9A6B3C",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)n.fillStyle=i%2?"#8A5E33":"#A87645",n.fillRect(0,i*32+2,e,28);n.strokeStyle="#5E3D1E",n.lineWidth=8,n.strokeRect(4,4,e-8,t-8),n.beginPath(),n.moveTo(8,8),n.lineTo(e-8,t-8),n.stroke(),n.fillStyle="#FFD45A",n.beginPath(),n.arc(e/2,t/2,15,0,Le),n.fill(),n.fillStyle="#FFF4C0",n.beginPath(),n.arc(e/2-4,t/2-4,5,0,Le),n.fill()})}function N1(){B.crates=[];for(let n=0;n<B.H;n++)for(let e=0;e<B.W;e++)B.rows[n][e]==="C"&&B.crates.push({c:e,r:n,x:cn(e),z:hn(n),hp:vm,shake:0,rot:Math.floor(z(0,4))*Math.PI/2,alive:!0});if(!B.crates.length){Gi=null;return}Gi=new zi(F1(),ft({map:U1(),roughness:.85}),B.crates.length),Gi.castShadow=Gi.receiveShadow=!0,B.crates.forEach((n,e)=>{n.i=e,Zo(n)}),B.group.add(Gi)}function Zo(n){let e=n.alive?1:0,t=n.shake>0?Math.sin(n.shake*60)*.06*n.shake/.2:0;qo.position.set(n.x+t,0,n.z),qo.rotation.set(0,n.rot+t,0),qo.scale.set(e,e*(1-t*.5),e),qo.updateMatrix(),Gi.setMatrixAt(n.i,qo.matrix),Gi.instanceMatrix.needsUpdate=!0}var ym=(n,e)=>B.crates.find(t=>t.alive&&t.c===n&&t.r===e)||null;function qu(n,e){return!n||!n.alive?!1:(n.hp-=e,n.shake=.2,n.hp<=0?(n.alive=!1,B.rows[n.r][n.c]=".",Zo(n),!0):(Zo(n),!1))}function Mm(){if(Gi)for(let n of B.crates)n.alive=!0,n.hp=vm,n.shake=0,B.rows[n.r][n.c]="C",Zo(n)}function bm(n){if(Gi)for(let e of B.crates)e.shake>0&&(e.shake=Math.max(0,e.shake-n),Zo(e))}function z1(){let n=[[],[],[]],e=[];for(let l=0;l<B.H;l++)for(let c=0;c<B.W;c++){let h=B.rows[l][c],u=cn(c),d=hn(l);if(h==="R"){let f=(l*7+c*3)%3;n[f].push({x:u,z:d,y:-.05,rot:z(0,Le),s:.56})}h==="T"&&e.push({x:u,z:d,rot:z(0,Le),s:z(.95,1.05)})}let t=ft({map:Mi.Rock_Medium_1.parts[0].map,roughness:.9,color:"#D8E0D0"});n.forEach((l,c)=>Hs("Rock_Medium_"+(c+1),l,()=>t,{cast:!0}));let{side:i,top:s}=P1(),r=ps(128,128,(l,c,h)=>{l.fillStyle="#6B4A2E",l.fillRect(0,0,c,h);for(let u=0;u<40;u++){let d=z(0,c);l.strokeStyle=Ho(["#4E3420","#7E5A38","#5A3D25"]),l.lineWidth=z(2,6),l.beginPath(),l.moveTo(d,0),l.bezierCurveTo(d+z(-8,8),h*.3,d+z(-8,8),h*.7,d+z(-4,4),h),l.stroke()}},{repeat:!0});r.repeat.set(3,1);let o=ps(128,128,(l,c,h)=>{l.fillStyle="#E2B97A",l.fillRect(0,0,c,h);for(let u=4;u<64;u+=z(4,7))l.strokeStyle=`rgba(150,95,45,${z(.35,.7)})`,l.lineWidth=z(1,2.5),l.beginPath(),l.arc(64+z(-1,1),64+z(-1,1),u,0,Le),l.stroke();l.strokeStyle="#6B4A2E",l.lineWidth=8,l.beginPath(),l.arc(64,64,62,0,Le),l.stroke()}),a=(l,c)=>{let h=new zi(l,c,e.length);e.forEach((u,d)=>{Gr.setFromAxisAngle(Vu,u.rot),Hr.compose(Gu.set(u.x,0,u.z),Gr,Yo.setScalar(u.s)),h.setMatrixAt(d,Hr)}),h.castShadow=h.receiveShadow=!0,B.group.add(h)};e.length&&(a(i,ft({map:r,roughness:.9})),a(s,ft({map:o,roughness:.8})))}var pm=[];function Ou(n){let e=[],t=[],i=[],s=[],r=new se,o=new se;for(let l=0;l<n;l++){let c=z(-.82,.82),h=z(-.82,.82),u=z(1.15,1.65),d=z(.08,.13),f=z(0,Le),g=z(.15,.45),x=z(0,Le),p=Math.cos(f),m=Math.sin(f);r.setHSL(z(.27,.31),z(.6,.75),z(.1,.15)),o.setHSL(z(.22,.28),z(.6,.8),z(.3,.4));let _=e.length/3,v=[[0,1],[.45,.8],[.8,.45],[1,0]];for(let[y,w]of v){let S=c+Math.cos(x)*g*y*y,R=h+Math.sin(x)*g*y*y,D=u*y*(1-g*g*.3*y),M=y===1?0:1;for(let T of M?[-1,1]:[0]){e.push(S+p*d*w*T*.5,D,R+m*d*w*T*.5);let F=r.clone().lerp(o,Math.pow(y,.8));t.push(F.r,F.g,F.b),i.push(-m*.7,.5,p*.7)}}s.push(_,_+1,_+3,_,_+3,_+2,_+2,_+3,_+5,_+2,_+5,_+4,_+4,_+5,_+6)}let a=new wt;return a.setAttribute("position",new He(e,3)),a.setAttribute("normal",new He(i,3)),a.setAttribute("color",new He(t,3)),a.setIndex(s),a}function O1(){let n=Hi?70:gt?40:56,e=[Ou(n),Ou(n),Ou(n)],t=$o(ft({vertexColors:!0,roughness:1,side:Tt,envMapIntensity:.5}),1.6,.12,!0);pm=[],e.forEach((i,s)=>{let r=B.grassTiles.filter((a,l)=>l%3===s);if(!r.length)return;let o=new zi(i,t,r.length);r.forEach(([a,l],c)=>{Gr.setFromAxisAngle(Vu,Math.floor(z(0,4))*Math.PI/2),Hr.compose(Gu.set(cn(a),0,hn(l)),Gr,Yo.set(1,z(.92,1.08),1)),o.setMatrixAt(c,Hr)}),o.receiveShadow=!0,o.computeBoundingSphere(),B.group.add(o),pm.push(o)})}function k1(){let n=[];for(let r=0;r<B.H;r++)for(let o=0;o<B.W;o++)B.rows[r][o]==="~"&&n.push([o,r]);if(!n.length)return;let e=n.map(([r,o])=>{let a=new Bt(1.6+.5,1.6+.5);return a.rotateX(-Math.PI/2),a.translate(cn(r),-.16,hn(o)),a}),t=ft({color:"#4FB5C8",roughness:.12,metalness:.1,transparent:!0,opacity:.82});t.onBeforeCompile=r=>{r.uniforms.uTime=Sn.time,r.vertexShader=`varying vec3 vWP2;
`+r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vWP2 = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=`uniform float uTime; varying vec3 vWP2;
`+r.fragmentShader.replace("#include <map_fragment>",`
      float rip = sin(vWP2.x * 5.0 + uTime * 1.6) * sin(vWP2.z * 4.3 - uTime * 1.2) + sin((vWP2.x + vWP2.z) * 7.0 + uTime * 2.3) * 0.5;
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.85, 1.0, 1.0), smoothstep(0.9, 1.4, rip) * 0.5);`)};let i=new ae(Vo(e),t);i.receiveShadow=!0,B.group.add(i);let s=n.filter(()=>z()<.7).map(([r,o])=>({x:cn(r)+z(-.4,.4),y:-.14,z:hn(o)+z(-.4,.4),rot:z(0,Le),s:z(.5,.7)}));Hs("Plant_1",s.map(r=>Object.assign(r,{sy:.25})),()=>_m("#6DBB4A"))}function B1(){let n=[],e=[],t=[],i=[];for(let o=0;o<B.H;o++)for(let a=0;a<B.W;a++){let l=B.rows[o][a],c=cn(a),h=hn(o);l===","&&n.push({x:c+z(-.3,.3),z:h+z(-.3,.3),rot:z(0,Le),s:z(.32,.4)}),l==="."&&z()<.22&&e.push({x:c+z(-.6,.6),z:h+z(-.6,.6),rot:z(0,Le),s:z(.3,.42),color:new se().setHSL(z(.23,.29),.6,z(.42,.5))}),l==="."&&z()<.06&&t.push({x:c+z(-.6,.6),z:h+z(-.6,.6),rot:z(0,Le),s:z(.4,.7)}),l==="."&&z()<.05&&i.push({x:c+z(-.6,.6),z:h+z(-.6,.6),rot:z(0,Le),s:z(.35,.5)})}let s=$o(ft({map:Mi.Grass_Common_Short.parts[0].map,roughness:.9,side:Tt,color:"#A8E07A"}),1.3,.06,!0);Hs("Grass_Common_Short",e,()=>s),Hs("Flower_3_Group",n,o=>o.matName==="Flowers"?H1():mm("#5DB043"));let r=ft({map:Mi.Pebble_Round_1.parts[0].map,roughness:.9});Hs("Pebble_Round_1",t,()=>r),Hs("Clover_1",i,()=>mm("#5AAE42"))}function H1(){return B.shared.fl||(B.shared.fl=$o(ft({map:Mi.Flower_3_Group.parts.find(n=>n.matName==="Flowers").map,alphaTest:.4,side:Tt,roughness:.7}),2,.05,!0))}function mm(n){let e="leaves"+n;if(!B.shared[e]){let t=Mi.Fern_1.parts[0];B.shared[e]=$o(ft({map:t.map,color:n,alphaTest:.4,side:Tt,roughness:.8}),2,.05,!0)}return B.shared[e]}function G1(n,e,t){return ps(2048,256,(i,s,r)=>{iu(n,()=>{let o=(a,l,c,h)=>{let u=z()<.45,d=[];if(u)for(let f=0;f<4;f++)d.push(["t",l-c*(.35+f*.42),c*(.75-f*.15)]);else for(let f=0;f<5;f++)d.push(["c",z(-.5,.5)*c,l-c*z(.7,1.6),c*z(.45,.7)]);i.fillStyle=h;for(let f of[-s,0,s]){let g=a+f;for(let x of d)i.beginPath(),x[0]==="t"?(i.moveTo(g-x[2],x[1]+c*.45),i.lineTo(g,x[1]-c*.5),i.lineTo(g+x[2],x[1]+c*.45)):i.arc(g+x[1],x[2],x[3],0,Le),i.fill();i.fillRect(g-c*.08,l-c*.6,c*.16,r)}};for(let a=0;a<s;a+=z(26,48))o(a,r*.92,z(55,95),t);for(let a=0;a<s;a+=z(30,56))o(a,r,z(48,80),e);i.fillStyle=e,i.fillRect(0,r*.86,s,r)})},{repeat:!0})}function V1(){let n=Math.hypot(B.hx,B.hz);for(let[e,t,i,s,r,o]of[[n+18,15,11,"#2C4A22","#3E6230","#FFFFFF"],[n+34,22,23,"#3A4E38","#4E6448","#E8E0E0"]]){let a=G1(i,s,r);a.repeat.set(4,1);let l=new pn(e,e,t,48,1,!0);l.translate(0,t/2-.5,0);let c=new ae(l,new ke({map:a,alphaTest:.5,side:Gt,color:o}));B.group.add(c)}}var Ko={"\u0413\u0440\u0438\u0431\u044B \u043F\u0440\u043E\u0441\u044B\u043F\u0430\u044E\u0442\u0441\u044F\u2026":"Mushrooms are waking up\u2026","\u0413\u0440\u0438\u0431\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0430":"Mushroom Arena","\u0412\u044B\u0431\u0435\u0440\u0438 \u0433\u0435\u0440\u043E\u044F":"Pick a hero",\u0421\u043F\u043E\u0440\u044B:"Spore Rush","3 \u043D\u0430 3 \xB7 \u0441\u043E\u0431\u0435\u0440\u0438 10 \u0441\u043F\u043E\u0440 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438 \u0438\u0445 15 \u0441\u0435\u043A\u0443\u043D\u0434":"3 vs 3 \xB7 collect 10 spores and hold them for 15 seconds",\u0411\u043E\u0442\u044B:"Bots",\u041B\u0451\u0433\u043A\u0438\u0435:"Easy",\u041E\u0431\u044B\u0447\u043D\u044B\u0435:"Normal",\u0421\u043B\u043E\u0436\u043D\u044B\u0435:"Hard","\u0412 \u0431\u043E\u0439!":"Fight!",\u0413\u0440\u0430\u0444\u0438\u043A\u0430:"Graphics",\u0411\u044B\u0441\u0442\u0440\u0430\u044F:"Fast",\u041A\u0440\u0430\u0441\u0438\u0432\u0430\u044F:"Pretty",\u0417\u0432\u0443\u043A:"Sound",\u042D\u0444\u0444\u0435\u043A\u0442\u044B:"Effects",\u041C\u0443\u0437\u044B\u043A\u0430:"Music",\u041F\u0430\u0443\u0437\u0430:"Pause",\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C:"Resume","\u0412\u044B\u0439\u0442\u0438 \u0432 \u043C\u0435\u043D\u044E":"Quit to menu",\u0410\u0442\u0430\u043A\u0430:"Attack","\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0431\u0435\u0433, \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043A\u0430\u043C\u0435\u0440\u044B. \u041A\u043D\u043E\u043F\u043A\u0430 \u0430\u0442\u0430\u043A\u0438: \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u2014 \u0430\u0432\u0442\u043E\u043F\u0440\u0438\u0446\u0435\u043B, \u0441 \u043F\u0440\u043E\u0442\u044F\u0436\u043A\u043E\u0439 \u2014 \u0446\u0435\u043B\u0438\u0448\u044C\u0441\u044F \u0441\u0430\u043C. \u0417\u0432\u0435\u0437\u0434\u0430 \u2014 \u0441\u0443\u043F\u0435\u0440.":"Left thumb to run, right thumb to turn the camera. Attack button: a quick tap auto-aims, hold and drag to aim yourself. The star is your super.","WASD \u2014 \u0431\u0435\u0433, \u043C\u044B\u0448\u044C \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \u0438 \u043F\u0440\u0438\u0446\u0435\u043B, \u041B\u041A\u041C \u2014 \u0430\u0442\u0430\u043A\u0430, \u041F\u041A\u041C \u0438\u043B\u0438 E \u2014 \u0441\u0443\u043F\u0435\u0440, Esc \u2014 \u043F\u0430\u0443\u0437\u0430.":"WASD to run, mouse to look and aim, LMB to attack, RMB or E for the super, Esc to pause.",\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435:"Health",\u0423\u0440\u043E\u043D:"Damage",\u0414\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C:"Range",\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C:"Speed",\u043C:"m",\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438:"Settings",\u0421\u0440\u0435\u0434\u043D\u044F\u044F:"Medium",\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:"Sensitivity","\u0421\u0447\u0451\u0442\u0447\u0438\u043A FPS":"FPS counter",\u0412\u044B\u043A\u043B:"Off",\u0412\u043A\u043B:"On",\u0413\u043E\u0442\u043E\u0432\u043E:"Done","\u0418\u0433\u0440\u0430 \u0441\u0430\u043C\u0430 \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E, \u0435\u0441\u043B\u0438 \u043A\u0430\u0434\u0440\u043E\u0432 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442. \u041F\u0440\u0438 \u0441\u043C\u0435\u043D\u0435 \u0433\u0440\u0430\u0444\u0438\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044F.":"The game lowers the quality by itself when frames run short. Changing graphics reloads the page.",\u0428\u043B\u044F\u043F\u043D\u0438\u043A:"Capper",\u0411\u0430\u0431\u0430\u0445:"Kaboom",\u0416\u0430\u043B\u043A\u0430:"Stinga",\u043C\u0443\u0445\u043E\u043C\u043E\u0440:"fly agaric","\u0436\u0443\u043A-\u0431\u043E\u043C\u0431\u0430\u0440\u0434\u0438\u0440":"bombardier beetle",\u043E\u0441\u0430:"wasp",\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A:"Shotgun",\u041C\u0435\u0442\u0430\u0442\u0435\u043B\u044C:"Thrower",\u0421\u043D\u0430\u0439\u043F\u0435\u0440:"Sniper","\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A \u0431\u044C\u0451\u0442 \u0432\u0435\u0435\u0440\u043E\u043C: \u0432\u0431\u043B\u0438\u0437\u0438 \u0440\u0430\u0437\u043D\u043E\u0441\u0438\u0442 \u043B\u044E\u0431\u043E\u0433\u043E.":"A spore shotgun that fires in a fan: up close it flattens anyone.","\u041A\u0438\u0434\u0430\u0435\u0442 \u0431\u043E\u043C\u0431\u044B \u043D\u0430\u0432\u0435\u0441\u043E\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B. \u0412\u0437\u0440\u044B\u0432 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0433\u043E\u0440\u044F\u0449\u0443\u044E \u043B\u0443\u0436\u0443.":"Lobs bombs over walls. Each blast leaves a burning puddle.","\u0414\u0430\u043B\u044C\u043D\u043E\u0431\u043E\u0439\u043D\u043E\u0435 \u0436\u0430\u043B\u043E: \u0447\u0435\u043C \u0434\u0430\u043B\u044C\u0448\u0435 \u0446\u0435\u043B\u044C, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u043D\u0435\u0435.":"A long-range stinger: the further the target, the harder it hits.","\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0432\u0435\u0435\u0440":"Spore Fan","\u0413\u0440\u0438\u0431\u043D\u043E\u0439 \u0437\u0430\u043B\u043F":"Mushroom Volley","\u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0437\u0430\u043B\u043F \u043E\u0442\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u0432\u0440\u0430\u0433\u043E\u0432":"a wide volley that knocks enemies back","\u0416\u0443\u0447\u0438\u043D\u0430\u044F \u0431\u043E\u043C\u0431\u0430":"Beetle Bomb","\u041A\u043E\u0432\u0440\u043E\u0432\u0430\u044F \u0431\u043E\u043C\u0431\u0451\u0436\u043A\u0430":"Carpet Bombing","\u043F\u044F\u0442\u044C \u0431\u043E\u043C\u0431 \u043B\u043E\u0436\u0430\u0442\u0441\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u043E\u0439":"five bombs land in a line",\u0416\u0430\u043B\u043E:"Stinger","\u041F\u0440\u043E\u043D\u0437\u0430\u044E\u0449\u0438\u0439 \u043B\u0443\u0447":"Piercing Beam","\u043B\u0443\u0447 \u043F\u0440\u043E\u0448\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0435\u043D\u044B \u0438 \u0432\u0441\u0435\u0445 \u043D\u0430 \u043F\u0443\u0442\u0438":"a beam that goes through walls and everyone in its way","\u0441\u043F\u043E\u0440 \u0432\u0435\u0435\u0440\u043E\u043C":"spores in a fan","\u0431\u043E\u043C\u0431\u0430 \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B, \u0433\u043E\u0440\u044F\u0449\u0430\u044F \u043B\u0443\u0436\u0430":"a bomb over walls, a burning puddle","\u0434\u0430\u043B\u044C\u043D\u0438\u0439 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u0443\u0440\u043E\u043D \u0440\u0430\u0441\u0442\u0451\u0442 \u0441 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C":"a long shot, damage grows with distance",\u041A\u0430\u0442\u044B\u0448:"Rolly",\u043C\u043E\u043A\u0440\u0438\u0446\u0430:"woodlouse",\u0420\u0438\u043A\u043E\u0448\u0435\u0442:"Ricochet","\u0421\u043A\u0430\u0447\u0443\u0449\u0438\u0439 \u043A\u0430\u0442\u044B\u0448":"Bouncing Pebble","\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043A\u0430\u0442\u044B\u0448":"Big Roller","\u0420\u043E\u0433\u0430\u0442\u043A\u0430 \u0441\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0441\u043A\u0430\u0447\u0443\u0449\u0438\u043C\u0438 \u043A\u0430\u0442\u044B\u0448\u0430\u043C\u0438: \u043E\u043D\u0438 \u043E\u0442\u043B\u0435\u0442\u0430\u044E\u0442 \u043E\u0442 \u043A\u0443\u0441\u0442\u043E\u0432 \u0438 \u0434\u043E\u0441\u0442\u0430\u044E\u0442 \u0432\u0440\u0430\u0433\u0430 \u0437\u0430 \u0443\u0433\u043B\u043E\u043C.":"A slingshot that fires bouncing pebbles: they ricochet off hedges and reach enemies around corners.","\u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0448\u0430\u0440 \u0434\u043E\u043B\u0433\u043E \u0441\u043A\u0430\u0447\u0435\u0442 \u043F\u043E \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0430\u043C \u0438 \u0431\u044C\u0451\u0442 \u0432\u0441\u0435\u0445 \u043D\u0430 \u043F\u0443\u0442\u0438":"a huge ball bounces through the corridors for a long time, hitting everyone in its way","\u043E\u0442\u0441\u043A\u0430\u043A\u0438\u0432\u0430\u0435\u0442 \u043E\u0442 \u043A\u0443\u0441\u0442\u043E\u0432 2 \u0440\u0430\u0437\u0430, \u0434\u043E\u0441\u0442\u0430\u0451\u0442 \u0437\u0430 \u0443\u0433\u043B\u043E\u043C":"bounces off hedges twice, reaches around corners",\u0421\u0443\u043F\u0435\u0440:"Super","\u041F\u041A\u041C \xB7 E":"RMB \xB7 E","\u0412\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437":"Respawn in","\u0429\u0451\u043B\u043A\u043D\u0438 \u043F\u043E \u043F\u043E\u043B\u044E, \u0447\u0442\u043E\u0431\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043C\u044B\u0448\u044C\u044E":"Click the field to aim with the mouse","\u0421\u043E\u0431\u0435\u0440\u0438 10 \u0441\u043F\u043E\u0440 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438 \u0438\u0445 15 \u0441\u0435\u043A\u0443\u043D\u0434":"Collect 10 spores and hold them for 15 seconds",\u0422\u044B:"You","\u0421\u0440\u0435\u0437\u0430\u043B!":"Knocked out!","\u0422\u0435\u0431\u044F \u0441\u0440\u0435\u0437\u0430\u043B\u0438":"You got knocked out","\u0421\u043F\u043E\u0440\u044B \u0443 \u043D\u0430\u0441!":"We have the spores!","\u0414\u0435\u0440\u0436\u0438\u0442\u0435\u0441\u044C 15 \u0441\u0435\u043A\u0443\u043D\u0434":"Hold on for 15 seconds","\u0412\u0440\u0430\u0433 \u043D\u0430\u0431\u0440\u0430\u043B \u0441\u043F\u043E\u0440\u044B!":"The enemy has the spores!","\u041E\u0442\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0445!":"Take them back!","\u041E\u0442\u0441\u0447\u0451\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D":"Countdown reset","\u0414\u0435\u0440\u0436\u0438\u043C \u0441\u043F\u043E\u0440\u044B!":"Hold the spores!","\u0412\u0440\u0430\u0433 \u0443\u043D\u043E\u0441\u0438\u0442 \u0441\u043F\u043E\u0440\u044B!":"The enemy is running off with the spores!","\u041F\u043E\u0431\u0435\u0434\u0430!":"Victory!",\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435:"Defeat",\u041D\u0438\u0447\u044C\u044F:"Draw","\u0415\u0449\u0451 \u0431\u043E\u0439":"Play again","\u0412 \u043C\u0435\u043D\u044E":"Menu","\u0422\u0432\u043E\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0430 \u0441\u043F\u043E\u0440\u044B.":"Your team held the spores.","\u0412\u0440\u0430\u0433\u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0438 \u0441\u043F\u043E\u0440\u044B.":"The enemies held the spores.","\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E: ":"Time is up: ","\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431":"Last Shroom","\u043A\u0430\u0436\u0434\u044B\u0439 \u0441\u0430\u043C \u0437\u0430 \u0441\u0435\u0431\u044F \xB7 10 \u0431\u043E\u0439\u0446\u043E\u0432 \u0432 \u043B\u0430\u0431\u0438\u0440\u0438\u043D\u0442\u0435, \u0442\u0443\u043C\u0430\u043D \u0441\u0436\u0438\u043C\u0430\u0435\u0442\u0441\u044F":"every fighter for themselves \xB7 10 fighters in a maze, the fog closes in","\u041E\u0441\u0442\u0430\u043D\u044C\u0441\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C! \u041B\u043E\u043C\u0430\u0439 \u044F\u0449\u0438\u043A\u0438 \u2014 \u0432 \u043D\u0438\u0445 \u0441\u0438\u043B\u0430":"Be the last one standing! Break crates to power up",\u0422\u0443\u043C\u0430\u043D:"Fog","\u0422\u0443\u043C\u0430\u043D \u0438\u0434\u0451\u0442":"Fog moving",\u0424\u0438\u043D\u0430\u043B:"Final","\u0422\u0443\u043C\u0430\u043D \u0441\u0433\u0443\u0449\u0430\u0435\u0442\u0441\u044F!":"The fog is closing in!","\u0414\u0435\u0440\u0436\u0438\u0441\u044C \u0431\u043B\u0438\u0436\u0435 \u043A \u0446\u0435\u043D\u0442\u0440\u0443":"Stay close to the middle","\u0422\u044B \u2014 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431!":"You are the last shroom standing!","\u0422\u0435\u0431\u044F \u0441\u0440\u0435\u0437\u0430\u043B: ":"Knocked out by ","\u0422\u0435\u0431\u044F \u043D\u0430\u043A\u0440\u044B\u043B \u044F\u0434\u043E\u0432\u0438\u0442\u044B\u0439 \u0442\u0443\u043C\u0430\u043D.":"The poison fog got you.","\u041B\u0435\u0441\u043D\u043E\u0439 \u043B\u0430\u0431\u0438\u0440\u0438\u043D\u0442":"Forest Maze","\u0417\u0430\u0439\u043C\u0438 \u0443\u043A\u0440\u044B\u0442\u0438\u0435":"Find some cover","\u0422\u044B \u0432 \u0442\u043E\u043F-3!":"You are in the top 3!","\u041F\u0443\u0441\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u0435\u0440\u0443\u0442\u0441\u044F \u043F\u0435\u0440\u0432\u044B\u043C\u0438":"Let the others fight first","\u0424\u0438\u043D\u0430\u043B!":"Final!","\u041E\u0434\u0438\u043D \u043D\u0430 \u043E\u0434\u0438\u043D":"One on one",\u041E\u0447\u043A\u0438:"Points",\u0432\u0441\u0435\u0433\u043E:"total",\u0413\u0440\u0443\u0437\u0434\u044C:"Milkcap",\u041E\u043F\u0451\u043D\u043E\u043A:"Honeycap",\u0421\u043C\u043E\u0440\u0447\u043E\u043A:"Morel",\u0420\u044B\u0436\u0438\u043A:"Saffron",\u041C\u0430\u0441\u043B\u0451\u043D\u043E\u043A:"Butterball",\u0412\u043E\u043B\u043D\u0443\u0448\u043A\u0430:"Woolly",\u0421\u0442\u0440\u043E\u0447\u043E\u043A:"Brainy",\u0411\u0435\u043B\u044F\u043D\u043A\u0430:"Whitey",\u0415\u0436\u043E\u0432\u0438\u043A:"Hedgehog",\u0414\u0443\u0431\u043E\u0432\u0438\u043A:"Oakcap",\u0412\u0435\u0448\u0435\u043D\u043A\u0430:"Oyster",\u041A\u043E\u0440\u043E\u0435\u0434:"Bark Beetle",\u0428\u0435\u0440\u0448\u0435\u043D\u044C:"Hornet",\u0416\u0443\u0436\u0435\u043B\u0438\u0446\u0430:"Ground Beetle",\u0429\u0435\u043B\u043A\u0443\u043D:"Clicker",\u0421\u0432\u0435\u0442\u043B\u044F\u0447\u043E\u043A:"Firefly",\u041C\u0435\u0434\u0432\u0435\u0434\u043A\u0430:"Mole Cricket",\u0414\u043E\u043B\u0433\u043E\u043D\u043E\u0441\u0438\u043A:"Weevil"};var W1=["ru","be","kk","uk","uz","ky","tg","hy","az"],Wn={lang:"ru",set:!1},Hl=n=>W1.includes(String(n||"").slice(0,2).toLowerCase())?"ru":"en";Wn.lang=(()=>{try{let n=new URLSearchParams(location.search).get("lang");if(n)return Hl(n)}catch{}return Hl(navigator.language||"ru")})();var Zu=/[А-Яа-яЁё]/,Yu=null;function Rt(n){if(Wn.lang!=="en"||!n||!Zu.test(n))return n;if(Ko[n]!==void 0)return Ko[n];if(!Yu){let e=Object.keys(Ko).sort((t,i)=>i.length-t.length).map(t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));Yu=new RegExp("(?<![\u0410-\u042F\u0430-\u044F\u0401\u0451])(?:"+e.join("|")+")(?![\u0410-\u042F\u0430-\u044F\u0401\u0451])","g")}return n.replace(Yu,e=>Ko[e])}function Bl(n){if(n.nodeType===3){let e=n.nodeValue;if(Zu.test(e)){let t=Rt(e);t!==e&&(n.nodeValue=t)}return}if(n.nodeType===1){for(let e of["title","placeholder","aria-label"]){let t=n.getAttribute(e);t&&Zu.test(t)&&n.setAttribute(e,Rt(t))}for(let e=n.firstChild;e;e=e.nextSibling)Bl(e)}}var Wr=null;function Gl(n){if(n&&(Wn.lang=n),Wn.set=!0,document.documentElement.lang=Wn.lang,Wn.lang!=="en"){Wr&&(Wr.disconnect(),Wr=null);return}document.title=Rt(document.title),Bl(document.body),Wr||(Wr=new MutationObserver(e=>{for(let t of e)if(t.type==="characterData")Bl(t.target);else for(let i of t.addedNodes)Bl(i)}),Wr.observe(document.body,{subtree:!0,childList:!0,characterData:!0}))}var b={state:"load",time:0,fighters:[],me:null,shots:[],lobs:[],beams:[],puddles:[],pickups:[],match:null,shake:0,paused:!1,hooks:{}};function Ct(n,...e){let t=b.hooks[n];if(t)for(let i of t)i(...e)}function Vt(n,e){(b.hooks[n]||(b.hooks[n]=[])).push(e)}var Em={sph:new Kt(1,14,10),sphLo:new Kt(1,7,5),cyl:new pn(1,1,1,10),box:new vi(1,1,1),cone:new cl(1,1,10),dome:new Kt(1,18,7,0,Math.PI*2,0,Math.PI/2),torus:new Pr(1,.22,6,16),disc:new Ln(1,16)};Em.disc.rotateX(-Math.PI/2);var X1=new P(0,1,0),$u=new P,Ku=new De,Ju=new ln,Sm=new ss,Vl=class{constructor(){this.bones={},this.list=[],this.parts=[],this.root=new zt}bone(e,t,i=0,s=0,r=0){let o=new zs;return o.name=e,o.position.set(i,s,r),(t?this.bones[t]:this.root).add(o),this.bones[e]=o,this.list.push(o),o}add(e,t,i,s={}){return this.parts.push({bone:e,geo:t,color:new se(i),glow:s.glow||0,shade:s.shade??1}),t}prim(e,t,i,s,r,o,a){let l=(typeof t=="string"?Em[t]:t).clone();Sm.set(o?o[0]:0,o?o[1]:0,o?o[2]:0,o&&o[3]||"XYZ");let c=Array.isArray(r)?r:[r,r,r];return l.applyMatrix4(Ku.compose($u.set(s[0],s[1],s[2]),Ju.setFromEuler(Sm),new P(c[0],c[1],c[2]))),this.add(e,l,i,a)}sph(e,t,i,s,r,o){return this.prim(e,"sph",t,i,s,r,o)}limb(e,t,i,s,r,o){let a=Math.hypot(s[0]-i[0],s[1]-i[1],s[2]-i[2]),l=new Cr(r,Math.max(.001,a),3,8);return Ju.setFromUnitVectors(X1,$u.set(s[0]-i[0],s[1]-i[1],s[2]-i[2]).normalize()),l.applyMatrix4(Ku.compose($u.set((i[0]+s[0])/2,(i[1]+s[1])/2,(i[2]+s[2])/2),Ju,new P(1,1,1))),this.add(e,l,t,o)}lathe(e,t,i,s=[0,0,0],r=1,o=16,a){let l=new Os(i.map(c=>new ne(c[0],c[1])),o);return l.scale(r,r,r),l.translate(s[0],s[1],s[2]),this.add(e,l,t,a)}tube(e,t,i,s,r){let o=new fl(new Uo(i.map(a=>new P(a[0],a[1],a[2]))),10,s,5);return this.add(e,o,t,r)}eyes(e,t,i,s,r,o={}){for(let a of[-1,1])this.sph(e,"#FFFFFF",[a*s,t,i],[r,r*1.18,r*.62],null,{shade:1.15}),this.prim(e,"sphLo",o.pupil||"#17131A",[a*s+a*(o.look||0),t-r*.06,i+r*.42],[r*.6,r*.72,r*.34]),this.prim(e,"sphLo","#FFFFFF",[a*s+r*.18,t+r*.28,i+r*.66],r*.17,null,{glow:.6}),o.brow!==void 0&&this.prim(e,"box",o.browColor||"#2A1A12",[a*s,t+r*1.32,i+r*.42],[r*1.7,r*.34,r*.4],[0,0,a*o.brow])}build(e){this.root.updateMatrixWorld(!0);let t=new De().copy(this.root.matrixWorld).invert(),i=[];for(let a of this.parts){let l=this.list.indexOf(a.bone),c=a.geo;for(let p of Object.keys(c.attributes))["position","normal","uv"].includes(p)||c.deleteAttribute(p);c.attributes.uv||c.setAttribute("uv",new ht(new Float32Array(c.attributes.position.count*2),2)),c.applyMatrix4(Ku.multiplyMatrices(t,a.bone.matrixWorld));let h=c.attributes.position.count,u=new Float32Array(h*3),d=new Float32Array(h),f=new Uint16Array(h*4),g=new Float32Array(h*4),x=a.color.clone().multiplyScalar(a.shade);for(let p=0;p<h;p++)u[p*3]=x.r,u[p*3+1]=x.g,u[p*3+2]=x.b,d[p]=a.glow,f[p*4]=l,g[p*4]=1;c.setAttribute("color",new ht(u,3)),c.setAttribute("aGlow",new ht(d,1)),c.setAttribute("skinIndex",new Sr(f,4)),c.setAttribute("skinWeight",new ht(g,4)),i.push(c)}let s=Vo(i);i.forEach(a=>a.dispose()),s.computeBoundingSphere();let r=new Ar(this.list),o=new Ni(s,e);return this.root.add(o),o.bind(r),o.castShadow=!0,o.frustumCulled=!1,{mesh:o,geo:s,skel:r}}};function wm(){let n=ft({vertexColors:!0,roughness:.5,metalness:0});return n.userData.u={uFlash:{value:0},uRim:{value:new se("#FFF6DA")},uTint:{value:new se(0,0,0)}},n.onBeforeCompile=e=>{Object.assign(e.uniforms,n.userData.u),e.vertexShader=`attribute float aGlow;
varying float vGlow;
`+e.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
 vGlow = aGlow;`),e.fragmentShader=`uniform float uFlash; uniform vec3 uRim; uniform vec3 uTint; varying float vGlow;
`+e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      float rim = pow(1.0 - clamp(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 2.6);
      totalEmissiveRadiance += uRim * rim * 0.35 * diffuseColor.rgb + diffuseColor.rgb * vGlow * 1.6 + vec3(uFlash) + uTint;`)},n.customProgramCacheKey=()=>"hero",n}function Tm(n=.022){let e=new ke({color:"#13200F",side:Gt});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <skinning_vertex>",`#include <skinning_vertex>
 transformed += normalize(objectNormal) * ${n.toFixed(4)};`)},e.customProgramCacheKey=()=>"outline"+n,e}function Am(n){let e=new ke({color:n,depthWrite:!1,depthFunc:Gh,fog:!1,blending:Hh,blendSrc:bo,blendDst:So,opacity:.62});return e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <opaque_fragment>","gl_FragColor = vec4(outgoingLight, opacity);")},e.customProgramCacheKey=()=>"sil",e}var Xn={shroom:{name:"\u0428\u043B\u044F\u043F\u043D\u0438\u043A",species:"\u043C\u0443\u0445\u043E\u043C\u043E\u0440",role:"\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A",color:"#E23A2E",hp:3900,speed:5,rad:.42,height:1.35,desc:"\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A \u0431\u044C\u0451\u0442 \u0432\u0435\u0435\u0440\u043E\u043C: \u0432\u0431\u043B\u0438\u0437\u0438 \u0440\u0430\u0437\u043D\u043E\u0441\u0438\u0442 \u043B\u044E\u0431\u043E\u0433\u043E.",attack:{kind:"fan",name:"\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0432\u0435\u0435\u0440",count:5,spread:.5,range:7.2,speed:24,dmg:310,reload:1.5,cd:.42,size:.2,color:"#FF6B4A"},super:{kind:"fan",name:"\u0413\u0440\u0438\u0431\u043D\u043E\u0439 \u0437\u0430\u043B\u043F",desc:"\u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0437\u0430\u043B\u043F \u043E\u0442\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u0432\u0440\u0430\u0433\u043E\u0432",count:11,spread:.85,range:8.6,speed:27,dmg:330,knock:3.4,size:.28,color:"#FFD24A",charge:4600}},beetle:{name:"\u0411\u0430\u0431\u0430\u0445",species:"\u0436\u0443\u043A-\u0431\u043E\u043C\u0431\u0430\u0440\u0434\u0438\u0440",role:"\u041C\u0435\u0442\u0430\u0442\u0435\u043B\u044C",color:"#3B57D6",hp:3e3,speed:4.7,rad:.44,height:1.25,desc:"\u041A\u0438\u0434\u0430\u0435\u0442 \u0431\u043E\u043C\u0431\u044B \u043D\u0430\u0432\u0435\u0441\u043E\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B. \u0412\u0437\u0440\u044B\u0432 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0433\u043E\u0440\u044F\u0449\u0443\u044E \u043B\u0443\u0436\u0443.",attack:{kind:"lob",name:"\u0416\u0443\u0447\u0438\u043D\u0430\u044F \u0431\u043E\u043C\u0431\u0430",range:10,flight:.78,radius:1.7,dmg:820,reload:1.9,cd:.5,puddle:{r:1.35,dps:320,t:1.8},color:"#FF9A2E"},super:{kind:"barrage",name:"\u041A\u043E\u0432\u0440\u043E\u0432\u0430\u044F \u0431\u043E\u043C\u0431\u0451\u0436\u043A\u0430",desc:"\u043F\u044F\u0442\u044C \u0431\u043E\u043C\u0431 \u043B\u043E\u0436\u0430\u0442\u0441\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u043E\u0439",count:5,range:12,flight:.95,radius:1.9,dmg:1050,knock:2.2,step:1.9,color:"#FF5A2E",charge:3900}},wasp:{name:"\u0416\u0430\u043B\u043A\u0430",species:"\u043E\u0441\u0430",role:"\u0421\u043D\u0430\u0439\u043F\u0435\u0440",color:"#F5C21B",hp:2500,speed:5.2,rad:.4,height:1.45,hover:.22,desc:"\u0414\u0430\u043B\u044C\u043D\u043E\u0431\u043E\u0439\u043D\u043E\u0435 \u0436\u0430\u043B\u043E: \u0447\u0435\u043C \u0434\u0430\u043B\u044C\u0448\u0435 \u0446\u0435\u043B\u044C, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u043D\u0435\u0435.",attack:{kind:"needle",name:"\u0416\u0430\u043B\u043E",range:15,speed:40,dmg:900,dmgFar:1650,reload:1.9,cd:.5,size:.16,color:"#FFB21E"},super:{kind:"beam",name:"\u041F\u0440\u043E\u043D\u0437\u0430\u044E\u0449\u0438\u0439 \u043B\u0443\u0447",desc:"\u043B\u0443\u0447 \u043F\u0440\u043E\u0448\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0435\u043D\u044B \u0438 \u0432\u0441\u0435\u0445 \u043D\u0430 \u043F\u0443\u0442\u0438",range:21,width:.75,dmg:2100,windup:.38,color:"#FFE15A",charge:3600}},roly:{name:"\u041A\u0430\u0442\u044B\u0448",species:"\u043C\u043E\u043A\u0440\u0438\u0446\u0430",role:"\u0420\u0438\u043A\u043E\u0448\u0435\u0442",color:"#6E7FA3",hp:3300,speed:5,rad:.42,height:1.3,desc:"\u0420\u043E\u0433\u0430\u0442\u043A\u0430 \u0441\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0441\u043A\u0430\u0447\u0443\u0449\u0438\u043C\u0438 \u043A\u0430\u0442\u044B\u0448\u0430\u043C\u0438: \u043E\u043D\u0438 \u043E\u0442\u043B\u0435\u0442\u0430\u044E\u0442 \u043E\u0442 \u043A\u0443\u0441\u0442\u043E\u0432 \u0438 \u0434\u043E\u0441\u0442\u0430\u044E\u0442 \u0432\u0440\u0430\u0433\u0430 \u0437\u0430 \u0443\u0433\u043B\u043E\u043C.",attack:{kind:"bounce",name:"\u0421\u043A\u0430\u0447\u0443\u0449\u0438\u0439 \u043A\u0430\u0442\u044B\u0448",range:12,speed:24,dmg:760,bounces:2,reload:1.2,cd:.38,size:.19,color:"#7FE7FF"},super:{kind:"bounce",name:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043A\u0430\u0442\u044B\u0448",desc:"\u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0448\u0430\u0440 \u0434\u043E\u043B\u0433\u043E \u0441\u043A\u0430\u0447\u0435\u0442 \u043F\u043E \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0430\u043C \u0438 \u0431\u044C\u0451\u0442 \u0432\u0441\u0435\u0445 \u043D\u0430 \u043F\u0443\u0442\u0438",range:30,speed:13,dmg:1150,bounces:7,pierce:!0,knock:2.4,size:.5,color:"#B8F4FF",charge:3800}}},Si=Object.keys(Xn),ti=3,Jo="#FFF0D9";function Rm(n){let e=new Vl,t=e.bones,i={};if(n==="shroom"){e.bone("hips",null,0,.42,0),e.bone("body","hips"),e.bone("head","body",0,.68,0),e.bone("eyes","body",0,.36,.27),e.bone("armL","body",.3,.36,.04),e.bone("armR","body",-.3,.36,.04),e.bone("gun","armR",.04,-.14,.24),e.bone("footL",null,.16,0,0),e.bone("footR",null,-.16,0,0),e.lathe(t.body,Jo,[[0,-.36],[.24,-.35],[.31,-.18],[.33,.1],[.31,.4],[.27,.66],[0,.72]]),e.eyes(t.eyes,0,0,.115,.085,{brow:.32}),e.sph(t.body,"#5A2A22",[0,.2,.295],[.06,.035,.03]);for(let r of[-1,1])e.sph(t.body,"#FF9C9C",[r*.19,.25,.25],[.05,.03,.02]);e.prim(t.body,"torus","#F3DFC0",[0,.58,0],[.3,.3,.42],[Math.PI/2,0,0]),e.prim(t.body,"torus","#3FA34D",[0,-.02,0],[.33,.33,.4],[Math.PI/2,0,0]),e.prim(t.body,"box","#2E7A38",[0,-.02,.33],[.12,.1,.04]),e.prim(t.head,"dome","#E0332A",[0,-.05,0],[.66,.46,.66]),e.prim(t.head,"disc","#F6E2C2",[0,-.05,0],[.65,1,.65],[Math.PI,0,0]),e.prim(t.head,"torus","#E9CFA6",[0,-.07,0],[.5,.5,.25],[Math.PI/2,0,0]);let s=[[0,.95],[.9,.55],[2,.6],[3.1,.55],[4.2,.6],[5.3,.55],[.5,.25],[2.6,.25],[4.6,.28],[1.6,.25]];for(let[r,o]of s){let a=Math.cos(r)*Math.cos(o)*.66,l=Math.sin(o)*.46,c=Math.sin(r)*Math.cos(o)*.66,h=new P(a/.44,l/.21,c/.44).normalize(),u=.1+(o>.9?.05:.02),d=new ln().setFromUnitVectors(new P(0,1,0),h),f=new ss().setFromQuaternion(d);e.sph(t.head,"#FFF8EC",[a,l-.05,c],[u,u*.3,u],[f.x,f.y,f.z])}e.limb(t.armR,Jo,[0,0,0],[.02,-.12,.2],.065),e.sph(t.armR,Jo,[.03,-.14,.24],.085),e.limb(t.armL,Jo,[0,0,0],[-.12,-.1,.26],.065),e.sph(t.armL,Jo,[-.15,-.11,.33],.085),e.prim(t.gun,"box","#8A5A32",[0,0,-.08],[.1,.13,.26]),e.prim(t.gun,"cyl","#5E8F3A",[0,.03,.2],[.07,.36,.07],[Math.PI/2,0,0]),e.prim(t.gun,"cone","#C9A24A",[0,.03,.44],[.15,.2,.15],[-Math.PI/2,0,0]),e.prim(t.gun,"torus","#E7C35C",[0,.03,.54],[.14,.14,.14]),e.sph(t.gun,"#9BFF6A",[0,.13,.08],[.07,.07,.1],null,{glow:.7}),i.muzzle=[0,.03,.56];for(let r of["L","R"])e.sph(t["foot"+r],"#7A4A2A",[0,.07,.03],[.11,.08,.15])}else if(n==="beetle"){e.bone("hips",null,0,.4,0),e.bone("body","hips"),e.bone("elyL","body",.04,.3,.1),e.bone("elyR","body",-.04,.3,.1),e.bone("head","body",0,.12,.36),e.bone("antL","head",.08,.17,.08),e.bone("antR","head",-.08,.17,.08),e.bone("eyes","head",0,.05,.15),e.bone("armL","body",.38,.06,.16),e.bone("armR","body",-.38,.06,.16),e.bone("gun","armR",-.02,-.06,.2),e.bone("footL",null,.18,0,0),e.bone("footR",null,-.18,0,0),e.sph(t.body,"#C98A3A",[0,-.05,.02],[.4,.36,.42]);for(let s=0;s<4;s++)e.prim(t.body,"torus","#A86C2C",[0,-.18+s*.07,.06],[.33-Math.abs(s-1.5)*.03,.33-Math.abs(s-1.5)*.03,.2],[Math.PI/2,0,0]);for(let[s,r]of[[1,"elyL"],[-1,"elyR"]]){let o=new Kt(1,16,12,s>0?-Math.PI/2:Math.PI/2,Math.PI,0,Math.PI*.62);o.scale(.45,.46,.5),o.translate(-s*.04,-.2,-.12),e.add(t[r],o,"#2E45B8"),e.prim(t[r],"sph","#7FA0FF",[s*.17,.12,-.08],[.09,.05,.16],[.3,0,s*.4],{glow:.25}),e.prim(t[r],"sph","#22348A",[s*.22,-.02,-.3],[.06,.06,.06])}for(let s=0;s<3;s++)e.sph(t.body,"#2A2A30",[.36-s*.03,-.12,-.12+s*.13],.08),e.prim(t.body,"cyl","#C9A24A",[.37-s*.03,-.04,-.12+s*.13],[.02,.05,.02]);for(let s of[-1,1])for(let r=0;r<2;r++)e.limb(t.body,"#1F1A24",[s*.3,-.1,.12-r*.24],[s*.46,-.32,.16-r*.3],.03);e.sph(t.head,"#1F2340",[0,0,0],[.24,.22,.22]),e.eyes(t.eyes,0,0,.1,.085,{brow:-.25,browColor:"#0E0F1E"});for(let s of[-1,1])e.prim(t.head,"cone","#C98A3A",[s*.08,-.11,.2],[.035,.12,.035],[1.9,0,s*-.5]);for(let[s,r]of[[1,"antL"],[-1,"antR"]])e.tube(t[r],"#1F2340",[[0,0,0],[s*.06,.12,.04],[s*.15,.2,.02],[s*.22,.22,-.04]],.018),e.sph(t[r],"#FF8A3A",[s*.22,.22,-.04],.04,null,{glow:.4});e.limb(t.armR,"#1F1A24",[0,0,0],[-.02,-.06,.18],.05),e.sph(t.armR,"#C98A3A",[-.02,-.07,.2],.07),e.limb(t.armL,"#1F1A24",[0,0,0],[.04,-.08,.18],.05),e.sph(t.armL,"#C98A3A",[.04,-.09,.2],.07),e.sph(t.gun,"#25252C",[0,.06,.08],.15),e.sph(t.gun,"#4A4A58",[.05,.12,.13],.04,null,{glow:.3}),e.prim(t.gun,"cyl","#C9A24A",[0,.22,.08],[.025,.08,.025]),e.sph(t.gun,"#FFD04A",[0,.27,.08],.035,null,{glow:2.5}),i.muzzle=[0,.06,.1];for(let s of["L","R"])e.sph(t["foot"+s],"#C98A3A",[0,.06,.04],[.11,.07,.15])}else if(n==="wasp"){let s=Xn.wasp.hover;e.bone("hips",null,0,.62+s,0),e.bone("body","hips"),e.bone("abd","body",0,-.04,-.2),e.bone("head","body",0,.3,.06),e.bone("antL","head",.07,.17,.08),e.bone("antR","head",-.07,.17,.08),e.bone("wingL","body",.1,.17,-.08),e.bone("wingR","body",-.1,.17,-.08),e.bone("armL","body",.2,.06,.1),e.bone("armR","body",-.2,.06,.1),e.bone("gun","armR",.06,-.1,.12),e.bone("footL","hips",.1,-.26,.02),e.bone("footR","hips",-.1,-.26,.02),e.sph(t.body,"#2E2620",[0,.04,0],[.24,.27,.25]),e.prim(t.body,"torus","#F5C21B",[0,.22,.02],[.17,.17,.3],[Math.PI/2,0,0]);let r=[[0,.17],[.12,.23],[.25,.25],[.38,.23],[.5,.18],[.6,.11]];for(let o=0;o<r.length;o++){let[a,l]=r[o];e.prim(t.abd,"sph",o%2?"#26201A":"#F5C21B",[0,-.06-a*.25,-a],[l,l,.09])}e.prim(t.abd,"cone","#26201A",[0,-.22,-.72],[.04,.16,.04],[-1.9,0,0]),e.sph(t.head,"#F5C21B",[0,0,0],[.22,.21,.2]);for(let o of[-1,1])e.sph(t.head,"#1B1A2A",[o*.13,.03,.1],[.1,.14,.09],[0,o*.3,0]),e.prim(t.head,"sphLo","#FFFFFF",[o*.11,.09,.18],.025,null,{glow:.8}),e.prim(t.head,"sphLo","#8FA8FF",[o*.16,-.02,.17],.018,null,{glow:.5});e.prim(t.head,"torus","#5A2A1A",[0,-.09,.17],[.05,.05,.05],[0,0,Math.PI]);for(let[o,a]of[[1,"antL"],[-1,"antR"]])e.tube(t[a],"#26201A",[[0,0,0],[o*.03,.14,.06],[o*.1,.24,.1],[o*.18,.27,.16]],.015),e.sph(t[a],"#26201A",[o*.18,.27,.16],.03);e.limb(t.armR,"#26201A",[0,0,0],[.04,-.08,.1],.035),e.sph(t.armR,"#F5C21B",[.05,-.1,.12],.05),e.limb(t.armL,"#26201A",[0,0,0],[-.1,-.08,.26],.035),e.sph(t.armL,"#F5C21B",[-.11,-.09,.3],.05),e.prim(t.gun,"box","#6B4A2E",[0,-.01,-.1],[.07,.1,.3]),e.prim(t.gun,"cyl","#3A3A44",[0,.02,.32],[.035,.66,.035],[Math.PI/2,0,0]),e.prim(t.gun,"cone","#E8C84A",[0,.02,.72],[.04,.16,.04],[Math.PI/2,0,0]),e.prim(t.gun,"cyl","#26201A",[0,.1,.12],[.04,.26,.04],[Math.PI/2,0,0]),e.sph(t.gun,"#FFB21E",[0,.1,.26],[.04,.04,.02],null,{glow:2}),i.muzzle=[0,.02,.82];for(let o of["L","R"])e.limb(t["foot"+o],"#26201A",[0,.1,0],[0,-.05,.03],.03),e.sph(t["foot"+o],"#26201A",[0,-.07,.05],[.05,.035,.07])}else if(n==="roly"){e.bone("hips",null,0,.42,0),e.bone("body","hips"),e.bone("head","body",0,.42,.1),e.bone("antL","head",.08,.14,.1),e.bone("antR","head",-.08,.14,.1),e.bone("eyes","head",0,.01,.2),e.bone("armL","body",.32,.14,.12),e.bone("armR","body",-.32,.14,.12),e.bone("gun","armR",-.02,-.1,.2),e.bone("footL",null,.16,0,0),e.bone("footR",null,-.16,0,0),e.sph(t.body,"#E4DCEE",[0,.02,.06],[.3,.38,.28]);for(let s=0;s<7;s++){let r=-.3+s*.105,o=.37-Math.abs(s-3)*.035;e.prim(t.body,"sph",s%2?"#5F6E91":"#6E7FA3",[0,r,-.05],[o,.085,o*.92]),e.prim(t.body,"torus","#B9C4DE",[0,r+.03,-.05],[o*.93,o*.86,.09],[Math.PI/2,0,0])}for(let s of[-1,1])e.prim(t.body,"sph","#56638A",[s*.12,-.36,-.2],[.07,.05,.12],[.4,0,0]);for(let s of[-1,1])for(let r=0;r<3;r++)e.limb(t.body,"#4A5575",[s*.24,-.1+r*.12,.14],[s*.36,-.2+r*.12,.24],.022);e.sph(t.head,"#E4DCEE",[0,-.03,.04],[.21,.17,.18]),e.prim(t.head,"dome","#6E7FA3",[0,.02,-.04],[.24,.2,.23],[.5,0,0]),e.prim(t.head,"torus","#B9C4DE",[0,.02,-.04],[.23,.21,.12],[Math.PI/2+.5,0,0]),e.eyes(t.eyes,0,0,.1,.075,{brow:.15,browColor:"#3A4463"}),e.sph(t.head,"#FFB0C0",[.14,-.09,.17],[.04,.025,.02]),e.sph(t.head,"#FFB0C0",[-.14,-.09,.17],[.04,.025,.02]);for(let[s,r]of[[1,"antL"],[-1,"antR"]])e.tube(t[r],"#3A4463",[[0,0,0],[s*.07,.14,.02],[s*.15,.25,.08],[s*.24,.28,.18]],.016),e.sph(t[r],"#7FE7FF",[s*.24,.28,.18],.03,null,{glow:.6});e.limb(t.armR,"#4A5575",[0,0,0],[-.02,-.1,.18],.045),e.sph(t.armR,"#E4DCEE",[-.02,-.11,.2],.065),e.limb(t.armL,"#4A5575",[0,0,0],[-.1,-.06,.3],.045),e.sph(t.armL,"#E4DCEE",[-.12,-.06,.33],.065),e.prim(t.gun,"cyl","#8A5A32",[0,0,.04],[.035,.18,.035]),e.limb(t.gun,"#8A5A32",[0,.08,.04],[.09,.2,.08],.028),e.limb(t.gun,"#8A5A32",[0,.08,.04],[-.09,.2,.08],.028),e.tube(t.gun,"#3A3030",[[.09,.2,.08],[0,.17,-.04],[-.09,.2,.08]],.012),e.sph(t.gun,"#7FE7FF",[0,.18,.02],.05,null,{glow:1.6}),i.muzzle=[0,.19,.12];for(let s of["L","R"])e.sph(t["foot"+s],"#4A5575",[0,.06,.04],[.1,.07,.14])}return{rig:e,parts:i}}function Cm(n){let e=ft({color:"#E6F6FF",transparent:!0,opacity:.5,side:Tt,roughness:.1,depthWrite:!1,emissive:"#9FD8FF",emissiveIntensity:.15}),t=new Bt(.62,.24);t.translate(.31,0,0),t.rotateX(-Math.PI/2);let i=[];for(let[s,r]of[[1,"wingL"],[-1,"wingR"]])for(let o=0;o<2;o++){let a=new ae(t,e);a.scale.set(s*(1-o*.25),1,1-o*.15),a.position.z=-o*.08,a.rotation.y=s*(.35+o*.4),n.bones[r].add(a),i.push(a)}return i}var jo={shroom:'<svg viewBox="0 0 72 72" aria-hidden="true"><rect x="22" y="34" width="28" height="30" rx="12" fill="#FFF0D9"/><circle cx="30" cy="45" r="3.4" fill="#17131A"/><circle cx="42" cy="45" r="3.4" fill="#17131A"/><path d="M25 39l8 3M47 39l-8 3" stroke="#2A1A12" stroke-width="3" stroke-linecap="round"/><path d="M4 36Q36-8 68 36Z" fill="#E0332A"/><circle cx="20" cy="24" r="4.5" fill="#FFF8EC"/><circle cx="36" cy="13" r="4" fill="#FFF8EC"/><circle cx="53" cy="25" r="4.5" fill="#FFF8EC"/><rect x="22" y="55" width="28" height="5" rx="2" fill="#3FA34D"/></svg>',beetle:'<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="36" cy="44" rx="25" ry="22" fill="#2E45B8"/><path d="M36 22V66" stroke="#1B2A78" stroke-width="3"/><ellipse cx="25" cy="38" rx="5" ry="8" fill="#7FA0FF" opacity=".7"/><circle cx="36" cy="24" r="13" fill="#1F2340"/><circle cx="30" cy="22" r="5" fill="#fff"/><circle cx="42" cy="22" r="5" fill="#fff"/><circle cx="31" cy="23" r="2.6" fill="#17131A"/><circle cx="41" cy="23" r="2.6" fill="#17131A"/><path d="M30 12Q24 2 16 4M42 12Q48 2 56 4" stroke="#1F2340" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="16" cy="4" r="3" fill="#FF8A3A"/><circle cx="56" cy="4" r="3" fill="#FF8A3A"/><circle cx="60" cy="56" r="8" fill="#25252C"/><circle cx="62" cy="46" r="2.5" fill="#FFD04A"/></svg>',wasp:'<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="17" cy="30" rx="15" ry="7" fill="#DDF2FF" opacity=".8" transform="rotate(-25 17 30)"/><ellipse cx="55" cy="30" rx="15" ry="7" fill="#DDF2FF" opacity=".8" transform="rotate(25 55 30)"/><ellipse cx="36" cy="55" rx="12" ry="14" fill="#F5C21B"/><path d="M25 52H47M26 60H46" stroke="#26201A" stroke-width="4.5"/><circle cx="36" cy="30" r="14" fill="#F5C21B"/><ellipse cx="29" cy="30" rx="5.5" ry="7.5" fill="#1B1A2A"/><ellipse cx="43" cy="30" rx="5.5" ry="7.5" fill="#1B1A2A"/><circle cx="28" cy="27" r="1.8" fill="#fff"/><circle cx="42" cy="27" r="1.8" fill="#fff"/><path d="M32 39Q36 42 40 39" stroke="#5A2A1A" stroke-width="2" fill="none"/><path d="M31 17Q27 7 22 6M41 17Q45 7 50 6" stroke="#26201A" stroke-width="2.5" fill="none"/></svg>'};jo.roly='<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="36" cy="46" rx="22" ry="22" fill="#6E7FA3"/><path d="M15 36Q36 30 57 36M14 46Q36 40 58 46M16 56Q36 50 56 56" stroke="#B9C4DE" stroke-width="3.5" fill="none"/><ellipse cx="36" cy="25" rx="15" ry="12" fill="#6E7FA3"/><circle cx="30" cy="25" r="5" fill="#fff"/><circle cx="42" cy="25" r="5" fill="#fff"/><circle cx="31" cy="26" r="2.6" fill="#17131A"/><circle cx="41" cy="26" r="2.6" fill="#17131A"/><path d="M29 15Q22 4 12 8M43 15Q50 4 60 8" stroke="#3A4463" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="12" cy="8" r="3" fill="#7FE7FF"/><circle cx="60" cy="8" r="3" fill="#7FE7FF"/><path d="M58 50V64M58 52L52 44M58 52L64 44" stroke="#8A5A32" stroke-width="3" stroke-linecap="round"/><circle cx="58" cy="45" r="3.4" fill="#7FE7FF"/></svg>';var q1={me:"#FFD23F",ally:"#4FC3FF",foe:"#FF4D4D"},Y1=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.strokeStyle="#fff",e.lineWidth=9,e.beginPath(),e.arc(64,64,52,0,Le),e.stroke(),e.globalAlpha=.25,e.fillStyle="#fff",e.beginPath(),e.arc(64,64,50,0,Le),e.fill();let t=new Pn(n);return t.colorSpace=ct,t})(),ju=new Bt(1.25,1.25);ju.rotateX(-Math.PI/2);var Z1=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,31);return t.addColorStop(0,"rgba(0,0,0,.5)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Pn(n)})(),$1=new ke({map:Z1,transparent:!0,depthWrite:!1});function ea(n){let{rig:e,parts:t}=Rm(n),i=wm(),{mesh:s,geo:r,skel:o}=e.build(i);s.renderOrder=2;let a=new Ni(r,Tm());a.bind(o,s.bindMatrix),a.frustumCulled=!1,a.renderOrder=2,e.root.add(a),a.visible=!gt;let l=Am("#FFFFFF"),c=new Ni(r,l);c.bind(o,s.bindMatrix),c.frustumCulled=!1,c.renderOrder=1,e.root.add(c);let h=new ae(ju,new ke({map:Y1,transparent:!0,depthWrite:!1,color:"#fff",opacity:.9}));h.position.y=.03,h.renderOrder=1,e.root.add(h);let u=null;u=new ae(ju,$1),u.position.y=.025,u.scale.setScalar(.85),u.renderOrder=1,e.root.add(u);let d=e.bones;for(let p of e.list)p.userData.rest=p.position.clone(),p.userData.rot=p.rotation.clone();let f=new vt;f.position.fromArray(t.muzzle),d.gun.add(f);let g=n==="wasp"?Cm(e):null;return{id:n,H:Xn[n],root:e.root,B:d,mesh:s,ol:a,sil:c,silMat:l,mat:i,ring:h,blob:u,muzzle:f,wings:g,yaw:0,ph:0,lastStep:0,sp:{twist:mn(),leanX:mn(),leanZ:mn(),headX:mn(),headZ:mn(),squash:mn(),kick:mn(),bodyX:mn(),armR:mn(),armL:mn(),ant:mn(),ely:mn(),pop:mn(1),lift:mn(),gunS:mn(1)},prevVX:0,prevVZ:0}}function Wl(n,e){let t=new se(q1[e]);n.ring.material.color.copy(t),n.silMat.color.copy(e==="foe"?new se("#FF3B3B"):e==="me"?new se("#FFE58A"):new se("#7FD8FF"))}var Qo=n=>n.userData.rest;function Xl(n,e,t,i){let s=n.B,r=n.sp,o=n.H,a=n.root;if(!e.alive){let O=e.deadT,L=tt(O/.75,0,1);a.position.set(e.x,Math.max(0,Math.sin(Math.min(O/.5,1)*Math.PI)*.7),e.z),a.rotation.set(-L*1.4,n.yaw+O*4,0,"YXZ");let U=O<.55?1+Math.sin(O*18)*.06:Math.max(0,1-(O-.55)/.2);a.scale.setScalar(U),n.ring.visible=!1,n.blob&&(n.blob.visible=!1),a.visible=U>.01,n.mat.userData.u.uFlash.value=O<.1?.8:0;return}a.rotation.x=0,a.rotation.z=0,n.ring.visible=!0,n.blob&&(n.blob.visible=!he.shadows);let l=Math.hypot(e.vx,e.vz),c=l>.4,h=e.atkT<.55||e.supT<.8||e.aiming,u=h||!c?e.aim:Math.atan2(e.vx,e.vz);n.yaw+=tt(Fr(n.yaw,u),-t*16,t*16),a.rotation.y=n.yaw,a.position.set(e.x,0,e.z);let d=tt(l/o.speed,0,1),f=n.ph;n.ph+=t*(3+l*2.1),c&&Math.floor(f/Math.PI)!==Math.floor(n.ph/Math.PI)&&(r.squash.v-=2.4*d,r.headX.v+=1.6*d,n.step=!0);let g=Math.sin(n.ph),x=Math.cos(n.ph);if(o.hover)for(let[O,L]of[[s.footL,1],[s.footR,-1]])O.rotation.x=Math.sin(i*3+L)*.25-d*.6;else{let O=.2*d;for(let[L,U]of[[s.footL,1],[s.footR,-1]])L.position.z=Qo(L).z+g*U*O,L.position.y=Qo(L).y+Math.max(0,x*U)*.14*d,L.rotation.x=-x*U*.6*d}let p=Math.cos(n.yaw),m=Math.sin(n.yaw),_=(e.vx-n.prevVX)/Math.max(t,.001),v=(e.vz-n.prevVZ)/Math.max(t,.001);n.prevVX=e.vx,n.prevVZ=e.vz;let y=e.vx*m+e.vz*p,w=e.vx*p-e.vz*m,S=_*m+v*p;Gn(r.leanX,tt(y/o.speed*.16+S*.012,-.3,.35),120,14,t),Gn(r.leanZ,tt(-w/o.speed*.2,-.3,.3),120,14,t),Gn(r.squash,0,260,13,t),Gn(r.headX,0,150,7,t),Gn(r.headZ,0,150,7,t),Gn(r.kick,0,200,15,t),Gn(r.bodyX,0,140,11,t),Gn(r.ant,0,90,5,t),Gn(r.pop,1,220,12,t),Gn(r.lift,0,60,10,t),Gn(r.gunS,1,200,12,t),r.headZ.v+=w*.02*t*60*.05,r.headX.v-=S*.002,r.ant.v+=S*.004+r.headX.v*.02;let R=Math.sin(i*2.4+e.id)*.012,D=Math.abs(x)*.07*d;s.hips.position.y=Qo(s.hips).y+D+R+r.lift.x+(o.hover?Math.sin(i*4+e.id)*.05:0);let M=r.squash.x,T=Math.max(0,Math.sin(n.ph*2))*.05*d;s.hips.scale.set(1-M*.07-T*.5,1+M*.12+T,1-M*.07-T*.5),s.hips.rotation.x=r.leanX.x+r.bodyX.x,s.hips.rotation.z=r.leanZ.x+Math.sin(n.ph)*.05*d,Gn(r.twist,tt(Fr(n.yaw,e.aim),-1,1),160,16,t),s.body.rotation.y=r.twist.x,s.head.rotation.x=r.headX.x*.5+(o.hover,0),s.head.rotation.z=r.headZ.x*.5+Math.sin(n.ph)*.06*d;for(let O of["antL","antR"])s[O]&&(s[O].rotation.x=-r.ant.x*.8+Math.sin(i*2+(O==="antL"?0:1))*.06);let F=Math.sin(n.ph)*.5*d*(h?.3:1);s.armL.rotation.set(Qo(s.armL).x+F,0,0),s.armR.rotation.set(-F*.3,0,0),s.gun.position.copy(Qo(s.gun)),s.gun.position.z-=Math.max(0,r.kick.x)*.08,s.gun.rotation.x=0,s.gun.scale.setScalar(1);let k=o.attack.kind;if(e.atkT<.6){let O=e.atkT;if(k==="lob"){let L=O<.07?-O/.07*2.4:O<.2?-2.4+(O-.07)/.13*3.2:.8*Math.max(0,1-(O-.2)/.3);s.armR.rotation.x=L,s.hips.rotation.x+=O<.07?-.15:O<.3?.18:0,s.gun.scale.setScalar(O<.12?1:Math.min(1,Math.max(0,(O-.35)/.15)))}else{let L=n.id==="shroom"?1.6:1;s.armR.rotation.x+=-r.kick.x*.9*L,s.armL.rotation.x+=-r.kick.x*.5*L,s.gun.position.z-=r.kick.x*.2*L,s.gun.rotation.x=-r.kick.x*.5*L,s.hips.rotation.x-=r.kick.x*.12*L,n.B.abd&&(n.B.abd.rotation.x=r.kick.x*.9)}}if(s.armL.rotation.x+=-r.kick.x*.4,e.supT<1.2){let O=e.supT;if(n.id==="shroom"){let L=O<.12?O/.12:Math.max(0,1-(O-.12)/.3);s.hips.position.y-=L*.12,s.hips.scale.y*=1-L*.12,s.head.rotation.x+=-L*.25}else if(n.id==="beetle"){let L=O<.9?Math.min(1,O/.15):Math.max(0,1-(O-.9)/.3);s.elyL&&(s.elyL.rotation.z=L*.9,s.elyR.rotation.z=-L*.9,s.elyL.rotation.x=s.elyR.rotation.x=-L*.4),s.armL.rotation.x=s.armR.rotation.x=-2.2*L+(O>.15&&O<.6?Math.sin((O-.15)*30)*.5:0),s.hips.position.y+=Math.sin(Math.min(O/.5,1)*Math.PI)*.35}else if(n.id==="roly"){let L=O<.15?O/.15:Math.max(0,1-(O-.15)/.35);s.hips.rotation.x+=L*.9,s.head.rotation.x+=L*.7,s.hips.position.y-=L*.12,s.hips.scale.y*=1-L*.15}else if(n.id==="wasp"){let L=o.super.windup,U=O<L?O/L:Math.max(0,1-(O-L)/.5);s.hips.position.y+=U*.35,s.hips.rotation.x+=-U*.25,n.mat.userData.u.uTint.value.setRGB(.5,.38,.05).multiplyScalar(O<L?O/L:0)}}else n.id==="wasp"&&n.mat.userData.u.uTint.value.setRGB(0,0,0);if(n.id!=="beetle"&&s.elyL&&(s.elyL.rotation.z=0),n.wings){let O=e.supT<o.super.windup+.2?1.6:1,L=Math.sin(i*62*O+e.id)*.55;s.wingL.rotation.z=L,s.wingR.rotation.z=-L,s.abd&&(s.abd.rotation.x+=Math.sin(i*3+e.id)*.08)}if(e.victory){let O=Math.abs(Math.sin(i*5.5+e.id));a.position.y=O*.45,s.armL.rotation.x=s.armR.rotation.x=-2.6+Math.sin(i*11)*.3,s.hips.scale.y*=1+(O<.15?-.12:.05)}else e.defeat&&(s.hips.position.y-=.06,s.head.rotation.x+=.45,s.armL.rotation.x=s.armR.rotation.x=.5);s.eyes&&(n.blink=(n.blink??2+Math.random()*3)-t,n.blink<0?(s.eyes.scale.y=.12,n.blink<-.11&&(n.blink=1.8+Math.random()*3.5)):s.eyes.scale.y=e.flash>.5?.6:1),n.mat.userData.u.uFlash.value=Math.max(0,e.flash)*.55,a.scale.setScalar(Math.max(.01,r.pop.x)),a.visible=!0}var _s={attack(n){n.sp.kick.v+=n.id==="wasp"?9:n.id==="shroom"?13:n.id==="roly"?8:0,n.sp.bodyX.v-=2.2,n.sp.headX.v-=3,n.sp.ant.v+=3},super(n){n.sp.kick.v+=22,n.sp.bodyX.v-=5,n.sp.headX.v-=6,n.sp.ant.v+=6,n.sp.squash.v+=3},hurt(n,e,t){n.sp.bodyX.v-=5,n.sp.headX.v-=7,n.sp.headZ.v+=(Math.random()-.5)*8,n.sp.squash.v-=3,n.sp.ant.v+=5},spawn(n){n.sp.pop.x=.05,n.sp.pop.v=0},land(n){n.sp.squash.v-=4}};var Zl=class{constructor(e,t){this.max=e,this.n=0;let i=new Bt(1,1),s=new bl;s.index=i.index,s.setAttribute("position",i.attributes.position),s.setAttribute("uv",i.attributes.uv),this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e*2),s.setAttribute("iPos",new ci(this.pos,3).setUsage(Cl)),s.setAttribute("iCol",new ci(this.col,4).setUsage(Cl)),s.setAttribute("iSize",new ci(this.size,2).setUsage(Cl)),s.instanceCount=0,this.geo=s;let r=new ut({transparent:!0,depthWrite:!1,blending:t?Tn:Qi,vertexShader:`attribute vec3 iPos; attribute vec4 iCol; attribute vec2 iSize; varying vec4 vCol; varying vec2 vUv; varying float vSoft;
        void main(){ vCol = iCol; vUv = uv; vSoft = iSize.y;
          vec4 mv = modelViewMatrix * vec4(iPos, 1.0); mv.xy += position.xy * min(iSize.x, max(-mv.z, 0.1) * 0.22); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec4 vCol; varying vec2 vUv; varying float vSoft;
        void main(){ float d = length(vUv - 0.5) * 2.0; float a = clamp(1.0 - d, 0.0, 1.0); a = vSoft > 0.5 ? a * a : smoothstep(0.0, 0.25, a);
          gl_FragColor = vec4(vCol.rgb, vCol.a * a);
          #include <colorspace_fragment>
        }`});this.mesh=new ae(s,r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,pe.add(this.mesh),this.p=[]}emit(e){this.p.length>=this.max&&this.p.shift(),this.p.push(e)}update(e){let t=this.p,i=0;for(let s=0;s<t.length;s++){let r=t[s];if(r.t+=e,r.t>=r.life)continue;r.vy-=r.grav*e;let o=Math.exp(-r.drag*e);r.vx*=o,r.vy*=o,r.vz*=o,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.y<.02&&r.grav>0&&(r.y=.02,r.vy*=-.3,r.vx*=.7,r.vz*=.7);let a=r.t/r.life;this.pos[i*3]=r.x,this.pos[i*3+1]=r.y,this.pos[i*3+2]=r.z,this.col[i*4]=r.r,this.col[i*4+1]=r.g,this.col[i*4+2]=r.b,this.col[i*4+3]=r.a*(a<.1?a/.1:1-Math.pow((a-.1)/.9,1.6)),this.size[i*2]=r.s0+(r.s1-r.s0)*a,this.size[i*2+1]=r.soft,t[i++]=r}t.length=i,this.geo.instanceCount=i;for(let s of["iPos","iCol","iSize"])this.geo.attributes[s].needsUpdate=!0}clear(){this.p.length=0,this.geo.instanceCount=0}},Lt=new Zl(900,!0),ni=new Zl(500,!1),ql=new se;function Pt(n,e,t,i,s){ql.set(s.color||"#fff");let r=gt?Math.ceil((s.n||1)*.6):s.n||1,o=gt?.85:1;for(let a=0;a<r;a++){let l=z(0,Le),c=z(s.upMin??-.3,s.upMax??1),h=z(s.spMin??0,s.sp??2),u=s.jitter?z(1-s.jitter,1+s.jitter):1;n.emit({x:e+z(-1,1)*(s.spread||0),y:t+z(-1,1)*(s.spreadY??s.spread??0),z:i+z(-1,1)*(s.spread||0),vx:Math.cos(l)*h*Math.sqrt(1-c*c*.5)+(s.vx||0),vy:c*h+(s.vy||0),vz:Math.sin(l)*h*Math.sqrt(1-c*c*.5)+(s.vz||0),life:z(s.life*.7,s.life*1.3),t:0,s0:s.s0*o*z(.8,1.2),s1:(s.s1??s.s0)*o*z(.8,1.2),r:ql.r*u,g:ql.g*u,b:ql.b*u,a:s.a??1,grav:s.grav||0,drag:s.drag??2,soft:s.soft?1:0})}}var Pm=new os(.82,1,40);Pm.rotateX(-Math.PI/2);var Lm=new Ln(1,28);Lm.rotateX(-Math.PI/2);var Xr=[];function Vs(n,e,t,i,s,r,o=.06){let a=new ae(Pm,new ke({color:r,transparent:!0,depthWrite:!1,blending:Tn}));a.position.set(n,o,e),a.renderOrder=4,pe.add(a),Xr.push({m:a,r0:t,r1:i,life:s,t:0})}var K1=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,62);t.addColorStop(0,"rgba(20,14,8,.85)"),t.addColorStop(.6,"rgba(30,22,10,.5)"),t.addColorStop(1,"rgba(30,22,10,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);for(let s=0;s<14;s++){let r=z(0,Le);e.strokeStyle="rgba(20,14,8,.4)",e.lineWidth=z(2,5),e.beginPath(),e.moveTo(64,64),e.lineTo(64+Math.cos(r)*z(40,62),64+Math.sin(r)*z(40,62)),e.stroke()}let i=new Pn(n);return i.colorSpace=ct,i})(),vs=[];function J1(n,e,t){let i=new ae(Lm,new ke({map:K1,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));if(i.position.set(n,.035,e),i.scale.setScalar(t),i.rotation.y=z(0,Le),i.renderOrder=1,pe.add(i),vs.push({m:i,t:0,life:6}),vs.length>14){let s=vs.shift();pe.remove(s.m),s.m.material.dispose()}}var Yl=new P,qr=[];function ta(n,e,t,i,s){let r=document.createElement("div");r.className="dnum "+(s||""),r.textContent=s==="heal"?"+"+Math.round(i):Math.round(i),J("hud-world").appendChild(r),qr.push({el:r,x:n+z(-.3,.3),y:e,z:t+z(-.3,.3),t:0,life:.9})}function Im(n){Lt.update(n),ni.update(n);for(let i=Xr.length-1;i>=0;i--){let s=Xr[i];s.t+=n;let r=s.t/s.life;if(r>=1){pe.remove(s.m),s.m.material.dispose(),Xr.splice(i,1);continue}let o=1-Math.pow(1-r,3);s.m.scale.setScalar(s.r0+(s.r1-s.r0)*o),s.m.material.opacity=1-r}for(let i=vs.length-1;i>=0;i--){let s=vs[i];s.t+=n,s.m.material.opacity=Math.min(1,(s.life-s.t)/1.5),s.t>s.life&&(pe.remove(s.m),s.m.material.dispose(),vs.splice(i,1))}let e=innerWidth,t=innerHeight;for(let i=qr.length-1;i>=0;i--){let s=qr[i];if(s.t+=n,s.t>s.life){s.el.remove(),qr.splice(i,1);continue}if(Yl.set(s.x,s.y+s.t*1.2,s.z).project(it),Yl.z>1){s.el.style.opacity=0;continue}let r=s.t/s.life,o=r<.15?.6+r/.15*.7:1.3-Math.min(.3,(r-.15)*1.2);s.el.style.transform=`translate(${(Yl.x*.5+.5)*e}px,${(-Yl.y*.5+.5)*t}px) translate(-50%,-50%) scale(${o.toFixed(2)})`,s.el.style.opacity=r>.7?(1-r)/.3:1}}function Qu(){Lt.clear(),ni.clear();for(let n of Xr)pe.remove(n.m),n.m.material.dispose();Xr.length=0;for(let n of vs)pe.remove(n.m),n.m.material.dispose();vs.length=0;for(let n of qr)n.el.remove();qr.length=0}function $l(n,e,t,i="#FF9A2E"){Pt(Lt,n,.4,e,{n:14,color:"#FFE6A0",sp:t*4.5,upMin:.1,upMax:1,life:.35,s0:.45,s1:.1,drag:4}),Pt(Lt,n,.5,e,{n:6,color:i,sp:t*2,upMin:.2,life:.45,s0:t*.8,s1:t*.3,drag:3,soft:!0,a:.85}),Pt(ni,n,.5,e,{n:6,color:"#5A5048",sp:t*1.5,upMin:.2,life:1,s0:t*.55,s1:t*1.2,drag:2.5,soft:!0,a:.5,vy:.8,jitter:.2}),Pt(ni,n,.2,e,{n:6,color:"#6B4A2E",sp:5,upMin:.5,life:.8,s0:.12,s1:.08,grav:14,drag:.5}),Vs(n,e,.3,t*1.15,.4,i),J1(n,e,t*.9),b.shake=Math.max(b.shake,.35)}function Yr(n,e,t,i){Pt(Lt,n,e,t,{n:8,color:i,sp:5,life:.25,s0:.22,s1:.04,drag:5}),Pt(Lt,n,e,t,{n:1,color:"#FFFFFF",sp:0,life:.12,s0:.9,s1:.3,soft:!0,a:.8})}function Zr(n,e,t,i,s=30){Pt(Lt,n,e,t,{n:s,color:i,sp:4,life:.9,s0:.3,s1:.05,drag:2.5,grav:-1,soft:!0,jitter:.3}),Pt(ni,n,e,t,{n:12,color:"#F4F0E0",sp:2.5,life:1,s0:.4,s1:.9,drag:3,soft:!0,a:.6,vy:.6})}function Dm(n,e,t=3){Pt(ni,n,.08,e,{n:t,color:"#D9C49A",sp:.8,upMin:.2,life:.5,s0:.15,s1:.4,drag:3,soft:!0,a:.35})}var Te={ctx:null,master:null,sfxGain:null,music:null,buffers:{},muted:At.get("muted",!1),musicOn:At.get("music",!0),sfxOn:At.get("sfx",!0),noise:null,ad:!1},Um=["shot_shotgun","shot_pop","shot_beam","shot_throw","boom","boom_big","hit","hit2","hit_wall","hurt","die","super_ready","super","gem","gem_drop","heal","empty","click","select","confirm","step","rustle","countdown","start","win","lose","respawn","kill"],id={};function Nm(){return Promise.all(Um.map(n=>fetch("assets/sfx/"+n+".mp3").then(e=>e.arrayBuffer()).then(e=>{id[n]=e}).catch(()=>{})))}function $r(){if(Te.ctx){Te.ctx.state==="suspended"&&!Te.ad&&!document.hidden&&Te.ctx.resume();return}try{let n=new(window.AudioContext||window.webkitAudioContext);Te.ctx=n;let e=n.createDynamicsCompressor();e.threshold.value=-10,e.knee.value=12,e.ratio.value=3,e.attack.value=.005,e.release.value=.2,e.connect(n.destination),Te.master=n.createGain(),Te.master.gain.value=Te.muted?0:.8,Te.master.connect(e),Te.sfxGain=n.createGain(),Te.sfxGain.gain.value=Te.sfxOn?1:0,Te.sfxGain.connect(Te.master),Te.noise=n.createBuffer(1,n.sampleRate,n.sampleRate);let t=Te.noise.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1;for(let i of Um)id[i]&&n.decodeAudioData(id[i].slice(0),s=>{Te.buffers[i]=s},()=>{});eS()}catch{Te.ctx=null}}function zm(n){Te.sfxOn=n,At.set("sfx",n),Te.sfxGain&&(Te.sfxGain.gain.value=n?1:0)}function Om(n){Te.musicOn=n,At.set("music",n),jt.gain&&(jt.gain.gain.value=n?jt.vol:0)}function Jl(n){if(Te.ctx)try{n?Te.ctx.suspend():Te.ctx.resume()}catch{}}var ed={},td=0,j1={shot_shotgun:.55,shot_pop:.4,shot_beam:.45,shot_throw:.7,boom:.75,boom_big:.95,hit:.6,hit2:.5,hit_wall:.35,hurt:.55,die:.7,super_ready:.5,super:.55,gem:.45,gem_drop:.45,heal:.3,empty:.4,click:.5,select:.5,confirm:.5,step:.18,rustle:.35,countdown:.6,start:.8,win:.7,lose:.7,respawn:.4,kill:.55};function ze(n,e,t=1,i=1){let s=Te.ctx;if(!s||Te.muted||!Te.sfxOn)return;let r=Te.buffers[n];if(!r)return;let o=performance.now();if(ed[n]&&o-ed[n]<70||(ed[n]=o,td>=12))return;let a=(j1[n]||.5)*t,l=0;if(e&&e!==b.me){let u=b.me&&b.me.alive?b.me.x:it.position.x,d=b.me&&b.me.alive?b.me.z:it.position.z,f=e.x-u,g=e.z-d,x=Math.hypot(f,g);if(a*=tt(1.4/(1+x*.12),0,1),a<.03)return;let p=it.rotation.y;l=tt((f*Math.cos(p)-g*Math.sin(p))/(x+4),-.7,.7)}let c=s.createBufferSource();c.buffer=r,c.playbackRate.value=i;let h=s.createGain();if(h.gain.value=a,c.connect(h),l&&s.createStereoPanner){let u=s.createStereoPanner();u.pan.value=l,h.connect(u),u.connect(Te.sfxGain)}else h.connect(Te.sfxGain);td++,c.onended=()=>td--,c.start()}var jt={gain:null,next:0,step:0,timer:null,vol:.11},nd=n=>440*Math.pow(2,(n-69)/12),Q1=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]];function Kl(n,e,t,i,s,r){let o=Te.ctx,a=o.createOscillator(),l=o.createGain();return a.type=e,a.frequency.setValueAtTime(t,n),l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(i,n+(r||.01)),l.gain.exponentialRampToValueAtTime(1e-4,n+(r||.01)+s),a.connect(l),l.connect(jt.gain),a.start(n),a.stop(n+s+.2),a}function Fm(n,e,t,i,s){let r=Te.ctx,o=r.createBufferSource();o.buffer=Te.noise;let a=r.createBiquadFilter();a.type=e,a.frequency.value=t;let l=r.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(i,n+.004),l.gain.exponentialRampToValueAtTime(1e-4,n+s),o.connect(a),a.connect(l),l.connect(jt.gain),o.start(n,Math.random()*.5),o.stop(n+s+.05)}function eS(){if(jt.timer)return;jt.gain=Te.ctx.createGain(),jt.gain.gain.value=Te.musicOn?jt.vol:0;let n=Te.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2400,n.Q.value=.5,jt.gain.connect(n),n.connect(Te.master),jt.next=Te.ctx.currentTime+.15,jt.timer=setInterval(tS,90)}function tS(){let n=Te.ctx;if(!n||!Te.musicOn||Te.muted||n.state!=="running"){n&&(jt.next=Math.max(jt.next,n.currentTime+.05));return}let e=b.state==="play"||b.state==="countdown",t=e&&b.match&&b.match.hot,i=60/(e?t?142:128:96)/2;for(;jt.next<n.currentTime+.35;){let s=jt.next,r=jt.step,o=Math.floor(r/8)%4,a=r%8,l=Q1[o],c=l[[0,1,2,1,2,1,0,2][a]]+12+(a===4&&o%2?12:0);if((!e||a%2===0||t)&&Kl(s,"triangle",nd(c),e?.035:.045,e?.14:.3),(a===0||e&&a===4)&&Kl(s,"triangle",nd(l[0]-12),e?.12:.07,i*(e?3.4:7),.02),!e&&a===0)for(let h of l)Kl(s,"sine",nd(h),.016,i*7.6,.5);e&&(a%4===0&&Kl(s,"sine",130,.3,.16,.003).frequency.exponentialRampToValueAtTime(45,s+.14),a%4===2&&Fm(s,"bandpass",1900,.1,.12),Fm(s,"bandpass",6e3,a%2?.008:.016,.03)),jt.next+=i,jt.step++}}var Ot={fighters:10,wait:25,shrink:120,r1:3.5,dps:650,dpsGrow:6,hp:1.6,dmg:.75,calm:40,power:{dmg:.1,hp:400}},nS=n=>n>=8?.75:n>=6?1:n>=4?1.5:n===3?2.2:3,En={group:null,wall:null,floor:null,u:{uR:{value:40},uTime:{value:0}}},km="varying vec3 vW; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",Bm=`float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
  float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }`;function Vm(){let n=new zt,e=new ae(new pn(1,1,1,gt?48:96,1,!0).translate(0,.5,0),new ut({transparent:!0,depthWrite:!1,side:Tt,uniforms:En.u,vertexShader:km,fragmentShader:`uniform float uTime; varying vec3 vW; varying vec2 vUv; ${Bm}
      void main(){ float a = atan(vW.z, vW.x) * 9.0;
        float m = n(vec2(a, vW.y * 0.9 - uTime * 0.6)) * 0.6 + n(vec2(a * 2.3 + uTime * 0.3, vW.y * 2.0 - uTime)) * 0.4;
        float k = clamp(1.0 - vUv.y, 0.0, 1.0); k = k * k;
        vec3 col = mix(vec3(0.42, 0.85, 0.3), vec3(0.62, 0.35, 0.95), m);
        gl_FragColor = vec4(col * 1.2, clamp((0.25 + m * 0.6) * k + 0.08 * k, 0.0, 0.85));
        #include <colorspace_fragment>
      }`}));e.scale.set(40,6,40),e.renderOrder=4,e.frustumCulled=!1;let t=new ae(new Bt(140,140).rotateX(-Math.PI/2),new ut({transparent:!0,depthWrite:!1,uniforms:En.u,vertexShader:km,fragmentShader:`uniform float uR; uniform float uTime; varying vec3 vW; ${Bm}
      void main(){ float d = length(vW.xz); if(d < uR - 0.6) discard;
        float k = clamp((d - uR + 0.6) / 2.0, 0.0, 1.0);
        float m = n(vW.xz * 0.35 + vec2(uTime * 0.25, -uTime * 0.18)) * 0.7 + n(vW.xz * 1.1 - uTime * 0.4) * 0.3;
        vec3 col = mix(vec3(0.35, 0.75, 0.25), vec3(0.55, 0.3, 0.85), m);
        gl_FragColor = vec4(col, k * (0.32 + m * 0.3));
        #include <colorspace_fragment>
      }`}));t.position.y=.09,t.renderOrder=3,t.frustumCulled=!1,n.add(e,t),pe.add(n),Object.assign(En,{group:n,wall:e,floor:t})}function Wm(){En.group&&(pe.remove(En.group),En.group.traverse(n=>{n.geometry&&(n.geometry.dispose(),n.material.dispose())}),En.group=null)}var Ql=new dl(.24,0),Xm=ft({color:"#FFC93C",emissive:"#FF9A1E",emissiveIntensity:1.3,roughness:.25,flatShading:!0}),qm=new ke({color:new se("#FFF4C0").multiplyScalar(2),toneMapped:!1}),Ym=new Bt(.7,.7).rotateX(-Math.PI/2),Zm=new ke({color:"#000",transparent:!0,opacity:.25,depthWrite:!1});function $m(n,e,t,i,s=4){let r=new ae(Ql,Xm);r.castShadow=!gt;let o=new ae(Ql,qm);o.scale.setScalar(.45),r.add(o);let a=new ae(Ym,Zm);a.renderOrder=1,a.scale.setScalar(.6),pe.add(r,a),b.pickups.push({kind:"power",x:n,z:e,y:.6,vx:t,vz:i,vy:s,t:0,m:r,sh:a,landed:!1,ph:z(0,Le)})}function iS(n){let e=b.pickups[n];pe.remove(e.m,e.sh),b.pickups.splice(n,1)}function Km(){let n=Math.hypot(B.hx,B.hz)+1.5;b.match={mode:"br",t:0,over:!1,winner:null,respawn:!1,count:[0,0],alive:Ot.fighters,place:0,fog:{r:n,r0:n,tick:0,shrinking:!1},crates:0},Wm(),Vm(),En.u.uR.value=n}function Jm(){Wm(),e0(0)}function sS(n,e=1){n.power=(n.power||0)+e;let t=Ot.power;n.pow=(n.pow0||1)*(1+t.dmg*n.power),n.max+=t.hp*e,n.hp=Math.min(n.max,n.hp+t.hp*e),(n===b.me||n.seen)&&ta(n.x,n.H.height+.3,n.z,t.hp*e,"heal")}Vt("kill",(n,e)=>{let t=b.match;if(!t||t.mode!=="br"||t.over)return;let i=Math.max(1,n.power||0);for(let s=0;s<i;s++){let r=s/i*Le+z(-.3,.3),o=z(1.2,2.6);$m(n.x,n.z,Math.sin(r)*o,Math.cos(r)*o,z(3,5))}if(t.alive=b.fighters.filter(s=>s.alive).length,n.place=t.alive+1,n===b.me)return t.place=n.place,Gm(-1,"out");if(t.alive<=1){let s=b.fighters.find(r=>r.alive);s&&(s.place=1,s===b.me&&(t.place=1)),Gm(s?s.team:-1,"last")}});Vt("crateBreak",n=>{!b.match||b.match.mode!=="br"||(b.match.crates++,Pt(ni,n.x,.6,n.z,{n:14,color:"#A87645",sp:3,upMin:.4,vy:3,life:.7,s0:.25,s1:.08,grav:6,drag:1.5}),Zr(n.x,.7,n.z,"#FFC93C",14),ze("hit_wall",n,1.3,.6),$m(n.x,n.z,z(-.6,.6),z(-.6,.6),5))});function jm(n,e,t){let i=hi(n),s=ui(e);if(Vi(i,s)!=="C")return!1;let r=ym(i,s);return r?(qu(r,t)&&Ct("crateBreak",r),!0):!1}function sd(n,e){qu(n,e)&&Ct("crateBreak",n)}function Qm(n,e,t,i){for(let s of B.crates)s.alive&&Math.hypot(s.x-n,s.z-e)<t+.75&&sd(s,i)}var jl=null,Hm=-1;function e0(n){jl=jl||document.getElementById("fogtint"),jl&&(n=Math.round(n*20)/20,n!==Hm&&(Hm=n,jl.style.opacity=n))}var t0=()=>b.match&&b.match.mode==="br"?b.match.fog.r:1e9;function n0(n){let e=b.match;if(!e||e.mode!=="br")return 1e9;let t=e.fog,i=Math.max(0,e.t+n-Math.max(e.t,Ot.wait));return Math.max(Ot.r1,t.r-i0(e)*i)}var i0=n=>(n.fog.r0-Ot.r1)/Ot.shrink*nS(n.alive),na={x:0,z:0};function s0(n,e){let t=b.match;if(!t||t.mode!=="br")return;En.u.uTime.value=e,bm(n);let i=t.fog;if(b.state==="play"&&!t.over){t.t+=n;let r=i.shrinking;if(t.t>=Ot.wait&&(i.r=Math.max(Ot.r1,i.r-i0(t)*n)),i.shrinking=t.t>=Ot.wait&&i.r>Ot.r1,i.shrinking&&!r&&Ct("fogStart"),i.tick-=n,i.tick<=0){i.tick=.5;let o=Ot.dps+Ot.dpsGrow*t.t;for(let a of b.fighters)a.alive&&Math.hypot(a.x,a.z)>i.r&&(a.inFog=(a.inFog||0)+1,Ct("fogHurt",a,o*.5))}}En.u.uR.value=i.r,En.wall&&En.wall.scale.set(i.r,6,i.r);let s=b.me;if(e0(s&&s.alive&&Math.hypot(s.x,s.z)>i.r&&b.state!=="end"?.85:0),s&&s.alive&&Math.hypot(s.x,s.z)>i.r-3&&Math.random()<n*8){let r=z(0,Le),o=z(1,4);Pt(ni,s.x+Math.sin(r)*o,z(.3,1.6),s.z+Math.cos(r)*o,{n:1,color:Math.random()<.5?"#8BD86A":"#A77CF0",sp:.3,vy:.3,life:1.4,s0:.5,s1:1.1,drag:.5,soft:!0,a:.35})}for(let r=b.pickups.length-1;r>=0;r--){let o=b.pickups[r];o.t+=n,o.landed||(o.vy-=16*n,o.x+=o.vx*n,o.z+=o.vz*n,o.y+=o.vy*n,na.x=o.x,na.z=o.z,Gs(na,.25)&&(o.x=na.x,o.z=na.z,o.vx*=-.4,o.vz*=-.4),o.y<.5&&(o.y=.5,Math.abs(o.vy)>2?(o.vy=-o.vy*.4,o.vx*=.6,o.vz*=.6):o.landed=!0));let a=o.landed?Math.sin(e*3+o.ph)*.08:0;if(o.m.position.set(o.x,o.y+a,o.z),o.m.rotation.y=e*2+o.ph,o.sh.position.set(o.x,.04,o.z),Math.random()<n*3&&Lt.emit({x:o.x+z(-.2,.2),y:o.y,z:o.z+z(-.2,.2),vx:0,vy:.5,vz:0,life:.6,t:0,s0:.08,s1:.01,r:1,g:.8,b:.3,a:1,grav:0,drag:.5,soft:1}),!(o.t<.35||b.state!=="play")){for(let l of b.fighters)if(!(!l.alive||(l.x-o.x)**2+(l.z-o.z)**2>.9*.9)){iS(r),sS(l,1),Pt(Lt,l.x,1,l.z,{n:12,color:"#FFD45A",sp:2,vy:1.5,life:.45,s0:.18,s1:.02,soft:!0}),Vs(l.x,l.z,.3,1.2,.4,"#FFC93C"),ze("gem",l,l===b.me?1:.6,.85+Math.min(10,l.power)*.03),Ct("power",l);break}}}}function Gm(n,e){let t=b.match;t.over=!0,t.winner=n,t.why=e,Ct("matchOver",n,e)}function r0(){Vm();let n=[...En.group.children];pe.remove(En.group),En.group=null;let e=new ae(Ql,Xm);return e.add(new ae(Ql,qm)),n.push(e,new ae(Ym,Zm)),n}var l0=new P,ec=new Bt(1,1),ic=new pn(1,.15,1,8,1,!0);ic.rotateX(Math.PI/2);ic.translate(0,0,-.5);var c0=n=>{let e=new se(n);return new P(e.r,e.g,e.b)},o0=n=>new ut({transparent:!0,depthWrite:!1,blending:Tn,toneMapped:!1,fog:!1,uniforms:{c:{value:c0(n)},a:{value:1}},vertexShader:"varying vec2 vU; void main(){ vU = uv - 0.5; float s = length(modelMatrix[0].xyz); vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); mv.xy += position.xy * s; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 c; uniform float a; varying vec2 vU; void main(){ float d = length(vU) * 2.0; if(d >= 1.0) discard; float core = 1.0 - smoothstep(0.0, 0.42, d); float halo = pow(clamp(1.0 - d, 0.0, 1.0), 2.2); vec3 col = mix(c * halo * 1.6, vec3(1.3), core); gl_FragColor = vec4(col * a, 1.0); }"}),rS=n=>new ut({transparent:!0,depthWrite:!1,blending:Tn,toneMapped:!1,fog:!1,side:Tt,uniforms:{c:{value:c0(n)}},vertexShader:"varying float vA; varying float vE; void main(){ vA = uv.y; vec4 mv = modelViewMatrix * vec4(position, 1.0); vec3 n = normalize(normalMatrix * normal); vE = abs(dot(n, normalize(-mv.xyz))); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 c; varying float vA; varying float vE; void main(){ float e = clamp(vE, 0.0, 1.0), a = clamp(vA, 0.0, 1.0); float tail = smoothstep(0.0, 0.5, a); float core = pow(e, 6.0); vec3 col = c * pow(e, 1.3) * 1.3 + vec3(1.0) * core * 0.8; gl_FragColor = vec4(col * tail, 1.0); }"}),a0={},tc=n=>a0[n]||(a0[n]={glow:o0(n),trail:rS(n),flash:o0(new se(n).lerp(new se("#FFFFFF"),.45).getStyle())}),h0=[];function u0(n,e,t,i=!0){let s=h0.pop();if(!s){s=new zt;let a=new ae(ec);a.frustumCulled=!1,a.renderOrder=7;let l=new ae(ic);l.frustumCulled=!1,l.renderOrder=6,s.add(a,l),s.userData={glow:a,tr:l}}let r=tc(n),o=s.userData;return o.glow.material=r.glow,o.tr.material=r.trail,o.glow.scale.setScalar(e),o.len=t,o.w=e*.42,o.tr.visible=i,o.tr.scale.set(.001,.001,.001),s.visible=!0,pe.add(s),s}function rd(n,e,t,i,s,r,o){n.position.set(e,t,i);let a=n.userData;if(!a.tr.visible)return;n.rotation.set(0,Math.atan2(s,r),0);let l=Math.max(.001,Math.min(a.len,o));a.tr.scale.set(a.w,a.w,l)}function sc(n){pe.remove(n),h0.push(n)}var Kr=[],od=[];function Jr(n,e,t,i,s,r=.07){if(it.position.distanceToSquared(l0.set(n,e,t))>2500)return;let o=od.pop();o||(o=new ae(ec,tc(i).flash.clone()),o.frustumCulled=!1,o.renderOrder=8),o.material.uniforms.c.value.copy(tc(i).flash.uniforms.c.value),o.position.set(n,e,t),o.scale.setScalar(s),pe.add(o),Kr.push({m:o,t:r,T:r,s})}var nc=new Bt(1,1),d0=n=>{let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),i=t.createRadialGradient(32,32,0,32,32,32);for(let[s,r]of n)i.addColorStop(s,r);return t.fillStyle=i,t.fillRect(0,0,64,64),new Pn(e)},oS=d0([[0,"rgba(20,14,6,0.85)"],[.45,"rgba(30,22,10,0.55)"],[.8,"rgba(36,26,14,0.15)"],[1,"rgba(36,26,14,0)"]]),aS=d0([[0,"rgba(255,240,200,1)"],[.3,"rgba(255,170,60,0.85)"],[.7,"rgba(200,60,10,0.25)"],[1,"rgba(120,20,0,0)"]]),f0=new ke({map:oS,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),p0=new ke({map:aS,transparent:!0,depthWrite:!1,blending:Tn,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),ys=[],lS=gt?12:24;function m0(n,e,t,i,s,r,o=.45){if(it.position.distanceToSquared(l0.set(n,e,t))>1600)return;let a=ys.length>=lS?ys.shift():null;a||(a={burn:new ae(nc,f0.clone()),ember:new ae(nc,p0.clone())},a.burn.renderOrder=2,a.ember.renderOrder=3);let l=Math.random()*Math.PI*2;for(let c of[a.burn,a.ember])c.position.set(n+i*.04,e+s*.04,t+r*.04),c.lookAt(c.position.x+i,c.position.y+s,c.position.z+r),c.rotateZ(l),c.scale.setScalar(o*(c===a.ember?.75:1)),pe.add(c);a.t=0,ys.push(a)}function g0(n){for(let e=Kr.length-1;e>=0;e--){let t=Kr[e];t.t-=n;let i=Math.max(0,t.t/t.T);t.m.scale.setScalar(t.s*(.6+.4*i)),t.m.material.uniforms.a.value=i,t.t<=0&&(pe.remove(t.m),od.push(t.m),Kr.splice(e,1))}for(let e=ys.length-1;e>=0;e--){let t=ys[e];t.t+=n,t.ember.material.opacity=Math.max(0,1-t.t/.6),t.burn.material.opacity=Math.min(1,Math.max(0,1-(t.t-3.5)/1.5)),t.t>5&&(pe.remove(t.burn,t.ember),ys.splice(e,1))}}function x0(){for(let n of Kr)pe.remove(n.m),od.push(n.m);Kr.length=0;for(let n of ys)pe.remove(n.burn,n.ember);ys.length=0}function _0(n){let e=[];for(let t of n){let i=tc(t);e.push(new ae(ec,i.glow),new ae(ic,i.trail),new ae(ec,i.flash))}return e.push(new ae(nc,f0),new ae(nc,p0)),e.forEach(t=>{t.frustumCulled=!1}),e}var Un=.75,b0=3,cS=.13,hS=3,uS=1.6,dS=0;function fS(){return{mx:0,mz:0,aim:0,tx:0,tz:0,fire:!1,sup:!1,aiming:!1}}function ld(n){let e=Xn[n.hero],t={id:++dS,name:n.name,team:n.team,hero:n.hero,H:e,isMe:!!n.isMe,bot:null,level:n.level||1,x:0,z:0,vx:0,vz:0,kx:0,kz:0,aim:n.team===0?Math.PI:0,alive:!1,hp:e.hp,max:e.hp,ammo:ti,cdT:0,charge:0,regenT:0,spawnT:0,shieldT:0,deadT:0,respawnT:.01,atkT:9,supT:9,flash:0,stunT:0,revealT:0,inGrass:!1,gems:0,kills:0,deaths:0,dmgDone:0,lastHitBy:null,pendingBeam:null,inp:fS(),V:null,tag:null,victory:!1,defeat:!1};return t.pow=t.pow0=1+(t.level-1)*.05,t.max=t.hp=Math.round(e.hp*t.pow),t.V=ea(n.hero),t.V.root.visible=!1,pe.add(t.V.root),b.fighters.push(t),t}function S0(){for(let n of b.fighters)pe.remove(n.V.root),n.V.mesh.geometry.dispose(),n.V.mat.dispose(),n.tag&&n.tag.el.remove();b.fighters.length=0,b.me=null}function jr(n){return n===b.me?"me":b.me&&n.team===b.me.team?"ally":"foe"}function sa(n,e){let t=B.spawns[n.team]||B.spawns.ffa,i=e||t[(n.slot??0)%t.length];e||(n.power=0,n.pow=n.pow0,n.max=Math.round(n.H.hp*n.pow0*(n.hpMul||1))),n.x=i.x,n.z=i.z,n.vx=n.vz=n.kx=n.kz=0,n.alive=!0,n.hp=n.max,n.ammo=ti,n.cdT=0,n.deadT=0,n.spawnT=0,n.shieldT=uS,n.regenT=0,n.aim=B.spawns[n.team]?n.team===0?Math.PI:0:pS(n.x,n.z),n.V.yaw=n.aim,n.inp.aim=n.aim,n.atkT=n.supT=9,n.spot={},n.pendingBeam=null,n.stunT=0,n.gems=0,n.V.root.visible=!0,n.V.root.scale.setScalar(1),Wl(n.V,jr(n)),_s.spawn(n.V),n.V.root.position.set(n.x,0,n.z),Pt(Lt,n.x,.3,n.z,{n:18,color:jr(n)==="foe"?"#FF7A6A":"#8FE0FF",sp:1.5,upMin:.6,upMax:1,vy:3,life:.7,s0:.25,s1:.05,drag:1.5,soft:!0}),Vs(n.x,n.z,.2,1.3,.5,jr(n)==="foe"?"#FF5A4A":"#6FD8FF"),Ct("spawn",n)}function pS(n,e){let t=Math.atan2(-n,-e),i=t,s=-1e9;for(let r=0;r<8;r++){let o=r*Math.PI/4,a=gn(n,e,n+Math.sin(o)*8,e+Math.cos(o)*8),c=(a<0?8:a*8)+Math.cos(o-t)*3;c>s&&(s=c,i=o)}return i}var v0=3.2,mS=10,gS=6.5,xS=3.5,cd=(n,e)=>e.spot&&e.spot[n]>0;function eo(n,e){if(e.team===n.team)return!0;if(!_S(n.team,e))return!1;if(cd(n.team,e))return!0;let t=e.x-n.x,i=e.z-n.z,s=b.match&&b.match.mode==="br"?gS:mS;return t*t+i*i<s*s||Vr(n.x,n.z,e.x,e.z)}function _S(n,e){if(e.team===n||!e.alive||!e.inGrass||e.revealT>0)return!0;for(let t of b.fighters)if(t.alive&&t.team===n&&(t.x-e.x)**2+(t.z-e.z)**2<v0*v0)return!0;return!1}var ii={x:0,z:0};function E0(n,e){if(!n.alive){n.deadT+=e,b.match&&b.match.respawn&&!b.match.over&&(n.respawnT-=e,n.respawnT<=0&&sa(n));return}let t=n.H,i=n.inp;if(n.spawnT+=e,n.atkT+=e,n.supT+=e,n.regenT+=e,n.shieldT=Math.max(0,n.shieldT-e),n.revealT=Math.max(0,n.revealT-e),n.flash=Math.max(0,n.flash-e*6),n.cdT=Math.max(0,n.cdT-e),n.stunT=Math.max(0,n.stunT-e),n.ammo<ti&&(n.ammo=Math.min(ti,n.ammo+e/t.attack.reload),n.ammo>=ti&&n.isMe&&Ct("ammoFull",n)),n.regenT>b0&&n.hp<n.max){let d=Math.min(n.max-n.hp,n.max*cS*e);n.hp+=d,n.healAcc=(n.healAcc||0)+d,n.healAcc>400&&(n===b.me&&ta(n.x,t.height+.3,n.z,n.healAcc,"heal"),n.healAcc=0)}let s=b.state!=="play"||n.stunT>0||n.pendingBeam,r=s?0:i.mx,o=s?0:i.mz,a=Math.hypot(r,o);a>1&&(r/=a,o/=a);let l=t.speed*(n.gems>0,1),c=1-Math.exp(-e*18);n.vx+=(r*l-n.vx)*c,n.vz+=(o*l-n.vz)*c;let h=Math.exp(-e*7);n.kx*=h,n.kz*=h,ii.x=n.x+(n.vx+n.kx)*e,ii.z=n.z+(n.vz+n.kz)*e,Gs(ii,t.rad);for(let d of b.fighters){if(d===n||!d.alive)continue;let f=ii.x-d.x,g=ii.z-d.z,x=f*f+g*g,p=t.rad+d.H.rad;if(x<p*p&&x>1e-6){let m=Math.sqrt(x),_=(p-m)*.5/m;ii.x+=f*_,ii.z+=g*_}}if(Gs(ii,t.rad),e>0){let d=(ii.x-n.x)/e,f=(ii.z-n.z)/e;n.vx=Dn(n.vx,d,.5),n.vz=Dn(n.vz,f,.5)}n.x=ii.x,n.z=ii.z;let u=kl(n.x,n.z);u&&!n.inGrass&&n.V.root.visible&&Pt(ni,n.x,.6,n.z,{n:4,color:"#7FC24E",sp:1.2,life:.5,s0:.12,s1:.06,grav:4,drag:1}),n.inGrass=u,Math.hypot(n.vx,n.vz)>2&&Math.random()<e*4&&!n.H.hover&&!u&&Dm(n.x,n.z,1),!n.pendingBeam&&(!s||b.state==="countdown"&&n.stunT<=0)&&(n.aim=i.aim),n.pendingBeam&&(n.pendingBeam.t-=e,n.pendingBeam.t<=0&&SS(n)),s||(i.sup&&n.charge>=1?yS(n,i.tx,i.tz):i.fire&&vS(n,i.tx,i.tz)),i.fire=i.sup=!1}function Wi(n){return n.alive&&n.ammo>=1&&n.cdT<=0&&!n.pendingBeam&&b.state==="play"}function hd(n,e){return n.V.muzzle.getWorldPosition(e),e.y=Un,e}var ot=new P;function vS(n,e,t){if(!Wi(n)){n.isMe&&n.ammo<1&&n.cdT<=0&&Ct("empty",n);return}let i=n.H,s=i.attack;n.ammo-=1,n.cdT=s.cd,n.atkT=0,n.regenT=0,n.revealT=Math.max(n.revealT,1);let r=Math.atan2(e-n.x,t-n.z);n.aim=r,n.V.yaw=r,_s.attack(n.V),w0(n,s,r,e,t,!1),Ct("attack",n,!1)}function yS(n,e,t){if(!n.alive||n.pendingBeam||b.state!=="play")return;let i=n.H,s=i.super;n.charge=0,n.supT=0,n.atkT=0,n.regenT=0,n.revealT=Math.max(n.revealT,1.2);let r=Math.atan2(e-n.x,t-n.z);if(n.aim=r,n.V.yaw=r,_s.super(n.V),s.kind==="beam"){n.pendingBeam={t:s.windup,aim:r},Ct("super",n,!0),ze("super",n);return}w0(n,s,r,e,t,!0),Ct("super",n,!1),ze("super",n)}function w0(n,e,t,i,s,r){hd(n,ot);let o=n.pow;if(e.kind==="fan"){for(let a=0;a<e.count;a++){let l=t+(e.count>1?(a/(e.count-1)-.5)*e.spread:0)+z(-.015,.015);ad(n,ot.x,ot.z,l,e,e.dmg*o,r)}Jr(ot.x,ot.y,ot.z,e.color,r?1.3:.85,.08),Pt(Lt,ot.x,ot.y,ot.z,{n:r?16:8,color:e.color,sp:r?7:4,vx:Math.sin(t)*4,vz:Math.cos(t)*4,life:.22,s0:.35,s1:.05,drag:6}),Pt(ni,ot.x,ot.y,ot.z,{n:r?10:5,color:"#F2E8D0",sp:1.5,vx:Math.sin(t)*3,vz:Math.cos(t)*3,life:.5,s0:.18,s1:.5,drag:4,soft:!0,a:.6}),r&&(n.kx-=Math.sin(t)*7,n.kz-=Math.cos(t)*7,b.shake=Math.max(b.shake,n.isMe?.5:0)),ze(r?"boom":"shot_shotgun",n)}else if(e.kind==="bounce")ad(n,ot.x,ot.z,t,e,e.dmg*o,r),Jr(ot.x,ot.y,ot.z,e.color,r?1.4:.6,.07),Pt(Lt,ot.x,ot.y,ot.z,{n:r?12:5,color:e.color,sp:3,life:.2,s0:.25,s1:.04,drag:6}),r&&(n.kx-=Math.sin(t)*4,n.kz-=Math.cos(t)*4,b.shake=Math.max(b.shake,n.isMe?.35:0)),ze(r?"boom":"shot_pop",n,r?.7:1);else if(e.kind==="needle")ad(n,ot.x,ot.z,t,e,e.dmg*o,r),Jr(ot.x,ot.y,ot.z,e.color,.7,.07),Pt(Lt,ot.x,ot.y,ot.z,{n:6,color:e.color,sp:3,life:.18,s0:.3,s1:.05,drag:6}),ze("shot_beam",n,.6);else if(e.kind==="lob"){let a=tt(Math.hypot(i-n.x,s-n.z),1.5,e.range);M0(n,n.x+Math.sin(t)*a,n.z+Math.cos(t)*a,e,e.flight*(.65+.35*a/e.range),0,r),ze("shot_throw",n)}else if(e.kind==="barrage"){let a=tt(Math.hypot(i-n.x,s-n.z),3,e.range);for(let l=0;l<e.count;l++){let c=(l-(e.count-1)/2)*e.step,h=tt(a+c,1.5,e.range+e.step);M0(n,n.x+Math.sin(t)*h+z(-.3,.3),n.z+Math.cos(t)*h+z(-.3,.3),e,e.flight*(.7+.3*h/e.range),l*.08,!0)}ze("shot_throw",n)}}var T0=new Kt(1,10,8),A0=new Cr(.5,2.2,3,8);A0.rotateX(Math.PI/2);var y0={},ia=(n,e=2.4)=>y0[n+e]||(y0[n+e]=new ke({color:new se(n).multiplyScalar(e),toneMapped:!1}));function ad(n,e,t,i,s,r,o){let a=s.kind==="needle",l=s.kind==="bounce",c=s.size||.2,h=u0(s.color,a||l?c*2.6:c*2.2,a?3.6:l?o?2.6:1.8:o?1.8:1.4,a||l||!gt);rd(h,e,Un,t,Math.sin(i),Math.cos(i),0),b.shots.push({owner:n,team:n.team,x:e,z:t,x0:n.x,z0:n.z,vx:Math.sin(i)*s.speed,vz:Math.cos(i)*s.speed,range:s.range,dist:0,dmg:r,W:s,isSuper:o,m:h,knock:s.knock||0,bounces:s.bounces||0,seg:0,hits:s.pierce?new Set:null})}function R0(n,e,t,i){let s=Math.sign(t)||1,r=Math.sign(i)||1,o=Ol(bi(n+s*.06,e-r*.06)),a=Ol(bi(n-s*.06,e+r*.06));return o&&!a?[-t,i]:a&&!o?[t,-i]:[-t,-i]}function ud(n,e,t,i,s){let r=[{x:n,z:e}],o=Math.sin(t),a=Math.cos(t),l=i;for(let c=0;c<=s&&l>.05;c++){let h=n+o*l,u=e+a*l,d=gn(n,e,h,u);if(d<0){r.push({x:h,z:u});break}let f=n+(h-n)*d-o*.03,g=e+(u-e)*d-a*.03;if(r.push({x:f,z:g}),l-=Math.hypot(f-n,g-e),c===s)break;[o,a]=R0(f+o*.03,g+a*.03,o,a),n=f,e=g}return r}function C0(n,e,t,i){for(let s=1;s<n.length;s++)if(rc(n[s-1].x,n[s-1].z,n[s].x,n[s].z,e,t)<i*i)return!0;return!1}function rc(n,e,t,i,s,r){let o=t-n,a=i-e,l=o*o+a*a,c=l>0?((s-n)*o+(r-e)*a)/l:0;c=tt(c,0,1);let h=n+o*c-s,u=e+a*c-r;return h*h+u*u}function P0(n){for(let e=b.shots.length-1;e>=0;e--){let t=b.shots[e],i=Math.hypot(t.vx,t.vz)*n,s=t.x+t.vx*n,r=t.z+t.vz*n,o=!1;if(t.dist+i>=t.range){let l=(t.range-t.dist)/i;s=t.x+t.vx*n*l,r=t.z+t.vz*n*l,o=!0}let a=gn(t.x,t.z,s,r);if(a>=0){s=t.x+(s-t.x)*a,r=t.z+(r-t.z)*a,o=!0,Yr(s,Un,r,t.W.color),ze("hit_wall",{x:s,z:r},.35,t.bounces>0?1.5:1);let l=Math.hypot(t.vx,t.vz)||1;Jr(s,Un,r,t.W.color,(t.W.size||.2)*4,.09);let c=Math.abs(t.vx)>Math.abs(t.vz);if(m0(s,Un,r,c?-Math.sign(t.vx):0,0,c?0:-Math.sign(t.vz),t.W.kind==="needle"?.55:.32),jm(s+t.vx/l*.08,r+t.vz/l*.08,t.W.dmgFar?Dn(t.dmg,t.W.dmgFar*t.owner.pow,tt(t.dist/t.range,0,1)):t.dmg),t.bounces>0){[t.vx,t.vz]=R0(s,r,t.vx,t.vz),t.hits||(t.vx*=1.08,t.vz*=1.08),t.bounces--,o=!1,t.bounced=!0;let h=Math.hypot(t.vx,t.vz)||1;s+=t.vx/h*.03,r+=t.vz/h*.03}}for(let l of b.fighters){if(!l.alive||l.team===t.team)continue;let c=l.H.rad+(t.W.size||.2)*.8;if(rc(t.x,t.z,s,r,l.x,l.z)<c*c){if(t.hits){if(t.hits.has(l))continue;t.hits.add(l)}let h=t.dmg;if(t.W.dmgFar&&(h=Dn(t.dmg,t.W.dmgFar*t.owner.pow,tt((t.dist+i)/t.range,0,1))),Ws(l,h,t.owner,t.isSuper),t.knock){let u=Math.hypot(t.vx,t.vz);l.kx+=t.vx/u*t.knock*2.2,l.kz+=t.vz/u*t.knock*2.2,l.stunT=Math.max(l.stunT,.25)}if(Yr(l.x,Un+.1,l.z,t.W.color),Jr(l.x,Un+.1,l.z,t.W.color,.7,.08),t.hits)continue;o=!0,s=l.x,r=l.z;break}}t.dist+=Math.hypot(s-t.x,r-t.z),t.x=s,t.z=r,t.bounced&&(t.seg=t.dist,t.bounced=!1),rd(t.m,s,Un,r,t.vx,t.vz,t.dist-t.seg),Math.random()<.25&&Lt.emit({x:s,y:Un,z:r,vx:0,vy:0,vz:0,life:t.W.kind==="needle"?.3:.16,t:0,s0:(t.W.size||.2)*(t.W.kind==="needle"?1.6:1.4),s1:.02,r:1,g:.8,b:.4,a:.7,grav:0,drag:0,soft:1}),o&&(sc(t.m),b.shots.splice(e,1))}}var L0=new Kt(.16,12,10),I0=ft({color:"#26262E",roughness:.35,metalness:.2}),dd=new os(.9,1,36);dd.rotateX(-Math.PI/2);function M0(n,e,t,i,s,r,o){let a=new ae(L0,I0);a.castShadow=!0;let l=new ae(T0,ia("#FFC04A",3));l.scale.setScalar(.05),l.position.y=.17,a.add(l),a.visible=!1,pe.add(a);let c=new ae(dd,new ke({color:jr(n)==="foe"?"#FF4A3A":"#5FC8FF",transparent:!0,opacity:0,depthWrite:!1}));c.position.set(e,.05,t),c.scale.setScalar(i.radius),c.renderOrder=3,pe.add(c),hd(n,ot),b.lobs.push({owner:n,team:n.team,x0:ot.x,z0:ot.z,y0:1,x1:e,z1:t,T:s,t:-r,W:i,isSuper:o,m:a,mark:c,h:3.2+Math.hypot(e-n.x,t-n.z)*.2})}function D0(n){for(let e=b.lobs.length-1;e>=0;e--){let t=b.lobs[e];if(t.t+=n,t.t<0)continue;let i=Math.min(1,t.t/t.T),s=Dn(t.x0,t.x1,i),r=Dn(t.z0,t.z1,i),o=Dn(t.y0,.15,i)+Math.sin(i*Math.PI)*t.h;t.m.visible=!0,t.m.position.set(s,o,r),t.m.rotation.x+=n*9,t.m.rotation.z+=n*5,t.mark.material.opacity=.25+.55*i,t.mark.scale.setScalar(t.W.radius*(1.25-.25*i)),Math.random()<.6&&Lt.emit({x:s,y:o+.17,z:r,vx:z(-.4,.4),vy:.6,vz:z(-.4,.4),life:.3,t:0,s0:.12,s1:.02,r:1,g:.75,b:.3,a:1,grav:0,drag:1,soft:0}),i>=1&&(pe.remove(t.m),pe.remove(t.mark),t.mark.material.dispose(),b.lobs.splice(e,1),MS(t.owner,t.x1,t.z1,t.W,t.isSuper))}}function MS(n,e,t,i,s){$l(e,t,i.radius,i.color),ze(s?"boom_big":"boom",{x:e,z:t});for(let r of b.fighters){if(!r.alive||r.team===n.team)continue;let o=Math.hypot(r.x-e,r.z-t);if(!(o>i.radius+r.H.rad)&&(Ws(r,i.dmg*n.pow,n,s),i.knock)){let a=o||1;r.kx+=(r.x-e)/a*i.knock*3,r.kz+=(r.z-t)/a*i.knock*3,r.stunT=Math.max(r.stunT,.3)}}Qm(e,t,i.radius,i.dmg*n.pow),i.puddle&&bS(n,e,t,i.puddle)}var fd=new Ln(1,32);fd.rotateX(-Math.PI/2);var oc={uTime:{value:0}},F0=new ut({transparent:!0,depthWrite:!1,uniforms:Object.assign({uK:{value:1}},oc),vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uTime; uniform float uK; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
    float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
    void main(){ vec2 p = vUv - 0.5; float d = length(p) * 2.0;
      float e = n(p * 7.0 + uTime * 0.7) * 0.25 + n(p * 15.0 - uTime) * 0.12;
      float a = 1.0 - smoothstep(0.82, 1.0, d + e * 0.6);
      float bub = smoothstep(0.62, 0.8, n(p * 12.0 + vec2(uTime * 0.5, -uTime * 0.8)));
      vec3 col = mix(vec3(0.95, 0.35, 0.05), vec3(1.0, 0.8, 0.25), bub + (1.0 - d) * 0.4);
      gl_FragColor = vec4(col * 1.6, a * 0.78 * uK);
      #include <colorspace_fragment>
    }`});function bS(n,e,t,i){let s=new ae(fd,F0.clone());s.material.uniforms.uTime=oc.uTime,s.position.set(e,.045,t),s.scale.setScalar(.2),s.renderOrder=3,pe.add(s),b.puddles.push({owner:n,team:n.team,x:e,z:t,r:i.r,dps:i.dps*n.pow,t:0,life:i.t,tick:0,m:s})}function U0(n){oc.uTime.value+=n;for(let e=b.puddles.length-1;e>=0;e--){let t=b.puddles[e];t.t+=n,t.tick-=n;let i=t.t/t.life;if(t.m.scale.setScalar(t.r*Math.min(1,t.t/.15)),t.m.material.uniforms.uK.value=i>.75?(1-i)/.25:1,Math.random()<n*14&&Lt.emit({x:t.x+z(-t.r,t.r)*.7,y:.1,z:t.z+z(-t.r,t.r)*.7,vx:0,vy:z(.6,1.4),vz:0,life:.5,t:0,s0:.14,s1:.02,r:1,g:.6,b:.15,a:1,grav:0,drag:.5,soft:1}),t.tick<=0){t.tick=.25;for(let s of b.fighters)s.alive&&s.team!==t.team&&(s.x-t.x)**2+(s.z-t.z)**2<(t.r+s.H.rad*.5)**2&&Ws(s,t.dps*.25,t.owner,!1,!0)}t.t>=t.life&&(pe.remove(t.m),t.m.material.dispose(),b.puddles.splice(e,1))}}var Qr=new pn(1,1,1,12,1,!0);Qr.rotateX(Math.PI/2);Qr.translate(0,0,.5);function SS(n){let e=n.H.super,t=n.pendingBeam.aim;n.pendingBeam=null,n.aim=t,hd(n,ot);let i=ot.x,s=ot.z,r=i+Math.sin(t)*e.range,o=s+Math.cos(t)*e.range;for(let c of b.fighters){if(!c.alive||c.team===n.team)continue;let h=e.width/2+c.H.rad;rc(i,s,r,o,c.x,c.z)<h*h&&(Ws(c,e.dmg*n.pow,n,!0),c.kx+=Math.sin(t)*6,c.kz+=Math.cos(t)*6,Yr(c.x,Un,c.z,e.color))}for(let c of B.crates)c.alive&&rc(i,s,r,o,c.x,c.z)<(e.width/2+.7)**2&&sd(c,e.dmg*n.pow);let a=new ae(Qr,ia("#FFF6C0",3)),l=new ae(Qr,new ke({color:new se(e.color).multiplyScalar(2),transparent:!0,opacity:.55,depthWrite:!1,blending:Tn}));for(let c of[a,l])c.position.set(i,Un+.05,s),c.rotation.y=t,pe.add(c);a.scale.set(.08,.08,e.range),l.scale.set(e.width*.5,e.width*.5,e.range),b.beams.push({core:a,outer:l,t:0,life:.45,w:e.width});for(let c=0;c<e.range;c+=.6)Pt(Lt,i+Math.sin(t)*c,Un,s+Math.cos(t)*c,{n:1,color:e.color,sp:1.5,life:.5,s0:.25,s1:.02,drag:2,soft:!0});n.kx-=Math.sin(t)*5,n.kz-=Math.cos(t)*5,_s.super(n.V),n.isMe&&(b.shake=Math.max(b.shake,.4)),ze("shot_beam",n,1.2)}function N0(n){for(let e=b.beams.length-1;e>=0;e--){let t=b.beams[e];t.t+=n;let i=t.t/t.life,s=(1-i)*t.w*.5;t.outer.scale.x=t.outer.scale.y=Math.max(.001,s),t.core.scale.x=t.core.scale.y=Math.max(.001,.08*(1-i)),t.outer.material.opacity=.55*(1-i),i>=1&&(pe.remove(t.core),pe.remove(t.outer),t.outer.material.dispose(),b.beams.splice(e,1))}}function Ws(n,e,t,i,s){if(!n.alive||n.shieldT>0||e<=0||b.match&&b.match.over)return 0;t&&b.match&&b.match.mode==="br"&&(e*=Ot.dmg),e=Math.round(e),n.hp-=e,n.flash=1,n.hurtAt=b.time,n.regenT=0,n.revealT=Math.max(n.revealT,.6),n.lastHitBy=t,t&&t.team!==n.team&&(n.spot=n.spot||{},n.spot[t.team]=xS),t&&(t.dmgDone+=e,t.regenT=Math.min(t.regenT,b0*.5),!i&&t.charge<1&&(t.charge=Math.min(1,t.charge+e/t.H.super.charge),t.charge>=1&&Ct("superReady",t))),s||_s.hurt(n.V);let r=b.me?b.me.team:0;return(b.me&&eo(b.me,n)||n===b.me||t===b.me)&&ta(n.x,n.H.height+.25,n.z,e,n===b.me?"me":t===b.me?"mine":""),Ct("damage",n,e,t),t===b.me&&n!==b.me&&Ct("hitMarker",n.hp<=0),n.hp<=0&&ES(n,t),e}function ES(n,e){n.hp=0,n.alive=!1,n.deadT=0,n.deaths++,n.respawnT=hS,n.pendingBeam=null,e&&e!==n&&e.kills++,Zr(n.x,.8,n.z,n.H.color,34),ze("die",n),Ct("kill",n,e)}function z0(n,e){let t=b.me?b.me.team:0;for(let i of b.fighters){let s=i.V;if(i.spot)for(let a in i.spot)i.spot[a]=Math.max(0,i.spot[a]-n);i.seen=b.me?eo(b.me,i):!0,Xl(s,i,n,e),i.alive&&!i.seen&&(s.root.visible=!1);let r=i.alive&&i.inGrass&&i.team===t?.55:1;if(i===b.me&&b.state!=="menu"){let a=it.position.distanceTo(s.root.position)-.6;a<2.2&&(r=Math.min(r,Math.max(.15,(a-.6)/1.6)))}let o=r<1;s.mat.transparent!==o&&(s.mat.transparent=o,s.mat.depthWrite=!o,s.ol.visible=!o&&!gt),s.mat.opacity=r,i.shieldT>0?s.mat.userData.u.uTint.value.setScalar(.12+Math.sin(e*20)*.08):(s.id!=="wasp"||i.supT>=1.2)&&s.mat.userData.u.uTint.value.setScalar(0)}}function O0(){let n={team:0,x:0,z:0,pow:1,H:{attack:{}},V:null},e=[],t=new ae(fd,F0.clone());return t.material.uniforms.uTime=oc.uTime,e.push(t),e.push(new ae(L0,I0),new ae(dd,new ke({transparent:!0,depthWrite:!1}))),e.push(new ae(Qr,ia("#FFF6C0",3)),new ae(Qr,new ke({transparent:!0,opacity:.5,depthWrite:!1,blending:Tn}))),e.push(new ae(T0,ia("#FF6B4A",2.2)),new ae(A0,ia("#FFB21E",2.2))),e}var Fe={yaw:Math.PI,pitch:-.08,x:0,z:0,dist:3.5,pivotH:1.6,shoulder:.6,sens:At.get("sens",1),turnTo:null},wS=-.6,TS=.38,qn={},Xi={l:!1,r:!1,x:0,y:0},no=!1,Ce={move:null,atk:null,sup:null,cam:null},yt={x:0,y:0,z:0,foe:null,inRange:!1,gx:0,gz:0,groundHit:!1};function pd(n,e,t){Fe.yaw-=n*t*Fe.sens,Fe.pitch=tt(Fe.pitch-e*t*Fe.sens,wS,TS),Fe.turnTo=null}addEventListener("keydown",n=>{qn[n.code]=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&b.state!=="menu"&&n.preventDefault(),(n.code==="KeyE"||n.code==="Space")&&b.me&&(b.me.wantSup=!0)});addEventListener("keyup",n=>{qn[n.code]=!1});addEventListener("blur",()=>{for(let n in qn)qn[n]=!1;Xi.l=Xi.r=!1});ks.addEventListener("mousedown",n=>{if($r(),!Jt){if(md()&&!no&&ks.requestPointerLock)try{let e=ks.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}n.button===0&&(Xi.l=!0),n.button===2&&b.me&&(b.me.wantSup=!0)}});addEventListener("mouseup",n=>{n.button===0&&(Xi.l=!1),n.button===2&&(Xi.r=!1)});ks.addEventListener("contextmenu",n=>n.preventDefault());addEventListener("mousemove",n=>{(no||md()&&!Jt)&&!b.paused&&pd(n.movementX,n.movementY,.0026),Xi.x=n.clientX,Xi.y=n.clientY});var H0=!1;document.addEventListener("pointerlockchange",()=>{no=document.pointerLockElement===ks,no&&(H0=!0)});function G0(){let n=J("lockhint"),e=!no&&!H0&&!Jt&&b.state==="play"&&b.match&&b.match.t<12&&b.me&&b.me.alive&&!b.paused&&!Xi.l;n.hidden===e&&(n.hidden=!e)}function ac(){document.exitPointerLock&&no&&document.exitPointerLock()}var md=()=>b.state==="play"||b.state==="countdown";function V0(n,e){let t=J("stick");t.style.left=n+"px",t.style.top=e+"px",t.hidden=!1}function AS(n){if($r(),!md()||b.paused)return;let e=!1;for(let t of n.changedTouches){if(t.target.closest&&t.target.closest("button:not([data-btn]), input, .screen"))continue;e=!0;let i=t.target.closest&&t.target.closest("[data-btn]");if(i){let s=i.dataset.btn;(s==="atk"&&!Ce.atk||s==="sup"&&!Ce.sup&&b.me&&b.me.charge>=1)&&(Ce[s]={id:t.identifier,x:t.clientX,y:t.clientY,moved:0,t0:performance.now(),el:i},i.classList.add("on"));continue}t.clientX<innerWidth*.42&&!Ce.move?(Ce.move={id:t.identifier,x0:t.clientX,y0:t.clientY,dx:0,dy:0},V0(t.clientX,t.clientY)):Ce.cam||(Ce.cam={id:t.identifier,x:t.clientX,y:t.clientY})}e&&n.preventDefault()}function W0(){for(let n of["atk","sup"])Ce[n]&&(Ce[n].el.classList.remove("on"),Ce[n]=null);Ce.move=Ce.cam=null,J("stick").hidden=!0,J("knob").style.transform=""}var k0=.0055;function RS(n){if(!(!Ce.move&&!Ce.cam&&!Ce.atk&&!Ce.sup)){for(let e of n.changedTouches){if(Ce.move&&e.identifier===Ce.move.id){let t=e.clientX-Ce.move.x0,i=e.clientY-Ce.move.y0,s=Math.hypot(t,i),r=56;s>r&&(Ce.move.x0+=t*(1-r/s),Ce.move.y0+=i*(1-r/s),t=e.clientX-Ce.move.x0,i=e.clientY-Ce.move.y0,V0(Ce.move.x0,Ce.move.y0)),Ce.move.dx=t/r,Ce.move.dy=i/r,J("knob").style.transform=`translate(${t}px,${i}px)`;continue}if(Ce.cam&&e.identifier===Ce.cam.id){pd(e.clientX-Ce.cam.x,e.clientY-Ce.cam.y,k0),Ce.cam.x=e.clientX,Ce.cam.y=e.clientY;continue}for(let t of["atk","sup"]){let i=Ce[t];if(!i||e.identifier!==i.id)continue;let s=e.clientX-i.x,r=e.clientY-i.y;i.moved+=Math.abs(s)+Math.abs(r),pd(s,r,k0*.8),i.x=e.clientX,i.y=e.clientY}}n.preventDefault()}}function X0(n){for(let e of n.changedTouches){Ce.move&&e.identifier===Ce.move.id&&(Ce.move=null,J("stick").hidden=!0,J("knob").style.transform=""),Ce.cam&&e.identifier===Ce.cam.id&&(Ce.cam=null);for(let t of["atk","sup"]){let i=Ce[t];if(!i||e.identifier!==i.id)continue;i.el.classList.remove("on");let s=b.me;if(s&&s.alive){let r=i.moved<14&&performance.now()-i.t0<350,o=r&&CS(t==="sup")||to(s,t==="sup");s.inp.tx=o.x,s.inp.tz=o.z,t==="sup"?s.inp.sup=!0:s.inp.fire=!0,s.inp.locked=!0,r&&o.foe&&(Fe.turnTo=Math.atan2(o.x-s.x,o.z-s.z))}Ce[t]=null}}}document.addEventListener("touchstart",AS,{passive:!1});document.addEventListener("touchmove",RS,{passive:!1});document.addEventListener("touchend",X0);document.addEventListener("touchcancel",X0);function CS(n){let e=b.me,t=n?e.H.super:e.H.attack,i=t.kind==="lob"||t.kind==="barrage"||t.kind==="beam",s=null,r=1e9;for(let l of b.fighters){if(!l.alive||l.team===e.team||!eo(e,l))continue;let c=Math.hypot(l.x-e.x,l.z-e.z);if(c>t.range*1.15)continue;let h=Math.abs(Fr(Fe.yaw,Math.atan2(l.x-e.x,l.z-e.z))),u=!i&&gn(e.x,e.z,l.x,l.z)>=0,d=c+h*4+(u?10:0);d<r&&(r=d,s=l)}if(!s)return null;if(t.kind==="bounce"&&gn(e.x,e.z,s.x,s.z)>=0){let l=gd(e,s,t);if(l)return{x:e.x+Math.sin(l)*6,z:e.z+Math.cos(l)*6,foe:s}}let o=Math.hypot(s.x-e.x,s.z-e.z),a=t.kind==="lob"||t.kind==="barrage"?t.flight*.8:o/(t.speed||40);return{x:s.x+s.vx*a*.7,z:s.z+s.vz*a*.7,foe:s}}function gd(n,e,t){let i=Math.atan2(e.x-n.x,e.z-n.z);for(let s=1;s<=36;s++){let r=i+(s%2?1:-1)*Math.ceil(s/2)*.17;if(C0(ud(n.x,n.z,r,t.range,t.bounces),e.x,e.z,e.H.rad+.1))return r}return null}function to(n,e){let t=e?n.H.super:n.H.attack;if(t.kind==="lob"||t.kind==="barrage"){let i=Math.atan2(yt.gx-n.x,yt.gz-n.z),s=yt.groundHit?tt(Math.hypot(yt.gx-n.x,yt.gz-n.z),1.5,t.range):t.range;return{x:n.x+Math.sin(i)*s,z:n.z+Math.cos(i)*s}}return{x:yt.x,z:yt.z}}var Ms=new P;function PS(n){let e=it.position,t=Ms;yt.groundHit=t.y<-.01;let i=yt.groundHit?(e.y-.05)/-t.y:40;yt.gx=e.x+t.x*Math.min(i,40),yt.gz=e.z+t.z*Math.min(i,40);let s=Math.max(.6,(n.x-e.x)*t.x+(n.z-e.z)*t.z),r=Math.min(i,40);for(let l=s;l<r;l+=.2){let c=e.x+t.x*l,h=e.y+t.y*l,u=e.z+t.z*l;if(h<gm(bi(c,u))){r=l;break}}yt.foe=null;let o=Math.hypot(t.x,t.z)||1e-6;for(let l of b.fighters){if(!l.alive||l.team===n.team||!l.seen)continue;let c=l.x-e.x,h=l.z-e.z,u=(c*t.x+h*t.z)/(o*o);if(u<=s-.6||u>=r)continue;let d=e.x+t.x*u-l.x,f=e.z+t.z*u-l.z,g=e.y+t.y*u;d*d+f*f<(l.H.rad+.15)**2&&g>-.2&&g<l.H.height+(l.H.hover||0)+.3&&(r=u,yt.foe=l)}yt.x=e.x+t.x*r,yt.y=e.y+t.y*r,yt.z=e.z+t.z*r,Math.hypot(yt.x-n.x,yt.z-n.z)<1.2&&(yt.x=n.x+Math.sin(Fe.yaw)*8,yt.z=n.z+Math.cos(Fe.yaw)*8);let a=n.H.attack;yt.inRange=!!yt.foe&&Math.hypot(yt.foe.x-n.x,yt.foe.z-n.z)<a.range+.5}function q0(n){let e=b.me;if(!e)return;let t=e.inp,i=0,s=0;Ce.move?(i=-Ce.move.dy,s=Ce.move.dx):(i=(qn.KeyW||qn.ArrowUp?1:0)-(qn.KeyS||qn.ArrowDown?1:0),s=(qn.KeyD||qn.ArrowRight?1:0)-(qn.KeyA||qn.ArrowLeft?1:0));let r=Math.hypot(i,s);r>1&&(i/=r,s/=r);let o=Math.sin(Fe.yaw),a=Math.cos(Fe.yaw);if(t.mx=o*i-a*s,t.mz=a*i+o*s,Fe.turnTo!==null){let l=Fr(Fe.yaw,Fe.turnTo);Fe.yaw+=l*Math.min(1,n*8),Math.abs(l)<.02&&(Fe.turnTo=null)}if(PS(e),!t.locked){let l=to(e,!1);t.tx=l.x,t.tz=l.z}if(t.locked=!1,t.aim=Math.atan2(t.tx-e.x,t.tz-e.z),e.aiming=!0,!Jt){if(Xi.l&&Wi(e)){let l=to(e,!1);t.tx=l.x,t.tz=l.z,t.fire=!0}if(e.wantSup&&(e.wantSup=!1,e.charge>=1)){let l=to(e,!0);t.tx=l.x,t.tz=l.z,t.sup=!0}}}var B0=new P,LS=n=>n==="X";function Y0(n){let e=b.me;if(!e)return;let t=1-Math.exp(-n*14);Fe.x=Dn(Fe.x,e.x,t),Fe.z=Dn(Fe.z,e.z,t);let i=Math.sin(Fe.yaw),s=Math.cos(Fe.yaw),r=Math.cos(Fe.pitch),o=Math.sin(Fe.pitch);Ms.set(i*r,o,s*r);let a=-s,l=i,c=Fe.x+a*Fe.shoulder*.4,h=Fe.z+l*Fe.shoulder*.4,u=Fe.pivotH,d=Fe.dist,f=c-Ms.x*d+a*Fe.shoulder,g=h-Ms.z*d+l*Fe.shoulder,x=gn(c,h,f,g,LS),p=f,m=g,_=u-Ms.y*d+.25;if(x>=0){let v=Math.max(.3,x-.12);p=c+(f-c)*v,m=h+(g-h)*v,_=u+(_-u)*v}if(_=Math.max(.35,_),b.shake>0){let v=b.shake*.12;p+=(Math.random()-.5)*v,_+=(Math.random()-.5)*v,m+=(Math.random()-.5)*v,b.shake=Math.max(0,b.shake-n*2.5)}it.position.set(p,_,m),B0.set(p+Ms.x*10,_+Ms.y*10,m+Ms.z*10),it.lookAt(B0)}var qs=new zt;qs.visible=!1;pe.add(qs);var lc=new ke({color:"#FFFFFF",transparent:!0,opacity:.75,depthWrite:!1,depthTest:!1}),Z0=new ke({color:"#FFD23F",transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1}),$0=new os(.86,1,40);$0.rotateX(-Math.PI/2);var Xs=new ae($0,lc);Xs.renderOrder=6;qs.add(Xs);var IS=new Kt(.06,8,6),bs=[];for(let n=0;n<16;n++){let e=new ae(IS,lc);e.renderOrder=6,qs.add(e),bs.push(e)}function K0(){let n=b.me,e=n&&n.alive&&b.state==="play"&&(!Jt||Ce.atk||Ce.sup),t=Jt?!!Ce.sup:n&&n.charge>=1&&qn.KeyE,i=n&&(t?n.H.super:n.H.attack),s=i&&(i.kind==="lob"||i.kind==="barrage");if(e&&i&&i.kind==="bounce")return DS(n,i,t);if(qs.visible=!!(e&&s),!qs.visible)return;Xs.visible=!0,bs.forEach(c=>{c.visible=!0});let r=t?Z0:lc;r.opacity=Wi(n)||t?.8:.3,Xs.material=r,bs.forEach(c=>c.material=r);let o=to(n,t),a=Math.hypot(o.x-n.x,o.z-n.z),l=3.2+a*.2;Xs.position.set(o.x,.07,o.z),Xs.scale.setScalar(i.radius),bs.forEach((c,h)=>{let u=(h+1)/(bs.length+1);c.position.set(Dn(n.x,o.x,u),Dn(1,.15,u)+Math.sin(u*Math.PI)*l,Dn(n.z,o.z,u))})}function DS(n,e,t){qs.visible=!0,Xs.visible=!1;let i=t?Z0:lc;i.opacity=Wi(n)||t?.8:.3,bs.forEach(u=>u.material=i);let s=to(n,t),r=ud(n.x,n.z,Math.atan2(s.x-n.x,s.z-n.z),Math.min(e.range,14),e.bounces),o=0;for(let u=1;u<r.length;u++)o+=Math.hypot(r[u].x-r[u-1].x,r[u].z-r[u-1].z);let a=Math.max(.55,o/bs.length),l=1,c=0,h=a*.6;for(let u of bs){for(;l<r.length;){let x=r[l-1],p=r[l],m=Math.hypot(p.x-x.x,p.z-x.z);if(c+h<=m){c+=h;break}h-=m-c,c=0,l++}if(l>=r.length){u.visible=!1;continue}let d=r[l-1],f=r[l],g=Math.hypot(f.x-d.x,f.z-d.z)||1;u.visible=!0,u.position.set(d.x+(f.x-d.x)*c/g,Un,d.z+(f.z-d.z)*c/g),h=a}}var FS={easy:{err:.22,react:.6,lead:.4,dodge:.2},normal:{err:.11,react:.35,lead:.75,dodge:.5},hard:{err:.05,react:.18,lead:1,dodge:.85}},US={shroom:.5,beetle:.72,wasp:.82,roly:.62};function cc(n="normal"){return{S:FS[n],temper:z()<.55?"careful":"bold",path:null,pathT:0,gx:null,gz:null,mode:"idle",target:null,seenT:0,mem:new Map,strafe:z()<.5?-1:1,strafeT:z(.6,1.6),thinkT:0,holdX:0,holdZ:0,stuck:0,lx:0,lz:0}}var fi=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function di(n,e,t,i){let s=n.bot;if(s.pathT-=i,(!s.path||s.pathT<=0||Math.hypot((s.gx??1e9)-e,(s.gz??1e9)-t)>1.2)&&(s.path=Hu(n.x,n.z,e,t)?[{x:e,z:t}]:xm(n.x,n.z,e,t),s.gx=e,s.gz=t,s.pathT=z(.5,.9)),!s.path||!s.path.length)return[0,0];let r=s.path[0];for(;s.path.length>1&&Math.hypot(r.x-n.x,r.z-n.z)<.45;)s.path.shift(),r=s.path[0];let o=r.x-n.x,a=r.z-n.z,l=Math.hypot(o,a);return l<.25?[0,0]:[o/l,a/l]}function Q0(n,e){let t=n.bot,i=n.H,s=n.inp,r=b.match;if(!n.alive||!r)return;let o=b.time,a=null,l=-1e9;for(let d of b.fighters){if(!d.alive||d.team===n.team)continue;if(eo(n,d))t.mem.set(d.id,{x:d.x,z:d.z,t:o,o:d});else continue;let g=-fi(n,d)+(d.gems||0)*1.2+(d.power||0)*.5+(1-d.hp/d.max)*4+(d===t.target?2:0);g>l&&(l=g,a=d)}a!==t.target?(t.target=a,t.seenT=0):t.seenT+=e;let c=t.target;t.shootAt=null;let h=0,u=0;r.mode==="br"?[h,u]=zS(n,t,c,e):[h,u]=NS(n,t,c,e),OS(n,t,c,h,u,e)}function NS(n,e,t,i){let s=n.H,r=b.match,o=b.time,a=r.count[n.team],l=r.count[1-n.team],c=B.spawns[n.team][1]||B.spawns[n.team][0];if(e.thinkT-=i,e.thinkT<=0){e.thinkT=z(.2,.35);let d=n.hp<n.max*.42;n.gems>=3&&d?e.mode="retreat":r.cd&&r.cd.team===n.team&&n.gems>0?e.mode=t&&fi(n,t)<s.attack.range*.8?"fight":"hold":d&&t&&fi(n,t)<6&&n.hp<t.hp?e.mode="retreat":t&&fi(n,t)<s.attack.range*1.35?e.mode="fight":b.pickups.length&&!(r.cd&&r.cd.team===n.team)?e.mode="collect":r.cd&&r.cd.team!==n.team?e.mode="hunt":e.mode="patrol"}let h=0,u=0;if(e.mode==="retreat"||e.mode==="hold"){let d=c.x+(n.slot-1)*2.5,f=c.z+(n.team===0?-3:3);[h,u]=di(n,d,f,i),Math.hypot(n.x-d,n.z-f)<1.5&&(h=Math.sin(o*1.3+n.id)*.4,u=0)}else if(e.mode==="collect"){let d=null,f=1e9;for(let g of b.pickups){let x=Math.hypot(g.x-n.x,g.z-n.z)+(g.landed?0:1);x<f&&(f=x,d=g)}d&&([h,u]=di(n,d.x,d.z,i))}else if(e.mode==="hunt"){let d=null;for(let m of b.fighters)m.alive&&m.team!==n.team&&(!d||m.gems>d.gems)&&(d=m);let f=d&&e.mem.get(d.id),g=B.mine||{x:0,z:0},x=f&&o-f.t<4?f.x:g.x,p=f&&o-f.t<4?f.z:g.z+(n.team===0?-4:4);[h,u]=di(n,x,p,i)}else if(e.mode==="patrol"){let d=n.team===0?1:-1,f=B.mine||{x:0,z:0},g=f.x+(n.slot-1)*3.2,x=f.z+d*(2.5+(n.slot===1?0:1.5));[h,u]=di(n,g,x,i)}return[h,u]}var J0=n=>n.hp*(1+.15*(n.power||0)),Ys=(n,e,t)=>Math.hypot(n,e)<t;function xd(n,e,t,i=7){let s=null,r=1e9;for(let o=0;o<22;o++){let a=z(0,Le),l=z(0,i),c=n+Math.sin(a)*l,h=e+Math.cos(a)*l;if(!Ys(c,h,t))continue;let u=bi(c,h);if(u!=="."&&u!=='"')continue;let d=l+(u==='"'?-6:0);if(u==="."){let f=0;for(let[g,x]of[[1.6,0],[-1.6,0],[0,1.6],[0,-1.6]])bi(c+g,h+x)==="#"&&f++;d-=f*1.5}d<r&&(r=d,s={x:c,z:h})}return s}function zS(n,e,t,i){let s=n.H,r=b.match,o=b.time,a=t0(),l=Math.min(a,n0(8)),c=Math.hypot(n.x,n.z),h=e.temper==="bold";if(e.holdFire=!1,e.thinkT-=i,e.thinkT<=0){e.thinkT=z(.25,.4),e.crate=null,e.pk=null;let d=t?fi(n,t):1e9,f=s.attack.range,g=o-(n.hurtAt||-9)<1.5&&n.lastHitBy&&n.lastHitBy.alive,x=r.t<Ot.calm*(h?.75:1.1)&&!g,p=r.alive<=4,m=t?J0(n)/Math.max(1,J0(t)):9,_=t&&(t.x-n.x)*t.vx+(t.z-n.z)*t.vz>0&&Math.hypot(t.vx,t.vz)>2,v=t&&o-(t.hurtAt||-9)<1.5&&t.lastHitBy&&t.lastHitBy!==n&&t.lastHitBy.alive&&fi(t,t.lastHitBy)<12,y=x&&t&&!g;if(e.quiet=y,c>l-2.5)e.mode="zone";else if(n.hp<n.max*.4&&(!t||d>f*.6))e.mode="heal";else if(t&&g&&n.lastHitBy===t&&m<(x?1.3:.7)&&d>3)e.mode="retreat";else if(y){let w=j0(n,l);e.mode=w?w.pk?"collect":"crate":"hold",w&&(e.pk=w.pk,e.crate=w.crate)}else if(t&&v&&m<2.5&&t.hp>t.max*.35)e.mode="wait";else if(t&&d<f*(x?.6:1.3)&&!(_&&d>f*.9)&&(m>(r.alive<=2?.8:p?1.15:h?1:1.35)||g||d<f*.45))e.mode="fight";else if(t&&d<f*1.3)e.mode="avoid";else{let w=j0(n,l);if(w&&(w.pk||!p))e.mode=w.pk?"collect":"crate",e.pk=w.pk,e.crate=w.crate;else{let S=null;for(let R of e.mem.values())R.o.alive&&o-R.t<5&&Ys(R.x,R.z,l)&&(!S||R.t>S.t)&&(S=R);S&&!x&&n.hp>n.max*.8&&(r.alive<=2||h&&(n.power||0)>=4&&r.alive<=6&&!p)?(e.mode="hunt",e.huntX=S.x,e.huntZ=S.z):e.mode="hold"}}e.mode!==e.lastMode&&(e.spot=null,e.lastMode=e.mode)}let u=Math.max(2,l-2.5);if(e.noChase=!!t&&!Ys(t.x,t.z,l-1),(e.mode==="heal"||e.mode==="hold"||e.mode==="wait"||e.mode==="avoid"||e.quiet)&&(e.holdFire=!0),e.mode==="zone"){if(!e.spot||!Ys(e.spot.x,e.spot.z,u)){let d=Math.min(l*.55,c)/(c||1);e.spot=xd(n.x*d,n.z*d,u,5)||{x:n.x*d,z:n.z*d}}return di(n,e.spot.x,e.spot.z,i)}if((e.mode==="retreat"||e.mode==="avoid")&&t){let d=fi(n,t)||1;if(!e.spot||o>(e.spotT||0)){let f=n.x+(n.x-t.x)/d*7,g=n.z+(n.z-t.z)/d*7,x=Math.hypot(f,g);x>u&&(f*=u/x,g*=u/x),e.spot=xd(f,g,u,4)||{x:f,z:g},e.spotT=o+1.5}return di(n,e.spot.x,e.spot.z,i)}if(e.mode==="heal"||e.mode==="hold"||e.mode==="wait"){if(!e.spot||!Ys(e.spot.x,e.spot.z,u)){let d=n.x,f=n.z;if(e.mode==="wait"&&t){let g=fi(n,t)||1,x=n.H.attack.range+2;d=t.x+(n.x-t.x)/g*x,f=t.z+(n.z-t.z)/g*x}if(e.mode==="hold"&&c>l*.7){let g=l*.5/(c||1);d=n.x*g,f=n.z*g}e.spot=xd(d,f,u)||{x:d,z:f}}return Math.hypot(e.spot.x-n.x,e.spot.z-n.z)>.8?di(n,e.spot.x,e.spot.z,i):(t||(n.inp.aim+=i*.4),[0,0])}if(e.mode==="collect"&&e.pk&&b.pickups.includes(e.pk))return di(n,e.pk.x,e.pk.z,i);if(e.mode==="crate"&&e.crate&&e.crate.alive){let d=e.crate,f=Math.hypot(d.x-n.x,d.z-n.z),g=Math.min(s.attack.range*.7,6),x=gn(n.x,n.z,d.x,d.z),p=n.x+(d.x-n.x)*x,m=n.z+(d.z-n.z)*x,_=x<0||hi(p+(d.x-n.x)/(f||1)*.08)===d.c&&ui(m+(d.z-n.z)/(f||1)*.08)===d.r;return f<g+.5&&(_||s.attack.kind==="lob")?(e.shootAt=d,[Math.sin(o*1.7+n.id)*.3,Math.cos(o*1.3+n.id)*.3]):di(n,d.x,d.z,i)}if(e.mode==="hunt"){if(Math.hypot(e.huntX-n.x,e.huntZ-n.z)>1.2)return di(n,e.huntX,e.huntZ,i);e.thinkT=0}return[0,0]}function j0(n,e){let t=b.fighters.filter(l=>l.alive&&l!==n&&n.bot.mem.has(l.id)&&b.time-n.bot.mem.get(l.id).t<3),i=(l,c,h)=>!t.some(u=>Math.hypot(u.x-l,u.z-c)<h-.5),s=null,r=14;for(let l of b.pickups){let c=Math.hypot(l.x-n.x,l.z-n.z);c<r&&Ys(l.x,l.z,e-1.5)&&i(l.x,l.z,c)&&(r=c,s=l)}if(s)return{pk:s};let o=null,a=18;for(let l of B.crates){if(!l.alive)continue;let c=Math.hypot(l.x-n.x,l.z-n.z);c<a&&Ys(l.x,l.z,e-1.5)&&i(l.x,l.z,c)&&(a=c,o=l)}return o?{crate:o}:null}function OS(n,e,t,i,s,r){let o=n.H,a=n.inp,l=b.time;if(t&&(e.mode==="fight"||fi(n,t)<o.attack.range)){let u=fi(n,t),d=o.attack.range*US[n.hero],f=(t.x-n.x)/(u||1),g=(t.z-n.z)/(u||1);if(e.strafeT-=r,e.strafeT<=0&&(e.strafeT=z(.5,1.4),e.strafe=-e.strafe),e.mode==="fight"){let x=0,p=0;e.noChase||(u>d+1||!Bu(n.x,n.z,t.x,t.z)&&n.hero!=="beetle"?[x,p]=di(n,t.x,t.z,r):u<d-1.5&&(x=-f,p=-g)),i=x*.9+-g*e.strafe*.7,s=p*.9+f*e.strafe*.7}}if(Math.random()<e.S.dodge)for(let u of b.shots){if(u.team===n.team)continue;let d=n.x-u.x,f=n.z-u.z,g=Math.hypot(u.vx,u.vz),x=(d*u.vx+f*u.vz)/g;if(x<0||x>6)continue;let p=(d*u.vz-f*u.vx)/g;if(Math.abs(p)<1.1){let m=p>=0?1:-1;i+=u.vz/g*m*1.4,s+=-u.vx/g*m*1.4;break}}for(let u of b.puddles)if(u.team!==n.team){let d=n.x-u.x,f=n.z-u.z,g=Math.hypot(d,f);g<u.r+.5&&(i+=d/(g||1)*1.5,s+=f/(g||1)*1.5)}let c=Math.hypot(n.x-e.lx,n.z-e.lz);e.lx=n.x,e.lz=n.z,Math.hypot(i,s)>.3&&c<.01?e.stuck+=r:e.stuck=Math.max(0,e.stuck-r),e.stuck>.6&&(e.path=null,i+=z(-1,1),s+=z(-1,1),e.stuck>1.2&&(e.stuck=0));let h=Math.hypot(i,s);if(h>1&&(i/=h,s/=h),a.mx=i,a.mz=s,h>.1&&(a.aim=Math.atan2(i,s)),a.fire=a.sup=!1,t){let u=fi(n,t),d=o.attack,f=o.super,g=d.speed||d.range/(d.flight||.8),x=(d.kind==="lob"?d.flight*(.65+.35*u/d.range):u/g)*e.S.lead,p=t.x+t.vx*x,m=t.z+t.vz*x,_=e.S.err*(1+(t.inGrass?.5:0)),v=Math.atan2(p-n.x,m-n.z)+z(-_,_);p=n.x+Math.sin(v)*u,m=n.z+Math.cos(v)*u,a.aim=v,a.tx=p,a.tz=m;let y=Bu(n.x,n.z,t.x,t.z),w=b.time-(n.hurtAt||-9)<1.5,S=e.seenT>e.S.react&&(!e.holdFire||w||!e.quiet&&u<d.range*.55);if(S&&n.charge>=1&&(f.kind==="fan"&&u<f.range*.75&&y||f.kind==="barrage"&&u<f.range||f.kind==="beam"&&u<f.range*.9||f.kind==="bounce"&&u<11)&&(a.sup=!0),!a.sup&&S&&Wi(n)){let R=u<d.range*(d.kind==="fan"?.85:d.kind==="lob"?1:.95),D=n.ammo>=2||u<d.range*.6||t.hp<t.max*.4;if(R&&(y||d.kind==="lob")&&D)a.fire=!0;else if(d.kind==="bounce"&&!y&&u<d.range*.8&&D&&l>(e.bankT||0)){e.bankT=l+.3;let M=gd(n,t,d);M!==null&&(a.aim=M,a.tx=n.x+Math.sin(M)*6,a.tz=n.z+Math.cos(M)*6,a.fire=!0)}}}else if(e.shootAt){let u=e.shootAt;a.aim=Math.atan2(u.x-n.x,u.z-n.z),a.tx=u.x,a.tz=u.z,Wi(n)&&n.ammo>=1&&(a.fire=!0)}else if(n.hero==="beetle"&&!e.holdFire&&Wi(n)&&n.ammo>=2.5)for(let u of e.mem.values()){if(!u.o.alive||l-u.t>2.5||l-u.t<.4)continue;if(Math.hypot(u.x-n.x,u.z-n.z)<o.attack.range&&(kl(u.x,u.z)||!Vr(n.x,n.z,u.x,u.z))){a.aim=Math.atan2(u.x-n.x,u.z-n.z),a.tx=u.x,a.tz=u.z,a.fire=!0;break}}}var io={goal:10,hold:15,interval:5,first:4,dur:180},Yn=null,eg=new ul(.2,0),kS=ft({color:"#B583FF",emissive:"#8A4DFF",emissiveIntensity:1.6,roughness:.2,flatShading:!0}),BS=new ke({color:new se("#E9D8FF").multiplyScalar(2),toneMapped:!1}),HS=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(0,0,0,.45)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Pn(n)})(),ng=new Bt(.7,.7);ng.rotateX(-Math.PI/2);var GS=new ke({map:HS,transparent:!0,depthWrite:!1});function _d(){if(Yn&&(pe.remove(Yn.g),Yn=null),!B.mine)return;let n=new zt;n.position.set(B.mine.x,0,B.mine.z);let e=new ae(new pn(.95,1.35,.32,24),ft({color:"#6E5A3E",roughness:.95}));e.position.y=.12,e.receiveShadow=e.castShadow=!0,n.add(e);let t=new ae(new Pr(.95,.16,8,28),ft({color:"#5E9E3A",roughness:.9}));t.rotation.x=Math.PI/2,t.position.y=.27,n.add(t);let i=document.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d"),r=s.createRadialGradient(128,128,10,128,128,128);r.addColorStop(0,"#F4E8FF"),r.addColorStop(.25,"#B58AFF"),r.addColorStop(.6,"#5A2AB8"),r.addColorStop(.9,"#2A0F5A"),r.addColorStop(1,"#1A0A30"),s.fillStyle=r,s.fillRect(0,0,256,256),s.globalCompositeOperation="lighter";for(let g=0;g<5;g++){s.strokeStyle="rgba(200,160,255,.35)",s.lineWidth=6,s.beginPath();for(let x=0;x<2.6;x+=.05){let p=18+x*40;s.lineTo(128+Math.cos(x+g*1.256)*p,128+Math.sin(x+g*1.256)*p)}s.stroke()}let o=new Pn(i);o.colorSpace=ct;let a=new ke({map:o,color:"#FFFFFF"}),l=new ae(new Ln(.78,32),a);l.rotation.x=-Math.PI/2,l.position.y=.29,n.add(l);let c=ft({color:"#F1E6FF",roughness:.6}),h=ft({color:"#B07BFF",emissive:"#7A3DFF",emissiveIntensity:.9,roughness:.4}),u=new pn(.05,.07,1,8),d=new Kt(1,14,8,0,Le,0,Math.PI/2),f=[];for(let g=0;g<9;g++){let x=g/9*Le+z(-.15,.15),p=z(1.2,1.5),m=z(.25,.55),_=new ae(u,c);_.scale.set(1,m,1),_.position.set(Math.cos(x)*p,m/2,Math.sin(x)*p),_.castShadow=!0,n.add(_);let v=new ae(d,h);v.scale.set(z(.14,.22),z(.1,.16),z(.14,.22)),v.position.set(Math.cos(x)*p,m,Math.sin(x)*p),v.castShadow=!0,n.add(v),f.push(v)}pe.add(n),Yn={g:n,hole:l,holeMat:a,caps:f,pulse:0}}function ig(n,e,t,i,s=4){let r=new ae(eg,kS);r.castShadow=!0;let o=new ae(eg,BS);o.scale.setScalar(.5),r.add(o);let a=new ae(ng,GS);a.renderOrder=1,pe.add(r,a),b.pickups.push({x:n,z:e,y:.5,vx:t,vz:i,vy:s,t:0,m:r,sh:a,landed:!1,ph:z(0,Le)})}function sg(n){let e=b.pickups[n];pe.remove(e.m,e.sh),b.pickups.splice(n,1)}function vd(){for(let n=b.pickups.length-1;n>=0;n--)sg(n)}function rg(){vd(),b.match={mode:"spores",t:0,dur:io.dur,over:!1,winner:null,respawn:!0,count:[0,0],cd:null,mineT:io.first,hot:!1,spawned:0}}Vt("kill",n=>{if(!b.match||b.match.mode!=="spores"||!n.gems)return;let e=n.gems;n.gems=0;for(let t=0;t<e;t++){let i=t/e*Le+z(-.3,.3),s=z(1.5,3.2);ig(n.x,n.z,Math.sin(i)*s,Math.cos(i)*s,z(3,5))}ze("gem_drop",n)});var ra={x:0,z:0};function og(n,e){let t=b.match;if(!t||t.mode!=="spores")return;if(Yn){Yn.pulse=Math.max(0,Yn.pulse-n*1.5);let r=.9+Math.sin(e*3)*.12+Yn.pulse*1.2;Yn.holeMat.color.setScalar(r),Yn.hole.rotation.z=e*.6,Math.random()<n*6&&Lt.emit({x:B.mine.x+z(-.5,.5),y:.35,z:B.mine.z+z(-.5,.5),vx:0,vy:z(.5,1.2),vz:0,life:1.1,t:0,s0:.1,s1:.02,r:.75,g:.55,b:1,a:1,grav:0,drag:.3,soft:1}),Yn.caps.forEach((o,a)=>{o.position.y+=Math.sin(e*2+a)*8e-4})}if(b.state==="play"&&!t.over&&(t.t+=n,t.mineT-=n,t.mineT<=0)){t.mineT=io.interval,t.spawned++;let r=z(0,Le),o=z(.8,2.2);ig(B.mine.x,B.mine.z,Math.sin(r)*o,Math.cos(r)*o,5.5),Yn&&(Yn.pulse=1),Pt(Lt,B.mine.x,.5,B.mine.z,{n:16,color:"#C9A0FF",sp:2.5,upMin:.5,vy:2,life:.7,s0:.25,s1:.04,soft:!0}),Vs(B.mine.x,B.mine.z,.5,2.2,.6,"#B583FF"),ze("respawn",B.mine,.6)}for(let r=b.pickups.length-1;r>=0;r--){let o=b.pickups[r];o.t+=n,o.landed||(o.vy-=16*n,o.x+=o.vx*n,o.z+=o.vz*n,o.y+=o.vy*n,ra.x=o.x,ra.z=o.z,Gs(ra,.25)&&(o.x=ra.x,o.z=ra.z,o.vx*=-.4,o.vz*=-.4),o.y<.45&&(o.y=.45,Math.abs(o.vy)>2?(o.vy=-o.vy*.4,o.vx*=.6,o.vz*=.6):o.landed=!0));let a=o.landed?Math.sin(e*3+o.ph)*.08:0;if(o.m.position.set(o.x,o.y+a,o.z),o.m.rotation.y=e*2+o.ph,o.m.rotation.x=.3,o.sh.position.set(o.x,.04,o.z),Math.random()<n*3&&Lt.emit({x:o.x+z(-.2,.2),y:o.y,z:o.z+z(-.2,.2),vx:0,vy:.5,vz:0,life:.6,t:0,s0:.08,s1:.01,r:.75,g:.6,b:1,a:1,grav:0,drag:.5,soft:1}),!(o.t<.35||b.state!=="play")){for(let l of b.fighters)if(!(!l.alive||(l.x-o.x)**2+(l.z-o.z)**2>.85*.85)){l.gems++,sg(r),Pt(Lt,l.x,1,l.z,{n:10,color:"#C9A0FF",sp:2,vy:1.5,life:.4,s0:.16,s1:.02,soft:!0}),ze("gem",l,l===b.me?1:.7,1+Math.min(10,l.gems)*.03),Ct("pickup",l);break}}}t.count[0]=t.count[1]=0;for(let r of b.fighters)r.alive&&(t.count[r.team]+=r.gems);if(t.over)return;let i=t.count,s=i[0]>=io.goal&&i[0]>i[1]?0:i[1]>=io.goal&&i[1]>i[0]?1:-1;if(s<0)t.cd&&(Ct("countdownStop",t.cd.team),t.cd=null);else if(!t.cd||t.cd.team!==s)t.cd={team:s,t:io.hold},Ct("countdownStart",s);else if(b.state==="play"){let r=Math.ceil(t.cd.t);if(t.cd.t-=n,Math.ceil(t.cd.t)!==r&&t.cd.t>0&&Ct("countdownTick",Math.ceil(t.cd.t)),t.cd.t<=0)return tg(s,"spores")}t.hot=!!t.cd||t.dur-t.t<30,t.t>=t.dur&&!t.cd&&tg(i[0]>i[1]?0:i[1]>i[0]?1:-1,"time")}function tg(n,e){let t=b.match;t.over=!0,t.winner=n,t.why=e,Ct("matchOver",n,e)}var so=new P,hg='<span class="gem-ico"></span>';function bd(n){let e=document.createElement("div");e.className="tag "+jr(n),e.innerHTML=`<div class="gm" hidden>${hg}<b></b></div><div class="tn">${nn(n.name)}</div><div class="hpb"><s></s><u></u><b></b></div>`+(n===b.me?'<div class="am">'+"<i><u></u></i>".repeat(ti)+"</div>":"")+'<i class="sup"></i><i class="spot">!</i>',J("hud-world").appendChild(e),n.tag={el:e,gm:e.querySelector(".gm"),gmb:e.querySelector(".gm b"),u:e.querySelector(".hpb u"),s:e.querySelector(".hpb s"),b:e.querySelector(".hpb b"),am:[...e.querySelectorAll(".am i")],last:{}}}function ug(){let n=innerWidth,e=innerHeight;for(let t of b.fighters){let i=t.tag;if(!i)continue;if(!(t.alive&&t.seen&&b.state!=="menu"&&J("end").hidden&&t!==b.me)){i.last.vis!==!1&&(i.el.style.display="none",i.last.vis=!1);continue}if(so.set(t.V.root.position.x,t.H.height+(t.H.hover||0)+.45,t.V.root.position.z).project(it),so.z>1||Math.abs(so.x)>1.2||Math.abs(so.y)>1.2){i.last.vis!==!1&&(i.el.style.display="none",i.last.vis=!1);continue}i.last.vis!==!0&&(i.el.style.display="",i.last.vis=!0);let r=it.position.distanceTo(t.V.root.position),o=Math.max(.5,Math.min(1.05,7/r));i.el.style.transform=`translate(${((so.x*.5+.5)*n).toFixed(1)}px,${((-so.y*.5+.5)*e).toFixed(1)}px) translate(-50%,-100%) scale(${o.toFixed(2)})`;let a=b.me&&t.team!==b.me.team&&cd(b.me.team,t)&&!Vr(b.me.x,b.me.z,t.x,t.z);i.last.sp!==a&&(i.el.classList.toggle("spotted",a),i.last.sp=a);let l=Math.max(0,Math.ceil(t.hp)),c=(l/t.max*100).toFixed(1)+"%";i.last.hp!==l&&(i.u.style.width=c,i.s.style.width=c,i.b.textContent=l,i.last.hp=l);let h=b.match&&b.match.mode==="br"?t.power||0:t.gems;i.last.gems!==h&&(i.gm.hidden=!h,i.gmb.textContent=h,i.last.gems=h);let u=t.charge>=1;i.last.ready!==u&&(i.el.classList.toggle("ready",u),i.last.ready=u),i.am.length&&i.am.forEach((d,f)=>{let g=tt(t.ammo-f,0,1);d.firstChild.style.width=(g*100).toFixed(0)+"%",d.classList.toggle("full",g>=1)})}}var ag=n=>(n=Math.max(0,Math.ceil(n)),Math.floor(n/60)+":"+String(n%60).padStart(2,"0")),yd=null;function uc(){let n=b.match,e=b.me;if(!n||!e)return;let t=e.team,i=n.mode==="br";if(i){Ss("sc0",n.alive),Ss("sc1",e.power||0);let g=Ot.wait-n.t;Ss("timer",g>0?ag(g):"\u2601"),Ss("mode-lbl",Rt(g>0?"\u0422\u0443\u043C\u0430\u043D":n.fog.r>Ot.r1?"\u0422\u0443\u043C\u0430\u043D \u0438\u0434\u0451\u0442":"\u0424\u0438\u043D\u0430\u043B"))}else Ss("sc0",n.count[t]),Ss("sc1",n.count[1-t]),Ss("timer",ag(n.dur-n.t)),Ss("mode-lbl",Rt("\u0421\u043F\u043E\u0440\u044B"));let s=J("cdown");if(n.cd&&!n.over&&!i){s.hidden=!1;let g=n.cd.team===t,x=Math.ceil(n.cd.t);s.classList.toggle("foe",!g),x!==yd&&(J("cd-n").textContent=x,s.classList.remove("pulse"),s.offsetWidth,s.classList.add("pulse"),yd=x),J("cd-t").textContent=g?Rt("\u0414\u0435\u0440\u0436\u0438\u043C \u0441\u043F\u043E\u0440\u044B!"):Rt("\u0412\u0440\u0430\u0433 \u0443\u043D\u043E\u0441\u0438\u0442 \u0441\u043F\u043E\u0440\u044B!")}else s.hidden=!0,yd=null;let r=e.charge,o=r>=1;J("sp-ring").style.strokeDashoffset=(214*(1-r)).toFixed(1),J("superpc").classList.toggle("ready",o),J("tsp-ring").style.strokeDashoffset=(277*(1-r)).toFixed(1),J("b-sup").classList.toggle("ready",o);let a=J("ammopc").children;for(let g=0;g<a.length;g++){let x=tt(e.ammo-g,0,1);a[g].firstChild.style.width=(x*100).toFixed(0)+"%",a[g].classList.toggle("full",x>=1)}VS(e);let l=Math.max(0,Math.ceil(e.hp)),c=l+"/"+e.id;uc.hp!==c&&(uc.hp=c,J("mehp").firstChild.style.width=(l/e.max*100).toFixed(1)+"%",J("mehp").lastChild.textContent=l);let u="xhair "+(yt.foe?yt.inRange?"foe":"far":"")+(e.ammo<1?" empty":"")+(e.H.attack.kind==="lob"?" lob":""),d=J("xhair");d.className!==u&&(d.className=u),d.hidden=!e.alive;let f=J("dead");!e.alive&&!n.over&&n.respawn?(f.hidden=!1,J("dead-n").textContent=Math.max(1,Math.ceil(e.respawnT))):f.hidden=!0}var lg={};function Ss(n,e){e=String(e),lg[n]!==e&&(lg[n]=e,J(n).textContent=e)}function VS(n){if(!Jt)return;let e=J("tammo");if(!e.childElementCount){let t="";for(let i=0;i<ti;i++)t+=`<path class="tammo-seg" stroke="rgba(0,0,0,.35)" d="${cg(i)}"/><path class="tammo-seg" id="tam${i}" stroke="#FFC93C" d="${cg(i)}"/>`;e.innerHTML=t}for(let t=0;t<ti;t++){let i=tt(n.ammo-t,0,1),s=J("tam"+t),r=s._len||(s._len=s.getTotalLength());s.style.strokeDasharray=r,s.style.strokeDashoffset=(r*(1-i)).toFixed(1),s.setAttribute("stroke",i>=1?"#FFC93C":"#FF8A3D")}}function cg(n){let s=-Math.PI/2+n/ti*Math.PI*2+.12,r=-Math.PI/2+(n+1)/ti*Math.PI*2-.12;return`M${(60+Math.cos(s)*54).toFixed(1)} ${(60+Math.sin(s)*54).toFixed(1)}A54 54 0 0 1 ${(60+Math.cos(r)*54).toFixed(1)} ${(60+Math.sin(r)*54).toFixed(1)}`}function Sd(n,e){let t=document.createElement("div");t.className=e||"",t.innerHTML=n;let i=J("feed");for(i.appendChild(t);i.children.length>4;)i.firstChild.remove();setTimeout(()=>t.remove(),4200)}var hc=0;function Nn(n,e,t,i=1.8){let s=J("ann");s.className="ann "+(t||""),s.innerHTML="<b>"+nn(Rt(n))+"</b>"+(e?"<span>"+nn(Rt(e))+"</span>":""),s.offsetWidth,s.classList.add("show"),s.style.opacity=1,hc=i}function dg(n){hc>0&&(hc-=n,hc<=0&&(J("ann").style.opacity=0))}function fg(n,e){let t=J("heroes");t.innerHTML=Si.map(o=>{let a=Xn[o];return`<button class="hcard${o===n?" sel":""}" data-h="${o}">${jo[o]}<b>${nn(a.name)}</b><small>${nn(a.role)}</small></button>`}).join("");for(let o of t.querySelectorAll(".hcard"))o.onclick=()=>e(o.dataset.h);let i=Xn[n],s=(o,a,l,c)=>`<div class="stat"><span>${o}</span><i><u style="width:${tt(a/l*100,6,100).toFixed(0)}%"></u></i><em>${c}</em></div>`,r=i.attack.kind==="fan"?i.attack.dmg*i.attack.count:i.attack.kind==="needle"?i.attack.dmgFar:i.attack.dmg;J("hero-info").innerHTML=`<h3>${nn(i.name)}</h3><div class="sub">${nn(i.species)} \xB7 ${nn(i.role)}</div><p>${nn(i.desc)}</p>`+s("\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435",i.hp,4200,i.hp)+s("\u0423\u0440\u043E\u043D",r,1600,Math.round(r))+s("\u0414\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",i.attack.range,15,i.attack.range.toFixed(0)+" \u043C")+s("\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",i.speed-3.5,2,i.speed.toFixed(1))+`<div class="abil"><span class="k">\u2694</span><div><b>${nn(i.attack.name)}</b><small>${nn(WS(i.attack))}</small></div></div><div class="abil"><span class="k s">\u2605</span><div><b>${nn(i.super.name)}</b><small>${nn(i.super.desc)}</small></div></div>`}function WS(n){return n.kind==="fan"?n.count+" \u0441\u043F\u043E\u0440 \u0432\u0435\u0435\u0440\u043E\u043C":n.kind==="lob"?"\u0431\u043E\u043C\u0431\u0430 \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B, \u0433\u043E\u0440\u044F\u0449\u0430\u044F \u043B\u0443\u0436\u0430":n.kind==="bounce"?"\u043E\u0442\u0441\u043A\u0430\u043A\u0438\u0432\u0430\u0435\u0442 \u043E\u0442 \u043A\u0443\u0441\u0442\u043E\u0432 "+n.bounces+" \u0440\u0430\u0437\u0430, \u0434\u043E\u0441\u0442\u0430\u0451\u0442 \u0437\u0430 \u0443\u0433\u043B\u043E\u043C":"\u0434\u0430\u043B\u044C\u043D\u0438\u0439 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u0443\u0440\u043E\u043D \u0440\u0430\u0441\u0442\u0451\u0442 \u0441 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C"}function pg(n){let e=b.me,t=b.match;if(t.mode==="br")return qS(n);J("e-board").classList.remove("br");let i=J("e-title");i.textContent=Rt(n==="win"?"\u041F\u043E\u0431\u0435\u0434\u0430!":n==="lose"?"\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435":"\u041D\u0438\u0447\u044C\u044F"),i.className=n,J("e-sub").textContent=Rt(t.why==="spores"?t.winner===e.team?"\u0422\u0432\u043E\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0430 \u0441\u043F\u043E\u0440\u044B.":"\u0412\u0440\u0430\u0433\u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0438 \u0441\u043F\u043E\u0440\u044B.":"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E: ")+(t.why==="time"?t.count[e.team]+" : "+t.count[1-e.team]:"");let s=a=>a.kills*3+a.dmgDone/1500+(a.gemsPicked||0)*.6,r=[...b.fighters].sort((a,l)=>s(l)-s(a))[0],o=[...b.fighters].sort((a,l)=>(a.team===e.team?0:1)-(l.team===e.team?0:1)||s(l)-s(a));J("e-board").innerHTML=o.map(a=>`<tr class="t${a.team===e.team?0:1}${a===e?" me":""}"><td>${jo[a.hero]}</td><td>${nn(a.name)}${a===r?'<span class="mvp">MVP</span>':""}</td><td>\u2694 ${a.kills}</td><td>\u2620 ${a.deaths}</td><td>${hg} ${a.gemsPicked||0}</td><td>${Math.round(a.dmgDone)}</td></tr>`).join(""),J("end").hidden=!1}var XS=[20,15,12,9,7,5,3,2,1,0],Md={v:0};function qS(n){let e=b.me,t=b.match,i=J("e-title"),s=h=>Wn.lang==="en"?"#"+h+" place":"#"+h+" \u043C\u0435\u0441\u0442\u043E";i.textContent=n==="win"?Rt("\u041F\u043E\u0431\u0435\u0434\u0430!"):s(t.place),i.className=t.place<=3?"win":"lose";let r=e.lastHitBy,o=XS[t.place-1]||0,a=Math.min(3,e.kills);t.scored||(t.scored=!0,Md.v=(+At.get("brPts",0)||0)+o+a,At.set("brPts",Md.v)),J("e-sub").textContent=(n==="win"?Rt("\u0422\u044B \u2014 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431!"):r&&r!==e?Rt("\u0422\u0435\u0431\u044F \u0441\u0440\u0435\u0437\u0430\u043B: ")+r.name:Rt("\u0422\u0435\u0431\u044F \u043D\u0430\u043A\u0440\u044B\u043B \u044F\u0434\u043E\u0432\u0438\u0442\u044B\u0439 \u0442\u0443\u043C\u0430\u043D."))+" \xB7 "+Rt("\u041E\u0447\u043A\u0438")+": +"+o+(a?" +"+a+" \u2694":"")+" ("+Rt("\u0432\u0441\u0435\u0433\u043E")+" "+Md.v+")";let l=[...b.fighters].sort((h,u)=>(h.place||0)-(u.place||0)||u.kills-h.kills),c='<span class="gem-ico gold"></span>';J("e-board").classList.add("br"),J("e-board").innerHTML=l.map(h=>`<tr class="t${h===e?0:1}${h===e?" me":""}${h.alive?"":" out"}"><td class="pl">${h.place?"#"+h.place:"\u2014"}</td><td>${jo[h.hero]}</td><td>${nn(h.name)}</td><td>\u2694 ${h.kills}</td><td>${c} ${h.power||0}</td><td>${Math.round(h.dmgDone)}</td></tr>`).join(""),J("end").hidden=!1}var sn={sdk:null,ready:!1,adOn:!1,playing:!1},Ed=()=>!!window.YaGames;async function mg(){if(Ed())try{sn.sdk=await window.YaGames.init();try{let n=sn.sdk.environment.i18n.lang;n&&Gl(Hl(n))}catch{}}catch{}}function gg(){if(sn.sdk&&!sn.ready){sn.ready=!0;try{sn.sdk.features.LoadingAPI.ready()}catch{}}}function xg(){if(!sn.sdk)return;let n=!sn.adOn&&!b.paused&&!document.hidden&&(b.state==="play"||b.state==="countdown");if(n!==sn.playing){sn.playing=n;try{let e=sn.sdk.features.GameplayAPI;n?e.start():e.stop()}catch{}}}function YS(){if(sn.adOn=!0,Te.ad=!0,Jl(!0),document.exitPointerLock)try{document.exitPointerLock()}catch{}}function ZS(){sn.adOn=!1,Te.ad=!1,document.hidden||Jl(!1)}function wd(n){if(!sn.sdk){n&&n();return}let e=!1,t=()=>{e||(e=!0,ZS(),n&&n())};try{sn.sdk.adv.showFullscreenAdv({callbacks:{onOpen:YS,onClose:t,onError:t,onOffline:t}})}catch{t()}}addEventListener("visibilitychange",()=>{sn.adOn||Jl(document.hidden)});var rn={hero:Xn[At.get("hero","shroom")]?At.get("hero","shroom"):"shroom",diff:At.get("diff","normal"),mode:At.get("mode","spores")==="br"?"br":"spores"},$S=n=>Wn.lang==="en"?`#${n} place`:`#${n} \u043C\u0435\u0441\u0442\u043E`,Sg=["\u0413\u0440\u0443\u0437\u0434\u044C","\u041E\u043F\u0451\u043D\u043E\u043A","\u0421\u043C\u043E\u0440\u0447\u043E\u043A","\u0420\u044B\u0436\u0438\u043A","\u041C\u0430\u0441\u043B\u0451\u043D\u043E\u043A","\u0412\u043E\u043B\u043D\u0443\u0448\u043A\u0430","\u0421\u0442\u0440\u043E\u0447\u043E\u043A","\u0411\u0435\u043B\u044F\u043D\u043A\u0430","\u0415\u0436\u043E\u0432\u0438\u043A","\u0414\u0443\u0431\u043E\u0432\u0438\u043A","\u0412\u0435\u0448\u0435\u043D\u043A\u0430","\u041A\u043E\u0440\u043E\u0435\u0434","\u0428\u0435\u0440\u0448\u0435\u043D\u044C","\u0416\u0443\u0436\u0435\u043B\u0438\u0446\u0430","\u0429\u0435\u043B\u043A\u0443\u043D","\u0421\u0432\u0435\u0442\u043B\u044F\u0447\u043E\u043A","\u041C\u0435\u0434\u0432\u0435\u0434\u043A\u0430","\u0414\u043E\u043B\u0433\u043E\u043D\u043E\u0441\u0438\u043A"];Ed()?await mg():Gl();var Eg=n=>{J("load-bar").style.width=Math.round(n*100)+"%"};await Promise.all([dm(n=>Eg(n*.85)),Nm()]);Eg(.92);jp();Qp();Wu("glade");_d();im();addEventListener("resize",zr);{let n=O0().concat(r0(),_0(Si.flatMap(e=>[Xn[e].attack.color,Xn[e].super.color])));n.forEach(e=>pe.add(e)),$l(0,0,1.7),Yr(0,1,0,"#fff"),Zr(0,1,0,"#fff",4);for(let e of Si){let t=ea(e);pe.add(t.root),n.push(t.root)}try{Ft.compile(pe,it)}catch{}n.forEach(e=>pe.remove(e)),Qu(),b.shake=0}J("load").hidden=!0;var si=null;function wg(n){si&&(pe.remove(si.V.root),si.V.mesh.geometry.dispose());let e=ea(n);Wl(e,"me"),pe.add(e.root);let t=B.map.id==="maze"?{x:0,z:1.2}:B.spawns[0][1];si={V:e,hop:1.2,f:{id:99,x:t.x,z:t.z-1.2,vx:0,vz:0,aim:Math.PI,alive:!0,atkT:9,supT:0,flash:0,deadT:0,victory:!1}},e.yaw=Math.PI,_s.spawn(e)}function fc(){fg(rn.hero,n=>{rn.hero=n,At.set("hero",n),ze("select"),fc(),wg(n)});for(let n of J("m-diff").querySelectorAll("button"))n.classList.toggle("sel",n.dataset.v===rn.diff);for(let n of J("m-mode").querySelectorAll(".mode-card"))n.classList.toggle("sel",n.dataset.v===rn.mode);J("howto").textContent=Rt(Jt?"\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0431\u0435\u0433, \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043A\u0430\u043C\u0435\u0440\u044B. \u041A\u043D\u043E\u043F\u043A\u0430 \u0430\u0442\u0430\u043A\u0438: \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u2014 \u0430\u0432\u0442\u043E\u043F\u0440\u0438\u0446\u0435\u043B, \u0441 \u043F\u0440\u043E\u0442\u044F\u0436\u043A\u043E\u0439 \u2014 \u0446\u0435\u043B\u0438\u0448\u044C\u0441\u044F \u0441\u0430\u043C. \u0417\u0432\u0435\u0437\u0434\u0430 \u2014 \u0441\u0443\u043F\u0435\u0440.":"WASD \u2014 \u0431\u0435\u0433, \u043C\u044B\u0448\u044C \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \u0438 \u043F\u0440\u0438\u0446\u0435\u043B, \u041B\u041A\u041C \u2014 \u0430\u0442\u0430\u043A\u0430, \u041F\u041A\u041C \u0438\u043B\u0438 E \u2014 \u0441\u0443\u043F\u0435\u0440, Esc \u2014 \u043F\u0430\u0443\u0437\u0430.")}J("m-mode").onclick=n=>{let e=n.target.closest(".mode-card");!e||e.dataset.v===rn.mode||(rn.mode=e.dataset.v,At.set("mode",rn.mode),ze("select"),fc())};J("m-diff").onclick=n=>{let e=n.target.dataset.v;e&&(rn.diff=e,At.set("diff",e),ze("click"),fc())};var aa={fps:At.get("fps",!1)};function pc(){for(let n of J("s-gfx").querySelectorAll("button"))n.classList.toggle("sel",n.dataset.v===he.level);for(let n of J("s-fps").querySelectorAll("button"))n.classList.toggle("sel",n.dataset.v==="1"===aa.fps);for(let n of J("s-snd").querySelectorAll("button")){let e=n.dataset.v==="sfx"?Te.sfxOn:Te.musicOn;n.classList.toggle("sel",e),n.classList.toggle("off",!e)}J("s-sens").value=Fe.sens,J("s-sens-v").textContent=(+Fe.sens).toFixed(2),J("fps").hidden=!aa.fps}function Tg(n){J("s-gfx-row").hidden=J("s-gfx-note").hidden=!!n,pc(),J("settings").hidden=!1,ze("click")}J("m-set").onclick=()=>Tg(!1);J("p-set").onclick=()=>Tg(!0);J("s-close").onclick=()=>{J("settings").hidden=!0,ze("click")};J("s-gfx").onclick=n=>{let e=n.target.dataset.v;!e||e===he.level||(nm(e),ze("click"),setTimeout(()=>location.reload(),150))};J("s-fps").onclick=n=>{let e=n.target.dataset.v;e!==void 0&&(aa.fps=e==="1",At.set("fps",aa.fps),ze("click"),pc())};J("s-snd").onclick=n=>{let e=n.target.dataset.v;e&&($r(),e==="sfx"?zm(!Te.sfxOn):Om(!Te.musicOn),ze("click"),pc())};J("s-sens").oninput=n=>{Fe.sens=+n.target.value,At.set("sens",Fe.sens),J("s-sens-v").textContent=Fe.sens.toFixed(2)};pc();var _g=-1;function KS(){if(!aa.fps||he.fps===_g)return;_g=he.fps;let n=J("fps");n.textContent=he.fps+" FPS",n.className="fps"+(he.fps<30?" bad":he.fps<50?" mid":"")}J("play").onclick=()=>{$r(),ze("confirm"),Cd()};function mc(){b.state="menu",b.paused=!1,Ag(),J("menu").hidden=!1,J("hud").hidden=!0,J("end").hidden=!0,J("pause").hidden=!0,fc(),wg(rn.hero)}function Ag(){S0(),vd(),Jm(),Qu();for(let n of b.shots)sc(n.m);b.shots.length=0,x0();for(let n of b.lobs)pe.remove(n.m),pe.remove(n.mark);b.lobs.length=0;for(let n of b.puddles)pe.remove(n.m);b.puddles.length=0;for(let n of b.beams)pe.remove(n.core),pe.remove(n.outer);b.beams.length=0,b.match=null}var oa=0,Zs=0,Ad=0;function Rg(n){B.map.id!==n?(Wu(n),_d()):Mm()}function Cd(n={}){Ag(),si&&(pe.remove(si.V.root),si=null);let e=b.mode=n.mode||rn.mode;if(document.body.classList.toggle("br",e==="br"),e==="br")return JS(n);Rg("glade"),rg();let t=Ur([...Sg]),i=n.hero||rn.hero,s=Ur(Si.filter(a=>a!==i)).concat(Si).slice(0,2),r=Ur([...Si]),o=[s[0],i,s[1]];for(let a=0;a<2;a++)for(let l=0;l<3;l++){let c=a===0&&l===1,h=a===0?o[l]:r[l],u=ld({name:c?Rt("\u0422\u044B"):Rt(t.pop()),team:a,hero:h,isMe:c});u.slot=l,u.gemsPicked=0,c?b.me=u:u.bot=cc(n.diff||rn.diff)}for(let a of b.fighters)bd(a),sa(a);Cg("\u0421\u043F\u043E\u0440\u044B","\u0421\u043E\u0431\u0435\u0440\u0438 10 \u0441\u043F\u043E\u0440 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438 \u0438\u0445 15 \u0441\u0435\u043A\u0443\u043D\u0434")}function JS(n){Rg("maze"),Km(),Rd=0;let e=Ur([...Sg]),t=n.hero||rn.hero,i=Ur(B.spawns.ffa.map((s,r)=>r));for(let s=0;s<Ot.fighters;s++){let r=s===0,o=ld({name:r?Rt("\u0422\u044B"):Rt(e.pop()),team:s,hero:r?t:Si[Math.floor(Math.random()*Si.length)],isMe:r});o.slot=i[s%i.length],o.gemsPicked=0,o.hpMul=Ot.hp,r?b.me=o:o.bot=cc(n.diff||rn.diff)}for(let s of b.fighters)bd(s),sa(s);Cg("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431","\u041E\u0441\u0442\u0430\u043D\u044C\u0441\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C! \u041B\u043E\u043C\u0430\u0439 \u044F\u0449\u0438\u043A\u0438 \u2014 \u0432 \u043D\u0438\u0445 \u0441\u0438\u043B\u0430")}function Cg(n,e){let t=b.me;Fe.yaw=t.aim,Fe.x=t.x,Fe.z=t.z,Fe.pitch=-.08,b.state="countdown",oa=3.2,Ad=4,Zs=0,J("menu").hidden=!0,J("end").hidden=!0,J("hud").hidden=!1,J("touch").hidden=!Jt,J("superpc").hidden=Jt,J("ammopc").hidden=Jt,document.body.classList.toggle("touch-on",Jt),J("lockhint").hidden=Jt;let i=b.mode==="br";J("ico0").className=i?"shroom-ico":"gem-ico",J("ico1").className=i?"gem-ico gold":"gem-ico",Nn(n,e,"sun",2.4)}function jS(n){oa-=n;let e=Math.ceil(oa);e!==Ad&&e>=1&&e<=3&&(Ad=e,Nn(String(e),"","sun",.8),ze("countdown")),oa<=0&&(b.state="play",Nn("\u0412 \u0431\u043E\u0439!","","sun",1),ze("start"))}function Pg(n){let e=n.V.yaw,t=-1e9;b.endDist=4.6;for(let i=0;i<16;i++){let s=(i%2?1:-1)*Math.ceil(i/2)*Le/16,r=n.V.yaw+s,o=gn(n.x,n.z,n.x+Math.sin(r)*5,n.z+Math.cos(r)*5,ku),a=o<0?5:o*5,l=a-Math.abs(s)*.35;if(l>t&&(t=l,e=r,b.endDist=Math.max(1.8,Math.min(4.6,a-.4))),a>=5&&Math.abs(s)<1.3)break}return e}function QS(){b.state="end",Zs=0;let n=b.me,e=b.match,t=e.place===1;b.result=t?"win":"lose";for(let s of b.fighters)s.inp.mx=s.inp.mz=0,s.inp.fire=s.inp.sup=!1;let i=n.lastHitBy;b.endFocus=t?n:i&&i.alive?i:b.fighters.filter(s=>s.alive).sort((s,r)=>r.kills-s.kills)[0]||n,b.endYaw=Pg(b.endFocus),t&&(n.victory=!0,n.aim=b.endYaw),Nn(t?"\u041F\u043E\u0431\u0435\u0434\u0430!":$S(e.place),t?"\u0422\u044B \u2014 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431!":"",t?"sun":"foe",2.2),ze(t?"win":"lose"),ac()}function eE(n){if(b.match&&b.match.mode==="br")return QS();b.state="end",Zs=0;let e=b.me,t=n<0?"draw":n===e.team?"win":"lose";b.result=t;for(let s of b.fighters)n>=0&&s.team===n?(s.alive||sa(s,{x:s.x,z:s.z}),s.victory=!0):n>=0&&(s.defeat=!0),s.inp.mx=s.inp.mz=0;let i=s=>s.kills*3+s.dmgDone/1500+(s.gemsPicked||0)*.6;b.endFocus=n<0||n===e.team?e:b.fighters.filter(s=>s.team===n).sort((s,r)=>i(r)-i(s))[0],b.endYaw=Pg(b.endFocus);for(let s of b.fighters)s.victory&&(s.aim=b.endYaw);Nn(t==="win"?"\u041F\u043E\u0431\u0435\u0434\u0430!":t==="lose"?"\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435":"\u041D\u0438\u0447\u044C\u044F","",t==="win"?"sun":t==="lose"?"foe":"ally",2.2),ze(t==="lose"?"lose":"win"),ac()}J("e-again").onclick=()=>{ze("confirm"),wd(()=>Cd())};J("e-menu").onclick=()=>{ze("click"),wd(mc)};var Td=n=>`<b style="color:${n===b.me?"var(--sun)":n.team===b.me.team?"var(--ally)":"var(--foe)"}">${nn(n.name)}</b>`;Vt("kill",(n,e)=>{b.me&&(e&&e!==n?Sd(Td(e)+" \u2694 "+Td(n),e===b.me?"m":e.team===b.me.team?"a":"f"):e||Sd("\u2601 "+Td(n),"f"),b.match&&b.match.mode==="br"&&n!==b.me&&!b.match.over&&b.me.alive&&tE(),b.state!=="end"&&(e===b.me&&n!==b.me&&(Nn("\u0421\u0440\u0435\u0437\u0430\u043B!",n.name,"sun",1.1),ze("kill")),n===b.me&&Nn("\u0422\u0435\u0431\u044F \u0441\u0440\u0435\u0437\u0430\u043B\u0438",e?e.name:"","foe",1.6)))});Vt("pickup",n=>{n.gemsPicked=(n.gemsPicked||0)+1});Vt("countdownStart",n=>{let e=n===b.me.team;Nn(e?"\u0421\u043F\u043E\u0440\u044B \u0443 \u043D\u0430\u0441!":"\u0412\u0440\u0430\u0433 \u043D\u0430\u0431\u0440\u0430\u043B \u0441\u043F\u043E\u0440\u044B!",e?"\u0414\u0435\u0440\u0436\u0438\u0442\u0435\u0441\u044C 15 \u0441\u0435\u043A\u0443\u043D\u0434":"\u041E\u0442\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0445!",e?"ally":"foe",1.8),ze(e?"super_ready":"gem_drop")});Vt("countdownStop",()=>{b.state==="play"&&Nn("\u041E\u0442\u0441\u0447\u0451\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D","","sun",1.2)});Vt("countdownTick",n=>{n<=5&&ze("countdown",null,.8)});Vt("matchOver",n=>eE(n));Vt("fogHurt",(n,e)=>Ws(n,e,null,!1,!0));Vt("fogStart",()=>{b.state==="play"&&(Nn("\u0422\u0443\u043C\u0430\u043D \u0441\u0433\u0443\u0449\u0430\u0435\u0442\u0441\u044F!","\u0414\u0435\u0440\u0436\u0438\u0441\u044C \u0431\u043B\u0438\u0436\u0435 \u043A \u0446\u0435\u043D\u0442\u0440\u0443","ally",2),ze("gem_drop"))});Vt("power",n=>{n.gemsPicked=(n.gemsPicked||0)+1});var Rd=0;function tE(){let n=b.match.alive;n>4||n<=1||n===Rd||(Rd=n,n===4?Nn(Wn.lang==="en"?"4 left":"\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C 4 \u0431\u043E\u0439\u0446\u0430","\u0417\u0430\u0439\u043C\u0438 \u0443\u043A\u0440\u044B\u0442\u0438\u0435","sun",1.6):n===3?Nn("\u0422\u044B \u0432 \u0442\u043E\u043F-3!","\u041F\u0443\u0441\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u0435\u0440\u0443\u0442\u0441\u044F \u043F\u0435\u0440\u0432\u044B\u043C\u0438","sun",1.6):Nn("\u0424\u0438\u043D\u0430\u043B!","\u041E\u0434\u0438\u043D \u043D\u0430 \u043E\u0434\u0438\u043D","foe",1.6))}var vg=null;Vt("hitMarker",n=>{let e=J("hitm");e.classList.remove("hit","killhit"),e.offsetWidth,e.classList.add(n?"killhit":"hit"),clearTimeout(vg),vg=setTimeout(()=>e.classList.remove("hit","killhit"),n?380:180)});Vt("superReady",n=>{n===b.me&&ze("super_ready")});Vt("empty",n=>{n===b.me&&ze("empty")});Vt("damage",(n,e,t)=>{n===b.me?ze("hurt",null,.7):t===b.me&&ze("hit",null,.6)});Vt("spawn",n=>{n===b.me&&b.state==="play"&&(ze("respawn"),Fe.yaw=n.team===0?Math.PI:0,Fe.x=n.x,Fe.z=n.z)});function ro(n){b.state!=="play"&&b.state!=="countdown"&&(n=!1),b.paused=n,J("pause").hidden=!n,n&&(ac(),W0())}J("pause-btn").onclick=()=>ro(!0);J("p-resume").onclick=()=>{ze("click"),ro(!1)};J("p-quit").onclick=()=>{ze("click"),ro(!1),mc()};addEventListener("keydown",n=>{(n.code==="Escape"||n.code==="KeyP")&&(b.state==="play"||b.state==="countdown")&&ro(!b.paused)});document.addEventListener("visibilitychange",()=>{document.hidden&&b.state==="play"&&ro(!0)});var yg=.95,Mg=new P;function dc(n){if(b.time+=n,Sn.time.value=b.time,Jp(n),xg(),b.state==="play"||b.state==="countdown"||b.state==="end"){b.state==="countdown"&&jS(n),(b.state==="play"||b.state==="countdown")&&b.me&&b.me.alive&&!b.me.bot&&!b.noInput&&q0(n);for(let i of b.fighters)i.bot&&b.state==="play"&&Q0(i,n);for(let i of b.fighters)E0(i,n);P0(n),D0(n),U0(n),N0(n),g0(n),og(n,b.time),s0(n,b.time),b.state==="end"&&(Zs+=n,Zs>2.6&&J("end").hidden&&(pg(b.result),J("hud").hidden=!0))}z0(n,b.time);let t=0;for(let i of b.fighters)i.alive&&t<Sn.push.value.length&&Sn.push.value[t++].set(i.x,i.z,yg);for(si&&t<Sn.push.value.length&&Sn.push.value[t++].set(si.f.x,si.f.z,yg);t<Sn.push.value.length;t++)Sn.push.value[t].set(0,0,0);if(b.me&&b.me.alive&&b.state!=="menu"?Sn.me.value.set(b.me.x,b.me.z,2.2):Sn.me.value.set(0,0,0),b.dbgCam)it.position.set(b.dbgCam[0],b.dbgCam[1],b.dbgCam[2]),it.lookAt(b.dbgCam[3],b.dbgCam[4],b.dbgCam[5]);else if(b.state==="menu"&&si){let i=si,s=i.f;i.hop-=n,s.victory=i.hop>0,s.supT+=n,Xl(i.V,s,n,b.time);let r=innerWidth/innerHeight>1.3?.35:0;it.position.set(s.x+r*1.5,1.55,s.z-4.4),it.lookAt(s.x+r,.75,s.z)}else if(b.state==="end"&&b.me){let i=b.endFocus||b.me,s=b.endYaw+Math.sin(b.time*.3)*.35,r=b.endDist||4.6;Mg.set(i.x+Math.sin(s)*r,2.7+(4.6-r)*.35,i.z+Math.cos(s)*r),it.position.lerp(Mg,1-Math.exp(-n*2.5)),it.lookAt(i.x,.8,i.z)}else b.me&&Y0(n);K0(),G0(),Im(n),ug(),b.state!=="menu"&&uc(),dg(n),Or.position.copy(it.position)}var bg=performance.now();function Lg(n){let e=(n-bg)/1e3;bg=n;let t=Math.min(.05,e);b.state==="end"&&Zs<1.2&&(t*=.4),!b.paused&&!sn.adOn&&dc(t),sm(e,b.state==="play"),KS(),lu(),requestAnimationFrame(Lg)}mc();gg();requestAnimationFrame(Lg);window.__bg={start(n={}){n.hero&&(rn.hero=n.hero),n.diff&&(rn.diff=n.diff),n.mode&&(rn.mode=n.mode),Cd(n),n.skipCount&&(oa=0,b.state="play")},autopilot(n){b.me&&(b.me.bot=n?cc("normal"):null)},sim(n,e=1/30){let t=Math.round(n/e);for(let i=0;i<t&&(dc(e),!(b.state==="end"&&Zs>3));i++);},get s(){let n=b.match;return{state:b.state,mode:n&&n.mode,t:n&&+n.t.toFixed(1),count:n&&[...n.count],alive:n&&n.alive,place:n&&n.place,fog:n&&n.fog&&+n.fog.r.toFixed(1),cd:n&&n.cd&&{team:n.cd.team,t:+n.cd.t.toFixed(1)},over:n&&n.over,winner:n&&n.winner,why:n&&n.why,pickups:b.pickups.length,me:b.me&&{hp:Math.round(b.me.hp),alive:b.me.alive,x:+b.me.x.toFixed(1),z:+b.me.z.toFixed(1),gems:b.me.gems,charge:+b.me.charge.toFixed(2),ammo:+b.me.ammo.toFixed(2)}}},board:()=>b.fighters.map(n=>`${n.name}[${n.hero}/t${n.team}] k${n.kills} d${n.deaths} g${n.gemsPicked} dmg${Math.round(n.dmgDone)}`),fighters:()=>b.fighters,G:b,A:B,CAM:Fe,menu:rn,showMenu:mc,cam(n){b.dbgCam=n},info:()=>({calls:Ft.info.render.calls,tris:Ft.info.render.triangles,geos:Ft.info.memory.geometries,tex:Ft.info.memory.textures,progs:Ft.info.programs.length,PR:he.PR,post:he.post}),post(n){he.post=!!n&&!!he.composer,he.noPost=!n},pause:ro,tr:Rt,L:Wn,tick:dc,dmg:Ws,bench(n=60,e){e&&(Ft.setPixelRatio(e),zr());let t=Ft.getContext(),i=performance.now(),s=new Uint8Array(4);for(let r=0;r<n;r++)dc(1/60),lu(),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,s);return(performance.now()-i)/n}};window.__bgReady=!0;
