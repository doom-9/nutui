var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,l,o)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o;"undefined"!=typeof require&&require;import{c as i}from"./mobile.130588d4.js";import{a as n,A as c,B as d,C as p,r as u,o as m,e as h,j as f,k as b,g,F as v,i as j,t as x,l as y}from"./vendor.6bc94963.js";import"./index.d8e175d8.js";const{createDemo:C}=i("noticebar");var O=C({props:{},setup(){const e=n({horseLamp1:["惊喜红包免费领","爆款准点秒","买超值优惠","赢百万京豆"],horseLamp2:["惊喜红包免费领","爆款准点秒","买超值优惠","赢百万京豆"],horseLamp3:["惊喜红包免费领","爆款准点秒","买超值优惠","赢百万京豆"],text:"华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"});return i=((e,t)=>{for(var l in t||(t={}))s.call(t,l)&&a(e,l,t[l]);if(o)for(var l of o(t))r.call(t,l)&&a(e,l,t[l]);return e})({},c(e)),t(i,l({hello:()=>{console.log("hello world")},go:e=>{console.log(e)}}));var i}});d("data-v-2e7cac20");const w={class:"demo full"},A=g("h2",null,"默认用法",-1),L=g("h2",null,"禁用滚动",-1),T=g("h2",null,"通告栏模式--关闭模式",-1),k=y("华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！ "),H=g("h2",null,"通告栏模式--链接模式",-1),I=g("a",{href:"https://www.jd.com"},"京东商城",-1),W=g("h2",null,"纵向滚动",-1),_={class:"interstroll-list"},E=g("h2",null,"纵向复杂滚动动画",-1),P=g("h2",null,"纵向自定义滚动内容",-1),U=["data-index"],q=g("h2",null,"纵向自定义右侧图标",-1);p(),O.render=function(e,t,l,o,s,r){const a=u("nut-noticebar"),i=u("nut-icon");return m(),h("div",w,[A,f(a,{text:e.text},null,8,["text"]),L,f(a,{text:"华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！",scrollable:!1}),T,f(a,{closeMode:!0,onClick:e.hello},{default:b((()=>[k])),_:1},8,["onClick"]),H,f(a,{"left-icon":"https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"},{default:b((()=>[I])),_:1}),W,g("div",_,[f(a,{direction:"vertical",list:e.horseLamp1,speed:10,standTime:1e3,onClick:e.go,closeMode:!0},null,8,["list","onClick"])]),E,f(a,{direction:"vertical",list:e.horseLamp2,speed:10,standTime:2e3,complexAm:!0},null,8,["list"]),P,f(a,{direction:"vertical",height:50,speed:10,standTime:1e3,list:[],onClose:e.go},{default:b((()=>[(m(!0),h(v,null,j(e.horseLamp3,((e,t)=>(m(),h("div",{class:"custom-item","data-index":t,style:{height:"50px","line-height":"50px"},key:t},x(e),9,U)))),128))])),_:1},8,["onClose"]),q,f(a,{direction:"vertical",list:e.horseLamp1,speed:10,standTime:1e3},{rightIcon:b((()=>[f(i,{name:"fabulous",color:"#f0250f"})])),_:1},8,["list"])])},O.__scopeId="data-v-2e7cac20";export{O as default};