"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[1655],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),i=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return o.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=i(r),d=n,g=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return r?o.createElement(g,l(l({ref:t},p),{},{components:r})):o.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=r(87462),n=(r(67294),r(3905));const a={title:"Docker Hub \u56fd\u5185\u52a0\u901f",tags:["DockerHub"],date:new Date("2017-01-07T15:32:23.000Z")},l=void 0,c={permalink:"/2017/01/07/docker-hub-guo-nei-jia-su",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2017-01-07-docker-hub-guo-nei-jia-su.md",source:"@site/blog/2017-01-07-docker-hub-guo-nei-jia-su.md",title:"Docker Hub \u56fd\u5185\u52a0\u901f",description:"\u56e0\u4e3a Docker Hub \u6ca1\u6709\u5728\u56fd\u5185\u90e8\u7f72\u7ad9\u70b9\u6216\u8005\u589e\u52a0\u4e86\u56fd\u5185\u7684 CDN\uff0c\u8fd9\u5bfc\u81f4\u56fd\u5185\u7684\u5f00\u53d1\u8005\u5728\u4f7f\u7528 docker pull \u83b7\u53d6 images \u7684\u65f6\u5019\u901f\u5ea6\u975e\u5e38\u7684\u6162\uff0c\u751a\u81f3\u4e8e\u56e0\u4e3a\u7f51\u7edc\u7684\u539f\u56e0\u4f1a\u5931\u8d25\u3002",date:"2017-01-07T15:32:23.000Z",formattedDate:"2017\u5e741\u67087\u65e5",tags:[{label:"DockerHub",permalink:"/tags/docker-hub"}],readingTime:.67,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Docker Hub \u56fd\u5185\u52a0\u901f",tags:["DockerHub"],date:"2017-01-07T15:32:23.000Z"},prevItem:{title:"\u751f\u6d3b\u5728\u522b\u5904",permalink:"/2017/01/10/sheng-huo-zai-bie-chu"},nextItem:{title:"HowTo Mount OSS Bucket On ECS",permalink:"/2016/12/20/HowTo-Mount-OSS-Bucket-On-ECS"}},u={authorsImageUrls:[]},i=[{value:"1. \u6ce8\u518c DaoCloud \u8d26\u53f7",id:"1-\u6ce8\u518c-daocloud-\u8d26\u53f7",level:4},{value:"2. \u767b\u5f55\u5230\u4f60\u7684 DaoCloud \u8d26\u53f7\u5185\uff0c\u7136\u540e\u5165\u4e0b\u56fe\u64cd\u4f5c",id:"2-\u767b\u5f55\u5230\u4f60\u7684-daocloud-\u8d26\u53f7\u5185\u7136\u540e\u5165\u4e0b\u56fe\u64cd\u4f5c",level:4},{value:"3. \u67e5\u770b\u4f60\u7684 DaoCloud \u52a0\u901f\u5668\u5730\u5740",id:"3-\u67e5\u770b\u4f60\u7684-daocloud-\u52a0\u901f\u5668\u5730\u5740",level:4}],p={toc:i},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u56e0\u4e3a Docker Hub \u6ca1\u6709\u5728\u56fd\u5185\u90e8\u7f72\u7ad9\u70b9\u6216\u8005\u589e\u52a0\u4e86\u56fd\u5185\u7684 CDN\uff0c\u8fd9\u5bfc\u81f4\u56fd\u5185\u7684\u5f00\u53d1\u8005\u5728\u4f7f\u7528 docker pull \u83b7\u53d6 images \u7684\u65f6\u5019\u901f\u5ea6\u975e\u5e38\u7684\u6162\uff0c\u751a\u81f3\u4e8e\u56e0\u4e3a\u7f51\u7edc\u7684\u539f\u56e0\u4f1a\u5931\u8d25\u3002"),(0,n.kt)("p",null,"\u4f46\u662f Docker Hub \u6709\u7740\u975e\u5e38\u4e30\u5bcc\u7684\u955c\u50cf\u8d44\u6e90\uff0c\u6240\u4ee5\u6211\u8fd9\u4e00\u76f4\u662f\u4e2a\u95ee\u9898\u56f0\u6270\u7740\u6211\uff0c\u4e00\u6b21\u5076\u7136\u673a\u4f1a\u53d1\u73b0\u4e86",(0,n.kt)("a",{parentName:"p",href:"https://www.daocloud.io"},"DaoCloud"),"\u63d0\u4f9b\u4e86\u56fd\u5185\u955c\u50cf\u52a0\u901f\u670d\u52a1\uff0c\u5e76\u4e14\u63d0\u4f9b\u7684 Docker Hub Mirror \u8be6\u7ec6\u7684\u6587\u6863\u3002"),(0,n.kt)("h4",{id:"1-\u6ce8\u518c-daocloud-\u8d26\u53f7"},"1. \u6ce8\u518c DaoCloud \u8d26\u53f7"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u5230\u4e00 DaoCloud \u8d26\u53f7\uff0c\u6ce8\u518c\u5f88\u65b9\u4fbf\uff0c\u70b9\u51fb\u5730\u5740\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://account.daocloud.io/signup"},"signup"),"\n",(0,n.kt)("img",{parentName:"p",src:"https://samzong.oss-cn-shenzhen.aliyuncs.com/blog/o6wh3.jpg",alt:"image"})),(0,n.kt)("h4",{id:"2-\u767b\u5f55\u5230\u4f60\u7684-daocloud-\u8d26\u53f7\u5185\u7136\u540e\u5165\u4e0b\u56fe\u64cd\u4f5c"},"2. \u767b\u5f55\u5230\u4f60\u7684 DaoCloud \u8d26\u53f7\u5185\uff0c\u7136\u540e\u5165\u4e0b\u56fe\u64cd\u4f5c"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://samzong.oss-cn-shenzhen.aliyuncs.com/blog/n9mt7.jpg",alt:"image"})),(0,n.kt)("h4",{id:"3-\u67e5\u770b\u4f60\u7684-daocloud-\u52a0\u901f\u5668\u5730\u5740"},"3. \u67e5\u770b\u4f60\u7684 DaoCloud \u52a0\u901f\u5668\u5730\u5740"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.daocloud.io/mirror#accelerator-doc"},"\u94fe\u63a5")),(0,n.kt)("p",null,"\u9009\u62e9\u4f60\u76f8\u5bf9\u5e94\u5e73\u53f0\u7684\u7684\u52a0\u901f\u5668\u8bbe\u7f6e\n",(0,n.kt)("img",{parentName:"p",src:"https://samzong.oss-cn-shenzhen.aliyuncs.com/blog/4wuea.jpg",alt:"image"})))}m.isMDXComponent=!0}}]);