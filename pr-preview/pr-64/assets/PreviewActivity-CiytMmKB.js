import{d as x,o as D,e as B,f as a,w as F,u as e,B as M,F as R,a as r,b}from"./index-Cs5H5E-P.js";import{K as t}from"./KeyValueListItem-NFDGv4DX.js";const z=r("h2",null,"Device Motion Sensor Results",-1),G=r("p",null,[b(" Source: "),r("a",{href:"https://vueuse.org/core/useDeviceMotion/#usedevicemotion",rel:"noopener noreferrer",target:"_blank"}," https://vueuse.org/core/useDeviceMotion/#usedevicemotion ")],-1),C=x({__name:"PreviewActivity",props:{sensor:{}},setup(_){const f=_.sensor,{accelerationIncludingGravity:o,acceleration:n,rotationRate:s,interval:h}=f.getDeviceMotion(),l=u=>{if(u)return u.toLocaleString("de-DE",{minimumFractionDigits:3,maximumFractionDigits:3})};return(u,V)=>(D(),B(R,null,[z,G,a(e(M),null,{default:F(()=>{var c,d,i,v,m,p,y,g,k;return[a(t,{"key-data":"accelGrav.x (m/s^2)","value-data":l((c=e(o))==null?void 0:c.x)},null,8,["value-data"]),a(t,{"key-data":"accelGrav.y (m/s^2)","value-data":l((d=e(o))==null?void 0:d.y)},null,8,["value-data"]),a(t,{"key-data":"accelGrav.z (m/s^2)","value-data":l((i=e(o))==null?void 0:i.z)},null,8,["value-data"]),a(t,{"key-data":"accel.x (m/s^2)","value-data":l((v=e(n))==null?void 0:v.x)},null,8,["value-data"]),a(t,{"key-data":"accel.y (m/s^2)","value-data":l((m=e(n))==null?void 0:m.y)},null,8,["value-data"]),a(t,{"key-data":"accel.z (m/s^2)","value-data":l((p=e(n))==null?void 0:p.z)},null,8,["value-data"]),a(t,{"key-data":"rotRate.alpha (deg/s)","value-data":l((y=e(s))==null?void 0:y.alpha)},null,8,["value-data"]),a(t,{"key-data":"rotRate.beta (deg/s)","value-data":l((g=e(s))==null?void 0:g.beta)},null,8,["value-data"]),a(t,{"key-data":"rotRate.gamma (deg/s)","value-data":l((k=e(s))==null?void 0:k.gamma)},null,8,["value-data"]),a(t,{"key-data":"interval","value-data":e(h)},null,8,["value-data"])]}),_:1})],64))}});export{C as default};