import{d as l,o as e,e as s,i as n,w as i,f as p,a as o,t as r,u as a,B as u,_,F as f,j as k,c as I,k as g}from"./index.04e99704.js";const x=["src","alt"],v=l({__name:"TaskStepInstructionListItem",props:{instruction:null},setup(t){return(d,m)=>(e(),s("li",null,[n(a(u),{title:t.instruction.title,class:"task-step-instruction-list-item"},{default:i(()=>[t.instruction.image?(e(),s("img",{key:0,src:t.instruction.image.src,alt:t.instruction.image.alt},null,8,x)):p("",!0),o("p",null,r(t.instruction.description),1)]),_:1},8,["title"])]))}});const y=_(v,[["__scopeId","data-v-e5614a42"]]),L={class:"info-box"},S=l({__name:"TaskStepInstructionList",props:{title:null,description:null,instructions:null},setup(t){return(d,m)=>(e(),s("div",L,[n(a(u),{title:t.title},{default:i(()=>[o("p",null,r(t.description),1)]),_:1},8,["title"]),n(a(g),{class:"instruction-list"},{default:i(()=>[(e(!0),s(f,null,k(t.instructions,c=>(e(),I(y,{key:c.title,instruction:c},null,8,["instruction"]))),128))]),_:1})]))}});const B=_(S,[["__scopeId","data-v-04fc6283"]]);export{B as T};
