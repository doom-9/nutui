import{c as t}from"./mobile.6aacc2bd.js";import{r as e,o as a,c as p,f as r,i as o,j as l}from"./vendor.80bf15c7.js";import"./index.b400e66a.js";const{createDemo:i}=t("drag");var s=i({setup(){}});const d={class:"demo full"},f=r("h2",null,"基础用法",-1),n=l("触摸移动"),u=r("h2",{style:{top:"30px",position:"relative"}},"限制拖拽方向",-1),c=l("只能X轴拖拽"),y=l("只能Y轴拖拽"),x=r("h2",{style:{top:"70px",position:"relative"}},"自动吸边",-1),m=l("拖动我");s.render=function(t,l,i,s,_,b){const v=e("nut-button"),h=e("nut-drag");return a(),p("div",d,[f,r(h,{style:{top:"100px",left:"8px"}},{default:o((()=>[r(v,{type:"primary"},{default:o((()=>[n])),_:1})])),_:1}),u,r(h,{direction:"x",style:{top:"200px",left:"8px"}},{default:o((()=>[r(v,{type:"primary"},{default:o((()=>[c])),_:1})])),_:1}),r(h,{direction:"y",style:{top:"200px",right:"50px"}},{default:o((()=>[r(v,{type:"primary"},{default:o((()=>[y])),_:1})])),_:1}),x,r(h,{direction:"x",attract:!0,style:{top:"300px",left:"8px"}},{default:o((()=>[r(v,{type:"primary"},{default:o((()=>[m])),_:1})])),_:1})])};export default s;
