import{_ as s}from"./MiniMap.vue_vue_type_script_setup_true_lang.8fe96904.js";import{C as r}from"./ChartNoise.0275ff18.js";import{D as n}from"./DropdownMetaData.e24c6513.js";import{d as l,o as t,e as m,i as a,c as o,f as u,F as i}from"./index.04e99704.js";import"./vue-leaflet.esm.975fe32c.js";import"./LogListTaskStepItem.b6ab2ebc.js";const D=l({__name:"ActivityNoiseQuantitativeMeasurement",props:{taskStep:null},setup(e){return(c,p)=>(t(),m(i,null,[a(s,{lat:e.taskStep.results[0].measurements.get("latitude"),lng:e.taskStep.results[0].measurements.get("longitude")},null,8,["lat","lng"]),e.taskStep.results[0].measurements.get("averageDBA")?(t(),o(r,{key:0,dba:e.taskStep.results[0].measurements.get("averageDBA")},null,8,["dba"])):u("",!0),a(n,{"log-task-step":e.taskStep},null,8,["log-task-step"])],64))}});export{D as default};
