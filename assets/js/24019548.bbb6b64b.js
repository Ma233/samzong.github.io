"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[99089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"SQL \u5bf9\u65f6\u95f4\u6574\u70b9\u7684\u5904\u7406",toc:!0,authors:["samzong"],tags:[],date:new Date("2022-04-15T18:55:00.000Z")},i=void 0,l={permalink:"/2022/04/15/sql-dui-shi-jian-zheng-dian-de-chu-li",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2022-04-15-sql-dui-shi-jian-zheng-dian-de-chu-li.md",source:"@site/blog/2022-04-15-sql-dui-shi-jian-zheng-dian-de-chu-li.md",title:"SQL \u5bf9\u65f6\u95f4\u6574\u70b9\u7684\u5904\u7406",description:"\u9700\u8981\u53d6\u503c\u6574\u70b9\u65f6\u95f4",date:"2022-04-15T18:55:00.000Z",formattedDate:"2022\u5e744\u670815\u65e5",tags:[],readingTime:.19666666666666666,hasTruncateMarker:!1,authors:[{name:"Samzong Lu",title:"Product Designer",url:"https://github.com/SAMZONG",email:"samzong.lu@gmail.com",imageURL:"https://github.com/SAMZONG.png",key:"samzong"}],frontMatter:{title:"SQL \u5bf9\u65f6\u95f4\u6574\u70b9\u7684\u5904\u7406",toc:!0,authors:["samzong"],tags:[],date:"2022-04-15T18:55:00.000Z"},prevItem:{title:"Metabase \u4e0a\u624b - \u4f7f\u7528 Jar \u8fd0\u884c",permalink:"/2022/04/16/metabase-shang-shou-shi-yong-jar"},nextItem:{title:"\u6dd8\u5b9d Python SDK \u4f18\u5316\u652f\u6301 Python3",permalink:"/2022/04/14/tao-bao-python-sdk-you-hua-zhi-chi-python3"}},c={authorsImageUrls:[void 0]},u=[{value:"\u9700\u8981\u53d6\u503c\u6574\u70b9\u65f6\u95f4",id:"\u9700\u8981\u53d6\u503c\u6574\u70b9\u65f6\u95f4",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9700\u8981\u53d6\u503c\u6574\u70b9\u65f6\u95f4"},"\u9700\u8981\u53d6\u503c\u6574\u70b9\u65f6\u95f4"),(0,a.kt)("p",null,"\u9879\u76ee\u4e0a\u9700\u8981\u53d6\u503c\u4e0a\u4e00\u4e2a\u6574\u70b9\u7684\u6570\u636e\u67e5\u8be2\u5904\u7406\uff0c\u843d\u8868\uff0c\u7136\u540e\u5b9e\u73b0\u6309\u5c0f\u65f6\u66f4\u65b0"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ClickHouse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"subtractHours(date_trunc('hour',now()),1)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"MySQL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"and auth_time >= DATE_SUB(DATE_FORMAT(now(),'%Y-%m-%d %H:00:00'),interval 1 hour)\nand auth_time < DATE_FORMAT(now(),'%Y-%m-%d %H:00:00')\n")))}m.isMDXComponent=!0}}]);