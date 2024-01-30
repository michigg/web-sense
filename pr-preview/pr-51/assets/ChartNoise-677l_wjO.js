import{d as $,r as w,x as D,o as r,e as l,i as s,w as h,u as o,q as p,X as f,y as U,a as t,t as g,F as m,k as x,s as V,v as A,_ as F}from"./index-fAuzHlFq.js";const R=c=>(V("data-v-f85d6c82"),c=c(),A(),c),T={class:"noise-chart-wrapper"},W={class:"text-xl"},E={class:"noise-chart"},M={class:"chart",viewBox:"0 0 600 700","aria-labelledby":"title desc",role:"img"},X=["transform"],q=["transform"],H={x:"0",y:-16,xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"#fff",class:"bi bi-arrow-bar-left",viewBox:"0 0 16 16"},K=R(()=>t("path",{d:"m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"},null,-1)),O=[K],P={x:"32",y:"0",dy:"10",class:"label"},j=["transform"],G=["fill","height"],J={x:"10",y:"15",dy:"15",class:"label"},Q=["transform"],Y={x:"-20",y:"0",dy:"10",class:"label"},u=600,d=250,Z=$({__name:"ChartNoise",props:{dba:{}},setup(c){const i=300-d/2,k=d,b=y=>y*10/2,S=c,n=w(0);let _=-1;D(()=>{_=window.setInterval(()=>{n.value<S.dba?n.value++:(n.value=+S.dba.toFixed(0),_&&clearInterval(_))},10)});const v={headline:"Lärmeinschätzung durch Referenzwerte",type:"references",data:[{dbStart:0,dbStop:20,color:"rgb(0,240,0)",label:"Blätterrauschen"},{dbStart:20,dbStop:40,color:"rgb(75,243,0)",label:"Tickende Uhr"},{dbStart:40,dbStop:60,color:"rgb(160,247,0)",label:"Unterhaltung"},{dbStart:60,dbStop:70,color:"rgb(221,250,0)",label:"Staubsauger"},{dbStart:70,dbStop:80,color:"rgb(253,233,14)",label:"PKW Verkehr"},{dbStart:80,dbStop:90,color:"rgb(253,179,41)",label:"Baustellenarbeit"},{dbStart:90,dbStop:100,color:"rgb(253,145,54)",label:"Motorsäge"},{dbStart:100,dbStop:110,color:"rgb(253,108,67)",label:"Rockkonzert"},{dbStart:110,dbStop:120,color:"rgb(253,81,81)",label:"Düsenflugzeuge"}]},N={headline:"Lärmeinschätzung während des Tages (6 - 22 Uhr)",type:"day",data:[{dbStart:0,dbStop:55,color:"rgb(0,240,0)",label:"Leise"},{dbStart:55,dbStop:120,color:"rgb(253,81,81)",label:"Laut"}]},B={headline:"Lärmeinschätzung während der Nacht (22 - 6 Uhr)",type:"night",data:[{dbStart:0,dbStop:40,color:"rgb(0,240,0)",label:"Leise"},{dbStart:40,dbStop:120,color:"rgb(253,81,81)",label:"Laut"}]},L=[0,20,40,60,80,100,120],a=w(v),C=()=>{a.value=v},z=()=>{a.value=N},I=()=>{a.value=B};return(y,tt)=>(r(),l("div",T,[s(o(U),null,{default:h(()=>[s(o(p),{active:a.value.type==="references",onClick:C},{default:h(()=>[s(o(f),{"icon-key":"bi-soundwave"})]),_:1},8,["active"]),s(o(p),{active:a.value.type==="night",onClick:I},{default:h(()=>[s(o(f),{"icon-key":"bi-moon-stars"})]),_:1},8,["active"]),s(o(p),{active:a.value.type==="day",onClick:z},{default:h(()=>[s(o(f),{"icon-key":"bi-brightness-high"})]),_:1},8,["active"])]),_:1}),t("h3",W,g(a.value.headline),1),t("div",E,[(r(),l("svg",M,[t("g",{transform:"translate(0, 50)"},[t("rect",{class:"main-bar",transform:"translate(0, 0)",x:i,y:"0",width:d,height:u,fill:"#444"}),t("g",{class:"marker",transform:`translate(${i+o(k)}, ${u-b(n.value)})`},[(r(),l("svg",H,O)),t("text",P,g(n.value.toLocaleString("de-DE"))+" dB(A) ",1)],8,q),(r(!0),l(m,null,x(a.value.data,e=>(r(),l("g",{key:e.label,class:"bar",transform:`translate(${i}, ${u-b(e.dbStop)})`},[t("rect",{x:"0",y:"0",fill:e.color,width:d,height:b(e.dbStop-e.dbStart)},null,8,G),t("text",J,g(e.label),1)],8,j))),128)),(r(),l(m,null,x(L,e=>t("g",{key:e,class:"reference-dbas",transform:`translate(${i}, ${u-b(e)})`},[t("rect",{x:"0",y:"-2.5",fill:"rgba(0,0,0,.2)",width:d,height:5}),t("text",Y,g(e)+" dB(A) ",1)],8,Q)),64))],8,X)]))])]))}}),at=F(Z,[["__scopeId","data-v-f85d6c82"]]);export{at as C};
