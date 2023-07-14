"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[50498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),y=a,f=u["".concat(i,".").concat(y)]||u[y]||m[y]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},68260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"python3 traceback",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/gy3x67"},c=void 0,p={permalink:"/2021/02/15/python3-traceback",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2021-02-15-python3-traceback.md",source:"@site/blog/2021-02-15-python3-traceback.md",title:"python3 traceback",description:"\u6253\u5370\u5806\u6808\u4fe1\u606f\uff0c\u65b9\u4fbf\u8c03\u8bd5",date:"2021-02-15T00:00:00.000Z",formattedDate:"2021\u5e742\u670815\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:.20333333333333334,hasTruncateMarker:!1,authors:[],frontMatter:{title:"python3 traceback",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/gy3x67"},prevItem:{title:"pprint beautiful json format",permalink:"/2021/02/15/pprint-beautiful-json-format"},nextItem:{title:"requests post data \u65f6\u5bf9 json \u9700\u8981\u7279\u6b8a\u6ce8\u610f",permalink:"/2021/02/15/requests-post-data-shi-dui-json-xu-yao-te-shu-zhu-yi"}},i={authorsImageUrls:[]},l=[{value:"\u65b9\u5f0f\u4e00",id:"\u65b9\u5f0f\u4e00",level:2},{value:"\u65b9\u5f0f\u4e8c",id:"\u65b9\u5f0f\u4e8c",level:3}],s={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6253\u5370\u5806\u6808\u4fe1\u606f\uff0c\u65b9\u4fbf\u8c03\u8bd5"),(0,a.kt)("h2",{id:"\u65b9\u5f0f\u4e00"},"\u65b9\u5f0f\u4e00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import traceback\n\ndef test(self):\n    try:\n        1 / 0\n    except BaseException as e:\n        msg = traceback.format_exc()\n        print(msg)\n    finally:\n        pass\n")),(0,a.kt)("h3",{id:"\u65b9\u5f0f\u4e8c"},"\u65b9\u5f0f\u4e8c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import logging\n\ndef test(self):\n    try:\n        1 / 0\n    except BaseException as e:\n        # msg = traceback.format_exc()\n        msg = logging.exception(e)\n        print(msg)\n    finally:\n        pass\n")))}m.isMDXComponent=!0}}]);