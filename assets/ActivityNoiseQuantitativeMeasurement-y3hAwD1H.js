import{_ as s}from"./MiniMap.vue_vue_type_script_setup_true_lang-ZbLjPBTP.js";import{C as r}from"./ChartNoise-_7a-Xm1L.js";import{D as o}from"./DropdownMetaData-eKcEdXbJ.js";import{d as m,o as t,e as n,i as a,c as l,f as p,F as u}from"./index-vMEhzMSc.js";import"./vue-leaflet.es-PHO0KelE.js";import"./LogListTaskStepItem-kgzWPF_9.js";const B=m({__name:"ActivityNoiseQuantitativeMeasurement",props:{taskStep:{}},setup(i){return(e,g)=>(t(),n(u,null,[a(s,{lat:e.taskStep.results[0].measurements.get("latitude"),lng:e.taskStep.results[0].measurements.get("longitude")},null,8,["lat","lng"]),e.taskStep.results[0].measurements.get("averageDBA")?(t(),l(r,{key:0,dba:e.taskStep.results[0].measurements.get("averageDBA")},null,8,["dba"])):p("",!0),a(o,{"log-task-step":e.taskStep},null,8,["log-task-step"])],64))}});export{B as default};