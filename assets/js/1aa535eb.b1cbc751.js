"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[36103],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,y=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(y,c(c({ref:t},s),{},{components:r})):n.createElement(y,c({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"MySQL Case WHEN",tags:[]},c=void 0,l={permalink:"/2022/01/04/mysql-case-when",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2022-01-04-mysql-case-when.md",source:"@site/blog/2022-01-04-mysql-case-when.md",title:"MySQL Case WHEN",description:"",date:"2022-01-04T00:00:00.000Z",formattedDate:"2022\u5e741\u67084\u65e5",tags:[],readingTime:.05,hasTruncateMarker:!1,authors:[],frontMatter:{title:"MySQL Case WHEN",tags:[]},prevItem:{title:"ClickHouse \u5e38\u7528\u51fd\u6570\u4f7f\u7528",permalink:"/2022/01/20/clickhouse-chang-yong-han-shu-shi-yong"},nextItem:{title:"Apollo \u5982\u4f55\u5b9e\u73b0\u914d\u7f6e\u70ed\u53d1\u5e03",permalink:"/2022/01/03/apollo-ru-he-shi-xian-pei-zhi-re-fa-bu"}},i={authorsImageUrls:[]},p=[],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"CASE\n WHEN a=1 THEN 'HELLO'\n WHEN a=2 THEN \u2019TELL\u2018\n ELSE 'ELLE'\nEND 'Col_name'\n")))}m.isMDXComponent=!0}}]);