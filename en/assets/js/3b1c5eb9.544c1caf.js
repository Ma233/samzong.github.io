"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[71188],{42120:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=o(17624),a=o(4552);const s={title:"HowTo install Zoomdata",tags:["Microservice","Tools"],date:new Date("2017-03-06T09:44:47.000Z")},r=void 0,i={permalink:"/en/2017/03/06/HowTo-install-Zoomdata",source:"@site/blog/2017-03-06-HowTo-install-Zoomdata.md",title:"HowTo install Zoomdata",description:"Zoomdata \u662f\u4e00\u4e2a\u5927\u6570\u636e\u53ef\u89c6\u5316\u5c55\u793a\u7684\u5de5\u5177\uff0c\u7531 ZoomData \u4f01\u4e1a\u521b\u5efa\uff0c\u662f\u4e3a\u6570\u4e0d\u591a\u7684\u540c\u65f6\u652f\u6301\u79fb\u52a8\u7aef\u7684\u6570\u636e\u5206\u6790\u516c\u53f8\uff0cZoomdata \u7684\u53ef\u89c6\u5316\u53ef\u5c06\u5927\u6570\u636e\u6d41\u8f6c\u5316\u4e3a\u89e6\u5c4f\u53cb\u597d\u7684\uff0c\u827a\u672f\u611f\u5341\u8db3\u7684\u4e09\u7ef4\u5f62\u6001\uff0cZoomdata \u7684\u5b9a\u4f4d\u662f\u975e ETL(\u4f20\u7edf\u7684\u63d0\u53d6\u3001\u8f6c\u6362\u548c\u52a0\u8f7d\u7684\u6570\u636e\u5904\u7406\u8fc7\u7a0b) \u5de5\u5177\uff0cZoomdata \u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\uff0c\u5305\u62ec\u793e\u4ea4\u5a92\u4f53\u7b49\uff0c\u5176\u4e2d\u5e94\u7528\u6700\u4e3b\u6d41\u662f\u5927\u6570\u636e\u5e73\u53f0\u7684\u5c55\u793a\u5de5\u5177\uff0c\u5e76\u4e14 Zoomdata \u5bf9 Cloudera Impala \u505a\u4e86\u5f88\u597d\u7684\u652f\u6301\uff0c\u6240\u4ee5\u6211\u4eec\u505a\u4e86 Zoomdata+Cloudera \u6280\u672f\u5b9e\u65bd\u3002",date:"2017-03-06T09:44:47.000Z",formattedDate:"March 6, 2017",tags:[{label:"Microservice",permalink:"/en/tags/microservice"},{label:"Tools",permalink:"/en/tags/tools"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo install Zoomdata",tags:["Microservice","Tools"],date:"2017-03-06T09:44:47.000Z"},unlisted:!1,prevItem:{title:"\u5728 Linux \u7ec8\u7aef\u4f7f\u7528 SSR \u670d\u52a1\u5b9e\u73b0\u79d1\u5b66\u4e0a\u7f51",permalink:"/en/2017/03/23/zai-linux-zhong-duan-shi-yong-ssr-fu-wu-shi-xian-ke-xue-shang-wang"},nextItem:{title:"\u56db\u9636\u9b54\u65b9\u7279\u6b8a\u60c5\u51b5\u4e4b\u5904\u7406",permalink:"/en/2017/03/04/si-jie-mo-fang-te-shu-qing-kuang-zhi-chu-li"}},l={authorsImageUrls:[]},d=[{value:"<strong>\u7cfb\u7edf\u8981\u6c42</strong>",id:"\u7cfb\u7edf\u8981\u6c42",level:4}];function c(t){const e={a:"a",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.M)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["Zoomdata \u662f\u4e00\u4e2a\u5927\u6570\u636e\u53ef\u89c6\u5316\u5c55\u793a\u7684\u5de5\u5177\uff0c\u7531 ZoomData \u4f01\u4e1a\u521b\u5efa\uff0c\u662f\u4e3a\u6570\u4e0d\u591a\u7684\u540c\u65f6\u652f\u6301\u79fb\u52a8\u7aef\u7684\u6570\u636e\u5206\u6790\u516c\u53f8\uff0cZoomdata \u7684\u53ef\u89c6\u5316\u53ef\u5c06\u5927\u6570\u636e\u6d41\u8f6c\u5316\u4e3a\u89e6\u5c4f\u53cb\u597d\u7684\uff0c\u827a\u672f\u611f\u5341\u8db3\u7684\u4e09\u7ef4\u5f62\u6001\uff0cZoomdata \u7684\u5b9a\u4f4d\u662f\u975e ETL(\u4f20\u7edf\u7684\u63d0\u53d6\u3001\u8f6c\u6362\u548c\u52a0\u8f7d\u7684\u6570\u636e\u5904\u7406\u8fc7\u7a0b) \u5de5\u5177\uff0cZoomdata \u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\uff0c\u5305\u62ec\u793e\u4ea4\u5a92\u4f53\u7b49\uff0c\u5176\u4e2d\u5e94\u7528\u6700\u4e3b\u6d41\u662f\u5927\u6570\u636e\u5e73\u53f0\u7684\u5c55\u793a\u5de5\u5177\uff0c\u5e76\u4e14 Zoomdata \u5bf9 Cloudera Impala \u505a\u4e86\u5f88\u597d\u7684\u652f\u6301\uff0c\u6240\u4ee5\u6211\u4eec\u505a\u4e86 Zoomdata+Cloudera \u6280\u672f\u5b9e\u65bd\u3002",(0,n.jsx)(e.sup,{children:(0,n.jsx)(e.a,{href:"#user-content-fn-1-1ac1ac",id:"user-content-fnref-1-1ac1ac","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),"\n",(0,n.jsx)(e.h4,{id:"\u7cfb\u7edf\u8981\u6c42",children:(0,n.jsx)(e.strong,{children:"\u7cfb\u7edf\u8981\u6c42"})}),"\n",(0,n.jsx)(e.p,{children:"Zoomdata \u6700\u65b0\u7248\u662f v2.4\uff0c\u652f\u6301\u5e38\u89c1\u4e3b\u6d41\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5e76\u4e14\u6709\u975e\u5e38\u53cb\u597d\u7684\u5b89\u88c5\u5e2e\u52a9\uff0c\u4f46\u662f Zoomdata \u4e0d\u652f\u6301\u5b89\u88c5\u5728 32 \u4f4d\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e4b\u4e0a"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"biaoti"}),(0,n.jsx)(e.th,{children:"biaoti"}),(0,n.jsx)(e.th,{children:"baiiti"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"list"}),(0,n.jsx)(e.td,{children:"file"}),(0,n.jsx)(e.td,{children:"china"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"letian"}),(0,n.jsx)(e.td,{children:"zhong"}),(0,n.jsx)(e.td,{children:"hongkong"})]})]})]}),"\n",(0,n.jsxs)(e.section,{"data-footnotes":!0,className:"footnotes",children:[(0,n.jsx)(e.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{id:"user-content-fn-1-1ac1ac",children:["\n",(0,n.jsxs)(e.p,{children:["\u8fd9\u662f\u4e00\u4e2a\u793a\u610f\u7684\u6587\u6863 ",(0,n.jsx)(e.a,{href:"#user-content-fnref-1-1ac1ac","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(t={}){const{wrapper:e}={...(0,a.M)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(c,{...t})}):c(t)}},4552:(t,e,o)=>{o.d(e,{I:()=>i,M:()=>r});var n=o(11504);const a={},s=n.createContext(a);function r(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);