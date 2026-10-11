var $h="160";var jg=0,Wd=1,Qg=2;var Cl=1,Kh=2,zi=3,Si=0,Xt=1,yt=2;var bi=0,os=1,_n=2,Xd=3,qd=4,Jh=5,zs=100,ex=101,tx=102,Yd=103,Zd=104,nx=200,ix=201,sx=202,rx=203,Co=204,Po=205,ox=206,ax=207,lx=208,cx=209,hx=210,ux=211,dx=212,fx=213,px=214,mx=0,gx=1,xx=2,Wa=3,vx=4,_x=5,jh=6,yx=7,Qh=0,Mx=1,bx=2,as=0,eu=1,tu=2,nu=3,Xo=4,Sx=5,iu=6,$d="attached",Ex="detached",Ip=300,br=301,Sr=302,dh=303,fh=304,Pl=306,Hi=1e3,Wn=1001,Lo=1002,$t=1003,Xa=1004;var bo=1005;var Tn=1006,su=1007;var cs=1008;var ls=1009,wx=1010,Tx=1011,ru=1012,Fp=1013,ss=1014,ki=1015,Ln=1016,Dp=1017,Up=1018,ks=1020,Ax=1021,ti=1023,Rx=1024,Cx=1025,Bs=1026,Er=1027,Px=1028,Np=1029,Lx=1030,zp=1031,Op=1033,Pc=33776,Lc=33777,Ic=33778,Fc=33779,Kd=35840,Jd=35841,jd=35842,Qd=35843,kp=36196,ef=37492,tf=37496,nf=37808,sf=37809,rf=37810,of=37811,af=37812,lf=37813,cf=37814,hf=37815,uf=37816,df=37817,ff=37818,pf=37819,mf=37820,gf=37821,Dc=36492,xf=36494,vf=36495,Ix=36283,_f=36284,yf=36285,Mf=36286;var wr=2300,Gs=2301,Uc=2302,bf=2400,Sf=2401,Ef=2402,Fx=2500;var Bp=0,Ll=1,qo=2,Hp=3e3,Hs=3001,Dx=3200,Ux=3201,ou=0,Nx=1,Pn="",ut="srgb",jt="srgb-linear",au="display-p3",Il="display-p3-linear",qa="linear",vt="srgb",Ya="rec709",Za="p3";var er=7680;var wf=519,zx=512,Ox=513,kx=514,Gp=515,Bx=516,Hx=517,Gx=518,Vx=519,ph=35044,Fl=35048;var Tf="300 es",mh=1035,Bi=2e3,$a=2001,hs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Af=1234567,So=Math.PI/180,Tr=180/Math.PI;function pi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Kt(n,e,t){return Math.max(e,Math.min(t,n))}function lu(n,e){return(n%e+e)%e}function Wx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Xx(n,e,t){return n!==e?(t-n)/(e-n):0}function Eo(n,e,t){return(1-t)*n+t*e}function qx(n,e,t,i){return Eo(n,e,1-Math.exp(-t*i))}function Yx(n,e=1){return e-Math.abs(lu(n,e*2)-e)}function Zx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $x(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Kx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Jx(n,e){return n+Math.random()*(e-n)}function jx(n){return n*(.5-Math.random())}function Qx(n){n!==void 0&&(Af=n);let e=Af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ev(n){return n*So}function tv(n){return n*Tr}function gh(n){return(n&n-1)===0&&n!==0}function nv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ka(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function iv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Vp={DEG2RAD:So,RAD2DEG:Tr,generateUUID:pi,clamp:Kt,euclideanModulo:lu,mapLinear:Wx,inverseLerp:Xx,lerp:Eo,damp:qx,pingpong:Yx,smoothstep:Zx,smootherstep:$x,randInt:Kx,randFloat:Jx,randFloatSpread:jx,seededRandom:Qx,degToRad:ev,radToDeg:tv,isPowerOfTwo:gh,ceilPowerOfTwo:nv,floorPowerOfTwo:Ka,setQuaternionFromProperEuler:iv,normalize:xt,denormalize:Mi},ie=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],p=s[3],m=s[6],v=s[1],_=s[4],M=s[7],w=s[2],S=s[5],R=s[8];return r[0]=o*x+a*v+l*w,r[3]=o*p+a*_+l*S,r[6]=o*m+a*M+l*R,r[1]=c*x+h*v+u*w,r[4]=c*p+h*_+u*S,r[7]=c*m+h*M+u*R,r[2]=d*x+f*v+g*w,r[5]=d*p+f*_+g*S,r[8]=d*m+f*M+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Nc.makeScale(e,t)),this}rotate(e){return this.premultiply(Nc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nc=new nt;function Wp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sv(){let n=Io("canvas");return n.style.display="block",n}var Rf={};function wo(n){n in Rf||(Rf[n]=!0,console.warn(n))}var Cf=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pf=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ma={[jt]:{transfer:qa,primaries:Ya,toReference:n=>n,fromReference:n=>n},[ut]:{transfer:vt,primaries:Ya,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Il]:{transfer:qa,primaries:Za,toReference:n=>n.applyMatrix3(Pf),fromReference:n=>n.applyMatrix3(Cf)},[au]:{transfer:vt,primaries:Za,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Pf),fromReference:n=>n.applyMatrix3(Cf).convertLinearToSRGB()}},rv=new Set([jt,Il]),lt={enabled:!0,_workingColorSpace:jt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!rv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ma[e].toReference,s=ma[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ma[n].primaries},getTransfer:function(n){return n===Pn?qa:ma[n].transfer}};function yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var tr,Ja=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{tr===void 0&&(tr=Io("canvas")),tr.width=e.width,tr.height=e.height;let i=tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Io("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yr(t[i]/255)*255):t[i]=yr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ov=0,ja=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oc(s[o].image)):r.push(Oc(s[o]))}else r=Oc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ja.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var av=0,hn=class n extends hs{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Wn,s=Wn,r=Tn,o=cs,a=ti,l=ls,c=n.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=pi(),this.name="",this.source=new ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Hs?ut:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ip)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hi:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hi:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?Hs:Hp}set encoding(e){wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hs?ut:Pn}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Ip;hn.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,M=(f+1)/2,w=(m+1)/2,S=(h+d)/4,R=(u+x)/4,F=(g+p)/4;return _>M&&_>w?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=S/i,r=R/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=S/s,r=F/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=F/r),this.set(i,s,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xh=class extends hs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(wo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hs?ut:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ja(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends xh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Qa=class extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vh=class extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let p=1-a,m=l*d+c*f+h*g+u*x,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let w=Math.sqrt(_),S=Math.atan2(w,m*v);p=Math.sin(p*S)/w,a=Math.sin(a*S)/w}let M=a*v;if(l=l*p+d*M,c=c*p+f*M,h=h*p+g*M,u=u*p+x*M,p===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kc=new P,Lf=new dn,In=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),xa.subVectors(this.max,mo),nr.subVectors(e.a,mo),ir.subVectors(e.b,mo),sr.subVectors(e.c,mo),Qi.subVectors(ir,nr),es.subVectors(sr,ir),Is.subVectors(nr,sr);let t=[0,-Qi.z,Qi.y,0,-es.z,es.y,0,-Is.z,Is.y,Qi.z,0,-Qi.x,es.z,0,-es.x,Is.z,0,-Is.x,-Qi.y,Qi.x,0,-es.y,es.x,0,-Is.y,Is.x,0];return!Bc(t,nr,ir,sr,xa)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,nr,ir,sr,xa))?!1:(va.crossVectors(Qi,es),t=[va.x,va.y,va.z],Bc(t,nr,ir,sr,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Li=[new P,new P,new P,new P,new P,new P,new P,new P],ui=new P,ga=new In,nr=new P,ir=new P,sr=new P,Qi=new P,es=new P,Is=new P,mo=new P,xa=new P,va=new P,Fs=new P;function Bc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Fs.fromArray(n,r);let a=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=e.dot(Fs),c=t.dot(Fs),h=i.dot(Fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var lv=new In,go=new P,Hc=new P,Xn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):lv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);let t=go.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(go,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(Hc)),this.expandByPoint(go.copy(e.center).sub(Hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ii=new P,Gc=new P,_a=new P,ts=new P,Vc=new P,ya=new P,Wc=new P,Ar=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Gc.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(Gc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_a),a=ts.dot(this.direction),l=-ts.dot(_a),c=ts.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gc).addScaledVector(_a,d),f}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);let i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,s,r){Vc.subVectors(t,e),ya.subVectors(i,e),Wc.crossVectors(Vc,ya);let o=this.direction.dot(Wc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,e);let l=a*this.direction.dot(ya.crossVectors(ts,ya));if(l<0)return null;let c=a*this.direction.dot(Vc.cross(ts));if(c<0||l+c>o)return null;let h=-a*ts.dot(Wc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,p)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/rr.setFromMatrixColumn(e,0).length(),r=1/rr.setFromMatrixColumn(e,1).length(),o=1/rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cv,e,hv)}lookAt(e,t,i){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),ns.crossVectors(i,Gn),ns.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),ns.crossVectors(i,Gn)),ns.normalize(),Ma.crossVectors(Gn,ns),s[0]=ns.x,s[4]=Ma.x,s[8]=Gn.x,s[1]=ns.y,s[5]=Ma.y,s[9]=Gn.y,s[2]=ns.z,s[6]=Ma.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],v=i[3],_=i[7],M=i[11],w=i[15],S=s[0],R=s[4],F=s[8],b=s[12],T=s[1],U=s[5],B=s[9],O=s[13],L=s[2],N=s[6],q=s[10],K=s[14],$=s[3],Z=s[7],te=s[11],ae=s[15];return r[0]=o*S+a*T+l*L+c*$,r[4]=o*R+a*U+l*N+c*Z,r[8]=o*F+a*B+l*q+c*te,r[12]=o*b+a*O+l*K+c*ae,r[1]=h*S+u*T+d*L+f*$,r[5]=h*R+u*U+d*N+f*Z,r[9]=h*F+u*B+d*q+f*te,r[13]=h*b+u*O+d*K+f*ae,r[2]=g*S+x*T+p*L+m*$,r[6]=g*R+x*U+p*N+m*Z,r[10]=g*F+x*B+p*q+m*te,r[14]=g*b+x*O+p*K+m*ae,r[3]=v*S+_*T+M*L+w*$,r[7]=v*R+_*U+M*N+w*Z,r[11]=v*F+_*B+M*q+w*te,r[15]=v*b+_*O+M*K+w*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],v=u*p*c-x*d*c+x*l*f-a*p*f-u*l*m+a*d*m,_=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,M=h*x*c-g*u*c+g*a*f-o*x*f-h*a*m+o*u*m,w=g*u*l-h*x*l-g*a*d+o*x*d+h*a*p-o*u*p,S=t*v+i*_+s*M+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/S;return e[0]=v*R,e[1]=(x*d*r-u*p*r-x*s*f+i*p*f+u*s*m-i*d*m)*R,e[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*m+i*l*m)*R,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*R,e[4]=_*R,e[5]=(h*p*r-g*d*r+g*s*f-t*p*f-h*s*m+t*d*m)*R,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=M*R,e[9]=(g*u*r-h*x*r-g*i*f+t*x*f+h*i*m-t*u*m)*R,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*m+t*a*m)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*R,e[12]=w*R,e[13]=(h*x*s-g*u*s+g*i*d-t*x*d-h*i*p+t*u*p)*R,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*p-t*a*p)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,p=o*u,m=a*u,v=l*c,_=l*h,M=l*u,w=i.x,S=i.y,R=i.z;return s[0]=(1-(x+m))*w,s[1]=(f+M)*w,s[2]=(g-_)*w,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(d+m))*S,s[6]=(p+v)*S,s[7]=0,s[8]=(g+_)*R,s[9]=(p-v)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=rr.set(s[0],s[1],s[2]).length(),o=rr.set(s[4],s[5],s[6]).length(),a=rr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],di.copy(this);let c=1/r,h=1/o,u=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,t.setFromRotationMatrix(di),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Bi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(a===Bi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$a)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Bi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,f=(i+s)*h,g,x;if(a===Bi)g=(o+r)*u,x=-2*u;else if(a===$a)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},rr=new P,di=new Ne,cv=new P(0,0,0),hv=new P(1,1,1),ns=new P,Ma=new P,Gn=new P,If=new Ne,Ff=new dn,us=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return If.makeRotationFromQuaternion(e),this.setFromRotationMatrix(If,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ff.setFromEuler(this),this.setFromQuaternion(Ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};us.DEFAULT_ORDER="XYZ";var el=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},uv=0,Df=new P,or=new dn,Fi=new Ne,ba=new P,xo=new P,dv=new P,fv=new dn,Uf=new P(1,0,0),Nf=new P(0,1,0),zf=new P(0,0,1),pv={type:"added"},mv={type:"removed"},Mt=class n extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new us,i=new dn,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new nt}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(Uf,e)}rotateY(e){return this.rotateOnAxis(Nf,e)}rotateZ(e){return this.rotateOnAxis(zf,e)}translateOnAxis(e,t){return Df.copy(e).applyQuaternion(this.quaternion),this.position.add(Df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uf,e)}translateY(e){return this.translateOnAxis(Nf,e)}translateZ(e){return this.translateOnAxis(zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ba.copy(e):ba.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(xo,ba,this.up):Fi.lookAt(ba,xo,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),or.setFromRotationMatrix(Fi),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mv)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,dv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,fv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Mt.DEFAULT_UP=new P(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new P,Di=new P,Xc=new P,Ui=new P,ar=new P,lr=new P,Of=new P,qc=new P,Yc=new P,Zc=new P,Sa=!1,xr=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),fi.subVectors(e,t),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){fi.subVectors(s,t),Di.subVectors(i,t),Xc.subVectors(e,t);let o=fi.dot(fi),a=fi.dot(Di),l=fi.dot(Xc),c=Di.dot(Di),h=Di.dot(Xc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getUV(e,t,i,s,r,o,a,l){return Sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sa=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static isFrontFacing(e,t,i,s){return fi.subVectors(i,t),Di.subVectors(e,t),fi.cross(Di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),fi.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sa=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ar.subVectors(s,i),lr.subVectors(r,i),qc.subVectors(e,i);let l=ar.dot(qc),c=lr.dot(qc);if(l<=0&&c<=0)return t.copy(i);Yc.subVectors(e,s);let h=ar.dot(Yc),u=lr.dot(Yc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ar,o);Zc.subVectors(e,r);let f=ar.dot(Zc),g=lr.dot(Zc);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(lr,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Of.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Of,a);let m=1/(p+x+d);return o=x*m,a=d*m,t.copy(i).addScaledVector(ar,o).addScaledVector(lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function $c(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=lu(e,1),t=Kt(t,0,1),i=Kt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=$c(o,r,e+1/3),this.g=$c(o,r,e),this.b=$c(o,r,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let i=Xp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=zc(e.r),this.g=zc(e.g),this.b=zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return lt.fromWorkingColorSpace(vn.copy(this),e),Math.round(Kt(vn.r*255,0,255))*65536+Math.round(Kt(vn.g*255,0,255))*256+Math.round(Kt(vn.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(vn.copy(this),t);let i=vn.r,s=vn.g,r=vn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=ut){lt.fromWorkingColorSpace(vn.copy(this),e);let t=vn.r,i=vn.g,s=vn.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(Ea);let i=Eo(is.h,Ea.h,t),s=Eo(is.s,Ea.s,t),r=Eo(is.l,Ea.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new ne;ne.NAMES=Xp;var gv=0,Fn=class extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=os,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Po,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Co&&(i.blendSrc=this.blendSrc),this.blendDst!==Po&&(i.blendDst=this.blendDst),this.blendEquation!==zs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},De=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Wt=new P,wa=new ie,dt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ph&&(e.usage=this.usage),e}};var Rr=class extends dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var tl=class extends dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var He=class extends dt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var xv=0,ei=new Ne,Kc=new Mt,cr=new P,Vn=new In,vo=new In,on=new P,Ct=class n extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wp(e)?tl:Rr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new He(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Vn.min,vo.min),Vn.expandByPoint(on),on.addVectors(Vn.max,vo.max),Vn.expandByPoint(on)):(Vn.expandByPoint(vo.min),Vn.expandByPoint(vo.max))}Vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(cr.fromBufferAttribute(e,c),on.add(cr)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new P,h[T]=new P;let u=new P,d=new P,f=new P,g=new ie,x=new ie,p=new ie,m=new P,v=new P;function _(T,U,B){u.fromArray(s,T*3),d.fromArray(s,U*3),f.fromArray(s,B*3),g.fromArray(o,T*2),x.fromArray(o,U*2),p.fromArray(o,B*2),d.sub(u),f.sub(u),x.sub(g),p.sub(g);let O=1/(x.x*p.y-p.x*x.y);isFinite(O)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-x.y).multiplyScalar(O),v.copy(f).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(O),c[T].add(m),c[U].add(m),c[B].add(m),h[T].add(v),h[U].add(v),h[B].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let T=0,U=M.length;T<U;++T){let B=M[T],O=B.start,L=B.count;for(let N=O,q=O+L;N<q;N+=3)_(i[N+0],i[N+1],i[N+2])}let w=new P,S=new P,R=new P,F=new P;function b(T){R.fromArray(r,T*3),F.copy(R);let U=c[T];w.copy(U),w.sub(R.multiplyScalar(R.dot(U))).normalize(),S.crossVectors(F,U);let O=S.dot(h[T])<0?-1:1;l[T*4]=w.x,l[T*4+1]=w.y,l[T*4+2]=w.z,l[T*4+3]=O}for(let T=0,U=M.length;T<U;++T){let B=M[T],O=B.start,L=B.count;for(let N=O,q=O+L;N<q;N+=3)b(i[N+0]),b(i[N+1]),b(i[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kf=new Ne,Ds=new Ar,Ta=new Xn,Bf=new P,hr=new P,ur=new P,dr=new P,Jc=new P,Aa=new P,Ra=new ie,Ca=new ie,Pa=new ie,Hf=new P,Gf=new P,Vf=new P,La=new P,Ia=new P,se=class extends Mt{constructor(e=new Ct,t=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Jc.fromBufferAttribute(u,e),o?Aa.addScaledVector(Jc,h):Aa.addScaledVector(Jc.sub(t),h))}t.add(Aa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(Ta.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Ta,Bf)===null||Ds.origin.distanceToSquared(Bf)>(e.far-e.near)**2))&&(kf.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(kf),!(i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,w=_;M<w;M+=3){let S=a.getX(M),R=a.getX(M+1),F=a.getX(M+2);s=Fa(this,m,e,i,c,h,u,S,R,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=a.getX(p),_=a.getX(p+1),M=a.getX(p+2);s=Fa(this,o,e,i,c,h,u,v,_,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,w=_;M<w;M+=3){let S=M,R=M+1,F=M+2;s=Fa(this,m,e,i,c,h,u,S,R,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=p,_=p+1,M=p+2;s=Fa(this,o,e,i,c,h,u,v,_,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function vv(n,e,t,i,s,r,o,a){let l;if(e.side===Xt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Si,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ia);return c<t.near||c>t.far?null:{distance:c,point:Ia.clone(),object:n}}function Fa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,hr),n.getVertexPosition(l,ur),n.getVertexPosition(c,dr);let h=vv(n,e,t,i,hr,ur,dr,La);if(h){s&&(Ra.fromBufferAttribute(s,a),Ca.fromBufferAttribute(s,l),Pa.fromBufferAttribute(s,c),h.uv=xr.getInterpolation(La,hr,ur,dr,Ra,Ca,Pa,new ie)),r&&(Ra.fromBufferAttribute(r,a),Ca.fromBufferAttribute(r,l),Pa.fromBufferAttribute(r,c),h.uv1=xr.getInterpolation(La,hr,ur,dr,Ra,Ca,Pa,new ie),h.uv2=h.uv1),o&&(Hf.fromBufferAttribute(o,a),Gf.fromBufferAttribute(o,l),Vf.fromBufferAttribute(o,c),h.normal=xr.getInterpolation(La,hr,ur,dr,Hf,Gf,Vf,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};xr.getNormal(hr,ur,dr,u.normal),h.face=u}return h}var Ei=class n extends Ct{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(u,2));function g(x,p,m,v,_,M,w,S,R,F,b){let T=M/R,U=w/F,B=M/2,O=w/2,L=S/2,N=R+1,q=F+1,K=0,$=0,Z=new P;for(let te=0;te<q;te++){let ae=te*U-O;for(let xe=0;xe<N;xe++){let Y=xe*T-B;Z[x]=Y*v,Z[p]=ae*_,Z[m]=L,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[p]=0,Z[m]=S>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(xe/R),u.push(1-te/F),K+=1}}for(let te=0;te<F;te++)for(let ae=0;ae<R;ae++){let xe=d+ae+N*te,Y=d+ae+N*(te+1),j=d+(ae+1)+N*(te+1),me=d+(ae+1)+N*te;l.push(xe,Y,me),l.push(Y,j,me),$+=6}a.addGroup(f,$,b),f+=$,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Cr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function wn(n){let e={};for(let t=0;t<n.length;t++){let i=Cr(n[t]);for(let s in i)e[s]=i[s]}return e}function _v(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qp(n){return n.getRenderTarget()===null?n.outputColorSpace:lt.workingColorSpace}var _s={clone:Cr,merge:wn},yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ft=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yv,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=_v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},nl=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jt=class extends nl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(So*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fr=-90,pr=1,Fo=class extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(fr,pr,e,t);s.layers=this.layers,this.add(s);let r=new Jt(fr,pr,e,t);r.layers=this.layers,this.add(r);let o=new Jt(fr,pr,e,t);o.layers=this.layers,this.add(o);let a=new Jt(fr,pr,e,t);a.layers=this.layers,this.add(a);let l=new Jt(fr,pr,e,t);l.layers=this.layers,this.add(l);let c=new Jt(fr,pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},il=class extends hn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Do=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(wo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hs?ut:Pn),this.texture=new il(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ei(5,5,5),r=new ft({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:bi});r.uniforms.tEquirect.value=t;let o=new se(s,r),a=t.minFilter;return t.minFilter===cs&&(t.minFilter=Tn),new Fo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},jc=new P,bv=new P,Sv=new nt,Oi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=jc.subVectors(i,t).cross(bv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(jc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sv.getNormalMatrix(e),s=this.coplanarPoint(jc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Us=new Xn,Da=new P,Uo=class{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],p=s[11],m=s[12],v=s[13],_=s[14],M=s[15];if(i[0].setComponents(l-r,d-c,p-f,M-m).normalize(),i[1].setComponents(l+r,d+c,p+f,M+m).normalize(),i[2].setComponents(l+o,d+h,p+g,M+v).normalize(),i[3].setComponents(l-o,d-h,p-g,M-v).normalize(),i[4].setComponents(l-a,d-u,p-x,M-_).normalize(),t===Bi)i[5].setComponents(l+a,d+u,p+x,M+_).normalize();else if(t===$a)i[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Da.x=s.normal.x>0?e.max.x:e.min.x,Da.y=s.normal.y>0?e.max.y:e.min.y,Da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ev(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,p=g.length;x<p;x++){let m=g[x];t?n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Dt=class n extends Ct{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let v=m*d-o;for(let _=0;_<c;_++){let M=_*u-r;g.push(M,-v,0),x.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let _=v+c*m,M=v+c*(m+1),w=v+1+c*(m+1),S=v+1+c*m;f.push(_,M,S),f.push(M,w,S)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},wv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tv=`#ifdef USE_ALPHAHASH
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
#endif`,Av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lv=`#ifdef USE_AOMAP
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
#endif`,Iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fv=`#ifdef USE_BATCHING
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
#endif`,Dv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ov=`#ifdef USE_IRIDESCENCE
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
#endif`,kv=`#ifdef USE_BUMPMAP
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
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zv=`#define PI 3.141592653589793
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
} // validated`,$v=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kv=`vec3 transformedNormal = objectNormal;
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
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`
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
}`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d_=`#ifdef USE_GRADIENTMAP
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
}`,f_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,p_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x_=`uniform bool receiveShadow;
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
#endif`,v_=`#ifdef USE_ENVMAP
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
#endif`,__=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S_=`PhysicalMaterial material;
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
#endif`,E_=`struct PhysicalMaterial {
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
}`,w_=`
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
#endif`,T_=`#if defined( RE_IndirectDiffuse )
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
#endif`,A_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,L_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,I_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U_=`#if defined( USE_POINTS_UV )
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
#endif`,N_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k_=`#ifdef USE_MORPHNORMALS
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
#endif`,B_=`#ifdef USE_MORPHTARGETS
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
#endif`,H_=`#ifdef USE_MORPHTARGETS
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
#endif`,G_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y_=`#ifdef USE_NORMALMAP
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
#endif`,Z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cy=`float getShadowMask() {
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
}`,hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fy=`#ifdef USE_SKINNING
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
#endif`,py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,my=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#ifdef USE_TRANSMISSION
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wy=`uniform sampler2D t2D;
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`#include <common>
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
}`,Ly=`#if DEPTH_PACKING == 3200
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
}`,Iy=`#define DISTANCE
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
}`,Fy=`#define DISTANCE
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`uniform float scale;
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
}`,zy=`uniform vec3 diffuse;
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
}`,Oy=`#include <common>
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
}`,ky=`uniform vec3 diffuse;
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
}`,By=`#define LAMBERT
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
}`,Hy=`#define LAMBERT
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
}`,Gy=`#define MATCAP
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
}`,Vy=`#define MATCAP
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
}`,Wy=`#define NORMAL
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
}`,Xy=`#define NORMAL
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
}`,qy=`#define PHONG
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
}`,Yy=`#define PHONG
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
}`,Zy=`#define STANDARD
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
}`,$y=`#define STANDARD
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
}`,Ky=`#define TOON
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
}`,Jy=`#define TOON
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
}`,jy=`uniform float size;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,eM=`#include <common>
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
}`,tM=`uniform vec3 color;
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
}`,nM=`uniform float rotation;
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
}`,iM=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:wv,alphahash_pars_fragment:Tv,alphamap_fragment:Av,alphamap_pars_fragment:Rv,alphatest_fragment:Cv,alphatest_pars_fragment:Pv,aomap_fragment:Lv,aomap_pars_fragment:Iv,batching_pars_vertex:Fv,batching_vertex:Dv,begin_vertex:Uv,beginnormal_vertex:Nv,bsdfs:zv,iridescence_fragment:Ov,bumpmap_pars_fragment:kv,clipping_planes_fragment:Bv,clipping_planes_pars_fragment:Hv,clipping_planes_pars_vertex:Gv,clipping_planes_vertex:Vv,color_fragment:Wv,color_pars_fragment:Xv,color_pars_vertex:qv,color_vertex:Yv,common:Zv,cube_uv_reflection_fragment:$v,defaultnormal_vertex:Kv,displacementmap_pars_vertex:Jv,displacementmap_vertex:jv,emissivemap_fragment:Qv,emissivemap_pars_fragment:e_,colorspace_fragment:t_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:s_,envmap_pars_fragment:r_,envmap_pars_vertex:o_,envmap_physical_pars_fragment:v_,envmap_vertex:a_,fog_vertex:l_,fog_pars_vertex:c_,fog_fragment:h_,fog_pars_fragment:u_,gradientmap_pars_fragment:d_,lightmap_fragment:f_,lightmap_pars_fragment:p_,lights_lambert_fragment:m_,lights_lambert_pars_fragment:g_,lights_pars_begin:x_,lights_toon_fragment:__,lights_toon_pars_fragment:y_,lights_phong_fragment:M_,lights_phong_pars_fragment:b_,lights_physical_fragment:S_,lights_physical_pars_fragment:E_,lights_fragment_begin:w_,lights_fragment_maps:T_,lights_fragment_end:A_,logdepthbuf_fragment:R_,logdepthbuf_pars_fragment:C_,logdepthbuf_pars_vertex:P_,logdepthbuf_vertex:L_,map_fragment:I_,map_pars_fragment:F_,map_particle_fragment:D_,map_particle_pars_fragment:U_,metalnessmap_fragment:N_,metalnessmap_pars_fragment:z_,morphcolor_vertex:O_,morphnormal_vertex:k_,morphtarget_pars_vertex:B_,morphtarget_vertex:H_,normal_fragment_begin:G_,normal_fragment_maps:V_,normal_pars_fragment:W_,normal_pars_vertex:X_,normal_vertex:q_,normalmap_pars_fragment:Y_,clearcoat_normal_fragment_begin:Z_,clearcoat_normal_fragment_maps:$_,clearcoat_pars_fragment:K_,iridescence_pars_fragment:J_,opaque_fragment:j_,packing:Q_,premultiplied_alpha_fragment:ey,project_vertex:ty,dithering_fragment:ny,dithering_pars_fragment:iy,roughnessmap_fragment:sy,roughnessmap_pars_fragment:ry,shadowmap_pars_fragment:oy,shadowmap_pars_vertex:ay,shadowmap_vertex:ly,shadowmask_pars_fragment:cy,skinbase_vertex:hy,skinning_pars_vertex:uy,skinning_vertex:dy,skinnormal_vertex:fy,specularmap_fragment:py,specularmap_pars_fragment:my,tonemapping_fragment:gy,tonemapping_pars_fragment:xy,transmission_fragment:vy,transmission_pars_fragment:_y,uv_pars_fragment:yy,uv_pars_vertex:My,uv_vertex:by,worldpos_vertex:Sy,background_vert:Ey,background_frag:wy,backgroundCube_vert:Ty,backgroundCube_frag:Ay,cube_vert:Ry,cube_frag:Cy,depth_vert:Py,depth_frag:Ly,distanceRGBA_vert:Iy,distanceRGBA_frag:Fy,equirect_vert:Dy,equirect_frag:Uy,linedashed_vert:Ny,linedashed_frag:zy,meshbasic_vert:Oy,meshbasic_frag:ky,meshlambert_vert:By,meshlambert_frag:Hy,meshmatcap_vert:Gy,meshmatcap_frag:Vy,meshnormal_vert:Wy,meshnormal_frag:Xy,meshphong_vert:qy,meshphong_frag:Yy,meshphysical_vert:Zy,meshphysical_frag:$y,meshtoon_vert:Ky,meshtoon_frag:Jy,points_vert:jy,points_frag:Qy,shadow_vert:eM,shadow_frag:tM,sprite_vert:nM,sprite_frag:iM},ce={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},yi={basic:{uniforms:wn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:wn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ne(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:wn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:wn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:wn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ne(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:wn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:wn([ce.points,ce.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:wn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:wn([ce.common,ce.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:wn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:wn([ce.sprite,ce.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:wn([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:wn([ce.lights,ce.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};yi.physical={uniforms:wn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Ua={r:0,b:0,g:0};function sM(n,e,t,i,s,r,o){let a=new ne(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(p,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),v=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Pl)?(h===void 0&&(h=new se(new Ei(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:Cr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=lt.getTransfer(_.colorSpace)!==vt,(u!==_||d!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new se(new Dt(2,2),new ft({name:"BackgroundMaterial",uniforms:Cr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=lt.getTransfer(_.colorSpace)!==vt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,m){p.getRGB(Ua,qp(n)),i.buffers.color.setClear(Ua.r,Ua.g,Ua.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:g}}function rM(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function u(L,N,q,K,$){let Z=!1;if(o){let te=x(K,q,N);c!==te&&(c=te,f(c.object)),Z=m(L,K,q,$),Z&&v(L,K,q,$)}else{let te=N.wireframe===!0;(c.geometry!==K.id||c.program!==q.id||c.wireframe!==te)&&(c.geometry=K.id,c.program=q.id,c.wireframe=te,Z=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,F(L,N,q,K),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,N,q){let K=q.wireframe===!0,$=a[L.id];$===void 0&&($={},a[L.id]=$);let Z=$[N.id];Z===void 0&&(Z={},$[N.id]=Z);let te=Z[K];return te===void 0&&(te=p(d()),Z[K]=te),te}function p(L){let N=[],q=[],K=[];for(let $=0;$<s;$++)N[$]=0,q[$]=0,K[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:K,object:L,attributes:{},index:null}}function m(L,N,q,K){let $=c.attributes,Z=N.attributes,te=0,ae=q.getAttributes();for(let xe in ae)if(ae[xe].location>=0){let j=$[xe],me=Z[xe];if(me===void 0&&(xe==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),xe==="instanceColor"&&L.instanceColor&&(me=L.instanceColor)),j===void 0||j.attribute!==me||me&&j.data!==me.data)return!0;te++}return c.attributesNum!==te||c.index!==K}function v(L,N,q,K){let $={},Z=N.attributes,te=0,ae=q.getAttributes();for(let xe in ae)if(ae[xe].location>=0){let j=Z[xe];j===void 0&&(xe==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),xe==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let me={};me.attribute=j,j&&j.data&&(me.data=j.data),$[xe]=me,te++}c.attributes=$,c.attributesNum=te,c.index=K}function _(){let L=c.newAttributes;for(let N=0,q=L.length;N<q;N++)L[N]=0}function M(L){w(L,0)}function w(L,N){let q=c.newAttributes,K=c.enabledAttributes,$=c.attributeDivisors;q[L]=1,K[L]===0&&(n.enableVertexAttribArray(L),K[L]=1),$[L]!==N&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),$[L]=N)}function S(){let L=c.newAttributes,N=c.enabledAttributes;for(let q=0,K=N.length;q<K;q++)N[q]!==L[q]&&(n.disableVertexAttribArray(q),N[q]=0)}function R(L,N,q,K,$,Z,te){te===!0?n.vertexAttribIPointer(L,N,q,$,Z):n.vertexAttribPointer(L,N,q,K,$,Z)}function F(L,N,q,K){if(i.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let $=K.attributes,Z=q.getAttributes(),te=N.defaultAttributeValues;for(let ae in Z){let xe=Z[ae];if(xe.location>=0){let Y=$[ae];if(Y===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){let j=Y.normalized,me=Y.itemSize,Ee=t.get(Y);if(Ee===void 0)continue;let Se=Ee.buffer,We=Ee.type,Ye=Ee.bytesPerElement,ze=i.isWebGL2===!0&&(We===n.INT||We===n.UNSIGNED_INT||Y.gpuType===Fp);if(Y.isInterleavedBufferAttribute){let at=Y.data,H=at.stride,Mn=Y.offset;if(at.isInstancedInterleavedBuffer){for(let Pe=0;Pe<xe.locationSize;Pe++)w(xe.location+Pe,at.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Pe=0;Pe<xe.locationSize;Pe++)M(xe.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let Pe=0;Pe<xe.locationSize;Pe++)R(xe.location+Pe,me/xe.locationSize,We,j,H*Ye,(Mn+me/xe.locationSize*Pe)*Ye,ze)}else{if(Y.isInstancedBufferAttribute){for(let at=0;at<xe.locationSize;at++)w(xe.location+at,Y.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let at=0;at<xe.locationSize;at++)M(xe.location+at);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let at=0;at<xe.locationSize;at++)R(xe.location+at,me/xe.locationSize,We,j,me*Ye,me/xe.locationSize*at*Ye,ze)}}else if(te!==void 0){let j=te[ae];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(xe.location,j);break;case 3:n.vertexAttrib3fv(xe.location,j);break;case 4:n.vertexAttrib4fv(xe.location,j);break;default:n.vertexAttrib1fv(xe.location,j)}}}}S()}function b(){B();for(let L in a){let N=a[L];for(let q in N){let K=N[q];for(let $ in K)g(K[$].object),delete K[$];delete N[q]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;let N=a[L.id];for(let q in N){let K=N[q];for(let $ in K)g(K[$].object),delete K[$];delete N[q]}delete a[L.id]}function U(L){for(let N in a){let q=a[N];if(q[L.id]===void 0)continue;let K=q[L.id];for(let $ in K)g(K[$].object),delete K[$];delete q[L.id]}}function B(){O(),h=!0,c!==l&&(c=l,f(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:B,resetDefaultState:O,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:M,disableUnusedAttributes:S}}function oM(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function aM(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,M=o||e.has("OES_texture_float"),w=_&&M,S=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:S}}function lM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Oi,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let v=r?0:i,_=v*4,M=m.clippingState||null;l.value=M,M=h(g,d,_,f);for(let w=0;w!==_;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,M=f;_!==x;++_,M+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function cM(n){let e=new WeakMap;function t(o,a){return a===dh?o.mapping=br:a===fh&&(o.mapping=Sr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===dh||a===fh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Do(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ds=class extends nl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vr=4,Wf=[.125,.215,.35,.446,.526,.582],Os=20,Qc=new ds,Xf=new ne,eh=null,th=0,nh=0,Ns=(1+Math.sqrt(5))/2,mr=1/Ns,qf=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Ns,mr),new P(0,Ns,-mr),new P(mr,0,Ns),new P(-mr,0,Ns),new P(Ns,mr,0),new P(-Ns,mr,0)],Pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Ln,format:ti,colorSpace:jt,depthBuffer:!1},s=Yf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hM(r)),this._blurMaterial=uM(r,e,t)}return s}_compileMaterial(e){let t=new se(this._lodPlanes[0],e);this._renderer.compile(t,Qc)}_sceneToCubeUV(e,t,i,s){let a=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xf),h.toneMapping=as,h.autoClear=!1;let f=new De({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new se(new Ei,f),x=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(Xf),x=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let _=this._cubeSize;Na(s,v*_,m>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===br||e.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$f()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Na(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=qf[(s-1)%qf.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new se(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Os-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Os;p>Os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Os}`);let m=[],v=0;for(let R=0;R<Os;++R){let F=R/x,b=Math.exp(-F*F/2);m.push(b),R===0?v+=b:R<p&&(v+=2*b)}for(let R=0;R<m.length;R++)m[R]=m[R]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let M=this._sizeLods[s],w=3*M*(s>_-vr?s-_+vr:0),S=4*(this._cubeSize-M);Na(t,w,S,3*M,2*M),l.setRenderTarget(t),l.render(u,Qc)}};function hM(n){let e=[],t=[],i=[],s=n,r=n-vr+1+Wf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-vr?l=Wf[o-n+vr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,p=2,m=1,v=new Float32Array(x*g*f),_=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let S=0;S<f;S++){let R=S%3*2/3-1,F=S>2?0:-1,b=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];v.set(b,x*g*S),_.set(d,p*g*S);let T=[S,S,S,S,S,S];M.set(T,m*g*S)}let w=new Ct;w.setAttribute("position",new dt(v,x)),w.setAttribute("uv",new dt(_,p)),w.setAttribute("faceIndex",new dt(M,m)),e.push(w),s>vr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yf(n,e,t){let i=new un(n,e,t);return i.texture.mapping=Pl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function uM(n,e,t){let i=new Float32Array(Os),s=new P(0,1,0);return new ft({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cu(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Zf(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function $f(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}function dM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===dh||l===fh,h=l===br||l===Sr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Pr(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Pr(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function fM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function pM(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let _=0,M=v.length;_<M;_+=3){let w=v[_+0],S=v[_+1],R=v[_+2];d.push(w,S,S,R,R,w)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,M=v.length/3-1;_<M;_+=3){let w=_+0,S=_+1,R=_+2;d.push(w,S,S,R,R,w)}}else return;let p=new(Wp(d)?tl:Rr)(d,1);p.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function mM(n,e,t,i){let s=i.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){n.drawElements(r,g,a,f*l),t.update(g,r,1)}function u(f,g,x){if(x===0)return;let p,m;if(s)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,f*l,x),t.update(g,r,x)}function d(f,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<x;m++)this.render(f[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let m=0;for(let v=0;v<x;v++)m+=g[v];t.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function gM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function xM(n,e){return n[0]-e[0]}function vM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function _M(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],F=0;v===!0&&(F=1),_===!0&&(F=2),M===!0&&(F=3);let b=h.attributes.position.count*F,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let U=new Float32Array(b*T*4*g),B=new Qa(U,b,T,g);B.type=ki,B.needsUpdate=!0;let O=F*4;for(let N=0;N<g;N++){let q=w[N],K=S[N],$=R[N],Z=b*T*4*N;for(let te=0;te<q.count;te++){let ae=te*O;v===!0&&(o.fromBufferAttribute(q,te),U[Z+ae+0]=o.x,U[Z+ae+1]=o.y,U[Z+ae+2]=o.z,U[Z+ae+3]=0),_===!0&&(o.fromBufferAttribute(K,te),U[Z+ae+4]=o.x,U[Z+ae+5]=o.y,U[Z+ae+6]=o.z,U[Z+ae+7]=0),M===!0&&(o.fromBufferAttribute($,te),U[Z+ae+8]=o.x,U[Z+ae+9]=o.y,U[Z+ae+10]=o.z,U[Z+ae+11]=$.itemSize===4?o.w:1)}}x={count:g,texture:B,size:new ie(b,T)},r.set(h,x),h.addEventListener("dispose",L)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];let m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",m),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<f;_++){let M=g[_];M[0]=_,M[1]=d[_]}g.sort(vM);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(xM);let x=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let M=a[_],w=M[0],S=M[1];w!==Number.MAX_SAFE_INTEGER&&S?(x&&h.getAttribute("morphTarget"+_)!==x[w]&&h.setAttribute("morphTarget"+_,x[w]),p&&h.getAttribute("morphNormal"+_)!==p[w]&&h.setAttribute("morphNormal"+_,p[w]),s[_]=S,m+=S):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let v=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function yM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var sl=class extends hn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Bs,h!==Bs&&h!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Bs&&(i=ss),i===void 0&&h===Er&&(i=ks),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Zp=new hn,$p=new sl(1,1);$p.compareFunction=Gp;var Kp=new Qa,Jp=new vh,jp=new il,Kf=[],Jf=[],jf=new Float32Array(16),Qf=new Float32Array(9),ep=new Float32Array(4);function kr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Kf[s];if(r===void 0&&(r=new Float32Array(s),Kf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Dl(n,e){let t=Jf[e];t===void 0&&(t=new Int32Array(e),Jf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function MM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function SM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function EM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function wM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;ep.set(i),n.uniformMatrix2fv(this.addr,!1,ep),en(t,i)}}function TM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Qf.set(i),n.uniformMatrix3fv(this.addr,!1,Qf),en(t,i)}}function AM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;jf.set(i),n.uniformMatrix4fv(this.addr,!1,jf),en(t,i)}}function RM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function CM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function PM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function LM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function IM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function FM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function DM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function UM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function NM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?$p:Zp;t.setTexture2D(e||r,s)}function zM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Jp,s)}function OM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||jp,s)}function kM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Kp,s)}function BM(n){switch(n){case 5126:return MM;case 35664:return bM;case 35665:return SM;case 35666:return EM;case 35674:return wM;case 35675:return TM;case 35676:return AM;case 5124:case 35670:return RM;case 35667:case 35671:return CM;case 35668:case 35672:return PM;case 35669:case 35673:return LM;case 5125:return IM;case 36294:return FM;case 36295:return DM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return kM}}function HM(n,e){n.uniform1fv(this.addr,e)}function GM(n,e){let t=kr(e,this.size,2);n.uniform2fv(this.addr,t)}function VM(n,e){let t=kr(e,this.size,3);n.uniform3fv(this.addr,t)}function WM(n,e){let t=kr(e,this.size,4);n.uniform4fv(this.addr,t)}function XM(n,e){let t=kr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qM(n,e){let t=kr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function YM(n,e){let t=kr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ZM(n,e){n.uniform1iv(this.addr,e)}function $M(n,e){n.uniform2iv(this.addr,e)}function KM(n,e){n.uniform3iv(this.addr,e)}function JM(n,e){n.uniform4iv(this.addr,e)}function jM(n,e){n.uniform1uiv(this.addr,e)}function QM(n,e){n.uniform2uiv(this.addr,e)}function eb(n,e){n.uniform3uiv(this.addr,e)}function tb(n,e){n.uniform4uiv(this.addr,e)}function nb(n,e,t){let i=this.cache,s=e.length,r=Dl(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Zp,r[o])}function ib(n,e,t){let i=this.cache,s=e.length,r=Dl(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Jp,r[o])}function sb(n,e,t){let i=this.cache,s=e.length,r=Dl(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||jp,r[o])}function rb(n,e,t){let i=this.cache,s=e.length,r=Dl(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Kp,r[o])}function ob(n){switch(n){case 5126:return HM;case 35664:return GM;case 35665:return VM;case 35666:return WM;case 35674:return XM;case 35675:return qM;case 35676:return YM;case 5124:case 35670:return ZM;case 35667:case 35671:return $M;case 35668:case 35672:return KM;case 35669:case 35673:return JM;case 5125:return jM;case 36294:return QM;case 36295:return eb;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return rb}}var _h=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=BM(t.type)}},yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ob(t.type)}},Mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ih=/(\w+)(\])?(\[|\.)?/g;function tp(n,e){n.seq.push(e),n.map[e.id]=e}function ab(n,e,t){let i=n.name,s=i.length;for(ih.lastIndex=0;;){let r=ih.exec(i),o=ih.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){tp(t,c===void 0?new _h(a,n,e):new yh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Mh(a),tp(t,u)),t=u}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ab(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function np(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var lb=37297,cb=0;function hb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ub(n){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n),i;switch(e===t?i="":e===Za&&t===Ya?i="LinearDisplayP3ToLinearSRGB":e===Ya&&t===Za&&(i="LinearSRGBToLinearDisplayP3"),n){case jt:case Il:return[i,"LinearTransferOETF"];case ut:case au:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ip(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+hb(n.getShaderSource(e),o)}else return s}function db(n,e){let t=ub(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fb(n,e){let t;switch(e){case eu:t="Linear";break;case tu:t="Reinhard";break;case nu:t="OptimizedCineon";break;case Xo:t="ACESFilmic";break;case iu:t="AgX";break;case Sx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pb(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function mb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_r).join(`
`)}function gb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function _r(n){return n!==""}function sp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(n){return n.replace(vb,yb)}var _b=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yb(n,e){let t=$e[e];if(t===void 0){let i=_b.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bh(t)}var Mb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function op(n){return n.replace(Mb,bb)}function bb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ap(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function Eb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Sr:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Tb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case Mx:e="ENVMAP_BLENDING_MIX";break;case bx:e="ENVMAP_BLENDING_ADD";break}return e}function Ab(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Rb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Sb(t),c=Eb(t),h=wb(t),u=Tb(t),d=Ab(t),f=t.isWebGL2?"":pb(t),g=mb(t),x=gb(r),p=s.createProgram(),m,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_r).join(`
`),m.length>0&&(m+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_r).join(`
`),v.length>0&&(v+=`
`)):(m=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),v=[f,ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==as?"#define TONE_MAPPING":"",t.toneMapping!==as?$e.tonemapping_pars_fragment:"",t.toneMapping!==as?fb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,db("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),o=bh(o),o=sp(o,t),o=rp(o,t),a=bh(a),a=sp(a,t),a=rp(a,t),o=op(o),a=op(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let M=_+m+o,w=_+v+a,S=np(s,s.VERTEX_SHADER,M),R=np(s,s.FRAGMENT_SHADER,w);s.attachShader(p,S),s.attachShader(p,R),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function F(B){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(S).trim(),N=s.getShaderInfoLog(R).trim(),q=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,S,R);else{let $=ip(s,S,"vertex"),Z=ip(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+$+`
`+Z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||N==="")&&(K=!1);K&&(B.diagnostics={runnable:q,programLog:O,vertexShader:{log:L,prefix:m},fragmentShader:{log:N,prefix:v}})}s.deleteShader(S),s.deleteShader(R),b=new Mr(s,p),T=xb(s,p)}let b;this.getUniforms=function(){return b===void 0&&F(this),b};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(p,lb)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=R,this}var Cb=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Eh(e),t.set(e,i)),i}},Eh=class{constructor(e){this.id=Cb++,this.code=e,this.usedTimes=0}};function Pb(n,e,t,i,s,r,o){let a=new el,l=new Sh,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===0?"uv":`uv${b}`}function p(b,T,U,B,O){let L=B.fog,N=O.geometry,q=b.isMeshStandardMaterial?B.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),$=K&&K.mapping===Pl?K.image.height:null,Z=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let te=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ae=te!==void 0?te.length:0,xe=0;N.morphAttributes.position!==void 0&&(xe=1),N.morphAttributes.normal!==void 0&&(xe=2),N.morphAttributes.color!==void 0&&(xe=3);let Y,j,me,Ee;if(Z){let bn=yi[Z];Y=bn.vertexShader,j=bn.fragmentShader}else Y=b.vertexShader,j=b.fragmentShader,l.update(b),me=l.getVertexShaderID(b),Ee=l.getFragmentShaderID(b);let Se=n.getRenderTarget(),We=O.isInstancedMesh===!0,Ye=O.isBatchedMesh===!0,ze=!!b.map,at=!!b.matcap,H=!!K,Mn=!!b.aoMap,Pe=!!b.lightMap,Ge=!!b.bumpMap,ye=!!b.normalMap,Ut=!!b.displacementMap,Je=!!b.emissiveMap,C=!!b.metalnessMap,E=!!b.roughnessMap,V=b.anisotropy>0,re=b.clearcoat>0,ee=b.iridescence>0,oe=b.sheen>0,Me=b.transmission>0,pe=V&&!!b.anisotropyMap,ve=re&&!!b.clearcoatMap,Ue=re&&!!b.clearcoatNormalMap,je=re&&!!b.clearcoatRoughnessMap,Q=ee&&!!b.iridescenceMap,gt=ee&&!!b.iridescenceThicknessMap,it=oe&&!!b.sheenColorMap,Be=oe&&!!b.sheenRoughnessMap,Ae=!!b.specularMap,_e=!!b.specularColorMap,Ze=!!b.specularIntensityMap,mt=Me&&!!b.transmissionMap,Ot=Me&&!!b.thicknessMap,et=!!b.gradientMap,le=!!b.alphaMap,I=b.alphaTest>0,de=!!b.alphaHash,fe=!!b.extensions,Oe=!!N.attributes.uv1,Le=!!N.attributes.uv2,wt=!!N.attributes.uv3,Tt=as;return b.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Tt=n.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:b.type,shaderName:b.name,vertexShader:Y,fragmentShader:j,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ye,instancing:We,instancingColor:We&&O.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:jt,map:ze,matcap:at,envMap:H,envMapMode:H&&K.mapping,envMapCubeUVHeight:$,aoMap:Mn,lightMap:Pe,bumpMap:Ge,normalMap:ye,displacementMap:d&&Ut,emissiveMap:Je,normalMapObjectSpace:ye&&b.normalMapType===Nx,normalMapTangentSpace:ye&&b.normalMapType===ou,metalnessMap:C,roughnessMap:E,anisotropy:V,anisotropyMap:pe,clearcoat:re,clearcoatMap:ve,clearcoatNormalMap:Ue,clearcoatRoughnessMap:je,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:gt,sheen:oe,sheenColorMap:it,sheenRoughnessMap:Be,specularMap:Ae,specularColorMap:_e,specularIntensityMap:Ze,transmission:Me,transmissionMap:mt,thicknessMap:Ot,gradientMap:et,opaque:b.transparent===!1&&b.blending===os,alphaMap:le,alphaTest:I,alphaHash:de,combine:b.combine,mapUv:ze&&x(b.map.channel),aoMapUv:Mn&&x(b.aoMap.channel),lightMapUv:Pe&&x(b.lightMap.channel),bumpMapUv:Ge&&x(b.bumpMap.channel),normalMapUv:ye&&x(b.normalMap.channel),displacementMapUv:Ut&&x(b.displacementMap.channel),emissiveMapUv:Je&&x(b.emissiveMap.channel),metalnessMapUv:C&&x(b.metalnessMap.channel),roughnessMapUv:E&&x(b.roughnessMap.channel),anisotropyMapUv:pe&&x(b.anisotropyMap.channel),clearcoatMapUv:ve&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:it&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(b.sheenRoughnessMap.channel),specularMapUv:Ae&&x(b.specularMap.channel),specularColorMapUv:_e&&x(b.specularColorMap.channel),specularIntensityMapUv:Ze&&x(b.specularIntensityMap.channel),transmissionMapUv:mt&&x(b.transmissionMap.channel),thicknessMapUv:Ot&&x(b.thicknessMap.channel),alphaMapUv:le&&x(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ye||V),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Le,vertexUv3s:wt,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(ze||le),fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:xe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Tt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ze&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yt,flipSided:b.side===Xt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:fe&&b.extensions.derivatives===!0,extensionFragDepth:fe&&b.extensions.fragDepth===!0,extensionDrawBuffers:fe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){let T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)T.push(U),T.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(v(T,b),_(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function v(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function _(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function M(b){let T=g[b.type],U;if(T){let B=yi[T];U=_s.clone(B.uniforms)}else U=b.uniforms;return U}function w(b,T){let U;for(let B=0,O=c.length;B<O;B++){let L=c[B];if(L.cacheKey===T){U=L,++U.usedTimes;break}}return U===void 0&&(U=new Rb(n,T,b,r),c.push(U)),U}function S(b){if(--b.usedTimes===0){let T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:w,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:F}}function Lb(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Ib(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,x,p){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},n[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),e++,m}function a(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||Ib),i.length>1&&i.sort(d||lp),s.length>1&&s.sort(d||lp)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Fb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new cp,n.set(i,[o])):s>=r.length?(o=new cp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Db(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ne};break;case"SpotLight":t={position:new P,direction:new P,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":t={color:new ne,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Ub(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Nb=0;function zb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ob(n,e){let t=new Db,i=Ub(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,o=new Ne,a=new Ne;function l(h,u){let d=0,f=0,g=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let x=0,p=0,m=0,v=0,_=0,M=0,w=0,S=0,R=0,F=0,b=0;h.sort(zb);let T=u===!0?Math.PI:1;for(let B=0,O=h.length;B<O;B++){let L=h[B],N=L.color,q=L.intensity,K=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=N.r*q*T,f+=N.g*q*T,g+=N.b*q*T;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(L.sh.coefficients[Z],q);b++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){let te=L.shadow,ae=i.get(L);ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,s.directionalShadow[x]=ae,s.directionalShadowMap[x]=$,s.directionalShadowMatrix[x]=L.shadow.matrix,M++}s.directional[x]=Z,x++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(N).multiplyScalar(q*T),Z.distance=K,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,s.spot[m]=Z;let te=L.shadow;if(L.map&&(s.spotLightMap[R]=L.map,R++,te.updateMatrices(L),L.castShadow&&F++),s.spotLightMatrix[m]=te.matrix,L.castShadow){let ae=i.get(L);ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,s.spotShadow[m]=ae,s.spotShadowMap[m]=$,S++}m++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(N).multiplyScalar(q),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),s.rectArea[v]=Z,v++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*T),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let te=L.shadow,ae=i.get(L);ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,ae.shadowCameraNear=te.camera.near,ae.shadowCameraFar=te.camera.far,s.pointShadow[p]=ae,s.pointShadowMap[p]=$,s.pointShadowMatrix[p]=L.shadow.matrix,w++}s.point[p]=Z,p++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(q*T),Z.groundColor.copy(L.groundColor).multiplyScalar(q*T),s.hemi[_]=Z,_++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let U=s.hash;(U.directionalLength!==x||U.pointLength!==p||U.spotLength!==m||U.rectAreaLength!==v||U.hemiLength!==_||U.numDirectionalShadows!==M||U.numPointShadows!==w||U.numSpotShadows!==S||U.numSpotMaps!==R||U.numLightProbes!==b)&&(s.directional.length=x,s.spot.length=m,s.rectArea.length=v,s.point.length=p,s.hemi.length=_,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=S+R-F,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=b,U.directionalLength=x,U.pointLength=p,U.spotLength=m,U.rectAreaLength=v,U.hemiLength=_,U.numDirectionalShadows=M,U.numPointShadows=w,U.numSpotShadows=S,U.numSpotMaps=R,U.numLightProbes=b,s.version=Nb++)}function c(h,u){let d=0,f=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let M=h[v];if(M.isDirectionalLight){let w=s.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),d++}else if(M.isSpotLight){let w=s.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let w=s.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let w=s.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let w=s.hemi[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:s}}function hp(n,e){let t=new Ob(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function kb(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new hp(n,e),t.set(r,[l])):o>=a.length?(l=new hp(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var wh=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Th=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hb=`uniform sampler2D shadow_pass;
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
}`;function Gb(n,e,t){let i=new Uo,s=new ie,r=new ie,o=new _t,a=new wh({depthPacking:Ux}),l=new Th,c={},h=t.maxTextureSize,u={[Si]:Xt,[Xt]:Si,[yt]:yt},d=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Bb,fragmentShader:Hb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ct;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new se(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let m=this.type;this.render=function(S,R,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let b=n.getRenderTarget(),T=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),B=n.state;B.setBlending(bi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let O=m!==zi&&this.type===zi,L=m===zi&&this.type!==zi;for(let N=0,q=S.length;N<q;N++){let K=S[N],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let Z=$.getFrameExtents();if(s.multiply(Z),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,$.mapSize.y=r.y)),$.map===null||O===!0||L===!0){let ae=this.type!==zi?{minFilter:$t,magFilter:$t}:{};$.map!==null&&$.map.dispose(),$.map=new un(s.x,s.y,ae),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let te=$.getViewportCount();for(let ae=0;ae<te;ae++){let xe=$.getViewport(ae);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),B.viewport(o),$.updateMatrices(K,ae),i=$.getFrustum(),M(R,F,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===zi&&v($,F),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(b,T,U)};function v(S,R){let F=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new un(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(R,null,F,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(R,null,F,f,x,null)}function _(S,R,F,b){let T=null,U=F.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)T=U;else if(T=F.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let B=T.uuid,O=R.uuid,L=c[B];L===void 0&&(L={},c[B]=L);let N=L[O];N===void 0&&(N=T.clone(),L[O]=N,R.addEventListener("dispose",w)),T=N}if(T.visible=R.visible,T.wireframe=R.wireframe,b===zi?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:u[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let B=n.properties.get(T);B.light=F}return T}function M(S,R,F,b,T){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===zi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld);let O=e.update(S),L=S.material;if(Array.isArray(L)){let N=O.groups;for(let q=0,K=N.length;q<K;q++){let $=N[q],Z=L[$.materialIndex];if(Z&&Z.visible){let te=_(S,Z,b,T);S.onBeforeShadow(n,S,R,F,O,te,$),n.renderBufferDirect(F,null,O,te,S,$),S.onAfterShadow(n,S,R,F,O,te,$)}}}else if(L.visible){let N=_(S,L,b,T);S.onBeforeShadow(n,S,R,F,O,N,null),n.renderBufferDirect(F,null,O,N,S,null),S.onAfterShadow(n,S,R,F,O,N,null)}}let B=S.children;for(let O=0,L=B.length;O<L;O++)M(B[O],R,F,b,T)}function w(S){S.target.removeEventListener("dispose",w);for(let F in c){let b=c[F],T=S.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function Vb(n,e,t){let i=t.isWebGL2;function s(){let I=!1,de=new _t,fe=null,Oe=new _t(0,0,0,0);return{setMask:function(Le){fe!==Le&&!I&&(n.colorMask(Le,Le,Le,Le),fe=Le)},setLocked:function(Le){I=Le},setClear:function(Le,wt,Tt,sn,bn){bn===!0&&(Le*=sn,wt*=sn,Tt*=sn),de.set(Le,wt,Tt,sn),Oe.equals(de)===!1&&(n.clearColor(Le,wt,Tt,sn),Oe.copy(de))},reset:function(){I=!1,fe=null,Oe.set(-1,0,0,0)}}}function r(){let I=!1,de=null,fe=null,Oe=null;return{setTest:function(Le){Le?Ye(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(Le){de!==Le&&!I&&(n.depthMask(Le),de=Le)},setFunc:function(Le){if(fe!==Le){switch(Le){case mx:n.depthFunc(n.NEVER);break;case gx:n.depthFunc(n.ALWAYS);break;case xx:n.depthFunc(n.LESS);break;case Wa:n.depthFunc(n.LEQUAL);break;case vx:n.depthFunc(n.EQUAL);break;case _x:n.depthFunc(n.GEQUAL);break;case jh:n.depthFunc(n.GREATER);break;case yx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=Le}},setLocked:function(Le){I=Le},setClear:function(Le){Oe!==Le&&(n.clearDepth(Le),Oe=Le)},reset:function(){I=!1,de=null,fe=null,Oe=null}}}function o(){let I=!1,de=null,fe=null,Oe=null,Le=null,wt=null,Tt=null,sn=null,bn=null;return{setTest:function(At){I||(At?Ye(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(At){de!==At&&!I&&(n.stencilMask(At),de=At)},setFunc:function(At,Sn,_i){(fe!==At||Oe!==Sn||Le!==_i)&&(n.stencilFunc(At,Sn,_i),fe=At,Oe=Sn,Le=_i)},setOp:function(At,Sn,_i){(wt!==At||Tt!==Sn||sn!==_i)&&(n.stencilOp(At,Sn,_i),wt=At,Tt=Sn,sn=_i)},setLocked:function(At){I=At},setClear:function(At){bn!==At&&(n.clearStencil(At),bn=At)},reset:function(){I=!1,de=null,fe=null,Oe=null,Le=null,wt=null,Tt=null,sn=null,bn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],p=null,m=!1,v=null,_=null,M=null,w=null,S=null,R=null,F=null,b=new ne(0,0,0),T=0,U=!1,B=null,O=null,L=null,N=null,q=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,Z=0,te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(te)[1]),$=Z>=1):te.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),$=Z>=2);let ae=null,xe={},Y=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),me=new _t().fromArray(Y),Ee=new _t().fromArray(j);function Se(I,de,fe,Oe){let Le=new Uint8Array(4),wt=n.createTexture();n.bindTexture(I,wt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Tt=0;Tt<fe;Tt++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(de,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(de+Tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return wt}let We={};We[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),We[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(We[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),We[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ye(n.DEPTH_TEST),l.setFunc(Wa),Je(!1),C(Wd),Ye(n.CULL_FACE),ye(bi);function Ye(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function ze(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function at(I,de){return f[I]!==de?(n.bindFramebuffer(I,de),f[I]=de,i&&(I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=de),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=de)),!0):!1}function H(I,de){let fe=x,Oe=!1;if(I)if(fe=g.get(de),fe===void 0&&(fe=[],g.set(de,fe)),I.isWebGLMultipleRenderTargets){let Le=I.texture;if(fe.length!==Le.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Tt=Le.length;wt<Tt;wt++)fe[wt]=n.COLOR_ATTACHMENT0+wt;fe.length=Le.length,Oe=!0}}else fe[0]!==n.COLOR_ATTACHMENT0&&(fe[0]=n.COLOR_ATTACHMENT0,Oe=!0);else fe[0]!==n.BACK&&(fe[0]=n.BACK,Oe=!0);Oe&&(t.isWebGL2?n.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function Mn(I){return p!==I?(n.useProgram(I),p=I,!0):!1}let Pe={[zs]:n.FUNC_ADD,[ex]:n.FUNC_SUBTRACT,[tx]:n.FUNC_REVERSE_SUBTRACT};if(i)Pe[Yd]=n.MIN,Pe[Zd]=n.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(Pe[Yd]=I.MIN_EXT,Pe[Zd]=I.MAX_EXT)}let Ge={[nx]:n.ZERO,[ix]:n.ONE,[sx]:n.SRC_COLOR,[Co]:n.SRC_ALPHA,[hx]:n.SRC_ALPHA_SATURATE,[lx]:n.DST_COLOR,[ox]:n.DST_ALPHA,[rx]:n.ONE_MINUS_SRC_COLOR,[Po]:n.ONE_MINUS_SRC_ALPHA,[cx]:n.ONE_MINUS_DST_COLOR,[ax]:n.ONE_MINUS_DST_ALPHA,[ux]:n.CONSTANT_COLOR,[dx]:n.ONE_MINUS_CONSTANT_COLOR,[fx]:n.CONSTANT_ALPHA,[px]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(I,de,fe,Oe,Le,wt,Tt,sn,bn,At){if(I===bi){m===!0&&(ze(n.BLEND),m=!1);return}if(m===!1&&(Ye(n.BLEND),m=!0),I!==Jh){if(I!==v||At!==U){if((_!==zs||S!==zs)&&(n.blendEquation(n.FUNC_ADD),_=zs,S=zs),At)switch(I){case os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _n:n.blendFunc(n.ONE,n.ONE);break;case Xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _n:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,w=null,R=null,F=null,b.set(0,0,0),T=0,v=I,U=At}return}Le=Le||de,wt=wt||fe,Tt=Tt||Oe,(de!==_||Le!==S)&&(n.blendEquationSeparate(Pe[de],Pe[Le]),_=de,S=Le),(fe!==M||Oe!==w||wt!==R||Tt!==F)&&(n.blendFuncSeparate(Ge[fe],Ge[Oe],Ge[wt],Ge[Tt]),M=fe,w=Oe,R=wt,F=Tt),(sn.equals(b)===!1||bn!==T)&&(n.blendColor(sn.r,sn.g,sn.b,bn),b.copy(sn),T=bn),v=I,U=!1}function Ut(I,de){I.side===yt?ze(n.CULL_FACE):Ye(n.CULL_FACE);let fe=I.side===Xt;de&&(fe=!fe),Je(fe),I.blending===os&&I.transparent===!1?ye(bi):ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);let Oe=I.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ye(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(I){B!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),B=I)}function C(I){I!==jg?(Ye(n.CULL_FACE),I!==O&&(I===Wd?n.cullFace(n.BACK):I===Qg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),O=I}function E(I){I!==L&&($&&n.lineWidth(I),L=I)}function V(I,de,fe){I?(Ye(n.POLYGON_OFFSET_FILL),(N!==de||q!==fe)&&(n.polygonOffset(de,fe),N=de,q=fe)):ze(n.POLYGON_OFFSET_FILL)}function re(I){I?Ye(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function ee(I){I===void 0&&(I=n.TEXTURE0+K-1),ae!==I&&(n.activeTexture(I),ae=I)}function oe(I,de,fe){fe===void 0&&(ae===null?fe=n.TEXTURE0+K-1:fe=ae);let Oe=xe[fe];Oe===void 0&&(Oe={type:void 0,texture:void 0},xe[fe]=Oe),(Oe.type!==I||Oe.texture!==de)&&(ae!==fe&&(n.activeTexture(fe),ae=fe),n.bindTexture(I,de||We[I]),Oe.type=I,Oe.texture=de)}function Me(){let I=xe[ae];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function pe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(I){me.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),me.copy(I))}function mt(I){Ee.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ee.copy(I))}function Ot(I,de){let fe=u.get(de);fe===void 0&&(fe=new WeakMap,u.set(de,fe));let Oe=fe.get(I);Oe===void 0&&(Oe=n.getUniformBlockIndex(de,I.name),fe.set(I,Oe))}function et(I,de){let Oe=u.get(de).get(I);h.get(de)!==Oe&&(n.uniformBlockBinding(de,Oe,I.__bindingPointIndex),h.set(de,Oe))}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ae=null,xe={},f={},g=new WeakMap,x=[],p=null,m=!1,v=null,_=null,M=null,w=null,S=null,R=null,F=null,b=new ne(0,0,0),T=0,U=!1,B=null,O=null,L=null,N=null,q=null,me.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ye,disable:ze,bindFramebuffer:at,drawBuffers:H,useProgram:Mn,setBlending:ye,setMaterial:Ut,setFlipSided:Je,setCullFace:C,setLineWidth:E,setPolygonOffset:V,setScissorTest:re,activeTexture:ee,bindTexture:oe,unbindTexture:Me,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:Ae,texImage3D:_e,updateUBOMapping:Ot,uniformBlockBinding:et,texStorage2D:it,texStorage3D:Be,texSubImage2D:Ue,texSubImage3D:je,compressedTexSubImage2D:Q,compressedTexSubImage3D:gt,scissor:Ze,viewport:mt,reset:le}}function Wb(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return f?new OffscreenCanvas(C,E):Io("canvas")}function x(C,E,V,re){let ee=1;if((C.width>re||C.height>re)&&(ee=re/Math.max(C.width,C.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let oe=E?Ka:Math.floor,Me=oe(ee*C.width),pe=oe(ee*C.height);u===void 0&&(u=g(Me,pe));let ve=V?g(Me,pe):u;return ve.width=Me,ve.height=pe,ve.getContext("2d").drawImage(C,0,0,Me,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+pe+")."),ve}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return gh(C.width)&&gh(C.height)}function m(C){return a?!1:C.wrapS!==Wn||C.wrapT!==Wn||C.minFilter!==$t&&C.minFilter!==Tn}function v(C,E){return C.generateMipmaps&&E&&C.minFilter!==$t&&C.minFilter!==Tn}function _(C){n.generateMipmap(C)}function M(C,E,V,re,ee=!1){if(a===!1)return E;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=E;if(E===n.RED&&(V===n.FLOAT&&(oe=n.R32F),V===n.HALF_FLOAT&&(oe=n.R16F),V===n.UNSIGNED_BYTE&&(oe=n.R8)),E===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(oe=n.R8UI),V===n.UNSIGNED_SHORT&&(oe=n.R16UI),V===n.UNSIGNED_INT&&(oe=n.R32UI),V===n.BYTE&&(oe=n.R8I),V===n.SHORT&&(oe=n.R16I),V===n.INT&&(oe=n.R32I)),E===n.RG&&(V===n.FLOAT&&(oe=n.RG32F),V===n.HALF_FLOAT&&(oe=n.RG16F),V===n.UNSIGNED_BYTE&&(oe=n.RG8)),E===n.RGBA){let Me=ee?qa:lt.getTransfer(re);V===n.FLOAT&&(oe=n.RGBA32F),V===n.HALF_FLOAT&&(oe=n.RGBA16F),V===n.UNSIGNED_BYTE&&(oe=Me===vt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function w(C,E,V){return v(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==$t&&C.minFilter!==Tn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function S(C){return C===$t||C===Xa||C===bo?n.NEAREST:n.LINEAR}function R(C){let E=C.target;E.removeEventListener("dispose",R),b(E),E.isVideoTexture&&h.delete(E)}function F(C){let E=C.target;E.removeEventListener("dispose",F),U(E)}function b(C){let E=i.get(C);if(E.__webglInit===void 0)return;let V=C.source,re=d.get(V);if(re){let ee=re[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(C),Object.keys(re).length===0&&d.delete(V)}i.remove(C)}function T(C){let E=i.get(C);n.deleteTexture(E.__webglTexture);let V=C.source,re=d.get(V);delete re[E.__cacheKey],o.memory.textures--}function U(C){let E=C.texture,V=i.get(C),re=i.get(E);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(V.__webglFramebuffer[ee]))for(let oe=0;oe<V.__webglFramebuffer[ee].length;oe++)n.deleteFramebuffer(V.__webglFramebuffer[ee][oe]);else n.deleteFramebuffer(V.__webglFramebuffer[ee]);V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[ee])}else{if(Array.isArray(V.__webglFramebuffer))for(let ee=0;ee<V.__webglFramebuffer.length;ee++)n.deleteFramebuffer(V.__webglFramebuffer[ee]);else n.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ee=0;ee<V.__webglColorRenderbuffer.length;ee++)V.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[ee]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,oe=E.length;ee<oe;ee++){let Me=i.get(E[ee]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(E[ee])}i.remove(E),i.remove(C)}let B=0;function O(){B=0}function L(){let C=B;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),B+=1,C}function N(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function q(C,E){let V=i.get(C);if(C.isVideoTexture&&Ut(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){let re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(V,C,E);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+E)}function K(C,E){let V=i.get(C);if(C.version>0&&V.__version!==C.version){me(V,C,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+E)}function $(C,E){let V=i.get(C);if(C.version>0&&V.__version!==C.version){me(V,C,E);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+E)}function Z(C,E){let V=i.get(C);if(C.version>0&&V.__version!==C.version){Ee(V,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+E)}let te={[Hi]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[Lo]:n.MIRRORED_REPEAT},ae={[$t]:n.NEAREST,[Xa]:n.NEAREST_MIPMAP_NEAREST,[bo]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[su]:n.LINEAR_MIPMAP_NEAREST,[cs]:n.LINEAR_MIPMAP_LINEAR},xe={[zx]:n.NEVER,[Vx]:n.ALWAYS,[Ox]:n.LESS,[Gp]:n.LEQUAL,[kx]:n.EQUAL,[Gx]:n.GEQUAL,[Bx]:n.GREATER,[Hx]:n.NOTEQUAL};function Y(C,E,V){if(V?(n.texParameteri(C,n.TEXTURE_WRAP_S,te[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,te[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,te[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ae[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ae[E.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Wn||E.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,S(E.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,S(E.minFilter)),E.minFilter!==$t&&E.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let re=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===$t||E.minFilter!==bo&&E.minFilter!==cs||E.type===ki&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ln&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function j(C,E){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",R));let re=E.source,ee=d.get(re);ee===void 0&&(ee={},d.set(re,ee));let oe=N(E);if(oe!==C.__cacheKey){ee[oe]===void 0&&(ee[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ee[oe].usedTimes++;let Me=ee[C.__cacheKey];Me!==void 0&&(ee[C.__cacheKey].usedTimes--,Me.usedTimes===0&&T(E)),C.__cacheKey=oe,C.__webglTexture=ee[oe].texture}return V}function me(C,E,V){let re=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=n.TEXTURE_3D);let ee=j(C,E),oe=E.source;t.bindTexture(re,C.__webglTexture,n.TEXTURE0+V);let Me=i.get(oe);if(oe.version!==Me.__version||ee===!0){t.activeTexture(n.TEXTURE0+V);let pe=lt.getPrimaries(lt.workingColorSpace),ve=E.colorSpace===Pn?null:lt.getPrimaries(E.colorSpace),Ue=E.colorSpace===Pn||pe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let je=m(E)&&p(E.image)===!1,Q=x(E.image,je,!1,s.maxTextureSize);Q=Je(E,Q);let gt=p(Q)||a,it=r.convert(E.format,E.colorSpace),Be=r.convert(E.type),Ae=M(E.internalFormat,it,Be,E.colorSpace,E.isVideoTexture);Y(re,E,gt);let _e,Ze=E.mipmaps,mt=a&&E.isVideoTexture!==!0&&Ae!==kp,Ot=Me.__version===void 0||ee===!0,et=w(E,Q,gt);if(E.isDepthTexture)Ae=n.DEPTH_COMPONENT,a?E.type===ki?Ae=n.DEPTH_COMPONENT32F:E.type===ss?Ae=n.DEPTH_COMPONENT24:E.type===ks?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:E.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Bs&&Ae===n.DEPTH_COMPONENT&&E.type!==ru&&E.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ss,Be=r.convert(E.type)),E.format===Er&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,E.type!==ks&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ks,Be=r.convert(E.type))),Ot&&(mt?t.texStorage2D(n.TEXTURE_2D,1,Ae,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ae,Q.width,Q.height,0,it,Be,null));else if(E.isDataTexture)if(Ze.length>0&&gt){mt&&Ot&&t.texStorage2D(n.TEXTURE_2D,et,Ae,Ze[0].width,Ze[0].height);for(let le=0,I=Ze.length;le<I;le++)_e=Ze[le],mt?t.texSubImage2D(n.TEXTURE_2D,le,0,0,_e.width,_e.height,it,Be,_e.data):t.texImage2D(n.TEXTURE_2D,le,Ae,_e.width,_e.height,0,it,Be,_e.data);E.generateMipmaps=!1}else mt?(Ot&&t.texStorage2D(n.TEXTURE_2D,et,Ae,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,it,Be,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,Q.width,Q.height,0,it,Be,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){mt&&Ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,et,Ae,Ze[0].width,Ze[0].height,Q.depth);for(let le=0,I=Ze.length;le<I;le++)_e=Ze[le],E.format!==ti?it!==null?mt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,_e.width,_e.height,Q.depth,it,_e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Ae,_e.width,_e.height,Q.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,_e.width,_e.height,Q.depth,it,Be,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Ae,_e.width,_e.height,Q.depth,0,it,Be,_e.data)}else{mt&&Ot&&t.texStorage2D(n.TEXTURE_2D,et,Ae,Ze[0].width,Ze[0].height);for(let le=0,I=Ze.length;le<I;le++)_e=Ze[le],E.format!==ti?it!==null?mt?t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,_e.width,_e.height,it,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?t.texSubImage2D(n.TEXTURE_2D,le,0,0,_e.width,_e.height,it,Be,_e.data):t.texImage2D(n.TEXTURE_2D,le,Ae,_e.width,_e.height,0,it,Be,_e.data)}else if(E.isDataArrayTexture)mt?(Ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,et,Ae,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,it,Be,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,Q.width,Q.height,Q.depth,0,it,Be,Q.data);else if(E.isData3DTexture)mt?(Ot&&t.texStorage3D(n.TEXTURE_3D,et,Ae,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,it,Be,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,Q.width,Q.height,Q.depth,0,it,Be,Q.data);else if(E.isFramebufferTexture){if(Ot)if(mt)t.texStorage2D(n.TEXTURE_2D,et,Ae,Q.width,Q.height);else{let le=Q.width,I=Q.height;for(let de=0;de<et;de++)t.texImage2D(n.TEXTURE_2D,de,Ae,le,I,0,it,Be,null),le>>=1,I>>=1}}else if(Ze.length>0&&gt){mt&&Ot&&t.texStorage2D(n.TEXTURE_2D,et,Ae,Ze[0].width,Ze[0].height);for(let le=0,I=Ze.length;le<I;le++)_e=Ze[le],mt?t.texSubImage2D(n.TEXTURE_2D,le,0,0,it,Be,_e):t.texImage2D(n.TEXTURE_2D,le,Ae,it,Be,_e);E.generateMipmaps=!1}else mt?(Ot&&t.texStorage2D(n.TEXTURE_2D,et,Ae,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,it,Be,Q)):t.texImage2D(n.TEXTURE_2D,0,Ae,it,Be,Q);v(E,gt)&&_(re),Me.__version=oe.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ee(C,E,V){if(E.image.length!==6)return;let re=j(C,E),ee=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);let oe=i.get(ee);if(ee.version!==oe.__version||re===!0){t.activeTexture(n.TEXTURE0+V);let Me=lt.getPrimaries(lt.workingColorSpace),pe=E.colorSpace===Pn?null:lt.getPrimaries(E.colorSpace),ve=E.colorSpace===Pn||Me===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,je=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let le=0;le<6;le++)!Ue&&!je?Q[le]=x(E.image[le],!1,!0,s.maxCubemapSize):Q[le]=je?E.image[le].image:E.image[le],Q[le]=Je(E,Q[le]);let gt=Q[0],it=p(gt)||a,Be=r.convert(E.format,E.colorSpace),Ae=r.convert(E.type),_e=M(E.internalFormat,Be,Ae,E.colorSpace),Ze=a&&E.isVideoTexture!==!0,mt=oe.__version===void 0||re===!0,Ot=w(E,gt,it);Y(n.TEXTURE_CUBE_MAP,E,it);let et;if(Ue){Ze&&mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,_e,gt.width,gt.height);for(let le=0;le<6;le++){et=Q[le].mipmaps;for(let I=0;I<et.length;I++){let de=et[I];E.format!==ti?Be!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,0,0,de.width,de.height,Be,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,_e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,0,0,de.width,de.height,Be,Ae,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,_e,de.width,de.height,0,Be,Ae,de.data)}}}else{et=E.mipmaps,Ze&&mt&&(et.length>0&&Ot++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,_e,Q[0].width,Q[0].height));for(let le=0;le<6;le++)if(je){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Q[le].width,Q[le].height,Be,Ae,Q[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,_e,Q[le].width,Q[le].height,0,Be,Ae,Q[le].data);for(let I=0;I<et.length;I++){let fe=et[I].image[le].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,0,0,fe.width,fe.height,Be,Ae,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,_e,fe.width,fe.height,0,Be,Ae,fe.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Be,Ae,Q[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,_e,Be,Ae,Q[le]);for(let I=0;I<et.length;I++){let de=et[I];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,0,0,Be,Ae,de.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,_e,Be,Ae,de.image[le])}}}v(E,it)&&_(n.TEXTURE_CUBE_MAP),oe.__version=ee.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Se(C,E,V,re,ee,oe){let Me=r.convert(V.format,V.colorSpace),pe=r.convert(V.type),ve=M(V.internalFormat,Me,pe,V.colorSpace);if(!i.get(E).__hasExternalTextures){let je=Math.max(1,E.width>>oe),Q=Math.max(1,E.height>>oe);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,oe,ve,je,Q,E.depth,0,Me,pe,null):t.texImage2D(ee,oe,ve,je,Q,0,Me,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ye(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ee,i.get(V).__webglTexture,0,Ge(E)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ee,i.get(V).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(C,E,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let re=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||ye(E)){let ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ki?re=n.DEPTH_COMPONENT32F:ee.type===ss&&(re=n.DEPTH_COMPONENT24));let oe=Ge(E);ye(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,re,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,re,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){let re=Ge(E);V&&ye(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,E.width,E.height):ye(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{let re=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<re.length;ee++){let oe=re[ee],Me=r.convert(oe.format,oe.colorSpace),pe=r.convert(oe.type),ve=M(oe.internalFormat,Me,pe,oe.colorSpace),Ue=Ge(E);V&&ye(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ve,E.width,E.height):ye(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,ve,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ve,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);let re=i.get(E.depthTexture).__webglTexture,ee=Ge(E);if(E.depthTexture.format===Bs)ye(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(E.depthTexture.format===Er)ye(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ze(C){let E=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ye(E.__webglFramebuffer,C)}else if(V){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]=n.createRenderbuffer(),We(E.__webglDepthbuffer[re],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),We(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(C,E,V){let re=i.get(C);E!==void 0&&Se(re.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&ze(C)}function H(C){let E=C.texture,V=i.get(C),re=i.get(E);C.addEventListener("dispose",F),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=E.version,o.memory.textures++);let ee=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,Me=p(C)||a;if(ee){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let ve=0;ve<E.mipmaps.length;ve++)V.__webglFramebuffer[pe][ve]=n.createFramebuffer()}else V.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)V.__webglFramebuffer[pe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(oe)if(s.drawBuffers){let pe=C.texture;for(let ve=0,Ue=pe.length;ve<Ue;ve++){let je=i.get(pe[ve]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ye(C)===!1){let pe=oe?E:[E];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ve=0;ve<pe.length;ve++){let Ue=pe[ve];V.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ve]);let je=r.convert(Ue.format,Ue.colorSpace),Q=r.convert(Ue.type),gt=M(Ue.internalFormat,je,Q,Ue.colorSpace,C.isXRRenderTarget===!0),it=Ge(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,it,gt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,V.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),We(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),Y(n.TEXTURE_CUBE_MAP,E,Me);for(let pe=0;pe<6;pe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)Se(V.__webglFramebuffer[pe][ve],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else Se(V.__webglFramebuffer[pe],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(E,Me)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){let pe=C.texture;for(let ve=0,Ue=pe.length;ve<Ue;ve++){let je=pe[ve],Q=i.get(je);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Y(n.TEXTURE_2D,je,Me),Se(V.__webglFramebuffer,C,je,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),v(je,Me)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?pe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,re.__webglTexture),Y(pe,E,Me),a&&E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)Se(V.__webglFramebuffer[ve],C,E,n.COLOR_ATTACHMENT0,pe,ve);else Se(V.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,pe,0);v(E,Me)&&_(pe),t.unbindTexture()}C.depthBuffer&&ze(C)}function Mn(C){let E=p(C)||a,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,ee=V.length;re<ee;re++){let oe=V[re];if(v(oe,E)){let Me=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get(oe).__webglTexture;t.bindTexture(Me,pe),_(Me),t.unbindTexture()}}}function Pe(C){if(a&&C.samples>0&&ye(C)===!1){let E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,re=C.height,ee=n.COLOR_BUFFER_BIT,oe=[],Me=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(C),ve=C.isWebGLMultipleRenderTargets===!0;if(ve)for(let Ue=0;Ue<E.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){oe.push(n.COLOR_ATTACHMENT0+Ue),C.depthBuffer&&oe.push(Me);let je=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(je===!1&&(C.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ve&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ue]),je===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),ve){let Q=i.get(E[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,V,re,0,0,V,re,ee,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Ue=0;Ue<E.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ue]);let je=i.get(E[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Ge(C){return Math.min(s.maxSamples,C.samples)}function ye(C){let E=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ut(C){let E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function Je(C,E){let V=C.colorSpace,re=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===mh||V!==jt&&V!==Pn&&(lt.getTransfer(V)===vt?a===!1?e.has("EXT_sRGB")===!0&&re===ti?(C.format=mh,C.minFilter=Tn,C.generateMipmaps=!1):E=Ja.sRGBToLinear(E):(re!==ti||ee!==ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=$,this.setTextureCube=Z,this.rebindTextures=at,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Mn,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ye}function Xb(n,e,t){let i=t.isWebGL2;function s(r,o=Pn){let a,l=lt.getTransfer(o);if(r===ls)return n.UNSIGNED_BYTE;if(r===Dp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Up)return n.UNSIGNED_SHORT_5_5_5_1;if(r===wx)return n.BYTE;if(r===Tx)return n.SHORT;if(r===ru)return n.UNSIGNED_SHORT;if(r===Fp)return n.INT;if(r===ss)return n.UNSIGNED_INT;if(r===ki)return n.FLOAT;if(r===Ln)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ax)return n.ALPHA;if(r===ti)return n.RGBA;if(r===Rx)return n.LUMINANCE;if(r===Cx)return n.LUMINANCE_ALPHA;if(r===Bs)return n.DEPTH_COMPONENT;if(r===Er)return n.DEPTH_STENCIL;if(r===mh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Px)return n.RED;if(r===Np)return n.RED_INTEGER;if(r===Lx)return n.RG;if(r===zp)return n.RG_INTEGER;if(r===Op)return n.RGBA_INTEGER;if(r===Pc||r===Lc||r===Ic||r===Fc)if(l===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Pc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Pc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ic)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Jd||r===jd||r===Qd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Kd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ef||r===tf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ef)return l===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===tf)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nf||r===sf||r===rf||r===of||r===af||r===lf||r===cf||r===hf||r===uf||r===df||r===ff||r===pf||r===mf||r===gf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===nf)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sf)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rf)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===of)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===af)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lf)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cf)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hf)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===uf)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===df)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ff)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pf)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mf)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gf)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dc||r===xf||r===vf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Dc)return l===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ix||r===_f||r===yf||r===Mf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Dc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===_f)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ks?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Ah=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ft=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},qb={type:"move"},To=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Rh=class extends hs{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=t.getContextAttributes(),p=null,m=null,v=[],_=[],M=new ie,w=null,S=new Jt;S.layers.enable(1),S.viewport=new _t;let R=new Jt;R.layers.enable(2),R.viewport=new _t;let F=[S,R],b=new Ah;b.layers.enable(1),b.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=v[Y];return j===void 0&&(j=new To,v[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=v[Y];return j===void 0&&(j=new To,v[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=v[Y];return j===void 0&&(j=new To,v[Y]=j),j.getHandSpace()};function B(Y){let j=_.indexOf(Y.inputSource);if(j===-1)return;let me=v[j];me!==void 0&&(me.update(Y.inputSource,Y.frame,c||o),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",L);for(let Y=0;Y<v.length;Y++){let j=_[Y];j!==null&&(_[Y]=null,v[Y].disconnect(j))}T=null,U=null,e.setRenderTarget(p),f=null,d=null,u=null,s=null,m=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",O),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new un(f.framebufferWidth,f.framebufferHeight,{format:ti,type:ls,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let j=null,me=null,Ee=null;x.depth&&(Ee=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=x.stencil?Er:Bs,me=x.stencil?ks:ss);let Se={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new un(d.textureWidth,d.textureHeight,{format:ti,type:ls,depthTexture:new sl(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let We=e.properties.get(m);We.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(Y){for(let j=0;j<Y.removed.length;j++){let me=Y.removed[j],Ee=_.indexOf(me);Ee>=0&&(_[Ee]=null,v[Ee].disconnect(me))}for(let j=0;j<Y.added.length;j++){let me=Y.added[j],Ee=_.indexOf(me);if(Ee===-1){for(let We=0;We<v.length;We++)if(We>=_.length){_.push(me),Ee=We;break}else if(_[We]===null){_[We]=me,Ee=We;break}if(Ee===-1)break}let Se=v[Ee];Se&&Se.connect(me)}}let N=new P,q=new P;function K(Y,j,me){N.setFromMatrixPosition(j.matrixWorld),q.setFromMatrixPosition(me.matrixWorld);let Ee=N.distanceTo(q),Se=j.projectionMatrix.elements,We=me.projectionMatrix.elements,Ye=Se[14]/(Se[10]-1),ze=Se[14]/(Se[10]+1),at=(Se[9]+1)/Se[5],H=(Se[9]-1)/Se[5],Mn=(Se[8]-1)/Se[0],Pe=(We[8]+1)/We[0],Ge=Ye*Mn,ye=Ye*Pe,Ut=Ee/(-Mn+Pe),Je=Ut*-Mn;j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Je),Y.translateZ(Ut),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let C=Ye+Ut,E=ze+Ut,V=Ge-Je,re=ye+(Ee-Je),ee=at*ze/E*C,oe=H*ze/E*C;Y.projectionMatrix.makePerspective(V,re,ee,oe,C,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function $(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;b.near=R.near=S.near=Y.near,b.far=R.far=S.far=Y.far,(T!==b.near||U!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,U=b.far);let j=Y.parent,me=b.cameras;$(b,j);for(let Ee=0;Ee<me.length;Ee++)$(me[Ee],j);me.length===2?K(b,S,R):b.projectionMatrix.copy(S.projectionMatrix),Z(Y,b,j)};function Z(Y,j,me){me===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Tr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)};let te=null;function ae(Y,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let me=h.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let Ee=!1;me.length!==b.cameras.length&&(b.cameras.length=0,Ee=!0);for(let Se=0;Se<me.length;Se++){let We=me[Se],Ye=null;if(f!==null)Ye=f.getViewport(We);else{let at=u.getViewSubImage(d,We);Ye=at.viewport,Se===0&&(e.setRenderTargetTextures(m,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(m))}let ze=F[Se];ze===void 0&&(ze=new Jt,ze.layers.enable(Se),ze.viewport=new _t,F[Se]=ze),ze.matrix.fromArray(We.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(We.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Se===0&&(b.matrix.copy(ze.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ee===!0&&b.cameras.push(ze)}}for(let me=0;me<v.length;me++){let Ee=_[me],Se=v[me];Ee!==null&&Se!==void 0&&Se.update(Ee,j,c||o)}te&&te(Y,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let xe=new Yp;xe.setAnimationLoop(ae),this.setAnimationLoop=function(Y){te=Y},this.dispose=function(){}}};function Yb(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,qp(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,_,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Xt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Xt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*_,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Zb(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){let M=_.program;i.uniformBlockBinding(v,M)}function c(v,_){let M=s[v.id];M===void 0&&(g(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",p));let w=_.program;i.updateUBOMapping(v,w);let S=e.render.frame;r[v.id]!==S&&(d(v),r[v.id]=S)}function h(v){let _=u();v.__bindingPointIndex=_;let M=n.createBuffer(),w=v.__size,S=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,w,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=s[v.id],M=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let S=0,R=M.length;S<R;S++){let F=Array.isArray(M[S])?M[S]:[M[S]];for(let b=0,T=F.length;b<T;b++){let U=F[b];if(f(U,S,b,w)===!0){let B=U.__offset,O=Array.isArray(U.value)?U.value:[U.value],L=0;for(let N=0;N<O.length;N++){let q=O[N],K=x(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,B+L,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,_,M,w){let S=v.value,R=_+"_"+M;if(w[R]===void 0)return typeof S=="number"||typeof S=="boolean"?w[R]=S:w[R]=S.clone(),!0;{let F=w[R];if(typeof S=="number"||typeof S=="boolean"){if(F!==S)return w[R]=S,!0}else if(F.equals(S)===!1)return F.copy(S),!0}return!1}function g(v){let _=v.uniforms,M=0,w=16;for(let R=0,F=_.length;R<F;R++){let b=Array.isArray(_[R])?_[R]:[_[R]];for(let T=0,U=b.length;T<U;T++){let B=b[T],O=Array.isArray(B.value)?B.value:[B.value];for(let L=0,N=O.length;L<N;L++){let q=O[L],K=x(q),$=M%w;$!==0&&w-$<K.boundary&&(M+=w-$),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=K.storage}}}let S=M%w;return S>0&&(M+=w-S),v.__size=M,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){let _=v.target;_.removeEventListener("dispose",p);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var No=class{constructor(e={}){let{canvas:t=sv(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=as,this.toneMappingExposure=1;let _=this,M=!1,w=0,S=0,R=null,F=-1,b=null,T=new _t,U=new _t,B=null,O=new ne(0),L=0,N=t.width,q=t.height,K=1,$=null,Z=null,te=new _t(0,0,N,q),ae=new _t(0,0,N,q),xe=!1,Y=new Uo,j=!1,me=!1,Ee=null,Se=new Ne,We=new ie,Ye=new P,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function at(){return R===null?K:1}let H=i;function Mn(A,z){for(let W=0;W<A.length;W++){let X=A[W],G=t.getContext(X,z);if(G!==null)return G}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$h}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",de,!1),H===null){let z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&z.shift(),H=Mn(z,A),H===null)throw Mn(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Pe,Ge,ye,Ut,Je,C,E,V,re,ee,oe,Me,pe,ve,Ue,je,Q,gt,it,Be,Ae,_e,Ze,mt;function Ot(){Pe=new fM(H),Ge=new aM(H,Pe,e),Pe.init(Ge),_e=new Xb(H,Pe,Ge),ye=new Vb(H,Pe,Ge),Ut=new gM(H),Je=new Lb,C=new Wb(H,Pe,ye,Je,Ge,_e,Ut),E=new cM(_),V=new dM(_),re=new Ev(H,Ge),Ze=new rM(H,Pe,re,Ge),ee=new pM(H,re,Ut,Ze),oe=new yM(H,ee,re,Ut),it=new _M(H,Ge,C),je=new lM(Je),Me=new Pb(_,E,V,Pe,Ge,Ze,je),pe=new Yb(_,Je),ve=new Fb,Ue=new kb(Pe,Ge),gt=new sM(_,E,V,ye,oe,d,l),Q=new Gb(_,oe,Ge),mt=new Zb(H,Ut,Ge,ye),Be=new oM(H,Pe,Ut,Ge),Ae=new mM(H,Pe,Ut,Ge),Ut.programs=Me.programs,_.capabilities=Ge,_.extensions=Pe,_.properties=Je,_.renderLists=ve,_.shadowMap=Q,_.state=ye,_.info=Ut}Ot();let et=new Rh(_,H);this.xr=et,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=Pe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Pe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(N,q,!1))},this.getSize=function(A){return A.set(N,q)},this.setSize=function(A,z,W=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,q=z,t.width=Math.floor(A*K),t.height=Math.floor(z*K),W===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(N*K,q*K).floor()},this.setDrawingBufferSize=function(A,z,W){N=A,q=z,K=W,t.width=Math.floor(A*W),t.height=Math.floor(z*W),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,z,W,X){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,z,W,X),ye.viewport(T.copy(te).multiplyScalar(K).floor())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,z,W,X){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,z,W,X),ye.scissor(U.copy(ae).multiplyScalar(K).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(A){ye.setScissorTest(xe=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(A=!0,z=!0,W=!0){let X=0;if(A){let G=!1;if(R!==null){let ge=R.texture.format;G=ge===Op||ge===zp||ge===Np}if(G){let ge=R.texture.type,be=ge===ls||ge===ss||ge===ru||ge===ks||ge===Dp||ge===Up,Fe=gt.getClearColor(),ke=gt.getClearAlpha(),Qe=Fe.r,Ve=Fe.g,Xe=Fe.b;be?(f[0]=Qe,f[1]=Ve,f[2]=Xe,f[3]=ke,H.clearBufferuiv(H.COLOR,0,f)):(g[0]=Qe,g[1]=Ve,g[2]=Xe,g[3]=ke,H.clearBufferiv(H.COLOR,0,g))}else X|=H.COLOR_BUFFER_BIT}z&&(X|=H.DEPTH_BUFFER_BIT),W&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ve.dispose(),Ue.dispose(),Je.dispose(),E.dispose(),V.dispose(),oe.dispose(),Ze.dispose(),mt.dispose(),Me.dispose(),et.dispose(),et.removeEventListener("sessionstart",bn),et.removeEventListener("sessionend",At),Ee&&(Ee.dispose(),Ee=null),Sn.stop()};function le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=Ut.autoReset,z=Q.enabled,W=Q.autoUpdate,X=Q.needsUpdate,G=Q.type;Ot(),Ut.autoReset=A,Q.enabled=z,Q.autoUpdate=W,Q.needsUpdate=X,Q.type=G}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){let z=A.target;z.removeEventListener("dispose",fe),Oe(z)}function Oe(A){Le(A),Je.remove(A)}function Le(A){let z=Je.get(A).programs;z!==void 0&&(z.forEach(function(W){Me.releaseProgram(W)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,W,X,G,ge){z===null&&(z=ze);let be=G.isMesh&&G.matrixWorld.determinant()<0,Fe=Zg(A,z,W,X,G);ye.setMaterial(X,be);let ke=W.index,Qe=1;if(X.wireframe===!0){if(ke=ee.getWireframeAttribute(W),ke===void 0)return;Qe=2}let Ve=W.drawRange,Xe=W.attributes.position,Ht=Ve.start*Qe,Hn=(Ve.start+Ve.count)*Qe;ge!==null&&(Ht=Math.max(Ht,ge.start*Qe),Hn=Math.min(Hn,(ge.start+ge.count)*Qe)),ke!==null?(Ht=Math.max(Ht,0),Hn=Math.min(Hn,ke.count)):Xe!=null&&(Ht=Math.max(Ht,0),Hn=Math.min(Hn,Xe.count));let rn=Hn-Ht;if(rn<0||rn===1/0)return;Ze.setup(G,X,Fe,W,ke);let Pi,Nt=Be;if(ke!==null&&(Pi=re.get(ke),Nt=Ae,Nt.setIndex(Pi)),G.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*at()),Nt.setMode(H.LINES)):Nt.setMode(H.TRIANGLES);else if(G.isLine){let tt=X.linewidth;tt===void 0&&(tt=1),ye.setLineWidth(tt*at()),G.isLineSegments?Nt.setMode(H.LINES):G.isLineLoop?Nt.setMode(H.LINE_LOOP):Nt.setMode(H.LINE_STRIP)}else G.isPoints?Nt.setMode(H.POINTS):G.isSprite&&Nt.setMode(H.TRIANGLES);if(G.isBatchedMesh)Nt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Nt.renderInstances(Ht,rn,G.count);else if(W.isInstancedBufferGeometry){let tt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Tc=Math.min(W.instanceCount,tt);Nt.renderInstances(Ht,rn,Tc)}else Nt.render(Ht,rn)};function wt(A,z,W){A.transparent===!0&&A.side===yt&&A.forceSinglePass===!1?(A.side=Xt,A.needsUpdate=!0,pa(A,z,W),A.side=Si,A.needsUpdate=!0,pa(A,z,W),A.side=yt):pa(A,z,W)}this.compile=function(A,z,W=null){W===null&&(W=A),p=Ue.get(W),p.init(),v.push(p),W.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==W&&A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(_._useLegacyLights);let X=new Set;return A.traverse(function(G){let ge=G.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){let Fe=ge[be];wt(Fe,W,G),X.add(Fe)}else wt(ge,W,G),X.add(ge)}),v.pop(),p=null,X},this.compileAsync=function(A,z,W=null){let X=this.compile(A,z,W);return new Promise(G=>{function ge(){if(X.forEach(function(be){Je.get(be).currentProgram.isReady()&&X.delete(be)}),X.size===0){G(A);return}setTimeout(ge,10)}Pe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Tt=null;function sn(A){Tt&&Tt(A)}function bn(){Sn.stop()}function At(){Sn.start()}let Sn=new Yp;Sn.setAnimationLoop(sn),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(A){Tt=A,et.setAnimationLoop(A),A===null?Sn.stop():Sn.start()},et.addEventListener("sessionstart",bn),et.addEventListener("sessionend",At),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(z),z=et.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,z,R),p=Ue.get(A,v.length),p.init(),v.push(p),Se.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(Se),me=this.localClippingEnabled,j=je.init(this.clippingPlanes,me),x=ve.get(A,m.length),x.init(),m.push(x),_i(A,z,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort($,Z),this.info.render.frame++,j===!0&&je.beginShadows();let W=p.state.shadowsArray;if(Q.render(W,A,z),j===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),gt.render(x,A),p.setupLights(_._useLegacyLights),z.isArrayCamera){let X=z.cameras;for(let G=0,ge=X.length;G<ge;G++){let be=X[G];Od(x,A,be,be.viewport)}}else Od(x,A,z);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(_,A,z),Ze.resetDefaultState(),F=-1,b=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function _i(A,z,W,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){X&&Ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Se);let be=oe.update(A),Fe=A.material;Fe.visible&&x.push(A,be,Fe,W,Ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){let be=oe.update(A),Fe=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ye.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ye.copy(be.boundingSphere.center)),Ye.applyMatrix4(A.matrixWorld).applyMatrix4(Se)),Array.isArray(Fe)){let ke=be.groups;for(let Qe=0,Ve=ke.length;Qe<Ve;Qe++){let Xe=ke[Qe],Ht=Fe[Xe.materialIndex];Ht&&Ht.visible&&x.push(A,be,Ht,W,Ye.z,Xe)}}else Fe.visible&&x.push(A,be,Fe,W,Ye.z,null)}}let ge=A.children;for(let be=0,Fe=ge.length;be<Fe;be++)_i(ge[be],z,W,X)}function Od(A,z,W,X){let G=A.opaque,ge=A.transmissive,be=A.transparent;p.setupLightsView(W),j===!0&&je.setGlobalState(_.clippingPlanes,W),ge.length>0&&Yg(G,ge,z,W),X&&ye.viewport(T.copy(X)),G.length>0&&fa(G,z,W),ge.length>0&&fa(ge,z,W),be.length>0&&fa(be,z,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Yg(A,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let ge=Ge.isWebGL2;Ee===null&&(Ee=new un(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?Ln:ls,minFilter:cs,samples:ge?4:0})),_.getDrawingBufferSize(We),ge?Ee.setSize(We.x,We.y):Ee.setSize(Ka(We.x),Ka(We.y));let be=_.getRenderTarget();_.setRenderTarget(Ee),_.getClearColor(O),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let Fe=_.toneMapping;_.toneMapping=as,fa(A,W,X),C.updateMultisampleRenderTarget(Ee),C.updateRenderTargetMipmap(Ee);let ke=!1;for(let Qe=0,Ve=z.length;Qe<Ve;Qe++){let Xe=z[Qe],Ht=Xe.object,Hn=Xe.geometry,rn=Xe.material,Pi=Xe.group;if(rn.side===yt&&Ht.layers.test(X.layers)){let Nt=rn.side;rn.side=Xt,rn.needsUpdate=!0,kd(Ht,W,X,Hn,rn,Pi),rn.side=Nt,rn.needsUpdate=!0,ke=!0}}ke===!0&&(C.updateMultisampleRenderTarget(Ee),C.updateRenderTargetMipmap(Ee)),_.setRenderTarget(be),_.setClearColor(O,L),_.toneMapping=Fe}function fa(A,z,W){let X=z.isScene===!0?z.overrideMaterial:null;for(let G=0,ge=A.length;G<ge;G++){let be=A[G],Fe=be.object,ke=be.geometry,Qe=X===null?be.material:X,Ve=be.group;Fe.layers.test(W.layers)&&kd(Fe,z,W,ke,Qe,Ve)}}function kd(A,z,W,X,G,ge){A.onBeforeRender(_,z,W,X,G,ge),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(_,z,W,X,A,ge),G.transparent===!0&&G.side===yt&&G.forceSinglePass===!1?(G.side=Xt,G.needsUpdate=!0,_.renderBufferDirect(W,z,X,G,A,ge),G.side=Si,G.needsUpdate=!0,_.renderBufferDirect(W,z,X,G,A,ge),G.side=yt):_.renderBufferDirect(W,z,X,G,A,ge),A.onAfterRender(_,z,W,X,G,ge)}function pa(A,z,W){z.isScene!==!0&&(z=ze);let X=Je.get(A),G=p.state.lights,ge=p.state.shadowsArray,be=G.state.version,Fe=Me.getParameters(A,G.state,ge,z,W),ke=Me.getProgramCacheKey(Fe),Qe=X.programs;X.environment=A.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(A.isMeshStandardMaterial?V:E).get(A.envMap||X.environment),Qe===void 0&&(A.addEventListener("dispose",fe),Qe=new Map,X.programs=Qe);let Ve=Qe.get(ke);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===be)return Hd(A,Fe),Ve}else Fe.uniforms=Me.getUniforms(A),A.onBuild(W,Fe,_),A.onBeforeCompile(Fe,_),Ve=Me.acquireProgram(Fe,ke),Qe.set(ke,Ve),X.uniforms=Fe.uniforms;let Xe=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=je.uniform),Hd(A,Fe),X.needsLights=Kg(A),X.lightsStateVersion=be,X.needsLights&&(Xe.ambientLightColor.value=G.state.ambient,Xe.lightProbe.value=G.state.probe,Xe.directionalLights.value=G.state.directional,Xe.directionalLightShadows.value=G.state.directionalShadow,Xe.spotLights.value=G.state.spot,Xe.spotLightShadows.value=G.state.spotShadow,Xe.rectAreaLights.value=G.state.rectArea,Xe.ltc_1.value=G.state.rectAreaLTC1,Xe.ltc_2.value=G.state.rectAreaLTC2,Xe.pointLights.value=G.state.point,Xe.pointLightShadows.value=G.state.pointShadow,Xe.hemisphereLights.value=G.state.hemi,Xe.directionalShadowMap.value=G.state.directionalShadowMap,Xe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Xe.spotShadowMap.value=G.state.spotShadowMap,Xe.spotLightMatrix.value=G.state.spotLightMatrix,Xe.spotLightMap.value=G.state.spotLightMap,Xe.pointShadowMap.value=G.state.pointShadowMap,Xe.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function Bd(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Mr.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Hd(A,z){let W=Je.get(A);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Zg(A,z,W,X,G){z.isScene!==!0&&(z=ze),C.resetTextureUnits();let ge=z.fog,be=X.isMeshStandardMaterial?z.environment:null,Fe=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:jt,ke=(X.isMeshStandardMaterial?V:E).get(X.envMap||be),Qe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Xe=!!W.morphAttributes.position,Ht=!!W.morphAttributes.normal,Hn=!!W.morphAttributes.color,rn=as;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(rn=_.toneMapping);let Pi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Nt=Pi!==void 0?Pi.length:0,tt=Je.get(X),Tc=p.state.lights;if(j===!0&&(me===!0||A!==b)){let Qn=A===b&&X.id===F;je.setState(X,A,Qn)}let kt=!1;X.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Tc.state.version||tt.outputColorSpace!==Fe||G.isBatchedMesh&&tt.batching===!1||!G.isBatchedMesh&&tt.batching===!0||G.isInstancedMesh&&tt.instancing===!1||!G.isInstancedMesh&&tt.instancing===!0||G.isSkinnedMesh&&tt.skinning===!1||!G.isSkinnedMesh&&tt.skinning===!0||G.isInstancedMesh&&tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&tt.instancingColor===!1&&G.instanceColor!==null||tt.envMap!==ke||X.fog===!0&&tt.fog!==ge||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==je.numPlanes||tt.numIntersection!==je.numIntersection)||tt.vertexAlphas!==Qe||tt.vertexTangents!==Ve||tt.morphTargets!==Xe||tt.morphNormals!==Ht||tt.morphColors!==Hn||tt.toneMapping!==rn||Ge.isWebGL2===!0&&tt.morphTargetsCount!==Nt)&&(kt=!0):(kt=!0,tt.__version=X.version);let Ps=tt.currentProgram;kt===!0&&(Ps=pa(X,z,G));let Gd=!1,po=!1,Ac=!1,gn=Ps.getUniforms(),Ls=tt.uniforms;if(ye.useProgram(Ps.program)&&(Gd=!0,po=!0,Ac=!0),X.id!==F&&(F=X.id,po=!0),Gd||b!==A){gn.setValue(H,"projectionMatrix",A.projectionMatrix),gn.setValue(H,"viewMatrix",A.matrixWorldInverse);let Qn=gn.map.cameraPosition;Qn!==void 0&&Qn.setValue(H,Ye.setFromMatrixPosition(A.matrixWorld)),Ge.logarithmicDepthBuffer&&gn.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&gn.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,po=!0,Ac=!0)}if(G.isSkinnedMesh){gn.setOptional(H,G,"bindMatrix"),gn.setOptional(H,G,"bindMatrixInverse");let Qn=G.skeleton;Qn&&(Ge.floatVertexTextures?(Qn.boneTexture===null&&Qn.computeBoneTexture(),gn.setValue(H,"boneTexture",Qn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(gn.setOptional(H,G,"batchingTexture"),gn.setValue(H,"batchingTexture",G._matricesTexture,C));let Rc=W.morphAttributes;if((Rc.position!==void 0||Rc.normal!==void 0||Rc.color!==void 0&&Ge.isWebGL2===!0)&&it.update(G,W,Ps),(po||tt.receiveShadow!==G.receiveShadow)&&(tt.receiveShadow=G.receiveShadow,gn.setValue(H,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ls.envMap.value=ke,Ls.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),po&&(gn.setValue(H,"toneMappingExposure",_.toneMappingExposure),tt.needsLights&&$g(Ls,Ac),ge&&X.fog===!0&&pe.refreshFogUniforms(Ls,ge),pe.refreshMaterialUniforms(Ls,X,K,q,Ee),Mr.upload(H,Bd(tt),Ls,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Mr.upload(H,Bd(tt),Ls,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&gn.setValue(H,"center",G.center),gn.setValue(H,"modelViewMatrix",G.modelViewMatrix),gn.setValue(H,"normalMatrix",G.normalMatrix),gn.setValue(H,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Qn=X.uniformsGroups;for(let Cc=0,Jg=Qn.length;Cc<Jg;Cc++)if(Ge.isWebGL2){let Vd=Qn[Cc];mt.update(Vd,Ps),mt.bind(Vd,Ps)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ps}function $g(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Kg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,z,W){Je.get(A.texture).__webglTexture=z,Je.get(A.depthTexture).__webglTexture=W;let X=Je.get(A);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){let W=Je.get(A);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,W=0){R=A,w=z,S=W;let X=!0,G=null,ge=!1,be=!1;if(A){let ke=Je.get(A);ke.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):ke.__webglFramebuffer===void 0?C.setupRenderTarget(A):ke.__hasExternalTextures&&C.rebindTextures(A,Je.get(A.texture).__webglTexture,Je.get(A.depthTexture).__webglTexture);let Qe=A.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(be=!0);let Ve=Je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?G=Ve[z][W]:G=Ve[z],ge=!0):Ge.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?G=Je.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?G=Ve[W]:G=Ve,T.copy(A.viewport),U.copy(A.scissor),B=A.scissorTest}else T.copy(te).multiplyScalar(K).floor(),U.copy(ae).multiplyScalar(K).floor(),B=xe;if(ye.bindFramebuffer(H.FRAMEBUFFER,G)&&Ge.drawBuffers&&X&&ye.drawBuffers(A,G),ye.viewport(T),ye.scissor(U),ye.setScissorTest(B),ge){let ke=Je.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,ke.__webglTexture,W)}else if(be){let ke=Je.get(A.texture),Qe=z||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.__webglTexture,W||0,Qe)}F=-1},this.readRenderTargetPixels=function(A,z,W,X,G,ge,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe){ye.bindFramebuffer(H.FRAMEBUFFER,Fe);try{let ke=A.texture,Qe=ke.format,Ve=ke.type;if(Qe!==ti&&_e.convert(Qe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xe=Ve===Ln&&(Pe.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Ve!==ls&&_e.convert(Ve)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===ki&&(Ge.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&W>=0&&W<=A.height-G&&H.readPixels(z,W,X,G,_e.convert(Qe),_e.convert(Ve),ge)}finally{let ke=R!==null?Je.get(R).__webglFramebuffer:null;ye.bindFramebuffer(H.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(A,z,W=0){let X=Math.pow(2,-W),G=Math.floor(z.image.width*X),ge=Math.floor(z.image.height*X);C.setTexture2D(z,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,A.x,A.y,G,ge),ye.unbindTexture()},this.copyTextureToTexture=function(A,z,W,X=0){let G=z.image.width,ge=z.image.height,be=_e.convert(W.format),Fe=_e.convert(W.type);C.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),z.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,A.x,A.y,G,ge,be,Fe,z.image.data):z.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,be,z.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,A.x,A.y,be,Fe,z.image),X===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(A,z,W,X,G=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ge=A.max.x-A.min.x+1,be=A.max.y-A.min.y+1,Fe=A.max.z-A.min.z+1,ke=_e.convert(X.format),Qe=_e.convert(X.type),Ve;if(X.isData3DTexture)C.setTexture3D(X,0),Ve=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)C.setTexture2DArray(X,0),Ve=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);let Xe=H.getParameter(H.UNPACK_ROW_LENGTH),Ht=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Hn=H.getParameter(H.UNPACK_SKIP_PIXELS),rn=H.getParameter(H.UNPACK_SKIP_ROWS),Pi=H.getParameter(H.UNPACK_SKIP_IMAGES),Nt=W.isCompressedTexture?W.mipmaps[G]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Nt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Nt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,A.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,A.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,A.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(Ve,G,z.x,z.y,z.z,ge,be,Fe,ke,Qe,Nt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ve,G,z.x,z.y,z.z,ge,be,Fe,ke,Nt.data)):H.texSubImage3D(Ve,G,z.x,z.y,z.z,ge,be,Fe,ke,Qe,Nt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Xe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ht),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Hn),H.pixelStorei(H.UNPACK_SKIP_ROWS,rn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Pi),G===0&&X.generateMipmaps&&H.generateMipmap(Ve),ye.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),ye.unbindTexture()},this.resetState=function(){w=0,S=0,R=null,ye.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===au?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Il?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?Hs:Hp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hs?ut:jt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ch=class extends No{};Ch.prototype.isWebGL1Renderer=!0;var rl=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ne(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Lr=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},zo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},En=new P,Oo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var up=new P,dp=new _t,fp=new _t,$b=new P,pp=new Ne,za=new P,sh=new Xn,mp=new Ne,rh=new Ar,Gi=class extends se{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$d,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new In),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,za),this.boundingBox.expandByPoint(za)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,za),this.boundingSphere.expandByPoint(za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sh.copy(this.boundingSphere),sh.applyMatrix4(s),e.ray.intersectsSphere(sh)!==!1&&(mp.copy(s).invert(),rh.copy(e.ray).applyMatrix4(mp),!(this.boundingBox!==null&&rh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$d?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ex?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;dp.fromBufferAttribute(s.attributes.skinIndex,e),fp.fromBufferAttribute(s.attributes.skinWeight,e),up.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=fp.getComponent(r);if(o!==0){let a=dp.getComponent(r);pp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector($b.copy(up).applyMatrix4(pp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Vs=class extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ph=class extends hn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=$t,h=$t,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gp=new Ne,Kb=new Ne,Ir=class n{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ne;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Kb;gp.multiplyMatrices(a,t[r]),gp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ph(t,e,e,ti,ki);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Vs),this.bones.push(o),this.boneInverses.push(new Ne().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},mi=class extends dt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new Ne,xp=new Ne,Oa=[],vp=new In,Jb=new Ne,_o=new se,yo=new Xn,Vi=class extends se{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mi(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Jb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gr),vp.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(vp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gr),yo.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(i),e.ray.intersectsSphere(yo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gr),xp.multiplyMatrices(i,gr),_o.matrixWorld=xp,_o.raycast(e,Oa);for(let o=0,a=Oa.length;o<a;o++){let l=Oa[o];l.instanceId=r,l.object=this,t.push(l)}Oa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mi(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ko=class extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_p=new P,yp=new P,Mp=new Ne,oh=new Ar,ka=new Xn,Fr=class extends Mt{constructor(e=new Ct,t=new ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)_p.fromBufferAttribute(t,s-1),yp.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_p.distanceTo(yp);e.setAttribute("lineDistance",new He(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;Mp.copy(s).invert(),oh.copy(e.ray).applyMatrix4(Mp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let m=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let _=m,M=v-1;_<M;_+=f){let w=g.getX(_),S=g.getX(_+1);if(c.fromBufferAttribute(p,w),h.fromBufferAttribute(p,S),oh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let _=m,M=v-1;_<M;_+=f){if(c.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),oh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},bp=new P,Sp=new P,ol=class extends Fr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)bp.fromBufferAttribute(t,s),Sp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bp.distanceTo(Sp);e.setAttribute("lineDistance",new He(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},al=class extends Fr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Bo=class extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ep=new Ne,Lh=new Ar,Ba=new Xn,Ha=new P,ll=class extends Mt{constructor(e=new Ct,t=new Bo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,e.ray.intersectsSphere(Ba)===!1)return;Ep.copy(s).invert(),Lh.copy(e.ray).applyMatrix4(Ep);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let p=c.getX(g);Ha.fromBufferAttribute(u,p),wp(Ha,p,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Ha.fromBufferAttribute(u,g),wp(Ha,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wp(n,e,t,i,s,r,o){let a=Lh.distanceSqToPoint(n);if(a<t){let l=new P;Lh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Dn=class extends hn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ie:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new P,s=[],r=[],o=[],a=new P,l=new Ne;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Kt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ho=class extends ni{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new ie,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ih=class extends Ho{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Ga=new P,ah=new hu,lh=new hu,ch=new hu,Go=class extends ni{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ga.subVectors(s[0],s[1]).add(s[0]),c=Ga);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ga.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ga),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),ah.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,p),lh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,p),ch.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(ah.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),lh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ch.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(ah.calc(l),lh.calc(l),ch.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function jb(n,e){let t=1-n;return t*t*e}function Qb(n,e){return 2*(1-n)*n*e}function e1(n,e){return n*n*e}function Ao(n,e,t,i){return jb(n,e)+Qb(n,t)+e1(n,i)}function t1(n,e){let t=1-n;return t*t*t*e}function n1(n,e){let t=1-n;return 3*t*t*n*e}function i1(n,e){return 3*(1-n)*n*n*e}function s1(n,e){return n*n*n*e}function Ro(n,e,t,i,s){return t1(n,e)+n1(n,t)+i1(n,i)+s1(n,s)}var cl=class extends ni{constructor(e=new ie,t=new ie,i=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ie){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ro(e,s.x,r.x,o.x,a.x),Ro(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fh=class extends ni{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ro(e,s.x,r.x,o.x,a.x),Ro(e,s.y,r.y,o.y,a.y),Ro(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hl=class extends ni{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dh=class extends ni{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ul=class extends ni{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ao(e,s.x,r.x,o.x),Ao(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dl=class extends ni{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ao(e,s.x,r.x,o.x),Ao(e,s.y,r.y,o.y),Ao(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fl=class extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Tp(a,l.x,c.x,h.x,u.x),Tp(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},Uh=Object.freeze({__proto__:null,ArcCurve:Ih,CatmullRomCurve3:Go,CubicBezierCurve:cl,CubicBezierCurve3:Fh,EllipseCurve:Ho,LineCurve:hl,LineCurve3:Dh,QuadraticBezierCurve:ul,QuadraticBezierCurve3:dl,SplineCurve:fl}),Nh=class extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Uh[s.type]().fromJSON(s))}return this}},zh=class extends Nh{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new hl(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ul(this.currentPoint.clone(),new ie(e,t),new ie(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new cl(this.currentPoint.clone(),new ie(e,t),new ie(i,s),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new fl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Ho(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ws=class n extends Ct{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Kt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new P,d=new ie,f=new P,g=new P,x=new P,p=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=t;v++){let _=i+v*h*s,M=Math.sin(_),w=Math.cos(_);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*M,u.y=e[S].y,u.z=e[S].x*w,o.push(u.x,u.y,u.z),d.x=v/t,d.y=S/(e.length-1),a.push(d.x,d.y);let R=l[3*S+0]*M,F=l[3*S+1],b=l[3*S+0]*w;c.push(R,F,b)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let M=_+v*e.length,w=M,S=M+e.length,R=M+e.length+1,F=M+1;r.push(w,S,F),r.push(R,F,S)}this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("uv",new He(a,2)),this.setAttribute("normal",new He(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Dr=class n extends Ws{constructor(e=1,t=1,i=4,s=8){let r=new zh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Un=class n extends Ct{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(a,3)),this.setAttribute("uv",new He(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qt=class n extends Ct{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],p=i/2,m=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(f,2));function v(){let M=new P,w=new P,S=0,R=(t-e)/i;for(let F=0;F<=r;F++){let b=[],T=F/r,U=T*(t-e)+e;for(let B=0;B<=s;B++){let O=B/s,L=O*l+a,N=Math.sin(L),q=Math.cos(L);w.x=U*N,w.y=-T*i+p,w.z=U*q,u.push(w.x,w.y,w.z),M.set(N,R,q).normalize(),d.push(M.x,M.y,M.z),f.push(O,1-T),b.push(g++)}x.push(b)}for(let F=0;F<s;F++)for(let b=0;b<r;b++){let T=x[b][F],U=x[b+1][F],B=x[b+1][F+1],O=x[b][F+1];h.push(T,U,O),h.push(U,B,O),S+=6}c.addGroup(m,S,0),m+=S}function _(M){let w=g,S=new ie,R=new P,F=0,b=M===!0?e:t,T=M===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,p*T,0),d.push(0,T,0),f.push(.5,.5),g++;let U=g;for(let B=0;B<=s;B++){let L=B/s*l+a,N=Math.cos(L),q=Math.sin(L);R.x=b*q,R.y=p*T,R.z=b*N,u.push(R.x,R.y,R.z),d.push(0,T,0),S.x=N*.5+.5,S.y=q*.5*T+.5,f.push(S.x,S.y),g++}for(let B=0;B<s;B++){let O=w+B,L=U+B;M===!0?h.push(L,L+1,O):h.push(L+1,L,O),F+=3}c.addGroup(m,F,M===!0?1:2),m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ur=class n extends qt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pl=class n extends Ct{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new P,M=new P,w=new P;for(let S=0;S<t.length;S+=3)f(t[S+0],_),f(t[S+1],M),f(t[S+2],w),l(_,M,w,v)}function l(v,_,M,w){let S=w+1,R=[];for(let F=0;F<=S;F++){R[F]=[];let b=v.clone().lerp(M,F/S),T=_.clone().lerp(M,F/S),U=S-F;for(let B=0;B<=U;B++)B===0&&F===S?R[F][B]=b:R[F][B]=b.clone().lerp(T,B/U)}for(let F=0;F<S;F++)for(let b=0;b<2*(S-F)-1;b++){let T=Math.floor(b/2);b%2===0?(d(R[F][T+1]),d(R[F+1][T]),d(R[F][T])):(d(R[F][T+1]),d(R[F+1][T+1]),d(R[F+1][T]))}}function c(v){let _=new P;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(v),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){let v=new P;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let M=p(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;o.push(M,1-w)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let _=o[v+0],M=o[v+2],w=o[v+4],S=Math.max(_,M,w),R=Math.min(_,M,w);S>.9&&R<.1&&(_<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,_){let M=v*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function g(){let v=new P,_=new P,M=new P,w=new P,S=new ie,R=new ie,F=new ie;for(let b=0,T=0;b<r.length;b+=9,T+=6){v.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),S.set(o[T+0],o[T+1]),R.set(o[T+2],o[T+3]),F.set(o[T+4],o[T+5]),w.copy(v).add(_).add(M).divideScalar(3);let U=p(w);x(S,T+0,v,U),x(R,T+2,_,U),x(F,T+4,M,U)}}function x(v,_,M,w){w<0&&v.x===1&&(o[_]=v.x-1),M.x===0&&M.z===0&&(o[_]=w/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var ml=class n extends pl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},gl=class n extends pl{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},fs=class n extends Ct{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new P,g=new ie;for(let x=0;x<=s;x++){for(let p=0;p<=i;p++){let m=r+p/i*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let p=x*(i+1);for(let m=0;m<i;m++){let v=m+p,_=v,M=v+i+1,w=v+i+2,S=v+1;a.push(_,M,S),a.push(M,w,S)}}this.setIndex(a),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Gt=class n extends Ct{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,d=new P,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let v=[],_=m/i,M=0;m===0&&o===0?M=.5/t:m===i&&l===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){let S=w/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(S+M,1-_),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){let _=h[m][v+1],M=h[m][v],w=h[m+1][v],S=h[m+1][v+1];(m!==0||o>0)&&f.push(_,M,S),(m!==i-1||l<Math.PI)&&f.push(M,w,S)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Nr=class n extends Ct{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,p=f/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(x,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var xl=class n extends Ct{constructor(e=new dl(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new ie,h=new P,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(f,2));function x(){for(let _=0;_<t;_++)p(_);p(r===!1?t:0),v(),m()}function p(_){h=e.getPointAt(_/t,h);let M=o.normals[_],w=o.binormals[_];for(let S=0;S<=s;S++){let R=S/s*Math.PI*2,F=Math.sin(R),b=-Math.cos(R);l.x=b*M.x+F*w.x,l.y=b*M.y+F*w.y,l.z=b*M.z+F*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=t;_++)for(let M=1;M<=s;M++){let w=(s+1)*(_-1)+(M-1),S=(s+1)*_+(M-1),R=(s+1)*_+M,F=(s+1)*(_-1)+M;g.push(w,S,F),g.push(S,R,F)}}function v(){for(let _=0;_<=t;_++)for(let M=0;M<=s;M++)c.x=_/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Uh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var vl=class extends ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ps=class extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ii=class extends ps{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var _l=class extends Fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Va(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function r1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function o1(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Ap(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Qp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var ms=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oh=class extends ms{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bf,endingEnd:bf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sf:r=e,a=2*t-i;break;case Ef:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Sf:o=e,l=2*i-t;break;case Ef:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*p+(1.5+f)*x+.5*g,M=f*p-f*x;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+v*o[c+w]+_*o[l+w]+M*o[u+w];return r}},kh=class extends ms{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Bh=class extends ms{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},si=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Va(t,this.TimeBufferType),this.values=Va(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Va(e.times,Array),values:Va(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case Uc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&r1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Uc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Gs;var gs=class extends si{};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=wr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends si{};yl.prototype.ValueTypeName="color";var Wi=class extends si{};Wi.prototype.ValueTypeName="number";var Hh=class extends ms{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)dn.slerpFlat(r,0,o,c-a,o,c,l);return r}},wi=class extends si{InterpolantFactoryMethodLinear(e){return new Hh(this.times,this.values,this.getValueSize(),e)}};wi.prototype.ValueTypeName="quaternion";wi.prototype.DefaultInterpolation=Gs;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends si{};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=wr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends si{};Xi.prototype.ValueTypeName="vector";var Ml=class{constructor(e,t=-1,i,s=Fx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=pi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(l1(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(si.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=o1(l);l=Ap(l,1,h),c=Ap(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Wi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,g,x){if(f.length!==0){let p=[],m=[];Qp(f,p,m,g),p.length!==0&&x.push(new u(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let p=[],m=[];for(let v=0;v!==d[g].morphTargets.length;++v){let _=d[g];p.push(_.time),m.push(_.morphTarget===x?1:0)}s.push(new Wi(".morphTargetInfluence["+x+"]",p,m))}l=f.length*o}else{let f=".bones["+t[u].name+"]";i(Xi,f+".position",d,"pos",s),i(wi,f+".quaternion",d,"rot",s),i(Xi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function a1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wi;case"vector":case"vector2":case"vector3":case"vector4":return Xi;case"color":return yl;case"quaternion":return wi;case"bool":case"boolean":return gs;case"string":return xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function l1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=a1(n.type);if(n.times===void 0){let t=[],i=[];Qp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var rs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Gh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},c1=new Gh,qi=class{constructor(e){this.manager=e!==void 0?e:c1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};qi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ni={},Vh=class extends Error{constructor(e,t){super(e),this.response=t}},Vo=class extends qi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=rs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:i,onError:s});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ni[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,x=0,p=new ReadableStream({start(m){v();function v(){u.read().then(({done:_,value:M})=>{if(_)m.close();else{x+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let S=0,R=h.length;S<R;S++){let F=h[S];F.onProgress&&F.onProgress(w)}m.enqueue(M),v()}})}}});return new Response(p)}else throw new Vh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{rs.add(e,c);let h=Ni[e];delete Ni[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ni[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ni[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Wh=class extends qi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=rs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Io("img");function l(){h(),rs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var bl=class extends qi{constructor(e){super(e)}load(e,t,i,s){let r=new hn,o=new Wh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},zr=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Sl=class extends zr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},hh=new Ne,Rp=new P,Cp=new P,Wo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uo,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rp),Cp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cp),t.updateMatrixWorld(),hh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xh=class extends Wo{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Tr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},El=class extends zr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Pp=new Ne,Mo=new P,uh=new P,qh=class extends Wo{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Mo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Mo),uh.copy(i.position),uh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(uh),i.updateMatrixWorld(),s.makeTranslation(-Mo.x,-Mo.y,-Mo.z),Pp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pp)}},wl=class extends zr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Yh=class extends Wo{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Or=class extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var vs=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Tl=class extends Ct{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Al=class extends qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=rs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return rs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),rs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});rs.add(e,l),r.manager.itemStart(e)}};var Rl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Lp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Lp(){return(typeof performance>"u"?Date:performance).now()}var uu="\\[\\]\\.:\\/",h1=new RegExp("["+uu+"]","g"),du="[^"+uu+"]",u1="[^"+uu.replace("\\.","")+"]",d1=/((?:WC+[\/:])*)/.source.replace("WC",du),f1=/(WCOD+)?/.source.replace("WCOD",u1),p1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",du),m1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",du),g1=new RegExp("^"+d1+f1+p1+m1+"$"),x1=["material","materials","bones","map"],Zh=class{constructor(e,t,i){let s=i||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Rt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(h1,"")}static parseTrackName(e){let t=g1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);x1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Zh;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h);var J=n=>document.getElementById(n),Te=Math.PI*2,qe=(n,e,t)=>n<e?e:n>t?t:n,Nn=(n,e,t)=>n+(e-n)*t;var tn=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window&&navigator.maxTouchPoints>0,Yo=Math.random,D=(n=0,e=1)=>n+Yo()*(e-n),Zo=n=>n[Math.floor(Yo()*n.length)];function fu(n,e){let t=n>>>0,i=Yo;Yo=()=>{t=t+1831565813>>>0;let s=t;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};try{return e()}finally{Yo=i}}function Br(n,e){let t=(e-n)%Te;return t>Math.PI&&(t-=Te),t<-Math.PI&&(t+=Te),t}var Hr=n=>{for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},Pt={get(n,e){try{let t=localStorage.getItem("bg_"+n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem("bg_"+n,JSON.stringify(e))}catch{}}},an=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function qn(n,e,t,i,s){return n.v+=((e-n.x)*t-n.v*i)*s,n.x+=n.v*s,n.x}var yn=(n=0)=>({x:n,v:0});var Ul={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},v1=new ds(-1,1,1,-1,0,1),pu=class extends Ct{constructor(){super(),this.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new He([0,2,0,0,2,0],2))}},_1=new pu,ys=class{constructor(e){this._mesh=new se(_1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,v1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Nl=class extends Yn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_s.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ys(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var $o=class extends Yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},zl=class extends Yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ol=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ie);this._width=i.width,this._height=i.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nl(Ul),this.copyPass.material.blending=bi,this.clock=new Rl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}$o!==void 0&&(o instanceof $o?i=!0:o instanceof zl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var kl=class extends Yn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ne}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var em={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Gr=class n extends Yn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,o,{type:Ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new un(r,o,{type:Ln});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new un(r,o,{type:Ln});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=em;this.highPassUniforms=_s.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ul;this.copyUniforms=_s.clone(h.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:_n,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ne,this.oldClearAlpha=1,this.basic=new De,this.fsQuad=new ys(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Gr.BlurDirectionX=new ie(1,0);Gr.BlurDirectionY=new ie(0,1);var tm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Bl=class extends Yn{constructor(){super();let e=tm;this.uniforms=_s.clone(e.uniforms),this.material=new vl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ys(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===eu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===iu&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Xs=J("c"),gu=(()=>{let n=Pt.get("gfx",tn?"low":"medium");return["low","medium","high"].includes(n)?n:"medium"})(),pt=gu==="low",Yi=gu==="high",y1=["roughness","metalness","envMapIntensity","roughnessMap","metalnessMap"];function ct(n={}){if(!pt)return new ps(n);let e=Object.assign({},n);for(let t of y1)delete e[t];return new _l(e)}var zt=new No({canvas:Xs,antialias:!tn,powerPreference:"high-performance",stencil:!1});zt.toneMapping=Xo;zt.toneMappingExposure=1;zt.shadowMap.enabled=!pt;zt.shadowMap.type=Yi?Kh:Cl;var ue=new Lr,M1=new ne("#B9A08A");ue.fog=new rl(M1,48,120);var st=new Jt(55,1,.1,400),im=new P(-.86,.3,.22).normalize(),sm={top:{value:new ne("#27477E")},hor:{value:new ne("#FFB46A")},hor2:{value:new ne("#9C7FB0")},sunDir:{value:im},t:{value:0},disc:{value:new ne("#FFA040")},cloud:{value:new ne("#F6C6A4")}},xu=new ft({side:Xt,depthWrite:!1,fog:!1,uniforms:sm,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 hor; uniform vec3 hor2; uniform vec3 sunDir; uniform float t; uniform vec3 disc; uniform vec3 cloud; varying vec3 vDir;
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
}`}),Wr=new se(new Gt(300,32,16),xu);Wr.renderOrder=-10;Wr.frustumCulled=!1;ue.add(Wr);function rm(n){sm.t.value+=n}function om(){let n=new Pr(zt),e=new Lr;e.add(new se(new Gt(50,32,16),xu));let t=new se(new Un(49,24),new De({color:"#4A6A2E",side:yt}));t.rotation.x=-Math.PI/2,t.position.y=-4,e.add(t);let i=n.fromScene(e,.04,.1,200);n.dispose(),ue.environment=i.texture}function am(){let n=new Do(pt?256:512,{type:Ln}),e=new Fo(.5,400,n),t=new Lr,i=new se(new Gt(100,32,16),xu);t.add(i),e.update(zt,t),ue.background=n.texture,Wr.visible=!1}var lm=new Sl("#AFC2EC","#4E5E2C",.8);ue.add(lm);var zn=new Or("#FFC88C",2.5);pt&&(lm.intensity=1.55,zn.intensity=2.3);zn.castShadow=!0;zn.shadow.bias=-4e-4;zn.shadow.normalBias=.03;ue.add(zn,zn.target);function cm(n,e){let t=zn.shadow.camera,i=Math.hypot(n,e)+3;t.left=-i,t.right=i,t.top=i,t.bottom=-i,t.near=1,t.far=160,t.updateProjectionMatrix(),zn.position.copy(im).multiplyScalar(70),zn.target.position.set(0,0,0)}function ri(n,e,t,i={}){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new Dn(s);return r.colorSpace=i.linear?Pn:ut,i.repeat&&(r.wrapS=r.wrapT=Hi),r.anisotropy=4,r}var he={level:gu,PR:1,post:!1,composer:null,bloom:null,perfN:0,perfSum:0,calm:0,shadows:!pt,fps:0,frames:0,fpsT:0,onShadows:null};function mu(){return Math.min(Yi?2:pt?1.3:1.5,devicePixelRatio||1)}var nm=()=>Math.min(pt?.8:.75,devicePixelRatio||1);function Vr(){let n=innerWidth,e=innerHeight;zt.setSize(n,e,!1),st.aspect=n/e,st.fov=st.aspect<.75?72:st.aspect<1.2?62:55,st.updateProjectionMatrix(),he.composer&&(he.composer.setPixelRatio(he.PR),he.composer.setSize(n,e))}function b1(){if(he.composer)return;let n=zt.getDrawingBufferSize(new ie),e=new un(n.x,n.y,{type:Ln,samples:2});he.composer=new Ol(zt,e),he.composer.addPass(new kl(ue,st)),he.bloom=new Gr(new ie(innerWidth,innerHeight),.35,.5,.92),he.composer.addPass(he.bloom),he.composer.addPass(new Bl)}function hm(n){Pt.set("gfx",n)}function um(){he.PR=Math.min(mu(),pt?1.15:1.25),zt.setPixelRatio(he.PR),ue.fog.near=pt?30:40,ue.fog.far=pt?85:110,st.far=160,st.updateProjectionMatrix();let n=Yi?2048:1024;if(zn.shadow.mapSize.x!==n&&(zn.shadow.mapSize.set(n,n),zn.shadow.map&&(zn.shadow.map.dispose(),zn.shadow.map=null)),Yi)try{b1()}catch{he.composer=null}he.post=Yi&&!!he.composer,he.perfN=he.perfSum=he.calm=0,Vr()}function S1(){he.shadows=!1,zt.shadowMap.enabled=!1,ue.traverse(n=>{if(n.material)for(let e of[].concat(n.material))e.needsUpdate=!0}),he.onShadows&&he.onShadows(!1)}function dm(n,e){if(he.frames++,he.fpsT+=n,he.fpsT>=.5&&(he.fps=Math.round(he.frames/he.fpsT),he.frames=0,he.fpsT=0),!e||n>.5||document.hidden||(he.perfN++,he.perfSum+=n,he.perfN<60))return;let t=he.perfSum/he.perfN;he.perfN=0,he.perfSum=0,t>.0205?(he.calm=0,he.post?(he.post=!1,he.noPost=!0):he.PR>nm()+.01?(he.PR=Math.max(nm(),he.PR*.88),zt.setPixelRatio(he.PR),Vr()):he.shadows&&++he.slow>=2&&S1()):t<.0135&&++he.calm>=3&&(he.calm=0,he.slow=0,he.PR<mu()-.01?(he.PR=Math.min(mu(),he.PR*1.1),zt.setPixelRatio(he.PR),Vr()):!he.post&&he.composer&&Yi&&!he.noPost&&(he.post=!0))}he.slow=0;function vu(){he.post&&he.composer?he.composer.render():zt.render(ue,st)}function Ko(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ct,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=fm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=fm(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function fm(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<n.length;++c)o.set(n[c].array,a),a+=n[c].array.length;let l=new dt(o,t,i);return s!==void 0&&(l.gpuType=s),l}function pm(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,_=a.length;v<_;v++){let M=a[v],w=n.attributes[M];l[M]=new dt(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);let S=n.morphAttributes[M];S&&(c[M]=new dt(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized))}let f=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),p=f*x;for(let v=0;v<r;v++){let _=i?i.getX(v):v,M="";for(let w=0,S=a.length;w<S;w++){let R=a[w],F=n.getAttribute(R),b=F.itemSize;for(let T=0;T<b;T++)M+=`${~~(F[u[T]](_)*x+p)},`}if(M in t)h.push(t[M]);else{for(let w=0,S=a.length;w<S;w++){let R=a[w],F=n.getAttribute(R),b=n.morphAttributes[R],T=F.itemSize,U=l[R],B=c[R];for(let O=0;O<T;O++){let L=u[O],N=d[O];if(U[N](o,F[L](_)),b)for(let q=0,K=b.length;q<K;q++)B[q][N](o,b[q][L](_))}}t[M]=o,h.push(o),o++}}let m=n.clone();for(let v in n.attributes){let _=l[v];if(m.setAttribute(v,new dt(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),v in c)for(let M=0;M<c[v].length;M++){let w=c[v][M];m.morphAttributes[v][M]=new dt(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)}}return m.setIndex(h),m}function _u(n,e){if(e===Bp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===qo||e===Ll){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===qo)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var jo=class extends qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Tu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new ku(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=vs.extractUrlBase(e);o=vs.resolveURL(c,this.path)}else o=vs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Vo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_m){try{o[rt.KHR_BINARY_GLTF]=new Bu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Yu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case rt.KHR_MATERIALS_UNLIT:o[u]=new Eu;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Hu(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[u]=new Gu;break;case rt.KHR_MESH_QUANTIZATION:o[u]=new Vu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function E1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Su=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ne(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],jt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Or(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new wl(h),c.distance=u;break;case"spot":c=new El(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,bs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Eu=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return De}extendParams(e,t,i){let s=[];e.color=new ne(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,ut))}return Promise.all(s)}},wu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Tu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(a,a)}return Promise.all(r)}},Au=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Ru=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ne(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ut)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ne().setRGB(a[0],a[1],a[2],jt),Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Iu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ne().setRGB(a[0],a[1],a[2],jt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,ut)),Promise.all(r)}},Fu=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Du=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Uu=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Nu=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},zu=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ou=class{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},ku=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==oi.TRIANGLES&&c.mode!==oi.TRIANGLE_STRIP&&c.mode!==oi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let x=new Ne,p=new P,m=new dn,v=new P(1,1,1),_=new Vi(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&v.fromBufferAttribute(l.SCALE,M),_.setMatrixAt(M,x.compose(p,m,v));for(let M in l)if(M==="_COLOR_0"){let w=l[M];_.instanceColor=new mi(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);Mt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},_m="glTF",Jo=12,mm={JSON:1313821514,BIN:5130562},Bu=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Jo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_m)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Jo,r=new DataView(e,Jo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===mm.JSON){let c=new Uint8Array(e,Jo+o,a);this.content=i.decode(c)}else if(l===mm.BIN){let c=Jo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Hu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Xu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Xu[h]||h.toLowerCase();if(o[h]!==void 0){let d=i.accessors[e.attributes[h]],f=Xr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],p=l[g];p!==void 0&&(x.normalized=p)}u(f)},a,c,jt,d)})})}},Gu=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Vu=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},Hl=class extends ms{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,p=-2*f+3*d,m=f-d,v=1-p,_=m-d+u;for(let M=0;M!==a;M++){let w=o[x+M+a],S=o[x+M+l]*h,R=o[g+M+a],F=o[g+M]*h;r[M]=v*w+_*S+p*R+m*F}return r}},w1=new dn,Wu=class extends Hl{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return w1.fromArray(r).normalize().toArray(r),r}},oi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gm={9728:$t,9729:Tn,9984:Xa,9985:su,9986:bo,9987:cs},xm={33071:Wn,33648:Lo,10497:Hi},yu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},T1={CUBICSPLINE:void 0,LINEAR:Gs,STEP:wr},Mu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function A1(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ps({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),n.DefaultMaterial}function qs(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function bs(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function R1(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function C1(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function P1(n){let e,t=n.extensions&&n.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bu(t.attributes):e=n.indices+":"+bu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+bu(n.targets[i]);return e}function bu(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function qu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function L1(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var I1=new Ne,Yu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new E1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new bl(this.options.manager):this.textureLoader=new Al(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return qs(r,a,s),bs(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(vs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=yu[s.type],a=Xr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new dt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=yu[s.type],c=Xr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,p;if(f&&f!==u){let m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,_=t.cache.get(v);_||(x=new c(a,m*f,s.count*f/h),_=new zo(x,f/h),t.cache.add(v,_)),p=new Oo(_,l,d%f/h,g)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),p=new dt(x,l,g);if(s.sparse!==void 0){let m=yu.SCALAR,v=Xr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,w=new v(o[1],_,s.sparse.count*m),S=new c(o[2],M,s.sparse.count*l);a!==null&&(p=new dt(p.array.slice(),p.itemSize,p.normalized));for(let R=0,F=w.length;R<F;R++){let b=w[R];if(p.setX(b,S[R*l]),l>=2&&p.setY(b,S[R*l+1]),l>=3&&p.setZ(b,S[R*l+2]),l>=4&&p.setW(b,S[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=gm[d.magFilter]||Tn,h.minFilter=gm[d.minFilter]||cs,h.wrapS=xm[d.wrapS]||Hi,h.wrapT=xm[d.wrapT]||Hi,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let p=new hn(x);p.needsUpdate=!0,d(p)}),t.load(vs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||L1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Bo,Fn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new ko,Fn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ps}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){let u=s[rt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ne(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],jt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,ut)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=yt);let h=r.alphaMode||Mu.OPAQUE;if(h===Mu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Mu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==De&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ie(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==De&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==De){let u=r.emissiveFactor;a.emissive=new ne().setRGB(u[0],u[1],u[2],jt)}return r.emissiveTexture!==void 0&&o!==De&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ut)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),bs(u,r),t.associations.set(u,{materials:e}),r.extensions&&qs(s,u,r),u})}createUniqueName(e){let t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return vm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=P1(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=vm(new Ct,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?A1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],p=o[f],m,v=c[f];if(p.mode===oi.TRIANGLES||p.mode===oi.TRIANGLE_STRIP||p.mode===oi.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Gi(x,v):new se(x,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===oi.TRIANGLE_STRIP?m.geometry=_u(m.geometry,Ll):p.mode===oi.TRIANGLE_FAN&&(m.geometry=_u(m.geometry,qo));else if(p.mode===oi.LINES)m=new ol(x,v);else if(p.mode===oi.LINE_STRIP)m=new Fr(x,v);else if(p.mode===oi.LINE_LOOP)m=new al(x,v);else if(p.mode===oi.POINTS)m=new ll(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&C1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),bs(m,r),p.extensions&&qs(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&qs(s,u[0],r),u[0];let d=new Ft;r.extensions&&qs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Jt(Vp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ds(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),bs(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Ne;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ir(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,p=x.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],p=u[4],m=[];for(let v=0,_=d.length;v<_;v++){let M=d[v],w=f[v],S=g[v],R=x[v],F=p[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let b=i._createAnimationTracks(M,w,S,R,F);if(b)for(let T=0;T<b.length;T++)m.push(b[T])}return new Ml(r,void 0,m)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,I1)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Vs:c.length>1?h=new Ft:c.length===1?h=c[0]:h=new Mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),bs(h,r),r.extensions&&qs(i,h,r),r.matrix!==void 0){let u=new Ne;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Ft;i.name&&(r.name=s.createUniqueName(i.name)),bs(r,i),i.extensions&&qs(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Fn||d instanceof hn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Ms[r.path]===Ms.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ms[r.path]){case Ms.weights:c=Wi;break;case Ms.rotation:c=wi;break;case Ms.position:case Ms.scale:c=Xi;break;default:switch(i.itemSize){case 1:c=Wi;break;case 2:case 3:default:c=Xi;break}break}let h=s.interpolation!==void 0?T1[s.interpolation]:Gs,u=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Ms[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=qu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof wi?Wu:Hl;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function F1(n,e,t){let i=e.attributes,s=new In;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){let h=qu(Xr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=qu(Xr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Xn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function vm(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Xu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return lt.workingColorSpace!==jt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),bs(n,e),F1(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?R1(n,e.targets,t):n})}var Ti={};async function ym(n){let e;if(window.BG_NATURE_B64){let t=await(await fetch(window.BG_NATURE_B64)).text(),i=Uint8Array.from(atob(t.trim()),o=>o.charCodeAt(0)),s=window.createImageBitmap;window.createImageBitmap=void 0;let r=new Promise((o,a)=>new jo().parse(i.buffer,"",o,a));window.createImageBitmap=s,e=await r,n&&n(1)}else e=await new Promise((t,i)=>new jo().load("assets/nature.glb",t,s=>{n&&s.total&&n(s.loaded/s.total)},i));for(let t of e.scene.children){t.updateMatrixWorld(!0);let i=new Ne().copy(t.matrixWorld).invert(),s=[],r=new In;t.traverse(o=>{if(!o.isMesh)return;let a=new Ne().multiplyMatrices(i,o.matrixWorld);s.push({geometry:o.geometry,map:o.material.map||null,matName:o.material.name||"",matrix:a});let l=o.geometry;l.computeBoundingBox(),r.union(l.boundingBox.clone().applyMatrix4(a))}),Ti[t.name]={parts:s,box:r,size:r.getSize(new P)}}return Ti}var D1={id:"glade",name:"\u0413\u0440\u0438\u0431\u043D\u0430\u044F \u043F\u043E\u043B\u044F\u043D\u0430",desc:"\u0413\u0440\u0438\u0431\u043D\u0438\u0446\u0430 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435, \u043A\u0443\u0441\u0442\u044B-\u0438\u0437\u0433\u043E\u0440\u043E\u0434\u0438 \u043F\u043E \u0431\u043E\u043A\u0430\u043C \u0438 \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u0442\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0437\u0430\u0441\u0430\u0434.",half:['""..,..r.r.r..,..""','""...............""',".....##.....##.....","...................","####...........####",".......T...T.......",'"""......R......"""','"""...#####....."""','"""............."""','.~~.....""....R....','.~~..R..""".....##.','........"""....##..',".##................",'"""...R..M..R..."""']},U1={id:"pitch",name:"\u041B\u0435\u0441\u043D\u043E\u0435 \u043F\u043E\u043B\u0435",desc:"\u041F\u043E\u043B\u0435 \u0441 \u0432\u043E\u0440\u043E\u0442\u0430\u043C\u0438 \u0438\u0437 \u043A\u0443\u0441\u0442\u043E\u0432, \u043E\u0441\u0442\u0440\u043E\u0432\u043A\u0430\u043C\u0438-\u0443\u043A\u0440\u044B\u0442\u0438\u044F\u043C\u0438 \u0438 \u0442\u0440\u0430\u0432\u043E\u0439 \u043F\u043E \u043A\u0440\u0430\u044F\u043C.",mode:"ball",half:["########ggggg########",'"#.................#"','""......R...R......""',".....r....r....r.....",".....................","...##...........##...",'"""..............."""','"""....T.....T...."""',".........###.........",".....................","..##.............##..",'..##.....""".....##..',".....................",'"".......R.R.......""',".....................",'""".......M......."""']},bm={glade:Mm(D1),maze:N1(2718),pitch:Mm(U1)};function Mm(n){let e=n.half,t=e[0].length;for(let a of e)if(a.length!==t)throw new Error("map "+n.id+": row width "+a.length+" != "+t+" in \xAB"+a+"\xBB");let i=e[e.length-1];if(i!==[...i].reverse().join(""))throw new Error("map "+n.id+": middle row must be a palindrome");let s=a=>a==="r"?"b":a==="g"?"h":a,r=e.slice(0,-1).reverse().map(a=>[...a].reverse().map(s).join("")),o=[...e,...r];return Object.assign({},n,{rows:o,W:t,H:o.length})}function N1(n){let e=n>>>0,t=()=>{e=e+1831565813>>>0;let v=e;return v=Math.imul(v^v>>>15,v|1),v^=v+Math.imul(v^v>>>7,v|61),((v^v>>>14)>>>0)/4294967296},i=12,s=i*2-1,r=Array.from({length:i},()=>Array(i).fill("#")),o=(v,_)=>v>=0&&_>=0&&v<i&&_<i,a=new Set,l=[[0,0]];for(r[0][0]=".",a.add("0,0");l.length;){let[v,_]=l[l.length-1],M=[[2,0],[-2,0],[0,2],[0,-2]].map(([b,T])=>[v+b,_+T,b,T]).filter(([b,T])=>o(b,T)&&!a.has(b+","+T));if(!M.length){l.pop();continue}let[w,S,R,F]=M[Math.floor(t()*M.length)];r[v+R/2][_+F/2]=".",r[w][S]=".",a.add(w+","+S),l.push([w,S])}for(let v=0;v<i;v++)for(let _=0;_<i;_++)r[v][_]==="#"&&v%2!==_%2&&t()<.12&&(r[v][_]=".");for(let v=1;v<i;v+=2)for(let _=1;_<i;_+=2)[[1,0],[-1,0],[0,1],[0,-1]].every(([w,S])=>!o(v+w,_+S)||r[v+w][_+S]===".")&&t()<.15&&(r[v][_]=".");for(let v=0;v<i;v++)for(let _=0;_<i;_++)Math.max(i-1-v,i-1-_)<=2&&(r[v][_]=".");let c=[[1,1],[1,8],[8,1]];for(let[v,_]of c)for(let M=v-1;M<=v+1;M++)for(let w=_-1;w<=_+1;w++)o(M,w)&&(r[M][w]=".");let h=(v,_,M)=>c.some(([w,S])=>Math.abs(w-v)<=M&&Math.abs(S-_)<=M)||Math.max(i-1-v,i-1-_)<=3;for(let v=0;v<9;v++){let _=Math.floor(t()*i),M=Math.floor(t()*i);for(let w=0;w<6;w++){o(_,M)&&r[_][M]==="."&&!h(_,M,1)&&(r[_][M]='"');let S=Math.floor(t()*4);_+=[1,-1,0,0][S],M+=[0,0,1,-1][S]}}let u=0,d=(v,_)=>[[1,0],[-1,0],[0,1],[0,-1]].filter(([M,w])=>o(v+M,_+w)&&r[v+M][_+w]==="#").length;for(let v of[3,2])for(let _=0;_<i-1&&u<10;_++)for(let M=0;M<i-1&&u<10;M++)r[_][M]!=="."||h(_,M,2)||d(_,M)>=v&&t()<(v===3?.9:.4)&&(r[_][M]="C",u++);r[i-4][i-3]="C",r[i-3][i-4]="C",r[i-3][i-3]="R";for(let v=0;v<i;v++)for(let _=0;_<i;_++)r[v][_]==="."&&!h(v,_,2)&&t()<.025&&(r[v][_]="R");for(let v=0;v<i;v++)r[i-1][v]=r[v][i-1];for(let[v,_]of c)r[v][_]="s";let f=Array.from({length:s},()=>Array(s).fill("#"));for(let v=0;v<s;v++)for(let _=0;_<s;_++){let M=v,w=_;for(let S=0;S<4&&!(M<i&&w<i);S++){let R=M;M=s-1-w,w=R}f[v][_]=r[M][w]}let g=v=>v!=="#"&&v!=="R"&&v!=="C";for(let v=0;v<200;v++){let _=Array.from({length:s},()=>Array(s).fill(!1)),M=[[1,1]];for(_[1][1]=!0;M.length;){let[F,b]=M.pop();for(let[T,U]of[[1,0],[-1,0],[0,1],[0,-1]]){let B=F+T,O=b+U;B>=0&&O>=0&&B<s&&O<s&&!_[B][O]&&g(f[B][O])&&(_[B][O]=!0,M.push([B,O]))}}let w=null;for(let F=0;F<s&&!w;F++)for(let b=0;b<s&&!w;b++)g(f[F][b])&&!_[F][b]&&(w=[F,b]);if(!w)break;let[S,R]=w;for(let[F,b]of[[1,0],[-1,0],[0,1],[0,-1]]){let T=S+F,U=R+b;if(T>=0&&U>=0&&T<s&&U<s&&f[T][U]!=="."&&f[T][U]!=='"'){let B=T,O=U;for(let L=0;L<4;L++){f[B][O]=".";let N=B;B=O,O=s-1-N}break}}}let x=v=>v%2?1:2,p=[];for(let v=0;v<s;v++)for(let _=0;_<x(v);_++){let M="";for(let w=0;w<s;w++)for(let S=0;S<x(w);S++){let R=f[v][w],F=_===0&&S===0;M+="CRs".includes(R)&&!F?".":R}p.push(M)}let m=p[0].length;return{id:"maze",name:"\u041B\u0435\u0441\u043D\u043E\u0439 \u043B\u0430\u0431\u0438\u0440\u0438\u043D\u0442",desc:"\u0423\u0437\u043A\u0438\u0435 \u043F\u0440\u043E\u0445\u043E\u0434\u044B \u043C\u0435\u0436\u0434\u0443 \u043A\u0443\u0441\u0442\u0430\u043C\u0438, \u0442\u0430\u0439\u043D\u0438\u043A\u0438 \u0441 \u0441\u0438\u043B\u043E\u0439 \u0438 \u043F\u043E\u043B\u044F\u043D\u0430 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435.",rows:p,W:m,H:p.length,mode:"br"}}var k={map:null,W:0,H:0,rows:null,group:null,hx:0,hz:0,spawns:{0:[],1:[],ffa:[]},mine:null,grassTiles:[],crates:[],shared:{}},Rn={time:{value:0},push:{value:Array.from({length:10},()=>new P(0,0,0))},me:{value:new P(0,0,0)}},Vt=n=>(n-(k.W-1)/2)*1.6,Yt=n=>(n-(k.H-1)/2)*1.6,gi=n=>Math.floor(n/1.6+k.W/2),xi=n=>Math.floor(n/1.6+k.H/2);function $i(n,e){return n<0||e<0||n>=k.W||e>=k.H?"X":k.rows[e][n]}var ai=(n,e)=>$i(gi(n),xi(e)),z1=new Set(["#","R","T","~","X","C"]),O1=new Set(["#","R","T","X","C"]),Ss=n=>z1.has(n),Gl=n=>O1.has(n),k1=new Set(["#","X"]),$u=n=>k1.has(n),$r=(n,e,t,i)=>fn(n,e,t,i,$u)<0,wm=n=>n==="#"||n==="X"?td:n==="R"?1.15:n==="C"?1.1:n==="T"?.9:0,Vl=(n,e)=>ai(n,e)==='"';function Ai(n,e){let t=gi(n.x-e),i=gi(n.x+e),s=xi(n.z-e),r=xi(n.z+e),o=!1;for(let a=s;a<=r;a++)for(let l=t;l<=i;l++){if(!Ss($i(l,a)))continue;let c=Vt(l)-1.6/2,h=c+1.6,u=Yt(a)-1.6/2,d=u+1.6,f=qe(n.x,c,h),g=qe(n.z,u,d),x=n.x-f,p=n.z-g,m=x*x+p*p;if(!(m>=e*e))if(o=!0,m>1e-8){let v=Math.sqrt(m),_=(e-v)/v;n.x+=x*_,n.z+=p*_}else{let v=[n.x-c,h-n.x,n.z-u,d-n.z],_=Math.min(...v);_===v[0]?n.x=c-e:_===v[1]?n.x=h+e:_===v[2]?n.z=u-e:n.z=d+e}}return o}function fn(n,e,t,i,s=Gl){let r=t-n,o=i-e,a=gi(n),l=xi(e);if(s($i(a,l)))return 0;let c=gi(t),h=xi(i),u=r>0?1:-1,d=o>0?1:-1,f=n/1.6+k.W/2,g=e/1.6+k.H/2,x=r/1.6,p=o/1.6,m=x!==0?Math.abs(1/x):1/0,v=p!==0?Math.abs(1/p):1/0,_=x!==0?(u>0?Math.floor(f)+1-f:f-Math.floor(f))*m:1/0,M=p!==0?(d>0?Math.floor(g)+1-g:g-Math.floor(g))*v:1/0;for(let w=0;w<200;w++){if(a===c&&l===h)return-1;let S;if(_<M?(S=_,_+=m,a+=u):(S=M,M+=v,l+=d),S>1)return-1;if(s($i(a,l)))return S}return-1}var Ku=(n,e,t,i)=>fn(n,e,t,i)<0;function Tm(n,e,t,i){let s=k.W,r=k.H,o=qe(gi(n),0,s-1),a=qe(xi(e),0,r-1),l=qe(gi(t),0,s-1),c=qe(xi(i),0,r-1);if(Ss($i(l,c))){let S=B1(l,c);if(!S)return null;l=S[0],c=S[1]}let h=s*r,u=new Float32Array(h).fill(1e9),d=new Int32Array(h).fill(-1),f=new Uint8Array(h),g=[a*s+o];u[g[0]]=0;let x=S=>{let R=Math.abs(S%s-l),F=Math.abs((S/s|0)-c);return Math.max(R,F)+.414*Math.min(R,F)},p=c*s+l;for(;g.length;){let S=0,R=1e9;for(let U=0;U<g.length;U++){let B=u[g[U]]+x(g[U]);B<R&&(R=B,S=U)}let F=g[S];if(g[S]=g[g.length-1],g.pop(),F===p)break;f[F]=1;let b=F%s,T=F/s|0;for(let U=-1;U<=1;U++)for(let B=-1;B<=1;B++){if(!B&&!U)continue;let O=b+B,L=T+U;if(O<0||L<0||O>=s||L>=r||Ss(k.rows[L][O])||B&&U&&(Ss(k.rows[T][O])||Ss(k.rows[L][b])))continue;let N=L*s+O;if(f[N])continue;let q=u[F]+(B&&U?1.414:1)+(k.rows[L][O]==='"'?.15:0);q<u[N]&&(u[N]>=1e9&&g.push(N),u[N]=q,d[N]=F)}}if(d[p]<0&&p!==a*s+o)return null;let m=[];for(let S=p;S>=0;S=d[S])m.push(S);m.reverse();let v=m.map(S=>({x:Vt(S%s),z:Yt(S/s|0)}));v[v.length-1]={x:qe(t,Vt(l)-1.6*.45,Vt(l)+1.6*.45),z:qe(i,Yt(c)-1.6*.45,Yt(c)+1.6*.45)};let _=[],M={x:n,z:e},w=0;for(;w<v.length;){let S=v.length-1;for(;S>w&&!Ju(M.x,M.z,v[S].x,v[S].z);)S--;_.push(v[S]),M=v[S],w=S+1}return _}function Ju(n,e,t,i){let s=t-n,r=i-e,o=Math.hypot(s,r)||1,a=-r/o*.42,l=s/o*.42;return fn(n+a,e+l,t+a,i+l,Ss)<0&&fn(n-a,e-l,t-a,i-l,Ss)<0}function B1(n,e){for(let t=1;t<6;t++)for(let i=-t;i<=t;i++)for(let s=-t;s<=t;s++)if(Math.max(Math.abs(s),Math.abs(i))===t&&!Ss($i(n+s,e+i)))return[n+s,e+i];return null}function na(n,e,t,i){return n.onBeforeCompile=s=>{s.uniforms.uTime=Rn.time,s.uniforms.uPush=Rn.push,s.uniforms.uMe=Rn.me,i&&(s.fragmentShader=`uniform vec3 uMe;
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
      gl_Position = projectionMatrix * mvPosition;`)},n.customProgramCacheKey=()=>"wind"+e+t+i,n}function H1(){return ri(256,256,(n,e,t)=>{n.fillStyle="#3E7F2C",n.fillRect(0,0,e,t);let i=["#2F6A22","#4C9634","#5AAA3A","#3A7A28","#6CBB45","#2A5C1E"];for(let s=0;s<900;s++){let r=D(0,e),o=D(0,t),a=D(5,11),l=D(0,Te);n.fillStyle=Zo(i);for(let c of[-e,0,e])for(let h of[-t,0,t])n.beginPath(),n.ellipse(r+c,o+h,a,a*.55,l,0,Te),n.fill()}n.globalAlpha=.25,n.fillStyle="#B9E87A";for(let s=0;s<160;s++){let r=D(0,e),o=D(0,t);n.beginPath(),n.ellipse(r,o,3,1.6,D(0,Te),0,Te),n.fill()}},{repeat:!0})}var G1=`
  if(uMe.z > 0.0){
    vec3 P = vec3(uMe.x, 1.0, uMe.y), C = cameraPosition, D = P - C;
    float t = dot(vWP - C, D) / max(dot(D, D), 1e-4);
    if(t > 0.0 && t < 1.08){
      float r = mix(0.7, 1.7, clamp(t, 0.0, 1.0)), d = length(vWP - (C + D * t));
      float keep = mix(0.14, 1.0, smoothstep(r * 0.55, r, d));
      float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
      if(ign > keep) discard;
    }
  }`;function V1(n,e,t){return n.onBeforeCompile=i=>{t&&(i.uniforms.uMe=Rn.me,i.fragmentShader=`uniform vec3 uMe;
`+i.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
`+G1)),i.vertexShader=`varying vec3 vWP; varying vec3 vWN;
`+i.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vWP = (modelMatrix * vec4(transformed, 1.0)).xyz; vWN = normalize(mat3(modelMatrix) * objectNormal);`),i.fragmentShader=`varying vec3 vWP; varying vec3 vWN;
`+i.fragmentShader.replace("#include <map_fragment>",`
      ${pt?`vec3 an = abs(vWN);   // phones: one texture read along the main axis instead of three
      vec2 tuv = an.y > an.x && an.y > an.z ? vWP.xz : an.x > an.z ? vWP.zy : vWP.xy;
      diffuseColor *= texture2D(map, tuv * ${e.toFixed(3)});`:`vec3 bw = pow(abs(vWN), vec3(4.0)); bw /= max(bw.x + bw.y + bw.z, 1e-4);
      vec4 tx = texture2D(map, vWP.zy * ${e.toFixed(3)}), ty = texture2D(map, vWP.xz * ${e.toFixed(3)}), tz = texture2D(map, vWP.xy * ${e.toFixed(3)});
      diffuseColor *= tx * bw.x + ty * bw.y + tz * bw.z;`}`)},n.customProgramCacheKey=()=>"tri"+e+(t?"see":""),n}function W1(n,e,t,i){let s=k.W*k.H>700,r=s?pt?1.2:1.5:pt?1.7:2.2,o=.32,a=new Ei(n,e,t,Math.ceil(n*r),Math.ceil(e*r),Math.ceil(t*r));a.deleteAttribute("normal"),a.deleteAttribute("uv"),a=pm(a);let l=a.attributes.position,c=n/2-o,h=e/2-o,u=t/2-o,d=new P,f=new P,g=new Float32Array(l.count*3);for(let x=0;x<l.count;x++){d.fromBufferAttribute(l,x);let p=qe(d.x,-c,c),m=qe(d.y,-h,h),v=qe(d.z,-u,u);f.set(d.x-p,d.y-m,d.z-v).normalize();let _=.07*(Math.sin(d.x*4.1+i)*Math.sin(d.z*3.7-i)+Math.sin(d.y*5.3+d.x*2.1+i*2))+(d.y>h-.01?.05*Math.sin(d.x*2.3+d.z*2.9+i):0);d.set(p,m,v).addScaledVector(f,o+_),l.setXYZ(x,d.x,d.y+e/2,d.z);let M=qe((d.y+e/2)/e,0,1),w=.55+.45*Math.pow(M,.7)+D(-.05,.05);g[x*3]=w*.95,g[x*3+1]=w,g[x*3+2]=w*.9}return a.setAttribute("color",new dt(g,3)),a.computeVertexNormals(),a}function X1(){let n=[[0,0],[.78,0],[.62,.12],[.55,.3],[.53,.7],[.56,.84],[.5,.86]].map(s=>new ie(s[0],s[1])),e=new Ws(n,18),t=new Un(.5,18);t.rotateX(-Math.PI/2),t.translate(0,.86,0);let i=e.attributes.position;for(let s=0;s<i.count;s++){let r=i.getX(s),o=i.getZ(s),a=Math.atan2(o,r),l=i.getY(s),c=1+.07*Math.sin(a*7)+.04*Math.sin(a*13+l*6);i.setX(s,r*c),i.setZ(s,o*c)}return e.computeVertexNormals(),{side:e,top:t}}var Yr=new Ne,Zr=new dn,ea=new P,ju=new P,Qu=new P(0,1,0);function Ys(n,e,t,i={}){let s=Ti[n];if(!s||!e.length)return[];let r=[];for(let o of s.parts){let a=t(o);if(!a)continue;let l=new Vi(o.geometry,a,e.length);e.forEach((c,h)=>{Zr.setFromAxisAngle(Qu,c.rot||0),ea.setScalar(c.s||1),c.sy&&(ea.y*=c.sy),Yr.compose(ju.set(c.x,c.y||0,c.z),Zr,ea).multiply(o.matrix),l.setMatrixAt(h,Yr),c.color&&l.setColorAt&&l.setColorAt(h,c.color)}),l.castShadow=!!i.cast,l.receiveShadow=i.receive!==!1,l.computeBoundingSphere(),k.group.add(l),r.push(l)}return r}function ed(n){k.group&&(ue.remove(k.group),k.group.traverse(t=>{t.geometry&&!t.userData.shared&&t.geometry.dispose()}));let e=bm[n];Object.assign(k,{map:e,W:e.W,H:e.H,rows:e.rows.map(t=>[...t]),hx:e.W*1.6/2,hz:e.H*1.6/2,spawns:{0:[],1:[],ffa:[]},grassTiles:[],crates:[],mine:null}),k.group=new Ft,ue.add(k.group),cm(k.hx+2,k.hz+2);for(let t=0;t<k.H;t++)for(let i=0;i<k.W;i++){let s=k.rows[t][i];if(s==="b"&&k.spawns[0].push({x:Vt(i),z:Yt(t)-3.2}),s==="r"&&k.spawns[1].push({x:Vt(i),z:Yt(t)+3.2}),s==="M"&&(k.mine={x:Vt(i),z:Yt(t)}),s==="s"){let r=Vt(i),o=Yt(t),a=Math.hypot(r,o)||1;k.spawns.ffa.push({x:r-r/a*1,z:o-o/a*1})}s==='"'&&k.grassTiles.push([i,t])}return k.spawns[0].length||(k.spawns[0]=k.spawns[1]=k.spawns.ffa),fu(7331,()=>{q1(),Z1(),j1(),J1(),Q1(),eS(),tS(),sS()}),k}function q1(){let e=k.W*40,t=k.H*40,i=ri(e,t,d=>{for(let g=0;g<k.H;g++)for(let x=0;x<k.W;x++){let p=(g+x)%2===0;d.fillStyle=p?"#7CC24E":"#71B847",d.fillRect(x*40,g*40,40,40)}let f=(g,x,p)=>{let m=d.createRadialGradient(g,x,p*.2,g,x,p);m.addColorStop(0,"rgba(201,164,106,0.95)"),m.addColorStop(.7,"rgba(190,156,98,0.6)"),m.addColorStop(1,"rgba(190,156,98,0)"),d.fillStyle=m,d.beginPath(),d.arc(g,x,p,0,Te),d.fill()};for(let g=0;g<k.H;g++)for(let x=0;x<k.W;x++){let p=k.rows[g][x],m=(x+.5)*40,v=(g+.5)*40;p==="M"&&f(m,v,40*2.6),(p==="b"||p==="r"||p==="s")&&f(m,v,40*1.1)}for(let g=0;g<e*t/60;g++){let x=D(0,e),p=D(0,t);d.strokeStyle=Zo(["rgba(70,140,40,.5)","rgba(150,215,90,.45)","rgba(55,115,35,.45)","rgba(180,230,120,.3)"]),d.lineWidth=D(1,2.2),d.beginPath(),d.moveTo(x,p),d.lineTo(x+D(-2,2),p-D(3,7)),d.stroke()}d.filter="blur(6px)";for(let g=0;g<k.H;g++)for(let x=0;x<k.W;x++){let p=k.rows[g][x];p==="#"?(d.fillStyle="rgba(30,60,20,.55)",d.fillRect(x*40-6,g*40-6,52,52)):p==="R"||p==="T"?(d.fillStyle="rgba(30,60,20,.35)",d.beginPath(),d.arc((x+.5)*40,(g+.5)*40,40*.65,0,Te),d.fill()):p==='"'?(d.fillStyle="rgba(40,90,25,.35)",d.fillRect(x*40,g*40,40,40)):p==="~"&&(d.fillStyle="#4B5E2E",d.fillRect(x*40-4,g*40-4,48,48))}d.filter="none";for(let g=0;g<k.H;g++)for(let x=0;x<k.W;x++){let p=k.rows[g][x];p!=="b"&&p!=="r"&&p!=="s"||(d.strokeStyle=p==="b"?"rgba(80,190,255,.85)":p==="r"?"rgba(255,90,90,.85)":"rgba(255,215,90,.8)",d.lineWidth=4,d.beginPath(),d.arc((x+.5)*40,(g+.5)*40,40*.38,0,Te),d.stroke())}if(k.map.mode==="ball"){d.strokeStyle="rgba(255,255,255,.55)",d.lineWidth=5,d.beginPath(),d.moveTo(0,t/2),d.lineTo(e,t/2),d.stroke(),d.beginPath(),d.arc(e/2,t/2,40*3.2,0,Te),d.stroke();for(let g=0;g<k.H;g++)for(let x=0;x<k.W;x++){let p=k.rows[g][x];p!=="g"&&p!=="h"||(d.fillStyle=p==="g"?"rgba(255,90,90,.35)":"rgba(80,190,255,.35)",d.fillRect(x*40,g*40,40,40))}for(let g of[!0,!1]){let x=g?40:t-240,p=40*11;d.strokeRect(e/2-p/2,x,p,40*5)}}});i.anisotropy=8;let s=.8,r=Math.round(k.W*1.6/s),o=Math.round(k.H*1.6/s),a=new Dt(k.W*1.6,k.H*1.6,r,o);a.rotateX(-Math.PI/2);let l=a.attributes.position;for(let d=0;d<l.count;d++){let f=l.getX(d),g=l.getZ(d),x=0;for(let[p,m]of[[0,0],[.35,0],[-.35,0],[0,.35],[0,-.35]])ai(f+p,g+m)==="~"&&(x+=.2);l.setY(d,-x*.7)}a.computeVertexNormals();let c=new se(a,ct({map:i,roughness:.95}));c.receiveShadow=!0,k.group.add(c);let h=ri(256,256,(d,f,g)=>{d.fillStyle="#5E9E3A",d.fillRect(0,0,f,g);for(let x=0;x<1400;x++){let p=D(0,f),m=D(0,g);d.strokeStyle=Zo(["rgba(40,100,30,.5)","rgba(120,190,70,.45)","rgba(70,130,40,.5)"]),d.lineWidth=D(1,2),d.beginPath(),d.moveTo(p,m),d.lineTo(p+D(-2,2),m-D(3,8)),d.stroke()}},{repeat:!0});h.repeat.set(40,40);let u=new se(new Dt(260,260),ct({map:h,roughness:1}));u.rotation.x=-Math.PI/2,u.position.y=-.02,u.receiveShadow=!0,k.group.add(u)}function Y1(){return k.shared.hedge||(k.shared.hedge=V1(ct({map:H1(),vertexColors:!0,roughness:.85,color:"#E8FFD8"}),.55,!0)),k.shared.hedge}var td=2.6;function Z1(){let n=[],e=new Set,t=k.W,i=k.H,s=(h,u)=>$i(h,u)==="#";for(let h=0;h<i;h++)for(let u=0;u<t;u++){if(!s(u,h)||e.has(h*t+u))continue;let d=u;for(;s(d+1,h);)d++;if(d>u){for(let f=u;f<=d;f++)e.add(h*t+f);qr(n,Vt(u)-1.6/2,Yt(h)-1.6/2,(d-u+1)*1.6,1.6)}}for(let h=0;h<t;h++)for(let u=0;u<i;u++){if(!s(h,u)||e.has(u*t+h))continue;let d=u;for(;s(h,d+1)&&!e.has((d+1)*t+h);)d++;for(let f=u;f<=d;f++)e.add(f*t+h);qr(n,Vt(h)-1.6/2,Yt(u)-1.6/2,1.6,(d-u+1)*1.6)}let r=k.hx,o=k.hz,a=1.3;qr(n,-r-a,-o-a,k.W*1.6+2*a,a,3),qr(n,-r-a,o,k.W*1.6+2*a,a,3),qr(n,-r-a,-o,a,k.H*1.6,3),qr(n,r,-o,a,k.H*1.6,3);let l=new se(Ko(n),Y1());l.castShadow=l.receiveShadow=!0,k.group.add(l),n.forEach(h=>h.dispose());let c=[];for(let h=0;h<i;h++)for(let u=0;u<t;u++)s(u,h)&&Yi&&D()<.3&&c.push({x:Vt(u)+D(-.4,.4),y:td-.3,z:Yt(h)+D(-.4,.4),rot:D(0,Te),s:D(.32,.42)});Ys("Bush_Common",c,()=>Am("#4FA23A"),{cast:!1})}function qr(n,e,t,i,s,r=td){let o=W1(i-.06,r,s-.06,D(0,100));o.translate(e+i/2,0,t+s/2),n.push(o)}function Am(n){let e="leaf"+n;if(!k.shared[e]){let t=Ti.Bush_Common.parts[0].map;k.shared[e]=na(ct({map:t,color:n,alphaTest:.45,side:yt,roughness:.8}),1.6,.05,!1)}return k.shared[e]}var Rm=3e3,Zi=null,Qo=new Mt;function $1(){let n=new Ei(1.3,1.1,1.3);return n.translate(0,.55,0),n}function K1(){return ri(128,128,(n,e,t)=>{n.fillStyle="#9A6B3C",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)n.fillStyle=i%2?"#8A5E33":"#A87645",n.fillRect(0,i*32+2,e,28);n.strokeStyle="#5E3D1E",n.lineWidth=8,n.strokeRect(4,4,e-8,t-8),n.beginPath(),n.moveTo(8,8),n.lineTo(e-8,t-8),n.stroke(),n.fillStyle="#FFD45A",n.beginPath(),n.arc(e/2,t/2,15,0,Te),n.fill(),n.fillStyle="#FFF4C0",n.beginPath(),n.arc(e/2-4,t/2-4,5,0,Te),n.fill()})}function J1(){k.crates=[];for(let n=0;n<k.H;n++)for(let e=0;e<k.W;e++)k.rows[n][e]==="C"&&k.crates.push({c:e,r:n,x:Vt(e),z:Yt(n),hp:Rm,shake:0,rot:Math.floor(D(0,4))*Math.PI/2,alive:!0});if(!k.crates.length){Zi=null;return}Zi=new Vi($1(),ct({map:K1(),roughness:.85}),k.crates.length),Zi.castShadow=Zi.receiveShadow=!0,k.crates.forEach((n,e)=>{n.i=e,ta(n)}),k.group.add(Zi)}function ta(n){let e=n.alive?1:0,t=n.shake>0?Math.sin(n.shake*60)*.06*n.shake/.2:0;Qo.position.set(n.x+t,0,n.z),Qo.rotation.set(0,n.rot+t,0),Qo.scale.set(e,e*(1-t*.5),e),Qo.updateMatrix(),Zi.setMatrixAt(n.i,Qo.matrix),Zi.instanceMatrix.needsUpdate=!0}var Cm=(n,e)=>k.crates.find(t=>t.alive&&t.c===n&&t.r===e)||null;function nd(n,e){return!n||!n.alive?!1:(n.hp-=e,n.shake=.2,n.hp<=0?(n.alive=!1,k.rows[n.r][n.c]=".",ta(n),!0):(ta(n),!1))}function Pm(){if(Zi)for(let n of k.crates)n.alive=!0,n.hp=Rm,n.shake=0,k.rows[n.r][n.c]="C",ta(n)}function Lm(n){if(Zi)for(let e of k.crates)e.shake>0&&(e.shake=Math.max(0,e.shake-n),ta(e))}function j1(){let n=[[],[],[]],e=[];for(let l=0;l<k.H;l++)for(let c=0;c<k.W;c++){let h=k.rows[l][c],u=Vt(c),d=Yt(l);if(h==="R"){let f=(l*7+c*3)%3;n[f].push({x:u,z:d,y:-.05,rot:D(0,Te),s:.56})}h==="T"&&e.push({x:u,z:d,rot:D(0,Te),s:D(.95,1.05)})}let t=ct({map:Ti.Rock_Medium_1.parts[0].map,roughness:.9,color:"#D8E0D0"});n.forEach((l,c)=>Ys("Rock_Medium_"+(c+1),l,()=>t,{cast:!0}));let{side:i,top:s}=X1(),r=ri(128,128,(l,c,h)=>{l.fillStyle="#6B4A2E",l.fillRect(0,0,c,h);for(let u=0;u<40;u++){let d=D(0,c);l.strokeStyle=Zo(["#4E3420","#7E5A38","#5A3D25"]),l.lineWidth=D(2,6),l.beginPath(),l.moveTo(d,0),l.bezierCurveTo(d+D(-8,8),h*.3,d+D(-8,8),h*.7,d+D(-4,4),h),l.stroke()}},{repeat:!0});r.repeat.set(3,1);let o=ri(128,128,(l,c,h)=>{l.fillStyle="#E2B97A",l.fillRect(0,0,c,h);for(let u=4;u<64;u+=D(4,7))l.strokeStyle=`rgba(150,95,45,${D(.35,.7)})`,l.lineWidth=D(1,2.5),l.beginPath(),l.arc(64+D(-1,1),64+D(-1,1),u,0,Te),l.stroke();l.strokeStyle="#6B4A2E",l.lineWidth=8,l.beginPath(),l.arc(64,64,62,0,Te),l.stroke()}),a=(l,c)=>{let h=new Vi(l,c,e.length);e.forEach((u,d)=>{Zr.setFromAxisAngle(Qu,u.rot),Yr.compose(ju.set(u.x,0,u.z),Zr,ea.setScalar(u.s)),h.setMatrixAt(d,Yr)}),h.castShadow=h.receiveShadow=!0,k.group.add(h)};e.length&&(a(i,ct({map:r,roughness:.9})),a(s,ct({map:o,roughness:.8})))}var Sm=[];function Zu(n){let e=[],t=[],i=[],s=[],r=new ne,o=new ne;for(let l=0;l<n;l++){let c=D(-.82,.82),h=D(-.82,.82),u=D(1.15,1.65),d=D(.08,.13),f=D(0,Te),g=D(.15,.45),x=D(0,Te),p=Math.cos(f),m=Math.sin(f);r.setHSL(D(.27,.31),D(.6,.75),D(.1,.15)),o.setHSL(D(.22,.28),D(.6,.8),D(.3,.4));let v=e.length/3,_=[[0,1],[.45,.8],[.8,.45],[1,0]];for(let[M,w]of _){let S=c+Math.cos(x)*g*M*M,R=h+Math.sin(x)*g*M*M,F=u*M*(1-g*g*.3*M),b=M===1?0:1;for(let T of b?[-1,1]:[0]){e.push(S+p*d*w*T*.5,F,R+m*d*w*T*.5);let U=r.clone().lerp(o,Math.pow(M,.8));t.push(U.r,U.g,U.b),i.push(-m*.7,.5,p*.7)}}s.push(v,v+1,v+3,v,v+3,v+2,v+2,v+3,v+5,v+2,v+5,v+4,v+4,v+5,v+6)}let a=new Ct;return a.setAttribute("position",new He(e,3)),a.setAttribute("normal",new He(i,3)),a.setAttribute("color",new He(t,3)),a.setIndex(s),a}function Q1(){let n=Yi?70:pt?40:56,e=[Zu(n),Zu(n),Zu(n)],t=na(ct({vertexColors:!0,roughness:1,side:yt,envMapIntensity:.5}),1.6,.12,!0);Sm=[],e.forEach((i,s)=>{let r=k.grassTiles.filter((a,l)=>l%3===s);if(!r.length)return;let o=new Vi(i,t,r.length);r.forEach(([a,l],c)=>{Zr.setFromAxisAngle(Qu,Math.floor(D(0,4))*Math.PI/2),Yr.compose(ju.set(Vt(a),0,Yt(l)),Zr,ea.set(1,D(.92,1.08),1)),o.setMatrixAt(c,Yr)}),o.receiveShadow=!0,o.computeBoundingSphere(),k.group.add(o),Sm.push(o)})}function eS(){let n=[];for(let r=0;r<k.H;r++)for(let o=0;o<k.W;o++)k.rows[r][o]==="~"&&n.push([o,r]);if(!n.length)return;let e=n.map(([r,o])=>{let a=new Dt(1.6+.5,1.6+.5);return a.rotateX(-Math.PI/2),a.translate(Vt(r),-.16,Yt(o)),a}),t=ct({color:"#4FB5C8",roughness:.12,metalness:.1,transparent:!0,opacity:.82});t.onBeforeCompile=r=>{r.uniforms.uTime=Rn.time,r.vertexShader=`varying vec3 vWP2;
`+r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vWP2 = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=`uniform float uTime; varying vec3 vWP2;
`+r.fragmentShader.replace("#include <map_fragment>",`
      float rip = sin(vWP2.x * 5.0 + uTime * 1.6) * sin(vWP2.z * 4.3 - uTime * 1.2) + sin((vWP2.x + vWP2.z) * 7.0 + uTime * 2.3) * 0.5;
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.85, 1.0, 1.0), smoothstep(0.9, 1.4, rip) * 0.5);`)};let i=new se(Ko(e),t);i.receiveShadow=!0,k.group.add(i);let s=n.filter(()=>D()<.7).map(([r,o])=>({x:Vt(r)+D(-.4,.4),y:-.14,z:Yt(o)+D(-.4,.4),rot:D(0,Te),s:D(.5,.7)}));Ys("Plant_1",s.map(r=>Object.assign(r,{sy:.25})),()=>Am("#6DBB4A"))}function tS(){let n=[],e=[],t=[],i=[];for(let o=0;o<k.H;o++)for(let a=0;a<k.W;a++){let l=k.rows[o][a],c=Vt(a),h=Yt(o);l===","&&n.push({x:c+D(-.3,.3),z:h+D(-.3,.3),rot:D(0,Te),s:D(.32,.4)}),l==="."&&D()<.22&&e.push({x:c+D(-.6,.6),z:h+D(-.6,.6),rot:D(0,Te),s:D(.3,.42),color:new ne().setHSL(D(.23,.29),.6,D(.42,.5))}),l==="."&&D()<.06&&t.push({x:c+D(-.6,.6),z:h+D(-.6,.6),rot:D(0,Te),s:D(.4,.7)}),l==="."&&D()<.05&&i.push({x:c+D(-.6,.6),z:h+D(-.6,.6),rot:D(0,Te),s:D(.35,.5)})}let s=na(ct({map:Ti.Grass_Common_Short.parts[0].map,roughness:.9,side:yt,color:"#A8E07A"}),1.3,.06,!0);Ys("Grass_Common_Short",e,()=>s),Ys("Flower_3_Group",n,o=>o.matName==="Flowers"?nS():Em("#5DB043"));let r=ct({map:Ti.Pebble_Round_1.parts[0].map,roughness:.9});Ys("Pebble_Round_1",t,()=>r),Ys("Clover_1",i,()=>Em("#5AAE42"))}function nS(){return k.shared.fl||(k.shared.fl=na(ct({map:Ti.Flower_3_Group.parts.find(n=>n.matName==="Flowers").map,alphaTest:.4,side:yt,roughness:.7}),2,.05,!0))}function Em(n){let e="leaves"+n;if(!k.shared[e]){let t=Ti.Fern_1.parts[0];k.shared[e]=na(ct({map:t.map,color:n,alphaTest:.4,side:yt,roughness:.8}),2,.05,!0)}return k.shared[e]}function iS(n,e,t){return ri(2048,256,(i,s,r)=>{fu(n,()=>{let o=(a,l,c,h)=>{let u=D()<.45,d=[];if(u)for(let f=0;f<4;f++)d.push(["t",l-c*(.35+f*.42),c*(.75-f*.15)]);else for(let f=0;f<5;f++)d.push(["c",D(-.5,.5)*c,l-c*D(.7,1.6),c*D(.45,.7)]);i.fillStyle=h;for(let f of[-s,0,s]){let g=a+f;for(let x of d)i.beginPath(),x[0]==="t"?(i.moveTo(g-x[2],x[1]+c*.45),i.lineTo(g,x[1]-c*.5),i.lineTo(g+x[2],x[1]+c*.45)):i.arc(g+x[1],x[2],x[3],0,Te),i.fill();i.fillRect(g-c*.08,l-c*.6,c*.16,r)}};for(let a=0;a<s;a+=D(26,48))o(a,r*.92,D(55,95),t);for(let a=0;a<s;a+=D(30,56))o(a,r,D(48,80),e);i.fillStyle=e,i.fillRect(0,r*.86,s,r)})},{repeat:!0})}function sS(){let n=Math.hypot(k.hx,k.hz);for(let[e,t,i,s,r,o]of[[n+18,15,11,"#2C4A22","#3E6230","#FFFFFF"],[n+34,22,23,"#3A4E38","#4E6448","#E8E0E0"]]){let a=iS(i,s,r);a.repeat.set(4,1);let l=new qt(e,e,t,48,1,!0);l.translate(0,t/2-.5,0);let c=new se(l,new De({map:a,alphaTest:.5,side:Xt,color:o}));k.group.add(c)}}var ia={"\u0413\u0440\u0438\u0431\u044B \u043F\u0440\u043E\u0441\u044B\u043F\u0430\u044E\u0442\u0441\u044F\u2026":"Mushrooms are waking up\u2026","\u0413\u0440\u0438\u0431\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0430":"Mushroom Arena","\u0412\u044B\u0431\u0435\u0440\u0438 \u0433\u0435\u0440\u043E\u044F":"Pick a hero",\u0421\u043F\u043E\u0440\u044B:"Spore Rush","3 \u043D\u0430 3 \xB7 \u0441\u043E\u0431\u0435\u0440\u0438 10 \u0441\u043F\u043E\u0440 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438 \u0438\u0445 15 \u0441\u0435\u043A\u0443\u043D\u0434":"3 vs 3 \xB7 collect 10 spores and hold them for 15 seconds",\u0411\u043E\u0442\u044B:"Bots",\u041B\u0451\u0433\u043A\u0438\u0435:"Easy",\u041E\u0431\u044B\u0447\u043D\u044B\u0435:"Normal",\u0421\u043B\u043E\u0436\u043D\u044B\u0435:"Hard","\u0412 \u0431\u043E\u0439!":"Fight!",\u0413\u0440\u0430\u0444\u0438\u043A\u0430:"Graphics",\u0411\u044B\u0441\u0442\u0440\u0430\u044F:"Fast",\u041A\u0440\u0430\u0441\u0438\u0432\u0430\u044F:"Pretty",\u0417\u0432\u0443\u043A:"Sound",\u042D\u0444\u0444\u0435\u043A\u0442\u044B:"Effects",\u041C\u0443\u0437\u044B\u043A\u0430:"Music",\u041F\u0430\u0443\u0437\u0430:"Pause",\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C:"Resume","\u0412\u044B\u0439\u0442\u0438 \u0432 \u043C\u0435\u043D\u044E":"Quit to menu",\u0410\u0442\u0430\u043A\u0430:"Attack","\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0431\u0435\u0433, \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043A\u0430\u043C\u0435\u0440\u044B. \u041A\u043D\u043E\u043F\u043A\u0430 \u0430\u0442\u0430\u043A\u0438: \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u2014 \u0430\u0432\u0442\u043E\u043F\u0440\u0438\u0446\u0435\u043B, \u0441 \u043F\u0440\u043E\u0442\u044F\u0436\u043A\u043E\u0439 \u2014 \u0446\u0435\u043B\u0438\u0448\u044C\u0441\u044F \u0441\u0430\u043C. \u0417\u0432\u0435\u0437\u0434\u0430 \u2014 \u0441\u0443\u043F\u0435\u0440.":"Left thumb to run, right thumb to turn the camera. Attack button: a quick tap auto-aims, hold and drag to aim yourself. The star is your super.","WASD \u2014 \u0431\u0435\u0433, \u043C\u044B\u0448\u044C \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \u0438 \u043F\u0440\u0438\u0446\u0435\u043B, \u041B\u041A\u041C \u2014 \u0430\u0442\u0430\u043A\u0430, \u041F\u041A\u041C \u0438\u043B\u0438 E \u2014 \u0441\u0443\u043F\u0435\u0440, Esc \u2014 \u043F\u0430\u0443\u0437\u0430.":"WASD to run, mouse to look and aim, LMB to attack, RMB or E for the super, Esc to pause.",\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435:"Health",\u0423\u0440\u043E\u043D:"Damage",\u0414\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C:"Range",\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C:"Speed",\u043C:"m",\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438:"Settings",\u0421\u0440\u0435\u0434\u043D\u044F\u044F:"Medium",\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:"Sensitivity","\u0421\u0447\u0451\u0442\u0447\u0438\u043A FPS":"FPS counter",\u0412\u044B\u043A\u043B:"Off",\u0412\u043A\u043B:"On",\u0413\u043E\u0442\u043E\u0432\u043E:"Done","\u0418\u0433\u0440\u0430 \u0441\u0430\u043C\u0430 \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E, \u0435\u0441\u043B\u0438 \u043A\u0430\u0434\u0440\u043E\u0432 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442. \u041F\u0440\u0438 \u0441\u043C\u0435\u043D\u0435 \u0433\u0440\u0430\u0444\u0438\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044F.":"The game lowers the quality by itself when frames run short. Changing graphics reloads the page.",\u0428\u043B\u044F\u043F\u043D\u0438\u043A:"Capper",\u0411\u0430\u0431\u0430\u0445:"Kaboom",\u0416\u0430\u043B\u043A\u0430:"Stinga",\u043C\u0443\u0445\u043E\u043C\u043E\u0440:"fly agaric","\u0436\u0443\u043A-\u0431\u043E\u043C\u0431\u0430\u0440\u0434\u0438\u0440":"bombardier beetle",\u043E\u0441\u0430:"wasp",\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A:"Shotgun",\u041C\u0435\u0442\u0430\u0442\u0435\u043B\u044C:"Thrower",\u0421\u043D\u0430\u0439\u043F\u0435\u0440:"Sniper","\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A \u0431\u044C\u0451\u0442 \u0432\u0435\u0435\u0440\u043E\u043C: \u0432\u0431\u043B\u0438\u0437\u0438 \u0440\u0430\u0437\u043D\u043E\u0441\u0438\u0442 \u043B\u044E\u0431\u043E\u0433\u043E.":"A spore shotgun that fires in a fan: up close it flattens anyone.","\u041A\u0438\u0434\u0430\u0435\u0442 \u0431\u043E\u043C\u0431\u044B \u043D\u0430\u0432\u0435\u0441\u043E\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B. \u0412\u0437\u0440\u044B\u0432 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0433\u043E\u0440\u044F\u0449\u0443\u044E \u043B\u0443\u0436\u0443.":"Lobs bombs over walls. Each blast leaves a burning puddle.","\u0414\u0430\u043B\u044C\u043D\u043E\u0431\u043E\u0439\u043D\u043E\u0435 \u0436\u0430\u043B\u043E: \u0447\u0435\u043C \u0434\u0430\u043B\u044C\u0448\u0435 \u0446\u0435\u043B\u044C, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u043D\u0435\u0435.":"A long-range stinger: the further the target, the harder it hits.","\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0432\u0435\u0435\u0440":"Spore Fan","\u0413\u0440\u0438\u0431\u043D\u043E\u0439 \u0437\u0430\u043B\u043F":"Mushroom Volley","\u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0437\u0430\u043B\u043F \u043E\u0442\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u0432\u0440\u0430\u0433\u043E\u0432":"a wide volley that knocks enemies back","\u0416\u0443\u0447\u0438\u043D\u0430\u044F \u0431\u043E\u043C\u0431\u0430":"Beetle Bomb","\u041A\u043E\u0432\u0440\u043E\u0432\u0430\u044F \u0431\u043E\u043C\u0431\u0451\u0436\u043A\u0430":"Carpet Bombing","\u043F\u044F\u0442\u044C \u0431\u043E\u043C\u0431 \u043B\u043E\u0436\u0430\u0442\u0441\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u043E\u0439":"five bombs land in a line",\u0416\u0430\u043B\u043E:"Stinger","\u041F\u0440\u043E\u043D\u0437\u0430\u044E\u0449\u0438\u0439 \u043B\u0443\u0447":"Piercing Beam","\u043B\u0443\u0447 \u043F\u0440\u043E\u0448\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0435\u043D\u044B \u0438 \u0432\u0441\u0435\u0445 \u043D\u0430 \u043F\u0443\u0442\u0438":"a beam that goes through walls and everyone in its way","\u0441\u043F\u043E\u0440 \u0432\u0435\u0435\u0440\u043E\u043C":"spores in a fan","\u0431\u043E\u043C\u0431\u0430 \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B, \u0433\u043E\u0440\u044F\u0449\u0430\u044F \u043B\u0443\u0436\u0430":"a bomb over walls, a burning puddle","\u0434\u0430\u043B\u044C\u043D\u0438\u0439 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u0443\u0440\u043E\u043D \u0440\u0430\u0441\u0442\u0451\u0442 \u0441 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C":"a long shot, damage grows with distance",\u041A\u0430\u0442\u044B\u0448:"Rolly",\u043C\u043E\u043A\u0440\u0438\u0446\u0430:"woodlouse",\u0420\u0438\u043A\u043E\u0448\u0435\u0442:"Ricochet","\u0421\u043A\u0430\u0447\u0443\u0449\u0438\u0439 \u043A\u0430\u0442\u044B\u0448":"Bouncing Pebble","\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043A\u0430\u0442\u044B\u0448":"Big Roller","\u0420\u043E\u0433\u0430\u0442\u043A\u0430 \u0441\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0441\u043A\u0430\u0447\u0443\u0449\u0438\u043C\u0438 \u043A\u0430\u0442\u044B\u0448\u0430\u043C\u0438: \u043E\u043D\u0438 \u043E\u0442\u043B\u0435\u0442\u0430\u044E\u0442 \u043E\u0442 \u043A\u0443\u0441\u0442\u043E\u0432 \u0438 \u0434\u043E\u0441\u0442\u0430\u044E\u0442 \u0432\u0440\u0430\u0433\u0430 \u0437\u0430 \u0443\u0433\u043B\u043E\u043C.":"A slingshot that fires bouncing pebbles: they ricochet off hedges and reach enemies around corners.","\u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0448\u0430\u0440 \u0434\u043E\u043B\u0433\u043E \u0441\u043A\u0430\u0447\u0435\u0442 \u043F\u043E \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0430\u043C \u0438 \u0431\u044C\u0451\u0442 \u0432\u0441\u0435\u0445 \u043D\u0430 \u043F\u0443\u0442\u0438":"a huge ball bounces through the corridors for a long time, hitting everyone in its way","\u043E\u0442\u0441\u043A\u0430\u043A\u0438\u0432\u0430\u0435\u0442 \u043E\u0442 \u043A\u0443\u0441\u0442\u043E\u0432 2 \u0440\u0430\u0437\u0430, \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u0441\u043A\u043E\u043A\u0430 \u0431\u044C\u0451\u0442 \u0441\u0438\u043B\u044C\u043D\u0435\u0435":"bounces off hedges twice, hits harder after a bounce",\u0421\u0442\u0440\u0435\u043A\u043E\u0442:"Chirp",\u043A\u0443\u0437\u043D\u0435\u0447\u0438\u043A:"grasshopper",\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0447\u0438\u043A:"Gunner","\u0421\u043F\u043E\u0440\u043E\u0432\u0430\u044F \u043E\u0447\u0435\u0440\u0435\u0434\u044C":"Spore Burst",\u0421\u0442\u0440\u0435\u043A\u043E\u0442\u043D\u044F:"Chirp Storm","\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442 \u0431\u044C\u0451\u0442 \u043E\u0447\u0435\u0440\u0435\u0434\u044F\u043C\u0438. \u0414\u0435\u0440\u0436\u0438 \u043A\u043D\u043E\u043F\u043A\u0443 \u2014 \u0440\u0430\u0437\u0431\u0440\u043E\u0441 \u0440\u0430\u0441\u0442\u0451\u0442, \u0441\u0442\u0440\u0435\u043B\u044F\u0439 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u043C\u0438 \u043E\u0447\u0435\u0440\u0435\u0434\u044F\u043C\u0438.":"A spore gun that fires in bursts. Hold the trigger and the spread grows: fire in short bursts.","4 \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u0441\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0438 \u0442\u043E\u0447\u043D\u0435\u0435, \u043E\u0447\u0435\u0440\u0435\u0434\u0438 \u0434\u043B\u0438\u043D\u043D\u0435\u0435":"for 4 seconds fires faster and tighter, with longer bursts","\u043E\u0447\u0435\u0440\u0435\u0434\u044C \u0438\u0437 5 \u0437\u0430\u0440\u044F\u0434\u043E\u0432, \u0440\u0430\u0437\u0431\u0440\u043E\u0441 \u0440\u0430\u0441\u0442\u0451\u0442 \u043F\u0440\u0438 \u0441\u0442\u0440\u0435\u043B\u044C\u0431\u0435":"a burst of 5 shots, the spread grows as you fire",\u0414\u043E\u0436\u0434\u0435\u0432\u0438\u043A\u0431\u043E\u043B:"Puffball","3 \u043D\u0430 3 \xB7 \u0437\u0430\u043A\u0430\u0442\u0438 \u0433\u0440\u0438\u0431-\u0434\u043E\u0436\u0434\u0435\u0432\u0438\u043A \u0432 \u0432\u043E\u0440\u043E\u0442\u0430 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430":"3 vs 3 \xB7 roll the puffball into the other goal","\u0417\u0430\u043A\u0430\u0442\u0438 \u0433\u0440\u0438\u0431-\u0434\u043E\u0436\u0434\u0435\u0432\u0438\u043A \u0432 \u0432\u043E\u0440\u043E\u0442\u0430 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430: 2 \u0433\u043E\u043B\u0430 \u2014 \u043F\u043E\u0431\u0435\u0434\u0430":"Roll the puffball into the other goal: 2 goals win","\u0413\u043E\u043B!":"Goal!","\u0413\u043E\u043B \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430":"They scored","\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0433\u043E\u043B!":"Golden goal!","\u041A\u0442\u043E \u0437\u0430\u0431\u044C\u0451\u0442 \u2014 \u0442\u043E\u0442 \u043F\u043E\u0431\u0435\u0434\u0438\u043B":"Next goal wins","\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0433\u043E\u043B":"Golden goal","\u041C\u044F\u0447 \u0443 \u0442\u0435\u0431\u044F":"You have the ball","\u0410\u0442\u0430\u043A\u0430 \u2014 \u0443\u0434\u0430\u0440 \u0438\u043B\u0438 \u043F\u0430\u0441, \u0441\u0443\u043F\u0435\u0440 \u2014 \u043F\u0443\u0448\u0435\u0447\u043D\u044B\u0439 \u0443\u0434\u0430\u0440":"Attack kicks or passes, the super is a cannon shot",\u0421\u0447\u0451\u0442:"Score","\u041B\u0435\u0441\u043D\u043E\u0435 \u043F\u043E\u043B\u0435":"Forest Pitch",\u0421\u0443\u043F\u0435\u0440:"Super","\u041F\u041A\u041C \xB7 E":"RMB \xB7 E","\u0412\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437":"Respawn in","\u0429\u0451\u043B\u043A\u043D\u0438 \u043F\u043E \u043F\u043E\u043B\u044E, \u0447\u0442\u043E\u0431\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043C\u044B\u0448\u044C\u044E":"Click the field to aim with the mouse","\u0421\u043E\u0431\u0435\u0440\u0438 10 \u0441\u043F\u043E\u0440 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438 \u0438\u0445 15 \u0441\u0435\u043A\u0443\u043D\u0434":"Collect 10 spores and hold them for 15 seconds",\u0422\u044B:"You","\u0421\u0440\u0435\u0437\u0430\u043B!":"Knocked out!","\u0422\u0435\u0431\u044F \u0441\u0440\u0435\u0437\u0430\u043B\u0438":"You got knocked out","\u0421\u043F\u043E\u0440\u044B \u0443 \u043D\u0430\u0441!":"We have the spores!","\u0414\u0435\u0440\u0436\u0438\u0442\u0435\u0441\u044C 15 \u0441\u0435\u043A\u0443\u043D\u0434":"Hold on for 15 seconds","\u0412\u0440\u0430\u0433 \u043D\u0430\u0431\u0440\u0430\u043B \u0441\u043F\u043E\u0440\u044B!":"The enemy has the spores!","\u041E\u0442\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0445!":"Take them back!","\u041E\u0442\u0441\u0447\u0451\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D":"Countdown reset","\u0414\u0435\u0440\u0436\u0438\u043C \u0441\u043F\u043E\u0440\u044B!":"Hold the spores!","\u0412\u0440\u0430\u0433 \u0443\u043D\u043E\u0441\u0438\u0442 \u0441\u043F\u043E\u0440\u044B!":"The enemy is running off with the spores!","\u041F\u043E\u0431\u0435\u0434\u0430!":"Victory!",\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435:"Defeat",\u041D\u0438\u0447\u044C\u044F:"Draw","\u0415\u0449\u0451 \u0431\u043E\u0439":"Play again","\u0412 \u043C\u0435\u043D\u044E":"Menu","\u0422\u0432\u043E\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0430 \u0441\u043F\u043E\u0440\u044B.":"Your team held the spores.","\u0412\u0440\u0430\u0433\u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0438 \u0441\u043F\u043E\u0440\u044B.":"The enemies held the spores.","\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E: ":"Time is up: ","\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431":"Last Shroom","\u043A\u0430\u0436\u0434\u044B\u0439 \u0441\u0430\u043C \u0437\u0430 \u0441\u0435\u0431\u044F \xB7 10 \u0431\u043E\u0439\u0446\u043E\u0432 \u0432 \u043B\u0430\u0431\u0438\u0440\u0438\u043D\u0442\u0435, \u0442\u0443\u043C\u0430\u043D \u0441\u0436\u0438\u043C\u0430\u0435\u0442\u0441\u044F":"every fighter for themselves \xB7 10 fighters in a maze, the fog closes in","\u041E\u0441\u0442\u0430\u043D\u044C\u0441\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C! \u041B\u043E\u043C\u0430\u0439 \u044F\u0449\u0438\u043A\u0438 \u2014 \u0432 \u043D\u0438\u0445 \u0441\u0438\u043B\u0430":"Be the last one standing! Break crates to power up",\u0422\u0443\u043C\u0430\u043D:"Fog","\u0422\u0443\u043C\u0430\u043D \u0438\u0434\u0451\u0442":"Fog moving",\u0424\u0438\u043D\u0430\u043B:"Final","\u0422\u0443\u043C\u0430\u043D \u0441\u0433\u0443\u0449\u0430\u0435\u0442\u0441\u044F!":"The fog is closing in!","\u0414\u0435\u0440\u0436\u0438\u0441\u044C \u0431\u043B\u0438\u0436\u0435 \u043A \u0446\u0435\u043D\u0442\u0440\u0443":"Stay close to the middle","\u0422\u044B \u2014 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431!":"You are the last shroom standing!","\u0422\u0435\u0431\u044F \u0441\u0440\u0435\u0437\u0430\u043B: ":"Knocked out by ","\u0422\u0435\u0431\u044F \u043D\u0430\u043A\u0440\u044B\u043B \u044F\u0434\u043E\u0432\u0438\u0442\u044B\u0439 \u0442\u0443\u043C\u0430\u043D.":"The poison fog got you.","\u041B\u0435\u0441\u043D\u043E\u0439 \u043B\u0430\u0431\u0438\u0440\u0438\u043D\u0442":"Forest Maze","\u0417\u0430\u0439\u043C\u0438 \u0443\u043A\u0440\u044B\u0442\u0438\u0435":"Find some cover","\u0422\u044B \u0432 \u0442\u043E\u043F-3!":"You are in the top 3!","\u041F\u0443\u0441\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u0435\u0440\u0443\u0442\u0441\u044F \u043F\u0435\u0440\u0432\u044B\u043C\u0438":"Let the others fight first","\u0424\u0438\u043D\u0430\u043B!":"Final!","\u041E\u0434\u0438\u043D \u043D\u0430 \u043E\u0434\u0438\u043D":"One on one",\u041E\u0447\u043A\u0438:"Points",\u0432\u0441\u0435\u0433\u043E:"total",\u0413\u0440\u0443\u0437\u0434\u044C:"Milkcap",\u041E\u043F\u0451\u043D\u043E\u043A:"Honeycap",\u0421\u043C\u043E\u0440\u0447\u043E\u043A:"Morel",\u0420\u044B\u0436\u0438\u043A:"Saffron",\u041C\u0430\u0441\u043B\u0451\u043D\u043E\u043A:"Butterball",\u0412\u043E\u043B\u043D\u0443\u0448\u043A\u0430:"Woolly",\u0421\u0442\u0440\u043E\u0447\u043E\u043A:"Brainy",\u0411\u0435\u043B\u044F\u043D\u043A\u0430:"Whitey",\u0415\u0436\u043E\u0432\u0438\u043A:"Hedgehog",\u0414\u0443\u0431\u043E\u0432\u0438\u043A:"Oakcap",\u0412\u0435\u0448\u0435\u043D\u043A\u0430:"Oyster",\u041A\u043E\u0440\u043E\u0435\u0434:"Bark Beetle",\u0428\u0435\u0440\u0448\u0435\u043D\u044C:"Hornet",\u0416\u0443\u0436\u0435\u043B\u0438\u0446\u0430:"Ground Beetle",\u0429\u0435\u043B\u043A\u0443\u043D:"Clicker",\u0421\u0432\u0435\u0442\u043B\u044F\u0447\u043E\u043A:"Firefly",\u041C\u0435\u0434\u0432\u0435\u0434\u043A\u0430:"Mole Cricket",\u0414\u043E\u043B\u0433\u043E\u043D\u043E\u0441\u0438\u043A:"Weevil"};var rS=["ru","be","kk","uk","uz","ky","tg","hy","az"],Zn={lang:"ru",set:!1},Xl=n=>rS.includes(String(n||"").slice(0,2).toLowerCase())?"ru":"en";Zn.lang=(()=>{try{let n=new URLSearchParams(location.search).get("lang");if(n)return Xl(n)}catch{}return Xl(navigator.language||"ru")})();var sd=/[А-Яа-яЁё]/,id=null;function Lt(n){if(Zn.lang!=="en"||!n||!sd.test(n))return n;if(ia[n]!==void 0)return ia[n];if(!id){let e=Object.keys(ia).sort((t,i)=>i.length-t.length).map(t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));id=new RegExp("(?<![\u0410-\u042F\u0430-\u044F\u0401\u0451])(?:"+e.join("|")+")(?![\u0410-\u042F\u0430-\u044F\u0401\u0451])","g")}return n.replace(id,e=>ia[e])}function Wl(n){if(n.nodeType===3){let e=n.nodeValue;if(sd.test(e)){let t=Lt(e);t!==e&&(n.nodeValue=t)}return}if(n.nodeType===1){for(let e of["title","placeholder","aria-label"]){let t=n.getAttribute(e);t&&sd.test(t)&&n.setAttribute(e,Lt(t))}for(let e=n.firstChild;e;e=e.nextSibling)Wl(e)}}var Kr=null;function ql(n){if(n&&(Zn.lang=n),Zn.set=!0,document.documentElement.lang=Zn.lang,Zn.lang!=="en"){Kr&&(Kr.disconnect(),Kr=null);return}document.title=Lt(document.title),Wl(document.body),Kr||(Kr=new MutationObserver(e=>{for(let t of e)if(t.type==="characterData")Wl(t.target);else for(let i of t.addedNodes)Wl(i)}),Kr.observe(document.body,{subtree:!0,childList:!0,characterData:!0}))}var y={state:"load",time:0,fighters:[],me:null,shots:[],lobs:[],beams:[],puddles:[],pickups:[],match:null,shake:0,paused:!1,hooks:{}};function ht(n,...e){let t=y.hooks[n];if(t)for(let i of t)i(...e)}function It(n,e){(y.hooks[n]||(y.hooks[n]=[])).push(e)}var Fm={sph:new Gt(1,14,10),sphLo:new Gt(1,7,5),cyl:new qt(1,1,1,10),box:new Ei(1,1,1),cone:new Ur(1,1,10),dome:new Gt(1,18,7,0,Math.PI*2,0,Math.PI/2),torus:new Nr(1,.22,6,16),disc:new Un(1,16)};Fm.disc.rotateX(-Math.PI/2);var oS=new P(0,1,0),rd=new P,od=new Ne,ad=new dn,Im=new us,Yl=class{constructor(){this.bones={},this.list=[],this.parts=[],this.root=new Ft}bone(e,t,i=0,s=0,r=0){let o=new Vs;return o.name=e,o.position.set(i,s,r),(t?this.bones[t]:this.root).add(o),this.bones[e]=o,this.list.push(o),o}add(e,t,i,s={}){return this.parts.push({bone:e,geo:t,color:new ne(i),glow:s.glow||0,shade:s.shade??1}),t}prim(e,t,i,s,r,o,a){let l=(typeof t=="string"?Fm[t]:t).clone();Im.set(o?o[0]:0,o?o[1]:0,o?o[2]:0,o&&o[3]||"XYZ");let c=Array.isArray(r)?r:[r,r,r];return l.applyMatrix4(od.compose(rd.set(s[0],s[1],s[2]),ad.setFromEuler(Im),new P(c[0],c[1],c[2]))),this.add(e,l,i,a)}sph(e,t,i,s,r,o){return this.prim(e,"sph",t,i,s,r,o)}limb(e,t,i,s,r,o){let a=Math.hypot(s[0]-i[0],s[1]-i[1],s[2]-i[2]),l=new Dr(r,Math.max(.001,a),3,8);return ad.setFromUnitVectors(oS,rd.set(s[0]-i[0],s[1]-i[1],s[2]-i[2]).normalize()),l.applyMatrix4(od.compose(rd.set((i[0]+s[0])/2,(i[1]+s[1])/2,(i[2]+s[2])/2),ad,new P(1,1,1))),this.add(e,l,t,o)}lathe(e,t,i,s=[0,0,0],r=1,o=16,a){let l=new Ws(i.map(c=>new ie(c[0],c[1])),o);return l.scale(r,r,r),l.translate(s[0],s[1],s[2]),this.add(e,l,t,a)}tube(e,t,i,s,r){let o=new xl(new Go(i.map(a=>new P(a[0],a[1],a[2]))),10,s,5);return this.add(e,o,t,r)}eyes(e,t,i,s,r,o={}){for(let a of[-1,1])this.sph(e,"#FFFFFF",[a*s,t,i],[r,r*1.18,r*.62],null,{shade:1.15}),this.prim(e,"sphLo",o.pupil||"#17131A",[a*s+a*(o.look||0),t-r*.06,i+r*.42],[r*.6,r*.72,r*.34]),this.prim(e,"sphLo","#FFFFFF",[a*s+r*.18,t+r*.28,i+r*.66],r*.17,null,{glow:.6}),o.brow!==void 0&&this.prim(e,"box",o.browColor||"#2A1A12",[a*s,t+r*1.32,i+r*.42],[r*1.7,r*.34,r*.4],[0,0,a*o.brow])}build(e){this.root.updateMatrixWorld(!0);let t=new Ne().copy(this.root.matrixWorld).invert(),i=[];for(let a of this.parts){let l=this.list.indexOf(a.bone),c=a.geo;for(let p of Object.keys(c.attributes))["position","normal","uv"].includes(p)||c.deleteAttribute(p);c.attributes.uv||c.setAttribute("uv",new dt(new Float32Array(c.attributes.position.count*2),2)),c.applyMatrix4(od.multiplyMatrices(t,a.bone.matrixWorld));let h=c.attributes.position.count,u=new Float32Array(h*3),d=new Float32Array(h),f=new Uint16Array(h*4),g=new Float32Array(h*4),x=a.color.clone().multiplyScalar(a.shade);for(let p=0;p<h;p++)u[p*3]=x.r,u[p*3+1]=x.g,u[p*3+2]=x.b,d[p]=a.glow,f[p*4]=l,g[p*4]=1;c.setAttribute("color",new dt(u,3)),c.setAttribute("aGlow",new dt(d,1)),c.setAttribute("skinIndex",new Rr(f,4)),c.setAttribute("skinWeight",new dt(g,4)),i.push(c)}let s=Ko(i);i.forEach(a=>a.dispose()),s.computeBoundingSphere();let r=new Ir(this.list),o=new Gi(s,e);return this.root.add(o),o.bind(r),o.castShadow=!0,o.frustumCulled=!1,{mesh:o,geo:s,skel:r}}};function Dm(){let n=ct({vertexColors:!0,roughness:.5,metalness:0});return n.userData.u={uFlash:{value:0},uRim:{value:new ne("#FFF6DA")},uTint:{value:new ne(0,0,0)}},n.onBeforeCompile=e=>{Object.assign(e.uniforms,n.userData.u),e.vertexShader=`attribute float aGlow;
varying float vGlow;
`+e.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
 vGlow = aGlow;`),e.fragmentShader=`uniform float uFlash; uniform vec3 uRim; uniform vec3 uTint; varying float vGlow;
`+e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      float rim = pow(1.0 - clamp(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 2.6);
      totalEmissiveRadiance += uRim * rim * 0.35 * diffuseColor.rgb + diffuseColor.rgb * vGlow * 1.6 + vec3(uFlash) + uTint;`)},n.customProgramCacheKey=()=>"hero",n}function Um(n=.022){let e=new De({color:"#13200F",side:Xt});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <skinning_vertex>",`#include <skinning_vertex>
 transformed += normalize(objectNormal) * ${n.toFixed(4)};`)},e.customProgramCacheKey=()=>"outline"+n,e}function Nm(n){let e=new De({color:n,depthWrite:!1,depthFunc:jh,fog:!1,blending:Jh,blendSrc:Co,blendDst:Po,opacity:.62});return e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <opaque_fragment>","gl_FragColor = vec4(outgoingLight, opacity);")},e.customProgramCacheKey=()=>"sil",e}var $n={shroom:{name:"\u0428\u043B\u044F\u043F\u043D\u0438\u043A",species:"\u043C\u0443\u0445\u043E\u043C\u043E\u0440",role:"\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A",color:"#E23A2E",hp:3900,speed:5,rad:.42,height:1.35,desc:"\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A \u0431\u044C\u0451\u0442 \u0432\u0435\u0435\u0440\u043E\u043C: \u0432\u0431\u043B\u0438\u0437\u0438 \u0440\u0430\u0437\u043D\u043E\u0441\u0438\u0442 \u043B\u044E\u0431\u043E\u0433\u043E.",attack:{kind:"fan",name:"\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0432\u0435\u0435\u0440",count:5,spread:.5,range:7.2,speed:24,dmg:310,reload:1.5,cd:.42,size:.2,color:"#FF6B4A"},super:{kind:"fan",name:"\u0413\u0440\u0438\u0431\u043D\u043E\u0439 \u0437\u0430\u043B\u043F",desc:"\u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0437\u0430\u043B\u043F \u043E\u0442\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u0432\u0440\u0430\u0433\u043E\u0432",count:11,spread:.85,range:8.6,speed:27,dmg:330,knock:3.4,size:.28,color:"#FFD24A",charge:4600}},beetle:{name:"\u0411\u0430\u0431\u0430\u0445",species:"\u0436\u0443\u043A-\u0431\u043E\u043C\u0431\u0430\u0440\u0434\u0438\u0440",role:"\u041C\u0435\u0442\u0430\u0442\u0435\u043B\u044C",color:"#3B57D6",hp:3e3,speed:4.7,rad:.44,height:1.25,desc:"\u041A\u0438\u0434\u0430\u0435\u0442 \u0431\u043E\u043C\u0431\u044B \u043D\u0430\u0432\u0435\u0441\u043E\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B. \u0412\u0437\u0440\u044B\u0432 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0433\u043E\u0440\u044F\u0449\u0443\u044E \u043B\u0443\u0436\u0443.",attack:{kind:"lob",name:"\u0416\u0443\u0447\u0438\u043D\u0430\u044F \u0431\u043E\u043C\u0431\u0430",range:10,flight:.78,radius:1.7,dmg:820,reload:1.9,cd:.5,puddle:{r:1.35,dps:320,t:1.8},color:"#FF9A2E"},super:{kind:"barrage",name:"\u041A\u043E\u0432\u0440\u043E\u0432\u0430\u044F \u0431\u043E\u043C\u0431\u0451\u0436\u043A\u0430",desc:"\u043F\u044F\u0442\u044C \u0431\u043E\u043C\u0431 \u043B\u043E\u0436\u0430\u0442\u0441\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u043E\u0439",count:5,range:12,flight:.95,radius:1.9,dmg:1050,knock:2.2,step:1.9,color:"#FF5A2E",charge:3900}},wasp:{name:"\u0416\u0430\u043B\u043A\u0430",species:"\u043E\u0441\u0430",role:"\u0421\u043D\u0430\u0439\u043F\u0435\u0440",color:"#F5C21B",hp:2500,speed:5.2,rad:.4,height:1.45,hover:.22,desc:"\u0414\u0430\u043B\u044C\u043D\u043E\u0431\u043E\u0439\u043D\u043E\u0435 \u0436\u0430\u043B\u043E: \u0447\u0435\u043C \u0434\u0430\u043B\u044C\u0448\u0435 \u0446\u0435\u043B\u044C, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u043D\u0435\u0435.",attack:{kind:"needle",name:"\u0416\u0430\u043B\u043E",range:15,speed:40,dmg:900,dmgFar:1650,reload:1.9,cd:.5,size:.16,color:"#FFB21E"},super:{kind:"beam",name:"\u041F\u0440\u043E\u043D\u0437\u0430\u044E\u0449\u0438\u0439 \u043B\u0443\u0447",desc:"\u043B\u0443\u0447 \u043F\u0440\u043E\u0448\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0435\u043D\u044B \u0438 \u0432\u0441\u0435\u0445 \u043D\u0430 \u043F\u0443\u0442\u0438",range:21,width:.75,dmg:2100,windup:.38,color:"#FFE15A",charge:3600}},roly:{name:"\u041A\u0430\u0442\u044B\u0448",species:"\u043C\u043E\u043A\u0440\u0438\u0446\u0430",role:"\u0420\u0438\u043A\u043E\u0448\u0435\u0442",color:"#6E7FA3",hp:3500,speed:5,rad:.42,height:1.3,desc:"\u0420\u043E\u0433\u0430\u0442\u043A\u0430 \u0441\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0441\u043A\u0430\u0447\u0443\u0449\u0438\u043C\u0438 \u043A\u0430\u0442\u044B\u0448\u0430\u043C\u0438: \u043E\u043D\u0438 \u043E\u0442\u043B\u0435\u0442\u0430\u044E\u0442 \u043E\u0442 \u043A\u0443\u0441\u0442\u043E\u0432 \u0438 \u0434\u043E\u0441\u0442\u0430\u044E\u0442 \u0432\u0440\u0430\u0433\u0430 \u0437\u0430 \u0443\u0433\u043B\u043E\u043C.",attack:{kind:"bounce",name:"\u0421\u043A\u0430\u0447\u0443\u0449\u0438\u0439 \u043A\u0430\u0442\u044B\u0448",range:12,speed:24,dmg:800,bounces:2,ricochet:1.35,reload:1.2,cd:.38,size:.24,color:"#7FE7FF"},super:{kind:"bounce",name:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043A\u0430\u0442\u044B\u0448",desc:"\u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0448\u0430\u0440 \u0434\u043E\u043B\u0433\u043E \u0441\u043A\u0430\u0447\u0435\u0442 \u043F\u043E \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0430\u043C \u0438 \u0431\u044C\u0451\u0442 \u0432\u0441\u0435\u0445 \u043D\u0430 \u043F\u0443\u0442\u0438",range:30,speed:13,dmg:1150,bounces:7,pierce:!0,knock:2.4,size:.5,color:"#B8F4FF",charge:3e3}},hopper:{name:"\u0421\u0442\u0440\u0435\u043A\u043E\u0442",species:"\u043A\u0443\u0437\u043D\u0435\u0447\u0438\u043A",role:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0447\u0438\u043A",color:"#5DB83A",hp:3400,speed:5.3,rad:.4,height:1.35,desc:"\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442 \u0431\u044C\u0451\u0442 \u043E\u0447\u0435\u0440\u0435\u0434\u044F\u043C\u0438. \u0414\u0435\u0440\u0436\u0438 \u043A\u043D\u043E\u043F\u043A\u0443 \u2014 \u0440\u0430\u0437\u0431\u0440\u043E\u0441 \u0440\u0430\u0441\u0442\u0451\u0442, \u0441\u0442\u0440\u0435\u043B\u044F\u0439 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u043C\u0438 \u043E\u0447\u0435\u0440\u0435\u0434\u044F\u043C\u0438.",attack:{kind:"burst",name:"\u0421\u043F\u043E\u0440\u043E\u0432\u0430\u044F \u043E\u0447\u0435\u0440\u0435\u0434\u044C",count:5,gap:.07,spread:.05,bloom:.12,range:9.5,speed:30,dmg:200,reload:1.05,cd:.42,size:.13,color:"#B6FF5A"},super:{kind:"frenzy",name:"\u0421\u0442\u0440\u0435\u043A\u043E\u0442\u043D\u044F",desc:"4 \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u0441\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0438 \u0442\u043E\u0447\u043D\u0435\u0435, \u043E\u0447\u0435\u0440\u0435\u0434\u0438 \u0434\u043B\u0438\u043D\u043D\u0435\u0435",time:4,color:"#E2FF8A",charge:4200}}},Ri=Object.keys($n),Kn=3,sa="#FFF0D9";function zm(n){let e=new Yl,t=e.bones,i={};if(n==="shroom"){e.bone("hips",null,0,.42,0),e.bone("body","hips"),e.bone("head","body",0,.68,0),e.bone("eyes","body",0,.36,.27),e.bone("armL","body",.3,.36,.04),e.bone("armR","body",-.3,.36,.04),e.bone("gun","armR",.04,-.14,.24),e.bone("footL",null,.16,0,0),e.bone("footR",null,-.16,0,0),e.lathe(t.body,sa,[[0,-.36],[.24,-.35],[.31,-.18],[.33,.1],[.31,.4],[.27,.66],[0,.72]]),e.eyes(t.eyes,0,0,.115,.085,{brow:.32}),e.sph(t.body,"#5A2A22",[0,.2,.295],[.06,.035,.03]);for(let r of[-1,1])e.sph(t.body,"#FF9C9C",[r*.19,.25,.25],[.05,.03,.02]);e.prim(t.body,"torus","#F3DFC0",[0,.58,0],[.3,.3,.42],[Math.PI/2,0,0]),e.prim(t.body,"torus","#3FA34D",[0,-.02,0],[.33,.33,.4],[Math.PI/2,0,0]),e.prim(t.body,"box","#2E7A38",[0,-.02,.33],[.12,.1,.04]),e.prim(t.head,"dome","#E0332A",[0,-.05,0],[.66,.46,.66]),e.prim(t.head,"disc","#F6E2C2",[0,-.05,0],[.65,1,.65],[Math.PI,0,0]),e.prim(t.head,"torus","#E9CFA6",[0,-.07,0],[.5,.5,.25],[Math.PI/2,0,0]);let s=[[0,.95],[.9,.55],[2,.6],[3.1,.55],[4.2,.6],[5.3,.55],[.5,.25],[2.6,.25],[4.6,.28],[1.6,.25]];for(let[r,o]of s){let a=Math.cos(r)*Math.cos(o)*.66,l=Math.sin(o)*.46,c=Math.sin(r)*Math.cos(o)*.66,h=new P(a/.44,l/.21,c/.44).normalize(),u=.1+(o>.9?.05:.02),d=new dn().setFromUnitVectors(new P(0,1,0),h),f=new us().setFromQuaternion(d);e.sph(t.head,"#FFF8EC",[a,l-.05,c],[u,u*.3,u],[f.x,f.y,f.z])}e.limb(t.armR,sa,[0,0,0],[.02,-.12,.2],.065),e.sph(t.armR,sa,[.03,-.14,.24],.085),e.limb(t.armL,sa,[0,0,0],[-.12,-.1,.26],.065),e.sph(t.armL,sa,[-.15,-.11,.33],.085),e.prim(t.gun,"box","#8A5A32",[0,0,-.08],[.1,.13,.26]),e.prim(t.gun,"cyl","#5E8F3A",[0,.03,.2],[.07,.36,.07],[Math.PI/2,0,0]),e.prim(t.gun,"cone","#C9A24A",[0,.03,.44],[.15,.2,.15],[-Math.PI/2,0,0]),e.prim(t.gun,"torus","#E7C35C",[0,.03,.54],[.14,.14,.14]),e.sph(t.gun,"#9BFF6A",[0,.13,.08],[.07,.07,.1],null,{glow:.7}),i.muzzle=[0,.03,.56];for(let r of["L","R"])e.sph(t["foot"+r],"#7A4A2A",[0,.07,.03],[.11,.08,.15])}else if(n==="beetle"){e.bone("hips",null,0,.4,0),e.bone("body","hips"),e.bone("elyL","body",.04,.3,.1),e.bone("elyR","body",-.04,.3,.1),e.bone("head","body",0,.12,.36),e.bone("antL","head",.08,.17,.08),e.bone("antR","head",-.08,.17,.08),e.bone("eyes","head",0,.05,.15),e.bone("armL","body",.38,.06,.16),e.bone("armR","body",-.38,.06,.16),e.bone("gun","armR",-.02,-.06,.2),e.bone("footL",null,.18,0,0),e.bone("footR",null,-.18,0,0),e.sph(t.body,"#C98A3A",[0,-.05,.02],[.4,.36,.42]);for(let s=0;s<4;s++)e.prim(t.body,"torus","#A86C2C",[0,-.18+s*.07,.06],[.33-Math.abs(s-1.5)*.03,.33-Math.abs(s-1.5)*.03,.2],[Math.PI/2,0,0]);for(let[s,r]of[[1,"elyL"],[-1,"elyR"]]){let o=new Gt(1,16,12,s>0?-Math.PI/2:Math.PI/2,Math.PI,0,Math.PI*.62);o.scale(.45,.46,.5),o.translate(-s*.04,-.2,-.12),e.add(t[r],o,"#2E45B8"),e.prim(t[r],"sph","#7FA0FF",[s*.17,.12,-.08],[.09,.05,.16],[.3,0,s*.4],{glow:.25}),e.prim(t[r],"sph","#22348A",[s*.22,-.02,-.3],[.06,.06,.06])}for(let s=0;s<3;s++)e.sph(t.body,"#2A2A30",[.36-s*.03,-.12,-.12+s*.13],.08),e.prim(t.body,"cyl","#C9A24A",[.37-s*.03,-.04,-.12+s*.13],[.02,.05,.02]);for(let s of[-1,1])for(let r=0;r<2;r++)e.limb(t.body,"#1F1A24",[s*.3,-.1,.12-r*.24],[s*.46,-.32,.16-r*.3],.03);e.sph(t.head,"#1F2340",[0,0,0],[.24,.22,.22]),e.eyes(t.eyes,0,0,.1,.085,{brow:-.25,browColor:"#0E0F1E"});for(let s of[-1,1])e.prim(t.head,"cone","#C98A3A",[s*.08,-.11,.2],[.035,.12,.035],[1.9,0,s*-.5]);for(let[s,r]of[[1,"antL"],[-1,"antR"]])e.tube(t[r],"#1F2340",[[0,0,0],[s*.06,.12,.04],[s*.15,.2,.02],[s*.22,.22,-.04]],.018),e.sph(t[r],"#FF8A3A",[s*.22,.22,-.04],.04,null,{glow:.4});e.limb(t.armR,"#1F1A24",[0,0,0],[-.02,-.06,.18],.05),e.sph(t.armR,"#C98A3A",[-.02,-.07,.2],.07),e.limb(t.armL,"#1F1A24",[0,0,0],[.04,-.08,.18],.05),e.sph(t.armL,"#C98A3A",[.04,-.09,.2],.07),e.sph(t.gun,"#25252C",[0,.06,.08],.15),e.sph(t.gun,"#4A4A58",[.05,.12,.13],.04,null,{glow:.3}),e.prim(t.gun,"cyl","#C9A24A",[0,.22,.08],[.025,.08,.025]),e.sph(t.gun,"#FFD04A",[0,.27,.08],.035,null,{glow:2.5}),i.muzzle=[0,.06,.1];for(let s of["L","R"])e.sph(t["foot"+s],"#C98A3A",[0,.06,.04],[.11,.07,.15])}else if(n==="wasp"){let s=$n.wasp.hover;e.bone("hips",null,0,.62+s,0),e.bone("body","hips"),e.bone("abd","body",0,-.04,-.2),e.bone("head","body",0,.3,.06),e.bone("antL","head",.07,.17,.08),e.bone("antR","head",-.07,.17,.08),e.bone("wingL","body",.1,.17,-.08),e.bone("wingR","body",-.1,.17,-.08),e.bone("armL","body",.2,.06,.1),e.bone("armR","body",-.2,.06,.1),e.bone("gun","armR",.06,-.1,.12),e.bone("footL","hips",.1,-.26,.02),e.bone("footR","hips",-.1,-.26,.02),e.sph(t.body,"#2E2620",[0,.04,0],[.24,.27,.25]),e.prim(t.body,"torus","#F5C21B",[0,.22,.02],[.17,.17,.3],[Math.PI/2,0,0]);let r=[[0,.17],[.12,.23],[.25,.25],[.38,.23],[.5,.18],[.6,.11]];for(let o=0;o<r.length;o++){let[a,l]=r[o];e.prim(t.abd,"sph",o%2?"#26201A":"#F5C21B",[0,-.06-a*.25,-a],[l,l,.09])}e.prim(t.abd,"cone","#26201A",[0,-.22,-.72],[.04,.16,.04],[-1.9,0,0]),e.sph(t.head,"#F5C21B",[0,0,0],[.22,.21,.2]);for(let o of[-1,1])e.sph(t.head,"#1B1A2A",[o*.13,.03,.1],[.1,.14,.09],[0,o*.3,0]),e.prim(t.head,"sphLo","#FFFFFF",[o*.11,.09,.18],.025,null,{glow:.8}),e.prim(t.head,"sphLo","#8FA8FF",[o*.16,-.02,.17],.018,null,{glow:.5});e.prim(t.head,"torus","#5A2A1A",[0,-.09,.17],[.05,.05,.05],[0,0,Math.PI]);for(let[o,a]of[[1,"antL"],[-1,"antR"]])e.tube(t[a],"#26201A",[[0,0,0],[o*.03,.14,.06],[o*.1,.24,.1],[o*.18,.27,.16]],.015),e.sph(t[a],"#26201A",[o*.18,.27,.16],.03);e.limb(t.armR,"#26201A",[0,0,0],[.04,-.08,.1],.035),e.sph(t.armR,"#F5C21B",[.05,-.1,.12],.05),e.limb(t.armL,"#26201A",[0,0,0],[-.1,-.08,.26],.035),e.sph(t.armL,"#F5C21B",[-.11,-.09,.3],.05),e.prim(t.gun,"box","#6B4A2E",[0,-.01,-.1],[.07,.1,.3]),e.prim(t.gun,"cyl","#3A3A44",[0,.02,.32],[.035,.66,.035],[Math.PI/2,0,0]),e.prim(t.gun,"cone","#E8C84A",[0,.02,.72],[.04,.16,.04],[Math.PI/2,0,0]),e.prim(t.gun,"cyl","#26201A",[0,.1,.12],[.04,.26,.04],[Math.PI/2,0,0]),e.sph(t.gun,"#FFB21E",[0,.1,.26],[.04,.04,.02],null,{glow:2}),i.muzzle=[0,.02,.82];for(let o of["L","R"])e.limb(t["foot"+o],"#26201A",[0,.1,0],[0,-.05,.03],.03),e.sph(t["foot"+o],"#26201A",[0,-.07,.05],[.05,.035,.07])}else if(n==="roly"){e.bone("hips",null,0,.42,0),e.bone("body","hips"),e.bone("head","body",0,.42,.1),e.bone("antL","head",.08,.14,.1),e.bone("antR","head",-.08,.14,.1),e.bone("eyes","head",0,.01,.2),e.bone("armL","body",.32,.14,.12),e.bone("armR","body",-.32,.14,.12),e.bone("gun","armR",-.02,-.1,.2),e.bone("footL",null,.16,0,0),e.bone("footR",null,-.16,0,0),e.sph(t.body,"#E4DCEE",[0,.02,.06],[.3,.38,.28]);for(let s=0;s<7;s++){let r=-.3+s*.105,o=.37-Math.abs(s-3)*.035;e.prim(t.body,"sph",s%2?"#5F6E91":"#6E7FA3",[0,r,-.05],[o,.085,o*.92]),e.prim(t.body,"torus","#B9C4DE",[0,r+.03,-.05],[o*.93,o*.86,.09],[Math.PI/2,0,0])}for(let s of[-1,1])e.prim(t.body,"sph","#56638A",[s*.12,-.36,-.2],[.07,.05,.12],[.4,0,0]);for(let s of[-1,1])for(let r=0;r<3;r++)e.limb(t.body,"#4A5575",[s*.24,-.1+r*.12,.14],[s*.36,-.2+r*.12,.24],.022);e.sph(t.head,"#E4DCEE",[0,-.03,.04],[.21,.17,.18]),e.prim(t.head,"dome","#6E7FA3",[0,.02,-.04],[.24,.2,.23],[.5,0,0]),e.prim(t.head,"torus","#B9C4DE",[0,.02,-.04],[.23,.21,.12],[Math.PI/2+.5,0,0]),e.eyes(t.eyes,0,0,.1,.075,{brow:.15,browColor:"#3A4463"}),e.sph(t.head,"#FFB0C0",[.14,-.09,.17],[.04,.025,.02]),e.sph(t.head,"#FFB0C0",[-.14,-.09,.17],[.04,.025,.02]);for(let[s,r]of[[1,"antL"],[-1,"antR"]])e.tube(t[r],"#3A4463",[[0,0,0],[s*.07,.14,.02],[s*.15,.25,.08],[s*.24,.28,.18]],.016),e.sph(t[r],"#7FE7FF",[s*.24,.28,.18],.03,null,{glow:.6});e.limb(t.armR,"#4A5575",[0,0,0],[-.02,-.1,.18],.045),e.sph(t.armR,"#E4DCEE",[-.02,-.11,.2],.065),e.limb(t.armL,"#4A5575",[0,0,0],[-.1,-.06,.3],.045),e.sph(t.armL,"#E4DCEE",[-.12,-.06,.33],.065),e.prim(t.gun,"cyl","#8A5A32",[0,0,.04],[.035,.18,.035]),e.limb(t.gun,"#8A5A32",[0,.08,.04],[.09,.2,.08],.028),e.limb(t.gun,"#8A5A32",[0,.08,.04],[-.09,.2,.08],.028),e.tube(t.gun,"#3A3030",[[.09,.2,.08],[0,.17,-.04],[-.09,.2,.08]],.012),e.sph(t.gun,"#7FE7FF",[0,.18,.02],.05,null,{glow:1.6}),i.muzzle=[0,.19,.12];for(let s of["L","R"])e.sph(t["foot"+s],"#4A5575",[0,.06,.04],[.1,.07,.14])}else if(n==="hopper"){e.bone("hips",null,0,.46,0),e.bone("body","hips"),e.bone("head","body",0,.42,.08),e.bone("antL","head",.07,.16,.06),e.bone("antR","head",-.07,.16,.06),e.bone("eyes","head",0,.04,.17),e.bone("armL","body",.26,.16,.12),e.bone("armR","body",-.26,.16,.12),e.bone("gun","armR",-.02,-.1,.2),e.bone("footL",null,.15,0,0),e.bone("footR",null,-.15,0,0),e.sph(t.body,"#5DB83A",[0,.04,0],[.26,.34,.26]),e.sph(t.body,"#C9EE7A",[0,.02,.1],[.19,.28,.18]);for(let s=0;s<4;s++)e.prim(t.body,"torus","#4A9A2E",[0,-.2+s*.1,.02],[.24-Math.abs(s-1.5)*.02,.24-Math.abs(s-1.5)*.02,.08],[Math.PI/2,0,0]);for(let s of[-1,1])e.prim(t.body,"sph","#3F8A2A",[s*.1,.02,-.2],[.09,.32,.06],[.25,0,s*.12]);for(let s of[-1,1])e.limb(t.body,"#4E9E31",[s*.22,-.12,-.04],[s*.3,.2,-.22],.06),e.limb(t.body,"#4E9E31",[s*.3,.2,-.22],[s*.3,-.38,-.12],.04),e.sph(t.body,"#C9EE7A",[s*.3,.2,-.22],.065);e.sph(t.head,"#5DB83A",[0,0,.04],[.19,.22,.2]),e.eyes(t.eyes,0,0,.12,.085,{brow:-.2,browColor:"#2E5A1E"}),e.prim(t.head,"torus","#2E5A1E",[0,-.1,.18],[.06,.04,.05],[0,0,Math.PI]);for(let[s,r]of[[1,"antL"],[-1,"antR"]])e.tube(t[r],"#2E5A1E",[[0,0,0],[s*.05,.16,-.04],[s*.12,.3,-.16],[s*.2,.36,-.32]],.013),e.sph(t[r],"#B6FF5A",[s*.2,.36,-.32],.025,null,{glow:.6});e.limb(t.armR,"#4E9E31",[0,0,0],[-.02,-.1,.18],.04),e.sph(t.armR,"#C9EE7A",[-.02,-.11,.2],.055),e.limb(t.armL,"#4E9E31",[0,0,0],[-.1,-.08,.3],.04),e.sph(t.armL,"#C9EE7A",[-.12,-.08,.33],.055),e.prim(t.gun,"box","#6B4A2E",[0,0,.02],[.1,.12,.3]),e.prim(t.gun,"cyl","#3E6B2A",[0,-.09,.06],[.09,.07,.09],[Math.PI/2,0,0]),e.prim(t.gun,"cyl","#2E3A2A",[0,.02,.26],[.035,.24,.035],[Math.PI/2,0,0]),e.sph(t.gun,"#B6FF5A",[0,.02,.4],.04,null,{glow:1.8}),e.sph(t.gun,"#B6FF5A",[0,.08,0],[.04,.03,.08],null,{glow:.8}),i.muzzle=[0,.02,.42];for(let s of["L","R"])e.sph(t["foot"+s],"#3F8A2A",[0,.06,.04],[.09,.06,.15])}return{rig:e,parts:i}}function Om(n){let e=ct({color:"#E6F6FF",transparent:!0,opacity:.5,side:yt,roughness:.1,depthWrite:!1,emissive:"#9FD8FF",emissiveIntensity:.15}),t=new Dt(.62,.24);t.translate(.31,0,0),t.rotateX(-Math.PI/2);let i=[];for(let[s,r]of[[1,"wingL"],[-1,"wingR"]])for(let o=0;o<2;o++){let a=new se(t,e);a.scale.set(s*(1-o*.25),1,1-o*.15),a.position.z=-o*.08,a.rotation.y=s*(.35+o*.4),n.bones[r].add(a),i.push(a)}return i}var Jr={shroom:'<svg viewBox="0 0 72 72" aria-hidden="true"><rect x="22" y="34" width="28" height="30" rx="12" fill="#FFF0D9"/><circle cx="30" cy="45" r="3.4" fill="#17131A"/><circle cx="42" cy="45" r="3.4" fill="#17131A"/><path d="M25 39l8 3M47 39l-8 3" stroke="#2A1A12" stroke-width="3" stroke-linecap="round"/><path d="M4 36Q36-8 68 36Z" fill="#E0332A"/><circle cx="20" cy="24" r="4.5" fill="#FFF8EC"/><circle cx="36" cy="13" r="4" fill="#FFF8EC"/><circle cx="53" cy="25" r="4.5" fill="#FFF8EC"/><rect x="22" y="55" width="28" height="5" rx="2" fill="#3FA34D"/></svg>',beetle:'<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="36" cy="44" rx="25" ry="22" fill="#2E45B8"/><path d="M36 22V66" stroke="#1B2A78" stroke-width="3"/><ellipse cx="25" cy="38" rx="5" ry="8" fill="#7FA0FF" opacity=".7"/><circle cx="36" cy="24" r="13" fill="#1F2340"/><circle cx="30" cy="22" r="5" fill="#fff"/><circle cx="42" cy="22" r="5" fill="#fff"/><circle cx="31" cy="23" r="2.6" fill="#17131A"/><circle cx="41" cy="23" r="2.6" fill="#17131A"/><path d="M30 12Q24 2 16 4M42 12Q48 2 56 4" stroke="#1F2340" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="16" cy="4" r="3" fill="#FF8A3A"/><circle cx="56" cy="4" r="3" fill="#FF8A3A"/><circle cx="60" cy="56" r="8" fill="#25252C"/><circle cx="62" cy="46" r="2.5" fill="#FFD04A"/></svg>',wasp:'<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="17" cy="30" rx="15" ry="7" fill="#DDF2FF" opacity=".8" transform="rotate(-25 17 30)"/><ellipse cx="55" cy="30" rx="15" ry="7" fill="#DDF2FF" opacity=".8" transform="rotate(25 55 30)"/><ellipse cx="36" cy="55" rx="12" ry="14" fill="#F5C21B"/><path d="M25 52H47M26 60H46" stroke="#26201A" stroke-width="4.5"/><circle cx="36" cy="30" r="14" fill="#F5C21B"/><ellipse cx="29" cy="30" rx="5.5" ry="7.5" fill="#1B1A2A"/><ellipse cx="43" cy="30" rx="5.5" ry="7.5" fill="#1B1A2A"/><circle cx="28" cy="27" r="1.8" fill="#fff"/><circle cx="42" cy="27" r="1.8" fill="#fff"/><path d="M32 39Q36 42 40 39" stroke="#5A2A1A" stroke-width="2" fill="none"/><path d="M31 17Q27 7 22 6M41 17Q45 7 50 6" stroke="#26201A" stroke-width="2.5" fill="none"/></svg>'};Jr.roly='<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="36" cy="46" rx="22" ry="22" fill="#6E7FA3"/><path d="M15 36Q36 30 57 36M14 46Q36 40 58 46M16 56Q36 50 56 56" stroke="#B9C4DE" stroke-width="3.5" fill="none"/><ellipse cx="36" cy="25" rx="15" ry="12" fill="#6E7FA3"/><circle cx="30" cy="25" r="5" fill="#fff"/><circle cx="42" cy="25" r="5" fill="#fff"/><circle cx="31" cy="26" r="2.6" fill="#17131A"/><circle cx="41" cy="26" r="2.6" fill="#17131A"/><path d="M29 15Q22 4 12 8M43 15Q50 4 60 8" stroke="#3A4463" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="12" cy="8" r="3" fill="#7FE7FF"/><circle cx="60" cy="8" r="3" fill="#7FE7FF"/><path d="M58 50V64M58 52L52 44M58 52L64 44" stroke="#8A5A32" stroke-width="3" stroke-linecap="round"/><circle cx="58" cy="45" r="3.4" fill="#7FE7FF"/></svg>';Jr.hopper='<svg viewBox="0 0 72 72" aria-hidden="true"><path d="M14 62L22 30L30 62" stroke="#4E9E31" stroke-width="5" fill="none" stroke-linejoin="round"/><path d="M58 62L50 30L42 62" stroke="#4E9E31" stroke-width="5" fill="none" stroke-linejoin="round"/><ellipse cx="36" cy="48" rx="15" ry="18" fill="#5DB83A"/><ellipse cx="36" cy="50" rx="9" ry="13" fill="#C9EE7A"/><ellipse cx="36" cy="24" rx="13" ry="14" fill="#5DB83A"/><circle cx="27" cy="22" r="6" fill="#fff"/><circle cx="45" cy="22" r="6" fill="#fff"/><circle cx="28" cy="23" r="3" fill="#17131A"/><circle cx="44" cy="23" r="3" fill="#17131A"/><path d="M30 31Q36 35 42 31" stroke="#2E5A1E" stroke-width="2.5" fill="none"/><path d="M31 12Q26 2 16 2M41 12Q46 2 56 2" stroke="#2E5A1E" stroke-width="2.2" fill="none"/><rect x="50" y="44" width="16" height="7" rx="2" fill="#6B4A2E"/><circle cx="68" cy="47" r="3" fill="#B6FF5A"/></svg>';var aS={me:"#FFD23F",ally:"#4FC3FF",foe:"#FF4D4D"},lS=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.strokeStyle="#fff",e.lineWidth=9,e.beginPath(),e.arc(64,64,52,0,Te),e.stroke(),e.globalAlpha=.25,e.fillStyle="#fff",e.beginPath(),e.arc(64,64,50,0,Te),e.fill();let t=new Dn(n);return t.colorSpace=ut,t})(),ld=new Dt(1.25,1.25);ld.rotateX(-Math.PI/2);var cS=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,31);return t.addColorStop(0,"rgba(0,0,0,.5)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Dn(n)})(),hS=new De({map:cS,transparent:!0,depthWrite:!1});function oa(n){let{rig:e,parts:t}=zm(n),i=Dm(),{mesh:s,geo:r,skel:o}=e.build(i);s.renderOrder=2;let a=new Gi(r,Um());a.bind(o,s.bindMatrix),a.frustumCulled=!1,a.renderOrder=2,e.root.add(a),a.visible=!pt;let l=Nm("#FFFFFF"),c=new Gi(r,l);c.bind(o,s.bindMatrix),c.frustumCulled=!1,c.renderOrder=1,e.root.add(c);let h=new se(ld,new De({map:lS,transparent:!0,depthWrite:!1,color:"#fff",opacity:.9}));h.position.y=.03,h.renderOrder=1,e.root.add(h);let u=null;u=new se(ld,hS),u.position.y=.025,u.scale.setScalar(.85),u.renderOrder=1,e.root.add(u);let d=e.bones;for(let p of e.list)p.userData.rest=p.position.clone(),p.userData.rot=p.rotation.clone();let f=new Mt;f.position.fromArray(t.muzzle),d.gun.add(f);let g=n==="wasp"?Om(e):null;return{id:n,H:$n[n],root:e.root,B:d,mesh:s,ol:a,sil:c,silMat:l,mat:i,ring:h,blob:u,muzzle:f,wings:g,yaw:0,ph:0,lastStep:0,sp:{twist:yn(),leanX:yn(),leanZ:yn(),headX:yn(),headZ:yn(),squash:yn(),kick:yn(),bodyX:yn(),armR:yn(),armL:yn(),ant:yn(),ely:yn(),pop:yn(1),lift:yn(),gunS:yn(1)},prevVX:0,prevVZ:0}}function Zl(n,e){let t=new ne(aS[e]);n.ring.material.color.copy(t),n.silMat.color.copy(e==="foe"?new ne("#FF3B3B"):e==="me"?new ne("#FFE58A"):new ne("#7FD8FF"))}var ra=n=>n.userData.rest;function $l(n,e,t,i){let s=n.B,r=n.sp,o=n.H,a=n.root;if(!e.alive){let O=e.deadT,L=qe(O/.75,0,1);a.position.set(e.x,Math.max(0,Math.sin(Math.min(O/.5,1)*Math.PI)*.7),e.z),a.rotation.set(-L*1.4,n.yaw+O*4,0,"YXZ");let N=O<.55?1+Math.sin(O*18)*.06:Math.max(0,1-(O-.55)/.2);a.scale.setScalar(N),n.ring.visible=!1,n.blob&&(n.blob.visible=!1),a.visible=N>.01,n.mat.userData.u.uFlash.value=O<.1?.8:0;return}a.rotation.x=0,a.rotation.z=0,n.ring.visible=!0,n.blob&&(n.blob.visible=!he.shadows);let l=Math.hypot(e.vx,e.vz),c=l>.4,h=e.atkT<.55||e.supT<.8||e.aiming,u=h||!c?e.aim:Math.atan2(e.vx,e.vz);n.yaw+=qe(Br(n.yaw,u),-t*16,t*16),a.rotation.y=n.yaw,a.position.set(e.x,0,e.z);let d=qe(l/o.speed,0,1),f=n.ph;n.ph+=t*(3+l*2.1),c&&Math.floor(f/Math.PI)!==Math.floor(n.ph/Math.PI)&&(r.squash.v-=2.4*d,r.headX.v+=1.6*d,n.step=!0);let g=Math.sin(n.ph),x=Math.cos(n.ph);if(o.hover)for(let[O,L]of[[s.footL,1],[s.footR,-1]])O.rotation.x=Math.sin(i*3+L)*.25-d*.6;else{let O=.2*d;for(let[L,N]of[[s.footL,1],[s.footR,-1]])L.position.z=ra(L).z+g*N*O,L.position.y=ra(L).y+Math.max(0,x*N)*.14*d,L.rotation.x=-x*N*.6*d}let p=Math.cos(n.yaw),m=Math.sin(n.yaw),v=(e.vx-n.prevVX)/Math.max(t,.001),_=(e.vz-n.prevVZ)/Math.max(t,.001);n.prevVX=e.vx,n.prevVZ=e.vz;let M=e.vx*m+e.vz*p,w=e.vx*p-e.vz*m,S=v*m+_*p;qn(r.leanX,qe(M/o.speed*.16+S*.012,-.3,.35),120,14,t),qn(r.leanZ,qe(-w/o.speed*.2,-.3,.3),120,14,t),qn(r.squash,0,260,13,t),qn(r.headX,0,150,7,t),qn(r.headZ,0,150,7,t),qn(r.kick,0,200,15,t),qn(r.bodyX,0,140,11,t),qn(r.ant,0,90,5,t),qn(r.pop,1,220,12,t),qn(r.lift,0,60,10,t),qn(r.gunS,1,200,12,t),r.headZ.v+=w*.02*t*60*.05,r.headX.v-=S*.002,r.ant.v+=S*.004+r.headX.v*.02;let R=Math.sin(i*2.4+e.id)*.012,F=Math.abs(x)*.07*d;s.hips.position.y=ra(s.hips).y+F+R+r.lift.x+(o.hover?Math.sin(i*4+e.id)*.05:0);let b=r.squash.x,T=Math.max(0,Math.sin(n.ph*2))*.05*d;s.hips.scale.set(1-b*.07-T*.5,1+b*.12+T,1-b*.07-T*.5),s.hips.rotation.x=r.leanX.x+r.bodyX.x,s.hips.rotation.z=r.leanZ.x+Math.sin(n.ph)*.05*d,qn(r.twist,qe(Br(n.yaw,e.aim),-1,1),160,16,t),s.body.rotation.y=r.twist.x,s.head.rotation.x=r.headX.x*.5+(o.hover,0),s.head.rotation.z=r.headZ.x*.5+Math.sin(n.ph)*.06*d;for(let O of["antL","antR"])s[O]&&(s[O].rotation.x=-r.ant.x*.8+Math.sin(i*2+(O==="antL"?0:1))*.06);let U=Math.sin(n.ph)*.5*d*(h?.3:1);s.armL.rotation.set(ra(s.armL).x+U,0,0),s.armR.rotation.set(-U*.3,0,0),s.gun.position.copy(ra(s.gun)),s.gun.position.z-=Math.max(0,r.kick.x)*.08,s.gun.rotation.x=0,s.gun.scale.setScalar(1);let B=o.attack.kind;if(e.atkT<.6){let O=e.atkT;if(B==="lob"){let L=O<.07?-O/.07*2.4:O<.2?-2.4+(O-.07)/.13*3.2:.8*Math.max(0,1-(O-.2)/.3);s.armR.rotation.x=L,s.hips.rotation.x+=O<.07?-.15:O<.3?.18:0,s.gun.scale.setScalar(O<.12?1:Math.min(1,Math.max(0,(O-.35)/.15)))}else{let L=n.id==="shroom"?1.6:1;s.armR.rotation.x+=-r.kick.x*.9*L,s.armL.rotation.x+=-r.kick.x*.5*L,s.gun.position.z-=r.kick.x*.2*L,s.gun.rotation.x=-r.kick.x*.5*L,s.hips.rotation.x-=r.kick.x*.12*L,n.B.abd&&(n.B.abd.rotation.x=r.kick.x*.9)}}if(s.armL.rotation.x+=-r.kick.x*.4,e.supT<1.2){let O=e.supT;if(n.id==="shroom"){let L=O<.12?O/.12:Math.max(0,1-(O-.12)/.3);s.hips.position.y-=L*.12,s.hips.scale.y*=1-L*.12,s.head.rotation.x+=-L*.25}else if(n.id==="beetle"){let L=O<.9?Math.min(1,O/.15):Math.max(0,1-(O-.9)/.3);s.elyL&&(s.elyL.rotation.z=L*.9,s.elyR.rotation.z=-L*.9,s.elyL.rotation.x=s.elyR.rotation.x=-L*.4),s.armL.rotation.x=s.armR.rotation.x=-2.2*L+(O>.15&&O<.6?Math.sin((O-.15)*30)*.5:0),s.hips.position.y+=Math.sin(Math.min(O/.5,1)*Math.PI)*.35}else if(n.id==="roly"){let L=O<.15?O/.15:Math.max(0,1-(O-.15)/.35);s.hips.rotation.x+=L*.9,s.head.rotation.x+=L*.7,s.hips.position.y-=L*.12,s.hips.scale.y*=1-L*.15}else if(n.id==="wasp"){let L=o.super.windup,N=O<L?O/L:Math.max(0,1-(O-L)/.5);s.hips.position.y+=N*.35,s.hips.rotation.x+=-N*.25,n.mat.userData.u.uTint.value.setRGB(.5,.38,.05).multiplyScalar(O<L?O/L:0)}}else n.id==="wasp"&&n.mat.userData.u.uTint.value.setRGB(0,0,0);if(n.id!=="beetle"&&s.elyL&&(s.elyL.rotation.z=0),n.wings){let O=e.supT<o.super.windup+.2?1.6:1,L=Math.sin(i*62*O+e.id)*.55;s.wingL.rotation.z=L,s.wingR.rotation.z=-L,s.abd&&(s.abd.rotation.x+=Math.sin(i*3+e.id)*.08)}if(e.victory){let O=Math.abs(Math.sin(i*5.5+e.id));a.position.y=O*.45,s.armL.rotation.x=s.armR.rotation.x=-2.6+Math.sin(i*11)*.3,s.hips.scale.y*=1+(O<.15?-.12:.05)}else e.defeat&&(s.hips.position.y-=.06,s.head.rotation.x+=.45,s.armL.rotation.x=s.armR.rotation.x=.5);s.eyes&&(n.blink=(n.blink??2+Math.random()*3)-t,n.blink<0?(s.eyes.scale.y=.12,n.blink<-.11&&(n.blink=1.8+Math.random()*3.5)):s.eyes.scale.y=e.flash>.5?.6:1),n.mat.userData.u.uFlash.value=Math.max(0,e.flash)*.55,a.scale.setScalar(Math.max(.01,r.pop.x)),a.visible=!0}var Es={attack(n){n.sp.kick.v+=n.id==="wasp"?9:n.id==="shroom"?13:n.id==="roly"?8:n.id==="hopper"?3:0,n.sp.bodyX.v-=2.2,n.sp.headX.v-=3,n.sp.ant.v+=3},super(n){n.sp.kick.v+=22,n.sp.bodyX.v-=5,n.sp.headX.v-=6,n.sp.ant.v+=6,n.sp.squash.v+=3},hurt(n,e,t){n.sp.bodyX.v-=5,n.sp.headX.v-=7,n.sp.headZ.v+=(Math.random()-.5)*8,n.sp.squash.v-=3,n.sp.ant.v+=5},spawn(n){n.sp.pop.x=.05,n.sp.pop.v=0},land(n){n.sp.squash.v-=4}};var jl=class{constructor(e,t){this.max=e,this.n=0;let i=new Dt(1,1),s=new Tl;s.index=i.index,s.setAttribute("position",i.attributes.position),s.setAttribute("uv",i.attributes.uv),this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e*2),s.setAttribute("iPos",new mi(this.pos,3).setUsage(Fl)),s.setAttribute("iCol",new mi(this.col,4).setUsage(Fl)),s.setAttribute("iSize",new mi(this.size,2).setUsage(Fl)),s.instanceCount=0,this.geo=s;let r=new ft({transparent:!0,depthWrite:!1,blending:t?_n:os,vertexShader:`attribute vec3 iPos; attribute vec4 iCol; attribute vec2 iSize; varying vec4 vCol; varying vec2 vUv; varying float vSoft;
        void main(){ vCol = iCol; vUv = uv; vSoft = iSize.y;
          vec4 mv = modelViewMatrix * vec4(iPos, 1.0); mv.xy += position.xy * min(iSize.x, max(-mv.z, 0.1) * 0.22); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec4 vCol; varying vec2 vUv; varying float vSoft;
        void main(){ float d = length(vUv - 0.5) * 2.0; float a = clamp(1.0 - d, 0.0, 1.0); a = vSoft > 0.5 ? a * a : smoothstep(0.0, 0.25, a);
          gl_FragColor = vec4(vCol.rgb, vCol.a * a);
          #include <colorspace_fragment>
        }`});this.mesh=new se(s,r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,ue.add(this.mesh),this.p=[]}emit(e){this.p.length>=this.max&&this.p.shift(),this.p.push(e)}update(e){let t=this.p,i=0;for(let s=0;s<t.length;s++){let r=t[s];if(r.t+=e,r.t>=r.life)continue;r.vy-=r.grav*e;let o=Math.exp(-r.drag*e);r.vx*=o,r.vy*=o,r.vz*=o,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.y<.02&&r.grav>0&&(r.y=.02,r.vy*=-.3,r.vx*=.7,r.vz*=.7);let a=r.t/r.life;this.pos[i*3]=r.x,this.pos[i*3+1]=r.y,this.pos[i*3+2]=r.z,this.col[i*4]=r.r,this.col[i*4+1]=r.g,this.col[i*4+2]=r.b,this.col[i*4+3]=r.a*(a<.1?a/.1:1-Math.pow((a-.1)/.9,1.6)),this.size[i*2]=r.s0+(r.s1-r.s0)*a,this.size[i*2+1]=r.soft,t[i++]=r}t.length=i,this.geo.instanceCount=i;for(let s of["iPos","iCol","iSize"])this.geo.attributes[s].needsUpdate=!0}clear(){this.p.length=0,this.geo.instanceCount=0}},St=new jl(900,!0),On=new jl(500,!1),Kl=new ne;function bt(n,e,t,i,s){Kl.set(s.color||"#fff");let r=pt?Math.ceil((s.n||1)*.6):s.n||1,o=pt?.85:1;for(let a=0;a<r;a++){let l=D(0,Te),c=D(s.upMin??-.3,s.upMax??1),h=D(s.spMin??0,s.sp??2),u=s.jitter?D(1-s.jitter,1+s.jitter):1;n.emit({x:e+D(-1,1)*(s.spread||0),y:t+D(-1,1)*(s.spreadY??s.spread??0),z:i+D(-1,1)*(s.spread||0),vx:Math.cos(l)*h*Math.sqrt(1-c*c*.5)+(s.vx||0),vy:c*h+(s.vy||0),vz:Math.sin(l)*h*Math.sqrt(1-c*c*.5)+(s.vz||0),life:D(s.life*.7,s.life*1.3),t:0,s0:s.s0*o*D(.8,1.2),s1:(s.s1??s.s0)*o*D(.8,1.2),r:Kl.r*u,g:Kl.g*u,b:Kl.b*u,a:s.a??1,grav:s.grav||0,drag:s.drag??2,soft:s.soft?1:0})}}var km=new fs(.82,1,40);km.rotateX(-Math.PI/2);var Bm=new Un(1,28);Bm.rotateX(-Math.PI/2);var jr=[];function Ci(n,e,t,i,s,r,o=.06){let a=new se(km,new De({color:r,transparent:!0,depthWrite:!1,blending:_n}));a.position.set(n,o,e),a.renderOrder=4,ue.add(a),jr.push({m:a,r0:t,r1:i,life:s,t:0})}var uS=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,62);t.addColorStop(0,"rgba(20,14,8,.85)"),t.addColorStop(.6,"rgba(30,22,10,.5)"),t.addColorStop(1,"rgba(30,22,10,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);for(let s=0;s<14;s++){let r=D(0,Te);e.strokeStyle="rgba(20,14,8,.4)",e.lineWidth=D(2,5),e.beginPath(),e.moveTo(64,64),e.lineTo(64+Math.cos(r)*D(40,62),64+Math.sin(r)*D(40,62)),e.stroke()}let i=new Dn(n);return i.colorSpace=ut,i})(),ws=[];function dS(n,e,t){let i=new se(Bm,new De({map:uS,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));if(i.position.set(n,.035,e),i.scale.setScalar(t),i.rotation.y=D(0,Te),i.renderOrder=1,ue.add(i),ws.push({m:i,t:0,life:6}),ws.length>14){let s=ws.shift();ue.remove(s.m),s.m.material.dispose()}}var Jl=new P,Qr=[];function aa(n,e,t,i,s){let r=document.createElement("div");r.className="dnum "+(s||""),r.textContent=s==="heal"?"+"+Math.round(i):Math.round(i),J("hud-world").appendChild(r),Qr.push({el:r,x:n+D(-.3,.3),y:e,z:t+D(-.3,.3),t:0,life:.9})}function Hm(n){St.update(n),On.update(n);for(let i=jr.length-1;i>=0;i--){let s=jr[i];s.t+=n;let r=s.t/s.life;if(r>=1){ue.remove(s.m),s.m.material.dispose(),jr.splice(i,1);continue}let o=1-Math.pow(1-r,3);s.m.scale.setScalar(s.r0+(s.r1-s.r0)*o),s.m.material.opacity=1-r}for(let i=ws.length-1;i>=0;i--){let s=ws[i];s.t+=n,s.m.material.opacity=Math.min(1,(s.life-s.t)/1.5),s.t>s.life&&(ue.remove(s.m),s.m.material.dispose(),ws.splice(i,1))}let e=innerWidth,t=innerHeight;for(let i=Qr.length-1;i>=0;i--){let s=Qr[i];if(s.t+=n,s.t>s.life){s.el.remove(),Qr.splice(i,1);continue}if(Jl.set(s.x,s.y+s.t*1.2,s.z).project(st),Jl.z>1){s.el.style.opacity=0;continue}let r=s.t/s.life,o=r<.15?.6+r/.15*.7:1.3-Math.min(.3,(r-.15)*1.2);s.el.style.transform=`translate(${(Jl.x*.5+.5)*e}px,${(-Jl.y*.5+.5)*t}px) translate(-50%,-50%) scale(${o.toFixed(2)})`,s.el.style.opacity=r>.7?(1-r)/.3:1}}function cd(){St.clear(),On.clear();for(let n of jr)ue.remove(n.m),n.m.material.dispose();jr.length=0;for(let n of ws)ue.remove(n.m),n.m.material.dispose();ws.length=0;for(let n of Qr)n.el.remove();Qr.length=0}function Ql(n,e,t,i="#FF9A2E"){bt(St,n,.4,e,{n:14,color:"#FFE6A0",sp:t*4.5,upMin:.1,upMax:1,life:.35,s0:.45,s1:.1,drag:4}),bt(St,n,.5,e,{n:6,color:i,sp:t*2,upMin:.2,life:.45,s0:t*.8,s1:t*.3,drag:3,soft:!0,a:.85}),bt(On,n,.5,e,{n:6,color:"#5A5048",sp:t*1.5,upMin:.2,life:1,s0:t*.55,s1:t*1.2,drag:2.5,soft:!0,a:.5,vy:.8,jitter:.2}),bt(On,n,.2,e,{n:6,color:"#6B4A2E",sp:5,upMin:.5,life:.8,s0:.12,s1:.08,grav:14,drag:.5}),Ci(n,e,.3,t*1.15,.4,i),dS(n,e,t*.9),y.shake=Math.max(y.shake,.35)}function eo(n,e,t,i){bt(St,n,e,t,{n:8,color:i,sp:5,life:.25,s0:.22,s1:.04,drag:5}),bt(St,n,e,t,{n:1,color:"#FFFFFF",sp:0,life:.12,s0:.9,s1:.3,soft:!0,a:.8})}function Ki(n,e,t,i,s=30){bt(St,n,e,t,{n:s,color:i,sp:4,life:.9,s0:.3,s1:.05,drag:2.5,grav:-1,soft:!0,jitter:.3}),bt(On,n,e,t,{n:12,color:"#F4F0E0",sp:2.5,life:1,s0:.4,s1:.9,drag:3,soft:!0,a:.6,vy:.6})}function Gm(n,e,t=3){bt(On,n,.08,e,{n:t,color:"#D9C49A",sp:.8,upMin:.2,life:.5,s0:.15,s1:.4,drag:3,soft:!0,a:.35})}var Re={ctx:null,master:null,sfxGain:null,music:null,buffers:{},muted:Pt.get("muted",!1),musicOn:Pt.get("music",!0),sfxOn:Pt.get("sfx",!0),noise:null,ad:!1},Wm=["shot_shotgun","shot_pop","shot_beam","shot_throw","boom","boom_big","hit","hit2","hit_wall","hurt","die","super_ready","super","gem","gem_drop","heal","empty","click","select","confirm","step","rustle","countdown","start","win","lose","respawn","kill"],fd={};function Xm(){return Promise.all(Wm.map(n=>fetch("assets/sfx/"+n+".mp3").then(e=>e.arrayBuffer()).then(e=>{fd[n]=e}).catch(()=>{})))}function to(){if(Re.ctx){Re.ctx.state==="suspended"&&!Re.ad&&!document.hidden&&Re.ctx.resume();return}try{let n=new(window.AudioContext||window.webkitAudioContext);Re.ctx=n;let e=n.createDynamicsCompressor();e.threshold.value=-10,e.knee.value=12,e.ratio.value=3,e.attack.value=.005,e.release.value=.2,e.connect(n.destination),Re.master=n.createGain(),Re.master.gain.value=Re.muted?0:.8,Re.master.connect(e),Re.sfxGain=n.createGain(),Re.sfxGain.gain.value=Re.sfxOn?1:0,Re.sfxGain.connect(Re.master),Re.noise=n.createBuffer(1,n.sampleRate,n.sampleRate);let t=Re.noise.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1;for(let i of Wm)fd[i]&&n.decodeAudioData(fd[i].slice(0),s=>{Re.buffers[i]=s},()=>{});mS()}catch{Re.ctx=null}}function qm(n){Re.sfxOn=n,Pt.set("sfx",n),Re.sfxGain&&(Re.sfxGain.gain.value=n?1:0)}function Ym(n){Re.musicOn=n,Pt.set("music",n),nn.gain&&(nn.gain.gain.value=n?nn.vol:0)}function tc(n){if(Re.ctx)try{n?Re.ctx.suspend():Re.ctx.resume()}catch{}}var hd={},ud=0,fS={shot_shotgun:.55,shot_pop:.4,shot_beam:.45,shot_throw:.7,boom:.75,boom_big:.95,hit:.6,hit2:.5,hit_wall:.35,hurt:.55,die:.7,super_ready:.5,super:.55,gem:.45,gem_drop:.45,heal:.3,empty:.4,click:.5,select:.5,confirm:.5,step:.18,rustle:.35,countdown:.6,start:.8,win:.7,lose:.7,respawn:.4,kill:.55};function we(n,e,t=1,i=1){let s=Re.ctx;if(!s||Re.muted||!Re.sfxOn)return;let r=Re.buffers[n];if(!r)return;let o=performance.now();if(hd[n]&&o-hd[n]<70||(hd[n]=o,ud>=12))return;let a=(fS[n]||.5)*t,l=0;if(e&&e!==y.me){let u=y.me&&y.me.alive?y.me.x:st.position.x,d=y.me&&y.me.alive?y.me.z:st.position.z,f=e.x-u,g=e.z-d,x=Math.hypot(f,g);if(a*=qe(1.4/(1+x*.12),0,1),a<.03)return;let p=st.rotation.y;l=qe((f*Math.cos(p)-g*Math.sin(p))/(x+4),-.7,.7)}let c=s.createBufferSource();c.buffer=r,c.playbackRate.value=i;let h=s.createGain();if(h.gain.value=a,c.connect(h),l&&s.createStereoPanner){let u=s.createStereoPanner();u.pan.value=l,h.connect(u),u.connect(Re.sfxGain)}else h.connect(Re.sfxGain);ud++,c.onended=()=>ud--,c.start()}var nn={gain:null,next:0,step:0,timer:null,vol:.11},dd=n=>440*Math.pow(2,(n-69)/12),pS=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]];function ec(n,e,t,i,s,r){let o=Re.ctx,a=o.createOscillator(),l=o.createGain();return a.type=e,a.frequency.setValueAtTime(t,n),l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(i,n+(r||.01)),l.gain.exponentialRampToValueAtTime(1e-4,n+(r||.01)+s),a.connect(l),l.connect(nn.gain),a.start(n),a.stop(n+s+.2),a}function Vm(n,e,t,i,s){let r=Re.ctx,o=r.createBufferSource();o.buffer=Re.noise;let a=r.createBiquadFilter();a.type=e,a.frequency.value=t;let l=r.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(i,n+.004),l.gain.exponentialRampToValueAtTime(1e-4,n+s),o.connect(a),a.connect(l),l.connect(nn.gain),o.start(n,Math.random()*.5),o.stop(n+s+.05)}function mS(){if(nn.timer)return;nn.gain=Re.ctx.createGain(),nn.gain.gain.value=Re.musicOn?nn.vol:0;let n=Re.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2400,n.Q.value=.5,nn.gain.connect(n),n.connect(Re.master),nn.next=Re.ctx.currentTime+.15,nn.timer=setInterval(gS,90)}function gS(){let n=Re.ctx;if(!n||!Re.musicOn||Re.muted||n.state!=="running"){n&&(nn.next=Math.max(nn.next,n.currentTime+.05));return}let e=y.state==="play"||y.state==="countdown",t=e&&y.match&&y.match.hot,i=60/(e?t?142:128:96)/2;for(;nn.next<n.currentTime+.35;){let s=nn.next,r=nn.step,o=Math.floor(r/8)%4,a=r%8,l=pS[o],c=l[[0,1,2,1,2,1,0,2][a]]+12+(a===4&&o%2?12:0);if((!e||a%2===0||t)&&ec(s,"triangle",dd(c),e?.035:.045,e?.14:.3),(a===0||e&&a===4)&&ec(s,"triangle",dd(l[0]-12),e?.12:.07,i*(e?3.4:7),.02),!e&&a===0)for(let h of l)ec(s,"sine",dd(h),.016,i*7.6,.5);e&&(a%4===0&&ec(s,"sine",130,.3,.16,.003).frequency.exponentialRampToValueAtTime(45,s+.14),a%4===2&&Vm(s,"bandpass",1900,.1,.12),Vm(s,"bandpass",6e3,a%2?.008:.016,.03)),nn.next+=i,nn.step++}}var Bt={fighters:10,wait:25,shrink:120,r1:3.5,dps:650,dpsGrow:6,hp:1.6,dmg:.75,calm:40,power:{dmg:.1,hp:400}},xS=n=>n>=8?.75:n>=6?1:n>=4?1.5:n===3?2.2:3,Cn={group:null,wall:null,floor:null,u:{uR:{value:40},uTime:{value:0}}},Zm="varying vec3 vW; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",$m=`float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
  float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }`;function jm(){let n=new Ft,e=new se(new qt(1,1,1,pt?48:96,1,!0).translate(0,.5,0),new ft({transparent:!0,depthWrite:!1,side:yt,uniforms:Cn.u,vertexShader:Zm,fragmentShader:`uniform float uTime; varying vec3 vW; varying vec2 vUv; ${$m}
      void main(){ float a = atan(vW.z, vW.x) * 9.0;
        float m = n(vec2(a, vW.y * 0.9 - uTime * 0.6)) * 0.6 + n(vec2(a * 2.3 + uTime * 0.3, vW.y * 2.0 - uTime)) * 0.4;
        float k = clamp(1.0 - vUv.y, 0.0, 1.0); k = k * k;
        vec3 col = mix(vec3(0.42, 0.85, 0.3), vec3(0.62, 0.35, 0.95), m);
        gl_FragColor = vec4(col * 1.2, clamp((0.25 + m * 0.6) * k + 0.08 * k, 0.0, 0.85));
        #include <colorspace_fragment>
      }`}));e.scale.set(40,6,40),e.renderOrder=4,e.frustumCulled=!1;let t=new se(new Dt(140,140).rotateX(-Math.PI/2),new ft({transparent:!0,depthWrite:!1,uniforms:Cn.u,vertexShader:Zm,fragmentShader:`uniform float uR; uniform float uTime; varying vec3 vW; ${$m}
      void main(){ float d = length(vW.xz); if(d < uR - 0.6) discard;
        float k = clamp((d - uR + 0.6) / 2.0, 0.0, 1.0);
        float m = n(vW.xz * 0.35 + vec2(uTime * 0.25, -uTime * 0.18)) * 0.7 + n(vW.xz * 1.1 - uTime * 0.4) * 0.3;
        vec3 col = mix(vec3(0.35, 0.75, 0.25), vec3(0.55, 0.3, 0.85), m);
        gl_FragColor = vec4(col, k * (0.32 + m * 0.3));
        #include <colorspace_fragment>
      }`}));t.position.y=.09,t.renderOrder=3,t.frustumCulled=!1,n.add(e,t),ue.add(n),Object.assign(Cn,{group:n,wall:e,floor:t})}function Qm(){Cn.group&&(ue.remove(Cn.group),Cn.group.traverse(n=>{n.geometry&&(n.geometry.dispose(),n.material.dispose())}),Cn.group=null)}var ic=new gl(.24,0),e0=ct({color:"#FFC93C",emissive:"#FF9A1E",emissiveIntensity:1.3,roughness:.25,flatShading:!0}),t0=new De({color:new ne("#FFF4C0").multiplyScalar(2),toneMapped:!1}),n0=new Dt(.7,.7).rotateX(-Math.PI/2),i0=new De({color:"#000",transparent:!0,opacity:.25,depthWrite:!1});function s0(n,e,t,i,s=4){let r=new se(ic,e0);r.castShadow=!pt;let o=new se(ic,t0);o.scale.setScalar(.45),r.add(o);let a=new se(n0,i0);a.renderOrder=1,a.scale.setScalar(.6),ue.add(r,a),y.pickups.push({kind:"power",x:n,z:e,y:.6,vx:t,vz:i,vy:s,t:0,m:r,sh:a,landed:!1,ph:D(0,Te)})}function vS(n){let e=y.pickups[n];ue.remove(e.m,e.sh),y.pickups.splice(n,1)}function r0(){let n=Math.hypot(k.hx,k.hz)+1.5;y.match={mode:"br",t:0,over:!1,winner:null,respawn:!1,count:[0,0],alive:Bt.fighters,place:0,fog:{r:n,r0:n,tick:0,shrinking:!1},crates:0},Qm(),jm(),Cn.u.uR.value=n}function o0(){Qm(),c0(0)}function _S(n,e=1){n.power=(n.power||0)+e;let t=Bt.power;n.pow=(n.pow0||1)*(1+t.dmg*n.power),n.max+=t.hp*e,n.hp=Math.min(n.max,n.hp+t.hp*e),(n===y.me||n.seen)&&aa(n.x,n.H.height+.3,n.z,t.hp*e,"heal")}It("kill",(n,e)=>{let t=y.match;if(!t||t.mode!=="br"||t.over)return;let i=Math.max(1,n.power||0);for(let s=0;s<i;s++){let r=s/i*Te+D(-.3,.3),o=D(1.2,2.6);s0(n.x,n.z,Math.sin(r)*o,Math.cos(r)*o,D(3,5))}if(t.alive=y.fighters.filter(s=>s.alive).length,n.place=t.alive+1,n===y.me)return t.place=n.place,Jm(-1,"out");if(t.alive<=1){let s=y.fighters.find(r=>r.alive);s&&(s.place=1,s===y.me&&(t.place=1)),Jm(s?s.team:-1,"last")}});It("crateBreak",n=>{!y.match||y.match.mode!=="br"||(y.match.crates++,bt(On,n.x,.6,n.z,{n:14,color:"#A87645",sp:3,upMin:.4,vy:3,life:.7,s0:.25,s1:.08,grav:6,drag:1.5}),Ki(n.x,.7,n.z,"#FFC93C",14),we("hit_wall",n,1.3,.6),s0(n.x,n.z,D(-.6,.6),D(-.6,.6),5))});function a0(n,e,t){let i=gi(n),s=xi(e);if($i(i,s)!=="C")return!1;let r=Cm(i,s);return r?(nd(r,t)&&ht("crateBreak",r),!0):!1}function pd(n,e){nd(n,e)&&ht("crateBreak",n)}function l0(n,e,t,i){for(let s of k.crates)s.alive&&Math.hypot(s.x-n,s.z-e)<t+.75&&pd(s,i)}var nc=null,Km=-1;function c0(n){nc=nc||document.getElementById("fogtint"),nc&&(n=Math.round(n*20)/20,n!==Km&&(Km=n,nc.style.opacity=n))}var h0=()=>y.match&&y.match.mode==="br"?y.match.fog.r:1e9;function u0(n){let e=y.match;if(!e||e.mode!=="br")return 1e9;let t=e.fog,i=Math.max(0,e.t+n-Math.max(e.t,Bt.wait));return Math.max(Bt.r1,t.r-d0(e)*i)}var d0=n=>(n.fog.r0-Bt.r1)/Bt.shrink*xS(n.alive),la={x:0,z:0};function f0(n,e){let t=y.match;if(!t||t.mode!=="br")return;Cn.u.uTime.value=e,Lm(n);let i=t.fog;if(y.state==="play"&&!t.over){t.t+=n;let r=i.shrinking;if(t.t>=Bt.wait&&(i.r=Math.max(Bt.r1,i.r-d0(t)*n)),i.shrinking=t.t>=Bt.wait&&i.r>Bt.r1,i.shrinking&&!r&&ht("fogStart"),i.tick-=n,i.tick<=0){i.tick=.5;let o=Bt.dps+Bt.dpsGrow*t.t;for(let a of y.fighters)a.alive&&Math.hypot(a.x,a.z)>i.r&&(a.inFog=(a.inFog||0)+1,ht("fogHurt",a,o*.5))}}Cn.u.uR.value=i.r,Cn.wall&&Cn.wall.scale.set(i.r,6,i.r);let s=y.me;if(c0(s&&s.alive&&Math.hypot(s.x,s.z)>i.r&&y.state!=="end"?.85:0),s&&s.alive&&Math.hypot(s.x,s.z)>i.r-3&&Math.random()<n*8){let r=D(0,Te),o=D(1,4);bt(On,s.x+Math.sin(r)*o,D(.3,1.6),s.z+Math.cos(r)*o,{n:1,color:Math.random()<.5?"#8BD86A":"#A77CF0",sp:.3,vy:.3,life:1.4,s0:.5,s1:1.1,drag:.5,soft:!0,a:.35})}for(let r=y.pickups.length-1;r>=0;r--){let o=y.pickups[r];o.t+=n,o.landed||(o.vy-=16*n,o.x+=o.vx*n,o.z+=o.vz*n,o.y+=o.vy*n,la.x=o.x,la.z=o.z,Ai(la,.25)&&(o.x=la.x,o.z=la.z,o.vx*=-.4,o.vz*=-.4),o.y<.5&&(o.y=.5,Math.abs(o.vy)>2?(o.vy=-o.vy*.4,o.vx*=.6,o.vz*=.6):o.landed=!0));let a=o.landed?Math.sin(e*3+o.ph)*.08:0;if(o.m.position.set(o.x,o.y+a,o.z),o.m.rotation.y=e*2+o.ph,o.sh.position.set(o.x,.04,o.z),Math.random()<n*3&&St.emit({x:o.x+D(-.2,.2),y:o.y,z:o.z+D(-.2,.2),vx:0,vy:.5,vz:0,life:.6,t:0,s0:.08,s1:.01,r:1,g:.8,b:.3,a:1,grav:0,drag:.5,soft:1}),!(o.t<.35||y.state!=="play")){for(let l of y.fighters)if(!(!l.alive||(l.x-o.x)**2+(l.z-o.z)**2>.9*.9)){vS(r),_S(l,1),bt(St,l.x,1,l.z,{n:12,color:"#FFD45A",sp:2,vy:1.5,life:.45,s0:.18,s1:.02,soft:!0}),Ci(l.x,l.z,.3,1.2,.4,"#FFC93C"),we("gem",l,l===y.me?1:.6,.85+Math.min(10,l.power)*.03),ht("power",l);break}}}}function Jm(n,e){let t=y.match;t.over=!0,t.winner=n,t.why=e,ht("matchOver",n,e)}function p0(){jm();let n=[...Cn.group.children];ue.remove(Cn.group),Cn.group=null;let e=new se(ic,e0);return e.add(new se(ic,t0)),n.push(e,new se(n0,i0)),n}var x0=new P,sc=new Dt(1,1),ac=new qt(1,.15,1,8,1,!0);ac.rotateX(Math.PI/2);ac.translate(0,0,-.5);var v0=n=>{let e=new ne(n);return new P(e.r,e.g,e.b)},m0=n=>new ft({transparent:!0,depthWrite:!1,blending:_n,toneMapped:!1,fog:!1,uniforms:{c:{value:v0(n)},a:{value:1}},vertexShader:"varying vec2 vU; void main(){ vU = uv - 0.5; float s = length(modelMatrix[0].xyz); vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); mv.xy += position.xy * s; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 c; uniform float a; varying vec2 vU; void main(){ float d = length(vU) * 2.0; if(d >= 1.0) discard; float core = 1.0 - smoothstep(0.0, 0.42, d); float halo = pow(clamp(1.0 - d, 0.0, 1.0), 2.2); vec3 col = mix(c * halo * 1.6, vec3(1.3), core); gl_FragColor = vec4(col * a, 1.0); }"}),yS=n=>new ft({transparent:!0,depthWrite:!1,blending:_n,toneMapped:!1,fog:!1,side:yt,uniforms:{c:{value:v0(n)}},vertexShader:"varying float vA; varying float vE; void main(){ vA = uv.y; vec4 mv = modelViewMatrix * vec4(position, 1.0); vec3 n = normalize(normalMatrix * normal); vE = abs(dot(n, normalize(-mv.xyz))); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 c; varying float vA; varying float vE; void main(){ float e = clamp(vE, 0.0, 1.0), a = clamp(vA, 0.0, 1.0); float tail = smoothstep(0.0, 0.5, a); float core = pow(e, 6.0); vec3 col = c * pow(e, 1.3) * 1.3 + vec3(1.0) * core * 0.8; gl_FragColor = vec4(col * tail, 1.0); }"}),g0={},rc=n=>g0[n]||(g0[n]={glow:m0(n),trail:yS(n),flash:m0(new ne(n).lerp(new ne("#FFFFFF"),.45).getStyle())}),_0=[];function y0(n,e,t,i=!0){let s=_0.pop();if(!s){s=new Ft;let a=new se(sc);a.frustumCulled=!1,a.renderOrder=7;let l=new se(ac);l.frustumCulled=!1,l.renderOrder=6,s.add(a,l),s.userData={glow:a,tr:l}}let r=rc(n),o=s.userData;return o.glow.material=r.glow,o.tr.material=r.trail,o.glow.scale.setScalar(e),o.len=t,o.w=e*.42,o.tr.visible=i,o.tr.scale.set(.001,.001,.001),s.visible=!0,ue.add(s),s}function md(n,e,t,i,s,r,o){n.position.set(e,t,i);let a=n.userData;if(!a.tr.visible)return;n.rotation.set(0,Math.atan2(s,r),0);let l=Math.max(.001,Math.min(a.len,o));a.tr.scale.set(a.w,a.w,l)}function lc(n){ue.remove(n),_0.push(n)}var no=[],gd=[];function Zs(n,e,t,i,s,r=.07){if(st.position.distanceToSquared(x0.set(n,e,t))>2500)return;let o=gd.pop();o||(o=new se(sc,rc(i).flash.clone()),o.frustumCulled=!1,o.renderOrder=8),o.material.uniforms.c.value.copy(rc(i).flash.uniforms.c.value),o.position.set(n,e,t),o.scale.setScalar(s),ue.add(o),no.push({m:o,t:r,T:r,s})}var oc=new Dt(1,1),M0=n=>{let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),i=t.createRadialGradient(32,32,0,32,32,32);for(let[s,r]of n)i.addColorStop(s,r);return t.fillStyle=i,t.fillRect(0,0,64,64),new Dn(e)},MS=M0([[0,"rgba(20,14,6,0.85)"],[.45,"rgba(30,22,10,0.55)"],[.8,"rgba(36,26,14,0.15)"],[1,"rgba(36,26,14,0)"]]),bS=M0([[0,"rgba(255,240,200,1)"],[.3,"rgba(255,170,60,0.85)"],[.7,"rgba(200,60,10,0.25)"],[1,"rgba(120,20,0,0)"]]),b0=new De({map:MS,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),S0=new De({map:bS,transparent:!0,depthWrite:!1,blending:_n,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Ts=[],SS=pt?12:24;function E0(n,e,t,i,s,r,o=.45){if(st.position.distanceToSquared(x0.set(n,e,t))>1600)return;let a=Ts.length>=SS?Ts.shift():null;a||(a={burn:new se(oc,b0.clone()),ember:new se(oc,S0.clone())},a.burn.renderOrder=2,a.ember.renderOrder=3);let l=Math.random()*Math.PI*2;for(let c of[a.burn,a.ember])c.position.set(n+i*.04,e+s*.04,t+r*.04),c.lookAt(c.position.x+i,c.position.y+s,c.position.z+r),c.rotateZ(l),c.scale.setScalar(o*(c===a.ember?.75:1)),ue.add(c);a.t=0,Ts.push(a)}function w0(n){for(let e=no.length-1;e>=0;e--){let t=no[e];t.t-=n;let i=Math.max(0,t.t/t.T);t.m.scale.setScalar(t.s*(.6+.4*i)),t.m.material.uniforms.a.value=i,t.t<=0&&(ue.remove(t.m),gd.push(t.m),no.splice(e,1))}for(let e=Ts.length-1;e>=0;e--){let t=Ts[e];t.t+=n,t.ember.material.opacity=Math.max(0,1-t.t/.6),t.burn.material.opacity=Math.min(1,Math.max(0,1-(t.t-3.5)/1.5)),t.t>5&&(ue.remove(t.burn,t.ember),Ts.splice(e,1))}}function T0(){for(let n of no)ue.remove(n.m),gd.push(n.m);no.length=0;for(let n of Ts)ue.remove(n.burn,n.ember);Ts.length=0}function A0(n){let e=[];for(let t of n){let i=rc(t);e.push(new se(sc,i.glow),new se(ac,i.trail),new se(sc,i.flash))}return e.push(new se(oc,b0),new se(oc,S0)),e.forEach(t=>{t.frustumCulled=!1}),e}var kn=.75,L0=3,ES=.13,wS=3,TS=1.6,AS=0;function RS(){return{mx:0,mz:0,aim:0,tx:0,tz:0,fire:!1,sup:!1,aiming:!1}}function xd(n){let e=$n[n.hero],t={id:++AS,name:n.name,team:n.team,hero:n.hero,H:e,isMe:!!n.isMe,bot:null,level:n.level||1,x:0,z:0,vx:0,vz:0,kx:0,kz:0,aim:n.team===0?Math.PI:0,alive:!1,hp:e.hp,max:e.hp,ammo:Kn,cdT:0,charge:0,regenT:0,spawnT:0,shieldT:0,deadT:0,respawnT:.01,atkT:9,supT:9,flash:0,stunT:0,revealT:0,inGrass:!1,gems:0,kills:0,deaths:0,dmgDone:0,lastHitBy:null,pendingBeam:null,inp:RS(),V:null,tag:null,victory:!1,defeat:!1};return t.pow=t.pow0=1+(t.level-1)*.05,t.max=t.hp=Math.round(e.hp*t.pow),t.V=oa(n.hero),t.V.root.visible=!1,ue.add(t.V.root),y.fighters.push(t),t}function I0(){for(let n of y.fighters)ue.remove(n.V.root),n.V.mesh.geometry.dispose(),n.V.mat.dispose(),n.tag&&n.tag.el.remove();y.fighters.length=0,y.me=null}function io(n){return n===y.me?"me":y.me&&n.team===y.me.team?"ally":"foe"}function ro(n,e){let t=k.spawns[n.team]||k.spawns.ffa,i=e||t[(n.slot??0)%t.length];e||(n.power=0,n.pow=n.pow0,n.max=Math.round(n.H.hp*n.pow0*(n.hpMul||1))),n.x=i.x,n.z=i.z,n.vx=n.vz=n.kx=n.kz=0,n.alive=!0,n.hp=n.max,n.ammo=Kn,n.cdT=0,n.deadT=0,n.spawnT=0,n.shieldT=TS,n.regenT=0,n.aim=k.spawns[n.team]?n.team===0?Math.PI:0:CS(n.x,n.z),n.V.yaw=n.aim,n.inp.aim=n.aim,n.atkT=n.supT=9,n.spot={},n.pendingBeam=null,n.stunT=0,n.gems=0,n.burst=null,n.frenzyT=0,n.bloom=0,n.V.root.visible=!0,n.V.root.scale.setScalar(1),Zl(n.V,io(n)),Es.spawn(n.V),n.V.root.position.set(n.x,0,n.z),bt(St,n.x,.3,n.z,{n:18,color:io(n)==="foe"?"#FF7A6A":"#8FE0FF",sp:1.5,upMin:.6,upMax:1,vy:3,life:.7,s0:.25,s1:.05,drag:1.5,soft:!0}),Ci(n.x,n.z,.2,1.3,.5,io(n)==="foe"?"#FF5A4A":"#6FD8FF"),ht("spawn",n)}function CS(n,e){let t=Math.atan2(-n,-e),i=t,s=-1e9;for(let r=0;r<8;r++){let o=r*Math.PI/4,a=fn(n,e,n+Math.sin(o)*8,e+Math.cos(o)*8),c=(a<0?8:a*8)+Math.cos(o-t)*3;c>s&&(s=c,i=o)}return i}var R0=3.2,PS=10,LS=6.5,IS=3.5,vd=(n,e)=>e.spot&&e.spot[n]>0;function oo(n,e){if(e.team===n.team)return!0;if(!FS(n.team,e))return!1;if(vd(n.team,e))return!0;let t=e.x-n.x,i=e.z-n.z,s=y.match&&y.match.mode==="br"?LS:PS;return t*t+i*i<s*s||$r(n.x,n.z,e.x,e.z)}function FS(n,e){if(e.team===n||!e.alive||!e.inGrass||e.revealT>0)return!0;for(let t of y.fighters)if(t.alive&&t.team===n&&(t.x-e.x)**2+(t.z-e.z)**2<R0*R0)return!0;return!1}var li={x:0,z:0};function F0(n,e){if(!n.alive){n.deadT+=e,y.match&&y.match.respawn&&!y.match.over&&(n.respawnT-=e,n.respawnT<=0&&ro(n));return}let t=n.H,i=n.inp;if(n.spawnT+=e,n.atkT+=e,n.supT+=e,n.regenT+=e,n.shieldT=Math.max(0,n.shieldT-e),n.revealT=Math.max(0,n.revealT-e),n.flash=Math.max(0,n.flash-e*6),n.cdT=Math.max(0,n.cdT-e),n.stunT=Math.max(0,n.stunT-e),n.frenzyT>0&&(n.frenzyT=Math.max(0,n.frenzyT-e)),n.atkT>.3&&n.bloom&&(n.bloom=Math.max(0,n.bloom-e*1.8)),n.ammo<Kn&&(n.ammo=Math.min(Kn,n.ammo+e/t.attack.reload*(n.frenzyT>0?3:1)),n.ammo>=Kn&&n.isMe&&ht("ammoFull",n)),n.regenT>L0&&n.hp<n.max){let d=Math.min(n.max-n.hp,n.max*ES*e);n.hp+=d,n.healAcc=(n.healAcc||0)+d,n.healAcc>400&&(n===y.me&&aa(n.x,t.height+.3,n.z,n.healAcc,"heal"),n.healAcc=0)}let s=y.state!=="play"||n.stunT>0||n.pendingBeam,r=s?0:i.mx,o=s?0:i.mz,a=Math.hypot(r,o);a>1&&(r/=a,o/=a);let l=t.speed*(y.ball&&y.ball.holder===n?.9:1),c=1-Math.exp(-e*18);n.vx+=(r*l-n.vx)*c,n.vz+=(o*l-n.vz)*c;let h=Math.exp(-e*7);n.kx*=h,n.kz*=h,li.x=n.x+(n.vx+n.kx)*e,li.z=n.z+(n.vz+n.kz)*e,Ai(li,t.rad);for(let d of y.fighters){if(d===n||!d.alive)continue;let f=li.x-d.x,g=li.z-d.z,x=f*f+g*g,p=t.rad+d.H.rad;if(x<p*p&&x>1e-6){let m=Math.sqrt(x),v=(p-m)*.5/m;li.x+=f*v,li.z+=g*v}}if(Ai(li,t.rad),e>0){let d=(li.x-n.x)/e,f=(li.z-n.z)/e;n.vx=Nn(n.vx,d,.5),n.vz=Nn(n.vz,f,.5)}n.x=li.x,n.z=li.z;let u=Vl(n.x,n.z);if(u&&!n.inGrass&&n.V.root.visible&&bt(On,n.x,.6,n.z,{n:4,color:"#7FC24E",sp:1.2,life:.5,s0:.12,s1:.06,grav:4,drag:1}),n.inGrass=u,Math.hypot(n.vx,n.vz)>2&&Math.random()<e*4&&!n.H.hover&&!u&&Gm(n.x,n.z,1),!n.pendingBeam&&(!s||y.state==="countdown"&&n.stunT<=0)&&(n.aim=i.aim),n.pendingBeam&&(n.pendingBeam.t-=e,n.pendingBeam.t<=0&&OS(n)),n.burst)for(n.burst.t-=e;n.burst&&n.burst.t<=0;)U0(n);s||(i.sup&&n.charge>=1?US(n,i.tx,i.tz):i.fire&&DS(n,i.tx,i.tz)),i.fire=i.sup=!1}function Ji(n){return n.alive&&n.ammo>=1&&n.cdT<=0&&!n.pendingBeam&&y.state==="play"}function uc(n,e){return n.V.muzzle.getWorldPosition(e),e.y=kn,e}var Ke=new P;function DS(n,e,t){if(y.attackHook&&n.alive&&n.cdT<=0&&y.state==="play"&&y.attackHook(n,e,t,!1))return;if(!Ji(n)){n.isMe&&n.ammo<1&&n.cdT<=0&&ht("empty",n);return}let i=n.H,s=i.attack;n.ammo-=1,n.cdT=s.cd*(n.frenzyT>0?.6:1),n.atkT=0,n.regenT=0,n.revealT=Math.max(n.revealT,1);let r=Math.atan2(e-n.x,t-n.z);n.aim=r,n.V.yaw=r,Es.attack(n.V),D0(n,s,r,e,t,!1),ht("attack",n,!1)}function US(n,e,t){if(!n.alive||n.pendingBeam||y.state!=="play"||y.attackHook&&y.attackHook(n,e,t,!0))return;let i=n.H,s=i.super;n.charge=0,n.supT=0,n.atkT=0,n.regenT=0,n.revealT=Math.max(n.revealT,1.2);let r=Math.atan2(e-n.x,t-n.z);if(n.aim=r,n.V.yaw=r,Es.super(n.V),s.kind==="beam"){n.pendingBeam={t:s.windup,aim:r},ht("super",n,!0),we("super",n);return}if(s.kind==="frenzy"){n.frenzyT=s.time,n.ammo=Kn,n.bloom=0,Ci(n.x,n.z,.3,2,.5,s.color),bt(St,n.x,1,n.z,{n:18,color:s.color,sp:3,vy:1.5,life:.5,s0:.25,s1:.03,soft:!0}),ht("super",n,!1),we("super",n);return}D0(n,s,r,e,t,!0),ht("super",n,!1),we("super",n)}function D0(n,e,t,i,s,r){uc(n,Ke);let o=n.pow;if(e.kind==="fan"){for(let a=0;a<e.count;a++){let l=t+(e.count>1?(a/(e.count-1)-.5)*e.spread:0)+D(-.015,.015);cc(n,Ke.x,Ke.z,l,e,e.dmg*o,r)}Zs(Ke.x,Ke.y,Ke.z,e.color,r?1.3:.85,.08),bt(St,Ke.x,Ke.y,Ke.z,{n:r?16:8,color:e.color,sp:r?7:4,vx:Math.sin(t)*4,vz:Math.cos(t)*4,life:.22,s0:.35,s1:.05,drag:6}),bt(On,Ke.x,Ke.y,Ke.z,{n:r?10:5,color:"#F2E8D0",sp:1.5,vx:Math.sin(t)*3,vz:Math.cos(t)*3,life:.5,s0:.18,s1:.5,drag:4,soft:!0,a:.6}),r&&(n.kx-=Math.sin(t)*7,n.kz-=Math.cos(t)*7,y.shake=Math.max(y.shake,n.isMe?.5:0)),we(r?"boom":"shot_shotgun",n)}else if(e.kind==="burst")n.burst={n:e.count+(n.frenzyT>0?2:0),t:0,W:e,pow:o},U0(n);else if(e.kind==="bounce")cc(n,Ke.x,Ke.z,t,e,e.dmg*o,r),Zs(Ke.x,Ke.y,Ke.z,e.color,r?1.4:.6,.07),bt(St,Ke.x,Ke.y,Ke.z,{n:r?12:5,color:e.color,sp:3,life:.2,s0:.25,s1:.04,drag:6}),r&&(n.kx-=Math.sin(t)*4,n.kz-=Math.cos(t)*4,y.shake=Math.max(y.shake,n.isMe?.35:0)),we(r?"boom":"shot_pop",n,r?.7:1);else if(e.kind==="needle")cc(n,Ke.x,Ke.z,t,e,e.dmg*o,r),Zs(Ke.x,Ke.y,Ke.z,e.color,.7,.07),bt(St,Ke.x,Ke.y,Ke.z,{n:6,color:e.color,sp:3,life:.18,s0:.3,s1:.05,drag:6}),we("shot_beam",n,.6);else if(e.kind==="lob"){let a=qe(Math.hypot(i-n.x,s-n.z),1.5,e.range);P0(n,n.x+Math.sin(t)*a,n.z+Math.cos(t)*a,e,e.flight*(.65+.35*a/e.range),0,r),we("shot_throw",n)}else if(e.kind==="barrage"){let a=qe(Math.hypot(i-n.x,s-n.z),3,e.range);for(let l=0;l<e.count;l++){let c=(l-(e.count-1)/2)*e.step,h=qe(a+c,1.5,e.range+e.step);P0(n,n.x+Math.sin(t)*h+D(-.3,.3),n.z+Math.cos(t)*h+D(-.3,.3),e,e.flight*(.7+.3*h/e.range),l*.08,!0)}we("shot_throw",n)}}function U0(n){let e=n.burst;if(!e||!n.alive){n.burst=null;return}let t=e.W,i=n.frenzyT>0?.3:1;n.bloom=Math.min(1,(n.bloom||0)+t.bloom);let s=t.spread*(1+n.bloom*4)*i;uc(n,Ke);let r=n.aim+(Math.random()+Math.random()-1)*s;cc(n,Ke.x,Ke.z,r,t,t.dmg*e.pow,!1),Zs(Ke.x,Ke.y,Ke.z,t.color,.45,.05),we("shot_pop",n,.55,1.3+Math.random()*.2),n.V.sp.kick.v+=4,n.atkT=0,e.n--,e.t+=t.gap,e.n<=0&&(n.burst=null)}var N0=new Gt(1,10,8),z0=new Dr(.5,2.2,3,8);z0.rotateX(Math.PI/2);var C0={},ca=(n,e=2.4)=>C0[n+e]||(C0[n+e]=new De({color:new ne(n).multiplyScalar(e),toneMapped:!1}));function cc(n,e,t,i,s,r,o){let a=s.kind==="needle",l=s.kind==="bounce",c=s.size||.2,h=y0(s.color,a||l?c*2.6:c*2.2,a?3.6:l?o?2.6:1.8:o?1.8:1.4,a||l||!pt);md(h,e,kn,t,Math.sin(i),Math.cos(i),0),y.shots.push({owner:n,team:n.team,x:e,z:t,x0:n.x,z0:n.z,vx:Math.sin(i)*s.speed,vz:Math.cos(i)*s.speed,range:s.range,dist:0,dmg:r,W:s,isSuper:o,m:h,knock:s.knock||0,bounces:s.bounces||0,seg:0,hits:s.pierce?new Set:null})}function O0(n,e,t,i){let s=Math.sign(t)||1,r=Math.sign(i)||1,o=Gl(ai(n+s*.06,e-r*.06)),a=Gl(ai(n-s*.06,e+r*.06));return o&&!a?[-t,i]:a&&!o?[t,-i]:[-t,-i]}function _d(n,e,t,i,s){let r=[{x:n,z:e}],o=Math.sin(t),a=Math.cos(t),l=i;for(let c=0;c<=s&&l>.05;c++){let h=n+o*l,u=e+a*l,d=fn(n,e,h,u);if(d<0){r.push({x:h,z:u});break}let f=n+(h-n)*d-o*.03,g=e+(u-e)*d-a*.03;if(r.push({x:f,z:g}),l-=Math.hypot(f-n,g-e),c===s)break;[o,a]=O0(f+o*.03,g+a*.03,o,a),n=f,e=g}return r}function k0(n,e,t,i){for(let s=1;s<n.length;s++)if(hc(n[s-1].x,n[s-1].z,n[s].x,n[s].z,e,t)<i*i)return!0;return!1}function hc(n,e,t,i,s,r){let o=t-n,a=i-e,l=o*o+a*a,c=l>0?((s-n)*o+(r-e)*a)/l:0;c=qe(c,0,1);let h=n+o*c-s,u=e+a*c-r;return h*h+u*u}function B0(n){for(let e=y.shots.length-1;e>=0;e--){let t=y.shots[e],i=Math.hypot(t.vx,t.vz)*n,s=t.x+t.vx*n,r=t.z+t.vz*n,o=!1;if(t.dist+i>=t.range){let l=(t.range-t.dist)/i;s=t.x+t.vx*n*l,r=t.z+t.vz*n*l,o=!0}let a=fn(t.x,t.z,s,r);if(a>=0){s=t.x+(s-t.x)*a,r=t.z+(r-t.z)*a,o=!0,eo(s,kn,r,t.W.color),we("hit_wall",{x:s,z:r},.35,t.bounces>0?1.5:1);let l=Math.hypot(t.vx,t.vz)||1;Zs(s,kn,r,t.W.color,(t.W.size||.2)*4,.09);let c=Math.abs(t.vx)>Math.abs(t.vz);if(E0(s,kn,r,c?-Math.sign(t.vx):0,0,c?0:-Math.sign(t.vz),t.W.kind==="needle"?.55:.32),a0(s+t.vx/l*.08,r+t.vz/l*.08,t.W.dmgFar?Nn(t.dmg,t.W.dmgFar*t.owner.pow,qe(t.dist/t.range,0,1)):t.dmg),t.bounces>0){[t.vx,t.vz]=O0(s,r,t.vx,t.vz),t.rico=(t.rico||0)+1,t.hits||(t.vx*=1.08,t.vz*=1.08),t.bounces--,o=!1,t.bounced=!0;let h=Math.hypot(t.vx,t.vz)||1;s+=t.vx/h*.03,r+=t.vz/h*.03}}for(let l of y.fighters){if(!l.alive||l.team===t.team)continue;let c=l.H.rad+(t.W.size||.2)*.8;if(hc(t.x,t.z,s,r,l.x,l.z)<c*c){if(t.hits){if(t.hits.has(l))continue;t.hits.add(l)}let h=t.dmg;if(t.W.dmgFar&&(h=Nn(t.dmg,t.W.dmgFar*t.owner.pow,qe((t.dist+i)/t.range,0,1))),t.rico&&t.W.ricochet&&(h*=t.W.ricochet),$s(l,h,t.owner,t.isSuper),t.knock){let u=Math.hypot(t.vx,t.vz);l.kx+=t.vx/u*t.knock*2.2,l.kz+=t.vz/u*t.knock*2.2,l.stunT=Math.max(l.stunT,.25)}if(eo(l.x,kn+.1,l.z,t.W.color),Zs(l.x,kn+.1,l.z,t.W.color,.7,.08),t.hits)continue;o=!0,s=l.x,r=l.z;break}}t.dist+=Math.hypot(s-t.x,r-t.z),t.x=s,t.z=r,t.bounced&&(t.seg=t.dist,t.bounced=!1),md(t.m,s,kn,r,t.vx,t.vz,t.dist-t.seg),Math.random()<.25&&St.emit({x:s,y:kn,z:r,vx:0,vy:0,vz:0,life:t.W.kind==="needle"?.3:.16,t:0,s0:(t.W.size||.2)*(t.W.kind==="needle"?1.6:1.4),s1:.02,r:1,g:.8,b:.4,a:.7,grav:0,drag:0,soft:1}),o&&(lc(t.m),y.shots.splice(e,1))}}var H0=new Gt(.16,12,10),G0=ct({color:"#26262E",roughness:.35,metalness:.2}),yd=new fs(.9,1,36);yd.rotateX(-Math.PI/2);function P0(n,e,t,i,s,r,o){let a=new se(H0,G0);a.castShadow=!0;let l=new se(N0,ca("#FFC04A",3));l.scale.setScalar(.05),l.position.y=.17,a.add(l),a.visible=!1,ue.add(a);let c=new se(yd,new De({color:io(n)==="foe"?"#FF4A3A":"#5FC8FF",transparent:!0,opacity:0,depthWrite:!1}));c.position.set(e,.05,t),c.scale.setScalar(i.radius),c.renderOrder=3,ue.add(c),uc(n,Ke),y.lobs.push({owner:n,team:n.team,x0:Ke.x,z0:Ke.z,y0:1,x1:e,z1:t,T:s,t:-r,W:i,isSuper:o,m:a,mark:c,h:3.2+Math.hypot(e-n.x,t-n.z)*.2})}function V0(n){for(let e=y.lobs.length-1;e>=0;e--){let t=y.lobs[e];if(t.t+=n,t.t<0)continue;let i=Math.min(1,t.t/t.T),s=Nn(t.x0,t.x1,i),r=Nn(t.z0,t.z1,i),o=Nn(t.y0,.15,i)+Math.sin(i*Math.PI)*t.h;t.m.visible=!0,t.m.position.set(s,o,r),t.m.rotation.x+=n*9,t.m.rotation.z+=n*5,t.mark.material.opacity=.25+.55*i,t.mark.scale.setScalar(t.W.radius*(1.25-.25*i)),Math.random()<.6&&St.emit({x:s,y:o+.17,z:r,vx:D(-.4,.4),vy:.6,vz:D(-.4,.4),life:.3,t:0,s0:.12,s1:.02,r:1,g:.75,b:.3,a:1,grav:0,drag:1,soft:0}),i>=1&&(ue.remove(t.m),ue.remove(t.mark),t.mark.material.dispose(),y.lobs.splice(e,1),NS(t.owner,t.x1,t.z1,t.W,t.isSuper))}}function NS(n,e,t,i,s){Ql(e,t,i.radius,i.color),we(s?"boom_big":"boom",{x:e,z:t});for(let r of y.fighters){if(!r.alive||r.team===n.team)continue;let o=Math.hypot(r.x-e,r.z-t);if(!(o>i.radius+r.H.rad)&&($s(r,i.dmg*n.pow,n,s),i.knock)){let a=o||1;r.kx+=(r.x-e)/a*i.knock*3,r.kz+=(r.z-t)/a*i.knock*3,r.stunT=Math.max(r.stunT,.3)}}l0(e,t,i.radius,i.dmg*n.pow),i.puddle&&zS(n,e,t,i.puddle)}var Md=new Un(1,32);Md.rotateX(-Math.PI/2);var dc={uTime:{value:0}},W0=new ft({transparent:!0,depthWrite:!1,uniforms:Object.assign({uK:{value:1}},dc),vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uTime; uniform float uK; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
    float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
    void main(){ vec2 p = vUv - 0.5; float d = length(p) * 2.0;
      float e = n(p * 7.0 + uTime * 0.7) * 0.25 + n(p * 15.0 - uTime) * 0.12;
      float a = 1.0 - smoothstep(0.82, 1.0, d + e * 0.6);
      float bub = smoothstep(0.62, 0.8, n(p * 12.0 + vec2(uTime * 0.5, -uTime * 0.8)));
      vec3 col = mix(vec3(0.95, 0.35, 0.05), vec3(1.0, 0.8, 0.25), bub + (1.0 - d) * 0.4);
      gl_FragColor = vec4(col * 1.6, a * 0.78 * uK);
      #include <colorspace_fragment>
    }`});function zS(n,e,t,i){let s=new se(Md,W0.clone());s.material.uniforms.uTime=dc.uTime,s.position.set(e,.045,t),s.scale.setScalar(.2),s.renderOrder=3,ue.add(s),y.puddles.push({owner:n,team:n.team,x:e,z:t,r:i.r,dps:i.dps*n.pow,t:0,life:i.t,tick:0,m:s})}function X0(n){dc.uTime.value+=n;for(let e=y.puddles.length-1;e>=0;e--){let t=y.puddles[e];t.t+=n,t.tick-=n;let i=t.t/t.life;if(t.m.scale.setScalar(t.r*Math.min(1,t.t/.15)),t.m.material.uniforms.uK.value=i>.75?(1-i)/.25:1,Math.random()<n*14&&St.emit({x:t.x+D(-t.r,t.r)*.7,y:.1,z:t.z+D(-t.r,t.r)*.7,vx:0,vy:D(.6,1.4),vz:0,life:.5,t:0,s0:.14,s1:.02,r:1,g:.6,b:.15,a:1,grav:0,drag:.5,soft:1}),t.tick<=0){t.tick=.25;for(let s of y.fighters)s.alive&&s.team!==t.team&&(s.x-t.x)**2+(s.z-t.z)**2<(t.r+s.H.rad*.5)**2&&$s(s,t.dps*.25,t.owner,!1,!0)}t.t>=t.life&&(ue.remove(t.m),t.m.material.dispose(),y.puddles.splice(e,1))}}var so=new qt(1,1,1,12,1,!0);so.rotateX(Math.PI/2);so.translate(0,0,.5);function OS(n){let e=n.H.super,t=n.pendingBeam.aim;n.pendingBeam=null,n.aim=t,uc(n,Ke);let i=Ke.x,s=Ke.z,r=i+Math.sin(t)*e.range,o=s+Math.cos(t)*e.range;for(let c of y.fighters){if(!c.alive||c.team===n.team)continue;let h=e.width/2+c.H.rad;hc(i,s,r,o,c.x,c.z)<h*h&&($s(c,e.dmg*n.pow,n,!0),c.kx+=Math.sin(t)*6,c.kz+=Math.cos(t)*6,eo(c.x,kn,c.z,e.color))}for(let c of k.crates)c.alive&&hc(i,s,r,o,c.x,c.z)<(e.width/2+.7)**2&&pd(c,e.dmg*n.pow);let a=new se(so,ca("#FFF6C0",3)),l=new se(so,new De({color:new ne(e.color).multiplyScalar(2),transparent:!0,opacity:.55,depthWrite:!1,blending:_n}));for(let c of[a,l])c.position.set(i,kn+.05,s),c.rotation.y=t,ue.add(c);a.scale.set(.08,.08,e.range),l.scale.set(e.width*.5,e.width*.5,e.range),y.beams.push({core:a,outer:l,t:0,life:.45,w:e.width});for(let c=0;c<e.range;c+=.6)bt(St,i+Math.sin(t)*c,kn,s+Math.cos(t)*c,{n:1,color:e.color,sp:1.5,life:.5,s0:.25,s1:.02,drag:2,soft:!0});n.kx-=Math.sin(t)*5,n.kz-=Math.cos(t)*5,Es.super(n.V),n.isMe&&(y.shake=Math.max(y.shake,.4)),we("shot_beam",n,1.2)}function q0(n){for(let e=y.beams.length-1;e>=0;e--){let t=y.beams[e];t.t+=n;let i=t.t/t.life,s=(1-i)*t.w*.5;t.outer.scale.x=t.outer.scale.y=Math.max(.001,s),t.core.scale.x=t.core.scale.y=Math.max(.001,.08*(1-i)),t.outer.material.opacity=.55*(1-i),i>=1&&(ue.remove(t.core),ue.remove(t.outer),t.outer.material.dispose(),y.beams.splice(e,1))}}function $s(n,e,t,i,s){if(!n.alive||n.shieldT>0||e<=0||y.match&&y.match.over)return 0;t&&y.match&&y.match.mode==="br"&&(e*=Bt.dmg),e=Math.round(e),n.hp-=e,n.flash=1,n.hurtAt=y.time,n.regenT=0,n.revealT=Math.max(n.revealT,.6),n.lastHitBy=t,t&&t.team!==n.team&&(n.spot=n.spot||{},n.spot[t.team]=IS),t&&(t.dmgDone+=e,t.regenT=Math.min(t.regenT,L0*.5),!i&&t.charge<1&&(t.charge=Math.min(1,t.charge+e/t.H.super.charge),t.charge>=1&&ht("superReady",t))),s||Es.hurt(n.V);let r=y.me?y.me.team:0;return(y.me&&oo(y.me,n)||n===y.me||t===y.me)&&aa(n.x,n.H.height+.25,n.z,e,n===y.me?"me":t===y.me?"mine":""),ht("damage",n,e,t),t===y.me&&n!==y.me&&ht("hitMarker",n.hp<=0),n.hp<=0&&kS(n,t),e}function kS(n,e){n.hp=0,n.alive=!1,n.deadT=0,n.deaths++,n.respawnT=wS,n.pendingBeam=null,n.burst=null,n.frenzyT=0,e&&e!==n&&e.kills++,Ki(n.x,.8,n.z,n.H.color,34),we("die",n),ht("kill",n,e)}function Y0(n,e){let t=y.me?y.me.team:0;for(let i of y.fighters){let s=i.V;if(i.spot)for(let a in i.spot)i.spot[a]=Math.max(0,i.spot[a]-n);i.seen=y.me?oo(y.me,i):!0,$l(s,i,n,e),i.alive&&!i.seen&&(s.root.visible=!1);let r=i.alive&&i.inGrass&&i.team===t?.55:1;if(i===y.me&&y.state!=="menu"){let a=st.position.distanceTo(s.root.position)-.6;a<2.2&&(r=Math.min(r,Math.max(.15,(a-.6)/1.6)))}let o=r<1;s.mat.transparent!==o&&(s.mat.transparent=o,s.mat.depthWrite=!o,s.ol.visible=!o&&!pt),s.mat.opacity=r,i.shieldT>0?s.mat.userData.u.uTint.value.setScalar(.12+Math.sin(e*20)*.08):i.frenzyT>0?s.mat.userData.u.uTint.value.setRGB(.25,.45,.05).multiplyScalar(.6+Math.sin(e*18)*.4):(s.id!=="wasp"||i.supT>=1.2)&&s.mat.userData.u.uTint.value.setScalar(0)}}function Z0(){let n={team:0,x:0,z:0,pow:1,H:{attack:{}},V:null},e=[],t=new se(Md,W0.clone());return t.material.uniforms.uTime=dc.uTime,e.push(t),e.push(new se(H0,G0),new se(yd,new De({transparent:!0,depthWrite:!1}))),e.push(new se(so,ca("#FFF6C0",3)),new se(so,new De({transparent:!0,opacity:.5,depthWrite:!1,blending:_n}))),e.push(new se(N0,ca("#FF6B4A",2.2)),new se(z0,ca("#FFB21E",2.2))),e}var Zt={goals:2,dur:150,golden:60,r:.36,kick:14,superKick:23,catchT:.35,friction:1.1},ci={x:0,z:0},Bn=null;function K0(){let n=ri(128,64,(a,l,c)=>{a.fillStyle="#F1E7D2",a.fillRect(0,0,l,c);for(let h=0;h<260;h++)a.fillStyle=`rgba(${150+D(0,60)|0},${130+D(0,50)|0},${100+D(0,40)|0},${D(.25,.6)})`,a.beginPath(),a.arc(D(0,l),D(0,c),D(1,3.5),0,Te),a.fill();a.fillStyle="rgba(120,95,70,.5)";for(let h=0;h<18;h++)a.beginPath(),a.arc(D(0,l),D(0,c),D(3,6),0,Te),a.fill()},{repeat:!0}),e=new se(new Gt(Zt.r,20,14),ct({map:n,roughness:.9}));e.castShadow=!pt;let t=new se(new Ur(.07,.1,8),ct({color:"#C9B08A",roughness:.9}));t.position.y=Zt.r,e.add(t);let i=ri(64,64,a=>{let l=a.createRadialGradient(32,32,2,32,32,30);l.addColorStop(0,"rgba(0,0,0,.45)"),l.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=l,a.fillRect(0,0,64,64)}),s=new se(new Dt(1,1).rotateX(-Math.PI/2),new De({map:i,transparent:!0,depthWrite:!1}));s.renderOrder=1;let r=new se(new qt(.06,.18,6,10,1,!0).translate(0,3,0),new De({color:new ne("#FFF2C0"),transparent:!0,opacity:.18,depthWrite:!1,blending:_n,toneMapped:!1}));r.renderOrder=5;let o=new Ft;o.add(e,s,r),ue.add(o),Bn={grp:o,ball:e,sh:s,beam:r}}var fc=null;function BS(){let n=new Ft,e=new qt(.09,.09,1.8,10),t=ct({color:"#F4EFE6",roughness:.6}),i=ri(64,64,s=>{s.clearRect(0,0,64,64),s.strokeStyle="rgba(255,255,255,.75)",s.lineWidth=2;for(let r=0;r<=64;r+=8)s.beginPath(),s.moveTo(r,0),s.lineTo(r,64),s.stroke(),s.beginPath(),s.moveTo(0,r),s.lineTo(64,r),s.stroke()},{repeat:!0});for(let s of["g","h"]){let r=1e9,o=-1,a=-1;for(let x=0;x<k.H;x++)for(let p=0;p<k.W;p++)k.rows[x][p]===s&&(r=Math.min(r,p),o=Math.max(o,p),a=x);if(a<0)continue;let l=Vt(r)-.8,c=Vt(o)+.8,h=s==="g"?1:-1,u=Yt(a)+h*.8;for(let x of[l,c]){let p=new se(e,t);p.position.set(x,.9,u),p.castShadow=!0,n.add(p)}let d=new se(new qt(.08,.08,c-l,10),t);d.rotation.z=Math.PI/2,d.position.set((l+c)/2,1.8,u),n.add(d);let f=i.clone();f.needsUpdate=!0,f.repeat.set((c-l)/.5,1.8/.5);let g=new se(new Dt(c-l,1.8),new De({map:f,transparent:!0,side:yt,depthWrite:!1,color:s==="g"?"#FFD0D0":"#D0ECFF"}));g.position.set((l+c)/2,.9,u-h*1.5),n.add(g)}ue.add(n),fc=n}function ha(n){let e=n===0?"h":"g",t=0,i=0,s=0;for(let r=0;r<k.H;r++)for(let o=0;o<k.W;o++)k.rows[r][o]===e&&(t+=Vt(o),i+=Yt(r),s++);return s?{x:t/s,z:i/s}:{x:0,z:0}}function J0(){Sd(),K0(),BS();let n=k.mine||{x:0,z:0};y.match={mode:"ball",t:0,dur:Zt.dur,over:!1,winner:null,respawn:!0,count:[0,0],golden:!1,resetT:0},y.ball={x:n.x,z:n.z,y:Zt.r,vx:0,vz:0,vy:0,holder:null,kicker:null,kickT:9,power:!1,spin:0,home:{x:n.x,z:n.z}},y.attackHook=HS}function Sd(){Bn&&(ue.remove(Bn.grp),Bn=null),fc&&(ue.remove(fc),fc=null),y.ball=null,y.attackHook=null}function HS(n,e,t,i){let s=y.ball;if(!s||s.holder!==n)return!1;let r=Math.atan2(e-n.x,t-n.z),o=i?Zt.superKick:Zt.kick;return s.holder=null,s.kicker=n,s.kickT=0,s.power=i,s.x=n.x+Math.sin(r)*.7,s.z=n.z+Math.cos(r)*.7,s.vx=Math.sin(r)*o,s.vz=Math.cos(r)*o,s.vy=i?2.5:3.2,n.aim=r,n.V.yaw=r,n.atkT=0,n.cdT=.3,n.revealT=Math.max(n.revealT,1),i&&(n.charge=0,n.supT=0),bt(On,s.x,.4,s.z,{n:i?16:8,color:"#E8DCC0",sp:2.5,life:.6,s0:.2,s1:.5,drag:3,soft:!0,a:.7}),i&&Ki(s.x,.5,s.z,"#FFE07A",16),we(i?"boom":"shot_throw",n,i?.7:1,i?1:1.3),ht("kick",n,i),!0}It("kill",n=>{let e=y.ball;e&&e.holder===n&&(e.holder=null,e.kicker=null,e.kickT=.2,e.vx=D(-2,2),e.vz=D(-2,2),e.vy=3)});function $0(n){let e=y.match,t=y.ball;e.count[n]++,t.vx=t.vz=0,t.holder=null,e.resetT=2.6;let i=t.kicker&&t.kicker.team===n?t.kicker:null;i&&(i.gemsPicked=(i.gemsPicked||0)+1),Ki(t.x,.6,t.z,n===0?"#6FD8FF":"#FF6A5A",40),Ci(t.x,t.z,.3,3,.7,n===0?"#6FD8FF":"#FF5A4A"),ht("goal",n,i),(e.count[n]>=Zt.goals||e.golden)&&bd(n,"goals")}function bd(n,e){let t=y.match;t.over=!0,t.winner=n,t.why=e,ht("matchOver",n,e)}function j0(n,e){let t=y.match,i=y.ball;if(!(!t||t.mode!=="ball"||!i)){if(y.state==="play"&&!t.over){if(t.t+=n,t.t>=t.dur&&!t.golden&&!t.resetT){if(t.count[0]!==t.count[1])return bd(t.count[0]>t.count[1]?0:1,"time");t.golden=!0,ht("golden")}if(t.golden&&t.t>=t.dur+Zt.golden)return bd(-1,"time")}if(t.resetT>0&&!t.over&&(t.resetT-=n,t.resetT<=0&&(t.resetT=0,Object.assign(i,{x:i.home.x,z:i.home.z,y:Zt.r,vx:0,vz:0,vy:0,holder:null,kicker:null,kickT:9}),ht("kickoff"))),i.kickT+=n,i.holder){let s=i.holder;i.x=s.x+Math.sin(s.aim)*.62,i.z=s.z+Math.cos(s.aim)*.62,i.y=Zt.r+Math.abs(Math.sin(e*9))*.06,i.vx=s.vx,i.vz=s.vz,ci.x=i.x,ci.z=i.z,Ai(ci,Zt.r*.8),i.x=ci.x,i.z=ci.z}else if(!t.resetT||t.resetT>0){let s=Math.max(1,Math.ceil(Math.hypot(i.vx,i.vz)*n/.25));for(let o=0;o<s;o++){let a=n/s,l=i.x,c=i.z;ci.x=i.x+i.vx*a,ci.z=i.z+i.vz*a,Ai(ci,Zt.r)&&(Math.abs(ci.x-(l+i.vx*a))>1e-4&&(i.vx=-i.vx*.65),Math.abs(ci.z-(c+i.vz*a))>1e-4&&(i.vz=-i.vz*.65),Math.hypot(i.vx,i.vz)>4&&we("hit_wall",i,.4,.7)),i.x=ci.x,i.z=ci.z}let r=Math.exp(-n*Zt.friction*(i.y>Zt.r+.05?.3:1));if(i.vx*=r,i.vz*=r,i.vy-=18*n,i.y+=i.vy*n,i.y<Zt.r&&(i.y=Zt.r,i.vy=Math.abs(i.vy)>2?-i.vy*.45:0),i.power&&Math.hypot(i.vx,i.vz)<8&&(i.power=!1),!t.over&&!t.resetT){let o=ai(i.x,i.z);o==="g"?$0(0):o==="h"&&$0(1)}if(!t.resetT&&y.state==="play"){let o=Math.hypot(i.vx,i.vz);for(let a of y.fighters)if(!(!a.alive||(a.x-i.x)**2+(a.z-i.z)**2>(a.H.rad+Zt.r+.1)**2)){if(i.power&&a.team!==(i.kicker&&i.kicker.team)){let l=o||1;a.kx+=i.vx/l*7,a.kz+=i.vz/l*7,a.stunT=Math.max(a.stunT,.5),i.vx*=.7,i.vz*=.7,i.power=!1,ht("ballHit",a,i.kicker);continue}if(!(a===i.kicker&&i.kickT<Zt.catchT)&&!(a!==i.kicker&&i.kickT<.08)&&!(o>16&&a.team===(i.kicker&&i.kicker.team)&&a!==i.kicker)){i.holder=a,i.power=!1,i.vy=0,we("gem",a,a===y.me?.6:.3,.7),ht("ballTaken",a);break}}}}if(Bn){Bn.grp.visible=t.resetT<=0||t.resetT>2.2,Bn.ball.position.set(i.x,i.y,i.z);let s=Math.hypot(i.vx,i.vz);s>.05&&(i.spin+=s*n/Zt.r,Bn.ball.rotation.set(i.spin*Math.cos(Math.atan2(i.vx,i.vz)),0,-i.spin*Math.sin(Math.atan2(i.vx,i.vz)))),Bn.sh.position.set(i.x,.03,i.z),Bn.sh.scale.setScalar(.9+(i.y-Zt.r)*.2),Bn.beam.position.set(i.x,0,i.z),Bn.beam.material.opacity=i.holder?.1:.2+Math.sin(e*4)*.05,s>9&&Math.random()<n*30&&St.emit({x:i.x,y:i.y,z:i.z,vx:0,vy:.4,vz:0,life:.35,t:0,s0:.18,s1:.02,r:1,g:.95,b:.75,a:.8,grav:0,drag:0,soft:1})}}}function Q0(){K0();let n=Bn.grp;return ue.remove(n),Bn=null,[n]}var Ce={yaw:Math.PI,pitch:-.08,x:0,z:0,dist:3.5,pivotH:1.6,shoulder:.6,sens:Pt.get("sens",1),turnTo:null},GS=-.6,VS=.38,Jn={},ji={l:!1,r:!1,x:0,y:0},lo=!1,Ie={move:null,atk:null,sup:null,cam:null},Et={x:0,y:0,z:0,foe:null,inRange:!1,gx:0,gz:0,groundHit:!1};function Ed(n,e,t){Ce.yaw-=n*t*Ce.sens,Ce.pitch=qe(Ce.pitch-e*t*Ce.sens,GS,VS),Ce.turnTo=null}addEventListener("keydown",n=>{Jn[n.code]=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&y.state!=="menu"&&n.preventDefault(),(n.code==="KeyE"||n.code==="Space")&&y.me&&(y.me.wantSup=!0)});addEventListener("keyup",n=>{Jn[n.code]=!1});addEventListener("blur",()=>{for(let n in Jn)Jn[n]=!1;ji.l=ji.r=!1});Xs.addEventListener("mousedown",n=>{if(to(),!tn){if(wd()&&!lo&&Xs.requestPointerLock)try{let e=Xs.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}n.button===0&&(ji.l=!0),n.button===2&&y.me&&(y.me.wantSup=!0)}});addEventListener("mouseup",n=>{n.button===0&&(ji.l=!1),n.button===2&&(ji.r=!1)});Xs.addEventListener("contextmenu",n=>n.preventDefault());addEventListener("mousemove",n=>{(lo||wd()&&!tn)&&!y.paused&&Ed(n.movementX,n.movementY,.0026),ji.x=n.clientX,ji.y=n.clientY});var ng=!1;document.addEventListener("pointerlockchange",()=>{lo=document.pointerLockElement===Xs,lo&&(ng=!0)});function ig(){let n=J("lockhint"),e=!lo&&!ng&&!tn&&y.state==="play"&&y.match&&y.match.t<12&&y.me&&y.me.alive&&!y.paused&&!ji.l;n.hidden===e&&(n.hidden=!e)}function pc(){document.exitPointerLock&&lo&&document.exitPointerLock()}var wd=()=>y.state==="play"||y.state==="countdown";function sg(n,e){let t=J("stick");t.style.left=n+"px",t.style.top=e+"px",t.hidden=!1}function WS(n){if(to(),!wd()||y.paused)return;let e=!1;for(let t of n.changedTouches){if(t.target.closest&&t.target.closest("button:not([data-btn]), input, .screen"))continue;e=!0;let i=t.target.closest&&t.target.closest("[data-btn]");if(i){let s=i.dataset.btn;(s==="atk"&&!Ie.atk||s==="sup"&&!Ie.sup&&y.me&&y.me.charge>=1)&&(Ie[s]={id:t.identifier,x:t.clientX,y:t.clientY,moved:0,t0:performance.now(),el:i},i.classList.add("on"));continue}t.clientX<innerWidth*.42&&!Ie.move?(Ie.move={id:t.identifier,x0:t.clientX,y0:t.clientY,dx:0,dy:0},sg(t.clientX,t.clientY)):Ie.cam||(Ie.cam={id:t.identifier,x:t.clientX,y:t.clientY})}e&&n.preventDefault()}function rg(){for(let n of["atk","sup"])Ie[n]&&(Ie[n].el.classList.remove("on"),Ie[n]=null);Ie.move=Ie.cam=null,J("stick").hidden=!0,J("knob").style.transform=""}var eg=.0055;function XS(n){if(!(!Ie.move&&!Ie.cam&&!Ie.atk&&!Ie.sup)){for(let e of n.changedTouches){if(Ie.move&&e.identifier===Ie.move.id){let t=e.clientX-Ie.move.x0,i=e.clientY-Ie.move.y0,s=Math.hypot(t,i),r=56;s>r&&(Ie.move.x0+=t*(1-r/s),Ie.move.y0+=i*(1-r/s),t=e.clientX-Ie.move.x0,i=e.clientY-Ie.move.y0,sg(Ie.move.x0,Ie.move.y0)),Ie.move.dx=t/r,Ie.move.dy=i/r,J("knob").style.transform=`translate(${t}px,${i}px)`;continue}if(Ie.cam&&e.identifier===Ie.cam.id){Ed(e.clientX-Ie.cam.x,e.clientY-Ie.cam.y,eg),Ie.cam.x=e.clientX,Ie.cam.y=e.clientY;continue}for(let t of["atk","sup"]){let i=Ie[t];if(!i||e.identifier!==i.id)continue;let s=e.clientX-i.x,r=e.clientY-i.y;i.moved+=Math.abs(s)+Math.abs(r),Ed(s,r,eg*.8),i.x=e.clientX,i.y=e.clientY}}n.preventDefault()}}function og(n){for(let e of n.changedTouches){Ie.move&&e.identifier===Ie.move.id&&(Ie.move=null,J("stick").hidden=!0,J("knob").style.transform=""),Ie.cam&&e.identifier===Ie.cam.id&&(Ie.cam=null);for(let t of["atk","sup"]){let i=Ie[t];if(!i||e.identifier!==i.id)continue;i.el.classList.remove("on");let s=y.me;if(s&&s.alive){let r=i.moved<14&&performance.now()-i.t0<350,o=r&&qS(t==="sup")||ao(s,t==="sup");s.inp.tx=o.x,s.inp.tz=o.z,t==="sup"?s.inp.sup=!0:s.inp.fire=!0,s.inp.locked=!0,r&&o.foe&&(Ce.turnTo=Math.atan2(o.x-s.x,o.z-s.z))}Ie[t]=null}}}document.addEventListener("touchstart",WS,{passive:!1});document.addEventListener("touchmove",XS,{passive:!1});document.addEventListener("touchend",og);document.addEventListener("touchcancel",og);function qS(n){let e=y.me,t=n?e.H.super:e.H.attack;if(y.ball&&y.ball.holder===e){let l=ha(1-e.team);return{x:l.x,z:l.z,foe:null}}let i=t.kind==="lob"||t.kind==="barrage"||t.kind==="beam",s=null,r=1e9;for(let l of y.fighters){if(!l.alive||l.team===e.team||!oo(e,l))continue;let c=Math.hypot(l.x-e.x,l.z-e.z);if(c>t.range*1.15)continue;let h=Math.abs(Br(Ce.yaw,Math.atan2(l.x-e.x,l.z-e.z))),u=!i&&fn(e.x,e.z,l.x,l.z)>=0,d=c+h*4+(u?10:0);d<r&&(r=d,s=l)}if(!s)return null;if(t.kind==="bounce"&&fn(e.x,e.z,s.x,s.z)>=0){let l=Td(e,s,t);if(l)return{x:e.x+Math.sin(l)*6,z:e.z+Math.cos(l)*6,foe:s}}let o=Math.hypot(s.x-e.x,s.z-e.z),a=t.kind==="lob"||t.kind==="barrage"?t.flight*.8:o/(t.speed||40);return{x:s.x+s.vx*a*.7,z:s.z+s.vz*a*.7,foe:s}}function Td(n,e,t){let i=Math.atan2(e.x-n.x,e.z-n.z);for(let s=1;s<=36;s++){let r=i+(s%2?1:-1)*Math.ceil(s/2)*.17;if(k0(_d(n.x,n.z,r,t.range,t.bounces),e.x,e.z,e.H.rad+.1))return r}return null}function ao(n,e){let t=e?n.H.super:n.H.attack;if(t.kind==="lob"||t.kind==="barrage"){let i=Math.atan2(Et.gx-n.x,Et.gz-n.z),s=Et.groundHit?qe(Math.hypot(Et.gx-n.x,Et.gz-n.z),1.5,t.range):t.range;return{x:n.x+Math.sin(i)*s,z:n.z+Math.cos(i)*s}}return{x:Et.x,z:Et.z}}var As=new P;function YS(n){let e=st.position,t=As;Et.groundHit=t.y<-.01;let i=Et.groundHit?(e.y-.05)/-t.y:40;Et.gx=e.x+t.x*Math.min(i,40),Et.gz=e.z+t.z*Math.min(i,40);let s=Math.max(.6,(n.x-e.x)*t.x+(n.z-e.z)*t.z),r=Math.min(i,40);for(let l=s;l<r;l+=.2){let c=e.x+t.x*l,h=e.y+t.y*l,u=e.z+t.z*l;if(h<wm(ai(c,u))){r=l;break}}Et.foe=null;let o=Math.hypot(t.x,t.z)||1e-6;for(let l of y.fighters){if(!l.alive||l.team===n.team||!l.seen)continue;let c=l.x-e.x,h=l.z-e.z,u=(c*t.x+h*t.z)/(o*o);if(u<=s-.6||u>=r)continue;let d=e.x+t.x*u-l.x,f=e.z+t.z*u-l.z,g=e.y+t.y*u;d*d+f*f<(l.H.rad+.15)**2&&g>-.2&&g<l.H.height+(l.H.hover||0)+.3&&(r=u,Et.foe=l)}Et.x=e.x+t.x*r,Et.y=e.y+t.y*r,Et.z=e.z+t.z*r,Math.hypot(Et.x-n.x,Et.z-n.z)<1.2&&(Et.x=n.x+Math.sin(Ce.yaw)*8,Et.z=n.z+Math.cos(Ce.yaw)*8);let a=n.H.attack;Et.inRange=!!Et.foe&&Math.hypot(Et.foe.x-n.x,Et.foe.z-n.z)<a.range+.5}function ag(n){let e=y.me;if(!e)return;let t=e.inp,i=0,s=0;Ie.move?(i=-Ie.move.dy,s=Ie.move.dx):(i=(Jn.KeyW||Jn.ArrowUp?1:0)-(Jn.KeyS||Jn.ArrowDown?1:0),s=(Jn.KeyD||Jn.ArrowRight?1:0)-(Jn.KeyA||Jn.ArrowLeft?1:0));let r=Math.hypot(i,s);r>1&&(i/=r,s/=r);let o=Math.sin(Ce.yaw),a=Math.cos(Ce.yaw);if(t.mx=o*i-a*s,t.mz=a*i+o*s,Ce.turnTo!==null){let l=Br(Ce.yaw,Ce.turnTo);Ce.yaw+=l*Math.min(1,n*8),Math.abs(l)<.02&&(Ce.turnTo=null)}if(YS(e),!t.locked){let l=ao(e,!1);t.tx=l.x,t.tz=l.z}if(t.locked=!1,t.aim=Math.atan2(t.tx-e.x,t.tz-e.z),e.aiming=!0,!tn){if(ji.l&&Ji(e)){let l=ao(e,!1);t.tx=l.x,t.tz=l.z,t.fire=!0}if(e.wantSup&&(e.wantSup=!1,e.charge>=1)){let l=ao(e,!0);t.tx=l.x,t.tz=l.z,t.sup=!0}}}var tg=new P,ZS=n=>n==="X";function lg(n){let e=y.me;if(!e)return;let t=1-Math.exp(-n*14);Ce.x=Nn(Ce.x,e.x,t),Ce.z=Nn(Ce.z,e.z,t);let i=Math.sin(Ce.yaw),s=Math.cos(Ce.yaw),r=Math.cos(Ce.pitch),o=Math.sin(Ce.pitch);As.set(i*r,o,s*r);let a=-s,l=i,c=Ce.x+a*Ce.shoulder*.4,h=Ce.z+l*Ce.shoulder*.4,u=Ce.pivotH,d=Ce.dist,f=c-As.x*d+a*Ce.shoulder,g=h-As.z*d+l*Ce.shoulder,x=fn(c,h,f,g,ZS),p=f,m=g,v=u-As.y*d+.25;if(x>=0){let _=Math.max(.3,x-.12);p=c+(f-c)*_,m=h+(g-h)*_,v=u+(v-u)*_}if(v=Math.max(.35,v),y.shake>0){let _=y.shake*.12;p+=(Math.random()-.5)*_,v+=(Math.random()-.5)*_,m+=(Math.random()-.5)*_,y.shake=Math.max(0,y.shake-n*2.5)}st.position.set(p,v,m),tg.set(p+As.x*10,v+As.y*10,m+As.z*10),st.lookAt(tg)}var Js=new Ft;Js.visible=!1;ue.add(Js);var mc=new De({color:"#FFFFFF",transparent:!0,opacity:.75,depthWrite:!1,depthTest:!1}),cg=new De({color:"#FFD23F",transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1}),hg=new fs(.86,1,40);hg.rotateX(-Math.PI/2);var Ks=new se(hg,mc);Ks.renderOrder=6;Js.add(Ks);var $S=new Gt(.06,8,6),Rs=[];for(let n=0;n<16;n++){let e=new se($S,mc);e.renderOrder=6,Js.add(e),Rs.push(e)}function ug(){let n=y.me,e=n&&n.alive&&y.state==="play"&&(!tn||Ie.atk||Ie.sup),t=tn?!!Ie.sup:n&&n.charge>=1&&Jn.KeyE,i=n&&(t?n.H.super:n.H.attack),s=i&&(i.kind==="lob"||i.kind==="barrage");if(e&&i&&i.kind==="bounce")return KS(n,i,t);if(Js.visible=!!(e&&s),!Js.visible)return;Ks.visible=!0,Rs.forEach(c=>{c.visible=!0});let r=t?cg:mc;r.opacity=Ji(n)||t?.8:.3,Ks.material=r,Rs.forEach(c=>c.material=r);let o=ao(n,t),a=Math.hypot(o.x-n.x,o.z-n.z),l=3.2+a*.2;Ks.position.set(o.x,.07,o.z),Ks.scale.setScalar(i.radius),Rs.forEach((c,h)=>{let u=(h+1)/(Rs.length+1);c.position.set(Nn(n.x,o.x,u),Nn(1,.15,u)+Math.sin(u*Math.PI)*l,Nn(n.z,o.z,u))})}function KS(n,e,t){Js.visible=!0,Ks.visible=!1;let i=t?cg:mc;i.opacity=Ji(n)||t?.8:.3,Rs.forEach(u=>u.material=i);let s=ao(n,t),r=_d(n.x,n.z,Math.atan2(s.x-n.x,s.z-n.z),Math.min(e.range,14),e.bounces),o=0;for(let u=1;u<r.length;u++)o+=Math.hypot(r[u].x-r[u-1].x,r[u].z-r[u-1].z);let a=Math.max(.55,o/Rs.length),l=1,c=0,h=a*.6;for(let u of Rs){for(;l<r.length;){let x=r[l-1],p=r[l],m=Math.hypot(p.x-x.x,p.z-x.z);if(c+h<=m){c+=h;break}h-=m-c,c=0,l++}if(l>=r.length){u.visible=!1;continue}let d=r[l-1],f=r[l],g=Math.hypot(f.x-d.x,f.z-d.z)||1;u.visible=!0,u.position.set(d.x+(f.x-d.x)*c/g,kn,d.z+(f.z-d.z)*c/g),h=a}}var JS={easy:{err:.22,react:.6,lead:.4,dodge:.2},normal:{err:.11,react:.35,lead:.75,dodge:.5},hard:{err:.05,react:.18,lead:1,dodge:.85}},jS={shroom:.5,beetle:.72,wasp:.82,roly:.62,hopper:.6};function gc(n="normal"){return{S:JS[n],temper:D()<.55?"careful":"bold",path:null,pathT:0,gx:null,gz:null,mode:"idle",target:null,seenT:0,mem:new Map,strafe:D()<.5?-1:1,strafeT:D(.6,1.6),thinkT:0,holdX:0,holdZ:0,stuck:0,lx:0,lz:0}}var vi=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function pn(n,e,t,i){let s=n.bot;if(s.pathT-=i,(!s.path||s.pathT<=0||Math.hypot((s.gx??1e9)-e,(s.gz??1e9)-t)>1.2)&&(s.path=Ju(n.x,n.z,e,t)?[{x:e,z:t}]:Tm(n.x,n.z,e,t),s.gx=e,s.gz=t,s.pathT=D(.5,.9)),!s.path||!s.path.length)return[0,0];let r=s.path[0];for(;s.path.length>1&&Math.hypot(r.x-n.x,r.z-n.z)<.45;)s.path.shift(),r=s.path[0];let o=r.x-n.x,a=r.z-n.z,l=Math.hypot(o,a);return l<.25?[0,0]:[o/l,a/l]}function mg(n,e){let t=n.bot,i=n.H,s=n.inp,r=y.match;if(!n.alive||!r)return;let o=y.time,a=null,l=-1e9;for(let d of y.fighters){if(!d.alive||d.team===n.team)continue;if(oo(n,d))t.mem.set(d.id,{x:d.x,z:d.z,t:o,o:d});else continue;let g=-vi(n,d)+(d.gems||0)*1.2+(y.ball&&y.ball.holder===d?6:0)+(d.power||0)*.5+(1-d.hp/d.max)*4+(d===t.target?2:0);g>l&&(l=g,a=d)}a!==t.target?(t.target=a,t.seenT=0):t.seenT+=e;let c=t.target;t.shootAt=null;let h=0,u=0;t.kick=null,r.mode==="br"?[h,u]=tE(n,t,c,e):r.mode==="ball"?[h,u]=QS(n,t,c,e):[h,u]=eE(n,t,c,e),nE(n,t,c,h,u,e),y.ball&&y.ball.holder===n&&(s.fire=s.sup=!1,t.kick&&(s.tx=t.kick.x,s.tz=t.kick.z,s.aim=Math.atan2(t.kick.x-n.x,t.kick.z-n.z),t.kick.sup&&n.charge>=1?s.sup=!0:s.fire=!0))}function dg(n,e,t){if(fn(n.x,n.z,e,t)>=0)return!1;let i=e-n.x,s=t-n.z,r=i*i+s*s||1;for(let o of y.fighters){if(!o.alive||o.team===n.team)continue;let a=qe(((o.x-n.x)*i+(o.z-n.z)*s)/r,0,1),l=n.x+i*a-o.x,c=n.z+s*a-o.z;if(a>.05&&l*l+c*c<1.2*1.2)return!1}return!0}function QS(n,e,t,i){let s=y.ball,r=y.match,o=y.time;if(!s||r.resetT>0)return[0,0];let a=ha(n.team),l=ha(1-n.team),c=y.fighters.filter(v=>v.team===n.team&&v.alive),h=s.holder,u=v=>Math.hypot(l.x-v.x,l.z-v.z);if(h===n){e.mode="carry";let v=l.x+(D()<.5?-1:1)*D(.8,2.6),_=u(n),M=dg(n,v,l.z);if(_<9.5&&M)return e.kick={x:v,z:l.z,sup:n.charge>=1&&_>6},[0,0];if(y.fighters.some(S=>S.alive&&S.team!==n.team&&Math.hypot(S.x-n.x,S.z-n.z)<3.5)&&o>(e.passT||0)){let S=c.filter(R=>R!==n&&u(R)<_+2&&Math.hypot(R.x-n.x,R.z-n.z)<12&&dg(n,R.x,R.z)).sort((R,F)=>u(R)-u(F))[0];if(S)return e.kick={x:S.x+S.vx*.35,z:S.z+S.vz*.35},e.passT=o+1.2,[0,0];if(_<14&&M)return e.kick={x:v,z:l.z,sup:n.charge>=1},[0,0]}return pn(n,l.x,l.z,i)}let d=c.slice().sort((v,_)=>Math.hypot(v.x-s.x,v.z-s.z)-Math.hypot(_.x-s.x,_.z-s.z)),f=d.indexOf(n),g=Math.hypot(s.x-n.x,s.z-n.z);if(!h&&(f===0||f===1&&g<7))return e.mode="ball",pn(n,s.x+s.vx*.3,s.z+s.vz*.3,i);if(h&&h.team!==n.team&&(f<=1||Math.hypot(h.x-a.x,h.z-a.z)<10))return e.mode="press",pn(n,h.x,h.z,i);if(n.slot===0){if(!h&&Math.hypot(s.x-a.x,s.z-a.z)<8)return e.mode="ball",pn(n,s.x,s.z,i);e.mode="guard";let v=.16;return pn(n,a.x+(s.x-a.x)*v,a.z+(s.z-a.z)*v,i)}e.mode="support";let x=n.slot===1?-1:1,p=s.x+(l.x-s.x)*.45+x*4,m=s.z+(l.z-s.z)*.45;return pn(n,qe(p,-k.hx+2,k.hx-2),m,i)}function eE(n,e,t,i){let s=n.H,r=y.match,o=y.time,a=r.count[n.team],l=r.count[1-n.team],c=k.spawns[n.team][1]||k.spawns[n.team][0];if(e.thinkT-=i,e.thinkT<=0){e.thinkT=D(.2,.35);let d=n.hp<n.max*.42;n.gems>=3&&d?e.mode="retreat":r.cd&&r.cd.team===n.team&&n.gems>0?e.mode=t&&vi(n,t)<s.attack.range*.8?"fight":"hold":d&&t&&vi(n,t)<6&&n.hp<t.hp?e.mode="retreat":t&&vi(n,t)<s.attack.range*1.35?e.mode="fight":y.pickups.length&&!(r.cd&&r.cd.team===n.team)?e.mode="collect":r.cd&&r.cd.team!==n.team?e.mode="hunt":e.mode="patrol"}let h=0,u=0;if(e.mode==="retreat"||e.mode==="hold"){let d=c.x+(n.slot-1)*2.5,f=c.z+(n.team===0?-3:3);[h,u]=pn(n,d,f,i),Math.hypot(n.x-d,n.z-f)<1.5&&(h=Math.sin(o*1.3+n.id)*.4,u=0)}else if(e.mode==="collect"){let d=null,f=1e9;for(let g of y.pickups){let x=Math.hypot(g.x-n.x,g.z-n.z)+(g.landed?0:1);x<f&&(f=x,d=g)}d&&([h,u]=pn(n,d.x,d.z,i))}else if(e.mode==="hunt"){let d=null;for(let m of y.fighters)m.alive&&m.team!==n.team&&(!d||m.gems>d.gems)&&(d=m);let f=d&&e.mem.get(d.id),g=k.mine||{x:0,z:0},x=f&&o-f.t<4?f.x:g.x,p=f&&o-f.t<4?f.z:g.z+(n.team===0?-4:4);[h,u]=pn(n,x,p,i)}else if(e.mode==="patrol"){let d=n.team===0?1:-1,f=k.mine||{x:0,z:0},g=f.x+(n.slot-1)*3.2,x=f.z+d*(2.5+(n.slot===1?0:1.5));[h,u]=pn(n,g,x,i)}return[h,u]}var fg=n=>n.hp*(1+.15*(n.power||0)),js=(n,e,t)=>Math.hypot(n,e)<t;function Ad(n,e,t,i=7){let s=null,r=1e9;for(let o=0;o<22;o++){let a=D(0,Te),l=D(0,i),c=n+Math.sin(a)*l,h=e+Math.cos(a)*l;if(!js(c,h,t))continue;let u=ai(c,h);if(u!=="."&&u!=='"')continue;let d=l+(u==='"'?-6:0);if(u==="."){let f=0;for(let[g,x]of[[1.6,0],[-1.6,0],[0,1.6],[0,-1.6]])ai(c+g,h+x)==="#"&&f++;d-=f*1.5}d<r&&(r=d,s={x:c,z:h})}return s}function tE(n,e,t,i){let s=n.H,r=y.match,o=y.time,a=h0(),l=Math.min(a,u0(8)),c=Math.hypot(n.x,n.z),h=e.temper==="bold";if(e.holdFire=!1,e.thinkT-=i,e.thinkT<=0){e.thinkT=D(.25,.4),e.crate=null,e.pk=null;let d=t?vi(n,t):1e9,f=s.attack.range,g=o-(n.hurtAt||-9)<1.5&&n.lastHitBy&&n.lastHitBy.alive,x=r.t<Bt.calm*(h?.75:1.1)&&!g,p=r.alive<=4,m=t?fg(n)/Math.max(1,fg(t)):9,v=t&&(t.x-n.x)*t.vx+(t.z-n.z)*t.vz>0&&Math.hypot(t.vx,t.vz)>2,_=t&&o-(t.hurtAt||-9)<1.5&&t.lastHitBy&&t.lastHitBy!==n&&t.lastHitBy.alive&&vi(t,t.lastHitBy)<12,M=x&&t&&!g;if(e.quiet=M,c>l-2.5)e.mode="zone";else if(n.hp<n.max*.4&&(!t||d>f*.6))e.mode="heal";else if(t&&g&&n.lastHitBy===t&&m<(x?1.3:.7)&&d>3)e.mode="retreat";else if(M){let w=pg(n,l);e.mode=w?w.pk?"collect":"crate":"hold",w&&(e.pk=w.pk,e.crate=w.crate)}else if(t&&_&&m<2.5&&t.hp>t.max*.35)e.mode="wait";else if(t&&d<f*(x?.6:1.3)&&!(v&&d>f*.9)&&(m>(r.alive<=2?.8:p?1.15:h?1:1.35)||g||d<f*.45))e.mode="fight";else if(t&&d<f*1.3)e.mode="avoid";else{let w=pg(n,l);if(w&&(w.pk||!p))e.mode=w.pk?"collect":"crate",e.pk=w.pk,e.crate=w.crate;else{let S=null;for(let R of e.mem.values())R.o.alive&&o-R.t<5&&js(R.x,R.z,l)&&(!S||R.t>S.t)&&(S=R);S&&!x&&n.hp>n.max*.8&&(r.alive<=2||h&&(n.power||0)>=4&&r.alive<=6&&!p)?(e.mode="hunt",e.huntX=S.x,e.huntZ=S.z):e.mode="hold"}}e.mode!==e.lastMode&&(e.spot=null,e.lastMode=e.mode)}let u=Math.max(2,l-2.5);if(e.noChase=!!t&&!js(t.x,t.z,l-1),(e.mode==="heal"||e.mode==="hold"||e.mode==="wait"||e.mode==="avoid"||e.quiet)&&(e.holdFire=!0),e.mode==="zone"){if(!e.spot||!js(e.spot.x,e.spot.z,u)){let d=Math.min(l*.55,c)/(c||1);e.spot=Ad(n.x*d,n.z*d,u,5)||{x:n.x*d,z:n.z*d}}return pn(n,e.spot.x,e.spot.z,i)}if((e.mode==="retreat"||e.mode==="avoid")&&t){let d=vi(n,t)||1;if(!e.spot||o>(e.spotT||0)){let f=n.x+(n.x-t.x)/d*7,g=n.z+(n.z-t.z)/d*7,x=Math.hypot(f,g);x>u&&(f*=u/x,g*=u/x),e.spot=Ad(f,g,u,4)||{x:f,z:g},e.spotT=o+1.5}return pn(n,e.spot.x,e.spot.z,i)}if(e.mode==="heal"||e.mode==="hold"||e.mode==="wait"){if(!e.spot||!js(e.spot.x,e.spot.z,u)){let d=n.x,f=n.z;if(e.mode==="wait"&&t){let g=vi(n,t)||1,x=n.H.attack.range+2;d=t.x+(n.x-t.x)/g*x,f=t.z+(n.z-t.z)/g*x}if(e.mode==="hold"&&c>l*.7){let g=l*.5/(c||1);d=n.x*g,f=n.z*g}e.spot=Ad(d,f,u)||{x:d,z:f}}return Math.hypot(e.spot.x-n.x,e.spot.z-n.z)>.8?pn(n,e.spot.x,e.spot.z,i):(t||(n.inp.aim+=i*.4),[0,0])}if(e.mode==="collect"&&e.pk&&y.pickups.includes(e.pk))return pn(n,e.pk.x,e.pk.z,i);if(e.mode==="crate"&&e.crate&&e.crate.alive){let d=e.crate,f=Math.hypot(d.x-n.x,d.z-n.z),g=Math.min(s.attack.range*.7,6),x=fn(n.x,n.z,d.x,d.z),p=n.x+(d.x-n.x)*x,m=n.z+(d.z-n.z)*x,v=x<0||gi(p+(d.x-n.x)/(f||1)*.08)===d.c&&xi(m+(d.z-n.z)/(f||1)*.08)===d.r;return f<g+.5&&(v||s.attack.kind==="lob")?(e.shootAt=d,[Math.sin(o*1.7+n.id)*.3,Math.cos(o*1.3+n.id)*.3]):pn(n,d.x,d.z,i)}if(e.mode==="hunt"){if(Math.hypot(e.huntX-n.x,e.huntZ-n.z)>1.2)return pn(n,e.huntX,e.huntZ,i);e.thinkT=0}return[0,0]}function pg(n,e){let t=y.fighters.filter(l=>l.alive&&l!==n&&n.bot.mem.has(l.id)&&y.time-n.bot.mem.get(l.id).t<3),i=(l,c,h)=>!t.some(u=>Math.hypot(u.x-l,u.z-c)<h-.5),s=null,r=14;for(let l of y.pickups){let c=Math.hypot(l.x-n.x,l.z-n.z);c<r&&js(l.x,l.z,e-1.5)&&i(l.x,l.z,c)&&(r=c,s=l)}if(s)return{pk:s};let o=null,a=18;for(let l of k.crates){if(!l.alive)continue;let c=Math.hypot(l.x-n.x,l.z-n.z);c<a&&js(l.x,l.z,e-1.5)&&i(l.x,l.z,c)&&(a=c,o=l)}return o?{crate:o}:null}function nE(n,e,t,i,s,r){let o=n.H,a=n.inp,l=y.time;if(t&&(e.mode==="fight"||vi(n,t)<o.attack.range)){let u=vi(n,t),d=o.attack.range*jS[n.hero],f=(t.x-n.x)/(u||1),g=(t.z-n.z)/(u||1);if(e.strafeT-=r,e.strafeT<=0&&(e.strafeT=D(.5,1.4),e.strafe=-e.strafe),e.mode==="fight"){let x=0,p=0;e.noChase||(u>d+1||!Ku(n.x,n.z,t.x,t.z)&&n.hero!=="beetle"?[x,p]=pn(n,t.x,t.z,r):u<d-1.5&&(x=-f,p=-g)),i=x*.9+-g*e.strafe*.7,s=p*.9+f*e.strafe*.7}}if(Math.random()<e.S.dodge)for(let u of y.shots){if(u.team===n.team)continue;let d=n.x-u.x,f=n.z-u.z,g=Math.hypot(u.vx,u.vz),x=(d*u.vx+f*u.vz)/g;if(x<0||x>6)continue;let p=(d*u.vz-f*u.vx)/g;if(Math.abs(p)<1.1){let m=p>=0?1:-1;i+=u.vz/g*m*1.4,s+=-u.vx/g*m*1.4;break}}for(let u of y.puddles)if(u.team!==n.team){let d=n.x-u.x,f=n.z-u.z,g=Math.hypot(d,f);g<u.r+.5&&(i+=d/(g||1)*1.5,s+=f/(g||1)*1.5)}let c=Math.hypot(n.x-e.lx,n.z-e.lz);e.lx=n.x,e.lz=n.z,Math.hypot(i,s)>.3&&c<.01?e.stuck+=r:e.stuck=Math.max(0,e.stuck-r),e.stuck>.6&&(e.path=null,i+=D(-1,1),s+=D(-1,1),e.stuck>1.2&&(e.stuck=0));let h=Math.hypot(i,s);if(h>1&&(i/=h,s/=h),a.mx=i,a.mz=s,h>.1&&(a.aim=Math.atan2(i,s)),a.fire=a.sup=!1,t){let u=vi(n,t),d=o.attack,f=o.super,g=d.speed||d.range/(d.flight||.8),x=(d.kind==="lob"?d.flight*(.65+.35*u/d.range):u/g)*e.S.lead,p=t.x+t.vx*x,m=t.z+t.vz*x,v=e.S.err*(1+(t.inGrass?.5:0)),_=Math.atan2(p-n.x,m-n.z)+D(-v,v);p=n.x+Math.sin(_)*u,m=n.z+Math.cos(_)*u,a.aim=_,a.tx=p,a.tz=m;let M=Ku(n.x,n.z,t.x,t.z),w=y.time-(n.hurtAt||-9)<1.5,S=e.seenT>e.S.react&&(!e.holdFire||w||!e.quiet&&u<d.range*.55);if(S&&n.charge>=1&&(f.kind==="fan"&&u<f.range*.75&&M||f.kind==="barrage"&&u<f.range||f.kind==="beam"&&u<f.range*.9||f.kind==="bounce"&&u<11||f.kind==="frenzy"&&u<d.range&&M)&&(a.sup=!0),!a.sup&&S&&Ji(n)){let R=u<d.range*(d.kind==="fan"?.85:d.kind==="lob"?1:.95),F=n.frenzyT>0||(n.ammo>=2||u<d.range*.6||t.hp<t.max*.4)&&!(d.kind==="burst"&&(n.bloom||0)>.6&&u>d.range*.5);if(R&&(M||d.kind==="lob")&&F)a.fire=!0;else if(d.kind==="bounce"&&!M&&u<d.range*.8&&F&&l>(e.bankT||0)){e.bankT=l+.3;let b=Td(n,t,d);b!==null&&(a.aim=b,a.tx=n.x+Math.sin(b)*6,a.tz=n.z+Math.cos(b)*6,a.fire=!0)}}}else if(e.shootAt){let u=e.shootAt;a.aim=Math.atan2(u.x-n.x,u.z-n.z),a.tx=u.x,a.tz=u.z,Ji(n)&&n.ammo>=1&&(a.fire=!0)}else if(n.hero==="beetle"&&!e.holdFire&&Ji(n)&&n.ammo>=2.5)for(let u of e.mem.values()){if(!u.o.alive||l-u.t>2.5||l-u.t<.4)continue;if(Math.hypot(u.x-n.x,u.z-n.z)<o.attack.range&&(Vl(u.x,u.z)||!$r(n.x,n.z,u.x,u.z))){a.aim=Math.atan2(u.x-n.x,u.z-n.z),a.tx=u.x,a.tz=u.z,a.fire=!0;break}}}var co={goal:10,hold:15,interval:5,first:4,dur:180},jn=null,gg=new ml(.2,0),iE=ct({color:"#B583FF",emissive:"#8A4DFF",emissiveIntensity:1.6,roughness:.2,flatShading:!0}),sE=new De({color:new ne("#E9D8FF").multiplyScalar(2),toneMapped:!1}),rE=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(0,0,0,.45)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Dn(n)})(),vg=new Dt(.7,.7);vg.rotateX(-Math.PI/2);var oE=new De({map:rE,transparent:!0,depthWrite:!1});function Rd(n=!0){if(jn&&(ue.remove(jn.g),jn=null),!k.mine||!n)return;let e=new Ft;e.position.set(k.mine.x,0,k.mine.z);let t=new se(new qt(.95,1.35,.32,24),ct({color:"#6E5A3E",roughness:.95}));t.position.y=.12,t.receiveShadow=t.castShadow=!0,e.add(t);let i=new se(new Nr(.95,.16,8,28),ct({color:"#5E9E3A",roughness:.9}));i.rotation.x=Math.PI/2,i.position.y=.27,e.add(i);let s=document.createElement("canvas");s.width=s.height=256;let r=s.getContext("2d"),o=r.createRadialGradient(128,128,10,128,128,128);o.addColorStop(0,"#F4E8FF"),o.addColorStop(.25,"#B58AFF"),o.addColorStop(.6,"#5A2AB8"),o.addColorStop(.9,"#2A0F5A"),o.addColorStop(1,"#1A0A30"),r.fillStyle=o,r.fillRect(0,0,256,256),r.globalCompositeOperation="lighter";for(let x=0;x<5;x++){r.strokeStyle="rgba(200,160,255,.35)",r.lineWidth=6,r.beginPath();for(let p=0;p<2.6;p+=.05){let m=18+p*40;r.lineTo(128+Math.cos(p+x*1.256)*m,128+Math.sin(p+x*1.256)*m)}r.stroke()}let a=new Dn(s);a.colorSpace=ut;let l=new De({map:a,color:"#FFFFFF"}),c=new se(new Un(.78,32),l);c.rotation.x=-Math.PI/2,c.position.y=.29,e.add(c);let h=ct({color:"#F1E6FF",roughness:.6}),u=ct({color:"#B07BFF",emissive:"#7A3DFF",emissiveIntensity:.9,roughness:.4}),d=new qt(.05,.07,1,8),f=new Gt(1,14,8,0,Te,0,Math.PI/2),g=[];for(let x=0;x<9;x++){let p=x/9*Te+D(-.15,.15),m=D(1.2,1.5),v=D(.25,.55),_=new se(d,h);_.scale.set(1,v,1),_.position.set(Math.cos(p)*m,v/2,Math.sin(p)*m),_.castShadow=!0,e.add(_);let M=new se(f,u);M.scale.set(D(.14,.22),D(.1,.16),D(.14,.22)),M.position.set(Math.cos(p)*m,v,Math.sin(p)*m),M.castShadow=!0,e.add(M),g.push(M)}ue.add(e),jn={g:e,hole:c,holeMat:l,caps:g,pulse:0}}function _g(n,e,t,i,s=4){let r=new se(gg,iE);r.castShadow=!0;let o=new se(gg,sE);o.scale.setScalar(.5),r.add(o);let a=new se(vg,oE);a.renderOrder=1,ue.add(r,a),y.pickups.push({x:n,z:e,y:.5,vx:t,vz:i,vy:s,t:0,m:r,sh:a,landed:!1,ph:D(0,Te)})}function yg(n){let e=y.pickups[n];ue.remove(e.m,e.sh),y.pickups.splice(n,1)}function Cd(){for(let n=y.pickups.length-1;n>=0;n--)yg(n)}function Mg(){Cd(),y.match={mode:"spores",t:0,dur:co.dur,over:!1,winner:null,respawn:!0,count:[0,0],cd:null,mineT:co.first,hot:!1,spawned:0}}It("kill",n=>{if(!y.match||y.match.mode!=="spores"||!n.gems)return;let e=n.gems;n.gems=0;for(let t=0;t<e;t++){let i=t/e*Te+D(-.3,.3),s=D(1.5,3.2);_g(n.x,n.z,Math.sin(i)*s,Math.cos(i)*s,D(3,5))}we("gem_drop",n)});var ua={x:0,z:0};function bg(n,e){let t=y.match;if(!t||t.mode!=="spores")return;if(jn){jn.pulse=Math.max(0,jn.pulse-n*1.5);let r=.9+Math.sin(e*3)*.12+jn.pulse*1.2;jn.holeMat.color.setScalar(r),jn.hole.rotation.z=e*.6,Math.random()<n*6&&St.emit({x:k.mine.x+D(-.5,.5),y:.35,z:k.mine.z+D(-.5,.5),vx:0,vy:D(.5,1.2),vz:0,life:1.1,t:0,s0:.1,s1:.02,r:.75,g:.55,b:1,a:1,grav:0,drag:.3,soft:1}),jn.caps.forEach((o,a)=>{o.position.y+=Math.sin(e*2+a)*8e-4})}if(y.state==="play"&&!t.over&&(t.t+=n,t.mineT-=n,t.mineT<=0)){t.mineT=co.interval,t.spawned++;let r=D(0,Te),o=D(.8,2.2);_g(k.mine.x,k.mine.z,Math.sin(r)*o,Math.cos(r)*o,5.5),jn&&(jn.pulse=1),bt(St,k.mine.x,.5,k.mine.z,{n:16,color:"#C9A0FF",sp:2.5,upMin:.5,vy:2,life:.7,s0:.25,s1:.04,soft:!0}),Ci(k.mine.x,k.mine.z,.5,2.2,.6,"#B583FF"),we("respawn",k.mine,.6)}for(let r=y.pickups.length-1;r>=0;r--){let o=y.pickups[r];o.t+=n,o.landed||(o.vy-=16*n,o.x+=o.vx*n,o.z+=o.vz*n,o.y+=o.vy*n,ua.x=o.x,ua.z=o.z,Ai(ua,.25)&&(o.x=ua.x,o.z=ua.z,o.vx*=-.4,o.vz*=-.4),o.y<.45&&(o.y=.45,Math.abs(o.vy)>2?(o.vy=-o.vy*.4,o.vx*=.6,o.vz*=.6):o.landed=!0));let a=o.landed?Math.sin(e*3+o.ph)*.08:0;if(o.m.position.set(o.x,o.y+a,o.z),o.m.rotation.y=e*2+o.ph,o.m.rotation.x=.3,o.sh.position.set(o.x,.04,o.z),Math.random()<n*3&&St.emit({x:o.x+D(-.2,.2),y:o.y,z:o.z+D(-.2,.2),vx:0,vy:.5,vz:0,life:.6,t:0,s0:.08,s1:.01,r:.75,g:.6,b:1,a:1,grav:0,drag:.5,soft:1}),!(o.t<.35||y.state!=="play")){for(let l of y.fighters)if(!(!l.alive||(l.x-o.x)**2+(l.z-o.z)**2>.85*.85)){l.gems++,yg(r),bt(St,l.x,1,l.z,{n:10,color:"#C9A0FF",sp:2,vy:1.5,life:.4,s0:.16,s1:.02,soft:!0}),we("gem",l,l===y.me?1:.7,1+Math.min(10,l.gems)*.03),ht("pickup",l);break}}}t.count[0]=t.count[1]=0;for(let r of y.fighters)r.alive&&(t.count[r.team]+=r.gems);if(t.over)return;let i=t.count,s=i[0]>=co.goal&&i[0]>i[1]?0:i[1]>=co.goal&&i[1]>i[0]?1:-1;if(s<0)t.cd&&(ht("countdownStop",t.cd.team),t.cd=null);else if(!t.cd||t.cd.team!==s)t.cd={team:s,t:co.hold},ht("countdownStart",s);else if(y.state==="play"){let r=Math.ceil(t.cd.t);if(t.cd.t-=n,Math.ceil(t.cd.t)!==r&&t.cd.t>0&&ht("countdownTick",Math.ceil(t.cd.t)),t.cd.t<=0)return xg(s,"spores")}t.hot=!!t.cd||t.dur-t.t<30,t.t>=t.dur&&!t.cd&&xg(i[0]>i[1]?0:i[1]>i[0]?1:-1,"time")}function xg(n,e){let t=y.match;t.over=!0,t.winner=n,t.why=e,ht("matchOver",n,e)}var ho=new P,Tg='<span class="gem-ico"></span>';function Id(n){let e=document.createElement("div");e.className="tag "+io(n),e.innerHTML=`<div class="gm" hidden>${Tg}<b></b></div><div class="tn">${an(n.name)}</div><div class="hpb"><s></s><u></u><b></b></div>`+(n===y.me?'<div class="am">'+"<i><u></u></i>".repeat(Kn)+"</div>":"")+'<i class="sup"></i><i class="spot">!</i>',J("hud-world").appendChild(e),n.tag={el:e,gm:e.querySelector(".gm"),gmb:e.querySelector(".gm b"),u:e.querySelector(".hpb u"),s:e.querySelector(".hpb s"),b:e.querySelector(".hpb b"),am:[...e.querySelectorAll(".am i")],last:{}}}function Ag(){let n=innerWidth,e=innerHeight;for(let t of y.fighters){let i=t.tag;if(!i)continue;if(!(t.alive&&t.seen&&y.state!=="menu"&&J("end").hidden&&t!==y.me)){i.last.vis!==!1&&(i.el.style.display="none",i.last.vis=!1);continue}if(ho.set(t.V.root.position.x,t.H.height+(t.H.hover||0)+.45,t.V.root.position.z).project(st),ho.z>1||Math.abs(ho.x)>1.2||Math.abs(ho.y)>1.2){i.last.vis!==!1&&(i.el.style.display="none",i.last.vis=!1);continue}i.last.vis!==!0&&(i.el.style.display="",i.last.vis=!0);let r=st.position.distanceTo(t.V.root.position),o=Math.max(.5,Math.min(1.05,7/r));i.el.style.transform=`translate(${((ho.x*.5+.5)*n).toFixed(1)}px,${((-ho.y*.5+.5)*e).toFixed(1)}px) translate(-50%,-100%) scale(${o.toFixed(2)})`;let a=y.me&&t.team!==y.me.team&&vd(y.me.team,t)&&!$r(y.me.x,y.me.z,t.x,t.z);i.last.sp!==a&&(i.el.classList.toggle("spotted",a),i.last.sp=a);let l=Math.max(0,Math.ceil(t.hp)),c=(l/t.max*100).toFixed(1)+"%";i.last.hp!==l&&(i.u.style.width=c,i.s.style.width=c,i.b.textContent=l,i.last.hp=l);let h=y.match&&y.match.mode==="br"?t.power||0:t.gems;i.last.gems!==h&&(i.gm.hidden=!h,i.gmb.textContent=h,i.last.gems=h);let u=t.charge>=1;i.last.ready!==u&&(i.el.classList.toggle("ready",u),i.last.ready=u),i.am.length&&i.am.forEach((d,f)=>{let g=qe(t.ammo-f,0,1);d.firstChild.style.width=(g*100).toFixed(0)+"%",d.classList.toggle("full",g>=1)})}}var Sg=n=>(n=Math.max(0,Math.ceil(n)),Math.floor(n/60)+":"+String(n%60).padStart(2,"0")),Pd=null;function vc(){let n=y.match,e=y.me;if(!n||!e)return;let t=e.team,i=n.mode==="br";if(i){Cs("sc0",n.alive),Cs("sc1",e.power||0);let g=Bt.wait-n.t;Cs("timer",g>0?Sg(g):"\u2601"),Cs("mode-lbl",Lt(g>0?"\u0422\u0443\u043C\u0430\u043D":n.fog.r>Bt.r1?"\u0422\u0443\u043C\u0430\u043D \u0438\u0434\u0451\u0442":"\u0424\u0438\u043D\u0430\u043B"))}else Cs("sc0",n.count[t]),Cs("sc1",n.count[1-t]),Cs("timer",n.golden?"\u26BD":Sg(n.dur-n.t)),Cs("mode-lbl",Lt(n.mode==="ball"?n.golden?"\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0433\u043E\u043B":"\u0414\u043E\u0436\u0434\u0435\u0432\u0438\u043A\u0431\u043E\u043B":"\u0421\u043F\u043E\u0440\u044B"));let s=J("cdown");if(n.cd&&!n.over&&!i){s.hidden=!1;let g=n.cd.team===t,x=Math.ceil(n.cd.t);s.classList.toggle("foe",!g),x!==Pd&&(J("cd-n").textContent=x,s.classList.remove("pulse"),s.offsetWidth,s.classList.add("pulse"),Pd=x),J("cd-t").textContent=g?Lt("\u0414\u0435\u0440\u0436\u0438\u043C \u0441\u043F\u043E\u0440\u044B!"):Lt("\u0412\u0440\u0430\u0433 \u0443\u043D\u043E\u0441\u0438\u0442 \u0441\u043F\u043E\u0440\u044B!")}else s.hidden=!0,Pd=null;let r=e.charge,o=r>=1;J("sp-ring").style.strokeDashoffset=(214*(1-r)).toFixed(1),J("superpc").classList.toggle("ready",o),J("tsp-ring").style.strokeDashoffset=(277*(1-r)).toFixed(1),J("b-sup").classList.toggle("ready",o);let a=J("ammopc").children;for(let g=0;g<a.length;g++){let x=qe(e.ammo-g,0,1);a[g].firstChild.style.width=(x*100).toFixed(0)+"%",a[g].classList.toggle("full",x>=1)}aE(e);let l=Math.max(0,Math.ceil(e.hp)),c=l+"/"+e.id;vc.hp!==c&&(vc.hp=c,J("mehp").firstChild.style.width=(l/e.max*100).toFixed(1)+"%",J("mehp").lastChild.textContent=l);let u="xhair "+(Et.foe?Et.inRange?"foe":"far":"")+(e.ammo<1?" empty":"")+(e.H.attack.kind==="lob"?" lob":""),d=J("xhair");d.className!==u&&(d.className=u),d.hidden=!e.alive;let f=J("dead");!e.alive&&!n.over&&n.respawn?(f.hidden=!1,J("dead-n").textContent=Math.max(1,Math.ceil(e.respawnT))):f.hidden=!0}var Eg={};function Cs(n,e){e=String(e),Eg[n]!==e&&(Eg[n]=e,J(n).textContent=e)}function aE(n){if(!tn)return;let e=J("tammo");if(!e.childElementCount){let t="";for(let i=0;i<Kn;i++)t+=`<path class="tammo-seg" stroke="rgba(0,0,0,.35)" d="${wg(i)}"/><path class="tammo-seg" id="tam${i}" stroke="#FFC93C" d="${wg(i)}"/>`;e.innerHTML=t}for(let t=0;t<Kn;t++){let i=qe(n.ammo-t,0,1),s=J("tam"+t),r=s._len||(s._len=s.getTotalLength());s.style.strokeDasharray=r,s.style.strokeDashoffset=(r*(1-i)).toFixed(1),s.setAttribute("stroke",i>=1?"#FFC93C":"#FF8A3D")}}function wg(n){let s=-Math.PI/2+n/Kn*Math.PI*2+.12,r=-Math.PI/2+(n+1)/Kn*Math.PI*2-.12;return`M${(60+Math.cos(s)*54).toFixed(1)} ${(60+Math.sin(s)*54).toFixed(1)}A54 54 0 0 1 ${(60+Math.cos(r)*54).toFixed(1)} ${(60+Math.sin(r)*54).toFixed(1)}`}function _c(n,e){let t=document.createElement("div");t.className=e||"",t.innerHTML=n;let i=J("feed");for(i.appendChild(t);i.children.length>4;)i.firstChild.remove();setTimeout(()=>t.remove(),4200)}var xc=0;function mn(n,e,t,i=1.8){let s=J("ann");s.className="ann "+(t||""),s.innerHTML="<b>"+an(Lt(n))+"</b>"+(e?"<span>"+an(Lt(e))+"</span>":""),s.offsetWidth,s.classList.add("show"),s.style.opacity=1,xc=i}function Rg(n){xc>0&&(xc-=n,xc<=0&&(J("ann").style.opacity=0))}function Cg(n,e){let t=J("heroes");t.innerHTML=Ri.map(o=>{let a=$n[o];return`<button class="hcard${o===n?" sel":""}" data-h="${o}">${Jr[o]}<b>${an(a.name)}</b><small>${an(a.role)}</small></button>`}).join("");for(let o of t.querySelectorAll(".hcard"))o.onclick=()=>e(o.dataset.h);let i=$n[n],s=(o,a,l,c)=>`<div class="stat"><span>${o}</span><i><u style="width:${qe(a/l*100,6,100).toFixed(0)}%"></u></i><em>${c}</em></div>`,r=i.attack.kind==="fan"||i.attack.kind==="burst"?i.attack.dmg*i.attack.count:i.attack.kind==="needle"?i.attack.dmgFar:i.attack.dmg;J("hero-info").innerHTML=`<h3>${an(i.name)}</h3><div class="sub">${an(i.species)} \xB7 ${an(i.role)}</div><p>${an(i.desc)}</p>`+s("\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435",i.hp,4200,i.hp)+s("\u0423\u0440\u043E\u043D",r,1600,Math.round(r))+s("\u0414\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",i.attack.range,15,i.attack.range.toFixed(0)+" \u043C")+s("\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",i.speed-3.5,2,i.speed.toFixed(1))+`<div class="abil"><span class="k">\u2694</span><div><b>${an(i.attack.name)}</b><small>${an(lE(i.attack))}</small></div></div><div class="abil"><span class="k s">\u2605</span><div><b>${an(i.super.name)}</b><small>${an(i.super.desc)}</small></div></div>`}function lE(n){return n.kind==="fan"?n.count+" \u0441\u043F\u043E\u0440 \u0432\u0435\u0435\u0440\u043E\u043C":n.kind==="lob"?"\u0431\u043E\u043C\u0431\u0430 \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B, \u0433\u043E\u0440\u044F\u0449\u0430\u044F \u043B\u0443\u0436\u0430":n.kind==="bounce"?"\u043E\u0442\u0441\u043A\u0430\u043A\u0438\u0432\u0430\u0435\u0442 \u043E\u0442 \u043A\u0443\u0441\u0442\u043E\u0432 "+n.bounces+" \u0440\u0430\u0437\u0430, \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u0441\u043A\u043E\u043A\u0430 \u0431\u044C\u0451\u0442 \u0441\u0438\u043B\u044C\u043D\u0435\u0435":n.kind==="burst"?"\u043E\u0447\u0435\u0440\u0435\u0434\u044C \u0438\u0437 "+n.count+" \u0437\u0430\u0440\u044F\u0434\u043E\u0432, \u0440\u0430\u0437\u0431\u0440\u043E\u0441 \u0440\u0430\u0441\u0442\u0451\u0442 \u043F\u0440\u0438 \u0441\u0442\u0440\u0435\u043B\u044C\u0431\u0435":"\u0434\u0430\u043B\u044C\u043D\u0438\u0439 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u0443\u0440\u043E\u043D \u0440\u0430\u0441\u0442\u0451\u0442 \u0441 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C"}function Pg(n){let e=y.me,t=y.match;if(t.mode==="br")return hE(n);J("e-board").classList.remove("br");let i=J("e-title");i.textContent=Lt(n==="win"?"\u041F\u043E\u0431\u0435\u0434\u0430!":n==="lose"?"\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435":"\u041D\u0438\u0447\u044C\u044F"),i.className=n,t.mode==="ball"?J("e-sub").textContent=Lt("\u0421\u0447\u0451\u0442")+" "+t.count[e.team]+" : "+t.count[1-e.team]:J("e-sub").textContent=Lt(t.why==="spores"?t.winner===e.team?"\u0422\u0432\u043E\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0430 \u0441\u043F\u043E\u0440\u044B.":"\u0412\u0440\u0430\u0433\u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0438 \u0441\u043F\u043E\u0440\u044B.":"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E: ")+(t.why==="time"?t.count[e.team]+" : "+t.count[1-e.team]:"");let s=a=>a.kills*3+a.dmgDone/1500+(a.gemsPicked||0)*.6,r=[...y.fighters].sort((a,l)=>s(l)-s(a))[0],o=[...y.fighters].sort((a,l)=>(a.team===e.team?0:1)-(l.team===e.team?0:1)||s(l)-s(a));J("e-board").innerHTML=o.map(a=>`<tr class="t${a.team===e.team?0:1}${a===e?" me":""}"><td>${Jr[a.hero]}</td><td>${an(a.name)}${a===r?'<span class="mvp">MVP</span>':""}</td><td>\u2694 ${a.kills}</td><td>\u2620 ${a.deaths}</td><td>${t.mode==="ball"?"\u26BD":Tg} ${a.gemsPicked||0}</td><td>${Math.round(a.dmgDone)}</td></tr>`).join(""),J("end").hidden=!1}var cE=[20,15,12,9,7,5,3,2,1,0],Ld={v:0};function hE(n){let e=y.me,t=y.match,i=J("e-title"),s=h=>Zn.lang==="en"?"#"+h+" place":"#"+h+" \u043C\u0435\u0441\u0442\u043E";i.textContent=n==="win"?Lt("\u041F\u043E\u0431\u0435\u0434\u0430!"):s(t.place),i.className=t.place<=3?"win":"lose";let r=e.lastHitBy,o=cE[t.place-1]||0,a=Math.min(3,e.kills);t.scored||(t.scored=!0,Ld.v=(+Pt.get("brPts",0)||0)+o+a,Pt.set("brPts",Ld.v)),J("e-sub").textContent=(n==="win"?Lt("\u0422\u044B \u2014 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431!"):r&&r!==e?Lt("\u0422\u0435\u0431\u044F \u0441\u0440\u0435\u0437\u0430\u043B: ")+r.name:Lt("\u0422\u0435\u0431\u044F \u043D\u0430\u043A\u0440\u044B\u043B \u044F\u0434\u043E\u0432\u0438\u0442\u044B\u0439 \u0442\u0443\u043C\u0430\u043D."))+" \xB7 "+Lt("\u041E\u0447\u043A\u0438")+": +"+o+(a?" +"+a+" \u2694":"")+" ("+Lt("\u0432\u0441\u0435\u0433\u043E")+" "+Ld.v+")";let l=[...y.fighters].sort((h,u)=>(h.place||0)-(u.place||0)||u.kills-h.kills),c='<span class="gem-ico gold"></span>';J("e-board").classList.add("br"),J("e-board").innerHTML=l.map(h=>`<tr class="t${h===e?0:1}${h===e?" me":""}${h.alive?"":" out"}"><td class="pl">${h.place?"#"+h.place:"\u2014"}</td><td>${Jr[h.hero]}</td><td>${an(h.name)}</td><td>\u2694 ${h.kills}</td><td>${c} ${h.power||0}</td><td>${Math.round(h.dmgDone)}</td></tr>`).join(""),J("end").hidden=!1}var ln={sdk:null,ready:!1,adOn:!1,playing:!1},Fd=()=>!!window.YaGames;async function Lg(){if(Fd())try{ln.sdk=await window.YaGames.init();try{let n=ln.sdk.environment.i18n.lang;n&&ql(Xl(n))}catch{}}catch{}}function Ig(){if(ln.sdk&&!ln.ready){ln.ready=!0;try{ln.sdk.features.LoadingAPI.ready()}catch{}}}function Fg(){if(!ln.sdk)return;let n=!ln.adOn&&!y.paused&&!document.hidden&&(y.state==="play"||y.state==="countdown");if(n!==ln.playing){ln.playing=n;try{let e=ln.sdk.features.GameplayAPI;n?e.start():e.stop()}catch{}}}function uE(){if(ln.adOn=!0,Re.ad=!0,tc(!0),document.exitPointerLock)try{document.exitPointerLock()}catch{}}function dE(){ln.adOn=!1,Re.ad=!1,document.hidden||tc(!1)}function Dd(n){if(!ln.sdk){n&&n();return}let e=!1,t=()=>{e||(e=!0,dE(),n&&n())};try{ln.sdk.adv.showFullscreenAdv({callbacks:{onOpen:uE,onClose:t,onError:t,onOffline:t}})}catch{t()}}addEventListener("visibilitychange",()=>{ln.adOn||tc(document.hidden)});var cn={hero:$n[Pt.get("hero","shroom")]?Pt.get("hero","shroom"):"shroom",diff:Pt.get("diff","normal"),mode:["br","ball"].includes(Pt.get("mode","spores"))?Pt.get("mode","spores"):"spores"},fE=n=>Zn.lang==="en"?`#${n} place`:`#${n} \u043C\u0435\u0441\u0442\u043E`,kg=["\u0413\u0440\u0443\u0437\u0434\u044C","\u041E\u043F\u0451\u043D\u043E\u043A","\u0421\u043C\u043E\u0440\u0447\u043E\u043A","\u0420\u044B\u0436\u0438\u043A","\u041C\u0430\u0441\u043B\u0451\u043D\u043E\u043A","\u0412\u043E\u043B\u043D\u0443\u0448\u043A\u0430","\u0421\u0442\u0440\u043E\u0447\u043E\u043A","\u0411\u0435\u043B\u044F\u043D\u043A\u0430","\u0415\u0436\u043E\u0432\u0438\u043A","\u0414\u0443\u0431\u043E\u0432\u0438\u043A","\u0412\u0435\u0448\u0435\u043D\u043A\u0430","\u041A\u043E\u0440\u043E\u0435\u0434","\u0428\u0435\u0440\u0448\u0435\u043D\u044C","\u0416\u0443\u0436\u0435\u043B\u0438\u0446\u0430","\u0429\u0435\u043B\u043A\u0443\u043D","\u0421\u0432\u0435\u0442\u043B\u044F\u0447\u043E\u043A","\u041C\u0435\u0434\u0432\u0435\u0434\u043A\u0430","\u0414\u043E\u043B\u0433\u043E\u043D\u043E\u0441\u0438\u043A"];Fd()?await Lg():ql();var Bg=n=>{J("load-bar").style.width=Math.round(n*100)+"%"};await Promise.all([ym(n=>Bg(n*.85)),Xm()]);Bg(.92);om();am();ed("glade");Rd();um();addEventListener("resize",Vr);{let n=Z0().concat(p0(),Q0(),A0(Ri.flatMap(e=>[$n[e].attack.color,$n[e].super.color])));n.forEach(e=>ue.add(e)),Ql(0,0,1.7),eo(0,1,0,"#fff"),Ki(0,1,0,"#fff",4);for(let e of Ri){let t=oa(e);ue.add(t.root),n.push(t.root)}try{zt.compile(ue,st)}catch{}n.forEach(e=>ue.remove(e)),cd(),y.shake=0}J("load").hidden=!0;var hi=null;function Hg(n){hi&&(ue.remove(hi.V.root),hi.V.mesh.geometry.dispose());let e=oa(n);Zl(e,"me"),ue.add(e.root);let t=k.map.id==="maze"?{x:0,z:1.2}:k.spawns[0][1];hi={V:e,hop:1.2,f:{id:99,x:t.x,z:t.z-1.2,vx:0,vz:0,aim:Math.PI,alive:!0,atkT:9,supT:0,flash:0,deadT:0,victory:!1}},e.yaw=Math.PI,Es.spawn(e)}function Sc(){Cg(cn.hero,n=>{cn.hero=n,Pt.set("hero",n),we("select"),Sc(),Hg(n)});for(let n of J("m-diff").querySelectorAll("button"))n.classList.toggle("sel",n.dataset.v===cn.diff);for(let n of J("m-mode").querySelectorAll(".mode-card"))n.classList.toggle("sel",n.dataset.v===cn.mode);J("howto").textContent=Lt(tn?"\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0431\u0435\u0433, \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043A\u0430\u043C\u0435\u0440\u044B. \u041A\u043D\u043E\u043F\u043A\u0430 \u0430\u0442\u0430\u043A\u0438: \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u2014 \u0430\u0432\u0442\u043E\u043F\u0440\u0438\u0446\u0435\u043B, \u0441 \u043F\u0440\u043E\u0442\u044F\u0436\u043A\u043E\u0439 \u2014 \u0446\u0435\u043B\u0438\u0448\u044C\u0441\u044F \u0441\u0430\u043C. \u0417\u0432\u0435\u0437\u0434\u0430 \u2014 \u0441\u0443\u043F\u0435\u0440.":"WASD \u2014 \u0431\u0435\u0433, \u043C\u044B\u0448\u044C \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \u0438 \u043F\u0440\u0438\u0446\u0435\u043B, \u041B\u041A\u041C \u2014 \u0430\u0442\u0430\u043A\u0430, \u041F\u041A\u041C \u0438\u043B\u0438 E \u2014 \u0441\u0443\u043F\u0435\u0440, Esc \u2014 \u043F\u0430\u0443\u0437\u0430.")}J("m-mode").onclick=n=>{let e=n.target.closest(".mode-card");!e||e.dataset.v===cn.mode||(cn.mode=e.dataset.v,Pt.set("mode",cn.mode),we("select"),Sc())};J("m-diff").onclick=n=>{let e=n.target.dataset.v;e&&(cn.diff=e,Pt.set("diff",e),we("click"),Sc())};var da={fps:Pt.get("fps",!1)};function Ec(){for(let n of J("s-gfx").querySelectorAll("button"))n.classList.toggle("sel",n.dataset.v===he.level);for(let n of J("s-fps").querySelectorAll("button"))n.classList.toggle("sel",n.dataset.v==="1"===da.fps);for(let n of J("s-snd").querySelectorAll("button")){let e=n.dataset.v==="sfx"?Re.sfxOn:Re.musicOn;n.classList.toggle("sel",e),n.classList.toggle("off",!e)}J("s-sens").value=Ce.sens,J("s-sens-v").textContent=(+Ce.sens).toFixed(2),J("fps").hidden=!da.fps}function Gg(n){J("s-gfx-row").hidden=J("s-gfx-note").hidden=!!n,Ec(),J("settings").hidden=!1,we("click")}J("m-set").onclick=()=>Gg(!1);J("p-set").onclick=()=>Gg(!0);J("s-close").onclick=()=>{J("settings").hidden=!0,we("click")};J("s-gfx").onclick=n=>{let e=n.target.dataset.v;!e||e===he.level||(hm(e),we("click"),setTimeout(()=>location.reload(),150))};J("s-fps").onclick=n=>{let e=n.target.dataset.v;e!==void 0&&(da.fps=e==="1",Pt.set("fps",da.fps),we("click"),Ec())};J("s-snd").onclick=n=>{let e=n.target.dataset.v;e&&(to(),e==="sfx"?qm(!Re.sfxOn):Ym(!Re.musicOn),we("click"),Ec())};J("s-sens").oninput=n=>{Ce.sens=+n.target.value,Pt.set("sens",Ce.sens),J("s-sens-v").textContent=Ce.sens.toFixed(2)};Ec();var Dg=-1;function pE(){if(!da.fps||he.fps===Dg)return;Dg=he.fps;let n=J("fps");n.textContent=he.fps+" FPS",n.className="fps"+(he.fps<30?" bad":he.fps<50?" mid":"")}J("play").onclick=()=>{to(),we("confirm"),zd()};function wc(){y.state="menu",y.paused=!1,Vg(),J("menu").hidden=!1,J("hud").hidden=!0,J("end").hidden=!0,J("pause").hidden=!0,Sc(),Hg(cn.hero)}function Vg(){I0(),Cd(),o0(),Sd(),cd();for(let n of y.shots)lc(n.m);y.shots.length=0,T0();for(let n of y.lobs)ue.remove(n.m),ue.remove(n.mark);y.lobs.length=0;for(let n of y.puddles)ue.remove(n.m);y.puddles.length=0;for(let n of y.beams)ue.remove(n.core),ue.remove(n.outer);y.beams.length=0,y.match=null}var uo=0,Qs=0,bc=0;function Wg(n){k.map.id!==n?(ed(n),Rd(n==="glade")):Pm()}function zd(n={}){Vg(),hi&&(ue.remove(hi.V.root),hi=null);let e=y.mode=n.mode||cn.mode;if(document.body.classList.toggle("br",e==="br"),e==="br")return mE(n);let t=e==="ball";Wg(t?"pitch":"glade"),t?J0():Mg();let i=Hr([...kg]),s=n.hero||cn.hero,r=Hr(Ri.filter(l=>l!==s)).concat(Ri).slice(0,2),o=Hr([...Ri]),a=[r[0],s,r[1]];for(let l=0;l<2;l++)for(let c=0;c<3;c++){let h=l===0&&c===1,u=l===0?a[c]:o[c],d=xd({name:h?Lt("\u0422\u044B"):Lt(i.pop()),team:l,hero:u,isMe:h});d.slot=c,d.gemsPicked=0,h?y.me=d:d.bot=gc(n.diff||cn.diff)}for(let l of y.fighters)Id(l),ro(l);t?Ud("\u0414\u043E\u0436\u0434\u0435\u0432\u0438\u043A\u0431\u043E\u043B","\u0417\u0430\u043A\u0430\u0442\u0438 \u0433\u0440\u0438\u0431-\u0434\u043E\u0436\u0434\u0435\u0432\u0438\u043A \u0432 \u0432\u043E\u0440\u043E\u0442\u0430 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430: 2 \u0433\u043E\u043B\u0430 \u2014 \u043F\u043E\u0431\u0435\u0434\u0430"):Ud("\u0421\u043F\u043E\u0440\u044B","\u0421\u043E\u0431\u0435\u0440\u0438 10 \u0441\u043F\u043E\u0440 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438 \u0438\u0445 15 \u0441\u0435\u043A\u0443\u043D\u0434")}function mE(n){Wg("maze"),r0(),Nd=0;let e=Hr([...kg]),t=n.hero||cn.hero,i=Hr(k.spawns.ffa.map((s,r)=>r));for(let s=0;s<Bt.fighters;s++){let r=s===0,o=xd({name:r?Lt("\u0422\u044B"):Lt(e.pop()),team:s,hero:r?t:Ri[Math.floor(Math.random()*Ri.length)],isMe:r});o.slot=i[s%i.length],o.gemsPicked=0,o.hpMul=Bt.hp,r?y.me=o:o.bot=gc(n.diff||cn.diff)}for(let s of y.fighters)Id(s),ro(s);Ud("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431","\u041E\u0441\u0442\u0430\u043D\u044C\u0441\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C! \u041B\u043E\u043C\u0430\u0439 \u044F\u0449\u0438\u043A\u0438 \u2014 \u0432 \u043D\u0438\u0445 \u0441\u0438\u043B\u0430")}function Ud(n,e){let t=y.me;Ce.yaw=t.aim,Ce.x=t.x,Ce.z=t.z,Ce.pitch=-.08,y.state="countdown",uo=3.2,bc=4,Qs=0,J("menu").hidden=!0,J("end").hidden=!0,J("hud").hidden=!1,J("touch").hidden=!tn,J("superpc").hidden=tn,J("ammopc").hidden=tn,document.body.classList.toggle("touch-on",tn),J("lockhint").hidden=tn;let i=y.mode==="br",s=y.mode==="ball";J("ico0").className=i?"shroom-ico":s?"ball-ico":"gem-ico",J("ico1").className=i?"gem-ico gold":s?"ball-ico":"gem-ico",mn(n,e,"sun",2.4)}function gE(n){uo-=n;let e=Math.ceil(uo);e!==bc&&e>=1&&e<=3&&(bc=e,mn(String(e),"","sun",.8),we("countdown")),uo<=0&&(y.state="play",mn("\u0412 \u0431\u043E\u0439!","","sun",1),we("start"))}function Xg(n){let e=n.V.yaw,t=-1e9;y.endDist=4.6;for(let i=0;i<16;i++){let s=(i%2?1:-1)*Math.ceil(i/2)*Te/16,r=n.V.yaw+s,o=fn(n.x,n.z,n.x+Math.sin(r)*5,n.z+Math.cos(r)*5,$u),a=o<0?5:o*5,l=a-Math.abs(s)*.35;if(l>t&&(t=l,e=r,y.endDist=Math.max(1.8,Math.min(4.6,a-.4))),a>=5&&Math.abs(s)<1.3)break}return e}function xE(){y.state="end",Qs=0;let n=y.me,e=y.match,t=e.place===1;y.result=t?"win":"lose";for(let s of y.fighters)s.inp.mx=s.inp.mz=0,s.inp.fire=s.inp.sup=!1;let i=n.lastHitBy;y.endFocus=t?n:i&&i.alive?i:y.fighters.filter(s=>s.alive).sort((s,r)=>r.kills-s.kills)[0]||n,y.endYaw=Xg(y.endFocus),t&&(n.victory=!0,n.aim=y.endYaw),mn(t?"\u041F\u043E\u0431\u0435\u0434\u0430!":fE(e.place),t?"\u0422\u044B \u2014 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431!":"",t?"sun":"foe",2.2),we(t?"win":"lose"),pc()}function vE(n){if(y.match&&y.match.mode==="br")return xE();y.state="end",Qs=0;let e=y.me,t=n<0?"draw":n===e.team?"win":"lose";y.result=t;for(let s of y.fighters)n>=0&&s.team===n?(s.alive||ro(s,{x:s.x,z:s.z}),s.victory=!0):n>=0&&(s.defeat=!0),s.inp.mx=s.inp.mz=0;let i=s=>s.kills*3+s.dmgDone/1500+(s.gemsPicked||0)*.6;y.endFocus=n<0||n===e.team?e:y.fighters.filter(s=>s.team===n).sort((s,r)=>i(r)-i(s))[0],y.endYaw=Xg(y.endFocus);for(let s of y.fighters)s.victory&&(s.aim=y.endYaw);mn(t==="win"?"\u041F\u043E\u0431\u0435\u0434\u0430!":t==="lose"?"\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435":"\u041D\u0438\u0447\u044C\u044F","",t==="win"?"sun":t==="lose"?"foe":"ally",2.2),we(t==="lose"?"lose":"win"),pc()}J("e-again").onclick=()=>{we("confirm"),Dd(()=>zd())};J("e-menu").onclick=()=>{we("click"),Dd(wc)};var yc=n=>`<b style="color:${n===y.me?"var(--sun)":n.team===y.me.team?"var(--ally)":"var(--foe)"}">${an(n.name)}</b>`;It("kill",(n,e)=>{y.me&&(e&&e!==n?_c(yc(e)+" \u2694 "+yc(n),e===y.me?"m":e.team===y.me.team?"a":"f"):e||_c("\u2601 "+yc(n),"f"),y.match&&y.match.mode==="br"&&n!==y.me&&!y.match.over&&y.me.alive&&_E(),y.state!=="end"&&(e===y.me&&n!==y.me&&(mn("\u0421\u0440\u0435\u0437\u0430\u043B!",n.name,"sun",1.1),we("kill")),n===y.me&&mn("\u0422\u0435\u0431\u044F \u0441\u0440\u0435\u0437\u0430\u043B\u0438",e?e.name:"","foe",1.6)))});It("pickup",n=>{n.gemsPicked=(n.gemsPicked||0)+1});It("countdownStart",n=>{let e=n===y.me.team;mn(e?"\u0421\u043F\u043E\u0440\u044B \u0443 \u043D\u0430\u0441!":"\u0412\u0440\u0430\u0433 \u043D\u0430\u0431\u0440\u0430\u043B \u0441\u043F\u043E\u0440\u044B!",e?"\u0414\u0435\u0440\u0436\u0438\u0442\u0435\u0441\u044C 15 \u0441\u0435\u043A\u0443\u043D\u0434":"\u041E\u0442\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0445!",e?"ally":"foe",1.8),we(e?"super_ready":"gem_drop")});It("countdownStop",()=>{y.state==="play"&&mn("\u041E\u0442\u0441\u0447\u0451\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D","","sun",1.2)});It("countdownTick",n=>{n<=5&&we("countdown",null,.8)});It("matchOver",n=>vE(n));It("goal",(n,e)=>{let t=n===y.me.team;mn(t?"\u0413\u043E\u043B!":"\u0413\u043E\u043B \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430",e?e.name:"",t?"sun":"foe",2),we(t?"win":"lose",null,.6),y.shake=Math.max(y.shake,.4),e&&_c(yc(e)+" \u26BD",e===y.me?"m":t?"a":"f")});It("kickoff",()=>{for(let n of y.fighters)n.burst=null,ro(n);y.me&&(Ce.yaw=y.me.aim,Ce.x=y.me.x,Ce.z=y.me.z),y.state="countdown",uo=2.2,bc=3});It("golden",()=>mn("\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0433\u043E\u043B!","\u041A\u0442\u043E \u0437\u0430\u0431\u044C\u0451\u0442 \u2014 \u0442\u043E\u0442 \u043F\u043E\u0431\u0435\u0434\u0438\u043B","sun",2.2));It("ballTaken",n=>{n===y.me&&mn("\u041C\u044F\u0447 \u0443 \u0442\u0435\u0431\u044F","\u0410\u0442\u0430\u043A\u0430 \u2014 \u0443\u0434\u0430\u0440 \u0438\u043B\u0438 \u043F\u0430\u0441, \u0441\u0443\u043F\u0435\u0440 \u2014 \u043F\u0443\u0448\u0435\u0447\u043D\u044B\u0439 \u0443\u0434\u0430\u0440","ally",1.4)});It("fogHurt",(n,e)=>$s(n,e,null,!1,!0));It("fogStart",()=>{y.state==="play"&&(mn("\u0422\u0443\u043C\u0430\u043D \u0441\u0433\u0443\u0449\u0430\u0435\u0442\u0441\u044F!","\u0414\u0435\u0440\u0436\u0438\u0441\u044C \u0431\u043B\u0438\u0436\u0435 \u043A \u0446\u0435\u043D\u0442\u0440\u0443","ally",2),we("gem_drop"))});It("power",n=>{n.gemsPicked=(n.gemsPicked||0)+1});var Nd=0;function _E(){let n=y.match.alive;n>4||n<=1||n===Nd||(Nd=n,n===4?mn(Zn.lang==="en"?"4 left":"\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C 4 \u0431\u043E\u0439\u0446\u0430","\u0417\u0430\u0439\u043C\u0438 \u0443\u043A\u0440\u044B\u0442\u0438\u0435","sun",1.6):n===3?mn("\u0422\u044B \u0432 \u0442\u043E\u043F-3!","\u041F\u0443\u0441\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u0435\u0440\u0443\u0442\u0441\u044F \u043F\u0435\u0440\u0432\u044B\u043C\u0438","sun",1.6):mn("\u0424\u0438\u043D\u0430\u043B!","\u041E\u0434\u0438\u043D \u043D\u0430 \u043E\u0434\u0438\u043D","foe",1.6))}var Ug=null;It("hitMarker",n=>{let e=J("hitm");e.classList.remove("hit","killhit"),e.offsetWidth,e.classList.add(n?"killhit":"hit"),clearTimeout(Ug),Ug=setTimeout(()=>e.classList.remove("hit","killhit"),n?380:180)});It("superReady",n=>{n===y.me&&we("super_ready")});It("empty",n=>{n===y.me&&we("empty")});It("damage",(n,e,t)=>{n===y.me?we("hurt",null,.7):t===y.me&&we("hit",null,.6)});It("spawn",n=>{n===y.me&&y.state==="play"&&(we("respawn"),Ce.yaw=n.team===0?Math.PI:0,Ce.x=n.x,Ce.z=n.z)});function fo(n){y.state!=="play"&&y.state!=="countdown"&&(n=!1),y.paused=n,J("pause").hidden=!n,n&&(pc(),rg())}J("pause-btn").onclick=()=>fo(!0);J("p-resume").onclick=()=>{we("click"),fo(!1)};J("p-quit").onclick=()=>{we("click"),fo(!1),wc()};addEventListener("keydown",n=>{(n.code==="Escape"||n.code==="KeyP")&&(y.state==="play"||y.state==="countdown")&&fo(!y.paused)});document.addEventListener("visibilitychange",()=>{document.hidden&&y.state==="play"&&fo(!0)});var Ng=.95,zg=new P;function Mc(n){if(y.time+=n,Rn.time.value=y.time,rm(n),Fg(),y.state==="play"||y.state==="countdown"||y.state==="end"){y.state==="countdown"&&gE(n),(y.state==="play"||y.state==="countdown")&&y.me&&y.me.alive&&!y.me.bot&&!y.noInput&&ag(n);for(let i of y.fighters)i.bot&&y.state==="play"&&mg(i,n);for(let i of y.fighters)F0(i,n);B0(n),V0(n),X0(n),q0(n),w0(n),bg(n,y.time),f0(n,y.time),j0(n,y.time),y.state==="end"&&(Qs+=n,Qs>2.6&&J("end").hidden&&(Pg(y.result),J("hud").hidden=!0))}Y0(n,y.time);let t=0;for(let i of y.fighters)i.alive&&t<Rn.push.value.length&&Rn.push.value[t++].set(i.x,i.z,Ng);for(hi&&t<Rn.push.value.length&&Rn.push.value[t++].set(hi.f.x,hi.f.z,Ng);t<Rn.push.value.length;t++)Rn.push.value[t].set(0,0,0);if(y.me&&y.me.alive&&y.state!=="menu"?Rn.me.value.set(y.me.x,y.me.z,2.2):Rn.me.value.set(0,0,0),y.dbgCam)st.position.set(y.dbgCam[0],y.dbgCam[1],y.dbgCam[2]),st.lookAt(y.dbgCam[3],y.dbgCam[4],y.dbgCam[5]);else if(y.state==="menu"&&hi){let i=hi,s=i.f;i.hop-=n,s.victory=i.hop>0,s.supT+=n,$l(i.V,s,n,y.time);let r=innerWidth/innerHeight>1.3?.35:0;st.position.set(s.x+r*1.5,1.55,s.z-4.4),st.lookAt(s.x+r,.75,s.z)}else if(y.state==="end"&&y.me){let i=y.endFocus||y.me,s=y.endYaw+Math.sin(y.time*.3)*.35,r=y.endDist||4.6;zg.set(i.x+Math.sin(s)*r,2.7+(4.6-r)*.35,i.z+Math.cos(s)*r),st.position.lerp(zg,1-Math.exp(-n*2.5)),st.lookAt(i.x,.8,i.z)}else y.me&&lg(n);ug(),ig(),Hm(n),Ag(),y.state!=="menu"&&vc(),Rg(n),Wr.position.copy(st.position)}var Og=performance.now();function qg(n){let e=(n-Og)/1e3;Og=n;let t=Math.min(.05,e);y.state==="end"&&Qs<1.2&&(t*=.4),!y.paused&&!ln.adOn&&Mc(t),dm(e,y.state==="play"),pE(),vu(),requestAnimationFrame(qg)}wc();Ig();requestAnimationFrame(qg);window.__bg={start(n={}){n.hero&&(cn.hero=n.hero),n.diff&&(cn.diff=n.diff),n.mode&&(cn.mode=n.mode),zd(n),n.skipCount&&(uo=0,y.state="play")},autopilot(n){y.me&&(y.me.bot=n?gc("normal"):null)},sim(n,e=1/30){let t=Math.round(n/e);for(let i=0;i<t&&(Mc(e),!(y.state==="end"&&Qs>3));i++);},get s(){let n=y.match;return{state:y.state,mode:n&&n.mode,t:n&&+n.t.toFixed(1),count:n&&[...n.count],alive:n&&n.alive,place:n&&n.place,fog:n&&n.fog&&+n.fog.r.toFixed(1),cd:n&&n.cd&&{team:n.cd.team,t:+n.cd.t.toFixed(1)},over:n&&n.over,winner:n&&n.winner,why:n&&n.why,pickups:y.pickups.length,me:y.me&&{hp:Math.round(y.me.hp),alive:y.me.alive,x:+y.me.x.toFixed(1),z:+y.me.z.toFixed(1),gems:y.me.gems,charge:+y.me.charge.toFixed(2),ammo:+y.me.ammo.toFixed(2)}}},board:()=>y.fighters.map(n=>`${n.name}[${n.hero}/t${n.team}] k${n.kills} d${n.deaths} g${n.gemsPicked} dmg${Math.round(n.dmgDone)}`),fighters:()=>y.fighters,G:y,A:k,CAM:Ce,menu:cn,showMenu:wc,cam(n){y.dbgCam=n},info:()=>({calls:zt.info.render.calls,tris:zt.info.render.triangles,geos:zt.info.memory.geometries,tex:zt.info.memory.textures,progs:zt.info.programs.length,PR:he.PR,post:he.post}),post(n){he.post=!!n&&!!he.composer,he.noPost=!n},pause:fo,tr:Lt,L:Zn,tick:Mc,dmg:$s,bench(n=60,e){e&&(zt.setPixelRatio(e),Vr());let t=zt.getContext(),i=performance.now(),s=new Uint8Array(4);for(let r=0;r<n;r++)Mc(1/60),vu(),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,s);return(performance.now()-i)/n}};window.__bgReady=!0;
