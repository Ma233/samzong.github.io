"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[45417],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,m=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(a),s=r,f=c["".concat(m,".").concat(s)]||c[s]||u[s]||o;return a?n.createElement(f,l(l({ref:e},d),{},{components:a})):n.createElement(f,l({ref:e},d))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[c]="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},12958:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"HowTo install Zoomdata",tags:["Zoomdata"],date:new Date("2017-03-06T09:44:47.000Z")},l=void 0,i={permalink:"/2017/03/06/HowTo-install-Zoomdata",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2017-03-06-HowTo-install-Zoomdata.md",source:"@site/blog/2017-03-06-HowTo-install-Zoomdata.md",title:"HowTo install Zoomdata",description:"Zoomdata \u662f\u4e00\u4e2a\u5927\u6570\u636e\u53ef\u89c6\u5316\u5c55\u793a\u7684\u5de5\u5177\uff0c\u7531 ZoomData \u4f01\u4e1a\u521b\u5efa\uff0c\u662f\u4e3a\u6570\u4e0d\u591a\u7684\u540c\u65f6\u652f\u6301\u79fb\u52a8\u7aef\u7684\u6570\u636e\u5206\u6790\u516c\u53f8\uff0cZoomdata \u7684\u53ef\u89c6\u5316\u53ef\u5c06\u5927\u6570\u636e\u6d41\u8f6c\u5316\u4e3a\u89e6\u5c4f\u53cb\u597d\u7684\uff0c\u827a\u672f\u611f\u5341\u8db3\u7684\u4e09\u7ef4\u5f62\u6001\uff0cZoomdata \u7684\u5b9a\u4f4d\u662f\u975e ETL(\u4f20\u7edf\u7684\u63d0\u53d6\u3001\u8f6c\u6362\u548c\u52a0\u8f7d\u7684\u6570\u636e\u5904\u7406\u8fc7\u7a0b) \u5de5\u5177\uff0cZoomdata \u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\uff0c\u5305\u62ec\u793e\u4ea4\u5a92\u4f53\u7b49\uff0c\u5176\u4e2d\u5e94\u7528\u6700\u4e3b\u6d41\u662f\u5927\u6570\u636e\u5e73\u53f0\u7684\u5c55\u793a\u5de5\u5177\uff0c\u5e76\u4e14 Zoomdata \u5bf9 Cloudera Impala \u505a\u4e86\u5f88\u597d\u7684\u652f\u6301\uff0c\u6240\u4ee5\u6211\u4eec\u505a\u4e86 Zoomdata+Cloudera \u6280\u672f\u5b9e\u65bd\u3002",date:"2017-03-06T09:44:47.000Z",formattedDate:"2017\u5e743\u67086\u65e5",tags:[{label:"Zoomdata",permalink:"/tags/zoomdata"}],readingTime:.7366666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo install Zoomdata",tags:["Zoomdata"],date:"2017-03-06T09:44:47.000Z"},prevItem:{title:"\u5728 Linux \u7ec8\u7aef\u4f7f\u7528 SSR \u670d\u52a1\u5b9e\u73b0\u79d1\u5b66\u4e0a\u7f51",permalink:"/2017/03/23/\u5728Linux\u7ec8\u7aef\u4f7f\u7528SSR\u670d\u52a1\u5b9e\u73b0\u79d1\u5b66\u4e0a\u7f51"},nextItem:{title:"\u56db\u9636\u9b54\u65b9\u7279\u6b8a\u60c5\u51b5\u4e4b\u5904\u7406",permalink:"/2017/03/04/\u56db\u9636\u9b54\u65b9\u7279\u6b8a\u60c5\u51b5\u4e4b\u5904\u7406"}},m={authorsImageUrls:[]},p=[{value:"<strong>\u7cfb\u7edf\u8981\u6c42</strong>",id:"\u7cfb\u7edf\u8981\u6c42",level:4}],d={toc:p},c="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Zoomdata \u662f\u4e00\u4e2a\u5927\u6570\u636e\u53ef\u89c6\u5316\u5c55\u793a\u7684\u5de5\u5177\uff0c\u7531 ZoomData \u4f01\u4e1a\u521b\u5efa\uff0c\u662f\u4e3a\u6570\u4e0d\u591a\u7684\u540c\u65f6\u652f\u6301\u79fb\u52a8\u7aef\u7684\u6570\u636e\u5206\u6790\u516c\u53f8\uff0cZoomdata \u7684\u53ef\u89c6\u5316\u53ef\u5c06\u5927\u6570\u636e\u6d41\u8f6c\u5316\u4e3a\u89e6\u5c4f\u53cb\u597d\u7684\uff0c\u827a\u672f\u611f\u5341\u8db3\u7684\u4e09\u7ef4\u5f62\u6001\uff0cZoomdata \u7684\u5b9a\u4f4d\u662f\u975e ETL(\u4f20\u7edf\u7684\u63d0\u53d6\u3001\u8f6c\u6362\u548c\u52a0\u8f7d\u7684\u6570\u636e\u5904\u7406\u8fc7\u7a0b) \u5de5\u5177\uff0cZoomdata \u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\uff0c\u5305\u62ec\u793e\u4ea4\u5a92\u4f53\u7b49\uff0c\u5176\u4e2d\u5e94\u7528\u6700\u4e3b\u6d41\u662f\u5927\u6570\u636e\u5e73\u53f0\u7684\u5c55\u793a\u5de5\u5177\uff0c\u5e76\u4e14 Zoomdata \u5bf9 Cloudera Impala \u505a\u4e86\u5f88\u597d\u7684\u652f\u6301\uff0c\u6240\u4ee5\u6211\u4eec\u505a\u4e86 Zoomdata+Cloudera \u6280\u672f\u5b9e\u65bd\u3002",(0,r.kt)("sup",{parentName:"p",id:"fnref-1-31b082"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1-31b082",className:"footnote-ref"},"1"))),(0,r.kt)("h4",{id:"\u7cfb\u7edf\u8981\u6c42"},(0,r.kt)("strong",{parentName:"h4"},"\u7cfb\u7edf\u8981\u6c42")),(0,r.kt)("p",null,"Zoomdata \u6700\u65b0\u7248\u662f v2.4\uff0c\u652f\u6301\u5e38\u89c1\u4e3b\u6d41\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5e76\u4e14\u6709\u975e\u5e38\u53cb\u597d\u7684\u5b89\u88c5\u5e2e\u52a9\uff0c\u4f46\u662f Zoomdata \u4e0d\u652f\u6301\u5b89\u88c5\u5728 32 \u4f4d\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e4b\u4e0a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"biaoti"),(0,r.kt)("th",{parentName:"tr",align:null},"biaoti"),(0,r.kt)("th",{parentName:"tr",align:null},"baiiti"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"china")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"letian"),(0,r.kt)("td",{parentName:"tr",align:null},"zhong"),(0,r.kt)("td",{parentName:"tr",align:null},"hongkong")))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1-31b082"},"\u8fd9\u662f\u4e00\u4e2a\u793a\u610f\u7684\u6587\u6863",(0,r.kt)("a",{parentName:"li",href:"#fnref-1-31b082",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);