"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[40734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),y=l,d=p["".concat(s,".").concat(y)]||p[y]||m[y]||r;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},61103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={title:"MySQL \u547d\u4ee4\u884c\u8f85\u52a9 mycli",tags:["MySQL"],date:new Date("2019-07-03T13:17:04.000Z")},i=void 0,o={permalink:"/2019/07/03/mysql-ming-ling-xing-fu-zhu-mycli",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2019-07-03-mysql-ming-ling-xing-fu-zhu-mycli.md",source:"@site/blog/2019-07-03-mysql-ming-ling-xing-fu-zhu-mycli.md",title:"MySQL \u547d\u4ee4\u884c\u8f85\u52a9 mycli",description:"Install",date:"2019-07-03T13:17:04.000Z",formattedDate:"2019\u5e747\u67083\u65e5",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],readingTime:.7133333333333334,hasTruncateMarker:!1,authors:[],frontMatter:{title:"MySQL \u547d\u4ee4\u884c\u8f85\u52a9 mycli",tags:["MySQL"],date:"2019-07-03T13:17:04.000Z"},prevItem:{title:"Mac \u4e0b Homebrew \u7684\u4f7f\u7528",permalink:"/2019/07/22/mac-xia-homebrew-de-shi-yong"},nextItem:{title:"MacTips \u5982\u4f55\u5feb\u901f\u5f55\u5236 GiF \u5c0f\u89c6\u9891",permalink:"/2019/01/22/mac-ru-he-kuai-su-lu-zhi-gif-xiao-shi-pin"}},s={authorsImageUrls:[]},c=[{value:"Install",id:"install",level:5},{value:"Python Package",id:"python-package",level:6},{value:"Install Error QA",id:"install-error-qa",level:5},{value:"Fix code",id:"fix-code",level:6}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h5",{id:"install"},"Install"),(0,l.kt)("p",null,"Mycli is tested on macOS and Linux. It runs on Python 2.7 and 3.4+."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: Python 2.6 support was dropped in mycli 1.9.0. If you're running Python 2.6, you'll want to install mycli 1.8.1.")),(0,l.kt)("h6",{id:"python-package"},"Python Package"),(0,l.kt)("p",null,"If you already know how to install python packages, then you can do:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You might need sudo.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pip install mycli\nor\n$ easy_install mycli\n\n# Windows:\n# Follow the instructions on this blogpost to install mycli on Windows:  https://www.codewall.co.uk/installing-using-mycli-on-windows/\n\n# macOS:\n#The easiest way install mycli on a Mac is to use Homebrew.\n$ brew install mycli\n\n\n# Linux:\n# Debian/Ubuntu Package:\n# https://packages.debian.org/search?keywords=mycli\n$ sudo apt-get update\n$ sudo apt-get install mycli\n\n# Fedora\n$ sudo dnf install mycli\n\n\n# RHEL, Centos:\n# We don't have packages for RHEL or Centos, yet. Instead, use pip to install mycli. You can install pip on your system using:\n$ sudo yum install python-pip python-devel\n# Once that is installed, you can install mycli:\n$ sudo pip install mycli\n")),(0,l.kt)("h5",{id:"install-error-qa"},"Install Error QA"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Cannot uninstall 'configobj'. It is a distutils installed project and thus we cannot accurately determine which files belong to it which would lead to only a partial uninstall.\n")),(0,l.kt)("h6",{id:"fix-code"},"Fix code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --ignore-installed mycli\n")))}m.isMDXComponent=!0}}]);