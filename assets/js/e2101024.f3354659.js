"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[94766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,y=u["".concat(c,".").concat(g)]||u[g]||m[g]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},12193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"MySQL REGEXP \u6d3b\u5b66\u6d3b\u7528",tags:["SQL"],categories:["\u6570\u636e\u5e93"],url:"https://www.yuque.com/samzong/code/gc1atk"},i=void 0,l={permalink:"/2021/08/09/mysql-regexp-huo-xue-huo-yong",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2021-08-09-mysql-regexp-huo-xue-huo-yong.md",source:"@site/blog/2021-08-09-mysql-regexp-huo-xue-huo-yong.md",title:"MySQL REGEXP \u6d3b\u5b66\u6d3b\u7528",description:"REGEXP \u5728 MySQL \u4e2d\u4f7f\u7528\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u6807\u8bc6\u7b26\uff0c\u6709\u7740\u975e\u5e38\u4e30\u5bcc\u7684\u4f7f\u7528\u8def\u5f84\uff0c\u4ee3\u66fflike\u5c06\u6709\u975e\u5e38\u5927\u7684\u4f7f\u7528\u7a7a\u95f4",date:"2021-08-09T00:00:00.000Z",formattedDate:"2021\u5e748\u67089\u65e5",tags:[{label:"SQL",permalink:"/tags/sql"}],readingTime:.4166666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"MySQL REGEXP \u6d3b\u5b66\u6d3b\u7528",tags:["SQL"],categories:["\u6570\u636e\u5e93"],url:"https://www.yuque.com/samzong/code/gc1atk"},prevItem:{title:"Python \u6293\u51fa\u6765\u968f\u673a\u4e0b\u8f7d\u8bb0\u5f55",permalink:"/2021/08/25/python-zhua-chu-lai-sui-ji-xia-zai-ji-lu"},nextItem:{title:"\u5e38\u7528 SQL-\u62fc\u63a5\u65e5\u671f",permalink:"/2021/08/08/chang-yong-sql"}},c={authorsImageUrls:[]},p=[{value:"\u5f3a\u5236\u589e\u52a0\u5b9a\u4f4d\u57df\u540d\u5907\u6848",id:"\u5f3a\u5236\u589e\u52a0\u5b9a\u4f4d\u57df\u540d\u5907\u6848",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"REGEXP")," \u5728 MySQL \u4e2d\u4f7f\u7528\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u6807\u8bc6\u7b26\uff0c\u6709\u7740\u975e\u5e38\u4e30\u5bcc\u7684\u4f7f\u7528\u8def\u5f84\uff0c\u4ee3\u66ff",(0,o.kt)("inlineCode",{parentName:"p"},"like"),"\u5c06\u6709\u975e\u5e38\u5927\u7684\u4f7f\u7528\u7a7a\u95f4"),(0,o.kt)("h2",{id:"\u5f3a\u5236\u589e\u52a0\u5b9a\u4f4d\u57df\u540d\u5907\u6848"},"\u5f3a\u5236\u589e\u52a0\u5b9a\u4f4d\u57df\u540d\u5907\u6848"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u589e\u52a0\u57df\u540d\u5907\u6848\u5230\u9875\u811a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div style="width: 100%; text-align: center; position:absolute; bottom:0; margin: auto;">\n   \n       Copyright 2021 \xa9 \u4e0a\u6d77\u5fae\u4f01\u4fe1\u606f\u6280\u672f\u80a1\u4efd\u6709\u9650\u516c\u53f8\u3002<a href="https://beian.miit.gov.cn">\u6caa ICP \u5907 12042952 \u53f7 -18`  All Rights Reserved\n   \n</div>\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1626796098224-66dfb621-323e-4e68-b1e2-fedfa40b43d9.png?x-oss-process=image/resize,w_960,m_lfit",alt:"image.png"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4fee\u6539\u9875\u9762 height \u9ed8\u8ba4\u5c55\u793a\u5e95\u90e8 footer")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"body,body>[ui-view],html,html>[ui-view] {\n    width: 100%;\n    height: 99%  # \u539f100%\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1626796019003-27d5c0b3-dfe4-4c26-ae28-a334a5ed8039.png?x-oss-process=image/resize,w_960,m_lfit",alt:"image.png"})))}m.isMDXComponent=!0}}]);