if(!self.define){let s,e={};const i=(i,t)=>(i=new URL(i+".js",t).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(t,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let n={};const a=s=>i(s,r),u={module:{uri:r},exports:n,require:a};e[r]=Promise.all(t.map((s=>u[s]||a(s)))).then((s=>(l(...s),n)))}}define(["./workbox-c1760cce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_commonjsHelpers.b8add541.js",revision:null},{url:"assets/ActivityDefault.42d724db.js",revision:null},{url:"assets/ActivityExample.d22d85c6.js",revision:null},{url:"assets/ActivityNoise.0012c996.js",revision:null},{url:"assets/ActivityNoiseMeasurement.45912175.css",revision:null},{url:"assets/ActivityNoiseMeasurement.62ccc949.js",revision:null},{url:"assets/ActivityNoiseQualitativeMeasurement.51d60678.js",revision:null},{url:"assets/ActivityNoiseQualitativeMeasurement.6dd309be.css",revision:null},{url:"assets/ActivityNoiseQuantitativeMeasurement.3db72386.js",revision:null},{url:"assets/ActivitySurvey.388dc7eb.js",revision:null},{url:"assets/ActivitySurvey.cf712030.css",revision:null},{url:"assets/ChartNoise.99a40bc3.js",revision:null},{url:"assets/ChartNoise.cd1f1265.css",revision:null},{url:"assets/DropdownMetaData.124d71a0.css",revision:null},{url:"assets/DropdownMetaData.f3dc39fa.js",revision:null},{url:"assets/index.7457f58d.css",revision:null},{url:"assets/index.aa6a3f6a.js",revision:null},{url:"assets/leaflet-src.0347d4be.js",revision:null},{url:"assets/leaflet-src.esm.5b8a8dab.js",revision:null},{url:"assets/LogListTaskStepItem.398acc93.js",revision:null},{url:"assets/LogListTaskStepItem.791780fa.css",revision:null},{url:"assets/marker-icon-2x.17982e67.js",revision:null},{url:"assets/marker-icon.c1a4cbf5.js",revision:null},{url:"assets/marker-shadow.91c47cf3.js",revision:null},{url:"assets/PageImprint.9961fa36.js",revision:null},{url:"assets/PagePrivacy.75838ca6.js",revision:null},{url:"assets/TaskStepInstructionList.13e1116d.js",revision:null},{url:"assets/TaskStepInstructionList.665890df.css",revision:null},{url:"index.html",revision:"e52a9b3d17927e75bce4dfb8ee920105"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/icons/pwa-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"manifest.webmanifest",revision:"9ee7a49bb30a51f1bd71ad51719e9813"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
