"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[40694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),g=o,h=s["".concat(p,".").concat(g)]||s[g]||m[g]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Github \u4f7f\u7528 SSH \u62c9\u53d6\u4ee3\u7801\u52a0\u901f",tags:["Github"]},l=void 0,i={permalink:"/2021/11/29/git-zhong-duan-clone-jia-su",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2021-11-29-git-zhong-duan-clone-jia-su.md",source:"@site/blog/2021-11-29-git-zhong-duan-clone-jia-su.md",title:"Github \u4f7f\u7528 SSH \u62c9\u53d6\u4ee3\u7801\u52a0\u901f",description:"\u5982\u679c\u4f60\u672c\u5730\u4e5f\u6709\u4ee3\u7406\u670d\u52a1\u6bd4\u5982\uff1aClash\u3001Surge \u5e76\u5df2\u5b8c\u6210\u79d1\u5b66\u4e0a\u7f51\uff0c\u8fd9\u5bf9\u8bbf\u95ee Github \u8d77\u5230\u4e00\u5b9a\u7684\u52a0\u901f\u4f5c\u7528\uff0c\u4f46\u5982\u679c\u5728\u7ec8\u7aef\u4f7f\u7528\uff0c\u53ef\u4ee5\u8fd8\u9700\u8981\u4e00\u4e9b\u989d\u5916\u914d\u7f6e\uff0c\u8fd9\u91cc\u4ee5 Clash \u4f5c\u4e3a\u793a\u4f8b\u3002",date:"2021-11-29T00:00:00.000Z",formattedDate:"2021\u5e7411\u670829\u65e5",tags:[{label:"Github",permalink:"/tags/github"}],readingTime:1.2333333333333334,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Github \u4f7f\u7528 SSH \u62c9\u53d6\u4ee3\u7801\u52a0\u901f",tags:["Github"]},prevItem:{title:"python flask form",permalink:"/2022/01/03/python-flask-form"},nextItem:{title:"\u9489\u9489\u5185\u7f51\u7a7f\u900f\u5de5\u5177",permalink:"/2021/11/19/ding-ding-nei-wang-chuan-tou-gong-ju"}},p={authorsImageUrls:[]},c=[{value:"1. \u52a0\u901f\u4f60\u7684\u6d4f\u89c8\u5668",id:"1-\u52a0\u901f\u4f60\u7684\u6d4f\u89c8\u5668",level:2},{value:"2. \u52a0\u901f\u4f60\u7684\u7ec8\u7aef clone",id:"2-\u52a0\u901f\u4f60\u7684\u7ec8\u7aef-clone",level:2},{value:"2.1 \u83b7\u53d6\u4f60\u7684\u4ee3\u7406\u7ec8\u7aef\u914d\u7f6e",id:"21-\u83b7\u53d6\u4f60\u7684\u4ee3\u7406\u7ec8\u7aef\u914d\u7f6e",level:3},{value:"2.2 \u4f7f\u7528 HTTPS \u4f5c\u4e3a clone \u94fe\u63a5",id:"22-\u4f7f\u7528-https-\u4f5c\u4e3a-clone-\u94fe\u63a5",level:3},{value:"2.3 \u4f7f\u7528 git \u4f5c\u4e3a clone \u7684\u65b9\u5f0f",id:"23-\u4f7f\u7528-git-\u4f5c\u4e3a-clone-\u7684\u65b9\u5f0f",level:3}],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u672c\u5730\u4e5f\u6709\u4ee3\u7406\u670d\u52a1\u6bd4\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"Clash"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Surge")," \u5e76\u5df2\u5b8c\u6210\u79d1\u5b66\u4e0a\u7f51\uff0c\u8fd9\u5bf9\u8bbf\u95ee Github \u8d77\u5230\u4e00\u5b9a\u7684\u52a0\u901f\u4f5c\u7528\uff0c\u4f46\u5982\u679c\u5728\u7ec8\u7aef\u4f7f\u7528\uff0c\u53ef\u4ee5\u8fd8\u9700\u8981\u4e00\u4e9b\u989d\u5916\u914d\u7f6e\uff0c\u8fd9\u91cc\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"Clash")," \u4f5c\u4e3a\u793a\u4f8b\u3002"),(0,o.kt)("h2",{id:"1-\u52a0\u901f\u4f60\u7684\u6d4f\u89c8\u5668"},"1. \u52a0\u901f\u4f60\u7684\u6d4f\u89c8\u5668"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u5f62\u4e0b\uff0c\u4f60\u53ef\u80fd\u4e0d\u9700\u8981\u505a\u4ec0\u4e48\uff08\u5728\u4ee3\u7406\u5de5\u4f5c\u6b63\u5e38\u7684\u60c5\u51b5\u4e0b\uff09\uff0c\u6d4f\u89c8\u5668\u7684\u52a0\u901f\u901a\u8fc7\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"https://github.com"},"Github")," \u6700\u4e3a\u76f4\u63a5\u3002"),(0,o.kt)("h2",{id:"2-\u52a0\u901f\u4f60\u7684\u7ec8\u7aef-clone"},"2. \u52a0\u901f\u4f60\u7684\u7ec8\u7aef clone"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5728\u7ec8\u7aef clone \u4e00\u4e2a\u6258\u7ba1\u5728 Github \u7684\u9879\u76ee\uff0c\u9ed8\u8ba4\u60c5\u5f62\u4e0b\u4f60\u53ef\u80fd\u4f1a\u53d1\u73b0 \u7ec8\u7aef\u5185\u5e76\u672a\u5f97\u5230\u52a0\u901f\uff0c\u8fd8\u662f\u4e00\u5982\u65e2\u5f80\u7684\u6162\u3002"),(0,o.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u7ec8\u7aef\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u8d70\u4ee3\u7406\uff0c\u8fd9\u91cc\u9700\u8981\u4f60\u8fdb\u884c\u4e00\u914d\u7f6e"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u4f7f\u7528 iTerm2 \u4e3a\u4f8b")),(0,o.kt)("h3",{id:"21-\u83b7\u53d6\u4f60\u7684\u4ee3\u7406\u7ec8\u7aef\u914d\u7f6e"},"2.1 \u83b7\u53d6\u4f60\u7684\u4ee3\u7406\u7ec8\u7aef\u914d\u7f6e"),(0,o.kt)("img",{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/CleanShot%202022-08-08%20at%2018.35.56.jpg?x-oss-process=image/resize,w_960,m_lfit",alt:"resize,w_960,m_lfit"}),(0,o.kt)("h3",{id:"22-\u4f7f\u7528-https-\u4f5c\u4e3a-clone-\u94fe\u63a5"},"2.2 \u4f7f\u7528 HTTPS \u4f5c\u4e3a clone \u94fe\u63a5"),(0,o.kt)("img",{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/CleanShot%202022-08-08%20at%2018.37.08.jpg?x-oss-process=image/resize,w_960,m_lfit",alt:"resize,w_960,m_lfit"}),(0,o.kt)("p",null,"\u8fd9\u65f6\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"2.1")," \u526a\u5207\u677f\u83b7\u53d6\u7684\u547d\u540d\uff0c\u653e\u5230\u7ec8\u7aef\u4e2d\u6267\u884c\u5373\u53ef\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u6837\u7684\u65b9\u5f0f\u9002\u5408\u62c9\u53d6\u4e00\u4e2a\u516c\u5f00\u7684\u4ed3\u5e93\uff0c\u6216\u8005\u5bf9\u9690\u79c1\u4ed3\u5e93\u4e0d\u4f7f\u7528 sshkey \u8fdb\u884c\u4ee3\u7801\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"pull&push"))),(0,o.kt)("h3",{id:"23-\u4f7f\u7528-git-\u4f5c\u4e3a-clone-\u7684\u65b9\u5f0f"},"2.3 \u4f7f\u7528 git \u4f5c\u4e3a clone \u7684\u65b9\u5f0f"),(0,o.kt)("p",null,"\u6b64\u65f6\u6211\u4eec\u9700\u8981\u7279\u6b8a\u5904\u7406\u4e0b\uff0c\u7ed9 git \u914d\u7f6e\u4e0a\u5168\u5c40\u4ee3\u7406\u90e8\u5206\uff0c\u8fd9\u91cc\u914d\u7f6e\u4e0b\u4ec5\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"github.com")," \u8fd9\u4e2a\u57df\u540d\u751f\u6548"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n# \u6ce8\u610f\u5c06 https://127.0.0.1:7890 \u540e\u7f00\u7aef\u53e3\u66ff\u6362\u4e3a\ngit config --global http.https://github.com.proxy https://127.0.0.1:7890\ngit config --global https.https://github.com.proxy https://127.0.0.1:7890\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"clashx pro \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f 7890; \u65e9\u671f ss \u9ed8\u8ba4\u914d\u7f6e\u4e3a 10086")))}m.isMDXComponent=!0}}]);