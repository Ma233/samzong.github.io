"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[59647],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=p(r),d=o,k=s["".concat(i,".").concat(d)]||s[d]||m[d]||u;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,l=new Array(u);l[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[s]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<u;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>u,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const u={title:"Contour \u8bbe\u8ba1\u7406\u5ff5",tags:["Contour"],categories:"Kubernetes",url:"https://www.yuque.com/samzong/dao/dqvk7v"},l=void 0,a={permalink:"/2022/05/11/Contour \u8bbe\u8ba1\u7406\u5ff5",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2022-05-11-Contour \u8bbe\u8ba1\u7406\u5ff5.md",source:"@site/blog/2022-05-11-Contour \u8bbe\u8ba1\u7406\u5ff5.md",title:"Contour \u8bbe\u8ba1\u7406\u5ff5",description:"Contour \u662f\u4e00\u4e2a\u7b2c 7 \u5c42 HTTP \u4e2d\u95f4\u4ef6\u53cd\u5411\u4ee3\u7406\uff0c\u7528\u4e8e\u542f\u7528 Kubernetes \u96c6\u7fa4\u7684\u5165\u53e3\u3002",date:"2022-05-11T00:00:00.000Z",formattedDate:"2022\u5e745\u670811\u65e5",tags:[{label:"Contour",permalink:"/tags/contour"}],readingTime:4.183333333333334,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Contour \u8bbe\u8ba1\u7406\u5ff5",tags:["Contour"],categories:"Kubernetes",url:"https://www.yuque.com/samzong/dao/dqvk7v"},prevItem:{title:"Kubernetes Operator",permalink:"/2022/05/17/Kubernetes Operator"},nextItem:{title:"MacOS \u9690\u85cf Dock \u680f\u4e2d\u7279\u5b9a\u5e94\u7528",permalink:"/2022/05/07/MacOS\u9690\u85cfDock\u680f\u4e2d\u7279\u5b9a\u5e94\u7528"}},i={authorsImageUrls:[]},p=[{value:"\u6ca1\u6709\u76ee\u6807",id:"\u6ca1\u6709\u76ee\u6807",level:2},{value:"\u6700\u7ec8\u7528\u6237",id:"\u6700\u7ec8\u7528\u6237",level:2},{value:"\u96c6\u7fa4\u7ba1\u7406\u5458",id:"\u96c6\u7fa4\u7ba1\u7406\u5458",level:3},{value:"\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458",id:"\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458",level:3},{value:"\u610f\u89c1/\u8bc4\u4ef7",id:"\u610f\u89c1\u8bc4\u4ef7",level:2},{value:"\u5408\u7406\u7684\u9ed8\u8ba4\u503c",id:"\u5408\u7406\u7684\u9ed8\u8ba4\u503c",level:3},{value:"\u660e\u786e\u7684\u529f\u80fd\u8303\u56f4\u5b9a\u4e49",id:"\u660e\u786e\u7684\u529f\u80fd\u8303\u56f4\u5b9a\u4e49",level:2},{value:"\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u6216\u96c6\u7fa4\u7ba1\u7406\u5458\u53ef\u4ee5\u652f\u6301\u6bcf\u4e2a\u529f\u80fd",id:"\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u6216\u96c6\u7fa4\u7ba1\u7406\u5458\u53ef\u4ee5\u652f\u6301\u6bcf\u4e2a\u529f\u80fd",level:3},{value:"\u6211\u4eec\u5728\u7528\u6237\u6240\u5728\u7684\u5730\u65b9\u4e0e\u4ed6\u4eec\u4f1a\u9762",id:"\u6211\u4eec\u5728\u7528\u6237\u6240\u5728\u7684\u5730\u65b9\u4e0e\u4ed6\u4eec\u4f1a\u9762",level:3}],c={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Contour \u662f\u4e00\u4e2a\u7b2c 7 \u5c42 ",(0,o.kt)("strong",{parentName:"p"},"HTTP")," \u4e2d\u95f4\u4ef6\u53cd\u5411\u4ee3\u7406\uff0c\u7528\u4e8e\u542f\u7528 Kubernetes \u96c6\u7fa4\u7684\u5165\u53e3\u3002"),(0,o.kt)("h2",{id:"\u6ca1\u6709\u76ee\u6807"},"\u6ca1\u6709\u76ee\u6807"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contour \u4e0d\u662f\u670d\u52a1\u7f51\u683c"),(0,o.kt)("li",{parentName:"ul"},"Contour \u4e5f\u65e0\u610f\u516c\u5f00 Envoy \u7684\u6240\u6709\u529f\u80fd\u6216\u914d\u7f6e\u9009\u9879"),(0,o.kt)("li",{parentName:"ul"},"Contour \u4e0d\u9002\u7528\u4e8e\u4ee3\u7406\u7b2c 4 \u5c42\u534f\u8bae\uff0c\u4f8b\u5982 TCP \u6216 UDP\uff0c\u9664\u975e\u5b83\u4eec\u9700\u8981\u4f20\u9012 HTTP\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u56e0\u6b64\uff0cTCP \u4ee3\u7406\u662f\u53ef\u7528\u7684\uff0c\u4f46\u5e0c\u671b\u4ee3\u7406\u7528\u4e8e\u901a\u8fc7 HTTPS\u3002\u5c06\u6765\u53ef\u80fd\u4f1a\u6dfb\u52a0\u4e00\u4e9b UDP \u652f\u6301\uff0c\u4ee5\u4fbf\u6211\u4eec\u53ef\u4ee5\u652f\u6301\u4f7f\u7528 UDP \u4f5c\u4e3a\u4f20\u8f93\u7684 QUIC\u3002\u4f7f\u7528 Contour \u4ee3\u7406\u539f\u59cb TCP \u6216 UDP \u6d41\u91cf\u53ef\u80fd\u6709\u6548\uff0c\u4f46\u4e0d\u662f\u9884\u671f\u7528\u9014")),(0,o.kt)("h2",{id:"\u6700\u7ec8\u7528\u6237"},"\u6700\u7ec8\u7528\u6237"),(0,o.kt)("h3",{id:"\u96c6\u7fa4\u7ba1\u7406\u5458"},"\u96c6\u7fa4\u7ba1\u7406\u5458"),(0,o.kt)("p",null,"\u96c6\u7fa4\u7ba1\u7406\u5458\u8d1f\u8d23 Kubernetes \u96c6\u7fa4\u7684\u8fd0\u884c\u72b6\u51b5\u548c\u8fd0\u884c\u3002\u4ed6\u4eec\u8d1f\u8d23\u4e0e\u5916\u90e8\u4e16\u754c\u7684\u8fde\u63a5\u3001TLS \u79d8\u5bc6\u7ba1\u7406\u548c DNS \u7b49\u3002\u4ed6\u4eec\u8d1f\u8d23\u5b89\u88c5 Contour \u548c Envoy\u3001\u8fd9\u4e9b\u5e94\u7528\u7a0b\u5e8f\u7684\u8f6f\u4ef6\u751f\u547d\u5468\u671f\u4ee5\u53ca Contour \u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e"),(0,o.kt)("h3",{id:"\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458"},"\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458"),(0,o.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u662f\u5e0c\u671b\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u90e8\u7f72 Web \u5e94\u7528\u7a0b\u5e8f\u6216\u5fae\u670d\u52a1\u5de5\u4f5c\u8d1f\u8f7d\u7684\u4eba\uff0c\u5e76\u4e14\u5bf9\u96c6\u7fa4\u7684\u8bbf\u95ee\u6743\u9650\u5c11\u4e8e\u7ba1\u7406\u5458\u3002\u5b83\u4eec\u901a\u8fc7\u521b\u5efa Contour \u53ef\u4ee5\u7406\u89e3\u7684\u7c7b\u578b\u7684 Kubernetes \u5bf9\u8c61\u4e0e Contour \u8fdb\u884c\u4ea4\u4e92\uff0c\u5e76\u4e14\u9664\u4e86\u5bf9\u8fd9\u4e9b\u5bf9\u8c61\u7684\u5f71\u54cd\u4e4b\u5916\uff0c\u5b83\u4eec\u4e0e Contour \u672c\u8eab\u6ca1\u6709\u4ea4\u4e92\u3002"),(0,o.kt)("h2",{id:"\u610f\u89c1\u8bc4\u4ef7"},"\u610f\u89c1/\u8bc4\u4ef7"),(0,o.kt)("p",null,"Contour \u662f\u4e00\u4e2a\u6709\u7740\u4e13\u4e00\u7684\u9879\u76ee\u3002\u6211\u4eec\u8ba4\u4e3a Contour \u7684\u5f88\u5927\u4e00\u90e8\u5206\u4ef7\u503c\u5728\u4e8e\u5b83\u4e13\u7cbe\u7684\u65b9\u6cd5\u3002\u6211\u4eec\u76f8\u4fe1\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u8ba9\u6211\u4eec\u7f16\u5199\u66f4\u597d\u7684\u8f6f\u4ef6\u6765\u6ee1\u8db3\u7ef4\u62a4\u8005\u548c\u7528\u6237\u7684\u9700\u6c42"),(0,o.kt)("h3",{id:"\u5408\u7406\u7684\u9ed8\u8ba4\u503c"},"\u5408\u7406\u7684\u9ed8\u8ba4\u503c"),(0,o.kt)("p",null,"\u4e92\u8054\u7f51\u4e2d\u7684\u8bb8\u591a\u9879\u76ee\u63d0\u4f9b\u4e86\u5e7f\u6cdb\u7684\u914d\u7f6e\u8303\u56f4\u3002\u603b\u7684\u6765\u8bf4\uff0c\u8fd9\u662f\u4e00\u4ef6\u597d\u4e8b\u3002\u5927\u591a\u6570\u9879\u76ee\u90fd\u662f\u7531\u51e0\u4e4e\u6ca1\u6709\u673a\u6784\u6765\u8fd0\u8425\u7684\u3002\u56e0\u6b64\u5fc5\u987b\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u914d\u7f6e\u3002\u7136\u800c\uff0c\u8fd9\u79cd\u505a\u6cd5\u5df2\u7ecf\u6f14\u53d8\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u67d0\u4e9b\u4e1c\u897f\u53ef\u4ee5\u914d\u7f6e\uff0c\u90a3\u4e48\u5b83\u5e94\u8be5\u662f\u53ef\u914d\u7f6e\u7684\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Contour \u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u5c3d\u53ef\u80fd\u4f7f\u7528 Envoy \u7684\u914d\u7f6e\u53c2\u6570\uff0c\u4e0d\u4f1a\u8fc7\u591a\u7684\u589e\u52a0\u914d\u7f6e\uff0c\u800c\u662f\u6839\u636e\u5b9e\u9645\u9700\u8981\u7684\u7528\u6237\u505a\u51fa\u53d6\u820d\u3002")),(0,o.kt)("p",null,"Contour \u7684\u7acb\u573a\u662f\uff0c\u5f53 Envoy \u914d\u7f6e\u53c2\u6570\u6709\u5408\u7406\u7684\u9ed8\u8ba4\u503c\u65f6\uff0cContour \u5c06\u65e0\u6761\u4ef6\u5730\u5e94\u7528\u5b83\u3002\u8fc7\u53bb\uff0c\u6211\u4eec\u901a\u8fc7\u65e0\u6761\u4ef6\u538b\u7f29 HTTP \u54cd\u5e94\u4e3b\u4f53\u3001\u7981\u6b62 TLS/1.0\u3001\u9009\u62e9\u6fc0\u8fdb\u7684\u5bc6\u7801\u5957\u4ef6\u7b49\u6765\u4f7f\u7528\u6b64\u4f4d\u7f6e\u3002\n\u5982\u679c\u6211\u4eec\u65e0\u6cd5\u627e\u5230\u666e\u904d\u63a5\u53d7\u7684\u503c\uff0cContour \u5c06\u4e3a\u7ba1\u7406\u5458\u6216\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e00\u79cd\u65b9\u6cd5\u6765\u63d0\u4f9b\u4ed6\u4eec\u9009\u62e9\u7684\u503c\u4f5c\u4e3a\u6700\u540e\u7684\u624b\u6bb5\u3002\u5728\u8be5\u9879\u76ee\u7684\u5386\u53f2\u4e0a\uff0c\u7b2c\u4e8c\u79cd\u60c5\u51b5\u5f88\u5c11\u53d1\u751f\u3002\u901a\u5e38\uff0c\u7531\u66f4\u6539\u7279\u5b9a\u53c2\u6570\u7684\u613f\u671b\u5f15\u53d1\u7684\u8ba8\u8bba\u5bfc\u81f4\u5bf9 Contour \u7684\u4f7f\u7528\u65b9\u5f0f\u6709\u66f4\u6df1\u5165\u7684\u4e86\u89e3\uff0c\u5426\u5219\u4e0d\u4f1a\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u3002"),(0,o.kt)("h2",{id:"\u660e\u786e\u7684\u529f\u80fd\u8303\u56f4\u5b9a\u4e49"},"\u660e\u786e\u7684\u529f\u80fd\u8303\u56f4\u5b9a\u4e49"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kubernetes \u96c6\u7fa4\u4e0a HTTP \u5de5\u4f5c\u8d1f\u8f7d\u7684\u53cd\u5411\u4ee3\u7406\u5b9e\u73b0"),"\u3002Contour \u5bf9 TCP \u4ee3\u7406\u7684\u6709\u9650\u652f\u6301\u4ec5\u7528\u4e8e Contour \u652f\u6301\u5e0c\u671b\u76f4\u63a5\u5904\u7406 TLS \u7684 Web \u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("h3",{id:"\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u6216\u96c6\u7fa4\u7ba1\u7406\u5458\u53ef\u4ee5\u652f\u6301\u6bcf\u4e2a\u529f\u80fd"},"\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u6216\u96c6\u7fa4\u7ba1\u7406\u5458\u53ef\u4ee5\u652f\u6301\u6bcf\u4e2a\u529f\u80fd"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u6211\u4eec\u6dfb\u52a0\u7684\u6bcf\u4e2a\u529f\u80fd\uff0c\u6211\u4eec\u90fd\u5fc5\u987b\u6709\u4e00\u4e2a\u95ee\u9898\u7684\u7b54\u6848\u2014\u2014\u6700\u7ec8\u7528\u6237\u80fd\u5426\u5728\u65e0\u9700\u5347\u7ea7\u5230 Contour \u7ef4\u62a4\u4eba\u5458\u7684\u60c5\u51b5\u4e0b\u8c03\u8bd5\u6b64\u529f\u80fd\u4e2d\u7684\u6545\u969c\uff1f\n\u5982\u679c\u6d89\u53ca\u7b2c\u4e09\u65b9\u7ec4\u4ef6\uff0c\u6211\u4eec\u5982\u4f55\u5c06\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u8fde\u63a5\u5230\u5931\u8d25\u7684\u7ec4\u4ef6\uff0c\u4ee5\u4f7f\u4ed6\u4eec\u5728\u65e0\u9700\u6211\u4eec\u8c03\u89e3\u7684\u60c5\u51b5\u4e0b\u5f7c\u6b64\u4f5c\u4e3a\u7b2c\u4e00\u65b9\u77e5\u9053\u5bf9\u65b9\uff1f\n\u8fd9\u610f\u5473\u7740\u6211\u4eec\u66f4\u613f\u610f\u907f\u514d\u6dfb\u52a0\u5ba2\u6237\u65e0\u6cd5\u81ea\u884c\u8c03\u8bd5\u7684\u529f\u80fd\u2014\u2014\u5373\u4f7f\u662f\u4ed6\u4eec\u7684\u7cfb\u7edf\u51fa\u4e86\u95ee\u9898\u3002\n\u5728\u6dfb\u52a0\u9a8c\u8bc1\u529f\u80fd\u65f6\uff0c\u6211\u4eec\u4f1a\u5728\u8bbe\u8ba1\u7a7a\u95f4\u65b9\u9762\u72af\u9519\uff0c\u5373\u4f7f\u5b83\u4e0d\u662f\u6700\u5b8c\u6574\u7684\uff0c\u4e5f\u8981\u5c3d\u5feb\u7ed9\u5ba2\u6237\u53cd\u9988\uff1b\u5373\uff0c\u7531 api \u670d\u52a1\u5668\u5f3a\u5236\u6267\u884c\u7684 CRD \u9a8c\u8bc1\u4f18\u4e8e\u5bf9\u8c61\u4e0a\u7684\u72b6\u6001\u5b57\u6bb5\u3002\n\u5728\u8bbe\u8ba1 Kubernetes \u5bf9\u8c61\u65f6\uff0c\u6211\u4eec\u5c1d\u8bd5\u5c06\u4fe1\u606f\u5c3d\u53ef\u80fd\u9760\u8fd1\u9700\u8981\u5b83\u7684\u5bf9\u8c61\u516c\u5f00\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u5c06\u786e\u4fdd HTTPProxy \u5bf9\u8c61\u5177\u6709\u72b6\u6001\u6761\u4ef6\uff0c\u544a\u8bc9\u521b\u5efa\u5b83\u4eec\u7684\u7528\u6237\u662f\u5426\u5b58\u5728\u95ee\u9898\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u4ece Contour \u672c\u8eab\u8bb0\u5f55\u8be5\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"\u6211\u4eec\u5728\u7528\u6237\u6240\u5728\u7684\u5730\u65b9\u4e0e\u4ed6\u4eec\u4f1a\u9762"},"\u6211\u4eec\u5728\u7528\u6237\u6240\u5728\u7684\u5730\u65b9\u4e0e\u4ed6\u4eec\u4f1a\u9762"),(0,o.kt)("p",null,"Contour \u76ee\u524d\u652f\u6301 Ingress\u3001HTTPproxy \u548c Kubernetes Gateway API\u3002\u6211\u4eec\u4e0d\u8981\u6c42\u7528\u6237\u9009\u62e9\u4ed6\u4eec\u60f3\u8981\u4f7f\u7528\u7684\u5165\u53e3 API\uff0c\u76f8\u53cd\uff0c\u6211\u4eec\u4f1a\u8003\u8651\u4e3a\u4efb\u4f55\u8bf7\u6c42\u7684\u7c7b\u578b\u63d0\u4f9b\u652f\u6301\uff0c\u4ee5\u6ee1\u8db3\u4efb\u4f55\u5730\u65b9\u7684\u7528\u6237\u3002\n\u8fd9\u4e2a\u76ee\u6807\u4e0e\u6700\u5c0f\u8868\u9762\u79ef\u7684\u76ee\u6807\u76f8\u51b2\u7a81\uff0c\u4f46\u6211\u4eec\u610f\u8bc6\u5230\u5c06\u6211\u4eec\u6240\u6709\u7684\u7528\u6237\u5f15\u5bfc\u5230\u4ec5\u5728 Contour \u4e2d\u5b9e\u73b0\u7684 API \u4e0d\u5229\u4e8e\u4ed6\u4eec\u7684\u4e92\u64cd\u4f5c\u6027\uff0c\u5e76\u9650\u5236\u4e86\u6211\u4eec\u7684\u603b\u76ee\u6807\u5e02\u573a\u3002\u8fd9\u4e2a\u76ee\u6807\u7684\u60f3\u6cd5\u662f\uff0c\u6211\u4eec\u4f1a\u5728\u65b0\u7684\u5165\u53e3\u7c7b\u578b\u53ef\u7528\u65f6\u6df1\u601d\u719f\u8651\u5730\u8003\u8651\u5b83\u4eec\uff0c\u5982\u679c\u6211\u4eec\u8ba4\u4e3a\u8fd9\u662f\u4e00\u4e2a\u597d\u4e3b\u610f\uff0c\u5c31\u5c06\u5b83\u4eec\u6dfb\u52a0\u8fdb\u53bb\u3002"))}m.isMDXComponent=!0}}]);