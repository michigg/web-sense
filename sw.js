if(!self.define){let s,e={};const i=(i,t)=>(i=new URL(i+".js",t).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(t,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let n={};const u=s=>i(s,r),a={module:{uri:r},exports:n,require:u};e[r]=Promise.all(t.map((s=>a[s]||u(s)))).then((s=>(l(...s),n)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/ActivityDefault.0fc7204b.js",revision:null},{url:"assets/ActivityExample.7368749b.js",revision:null},{url:"assets/ActivityNoise.079c4c2d.js",revision:null},{url:"assets/ActivityNoiseMeasurement.8d16f4db.js",revision:null},{url:"assets/ActivityNoiseMeasurement.af1db81d.css",revision:null},{url:"assets/ActivityNoiseQualitativeMeasurement.7587bc4c.css",revision:null},{url:"assets/ActivityNoiseQualitativeMeasurement.f0bf2979.js",revision:null},{url:"assets/ActivityNoiseQuantitativeMeasurement.e26c9a09.js",revision:null},{url:"assets/ActivitySurvey.bc4c802c.css",revision:null},{url:"assets/ActivitySurvey.c269cbb3.js",revision:null},{url:"assets/ChartNoise.0275ff18.js",revision:null},{url:"assets/ChartNoise.d2c7e497.css",revision:null},{url:"assets/DropdownMetaData.87bcdcf7.css",revision:null},{url:"assets/DropdownMetaData.e24c6513.js",revision:null},{url:"assets/index.04e99704.js",revision:null},{url:"assets/index.40c84c2a.css",revision:null},{url:"assets/leaflet-src.esm.1c3fadee.js",revision:null},{url:"assets/LogListTaskStepItem.74638055.css",revision:null},{url:"assets/LogListTaskStepItem.b6ab2ebc.js",revision:null},{url:"assets/marker-icon-2x.e233d1a6.js",revision:null},{url:"assets/marker-icon.34d9a2d9.js",revision:null},{url:"assets/marker-shadow.ddd1f13b.js",revision:null},{url:"assets/MarkerAggregationMap.03f389e2.js",revision:null},{url:"assets/MiniMap.vue_vue_type_script_setup_true_lang.8fe96904.js",revision:null},{url:"assets/PageImprint.19d14719.js",revision:null},{url:"assets/PagePrivacy.202687ee.js",revision:null},{url:"assets/TaskStepInstructionList.1d9025de.css",revision:null},{url:"assets/TaskStepInstructionList.895c4da4.js",revision:null},{url:"assets/vue-leaflet.33107bde.css",revision:null},{url:"assets/vue-leaflet.esm.975fe32c.js",revision:null},{url:"index.html",revision:"3daa4ff715690601622f87ff99f637d0"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/icons/pwa-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"manifest.webmanifest",revision:"9ee7a49bb30a51f1bd71ad51719e9813"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));