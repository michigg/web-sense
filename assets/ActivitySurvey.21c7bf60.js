import{d as q,n as V,o as r,c as d,w as b,a as S,t as M,u,K as T,p as y,f,U as I,B as O,Q as x,r as A,e as w,i as v,F as N,j as _,b as j,q as B,s as C,I as U,R as E,_ as L}from"./index.5266b121.js";import{T as Q}from"./TaskStepInstructionList.cdcc1072.js";const K=q({__name:"QuestionSection",props:{question:null,answer:{type:[String,Number,Boolean,Object]}},emits:["update:answer"],setup(e,{emit:p}){const c=e,a=x,i=V({get:()=>c.answer,set:l=>{p("update:answer",l)}});return(l,t)=>(r(),d(u(O),{title:e.question.title},{default:b(()=>[S("p",null,M(e.question.question),1),e.question.type===u(a).TEXT?(r(),d(u(T),{key:0,id:e.question.id,modelValue:u(i),"onUpdate:modelValue":t[0]||(t[0]=s=>y(i)?i.value=s:null),label:"Antwort"},null,8,["id","modelValue"])):f("",!0),e.question.type===u(a).SINGLE_CHOICE?(r(),d(u(I),{key:1,id:e.question.id,modelValue:u(i),"onUpdate:modelValue":t[1]||(t[1]=s=>y(i)?i.value=s:null),label:"Antwort",options:e.question.options||[]},null,8,["id","modelValue","options"])):f("",!0)]),_:1},8,["title"]))}}),R=["onSubmit"],h=q({__name:"ActivitySurvey",props:{taskStep:null,sensors:null},emits:["submit"],setup(e,{emit:p}){const c=e,a=A({});for(const[l,t]of c.taskStep.questions)a.value[l]=t.clone();const i=async()=>{const t=await c.sensors.get(U.GEOLOCATION).getLocation(),s=[];for(const[m,o]of Object.entries(a.value)){const n=new E;if(n.addMeta("latitude",t.coords.latitude),n.addMeta("longitude",t.coords.longitude),n.addMeta("accuracy",t.coords.accuracy),n.addMeta("questionId",o.id),n.addMeta("type",o.type),n.addMeta("question",o.question),n.addMeta("questionTitle",o.title),o.answer&&typeof o.answer!="object")n.addMeasurement(m,o.answer);else if(o.answer)for(const[g,k]of Object.entries(o.answer))n.addMeasurement(g,k);s.push(n)}p("submit",s)};return(l,t)=>(r(),w("div",null,[v(Q,{title:e.taskStep.title,description:e.taskStep.description,instructions:e.taskStep.instructions},null,8,["title","description","instructions"]),S("form",{class:"survey-section",onSubmit:C(i,["prevent"])},[(r(!0),w(N,null,_(Object.keys(a.value),s=>(r(),d(K,{key:s,answer:a.value[s].answer,"onUpdate:answer":m=>a.value[s].answer=m,question:a.value[s]},null,8,["answer","onUpdate:answer","question"]))),128)),v(u(B),{type:"submit",style:{"--color-surface-button":"var(--color-primary)"}},{default:b(()=>[j(" Weiter ")]),_:1})],40,R)]))}});const $=L(h,[["__scopeId","data-v-1977c2ba"]]);export{$ as default};
