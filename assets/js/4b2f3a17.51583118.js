"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[98505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),y=o,f=u["".concat(p,".").concat(y)]||u[y]||m[y]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},55792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Python \u6293\u51fa\u6765\u968f\u673a\u4e0b\u8f7d\u8bb0\u5f55",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/yi4nu9"},c=void 0,i={permalink:"/2021/08/25/Python \u6293\u51fa\u6765\u968f\u673a\u4e0b\u8f7d\u8bb0\u5f55",source:"@site/blog/2021-08-25-Python \u6293\u51fa\u6765\u968f\u673a\u4e0b\u8f7d\u8bb0\u5f55.md",title:"Python \u6293\u51fa\u6765\u968f\u673a\u4e0b\u8f7d\u8bb0\u5f55",description:"\u80cc\u666f",date:"2021-08-25T00:00:00.000Z",formattedDate:"2021\u5e748\u670825\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:.09333333333333334,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Python \u6293\u51fa\u6765\u968f\u673a\u4e0b\u8f7d\u8bb0\u5f55",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/yi4nu9"},prevItem:{title:"\u4f7f\u7528 Python3 \u683c\u5f0f\u5316\u5927\u578b json \u6587\u4ef6",permalink:"/2021/09/05/\u4f7f\u7528Python3\u683c\u5f0f\u5316\u5927\u578bjson\u6587\u4ef6"},nextItem:{title:"MySQL REGEXP \u6d3b\u5b66\u6d3b\u7528",permalink:"/2021/08/09/MySQL REGEXP \u6d3b\u5b66\u6d3b\u7528"}},p={authorsImageUrls:[]},l=[],s={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"for n in range(500):\n    url = 'https://appest-public.s3.amazonaws.com/download/mac/TickTick_3.9.00_{}.dmg'.format(n)\n    resp = requests.get(url)\n    try:\n        print(resp.status_code)\n        if resp.status_code == 200:\n            print(n)\n            break\n    except Exception as e:\n        print(e)\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u80cc\u666f")))}m.isMDXComponent=!0}}]);