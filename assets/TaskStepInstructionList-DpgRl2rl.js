import{d as o,o as s,e,g as n,w as i,h as m,a as c,t as l,u as a,J as u,_ as p,F as f,n as k,B as I,c as g}from"./index-DnehlkmV.js";const B=["src","alt"],h=o({__name:"TaskStepInstructionListItem",props:{instruction:{}},setup(_){return(t,d)=>(s(),e("li",null,[n(a(u),{title:t.instruction.title,class:"task-step-instruction-list-item"},{default:i(()=>[t.instruction.image?(s(),e("img",{key:0,src:t.instruction.image.src,alt:t.instruction.image.alt},null,8,B)):m("",!0),c("p",null,l(t.instruction.description),1)]),_:1},8,["title"])]))}}),L=p(h,[["__scopeId","data-v-e5614a42"]]),S={class:"info-box"},T=o({__name:"TaskStepInstructionList",props:{title:{},description:{},instructions:{}},setup(_){return(t,d)=>(s(),e("div",S,[n(a(u),{title:t.title},{default:i(()=>[c("p",null,l(t.description),1)]),_:1},8,["title"]),n(a(I),{class:"instruction-list"},{default:i(()=>[(s(!0),e(f,null,k(t.instructions,r=>(s(),g(L,{key:r.title,instruction:r},null,8,["instruction"]))),128))]),_:1})]))}}),y=p(T,[["__scopeId","data-v-04fc6283"]]);export{y as T};