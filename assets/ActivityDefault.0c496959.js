import{L as u}from"./LogListTaskStepItem.5ac5a6f6.js";import{d as c,n as i,o as l,e as m,u as t,c as p,f as d,i as r,w as f,k as g,F as k}from"./index.5266b121.js";import{_}from"./MiniMap.vue_vue_type_script_setup_true_lang.6293edb7.js";import"./vue-leaflet.esm.74aea8d8.js";const C=c({__name:"ActivityDefault",props:{taskStep:null},setup(o){const n=o,e=i(()=>{const a=n.taskStep.results[0].metas.get("latitude"),s=n.taskStep.results[0].metas.get("longitude");if(!(!a||!s))return{latitude:a,longitude:s}});return(a,s)=>(l(),m(k,null,[t(e)?(l(),p(_,{key:0,lat:t(e).latitude,lng:t(e).longitude},null,8,["lat","lng"])):d("",!0),r(t(g),{class:"measurement-preview"},{default:f(()=>[r(u,{"log-task-step":o.taskStep},null,8,["log-task-step"])]),_:1})],64))}});export{C as default};