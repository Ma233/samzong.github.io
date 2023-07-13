"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[717],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>k});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,k=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return t?n.createElement(k,c(c({ref:r},s),{},{components:t})):n.createElement(k,c({ref:r},s))}));function k(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},35935:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={title:"Docker for Mac \u7f51\u7edc\u6280\u5de7",tags:["Docker","Mac"],categories:["Docker"],url:"https://www.yuque.com/samzong/code/rey62i"},c=void 0,l={permalink:"/2022/08/17/Docker for Mac \u7f51\u7edc\u6280\u5de7",source:"@site/blog/2022-08-17-Docker for Mac \u7f51\u7edc\u6280\u5de7.md",title:"Docker for Mac \u7f51\u7edc\u6280\u5de7",description:"\u5728 Windows \u548c Linux \u4e2d\u4f7f\u7528 Docker\uff0c\u53ef\u4ee5\u901a\u8fc7 docker0 \u8fd9\u4e2a\u7f51\u7edc IP\uff0c\u5728\u5bb9\u5668\u5185\u8bbf\u95ee\u5bbf\u4e3b\u673a\u7684\u7aef\u53e3\u53ca\u670d\u52a1",date:"2022-08-17T00:00:00.000Z",formattedDate:"2022\u5e748\u670817\u65e5",tags:[{label:"Docker",permalink:"/tags/docker"},{label:"Mac",permalink:"/tags/mac"}],readingTime:.47333333333333333,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Docker for Mac \u7f51\u7edc\u6280\u5de7",tags:["Docker","Mac"],categories:["Docker"],url:"https://www.yuque.com/samzong/code/rey62i"},prevItem:{title:"K8s \u7cfb\u5217 \u5357\u5317\u6d41\u91cf\u548c\u4e1c\u897f\u6d41\u91cf",permalink:"/2022/09/12/K8s\u7cfb\u5217-\u5357\u5317\u6d41\u91cf\u548c\u4e1c\u897f\u6d41\u91cf"},nextItem:{title:"\u74e6\u5c14\u767b\u6e56",permalink:"/2022/08/15/\u74e6\u5c14\u767b\u6e56"}},i={authorsImageUrls:[]},p=[],s={toc:p},u="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 Windows \u548c Linux \u4e2d\u4f7f\u7528 Docker\uff0c\u53ef\u4ee5\u901a\u8fc7 docker0 \u8fd9\u4e2a\u7f51\u7edc IP\uff0c\u5728\u5bb9\u5668\u5185\u8bbf\u95ee\u5bbf\u4e3b\u673a\u7684\u7aef\u53e3\u53ca\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  ~ ifconfig\ndocker0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255\n        ether 02:42:65:e2:82:de  txqueuelen 0  (Ethernet)\n        RX packets 19240  bytes 9107695 (8.6 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 16989  bytes 9952021 (9.4 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")),(0,o.kt)("p",null,"\u4f46\u4ee5\u4e0a\u5728 macOS \u4e2d\u65e0 docker0 \u7aef\u53e3\uff0c\u90a3\u6211\u4eec\u5982\u4f55\u5728 Docker for Mac \u4e2d\u8bbf\u95ee\u5bbf\u4e3b\u673a\u7684\u670d\u52a1\u5462\uff1f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"docker.for.mac.host.internal")),(0,o.kt)("p",null,"\u53ef\u4ee5\u91c7\u7528\u4ee5\u4e0a\u672c\u5730\u57df\u540d\u5185\u5b9e\u73b0\u5728\u5bb9\u5668\u5185\u8bbf\u95ee \u5bbf\u4e3b\u673a\u7684\u670d\u52a1"))}m.isMDXComponent=!0}}]);