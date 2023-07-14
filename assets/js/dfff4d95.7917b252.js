"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[33559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),f=l,g=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={title:"K8s \u7cfb\u5217 \u5357\u5317\u6d41\u91cf\u548c\u4e1c\u897f\u6d41\u91cf",toc:!0,tags:["Kubernetes"]},i=void 0,o={permalink:"/2022/09/12/k8s-xi-lie-nan-bei-liu-liang-he-dong-xi-liu-liang",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2022-09-12-k8s-xi-lie-nan-bei-liu-liang-he-dong-xi-liu-liang.md",source:"@site/blog/2022-09-12-k8s-xi-lie-nan-bei-liu-liang-he-dong-xi-liu-liang.md",title:"K8s \u7cfb\u5217 \u5357\u5317\u6d41\u91cf\u548c\u4e1c\u897f\u6d41\u91cf",description:"\u5357\u5317\u6d41\u91cf\u548c\u4e1c\u897f\u6d41\u91cf \u662f\u4ec0\u4e48\u610f\u601d\uff1f",date:"2022-09-12T00:00:00.000Z",formattedDate:"2022\u5e749\u670812\u65e5",tags:[{label:"Kubernetes",permalink:"/tags/kubernetes"}],readingTime:3.1166666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"K8s \u7cfb\u5217 \u5357\u5317\u6d41\u91cf\u548c\u4e1c\u897f\u6d41\u91cf",toc:!0,tags:["Kubernetes"]},prevItem:{title:"\u4f7f\u7528 canal \u8fdb\u884c\u6570\u636e\u5e93\u589e\u91cf\u540c\u6b65",permalink:"/2022/09/18/shi-yong-canal-jin-xing-shu-ju-ku-zeng-liang-tong-bu"},nextItem:{title:"Docker for Mac \u7f51\u7edc\u6280\u5de7",permalink:"/2022/08/17/docker-for-mac-wang-luo-ji-qiao"}},c={authorsImageUrls:[]},u=[{value:"\u5357\u5317\u6d41\u91cf\u548c\u4e1c\u897f\u6d41\u91cf \u662f\u4ec0\u4e48\u610f\u601d\uff1f",id:"\u5357\u5317\u6d41\u91cf\u548c\u4e1c\u897f\u6d41\u91cf-\u662f\u4ec0\u4e48\u610f\u601d",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5357\u5317\u6d41\u91cf\u548c\u4e1c\u897f\u6d41\u91cf-\u662f\u4ec0\u4e48\u610f\u601d"},"\u5357\u5317\u6d41\u91cf\u548c\u4e1c\u897f\u6d41\u91cf \u662f\u4ec0\u4e48\u610f\u601d\uff1f"),(0,l.kt)("p",null,"\u5728 Service Mesh \u5fae\u670d\u52a1\u67b6\u6784\u4e2d\uff0c\u6211\u4eec\u5e38\u5e38\u4f1a\u542c\u5230\u4e1c\u897f\u6d41\u91cf\u548c\u5357\u5317\u6d41\u91cf\u4e24\u4e2a\u672f\u8bed\u3002"),(0,l.kt)("p",null,"\u5357\u5317\u6d41\u91cf\uff08NORTH-SOUTH traffic\uff09\u548c\u4e1c\u897f\u6d41\u91cf\uff08EAST-WEST traffic\uff09\u662f\u6570\u636e\u4e2d\u5fc3\u73af\u5883\u4e2d\u7684\u7f51\u7edc\u6d41\u91cf\u6a21\u5f0f\u3002\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u6765\u7406\u89e3\u8fd9\u4e24\u4e2a\u672f\u8bed\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u5c1d\u8bd5\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee\u67d0\u4e9b Web \u5e94\u7528\u3002Web \u5e94\u7528\u90e8\u7f72\u5728\u4f4d\u4e8e\u67d0\u4e2a\u6570\u636e\u4e2d\u5fc3\u7684\u5e94\u7528\u670d\u52a1\u5668\u4e2d\u3002\u5728\u591a\u5c42\u4f53\u7cfb\u7ed3\u6784\u4e2d\uff0c\u5178\u578b\u7684\u6570\u636e\u4e2d\u5fc3\u4e0d\u4ec5\u5305\u542b\u5e94\u7528\u670d\u52a1\u5668\uff0c\u8fd8\u5305\u542b\u5176\u4ed6\u670d\u52a1\u5668\uff0c\u5982\u8d1f\u8f7d\u5747\u8861\u5668\u3001\u6570\u636e\u5e93\u7b49\uff0c\u4ee5\u53ca\u8def\u7531\u5668\u548c\u4ea4\u6362\u673a\u7b49\u7f51\u7edc\u7ec4\u4ef6\u3002\u5047\u8bbe\u5e94\u7528\u670d\u52a1\u5668\u662f\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u524d\u7aef\u3002"),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u8bbf\u95ee web \u5e94\u7528\u65f6\uff0c\u4f1a\u53d1\u751f\u4ee5\u4e0b\u7c7b\u578b\u7684\u7f51\u7edc\u6d41\u91cf\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/f9c10a68e23f6955cc25c176d2ea98f7.png?x-oss-process=image/resize,w_960,m_lfit",alt:null})),(0,l.kt)("p",null,"\u6570\u636e\u4e2d\u5fc3\u6811\u578b\u62d3\u6251\u56fe\u662f\u4e00\u4e2a\u5178\u578b\u7684\u5305\u542b\u63a5\u5165\u5c42\u3001\u6c47\u805a\u5c42\u3001\u6838\u5fc3\u5c42\u4e09\u5c42\u7684\u7f51\u7edc\u7ed3\u6784\u3002\u8fd9\u79cd\u7ed3\u6784\u8bde\u751f\u4e4b\u521d\u5c31\u662f\u4e3a\u4e86\u5c06\u5916\u90e8\u6d41\u91cf\u5f15\u6d41\u5230\u5185\u90e8\u5e94\u7528\u3002"),(0,l.kt)("p",null,"\u6d41\u91cf\u4ece\u5916\u90e8\u7a7f\u8fc7\u9632\u706b\u5899\u6216\u8005\u6570\u636e\u4e2d\u5fc3\u5176\u5b83\u5916\u56f4\u7f51\u7edc\u8bbe\u5907\u8fdb\u6765\uff0c\u5bf9\u5e94\u5230\u4e0a\u2faf\u8fd9\u5f20\u56fe\u91cc\uff0c\u6d41\u52a8\u65b9\u5411\u4e3a\u4ece\u4e0a\u5230\u4e0b\uff0c\u79f0\u4e3a\u5357\u5411\u6d41\u91cf\uff08\u548c\u5730\u56fe\u4e00\u6837\uff0c\u4e0a\u5317\u4e0b\u5357\uff09\uff0c\u800c\u4e0e\u4e4b\u5bf9\u5e94\u7684\uff0c\u6570\u636e\u4e2d\u5fc3\u5185\u90e8\u4ea7\u751f\u7684\uff0c\u79bb\u5f00\u6570\u636e\u4e2d\u5fc3\u7684\u6d41\u91cf\uff0c\u4ece\u4e0b\u5230\u4e0a\u6545\u79f0\u4e3a\u5317\u5411\u6d41\u91cf\u3002\u5408\u8d77\u6765\u79f0\u4e3a\u5357\u5317\u6d41\u91cf\u3002"),(0,l.kt)("p",null,"\u5728\u5fae\u670d\u52a1\u5316\u6d41\u884c\u4e4b\u524d\uff0c\u4ee5\u5de8\u77f3\u7cfb\u7edf\uff08monolithic\uff09\u8fd9\u79cd\u5355\u4f53\u5e94\u7528\u4e3a\u5355\u4f4d\u90e8\u7f72\u7684\u65b9\u5f0f\uff0c\u4ea7\u751f\u7684\u662f\u5178\u578b\u7684\u5357\u5317\u6d41\u91cf\u3002\u4e00\u4e2a\u5355\u4f53\u5e94\u7528\u914d\u6709\u4e00\u4e2a\u4e13\u95e8\u7684\u670d\u52a1\u5668\uff08\u6216\u865a\u62df\u673a\uff09\uff0c\u4e00\u4e2a\u5916\u90e8\u8bf7\u6c42\u901a\u5e38\u5728\u5355\u4f53\u5e94\u7528\u5185\u72ec\u7acb\u5b8c\u6210\uff0c\u9664\u4e86\u8bbf\u95ee\u6570\u636e\u5e93\u7b49\u5fc5\u987b\u4f9d\u8d56\u670d\u52a1\u4e4b\u5916\uff0c\u5f88\u5c11\u4f1a\u53d1\u751f\u6a2a\u5411\u7684\u6d41\u91cf\u3002"),(0,l.kt)("p",null,"\u4f46\u4e91\u8ba1\u7b97\u673a\u3001\u5927\u6570\u636e\u3001\u5fae\u670d\u52a1\u3001\u4e91\u539f\u751f\u7b49\u6280\u672f\u7684\u53d1\u5c55\u50ac\u751f\u4e86\u5927\u91cf\u7684\u4ece\u5de6\u5230\u53f3\u4ee5\u53ca\u4ece\u53f3\u5230\u5de6\u7684\u6d41\u91cf\uff0c\u4e5f\u88ab\u79f0\u4e3a\u4e1c\u897f\u6d41\u91cf\u3002"),(0,l.kt)("p",null,"\u6570\u636e\u4e2d\u5fc3\u5185\u90e8\u5357\u5317\u6d41\u91cf\u7684\u524a\u5f31\uff0c\u800c\u4e1c\u897f\u6d41\u91cf\u7684\u4e95\u55b7\u5728\u786c\u4ef6\u4e0a\u8981\u6c42\u6570\u636e\u4e2d\u5fc3\u8981\u6a2a\u5411\u6269\u5c55\u4ee5\u63d0\u4f9b\u66f4\u5bbd\u7684\u5927\u4e8c\u5c42\u4ee5\u53ca\u5bb9\u7eb3\u66f4\u591a\u7684\u670d\u52a1\u5668\uff0c\u800c\u5728\u8f6f\u4ef6\u4e0a\u5219\u8981\u6c42\u4e00\u79cd\u65b0\u7684\u670d\u52a1\u7f16\u6392\u65b9\u5f0f\u4ee5\u4fbf\u80fd\u5145\u5206\u6316\u6398\u3001\u5229\u7528\u73b0\u6709\u7684\u8ba1\u7b97\u80fd\u529b\uff0c\u4ece\u8fd9\u4e2a\u89d2\u5ea6\u770b K8s \u7684\u51fa\u73b0\u662f\u4e00\u79cd\u5fc5\u7136\u3002"),(0,l.kt)("p",null,"\u4e3e\u4e24\u4e2a\u4f8b\u5b50\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\uff08\u4f4d\u4e8e\u6570\u636e\u4e2d\u5fc3\u4e00\u4fa7\u7684\u6d4f\u89c8\u5668\uff09\u4e0e\u8d1f\u8f7d\u5747\u8861\u5668\uff08\u4f4d\u4e8e\u6570\u636e\u4e2d\u5fc3\uff09\u4e4b\u95f4\u7684\u7f51\u7edc\u6d41\u91cf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8d1f\u8f7d\u5747\u8861\u5668\u3001\u5e94\u7528\u670d\u52a1\u5668\u3001\u6570\u636e\u5e93\u7b49\u4e4b\u95f4\u7684\u7f51\u7edc\u6d41\u91cf\uff0c\u5b83\u4eec\u90fd\u4f4d\u4e8e\u6570\u636e\u4e2d\u5fc3\u3002"))),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u524d\u8005\u5373\u5373\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u6d41\u91cf\u88ab\u79f0\u4e3a\u5357\u5317\u6d41\u91cf\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u5357\u5317\u6d41\u91cf\u662f server-client \u6d41\u91cf\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e8c\u79cd\u6d41\u91cf\u5373\u4e0d\u540c\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u6d41\u91cf\u4e0e\u6570\u636e\u4e2d\u5fc3\u6216\u4e0d\u540c\u6570\u636e\u4e2d\u5fc3\u4e4b\u95f4\u7684\u7f51\u7edc\u6d41\u88ab\u79f0\u4e3a\u4e1c\u897f\u6d41\u91cf\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u4e1c\u897f\u6d41\u91cf\u662f service-service \u6d41\u91cf\u3002"),(0,l.kt)("p",null,"\u5f53\u4e0b\uff0c\u4e1c\u897f\u6d41\u91cf\u8fdc\u8d85\u5357\u5317\u6d41\u91cf\uff0c\u5c24\u5176\u662f\u5728\u5f53\u4eca\u7684\u5927\u6570\u636e\u751f\u6001\u7cfb\u7edf\u4e2d\uff0c\u6bd4\u5982 Hadoop \u751f\u6001\u7cfb\u7edf\uff08\u5927\u91cf server \u9a7b\u7559\u5728\u6570\u636e\u4e2d\u5fc3\u4e2d\uff0c\u7528 map reduce \u5904\u7406\uff09\uff0cserver-server \u6d41\u91cf\u8fdc\u5927\u4e8e server-client \u6d41\u91cf\u3002"),(0,l.kt)("p",null,"\u5927\u5bb6\u53ef\u80fd\u4f1a\u597d\u5947\uff0c\u4e1c\u897f\u5357\u5317\uff0c\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u547d\u540d\uff1f"),(0,l.kt)("p",null,"\u8be5\u547d\u540d\u6765\u81ea\u4e8e\u7ed8\u5236\u5178\u578b network diagrams \u7684\u4e60\u60ef\u3002\u5728\u56fe\u8868\u4e2d\uff0c\u901a\u5e38\u6838\u5fc3\u7f51\u7edc\u7ec4\u4ef6\u7ed8\u5236\u5728\u9876\u90e8\uff08NORTH\uff09\uff0c\u5ba2\u6237\u7aef\u7ed8\u5236\u5728\u5e95\u90e8\uff08SOUTH\uff09\uff0c\u800c\u6570\u636e\u4e2d\u5fc3\u5185\u7684\u4e0d\u540c\u670d\u52a1\u5668\u6c34\u5e73\uff08EAST-WEST\uff09"))}m.isMDXComponent=!0}}]);