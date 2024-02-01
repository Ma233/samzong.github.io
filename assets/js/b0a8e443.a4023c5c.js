"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[41788],{73890:(i,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(85893),s=t(11151);const r={title:"HowTo use TortoiseGit for Windows",tags:["Git"]},o=void 0,a={permalink:"/2016/02/12/HowTo-use-TortoiseGit-for-Windows",source:"@site/blog/2016-02-12-HowTo-use-TortoiseGit-for-Windows.md",title:"HowTo use TortoiseGit for Windows",description:"Git \u662f\u76ee\u524d\u6700\u5148\u8fdb\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u4e1a\u52a1\u573a\u666f\u90fd\u5728\u4f7f\u7528 Git\uff0c\u98ce\u9761\u5168\u7403\u7684 Github \u66f4\u662f\u8ba9 Git \u7248\u672c\u63a7\u5236\u7cfb\u7edf\u540d\u58f0\u5927\u9707\uff0c\u4f46\u662f GitHub \u65e8\u5728\u5efa\u7acb\u4e00\u4e2a\u5f00\u6e90\u7684\u751f\u6001\u73af\u5883\uff0c\u6240\u4ee5\u4e0d\u9002\u5408\u4f01\u4e1a\u5185\u90e8\u7684\u7ba1\u7406\u7cfb\u7edf\uff0c\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\uff0c\u6211\u4e5f\u8bb2\u5230\u4e86\u5982\u4f55\u642d\u5efa GitLab\uff0c\u53ef\u4ee5\u5728\u4f01\u4e1a\u5185\u90e8\u81ea\u5efa\u4e00\u5957\u529f\u80fd\u5b8c\u5584\u7684 Git \u7248\u672c\u63a7\u5236\u7cfb\u7edf\u3002",date:"2016-02-12T00:00:00.000Z",formattedDate:"February 12, 2016",tags:[{label:"Git",permalink:"/tags/git"}],readingTime:10.145,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo use TortoiseGit for Windows",tags:["Git"]},unlisted:!1,prevItem:{title:"How to install MariaDB 10.1 on CentOS 7.x",permalink:"/2016/01/22/install-mariadb10-centos7"},nextItem:{title:"2016 \u6625\u8282\u8bfb\u4e66\u7b14\u8bb0",permalink:"/2016/03/04/2016-chun-jie-du-shu-bi-ji"}},l={authorsImageUrls:[]},c=[{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:4},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:4},{value:"Git for Windows",id:"git-for-windows",level:5},{value:"TortoiseGit",id:"tortoisegit",level:5},{value:"\u4fee\u6539\u7a0b\u5e8f\u8bed\u8a00\u4e3a\u4e2d\u6587",id:"\u4fee\u6539\u7a0b\u5e8f\u8bed\u8a00\u4e3a\u4e2d\u6587",level:5},{value:"\u4f7f\u7528 TortoiseGit \u514b\u9686\u4f60\u7684\u9879\u76ee",id:"\u4f7f\u7528-tortoisegit-\u514b\u9686\u4f60\u7684\u9879\u76ee",level:4},{value:"\u6d4b\u8bd5\u9879\u76ee",id:"\u6d4b\u8bd5\u9879\u76ee",level:5},{value:"SSH \u9a8c\u8bc1\u65b9\u5f0f",id:"ssh-\u9a8c\u8bc1\u65b9\u5f0f",level:5},{value:"HTTPS or HTTP",id:"https-or-http",level:5}];function g(i){const e={a:"a",blockquote:"blockquote",code:"code",h4:"h4",h5:"h5",img:"img",p:"p",strong:"strong",...(0,s.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"Git \u662f\u76ee\u524d\u6700\u5148\u8fdb\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u4e1a\u52a1\u573a\u666f\u90fd\u5728\u4f7f\u7528 Git\uff0c\u98ce\u9761\u5168\u7403\u7684 Github \u66f4\u662f\u8ba9 Git \u7248\u672c\u63a7\u5236\u7cfb\u7edf\u540d\u58f0\u5927\u9707\uff0c\u4f46\u662f GitHub \u65e8\u5728\u5efa\u7acb\u4e00\u4e2a\u5f00\u6e90\u7684\u751f\u6001\u73af\u5883\uff0c\u6240\u4ee5\u4e0d\u9002\u5408\u4f01\u4e1a\u5185\u90e8\u7684\u7ba1\u7406\u7cfb\u7edf\uff0c\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\uff0c\u6211\u4e5f\u8bb2\u5230\u4e86\u5982\u4f55\u642d\u5efa GitLab\uff0c\u53ef\u4ee5\u5728\u4f01\u4e1a\u5185\u90e8\u81ea\u5efa\u4e00\u5957\u529f\u80fd\u5b8c\u5584\u7684 Git \u7248\u672c\u63a7\u5236\u7cfb\u7edf\u3002"}),"\n",(0,n.jsx)(e.p,{children:"GitLab \u662f\u4e00\u4e2a\u975e\u5e38\u6210\u719f\u7684\u670d\u52a1\u7aef\u5e94\u7528\uff0c\u4f46\u662f\u4f5c\u4e3a\u4e00\u540d\u5f00\u53d1\u4eba\u5458\uff0c\u6211\u4eec\u5728\u4f7f\u7528 GitLab \u4e0e\u5176\u4ed6\u4eba\u5458\u534f\u540c\u7248\u672c\u65f6\uff0c\u9700\u8981\u6709\u4e00\u4e2a\u5de5\u4f5c\u5bf9\u6211\u4eec\u7684\u6bcf\u6b21\u4fee\u6539\u66f4\u65b0\u4ee5\u53ca\u63a8\u9001\uff0c\u8fd9\u4e5f\u662f\u7248\u672c\u63a7\u5236\u5de5\u5177\u7684\u771f\u6b63\u7cbe\u9ad3\uff1b\u5728\u4e0d\u540c\u7684\u5e73\u53f0\u6709\u7740\u5f88\u591a\u4e30\u5bcc\u7684\u5e94\u7528\u8f6f\u4ef6\uff0c\u6240\u4ee5\u6311\u9009\u4e00\u6b3e\u9002\u5408\u81ea\u5df1\u7684 Git GUI \u5de5\u5177\u5f88\u91cd\u8981\u3002"}),"\n",(0,n.jsxs)(e.p,{children:["\u76ee\u524d\u5728\u4f17\u591a Git Client \u4e4b\u4e2d\u505a\u7684\u6bd4\u8f83\u597d\u7684\u662f SourceTree\uff0c\u5e76\u4e14\u540c\u65f6\u652f\u6301 Mac \u548c Windows \u53cc\u5e73\u53f0\uff0c\u4f46\u662f\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u5f53\u6211\u4eec\u5728\u521d\u6b21\u5b89\u88c5\u65f6\u9700\u8981\u9a8c\u8bc1 Atlassian \u8d26\u53f7\uff0c\u4f46\u662f Atlassian \u7684\u6ce8\u518c\u9875\u9762\u7528\u4e86 requirejs\uff0c\u800c\u4e14\u662f\u7528\u4e86 Google \u7684 CDN \u670d\u52a1\uff0c\u6240\u4ee5\u5fc5\u987b\u7ffb\u5899\uff0c\u8fd9\u5bf9\u5f88\u591a\u4e2d\u56fd\u7528\u6237\u7684\u4f7f\u7528\u9020\u6210\u4e86\u4e0d\u53d8\uff1b\u6240\u4ee5\uff0c\u4eca\u5929\u6211\u5728\u8fd9\u91cc\u63a8\u8350\u4e00\u4e2a\u5728 Windows \u5e73\u53f0\u4e0b\u540c\u6837\u53ef\u4ee5\u4f5c\u4e3a Git \u56fe\u5f62\u5316\u5ba2\u6237\u7aef\u5de5\u5177\u7684\uff1a",(0,n.jsx)(e.a,{href:"https://tortoisegit.org/",children:"TortoiseGit"})]}),"\n",(0,n.jsx)(e.p,{children:"TortoiseGit \u662f TortoiseSVN \u7684 Git \u7248\u672c\uff0cTortoiseGit \u7528\u4e8e\u8fc1\u79fb TortoiseSVN \u5230 TortoiseGit\uff0c\u89e3\u51b3\u4e86\u5728 Windows \u5e73\u53f0\u4e4b\u4e0a\u6ca1\u6709\u5408\u9002 Git \u56fe\u5f62\u5316\u5ba2\u6237\u7aef\u7684\u95ee\u9898\uff0cTortoiseGit \u4e0d\u4ec5\u514d\u8d39\uff0c\u800c\u4e14\u540c\u6837\u652f\u6301\u4e30\u5bcc\u7684\u8bed\u8a00\u5305\uff0c\u4f46\u662f\u9700\u8981\u72ec\u7acb\u4e0b\u8f7d\u8bed\u8a00\u5305\u5b89\u88c5\uff0c\u9ed8\u8ba4\u53ea\u6709\u82f1\u6587\uff0c\u6ce8\u610f\u8bed\u8a00\u5305\u4e0e\u7a0b\u5e8f\u7248\u672c\u4e00\u5b9a\u8981\u5339\u914d\u3002"}),"\n",(0,n.jsx)(e.h4,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n",(0,n.jsxs)(e.p,{children:["TortoiseGit \u7684\u5b98\u65b9\u4e0b\u8f7d\u5730\u5740\u662f\u8fd9\u91cc\uff1a",(0,n.jsx)(e.a,{href:"https://tortoisegit.org/download/",children:"https://tortoisegit.org/download/"})," \uff0c\u4e0b\u8f7d\u65f6\u8bf7\u6ce8\u610f\u4e0e\u4f60\u7cfb\u7edf\u7684\u517c\u5bb9\u6027\u3002"]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"\u6ce8\u610f TortoiseGit 1.8.16 \u4e4b\u540e\u7684\u7248\u672c\u4e0d\u5728\u652f\u6301 Windows XP \u548c Server 2003"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"\u56e0\u4e3a TortoiseGit \u5b98\u7f51\u4e0d\u5728\u56fd\u5185\uff0c\u6240\u4ee5\u5728\u8bbf\u95ee\u4e0b\u8f7d\u65f6\u901f\u5ea6\u975e\u5e38\u7684\u6162\uff0c\u6211\u5c06\u76ee\u524d\u7684\u7a33\u5b9a\u7248\u672c 2.4 \u4e0a\u4f20\u5230\u6211\u7684\u767e\u5ea6\u4e91\u76d8\uff0c\u4f46\u662f\u4ee5\u540e\u6211\u53ef\u80fd\u4e0d\u80fd\u53ca\u65f6\u66f4\u65b0\uff0c\u6240\u4ee5\u5982\u679c\u4f60\u5bf9\u7248\u672c\u8981\u6c42\u4e0d\u662f\u5f88\u9ad8\uff0c\u53ef\u4ee5\u70b9\u51fb\u4e0b\u9762\u94fe\u63a5\u4e0b\u8f7d\u3002"}),"\n",(0,n.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,n.jsx)(e.a,{href:"https://pan.baidu.com/s/1eScNjA6",children:"https://pan.baidu.com/s/1eScNjA6"})," \u5bc6\u7801\uff1a31hu"]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"\u5982\u94fe\u63a5\u5931\u6548\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u672c\u9875\u9762\u53f3\u4e0b\u89d2\u5c55\u5f00\u901a\u8fc7\u90ae\u7bb1\uff0c\u4e0e\u6211\u53d6\u5f97\u8054\u7cfb\u3002"}),"\n"]}),"\n",(0,n.jsx)(e.h4,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,n.jsx)(e.h5,{id:"git-for-windows",children:"Git for Windows"}),"\n",(0,n.jsx)(e.p,{children:"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u5b89\u88c5 Git \u5728\u4f60\u7684\u7535\u8111\u4e0a\uff0c\u8fd9\u4fdd\u8bc1\u4f60\u7684 TortoiseGit \u8fd0\u884c\u65f6\u6240\u9700\u8981\u7684\u4f9d\u8d56\u73af\u5883\u3002"}),"\n",(0,n.jsxs)(e.p,{children:["\u4e0b\u8f7d\u5730\u5740\uff1a",(0,n.jsx)(e.a,{href:"https://git-for-windows.github.io/",children:"https://git-for-windows.github.io/"})]}),"\n",(0,n.jsx)(e.p,{children:"\u540c\u6837\uff0c\u56e0\u4e3a\u67d0\u4e9b\u7f51\u7edc\u7684\u539f\u56e0\uff0c\u5bfc\u81f4\u6211\u4eec\u5728\u4e0b\u8f7d\u65f6\u4e5f\u4f1a\u5f88\u6162\uff0c\u6240\u4ee5\u6211\u4e5f\u5c06\u76ee\u524d\u6700\u65b0 2.13 \u7248\u672c\u4e0a\u4f20\u5230\u4e86\u6211\u7684\u767e\u5ea6\u4e91\u76d8\uff1a"}),"\n",(0,n.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,n.jsx)(e.a,{href:"https://pan.baidu.com/s/1c12ZvRq",children:"https://pan.baidu.com/s/1c12ZvRq"})," \u5bc6\u7801\uff1a43yt"]}),"\n",(0,n.jsx)(e.p,{children:"\u5b89\u88c5\u8fc7\u7a0b\uff0c\u8fd9\u91cc\u4e0d\u5728\u5c55\u793a\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ea\u9700\u8981\u4e00\u8def\u70b9\u51fb Next \u5373\u53ef\uff0c\u4f46\u662f\u5982\u679c\u4f60\u60f3\u8981\u4fee\u6539\u4e00\u4e9b\u8bbe\u7f6e\uff0c\u4f8b\u5982\u9ed8\u8ba4\u7684\u5b89\u88c5\u4f4d\u7f6e\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u6ce8\u610f\u4e0b\uff0c\u5728 TortoiseGit \u521d\u6b21\u542f\u52a8\u65f6\uff0c\u4f60\u9700\u8981\u624b\u52a8\u8bbe\u7f6e Git.exe \u7684\u4f4d\u7f6e\u3002"}),"\n",(0,n.jsx)(e.h5,{id:"tortoisegit",children:"TortoiseGit"}),"\n",(0,n.jsx)(e.p,{children:"\u6211\u7684\u6d4b\u8bd5\u7cfb\u7edf\u662f Windows 7 \u65d7\u8230\u7248 64 \u4f4d\uff0c\u5e76\u4e14\u652f\u6301 TortoiseGit \u6700\u65b0\u7684\u7248\u672c\u3002"}),"\n",(0,n.jsx)(e.p,{children:"![image]![image-1]"}),"\n",(0,n.jsx)(e.p,{children:"\u8bf7\u4f9d\u6b21\u5b89\u88c5\u4e0a\u56fe\u4e2d\u4e24\u4e2a\u8f6f\u4ef6\uff0c\u6ce8\u610f LanguagePack \u5e94\u8be5\u5728\u4e3b\u7a0b\u5e8f\u4e4b\u540e\u5b89\u88c5\uff0c\u540c\u6837\uff0c\u4f60\u4e5f\u53ea\u9700\u8981\u4e00\u8def\u70b9\u51fb Next \u5373\u53ef\u3002"}),"\n",(0,n.jsx)(e.p,{children:'\u5728\u4f60\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u5728\u8be5\u76ee\u5f55\u7684\u7a7a\u767d\u533a\u57df\uff0c\u5355\u51fb\u9f20\u6807\u53f3\u952e\uff0c\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u65b0\u589e\u4e86 TortoiseGit \u7684\u9009\u9879\uff0c\u6211\u4eec\u9009\u62e9"TortoiseGit">"Settings"\u6765\u521d\u59cb\u5316\u6211\u4eec\u8bbe\u7f6e\u3002'}),"\n",(0,n.jsx)(e.p,{children:"![image]![image-2]"}),"\n",(0,n.jsx)(e.h5,{id:"\u4fee\u6539\u7a0b\u5e8f\u8bed\u8a00\u4e3a\u4e2d\u6587",children:"\u4fee\u6539\u7a0b\u5e8f\u8bed\u8a00\u4e3a\u4e2d\u6587"}),"\n",(0,n.jsx)(e.p,{children:"\u5982\u679c\u82f1\u6587\u4f60\u7684\u4f7f\u7528\u4e0d\u4f1a\u6709\u5f71\u54cd\uff0c\u4f60\u53ef\u4ee5\u7565\u8fc7\u8fd9\u4e00\u6b65\u9aa4\uff0c\u540c\u6837\u4f60\u4e5f\u4e0d\u9700\u8981\u4e0b\u8f7d\u4e0a\u9762\u7684 LanguagePack \u5305\u3002"}),"\n",(0,n.jsx)(e.p,{children:"![image]![image-3]"}),"\n",(0,n.jsx)(e.p,{children:"\u597d\u4e86\uff0c\u6309\u7167\u5982\u4e0a\u56fe\u4e2d\u64cd\u4f5c\uff0c\u4f60\u5e94\u8be5\u5df2\u7ecf\u4fee\u6539\u4e86\u7a0b\u5e8f\u8bed\u8a00\u4e3a\u4e2d\u6587\uff0c\u518d\u6b21\u5230\u7a7a\u767d\u533a\u57df\u5355\u51fb\u6d4b\u8bd5\u5c31\u53ef\u4ee5\u770b\u5230\u4e86\u3002"}),"\n",(0,n.jsx)(e.h4,{id:"\u4f7f\u7528-tortoisegit-\u514b\u9686\u4f60\u7684\u9879\u76ee",children:"\u4f7f\u7528 TortoiseGit \u514b\u9686\u4f60\u7684\u9879\u76ee"}),"\n",(0,n.jsx)(e.p,{children:"\u5728\u6211\u4eec\u5b89\u88c5\u4e86\u597d TortoiseGit \u548c Git \u7684\u57fa\u672c\u57fa\u7840\u73af\u5883\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528 TortoiseGit \u514b\u9686\u9879\u76ee\uff0c\u8fd9\u91cc\u6211\u4eec\u662f\u5728 GitHub \u521b\u5efa\u4e86\u4e00\u4e2a\u6d4b\u8bd5\u9879\u76ee\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4f60\u7684\u9879\u76ee\u5730\u5740\u5373\u53ef\u3002"}),"\n",(0,n.jsx)(e.h5,{id:"\u6d4b\u8bd5\u9879\u76ee",children:"\u6d4b\u8bd5\u9879\u76ee"}),"\n",(0,n.jsx)(e.p,{children:"![image]![image-4]"}),"\n",(0,n.jsx)(e.p,{children:"GitHub \u548c GitLab \u90fd\u63d0\u4f9b\u4e86\u901a\u8fc7\u4f7f\u7528 HTTPS \u548c SSH \u7684\u65b9\u5f0f\uff0c\u8fd9\u4e24\u79cd\u65b9\u5f0f\u6709\u4e9b\u4e0d\u540c\uff0c\u6211\u4f1a\u5728\u4e0b\u9762\u5206\u5f00\u8bb2\u8ff0\u5982\u4f55\u4f7f\u7528\u3002"}),"\n",(0,n.jsx)(e.h5,{id:"ssh-\u9a8c\u8bc1\u65b9\u5f0f",children:"SSH \u9a8c\u8bc1\u65b9\u5f0f"}),"\n",(0,n.jsx)(e.p,{children:"\u5982\u679c\u91c7\u7528 SSH \u9a8c\u8bc1\u65b9\u5f0f\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u751f\u6210\u4e00\u5bf9\u516c\u94a5\u548c\u79c1\u94a5\uff0c\u5e76\u4e14\u5c06\u516c\u94a5\u4e0a\u4f20\u5230\u4f60\u7684 GitLab \u6216 GitHub \u4e0a\uff0c\u7136\u540e\u5728\u514b\u9686\u4f60\u7684\u9879\u76ee\u65f6\uff0c\u4f7f\u7528\u5339\u914d\u7684\u79c1\u94a5\u5373\u53ef\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\u90a3\u5728 Windows \u5982\u4f55\u4e0a\u751f\u6210\u79c1\u94a5\u5462\uff1f\u5176\u5b9e\u6211\u4eec\u5728\u5b89\u88c5 TortoiseGit \u65f6\u5df2\u7ecf\u9ed8\u8ba4\u5b89\u88c5 PuTTYgen \u5de5\u5177\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u5b83\u6765\u521b\u5efa\u79d8\u94a5\u3002"}),"\n",(0,n.jsx)(e.p,{children:"![image]![image-5]"}),"\n",(0,n.jsx)(e.p,{children:"\u6253\u5f00 PuTTYgen\uff0c\u70b9\u51fb generate \u5373\u53ef\u521b\u5efa\u5bc6\u94a5\uff0cPuTTYgen \u5176\u5b9e\u662f\u6309\u7167\u9f20\u6807\u8fd0\u884c\u7684\u8f68\u8ff9\u6765\u8ba1\u7b97\u7684\uff0c\u6240\u4ee5\u5728\u70b9\u51fb\u540e\uff0c\u6211\u4eec\u4e0d\u505c\u7684\u4f7f\u7528\u9f20\u6807\u79fb\u52a8\uff0c\u7b49\u5f85\u8fdb\u5ea6\u6761\u5b8c\u6210\u5c31\u53ef\u4ee5\u4e86\u3002"}),"\n",(0,n.jsx)(e.p,{children:"![image]![image-6]"}),"\n",(0,n.jsxs)(e.p,{children:["\u5f53\u521b\u5efa\u5b8c\u6210\u4e4b\u540e\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u4ee5\u4e0b\u5185\u5bb9\uff0c\u6ce8\u610f\u4e0d\u8981\u5173\u95ed\uff0c\u6211\u4eec\u8981\u70b9\u51fb",(0,n.jsx)(e.code,{children:"Save public key"}),"\u548c",(0,n.jsx)(e.code,{children:"Save private key"}),"\uff0c\u5e76\u5c06\u4e0a public key \u4f20\u5230\u4f60\u7684 GitHub \u6216 GitLab \u8d26\u6237\u4e4b\u4e2d\u3002"]}),"\n",(0,n.jsx)(e.p,{children:"![image]![image-7]"}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"\u6ce8\u610f\uff0c\u6211\u5728\u56fe\u4e2d\u9690\u53bb\u4e86\u5176\u4ed6 SSH keys \u4fe1\u606f\uff0c\u6211\u5efa\u8bae\u4f60\u5728\u505a\u7c7b\u4f3c\u5206\u4eab\u65f6\u4e5f\u6ce8\u610f\u9690\u53bb\u4f60\u7684\u91cd\u8981\u4fe1\u606f"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"\u597d\u4e86\uff0c\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c31\u8981\u5f00\u514b\u9686\u6211\u4eec\u7684\u9879\u76ee\u4e86\uff0c\u5728\u4f60\u60f3\u8981\u5b58\u653e\u9879\u76ee\u7684\u76ee\u5f55\u5185\uff0c\u9f20\u6807\u53f3\u952e\u9009\u62e9\u201dGit \u514b\u9686\u201c\uff0c\u7136\u540e\u8f93\u5165\u4f60\u7684\u9879\u76ee URL\uff0c\u5e76\u4e14\u52a0\u8f7d\u6211\u4eec\u521a\u521a\u751f\u4ea7\u79c1\u94a5\u6587\u4ef6\u3002"}),"\n",(0,n.jsx)(e.p,{children:"![image]![image-8]"}),"\n",(0,n.jsx)(e.p,{children:"\u6ce8\u610f\uff0c\u5728\u4f60\u786e\u8ba4\u90fd\u6ca1\u95ee\u9898\u7684\u60c5\u51b5\u4e0b\uff0c\u70b9\u51fb\u786e\u8ba4\uff0c\u7136\u540e\u4f60\u5c31\u4f1a\u770b\u5230\u5982\u4e0b\u9875\u9762\uff0c\u5982\u679c\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u95ee\u9898\uff0c\u8bf7\u6ce8\u610f\u68c0\u67e5\u9879\u76ee URL \u548c\u79c1\u94a5\u6587\u4ef6\u662f\u5426\u6b63\u786e\u3002"}),"\n",(0,n.jsx)(e.p,{children:"![image]![image-9]"}),"\n",(0,n.jsx)(e.p,{children:"\u5230\u8fd9\u91cc\uff0c\u6211\u4eec SSH \u9a8c\u8bc1\u4ed3\u5e93\u7684\u65b9\u5f0f\u5c31\u5168\u597d\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u5f00\u59cb\u8fdb\u884c\u6211\u4eec\u7684\u5de5\u4f5c\uff0c\u4f46\u5728\u9996\u6b21\u63d0\u4ea4\u6211\u4eec\u7684\u9879\u76ee\u65f6\uff0c\u9700\u8981\u8bbe\u7f6e\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u8fd9\u662f\u4e3a\u4e86\u65b9\u4fbf\u9a8c\u8bc1\u6211\u4eec\u7684\u8eab\u4efd\u3002"}),"\n",(0,n.jsx)(e.p,{children:"![image]![image-10]"}),"\n",(0,n.jsx)(e.p,{children:"\u70b9\u51fb\u201d\u662f\u201c\uff0c\u5728\u5f39\u51fa\u7684\u7a97\u53e3\u4e2d\u8bbe\u5b9a\u7528\u6237\u540d\u548c\u90ae\u7bb1\uff0c\u4fdd\u5b58\u5373\u53ef\u3002"}),"\n",(0,n.jsx)(e.p,{children:"![image]![image-11]"}),"\n",(0,n.jsx)(e.h5,{id:"https-or-http",children:"HTTPS or HTTP"}),"\n",(0,n.jsx)(e.p,{children:"\u5728\u4f7f\u7528 GitLab \u4e3a\u516c\u53f8\u5185\u90e8\u4ed3\u5e93\u65f6\uff0c\u53ef\u4ee5\u4e0d\u5f00\u901a HTTPS \u9a8c\u8bc1\uff0cHTTP \u4e5f\u4e0d\u4f1a\u5f71\u54cd\u6211\u4eec\u7684\u9a8c\u8bc1\u65b9\u5f0f\uff0c\u4f46\u662f\u4ece\u5b89\u5168\u7684\u89d2\u5ea6\u4e0a\u6765\u8bf4\uff0c\u5f3a\u70c8\u5efa\u8bae\u542f\u7528 HTTPS\uff0cHTTPS \u52a0\u5bc6\u4f20\u8f93\u53ef\u4ee5\u7ed9\u6211\u4eec\u7684\u4ee3\u7801\u548c\u7528\u6237\u4fe1\u606f\u7684\u5b89\u5168\u63d0\u4f9b\u66f4\u597d\u7684\u4fdd\u62a4\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\u5982\u679c\u4f7f\u7528 HTTPS or HTTP \u7684\u65b9\u5f0f\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u589e\u52a0\u4efb\u4f55\u5bc6\u94a5\u6587\u4ef6\u6216\u600e\u6837\uff0c\u53ea\u9700\u8981\u4f7f\u7528\u6211\u4eec\u73b0\u6709\u7684 GitHub \u6216 GitLab \u8d26\u53f7\u5373\u53ef\uff1b\u5728\u4f60\u60f3\u8981\u5b58\u653e\u9879\u76ee\u7684\u76ee\u5f55\u5185\uff0c\u9f20\u6807\u53f3\u952e\u9009\u62e9\u201dGit \u514b\u9686\u201c\uff0c\u5728\u5f39\u51fa\u7684\u7a97\u53e3\u4e2d\uff0c\u6ce8\u610f\u9879\u76ee URL \u8981\u662f\u7528 HTTPS\uff0c\u5e76\u4e14\u53bb\u6389\u52fe\u9009\u52a0\u8f7d\u5bc6\u94a5\u9009\u9879\u3002"}),"\n",(0,n.jsx)(e.p,{children:"![image]![image-12]"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"\u5982\u679c\u4f60\u7684\u9879\u76ee\u5728 GitLab \u4e0a"}),"\uff0c\u5e76\u4e14\u8fd9\u4e2a\u9879\u76ee\u662f\u4e00\u4e2a\u79c1\u6709\u9879\u76ee\uff0c\u90a3\u4e48\u8fd9\u91cc\u5c31\u4f1a\u8981\u6c42\u4f60\u8f93\u5165\u4f60\u7684 GitLab \u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u8f93\u5165\u6b63\u786e\u7684\u7528\u6237\u548c\u5bc6\u7801\u5c31\u53ef\u4ee5\u6210\u529f\u514b\u9686\u4e86\u3002"]}),"\n",(0,n.jsx)(e.p,{children:"\u4f46\u662f\uff0c\u7531\u4e8e\u6211\u7684\u6d4b\u8bd5\u9879\u76ee\u5728 GitHub \u4e0a\uff0cGitHub \u4e0a\u7684\u9879\u76ee\u9ed8\u8ba4\u90fd\u662f\u516c\u5f00\u9879\u76ee\uff0c\u6240\u4ee5\u5728\u8fd9\u4e00\u6b65\u9aa4\u4e0d\u4f1a\u8be2\u95ee\u6211\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u53ea\u6709\u5728\u6211\u9700\u8981\u5c06\u672c\u5730\u66f4\u65b0\u63a8\u9001\u5230 GitHub \u65f6\u624d\u4f1a\u9a8c\u8bc1\uff1b\u6240\u4ee5\u63a5\u4e0b\u6765\u6211\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u65b0\u589e\u6587\u4ef6 newfile2.txt\uff0c"}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"\u6ce8\u610f\uff0cGit \u4e0d\u540c SVN\uff0cGit \u7684\u63d0\u4ea4\u4e0d\u4f1a\u5c06\u66f4\u65b0\u63a8\u9001\u5230\u8fdc\u7aef\u670d\u52a1\u5668\uff0c\u6240\u4ee5\u6211\u4eec\u5728\u63d0\u4ea4\u6210\u529f\u4e4b\u540e\uff0c\u518d\u53bb\u624b\u52a8\u63a8\u9001"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"\u53f3\u952e\u9009\u62e9 Git \u63d0\u4ea4\uff0c\u4f1a\u5f39\u51fa\u63d0\u4ea4\u9875\u9762\uff0c\u6211\u4eec\u9700\u8981\u8fd9\u91cc\uff0c\u8f93\u5165\u63d0\u4ea4\u8bf4\u660e\u4fe1\u606f\uff0c\u548c\u9700\u8981\u63d0\u4ea4\u7684\u6587\u4ef6\u3002"}),"\n",(0,n.jsx)(e.p,{children:"![image]![image-13]"}),"\n",(0,n.jsx)(e.p,{children:"\u70b9\u51fb\u201d\u63d0\u4ea4\u4e4b\u540e\u201c\uff0c\u6211\u4eec\u4f1a\u770b\u6210\u529f\u63d0\u4ea4\u7684\u7a97\u53e3\uff0c\u7136\u540e\u5728\u7a97\u53e3\u9009\u62e9\u70b9\u51fb\u63a8\u9001\uff1b"}),"\n",(0,n.jsx)(e.p,{children:"![image]![image-14]"}),"\n",(0,n.jsx)(e.p,{children:"\u5f53\u6211\u4eec\u70b9\u51fb\u63a8\u9001\u4e4b\u540e\uff0c\u4f1a\u8981\u6c42\u8f93\u5165\u5bf9\u5e94\u7684 GitHub \u7528\u6237\u540d\u548c\u5bc6\u7801\uff1a"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.img,{src:"https://img.samzong.me/202307191727373.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image-1"}),"\n",(0,n.jsx)(e.img,{src:"https://img.samzong.me/202307191727374.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image-2"}),"\n",(0,n.jsx)(e.img,{src:"https://img.samzong.me/202307191727375.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image-3"}),"\n",(0,n.jsx)(e.img,{src:"https://img.samzong.me/202307191727376.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image-4"}),"\n",(0,n.jsx)(e.img,{src:"https://img.samzong.me/202307191727377.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image-5"}),"\n",(0,n.jsx)(e.img,{src:"https://img.samzong.me/202307191727378.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image-6"}),"\n",(0,n.jsx)(e.img,{src:"https://img.samzong.me/202307191727379.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image-7"}),"\n",(0,n.jsx)(e.img,{src:"https://img.samzong.me/202307191727380.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image-8"}),"\n",(0,n.jsx)(e.img,{src:"https://img.samzong.me/202307191727381.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image-9"}),"\n",(0,n.jsx)(e.img,{src:"https://img.samzong.me/202307191727382.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image-10"}),"\n",(0,n.jsx)(e.img,{src:"https://img.samzong.me/202307191727383.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image-11"}),"\n",(0,n.jsx)(e.img,{src:"https://img.samzong.me/202307191727384.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image-12"}),"\n",(0,n.jsx)(e.img,{src:"https://img.samzong.me/202307191727385.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image-13"}),"\n",(0,n.jsx)(e.img,{src:"https://img.samzong.me/202307191727386.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image-14"})]})]})}function m(i={}){const{wrapper:e}={...(0,s.a)(),...i.components};return e?(0,n.jsx)(e,{...i,children:(0,n.jsx)(g,{...i})}):g(i)}},11151:(i,e,t)=>{t.d(e,{Z:()=>a,a:()=>o});var n=t(67294);const s={},r=n.createContext(s);function o(i){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function a(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(s):i.components||s:o(i.components),n.createElement(r.Provider,{value:e},i.children)}}}]);