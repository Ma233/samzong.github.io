"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[82616],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,y=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return t?n.createElement(y,l(l({ref:r},c),{},{components:t})):n.createElement(y,l({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36402:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={title:"CentOS \u4f7f\u7528 createrepo \u642d\u5efa\u672c\u5730\u6e90",tags:["CentOS"],date:new Date("2016-03-29T03:37:31.000Z")},l=void 0,i={permalink:"/2016/03/29/CentOS-6-1-\u4f7f\u7528createrepo\u642d\u5efa\u672c\u5730\u6e90",source:"@site/blog/2016-03-29-CentOS-6-1-\u4f7f\u7528createrepo\u642d\u5efa\u672c\u5730\u6e90.md",title:"CentOS \u4f7f\u7528 createrepo \u642d\u5efa\u672c\u5730\u6e90",description:"Tips: \u672c\u5730\u642d\u5efa\u672c\u5730 yum \u6e90\u91c7\u7528\u7684 rpm \u5168\u90e8\u6765\u81ea CentOS-6.7-bin-DVD1&DVD2",date:"2016-03-29T03:37:31.000Z",formattedDate:"2016\u5e743\u670829\u65e5",tags:[{label:"CentOS",permalink:"/tags/cent-os"}],readingTime:1.82,hasTruncateMarker:!1,authors:[],frontMatter:{title:"CentOS \u4f7f\u7528 createrepo \u642d\u5efa\u672c\u5730\u6e90",tags:["CentOS"],date:"2016-03-29T03:37:31.000Z"},prevItem:{title:"Linux \u4e2d\u7684\u4e09\u4e2a\u7279\u6b8a\u6743\u9650",permalink:"/2016/03/29/Linux-\u4e2d\u7684\u4e09\u4e2a\u7279\u6b8a\u6743\u9650"},nextItem:{title:"HowTo Install MongoDB  on CentOS 6.x",permalink:"/2016/03/27/HowTo-Install-MongoDB-on-CentOS-6-x"}},u={authorsImageUrls:[]},p=[{value:"1. \u6d4b\u8bd5\u73af\u5883",id:"1-\u6d4b\u8bd5\u73af\u5883",level:3},{value:"2. \u5b9e\u9a8c\u6b65\u9aa4",id:"2-\u5b9e\u9a8c\u6b65\u9aa4",level:3}],c={toc:p},m="wrapper";function s(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u672c\u5730\u642d\u5efa\u672c\u5730 yum \u6e90\u91c7\u7528\u7684 rpm \u5168\u90e8\u6765\u81ea CentOS-6.7-bin-DVD1&DVD2")),(0,a.kt)("h3",{id:"1-\u6d4b\u8bd5\u73af\u5883"},"1. \u6d4b\u8bd5\u73af\u5883"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MacBook Pro 15-inch i7 16GB"),(0,a.kt)("li",{parentName:"ul"},"VMware Fushion 8 Pro"),(0,a.kt)("li",{parentName:"ul"},"CentOS-6.7-i686-minimal.iso")),(0,a.kt)("p",null,"\u56e0\u4e3a\u914d\u7f6e\u672c\u5730yum\u6e90\u9700\u8981\u4fee\u6539/\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u53ca/etc\u4e0b\u9762\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5efa\u8bae\u66f4\u6362\u5230root\u7528\u6237\u3002"),(0,a.kt)("h3",{id:"2-\u5b9e\u9a8c\u6b65\u9aa4"},"2. \u5b9e\u9a8c\u6b65\u9aa4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# 2.1 \u56e0\u4e3a\u914d\u7f6e\u672c\u5730yum\u6e90\u9700\u8981\u4fee\u6539/\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u53ca/etc\u4e0b\u9762\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5efa\u8bae\u66f4\u6362\u5230root\u7528\u6237\u3002\n[adam@ultraera ~]$ su -\nPassword:\n[root@ultraera ~]#\n\n# 2.2 \u9996\u5148\u5728\u672c\u5730\u521b\u5efa\u4e00\u4e2a\u5b58\u653erpm\u5305\u7684\u76ee\u5f55\uff0c\u6211\u8fd9\u91cc\u9009\u62e9\u76f4\u63a5\u5728/\u4e0b\u521b\u5efa\uff0c\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff1a\n[root@ultraera\xa0~]#\xa0mkdir\xa0/yumload\n[root@ultraera\xa0~]#\xa0cd\xa0/yumload/\n[root@ultraera\xa0yumload]#\xa0pwd\n/yumload\n# 2.3 \u63a5\u4e0b\u6765\u628a\u4e24\u5f20DVD\u4e2d\u7684Packages\u4e2d\u7684rpm\u5305\u5168\u90e8\u62f7\u8d1d\u5230/yumload:\n[root@ultraera\xa0yumload]#\xa0cp\xa0/media/CentOS_6.5_Final/Packages/*\xa0./\n[root@ultraera\xa0yumload]#\xa0ll\xa0./*.rpm\xa0|\xa0wc\xa0-l\n\n#\u4e24\u5f20DVD\u4e00\u5171\u6709\u7684rpm\u5305\u7684\u6570\u91cf:\n4802\n\n\n# 2.4 \u7136\u540e\u4f7f\u7528createrepo\u6307\u4ee4\u521b\u5efa\u672c\u5730repo\uff0cCentOS6\u9ed8\u8ba4\u4e0d\u5b89\u88c5createrepo\uff0c\u9700\u8981\u624b\u52a8\u5b89\u88c5\uff0c\u6ca1\u5173\u7cfb\uff0c\u5728\u6211\u4eec\u7684DVD\u5149\u76d8\u4e2d\u5df2\u7ecf\u96c6\u6210\u4e86createrepo\u7684\u5305\uff0c\u5982\u679c\u62a5\u9700\u8981\u4f9d\u8d56\u5b89\u88c5\u5176\u4ed6\u5305\u7684\u4f7f\u7528\uff0c\u4f9d\u6b21\u5b89\u88c5\u5373\u53ef\u3002\n\n[root@ultraera\xa0yumload]#\xa0rpm\xa0-ivh\xa0createrepo-0.9.9-18.el6.noarch.rpm\n\n# 2.5 \u521b\u5efayum\u4ed3\u5e93\uff0c\u8010\u5fc3\u7b49\u5f85\uff0c\u53ef\u4ee5\u52a0-v\u53c2\u6570\u5217\u51fa\u6267\u884c\u4fe1\u606f\n[root@ultraera\xa0yumload]#\xa0createrepo\xa0/yumload/\nSpawning\xa0worker\xa00\xa0with\xa04802\xa0pkgs\nWorkers\xa0Finished\nGathering\xa0worker\xa0results\nSaving\xa0Primary\xa0metadata\nSaving\xa0file\xa0lists\xa0metadata\nSaving\xa0other\xa0metadata\nGenerating\xa0sqlite\xa0DBs\nSqlite\xa0DBs\xa0complete\n[root@ultraera\xa0yumload]#\n\n# 2.6 \u5728/etc/yum.repo.d/\u4e0b\u521b\u5efa\u4e00\u4e2arepo\u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u4f46\u4e00\u5b9a\u8981\u4ee5repo\u7ed3\u5c3e\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e0b\u5185\u5bb9\uff1a\n[ultraera.org] #\u4ed3\u5e93\u540d\u79f0\u53ef\u4ee5\u81ea\u5b9a\u4e49\nname=This\xa0is\xa0a\xa0local\xa0repo #\u63cf\u8ff0\u4fe1\u606f\nbaseurl=file:///yumload/ #\u8fd9\u91cc\u586b\u5199\u4ed3\u5e93\u7684url\uff0c\u6ce8\u610f\xa0\u6709\u4e09\u4e2a\u6b63\u659c\u7ebf\nenabled=1 #\u662f\u5426\u5f00\u542f\u4ed3\u5e93\uff0c1\u4e3a\u5f00\u542f\uff0c0\u4e3a\u5173\u95ed\ngpgcheck=0 #\u662f\u5426\u68c0\u67e5gpgkey\uff0c1\u4e3a\u5f00\u542f\uff0c0\u4e3a\u5173\u95ed\n\n# 2.7 \u53e6\u5916\u5982\u679c\u60f3\u8981\u6dfb\u52a0\u8f6f\u4ef6\u5305group\u7684\u4fe1\u606f\uff0c\u53ef\u4ee5\u628aDVD1\u4e2d\u7684repodata\u6587\u4ef6\u4e2d\u7684*-comps.xml\u6587\u4ef6\uff0c\u4f7f\u7528ceraterepo\xa0-g\xa0\u52a0\u8f7d\u672c\u5730\u4ed3\u5e93\u5373\u53ef\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a\n[root@ultraera\xa0repodata]#\xa0createrepo\xa0-g\xa0[\u5b57\u7b26\u53ef\u80fd\u4e0d\u4e00\u6837\uff0c\u540e\u7f00\u6b63\u786e\u5c31\u884c]c6-i386-comps.xml\xa0/yumload/\n\n\n# 2.8 \u5230\u8fd9\u91cc\u672c\u5730yum\u6e90\u5c31\u5df2\u7ecf\u642d\u5efa\u5b8c\u6210\u4e86\uff0c\u63a5\u4e0b\u6765\u91cd\u65b0\u521d\u59cb\u5316yum\u7f13\u5b58\uff1a\n[root@ultraera\xa0repodata]#\xa0yum\xa0clean\xa0all\nLoaded\xa0plugins:\xa0fastestmirror,\xa0refresh-packagekit,\xa0security\nCleaning\xa0repos:\xa0ultraera.org\nCleaning\xa0up\xa0Everything\nCleaning\xa0up\xa0list\xa0of\xa0fastest\xa0mirrors\n[root@ultraera\xa0repodata]#\xa0yum\xa0makecache\nLoaded\xa0plugins:\xa0fastestmirror,\xa0refresh-packagekit,\xa0security\nDetermining\xa0fastest\xa0mirrors\nultraera.org |\xa02.9\xa0kB 00:00\xa0...\nultraera.org/filelists_db |\xa04.9\xa0MB 00:00\xa0...\nultraera.org/primary_db |\xa03.5\xa0MB 00:00\xa0...\nultraera.org/other_db |\xa02.1\xa0MB 00:00\xa0...\nMetadata\xa0Cache\xa0Created\n\n# 2.9 \u6d4b\u8bd5group\u4fe1\u606f\u662f\u5426\u6dfb\u52a0\u6b63\u786e\u53ef\u4ee5\u7528\u5982\u4e0b\u4ee3\u7801\uff0c\u53ea\u8981\u6709\u6b63\u786e\u8f93\u51fa\u4fe1\u606f\u5c31\u8868\u793a\u6210\u529f\u4e86\n[root@ultraera\xa0~]#\xa0yum\xa0grouplist\n\n\n")))}s.isMDXComponent=!0}}]);