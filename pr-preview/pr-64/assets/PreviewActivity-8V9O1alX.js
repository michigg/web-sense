import{d as w,p as d,o as D,e as h,h as a,w as A,u as t,B as _,F as N,a as S}from"./index-yB2zXo3B.js";import{K as e}from"./KeyValueListItem-llaNNldo.js";const x=S("h2",null,"Network Sensor Results",-1),V=w({__name:"PreviewActivity",props:{sensor:{}},setup(o){const i=o.sensor,{isSupported:s,isOnline:r,saveData:v,onlineAt:l,rtt:c,downlink:f,downlinkMax:p,type:k,offlineAt:n,effectiveType:m}=i.getNetwork(),y=d(()=>l.value?new Date(l.value).toLocaleDateString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:"longOffset"}):""),g=d(()=>n.value?new Date(n.value).toLocaleDateString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:"longOffset"}):"");return(u,O)=>(D(),h(N,null,[x,a(t(_),null,{default:A(()=>[a(e,{"key-data":"isSupported","value-data":t(s)},null,8,["value-data"]),a(e,{"key-data":"isOnline","value-data":t(r)},null,8,["value-data"]),a(e,{"key-data":"saveData","value-data":t(v)},null,8,["value-data"]),a(e,{"key-data":"onlineAt","value-data":t(l)},null,8,["value-data"]),a(e,{"key-data":"onlineAt (human readable)","value-data":y.value},null,8,["value-data"]),a(e,{"key-data":"offlineAt","value-data":t(n)},null,8,["value-data"]),a(e,{"key-data":"offlineAt (human readable)","value-data":g.value},null,8,["value-data"]),a(e,{"key-data":"rtt","value-data":t(c)},null,8,["value-data"]),a(e,{"key-data":"downlink","value-data":t(f)},null,8,["value-data"]),a(e,{"key-data":"downlinkMax","value-data":t(p)},null,8,["value-data"]),a(e,{"key-data":"type","value-data":t(k)},null,8,["value-data"]),a(e,{"key-data":"effectiveType","value-data":t(m)},null,8,["value-data"])]),_:1})],64))}});export{V as default};
