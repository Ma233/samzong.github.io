"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[36897],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,y=u["".concat(p,".").concat(f)]||u[f]||s[f]||o;return r?n.createElement(y,i(i({ref:t},m),{},{components:r})):n.createElement(y,i({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},48802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"get current timestamp",tags:["Python"]},i=void 0,l={permalink:"/2022/01/03/get-current-timestamp",source:"@site/blog/2022-01-03-get-current-timestamp.md",title:"get current timestamp",description:"",date:"2022-01-03T00:00:00.000Z",formattedDate:"January 3, 2022",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:.11,hasTruncateMarker:!1,authors:[],frontMatter:{title:"get current timestamp",tags:["Python"]},prevItem:{title:"python flask form",permalink:"/2022/01/03/python-flask-form"},nextItem:{title:"Apollo \u5982\u4f55\u5b9e\u73b0\u914d\u7f6e\u70ed\u53d1\u5e03",permalink:"/2022/01/03/apollo-ru-he-shi-xian-pei-zhi-re-fa-bu"}},p={authorsImageUrls:[]},c=[],m={toc:c},u="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import time\nmillis = int(round(time.time() * 1000))\nprint millis\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import time\n\ncurrent_milli_time = lambda: int(round(time.time() * 1000))\n\ncurrent_milli_time()\n")))}s.isMDXComponent=!0}}]);