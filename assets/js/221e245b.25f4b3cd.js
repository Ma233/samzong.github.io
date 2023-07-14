"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[6077],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>v});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=o.createContext({}),p=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return o.createElement(u.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},k=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=p(n),k=r,v=s["".concat(u,".").concat(k)]||s[k]||m[k]||a;return n?o.createElement(v,i(i({ref:e},c),{},{components:n})):o.createElement(v,i({ref:e},c))}));function v(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=k;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[s]="string"==typeof t?t:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},17511:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Contour \u5b66\u4e60\u7b14\u8bb0",tags:["Microservice"]},i=void 0,l={permalink:"/2022/08/10/contour-xue-xi-bi-ji",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2022-08-10-contour-xue-xi-bi-ji.md",source:"@site/blog/2022-08-10-contour-xue-xi-bi-ji.md",title:"Contour \u5b66\u4e60\u7b14\u8bb0",description:"Contour \u5b98\u65b9\u7684\u8d44\u6599",date:"2022-08-10T00:00:00.000Z",formattedDate:"2022\u5e748\u670810\u65e5",tags:[{label:"Microservice",permalink:"/tags/microservice"}],readingTime:2.07,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Contour \u5b66\u4e60\u7b14\u8bb0",tags:["Microservice"]},prevItem:{title:"\u74e6\u5c14\u767b\u6e56",permalink:"/2022/08/15/wa-er-deng-hu"},nextItem:{title:"\u901a\u8fc7 pipreqs \u83b7\u53d6\u5f53\u524d\u9879\u76ee\u7684\u4f9d\u8d56\u5e93",permalink:"/2022/07/24/tong-guo-pipreqs-huo-qu-dang-qian-xiang-mu-di-yi-lai-ku"}},u={authorsImageUrls:[]},p=[{value:"Contour \u5b98\u65b9\u7684\u8d44\u6599",id:"contour-\u5b98\u65b9\u7684\u8d44\u6599",level:2},{value:"\u53c2\u8003\u6587\u6863\u4e00\uff1a\u4f7f\u7528 Contour \u63a5\u7ba1 K8s \u5357\u5317\u6d41\u91cf",id:"\u53c2\u8003\u6587\u6863\u4e00\u4f7f\u7528-contour-\u63a5\u7ba1-k8s-\u5357\u5317\u6d41\u91cf",level:2},{value:"Contour \u7684\u7ec4\u6210",id:"contour-\u7684\u7ec4\u6210",level:3},{value:"Contour \u7684\u90e8\u7f72\u65b9\u5f0f",id:"contour-\u7684\u90e8\u7f72\u65b9\u5f0f",level:3},{value:"\u53c2\u8003\u6587\u6863 \u4e8c\uff1aContour \u4e2d Envoy \u4f18\u96c5\u505c\u670d\u7684\u5b9e\u73b0\u4e0e\u6e90\u7801\u5206\u6790",id:"\u53c2\u8003\u6587\u6863-\u4e8ccontour-\u4e2d-envoy-\u4f18\u96c5\u505c\u670d\u7684\u5b9e\u73b0\u4e0e\u6e90\u7801\u5206\u6790",level:2}],c={toc:p},s="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"contour-\u5b98\u65b9\u7684\u8d44\u6599"},"Contour \u5b98\u65b9\u7684\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hackmd.io/84Xbl4WBTpm7OBhaOAsSiw"},"https://hackmd.io/84Xbl4WBTpm7OBhaOAsSiw"),"  Contour Community Meeting Notes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=fpRzvQWiHjI&list=PLk2K7YhXu5KtYU1UGEYNC8ApH5gsWihDJ"},"https://www.youtube.com/watch?v=fpRzvQWiHjI&list=PLk2K7YhXu5KtYU1UGEYNC8ApH5gsWihDJ"),"  \u53cc\u5468\u4f8b\u4f1a"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.slack.com/archives/C8XRH2R4J"},"https://kubernetes.slack.com/archives/C8XRH2R4J"),"  Slack Chat Channel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bitnami.com/stack/contour/helm"},"https://bitnami.com/stack/contour/helm"),"  Helm \u90e8\u7f72 Contour \u8d44\u6599"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7029286464802258974"},"https://juejin.cn/post/7029286464802258974"),"  Envoy Ingress\uff1aContour \u57fa\u672c\u539f\u7406\u548c\u6e90\u7801\u5206\u6790",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/user/3878732754069272"},"https://juejin.cn/user/3878732754069272")," \u6398\u91d1\u5927\u4f6c")))),(0,r.kt)("h2",{id:"\u53c2\u8003\u6587\u6863\u4e00\u4f7f\u7528-contour-\u63a5\u7ba1-k8s-\u5357\u5317\u6d41\u91cf"},"\u53c2\u8003\u6587\u6863\u4e00\uff1a\u4f7f\u7528 Contour \u63a5\u7ba1 K8s \u5357\u5317\u6d41\u91cf"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1652658255610-3a38d8d3-2062-486b-a0b9-3b0a1d47dc5c.png?x-oss-process=image/resize,w_960,m_lfit",alt:"image.png"}),"\n\u5bb9\u5668\u516c\u53f8 ",(0,r.kt)("a",{parentName:"p",href:"https://heptio.com/"},"Heptio")," \u5f00\u6e90\u7684\u9879\u76ee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/heptio/contour"},"Contour")," \u4f7f\u7528 Envoy \u4f5c\u4e3a Kubernetes \u7684 Ingress Controller \u5b9e\u73b0\u3002"),(0,r.kt)("h3",{id:"contour-\u7684\u7ec4\u6210"},"Contour \u7684\u7ec4\u6210"),(0,r.kt)("p",null,"Contour Ingress controller \u7531\u4e24\u4e2a\u7ec4\u4ef6\u7ec4\u6210\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Envoy : \u63d0\u4f9b\u9ad8\u6027\u80fd\u53cd\u5411\u4ee3\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},"Contour : \u5145\u5f53 Envoy \u7684\u63a7\u5236\u5e73\u9762\uff0c\u4e3a Envoy \u7684\u8def\u7531\u914d\u7f6e\u63d0\u4f9b\u7edf\u4e00\u7684\u6765\u6e90\u3002")),(0,r.kt)("h3",{id:"contour-\u7684\u90e8\u7f72\u65b9\u5f0f"},"Contour \u7684\u90e8\u7f72\u65b9\u5f0f"),(0,r.kt)("p",null,"\u5b98\u65b9\u6587\u6863\u63d0\u4f9b\u4e86\u4e09\u79cd\u90e8\u7f72\u65b9\u6cd5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 DaemonSet \u6765\u90e8\u7f72\uff0c\u6bcf\u4e2a\u8282\u70b9\u4e0a\u8dd1\u4e00\u4e2a Contour \u5b9e\u4f8b\uff08Contour \u4e0e Envoy \u5728\u540c\u4e00\u4e2a Pod \u4e2d\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 Deployment \u6765\u90e8\u7f72\uff0c\u603b\u5171\u8dd1\u4e24\u4e2a Contour \u5b9e\u4f8b\uff08Contour \u4e0e Envoy \u5728\u540c\u4e00\u4e2a Pod \u4e2d\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 Deployment \u6765\u90e8\u7f72 Contour\uff0c\u603b\u5171\u8dd1\u4e24\u4e2a Contour \u5b9e\u4f8b\uff1b\u901a\u8fc7 DaemonSet \u6765\u90e8\u7f72 Envoy\uff0c\u6bcf\u4e2a\u8282\u70b9\u4e0a\u8dd1\u4e00\u4e2a Envoy \u5b9e\u4f8b\u3002")),(0,r.kt)("p",null,"\u7b2c\u4e09\u79cd\u65b9\u6848\u6bd4\u8f83\u5de7\u5999\uff0c\u8fd9\u6837\u53ef\u4ee5\u8ba9 Contour \u548c Envoy \u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u89e3\u8026\uff0c\u53ef\u4ee5\u5206\u522b\u6309\u9700\u5bf9\u4e0d\u540c\u7684\u7ec4\u4ef6\u8fdb\u884c\u6269\u5c55\uff0c\u5177\u4f53\u7684\u4f18\u52bf\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Envoy \u4ee5 Daemonset \u7684\u5f62\u5f0f\u8fd0\u884c\uff0c\u5177\u6709\u5f88\u5f3a\u7684\u6269\u5c55\u6027\uff0c\u540e\u7eed\u53ef\u901a\u8fc7 ipvs \u548c keepalived \u7b49\u5de5\u5177\u6765\u5b9e\u73b0\u5176\u8d1f\u8f7d\u5747\u8861\u548c\u9ad8\u53ef\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"Envoy \u8fd0\u884c\u7684\u7f51\u7edc\u6a21\u5f0f\u662f hostNetwork\uff0c\u51cf\u5c11\u4e86\u989d\u5916\u7684\u7f51\u7edc\u6027\u80fd\u635f\u8017\u3002"),(0,r.kt)("li",{parentName:"ul"},"Contour \u4e0e Envoy \u4e4b\u95f4\u901a\u8fc7\u53cc\u5411\u8ba4\u8bc1\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\u8fdb\u884c\u901a\u4fe1\uff0c\u5927\u5927\u589e\u5f3a\u4e86\u5b89\u5168\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5347\u7ea7 Contour \u4e0d\u9700\u8981\u91cd\u542f Envoy\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1652658571911-263003fa-2d88-47d9-9650-7929589a49c8.png?x-oss-process=image/resize,w_960,m_lfit",alt:"image.png"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u542f\u52a8\u5206\u6790")),(0,r.kt)("p",null,"\u5728 Envoy \u7684 Pod \u521d\u59cb\u5316\u671f\u95f4\uff0cContour \u4f5c\u4e3a Init \u5bb9\u5668\u8fd0\u884c\uff0c\u5e76\u5c06 bootstrap\uff08\u521d\u59cb\u5316\uff09\u914d\u7f6e\u5199\u5165\u4e00\u4e2a temporary volume\u3002\u8be5 Volume \u88ab\u4f20\u9012\u7ed9 Envoy \u5bb9\u5668\u5e76\u544a\u8bc9 Envoy \u5c06\u53e6\u4e00\u4e2a Deployment \u4e2d\u7684 Contour \u5bb9\u5668\u89c6\u4e3a\u63a7\u5236\u5e73\u9762\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1652659925765-50a45ceb-22f8-44a9-8c48-34fa832cda3e.jpeg?x-oss-process=image/resize,w_960,m_lfit",alt:"image"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contour \u4f1a\u6839\u636e\u542f\u52a8\u53c2\u6570\u548c K8S API Server \u4e2d\u7684\u914d\u7f6e\u4fe1\u606f\u751f\u6210 Envoy \u7684\u521d\u59cb\u914d\u7f6e\u6587\u4ef6")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Envoy initContainer \u6839\u636e\u542f\u52a8\u53c2\u6570\u548c K8S API Server \u4e2d\u7684\u914d\u7f6e\u4fe1\u606f\u751f\u6210 Envoy \u7684\u521d\u59cb\u914d\u7f6e\u6587\u4ef6 envoy.json\uff0c\u8be5\u6587\u4ef6\u544a\u8bc9 Envoy \u4ece xDS server \u4e2d\u83b7\u53d6\u52a8\u6001\u914d\u7f6e\u4fe1\u606f\uff0c\u5e76\u914d\u7f6e\u4e86 xDS server \u7684\u5730\u5740\u4fe1\u606f\uff0c\u5373\u63a7\u5236\u5e73\u9762\u7684 Contour\u3002"),(0,r.kt)("li",{parentName:"ol"},"Envoy \u4f7f\u7528\u914d\u7f6e\u6587\u4ef6 envoy.json \u542f\u52a8\u3002"),(0,r.kt)("li",{parentName:"ol"},"Envoy \u6839\u636e\u83b7\u53d6\u5230\u7684\u52a8\u6001\u914d\u7f6e\u542f\u52a8 Listener\uff0c\u5e76\u6839\u636e Listener \u7684\u914d\u7f6e\uff0c\u7ed3\u5408 Route \u548c Cluster \u5bf9\u8fdb\u5165\u7684\u6d41\u91cf\u8fdb\u884c\u5904\u7406\u3002")),(0,r.kt)("p",null,"Contour \u4f5c\u4e3a Envoy \u7684 initContainer"),(0,r.kt)("h2",{id:"\u53c2\u8003\u6587\u6863-\u4e8ccontour-\u4e2d-envoy-\u4f18\u96c5\u505c\u670d\u7684\u5b9e\u73b0\u4e0e\u6e90\u7801\u5206\u6790"},"\u53c2\u8003\u6587\u6863 \u4e8c\uff1aContour \u4e2d Envoy \u4f18\u96c5\u505c\u670d\u7684\u5b9e\u73b0\u4e0e\u6e90\u7801\u5206\u6790"))}m.isMDXComponent=!0}}]);