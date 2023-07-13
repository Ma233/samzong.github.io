"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[33303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,y=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"HowTo Use Azure CLI on Mac",tags:["Azure"],date:new Date("2016-05-24T07:00:12.000Z")},l=void 0,i={permalink:"/2016/05/24/Azure-HowTo-Use-Azure-CLI-on-Mac",source:"@site/blog/2016-05-24-Azure-HowTo-Use-Azure-CLI-on-Mac.md",title:"HowTo Use Azure CLI on Mac",description:"Install azure-cli on Mac and CentOS",date:"2016-05-24T07:00:12.000Z",formattedDate:"2016\u5e745\u670824\u65e5",tags:[{label:"Azure",permalink:"/tags/azure"}],readingTime:.17666666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Use Azure CLI on Mac",tags:["Azure"],date:"2016-05-24T07:00:12.000Z"},prevItem:{title:"\u4f7f\u7528 mosh \u4ee3\u66ff ssh \u8fde\u63a5\u670d\u52a1\u5668",permalink:"/2016/06/16/\u4f7f\u7528mosh\u4ee3\u66ffssh\u8fde\u63a5\u670d\u52a1\u5668"},nextItem:{title:"Azure CLI Import AcountInfo",permalink:"/2016/05/24/Azure-3-HowTo-Use-Azure-CLI-on-Mac"}},c={authorsImageUrls:[]},s=[{value:"Install azure-cli on Mac and CentOS",id:"install-azure-cli-on-mac-and-centos",level:2},{value:"In Mac",id:"in-mac",level:3},{value:"In CentOS",id:"in-centos",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-azure-cli-on-mac-and-centos"},"Install azure-cli on Mac and CentOS"),(0,a.kt)("h3",{id:"in-mac"},"In Mac"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install brew."),(0,a.kt)("li",{parentName:"ol"},"brew install nodejs"),(0,a.kt)("li",{parentName:"ol"},'echo "registry = ',(0,a.kt)("a",{parentName:"li",href:"https://registry.npm.taobao.org"},"https://registry.npm.taobao.org"),'" > ~/.npmrc'),(0,a.kt)("li",{parentName:"ol"},"npm install azure-cli -g")),(0,a.kt)("h3",{id:"in-centos"},"In CentOS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install epel"),(0,a.kt)("li",{parentName:"ol"},"yum install -y nodejs npm"),(0,a.kt)("li",{parentName:"ol"},'echo "registry = ',(0,a.kt)("a",{parentName:"li",href:"https://registry.npm.taobao.org"},"https://registry.npm.taobao.org"),'" > ~/.npmrc'),(0,a.kt)("li",{parentName:"ol"},"npm install azure-cli -g")))}m.isMDXComponent=!0}}]);