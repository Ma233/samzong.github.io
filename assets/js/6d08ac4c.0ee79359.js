"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[73956],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),f=a,y=s["".concat(p,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Python \u6293\u51fa\u6765\u968f\u673a\u4e0b\u8f7d\u8bb0\u5f55",tags:[]},i=void 0,c={permalink:"/2021/08/25/python-zhua-chu-lai-sui-ji-xia-zai-ji-lu",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2021-08-25-python-zhua-chu-lai-sui-ji-xia-zai-ji-lu.md",source:"@site/blog/2021-08-25-python-zhua-chu-lai-sui-ji-xia-zai-ji-lu.md",title:"Python \u6293\u51fa\u6765\u968f\u673a\u4e0b\u8f7d\u8bb0\u5f55",description:"\u80cc\u666f",date:"2021-08-25T00:00:00.000Z",formattedDate:"2021\u5e748\u670825\u65e5",tags:[],readingTime:.09333333333333334,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Python \u6293\u51fa\u6765\u968f\u673a\u4e0b\u8f7d\u8bb0\u5f55",tags:[]},prevItem:{title:"\u4f7f\u7528 Python3 \u683c\u5f0f\u5316\u5927\u578b json \u6587\u4ef6",permalink:"/2021/09/05/shi-yong-python3-ge-shi-hua-da-xing-json-wen-jian"},nextItem:{title:"MySQL REGEXP \u6d3b\u5b66\u6d3b\u7528",permalink:"/2021/08/09/mysql-regexp-huo-xue-huo-yong"}},p={authorsImageUrls:[]},l=[],u={toc:l},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"for n in range(500):\n    url = 'https://appest-public.s3.amazonaws.com/download/mac/TickTick_3.9.00_{}.dmg'.format(n)\n    resp = requests.get(url)\n    try:\n        print(resp.status_code)\n        if resp.status_code == 200:\n            print(n)\n            break\n    except Exception as e:\n        print(e)\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u80cc\u666f")))}m.isMDXComponent=!0}}]);