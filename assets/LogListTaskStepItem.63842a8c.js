import{_ as m,d as k,o as t,e as a,a as s,t as u,b as L,g as c,w as r,F as i,h as d,c as o,i as p,s as S,x as T,u as x,y as I,z as f}from"./index.77bf456f.js";const D={class:"key-value-list-item"},$=L(),b={class:"value"},B=k({__name:"KeyValueListItem",props:{keyData:null,valueData:{type:[Number,String,Boolean]}},setup(e){return(_,v)=>(t(),a("li",D,[s("span",null,u(e.keyData)+":",1),$,s("span",b,u(e.valueData),1)]))}});var y=m(B,[["__scopeId","data-v-1281a0bf"]]);const g=e=>(S("data-v-85c16c16"),e=e(),T(),e),V=g(()=>s("h3",{class:"text-xl font-bold"}," Metadaten ",-1)),w=g(()=>s("h3",{class:"text-xl font-bold"}," Messergebnisse ",-1)),K={key:0},N=k({__name:"LogListTaskStepResultItem",props:{result:null},setup(e){return(_,v)=>(t(),a("li",null,[V,c(p,null,{default:r(()=>[(t(!0),a(i,null,d(e.result.metas,([l,n])=>(t(),o(y,{key:l,"key-data":l,"value-data":n},null,8,["key-data","value-data"]))),128))]),_:1}),w,e.result.measurements.size===0?(t(),a("p",K," Keine Daten vorhanden. ")):(t(),o(p,{key:1},{default:r(()=>[(t(!0),a(i,null,d(e.result.measurements,([l,n])=>(t(),o(y,{key:l,"key-data":l,"value-data":n},null,8,["key-data","value-data"]))),128))]),_:1}))]))}});var R=m(N,[["__scopeId","data-v-85c16c16"]]);const z={class:"log-list-task-item"},C={class:"row-1"},F=k({__name:"LogListTaskStepItem",props:{logTaskStep:null},setup(e){const{toDateTime:_}=f();return(v,l)=>(t(),a("li",z,[s("p",C,[s("span",null,[s("span",null,u(x(_)(e.logTaskStep.timestamp)),1),s("span",null,u(e.logTaskStep.id),1)]),s("span",null,[s("span",null,u(e.logTaskStep.title),1),c(I,{"input-types":e.logTaskStep.inputTypes},null,8,["input-types"])])]),c(p,{class:"list-task-step-result"},{default:r(()=>[(t(!0),a(i,null,d(e.logTaskStep.results,(n,h)=>(t(),o(R,{key:h,result:n},null,8,["result"]))),128))]),_:1})]))}});var E=m(F,[["__scopeId","data-v-7559b2d0"]]);export{E as L};