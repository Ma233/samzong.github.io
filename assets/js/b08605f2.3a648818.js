"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[24948],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return t?n.createElement(f,l(l({ref:r},s),{},{components:t})):n.createElement(f,l({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[m]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34394:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={title:"Dockerfile Run at M1 processor build failed",toc:!0,authors:["samzong"],tags:["Docker"],date:new Date("2022-04-17T20:32:00.000Z")},l=void 0,p={permalink:"/2022/04/17/Docker-Run-at-Apple-Silicon-M1",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2022-04-17-Docker-Run-at-Apple-Silicon-M1.md",source:"@site/blog/2022-04-17-Docker-Run-at-Apple-Silicon-M1.md",title:"Dockerfile Run at M1 processor build failed",description:"Apple M1 processor",date:"2022-04-17T20:32:00.000Z",formattedDate:"2022\u5e744\u670817\u65e5",tags:[{label:"Docker",permalink:"/tags/docker"}],readingTime:.6033333333333334,hasTruncateMarker:!1,authors:[{name:"Samzong Lu",title:"Product Designer",url:"https://github.com/SAMZONG",email:"samzong.lu@gmail.com",imageURL:"https://github.com/SAMZONG.png",key:"samzong"}],frontMatter:{title:"Dockerfile Run at M1 processor build failed",toc:!0,authors:["samzong"],tags:["Docker"],date:"2022-04-17T20:32:00.000Z"},prevItem:{title:"CKA \u8003\u8bd5\u51c6\u5907",permalink:"/2022/04/18/cka-kao-shi-zhun-bei"},nextItem:{title:"python Request install pip error",permalink:"/2022/04/17/python-request-install-pip-error"}},i={authorsImageUrls:[void 0]},c=[{value:"Apple M1 processor",id:"apple-m1-processor",level:2},{value:"pull image error",id:"pull-image-error",level:2},{value:"docker-compose.yml",id:"docker-composeyml",level:3},{value:"\u89e3\u51b3\u601d\u8def",id:"\u89e3\u51b3\u601d\u8def",level:3}],s={toc:c},m="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"apple-m1-processor"},"Apple M1 processor"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528\u4e86 Apple M1 \u7684\u7b14\u8bb0\u672c\u540e\uff0c\u5728 docker \u4f7f\u7528\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898\uff0c\u8fd9\u91cc\u505a\u4e9b\u7b14\u8bb0\u8bb0\u5f55\u4e0b\u6765"),(0,o.kt)("h2",{id:"pull-image-error"},"pull image error"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Error "no matching manifest for linux/arm64/v8 in the manifest list entries"')),(0,o.kt)("p",null,"\u5728\u6211\u5c1d\u8bd5\u60f3\u8981 pull \u4e0b\u6765\u65f6\uff0c\u5f97\u5230\u4e0a\u9762\u7684\u4e00\u4e2a\u9519\u8bef\uff1b\u540c\u6837\u7684\u95ee\u9898\uff0c\u6211\u5728\u7f16\u5199 Dockerfile \u548c docker-compose.yml \u90fd\u9047\u5230\u8fd9\u6837\u7684\u95ee\u9898"),(0,o.kt)("h3",{id:"docker-composeyml"},"docker-compose.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.9'\n\nservices:\n  # Database\n  db:\n    image: mysql-server:5.7\n    volumes:\n      - db_data:/var/lib/mysql\n    restart: always\n    environment:\n      MYSQL_ROOT_PASSWORD: pass\n      MYSQL_DATABASE: wp\n      MYSQL_USER: wp\n      MYSQL_PASSWORD: wp\n    networks:\n      - wpsite    \n")),(0,o.kt)("h3",{id:"\u89e3\u51b3\u601d\u8def"},"\u89e3\u51b3\u601d\u8def"),(0,o.kt)("p",null,"\u9700\u8981\u6307\u5b9a\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"plaform")," \uff0c\u5f53\u6211\u8fd0\u884c\u5728 Apple M1 \u4e0a\uff0c\u53d8\u66f4\u90e8\u5206\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  # Database\n  db:\n    platform: linux/x86_64  # set platform\n    image: mysql-server:5.7\n    ...\n")),(0,o.kt)("p",null,"\u5982\u679c\u53ea\u662f\u5728 docker pull \u65f6\uff0c\u589e\u52a0\u6307\u5b9a\u53c2\u6570\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull --plaform linux/x84_64 mysql-server:5.7\n")))}u.isMDXComponent=!0}}]);