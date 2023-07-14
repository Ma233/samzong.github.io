"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[28677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(r),f=a,k=u["".concat(p,".").concat(f)]||u[f]||s[f]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20216:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={title:"JWT \u5185\u7f6e\u7684\u65b9\u5f0f",tags:["Contour"],url:"https://www.yuque.com/samzong/dao/gk0ll3"},l=void 0,i={permalink:"/2022/10/18/JWT \u5185\u7f6e\u7684\u65b9\u5f0f",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2022-10-18-JWT \u5185\u7f6e\u7684\u65b9\u5f0f.md",source:"@site/blog/2022-10-18-JWT \u5185\u7f6e\u7684\u65b9\u5f0f.md",title:"JWT \u5185\u7f6e\u7684\u65b9\u5f0f",description:"- \u652f\u6301\u4e3a API \u542f\u7528 jwt token \u89e3\u7801\u7684\u80fd\u529b ,  \u8bfb\u53d6\u7f51\u5173\u7684 jwt key",date:"2022-10-18T00:00:00.000Z",formattedDate:"2022\u5e7410\u670818\u65e5",tags:[{label:"Contour",permalink:"/tags/contour"}],readingTime:.57,hasTruncateMarker:!1,authors:[],frontMatter:{title:"JWT \u5185\u7f6e\u7684\u65b9\u5f0f",tags:["Contour"],url:"https://www.yuque.com/samzong/dao/gk0ll3"},prevItem:{title:"Redash for Docker \u90e8\u7f72",permalink:"/2022/10/22/Redash for Docker \u90e8\u7f72"},nextItem:{title:"\u5527\u5527\u590d\u5527\u5527",permalink:"/2022/10/06/\u5527\u5527\u590d\u5527\u5527"}},p={authorsImageUrls:[]},m=[{value:"\u8fed\u4ee3\u7684\u65b9\u5411",id:"\u8fed\u4ee3\u7684\u65b9\u5411",level:3}],c={toc:m},u="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e3a API \u542f\u7528 jwt token \u89e3\u7801\u7684\u80fd\u529b ,  \u8bfb\u53d6\u7f51\u5173\u7684 jwt key",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u8bf7\u6c42 Header \u4e2d\u7684 Authorization"))),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u652f\u6301\u4e3a\u7f51\u5173\u914d\u7f6e\u591a jwt key , and \u52a0\u5bc6\u957f\u5ea6 ?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u89e3\u5bc6\u7684\u6027\u80fd\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"expire","_","time \u8fc7\u671f\u65f6\u95f4\u7684\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u89e3\u5bc6\u540e\u7684\u53c2\u6570\u4f20\u9012")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1666060887030-ff0a6f09-9bf0-44d5-a92b-dc36fc9b7d47.png?x-oss-process=image/resize,w_960,m_lfit",alt:"image.png"})),(0,a.kt)("h3",{id:"\u8fed\u4ee3\u7684\u65b9\u5411"},"\u8fed\u4ee3\u7684\u65b9\u5411"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u91c7\u7528\u5916\u7f6e\u7684 Jwt server \u8ba4\u8bc1\u670d\u52a1",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e jwt server url"),(0,a.kt)("li",{parentName:"ol"},"respone \u89e3\u5bc6\u540e\u7684  json \u5185\u5bb9\uff1b\u8fdb\u884c\u53c2\u6570\u4f20\u9012"))),(0,a.kt)("li",{parentName:"ol"},"\u91c7\u7528\u6258\u7ba1\u7684 Jwt server \u6765\u8fdb\u884c\u6258\u7ba1",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e jwt key (\u652f\u6301\u81ea\u52a8\u751f\u6210)"),(0,a.kt)("li",{parentName:"ol"},"expire","_","time"),(0,a.kt)("li",{parentName:"ol"},"\u52a0\u5bc6\u957f\u5ea6"),(0,a.kt)("li",{parentName:"ol"},"\u81ea\u52a8\u914d\u7f6e\u53c2\u6570\u4f20\u9012",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5168\u90e8\u4f20\u9012"),(0,a.kt)("li",{parentName:"ol"},"\u5168\u90e8\u4f20\u9012 (not token)"),(0,a.kt)("li",{parentName:"ol"},"\u767d\u540d\u5355\u4f20\u9012")))))))}s.isMDXComponent=!0}}]);