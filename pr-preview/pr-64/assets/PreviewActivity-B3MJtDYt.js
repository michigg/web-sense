import{d as i,o as t,e as p,f as a,u as e,M as d,c as n,w as m,B as f,g as s,F as _,a as o,b as h}from"./index-Cs5H5E-P.js";import{K as S}from"./KeyValueListItem-NFDGv4DX.js";import{O as b}from"./OrientationAnimation-Burhcnp8.js";const k=o("p",null,[h(" Source: "),o("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/AbsoluteOrientationSensor",rel:"noopener noreferrer",target:"_blank"}," https://developer.mozilla.org/en-US/docs/Web/API/AbsoluteOrientationSensor ")],-1),v=o("h2",null,"Sensor Results",-1),x=i({__name:"PreviewActivity",props:{sensor:{}},setup(l){const u=l.sensor,{currentSensorValue:r,error:c}=u.start({frequency:60,referenceFrame:"device"});return(A,B)=>(t(),p(_,null,[k,v,a(e(d),{error:e(c)},null,8,["error"]),e(r)?(t(),n(e(f),{key:0},{default:m(()=>[a(S,{"key-data":"Quaternion","value-data":e(r)},null,8,["value-data"])]),_:1})):s("",!0),e(r)?(t(),n(b,{key:1,quaternion:e(r)},null,8,["quaternion"])):s("",!0)],64))}});export{x as default};