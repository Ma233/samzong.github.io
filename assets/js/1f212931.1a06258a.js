"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[35903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,h=u["".concat(i,".").concat(y)]||u[y]||m[y]||o;return n?r.createElement(h,p(p({ref:t},s),{},{components:n})):r.createElement(h,p({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},78756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Python Version Manage `pyenv`",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/python-version-manage-tool-pyenv"},p=void 0,l={permalink:"/2021/10/19/Python Version Manage `pyenv`",source:"@site/blog/2021-10-19-Python Version Manage `pyenv`.md",title:"Python Version Manage `pyenv`",description:"to\\_url :",date:"2021-10-19T00:00:00.000Z",formattedDate:"2021\u5e7410\u670819\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:1.9033333333333333,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Python Version Manage `pyenv`",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/python-version-manage-tool-pyenv"},prevItem:{title:"Metabase \u8e29\u5751\uff1a\u8df3\u8f6c\u94fe\u63a5\u7684\u6d4f\u89c8\u5668\u7f13\u5b58",permalink:"/2021/11/03/Metabase \u8e29\u5751\uff1a\u8df3\u8f6c\u94fe\u63a5\u7684\u6d4f\u89c8\u5668\u7f13\u5b58"},nextItem:{title:"MacOS 10.15 \u5f00\u542f HiDPI",permalink:"/2021/10/12/MacOS 10.15 \u5f00\u542f HiDPI"}},i={authorsImageUrls:[]},c=[{value:"\u5b89\u88c5 <code>pyenv</code>",id:"\u5b89\u88c5-pyenv",level:2},{value:"\u4f7f\u7528 <code>pyenv</code> \u5b89\u88c5\u7279\u5b9a\u7248\u672c\u7684 python",id:"\u4f7f\u7528-pyenv-\u5b89\u88c5\u7279\u5b9a\u7248\u672c\u7684-python",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"to","_","url : ",(0,a.kt)("a",{parentName:"p",href:"http://pyenv.run/"},"http://pyenv.run/"),"\ngithub offical site ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"https://github.com/pyenv/pyenv"))),(0,a.kt)("p",null,"\u5728 MacOS \u7684\u4f7f\u7528\u65b9\u5f0f\uff1abrew install pyenv"),(0,a.kt)("p",null,"\u4f7f\u7528 pyenv \u8fd8\u662f\u633a\u65b9\u4fbf\u7684\uff0c\u4f46\u662f\u5728 Linux \u4e91\u670d\u52a1\u5668\u4e0a\u914d\u7f6e\u7f51\u7edc\u7684\u8bdd\u5c31\u6bd4\u8f83\u9ebb\u70e6\u4e86\uff0c\u6bd4\u5982\u6211\u5728\u7528\u7684\u963f\u91cc\u4e91 ECS\uff0c\u4e2d\u95f4\u6709\u4e9b\u66f2\u6298\uff0c\u6240\u4ee5\u7f16\u5199\u4e0b\u6587\u6863\u8bb0\u5f55\u4e0b\u6765\uff0c\u4ee5\u9632\u540e\u7eed\u4f7f\u7528\u9047\u5230\u95ee\u9898"),(0,a.kt)("h2",{id:"\u5b89\u88c5-pyenv"},"\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"h2"},"pyenv")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b98\u65b9\u63a8\u8350\ncurl https://pyenv.run | bash\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4e00\u4e2a\u7b80\u5355\u7684\u547d\u4ee4\u5c31\u597d\u4e86\uff0c\u5b89\u88c5\u540e pyenv \u6587\u4ef6 \u4f1a\u5728\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.pyenv")," \uff0c\u53ef\u4ee5\u5c1d\u8bd5\u770b\u4e0b\u811a\u672c\u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u8fd9\u91cc\u7b80\u5355\u8d34\u51fa\u6765\u4e86\uff1b\u53ef\u4ee5\u770b\u5230\u5b9e\u9645\u6267\u884c\u7684\u811a\u672c\u6587\u4ef6\u662f\u4e0b\u9762\u8fd9\u4e2a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5efa\u8bae\u770b\u4e0b\u811a\u672c\ncurl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash\n\n# \u4e0b\u8f7d\u811a\u672c\u6587\u4ef6\nwget https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer -O ~/pyenv-installer\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u670d\u52a1\u5668\u73af\u5883\u6bd4\u8f83\u60b2\u50ac\uff0c\u8bbf\u95ee GitHub \u4e5f\u662f\u6bd4\u8f83\u9ebb\u70e6\uff0c\u90a3\u4e48\u53ef\u4ee5\u770b\u4e0b\u8fd9\u4e2a\u7f51\u7ad9 \xa0",(0,a.kt)("a",{parentName:"p",href:"https://gitclone.com/"},"https://gitclone.com/")," \uff1b\u53ea\u9700\u8981\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"pyenv-installer")," \u8fdb\u884c\u7b80\u5355\u7684\u4fee\u6539\u5c31\u53ef\u4ee5\u5b9e\u73b0\u52a0\u901f\u4e0b\u8f7d\u4e86"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# ......\nif [ -n "${USE_GIT_URI}" ]; then\n  GITHUB="git://github.com"\nelse\n  GITHUB="https://gitclone.com/github.com"\nfi\n\n# .....\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5148\u901a\u8fc7\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"wget")," \u4e0b\u8f7d\u811a\u672c\u6587\u4ef6\uff0c\u7136\u540e\u5bf9\u811a\u672c\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"github.com")," \u7684\u57df\u540d\u8fdb\u884c\u4e0b\u4fee\u6539\uff0c\u6211\u8bd5\u4e86\u4e0b\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"https"),"\u5c31\u884c\u4e86\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u98de\u5feb\u7684\u4e0b\u8f7d\u4e86")),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"pyenv")," \u7684\u521d\u59cb\u5316\u589e\u52a0\u5230\u7cfb\u7edf\u7684\u73af\u5883\u53d8\u91cf\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export PATH=\"$HOME/.pyenv/bin:$PATH\"' >> ~/.bashrc\necho 'eval \"$(pyenv init -)\"' >> ~/.bashrc\necho 'eval \"$(pyenv virtualenv-init -)\"'  >> ~/.bashrc\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528-pyenv-\u5b89\u88c5\u7279\u5b9a\u7248\u672c\u7684-python"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"pyenv")," \u5b89\u88c5\u7279\u5b9a\u7248\u672c\u7684 python"),(0,a.kt)("p",null,"\u5728\u7f51\u7edc\u597d\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"pyenv install 3.9.6")," \u5b89\u88c5\u5bf9\u5e94\u7684\u7248\u672c\u4e86\uff0c\u4f46\u662f\u56e0\u4e3a\u7f51\u7edc\u7684\u95ee\u9898\uff0c\u4f60\u4f1a\u53d1\u73b0\u4e00\u76f4\u5728\u4e0b\u8f7d Python \u5305\u8fd9\u4e00\u6b65\uff0c\u95ee\u9898\u5c31\u662f ",(0,a.kt)("a",{parentName:"p",href:"http://www.python.org/ftp"},"www.python.org/ftp")," \u7f51\u7edc\u7684\u8bbf\u95ee\u95ee\u9898"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1630846711398-96703bab-2e76-4f74-8b6d-1dfa212d39b1.jpeg?x-oss-process=image/resize,w_960,m_lfit",alt:"image"})),(0,a.kt)("p",null,"\u9047\u5230\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u5c1d\u8bd5 \u5148\u4e0b\u8f7d\u5bf9\u5e94\u7248\u672c\u7684\u5b89\u88c5\u5305\uff1b\u53ef\u4ee5\u4f7f\u7528\u56fd\u5185\u7684\u955c\u50cf\u7ad9\u8fdb\u884c\u4e0b\u8f7d\uff0c\u6216\u8005\u5728\u7f51\u7edc\u8bbf\u95ee\u6b63\u5e38\u7684\u5730\u65b9\u8fdb\u884c\u4e0b\u8f7d\u5305\uff0c\u7136\u540e\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e2d\uff0c\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528 \u6dd8\u5b9d\u7684\u955c\u50cf\u7ad9\uff0c\u628a\u57df\u540d\u4e2d ",(0,a.kt)("a",{parentName:"p",href:"https://www.python.org/ftp"},"https://www.python.org/ftp")," \u66ff\u6362\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"https://npm.taobao.org/mirrors/"},"https://npm.taobao.org/mirrors/")," \uff0c\u4e0b\u8f7d\u5230\u6307\u5b9a\u7684\u76ee\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# v = \u4f60\u60f3\u8981\u5b89\u88c5\u7684python\u7248\u672c\uff0c\u6bd4\u5982 3.8.6\nexport v=3.8.6;  mkdir -p ~/.pyenv/sources/$v; wget https://npm.taobao.org/mirrors/python/$v/Python-$v.tar.xz -P ~/.pyenv/sources/$v; pyenv install $v -k\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1630846711423-9636d877-a9a2-4c9e-8cac-f82aaa3ff5b6.jpeg?x-oss-process=image/resize,w_960,m_lfit",alt:"image"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728 pyenv \u547d\u4ee4\u7684\u6700\u540e\u589e\u52a0\u4e00\u4e2a -k \xa0\u4f1a\u5728\u5b89\u88c5\u65f6\uff0c\u4f18\u5148\u68c0\u6d4b\u672c\u5730\u7684\u6587\u4ef6")))}m.isMDXComponent=!0}}]);