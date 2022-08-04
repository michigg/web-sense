import{_ as V,d as w,i as f,o as i,c as p,j as q,v as h,u as c,a as m,m as M,k as _,t as y,l as B,F as k,f as I,g as v,w as $,b as g,B as O,Q as C,r as G,e as S,n as A,p as N,q as U,I as j,R as E}from"./index.f5ade20c.js";import{T as L}from"./TaskStepInstructionList.6b53264e.js";const Q={class:"input-group"},D=["id"],R=["for"],F=w({__name:"InputGroup",props:{modelValue:null,modelModifiers:{default:()=>({})},id:null,label:null},emits:["update:modelValue"],setup(e,{emit:d}){const l=e,o=f({get:()=>l.modelValue,set:s=>{l.modelModifiers.uppercase&&typeof s=="string"&&(s=s.toUpperCase()),d("update:modelValue",s)}});return(s,n)=>(i(),p("div",Q,[q(m("input",M({id:e.id,"onUpdate:modelValue":n[0]||(n[0]=a=>_(o)?o.value=a:null)},s.$attrs),null,16,D),[[h,c(o)]]),m("label",{for:e.id},y(e.label),9,R)]))}});var H=V(F,[["__scopeId","data-v-b817dd46"]]);const K={class:"input-group"},P=["id"],W=["value"],X=["for"],z=w({__name:"SelectGroup",props:{modelValue:null,id:null,options:null,label:null},emits:["update:modelValue"],setup(e,{emit:d}){const l=e,o=f(()=>typeof l.options[0]=="string"?l.options:l.options.map(n=>typeof n=="string"?{title:n,value:n}:{title:n.text,value:n})),s=f({get:()=>l.modelValue,set:n=>d("update:modelValue",n)});return(n,a)=>(i(),p("div",K,[q(m("select",M({id:e.id,"onUpdate:modelValue":a[0]||(a[0]=t=>_(s)?s.value=t:null)},n.$attrs),[(i(!0),p(k,null,I(c(o),t=>(i(),p("option",{key:t.title||t,value:t.value||t},y(t.title||t),9,W))),128))],16,P),[[B,c(s)]]),m("label",{for:e.id},y(e.label),9,X)]))}});var J=V(z,[["__scopeId","data-v-36497267"]]);const Y=w({__name:"QuestionSection",props:{question:null,answer:{type:[String,Number,Boolean,Object]}},emits:["update:answer"],setup(e,{emit:d}){const l=e,o=C,s=f({get:()=>l.answer,set:n=>{d("update:answer",n)}});return(n,a)=>(i(),v(O,{title:e.question.title},{default:$(()=>[m("p",null,y(e.question.question),1),e.question.type===c(o).TEXT?(i(),v(H,{key:0,id:e.question.id,modelValue:c(s),"onUpdate:modelValue":a[0]||(a[0]=t=>_(s)?s.value=t:null),label:"Antwort"},null,8,["id","modelValue"])):g("",!0),e.question.type===c(o).SINGLE_CHOICE?(i(),v(J,{key:1,id:e.question.id,modelValue:c(s),"onUpdate:modelValue":a[1]||(a[1]=t=>_(s)?s.value=t:null),label:"Antwort",options:e.question.options||[]},null,8,["id","modelValue","options"])):g("",!0)]),_:1},8,["title"]))}});const Z=["onSubmit"],ee=U(" Weiter "),te=w({__name:"ActivitySurvey",props:{taskStep:null,sensors:null},emits:["submit"],setup(e,{emit:d}){const l=e,o=G({});for(const[n,a]of l.taskStep.questions)o.value[n]=a.clone();const s=async()=>{const a=await l.sensors.get(j.GEOLOCATION).getLocation(),t=[];for(const[b,r]of Object.entries(o.value)){const u=new E;if(u.addMeta("latitude",a.coords.latitude),u.addMeta("longitude",a.coords.longitude),u.addMeta("accuracy",a.coords.accuracy),u.addMeta("questionId",r.id),u.addMeta("type",r.type),u.addMeta("question",r.question),u.addMeta("questionTitle",r.title),r.answer&&typeof r.answer!="object")u.addMeasurement(b,r.answer);else if(r.answer)for(const[x,T]of Object.entries(r.answer))u.addMeasurement(x,T);t.push(u)}d("submit",t)};return(n,a)=>(i(),p("div",null,[S(L,{title:e.taskStep.title,description:e.taskStep.description,instructions:e.taskStep.instructions},null,8,["title","description","instructions"]),m("form",{class:"survey-section",onSubmit:N(s,["prevent"])},[(i(!0),p(k,null,I(Object.keys(o.value),t=>(i(),v(Y,{key:t,answer:o.value[t].answer,"onUpdate:answer":b=>o.value[t].answer=b,question:o.value[t]},null,8,["answer","onUpdate:answer","question"]))),128)),S(A,{type:"submit"},{default:$(()=>[ee]),_:1})],40,Z)]))}});var ae=V(te,[["__scopeId","data-v-79bf8b69"]]);export{ae as default};
