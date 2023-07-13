"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[98269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={title:"ClickHouse \u5e38\u7528\u51fd\u6570\u4f7f\u7528",tags:["ClickHouse","SQL"],categories:["\u6570\u636e\u5e93"],url:"https://www.yuque.com/samzong/code/qk7wca"},l=void 0,p={permalink:"/2022/01/20/ClickHouse \u5e38\u7528\u51fd\u6570\u4f7f\u7528",source:"@site/blog/2022-01-20-ClickHouse \u5e38\u7528\u51fd\u6570\u4f7f\u7528.md",title:"ClickHouse \u5e38\u7528\u51fd\u6570\u4f7f\u7528",description:"1. \u8c03\u6574\u65f6\u533a",date:"2022-01-20T00:00:00.000Z",formattedDate:"2022\u5e741\u670820\u65e5",tags:[{label:"ClickHouse",permalink:"/tags/click-house"},{label:"SQL",permalink:"/tags/sql"}],readingTime:.49333333333333335,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ClickHouse \u5e38\u7528\u51fd\u6570\u4f7f\u7528",tags:["ClickHouse","SQL"],categories:["\u6570\u636e\u5e93"],url:"https://www.yuque.com/samzong/code/qk7wca"},prevItem:{title:"python3 \u6587\u672c\u5904\u7406 strip() split()",permalink:"/2022/01/21/python3 \u6587\u672c\u5904\u7406 strip() split()"},nextItem:{title:"MySQL Case WHEN",permalink:"/2022/01/04/MySQL Case WHEN"}},s={authorsImageUrls:[]},i=[{value:"1. \u8c03\u6574\u65f6\u533a",id:"1-\u8c03\u6574\u65f6\u533a",level:2},{value:"2. \u63d0\u524d Json \u4e2d\u7684\u5b57\u7b26\u4e32",id:"2-\u63d0\u524d-json-\u4e2d\u7684\u5b57\u7b26\u4e32",level:2},{value:"3. \u5224\u65ad\u5b57\u6bb5\u4e0d\u4e3a\u7a7a",id:"3-\u5224\u65ad\u5b57\u6bb5\u4e0d\u4e3a\u7a7a",level:2}],c={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u8c03\u6574\u65f6\u533a"},"1. \u8c03\u6574\u65f6\u533a"),(0,a.kt)("p",null,"\u7528\u4e8e\u8c03\u6574\u65f6\u533a\u4e3a\u67e5\u8be2\u8005\u7684\u65f6\u533a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- clickhouse\ntoString(toDateTime(event_time), 'Asia/Shanghai') AS event_time\n\n-- mysql howto\nSELECT  CONVERT_TZ('2020-04-06 02:00:00','UTC','Asia/Hong_Kong') as event_time\n")),(0,a.kt)("h2",{id:"2-\u63d0\u524d-json-\u4e2d\u7684\u5b57\u7b26\u4e32"},"2. \u63d0\u524d Json \u4e2d\u7684\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONExtractRaw"),"\u5bf9\u591a\u5c42 Json \u7ed3\u6784\u7684\u6570\u636e\u8fdb\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"\u7cbe\u51c6\u63d0\u53d6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- clickhouse\nJSONExtractRaw(_data,'properties') as properties,\nJSONExtractRaw(JSONExtractRaw(_data,'properties'),'app_env') as app_env\n\n-- mysql howto\njson_extract(_data,'$.properties') as properties,\njson_extract(json_extract(_data,'$.properties'),'$.app_env') as app_env\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u63d0\u53d6\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u5254\u9664\u53cc\u5f15\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},'""'))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- clickhouse\nJSONExtractString(JSONExtractRaw(_data,'app_env')) as app_env\n\n-- mysql\njson_unquote(json_extract(_data,'$.app_env')) as app_env\n")),(0,a.kt)("h2",{id:"3-\u5224\u65ad\u5b57\u6bb5\u4e0d\u4e3a\u7a7a"},"3. \u5224\u65ad\u5b57\u6bb5\u4e0d\u4e3a\u7a7a"),(0,a.kt)("p",null,"\u4f7f\u7528\u5728 where \u6761\u4ef6\u4e2d\uff0c\u5224\u65ad\u5b57\u6bb5 \u4e3a\u7a7a\u6216\u8005\u4e0d\u4e3a\u7a7a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"where\n 1=1\n and notEmpty(client_version)  --\u4e0d\u4e3a\u7a7a\n  and empty(app_version) --\u4e3a\u7a7a\n")))}m.isMDXComponent=!0}}]);