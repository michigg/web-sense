import{d as _,o as f,e as h,h as a,w as x,u as e,B,F as I,a as R}from"./index-yB2zXo3B.js";import{K as t}from"./KeyValueListItem-llaNNldo.js";const z=R("h2",null,"Device Motion Sensor Results",-1),C=_({__name:"PreviewActivity",props:{sensor:{}},setup(p){const k=p.sensor,{accelerationIncludingGravity:l,acceleration:n,rotationRate:o,interval:g}=k.getDeviceMotion();return(w,M)=>(f(),h(I,null,[z,a(e(B),null,{default:x(()=>{var d,s,r,u,c,i,v,m,y;return[a(t,{"key-data":"accelerationIncludingGravity.x (m/s^2)","value-data":(d=e(l))==null?void 0:d.x},null,8,["value-data"]),a(t,{"key-data":"accelerationIncludingGravity.y (m/s^2)","value-data":(s=e(l))==null?void 0:s.y},null,8,["value-data"]),a(t,{"key-data":"accelerationIncludingGravity.z (m/s^2)","value-data":(r=e(l))==null?void 0:r.z},null,8,["value-data"]),a(t,{"key-data":"acceleration.x (m/s^2)","value-data":(u=e(n))==null?void 0:u.x},null,8,["value-data"]),a(t,{"key-data":"acceleration.y (m/s^2)","value-data":(c=e(n))==null?void 0:c.y},null,8,["value-data"]),a(t,{"key-data":"acceleration.z (m/s^2)","value-data":(i=e(n))==null?void 0:i.z},null,8,["value-data"]),a(t,{"key-data":"rotationRate.alpha (degrees per seconds)","value-data":(v=e(o))==null?void 0:v.alpha},null,8,["value-data"]),a(t,{"key-data":"rotationRate.beta (degrees per seconds)","value-data":(m=e(o))==null?void 0:m.beta},null,8,["value-data"]),a(t,{"key-data":"rotationRate.gamma (degrees per seconds)","value-data":(y=e(o))==null?void 0:y.gamma},null,8,["value-data"]),a(t,{"key-data":"interval","value-data":e(g)},null,8,["value-data"])]}),_:1})],64))}});export{C as default};