"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[63008],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,y=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"MacTips \u89e3\u51b3 oh-my-zsh \u5728 Terminal \u4e0b\u6253\u5f00\u7f13\u6162",tags:["Mac"],date:new Date("2016-04-08T16:12:30.000Z")},l=void 0,c={permalink:"/2016/04/08/Mac-2-\u89e3\u51b3oh-my-zsh\u5728\u7ec8\u7aef\u4e0b\u6253\u5f00\u7f13\u6162",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2016-04-08-Mac-2-\u89e3\u51b3oh-my-zsh\u5728\u7ec8\u7aef\u4e0b\u6253\u5f00\u7f13\u6162.md",source:"@site/blog/2016-04-08-Mac-2-\u89e3\u51b3oh-my-zsh\u5728\u7ec8\u7aef\u4e0b\u6253\u5f00\u7f13\u6162.md",title:"MacTips \u89e3\u51b3 oh-my-zsh \u5728 Terminal \u4e0b\u6253\u5f00\u7f13\u6162",description:"\u5347\u7ea7 Mac OS X 10.11 \u4e4b\u540e\uff0c\u4f7f\u7528 CleanMyMac 3 \u6e05\u7406 9GB \u7684\u5783\u573e\u6587\u4ef6\uff0c\u4e4b\u540e\u5bfc\u81f4\u6253\u5f00 iTerm \u65f6\u52a0\u8f7d\u4e3b\u673a\u540d\u7279\u522b\u7684\u6162\uff0cMac \u7684\u547d\u4ee4\u884c\u5de5\u5177\u6211\u4f7f\u7528\u7684\u662f iTerm\uff0bohmyzsh\uff0c\u8fd9\u4e2a\u95ee\u9898\u56f0\u6270\u4e86\u6211\u5feb\u4e24\u4e2a\u6708\uff0c\u5de5\u4f5c\u6bd4\u8f83\u5fd9\uff0c\u6240\u4ee5\u4e00\u76f4\u7528 Zoc \u4ee3\u66ff\uff0c\u4e5f\u6ca1\u6709\u8ba4\u771f\u7684\u7814\u7a76\uff0c\u6700\u8fd1\u6709\u9700\u6c42\u7528\u5230\u5b83\uff0c\u5b9e\u5728\u4e0d\u884c\uff0c\u7814\u7a76\u4e00\u4e0b\uff0c\u53d1\u73b0\uff0c\u662f\u56e0\u4e3a\u6211\u6e05\u7406\u7cfb\u7edf\u7684\u65f6\u5019\u628a\u7ec8\u7aef\u65e5\u5fd7\u7684\u7d22\u5f15\u6587\u4ef6\u6e05\u7406\u6389\u4e86\uff0c\u6240\u4ee5\u6bcf\u6b21\u6253\u5f00\u7684\u65f6\u5019\u90fd\u8981\u5148\u52a0\u8f7d\u7d22\u5f15\u5bfc\u81f4\u4e86\u9996\u6b21\u5f00\u542f\u975e\u5e38\u6162\uff0c\u89e3\u51b3\u529e\u6cd5\u662f\uff0c\u53ea\u8981\u628a\u7ec8\u7aef\u7f13\u5b58\u7684\u65e5\u5fd7\u6587\u4ef6\u5220\u9664\u5373\u53ef\uff1a",date:"2016-04-08T16:12:30.000Z",formattedDate:"2016\u5e744\u67088\u65e5",tags:[{label:"Mac",permalink:"/tags/mac"}],readingTime:.7366666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"MacTips \u89e3\u51b3 oh-my-zsh \u5728 Terminal \u4e0b\u6253\u5f00\u7f13\u6162",tags:["Mac"],date:"2016-04-08T16:12:30.000Z"},prevItem:{title:"MacTips \u8c03\u6574 Launchpad \u56fe\u6807\u5927\u5c0f",permalink:"/2016/04/09/Mac-1-\u8c03\u6574Launchpad\u56fe\u6807\u5927\u5c0f"},nextItem:{title:"\u5982\u4f55\u5728 CentOS 6 \u5b89\u88c5\u66f4\u9ad8\u7248\u672c\u7684 PHP",permalink:"/2016/04/01/\u5982\u4f55\u5728CentOS-6-\u5b89\u88c5\u66f4\u9ad8\u7248\u672c\u7684PHP"}},i={authorsImageUrls:[]},s=[],p={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5347\u7ea7 Mac OS X 10.11 \u4e4b\u540e\uff0c\u4f7f\u7528 CleanMyMac 3 \u6e05\u7406 9GB \u7684\u5783\u573e\u6587\u4ef6\uff0c\u4e4b\u540e\u5bfc\u81f4\u6253\u5f00 iTerm \u65f6\u52a0\u8f7d\u4e3b\u673a\u540d\u7279\u522b\u7684\u6162\uff0cMac \u7684\u547d\u4ee4\u884c\u5de5\u5177\u6211\u4f7f\u7528\u7684\u662f iTerm\uff0bohmyzsh\uff0c\u8fd9\u4e2a\u95ee\u9898\u56f0\u6270\u4e86\u6211\u5feb\u4e24\u4e2a\u6708\uff0c\u5de5\u4f5c\u6bd4\u8f83\u5fd9\uff0c\u6240\u4ee5\u4e00\u76f4\u7528 Zoc \u4ee3\u66ff\uff0c\u4e5f\u6ca1\u6709\u8ba4\u771f\u7684\u7814\u7a76\uff0c\u6700\u8fd1\u6709\u9700\u6c42\u7528\u5230\u5b83\uff0c\u5b9e\u5728\u4e0d\u884c\uff0c\u7814\u7a76\u4e00\u4e0b\uff0c\u53d1\u73b0\uff0c\u662f\u56e0\u4e3a\u6211\u6e05\u7406\u7cfb\u7edf\u7684\u65f6\u5019\u628a\u7ec8\u7aef\u65e5\u5fd7\u7684\u7d22\u5f15\u6587\u4ef6\u6e05\u7406\u6389\u4e86\uff0c\u6240\u4ee5\u6bcf\u6b21\u6253\u5f00\u7684\u65f6\u5019\u90fd\u8981\u5148\u52a0\u8f7d\u7d22\u5f15\u5bfc\u81f4\u4e86\u9996\u6b21\u5f00\u542f\u975e\u5e38\u6162\uff0c\u89e3\u51b3\u529e\u6cd5\u662f\uff0c\u53ea\u8981\u628a\u7ec8\u7aef\u7f13\u5b58\u7684\u65e5\u5fd7\u6587\u4ef6\u5220\u9664\u5373\u53ef\uff1a"),(0,a.kt)("p",null,"\u4ee3\u7801\u5757\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u65e5\u5fd7\u6587\u4ef6\u8def\u5f84\n# /private/var/log/asl/*.asl\n\n\u279c  ~ sudo du -sh /private/var/log/asl/\nPassword:\n2.7G /private/var/log/asl/\n\n\u279c  ~ sudo rm -rf /private/var/log/asl/*.asl\n\u279c  ~ sudo du -sh /private/var/log/asl/\n208M /private/var/log/asl/\n\n")),(0,a.kt)("p",null,"\u5173\u95ed\u7ec8\u7aef\uff0c\u518d\u6b21\u6253\u5f00\uff0c\u95ee\u9898\u89e3\u51b3\u3002"))}u.isMDXComponent=!0}}]);