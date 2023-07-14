"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[81427],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),y=o,f=u["".concat(l,".").concat(y)]||u[y]||m[y]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},74883:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"python3 \u6587\u672c\u5904\u7406 strip() split()",tags:[]},i=void 0,p={permalink:"/2022/01/21/python3-wen-ben-chu-li-strip-split",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2022-01-21-python3-wen-ben-chu-li-strip-split.md",source:"@site/blog/2022-01-21-python3-wen-ben-chu-li-strip-split.md",title:"python3 \u6587\u672c\u5904\u7406 strip() split()",description:"- strip() \u5220\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u5185\u5bb9\uff0c\u5220\u9664\u540e\u4ecd\u65e7\u662f str",date:"2022-01-21T00:00:00.000Z",formattedDate:"2022\u5e741\u670821\u65e5",tags:[],readingTime:.29333333333333333,hasTruncateMarker:!1,authors:[],frontMatter:{title:"python3 \u6587\u672c\u5904\u7406 strip() split()",tags:[]},prevItem:{title:"\u4e00\u4e2a Python \u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u8bbe\u8ba1",permalink:"/2022/02/11/yi-ge-python-xiang-mu-di-mu-lu-jie-gou-she-ji"},nextItem:{title:"ClickHouse \u5e38\u7528\u51fd\u6570\u4f7f\u7528",permalink:"/2022/01/20/clickhouse-chang-yong-han-shu-shi-yong"}},l={authorsImageUrls:[]},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"strip() \u5220\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u5185\u5bb9\uff0c\u5220\u9664\u540e\u4ecd\u65e7\u662f str"),(0,o.kt)("li",{parentName:"ul"},"split() \u5206\u5272\u5b57\u7b26\u4e32\uff0c\u6839\u636e\u7279\u5b9a\u7684\u6807\u8bc6\uff0c\u5206\u5272\u540e=list")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e24\u8005\u5904\u7406\u8fc7\u7a0b\u4e2d\u90fd\u4e0d\u4f1a\u4fee\u6539\u539f\u5b57\u7b26\u4e32\u7684\u5185\u5bb9")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'python3\n\nstr.strip(",") # \u5220\u9664\u5b57\u7b26\u4e32\u672b\u5c3e\u7684","\nstr.rstrip(",") # \u5220\u9664\u5b57\u7b26\u4e32\u672b\u5c3e\u7684","\nstr.lstrip(",") # \u5220\u9664\u5b57\u7b26\u4e32\u5f00\u901a\u7684","\n')))}m.isMDXComponent=!0}}]);