var Ch="160";var eg=0,bd=1,tg=2;var Mc=1,Ph=2,Ri=3,mi=0,Bt=1,At=2;var pi=0,Ji=1,gi=2,Sd=3,Ed=4,Lh=5,Rs=100,ng=101,ig=102,wd=103,Td=104,sg=200,rg=201,og=202,ag=203,go=204,xo=205,cg=206,lg=207,hg=208,ug=209,dg=210,fg=211,pg=212,mg=213,gg=214,xg=0,_g=1,vg=2,Ua=3,yg=4,Mg=5,Ih=6,bg=7,Dh=0,Sg=1,Eg=2,ji=0,Fh=1,Uh=2,Nh=3,Io=4,wg=5,Oh=6,Ad="attached",Tg="detached",hp=300,dr=301,fr=302,ql=303,Yl=304,bc=306,Ii=1e3,Un=1001,_o=1002,Ht=1003,Na=1004;var co=1005;var yn=1006,zh=1007;var es=1008;var Qi=1009,Ag=1010,Rg=1011,Bh=1012,up=1013,$i=1014,Pi=1015,Sn=1016,dp=1017,fp=1018,Ps=1020,Cg=1021,Xn=1023,Pg=1024,Lg=1025,Ls=1026,pr=1027,Ig=1028,pp=1029,Dg=1030,mp=1031,gp=1033,hl=33776,ul=33777,dl=33778,fl=33779,Rd=35840,Cd=35841,Pd=35842,Ld=35843,xp=36196,Id=37492,Dd=37496,Fd=37808,Ud=37809,Nd=37810,Od=37811,zd=37812,Bd=37813,kd=37814,Hd=37815,Gd=37816,Vd=37817,Wd=37818,Xd=37819,qd=37820,Yd=37821,pl=36492,Zd=36494,$d=36495,Fg=36283,Kd=36284,Jd=36285,jd=36286;var mr=2300,Ds=2301,ml=2302,Qd=2400,ef=2401,tf=2402,Ug=2500;var _p=0,Sc=1,Do=2,vp=3e3,Is=3001,Ng=3200,Og=3201,kh=0,zg=1,bn="",ct="srgb",Wt="srgb-linear",Hh="display-p3",Ec="display-p3-linear",Oa="linear",pt="srgb",za="rec709",Ba="p3";var Ws=7680;var nf=519,Bg=512,kg=513,Hg=514,yp=515,Gg=516,Vg=517,Wg=518,Xg=519,Zl=35044,wc=35048;var sf="300 es",$l=1035,Li=2e3,ka=2001,ts=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rf=1234567,lo=Math.PI/180,gr=180/Math.PI;function ri(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function Gt(n,e,t){return Math.max(e,Math.min(t,n))}function Gh(n,e){return(n%e+e)%e}function qg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Yg(n,e,t){return n!==e?(t-n)/(e-n):0}function ho(n,e,t){return(1-t)*n+t*e}function Zg(n,e,t,i){return ho(n,e,1-Math.exp(-t*i))}function $g(n,e=1){return e-Math.abs(Gh(n,e*2)-e)}function Kg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Jg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Qg(n,e){return n+Math.random()*(e-n)}function ex(n){return n*(.5-Math.random())}function tx(n){n!==void 0&&(rf=n);let e=rf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nx(n){return n*lo}function ix(n){return n*gr}function Kl(n){return(n&n-1)===0&&n!==0}function sx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ha(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Mp={DEG2RAD:lo,RAD2DEG:gr,generateUUID:ri,clamp:Gt,euclideanModulo:Gh,mapLinear:qg,inverseLerp:Yg,lerp:ho,damp:Zg,pingpong:$g,smoothstep:Kg,smootherstep:Jg,randInt:jg,randFloat:Qg,randFloatSpread:ex,seededRandom:tx,degToRad:nx,radToDeg:ix,isPowerOfTwo:Kl,ceilPowerOfTwo:sx,floorPowerOfTwo:Ha,setQuaternionFromProperEuler:rx,normalize:ft,denormalize:fi},ne=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],p=s[3],m=s[6],v=s[1],_=s[4],y=s[7],P=s[2],S=s[5],A=s[8];return r[0]=o*x+a*v+c*P,r[3]=o*p+a*_+c*S,r[6]=o*m+a*y+c*A,r[1]=l*x+h*v+u*P,r[4]=l*p+h*_+u*S,r[7]=l*m+h*y+u*A,r[2]=d*x+f*v+g*P,r[5]=d*p+f*_+g*S,r[8]=d*m+f*y+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gl=new et;function bp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ox(){let n=vo("canvas");return n.style.display="block",n}var of={};function uo(n){n in of||(of[n]=!0,console.warn(n))}var af=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cf=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oa={[Wt]:{transfer:Oa,primaries:za,toReference:n=>n,fromReference:n=>n},[ct]:{transfer:pt,primaries:za,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ec]:{transfer:Oa,primaries:Ba,toReference:n=>n.applyMatrix3(cf),fromReference:n=>n.applyMatrix3(af)},[Hh]:{transfer:pt,primaries:Ba,toReference:n=>n.convertSRGBToLinear().applyMatrix3(cf),fromReference:n=>n.applyMatrix3(af).convertLinearToSRGB()}},ax=new Set([Wt,Ec]),ot={enabled:!0,_workingColorSpace:Wt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ax.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=oa[e].toReference,s=oa[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return oa[n].primaries},getTransfer:function(n){return n===bn?Oa:oa[n].transfer}};function hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xs,Ga=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=vo("canvas")),Xs.width=e.width,Xs.height=e.height;let i=Xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hr(t[i]/255)*255):t[i]=hr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cx=0,Va=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=ri(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_l(s[o].image)):r.push(_l(s[o]))}else r=_l(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function _l(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ga.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lx=0,on=class n extends ts{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Un,s=Un,r=yn,o=es,a=Xn,c=Qi,l=n.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=ri(),this.name="",this.source=new Va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Is?ct:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?Is:vp}set encoding(e){uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Is?ct:bn}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=hp;on.DEFAULT_ANISOTROPY=1;var mt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,y=(f+1)/2,P=(m+1)/2,S=(h+d)/4,A=(u+x)/4,D=(g+p)/4;return _>y&&_>P?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=S/i,r=A/i):y>P?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=S/s,r=D/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=A/r,s=D/r),this.set(i,s,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jl=class extends ts{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(uo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Is?ct:bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Jl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Wa=class extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jl=class extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let p=1-a,m=c*d+l*f+h*g+u*x,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let P=Math.sqrt(_),S=Math.atan2(P,m*v);p=Math.sin(p*S)/P,a=Math.sin(a*S)/P}let y=a*v;if(c=c*p+d*y,l=l*p+f*y,h=h*p+g*y,u=u*p+x*y,p===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vl=new C,lf=new cn,En=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),aa.copy(i.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),ca.subVectors(this.max,to),qs.subVectors(e.a,to),Ys.subVectors(e.b,to),Zs.subVectors(e.c,to),Wi.subVectors(Ys,qs),Xi.subVectors(Zs,Ys),Ss.subVectors(qs,Zs);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-Ss.z,Ss.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,Ss.z,0,-Ss.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-Ss.y,Ss.x,0];return!yl(t,qs,Ys,Zs,ca)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,qs,Ys,Zs,ca))?!1:(la.crossVectors(Wi,Xi),t=[la.x,la.y,la.z],yl(t,qs,Ys,Zs,ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},bi=[new C,new C,new C,new C,new C,new C,new C,new C],ni=new C,aa=new En,qs=new C,Ys=new C,Zs=new C,Wi=new C,Xi=new C,Ss=new C,to=new C,ca=new C,la=new C,Es=new C;function yl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Es.fromArray(n,r);let a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),c=e.dot(Es),l=t.dot(Es),h=i.dot(Es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var hx=new En,no=new C,Ml=new C,Nn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):hx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);let t=no.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(no,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Ml)),this.expandByPoint(no.copy(e.center).sub(Ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new C,bl=new C,ha=new C,qi=new C,Sl=new C,ua=new C,El=new C,xr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){bl.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(bl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ha),a=qi.dot(this.direction),c=-qi.dot(ha),l=qi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(bl).addScaledVector(ha,d),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){Sl.subVectors(t,e),ua.subVectors(i,e),El.crossVectors(Sl,ua);let o=this.direction.dot(El),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);let c=a*this.direction.dot(ua.crossVectors(qi,ua));if(c<0)return null;let l=a*this.direction.dot(Sl.cross(qi));if(l<0||c+l>o)return null;let h=-a*qi.dot(El);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,d,f,g,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,x,p)}set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ux,e,dx)}lookAt(e,t,i){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Yi.crossVectors(i,Dn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Yi.crossVectors(i,Dn)),Yi.normalize(),da.crossVectors(Dn,Yi),s[0]=Yi.x,s[4]=da.x,s[8]=Dn.x,s[1]=Yi.y,s[5]=da.y,s[9]=Dn.y,s[2]=Yi.z,s[6]=da.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],v=i[3],_=i[7],y=i[11],P=i[15],S=s[0],A=s[4],D=s[8],M=s[12],w=s[1],F=s[5],W=s[9],z=s[13],L=s[2],U=s[6],q=s[10],K=s[14],$=s[3],Z=s[7],te=s[11],re=s[15];return r[0]=o*S+a*w+c*L+l*$,r[4]=o*A+a*F+c*U+l*Z,r[8]=o*D+a*W+c*q+l*te,r[12]=o*M+a*z+c*K+l*re,r[1]=h*S+u*w+d*L+f*$,r[5]=h*A+u*F+d*U+f*Z,r[9]=h*D+u*W+d*q+f*te,r[13]=h*M+u*z+d*K+f*re,r[2]=g*S+x*w+p*L+m*$,r[6]=g*A+x*F+p*U+m*Z,r[10]=g*D+x*W+p*q+m*te,r[14]=g*M+x*z+p*K+m*re,r[3]=v*S+_*w+y*L+P*$,r[7]=v*A+_*F+y*U+P*Z,r[11]=v*D+_*W+y*q+P*te,r[15]=v*M+_*z+y*K+P*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*f-i*c*f)+x*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+p*(+t*l*u-t*a*f-r*o*u+i*o*f+r*a*h-i*l*h)+m*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],v=u*p*l-x*d*l+x*c*f-a*p*f-u*c*m+a*d*m,_=g*d*l-h*p*l-g*c*f+o*p*f+h*c*m-o*d*m,y=h*x*l-g*u*l+g*a*f-o*x*f-h*a*m+o*u*m,P=g*u*c-h*x*c-g*a*d+o*x*d+h*a*p-o*u*p,S=t*v+i*_+s*y+r*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/S;return e[0]=v*A,e[1]=(x*d*r-u*p*r-x*s*f+i*p*f+u*s*m-i*d*m)*A,e[2]=(a*p*r-x*c*r+x*s*l-i*p*l-a*s*m+i*c*m)*A,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*f-i*c*f)*A,e[4]=_*A,e[5]=(h*p*r-g*d*r+g*s*f-t*p*f-h*s*m+t*d*m)*A,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*m-t*c*m)*A,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*A,e[8]=y*A,e[9]=(g*u*r-h*x*r-g*i*f+t*x*f+h*i*m-t*u*m)*A,e[10]=(o*x*r-g*a*r+g*i*l-t*x*l-o*i*m+t*a*m)*A,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*f-t*a*f)*A,e[12]=P*A,e[13]=(h*x*s-g*u*s+g*i*d-t*x*d-h*i*p+t*u*p)*A,e[14]=(g*a*s-o*x*s-g*i*c+t*x*c+o*i*p-t*a*p)*A,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,p=o*u,m=a*u,v=c*l,_=c*h,y=c*u,P=i.x,S=i.y,A=i.z;return s[0]=(1-(x+m))*P,s[1]=(f+y)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(f-y)*S,s[5]=(1-(d+m))*S,s[6]=(p+v)*S,s[7]=0,s[8]=(g+_)*A,s[9]=(p-v)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ii.copy(this);let l=1/r,h=1/o,u=1/a;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,t.setFromRotationMatrix(ii),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Li){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(a===Li)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ka)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Li){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,f=(i+s)*h,g,x;if(a===Li)g=(o+r)*u,x=-2*u;else if(a===ka)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},$s=new C,ii=new Ie,ux=new C(0,0,0),dx=new C(1,1,1),Yi=new C,da=new C,Dn=new C,hf=new Ie,uf=new cn,ns=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uf.setFromEuler(this),this.setFromQuaternion(uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ns.DEFAULT_ORDER="XYZ";var Xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fx=0,df=new C,Ks=new cn,Ei=new Ie,fa=new C,io=new C,px=new C,mx=new cn,ff=new C(1,0,0),pf=new C(0,1,0),mf=new C(0,0,1),gx={type:"added"},xx={type:"removed"},gt=class n extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new ns,i=new cn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new et}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(ff,e)}rotateY(e){return this.rotateOnAxis(pf,e)}rotateZ(e){return this.rotateOnAxis(mf,e)}translateOnAxis(e,t){return df.copy(e).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ff,e)}translateY(e){return this.translateOnAxis(pf,e)}translateZ(e){return this.translateOnAxis(mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fa.copy(e):fa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(io,fa,this.up):Ei.lookAt(fa,io,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(Ei),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xx)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};gt.DEFAULT_UP=new C(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=new C,wi=new C,wl=new C,Ti=new C,Js=new C,js=new C,gf=new C,Tl=new C,Al=new C,Rl=new C,pa=!1,ar=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),si.subVectors(e,t),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){si.subVectors(s,t),wi.subVectors(i,t),wl.subVectors(e,t);let o=si.dot(si),a=si.dot(wi),c=si.dot(wl),l=wi.dot(wi),h=wi.dot(wl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(e,t,i,s,r,o,a,c){return pa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pa=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static isFrontFacing(e,t,i,s){return si.subVectors(i,t),wi.subVectors(e,t),si.cross(wi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),si.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return pa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pa=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Js.subVectors(s,i),js.subVectors(r,i),Tl.subVectors(e,i);let c=Js.dot(Tl),l=js.dot(Tl);if(c<=0&&l<=0)return t.copy(i);Al.subVectors(e,s);let h=Js.dot(Al),u=js.dot(Al);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Js,o);Rl.subVectors(e,r);let f=Js.dot(Rl),g=js.dot(Rl);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(js,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return gf.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(gf,a);let m=1/(p+x+d);return o=x*m,a=d*m,t.copy(i).addScaledVector(Js,o).addScaledVector(js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Cl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var oe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=Gh(e,1),t=Gt(t,0,1),i=Gt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Cl(o,r,e+1/3),this.g=Cl(o,r,e),this.b=Cl(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=ct){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){let i=Sp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=xl(e.r),this.g=xl(e.g),this.b=xl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return ot.fromWorkingColorSpace(fn.copy(this),e),Math.round(Gt(fn.r*255,0,255))*65536+Math.round(Gt(fn.g*255,0,255))*256+Math.round(Gt(fn.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(fn.copy(this),t);let i=fn.r,s=fn.g,r=fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=ct){ot.fromWorkingColorSpace(fn.copy(this),e);let t=fn.r,i=fn.g,s=fn.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(ma);let i=ho(Zi.h,ma.h,t),s=ho(Zi.s,ma.s,t),r=ho(Zi.l,ma.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new oe;oe.NAMES=Sp;var _x=0,wn=class extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Ji,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=xo,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==go&&(i.blendSrc=this.blendSrc),this.blendDst!==xo&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},We=class extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new C,ga=new ne,lt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ga.fromBufferAttribute(this,t),ga.applyMatrix3(e),this.setXY(t,ga.x,ga.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zl&&(e.usage=this.usage),e}};var _r=class extends lt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var qa=class extends lt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Be=class extends lt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var vx=0,Wn=new Ie,Pl=new gt,Qs=new C,Fn=new En,so=new En,Qt=new C,St=class n extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bp(e)?qa:_r)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return Pl.lookAt(e),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Be(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];so.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(Fn.min,so.min),Fn.expandByPoint(Qt),Qt.addVectors(Fn.max,so.max),Fn.expandByPoint(Qt)):(Fn.expandByPoint(so.min),Fn.expandByPoint(so.max))}Fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Qt.fromBufferAttribute(a,l),c&&(Qs.fromBufferAttribute(e,l),Qt.add(Qs)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new C,h[w]=new C;let u=new C,d=new C,f=new C,g=new ne,x=new ne,p=new ne,m=new C,v=new C;function _(w,F,W){u.fromArray(s,w*3),d.fromArray(s,F*3),f.fromArray(s,W*3),g.fromArray(o,w*2),x.fromArray(o,F*2),p.fromArray(o,W*2),d.sub(u),f.sub(u),x.sub(g),p.sub(g);let z=1/(x.x*p.y-p.x*x.y);isFinite(z)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-x.y).multiplyScalar(z),v.copy(f).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(z),l[w].add(m),l[F].add(m),l[W].add(m),h[w].add(v),h[F].add(v),h[W].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,F=y.length;w<F;++w){let W=y[w],z=W.start,L=W.count;for(let U=z,q=z+L;U<q;U+=3)_(i[U+0],i[U+1],i[U+2])}let P=new C,S=new C,A=new C,D=new C;function M(w){A.fromArray(r,w*3),D.copy(A);let F=l[w];P.copy(F),P.sub(A.multiplyScalar(A.dot(F))).normalize(),S.crossVectors(D,F);let z=S.dot(h[w])<0?-1:1;c[w*4]=P.x,c[w*4+1]=P.y,c[w*4+2]=P.z,c[w*4+3]=z}for(let w=0,F=y.length;w<F;++w){let W=y[w],z=W.start,L=W.count;for(let U=z,q=z+L;U<q;U+=3)M(i[U+0]),M(i[U+1]),M(i[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new lt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xf=new Ie,ws=new xr,xa=new Nn,_f=new C,er=new C,tr=new C,nr=new C,Ll=new C,_a=new C,va=new ne,ya=new ne,Ma=new ne,vf=new C,yf=new C,Mf=new C,ba=new C,Sa=new C,de=class extends gt{constructor(e=new St,t=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){_a.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ll.fromBufferAttribute(u,e),o?_a.addScaledVector(Ll,h):_a.addScaledVector(Ll.sub(t),h))}t.add(_a)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(r),ws.copy(e.ray).recast(e.near),!(xa.containsPoint(ws.origin)===!1&&(ws.intersectSphere(xa,_f)===null||ws.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(xf.copy(r).invert(),ws.copy(e.ray).applyMatrix4(xf),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,P=_;y<P;y+=3){let S=a.getX(y),A=a.getX(y+1),D=a.getX(y+2);s=Ea(this,m,e,i,l,h,u,S,A,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=a.getX(p),_=a.getX(p+1),y=a.getX(p+2);s=Ea(this,o,e,i,l,h,u,v,_,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),_=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,P=_;y<P;y+=3){let S=y,A=y+1,D=y+2;s=Ea(this,m,e,i,l,h,u,S,A,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=p,_=p+1,y=p+2;s=Ea(this,o,e,i,l,h,u,v,_,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function yx(n,e,t,i,s,r,o,a){let c;if(e.side===Bt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===mi,a),c===null)return null;Sa.copy(a),Sa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Sa);return l<t.near||l>t.far?null:{distance:l,point:Sa.clone(),object:n}}function Ea(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,er),n.getVertexPosition(c,tr),n.getVertexPosition(l,nr);let h=yx(n,e,t,i,er,tr,nr,ba);if(h){s&&(va.fromBufferAttribute(s,a),ya.fromBufferAttribute(s,c),Ma.fromBufferAttribute(s,l),h.uv=ar.getInterpolation(ba,er,tr,nr,va,ya,Ma,new ne)),r&&(va.fromBufferAttribute(r,a),ya.fromBufferAttribute(r,c),Ma.fromBufferAttribute(r,l),h.uv1=ar.getInterpolation(ba,er,tr,nr,va,ya,Ma,new ne),h.uv2=h.uv1),o&&(vf.fromBufferAttribute(o,a),yf.fromBufferAttribute(o,c),Mf.fromBufferAttribute(o,l),h.normal=ar.getInterpolation(ba,er,tr,nr,vf,yf,Mf,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new C,materialIndex:0};ar.getNormal(er,tr,nr,u.normal),h.face=u}return h}var xi=class n extends St{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(u,2));function g(x,p,m,v,_,y,P,S,A,D,M){let w=y/A,F=P/D,W=y/2,z=P/2,L=S/2,U=A+1,q=D+1,K=0,$=0,Z=new C;for(let te=0;te<q;te++){let re=te*F-z;for(let ge=0;ge<U;ge++){let Y=ge*w-W;Z[x]=Y*v,Z[p]=re*_,Z[m]=L,l.push(Z.x,Z.y,Z.z),Z[x]=0,Z[p]=0,Z[m]=S>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ge/A),u.push(1-te/D),K+=1}}for(let te=0;te<D;te++)for(let re=0;re<A;re++){let ge=d+re+U*te,Y=d+re+U*(te+1),J=d+(re+1)+U*(te+1),pe=d+(re+1)+U*te;c.push(ge,Y,pe),c.push(Y,J,pe),$+=6}a.addGroup(f,$,M),f+=$,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function vn(n){let e={};for(let t=0;t<n.length;t++){let i=vr(n[t]);for(let s in i)e[s]=i[s]}return e}function Mx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ep(n){return n.getRenderTarget()===null?n.outputColorSpace:ot.workingColorSpace}var hs={clone:vr,merge:vn},bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xt=class extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bx,this.fragmentShader=Sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=Mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ya=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vt=class extends Ya{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ir=-90,sr=1,yo=class extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(ir,sr,e,t);s.layers=this.layers,this.add(s);let r=new Vt(ir,sr,e,t);r.layers=this.layers,this.add(r);let o=new Vt(ir,sr,e,t);o.layers=this.layers,this.add(o);let a=new Vt(ir,sr,e,t);a.layers=this.layers,this.add(a);let c=new Vt(ir,sr,e,t);c.layers=this.layers,this.add(c);let l=new Vt(ir,sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Za=class extends on{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mo=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(uo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Is?ct:bn),this.texture=new Za(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xi(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:pi});r.uniforms.tEquirect.value=t;let o=new de(s,r),a=t.minFilter;return t.minFilter===es&&(t.minFilter=yn),new yo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Il=new C,Ex=new C,wx=new et,Ci=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Il.subVectors(i,t).cross(Ex.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Il),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||wx.getNormalMatrix(e),s=this.coplanarPoint(Il).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ts=new Nn,wa=new C,bo=class{constructor(e=new Ci,t=new Ci,i=new Ci,s=new Ci,r=new Ci,o=new Ci){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],p=s[11],m=s[12],v=s[13],_=s[14],y=s[15];if(i[0].setComponents(c-r,d-l,p-f,y-m).normalize(),i[1].setComponents(c+r,d+l,p+f,y+m).normalize(),i[2].setComponents(c+o,d+h,p+g,y+v).normalize(),i[3].setComponents(c-o,d-h,p-g,y-v).normalize(),i[4].setComponents(c-a,d-u,p-x,y-_).normalize(),t===Li)i[5].setComponents(c+a,d+u,p+x,y+_).normalize();else if(t===ka)i[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(wa.x=s.normal.x>0?e.max.x:e.min.x,wa.y=s.normal.y>0?e.max.y:e.min.y,wa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Tx(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,p=g.length;x<p;x++){let m=g[x];t?n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var en=class n extends St{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let v=m*d-o;for(let _=0;_<l;_++){let y=_*u-r;g.push(y,-v,0),x.push(0,0,1),p.push(_/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let _=v+l*m,y=v+l*(m+1),P=v+1+l*(m+1),S=v+1+l*m;f.push(_,y,S),f.push(y,P,S)}this.setIndex(f),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rx=`#ifdef USE_ALPHAHASH
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
#endif`,Cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dx=`#ifdef USE_AOMAP
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
#endif`,Fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ux=`#ifdef USE_BATCHING
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
#endif`,Nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kx=`#ifdef USE_IRIDESCENCE
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
#endif`,Hx=`#ifdef USE_BUMPMAP
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
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kx=`#define PI 3.141592653589793
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
} // validated`,Jx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jx=`vec3 transformedNormal = objectNormal;
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
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i_="gl_FragColor = linearToOutputTexel( gl_FragColor );",s_=`
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
}`,r_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l_=`#ifdef USE_ENVMAP
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
#endif`,h_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p_=`#ifdef USE_GRADIENTMAP
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
}`,m_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,g_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v_=`uniform bool receiveShadow;
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
#endif`,y_=`#ifdef USE_ENVMAP
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
#endif`,M_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w_=`PhysicalMaterial material;
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
#endif`,T_=`struct PhysicalMaterial {
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
}`,A_=`
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
#endif`,R_=`#if defined( RE_IndirectDiffuse )
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
#endif`,C_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,D_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,F_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O_=`#if defined( USE_POINTS_UV )
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
#endif`,z_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H_=`#ifdef USE_MORPHNORMALS
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
#endif`,G_=`#ifdef USE_MORPHTARGETS
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
#endif`,V_=`#ifdef USE_MORPHTARGETS
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
#endif`,W_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$_=`#ifdef USE_NORMALMAP
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
#endif`,K_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,av=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uv=`float getShadowMask() {
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
}`,dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fv=`#ifdef USE_SKINNING
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
#endif`,pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mv=`#ifdef USE_SKINNING
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
#endif`,gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yv=`#ifdef USE_TRANSMISSION
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
#endif`,Mv=`#ifdef USE_TRANSMISSION
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Av=`uniform sampler2D t2D;
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
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`#include <common>
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
}`,Dv=`#if DEPTH_PACKING == 3200
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
}`,Fv=`#define DISTANCE
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
}`,Uv=`#define DISTANCE
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
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`uniform float scale;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,kv=`#include <common>
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Gv=`#define LAMBERT
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
}`,Vv=`#define LAMBERT
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
}`,Wv=`#define MATCAP
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
}`,Xv=`#define MATCAP
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
}`,qv=`#define NORMAL
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
}`,Yv=`#define NORMAL
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
}`,Zv=`#define PHONG
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
}`,$v=`#define PHONG
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
}`,Kv=`#define STANDARD
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
}`,Jv=`#define STANDARD
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
}`,jv=`#define TOON
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
}`,Qv=`#define TOON
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
}`,ey=`uniform float size;
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
}`,ty=`uniform vec3 diffuse;
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
}`,ny=`#include <common>
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
}`,iy=`uniform vec3 color;
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
}`,sy=`uniform float rotation;
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
}`,ry=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Ax,alphahash_pars_fragment:Rx,alphamap_fragment:Cx,alphamap_pars_fragment:Px,alphatest_fragment:Lx,alphatest_pars_fragment:Ix,aomap_fragment:Dx,aomap_pars_fragment:Fx,batching_pars_vertex:Ux,batching_vertex:Nx,begin_vertex:Ox,beginnormal_vertex:zx,bsdfs:Bx,iridescence_fragment:kx,bumpmap_pars_fragment:Hx,clipping_planes_fragment:Gx,clipping_planes_pars_fragment:Vx,clipping_planes_pars_vertex:Wx,clipping_planes_vertex:Xx,color_fragment:qx,color_pars_fragment:Yx,color_pars_vertex:Zx,color_vertex:$x,common:Kx,cube_uv_reflection_fragment:Jx,defaultnormal_vertex:jx,displacementmap_pars_vertex:Qx,displacementmap_vertex:e_,emissivemap_fragment:t_,emissivemap_pars_fragment:n_,colorspace_fragment:i_,colorspace_pars_fragment:s_,envmap_fragment:r_,envmap_common_pars_fragment:o_,envmap_pars_fragment:a_,envmap_pars_vertex:c_,envmap_physical_pars_fragment:y_,envmap_vertex:l_,fog_vertex:h_,fog_pars_vertex:u_,fog_fragment:d_,fog_pars_fragment:f_,gradientmap_pars_fragment:p_,lightmap_fragment:m_,lightmap_pars_fragment:g_,lights_lambert_fragment:x_,lights_lambert_pars_fragment:__,lights_pars_begin:v_,lights_toon_fragment:M_,lights_toon_pars_fragment:b_,lights_phong_fragment:S_,lights_phong_pars_fragment:E_,lights_physical_fragment:w_,lights_physical_pars_fragment:T_,lights_fragment_begin:A_,lights_fragment_maps:R_,lights_fragment_end:C_,logdepthbuf_fragment:P_,logdepthbuf_pars_fragment:L_,logdepthbuf_pars_vertex:I_,logdepthbuf_vertex:D_,map_fragment:F_,map_pars_fragment:U_,map_particle_fragment:N_,map_particle_pars_fragment:O_,metalnessmap_fragment:z_,metalnessmap_pars_fragment:B_,morphcolor_vertex:k_,morphnormal_vertex:H_,morphtarget_pars_vertex:G_,morphtarget_vertex:V_,normal_fragment_begin:W_,normal_fragment_maps:X_,normal_pars_fragment:q_,normal_pars_vertex:Y_,normal_vertex:Z_,normalmap_pars_fragment:$_,clearcoat_normal_fragment_begin:K_,clearcoat_normal_fragment_maps:J_,clearcoat_pars_fragment:j_,iridescence_pars_fragment:Q_,opaque_fragment:ev,packing:tv,premultiplied_alpha_fragment:nv,project_vertex:iv,dithering_fragment:sv,dithering_pars_fragment:rv,roughnessmap_fragment:ov,roughnessmap_pars_fragment:av,shadowmap_pars_fragment:cv,shadowmap_pars_vertex:lv,shadowmap_vertex:hv,shadowmask_pars_fragment:uv,skinbase_vertex:dv,skinning_pars_vertex:fv,skinning_vertex:pv,skinnormal_vertex:mv,specularmap_fragment:gv,specularmap_pars_fragment:xv,tonemapping_fragment:_v,tonemapping_pars_fragment:vv,transmission_fragment:yv,transmission_pars_fragment:Mv,uv_pars_fragment:bv,uv_pars_vertex:Sv,uv_vertex:Ev,worldpos_vertex:wv,background_vert:Tv,background_frag:Av,backgroundCube_vert:Rv,backgroundCube_frag:Cv,cube_vert:Pv,cube_frag:Lv,depth_vert:Iv,depth_frag:Dv,distanceRGBA_vert:Fv,distanceRGBA_frag:Uv,equirect_vert:Nv,equirect_frag:Ov,linedashed_vert:zv,linedashed_frag:Bv,meshbasic_vert:kv,meshbasic_frag:Hv,meshlambert_vert:Gv,meshlambert_frag:Vv,meshmatcap_vert:Wv,meshmatcap_frag:Xv,meshnormal_vert:qv,meshnormal_frag:Yv,meshphong_vert:Zv,meshphong_frag:$v,meshphysical_vert:Kv,meshphysical_frag:Jv,meshtoon_vert:jv,meshtoon_frag:Qv,points_vert:ey,points_frag:ty,shadow_vert:ny,shadow_frag:iy,sprite_vert:sy,sprite_frag:ry},ce={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},di={basic:{uniforms:vn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:vn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new oe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:vn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:vn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:vn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new oe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:vn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:vn([ce.points,ce.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:vn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:vn([ce.common,ce.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:vn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:vn([ce.sprite,ce.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:vn([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:vn([ce.lights,ce.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};di.physical={uniforms:vn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Ta={r:0,b:0,g:0};function oy(n,e,t,i,s,r,o){let a=new oe(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(p,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),v=!0);let y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===bc)?(h===void 0&&(h=new de(new xi(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:vr(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=ot.getTransfer(_.colorSpace)!==pt,(u!==_||d!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new de(new en(2,2),new xt({name:"BackgroundMaterial",uniforms:vr(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=ot.getTransfer(_.colorSpace)!==pt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,m){p.getRGB(Ta,Ep(n)),i.buffers.color.setClear(Ta.r,Ta.g,Ta.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),c=m,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:g}}function ay(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=p(null),l=c,h=!1;function u(L,U,q,K,$){let Z=!1;if(o){let te=x(K,q,U);l!==te&&(l=te,f(l.object)),Z=m(L,K,q,$),Z&&v(L,K,q,$)}else{let te=U.wireframe===!0;(l.geometry!==K.id||l.program!==q.id||l.wireframe!==te)&&(l.geometry=K.id,l.program=q.id,l.wireframe=te,Z=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,D(L,U,q,K),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,U,q){let K=q.wireframe===!0,$=a[L.id];$===void 0&&($={},a[L.id]=$);let Z=$[U.id];Z===void 0&&(Z={},$[U.id]=Z);let te=Z[K];return te===void 0&&(te=p(d()),Z[K]=te),te}function p(L){let U=[],q=[],K=[];for(let $=0;$<s;$++)U[$]=0,q[$]=0,K[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:K,object:L,attributes:{},index:null}}function m(L,U,q,K){let $=l.attributes,Z=U.attributes,te=0,re=q.getAttributes();for(let ge in re)if(re[ge].location>=0){let J=$[ge],pe=Z[ge];if(pe===void 0&&(ge==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),ge==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),J===void 0||J.attribute!==pe||pe&&J.data!==pe.data)return!0;te++}return l.attributesNum!==te||l.index!==K}function v(L,U,q,K){let $={},Z=U.attributes,te=0,re=q.getAttributes();for(let ge in re)if(re[ge].location>=0){let J=Z[ge];J===void 0&&(ge==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),ge==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));let pe={};pe.attribute=J,J&&J.data&&(pe.data=J.data),$[ge]=pe,te++}l.attributes=$,l.attributesNum=te,l.index=K}function _(){let L=l.newAttributes;for(let U=0,q=L.length;U<q;U++)L[U]=0}function y(L){P(L,0)}function P(L,U){let q=l.newAttributes,K=l.enabledAttributes,$=l.attributeDivisors;q[L]=1,K[L]===0&&(n.enableVertexAttribArray(L),K[L]=1),$[L]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),$[L]=U)}function S(){let L=l.newAttributes,U=l.enabledAttributes;for(let q=0,K=U.length;q<K;q++)U[q]!==L[q]&&(n.disableVertexAttribArray(q),U[q]=0)}function A(L,U,q,K,$,Z,te){te===!0?n.vertexAttribIPointer(L,U,q,$,Z):n.vertexAttribPointer(L,U,q,K,$,Z)}function D(L,U,q,K){if(i.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let $=K.attributes,Z=q.getAttributes(),te=U.defaultAttributeValues;for(let re in Z){let ge=Z[re];if(ge.location>=0){let Y=$[re];if(Y===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){let J=Y.normalized,pe=Y.itemSize,Ee=t.get(Y);if(Ee===void 0)continue;let Se=Ee.buffer,Ge=Ee.type,Xe=Ee.bytesPerElement,Fe=i.isWebGL2===!0&&(Ge===n.INT||Ge===n.UNSIGNED_INT||Y.gpuType===up);if(Y.isInterleavedBufferAttribute){let rt=Y.data,k=rt.stride,mn=Y.offset;if(rt.isInstancedInterleavedBuffer){for(let Ae=0;Ae<ge.locationSize;Ae++)P(ge.location+Ae,rt.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ae=0;Ae<ge.locationSize;Ae++)y(ge.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let Ae=0;Ae<ge.locationSize;Ae++)A(ge.location+Ae,pe/ge.locationSize,Ge,J,k*Xe,(mn+pe/ge.locationSize*Ae)*Xe,Fe)}else{if(Y.isInstancedBufferAttribute){for(let rt=0;rt<ge.locationSize;rt++)P(ge.location+rt,Y.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let rt=0;rt<ge.locationSize;rt++)y(ge.location+rt);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let rt=0;rt<ge.locationSize;rt++)A(ge.location+rt,pe/ge.locationSize,Ge,J,pe*Xe,pe/ge.locationSize*rt*Xe,Fe)}}else if(te!==void 0){let J=te[re];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(ge.location,J);break;case 3:n.vertexAttrib3fv(ge.location,J);break;case 4:n.vertexAttrib4fv(ge.location,J);break;default:n.vertexAttrib1fv(ge.location,J)}}}}S()}function M(){W();for(let L in a){let U=a[L];for(let q in U){let K=U[q];for(let $ in K)g(K[$].object),delete K[$];delete U[q]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;let U=a[L.id];for(let q in U){let K=U[q];for(let $ in K)g(K[$].object),delete K[$];delete U[q]}delete a[L.id]}function F(L){for(let U in a){let q=a[U];if(q[L.id]===void 0)continue;let K=q[L.id];for(let $ in K)g(K[$].object),delete K[$];delete q[L.id]}}function W(){z(),h=!0,l!==c&&(l=c,f(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:W,resetDefaultState:z,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:y,disableUnusedAttributes:S}}function cy(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function ly(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,y=o||e.has("OES_texture_float"),P=_&&y,S=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:P,maxSamples:S}}function hy(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Ci,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let v=r?0:i,_=v*4,y=m.clippingState||null;c.value=y,y=h(g,d,_,f);for(let P=0;P!==_;++P)y[P]=t[P];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,y=f;_!==x;++_,y+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function uy(n){let e=new WeakMap;function t(o,a){return a===ql?o.mapping=dr:a===Yl&&(o.mapping=fr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ql||a===Yl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Mo(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var is=class extends Ya{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cr=4,bf=[.125,.215,.35,.446,.526,.582],Cs=20,Dl=new is,Sf=new oe,Fl=null,Ul=0,Nl=0,As=(1+Math.sqrt(5))/2,rr=1/As,Ef=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,As,rr),new C(0,As,-rr),new C(rr,0,As),new C(-rr,0,As),new C(As,rr,0),new C(-As,rr,0)],yr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Fl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fl,Ul,Nl),e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Sn,format:Xn,colorSpace:Wt,depthBuffer:!1},s=wf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dy(r)),this._blurMaterial=fy(r,e,t)}return s}_compileMaterial(e){let t=new de(this._lodPlanes[0],e);this._renderer.compile(t,Dl)}_sceneToCubeUV(e,t,i,s){let a=new Vt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Sf),h.toneMapping=ji,h.autoClear=!1;let f=new We({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new de(new xi,f),x=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(Sf),x=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let _=this._cubeSize;Aa(s,v*_,m>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===dr||e.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Aa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Dl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ef[(s-1)%Ef.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Cs-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Cs;p>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cs}`);let m=[],v=0;for(let A=0;A<Cs;++A){let D=A/x,M=Math.exp(-D*D/2);m.push(M),A===0?v+=M:A<p&&(v+=2*M)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let y=this._sizeLods[s],P=3*y*(s>_-cr?s-_+cr:0),S=4*(this._cubeSize-y);Aa(t,P,S,3*y,2*y),c.setRenderTarget(t),c.render(u,Dl)}};function dy(n){let e=[],t=[],i=[],s=n,r=n-cr+1+bf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-cr?c=bf[o-n+cr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,p=2,m=1,v=new Float32Array(x*g*f),_=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let S=0;S<f;S++){let A=S%3*2/3-1,D=S>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];v.set(M,x*g*S),_.set(d,p*g*S);let w=[S,S,S,S,S,S];y.set(w,m*g*S)}let P=new St;P.setAttribute("position",new lt(v,x)),P.setAttribute("uv",new lt(_,p)),P.setAttribute("faceIndex",new lt(y,m)),e.push(P),s>cr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wf(n,e,t){let i=new an(n,e,t);return i.texture.mapping=bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Aa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function fy(n,e,t){let i=new Float32Array(Cs),s=new C(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Tf(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Af(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Vh(){return`

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
	`}function py(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===ql||c===Yl,h=c===dr||c===fr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new yr(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new yr(n));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function my(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function gy(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],n.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let _=0,y=v.length;_<y;_+=3){let P=v[_+0],S=v[_+1],A=v[_+2];d.push(P,S,S,A,A,P)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let P=_+0,S=_+1,A=_+2;d.push(P,S,S,A,A,P)}}else return;let p=new(bp(d)?qa:_r)(d,1);p.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function xy(n,e,t,i){let s=i.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){n.drawElements(r,g,a,f*c),t.update(g,r,1)}function u(f,g,x){if(x===0)return;let p,m;if(s)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,f*c,x),t.update(g,r,x)}function d(f,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<x;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let m=0;for(let v=0;v<x;v++)m+=g[v];t.update(m,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function _y(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function vy(n,e){return n[0]-e[0]}function yy(n,e){return Math.abs(e[1])-Math.abs(n[1])}function My(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new mt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],D=0;v===!0&&(D=1),_===!0&&(D=2),y===!0&&(D=3);let M=h.attributes.position.count*D,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let F=new Float32Array(M*w*4*g),W=new Wa(F,M,w,g);W.type=Pi,W.needsUpdate=!0;let z=D*4;for(let U=0;U<g;U++){let q=P[U],K=S[U],$=A[U],Z=M*w*4*U;for(let te=0;te<q.count;te++){let re=te*z;v===!0&&(o.fromBufferAttribute(q,te),F[Z+re+0]=o.x,F[Z+re+1]=o.y,F[Z+re+2]=o.z,F[Z+re+3]=0),_===!0&&(o.fromBufferAttribute(K,te),F[Z+re+4]=o.x,F[Z+re+5]=o.y,F[Z+re+6]=o.z,F[Z+re+7]=0),y===!0&&(o.fromBufferAttribute($,te),F[Z+re+8]=o.x,F[Z+re+9]=o.y,F[Z+re+10]=o.z,F[Z+re+11]=$.itemSize===4?o.w:1)}}x={count:g,texture:W,size:new ne(M,w)},r.set(h,x),h.addEventListener("dispose",L)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];let m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",m),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<f;_++){let y=g[_];y[0]=_,y[1]=d[_]}g.sort(yy);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(vy);let x=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let y=a[_],P=y[0],S=y[1];P!==Number.MAX_SAFE_INTEGER&&S?(x&&h.getAttribute("morphTarget"+_)!==x[P]&&h.setAttribute("morphTarget"+_,x[P]),p&&h.getAttribute("morphNormal"+_)!==p[P]&&h.setAttribute("morphNormal"+_,p[P]),s[_]=S,m+=S):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let v=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function by(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var $a=class extends on{constructor(e,t,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:Ls,h!==Ls&&h!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ls&&(i=$i),i===void 0&&h===pr&&(i=Ps),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ht,this.minFilter=c!==void 0?c:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Tp=new on,Ap=new $a(1,1);Ap.compareFunction=yp;var Rp=new Wa,Cp=new jl,Pp=new Za,Rf=[],Cf=[],Pf=new Float32Array(16),Lf=new Float32Array(9),If=new Float32Array(4);function Rr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Rf[s];if(r===void 0&&(r=new Float32Array(s),Rf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tc(n,e){let t=Cf[e];t===void 0&&(t=new Int32Array(e),Cf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ey(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function wy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function Ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function Ay(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;If.set(i),n.uniformMatrix2fv(this.addr,!1,If),qt(t,i)}}function Ry(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Lf.set(i),n.uniformMatrix3fv(this.addr,!1,Lf),qt(t,i)}}function Cy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Pf.set(i),n.uniformMatrix4fv(this.addr,!1,Pf),qt(t,i)}}function Py(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ly(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function Iy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Dy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function Fy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Uy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function Ny(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function Oy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function zy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Ap:Tp;t.setTexture2D(e||r,s)}function By(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cp,s)}function ky(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pp,s)}function Hy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Rp,s)}function Gy(n){switch(n){case 5126:return Sy;case 35664:return Ey;case 35665:return wy;case 35666:return Ty;case 35674:return Ay;case 35675:return Ry;case 35676:return Cy;case 5124:case 35670:return Py;case 35667:case 35671:return Ly;case 35668:case 35672:return Iy;case 35669:case 35673:return Dy;case 5125:return Fy;case 36294:return Uy;case 36295:return Ny;case 36296:return Oy;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return By;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return Hy}}function Vy(n,e){n.uniform1fv(this.addr,e)}function Wy(n,e){let t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function Xy(n,e){let t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function qy(n,e){let t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function Yy(n,e){let t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zy(n,e){let t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $y(n,e){let t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ky(n,e){n.uniform1iv(this.addr,e)}function Jy(n,e){n.uniform2iv(this.addr,e)}function jy(n,e){n.uniform3iv(this.addr,e)}function Qy(n,e){n.uniform4iv(this.addr,e)}function eM(n,e){n.uniform1uiv(this.addr,e)}function tM(n,e){n.uniform2uiv(this.addr,e)}function nM(n,e){n.uniform3uiv(this.addr,e)}function iM(n,e){n.uniform4uiv(this.addr,e)}function sM(n,e,t){let i=this.cache,s=e.length,r=Tc(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Tp,r[o])}function rM(n,e,t){let i=this.cache,s=e.length,r=Tc(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cp,r[o])}function oM(n,e,t){let i=this.cache,s=e.length,r=Tc(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pp,r[o])}function aM(n,e,t){let i=this.cache,s=e.length,r=Tc(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rp,r[o])}function cM(n){switch(n){case 5126:return Vy;case 35664:return Wy;case 35665:return Xy;case 35666:return qy;case 35674:return Yy;case 35675:return Zy;case 35676:return $y;case 5124:case 35670:return Ky;case 35667:case 35671:return Jy;case 35668:case 35672:return jy;case 35669:case 35673:return Qy;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return aM}}var Ql=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gy(t.type)}},eh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cM(t.type)}},th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ol=/(\w+)(\])?(\[|\.)?/g;function Df(n,e){n.seq.push(e),n.map[e.id]=e}function lM(n,e,t){let i=n.name,s=i.length;for(Ol.lastIndex=0;;){let r=Ol.exec(i),o=Ol.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Df(t,l===void 0?new Ql(a,n,e):new eh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new th(a),Df(t,u)),t=u}}}var ur=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);lM(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Ff(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var hM=37297,uM=0;function dM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function fM(n){let e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n),i;switch(e===t?i="":e===Ba&&t===za?i="LinearDisplayP3ToLinearSRGB":e===za&&t===Ba&&(i="LinearSRGBToLinearDisplayP3"),n){case Wt:case Ec:return[i,"LinearTransferOETF"];case ct:case Hh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Uf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+dM(n.getShaderSource(e),o)}else return s}function pM(n,e){let t=fM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mM(n,e){let t;switch(e){case Fh:t="Linear";break;case Uh:t="Reinhard";break;case Nh:t="OptimizedCineon";break;case Io:t="ACESFilmic";break;case Oh:t="AgX";break;case wg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lr).join(`
`)}function xM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(lr).join(`
`)}function _M(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function lr(n){return n!==""}function Nf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Of(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yM=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(n){return n.replace(yM,bM)}var MM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bM(n,e){let t=Ye[e];if(t===void 0){let i=MM.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nh(t)}var SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(n){return n.replace(SM,EM)}function EM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Mc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ph?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function TM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case fr:e="ENVMAP_TYPE_CUBE";break;case bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function RM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Dh:e="ENVMAP_BLENDING_MULTIPLY";break;case Sg:e="ENVMAP_BLENDING_MIX";break;case Eg:e="ENVMAP_BLENDING_ADD";break}return e}function CM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function PM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=wM(t),l=TM(t),h=AM(t),u=RM(t),d=CM(t),f=t.isWebGL2?"":gM(t),g=xM(t),x=_M(r),p=s.createProgram(),m,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(lr).join(`
`),m.length>0&&(m+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(lr).join(`
`),v.length>0&&(v+=`
`)):(m=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),v=[f,Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ji?mM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,pM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),o=nh(o),o=Nf(o,t),o=Of(o,t),a=nh(a),a=Nf(a,t),a=Of(a,t),o=zf(o),a=zf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let y=_+m+o,P=_+v+a,S=Ff(s,s.VERTEX_SHADER,y),A=Ff(s,s.FRAGMENT_SHADER,P);s.attachShader(p,S),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function D(W){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(S).trim(),U=s.getShaderInfoLog(A).trim(),q=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,S,A);else{let $=Uf(s,S,"vertex"),Z=Uf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+$+`
`+Z)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(L===""||U==="")&&(K=!1);K&&(W.diagnostics={runnable:q,programLog:z,vertexShader:{log:L,prefix:m},fragmentShader:{log:U,prefix:v}})}s.deleteShader(S),s.deleteShader(A),M=new ur(s,p),w=vM(s,p)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(p,hM)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=A,this}var LM=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new sh(e),t.set(e,i)),i}},sh=class{constructor(e){this.id=LM++,this.code=e,this.usedTimes=0}};function IM(n,e,t,i,s,r,o){let a=new Xa,c=new ih,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,w,F,W,z){let L=W.fog,U=z.geometry,q=M.isMeshStandardMaterial?W.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),$=K&&K.mapping===bc?K.image.height:null,Z=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let te=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,re=te!==void 0?te.length:0,ge=0;U.morphAttributes.position!==void 0&&(ge=1),U.morphAttributes.normal!==void 0&&(ge=2),U.morphAttributes.color!==void 0&&(ge=3);let Y,J,pe,Ee;if(Z){let gn=di[Z];Y=gn.vertexShader,J=gn.fragmentShader}else Y=M.vertexShader,J=M.fragmentShader,c.update(M),pe=c.getVertexShaderID(M),Ee=c.getFragmentShaderID(M);let Se=n.getRenderTarget(),Ge=z.isInstancedMesh===!0,Xe=z.isBatchedMesh===!0,Fe=!!M.map,rt=!!M.matcap,k=!!K,mn=!!M.aoMap,Ae=!!M.lightMap,ke=!!M.bumpMap,ye=!!M.normalMap,wt=!!M.displacementMap,$e=!!M.emissiveMap,R=!!M.metalnessMap,E=!!M.roughnessMap,G=M.anisotropy>0,ie=M.clearcoat>0,Q=M.iridescence>0,se=M.sheen>0,Me=M.transmission>0,fe=G&&!!M.anisotropyMap,_e=ie&&!!M.clearcoatMap,Le=ie&&!!M.clearcoatNormalMap,Ke=ie&&!!M.clearcoatRoughnessMap,j=Q&&!!M.iridescenceMap,dt=Q&&!!M.iridescenceThicknessMap,nt=se&&!!M.sheenColorMap,ze=se&&!!M.sheenRoughnessMap,we=!!M.specularMap,ve=!!M.specularColorMap,qe=!!M.specularIntensityMap,ht=Me&&!!M.transmissionMap,Dt=Me&&!!M.thicknessMap,je=!!M.gradientMap,ae=!!M.alphaMap,I=M.alphaTest>0,he=!!M.alphaHash,ue=!!M.extensions,Ue=!!U.attributes.uv1,Re=!!U.attributes.uv2,vt=!!U.attributes.uv3,yt=ji;return M.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(yt=n.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:J,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Xe,instancing:Ge,instancingColor:Ge&&z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Wt,map:Fe,matcap:rt,envMap:k,envMapMode:k&&K.mapping,envMapCubeUVHeight:$,aoMap:mn,lightMap:Ae,bumpMap:ke,normalMap:ye,displacementMap:d&&wt,emissiveMap:$e,normalMapObjectSpace:ye&&M.normalMapType===zg,normalMapTangentSpace:ye&&M.normalMapType===kh,metalnessMap:R,roughnessMap:E,anisotropy:G,anisotropyMap:fe,clearcoat:ie,clearcoatMap:_e,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ke,iridescence:Q,iridescenceMap:j,iridescenceThicknessMap:dt,sheen:se,sheenColorMap:nt,sheenRoughnessMap:ze,specularMap:we,specularColorMap:ve,specularIntensityMap:qe,transmission:Me,transmissionMap:ht,thicknessMap:Dt,gradientMap:je,opaque:M.transparent===!1&&M.blending===Ji,alphaMap:ae,alphaTest:I,alphaHash:he,combine:M.combine,mapUv:Fe&&x(M.map.channel),aoMapUv:mn&&x(M.aoMap.channel),lightMapUv:Ae&&x(M.lightMap.channel),bumpMapUv:ke&&x(M.bumpMap.channel),normalMapUv:ye&&x(M.normalMap.channel),displacementMapUv:wt&&x(M.displacementMap.channel),emissiveMapUv:$e&&x(M.emissiveMap.channel),metalnessMapUv:R&&x(M.metalnessMap.channel),roughnessMapUv:E&&x(M.roughnessMap.channel),anisotropyMapUv:fe&&x(M.anisotropyMap.channel),clearcoatMapUv:_e&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Le&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(M.sheenRoughnessMap.channel),specularMapUv:we&&x(M.specularMap.channel),specularColorMapUv:ve&&x(M.specularColorMap.channel),specularIntensityMapUv:qe&&x(M.specularIntensityMap.channel),transmissionMapUv:ht&&x(M.transmissionMap.channel),thicknessMapUv:Dt&&x(M.thicknessMap.channel),alphaMapUv:ae&&x(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ye||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Re,vertexUv3s:vt,pointsUvs:z.isPoints===!0&&!!U.attributes.uv&&(Fe||ae),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ge,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===At,flipSided:M.side===Bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ue&&M.extensions.derivatives===!0,extensionFragDepth:ue&&M.extensions.fragDepth===!0,extensionDrawBuffers:ue&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let F in M.defines)w.push(F),w.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(v(w,M),_(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){let w=g[M.type],F;if(w){let W=di[w];F=hs.clone(W.uniforms)}else F=M.uniforms;return F}function P(M,w){let F;for(let W=0,z=l.length;W<z;W++){let L=l[W];if(L.cacheKey===w){F=L,++F.usedTimes;break}}return F===void 0&&(F=new PM(n,w,M,r),l.push(F)),F}function S(M){if(--M.usedTimes===0){let w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function A(M){c.remove(M)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:P,releaseProgram:S,releaseShaderCache:A,programs:l,dispose:D}}function DM(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function FM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,x,p){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},n[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),e++,m}function a(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||FM),i.length>1&&i.sort(d||kf),s.length>1&&s.sort(d||kf)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function UM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Hf,n.set(i,[o])):s>=r.length?(o=new Hf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function NM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new oe};break;case"SpotLight":t={position:new C,direction:new C,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function OM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var zM=0;function BM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kM(n,e){let t=new NM,i=OM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,o=new Ie,a=new Ie;function c(h,u){let d=0,f=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let x=0,p=0,m=0,v=0,_=0,y=0,P=0,S=0,A=0,D=0,M=0;h.sort(BM);let w=u===!0?Math.PI:1;for(let W=0,z=h.length;W<z;W++){let L=h[W],U=L.color,q=L.intensity,K=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=U.r*q*w,f+=U.g*q*w,g+=U.b*q*w;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(L.sh.coefficients[Z],q);M++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let te=L.shadow,re=i.get(L);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,s.directionalShadow[x]=re,s.directionalShadowMap[x]=$,s.directionalShadowMatrix[x]=L.shadow.matrix,y++}s.directional[x]=Z,x++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(U).multiplyScalar(q*w),Z.distance=K,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,s.spot[m]=Z;let te=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,te.updateMatrices(L),L.castShadow&&D++),s.spotLightMatrix[m]=te.matrix,L.castShadow){let re=i.get(L);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,s.spotShadow[m]=re,s.spotShadowMap[m]=$,S++}m++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(U).multiplyScalar(q),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),s.rectArea[v]=Z,v++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*w),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let te=L.shadow,re=i.get(L);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,re.shadowCameraNear=te.camera.near,re.shadowCameraFar=te.camera.far,s.pointShadow[p]=re,s.pointShadowMap[p]=$,s.pointShadowMatrix[p]=L.shadow.matrix,P++}s.point[p]=Z,p++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(q*w),Z.groundColor.copy(L.groundColor).multiplyScalar(q*w),s.hemi[_]=Z,_++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==x||F.pointLength!==p||F.spotLength!==m||F.rectAreaLength!==v||F.hemiLength!==_||F.numDirectionalShadows!==y||F.numPointShadows!==P||F.numSpotShadows!==S||F.numSpotMaps!==A||F.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=m,s.rectArea.length=v,s.point.length=p,s.hemi.length=_,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=S+A-D,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=M,F.directionalLength=x,F.pointLength=p,F.spotLength=m,F.rectAreaLength=v,F.hemiLength=_,F.numDirectionalShadows=y,F.numPointShadows=P,F.numSpotShadows=S,F.numSpotMaps=A,F.numLightProbes=M,s.version=zM++)}function l(h,u){let d=0,f=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let y=h[v];if(y.isDirectionalLight){let P=s.directional[d];P.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(m),d++}else if(y.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(m),P.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let P=s.rectArea[x];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let P=s.point[f];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let P=s.hemi[p];P.direction.setFromMatrixPosition(y.matrixWorld),P.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:s}}function Gf(n,e){let t=new kM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function HM(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Gf(n,e),t.set(r,[c])):o>=a.length?(c=new Gf(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var rh=class extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ng,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oh=class extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
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
}`;function WM(n,e,t){let i=new bo,s=new ne,r=new ne,o=new mt,a=new rh({depthPacking:Og}),c=new oh,l={},h=t.maxTextureSize,u={[mi]:Bt,[Bt]:mi,[At]:At},d=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:GM,fragmentShader:VM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new St;g.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new de(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let m=this.type;this.render=function(S,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let M=n.getRenderTarget(),w=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),W=n.state;W.setBlending(pi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let z=m!==Ri&&this.type===Ri,L=m===Ri&&this.type!==Ri;for(let U=0,q=S.length;U<q;U++){let K=S[U],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let Z=$.getFrameExtents();if(s.multiply(Z),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,$.mapSize.y=r.y)),$.map===null||z===!0||L===!0){let re=this.type!==Ri?{minFilter:Ht,magFilter:Ht}:{};$.map!==null&&$.map.dispose(),$.map=new an(s.x,s.y,re),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let te=$.getViewportCount();for(let re=0;re<te;re++){let ge=$.getViewport(re);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),W.viewport(o),$.updateMatrices(K,re),i=$.getFrustum(),y(A,D,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===Ri&&v($,D),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(M,w,F)};function v(S,A){let D=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new an(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,D,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,D,f,x,null)}function _(S,A,D,M){let w=null,F=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)w=F;else if(w=D.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let W=w.uuid,z=A.uuid,L=l[W];L===void 0&&(L={},l[W]=L);let U=L[z];U===void 0&&(U=w.clone(),L[z]=U,A.addEventListener("dispose",P)),w=U}if(w.visible=A.visible,w.wireframe=A.wireframe,M===Ri?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let W=n.properties.get(w);W.light=D}return w}function y(S,A,D,M,w){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Ri)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);let z=e.update(S),L=S.material;if(Array.isArray(L)){let U=z.groups;for(let q=0,K=U.length;q<K;q++){let $=U[q],Z=L[$.materialIndex];if(Z&&Z.visible){let te=_(S,Z,M,w);S.onBeforeShadow(n,S,A,D,z,te,$),n.renderBufferDirect(D,null,z,te,S,$),S.onAfterShadow(n,S,A,D,z,te,$)}}}else if(L.visible){let U=_(S,L,M,w);S.onBeforeShadow(n,S,A,D,z,U,null),n.renderBufferDirect(D,null,z,U,S,null),S.onAfterShadow(n,S,A,D,z,U,null)}}let W=S.children;for(let z=0,L=W.length;z<L;z++)y(W[z],A,D,M,w)}function P(S){S.target.removeEventListener("dispose",P);for(let D in l){let M=l[D],w=S.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function XM(n,e,t){let i=t.isWebGL2;function s(){let I=!1,he=new mt,ue=null,Ue=new mt(0,0,0,0);return{setMask:function(Re){ue!==Re&&!I&&(n.colorMask(Re,Re,Re,Re),ue=Re)},setLocked:function(Re){I=Re},setClear:function(Re,vt,yt,Jt,gn){gn===!0&&(Re*=Jt,vt*=Jt,yt*=Jt),he.set(Re,vt,yt,Jt),Ue.equals(he)===!1&&(n.clearColor(Re,vt,yt,Jt),Ue.copy(he))},reset:function(){I=!1,ue=null,Ue.set(-1,0,0,0)}}}function r(){let I=!1,he=null,ue=null,Ue=null;return{setTest:function(Re){Re?Xe(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(Re){he!==Re&&!I&&(n.depthMask(Re),he=Re)},setFunc:function(Re){if(ue!==Re){switch(Re){case xg:n.depthFunc(n.NEVER);break;case _g:n.depthFunc(n.ALWAYS);break;case vg:n.depthFunc(n.LESS);break;case Ua:n.depthFunc(n.LEQUAL);break;case yg:n.depthFunc(n.EQUAL);break;case Mg:n.depthFunc(n.GEQUAL);break;case Ih:n.depthFunc(n.GREATER);break;case bg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Re}},setLocked:function(Re){I=Re},setClear:function(Re){Ue!==Re&&(n.clearDepth(Re),Ue=Re)},reset:function(){I=!1,he=null,ue=null,Ue=null}}}function o(){let I=!1,he=null,ue=null,Ue=null,Re=null,vt=null,yt=null,Jt=null,gn=null;return{setTest:function(Mt){I||(Mt?Xe(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(Mt){he!==Mt&&!I&&(n.stencilMask(Mt),he=Mt)},setFunc:function(Mt,xn,ui){(ue!==Mt||Ue!==xn||Re!==ui)&&(n.stencilFunc(Mt,xn,ui),ue=Mt,Ue=xn,Re=ui)},setOp:function(Mt,xn,ui){(vt!==Mt||yt!==xn||Jt!==ui)&&(n.stencilOp(Mt,xn,ui),vt=Mt,yt=xn,Jt=ui)},setLocked:function(Mt){I=Mt},setClear:function(Mt){gn!==Mt&&(n.clearStencil(Mt),gn=Mt)},reset:function(){I=!1,he=null,ue=null,Ue=null,Re=null,vt=null,yt=null,Jt=null,gn=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],p=null,m=!1,v=null,_=null,y=null,P=null,S=null,A=null,D=null,M=new oe(0,0,0),w=0,F=!1,W=null,z=null,L=null,U=null,q=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,Z=0,te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(te)[1]),$=Z>=1):te.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),$=Z>=2);let re=null,ge={},Y=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),pe=new mt().fromArray(Y),Ee=new mt().fromArray(J);function Se(I,he,ue,Ue){let Re=new Uint8Array(4),vt=n.createTexture();n.bindTexture(I,vt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let yt=0;yt<ue;yt++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(he+yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return vt}let Ge={};Ge[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),Ge[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ge[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ge[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Xe(n.DEPTH_TEST),c.setFunc(Ua),$e(!1),R(bd),Xe(n.CULL_FACE),ye(pi);function Xe(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function Fe(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function rt(I,he){return f[I]!==he?(n.bindFramebuffer(I,he),f[I]=he,i&&(I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=he),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function k(I,he){let ue=x,Ue=!1;if(I)if(ue=g.get(he),ue===void 0&&(ue=[],g.set(he,ue)),I.isWebGLMultipleRenderTargets){let Re=I.texture;if(ue.length!==Re.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,yt=Re.length;vt<yt;vt++)ue[vt]=n.COLOR_ATTACHMENT0+vt;ue.length=Re.length,Ue=!0}}else ue[0]!==n.COLOR_ATTACHMENT0&&(ue[0]=n.COLOR_ATTACHMENT0,Ue=!0);else ue[0]!==n.BACK&&(ue[0]=n.BACK,Ue=!0);Ue&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function mn(I){return p!==I?(n.useProgram(I),p=I,!0):!1}let Ae={[Rs]:n.FUNC_ADD,[ng]:n.FUNC_SUBTRACT,[ig]:n.FUNC_REVERSE_SUBTRACT};if(i)Ae[wd]=n.MIN,Ae[Td]=n.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(Ae[wd]=I.MIN_EXT,Ae[Td]=I.MAX_EXT)}let ke={[sg]:n.ZERO,[rg]:n.ONE,[og]:n.SRC_COLOR,[go]:n.SRC_ALPHA,[dg]:n.SRC_ALPHA_SATURATE,[hg]:n.DST_COLOR,[cg]:n.DST_ALPHA,[ag]:n.ONE_MINUS_SRC_COLOR,[xo]:n.ONE_MINUS_SRC_ALPHA,[ug]:n.ONE_MINUS_DST_COLOR,[lg]:n.ONE_MINUS_DST_ALPHA,[fg]:n.CONSTANT_COLOR,[pg]:n.ONE_MINUS_CONSTANT_COLOR,[mg]:n.CONSTANT_ALPHA,[gg]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(I,he,ue,Ue,Re,vt,yt,Jt,gn,Mt){if(I===pi){m===!0&&(Fe(n.BLEND),m=!1);return}if(m===!1&&(Xe(n.BLEND),m=!0),I!==Lh){if(I!==v||Mt!==F){if((_!==Rs||S!==Rs)&&(n.blendEquation(n.FUNC_ADD),_=Rs,S=Rs),Mt)switch(I){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gi:n.blendFunc(n.ONE,n.ONE);break;case Sd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ed:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ed:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,P=null,A=null,D=null,M.set(0,0,0),w=0,v=I,F=Mt}return}Re=Re||he,vt=vt||ue,yt=yt||Ue,(he!==_||Re!==S)&&(n.blendEquationSeparate(Ae[he],Ae[Re]),_=he,S=Re),(ue!==y||Ue!==P||vt!==A||yt!==D)&&(n.blendFuncSeparate(ke[ue],ke[Ue],ke[vt],ke[yt]),y=ue,P=Ue,A=vt,D=yt),(Jt.equals(M)===!1||gn!==w)&&(n.blendColor(Jt.r,Jt.g,Jt.b,gn),M.copy(Jt),w=gn),v=I,F=!1}function wt(I,he){I.side===At?Fe(n.CULL_FACE):Xe(n.CULL_FACE);let ue=I.side===Bt;he&&(ue=!ue),$e(ue),I.blending===Ji&&I.transparent===!1?ye(pi):ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);let Ue=I.stencilWrite;l.setTest(Ue),Ue&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),G(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Xe(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function $e(I){W!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),W=I)}function R(I){I!==eg?(Xe(n.CULL_FACE),I!==z&&(I===bd?n.cullFace(n.BACK):I===tg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),z=I}function E(I){I!==L&&($&&n.lineWidth(I),L=I)}function G(I,he,ue){I?(Xe(n.POLYGON_OFFSET_FILL),(U!==he||q!==ue)&&(n.polygonOffset(he,ue),U=he,q=ue)):Fe(n.POLYGON_OFFSET_FILL)}function ie(I){I?Xe(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function Q(I){I===void 0&&(I=n.TEXTURE0+K-1),re!==I&&(n.activeTexture(I),re=I)}function se(I,he,ue){ue===void 0&&(re===null?ue=n.TEXTURE0+K-1:ue=re);let Ue=ge[ue];Ue===void 0&&(Ue={type:void 0,texture:void 0},ge[ue]=Ue),(Ue.type!==I||Ue.texture!==he)&&(re!==ue&&(n.activeTexture(ue),re=ue),n.bindTexture(I,he||Ge[I]),Ue.type=I,Ue.texture=he)}function Me(){let I=ge[re];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function fe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qe(I){pe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),pe.copy(I))}function ht(I){Ee.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ee.copy(I))}function Dt(I,he){let ue=u.get(he);ue===void 0&&(ue=new WeakMap,u.set(he,ue));let Ue=ue.get(I);Ue===void 0&&(Ue=n.getUniformBlockIndex(he,I.name),ue.set(I,Ue))}function je(I,he){let Ue=u.get(he).get(I);h.get(he)!==Ue&&(n.uniformBlockBinding(he,Ue,I.__bindingPointIndex),h.set(he,Ue))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},re=null,ge={},f={},g=new WeakMap,x=[],p=null,m=!1,v=null,_=null,y=null,P=null,S=null,A=null,D=null,M=new oe(0,0,0),w=0,F=!1,W=null,z=null,L=null,U=null,q=null,pe.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Xe,disable:Fe,bindFramebuffer:rt,drawBuffers:k,useProgram:mn,setBlending:ye,setMaterial:wt,setFlipSided:$e,setCullFace:R,setLineWidth:E,setPolygonOffset:G,setScissorTest:ie,activeTexture:Q,bindTexture:se,unbindTexture:Me,compressedTexImage2D:fe,compressedTexImage3D:_e,texImage2D:we,texImage3D:ve,updateUBOMapping:Dt,uniformBlockBinding:je,texStorage2D:nt,texStorage3D:ze,texSubImage2D:Le,texSubImage3D:Ke,compressedTexSubImage2D:j,compressedTexSubImage3D:dt,scissor:qe,viewport:ht,reset:ae}}function qM(n,e,t,i,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return f?new OffscreenCanvas(R,E):vo("canvas")}function x(R,E,G,ie){let Q=1;if((R.width>ie||R.height>ie)&&(Q=ie/Math.max(R.width,R.height)),Q<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let se=E?Ha:Math.floor,Me=se(Q*R.width),fe=se(Q*R.height);u===void 0&&(u=g(Me,fe));let _e=G?g(Me,fe):u;return _e.width=Me,_e.height=fe,_e.getContext("2d").drawImage(R,0,0,Me,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Me+"x"+fe+")."),_e}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Kl(R.width)&&Kl(R.height)}function m(R){return a?!1:R.wrapS!==Un||R.wrapT!==Un||R.minFilter!==Ht&&R.minFilter!==yn}function v(R,E){return R.generateMipmaps&&E&&R.minFilter!==Ht&&R.minFilter!==yn}function _(R){n.generateMipmap(R)}function y(R,E,G,ie,Q=!1){if(a===!1)return E;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se=E;if(E===n.RED&&(G===n.FLOAT&&(se=n.R32F),G===n.HALF_FLOAT&&(se=n.R16F),G===n.UNSIGNED_BYTE&&(se=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(se=n.R8UI),G===n.UNSIGNED_SHORT&&(se=n.R16UI),G===n.UNSIGNED_INT&&(se=n.R32UI),G===n.BYTE&&(se=n.R8I),G===n.SHORT&&(se=n.R16I),G===n.INT&&(se=n.R32I)),E===n.RG&&(G===n.FLOAT&&(se=n.RG32F),G===n.HALF_FLOAT&&(se=n.RG16F),G===n.UNSIGNED_BYTE&&(se=n.RG8)),E===n.RGBA){let Me=Q?Oa:ot.getTransfer(ie);G===n.FLOAT&&(se=n.RGBA32F),G===n.HALF_FLOAT&&(se=n.RGBA16F),G===n.UNSIGNED_BYTE&&(se=Me===pt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function P(R,E,G){return v(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==Ht&&R.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function S(R){return R===Ht||R===Na||R===co?n.NEAREST:n.LINEAR}function A(R){let E=R.target;E.removeEventListener("dispose",A),M(E),E.isVideoTexture&&h.delete(E)}function D(R){let E=R.target;E.removeEventListener("dispose",D),F(E)}function M(R){let E=i.get(R);if(E.__webglInit===void 0)return;let G=R.source,ie=d.get(G);if(ie){let Q=ie[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(R),Object.keys(ie).length===0&&d.delete(G)}i.remove(R)}function w(R){let E=i.get(R);n.deleteTexture(E.__webglTexture);let G=R.source,ie=d.get(G);delete ie[E.__cacheKey],o.memory.textures--}function F(R){let E=R.texture,G=i.get(R),ie=i.get(E);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(G.__webglFramebuffer[Q]))for(let se=0;se<G.__webglFramebuffer[Q].length;se++)n.deleteFramebuffer(G.__webglFramebuffer[Q][se]);else n.deleteFramebuffer(G.__webglFramebuffer[Q]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[Q])}else{if(Array.isArray(G.__webglFramebuffer))for(let Q=0;Q<G.__webglFramebuffer.length;Q++)n.deleteFramebuffer(G.__webglFramebuffer[Q]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let Q=0;Q<G.__webglColorRenderbuffer.length;Q++)G.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[Q]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Q=0,se=E.length;Q<se;Q++){let Me=i.get(E[Q]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(E[Q])}i.remove(E),i.remove(R)}let W=0;function z(){W=0}function L(){let R=W;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),W+=1,R}function U(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function q(R,E){let G=i.get(R);if(R.isVideoTexture&&wt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){let ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(G,R,E);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function K(R,E){let G=i.get(R);if(R.version>0&&G.__version!==R.version){pe(G,R,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function $(R,E){let G=i.get(R);if(R.version>0&&G.__version!==R.version){pe(G,R,E);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function Z(R,E){let G=i.get(R);if(R.version>0&&G.__version!==R.version){Ee(G,R,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}let te={[Ii]:n.REPEAT,[Un]:n.CLAMP_TO_EDGE,[_o]:n.MIRRORED_REPEAT},re={[Ht]:n.NEAREST,[Na]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[zh]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},ge={[Bg]:n.NEVER,[Xg]:n.ALWAYS,[kg]:n.LESS,[yp]:n.LEQUAL,[Hg]:n.EQUAL,[Wg]:n.GEQUAL,[Gg]:n.GREATER,[Vg]:n.NOTEQUAL};function Y(R,E,G){if(G?(n.texParameteri(R,n.TEXTURE_WRAP_S,te[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,te[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,te[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,re[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,re[E.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Un||E.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,S(E.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,S(E.minFilter)),E.minFilter!==Ht&&E.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ge[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ht||E.minFilter!==co&&E.minFilter!==es||E.type===Pi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Sn&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function J(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));let ie=E.source,Q=d.get(ie);Q===void 0&&(Q={},d.set(ie,Q));let se=U(E);if(se!==R.__cacheKey){Q[se]===void 0&&(Q[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[se].usedTimes++;let Me=Q[R.__cacheKey];Me!==void 0&&(Q[R.__cacheKey].usedTimes--,Me.usedTimes===0&&w(E)),R.__cacheKey=se,R.__webglTexture=Q[se].texture}return G}function pe(R,E,G){let ie=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=n.TEXTURE_3D);let Q=J(R,E),se=E.source;t.bindTexture(ie,R.__webglTexture,n.TEXTURE0+G);let Me=i.get(se);if(se.version!==Me.__version||Q===!0){t.activeTexture(n.TEXTURE0+G);let fe=ot.getPrimaries(ot.workingColorSpace),_e=E.colorSpace===bn?null:ot.getPrimaries(E.colorSpace),Le=E.colorSpace===bn||fe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Ke=m(E)&&p(E.image)===!1,j=x(E.image,Ke,!1,s.maxTextureSize);j=$e(E,j);let dt=p(j)||a,nt=r.convert(E.format,E.colorSpace),ze=r.convert(E.type),we=y(E.internalFormat,nt,ze,E.colorSpace,E.isVideoTexture);Y(ie,E,dt);let ve,qe=E.mipmaps,ht=a&&E.isVideoTexture!==!0&&we!==xp,Dt=Me.__version===void 0||Q===!0,je=P(E,j,dt);if(E.isDepthTexture)we=n.DEPTH_COMPONENT,a?E.type===Pi?we=n.DEPTH_COMPONENT32F:E.type===$i?we=n.DEPTH_COMPONENT24:E.type===Ps?we=n.DEPTH24_STENCIL8:we=n.DEPTH_COMPONENT16:E.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ls&&we===n.DEPTH_COMPONENT&&E.type!==Bh&&E.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=$i,ze=r.convert(E.type)),E.format===pr&&we===n.DEPTH_COMPONENT&&(we=n.DEPTH_STENCIL,E.type!==Ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ps,ze=r.convert(E.type))),Dt&&(ht?t.texStorage2D(n.TEXTURE_2D,1,we,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,we,j.width,j.height,0,nt,ze,null));else if(E.isDataTexture)if(qe.length>0&&dt){ht&&Dt&&t.texStorage2D(n.TEXTURE_2D,je,we,qe[0].width,qe[0].height);for(let ae=0,I=qe.length;ae<I;ae++)ve=qe[ae],ht?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ve.width,ve.height,nt,ze,ve.data):t.texImage2D(n.TEXTURE_2D,ae,we,ve.width,ve.height,0,nt,ze,ve.data);E.generateMipmaps=!1}else ht?(Dt&&t.texStorage2D(n.TEXTURE_2D,je,we,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,j.width,j.height,nt,ze,j.data)):t.texImage2D(n.TEXTURE_2D,0,we,j.width,j.height,0,nt,ze,j.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ht&&Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,we,qe[0].width,qe[0].height,j.depth);for(let ae=0,I=qe.length;ae<I;ae++)ve=qe[ae],E.format!==Xn?nt!==null?ht?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,j.depth,nt,ve.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,we,ve.width,ve.height,j.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,j.depth,nt,ze,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,we,ve.width,ve.height,j.depth,0,nt,ze,ve.data)}else{ht&&Dt&&t.texStorage2D(n.TEXTURE_2D,je,we,qe[0].width,qe[0].height);for(let ae=0,I=qe.length;ae<I;ae++)ve=qe[ae],E.format!==Xn?nt!==null?ht?t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,ve.width,ve.height,nt,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,we,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ve.width,ve.height,nt,ze,ve.data):t.texImage2D(n.TEXTURE_2D,ae,we,ve.width,ve.height,0,nt,ze,ve.data)}else if(E.isDataArrayTexture)ht?(Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,we,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,nt,ze,j.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,j.width,j.height,j.depth,0,nt,ze,j.data);else if(E.isData3DTexture)ht?(Dt&&t.texStorage3D(n.TEXTURE_3D,je,we,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,nt,ze,j.data)):t.texImage3D(n.TEXTURE_3D,0,we,j.width,j.height,j.depth,0,nt,ze,j.data);else if(E.isFramebufferTexture){if(Dt)if(ht)t.texStorage2D(n.TEXTURE_2D,je,we,j.width,j.height);else{let ae=j.width,I=j.height;for(let he=0;he<je;he++)t.texImage2D(n.TEXTURE_2D,he,we,ae,I,0,nt,ze,null),ae>>=1,I>>=1}}else if(qe.length>0&&dt){ht&&Dt&&t.texStorage2D(n.TEXTURE_2D,je,we,qe[0].width,qe[0].height);for(let ae=0,I=qe.length;ae<I;ae++)ve=qe[ae],ht?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,nt,ze,ve):t.texImage2D(n.TEXTURE_2D,ae,we,nt,ze,ve);E.generateMipmaps=!1}else ht?(Dt&&t.texStorage2D(n.TEXTURE_2D,je,we,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,nt,ze,j)):t.texImage2D(n.TEXTURE_2D,0,we,nt,ze,j);v(E,dt)&&_(ie),Me.__version=se.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ee(R,E,G){if(E.image.length!==6)return;let ie=J(R,E),Q=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);let se=i.get(Q);if(Q.version!==se.__version||ie===!0){t.activeTexture(n.TEXTURE0+G);let Me=ot.getPrimaries(ot.workingColorSpace),fe=E.colorSpace===bn?null:ot.getPrimaries(E.colorSpace),_e=E.colorSpace===bn||Me===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Le=E.isCompressedTexture||E.image[0].isCompressedTexture,Ke=E.image[0]&&E.image[0].isDataTexture,j=[];for(let ae=0;ae<6;ae++)!Le&&!Ke?j[ae]=x(E.image[ae],!1,!0,s.maxCubemapSize):j[ae]=Ke?E.image[ae].image:E.image[ae],j[ae]=$e(E,j[ae]);let dt=j[0],nt=p(dt)||a,ze=r.convert(E.format,E.colorSpace),we=r.convert(E.type),ve=y(E.internalFormat,ze,we,E.colorSpace),qe=a&&E.isVideoTexture!==!0,ht=se.__version===void 0||ie===!0,Dt=P(E,dt,nt);Y(n.TEXTURE_CUBE_MAP,E,nt);let je;if(Le){qe&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,ve,dt.width,dt.height);for(let ae=0;ae<6;ae++){je=j[ae].mipmaps;for(let I=0;I<je.length;I++){let he=je[I];E.format!==Xn?ze!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I,0,0,he.width,he.height,ze,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I,ve,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I,0,0,he.width,he.height,ze,we,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I,ve,he.width,he.height,0,ze,we,he.data)}}}else{je=E.mipmaps,qe&&ht&&(je.length>0&&Dt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,ve,j[0].width,j[0].height));for(let ae=0;ae<6;ae++)if(Ke){qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,j[ae].width,j[ae].height,ze,we,j[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ve,j[ae].width,j[ae].height,0,ze,we,j[ae].data);for(let I=0;I<je.length;I++){let ue=je[I].image[ae].image;qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I+1,0,0,ue.width,ue.height,ze,we,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I+1,ve,ue.width,ue.height,0,ze,we,ue.data)}}else{qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ze,we,j[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ve,ze,we,j[ae]);for(let I=0;I<je.length;I++){let he=je[I];qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I+1,0,0,ze,we,he.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,I+1,ve,ze,we,he.image[ae])}}}v(E,nt)&&_(n.TEXTURE_CUBE_MAP),se.__version=Q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Se(R,E,G,ie,Q,se){let Me=r.convert(G.format,G.colorSpace),fe=r.convert(G.type),_e=y(G.internalFormat,Me,fe,G.colorSpace);if(!i.get(E).__hasExternalTextures){let Ke=Math.max(1,E.width>>se),j=Math.max(1,E.height>>se);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,se,_e,Ke,j,E.depth,0,Me,fe,null):t.texImage2D(Q,se,_e,Ke,j,0,Me,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ye(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,Q,i.get(G).__webglTexture,0,ke(E)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,Q,i.get(G).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(R,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ie=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||ye(E)){let Q=E.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Pi?ie=n.DEPTH_COMPONENT32F:Q.type===$i&&(ie=n.DEPTH_COMPONENT24));let se=ke(E);ye(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,ie,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,ie,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){let ie=ke(E);G&&ye(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,E.width,E.height):ye(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{let ie=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0;Q<ie.length;Q++){let se=ie[Q],Me=r.convert(se.format,se.colorSpace),fe=r.convert(se.type),_e=y(se.internalFormat,Me,fe,se.colorSpace),Le=ke(E);G&&ye(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,_e,E.width,E.height):ye(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,_e,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,_e,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);let ie=i.get(E.depthTexture).__webglTexture,Q=ke(E);if(E.depthTexture.format===Ls)ye(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(E.depthTexture.format===pr)ye(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Fe(R){let E=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Xe(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]=n.createRenderbuffer(),Ge(E.__webglDepthbuffer[ie],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Ge(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(R,E,G){let ie=i.get(R);E!==void 0&&Se(ie.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Fe(R)}function k(R){let E=R.texture,G=i.get(R),ie=i.get(E);R.addEventListener("dispose",D),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=E.version,o.memory.textures++);let Q=R.isWebGLCubeRenderTarget===!0,se=R.isWebGLMultipleRenderTargets===!0,Me=p(R)||a;if(Q){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let _e=0;_e<E.mipmaps.length;_e++)G.__webglFramebuffer[fe][_e]=n.createFramebuffer()}else G.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)G.__webglFramebuffer[fe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(se)if(s.drawBuffers){let fe=R.texture;for(let _e=0,Le=fe.length;_e<Le;_e++){let Ke=i.get(fe[_e]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ye(R)===!1){let fe=se?E:[E];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let _e=0;_e<fe.length;_e++){let Le=fe[_e];G.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[_e]);let Ke=r.convert(Le.format,Le.colorSpace),j=r.convert(Le.type),dt=y(Le.internalFormat,Ke,j,Le.colorSpace,R.isXRRenderTarget===!0),nt=ke(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,dt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,G.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Y(n.TEXTURE_CUBE_MAP,E,Me);for(let fe=0;fe<6;fe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Se(G.__webglFramebuffer[fe][_e],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else Se(G.__webglFramebuffer[fe],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(E,Me)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){let fe=R.texture;for(let _e=0,Le=fe.length;_e<Le;_e++){let Ke=fe[_e],j=i.get(Ke);t.bindTexture(n.TEXTURE_2D,j.__webglTexture),Y(n.TEXTURE_2D,Ke,Me),Se(G.__webglFramebuffer,R,Ke,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),v(Ke,Me)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ie.__webglTexture),Y(fe,E,Me),a&&E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Se(G.__webglFramebuffer[_e],R,E,n.COLOR_ATTACHMENT0,fe,_e);else Se(G.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,fe,0);v(E,Me)&&_(fe),t.unbindTexture()}R.depthBuffer&&Fe(R)}function mn(R){let E=p(R)||a,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,Q=G.length;ie<Q;ie++){let se=G[ie];if(v(se,E)){let Me=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(se).__webglTexture;t.bindTexture(Me,fe),_(Me),t.unbindTexture()}}}function Ae(R){if(a&&R.samples>0&&ye(R)===!1){let E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,ie=R.height,Q=n.COLOR_BUFFER_BIT,se=[],Me=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(R),_e=R.isWebGLMultipleRenderTargets===!0;if(_e)for(let Le=0;Le<E.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){se.push(n.COLOR_ATTACHMENT0+Le),R.depthBuffer&&se.push(Me);let Ke=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Ke===!1&&(R.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Le]),Ke===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),_e){let j=i.get(E[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,G,ie,0,0,G,ie,Q,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Le=0;Le<E.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Le]);let Ke=i.get(E[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function ke(R){return Math.min(s.maxSamples,R.samples)}function ye(R){let E=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function wt(R){let E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function $e(R,E){let G=R.colorSpace,ie=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===$l||G!==Wt&&G!==bn&&(ot.getTransfer(G)===pt?a===!1?e.has("EXT_sRGB")===!0&&ie===Xn?(R.format=$l,R.minFilter=yn,R.generateMipmaps=!1):E=Ga.sRGBToLinear(E):(ie!==Xn||Q!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=$,this.setTextureCube=Z,this.rebindTextures=rt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=mn,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ye}function YM(n,e,t){let i=t.isWebGL2;function s(r,o=bn){let a,c=ot.getTransfer(o);if(r===Qi)return n.UNSIGNED_BYTE;if(r===dp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===fp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Ag)return n.BYTE;if(r===Rg)return n.SHORT;if(r===Bh)return n.UNSIGNED_SHORT;if(r===up)return n.INT;if(r===$i)return n.UNSIGNED_INT;if(r===Pi)return n.FLOAT;if(r===Sn)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Cg)return n.ALPHA;if(r===Xn)return n.RGBA;if(r===Pg)return n.LUMINANCE;if(r===Lg)return n.LUMINANCE_ALPHA;if(r===Ls)return n.DEPTH_COMPONENT;if(r===pr)return n.DEPTH_STENCIL;if(r===$l)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ig)return n.RED;if(r===pp)return n.RED_INTEGER;if(r===Dg)return n.RG;if(r===mp)return n.RG_INTEGER;if(r===gp)return n.RGBA_INTEGER;if(r===hl||r===ul||r===dl||r===fl)if(c===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===hl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ul)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===hl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ul)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rd||r===Cd||r===Pd||r===Ld)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Rd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ld)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Id||r===Dd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Id)return c===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Dd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fd||r===Ud||r===Nd||r===Od||r===zd||r===Bd||r===kd||r===Hd||r===Gd||r===Vd||r===Wd||r===Xd||r===qd||r===Yd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Fd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ud)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Od)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yd)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===pl||r===Zd||r===$d)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===pl)return c===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$d)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fg||r===Kd||r===Jd||r===jd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===pl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Kd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ps?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var ah=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},zt=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ZM={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ch=class extends ts{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=t.getContextAttributes(),p=null,m=null,v=[],_=[],y=new ne,P=null,S=new Vt;S.layers.enable(1),S.viewport=new mt;let A=new Vt;A.layers.enable(2),A.viewport=new mt;let D=[S,A],M=new ah;M.layers.enable(1),M.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=v[Y];return J===void 0&&(J=new fo,v[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=v[Y];return J===void 0&&(J=new fo,v[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=v[Y];return J===void 0&&(J=new fo,v[Y]=J),J.getHandSpace()};function W(Y){let J=_.indexOf(Y.inputSource);if(J===-1)return;let pe=v[J];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,l||o),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",L);for(let Y=0;Y<v.length;Y++){let J=_[Y];J!==null&&(_[Y]=null,v[Y].disconnect(J))}w=null,F=null,e.setRenderTarget(p),f=null,d=null,u=null,s=null,m=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",z),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(y),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new an(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,pe=null,Ee=null;x.depth&&(Ee=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=x.stencil?pr:Ls,pe=x.stencil?Ps:$i);let Se={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new an(d.textureWidth,d.textureHeight,{format:Xn,type:Qi,depthTexture:new $a(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ge=e.properties.get(m);Ge.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(Y){for(let J=0;J<Y.removed.length;J++){let pe=Y.removed[J],Ee=_.indexOf(pe);Ee>=0&&(_[Ee]=null,v[Ee].disconnect(pe))}for(let J=0;J<Y.added.length;J++){let pe=Y.added[J],Ee=_.indexOf(pe);if(Ee===-1){for(let Ge=0;Ge<v.length;Ge++)if(Ge>=_.length){_.push(pe),Ee=Ge;break}else if(_[Ge]===null){_[Ge]=pe,Ee=Ge;break}if(Ee===-1)break}let Se=v[Ee];Se&&Se.connect(pe)}}let U=new C,q=new C;function K(Y,J,pe){U.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(pe.matrixWorld);let Ee=U.distanceTo(q),Se=J.projectionMatrix.elements,Ge=pe.projectionMatrix.elements,Xe=Se[14]/(Se[10]-1),Fe=Se[14]/(Se[10]+1),rt=(Se[9]+1)/Se[5],k=(Se[9]-1)/Se[5],mn=(Se[8]-1)/Se[0],Ae=(Ge[8]+1)/Ge[0],ke=Xe*mn,ye=Xe*Ae,wt=Ee/(-mn+Ae),$e=wt*-mn;J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($e),Y.translateZ(wt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let R=Xe+wt,E=Fe+wt,G=ke-$e,ie=ye+(Ee-$e),Q=rt*Fe/E*R,se=k*Fe/E*R;Y.projectionMatrix.makePerspective(G,ie,Q,se,R,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function $(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;M.near=A.near=S.near=Y.near,M.far=A.far=S.far=Y.far,(w!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,F=M.far);let J=Y.parent,pe=M.cameras;$(M,J);for(let Ee=0;Ee<pe.length;Ee++)$(pe[Ee],J);pe.length===2?K(M,S,A):M.projectionMatrix.copy(S.projectionMatrix),Z(Y,M,J)};function Z(Y,J,pe){pe===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=gr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)};let te=null;function re(Y,J){if(h=J.getViewerPose(l||o),g=J,h!==null){let pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let Ee=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,Ee=!0);for(let Se=0;Se<pe.length;Se++){let Ge=pe[Se],Xe=null;if(f!==null)Xe=f.getViewport(Ge);else{let rt=u.getViewSubImage(d,Ge);Xe=rt.viewport,Se===0&&(e.setRenderTargetTextures(m,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(m))}let Fe=D[Se];Fe===void 0&&(Fe=new Vt,Fe.layers.enable(Se),Fe.viewport=new mt,D[Se]=Fe),Fe.matrix.fromArray(Ge.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ge.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Se===0&&(M.matrix.copy(Fe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ee===!0&&M.cameras.push(Fe)}}for(let pe=0;pe<v.length;pe++){let Ee=_[pe],Se=v[pe];Ee!==null&&Se!==void 0&&Se.update(Ee,J,l||o)}te&&te(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let ge=new wp;ge.setAnimationLoop(re),this.setAnimationLoop=function(Y){te=Y},this.dispose=function(){}}};function $M(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Ep(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Bt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Bt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*_,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function KM(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function l(v,_){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",p));let P=_.program;i.updateUBOMapping(v,P);let S=e.render.frame;r[v.id]!==S&&(d(v),r[v.id]=S)}function h(v){let _=u();v.__bindingPointIndex=_;let y=n.createBuffer(),P=v.__size,S=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=s[v.id],y=v.uniforms,P=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let S=0,A=y.length;S<A;S++){let D=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,w=D.length;M<w;M++){let F=D[M];if(f(F,S,M,P)===!0){let W=F.__offset,z=Array.isArray(F.value)?F.value:[F.value],L=0;for(let U=0;U<z.length;U++){let q=z[U],K=x(q);typeof q=="number"||typeof q=="boolean"?(F.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,W+L,F.__data)):q.isMatrix3?(F.__data[0]=q.elements[0],F.__data[1]=q.elements[1],F.__data[2]=q.elements[2],F.__data[3]=0,F.__data[4]=q.elements[3],F.__data[5]=q.elements[4],F.__data[6]=q.elements[5],F.__data[7]=0,F.__data[8]=q.elements[6],F.__data[9]=q.elements[7],F.__data[10]=q.elements[8],F.__data[11]=0):(q.toArray(F.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,_,y,P){let S=v.value,A=_+"_"+y;if(P[A]===void 0)return typeof S=="number"||typeof S=="boolean"?P[A]=S:P[A]=S.clone(),!0;{let D=P[A];if(typeof S=="number"||typeof S=="boolean"){if(D!==S)return P[A]=S,!0}else if(D.equals(S)===!1)return D.copy(S),!0}return!1}function g(v){let _=v.uniforms,y=0,P=16;for(let A=0,D=_.length;A<D;A++){let M=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,F=M.length;w<F;w++){let W=M[w],z=Array.isArray(W.value)?W.value:[W.value];for(let L=0,U=z.length;L<U;L++){let q=z[L],K=x(q),$=y%P;$!==0&&P-$<K.boundary&&(y+=P-$),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=K.storage}}}let S=y%P;return S>0&&(y+=P-S),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){let _=v.target;_.removeEventListener("dispose",p);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var So=class{constructor(e={}){let{canvas:t=ox(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=ji,this.toneMappingExposure=1;let _=this,y=!1,P=0,S=0,A=null,D=-1,M=null,w=new mt,F=new mt,W=null,z=new oe(0),L=0,U=t.width,q=t.height,K=1,$=null,Z=null,te=new mt(0,0,U,q),re=new mt(0,0,U,q),ge=!1,Y=new bo,J=!1,pe=!1,Ee=null,Se=new Ie,Ge=new ne,Xe=new C,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function rt(){return A===null?K:1}let k=i;function mn(T,N){for(let V=0;V<T.length;V++){let X=T[V],H=t.getContext(X,N);if(H!==null)return H}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ch}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",he,!1),k===null){let N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),k=mn(N,T),k===null)throw mn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ae,ke,ye,wt,$e,R,E,G,ie,Q,se,Me,fe,_e,Le,Ke,j,dt,nt,ze,we,ve,qe,ht;function Dt(){Ae=new my(k),ke=new ly(k,Ae,e),Ae.init(ke),ve=new YM(k,Ae,ke),ye=new XM(k,Ae,ke),wt=new _y(k),$e=new DM,R=new qM(k,Ae,ye,$e,ke,ve,wt),E=new uy(_),G=new py(_),ie=new Tx(k,ke),qe=new ay(k,Ae,ie,ke),Q=new gy(k,ie,wt,qe),se=new by(k,Q,ie,wt),nt=new My(k,ke,R),Ke=new hy($e),Me=new IM(_,E,G,Ae,ke,qe,Ke),fe=new $M(_,$e),_e=new UM,Le=new HM(Ae,ke),dt=new oy(_,E,G,ye,se,d,c),j=new WM(_,se,ke),ht=new KM(k,wt,ke,ye),ze=new cy(k,Ae,wt,ke),we=new xy(k,Ae,wt,ke),wt.programs=Me.programs,_.capabilities=ke,_.extensions=Ae,_.properties=$e,_.renderLists=_e,_.shadowMap=j,_.state=ye,_.info=wt}Dt();let je=new ch(_,k);this.xr=je,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=Ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(U,q,!1))},this.getSize=function(T){return T.set(U,q)},this.setSize=function(T,N,V=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,q=N,t.width=Math.floor(T*K),t.height=Math.floor(N*K),V===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(U*K,q*K).floor()},this.setDrawingBufferSize=function(T,N,V){U=T,q=N,K=V,t.width=Math.floor(T*V),t.height=Math.floor(N*V),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,N,V,X){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,N,V,X),ye.viewport(w.copy(te).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,N,V,X){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,N,V,X),ye.scissor(F.copy(re).multiplyScalar(K).floor())},this.getScissorTest=function(){return ge},this.setScissorTest=function(T){ye.setScissorTest(ge=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){Z=T},this.getClearColor=function(T){return T.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(T=!0,N=!0,V=!0){let X=0;if(T){let H=!1;if(A!==null){let me=A.texture.format;H=me===gp||me===mp||me===pp}if(H){let me=A.texture.type,be=me===Qi||me===$i||me===Bh||me===Ps||me===dp||me===fp,Ce=dt.getClearColor(),Ne=dt.getClearAlpha(),Je=Ce.r,He=Ce.g,Ve=Ce.b;be?(f[0]=Je,f[1]=He,f[2]=Ve,f[3]=Ne,k.clearBufferuiv(k.COLOR,0,f)):(g[0]=Je,g[1]=He,g[2]=Ve,g[3]=Ne,k.clearBufferiv(k.COLOR,0,g))}else X|=k.COLOR_BUFFER_BIT}N&&(X|=k.DEPTH_BUFFER_BIT),V&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",he,!1),_e.dispose(),Le.dispose(),$e.dispose(),E.dispose(),G.dispose(),se.dispose(),qe.dispose(),ht.dispose(),Me.dispose(),je.dispose(),je.removeEventListener("sessionstart",gn),je.removeEventListener("sessionend",Mt),Ee&&(Ee.dispose(),Ee=null),xn.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let T=wt.autoReset,N=j.enabled,V=j.autoUpdate,X=j.needsUpdate,H=j.type;Dt(),wt.autoReset=T,j.enabled=N,j.autoUpdate=V,j.needsUpdate=X,j.type=H}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){let N=T.target;N.removeEventListener("dispose",ue),Ue(N)}function Ue(T){Re(T),$e.remove(T)}function Re(T){let N=$e.get(T).programs;N!==void 0&&(N.forEach(function(V){Me.releaseProgram(V)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,V,X,H,me){N===null&&(N=Fe);let be=H.isMesh&&H.matrixWorld.determinant()<0,Ce=K0(T,N,V,X,H);ye.setMaterial(X,be);let Ne=V.index,Je=1;if(X.wireframe===!0){if(Ne=Q.getWireframeAttribute(V),Ne===void 0)return;Je=2}let He=V.drawRange,Ve=V.attributes.position,Nt=He.start*Je,In=(He.start+He.count)*Je;me!==null&&(Nt=Math.max(Nt,me.start*Je),In=Math.min(In,(me.start+me.count)*Je)),Ne!==null?(Nt=Math.max(Nt,0),In=Math.min(In,Ne.count)):Ve!=null&&(Nt=Math.max(Nt,0),In=Math.min(In,Ve.count));let jt=In-Nt;if(jt<0||jt===1/0)return;qe.setup(H,X,Ce,V,Ne);let Mi,Tt=ze;if(Ne!==null&&(Mi=ie.get(Ne),Tt=we,Tt.setIndex(Mi)),H.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*rt()),Tt.setMode(k.LINES)):Tt.setMode(k.TRIANGLES);else if(H.isLine){let Qe=X.linewidth;Qe===void 0&&(Qe=1),ye.setLineWidth(Qe*rt()),H.isLineSegments?Tt.setMode(k.LINES):H.isLineLoop?Tt.setMode(k.LINE_LOOP):Tt.setMode(k.LINE_STRIP)}else H.isPoints?Tt.setMode(k.POINTS):H.isSprite&&Tt.setMode(k.TRIANGLES);if(H.isBatchedMesh)Tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Tt.renderInstances(Nt,jt,H.count);else if(V.isInstancedBufferGeometry){let Qe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ol=Math.min(V.instanceCount,Qe);Tt.renderInstances(Nt,jt,ol)}else Tt.render(Nt,jt)};function vt(T,N,V){T.transparent===!0&&T.side===At&&T.forceSinglePass===!1?(T.side=Bt,T.needsUpdate=!0,ra(T,N,V),T.side=mi,T.needsUpdate=!0,ra(T,N,V),T.side=At):ra(T,N,V)}this.compile=function(T,N,V=null){V===null&&(V=T),p=Le.get(V),p.init(),v.push(p),V.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==V&&T.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(_._useLegacyLights);let X=new Set;return T.traverse(function(H){let me=H.material;if(me)if(Array.isArray(me))for(let be=0;be<me.length;be++){let Ce=me[be];vt(Ce,V,H),X.add(Ce)}else vt(me,V,H),X.add(me)}),v.pop(),p=null,X},this.compileAsync=function(T,N,V=null){let X=this.compile(T,N,V);return new Promise(H=>{function me(){if(X.forEach(function(be){$e.get(be).currentProgram.isReady()&&X.delete(be)}),X.size===0){H(T);return}setTimeout(me,10)}Ae.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let yt=null;function Jt(T){yt&&yt(T)}function gn(){xn.stop()}function Mt(){xn.start()}let xn=new wp;xn.setAnimationLoop(Jt),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(T){yt=T,je.setAnimationLoop(T),T===null?xn.stop():xn.start()},je.addEventListener("sessionstart",gn),je.addEventListener("sessionend",Mt),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(N),N=je.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,N,A),p=Le.get(T,v.length),p.init(),v.push(p),Se.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(Se),pe=this.localClippingEnabled,J=Ke.init(this.clippingPlanes,pe),x=_e.get(T,m.length),x.init(),m.push(x),ui(T,N,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort($,Z),this.info.render.frame++,J===!0&&Ke.beginShadows();let V=p.state.shadowsArray;if(j.render(V,T,N),J===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),dt.render(x,T),p.setupLights(_._useLegacyLights),N.isArrayCamera){let X=N.cameras;for(let H=0,me=X.length;H<me;H++){let be=X[H];gd(x,T,be,be.viewport)}}else gd(x,T,N);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(_,T,N),qe.resetDefaultState(),D=-1,M=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function ui(T,N,V,X){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){X&&Xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Se);let be=se.update(T),Ce=T.material;Ce.visible&&x.push(T,be,Ce,V,Xe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){let be=se.update(T),Ce=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xe.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Xe.copy(be.boundingSphere.center)),Xe.applyMatrix4(T.matrixWorld).applyMatrix4(Se)),Array.isArray(Ce)){let Ne=be.groups;for(let Je=0,He=Ne.length;Je<He;Je++){let Ve=Ne[Je],Nt=Ce[Ve.materialIndex];Nt&&Nt.visible&&x.push(T,be,Nt,V,Xe.z,Ve)}}else Ce.visible&&x.push(T,be,Ce,V,Xe.z,null)}}let me=T.children;for(let be=0,Ce=me.length;be<Ce;be++)ui(me[be],N,V,X)}function gd(T,N,V,X){let H=T.opaque,me=T.transmissive,be=T.transparent;p.setupLightsView(V),J===!0&&Ke.setGlobalState(_.clippingPlanes,V),me.length>0&&$0(H,me,N,V),X&&ye.viewport(w.copy(X)),H.length>0&&sa(H,N,V),me.length>0&&sa(me,N,V),be.length>0&&sa(be,N,V),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function $0(T,N,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let me=ke.isWebGL2;Ee===null&&(Ee=new an(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?Sn:Qi,minFilter:es,samples:me?4:0})),_.getDrawingBufferSize(Ge),me?Ee.setSize(Ge.x,Ge.y):Ee.setSize(Ha(Ge.x),Ha(Ge.y));let be=_.getRenderTarget();_.setRenderTarget(Ee),_.getClearColor(z),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let Ce=_.toneMapping;_.toneMapping=ji,sa(T,V,X),R.updateMultisampleRenderTarget(Ee),R.updateRenderTargetMipmap(Ee);let Ne=!1;for(let Je=0,He=N.length;Je<He;Je++){let Ve=N[Je],Nt=Ve.object,In=Ve.geometry,jt=Ve.material,Mi=Ve.group;if(jt.side===At&&Nt.layers.test(X.layers)){let Tt=jt.side;jt.side=Bt,jt.needsUpdate=!0,xd(Nt,V,X,In,jt,Mi),jt.side=Tt,jt.needsUpdate=!0,Ne=!0}}Ne===!0&&(R.updateMultisampleRenderTarget(Ee),R.updateRenderTargetMipmap(Ee)),_.setRenderTarget(be),_.setClearColor(z,L),_.toneMapping=Ce}function sa(T,N,V){let X=N.isScene===!0?N.overrideMaterial:null;for(let H=0,me=T.length;H<me;H++){let be=T[H],Ce=be.object,Ne=be.geometry,Je=X===null?be.material:X,He=be.group;Ce.layers.test(V.layers)&&xd(Ce,N,V,Ne,Je,He)}}function xd(T,N,V,X,H,me){T.onBeforeRender(_,N,V,X,H,me),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(_,N,V,X,T,me),H.transparent===!0&&H.side===At&&H.forceSinglePass===!1?(H.side=Bt,H.needsUpdate=!0,_.renderBufferDirect(V,N,X,H,T,me),H.side=mi,H.needsUpdate=!0,_.renderBufferDirect(V,N,X,H,T,me),H.side=At):_.renderBufferDirect(V,N,X,H,T,me),T.onAfterRender(_,N,V,X,H,me)}function ra(T,N,V){N.isScene!==!0&&(N=Fe);let X=$e.get(T),H=p.state.lights,me=p.state.shadowsArray,be=H.state.version,Ce=Me.getParameters(T,H.state,me,N,V),Ne=Me.getProgramCacheKey(Ce),Je=X.programs;X.environment=T.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||X.environment),Je===void 0&&(T.addEventListener("dispose",ue),Je=new Map,X.programs=Je);let He=Je.get(Ne);if(He!==void 0){if(X.currentProgram===He&&X.lightsStateVersion===be)return vd(T,Ce),He}else Ce.uniforms=Me.getUniforms(T),T.onBuild(V,Ce,_),T.onBeforeCompile(Ce,_),He=Me.acquireProgram(Ce,Ne),Je.set(Ne,He),X.uniforms=Ce.uniforms;let Ve=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=Ke.uniform),vd(T,Ce),X.needsLights=j0(T),X.lightsStateVersion=be,X.needsLights&&(Ve.ambientLightColor.value=H.state.ambient,Ve.lightProbe.value=H.state.probe,Ve.directionalLights.value=H.state.directional,Ve.directionalLightShadows.value=H.state.directionalShadow,Ve.spotLights.value=H.state.spot,Ve.spotLightShadows.value=H.state.spotShadow,Ve.rectAreaLights.value=H.state.rectArea,Ve.ltc_1.value=H.state.rectAreaLTC1,Ve.ltc_2.value=H.state.rectAreaLTC2,Ve.pointLights.value=H.state.point,Ve.pointLightShadows.value=H.state.pointShadow,Ve.hemisphereLights.value=H.state.hemi,Ve.directionalShadowMap.value=H.state.directionalShadowMap,Ve.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ve.spotShadowMap.value=H.state.spotShadowMap,Ve.spotLightMatrix.value=H.state.spotLightMatrix,Ve.spotLightMap.value=H.state.spotLightMap,Ve.pointShadowMap.value=H.state.pointShadowMap,Ve.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=He,X.uniformsList=null,He}function _d(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=ur.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function vd(T,N){let V=$e.get(T);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function K0(T,N,V,X,H){N.isScene!==!0&&(N=Fe),R.resetTextureUnits();let me=N.fog,be=X.isMeshStandardMaterial?N.environment:null,Ce=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Wt,Ne=(X.isMeshStandardMaterial?G:E).get(X.envMap||be),Je=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ve=!!V.morphAttributes.position,Nt=!!V.morphAttributes.normal,In=!!V.morphAttributes.color,jt=ji;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(jt=_.toneMapping);let Mi=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Tt=Mi!==void 0?Mi.length:0,Qe=$e.get(X),ol=p.state.lights;if(J===!0&&(pe===!0||T!==M)){let Vn=T===M&&X.id===D;Ke.setState(X,T,Vn)}let Ft=!1;X.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ol.state.version||Qe.outputColorSpace!==Ce||H.isBatchedMesh&&Qe.batching===!1||!H.isBatchedMesh&&Qe.batching===!0||H.isInstancedMesh&&Qe.instancing===!1||!H.isInstancedMesh&&Qe.instancing===!0||H.isSkinnedMesh&&Qe.skinning===!1||!H.isSkinnedMesh&&Qe.skinning===!0||H.isInstancedMesh&&Qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Qe.instancingColor===!1&&H.instanceColor!==null||Qe.envMap!==Ne||X.fog===!0&&Qe.fog!==me||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ke.numPlanes||Qe.numIntersection!==Ke.numIntersection)||Qe.vertexAlphas!==Je||Qe.vertexTangents!==He||Qe.morphTargets!==Ve||Qe.morphNormals!==Nt||Qe.morphColors!==In||Qe.toneMapping!==jt||ke.isWebGL2===!0&&Qe.morphTargetsCount!==Tt)&&(Ft=!0):(Ft=!0,Qe.__version=X.version);let Ms=Qe.currentProgram;Ft===!0&&(Ms=ra(X,N,H));let yd=!1,eo=!1,al=!1,un=Ms.getUniforms(),bs=Qe.uniforms;if(ye.useProgram(Ms.program)&&(yd=!0,eo=!0,al=!0),X.id!==D&&(D=X.id,eo=!0),yd||M!==T){un.setValue(k,"projectionMatrix",T.projectionMatrix),un.setValue(k,"viewMatrix",T.matrixWorldInverse);let Vn=un.map.cameraPosition;Vn!==void 0&&Vn.setValue(k,Xe.setFromMatrixPosition(T.matrixWorld)),ke.logarithmicDepthBuffer&&un.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&un.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,eo=!0,al=!0)}if(H.isSkinnedMesh){un.setOptional(k,H,"bindMatrix"),un.setOptional(k,H,"bindMatrixInverse");let Vn=H.skeleton;Vn&&(ke.floatVertexTextures?(Vn.boneTexture===null&&Vn.computeBoneTexture(),un.setValue(k,"boneTexture",Vn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(un.setOptional(k,H,"batchingTexture"),un.setValue(k,"batchingTexture",H._matricesTexture,R));let cl=V.morphAttributes;if((cl.position!==void 0||cl.normal!==void 0||cl.color!==void 0&&ke.isWebGL2===!0)&&nt.update(H,V,Ms),(eo||Qe.receiveShadow!==H.receiveShadow)&&(Qe.receiveShadow=H.receiveShadow,un.setValue(k,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(bs.envMap.value=Ne,bs.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),eo&&(un.setValue(k,"toneMappingExposure",_.toneMappingExposure),Qe.needsLights&&J0(bs,al),me&&X.fog===!0&&fe.refreshFogUniforms(bs,me),fe.refreshMaterialUniforms(bs,X,K,q,Ee),ur.upload(k,_d(Qe),bs,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ur.upload(k,_d(Qe),bs,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&un.setValue(k,"center",H.center),un.setValue(k,"modelViewMatrix",H.modelViewMatrix),un.setValue(k,"normalMatrix",H.normalMatrix),un.setValue(k,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Vn=X.uniformsGroups;for(let ll=0,Q0=Vn.length;ll<Q0;ll++)if(ke.isWebGL2){let Md=Vn[ll];ht.update(Md,Ms),ht.bind(Md,Ms)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ms}function J0(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function j0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,N,V){$e.get(T.texture).__webglTexture=N,$e.get(T.depthTexture).__webglTexture=V;let X=$e.get(T);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){let V=$e.get(T);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,V=0){A=T,P=N,S=V;let X=!0,H=null,me=!1,be=!1;if(T){let Ne=$e.get(T);Ne.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(k.FRAMEBUFFER,null),X=!1):Ne.__webglFramebuffer===void 0?R.setupRenderTarget(T):Ne.__hasExternalTextures&&R.rebindTextures(T,$e.get(T.texture).__webglTexture,$e.get(T.depthTexture).__webglTexture);let Je=T.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(be=!0);let He=$e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[N])?H=He[N][V]:H=He[N],me=!0):ke.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?H=$e.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?H=He[V]:H=He,w.copy(T.viewport),F.copy(T.scissor),W=T.scissorTest}else w.copy(te).multiplyScalar(K).floor(),F.copy(re).multiplyScalar(K).floor(),W=ge;if(ye.bindFramebuffer(k.FRAMEBUFFER,H)&&ke.drawBuffers&&X&&ye.drawBuffers(T,H),ye.viewport(w),ye.scissor(F),ye.setScissorTest(W),me){let Ne=$e.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ne.__webglTexture,V)}else if(be){let Ne=$e.get(T.texture),Je=N||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.__webglTexture,V||0,Je)}D=-1},this.readRenderTargetPixels=function(T,N,V,X,H,me,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=$e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){ye.bindFramebuffer(k.FRAMEBUFFER,Ce);try{let Ne=T.texture,Je=Ne.format,He=Ne.type;if(Je!==Xn&&ve.convert(Je)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ve=He===Sn&&(Ae.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(He!==Qi&&ve.convert(He)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Pi&&(ke.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-X&&V>=0&&V<=T.height-H&&k.readPixels(N,V,X,H,ve.convert(Je),ve.convert(He),me)}finally{let Ne=A!==null?$e.get(A).__webglFramebuffer:null;ye.bindFramebuffer(k.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,N,V=0){let X=Math.pow(2,-V),H=Math.floor(N.image.width*X),me=Math.floor(N.image.height*X);R.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,T.x,T.y,H,me),ye.unbindTexture()},this.copyTextureToTexture=function(T,N,V,X=0){let H=N.image.width,me=N.image.height,be=ve.convert(V.format),Ce=ve.convert(V.type);R.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment),N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,T.x,T.y,H,me,be,Ce,N.image.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,be,N.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,X,T.x,T.y,be,Ce,N.image),X===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,N,V,X,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let me=T.max.x-T.min.x+1,be=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,Ne=ve.convert(X.format),Je=ve.convert(X.type),He;if(X.isData3DTexture)R.setTexture3D(X,0),He=k.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)R.setTexture2DArray(X,0),He=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);let Ve=k.getParameter(k.UNPACK_ROW_LENGTH),Nt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),In=k.getParameter(k.UNPACK_SKIP_PIXELS),jt=k.getParameter(k.UNPACK_SKIP_ROWS),Mi=k.getParameter(k.UNPACK_SKIP_IMAGES),Tt=V.isCompressedTexture?V.mipmaps[H]:V.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Tt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?k.texSubImage3D(He,H,N.x,N.y,N.z,me,be,Ce,Ne,Je,Tt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(He,H,N.x,N.y,N.z,me,be,Ce,Ne,Tt.data)):k.texSubImage3D(He,H,N.x,N.y,N.z,me,be,Ce,Ne,Je,Tt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ve),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Nt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,In),k.pixelStorei(k.UNPACK_SKIP_ROWS,jt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Mi),H===0&&X.generateMipmaps&&k.generateMipmap(He),ye.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){P=0,S=0,A=null,ye.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Hh?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Ec?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?Is:vp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Is?ct:Wt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},lh=class extends So{};lh.prototype.isWebGL1Renderer=!0;var Ka=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new oe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mr=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Eo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new C,wo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Vf=new C,Wf=new mt,Xf=new mt,JM=new C,qf=new Ie,Ra=new C,zl=new Nn,Yf=new Ie,Bl=new xr,Di=class extends de{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ad,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ra),this.boundingSphere.expandByPoint(Ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zl.copy(this.boundingSphere),zl.applyMatrix4(s),e.ray.intersectsSphere(zl)!==!1&&(Yf.copy(s).invert(),Bl.copy(e.ray).applyMatrix4(Yf),!(this.boundingBox!==null&&Bl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ad?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Wf.fromBufferAttribute(s.attributes.skinIndex,e),Xf.fromBufferAttribute(s.attributes.skinWeight,e),Vf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Xf.getComponent(r);if(o!==0){let a=Wf.getComponent(r);qf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(JM.copy(Vf).applyMatrix4(qf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Fs=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},hh=class extends on{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Ht,h=Ht,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zf=new Ie,jM=new Ie,br=class n{constructor(e=[],t=[]){this.uuid=ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ie;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:jM;Zf.multiplyMatrices(a,t[r]),Zf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new hh(t,e,e,Xn,Pi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Fs),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},oi=class extends lt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},or=new Ie,$f=new Ie,Ca=[],Kf=new En,QM=new Ie,ro=new de,oo=new Nn,Fi=class extends de{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,QM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Kf.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(Kf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),oo.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(i),e.ray.intersectsSphere(oo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),$f.multiplyMatrices(i,or),ro.matrixWorld=$f,ro.raycast(e,Ca);for(let o=0,a=Ca.length;o<a;o++){let c=Ca[o];c.instanceId=r,c.object=this,t.push(c)}Ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var To=class extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jf=new C,jf=new C,Qf=new Ie,kl=new xr,Pa=new Nn,Sr=class extends gt{constructor(e=new St,t=new To){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Jf.fromBufferAttribute(t,s-1),jf.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Jf.distanceTo(jf);e.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,e.ray.intersectsSphere(Pa)===!1)return;Qf.copy(s).invert(),kl.copy(e.ray).applyMatrix4(Qf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let m=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let _=m,y=v-1;_<y;_+=f){let P=g.getX(_),S=g.getX(_+1);if(l.fromBufferAttribute(p,P),h.fromBufferAttribute(p,S),kl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let _=m,y=v-1;_<y;_+=f){if(l.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),kl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},ep=new C,tp=new C,Ja=class extends Sr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ep.fromBufferAttribute(t,s),tp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ep.distanceTo(tp);e.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ja=class extends Sr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ao=class extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},np=new Ie,uh=new xr,La=new Nn,Ia=new C,Qa=class extends gt{constructor(e=new St,t=new Ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(s),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;np.copy(s).invert(),uh.copy(e.ray).applyMatrix4(np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let p=l.getX(g);Ia.fromBufferAttribute(u,p),ip(Ia,p,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Ia.fromBufferAttribute(u,g),ip(Ia,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ip(n,e,t,i,s,r,o){let a=uh.distanceSqToPoint(n);if(a<t){let c=new C;uh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var qn=class extends on{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ne:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new C,s=[],r=[],o=[],a=new C,c=new Ie;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Gt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Gt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ro=class extends Yn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let i=t||new ne,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},dh=class extends Ro{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Wh(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Da=new C,Hl=new Wh,Gl=new Wh,Vl=new Wh,Co=class extends Yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Da.subVectors(s[0],s[1]).add(s[0]),l=Da);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Da.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Da),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Hl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,p),Gl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,p),Vl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Hl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Gl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Vl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Hl.calc(c),Gl.calc(c),Vl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function sp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function eb(n,e){let t=1-n;return t*t*e}function tb(n,e){return 2*(1-n)*n*e}function nb(n,e){return n*n*e}function po(n,e,t,i){return eb(n,e)+tb(n,t)+nb(n,i)}function ib(n,e){let t=1-n;return t*t*t*e}function sb(n,e){let t=1-n;return 3*t*t*n*e}function rb(n,e){return 3*(1-n)*n*n*e}function ob(n,e){return n*n*n*e}function mo(n,e,t,i,s){return ib(n,e)+sb(n,t)+rb(n,i)+ob(n,s)}var ec=class extends Yn{constructor(e=new ne,t=new ne,i=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ne){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fh=class extends Yn{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y),mo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tc=class extends Yn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ph=class extends Yn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends Yn{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends Yn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y),po(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sc=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(sp(a,c.x,l.x,h.x,u.x),sp(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},mh=Object.freeze({__proto__:null,ArcCurve:dh,CatmullRomCurve3:Co,CubicBezierCurve:ec,CubicBezierCurve3:fh,EllipseCurve:Ro,LineCurve:tc,LineCurve3:ph,QuadraticBezierCurve:nc,QuadraticBezierCurve3:ic,SplineCurve:sc}),gh=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new mh[s.type]().fromJSON(s))}return this}},xh=class extends gh{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new tc(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new nc(this.currentPoint.clone(),new ne(e,t),new ne(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ec(this.currentPoint.clone(),new ne(e,t),new ne(i,s),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new sc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new Ro(e,t,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Us=class n extends St{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Gt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new C,d=new ne,f=new C,g=new C,x=new C,p=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=t;v++){let _=i+v*h*s,y=Math.sin(_),P=Math.cos(_);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*y,u.y=e[S].y,u.z=e[S].x*P,o.push(u.x,u.y,u.z),d.x=v/t,d.y=S/(e.length-1),a.push(d.x,d.y);let A=c[3*S+0]*y,D=c[3*S+1],M=c[3*S+0]*P;l.push(A,D,M)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,P=y,S=y+e.length,A=y+e.length+1,D=y+1;r.push(P,S,D),r.push(A,D,S)}this.setIndex(r),this.setAttribute("position",new Be(o,3)),this.setAttribute("uv",new Be(a,2)),this.setAttribute("normal",new Be(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Er=class n extends Us{constructor(e=1,t=1,i=4,s=8){let r=new xh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Tn=class n extends St{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new C,h=new ne;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(a,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},An=class n extends St{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],p=i/2,m=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(f,2));function v(){let y=new C,P=new C,S=0,A=(t-e)/i;for(let D=0;D<=r;D++){let M=[],w=D/r,F=w*(t-e)+e;for(let W=0;W<=s;W++){let z=W/s,L=z*c+a,U=Math.sin(L),q=Math.cos(L);P.x=F*U,P.y=-w*i+p,P.z=F*q,u.push(P.x,P.y,P.z),y.set(U,A,q).normalize(),d.push(y.x,y.y,y.z),f.push(z,1-w),M.push(g++)}x.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){let w=x[M][D],F=x[M+1][D],W=x[M+1][D+1],z=x[M][D+1];h.push(w,F,z),h.push(F,W,z),S+=6}l.addGroup(m,S,0),m+=S}function _(y){let P=g,S=new ne,A=new C,D=0,M=y===!0?e:t,w=y===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,p*w,0),d.push(0,w,0),f.push(.5,.5),g++;let F=g;for(let W=0;W<=s;W++){let L=W/s*c+a,U=Math.cos(L),q=Math.sin(L);A.x=M*q,A.y=p*w,A.z=M*U,u.push(A.x,A.y,A.z),d.push(0,w,0),S.x=U*.5+.5,S.y=q*.5*w+.5,f.push(S.x,S.y),g++}for(let W=0;W<s;W++){let z=P+W,L=F+W;y===!0?h.push(L,L+1,z):h.push(L+1,L,z),D+=3}l.addGroup(m,D,y===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rc=class n extends An{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},oc=class n extends St{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(r.slice(),3)),this.setAttribute("uv",new Be(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new C,y=new C,P=new C;for(let S=0;S<t.length;S+=3)f(t[S+0],_),f(t[S+1],y),f(t[S+2],P),c(_,y,P,v)}function c(v,_,y,P){let S=P+1,A=[];for(let D=0;D<=S;D++){A[D]=[];let M=v.clone().lerp(y,D/S),w=_.clone().lerp(y,D/S),F=S-D;for(let W=0;W<=F;W++)W===0&&D===S?A[D][W]=M:A[D][W]=M.clone().lerp(w,W/F)}for(let D=0;D<S;D++)for(let M=0;M<2*(S-D)-1;M++){let w=Math.floor(M/2);M%2===0?(d(A[D][w+1]),d(A[D+1][w]),d(A[D][w])):(d(A[D][w+1]),d(A[D+1][w+1]),d(A[D+1][w]))}}function l(v){let _=new C;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new C;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=p(v)/2/Math.PI+.5,P=m(v)/Math.PI+.5;o.push(y,1-P)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],P=o[v+4],S=Math.max(_,y,P),A=Math.min(_,y,P);S>.9&&A<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let v=new C,_=new C,y=new C,P=new C,S=new ne,A=new ne,D=new ne;for(let M=0,w=0;M<r.length;M+=9,w+=6){v.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),S.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),D.set(o[w+4],o[w+5]),P.copy(v).add(_).add(y).divideScalar(3);let F=p(P);x(S,w+0,v,F),x(A,w+2,_,F),x(D,w+4,y,F)}}function x(v,_,y,P){P<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=P/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var ac=class n extends oc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},cc=class n extends oc{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ss=class n extends St{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new C,g=new ne;for(let x=0;x<=s;x++){for(let p=0;p<=i;p++){let m=r+p/i*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let p=x*(i+1);for(let m=0;m<i;m++){let v=m+p,_=v,y=v+i+1,P=v+i+2,S=v+1;a.push(_,y,S),a.push(y,P,S)}}this.setIndex(a),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Yt=class n extends St{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new C,d=new C,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let v=[],_=m/i,y=0;m===0&&o===0?y=.5/t:m===i&&c===Math.PI&&(y=-.5/t);for(let P=0;P<=t;P++){let S=P/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(S+y,1-_),v.push(l++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){let _=h[m][v+1],y=h[m][v],P=h[m+1][v],S=h[m+1][v+1];(m!==0||o>0)&&f.push(_,y,S),(m!==i-1||c<Math.PI)&&f.push(y,P,S)}this.setIndex(f),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var wr=class n extends St{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new C,u=new C,d=new C;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,p=f/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(x,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var lc=class n extends St{constructor(e=new ic(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,c=new C,l=new ne,h=new C,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(f,2));function x(){for(let _=0;_<t;_++)p(_);p(r===!1?t:0),v(),m()}function p(_){h=e.getPointAt(_/t,h);let y=o.normals[_],P=o.binormals[_];for(let S=0;S<=s;S++){let A=S/s*Math.PI*2,D=Math.sin(A),M=-Math.cos(A);c.x=M*y.x+D*P.x,c.y=M*y.y+D*P.y,c.z=M*y.z+D*P.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let P=(s+1)*(_-1)+(y-1),S=(s+1)*_+(y-1),A=(s+1)*_+y,D=(s+1)*(_-1)+y;g.push(P,S,D),g.push(S,A,D)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)l.x=_/t,l.y=y/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new mh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var hc=class extends xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},rs=class extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zn=class extends rs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var uc=class extends wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Fa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ab(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function cb(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function rp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function Lp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var os=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_h=class extends os{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qd,endingEnd:Qd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ef:r=e,a=2*t-i;break;case tf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ef:o=e,c=2*i-t;break;case tf:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*p+(1.5+f)*x+.5*g,y=f*p-f*x;for(let P=0;P!==a;++P)r[P]=m*o[h+P]+v*o[l+P]+_*o[c+P]+y*o[u+P];return r}},vh=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},yh=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$n=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fa(t,this.TimeBufferType),this.values=Fa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fa(e.times,Array),values:Fa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _h(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mr:t=this.InterpolantFactoryMethodDiscrete;break;case Ds:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return Ds;case this.InterpolantFactoryMethodSmooth:return ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&ab(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ml,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Ds;var as=class extends $n{};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=mr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends $n{};dc.prototype.ValueTypeName="color";var Ui=class extends $n{};Ui.prototype.ValueTypeName="number";var Mh=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)cn.slerpFlat(r,0,o,l-a,o,l,c);return r}},_i=class extends $n{InterpolantFactoryMethodLinear(e){return new Mh(this.times,this.values,this.getValueSize(),e)}};_i.prototype.ValueTypeName="quaternion";_i.prototype.DefaultInterpolation=Ds;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends $n{};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=mr;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends $n{};Ni.prototype.ValueTypeName="vector";var fc=class{constructor(e,t=-1,i,s=Ug){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ri(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(hb(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push($n.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=cb(c);c=rp(c,1,h),l=rp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ui(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,g,x){if(f.length!==0){let p=[],m=[];Lp(f,p,m,g),p.length!==0&&x.push(new u(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let p=[],m=[];for(let v=0;v!==d[g].morphTargets.length;++v){let _=d[g];p.push(_.time),m.push(_.morphTarget===x?1:0)}s.push(new Ui(".morphTargetInfluence["+x+"]",p,m))}c=f.length*o}else{let f=".bones["+t[u].name+"]";i(Ni,f+".position",d,"pos",s),i(_i,f+".quaternion",d,"rot",s),i(Ni,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function lb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ui;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return dc;case"quaternion":return _i;case"bool":case"boolean":return as;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function hb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=lb(n.type);if(n.times===void 0){let t=[],i=[];Lp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Ki={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},bh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},ub=new bh,Oi=class{constructor(e){this.manager=e!==void 0?e:ub,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai={},Sh=class extends Error{constructor(e,t){super(e),this.response=t}},Po=class extends Oi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:i,onError:s});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ai[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,x=0,p=new ReadableStream({start(m){v();function v(){u.read().then(({done:_,value:y})=>{if(_)m.close();else{x+=y.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let S=0,A=h.length;S<A;S++){let D=h[S];D.onProgress&&D.onProgress(P)}m.enqueue(y),v()}})}}});return new Response(p)}else throw new Sh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ki.add(e,l);let h=Ai[e];delete Ai[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ai[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ai[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Eh=class extends Oi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=vo("img");function c(){h(),Ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var pc=class extends Oi{constructor(e){super(e)}load(e,t,i,s){let r=new on,o=new Eh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Tr=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},mc=class extends Tr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Wl=new Ie,op=new C,ap=new C,Lo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;op.setFromMatrixPosition(e.matrixWorld),t.position.copy(op),ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ap),t.updateMatrixWorld(),Wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wh=class extends Lo{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=gr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},gc=class extends Tr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},cp=new Ie,ao=new C,Xl=new C,Th=class extends Lo{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ao.setFromMatrixPosition(e.matrixWorld),i.position.copy(ao),Xl.copy(i.position),Xl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Xl),i.updateMatrixWorld(),s.makeTranslation(-ao.x,-ao.y,-ao.z),cp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cp)}},xc=class extends Tr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Th}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ah=class extends Lo{constructor(){super(new is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ar=class extends Tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Ah}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ls=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},_c=class extends St{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var vc=class extends Oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ki.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ki.add(e,c),r.manager.itemStart(e)}};var yc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=lp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function lp(){return(typeof performance>"u"?Date:performance).now()}var Xh="\\[\\]\\.:\\/",db=new RegExp("["+Xh+"]","g"),qh="[^"+Xh+"]",fb="[^"+Xh.replace("\\.","")+"]",pb=/((?:WC+[\/:])*)/.source.replace("WC",qh),mb=/(WCOD+)?/.source.replace("WCOD",fb),gb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qh),xb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qh),_b=new RegExp("^"+pb+mb+gb+xb+"$"),vb=["material","materials","bones","map"],Rh=class{constructor(e,t,i){let s=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(db,"")}static parseTrackName(e){let t=_b.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);vb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=Rh;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ch);var ee=n=>document.getElementById(n),Pe=Math.PI*2,tt=(n,e,t)=>n<e?e:n>t?t:n,Rn=(n,e,t)=>n+(e-n)*t;var Zt=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window&&navigator.maxTouchPoints>0,Fo=Math.random,O=(n=0,e=1)=>n+Fo()*(e-n),Uo=n=>n[Math.floor(Fo()*n.length)];function Yh(n,e){let t=n>>>0,i=Fo;Fo=()=>{t=t+1831565813>>>0;let s=t;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};try{return e()}finally{Fo=i}}function Cr(n,e){let t=(e-n)%Pe;return t>Math.PI&&(t-=Pe),t<-Math.PI&&(t+=Pe),t}var Pr=n=>{for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},Ut={get(n,e){try{let t=localStorage.getItem("bg_"+n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem("bg_"+n,JSON.stringify(e))}catch{}}},tn=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function zn(n,e,t,i,s){return n.v+=((e-n.x)*t-n.v*i)*s,n.x+=n.v*s,n.x}var pn=(n=0)=>({x:n,v:0});var Ac={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},yb=new is(-1,1,1,-1,0,1),Zh=class extends St{constructor(){super(),this.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Be([0,2,0,0,2,0],2))}},Mb=new Zh,us=class{constructor(e){this._mesh=new de(Mb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Rc=class extends Bn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hs.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new us(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var No=class extends Bn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Cc=class extends Bn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Pc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ne);this._width=i.width,this._height=i.height,t=new an(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rc(Ac),this.copyPass.material.blending=pi,this.clock=new yc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}No!==void 0&&(o instanceof No?i=!0:o instanceof Cc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Lc=class extends Bn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new oe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Ip={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Lr=class n extends Bn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new oe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new an(r,o,{type:Sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new an(r,o,{type:Sn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new an(r,o,{type:Sn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Ip;this.highPassUniforms=hs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ne(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ac;this.copyUniforms=hs.clone(h.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:gi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new oe,this.oldClearAlpha=1,this.basic=new We,this.fsQuad=new us(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Lr.BlurDirectionX=new ne(1,0);Lr.BlurDirectionY=new ne(0,1);var Dp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ic=class extends Bn{constructor(){super();let e=Dp;this.uniforms=hs.clone(e.uniforms),this.material=new hc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new us(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Io?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Oh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ns=ee("c"),Kh=(()=>{let n=Ut.get("gfx",Zt?"low":"medium");return["low","medium","high"].includes(n)?n:"medium"})(),Et=Kh==="low",zi=Kh==="high",bb=["roughness","metalness","envMapIntensity","roughnessMap","metalnessMap"];function ut(n={}){if(!Et)return new rs(n);let e=Object.assign({},n);for(let t of bb)delete e[t];return new uc(e)}var Rt=new So({canvas:Ns,antialias:!Zt,powerPreference:"high-performance",stencil:!1});Rt.toneMapping=Io;Rt.toneMappingExposure=1;Rt.shadowMap.enabled=!Et;Rt.shadowMap.type=zi?Ph:Mc;var xe=new Mr,Sb=new oe("#B9A08A");xe.fog=new Ka(Sb,48,120);var at=new Vt(55,1,.1,400),Up=new C(-.86,.3,.22).normalize(),Np={top:{value:new oe("#27477E")},hor:{value:new oe("#FFB46A")},hor2:{value:new oe("#9C7FB0")},sunDir:{value:Up},t:{value:0},disc:{value:new oe("#FFA040")},cloud:{value:new oe("#F6C6A4")}},Jh=new xt({side:Bt,depthWrite:!1,fog:!1,uniforms:Np,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 hor; uniform vec3 hor2; uniform vec3 sunDir; uniform float t; uniform vec3 disc; uniform vec3 cloud; varying vec3 vDir;
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
}`}),Dr=new de(new Yt(300,32,16),Jh);Dr.renderOrder=-10;Dr.frustumCulled=!1;xe.add(Dr);function Op(n){Np.t.value+=n}function zp(){let n=new yr(Rt),e=new Mr;e.add(new de(new Yt(50,32,16),Jh));let t=new de(new Tn(49,24),new We({color:"#4A6A2E",side:At}));t.rotation.x=-Math.PI/2,t.position.y=-4,e.add(t);let i=n.fromScene(e,.04,.1,200);n.dispose(),xe.environment=i.texture}function Bp(){let n=new Mo(Et?256:512,{type:Sn}),e=new yo(.5,400,n),t=new Mr,i=new de(new Yt(100,32,16),Jh);t.add(i),e.update(Rt,t),xe.background=n.texture,Dr.visible=!1}var kp=new mc("#AFC2EC","#4E5E2C",.8);xe.add(kp);var Cn=new Ar("#FFC88C",2.5);Et&&(kp.intensity=1.55,Cn.intensity=2.3);Cn.castShadow=!0;Cn.shadow.bias=-4e-4;Cn.shadow.normalBias=.03;xe.add(Cn,Cn.target);function Hp(n,e){let t=Cn.shadow.camera,i=Math.hypot(n,e)+3;t.left=-i,t.right=i,t.top=i,t.bottom=-i,t.near=1,t.far=160,t.updateProjectionMatrix(),Cn.position.copy(Up).multiplyScalar(70),Cn.target.position.set(0,0,0)}function ds(n,e,t,i={}){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new qn(s);return r.colorSpace=i.linear?bn:ct,i.repeat&&(r.wrapS=r.wrapT=Ii),r.anisotropy=4,r}var le={level:Kh,PR:1,post:!1,composer:null,bloom:null,perfN:0,perfSum:0,calm:0,shadows:!Et,fps:0,frames:0,fpsT:0,onShadows:null};function $h(){return Math.min(zi?2:Et?1.3:1.5,devicePixelRatio||1)}var Fp=()=>Math.min(Et?.8:.75,devicePixelRatio||1);function Ir(){let n=innerWidth,e=innerHeight;Rt.setSize(n,e,!1),at.aspect=n/e,at.fov=at.aspect<.75?72:at.aspect<1.2?62:55,at.updateProjectionMatrix(),le.composer&&(le.composer.setPixelRatio(le.PR),le.composer.setSize(n,e))}function Eb(){if(le.composer)return;let n=Rt.getDrawingBufferSize(new ne),e=new an(n.x,n.y,{type:Sn,samples:2});le.composer=new Pc(Rt,e),le.composer.addPass(new Lc(xe,at)),le.bloom=new Lr(new ne(innerWidth,innerHeight),.35,.5,.92),le.composer.addPass(le.bloom),le.composer.addPass(new Ic)}function Gp(n){Ut.set("gfx",n)}function Vp(){le.PR=Math.min($h(),Et?1.15:1.25),Rt.setPixelRatio(le.PR),xe.fog.near=Et?30:40,xe.fog.far=Et?85:110,at.far=160,at.updateProjectionMatrix();let n=zi?2048:1024;if(Cn.shadow.mapSize.x!==n&&(Cn.shadow.mapSize.set(n,n),Cn.shadow.map&&(Cn.shadow.map.dispose(),Cn.shadow.map=null)),zi)try{Eb()}catch{le.composer=null}le.post=zi&&!!le.composer,le.perfN=le.perfSum=le.calm=0,Ir()}function wb(){le.shadows=!1,Rt.shadowMap.enabled=!1,xe.traverse(n=>{if(n.material)for(let e of[].concat(n.material))e.needsUpdate=!0}),le.onShadows&&le.onShadows(!1)}function Wp(n,e){if(le.frames++,le.fpsT+=n,le.fpsT>=.5&&(le.fps=Math.round(le.frames/le.fpsT),le.frames=0,le.fpsT=0),!e||n>.5||document.hidden||(le.perfN++,le.perfSum+=n,le.perfN<60))return;let t=le.perfSum/le.perfN;le.perfN=0,le.perfSum=0,t>.0205?(le.calm=0,le.post?(le.post=!1,le.noPost=!0):le.PR>Fp()+.01?(le.PR=Math.max(Fp(),le.PR*.88),Rt.setPixelRatio(le.PR),Ir()):le.shadows&&++le.slow>=2&&wb()):t<.0135&&++le.calm>=3&&(le.calm=0,le.slow=0,le.PR<$h()-.01?(le.PR=Math.min($h(),le.PR*1.1),Rt.setPixelRatio(le.PR),Ir()):!le.post&&le.composer&&zi&&!le.noPost&&(le.post=!0))}le.slow=0;function jh(){le.post&&le.composer?le.composer.render():Rt.render(xe,at)}function Oo(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new St,l=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Xp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=Xp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Xp(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let l=0;l<n.length;++l)o.set(n[l].array,a),a+=n[l].array.length;let c=new lt(o,t,i);return s!==void 0&&(c.gpuType=s),c}function qp(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,_=a.length;v<_;v++){let y=a[v],P=n.attributes[y];c[y]=new lt(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized);let S=n.morphAttributes[y];S&&(l[y]=new lt(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized))}let f=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),p=f*x;for(let v=0;v<r;v++){let _=i?i.getX(v):v,y="";for(let P=0,S=a.length;P<S;P++){let A=a[P],D=n.getAttribute(A),M=D.itemSize;for(let w=0;w<M;w++)y+=`${~~(D[u[w]](_)*x+p)},`}if(y in t)h.push(t[y]);else{for(let P=0,S=a.length;P<S;P++){let A=a[P],D=n.getAttribute(A),M=n.morphAttributes[A],w=D.itemSize,F=c[A],W=l[A];for(let z=0;z<w;z++){let L=u[z],U=d[z];if(F[U](o,D[L](_)),M)for(let q=0,K=M.length;q<K;q++)W[q][U](o,M[q][L](_))}}t[y]=o,h.push(o),o++}}let m=n.clone();for(let v in n.attributes){let _=c[v];if(m.setAttribute(v,new lt(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),v in l)for(let y=0;y<l[v].length;y++){let P=l[v][y];m.morphAttributes[v][y]=new lt(P.array.slice(0,o*P.itemSize),P.itemSize,P.normalized)}}return m.setIndex(h),m}function Qh(n,e){if(e===_p)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Do||e===Sc){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===Do)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var Bo=class extends Oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ou(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new vu(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ls.extractUrlBase(e);o=ls.resolveURL(l,this.path)}else o=ls.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Po(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Jp){try{o[it.KHR_BINARY_GLTF]=new yu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Au(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:o[u]=new su;break;case it.KHR_DRACO_MESH_COMPRESSION:o[u]=new Mu(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[u]=new bu;break;case it.KHR_MESH_QUANTIZATION:o[u]=new Su;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function Tb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},iu=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new oe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Wt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ar(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new xc(h),l.distance=u;break;case"spot":l=new gc(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ps(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},su=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return We}extendParams(e,t,i){let s=[];e.color=new oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,ct))}return Promise.all(s)}},ru=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ou=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ne(a,a)}return Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},cu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new oe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ct)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},lu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},hu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new oe().setRGB(a[0],a[1],a[2],Wt),Promise.all(r)}},uu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},du=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new oe().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,ct)),Promise.all(r)}},fu=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},pu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},mu=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},gu=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},xu=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},_u=class{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},vu=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==Kn.TRIANGLES&&l.mode!==Kn.TRIANGLE_STRIP&&l.mode!==Kn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Ie,p=new C,m=new cn,v=new C(1,1,1),_=new Fi(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),_.setMatrixAt(y,x.compose(p,m,v));for(let y in c)if(y==="_COLOR_0"){let P=c[y];_.instanceColor=new oi(P.array,P.itemSize,P.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);gt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Jp="glTF",zo=12,Yp={JSON:1313821514,BIN:5130562},yu=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,zo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-zo,r=new DataView(e,zo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Yp.JSON){let l=new Uint8Array(e,zo+o,a);this.content=i.decode(l)}else if(c===Yp.BIN){let l=zo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Mu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=wu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=wu[h]||h.toLowerCase();if(o[h]!==void 0){let d=i.accessors[e.attributes[h]],f=Fr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],p=c[g];p!==void 0&&(x.normalized=p)}u(f)},a,l,Wt,d)})})}},bu=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Su=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},Dc=class extends os{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,p=-2*f+3*d,m=f-d,v=1-p,_=m-d+u;for(let y=0;y!==a;y++){let P=o[x+y+a],S=o[x+y+c]*h,A=o[g+y+a],D=o[g+y]*h;r[y]=v*P+_*S+p*A+m*D}return r}},Ab=new cn,Eu=class extends Dc{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return Ab.fromArray(r).normalize().toArray(r),r}},Kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zp={9728:Ht,9729:yn,9984:Na,9985:zh,9986:co,9987:es},$p={33071:Un,33648:_o,10497:Ii},eu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Rb={CUBICSPLINE:void 0,LINEAR:Ds,STEP:mr},tu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Cb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new rs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mi})),n.DefaultMaterial}function Os(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ps(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Pb(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function Lb(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ib(n){let e,t=n.extensions&&n.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nu(t.attributes):e=n.indices+":"+nu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+nu(n.targets[i]);return e}function nu(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Tu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Db(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Fb=new Ie,Au=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Tb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new pc(this.options.manager):this.textureLoader=new vc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Po(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Os(r,a,s),ps(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(ls.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=eu[s.type],a=Fr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new lt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=eu[s.type],l=Fr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,p;if(f&&f!==u){let m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,_=t.cache.get(v);_||(x=new l(a,m*f,s.count*f/h),_=new Eo(x,f/h),t.cache.add(v,_)),p=new wo(_,c,d%f/h,g)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),p=new lt(x,c,g);if(s.sparse!==void 0){let m=eu.SCALAR,v=Fr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,P=new v(o[1],_,s.sparse.count*m),S=new l(o[2],y,s.sparse.count*c);a!==null&&(p=new lt(p.array.slice(),p.itemSize,p.normalized));for(let A=0,D=P.length;A<D;A++){let M=P[A];if(p.setX(M,S[A*c]),c>=2&&p.setY(M,S[A*c+1]),c>=3&&p.setZ(M,S[A*c+2]),c>=4&&p.setW(M,S[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Zp[d.magFilter]||yn,h.minFilter=Zp[d.minFilter]||es,h.wrapS=$p[d.wrapS]||Ii,h.wrapT=$p[d.wrapT]||Ii,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let p=new on(x);p.needsUpdate=!0,d(p)}),t.load(ls.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||Db(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new Ao,wn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new To,wn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return rs}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},c=r.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){let u=s[it.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new oe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Wt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,ct)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=At);let h=r.alphaMode||tu.OPAQUE;if(h===tu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===tu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==We&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ne(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==We&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==We){let u=r.emissiveFactor;a.emissive=new oe().setRGB(u[0],u[1],u[2],Wt)}return r.emissiveTexture!==void 0&&o!==We&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ct)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ps(u,r),t.associations.set(u,{materials:e}),r.extensions&&Os(s,u,r),u})}createUniqueName(e){let t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Kp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Ib(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Kp(new St,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Cb(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],p=o[f],m,v=l[f];if(p.mode===Kn.TRIANGLES||p.mode===Kn.TRIANGLE_STRIP||p.mode===Kn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Di(x,v):new de(x,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Kn.TRIANGLE_STRIP?m.geometry=Qh(m.geometry,Sc):p.mode===Kn.TRIANGLE_FAN&&(m.geometry=Qh(m.geometry,Do));else if(p.mode===Kn.LINES)m=new Ja(x,v);else if(p.mode===Kn.LINE_STRIP)m=new Sr(x,v);else if(p.mode===Kn.LINE_LOOP)m=new ja(x,v);else if(p.mode===Kn.POINTS)m=new Qa(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Lb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ps(m,r),p.extensions&&Os(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Os(s,u[0],r),u[0];let d=new zt;r.extensions&&Os(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Vt(Mp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new is(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ps(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Ie;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new br(a,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,p=x.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],p=u[4],m=[];for(let v=0,_=d.length;v<_;v++){let y=d[v],P=f[v],S=g[v],A=x[v],D=p[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let M=i._createAnimationTracks(y,P,S,A,D);if(M)for(let w=0;w<M.length;w++)m.push(M[w])}return new fc(r,void 0,m)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Fb)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Fs:l.length>1?h=new zt:l.length===1?h=l[0]:h=new gt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ps(h,r),r.extensions&&Os(i,h,r),r.matrix!==void 0){let u=new Ie;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new zt;i.name&&(r.name=s.createUniqueName(i.name)),ps(r,i),i.extensions&&Os(t,r,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof wn||d instanceof on)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];fs[r.path]===fs.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(fs[r.path]){case fs.weights:l=Ui;break;case fs.rotation:l=_i;break;case fs.position:case fs.scale:l=Ni;break;default:switch(i.itemSize){case 1:l=Ui;break;case 2:case 3:default:l=Ni;break}break}let h=s.interpolation!==void 0?Rb[s.interpolation]:Ds,u=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+fs[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Tu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof _i?Eu:Dc;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ub(n,e,t){let i=e.attributes,s=new En;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){let h=Tu(Fr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,c=new C;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Tu(Fr[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Nn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Kp(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=wu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return ot.workingColorSpace!==Wt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),ps(n,e),Ub(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Pb(n,e.targets,t):n})}var vi={};async function jp(n){let e;if(window.BG_NATURE_B64){let t=await(await fetch(window.BG_NATURE_B64)).text(),i=Uint8Array.from(atob(t.trim()),o=>o.charCodeAt(0)),s=window.createImageBitmap;window.createImageBitmap=void 0;let r=new Promise((o,a)=>new Bo().parse(i.buffer,"",o,a));window.createImageBitmap=s,e=await r,n&&n(1)}else e=await new Promise((t,i)=>new Bo().load("assets/nature.glb",t,s=>{n&&s.total&&n(s.loaded/s.total)},i));for(let t of e.scene.children){t.updateMatrixWorld(!0);let i=new Ie().copy(t.matrixWorld).invert(),s=[],r=new En;t.traverse(o=>{if(!o.isMesh)return;let a=new Ie().multiplyMatrices(i,o.matrixWorld);s.push({geometry:o.geometry,map:o.material.map||null,matName:o.material.name||"",matrix:a});let c=o.geometry;c.computeBoundingBox(),r.union(c.boundingBox.clone().applyMatrix4(a))}),vi[t.name]={parts:s,box:r,size:r.getSize(new C)}}return vi}var Nb={id:"glade",name:"\u0413\u0440\u0438\u0431\u043D\u0430\u044F \u043F\u043E\u043B\u044F\u043D\u0430",desc:"\u0413\u0440\u0438\u0431\u043D\u0438\u0446\u0430 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435, \u043A\u0443\u0441\u0442\u044B-\u0438\u0437\u0433\u043E\u0440\u043E\u0434\u0438 \u043F\u043E \u0431\u043E\u043A\u0430\u043C \u0438 \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u0442\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0437\u0430\u0441\u0430\u0434.",half:['""..,..r.r.r..,..""','""...............""',".....##.....##.....","...................","####...........####",".......T...T.......",'"""......R......"""','"""...#####....."""','"""............."""','.~~.....""....R....','.~~..R..""".....##.','........"""....##..',".##................",'"""...R..M..R..."""']},Qp={glade:Ob(Nb),maze:zb(2718)};function Ob(n){let e=n.half,t=e[0].length;for(let a of e)if(a.length!==t)throw new Error("map "+n.id+": row width "+a.length+" != "+t+" in \xAB"+a+"\xBB");let i=e[e.length-1];if(i!==[...i].reverse().join(""))throw new Error("map "+n.id+": middle row must be a palindrome");let s=a=>a==="r"?"b":a,r=e.slice(0,-1).reverse().map(a=>[...a].reverse().map(s).join("")),o=[...e,...r];return Object.assign({},n,{rows:o,W:t,H:o.length})}function zb(n){let e=n>>>0,t=()=>{e=e+1831565813>>>0;let p=e;return p=Math.imul(p^p>>>15,p|1),p^=p+Math.imul(p^p>>>7,p|61),((p^p>>>14)>>>0)/4294967296},i=17,s=i*2-1,r=Array.from({length:i},()=>Array(i).fill("#")),o=(p,m)=>p>=0&&m>=0&&p<i&&m<i,a=new Set,c=[[0,0]];for(r[0][0]=".",a.add("0,0");c.length;){let[p,m]=c[c.length-1],v=[[2,0],[-2,0],[0,2],[0,-2]].map(([A,D])=>[p+A,m+D,A,D]).filter(([A,D])=>o(A,D)&&!a.has(A+","+D));if(!v.length){c.pop();continue}let[_,y,P,S]=v[Math.floor(t()*v.length)];r[p+P/2][m+S/2]=".",r[_][y]=".",a.add(_+","+y),c.push([_,y])}for(let p=0;p<i;p++)for(let m=0;m<i;m++)r[p][m]==="#"&&p%2!==m%2&&t()<.2&&(r[p][m]=".");for(let p=1;p<i;p+=2)for(let m=1;m<i;m+=2)[[1,0],[-1,0],[0,1],[0,-1]].every(([_,y])=>!o(p+_,m+y)||r[p+_][m+y]===".")&&t()<.35&&(r[p][m]=".");for(let p=0;p<i;p++)for(let m=0;m<i;m++)Math.max(i-1-p,i-1-m)<=3&&(r[p][m]=".");let l=[[1,1],[1,11],[11,1]];for(let[p,m]of l)for(let v=p-1;v<=p+1;v++)for(let _=m-1;_<=m+1;_++)o(v,_)&&(r[v][_]=".");let h=(p,m,v)=>l.some(([_,y])=>Math.abs(_-p)<=v&&Math.abs(y-m)<=v)||Math.max(i-1-p,i-1-m)<=4;for(let p=0;p<9;p++){let m=Math.floor(t()*i),v=Math.floor(t()*i);for(let _=0;_<6;_++){o(m,v)&&r[m][v]==="."&&!h(m,v,1)&&(r[m][v]='"');let y=Math.floor(t()*4);m+=[1,-1,0,0][y],v+=[0,0,1,-1][y]}}let u=0,d=(p,m)=>[[1,0],[-1,0],[0,1],[0,-1]].filter(([v,_])=>o(p+v,m+_)&&r[p+v][m+_]==="#").length;for(let p of[3,2])for(let m=0;m<i-1&&u<11;m++)for(let v=0;v<i-1&&u<11;v++)r[m][v]!=="."||h(m,v,2)||d(m,v)>=p&&t()<(p===3?.8:.18)&&(r[m][v]="C",u++);r[i-4][i-3]="C",r[i-3][i-4]="C",r[i-3][i-3]="R";for(let p=0;p<i;p++)for(let m=0;m<i;m++)r[p][m]==="."&&!h(p,m,2)&&t()<.025&&(r[p][m]="R");for(let p=0;p<i;p++)r[i-1][p]=r[p][i-1];for(let[p,m]of l)r[p][m]="s";let f=Array.from({length:s},()=>Array(s).fill("#"));for(let p=0;p<s;p++)for(let m=0;m<s;m++){let v=p,_=m;for(let y=0;y<4&&!(v<i&&_<i);y++){let P=v;v=s-1-_,_=P}f[p][m]=r[v][_]}let g=p=>p!=="#"&&p!=="R"&&p!=="C";for(let p=0;p<200;p++){let m=Array.from({length:s},()=>Array(s).fill(!1)),v=[[1,1]];for(m[1][1]=!0;v.length;){let[S,A]=v.pop();for(let[D,M]of[[1,0],[-1,0],[0,1],[0,-1]]){let w=S+D,F=A+M;w>=0&&F>=0&&w<s&&F<s&&!m[w][F]&&g(f[w][F])&&(m[w][F]=!0,v.push([w,F]))}}let _=null;for(let S=0;S<s&&!_;S++)for(let A=0;A<s&&!_;A++)g(f[S][A])&&!m[S][A]&&(_=[S,A]);if(!_)break;let[y,P]=_;for(let[S,A]of[[1,0],[-1,0],[0,1],[0,-1]]){let D=y+S,M=P+A;if(D>=0&&M>=0&&D<s&&M<s&&f[D][M]!=="."&&f[D][M]!=='"'){let w=D,F=M;for(let W=0;W<4;W++){f[w][F]=".";let z=w;w=F,F=s-1-z}break}}}return{id:"maze",name:"\u041B\u0435\u0441\u043D\u043E\u0439 \u043B\u0430\u0431\u0438\u0440\u0438\u043D\u0442",desc:"\u0423\u0437\u043A\u0438\u0435 \u043F\u0440\u043E\u0445\u043E\u0434\u044B \u043C\u0435\u0436\u0434\u0443 \u043A\u0443\u0441\u0442\u0430\u043C\u0438, \u0442\u0430\u0439\u043D\u0438\u043A\u0438 \u0441 \u0441\u0438\u043B\u043E\u0439 \u0438 \u043F\u043E\u043B\u044F\u043D\u0430 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435.",rows:f.map(p=>p.join("")),W:s,H:s,mode:"br"}}var B={map:null,W:0,H:0,rows:null,group:null,hx:0,hz:0,spawns:{0:[],1:[],ffa:[]},mine:null,grassTiles:[],crates:[],shared:{}},Pn={time:{value:0},push:{value:Array.from({length:10},()=>new C(0,0,0))},me:{value:new C(0,0,0)}},ln=n=>(n-(B.W-1)/2)*1.6,hn=n=>(n-(B.H-1)/2)*1.6,ai=n=>Math.floor(n/1.6+B.W/2),ci=n=>Math.floor(n/1.6+B.H/2);function ki(n,e){return n<0||e<0||n>=B.W||e>=B.H?"X":B.rows[e][n]}var Bs=(n,e)=>ki(ai(n),ci(e)),Bb=new Set(["#","R","T","~","X","C"]),kb=new Set(["#","R","T","X","C"]),ms=n=>Bb.has(n),Hb=n=>kb.has(n),Gb=new Set(["#","X"]),Vo=n=>Gb.has(n),zr=(n,e,t,i)=>Ln(n,e,t,i,Vo)<0,nm=n=>n==="#"||n==="X"?Xo:n==="R"?1.15:n==="C"?1.1:n==="T"?.9:0,Fc=(n,e)=>Bs(n,e)==='"';function ks(n,e){let t=ai(n.x-e),i=ai(n.x+e),s=ci(n.z-e),r=ci(n.z+e),o=!1;for(let a=s;a<=r;a++)for(let c=t;c<=i;c++){if(!ms(ki(c,a)))continue;let l=ln(c)-1.6/2,h=l+1.6,u=hn(a)-1.6/2,d=u+1.6,f=tt(n.x,l,h),g=tt(n.z,u,d),x=n.x-f,p=n.z-g,m=x*x+p*p;if(!(m>=e*e))if(o=!0,m>1e-8){let v=Math.sqrt(m),_=(e-v)/v;n.x+=x*_,n.z+=p*_}else{let v=[n.x-l,h-n.x,n.z-u,d-n.z],_=Math.min(...v);_===v[0]?n.x=l-e:_===v[1]?n.x=h+e:_===v[2]?n.z=u-e:n.z=d+e}}return o}function Ln(n,e,t,i,s=Hb){let r=t-n,o=i-e,a=ai(n),c=ci(e);if(s(ki(a,c)))return 0;let l=ai(t),h=ci(i),u=r>0?1:-1,d=o>0?1:-1,f=n/1.6+B.W/2,g=e/1.6+B.H/2,x=r/1.6,p=o/1.6,m=x!==0?Math.abs(1/x):1/0,v=p!==0?Math.abs(1/p):1/0,_=x!==0?(u>0?Math.floor(f)+1-f:f-Math.floor(f))*m:1/0,y=p!==0?(d>0?Math.floor(g)+1-g:g-Math.floor(g))*v:1/0;for(let P=0;P<200;P++){if(a===l&&c===h)return-1;let S;if(_<y?(S=_,_+=m,a+=u):(S=y,y+=v,c+=d),S>1)return-1;if(s(ki(a,c)))return S}return-1}var Cu=(n,e,t,i)=>Ln(n,e,t,i)<0;function im(n,e,t,i){let s=B.W,r=B.H,o=tt(ai(n),0,s-1),a=tt(ci(e),0,r-1),c=tt(ai(t),0,s-1),l=tt(ci(i),0,r-1);if(ms(ki(c,l))){let S=Vb(c,l);if(!S)return null;c=S[0],l=S[1]}let h=s*r,u=new Float32Array(h).fill(1e9),d=new Int32Array(h).fill(-1),f=new Uint8Array(h),g=[a*s+o];u[g[0]]=0;let x=S=>{let A=Math.abs(S%s-c),D=Math.abs((S/s|0)-l);return Math.max(A,D)+.414*Math.min(A,D)},p=l*s+c;for(;g.length;){let S=0,A=1e9;for(let F=0;F<g.length;F++){let W=u[g[F]]+x(g[F]);W<A&&(A=W,S=F)}let D=g[S];if(g[S]=g[g.length-1],g.pop(),D===p)break;f[D]=1;let M=D%s,w=D/s|0;for(let F=-1;F<=1;F++)for(let W=-1;W<=1;W++){if(!W&&!F)continue;let z=M+W,L=w+F;if(z<0||L<0||z>=s||L>=r||ms(B.rows[L][z])||W&&F&&(ms(B.rows[w][z])||ms(B.rows[L][M])))continue;let U=L*s+z;if(f[U])continue;let q=u[D]+(W&&F?1.414:1)+(B.rows[L][z]==='"'?.15:0);q<u[U]&&(u[U]>=1e9&&g.push(U),u[U]=q,d[U]=D)}}if(d[p]<0&&p!==a*s+o)return null;let m=[];for(let S=p;S>=0;S=d[S])m.push(S);m.reverse();let v=m.map(S=>({x:ln(S%s),z:hn(S/s|0)}));v[v.length-1]={x:tt(t,ln(c)-1.6*.45,ln(c)+1.6*.45),z:tt(i,hn(l)-1.6*.45,hn(l)+1.6*.45)};let _=[],y={x:n,z:e},P=0;for(;P<v.length;){let S=v.length-1;for(;S>P&&!Pu(y.x,y.z,v[S].x,v[S].z);)S--;_.push(v[S]),y=v[S],P=S+1}return _}function Pu(n,e,t,i){let s=t-n,r=i-e,o=Math.hypot(s,r)||1,a=-r/o*.42,c=s/o*.42;return Ln(n+a,e+c,t+a,i+c,ms)<0&&Ln(n-a,e-c,t-a,i-c,ms)<0}function Vb(n,e){for(let t=1;t<6;t++)for(let i=-t;i<=t;i++)for(let s=-t;s<=t;s++)if(Math.max(Math.abs(s),Math.abs(i))===t&&!ms(ki(n+s,e+i)))return[n+s,e+i];return null}function Wo(n,e,t,i){return n.onBeforeCompile=s=>{s.uniforms.uTime=Pn.time,s.uniforms.uPush=Pn.push,s.uniforms.uMe=Pn.me,i&&(s.fragmentShader=`uniform vec3 uMe;
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
      gl_Position = projectionMatrix * mvPosition;`)},n.customProgramCacheKey=()=>"wind"+e+t+i,n}function Wb(){return ds(256,256,(n,e,t)=>{n.fillStyle="#3E7F2C",n.fillRect(0,0,e,t);let i=["#2F6A22","#4C9634","#5AAA3A","#3A7A28","#6CBB45","#2A5C1E"];for(let s=0;s<900;s++){let r=O(0,e),o=O(0,t),a=O(5,11),c=O(0,Pe);n.fillStyle=Uo(i);for(let l of[-e,0,e])for(let h of[-t,0,t])n.beginPath(),n.ellipse(r+l,o+h,a,a*.55,c,0,Pe),n.fill()}n.globalAlpha=.25,n.fillStyle="#B9E87A";for(let s=0;s<160;s++){let r=O(0,e),o=O(0,t);n.beginPath(),n.ellipse(r,o,3,1.6,O(0,Pe),0,Pe),n.fill()}},{repeat:!0})}function Xb(n,e){return n.onBeforeCompile=t=>{t.vertexShader=`varying vec3 vWP; varying vec3 vWN;
`+t.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vWP = (modelMatrix * vec4(transformed, 1.0)).xyz; vWN = normalize(mat3(modelMatrix) * objectNormal);`),t.fragmentShader=`varying vec3 vWP; varying vec3 vWN;
`+t.fragmentShader.replace("#include <map_fragment>",`
      ${Et?`vec3 an = abs(vWN);   // phones: one texture read along the main axis instead of three
      vec2 tuv = an.y > an.x && an.y > an.z ? vWP.xz : an.x > an.z ? vWP.zy : vWP.xy;
      diffuseColor *= texture2D(map, tuv * ${e.toFixed(3)});`:`vec3 bw = pow(abs(vWN), vec3(4.0)); bw /= max(bw.x + bw.y + bw.z, 1e-4);
      vec4 tx = texture2D(map, vWP.zy * ${e.toFixed(3)}), ty = texture2D(map, vWP.xz * ${e.toFixed(3)}), tz = texture2D(map, vWP.xy * ${e.toFixed(3)});
      diffuseColor *= tx * bw.x + ty * bw.y + tz * bw.z;`}`)},n.customProgramCacheKey=()=>"tri"+e,n}function qb(n,e,t,i){let s=B.W*B.H>700,r=s?Et?1.2:1.5:Et?1.7:2.2,o=.32,a=new xi(n,e,t,Math.ceil(n*r),Math.ceil(e*r),Math.ceil(t*r));a.deleteAttribute("normal"),a.deleteAttribute("uv"),a=qp(a);let c=a.attributes.position,l=n/2-o,h=e/2-o,u=t/2-o,d=new C,f=new C,g=new Float32Array(c.count*3);for(let x=0;x<c.count;x++){d.fromBufferAttribute(c,x);let p=tt(d.x,-l,l),m=tt(d.y,-h,h),v=tt(d.z,-u,u);f.set(d.x-p,d.y-m,d.z-v).normalize();let _=.07*(Math.sin(d.x*4.1+i)*Math.sin(d.z*3.7-i)+Math.sin(d.y*5.3+d.x*2.1+i*2))+(d.y>h-.01?.05*Math.sin(d.x*2.3+d.z*2.9+i):0);d.set(p,m,v).addScaledVector(f,o+_),c.setXYZ(x,d.x,d.y+e/2,d.z);let y=tt((d.y+e/2)/e,0,1),P=.55+.45*Math.pow(y,.7)+O(-.05,.05);g[x*3]=P*.95,g[x*3+1]=P,g[x*3+2]=P*.9}return a.setAttribute("color",new lt(g,3)),a.computeVertexNormals(),a}function Yb(){let n=[[0,0],[.78,0],[.62,.12],[.55,.3],[.53,.7],[.56,.84],[.5,.86]].map(s=>new ne(s[0],s[1])),e=new Us(n,18),t=new Tn(.5,18);t.rotateX(-Math.PI/2),t.translate(0,.86,0);let i=e.attributes.position;for(let s=0;s<i.count;s++){let r=i.getX(s),o=i.getZ(s),a=Math.atan2(o,r),c=i.getY(s),l=1+.07*Math.sin(a*7)+.04*Math.sin(a*13+c*6);i.setX(s,r*l),i.setZ(s,o*l)}return e.computeVertexNormals(),{side:e,top:t}}var Nr=new Ie,Or=new cn,Ho=new C,Lu=new C,Iu=new C(0,1,0);function zs(n,e,t,i={}){let s=vi[n];if(!s||!e.length)return[];let r=[];for(let o of s.parts){let a=t(o);if(!a)continue;let c=new Fi(o.geometry,a,e.length);e.forEach((l,h)=>{Or.setFromAxisAngle(Iu,l.rot||0),Ho.setScalar(l.s||1),l.sy&&(Ho.y*=l.sy),Nr.compose(Lu.set(l.x,l.y||0,l.z),Or,Ho).multiply(o.matrix),c.setMatrixAt(h,Nr),l.color&&c.setColorAt&&c.setColorAt(h,l.color)}),c.castShadow=!!i.cast,c.receiveShadow=i.receive!==!1,c.computeBoundingSphere(),B.group.add(c),r.push(c)}return r}function Du(n){B.group&&(xe.remove(B.group),B.group.traverse(t=>{t.geometry&&!t.userData.shared&&t.geometry.dispose()}));let e=Qp[n];Object.assign(B,{map:e,W:e.W,H:e.H,rows:e.rows.map(t=>[...t]),hx:e.W*1.6/2,hz:e.H*1.6/2,spawns:{0:[],1:[],ffa:[]},grassTiles:[],crates:[],mine:null}),B.group=new zt,xe.add(B.group),Hp(B.hx+2,B.hz+2);for(let t=0;t<B.H;t++)for(let i=0;i<B.W;i++){let s=B.rows[t][i];if(s==="b"&&B.spawns[0].push({x:ln(i),z:hn(t)-3.2}),s==="r"&&B.spawns[1].push({x:ln(i),z:hn(t)+3.2}),s==="M"&&(B.mine={x:ln(i),z:hn(t)}),s==="s"){let r=ln(i),o=hn(t),a=Math.hypot(r,o)||1;B.spawns.ffa.push({x:r-r/a*1,z:o-o/a*1})}s==='"'&&B.grassTiles.push([i,t])}return B.spawns[0].length||(B.spawns[0]=B.spawns[1]=B.spawns.ffa),Yh(7331,()=>{Zb(),Kb(),eS(),Qb(),tS(),nS(),iS(),oS()}),B}function Zb(){let e=B.W*40,t=B.H*40,i=ds(e,t,d=>{for(let g=0;g<B.H;g++)for(let x=0;x<B.W;x++){let p=(g+x)%2===0;d.fillStyle=p?"#7CC24E":"#71B847",d.fillRect(x*40,g*40,40,40)}let f=(g,x,p)=>{let m=d.createRadialGradient(g,x,p*.2,g,x,p);m.addColorStop(0,"rgba(201,164,106,0.95)"),m.addColorStop(.7,"rgba(190,156,98,0.6)"),m.addColorStop(1,"rgba(190,156,98,0)"),d.fillStyle=m,d.beginPath(),d.arc(g,x,p,0,Pe),d.fill()};for(let g=0;g<B.H;g++)for(let x=0;x<B.W;x++){let p=B.rows[g][x],m=(x+.5)*40,v=(g+.5)*40;p==="M"&&f(m,v,40*2.6),(p==="b"||p==="r"||p==="s")&&f(m,v,40*1.1)}for(let g=0;g<e*t/60;g++){let x=O(0,e),p=O(0,t);d.strokeStyle=Uo(["rgba(70,140,40,.5)","rgba(150,215,90,.45)","rgba(55,115,35,.45)","rgba(180,230,120,.3)"]),d.lineWidth=O(1,2.2),d.beginPath(),d.moveTo(x,p),d.lineTo(x+O(-2,2),p-O(3,7)),d.stroke()}d.filter="blur(6px)";for(let g=0;g<B.H;g++)for(let x=0;x<B.W;x++){let p=B.rows[g][x];p==="#"?(d.fillStyle="rgba(30,60,20,.55)",d.fillRect(x*40-6,g*40-6,52,52)):p==="R"||p==="T"?(d.fillStyle="rgba(30,60,20,.35)",d.beginPath(),d.arc((x+.5)*40,(g+.5)*40,40*.65,0,Pe),d.fill()):p==='"'?(d.fillStyle="rgba(40,90,25,.35)",d.fillRect(x*40,g*40,40,40)):p==="~"&&(d.fillStyle="#4B5E2E",d.fillRect(x*40-4,g*40-4,48,48))}d.filter="none";for(let g=0;g<B.H;g++)for(let x=0;x<B.W;x++){let p=B.rows[g][x];p!=="b"&&p!=="r"&&p!=="s"||(d.strokeStyle=p==="b"?"rgba(80,190,255,.85)":p==="r"?"rgba(255,90,90,.85)":"rgba(255,215,90,.8)",d.lineWidth=4,d.beginPath(),d.arc((x+.5)*40,(g+.5)*40,40*.38,0,Pe),d.stroke())}});i.anisotropy=8;let s=.8,r=Math.round(B.W*1.6/s),o=Math.round(B.H*1.6/s),a=new en(B.W*1.6,B.H*1.6,r,o);a.rotateX(-Math.PI/2);let c=a.attributes.position;for(let d=0;d<c.count;d++){let f=c.getX(d),g=c.getZ(d),x=0;for(let[p,m]of[[0,0],[.35,0],[-.35,0],[0,.35],[0,-.35]])Bs(f+p,g+m)==="~"&&(x+=.2);c.setY(d,-x*.7)}a.computeVertexNormals();let l=new de(a,ut({map:i,roughness:.95}));l.receiveShadow=!0,B.group.add(l);let h=ds(256,256,(d,f,g)=>{d.fillStyle="#5E9E3A",d.fillRect(0,0,f,g);for(let x=0;x<1400;x++){let p=O(0,f),m=O(0,g);d.strokeStyle=Uo(["rgba(40,100,30,.5)","rgba(120,190,70,.45)","rgba(70,130,40,.5)"]),d.lineWidth=O(1,2),d.beginPath(),d.moveTo(p,m),d.lineTo(p+O(-2,2),m-O(3,8)),d.stroke()}},{repeat:!0});h.repeat.set(40,40);let u=new de(new en(260,260),ut({map:h,roughness:1}));u.rotation.x=-Math.PI/2,u.position.y=-.02,u.receiveShadow=!0,B.group.add(u)}function $b(){return B.shared.hedge||(B.shared.hedge=Xb(ut({map:Wb(),vertexColors:!0,roughness:.85,color:"#E8FFD8"}),.55)),B.shared.hedge}var Xo=2.6;function Kb(){let n=[],e=new Set,t=B.W,i=B.H,s=(h,u)=>ki(h,u)==="#";for(let h=0;h<i;h++)for(let u=0;u<t;u++){if(!s(u,h)||e.has(h*t+u))continue;let d=u;for(;s(d+1,h);)d++;if(d>u){for(let f=u;f<=d;f++)e.add(h*t+f);Ur(n,ln(u)-1.6/2,hn(h)-1.6/2,(d-u+1)*1.6,1.6)}}for(let h=0;h<t;h++)for(let u=0;u<i;u++){if(!s(h,u)||e.has(u*t+h))continue;let d=u;for(;s(h,d+1)&&!e.has((d+1)*t+h);)d++;for(let f=u;f<=d;f++)e.add(f*t+h);Ur(n,ln(h)-1.6/2,hn(u)-1.6/2,1.6,(d-u+1)*1.6)}let r=B.hx,o=B.hz,a=1.3;Ur(n,-r-a,-o-a,B.W*1.6+2*a,a,3),Ur(n,-r-a,o,B.W*1.6+2*a,a,3),Ur(n,-r-a,-o,a,B.H*1.6,3),Ur(n,r,-o,a,B.H*1.6,3);let c=new de(Oo(n),$b());c.castShadow=c.receiveShadow=!0,B.group.add(c),n.forEach(h=>h.dispose());let l=[];for(let h=0;h<i;h++)for(let u=0;u<t;u++)s(u,h)&&zi&&O()<.3&&l.push({x:ln(u)+O(-.4,.4),y:Xo-.3,z:hn(h)+O(-.4,.4),rot:O(0,Pe),s:O(.32,.42)});zs("Bush_Common",l,()=>sm("#4FA23A"),{cast:!1})}function Ur(n,e,t,i,s,r=Xo){let o=qb(i-.06,r,s-.06,O(0,100));o.translate(e+i/2,0,t+s/2),n.push(o)}function sm(n){let e="leaf"+n;if(!B.shared[e]){let t=vi.Bush_Common.parts[0].map;B.shared[e]=Wo(ut({map:t,color:n,alphaTest:.45,side:At,roughness:.8}),1.6,.05,!1)}return B.shared[e]}var rm=3e3,Bi=null,ko=new gt;function Jb(){let n=new xi(1.3,1.1,1.3);return n.translate(0,.55,0),n}function jb(){return ds(128,128,(n,e,t)=>{n.fillStyle="#9A6B3C",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)n.fillStyle=i%2?"#8A5E33":"#A87645",n.fillRect(0,i*32+2,e,28);n.strokeStyle="#5E3D1E",n.lineWidth=8,n.strokeRect(4,4,e-8,t-8),n.beginPath(),n.moveTo(8,8),n.lineTo(e-8,t-8),n.stroke(),n.fillStyle="#FFD45A",n.beginPath(),n.arc(e/2,t/2,15,0,Pe),n.fill(),n.fillStyle="#FFF4C0",n.beginPath(),n.arc(e/2-4,t/2-4,5,0,Pe),n.fill()})}function Qb(){B.crates=[];for(let n=0;n<B.H;n++)for(let e=0;e<B.W;e++)B.rows[n][e]==="C"&&B.crates.push({c:e,r:n,x:ln(e),z:hn(n),hp:rm,shake:0,rot:Math.floor(O(0,4))*Math.PI/2,alive:!0});if(!B.crates.length){Bi=null;return}Bi=new Fi(Jb(),ut({map:jb(),roughness:.85}),B.crates.length),Bi.castShadow=Bi.receiveShadow=!0,B.crates.forEach((n,e)=>{n.i=e,Go(n)}),B.group.add(Bi)}function Go(n){let e=n.alive?1:0,t=n.shake>0?Math.sin(n.shake*60)*.06*n.shake/.2:0;ko.position.set(n.x+t,0,n.z),ko.rotation.set(0,n.rot+t,0),ko.scale.set(e,e*(1-t*.5),e),ko.updateMatrix(),Bi.setMatrixAt(n.i,ko.matrix),Bi.instanceMatrix.needsUpdate=!0}var om=(n,e)=>B.crates.find(t=>t.alive&&t.c===n&&t.r===e)||null;function Fu(n,e){return!n||!n.alive?!1:(n.hp-=e,n.shake=.2,n.hp<=0?(n.alive=!1,B.rows[n.r][n.c]=".",Go(n),!0):(Go(n),!1))}function am(){if(Bi)for(let n of B.crates)n.alive=!0,n.hp=rm,n.shake=0,B.rows[n.r][n.c]="C",Go(n)}function cm(n){if(Bi)for(let e of B.crates)e.shake>0&&(e.shake=Math.max(0,e.shake-n),Go(e))}function eS(){let n=[[],[],[]],e=[];for(let c=0;c<B.H;c++)for(let l=0;l<B.W;l++){let h=B.rows[c][l],u=ln(l),d=hn(c);if(h==="R"){let f=(c*7+l*3)%3;n[f].push({x:u,z:d,y:-.05,rot:O(0,Pe),s:.56})}h==="T"&&e.push({x:u,z:d,rot:O(0,Pe),s:O(.95,1.05)})}let t=ut({map:vi.Rock_Medium_1.parts[0].map,roughness:.9,color:"#D8E0D0"});n.forEach((c,l)=>zs("Rock_Medium_"+(l+1),c,()=>t,{cast:!0}));let{side:i,top:s}=Yb(),r=ds(128,128,(c,l,h)=>{c.fillStyle="#6B4A2E",c.fillRect(0,0,l,h);for(let u=0;u<40;u++){let d=O(0,l);c.strokeStyle=Uo(["#4E3420","#7E5A38","#5A3D25"]),c.lineWidth=O(2,6),c.beginPath(),c.moveTo(d,0),c.bezierCurveTo(d+O(-8,8),h*.3,d+O(-8,8),h*.7,d+O(-4,4),h),c.stroke()}},{repeat:!0});r.repeat.set(3,1);let o=ds(128,128,(c,l,h)=>{c.fillStyle="#E2B97A",c.fillRect(0,0,l,h);for(let u=4;u<64;u+=O(4,7))c.strokeStyle=`rgba(150,95,45,${O(.35,.7)})`,c.lineWidth=O(1,2.5),c.beginPath(),c.arc(64+O(-1,1),64+O(-1,1),u,0,Pe),c.stroke();c.strokeStyle="#6B4A2E",c.lineWidth=8,c.beginPath(),c.arc(64,64,62,0,Pe),c.stroke()}),a=(c,l)=>{let h=new Fi(c,l,e.length);e.forEach((u,d)=>{Or.setFromAxisAngle(Iu,u.rot),Nr.compose(Lu.set(u.x,0,u.z),Or,Ho.setScalar(u.s)),h.setMatrixAt(d,Nr)}),h.castShadow=h.receiveShadow=!0,B.group.add(h)};e.length&&(a(i,ut({map:r,roughness:.9})),a(s,ut({map:o,roughness:.8})))}var em=[];function Ru(n){let e=[],t=[],i=[],s=[],r=new oe,o=new oe;for(let c=0;c<n;c++){let l=O(-.82,.82),h=O(-.82,.82),u=O(1.15,1.65),d=O(.08,.13),f=O(0,Pe),g=O(.15,.45),x=O(0,Pe),p=Math.cos(f),m=Math.sin(f);r.setHSL(O(.27,.31),O(.6,.75),O(.1,.15)),o.setHSL(O(.22,.28),O(.6,.8),O(.3,.4));let v=e.length/3,_=[[0,1],[.45,.8],[.8,.45],[1,0]];for(let[y,P]of _){let S=l+Math.cos(x)*g*y*y,A=h+Math.sin(x)*g*y*y,D=u*y*(1-g*g*.3*y),M=y===1?0:1;for(let w of M?[-1,1]:[0]){e.push(S+p*d*P*w*.5,D,A+m*d*P*w*.5);let F=r.clone().lerp(o,Math.pow(y,.8));t.push(F.r,F.g,F.b),i.push(-m*.7,.5,p*.7)}}s.push(v,v+1,v+3,v,v+3,v+2,v+2,v+3,v+5,v+2,v+5,v+4,v+4,v+5,v+6)}let a=new St;return a.setAttribute("position",new Be(e,3)),a.setAttribute("normal",new Be(i,3)),a.setAttribute("color",new Be(t,3)),a.setIndex(s),a}function tS(){let n=zi?70:Et?40:56,e=[Ru(n),Ru(n),Ru(n)],t=Wo(ut({vertexColors:!0,roughness:1,side:At,envMapIntensity:.5}),1.6,.12,!0);em=[],e.forEach((i,s)=>{let r=B.grassTiles.filter((a,c)=>c%3===s);if(!r.length)return;let o=new Fi(i,t,r.length);r.forEach(([a,c],l)=>{Or.setFromAxisAngle(Iu,Math.floor(O(0,4))*Math.PI/2),Nr.compose(Lu.set(ln(a),0,hn(c)),Or,Ho.set(1,O(.92,1.08),1)),o.setMatrixAt(l,Nr)}),o.receiveShadow=!0,o.computeBoundingSphere(),B.group.add(o),em.push(o)})}function nS(){let n=[];for(let r=0;r<B.H;r++)for(let o=0;o<B.W;o++)B.rows[r][o]==="~"&&n.push([o,r]);if(!n.length)return;let e=n.map(([r,o])=>{let a=new en(1.6+.5,1.6+.5);return a.rotateX(-Math.PI/2),a.translate(ln(r),-.16,hn(o)),a}),t=ut({color:"#4FB5C8",roughness:.12,metalness:.1,transparent:!0,opacity:.82});t.onBeforeCompile=r=>{r.uniforms.uTime=Pn.time,r.vertexShader=`varying vec3 vWP2;
`+r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vWP2 = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=`uniform float uTime; varying vec3 vWP2;
`+r.fragmentShader.replace("#include <map_fragment>",`
      float rip = sin(vWP2.x * 5.0 + uTime * 1.6) * sin(vWP2.z * 4.3 - uTime * 1.2) + sin((vWP2.x + vWP2.z) * 7.0 + uTime * 2.3) * 0.5;
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.85, 1.0, 1.0), smoothstep(0.9, 1.4, rip) * 0.5);`)};let i=new de(Oo(e),t);i.receiveShadow=!0,B.group.add(i);let s=n.filter(()=>O()<.7).map(([r,o])=>({x:ln(r)+O(-.4,.4),y:-.14,z:hn(o)+O(-.4,.4),rot:O(0,Pe),s:O(.5,.7)}));zs("Plant_1",s.map(r=>Object.assign(r,{sy:.25})),()=>sm("#6DBB4A"))}function iS(){let n=[],e=[],t=[],i=[];for(let o=0;o<B.H;o++)for(let a=0;a<B.W;a++){let c=B.rows[o][a],l=ln(a),h=hn(o);c===","&&n.push({x:l+O(-.3,.3),z:h+O(-.3,.3),rot:O(0,Pe),s:O(.32,.4)}),c==="."&&O()<.22&&e.push({x:l+O(-.6,.6),z:h+O(-.6,.6),rot:O(0,Pe),s:O(.3,.42),color:new oe().setHSL(O(.23,.29),.6,O(.42,.5))}),c==="."&&O()<.06&&t.push({x:l+O(-.6,.6),z:h+O(-.6,.6),rot:O(0,Pe),s:O(.4,.7)}),c==="."&&O()<.05&&i.push({x:l+O(-.6,.6),z:h+O(-.6,.6),rot:O(0,Pe),s:O(.35,.5)})}let s=Wo(ut({map:vi.Grass_Common_Short.parts[0].map,roughness:.9,side:At,color:"#A8E07A"}),1.3,.06,!0);zs("Grass_Common_Short",e,()=>s),zs("Flower_3_Group",n,o=>o.matName==="Flowers"?sS():tm("#5DB043"));let r=ut({map:vi.Pebble_Round_1.parts[0].map,roughness:.9});zs("Pebble_Round_1",t,()=>r),zs("Clover_1",i,()=>tm("#5AAE42"))}function sS(){return B.shared.fl||(B.shared.fl=Wo(ut({map:vi.Flower_3_Group.parts.find(n=>n.matName==="Flowers").map,alphaTest:.4,side:At,roughness:.7}),2,.05,!0))}function tm(n){let e="leaves"+n;if(!B.shared[e]){let t=vi.Fern_1.parts[0];B.shared[e]=Wo(ut({map:t.map,color:n,alphaTest:.4,side:At,roughness:.8}),2,.05,!0)}return B.shared[e]}function rS(n,e,t){return ds(2048,256,(i,s,r)=>{Yh(n,()=>{let o=(a,c,l,h)=>{let u=O()<.45,d=[];if(u)for(let f=0;f<4;f++)d.push(["t",c-l*(.35+f*.42),l*(.75-f*.15)]);else for(let f=0;f<5;f++)d.push(["c",O(-.5,.5)*l,c-l*O(.7,1.6),l*O(.45,.7)]);i.fillStyle=h;for(let f of[-s,0,s]){let g=a+f;for(let x of d)i.beginPath(),x[0]==="t"?(i.moveTo(g-x[2],x[1]+l*.45),i.lineTo(g,x[1]-l*.5),i.lineTo(g+x[2],x[1]+l*.45)):i.arc(g+x[1],x[2],x[3],0,Pe),i.fill();i.fillRect(g-l*.08,c-l*.6,l*.16,r)}};for(let a=0;a<s;a+=O(26,48))o(a,r*.92,O(55,95),t);for(let a=0;a<s;a+=O(30,56))o(a,r,O(48,80),e);i.fillStyle=e,i.fillRect(0,r*.86,s,r)})},{repeat:!0})}function oS(){let n=Math.hypot(B.hx,B.hz);for(let[e,t,i,s,r,o]of[[n+18,15,11,"#2C4A22","#3E6230","#FFFFFF"],[n+34,22,23,"#3A4E38","#4E6448","#E8E0E0"]]){let a=rS(i,s,r);a.repeat.set(4,1);let c=new An(e,e,t,48,1,!0);c.translate(0,t/2-.5,0);let l=new de(c,new We({map:a,alphaTest:.5,side:Bt,color:o}));B.group.add(l)}}var qo={"\u0413\u0440\u0438\u0431\u044B \u043F\u0440\u043E\u0441\u044B\u043F\u0430\u044E\u0442\u0441\u044F\u2026":"Mushrooms are waking up\u2026","\u0413\u0440\u0438\u0431\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0430":"Mushroom Arena","\u0412\u044B\u0431\u0435\u0440\u0438 \u0433\u0435\u0440\u043E\u044F":"Pick a hero",\u0421\u043F\u043E\u0440\u044B:"Spore Rush","3 \u043D\u0430 3 \xB7 \u0441\u043E\u0431\u0435\u0440\u0438 10 \u0441\u043F\u043E\u0440 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438 \u0438\u0445 15 \u0441\u0435\u043A\u0443\u043D\u0434":"3 vs 3 \xB7 collect 10 spores and hold them for 15 seconds",\u0411\u043E\u0442\u044B:"Bots",\u041B\u0451\u0433\u043A\u0438\u0435:"Easy",\u041E\u0431\u044B\u0447\u043D\u044B\u0435:"Normal",\u0421\u043B\u043E\u0436\u043D\u044B\u0435:"Hard","\u0412 \u0431\u043E\u0439!":"Fight!",\u0413\u0440\u0430\u0444\u0438\u043A\u0430:"Graphics",\u0411\u044B\u0441\u0442\u0440\u0430\u044F:"Fast",\u041A\u0440\u0430\u0441\u0438\u0432\u0430\u044F:"Pretty",\u0417\u0432\u0443\u043A:"Sound",\u042D\u0444\u0444\u0435\u043A\u0442\u044B:"Effects",\u041C\u0443\u0437\u044B\u043A\u0430:"Music",\u041F\u0430\u0443\u0437\u0430:"Pause",\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C:"Resume","\u0412\u044B\u0439\u0442\u0438 \u0432 \u043C\u0435\u043D\u044E":"Quit to menu",\u0410\u0442\u0430\u043A\u0430:"Attack","\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0431\u0435\u0433, \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043A\u0430\u043C\u0435\u0440\u044B. \u041A\u043D\u043E\u043F\u043A\u0430 \u0430\u0442\u0430\u043A\u0438: \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u2014 \u0430\u0432\u0442\u043E\u043F\u0440\u0438\u0446\u0435\u043B, \u0441 \u043F\u0440\u043E\u0442\u044F\u0436\u043A\u043E\u0439 \u2014 \u0446\u0435\u043B\u0438\u0448\u044C\u0441\u044F \u0441\u0430\u043C. \u0417\u0432\u0435\u0437\u0434\u0430 \u2014 \u0441\u0443\u043F\u0435\u0440.":"Left thumb to run, right thumb to turn the camera. Attack button: a quick tap auto-aims, hold and drag to aim yourself. The star is your super.","WASD \u2014 \u0431\u0435\u0433, \u043C\u044B\u0448\u044C \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \u0438 \u043F\u0440\u0438\u0446\u0435\u043B, \u041B\u041A\u041C \u2014 \u0430\u0442\u0430\u043A\u0430, \u041F\u041A\u041C \u0438\u043B\u0438 E \u2014 \u0441\u0443\u043F\u0435\u0440, Esc \u2014 \u043F\u0430\u0443\u0437\u0430.":"WASD to run, mouse to look and aim, LMB to attack, RMB or E for the super, Esc to pause.",\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435:"Health",\u0423\u0440\u043E\u043D:"Damage",\u0414\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C:"Range",\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C:"Speed",\u043C:"m",\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438:"Settings",\u0421\u0440\u0435\u0434\u043D\u044F\u044F:"Medium",\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:"Sensitivity","\u0421\u0447\u0451\u0442\u0447\u0438\u043A FPS":"FPS counter",\u0412\u044B\u043A\u043B:"Off",\u0412\u043A\u043B:"On",\u0413\u043E\u0442\u043E\u0432\u043E:"Done","\u0418\u0433\u0440\u0430 \u0441\u0430\u043C\u0430 \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E, \u0435\u0441\u043B\u0438 \u043A\u0430\u0434\u0440\u043E\u0432 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442. \u041F\u0440\u0438 \u0441\u043C\u0435\u043D\u0435 \u0433\u0440\u0430\u0444\u0438\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044F.":"The game lowers the quality by itself when frames run short. Changing graphics reloads the page.",\u0428\u043B\u044F\u043F\u043D\u0438\u043A:"Capper",\u0411\u0430\u0431\u0430\u0445:"Kaboom",\u0416\u0430\u043B\u043A\u0430:"Stinga",\u043C\u0443\u0445\u043E\u043C\u043E\u0440:"fly agaric","\u0436\u0443\u043A-\u0431\u043E\u043C\u0431\u0430\u0440\u0434\u0438\u0440":"bombardier beetle",\u043E\u0441\u0430:"wasp",\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A:"Shotgun",\u041C\u0435\u0442\u0430\u0442\u0435\u043B\u044C:"Thrower",\u0421\u043D\u0430\u0439\u043F\u0435\u0440:"Sniper","\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A \u0431\u044C\u0451\u0442 \u0432\u0435\u0435\u0440\u043E\u043C: \u0432\u0431\u043B\u0438\u0437\u0438 \u0440\u0430\u0437\u043D\u043E\u0441\u0438\u0442 \u043B\u044E\u0431\u043E\u0433\u043E.":"A spore shotgun that fires in a fan: up close it flattens anyone.","\u041A\u0438\u0434\u0430\u0435\u0442 \u0431\u043E\u043C\u0431\u044B \u043D\u0430\u0432\u0435\u0441\u043E\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B. \u0412\u0437\u0440\u044B\u0432 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0433\u043E\u0440\u044F\u0449\u0443\u044E \u043B\u0443\u0436\u0443.":"Lobs bombs over walls. Each blast leaves a burning puddle.","\u0414\u0430\u043B\u044C\u043D\u043E\u0431\u043E\u0439\u043D\u043E\u0435 \u0436\u0430\u043B\u043E: \u0447\u0435\u043C \u0434\u0430\u043B\u044C\u0448\u0435 \u0446\u0435\u043B\u044C, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u043D\u0435\u0435.":"A long-range stinger: the further the target, the harder it hits.","\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0432\u0435\u0435\u0440":"Spore Fan","\u0413\u0440\u0438\u0431\u043D\u043E\u0439 \u0437\u0430\u043B\u043F":"Mushroom Volley","\u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0437\u0430\u043B\u043F \u043E\u0442\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u0432\u0440\u0430\u0433\u043E\u0432":"a wide volley that knocks enemies back","\u0416\u0443\u0447\u0438\u043D\u0430\u044F \u0431\u043E\u043C\u0431\u0430":"Beetle Bomb","\u041A\u043E\u0432\u0440\u043E\u0432\u0430\u044F \u0431\u043E\u043C\u0431\u0451\u0436\u043A\u0430":"Carpet Bombing","\u043F\u044F\u0442\u044C \u0431\u043E\u043C\u0431 \u043B\u043E\u0436\u0430\u0442\u0441\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u043E\u0439":"five bombs land in a line",\u0416\u0430\u043B\u043E:"Stinger","\u041F\u0440\u043E\u043D\u0437\u0430\u044E\u0449\u0438\u0439 \u043B\u0443\u0447":"Piercing Beam","\u043B\u0443\u0447 \u043F\u0440\u043E\u0448\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0435\u043D\u044B \u0438 \u0432\u0441\u0435\u0445 \u043D\u0430 \u043F\u0443\u0442\u0438":"a beam that goes through walls and everyone in its way","\u0441\u043F\u043E\u0440 \u0432\u0435\u0435\u0440\u043E\u043C":"spores in a fan","\u0431\u043E\u043C\u0431\u0430 \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B, \u0433\u043E\u0440\u044F\u0449\u0430\u044F \u043B\u0443\u0436\u0430":"a bomb over walls, a burning puddle","\u0434\u0430\u043B\u044C\u043D\u0438\u0439 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u0443\u0440\u043E\u043D \u0440\u0430\u0441\u0442\u0451\u0442 \u0441 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C":"a long shot, damage grows with distance",\u0421\u0443\u043F\u0435\u0440:"Super","\u041F\u041A\u041C \xB7 E":"RMB \xB7 E","\u0412\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437":"Respawn in","\u0429\u0451\u043B\u043A\u043D\u0438 \u043F\u043E \u043F\u043E\u043B\u044E, \u0447\u0442\u043E\u0431\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043C\u044B\u0448\u044C\u044E":"Click the field to aim with the mouse","\u0421\u043E\u0431\u0435\u0440\u0438 10 \u0441\u043F\u043E\u0440 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438 \u0438\u0445 15 \u0441\u0435\u043A\u0443\u043D\u0434":"Collect 10 spores and hold them for 15 seconds",\u0422\u044B:"You","\u0421\u0440\u0435\u0437\u0430\u043B!":"Knocked out!","\u0422\u0435\u0431\u044F \u0441\u0440\u0435\u0437\u0430\u043B\u0438":"You got knocked out","\u0421\u043F\u043E\u0440\u044B \u0443 \u043D\u0430\u0441!":"We have the spores!","\u0414\u0435\u0440\u0436\u0438\u0442\u0435\u0441\u044C 15 \u0441\u0435\u043A\u0443\u043D\u0434":"Hold on for 15 seconds","\u0412\u0440\u0430\u0433 \u043D\u0430\u0431\u0440\u0430\u043B \u0441\u043F\u043E\u0440\u044B!":"The enemy has the spores!","\u041E\u0442\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0445!":"Take them back!","\u041E\u0442\u0441\u0447\u0451\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D":"Countdown reset","\u0414\u0435\u0440\u0436\u0438\u043C \u0441\u043F\u043E\u0440\u044B!":"Hold the spores!","\u0412\u0440\u0430\u0433 \u0443\u043D\u043E\u0441\u0438\u0442 \u0441\u043F\u043E\u0440\u044B!":"The enemy is running off with the spores!","\u041F\u043E\u0431\u0435\u0434\u0430!":"Victory!",\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435:"Defeat",\u041D\u0438\u0447\u044C\u044F:"Draw","\u0415\u0449\u0451 \u0431\u043E\u0439":"Play again","\u0412 \u043C\u0435\u043D\u044E":"Menu","\u0422\u0432\u043E\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0430 \u0441\u043F\u043E\u0440\u044B.":"Your team held the spores.","\u0412\u0440\u0430\u0433\u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0438 \u0441\u043F\u043E\u0440\u044B.":"The enemies held the spores.","\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E: ":"Time is up: ","\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431":"Last Shroom","\u043A\u0430\u0436\u0434\u044B\u0439 \u0441\u0430\u043C \u0437\u0430 \u0441\u0435\u0431\u044F \xB7 10 \u0431\u043E\u0439\u0446\u043E\u0432 \u0432 \u043B\u0430\u0431\u0438\u0440\u0438\u043D\u0442\u0435, \u0442\u0443\u043C\u0430\u043D \u0441\u0436\u0438\u043C\u0430\u0435\u0442\u0441\u044F":"every fighter for themselves \xB7 10 fighters in a maze, the fog closes in","\u041E\u0441\u0442\u0430\u043D\u044C\u0441\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C! \u041B\u043E\u043C\u0430\u0439 \u044F\u0449\u0438\u043A\u0438 \u2014 \u0432 \u043D\u0438\u0445 \u0441\u0438\u043B\u0430":"Be the last one standing! Break crates to power up",\u0422\u0443\u043C\u0430\u043D:"Fog","\u0422\u0443\u043C\u0430\u043D \u0438\u0434\u0451\u0442":"Fog moving",\u0424\u0438\u043D\u0430\u043B:"Final","\u0422\u0443\u043C\u0430\u043D \u0441\u0433\u0443\u0449\u0430\u0435\u0442\u0441\u044F!":"The fog is closing in!","\u0414\u0435\u0440\u0436\u0438\u0441\u044C \u0431\u043B\u0438\u0436\u0435 \u043A \u0446\u0435\u043D\u0442\u0440\u0443":"Stay close to the middle","\u0422\u044B \u2014 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431!":"You are the last shroom standing!","\u0422\u0435\u0431\u044F \u0441\u0440\u0435\u0437\u0430\u043B: ":"Knocked out by ","\u0422\u0435\u0431\u044F \u043D\u0430\u043A\u0440\u044B\u043B \u044F\u0434\u043E\u0432\u0438\u0442\u044B\u0439 \u0442\u0443\u043C\u0430\u043D.":"The poison fog got you.","\u041B\u0435\u0441\u043D\u043E\u0439 \u043B\u0430\u0431\u0438\u0440\u0438\u043D\u0442":"Forest Maze",\u0413\u0440\u0443\u0437\u0434\u044C:"Milkcap",\u041E\u043F\u0451\u043D\u043E\u043A:"Honeycap",\u0421\u043C\u043E\u0440\u0447\u043E\u043A:"Morel",\u0420\u044B\u0436\u0438\u043A:"Saffron",\u041C\u0430\u0441\u043B\u0451\u043D\u043E\u043A:"Butterball",\u0412\u043E\u043B\u043D\u0443\u0448\u043A\u0430:"Woolly",\u0421\u0442\u0440\u043E\u0447\u043E\u043A:"Brainy",\u0411\u0435\u043B\u044F\u043D\u043A\u0430:"Whitey",\u0415\u0436\u043E\u0432\u0438\u043A:"Hedgehog",\u0414\u0443\u0431\u043E\u0432\u0438\u043A:"Oakcap",\u0412\u0435\u0448\u0435\u043D\u043A\u0430:"Oyster",\u041A\u043E\u0440\u043E\u0435\u0434:"Bark Beetle",\u0428\u0435\u0440\u0448\u0435\u043D\u044C:"Hornet",\u0416\u0443\u0436\u0435\u043B\u0438\u0446\u0430:"Ground Beetle",\u0429\u0435\u043B\u043A\u0443\u043D:"Clicker",\u0421\u0432\u0435\u0442\u043B\u044F\u0447\u043E\u043A:"Firefly",\u041C\u0435\u0434\u0432\u0435\u0434\u043A\u0430:"Mole Cricket",\u0414\u043E\u043B\u0433\u043E\u043D\u043E\u0441\u0438\u043A:"Weevil"};var aS=["ru","be","kk","uk","uz","ky","tg","hy","az"],kn={lang:"ru",set:!1},Nc=n=>aS.includes(String(n||"").slice(0,2).toLowerCase())?"ru":"en";kn.lang=(()=>{try{let n=new URLSearchParams(location.search).get("lang");if(n)return Nc(n)}catch{}return Nc(navigator.language||"ru")})();var Nu=/[А-Яа-яЁё]/,Uu=null;function Ct(n){if(kn.lang!=="en"||!n||!Nu.test(n))return n;if(qo[n]!==void 0)return qo[n];if(!Uu){let e=Object.keys(qo).sort((t,i)=>i.length-t.length).map(t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));Uu=new RegExp("(?<![\u0410-\u042F\u0430-\u044F\u0401\u0451])(?:"+e.join("|")+")(?![\u0410-\u042F\u0430-\u044F\u0401\u0451])","g")}return n.replace(Uu,e=>qo[e])}function Uc(n){if(n.nodeType===3){let e=n.nodeValue;if(Nu.test(e)){let t=Ct(e);t!==e&&(n.nodeValue=t)}return}if(n.nodeType===1){for(let e of["title","placeholder","aria-label"]){let t=n.getAttribute(e);t&&Nu.test(t)&&n.setAttribute(e,Ct(t))}for(let e=n.firstChild;e;e=e.nextSibling)Uc(e)}}var Br=null;function Oc(n){if(n&&(kn.lang=n),kn.set=!0,document.documentElement.lang=kn.lang,kn.lang!=="en"){Br&&(Br.disconnect(),Br=null);return}document.title=Ct(document.title),Uc(document.body),Br||(Br=new MutationObserver(e=>{for(let t of e)if(t.type==="characterData")Uc(t.target);else for(let i of t.addedNodes)Uc(i)}),Br.observe(document.body,{subtree:!0,childList:!0,characterData:!0}))}var b={state:"load",time:0,fighters:[],me:null,shots:[],lobs:[],beams:[],puddles:[],pickups:[],match:null,shake:0,paused:!1,hooks:{}};function Pt(n,...e){let t=b.hooks[n];if(t)for(let i of t)i(...e)}function $t(n,e){(b.hooks[n]||(b.hooks[n]=[])).push(e)}var hm={sph:new Yt(1,14,10),sphLo:new Yt(1,7,5),cyl:new An(1,1,1,10),box:new xi(1,1,1),cone:new rc(1,1,10),dome:new Yt(1,18,7,0,Math.PI*2,0,Math.PI/2),torus:new wr(1,.22,6,16),disc:new Tn(1,16)};hm.disc.rotateX(-Math.PI/2);var cS=new C(0,1,0),Ou=new C,zu=new Ie,Bu=new cn,lm=new ns,zc=class{constructor(){this.bones={},this.list=[],this.parts=[],this.root=new zt}bone(e,t,i=0,s=0,r=0){let o=new Fs;return o.name=e,o.position.set(i,s,r),(t?this.bones[t]:this.root).add(o),this.bones[e]=o,this.list.push(o),o}add(e,t,i,s={}){return this.parts.push({bone:e,geo:t,color:new oe(i),glow:s.glow||0,shade:s.shade??1}),t}prim(e,t,i,s,r,o,a){let c=(typeof t=="string"?hm[t]:t).clone();lm.set(o?o[0]:0,o?o[1]:0,o?o[2]:0,o&&o[3]||"XYZ");let l=Array.isArray(r)?r:[r,r,r];return c.applyMatrix4(zu.compose(Ou.set(s[0],s[1],s[2]),Bu.setFromEuler(lm),new C(l[0],l[1],l[2]))),this.add(e,c,i,a)}sph(e,t,i,s,r,o){return this.prim(e,"sph",t,i,s,r,o)}limb(e,t,i,s,r,o){let a=Math.hypot(s[0]-i[0],s[1]-i[1],s[2]-i[2]),c=new Er(r,Math.max(.001,a),3,8);return Bu.setFromUnitVectors(cS,Ou.set(s[0]-i[0],s[1]-i[1],s[2]-i[2]).normalize()),c.applyMatrix4(zu.compose(Ou.set((i[0]+s[0])/2,(i[1]+s[1])/2,(i[2]+s[2])/2),Bu,new C(1,1,1))),this.add(e,c,t,o)}lathe(e,t,i,s=[0,0,0],r=1,o=16,a){let c=new Us(i.map(l=>new ne(l[0],l[1])),o);return c.scale(r,r,r),c.translate(s[0],s[1],s[2]),this.add(e,c,t,a)}tube(e,t,i,s,r){let o=new lc(new Co(i.map(a=>new C(a[0],a[1],a[2]))),10,s,5);return this.add(e,o,t,r)}eyes(e,t,i,s,r,o={}){for(let a of[-1,1])this.sph(e,"#FFFFFF",[a*s,t,i],[r,r*1.18,r*.62],null,{shade:1.15}),this.prim(e,"sphLo",o.pupil||"#17131A",[a*s+a*(o.look||0),t-r*.06,i+r*.42],[r*.6,r*.72,r*.34]),this.prim(e,"sphLo","#FFFFFF",[a*s+r*.18,t+r*.28,i+r*.66],r*.17,null,{glow:.6}),o.brow!==void 0&&this.prim(e,"box",o.browColor||"#2A1A12",[a*s,t+r*1.32,i+r*.42],[r*1.7,r*.34,r*.4],[0,0,a*o.brow])}build(e){this.root.updateMatrixWorld(!0);let t=new Ie().copy(this.root.matrixWorld).invert(),i=[];for(let a of this.parts){let c=this.list.indexOf(a.bone),l=a.geo;for(let p of Object.keys(l.attributes))["position","normal","uv"].includes(p)||l.deleteAttribute(p);l.attributes.uv||l.setAttribute("uv",new lt(new Float32Array(l.attributes.position.count*2),2)),l.applyMatrix4(zu.multiplyMatrices(t,a.bone.matrixWorld));let h=l.attributes.position.count,u=new Float32Array(h*3),d=new Float32Array(h),f=new Uint16Array(h*4),g=new Float32Array(h*4),x=a.color.clone().multiplyScalar(a.shade);for(let p=0;p<h;p++)u[p*3]=x.r,u[p*3+1]=x.g,u[p*3+2]=x.b,d[p]=a.glow,f[p*4]=c,g[p*4]=1;l.setAttribute("color",new lt(u,3)),l.setAttribute("aGlow",new lt(d,1)),l.setAttribute("skinIndex",new _r(f,4)),l.setAttribute("skinWeight",new lt(g,4)),i.push(l)}let s=Oo(i);i.forEach(a=>a.dispose()),s.computeBoundingSphere();let r=new br(this.list),o=new Di(s,e);return this.root.add(o),o.bind(r),o.castShadow=!0,o.frustumCulled=!1,{mesh:o,geo:s,skel:r}}};function um(){let n=ut({vertexColors:!0,roughness:.5,metalness:0});return n.userData.u={uFlash:{value:0},uRim:{value:new oe("#FFF6DA")},uTint:{value:new oe(0,0,0)}},n.onBeforeCompile=e=>{Object.assign(e.uniforms,n.userData.u),e.vertexShader=`attribute float aGlow;
varying float vGlow;
`+e.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
 vGlow = aGlow;`),e.fragmentShader=`uniform float uFlash; uniform vec3 uRim; uniform vec3 uTint; varying float vGlow;
`+e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      float rim = pow(1.0 - clamp(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 2.6);
      totalEmissiveRadiance += uRim * rim * 0.35 * diffuseColor.rgb + diffuseColor.rgb * vGlow * 1.6 + vec3(uFlash) + uTint;`)},n.customProgramCacheKey=()=>"hero",n}function dm(n=.022){let e=new We({color:"#13200F",side:Bt});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <skinning_vertex>",`#include <skinning_vertex>
 transformed += normalize(objectNormal) * ${n.toFixed(4)};`)},e.customProgramCacheKey=()=>"outline"+n,e}function fm(n){let e=new We({color:n,depthWrite:!1,depthFunc:Ih,fog:!1,blending:Lh,blendSrc:go,blendDst:xo,opacity:.62});return e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <opaque_fragment>","gl_FragColor = vec4(outgoingLight, opacity);")},e.customProgramCacheKey=()=>"sil",e}var li={shroom:{name:"\u0428\u043B\u044F\u043F\u043D\u0438\u043A",species:"\u043C\u0443\u0445\u043E\u043C\u043E\u0440",role:"\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A",color:"#E23A2E",hp:3900,speed:5,rad:.42,height:1.35,desc:"\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A \u0431\u044C\u0451\u0442 \u0432\u0435\u0435\u0440\u043E\u043C: \u0432\u0431\u043B\u0438\u0437\u0438 \u0440\u0430\u0437\u043D\u043E\u0441\u0438\u0442 \u043B\u044E\u0431\u043E\u0433\u043E.",attack:{kind:"fan",name:"\u0421\u043F\u043E\u0440\u043E\u0432\u044B\u0439 \u0432\u0435\u0435\u0440",count:5,spread:.5,range:7.2,speed:24,dmg:310,reload:1.5,cd:.42,size:.2,color:"#FF6B4A"},super:{kind:"fan",name:"\u0413\u0440\u0438\u0431\u043D\u043E\u0439 \u0437\u0430\u043B\u043F",desc:"\u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0437\u0430\u043B\u043F \u043E\u0442\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u0432\u0440\u0430\u0433\u043E\u0432",count:11,spread:.85,range:8.6,speed:27,dmg:330,knock:3.4,size:.28,color:"#FFD24A",charge:4600}},beetle:{name:"\u0411\u0430\u0431\u0430\u0445",species:"\u0436\u0443\u043A-\u0431\u043E\u043C\u0431\u0430\u0440\u0434\u0438\u0440",role:"\u041C\u0435\u0442\u0430\u0442\u0435\u043B\u044C",color:"#3B57D6",hp:3e3,speed:4.7,rad:.44,height:1.25,desc:"\u041A\u0438\u0434\u0430\u0435\u0442 \u0431\u043E\u043C\u0431\u044B \u043D\u0430\u0432\u0435\u0441\u043E\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B. \u0412\u0437\u0440\u044B\u0432 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0433\u043E\u0440\u044F\u0449\u0443\u044E \u043B\u0443\u0436\u0443.",attack:{kind:"lob",name:"\u0416\u0443\u0447\u0438\u043D\u0430\u044F \u0431\u043E\u043C\u0431\u0430",range:10,flight:.78,radius:1.7,dmg:820,reload:1.9,cd:.5,puddle:{r:1.35,dps:320,t:1.8},color:"#FF9A2E"},super:{kind:"barrage",name:"\u041A\u043E\u0432\u0440\u043E\u0432\u0430\u044F \u0431\u043E\u043C\u0431\u0451\u0436\u043A\u0430",desc:"\u043F\u044F\u0442\u044C \u0431\u043E\u043C\u0431 \u043B\u043E\u0436\u0430\u0442\u0441\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u043E\u0439",count:5,range:12,flight:.95,radius:1.9,dmg:1050,knock:2.2,step:1.9,color:"#FF5A2E",charge:3900}},wasp:{name:"\u0416\u0430\u043B\u043A\u0430",species:"\u043E\u0441\u0430",role:"\u0421\u043D\u0430\u0439\u043F\u0435\u0440",color:"#F5C21B",hp:2500,speed:5.2,rad:.4,height:1.45,hover:.22,desc:"\u0414\u0430\u043B\u044C\u043D\u043E\u0431\u043E\u0439\u043D\u043E\u0435 \u0436\u0430\u043B\u043E: \u0447\u0435\u043C \u0434\u0430\u043B\u044C\u0448\u0435 \u0446\u0435\u043B\u044C, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u043D\u0435\u0435.",attack:{kind:"needle",name:"\u0416\u0430\u043B\u043E",range:15,speed:40,dmg:900,dmgFar:1650,reload:1.9,cd:.5,size:.16,color:"#FFB21E"},super:{kind:"beam",name:"\u041F\u0440\u043E\u043D\u0437\u0430\u044E\u0449\u0438\u0439 \u043B\u0443\u0447",desc:"\u043B\u0443\u0447 \u043F\u0440\u043E\u0448\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0435\u043D\u044B \u0438 \u0432\u0441\u0435\u0445 \u043D\u0430 \u043F\u0443\u0442\u0438",range:21,width:.75,dmg:2100,windup:.38,color:"#FFE15A",charge:3600}}},Hi=Object.keys(li),Jn=3,Yo="#FFF0D9";function pm(n){let e=new zc,t=e.bones,i={};if(n==="shroom"){e.bone("hips",null,0,.42,0),e.bone("body","hips"),e.bone("head","body",0,.68,0),e.bone("eyes","body",0,.36,.27),e.bone("armL","body",.3,.36,.04),e.bone("armR","body",-.3,.36,.04),e.bone("gun","armR",.04,-.14,.24),e.bone("footL",null,.16,0,0),e.bone("footR",null,-.16,0,0),e.lathe(t.body,Yo,[[0,-.36],[.24,-.35],[.31,-.18],[.33,.1],[.31,.4],[.27,.66],[0,.72]]),e.eyes(t.eyes,0,0,.115,.085,{brow:.32}),e.sph(t.body,"#5A2A22",[0,.2,.295],[.06,.035,.03]);for(let r of[-1,1])e.sph(t.body,"#FF9C9C",[r*.19,.25,.25],[.05,.03,.02]);e.prim(t.body,"torus","#F3DFC0",[0,.58,0],[.3,.3,.42],[Math.PI/2,0,0]),e.prim(t.body,"torus","#3FA34D",[0,-.02,0],[.33,.33,.4],[Math.PI/2,0,0]),e.prim(t.body,"box","#2E7A38",[0,-.02,.33],[.12,.1,.04]),e.prim(t.head,"dome","#E0332A",[0,-.05,0],[.66,.46,.66]),e.prim(t.head,"disc","#F6E2C2",[0,-.05,0],[.65,1,.65],[Math.PI,0,0]),e.prim(t.head,"torus","#E9CFA6",[0,-.07,0],[.5,.5,.25],[Math.PI/2,0,0]);let s=[[0,.95],[.9,.55],[2,.6],[3.1,.55],[4.2,.6],[5.3,.55],[.5,.25],[2.6,.25],[4.6,.28],[1.6,.25]];for(let[r,o]of s){let a=Math.cos(r)*Math.cos(o)*.66,c=Math.sin(o)*.46,l=Math.sin(r)*Math.cos(o)*.66,h=new C(a/.44,c/.21,l/.44).normalize(),u=.1+(o>.9?.05:.02),d=new cn().setFromUnitVectors(new C(0,1,0),h),f=new ns().setFromQuaternion(d);e.sph(t.head,"#FFF8EC",[a,c-.05,l],[u,u*.3,u],[f.x,f.y,f.z])}e.limb(t.armR,Yo,[0,0,0],[.02,-.12,.2],.065),e.sph(t.armR,Yo,[.03,-.14,.24],.085),e.limb(t.armL,Yo,[0,0,0],[-.12,-.1,.26],.065),e.sph(t.armL,Yo,[-.15,-.11,.33],.085),e.prim(t.gun,"box","#8A5A32",[0,0,-.08],[.1,.13,.26]),e.prim(t.gun,"cyl","#5E8F3A",[0,.03,.2],[.07,.36,.07],[Math.PI/2,0,0]),e.prim(t.gun,"cone","#C9A24A",[0,.03,.44],[.15,.2,.15],[-Math.PI/2,0,0]),e.prim(t.gun,"torus","#E7C35C",[0,.03,.54],[.14,.14,.14]),e.sph(t.gun,"#9BFF6A",[0,.13,.08],[.07,.07,.1],null,{glow:.7}),i.muzzle=[0,.03,.56];for(let r of["L","R"])e.sph(t["foot"+r],"#7A4A2A",[0,.07,.03],[.11,.08,.15])}else if(n==="beetle"){e.bone("hips",null,0,.4,0),e.bone("body","hips"),e.bone("elyL","body",.04,.3,.1),e.bone("elyR","body",-.04,.3,.1),e.bone("head","body",0,.12,.36),e.bone("antL","head",.08,.17,.08),e.bone("antR","head",-.08,.17,.08),e.bone("eyes","head",0,.05,.15),e.bone("armL","body",.38,.06,.16),e.bone("armR","body",-.38,.06,.16),e.bone("gun","armR",-.02,-.06,.2),e.bone("footL",null,.18,0,0),e.bone("footR",null,-.18,0,0),e.sph(t.body,"#C98A3A",[0,-.05,.02],[.4,.36,.42]);for(let s=0;s<4;s++)e.prim(t.body,"torus","#A86C2C",[0,-.18+s*.07,.06],[.33-Math.abs(s-1.5)*.03,.33-Math.abs(s-1.5)*.03,.2],[Math.PI/2,0,0]);for(let[s,r]of[[1,"elyL"],[-1,"elyR"]]){let o=new Yt(1,16,12,s>0?-Math.PI/2:Math.PI/2,Math.PI,0,Math.PI*.62);o.scale(.45,.46,.5),o.translate(-s*.04,-.2,-.12),e.add(t[r],o,"#2E45B8"),e.prim(t[r],"sph","#7FA0FF",[s*.17,.12,-.08],[.09,.05,.16],[.3,0,s*.4],{glow:.25}),e.prim(t[r],"sph","#22348A",[s*.22,-.02,-.3],[.06,.06,.06])}for(let s=0;s<3;s++)e.sph(t.body,"#2A2A30",[.36-s*.03,-.12,-.12+s*.13],.08),e.prim(t.body,"cyl","#C9A24A",[.37-s*.03,-.04,-.12+s*.13],[.02,.05,.02]);for(let s of[-1,1])for(let r=0;r<2;r++)e.limb(t.body,"#1F1A24",[s*.3,-.1,.12-r*.24],[s*.46,-.32,.16-r*.3],.03);e.sph(t.head,"#1F2340",[0,0,0],[.24,.22,.22]),e.eyes(t.eyes,0,0,.1,.085,{brow:-.25,browColor:"#0E0F1E"});for(let s of[-1,1])e.prim(t.head,"cone","#C98A3A",[s*.08,-.11,.2],[.035,.12,.035],[1.9,0,s*-.5]);for(let[s,r]of[[1,"antL"],[-1,"antR"]])e.tube(t[r],"#1F2340",[[0,0,0],[s*.06,.12,.04],[s*.15,.2,.02],[s*.22,.22,-.04]],.018),e.sph(t[r],"#FF8A3A",[s*.22,.22,-.04],.04,null,{glow:.4});e.limb(t.armR,"#1F1A24",[0,0,0],[-.02,-.06,.18],.05),e.sph(t.armR,"#C98A3A",[-.02,-.07,.2],.07),e.limb(t.armL,"#1F1A24",[0,0,0],[.04,-.08,.18],.05),e.sph(t.armL,"#C98A3A",[.04,-.09,.2],.07),e.sph(t.gun,"#25252C",[0,.06,.08],.15),e.sph(t.gun,"#4A4A58",[.05,.12,.13],.04,null,{glow:.3}),e.prim(t.gun,"cyl","#C9A24A",[0,.22,.08],[.025,.08,.025]),e.sph(t.gun,"#FFD04A",[0,.27,.08],.035,null,{glow:2.5}),i.muzzle=[0,.06,.1];for(let s of["L","R"])e.sph(t["foot"+s],"#C98A3A",[0,.06,.04],[.11,.07,.15])}else if(n==="wasp"){let s=li.wasp.hover;e.bone("hips",null,0,.62+s,0),e.bone("body","hips"),e.bone("abd","body",0,-.04,-.2),e.bone("head","body",0,.3,.06),e.bone("antL","head",.07,.17,.08),e.bone("antR","head",-.07,.17,.08),e.bone("wingL","body",.1,.17,-.08),e.bone("wingR","body",-.1,.17,-.08),e.bone("armL","body",.2,.06,.1),e.bone("armR","body",-.2,.06,.1),e.bone("gun","armR",.06,-.1,.12),e.bone("footL","hips",.1,-.26,.02),e.bone("footR","hips",-.1,-.26,.02),e.sph(t.body,"#2E2620",[0,.04,0],[.24,.27,.25]),e.prim(t.body,"torus","#F5C21B",[0,.22,.02],[.17,.17,.3],[Math.PI/2,0,0]);let r=[[0,.17],[.12,.23],[.25,.25],[.38,.23],[.5,.18],[.6,.11]];for(let o=0;o<r.length;o++){let[a,c]=r[o];e.prim(t.abd,"sph",o%2?"#26201A":"#F5C21B",[0,-.06-a*.25,-a],[c,c,.09])}e.prim(t.abd,"cone","#26201A",[0,-.22,-.72],[.04,.16,.04],[-1.9,0,0]),e.sph(t.head,"#F5C21B",[0,0,0],[.22,.21,.2]);for(let o of[-1,1])e.sph(t.head,"#1B1A2A",[o*.13,.03,.1],[.1,.14,.09],[0,o*.3,0]),e.prim(t.head,"sphLo","#FFFFFF",[o*.11,.09,.18],.025,null,{glow:.8}),e.prim(t.head,"sphLo","#8FA8FF",[o*.16,-.02,.17],.018,null,{glow:.5});e.prim(t.head,"torus","#5A2A1A",[0,-.09,.17],[.05,.05,.05],[0,0,Math.PI]);for(let[o,a]of[[1,"antL"],[-1,"antR"]])e.tube(t[a],"#26201A",[[0,0,0],[o*.03,.14,.06],[o*.1,.24,.1],[o*.18,.27,.16]],.015),e.sph(t[a],"#26201A",[o*.18,.27,.16],.03);e.limb(t.armR,"#26201A",[0,0,0],[.04,-.08,.1],.035),e.sph(t.armR,"#F5C21B",[.05,-.1,.12],.05),e.limb(t.armL,"#26201A",[0,0,0],[-.1,-.08,.26],.035),e.sph(t.armL,"#F5C21B",[-.11,-.09,.3],.05),e.prim(t.gun,"box","#6B4A2E",[0,-.01,-.1],[.07,.1,.3]),e.prim(t.gun,"cyl","#3A3A44",[0,.02,.32],[.035,.66,.035],[Math.PI/2,0,0]),e.prim(t.gun,"cone","#E8C84A",[0,.02,.72],[.04,.16,.04],[Math.PI/2,0,0]),e.prim(t.gun,"cyl","#26201A",[0,.1,.12],[.04,.26,.04],[Math.PI/2,0,0]),e.sph(t.gun,"#FFB21E",[0,.1,.26],[.04,.04,.02],null,{glow:2}),i.muzzle=[0,.02,.82];for(let o of["L","R"])e.limb(t["foot"+o],"#26201A",[0,.1,0],[0,-.05,.03],.03),e.sph(t["foot"+o],"#26201A",[0,-.07,.05],[.05,.035,.07])}return{rig:e,parts:i}}function mm(n){let e=ut({color:"#E6F6FF",transparent:!0,opacity:.5,side:At,roughness:.1,depthWrite:!1,emissive:"#9FD8FF",emissiveIntensity:.15}),t=new en(.62,.24);t.translate(.31,0,0),t.rotateX(-Math.PI/2);let i=[];for(let[s,r]of[[1,"wingL"],[-1,"wingR"]])for(let o=0;o<2;o++){let a=new de(t,e);a.scale.set(s*(1-o*.25),1,1-o*.15),a.position.z=-o*.08,a.rotation.y=s*(.35+o*.4),n.bones[r].add(a),i.push(a)}return i}var Bc={shroom:'<svg viewBox="0 0 72 72" aria-hidden="true"><rect x="22" y="34" width="28" height="30" rx="12" fill="#FFF0D9"/><circle cx="30" cy="45" r="3.4" fill="#17131A"/><circle cx="42" cy="45" r="3.4" fill="#17131A"/><path d="M25 39l8 3M47 39l-8 3" stroke="#2A1A12" stroke-width="3" stroke-linecap="round"/><path d="M4 36Q36-8 68 36Z" fill="#E0332A"/><circle cx="20" cy="24" r="4.5" fill="#FFF8EC"/><circle cx="36" cy="13" r="4" fill="#FFF8EC"/><circle cx="53" cy="25" r="4.5" fill="#FFF8EC"/><rect x="22" y="55" width="28" height="5" rx="2" fill="#3FA34D"/></svg>',beetle:'<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="36" cy="44" rx="25" ry="22" fill="#2E45B8"/><path d="M36 22V66" stroke="#1B2A78" stroke-width="3"/><ellipse cx="25" cy="38" rx="5" ry="8" fill="#7FA0FF" opacity=".7"/><circle cx="36" cy="24" r="13" fill="#1F2340"/><circle cx="30" cy="22" r="5" fill="#fff"/><circle cx="42" cy="22" r="5" fill="#fff"/><circle cx="31" cy="23" r="2.6" fill="#17131A"/><circle cx="41" cy="23" r="2.6" fill="#17131A"/><path d="M30 12Q24 2 16 4M42 12Q48 2 56 4" stroke="#1F2340" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="16" cy="4" r="3" fill="#FF8A3A"/><circle cx="56" cy="4" r="3" fill="#FF8A3A"/><circle cx="60" cy="56" r="8" fill="#25252C"/><circle cx="62" cy="46" r="2.5" fill="#FFD04A"/></svg>',wasp:'<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="17" cy="30" rx="15" ry="7" fill="#DDF2FF" opacity=".8" transform="rotate(-25 17 30)"/><ellipse cx="55" cy="30" rx="15" ry="7" fill="#DDF2FF" opacity=".8" transform="rotate(25 55 30)"/><ellipse cx="36" cy="55" rx="12" ry="14" fill="#F5C21B"/><path d="M25 52H47M26 60H46" stroke="#26201A" stroke-width="4.5"/><circle cx="36" cy="30" r="14" fill="#F5C21B"/><ellipse cx="29" cy="30" rx="5.5" ry="7.5" fill="#1B1A2A"/><ellipse cx="43" cy="30" rx="5.5" ry="7.5" fill="#1B1A2A"/><circle cx="28" cy="27" r="1.8" fill="#fff"/><circle cx="42" cy="27" r="1.8" fill="#fff"/><path d="M32 39Q36 42 40 39" stroke="#5A2A1A" stroke-width="2" fill="none"/><path d="M31 17Q27 7 22 6M41 17Q45 7 50 6" stroke="#26201A" stroke-width="2.5" fill="none"/></svg>'};var lS={me:"#FFD23F",ally:"#4FC3FF",foe:"#FF4D4D"},hS=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.strokeStyle="#fff",e.lineWidth=9,e.beginPath(),e.arc(64,64,52,0,Pe),e.stroke(),e.globalAlpha=.25,e.fillStyle="#fff",e.beginPath(),e.arc(64,64,50,0,Pe),e.fill();let t=new qn(n);return t.colorSpace=ct,t})(),ku=new en(1.25,1.25);ku.rotateX(-Math.PI/2);var uS=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,31);return t.addColorStop(0,"rgba(0,0,0,.5)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new qn(n)})(),dS=new We({map:uS,transparent:!0,depthWrite:!1});function $o(n){let{rig:e,parts:t}=pm(n),i=um(),{mesh:s,geo:r,skel:o}=e.build(i);s.renderOrder=2;let a=new Di(r,dm());a.bind(o,s.bindMatrix),a.frustumCulled=!1,a.renderOrder=2,e.root.add(a),a.visible=!Et;let c=fm("#FFFFFF"),l=new Di(r,c);l.bind(o,s.bindMatrix),l.frustumCulled=!1,l.renderOrder=1,e.root.add(l);let h=new de(ku,new We({map:hS,transparent:!0,depthWrite:!1,color:"#fff",opacity:.9}));h.position.y=.03,h.renderOrder=1,e.root.add(h);let u=null;u=new de(ku,dS),u.position.y=.025,u.scale.setScalar(.85),u.renderOrder=1,e.root.add(u);let d=e.bones;for(let p of e.list)p.userData.rest=p.position.clone(),p.userData.rot=p.rotation.clone();let f=new gt;f.position.fromArray(t.muzzle),d.gun.add(f);let g=n==="wasp"?mm(e):null;return{id:n,H:li[n],root:e.root,B:d,mesh:s,ol:a,sil:l,silMat:c,mat:i,ring:h,blob:u,muzzle:f,wings:g,yaw:0,ph:0,lastStep:0,sp:{twist:pn(),leanX:pn(),leanZ:pn(),headX:pn(),headZ:pn(),squash:pn(),kick:pn(),bodyX:pn(),armR:pn(),armL:pn(),ant:pn(),ely:pn(),pop:pn(1),lift:pn(),gunS:pn(1)},prevVX:0,prevVZ:0}}function kc(n,e){let t=new oe(lS[e]);n.ring.material.color.copy(t),n.silMat.color.copy(e==="foe"?new oe("#FF3B3B"):e==="me"?new oe("#FFE58A"):new oe("#7FD8FF"))}var Zo=n=>n.userData.rest;function Hc(n,e,t,i){let s=n.B,r=n.sp,o=n.H,a=n.root;if(!e.alive){let z=e.deadT,L=tt(z/.75,0,1);a.position.set(e.x,Math.max(0,Math.sin(Math.min(z/.5,1)*Math.PI)*.7),e.z),a.rotation.set(-L*1.4,n.yaw+z*4,0,"YXZ");let U=z<.55?1+Math.sin(z*18)*.06:Math.max(0,1-(z-.55)/.2);a.scale.setScalar(U),n.ring.visible=!1,n.blob&&(n.blob.visible=!1),a.visible=U>.01,n.mat.userData.u.uFlash.value=z<.1?.8:0;return}a.rotation.x=0,a.rotation.z=0,n.ring.visible=!0,n.blob&&(n.blob.visible=!le.shadows);let c=Math.hypot(e.vx,e.vz),l=c>.4,h=e.atkT<.55||e.supT<.8||e.aiming,u=h||!l?e.aim:Math.atan2(e.vx,e.vz);n.yaw+=tt(Cr(n.yaw,u),-t*16,t*16),a.rotation.y=n.yaw,a.position.set(e.x,0,e.z);let d=tt(c/o.speed,0,1),f=n.ph;n.ph+=t*(3+c*2.1),l&&Math.floor(f/Math.PI)!==Math.floor(n.ph/Math.PI)&&(r.squash.v-=2.4*d,r.headX.v+=1.6*d,n.step=!0);let g=Math.sin(n.ph),x=Math.cos(n.ph);if(o.hover)for(let[z,L]of[[s.footL,1],[s.footR,-1]])z.rotation.x=Math.sin(i*3+L)*.25-d*.6;else{let z=.2*d;for(let[L,U]of[[s.footL,1],[s.footR,-1]])L.position.z=Zo(L).z+g*U*z,L.position.y=Zo(L).y+Math.max(0,x*U)*.14*d,L.rotation.x=-x*U*.6*d}let p=Math.cos(n.yaw),m=Math.sin(n.yaw),v=(e.vx-n.prevVX)/Math.max(t,.001),_=(e.vz-n.prevVZ)/Math.max(t,.001);n.prevVX=e.vx,n.prevVZ=e.vz;let y=e.vx*m+e.vz*p,P=e.vx*p-e.vz*m,S=v*m+_*p;zn(r.leanX,tt(y/o.speed*.16+S*.012,-.3,.35),120,14,t),zn(r.leanZ,tt(-P/o.speed*.2,-.3,.3),120,14,t),zn(r.squash,0,260,13,t),zn(r.headX,0,150,7,t),zn(r.headZ,0,150,7,t),zn(r.kick,0,200,15,t),zn(r.bodyX,0,140,11,t),zn(r.ant,0,90,5,t),zn(r.pop,1,220,12,t),zn(r.lift,0,60,10,t),zn(r.gunS,1,200,12,t),r.headZ.v+=P*.02*t*60*.05,r.headX.v-=S*.002,r.ant.v+=S*.004+r.headX.v*.02;let A=Math.sin(i*2.4+e.id)*.012,D=Math.abs(x)*.07*d;s.hips.position.y=Zo(s.hips).y+D+A+r.lift.x+(o.hover?Math.sin(i*4+e.id)*.05:0);let M=r.squash.x,w=Math.max(0,Math.sin(n.ph*2))*.05*d;s.hips.scale.set(1-M*.07-w*.5,1+M*.12+w,1-M*.07-w*.5),s.hips.rotation.x=r.leanX.x+r.bodyX.x,s.hips.rotation.z=r.leanZ.x+Math.sin(n.ph)*.05*d,zn(r.twist,tt(Cr(n.yaw,e.aim),-1,1),160,16,t),s.body.rotation.y=r.twist.x,s.head.rotation.x=r.headX.x*.5+(o.hover,0),s.head.rotation.z=r.headZ.x*.5+Math.sin(n.ph)*.06*d;for(let z of["antL","antR"])s[z]&&(s[z].rotation.x=-r.ant.x*.8+Math.sin(i*2+(z==="antL"?0:1))*.06);let F=Math.sin(n.ph)*.5*d*(h?.3:1);s.armL.rotation.set(Zo(s.armL).x+F,0,0),s.armR.rotation.set(-F*.3,0,0),s.gun.position.copy(Zo(s.gun)),s.gun.rotation.x=0,s.gun.scale.setScalar(1);let W=o.attack.kind;if(e.atkT<.6){let z=e.atkT;if(W==="lob"){let L=z<.07?-z/.07*2.4:z<.2?-2.4+(z-.07)/.13*3.2:.8*Math.max(0,1-(z-.2)/.3);s.armR.rotation.x=L,s.hips.rotation.x+=z<.07?-.15:z<.3?.18:0,s.gun.scale.setScalar(z<.12?1:Math.min(1,Math.max(0,(z-.35)/.15)))}else{let L=n.id==="shroom"?1.6:1;s.armR.rotation.x+=-r.kick.x*.9*L,s.armL.rotation.x+=-r.kick.x*.5*L,s.gun.position.z-=r.kick.x*.2*L,s.gun.rotation.x=-r.kick.x*.5*L,s.hips.rotation.x-=r.kick.x*.12*L,n.B.abd&&(n.B.abd.rotation.x=r.kick.x*.9)}}if(s.armL.rotation.x+=-r.kick.x*.4,e.supT<1.2){let z=e.supT;if(n.id==="shroom"){let L=z<.12?z/.12:Math.max(0,1-(z-.12)/.3);s.hips.position.y-=L*.12,s.hips.scale.y*=1-L*.12,s.head.rotation.x+=-L*.25}else if(n.id==="beetle"){let L=z<.9?Math.min(1,z/.15):Math.max(0,1-(z-.9)/.3);s.elyL&&(s.elyL.rotation.z=L*.9,s.elyR.rotation.z=-L*.9,s.elyL.rotation.x=s.elyR.rotation.x=-L*.4),s.armL.rotation.x=s.armR.rotation.x=-2.2*L+(z>.15&&z<.6?Math.sin((z-.15)*30)*.5:0),s.hips.position.y+=Math.sin(Math.min(z/.5,1)*Math.PI)*.35}else if(n.id==="wasp"){let L=o.super.windup,U=z<L?z/L:Math.max(0,1-(z-L)/.5);s.hips.position.y+=U*.35,s.hips.rotation.x+=-U*.25,n.mat.userData.u.uTint.value.setRGB(.5,.38,.05).multiplyScalar(z<L?z/L:0)}}else n.id==="wasp"&&n.mat.userData.u.uTint.value.setRGB(0,0,0);if(n.id!=="beetle"&&s.elyL&&(s.elyL.rotation.z=0),n.wings){let z=e.supT<o.super.windup+.2?1.6:1,L=Math.sin(i*62*z+e.id)*.55;s.wingL.rotation.z=L,s.wingR.rotation.z=-L,s.abd&&(s.abd.rotation.x+=Math.sin(i*3+e.id)*.08)}if(e.victory){let z=Math.abs(Math.sin(i*5.5+e.id));a.position.y=z*.45,s.armL.rotation.x=s.armR.rotation.x=-2.6+Math.sin(i*11)*.3,s.hips.scale.y*=1+(z<.15?-.12:.05)}else e.defeat&&(s.hips.position.y-=.06,s.head.rotation.x+=.45,s.armL.rotation.x=s.armR.rotation.x=.5);s.eyes&&(n.blink=(n.blink??2+Math.random()*3)-t,n.blink<0?(s.eyes.scale.y=.12,n.blink<-.11&&(n.blink=1.8+Math.random()*3.5)):s.eyes.scale.y=e.flash>.5?.6:1),n.mat.userData.u.uFlash.value=Math.max(0,e.flash)*.55,a.scale.setScalar(Math.max(.01,r.pop.x)),a.visible=!0}var gs={attack(n){n.sp.kick.v+=n.id==="wasp"?9:n.id==="shroom"?13:0,n.sp.bodyX.v-=2.2,n.sp.headX.v-=3,n.sp.ant.v+=3},super(n){n.sp.kick.v+=22,n.sp.bodyX.v-=5,n.sp.headX.v-=6,n.sp.ant.v+=6,n.sp.squash.v+=3},hurt(n,e,t){n.sp.bodyX.v-=5,n.sp.headX.v-=7,n.sp.headZ.v+=(Math.random()-.5)*8,n.sp.squash.v-=3,n.sp.ant.v+=5},spawn(n){n.sp.pop.x=.05,n.sp.pop.v=0},land(n){n.sp.squash.v-=4}};var Wc=class{constructor(e,t){this.max=e,this.n=0;let i=new en(1,1),s=new _c;s.index=i.index,s.setAttribute("position",i.attributes.position),s.setAttribute("uv",i.attributes.uv),this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e*2),s.setAttribute("iPos",new oi(this.pos,3).setUsage(wc)),s.setAttribute("iCol",new oi(this.col,4).setUsage(wc)),s.setAttribute("iSize",new oi(this.size,2).setUsage(wc)),s.instanceCount=0,this.geo=s;let r=new xt({transparent:!0,depthWrite:!1,blending:t?gi:Ji,vertexShader:`attribute vec3 iPos; attribute vec4 iCol; attribute vec2 iSize; varying vec4 vCol; varying vec2 vUv; varying float vSoft;
        void main(){ vCol = iCol; vUv = uv; vSoft = iSize.y;
          vec4 mv = modelViewMatrix * vec4(iPos, 1.0); mv.xy += position.xy * min(iSize.x, max(-mv.z, 0.1) * 0.22); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec4 vCol; varying vec2 vUv; varying float vSoft;
        void main(){ float d = length(vUv - 0.5) * 2.0; float a = clamp(1.0 - d, 0.0, 1.0); a = vSoft > 0.5 ? a * a : smoothstep(0.0, 0.25, a);
          gl_FragColor = vec4(vCol.rgb, vCol.a * a);
          #include <colorspace_fragment>
        }`});this.mesh=new de(s,r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,xe.add(this.mesh),this.p=[]}emit(e){this.p.length>=this.max&&this.p.shift(),this.p.push(e)}update(e){let t=this.p,i=0;for(let s=0;s<t.length;s++){let r=t[s];if(r.t+=e,r.t>=r.life)continue;r.vy-=r.grav*e;let o=Math.exp(-r.drag*e);r.vx*=o,r.vy*=o,r.vz*=o,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.y<.02&&r.grav>0&&(r.y=.02,r.vy*=-.3,r.vx*=.7,r.vz*=.7);let a=r.t/r.life;this.pos[i*3]=r.x,this.pos[i*3+1]=r.y,this.pos[i*3+2]=r.z,this.col[i*4]=r.r,this.col[i*4+1]=r.g,this.col[i*4+2]=r.b,this.col[i*4+3]=r.a*(a<.1?a/.1:1-Math.pow((a-.1)/.9,1.6)),this.size[i*2]=r.s0+(r.s1-r.s0)*a,this.size[i*2+1]=r.soft,t[i++]=r}t.length=i,this.geo.instanceCount=i;for(let s of["iPos","iCol","iSize"])this.geo.attributes[s].needsUpdate=!0}clear(){this.p.length=0,this.geo.instanceCount=0}},It=new Wc(900,!0),jn=new Wc(500,!1),Gc=new oe;function Lt(n,e,t,i,s){Gc.set(s.color||"#fff");let r=Et?Math.ceil((s.n||1)*.6):s.n||1,o=Et?.85:1;for(let a=0;a<r;a++){let c=O(0,Pe),l=O(s.upMin??-.3,s.upMax??1),h=O(s.spMin??0,s.sp??2),u=s.jitter?O(1-s.jitter,1+s.jitter):1;n.emit({x:e+O(-1,1)*(s.spread||0),y:t+O(-1,1)*(s.spreadY??s.spread??0),z:i+O(-1,1)*(s.spread||0),vx:Math.cos(c)*h*Math.sqrt(1-l*l*.5)+(s.vx||0),vy:l*h+(s.vy||0),vz:Math.sin(c)*h*Math.sqrt(1-l*l*.5)+(s.vz||0),life:O(s.life*.7,s.life*1.3),t:0,s0:s.s0*o*O(.8,1.2),s1:(s.s1??s.s0)*o*O(.8,1.2),r:Gc.r*u,g:Gc.g*u,b:Gc.b*u,a:s.a??1,grav:s.grav||0,drag:s.drag??2,soft:s.soft?1:0})}}var gm=new ss(.82,1,40);gm.rotateX(-Math.PI/2);var xm=new Tn(1,28);xm.rotateX(-Math.PI/2);var kr=[];function Hs(n,e,t,i,s,r,o=.06){let a=new de(gm,new We({color:r,transparent:!0,depthWrite:!1,blending:gi}));a.position.set(n,o,e),a.renderOrder=4,xe.add(a),kr.push({m:a,r0:t,r1:i,life:s,t:0})}var fS=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,62);t.addColorStop(0,"rgba(20,14,8,.85)"),t.addColorStop(.6,"rgba(30,22,10,.5)"),t.addColorStop(1,"rgba(30,22,10,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);for(let s=0;s<14;s++){let r=O(0,Pe);e.strokeStyle="rgba(20,14,8,.4)",e.lineWidth=O(2,5),e.beginPath(),e.moveTo(64,64),e.lineTo(64+Math.cos(r)*O(40,62),64+Math.sin(r)*O(40,62)),e.stroke()}let i=new qn(n);return i.colorSpace=ct,i})(),xs=[];function pS(n,e,t){let i=new de(xm,new We({map:fS,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));if(i.position.set(n,.035,e),i.scale.setScalar(t),i.rotation.y=O(0,Pe),i.renderOrder=1,xe.add(i),xs.push({m:i,t:0,life:6}),xs.length>14){let s=xs.shift();xe.remove(s.m),s.m.material.dispose()}}var Vc=new C,Hr=[];function Ko(n,e,t,i,s){let r=document.createElement("div");r.className="dnum "+(s||""),r.textContent=s==="heal"?"+"+Math.round(i):Math.round(i),ee("hud-world").appendChild(r),Hr.push({el:r,x:n+O(-.3,.3),y:e,z:t+O(-.3,.3),t:0,life:.9})}function _m(n){It.update(n),jn.update(n);for(let i=kr.length-1;i>=0;i--){let s=kr[i];s.t+=n;let r=s.t/s.life;if(r>=1){xe.remove(s.m),s.m.material.dispose(),kr.splice(i,1);continue}let o=1-Math.pow(1-r,3);s.m.scale.setScalar(s.r0+(s.r1-s.r0)*o),s.m.material.opacity=1-r}for(let i=xs.length-1;i>=0;i--){let s=xs[i];s.t+=n,s.m.material.opacity=Math.min(1,(s.life-s.t)/1.5),s.t>s.life&&(xe.remove(s.m),s.m.material.dispose(),xs.splice(i,1))}let e=innerWidth,t=innerHeight;for(let i=Hr.length-1;i>=0;i--){let s=Hr[i];if(s.t+=n,s.t>s.life){s.el.remove(),Hr.splice(i,1);continue}if(Vc.set(s.x,s.y+s.t*1.2,s.z).project(at),Vc.z>1){s.el.style.opacity=0;continue}let r=s.t/s.life,o=r<.15?.6+r/.15*.7:1.3-Math.min(.3,(r-.15)*1.2);s.el.style.transform=`translate(${(Vc.x*.5+.5)*e}px,${(-Vc.y*.5+.5)*t}px) translate(-50%,-50%) scale(${o.toFixed(2)})`,s.el.style.opacity=r>.7?(1-r)/.3:1}}function Hu(){It.clear(),jn.clear();for(let n of kr)xe.remove(n.m),n.m.material.dispose();kr.length=0;for(let n of xs)xe.remove(n.m),n.m.material.dispose();xs.length=0;for(let n of Hr)n.el.remove();Hr.length=0}function Xc(n,e,t,i="#FF9A2E"){Lt(It,n,.4,e,{n:14,color:"#FFE6A0",sp:t*4.5,upMin:.1,upMax:1,life:.35,s0:.45,s1:.1,drag:4}),Lt(It,n,.5,e,{n:6,color:i,sp:t*2,upMin:.2,life:.45,s0:t*.8,s1:t*.3,drag:3,soft:!0,a:.85}),Lt(jn,n,.5,e,{n:6,color:"#5A5048",sp:t*1.5,upMin:.2,life:1,s0:t*.55,s1:t*1.2,drag:2.5,soft:!0,a:.5,vy:.8,jitter:.2}),Lt(jn,n,.2,e,{n:6,color:"#6B4A2E",sp:5,upMin:.5,life:.8,s0:.12,s1:.08,grav:14,drag:.5}),Hs(n,e,.3,t*1.15,.4,i),pS(n,e,t*.9),b.shake=Math.max(b.shake,.35)}function Gr(n,e,t,i){Lt(It,n,e,t,{n:8,color:i,sp:5,life:.25,s0:.22,s1:.04,drag:5}),Lt(It,n,e,t,{n:1,color:"#FFFFFF",sp:0,life:.12,s0:.9,s1:.3,soft:!0,a:.8})}function Vr(n,e,t,i,s=30){Lt(It,n,e,t,{n:s,color:i,sp:4,life:.9,s0:.3,s1:.05,drag:2.5,grav:-1,soft:!0,jitter:.3}),Lt(jn,n,e,t,{n:12,color:"#F4F0E0",sp:2.5,life:1,s0:.4,s1:.9,drag:3,soft:!0,a:.6,vy:.6})}function vm(n,e,t=3){Lt(jn,n,.08,e,{n:t,color:"#D9C49A",sp:.8,upMin:.2,life:.5,s0:.15,s1:.4,drag:3,soft:!0,a:.35})}var Te={ctx:null,master:null,sfxGain:null,music:null,buffers:{},muted:Ut.get("muted",!1),musicOn:Ut.get("music",!0),sfxOn:Ut.get("sfx",!0),noise:null,ad:!1},Mm=["shot_shotgun","shot_pop","shot_beam","shot_throw","boom","boom_big","hit","hit2","hit_wall","hurt","die","super_ready","super","gem","gem_drop","heal","empty","click","select","confirm","step","rustle","countdown","start","win","lose","respawn","kill"],Xu={};function bm(){return Promise.all(Mm.map(n=>fetch("assets/sfx/"+n+".mp3").then(e=>e.arrayBuffer()).then(e=>{Xu[n]=e}).catch(()=>{})))}function Wr(){if(Te.ctx){Te.ctx.state==="suspended"&&!Te.ad&&!document.hidden&&Te.ctx.resume();return}try{let n=new(window.AudioContext||window.webkitAudioContext);Te.ctx=n;let e=n.createDynamicsCompressor();e.threshold.value=-10,e.knee.value=12,e.ratio.value=3,e.attack.value=.005,e.release.value=.2,e.connect(n.destination),Te.master=n.createGain(),Te.master.gain.value=Te.muted?0:.8,Te.master.connect(e),Te.sfxGain=n.createGain(),Te.sfxGain.gain.value=Te.sfxOn?1:0,Te.sfxGain.connect(Te.master),Te.noise=n.createBuffer(1,n.sampleRate,n.sampleRate);let t=Te.noise.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1;for(let i of Mm)Xu[i]&&n.decodeAudioData(Xu[i].slice(0),s=>{Te.buffers[i]=s},()=>{});xS()}catch{Te.ctx=null}}function Sm(n){Te.sfxOn=n,Ut.set("sfx",n),Te.sfxGain&&(Te.sfxGain.gain.value=n?1:0)}function Em(n){Te.musicOn=n,Ut.set("music",n),Kt.gain&&(Kt.gain.gain.value=n?Kt.vol:0)}function Yc(n){if(Te.ctx)try{n?Te.ctx.suspend():Te.ctx.resume()}catch{}}var Gu={},Vu=0,mS={shot_shotgun:.55,shot_pop:.4,shot_beam:.45,shot_throw:.7,boom:.75,boom_big:.95,hit:.6,hit2:.5,hit_wall:.35,hurt:.55,die:.7,super_ready:.5,super:.55,gem:.45,gem_drop:.45,heal:.3,empty:.4,click:.5,select:.5,confirm:.5,step:.18,rustle:.35,countdown:.6,start:.8,win:.7,lose:.7,respawn:.4,kill:.55};function Oe(n,e,t=1,i=1){let s=Te.ctx;if(!s||Te.muted||!Te.sfxOn)return;let r=Te.buffers[n];if(!r)return;let o=performance.now();if(Gu[n]&&o-Gu[n]<70||(Gu[n]=o,Vu>=12))return;let a=(mS[n]||.5)*t,c=0;if(e&&e!==b.me){let u=b.me&&b.me.alive?b.me.x:at.position.x,d=b.me&&b.me.alive?b.me.z:at.position.z,f=e.x-u,g=e.z-d,x=Math.hypot(f,g);if(a*=tt(1.4/(1+x*.12),0,1),a<.03)return;let p=at.rotation.y;c=tt((f*Math.cos(p)-g*Math.sin(p))/(x+4),-.7,.7)}let l=s.createBufferSource();l.buffer=r,l.playbackRate.value=i;let h=s.createGain();if(h.gain.value=a,l.connect(h),c&&s.createStereoPanner){let u=s.createStereoPanner();u.pan.value=c,h.connect(u),u.connect(Te.sfxGain)}else h.connect(Te.sfxGain);Vu++,l.onended=()=>Vu--,l.start()}var Kt={gain:null,next:0,step:0,timer:null,vol:.11},Wu=n=>440*Math.pow(2,(n-69)/12),gS=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]];function qc(n,e,t,i,s,r){let o=Te.ctx,a=o.createOscillator(),c=o.createGain();return a.type=e,a.frequency.setValueAtTime(t,n),c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(i,n+(r||.01)),c.gain.exponentialRampToValueAtTime(1e-4,n+(r||.01)+s),a.connect(c),c.connect(Kt.gain),a.start(n),a.stop(n+s+.2),a}function ym(n,e,t,i,s){let r=Te.ctx,o=r.createBufferSource();o.buffer=Te.noise;let a=r.createBiquadFilter();a.type=e,a.frequency.value=t;let c=r.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(i,n+.004),c.gain.exponentialRampToValueAtTime(1e-4,n+s),o.connect(a),a.connect(c),c.connect(Kt.gain),o.start(n,Math.random()*.5),o.stop(n+s+.05)}function xS(){if(Kt.timer)return;Kt.gain=Te.ctx.createGain(),Kt.gain.gain.value=Te.musicOn?Kt.vol:0;let n=Te.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2400,n.Q.value=.5,Kt.gain.connect(n),n.connect(Te.master),Kt.next=Te.ctx.currentTime+.15,Kt.timer=setInterval(_S,90)}function _S(){let n=Te.ctx;if(!n||!Te.musicOn||Te.muted||n.state!=="running"){n&&(Kt.next=Math.max(Kt.next,n.currentTime+.05));return}let e=b.state==="play"||b.state==="countdown",t=e&&b.match&&b.match.hot,i=60/(e?t?142:128:96)/2;for(;Kt.next<n.currentTime+.35;){let s=Kt.next,r=Kt.step,o=Math.floor(r/8)%4,a=r%8,c=gS[o],l=c[[0,1,2,1,2,1,0,2][a]]+12+(a===4&&o%2?12:0);if((!e||a%2===0||t)&&qc(s,"triangle",Wu(l),e?.035:.045,e?.14:.3),(a===0||e&&a===4)&&qc(s,"triangle",Wu(c[0]-12),e?.12:.07,i*(e?3.4:7),.02),!e&&a===0)for(let h of c)qc(s,"sine",Wu(h),.016,i*7.6,.5);e&&(a%4===0&&qc(s,"sine",130,.3,.16,.003).frequency.exponentialRampToValueAtTime(45,s+.14),a%4===2&&ym(s,"bandpass",1900,.1,.12),ym(s,"bandpass",6e3,a%2?.008:.016,.03)),Kt.next+=i,Kt.step++}}var nn={fighters:10,wait:20,shrink:105,r1:3.5,dps:650,dpsGrow:6,power:{dmg:.1,hp:400}},Mn={group:null,wall:null,floor:null,u:{uR:{value:40},uTime:{value:0}}},wm="varying vec3 vW; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",Tm=`float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
  float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }`;function Cm(){let n=new zt,e=new de(new An(1,1,1,Et?48:96,1,!0).translate(0,.5,0),new xt({transparent:!0,depthWrite:!1,side:At,uniforms:Mn.u,vertexShader:wm,fragmentShader:`uniform float uTime; varying vec3 vW; varying vec2 vUv; ${Tm}
      void main(){ float a = atan(vW.z, vW.x) * 9.0;
        float m = n(vec2(a, vW.y * 0.9 - uTime * 0.6)) * 0.6 + n(vec2(a * 2.3 + uTime * 0.3, vW.y * 2.0 - uTime)) * 0.4;
        float k = clamp(1.0 - vUv.y, 0.0, 1.0); k = k * k;
        vec3 col = mix(vec3(0.42, 0.85, 0.3), vec3(0.62, 0.35, 0.95), m);
        gl_FragColor = vec4(col * 1.2, clamp((0.25 + m * 0.6) * k + 0.08 * k, 0.0, 0.85));
        #include <colorspace_fragment>
      }`}));e.scale.set(40,6,40),e.renderOrder=4,e.frustumCulled=!1;let t=new de(new en(140,140).rotateX(-Math.PI/2),new xt({transparent:!0,depthWrite:!1,uniforms:Mn.u,vertexShader:wm,fragmentShader:`uniform float uR; uniform float uTime; varying vec3 vW; ${Tm}
      void main(){ float d = length(vW.xz); if(d < uR - 0.6) discard;
        float k = clamp((d - uR + 0.6) / 2.0, 0.0, 1.0);
        float m = n(vW.xz * 0.35 + vec2(uTime * 0.25, -uTime * 0.18)) * 0.7 + n(vW.xz * 1.1 - uTime * 0.4) * 0.3;
        vec3 col = mix(vec3(0.35, 0.75, 0.25), vec3(0.55, 0.3, 0.85), m);
        gl_FragColor = vec4(col, k * (0.32 + m * 0.3));
        #include <colorspace_fragment>
      }`}));t.position.y=.09,t.renderOrder=3,t.frustumCulled=!1,n.add(e,t),xe.add(n),Object.assign(Mn,{group:n,wall:e,floor:t})}function Pm(){Mn.group&&(xe.remove(Mn.group),Mn.group.traverse(n=>{n.geometry&&(n.geometry.dispose(),n.material.dispose())}),Mn.group=null)}var $c=new cc(.24,0),Lm=ut({color:"#FFC93C",emissive:"#FF9A1E",emissiveIntensity:1.3,roughness:.25,flatShading:!0}),Im=new We({color:new oe("#FFF4C0").multiplyScalar(2),toneMapped:!1}),Dm=new en(.7,.7).rotateX(-Math.PI/2),Fm=new We({color:"#000",transparent:!0,opacity:.25,depthWrite:!1});function Um(n,e,t,i,s=4){let r=new de($c,Lm);r.castShadow=!Et;let o=new de($c,Im);o.scale.setScalar(.45),r.add(o);let a=new de(Dm,Fm);a.renderOrder=1,a.scale.setScalar(.6),xe.add(r,a),b.pickups.push({kind:"power",x:n,z:e,y:.6,vx:t,vz:i,vy:s,t:0,m:r,sh:a,landed:!1,ph:O(0,Pe)})}function vS(n){let e=b.pickups[n];xe.remove(e.m,e.sh),b.pickups.splice(n,1)}function Nm(){let n=Math.hypot(B.hx,B.hz)+1.5;b.match={mode:"br",t:0,over:!1,winner:null,respawn:!1,count:[0,0],alive:nn.fighters,place:0,fog:{r:n,r0:n,tick:0,shrinking:!1},crates:0},Pm(),Cm(),Mn.u.uR.value=n}function Om(){Pm(),km(0)}function yS(n,e=1){n.power=(n.power||0)+e;let t=nn.power;n.pow=(n.pow0||1)*(1+t.dmg*n.power),n.max+=t.hp*e,n.hp=Math.min(n.max,n.hp+t.hp*e),(n===b.me||n.seen)&&Ko(n.x,n.H.height+.3,n.z,t.hp*e,"heal")}$t("kill",(n,e)=>{let t=b.match;if(!t||t.mode!=="br"||t.over)return;let i=Math.max(1,n.power||0);for(let s=0;s<i;s++){let r=s/i*Pe+O(-.3,.3),o=O(1.2,2.6);Um(n.x,n.z,Math.sin(r)*o,Math.cos(r)*o,O(3,5))}if(t.alive=b.fighters.filter(s=>s.alive).length,n.place=t.alive+1,n===b.me)return t.place=n.place,Rm(-1,"out");if(t.alive<=1){let s=b.fighters.find(r=>r.alive);s&&(s.place=1,s===b.me&&(t.place=1)),Rm(s?s.team:-1,"last")}});$t("crateBreak",n=>{!b.match||b.match.mode!=="br"||(b.match.crates++,Lt(jn,n.x,.6,n.z,{n:14,color:"#A87645",sp:3,upMin:.4,vy:3,life:.7,s0:.25,s1:.08,grav:6,drag:1.5}),Vr(n.x,.7,n.z,"#FFC93C",14),Oe("hit_wall",n,1.3,.6),Um(n.x,n.z,O(-.6,.6),O(-.6,.6),5))});function zm(n,e,t){let i=ai(n),s=ci(e);if(ki(i,s)!=="C")return!1;let r=om(i,s);return r?(Fu(r,t)&&Pt("crateBreak",r),!0):!1}function qu(n,e){Fu(n,e)&&Pt("crateBreak",n)}function Bm(n,e,t,i){for(let s of B.crates)s.alive&&Math.hypot(s.x-n,s.z-e)<t+.75&&qu(s,i)}var Zc=null,Am=-1;function km(n){Zc=Zc||document.getElementById("fogtint"),Zc&&(n=Math.round(n*20)/20,n!==Am&&(Am=n,Zc.style.opacity=n))}var Hm=()=>b.match&&b.match.mode==="br"?b.match.fog.r:1e9;function Yu(n){let e=b.match;if(!e||e.mode!=="br")return 1e9;let t=e.fog,i=e.t+n;return i<nn.wait?t.r0:Math.max(nn.r1,t.r0-(t.r0-nn.r1)*Math.min(1,(i-nn.wait)/nn.shrink))}var Jo={x:0,z:0};function Gm(n,e){let t=b.match;if(!t||t.mode!=="br")return;Mn.u.uTime.value=e,cm(n);let i=t.fog;if(b.state==="play"&&!t.over){t.t+=n;let r=i.shrinking;if(i.r=Yu(0),i.shrinking=t.t>=nn.wait&&i.r>nn.r1,i.shrinking&&!r&&Pt("fogStart"),i.tick-=n,i.tick<=0){i.tick=.5;let o=nn.dps+nn.dpsGrow*t.t;for(let a of b.fighters)a.alive&&Math.hypot(a.x,a.z)>i.r&&(a.inFog=(a.inFog||0)+1,Pt("fogHurt",a,o*.5))}}Mn.u.uR.value=i.r,Mn.wall&&Mn.wall.scale.set(i.r,6,i.r);let s=b.me;if(km(s&&s.alive&&Math.hypot(s.x,s.z)>i.r&&b.state!=="end"?.85:0),s&&s.alive&&Math.hypot(s.x,s.z)>i.r-3&&Math.random()<n*8){let r=O(0,Pe),o=O(1,4);Lt(jn,s.x+Math.sin(r)*o,O(.3,1.6),s.z+Math.cos(r)*o,{n:1,color:Math.random()<.5?"#8BD86A":"#A77CF0",sp:.3,vy:.3,life:1.4,s0:.5,s1:1.1,drag:.5,soft:!0,a:.35})}for(let r=b.pickups.length-1;r>=0;r--){let o=b.pickups[r];o.t+=n,o.landed||(o.vy-=16*n,o.x+=o.vx*n,o.z+=o.vz*n,o.y+=o.vy*n,Jo.x=o.x,Jo.z=o.z,ks(Jo,.25)&&(o.x=Jo.x,o.z=Jo.z,o.vx*=-.4,o.vz*=-.4),o.y<.5&&(o.y=.5,Math.abs(o.vy)>2?(o.vy=-o.vy*.4,o.vx*=.6,o.vz*=.6):o.landed=!0));let a=o.landed?Math.sin(e*3+o.ph)*.08:0;if(o.m.position.set(o.x,o.y+a,o.z),o.m.rotation.y=e*2+o.ph,o.sh.position.set(o.x,.04,o.z),Math.random()<n*3&&It.emit({x:o.x+O(-.2,.2),y:o.y,z:o.z+O(-.2,.2),vx:0,vy:.5,vz:0,life:.6,t:0,s0:.08,s1:.01,r:1,g:.8,b:.3,a:1,grav:0,drag:.5,soft:1}),!(o.t<.35||b.state!=="play")){for(let c of b.fighters)if(!(!c.alive||(c.x-o.x)**2+(c.z-o.z)**2>.9*.9)){vS(r),yS(c,1),Lt(It,c.x,1,c.z,{n:12,color:"#FFD45A",sp:2,vy:1.5,life:.45,s0:.18,s1:.02,soft:!0}),Hs(c.x,c.z,.3,1.2,.4,"#FFC93C"),Oe("gem",c,c===b.me?1:.6,.85+Math.min(10,c.power)*.03),Pt("power",c);break}}}}function Rm(n,e){let t=b.match;t.over=!0,t.winner=n,t.why=e,Pt("matchOver",n,e)}function Vm(){Cm();let n=[...Mn.group.children];xe.remove(Mn.group),Mn.group=null;let e=new de($c,Lm);return e.add(new de($c,Im)),n.push(e,new de(Dm,Fm)),n}var Gi=.75,Zm=3,MS=.13,bS=3,SS=1.6,ES=0;function wS(){return{mx:0,mz:0,aim:0,tx:0,tz:0,fire:!1,sup:!1,aiming:!1}}function $u(n){let e=li[n.hero],t={id:++ES,name:n.name,team:n.team,hero:n.hero,H:e,isMe:!!n.isMe,bot:null,level:n.level||1,x:0,z:0,vx:0,vz:0,kx:0,kz:0,aim:n.team===0?Math.PI:0,alive:!1,hp:e.hp,max:e.hp,ammo:Jn,cdT:0,charge:0,regenT:0,spawnT:0,shieldT:0,deadT:0,respawnT:.01,atkT:9,supT:9,flash:0,stunT:0,revealT:0,inGrass:!1,gems:0,kills:0,deaths:0,dmgDone:0,lastHitBy:null,pendingBeam:null,inp:wS(),V:null,tag:null,victory:!1,defeat:!1};return t.pow=t.pow0=1+(t.level-1)*.05,t.max=t.hp=Math.round(e.hp*t.pow),t.V=$o(n.hero),t.V.root.visible=!1,xe.add(t.V.root),b.fighters.push(t),t}function $m(){for(let n of b.fighters)xe.remove(n.V.root),n.V.mesh.geometry.dispose(),n.V.mat.dispose(),n.tag&&n.tag.el.remove();b.fighters.length=0,b.me=null}function Xr(n){return n===b.me?"me":b.me&&n.team===b.me.team?"ally":"foe"}function jo(n,e){let t=B.spawns[n.team]||B.spawns.ffa,i=e||t[(n.slot??0)%t.length];e||(n.power=0,n.pow=n.pow0,n.max=Math.round(n.H.hp*n.pow0)),n.x=i.x,n.z=i.z,n.vx=n.vz=n.kx=n.kz=0,n.alive=!0,n.hp=n.max,n.ammo=Jn,n.cdT=0,n.deadT=0,n.spawnT=0,n.shieldT=SS,n.regenT=0,n.aim=B.spawns[n.team]?n.team===0?Math.PI:0:TS(n.x,n.z),n.V.yaw=n.aim,n.atkT=n.supT=9,n.spot={},n.pendingBeam=null,n.stunT=0,n.gems=0,n.V.root.visible=!0,n.V.root.scale.setScalar(1),kc(n.V,Xr(n)),gs.spawn(n.V),n.V.root.position.set(n.x,0,n.z),Lt(It,n.x,.3,n.z,{n:18,color:Xr(n)==="foe"?"#FF7A6A":"#8FE0FF",sp:1.5,upMin:.6,upMax:1,vy:3,life:.7,s0:.25,s1:.05,drag:1.5,soft:!0}),Hs(n.x,n.z,.2,1.3,.5,Xr(n)==="foe"?"#FF5A4A":"#6FD8FF"),Pt("spawn",n)}function TS(n,e){let t=Math.atan2(-n,-e),i=t,s=-1e9;for(let r=0;r<8;r++){let o=r*Math.PI/4,a=Ln(n,e,n+Math.sin(o)*8,e+Math.cos(o)*8),l=(a<0?8:a*8)+Math.cos(o-t)*3;l>s&&(s=l,i=o)}return i}var Wm=3.2,AS=10,RS=6.5,CS=3.5,Ku=(n,e)=>e.spot&&e.spot[n]>0;function Zr(n,e){if(e.team===n.team)return!0;if(!PS(n.team,e))return!1;if(Ku(n.team,e))return!0;let t=e.x-n.x,i=e.z-n.z,s=b.match&&b.match.mode==="br"?RS:AS;return t*t+i*i<s*s||zr(n.x,n.z,e.x,e.z)}function PS(n,e){if(e.team===n||!e.alive||!e.inGrass||e.revealT>0)return!0;for(let t of b.fighters)if(t.alive&&t.team===n&&(t.x-e.x)**2+(t.z-e.z)**2<Wm*Wm)return!0;return!1}var Qn={x:0,z:0};function Km(n,e){if(!n.alive){n.deadT+=e,b.match&&b.match.respawn&&!b.match.over&&(n.respawnT-=e,n.respawnT<=0&&jo(n));return}let t=n.H,i=n.inp;if(n.spawnT+=e,n.atkT+=e,n.supT+=e,n.regenT+=e,n.shieldT=Math.max(0,n.shieldT-e),n.revealT=Math.max(0,n.revealT-e),n.flash=Math.max(0,n.flash-e*6),n.cdT=Math.max(0,n.cdT-e),n.stunT=Math.max(0,n.stunT-e),n.ammo<Jn&&(n.ammo=Math.min(Jn,n.ammo+e/t.attack.reload),n.ammo>=Jn&&n.isMe&&Pt("ammoFull",n)),n.regenT>Zm&&n.hp<n.max){let d=Math.min(n.max-n.hp,n.max*MS*e);n.hp+=d,n.healAcc=(n.healAcc||0)+d,n.healAcc>400&&(n===b.me&&Ko(n.x,t.height+.3,n.z,n.healAcc,"heal"),n.healAcc=0)}let s=b.state!=="play"||n.stunT>0||n.pendingBeam,r=s?0:i.mx,o=s?0:i.mz,a=Math.hypot(r,o);a>1&&(r/=a,o/=a);let c=t.speed*(n.gems>0,1),l=1-Math.exp(-e*18);n.vx+=(r*c-n.vx)*l,n.vz+=(o*c-n.vz)*l;let h=Math.exp(-e*7);n.kx*=h,n.kz*=h,Qn.x=n.x+(n.vx+n.kx)*e,Qn.z=n.z+(n.vz+n.kz)*e,ks(Qn,t.rad);for(let d of b.fighters){if(d===n||!d.alive)continue;let f=Qn.x-d.x,g=Qn.z-d.z,x=f*f+g*g,p=t.rad+d.H.rad;if(x<p*p&&x>1e-6){let m=Math.sqrt(x),v=(p-m)*.5/m;Qn.x+=f*v,Qn.z+=g*v}}if(ks(Qn,t.rad),e>0){let d=(Qn.x-n.x)/e,f=(Qn.z-n.z)/e;n.vx=Rn(n.vx,d,.5),n.vz=Rn(n.vz,f,.5)}n.x=Qn.x,n.z=Qn.z;let u=Fc(n.x,n.z);u&&!n.inGrass&&n.V.root.visible&&Lt(jn,n.x,.6,n.z,{n:4,color:"#7FC24E",sp:1.2,life:.5,s0:.12,s1:.06,grav:4,drag:1}),n.inGrass=u,Math.hypot(n.vx,n.vz)>2&&Math.random()<e*4&&!n.H.hover&&!u&&vm(n.x,n.z,1),(!s||n.pendingBeam)&&(n.pendingBeam||(n.aim=i.aim)),n.pendingBeam&&(n.pendingBeam.t-=e,n.pendingBeam.t<=0&&US(n)),s||(i.sup&&n.charge>=1?IS(n,i.tx,i.tz):i.fire&&LS(n,i.tx,i.tz)),i.fire=i.sup=!1}function _s(n){return n.alive&&n.ammo>=1&&n.cdT<=0&&!n.pendingBeam&&b.state==="play"}function Ju(n,e){return n.V.muzzle.getWorldPosition(e),e.y=Gi,e}var kt=new C;function LS(n,e,t){if(!_s(n)){n.isMe&&n.ammo<1&&n.cdT<=0&&Pt("empty",n);return}let i=n.H,s=i.attack;n.ammo-=1,n.cdT=s.cd,n.atkT=0,n.regenT=0,n.revealT=Math.max(n.revealT,1);let r=Math.atan2(e-n.x,t-n.z);n.aim=r,n.V.yaw=r,gs.attack(n.V),Jm(n,s,r,e,t,!1),Pt("attack",n,!1)}function IS(n,e,t){if(!n.alive||n.pendingBeam||b.state!=="play")return;let i=n.H,s=i.super;n.charge=0,n.supT=0,n.atkT=0,n.regenT=0,n.revealT=Math.max(n.revealT,1.2);let r=Math.atan2(e-n.x,t-n.z);if(n.aim=r,n.V.yaw=r,gs.super(n.V),s.kind==="beam"){n.pendingBeam={t:s.windup,aim:r},Pt("super",n,!0),Oe("super",n);return}Jm(n,s,r,e,t,!0),Pt("super",n,!1),Oe("super",n)}function Jm(n,e,t,i,s,r){Ju(n,kt);let o=n.pow;if(e.kind==="fan"){for(let a=0;a<e.count;a++){let c=t+(e.count>1?(a/(e.count-1)-.5)*e.spread:0)+O(-.015,.015);qm(n,kt.x,kt.z,c,e,e.dmg*o,r)}Lt(It,kt.x,kt.y,kt.z,{n:r?16:8,color:e.color,sp:r?7:4,vx:Math.sin(t)*4,vz:Math.cos(t)*4,life:.22,s0:.35,s1:.05,drag:6}),Lt(jn,kt.x,kt.y,kt.z,{n:r?10:5,color:"#F2E8D0",sp:1.5,vx:Math.sin(t)*3,vz:Math.cos(t)*3,life:.5,s0:.18,s1:.5,drag:4,soft:!0,a:.6}),r&&(n.kx-=Math.sin(t)*7,n.kz-=Math.cos(t)*7,b.shake=Math.max(b.shake,n.isMe?.5:0)),Oe(r?"boom":"shot_shotgun",n)}else if(e.kind==="needle")qm(n,kt.x,kt.z,t,e,e.dmg*o,r),Lt(It,kt.x,kt.y,kt.z,{n:6,color:e.color,sp:3,life:.18,s0:.3,s1:.05,drag:6}),Oe("shot_beam",n,.6);else if(e.kind==="lob"){let a=tt(Math.hypot(i-n.x,s-n.z),1.5,e.range);Ym(n,n.x+Math.sin(t)*a,n.z+Math.cos(t)*a,e,e.flight*(.65+.35*a/e.range),0,r),Oe("shot_throw",n)}else if(e.kind==="barrage"){let a=tt(Math.hypot(i-n.x,s-n.z),3,e.range);for(let c=0;c<e.count;c++){let l=(c-(e.count-1)/2)*e.step,h=tt(a+l,1.5,e.range+e.step);Ym(n,n.x+Math.sin(t)*h+O(-.3,.3),n.z+Math.cos(t)*h+O(-.3,.3),e,e.flight*(.7+.3*h/e.range),c*.08,!0)}Oe("shot_throw",n)}}var ju=new Yt(1,10,8),Qu=new Er(.5,2.2,3,8);Qu.rotateX(Math.PI/2);var Xm={},qr=(n,e=2.4)=>Xm[n+e]||(Xm[n+e]=new We({color:new oe(n).multiplyScalar(e),toneMapped:!1}));function qm(n,e,t,i,s,r,o){let a=new de(s.kind==="needle"?Qu:ju,qr(s.color,o?3:2.2));a.scale.setScalar(s.size||.2),a.position.set(e,Gi,t),a.rotation.y=i,xe.add(a),b.shots.push({owner:n,team:n.team,x:e,z:t,x0:n.x,z0:n.z,vx:Math.sin(i)*s.speed,vz:Math.cos(i)*s.speed,range:s.range,dist:0,dmg:r,W:s,isSuper:o,m:a,knock:s.knock||0})}function Zu(n,e,t,i,s,r){let o=t-n,a=i-e,c=o*o+a*a,l=c>0?((s-n)*o+(r-e)*a)/c:0;l=tt(l,0,1);let h=n+o*l-s,u=e+a*l-r;return h*h+u*u}function jm(n){for(let e=b.shots.length-1;e>=0;e--){let t=b.shots[e],i=Math.hypot(t.vx,t.vz)*n,s=t.x+t.vx*n,r=t.z+t.vz*n,o=!1;if(t.dist+i>=t.range){let c=(t.range-t.dist)/i;s=t.x+t.vx*n*c,r=t.z+t.vz*n*c,o=!0}let a=Ln(t.x,t.z,s,r);if(a>=0){s=t.x+(s-t.x)*a,r=t.z+(r-t.z)*a,o=!0,Gr(s,Gi,r,t.W.color),Oe("hit_wall",{x:s,z:r},.35);let c=Math.hypot(t.vx,t.vz)||1;zm(s+t.vx/c*.08,r+t.vz/c*.08,t.W.dmgFar?Rn(t.dmg,t.W.dmgFar*t.owner.pow,tt(t.dist/t.range,0,1)):t.dmg)}for(let c of b.fighters){if(!c.alive||c.team===t.team)continue;let l=c.H.rad+(t.W.size||.2)*.8;if(Zu(t.x,t.z,s,r,c.x,c.z)<l*l){let h=t.dmg;if(t.W.dmgFar&&(h=Rn(t.dmg,t.W.dmgFar*t.owner.pow,tt((t.dist+i)/t.range,0,1))),Gs(c,h,t.owner,t.isSuper),t.knock){let u=Math.hypot(t.vx,t.vz);c.kx+=t.vx/u*t.knock*2.2,c.kz+=t.vz/u*t.knock*2.2,c.stunT=Math.max(c.stunT,.25)}Gr(c.x,Gi+.1,c.z,t.W.color),o=!0,s=c.x,r=c.z;break}}t.dist+=Math.hypot(s-t.x,r-t.z),t.x=s,t.z=r,t.m.position.set(s,Gi,r),Math.random()<.7&&It.emit({x:s,y:Gi,z:r,vx:0,vy:0,vz:0,life:t.W.kind==="needle"?.3:.16,t:0,s0:(t.W.size||.2)*(t.W.kind==="needle"?1.6:1.4),s1:.02,r:1,g:.8,b:.4,a:.7,grav:0,drag:0,soft:1}),o&&(xe.remove(t.m),b.shots.splice(e,1))}}var Qm=new Yt(.16,12,10),e0=ut({color:"#26262E",roughness:.35,metalness:.2}),ed=new ss(.9,1,36);ed.rotateX(-Math.PI/2);function Ym(n,e,t,i,s,r,o){let a=new de(Qm,e0);a.castShadow=!0;let c=new de(ju,qr("#FFC04A",3));c.scale.setScalar(.05),c.position.y=.17,a.add(c),a.visible=!1,xe.add(a);let l=new de(ed,new We({color:Xr(n)==="foe"?"#FF4A3A":"#5FC8FF",transparent:!0,opacity:0,depthWrite:!1}));l.position.set(e,.05,t),l.scale.setScalar(i.radius),l.renderOrder=3,xe.add(l),Ju(n,kt),b.lobs.push({owner:n,team:n.team,x0:kt.x,z0:kt.z,y0:1,x1:e,z1:t,T:s,t:-r,W:i,isSuper:o,m:a,mark:l,h:3.2+Math.hypot(e-n.x,t-n.z)*.2})}function t0(n){for(let e=b.lobs.length-1;e>=0;e--){let t=b.lobs[e];if(t.t+=n,t.t<0)continue;let i=Math.min(1,t.t/t.T),s=Rn(t.x0,t.x1,i),r=Rn(t.z0,t.z1,i),o=Rn(t.y0,.15,i)+Math.sin(i*Math.PI)*t.h;t.m.visible=!0,t.m.position.set(s,o,r),t.m.rotation.x+=n*9,t.m.rotation.z+=n*5,t.mark.material.opacity=.25+.55*i,t.mark.scale.setScalar(t.W.radius*(1.25-.25*i)),Math.random()<.6&&It.emit({x:s,y:o+.17,z:r,vx:O(-.4,.4),vy:.6,vz:O(-.4,.4),life:.3,t:0,s0:.12,s1:.02,r:1,g:.75,b:.3,a:1,grav:0,drag:1,soft:0}),i>=1&&(xe.remove(t.m),xe.remove(t.mark),t.mark.material.dispose(),b.lobs.splice(e,1),DS(t.owner,t.x1,t.z1,t.W,t.isSuper))}}function DS(n,e,t,i,s){Xc(e,t,i.radius,i.color),Oe(s?"boom_big":"boom",{x:e,z:t});for(let r of b.fighters){if(!r.alive||r.team===n.team)continue;let o=Math.hypot(r.x-e,r.z-t);if(!(o>i.radius+r.H.rad)&&(Gs(r,i.dmg*n.pow,n,s),i.knock)){let a=o||1;r.kx+=(r.x-e)/a*i.knock*3,r.kz+=(r.z-t)/a*i.knock*3,r.stunT=Math.max(r.stunT,.3)}}Bm(e,t,i.radius,i.dmg*n.pow),i.puddle&&FS(n,e,t,i.puddle)}var td=new Tn(1,32);td.rotateX(-Math.PI/2);var Kc={uTime:{value:0}},n0=new xt({transparent:!0,depthWrite:!1,uniforms:Object.assign({uK:{value:1}},Kc),vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uTime; uniform float uK; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
    float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
    void main(){ vec2 p = vUv - 0.5; float d = length(p) * 2.0;
      float e = n(p * 7.0 + uTime * 0.7) * 0.25 + n(p * 15.0 - uTime) * 0.12;
      float a = 1.0 - smoothstep(0.82, 1.0, d + e * 0.6);
      float bub = smoothstep(0.62, 0.8, n(p * 12.0 + vec2(uTime * 0.5, -uTime * 0.8)));
      vec3 col = mix(vec3(0.95, 0.35, 0.05), vec3(1.0, 0.8, 0.25), bub + (1.0 - d) * 0.4);
      gl_FragColor = vec4(col * 1.6, a * 0.78 * uK);
      #include <colorspace_fragment>
    }`});function FS(n,e,t,i){let s=new de(td,n0.clone());s.material.uniforms.uTime=Kc.uTime,s.position.set(e,.045,t),s.scale.setScalar(.2),s.renderOrder=3,xe.add(s),b.puddles.push({owner:n,team:n.team,x:e,z:t,r:i.r,dps:i.dps*n.pow,t:0,life:i.t,tick:0,m:s})}function i0(n){Kc.uTime.value+=n;for(let e=b.puddles.length-1;e>=0;e--){let t=b.puddles[e];t.t+=n,t.tick-=n;let i=t.t/t.life;if(t.m.scale.setScalar(t.r*Math.min(1,t.t/.15)),t.m.material.uniforms.uK.value=i>.75?(1-i)/.25:1,Math.random()<n*14&&It.emit({x:t.x+O(-t.r,t.r)*.7,y:.1,z:t.z+O(-t.r,t.r)*.7,vx:0,vy:O(.6,1.4),vz:0,life:.5,t:0,s0:.14,s1:.02,r:1,g:.6,b:.15,a:1,grav:0,drag:.5,soft:1}),t.tick<=0){t.tick=.25;for(let s of b.fighters)s.alive&&s.team!==t.team&&(s.x-t.x)**2+(s.z-t.z)**2<(t.r+s.H.rad*.5)**2&&Gs(s,t.dps*.25,t.owner,!1,!0)}t.t>=t.life&&(xe.remove(t.m),t.m.material.dispose(),b.puddles.splice(e,1))}}var Yr=new An(1,1,1,12,1,!0);Yr.rotateX(Math.PI/2);Yr.translate(0,0,.5);function US(n){let e=n.H.super,t=n.pendingBeam.aim;n.pendingBeam=null,n.aim=t,Ju(n,kt);let i=kt.x,s=kt.z,r=i+Math.sin(t)*e.range,o=s+Math.cos(t)*e.range;for(let l of b.fighters){if(!l.alive||l.team===n.team)continue;let h=e.width/2+l.H.rad;Zu(i,s,r,o,l.x,l.z)<h*h&&(Gs(l,e.dmg*n.pow,n,!0),l.kx+=Math.sin(t)*6,l.kz+=Math.cos(t)*6,Gr(l.x,Gi,l.z,e.color))}for(let l of B.crates)l.alive&&Zu(i,s,r,o,l.x,l.z)<(e.width/2+.7)**2&&qu(l,e.dmg*n.pow);let a=new de(Yr,qr("#FFF6C0",3)),c=new de(Yr,new We({color:new oe(e.color).multiplyScalar(2),transparent:!0,opacity:.55,depthWrite:!1,blending:gi}));for(let l of[a,c])l.position.set(i,Gi+.05,s),l.rotation.y=t,xe.add(l);a.scale.set(.08,.08,e.range),c.scale.set(e.width*.5,e.width*.5,e.range),b.beams.push({core:a,outer:c,t:0,life:.45,w:e.width});for(let l=0;l<e.range;l+=.6)Lt(It,i+Math.sin(t)*l,Gi,s+Math.cos(t)*l,{n:1,color:e.color,sp:1.5,life:.5,s0:.25,s1:.02,drag:2,soft:!0});n.kx-=Math.sin(t)*5,n.kz-=Math.cos(t)*5,gs.super(n.V),n.isMe&&(b.shake=Math.max(b.shake,.4)),Oe("shot_beam",n,1.2)}function s0(n){for(let e=b.beams.length-1;e>=0;e--){let t=b.beams[e];t.t+=n;let i=t.t/t.life,s=(1-i)*t.w*.5;t.outer.scale.x=t.outer.scale.y=Math.max(.001,s),t.core.scale.x=t.core.scale.y=Math.max(.001,.08*(1-i)),t.outer.material.opacity=.55*(1-i),i>=1&&(xe.remove(t.core),xe.remove(t.outer),t.outer.material.dispose(),b.beams.splice(e,1))}}function Gs(n,e,t,i,s){if(!n.alive||n.shieldT>0||e<=0||b.match&&b.match.over)return 0;e=Math.round(e),n.hp-=e,n.flash=1,n.regenT=0,n.revealT=Math.max(n.revealT,.6),n.lastHitBy=t,t&&t.team!==n.team&&(n.spot=n.spot||{},n.spot[t.team]=CS),t&&(t.dmgDone+=e,t.regenT=Math.min(t.regenT,Zm*.5),!i&&t.charge<1&&(t.charge=Math.min(1,t.charge+e/t.H.super.charge),t.charge>=1&&Pt("superReady",t))),s||gs.hurt(n.V);let r=b.me?b.me.team:0;return(b.me&&Zr(b.me,n)||n===b.me||t===b.me)&&Ko(n.x,n.H.height+.25,n.z,e,n===b.me?"me":t===b.me?"mine":""),Pt("damage",n,e,t),n.hp<=0&&NS(n,t),e}function NS(n,e){n.hp=0,n.alive=!1,n.deadT=0,n.deaths++,n.respawnT=bS,n.pendingBeam=null,e&&e!==n&&e.kills++,Vr(n.x,.8,n.z,n.H.color,34),Oe("die",n),Pt("kill",n,e)}function r0(n,e){let t=b.me?b.me.team:0;for(let i of b.fighters){let s=i.V;if(i.spot)for(let a in i.spot)i.spot[a]=Math.max(0,i.spot[a]-n);i.seen=b.me?Zr(b.me,i):!0,Hc(s,i,n,e),i.alive&&!i.seen&&(s.root.visible=!1);let r=i.alive&&i.inGrass&&i.team===t?.55:1;if(i===b.me&&b.state!=="menu"){let a=at.position.distanceTo(s.root.position)-.6;a<2.2&&(r=Math.min(r,Math.max(.15,(a-.6)/1.6)))}let o=r<1;s.mat.transparent!==o&&(s.mat.transparent=o,s.mat.depthWrite=!o,s.ol.visible=!o&&!Et),s.mat.opacity=r,i.shieldT>0?s.mat.userData.u.uTint.value.setScalar(.12+Math.sin(e*20)*.08):(s.id!=="wasp"||i.supT>=1.2)&&s.mat.userData.u.uTint.value.setScalar(0)}}function o0(){let n={team:0,x:0,z:0,pow:1,H:{attack:{}},V:null},e=[],t=new de(td,n0.clone());return t.material.uniforms.uTime=Kc.uTime,e.push(t),e.push(new de(Qm,e0),new de(ed,new We({transparent:!0,depthWrite:!1}))),e.push(new de(Yr,qr("#FFF6C0",3)),new de(Yr,new We({transparent:!0,opacity:.5,depthWrite:!1,blending:gi}))),e.push(new de(ju,qr("#FF6B4A",2.2)),new de(Qu,qr("#FFB21E",2.2))),e}var OS={easy:{err:.22,react:.6,lead:.4,dodge:.2},normal:{err:.11,react:.35,lead:.75,dodge:.5},hard:{err:.05,react:.18,lead:1,dodge:.85}},zS={shroom:.5,beetle:.72,wasp:.82};function Jc(n="normal"){return{S:OS[n],path:null,pathT:0,gx:null,gz:null,mode:"idle",target:null,seenT:0,mem:new Map,strafe:O()<.5?-1:1,strafeT:O(.6,1.6),thinkT:0,holdX:0,holdZ:0,stuck:0,lx:0,lz:0}}var yi=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function hi(n,e,t,i){let s=n.bot;if(s.pathT-=i,(!s.path||s.pathT<=0||Math.hypot((s.gx??1e9)-e,(s.gz??1e9)-t)>1.2)&&(s.path=Pu(n.x,n.z,e,t)?[{x:e,z:t}]:im(n.x,n.z,e,t),s.gx=e,s.gz=t,s.pathT=O(.5,.9)),!s.path||!s.path.length)return[0,0];let r=s.path[0];for(;s.path.length>1&&Math.hypot(r.x-n.x,r.z-n.z)<.45;)s.path.shift(),r=s.path[0];let o=r.x-n.x,a=r.z-n.z,c=Math.hypot(o,a);return c<.25?[0,0]:[o/c,a/c]}function a0(n,e){let t=n.bot,i=n.H,s=n.inp,r=b.match;if(!n.alive||!r)return;let o=b.time,a=null,c=-1e9;for(let d of b.fighters){if(!d.alive||d.team===n.team)continue;if(Zr(n,d))t.mem.set(d.id,{x:d.x,z:d.z,t:o,o:d});else continue;let g=-yi(n,d)+(d.gems||0)*1.2+(d.power||0)*.5+(1-d.hp/d.max)*4+(d===t.target?2:0);g>c&&(c=g,a=d)}a!==t.target?(t.target=a,t.seenT=0):t.seenT+=e;let l=t.target;t.shootAt=null;let h=0,u=0;r.mode==="br"?[h,u]=kS(n,t,l,e):[h,u]=BS(n,t,l,e),HS(n,t,l,h,u,e)}function BS(n,e,t,i){let s=n.H,r=b.match,o=b.time,a=r.count[n.team],c=r.count[1-n.team],l=B.spawns[n.team][1]||B.spawns[n.team][0];if(e.thinkT-=i,e.thinkT<=0){e.thinkT=O(.2,.35);let d=n.hp<n.max*.42;n.gems>=3&&d?e.mode="retreat":r.cd&&r.cd.team===n.team&&n.gems>0?e.mode=t&&yi(n,t)<s.attack.range*.8?"fight":"hold":d&&t&&yi(n,t)<6&&n.hp<t.hp?e.mode="retreat":t&&yi(n,t)<s.attack.range*1.35?e.mode="fight":b.pickups.length&&!(r.cd&&r.cd.team===n.team)?e.mode="collect":r.cd&&r.cd.team!==n.team?e.mode="hunt":e.mode="patrol"}let h=0,u=0;if(e.mode==="retreat"||e.mode==="hold"){let d=l.x+(n.slot-1)*2.5,f=l.z+(n.team===0?-3:3);[h,u]=hi(n,d,f,i),Math.hypot(n.x-d,n.z-f)<1.5&&(h=Math.sin(o*1.3+n.id)*.4,u=0)}else if(e.mode==="collect"){let d=null,f=1e9;for(let g of b.pickups){let x=Math.hypot(g.x-n.x,g.z-n.z)+(g.landed?0:1);x<f&&(f=x,d=g)}d&&([h,u]=hi(n,d.x,d.z,i))}else if(e.mode==="hunt"){let d=null;for(let m of b.fighters)m.alive&&m.team!==n.team&&(!d||m.gems>d.gems)&&(d=m);let f=d&&e.mem.get(d.id),g=B.mine||{x:0,z:0},x=f&&o-f.t<4?f.x:g.x,p=f&&o-f.t<4?f.z:g.z+(n.team===0?-4:4);[h,u]=hi(n,x,p,i)}else if(e.mode==="patrol"){let d=n.team===0?1:-1,f=B.mine||{x:0,z:0},g=f.x+(n.slot-1)*3.2,x=f.z+d*(2.5+(n.slot===1?0:1.5));[h,u]=hi(n,g,x,i)}return[h,u]}function kS(n,e,t,i){let s=n.H,r=b.time,o=Hm(),a=Yu(6),c=Math.hypot(n.x,n.z);if(e.thinkT-=i,e.thinkT<=0){e.thinkT=O(.25,.4);let l=n.hp<n.max*.38,h=b.match.t<nn.wait&&n.regenT>1.5;if(e.crate=null,e.pk=null,c>Math.min(o,a)-2.5)e.mode="zone";else if(l&&t&&yi(n,t)<7&&n.hp<t.hp)e.mode="retreat";else if(t&&yi(n,t)<s.attack.range*(h?.7:1.35))e.mode="fight";else{let u=null,d=13;for(let f of b.pickups){let g=Math.hypot(f.x-n.x,f.z-n.z);g<d&&Math.hypot(f.x,f.z)<a-1.5&&(d=g,u=f)}if(u)e.mode="collect",e.pk=u;else{let f=null,g=15;for(let p of B.crates){if(!p.alive)continue;let m=Math.hypot(p.x-n.x,p.z-n.z);m<g&&Math.hypot(p.x,p.z)<a-1.5&&(g=m,f=p)}let x=null;for(let p of e.mem.values())p.o.alive&&r-p.t<5&&(!x||p.t>x.t)&&(x=p);f&&!(x&&n.hp>n.max*.7&&O()<.3)?(e.mode="crate",e.crate=f):x&&n.hp>n.max*.6&&!h?(e.mode="hunt",e.huntX=x.x,e.huntZ=x.z):e.mode="roam"}}}if(e.mode==="zone"){let l=Math.max(0,Math.min(o,a)*.45)/(c||1);return hi(n,n.x*l,n.z*l,i)}if(e.mode==="retreat"&&t){let l=yi(n,t)||1,h=n.x+(n.x-t.x)/l*5,u=n.z+(n.z-t.z)/l*5,d=Math.hypot(h,u),f=Math.max(2,Math.min(o,a)-3);return d>f&&(h*=f/d,u*=f/d),hi(n,h,u,i)}if(e.mode==="collect"&&e.pk&&b.pickups.includes(e.pk))return hi(n,e.pk.x,e.pk.z,i);if(e.mode==="crate"&&e.crate&&e.crate.alive){let l=e.crate,h=Math.hypot(l.x-n.x,l.z-n.z),u=Math.min(s.attack.range*.7,6),d=Ln(n.x,n.z,l.x,l.z),f=n.x+(l.x-n.x)*d,g=n.z+(l.z-n.z)*d,x=d<0||ai(f+(l.x-n.x)/(h||1)*.08)===l.c&&ci(g+(l.z-n.z)/(h||1)*.08)===l.r;return h<u+.5&&(x||s.attack.kind==="lob")?(e.shootAt=l,[Math.sin(r*1.7+n.id)*.3,Math.cos(r*1.3+n.id)*.3]):hi(n,l.x,l.z,i)}if(e.mode==="hunt"){if(Math.hypot(e.huntX-n.x,e.huntZ-n.z)>1.2)return hi(n,e.huntX,e.huntZ,i);e.thinkT=0}if(e.mode==="roam"||e.mode==="hunt"){if(!e.wp||r>e.wpT||Math.hypot(e.wp.x-n.x,e.wp.z-n.z)<1.2||Math.hypot(e.wp.x,e.wp.z)>a-2){let l=Math.max(2,a-3);for(let h=0;h<12;h++){let u=O(0,Pe),d=Math.sqrt(O())*l,f=Math.sin(u)*d,g=Math.cos(u)*d;if(Bs(f,g)==="."||Bs(f,g)==='"'){e.wp={x:f,z:g};break}}e.wpT=r+O(5,8)}if(e.wp)return hi(n,e.wp.x,e.wp.z,i)}return[0,0]}function HS(n,e,t,i,s,r){let o=n.H,a=n.inp,c=b.time;if(t&&(e.mode==="fight"||yi(n,t)<o.attack.range)){let u=yi(n,t),d=o.attack.range*zS[n.hero],f=(t.x-n.x)/(u||1),g=(t.z-n.z)/(u||1);if(e.strafeT-=r,e.strafeT<=0&&(e.strafeT=O(.5,1.4),e.strafe=-e.strafe),e.mode==="fight"){let x=0,p=0;u>d+1||!Cu(n.x,n.z,t.x,t.z)&&n.hero!=="beetle"?[x,p]=hi(n,t.x,t.z,r):u<d-1.5&&(x=-f,p=-g),i=x*.9+-g*e.strafe*.7,s=p*.9+f*e.strafe*.7}}if(Math.random()<e.S.dodge)for(let u of b.shots){if(u.team===n.team)continue;let d=n.x-u.x,f=n.z-u.z,g=Math.hypot(u.vx,u.vz),x=(d*u.vx+f*u.vz)/g;if(x<0||x>6)continue;let p=(d*u.vz-f*u.vx)/g;if(Math.abs(p)<1.1){let m=p>=0?1:-1;i+=u.vz/g*m*1.4,s+=-u.vx/g*m*1.4;break}}for(let u of b.puddles)if(u.team!==n.team){let d=n.x-u.x,f=n.z-u.z,g=Math.hypot(d,f);g<u.r+.5&&(i+=d/(g||1)*1.5,s+=f/(g||1)*1.5)}let l=Math.hypot(n.x-e.lx,n.z-e.lz);e.lx=n.x,e.lz=n.z,Math.hypot(i,s)>.3&&l<.01?e.stuck+=r:e.stuck=Math.max(0,e.stuck-r),e.stuck>.6&&(e.path=null,i+=O(-1,1),s+=O(-1,1),e.stuck>1.2&&(e.stuck=0));let h=Math.hypot(i,s);if(h>1&&(i/=h,s/=h),a.mx=i,a.mz=s,h>.1&&(a.aim=Math.atan2(i,s)),a.fire=a.sup=!1,t){let u=yi(n,t),d=o.attack,f=o.super,g=d.speed||d.range/(d.flight||.8),x=(d.kind==="lob"?d.flight*(.65+.35*u/d.range):u/g)*e.S.lead,p=t.x+t.vx*x,m=t.z+t.vz*x,v=e.S.err*(1+(t.inGrass?.5:0)),_=Math.atan2(p-n.x,m-n.z)+O(-v,v);p=n.x+Math.sin(_)*u,m=n.z+Math.cos(_)*u,a.aim=_,a.tx=p,a.tz=m;let y=Cu(n.x,n.z,t.x,t.z),P=e.seenT>e.S.react;if(P&&n.charge>=1&&(f.kind==="fan"&&u<f.range*.75&&y||f.kind==="barrage"&&u<f.range||f.kind==="beam"&&u<f.range*.9)&&(a.sup=!0),!a.sup&&P&&_s(n)){let S=u<d.range*(d.kind==="fan"?.85:d.kind==="lob"?1:.95),A=n.ammo>=2||u<d.range*.6||t.hp<t.max*.4;S&&(y||d.kind==="lob")&&A&&(a.fire=!0)}}else if(e.shootAt){let u=e.shootAt;a.aim=Math.atan2(u.x-n.x,u.z-n.z),a.tx=u.x,a.tz=u.z,_s(n)&&n.ammo>=1&&(a.fire=!0)}else if(n.hero==="beetle"&&_s(n)&&n.ammo>=2.5)for(let u of e.mem.values()){if(!u.o.alive||c-u.t>2.5||c-u.t<.4)continue;if(Math.hypot(u.x-n.x,u.z-n.z)<o.attack.range&&(Fc(u.x,u.z)||!zr(n.x,n.z,u.x,u.z))){a.aim=Math.atan2(u.x-n.x,u.z-n.z),a.tx=u.x,a.tz=u.z,a.fire=!0;break}}}var $r={goal:10,hold:15,interval:5,first:4,dur:180},Hn=null,c0=new ac(.2,0),GS=ut({color:"#B583FF",emissive:"#8A4DFF",emissiveIntensity:1.6,roughness:.2,flatShading:!0}),VS=new We({color:new oe("#E9D8FF").multiplyScalar(2),toneMapped:!1}),WS=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(0,0,0,.45)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new qn(n)})(),h0=new en(.7,.7);h0.rotateX(-Math.PI/2);var XS=new We({map:WS,transparent:!0,depthWrite:!1});function nd(){if(Hn&&(xe.remove(Hn.g),Hn=null),!B.mine)return;let n=new zt;n.position.set(B.mine.x,0,B.mine.z);let e=new de(new An(.95,1.35,.32,24),ut({color:"#6E5A3E",roughness:.95}));e.position.y=.12,e.receiveShadow=e.castShadow=!0,n.add(e);let t=new de(new wr(.95,.16,8,28),ut({color:"#5E9E3A",roughness:.9}));t.rotation.x=Math.PI/2,t.position.y=.27,n.add(t);let i=document.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d"),r=s.createRadialGradient(128,128,10,128,128,128);r.addColorStop(0,"#F4E8FF"),r.addColorStop(.25,"#B58AFF"),r.addColorStop(.6,"#5A2AB8"),r.addColorStop(.9,"#2A0F5A"),r.addColorStop(1,"#1A0A30"),s.fillStyle=r,s.fillRect(0,0,256,256),s.globalCompositeOperation="lighter";for(let g=0;g<5;g++){s.strokeStyle="rgba(200,160,255,.35)",s.lineWidth=6,s.beginPath();for(let x=0;x<2.6;x+=.05){let p=18+x*40;s.lineTo(128+Math.cos(x+g*1.256)*p,128+Math.sin(x+g*1.256)*p)}s.stroke()}let o=new qn(i);o.colorSpace=ct;let a=new We({map:o,color:"#FFFFFF"}),c=new de(new Tn(.78,32),a);c.rotation.x=-Math.PI/2,c.position.y=.29,n.add(c);let l=ut({color:"#F1E6FF",roughness:.6}),h=ut({color:"#B07BFF",emissive:"#7A3DFF",emissiveIntensity:.9,roughness:.4}),u=new An(.05,.07,1,8),d=new Yt(1,14,8,0,Pe,0,Math.PI/2),f=[];for(let g=0;g<9;g++){let x=g/9*Pe+O(-.15,.15),p=O(1.2,1.5),m=O(.25,.55),v=new de(u,l);v.scale.set(1,m,1),v.position.set(Math.cos(x)*p,m/2,Math.sin(x)*p),v.castShadow=!0,n.add(v);let _=new de(d,h);_.scale.set(O(.14,.22),O(.1,.16),O(.14,.22)),_.position.set(Math.cos(x)*p,m,Math.sin(x)*p),_.castShadow=!0,n.add(_),f.push(_)}xe.add(n),Hn={g:n,hole:c,holeMat:a,caps:f,pulse:0}}function u0(n,e,t,i,s=4){let r=new de(c0,GS);r.castShadow=!0;let o=new de(c0,VS);o.scale.setScalar(.5),r.add(o);let a=new de(h0,XS);a.renderOrder=1,xe.add(r,a),b.pickups.push({x:n,z:e,y:.5,vx:t,vz:i,vy:s,t:0,m:r,sh:a,landed:!1,ph:O(0,Pe)})}function d0(n){let e=b.pickups[n];xe.remove(e.m,e.sh),b.pickups.splice(n,1)}function id(){for(let n=b.pickups.length-1;n>=0;n--)d0(n)}function f0(){id(),b.match={mode:"spores",t:0,dur:$r.dur,over:!1,winner:null,respawn:!0,count:[0,0],cd:null,mineT:$r.first,hot:!1,spawned:0}}$t("kill",n=>{if(!b.match||b.match.mode!=="spores"||!n.gems)return;let e=n.gems;n.gems=0;for(let t=0;t<e;t++){let i=t/e*Pe+O(-.3,.3),s=O(1.5,3.2);u0(n.x,n.z,Math.sin(i)*s,Math.cos(i)*s,O(3,5))}Oe("gem_drop",n)});var Qo={x:0,z:0};function p0(n,e){let t=b.match;if(!t||t.mode!=="spores")return;if(Hn){Hn.pulse=Math.max(0,Hn.pulse-n*1.5);let r=.9+Math.sin(e*3)*.12+Hn.pulse*1.2;Hn.holeMat.color.setScalar(r),Hn.hole.rotation.z=e*.6,Math.random()<n*6&&It.emit({x:B.mine.x+O(-.5,.5),y:.35,z:B.mine.z+O(-.5,.5),vx:0,vy:O(.5,1.2),vz:0,life:1.1,t:0,s0:.1,s1:.02,r:.75,g:.55,b:1,a:1,grav:0,drag:.3,soft:1}),Hn.caps.forEach((o,a)=>{o.position.y+=Math.sin(e*2+a)*8e-4})}if(b.state==="play"&&!t.over&&(t.t+=n,t.mineT-=n,t.mineT<=0)){t.mineT=$r.interval,t.spawned++;let r=O(0,Pe),o=O(.8,2.2);u0(B.mine.x,B.mine.z,Math.sin(r)*o,Math.cos(r)*o,5.5),Hn&&(Hn.pulse=1),Lt(It,B.mine.x,.5,B.mine.z,{n:16,color:"#C9A0FF",sp:2.5,upMin:.5,vy:2,life:.7,s0:.25,s1:.04,soft:!0}),Hs(B.mine.x,B.mine.z,.5,2.2,.6,"#B583FF"),Oe("respawn",B.mine,.6)}for(let r=b.pickups.length-1;r>=0;r--){let o=b.pickups[r];o.t+=n,o.landed||(o.vy-=16*n,o.x+=o.vx*n,o.z+=o.vz*n,o.y+=o.vy*n,Qo.x=o.x,Qo.z=o.z,ks(Qo,.25)&&(o.x=Qo.x,o.z=Qo.z,o.vx*=-.4,o.vz*=-.4),o.y<.45&&(o.y=.45,Math.abs(o.vy)>2?(o.vy=-o.vy*.4,o.vx*=.6,o.vz*=.6):o.landed=!0));let a=o.landed?Math.sin(e*3+o.ph)*.08:0;if(o.m.position.set(o.x,o.y+a,o.z),o.m.rotation.y=e*2+o.ph,o.m.rotation.x=.3,o.sh.position.set(o.x,.04,o.z),Math.random()<n*3&&It.emit({x:o.x+O(-.2,.2),y:o.y,z:o.z+O(-.2,.2),vx:0,vy:.5,vz:0,life:.6,t:0,s0:.08,s1:.01,r:.75,g:.6,b:1,a:1,grav:0,drag:.5,soft:1}),!(o.t<.35||b.state!=="play")){for(let c of b.fighters)if(!(!c.alive||(c.x-o.x)**2+(c.z-o.z)**2>.85*.85)){c.gems++,d0(r),Lt(It,c.x,1,c.z,{n:10,color:"#C9A0FF",sp:2,vy:1.5,life:.4,s0:.16,s1:.02,soft:!0}),Oe("gem",c,c===b.me?1:.7,1+Math.min(10,c.gems)*.03),Pt("pickup",c);break}}}t.count[0]=t.count[1]=0;for(let r of b.fighters)r.alive&&(t.count[r.team]+=r.gems);if(t.over)return;let i=t.count,s=i[0]>=$r.goal&&i[0]>i[1]?0:i[1]>=$r.goal&&i[1]>i[0]?1:-1;if(s<0)t.cd&&(Pt("countdownStop",t.cd.team),t.cd=null);else if(!t.cd||t.cd.team!==s)t.cd={team:s,t:$r.hold},Pt("countdownStart",s);else if(b.state==="play"){let r=Math.ceil(t.cd.t);if(t.cd.t-=n,Math.ceil(t.cd.t)!==r&&t.cd.t>0&&Pt("countdownTick",Math.ceil(t.cd.t)),t.cd.t<=0)return l0(s,"spores")}t.hot=!!t.cd||t.dur-t.t<30,t.t>=t.dur&&!t.cd&&l0(i[0]>i[1]?0:i[1]>i[0]?1:-1,"time")}function l0(n,e){let t=b.match;t.over=!0,t.winner=n,t.why=e,Pt("matchOver",n,e)}var De={yaw:Math.PI,pitch:-.08,x:0,z:0,dist:3.5,pivotH:1.6,shoulder:.6,sens:Ut.get("sens",1),turnTo:null},qS=-.6,YS=.38,Gn={},Vi={l:!1,r:!1,x:0,y:0},Kr=!1,Ze={move:null,atk:null,sup:null,cam:null},_t={x:0,y:0,z:0,foe:null,inRange:!1,gx:0,gz:0,groundHit:!1};function sd(n,e,t){De.yaw-=n*t*De.sens,De.pitch=tt(De.pitch-e*t*De.sens,qS,YS),De.turnTo=null}addEventListener("keydown",n=>{Gn[n.code]=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&b.state!=="menu"&&n.preventDefault(),(n.code==="KeyE"||n.code==="Space")&&b.me&&(b.me.wantSup=!0)});addEventListener("keyup",n=>{Gn[n.code]=!1});addEventListener("blur",()=>{for(let n in Gn)Gn[n]=!1;Vi.l=Vi.r=!1});Ns.addEventListener("mousedown",n=>{if(Wr(),!Zt){if(rd()&&!Kr&&Ns.requestPointerLock)try{let e=Ns.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}n.button===0&&(Vi.l=!0),n.button===2&&b.me&&(b.me.wantSup=!0)}});addEventListener("mouseup",n=>{n.button===0&&(Vi.l=!1),n.button===2&&(Vi.r=!1)});Ns.addEventListener("contextmenu",n=>n.preventDefault());addEventListener("mousemove",n=>{(Kr||rd()&&!Zt)&&!b.paused&&sd(n.movementX,n.movementY,.0026),Vi.x=n.clientX,Vi.y=n.clientY});var x0=!1;document.addEventListener("pointerlockchange",()=>{Kr=document.pointerLockElement===Ns,Kr&&(x0=!0)});function _0(){let n=ee("lockhint"),e=!Kr&&!x0&&!Zt&&b.state==="play"&&b.match&&b.match.t<12&&b.me&&b.me.alive&&!b.paused&&!Vi.l;n.hidden===e&&(n.hidden=!e)}function Qc(){document.exitPointerLock&&Kr&&document.exitPointerLock()}var rd=()=>b.state==="play"||b.state==="countdown";function v0(n,e){let t=ee("stick");t.style.left=n+"px",t.style.top=e+"px",t.hidden=!1}function ZS(n){if(Wr(),!!rd()){for(let e of n.changedTouches){let t=e.target.closest&&e.target.closest("[data-btn]");if(t){let i=t.dataset.btn;(i==="atk"&&!Ze.atk||i==="sup"&&!Ze.sup&&b.me&&b.me.charge>=1)&&(Ze[i]={id:e.identifier,x:e.clientX,y:e.clientY,moved:0,t0:performance.now(),el:t},t.classList.add("on"));continue}e.clientX<innerWidth*.42&&!Ze.move?(Ze.move={id:e.identifier,x0:e.clientX,y0:e.clientY,dx:0,dy:0},v0(e.clientX,e.clientY)):Ze.cam||(Ze.cam={id:e.identifier,x:e.clientX,y:e.clientY})}n.preventDefault()}}var m0=.0055;function $S(n){for(let e of n.changedTouches){if(Ze.move&&e.identifier===Ze.move.id){let t=e.clientX-Ze.move.x0,i=e.clientY-Ze.move.y0,s=Math.hypot(t,i),r=56;s>r&&(Ze.move.x0+=t*(1-r/s),Ze.move.y0+=i*(1-r/s),t=e.clientX-Ze.move.x0,i=e.clientY-Ze.move.y0,v0(Ze.move.x0,Ze.move.y0)),Ze.move.dx=t/r,Ze.move.dy=i/r,ee("knob").style.transform=`translate(${t}px,${i}px)`;continue}if(Ze.cam&&e.identifier===Ze.cam.id){sd(e.clientX-Ze.cam.x,e.clientY-Ze.cam.y,m0),Ze.cam.x=e.clientX,Ze.cam.y=e.clientY;continue}for(let t of["atk","sup"]){let i=Ze[t];if(!i||e.identifier!==i.id)continue;let s=e.clientX-i.x,r=e.clientY-i.y;i.moved+=Math.abs(s)+Math.abs(r),sd(s,r,m0*.8),i.x=e.clientX,i.y=e.clientY}}n.preventDefault()}function y0(n){for(let e of n.changedTouches){Ze.move&&e.identifier===Ze.move.id&&(Ze.move=null,ee("stick").hidden=!0,ee("knob").style.transform=""),Ze.cam&&e.identifier===Ze.cam.id&&(Ze.cam=null);for(let t of["atk","sup"]){let i=Ze[t];if(!i||e.identifier!==i.id)continue;i.el.classList.remove("on");let s=b.me;if(s&&s.alive){let r=i.moved<14&&performance.now()-i.t0<350,o=r&&KS(t==="sup")||ea(s,t==="sup");s.inp.tx=o.x,s.inp.tz=o.z,t==="sup"?s.inp.sup=!0:s.inp.fire=!0,s.inp.locked=!0,r&&o.foe&&(De.turnTo=Math.atan2(o.x-s.x,o.z-s.z))}Ze[t]=null}}}document.addEventListener("touchstart",ZS,{passive:!1});document.addEventListener("touchmove",$S,{passive:!1});document.addEventListener("touchend",y0);document.addEventListener("touchcancel",y0);function KS(n){let e=b.me,t=n?e.H.super:e.H.attack,i=t.kind==="lob"||t.kind==="barrage"||t.kind==="beam",s=null,r=1e9;for(let c of b.fighters){if(!c.alive||c.team===e.team||!Zr(e,c))continue;let l=Math.hypot(c.x-e.x,c.z-e.z);if(l>t.range*1.15)continue;let h=Math.abs(Cr(De.yaw,Math.atan2(c.x-e.x,c.z-e.z))),u=!i&&Ln(e.x,e.z,c.x,c.z)>=0,d=l+h*4+(u?10:0);d<r&&(r=d,s=c)}if(!s)return null;let o=Math.hypot(s.x-e.x,s.z-e.z),a=t.kind==="lob"||t.kind==="barrage"?t.flight*.8:o/(t.speed||40);return{x:s.x+s.vx*a*.7,z:s.z+s.vz*a*.7,foe:s}}function ea(n,e){let t=e?n.H.super:n.H.attack;if(t.kind==="lob"||t.kind==="barrage"){let i=Math.atan2(_t.gx-n.x,_t.gz-n.z),s=_t.groundHit?tt(Math.hypot(_t.gx-n.x,_t.gz-n.z),1.5,t.range):t.range;return{x:n.x+Math.sin(i)*s,z:n.z+Math.cos(i)*s}}return{x:_t.x,z:_t.z}}var vs=new C;function JS(n){let e=at.position,t=vs;_t.groundHit=t.y<-.01;let i=_t.groundHit?(e.y-.05)/-t.y:40;_t.gx=e.x+t.x*Math.min(i,40),_t.gz=e.z+t.z*Math.min(i,40);let s=Math.min(i,40);for(let a=.6;a<s;a+=.2){let c=e.x+t.x*a,l=e.y+t.y*a,h=e.z+t.z*a;if(l<nm(Bs(c,h))){s=a;break}}_t.foe=null;let r=Math.hypot(t.x,t.z)||1e-6;for(let a of b.fighters){if(!a.alive||a.team===n.team||!a.seen)continue;let c=a.x-e.x,l=a.z-e.z,h=(c*t.x+l*t.z)/(r*r);if(h<=0||h>=s)continue;let u=e.x+t.x*h-a.x,d=e.z+t.z*h-a.z,f=e.y+t.y*h;u*u+d*d<(a.H.rad+.15)**2&&f>-.2&&f<a.H.height+(a.H.hover||0)+.3&&(s=h,_t.foe=a)}_t.x=e.x+t.x*s,_t.y=e.y+t.y*s,_t.z=e.z+t.z*s,Math.hypot(_t.x-n.x,_t.z-n.z)<1.2&&(_t.x=n.x+Math.sin(De.yaw)*8,_t.z=n.z+Math.cos(De.yaw)*8);let o=n.H.attack;_t.inRange=!!_t.foe&&Math.hypot(_t.foe.x-n.x,_t.foe.z-n.z)<o.range+.5}function M0(n){let e=b.me;if(!e)return;let t=e.inp,i=0,s=0;Ze.move?(i=-Ze.move.dy,s=Ze.move.dx):(i=(Gn.KeyW||Gn.ArrowUp?1:0)-(Gn.KeyS||Gn.ArrowDown?1:0),s=(Gn.KeyD||Gn.ArrowRight?1:0)-(Gn.KeyA||Gn.ArrowLeft?1:0));let r=Math.hypot(i,s);r>1&&(i/=r,s/=r);let o=Math.sin(De.yaw),a=Math.cos(De.yaw);if(t.mx=o*i-a*s,t.mz=a*i+o*s,De.turnTo!==null){let c=Cr(De.yaw,De.turnTo);De.yaw+=c*Math.min(1,n*8),Math.abs(c)<.02&&(De.turnTo=null)}if(JS(e),!t.locked){let c=ea(e,!1);t.tx=c.x,t.tz=c.z}if(t.locked=!1,t.aim=Math.atan2(t.tx-e.x,t.tz-e.z),e.aiming=!0,!Zt){if(Vi.l&&_s(e)){let c=ea(e,!1);t.tx=c.x,t.tz=c.z,t.fire=!0}if(e.wantSup&&(e.wantSup=!1,e.charge>=1)){let c=ea(e,!0);t.tx=c.x,t.tz=c.z,t.sup=!0}}}var g0=new C;function b0(n){let e=b.me;if(!e)return;let t=1-Math.exp(-n*14);De.x=Rn(De.x,e.x,t),De.z=Rn(De.z,e.z,t);let i=Math.sin(De.yaw),s=Math.cos(De.yaw),r=Math.cos(De.pitch),o=Math.sin(De.pitch);vs.set(i*r,o,s*r);let a=-s,c=i,l=De.x+a*De.shoulder*.4,h=De.z+c*De.shoulder*.4,u=De.pivotH,d=De.dist,f=l-vs.x*d+a*De.shoulder,g=h-vs.z*d+c*De.shoulder,x=Ln(l,h,f,g,Vo),p=f,m=g,v=u-vs.y*d+.25;if(x>=0&&v<Xo+.2){let _=Math.max(.15,x-.08);p=l+(f-l)*_,m=h+(g-h)*_,v=u+(v-u)*_}if(v=Math.max(.35,v),b.shake>0){let _=b.shake*.12;p+=(Math.random()-.5)*_,v+=(Math.random()-.5)*_,m+=(Math.random()-.5)*_,b.shake=Math.max(0,b.shake-n*2.5)}at.position.set(p,v,m),g0.set(p+vs.x*10,v+vs.y*10,m+vs.z*10),at.lookAt(g0)}var Jr=new zt;Jr.visible=!1;xe.add(Jr);var od=new We({color:"#FFFFFF",transparent:!0,opacity:.75,depthWrite:!1,depthTest:!1}),jS=new We({color:"#FFD23F",transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1}),S0=new ss(.86,1,40);S0.rotateX(-Math.PI/2);var ta=new de(S0,od);ta.renderOrder=6;Jr.add(ta);var QS=new Yt(.06,8,6),jc=[];for(let n=0;n<16;n++){let e=new de(QS,od);e.renderOrder=6,Jr.add(e),jc.push(e)}function E0(){let n=b.me,e=n&&n.alive&&b.state==="play"&&(!Zt||Ze.atk||Ze.sup),t=Zt?!!Ze.sup:n&&n.charge>=1&&Gn.KeyE,i=n&&(t?n.H.super:n.H.attack),s=i&&(i.kind==="lob"||i.kind==="barrage");if(Jr.visible=!!(e&&s),!Jr.visible)return;let r=t?jS:od;r.opacity=_s(n)||t?.8:.3,ta.material=r,jc.forEach(l=>l.material=r);let o=ea(n,t),a=Math.hypot(o.x-n.x,o.z-n.z),c=3.2+a*.2;ta.position.set(o.x,.07,o.z),ta.scale.setScalar(i.radius),jc.forEach((l,h)=>{let u=(h+1)/(jc.length+1);l.position.set(Rn(n.x,o.x,u),Rn(1,.15,u)+Math.sin(u*Math.PI)*c,Rn(n.z,o.z,u))})}var jr=new C,R0='<span class="gem-ico"></span>';function cd(n){let e=document.createElement("div");e.className="tag "+Xr(n),e.innerHTML=`<div class="gm" hidden>${R0}<b></b></div><div class="tn">${tn(n.name)}</div><div class="hpb"><s></s><u></u><b></b></div>`+(n===b.me?'<div class="am">'+"<i><u></u></i>".repeat(Jn)+"</div>":"")+'<i class="sup"></i><i class="spot">!</i>',ee("hud-world").appendChild(e),n.tag={el:e,gm:e.querySelector(".gm"),gmb:e.querySelector(".gm b"),u:e.querySelector(".hpb u"),s:e.querySelector(".hpb s"),b:e.querySelector(".hpb b"),am:[...e.querySelectorAll(".am i")],last:{}}}function C0(){let n=innerWidth,e=innerHeight;for(let t of b.fighters){let i=t.tag;if(!i)continue;if(!(t.alive&&t.seen&&b.state!=="menu"&&ee("end").hidden&&t!==b.me)){i.last.vis!==!1&&(i.el.style.display="none",i.last.vis=!1);continue}if(jr.set(t.V.root.position.x,t.H.height+(t.H.hover||0)+.45,t.V.root.position.z).project(at),jr.z>1||Math.abs(jr.x)>1.2||Math.abs(jr.y)>1.2){i.last.vis!==!1&&(i.el.style.display="none",i.last.vis=!1);continue}i.last.vis!==!0&&(i.el.style.display="",i.last.vis=!0);let r=at.position.distanceTo(t.V.root.position),o=Math.max(.5,Math.min(1.05,7/r));i.el.style.transform=`translate(${((jr.x*.5+.5)*n).toFixed(1)}px,${((-jr.y*.5+.5)*e).toFixed(1)}px) translate(-50%,-100%) scale(${o.toFixed(2)})`;let a=b.me&&t.team!==b.me.team&&Ku(b.me.team,t)&&!zr(b.me.x,b.me.z,t.x,t.z);i.last.sp!==a&&(i.el.classList.toggle("spotted",a),i.last.sp=a);let c=Math.max(0,Math.ceil(t.hp)),l=(c/t.max*100).toFixed(1)+"%";i.last.hp!==c&&(i.u.style.width=l,i.s.style.width=l,i.b.textContent=c,i.last.hp=c);let h=b.match&&b.match.mode==="br"?t.power||0:t.gems;i.last.gems!==h&&(i.gm.hidden=!h,i.gmb.textContent=h,i.last.gems=h);let u=t.charge>=1;i.last.ready!==u&&(i.el.classList.toggle("ready",u),i.last.ready=u),i.am.length&&i.am.forEach((d,f)=>{let g=tt(t.ammo-f,0,1);d.firstChild.style.width=(g*100).toFixed(0)+"%",d.classList.toggle("full",g>=1)})}}var w0=n=>(n=Math.max(0,Math.ceil(n)),Math.floor(n/60)+":"+String(n%60).padStart(2,"0")),ad=null;function tl(){let n=b.match,e=b.me;if(!n||!e)return;let t=e.team,i=n.mode==="br";if(i){ys("sc0",n.alive),ys("sc1",e.power||0);let g=nn.wait-n.t;ys("timer",g>0?w0(g):"\u2601"),ys("mode-lbl",Ct(g>0?"\u0422\u0443\u043C\u0430\u043D":n.fog.r>nn.r1?"\u0422\u0443\u043C\u0430\u043D \u0438\u0434\u0451\u0442":"\u0424\u0438\u043D\u0430\u043B"))}else ys("sc0",n.count[t]),ys("sc1",n.count[1-t]),ys("timer",w0(n.dur-n.t)),ys("mode-lbl",Ct("\u0421\u043F\u043E\u0440\u044B"));let s=ee("cdown");if(n.cd&&!n.over&&!i){s.hidden=!1;let g=n.cd.team===t,x=Math.ceil(n.cd.t);s.classList.toggle("foe",!g),x!==ad&&(ee("cd-n").textContent=x,s.classList.remove("pulse"),s.offsetWidth,s.classList.add("pulse"),ad=x),ee("cd-t").textContent=g?Ct("\u0414\u0435\u0440\u0436\u0438\u043C \u0441\u043F\u043E\u0440\u044B!"):Ct("\u0412\u0440\u0430\u0433 \u0443\u043D\u043E\u0441\u0438\u0442 \u0441\u043F\u043E\u0440\u044B!")}else s.hidden=!0,ad=null;let r=e.charge,o=r>=1;ee("sp-ring").style.strokeDashoffset=(214*(1-r)).toFixed(1),ee("superpc").classList.toggle("ready",o),ee("tsp-ring").style.strokeDashoffset=(277*(1-r)).toFixed(1),ee("b-sup").classList.toggle("ready",o);let a=ee("ammopc").children;for(let g=0;g<a.length;g++){let x=tt(e.ammo-g,0,1);a[g].firstChild.style.width=(x*100).toFixed(0)+"%",a[g].classList.toggle("full",x>=1)}e1(e);let c=Math.max(0,Math.ceil(e.hp)),l=c+"/"+e.id;tl.hp!==l&&(tl.hp=l,ee("mehp").firstChild.style.width=(c/e.max*100).toFixed(1)+"%",ee("mehp").lastChild.textContent=c);let u="xhair "+(_t.foe?_t.inRange?"foe":"far":"")+(e.ammo<1?" empty":"")+(e.H.attack.kind==="lob"?" lob":""),d=ee("xhair");d.className!==u&&(d.className=u),d.hidden=!e.alive;let f=ee("dead");!e.alive&&!n.over&&n.respawn?(f.hidden=!1,ee("dead-n").textContent=Math.max(1,Math.ceil(e.respawnT))):f.hidden=!0}var T0={};function ys(n,e){e=String(e),T0[n]!==e&&(T0[n]=e,ee(n).textContent=e)}function e1(n){if(!Zt)return;let e=ee("tammo");if(!e.childElementCount){let t="";for(let i=0;i<Jn;i++)t+=`<path class="tammo-seg" stroke="rgba(0,0,0,.35)" d="${A0(i)}"/><path class="tammo-seg" id="tam${i}" stroke="#FFC93C" d="${A0(i)}"/>`;e.innerHTML=t}for(let t=0;t<Jn;t++){let i=tt(n.ammo-t,0,1),s=ee("tam"+t),r=s._len||(s._len=s.getTotalLength());s.style.strokeDasharray=r,s.style.strokeDashoffset=(r*(1-i)).toFixed(1),s.setAttribute("stroke",i>=1?"#FFC93C":"#FF8A3D")}}function A0(n){let s=-Math.PI/2+n/Jn*Math.PI*2+.12,r=-Math.PI/2+(n+1)/Jn*Math.PI*2-.12;return`M${(60+Math.cos(s)*54).toFixed(1)} ${(60+Math.sin(s)*54).toFixed(1)}A54 54 0 0 1 ${(60+Math.cos(r)*54).toFixed(1)} ${(60+Math.sin(r)*54).toFixed(1)}`}function ld(n,e){let t=document.createElement("div");t.className=e||"",t.innerHTML=n;let i=ee("feed");for(i.appendChild(t);i.children.length>4;)i.firstChild.remove();setTimeout(()=>t.remove(),4200)}var el=0;function ei(n,e,t,i=1.8){let s=ee("ann");s.className="ann "+(t||""),s.innerHTML="<b>"+tn(Ct(n))+"</b>"+(e?"<span>"+tn(Ct(e))+"</span>":""),s.offsetWidth,s.classList.add("show"),s.style.opacity=1,el=i}function P0(n){el>0&&(el-=n,el<=0&&(ee("ann").style.opacity=0))}function L0(n,e){let t=ee("heroes");t.innerHTML=Hi.map(o=>{let a=li[o];return`<button class="hcard${o===n?" sel":""}" data-h="${o}">${Bc[o]}<b>${tn(a.name)}</b><small>${tn(a.role)}</small></button>`}).join("");for(let o of t.querySelectorAll(".hcard"))o.onclick=()=>e(o.dataset.h);let i=li[n],s=(o,a,c,l)=>`<div class="stat"><span>${o}</span><i><u style="width:${tt(a/c*100,6,100).toFixed(0)}%"></u></i><em>${l}</em></div>`,r=i.attack.kind==="fan"?i.attack.dmg*i.attack.count:i.attack.kind==="needle"?i.attack.dmgFar:i.attack.dmg;ee("hero-info").innerHTML=`<h3>${tn(i.name)}</h3><div class="sub">${tn(i.species)} \xB7 ${tn(i.role)}</div><p>${tn(i.desc)}</p>`+s("\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435",i.hp,4200,i.hp)+s("\u0423\u0440\u043E\u043D",r,1600,Math.round(r))+s("\u0414\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",i.attack.range,15,i.attack.range.toFixed(0)+" \u043C")+s("\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",i.speed-3.5,2,i.speed.toFixed(1))+`<div class="abil"><span class="k">\u2694</span><div><b>${tn(i.attack.name)}</b><small>${tn(t1(i.attack))}</small></div></div><div class="abil"><span class="k s">\u2605</span><div><b>${tn(i.super.name)}</b><small>${tn(i.super.desc)}</small></div></div>`}function t1(n){return n.kind==="fan"?n.count+" \u0441\u043F\u043E\u0440 \u0432\u0435\u0435\u0440\u043E\u043C":n.kind==="lob"?"\u0431\u043E\u043C\u0431\u0430 \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0435\u043D\u044B, \u0433\u043E\u0440\u044F\u0449\u0430\u044F \u043B\u0443\u0436\u0430":"\u0434\u0430\u043B\u044C\u043D\u0438\u0439 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u0443\u0440\u043E\u043D \u0440\u0430\u0441\u0442\u0451\u0442 \u0441 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C"}function I0(n){let e=b.me,t=b.match;if(t.mode==="br")return n1(n);ee("e-board").classList.remove("br");let i=ee("e-title");i.textContent=Ct(n==="win"?"\u041F\u043E\u0431\u0435\u0434\u0430!":n==="lose"?"\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435":"\u041D\u0438\u0447\u044C\u044F"),i.className=n,ee("e-sub").textContent=Ct(t.why==="spores"?t.winner===e.team?"\u0422\u0432\u043E\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0430 \u0441\u043F\u043E\u0440\u044B.":"\u0412\u0440\u0430\u0433\u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043B\u0438 \u0441\u043F\u043E\u0440\u044B.":"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E: ")+(t.why==="time"?t.count[e.team]+" : "+t.count[1-e.team]:"");let s=a=>a.kills*3+a.dmgDone/1500+(a.gemsPicked||0)*.6,r=[...b.fighters].sort((a,c)=>s(c)-s(a))[0],o=[...b.fighters].sort((a,c)=>(a.team===e.team?0:1)-(c.team===e.team?0:1)||s(c)-s(a));ee("e-board").innerHTML=o.map(a=>`<tr class="t${a.team===e.team?0:1}${a===e?" me":""}"><td>${Bc[a.hero]}</td><td>${tn(a.name)}${a===r?'<span class="mvp">MVP</span>':""}</td><td>\u2694 ${a.kills}</td><td>\u2620 ${a.deaths}</td><td>${R0} ${a.gemsPicked||0}</td><td>${Math.round(a.dmgDone)}</td></tr>`).join(""),ee("end").hidden=!1}function n1(n){let e=b.me,t=b.match,i=ee("e-title"),s=c=>kn.lang==="en"?"#"+c+" place":"#"+c+" \u043C\u0435\u0441\u0442\u043E";i.textContent=n==="win"?Ct("\u041F\u043E\u0431\u0435\u0434\u0430!"):s(t.place),i.className=t.place<=3?"win":"lose";let r=e.lastHitBy;ee("e-sub").textContent=n==="win"?Ct("\u0422\u044B \u2014 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431!"):r&&r!==e?Ct("\u0422\u0435\u0431\u044F \u0441\u0440\u0435\u0437\u0430\u043B: ")+r.name:Ct("\u0422\u0435\u0431\u044F \u043D\u0430\u043A\u0440\u044B\u043B \u044F\u0434\u043E\u0432\u0438\u0442\u044B\u0439 \u0442\u0443\u043C\u0430\u043D.");let o=[...b.fighters].sort((c,l)=>(c.place||0)-(l.place||0)||l.kills-c.kills),a='<span class="gem-ico gold"></span>';ee("e-board").classList.add("br"),ee("e-board").innerHTML=o.map(c=>`<tr class="t${c===e?0:1}${c===e?" me":""}${c.alive?"":" out"}"><td class="pl">${c.place?"#"+c.place:"\u2014"}</td><td>${Bc[c.hero]}</td><td>${tn(c.name)}</td><td>\u2694 ${c.kills}</td><td>${a} ${c.power||0}</td><td>${Math.round(c.dmgDone)}</td></tr>`).join(""),ee("end").hidden=!1}var sn={sdk:null,ready:!1,adOn:!1,playing:!1},hd=()=>!!window.YaGames;async function D0(){if(hd())try{sn.sdk=await window.YaGames.init();try{let n=sn.sdk.environment.i18n.lang;n&&Oc(Nc(n))}catch{}}catch{}}function F0(){if(sn.sdk&&!sn.ready){sn.ready=!0;try{sn.sdk.features.LoadingAPI.ready()}catch{}}}function U0(){if(!sn.sdk)return;let n=!sn.adOn&&!b.paused&&!document.hidden&&(b.state==="play"||b.state==="countdown");if(n!==sn.playing){sn.playing=n;try{let e=sn.sdk.features.GameplayAPI;n?e.start():e.stop()}catch{}}}function i1(){if(sn.adOn=!0,Te.ad=!0,Yc(!0),document.exitPointerLock)try{document.exitPointerLock()}catch{}}function s1(){sn.adOn=!1,Te.ad=!1,document.hidden||Yc(!1)}function ud(n){if(!sn.sdk){n&&n();return}let e=!1,t=()=>{e||(e=!0,s1(),n&&n())};try{sn.sdk.adv.showFullscreenAdv({callbacks:{onOpen:i1,onClose:t,onError:t,onOffline:t}})}catch{t()}}addEventListener("visibilitychange",()=>{sn.adOn||Yc(document.hidden)});var rn={hero:li[Ut.get("hero","shroom")]?Ut.get("hero","shroom"):"shroom",diff:Ut.get("diff","normal"),mode:Ut.get("mode","spores")==="br"?"br":"spores"},r1=n=>kn.lang==="en"?`#${n} place`:`#${n} \u043C\u0435\u0441\u0442\u043E`,k0=["\u0413\u0440\u0443\u0437\u0434\u044C","\u041E\u043F\u0451\u043D\u043E\u043A","\u0421\u043C\u043E\u0440\u0447\u043E\u043A","\u0420\u044B\u0436\u0438\u043A","\u041C\u0430\u0441\u043B\u0451\u043D\u043E\u043A","\u0412\u043E\u043B\u043D\u0443\u0448\u043A\u0430","\u0421\u0442\u0440\u043E\u0447\u043E\u043A","\u0411\u0435\u043B\u044F\u043D\u043A\u0430","\u0415\u0436\u043E\u0432\u0438\u043A","\u0414\u0443\u0431\u043E\u0432\u0438\u043A","\u0412\u0435\u0448\u0435\u043D\u043A\u0430","\u041A\u043E\u0440\u043E\u0435\u0434","\u0428\u0435\u0440\u0448\u0435\u043D\u044C","\u0416\u0443\u0436\u0435\u043B\u0438\u0446\u0430","\u0429\u0435\u043B\u043A\u0443\u043D","\u0421\u0432\u0435\u0442\u043B\u044F\u0447\u043E\u043A","\u041C\u0435\u0434\u0432\u0435\u0434\u043A\u0430","\u0414\u043E\u043B\u0433\u043E\u043D\u043E\u0441\u0438\u043A"];hd()?await D0():Oc();var H0=n=>{ee("load-bar").style.width=Math.round(n*100)+"%"};await Promise.all([jp(n=>H0(n*.85)),bm()]);H0(.92);zp();Bp();Du("glade");nd();Vp();addEventListener("resize",Ir);{let n=o0().concat(Vm());n.forEach(e=>xe.add(e)),Xc(0,0,1.7),Gr(0,1,0,"#fff"),Vr(0,1,0,"#fff",4);for(let e of Hi){let t=$o(e);xe.add(t.root),n.push(t.root)}try{Rt.compile(xe,at)}catch{}n.forEach(e=>xe.remove(e)),Hu(),b.shake=0}ee("load").hidden=!0;var ti=null;function G0(n){ti&&(xe.remove(ti.V.root),ti.V.mesh.geometry.dispose());let e=$o(n);kc(e,"me"),xe.add(e.root);let t=B.map.id==="maze"?{x:0,z:1.2}:B.spawns[0][1];ti={V:e,hop:1.2,f:{id:99,x:t.x,z:t.z-1.2,vx:0,vz:0,aim:Math.PI,alive:!0,atkT:9,supT:0,flash:0,deadT:0,victory:!1}},e.yaw=Math.PI,gs.spawn(e)}function il(){L0(rn.hero,n=>{rn.hero=n,Ut.set("hero",n),Oe("select"),il(),G0(n)});for(let n of ee("m-diff").querySelectorAll("button"))n.classList.toggle("sel",n.dataset.v===rn.diff);for(let n of ee("m-mode").querySelectorAll(".mode-card"))n.classList.toggle("sel",n.dataset.v===rn.mode);ee("howto").textContent=Ct(Zt?"\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0431\u0435\u0433, \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043A\u0430\u043C\u0435\u0440\u044B. \u041A\u043D\u043E\u043F\u043A\u0430 \u0430\u0442\u0430\u043A\u0438: \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u2014 \u0430\u0432\u0442\u043E\u043F\u0440\u0438\u0446\u0435\u043B, \u0441 \u043F\u0440\u043E\u0442\u044F\u0436\u043A\u043E\u0439 \u2014 \u0446\u0435\u043B\u0438\u0448\u044C\u0441\u044F \u0441\u0430\u043C. \u0417\u0432\u0435\u0437\u0434\u0430 \u2014 \u0441\u0443\u043F\u0435\u0440.":"WASD \u2014 \u0431\u0435\u0433, \u043C\u044B\u0448\u044C \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \u0438 \u043F\u0440\u0438\u0446\u0435\u043B, \u041B\u041A\u041C \u2014 \u0430\u0442\u0430\u043A\u0430, \u041F\u041A\u041C \u0438\u043B\u0438 E \u2014 \u0441\u0443\u043F\u0435\u0440, Esc \u2014 \u043F\u0430\u0443\u0437\u0430.")}ee("m-mode").onclick=n=>{let e=n.target.closest(".mode-card");!e||e.dataset.v===rn.mode||(rn.mode=e.dataset.v,Ut.set("mode",rn.mode),Oe("select"),il())};ee("m-diff").onclick=n=>{let e=n.target.dataset.v;e&&(rn.diff=e,Ut.set("diff",e),Oe("click"),il())};var ia={fps:Ut.get("fps",!1)};function sl(){for(let n of ee("s-gfx").querySelectorAll("button"))n.classList.toggle("sel",n.dataset.v===le.level);for(let n of ee("s-fps").querySelectorAll("button"))n.classList.toggle("sel",n.dataset.v==="1"===ia.fps);for(let n of ee("s-snd").querySelectorAll("button")){let e=n.dataset.v==="sfx"?Te.sfxOn:Te.musicOn;n.classList.toggle("sel",e),n.classList.toggle("off",!e)}ee("s-sens").value=De.sens,ee("s-sens-v").textContent=(+De.sens).toFixed(2),ee("fps").hidden=!ia.fps}function V0(n){ee("s-gfx-row").hidden=ee("s-gfx-note").hidden=!!n,sl(),ee("settings").hidden=!1,Oe("click")}ee("m-set").onclick=()=>V0(!1);ee("p-set").onclick=()=>V0(!0);ee("s-close").onclick=()=>{ee("settings").hidden=!0,Oe("click")};ee("s-gfx").onclick=n=>{let e=n.target.dataset.v;!e||e===le.level||(Gp(e),Oe("click"),setTimeout(()=>location.reload(),150))};ee("s-fps").onclick=n=>{let e=n.target.dataset.v;e!==void 0&&(ia.fps=e==="1",Ut.set("fps",ia.fps),Oe("click"),sl())};ee("s-snd").onclick=n=>{let e=n.target.dataset.v;e&&(Wr(),e==="sfx"?Sm(!Te.sfxOn):Em(!Te.musicOn),Oe("click"),sl())};ee("s-sens").oninput=n=>{De.sens=+n.target.value,Ut.set("sens",De.sens),ee("s-sens-v").textContent=De.sens.toFixed(2)};sl();var N0=-1;function o1(){if(!ia.fps||le.fps===N0)return;N0=le.fps;let n=ee("fps");n.textContent=le.fps+" FPS",n.className="fps"+(le.fps<30?" bad":le.fps<50?" mid":"")}ee("play").onclick=()=>{Wr(),Oe("confirm"),md()};function rl(){b.state="menu",b.paused=!1,W0(),ee("menu").hidden=!1,ee("hud").hidden=!0,ee("end").hidden=!0,ee("pause").hidden=!0,il(),G0(rn.hero)}function W0(){$m(),id(),Om(),Hu();for(let n of b.shots)xe.remove(n.m);b.shots.length=0;for(let n of b.lobs)xe.remove(n.m),xe.remove(n.mark);b.lobs.length=0;for(let n of b.puddles)xe.remove(n.m);b.puddles.length=0;for(let n of b.beams)xe.remove(n.core),xe.remove(n.outer);b.beams.length=0,b.match=null}var na=0,Vs=0,fd=0;function X0(n){B.map.id!==n?(Du(n),nd()):am()}function md(n={}){W0(),ti&&(xe.remove(ti.V.root),ti=null);let e=b.mode=n.mode||rn.mode;if(document.body.classList.toggle("br",e==="br"),e==="br")return a1(n);X0("glade"),f0();let t=Pr([...k0]),i=n.hero||rn.hero,s=Pr(Hi.filter(a=>a!==i)).concat(Hi).slice(0,2),r=Pr([...Hi]),o=[s[0],i,s[1]];for(let a=0;a<2;a++)for(let c=0;c<3;c++){let l=a===0&&c===1,h=a===0?o[c]:r[c],u=$u({name:l?Ct("\u0422\u044B"):Ct(t.pop()),team:a,hero:h,isMe:l});u.slot=c,u.gemsPicked=0,l?b.me=u:u.bot=Jc(n.diff||rn.diff)}for(let a of b.fighters)cd(a),jo(a);q0("\u0421\u043F\u043E\u0440\u044B","\u0421\u043E\u0431\u0435\u0440\u0438 10 \u0441\u043F\u043E\u0440 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438 \u0438\u0445 15 \u0441\u0435\u043A\u0443\u043D\u0434")}function a1(n){X0("maze"),Nm(),pd=0;let e=Pr([...k0]),t=n.hero||rn.hero,i=Pr(B.spawns.ffa.map((s,r)=>r));for(let s=0;s<nn.fighters;s++){let r=s===0,o=$u({name:r?Ct("\u0422\u044B"):Ct(e.pop()),team:s,hero:r?t:Hi[Math.floor(Math.random()*Hi.length)],isMe:r});o.slot=i[s%i.length],o.gemsPicked=0,r?b.me=o:o.bot=Jc(n.diff||rn.diff)}for(let s of b.fighters)cd(s),jo(s);q0("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431","\u041E\u0441\u0442\u0430\u043D\u044C\u0441\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C! \u041B\u043E\u043C\u0430\u0439 \u044F\u0449\u0438\u043A\u0438 \u2014 \u0432 \u043D\u0438\u0445 \u0441\u0438\u043B\u0430")}function q0(n,e){let t=b.me;De.yaw=t.aim,De.x=t.x,De.z=t.z,De.pitch=-.08,b.state="countdown",na=3.2,fd=4,Vs=0,ee("menu").hidden=!0,ee("end").hidden=!0,ee("hud").hidden=!1,ee("touch").hidden=!Zt,ee("superpc").hidden=Zt,ee("ammopc").hidden=Zt,document.body.classList.toggle("touch-on",Zt),ee("lockhint").hidden=Zt;let i=b.mode==="br";ee("ico0").className=i?"shroom-ico":"gem-ico",ee("ico1").className=i?"gem-ico gold":"gem-ico",ei(n,e,"sun",2.4)}function c1(n){na-=n;let e=Math.ceil(na);e!==fd&&e>=1&&e<=3&&(fd=e,ei(String(e),"","sun",.8),Oe("countdown")),na<=0&&(b.state="play",ei("\u0412 \u0431\u043E\u0439!","","sun",1),Oe("start"))}function Y0(n){let e=n.V.yaw,t=-1e9;b.endDist=4.6;for(let i=0;i<16;i++){let s=(i%2?1:-1)*Math.ceil(i/2)*Pe/16,r=n.V.yaw+s,o=Ln(n.x,n.z,n.x+Math.sin(r)*5,n.z+Math.cos(r)*5,Vo),a=o<0?5:o*5,c=a-Math.abs(s)*.35;if(c>t&&(t=c,e=r,b.endDist=Math.max(1.8,Math.min(4.6,a-.4))),a>=5&&Math.abs(s)<1.3)break}return e}function l1(){b.state="end",Vs=0;let n=b.me,e=b.match,t=e.place===1;b.result=t?"win":"lose";for(let s of b.fighters)s.inp.mx=s.inp.mz=0,s.inp.fire=s.inp.sup=!1;let i=n.lastHitBy;b.endFocus=t?n:i&&i.alive?i:b.fighters.filter(s=>s.alive).sort((s,r)=>r.kills-s.kills)[0]||n,b.endYaw=Y0(b.endFocus),t&&(n.victory=!0,n.aim=b.endYaw),ei(t?"\u041F\u043E\u0431\u0435\u0434\u0430!":r1(e.place),t?"\u0422\u044B \u2014 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0433\u0440\u0438\u0431!":"",t?"sun":"foe",2.2),Oe(t?"win":"lose"),Qc()}function h1(n){if(b.match&&b.match.mode==="br")return l1();b.state="end",Vs=0;let e=b.me,t=n<0?"draw":n===e.team?"win":"lose";b.result=t;for(let s of b.fighters)n>=0&&s.team===n?(s.alive||jo(s,{x:s.x,z:s.z}),s.victory=!0):n>=0&&(s.defeat=!0),s.inp.mx=s.inp.mz=0;let i=s=>s.kills*3+s.dmgDone/1500+(s.gemsPicked||0)*.6;b.endFocus=n<0||n===e.team?e:b.fighters.filter(s=>s.team===n).sort((s,r)=>i(r)-i(s))[0],b.endYaw=Y0(b.endFocus);for(let s of b.fighters)s.victory&&(s.aim=b.endYaw);ei(t==="win"?"\u041F\u043E\u0431\u0435\u0434\u0430!":t==="lose"?"\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435":"\u041D\u0438\u0447\u044C\u044F","",t==="win"?"sun":t==="lose"?"foe":"ally",2.2),Oe(t==="lose"?"lose":"win"),Qc()}ee("e-again").onclick=()=>{Oe("confirm"),ud(()=>md())};ee("e-menu").onclick=()=>{Oe("click"),ud(rl)};var dd=n=>`<b style="color:${n===b.me?"var(--sun)":n.team===b.me.team?"var(--ally)":"var(--foe)"}">${tn(n.name)}</b>`;$t("kill",(n,e)=>{b.me&&(e&&e!==n?ld(dd(e)+" \u2694 "+dd(n),e===b.me?"m":e.team===b.me.team?"a":"f"):e||ld("\u2601 "+dd(n),"f"),b.match&&b.match.mode==="br"&&n!==b.me&&!b.match.over&&b.me.alive&&u1(),b.state!=="end"&&(e===b.me&&n!==b.me&&(ei("\u0421\u0440\u0435\u0437\u0430\u043B!",n.name,"sun",1.1),Oe("kill")),n===b.me&&ei("\u0422\u0435\u0431\u044F \u0441\u0440\u0435\u0437\u0430\u043B\u0438",e?e.name:"","foe",1.6)))});$t("pickup",n=>{n.gemsPicked=(n.gemsPicked||0)+1});$t("countdownStart",n=>{let e=n===b.me.team;ei(e?"\u0421\u043F\u043E\u0440\u044B \u0443 \u043D\u0430\u0441!":"\u0412\u0440\u0430\u0433 \u043D\u0430\u0431\u0440\u0430\u043B \u0441\u043F\u043E\u0440\u044B!",e?"\u0414\u0435\u0440\u0436\u0438\u0442\u0435\u0441\u044C 15 \u0441\u0435\u043A\u0443\u043D\u0434":"\u041E\u0442\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0445!",e?"ally":"foe",1.8),Oe(e?"super_ready":"gem_drop")});$t("countdownStop",()=>{b.state==="play"&&ei("\u041E\u0442\u0441\u0447\u0451\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D","","sun",1.2)});$t("countdownTick",n=>{n<=5&&Oe("countdown",null,.8)});$t("matchOver",n=>h1(n));$t("fogHurt",(n,e)=>Gs(n,e,null,!1,!0));$t("fogStart",()=>{b.state==="play"&&(ei("\u0422\u0443\u043C\u0430\u043D \u0441\u0433\u0443\u0449\u0430\u0435\u0442\u0441\u044F!","\u0414\u0435\u0440\u0436\u0438\u0441\u044C \u0431\u043B\u0438\u0436\u0435 \u043A \u0446\u0435\u043D\u0442\u0440\u0443","ally",2),Oe("gem_drop"))});$t("power",n=>{n.gemsPicked=(n.gemsPicked||0)+1});var pd=0;function u1(){let n=b.match.alive;n<=3&&n!==pd&&n>1&&(pd=n,ei(kn.lang==="en"?n+" left":"\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C "+n,"","sun",1.2))}$t("superReady",n=>{n===b.me&&Oe("super_ready")});$t("empty",n=>{n===b.me&&Oe("empty")});$t("damage",(n,e,t)=>{n===b.me?Oe("hurt",null,.7):t===b.me&&Oe("hit",null,.6)});$t("spawn",n=>{n===b.me&&b.state==="play"&&(Oe("respawn"),De.yaw=n.team===0?Math.PI:0,De.x=n.x,De.z=n.z)});function Qr(n){b.state!=="play"&&b.state!=="countdown"&&(n=!1),b.paused=n,ee("pause").hidden=!n,n&&Qc()}ee("pause-btn").onclick=()=>Qr(!0);ee("p-resume").onclick=()=>{Oe("click"),Qr(!1)};ee("p-quit").onclick=()=>{Oe("click"),Qr(!1),rl()};addEventListener("keydown",n=>{(n.code==="Escape"||n.code==="KeyP")&&(b.state==="play"||b.state==="countdown")&&Qr(!b.paused)});document.addEventListener("visibilitychange",()=>{document.hidden&&b.state==="play"&&Qr(!0)});var O0=.95,z0=new C;function nl(n){if(b.time+=n,Pn.time.value=b.time,Op(n),U0(),b.state==="play"||b.state==="countdown"||b.state==="end"){b.state==="countdown"&&c1(n),b.state==="play"&&b.me&&b.me.alive&&!b.me.bot&&!b.noInput&&M0(n);for(let i of b.fighters)i.bot&&b.state==="play"&&a0(i,n);for(let i of b.fighters)Km(i,n);jm(n),t0(n),i0(n),s0(n),p0(n,b.time),Gm(n,b.time),b.state==="end"&&(Vs+=n,Vs>2.6&&ee("end").hidden&&(I0(b.result),ee("hud").hidden=!0))}r0(n,b.time);let t=0;for(let i of b.fighters)i.alive&&t<Pn.push.value.length&&Pn.push.value[t++].set(i.x,i.z,O0);for(ti&&t<Pn.push.value.length&&Pn.push.value[t++].set(ti.f.x,ti.f.z,O0);t<Pn.push.value.length;t++)Pn.push.value[t].set(0,0,0);if(b.me&&b.me.alive&&b.state!=="menu"?Pn.me.value.set(b.me.x,b.me.z,2.2):Pn.me.value.set(0,0,0),b.dbgCam)at.position.set(b.dbgCam[0],b.dbgCam[1],b.dbgCam[2]),at.lookAt(b.dbgCam[3],b.dbgCam[4],b.dbgCam[5]);else if(b.state==="menu"&&ti){let i=ti,s=i.f;i.hop-=n,s.victory=i.hop>0,s.supT+=n,Hc(i.V,s,n,b.time);let r=innerWidth/innerHeight>1.3?.35:0;at.position.set(s.x+r*1.5,1.55,s.z-4.4),at.lookAt(s.x+r,.75,s.z)}else if(b.state==="end"&&b.me){let i=b.endFocus||b.me,s=b.endYaw+Math.sin(b.time*.3)*.35,r=b.endDist||4.6;z0.set(i.x+Math.sin(s)*r,2.7+(4.6-r)*.35,i.z+Math.cos(s)*r),at.position.lerp(z0,1-Math.exp(-n*2.5)),at.lookAt(i.x,.8,i.z)}else b.me&&b0(n);E0(),_0(),_m(n),C0(),b.state!=="menu"&&tl(),P0(n),Dr.position.copy(at.position)}var B0=performance.now();function Z0(n){let e=(n-B0)/1e3;B0=n;let t=Math.min(.05,e);b.state==="end"&&Vs<1.2&&(t*=.4),!b.paused&&!sn.adOn&&nl(t),Wp(e,b.state==="play"),o1(),jh(),requestAnimationFrame(Z0)}rl();F0();requestAnimationFrame(Z0);window.__bg={start(n={}){n.hero&&(rn.hero=n.hero),n.diff&&(rn.diff=n.diff),n.mode&&(rn.mode=n.mode),md(n),n.skipCount&&(na=0,b.state="play")},autopilot(n){b.me&&(b.me.bot=n?Jc("normal"):null)},sim(n,e=1/30){let t=Math.round(n/e);for(let i=0;i<t&&(nl(e),!(b.state==="end"&&Vs>3));i++);},get s(){let n=b.match;return{state:b.state,mode:n&&n.mode,t:n&&+n.t.toFixed(1),count:n&&[...n.count],alive:n&&n.alive,place:n&&n.place,fog:n&&n.fog&&+n.fog.r.toFixed(1),cd:n&&n.cd&&{team:n.cd.team,t:+n.cd.t.toFixed(1)},over:n&&n.over,winner:n&&n.winner,why:n&&n.why,pickups:b.pickups.length,me:b.me&&{hp:Math.round(b.me.hp),alive:b.me.alive,x:+b.me.x.toFixed(1),z:+b.me.z.toFixed(1),gems:b.me.gems,charge:+b.me.charge.toFixed(2),ammo:+b.me.ammo.toFixed(2)}}},board:()=>b.fighters.map(n=>`${n.name}[${n.hero}/t${n.team}] k${n.kills} d${n.deaths} g${n.gemsPicked} dmg${Math.round(n.dmgDone)}`),fighters:()=>b.fighters,G:b,A:B,CAM:De,menu:rn,showMenu:rl,cam(n){b.dbgCam=n},info:()=>({calls:Rt.info.render.calls,tris:Rt.info.render.triangles,geos:Rt.info.memory.geometries,tex:Rt.info.memory.textures,progs:Rt.info.programs.length,PR:le.PR,post:le.post}),post(n){le.post=!!n&&!!le.composer,le.noPost=!n},pause:Qr,tr:Ct,L:kn,tick:nl,dmg:Gs,bench(n=60,e){e&&(Rt.setPixelRatio(e),Ir());let t=Rt.getContext(),i=performance.now(),s=new Uint8Array(4);for(let r=0;r<n;r++)nl(1/60),jh(),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,s);return(performance.now()-i)/n}};window.__bgReady=!0;
