"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[34731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),g=o,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},94074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"dingtalk orgBot sign generate",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/udxbvk"},i=void 0,c={permalink:"/2021/02/09/dingtalk orgBot sign generate",source:"@site/blog/2021-02-09-dingtalk orgBot sign generate.md",title:"dingtalk orgBot sign generate",description:"\u9700\u8981\u4f7f\u7528\u5230 hmac \u4ee5\u53ca time \u5e93",date:"2021-02-09T00:00:00.000Z",formattedDate:"2021\u5e742\u67089\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:.19333333333333333,hasTruncateMarker:!1,authors:[],frontMatter:{title:"dingtalk orgBot sign generate",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/udxbvk"},prevItem:{title:"requests post data \u65f6\u5bf9 json \u9700\u8981\u7279\u6b8a\u6ce8\u610f",permalink:"/2021/02/15/requests post data \u65f6\u5bf9json\u9700\u8981\u7279\u6b8a\u6ce8\u610f"},nextItem:{title:"python django \u7f16\u5199\u516c\u5171\u6a21\u5757\u5728 app \u4e2d\u5f15\u7528",permalink:"/2021/02/07/python django \u7f16\u5199\u516c\u5171\u6a21\u5757\u5728app\u4e2d\u5f15\u7528"}},p={authorsImageUrls:[]},s=[],l={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9700\u8981\u4f7f\u7528\u5230 hmac \u4ee5\u53ca time \u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"#/usr/bin/env python3\n# -*- coding: UTF-8 -*-\n\n\nimport hmac\nimport hashlib\nimport base64\nimport time\n\ntimestamp = lambda: int(round(time.time() * 1000))\n\ntimestamp = ''\n\napp_secret = 'BvuHQ-bTB2PiChlyCD3rgdNgHfMSYb0m4iQ_T1mEmG8ImBPQ1DSN3qwRU2-GblxR'\napp_secret_enc = app_secret.encode('utf-8')\nstring_to_sign = '{}\\n{}'.format(timestamp, app_secret)\nstring_to_sign_enc = string_to_sign.encode('utf-8')\nhmac_code = hmac.new(app_secret_enc, string_to_sign_enc, digestmod=hashlib.sha256).digest()\nsign = base64.b64encode(hmac_code).decode('utf-8')\n\nprint(sign)\n\n")))}u.isMDXComponent=!0}}]);