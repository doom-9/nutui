var e=Object.assign;import{c as s,T as o}from"./mobile.6aacc2bd.js";import{k as t,a as r,b as l,z as a,s as i,x as n,r as u,o as d,c,f,F as h,h as m,t as L,q as M}from"./vendor.80bf15c7.js";import"./index.b400e66a.js";const{createDemo:p}=s("infiniteloading");var g=p({props:{},setup(){const s=t(!0),i=t(!0),n=t(!0),u=r({defultList:[""],customList:[""],refreshList:[""]});return l((()=>{(()=>{for(let e=0;e<10;e++)u.defultList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`),u.customList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`),u.refreshList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`)})()})),e({loadMore:e=>{setTimeout((()=>{const o=u.defultList.length;for(let e=o;e<o+10;e++)u.defultList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`);u.defultList.length>30&&(s.value=!1),e()}),500)},hasMore:s,customHasMore:i,customLoadMore:e=>{setTimeout((()=>{const s=u.customList.length;for(let e=s;e<s+10;e++)u.customList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`);u.customList.length>30&&(i.value=!1),e()}),500)},refreshHasMore:n,refreshLoadMore:e=>{setTimeout((()=>{const s=u.refreshList.length;for(let e=s;e<s+10;e++)u.refreshList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`);u.refreshList.length>30&&(n.value=!1),e()}),500)},refresh:e=>{setTimeout((()=>{o.success("刷新成功"),e()}),1e3)}},a(u))}});const v=M("data-v-535d9fb1");i("data-v-535d9fb1");const b={class:"demo"},_=f("h2",null,"基础用法",-1),w={class:"infiniteUl",id:"scroll"},$=f("h2",null,"下拉刷新",-1),x={class:"infiniteUl",id:"refreshScroll"},T=f("h2",null,"自定义加载文案",-1),j={class:"infiniteUl",id:"customScroll"};n();const k=v(((e,s,o,t,r,l)=>{const a=u("nut-infiniteloading"),i=u("nut-cell");return d(),c("div",b,[_,f(i,null,{default:v((()=>[f("ul",w,[f(a,{"container-id":"scroll","use-window":!1,"has-more":e.hasMore,onLoadMore:e.loadMore},{default:v((()=>[(d(!0),c(h,null,m(e.defultList,((e,s)=>(d(),c("li",{class:"infiniteLi",key:s},L(e),1)))),128))])),_:1},8,["has-more","onLoadMore"])])])),_:1}),$,f(i,null,{default:v((()=>[f("ul",x,[f(a,{"pull-icon":"JD","container-id":"refreshScroll","use-window":!1,"is-open-refresh":!0,"has-more":e.refreshHasMore,onLoadMore:e.refreshLoadMore,onRefresh:e.refresh},{default:v((()=>[(d(!0),c(h,null,m(e.refreshList,((e,s)=>(d(),c("li",{class:"infiniteLi",key:s},L(e),1)))),128))])),_:1},8,["has-more","onLoadMore","onRefresh"])])])),_:1}),T,f(i,null,{default:v((()=>[f("ul",j,[f(a,{"load-txt":"loading","load-more-txt":"没有啦～","container-id":"customScroll","use-window":!1,"has-more":e.customHasMore,onLoadMore:e.customLoadMore},{default:v((()=>[(d(!0),c(h,null,m(e.customList,((e,s)=>(d(),c("li",{class:"infiniteLi",key:s},L(e),1)))),128))])),_:1},8,["has-more","onLoadMore"])])])),_:1})])}));g.render=k,g.__scopeId="data-v-535d9fb1";export default g;
