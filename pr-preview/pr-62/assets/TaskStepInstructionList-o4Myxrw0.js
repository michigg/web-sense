import{d as o,o as s,e,i,w as n,f as m,a as c,t as l,u as a,B as u,_ as p,F as f,k,c as I,p as g}from"./index-Tpe7R2d8.js";const B=["src","alt"],h=o({__name:"TaskStepInstructionListItem",props:{instruction:{}},setup(_){return(t,d)=>(s(),e("li",null,[i(a(u),{title:t.instruction.title,class:"task-step-instruction-list-item"},{default:n(()=>[t.instruction.image?(s(),e("img",{key:0,src:t.instruction.image.src,alt:t.instruction.image.alt},null,8,B)):m("",!0),c("p",null,l(t.instruction.description),1)]),_:1},8,["title"])]))}}),L=p(h,[["__scopeId","data-v-e5614a42"]]),S={class:"info-box"},T=o({__name:"TaskStepInstructionList",props:{title:{},description:{},instructions:{}},setup(_){return(t,d)=>(s(),e("div",S,[i(a(u),{title:t.title},{default:n(()=>[c("p",null,l(t.description),1)]),_:1},8,["title"]),i(a(g),{class:"instruction-list"},{default:n(()=>[(s(!0),e(f,null,k(t.instructions,r=>(s(),I(L,{key:r.title,instruction:r},null,8,["instruction"]))),128))]),_:1})]))}}),y=p(T,[["__scopeId","data-v-04fc6283"]]);export{y as T};