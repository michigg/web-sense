import{v as s,u as i,X as m,i as p}from"./vue-leaflet.es-CIDke0EF.js";import{d as u,r as g,o as d,c as f,w as h,g as o,u as a,P as c,h as y}from"./index-DnehlkmV.js";const k=u({__name:"MiniMap",props:{lat:{},lng:{},accuracy:{default:void 0},initialZoom:{default:17}},setup(n){const l=g(n.initialZoom);return(e,t)=>e.lat&&e.lng?(d(),f(a(p),{key:0,ref:"map",zoom:l.value,"onUpdate:zoom":t[0]||(t[0]=r=>l.value=r),center:[e.lat,e.lng],style:{height:"30vh","min-height":"15rem","max-height":"25rem"},options:{dragging:!1,zoomControl:!0,scrollWheelZoom:!1}},{default:h(()=>[o(a(s),{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),c(e.$slots,"default",{},()=>[o(a(i),{"lat-lng":[e.lat,e.lng]},null,8,["lat-lng"]),o(a(m),{"lat-lng":[e.lat,e.lng],radius:e.accuracy},null,8,["lat-lng","radius"])])]),_:3},8,["zoom","center"])):y("",!0)}});export{k as _};
