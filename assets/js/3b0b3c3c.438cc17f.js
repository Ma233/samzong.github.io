"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[60030],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=i(r),h=a,b=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return r?n.createElement(b,l(l({ref:t},m),{},{components:r})):n.createElement(b,l({ref:t},m))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},86360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={title:"macOs Terminal \u4e09\u5251\u5ba2",tags:["Mac"],categories:["Mac"],url:"https://www.yuque.com/samzong/ap/aof3re"},l=void 0,c={permalink:"/2021/02/15/macos-terminal-san-jian-ke",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2021-02-15-macos-terminal-san-jian-ke.md",source:"@site/blog/2021-02-15-macos-terminal-san-jian-ke.md",title:"macOs Terminal \u4e09\u5251\u5ba2",description:"\u5b89\u88c5 Homebrew",date:"2021-02-15T00:00:00.000Z",formattedDate:"2021\u5e742\u670815\u65e5",tags:[{label:"Mac",permalink:"/tags/mac"}],readingTime:.8566666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"macOs Terminal \u4e09\u5251\u5ba2",tags:["Mac"],categories:["Mac"],url:"https://www.yuque.com/samzong/ap/aof3re"},prevItem:{title:"\u6700\u540e\u7684\u800d\u7334\u4eba",permalink:"/2021/03/10/zui-hou-de-shua-hou-ren"},nextItem:{title:"pprint beautiful json format",permalink:"/2021/02/15/pprint-beautiful-json-format"}},s={authorsImageUrls:[]},i=[{value:"\u5b89\u88c5 Homebrew",id:"\u5b89\u88c5-homebrew",level:3},{value:"\u589e\u52a0 Homebrew \u5b89\u88c5\u56fe\u5f62\u5316\u8f6f\u4ef6\u5e93",id:"\u589e\u52a0-homebrew-\u5b89\u88c5\u56fe\u5f62\u5316\u8f6f\u4ef6\u5e93",level:3},{value:"\u5b89\u88c5 Zsh",id:"\u5b89\u88c5-zsh",level:3},{value:"\u5b89\u88c5 oh-my-zsh",id:"\u5b89\u88c5-oh-my-zsh",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:3}],m={toc:i},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u5b89\u88c5-homebrew"},"\u5b89\u88c5 Homebrew"),(0,a.kt)("p",null,"MacOS \u9996\u5148\u9700\u8981\u5b89\u88c5\u4e0b\u57fa\u7840\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"xcode-select \u2014-install\n")),(0,a.kt)("p",null,"\u6267\u884c\u5b8c\u6210\u4e0a\u4e00\u6b65\u4e4b\u540e\uff0c\u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u5b89\u88c5 Homebrew"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,a.kt)("h3",{id:"\u589e\u52a0-homebrew-\u5b89\u88c5\u56fe\u5f62\u5316\u8f6f\u4ef6\u5e93"},"\u589e\u52a0 Homebrew \u5b89\u88c5\u56fe\u5f62\u5316\u8f6f\u4ef6\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew tap caskroom/cask\n")),(0,a.kt)("p",null,"\u5b89\u88c5 iTerm 2\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u7528\u6765\u5b89\u88c5\u5176\u4ed6\u5f88\u591a\u8f6f\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew cask install iterm2\n")),(0,a.kt)("h3",{id:"\u5b89\u88c5-zsh"},"\u5b89\u88c5 Zsh"),(0,a.kt)("p",null,"\u9996\u5148\u4f7f\u7528 homebrew \u5b89\u88c5\u65b0\u7248\u672c\u7684 zsh\uff0cMac \u81ea\u5e26\u4e86 zsh \u4f46\u662f\u4f7f\u7528\u4f53\u9a8c\u4e0d\u597d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install zsh\n")),(0,a.kt)("p",null,"Mac \u7684\u9ed8\u8ba4 shell \u8fd8\u662f bash\uff0c\u6240\u4ee5\u9700\u8981\u5c06\u5176\u4fee\u6539\u4e3a zsh"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"chsh -s /usr/local/bin/zsh\n")),(0,a.kt)("h3",{id:"\u5b89\u88c5-oh-my-zsh"},"\u5b89\u88c5 oh-my-zsh"),(0,a.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef\uff0c\u8010\u5fc3\u7b49\u5f85"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"\n')),(0,a.kt)("h3",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,a.kt)("p",null,"iTerm \u662f\u4e00\u4e2a\u975e\u5e38\u4f18\u79c0\u548c\u65b9\u4fbf\u7684\u7ec8\u7aef\u5de5\u5177\uff0c\u53ef\u4ee5\u5b9e\u73b0\u975e\u5e38\u591a\u7684\u529f\u80fd\uff0c\u914d\u5408 Google Search \u53ef\u4ee5\u53d1\u6398\u51fa\u975e\u5e38\u591a\u7684\u7528\u6cd5"),(0,a.kt)("p",null,"Ohmyzsh \u662f\u589e\u52a0 Mac \u7ec8\u7aef\u7684\u4e30\u5bcc\u7684\u6307\u4ee4\uff0c\u6709\u5f88\u591a\u4f18\u79c0\u7684\u529f\u80fd\u7b49\u7b49"),(0,a.kt)("p",null,"Homebrew \u662f MacOS \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u547d\u4ee4\u884c\u8f6f\u4ef6\u7ba1\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u505a\u5230\u5f88\u591a\u56fe\u5f62\u5316\u5e94\u7528\u4e0d\u4e00\u5b9a\u80fd\u5b9e\u73b0\u7684\u529f\u80fd"))}u.isMDXComponent=!0}}]);