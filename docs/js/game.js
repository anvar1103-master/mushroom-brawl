var ph="160";var u0=0,ju=1,d0=2;var sc=1,mh=2,yi=3,li=0,$t=1,St=2;var ci=0,Xi=1,ei=2,Qu=3,ed=4,gh=5,ys=100,f0=101,p0=102,td=103,nd=104,m0=200,g0=201,x0=202,_0=203,co=204,lo=205,v0=206,y0=207,M0=208,b0=209,S0=210,E0=211,T0=212,w0=213,A0=214,R0=0,C0=1,P0=2,Ma=3,L0=4,I0=5,xh=6,D0=7,_h=0,F0=1,N0=2,qi=0,vh=1,yh=2,Mh=3,To=4,U0=5,bh=6,id="attached",O0="detached",kf=300,or=301,ar=302,Pl=303,Ll=304,rc=306,Ei=1e3,Rn=1001,ho=1002,Ot=1003,ba=1004;var to=1005;var fn=1006,Sh=1007;var Zi=1008;var Yi=1009,z0=1010,B0=1011,Eh=1012,Hf=1013,Vi=1014,bi=1015,vn=1016,Gf=1017,Vf=1018,bs=1020,k0=1021,zn=1023,H0=1024,G0=1025,Ss=1026,cr=1027,V0=1028,Wf=1029,W0=1030,Xf=1031,qf=1033,Zc=33776,Kc=33777,$c=33778,Jc=33779,sd=35840,rd=35841,od=35842,ad=35843,Yf=36196,cd=37492,ld=37496,hd=37808,ud=37809,dd=37810,fd=37811,pd=37812,md=37813,gd=37814,xd=37815,_d=37816,vd=37817,yd=37818,Md=37819,bd=37820,Sd=37821,jc=36492,Ed=36494,Td=36495,X0=36283,wd=36284,Ad=36285,Rd=36286;var lr=2300,Ts=2301,Qc=2302,Cd=2400,Pd=2401,Ld=2402,q0=2500;var Zf=0,oc=1,wo=2,Kf=3e3,Es=3001,Y0=3200,Z0=3201,Th=0,K0=1,_n="",lt="srgb",kt="srgb-linear",wh="display-p3",ac="display-p3-linear",Sa="linear",pt="srgb",Ea="rec709",Ta="p3";var zs=7680;var Id=519,$0=512,J0=513,j0=514,$f=515,Q0=516,eg=517,tg=518,ng=519,Il=35044,cc=35048;var Dd="300 es",Dl=1035,Si=2e3,wa=2001,Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fd=1234567,no=Math.PI/180,hr=180/Math.PI;function Qn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function zt(n,e,t){return Math.max(e,Math.min(t,n))}function Ah(n,e){return(n%e+e)%e}function ig(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function sg(n,e,t){return n!==e?(t-n)/(e-n):0}function io(n,e,t){return(1-t)*n+t*e}function rg(n,e,t,i){return io(n,e,1-Math.exp(-t*i))}function og(n,e=1){return e-Math.abs(Ah(n,e*2)-e)}function ag(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function cg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function lg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function hg(n,e){return n+Math.random()*(e-n)}function ug(n){return n*(.5-Math.random())}function dg(n){n!==void 0&&(Fd=n);let e=Fd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fg(n){return n*no}function pg(n){return n*hr}function Fl(n){return(n&n-1)===0&&n!==0}function mg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Aa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gg(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Jf={DEG2RAD:no,RAD2DEG:hr,generateUUID:Qn,clamp:zt,euclideanModulo:Ah,mapLinear:ig,inverseLerp:sg,lerp:io,damp:rg,pingpong:og,smoothstep:ag,smootherstep:cg,randInt:lg,randFloat:hg,randFloatSpread:ug,seededRandom:dg,degToRad:fg,radToDeg:pg,isPowerOfTwo:Fl,ceilPowerOfTwo:mg,floorPowerOfTwo:Aa,setQuaternionFromProperEuler:gg,normalize:ft,denormalize:ai},ee=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],_=s[1],v=s[4],y=s[7],C=s[2],b=s[5],P=s[8];return r[0]=o*x+a*_+c*C,r[3]=o*m+a*v+c*b,r[6]=o*p+a*y+c*P,r[1]=l*x+h*_+u*C,r[4]=l*m+h*v+u*b,r[7]=l*p+h*y+u*P,r[2]=d*x+f*_+g*C,r[5]=d*m+f*v+g*b,r[8]=d*p+f*y+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(el.makeScale(e,t)),this}rotate(e){return this.premultiply(el.makeRotation(-e)),this}translate(e,t){return this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},el=new je;function jf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xg(){let n=uo("canvas");return n.style.display="block",n}var Nd={};function so(n){n in Nd||(Nd[n]=!0,console.warn(n))}var Ud=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Od=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qo={[kt]:{transfer:Sa,primaries:Ea,toReference:n=>n,fromReference:n=>n},[lt]:{transfer:pt,primaries:Ea,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ac]:{transfer:Sa,primaries:Ta,toReference:n=>n.applyMatrix3(Od),fromReference:n=>n.applyMatrix3(Ud)},[wh]:{transfer:pt,primaries:Ta,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Od),fromReference:n=>n.applyMatrix3(Ud).convertLinearToSRGB()}},_g=new Set([kt,ac]),at={enabled:!0,_workingColorSpace:kt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!_g.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=qo[e].toReference,s=qo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return qo[n].primaries},getTransfer:function(n){return n===_n?Sa:qo[n].transfer}};function sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Bs,Ra=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=uo("canvas")),Bs.width=e.width,Bs.height=e.height;let i=Bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=uo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=sr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(sr(t[i]/255)*255):t[i]=sr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vg=0,Ca=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function nl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ra.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yg=0,jt=class n extends Ki{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Rn,s=Rn,r=fn,o=Zi,a=zn,c=Yi,l=n.DEFAULT_ANISOTROPY,h=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Qn(),this.name="",this.source=new Ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(so("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Es?lt:_n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return so("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===lt?Es:Kf}set encoding(e){so("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Es?lt:_n}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=kf;jt.DEFAULT_ANISOTROPY=1;var mt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,y=(f+1)/2,C=(p+1)/2,b=(h+d)/4,P=(u+x)/4,D=(g+m)/4;return v>y&&v>C?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=b/i,r=P/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=D/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=P/r,s=D/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nl=class extends Ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(so("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Es?lt:_n),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new jt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ca(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends Nl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Pa=class extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ul=class extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ht=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),b=Math.atan2(C,p*_);m=Math.sin(m*b)/C,a=Math.sin(a*b)/C}let y=a*_;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+x*y,m===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new R,zd=new Ht,yn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yo.copy(i.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),Zo.subVectors(this.max,Zr),ks.subVectors(e.a,Zr),Hs.subVectors(e.b,Zr),Gs.subVectors(e.c,Zr),zi.subVectors(Hs,ks),Bi.subVectors(Gs,Hs),ms.subVectors(ks,Gs);let t=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-ms.z,ms.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,ms.z,0,-ms.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-ms.y,ms.x,0];return!sl(t,ks,Hs,Gs,Zo)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,ks,Hs,Gs,Zo))?!1:(Ko.crossVectors(zi,Bi),t=[Ko.x,Ko.y,Ko.z],sl(t,ks,Hs,Gs,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},pi=[new R,new R,new R,new R,new R,new R,new R,new R],$n=new R,Yo=new yn,ks=new R,Hs=new R,Gs=new R,zi=new R,Bi=new R,ms=new R,Zr=new R,Zo=new R,Ko=new R,gs=new R;function sl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gs.fromArray(n,r);let a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=e.dot(gs),l=t.dot(gs),h=i.dot(gs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Mg=new yn,Kr=new R,rl=new R,Cn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Mg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);let t=Kr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Kr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(rl)),this.expandByPoint(Kr.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mi=new R,ol=new R,$o=new R,ki=new R,al=new R,Jo=new R,cl=new R,ur=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ol.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(ol);let r=e.distanceTo(t)*.5,o=-this.direction.dot($o),a=ki.dot(this.direction),c=-ki.dot($o),l=ki.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ol).addScaledVector($o,d),f}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,s,r){al.subVectors(t,e),Jo.subVectors(i,e),cl.crossVectors(al,Jo);let o=this.direction.dot(cl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);let c=a*this.direction.dot(Jo.crossVectors(ki,Jo));if(c<0)return null;let l=a*this.direction.dot(al.cross(ki));if(l<0||c+l>o)return null;let h=-a*ki.dot(cl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,x,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bg,e,Sg)}lookAt(e,t,i){let s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Hi.crossVectors(i,wn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Hi.crossVectors(i,wn)),Hi.normalize(),jo.crossVectors(wn,Hi),s[0]=Hi.x,s[4]=jo.x,s[8]=wn.x,s[1]=Hi.y,s[5]=jo.y,s[9]=wn.y,s[2]=Hi.z,s[6]=jo.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],v=i[7],y=i[11],C=i[15],b=s[0],P=s[4],D=s[8],M=s[12],E=s[1],N=s[5],V=s[9],z=s[13],L=s[2],U=s[6],q=s[10],$=s[14],K=s[3],Z=s[7],te=s[11],re=s[15];return r[0]=o*b+a*E+c*L+l*K,r[4]=o*P+a*N+c*U+l*Z,r[8]=o*D+a*V+c*q+l*te,r[12]=o*M+a*z+c*$+l*re,r[1]=h*b+u*E+d*L+f*K,r[5]=h*P+u*N+d*U+f*Z,r[9]=h*D+u*V+d*q+f*te,r[13]=h*M+u*z+d*$+f*re,r[2]=g*b+x*E+m*L+p*K,r[6]=g*P+x*N+m*U+p*Z,r[10]=g*D+x*V+m*q+p*te,r[14]=g*M+x*z+m*$+p*re,r[3]=_*b+v*E+y*L+C*K,r[7]=_*P+v*N+y*U+C*Z,r[11]=_*D+v*V+y*q+C*te,r[15]=_*M+v*z+y*$+C*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*f-i*c*f)+x*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+i*o*f+r*a*h-i*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=u*m*l-x*d*l+x*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,y=h*x*l-g*u*l+g*a*f-o*x*f-h*a*p+o*u*p,C=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,b=t*_+i*v+s*y+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/b;return e[0]=_*P,e[1]=(x*d*r-u*m*r-x*s*f+i*m*f+u*s*p-i*d*p)*P,e[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*p+i*c*p)*P,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*f-i*c*f)*P,e[4]=v*P,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*P,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*P,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*P,e[8]=y*P,e[9]=(g*u*r-h*x*r-g*i*f+t*x*f+h*i*p-t*u*p)*P,e[10]=(o*x*r-g*a*r+g*i*l-t*x*l-o*i*p+t*a*p)*P,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*f-t*a*f)*P,e[12]=C*P,e[13]=(h*x*s-g*u*s+g*i*d-t*x*d-h*i*m+t*u*m)*P,e[14]=(g*a*s-o*x*s-g*i*c+t*x*c+o*i*m-t*a*m)*P,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,_=c*l,v=c*h,y=c*u,C=i.x,b=i.y,P=i.z;return s[0]=(1-(x+p))*C,s[1]=(f+y)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(d+p))*b,s[6]=(m+_)*b,s[7]=0,s[8]=(g+v)*P,s[9]=(m-_)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Vs.set(s[0],s[1],s[2]).length(),o=Vs.set(s[4],s[5],s[6]).length(),a=Vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jn.copy(this);let l=1/r,h=1/o,u=1/a;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,t.setFromRotationMatrix(Jn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Si){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(a===Si)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wa)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Si){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,f=(i+s)*h,g,x;if(a===Si)g=(o+r)*u,x=-2*u;else if(a===wa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Vs=new R,Jn=new Ce,bg=new R(0,0,0),Sg=new R(1,1,1),Hi=new R,jo=new R,wn=new R,Bd=new Ce,kd=new Ht,hi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kd.setFromEuler(this),this.setFromQuaternion(kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var La=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Eg=0,Hd=new R,Ws=new Ht,gi=new Ce,Qo=new R,$r=new R,Tg=new R,wg=new Ht,Gd=new R(1,0,0),Vd=new R(0,1,0),Wd=new R(0,0,1),Ag={type:"added"},Rg={type:"removed"},Et=class n extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new R,t=new hi,i=new Ht,s=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new je}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Gd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(Wd,e)}translateOnAxis(e,t){return Hd.copy(e).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(Wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qo.copy(e):Qo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt($r,Qo,this.up):gi.lookAt(Qo,$r,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(gi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ag)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,Tg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Et.DEFAULT_UP=new R(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new R,xi=new R,ll=new R,_i=new R,Xs=new R,qs=new R,Xd=new R,hl=new R,ul=new R,dl=new R,ea=!1,tr=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){jn.subVectors(s,t),xi.subVectors(i,t),ll.subVectors(e,t);let o=jn.dot(jn),a=jn.dot(xi),c=jn.dot(ll),l=xi.dot(xi),h=xi.dot(ll),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,t,i,s,r,o,a,c){return ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ea=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static isFrontFacing(e,t,i,s){return jn.subVectors(i,t),xi.subVectors(e,t),jn.cross(xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),jn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ea=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Xs.subVectors(s,i),qs.subVectors(r,i),hl.subVectors(e,i);let c=Xs.dot(hl),l=qs.dot(hl);if(c<=0&&l<=0)return t.copy(i);ul.subVectors(e,s);let h=Xs.dot(ul),u=qs.dot(ul);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Xs,o);dl.subVectors(e,r);let f=Xs.dot(dl),g=qs.dot(dl);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(qs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Xd.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Xd,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(Xs,o).addScaledVector(qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function fl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=Ah(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=fl(o,r,e+1/3),this.g=fl(o,r,e),this.b=fl(o,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=lt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){let i=Qf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=tl(e.r),this.g=tl(e.g),this.b=tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return at.fromWorkingColorSpace(sn.copy(this),e),Math.round(zt(sn.r*255,0,255))*65536+Math.round(zt(sn.g*255,0,255))*256+Math.round(zt(sn.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(sn.copy(this),t);let i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=lt){at.fromWorkingColorSpace(sn.copy(this),e);let t=sn.r,i=sn.g,s=sn.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(ta);let i=io(Gi.h,ta.h,t),s=io(Gi.s,ta.s,t),r=io(Gi.l,ta.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new ne;ne.NAMES=Qf;var Cg=0,Mn=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Xi,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=co,this.blendDst=lo,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==co&&(i.blendSrc=this.blendSrc),this.blendDst!==lo&&(i.blendDst=this.blendDst),this.blendEquation!==ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ma&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Id&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},et=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new R,na=new ee,rt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Il&&(e.usage=this.usage),e}};var dr=class extends rt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ia=class extends rt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Oe=class extends rt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Pg=0,On=new Ce,pl=new Et,Ys=new R,An=new yn,Jr=new yn,Kt=new R,Mt=class n extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?Ia:dr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,i){return On.makeTranslation(e,t,i),this.applyMatrix4(On),this}scale(e,t,i){return On.makeScale(e,t,i),this.applyMatrix4(On),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Oe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(An.min,Jr.min),An.expandByPoint(Kt),Kt.addVectors(An.max,Jr.max),An.expandByPoint(Kt)):(An.expandByPoint(Jr.min),An.expandByPoint(Jr.max))}An.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Kt.fromBufferAttribute(a,l),c&&(Ys.fromBufferAttribute(e,l),Kt.add(Ys)),s=Math.max(s,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<a;E++)l[E]=new R,h[E]=new R;let u=new R,d=new R,f=new R,g=new ee,x=new ee,m=new ee,p=new R,_=new R;function v(E,N,V){u.fromArray(s,E*3),d.fromArray(s,N*3),f.fromArray(s,V*3),g.fromArray(o,E*2),x.fromArray(o,N*2),m.fromArray(o,V*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let z=1/(x.x*m.y-m.x*x.y);isFinite(z)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(z),_.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(z),l[E].add(p),l[N].add(p),l[V].add(p),h[E].add(_),h[N].add(_),h[V].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,N=y.length;E<N;++E){let V=y[E],z=V.start,L=V.count;for(let U=z,q=z+L;U<q;U+=3)v(i[U+0],i[U+1],i[U+2])}let C=new R,b=new R,P=new R,D=new R;function M(E){P.fromArray(r,E*3),D.copy(P);let N=l[E];C.copy(N),C.sub(P.multiplyScalar(P.dot(N))).normalize(),b.crossVectors(D,N);let z=b.dot(h[E])<0?-1:1;c[E*4]=C.x,c[E*4+1]=C.y,c[E*4+2]=C.z,c[E*4+3]=z}for(let E=0,N=y.length;E<N;++E){let V=y[E],z=V.start,L=V.count;for(let U=z,q=z+L;U<q;U+=3)M(i[U+0]),M(i[U+1]),M(i[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new rt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qd=new Ce,xs=new ur,ia=new Cn,Yd=new R,Zs=new R,Ks=new R,$s=new R,ml=new R,sa=new R,ra=new ee,oa=new ee,aa=new ee,Zd=new R,Kd=new R,$d=new R,ca=new R,la=new R,_e=class extends Et{constructor(e=new Mt,t=new et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){sa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ml.fromBufferAttribute(u,e),o?sa.addScaledVector(ml,h):sa.addScaledVector(ml.sub(t),h))}t.add(sa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(ia.containsPoint(xs.origin)===!1&&(xs.intersectSphere(ia,Yd)===null||xs.origin.distanceToSquared(Yd)>(e.far-e.near)**2))&&(qd.copy(r).invert(),xs.copy(e.ray).applyMatrix4(qd),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,C=v;y<C;y+=3){let b=a.getX(y),P=a.getX(y+1),D=a.getX(y+2);s=ha(this,p,e,i,l,h,u,b,P,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=ha(this,o,e,i,l,h,u,_,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,C=v;y<C;y+=3){let b=y,P=y+1,D=y+2;s=ha(this,p,e,i,l,h,u,b,P,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,v=m+1,y=m+2;s=ha(this,o,e,i,l,h,u,_,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Lg(n,e,t,i,s,r,o,a){let c;if(e.side===$t?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===li,a),c===null)return null;la.copy(a),la.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(la);return l<t.near||l>t.far?null:{distance:l,point:la.clone(),object:n}}function ha(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Zs),n.getVertexPosition(c,Ks),n.getVertexPosition(l,$s);let h=Lg(n,e,t,i,Zs,Ks,$s,ca);if(h){s&&(ra.fromBufferAttribute(s,a),oa.fromBufferAttribute(s,c),aa.fromBufferAttribute(s,l),h.uv=tr.getInterpolation(ca,Zs,Ks,$s,ra,oa,aa,new ee)),r&&(ra.fromBufferAttribute(r,a),oa.fromBufferAttribute(r,c),aa.fromBufferAttribute(r,l),h.uv1=tr.getInterpolation(ca,Zs,Ks,$s,ra,oa,aa,new ee),h.uv2=h.uv1),o&&(Zd.fromBufferAttribute(o,a),Kd.fromBufferAttribute(o,c),$d.fromBufferAttribute(o,l),h.normal=tr.getInterpolation(ca,Zs,Ks,$s,Zd,Kd,$d,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new R,materialIndex:0};tr.getNormal(Zs,Ks,$s,u.normal),h.face=u}return h}var Ti=class n extends Mt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2));function g(x,m,p,_,v,y,C,b,P,D,M){let E=y/P,N=C/D,V=y/2,z=C/2,L=b/2,U=P+1,q=D+1,$=0,K=0,Z=new R;for(let te=0;te<q;te++){let re=te*N-z;for(let me=0;me<U;me++){let Y=me*E-V;Z[x]=Y*_,Z[m]=re*v,Z[p]=L,l.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[p]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(me/P),u.push(1-te/D),$+=1}}for(let te=0;te<D;te++)for(let re=0;re<P;re++){let me=d+re+U*te,Y=d+re+U*(te+1),J=d+(re+1)+U*(te+1),fe=d+(re+1)+U*te;c.push(me,Y,fe),c.push(Y,J,fe),K+=6}a.addGroup(f,K,M),f+=K,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function dn(n){let e={};for(let t=0;t<n.length;t++){let i=fr(n[t]);for(let s in i)e[s]=i[s]}return e}function Ig(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ep(n){return n.getRenderTarget()===null?n.outputColorSpace:at.workingColorSpace}var rs={clone:fr,merge:dn},Dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bt=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dg,this.fragmentShader=Fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=Ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Da=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bt=class extends Da{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(no*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Js=-90,js=1,fo=class extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Js,js,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Js,js,e,t);r.layers=this.layers,this.add(r);let o=new Bt(Js,js,e,t);o.layers=this.layers,this.add(o);let a=new Bt(Js,js,e,t);a.layers=this.layers,this.add(a);let c=new Bt(Js,js,e,t);c.layers=this.layers,this.add(c);let l=new Bt(Js,js,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Fa=class extends jt{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},po=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(so("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Es?lt:_n),this.texture=new Fa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ti(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:ci});r.uniforms.tEquirect.value=t;let o=new _e(s,r),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=fn),new fo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},gl=new R,Ng=new R,Ug=new je,Mi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=gl.subVectors(i,t).cross(Ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(gl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ug.getNormalMatrix(e),s=this.coplanarPoint(gl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_s=new Cn,ua=new R,mo=class{constructor(e=new Mi,t=new Mi,i=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],v=s[14],y=s[15];if(i[0].setComponents(c-r,d-l,m-f,y-p).normalize(),i[1].setComponents(c+r,d+l,m+f,y+p).normalize(),i[2].setComponents(c+o,d+h,m+g,y+_).normalize(),i[3].setComponents(c-o,d-h,m-g,y-_).normalize(),i[4].setComponents(c-a,d-u,m-x,y-v).normalize(),t===Si)i[5].setComponents(c+a,d+u,m+x,y+v).normalize();else if(t===wa)i[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ua.x=s.normal.x>0?e.max.x:e.min.x,ua.y=s.normal.y>0?e.max.y:e.min.y,ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function tp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Og(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var pn=class n extends Mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*d-o;for(let v=0;v<l;v++){let y=v*u-r;g.push(y,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let v=_+l*p,y=_+l*(p+1),C=_+1+l*(p+1),b=_+1+l*p;f.push(v,y,b),f.push(y,C,b)}this.setIndex(f),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bg=`#ifdef USE_ALPHAHASH
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
#endif`,kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wg=`#ifdef USE_AOMAP
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
#endif`,Xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qg=`#ifdef USE_BATCHING
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
#endif`,Yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jg=`#ifdef USE_IRIDESCENCE
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
#endif`,jg=`#ifdef USE_BUMPMAP
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
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ax=`#define PI 3.141592653589793
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
} // validated`,cx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lx=`vec3 transformedNormal = objectNormal;
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
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,px="gl_FragColor = linearToOutputTexel( gl_FragColor );",mx=`
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
}`,gx=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tx=`#ifdef USE_GRADIENTMAP
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
}`,wx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
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
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ux=`PhysicalMaterial material;
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
#endif`,Ox=`struct PhysicalMaterial {
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
}`,zx=`
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
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
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
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zx=`#if defined( USE_POINTS_UV )
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
#endif`,Kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$x=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jx=`#ifdef USE_MORPHNORMALS
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
#endif`,Qx=`#ifdef USE_MORPHTARGETS
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
#endif`,e_=`#ifdef USE_MORPHTARGETS
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
#endif`,t_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o_=`#ifdef USE_NORMALMAP
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
#endif`,a_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b_=`float getShadowMask() {
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
}`,S_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,T_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w_=`#ifdef USE_SKINNING
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
#endif`,A_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L_=`#ifdef USE_TRANSMISSION
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
#endif`,I_=`#ifdef USE_TRANSMISSION
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z_=`uniform sampler2D t2D;
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`#include <common>
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
}`,W_=`#if DEPTH_PACKING == 3200
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
}`,X_=`#define DISTANCE
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
}`,q_=`#define DISTANCE
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
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`uniform float scale;
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
}`,$_=`uniform vec3 diffuse;
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
}`,J_=`#include <common>
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
}`,j_=`uniform vec3 diffuse;
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
}`,Q_=`#define LAMBERT
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
}`,ev=`#define LAMBERT
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
}`,tv=`#define MATCAP
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
}`,nv=`#define MATCAP
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
}`,iv=`#define NORMAL
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
}`,sv=`#define NORMAL
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
}`,rv=`#define PHONG
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
}`,ov=`#define PHONG
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
}`,av=`#define STANDARD
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
}`,cv=`#define STANDARD
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
}`,lv=`#define TOON
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
}`,hv=`#define TOON
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
}`,uv=`uniform float size;
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
}`,dv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,pv=`uniform vec3 color;
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
}`,mv=`uniform float rotation;
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
}`,gv=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:zg,alphahash_pars_fragment:Bg,alphamap_fragment:kg,alphamap_pars_fragment:Hg,alphatest_fragment:Gg,alphatest_pars_fragment:Vg,aomap_fragment:Wg,aomap_pars_fragment:Xg,batching_pars_vertex:qg,batching_vertex:Yg,begin_vertex:Zg,beginnormal_vertex:Kg,bsdfs:$g,iridescence_fragment:Jg,bumpmap_pars_fragment:jg,clipping_planes_fragment:Qg,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:tx,clipping_planes_vertex:nx,color_fragment:ix,color_pars_fragment:sx,color_pars_vertex:rx,color_vertex:ox,common:ax,cube_uv_reflection_fragment:cx,defaultnormal_vertex:lx,displacementmap_pars_vertex:hx,displacementmap_vertex:ux,emissivemap_fragment:dx,emissivemap_pars_fragment:fx,colorspace_fragment:px,colorspace_pars_fragment:mx,envmap_fragment:gx,envmap_common_pars_fragment:xx,envmap_pars_fragment:_x,envmap_pars_vertex:vx,envmap_physical_pars_fragment:Lx,envmap_vertex:yx,fog_vertex:Mx,fog_pars_vertex:bx,fog_fragment:Sx,fog_pars_fragment:Ex,gradientmap_pars_fragment:Tx,lightmap_fragment:wx,lightmap_pars_fragment:Ax,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Cx,lights_pars_begin:Px,lights_toon_fragment:Ix,lights_toon_pars_fragment:Dx,lights_phong_fragment:Fx,lights_phong_pars_fragment:Nx,lights_physical_fragment:Ux,lights_physical_pars_fragment:Ox,lights_fragment_begin:zx,lights_fragment_maps:Bx,lights_fragment_end:kx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:Vx,logdepthbuf_vertex:Wx,map_fragment:Xx,map_pars_fragment:qx,map_particle_fragment:Yx,map_particle_pars_fragment:Zx,metalnessmap_fragment:Kx,metalnessmap_pars_fragment:$x,morphcolor_vertex:Jx,morphnormal_vertex:jx,morphtarget_pars_vertex:Qx,morphtarget_vertex:e_,normal_fragment_begin:t_,normal_fragment_maps:n_,normal_pars_fragment:i_,normal_pars_vertex:s_,normal_vertex:r_,normalmap_pars_fragment:o_,clearcoat_normal_fragment_begin:a_,clearcoat_normal_fragment_maps:c_,clearcoat_pars_fragment:l_,iridescence_pars_fragment:h_,opaque_fragment:u_,packing:d_,premultiplied_alpha_fragment:f_,project_vertex:p_,dithering_fragment:m_,dithering_pars_fragment:g_,roughnessmap_fragment:x_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:v_,shadowmap_pars_vertex:y_,shadowmap_vertex:M_,shadowmask_pars_fragment:b_,skinbase_vertex:S_,skinning_pars_vertex:E_,skinning_vertex:T_,skinnormal_vertex:w_,specularmap_fragment:A_,specularmap_pars_fragment:R_,tonemapping_fragment:C_,tonemapping_pars_fragment:P_,transmission_fragment:L_,transmission_pars_fragment:I_,uv_pars_fragment:D_,uv_pars_vertex:F_,uv_vertex:N_,worldpos_vertex:U_,background_vert:O_,background_frag:z_,backgroundCube_vert:B_,backgroundCube_frag:k_,cube_vert:H_,cube_frag:G_,depth_vert:V_,depth_frag:W_,distanceRGBA_vert:X_,distanceRGBA_frag:q_,equirect_vert:Y_,equirect_frag:Z_,linedashed_vert:K_,linedashed_frag:$_,meshbasic_vert:J_,meshbasic_frag:j_,meshlambert_vert:Q_,meshlambert_frag:ev,meshmatcap_vert:tv,meshmatcap_frag:nv,meshnormal_vert:iv,meshnormal_frag:sv,meshphong_vert:rv,meshphong_frag:ov,meshphysical_vert:av,meshphysical_frag:cv,meshtoon_vert:lv,meshtoon_frag:hv,points_vert:uv,points_frag:dv,shadow_vert:fv,shadow_frag:pv,sprite_vert:mv,sprite_frag:gv},ae={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},oi={basic:{uniforms:dn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:dn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ne(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:dn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:dn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:dn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ne(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:dn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:dn([ae.points,ae.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:dn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:dn([ae.common,ae.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:dn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:dn([ae.sprite,ae.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:dn([ae.common,ae.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:dn([ae.lights,ae.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};oi.physical={uniforms:dn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var da={r:0,b:0,g:0};function xv(n,e,t,i,s,r,o){let a=new ne(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let _=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,c):v&&v.isColor&&(x(v,1),_=!0);let y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===rc)?(h===void 0&&(h=new _e(new Ti(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:fr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=at.getTransfer(v.colorSpace)!==pt,(u!==v||d!==v.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new _e(new pn(2,2),new bt({name:"BackgroundMaterial",uniforms:fr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=at.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,p){m.getRGB(da,ep(n)),i.buffers.color.setClear(da.r,da.g,da.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function _v(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(L,U,q,$,K){let Z=!1;if(o){let te=x($,q,U);l!==te&&(l=te,f(l.object)),Z=p(L,$,q,K),Z&&_(L,$,q,K)}else{let te=U.wireframe===!0;(l.geometry!==$.id||l.program!==q.id||l.wireframe!==te)&&(l.geometry=$.id,l.program=q.id,l.wireframe=te,Z=!0)}K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,D(L,U,q,$),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,U,q){let $=q.wireframe===!0,K=a[L.id];K===void 0&&(K={},a[L.id]=K);let Z=K[U.id];Z===void 0&&(Z={},K[U.id]=Z);let te=Z[$];return te===void 0&&(te=m(d()),Z[$]=te),te}function m(L){let U=[],q=[],$=[];for(let K=0;K<s;K++)U[K]=0,q[K]=0,$[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:$,object:L,attributes:{},index:null}}function p(L,U,q,$){let K=l.attributes,Z=U.attributes,te=0,re=q.getAttributes();for(let me in re)if(re[me].location>=0){let J=K[me],fe=Z[me];if(fe===void 0&&(me==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),me==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor)),J===void 0||J.attribute!==fe||fe&&J.data!==fe.data)return!0;te++}return l.attributesNum!==te||l.index!==$}function _(L,U,q,$){let K={},Z=U.attributes,te=0,re=q.getAttributes();for(let me in re)if(re[me].location>=0){let J=Z[me];J===void 0&&(me==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),me==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));let fe={};fe.attribute=J,J&&J.data&&(fe.data=J.data),K[me]=fe,te++}l.attributes=K,l.attributesNum=te,l.index=$}function v(){let L=l.newAttributes;for(let U=0,q=L.length;U<q;U++)L[U]=0}function y(L){C(L,0)}function C(L,U){let q=l.newAttributes,$=l.enabledAttributes,K=l.attributeDivisors;q[L]=1,$[L]===0&&(n.enableVertexAttribArray(L),$[L]=1),K[L]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),K[L]=U)}function b(){let L=l.newAttributes,U=l.enabledAttributes;for(let q=0,$=U.length;q<$;q++)U[q]!==L[q]&&(n.disableVertexAttribArray(q),U[q]=0)}function P(L,U,q,$,K,Z,te){te===!0?n.vertexAttribIPointer(L,U,q,K,Z):n.vertexAttribPointer(L,U,q,$,K,Z)}function D(L,U,q,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let K=$.attributes,Z=q.getAttributes(),te=U.defaultAttributeValues;for(let re in Z){let me=Z[re];if(me.location>=0){let Y=K[re];if(Y===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){let J=Y.normalized,fe=Y.itemSize,Ee=t.get(Y);if(Ee===void 0)continue;let Se=Ee.buffer,He=Ee.type,Ve=Ee.bytesPerElement,De=i.isWebGL2===!0&&(He===n.INT||He===n.UNSIGNED_INT||Y.gpuType===Hf);if(Y.isInterleavedBufferAttribute){let ot=Y.data,B=ot.stride,cn=Y.offset;if(ot.isInstancedInterleavedBuffer){for(let Ae=0;Ae<me.locationSize;Ae++)C(me.location+Ae,ot.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ae=0;Ae<me.locationSize;Ae++)y(me.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let Ae=0;Ae<me.locationSize;Ae++)P(me.location+Ae,fe/me.locationSize,He,J,B*Ve,(cn+fe/me.locationSize*Ae)*Ve,De)}else{if(Y.isInstancedBufferAttribute){for(let ot=0;ot<me.locationSize;ot++)C(me.location+ot,Y.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ot=0;ot<me.locationSize;ot++)y(me.location+ot);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let ot=0;ot<me.locationSize;ot++)P(me.location+ot,fe/me.locationSize,He,J,fe*Ve,fe/me.locationSize*ot*Ve,De)}}else if(te!==void 0){let J=te[re];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(me.location,J);break;case 3:n.vertexAttrib3fv(me.location,J);break;case 4:n.vertexAttrib4fv(me.location,J);break;default:n.vertexAttrib1fv(me.location,J)}}}}b()}function M(){V();for(let L in a){let U=a[L];for(let q in U){let $=U[q];for(let K in $)g($[K].object),delete $[K];delete U[q]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;let U=a[L.id];for(let q in U){let $=U[q];for(let K in $)g($[K].object),delete $[K];delete U[q]}delete a[L.id]}function N(L){for(let U in a){let q=a[U];if(q[L.id]===void 0)continue;let $=q[L.id];for(let K in $)g($[K].object),delete $[K];delete q[L.id]}}function V(){z(),h=!0,l!==c&&(l=c,f(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:V,resetDefaultState:z,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:y,disableUnusedAttributes:b}}function vv(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function yv(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),C=v&&y,b=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:b}}function Mv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Mi,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:i,v=_*4,y=p.clippingState||null;c.value=y,y=h(g,d,v,f);for(let C=0;C!==v;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==x;++v,y+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function bv(n){let e=new WeakMap;function t(o,a){return a===Pl?o.mapping=or:a===Ll&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pl||a===Ll)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new po(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var $i=class extends Da{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nr=4,Jd=[.125,.215,.35,.446,.526,.582],Ms=20,xl=new $i,jd=new ne,_l=null,vl=0,yl=0,vs=(1+Math.sqrt(5))/2,Qs=1/vs,Qd=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,vs,Qs),new R(0,vs,-Qs),new R(Qs,0,vs),new R(-Qs,0,vs),new R(vs,Qs,0),new R(-vs,Qs,0)],pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l,vl,yl),e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:vn,format:zn,colorSpace:kt,depthBuffer:!1},s=ef(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sv(r)),this._blurMaterial=Ev(r,e,t)}return s}_compileMaterial(e){let t=new _e(this._lodPlanes[0],e);this._renderer.compile(t,xl)}_sceneToCubeUV(e,t,i,s){let a=new Bt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(jd),h.toneMapping=qi,h.autoClear=!1;let f=new et({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new _e(new Ti,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(jd),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;fa(s,_*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===or||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new _e(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;fa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,xl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Qd[(s-1)%Qd.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new _e(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ms-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ms;m>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);let p=[],_=0;for(let P=0;P<Ms;++P){let D=P/x,M=Math.exp(-D*D/2);p.push(M),P===0?_+=M:P<m&&(_+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let y=this._sizeLods[s],C=3*y*(s>v-nr?s-v+nr:0),b=4*(this._cubeSize-y);fa(t,C,b,3*y,2*y),c.setRenderTarget(t),c.render(u,xl)}};function Sv(n){let e=[],t=[],i=[],s=n,r=n-nr+1+Jd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-nr?c=Jd[o-n+nr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let b=0;b<f;b++){let P=b%3*2/3-1,D=b>2?0:-1,M=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];_.set(M,x*g*b),v.set(d,m*g*b);let E=[b,b,b,b,b,b];y.set(E,p*g*b)}let C=new Mt;C.setAttribute("position",new rt(_,x)),C.setAttribute("uv",new rt(v,m)),C.setAttribute("faceIndex",new rt(y,p)),e.push(C),s>nr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ef(n,e,t){let i=new Qt(n,e,t);return i.texture.mapping=rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ev(n,e,t){let i=new Float32Array(Ms),s=new R(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function tf(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function nf(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Rh(){return`

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
	`}function Tv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Pl||c===Ll,h=c===or||c===ar;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new pr(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new pr(n));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function wv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Av(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let v=0,y=_.length;v<y;v+=3){let C=_[v+0],b=_[v+1],P=_[v+2];d.push(C,b,b,P,P,C)}}else if(g!==void 0){let _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let C=v+0,b=v+1,P=v+2;d.push(C,b,b,P,P,C)}}else return;let m=new(jf(d)?Ia:dr)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Rv(n,e,t,i){let s=i.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){n.drawElements(r,g,a,f*c),t.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*c,x),t.update(g,r,x)}function d(f,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let p=0;for(let _=0;_<x;_++)p+=g[_];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Cv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Pv(n,e){return n[0]-e[0]}function Lv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Iv(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new mt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],P=h.morphAttributes.color||[],D=0;_===!0&&(D=1),v===!0&&(D=2),y===!0&&(D=3);let M=h.attributes.position.count*D,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let N=new Float32Array(M*E*4*g),V=new Pa(N,M,E,g);V.type=bi,V.needsUpdate=!0;let z=D*4;for(let U=0;U<g;U++){let q=C[U],$=b[U],K=P[U],Z=M*E*4*U;for(let te=0;te<q.count;te++){let re=te*z;_===!0&&(o.fromBufferAttribute(q,te),N[Z+re+0]=o.x,N[Z+re+1]=o.y,N[Z+re+2]=o.z,N[Z+re+3]=0),v===!0&&(o.fromBufferAttribute($,te),N[Z+re+4]=o.x,N[Z+re+5]=o.y,N[Z+re+6]=o.z,N[Z+re+7]=0),y===!0&&(o.fromBufferAttribute(K,te),N[Z+re+8]=o.x,N[Z+re+9]=o.y,N[Z+re+10]=o.z,N[Z+re+11]=K.itemSize===4?o.w:1)}}x={count:g,texture:V,size:new ee(M,E)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<f;v++){let y=g[v];y[0]=v,y[1]=d[v]}g.sort(Lv);for(let v=0;v<8;v++)v<f&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Pv);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let y=a[v],C=y[0],b=y[1];C!==Number.MAX_SAFE_INTEGER&&b?(x&&h.getAttribute("morphTarget"+v)!==x[C]&&h.setAttribute("morphTarget"+v,x[C]),m&&h.getAttribute("morphNormal"+v)!==m[C]&&h.setAttribute("morphNormal"+v,m[C]),s[v]=b,p+=b):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",_),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function Dv(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Na=class extends jt{constructor(e,t,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:Ss,h!==Ss&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ss&&(i=Vi),i===void 0&&h===cr&&(i=bs),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ot,this.minFilter=c!==void 0?c:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},np=new jt,ip=new Na(1,1);ip.compareFunction=$f;var sp=new Pa,rp=new Ul,op=new Fa,sf=[],rf=[],of=new Float32Array(16),af=new Float32Array(9),cf=new Float32Array(4);function br(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=sf[s];if(r===void 0&&(r=new Float32Array(s),sf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lc(n,e){let t=rf[e];t===void 0&&(t=new Int32Array(e),rf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Fv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function Uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function Ov(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function zv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;cf.set(i),n.uniformMatrix2fv(this.addr,!1,cf),Vt(t,i)}}function Bv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;af.set(i),n.uniformMatrix3fv(this.addr,!1,af),Vt(t,i)}}function kv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;of.set(i),n.uniformMatrix4fv(this.addr,!1,of),Vt(t,i)}}function Hv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function Vv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function Wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function Xv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function Yv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function Zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function Kv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?ip:np;t.setTexture2D(e||r,s)}function $v(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||rp,s)}function Jv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||op,s)}function jv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||sp,s)}function Qv(n){switch(n){case 5126:return Fv;case 35664:return Nv;case 35665:return Uv;case 35666:return Ov;case 35674:return zv;case 35675:return Bv;case 35676:return kv;case 5124:case 35670:return Hv;case 35667:case 35671:return Gv;case 35668:case 35672:return Vv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return qv;case 36295:return Yv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return jv}}function ey(n,e){n.uniform1fv(this.addr,e)}function ty(n,e){let t=br(e,this.size,2);n.uniform2fv(this.addr,t)}function ny(n,e){let t=br(e,this.size,3);n.uniform3fv(this.addr,t)}function iy(n,e){let t=br(e,this.size,4);n.uniform4fv(this.addr,t)}function sy(n,e){let t=br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ry(n,e){let t=br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function oy(n,e){let t=br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ay(n,e){n.uniform1iv(this.addr,e)}function cy(n,e){n.uniform2iv(this.addr,e)}function ly(n,e){n.uniform3iv(this.addr,e)}function hy(n,e){n.uniform4iv(this.addr,e)}function uy(n,e){n.uniform1uiv(this.addr,e)}function dy(n,e){n.uniform2uiv(this.addr,e)}function fy(n,e){n.uniform3uiv(this.addr,e)}function py(n,e){n.uniform4uiv(this.addr,e)}function my(n,e,t){let i=this.cache,s=e.length,r=lc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||np,r[o])}function gy(n,e,t){let i=this.cache,s=e.length,r=lc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rp,r[o])}function xy(n,e,t){let i=this.cache,s=e.length,r=lc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||op,r[o])}function _y(n,e,t){let i=this.cache,s=e.length,r=lc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sp,r[o])}function vy(n){switch(n){case 5126:return ey;case 35664:return ty;case 35665:return ny;case 35666:return iy;case 35674:return sy;case 35675:return ry;case 35676:return oy;case 5124:case 35670:return ay;case 35667:case 35671:return cy;case 35668:case 35672:return ly;case 35669:case 35673:return hy;case 5125:return uy;case 36294:return dy;case 36295:return fy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return _y}}var Ol=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qv(t.type)}},zl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vy(t.type)}},Bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ml=/(\w+)(\])?(\[|\.)?/g;function lf(n,e){n.seq.push(e),n.map[e.id]=e}function yy(n,e,t){let i=n.name,s=i.length;for(Ml.lastIndex=0;;){let r=Ml.exec(i),o=Ml.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){lf(t,l===void 0?new Ol(a,n,e):new zl(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Bl(a),lf(t,u)),t=u}}}var rr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);yy(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function hf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var My=37297,by=0;function Sy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Ey(n){let e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(n),i;switch(e===t?i="":e===Ta&&t===Ea?i="LinearDisplayP3ToLinearSRGB":e===Ea&&t===Ta&&(i="LinearSRGBToLinearDisplayP3"),n){case kt:case ac:return[i,"LinearTransferOETF"];case lt:case wh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function uf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Sy(n.getShaderSource(e),o)}else return s}function Ty(n,e){let t=Ey(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wy(n,e){let t;switch(e){case vh:t="Linear";break;case yh:t="Reinhard";break;case Mh:t="OptimizedCineon";break;case To:t="ACESFilmic";break;case bh:t="AgX";break;case U0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ay(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ir).join(`
`)}function Ry(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ir).join(`
`)}function Cy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Py(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ir(n){return n!==""}function df(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ff(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace(Ly,Dy)}var Iy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Dy(n,e){let t=Xe[e];if(t===void 0){let i=Iy.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}var Fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pf(n){return n.replace(Fy,Ny)}function Ny(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Oy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function By(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _h:e="ENVMAP_BLENDING_MULTIPLY";break;case F0:e="ENVMAP_BLENDING_MIX";break;case N0:e="ENVMAP_BLENDING_ADD";break}return e}function ky(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Hy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Uy(t),l=Oy(t),h=zy(t),u=By(t),d=ky(t),f=t.isWebGL2?"":Ay(t),g=Ry(t),x=Cy(r),m=s.createProgram(),p,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ir).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ir).join(`
`),_.length>0&&(_+=`
`)):(p=[mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),_=[f,mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==qi?wy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Ty("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),o=kl(o),o=df(o,t),o=ff(o,t),a=kl(a),a=df(a,t),a=ff(a,t),o=pf(o),a=pf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=v+p+o,C=v+_+a,b=hf(s,s.VERTEX_SHADER,y),P=hf(s,s.FRAGMENT_SHADER,C);s.attachShader(m,b),s.attachShader(m,P),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function D(V){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(b).trim(),U=s.getShaderInfoLog(P).trim(),q=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,b,P);else{let K=uf(s,b,"vertex"),Z=uf(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+K+`
`+Z)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(L===""||U==="")&&($=!1);$&&(V.diagnostics={runnable:q,programLog:z,vertexShader:{log:L,prefix:p},fragmentShader:{log:U,prefix:_}})}s.deleteShader(b),s.deleteShader(P),M=new rr(s,m),E=Py(s,m)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,My)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=by++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=P,this}var Gy=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Gl(e),t.set(e,i)),i}},Gl=class{constructor(e){this.id=Gy++,this.code=e,this.usedTimes=0}};function Vy(n,e,t,i,s,r,o){let a=new La,c=new Hl,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,E,N,V,z){let L=V.fog,U=z.geometry,q=M.isMeshStandardMaterial?V.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),K=$&&$.mapping===rc?$.image.height:null,Z=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let te=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,re=te!==void 0?te.length:0,me=0;U.morphAttributes.position!==void 0&&(me=1),U.morphAttributes.normal!==void 0&&(me=2),U.morphAttributes.color!==void 0&&(me=3);let Y,J,fe,Ee;if(Z){let ln=oi[Z];Y=ln.vertexShader,J=ln.fragmentShader}else Y=M.vertexShader,J=M.fragmentShader,c.update(M),fe=c.getVertexShaderID(M),Ee=c.getFragmentShaderID(M);let Se=n.getRenderTarget(),He=z.isInstancedMesh===!0,Ve=z.isBatchedMesh===!0,De=!!M.map,ot=!!M.matcap,B=!!$,cn=!!M.aoMap,Ae=!!M.lightMap,ze=!!M.bumpMap,ve=!!M.normalMap,At=!!M.displacementMap,Ye=!!M.emissiveMap,w=!!M.metalnessMap,S=!!M.roughnessMap,H=M.anisotropy>0,ie=M.clearcoat>0,Q=M.iridescence>0,se=M.sheen>0,Me=M.transmission>0,he=H&&!!M.anisotropyMap,ge=ie&&!!M.clearcoatMap,Ie=ie&&!!M.clearcoatNormalMap,Ze=ie&&!!M.clearcoatRoughnessMap,j=Q&&!!M.iridescenceMap,dt=Q&&!!M.iridescenceThicknessMap,Qe=se&&!!M.sheenColorMap,Ue=se&&!!M.sheenRoughnessMap,Te=!!M.specularMap,xe=!!M.specularColorMap,We=!!M.specularIntensityMap,ut=Me&&!!M.transmissionMap,Pt=Me&&!!M.thicknessMap,$e=!!M.gradientMap,oe=!!M.alphaMap,I=M.alphaTest>0,ce=!!M.alphaHash,le=!!M.extensions,Fe=!!U.attributes.uv1,Re=!!U.attributes.uv2,xt=!!U.attributes.uv3,_t=qi;return M.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(_t=n.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:J,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ve,instancing:He,instancingColor:He&&z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:kt,map:De,matcap:ot,envMap:B,envMapMode:B&&$.mapping,envMapCubeUVHeight:K,aoMap:cn,lightMap:Ae,bumpMap:ze,normalMap:ve,displacementMap:d&&At,emissiveMap:Ye,normalMapObjectSpace:ve&&M.normalMapType===K0,normalMapTangentSpace:ve&&M.normalMapType===Th,metalnessMap:w,roughnessMap:S,anisotropy:H,anisotropyMap:he,clearcoat:ie,clearcoatMap:ge,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Ze,iridescence:Q,iridescenceMap:j,iridescenceThicknessMap:dt,sheen:se,sheenColorMap:Qe,sheenRoughnessMap:Ue,specularMap:Te,specularColorMap:xe,specularIntensityMap:We,transmission:Me,transmissionMap:ut,thicknessMap:Pt,gradientMap:$e,opaque:M.transparent===!1&&M.blending===Xi,alphaMap:oe,alphaTest:I,alphaHash:ce,combine:M.combine,mapUv:De&&x(M.map.channel),aoMapUv:cn&&x(M.aoMap.channel),lightMapUv:Ae&&x(M.lightMap.channel),bumpMapUv:ze&&x(M.bumpMap.channel),normalMapUv:ve&&x(M.normalMap.channel),displacementMapUv:At&&x(M.displacementMap.channel),emissiveMapUv:Ye&&x(M.emissiveMap.channel),metalnessMapUv:w&&x(M.metalnessMap.channel),roughnessMapUv:S&&x(M.roughnessMap.channel),anisotropyMapUv:he&&x(M.anisotropyMap.channel),clearcoatMapUv:ge&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(M.sheenRoughnessMap.channel),specularMapUv:Te&&x(M.specularMap.channel),specularColorMapUv:xe&&x(M.specularColorMap.channel),specularIntensityMapUv:We&&x(M.specularIntensityMap.channel),transmissionMapUv:ut&&x(M.transmissionMap.channel),thicknessMapUv:Pt&&x(M.thicknessMap.channel),alphaMapUv:oe&&x(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ve||H),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:Re,vertexUv3s:xt,pointsUvs:z.isPoints===!0&&!!U.attributes.uv&&(De||oe),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:me,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,useLegacyLights:n._useLegacyLights,decodeVideoTexture:De&&M.map.isVideoTexture===!0&&at.getTransfer(M.map.colorSpace)===pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===St,flipSided:M.side===$t,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:le&&M.extensions.derivatives===!0,extensionFragDepth:le&&M.extensions.fragDepth===!0,extensionDrawBuffers:le&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)E.push(N),E.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(_(E,M),v(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function _(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){let E=g[M.type],N;if(E){let V=oi[E];N=rs.clone(V.uniforms)}else N=M.uniforms;return N}function C(M,E){let N;for(let V=0,z=l.length;V<z;V++){let L=l[V];if(L.cacheKey===E){N=L,++N.usedTimes;break}}return N===void 0&&(N=new Hy(n,E,M,r),l.push(N)),N}function b(M){if(--M.usedTimes===0){let E=l.indexOf(M);l[E]=l[l.length-1],l.pop(),M.destroy()}}function P(M){c.remove(M)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:b,releaseShaderCache:P,programs:l,dispose:D}}function Wy(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Xy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Xy),i.length>1&&i.sort(d||gf),s.length>1&&s.sort(d||gf)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function qy(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new xf,n.set(i,[o])):s>=r.length?(o=new xf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Yy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ne};break;case"SpotLight":t={position:new R,direction:new R,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":t={color:new ne,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function Zy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Ky=0;function $y(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Jy(n,e){let t=new Yy,i=Zy(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,o=new Ce,a=new Ce;function c(h,u){let d=0,f=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let x=0,m=0,p=0,_=0,v=0,y=0,C=0,b=0,P=0,D=0,M=0;h.sort($y);let E=u===!0?Math.PI:1;for(let V=0,z=h.length;V<z;V++){let L=h[V],U=L.color,q=L.intensity,$=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=U.r*q*E,f+=U.g*q*E,g+=U.b*q*E;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(L.sh.coefficients[Z],q);M++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let te=L.shadow,re=i.get(L);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,s.directionalShadow[x]=re,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=L.shadow.matrix,y++}s.directional[x]=Z,x++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(U).multiplyScalar(q*E),Z.distance=$,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,s.spot[p]=Z;let te=L.shadow;if(L.map&&(s.spotLightMap[P]=L.map,P++,te.updateMatrices(L),L.castShadow&&D++),s.spotLightMatrix[p]=te.matrix,L.castShadow){let re=i.get(L);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,s.spotShadow[p]=re,s.spotShadowMap[p]=K,b++}p++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(U).multiplyScalar(q),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),s.rectArea[_]=Z,_++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*E),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let te=L.shadow,re=i.get(L);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,re.shadowCameraNear=te.camera.near,re.shadowCameraFar=te.camera.far,s.pointShadow[m]=re,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=L.shadow.matrix,C++}s.point[m]=Z,m++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(q*E),Z.groundColor.copy(L.groundColor).multiplyScalar(q*E),s.hemi[v]=Z,v++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2):(s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==_||N.hemiLength!==v||N.numDirectionalShadows!==y||N.numPointShadows!==C||N.numSpotShadows!==b||N.numSpotMaps!==P||N.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=_,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=b+P-D,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=M,N.directionalLength=x,N.pointLength=m,N.spotLength=p,N.rectAreaLength=_,N.hemiLength=v,N.numDirectionalShadows=y,N.numPointShadows=C,N.numSpotShadows=b,N.numSpotMaps=P,N.numLightProbes=M,s.version=Ky++)}function l(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){let y=h[_];if(y.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),d++}else if(y.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let C=s.point[f];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function _f(n,e){let t=new Jy(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function jy(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),c;return a===void 0?(c=new _f(n,e),t.set(r,[c])):o>=a.length?(c=new _f(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var Vl=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wl=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eM=`uniform sampler2D shadow_pass;
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
}`;function tM(n,e,t){let i=new mo,s=new ee,r=new ee,o=new mt,a=new Vl({depthPacking:Z0}),c=new Wl,l={},h=t.maxTextureSize,u={[li]:$t,[$t]:li,[St]:St},d=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Qy,fragmentShader:eM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new _e(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let p=this.type;this.render=function(b,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let M=n.getRenderTarget(),E=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ci),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let z=p!==yi&&this.type===yi,L=p===yi&&this.type!==yi;for(let U=0,q=b.length;U<q;U++){let $=b[U],K=$.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let Z=K.getFrameExtents();if(s.multiply(Z),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,K.mapSize.y=r.y)),K.map===null||z===!0||L===!0){let re=this.type!==yi?{minFilter:Ot,magFilter:Ot}:{};K.map!==null&&K.map.dispose(),K.map=new Qt(s.x,s.y,re),K.map.texture.name=$.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();let te=K.getViewportCount();for(let re=0;re<te;re++){let me=K.getViewport(re);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),V.viewport(o),K.updateMatrices($,re),i=K.getFrustum(),y(P,D,K.camera,$,this.type)}K.isPointLightShadow!==!0&&this.type===yi&&_(K,D),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,E,N)};function _(b,P){let D=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Qt(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(P,null,D,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(P,null,D,f,x,null)}function v(b,P,D,M){let E=null,N=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)E=N;else if(E=D.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let V=E.uuid,z=P.uuid,L=l[V];L===void 0&&(L={},l[V]=L);let U=L[z];U===void 0&&(U=E.clone(),L[z]=U,P.addEventListener("dispose",C)),E=U}if(E.visible=P.visible,E.wireframe=P.wireframe,M===yi?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:u[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let V=n.properties.get(E);V.light=D}return E}function y(b,P,D,M,E){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===yi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);let z=e.update(b),L=b.material;if(Array.isArray(L)){let U=z.groups;for(let q=0,$=U.length;q<$;q++){let K=U[q],Z=L[K.materialIndex];if(Z&&Z.visible){let te=v(b,Z,M,E);b.onBeforeShadow(n,b,P,D,z,te,K),n.renderBufferDirect(D,null,z,te,b,K),b.onAfterShadow(n,b,P,D,z,te,K)}}}else if(L.visible){let U=v(b,L,M,E);b.onBeforeShadow(n,b,P,D,z,U,null),n.renderBufferDirect(D,null,z,U,b,null),b.onAfterShadow(n,b,P,D,z,U,null)}}let V=b.children;for(let z=0,L=V.length;z<L;z++)y(V[z],P,D,M,E)}function C(b){b.target.removeEventListener("dispose",C);for(let D in l){let M=l[D],E=b.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function nM(n,e,t){let i=t.isWebGL2;function s(){let I=!1,ce=new mt,le=null,Fe=new mt(0,0,0,0);return{setMask:function(Re){le!==Re&&!I&&(n.colorMask(Re,Re,Re,Re),le=Re)},setLocked:function(Re){I=Re},setClear:function(Re,xt,_t,Yt,ln){ln===!0&&(Re*=Yt,xt*=Yt,_t*=Yt),ce.set(Re,xt,_t,Yt),Fe.equals(ce)===!1&&(n.clearColor(Re,xt,_t,Yt),Fe.copy(ce))},reset:function(){I=!1,le=null,Fe.set(-1,0,0,0)}}}function r(){let I=!1,ce=null,le=null,Fe=null;return{setTest:function(Re){Re?Ve(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(Re){ce!==Re&&!I&&(n.depthMask(Re),ce=Re)},setFunc:function(Re){if(le!==Re){switch(Re){case R0:n.depthFunc(n.NEVER);break;case C0:n.depthFunc(n.ALWAYS);break;case P0:n.depthFunc(n.LESS);break;case Ma:n.depthFunc(n.LEQUAL);break;case L0:n.depthFunc(n.EQUAL);break;case I0:n.depthFunc(n.GEQUAL);break;case xh:n.depthFunc(n.GREATER);break;case D0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Re}},setLocked:function(Re){I=Re},setClear:function(Re){Fe!==Re&&(n.clearDepth(Re),Fe=Re)},reset:function(){I=!1,ce=null,le=null,Fe=null}}}function o(){let I=!1,ce=null,le=null,Fe=null,Re=null,xt=null,_t=null,Yt=null,ln=null;return{setTest:function(vt){I||(vt?Ve(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(vt){ce!==vt&&!I&&(n.stencilMask(vt),ce=vt)},setFunc:function(vt,hn,ri){(le!==vt||Fe!==hn||Re!==ri)&&(n.stencilFunc(vt,hn,ri),le=vt,Fe=hn,Re=ri)},setOp:function(vt,hn,ri){(xt!==vt||_t!==hn||Yt!==ri)&&(n.stencilOp(vt,hn,ri),xt=vt,_t=hn,Yt=ri)},setLocked:function(vt){I=vt},setClear:function(vt){ln!==vt&&(n.clearStencil(vt),ln=vt)},reset:function(){I=!1,ce=null,le=null,Fe=null,Re=null,xt=null,_t=null,Yt=null,ln=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,_=null,v=null,y=null,C=null,b=null,P=null,D=null,M=new ne(0,0,0),E=0,N=!1,V=null,z=null,L=null,U=null,q=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,Z=0,te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(te)[1]),K=Z>=1):te.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),K=Z>=2);let re=null,me={},Y=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),fe=new mt().fromArray(Y),Ee=new mt().fromArray(J);function Se(I,ce,le,Fe){let Re=new Uint8Array(4),xt=n.createTexture();n.bindTexture(I,xt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<le;_t++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(ce,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(ce+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return xt}let He={};He[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),He[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(He[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),He[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ve(n.DEPTH_TEST),c.setFunc(Ma),Ye(!1),w(ju),Ve(n.CULL_FACE),ve(ci);function Ve(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function De(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function ot(I,ce){return f[I]!==ce?(n.bindFramebuffer(I,ce),f[I]=ce,i&&(I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ce),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ce)),!0):!1}function B(I,ce){let le=x,Fe=!1;if(I)if(le=g.get(ce),le===void 0&&(le=[],g.set(ce,le)),I.isWebGLMultipleRenderTargets){let Re=I.texture;if(le.length!==Re.length||le[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,_t=Re.length;xt<_t;xt++)le[xt]=n.COLOR_ATTACHMENT0+xt;le.length=Re.length,Fe=!0}}else le[0]!==n.COLOR_ATTACHMENT0&&(le[0]=n.COLOR_ATTACHMENT0,Fe=!0);else le[0]!==n.BACK&&(le[0]=n.BACK,Fe=!0);Fe&&(t.isWebGL2?n.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function cn(I){return m!==I?(n.useProgram(I),m=I,!0):!1}let Ae={[ys]:n.FUNC_ADD,[f0]:n.FUNC_SUBTRACT,[p0]:n.FUNC_REVERSE_SUBTRACT};if(i)Ae[td]=n.MIN,Ae[nd]=n.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(Ae[td]=I.MIN_EXT,Ae[nd]=I.MAX_EXT)}let ze={[m0]:n.ZERO,[g0]:n.ONE,[x0]:n.SRC_COLOR,[co]:n.SRC_ALPHA,[S0]:n.SRC_ALPHA_SATURATE,[M0]:n.DST_COLOR,[v0]:n.DST_ALPHA,[_0]:n.ONE_MINUS_SRC_COLOR,[lo]:n.ONE_MINUS_SRC_ALPHA,[b0]:n.ONE_MINUS_DST_COLOR,[y0]:n.ONE_MINUS_DST_ALPHA,[E0]:n.CONSTANT_COLOR,[T0]:n.ONE_MINUS_CONSTANT_COLOR,[w0]:n.CONSTANT_ALPHA,[A0]:n.ONE_MINUS_CONSTANT_ALPHA};function ve(I,ce,le,Fe,Re,xt,_t,Yt,ln,vt){if(I===ci){p===!0&&(De(n.BLEND),p=!1);return}if(p===!1&&(Ve(n.BLEND),p=!0),I!==gh){if(I!==_||vt!==N){if((v!==ys||b!==ys)&&(n.blendEquation(n.FUNC_ADD),v=ys,b=ys),vt)switch(I){case Xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ei:n.blendFunc(n.ONE,n.ONE);break;case Qu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ed:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ei:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ed:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,C=null,P=null,D=null,M.set(0,0,0),E=0,_=I,N=vt}return}Re=Re||ce,xt=xt||le,_t=_t||Fe,(ce!==v||Re!==b)&&(n.blendEquationSeparate(Ae[ce],Ae[Re]),v=ce,b=Re),(le!==y||Fe!==C||xt!==P||_t!==D)&&(n.blendFuncSeparate(ze[le],ze[Fe],ze[xt],ze[_t]),y=le,C=Fe,P=xt,D=_t),(Yt.equals(M)===!1||ln!==E)&&(n.blendColor(Yt.r,Yt.g,Yt.b,ln),M.copy(Yt),E=ln),_=I,N=!1}function At(I,ce){I.side===St?De(n.CULL_FACE):Ve(n.CULL_FACE);let le=I.side===$t;ce&&(le=!le),Ye(le),I.blending===Xi&&I.transparent===!1?ve(ci):ve(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);let Fe=I.stencilWrite;l.setTest(Fe),Fe&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),H(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ve(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(I){V!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),V=I)}function w(I){I!==u0?(Ve(n.CULL_FACE),I!==z&&(I===ju?n.cullFace(n.BACK):I===d0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),z=I}function S(I){I!==L&&(K&&n.lineWidth(I),L=I)}function H(I,ce,le){I?(Ve(n.POLYGON_OFFSET_FILL),(U!==ce||q!==le)&&(n.polygonOffset(ce,le),U=ce,q=le)):De(n.POLYGON_OFFSET_FILL)}function ie(I){I?Ve(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function Q(I){I===void 0&&(I=n.TEXTURE0+$-1),re!==I&&(n.activeTexture(I),re=I)}function se(I,ce,le){le===void 0&&(re===null?le=n.TEXTURE0+$-1:le=re);let Fe=me[le];Fe===void 0&&(Fe={type:void 0,texture:void 0},me[le]=Fe),(Fe.type!==I||Fe.texture!==ce)&&(re!==le&&(n.activeTexture(le),re=le),n.bindTexture(I,ce||He[I]),Fe.type=I,Fe.texture=ce)}function Me(){let I=me[re];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function he(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(I){fe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),fe.copy(I))}function ut(I){Ee.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ee.copy(I))}function Pt(I,ce){let le=u.get(ce);le===void 0&&(le=new WeakMap,u.set(ce,le));let Fe=le.get(I);Fe===void 0&&(Fe=n.getUniformBlockIndex(ce,I.name),le.set(I,Fe))}function $e(I,ce){let Fe=u.get(ce).get(I);h.get(ce)!==Fe&&(n.uniformBlockBinding(ce,Fe,I.__bindingPointIndex),h.set(ce,Fe))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},re=null,me={},f={},g=new WeakMap,x=[],m=null,p=!1,_=null,v=null,y=null,C=null,b=null,P=null,D=null,M=new ne(0,0,0),E=0,N=!1,V=null,z=null,L=null,U=null,q=null,fe.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ve,disable:De,bindFramebuffer:ot,drawBuffers:B,useProgram:cn,setBlending:ve,setMaterial:At,setFlipSided:Ye,setCullFace:w,setLineWidth:S,setPolygonOffset:H,setScissorTest:ie,activeTexture:Q,bindTexture:se,unbindTexture:Me,compressedTexImage2D:he,compressedTexImage3D:ge,texImage2D:Te,texImage3D:xe,updateUBOMapping:Pt,uniformBlockBinding:$e,texStorage2D:Qe,texStorage3D:Ue,texSubImage2D:Ie,texSubImage3D:Ze,compressedTexSubImage2D:j,compressedTexSubImage3D:dt,scissor:We,viewport:ut,reset:oe}}function iM(n,e,t,i,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return f?new OffscreenCanvas(w,S):uo("canvas")}function x(w,S,H,ie){let Q=1;if((w.width>ie||w.height>ie)&&(Q=ie/Math.max(w.width,w.height)),Q<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let se=S?Aa:Math.floor,Me=se(Q*w.width),he=se(Q*w.height);u===void 0&&(u=g(Me,he));let ge=H?g(Me,he):u;return ge.width=Me,ge.height=he,ge.getContext("2d").drawImage(w,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Me+"x"+he+")."),ge}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Fl(w.width)&&Fl(w.height)}function p(w){return a?!1:w.wrapS!==Rn||w.wrapT!==Rn||w.minFilter!==Ot&&w.minFilter!==fn}function _(w,S){return w.generateMipmaps&&S&&w.minFilter!==Ot&&w.minFilter!==fn}function v(w){n.generateMipmap(w)}function y(w,S,H,ie,Q=!1){if(a===!1)return S;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let se=S;if(S===n.RED&&(H===n.FLOAT&&(se=n.R32F),H===n.HALF_FLOAT&&(se=n.R16F),H===n.UNSIGNED_BYTE&&(se=n.R8)),S===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(se=n.R8UI),H===n.UNSIGNED_SHORT&&(se=n.R16UI),H===n.UNSIGNED_INT&&(se=n.R32UI),H===n.BYTE&&(se=n.R8I),H===n.SHORT&&(se=n.R16I),H===n.INT&&(se=n.R32I)),S===n.RG&&(H===n.FLOAT&&(se=n.RG32F),H===n.HALF_FLOAT&&(se=n.RG16F),H===n.UNSIGNED_BYTE&&(se=n.RG8)),S===n.RGBA){let Me=Q?Sa:at.getTransfer(ie);H===n.FLOAT&&(se=n.RGBA32F),H===n.HALF_FLOAT&&(se=n.RGBA16F),H===n.UNSIGNED_BYTE&&(se=Me===pt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function C(w,S,H){return _(w,H)===!0||w.isFramebufferTexture&&w.minFilter!==Ot&&w.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function b(w){return w===Ot||w===ba||w===to?n.NEAREST:n.LINEAR}function P(w){let S=w.target;S.removeEventListener("dispose",P),M(S),S.isVideoTexture&&h.delete(S)}function D(w){let S=w.target;S.removeEventListener("dispose",D),N(S)}function M(w){let S=i.get(w);if(S.__webglInit===void 0)return;let H=w.source,ie=d.get(H);if(ie){let Q=ie[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(w),Object.keys(ie).length===0&&d.delete(H)}i.remove(w)}function E(w){let S=i.get(w);n.deleteTexture(S.__webglTexture);let H=w.source,ie=d.get(H);delete ie[S.__cacheKey],o.memory.textures--}function N(w){let S=w.texture,H=i.get(w),ie=i.get(S);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(H.__webglFramebuffer[Q]))for(let se=0;se<H.__webglFramebuffer[Q].length;se++)n.deleteFramebuffer(H.__webglFramebuffer[Q][se]);else n.deleteFramebuffer(H.__webglFramebuffer[Q]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[Q])}else{if(Array.isArray(H.__webglFramebuffer))for(let Q=0;Q<H.__webglFramebuffer.length;Q++)n.deleteFramebuffer(H.__webglFramebuffer[Q]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let Q=0;Q<H.__webglColorRenderbuffer.length;Q++)H.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[Q]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,se=S.length;Q<se;Q++){let Me=i.get(S[Q]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(S[Q])}i.remove(S),i.remove(w)}let V=0;function z(){V=0}function L(){let w=V;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),V+=1,w}function U(w){let S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function q(w,S){let H=i.get(w);if(w.isVideoTexture&&At(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){let ie=w.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(H,w,S);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+S)}function $(w,S){let H=i.get(w);if(w.version>0&&H.__version!==w.version){fe(H,w,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+S)}function K(w,S){let H=i.get(w);if(w.version>0&&H.__version!==w.version){fe(H,w,S);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+S)}function Z(w,S){let H=i.get(w);if(w.version>0&&H.__version!==w.version){Ee(H,w,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+S)}let te={[Ei]:n.REPEAT,[Rn]:n.CLAMP_TO_EDGE,[ho]:n.MIRRORED_REPEAT},re={[Ot]:n.NEAREST,[ba]:n.NEAREST_MIPMAP_NEAREST,[to]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[Sh]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},me={[$0]:n.NEVER,[ng]:n.ALWAYS,[J0]:n.LESS,[$f]:n.LEQUAL,[j0]:n.EQUAL,[tg]:n.GEQUAL,[Q0]:n.GREATER,[eg]:n.NOTEQUAL};function Y(w,S,H){if(H?(n.texParameteri(w,n.TEXTURE_WRAP_S,te[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,te[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,te[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,re[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,re[S.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==Rn||S.wrapT!==Rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,b(S.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==Ot&&S.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ot||S.minFilter!==to&&S.minFilter!==Zi||S.type===bi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===vn&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(w,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function J(w,S){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",P));let ie=S.source,Q=d.get(ie);Q===void 0&&(Q={},d.set(ie,Q));let se=U(S);if(se!==w.__cacheKey){Q[se]===void 0&&(Q[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[se].usedTimes++;let Me=Q[w.__cacheKey];Me!==void 0&&(Q[w.__cacheKey].usedTimes--,Me.usedTimes===0&&E(S)),w.__cacheKey=se,w.__webglTexture=Q[se].texture}return H}function fe(w,S,H){let ie=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=n.TEXTURE_3D);let Q=J(w,S),se=S.source;t.bindTexture(ie,w.__webglTexture,n.TEXTURE0+H);let Me=i.get(se);if(se.version!==Me.__version||Q===!0){t.activeTexture(n.TEXTURE0+H);let he=at.getPrimaries(at.workingColorSpace),ge=S.colorSpace===_n?null:at.getPrimaries(S.colorSpace),Ie=S.colorSpace===_n||he===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ze=p(S)&&m(S.image)===!1,j=x(S.image,Ze,!1,s.maxTextureSize);j=Ye(S,j);let dt=m(j)||a,Qe=r.convert(S.format,S.colorSpace),Ue=r.convert(S.type),Te=y(S.internalFormat,Qe,Ue,S.colorSpace,S.isVideoTexture);Y(ie,S,dt);let xe,We=S.mipmaps,ut=a&&S.isVideoTexture!==!0&&Te!==Yf,Pt=Me.__version===void 0||Q===!0,$e=C(S,j,dt);if(S.isDepthTexture)Te=n.DEPTH_COMPONENT,a?S.type===bi?Te=n.DEPTH_COMPONENT32F:S.type===Vi?Te=n.DEPTH_COMPONENT24:S.type===bs?Te=n.DEPTH24_STENCIL8:Te=n.DEPTH_COMPONENT16:S.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ss&&Te===n.DEPTH_COMPONENT&&S.type!==Eh&&S.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Vi,Ue=r.convert(S.type)),S.format===cr&&Te===n.DEPTH_COMPONENT&&(Te=n.DEPTH_STENCIL,S.type!==bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=bs,Ue=r.convert(S.type))),Pt&&(ut?t.texStorage2D(n.TEXTURE_2D,1,Te,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,Te,j.width,j.height,0,Qe,Ue,null));else if(S.isDataTexture)if(We.length>0&&dt){ut&&Pt&&t.texStorage2D(n.TEXTURE_2D,$e,Te,We[0].width,We[0].height);for(let oe=0,I=We.length;oe<I;oe++)xe=We[oe],ut?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,xe.width,xe.height,Qe,Ue,xe.data):t.texImage2D(n.TEXTURE_2D,oe,Te,xe.width,xe.height,0,Qe,Ue,xe.data);S.generateMipmaps=!1}else ut?(Pt&&t.texStorage2D(n.TEXTURE_2D,$e,Te,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,j.width,j.height,Qe,Ue,j.data)):t.texImage2D(n.TEXTURE_2D,0,Te,j.width,j.height,0,Qe,Ue,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ut&&Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,Te,We[0].width,We[0].height,j.depth);for(let oe=0,I=We.length;oe<I;oe++)xe=We[oe],S.format!==zn?Qe!==null?ut?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,j.depth,Qe,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Te,xe.width,xe.height,j.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,j.depth,Qe,Ue,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Te,xe.width,xe.height,j.depth,0,Qe,Ue,xe.data)}else{ut&&Pt&&t.texStorage2D(n.TEXTURE_2D,$e,Te,We[0].width,We[0].height);for(let oe=0,I=We.length;oe<I;oe++)xe=We[oe],S.format!==zn?Qe!==null?ut?t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,xe.width,xe.height,Qe,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Te,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,xe.width,xe.height,Qe,Ue,xe.data):t.texImage2D(n.TEXTURE_2D,oe,Te,xe.width,xe.height,0,Qe,Ue,xe.data)}else if(S.isDataArrayTexture)ut?(Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,Te,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Qe,Ue,j.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,j.width,j.height,j.depth,0,Qe,Ue,j.data);else if(S.isData3DTexture)ut?(Pt&&t.texStorage3D(n.TEXTURE_3D,$e,Te,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Qe,Ue,j.data)):t.texImage3D(n.TEXTURE_3D,0,Te,j.width,j.height,j.depth,0,Qe,Ue,j.data);else if(S.isFramebufferTexture){if(Pt)if(ut)t.texStorage2D(n.TEXTURE_2D,$e,Te,j.width,j.height);else{let oe=j.width,I=j.height;for(let ce=0;ce<$e;ce++)t.texImage2D(n.TEXTURE_2D,ce,Te,oe,I,0,Qe,Ue,null),oe>>=1,I>>=1}}else if(We.length>0&&dt){ut&&Pt&&t.texStorage2D(n.TEXTURE_2D,$e,Te,We[0].width,We[0].height);for(let oe=0,I=We.length;oe<I;oe++)xe=We[oe],ut?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Qe,Ue,xe):t.texImage2D(n.TEXTURE_2D,oe,Te,Qe,Ue,xe);S.generateMipmaps=!1}else ut?(Pt&&t.texStorage2D(n.TEXTURE_2D,$e,Te,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Qe,Ue,j)):t.texImage2D(n.TEXTURE_2D,0,Te,Qe,Ue,j);_(S,dt)&&v(ie),Me.__version=se.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Ee(w,S,H){if(S.image.length!==6)return;let ie=J(w,S),Q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+H);let se=i.get(Q);if(Q.version!==se.__version||ie===!0){t.activeTexture(n.TEXTURE0+H);let Me=at.getPrimaries(at.workingColorSpace),he=S.colorSpace===_n?null:at.getPrimaries(S.colorSpace),ge=S.colorSpace===_n||Me===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,Ze=S.image[0]&&S.image[0].isDataTexture,j=[];for(let oe=0;oe<6;oe++)!Ie&&!Ze?j[oe]=x(S.image[oe],!1,!0,s.maxCubemapSize):j[oe]=Ze?S.image[oe].image:S.image[oe],j[oe]=Ye(S,j[oe]);let dt=j[0],Qe=m(dt)||a,Ue=r.convert(S.format,S.colorSpace),Te=r.convert(S.type),xe=y(S.internalFormat,Ue,Te,S.colorSpace),We=a&&S.isVideoTexture!==!0,ut=se.__version===void 0||ie===!0,Pt=C(S,dt,Qe);Y(n.TEXTURE_CUBE_MAP,S,Qe);let $e;if(Ie){We&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,xe,dt.width,dt.height);for(let oe=0;oe<6;oe++){$e=j[oe].mipmaps;for(let I=0;I<$e.length;I++){let ce=$e[I];S.format!==zn?Ue!==null?We?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,0,0,ce.width,ce.height,Ue,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,xe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,0,0,ce.width,ce.height,Ue,Te,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,xe,ce.width,ce.height,0,Ue,Te,ce.data)}}}else{$e=S.mipmaps,We&&ut&&($e.length>0&&Pt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,xe,j[0].width,j[0].height));for(let oe=0;oe<6;oe++)if(Ze){We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,j[oe].width,j[oe].height,Ue,Te,j[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,xe,j[oe].width,j[oe].height,0,Ue,Te,j[oe].data);for(let I=0;I<$e.length;I++){let le=$e[I].image[oe].image;We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,0,0,le.width,le.height,Ue,Te,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,xe,le.width,le.height,0,Ue,Te,le.data)}}else{We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ue,Te,j[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,xe,Ue,Te,j[oe]);for(let I=0;I<$e.length;I++){let ce=$e[I];We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,0,0,Ue,Te,ce.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,xe,Ue,Te,ce.image[oe])}}}_(S,Qe)&&v(n.TEXTURE_CUBE_MAP),se.__version=Q.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Se(w,S,H,ie,Q,se){let Me=r.convert(H.format,H.colorSpace),he=r.convert(H.type),ge=y(H.internalFormat,Me,he,H.colorSpace);if(!i.get(S).__hasExternalTextures){let Ze=Math.max(1,S.width>>se),j=Math.max(1,S.height>>se);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,se,ge,Ze,j,S.depth,0,Me,he,null):t.texImage2D(Q,se,ge,Ze,j,0,Me,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ve(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,Q,i.get(H).__webglTexture,0,ze(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,Q,i.get(H).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(w,S,H){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let ie=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||ve(S)){let Q=S.depthTexture;Q&&Q.isDepthTexture&&(Q.type===bi?ie=n.DEPTH_COMPONENT32F:Q.type===Vi&&(ie=n.DEPTH_COMPONENT24));let se=ze(S);ve(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,ie,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,ie,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){let ie=ze(S);H&&ve(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,S.width,S.height):ve(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{let ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0;Q<ie.length;Q++){let se=ie[Q],Me=r.convert(se.format,se.colorSpace),he=r.convert(se.type),ge=y(se.internalFormat,Me,he,se.colorSpace),Ie=ze(S);H&&ve(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,ge,S.width,S.height):ve(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,ge,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ge,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);let ie=i.get(S.depthTexture).__webglTexture,Q=ze(S);if(S.depthTexture.format===Ss)ve(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(S.depthTexture.format===cr)ve(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function De(w){let S=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ve(S.__webglFramebuffer,w)}else if(H){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=n.createRenderbuffer(),He(S.__webglDepthbuffer[ie],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),He(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(w,S,H){let ie=i.get(w);S!==void 0&&Se(ie.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&De(w)}function B(w){let S=w.texture,H=i.get(w),ie=i.get(S);w.addEventListener("dispose",D),w.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=S.version,o.memory.textures++);let Q=w.isWebGLCubeRenderTarget===!0,se=w.isWebGLMultipleRenderTargets===!0,Me=m(w)||a;if(Q){H.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[he]=[];for(let ge=0;ge<S.mipmaps.length;ge++)H.__webglFramebuffer[he][ge]=n.createFramebuffer()}else H.__webglFramebuffer[he]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)H.__webglFramebuffer[he]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(se)if(s.drawBuffers){let he=w.texture;for(let ge=0,Ie=he.length;ge<Ie;ge++){let Ze=i.get(he[ge]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ve(w)===!1){let he=se?S:[S];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ge=0;ge<he.length;ge++){let Ie=he[ge];H.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ge]);let Ze=r.convert(Ie.format,Ie.colorSpace),j=r.convert(Ie.type),dt=y(Ie.internalFormat,Ze,j,Ie.colorSpace,w.isXRRenderTarget===!0),Qe=ze(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,dt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,H.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),He(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Y(n.TEXTURE_CUBE_MAP,S,Me);for(let he=0;he<6;he++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Se(H.__webglFramebuffer[he][ge],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else Se(H.__webglFramebuffer[he],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(S,Me)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){let he=w.texture;for(let ge=0,Ie=he.length;ge<Ie;ge++){let Ze=he[ge],j=i.get(Ze);t.bindTexture(n.TEXTURE_2D,j.__webglTexture),Y(n.TEXTURE_2D,Ze,Me),Se(H.__webglFramebuffer,w,Ze,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),_(Ze,Me)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?he=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ie.__webglTexture),Y(he,S,Me),a&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Se(H.__webglFramebuffer[ge],w,S,n.COLOR_ATTACHMENT0,he,ge);else Se(H.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,he,0);_(S,Me)&&v(he),t.unbindTexture()}w.depthBuffer&&De(w)}function cn(w){let S=m(w)||a,H=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0,Q=H.length;ie<Q;ie++){let se=H[ie];if(_(se,S)){let Me=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(se).__webglTexture;t.bindTexture(Me,he),v(Me),t.unbindTexture()}}}function Ae(w){if(a&&w.samples>0&&ve(w)===!1){let S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],H=w.width,ie=w.height,Q=n.COLOR_BUFFER_BIT,se=[],Me=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(w),ge=w.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){se.push(n.COLOR_ATTACHMENT0+Ie),w.depthBuffer&&se.push(Me);let Ze=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ze===!1&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ge&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Ie]),Ze===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),ge){let j=i.get(S[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,H,ie,0,0,H,ie,Q,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,he.__webglColorRenderbuffer[Ie]);let Ze=i.get(S[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,Ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function ze(w){return Math.min(s.maxSamples,w.samples)}function ve(w){let S=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function At(w){let S=o.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function Ye(w,S){let H=w.colorSpace,ie=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Dl||H!==kt&&H!==_n&&(at.getTransfer(H)===pt?a===!1?e.has("EXT_sRGB")===!0&&ie===zn?(w.format=Dl,w.minFilter=fn,w.generateMipmaps=!1):S=Ra.sRGBToLinear(S):(ie!==zn||Q!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=ot,this.setupRenderTarget=B,this.updateRenderTargetMipmap=cn,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ve}function sM(n,e,t){let i=t.isWebGL2;function s(r,o=_n){let a,c=at.getTransfer(o);if(r===Yi)return n.UNSIGNED_BYTE;if(r===Gf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Vf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===z0)return n.BYTE;if(r===B0)return n.SHORT;if(r===Eh)return n.UNSIGNED_SHORT;if(r===Hf)return n.INT;if(r===Vi)return n.UNSIGNED_INT;if(r===bi)return n.FLOAT;if(r===vn)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===k0)return n.ALPHA;if(r===zn)return n.RGBA;if(r===H0)return n.LUMINANCE;if(r===G0)return n.LUMINANCE_ALPHA;if(r===Ss)return n.DEPTH_COMPONENT;if(r===cr)return n.DEPTH_STENCIL;if(r===Dl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===V0)return n.RED;if(r===Wf)return n.RED_INTEGER;if(r===W0)return n.RG;if(r===Xf)return n.RG_INTEGER;if(r===qf)return n.RGBA_INTEGER;if(r===Zc||r===Kc||r===$c||r===Jc)if(c===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Zc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Zc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$c)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sd||r===rd||r===od||r===ad)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===sd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===od)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ad)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===cd||r===ld)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===cd)return c===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ld)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hd||r===ud||r===dd||r===fd||r===pd||r===md||r===gd||r===xd||r===_d||r===vd||r===yd||r===Md||r===bd||r===Sd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===hd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ud)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===md)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_d)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Md)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jc||r===Ed||r===Td)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===jc)return c===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ed)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Td)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===X0||r===wd||r===Ad||r===Rd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===jc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ad)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Xl=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Dt=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},rM={type:"move"},ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ql=class extends Ki{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=t.getContextAttributes(),m=null,p=null,_=[],v=[],y=new ee,C=null,b=new Bt;b.layers.enable(1),b.viewport=new mt;let P=new Bt;P.layers.enable(2),P.viewport=new mt;let D=[b,P],M=new Xl;M.layers.enable(1),M.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=_[Y];return J===void 0&&(J=new ro,_[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=_[Y];return J===void 0&&(J=new ro,_[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=_[Y];return J===void 0&&(J=new ro,_[Y]=J),J.getHandSpace()};function V(Y){let J=v.indexOf(Y.inputSource);if(J===-1)return;let fe=_[J];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,l||o),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",L);for(let Y=0;Y<_.length;Y++){let J=v[Y];J!==null&&(v[Y]=null,_[Y].disconnect(J))}E=null,N=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",z),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Qt(f.framebufferWidth,f.framebufferHeight,{format:zn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,fe=null,Ee=null;x.depth&&(Ee=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=x.stencil?cr:Ss,fe=x.stencil?bs:Vi);let Se={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Qt(d.textureWidth,d.textureHeight,{format:zn,type:Yi,depthTexture:new Na(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let He=e.properties.get(p);He.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),me.setContext(s),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(Y){for(let J=0;J<Y.removed.length;J++){let fe=Y.removed[J],Ee=v.indexOf(fe);Ee>=0&&(v[Ee]=null,_[Ee].disconnect(fe))}for(let J=0;J<Y.added.length;J++){let fe=Y.added[J],Ee=v.indexOf(fe);if(Ee===-1){for(let He=0;He<_.length;He++)if(He>=v.length){v.push(fe),Ee=He;break}else if(v[He]===null){v[He]=fe,Ee=He;break}if(Ee===-1)break}let Se=_[Ee];Se&&Se.connect(fe)}}let U=new R,q=new R;function $(Y,J,fe){U.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(fe.matrixWorld);let Ee=U.distanceTo(q),Se=J.projectionMatrix.elements,He=fe.projectionMatrix.elements,Ve=Se[14]/(Se[10]-1),De=Se[14]/(Se[10]+1),ot=(Se[9]+1)/Se[5],B=(Se[9]-1)/Se[5],cn=(Se[8]-1)/Se[0],Ae=(He[8]+1)/He[0],ze=Ve*cn,ve=Ve*Ae,At=Ee/(-cn+Ae),Ye=At*-cn;J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ye),Y.translateZ(At),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let w=Ve+At,S=De+At,H=ze-Ye,ie=ve+(Ee-Ye),Q=ot*De/S*w,se=B*De/S*w;Y.projectionMatrix.makePerspective(H,ie,Q,se,w,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function K(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;M.near=P.near=b.near=Y.near,M.far=P.far=b.far=Y.far,(E!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,N=M.far);let J=Y.parent,fe=M.cameras;K(M,J);for(let Ee=0;Ee<fe.length;Ee++)K(fe[Ee],J);fe.length===2?$(M,b,P):M.projectionMatrix.copy(b.projectionMatrix),Z(Y,M,J)};function Z(Y,J,fe){fe===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=hr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)};let te=null;function re(Y,J){if(h=J.getViewerPose(l||o),g=J,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Ee=!1;fe.length!==M.cameras.length&&(M.cameras.length=0,Ee=!0);for(let Se=0;Se<fe.length;Se++){let He=fe[Se],Ve=null;if(f!==null)Ve=f.getViewport(He);else{let ot=u.getViewSubImage(d,He);Ve=ot.viewport,Se===0&&(e.setRenderTargetTextures(p,ot.colorTexture,d.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(p))}let De=D[Se];De===void 0&&(De=new Bt,De.layers.enable(Se),De.viewport=new mt,D[Se]=De),De.matrix.fromArray(He.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(He.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Se===0&&(M.matrix.copy(De.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ee===!0&&M.cameras.push(De)}}for(let fe=0;fe<_.length;fe++){let Ee=v[fe],Se=_[fe];Ee!==null&&Se!==void 0&&Se.update(Ee,J,l||o)}te&&te(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let me=new tp;me.setAnimationLoop(re),this.setAnimationLoop=function(Y){te=Y},this.dispose=function(){}}};function oM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ep(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function aM(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,v){let y=v.program;i.uniformBlockBinding(_,y)}function l(_,v){let y=s[_.id];y===void 0&&(g(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));let C=v.program;i.updateUBOMapping(_,C);let b=e.render.frame;r[_.id]!==b&&(d(_),r[_.id]=b)}function h(_){let v=u();_.__bindingPointIndex=v;let y=n.createBuffer(),C=_.__size,b=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],y=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let b=0,P=y.length;b<P;b++){let D=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,E=D.length;M<E;M++){let N=D[M];if(f(N,b,M,C)===!0){let V=N.__offset,z=Array.isArray(N.value)?N.value:[N.value],L=0;for(let U=0;U<z.length;U++){let q=z[U],$=x(q);typeof q=="number"||typeof q=="boolean"?(N.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,V+L,N.__data)):q.isMatrix3?(N.__data[0]=q.elements[0],N.__data[1]=q.elements[1],N.__data[2]=q.elements[2],N.__data[3]=0,N.__data[4]=q.elements[3],N.__data[5]=q.elements[4],N.__data[6]=q.elements[5],N.__data[7]=0,N.__data[8]=q.elements[6],N.__data[9]=q.elements[7],N.__data[10]=q.elements[8],N.__data[11]=0):(q.toArray(N.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,v,y,C){let b=_.value,P=v+"_"+y;if(C[P]===void 0)return typeof b=="number"||typeof b=="boolean"?C[P]=b:C[P]=b.clone(),!0;{let D=C[P];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return C[P]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function g(_){let v=_.uniforms,y=0,C=16;for(let P=0,D=v.length;P<D;P++){let M=Array.isArray(v[P])?v[P]:[v[P]];for(let E=0,N=M.length;E<N;E++){let V=M[E],z=Array.isArray(V.value)?V.value:[V.value];for(let L=0,U=z.length;L<U;L++){let q=z[L],$=x(q),K=y%C;K!==0&&C-K<$.boundary&&(y+=C-K),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=$.storage}}}let b=y%C;return b>0&&(y+=C-b),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var go=class{constructor(e={}){let{canvas:t=xg(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;let v=this,y=!1,C=0,b=0,P=null,D=-1,M=null,E=new mt,N=new mt,V=null,z=new ne(0),L=0,U=t.width,q=t.height,$=1,K=null,Z=null,te=new mt(0,0,U,q),re=new mt(0,0,U,q),me=!1,Y=new mo,J=!1,fe=!1,Ee=null,Se=new Ce,He=new ee,Ve=new R,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return P===null?$:1}let B=i;function cn(T,O){for(let G=0;G<T.length;G++){let W=T[G],k=t.getContext(W,O);if(k!==null)return k}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ph}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ce,!1),B===null){let O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),B=cn(O,T),B===null)throw cn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ae,ze,ve,At,Ye,w,S,H,ie,Q,se,Me,he,ge,Ie,Ze,j,dt,Qe,Ue,Te,xe,We,ut;function Pt(){Ae=new wv(B),ze=new yv(B,Ae,e),Ae.init(ze),xe=new sM(B,Ae,ze),ve=new nM(B,Ae,ze),At=new Cv(B),Ye=new Wy,w=new iM(B,Ae,ve,Ye,ze,xe,At),S=new bv(v),H=new Tv(v),ie=new Og(B,ze),We=new _v(B,Ae,ie,ze),Q=new Av(B,ie,At,We),se=new Dv(B,Q,ie,At),Qe=new Iv(B,ze,w),Ze=new Mv(Ye),Me=new Vy(v,S,H,Ae,ze,We,Ze),he=new oM(v,Ye),ge=new qy,Ie=new jy(Ae,ze),dt=new xv(v,S,H,ve,se,d,c),j=new tM(v,se,ze),ut=new aM(B,At,ze,ve),Ue=new vv(B,Ae,At,ze),Te=new Rv(B,Ae,At,ze),At.programs=Me.programs,v.capabilities=ze,v.extensions=Ae,v.properties=Ye,v.renderLists=ge,v.shadowMap=j,v.state=ve,v.info=At}Pt();let $e=new ql(v,B);this.xr=$e,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=Ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(U,q,!1))},this.getSize=function(T){return T.set(U,q)},this.setSize=function(T,O,G=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,q=O,t.width=Math.floor(T*$),t.height=Math.floor(O*$),G===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(U*$,q*$).floor()},this.setDrawingBufferSize=function(T,O,G){U=T,q=O,$=G,t.width=Math.floor(T*G),t.height=Math.floor(O*G),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,O,G,W){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,O,G,W),ve.viewport(E.copy(te).multiplyScalar($).floor())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,O,G,W){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,O,G,W),ve.scissor(N.copy(re).multiplyScalar($).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(T){ve.setScissorTest(me=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){Z=T},this.getClearColor=function(T){return T.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(T=!0,O=!0,G=!0){let W=0;if(T){let k=!1;if(P!==null){let pe=P.texture.format;k=pe===qf||pe===Xf||pe===Wf}if(k){let pe=P.texture.type,be=pe===Yi||pe===Vi||pe===Eh||pe===bs||pe===Gf||pe===Vf,Pe=dt.getClearColor(),Ne=dt.getClearAlpha(),Ke=Pe.r,Be=Pe.g,Ge=Pe.b;be?(f[0]=Ke,f[1]=Be,f[2]=Ge,f[3]=Ne,B.clearBufferuiv(B.COLOR,0,f)):(g[0]=Ke,g[1]=Be,g[2]=Ge,g[3]=Ne,B.clearBufferiv(B.COLOR,0,g))}else W|=B.COLOR_BUFFER_BIT}O&&(W|=B.DEPTH_BUFFER_BIT),G&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ge.dispose(),Ie.dispose(),Ye.dispose(),S.dispose(),H.dispose(),se.dispose(),We.dispose(),ut.dispose(),Me.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",ln),$e.removeEventListener("sessionend",vt),Ee&&(Ee.dispose(),Ee=null),hn.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let T=At.autoReset,O=j.enabled,G=j.autoUpdate,W=j.needsUpdate,k=j.type;Pt(),At.autoReset=T,j.enabled=O,j.autoUpdate=G,j.needsUpdate=W,j.type=k}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){let O=T.target;O.removeEventListener("dispose",le),Fe(O)}function Fe(T){Re(T),Ye.remove(T)}function Re(T){let O=Ye.get(T).programs;O!==void 0&&(O.forEach(function(G){Me.releaseProgram(G)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,G,W,k,pe){O===null&&(O=De);let be=k.isMesh&&k.matrixWorld.determinant()<0,Pe=a0(T,O,G,W,k);ve.setMaterial(W,be);let Ne=G.index,Ke=1;if(W.wireframe===!0){if(Ne=Q.getWireframeAttribute(G),Ne===void 0)return;Ke=2}let Be=G.drawRange,Ge=G.attributes.position,It=Be.start*Ke,Tn=(Be.start+Be.count)*Ke;pe!==null&&(It=Math.max(It,pe.start*Ke),Tn=Math.min(Tn,(pe.start+pe.count)*Ke)),Ne!==null?(It=Math.max(It,0),Tn=Math.min(Tn,Ne.count)):Ge!=null&&(It=Math.max(It,0),Tn=Math.min(Tn,Ge.count));let Zt=Tn-It;if(Zt<0||Zt===1/0)return;We.setup(k,W,Pe,G,Ne);let fi,Rt=Ue;if(Ne!==null&&(fi=ie.get(Ne),Rt=Te,Rt.setIndex(fi)),k.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*ot()),Rt.setMode(B.LINES)):Rt.setMode(B.TRIANGLES);else if(k.isLine){let Je=W.linewidth;Je===void 0&&(Je=1),ve.setLineWidth(Je*ot()),k.isLineSegments?Rt.setMode(B.LINES):k.isLineLoop?Rt.setMode(B.LINE_LOOP):Rt.setMode(B.LINE_STRIP)}else k.isPoints?Rt.setMode(B.POINTS):k.isSprite&&Rt.setMode(B.TRIANGLES);if(k.isBatchedMesh)Rt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Rt.renderInstances(It,Zt,k.count);else if(G.isInstancedBufferGeometry){let Je=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Wc=Math.min(G.instanceCount,Je);Rt.renderInstances(It,Zt,Wc)}else Rt.render(It,Zt)};function xt(T,O,G){T.transparent===!0&&T.side===St&&T.forceSinglePass===!1?(T.side=$t,T.needsUpdate=!0,Xo(T,O,G),T.side=li,T.needsUpdate=!0,Xo(T,O,G),T.side=St):Xo(T,O,G)}this.compile=function(T,O,G=null){G===null&&(G=T),m=Ie.get(G),m.init(),_.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==G&&T.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(v._useLegacyLights);let W=new Set;return T.traverse(function(k){let pe=k.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){let Pe=pe[be];xt(Pe,G,k),W.add(Pe)}else xt(pe,G,k),W.add(pe)}),_.pop(),m=null,W},this.compileAsync=function(T,O,G=null){let W=this.compile(T,O,G);return new Promise(k=>{function pe(){if(W.forEach(function(be){Ye.get(be).currentProgram.isReady()&&W.delete(be)}),W.size===0){k(T);return}setTimeout(pe,10)}Ae.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let _t=null;function Yt(T){_t&&_t(T)}function ln(){hn.stop()}function vt(){hn.start()}let hn=new tp;hn.setAnimationLoop(Yt),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(T){_t=T,$e.setAnimationLoop(T),T===null?hn.stop():hn.start()},$e.addEventListener("sessionstart",ln),$e.addEventListener("sessionend",vt),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(O),O=$e.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,P),m=Ie.get(T,_.length),m.init(),_.push(m),Se.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(Se),fe=this.localClippingEnabled,J=Ze.init(this.clippingPlanes,fe),x=ge.get(T,p.length),x.init(),p.push(x),ri(T,O,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(K,Z),this.info.render.frame++,J===!0&&Ze.beginShadows();let G=m.state.shadowsArray;if(j.render(G,T,O),J===!0&&Ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),dt.render(x,T),m.setupLights(v._useLegacyLights),O.isArrayCamera){let W=O.cameras;for(let k=0,pe=W.length;k<pe;k++){let be=W[k];qu(x,T,be,be.viewport)}}else qu(x,T,O);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(v,T,O),We.resetDefaultState(),D=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function ri(T,O,G,W){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){W&&Ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Se);let be=se.update(T),Pe=T.material;Pe.visible&&x.push(T,be,Pe,G,Ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){let be=se.update(T),Pe=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ve.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ve.copy(be.boundingSphere.center)),Ve.applyMatrix4(T.matrixWorld).applyMatrix4(Se)),Array.isArray(Pe)){let Ne=be.groups;for(let Ke=0,Be=Ne.length;Ke<Be;Ke++){let Ge=Ne[Ke],It=Pe[Ge.materialIndex];It&&It.visible&&x.push(T,be,It,G,Ve.z,Ge)}}else Pe.visible&&x.push(T,be,Pe,G,Ve.z,null)}}let pe=T.children;for(let be=0,Pe=pe.length;be<Pe;be++)ri(pe[be],O,G,W)}function qu(T,O,G,W){let k=T.opaque,pe=T.transmissive,be=T.transparent;m.setupLightsView(G),J===!0&&Ze.setGlobalState(v.clippingPlanes,G),pe.length>0&&o0(k,pe,O,G),W&&ve.viewport(E.copy(W)),k.length>0&&Wo(k,O,G),pe.length>0&&Wo(pe,O,G),be.length>0&&Wo(be,O,G),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function o0(T,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let pe=ze.isWebGL2;Ee===null&&(Ee=new Qt(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?vn:Yi,minFilter:Zi,samples:pe?4:0})),v.getDrawingBufferSize(He),pe?Ee.setSize(He.x,He.y):Ee.setSize(Aa(He.x),Aa(He.y));let be=v.getRenderTarget();v.setRenderTarget(Ee),v.getClearColor(z),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let Pe=v.toneMapping;v.toneMapping=qi,Wo(T,G,W),w.updateMultisampleRenderTarget(Ee),w.updateRenderTargetMipmap(Ee);let Ne=!1;for(let Ke=0,Be=O.length;Ke<Be;Ke++){let Ge=O[Ke],It=Ge.object,Tn=Ge.geometry,Zt=Ge.material,fi=Ge.group;if(Zt.side===St&&It.layers.test(W.layers)){let Rt=Zt.side;Zt.side=$t,Zt.needsUpdate=!0,Yu(It,G,W,Tn,Zt,fi),Zt.side=Rt,Zt.needsUpdate=!0,Ne=!0}}Ne===!0&&(w.updateMultisampleRenderTarget(Ee),w.updateRenderTargetMipmap(Ee)),v.setRenderTarget(be),v.setClearColor(z,L),v.toneMapping=Pe}function Wo(T,O,G){let W=O.isScene===!0?O.overrideMaterial:null;for(let k=0,pe=T.length;k<pe;k++){let be=T[k],Pe=be.object,Ne=be.geometry,Ke=W===null?be.material:W,Be=be.group;Pe.layers.test(G.layers)&&Yu(Pe,O,G,Ne,Ke,Be)}}function Yu(T,O,G,W,k,pe){T.onBeforeRender(v,O,G,W,k,pe),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,O,G,W,T,pe),k.transparent===!0&&k.side===St&&k.forceSinglePass===!1?(k.side=$t,k.needsUpdate=!0,v.renderBufferDirect(G,O,W,k,T,pe),k.side=li,k.needsUpdate=!0,v.renderBufferDirect(G,O,W,k,T,pe),k.side=St):v.renderBufferDirect(G,O,W,k,T,pe),T.onAfterRender(v,O,G,W,k,pe)}function Xo(T,O,G){O.isScene!==!0&&(O=De);let W=Ye.get(T),k=m.state.lights,pe=m.state.shadowsArray,be=k.state.version,Pe=Me.getParameters(T,k.state,pe,O,G),Ne=Me.getProgramCacheKey(Pe),Ke=W.programs;W.environment=T.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(T.isMeshStandardMaterial?H:S).get(T.envMap||W.environment),Ke===void 0&&(T.addEventListener("dispose",le),Ke=new Map,W.programs=Ke);let Be=Ke.get(Ne);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===be)return Ku(T,Pe),Be}else Pe.uniforms=Me.getUniforms(T),T.onBuild(G,Pe,v),T.onBeforeCompile(Pe,v),Be=Me.acquireProgram(Pe,Ne),Ke.set(Ne,Be),W.uniforms=Pe.uniforms;let Ge=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=Ze.uniform),Ku(T,Pe),W.needsLights=l0(T),W.lightsStateVersion=be,W.needsLights&&(Ge.ambientLightColor.value=k.state.ambient,Ge.lightProbe.value=k.state.probe,Ge.directionalLights.value=k.state.directional,Ge.directionalLightShadows.value=k.state.directionalShadow,Ge.spotLights.value=k.state.spot,Ge.spotLightShadows.value=k.state.spotShadow,Ge.rectAreaLights.value=k.state.rectArea,Ge.ltc_1.value=k.state.rectAreaLTC1,Ge.ltc_2.value=k.state.rectAreaLTC2,Ge.pointLights.value=k.state.point,Ge.pointLightShadows.value=k.state.pointShadow,Ge.hemisphereLights.value=k.state.hemi,Ge.directionalShadowMap.value=k.state.directionalShadowMap,Ge.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ge.spotShadowMap.value=k.state.spotShadowMap,Ge.spotLightMatrix.value=k.state.spotLightMatrix,Ge.spotLightMap.value=k.state.spotLightMap,Ge.pointShadowMap.value=k.state.pointShadowMap,Ge.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function Zu(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=rr.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Ku(T,O){let G=Ye.get(T);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function a0(T,O,G,W,k){O.isScene!==!0&&(O=De),w.resetTextureUnits();let pe=O.fog,be=W.isMeshStandardMaterial?O.environment:null,Pe=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:kt,Ne=(W.isMeshStandardMaterial?H:S).get(W.envMap||be),Ke=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ge=!!G.morphAttributes.position,It=!!G.morphAttributes.normal,Tn=!!G.morphAttributes.color,Zt=qi;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Zt=v.toneMapping);let fi=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Rt=fi!==void 0?fi.length:0,Je=Ye.get(W),Wc=m.state.lights;if(J===!0&&(fe===!0||T!==M)){let Un=T===M&&W.id===D;Ze.setState(W,T,Un)}let Lt=!1;W.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Wc.state.version||Je.outputColorSpace!==Pe||k.isBatchedMesh&&Je.batching===!1||!k.isBatchedMesh&&Je.batching===!0||k.isInstancedMesh&&Je.instancing===!1||!k.isInstancedMesh&&Je.instancing===!0||k.isSkinnedMesh&&Je.skinning===!1||!k.isSkinnedMesh&&Je.skinning===!0||k.isInstancedMesh&&Je.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Je.instancingColor===!1&&k.instanceColor!==null||Je.envMap!==Ne||W.fog===!0&&Je.fog!==pe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ze.numPlanes||Je.numIntersection!==Ze.numIntersection)||Je.vertexAlphas!==Ke||Je.vertexTangents!==Be||Je.morphTargets!==Ge||Je.morphNormals!==It||Je.morphColors!==Tn||Je.toneMapping!==Zt||ze.isWebGL2===!0&&Je.morphTargetsCount!==Rt)&&(Lt=!0):(Lt=!0,Je.__version=W.version);let fs=Je.currentProgram;Lt===!0&&(fs=Xo(W,O,k));let $u=!1,Yr=!1,Xc=!1,tn=fs.getUniforms(),ps=Je.uniforms;if(ve.useProgram(fs.program)&&($u=!0,Yr=!0,Xc=!0),W.id!==D&&(D=W.id,Yr=!0),$u||M!==T){tn.setValue(B,"projectionMatrix",T.projectionMatrix),tn.setValue(B,"viewMatrix",T.matrixWorldInverse);let Un=tn.map.cameraPosition;Un!==void 0&&Un.setValue(B,Ve.setFromMatrixPosition(T.matrixWorld)),ze.logarithmicDepthBuffer&&tn.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&tn.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Yr=!0,Xc=!0)}if(k.isSkinnedMesh){tn.setOptional(B,k,"bindMatrix"),tn.setOptional(B,k,"bindMatrixInverse");let Un=k.skeleton;Un&&(ze.floatVertexTextures?(Un.boneTexture===null&&Un.computeBoneTexture(),tn.setValue(B,"boneTexture",Un.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(tn.setOptional(B,k,"batchingTexture"),tn.setValue(B,"batchingTexture",k._matricesTexture,w));let qc=G.morphAttributes;if((qc.position!==void 0||qc.normal!==void 0||qc.color!==void 0&&ze.isWebGL2===!0)&&Qe.update(k,G,fs),(Yr||Je.receiveShadow!==k.receiveShadow)&&(Je.receiveShadow=k.receiveShadow,tn.setValue(B,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ps.envMap.value=Ne,ps.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Yr&&(tn.setValue(B,"toneMappingExposure",v.toneMappingExposure),Je.needsLights&&c0(ps,Xc),pe&&W.fog===!0&&he.refreshFogUniforms(ps,pe),he.refreshMaterialUniforms(ps,W,$,q,Ee),rr.upload(B,Zu(Je),ps,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(rr.upload(B,Zu(Je),ps,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&tn.setValue(B,"center",k.center),tn.setValue(B,"modelViewMatrix",k.modelViewMatrix),tn.setValue(B,"normalMatrix",k.normalMatrix),tn.setValue(B,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Un=W.uniformsGroups;for(let Yc=0,h0=Un.length;Yc<h0;Yc++)if(ze.isWebGL2){let Ju=Un[Yc];ut.update(Ju,fs),ut.bind(Ju,fs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fs}function c0(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function l0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,O,G){Ye.get(T.texture).__webglTexture=O,Ye.get(T.depthTexture).__webglTexture=G;let W=Ye.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){let G=Ye.get(T);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,G=0){P=T,C=O,b=G;let W=!0,k=null,pe=!1,be=!1;if(T){let Ne=Ye.get(T);Ne.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(B.FRAMEBUFFER,null),W=!1):Ne.__webglFramebuffer===void 0?w.setupRenderTarget(T):Ne.__hasExternalTextures&&w.rebindTextures(T,Ye.get(T.texture).__webglTexture,Ye.get(T.depthTexture).__webglTexture);let Ke=T.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(be=!0);let Be=Ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?k=Be[O][G]:k=Be[O],pe=!0):ze.isWebGL2&&T.samples>0&&w.useMultisampledRTT(T)===!1?k=Ye.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[G]:k=Be,E.copy(T.viewport),N.copy(T.scissor),V=T.scissorTest}else E.copy(te).multiplyScalar($).floor(),N.copy(re).multiplyScalar($).floor(),V=me;if(ve.bindFramebuffer(B.FRAMEBUFFER,k)&&ze.drawBuffers&&W&&ve.drawBuffers(T,k),ve.viewport(E),ve.scissor(N),ve.setScissorTest(V),pe){let Ne=Ye.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ne.__webglTexture,G)}else if(be){let Ne=Ye.get(T.texture),Ke=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.__webglTexture,G||0,Ke)}D=-1},this.readRenderTargetPixels=function(T,O,G,W,k,pe,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){ve.bindFramebuffer(B.FRAMEBUFFER,Pe);try{let Ne=T.texture,Ke=Ne.format,Be=Ne.type;if(Ke!==zn&&xe.convert(Ke)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ge=Be===vn&&(Ae.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Be!==Yi&&xe.convert(Be)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===bi&&(ze.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-W&&G>=0&&G<=T.height-k&&B.readPixels(O,G,W,k,xe.convert(Ke),xe.convert(Be),pe)}finally{let Ne=P!==null?Ye.get(P).__webglFramebuffer:null;ve.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,O,G=0){let W=Math.pow(2,-G),k=Math.floor(O.image.width*W),pe=Math.floor(O.image.height*W);w.setTexture2D(O,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,T.x,T.y,k,pe),ve.unbindTexture()},this.copyTextureToTexture=function(T,O,G,W=0){let k=O.image.width,pe=O.image.height,be=xe.convert(G.format),Pe=xe.convert(G.type);w.setTexture2D(G,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment),O.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,T.x,T.y,k,pe,be,Pe,O.image.data):O.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,be,O.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,W,T.x,T.y,be,Pe,O.image),W===0&&G.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(T,O,G,W,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pe=T.max.x-T.min.x+1,be=T.max.y-T.min.y+1,Pe=T.max.z-T.min.z+1,Ne=xe.convert(W.format),Ke=xe.convert(W.type),Be;if(W.isData3DTexture)w.setTexture3D(W,0),Be=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)w.setTexture2DArray(W,0),Be=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);let Ge=B.getParameter(B.UNPACK_ROW_LENGTH),It=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Tn=B.getParameter(B.UNPACK_SKIP_PIXELS),Zt=B.getParameter(B.UNPACK_SKIP_ROWS),fi=B.getParameter(B.UNPACK_SKIP_IMAGES),Rt=G.isCompressedTexture?G.mipmaps[k]:G.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Rt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Rt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,T.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,T.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,T.min.z),G.isDataTexture||G.isData3DTexture?B.texSubImage3D(Be,k,O.x,O.y,O.z,pe,be,Pe,Ne,Ke,Rt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Be,k,O.x,O.y,O.z,pe,be,Pe,Ne,Rt.data)):B.texSubImage3D(Be,k,O.x,O.y,O.z,pe,be,Pe,Ne,Ke,Rt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ge),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,It),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Tn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Zt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,fi),k===0&&W.generateMipmaps&&B.generateMipmap(Be),ve.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){C=0,b=0,P=null,ve.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===wh?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===ac?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===lt?Es:Kf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Es?lt:kt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Yl=class extends go{};Yl.prototype.isWebGL1Renderer=!0;var Ua=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ne(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mr=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},xo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new R,_o=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var vf=new R,yf=new mt,Mf=new mt,cM=new R,bf=new Ce,pa=new R,bl=new Cn,Sf=new Ce,Sl=new ur,wi=class extends _e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=id,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,pa),this.boundingBox.expandByPoint(pa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,pa),this.boundingSphere.expandByPoint(pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(s),e.ray.intersectsSphere(bl)!==!1&&(Sf.copy(s).invert(),Sl.copy(e.ray).applyMatrix4(Sf),!(this.boundingBox!==null&&Sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===id?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===O0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;yf.fromBufferAttribute(s.attributes.skinIndex,e),Mf.fromBufferAttribute(s.attributes.skinWeight,e),vf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Mf.getComponent(r);if(o!==0){let a=yf.getComponent(r);bf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(cM.copy(vf).applyMatrix4(bf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},ws=class extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}},Zl=class extends jt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Ot,h=Ot,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ef=new Ce,lM=new Ce,gr=class n{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ce;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:lM;Ef.multiplyMatrices(a,t[r]),Ef.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Zl(t,e,e,zn,bi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ws),this.bones.push(o),this.boneInverses.push(new Ce().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},ti=class extends rt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},er=new Ce,Tf=new Ce,ma=[],wf=new yn,hM=new Ce,jr=new _e,Qr=new Cn,Ji=class extends _e{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ti(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,hM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,er),wf.copy(e.boundingBox).applyMatrix4(er),this.boundingBox.union(wf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,er),Qr.copy(e.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(i),e.ray.intersectsSphere(Qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),Tf.multiplyMatrices(i,er),jr.matrixWorld=Tf,jr.raycast(e,ma);for(let o=0,a=ma.length;o<a;o++){let c=ma[o];c.instanceId=r,c.object=this,t.push(c)}ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ti(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var vo=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Af=new R,Rf=new R,Cf=new Ce,El=new ur,ga=new Cn,xr=class extends Et{constructor(e=new Mt,t=new vo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Af.fromBufferAttribute(t,s-1),Rf.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Af.distanceTo(Rf);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;Cf.copy(s).invert(),El.copy(e.ray).applyMatrix4(Cf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,h=new R,u=new R,d=new R,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let v=p,y=_-1;v<y;v+=f){let C=g.getX(v),b=g.getX(v+1);if(l.fromBufferAttribute(m,C),h.fromBufferAttribute(m,b),El.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let v=p,y=_-1;v<y;v+=f){if(l.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),El.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Pf=new R,Lf=new R,Oa=class extends xr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Pf.fromBufferAttribute(t,s),Lf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pf.distanceTo(Lf);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},za=class extends xr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},yo=class extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},If=new Ce,Kl=new ur,xa=new Cn,_a=new R,Ba=class extends Et{constructor(e=new Mt,t=new yo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(s),xa.radius+=r,e.ray.intersectsSphere(xa)===!1)return;If.copy(s).invert(),Kl.copy(e.ray).applyMatrix4(If);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);_a.fromBufferAttribute(u,m),Df(_a,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)_a.fromBufferAttribute(u,g),Df(_a,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Df(n,e,t,i,s,r,o){let a=Kl.distanceSqToPoint(n);if(a<t){let c=new R;Kl.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Bn=class extends jt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ee:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new R,s=[],r=[],o=[],a=new R,c=new Ce;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(zt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Mo=class extends kn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let i=t||new ee,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$l=class extends Mo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ch(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var va=new R,Tl=new Ch,wl=new Ch,Al=new Ch,bo=class extends kn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new R){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(va.subVectors(s[0],s[1]).add(s[0]),l=va);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(va.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=va),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Tl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),wl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),Al.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),wl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Al.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Tl.calc(c),wl.calc(c),Al.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ff(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function uM(n,e){let t=1-n;return t*t*e}function dM(n,e){return 2*(1-n)*n*e}function fM(n,e){return n*n*e}function oo(n,e,t,i){return uM(n,e)+dM(n,t)+fM(n,i)}function pM(n,e){let t=1-n;return t*t*t*e}function mM(n,e){let t=1-n;return 3*t*t*n*e}function gM(n,e){return 3*(1-n)*n*n*e}function xM(n,e){return n*n*n*e}function ao(n,e,t,i,s){return pM(n,e)+mM(n,t)+gM(n,i)+xM(n,s)}var ka=class extends kn{constructor(e=new ee,t=new ee,i=new ee,s=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ee){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ao(e,s.x,r.x,o.x,a.x),ao(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jl=class extends kn{constructor(e=new R,t=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ao(e,s.x,r.x,o.x,a.x),ao(e,s.y,r.y,o.y,a.y),ao(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ha=class extends kn{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jl=class extends kn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends kn{constructor(e=new ee,t=new ee,i=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ee){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(oo(e,s.x,r.x,o.x),oo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends kn{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(oo(e,s.x,r.x,o.x),oo(e,s.y,r.y,o.y),oo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Ff(a,c.x,l.x,h.x,u.x),Ff(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ee().fromArray(s))}return this}},Ql=Object.freeze({__proto__:null,ArcCurve:$l,CatmullRomCurve3:bo,CubicBezierCurve:ka,CubicBezierCurve3:Jl,EllipseCurve:Mo,LineCurve:Ha,LineCurve3:jl,QuadraticBezierCurve:Ga,QuadraticBezierCurve3:Va,SplineCurve:Wa}),eh=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ql[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Ql[s.type]().fromJSON(s))}return this}},th=class extends eh{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ha(this.currentPoint.clone(),new ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ga(this.currentPoint.clone(),new ee(e,t),new ee(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ka(this.currentPoint.clone(),new ee(e,t),new ee(i,s),new ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Wa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new Mo(e,t,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ai=class n extends Mt{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=zt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new R,d=new ee,f=new R,g=new R,x=new R,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=t;_++){let v=i+_*h*s,y=Math.sin(v),C=Math.cos(v);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*y,u.y=e[b].y,u.z=e[b].x*C,o.push(u.x,u.y,u.z),d.x=_/t,d.y=b/(e.length-1),a.push(d.x,d.y);let P=c[3*b+0]*y,D=c[3*b+1],M=c[3*b+0]*C;l.push(P,D,M)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let y=v+_*e.length,C=y,b=y+e.length,P=y+e.length+1,D=y+1;r.push(C,b,D),r.push(P,D,b)}this.setIndex(r),this.setAttribute("position",new Oe(o,3)),this.setAttribute("uv",new Oe(a,2)),this.setAttribute("normal",new Oe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},_r=class n extends Ai{constructor(e=1,t=1,i=4,s=8){let r=new th;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},rn=class n extends Mt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new R,h=new ee;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(a,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Hn=class n extends Mt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(f,2));function _(){let y=new R,C=new R,b=0,P=(t-e)/i;for(let D=0;D<=r;D++){let M=[],E=D/r,N=E*(t-e)+e;for(let V=0;V<=s;V++){let z=V/s,L=z*c+a,U=Math.sin(L),q=Math.cos(L);C.x=N*U,C.y=-E*i+m,C.z=N*q,u.push(C.x,C.y,C.z),y.set(U,P,q).normalize(),d.push(y.x,y.y,y.z),f.push(z,1-E),M.push(g++)}x.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){let E=x[M][D],N=x[M+1][D],V=x[M+1][D+1],z=x[M][D+1];h.push(E,N,z),h.push(N,V,z),b+=6}l.addGroup(p,b,0),p+=b}function v(y){let C=g,b=new ee,P=new R,D=0,M=y===!0?e:t,E=y===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let N=g;for(let V=0;V<=s;V++){let L=V/s*c+a,U=Math.cos(L),q=Math.sin(L);P.x=M*q,P.y=m*E,P.z=M*U,u.push(P.x,P.y,P.z),d.push(0,E,0),b.x=U*.5+.5,b.y=q*.5*E+.5,f.push(b.x,b.y),g++}for(let V=0;V<s;V++){let z=C+V,L=N+V;y===!0?h.push(L,L+1,z):h.push(L+1,L,z),D+=3}l.addGroup(p,D,y===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xa=class n extends Hn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nh=class n extends Mt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(r.slice(),3)),this.setAttribute("uv",new Oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new R,y=new R,C=new R;for(let b=0;b<t.length;b+=3)f(t[b+0],v),f(t[b+1],y),f(t[b+2],C),c(v,y,C,_)}function c(_,v,y,C){let b=C+1,P=[];for(let D=0;D<=b;D++){P[D]=[];let M=_.clone().lerp(y,D/b),E=v.clone().lerp(y,D/b),N=b-D;for(let V=0;V<=N;V++)V===0&&D===b?P[D][V]=M:P[D][V]=M.clone().lerp(E,V/N)}for(let D=0;D<b;D++)for(let M=0;M<2*(b-D)-1;M++){let E=Math.floor(M/2);M%2===0?(d(P[D][E+1]),d(P[D+1][E]),d(P[D][E])):(d(P[D][E+1]),d(P[D+1][E+1]),d(P[D+1][E]))}}function l(_){let v=new R;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let _=new R;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let y=m(_)/2/Math.PI+.5,C=p(_)/Math.PI+.5;o.push(y,1-C)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let v=o[_+0],y=o[_+2],C=o[_+4],b=Math.max(v,y,C),P=Math.min(v,y,C);b>.9&&P<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){let y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function g(){let _=new R,v=new R,y=new R,C=new R,b=new ee,P=new ee,D=new ee;for(let M=0,E=0;M<r.length;M+=9,E+=6){_.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),b.set(o[E+0],o[E+1]),P.set(o[E+2],o[E+3]),D.set(o[E+4],o[E+5]),C.copy(_).add(v).add(y).divideScalar(3);let N=m(C);x(b,E+0,_,N),x(P,E+2,v,N),x(D,E+4,y,N)}}function x(_,v,y,C){C<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var qa=class n extends nh{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ji=class n extends Mt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new R,g=new ee;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let _=p+m,v=_,y=_+i+1,C=_+i+2,b=_+1;a.push(v,y,b),a.push(y,C,b)}}this.setIndex(a),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Tt=class n extends Mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new R,d=new R,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let _=[],v=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){let b=C/t;u.x=-e*Math.cos(s+b*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+b*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(b+y,1-v),_.push(l++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let v=h[p][_+1],y=h[p][_],C=h[p+1][_],b=h[p+1][_+1];(p!==0||o>0)&&f.push(v,y,b),(p!==i-1||c<Math.PI)&&f.push(y,C,b)}this.setIndex(f),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qi=class n extends Mt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ya=class n extends Mt{constructor(e=new Va(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,c=new R,l=new ee,h=new R,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(f,2));function x(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),_(),p()}function m(v){h=e.getPointAt(v/t,h);let y=o.normals[v],C=o.binormals[v];for(let b=0;b<=s;b++){let P=b/s*Math.PI*2,D=Math.sin(P),M=-Math.cos(P);c.x=M*y.x+D*C.x,c.y=M*y.y+D*C.y,c.z=M*y.z+D*C.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let y=1;y<=s;y++){let C=(s+1)*(v-1)+(y-1),b=(s+1)*v+(y-1),P=(s+1)*v+y,D=(s+1)*(v-1)+y;g.push(C,b,D),g.push(b,P,D)}}function _(){for(let v=0;v<=t;v++)for(let y=0;y<=s;y++)l.x=v/t,l.y=y/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Ql[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Za=class extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},es=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gn=class extends es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var vr=class extends Mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ya(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function _M(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function vM(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Nf(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function ap(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var ts=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ih=class extends ts{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cd,endingEnd:Cd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pd:r=e,a=2*t-i;break;case Ld:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Pd:o=e,c=2*i-t;break;case Ld:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+_*o[l+C]+v*o[c+C]+y*o[u+C];return r}},sh=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},rh=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ya(t,this.TimeBufferType),this.values=ya(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ya(e.times,Array),values:ya(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ih(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case Ts:t=this.InterpolantFactoryMethodLinear;break;case Qc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return Ts;case this.InterpolantFactoryMethodSmooth:return Qc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&_M(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Qc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Ts;var ns=class extends Vn{};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=lr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends Vn{};Ka.prototype.ValueTypeName="color";var Ri=class extends Vn{};Ri.prototype.ValueTypeName="number";var oh=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Ht.slerpFlat(r,0,o,l-a,o,l,c);return r}},ui=class extends Vn{InterpolantFactoryMethodLinear(e){return new oh(this.times,this.values,this.getValueSize(),e)}};ui.prototype.ValueTypeName="quaternion";ui.prototype.DefaultInterpolation=Ts;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Vn{};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=lr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends Vn{};Ci.prototype.ValueTypeName="vector";var $a=class{constructor(e,t=-1,i,s=q0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Qn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(MM(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Vn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=vM(c);c=Nf(c,1,h),l=Nf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ri(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];ap(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){let v=d[g];m.push(v.time),p.push(v.morphTarget===x?1:0)}s.push(new Ri(".morphTargetInfluence["+x+"]",m,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";i(Ci,f+".position",d,"pos",s),i(ui,f+".quaternion",d,"rot",s),i(Ci,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function yM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ri;case"vector":case"vector2":case"vector3":case"vector4":return Ci;case"color":return Ka;case"quaternion":return ui;case"bool":case"boolean":return ns;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function MM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=yM(n.type);if(n.times===void 0){let t=[],i=[];ap(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Wi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},ah=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},bM=new ah,Pi=class{constructor(e){this.manager=e!==void 0?e:bM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var vi={},ch=class extends Error{constructor(e,t){super(e),this.response=t}},So=class extends Pi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:i,onError:s});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=vi[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:v,value:y})=>{if(v)p.close();else{x+=y.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let b=0,P=h.length;b<P;b++){let D=h[b];D.onProgress&&D.onProgress(C)}p.enqueue(y),_()}})}}});return new Response(m)}else throw new ch(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Wi.add(e,l);let h=vi[e];delete vi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=vi[e];if(h===void 0)throw this.manager.itemError(e),l;delete vi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var lh=class extends Pi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=uo("img");function c(){h(),Wi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ja=class extends Pi{constructor(e){super(e)}load(e,t,i,s){let r=new jt,o=new lh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},yr=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ja=class extends yr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Rl=new Ce,Uf=new R,Of=new R,Eo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uf),Of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Of),t.updateMatrixWorld(),Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},hh=class extends Eo{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=hr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Qa=class extends yr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zf=new Ce,eo=new R,Cl=new R,uh=class extends Eo{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),eo.setFromMatrixPosition(e.matrixWorld),i.position.copy(eo),Cl.copy(i.position),Cl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Cl),i.updateMatrixWorld(),s.makeTranslation(-eo.x,-eo.y,-eo.z),zf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zf)}},ec=class extends yr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},dh=class extends Eo{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mr=class extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new dh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ss=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},tc=class extends Mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var nc=class extends Pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Wi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(e,c),r.manager.itemStart(e)}};var ic=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Bf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Bf(){return(typeof performance>"u"?Date:performance).now()}var Ph="\\[\\]\\.:\\/",SM=new RegExp("["+Ph+"]","g"),Lh="[^"+Ph+"]",EM="[^"+Ph.replace("\\.","")+"]",TM=/((?:WC+[\/:])*)/.source.replace("WC",Lh),wM=/(WCOD+)?/.source.replace("WCOD",EM),AM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lh),RM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lh),CM=new RegExp("^"+TM+wM+AM+RM+"$"),PM=["material","materials","bones","map"],fh=class{constructor(e,t,i){let s=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},yt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(SM,"")}static parseTrackName(e){let t=CM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);PM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=fh;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hS=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);var de=n=>document.getElementById(n),Le=Math.PI*2,tt=(n,e,t)=>n<e?e:n>t?t:n,Ln=(n,e,t)=>n+(e-n)*t;var wt=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window&&navigator.maxTouchPoints>0,Ao=Math.random,F=(n=0,e=1)=>n+Ao()*(e-n),Ro=n=>n[Math.floor(Ao()*n.length)];function hc(n,e){let t=n>>>0,i=Ao;Ao=()=>{t=t+1831565813>>>0;let s=t;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};try{return e()}finally{Ao=i}}function Sr(n,e){let t=(e-n)%Le;return t>Math.PI&&(t-=Le),t<-Math.PI&&(t+=Le),t}var uc=n=>{for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},Wt={get(n,e){try{let t=localStorage.getItem("bg_"+n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem("bg_"+n,JSON.stringify(e))}catch{}}},en=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function In(n,e,t,i,s){return n.v+=((e-n.x)*t-n.v*i)*s,n.x+=n.v*s,n.x}var on=(n=0)=>({x:n,v:0});var dc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},LM=new $i(-1,1,1,-1,0,1),Ih=class extends Mt{constructor(){super(),this.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Oe([0,2,0,0,2,0],2))}},IM=new Ih,os=class{constructor(e){this._mesh=new _e(IM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,LM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var fc=class extends Dn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rs.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new os(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Co=class extends Dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},pc=class extends Dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var mc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ee);this._width=i.width,this._height=i.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fc(dc),this.copyPass.material.blending=ci,this.clock=new ic}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Co!==void 0&&(o instanceof Co?i=!0:o instanceof pc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var gc=class extends Dn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ne}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var cp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Er=class n extends Dn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ee(e.x,e.y):new ee(256,256),this.clearColor=new ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,o,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Qt(r,o,{type:vn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Qt(r,o,{type:vn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=cp;this.highPassUniforms=rs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ee(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=dc;this.copyUniforms=rs.clone(h.uniforms),this.blendMaterial=new bt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ei,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ne,this.oldClearAlpha=1,this.basic=new et,this.fsQuad=new os(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ee(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ee(.5,.5)},direction:{value:new ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Er.BlurDirectionX=new ee(1,0);Er.BlurDirectionY=new ee(0,1);var lp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var xc=class extends Dn{constructor(){super();let e=lp;this.uniforms=rs.clone(e.uniforms),this.material=new Za({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new os(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===To?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var As=de("c"),ni=Wt.get("q",wt?"low":"high")!=="high",DM=["roughness","metalness","envMapIntensity","roughnessMap","metalnessMap"];function ht(n={}){if(!ni)return new es(n);let e=Object.assign({},n);for(let t of DM)delete e[t];return new vr(e)}var Ft=new go({canvas:As,antialias:!wt,powerPreference:"high-performance",stencil:!1});Ft.toneMapping=To;Ft.toneMappingExposure=1;Ft.shadowMap.enabled=!ni;Ft.shadowMap.type=Wt.get("q",wt?"low":"high")==="high"?mh:sc;var ye=new mr,FM=new ne("#B9A08A");ye.fog=new Ua(FM,48,120);var ct=new Bt(55,1,.1,400),up=new R(-.86,.3,.22).normalize(),dp={top:{value:new ne("#27477E")},hor:{value:new ne("#FFB46A")},hor2:{value:new ne("#9C7FB0")},sunDir:{value:up},t:{value:0},disc:{value:new ne("#FFA040")},cloud:{value:new ne("#F6C6A4")}},Fh=new bt({side:$t,depthWrite:!1,fog:!1,uniforms:dp,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 hor; uniform vec3 hor2; uniform vec3 sunDir; uniform float t; uniform vec3 disc; uniform vec3 cloud; varying vec3 vDir;
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
}`}),Rs=new _e(new Tt(300,32,16),Fh);Rs.renderOrder=-10;Rs.frustumCulled=!1;ye.add(Rs);function fp(n){dp.t.value+=n}function pp(){let n=new pr(Ft),e=new mr;e.add(new _e(new Tt(50,32,16),Fh));let t=new _e(new rn(49,24),new et({color:"#4A6A2E",side:St}));t.rotation.x=-Math.PI/2,t.position.y=-4,e.add(t);let i=n.fromScene(e,.04,.1,200);n.dispose(),ye.environment=i.texture}function mp(){if(!ni)return;let n=new po(256,{type:vn}),e=new fo(.5,400,n),t=new mr,i=new _e(new Tt(100,32,16),Fh);t.add(i),e.update(Ft,t),ye.background=n.texture,Rs.visible=!1}var gp=new ja("#AFC2EC","#4E5E2C",.8);ye.add(gp);var bn=new Mr("#FFC88C",2.5);ni&&(gp.intensity=1.55,bn.intensity=2.3);bn.castShadow=!0;bn.shadow.bias=-4e-4;bn.shadow.normalBias=.03;ye.add(bn,bn.target);function xp(n,e){let t=bn.shadow.camera,i=Math.hypot(n,e)+3;t.left=-i,t.right=i,t.top=i,t.bottom=-i,t.near=1,t.far=160,t.updateProjectionMatrix(),bn.position.copy(up).multiplyScalar(70),bn.target.position.set(0,0,0)}function wr(n,e,t,i={}){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new Bn(s);return r.colorSpace=i.linear?_n:lt,i.repeat&&(r.wrapS=r.wrapT=Ei),r.anisotropy=4,r}var ue={level:Wt.get("q",wt?"low":"high"),PR:1,post:!1,composer:null,bloom:null,perfN:0,perfSum:0,calm:0};function Dh(){return Math.min(ue.level==="high"?2:1.6,devicePixelRatio||1)}var hp=()=>Math.min(ue.level==="high"?.7:.9,devicePixelRatio||1);function Tr(){let n=innerWidth,e=innerHeight;Ft.setSize(n,e,!1),ct.aspect=n/e,ct.fov=ct.aspect<.75?72:ct.aspect<1.2?62:55,ct.updateProjectionMatrix(),ue.composer&&(ue.composer.setPixelRatio(ue.PR),ue.composer.setSize(n,e))}function NM(){if(ue.composer)return;let n=Ft.getDrawingBufferSize(new ee),e=new Qt(n.x,n.y,{type:vn,samples:4});ue.composer=new mc(Ft,e),ue.composer.addPass(new gc(ye,ct)),ue.bloom=new Er(new ee(innerWidth,innerHeight),.35,.5,.92),ue.composer.addPass(ue.bloom),ue.composer.addPass(new xc)}function Nh(n){n&&(ue.level=n,Wt.set("q",n));let e=ue.level==="high";ue.PR=Math.min(Dh(),e?2:1.3),Ft.setPixelRatio(ue.PR),ye.fog.near=e?48:30,ye.fog.far=e?120:80,ct.far=e?400:160,ct.updateProjectionMatrix(),Rs.scale.setScalar(e?1:.45);let t=e?2048:1024;if(bn.shadow.mapSize.x!==t&&(bn.shadow.mapSize.set(t,t),bn.shadow.map&&(bn.shadow.map.dispose(),bn.shadow.map=null)),e)try{NM()}catch{ue.composer=null}ue.post=e&&!!ue.composer,ue.perfN=ue.perfSum=ue.calm=0,Tr()}function _p(n,e){if(!e||n>.5||document.hidden||(ue.perfN++,ue.perfSum+=n,ue.perfN<90))return;let t=ue.perfSum/ue.perfN;ue.perfN=0,ue.perfSum=0,t>.0195?(ue.calm=0,ue.post?(ue.post=!1,ue.noPost=!0):ue.PR>hp()&&(ue.PR=Math.max(hp(),ue.PR*.88),Ft.setPixelRatio(ue.PR),Tr())):t<.0125&&++ue.calm>=3&&(ue.calm=0,ue.PR<Dh()?(ue.PR=Math.min(Dh(),ue.PR*1.12),Ft.setPixelRatio(ue.PR),Tr()):!ue.post&&ue.composer&&ue.level==="high"&&!ue.noPost&&(ue.post=!0))}function Uh(){ue.post&&ue.composer?ue.composer.render():Ft.render(ye,ct)}function Li(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Mt,l=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=vp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=vp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function vp(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let l=0;l<n.length;++l)o.set(n[l].array,a),a+=n[l].array.length;let c=new rt(o,t,i);return s!==void 0&&(c.gpuType=s),c}function yp(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let _=0,v=a.length;_<v;_++){let y=a[_],C=n.attributes[y];c[y]=new rt(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);let b=n.morphAttributes[y];b&&(l[y]=new rt(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized))}let f=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),m=f*x;for(let _=0;_<r;_++){let v=i?i.getX(_):_,y="";for(let C=0,b=a.length;C<b;C++){let P=a[C],D=n.getAttribute(P),M=D.itemSize;for(let E=0;E<M;E++)y+=`${~~(D[u[E]](v)*x+m)},`}if(y in t)h.push(t[y]);else{for(let C=0,b=a.length;C<b;C++){let P=a[C],D=n.getAttribute(P),M=n.morphAttributes[P],E=D.itemSize,N=c[P],V=l[P];for(let z=0;z<E;z++){let L=u[z],U=d[z];if(N[U](o,D[L](v)),M)for(let q=0,$=M.length;q<$;q++)V[q][U](o,M[q][L](v))}}t[y]=o,h.push(o),o++}}let p=n.clone();for(let _ in n.attributes){let v=c[_];if(p.setAttribute(_,new rt(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),_ in l)for(let y=0;y<l[_].length;y++){let C=l[_][y];p.morphAttributes[_][y]=new rt(C.array.slice(0,o*C.itemSize),C.itemSize,C.normalized)}}return p.setIndex(h),p}function Oh(n,e){if(e===Zf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===wo||e===oc){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===wo)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var Lo=class extends Pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ss.extractUrlBase(e);o=ss.resolveURL(l,this.path)}else o=ss.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new So(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Tp){try{o[nt.KHR_BINARY_GLTF]=new su(e)}catch(u){s&&s(u);return}r=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new uu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:o[u]=new Gh;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[u]=new ru(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[u]=new ou;break;case nt.KHR_MESH_QUANTIZATION:o[u]=new au;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function UM(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Hh=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ne(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],kt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Mr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ec(h),l.distance=u;break;case"spot":l=new Qa(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,cs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},Gh=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return et}extendParams(e,t,i){let s=[];e.color=new ne(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,lt))}return Promise.all(s)}},Vh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Wh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ee(a,a)}return Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ne(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,lt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ne().setRGB(a[0],a[1],a[2],kt),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},$h=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ne().setRGB(a[0],a[1],a[2],kt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,lt)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},eu=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},tu=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},nu=class{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},iu=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==Wn.TRIANGLES&&l.mode!==Wn.TRIANGLE_STRIP&&l.mode!==Wn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Ce,m=new R,p=new Ht,_=new R(1,1,1),v=new Ji(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&_.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,x.compose(m,p,_));for(let y in c)if(y==="_COLOR_0"){let C=c[y];v.instanceColor=new ti(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);Et.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Tp="glTF",Po=12,Mp={JSON:1313821514,BIN:5130562},su=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Po),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Po,r=new DataView(e,Po),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Mp.JSON){let l=new Uint8Array(e,Po+o,a);this.content=i.decode(l)}else if(c===Mp.BIN){let l=Po+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ru=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=lu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=lu[h]||h.toLowerCase();if(o[h]!==void 0){let d=i.accessors[e.attributes[h]],f=Ar[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},a,l,kt,d)})})}},ou=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},au=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},_c=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,_=1-m,v=p-d+u;for(let y=0;y!==a;y++){let C=o[x+y+a],b=o[x+y+c]*h,P=o[g+y+a],D=o[g+y]*h;r[y]=_*C+v*b+m*P+p*D}return r}},OM=new Ht,cu=class extends _c{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return OM.fromArray(r).normalize().toArray(r),r}},Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bp={9728:Ot,9729:fn,9984:ba,9985:Sh,9986:to,9987:Zi},Sp={33071:Rn,33648:ho,10497:Ei},zh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},as={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zM={CUBICSPLINE:void 0,LINEAR:Ts,STEP:lr},Bh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function BM(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new es({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),n.DefaultMaterial}function Cs(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function cs(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kM(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function HM(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function GM(n){let e,t=n.extensions&&n.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+kh(t.attributes):e=n.indices+":"+kh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+kh(n.targets[i]);return e}function kh(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function hu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function VM(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var WM=new Ce,uu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new UM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new Ja(this.options.manager):this.textureLoader=new nc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new So(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Cs(r,a,s),cs(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(ss.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=zh[s.type],a=Ar[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new rt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=zh[s.type],l=Ar[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(_);v||(x=new l(a,p*f,s.count*f/h),v=new xo(x,f/h),t.cache.add(_,v)),m=new _o(v,c,d%f/h,g)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),m=new rt(x,c,g);if(s.sparse!==void 0){let p=zh.SCALAR,_=Ar[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,C=new _(o[1],v,s.sparse.count*p),b=new l(o[2],y,s.sparse.count*c);a!==null&&(m=new rt(m.array.slice(),m.itemSize,m.normalized));for(let P=0,D=C.length;P<D;P++){let M=C[P];if(m.setX(M,b[P*c]),c>=2&&m.setY(M,b[P*c+1]),c>=3&&m.setZ(M,b[P*c+2]),c>=4&&m.setW(M,b[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=bp[d.magFilter]||fn,h.minFilter=bp[d.minFilter]||Zi,h.wrapS=Sp[d.wrapS]||Ei,h.wrapT=Sp[d.wrapT]||Ei,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new jt(x);m.needsUpdate=!0,d(m)}),t.load(ss.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||VM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new yo,Mn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new vo,Mn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return es}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},c=r.extensions||{},l=[];if(c[nt.KHR_MATERIALS_UNLIT]){let u=s[nt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ne(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],kt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,lt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=St);let h=r.alphaMode||Bh.OPAQUE;if(h===Bh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Bh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==et&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ee(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==et&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==et){let u=r.emissiveFactor;a.emissive=new ne().setRGB(u[0],u[1],u[2],kt)}return r.emissiveTexture!==void 0&&o!==et&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,lt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),cs(u,r),t.associations.set(u,{materials:e}),r.extensions&&Cs(s,u,r),u})}createUniqueName(e){let t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ep(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=GM(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Ep(new Mt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?BM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=o[f],p,_=l[f];if(m.mode===Wn.TRIANGLES||m.mode===Wn.TRIANGLE_STRIP||m.mode===Wn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new wi(x,_):new _e(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Wn.TRIANGLE_STRIP?p.geometry=Oh(p.geometry,oc):m.mode===Wn.TRIANGLE_FAN&&(p.geometry=Oh(p.geometry,wo));else if(m.mode===Wn.LINES)p=new Oa(x,_);else if(m.mode===Wn.LINE_STRIP)p=new xr(x,_);else if(m.mode===Wn.LINE_LOOP)p=new za(x,_);else if(m.mode===Wn.POINTS)p=new Ba(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&HM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),cs(p,r),m.extensions&&Cs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Cs(s,u[0],r),u[0];let d=new Dt;r.extensions&&Cs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Bt(Jf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new $i(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),cs(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Ce;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new gr(a,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let _=0,v=d.length;_<v;_++){let y=d[_],C=f[_],b=g[_],P=x[_],D=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let M=i._createAnimationTracks(y,C,b,P,D);if(M)for(let E=0;E<M.length;E++)p.push(M[E])}return new $a(r,void 0,p)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,WM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new ws:l.length>1?h=new Dt:l.length===1?h=l[0]:h=new Et,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),cs(h,r),r.extensions&&Cs(i,h,r),r.matrix!==void 0){let u=new Ce;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Dt;i.name&&(r.name=s.createUniqueName(i.name)),cs(r,i),i.extensions&&Cs(t,r,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Mn||d instanceof jt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];as[r.path]===as.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(as[r.path]){case as.weights:l=Ri;break;case as.rotation:l=ui;break;case as.position:case as.scale:l=Ci;break;default:switch(i.itemSize){case 1:l=Ri;break;case 2:case 3:default:l=Ci;break}break}let h=s.interpolation!==void 0?zM[s.interpolation]:Ts,u=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+as[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=hu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof ui?cu:_c;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function XM(n,e,t){let i=e.attributes,s=new yn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){let h=hu(Ar[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new R,c=new R;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=hu(Ar[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Cn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Ep(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=lu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return at.workingColorSpace!==kt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),cs(n,e),XM(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?kM(n,e.targets,t):n})}var Sn={};async function wp(n){let e;if(window.BG_NATURE_B64){let t=await(await fetch(window.BG_NATURE_B64)).text(),i=Uint8Array.from(atob(t.trim()),o=>o.charCodeAt(0)),s=window.createImageBitmap;window.createImageBitmap=void 0;let r=new Promise((o,a)=>new Lo().parse(i.buffer,"",o,a));window.createImageBitmap=s,e=await r,n&&n(1)}else e=await new Promise((t,i)=>new Lo().load("assets/nature.glb",t,s=>{n&&s.total&&n(s.loaded/s.total)},i));for(let t of e.scene.children){t.updateMatrixWorld(!0);let i=new Ce().copy(t.matrixWorld).invert(),s=[],r=new yn;t.traverse(o=>{if(!o.isMesh)return;let a=new Ce().multiplyMatrices(i,o.matrixWorld);s.push({geometry:o.geometry,map:o.material.map||null,matName:o.material.name||"",matrix:a});let c=o.geometry;c.computeBoundingBox(),r.union(c.boundingBox.clone().applyMatrix4(a))}),Sn[t.name]={parts:s,box:r,size:r.getSize(new R)}}return Sn}var qM={id:"glade",name:"\u0413\u0440\u0438\u0431\u043D\u0430\u044F \u043F\u043E\u043B\u044F\u043D\u0430",desc:"\u0413\u0440\u0438\u0431\u043D\u0438\u0446\u0430 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435, \u043A\u0443\u0441\u0442\u044B-\u0438\u0437\u0433\u043E\u0440\u043E\u0434\u0438 \u043F\u043E \u0431\u043E\u043A\u0430\u043C \u0438 \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u0442\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0437\u0430\u0441\u0430\u0434.",half:['""..,..r.r.r..,..""','""...............""',".....##.....##.....","...................","####...........####",".......T...T.......",'"""......R......"""','"""...#####....."""','"""............."""','.~~.....""....R....','.~~..R..""".....##.','........"""....##..',".##................",'"""...R..M..R..."""']},Ap={glade:YM(qM)};function YM(n){let e=n.half,t=e[0].length;for(let a of e)if(a.length!==t)throw new Error("map "+n.id+": row width "+a.length+" != "+t+" in \xAB"+a+"\xBB");let i=e[e.length-1];if(i!==[...i].reverse().join(""))throw new Error("map "+n.id+": middle row must be a palindrome");let s=a=>a==="r"?"b":a,r=e.slice(0,-1).reverse().map(a=>[...a].reverse().map(s).join("")),o=[...e,...r];return Object.assign({},n,{rows:o,W:t,H:o.length})}var X={map:null,W:0,H:0,rows:null,group:null,hx:0,hz:0,spawns:{0:[],1:[]},mine:{x:0,z:0},grassTiles:[],shared:{}},En={time:{value:0},push:{value:Array.from({length:10},()=>new R(0,0,0))},me:{value:new R(0,0,0)}},mn=n=>(n-(X.W-1)/2)*1.6,gn=n=>(n-(X.H-1)/2)*1.6,Ps=n=>Math.floor(n/1.6+X.W/2),Ls=n=>Math.floor(n/1.6+X.H/2);function Is(n,e){return n<0||e<0||n>=X.W||e>=X.H?"X":X.rows[e][n]}var yc=(n,e)=>Is(Ps(n),Ls(e)),ZM=new Set(["#","R","T","~","X"]),KM=new Set(["#","R","T","X"]),ls=n=>ZM.has(n),$M=n=>KM.has(n),JM=new Set(["#","X"]),fu=n=>JM.has(n),Lr=(n,e,t,i)=>ii(n,e,t,i,fu)<0,Cp=n=>n==="#"||n==="X"?Fo:n==="R"?1.15:n==="T"?.9:0,Mc=(n,e)=>yc(n,e)==='"';function Do(n,e){let t=Ps(n.x-e),i=Ps(n.x+e),s=Ls(n.z-e),r=Ls(n.z+e),o=!1;for(let a=s;a<=r;a++)for(let c=t;c<=i;c++){if(!ls(Is(c,a)))continue;let l=mn(c)-1.6/2,h=l+1.6,u=gn(a)-1.6/2,d=u+1.6,f=tt(n.x,l,h),g=tt(n.z,u,d),x=n.x-f,m=n.z-g,p=x*x+m*m;if(!(p>=e*e))if(o=!0,p>1e-8){let _=Math.sqrt(p),v=(e-_)/_;n.x+=x*v,n.z+=m*v}else{let _=[n.x-l,h-n.x,n.z-u,d-n.z],v=Math.min(..._);v===_[0]?n.x=l-e:v===_[1]?n.x=h+e:v===_[2]?n.z=u-e:n.z=d+e}}return o}function ii(n,e,t,i,s=$M){let r=t-n,o=i-e,a=Ps(n),c=Ls(e);if(s(Is(a,c)))return 0;let l=Ps(t),h=Ls(i),u=r>0?1:-1,d=o>0?1:-1,f=n/1.6+X.W/2,g=e/1.6+X.H/2,x=r/1.6,m=o/1.6,p=x!==0?Math.abs(1/x):1/0,_=m!==0?Math.abs(1/m):1/0,v=x!==0?(u>0?Math.floor(f)+1-f:f-Math.floor(f))*p:1/0,y=m!==0?(d>0?Math.floor(g)+1-g:g-Math.floor(g))*_:1/0;for(let C=0;C<200;C++){if(a===l&&c===h)return-1;let b;if(v<y?(b=v,v+=p,a+=u):(b=y,y+=_,c+=d),b>1)return-1;if(s(Is(a,c)))return b}return-1}var pu=(n,e,t,i)=>ii(n,e,t,i)<0;function Pp(n,e,t,i){let s=X.W,r=X.H,o=tt(Ps(n),0,s-1),a=tt(Ls(e),0,r-1),c=tt(Ps(t),0,s-1),l=tt(Ls(i),0,r-1);if(ls(Is(c,l))){let b=jM(c,l);if(!b)return null;c=b[0],l=b[1]}let h=s*r,u=new Float32Array(h).fill(1e9),d=new Int32Array(h).fill(-1),f=new Uint8Array(h),g=[a*s+o];u[g[0]]=0;let x=b=>{let P=Math.abs(b%s-c),D=Math.abs((b/s|0)-l);return Math.max(P,D)+.414*Math.min(P,D)},m=l*s+c;for(;g.length;){let b=0,P=1e9;for(let N=0;N<g.length;N++){let V=u[g[N]]+x(g[N]);V<P&&(P=V,b=N)}let D=g[b];if(g[b]=g[g.length-1],g.pop(),D===m)break;f[D]=1;let M=D%s,E=D/s|0;for(let N=-1;N<=1;N++)for(let V=-1;V<=1;V++){if(!V&&!N)continue;let z=M+V,L=E+N;if(z<0||L<0||z>=s||L>=r||ls(X.rows[L][z])||V&&N&&(ls(X.rows[E][z])||ls(X.rows[L][M])))continue;let U=L*s+z;if(f[U])continue;let q=u[D]+(V&&N?1.414:1)+(X.rows[L][z]==='"'?.15:0);q<u[U]&&(u[U]>=1e9&&g.push(U),u[U]=q,d[U]=D)}}if(d[m]<0&&m!==a*s+o)return null;let p=[];for(let b=m;b>=0;b=d[b])p.push(b);p.reverse();let _=p.map(b=>({x:mn(b%s),z:gn(b/s|0)}));_[_.length-1]={x:tt(t,mn(c)-1.6*.45,mn(c)+1.6*.45),z:tt(i,gn(l)-1.6*.45,gn(l)+1.6*.45)};let v=[],y={x:n,z:e},C=0;for(;C<_.length;){let b=_.length-1;for(;b>C&&!mu(y.x,y.z,_[b].x,_[b].z);)b--;v.push(_[b]),y=_[b],C=b+1}return v}function mu(n,e,t,i){let s=t-n,r=i-e,o=Math.hypot(s,r)||1,a=-r/o*.42,c=s/o*.42;return ii(n+a,e+c,t+a,i+c,ls)<0&&ii(n-a,e-c,t-a,i-c,ls)<0}function jM(n,e){for(let t=1;t<6;t++)for(let i=-t;i<=t;i++)for(let s=-t;s<=t;s++)if(Math.max(Math.abs(s),Math.abs(i))===t&&!ls(Is(n+s,e+i)))return[n+s,e+i];return null}function Ds(n,e,t,i){return n.onBeforeCompile=s=>{s.uniforms.uTime=En.time,s.uniforms.uPush=En.push,s.uniforms.uMe=En.me,i&&(s.fragmentShader=`uniform vec3 uMe;
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
      gl_Position = projectionMatrix * mvPosition;`)},n.customProgramCacheKey=()=>"wind"+e+t+i,n}function QM(){return wr(256,256,(n,e,t)=>{n.fillStyle="#3E7F2C",n.fillRect(0,0,e,t);let i=["#2F6A22","#4C9634","#5AAA3A","#3A7A28","#6CBB45","#2A5C1E"];for(let s=0;s<900;s++){let r=F(0,e),o=F(0,t),a=F(5,11),c=F(0,Le);n.fillStyle=Ro(i);for(let l of[-e,0,e])for(let h of[-t,0,t])n.beginPath(),n.ellipse(r+l,o+h,a,a*.55,c,0,Le),n.fill()}n.globalAlpha=.25,n.fillStyle="#B9E87A";for(let s=0;s<160;s++){let r=F(0,e),o=F(0,t);n.beginPath(),n.ellipse(r,o,3,1.6,F(0,Le),0,Le),n.fill()}},{repeat:!0})}function eb(n,e){return n.onBeforeCompile=t=>{t.vertexShader=`varying vec3 vWP; varying vec3 vWN;
`+t.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vWP = (modelMatrix * vec4(transformed, 1.0)).xyz; vWN = normalize(mat3(modelMatrix) * objectNormal);`),t.fragmentShader=`varying vec3 vWP; varying vec3 vWN;
`+t.fragmentShader.replace("#include <map_fragment>",`
      ${ni?`vec3 an = abs(vWN);   // phones: one texture read along the main axis instead of three
      vec2 tuv = an.y > an.x && an.y > an.z ? vWP.xz : an.x > an.z ? vWP.zy : vWP.xy;
      diffuseColor *= texture2D(map, tuv * ${e.toFixed(3)});`:`vec3 bw = pow(abs(vWN), vec3(4.0)); bw /= max(bw.x + bw.y + bw.z, 1e-4);
      vec4 tx = texture2D(map, vWP.zy * ${e.toFixed(3)}), ty = texture2D(map, vWP.xz * ${e.toFixed(3)}), tz = texture2D(map, vWP.xy * ${e.toFixed(3)});
      diffuseColor *= tx * bw.x + ty * bw.y + tz * bw.z;`}`)},n.customProgramCacheKey=()=>"tri"+e,n}function tb(n,e,t,i){let o=new Ti(n,e,t,Math.ceil(n*2.2),Math.ceil(e*2.2),Math.ceil(t*2.2));o.deleteAttribute("normal"),o.deleteAttribute("uv"),o=yp(o);let a=o.attributes.position,c=n/2-.32,l=e/2-.32,h=t/2-.32,u=new R,d=new R,f=new Float32Array(a.count*3);for(let g=0;g<a.count;g++){u.fromBufferAttribute(a,g);let x=tt(u.x,-c,c),m=tt(u.y,-l,l),p=tt(u.z,-h,h);d.set(u.x-x,u.y-m,u.z-p).normalize();let _=.07*(Math.sin(u.x*4.1+i)*Math.sin(u.z*3.7-i)+Math.sin(u.y*5.3+u.x*2.1+i*2))+(u.y>l-.01?.05*Math.sin(u.x*2.3+u.z*2.9+i):0);u.set(x,m,p).addScaledVector(d,.32+_),a.setXYZ(g,u.x,u.y+e/2,u.z);let v=tt((u.y+e/2)/e,0,1),y=.55+.45*Math.pow(v,.7)+F(-.05,.05);f[g*3]=y*.95,f[g*3+1]=y,f[g*3+2]=y*.9}return o.setAttribute("color",new rt(f,3)),o.computeVertexNormals(),o}function nb(){let n=[[0,0],[.78,0],[.62,.12],[.55,.3],[.53,.7],[.56,.84],[.5,.86]].map(s=>new ee(s[0],s[1])),e=new Ai(n,18),t=new rn(.5,18);t.rotateX(-Math.PI/2),t.translate(0,.86,0);let i=e.attributes.position;for(let s=0;s<i.count;s++){let r=i.getX(s),o=i.getZ(s),a=Math.atan2(o,r),c=i.getY(s),l=1+.07*Math.sin(a*7)+.04*Math.sin(a*13+c*6);i.setX(s,r*l),i.setZ(s,o*l)}return e.computeVertexNormals(),{side:e,top:t}}var Cr=new Ce,Pr=new Ht,Io=new R,gu=new R,xu=new R(0,1,0);function Xn(n,e,t,i={}){let s=Sn[n];if(!s||!e.length)return[];let r=[];for(let o of s.parts){let a=t(o);if(!a)continue;let c=new Ji(o.geometry,a,e.length);e.forEach((l,h)=>{Pr.setFromAxisAngle(xu,l.rot||0),Io.setScalar(l.s||1),l.sy&&(Io.y*=l.sy),Cr.compose(gu.set(l.x,l.y||0,l.z),Pr,Io).multiply(o.matrix),c.setMatrixAt(h,Cr),l.color&&c.setColorAt&&c.setColorAt(h,l.color)}),c.castShadow=!!i.cast,c.receiveShadow=i.receive!==!1,c.computeBoundingSphere(),X.group.add(c),r.push(c)}return r}function Lp(n){X.group&&(ye.remove(X.group),X.group.traverse(t=>{t.geometry&&!t.userData.shared&&t.geometry.dispose()}));let e=Ap[n];Object.assign(X,{map:e,W:e.W,H:e.H,rows:e.rows,hx:e.W*1.6/2,hz:e.H*1.6/2,spawns:{0:[],1:[]},grassTiles:[]}),X.group=new Dt,ye.add(X.group),xp(X.hx+2,X.hz+2);for(let t=0;t<X.H;t++)for(let i=0;i<X.W;i++){let s=X.rows[t][i];s==="b"&&X.spawns[0].push({x:mn(i),z:gn(t)-3.2}),s==="r"&&X.spawns[1].push({x:mn(i),z:gn(t)+3.2}),s==="M"&&(X.mine={x:mn(i),z:gn(t)}),s==='"'&&X.grassTiles.push([i,t])}return hc(7331,()=>{ib(),rb(),ob(),ab(),cb(),lb(),hb()}),X}function ib(){let e=X.W*40,t=X.H*40,i=wr(e,t,d=>{for(let g=0;g<X.H;g++)for(let x=0;x<X.W;x++){let m=(g+x)%2===0;d.fillStyle=m?"#7CC24E":"#71B847",d.fillRect(x*40,g*40,40,40)}let f=(g,x,m)=>{let p=d.createRadialGradient(g,x,m*.2,g,x,m);p.addColorStop(0,"rgba(201,164,106,0.95)"),p.addColorStop(.7,"rgba(190,156,98,0.6)"),p.addColorStop(1,"rgba(190,156,98,0)"),d.fillStyle=p,d.beginPath(),d.arc(g,x,m,0,Le),d.fill()};for(let g=0;g<X.H;g++)for(let x=0;x<X.W;x++){let m=X.rows[g][x],p=(x+.5)*40,_=(g+.5)*40;m==="M"&&f(p,_,40*2.6),(m==="b"||m==="r")&&f(p,_,40*1.1)}for(let g=0;g<e*t/60;g++){let x=F(0,e),m=F(0,t);d.strokeStyle=Ro(["rgba(70,140,40,.5)","rgba(150,215,90,.45)","rgba(55,115,35,.45)","rgba(180,230,120,.3)"]),d.lineWidth=F(1,2.2),d.beginPath(),d.moveTo(x,m),d.lineTo(x+F(-2,2),m-F(3,7)),d.stroke()}d.filter="blur(6px)";for(let g=0;g<X.H;g++)for(let x=0;x<X.W;x++){let m=X.rows[g][x];m==="#"?(d.fillStyle="rgba(30,60,20,.55)",d.fillRect(x*40-6,g*40-6,52,52)):m==="R"||m==="T"?(d.fillStyle="rgba(30,60,20,.35)",d.beginPath(),d.arc((x+.5)*40,(g+.5)*40,40*.65,0,Le),d.fill()):m==='"'?(d.fillStyle="rgba(40,90,25,.35)",d.fillRect(x*40,g*40,40,40)):m==="~"&&(d.fillStyle="#4B5E2E",d.fillRect(x*40-4,g*40-4,48,48))}d.filter="none";for(let g=0;g<X.H;g++)for(let x=0;x<X.W;x++){let m=X.rows[g][x];m!=="b"&&m!=="r"||(d.strokeStyle=m==="b"?"rgba(80,190,255,.85)":"rgba(255,90,90,.85)",d.lineWidth=4,d.beginPath(),d.arc((x+.5)*40,(g+.5)*40,40*.38,0,Le),d.stroke())}});i.anisotropy=8;let s=.8,r=Math.round(X.W*1.6/s),o=Math.round(X.H*1.6/s),a=new pn(X.W*1.6,X.H*1.6,r,o);a.rotateX(-Math.PI/2);let c=a.attributes.position;for(let d=0;d<c.count;d++){let f=c.getX(d),g=c.getZ(d),x=0;for(let[m,p]of[[0,0],[.35,0],[-.35,0],[0,.35],[0,-.35]])yc(f+m,g+p)==="~"&&(x+=.2);c.setY(d,-x*.7)}a.computeVertexNormals();let l=new _e(a,ht({map:i,roughness:.95}));l.receiveShadow=!0,X.group.add(l);let h=wr(256,256,(d,f,g)=>{d.fillStyle="#5E9E3A",d.fillRect(0,0,f,g);for(let x=0;x<1400;x++){let m=F(0,f),p=F(0,g);d.strokeStyle=Ro(["rgba(40,100,30,.5)","rgba(120,190,70,.45)","rgba(70,130,40,.5)"]),d.lineWidth=F(1,2),d.beginPath(),d.moveTo(m,p),d.lineTo(m+F(-2,2),p-F(3,8)),d.stroke()}},{repeat:!0});h.repeat.set(40,40);let u=new _e(new pn(260,260),ht({map:h,roughness:1}));u.rotation.x=-Math.PI/2,u.position.y=-.02,u.receiveShadow=!0,X.group.add(u)}function sb(){return X.shared.hedge||(X.shared.hedge=eb(ht({map:QM(),vertexColors:!0,roughness:.85,color:"#E8FFD8"}),.55)),X.shared.hedge}var Fo=2.6;function rb(){let n=[],e=new Set,t=X.W,i=X.H,s=(h,u)=>Is(h,u)==="#";for(let h=0;h<i;h++)for(let u=0;u<t;u++){if(!s(u,h)||e.has(h*t+u))continue;let d=u;for(;s(d+1,h);)d++;if(d>u){for(let f=u;f<=d;f++)e.add(h*t+f);Rr(n,mn(u)-1.6/2,gn(h)-1.6/2,(d-u+1)*1.6,1.6)}}for(let h=0;h<t;h++)for(let u=0;u<i;u++){if(!s(h,u)||e.has(u*t+h))continue;let d=u;for(;s(h,d+1)&&!e.has((d+1)*t+h);)d++;for(let f=u;f<=d;f++)e.add(f*t+h);Rr(n,mn(h)-1.6/2,gn(u)-1.6/2,1.6,(d-u+1)*1.6)}let r=X.hx,o=X.hz,a=1.3;Rr(n,-r-a,-o-a,X.W*1.6+2*a,a,3),Rr(n,-r-a,o,X.W*1.6+2*a,a,3),Rr(n,-r-a,-o,a,X.H*1.6,3),Rr(n,r,-o,a,X.H*1.6,3);let c=new _e(Li(n),sb());c.castShadow=c.receiveShadow=!0,X.group.add(c),n.forEach(h=>h.dispose());let l=[];for(let h=0;h<i;h++)for(let u=0;u<t;u++)s(u,h)&&ue.level==="high"&&F()<.3&&l.push({x:mn(u)+F(-.4,.4),y:Fo-.3,z:gn(h)+F(-.4,.4),rot:F(0,Le),s:F(.32,.42)});Xn("Bush_Common",l,()=>Ip("#4FA23A"),{cast:!1})}function Rr(n,e,t,i,s,r=Fo){let o=tb(i-.06,r,s-.06,F(0,100));o.translate(e+i/2,0,t+s/2),n.push(o)}function Ip(n){let e="leaf"+n;if(!X.shared[e]){let t=Sn.Bush_Common.parts[0].map;X.shared[e]=Ds(ht({map:t,color:n,alphaTest:.45,side:St,roughness:.8}),1.6,.05,!1)}return X.shared[e]}function ob(){let n=[[],[],[]],e=[];for(let c=0;c<X.H;c++)for(let l=0;l<X.W;l++){let h=X.rows[c][l],u=mn(l),d=gn(c);if(h==="R"){let f=(c*7+l*3)%3;n[f].push({x:u,z:d,y:-.05,rot:F(0,Le),s:.56})}h==="T"&&e.push({x:u,z:d,rot:F(0,Le),s:F(.95,1.05)})}let t=ht({map:Sn.Rock_Medium_1.parts[0].map,roughness:.9,color:"#D8E0D0"});n.forEach((c,l)=>Xn("Rock_Medium_"+(l+1),c,()=>t,{cast:!0}));let{side:i,top:s}=nb(),r=wr(128,128,(c,l,h)=>{c.fillStyle="#6B4A2E",c.fillRect(0,0,l,h);for(let u=0;u<40;u++){let d=F(0,l);c.strokeStyle=Ro(["#4E3420","#7E5A38","#5A3D25"]),c.lineWidth=F(2,6),c.beginPath(),c.moveTo(d,0),c.bezierCurveTo(d+F(-8,8),h*.3,d+F(-8,8),h*.7,d+F(-4,4),h),c.stroke()}},{repeat:!0});r.repeat.set(3,1);let o=wr(128,128,(c,l,h)=>{c.fillStyle="#E2B97A",c.fillRect(0,0,l,h);for(let u=4;u<64;u+=F(4,7))c.strokeStyle=`rgba(150,95,45,${F(.35,.7)})`,c.lineWidth=F(1,2.5),c.beginPath(),c.arc(64+F(-1,1),64+F(-1,1),u,0,Le),c.stroke();c.strokeStyle="#6B4A2E",c.lineWidth=8,c.beginPath(),c.arc(64,64,62,0,Le),c.stroke()}),a=(c,l)=>{let h=new Ji(c,l,e.length);e.forEach((u,d)=>{Pr.setFromAxisAngle(xu,u.rot),Cr.compose(gu.set(u.x,0,u.z),Pr,Io.setScalar(u.s)),h.setMatrixAt(d,Cr)}),h.castShadow=h.receiveShadow=!0,X.group.add(h)};e.length&&(a(i,ht({map:r,roughness:.9})),a(s,ht({map:o,roughness:.8})))}var Rp=[];function du(n){let e=[],t=[],i=[],s=[],r=new ne,o=new ne;for(let c=0;c<n;c++){let l=F(-.82,.82),h=F(-.82,.82),u=F(1.15,1.65),d=F(.08,.13),f=F(0,Le),g=F(.15,.45),x=F(0,Le),m=Math.cos(f),p=Math.sin(f);r.setHSL(F(.27,.31),F(.6,.75),F(.1,.15)),o.setHSL(F(.22,.28),F(.6,.8),F(.3,.4));let _=e.length/3,v=[[0,1],[.45,.8],[.8,.45],[1,0]];for(let[y,C]of v){let b=l+Math.cos(x)*g*y*y,P=h+Math.sin(x)*g*y*y,D=u*y*(1-g*g*.3*y),M=y===1?0:1;for(let E of M?[-1,1]:[0]){e.push(b+m*d*C*E*.5,D,P+p*d*C*E*.5);let N=r.clone().lerp(o,Math.pow(y,.8));t.push(N.r,N.g,N.b),i.push(-p*.7,.5,m*.7)}}s.push(_,_+1,_+3,_,_+3,_+2,_+2,_+3,_+5,_+2,_+5,_+4,_+4,_+5,_+6)}let a=new Mt;return a.setAttribute("position",new Oe(e,3)),a.setAttribute("normal",new Oe(i,3)),a.setAttribute("color",new Oe(t,3)),a.setIndex(s),a}function ab(){let n=ue.level==="high"?70:46,e=[du(n),du(n),du(n)],t=Ds(ht({vertexColors:!0,roughness:1,side:St,envMapIntensity:.5}),1.6,.12,!0);Rp=[],e.forEach((i,s)=>{let r=X.grassTiles.filter((a,c)=>c%3===s);if(!r.length)return;let o=new Ji(i,t,r.length);r.forEach(([a,c],l)=>{Pr.setFromAxisAngle(xu,Math.floor(F(0,4))*Math.PI/2),Cr.compose(gu.set(mn(a),0,gn(c)),Pr,Io.set(1,F(.92,1.08),1)),o.setMatrixAt(l,Cr)}),o.receiveShadow=!0,o.computeBoundingSphere(),X.group.add(o),Rp.push(o)})}function cb(){let n=[];for(let r=0;r<X.H;r++)for(let o=0;o<X.W;o++)X.rows[r][o]==="~"&&n.push([o,r]);if(!n.length)return;let e=n.map(([r,o])=>{let a=new pn(1.6+.5,1.6+.5);return a.rotateX(-Math.PI/2),a.translate(mn(r),-.16,gn(o)),a}),t=ht({color:"#4FB5C8",roughness:.12,metalness:.1,transparent:!0,opacity:.82});t.onBeforeCompile=r=>{r.uniforms.uTime=En.time,r.vertexShader=`varying vec3 vWP2;
`+r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vWP2 = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=`uniform float uTime; varying vec3 vWP2;
`+r.fragmentShader.replace("#include <map_fragment>",`
      float rip = sin(vWP2.x * 5.0 + uTime * 1.6) * sin(vWP2.z * 4.3 - uTime * 1.2) + sin((vWP2.x + vWP2.z) * 7.0 + uTime * 2.3) * 0.5;
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.85, 1.0, 1.0), smoothstep(0.9, 1.4, rip) * 0.5);`)};let i=new _e(Li(e),t);i.receiveShadow=!0,X.group.add(i);let s=n.filter(()=>F()<.7).map(([r,o])=>({x:mn(r)+F(-.4,.4),y:-.14,z:gn(o)+F(-.4,.4),rot:F(0,Le),s:F(.5,.7)}));Xn("Plant_1",s.map(r=>Object.assign(r,{sy:.25})),()=>Ip("#6DBB4A"))}function lb(){let n=[],e=[],t=[],i=[];for(let o=0;o<X.H;o++)for(let a=0;a<X.W;a++){let c=X.rows[o][a],l=mn(a),h=gn(o);c===","&&n.push({x:l+F(-.3,.3),z:h+F(-.3,.3),rot:F(0,Le),s:F(.32,.4)}),c==="."&&F()<.22&&e.push({x:l+F(-.6,.6),z:h+F(-.6,.6),rot:F(0,Le),s:F(.3,.42),color:new ne().setHSL(F(.23,.29),.6,F(.42,.5))}),c==="."&&F()<.06&&t.push({x:l+F(-.6,.6),z:h+F(-.6,.6),rot:F(0,Le),s:F(.4,.7)}),c==="."&&F()<.05&&i.push({x:l+F(-.6,.6),z:h+F(-.6,.6),rot:F(0,Le),s:F(.35,.5)})}let s=Ds(ht({map:Sn.Grass_Common_Short.parts[0].map,roughness:.9,side:St,color:"#A8E07A"}),1.3,.06,!0);Xn("Grass_Common_Short",e,()=>s),Xn("Flower_3_Group",n,o=>o.matName==="Flowers"?Dp():vc("#5DB043"));let r=ht({map:Sn.Pebble_Round_1.parts[0].map,roughness:.9});Xn("Pebble_Round_1",t,()=>r),Xn("Clover_1",i,()=>vc("#5AAE42"))}function Dp(){return X.shared.fl||(X.shared.fl=Ds(ht({map:Sn.Flower_3_Group.parts.find(n=>n.matName==="Flowers").map,alphaTest:.4,side:St,roughness:.7}),2,.05,!0))}function vc(n){let e="leaves"+n;if(!X.shared[e]){let t=Sn.Fern_1.parts[0];X.shared[e]=Ds(ht({map:t.map,color:n,alphaTest:.4,side:St,roughness:.8}),2,.05,!0)}return X.shared[e]}function hb(){let n={CommonTree_3:[],Pine_1:[]},e=[],t=[],i=[],s=[],r=ue.level==="high"&&!wt?30:18,o=(u,d,f)=>Math.abs(u)>X.hx+f||Math.abs(d)>X.hz+f;for(let u=0,d=0;u<r&&d<2e3;d++){let f=F(0,Le),g=F(0,1),x=Math.sin(f)*(X.hx+9+g*16),m=Math.cos(f)*(X.hz+9+g*14);if(!o(x,m,8.5))continue;let p=F()<.55?"CommonTree_3":"Pine_1";n[p].push({x,z:m,rot:F(0,Le),s:F(.85,1.25)*(p==="Pine_1"?1.1:1),color:new ne().setHSL(F(.22,.32),F(.45,.65),F(.36,.48))}),u++}for(let u=0,d=ue.level==="high"&&!wt?56:34;u<d;u++){let f=Math.floor(F(0,4)),g=F(-1,1),x=F(1.8,7),m=f<2?g*(X.hx+4):(f===2?-1:1)*(X.hx+x),p=f<2?(f===0?-1:1)*(X.hz+x):g*(X.hz+4),_=F();_<.4?e.push({x:m,z:p,rot:F(0,Le),s:F(.7,1.2),color:new ne().setHSL(F(.22,.3),.55,F(.38,.48))}):_<.65?t.push({x:m,z:p,rot:F(0,Le),s:F(.18,.26)}):_<.78?i.push({x:m,z:p,rot:F(0,Le),s:F(.9,1.6)}):s.push({x:m,z:p,rot:F(0,Le),s:F(.5,.7)})}let a=ht({map:Sn.CommonTree_3.parts.find(u=>/Bark/.test(u.matName)).map,roughness:.9}),c=u=>Ds(ht({map:Sn[u].parts.find(d=>/Lea/.test(d.matName)).map,alphaTest:.45,side:St,roughness:.8,color:"#FFFFFF"}),8,.12,!1),l=!1;for(let u in n){let d=c(u);Xn(u,n[u],f=>/Bark/.test(f.matName)?a:d,{cast:l})}Xn("Bush_Common",e,()=>Ds(ht({map:Sn.Bush_Common.parts[0].map,alphaTest:.45,side:St,roughness:.8}),1.6,.05,!1)),Xn("Fern_1",t,()=>vc("#4E9E38"));let h=ht({map:Sn.Mushroom_Common.parts[0].map,roughness:.7});Xn("Mushroom_Common",i,()=>h),Xn("Flower_3_Group",s,u=>u.matName==="Flowers"?Dp():vc("#5DB043"))}var No={"\u0413\u0440\u0438\u0431\u044B \u043F\u0440\u043E\u0441\u044B\u043F\u0430\u044E\u0442\u0441\u044F\u2026":"Mushrooms are waking up\u2026","\u0413\u0440\u0438\u0431\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0430":"Mushroom Arena","\u0412\u044B\u0431\u0435\u0440\u0438 \u0433\u0435\u0440\u043E\u044F":"Pick a hero",\u0421\u043F\u043E\u0440\u044B:"Spore Rush","3 \u043D\u0430 3 \xB7 \u0441\u043E\u0431\u0435\u0440\u0438 10 \u0441\u043F\u043E\u0440 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438 \u0438\u0445 15 \u0441\u0435\u043A\u0443\u043D\u0434":"3 vs 3 \xB7 collect 10 spores and hold them for 15 seconds",\u0411\u043E\u0442\u044B:"Bots",\u041B\u0451\u0433\u043A\u0438\u0435:"Easy",\u041E\u0431\u044B\u0447\u043D\u044B\u0435:"Normal",\u0421\u043B\u043E\u0436\u043D\u044B\u0435:"Hard","\u0412 \u0431\u043E\u0439!":"Fight!",\u0413\u0440\u0430\u0444\u0438\u043A\u0430:"Graphics",\u0411\u044B\u0441\u0442\u0440\u0430\u044F:"Fast",\u041A\u0440\u0430\u0441\u0438\u0432\u0430\u044F:"Pretty",\u0417\u0432\u0443\u043A:"Sound",\u042D\u0444\u0444\u0435\u043A\u0442\u044B:"Effects",\u041C\u0443\u0437\u044B\u043A\u0430:"Music",\u041F\u0430\u0443\u0437\u0430:"Pause",\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C:"Resume","\u0412\u044B\u0439\u0442\u0438 \u0432 \u043C\u0435\u043D\u044E":"Quit to menu",\u0410\u0442\u0430\u043A\u0430:"Attack","\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0431\u0435\u0433, \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043A\u0430\u043C\u0435\u0440\u044B. \u041A\u043D\u043E\u043F\u043A\u0430 \u0430\u0442\u0430\u043A\u0438: \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u2014 \u0430\u0432\u0442\u043E\u043F\u0440\u0438\u0446\u0435\u043B, \u0441 \u043F\u0440\u043E\u0442\u044F\u0436\u043A\u043E\u0439 \u2014 \u0446\u0435\u043B\u0438\u0448\u044C\u0441\u044F \u0441\u0430\u043C. \u0417\u0432\u0435\u0437\u0434\u0430 \u2014 \u0441\u0443\u043F\u0435\u0440.":"Left thumb to run, right thumb to turn the camera. Attack button: a quick tap auto-aims, hold and drag to aim yourself. The star is your super.","WASD \u2014 \u0431\u0435\u0433, \u043C\u044B\u0448\u044C \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \u0438 \u043F\u0440\u0438\u0446\u0435\u043B, \u041B\u041A\u041C \u2014 \u0430\u0442\u0430\u043A\u0430, \u041F\u041A\u041C \u0438\u043B\u0438 E \u2014 \u0441\u0443\u043F\u0435\u0440, Esc \u2014 \u043F\u0430\u0443\u0437\u0430.":"WASD to run, mouse to look and aim, LMB to attack, RMB or E for the super, Esc to pause.",\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435:"Health",\u0423\u0440\u043E\u043D:"Damage",\u0414\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C:"Range",\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C:"Speed",\u043C:"m",\u0428\u043B\u044F\u043F\u043D\u0438\u043A:"Capper",\u0411\u0430\u0431\u0430\u0445:"Kaboom",\u0416\u0430\u043B\u043A\u0430:"Stinga",\u043C\u0443\u0445\u043E\u043C\u043E\u0440:"fly agaric","\u0436\u0443\u043A-\u0431\u043E\u043C\u0431\u0430\u0440\u0434\u0438\u0440":"bombardier beetle",\u043E\u0441\u0430:"wasp",\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A:"Shotgun",\u041C\u0435\u0442\u0430\u0442\u0435\u043B\u044C:"Thrower",\u0421\u043D\u0430\u0439\u043F\u0435\u0440:"Sniper","\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A \u0431\u044C\u0451\u0442 \u0432\u0435\u0435\u0440\u043E\u043C: \u0432\u0431\u043B\u0438\u0437\u0438 \u0440\u0430\u0437\u043D\u043E\u0441\u0438\u0442 \u043B\u044E\u0431\u043E\u0433\u043E.":"A spore shotgun that fires in a fan: up close it flattens anyone.","\u041A\u0438\u0434\u0430\u0435\u0442 \u0431\u043E\u043C\u0431\u044B \u043D\u0430\u0432\u0435\u0441\u043E\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B. \u0412\u0437\u0440\u044B\u0432 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0433\u043E\u0440\u044F\u0449\u0443\u044E \u043B\u0443\u0436\u0443.":"Lobs bombs over walls. Each blast leaves a burning puddle.","\u0414\u0430\u043B\u044C\u043D\u043E\u0431\u043E\u0439\u043D\u043E\u0435 \u0436\u0430\u043B\u043E: \u0447\u0435\u043C \u0434\u0430\u043B\u044C\u0448\u0435 \u0446\u0435\u043B\u044C, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u043D\u0435\u0435.":"A long-range stinger: the further the target, the harder it hits.","\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0432\u0435\u0435\u0440":"Spore Fan","\u0413\u0440\u0438\u0431\u043D\u043E\u0439 \u0437\u0430\u043B\u043F":"Mushroom Volley","\u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0437\u0430\u043B\u043F \u043E\u0442\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u0432\u0440\u0430\u0433\u043E\u0432":"a wide volley that knocks enemies back","\u0416\u0443\u0447\u0438\u043D\u0430\u044F \u0431\u043E\u043C\u0431\u0430":"Beetle Bomb","\u041A\u043E\u0432\u0440\u043E\u0432\u0430\u044F \u0431\u043E\u043C\u0431\u0451\u0436\u043A\u0430":"Carpet Bombing","\u043F\u044F\u0442\u044C \u0431\u043E\u043C\u0431 \u043B\u043E\u0436\u0430\u0442\u0441\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u043E\u0439":"five bombs land in a line",\u0416\u0430\u043B\u043E:"Stinger","\u041F\u0440\u043E\u043D\u0437\u0430\u044E\u0449\u0438\u0439 \u043B\u0443\u0447":"Piercing Beam","\u043B\u0443\u0447 \u043F\u0440\u043E\u0448\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0435\u043D\u044B \u0438 \u0432\u0441\u0435\u0445 \u043D\u0430 \u043F\u0443\u0442\u0438":"a beam that goes through walls and everyone in its way","\u0441\u043F\u043E\u0440 \u0432\u0435\u0435\u0440\u043E\u043C":"spores in a fan","\u0431\u043E\u043C\u0431\u0430 \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B, \u0433\u043E\u0440\u044F\u0449\u0430\u044F \u043B\u0443\u0436\u0430":"a bomb over walls, a burning puddle","\u0434\u0430\u043B\u044C\u043D\u0438\u0439 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u0443\u0440\u043E\u043D \u0440\u0430\u0441\u0442\u0451\u0442 \u0441 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C":"a long shot, damage grows with distance",\u0421\u0443\u043F\u0435\u0440:"Super","\u041F\u041A\u041C \xB7 E":"RMB \xB7 E","\u0412\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437":"Respawn in","\u0429\u0451\u043B\u043A\u043D\u0438 \u043F\u043E \u043F\u043E\u043B\u044E, \u0447\u0442\u043E\u0431\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043C\u044B\u0448\u044C\u044E":"Click the field to aim with the mouse","\u0421\u043E\u0431\u0435\u0440\u0438 10 \u0441\u043F\u043E\u0440 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438 \u0438\u0445 15 \u0441\u0435\u043A\u0443\u043D\u0434":"Collect 10 spores and hold them for 15 seconds",\u0422\u044B:"You","\u0421\u0440\u0435\u0437\u0430\u043B!":"Knocked out!","\u0422\u0435\u0431\u044F \u0441\u0440\u0435\u0437\u0430\u043B\u0438":"You got knocked out","\u0421\u043F\u043E\u0440\u044B \u0443 \u043D\u0430\u0441!":"We have the spores!","\u0414\u0435\u0440\u0436\u0438\u0442\u0435\u0441\u044C 15 \u0441\u0435\u043A\u0443\u043D\u0434":"Hold on for 15 seconds","\u0412\u0440\u0430\u0433 \u043D\u0430\u0431\u0440\u0430\u043B \u0441\u043F\u043E\u0440\u044B!":"The enemy has the spores!","\u041E\u0442\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0445!":"Take them back!","\u041E\u0442\u0441\u0447\u0451\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D":"Countdown reset","\u0414\u0435\u0440\u0436\u0438\u043C \u0441\u043F\u043E\u0440\u044B!":"Hold the spores!","\u0412\u0440\u0430\u0433 \u0443\u043D\u043E\u0441\u0438\u0442 \u0441\u043F\u043E\u0440\u044B!":"The enemy is running off with the spores!","\u041F\u043E\u0431\u0435\u0434\u0430!":"Victory!",\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435:"Defeat",\u041D\u0438\u0447\u044C\u044F:"Draw","\u0415\u0449\u0451 \u0431\u043E\u0439":"Play again","\u0412 \u043C\u0435\u043D\u044E":"Menu","\u0422\u0432\u043E\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0430 \u0441\u043F\u043E\u0440\u044B.":"Your team held the spores.","\u0412\u0440\u0430\u0433\u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0438 \u0441\u043F\u043E\u0440\u044B.":"The enemies held the spores.","\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E: ":"Time is up: ",\u0413\u0440\u0443\u0437\u0434\u044C:"Milkcap",\u041E\u043F\u0451\u043D\u043E\u043A:"Honeycap",\u0421\u043C\u043E\u0440\u0447\u043E\u043A:"Morel",\u0420\u044B\u0436\u0438\u043A:"Saffron",\u041C\u0430\u0441\u043B\u0451\u043D\u043E\u043A:"Butterball",\u0412\u043E\u043B\u043D\u0443\u0448\u043A\u0430:"Woolly",\u0421\u0442\u0440\u043E\u0447\u043E\u043A:"Brainy",\u0411\u0435\u043B\u044F\u043D\u043A\u0430:"Whitey",\u0415\u0436\u043E\u0432\u0438\u043A:"Hedgehog",\u0414\u0443\u0431\u043E\u0432\u0438\u043A:"Oakcap",\u0412\u0435\u0448\u0435\u043D\u043A\u0430:"Oyster",\u041A\u043E\u0440\u043E\u0435\u0434:"Bark Beetle",\u0428\u0435\u0440\u0448\u0435\u043D\u044C:"Hornet",\u0416\u0443\u0436\u0435\u043B\u0438\u0446\u0430:"Ground Beetle",\u0429\u0435\u043B\u043A\u0443\u043D:"Clicker",\u0421\u0432\u0435\u0442\u043B\u044F\u0447\u043E\u043A:"Firefly",\u041C\u0435\u0434\u0432\u0435\u0434\u043A\u0430:"Mole Cricket",\u0414\u043E\u043B\u0433\u043E\u043D\u043E\u0441\u0438\u043A:"Weevil"};var ub=["ru","be","kk","uk","uz","ky","tg","hy","az"],Ii={lang:"ru",set:!1},Sc=n=>ub.includes(String(n||"").slice(0,2).toLowerCase())?"ru":"en";Ii.lang=(()=>{try{let n=new URLSearchParams(location.search).get("lang");if(n)return Sc(n)}catch{}return Sc(navigator.language||"ru")})();var vu=/[А-Яа-яЁё]/,_u=null;function xn(n){if(Ii.lang!=="en"||!n||!vu.test(n))return n;if(No[n]!==void 0)return No[n];if(!_u){let e=Object.keys(No).sort((t,i)=>i.length-t.length).map(t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));_u=new RegExp("(?<![\u0410-\u042F\u0430-\u044F\u0401\u0451])(?:"+e.join("|")+")(?![\u0410-\u042F\u0430-\u044F\u0401\u0451])","g")}return n.replace(_u,e=>No[e])}function bc(n){if(n.nodeType===3){let e=n.nodeValue;if(vu.test(e)){let t=xn(e);t!==e&&(n.nodeValue=t)}return}if(n.nodeType===1){for(let e of["title","placeholder","aria-label"]){let t=n.getAttribute(e);t&&vu.test(t)&&n.setAttribute(e,xn(t))}for(let e=n.firstChild;e;e=e.nextSibling)bc(e)}}var Ir=null;function Ec(n){if(n&&(Ii.lang=n),Ii.set=!0,document.documentElement.lang=Ii.lang,Ii.lang!=="en"){Ir&&(Ir.disconnect(),Ir=null);return}document.title=xn(document.title),bc(document.body),Ir||(Ir=new MutationObserver(e=>{for(let t of e)if(t.type==="characterData")bc(t.target);else for(let i of t.addedNodes)bc(i)}),Ir.observe(document.body,{subtree:!0,childList:!0,characterData:!0}))}var A={state:"load",time:0,fighters:[],me:null,shots:[],lobs:[],beams:[],puddles:[],pickups:[],match:null,shake:0,paused:!1,hooks:{}};function an(n,...e){let t=A.hooks[n];if(t)for(let i of t)i(...e)}function Fn(n,e){(A.hooks[n]||(A.hooks[n]=[])).push(e)}var Np={sph:new Tt(1,14,10),sphLo:new Tt(1,7,5),cyl:new Hn(1,1,1,10),box:new Ti(1,1,1),cone:new Xa(1,1,10),dome:new Tt(1,18,7,0,Math.PI*2,0,Math.PI/2),torus:new Qi(1,.22,6,16),disc:new rn(1,16)};Np.disc.rotateX(-Math.PI/2);var db=new R(0,1,0),yu=new R,Mu=new Ce,bu=new Ht,Fp=new hi,Tc=class{constructor(){this.bones={},this.list=[],this.parts=[],this.root=new Dt}bone(e,t,i=0,s=0,r=0){let o=new ws;return o.name=e,o.position.set(i,s,r),(t?this.bones[t]:this.root).add(o),this.bones[e]=o,this.list.push(o),o}add(e,t,i,s={}){return this.parts.push({bone:e,geo:t,color:new ne(i),glow:s.glow||0,shade:s.shade??1}),t}prim(e,t,i,s,r,o,a){let c=(typeof t=="string"?Np[t]:t).clone();Fp.set(o?o[0]:0,o?o[1]:0,o?o[2]:0,o&&o[3]||"XYZ");let l=Array.isArray(r)?r:[r,r,r];return c.applyMatrix4(Mu.compose(yu.set(s[0],s[1],s[2]),bu.setFromEuler(Fp),new R(l[0],l[1],l[2]))),this.add(e,c,i,a)}sph(e,t,i,s,r,o){return this.prim(e,"sph",t,i,s,r,o)}limb(e,t,i,s,r,o){let a=Math.hypot(s[0]-i[0],s[1]-i[1],s[2]-i[2]),c=new _r(r,Math.max(.001,a),3,8);return bu.setFromUnitVectors(db,yu.set(s[0]-i[0],s[1]-i[1],s[2]-i[2]).normalize()),c.applyMatrix4(Mu.compose(yu.set((i[0]+s[0])/2,(i[1]+s[1])/2,(i[2]+s[2])/2),bu,new R(1,1,1))),this.add(e,c,t,o)}lathe(e,t,i,s=[0,0,0],r=1,o=16,a){let c=new Ai(i.map(l=>new ee(l[0],l[1])),o);return c.scale(r,r,r),c.translate(s[0],s[1],s[2]),this.add(e,c,t,a)}tube(e,t,i,s,r){let o=new Ya(new bo(i.map(a=>new R(a[0],a[1],a[2]))),10,s,5);return this.add(e,o,t,r)}eyes(e,t,i,s,r,o={}){for(let a of[-1,1])this.sph(e,"#FFFFFF",[a*s,t,i],[r,r*1.18,r*.62],null,{shade:1.15}),this.prim(e,"sphLo",o.pupil||"#17131A",[a*s+a*(o.look||0),t-r*.06,i+r*.42],[r*.6,r*.72,r*.34]),this.prim(e,"sphLo","#FFFFFF",[a*s+r*.18,t+r*.28,i+r*.66],r*.17,null,{glow:.6}),o.brow!==void 0&&this.prim(e,"box",o.browColor||"#2A1A12",[a*s,t+r*1.32,i+r*.42],[r*1.7,r*.34,r*.4],[0,0,a*o.brow])}build(e){this.root.updateMatrixWorld(!0);let t=new Ce().copy(this.root.matrixWorld).invert(),i=[];for(let a of this.parts){let c=this.list.indexOf(a.bone),l=a.geo;for(let m of Object.keys(l.attributes))["position","normal","uv"].includes(m)||l.deleteAttribute(m);l.attributes.uv||l.setAttribute("uv",new rt(new Float32Array(l.attributes.position.count*2),2)),l.applyMatrix4(Mu.multiplyMatrices(t,a.bone.matrixWorld));let h=l.attributes.position.count,u=new Float32Array(h*3),d=new Float32Array(h),f=new Uint16Array(h*4),g=new Float32Array(h*4),x=a.color.clone().multiplyScalar(a.shade);for(let m=0;m<h;m++)u[m*3]=x.r,u[m*3+1]=x.g,u[m*3+2]=x.b,d[m]=a.glow,f[m*4]=c,g[m*4]=1;l.setAttribute("color",new rt(u,3)),l.setAttribute("aGlow",new rt(d,1)),l.setAttribute("skinIndex",new dr(f,4)),l.setAttribute("skinWeight",new rt(g,4)),i.push(l)}let s=Li(i);i.forEach(a=>a.dispose()),s.computeBoundingSphere();let r=new gr(this.list),o=new wi(s,e);return this.root.add(o),o.bind(r),o.castShadow=!0,o.frustumCulled=!1,{mesh:o,geo:s,skel:r}}};function Up(){let n=ht({vertexColors:!0,roughness:.5,metalness:0});return n.userData.u={uFlash:{value:0},uRim:{value:new ne("#FFF6DA")},uTint:{value:new ne(0,0,0)}},n.onBeforeCompile=e=>{Object.assign(e.uniforms,n.userData.u),e.vertexShader=`attribute float aGlow;
varying float vGlow;
`+e.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
 vGlow = aGlow;`),e.fragmentShader=`uniform float uFlash; uniform vec3 uRim; uniform vec3 uTint; varying float vGlow;
`+e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      float rim = pow(1.0 - clamp(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 2.6);
      totalEmissiveRadiance += uRim * rim * 0.35 * diffuseColor.rgb + diffuseColor.rgb * vGlow * 1.6 + vec3(uFlash) + uTint;`)},n.customProgramCacheKey=()=>"hero",n}function Op(n=.022){let e=new et({color:"#13200F",side:$t});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <skinning_vertex>",`#include <skinning_vertex>
 transformed += normalize(objectNormal) * ${n.toFixed(4)};`)},e.customProgramCacheKey=()=>"outline"+n,e}function zp(n){let e=new et({color:n,depthWrite:!1,depthFunc:xh,fog:!1,blending:gh,blendSrc:co,blendDst:lo,opacity:.62});return e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <opaque_fragment>","gl_FragColor = vec4(outgoingLight, opacity);")},e.customProgramCacheKey=()=>"sil",e}var si={shroom:{name:"\u0428\u043B\u044F\u043F\u043D\u0438\u043A",species:"\u043C\u0443\u0445\u043E\u043C\u043E\u0440",role:"\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A",color:"#E23A2E",hp:3900,speed:5,rad:.42,height:1.35,desc:"\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A \u0431\u044C\u0451\u0442 \u0432\u0435\u0435\u0440\u043E\u043C: \u0432\u0431\u043B\u0438\u0437\u0438 \u0440\u0430\u0437\u043D\u043E\u0441\u0438\u0442 \u043B\u044E\u0431\u043E\u0433\u043E.",attack:{kind:"fan",name:"\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0432\u0435\u0435\u0440",count:5,spread:.5,range:7.2,speed:24,dmg:310,reload:1.5,cd:.42,size:.2,color:"#FF6B4A"},super:{kind:"fan",name:"\u0413\u0440\u0438\u0431\u043D\u043E\u0439 \u0437\u0430\u043B\u043F",desc:"\u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0437\u0430\u043B\u043F \u043E\u0442\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u0432\u0440\u0430\u0433\u043E\u0432",count:11,spread:.85,range:8.6,speed:27,dmg:330,knock:3.4,size:.28,color:"#FFD24A",charge:4600}},beetle:{name:"\u0411\u0430\u0431\u0430\u0445",species:"\u0436\u0443\u043A-\u0431\u043E\u043C\u0431\u0430\u0440\u0434\u0438\u0440",role:"\u041C\u0435\u0442\u0430\u0442\u0435\u043B\u044C",color:"#3B57D6",hp:3e3,speed:4.7,rad:.44,height:1.25,desc:"\u041A\u0438\u0434\u0430\u0435\u0442 \u0431\u043E\u043C\u0431\u044B \u043D\u0430\u0432\u0435\u0441\u043E\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B. \u0412\u0437\u0440\u044B\u0432 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0433\u043E\u0440\u044F\u0449\u0443\u044E \u043B\u0443\u0436\u0443.",attack:{kind:"lob",name:"\u0416\u0443\u0447\u0438\u043D\u0430\u044F \u0431\u043E\u043C\u0431\u0430",range:10,flight:.78,radius:1.7,dmg:820,reload:1.9,cd:.5,puddle:{r:1.35,dps:320,t:1.8},color:"#FF9A2E"},super:{kind:"barrage",name:"\u041A\u043E\u0432\u0440\u043E\u0432\u0430\u044F \u0431\u043E\u043C\u0431\u0451\u0436\u043A\u0430",desc:"\u043F\u044F\u0442\u044C \u0431\u043E\u043C\u0431 \u043B\u043E\u0436\u0430\u0442\u0441\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u043E\u0439",count:5,range:12,flight:.95,radius:1.9,dmg:1050,knock:2.2,step:1.9,color:"#FF5A2E",charge:3900}},wasp:{name:"\u0416\u0430\u043B\u043A\u0430",species:"\u043E\u0441\u0430",role:"\u0421\u043D\u0430\u0439\u043F\u0435\u0440",color:"#F5C21B",hp:2500,speed:5.2,rad:.4,height:1.45,hover:.22,desc:"\u0414\u0430\u043B\u044C\u043D\u043E\u0431\u043E\u0439\u043D\u043E\u0435 \u0436\u0430\u043B\u043E: \u0447\u0435\u043C \u0434\u0430\u043B\u044C\u0448\u0435 \u0446\u0435\u043B\u044C, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u043D\u0435\u0435.",attack:{kind:"needle",name:"\u0416\u0430\u043B\u043E",range:15,speed:40,dmg:900,dmgFar:1650,reload:1.9,cd:.5,size:.16,color:"#FFB21E"},super:{kind:"beam",name:"\u041F\u0440\u043E\u043D\u0437\u0430\u044E\u0449\u0438\u0439 \u043B\u0443\u0447",desc:"\u043B\u0443\u0447 \u043F\u0440\u043E\u0448\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0435\u043D\u044B \u0438 \u0432\u0441\u0435\u0445 \u043D\u0430 \u043F\u0443\u0442\u0438",range:21,width:.75,dmg:2100,windup:.38,color:"#FFE15A",charge:3600}}},Dr=Object.keys(si),qn=3,Uo="#FFF0D9";function Bp(n){let e=new Tc,t=e.bones,i={};if(n==="shroom"){e.bone("hips",null,0,.42,0),e.bone("body","hips"),e.bone("head","body",0,.68,0),e.bone("eyes","body",0,.36,.27),e.bone("armL","body",.3,.36,.04),e.bone("armR","body",-.3,.36,.04),e.bone("gun","armR",.04,-.14,.24),e.bone("footL",null,.16,0,0),e.bone("footR",null,-.16,0,0),e.lathe(t.body,Uo,[[0,-.36],[.24,-.35],[.31,-.18],[.33,.1],[.31,.4],[.27,.66],[0,.72]]),e.eyes(t.eyes,0,0,.115,.085,{brow:.32}),e.sph(t.body,"#5A2A22",[0,.2,.295],[.06,.035,.03]);for(let r of[-1,1])e.sph(t.body,"#FF9C9C",[r*.19,.25,.25],[.05,.03,.02]);e.prim(t.body,"torus","#F3DFC0",[0,.58,0],[.3,.3,.42],[Math.PI/2,0,0]),e.prim(t.body,"torus","#3FA34D",[0,-.02,0],[.33,.33,.4],[Math.PI/2,0,0]),e.prim(t.body,"box","#2E7A38",[0,-.02,.33],[.12,.1,.04]),e.prim(t.head,"dome","#E0332A",[0,-.05,0],[.66,.46,.66]),e.prim(t.head,"disc","#F6E2C2",[0,-.05,0],[.65,1,.65],[Math.PI,0,0]),e.prim(t.head,"torus","#E9CFA6",[0,-.07,0],[.5,.5,.25],[Math.PI/2,0,0]);let s=[[0,.95],[.9,.55],[2,.6],[3.1,.55],[4.2,.6],[5.3,.55],[.5,.25],[2.6,.25],[4.6,.28],[1.6,.25]];for(let[r,o]of s){let a=Math.cos(r)*Math.cos(o)*.66,c=Math.sin(o)*.46,l=Math.sin(r)*Math.cos(o)*.66,h=new R(a/.44,c/.21,l/.44).normalize(),u=.1+(o>.9?.05:.02),d=new Ht().setFromUnitVectors(new R(0,1,0),h),f=new hi().setFromQuaternion(d);e.sph(t.head,"#FFF8EC",[a,c-.05,l],[u,u*.3,u],[f.x,f.y,f.z])}e.limb(t.armR,Uo,[0,0,0],[.02,-.12,.2],.065),e.sph(t.armR,Uo,[.03,-.14,.24],.085),e.limb(t.armL,Uo,[0,0,0],[-.12,-.1,.26],.065),e.sph(t.armL,Uo,[-.15,-.11,.33],.085),e.prim(t.gun,"box","#8A5A32",[0,0,-.08],[.1,.13,.26]),e.prim(t.gun,"cyl","#5E8F3A",[0,.03,.2],[.07,.36,.07],[Math.PI/2,0,0]),e.prim(t.gun,"cone","#C9A24A",[0,.03,.44],[.15,.2,.15],[-Math.PI/2,0,0]),e.prim(t.gun,"torus","#E7C35C",[0,.03,.54],[.14,.14,.14]),e.sph(t.gun,"#9BFF6A",[0,.13,.08],[.07,.07,.1],null,{glow:.7}),i.muzzle=[0,.03,.56];for(let r of["L","R"])e.sph(t["foot"+r],"#7A4A2A",[0,.07,.03],[.11,.08,.15])}else if(n==="beetle"){e.bone("hips",null,0,.4,0),e.bone("body","hips"),e.bone("elyL","body",.04,.3,.1),e.bone("elyR","body",-.04,.3,.1),e.bone("head","body",0,.12,.36),e.bone("antL","head",.08,.17,.08),e.bone("antR","head",-.08,.17,.08),e.bone("eyes","head",0,.05,.15),e.bone("armL","body",.38,.06,.16),e.bone("armR","body",-.38,.06,.16),e.bone("gun","armR",-.02,-.06,.2),e.bone("footL",null,.18,0,0),e.bone("footR",null,-.18,0,0),e.sph(t.body,"#C98A3A",[0,-.05,.02],[.4,.36,.42]);for(let s=0;s<4;s++)e.prim(t.body,"torus","#A86C2C",[0,-.18+s*.07,.06],[.33-Math.abs(s-1.5)*.03,.33-Math.abs(s-1.5)*.03,.2],[Math.PI/2,0,0]);for(let[s,r]of[[1,"elyL"],[-1,"elyR"]]){let o=new Tt(1,16,12,s>0?-Math.PI/2:Math.PI/2,Math.PI,0,Math.PI*.62);o.scale(.45,.46,.5),o.translate(-s*.04,-.2,-.12),e.add(t[r],o,"#2E45B8"),e.prim(t[r],"sph","#7FA0FF",[s*.17,.12,-.08],[.09,.05,.16],[.3,0,s*.4],{glow:.25}),e.prim(t[r],"sph","#22348A",[s*.22,-.02,-.3],[.06,.06,.06])}for(let s=0;s<3;s++)e.sph(t.body,"#2A2A30",[.36-s*.03,-.12,-.12+s*.13],.08),e.prim(t.body,"cyl","#C9A24A",[.37-s*.03,-.04,-.12+s*.13],[.02,.05,.02]);for(let s of[-1,1])for(let r=0;r<2;r++)e.limb(t.body,"#1F1A24",[s*.3,-.1,.12-r*.24],[s*.46,-.32,.16-r*.3],.03);e.sph(t.head,"#1F2340",[0,0,0],[.24,.22,.22]),e.eyes(t.eyes,0,0,.1,.085,{brow:-.25,browColor:"#0E0F1E"});for(let s of[-1,1])e.prim(t.head,"cone","#C98A3A",[s*.08,-.11,.2],[.035,.12,.035],[1.9,0,s*-.5]);for(let[s,r]of[[1,"antL"],[-1,"antR"]])e.tube(t[r],"#1F2340",[[0,0,0],[s*.06,.12,.04],[s*.15,.2,.02],[s*.22,.22,-.04]],.018),e.sph(t[r],"#FF8A3A",[s*.22,.22,-.04],.04,null,{glow:.4});e.limb(t.armR,"#1F1A24",[0,0,0],[-.02,-.06,.18],.05),e.sph(t.armR,"#C98A3A",[-.02,-.07,.2],.07),e.limb(t.armL,"#1F1A24",[0,0,0],[.04,-.08,.18],.05),e.sph(t.armL,"#C98A3A",[.04,-.09,.2],.07),e.sph(t.gun,"#25252C",[0,.06,.08],.15),e.sph(t.gun,"#4A4A58",[.05,.12,.13],.04,null,{glow:.3}),e.prim(t.gun,"cyl","#C9A24A",[0,.22,.08],[.025,.08,.025]),e.sph(t.gun,"#FFD04A",[0,.27,.08],.035,null,{glow:2.5}),i.muzzle=[0,.06,.1];for(let s of["L","R"])e.sph(t["foot"+s],"#C98A3A",[0,.06,.04],[.11,.07,.15])}else if(n==="wasp"){let s=si.wasp.hover;e.bone("hips",null,0,.62+s,0),e.bone("body","hips"),e.bone("abd","body",0,-.04,-.2),e.bone("head","body",0,.3,.06),e.bone("antL","head",.07,.17,.08),e.bone("antR","head",-.07,.17,.08),e.bone("wingL","body",.1,.17,-.08),e.bone("wingR","body",-.1,.17,-.08),e.bone("armL","body",.2,.06,.1),e.bone("armR","body",-.2,.06,.1),e.bone("gun","armR",.06,-.1,.12),e.bone("footL","hips",.1,-.26,.02),e.bone("footR","hips",-.1,-.26,.02),e.sph(t.body,"#2E2620",[0,.04,0],[.24,.27,.25]),e.prim(t.body,"torus","#F5C21B",[0,.22,.02],[.17,.17,.3],[Math.PI/2,0,0]);let r=[[0,.17],[.12,.23],[.25,.25],[.38,.23],[.5,.18],[.6,.11]];for(let o=0;o<r.length;o++){let[a,c]=r[o];e.prim(t.abd,"sph",o%2?"#26201A":"#F5C21B",[0,-.06-a*.25,-a],[c,c,.09])}e.prim(t.abd,"cone","#26201A",[0,-.22,-.72],[.04,.16,.04],[-1.9,0,0]),e.sph(t.head,"#F5C21B",[0,0,0],[.22,.21,.2]);for(let o of[-1,1])e.sph(t.head,"#1B1A2A",[o*.13,.03,.1],[.1,.14,.09],[0,o*.3,0]),e.prim(t.head,"sphLo","#FFFFFF",[o*.11,.09,.18],.025,null,{glow:.8}),e.prim(t.head,"sphLo","#8FA8FF",[o*.16,-.02,.17],.018,null,{glow:.5});e.prim(t.head,"torus","#5A2A1A",[0,-.09,.17],[.05,.05,.05],[0,0,Math.PI]);for(let[o,a]of[[1,"antL"],[-1,"antR"]])e.tube(t[a],"#26201A",[[0,0,0],[o*.03,.14,.06],[o*.1,.24,.1],[o*.18,.27,.16]],.015),e.sph(t[a],"#26201A",[o*.18,.27,.16],.03);e.limb(t.armR,"#26201A",[0,0,0],[.04,-.08,.1],.035),e.sph(t.armR,"#F5C21B",[.05,-.1,.12],.05),e.limb(t.armL,"#26201A",[0,0,0],[-.1,-.08,.26],.035),e.sph(t.armL,"#F5C21B",[-.11,-.09,.3],.05),e.prim(t.gun,"box","#6B4A2E",[0,-.01,-.1],[.07,.1,.3]),e.prim(t.gun,"cyl","#3A3A44",[0,.02,.32],[.035,.66,.035],[Math.PI/2,0,0]),e.prim(t.gun,"cone","#E8C84A",[0,.02,.72],[.04,.16,.04],[Math.PI/2,0,0]),e.prim(t.gun,"cyl","#26201A",[0,.1,.12],[.04,.26,.04],[Math.PI/2,0,0]),e.sph(t.gun,"#FFB21E",[0,.1,.26],[.04,.04,.02],null,{glow:2}),i.muzzle=[0,.02,.82];for(let o of["L","R"])e.limb(t["foot"+o],"#26201A",[0,.1,0],[0,-.05,.03],.03),e.sph(t["foot"+o],"#26201A",[0,-.07,.05],[.05,.035,.07])}return{rig:e,parts:i}}function kp(n){let e=ht({color:"#E6F6FF",transparent:!0,opacity:.5,side:St,roughness:.1,depthWrite:!1,emissive:"#9FD8FF",emissiveIntensity:.15}),t=new pn(.62,.24);t.translate(.31,0,0),t.rotateX(-Math.PI/2);let i=[];for(let[s,r]of[[1,"wingL"],[-1,"wingR"]])for(let o=0;o<2;o++){let a=new _e(t,e);a.scale.set(s*(1-o*.25),1,1-o*.15),a.position.z=-o*.08,a.rotation.y=s*(.35+o*.4),n.bones[r].add(a),i.push(a)}return i}var Su={shroom:'<svg viewBox="0 0 72 72" aria-hidden="true"><rect x="22" y="34" width="28" height="30" rx="12" fill="#FFF0D9"/><circle cx="30" cy="45" r="3.4" fill="#17131A"/><circle cx="42" cy="45" r="3.4" fill="#17131A"/><path d="M25 39l8 3M47 39l-8 3" stroke="#2A1A12" stroke-width="3" stroke-linecap="round"/><path d="M4 36Q36-8 68 36Z" fill="#E0332A"/><circle cx="20" cy="24" r="4.5" fill="#FFF8EC"/><circle cx="36" cy="13" r="4" fill="#FFF8EC"/><circle cx="53" cy="25" r="4.5" fill="#FFF8EC"/><rect x="22" y="55" width="28" height="5" rx="2" fill="#3FA34D"/></svg>',beetle:'<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="36" cy="44" rx="25" ry="22" fill="#2E45B8"/><path d="M36 22V66" stroke="#1B2A78" stroke-width="3"/><ellipse cx="25" cy="38" rx="5" ry="8" fill="#7FA0FF" opacity=".7"/><circle cx="36" cy="24" r="13" fill="#1F2340"/><circle cx="30" cy="22" r="5" fill="#fff"/><circle cx="42" cy="22" r="5" fill="#fff"/><circle cx="31" cy="23" r="2.6" fill="#17131A"/><circle cx="41" cy="23" r="2.6" fill="#17131A"/><path d="M30 12Q24 2 16 4M42 12Q48 2 56 4" stroke="#1F2340" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="16" cy="4" r="3" fill="#FF8A3A"/><circle cx="56" cy="4" r="3" fill="#FF8A3A"/><circle cx="60" cy="56" r="8" fill="#25252C"/><circle cx="62" cy="46" r="2.5" fill="#FFD04A"/></svg>',wasp:'<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="17" cy="30" rx="15" ry="7" fill="#DDF2FF" opacity=".8" transform="rotate(-25 17 30)"/><ellipse cx="55" cy="30" rx="15" ry="7" fill="#DDF2FF" opacity=".8" transform="rotate(25 55 30)"/><ellipse cx="36" cy="55" rx="12" ry="14" fill="#F5C21B"/><path d="M25 52H47M26 60H46" stroke="#26201A" stroke-width="4.5"/><circle cx="36" cy="30" r="14" fill="#F5C21B"/><ellipse cx="29" cy="30" rx="5.5" ry="7.5" fill="#1B1A2A"/><ellipse cx="43" cy="30" rx="5.5" ry="7.5" fill="#1B1A2A"/><circle cx="28" cy="27" r="1.8" fill="#fff"/><circle cx="42" cy="27" r="1.8" fill="#fff"/><path d="M32 39Q36 42 40 39" stroke="#5A2A1A" stroke-width="2" fill="none"/><path d="M31 17Q27 7 22 6M41 17Q45 7 50 6" stroke="#26201A" stroke-width="2.5" fill="none"/></svg>'};var fb={me:"#FFD23F",ally:"#4FC3FF",foe:"#FF4D4D"},pb=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.strokeStyle="#fff",e.lineWidth=9,e.beginPath(),e.arc(64,64,52,0,Le),e.stroke(),e.globalAlpha=.25,e.fillStyle="#fff",e.beginPath(),e.arc(64,64,50,0,Le),e.fill();let t=new Bn(n);return t.colorSpace=lt,t})(),Eu=new pn(1.25,1.25);Eu.rotateX(-Math.PI/2);var mb=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,31);return t.addColorStop(0,"rgba(0,0,0,.5)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Bn(n)})(),gb=new et({map:mb,transparent:!0,depthWrite:!1});function wc(n){let{rig:e,parts:t}=Bp(n),i=Up(),{mesh:s,geo:r,skel:o}=e.build(i);s.renderOrder=2;let a=new wi(r,Op());a.bind(o,s.bindMatrix),a.frustumCulled=!1,a.renderOrder=2,e.root.add(a),a.visible=ue.level==="high";let c=zp("#FFFFFF"),l=new wi(r,c);l.bind(o,s.bindMatrix),l.frustumCulled=!1,l.renderOrder=1,e.root.add(l);let h=new _e(Eu,new et({map:pb,transparent:!0,depthWrite:!1,color:"#fff",opacity:.9}));h.position.y=.03,h.renderOrder=1,e.root.add(h);let u=null;ni&&(u=new _e(Eu,gb),u.position.y=.025,u.scale.setScalar(.85),u.renderOrder=1,e.root.add(u));let d=e.bones;for(let m of e.list)m.userData.rest=m.position.clone(),m.userData.rot=m.rotation.clone();let f=new Et;f.position.fromArray(t.muzzle),d.gun.add(f);let g=n==="wasp"?kp(e):null;return{id:n,H:si[n],root:e.root,B:d,mesh:s,ol:a,sil:l,silMat:c,mat:i,ring:h,blob:u,muzzle:f,wings:g,yaw:0,ph:0,lastStep:0,sp:{twist:on(),leanX:on(),leanZ:on(),headX:on(),headZ:on(),squash:on(),kick:on(),bodyX:on(),armR:on(),armL:on(),ant:on(),ely:on(),pop:on(1),lift:on(),gunS:on(1)},prevVX:0,prevVZ:0}}function Ac(n,e){let t=new ne(fb[e]);n.ring.material.color.copy(t),n.silMat.color.copy(e==="foe"?new ne("#FF3B3B"):e==="me"?new ne("#FFE58A"):new ne("#7FD8FF"))}var Oo=n=>n.userData.rest;function Rc(n,e,t,i){let s=n.B,r=n.sp,o=n.H,a=n.root;if(!e.alive){let z=e.deadT,L=tt(z/.75,0,1);a.position.set(e.x,Math.max(0,Math.sin(Math.min(z/.5,1)*Math.PI)*.7),e.z),a.rotation.set(-L*1.4,n.yaw+z*4,0,"YXZ");let U=z<.55?1+Math.sin(z*18)*.06:Math.max(0,1-(z-.55)/.2);a.scale.setScalar(U),n.ring.visible=!1,n.blob&&(n.blob.visible=!1),a.visible=U>.01,n.mat.userData.u.uFlash.value=z<.1?.8:0;return}a.rotation.x=0,a.rotation.z=0,n.ring.visible=!0,n.blob&&(n.blob.visible=!0);let c=Math.hypot(e.vx,e.vz),l=c>.4,h=e.atkT<.55||e.supT<.8||e.aiming,u=h||!l?e.aim:Math.atan2(e.vx,e.vz);n.yaw+=tt(Sr(n.yaw,u),-t*16,t*16),a.rotation.y=n.yaw,a.position.set(e.x,0,e.z);let d=tt(c/o.speed,0,1),f=n.ph;n.ph+=t*(3+c*2.1),l&&Math.floor(f/Math.PI)!==Math.floor(n.ph/Math.PI)&&(r.squash.v-=2.4*d,r.headX.v+=1.6*d,n.step=!0);let g=Math.sin(n.ph),x=Math.cos(n.ph);if(o.hover)for(let[z,L]of[[s.footL,1],[s.footR,-1]])z.rotation.x=Math.sin(i*3+L)*.25-d*.6;else{let z=.2*d;for(let[L,U]of[[s.footL,1],[s.footR,-1]])L.position.z=Oo(L).z+g*U*z,L.position.y=Oo(L).y+Math.max(0,x*U)*.14*d,L.rotation.x=-x*U*.6*d}let m=Math.cos(n.yaw),p=Math.sin(n.yaw),_=(e.vx-n.prevVX)/Math.max(t,.001),v=(e.vz-n.prevVZ)/Math.max(t,.001);n.prevVX=e.vx,n.prevVZ=e.vz;let y=e.vx*p+e.vz*m,C=e.vx*m-e.vz*p,b=_*p+v*m;In(r.leanX,tt(y/o.speed*.16+b*.012,-.3,.35),120,14,t),In(r.leanZ,tt(-C/o.speed*.2,-.3,.3),120,14,t),In(r.squash,0,260,13,t),In(r.headX,0,150,7,t),In(r.headZ,0,150,7,t),In(r.kick,0,200,15,t),In(r.bodyX,0,140,11,t),In(r.ant,0,90,5,t),In(r.pop,1,220,12,t),In(r.lift,0,60,10,t),In(r.gunS,1,200,12,t),r.headZ.v+=C*.02*t*60*.05,r.headX.v-=b*.002,r.ant.v+=b*.004+r.headX.v*.02;let P=Math.sin(i*2.4+e.id)*.012,D=Math.abs(x)*.07*d;s.hips.position.y=Oo(s.hips).y+D+P+r.lift.x+(o.hover?Math.sin(i*4+e.id)*.05:0);let M=r.squash.x,E=Math.max(0,Math.sin(n.ph*2))*.05*d;s.hips.scale.set(1-M*.07-E*.5,1+M*.12+E,1-M*.07-E*.5),s.hips.rotation.x=r.leanX.x+r.bodyX.x,s.hips.rotation.z=r.leanZ.x+Math.sin(n.ph)*.05*d,In(r.twist,tt(Sr(n.yaw,e.aim),-1,1),160,16,t),s.body.rotation.y=r.twist.x,s.head.rotation.x=r.headX.x*.5+(o.hover,0),s.head.rotation.z=r.headZ.x*.5+Math.sin(n.ph)*.06*d;for(let z of["antL","antR"])s[z]&&(s[z].rotation.x=-r.ant.x*.8+Math.sin(i*2+(z==="antL"?0:1))*.06);let N=Math.sin(n.ph)*.5*d*(h?.3:1);s.armL.rotation.set(Oo(s.armL).x+N,0,0),s.armR.rotation.set(-N*.3,0,0),s.gun.position.copy(Oo(s.gun)),s.gun.rotation.x=0,s.gun.scale.setScalar(1);let V=o.attack.kind;if(e.atkT<.6){let z=e.atkT;if(V==="lob"){let L=z<.07?-z/.07*2.4:z<.2?-2.4+(z-.07)/.13*3.2:.8*Math.max(0,1-(z-.2)/.3);s.armR.rotation.x=L,s.hips.rotation.x+=z<.07?-.15:z<.3?.18:0,s.gun.scale.setScalar(z<.12?1:Math.min(1,Math.max(0,(z-.35)/.15)))}else{let L=n.id==="shroom"?1.6:1;s.armR.rotation.x+=-r.kick.x*.9*L,s.armL.rotation.x+=-r.kick.x*.5*L,s.gun.position.z-=r.kick.x*.2*L,s.gun.rotation.x=-r.kick.x*.5*L,s.hips.rotation.x-=r.kick.x*.12*L,n.B.abd&&(n.B.abd.rotation.x=r.kick.x*.9)}}if(s.armL.rotation.x+=-r.kick.x*.4,e.supT<1.2){let z=e.supT;if(n.id==="shroom"){let L=z<.12?z/.12:Math.max(0,1-(z-.12)/.3);s.hips.position.y-=L*.12,s.hips.scale.y*=1-L*.12,s.head.rotation.x+=-L*.25}else if(n.id==="beetle"){let L=z<.9?Math.min(1,z/.15):Math.max(0,1-(z-.9)/.3);s.elyL&&(s.elyL.rotation.z=L*.9,s.elyR.rotation.z=-L*.9,s.elyL.rotation.x=s.elyR.rotation.x=-L*.4),s.armL.rotation.x=s.armR.rotation.x=-2.2*L+(z>.15&&z<.6?Math.sin((z-.15)*30)*.5:0),s.hips.position.y+=Math.sin(Math.min(z/.5,1)*Math.PI)*.35}else if(n.id==="wasp"){let L=o.super.windup,U=z<L?z/L:Math.max(0,1-(z-L)/.5);s.hips.position.y+=U*.35,s.hips.rotation.x+=-U*.25,n.mat.userData.u.uTint.value.setRGB(.5,.38,.05).multiplyScalar(z<L?z/L:0)}}else n.id==="wasp"&&n.mat.userData.u.uTint.value.setRGB(0,0,0);if(n.id!=="beetle"&&s.elyL&&(s.elyL.rotation.z=0),n.wings){let z=e.supT<o.super.windup+.2?1.6:1,L=Math.sin(i*62*z+e.id)*.55;s.wingL.rotation.z=L,s.wingR.rotation.z=-L,s.abd&&(s.abd.rotation.x+=Math.sin(i*3+e.id)*.08)}if(e.victory){let z=Math.abs(Math.sin(i*5.5+e.id));a.position.y=z*.45,s.armL.rotation.x=s.armR.rotation.x=-2.6+Math.sin(i*11)*.3,s.hips.scale.y*=1+(z<.15?-.12:.05)}else e.defeat&&(s.hips.position.y-=.06,s.head.rotation.x+=.45,s.armL.rotation.x=s.armR.rotation.x=.5);s.eyes&&(n.blink=(n.blink??2+Math.random()*3)-t,n.blink<0?(s.eyes.scale.y=.12,n.blink<-.11&&(n.blink=1.8+Math.random()*3.5)):s.eyes.scale.y=e.flash>.5?.6:1),n.mat.userData.u.uFlash.value=Math.max(0,e.flash)*.55,a.scale.setScalar(Math.max(.01,r.pop.x)),a.visible=!0}var hs={attack(n){n.sp.kick.v+=n.id==="wasp"?9:n.id==="shroom"?13:0,n.sp.bodyX.v-=2.2,n.sp.headX.v-=3,n.sp.ant.v+=3},super(n){n.sp.kick.v+=22,n.sp.bodyX.v-=5,n.sp.headX.v-=6,n.sp.ant.v+=6,n.sp.squash.v+=3},hurt(n,e,t){n.sp.bodyX.v-=5,n.sp.headX.v-=7,n.sp.headZ.v+=(Math.random()-.5)*8,n.sp.squash.v-=3,n.sp.ant.v+=5},spawn(n){n.sp.pop.x=.05,n.sp.pop.v=0},land(n){n.sp.squash.v-=4}};var Lc=class{constructor(e,t){this.max=e,this.n=0;let i=new pn(1,1),s=new tc;s.index=i.index,s.setAttribute("position",i.attributes.position),s.setAttribute("uv",i.attributes.uv),this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e*2),s.setAttribute("iPos",new ti(this.pos,3).setUsage(cc)),s.setAttribute("iCol",new ti(this.col,4).setUsage(cc)),s.setAttribute("iSize",new ti(this.size,2).setUsage(cc)),s.instanceCount=0,this.geo=s;let r=new bt({transparent:!0,depthWrite:!1,blending:t?ei:Xi,vertexShader:`attribute vec3 iPos; attribute vec4 iCol; attribute vec2 iSize; varying vec4 vCol; varying vec2 vUv; varying float vSoft;
        void main(){ vCol = iCol; vUv = uv; vSoft = iSize.y;
          vec4 mv = modelViewMatrix * vec4(iPos, 1.0); mv.xy += position.xy * iSize.x; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec4 vCol; varying vec2 vUv; varying float vSoft;
        void main(){ float d = length(vUv - 0.5) * 2.0; float a = clamp(1.0 - d, 0.0, 1.0); a = vSoft > 0.5 ? a * a : smoothstep(0.0, 0.25, a);
          gl_FragColor = vec4(vCol.rgb, vCol.a * a);
          #include <colorspace_fragment>
        }`});this.mesh=new _e(s,r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,ye.add(this.mesh),this.p=[]}emit(e){this.p.length>=this.max&&this.p.shift(),this.p.push(e)}update(e){let t=this.p,i=0;for(let s=0;s<t.length;s++){let r=t[s];if(r.t+=e,r.t>=r.life)continue;r.vy-=r.grav*e;let o=Math.exp(-r.drag*e);r.vx*=o,r.vy*=o,r.vz*=o,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.y<.02&&r.grav>0&&(r.y=.02,r.vy*=-.3,r.vx*=.7,r.vz*=.7);let a=r.t/r.life;this.pos[i*3]=r.x,this.pos[i*3+1]=r.y,this.pos[i*3+2]=r.z,this.col[i*4]=r.r,this.col[i*4+1]=r.g,this.col[i*4+2]=r.b,this.col[i*4+3]=r.a*(a<.1?a/.1:1-Math.pow((a-.1)/.9,1.6)),this.size[i*2]=r.s0+(r.s1-r.s0)*a,this.size[i*2+1]=r.soft,t[i++]=r}t.length=i,this.geo.instanceCount=i;for(let s of["iPos","iCol","iSize"])this.geo.attributes[s].needsUpdate=!0}clear(){this.p.length=0,this.geo.instanceCount=0}},Ct=new Lc(900,!0),Di=new Lc(500,!1),Cc=new ne;function Xt(n,e,t,i,s){Cc.set(s.color||"#fff");let r=ni?Math.ceil((s.n||1)*.6):s.n||1,o=ni?.85:1;for(let a=0;a<r;a++){let c=F(0,Le),l=F(s.upMin??-.3,s.upMax??1),h=F(s.spMin??0,s.sp??2),u=s.jitter?F(1-s.jitter,1+s.jitter):1;n.emit({x:e+F(-1,1)*(s.spread||0),y:t+F(-1,1)*(s.spreadY??s.spread??0),z:i+F(-1,1)*(s.spread||0),vx:Math.cos(c)*h*Math.sqrt(1-l*l*.5)+(s.vx||0),vy:l*h+(s.vy||0),vz:Math.sin(c)*h*Math.sqrt(1-l*l*.5)+(s.vz||0),life:F(s.life*.7,s.life*1.3),t:0,s0:s.s0*o*F(.8,1.2),s1:(s.s1??s.s0)*o*F(.8,1.2),r:Cc.r*u,g:Cc.g*u,b:Cc.b*u,a:s.a??1,grav:s.grav||0,drag:s.drag??2,soft:s.soft?1:0})}}var Hp=new ji(.82,1,40);Hp.rotateX(-Math.PI/2);var Gp=new rn(1,28);Gp.rotateX(-Math.PI/2);var Fr=[];function zo(n,e,t,i,s,r,o=.06){let a=new _e(Hp,new et({color:r,transparent:!0,depthWrite:!1,blending:ei}));a.position.set(n,o,e),a.renderOrder=4,ye.add(a),Fr.push({m:a,r0:t,r1:i,life:s,t:0})}var xb=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,62);t.addColorStop(0,"rgba(20,14,8,.85)"),t.addColorStop(.6,"rgba(30,22,10,.5)"),t.addColorStop(1,"rgba(30,22,10,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);for(let s=0;s<14;s++){let r=F(0,Le);e.strokeStyle="rgba(20,14,8,.4)",e.lineWidth=F(2,5),e.beginPath(),e.moveTo(64,64),e.lineTo(64+Math.cos(r)*F(40,62),64+Math.sin(r)*F(40,62)),e.stroke()}let i=new Bn(n);return i.colorSpace=lt,i})(),us=[];function _b(n,e,t){let i=new _e(Gp,new et({map:xb,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));if(i.position.set(n,.035,e),i.scale.setScalar(t),i.rotation.y=F(0,Le),i.renderOrder=1,ye.add(i),us.push({m:i,t:0,life:6}),us.length>14){let s=us.shift();ye.remove(s.m),s.m.material.dispose()}}var Pc=new R,Nr=[];function Tu(n,e,t,i,s){let r=document.createElement("div");r.className="dnum "+(s||""),r.textContent=s==="heal"?"+"+Math.round(i):Math.round(i),de("hud-world").appendChild(r),Nr.push({el:r,x:n+F(-.3,.3),y:e,z:t+F(-.3,.3),t:0,life:.9})}function Vp(n){Ct.update(n),Di.update(n);for(let i=Fr.length-1;i>=0;i--){let s=Fr[i];s.t+=n;let r=s.t/s.life;if(r>=1){ye.remove(s.m),s.m.material.dispose(),Fr.splice(i,1);continue}let o=1-Math.pow(1-r,3);s.m.scale.setScalar(s.r0+(s.r1-s.r0)*o),s.m.material.opacity=1-r}for(let i=us.length-1;i>=0;i--){let s=us[i];s.t+=n,s.m.material.opacity=Math.min(1,(s.life-s.t)/1.5),s.t>s.life&&(ye.remove(s.m),s.m.material.dispose(),us.splice(i,1))}let e=innerWidth,t=innerHeight;for(let i=Nr.length-1;i>=0;i--){let s=Nr[i];if(s.t+=n,s.t>s.life){s.el.remove(),Nr.splice(i,1);continue}if(Pc.set(s.x,s.y+s.t*1.2,s.z).project(ct),Pc.z>1){s.el.style.opacity=0;continue}let r=s.t/s.life,o=r<.15?.6+r/.15*.7:1.3-Math.min(.3,(r-.15)*1.2);s.el.style.transform=`translate(${(Pc.x*.5+.5)*e}px,${(-Pc.y*.5+.5)*t}px) translate(-50%,-50%) scale(${o.toFixed(2)})`,s.el.style.opacity=r>.7?(1-r)/.3:1}}function Wp(){Ct.clear(),Di.clear();for(let n of Fr)ye.remove(n.m),n.m.material.dispose();Fr.length=0;for(let n of us)ye.remove(n.m),n.m.material.dispose();us.length=0;for(let n of Nr)n.el.remove();Nr.length=0}function Xp(n,e,t,i="#FF9A2E"){Xt(Ct,n,.4,e,{n:26,color:"#FFE6A0",sp:t*4.5,upMin:.1,upMax:1,life:.35,s0:.5,s1:.1,drag:4}),Xt(Ct,n,.5,e,{n:14,color:i,sp:t*2.2,upMin:.2,life:.5,s0:t*.9,s1:t*.3,drag:3,soft:!0,a:.8}),Xt(Di,n,.5,e,{n:14,color:"#5A5048",sp:t*1.6,upMin:.2,life:1.1,s0:t*.5,s1:t*1.3,drag:2.5,soft:!0,a:.55,vy:.8,jitter:.2}),Xt(Di,n,.2,e,{n:10,color:"#6B4A2E",sp:5,upMin:.5,life:.8,s0:.12,s1:.08,grav:14,drag:.5}),zo(n,e,.3,t*1.15,.4,i),_b(n,e,t*.9),A.shake=Math.max(A.shake,.35)}function Ic(n,e,t,i){Xt(Ct,n,e,t,{n:8,color:i,sp:5,life:.25,s0:.22,s1:.04,drag:5}),Xt(Ct,n,e,t,{n:1,color:"#FFFFFF",sp:0,life:.12,s0:.9,s1:.3,soft:!0,a:.8})}function qp(n,e,t,i,s=30){Xt(Ct,n,e,t,{n:s,color:i,sp:4,life:.9,s0:.3,s1:.05,drag:2.5,grav:-1,soft:!0,jitter:.3}),Xt(Di,n,e,t,{n:12,color:"#F4F0E0",sp:2.5,life:1,s0:.4,s1:.9,drag:3,soft:!0,a:.6,vy:.6})}function Yp(n,e,t=3){Xt(Di,n,.08,e,{n:t,color:"#D9C49A",sp:.8,upMin:.2,life:.5,s0:.15,s1:.4,drag:3,soft:!0,a:.35})}var we={ctx:null,master:null,sfxGain:null,music:null,buffers:{},muted:Wt.get("muted",!1),musicOn:Wt.get("music",!0),sfxOn:Wt.get("sfx",!0),noise:null,ad:!1},Kp=["shot_shotgun","shot_pop","shot_beam","shot_throw","boom","boom_big","hit","hit2","hit_wall","hurt","die","super_ready","super","gem","gem_drop","heal","empty","click","select","confirm","step","rustle","countdown","start","win","lose","respawn","kill"],Cu={};function $p(){return Promise.all(Kp.map(n=>fetch("assets/sfx/"+n+".mp3").then(e=>e.arrayBuffer()).then(e=>{Cu[n]=e}).catch(()=>{})))}function Ur(){if(we.ctx){we.ctx.state==="suspended"&&!we.ad&&!document.hidden&&we.ctx.resume();return}try{let n=new(window.AudioContext||window.webkitAudioContext);we.ctx=n;let e=n.createDynamicsCompressor();e.threshold.value=-10,e.knee.value=12,e.ratio.value=3,e.attack.value=.005,e.release.value=.2,e.connect(n.destination),we.master=n.createGain(),we.master.gain.value=we.muted?0:.8,we.master.connect(e),we.sfxGain=n.createGain(),we.sfxGain.gain.value=we.sfxOn?1:0,we.sfxGain.connect(we.master),we.noise=n.createBuffer(1,n.sampleRate,n.sampleRate);let t=we.noise.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1;for(let i of Kp)Cu[i]&&n.decodeAudioData(Cu[i].slice(0),s=>{we.buffers[i]=s},()=>{});Mb()}catch{we.ctx=null}}function Jp(n){we.sfxOn=n,Wt.set("sfx",n),we.sfxGain&&(we.sfxGain.gain.value=n?1:0)}function jp(n){we.musicOn=n,Wt.set("music",n),qt.gain&&(qt.gain.gain.value=n?qt.vol:0)}function Fc(n){if(we.ctx)try{n?we.ctx.suspend():we.ctx.resume()}catch{}}var wu={},Au=0,vb={shot_shotgun:.55,shot_pop:.4,shot_beam:.45,shot_throw:.7,boom:.75,boom_big:.95,hit:.6,hit2:.5,hit_wall:.35,hurt:.55,die:.7,super_ready:.5,super:.55,gem:.45,gem_drop:.45,heal:.3,empty:.4,click:.5,select:.5,confirm:.5,step:.18,rustle:.35,countdown:.6,start:.8,win:.7,lose:.7,respawn:.4,kill:.55};function st(n,e,t=1,i=1){let s=we.ctx;if(!s||we.muted||!we.sfxOn)return;let r=we.buffers[n];if(!r)return;let o=performance.now();if(wu[n]&&o-wu[n]<70||(wu[n]=o,Au>=12))return;let a=(vb[n]||.5)*t,c=0;if(e&&e!==A.me){let u=A.me&&A.me.alive?A.me.x:ct.position.x,d=A.me&&A.me.alive?A.me.z:ct.position.z,f=e.x-u,g=e.z-d,x=Math.hypot(f,g);if(a*=tt(1.4/(1+x*.12),0,1),a<.03)return;let m=ct.rotation.y;c=tt((f*Math.cos(m)-g*Math.sin(m))/(x+4),-.7,.7)}let l=s.createBufferSource();l.buffer=r,l.playbackRate.value=i;let h=s.createGain();if(h.gain.value=a,l.connect(h),c&&s.createStereoPanner){let u=s.createStereoPanner();u.pan.value=c,h.connect(u),u.connect(we.sfxGain)}else h.connect(we.sfxGain);Au++,l.onended=()=>Au--,l.start()}var qt={gain:null,next:0,step:0,timer:null,vol:.11},Ru=n=>440*Math.pow(2,(n-69)/12),yb=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]];function Dc(n,e,t,i,s,r){let o=we.ctx,a=o.createOscillator(),c=o.createGain();return a.type=e,a.frequency.setValueAtTime(t,n),c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(i,n+(r||.01)),c.gain.exponentialRampToValueAtTime(1e-4,n+(r||.01)+s),a.connect(c),c.connect(qt.gain),a.start(n),a.stop(n+s+.2),a}function Zp(n,e,t,i,s){let r=we.ctx,o=r.createBufferSource();o.buffer=we.noise;let a=r.createBiquadFilter();a.type=e,a.frequency.value=t;let c=r.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(i,n+.004),c.gain.exponentialRampToValueAtTime(1e-4,n+s),o.connect(a),a.connect(c),c.connect(qt.gain),o.start(n,Math.random()*.5),o.stop(n+s+.05)}function Mb(){if(qt.timer)return;qt.gain=we.ctx.createGain(),qt.gain.gain.value=we.musicOn?qt.vol:0;let n=we.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2400,n.Q.value=.5,qt.gain.connect(n),n.connect(we.master),qt.next=we.ctx.currentTime+.15,qt.timer=setInterval(bb,90)}function bb(){let n=we.ctx;if(!n||!we.musicOn||we.muted||n.state!=="running"){n&&(qt.next=Math.max(qt.next,n.currentTime+.05));return}let e=A.state==="play"||A.state==="countdown",t=e&&A.match&&A.match.hot,i=60/(e?t?142:128:96)/2;for(;qt.next<n.currentTime+.35;){let s=qt.next,r=qt.step,o=Math.floor(r/8)%4,a=r%8,c=yb[o],l=c[[0,1,2,1,2,1,0,2][a]]+12+(a===4&&o%2?12:0);if((!e||a%2===0||t)&&Dc(s,"triangle",Ru(l),e?.035:.045,e?.14:.3),(a===0||e&&a===4)&&Dc(s,"triangle",Ru(c[0]-12),e?.12:.07,i*(e?3.4:7),.02),!e&&a===0)for(let h of c)Dc(s,"sine",Ru(h),.016,i*7.6,.5);e&&(a%4===0&&Dc(s,"sine",130,.3,.16,.003).frequency.exponentialRampToValueAtTime(45,s+.14),a%4===2&&Zp(s,"bandpass",1900,.1,.12),Zp(s,"bandpass",6e3,a%2?.008:.016,.03)),qt.next+=i,qt.step++}}var Fi=.75,sm=3,Sb=.13,Eb=3,Tb=1.6,wb=0;function Ab(){return{mx:0,mz:0,aim:0,tx:0,tz:0,fire:!1,sup:!1,aiming:!1}}function rm(n){let e=si[n.hero],t={id:++wb,name:n.name,team:n.team,hero:n.hero,H:e,isMe:!!n.isMe,bot:null,level:n.level||1,x:0,z:0,vx:0,vz:0,kx:0,kz:0,aim:n.team===0?Math.PI:0,alive:!1,hp:e.hp,max:e.hp,ammo:qn,cdT:0,charge:0,regenT:0,spawnT:0,shieldT:0,deadT:0,respawnT:.01,atkT:9,supT:9,flash:0,stunT:0,revealT:0,inGrass:!1,gems:0,kills:0,deaths:0,dmgDone:0,lastHitBy:null,pendingBeam:null,inp:Ab(),V:null,tag:null,victory:!1,defeat:!1};return t.pow=1+(t.level-1)*.05,t.max=t.hp=Math.round(e.hp*t.pow),t.V=wc(n.hero),t.V.root.visible=!1,ye.add(t.V.root),A.fighters.push(t),t}function om(){for(let n of A.fighters)ye.remove(n.V.root),n.V.mesh.geometry.dispose(),n.V.mat.dispose(),n.tag&&n.tag.el.remove();A.fighters.length=0,A.me=null}function Or(n){return n===A.me?"me":A.me&&n.team===A.me.team?"ally":"foe"}function Uc(n,e){let t=X.spawns[n.team],i=e||t[(n.slot??0)%t.length];n.x=i.x,n.z=i.z,n.vx=n.vz=n.kx=n.kz=0,n.alive=!0,n.hp=n.max,n.ammo=qn,n.cdT=0,n.deadT=0,n.spawnT=0,n.shieldT=Tb,n.regenT=0,n.aim=n.team===0?Math.PI:0,n.V.yaw=n.aim,n.atkT=n.supT=9,n.spot=[0,0],n.pendingBeam=null,n.stunT=0,n.gems=0,n.V.root.visible=!0,n.V.root.scale.setScalar(1),Ac(n.V,Or(n)),hs.spawn(n.V),n.V.root.position.set(n.x,0,n.z),Xt(Ct,n.x,.3,n.z,{n:18,color:Or(n)==="foe"?"#FF7A6A":"#8FE0FF",sp:1.5,upMin:.6,upMax:1,vy:3,life:.7,s0:.25,s1:.05,drag:1.5,soft:!0}),zo(n.x,n.z,.2,1.3,.5,Or(n)==="foe"?"#FF5A4A":"#6FD8FF"),an("spawn",n)}var Qp=3.2,em=10,Rb=3.5,Pu=(n,e)=>e.spot&&e.spot[n]>0;function zr(n,e){if(e.team===n.team)return!0;if(!Cb(n.team,e))return!1;if(Pu(n.team,e))return!0;let t=e.x-n.x,i=e.z-n.z;return t*t+i*i<em*em||Lr(n.x,n.z,e.x,e.z)}function Cb(n,e){if(e.team===n||!e.alive||!e.inGrass||e.revealT>0)return!0;for(let t of A.fighters)if(t.alive&&t.team===n&&(t.x-e.x)**2+(t.z-e.z)**2<Qp*Qp)return!0;return!1}var Yn={x:0,z:0};function am(n,e){if(!n.alive){n.deadT+=e,A.match&&A.match.respawn&&!A.match.over&&(n.respawnT-=e,n.respawnT<=0&&Uc(n));return}let t=n.H,i=n.inp;if(n.spawnT+=e,n.atkT+=e,n.supT+=e,n.regenT+=e,n.shieldT=Math.max(0,n.shieldT-e),n.revealT=Math.max(0,n.revealT-e),n.flash=Math.max(0,n.flash-e*6),n.cdT=Math.max(0,n.cdT-e),n.stunT=Math.max(0,n.stunT-e),n.ammo<qn&&(n.ammo=Math.min(qn,n.ammo+e/t.attack.reload),n.ammo>=qn&&n.isMe&&an("ammoFull",n)),n.regenT>sm&&n.hp<n.max){let d=Math.min(n.max-n.hp,n.max*Sb*e);n.hp+=d,n.healAcc=(n.healAcc||0)+d,n.healAcc>400&&(n===A.me&&Tu(n.x,t.height+.3,n.z,n.healAcc,"heal"),n.healAcc=0)}let s=A.state!=="play"||n.stunT>0||n.pendingBeam,r=s?0:i.mx,o=s?0:i.mz,a=Math.hypot(r,o);a>1&&(r/=a,o/=a);let c=t.speed*(n.gems>0,1),l=1-Math.exp(-e*18);n.vx+=(r*c-n.vx)*l,n.vz+=(o*c-n.vz)*l;let h=Math.exp(-e*7);n.kx*=h,n.kz*=h,Yn.x=n.x+(n.vx+n.kx)*e,Yn.z=n.z+(n.vz+n.kz)*e,Do(Yn,t.rad);for(let d of A.fighters){if(d===n||!d.alive)continue;let f=Yn.x-d.x,g=Yn.z-d.z,x=f*f+g*g,m=t.rad+d.H.rad;if(x<m*m&&x>1e-6){let p=Math.sqrt(x),_=(m-p)*.5/p;Yn.x+=f*_,Yn.z+=g*_}}if(Do(Yn,t.rad),e>0){let d=(Yn.x-n.x)/e,f=(Yn.z-n.z)/e;n.vx=Ln(n.vx,d,.5),n.vz=Ln(n.vz,f,.5)}n.x=Yn.x,n.z=Yn.z;let u=Mc(n.x,n.z);u&&!n.inGrass&&n.V.root.visible&&Xt(Di,n.x,.6,n.z,{n:4,color:"#7FC24E",sp:1.2,life:.5,s0:.12,s1:.06,grav:4,drag:1}),n.inGrass=u,Math.hypot(n.vx,n.vz)>2&&Math.random()<e*4&&!n.H.hover&&!u&&Yp(n.x,n.z,1),(!s||n.pendingBeam)&&(n.pendingBeam||(n.aim=i.aim)),n.pendingBeam&&(n.pendingBeam.t-=e,n.pendingBeam.t<=0&&Ob(n)),s||(i.sup&&n.charge>=1?Lb(n,i.tx,i.tz):i.fire&&Pb(n,i.tx,i.tz)),i.fire=i.sup=!1}function Fs(n){return n.alive&&n.ammo>=1&&n.cdT<=0&&!n.pendingBeam&&A.state==="play"}function Lu(n,e){return n.V.muzzle.getWorldPosition(e),e.y=Fi,e}var Ut=new R;function Pb(n,e,t){if(!Fs(n)){n.isMe&&n.ammo<1&&n.cdT<=0&&an("empty",n);return}let i=n.H,s=i.attack;n.ammo-=1,n.cdT=s.cd,n.atkT=0,n.regenT=0,n.revealT=Math.max(n.revealT,1);let r=Math.atan2(e-n.x,t-n.z);n.aim=r,n.V.yaw=r,hs.attack(n.V),cm(n,s,r,e,t,!1),an("attack",n,!1)}function Lb(n,e,t){if(!n.alive||n.pendingBeam||A.state!=="play")return;let i=n.H,s=i.super;n.charge=0,n.supT=0,n.atkT=0,n.regenT=0,n.revealT=Math.max(n.revealT,1.2);let r=Math.atan2(e-n.x,t-n.z);if(n.aim=r,n.V.yaw=r,hs.super(n.V),s.kind==="beam"){n.pendingBeam={t:s.windup,aim:r},an("super",n,!0),st("super",n);return}cm(n,s,r,e,t,!0),an("super",n,!1),st("super",n)}function cm(n,e,t,i,s,r){Lu(n,Ut);let o=n.pow;if(e.kind==="fan"){for(let a=0;a<e.count;a++){let c=t+(e.count>1?(a/(e.count-1)-.5)*e.spread:0)+F(-.015,.015);nm(n,Ut.x,Ut.z,c,e,e.dmg*o,r)}Xt(Ct,Ut.x,Ut.y,Ut.z,{n:r?16:8,color:e.color,sp:r?7:4,vx:Math.sin(t)*4,vz:Math.cos(t)*4,life:.22,s0:.35,s1:.05,drag:6}),Xt(Di,Ut.x,Ut.y,Ut.z,{n:r?10:5,color:"#F2E8D0",sp:1.5,vx:Math.sin(t)*3,vz:Math.cos(t)*3,life:.5,s0:.18,s1:.5,drag:4,soft:!0,a:.6}),r&&(n.kx-=Math.sin(t)*7,n.kz-=Math.cos(t)*7,A.shake=Math.max(A.shake,n.isMe?.5:0)),st(r?"boom":"shot_shotgun",n)}else if(e.kind==="needle")nm(n,Ut.x,Ut.z,t,e,e.dmg*o,r),Xt(Ct,Ut.x,Ut.y,Ut.z,{n:6,color:e.color,sp:3,life:.18,s0:.3,s1:.05,drag:6}),st("shot_beam",n,.6);else if(e.kind==="lob"){let a=tt(Math.hypot(i-n.x,s-n.z),1.5,e.range);im(n,n.x+Math.sin(t)*a,n.z+Math.cos(t)*a,e,e.flight*(.65+.35*a/e.range),0,r),st("shot_throw",n)}else if(e.kind==="barrage"){let a=tt(Math.hypot(i-n.x,s-n.z),3,e.range);for(let c=0;c<e.count;c++){let l=(c-(e.count-1)/2)*e.step,h=tt(a+l,1.5,e.range+e.step);im(n,n.x+Math.sin(t)*h+F(-.3,.3),n.z+Math.cos(t)*h+F(-.3,.3),e,e.flight*(.7+.3*h/e.range),c*.08,!0)}st("shot_throw",n)}}var lm=new Tt(1,10,8),hm=new _r(.5,2.2,3,8);hm.rotateX(Math.PI/2);var tm={},Iu=(n,e=2.4)=>tm[n+e]||(tm[n+e]=new et({color:new ne(n).multiplyScalar(e),toneMapped:!1}));function nm(n,e,t,i,s,r,o){let a=new _e(s.kind==="needle"?hm:lm,Iu(s.color,o?3:2.2));a.scale.setScalar(s.size||.2),a.position.set(e,Fi,t),a.rotation.y=i,ye.add(a),A.shots.push({owner:n,team:n.team,x:e,z:t,x0:n.x,z0:n.z,vx:Math.sin(i)*s.speed,vz:Math.cos(i)*s.speed,range:s.range,dist:0,dmg:r,W:s,isSuper:o,m:a,knock:s.knock||0})}function um(n,e,t,i,s,r){let o=t-n,a=i-e,c=o*o+a*a,l=c>0?((s-n)*o+(r-e)*a)/c:0;l=tt(l,0,1);let h=n+o*l-s,u=e+a*l-r;return h*h+u*u}function dm(n){for(let e=A.shots.length-1;e>=0;e--){let t=A.shots[e],i=Math.hypot(t.vx,t.vz)*n,s=t.x+t.vx*n,r=t.z+t.vz*n,o=!1;if(t.dist+i>=t.range){let c=(t.range-t.dist)/i;s=t.x+t.vx*n*c,r=t.z+t.vz*n*c,o=!0}let a=ii(t.x,t.z,s,r);a>=0&&(s=t.x+(s-t.x)*a,r=t.z+(r-t.z)*a,o=!0,Ic(s,Fi,r,t.W.color),st("hit_wall",{x:s,z:r},.35));for(let c of A.fighters){if(!c.alive||c.team===t.team)continue;let l=c.H.rad+(t.W.size||.2)*.8;if(um(t.x,t.z,s,r,c.x,c.z)<l*l){let h=t.dmg;if(t.W.dmgFar&&(h=Ln(t.dmg,t.W.dmgFar*t.owner.pow,tt((t.dist+i)/t.range,0,1))),Br(c,h,t.owner,t.isSuper),t.knock){let u=Math.hypot(t.vx,t.vz);c.kx+=t.vx/u*t.knock*2.2,c.kz+=t.vz/u*t.knock*2.2,c.stunT=Math.max(c.stunT,.25)}Ic(c.x,Fi+.1,c.z,t.W.color),o=!0,s=c.x,r=c.z;break}}t.dist+=Math.hypot(s-t.x,r-t.z),t.x=s,t.z=r,t.m.position.set(s,Fi,r),Math.random()<.7&&Ct.emit({x:s,y:Fi,z:r,vx:0,vy:0,vz:0,life:t.W.kind==="needle"?.3:.16,t:0,s0:(t.W.size||.2)*(t.W.kind==="needle"?1.6:1.4),s1:.02,r:1,g:.8,b:.4,a:.7,grav:0,drag:0,soft:1}),o&&(ye.remove(t.m),A.shots.splice(e,1))}}var Ib=new Tt(.16,12,10),Db=ht({color:"#26262E",roughness:.35,metalness:.2}),fm=new ji(.9,1,36);fm.rotateX(-Math.PI/2);function im(n,e,t,i,s,r,o){let a=new _e(Ib,Db);a.castShadow=!0;let c=new _e(lm,Iu("#FFC04A",3));c.scale.setScalar(.05),c.position.y=.17,a.add(c),a.visible=!1,ye.add(a);let l=new _e(fm,new et({color:Or(n)==="foe"?"#FF4A3A":"#5FC8FF",transparent:!0,opacity:0,depthWrite:!1}));l.position.set(e,.05,t),l.scale.setScalar(i.radius),l.renderOrder=3,ye.add(l),Lu(n,Ut),A.lobs.push({owner:n,team:n.team,x0:Ut.x,z0:Ut.z,y0:1,x1:e,z1:t,T:s,t:-r,W:i,isSuper:o,m:a,mark:l,h:3.2+Math.hypot(e-n.x,t-n.z)*.2})}function pm(n){for(let e=A.lobs.length-1;e>=0;e--){let t=A.lobs[e];if(t.t+=n,t.t<0)continue;let i=Math.min(1,t.t/t.T),s=Ln(t.x0,t.x1,i),r=Ln(t.z0,t.z1,i),o=Ln(t.y0,.15,i)+Math.sin(i*Math.PI)*t.h;t.m.visible=!0,t.m.position.set(s,o,r),t.m.rotation.x+=n*9,t.m.rotation.z+=n*5,t.mark.material.opacity=.25+.55*i,t.mark.scale.setScalar(t.W.radius*(1.25-.25*i)),Math.random()<.6&&Ct.emit({x:s,y:o+.17,z:r,vx:F(-.4,.4),vy:.6,vz:F(-.4,.4),life:.3,t:0,s0:.12,s1:.02,r:1,g:.75,b:.3,a:1,grav:0,drag:1,soft:0}),i>=1&&(ye.remove(t.m),ye.remove(t.mark),t.mark.material.dispose(),A.lobs.splice(e,1),Fb(t.owner,t.x1,t.z1,t.W,t.isSuper))}}function Fb(n,e,t,i,s){Xp(e,t,i.radius,i.color),st(s?"boom_big":"boom",{x:e,z:t});for(let r of A.fighters){if(!r.alive||r.team===n.team)continue;let o=Math.hypot(r.x-e,r.z-t);if(!(o>i.radius+r.H.rad)&&(Br(r,i.dmg*n.pow,n,s),i.knock)){let a=o||1;r.kx+=(r.x-e)/a*i.knock*3,r.kz+=(r.z-t)/a*i.knock*3,r.stunT=Math.max(r.stunT,.3)}}i.puddle&&Ub(n,e,t,i.puddle)}var mm=new rn(1,32);mm.rotateX(-Math.PI/2);var Du={uTime:{value:0}},Nb=new bt({transparent:!0,depthWrite:!1,uniforms:Object.assign({uK:{value:1}},Du),vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uTime; uniform float uK; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
    float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
    void main(){ vec2 p = vUv - 0.5; float d = length(p) * 2.0;
      float e = n(p * 7.0 + uTime * 0.7) * 0.25 + n(p * 15.0 - uTime) * 0.12;
      float a = 1.0 - smoothstep(0.82, 1.0, d + e * 0.6);
      float bub = smoothstep(0.62, 0.8, n(p * 12.0 + vec2(uTime * 0.5, -uTime * 0.8)));
      vec3 col = mix(vec3(0.95, 0.35, 0.05), vec3(1.0, 0.8, 0.25), bub + (1.0 - d) * 0.4);
      gl_FragColor = vec4(col * 1.6, a * 0.78 * uK);
      #include <colorspace_fragment>
    }`});function Ub(n,e,t,i){let s=new _e(mm,Nb.clone());s.material.uniforms.uTime=Du.uTime,s.position.set(e,.045,t),s.scale.setScalar(.2),s.renderOrder=3,ye.add(s),A.puddles.push({owner:n,team:n.team,x:e,z:t,r:i.r,dps:i.dps*n.pow,t:0,life:i.t,tick:0,m:s})}function gm(n){Du.uTime.value+=n;for(let e=A.puddles.length-1;e>=0;e--){let t=A.puddles[e];t.t+=n,t.tick-=n;let i=t.t/t.life;if(t.m.scale.setScalar(t.r*Math.min(1,t.t/.15)),t.m.material.uniforms.uK.value=i>.75?(1-i)/.25:1,Math.random()<n*14&&Ct.emit({x:t.x+F(-t.r,t.r)*.7,y:.1,z:t.z+F(-t.r,t.r)*.7,vx:0,vy:F(.6,1.4),vz:0,life:.5,t:0,s0:.14,s1:.02,r:1,g:.6,b:.15,a:1,grav:0,drag:.5,soft:1}),t.tick<=0){t.tick=.25;for(let s of A.fighters)s.alive&&s.team!==t.team&&(s.x-t.x)**2+(s.z-t.z)**2<(t.r+s.H.rad*.5)**2&&Br(s,t.dps*.25,t.owner,!1,!0)}t.t>=t.life&&(ye.remove(t.m),t.m.material.dispose(),A.puddles.splice(e,1))}}var Nc=new Hn(1,1,1,12,1,!0);Nc.rotateX(Math.PI/2);Nc.translate(0,0,.5);function Ob(n){let e=n.H.super,t=n.pendingBeam.aim;n.pendingBeam=null,n.aim=t,Lu(n,Ut);let i=Ut.x,s=Ut.z,r=i+Math.sin(t)*e.range,o=s+Math.cos(t)*e.range;for(let l of A.fighters){if(!l.alive||l.team===n.team)continue;let h=e.width/2+l.H.rad;um(i,s,r,o,l.x,l.z)<h*h&&(Br(l,e.dmg*n.pow,n,!0),l.kx+=Math.sin(t)*6,l.kz+=Math.cos(t)*6,Ic(l.x,Fi,l.z,e.color))}let a=new _e(Nc,Iu("#FFF6C0",3)),c=new _e(Nc,new et({color:new ne(e.color).multiplyScalar(2),transparent:!0,opacity:.55,depthWrite:!1,blending:ei}));for(let l of[a,c])l.position.set(i,Fi+.05,s),l.rotation.y=t,ye.add(l);a.scale.set(.08,.08,e.range),c.scale.set(e.width*.5,e.width*.5,e.range),A.beams.push({core:a,outer:c,t:0,life:.45,w:e.width});for(let l=0;l<e.range;l+=.6)Xt(Ct,i+Math.sin(t)*l,Fi,s+Math.cos(t)*l,{n:1,color:e.color,sp:1.5,life:.5,s0:.25,s1:.02,drag:2,soft:!0});n.kx-=Math.sin(t)*5,n.kz-=Math.cos(t)*5,hs.super(n.V),n.isMe&&(A.shake=Math.max(A.shake,.4)),st("shot_beam",n,1.2)}function xm(n){for(let e=A.beams.length-1;e>=0;e--){let t=A.beams[e];t.t+=n;let i=t.t/t.life,s=(1-i)*t.w*.5;t.outer.scale.x=t.outer.scale.y=Math.max(.001,s),t.core.scale.x=t.core.scale.y=Math.max(.001,.08*(1-i)),t.outer.material.opacity=.55*(1-i),i>=1&&(ye.remove(t.core),ye.remove(t.outer),t.outer.material.dispose(),A.beams.splice(e,1))}}function Br(n,e,t,i,s){if(!n.alive||n.shieldT>0||e<=0||A.match&&A.match.over)return 0;e=Math.round(e),n.hp-=e,n.flash=1,n.regenT=0,n.revealT=Math.max(n.revealT,.6),n.lastHitBy=t,t&&t.team!==n.team&&(n.spot=n.spot||[0,0],n.spot[t.team]=Rb),t&&(t.dmgDone+=e,t.regenT=Math.min(t.regenT,sm*.5),!i&&t.charge<1&&(t.charge=Math.min(1,t.charge+e/t.H.super.charge),t.charge>=1&&an("superReady",t))),s||hs.hurt(n.V);let r=A.me?A.me.team:0;return(A.me&&zr(A.me,n)||n===A.me||t===A.me)&&Tu(n.x,n.H.height+.25,n.z,e,n===A.me?"me":t===A.me?"mine":""),an("damage",n,e,t),n.hp<=0&&zb(n,t),e}function zb(n,e){n.hp=0,n.alive=!1,n.deadT=0,n.deaths++,n.respawnT=Eb,n.pendingBeam=null,e&&e!==n&&e.kills++,qp(n.x,.8,n.z,n.H.color,34),st("die",n),an("kill",n,e)}function _m(n,e){let t=A.me?A.me.team:0;for(let i of A.fighters){let s=i.V;i.spot&&(i.spot[0]=Math.max(0,i.spot[0]-n),i.spot[1]=Math.max(0,i.spot[1]-n)),i.seen=A.me?zr(A.me,i):!0,Rc(s,i,n,e),i.alive&&!i.seen&&(s.root.visible=!1);let r=i.alive&&i.inGrass&&i.team===t?.55:1;if(i===A.me&&A.state!=="menu"){let a=ct.position.distanceTo(s.root.position)-.6;a<2.2&&(r=Math.min(r,Math.max(.15,(a-.6)/1.6)))}let o=r<1;s.mat.transparent!==o&&(s.mat.transparent=o,s.mat.depthWrite=!o,s.ol.visible=!o&&ue.level==="high"),s.mat.opacity=r,i.shieldT>0?s.mat.userData.u.uTint.value.setScalar(.12+Math.sin(e*20)*.08):(s.id!=="wasp"||i.supT>=1.2)&&s.mat.userData.u.uTint.value.setScalar(0)}}var Bb={easy:{err:.22,react:.6,lead:.4,dodge:.2},normal:{err:.11,react:.35,lead:.75,dodge:.5},hard:{err:.05,react:.18,lead:1,dodge:.85}},kb={shroom:.5,beetle:.72,wasp:.82};function Fu(n="normal"){return{S:Bb[n],path:null,pathT:0,gx:null,gz:null,mode:"idle",target:null,seenT:0,mem:new Map,strafe:F()<.5?-1:1,strafeT:F(.6,1.6),thinkT:0,holdX:0,holdZ:0,stuck:0,lx:0,lz:0}}var Ns=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function Bo(n,e,t,i){let s=n.bot;if(s.pathT-=i,(!s.path||s.pathT<=0||Math.hypot((s.gx??1e9)-e,(s.gz??1e9)-t)>1.2)&&(s.path=mu(n.x,n.z,e,t)?[{x:e,z:t}]:Pp(n.x,n.z,e,t),s.gx=e,s.gz=t,s.pathT=F(.5,.9)),!s.path||!s.path.length)return[0,0];let r=s.path[0];for(;s.path.length>1&&Math.hypot(r.x-n.x,r.z-n.z)<.45;)s.path.shift(),r=s.path[0];let o=r.x-n.x,a=r.z-n.z,c=Math.hypot(o,a);return c<.25?[0,0]:[o/c,a/c]}function vm(n,e){let t=n.bot,i=n.H,s=n.inp,r=A.match;if(!n.alive||!r)return;let o=A.time,a=null,c=-1e9;for(let p of A.fighters){if(!p.alive||p.team===n.team)continue;if(zr(n,p))t.mem.set(p.id,{x:p.x,z:p.z,t:o,o:p});else continue;let v=-Ns(n,p)+(p.gems||0)*1.2+(1-p.hp/p.max)*4+(p===t.target?2:0);v>c&&(c=v,a=p)}a!==t.target?(t.target=a,t.seenT=0):t.seenT+=e;let l=t.target,h=r.count[n.team],u=r.count[1-n.team],d=X.spawns[n.team][1]||X.spawns[n.team][0];if(t.thinkT-=e,t.thinkT<=0){t.thinkT=F(.2,.35);let p=n.hp<n.max*.42;n.gems>=3&&p?t.mode="retreat":r.cd&&r.cd.team===n.team&&n.gems>0?t.mode=l&&Ns(n,l)<i.attack.range*.8?"fight":"hold":p&&l&&Ns(n,l)<6&&n.hp<l.hp?t.mode="retreat":l&&Ns(n,l)<i.attack.range*1.35?t.mode="fight":A.pickups.length&&!(r.cd&&r.cd.team===n.team)?t.mode="collect":r.cd&&r.cd.team!==n.team?t.mode="hunt":t.mode="patrol"}let f=0,g=0;if(t.mode==="retreat"||t.mode==="hold"){let p=d.x+(n.slot-1)*2.5,_=d.z+(n.team===0?-3:3);[f,g]=Bo(n,p,_,e),Math.hypot(n.x-p,n.z-_)<1.5&&(f=Math.sin(o*1.3+n.id)*.4,g=0)}else if(t.mode==="collect"){let p=null,_=1e9;for(let v of A.pickups){let y=Math.hypot(v.x-n.x,v.z-n.z)+(v.landed?0:1);y<_&&(_=y,p=v)}p&&([f,g]=Bo(n,p.x,p.z,e))}else if(t.mode==="hunt"){let p=null;for(let C of A.fighters)C.alive&&C.team!==n.team&&(!p||C.gems>p.gems)&&(p=C);let _=p&&t.mem.get(p.id),v=_&&o-_.t<4?_.x:X.mine.x,y=_&&o-_.t<4?_.z:X.mine.z+(n.team===0?-4:4);[f,g]=Bo(n,v,y,e)}else if(t.mode==="patrol"){let p=n.team===0?1:-1,_=X.mine.x+(n.slot-1)*3.2,v=X.mine.z+p*(2.5+(n.slot===1?0:1.5));[f,g]=Bo(n,_,v,e)}if(l&&(t.mode==="fight"||Ns(n,l)<i.attack.range)){let p=Ns(n,l),_=i.attack.range*kb[n.hero],v=(l.x-n.x)/(p||1),y=(l.z-n.z)/(p||1);if(t.strafeT-=e,t.strafeT<=0&&(t.strafeT=F(.5,1.4),t.strafe=-t.strafe),t.mode==="fight"){let C=0,b=0;p>_+1||!pu(n.x,n.z,l.x,l.z)&&n.hero!=="beetle"?[C,b]=Bo(n,l.x,l.z,e):p<_-1.5&&(C=-v,b=-y),f=C*.9+-y*t.strafe*.7,g=b*.9+v*t.strafe*.7}}if(Math.random()<t.S.dodge)for(let p of A.shots){if(p.team===n.team)continue;let _=n.x-p.x,v=n.z-p.z,y=Math.hypot(p.vx,p.vz),C=(_*p.vx+v*p.vz)/y;if(C<0||C>6)continue;let b=(_*p.vz-v*p.vx)/y;if(Math.abs(b)<1.1){let P=b>=0?1:-1;f+=p.vz/y*P*1.4,g+=-p.vx/y*P*1.4;break}}for(let p of A.puddles)if(p.team!==n.team){let _=n.x-p.x,v=n.z-p.z,y=Math.hypot(_,v);y<p.r+.5&&(f+=_/(y||1)*1.5,g+=v/(y||1)*1.5)}let x=Math.hypot(n.x-t.lx,n.z-t.lz);t.lx=n.x,t.lz=n.z,Math.hypot(f,g)>.3&&x<.01?t.stuck+=e:t.stuck=Math.max(0,t.stuck-e),t.stuck>.6&&(t.path=null,f+=F(-1,1),g+=F(-1,1),t.stuck>1.2&&(t.stuck=0));let m=Math.hypot(f,g);if(m>1&&(f/=m,g/=m),s.mx=f,s.mz=g,m>.1&&(s.aim=Math.atan2(f,g)),s.fire=s.sup=!1,l){let p=Ns(n,l),_=i.attack,v=i.super,y=_.speed||_.range/(_.flight||.8),C=(_.kind==="lob"?_.flight*(.65+.35*p/_.range):p/y)*t.S.lead,b=l.x+l.vx*C,P=l.z+l.vz*C,D=t.S.err*(1+(l.inGrass?.5:0)),M=Math.atan2(b-n.x,P-n.z)+F(-D,D);b=n.x+Math.sin(M)*p,P=n.z+Math.cos(M)*p,s.aim=M,s.tx=b,s.tz=P;let E=pu(n.x,n.z,l.x,l.z),N=t.seenT>t.S.react;if(N&&n.charge>=1&&(v.kind==="fan"&&p<v.range*.75&&E||v.kind==="barrage"&&p<v.range||v.kind==="beam"&&p<v.range*.9)&&(s.sup=!0),!s.sup&&N&&Fs(n)){let V=p<_.range*(_.kind==="fan"?.85:_.kind==="lob"?1:.95),z=n.ammo>=2||p<_.range*.6||l.hp<l.max*.4;V&&(E||_.kind==="lob")&&z&&(s.fire=!0)}}else if(n.hero==="beetle"&&Fs(n)&&n.ammo>=2.5)for(let p of t.mem.values()){if(!p.o.alive||o-p.t>2.5||o-p.t<.4)continue;if(Math.hypot(p.x-n.x,p.z-n.z)<i.attack.range&&(Mc(p.x,p.z)||!Lr(n.x,n.z,p.x,p.z))){s.aim=Math.atan2(p.x-n.x,p.z-n.z),s.tx=p.x,s.tz=p.z,s.fire=!0;break}}}var kr={goal:10,hold:15,interval:5,first:4,dur:180},Zn=null,ym=new qa(.2,0),Hb=ht({color:"#B583FF",emissive:"#8A4DFF",emissiveIntensity:1.6,roughness:.2,flatShading:!0}),Gb=new et({color:new ne("#E9D8FF").multiplyScalar(2),toneMapped:!1}),Vb=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(0,0,0,.45)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Bn(n)})(),bm=new pn(.7,.7);bm.rotateX(-Math.PI/2);var Wb=new et({map:Vb,transparent:!0,depthWrite:!1});function Sm(){Zn&&ye.remove(Zn.g);let n=new Dt;n.position.set(X.mine.x,0,X.mine.z);let e=new _e(new Hn(.95,1.35,.32,24),ht({color:"#6E5A3E",roughness:.95}));e.position.y=.12,e.receiveShadow=e.castShadow=!0,n.add(e);let t=new _e(new Qi(.95,.16,8,28),ht({color:"#5E9E3A",roughness:.9}));t.rotation.x=Math.PI/2,t.position.y=.27,n.add(t);let i=document.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d"),r=s.createRadialGradient(128,128,10,128,128,128);r.addColorStop(0,"#F4E8FF"),r.addColorStop(.25,"#B58AFF"),r.addColorStop(.6,"#5A2AB8"),r.addColorStop(.9,"#2A0F5A"),r.addColorStop(1,"#1A0A30"),s.fillStyle=r,s.fillRect(0,0,256,256),s.globalCompositeOperation="lighter";for(let g=0;g<5;g++){s.strokeStyle="rgba(200,160,255,.35)",s.lineWidth=6,s.beginPath();for(let x=0;x<2.6;x+=.05){let m=18+x*40;s.lineTo(128+Math.cos(x+g*1.256)*m,128+Math.sin(x+g*1.256)*m)}s.stroke()}let o=new Bn(i);o.colorSpace=lt;let a=new et({map:o,color:"#FFFFFF"}),c=new _e(new rn(.78,32),a);c.rotation.x=-Math.PI/2,c.position.y=.29,n.add(c);let l=ht({color:"#F1E6FF",roughness:.6}),h=ht({color:"#B07BFF",emissive:"#7A3DFF",emissiveIntensity:.9,roughness:.4}),u=new Hn(.05,.07,1,8),d=new Tt(1,14,8,0,Le,0,Math.PI/2),f=[];for(let g=0;g<9;g++){let x=g/9*Le+F(-.15,.15),m=F(1.2,1.5),p=F(.25,.55),_=new _e(u,l);_.scale.set(1,p,1),_.position.set(Math.cos(x)*m,p/2,Math.sin(x)*m),_.castShadow=!0,n.add(_);let v=new _e(d,h);v.scale.set(F(.14,.22),F(.1,.16),F(.14,.22)),v.position.set(Math.cos(x)*m,p,Math.sin(x)*m),v.castShadow=!0,n.add(v),f.push(v)}ye.add(n),Zn={g:n,hole:c,holeMat:a,caps:f,pulse:0}}function Em(n,e,t,i,s=4){let r=new _e(ym,Hb);r.castShadow=!0;let o=new _e(ym,Gb);o.scale.setScalar(.5),r.add(o);let a=new _e(bm,Wb);a.renderOrder=1,ye.add(r,a),A.pickups.push({x:n,z:e,y:.5,vx:t,vz:i,vy:s,t:0,m:r,sh:a,landed:!1,ph:F(0,Le)})}function Tm(n){let e=A.pickups[n];ye.remove(e.m,e.sh),A.pickups.splice(n,1)}function Nu(){for(let n=A.pickups.length-1;n>=0;n--)Tm(n)}function wm(){Nu(),A.match={mode:"spores",t:0,dur:kr.dur,over:!1,winner:null,respawn:!0,count:[0,0],cd:null,mineT:kr.first,hot:!1,spawned:0}}Fn("kill",n=>{if(!A.match||A.match.mode!=="spores"||!n.gems)return;let e=n.gems;n.gems=0;for(let t=0;t<e;t++){let i=t/e*Le+F(-.3,.3),s=F(1.5,3.2);Em(n.x,n.z,Math.sin(i)*s,Math.cos(i)*s,F(3,5))}st("gem_drop",n)});var ko={x:0,z:0};function Am(n,e){let t=A.match;if(!t||t.mode!=="spores")return;if(Zn){Zn.pulse=Math.max(0,Zn.pulse-n*1.5);let r=.9+Math.sin(e*3)*.12+Zn.pulse*1.2;Zn.holeMat.color.setScalar(r),Zn.hole.rotation.z=e*.6,Math.random()<n*6&&Ct.emit({x:X.mine.x+F(-.5,.5),y:.35,z:X.mine.z+F(-.5,.5),vx:0,vy:F(.5,1.2),vz:0,life:1.1,t:0,s0:.1,s1:.02,r:.75,g:.55,b:1,a:1,grav:0,drag:.3,soft:1}),Zn.caps.forEach((o,a)=>{o.position.y+=Math.sin(e*2+a)*8e-4})}if(A.state==="play"&&!t.over&&(t.t+=n,t.mineT-=n,t.mineT<=0)){t.mineT=kr.interval,t.spawned++;let r=F(0,Le),o=F(.8,2.2);Em(X.mine.x,X.mine.z,Math.sin(r)*o,Math.cos(r)*o,5.5),Zn&&(Zn.pulse=1),Xt(Ct,X.mine.x,.5,X.mine.z,{n:16,color:"#C9A0FF",sp:2.5,upMin:.5,vy:2,life:.7,s0:.25,s1:.04,soft:!0}),zo(X.mine.x,X.mine.z,.5,2.2,.6,"#B583FF"),st("respawn",X.mine,.6)}for(let r=A.pickups.length-1;r>=0;r--){let o=A.pickups[r];o.t+=n,o.landed||(o.vy-=16*n,o.x+=o.vx*n,o.z+=o.vz*n,o.y+=o.vy*n,ko.x=o.x,ko.z=o.z,Do(ko,.25)&&(o.x=ko.x,o.z=ko.z,o.vx*=-.4,o.vz*=-.4),o.y<.45&&(o.y=.45,Math.abs(o.vy)>2?(o.vy=-o.vy*.4,o.vx*=.6,o.vz*=.6):o.landed=!0));let a=o.landed?Math.sin(e*3+o.ph)*.08:0;if(o.m.position.set(o.x,o.y+a,o.z),o.m.rotation.y=e*2+o.ph,o.m.rotation.x=.3,o.sh.position.set(o.x,.04,o.z),Math.random()<n*3&&Ct.emit({x:o.x+F(-.2,.2),y:o.y,z:o.z+F(-.2,.2),vx:0,vy:.5,vz:0,life:.6,t:0,s0:.08,s1:.01,r:.75,g:.6,b:1,a:1,grav:0,drag:.5,soft:1}),!(o.t<.35||A.state!=="play")){for(let c of A.fighters)if(!(!c.alive||(c.x-o.x)**2+(c.z-o.z)**2>.85*.85)){c.gems++,Tm(r),Xt(Ct,c.x,1,c.z,{n:10,color:"#C9A0FF",sp:2,vy:1.5,life:.4,s0:.16,s1:.02,soft:!0}),st("gem",c,c===A.me?1:.7,1+Math.min(10,c.gems)*.03),an("pickup",c);break}}}t.count[0]=t.count[1]=0;for(let r of A.fighters)r.alive&&(t.count[r.team]+=r.gems);if(t.over)return;let i=t.count,s=i[0]>=kr.goal&&i[0]>i[1]?0:i[1]>=kr.goal&&i[1]>i[0]?1:-1;if(s<0)t.cd&&(an("countdownStop",t.cd.team),t.cd=null);else if(!t.cd||t.cd.team!==s)t.cd={team:s,t:kr.hold},an("countdownStart",s);else if(A.state==="play"){let r=Math.ceil(t.cd.t);if(t.cd.t-=n,Math.ceil(t.cd.t)!==r&&t.cd.t>0&&an("countdownTick",Math.ceil(t.cd.t)),t.cd.t<=0)return Mm(s,"spores")}t.hot=!!t.cd||t.dur-t.t<30,t.t>=t.dur&&!t.cd&&Mm(i[0]>i[1]?0:i[1]>i[0]?1:-1,"time")}function Mm(n,e){let t=A.match;t.over=!0,t.winner=n,t.why=e,an("matchOver",n,e)}var Ni=null,Rm={t:{value:0}},Oc=[],Uu=[];function Os(n,e){let t=new ne(e),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return n.setAttribute("color",new rt(s,3)),n}var Hr=(n,e,t,i,s=1,r=s,o=s,a=0,c=0)=>(n.applyMatrix4(new Ce().compose(new R(e,t,i),new Ht().setFromEuler(new hi(a,0,c)),new R(s,r,o))),n);function Us(n,e,t){let{x:i,z:s,h:r,r:o,cap:a,stem:c,glowCol:l,spots:h}=t,u=t.lean||0,d=[];for(let _=0;_<=8;_++){let v=_/8;d.push(new ee(o*(.16+.1*(1-v)+(v<.12?.12*(1-v/.12):0)),v*r))}let f=new Ai(d,12),g=f.attributes.position;for(let _=0;_<g.count;_++){let v=g.getY(_)/r;g.setX(_,g.getX(_)+u*v*v*r*.25)}f.computeVertexNormals(),n.push(Os(Hr(f,i,0,s),c)),n.push(Os(Hr(new Qi(o*.28,o*.06,6,16),i+u*.62*.62*r*.25,r*.62,s,1,1,.6,Math.PI/2),c));let x=i+u*r*.25,m=r;n.push(Os(Hr(new Tt(o,20,8,0,Le,0,Math.PI/2),x,m-o*.08,s,1,t.flat||.55,1,t.tilt||0,(t.tilt||0)*.6),a));let p=Os(Hr(new rn(o*.98,20),x,m-o*.08,s,1,1,1,Math.PI/2+(t.tilt||0)),l||"#E8D6B0");if((l?e:n).push(p),h)for(let _=0;_<h;_++){let v=F(0,Le),y=F(.25,1.2),C=Math.cos(v)*Math.cos(y)*o,b=Math.sin(y)*o*(t.flat||.55),P=Math.sin(v)*Math.cos(y)*o,D=F(.06,.12)*o,M=Hr(new Tt(1,8,5),x+C,m-o*.08+b,s+P,D,D*.35,D);(t.glowSpots?e:n).push(Os(M,t.glowSpots?l:"#FFF6E6"))}if(l)for(let _=0;_<9;_++){let v=.08+_*.09,y=_*1.9;e.push(Os(Hr(new Tt(o*.035,6,4),i+u*v*v*r*.25+Math.cos(y)*o*.22,v*r,s+Math.sin(y)*o*.22),l))}l&&Oc.push({x,y:m-o*.2,z:s,r:o,col:new ne(l),spore:!0})}function Cm(){Ni&&(ye.remove(Ni),Ni.traverse(s=>s.geometry&&s.geometry.dispose())),Oc.length=0,Uu.length=0,Ni=new Dt,ye.add(Ni);let n=[],e=[];hc(4242,()=>{let s=X.hx,r=X.hz;Us(n,e,{x:-s-30,z:4,h:26,r:9.5,cap:"#C8322A",stem:"#EADCC4",spots:22,lean:.35,tilt:.08}),Us(n,e,{x:-s-22,z:-r-22,h:19,r:7,cap:"#8A5230",stem:"#D9C6A0",lean:-.4,flat:.62}),Us(n,e,{x:s+28,z:-r-10,h:21,r:7.5,cap:"#2E6E8E",stem:"#CFE6EE",glowCol:"#5FE8FF",spots:14,glowSpots:!0,lean:.5,tilt:-.1}),Us(n,e,{x:s+24,z:r+18,h:15,r:5.5,cap:"#5B3A86",stem:"#E6DAF2",glowCol:"#C68BFF",spots:10,glowSpots:!0,lean:-.6}),Us(n,e,{x:s+33,z:r+26,h:10,r:3.8,cap:"#6B3F96",stem:"#E6DAF2",glowCol:"#C68BFF",lean:.8}),Us(n,e,{x:-6,z:r+40,h:23,r:8,cap:"#B23A2E",stem:"#EADCC4",spots:18,lean:-.25,flat:.5}),Us(n,e,{x:10,z:-r-38,h:17,r:6,cap:"#2F7A6E",stem:"#D6EEE6",glowCol:"#7DFFC8",spots:12,glowSpots:!0,lean:.3})});let t=new _e(Li(n),new vr({vertexColors:!0})),i=new _e(Li(e),new et({vertexColors:!0,fog:!1,toneMapped:!1,color:new ne(1.6,1.6,1.6)}));n.forEach(s=>s.dispose()),e.forEach(s=>s.dispose()),Ni.add(t,i),Xb(),qb()}function Xb(){let n=X.hx,e=X.hz,t=[[-n-7,-7,"#B98BFF"],[n+8,8,"#6FF0FF"],[5,-e-8,"#FFD27A"],[-4,e+9,"#8CFFB0"]],i=[];for(let[o,a,c]of t){let l=new Hn(2.2,3.4,16,18,1,!0);l.translate(o,8,a);let h=l.attributes.position.count,u=new Float32Array(h).fill(F(0,Le));l.setAttribute("aPh",new rt(u,1)),i.push(Os(l,c)),Oc.push({x:o,y:.5,z:a,r:2.5,col:new ne(c),column:!0})}let s=new bt({transparent:!0,depthWrite:!1,blending:ei,side:St,fog:!1,uniforms:Rm,vertexShader:`attribute float aPh; attribute vec3 color; varying vec3 vC; varying float vY; varying float vPh; varying vec3 vN; varying vec3 vV;
      void main(){ vC = color; vY = uv.y; vPh = aPh; vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz);
        gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`uniform float t; varying vec3 vC; varying float vY; varying float vPh; varying vec3 vN; varying vec3 vV;
      void main(){ float edge = pow(clamp(1.0 - abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0), 1.5);
        float pulse = 0.65 + 0.35 * sin(t * 0.8 + vPh) * sin(t * 1.7 + vPh * 2.0);
        float a = pow(clamp(1.0 - vY, 0.0, 1.0), 1.6) * (0.35 + 0.65 * (1.0 - edge)) * 0.75 * pulse;
        a = clamp(a, 0.0, 1.0);
        gl_FragColor = vec4(clamp(vC * a, 0.0, 4.0), a);
        #include <colorspace_fragment>
      }`}),r=new _e(Li(i),s);r.renderOrder=4,r.frustumCulled=!1,i.forEach(o=>o.dispose()),Ni.add(r)}function qb(){let n=new Tt(.09,8,6);for(let e=0;e<3;e++){let t=new Dt,i=new et({color:new ne("#FFE36A").multiplyScalar(2),fog:!1,toneMapped:!1,transparent:!0,opacity:0});for(let s of[-1,1]){let r=new _e(n,i);r.position.x=s*.17,r.scale.y=.6,t.add(r)}Ni.add(t),Uu.push({g:t,mat:i,t:F(2,8),on:0})}}function Yb(n){let e=Math.floor(F(0,4)),t=F(4,9),i=F(-.8,.8),s=e<2?i*X.hx:(e===2?-1:1)*(X.hx+t),r=e<2?(e===0?-1:1)*(X.hz+t):i*X.hz;n.g.position.set(s,F(.8,2.2),r),n.g.lookAt(0,n.g.position.y,0)}function Pm(n,e){if(!Ni)return;Rm.t.value=e;let t=ue.level==="high"?1:.5;for(let i of Oc){if(Math.random()>n*(i.column?5:3)*t)continue;let s=i.r*(i.column?1:.8),r=F(0,Le),o=F(0,1);Ct.emit({x:i.x+Math.cos(r)*s*o,y:i.y+(i.column?F(0,3):0),z:i.z+Math.sin(r)*s*o,vx:F(-.2,.2),vy:F(.6,1.4),vz:F(-.2,.2),life:F(3,5),t:0,s0:i.column?.25:.6,s1:.05,r:i.col.r*1.4,g:i.col.g*1.4,b:i.col.b*1.4,a:.9,grav:0,drag:.2,soft:1})}if(Math.random()<n*2.5*t){let i=F(-X.hx,X.hx),s=F(-X.hz,X.hz);Ct.emit({x:i,y:F(.6,2.4),z:s,vx:F(-.3,.3),vy:F(-.05,.15),vz:F(-.3,.3),life:F(2.5,4),t:0,s0:.12,s1:.12,r:1.4,g:1.3,b:.5,a:.9,grav:0,drag:.1,soft:1})}for(let i of Uu){i.t-=n,i.t<=0&&(i.on>0?(i.on=0,i.t=F(4,10)):(Yb(i),i.on=F(2,4),i.t=i.on));let s=i.on>0?Math.min(1,(i.on-i.t)/.4,i.t/.4):0,r=i.on>0&&Math.sin(e*7+i.on*10)>.97?.1:1;i.mat.opacity=s,i.g.children.forEach(o=>{o.scale.y=.6*r*Math.max(.05,s)})}}var ke={yaw:Math.PI,pitch:-.08,x:0,z:0,dist:3.5,pivotH:1.6,shoulder:.6,sens:Wt.get("sens",1),turnTo:null},Zb=-.6,Kb=.38,Nn={},Ui={l:!1,r:!1,x:0,y:0},Gr=!1,qe={move:null,atk:null,sup:null,cam:null},gt={x:0,y:0,z:0,foe:null,inRange:!1,gx:0,gz:0,groundHit:!1};function Ou(n,e,t){ke.yaw-=n*t*ke.sens,ke.pitch=tt(ke.pitch-e*t*ke.sens,Zb,Kb),ke.turnTo=null}addEventListener("keydown",n=>{Nn[n.code]=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&A.state!=="menu"&&n.preventDefault(),(n.code==="KeyE"||n.code==="Space")&&A.me&&(A.me.wantSup=!0)});addEventListener("keyup",n=>{Nn[n.code]=!1});addEventListener("blur",()=>{for(let n in Nn)Nn[n]=!1;Ui.l=Ui.r=!1});As.addEventListener("mousedown",n=>{if(Ur(),!wt){if(Bu()&&!Gr&&As.requestPointerLock)try{let e=As.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}n.button===0&&(Ui.l=!0),n.button===2&&A.me&&(A.me.wantSup=!0)}});addEventListener("mouseup",n=>{n.button===0&&(Ui.l=!1),n.button===2&&(Ui.r=!1)});As.addEventListener("contextmenu",n=>n.preventDefault());addEventListener("mousemove",n=>{(Gr||Bu()&&!wt)&&!A.paused&&Ou(n.movementX,n.movementY,.0026),Ui.x=n.clientX,Ui.y=n.clientY});var Dm=!1;document.addEventListener("pointerlockchange",()=>{Gr=document.pointerLockElement===As,Gr&&(Dm=!0)});function Fm(){let n=de("lockhint"),e=!Gr&&!Dm&&!wt&&A.state==="play"&&A.match&&A.match.t<12&&A.me&&A.me.alive&&!A.paused&&!Ui.l;n.hidden===e&&(n.hidden=!e)}function zu(){document.exitPointerLock&&Gr&&document.exitPointerLock()}var Bu=()=>A.state==="play"||A.state==="countdown";function Nm(n,e){let t=de("stick");t.style.left=n+"px",t.style.top=e+"px",t.hidden=!1}function $b(n){if(Ur(),!!Bu()){for(let e of n.changedTouches){let t=e.target.closest&&e.target.closest("[data-btn]");if(t){let i=t.dataset.btn;(i==="atk"&&!qe.atk||i==="sup"&&!qe.sup&&A.me&&A.me.charge>=1)&&(qe[i]={id:e.identifier,x:e.clientX,y:e.clientY,moved:0,t0:performance.now(),el:t},t.classList.add("on"));continue}e.clientX<innerWidth*.42&&!qe.move?(qe.move={id:e.identifier,x0:e.clientX,y0:e.clientY,dx:0,dy:0},Nm(e.clientX,e.clientY)):qe.cam||(qe.cam={id:e.identifier,x:e.clientX,y:e.clientY})}n.preventDefault()}}var Lm=.0055;function Jb(n){for(let e of n.changedTouches){if(qe.move&&e.identifier===qe.move.id){let t=e.clientX-qe.move.x0,i=e.clientY-qe.move.y0,s=Math.hypot(t,i),r=56;s>r&&(qe.move.x0+=t*(1-r/s),qe.move.y0+=i*(1-r/s),t=e.clientX-qe.move.x0,i=e.clientY-qe.move.y0,Nm(qe.move.x0,qe.move.y0)),qe.move.dx=t/r,qe.move.dy=i/r,de("knob").style.transform=`translate(${t}px,${i}px)`;continue}if(qe.cam&&e.identifier===qe.cam.id){Ou(e.clientX-qe.cam.x,e.clientY-qe.cam.y,Lm),qe.cam.x=e.clientX,qe.cam.y=e.clientY;continue}for(let t of["atk","sup"]){let i=qe[t];if(!i||e.identifier!==i.id)continue;let s=e.clientX-i.x,r=e.clientY-i.y;i.moved+=Math.abs(s)+Math.abs(r),Ou(s,r,Lm*.8),i.x=e.clientX,i.y=e.clientY}}n.preventDefault()}function Um(n){for(let e of n.changedTouches){qe.move&&e.identifier===qe.move.id&&(qe.move=null,de("stick").hidden=!0,de("knob").style.transform=""),qe.cam&&e.identifier===qe.cam.id&&(qe.cam=null);for(let t of["atk","sup"]){let i=qe[t];if(!i||e.identifier!==i.id)continue;i.el.classList.remove("on");let s=A.me;if(s&&s.alive){let r=i.moved<14&&performance.now()-i.t0<350,o=r&&jb(t==="sup")||Ho(s,t==="sup");s.inp.tx=o.x,s.inp.tz=o.z,t==="sup"?s.inp.sup=!0:s.inp.fire=!0,s.inp.locked=!0,r&&o.foe&&(ke.turnTo=Math.atan2(o.x-s.x,o.z-s.z))}qe[t]=null}}}document.addEventListener("touchstart",$b,{passive:!1});document.addEventListener("touchmove",Jb,{passive:!1});document.addEventListener("touchend",Um);document.addEventListener("touchcancel",Um);function jb(n){let e=A.me,t=n?e.H.super:e.H.attack,i=t.kind==="lob"||t.kind==="barrage"||t.kind==="beam",s=null,r=1e9;for(let c of A.fighters){if(!c.alive||c.team===e.team||!zr(e,c))continue;let l=Math.hypot(c.x-e.x,c.z-e.z);if(l>t.range*1.15)continue;let h=Math.abs(Sr(ke.yaw,Math.atan2(c.x-e.x,c.z-e.z))),u=!i&&ii(e.x,e.z,c.x,c.z)>=0,d=l+h*4+(u?10:0);d<r&&(r=d,s=c)}if(!s)return null;let o=Math.hypot(s.x-e.x,s.z-e.z),a=t.kind==="lob"||t.kind==="barrage"?t.flight*.8:o/(t.speed||40);return{x:s.x+s.vx*a*.7,z:s.z+s.vz*a*.7,foe:s}}function Ho(n,e){let t=e?n.H.super:n.H.attack;if(t.kind==="lob"||t.kind==="barrage"){let i=Math.atan2(gt.gx-n.x,gt.gz-n.z),s=gt.groundHit?tt(Math.hypot(gt.gx-n.x,gt.gz-n.z),1.5,t.range):t.range;return{x:n.x+Math.sin(i)*s,z:n.z+Math.cos(i)*s}}return{x:gt.x,z:gt.z}}var ds=new R;function Qb(n){let e=ct.position,t=ds;gt.groundHit=t.y<-.01;let i=gt.groundHit?(e.y-.05)/-t.y:40;gt.gx=e.x+t.x*Math.min(i,40),gt.gz=e.z+t.z*Math.min(i,40);let s=Math.min(i,40);for(let a=.6;a<s;a+=.2){let c=e.x+t.x*a,l=e.y+t.y*a,h=e.z+t.z*a;if(l<Cp(yc(c,h))){s=a;break}}gt.foe=null;let r=Math.hypot(t.x,t.z)||1e-6;for(let a of A.fighters){if(!a.alive||a.team===n.team||!a.seen)continue;let c=a.x-e.x,l=a.z-e.z,h=(c*t.x+l*t.z)/(r*r);if(h<=0||h>=s)continue;let u=e.x+t.x*h-a.x,d=e.z+t.z*h-a.z,f=e.y+t.y*h;u*u+d*d<(a.H.rad+.15)**2&&f>-.2&&f<a.H.height+(a.H.hover||0)+.3&&(s=h,gt.foe=a)}gt.x=e.x+t.x*s,gt.y=e.y+t.y*s,gt.z=e.z+t.z*s,Math.hypot(gt.x-n.x,gt.z-n.z)<1.2&&(gt.x=n.x+Math.sin(ke.yaw)*8,gt.z=n.z+Math.cos(ke.yaw)*8);let o=n.H.attack;gt.inRange=!!gt.foe&&Math.hypot(gt.foe.x-n.x,gt.foe.z-n.z)<o.range+.5}function Om(n){let e=A.me;if(!e)return;let t=e.inp,i=0,s=0;qe.move?(i=-qe.move.dy,s=qe.move.dx):(i=(Nn.KeyW||Nn.ArrowUp?1:0)-(Nn.KeyS||Nn.ArrowDown?1:0),s=(Nn.KeyD||Nn.ArrowRight?1:0)-(Nn.KeyA||Nn.ArrowLeft?1:0));let r=Math.hypot(i,s);r>1&&(i/=r,s/=r);let o=Math.sin(ke.yaw),a=Math.cos(ke.yaw);if(t.mx=o*i-a*s,t.mz=a*i+o*s,ke.turnTo!==null){let c=Sr(ke.yaw,ke.turnTo);ke.yaw+=c*Math.min(1,n*8),Math.abs(c)<.02&&(ke.turnTo=null)}if(Qb(e),!t.locked){let c=Ho(e,!1);t.tx=c.x,t.tz=c.z}if(t.locked=!1,t.aim=Math.atan2(t.tx-e.x,t.tz-e.z),e.aiming=!0,!wt){if(Ui.l&&Fs(e)){let c=Ho(e,!1);t.tx=c.x,t.tz=c.z,t.fire=!0}if(e.wantSup&&(e.wantSup=!1,e.charge>=1)){let c=Ho(e,!0);t.tx=c.x,t.tz=c.z,t.sup=!0}}}var Im=new R;function zm(n){let e=A.me;if(!e)return;let t=1-Math.exp(-n*14);ke.x=Ln(ke.x,e.x,t),ke.z=Ln(ke.z,e.z,t);let i=Math.sin(ke.yaw),s=Math.cos(ke.yaw),r=Math.cos(ke.pitch),o=Math.sin(ke.pitch);ds.set(i*r,o,s*r);let a=-s,c=i,l=ke.x+a*ke.shoulder*.4,h=ke.z+c*ke.shoulder*.4,u=ke.pivotH,d=ke.dist,f=l-ds.x*d+a*ke.shoulder,g=h-ds.z*d+c*ke.shoulder,x=ii(l,h,f,g,fu),m=f,p=g,_=u-ds.y*d+.25;if(x>=0&&_<Fo+.2){let v=Math.max(.15,x-.08);m=l+(f-l)*v,p=h+(g-h)*v,_=u+(_-u)*v}if(_=Math.max(.35,_),A.shake>0){let v=A.shake*.12;m+=(Math.random()-.5)*v,_+=(Math.random()-.5)*v,p+=(Math.random()-.5)*v,A.shake=Math.max(0,A.shake-n*2.5)}ct.position.set(m,_,p),Im.set(m+ds.x*10,_+ds.y*10,p+ds.z*10),ct.lookAt(Im)}var Vr=new Dt;Vr.visible=!1;ye.add(Vr);var ku=new et({color:"#FFFFFF",transparent:!0,opacity:.75,depthWrite:!1,depthTest:!1}),eS=new et({color:"#FFD23F",transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1}),Bm=new ji(.86,1,40);Bm.rotateX(-Math.PI/2);var Go=new _e(Bm,ku);Go.renderOrder=6;Vr.add(Go);var tS=new Tt(.06,8,6),zc=[];for(let n=0;n<16;n++){let e=new _e(tS,ku);e.renderOrder=6,Vr.add(e),zc.push(e)}function km(){let n=A.me,e=n&&n.alive&&A.state==="play"&&(!wt||qe.atk||qe.sup),t=wt?!!qe.sup:n&&n.charge>=1&&Nn.KeyE,i=n&&(t?n.H.super:n.H.attack),s=i&&(i.kind==="lob"||i.kind==="barrage");if(Vr.visible=!!(e&&s),!Vr.visible)return;let r=t?eS:ku;r.opacity=Fs(n)||t?.8:.3,Go.material=r,zc.forEach(l=>l.material=r);let o=Ho(n,t),a=Math.hypot(o.x-n.x,o.z-n.z),c=3.2+a*.2;Go.position.set(o.x,.07,o.z),Go.scale.setScalar(i.radius),zc.forEach((l,h)=>{let u=(h+1)/(zc.length+1);l.position.set(Ln(n.x,o.x,u),Ln(1,.15,u)+Math.sin(u*Math.PI)*c,Ln(n.z,o.z,u))})}var Wr=new R,Gm='<span class="gem-ico"></span>';function Vm(n){let e=document.createElement("div");e.className="tag "+Or(n),e.innerHTML=`<div class="gm" hidden>${Gm}<b></b></div><div class="tn">${en(n.name)}</div><div class="hpb"><s></s><u></u><b></b></div>`+(n===A.me?'<div class="am">'+"<i><u></u></i>".repeat(qn)+"</div>":"")+'<i class="sup"></i><i class="spot">!</i>',de("hud-world").appendChild(e),n.tag={el:e,gm:e.querySelector(".gm"),gmb:e.querySelector(".gm b"),u:e.querySelector(".hpb u"),s:e.querySelector(".hpb s"),b:e.querySelector(".hpb b"),am:[...e.querySelectorAll(".am i")],last:{}}}function Wm(){let n=innerWidth,e=innerHeight;for(let t of A.fighters){let i=t.tag;if(!i)continue;if(!(t.alive&&t.seen&&A.state!=="menu"&&de("end").hidden&&t!==A.me)){i.last.vis!==!1&&(i.el.style.display="none",i.last.vis=!1);continue}if(Wr.set(t.V.root.position.x,t.H.height+(t.H.hover||0)+.45,t.V.root.position.z).project(ct),Wr.z>1||Math.abs(Wr.x)>1.2||Math.abs(Wr.y)>1.2){i.last.vis!==!1&&(i.el.style.display="none",i.last.vis=!1);continue}i.last.vis!==!0&&(i.el.style.display="",i.last.vis=!0);let r=ct.position.distanceTo(t.V.root.position),o=Math.max(.5,Math.min(1.05,7/r));i.el.style.transform=`translate(${((Wr.x*.5+.5)*n).toFixed(1)}px,${((-Wr.y*.5+.5)*e).toFixed(1)}px) translate(-50%,-100%) scale(${o.toFixed(2)})`;let a=A.me&&t.team!==A.me.team&&Pu(A.me.team,t)&&!Lr(A.me.x,A.me.z,t.x,t.z);i.last.sp!==a&&(i.el.classList.toggle("spotted",a),i.last.sp=a);let c=Math.max(0,Math.ceil(t.hp)),l=(c/t.max*100).toFixed(1)+"%";i.last.hp!==c&&(i.u.style.width=l,i.s.style.width=l,i.b.textContent=c,i.last.hp=c),i.last.gems!==t.gems&&(i.gm.hidden=!t.gems,i.gmb.textContent=t.gems,i.last.gems=t.gems);let h=t.charge>=1;i.last.ready!==h&&(i.el.classList.toggle("ready",h),i.last.ready=h),i.am.length&&i.am.forEach((u,d)=>{let f=tt(t.ammo-d,0,1);u.firstChild.style.width=(f*100).toFixed(0)+"%",u.classList.toggle("full",f>=1)})}}var nS=n=>(n=Math.max(0,Math.ceil(n)),Math.floor(n/60)+":"+String(n%60).padStart(2,"0")),Hu=null;function kc(){let n=A.match,e=A.me;if(!n||!e)return;let t=e.team;de("sc0").textContent=n.count[t],de("sc1").textContent=n.count[1-t],de("timer").textContent=nS(n.dur-n.t);let i=de("cdown");if(n.cd&&!n.over){i.hidden=!1;let f=n.cd.team===t,g=Math.ceil(n.cd.t);i.classList.toggle("foe",!f),g!==Hu&&(de("cd-n").textContent=g,i.classList.remove("pulse"),i.offsetWidth,i.classList.add("pulse"),Hu=g),de("cd-t").textContent=f?xn("\u0414\u0435\u0440\u0436\u0438\u043C \u0441\u043F\u043E\u0440\u044B!"):xn("\u0412\u0440\u0430\u0433 \u0443\u043D\u043E\u0441\u0438\u0442 \u0441\u043F\u043E\u0440\u044B!")}else i.hidden=!0,Hu=null;let s=e.charge,r=s>=1;de("sp-ring").style.strokeDashoffset=(214*(1-s)).toFixed(1),de("superpc").classList.toggle("ready",r),de("tsp-ring").style.strokeDashoffset=(277*(1-s)).toFixed(1),de("b-sup").classList.toggle("ready",r);let o=de("ammopc").children;for(let f=0;f<o.length;f++){let g=tt(e.ammo-f,0,1);o[f].firstChild.style.width=(g*100).toFixed(0)+"%",o[f].classList.toggle("full",g>=1)}iS(e);let a=Math.max(0,Math.ceil(e.hp)),c=a+"/"+e.id;kc.hp!==c&&(kc.hp=c,de("mehp").firstChild.style.width=(a/e.max*100).toFixed(1)+"%",de("mehp").lastChild.textContent=a);let h="xhair "+(gt.foe?gt.inRange?"foe":"far":"")+(e.ammo<1?" empty":"")+(e.H.attack.kind==="lob"?" lob":""),u=de("xhair");u.className!==h&&(u.className=h),u.hidden=!e.alive;let d=de("dead");!e.alive&&!n.over?(d.hidden=!1,de("dead-n").textContent=Math.max(1,Math.ceil(e.respawnT))):d.hidden=!0}function iS(n){if(!wt)return;let e=de("tammo");if(!e.childElementCount){let t="";for(let i=0;i<qn;i++)t+=`<path class="tammo-seg" stroke="rgba(0,0,0,.35)" d="${Hm(i)}"/><path class="tammo-seg" id="tam${i}" stroke="#FFC93C" d="${Hm(i)}"/>`;e.innerHTML=t}for(let t=0;t<qn;t++){let i=tt(n.ammo-t,0,1),s=de("tam"+t),r=s._len||(s._len=s.getTotalLength());s.style.strokeDasharray=r,s.style.strokeDashoffset=(r*(1-i)).toFixed(1),s.setAttribute("stroke",i>=1?"#FFC93C":"#FF8A3D")}}function Hm(n){let s=-Math.PI/2+n/qn*Math.PI*2+.12,r=-Math.PI/2+(n+1)/qn*Math.PI*2-.12;return`M${(60+Math.cos(s)*54).toFixed(1)} ${(60+Math.sin(s)*54).toFixed(1)}A54 54 0 0 1 ${(60+Math.cos(r)*54).toFixed(1)} ${(60+Math.sin(r)*54).toFixed(1)}`}function Xm(n,e){let t=document.createElement("div");t.className=e||"",t.innerHTML=n;let i=de("feed");for(i.appendChild(t);i.children.length>4;)i.firstChild.remove();setTimeout(()=>t.remove(),4200)}var Bc=0;function Oi(n,e,t,i=1.8){let s=de("ann");s.className="ann "+(t||""),s.innerHTML="<b>"+en(xn(n))+"</b>"+(e?"<span>"+en(xn(e))+"</span>":""),s.offsetWidth,s.classList.add("show"),s.style.opacity=1,Bc=i}function qm(n){Bc>0&&(Bc-=n,Bc<=0&&(de("ann").style.opacity=0))}function Ym(n,e){let t=de("heroes");t.innerHTML=Dr.map(o=>{let a=si[o];return`<button class="hcard${o===n?" sel":""}" data-h="${o}">${Su[o]}<b>${en(a.name)}</b><small>${en(a.role)}</small></button>`}).join("");for(let o of t.querySelectorAll(".hcard"))o.onclick=()=>e(o.dataset.h);let i=si[n],s=(o,a,c,l)=>`<div class="stat"><span>${o}</span><i><u style="width:${tt(a/c*100,6,100).toFixed(0)}%"></u></i><em>${l}</em></div>`,r=i.attack.kind==="fan"?i.attack.dmg*i.attack.count:i.attack.kind==="needle"?i.attack.dmgFar:i.attack.dmg;de("hero-info").innerHTML=`<h3>${en(i.name)}</h3><div class="sub">${en(i.species)} \xB7 ${en(i.role)}</div><p>${en(i.desc)}</p>`+s("\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435",i.hp,4200,i.hp)+s("\u0423\u0440\u043E\u043D",r,1600,Math.round(r))+s("\u0414\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",i.attack.range,15,i.attack.range.toFixed(0)+" \u043C")+s("\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",i.speed-3.5,2,i.speed.toFixed(1))+`<div class="abil"><span class="k">\u2694</span><div><b>${en(i.attack.name)}</b><small>${en(sS(i.attack))}</small></div></div><div class="abil"><span class="k s">\u2605</span><div><b>${en(i.super.name)}</b><small>${en(i.super.desc)}</small></div></div>`}function sS(n){return n.kind==="fan"?n.count+" \u0441\u043F\u043E\u0440 \u0432\u0435\u0435\u0440\u043E\u043C":n.kind==="lob"?"\u0431\u043E\u043C\u0431\u0430 \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B, \u0433\u043E\u0440\u044F\u0449\u0430\u044F \u043B\u0443\u0436\u0430":"\u0434\u0430\u043B\u044C\u043D\u0438\u0439 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u0443\u0440\u043E\u043D \u0440\u0430\u0441\u0442\u0451\u0442 \u0441 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C"}function Zm(n){let e=A.me,t=A.match,i=de("e-title");i.textContent=xn(n==="win"?"\u041F\u043E\u0431\u0435\u0434\u0430!":n==="lose"?"\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435":"\u041D\u0438\u0447\u044C\u044F"),i.className=n,de("e-sub").textContent=xn(t.why==="spores"?t.winner===e.team?"\u0422\u0432\u043E\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0430 \u0441\u043F\u043E\u0440\u044B.":"\u0412\u0440\u0430\u0433\u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0438 \u0441\u043F\u043E\u0440\u044B.":"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E: ")+(t.why==="time"?t.count[e.team]+" : "+t.count[1-e.team]:"");let s=a=>a.kills*3+a.dmgDone/1500+(a.gemsPicked||0)*.6,r=[...A.fighters].sort((a,c)=>s(c)-s(a))[0],o=[...A.fighters].sort((a,c)=>(a.team===e.team?0:1)-(c.team===e.team?0:1)||s(c)-s(a));de("e-board").innerHTML=o.map(a=>`<tr class="t${a.team===e.team?0:1}${a===e?" me":""}"><td>${Su[a.hero]}</td><td>${en(a.name)}${a===r?'<span class="mvp">MVP</span>':""}</td><td>\u2694 ${a.kills}</td><td>\u2620 ${a.deaths}</td><td>${Gm} ${a.gemsPicked||0}</td><td>${Math.round(a.dmgDone)}</td></tr>`).join(""),de("end").hidden=!1}var Jt={sdk:null,ready:!1,adOn:!1,playing:!1},Gu=()=>!!window.YaGames;async function Km(){if(Gu())try{Jt.sdk=await window.YaGames.init();try{let n=Jt.sdk.environment.i18n.lang;n&&Ec(Sc(n))}catch{}}catch{}}function $m(){if(Jt.sdk&&!Jt.ready){Jt.ready=!0;try{Jt.sdk.features.LoadingAPI.ready()}catch{}}}function Jm(){if(!Jt.sdk)return;let n=!Jt.adOn&&!A.paused&&!document.hidden&&(A.state==="play"||A.state==="countdown");if(n!==Jt.playing){Jt.playing=n;try{let e=Jt.sdk.features.GameplayAPI;n?e.start():e.stop()}catch{}}}function rS(){if(Jt.adOn=!0,we.ad=!0,Fc(!0),document.exitPointerLock)try{document.exitPointerLock()}catch{}}function oS(){Jt.adOn=!1,we.ad=!1,document.hidden||Fc(!1)}function Vu(n){if(!Jt.sdk){n&&n();return}let e=!1,t=()=>{e||(e=!0,oS(),n&&n())};try{Jt.sdk.adv.showFullscreenAdv({callbacks:{onOpen:rS,onClose:t,onError:t,onOffline:t}})}catch{t()}}addEventListener("visibilitychange",()=>{Jt.adOn||Fc(document.hidden)});var di={hero:si[Wt.get("hero","shroom")]?Wt.get("hero","shroom"):"shroom",diff:Wt.get("diff","normal")},aS=["\u0413\u0440\u0443\u0437\u0434\u044C","\u041E\u043F\u0451\u043D\u043E\u043A","\u0421\u043C\u043E\u0440\u0447\u043E\u043A","\u0420\u044B\u0436\u0438\u043A","\u041C\u0430\u0441\u043B\u0451\u043D\u043E\u043A","\u0412\u043E\u043B\u043D\u0443\u0448\u043A\u0430","\u0421\u0442\u0440\u043E\u0447\u043E\u043A","\u0411\u0435\u043B\u044F\u043D\u043A\u0430","\u0415\u0436\u043E\u0432\u0438\u043A","\u0414\u0443\u0431\u043E\u0432\u0438\u043A","\u0412\u0435\u0448\u0435\u043D\u043A\u0430","\u041A\u043E\u0440\u043E\u0435\u0434","\u0428\u0435\u0440\u0448\u0435\u043D\u044C","\u0416\u0443\u0436\u0435\u043B\u0438\u0446\u0430","\u0429\u0435\u043B\u043A\u0443\u043D","\u0421\u0432\u0435\u0442\u043B\u044F\u0447\u043E\u043A","\u041C\u0435\u0434\u0432\u0435\u0434\u043A\u0430","\u0414\u043E\u043B\u0433\u043E\u043D\u043E\u0441\u0438\u043A"];Gu()?await Km():Ec();var n0=n=>{de("load-bar").style.width=Math.round(n*100)+"%"};await Promise.all([wp(n=>n0(n*.85)),$p()]);n0(.92);pp();mp();Lp("glade");Sm();Cm();Nh();addEventListener("resize",Tr);de("load").hidden=!0;var Kn=null;function i0(n){Kn&&(ye.remove(Kn.V.root),Kn.V.mesh.geometry.dispose());let e=wc(n);Ac(e,"me"),ye.add(e.root);let t=X.spawns[0][1];Kn={V:e,hop:1.2,f:{id:99,x:t.x,z:t.z-1.2,vx:0,vz:0,aim:Math.PI,alive:!0,atkT:9,supT:0,flash:0,deadT:0,victory:!1}},e.yaw=Math.PI,hs.spawn(e)}function Gc(){Ym(di.hero,n=>{di.hero=n,Wt.set("hero",n),st("select"),Gc(),i0(n)});for(let[n,e]of[["m-diff",di.diff],["m-q",ue.level]])for(let t of de(n).querySelectorAll("button"))t.classList.toggle("sel",t.dataset.v===e);for(let n of de("m-snd").querySelectorAll("button")){let e=n.dataset.v==="sfx"?we.sfxOn:we.musicOn;n.classList.toggle("sel",e),n.classList.toggle("off",!e)}de("howto").textContent=xn(wt?"\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0431\u0435\u0433, \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043A\u0430\u043C\u0435\u0440\u044B. \u041A\u043D\u043E\u043F\u043A\u0430 \u0430\u0442\u0430\u043A\u0438: \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u2014 \u0430\u0432\u0442\u043E\u043F\u0440\u0438\u0446\u0435\u043B, \u0441 \u043F\u0440\u043E\u0442\u044F\u0436\u043A\u043E\u0439 \u2014 \u0446\u0435\u043B\u0438\u0448\u044C\u0441\u044F \u0441\u0430\u043C. \u0417\u0432\u0435\u0437\u0434\u0430 \u2014 \u0441\u0443\u043F\u0435\u0440.":"WASD \u2014 \u0431\u0435\u0433, \u043C\u044B\u0448\u044C \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \u0438 \u043F\u0440\u0438\u0446\u0435\u043B, \u041B\u041A\u041C \u2014 \u0430\u0442\u0430\u043A\u0430, \u041F\u041A\u041C \u0438\u043B\u0438 E \u2014 \u0441\u0443\u043F\u0435\u0440, Esc \u2014 \u043F\u0430\u0443\u0437\u0430.")}de("m-diff").onclick=n=>{let e=n.target.dataset.v;e&&(di.diff=e,Wt.set("diff",e),st("click"),Gc())};de("m-q").onclick=n=>{let e=n.target.dataset.v;!e||e===ue.level||(Nh(e),st("click"),setTimeout(()=>location.reload(),120))};de("m-snd").onclick=n=>{let e=n.target.dataset.v;e&&(Ur(),e==="sfx"?Jp(!we.sfxOn):jp(!we.musicOn),st("click"),Gc())};de("play").onclick=()=>{Ur(),st("confirm"),Xu()};function Vc(){A.state="menu",A.paused=!1,s0(),de("menu").hidden=!1,de("hud").hidden=!0,de("end").hidden=!0,de("pause").hidden=!0,Gc(),i0(di.hero)}function s0(){om(),Nu(),Wp();for(let n of A.shots)ye.remove(n.m);A.shots.length=0;for(let n of A.lobs)ye.remove(n.m),ye.remove(n.mark);A.lobs.length=0;for(let n of A.puddles)ye.remove(n.m);A.puddles.length=0;for(let n of A.beams)ye.remove(n.core),ye.remove(n.outer);A.beams.length=0,A.match=null}var Vo=0,Xr=0,Wu=0;function Xu(n={}){s0(),Kn&&(ye.remove(Kn.V.root),Kn=null),wm();let e=uc([...aS]),t=n.hero||di.hero,i=uc(Dr.filter(o=>o!==t)).concat(Dr).slice(0,2),s=uc([...Dr]),r=[i[0],t,i[1]];for(let o=0;o<2;o++)for(let a=0;a<3;a++){let c=o===0&&a===1,l=o===0?r[a]:s[a],h=rm({name:c?xn("\u0422\u044B"):xn(e.pop()),team:o,hero:l,isMe:c});h.slot=a,h.gemsPicked=0,c?A.me=h:h.bot=Fu(n.diff||di.diff)}for(let o of A.fighters)Vm(o),Uc(o);ke.yaw=A.me.team===0?Math.PI:0,ke.x=A.me.x,ke.z=A.me.z,ke.pitch=-.08,A.state="countdown",Vo=3.2,Wu=4,Xr=0,de("menu").hidden=!0,de("end").hidden=!0,de("hud").hidden=!1,de("touch").hidden=!wt,de("superpc").hidden=wt,de("ammopc").hidden=wt,document.body.classList.toggle("touch-on",wt),de("lockhint").hidden=wt,Oi("\u0421\u043F\u043E\u0440\u044B","\u0421\u043E\u0431\u0435\u0440\u0438 10 \u0441\u043F\u043E\u0440 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438 \u0438\u0445 15 \u0441\u0435\u043A\u0443\u043D\u0434","sun",2.4)}function cS(n){Vo-=n;let e=Math.ceil(Vo);e!==Wu&&e>=1&&e<=3&&(Wu=e,Oi(String(e),"","sun",.8),st("countdown")),Vo<=0&&(A.state="play",Oi("\u0412 \u0431\u043E\u0439!","","sun",1),st("start"))}function lS(n){A.state="end",Xr=0;let e=A.me,t=n<0?"draw":n===e.team?"win":"lose";A.result=t;for(let s of A.fighters)n>=0&&s.team===n?(s.alive||Uc(s,{x:s.x,z:s.z}),s.victory=!0):n>=0&&(s.defeat=!0),s.inp.mx=s.inp.mz=0;let i=s=>s.kills*3+s.dmgDone/1500+(s.gemsPicked||0)*.6;A.endFocus=n<0||n===e.team?e:A.fighters.filter(s=>s.team===n).sort((s,r)=>i(r)-i(s))[0],A.endYaw=A.endFocus.V.yaw;for(let s of[0,.6,-.6,1.2,-1.2,1.8,-1.8,2.6,-2.6,Math.PI]){let r=A.endFocus.V.yaw+s,o=A.endFocus;if(ii(o.x,o.z,o.x+Math.sin(r)*5,o.z+Math.cos(r)*5)<0){A.endYaw=r;break}}for(let s of A.fighters)s.victory&&(s.aim=A.endYaw);Oi(t==="win"?"\u041F\u043E\u0431\u0435\u0434\u0430!":t==="lose"?"\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435":"\u041D\u0438\u0447\u044C\u044F","",t==="win"?"sun":t==="lose"?"foe":"ally",2.2),st(t==="lose"?"lose":"win"),zu()}de("e-again").onclick=()=>{st("confirm"),Vu(()=>Xu())};de("e-menu").onclick=()=>{st("click"),Vu(Vc)};var jm=n=>`<b style="color:${n===A.me?"var(--sun)":n.team===A.me.team?"var(--ally)":"var(--foe)"}">${en(n.name)}</b>`;Fn("kill",(n,e)=>{A.me&&(e&&e!==n&&Xm(jm(e)+" \u2694 "+jm(n),e===A.me?"m":e.team===A.me.team?"a":"f"),e===A.me&&n!==A.me&&(Oi("\u0421\u0440\u0435\u0437\u0430\u043B!",n.name,"sun",1.1),st("kill")),n===A.me&&Oi("\u0422\u0435\u0431\u044F \u0441\u0440\u0435\u0437\u0430\u043B\u0438",e?e.name:"","foe",1.6))});Fn("pickup",n=>{n.gemsPicked=(n.gemsPicked||0)+1});Fn("countdownStart",n=>{let e=n===A.me.team;Oi(e?"\u0421\u043F\u043E\u0440\u044B \u0443 \u043D\u0430\u0441!":"\u0412\u0440\u0430\u0433 \u043D\u0430\u0431\u0440\u0430\u043B \u0441\u043F\u043E\u0440\u044B!",e?"\u0414\u0435\u0440\u0436\u0438\u0442\u0435\u0441\u044C 15 \u0441\u0435\u043A\u0443\u043D\u0434":"\u041E\u0442\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0445!",e?"ally":"foe",1.8),st(e?"super_ready":"gem_drop")});Fn("countdownStop",()=>{A.state==="play"&&Oi("\u041E\u0442\u0441\u0447\u0451\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D","","sun",1.2)});Fn("countdownTick",n=>{n<=5&&st("countdown",null,.8)});Fn("matchOver",n=>lS(n));Fn("superReady",n=>{n===A.me&&st("super_ready")});Fn("empty",n=>{n===A.me&&st("empty")});Fn("damage",(n,e,t)=>{n===A.me?st("hurt",null,.7):t===A.me&&st("hit",null,.6)});Fn("spawn",n=>{n===A.me&&A.state==="play"&&(st("respawn"),ke.yaw=n.team===0?Math.PI:0,ke.x=n.x,ke.z=n.z)});function qr(n){A.state!=="play"&&A.state!=="countdown"&&(n=!1),A.paused=n,de("pause").hidden=!n,n&&zu()}de("pause-btn").onclick=()=>qr(!0);de("p-resume").onclick=()=>{st("click"),qr(!1)};de("p-quit").onclick=()=>{st("click"),qr(!1),Vc()};addEventListener("keydown",n=>{(n.code==="Escape"||n.code==="KeyP")&&(A.state==="play"||A.state==="countdown")&&qr(!A.paused)});document.addEventListener("visibilitychange",()=>{document.hidden&&A.state==="play"&&qr(!0)});var Qm=.95,e0=new R;function Hc(n){if(A.time+=n,En.time.value=A.time,fp(n),Jm(),A.state==="play"||A.state==="countdown"||A.state==="end"){A.state==="countdown"&&cS(n),A.state==="play"&&A.me&&A.me.alive&&!A.me.bot&&!A.noInput&&Om(n);for(let i of A.fighters)i.bot&&A.state==="play"&&vm(i,n);for(let i of A.fighters)am(i,n);dm(n),pm(n),gm(n),xm(n),Am(n,A.time),A.state==="end"&&(Xr+=n,Xr>2.6&&de("end").hidden&&(Zm(A.result),de("hud").hidden=!0))}_m(n,A.time),Pm(n,A.time);let t=0;for(let i of A.fighters)i.alive&&t<En.push.value.length&&En.push.value[t++].set(i.x,i.z,Qm);for(Kn&&t<En.push.value.length&&En.push.value[t++].set(Kn.f.x,Kn.f.z,Qm);t<En.push.value.length;t++)En.push.value[t].set(0,0,0);if(A.me&&A.me.alive&&A.state!=="menu"?En.me.value.set(A.me.x,A.me.z,2.2):En.me.value.set(0,0,0),A.dbgCam)ct.position.set(A.dbgCam[0],A.dbgCam[1],A.dbgCam[2]),ct.lookAt(A.dbgCam[3],A.dbgCam[4],A.dbgCam[5]);else if(A.state==="menu"&&Kn){let i=Kn,s=i.f;i.hop-=n,s.victory=i.hop>0,s.supT+=n,Rc(i.V,s,n,A.time);let r=innerWidth/innerHeight>1.3?.35:0;ct.position.set(s.x+r*1.5,1.55,s.z-4.4),ct.lookAt(s.x+r,.75,s.z)}else if(A.state==="end"&&A.me){let i=A.endFocus||A.me,s=A.endYaw+Math.sin(A.time*.3)*.35;e0.set(i.x+Math.sin(s)*4.6,2.7,i.z+Math.cos(s)*4.6),ct.position.lerp(e0,1-Math.exp(-n*2.5)),ct.lookAt(i.x,.8,i.z)}else A.me&&zm(n);km(),Fm(),Vp(n),Wm(),A.state!=="menu"&&kc(),qm(n),Rs.position.copy(ct.position)}var t0=performance.now();function r0(n){let e=(n-t0)/1e3;t0=n;let t=Math.min(.05,e);A.state==="end"&&Xr<1.2&&(t*=.4),!A.paused&&!Jt.adOn&&Hc(t),_p(e,A.state==="play"),Uh(),requestAnimationFrame(r0)}Vc();$m();requestAnimationFrame(r0);window.__bg={start(n={}){n.hero&&(di.hero=n.hero),n.diff&&(di.diff=n.diff),Xu(n),n.skipCount&&(Vo=0,A.state="play")},autopilot(n){A.me&&(A.me.bot=n?Fu("normal"):null)},sim(n,e=1/30){let t=Math.round(n/e);for(let i=0;i<t&&(Hc(e),!(A.state==="end"&&Xr>3));i++);},get s(){let n=A.match;return{state:A.state,t:n&&+n.t.toFixed(1),count:n&&[...n.count],cd:n&&n.cd&&{team:n.cd.team,t:+n.cd.t.toFixed(1)},over:n&&n.over,winner:n&&n.winner,why:n&&n.why,pickups:A.pickups.length,me:A.me&&{hp:Math.round(A.me.hp),alive:A.me.alive,x:+A.me.x.toFixed(1),z:+A.me.z.toFixed(1),gems:A.me.gems,charge:+A.me.charge.toFixed(2),ammo:+A.me.ammo.toFixed(2)}}},board:()=>A.fighters.map(n=>`${n.name}[${n.hero}/t${n.team}] k${n.kills} d${n.deaths} g${n.gemsPicked} dmg${Math.round(n.dmgDone)}`),fighters:()=>A.fighters,G:A,A:X,CAM:ke,menu:di,showMenu:Vc,cam(n){A.dbgCam=n},info:()=>({calls:Ft.info.render.calls,tris:Ft.info.render.triangles,geos:Ft.info.memory.geometries,tex:Ft.info.memory.textures,progs:Ft.info.programs.length,PR:ue.PR,post:ue.post}),post(n){ue.post=!!n&&!!ue.composer,ue.noPost=!n},pause:qr,tr:xn,L:Ii,tick:Hc,dmg:Br,bench(n=60,e){e&&(Ft.setPixelRatio(e),Tr());let t=Ft.getContext(),i=performance.now(),s=new Uint8Array(4);for(let r=0;r<n;r++)Hc(1/60),Uh(),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,s);return(performance.now()-i)/n}};window.__bgReady=!0;
