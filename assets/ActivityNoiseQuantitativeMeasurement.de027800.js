import{_ as s,C as n}from"./ChartNoise.b482c0dc.js";import{D as r}from"./DropdownMetaData.a6e51fe0.js";import{d as l,o as t,c as m,e as a,g as o,b as u,F as c}from"./index.f5ade20c.js";import"./LogListTaskStepItem.0eda9ca1.js";const S=l({__name:"ActivityNoiseQuantitativeMeasurement",props:{taskStep:null},setup(e){return(i,g)=>(t(),m(c,null,[a(s,{lat:e.taskStep.results[0].measurements.get("latitude"),lng:e.taskStep.results[0].measurements.get("longitude")},null,8,["lat","lng"]),e.taskStep.results[0].measurements.get("averageDBA")?(t(),o(n,{key:0,dba:e.taskStep.results[0].measurements.get("averageDBA")},null,8,["dba"])):u("",!0),a(r,{"log-task-step":e.taskStep},null,8,["log-task-step"])],64))}});export{S as default};
