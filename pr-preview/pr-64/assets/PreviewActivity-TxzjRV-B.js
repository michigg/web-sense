import{d as i,o as l,e as d,f as r,u as e,M as p,c as f,w as v,B as _,g as y,F as g,a as n,b as h}from"./index-D0pVmQRR.js";import{K as s}from"./KeyValueListItem-BVNtNV0g.js";const k=n("p",null,[h(" Source: "),n("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer",rel:"noopener noreferrer",target:"_blank"}," https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer ")],-1),x=n("h2",null,"Sensor Results",-1),F=i({__name:"PreviewActivity",props:{sensor:{}},setup(c){const u=c.sensor,{currentSensorValue:a,error:m}=u.start({frequency:60}),t=o=>{if(o)return o.toLocaleString("de-DE",{minimumFractionDigits:3,maximumFractionDigits:3})};return(o,B)=>(l(),d(g,null,[k,x,r(e(p),{error:e(m)},null,8,["error"]),e(a)?(l(),f(e(_),{key:0},{default:v(()=>[r(s,{"key-data":"accelGrav.x (m/s^2)","value-data":t(e(a).x)},null,8,["value-data"]),r(s,{"key-data":"accelGrav.y (m/s^2)","value-data":t(e(a).y)},null,8,["value-data"]),r(s,{"key-data":"accelGrav.z (m/s^2)","value-data":t(e(a).z)},null,8,["value-data"])]),_:1})):y("",!0)],64))}});export{F as default};
