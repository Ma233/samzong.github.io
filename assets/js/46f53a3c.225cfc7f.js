"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[29338],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,g=u["".concat(o,".").concat(h)]||u[h]||m[h]||i;return a?n.createElement(g,s(s({ref:t},c),{},{components:a})):n.createElement(g,s({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},90430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"\u4f7f\u7528 SoureceTree \u7ba1\u7406\u4f60\u7684 git \u9879\u76ee",tags:["Git"],date:new Date("2016-04-20T21:31:49.000Z")},s=void 0,l={permalink:"/2016/04/20/shi-yong-sourecetree-guan-li-ni-de-git-xiang-mu",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2016-04-20-shi-yong-sourecetree-guan-li-ni-de-git-xiang-mu.md",source:"@site/blog/2016-04-20-shi-yong-sourecetree-guan-li-ni-de-git-xiang-mu.md",title:"\u4f7f\u7528 SoureceTree \u7ba1\u7406\u4f60\u7684 git \u9879\u76ee",description:"Update",date:"2016-04-20T21:31:49.000Z",formattedDate:"2016\u5e744\u670820\u65e5",tags:[{label:"Git",permalink:"/tags/git"}],readingTime:2.9,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u4f7f\u7528 SoureceTree \u7ba1\u7406\u4f60\u7684 git \u9879\u76ee",tags:["Git"],date:"2016-04-20T21:31:49.000Z"},prevItem:{title:"HowTo Install piwik with nginx on centos 6.x",permalink:"/2016/04/27/HowTo-Install-piwik-with-nginx-on-centos-6-x"},nextItem:{title:"MacTips \u8c03\u6574 Launchpad \u56fe\u6807\u5927\u5c0f",permalink:"/2016/04/09/mac-1-tiao-zheng-launchpad-tu-biao-da-xiao"}},o={authorsImageUrls:[]},p=[{value:"Update",id:"update",level:2},{value:"\u8865\u5145 1\uff1aGit \u5b66\u4e60\u7f51\u7ad9",id:"\u8865\u5145-1git-\u5b66\u4e60\u7f51\u7ad9",level:3},{value:"\u8865\u5145 2\uff1a\u5229\u7528 Git \u534f\u540c\u5f00\u53d1",id:"\u8865\u5145-2\u5229\u7528-git-\u534f\u540c\u5f00\u53d1",level:3},{value:"\u5173\u4e8e SourceTree",id:"\u5173\u4e8e-sourcetree",level:2},{value:"git \u5e10\u53f7\u5efa\u7acb",id:"git-\u5e10\u53f7\u5efa\u7acb",level:2},{value:"\u65b0\u5458\u5de5\u5165\u804c\u4e4b\u540e\uff0c\u4f60\u7684\u516c\u53f8\u90ae\u7bb1\u5185\u4f1a\u6536\u5230\u4e00\u5c01\u6765\u81ea Gitlab \u7684\u90ae\u4ef6\uff0c\u5982\u4e0b\u56fe",id:"\u65b0\u5458\u5de5\u5165\u804c\u4e4b\u540e\u4f60\u7684\u516c\u53f8\u90ae\u7bb1\u5185\u4f1a\u6536\u5230\u4e00\u5c01\u6765\u81ea-gitlab-\u7684\u90ae\u4ef6\u5982\u4e0b\u56fe",level:3},{value:"\u70b9\u51fb\u90ae\u4ef6\u4e2d\u7684\u201cClick here to set your password\u201d\uff0c\u8bbe\u7f6e gitlab \u767b\u9646\u5bc6\u7801",id:"\u70b9\u51fb\u90ae\u4ef6\u4e2d\u7684click-here-to-set-your-password\u8bbe\u7f6e-gitlab-\u767b\u9646\u5bc6\u7801",level:3},{value:"\u767b\u9646 gitlab \u5e10\u53f7\uff0c\u5c06\u4f1a\u51fa\u73b0\u8fd9\u4e2a\u754c\u9762",id:"\u767b\u9646-gitlab-\u5e10\u53f7\u5c06\u4f1a\u51fa\u73b0\u8fd9\u4e2a\u754c\u9762",level:3},{value:"\u8bbe\u5b9a\u4e2a\u4eba\u4fe1\u606f",id:"\u8bbe\u5b9a\u4e2a\u4eba\u4fe1\u606f",level:3},{value:"sshKey",id:"sshkey",level:3},{value:"\u5728 Linux \u548c Mac \u4e0a\u751f\u6210 sshkey",id:"\u5728-linux-\u548c-mac-\u4e0a\u751f\u6210-sshkey",level:4},{value:"5.2 \u5728 Windows \u4e0a\u751f\u6210 sshkey",id:"52-\u5728-windows-\u4e0a\u751f\u6210-sshkey",level:4},{value:"\u56e0\u4e3a windows \u6ca1\u6709\u81ea\u5e26 openssl \u6a21\u5757\uff0c\u6240\u4ee5\u5728 Windows \u73af\u5883\u4e2d\u4f7f\u7528\u7b2c\u4e09\u65b9\u5de5\u5177 puttygen.exe \u751f\u6210 sshkey \u4e0b\u8f7d\u5730\u5740",id:"\u56e0\u4e3a-windows-\u6ca1\u6709\u81ea\u5e26-openssl-\u6a21\u5757\u6240\u4ee5\u5728-windows-\u73af\u5883\u4e2d\u4f7f\u7528\u7b2c\u4e09\u65b9\u5de5\u5177-puttygenexe-\u751f\u6210-sshkey-\u4e0b\u8f7d\u5730\u5740",level:4},{value:"\u6b65\u9aa4\u5982\u4e0b",id:"\u6b65\u9aa4\u5982\u4e0b",level:4},{value:"\u5f53 sourcetree \u9996\u6b21\u542f\u52a8\u65f6\uff0c\u4f1a\u5f39\u51fa\u52a0\u8f7d sshkey \u7684\u63d0\u793a\uff0c\u6309\u63d0\u793a\u64cd\u4f5c\uff0c\u627e\u5230\u4e4b\u524d\u4fdd\u5b58\u7684 private.ppk \u6587\u4ef6",id:"\u5f53-sourcetree-\u9996\u6b21\u542f\u52a8\u65f6\u4f1a\u5f39\u51fa\u52a0\u8f7d-sshkey-\u7684\u63d0\u793a\u6309\u63d0\u793a\u64cd\u4f5c\u627e\u5230\u4e4b\u524d\u4fdd\u5b58\u7684-privateppk-\u6587\u4ef6",level:4},{value:"5.3 \u4e0a\u4f20 sshkey",id:"53-\u4e0a\u4f20-sshkey",level:4},{value:"6. \u56de\u5230 dashboard\uff0c\u70b9\u51fb\u9879\u76ee\u540d\u79f0\u8fdb\u5165\u8be6\u60c5",id:"6-\u56de\u5230-dashboard\u70b9\u51fb\u9879\u76ee\u540d\u79f0\u8fdb\u5165\u8be6\u60c5",level:3},{value:"7. \u4f7f\u7528 souretree \u5c06\u9879\u76ee\u4ece git \u670d\u52a1\u5668 clone \u5230\u672c\u5730",id:"7-\u4f7f\u7528-souretree-\u5c06\u9879\u76ee\u4ece-git-\u670d\u52a1\u5668-clone-\u5230\u672c\u5730",level:3},{value:"7.1 \u5b89\u88c5 souretree \u8f6f\u4ef6 \uff3b\u7565\uff3d",id:"71-\u5b89\u88c5-souretree-\u8f6f\u4ef6-\u7565",level:4},{value:"7.2 clone \u9879\u76ee\u5230\u672c\u5730",id:"72-clone-\u9879\u76ee\u5230\u672c\u5730",level:4},{value:"8. \u8fdb\u5165\u9879\u76ee\u5de5\u4f5c\u53f0",id:"8-\u8fdb\u5165\u9879\u76ee\u5de5\u4f5c\u53f0",level:3},{value:"9. \u5173\u4e8e sourcetree \u5de5\u5177\u7684\u4f7f\u7528\uff0c\u4e0b\u9762\u662f\u4e00\u4e9b git \u64cd\u4f5c\u7684\u91ca\u7591",id:"9-\u5173\u4e8e-sourcetree-\u5de5\u5177\u7684\u4f7f\u7528\u4e0b\u9762\u662f\u4e00\u4e9b-git-\u64cd\u4f5c\u7684\u91ca\u7591",level:4}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"update"},"Update"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"update: Windows \u7528\u6237\u5728\u521d\u59cb\u5316 Souretree \u5de5\u5177\u65f6\uff0c\u9700\u8981\u7528\u5230 Atlassian ID\uff0c\u65b0\u5efa\u7528\u6237\u65f6\u9700\u8981\u52a0\u8f7d google \u9a8c\u8bc1\u7801\uff0c\u8fd9\u4e00\u6b65\u9700\u8981 VPN \u7684\u652f\u6301\uff0c\u8bf7\u6ce8\u610f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u627e\u5230\u4e00\u4e2a\u7248\u672c\u7684 SourceTree \u5de5\u5177\u53ef\u4ee5\u4e0d\u9700\u8981\u4ee5\u4e0a\u9a8c\u8bc1\u4e5f\u80fd\u4f7f\u7528\uff0c\u4e0b\u8f7d\u94fe\u63a5\uff1a",(0,r.kt)("a",{parentName:"li",href:"http://pan.baidu.com/s/1eRDMgEY"},"SourceTreeSetup_1.6.14.exe")," \u5bc6\u7801\uff1ac5l4")),(0,r.kt)("h3",{id:"\u8865\u5145-1git-\u5b66\u4e60\u7f51\u7ad9"},"\u8865\u5145 1\uff1aGit \u5b66\u4e60\u7f51\u7ad9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"http://backlogtool.com/git-guide/cn/"},"\u7334\u5b50\u90fd\u80fd\u5b66\u4f1a\u7684 git \u6559\u7a0b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html"},"\u5e38\u7528 Git \u547d\u4ee4\u6e05\u5355")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000"},"\u5ed6\u96ea\u5cf0\u7684 git \u6559\u7a0b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"http://zoomq.qiniudn.com/ZQScrapBook/ZqFLOSS/data/20081210180347/"},"Why Git is Better than X"))),(0,r.kt)("h3",{id:"\u8865\u5145-2\u5229\u7528-git-\u534f\u540c\u5f00\u53d1"},"\u8865\u5145 2\uff1a\u5229\u7528 Git \u534f\u540c\u5f00\u53d1"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://ourai.ws/posts/working-with-git-in-team/"},"\u56e2\u961f\u4e2d\u7684 Git \u5b9e\u8df5")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2015/08/git-use-process.html"},"Git \u4f7f\u7528\u89c4\u8303\u6d41\u7a0b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"http://nvie.com/files/Git-branching-model.pdf"},"Git \u5206\u652f\u7ba1\u7406\u6a21\u578b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html"},"\u56fe\u89e3 Git"))),(0,r.kt)("h2",{id:"\u5173\u4e8e-sourcetree"},"\u5173\u4e8e SourceTree"),(0,r.kt)("p",null,"SourceTree \u662f\u4e00\u6b3e\u514d\u8d39\u4e14\u540c\u65f6\u652f\u6301 Windows \u548c Mac \u7684 git \u9879\u76ee\u7ba1\u7406\u8f6f\u4ef6\uff0c\u672c\u6587\u65e8\u5728\u7ed9\u5927\u5bb6\u4ecb\u7ecd\u8fd9\u6b3e\u5e94\u7528\u7684\u57fa\u7840\u4f7f\u7528\uff0c\u5e76\u7528\u5b83\u6765\u7ba1\u7406\u4f60\u7684\u9879\u76ee"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b98\u7f51\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://www.sourcetreeapp.com/"},"https://www.sourcetreeapp.com/"))),(0,r.kt)("h2",{id:"git-\u5e10\u53f7\u5efa\u7acb"},"git \u5e10\u53f7\u5efa\u7acb"),(0,r.kt)("h3",{id:"\u65b0\u5458\u5de5\u5165\u804c\u4e4b\u540e\u4f60\u7684\u516c\u53f8\u90ae\u7bb1\u5185\u4f1a\u6536\u5230\u4e00\u5c01\u6765\u81ea-gitlab-\u7684\u90ae\u4ef6\u5982\u4e0b\u56fe"},"\u65b0\u5458\u5de5\u5165\u804c\u4e4b\u540e\uff0c\u4f60\u7684\u516c\u53f8\u90ae\u7bb1\u5185\u4f1a\u6536\u5230\u4e00\u5c01\u6765\u81ea Gitlab \u7684\u90ae\u4ef6\uff0c\u5982\u4e0b\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://samzong.oss-cn-shenzhen.aliyuncs.com/2016%2F04%2Fsourcetree02.jpg",alt:"image"})),(0,r.kt)("h3",{id:"\u70b9\u51fb\u90ae\u4ef6\u4e2d\u7684click-here-to-set-your-password\u8bbe\u7f6e-gitlab-\u767b\u9646\u5bc6\u7801"},"\u70b9\u51fb\u90ae\u4ef6\u4e2d\u7684\u201cClick here to set your password\u201d\uff0c\u8bbe\u7f6e gitlab \u767b\u9646\u5bc6\u7801"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://samzong.oss-cn-shenzhen.aliyuncs.com/2016%2F04%2Fsouretree03.jpg",alt:"image"})),(0,r.kt)("h3",{id:"\u767b\u9646-gitlab-\u5e10\u53f7\u5c06\u4f1a\u51fa\u73b0\u8fd9\u4e2a\u754c\u9762"},"\u767b\u9646 gitlab \u5e10\u53f7\uff0c\u5c06\u4f1a\u51fa\u73b0\u8fd9\u4e2a\u754c\u9762"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://samzong.oss-cn-shenzhen.aliyuncs.com/2016%2F04%2Fsourcetree05.jpg",alt:"image"})),(0,r.kt)("h3",{id:"\u8bbe\u5b9a\u4e2a\u4eba\u4fe1\u606f"},"\u8bbe\u5b9a\u4e2a\u4eba\u4fe1\u606f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://samzong.oss-cn-shenzhen.aliyuncs.com/2016%2F04%2Fsouretree06.jpg",alt:"image"})),(0,r.kt)("h3",{id:"sshkey"},"sshKey"),(0,r.kt)("h4",{id:"\u5728-linux-\u548c-mac-\u4e0a\u751f\u6210-sshkey"},"\u5728 Linux \u548c Mac \u4e0a\u751f\u6210 sshkey"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  ~ ssh-keygen -t rsa\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/Users/Alex/.ssh/id_rsa):\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in /Users/Alex/.ssh/id_rsa.\nYour public key has been saved in /Users/Alex/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:98jE3jhBhFT5nQlZRj34a3WOk1t6XF+Dbf/hliXl4WQ Alex@Alex-Mac\nThe key's randomart image is:\n+---[RSA 2048]----+\n|       ..oo. +=. |\n|        ... oo ..|\n|          .. o.o.|\n|         o  . +E+|\n|        S =   **=|\n|         = * .=BB|\n|          * o oOO|\n|           .  +o*|\n|              .oo|\n+----[SHA256]-----+\n\u279c  ~ cat ~/.ssh/id_rsa.pub\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCvuQAq65b+nLZPqqc3b3Mj9e7Pt8oWKasJFa2QH1VIEkDvxKLFGcHsT7Ur4zXwEi9YiW2tVRrBSjcMALxuBjVm2IxYV6Lk8SLuGadyYy5telWGJmHsQ3VIPRuKwpzTkLN643kjqc6JFSlnZG/XoP9SPtCOsp2ql4u0s7Auc2bZay4RaTDXbcpJVU9OA0xM8Zy4oTTNYdZ4tvGittVmn+wLrhN255J7clORF5126dmDYxV3E8ZboaDdQpdLGIWmDNcBJQvl0CLwpKUCi7EUDqDVtm4bNgwIX9fEIkTxGdaWjBW1iXBk8TGXWkgB+Qp8B1IwaJ4GHUwUhQrefWvw9XeJ Alex@Alex-Mac\n\u279c  ~\n")),(0,r.kt)("h4",{id:"52-\u5728-windows-\u4e0a\u751f\u6210-sshkey"},"5.2 \u5728 Windows \u4e0a\u751f\u6210 sshkey"),(0,r.kt)("h4",{id:"\u56e0\u4e3a-windows-\u6ca1\u6709\u81ea\u5e26-openssl-\u6a21\u5757\u6240\u4ee5\u5728-windows-\u73af\u5883\u4e2d\u4f7f\u7528\u7b2c\u4e09\u65b9\u5de5\u5177-puttygenexe-\u751f\u6210-sshkey-\u4e0b\u8f7d\u5730\u5740"},"\u56e0\u4e3a windows \u6ca1\u6709\u81ea\u5e26 openssl \u6a21\u5757\uff0c\u6240\u4ee5\u5728 Windows \u73af\u5883\u4e2d\u4f7f\u7528\u7b2c\u4e09\u65b9\u5de5\u5177 puttygen.exe \u751f\u6210 sshkey ",(0,r.kt)("a",{parentName:"h4",href:"http://the.earth.li/~sgtatham/putty/0.67/x86/puttygen.exe"},"\u4e0b\u8f7d\u5730\u5740")),(0,r.kt)("h4",{id:"\u6b65\u9aa4\u5982\u4e0b"},"\u6b65\u9aa4\u5982\u4e0b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://samzong.oss-cn-shenzhen.aliyuncs.com/2016%2F04%2Fsourcetree13.jpg",alt:"image"}),"\n",(0,r.kt)("img",{parentName:"p",src:"http://samzong.oss-cn-shenzhen.aliyuncs.com/2016%2F04%2Fsourcetree14.jpg",alt:"image"}),"\n",(0,r.kt)("img",{parentName:"p",src:"http://samzong.oss-cn-shenzhen.aliyuncs.com/2016%2F04%2Fsourcetree15.jpg",alt:"image"})),(0,r.kt)("h4",{id:"\u5f53-sourcetree-\u9996\u6b21\u542f\u52a8\u65f6\u4f1a\u5f39\u51fa\u52a0\u8f7d-sshkey-\u7684\u63d0\u793a\u6309\u63d0\u793a\u64cd\u4f5c\u627e\u5230\u4e4b\u524d\u4fdd\u5b58\u7684-privateppk-\u6587\u4ef6"},"\u5f53 sourcetree \u9996\u6b21\u542f\u52a8\u65f6\uff0c\u4f1a\u5f39\u51fa\u52a0\u8f7d sshkey \u7684\u63d0\u793a\uff0c\u6309\u63d0\u793a\u64cd\u4f5c\uff0c\u627e\u5230\u4e4b\u524d\u4fdd\u5b58\u7684 private.ppk \u6587\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://samzong.oss-cn-shenzhen.aliyuncs.com/2016%2F04%2Fsourcetree12.jpg",alt:"image"})),(0,r.kt)("h4",{id:"53-\u4e0a\u4f20-sshkey"},"5.3 \u4e0a\u4f20 sshkey"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://samzong.oss-cn-shenzhen.aliyuncs.com/2016%2F04%2Fsourcetree07.jpg",alt:"image"})),(0,r.kt)("h3",{id:"6-\u56de\u5230-dashboard\u70b9\u51fb\u9879\u76ee\u540d\u79f0\u8fdb\u5165\u8be6\u60c5"},"6. \u56de\u5230 dashboard\uff0c\u70b9\u51fb\u9879\u76ee\u540d\u79f0\u8fdb\u5165\u8be6\u60c5"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://samzong.oss-cn-shenzhen.aliyuncs.com/2016%2F04%2Fsourcetree08.jpg",alt:"image"})),(0,r.kt)("h3",{id:"7-\u4f7f\u7528-souretree-\u5c06\u9879\u76ee\u4ece-git-\u670d\u52a1\u5668-clone-\u5230\u672c\u5730"},"7. \u4f7f\u7528 souretree \u5c06\u9879\u76ee\u4ece git \u670d\u52a1\u5668 clone \u5230\u672c\u5730"),(0,r.kt)("h4",{id:"71-\u5b89\u88c5-souretree-\u8f6f\u4ef6-\u7565"},"7.1 \u5b89\u88c5 souretree \u8f6f\u4ef6 \uff3b\u7565\uff3d"),(0,r.kt)("h4",{id:"72-clone-\u9879\u76ee\u5230\u672c\u5730"},"7.2 clone \u9879\u76ee\u5230\u672c\u5730"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://samzong.oss-cn-shenzhen.aliyuncs.com/2016%2F04%2Fsourcetree09.jpg",alt:"image"}),"\n",(0,r.kt)("img",{parentName:"p",src:"http://samzong.oss-cn-shenzhen.aliyuncs.com/2016%2F04%2Fsourcetree10.jpg",alt:"image"})),(0,r.kt)("h3",{id:"8-\u8fdb\u5165\u9879\u76ee\u5de5\u4f5c\u53f0"},"8. \u8fdb\u5165\u9879\u76ee\u5de5\u4f5c\u53f0"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://samzong.oss-cn-shenzhen.aliyuncs.com/2016%2F04%2Fsourcetree11.jpg",alt:"image"})),(0,r.kt)("h4",{id:"9-\u5173\u4e8e-sourcetree-\u5de5\u5177\u7684\u4f7f\u7528\u4e0b\u9762\u662f\u4e00\u4e9b-git-\u64cd\u4f5c\u7684\u91ca\u7591"},"9. \u5173\u4e8e sourcetree \u5de5\u5177\u7684\u4f7f\u7528\uff0c\u4e0b\u9762\u662f\u4e00\u4e9b git \u64cd\u4f5c\u7684\u91ca\u7591"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u68c0\u51fa\u4ed3\u5e93\uff1a\u5c06\u5728\u672c\u5730\u521b\u5efa\u4e00\u4e2a git \u4ed3\u5e93\u7684\u514b\u9686\u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u6d41\uff1a\u672c\u5730\u4ed3\u5e93\u7531 git \u7ef4\u62a4\u7684\u4e09\u68f5\u201c\u6811\u201d\u7ec4\u6210\u3002\u7b2c\u4e00\u4e2a\u662f \u5de5\u4f5c\u76ee\u5f55\uff0c\u5b83\u6301\u6709\u5b9e\u9645\u6587\u4ef6\uff1b\u7b2c\u4e8c\u4e2a\u662f \u7f13\u5b58\u533a\uff08Index\uff09\uff0c\u5b83\u50cf\u4e2a\u7f13\u5b58\u533a\u57df\uff0c\u4e34\u65f6\u4fdd\u5b58\u6539\u52a8\uff1b\u6700\u540e\u662f HEAD\uff0c\u6307\u5411\u6700\u8fd1\u4e00\u6b21\u63d0\u4ea4\u540e\u7684\u7ed3\u679c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\uff1a\u53ef\u4ee5\u8ba1\u5212\u6539\u52a8\uff08\u628a\u5b83\u4eec\u6dfb\u52a0\u5230\u7f13\u5b58\u533a),\u5c06\u6539\u52a8\u63d0\u4ea4\u5230\u4e86 HEAD\uff0c\u4f46\u662f\u8fd8\u6ca1\u5230\u63d0\u4ea4\u5230\u8fdc\u7aef\u4ed3\u5e93\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u62c9\u53d6\uff1a\u4ece\u8fdc\u7aef\u4ed3\u5e93\u62c9\u53d6\u6700\u65b0\u7248\u672c\u72b6\u6001\uff0c\u7279\u522b\u662f\u5728\u5176\u4ed6\u4eba\u5458\u6709\u6240\u6539\u52a8\u4e4b\u540e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63a8\u9001\uff1a\u6539\u52a8\u73b0\u5728\u5df2\u7ecf\u5728\u672c\u5730\u4ed3\u5e93\u7684 HEAD \u4e2d\u4e86\u3002\u8fd9\u65f6\u53ef\u4ee5\u4f7f\u7528\u5b83\u5c06\u8fd9\u4e9b\u6539\u52a8\u63d0\u4ea4\u5230\u8fdc\u7aef\u4ed3\u5e93\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5206\u652f\uff1a\u5206\u652f\u662f\u7528\u6765\u5c06\u7279\u6027\u5f00\u53d1\u5206\u79bb\u51fa\u6765\u7684\u3002\u5728\u521b\u5efa\u4ed3\u5e93\u7684\u65f6\u5019\uff0cmaster \u662f\u201c\u9ed8\u8ba4\u7684\u201d\u3002\u521b\u5efa\u5206\u652f\u5c06\u53ef\u4ee5\u4ece\u4e3b\u7ebf\u5f00\u53d1\u4e0a\u5206\u79bb\u5f00\u6765\uff0c\u7136\u540e\u5728\u4e0d\u5f71\u54cd\u4e3b\u7ebf\u7684\u540c\u65f6\u7ee7\u7eed\u5de5\u4f5c\uff0c\u5b8c\u6210\u540e\u518d\u5c06\u5b83\u4eec\u5408\u5e76\u5230\u4e3b\u5206\u652f\u4e0a\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5408\u5e76\uff1a\u5c06\u5206\u652f\u529f\u80fd\u5e76\u5165\u4e3b\u5206\u652f\u3002")))}m.isMDXComponent=!0}}]);