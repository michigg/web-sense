import{L as r}from"./LogListTaskStepItem-6V5MJxnc.js";import{d as u,j as p,o,e as c,c as i,f as m,i as l,w as d,u as f,p as g,F as k}from"./index-10V0i0Gt.js";import{_}from"./MiniMap.vue_vue_type_script_setup_true_lang-eKrxAjUI.js";import"./vue-leaflet.es-5dyVmQis.js";const C=u({__name:"ActivityDefault",props:{taskStep:{}},setup(n){const s=n,e=p(()=>{const t=s.taskStep.results[0].metas.get("latitude"),a=s.taskStep.results[0].metas.get("longitude");if(!(!t||!a))return{latitude:t,longitude:a}});return(t,a)=>(o(),c(k,null,[e.value?(o(),i(_,{key:0,lat:e.value.latitude,lng:e.value.longitude},null,8,["lat","lng"])):m("",!0),l(f(g),{class:"measurement-preview"},{default:d(()=>[l(r,{"log-task-step":t.taskStep},null,8,["log-task-step"])]),_:1})],64))}});export{C as default};
