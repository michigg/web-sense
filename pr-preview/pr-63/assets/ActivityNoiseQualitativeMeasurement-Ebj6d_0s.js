import{D as f}from"./DropdownMetaData-22bF02Oi.js";import{d as h,o as n,e as o,i as p,w as g,F as _,k as v,a as s,t as u,b as w,u as y,p as k,s as q,v as A,_ as D}from"./index-6jHfYE0B.js";import"./LogListTaskStepItem-rowLwINO.js";const r=a=>(q("data-v-f6172220"),a=a(),A(),a),N=r(()=>s("strong",null,"Frage:",-1)),b=r(()=>s("br",null,null,-1)),B=r(()=>s("strong",null,"Antwort:",-1)),I=r(()=>s("br",null,null,-1)),S={key:0},V={key:1},x=h({__name:"ActivityNoiseQualitativeMeasurement",props:{taskStep:{}},setup(a){const d=e=>e.get("questionTitle"),m=e=>e.get("question"),c=e=>{const i=[];for(const[t,l]of e.entries())t!=="value"&&i.push(l);return i.join(",")};return(e,i)=>(n(),o(_,null,[p(y(k),{class:"survey-questions"},{default:g(()=>[(n(!0),o(_,null,v(e.taskStep.results,(t,l)=>(n(),o("li",{key:l,class:"survey-question"},[s("h3",null,u(d(t.metas)),1),s("p",null,[N,b,w(" "+u(m(t.metas)),1)]),s("p",null,[B,I,c(t.measurements)?(n(),o("span",S,u(c(t.measurements)),1)):(n(),o("span",V,"Keine Angabe"))])]))),128))]),_:1}),p(f,{"log-task-step":e.taskStep},null,8,["log-task-step"])],64))}}),C=D(x,[["__scopeId","data-v-f6172220"]]);export{C as default};
