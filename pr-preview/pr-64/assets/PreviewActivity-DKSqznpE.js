import{d as i,o as l,e as d,f as t,u as e,M as p,c as f,w as v,B as _,g,F as y,a as n,b as h}from"./index-Cs5H5E-P.js";import{K as s}from"./KeyValueListItem-NFDGv4DX.js";const k=n("p",null,[h(" Source: "),n("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer",rel:"noopener noreferrer",target:"_blank"}," https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer ")],-1),x=n("h2",null,"Sensor Results",-1),b=i({__name:"PreviewActivity",props:{sensor:{}},setup(c){const u=c.sensor,{currentSensorValue:a,error:m}=u.start({frequency:60}),r=o=>{if(o)return o.toLocaleString("de-DE",{minimumFractionDigits:3,maximumFractionDigits:3})};return(o,B)=>(l(),d(y,null,[k,x,t(e(p),{error:e(m)},null,8,["error"]),e(a)?(l(),f(e(_),{key:0},{default:v(()=>[t(s,{"key-data":"accelGrav.x (m/s^2)","value-data":r(e(a).x)},null,8,["value-data"]),t(s,{"key-data":"accelGrav.y (m/s^2)","value-data":r(e(a).y)},null,8,["value-data"]),t(s,{"key-data":"accelGrav.z (m/s^2)","value-data":r(e(a).z)},null,8,["value-data"])]),_:1})):g("",!0)],64))}});export{b as default};