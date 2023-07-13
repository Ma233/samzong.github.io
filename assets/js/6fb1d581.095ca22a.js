"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[46047],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=i(r),f=a,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={title:"SQL \u5bf9\u65f6\u95f4\u6574\u70b9\u7684\u5904\u7406",toc:!0,author:"samzong.lu",author_id:"defaultAuthorId",language:"en",tags:["ClickHouse"],categories:["\u6570\u636e\u5e93"],date:new Date("2022-04-15T18:55:00.000Z")},l=void 0,c={permalink:"/2022/04/15/SQL-\u5bf9\u65f6\u95f4\u6574\u70b9\u7684\u5904\u7406",source:"@site/blog/2022-04-15-SQL-\u5bf9\u65f6\u95f4\u6574\u70b9\u7684\u5904\u7406.md",title:"SQL \u5bf9\u65f6\u95f4\u6574\u70b9\u7684\u5904\u7406",description:"\u9700\u8981\u53d6\u503c\u6574\u70b9\u65f6\u95f4",date:"2022-04-15T18:55:00.000Z",formattedDate:"2022\u5e744\u670815\u65e5",tags:[{label:"ClickHouse",permalink:"/tags/click-house"}],readingTime:.19666666666666666,hasTruncateMarker:!1,authors:[{name:"samzong.lu"}],frontMatter:{title:"SQL \u5bf9\u65f6\u95f4\u6574\u70b9\u7684\u5904\u7406",toc:!0,author:"samzong.lu",author_id:"defaultAuthorId",language:"en",tags:["ClickHouse"],categories:["\u6570\u636e\u5e93"],date:"2022-04-15T18:55:00.000Z"},prevItem:{title:"Metabase \u4e0a\u624b - \u4f7f\u7528 Jar \u8fd0\u884c",permalink:"/2022/04/16/Metabase-\u4e0a\u624b-\u4f7f\u7528Jar"},nextItem:{title:"\u6dd8\u5b9d Python SDK \u4f18\u5316\u652f\u6301 Python3",permalink:"/2022/04/14/\u6dd8\u5b9dPython-SDK\u4f18\u5316\u652f\u6301Python3"}},u={authorsImageUrls:[void 0]},i=[{value:"\u9700\u8981\u53d6\u503c\u6574\u70b9\u65f6\u95f4",id:"\u9700\u8981\u53d6\u503c\u6574\u70b9\u65f6\u95f4",level:2}],p={toc:i},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9700\u8981\u53d6\u503c\u6574\u70b9\u65f6\u95f4"},"\u9700\u8981\u53d6\u503c\u6574\u70b9\u65f6\u95f4"),(0,a.kt)("p",null,"\u9879\u76ee\u4e0a\u9700\u8981\u53d6\u503c\u4e0a\u4e00\u4e2a\u6574\u70b9\u7684\u6570\u636e\u67e5\u8be2\u5904\u7406\uff0c\u843d\u8868\uff0c\u7136\u540e\u5b9e\u73b0\u6309\u5c0f\u65f6\u66f4\u65b0"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ClickHouse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"subtractHours(date_trunc('hour',now()),1)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"MySQL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"and auth_time >= DATE_SUB(DATE_FORMAT(now(),'%Y-%m-%d %H:00:00'),interval 1 hour)\nand auth_time < DATE_FORMAT(now(),'%Y-%m-%d %H:00:00')\n")))}m.isMDXComponent=!0}}]);