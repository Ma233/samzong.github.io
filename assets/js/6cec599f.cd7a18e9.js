"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[58040],{3420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var s=t(17624),o=t(4552);const c={title:"HowTo Skip Atlassian Auth for SourceTree",tags:["Git"]},r=void 0,a={permalink:"/2018/08/04/HowTo-Skip-Atlassian-Auth-for-SourceTree",source:"@site/blog/2018-08-04-HowTo-Skip-Atlassian-Auth-for-SourceTree.md",title:"HowTo Skip Atlassian Auth for SourceTree",description:"\u95ee\u9898",date:"2018-08-04T00:00:00.000Z",formattedDate:"2018\u5e748\u67084\u65e5",tags:[{label:"Git",permalink:"/tags/git"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Skip Atlassian Auth for SourceTree",tags:["Git"]},unlisted:!1,prevItem:{title:"MacTips \u5355\u72ec\u8bbe\u7f6e\u7a0b\u5e8f\u8bed\u8a00",permalink:"/2018/11/17/mactips-dan-du-she-zhi-cheng-xu-yu-yan"},nextItem:{title:"\u4f7f\u7528\u56fd\u5185 pypi \u6e90\u52a0\u901f pip \u5b89\u88c5",permalink:"/2018/02/28/shi-yong-guo-nei-pypi-yuan-jia-su-pip-an-zhuang"}},i={authorsImageUrls:[]},l=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u89e3\u51b3\u601d\u8def",id:"\u89e3\u51b3\u601d\u8def",level:2},{value:"\u89e3\u51b3\u6b65\u9aa4",id:"\u89e3\u51b3\u6b65\u9aa4",level:2},{value:".NET 4.5.2",id:"net-452",level:3},{value:"SourceTree",id:"sourcetree",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u95ee\u9898",children:"\u95ee\u9898"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.samzong.me/202307191532395.png?imageView2/3/w/400/interlace/1/q/50",alt:"image"})}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u4e3a\u56fd\u5185\u7684\u7f51\u7edc\u7684\u539f\u56e0\uff0c\u5bfc\u81f4\u6211\u4eec\u5728\u9996\u6b21\u6253\u5f00 SourceTree \u65f6\u9700\u8981\u9a8c\u8bc1 Atlassian \u8d26\u53f7\uff0c\u4f46\u662f Atlassian \u7684\u6ce8\u518c\u9875\u9762\u4f7f\u7528 requirejs \u662f\u7528\u4e86 Google \u7684 CDN \u670d\u52a1\uff0c\u6240\u4ee5\u65e0\u6cd5\u6b63\u5e38\u901a\u8fc7\u9a8c\u8bc1\uff0c\u5982\u679c\u4f60\u6709\u7ffb\u5899\u5de5\u5177\uff0c\u90a3\u4e48\u8fd9\u5c31\u6ca1\u6709\u95ee\u9898\uff0c\u4e0b\u9762\u6211\u8981\u8bb2\u7684\u65b9\u6cd5\u662f\u5728\u4e0d\u7ffb\u5899\u7684\u60c5\u51b5\u4e0b\u8df3\u8fc7\u521d\u59cb\u5316\u9a8c\u8bc1\u3002"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u76ee\u524d\u6211\u89e3\u51b3\u7684\u662f\u5728 Windows \u5e73\u53f0\u4e0a\u7684\u95ee\u9898\uff0c\u5173\u4e8e Mac \u5e73\u53f0\uff0c\u6211\u7a0d\u540e\u4f1a\u66f4\u65b0\u5230\u6587\u6863\u4e2d\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u51b3\u601d\u8def",children:"\u89e3\u51b3\u601d\u8def"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u7684\u60f3\u6cd5\u662f\u901a\u8fc7\u589e\u52a0",(0,s.jsx)(n.code,{children:"account"}),"\u4fe1\u606f\uff0c\u8ba9",(0,s.jsx)(n.code,{children:"SourceTree"}),"\u8df3\u8fc7\u9a8c\u8bc1\uff1b\u7ecf\u8fc7\u6d4b\u8bd5",(0,s.jsx)(n.code,{children:"2.0.19"}),"\u53ca\u4ee5\u4e0b\u7248\u672c\u90fd\u652f\u6301\uff0c\u4f46\u662f SourceTree \u5728\u6700\u65b0\u7248\u672c 2.0.20 \u65f6\u53ef\u80fd\u4fee\u8ba2\u9a8c\u8bc1\u65b9\u5f0f\uff0c\u6240\u4ee5\u5bfc\u81f4\u6211\u7684\u8fd9\u4e2a\u65b9\u5f0f\u4e0d\u9002\u7528\uff0c\u5927\u5bb6\u53ef\u4ee5\u5728\u6211\u7684\u767e\u5ea6\u4e91\u76d8\u5171\u4eab\u4e2d\u4e0b\u8f7d 2.0.19\uff0c\u529f\u80fd\u4e0a\u5e76\u6ca1\u53d1\u751f\u591a\u5c11\u53d8\u5316\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://pan.baidu.com/s/1qYsHKWs",children:"https://pan.baidu.com/s/1qYsHKWs"})," \u5bc6\u7801\uff1awnc3"]}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u51b3\u6b65\u9aa4",children:"\u89e3\u51b3\u6b65\u9aa4"}),"\n",(0,s.jsx)(n.h3,{id:"net-452",children:".NET 4.5.2"}),"\n",(0,s.jsx)(n.p,{children:"SourceTree \u4f9d\u8d56\u7684.NET \u73af\u5883\u6700\u4f4e\u662f 4.5.2\uff0c\u5f53\u7136\u5728\u4f60\u5b89\u88c5\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u63d0\u793a\u4f60\u4e0b\u8f7d\u5b89\u88c5\uff0c\u4f60\u53ea\u9700\u8981\u786e\u8ba4\u5373\u53ef\uff0c\u4e0d\u8fc7\u8fd9\u6837\u4e0b\u8f7d\u4f1a\u6bd4\u8f83\u6162\uff0c\u6240\u4ee5\u5efa\u8bae\u4f60\u4f7f\u7528 Offline \u7684\u5f62\u5f0f\u5b89\u88c5\uff0c\u4e0b\u9762\u662f\u5fae\u8f6f\u5b98\u65b9\u4e0b\u8f7d\u5730\u5740\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.microsoft.com/en-us/download/confirmation.aspx?id=42642",children:"https://www.microsoft.com/en-us/download/confirmation.aspx?id=42642"})}),"\n",(0,s.jsx)(n.h3,{id:"sourcetree",children:"SourceTree"}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u88c5\u8fc7\u7a0b\u4e2d\uff0c\u9ed8\u8ba4\u4e00\u8def\u201cNext\u201d\u5373\u53ef\uff0c\u5728\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u627e\u5230 SourceTree \u5728 LocalAppData \u4e2d\u7684\u8def\u5f84\uff0c\u8bf7\u6253\u5f00\u8d44\u6e90\u7ba1\u7406\u7a97\u53e3\uff0c\u7136\u540e\u8f93\u5165\u4ee5\u4e0b\u5730\u5740\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%LocalAppData%\\Atlassian\\SourceTree\\\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u8def\u5f84\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u76ee\u5f55\u5373\u53ef"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\u5c06\u4e4b\u524d\u767e\u5ea6\u4e91\u76d8\u7684\u6587\u4ef6",(0,s.jsx)(n.code,{children:"accounts.json"}),"\u590d\u5236\u5230\u8fd9\u4e2a\u4f4d\u7f6e\uff0c\u5b83\u7684\u8def\u5f84\u5e94\u8be5\u662f\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%LocalAppData%\\Atlassian\\SourceTree\\accounts.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6587\u4ef6\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "$id": "1",\n    "$type": "SourceTree.Api.Host.Identity.Model.IdentityAccount, SourceTree.Api.Host.Identity",\n    "Authenticate": true,\n    "HostInstance": {\n      "$id": "2",\n      "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountInstance, SourceTree.Host.AtlassianAccount",\n      "Host": {\n        "$id": "3",\n        "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountHost, SourceTree.Host.AtlassianAccount",\n        "Id": "atlassian account"\n      },\n      "BaseUrl": "https://id.atlassian.com/"\n    },\n    "Credentials": {\n      "$id": "4",\n      "$type": "SourceTree.Model.BasicAuthCredentials, SourceTree.Api.Account",\n      "Username": "",\n      "Email": null\n    },\n    "IsDefault": false\n  }\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6dfb\u52a0\u5b8c\u6210\u4e4b\u540e\uff0c\u542f\u52a8 SourceTree \u5373\u53ef\u53d1\u73b0\u5df2\u7ecf\u8df3\u8fc7\u4e86\u9a8c\u8bc1\u754c\u9762\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var s=t(11504);const o={},c=s.createContext(o);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);