"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[41583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"HowTo Skip Atlassian Auth for SourceTree",tags:["Git"]},l=void 0,i={permalink:"/2018/08/04/HowTo-Skip-Atlassian-Auth-for-SourceTree",source:"@site/blog/2018-08-04-HowTo-Skip-Atlassian-Auth-for-SourceTree.md",title:"HowTo Skip Atlassian Auth for SourceTree",description:"\u95ee\u9898",date:"2018-08-04T00:00:00.000Z",formattedDate:"August 4, 2018",tags:[{label:"Git",permalink:"/tags/git"}],readingTime:2.41,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Skip Atlassian Auth for SourceTree",tags:["Git"]},prevItem:{title:"\u4f7f\u7528\u56fd\u5185 pypi \u6e90\u52a0\u901f pip \u5b89\u88c5",permalink:"/2018/02/28/shi-yong-guo-nei-pypi-yuan-jia-su-pip-an-zhuang"},nextItem:{title:"MacTips \u5355\u72ec\u8bbe\u7f6e\u7a0b\u5e8f\u8bed\u8a00",permalink:"/2018/11/17/mactips-dan-du-she-zhi-cheng-xu-yu-yan"}},c={authorsImageUrls:[]},s=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u89e3\u51b3\u601d\u8def",id:"\u89e3\u51b3\u601d\u8def",level:2},{value:"\u89e3\u51b3\u6b65\u9aa4",id:"\u89e3\u51b3\u6b65\u9aa4",level:2},{value:".NET 4.5.2",id:"net-452",level:3},{value:"SourceTree",id:"sourcetree",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.samzong.me/202307191532395.png?imageView2/3/w/400/interlace/1/q/50",alt:"image"})),(0,a.kt)("p",null,"\u56e0\u4e3a\u56fd\u5185\u7684\u7f51\u7edc\u7684\u539f\u56e0\uff0c\u5bfc\u81f4\u6211\u4eec\u5728\u9996\u6b21\u6253\u5f00 SourceTree \u65f6\u9700\u8981\u9a8c\u8bc1 Atlassian \u8d26\u53f7\uff0c\u4f46\u662f Atlassian \u7684\u6ce8\u518c\u9875\u9762\u4f7f\u7528 requirejs \u662f\u7528\u4e86 Google \u7684 CDN \u670d\u52a1\uff0c\u6240\u4ee5\u65e0\u6cd5\u6b63\u5e38\u901a\u8fc7\u9a8c\u8bc1\uff0c\u5982\u679c\u4f60\u6709\u7ffb\u5899\u5de5\u5177\uff0c\u90a3\u4e48\u8fd9\u5c31\u6ca1\u6709\u95ee\u9898\uff0c\u4e0b\u9762\u6211\u8981\u8bb2\u7684\u65b9\u6cd5\u662f\u5728\u4e0d\u7ffb\u5899\u7684\u60c5\u51b5\u4e0b\u8df3\u8fc7\u521d\u59cb\u5316\u9a8c\u8bc1\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u76ee\u524d\u6211\u89e3\u51b3\u7684\u662f\u5728 Windows \u5e73\u53f0\u4e0a\u7684\u95ee\u9898\uff0c\u5173\u4e8e Mac \u5e73\u53f0\uff0c\u6211\u7a0d\u540e\u4f1a\u66f4\u65b0\u5230\u6587\u6863\u4e2d\u3002")),(0,a.kt)("h2",{id:"\u89e3\u51b3\u601d\u8def"},"\u89e3\u51b3\u601d\u8def"),(0,a.kt)("p",null,"\u6211\u7684\u60f3\u6cd5\u662f\u901a\u8fc7\u589e\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"account"),"\u4fe1\u606f\uff0c\u8ba9",(0,a.kt)("inlineCode",{parentName:"p"},"SourceTree"),"\u8df3\u8fc7\u9a8c\u8bc1\uff1b\u7ecf\u8fc7\u6d4b\u8bd5",(0,a.kt)("inlineCode",{parentName:"p"},"2.0.19"),"\u53ca\u4ee5\u4e0b\u7248\u672c\u90fd\u652f\u6301\uff0c\u4f46\u662f SourceTree \u5728\u6700\u65b0\u7248\u672c 2.0.20 \u65f6\u53ef\u80fd\u4fee\u8ba2\u9a8c\u8bc1\u65b9\u5f0f\uff0c\u6240\u4ee5\u5bfc\u81f4\u6211\u7684\u8fd9\u4e2a\u65b9\u5f0f\u4e0d\u9002\u7528\uff0c\u5927\u5bb6\u53ef\u4ee5\u5728\u6211\u7684\u767e\u5ea6\u4e91\u76d8\u5171\u4eab\u4e2d\u4e0b\u8f7d 2.0.19\uff0c\u529f\u80fd\u4e0a\u5e76\u6ca1\u53d1\u751f\u591a\u5c11\u53d8\u5316\u3002"),(0,a.kt)("p",null,"\u94fe\u63a5\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://pan.baidu.com/s/1qYsHKWs"},"https://pan.baidu.com/s/1qYsHKWs")," \u5bc6\u7801\uff1awnc3"),(0,a.kt)("h2",{id:"\u89e3\u51b3\u6b65\u9aa4"},"\u89e3\u51b3\u6b65\u9aa4"),(0,a.kt)("h3",{id:"net-452"},".NET 4.5.2"),(0,a.kt)("p",null,"SourceTree \u4f9d\u8d56\u7684.NET \u73af\u5883\u6700\u4f4e\u662f 4.5.2\uff0c\u5f53\u7136\u5728\u4f60\u5b89\u88c5\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u63d0\u793a\u4f60\u4e0b\u8f7d\u5b89\u88c5\uff0c\u4f60\u53ea\u9700\u8981\u786e\u8ba4\u5373\u53ef\uff0c\u4e0d\u8fc7\u8fd9\u6837\u4e0b\u8f7d\u4f1a\u6bd4\u8f83\u6162\uff0c\u6240\u4ee5\u5efa\u8bae\u4f60\u4f7f\u7528 Offline \u7684\u5f62\u5f0f\u5b89\u88c5\uff0c\u4e0b\u9762\u662f\u5fae\u8f6f\u5b98\u65b9\u4e0b\u8f7d\u5730\u5740\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/download/confirmation.aspx?id=42642"},"https://www.microsoft.com/en-us/download/confirmation.aspx?id=42642")),(0,a.kt)("h3",{id:"sourcetree"},"SourceTree"),(0,a.kt)("p",null,"\u5b89\u88c5\u8fc7\u7a0b\u4e2d\uff0c\u9ed8\u8ba4\u4e00\u8def\u201cNext\u201d\u5373\u53ef\uff0c\u5728\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u627e\u5230 SourceTree \u5728 LocalAppData \u4e2d\u7684\u8def\u5f84\uff0c\u8bf7\u6253\u5f00\u8d44\u6e90\u7ba1\u7406\u7a97\u53e3\uff0c\u7136\u540e\u8f93\u5165\u4ee5\u4e0b\u5730\u5740\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%LocalAppData%\\Atlassian\\SourceTree\\\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u8def\u5f84\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u76ee\u5f55\u5373\u53ef")),(0,a.kt)("p",null,"\u7136\u540e\u5c06\u4e4b\u524d\u767e\u5ea6\u4e91\u76d8\u7684\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"accounts.json"),"\u590d\u5236\u5230\u8fd9\u4e2a\u4f4d\u7f6e\uff0c\u5b83\u7684\u8def\u5f84\u5e94\u8be5\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%LocalAppData%\\Atlassian\\SourceTree\\accounts.json\n")),(0,a.kt)("p",null,"\u6587\u4ef6\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "$id": "1",\n    "$type": "SourceTree.Api.Host.Identity.Model.IdentityAccount, SourceTree.Api.Host.Identity",\n    "Authenticate": true,\n    "HostInstance": {\n      "$id": "2",\n      "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountInstance, SourceTree.Host.AtlassianAccount",\n      "Host": {\n        "$id": "3",\n        "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountHost, SourceTree.Host.AtlassianAccount",\n        "Id": "atlassian account"\n      },\n      "BaseUrl": "https://id.atlassian.com/"\n    },\n    "Credentials": {\n      "$id": "4",\n      "$type": "SourceTree.Model.BasicAuthCredentials, SourceTree.Api.Account",\n      "Username": "",\n      "Email": null\n    },\n    "IsDefault": false\n  }\n]\n')),(0,a.kt)("p",null,"\u6dfb\u52a0\u5b8c\u6210\u4e4b\u540e\uff0c\u542f\u52a8 SourceTree \u5373\u53ef\u53d1\u73b0\u5df2\u7ecf\u8df3\u8fc7\u4e86\u9a8c\u8bc1\u754c\u9762\u3002"))}m.isMDXComponent=!0}}]);