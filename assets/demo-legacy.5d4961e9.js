System.register(["./mobile-legacy.f5ac62b1.js","./vendor-legacy.2cbae777.js","./index-legacy.cce8b851.js"],(function(t){"use strict";var e,n,s,i,o,c;return{setters:[function(t){e=t.c,n=t.T},function(t){s=t.r,i=t.o,o=t.c,c=t.f},function(){}],execute:function(){const{createDemo:a}=e("toast"),l=t("default",a({setup:()=>({textToast:t=>{n.text(t)},successToast:t=>{n.success(t)},errorToast:t=>{n.fail(t)},warningToast:t=>{n.warn(t)},loadingToast:t=>{n.loading(t)}})})),r={class:"demo"},u=c("h2",null,"基本用法",-1);l.render=function(t,e,n,a,l,T){const g=s("nut-cell");return i(),o("div",r,[u,c(g,{title:"Text 文字提示","is-link":"",onClick:e[1]||(e[1]=e=>t.textToast("网络失败，请稍后再试~"))}),c(g,{title:"Success 成功提示","is-link":"",onClick:e[2]||(e[2]=e=>t.successToast("成功提示"))}),c(g,{title:"Error 失败提示","is-link":"",onClick:e[3]||(e[3]=e=>t.errorToast("失败提示"))}),c(g,{title:"Warning 警告提示","is-link":"",onClick:e[4]||(e[4]=e=>t.warningToast("警告提示"))}),c(g,{title:"Loading 加载提示","is-link":"",onClick:e[5]||(e[5]=e=>t.loadingToast("加载中"))})])}}}}));