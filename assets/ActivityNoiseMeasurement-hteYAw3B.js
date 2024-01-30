var we=Object.defineProperty;var Se=(o,n,s)=>n in o?we(o,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[n]=s;var T=(o,n,s)=>(Se(o,typeof n!="symbol"?n+"":n,s),s);import{d as he,o as L,e as N,f as H,a as re,t as be,m as _e,_ as de,g as Ae,h as Me,S as ne,r as G,I as ae,i as Z,u as Be,M as Fe,R as De}from"./index-vMEhzMSc.js";import{T as ze}from"./TaskStepInstructionList-wQNbcGEe.js";const Te=["disabled"],xe={key:0,class:"circle animation"},Ce={key:1,class:"circle animation"},Re={key:2,class:"circle animation"},Ee={key:3,class:"circle animation"},qe={key:4,class:"circle animation"},ke={class:"circle main"},Ie={class:"info"},Pe=he({__name:"ButtonSoundAnimation",props:{info:{default:"Recording..."},busy:{type:Boolean,default:!1}},setup(o){return(n,s)=>(L(),N("button",_e({class:["busy-record",n.busy?"busy":""]},n.$attrs,{disabled:n.busy}),[n.busy?(L(),N("span",xe)):H("",!0),n.busy?(L(),N("span",Ce)):H("",!0),n.busy?(L(),N("span",Re)):H("",!0),n.busy?(L(),N("span",Ee)):H("",!0),n.busy?(L(),N("span",qe)):H("",!0),re("span",ke,[re("span",Ie,be(n.info),1)])],16,Te))}}),Oe=de(Pe,[["__scopeId","data-v-5cf0f0ed"]]);var ge={exports:{}},K,ie;function je(){if(ie)return K;ie=1;var o=null,n=function(c){o=o||{},o[c]=new Array(c*c);for(var f=Math.PI/c,l=0;l<c;l++)for(var d=0;d<c;d++)o[c][d+l*c]=Math.cos(f*(d+.5)*l)};function s(c,f){var l=c.length;f=f||2,(!o||!o[l])&&n(l);var d=c.map(function(){return 0});return d.map(function(B,z){return f*c.reduce(function(_,w,u,y){return _+w*o[l][u+z*l]},0)})}return K=s,K}var J,oe;function Le(){return oe||(oe=1,J=je()),J}var ee,se;function Ne(){if(se)return ee;se=1;function o(w){if(Array.isArray(w)){for(var u=0,y=Array(w.length);u<w.length;u++)y[u]=w[u];return y}else return Array.from(w)}var n={},s={},c=function(u){var y={};y.real=u.real===void 0?u.slice():u.real.slice();var A=y.real.length;return s[A]===void 0&&(s[A]=Array.apply(null,Array(A)).map(Number.prototype.valueOf,0)),y.imag=s[A].slice(),y},f=function(u){if(n[u]===void 0){for(var y=(u-1).toString(2).length,A="0".repeat(y),F={},M=0;M<u;M++){var D=M.toString(2);D=A.substr(D.length)+D,D=[].concat(o(D)).reverse().join(""),F[M]=parseInt(D,2)}n[u]=F}return n[u]},l=function(u,y){return{real:u.real*y.real-u.imag*y.imag,imag:u.real*y.imag+u.imag*y.real}},d=function(u,y){return{real:u.real+y.real,imag:u.imag+y.imag}},B=function(u,y){return{real:u.real-y.real,imag:u.imag-y.imag}},z=function(u,y){var A=-2*Math.PI*u/y;return{real:Math.cos(A),imag:Math.sin(A)}},_=function(u){return u.imag*=-1,u};return ee={bitReverseArray:f,multiply:l,add:d,subtract:B,euler:z,conj:_,constructComplexArray:c},ee}var te,ue;function Ue(){if(ue)return te;ue=1;var o=Ne(),n=function(f){var l={};f.real===void 0||f.imag===void 0?l=o.constructComplexArray(f):(l.real=f.real.slice(),l.imag=f.imag.slice());var d=l.real.length,B=Math.log2(d);if(Math.round(B)!=B)throw new Error("Input size must be a power of 2.");if(l.real.length!=l.imag.length)throw new Error("Real and imaginary components must have the same length.");for(var z=o.bitReverseArray(d),_={real:[],imag:[]},w=0;w<d;w++)_.real[z[w]]=l.real[w],_.imag[z[w]]=l.imag[w];for(var u=0;u<d;u++)l.real[u]=_.real[u],l.imag[u]=_.imag[u];for(var y=1;y<=B;y++)for(var A=Math.pow(2,y),F=0;F<A/2;F++)for(var M=o.euler(F,A),D=0;D<d/A;D++){var O=A*D+F,j=A*D+F+A/2,Y={real:l.real[O],imag:l.imag[O]},W={real:l.real[j],imag:l.imag[j]},$=o.multiply(M,W),r=o.subtract(Y,$);l.real[j]=r.real,l.imag[j]=r.imag;var e=o.add($,Y);l.real[O]=e.real,l.imag[O]=e.imag}return l},s=function(f){if(f.real===void 0||f.imag===void 0)throw new Error("IFFT only accepts a complex input.");for(var l=f.real.length,d={real:[],imag:[]},B=0;B<l;B++){var z={real:f.real[B],imag:f.imag[B]},_=o.conj(z);d.real[B]=_.real,d.imag[B]=_.imag}var w=n(d);return d.real=w.real.map(function(u){return u/l}),d.imag=w.imag.map(function(u){return u/l}),d};return te={fft:n,ifft:s},te}(function(o,n){(function(s,c){o.exports=c(Le(),Ue())})(Ae,function(s,c){function f(r,e,a){if(a||arguments.length===2)for(var t,i=0,m=e.length;i<m;i++)!t&&i in e||(t||(t=Array.prototype.slice.call(e,0,i)),t[i]=e[i]);return r.concat(t||Array.prototype.slice.call(e))}var l=Object.freeze({__proto__:null,blackman:function(r){for(var e=new Float32Array(r),a=2*Math.PI/(r-1),t=2*a,i=0;i<r/2;i++)e[i]=.42-.5*Math.cos(i*a)+.08*Math.cos(i*t);for(i=Math.ceil(r/2);i>0;i--)e[r-i]=e[i-1];return e},hamming:function(r){for(var e=new Float32Array(r),a=0;a<r;a++)e[a]=.54-.46*Math.cos(2*Math.PI*(a/r-1));return e},hanning:function(r){for(var e=new Float32Array(r),a=0;a<r;a++)e[a]=.5-.5*Math.cos(2*Math.PI*a/(r-1));return e},sine:function(r){for(var e=Math.PI/(r-1),a=new Float32Array(r),t=0;t<r;t++)a[t]=Math.sin(e*t);return a}}),d={};function B(r){for(;r%2==0&&r>1;)r/=2;return r===1}function z(r,e){if(e!=="rect"){if(e!==""&&e||(e="hanning"),d[e]||(d[e]={}),!d[e][r.length])try{d[e][r.length]=l[e](r.length)}catch{throw new Error("Invalid windowing function")}r=function(a,t){for(var i=[],m=0;m<Math.min(a.length,t.length);m++)i[m]=a[m]*t[m];return i}(r,d[e][r.length])}return r}function _(r,e,a){for(var t=new Float32Array(r),i=0;i<t.length;i++)t[i]=i*e/a,t[i]=13*Math.atan(t[i]/1315.8)+3.5*Math.atan(Math.pow(t[i]/7518,2));return t}function w(r){return Float32Array.from(r)}function u(r){return 1125*Math.log(1+r/700)}function y(r,e,a){for(var t,i=new Float32Array(r+2),m=new Float32Array(r+2),S=e/2,b=u(0),p=(u(S)-b)/(r+1),h=new Array(r+2),v=0;v<i.length;v++)i[v]=v*p,m[v]=(t=i[v],700*(Math.exp(t/1125)-1)),h[v]=Math.floor((a+1)*m[v]/e);for(var R=new Array(r),g=0;g<R.length;g++){for(R[g]=new Array(a/2+1).fill(0),v=h[g];v<h[g+1];v++)R[g][v]=(v-h[g])/(h[g+1]-h[g]);for(v=h[g+1];v<h[g+2];v++)R[g][v]=(h[g+2]-v)/(h[g+2]-h[g+1])}return R}function A(r,e,a,t,i,m,S){t===void 0&&(t=5),i===void 0&&(i=2),m===void 0&&(m=!0),S===void 0&&(S=440);var b=Math.floor(a/2)+1,p=new Array(a).fill(0).map(function(C,E){return r*function(q,I){return Math.log2(16*q/I)}(e*E/a,S)});p[0]=p[1]-1.5*r;var h,v,R,g=p.slice(1).map(function(C,E){return Math.max(C-p[E])},1).concat([1]),V=Math.round(r/2),U=new Array(r).fill(0).map(function(C,E){return p.map(function(q){return(10*r+V+q-E)%r-V})}),k=U.map(function(C,E){return C.map(function(q,I){return Math.exp(-.5*Math.pow(2*U[E][I]/g[I],2))})});if(v=(h=k)[0].map(function(){return 0}),R=h.reduce(function(C,E){return E.forEach(function(q,I){C[I]+=Math.pow(q,2)}),C},v).map(Math.sqrt),k=h.map(function(C,E){return C.map(function(q,I){return q/(R[I]||1)})}),i){var ve=p.map(function(C){return Math.exp(-.5*Math.pow((C/r-t)/i,2))});k=k.map(function(C){return C.map(function(E,q){return E*ve[q]})})}return m&&(k=f(f([],k.slice(3),!0),k.slice(0,3),!0)),k.map(function(C){return C.slice(0,b)})}function F(r,e){for(var a=0,t=0,i=0;i<e.length;i++)a+=Math.pow(i,r)*Math.abs(e[i]),t+=e[i];return a/t}function M(r){var e=r.ampSpectrum,a=r.barkScale,t=r.numberOfBarkBands,i=t===void 0?24:t;if(typeof e!="object"||typeof a!="object")throw new TypeError;var m=i,S=new Float32Array(m),b=0,p=e,h=new Int32Array(m+1);h[0]=0;for(var v=a[p.length-1]/m,R=1,g=0;g<p.length;g++)for(;a[g]>v;)h[R++]=g,v=R*a[p.length-1]/m;for(h[m]=p.length-1,g=0;g<m;g++){for(var V=0,U=h[g];U<h[g+1];U++)V+=p[U];S[g]=Math.pow(V,.23)}for(g=0;g<S.length;g++)b+=S[g];return{specific:S,total:b}}function D(r){var e=r.ampSpectrum;if(typeof e!="object")throw new TypeError;for(var a=new Float32Array(e.length),t=0;t<a.length;t++)a[t]=Math.pow(e[t],2);return a}function O(r){var e=r.ampSpectrum,a=r.melFilterBank,t=r.bufferSize;if(typeof e!="object")throw new TypeError("Valid ampSpectrum is required to generate melBands");if(typeof a!="object")throw new TypeError("Valid melFilterBank is required to generate melBands");for(var i=D({ampSpectrum:e}),m=a.length,S=Array(m),b=new Float32Array(m),p=0;p<b.length;p++){S[p]=new Float32Array(t/2),b[p]=0;for(var h=0;h<t/2;h++)S[p][h]=a[p][h]*i[h],b[p]+=S[p][h];b[p]=Math.log(b[p]+1)}return Array.prototype.slice.call(b)}var j=Object.freeze({__proto__:null,amplitudeSpectrum:function(r){return r.ampSpectrum},buffer:function(r){return r.signal},chroma:function(r){var e=r.ampSpectrum,a=r.chromaFilterBank;if(typeof e!="object")throw new TypeError("Valid ampSpectrum is required to generate chroma");if(typeof a!="object")throw new TypeError("Valid chromaFilterBank is required to generate chroma");var t=a.map(function(m,S){return e.reduce(function(b,p,h){return b+p*m[h]},0)}),i=Math.max.apply(Math,t);return i?t.map(function(m){return m/i}):t},complexSpectrum:function(r){return r.complexSpectrum},energy:function(r){var e=r.signal;if(typeof e!="object")throw new TypeError;for(var a=0,t=0;t<e.length;t++)a+=Math.pow(Math.abs(e[t]),2);return a},loudness:M,melBands:O,mfcc:function(r){var e=r.ampSpectrum,a=r.melFilterBank,t=r.numberOfMFCCCoefficients,i=r.bufferSize,m=Math.min(40,Math.max(1,t||13));if(a.length<m)throw new Error("Insufficient filter bank for requested number of coefficients");var S=O({ampSpectrum:e,melFilterBank:a,bufferSize:i});return s(S).slice(0,m)},perceptualSharpness:function(r){for(var e=M({ampSpectrum:r.ampSpectrum,barkScale:r.barkScale}),a=e.specific,t=0,i=0;i<a.length;i++)t+=i<15?(i+1)*a[i+1]:.066*Math.exp(.171*(i+1));return t*=.11/e.total},perceptualSpread:function(r){for(var e=M({ampSpectrum:r.ampSpectrum,barkScale:r.barkScale}),a=0,t=0;t<e.specific.length;t++)e.specific[t]>a&&(a=e.specific[t]);return Math.pow((e.total-a)/e.total,2)},powerSpectrum:D,rms:function(r){var e=r.signal;if(typeof e!="object")throw new TypeError;for(var a=0,t=0;t<e.length;t++)a+=Math.pow(e[t],2);return a/=e.length,a=Math.sqrt(a)},spectralCentroid:function(r){var e=r.ampSpectrum;if(typeof e!="object")throw new TypeError;return F(1,e)},spectralCrest:function(r){var e=r.ampSpectrum;if(typeof e!="object")throw new TypeError;var a=0,t=-1/0;return e.forEach(function(i){a+=Math.pow(i,2),t=i>t?i:t}),a/=e.length,a=Math.sqrt(a),t/a},spectralFlatness:function(r){var e=r.ampSpectrum;if(typeof e!="object")throw new TypeError;for(var a=0,t=0,i=0;i<e.length;i++)a+=Math.log(e[i]),t+=e[i];return Math.exp(a/e.length)*e.length/t},spectralFlux:function(r){var e=r.signal,a=r.previousSignal,t=r.bufferSize;if(typeof e!="object"||typeof a!="object")throw new TypeError;for(var i=0,m=-t/2;m<e.length/2-1;m++)x=Math.abs(e[m])-Math.abs(a[m]),i+=(x+Math.abs(x))/2;return i},spectralKurtosis:function(r){var e=r.ampSpectrum;if(typeof e!="object")throw new TypeError;var a=e,t=F(1,a),i=F(2,a),m=F(3,a),S=F(4,a);return(-3*Math.pow(t,4)+6*t*i-4*t*m+S)/Math.pow(Math.sqrt(i-Math.pow(t,2)),4)},spectralRolloff:function(r){var e=r.ampSpectrum,a=r.sampleRate;if(typeof e!="object")throw new TypeError;for(var t=e,i=a/(2*(t.length-1)),m=0,S=0;S<t.length;S++)m+=t[S];for(var b=.99*m,p=t.length-1;m>b&&p>=0;)m-=t[p],--p;return(p+1)*i},spectralSkewness:function(r){var e=r.ampSpectrum;if(typeof e!="object")throw new TypeError;var a=F(1,e),t=F(2,e),i=F(3,e);return(2*Math.pow(a,3)-3*a*t+i)/Math.pow(Math.sqrt(t-Math.pow(a,2)),3)},spectralSlope:function(r){var e=r.ampSpectrum,a=r.sampleRate,t=r.bufferSize;if(typeof e!="object")throw new TypeError;for(var i=0,m=0,S=new Float32Array(e.length),b=0,p=0,h=0;h<e.length;h++){i+=e[h];var v=h*a/t;S[h]=v,b+=v*v,m+=v,p+=v*e[h]}return(e.length*p-m*i)/(i*(b-Math.pow(m,2)))},spectralSpread:function(r){var e=r.ampSpectrum;if(typeof e!="object")throw new TypeError;return Math.sqrt(F(2,e)-Math.pow(F(1,e),2))},zcr:function(r){var e=r.signal;if(typeof e!="object")throw new TypeError;for(var a=0,t=1;t<e.length;t++)(e[t-1]>=0&&e[t]<0||e[t-1]<0&&e[t]>=0)&&a++;return a}}),Y=function(){function r(e,a){var t=this;if(this._m=a,!e.audioContext)throw this._m.errors.noAC;if(e.bufferSize&&!B(e.bufferSize))throw this._m._errors.notPow2;if(!e.source)throw this._m._errors.noSource;this._m.audioContext=e.audioContext,this._m.bufferSize=e.bufferSize||this._m.bufferSize||256,this._m.hopSize=e.hopSize||this._m.hopSize||this._m.bufferSize,this._m.sampleRate=e.sampleRate||this._m.audioContext.sampleRate||44100,this._m.callback=e.callback,this._m.windowingFunction=e.windowingFunction||"hanning",this._m.featureExtractors=j,this._m.EXTRACTION_STARTED=e.startImmediately||!1,this._m.channel=typeof e.channel=="number"?e.channel:0,this._m.inputs=e.inputs||1,this._m.outputs=e.outputs||1,this._m.numberOfMFCCCoefficients=e.numberOfMFCCCoefficients||this._m.numberOfMFCCCoefficients||13,this._m.numberOfBarkBands=e.numberOfBarkBands||this._m.numberOfBarkBands||24,this._m.spn=this._m.audioContext.createScriptProcessor(this._m.bufferSize,this._m.inputs,this._m.outputs),this._m.spn.connect(this._m.audioContext.destination),this._m._featuresToExtract=e.featureExtractors||[],this._m.barkScale=_(this._m.bufferSize,this._m.sampleRate,this._m.bufferSize),this._m.melFilterBank=y(Math.max(this._m.melBands,this._m.numberOfMFCCCoefficients),this._m.sampleRate,this._m.bufferSize),this._m.inputData=null,this._m.previousInputData=null,this._m.frame=null,this._m.previousFrame=null,this.setSource(e.source),this._m.spn.onaudioprocess=function(i){var m;t._m.inputData!==null&&(t._m.previousInputData=t._m.inputData),t._m.inputData=i.inputBuffer.getChannelData(t._m.channel),t._m.previousInputData?((m=new Float32Array(t._m.previousInputData.length+t._m.inputData.length-t._m.hopSize)).set(t._m.previousInputData.slice(t._m.hopSize)),m.set(t._m.inputData,t._m.previousInputData.length-t._m.hopSize)):m=t._m.inputData;var S=function(b,p,h){if(b.length<p)throw new Error("Buffer is too short for frame length");if(h<1)throw new Error("Hop length cannot be less that 1");if(p<1)throw new Error("Frame length cannot be less that 1");var v=1+Math.floor((b.length-p)/h);return new Array(v).fill(0).map(function(R,g){return b.slice(g*h,g*h+p)})}(m,t._m.bufferSize,t._m.hopSize);S.forEach(function(b){t._m.frame=b;var p=t._m.extract(t._m._featuresToExtract,t._m.frame,t._m.previousFrame);typeof t._m.callback=="function"&&t._m.EXTRACTION_STARTED&&t._m.callback(p),t._m.previousFrame=t._m.frame})}}return r.prototype.start=function(e){this._m._featuresToExtract=e||this._m._featuresToExtract,this._m.EXTRACTION_STARTED=!0},r.prototype.stop=function(){this._m.EXTRACTION_STARTED=!1},r.prototype.setSource=function(e){this._m.source&&this._m.source.disconnect(this._m.spn),this._m.source=e,this._m.source.connect(this._m.spn)},r.prototype.setChannel=function(e){e<=this._m.inputs?this._m.channel=e:console.error("Channel ".concat(e," does not exist. Make sure you've provided a value for 'inputs' that is greater than ").concat(e," when instantiating the MeydaAnalyzer"))},r.prototype.get=function(e){return this._m.inputData?this._m.extract(e||this._m._featuresToExtract,this._m.inputData,this._m.previousInputData):null},r}(),W={audioContext:null,spn:null,bufferSize:512,sampleRate:44100,melBands:26,chromaBands:12,callback:null,windowingFunction:"hanning",featureExtractors:j,EXTRACTION_STARTED:!1,numberOfMFCCCoefficients:13,numberOfBarkBands:24,_featuresToExtract:[],windowing:z,_errors:{notPow2:new Error("Meyda: Buffer size must be a power of 2, e.g. 64 or 512"),featureUndef:new Error("Meyda: No features defined."),invalidFeatureFmt:new Error("Meyda: Invalid feature format"),invalidInput:new Error("Meyda: Invalid input."),noAC:new Error("Meyda: No AudioContext specified."),noSource:new Error("Meyda: No source node specified.")},createMeydaAnalyzer:function(r){return new Y(r,Object.assign({},W))},listAvailableFeatureExtractors:function(){return Object.keys(this.featureExtractors)},extract:function(r,e,a){var t=this;if(!e)throw this._errors.invalidInput;if(typeof e!="object")throw this._errors.invalidInput;if(!r)throw this._errors.featureUndef;if(!B(e.length))throw this._errors.notPow2;this.barkScale!==void 0&&this.barkScale.length==this.bufferSize||(this.barkScale=_(this.bufferSize,this.sampleRate,this.bufferSize)),this.melFilterBank!==void 0&&this.barkScale.length==this.bufferSize&&this.melFilterBank.length==this.melBands||(this.melFilterBank=y(Math.max(this.melBands,this.numberOfMFCCCoefficients),this.sampleRate,this.bufferSize)),this.chromaFilterBank!==void 0&&this.chromaFilterBank.length==this.chromaBands||(this.chromaFilterBank=A(this.chromaBands,this.sampleRate,this.bufferSize)),"buffer"in e&&e.buffer===void 0?this.signal=w(e):this.signal=e;var i=$(e,this.windowingFunction,this.bufferSize);if(this.signal=i.windowedSignal,this.complexSpectrum=i.complexSpectrum,this.ampSpectrum=i.ampSpectrum,a){var m=$(a,this.windowingFunction,this.bufferSize);this.previousSignal=m.windowedSignal,this.previousComplexSpectrum=m.complexSpectrum,this.previousAmpSpectrum=m.ampSpectrum}var S=function(b){return t.featureExtractors[b]({ampSpectrum:t.ampSpectrum,chromaFilterBank:t.chromaFilterBank,complexSpectrum:t.complexSpectrum,signal:t.signal,bufferSize:t.bufferSize,sampleRate:t.sampleRate,barkScale:t.barkScale,melFilterBank:t.melFilterBank,previousSignal:t.previousSignal,previousAmpSpectrum:t.previousAmpSpectrum,previousComplexSpectrum:t.previousComplexSpectrum,numberOfMFCCCoefficients:t.numberOfMFCCCoefficients,numberOfBarkBands:t.numberOfBarkBands})};if(typeof r=="object")return r.reduce(function(b,p){var h;return Object.assign({},b,((h={})[p]=S(p),h))},{});if(typeof r=="string")return S(r);throw this._errors.invalidFeatureFmt}},$=function(r,e,a){var t={};r.buffer===void 0?t.signal=w(r):t.signal=r,t.windowedSignal=z(t.signal,e),t.complexSpectrum=c.fft(t.windowedSignal),t.ampSpectrum=new Float32Array(a/2);for(var i=0;i<a/2;i++)t.ampSpectrum[i]=Math.sqrt(Math.pow(t.complexSpectrum.real[i],2)+Math.pow(t.complexSpectrum.imag[i],2));return t};return typeof window<"u"&&(window.Meyda=W),W})})(ge);var We=ge.exports;const ce=Me(We),$e=20,Ve=2e4,ye={_frequencyResolution(o,n){return Number((o/n).toFixed(4))},_frequency(o,n){return Number((o*n).toFixed(4))},_frequenciesUsingFrequencyResolution(o,n){const s=[];for(let c=0;c<n/2;c++)s.push(this._frequency(c,o));return s},frequenciesUsingSampleRateBufferSize(o,n){const s=this._frequencyResolution(o,n);return this._frequenciesUsingFrequencyResolution(s,n)},lowestAudibleBin(o,n=$e){const s=n/o,c=Math.floor(s);return c!==s?c+1:c},highestAudibleBin(o,n=Ve){return Math.trunc(n/o)},audibleBins(o,n,s){return o.slice(n,s)},removeInaudibleBinsFromSpectrumList(o,n,s){const c=this._frequencyResolution(n,s),f=this.lowestAudibleBin(c),l=this.highestAudibleBin(c);return o.map(d=>this.audibleBins(d,f,l))}};class Q{constructor(n=5,s=44100,c=8192,f=1,l="hanning",d=20,B=2e4,z=ye.frequenciesUsingSampleRateBufferSize(s,c)){T(this,"durationSeconds");T(this,"bufferSize");T(this,"sampleRate");T(this,"numberOfInputChannels");T(this,"windowingFunction");T(this,"frequencies");T(this,"lowestPerceptibleFrequency");T(this,"highestPerceptibleFrequency");this.durationSeconds=n,this.sampleRate=s,this.bufferSize=c,this.numberOfInputChannels=f,this.windowingFunction=l,this.lowestPerceptibleFrequency=d,this.highestPerceptibleFrequency=B,this.frequencies=z}clone(){return new Q(this.durationSeconds,this.sampleRate,this.bufferSize,this.numberOfInputChannels,this.windowingFunction,this.lowestPerceptibleFrequency,this.highestPerceptibleFrequency,this.frequencies)}}class le{constructor(n=new Q){T(this,"config");T(this,"startTimestamp",Date.now());T(this,"stopTimestamp",Date.now());T(this,"timestamps",[]);T(this,"amplitudeSpectrumList",[]);this.config=n}addData(n){n.length===0&&(this.startTimestamp=Date.now()),this.stopTimestamp=Date.now(),this.timestamps.push(this.stopTimestamp-this.startTimestamp),this.amplitudeSpectrumList.push(n)}clear(){this.startTimestamp=Date.now(),this.stopTimestamp=Date.now(),this.amplitudeSpectrumList=[]}getAmplitudeSpectrumList(){return this.amplitudeSpectrumList.map(n=>Array.from(n))}toString(){return`AnalyzeData:
Duration: ${((this.stopTimestamp-this.startTimestamp)/1e3).toFixed(0)}	Entries: ${this.timestamps.length}`}}class He{constructor(n){T(this,"analyzer");T(this,"mic");T(this,"analysisConfig");T(this,"store",new le);this.mic=n,this.analysisConfig=new Q(void 0,n.sampleRate,n.bufferSize)}async startAnalyzer(n){if(console.info("[AudioDBAnalyzer]: Try to start analyzer"),typeof ce>"u"){console.error("[AudioDBAnalyzer]: Meyda could not be found! Have you included it?");return}try{this.store=new le(this.analysisConfig),await this.mic.activateInputDevice(n==null?void 0:n.deviceId),console.log("MIC",this.mic),console.info(`[AudioDBAnalyzer]: Sample Rate ${this.mic.sampleRate}`),console.info(`[AudioDBAnalyzer]: Buffer Size ${this.mic.bufferSize}`),console.info(`[AudioDBAnalyzer]: Windowing Function ${this.analysisConfig.windowingFunction}`),this.analyzer=ce.createMeydaAnalyzer({audioContext:this.mic.audioContext,source:this.mic.sourceAudioNode,sampleRate:this.mic.sampleRate,bufferSize:this.mic.bufferSize,windowingFunction:this.analysisConfig.windowingFunction,featureExtractors:["amplitudeSpectrum"],callback:s=>{this.store.addData(s.amplitudeSpectrum)}}),this.analyzer.start(),console.info("[AudioDBAnalyzer]: Analyzer started")}catch(s){throw console.error("[AudioDBAnalyzer]: Analyzer start failed",s),new ne("Aufnahme konnte nicht gestartet werden. Bitte versuchen Sie es erneut.",s)}}async stopAnalyzer(){if(console.info("[AudioDBAnalyzer]: Try to stop analyzer"),!this.analyzer){console.warn("[AudioDBAnalyzer]: No analyzer to stop found");return}try{this.analyzer.stop(),await this.mic.deactivateInputDevices(),console.info("[AudioDBAnalyzer]: ANALYZER STOP")}catch(n){throw console.error("[AudioDBAnalyzer]: Analyzer stop failed",n),new ne("Aufnahme konnte nicht gestoppt werden. Bitte versuchen Sie es erneut.",n)}}async analyze(n=0,s=void 0){await this.startAnalyzer(s);const c=n||this.analysisConfig.durationSeconds;return this.analysisConfig.durationSeconds=c,await new Promise(l=>{setTimeout(async()=>{await this.stopAnalyzer(),l()},c*1e3)}),this.store}}const me={_calcAWeighting(o){const n=Math.pow(o,2),s=148693636,c=423.9481,f=11577.76,l=544348.84,d=s*Math.pow(n,2),B=+(n+s).toFixed(8)*+(n+c).toFixed(8)*+Math.sqrt(n+f).toFixed(8)*+Math.sqrt(n+l).toFixed(8),z=+(d/B).toFixed(8),_=20*Math.log10(z)+2;return Number(_.toFixed(1))},calcAWeightings(o,n=-80){return o.map(s=>{const c=this._calcAWeighting(s);return c>n?c:n})},calcDBAUsingWeighting(o,n){const s=o+n;return Number(s.toFixed(4))},convertDBSpectrumToDBAsSpectrum(o,n){const s=[];for(const[c,f]of o.entries())s.push(this.calcDBAUsingWeighting(f,n[c]));return s}},fe=2e-5,P={magnitudeToDB(o){if(o<2e-9)return-80;const n=Number((20*Math.log10(o/fe)).toFixed(4));return n===0?0:n},dbToPowerRatio(o){return Number(Math.pow(10,o/10).toFixed(4))},powerRatioToDB(o){return o<1e-4?-80:Number((10*Math.log10(o)).toFixed(4))},dbToMagnitude(o){return o<-45?2e-9:Number(Math.sqrt(this.dbToPowerRatio(o)*Math.pow(fe,2)).toFixed(9))},_getMeasurementDurationInMs(o,n){return Number((n/o*1e3).toFixed(0))},removeFirstMeasurementsByDuration(o,n,s,c=1500){const f=this._getMeasurementDurationInMs(n,s),l=Number((c/f).toFixed(0));return o.slice(l)}},X={_calcRMS(o){const n=o.reduce((s,c)=>s+Math.pow(c,2),0);return Math.sqrt(n/o.length)},magnitudeSpectrumToDBSpectrum(o){return o.map(n=>P.magnitudeToDB(n))},dbSpectrumToDB(o){const n=o.map(c=>P.dbToMagnitude(c)),s=this._calcRMS(n);return P.magnitudeToDB(s)},averageSPL(o){const n=o.reduce((c,f)=>c+P.dbToPowerRatio(f),0),s=o.length;return P.powerRatioToDB(n/s)},totalSPL(o){const n=o.reduce((s,c)=>s+P.dbToPowerRatio(c),0);return P.powerRatioToDB(n)}},Xe={_calcDBList(o){return o.map(n=>X.dbSpectrumToDB(n))},_calcDBAList(o,n,s){const c=ye.frequenciesUsingSampleRateBufferSize(n,s),f=me.calcAWeightings(c);return o.map(d=>me.convertDBSpectrumToDBAsSpectrum(d,f)).map(d=>X.dbSpectrumToDB(d))},getResult(o,n,s){console.log(o);const f=P.removeFirstMeasurementsByDuration(o,n,s).map(A=>X.magnitudeSpectrumToDBSpectrum(A));console.log(f);const l=this._calcDBList(f).filter(A=>A>=0),d=Number(X.averageSPL(l).toFixed(2)),B=Number(Math.min(...l).toFixed(2)),z=Number(Math.max(...l).toFixed(2)),_=this._calcDBAList(f,n,s).filter(A=>A>=0),w=Number(X.averageSPL(_).toFixed(2)),u=Number(Math.min(..._).toFixed(2)),y=Number(Math.max(..._).toFixed(2));return{dbas:_,minDBA:u,maxDBA:y,averageDBA:w,dbs:l,minDB:B,maxDB:z,averageDB:d}}},Ye={class:"noise-measurement-activity"},pe="Lärmaufnahme starten",Ge=he({__name:"ActivityNoiseMeasurement",props:{taskStep:{},sensors:{}},emits:["submit"],setup(o,{emit:n}){const s=o,c=n,f=G(!1),l=G(!1),d=G(pe),B=s.sensors.get(ae.GEOLOCATION),z=G();B.getPermission();const _=s.sensors.get(ae.MIC);_.getPermission();const w=async()=>{f.value=!0,l.value=!1,z.value=void 0,d.value="Lärm wird aufgenommen...";try{const u=new He(_);console.info("micAnalyzer created");const A=await u.analyze(10);console.info("analysisData retrieved");const F=await B.getLocation();console.info("location retrieved");const M=new De;M.addMeta("sampleRate",_.sampleRate),M.addMeta("bufferSize",_.bufferSize),M.addMeta("windowingFunction",u.analysisConfig.windowingFunction),M.addMeta("lowestPerceptibleFrequency",u.analysisConfig.lowestPerceptibleFrequency),M.addMeta("highestPerceptibleFrequency",u.analysisConfig.highestPerceptibleFrequency),console.info("write metadata"),M.addMeasurement("latitude",F.coords.latitude),M.addMeasurement("longitude",F.coords.longitude),M.addMeasurement("accuracy",Number(F.coords.accuracy.toFixed(2)));const D=Xe.getResult(A.getAmplitudeSpectrumList(),_.sampleRate,_.bufferSize);console.info("write results",D),M.addMeasurement("minDBA",D.minDBA),M.addMeasurement("maxDBA",D.maxDBA),M.addMeasurement("averageDBA",D.averageDBA),M.addMeasurement("minDB",D.minDB),M.addMeasurement("maxDB",D.maxDB),M.addMeasurement("averageDB",D.averageDB),console.info("write log"),l.value=!0,c("submit",[M])}catch(u){console.error(u),z.value=u,l.value=!1}finally{f.value=!1,d.value=pe}};return(u,y)=>(L(),N("div",Ye,[Z(ze,{title:u.taskStep.title,description:u.taskStep.description,instructions:u.taskStep.instructions},null,8,["title","description","instructions"]),Z(Be(Fe),{error:z.value},null,8,["error"]),Z(Oe,{busy:f.value,success:l.value,info:d.value,onClick:w},null,8,["busy","success","info"])]))}}),Je=de(Ge,[["__scopeId","data-v-e202ce97"]]);export{Je as default};
