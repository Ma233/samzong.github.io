"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[78821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),g=o,f=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},15583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u9700\u8981\u4e86\u89e3\u7684 K8s \u53d1\u884c\u7248\u672c",toc:!0,authors:["samzong"],tags:[],date:new Date("2022-04-19T18:11:00.000Z")},i=void 0,c={permalink:"/2022/04/19/xu-yao-liao-jie-de-jing-pin",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2022-04-19-xu-yao-liao-jie-de-jing-pin.md",source:"@site/blog/2022-04-19-xu-yao-liao-jie-de-jing-pin.md",title:"\u9700\u8981\u4e86\u89e3\u7684 K8s \u53d1\u884c\u7248\u672c",description:"K8s \u7684\u53d1\u884c\u7248\u672c",date:"2022-04-19T18:11:00.000Z",formattedDate:"2022\u5e744\u670819\u65e5",tags:[],readingTime:.09,hasTruncateMarker:!1,authors:[{name:"Samzong Lu",title:"Product Designer",url:"https://github.com/SAMZONG",email:"samzong.lu@gmail.com",imageURL:"https://github.com/SAMZONG.png",key:"samzong"}],frontMatter:{title:"\u9700\u8981\u4e86\u89e3\u7684 K8s \u53d1\u884c\u7248\u672c",toc:!0,authors:["samzong"],tags:[],date:"2022-04-19T18:11:00.000Z"},prevItem:{title:"Kubernetes \u90e8\u7f72\u9519\u8bef\u89e3\u51b3\u6c47\u603b",permalink:"/2022/04/21/kubernetes-bu-shu-cuo-wu-jie-jue-hui-zong"},nextItem:{title:"CKA \u8003\u8bd5\u51c6\u5907",permalink:"/2022/04/18/cka-kao-shi-zhun-bei"}},l={authorsImageUrls:[void 0]},u=[{value:"K8s \u7684\u53d1\u884c\u7248\u672c",id:"k8s-\u7684\u53d1\u884c\u7248\u672c",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"k8s-\u7684\u53d1\u884c\u7248\u672c"},"K8s \u7684\u53d1\u884c\u7248\u672c"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/6ngC8v.png",alt:"6ngC8v"})),(0,o.kt)("p",null,"\u5f00\u59cb\u5b66\u4e60\u559c\u6b22\u7684\u4e1c\u897f\uff0c\u4e0a\u9762\u7684\u6bcf\u4e00\u4e2a\u90fd\u8981\u4e86\u89e3"))}m.isMDXComponent=!0}}]);