import{d as h,o as e,e as l,a as t,t as p,b as v,_ as f,i as c,w as _,F as d,k as m,c as r,u as i,p as k,s as I,v as T,V as L,W as b}from"./index-Tpe7R2d8.js";const D={class:"key-value-list-item"},B={class:"value"},V=h({__name:"KeyValueListItem",props:{keyData:{},valueData:{type:[Number,String,Boolean]}},setup(n){return(s,a)=>(e(),l("li",D,[t("span",null,p(s.keyData)+":",1),v(),t("span",B,p(s.valueData),1)]))}}),g=f(V,[["__scopeId","data-v-403d99aa"]]),y=n=>(I("data-v-b94f39c6"),n=n(),T(),n),$=y(()=>t("h3",{class:"text-xl font-bold"}," Metadaten ",-1)),w=y(()=>t("h3",{class:"text-xl font-bold"}," Messergebnisse ",-1)),N={key:0},K=h({__name:"LogListTaskStepResultItem",props:{result:{}},setup(n){return(s,a)=>(e(),l("li",null,[$,c(i(k),null,{default:_(()=>[(e(!0),l(d,null,m(s.result.metas,([o,u])=>(e(),r(g,{key:o,"key-data":o,"value-data":u},null,8,["key-data","value-data"]))),128))]),_:1}),w,s.result.measurements.size===0?(e(),l("p",N," Keine Daten vorhanden. ")):(e(),r(i(k),{key:1},{default:_(()=>[(e(!0),l(d,null,m(s.result.measurements,([o,u])=>(e(),r(g,{key:o,"key-data":o,"value-data":u},null,8,["key-data","value-data"]))),128))]),_:1}))]))}}),C=f(K,[["__scopeId","data-v-b94f39c6"]]),F={class:"log-list-task-item"},M={class:"row-1"},R=h({__name:"LogListTaskStepItem",props:{logTaskStep:{}},setup(n){const{toDateTime:s}=b();return(a,o)=>(e(),l("li",F,[t("p",M,[t("span",null,[t("span",null,p(i(s)(a.logTaskStep.timestamp)),1),t("span",null,p(a.logTaskStep.id),1)]),t("span",null,[t("span",null,p(a.logTaskStep.title),1),c(L,{"input-types":a.logTaskStep.inputTypes},null,8,["input-types"])])]),c(i(k),{class:"list-task-step-result"},{default:_(()=>[(e(!0),l(d,null,m(a.logTaskStep.results,(u,S)=>(e(),r(C,{key:S,result:u},null,8,["result"]))),128))]),_:1})]))}}),z=f(R,[["__scopeId","data-v-b83ef2a6"]]);export{z as L};
