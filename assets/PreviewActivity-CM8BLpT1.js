import{d,f as i,o as c,e as p,g as r,u as e,M as f,c as v,w as _,B as h,h as y,F as g,a as l,b as k}from"./index-DnehlkmV.js";import{K as n}from"./KeyValueListItem-DAQ21WZt.js";const x=l("p",null,[k(" Source: "),l("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer",rel:"noopener noreferrer",target:"_blank"}," https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer ")],-1),S=l("h2",null,"Sensor Results",-1),b=d({__name:"PreviewActivity",props:{sensor:{}},setup(u){const t=u.sensor;t.start({frequency:60});const{currentSensorValue:a,error:m}=t,o=s=>{if(s)return s.toLocaleString("de-DE",{minimumFractionDigits:3,maximumFractionDigits:3})};return i(()=>{t.stop()}),(s,V)=>(c(),p(g,null,[x,S,r(e(f),{error:e(m)},null,8,["error"]),e(a)?(c(),v(e(h),{key:0},{default:_(()=>[r(n,{"key-data":"accelGrav.x (m/s^2)","value-data":o(e(a).x)},null,8,["value-data"]),r(n,{"key-data":"accelGrav.y (m/s^2)","value-data":o(e(a).y)},null,8,["value-data"]),r(n,{"key-data":"accelGrav.z (m/s^2)","value-data":o(e(a).z)},null,8,["value-data"])]),_:1})):y("",!0)],64))}});export{b as default};
