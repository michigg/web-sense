import{d,f as m,o as c,e as p,g as t,u as e,M as v,c as y,w as f,B as _,h as g,F as h,a as l,b as S}from"./index-DD4em6aX.js";import{K as n}from"./KeyValueListItem-RBRixn1q.js";const k=l("p",null,[S(" Source: "),l("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/GravitySensor",rel:"noopener noreferrer",target:"_blank"}," https://developer.mozilla.org/en-US/docs/Web/API/GravitySensor ")],-1),x=l("h2",null,"Sensor Results",-1),b=d({__name:"PreviewActivity",props:{sensor:{}},setup(u){const r=u.sensor;r.start({frequency:60});const{currentSensorValue:a,error:i}=r,o=s=>{if(s)return s.toLocaleString("de-DE",{minimumFractionDigits:3,maximumFractionDigits:3})};return m(async()=>{await r.stop()}),(s,V)=>(c(),p(h,null,[k,x,t(e(v),{error:e(i)},null,8,["error"]),e(a)?(c(),y(e(_),{key:0},{default:f(()=>[t(n,{"key-data":"accelGrav.x (m/s^2)","value-data":o(e(a).x)},null,8,["value-data"]),t(n,{"key-data":"accelGrav.y (m/s^2)","value-data":o(e(a).y)},null,8,["value-data"]),t(n,{"key-data":"accelGrav.z (m/s^2)","value-data":o(e(a).z)},null,8,["value-data"])]),_:1})):g("",!0)],64))}});export{b as default};
