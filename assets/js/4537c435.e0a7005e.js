"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[66375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),i=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(r),g=n,d=u["".concat(p,".").concat(g)]||u[g]||h[g]||a;return r?o.createElement(d,s(s({ref:t},c),{},{components:r})):o.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},10266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=r(87462),n=(r(67294),r(3905));const a={title:"HowTo Upgrade Your Ghost Version",tags:["Ghost"],date:new Date("2017-02-20T14:39:15.000Z")},s=void 0,l={permalink:"/2017/02/20/HowTo-Upgrade-Your-Ghost-Version",source:"@site/blog/2017-02-20-HowTo-Upgrade-Your-Ghost-Version.md",title:"HowTo Upgrade Your Ghost Version",description:"1. \u4e0b\u8f7d\u6700\u65b0\u7248\u7684 Ghost",date:"2017-02-20T14:39:15.000Z",formattedDate:"2017\u5e742\u670820\u65e5",tags:[{label:"Ghost",permalink:"/tags/ghost"}],readingTime:.5666666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Upgrade Your Ghost Version",tags:["Ghost"],date:"2017-02-20T14:39:15.000Z"},prevItem:{title:"HowTo Install Redmine",permalink:"/2017/02/22/HowTo-Install-Redmine"},nextItem:{title:"HowTo Automatic Updates CENTOS/RHEL Using YUM",permalink:"/2017/02/19/HowTo-Automatic-Updates-CENTOS-RHEL-Using-YUM"}},p={authorsImageUrls:[]},i=[{value:"1. \u4e0b\u8f7d\u6700\u65b0\u7248\u7684 Ghost",id:"1-\u4e0b\u8f7d\u6700\u65b0\u7248\u7684-ghost",level:4},{value:"2. \u521b\u5efa\u4e34\u65f6\u76ee\u5f55\uff0c\u5e76\u89e3\u538b ghost-latest.zip \u5230\u6b64",id:"2-\u521b\u5efa\u4e34\u65f6\u76ee\u5f55\u5e76\u89e3\u538b-ghost-latestzip-\u5230\u6b64",level:4},{value:"3. \u8fdb\u5165\u5230\u539f ghost \u76ee\u5f55\uff0c\u5220\u9664 core",id:"3-\u8fdb\u5165\u5230\u539f-ghost-\u76ee\u5f55\u5220\u9664-core",level:4},{value:"4.\u8fdb\u5165\u5230\u65b0\u7248\u672c\u7684 ghost \u4e34\u65f6\u76ee\u5f55",id:"4\u8fdb\u5165\u5230\u65b0\u7248\u672c\u7684-ghost-\u4e34\u65f6\u76ee\u5f55",level:4},{value:"5. \u62f7\u8d1d\u6240\u9700\u6587\u4ef6\u5230 ghost \u5347\u7ea7\u76ee\u5f55",id:"5-\u62f7\u8d1d\u6240\u9700\u6587\u4ef6\u5230-ghost-\u5347\u7ea7\u76ee\u5f55",level:4},{value:"6. (\u53ef\u9009) \u5347\u7ea7 casper\uff0cghost \u9ed8\u8ba4\u4e3b\u9898",id:"6-\u53ef\u9009-\u5347\u7ea7-casperghost-\u9ed8\u8ba4\u4e3b\u9898",level:4},{value:"7. \u5207\u6362\u56de\u5230 ghost \u5b89\u88c5\u76ee\u5f55",id:"7-\u5207\u6362\u56de\u5230-ghost-\u5b89\u88c5\u76ee\u5f55",level:4},{value:"8. \u4fee\u6539\u6587\u4ef6\u76ee\u5f55\u6240\u6709\u8005\u548c\u6240\u5c5e\u7ec4\u4e3a ghost",id:"8-\u4fee\u6539\u6587\u4ef6\u76ee\u5f55\u6240\u6709\u8005\u548c\u6240\u5c5e\u7ec4\u4e3a-ghost",level:4},{value:"9. \u91cd\u65b0\u5b89\u88c5\u73af\u5883",id:"9-\u91cd\u65b0\u5b89\u88c5\u73af\u5883",level:4},{value:"10. \u91cd\u542f Ghost",id:"10-\u91cd\u542f-ghost",level:4}],c={toc:i},u="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"1-\u4e0b\u8f7d\u6700\u65b0\u7248\u7684-ghost"},"1. \u4e0b\u8f7d\u6700\u65b0\u7248\u7684 Ghost"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"curl -LOk https://ghost.org/zip/ghost-latest.zip\n")),(0,n.kt)("h4",{id:"2-\u521b\u5efa\u4e34\u65f6\u76ee\u5f55\u5e76\u89e3\u538b-ghost-latestzip-\u5230\u6b64"},"2. \u521b\u5efa\u4e34\u65f6\u76ee\u5f55\uff0c\u5e76\u89e3\u538b ghost-latest.zip \u5230\u6b64"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mkdir /usr/ghost-tmp\nunzip ghost-latest.zip -d /usr/ghost-tmp\n")),(0,n.kt)("h4",{id:"3-\u8fdb\u5165\u5230\u539f-ghost-\u76ee\u5f55\u5220\u9664-core"},"3. \u8fdb\u5165\u5230\u539f ghost \u76ee\u5f55\uff0c\u5220\u9664 core"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd  /usr/ghost\nrm -rf core\n")),(0,n.kt)("h4",{id:"4\u8fdb\u5165\u5230\u65b0\u7248\u672c\u7684-ghost-\u4e34\u65f6\u76ee\u5f55"},"4.\u8fdb\u5165\u5230\u65b0\u7248\u672c\u7684 ghost \u4e34\u65f6\u76ee\u5f55"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd /usr/ghost-tmp\n")),(0,n.kt)("h4",{id:"5-\u62f7\u8d1d\u6240\u9700\u6587\u4ef6\u5230-ghost-\u5347\u7ea7\u76ee\u5f55"},"5. \u62f7\u8d1d\u6240\u9700\u6587\u4ef6\u5230 ghost \u5347\u7ea7\u76ee\u5f55"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cp -R core /usr/ghost\ncp index.js *.json /usr/ghost\n")),(0,n.kt)("h4",{id:"6-\u53ef\u9009-\u5347\u7ea7-casperghost-\u9ed8\u8ba4\u4e3b\u9898"},"6. (\u53ef\u9009) \u5347\u7ea7 casper\uff0cghost \u9ed8\u8ba4\u4e3b\u9898"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cp -R content/themes/casper /usr/ghost/content/themes/\n")),(0,n.kt)("h4",{id:"7-\u5207\u6362\u56de\u5230-ghost-\u5b89\u88c5\u76ee\u5f55"},"7. \u5207\u6362\u56de\u5230 ghost \u5b89\u88c5\u76ee\u5f55"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd /usr/ghost\n")),(0,n.kt)("h4",{id:"8-\u4fee\u6539\u6587\u4ef6\u76ee\u5f55\u6240\u6709\u8005\u548c\u6240\u5c5e\u7ec4\u4e3a-ghost"},"8. \u4fee\u6539\u6587\u4ef6\u76ee\u5f55\u6240\u6709\u8005\u548c\u6240\u5c5e\u7ec4\u4e3a ghost"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"chown -R ghost:ghost ./*\n")),(0,n.kt)("h4",{id:"9-\u91cd\u65b0\u5b89\u88c5\u73af\u5883"},"9. \u91cd\u65b0\u5b89\u88c5\u73af\u5883"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install --production\n")),(0,n.kt)("h4",{id:"10-\u91cd\u542f-ghost"},"10. \u91cd\u542f Ghost"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pm2 restart ghost\n")))}h.isMDXComponent=!0}}]);