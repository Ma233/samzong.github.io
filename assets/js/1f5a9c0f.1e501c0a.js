"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[84882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,y=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"HQL/SQL\u65f6\u95f4\u5904\u7406",tags:[]},i=void 0,l={permalink:"/2021/04/16/hql-sql-shi-jian-chu-li",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2021-04-16-hql-sql-shi-jian-chu-li.md",source:"@site/blog/2021-04-16-hql-sql-shi-jian-chu-li.md",title:"HQL/SQL\u65f6\u95f4\u5904\u7406",description:"",date:"2021-04-16T00:00:00.000Z",formattedDate:"2021\u5e744\u670816\u65e5",tags:[],readingTime:.07,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HQL/SQL\u65f6\u95f4\u5904\u7406",tags:[]},prevItem:{title:"\u5feb\u901f\u4e86\u89e3 MySQL \u65f6\u95f4\u8303\u56f4\u53c2\u6570",permalink:"/2021/04/18/kuai-su-liao-jie-mysql-shi-jian-fan-wei-can-shu"},nextItem:{title:"\u77e5\u4e4e\u5468\u520a\xb7\u4e54\u5e03\u65af\u5f80\u4e8b",permalink:"/2021/03/27/zhi-hu-zhou-kan-\xb7-qiao-bu-si-wang-shi"}},c={authorsImageUrls:[]},s=[],m={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"--HQL ms\nfrom_unixtime(CAST(obtained_ms/1000 AS BIGINT), 'yyyy-MM-dd HH:mm:ss')\n\n--SQL ms\nfrom_unixtime(time_in_ms / 1000)\n\n--SQL date\ndate(from_unixtime(time_in_ms / 1000)) as dt\n")))}p.isMDXComponent=!0}}]);