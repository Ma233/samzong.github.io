"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[1655],{48757:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=t(85893),a=t(11151);const r={title:"Docker Hub \u56fd\u5185\u52a0\u901f",tags:["Docker"],date:new Date("2017-01-07T15:32:23.000Z")},i=void 0,c={permalink:"/2017/01/07/docker-hub-guo-nei-jia-su",source:"@site/blog/2017-01-07-docker-hub-guo-nei-jia-su.md",title:"Docker Hub \u56fd\u5185\u52a0\u901f",description:"\u56e0\u4e3a Docker Hub \u6ca1\u6709\u5728\u56fd\u5185\u90e8\u7f72\u7ad9\u70b9\u6216\u8005\u589e\u52a0\u4e86\u56fd\u5185\u7684 CDN\uff0c\u8fd9\u5bfc\u81f4\u56fd\u5185\u7684\u5f00\u53d1\u8005\u5728\u4f7f\u7528 docker pull \u83b7\u53d6 images \u7684\u65f6\u5019\u901f\u5ea6\u975e\u5e38\u7684\u6162\uff0c\u751a\u81f3\u4e8e\u56e0\u4e3a\u7f51\u7edc\u7684\u539f\u56e0\u4f1a\u5931\u8d25\u3002",date:"2017-01-07T15:32:23.000Z",formattedDate:"January 7, 2017",tags:[{label:"Docker",permalink:"/tags/docker"}],readingTime:1.005,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Docker Hub \u56fd\u5185\u52a0\u901f",tags:["Docker"],date:"2017-01-07T15:32:23.000Z"},unlisted:!1,prevItem:{title:"\u6211\u7684 2017",permalink:"/2017/01/01/wo-de-2017"},nextItem:{title:"\u751f\u6d3b\u5728\u522b\u5904",permalink:"/2017/01/10/sheng-huo-zai-bie-chu"}},s={authorsImageUrls:[]},l=[{value:"1. \u6ce8\u518c DaoCloud \u8d26\u53f7",id:"1-\u6ce8\u518c-daocloud-\u8d26\u53f7",level:4},{value:"2. \u767b\u5f55\u5230\u4f60\u7684 DaoCloud \u8d26\u53f7\u5185\uff0c\u7136\u540e\u5165\u4e0b\u56fe\u64cd\u4f5c",id:"2-\u767b\u5f55\u5230\u4f60\u7684-daocloud-\u8d26\u53f7\u5185\u7136\u540e\u5165\u4e0b\u56fe\u64cd\u4f5c",level:4},{value:"3. \u67e5\u770b\u4f60\u7684 DaoCloud \u52a0\u901f\u5668\u5730\u5740",id:"3-\u67e5\u770b\u4f60\u7684-daocloud-\u52a0\u901f\u5668\u5730\u5740",level:4}];function d(e){const o={a:"a",h4:"h4",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"\u56e0\u4e3a Docker Hub \u6ca1\u6709\u5728\u56fd\u5185\u90e8\u7f72\u7ad9\u70b9\u6216\u8005\u589e\u52a0\u4e86\u56fd\u5185\u7684 CDN\uff0c\u8fd9\u5bfc\u81f4\u56fd\u5185\u7684\u5f00\u53d1\u8005\u5728\u4f7f\u7528 docker pull \u83b7\u53d6 images \u7684\u65f6\u5019\u901f\u5ea6\u975e\u5e38\u7684\u6162\uff0c\u751a\u81f3\u4e8e\u56e0\u4e3a\u7f51\u7edc\u7684\u539f\u56e0\u4f1a\u5931\u8d25\u3002"}),"\n",(0,n.jsxs)(o.p,{children:["\u4f46\u662f Docker Hub \u6709\u7740\u975e\u5e38\u4e30\u5bcc\u7684\u955c\u50cf\u8d44\u6e90\uff0c\u6240\u4ee5\u6211\u8fd9\u4e00\u76f4\u662f\u4e2a\u95ee\u9898\u56f0\u6270\u7740\u6211\uff0c\u4e00\u6b21\u5076\u7136\u673a\u4f1a\u53d1\u73b0\u4e86",(0,n.jsx)(o.a,{href:"https://www.daocloud.io",children:"DaoCloud"}),"\u63d0\u4f9b\u4e86\u56fd\u5185\u955c\u50cf\u52a0\u901f\u670d\u52a1\uff0c\u5e76\u4e14\u63d0\u4f9b\u7684 Docker Hub Mirror \u8be6\u7ec6\u7684\u6587\u6863\u3002"]}),"\n",(0,n.jsx)(o.h4,{id:"1-\u6ce8\u518c-daocloud-\u8d26\u53f7",children:"1. \u6ce8\u518c DaoCloud \u8d26\u53f7"}),"\n",(0,n.jsxs)(o.p,{children:["\u9996\u5148\uff0c\u4f60\u9700\u8981\u5230\u4e00 DaoCloud \u8d26\u53f7\uff0c\u6ce8\u518c\u5f88\u65b9\u4fbf\uff0c\u70b9\u51fb\u5730\u5740\uff1a",(0,n.jsx)(o.a,{href:"https://account.daocloud.io/signup",children:"signup"}),"\n",(0,n.jsx)(o.img,{src:"https://img.samzong.me/202307191530439.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image"})]}),"\n",(0,n.jsx)(o.h4,{id:"2-\u767b\u5f55\u5230\u4f60\u7684-daocloud-\u8d26\u53f7\u5185\u7136\u540e\u5165\u4e0b\u56fe\u64cd\u4f5c",children:"2. \u767b\u5f55\u5230\u4f60\u7684 DaoCloud \u8d26\u53f7\u5185\uff0c\u7136\u540e\u5165\u4e0b\u56fe\u64cd\u4f5c"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:"https://img.samzong.me/202307191530440.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image"})}),"\n",(0,n.jsx)(o.h4,{id:"3-\u67e5\u770b\u4f60\u7684-daocloud-\u52a0\u901f\u5668\u5730\u5740",children:"3. \u67e5\u770b\u4f60\u7684 DaoCloud \u52a0\u901f\u5668\u5730\u5740"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"https://www.daocloud.io/mirror#accelerator-doc",children:"\u94fe\u63a5"})}),"\n",(0,n.jsxs)(o.p,{children:["\u9009\u62e9\u4f60\u76f8\u5bf9\u5e94\u5e73\u53f0\u7684\u7684\u52a0\u901f\u5668\u8bbe\u7f6e\n",(0,n.jsx)(o.img,{src:"https://img.samzong.me/202307191530441.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image"})]})]})}function u(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>c,a:()=>i});var n=t(67294);const a={},r=n.createContext(a);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);