import{r as u,j as A,d as I,k as M,o,e as f,g as B,u as r,M as z,c as g,D as F,h as b,m as P,v as q,a as m,w as L,F as D,n as R,B as V,p as N,q as K,_ as T}from"./index-DnehlkmV.js";import{B as j,M as U,A as Z}from"./ButtonSoundAnimation-DR3ApEH5.js";import{K as G}from"./KeyValueListItem-DAQ21WZt.js";import{C as H}from"./ChartNoise-lR1fNKTX.js";function w(){const a=u(!1),i=u(),y=()=>{a.value=!1},p=()=>{a.value=!0},l=v=>{i.value=v},d=()=>{i.value=void 0};return{busy:A(a),error:A(i),setIdle:y,setBusy:p,setError:l,clearError:d}}const _=a=>(N("data-v-dc96f254"),a=a(),K(),a),J=_(()=>m("label",{for:"recording-time-input"},"Aufnahmezeit in Sekunden",-1)),O={key:1,class:"result-section"},Q=_(()=>m("h2",null,"Ergebnisse",-1)),W=I({__name:"PreviewActivity",props:{sensor:{}},setup(a){const i=a,{busy:y,error:p}=w(),l=u(2),{busy:d,setBusy:v,setIdle:S,error:k,setError:C,clearError:E}=w(),c=u(),h=u();M(d,e=>{h.value=e?"Zeichne auf":"Live Preview starten"},{immediate:!0});const x=async()=>{v(),E();try{const e=i.sensor,s=new U(e);console.info("micAnalyzer created");const n=await s.analyze(l.value);console.info(n);const t=Z.getResult(n.getAmplitudeSpectrumList(),e.sampleRate,e.bufferSize);c.value={sampleRate:e.sampleRate,bufferSize:e.bufferSize,windowingFunction:s.analysisConfig.windowingFunction,lowestPerceptibleFrequency:s.analysisConfig.lowestPerceptibleFrequency,highestPerceptibleFrequency:s.analysisConfig.highestPerceptibleFrequency,minDBA:t.minDBA,maxDBA:t.maxDBA,averageDBA:t.averageDBA,minDB:t.minDB,maxDB:t.maxDB,averageDB:t.averageDB}}catch(e){console.error(e),C(e)}finally{S()}};return(e,s)=>(o(),f(D,null,[B(r(z),{error:r(p)||r(k)},null,8,["error"]),r(y)?(o(),g(r(F),{key:0,title:"Sensorvorschau wird geladen"})):b("",!0),J,P(m("input",{id:"recording-time-input","onUpdate:modelValue":s[0]||(s[0]=n=>l.value=n),type:"number",min:"2",step:"1"},null,512),[[q,l.value]]),m("div",null,[B(j,{busy:r(d),info:h.value,onClick:x},null,8,["busy","info"])]),c.value?(o(),f("section",O,[Q,B(r(V),null,{default:L(()=>[(o(!0),f(D,null,R(c.value,(n,t)=>(o(),g(G,{key:t,"key-data":t,"value-data":n},null,8,["key-data","value-data"]))),128))]),_:1}),c.value.averageDBA?(o(),g(H,{key:0,dba:c.value.averageDBA},null,8,["dba"])):b("",!0)])):b("",!0)],64))}}),ae=T(W,[["__scopeId","data-v-dc96f254"]]);export{ae as default};