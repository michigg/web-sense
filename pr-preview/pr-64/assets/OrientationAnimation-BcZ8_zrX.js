import{d as wo,r as Ro,x as Co,f as Po,k as Lo,o as Do,e as Uo,_ as Io}from"./index-DKd2dgYk.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ws="167",No=0,Ws=1,Fo=2,ka=1,Oo=2,qt=3,un=0,_t=1,Yt=2,on=0,Yn=1,Xs=2,qs=3,Ys=4,Bo=5,En=100,zo=101,Ho=102,Go=103,Vo=104,ko=200,Wo=201,Xo=202,qo=203,Yr=204,Kr=205,Yo=206,Ko=207,$o=208,Zo=209,jo=210,Jo=211,Qo=212,el=213,tl=214,nl=0,il=1,rl=2,Ji=3,sl=4,al=5,ol=6,ll=7,Wa=0,cl=1,ul=2,ln=0,hl=1,fl=2,dl=3,pl=4,ml=5,_l=6,gl=7,Xa=300,Zn=301,jn=302,$r=303,Zr=304,ar=306,jr=1e3,Tn=1001,Jr=1002,At=1003,vl=1004,Mi=1005,Lt=1006,_r=1007,An=1008,Zt=1009,qa=1010,Ya=1011,di=1012,Rs=1013,bn=1014,Kt=1015,pi=1016,Cs=1017,Ps=1018,Jn=1020,Ka=35902,$a=1021,Za=1022,Dt=1023,ja=1024,Ja=1025,Kn=1026,Qn=1027,Qa=1028,Ls=1029,eo=1030,Ds=1031,Us=1033,qi=33776,Yi=33777,Ki=33778,$i=33779,Qr=35840,es=35841,ts=35842,ns=35843,is=36196,rs=37492,ss=37496,as=37808,os=37809,ls=37810,cs=37811,us=37812,hs=37813,fs=37814,ds=37815,ps=37816,ms=37817,_s=37818,gs=37819,vs=37820,xs=37821,Zi=36492,Ms=36494,Ss=36495,to=36283,Es=36284,ys=36285,Ts=36286,xl=3200,Ml=3201,Sl=0,El=1,an="",Nt="srgb",fn="srgb-linear",Is="display-p3",or="display-p3-linear",Qi="linear",Ye="srgb",er="rec709",tr="p3",Cn=7680,Ks=519,yl=512,Tl=513,Al=514,no=515,bl=516,wl=517,Rl=518,Cl=519,$s=35044,Zs="300 es",$t=2e3,nr=2001;class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gr=Math.PI/180,As=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function Pl(i,e){return(i%e+e)%e}function vr(i,e,t){return(1-t)*i+t*e}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,r,s,a,o,l,c){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],d=n[2],m=n[5],g=n[8],M=r[0],f=r[3],u=r[6],A=r[1],E=r[4],y=r[7],z=r[2],w=r[5],R=r[8];return s[0]=a*M+o*A+l*z,s[3]=a*f+o*E+l*w,s[6]=a*u+o*y+l*R,s[1]=c*M+h*A+p*z,s[4]=c*f+h*E+p*w,s[7]=c*u+h*y+p*R,s[2]=d*M+m*A+g*z,s[5]=d*f+m*E+g*w,s[8]=d*u+m*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,d=o*l-h*s,m=c*s-a*l,g=t*p+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=p*M,e[1]=(r*c-h*n)*M,e[2]=(o*n-r*a)*M,e[3]=d*M,e[4]=(h*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xr.makeScale(e,t)),this}rotate(e){return this.premultiply(xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new Pe;function io(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ll(){const i=ir("canvas");return i.style.display="block",i}const js={};function fi(i){i in js||(js[i]=!0,console.warn(i))}function Dl(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Js=new Pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qs=new Pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),si={[fn]:{transfer:Qi,primaries:er,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Nt]:{transfer:Ye,primaries:er,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[or]:{transfer:Qi,primaries:tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Qs),fromReference:i=>i.applyMatrix3(Js)},[Is]:{transfer:Ye,primaries:tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Qs),fromReference:i=>i.applyMatrix3(Js).convertLinearToSRGB()}},Ul=new Set([fn,or]),Ve={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ul.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=si[e].toReference,r=si[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return si[i].primaries},getTransfer:function(i){return i===an?Qi:si[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(si[e].luminanceCoefficients)}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pn;class Il{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pn===void 0&&(Pn=ir("canvas")),Pn.width=e.width,Pn.height=e.height;const n=Pn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$n(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nl=0;class ro{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Sr(r[a].image)):s.push(Sr(r[a]))}else s=Sr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fl=0;class gt extends ti{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=Tn,r=Tn,s=Lt,a=An,o=Dt,l=Zt,c=gt.DEFAULT_ANISOTROPY,h=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=mi(),this.name="",this.source=new ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jr:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jr:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=Xa;gt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],d=l[1],m=l[5],g=l[9],M=l[2],f=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-M)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+M)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(m+1)/2,z=(u+1)/2,w=(h+d)/4,R=(p+M)/4,I=(g+f)/4;return E>y&&E>z?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=w/n,s=R/n):y>z?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=I/r):z<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(z),n=R/s,r=I/s),this.set(n,r,s,t),this}let A=Math.sqrt((f-g)*(f-g)+(p-M)*(p-M)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(f-g)/A,this.y=(p-M)/A,this.z=(d-h)/A,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ol extends ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new gt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ro(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class so extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bl extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],p=n[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],M=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=M;return}if(p!==M||l!==d||c!==m||h!==g){let f=1-o;const u=l*d+c*m+h*g+p*M,A=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const z=Math.sqrt(E),w=Math.atan2(z,u*A);f=Math.sin(f*w)/z,o=Math.sin(o*w)/z}const y=o*A;if(l=l*f+d*y,c=c*f+m*y,h=h*f+g*y,p=p*f+M*y,f===1-o){const z=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=z,c*=z,h*=z,p*=z}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],p=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*p+l*m-c*d,e[t+1]=l*g+h*d+c*p-o*m,e[t+2]=c*g+h*m+o*d-l*p,e[t+3]=h*g-o*p-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),p=o(s/2),d=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*p+c*m*g,this._y=c*m*p-d*h*g,this._z=c*h*g+d*m*p,this._w=c*h*p-d*m*g;break;case"YXZ":this._x=d*h*p+c*m*g,this._y=c*m*p-d*h*g,this._z=c*h*g-d*m*p,this._w=c*h*p+d*m*g;break;case"ZXY":this._x=d*h*p-c*m*g,this._y=c*m*p+d*h*g,this._z=c*h*g+d*m*p,this._w=c*h*p-d*m*g;break;case"ZYX":this._x=d*h*p-c*m*g,this._y=c*m*p+d*h*g,this._z=c*h*g-d*m*p,this._w=c*h*p+d*m*g;break;case"YZX":this._x=d*h*p+c*m*g,this._y=c*m*p+d*h*g,this._z=c*h*g-d*m*p,this._w=c*h*p-d*m*g;break;case"XZY":this._x=d*h*p-c*m*g,this._y=c*m*p-d*h*g,this._z=c*h*g+d*m*p,this._w=c*h*p+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],d=n+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*p+this._w*d,this._x=n*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ea.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ea.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+l*c+a*p-o*h,this.y=n+l*h+o*c-s*p,this.z=r+l*p+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Er.copy(this).projectOnVector(e),this.sub(Er)}reflect(e){return this.sub(Er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Er=new U,ea=new cn;class _i{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rt):Rt.fromBufferAttribute(s,a),Rt.applyMatrix4(e.matrixWorld),this.expandByPoint(Rt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Si.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Si.copy(n.boundingBox)),Si.applyMatrix4(e.matrixWorld),this.union(Si)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rt),Rt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ai),Ei.subVectors(this.max,ai),Ln.subVectors(e.a,ai),Dn.subVectors(e.b,ai),Un.subVectors(e.c,ai),Qt.subVectors(Dn,Ln),en.subVectors(Un,Dn),pn.subVectors(Ln,Un);let t=[0,-Qt.z,Qt.y,0,-en.z,en.y,0,-pn.z,pn.y,Qt.z,0,-Qt.x,en.z,0,-en.x,pn.z,0,-pn.x,-Qt.y,Qt.x,0,-en.y,en.x,0,-pn.y,pn.x,0];return!yr(t,Ln,Dn,Un,Ei)||(t=[1,0,0,0,1,0,0,0,1],!yr(t,Ln,Dn,Un,Ei))?!1:(yi.crossVectors(Qt,en),t=[yi.x,yi.y,yi.z],yr(t,Ln,Dn,Un,Ei))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gt=[new U,new U,new U,new U,new U,new U,new U,new U],Rt=new U,Si=new _i,Ln=new U,Dn=new U,Un=new U,Qt=new U,en=new U,pn=new U,ai=new U,Ei=new U,yi=new U,mn=new U;function yr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){mn.fromArray(i,s);const o=r.x*Math.abs(mn.x)+r.y*Math.abs(mn.y)+r.z*Math.abs(mn.z),l=e.dot(mn),c=t.dot(mn),h=n.dot(mn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const zl=new _i,oi=new U,Tr=new U;class lr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zl.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oi.subVectors(e,this.center);const t=oi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(oi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oi.copy(e.center).add(Tr)),this.expandByPoint(oi.copy(e.center).sub(Tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vt=new U,Ar=new U,Ti=new U,tn=new U,br=new U,Ai=new U,wr=new U;class ao{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vt.copy(this.origin).addScaledVector(this.direction,t),Vt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ar.copy(e).add(t).multiplyScalar(.5),Ti.copy(t).sub(e).normalize(),tn.copy(this.origin).sub(Ar);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ti),o=tn.dot(this.direction),l=-tn.dot(Ti),c=tn.lengthSq(),h=Math.abs(1-a*a);let p,d,m,g;if(h>0)if(p=a*l-o,d=a*o-l,g=s*h,p>=0)if(d>=-g)if(d<=g){const M=1/h;p*=M,d*=M,m=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Ar).addScaledVector(Ti,d),m}intersectSphere(e,t){Vt.subVectors(e.center,this.origin);const n=Vt.dot(this.direction),r=Vt.dot(Vt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Vt)!==null}intersectTriangle(e,t,n,r,s){br.subVectors(t,e),Ai.subVectors(n,e),wr.crossVectors(br,Ai);let a=this.direction.dot(wr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;tn.subVectors(this.origin,e);const l=o*this.direction.dot(Ai.crossVectors(tn,Ai));if(l<0)return null;const c=o*this.direction.dot(br.cross(tn));if(c<0||l+c>a)return null;const h=-o*tn.dot(wr);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,r,s,a,o,l,c,h,p,d,m,g,M,f){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,p,d,m,g,M,f)}set(e,t,n,r,s,a,o,l,c,h,p,d,m,g,M,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=d,u[3]=m,u[7]=g,u[11]=M,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/In.setFromMatrixColumn(e,0).length(),s=1/In.setFromMatrixColumn(e,1).length(),a=1/In.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*p,g=o*h,M=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=m+g*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*p,g=c*h,M=c*p;t[0]=d+M*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*p,g=c*h,M=c*p;t[0]=d-M*o,t[4]=-a*p,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=M-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*p,g=o*h,M=o*p;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+M,t[1]=l*p,t[5]=M*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=M-d*p,t[8]=g*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*p+g,t[10]=d-M*p}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=d*p+M,t[5]=a*h,t[9]=m*p-g,t[2]=g*p-m,t[6]=o*h,t[10]=M*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hl,e,Gl)}lookAt(e,t,n){const r=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),nn.crossVectors(n,Mt),nn.lengthSq()===0&&(Math.abs(n.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),nn.crossVectors(n,Mt)),nn.normalize(),bi.crossVectors(Mt,nn),r[0]=nn.x,r[4]=bi.x,r[8]=Mt.x,r[1]=nn.y,r[5]=bi.y,r[9]=Mt.y,r[2]=nn.z,r[6]=bi.z,r[10]=Mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],d=n[9],m=n[13],g=n[2],M=n[6],f=n[10],u=n[14],A=n[3],E=n[7],y=n[11],z=n[15],w=r[0],R=r[4],I=r[8],S=r[12],v=r[1],C=r[5],H=r[9],O=r[13],G=r[2],Y=r[6],V=r[10],j=r[14],k=r[3],ae=r[7],ue=r[11],me=r[15];return s[0]=a*w+o*v+l*G+c*k,s[4]=a*R+o*C+l*Y+c*ae,s[8]=a*I+o*H+l*V+c*ue,s[12]=a*S+o*O+l*j+c*me,s[1]=h*w+p*v+d*G+m*k,s[5]=h*R+p*C+d*Y+m*ae,s[9]=h*I+p*H+d*V+m*ue,s[13]=h*S+p*O+d*j+m*me,s[2]=g*w+M*v+f*G+u*k,s[6]=g*R+M*C+f*Y+u*ae,s[10]=g*I+M*H+f*V+u*ue,s[14]=g*S+M*O+f*j+u*me,s[3]=A*w+E*v+y*G+z*k,s[7]=A*R+E*C+y*Y+z*ae,s[11]=A*I+E*H+y*V+z*ue,s[15]=A*S+E*O+y*j+z*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],d=e[10],m=e[14],g=e[3],M=e[7],f=e[11],u=e[15];return g*(+s*l*p-r*c*p-s*o*d+n*c*d+r*o*m-n*l*m)+M*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*h-s*l*h)+f*(+t*c*p-t*o*m-s*a*p+n*a*m+s*o*h-n*c*h)+u*(-r*o*h-t*l*p+t*o*d+r*a*p-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],d=e[10],m=e[11],g=e[12],M=e[13],f=e[14],u=e[15],A=p*f*c-M*d*c+M*l*m-o*f*m-p*l*u+o*d*u,E=g*d*c-h*f*c-g*l*m+a*f*m+h*l*u-a*d*u,y=h*M*c-g*p*c+g*o*m-a*M*m-h*o*u+a*p*u,z=g*p*l-h*M*l-g*o*d+a*M*d+h*o*f-a*p*f,w=t*A+n*E+r*y+s*z;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=A*R,e[1]=(M*d*s-p*f*s-M*r*m+n*f*m+p*r*u-n*d*u)*R,e[2]=(o*f*s-M*l*s+M*r*c-n*f*c-o*r*u+n*l*u)*R,e[3]=(p*l*s-o*d*s-p*r*c+n*d*c+o*r*m-n*l*m)*R,e[4]=E*R,e[5]=(h*f*s-g*d*s+g*r*m-t*f*m-h*r*u+t*d*u)*R,e[6]=(g*l*s-a*f*s-g*r*c+t*f*c+a*r*u-t*l*u)*R,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*m+t*l*m)*R,e[8]=y*R,e[9]=(g*p*s-h*M*s-g*n*m+t*M*m+h*n*u-t*p*u)*R,e[10]=(a*M*s-g*o*s+g*n*c-t*M*c-a*n*u+t*o*u)*R,e[11]=(h*o*s-a*p*s-h*n*c+t*p*c+a*n*m-t*o*m)*R,e[12]=z*R,e[13]=(h*M*r-g*p*r+g*n*d-t*M*d-h*n*f+t*p*f)*R,e[14]=(g*o*r-a*M*r-g*n*l+t*M*l+a*n*f-t*o*f)*R,e[15]=(a*p*r-h*o*r+h*n*l-t*p*l-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,p=o+o,d=s*c,m=s*h,g=s*p,M=a*h,f=a*p,u=o*p,A=l*c,E=l*h,y=l*p,z=n.x,w=n.y,R=n.z;return r[0]=(1-(M+u))*z,r[1]=(m+y)*z,r[2]=(g-E)*z,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(d+u))*w,r[6]=(f+A)*w,r[7]=0,r[8]=(g+E)*R,r[9]=(f-A)*R,r[10]=(1-(d+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=In.set(r[0],r[1],r[2]).length();const a=In.set(r[4],r[5],r[6]).length(),o=In.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ct.copy(this);const c=1/s,h=1/a,p=1/o;return Ct.elements[0]*=c,Ct.elements[1]*=c,Ct.elements[2]*=c,Ct.elements[4]*=h,Ct.elements[5]*=h,Ct.elements[6]*=h,Ct.elements[8]*=p,Ct.elements[9]*=p,Ct.elements[10]*=p,t.setFromRotationMatrix(Ct),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=$t){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),p=(t+e)/(t-e),d=(n+r)/(n-r);let m,g;if(o===$t)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===nr)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=$t){const l=this.elements,c=1/(t-e),h=1/(n-r),p=1/(a-s),d=(t+e)*c,m=(n+r)*h;let g,M;if(o===$t)g=(a+s)*p,M=-2*p;else if(o===nr)g=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const In=new U,Ct=new it,Hl=new U(0,0,0),Gl=new U(1,1,1),nn=new U,bi=new U,Mt=new U,ta=new it,na=new cn;class jt{constructor(e=0,t=0,n=0,r=jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ta.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ta,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return na.setFromEuler(this),this.setFromQuaternion(na,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jt.DEFAULT_ORDER="XYZ";class oo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vl=0;const ia=new U,Nn=new cn,kt=new it,wi=new U,li=new U,kl=new U,Wl=new cn,ra=new U(1,0,0),sa=new U(0,1,0),aa=new U(0,0,1),oa={type:"added"},Xl={type:"removed"},Fn={type:"childadded",child:null},Rr={type:"childremoved",child:null};class dt extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new U,t=new jt,n=new cn,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Pe}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.premultiply(Nn),this}rotateX(e){return this.rotateOnAxis(ra,e)}rotateY(e){return this.rotateOnAxis(sa,e)}rotateZ(e){return this.rotateOnAxis(aa,e)}translateOnAxis(e,t){return ia.copy(e).applyQuaternion(this.quaternion),this.position.add(ia.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ra,e)}translateY(e){return this.translateOnAxis(sa,e)}translateZ(e){return this.translateOnAxis(aa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wi.copy(e):wi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kt.lookAt(li,wi,this.up):kt.lookAt(wi,li,this.up),this.quaternion.setFromRotationMatrix(kt),r&&(kt.extractRotation(r.matrixWorld),Nn.setFromRotationMatrix(kt),this.quaternion.premultiply(Nn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oa),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xl),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(kt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oa),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,e,kl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,Wl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}dt.DEFAULT_UP=new U(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pt=new U,Wt=new U,Cr=new U,Xt=new U,On=new U,Bn=new U,la=new U,Pr=new U,Lr=new U,Dr=new U;class Ot{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pt.subVectors(e,t),r.cross(Pt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Pt.subVectors(r,t),Wt.subVectors(n,t),Cr.subVectors(e,t);const a=Pt.dot(Pt),o=Pt.dot(Wt),l=Pt.dot(Cr),c=Wt.dot(Wt),h=Wt.dot(Cr),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xt)===null?!1:Xt.x>=0&&Xt.y>=0&&Xt.x+Xt.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Xt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xt.x),l.addScaledVector(a,Xt.y),l.addScaledVector(o,Xt.z),l)}static isFrontFacing(e,t,n,r){return Pt.subVectors(n,t),Wt.subVectors(e,t),Pt.cross(Wt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pt.subVectors(this.c,this.b),Wt.subVectors(this.a,this.b),Pt.cross(Wt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ot.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;On.subVectors(r,n),Bn.subVectors(s,n),Pr.subVectors(e,n);const l=On.dot(Pr),c=Bn.dot(Pr);if(l<=0&&c<=0)return t.copy(n);Lr.subVectors(e,r);const h=On.dot(Lr),p=Bn.dot(Lr);if(h>=0&&p<=h)return t.copy(r);const d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(On,a);Dr.subVectors(e,s);const m=On.dot(Dr),g=Bn.dot(Dr);if(g>=0&&m<=g)return t.copy(s);const M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Bn,o);const f=h*g-m*p;if(f<=0&&p-h>=0&&m-g>=0)return la.subVectors(s,r),o=(p-h)/(p-h+(m-g)),t.copy(r).addScaledVector(la,o);const u=1/(f+M+d);return a=M*u,o=d*u,t.copy(n).addScaledVector(On,a).addScaledVector(Bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},Ri={h:0,s:0,l:0};function Ur(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ve.workingColorSpace){if(e=Pl(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ur(a,s,e+1/3),this.g=Ur(a,s,e),this.b=Ur(a,s,e-1/3)}return Ve.toWorkingColorSpace(this,r),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=lo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Ve.fromWorkingColorSpace(ht.copy(this),e),Math.round(mt(ht.r*255,0,255))*65536+Math.round(mt(ht.g*255,0,255))*256+Math.round(mt(ht.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(ht.copy(this),t);const n=ht.r,r=ht.g,s=ht.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(ht.copy(this),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=Nt){Ve.fromWorkingColorSpace(ht.copy(this),e);const t=ht.r,n=ht.g,r=ht.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(rn),this.setHSL(rn.h+e,rn.s+t,rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(Ri);const n=vr(rn.h,Ri.h,t),r=vr(rn.s,Ri.s,t),s=vr(rn.l,Ri.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ht=new We;We.NAMES=lo;let ql=0;class gi extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Yn,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yr,this.blendDst=Kr,this.blendEquation=En,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ks,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cn,this.stencilZFail=Cn,this.stencilZPass=Cn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yr&&(n.blendSrc=this.blendSrc),this.blendDst!==Kr&&(n.blendDst=this.blendDst),this.blendEquation!==En&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ks&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class cr extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new U,Ci=new Oe;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$s,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return fi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ci.fromBufferAttribute(this,t),Ci.applyMatrix3(e),this.setXY(t,Ci.x,Ci.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$s&&(e.usage=this.usage),e}}class co extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uo extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yl=0;const yt=new it,Ir=new dt,zn=new U,St=new _i,ci=new _i,at=new U;class zt extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(io(e)?uo:co)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yt.makeRotationFromQuaternion(e),this.applyMatrix4(yt),this}rotateX(e){return yt.makeRotationX(e),this.applyMatrix4(yt),this}rotateY(e){return yt.makeRotationY(e),this.applyMatrix4(yt),this}rotateZ(e){return yt.makeRotationZ(e),this.applyMatrix4(yt),this}translate(e,t,n){return yt.makeTranslation(e,t,n),this.applyMatrix4(yt),this}scale(e,t,n){return yt.makeScale(e,t,n),this.applyMatrix4(yt),this}lookAt(e){return Ir.lookAt(e),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zn).negate(),this.translate(zn.x,zn.y,zn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];St.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ci.setFromBufferAttribute(o),this.morphTargetsRelative?(at.addVectors(St.min,ci.min),St.expandByPoint(at),at.addVectors(St.max,ci.max),St.expandByPoint(at)):(St.expandByPoint(ci.min),St.expandByPoint(ci.max))}St.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)at.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(at));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)at.fromBufferAttribute(o,c),l&&(zn.fromBufferAttribute(e,c),at.add(zn)),r=Math.max(r,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new U,l[I]=new U;const c=new U,h=new U,p=new U,d=new Oe,m=new Oe,g=new Oe,M=new U,f=new U;function u(I,S,v){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),p.fromBufferAttribute(n,v),d.fromBufferAttribute(s,I),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,v),h.sub(c),p.sub(c),m.sub(d),g.sub(d);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(C),f.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),o[I].add(M),o[S].add(M),o[v].add(M),l[I].add(f),l[S].add(f),l[v].add(f))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,S=A.length;I<S;++I){const v=A[I],C=v.start,H=v.count;for(let O=C,G=C+H;O<G;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new U,y=new U,z=new U,w=new U;function R(I){z.fromBufferAttribute(r,I),w.copy(z);const S=o[I];E.copy(S),E.sub(z.multiplyScalar(z.dot(S))).normalize(),y.crossVectors(w,S);const C=y.dot(l[I])<0?-1:1;a.setXYZW(I,E.x,E.y,E.z,C)}for(let I=0,S=A.length;I<S;++I){const v=A[I],C=v.start,H=v.count;for(let O=C,G=C+H;O<G;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,p=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),M=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,f),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let M=0,f=l.length;M<f;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let u=0;u<h;u++)d[g++]=c[m++]}return new Bt(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ca=new it,_n=new ao,Pi=new lr,ua=new U,Hn=new U,Gn=new U,Vn=new U,Nr=new U,Li=new U,Di=new Oe,Ui=new Oe,Ii=new Oe,ha=new U,fa=new U,da=new U,Ni=new U,Fi=new U;class Ut extends dt{constructor(e=new zt,t=new cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Li.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(Nr.fromBufferAttribute(p,e),a?Li.addScaledVector(Nr,h):Li.addScaledVector(Nr.sub(t),h))}t.add(Li)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pi.copy(n.boundingSphere),Pi.applyMatrix4(s),_n.copy(e.ray).recast(e.near),!(Pi.containsPoint(_n.origin)===!1&&(_n.intersectSphere(Pi,ua)===null||_n.origin.distanceToSquared(ua)>(e.far-e.near)**2))&&(ca.copy(s).invert(),_n.copy(e.ray).applyMatrix4(ca),!(n.boundingBox!==null&&_n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_n)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const f=d[g],u=a[f.materialIndex],A=Math.max(f.start,m.start),E=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let y=A,z=E;y<z;y+=3){const w=o.getX(y),R=o.getX(y+1),I=o.getX(y+2);r=Oi(this,u,e,n,c,h,p,w,R,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let f=g,u=M;f<u;f+=3){const A=o.getX(f),E=o.getX(f+1),y=o.getX(f+2);r=Oi(this,a,e,n,c,h,p,A,E,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const f=d[g],u=a[f.materialIndex],A=Math.max(f.start,m.start),E=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let y=A,z=E;y<z;y+=3){const w=y,R=y+1,I=y+2;r=Oi(this,u,e,n,c,h,p,w,R,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let f=g,u=M;f<u;f+=3){const A=f,E=f+1,y=f+2;r=Oi(this,a,e,n,c,h,p,A,E,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Kl(i,e,t,n,r,s,a,o){let l;if(e.side===_t?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===un,o),l===null)return null;Fi.copy(o),Fi.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fi);return c<t.near||c>t.far?null:{distance:c,point:Fi.clone(),object:i}}function Oi(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Hn),i.getVertexPosition(l,Gn),i.getVertexPosition(c,Vn);const h=Kl(i,e,t,n,Hn,Gn,Vn,Ni);if(h){r&&(Di.fromBufferAttribute(r,o),Ui.fromBufferAttribute(r,l),Ii.fromBufferAttribute(r,c),h.uv=Ot.getInterpolation(Ni,Hn,Gn,Vn,Di,Ui,Ii,new Oe)),s&&(Di.fromBufferAttribute(s,o),Ui.fromBufferAttribute(s,l),Ii.fromBufferAttribute(s,c),h.uv1=Ot.getInterpolation(Ni,Hn,Gn,Vn,Di,Ui,Ii,new Oe)),a&&(ha.fromBufferAttribute(a,o),fa.fromBufferAttribute(a,l),da.fromBufferAttribute(a,c),h.normal=Ot.getInterpolation(Ni,Hn,Gn,Vn,ha,fa,da,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new U,materialIndex:0};Ot.getNormal(Hn,Gn,Vn,p.normal),h.face=p}return h}class ni extends zt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(p,2));function g(M,f,u,A,E,y,z,w,R,I,S){const v=y/R,C=z/I,H=y/2,O=z/2,G=w/2,Y=R+1,V=I+1;let j=0,k=0;const ae=new U;for(let ue=0;ue<V;ue++){const me=ue*C-O;for(let Ie=0;Ie<Y;Ie++){const Xe=Ie*v-H;ae[M]=Xe*A,ae[f]=me*E,ae[u]=G,c.push(ae.x,ae.y,ae.z),ae[M]=0,ae[f]=0,ae[u]=w>0?1:-1,h.push(ae.x,ae.y,ae.z),p.push(Ie/R),p.push(1-ue/I),j+=1}}for(let ue=0;ue<I;ue++)for(let me=0;me<R;me++){const Ie=d+me+Y*ue,Xe=d+me+Y*(ue+1),W=d+(me+1)+Y*(ue+1),J=d+(me+1)+Y*ue;l.push(Ie,Xe,J),l.push(Xe,W,J),k+=6}o.addGroup(m,k,S),m+=k,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ei(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ft(i){const e={};for(let t=0;t<i.length;t++){const n=ei(i[t]);for(const r in n)e[r]=n[r]}return e}function $l(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ho(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const Zl={clone:ei,merge:ft};var jl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jl,this.fragmentShader=Jl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ei(e.uniforms),this.uniformsGroups=$l(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fo extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=$t}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sn=new U,pa=new Oe,ma=new Oe;class Tt extends fo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sn.x,sn.y).multiplyScalar(-e/sn.z),sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sn.x,sn.y).multiplyScalar(-e/sn.z)}getViewSize(e,t){return this.getViewBounds(e,pa,ma),t.subVectors(ma,pa)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const kn=-90,Wn=1;class Ql extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tt(kn,Wn,e,t);r.layers=this.layers,this.add(r);const s=new Tt(kn,Wn,e,t);s.layers=this.layers,this.add(s);const a=new Tt(kn,Wn,e,t);a.layers=this.layers,this.add(a);const o=new Tt(kn,Wn,e,t);o.layers=this.layers,this.add(o);const l=new Tt(kn,Wn,e,t);l.layers=this.layers,this.add(l);const c=new Tt(kn,Wn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===$t)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(p,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class po extends gt{constructor(e,t,n,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Zn,super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ec extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new po(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ni(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_t,blending:on});s.uniforms.tEquirect.value=t;const a=new Ut(r,s),o=t.minFilter;return t.minFilter===An&&(t.minFilter=Lt),new Ql(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Fr=new U,tc=new U,nc=new Pe;class Mn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Fr.subVectors(n,t).cross(tc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nc.getNormalMatrix(e),r=this.coplanarPoint(Fr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gn=new lr,Bi=new U;class mo{constructor(e=new Mn,t=new Mn,n=new Mn,r=new Mn,s=new Mn,a=new Mn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$t){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],p=r[6],d=r[7],m=r[8],g=r[9],M=r[10],f=r[11],u=r[12],A=r[13],E=r[14],y=r[15];if(n[0].setComponents(l-s,d-c,f-m,y-u).normalize(),n[1].setComponents(l+s,d+c,f+m,y+u).normalize(),n[2].setComponents(l+a,d+h,f+g,y+A).normalize(),n[3].setComponents(l-a,d-h,f-g,y-A).normalize(),n[4].setComponents(l-o,d-p,f-M,y-E).normalize(),t===$t)n[5].setComponents(l+o,d+p,f+M,y+E).normalize();else if(t===nr)n[5].setComponents(o,p,M,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gn)}intersectsSprite(e){return gn.center.set(0,0,0),gn.radius=.7071067811865476,gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(gn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Bi.x=r.normal.x>0?e.max.x:e.min.x,Bi.y=r.normal.y>0?e.max.y:e.min.y,Bi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _o(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ic(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const h=l.array,p=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,o),p.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let m=0,g=d.length;m<g;m++){const M=d[m];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}p.count!==-1&&(i.bufferSubData(c,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class ur extends zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,p=e/o,d=t/l,m=[],g=[],M=[],f=[];for(let u=0;u<h;u++){const A=u*d-a;for(let E=0;E<c;E++){const y=E*p-s;g.push(y,-A,0),M.push(0,0,1),f.push(E/o),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let A=0;A<o;A++){const E=A+c*u,y=A+c*(u+1),z=A+1+c*(u+1),w=A+1+c*u;m.push(E,y,w),m.push(y,z,w)}this.setIndex(m),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(M,3)),this.setAttribute("uv",new bt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.widthSegments,e.heightSegments)}}var rc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sc=`#ifdef USE_ALPHAHASH
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
#endif`,ac=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uc=`#ifdef USE_AOMAP
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
#endif`,hc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_c=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gc=`#ifdef USE_IRIDESCENCE
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
#endif`,vc=`#ifdef USE_BUMPMAP
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
#endif`,xc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Mc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ec=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ac=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wc=`#define PI 3.141592653589793
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
} // validated`,Rc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cc=`vec3 transformedNormal = objectNormal;
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
#endif`,Pc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ic="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nc=`
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
}`,Fc=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Oc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bc=`#ifdef USE_ENVMAP
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
#endif`,zc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hc=`#ifdef USE_ENVMAP
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
#endif`,Gc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xc=`#ifdef USE_GRADIENTMAP
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
}`,qc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$c=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Zc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,jc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tu=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,nu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,iu=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,ru=`#if defined( RE_IndirectDiffuse )
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
#endif`,su=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,au=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ou=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,du=`#if defined( USE_POINTS_UV )
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
#endif`,pu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_u=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Su=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Eu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Au=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bu=`#ifdef USE_NORMALMAP
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
#endif`,wu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ru=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Du=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Uu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ou=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wu=`#ifdef USE_SKINNING
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
#endif`,Xu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qu=`#ifdef USE_SKINNING
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
#endif`,Yu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ku=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$u=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zu=`#ifndef saturate
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ju=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ju=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,th=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ih=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rh=`uniform sampler2D t2D;
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
}`,sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ah=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ch=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,uh=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hh=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,fh=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ph=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mh=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_h=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gh=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,vh=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xh=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Mh=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Sh=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Eh=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,yh=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Th=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ah=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,bh=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,wh=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Rh=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ch=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Ph=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Lh=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Dh=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Uh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Ih=`uniform vec3 color;
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
}`,Nh=`uniform float rotation;
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
}`,Fh=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ce={alphahash_fragment:rc,alphahash_pars_fragment:sc,alphamap_fragment:ac,alphamap_pars_fragment:oc,alphatest_fragment:lc,alphatest_pars_fragment:cc,aomap_fragment:uc,aomap_pars_fragment:hc,batching_pars_vertex:fc,batching_vertex:dc,begin_vertex:pc,beginnormal_vertex:mc,bsdfs:_c,iridescence_fragment:gc,bumpmap_pars_fragment:vc,clipping_planes_fragment:xc,clipping_planes_pars_fragment:Mc,clipping_planes_pars_vertex:Sc,clipping_planes_vertex:Ec,color_fragment:yc,color_pars_fragment:Tc,color_pars_vertex:Ac,color_vertex:bc,common:wc,cube_uv_reflection_fragment:Rc,defaultnormal_vertex:Cc,displacementmap_pars_vertex:Pc,displacementmap_vertex:Lc,emissivemap_fragment:Dc,emissivemap_pars_fragment:Uc,colorspace_fragment:Ic,colorspace_pars_fragment:Nc,envmap_fragment:Fc,envmap_common_pars_fragment:Oc,envmap_pars_fragment:Bc,envmap_pars_vertex:zc,envmap_physical_pars_fragment:Zc,envmap_vertex:Hc,fog_vertex:Gc,fog_pars_vertex:Vc,fog_fragment:kc,fog_pars_fragment:Wc,gradientmap_pars_fragment:Xc,lightmap_pars_fragment:qc,lights_lambert_fragment:Yc,lights_lambert_pars_fragment:Kc,lights_pars_begin:$c,lights_toon_fragment:jc,lights_toon_pars_fragment:Jc,lights_phong_fragment:Qc,lights_phong_pars_fragment:eu,lights_physical_fragment:tu,lights_physical_pars_fragment:nu,lights_fragment_begin:iu,lights_fragment_maps:ru,lights_fragment_end:su,logdepthbuf_fragment:au,logdepthbuf_pars_fragment:ou,logdepthbuf_pars_vertex:lu,logdepthbuf_vertex:cu,map_fragment:uu,map_pars_fragment:hu,map_particle_fragment:fu,map_particle_pars_fragment:du,metalnessmap_fragment:pu,metalnessmap_pars_fragment:mu,morphinstance_vertex:_u,morphcolor_vertex:gu,morphnormal_vertex:vu,morphtarget_pars_vertex:xu,morphtarget_vertex:Mu,normal_fragment_begin:Su,normal_fragment_maps:Eu,normal_pars_fragment:yu,normal_pars_vertex:Tu,normal_vertex:Au,normalmap_pars_fragment:bu,clearcoat_normal_fragment_begin:wu,clearcoat_normal_fragment_maps:Ru,clearcoat_pars_fragment:Cu,iridescence_pars_fragment:Pu,opaque_fragment:Lu,packing:Du,premultiplied_alpha_fragment:Uu,project_vertex:Iu,dithering_fragment:Nu,dithering_pars_fragment:Fu,roughnessmap_fragment:Ou,roughnessmap_pars_fragment:Bu,shadowmap_pars_fragment:zu,shadowmap_pars_vertex:Hu,shadowmap_vertex:Gu,shadowmask_pars_fragment:Vu,skinbase_vertex:ku,skinning_pars_vertex:Wu,skinning_vertex:Xu,skinnormal_vertex:qu,specularmap_fragment:Yu,specularmap_pars_fragment:Ku,tonemapping_fragment:$u,tonemapping_pars_fragment:Zu,transmission_fragment:ju,transmission_pars_fragment:Ju,uv_pars_fragment:Qu,uv_pars_vertex:eh,uv_vertex:th,worldpos_vertex:nh,background_vert:ih,background_frag:rh,backgroundCube_vert:sh,backgroundCube_frag:ah,cube_vert:oh,cube_frag:lh,depth_vert:ch,depth_frag:uh,distanceRGBA_vert:hh,distanceRGBA_frag:fh,equirect_vert:dh,equirect_frag:ph,linedashed_vert:mh,linedashed_frag:_h,meshbasic_vert:gh,meshbasic_frag:vh,meshlambert_vert:xh,meshlambert_frag:Mh,meshmatcap_vert:Sh,meshmatcap_frag:Eh,meshnormal_vert:yh,meshnormal_frag:Th,meshphong_vert:Ah,meshphong_frag:bh,meshphysical_vert:wh,meshphysical_frag:Rh,meshtoon_vert:Ch,meshtoon_frag:Ph,points_vert:Lh,points_frag:Dh,shadow_vert:Uh,shadow_frag:Ih,sprite_vert:Nh,sprite_frag:Fh},ie={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Ft={basic:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:ft([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:ft([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:ft([ie.points,ie.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:ft([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:ft([ie.common,ie.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:ft([ie.sprite,ie.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:ft([ie.common,ie.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:ft([ie.lights,ie.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Ft.physical={uniforms:ft([Ft.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const zi={r:0,b:0,g:0},vn=new jt,Oh=new it;function Bh(i,e,t,n,r,s,a){const o=new We(0);let l=s===!0?0:1,c,h,p=null,d=0,m=null;function g(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function M(A){let E=!1;const y=g(A);y===null?u(o,l):y&&y.isColor&&(u(y,1),E=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,a):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(A,E){const y=g(E);y&&(y.isCubeTexture||y.mapping===ar)?(h===void 0&&(h=new Ut(new ni(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:ei(Ft.backgroundCube.uniforms),vertexShader:Ft.backgroundCube.vertexShader,fragmentShader:Ft.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),vn.copy(E.backgroundRotation),vn.x*=-1,vn.y*=-1,vn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vn.y*=-1,vn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Oh.makeRotationFromEuler(vn)),h.material.toneMapped=Ve.getTransfer(y.colorSpace)!==Ye,(p!==y||d!==y.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,p=y,d=y.version,m=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ut(new ur(2,2),new hn({name:"BackgroundMaterial",uniforms:ei(Ft.background.uniforms),vertexShader:Ft.background.vertexShader,fragmentShader:Ft.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(y.colorSpace)!==Ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||d!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,p=y,d=y.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function u(A,E){A.getRGB(zi,ho(i)),n.buffers.color.setClear(zi.r,zi.g,zi.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(A,E=1){o.set(A),l=E,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,u(o,l)},render:M,addToRenderList:f}}function zh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(v,C,H,O,G){let Y=!1;const V=p(O,H,C);s!==V&&(s=V,c(s.object)),Y=m(v,O,H,G),Y&&g(v,O,H,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(v,C,H,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function p(v,C,H){const O=H.wireframe===!0;let G=n[v.id];G===void 0&&(G={},n[v.id]=G);let Y=G[C.id];Y===void 0&&(Y={},G[C.id]=Y);let V=Y[O];return V===void 0&&(V=d(l()),Y[O]=V),V}function d(v){const C=[],H=[],O=[];for(let G=0;G<t;G++)C[G]=0,H[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:O,object:v,attributes:{},index:null}}function m(v,C,H,O){const G=s.attributes,Y=C.attributes;let V=0;const j=H.getAttributes();for(const k in j)if(j[k].location>=0){const ue=G[k];let me=Y[k];if(me===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(me=v.instanceColor)),ue===void 0||ue.attribute!==me||me&&ue.data!==me.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function g(v,C,H,O){const G={},Y=C.attributes;let V=0;const j=H.getAttributes();for(const k in j)if(j[k].location>=0){let ue=Y[k];ue===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor));const me={};me.attribute=ue,ue&&ue.data&&(me.data=ue.data),G[k]=me,V++}s.attributes=G,s.attributesNum=V,s.index=O}function M(){const v=s.newAttributes;for(let C=0,H=v.length;C<H;C++)v[C]=0}function f(v){u(v,0)}function u(v,C){const H=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;H[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),G[v]!==C&&(i.vertexAttribDivisor(v,C),G[v]=C)}function A(){const v=s.newAttributes,C=s.enabledAttributes;for(let H=0,O=C.length;H<O;H++)C[H]!==v[H]&&(i.disableVertexAttribArray(H),C[H]=0)}function E(v,C,H,O,G,Y,V){V===!0?i.vertexAttribIPointer(v,C,H,G,Y):i.vertexAttribPointer(v,C,H,O,G,Y)}function y(v,C,H,O){M();const G=O.attributes,Y=H.getAttributes(),V=C.defaultAttributeValues;for(const j in Y){const k=Y[j];if(k.location>=0){let ae=G[j];if(ae===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor)),ae!==void 0){const ue=ae.normalized,me=ae.itemSize,Ie=e.get(ae);if(Ie===void 0)continue;const Xe=Ie.buffer,W=Ie.type,J=Ie.bytesPerElement,fe=W===i.INT||W===i.UNSIGNED_INT||ae.gpuType===Rs;if(ae.isInterleavedBufferAttribute){const le=ae.data,be=le.stride,Le=ae.offset;if(le.isInstancedInterleavedBuffer){for(let Ue=0;Ue<k.locationSize;Ue++)u(k.location+Ue,le.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ue=0;Ue<k.locationSize;Ue++)f(k.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ue=0;Ue<k.locationSize;Ue++)E(k.location+Ue,me/k.locationSize,W,ue,be*J,(Le+me/k.locationSize*Ue)*J,fe)}else{if(ae.isInstancedBufferAttribute){for(let le=0;le<k.locationSize;le++)u(k.location+le,ae.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let le=0;le<k.locationSize;le++)f(k.location+le);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let le=0;le<k.locationSize;le++)E(k.location+le,me/k.locationSize,W,ue,me*J,me/k.locationSize*le*J,fe)}}else if(V!==void 0){const ue=V[j];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(k.location,ue);break;case 3:i.vertexAttrib3fv(k.location,ue);break;case 4:i.vertexAttrib4fv(k.location,ue);break;default:i.vertexAttrib1fv(k.location,ue)}}}}A()}function z(){I();for(const v in n){const C=n[v];for(const H in C){const O=C[H];for(const G in O)h(O[G].object),delete O[G];delete C[H]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const C=n[v.id];for(const H in C){const O=C[H];for(const G in O)h(O[G].object),delete O[G];delete C[H]}delete n[v.id]}function R(v){for(const C in n){const H=n[C];if(H[v.id]===void 0)continue;const O=H[v.id];for(const G in O)h(O[G].object),delete O[G];delete H[v.id]}}function I(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:z,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:f,disableUnusedAttributes:A}}function Hh(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,p){p!==0&&(i.drawArraysInstanced(n,c,h,p),t.update(h,n,p))}function o(c,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,p);let m=0;for(let g=0;g<p;g++)m+=h[g];t.update(m,n,1)}function l(c,h,p,d){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,p);let g=0;for(let M=0;M<p;M++)g+=h[M];for(let M=0;M<d.length;M++)t.update(g,n,d[M])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Gh(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Dt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Zt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Kt&&!R)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),u=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,z=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:M,maxAttributes:f,maxVertexUniforms:u,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:y,maxSamples:z}}function Vh(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Mn,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||n!==0||r;return r=d,n=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,m){const g=p.clippingPlanes,M=p.clipIntersection,f=p.clipShadows,u=i.get(p);if(!r||g===null||g.length===0||s&&!f)s?h(null):c();else{const A=s?0:n,E=A*4;let y=u.clippingState||null;l.value=y,y=h(g,d,E,m);for(let z=0;z!==E;++z)y[z]=t[z];u.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,d,m,g){const M=p!==null?p.length:0;let f=null;if(M!==0){if(f=l.value,g!==!0||f===null){const u=m+M*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(f===null||f.length<u)&&(f=new Float32Array(u));for(let E=0,y=m;E!==M;++E,y+=4)a.copy(p[E]).applyMatrix4(A,o),a.normal.toArray(f,y),f[y+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,f}}function kh(i){let e=new WeakMap;function t(a,o){return o===$r?a.mapping=Zn:o===Zr&&(a.mapping=jn),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===$r||o===Zr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ec(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Wh extends fo{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qn=4,_a=[.125,.215,.35,.446,.526,.582],yn=20,Or=new Wh,ga=new We;let Br=null,zr=0,Hr=0,Gr=!1;const Sn=(1+Math.sqrt(5))/2,Xn=1/Sn,va=[new U(-Sn,Xn,0),new U(Sn,Xn,0),new U(-Xn,0,Sn),new U(Xn,0,Sn),new U(0,Sn,-Xn),new U(0,Sn,Xn),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class xa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Br=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ea(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Br,zr,Hr),this._renderer.xr.enabled=Gr,e.scissorTest=!1,Hi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zn||e.mapping===jn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Br=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:pi,format:Dt,colorSpace:fn,depthBuffer:!1},r=Ma(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ma(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xh(s)),this._blurMaterial=qh(s,e,t)}return r}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Or)}_sceneToCubeUV(e,t,n,r){const o=new Tt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(ga),h.toneMapping=ln,h.autoClear=!1;const m=new cr({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1}),g=new Ut(new ni,m);let M=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,M=!0):(m.color.copy(ga),M=!0);for(let u=0;u<6;u++){const A=u%3;A===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):A===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const E=this._cubeSize;Hi(r,A*E,u>2?E:0,E,E),h.setRenderTarget(r),M&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Zn||e.mapping===jn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ea()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sa());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Hi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Or)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=va[(r-s-1)%va.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Ut(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*yn-1),M=s/g,f=isFinite(s)?1+Math.floor(h*M):yn;f>yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${yn}`);const u=[];let A=0;for(let R=0;R<yn;++R){const I=R/M,S=Math.exp(-I*I/2);u.push(S),R===0?A+=S:R<f&&(A+=2*S)}for(let R=0;R<u.length;R++)u[R]=u[R]/A;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const y=this._sizeLods[r],z=3*y*(r>E-qn?r-E+qn:0),w=4*(this._cubeSize-y);Hi(t,z,w,3*y,2*y),l.setRenderTarget(t),l.render(p,Or)}}function Xh(i){const e=[],t=[],n=[];let r=i;const s=i-qn+1+_a.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-qn?l=_a[a-i+qn-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,p=1+c,d=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,g=6,M=3,f=2,u=1,A=new Float32Array(M*g*m),E=new Float32Array(f*g*m),y=new Float32Array(u*g*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,I=w>2?0:-1,S=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];A.set(S,M*g*w),E.set(d,f*g*w);const v=[w,w,w,w,w,w];y.set(v,u*g*w)}const z=new zt;z.setAttribute("position",new Bt(A,M)),z.setAttribute("uv",new Bt(E,f)),z.setAttribute("faceIndex",new Bt(y,u)),e.push(z),r>qn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ma(i,e,t){const n=new wn(i,e,t);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function qh(i,e,t){const n=new Float32Array(yn),r=new U(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ns(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function Sa(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ns(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function Ea(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function Ns(){return`

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
	`}function Yh(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===$r||l===Zr,h=l===Zn||l===jn;if(c||h){let p=e.get(o);const d=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new xa(i)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new xa(i)),p=c?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Kh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&fi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function $h(i,e,t,n){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const M=d.morphAttributes[g];for(let f=0,u=M.length;f<u;f++)e.remove(M[f])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(p){const d=p.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const M=m[g];for(let f=0,u=M.length;f<u;f++)e.update(M[f],i.ARRAY_BUFFER)}}function c(p){const d=[],m=p.index,g=p.attributes.position;let M=0;if(m!==null){const A=m.array;M=m.version;for(let E=0,y=A.length;E<y;E+=3){const z=A[E+0],w=A[E+1],R=A[E+2];d.push(z,w,w,R,R,z)}}else if(g!==void 0){const A=g.array;M=g.version;for(let E=0,y=A.length/3-1;E<y;E+=3){const z=E+0,w=E+1,R=E+2;d.push(z,w,w,R,R,z)}}else return;const f=new(io(d)?uo:co)(d,1);f.version=M;const u=s.get(p);u&&e.remove(u),s.set(p,f)}function h(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Zh(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*a),t.update(m,n,1)}function c(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,d*a,g),t.update(m,n,g))}function h(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let f=0;for(let u=0;u<g;u++)f+=m[u];t.update(f,n,1)}function p(d,m,g,M){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<d.length;u++)c(d[u]/a,m[u],M[u]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,M,0,g);let u=0;for(let A=0;A<g;A++)u+=m[A];for(let A=0;A<M.length;A++)t.update(u,n,M[A])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function jh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Jh(i,e,t){const n=new WeakMap,r=new ot;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==p){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;m===!0&&(E=1),g===!0&&(E=2),M===!0&&(E=3);let y=o.attributes.position.count*E,z=1;y>e.maxTextureSize&&(z=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*z*4*p),R=new so(w,y,z,p);R.type=Kt,R.needsUpdate=!0;const I=E*4;for(let v=0;v<p;v++){const C=f[v],H=u[v],O=A[v],G=y*z*4*v;for(let Y=0;Y<C.count;Y++){const V=Y*I;m===!0&&(r.fromBufferAttribute(C,Y),w[G+V+0]=r.x,w[G+V+1]=r.y,w[G+V+2]=r.z,w[G+V+3]=0),g===!0&&(r.fromBufferAttribute(H,Y),w[G+V+4]=r.x,w[G+V+5]=r.y,w[G+V+6]=r.z,w[G+V+7]=0),M===!0&&(r.fromBufferAttribute(O,Y),w[G+V+8]=r.x,w[G+V+9]=r.y,w[G+V+10]=r.z,w[G+V+11]=O.itemSize===4?r.w:1)}}d={count:p,texture:R,size:new Oe(y,z)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Qh(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class go extends gt{constructor(e,t,n,r,s,a,o,l,c,h=Kn){if(h!==Kn&&h!==Qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Kn&&(n=bn),n===void 0&&h===Qn&&(n=Jn),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vo=new gt,ya=new go(1,1),xo=new so,Mo=new Bl,So=new po,Ta=[],Aa=[],ba=new Float32Array(16),wa=new Float32Array(9),Ra=new Float32Array(4);function ii(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ta[r];if(s===void 0&&(s=new Float32Array(r),Ta[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function st(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hr(i,e){let t=Aa[e];t===void 0&&(t=new Int32Array(e),Aa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2fv(this.addr,e),st(t,e)}}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;i.uniform3fv(this.addr,e),st(t,e)}}function rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4fv(this.addr,e),st(t,e)}}function sf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;Ra.set(n),i.uniformMatrix2fv(this.addr,!1,Ra),st(t,n)}}function af(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;wa.set(n),i.uniformMatrix3fv(this.addr,!1,wa),st(t,n)}}function of(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;ba.set(n),i.uniformMatrix4fv(this.addr,!1,ba),st(t,n)}}function lf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2iv(this.addr,e),st(t,e)}}function uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;i.uniform3iv(this.addr,e),st(t,e)}}function hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4iv(this.addr,e),st(t,e)}}function ff(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2uiv(this.addr,e),st(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;i.uniform3uiv(this.addr,e),st(t,e)}}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4uiv(this.addr,e),st(t,e)}}function _f(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ya.compareFunction=no,s=ya):s=vo,t.setTexture2D(e||s,r)}function gf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Mo,r)}function vf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||So,r)}function xf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||xo,r)}function Mf(i){switch(i){case 5126:return ef;case 35664:return tf;case 35665:return nf;case 35666:return rf;case 35674:return sf;case 35675:return af;case 35676:return of;case 5124:case 35670:return lf;case 35667:case 35671:return cf;case 35668:case 35672:return uf;case 35669:case 35673:return hf;case 5125:return ff;case 36294:return df;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return _f;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return xf}}function Sf(i,e){i.uniform1fv(this.addr,e)}function Ef(i,e){const t=ii(e,this.size,2);i.uniform2fv(this.addr,t)}function yf(i,e){const t=ii(e,this.size,3);i.uniform3fv(this.addr,t)}function Tf(i,e){const t=ii(e,this.size,4);i.uniform4fv(this.addr,t)}function Af(i,e){const t=ii(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bf(i,e){const t=ii(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wf(i,e){const t=ii(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rf(i,e){i.uniform1iv(this.addr,e)}function Cf(i,e){i.uniform2iv(this.addr,e)}function Pf(i,e){i.uniform3iv(this.addr,e)}function Lf(i,e){i.uniform4iv(this.addr,e)}function Df(i,e){i.uniform1uiv(this.addr,e)}function Uf(i,e){i.uniform2uiv(this.addr,e)}function If(i,e){i.uniform3uiv(this.addr,e)}function Nf(i,e){i.uniform4uiv(this.addr,e)}function Ff(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);rt(n,s)||(i.uniform1iv(this.addr,s),st(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||vo,s[a])}function Of(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);rt(n,s)||(i.uniform1iv(this.addr,s),st(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Mo,s[a])}function Bf(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);rt(n,s)||(i.uniform1iv(this.addr,s),st(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||So,s[a])}function zf(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);rt(n,s)||(i.uniform1iv(this.addr,s),st(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||xo,s[a])}function Hf(i){switch(i){case 5126:return Sf;case 35664:return Ef;case 35665:return yf;case 35666:return Tf;case 35674:return Af;case 35675:return bf;case 35676:return wf;case 5124:case 35670:return Rf;case 35667:case 35671:return Cf;case 35668:case 35672:return Pf;case 35669:case 35673:return Lf;case 5125:return Df;case 36294:return Uf;case 36295:return If;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return Bf;case 36289:case 36303:case 36311:case 36292:return zf}}class Gf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mf(t.type)}}class Vf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hf(t.type)}}class kf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function Ca(i,e){i.seq.push(e),i.map[e.id]=e}function Wf(i,e,t){const n=i.name,r=n.length;for(Vr.lastIndex=0;;){const s=Vr.exec(n),a=Vr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ca(t,c===void 0?new Gf(o,i,e):new Vf(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new kf(o),Ca(t,p)),t=p}}}class ji{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Wf(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Pa(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Xf=37297;let qf=0;function Yf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Kf(i){const e=Ve.getPrimaries(Ve.workingColorSpace),t=Ve.getPrimaries(i);let n;switch(e===t?n="":e===tr&&t===er?n="LinearDisplayP3ToLinearSRGB":e===er&&t===tr&&(n="LinearSRGBToLinearDisplayP3"),i){case fn:case or:return[n,"LinearTransferOETF"];case Nt:case Is:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function La(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Yf(i.getShaderSource(e),a)}else return r}function $f(i,e){const t=Kf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Zf(i,e){let t;switch(e){case hl:t="Linear";break;case fl:t="Reinhard";break;case dl:t="OptimizedCineon";break;case pl:t="ACESFilmic";break;case _l:t="AgX";break;case gl:t="Neutral";break;case ml:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gi=new U;function jf(){Ve.getLuminanceCoefficients(Gi);const i=Gi.x.toFixed(4),e=Gi.y.toFixed(4),t=Gi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hi).join(`
`)}function Qf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ed(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function hi(i){return i!==""}function Da(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ua(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const td=/^[ \t]*#include +<([\w\d./]+)>/gm;function bs(i){return i.replace(td,id)}const nd=new Map;function id(i,e){let t=Ce[e];if(t===void 0){const n=nd.get(e);if(n!==void 0)t=Ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bs(t)}const rd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ia(i){return i.replace(rd,sd)}function sd(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Na(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ad(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ka?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Oo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qt&&(e="SHADOWMAP_TYPE_VSM"),e}function od(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zn:case jn:e="ENVMAP_TYPE_CUBE";break;case ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ld(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case jn:e="ENVMAP_MODE_REFRACTION";break}return e}function cd(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wa:e="ENVMAP_BLENDING_MULTIPLY";break;case cl:e="ENVMAP_BLENDING_MIX";break;case ul:e="ENVMAP_BLENDING_ADD";break}return e}function ud(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hd(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ad(t),c=od(t),h=ld(t),p=cd(t),d=ud(t),m=Jf(t),g=Qf(s),M=r.createProgram();let f,u,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hi).join(`
`),f.length>0&&(f+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hi).join(`
`),u.length>0&&(u+=`
`)):(f=[Na(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hi).join(`
`),u=[Na(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?Ce.tonemapping_pars_fragment:"",t.toneMapping!==ln?Zf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,$f("linearToOutputTexel",t.outputColorSpace),jf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hi).join(`
`)),a=bs(a),a=Da(a,t),a=Ua(a,t),o=bs(o),o=Da(o,t),o=Ua(o,t),a=Ia(a),o=Ia(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,u=["#define varying in",t.glslVersion===Zs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=A+f+a,y=A+u+o,z=Pa(r,r.VERTEX_SHADER,E),w=Pa(r,r.FRAGMENT_SHADER,y);r.attachShader(M,z),r.attachShader(M,w),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(C){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(M).trim(),O=r.getShaderInfoLog(z).trim(),G=r.getShaderInfoLog(w).trim();let Y=!0,V=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,z,w);else{const j=La(r,z,"vertex"),k=La(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+j+`
`+k)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(O===""||G==="")&&(V=!1);V&&(C.diagnostics={runnable:Y,programLog:H,vertexShader:{log:O,prefix:f},fragmentShader:{log:G,prefix:u}})}r.deleteShader(z),r.deleteShader(w),I=new ji(r,M),S=ed(r,M)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(M,Xf)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qf++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=z,this.fragmentShader=w,this}let fd=0;class dd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pd(e),t.set(e,n)),n}}class pd{constructor(e){this.id=fd++,this.code=e,this.usedTimes=0}}function md(i,e,t,n,r,s,a){const o=new oo,l=new dd,c=new Set,h=[],p=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,v,C,H,O){const G=H.fog,Y=O.geometry,V=S.isMeshStandardMaterial?H.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),k=j&&j.mapping===ar?j.image.height:null,ae=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ue=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,me=ue!==void 0?ue.length:0;let Ie=0;Y.morphAttributes.position!==void 0&&(Ie=1),Y.morphAttributes.normal!==void 0&&(Ie=2),Y.morphAttributes.color!==void 0&&(Ie=3);let Xe,W,J,fe;if(ae){const Be=Ft[ae];Xe=Be.vertexShader,W=Be.fragmentShader}else Xe=S.vertexShader,W=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const le=i.getRenderTarget(),be=O.isInstancedMesh===!0,Le=O.isBatchedMesh===!0,Ue=!!S.map,$e=!!S.matcap,b=!!j,Je=!!S.aoMap,ke=!!S.lightMap,qe=!!S.bumpMap,ge=!!S.normalMap,Qe=!!S.displacementMap,Te=!!S.emissiveMap,we=!!S.metalnessMap,T=!!S.roughnessMap,_=S.anisotropy>0,B=S.clearcoat>0,$=S.dispersion>0,Z=S.iridescence>0,K=S.sheen>0,ve=S.transmission>0,re=_&&!!S.anisotropyMap,ce=B&&!!S.clearcoatMap,Re=B&&!!S.clearcoatNormalMap,Q=B&&!!S.clearcoatRoughnessMap,oe=Z&&!!S.iridescenceMap,Ne=Z&&!!S.iridescenceThicknessMap,ye=K&&!!S.sheenColorMap,he=K&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,De=!!S.specularColorMap,Ke=!!S.specularIntensityMap,P=ve&&!!S.transmissionMap,ee=ve&&!!S.thicknessMap,X=!!S.gradientMap,q=!!S.alphaMap,ne=S.alphaTest>0,Me=!!S.alphaHash,Fe=!!S.extensions;let et=ln;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(et=i.toneMapping);const lt={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:W,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Le,batchingColor:Le&&O._colorsTexture!==null,instancing:be,instancingColor:be&&O.instanceColor!==null,instancingMorph:be&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:fn,alphaToCoverage:!!S.alphaToCoverage,map:Ue,matcap:$e,envMap:b,envMapMode:b&&j.mapping,envMapCubeUVHeight:k,aoMap:Je,lightMap:ke,bumpMap:qe,normalMap:ge,displacementMap:d&&Qe,emissiveMap:Te,normalMapObjectSpace:ge&&S.normalMapType===El,normalMapTangentSpace:ge&&S.normalMapType===Sl,metalnessMap:we,roughnessMap:T,anisotropy:_,anisotropyMap:re,clearcoat:B,clearcoatMap:ce,clearcoatNormalMap:Re,clearcoatRoughnessMap:Q,dispersion:$,iridescence:Z,iridescenceMap:oe,iridescenceThicknessMap:Ne,sheen:K,sheenColorMap:ye,sheenRoughnessMap:he,specularMap:Ae,specularColorMap:De,specularIntensityMap:Ke,transmission:ve,transmissionMap:P,thicknessMap:ee,gradientMap:X,opaque:S.transparent===!1&&S.blending===Yn&&S.alphaToCoverage===!1,alphaMap:q,alphaTest:ne,alphaHash:Me,combine:S.combine,mapUv:Ue&&M(S.map.channel),aoMapUv:Je&&M(S.aoMap.channel),lightMapUv:ke&&M(S.lightMap.channel),bumpMapUv:qe&&M(S.bumpMap.channel),normalMapUv:ge&&M(S.normalMap.channel),displacementMapUv:Qe&&M(S.displacementMap.channel),emissiveMapUv:Te&&M(S.emissiveMap.channel),metalnessMapUv:we&&M(S.metalnessMap.channel),roughnessMapUv:T&&M(S.roughnessMap.channel),anisotropyMapUv:re&&M(S.anisotropyMap.channel),clearcoatMapUv:ce&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:Re&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:he&&M(S.sheenRoughnessMap.channel),specularMapUv:Ae&&M(S.specularMap.channel),specularColorMapUv:De&&M(S.specularColorMap.channel),specularIntensityMapUv:Ke&&M(S.specularIntensityMap.channel),transmissionMapUv:P&&M(S.transmissionMap.channel),thicknessMapUv:ee&&M(S.thicknessMap.channel),alphaMapUv:q&&M(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ge||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(Ue||q),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ie,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,decodeVideoTexture:Ue&&S.map.isVideoTexture===!0&&Ve.getTransfer(S.map.colorSpace)===Ye,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yt,flipSided:S.side===_t,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Fe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&S.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function u(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)v.push(C),v.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(A(v,S),E(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function A(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function E(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.doubleSided&&o.enable(10),v.flipSided&&o.enable(11),v.useDepthPacking&&o.enable(12),v.dithering&&o.enable(13),v.transmission&&o.enable(14),v.sheen&&o.enable(15),v.opaque&&o.enable(16),v.pointsUvs&&o.enable(17),v.decodeVideoTexture&&o.enable(18),v.alphaToCoverage&&o.enable(19),S.push(o.mask)}function y(S){const v=g[S.type];let C;if(v){const H=Ft[v];C=Zl.clone(H.uniforms)}else C=S.uniforms;return C}function z(S,v){let C;for(let H=0,O=h.length;H<O;H++){const G=h[H];if(G.cacheKey===v){C=G,++C.usedTimes;break}}return C===void 0&&(C=new hd(i,v,S,s),h.push(C)),C}function w(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function I(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:y,acquireProgram:z,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:I}}function _d(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function gd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oa(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(p,d,m,g,M,f){let u=i[e];return u===void 0?(u={id:p.id,object:p,geometry:d,material:m,groupOrder:g,renderOrder:p.renderOrder,z:M,group:f},i[e]=u):(u.id=p.id,u.object=p,u.geometry=d,u.material=m,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=M,u.group=f),e++,u}function o(p,d,m,g,M,f){const u=a(p,d,m,g,M,f);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(p,d,m,g,M,f){const u=a(p,d,m,g,M,f);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(p,d){t.length>1&&t.sort(p||gd),n.length>1&&n.sort(d||Fa),r.length>1&&r.sort(d||Fa)}function h(){for(let p=e,d=i.length;p<d;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function vd(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Oa,i.set(n,[a])):r>=s.length?(a=new Oa,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function xd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new We};break;case"SpotLight":t={position:new U,direction:new U,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Md(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Sd=0;function Ed(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yd(i){const e=new xd,t=Md(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const r=new U,s=new it,a=new it;function o(c){let h=0,p=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,M=0,f=0,u=0,A=0,E=0,y=0,z=0,w=0,R=0;c.sort(Ed);for(let S=0,v=c.length;S<v;S++){const C=c[S],H=C.color,O=C.intensity,G=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=H.r*O,p+=H.g*O,d+=H.b*O;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],O);R++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,k=t.get(C);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=C.shadow.matrix,A++}n.directional[m]=V,m++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(H).multiplyScalar(O),V.distance=G,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[M]=V;const j=C.shadow;if(C.map&&(n.spotLightMap[z]=C.map,z++,j.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[M]=j.matrix,C.castShadow){const k=t.get(C);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,n.spotShadow[M]=k,n.spotShadowMap[M]=Y,y++}M++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(H).multiplyScalar(O),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[f]=V,f++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const j=C.shadow,k=t.get(C);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=V,g++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(O),V.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[u]=V,u++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==M||I.rectAreaLength!==f||I.hemiLength!==u||I.numDirectionalShadows!==A||I.numPointShadows!==E||I.numSpotShadows!==y||I.numSpotMaps!==z||I.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=f,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+z-w,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,I.directionalLength=m,I.pointLength=g,I.spotLength=M,I.rectAreaLength=f,I.hemiLength=u,I.numDirectionalShadows=A,I.numPointShadows=E,I.numSpotShadows=y,I.numSpotMaps=z,I.numLightProbes=R,n.version=Sd++)}function l(c,h){let p=0,d=0,m=0,g=0,M=0;const f=h.matrixWorldInverse;for(let u=0,A=c.length;u<A;u++){const E=c[u];if(E.isDirectionalLight){const y=n.directional[p];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),p++}else if(E.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),m++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(f),a.identity(),s.copy(E.matrixWorld),s.premultiply(f),a.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(f),d++}else if(E.isHemisphereLight){const y=n.hemi[M];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(f),M++}}}return{setup:o,setupView:l,state:n}}function Ba(i){const e=new yd(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Td(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ba(i),e.set(r,[o])):s>=a.length?(o=new Ba(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Ad extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bd extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rd=`uniform sampler2D shadow_pass;
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
}`;function Cd(i,e,t){let n=new mo;const r=new Oe,s=new Oe,a=new ot,o=new Ad({depthPacking:Ml}),l=new bd,c={},h=t.maxTextureSize,p={[un]:_t,[_t]:un,[Yt]:Yt},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:wd,fragmentShader:Rd}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ut(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka;let u=this.type;this.render=function(w,R,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),H=i.state;H.setBlending(on),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const O=u!==qt&&this.type===qt,G=u===qt&&this.type!==qt;for(let Y=0,V=w.length;Y<V;Y++){const j=w[Y],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ae=k.getFrameExtents();if(r.multiply(ae),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ae.x),r.x=s.x*ae.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ae.y),r.y=s.y*ae.y,k.mapSize.y=s.y)),k.map===null||O===!0||G===!0){const me=this.type!==qt?{minFilter:At,magFilter:At}:{};k.map!==null&&k.map.dispose(),k.map=new wn(r.x,r.y,me),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ue=k.getViewportCount();for(let me=0;me<ue;me++){const Ie=k.getViewport(me);a.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),H.viewport(a),k.updateMatrices(j,me),n=k.getFrustum(),y(R,I,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===qt&&A(k,I),k.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(S,v,C)};function A(w,R){const I=e.update(M);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new wn(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,I,m,M,null)}function E(w,R,I,S){let v=null;const C=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)v=C;else if(v=I.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=v.uuid,O=R.uuid;let G=c[H];G===void 0&&(G={},c[H]=G);let Y=G[O];Y===void 0&&(Y=v.clone(),G[O]=Y,R.addEventListener("dispose",z)),v=Y}if(v.visible=R.visible,v.wireframe=R.wireframe,S===qt?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:p[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const H=i.properties.get(v);H.light=I}return v}function y(w,R,I,S,v){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===qt)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const O=e.update(w),G=w.material;if(Array.isArray(G)){const Y=O.groups;for(let V=0,j=Y.length;V<j;V++){const k=Y[V],ae=G[k.materialIndex];if(ae&&ae.visible){const ue=E(w,ae,S,v);w.onBeforeShadow(i,w,R,I,O,ue,k),i.renderBufferDirect(I,null,O,ue,w,k),w.onAfterShadow(i,w,R,I,O,ue,k)}}}else if(G.visible){const Y=E(w,G,S,v);w.onBeforeShadow(i,w,R,I,O,Y,null),i.renderBufferDirect(I,null,O,Y,w,null),w.onAfterShadow(i,w,R,I,O,Y,null)}}const H=w.children;for(let O=0,G=H.length;O<G;O++)y(H[O],R,I,S,v)}function z(w){w.target.removeEventListener("dispose",z);for(const I in c){const S=c[I],v=w.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}function Pd(i){function e(){let P=!1;const ee=new ot;let X=null;const q=new ot(0,0,0,0);return{setMask:function(ne){X!==ne&&!P&&(i.colorMask(ne,ne,ne,ne),X=ne)},setLocked:function(ne){P=ne},setClear:function(ne,Me,Fe,et,lt){lt===!0&&(ne*=et,Me*=et,Fe*=et),ee.set(ne,Me,Fe,et),q.equals(ee)===!1&&(i.clearColor(ne,Me,Fe,et),q.copy(ee))},reset:function(){P=!1,X=null,q.set(-1,0,0,0)}}}function t(){let P=!1,ee=null,X=null,q=null;return{setTest:function(ne){ne?fe(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(ne){ee!==ne&&!P&&(i.depthMask(ne),ee=ne)},setFunc:function(ne){if(X!==ne){switch(ne){case nl:i.depthFunc(i.NEVER);break;case il:i.depthFunc(i.ALWAYS);break;case rl:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case sl:i.depthFunc(i.EQUAL);break;case al:i.depthFunc(i.GEQUAL);break;case ol:i.depthFunc(i.GREATER);break;case ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}X=ne}},setLocked:function(ne){P=ne},setClear:function(ne){q!==ne&&(i.clearDepth(ne),q=ne)},reset:function(){P=!1,ee=null,X=null,q=null}}}function n(){let P=!1,ee=null,X=null,q=null,ne=null,Me=null,Fe=null,et=null,lt=null;return{setTest:function(Be){P||(Be?fe(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(Be){ee!==Be&&!P&&(i.stencilMask(Be),ee=Be)},setFunc:function(Be,Ht,It){(X!==Be||q!==Ht||ne!==It)&&(i.stencilFunc(Be,Ht,It),X=Be,q=Ht,ne=It)},setOp:function(Be,Ht,It){(Me!==Be||Fe!==Ht||et!==It)&&(i.stencilOp(Be,Ht,It),Me=Be,Fe=Ht,et=It)},setLocked:function(Be){P=Be},setClear:function(Be){lt!==Be&&(i.clearStencil(Be),lt=Be)},reset:function(){P=!1,ee=null,X=null,q=null,ne=null,Me=null,Fe=null,et=null,lt=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},p=new WeakMap,d=[],m=null,g=!1,M=null,f=null,u=null,A=null,E=null,y=null,z=null,w=new We(0,0,0),R=0,I=!1,S=null,v=null,C=null,H=null,O=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,V=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=V>=1):j.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=V>=2);let k=null,ae={};const ue=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),Ie=new ot().fromArray(ue),Xe=new ot().fromArray(me);function W(P,ee,X,q){const ne=new Uint8Array(4),Me=i.createTexture();i.bindTexture(P,Me),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<X;Fe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(ee+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Me}const J={};J[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),fe(i.DEPTH_TEST),s.setFunc(Ji),qe(!1),ge(Ws),fe(i.CULL_FACE),Je(on);function fe(P){c[P]!==!0&&(i.enable(P),c[P]=!0)}function le(P){c[P]!==!1&&(i.disable(P),c[P]=!1)}function be(P,ee){return h[P]!==ee?(i.bindFramebuffer(P,ee),h[P]=ee,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ee),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Le(P,ee){let X=d,q=!1;if(P){X=p.get(ee),X===void 0&&(X=[],p.set(ee,X));const ne=P.textures;if(X.length!==ne.length||X[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,Fe=ne.length;Me<Fe;Me++)X[Me]=i.COLOR_ATTACHMENT0+Me;X.length=ne.length,q=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,q=!0);q&&i.drawBuffers(X)}function Ue(P){return m!==P?(i.useProgram(P),m=P,!0):!1}const $e={[En]:i.FUNC_ADD,[zo]:i.FUNC_SUBTRACT,[Ho]:i.FUNC_REVERSE_SUBTRACT};$e[Go]=i.MIN,$e[Vo]=i.MAX;const b={[ko]:i.ZERO,[Wo]:i.ONE,[Xo]:i.SRC_COLOR,[Yr]:i.SRC_ALPHA,[jo]:i.SRC_ALPHA_SATURATE,[$o]:i.DST_COLOR,[Yo]:i.DST_ALPHA,[qo]:i.ONE_MINUS_SRC_COLOR,[Kr]:i.ONE_MINUS_SRC_ALPHA,[Zo]:i.ONE_MINUS_DST_COLOR,[Ko]:i.ONE_MINUS_DST_ALPHA,[Jo]:i.CONSTANT_COLOR,[Qo]:i.ONE_MINUS_CONSTANT_COLOR,[el]:i.CONSTANT_ALPHA,[tl]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(P,ee,X,q,ne,Me,Fe,et,lt,Be){if(P===on){g===!0&&(le(i.BLEND),g=!1);return}if(g===!1&&(fe(i.BLEND),g=!0),P!==Bo){if(P!==M||Be!==I){if((f!==En||E!==En)&&(i.blendEquation(i.FUNC_ADD),f=En,E=En),Be)switch(P){case Yn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xs:i.blendFunc(i.ONE,i.ONE);break;case qs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ys:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ys:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}u=null,A=null,y=null,z=null,w.set(0,0,0),R=0,M=P,I=Be}return}ne=ne||ee,Me=Me||X,Fe=Fe||q,(ee!==f||ne!==E)&&(i.blendEquationSeparate($e[ee],$e[ne]),f=ee,E=ne),(X!==u||q!==A||Me!==y||Fe!==z)&&(i.blendFuncSeparate(b[X],b[q],b[Me],b[Fe]),u=X,A=q,y=Me,z=Fe),(et.equals(w)===!1||lt!==R)&&(i.blendColor(et.r,et.g,et.b,lt),w.copy(et),R=lt),M=P,I=!1}function ke(P,ee){P.side===Yt?le(i.CULL_FACE):fe(i.CULL_FACE);let X=P.side===_t;ee&&(X=!X),qe(X),P.blending===Yn&&P.transparent===!1?Je(on):Je(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const q=P.stencilWrite;a.setTest(q),q&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Te(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(P){S!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),S=P)}function ge(P){P!==No?(fe(i.CULL_FACE),P!==v&&(P===Ws?i.cullFace(i.BACK):P===Fo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),v=P}function Qe(P){P!==C&&(Y&&i.lineWidth(P),C=P)}function Te(P,ee,X){P?(fe(i.POLYGON_OFFSET_FILL),(H!==ee||O!==X)&&(i.polygonOffset(ee,X),H=ee,O=X)):le(i.POLYGON_OFFSET_FILL)}function we(P){P?fe(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function T(P){P===void 0&&(P=i.TEXTURE0+G-1),k!==P&&(i.activeTexture(P),k=P)}function _(P,ee,X){X===void 0&&(k===null?X=i.TEXTURE0+G-1:X=k);let q=ae[X];q===void 0&&(q={type:void 0,texture:void 0},ae[X]=q),(q.type!==P||q.texture!==ee)&&(k!==X&&(i.activeTexture(X),k=X),i.bindTexture(P,ee||J[P]),q.type=P,q.texture=ee)}function B(){const P=ae[k];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(P){Ie.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ie.copy(P))}function he(P){Xe.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Xe.copy(P))}function Ae(P,ee){let X=l.get(ee);X===void 0&&(X=new WeakMap,l.set(ee,X));let q=X.get(P);q===void 0&&(q=i.getUniformBlockIndex(ee,P.name),X.set(P,q))}function De(P,ee){const q=l.get(ee).get(P);o.get(ee)!==q&&(i.uniformBlockBinding(ee,q,P.__bindingPointIndex),o.set(ee,q))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},k=null,ae={},h={},p=new WeakMap,d=[],m=null,g=!1,M=null,f=null,u=null,A=null,E=null,y=null,z=null,w=new We(0,0,0),R=0,I=!1,S=null,v=null,C=null,H=null,O=null,Ie.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:fe,disable:le,bindFramebuffer:be,drawBuffers:Le,useProgram:Ue,setBlending:Je,setMaterial:ke,setFlipSided:qe,setCullFace:ge,setLineWidth:Qe,setPolygonOffset:Te,setScissorTest:we,activeTexture:T,bindTexture:_,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:oe,texImage3D:Ne,updateUBOMapping:Ae,uniformBlockBinding:De,texStorage2D:Re,texStorage3D:Q,texSubImage2D:K,texSubImage3D:ve,compressedTexSubImage2D:re,compressedTexSubImage3D:ce,scissor:ye,viewport:he,reset:Ke}}function za(i,e,t,n){const r=Ld(n);switch(t){case $a:return i*e;case ja:return i*e;case Ja:return i*e*2;case Qa:return i*e/r.components*r.byteLength;case Ls:return i*e/r.components*r.byteLength;case eo:return i*e*2/r.components*r.byteLength;case Ds:return i*e*2/r.components*r.byteLength;case Za:return i*e*3/r.components*r.byteLength;case Dt:return i*e*4/r.components*r.byteLength;case Us:return i*e*4/r.components*r.byteLength;case qi:case Yi:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ki:case $i:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case es:case ns:return Math.max(i,16)*Math.max(e,8)/4;case Qr:case ts:return Math.max(i,8)*Math.max(e,8)/2;case is:case rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case as:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case os:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ls:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case cs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case us:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case hs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ds:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ps:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ms:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _s:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zi:case Ms:case Ss:return Math.ceil(i/4)*Math.ceil(e/4)*16;case to:case Es:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ys:case Ts:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ld(i){switch(i){case Zt:case qa:return{byteLength:1,components:1};case di:case Ya:case pi:return{byteLength:2,components:1};case Cs:case Ps:return{byteLength:2,components:4};case bn:case Rs:case Kt:return{byteLength:4,components:1};case Ka:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Dd(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap;let p;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return m?new OffscreenCanvas(T,_):ir("canvas")}function M(T,_,B){let $=1;const Z=we(T);if((Z.width>B||Z.height>B)&&($=B/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor($*Z.width),ve=Math.floor($*Z.height);p===void 0&&(p=g(K,ve));const re=_?g(K,ve):p;return re.width=K,re.height=ve,re.getContext("2d").drawImage(T,0,0,K,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+ve+")."),re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function f(T){return T.generateMipmaps&&T.minFilter!==At&&T.minFilter!==Lt}function u(T){i.generateMipmap(T)}function A(T,_,B,$,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=_;if(_===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),_===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),_===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),_===i.RGBA){const ve=Z?Qi:Ve.getTransfer($);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=ve===Ye?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function E(T,_){let B;return T?_===null||_===bn||_===Jn?B=i.DEPTH24_STENCIL8:_===Kt?B=i.DEPTH32F_STENCIL8:_===di&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===bn||_===Jn?B=i.DEPTH_COMPONENT24:_===Kt?B=i.DEPTH_COMPONENT32F:_===di&&(B=i.DEPTH_COMPONENT16),B}function y(T,_){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==At&&T.minFilter!==Lt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function z(T){const _=T.target;_.removeEventListener("dispose",z),R(_),_.isVideoTexture&&h.delete(_)}function w(T){const _=T.target;_.removeEventListener("dispose",w),S(_)}function R(T){const _=n.get(T);if(_.__webglInit===void 0)return;const B=T.source,$=d.get(B);if($){const Z=$[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(T),Object.keys($).length===0&&d.delete(B)}n.remove(T)}function I(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const B=T.source,$=d.get(B);delete $[_.__cacheKey],a.memory.textures--}function S(T){const _=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Z=0;Z<_.__webglFramebuffer[$].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[$][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=T.textures;for(let $=0,Z=B.length;$<Z;$++){const K=n.get(B[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(B[$])}n.remove(T)}let v=0;function C(){v=0}function H(){const T=v;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),v+=1,T}function O(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function G(T,_){const B=n.get(T);if(T.isVideoTexture&&Qe(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(B,T,_);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function Y(T,_){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Xe(B,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function V(T,_){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Xe(B,T,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function j(T,_){const B=n.get(T);if(T.version>0&&B.__version!==T.version){W(B,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const k={[jr]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Jr]:i.MIRRORED_REPEAT},ae={[At]:i.NEAREST,[vl]:i.NEAREST_MIPMAP_NEAREST,[Mi]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[_r]:i.LINEAR_MIPMAP_NEAREST,[An]:i.LINEAR_MIPMAP_LINEAR},ue={[yl]:i.NEVER,[Cl]:i.ALWAYS,[Tl]:i.LESS,[no]:i.LEQUAL,[Al]:i.EQUAL,[Rl]:i.GEQUAL,[bl]:i.GREATER,[wl]:i.NOTEQUAL};function me(T,_){if(_.type===Kt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Lt||_.magFilter===_r||_.magFilter===Mi||_.magFilter===An||_.minFilter===Lt||_.minFilter===_r||_.minFilter===Mi||_.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,k[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,k[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,k[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ae[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ae[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===At||_.minFilter!==Mi&&_.minFilter!==An||_.type===Kt&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ie(T,_){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",z));const $=_.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const K=O(_);if(K!==T.__cacheKey){Z[K]===void 0&&(Z[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[K].usedTimes++;const ve=Z[T.__cacheKey];ve!==void 0&&(Z[T.__cacheKey].usedTimes--,ve.usedTimes===0&&I(_)),T.__cacheKey=K,T.__webglTexture=Z[K].texture}return B}function Xe(T,_,B){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const Z=Ie(T,_),K=_.source;t.bindTexture($,T.__webglTexture,i.TEXTURE0+B);const ve=n.get(K);if(K.version!==ve.__version||Z===!0){t.activeTexture(i.TEXTURE0+B);const re=Ve.getPrimaries(Ve.workingColorSpace),ce=_.colorSpace===an?null:Ve.getPrimaries(_.colorSpace),Re=_.colorSpace===an||re===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Q=M(_.image,!1,r.maxTextureSize);Q=Te(_,Q);const oe=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type);let ye=A(_.internalFormat,oe,Ne,_.colorSpace,_.isVideoTexture);me($,_);let he;const Ae=_.mipmaps,De=_.isVideoTexture!==!0,Ke=ve.__version===void 0||Z===!0,P=K.dataReady,ee=y(_,Q);if(_.isDepthTexture)ye=E(_.format===Qn,_.type),Ke&&(De?t.texStorage2D(i.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,ye,Q.width,Q.height,0,oe,Ne,null));else if(_.isDataTexture)if(Ae.length>0){De&&Ke&&t.texStorage2D(i.TEXTURE_2D,ee,ye,Ae[0].width,Ae[0].height);for(let X=0,q=Ae.length;X<q;X++)he=Ae[X],De?P&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,he.width,he.height,oe,Ne,he.data):t.texImage2D(i.TEXTURE_2D,X,ye,he.width,he.height,0,oe,Ne,he.data);_.generateMipmaps=!1}else De?(Ke&&t.texStorage2D(i.TEXTURE_2D,ee,ye,Q.width,Q.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,oe,Ne,Q.data)):t.texImage2D(i.TEXTURE_2D,0,ye,Q.width,Q.height,0,oe,Ne,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){De&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,ye,Ae[0].width,Ae[0].height,Q.depth);for(let X=0,q=Ae.length;X<q;X++)if(he=Ae[X],_.format!==Dt)if(oe!==null)if(De){if(P)if(_.layerUpdates.size>0){const ne=za(he.width,he.height,_.format,_.type);for(const Me of _.layerUpdates){const Fe=he.data.subarray(Me*ne/he.data.BYTES_PER_ELEMENT,(Me+1)*ne/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,Me,he.width,he.height,1,oe,Fe,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,he.width,he.height,Q.depth,oe,he.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,ye,he.width,he.height,Q.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,he.width,he.height,Q.depth,oe,Ne,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,ye,he.width,he.height,Q.depth,0,oe,Ne,he.data)}else{De&&Ke&&t.texStorage2D(i.TEXTURE_2D,ee,ye,Ae[0].width,Ae[0].height);for(let X=0,q=Ae.length;X<q;X++)he=Ae[X],_.format!==Dt?oe!==null?De?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,he.width,he.height,oe,he.data):t.compressedTexImage2D(i.TEXTURE_2D,X,ye,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?P&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,he.width,he.height,oe,Ne,he.data):t.texImage2D(i.TEXTURE_2D,X,ye,he.width,he.height,0,oe,Ne,he.data)}else if(_.isDataArrayTexture)if(De){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,ye,Q.width,Q.height,Q.depth),P)if(_.layerUpdates.size>0){const X=za(Q.width,Q.height,_.format,_.type);for(const q of _.layerUpdates){const ne=Q.data.subarray(q*X/Q.data.BYTES_PER_ELEMENT,(q+1)*X/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,oe,Ne,ne)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,Ne,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,oe,Ne,Q.data);else if(_.isData3DTexture)De?(Ke&&t.texStorage3D(i.TEXTURE_3D,ee,ye,Q.width,Q.height,Q.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,Ne,Q.data)):t.texImage3D(i.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,oe,Ne,Q.data);else if(_.isFramebufferTexture){if(Ke)if(De)t.texStorage2D(i.TEXTURE_2D,ee,ye,Q.width,Q.height);else{let X=Q.width,q=Q.height;for(let ne=0;ne<ee;ne++)t.texImage2D(i.TEXTURE_2D,ne,ye,X,q,0,oe,Ne,null),X>>=1,q>>=1}}else if(Ae.length>0){if(De&&Ke){const X=we(Ae[0]);t.texStorage2D(i.TEXTURE_2D,ee,ye,X.width,X.height)}for(let X=0,q=Ae.length;X<q;X++)he=Ae[X],De?P&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,oe,Ne,he):t.texImage2D(i.TEXTURE_2D,X,ye,oe,Ne,he);_.generateMipmaps=!1}else if(De){if(Ke){const X=we(Q);t.texStorage2D(i.TEXTURE_2D,ee,ye,X.width,X.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Ne,Q)}else t.texImage2D(i.TEXTURE_2D,0,ye,oe,Ne,Q);f(_)&&u($),ve.__version=K.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function W(T,_,B){if(_.image.length!==6)return;const $=Ie(T,_),Z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const K=n.get(Z);if(Z.version!==K.__version||$===!0){t.activeTexture(i.TEXTURE0+B);const ve=Ve.getPrimaries(Ve.workingColorSpace),re=_.colorSpace===an?null:Ve.getPrimaries(_.colorSpace),ce=_.colorSpace===an||ve===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Re=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,oe=[];for(let q=0;q<6;q++)!Re&&!Q?oe[q]=M(_.image[q],!0,r.maxCubemapSize):oe[q]=Q?_.image[q].image:_.image[q],oe[q]=Te(_,oe[q]);const Ne=oe[0],ye=s.convert(_.format,_.colorSpace),he=s.convert(_.type),Ae=A(_.internalFormat,ye,he,_.colorSpace),De=_.isVideoTexture!==!0,Ke=K.__version===void 0||$===!0,P=Z.dataReady;let ee=y(_,Ne);me(i.TEXTURE_CUBE_MAP,_);let X;if(Re){De&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Ae,Ne.width,Ne.height);for(let q=0;q<6;q++){X=oe[q].mipmaps;for(let ne=0;ne<X.length;ne++){const Me=X[ne];_.format!==Dt?ye!==null?De?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne,Ae,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne,0,0,Me.width,Me.height,ye,he,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne,Ae,Me.width,Me.height,0,ye,he,Me.data)}}}else{if(X=_.mipmaps,De&&Ke){X.length>0&&ee++;const q=we(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Ae,q.width,q.height)}for(let q=0;q<6;q++)if(Q){De?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,oe[q].width,oe[q].height,ye,he,oe[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ae,oe[q].width,oe[q].height,0,ye,he,oe[q].data);for(let ne=0;ne<X.length;ne++){const Fe=X[ne].image[q].image;De?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne+1,0,0,Fe.width,Fe.height,ye,he,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne+1,Ae,Fe.width,Fe.height,0,ye,he,Fe.data)}}else{De?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ye,he,oe[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ae,ye,he,oe[q]);for(let ne=0;ne<X.length;ne++){const Me=X[ne];De?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne+1,0,0,ye,he,Me.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne+1,Ae,ye,he,Me.image[q])}}}f(_)&&u(i.TEXTURE_CUBE_MAP),K.__version=Z.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function J(T,_,B,$,Z,K){const ve=s.convert(B.format,B.colorSpace),re=s.convert(B.type),ce=A(B.internalFormat,ve,re,B.colorSpace);if(!n.get(_).__hasExternalTextures){const Q=Math.max(1,_.width>>K),oe=Math.max(1,_.height>>K);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,ce,Q,oe,_.depth,0,ve,re,null):t.texImage2D(Z,K,ce,Q,oe,0,ve,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ge(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,n.get(B).__webglTexture,0,qe(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,n.get(B).__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(T,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const $=_.depthTexture,Z=$&&$.isDepthTexture?$.type:null,K=E(_.stencilBuffer,Z),ve=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=qe(_);ge(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,K,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,T)}else{const $=_.textures;for(let Z=0;Z<$.length;Z++){const K=$[Z],ve=s.convert(K.format,K.colorSpace),re=s.convert(K.type),ce=A(K.internalFormat,ve,re,K.colorSpace),Re=qe(_);B&&ge(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ce,_.width,_.height):ge(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ce,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G(_.depthTexture,0);const $=n.get(_.depthTexture).__webglTexture,Z=qe(_);if(_.depthTexture.format===Kn)ge(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===Qn)ge(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function be(T){const _=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");le(_.__webglFramebuffer,T)}else if(B){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]=i.createRenderbuffer(),fe(_.__webglDepthbuffer[$],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),fe(_.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(T,_,B){const $=n.get(T);_!==void 0&&J($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&be(T)}function Ue(T){const _=T.texture,B=n.get(T),$=n.get(_);T.addEventListener("dispose",w);const Z=T.textures,K=T.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,a.memory.textures++),K){B.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[re]=[];for(let ce=0;ce<_.mipmaps.length;ce++)B.__webglFramebuffer[re][ce]=i.createFramebuffer()}else B.__webglFramebuffer[re]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)B.__webglFramebuffer[re]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ve)for(let re=0,ce=Z.length;re<ce;re++){const Re=n.get(Z[re]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ge(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const ce=Z[re];B.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[re]);const Re=s.convert(ce.format,ce.colorSpace),Q=s.convert(ce.type),oe=A(ce.internalFormat,Re,Q,ce.colorSpace,T.isXRRenderTarget===!0),Ne=qe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,oe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,B.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),me(i.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)J(B.__webglFramebuffer[re][ce],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else J(B.__webglFramebuffer[re],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);f(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let re=0,ce=Z.length;re<ce;re++){const Re=Z[re],Q=n.get(Re);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),me(i.TEXTURE_2D,Re),J(B.__webglFramebuffer,T,Re,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,0),f(Re)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),me(re,_),_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)J(B.__webglFramebuffer[ce],T,_,i.COLOR_ATTACHMENT0,re,ce);else J(B.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,re,0);f(_)&&u(re),t.unbindTexture()}T.depthBuffer&&be(T)}function $e(T){const _=T.textures;for(let B=0,$=_.length;B<$;B++){const Z=_[B];if(f(Z)){const K=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ve=n.get(Z).__webglTexture;t.bindTexture(K,ve),u(K),t.unbindTexture()}}}const b=[],Je=[];function ke(T){if(T.samples>0){if(ge(T)===!1){const _=T.textures,B=T.width,$=T.height;let Z=i.COLOR_BUFFER_BIT;const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(T),re=_.length>1;if(re)for(let ce=0;ce<_.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ce]);const Re=n.get(_[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,Z,i.NEAREST),l===!0&&(b.length=0,Je.length=0,b.push(i.COLOR_ATTACHMENT0+ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(b.push(K),Je.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,b))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let ce=0;ce<_.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ce]);const Re=n.get(_[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function qe(T){return Math.min(r.maxSamples,T.samples)}function ge(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Qe(T){const _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Te(T,_){const B=T.colorSpace,$=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==fn&&B!==an&&(Ve.getTransfer(B)===Ye?($!==Dt||Z!==Zt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function we(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=C,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=V,this.setTextureCube=j,this.rebindTextures=Le,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ge}function Ud(i,e){function t(n,r=an){let s;const a=Ve.getTransfer(r);if(n===Zt)return i.UNSIGNED_BYTE;if(n===Cs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ps)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ka)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qa)return i.BYTE;if(n===Ya)return i.SHORT;if(n===di)return i.UNSIGNED_SHORT;if(n===Rs)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===Kt)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===$a)return i.ALPHA;if(n===Za)return i.RGB;if(n===Dt)return i.RGBA;if(n===ja)return i.LUMINANCE;if(n===Ja)return i.LUMINANCE_ALPHA;if(n===Kn)return i.DEPTH_COMPONENT;if(n===Qn)return i.DEPTH_STENCIL;if(n===Qa)return i.RED;if(n===Ls)return i.RED_INTEGER;if(n===eo)return i.RG;if(n===Ds)return i.RG_INTEGER;if(n===Us)return i.RGBA_INTEGER;if(n===qi||n===Yi||n===Ki||n===$i)if(a===Ye)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===qi)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ki)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$i)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===qi)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yi)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ki)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$i)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qr||n===es||n===ts||n===ns)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===es)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ts)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ns)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===is||n===rs||n===ss)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===is||n===rs)return a===Ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ss)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===as||n===os||n===ls||n===cs||n===us||n===hs||n===fs||n===ds||n===ps||n===ms||n===_s||n===gs||n===vs||n===xs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===as)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===os)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ls)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===us)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ds)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ps)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ms)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_s)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zi||n===Ms||n===Ss)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Zi)return a===Ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ms)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ss)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===to||n===Es||n===ys||n===Ts)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zi)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Es)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ys)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ts)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Id extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vi extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nd={type:"move"};class kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const f=t.getJointPose(M,n),u=this._getHandJoint(c,M);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Fd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Od=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new gt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hn({vertexShader:Fd,fragmentShader:Od,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zd extends ti{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,d=null,m=null,g=null;const M=new Bd,f=t.getContextAttributes();let u=null,A=null;const E=[],y=[],z=new Oe;let w=null;const R=new Tt;R.layers.enable(1),R.viewport=new ot;const I=new Tt;I.layers.enable(2),I.viewport=new ot;const S=[R,I],v=new Id;v.layers.enable(1),v.layers.enable(2);let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=E[W];return J===void 0&&(J=new kr,E[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=E[W];return J===void 0&&(J=new kr,E[W]=J),J.getGripSpace()},this.getHand=function(W){let J=E[W];return J===void 0&&(J=new kr,E[W]=J),J.getHandSpace()};function O(W){const J=y.indexOf(W.inputSource);if(J===-1)return;const fe=E[J];fe!==void 0&&(fe.update(W.inputSource,W.frame,c||a),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Y);for(let W=0;W<E.length;W++){const J=y[W];J!==null&&(y[W]=null,E[W].disconnect(J))}C=null,H=null,M.reset(),e.setRenderTarget(u),m=null,d=null,p=null,r=null,A=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Y),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(z),r.renderState.layers===void 0){const J={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new wn(m.framebufferWidth,m.framebufferHeight,{format:Dt,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let J=null,fe=null,le=null;f.depth&&(le=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=f.stencil?Qn:Kn,fe=f.stencil?Jn:bn);const be={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};p=new XRWebGLBinding(r,t),d=p.createProjectionLayer(be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new wn(d.textureWidth,d.textureHeight,{format:Dt,type:Zt,depthTexture:new go(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Y(W){for(let J=0;J<W.removed.length;J++){const fe=W.removed[J],le=y.indexOf(fe);le>=0&&(y[le]=null,E[le].disconnect(fe))}for(let J=0;J<W.added.length;J++){const fe=W.added[J];let le=y.indexOf(fe);if(le===-1){for(let Le=0;Le<E.length;Le++)if(Le>=y.length){y.push(fe),le=Le;break}else if(y[Le]===null){y[Le]=fe,le=Le;break}if(le===-1)break}const be=E[le];be&&be.connect(fe)}}const V=new U,j=new U;function k(W,J,fe){V.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(fe.matrixWorld);const le=V.distanceTo(j),be=J.projectionMatrix.elements,Le=fe.projectionMatrix.elements,Ue=be[14]/(be[10]-1),$e=be[14]/(be[10]+1),b=(be[9]+1)/be[5],Je=(be[9]-1)/be[5],ke=(be[8]-1)/be[0],qe=(Le[8]+1)/Le[0],ge=Ue*ke,Qe=Ue*qe,Te=le/(-ke+qe),we=Te*-ke;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(we),W.translateZ(Te),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const T=Ue+Te,_=$e+Te,B=ge-we,$=Qe+(le-we),Z=b*$e/_*T,K=Je*$e/_*T;W.projectionMatrix.makePerspective(B,$,Z,K,T,_),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ae(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;M.texture!==null&&(W.near=M.depthNear,W.far=M.depthFar),v.near=I.near=R.near=W.near,v.far=I.far=R.far=W.far,(C!==v.near||H!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,H=v.far,R.near=C,R.far=H,I.near=C,I.far=H,R.updateProjectionMatrix(),I.updateProjectionMatrix(),W.updateProjectionMatrix());const J=W.parent,fe=v.cameras;ae(v,J);for(let le=0;le<fe.length;le++)ae(fe[le],J);fe.length===2?k(v,R,I):v.projectionMatrix.copy(R.projectionMatrix),ue(W,v,J)};function ue(W,J,fe){fe===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=As*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let me=null;function Ie(W,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const fe=h.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let le=!1;fe.length!==v.cameras.length&&(v.cameras.length=0,le=!0);for(let Le=0;Le<fe.length;Le++){const Ue=fe[Le];let $e=null;if(m!==null)$e=m.getViewport(Ue);else{const Je=p.getViewSubImage(d,Ue);$e=Je.viewport,Le===0&&(e.setRenderTargetTextures(A,Je.colorTexture,d.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(A))}let b=S[Le];b===void 0&&(b=new Tt,b.layers.enable(Le),b.viewport=new ot,S[Le]=b),b.matrix.fromArray(Ue.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(Ue.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set($e.x,$e.y,$e.width,$e.height),Le===0&&(v.matrix.copy(b.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),le===!0&&v.cameras.push(b)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Le=p.getDepthInformation(fe[0]);Le&&Le.isValid&&Le.texture&&M.init(e,Le,r.renderState)}}for(let fe=0;fe<E.length;fe++){const le=y[fe],be=E[fe];le!==null&&be!==void 0&&be.update(le,J,c||a)}me&&me(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Xe=new _o;Xe.setAnimationLoop(Ie),this.setAnimationLoop=function(W){me=W},this.dispose=function(){}}}const xn=new jt,Hd=new it;function Gd(i,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,ho(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function r(f,u,A,E,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(f,u):u.isMeshToonMaterial?(s(f,u),p(f,u)):u.isMeshPhongMaterial?(s(f,u),h(f,u)):u.isMeshStandardMaterial?(s(f,u),d(f,u),u.isMeshPhysicalMaterial&&m(f,u,y)):u.isMeshMatcapMaterial?(s(f,u),g(f,u)):u.isMeshDepthMaterial?s(f,u):u.isMeshDistanceMaterial?(s(f,u),M(f,u)):u.isMeshNormalMaterial?s(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?l(f,u,A,E):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===_t&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===_t&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const A=e.get(u),E=A.envMap,y=A.envMapRotation;E&&(f.envMap.value=E,xn.copy(y),xn.x*=-1,xn.y*=-1,xn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(xn.y*=-1,xn.z*=-1),f.envMapRotation.value.setFromMatrix4(Hd.makeRotationFromEuler(xn)),f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,A,E){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*A,f.scale.value=E*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function p(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function d(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,A){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===_t&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=A.texture,f.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,u){u.matcap&&(f.matcap.value=u.matcap)}function M(f,u){const A=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(A.matrixWorld),f.nearDistance.value=A.shadow.camera.near,f.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Vd(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const y=E.program;n.uniformBlockBinding(A,y)}function c(A,E){let y=r[A.id];y===void 0&&(g(A),y=h(A),r[A.id]=y,A.addEventListener("dispose",f));const z=E.program;n.updateUBOMapping(A,z);const w=e.render.frame;s[A.id]!==w&&(d(A),s[A.id]=w)}function h(A){const E=p();A.__bindingPointIndex=E;const y=i.createBuffer(),z=A.__size,w=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,z,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function p(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const E=r[A.id],y=A.uniforms,z=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,R=y.length;w<R;w++){const I=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,v=I.length;S<v;S++){const C=I[S];if(m(C,w,S,z)===!0){const H=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let G=0;for(let Y=0;Y<O.length;Y++){const V=O[Y],j=M(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,H+G,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,E,y,z){const w=A.value,R=E+"_"+y;if(z[R]===void 0)return typeof w=="number"||typeof w=="boolean"?z[R]=w:z[R]=w.clone(),!0;{const I=z[R];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return z[R]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(A){const E=A.uniforms;let y=0;const z=16;for(let R=0,I=E.length;R<I;R++){const S=Array.isArray(E[R])?E[R]:[E[R]];for(let v=0,C=S.length;v<C;v++){const H=S[v],O=Array.isArray(H.value)?H.value:[H.value];for(let G=0,Y=O.length;G<Y;G++){const V=O[G],j=M(V),k=y%z,ae=k%j.boundary,ue=k+ae;y+=ae,ue!==0&&z-ue<j.storage&&(y+=z-ue),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=j.storage}}}const w=y%z;return w>0&&(y+=z-w),A.__size=y,A.__cache={},this}function M(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function f(A){const E=A.target;E.removeEventListener("dispose",f);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function u(){for(const A in r)i.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class kd{constructor(e={}){const{canvas:t=Ll(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),g=new Int32Array(4);let M=null,f=null;const u=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=ln,this.toneMappingExposure=1;const E=this;let y=!1,z=0,w=0,R=null,I=-1,S=null;const v=new ot,C=new ot;let H=null;const O=new We(0);let G=0,Y=t.width,V=t.height,j=1,k=null,ae=null;const ue=new ot(0,0,Y,V),me=new ot(0,0,Y,V);let Ie=!1;const Xe=new mo;let W=!1,J=!1;const fe=new it,le=new U,be=new ot,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function $e(){return R===null?j:1}let b=n;function Je(x,L){return t.getContext(x,L)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ws}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",ne,!1),b===null){const L="webgl2";if(b=Je(L,x),b===null)throw Je(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ke,qe,ge,Qe,Te,we,T,_,B,$,Z,K,ve,re,ce,Re,Q,oe,Ne,ye,he,Ae,De,Ke;function P(){ke=new Kh(b),ke.init(),Ae=new Ud(b,ke),qe=new Gh(b,ke,e,Ae),ge=new Pd(b),Qe=new jh(b),Te=new _d,we=new Dd(b,ke,ge,Te,qe,Ae,Qe),T=new kh(E),_=new Yh(E),B=new ic(b),De=new zh(b,B),$=new $h(b,B,Qe,De),Z=new Qh(b,$,B,Qe),Ne=new Jh(b,qe,we),Re=new Vh(Te),K=new md(E,T,_,ke,qe,De,Re),ve=new Gd(E,Te),re=new vd,ce=new Td(ke),oe=new Bh(E,T,_,ge,Z,d,l),Q=new Cd(E,Z,qe),Ke=new Vd(b,Qe,qe,ge),ye=new Hh(b,ke,Qe),he=new Zh(b,ke,Qe),Qe.programs=K.programs,E.capabilities=qe,E.extensions=ke,E.properties=Te,E.renderLists=re,E.shadowMap=Q,E.state=ge,E.info=Qe}P();const ee=new zd(E,b);this.xr=ee,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const x=ke.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ke.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(Y,V,!1))},this.getSize=function(x){return x.set(Y,V)},this.setSize=function(x,L,N=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,V=L,t.width=Math.floor(x*j),t.height=Math.floor(L*j),N===!0&&(t.style.width=x+"px",t.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(Y*j,V*j).floor()},this.setDrawingBufferSize=function(x,L,N){Y=x,V=L,j=N,t.width=Math.floor(x*N),t.height=Math.floor(L*N),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(v)},this.getViewport=function(x){return x.copy(ue)},this.setViewport=function(x,L,N,F){x.isVector4?ue.set(x.x,x.y,x.z,x.w):ue.set(x,L,N,F),ge.viewport(v.copy(ue).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(me)},this.setScissor=function(x,L,N,F){x.isVector4?me.set(x.x,x.y,x.z,x.w):me.set(x,L,N,F),ge.scissor(C.copy(me).multiplyScalar(j).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(x){ge.setScissorTest(Ie=x)},this.setOpaqueSort=function(x){k=x},this.setTransparentSort=function(x){ae=x},this.getClearColor=function(x){return x.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(x=!0,L=!0,N=!0){let F=0;if(x){let D=!1;if(R!==null){const te=R.texture.format;D=te===Us||te===Ds||te===Ls}if(D){const te=R.texture.type,se=te===Zt||te===bn||te===di||te===Jn||te===Cs||te===Ps,de=oe.getClearColor(),pe=oe.getClearAlpha(),Se=de.r,Ee=de.g,xe=de.b;se?(m[0]=Se,m[1]=Ee,m[2]=xe,m[3]=pe,b.clearBufferuiv(b.COLOR,0,m)):(g[0]=Se,g[1]=Ee,g[2]=xe,g[3]=pe,b.clearBufferiv(b.COLOR,0,g))}else F|=b.COLOR_BUFFER_BIT}L&&(F|=b.DEPTH_BUFFER_BIT),N&&(F|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),re.dispose(),ce.dispose(),Te.dispose(),T.dispose(),_.dispose(),Z.dispose(),De.dispose(),Ke.dispose(),K.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",It),ee.removeEventListener("sessionend",Os),dn.stop()};function X(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const x=Qe.autoReset,L=Q.enabled,N=Q.autoUpdate,F=Q.needsUpdate,D=Q.type;P(),Qe.autoReset=x,Q.enabled=L,Q.autoUpdate=N,Q.needsUpdate=F,Q.type=D}function ne(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Me(x){const L=x.target;L.removeEventListener("dispose",Me),Fe(L)}function Fe(x){et(x),Te.remove(x)}function et(x){const L=Te.get(x).programs;L!==void 0&&(L.forEach(function(N){K.releaseProgram(N)}),x.isShaderMaterial&&K.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,N,F,D,te){L===null&&(L=Le);const se=D.isMesh&&D.matrixWorld.determinant()<0,de=yo(x,L,N,F,D);ge.setMaterial(F,se);let pe=N.index,Se=1;if(F.wireframe===!0){if(pe=$.getWireframeAttribute(N),pe===void 0)return;Se=2}const Ee=N.drawRange,xe=N.attributes.position;let ze=Ee.start*Se,Ze=(Ee.start+Ee.count)*Se;te!==null&&(ze=Math.max(ze,te.start*Se),Ze=Math.min(Ze,(te.start+te.count)*Se)),pe!==null?(ze=Math.max(ze,0),Ze=Math.min(Ze,pe.count)):xe!=null&&(ze=Math.max(ze,0),Ze=Math.min(Ze,xe.count));const je=Ze-ze;if(je<0||je===1/0)return;De.setup(D,F,de,N,pe);let vt,He=ye;if(pe!==null&&(vt=B.get(pe),He=he,He.setIndex(vt)),D.isMesh)F.wireframe===!0?(ge.setLineWidth(F.wireframeLinewidth*$e()),He.setMode(b.LINES)):He.setMode(b.TRIANGLES);else if(D.isLine){let _e=F.linewidth;_e===void 0&&(_e=1),ge.setLineWidth(_e*$e()),D.isLineSegments?He.setMode(b.LINES):D.isLineLoop?He.setMode(b.LINE_LOOP):He.setMode(b.LINE_STRIP)}else D.isPoints?He.setMode(b.POINTS):D.isSprite&&He.setMode(b.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)He.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))He.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const _e=D._multiDrawStarts,ct=D._multiDrawCounts,Ge=D._multiDrawCount,wt=pe?B.get(pe).bytesPerElement:1,Rn=Te.get(F).currentProgram.getUniforms();for(let xt=0;xt<Ge;xt++)Rn.setValue(b,"_gl_DrawID",xt),He.render(_e[xt]/wt,ct[xt])}else if(D.isInstancedMesh)He.renderInstances(ze,je,D.count);else if(N.isInstancedBufferGeometry){const _e=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,ct=Math.min(N.instanceCount,_e);He.renderInstances(ze,je,ct)}else He.render(ze,je)};function lt(x,L,N){x.transparent===!0&&x.side===Yt&&x.forceSinglePass===!1?(x.side=_t,x.needsUpdate=!0,xi(x,L,N),x.side=un,x.needsUpdate=!0,xi(x,L,N),x.side=Yt):xi(x,L,N)}this.compile=function(x,L,N=null){N===null&&(N=x),f=ce.get(N),f.init(L),A.push(f),N.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),x!==N&&x.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();const F=new Set;return x.traverse(function(D){const te=D.material;if(te)if(Array.isArray(te))for(let se=0;se<te.length;se++){const de=te[se];lt(de,N,D),F.add(de)}else lt(te,N,D),F.add(te)}),A.pop(),f=null,F},this.compileAsync=function(x,L,N=null){const F=this.compile(x,L,N);return new Promise(D=>{function te(){if(F.forEach(function(se){Te.get(se).currentProgram.isReady()&&F.delete(se)}),F.size===0){D(x);return}setTimeout(te,10)}ke.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Be=null;function Ht(x){Be&&Be(x)}function It(){dn.stop()}function Os(){dn.start()}const dn=new _o;dn.setAnimationLoop(Ht),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(x){Be=x,ee.setAnimationLoop(x),x===null?dn.stop():dn.start()},ee.addEventListener("sessionstart",It),ee.addEventListener("sessionend",Os),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(L),L=ee.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,L,R),f=ce.get(x,A.length),f.init(L),A.push(f),fe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Xe.setFromProjectionMatrix(fe),J=this.localClippingEnabled,W=Re.init(this.clippingPlanes,J),M=re.get(x,u.length),M.init(),u.push(M),ee.enabled===!0&&ee.isPresenting===!0){const te=E.xr.getDepthSensingMesh();te!==null&&fr(te,L,-1/0,E.sortObjects)}fr(x,L,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(k,ae),Ue=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Ue&&oe.addToRenderList(M,x),this.info.render.frame++,W===!0&&Re.beginShadows();const N=f.state.shadowsArray;Q.render(N,x,L),W===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=M.opaque,D=M.transmissive;if(f.setupLights(),L.isArrayCamera){const te=L.cameras;if(D.length>0)for(let se=0,de=te.length;se<de;se++){const pe=te[se];zs(F,D,x,pe)}Ue&&oe.render(x);for(let se=0,de=te.length;se<de;se++){const pe=te[se];Bs(M,x,pe,pe.viewport)}}else D.length>0&&zs(F,D,x,L),Ue&&oe.render(x),Bs(M,x,L);R!==null&&(we.updateMultisampleRenderTarget(R),we.updateRenderTargetMipmap(R)),x.isScene===!0&&x.onAfterRender(E,x,L),De.resetDefaultState(),I=-1,S=null,A.pop(),A.length>0?(f=A[A.length-1],W===!0&&Re.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,u.pop(),u.length>0?M=u[u.length-1]:M=null};function fr(x,L,N,F){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)N=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Xe.intersectsSprite(x)){F&&be.setFromMatrixPosition(x.matrixWorld).applyMatrix4(fe);const se=Z.update(x),de=x.material;de.visible&&M.push(x,se,de,N,be.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Xe.intersectsObject(x))){const se=Z.update(x),de=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),be.copy(x.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),be.copy(se.boundingSphere.center)),be.applyMatrix4(x.matrixWorld).applyMatrix4(fe)),Array.isArray(de)){const pe=se.groups;for(let Se=0,Ee=pe.length;Se<Ee;Se++){const xe=pe[Se],ze=de[xe.materialIndex];ze&&ze.visible&&M.push(x,se,ze,N,be.z,xe)}}else de.visible&&M.push(x,se,de,N,be.z,null)}}const te=x.children;for(let se=0,de=te.length;se<de;se++)fr(te[se],L,N,F)}function Bs(x,L,N,F){const D=x.opaque,te=x.transmissive,se=x.transparent;f.setupLightsView(N),W===!0&&Re.setGlobalState(E.clippingPlanes,N),F&&ge.viewport(v.copy(F)),D.length>0&&vi(D,L,N),te.length>0&&vi(te,L,N),se.length>0&&vi(se,L,N),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function zs(x,L,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[F.id]===void 0&&(f.state.transmissionRenderTarget[F.id]=new wn(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?pi:Zt,minFilter:An,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const te=f.state.transmissionRenderTarget[F.id],se=F.viewport||v;te.setSize(se.z,se.w);const de=E.getRenderTarget();E.setRenderTarget(te),E.getClearColor(O),G=E.getClearAlpha(),G<1&&E.setClearColor(16777215,.5),E.clear(),Ue&&oe.render(N);const pe=E.toneMapping;E.toneMapping=ln;const Se=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),f.setupLightsView(F),W===!0&&Re.setGlobalState(E.clippingPlanes,F),vi(x,N,F),we.updateMultisampleRenderTarget(te),we.updateRenderTargetMipmap(te),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let xe=0,ze=L.length;xe<ze;xe++){const Ze=L[xe],je=Ze.object,vt=Ze.geometry,He=Ze.material,_e=Ze.group;if(He.side===Yt&&je.layers.test(F.layers)){const ct=He.side;He.side=_t,He.needsUpdate=!0,Hs(je,N,F,vt,He,_e),He.side=ct,He.needsUpdate=!0,Ee=!0}}Ee===!0&&(we.updateMultisampleRenderTarget(te),we.updateRenderTargetMipmap(te))}E.setRenderTarget(de),E.setClearColor(O,G),Se!==void 0&&(F.viewport=Se),E.toneMapping=pe}function vi(x,L,N){const F=L.isScene===!0?L.overrideMaterial:null;for(let D=0,te=x.length;D<te;D++){const se=x[D],de=se.object,pe=se.geometry,Se=F===null?se.material:F,Ee=se.group;de.layers.test(N.layers)&&Hs(de,L,N,pe,Se,Ee)}}function Hs(x,L,N,F,D,te){x.onBeforeRender(E,L,N,F,D,te),x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.transparent===!0&&D.side===Yt&&D.forceSinglePass===!1?(D.side=_t,D.needsUpdate=!0,E.renderBufferDirect(N,L,F,D,x,te),D.side=un,D.needsUpdate=!0,E.renderBufferDirect(N,L,F,D,x,te),D.side=Yt):E.renderBufferDirect(N,L,F,D,x,te),x.onAfterRender(E,L,N,F,D,te)}function xi(x,L,N){L.isScene!==!0&&(L=Le);const F=Te.get(x),D=f.state.lights,te=f.state.shadowsArray,se=D.state.version,de=K.getParameters(x,D.state,te,L,N),pe=K.getProgramCacheKey(de);let Se=F.programs;F.environment=x.isMeshStandardMaterial?L.environment:null,F.fog=L.fog,F.envMap=(x.isMeshStandardMaterial?_:T).get(x.envMap||F.environment),F.envMapRotation=F.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Se===void 0&&(x.addEventListener("dispose",Me),Se=new Map,F.programs=Se);let Ee=Se.get(pe);if(Ee!==void 0){if(F.currentProgram===Ee&&F.lightsStateVersion===se)return Vs(x,de),Ee}else de.uniforms=K.getUniforms(x),x.onBeforeCompile(de,E),Ee=K.acquireProgram(de,pe),Se.set(pe,Ee),F.uniforms=de.uniforms;const xe=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(xe.clippingPlanes=Re.uniform),Vs(x,de),F.needsLights=Ao(x),F.lightsStateVersion=se,F.needsLights&&(xe.ambientLightColor.value=D.state.ambient,xe.lightProbe.value=D.state.probe,xe.directionalLights.value=D.state.directional,xe.directionalLightShadows.value=D.state.directionalShadow,xe.spotLights.value=D.state.spot,xe.spotLightShadows.value=D.state.spotShadow,xe.rectAreaLights.value=D.state.rectArea,xe.ltc_1.value=D.state.rectAreaLTC1,xe.ltc_2.value=D.state.rectAreaLTC2,xe.pointLights.value=D.state.point,xe.pointLightShadows.value=D.state.pointShadow,xe.hemisphereLights.value=D.state.hemi,xe.directionalShadowMap.value=D.state.directionalShadowMap,xe.directionalShadowMatrix.value=D.state.directionalShadowMatrix,xe.spotShadowMap.value=D.state.spotShadowMap,xe.spotLightMatrix.value=D.state.spotLightMatrix,xe.spotLightMap.value=D.state.spotLightMap,xe.pointShadowMap.value=D.state.pointShadowMap,xe.pointShadowMatrix.value=D.state.pointShadowMatrix),F.currentProgram=Ee,F.uniformsList=null,Ee}function Gs(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=ji.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Vs(x,L){const N=Te.get(x);N.outputColorSpace=L.outputColorSpace,N.batching=L.batching,N.batchingColor=L.batchingColor,N.instancing=L.instancing,N.instancingColor=L.instancingColor,N.instancingMorph=L.instancingMorph,N.skinning=L.skinning,N.morphTargets=L.morphTargets,N.morphNormals=L.morphNormals,N.morphColors=L.morphColors,N.morphTargetsCount=L.morphTargetsCount,N.numClippingPlanes=L.numClippingPlanes,N.numIntersection=L.numClipIntersection,N.vertexAlphas=L.vertexAlphas,N.vertexTangents=L.vertexTangents,N.toneMapping=L.toneMapping}function yo(x,L,N,F,D){L.isScene!==!0&&(L=Le),we.resetTextureUnits();const te=L.fog,se=F.isMeshStandardMaterial?L.environment:null,de=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:fn,pe=(F.isMeshStandardMaterial?_:T).get(F.envMap||se),Se=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ee=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),xe=!!N.morphAttributes.position,ze=!!N.morphAttributes.normal,Ze=!!N.morphAttributes.color;let je=ln;F.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(je=E.toneMapping);const vt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,He=vt!==void 0?vt.length:0,_e=Te.get(F),ct=f.state.lights;if(W===!0&&(J===!0||x!==S)){const Et=x===S&&F.id===I;Re.setState(F,x,Et)}let Ge=!1;F.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==ct.state.version||_e.outputColorSpace!==de||D.isBatchedMesh&&_e.batching===!1||!D.isBatchedMesh&&_e.batching===!0||D.isBatchedMesh&&_e.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&_e.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&_e.instancing===!1||!D.isInstancedMesh&&_e.instancing===!0||D.isSkinnedMesh&&_e.skinning===!1||!D.isSkinnedMesh&&_e.skinning===!0||D.isInstancedMesh&&_e.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&_e.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&_e.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&_e.instancingMorph===!1&&D.morphTexture!==null||_e.envMap!==pe||F.fog===!0&&_e.fog!==te||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Re.numPlanes||_e.numIntersection!==Re.numIntersection)||_e.vertexAlphas!==Se||_e.vertexTangents!==Ee||_e.morphTargets!==xe||_e.morphNormals!==ze||_e.morphColors!==Ze||_e.toneMapping!==je||_e.morphTargetsCount!==He)&&(Ge=!0):(Ge=!0,_e.__version=F.version);let wt=_e.currentProgram;Ge===!0&&(wt=xi(F,L,D));let Rn=!1,xt=!1,dr=!1;const tt=wt.getUniforms(),Jt=_e.uniforms;if(ge.useProgram(wt.program)&&(Rn=!0,xt=!0,dr=!0),F.id!==I&&(I=F.id,xt=!0),Rn||S!==x){tt.setValue(b,"projectionMatrix",x.projectionMatrix),tt.setValue(b,"viewMatrix",x.matrixWorldInverse);const Et=tt.map.cameraPosition;Et!==void 0&&Et.setValue(b,le.setFromMatrixPosition(x.matrixWorld)),qe.logarithmicDepthBuffer&&tt.setValue(b,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&tt.setValue(b,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,xt=!0,dr=!0)}if(D.isSkinnedMesh){tt.setOptional(b,D,"bindMatrix"),tt.setOptional(b,D,"bindMatrixInverse");const Et=D.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),tt.setValue(b,"boneTexture",Et.boneTexture,we))}D.isBatchedMesh&&(tt.setOptional(b,D,"batchingTexture"),tt.setValue(b,"batchingTexture",D._matricesTexture,we),tt.setOptional(b,D,"batchingIdTexture"),tt.setValue(b,"batchingIdTexture",D._indirectTexture,we),tt.setOptional(b,D,"batchingColorTexture"),D._colorsTexture!==null&&tt.setValue(b,"batchingColorTexture",D._colorsTexture,we));const pr=N.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&Ne.update(D,N,wt),(xt||_e.receiveShadow!==D.receiveShadow)&&(_e.receiveShadow=D.receiveShadow,tt.setValue(b,"receiveShadow",D.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Jt.envMap.value=pe,Jt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&L.environment!==null&&(Jt.envMapIntensity.value=L.environmentIntensity),xt&&(tt.setValue(b,"toneMappingExposure",E.toneMappingExposure),_e.needsLights&&To(Jt,dr),te&&F.fog===!0&&ve.refreshFogUniforms(Jt,te),ve.refreshMaterialUniforms(Jt,F,j,V,f.state.transmissionRenderTarget[x.id]),ji.upload(b,Gs(_e),Jt,we)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ji.upload(b,Gs(_e),Jt,we),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&tt.setValue(b,"center",D.center),tt.setValue(b,"modelViewMatrix",D.modelViewMatrix),tt.setValue(b,"normalMatrix",D.normalMatrix),tt.setValue(b,"modelMatrix",D.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Et=F.uniformsGroups;for(let mr=0,bo=Et.length;mr<bo;mr++){const ks=Et[mr];Ke.update(ks,wt),Ke.bind(ks,wt)}}return wt}function To(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Ao(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(x,L,N){Te.get(x.texture).__webglTexture=L,Te.get(x.depthTexture).__webglTexture=N;const F=Te.get(x);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=N===void 0,F.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const N=Te.get(x);N.__webglFramebuffer=L,N.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,N=0){R=x,z=L,w=N;let F=!0,D=null,te=!1,se=!1;if(x){const pe=Te.get(x);pe.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(b.FRAMEBUFFER,null),F=!1):pe.__webglFramebuffer===void 0?we.setupRenderTarget(x):pe.__hasExternalTextures&&we.rebindTextures(x,Te.get(x.texture).__webglTexture,Te.get(x.depthTexture).__webglTexture);const Se=x.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(se=!0);const Ee=Te.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ee[L])?D=Ee[L][N]:D=Ee[L],te=!0):x.samples>0&&we.useMultisampledRTT(x)===!1?D=Te.get(x).__webglMultisampledFramebuffer:Array.isArray(Ee)?D=Ee[N]:D=Ee,v.copy(x.viewport),C.copy(x.scissor),H=x.scissorTest}else v.copy(ue).multiplyScalar(j).floor(),C.copy(me).multiplyScalar(j).floor(),H=Ie;if(ge.bindFramebuffer(b.FRAMEBUFFER,D)&&F&&ge.drawBuffers(x,D),ge.viewport(v),ge.scissor(C),ge.setScissorTest(H),te){const pe=Te.get(x.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe.__webglTexture,N)}else if(se){const pe=Te.get(x.texture),Se=L||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,pe.__webglTexture,N||0,Se)}I=-1},this.readRenderTargetPixels=function(x,L,N,F,D,te,se){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&se!==void 0&&(de=de[se]),de){ge.bindFramebuffer(b.FRAMEBUFFER,de);try{const pe=x.texture,Se=pe.format,Ee=pe.type;if(!qe.textureFormatReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-F&&N>=0&&N<=x.height-D&&b.readPixels(L,N,F,D,Ae.convert(Se),Ae.convert(Ee),te)}finally{const pe=R!==null?Te.get(R).__webglFramebuffer:null;ge.bindFramebuffer(b.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(x,L,N,F,D,te,se){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&se!==void 0&&(de=de[se]),de){ge.bindFramebuffer(b.FRAMEBUFFER,de);try{const pe=x.texture,Se=pe.format,Ee=pe.type;if(!qe.textureFormatReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-F&&N>=0&&N<=x.height-D){const xe=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,xe),b.bufferData(b.PIXEL_PACK_BUFFER,te.byteLength,b.STREAM_READ),b.readPixels(L,N,F,D,Ae.convert(Se),Ae.convert(Ee),0),b.flush();const ze=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);await Dl(b,ze,4);try{b.bindBuffer(b.PIXEL_PACK_BUFFER,xe),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,te)}finally{b.deleteBuffer(xe),b.deleteSync(ze)}return te}}finally{const pe=R!==null?Te.get(R).__webglFramebuffer:null;ge.bindFramebuffer(b.FRAMEBUFFER,pe)}}},this.copyFramebufferToTexture=function(x,L=null,N=0){x.isTexture!==!0&&(fi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const F=Math.pow(2,-N),D=Math.floor(x.image.width*F),te=Math.floor(x.image.height*F),se=L!==null?L.x:0,de=L!==null?L.y:0;we.setTexture2D(x,0),b.copyTexSubImage2D(b.TEXTURE_2D,N,0,0,se,de,D,te),ge.unbindTexture()},this.copyTextureToTexture=function(x,L,N=null,F=null,D=0){x.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,x=arguments[1],L=arguments[2],D=arguments[3]||0,N=null);let te,se,de,pe,Se,Ee;N!==null?(te=N.max.x-N.min.x,se=N.max.y-N.min.y,de=N.min.x,pe=N.min.y):(te=x.image.width,se=x.image.height,de=0,pe=0),F!==null?(Se=F.x,Ee=F.y):(Se=0,Ee=0);const xe=Ae.convert(L.format),ze=Ae.convert(L.type);we.setTexture2D(L,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,L.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,L.unpackAlignment);const Ze=b.getParameter(b.UNPACK_ROW_LENGTH),je=b.getParameter(b.UNPACK_IMAGE_HEIGHT),vt=b.getParameter(b.UNPACK_SKIP_PIXELS),He=b.getParameter(b.UNPACK_SKIP_ROWS),_e=b.getParameter(b.UNPACK_SKIP_IMAGES),ct=x.isCompressedTexture?x.mipmaps[D]:x.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,ct.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ct.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,de),b.pixelStorei(b.UNPACK_SKIP_ROWS,pe),x.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,D,Se,Ee,te,se,xe,ze,ct.data):x.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,D,Se,Ee,ct.width,ct.height,xe,ct.data):b.texSubImage2D(b.TEXTURE_2D,D,Se,Ee,te,se,xe,ze,ct),b.pixelStorei(b.UNPACK_ROW_LENGTH,Ze),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,je),b.pixelStorei(b.UNPACK_SKIP_PIXELS,vt),b.pixelStorei(b.UNPACK_SKIP_ROWS,He),b.pixelStorei(b.UNPACK_SKIP_IMAGES,_e),D===0&&L.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(x,L,N=null,F=null,D=0){x.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,F=arguments[1]||null,x=arguments[2],L=arguments[3],D=arguments[4]||0);let te,se,de,pe,Se,Ee,xe,ze,Ze;const je=x.isCompressedTexture?x.mipmaps[D]:x.image;N!==null?(te=N.max.x-N.min.x,se=N.max.y-N.min.y,de=N.max.z-N.min.z,pe=N.min.x,Se=N.min.y,Ee=N.min.z):(te=je.width,se=je.height,de=je.depth,pe=0,Se=0,Ee=0),F!==null?(xe=F.x,ze=F.y,Ze=F.z):(xe=0,ze=0,Ze=0);const vt=Ae.convert(L.format),He=Ae.convert(L.type);let _e;if(L.isData3DTexture)we.setTexture3D(L,0),_e=b.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)we.setTexture2DArray(L,0),_e=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,L.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,L.unpackAlignment);const ct=b.getParameter(b.UNPACK_ROW_LENGTH),Ge=b.getParameter(b.UNPACK_IMAGE_HEIGHT),wt=b.getParameter(b.UNPACK_SKIP_PIXELS),Rn=b.getParameter(b.UNPACK_SKIP_ROWS),xt=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,je.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,je.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,pe),b.pixelStorei(b.UNPACK_SKIP_ROWS,Se),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ee),x.isDataTexture||x.isData3DTexture?b.texSubImage3D(_e,D,xe,ze,Ze,te,se,de,vt,He,je.data):L.isCompressedArrayTexture?b.compressedTexSubImage3D(_e,D,xe,ze,Ze,te,se,de,vt,je.data):b.texSubImage3D(_e,D,xe,ze,Ze,te,se,de,vt,He,je),b.pixelStorei(b.UNPACK_ROW_LENGTH,ct),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ge),b.pixelStorei(b.UNPACK_SKIP_PIXELS,wt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Rn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,xt),D===0&&L.generateMipmaps&&b.generateMipmap(_e),ge.unbindTexture()},this.initRenderTarget=function(x){Te.get(x).__webglFramebuffer===void 0&&we.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?we.setTextureCube(x,0):x.isData3DTexture?we.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?we.setTexture2DArray(x,0):we.setTexture2D(x,0),ge.unbindTexture()},this.resetState=function(){z=0,w=0,R=null,ge.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $t}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Is?"display-p3":"srgb",t.unpackColorSpace=Ve.workingColorSpace===or?"display-p3":"srgb"}}class Wd extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Eo extends gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rr=new U,sr=new U,Ha=new it,ui=new ao,ki=new lr,Wr=new U,Ga=new U;class Xd extends dt{constructor(e=new zt,t=new Eo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)rr.fromBufferAttribute(t,r-1),sr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=rr.distanceTo(sr);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ki.copy(n.boundingSphere),ki.applyMatrix4(r),ki.radius+=s,e.ray.intersectsSphere(ki)===!1)return;Ha.copy(r).invert(),ui.copy(e.ray).applyMatrix4(Ha);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=m,f=g-1;M<f;M+=c){const u=h.getX(M),A=h.getX(M+1),E=Wi(this,e,ui,l,u,A);E&&t.push(E)}if(this.isLineLoop){const M=h.getX(g-1),f=h.getX(m),u=Wi(this,e,ui,l,M,f);u&&t.push(u)}}else{const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=m,f=g-1;M<f;M+=c){const u=Wi(this,e,ui,l,M,M+1);u&&t.push(u)}if(this.isLineLoop){const M=Wi(this,e,ui,l,g-1,m);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wi(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(rr.fromBufferAttribute(a,r),sr.fromBufferAttribute(a,s),t.distanceSqToSegment(rr,sr,Wr,Ga)>n)return;Wr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Wr);if(!(l<e.near||l>e.far))return{distance:l,point:Ga.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}class Fs extends zt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],d=[],m=[];let g=0;const M=[],f=n/2;let u=0;A(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(m,2));function A(){const y=new U,z=new U;let w=0;const R=(t-e)/n;for(let I=0;I<=s;I++){const S=[],v=I/s,C=v*(t-e)+e;for(let H=0;H<=r;H++){const O=H/r,G=O*l+o,Y=Math.sin(G),V=Math.cos(G);z.x=C*Y,z.y=-v*n+f,z.z=C*V,p.push(z.x,z.y,z.z),y.set(Y,R,V).normalize(),d.push(y.x,y.y,y.z),m.push(O,1-v),S.push(g++)}M.push(S)}for(let I=0;I<r;I++)for(let S=0;S<s;S++){const v=M[S][I],C=M[S+1][I],H=M[S+1][I+1],O=M[S][I+1];h.push(v,C,O),h.push(C,H,O),w+=6}c.addGroup(u,w,0),u+=w}function E(y){const z=g,w=new Oe,R=new U;let I=0;const S=y===!0?e:t,v=y===!0?1:-1;for(let H=1;H<=r;H++)p.push(0,f*v,0),d.push(0,v,0),m.push(.5,.5),g++;const C=g;for(let H=0;H<=r;H++){const G=H/r*l+o,Y=Math.cos(G),V=Math.sin(G);R.x=S*V,R.y=f*v,R.z=S*Y,p.push(R.x,R.y,R.z),d.push(0,v,0),w.x=Y*.5+.5,w.y=V*.5*v+.5,m.push(w.x,w.y),g++}for(let H=0;H<r;H++){const O=z+H,G=C+H;y===!0?h.push(G,G+1,O):h.push(G+1,G,O),I+=3}c.addGroup(u,I,y===!0?1:2),u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Va=new U;let Xi,Xr;class qr extends dt{constructor(e=new U(0,0,1),t=new U(0,0,0),n=1,r=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",Xi===void 0&&(Xi=new zt,Xi.setAttribute("position",new bt([0,0,0,0,1,0],3)),Xr=new Fs(0,.5,1,5,1),Xr.translate(0,-.5,0)),this.position.copy(t),this.line=new Xd(Xi,new Eo({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ut(Xr,new cr({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Va.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Va,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ws}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ws);const qd=wo({__name:"OrientationAnimation",props:{quaternion:{}},setup(i){const e=i,t=Ro(),n=new Tt(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.set(0,-10,0),n.lookAt(new U(0,0,0));const r=new Wd,s=new ni(5,10,.5),a=new cr({color:11250603,opacity:.6,transparent:!0}),o=new Ut(s,a);r.add(o);const l=new U(1,0,0),c=new U(0,1,0),h=new U(0,0,1),p=new qr(l.normalize(),new U(0,0,0),8,16711680),d=new qr(c.normalize(),new U(0,0,0),8,65280),m=new qr(h.normalize(),new U(0,0,0),8,255);o.add(p),o.add(d),o.add(m);const g=new kd({alpha:!0}),M=new cn().fromArray(o.quaternion.toArray());Co(()=>{var A;t.value&&(n.aspect=t.value.clientWidth/t.value.clientHeight,n.updateProjectionMatrix(),g.setSize(t.value.clientWidth,t.value.clientHeight),u(e.quaternion),(A=t.value)==null||A.appendChild(g.domElement),window.addEventListener("resize",f))}),Po(()=>{window.removeEventListener("resize",f)});const f=()=>{t.value&&(console.log("resize"),n.aspect=t.value.clientWidth/t.value.clientHeight,n.updateProjectionMatrix(),g.setSize(t.value.clientWidth,t.value.clientHeight))};Lo(()=>e.quaternion,A=>{u(A)});const u=A=>{const E=new cn().fromArray(M.toArray()),y=new cn().fromArray(A).normalize();o.quaternion.fromArray(E.multiply(y).toArray()),g.render(r,n)};return(A,E)=>(Do(),Uo("div",{ref_key:"threeJsWrapper",ref:t,class:"three-js-wrapper",onResize:f},null,544))}}),Kd=Io(qd,[["__scopeId","data-v-63d94873"]]);export{Kd as O};
