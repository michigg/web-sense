import{v as s,u as m,i}from"./vue-leaflet.es-bzqfDKha.js";import{d as p,r as u,o as g,c as f,w as d,i as l,u as o,z as h,f as z}from"./index-ulhJdsua.js";const C=p({__name:"MiniMap",props:{lat:{},lng:{},initialZoom:{default:17}},setup(n){const a=u(n.initialZoom);return(e,t)=>e.lat&&e.lng?(g(),f(o(i),{key:0,ref:"map",zoom:a.value,"onUpdate:zoom":t[0]||(t[0]=r=>a.value=r),center:[e.lat,e.lng],style:{height:"30vh","min-height":"15rem","max-height":"25rem"},options:{dragging:!1,zoomControl:!0,scrollWheelZoom:!1}},{default:d(()=>[l(o(s),{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),h(e.$slots,"default",{},()=>[l(o(m),{"lat-lng":[e.lat,e.lng]},null,8,["lat-lng"])])]),_:3},8,["zoom","center"])):z("",!0)}});export{C as _};