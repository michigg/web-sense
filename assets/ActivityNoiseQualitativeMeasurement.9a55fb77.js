import{D as f}from"./DropdownMetaData.edaa72c1.js";import{d as v,o,e as a,i as _,w as h,F as p,j as y,a as e,t as u,b as g,u as w,k,N as q,O as N,_ as x}from"./index.5266b121.js";import"./LogListTaskStepItem.5ac5a6f6.js";const i=t=>(q("data-v-f6172220"),t=t(),N(),t),A=i(()=>e("strong",null,"Frage:",-1)),D=i(()=>e("br",null,null,-1)),b=i(()=>e("strong",null,"Antwort:",-1)),B=i(()=>e("br",null,null,-1)),I={key:0},M={key:1},S=v({__name:"ActivityNoiseQualitativeMeasurement",props:{taskStep:null},setup(t){const d=s=>s.get("questionTitle"),m=s=>s.get("question"),c=s=>{const r=[];for(const[n,l]of s.entries())n!=="value"&&r.push(l);return r.join(",")};return(s,r)=>(o(),a(p,null,[_(w(k),{class:"survey-questions"},{default:h(()=>[(o(!0),a(p,null,y(t.taskStep.results,(n,l)=>(o(),a("li",{key:l,class:"survey-question"},[e("h3",null,u(d(n.metas)),1),e("p",null,[A,D,g(" "+u(m(n.metas)),1)]),e("p",null,[b,B,c(n.measurements)?(o(),a("span",I,u(c(n.measurements)),1)):(o(),a("span",M,"Keine Angabe"))])]))),128))]),_:1}),_(f,{"log-task-step":t.taskStep},null,8,["log-task-step"])],64))}});const T=x(S,[["__scopeId","data-v-f6172220"]]);export{T as default};
