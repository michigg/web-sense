import{d,f as m,o as l,e as p,g as r,u as e,M as f,c as v,w as _,B as y,h,F as S,a as c,b as g}from"./index-DnehlkmV.js";import{K as n}from"./KeyValueListItem-DAQ21WZt.js";const k=c("p",null,[g(" Source: "),c("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor",rel:"noopener noreferrer",target:"_blank"}," https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor ")],-1),x=c("h2",null,"Sensor Results",-1),b=d({__name:"PreviewActivity",props:{sensor:{}},setup(i){const t=i.sensor;t.start({frequency:60});const{currentSensorValue:a,error:u}=t,o=s=>{if(s)return s.toLocaleString("de-DE",{minimumFractionDigits:3,maximumFractionDigits:3})};return m(async()=>{await t.stop()}),(s,V)=>(l(),p(S,null,[k,x,r(e(f),{error:e(u)},null,8,["error"]),e(a)?(l(),v(e(y),{key:0},{default:_(()=>[r(n,{"key-data":"accelGrav.x (m/s^2)","value-data":o(e(a).x)},null,8,["value-data"]),r(n,{"key-data":"accelGrav.y (m/s^2)","value-data":o(e(a).y)},null,8,["value-data"]),r(n,{"key-data":"accelGrav.z (m/s^2)","value-data":o(e(a).z)},null,8,["value-data"])]),_:1})):h("",!0)],64))}});export{b as default};