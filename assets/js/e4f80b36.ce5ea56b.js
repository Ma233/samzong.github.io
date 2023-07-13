"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[64149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(n),y=a,f=m["".concat(p,".").concat(y)]||m[y]||u[y]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},46335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={title:"learn sqlalchemy",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/qdw35g"},l=void 0,c={permalink:"/2020/12/13/learn sqlalchemy",source:"@site/blog/2020-12-13-learn sqlalchemy.md",title:"learn sqlalchemy",description:"",date:"2020-12-13T00:00:00.000Z",formattedDate:"2020\u5e7412\u670813\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:.14666666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"learn sqlalchemy",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/qdw35g"},prevItem:{title:"\u68c0\u67e5\u60a8\u7684 App \u662f\u5426\u5df2\u652f\u6301 AppleSilicon",permalink:"/2020/12/25/\u68c0\u67e5\u60a8\u7684App\u662f\u5426\u5df2\u652f\u6301AppleSilicon"},nextItem:{title:"covert timestamp2datetime",permalink:"/2020/12/09/covert timestamp2datetime"}},p={authorsImageUrls:[]},i=[],s={toc:i},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# python3 on Mac\n\npip3 install sqlalchemy mysqclient\n\n# CentOS\nyum install MySQL-python\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import sqlalchemy\nimport MySQLdb\n\nfrom sqlalchemy import create_engine, MetaData\n\ndef connect_db ():\n # connect db:\n engine = create_engine("mysql://user:pass@localhost/db", echo = True)\n\n    meta = MetaData()\n    conn = engine.connect()\n')))}u.isMDXComponent=!0}}]);