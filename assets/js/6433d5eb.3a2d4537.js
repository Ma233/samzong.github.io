"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[81280],{13688:(e,l,r)=>{r.r(l),r.d(l,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var o=r(17624),n=r(4552);const t={title:"Alfred Workflow \u63a8\u8350",toc:!0,tags:["Mac"],date:new Date("2022-05-03T20:14:49.000Z")},a=void 0,i={permalink:"/2022/05/03/alfred-workflow-tui-jian",source:"@site/blog/2022-05-03-alfred-workflow-tui-jian.md",title:"Alfred Workflow \u63a8\u8350",description:"Alfred \u4ecb\u7ecd",date:"2022-05-03T20:14:49.000Z",formattedDate:"2022\u5e745\u67083\u65e5",tags:[{label:"Mac",permalink:"/tags/mac"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Alfred Workflow \u63a8\u8350",toc:!0,tags:["Mac"],date:"2022-05-03T20:14:49.000Z"},unlisted:!1,prevItem:{title:"\u817e\u8baf\u4e91\u5fae\u670d\u52a1\u7f51\u5173",permalink:"/2022/05/06/teng-xun-yun-wei-fu-wu-wang-guan"},nextItem:{title:"youtube-dl \u4e0b\u8f7d YouTube \u89c6\u9891",permalink:"/2022/05/03/youtube-dl-xia-zai-youtube-shi-pin"}},s={authorsImageUrls:[]},c=[{value:"Alfred \u4ecb\u7ecd",id:"alfred-\u4ecb\u7ecd",level:2},{value:"Workflow \u4ecb\u7ecd",id:"workflow-\u4ecb\u7ecd",level:2},{value:"\u6211\u7684\u63a8\u8350",id:"\u6211\u7684\u63a8\u8350",level:2},{value:"5 \u661f\u63a8\u8350",id:"5-\u661f\u63a8\u8350",level:3},{value:"4 \u661f\u63a8\u8350",id:"4-\u661f\u63a8\u8350",level:3},{value:"\u5982\u4f55\u83b7\u53d6 Workflow ?",id:"\u5982\u4f55\u83b7\u53d6-workflow-",level:2},{value:"\u66f4\u591a\u5173\u4e8e Alfred \u7684\u4f7f\u7528\u6559\u7a0b",id:"\u66f4\u591a\u5173\u4e8e-alfred-\u7684\u4f7f\u7528\u6559\u7a0b",level:2},{value:"\u89c6\u9891\u6559\u7a0b",id:"\u89c6\u9891\u6559\u7a0b",level:2},{value:"\u6587\u672c\u6559\u7a0b",id:"\u6587\u672c\u6559\u7a0b",level:2}];function w(e){const l={a:"a",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,n.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.h2,{id:"alfred-\u4ecb\u7ecd",children:"Alfred \u4ecb\u7ecd"}),"\n",(0,o.jsx)(l.p,{children:"Alfred \u662f Mac \u4e0a\u4e00\u6b3e\u8457\u540d\u7684\u6548\u7387\u5e94\u7528\uff0c\u5f3a\u5927\u7684\u529f\u80fd\u548c\u4f17\u591a\u7684\u6269\u5c55\u80fd\u8ba9\u4f60\u5728\u5b9e\u9645\u64cd\u4f5c\u4e2d\u5927\u5e45\u63d0\u5347\u5de5\u4f5c\u6548\u7387\uff0c\u7f51\u7edc\u4e0a\u4e5f\u6709\u5927\u91cf\u5173\u4e8e\u7684 Alfred \u7684\u8bc4\u6d4b\u548c\u6280\u5de7\u7684\u6587\u7ae0\u3002"}),"\n",(0,o.jsx)(l.p,{children:(0,o.jsx)(l.img,{src:"https://cdn.sspai.com/attachment/origin/2016/02/19/311872.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1",alt:"image"})}),"\n",(0,o.jsx)(l.h2,{id:"workflow-\u4ecb\u7ecd",children:"Workflow \u4ecb\u7ecd"}),"\n",(0,o.jsx)(l.p,{children:"Workflow \u5de5\u4f5c\u6d41\uff1b\u5c06\u4e00\u4ef6\u4e8b\u60c5\u7684\u591a\u4e2a\u6b65\u9aa4\uff0c\u901a\u8fc7\u4e00\u4e2a\u7684\u89c4\u5219\u76f8\u8fde\uff0c\u5e76\u4f9d\u6b21\u6267\u884c\uff0c\u6700\u7ec8\u5b8c\u6210\uff0c\u8fd9\u4e2a\u65b9\u5f0f\u5c31\u662f\u5de5\u4f5c\u6d41\uff1bAlfred Workflow \u5c31\u662f\u4e00\u4e2a\u5c06\u6211\u4eec\u65e5\u5e38\u5de5\u4f5c\u6d41 \u5b9e\u73b0\u7684\u4e00\u4e2a\u5de5\u5177\uff0c\u53ef\u4ee5\u8ba9\u6211\u4eec\u5728 Alfred \u4e2d\u66f4\u52a0\u65b9\u4fbf\u7684\u5b8c\u6210\u6211\u4eec\u7684\u5de5\u4f5c\uff1b\u73b0\u5b9e\u751f\u6d3b\u4e2d\u7684\u5de5\u4f5c\u6d41\u53ef\u80fd\u66f4\u4e3a\u590d\u6742\uff0c\u4f46\u672c\u8d28\u8fd8\u662f\u5982\u6b64\u3002\u6b63\u662f\u57fa\u4e8e\u8fd9\u79cd\u73b0\u5b9e\u80cc\u666f\uff0calfred \u4ece 2.0 \u7248\u672c\u8d77\u52a0\u5165\u4e86 workflow\uff0c\u7b80\u5355\u7684\u793a\u4f8b\u8bf4\u660e\u3002"}),"\n",(0,o.jsx)(l.p,{children:(0,o.jsx)(l.img,{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/mUZ6OI.png?x-oss-process=image/resize,w_960,m_lfit",alt:"mUZ6OI"})}),"\n",(0,o.jsx)(l.h2,{id:"\u6211\u7684\u63a8\u8350",children:"\u6211\u7684\u63a8\u8350"}),"\n",(0,o.jsx)(l.p,{children:"\u6574\u7406\u5e38\u7528\u7684\u4e00\u4e9b Workflow \u5206\u4eab\uff0c\u63d0\u9ad8\u5de5\u4f5c\u548c\u751f\u6d3b\u7684\u6548\u7387\u5c0f\u6280\u5de7\u3002"}),"\n",(0,o.jsx)(l.h3,{id:"5-\u661f\u63a8\u8350",children:"5 \u661f\u63a8\u8350"}),"\n",(0,o.jsxs)(l.ul,{children:["\n",(0,o.jsx)(l.li,{children:(0,o.jsx)(l.a,{href:"https://www.packal.org/workflow/timezones-2",children:"https://www.packal.org/workflow/timezones-2"})}),"\n",(0,o.jsx)(l.li,{children:(0,o.jsx)(l.a,{href:"https://www.packal.org/workflow/homebrew-and-cask-alfred",children:"https://www.packal.org/workflow/homebrew-and-cask-alfred"})}),"\n",(0,o.jsx)(l.li,{children:(0,o.jsx)(l.a,{href:"https://www.packal.org/workflow/mac-app-store-search",children:"https://www.packal.org/workflow/mac-app-store-search"})}),"\n",(0,o.jsx)(l.li,{children:(0,o.jsx)(l.a,{href:"https://github.com/xiaotu9639/alfred-yuque-workflow",children:"https://github.com/xiaotu9639/alfred-yuque-workflow"})}),"\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.a,{href:"https://github.com/whyliam/whyliam.workflows.youdao",children:"https://github.com/whyliam/whyliam.workflows.youdao"})," \u6709\u9053\u7ffb\u8bd1","\n",(0,o.jsxs)(l.ul,{children:["\n",(0,o.jsx)(l.li,{children:"zhiyu_id: 12ba82650be566f5"}),"\n",(0,o.jsxs)(l.li,{children:["zhiyu_key",":XWkQjLboE4llgQuWZMR1e0d03Au9w8ob"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(l.hr,{}),"\n",(0,o.jsx)(l.h3,{id:"4-\u661f\u63a8\u8350",children:"4 \u661f\u63a8\u8350"}),"\n",(0,o.jsxs)(l.ul,{children:["\n",(0,o.jsx)(l.li,{children:(0,o.jsx)(l.a,{href:"https://www.packal.org/workflow/alfred-markdown-table",children:"https://www.packal.org/workflow/alfred-markdown-table"})}),"\n",(0,o.jsx)(l.li,{children:(0,o.jsx)(l.a,{href:"https://www.packal.org/workflow/pretty-json",children:"https://www.packal.org/workflow/pretty-json"})}),"\n",(0,o.jsx)(l.li,{children:(0,o.jsx)(l.a,{href:"https://www.packal.org/workflow/who",children:"https://www.packal.org/workflow/who"})}),"\n"]}),"\n",(0,o.jsx)(l.h2,{id:"\u5982\u4f55\u83b7\u53d6-workflow-",children:"\u5982\u4f55\u83b7\u53d6 Workflow ?"}),"\n",(0,o.jsxs)(l.p,{children:["\u53ef\u4ee5\u5230\u8fd9\u4e2a\u7f51\u7ad9 ",(0,o.jsx)(l.a,{href:"https://www.packal.org/",children:"https://www.packal.org/"}),"  \u6709\u975e\u5e38\u4e30\u5bcc\u7684 Workflow \u6216\u8005 \u4e3b\u9898\u53ef\u4ee5\u9009\u62e9\uff0c\u4e30\u5bcc\u4f60\u7684 Alfred \u4f7f\u7528"]}),"\n",(0,o.jsx)(l.p,{children:"\u5982\u679c\u4f60\u6709\u80fd\u529b\u5236\u4f5c\u4e00\u4e9b\u4f18\u79c0\u7684 Workflow\uff0c\u4e5f\u53ef\u4ee5\u5728\u8fd9\u91cc\u5206\u4eab"}),"\n",(0,o.jsx)(l.h2,{id:"\u66f4\u591a\u5173\u4e8e-alfred-\u7684\u4f7f\u7528\u6559\u7a0b",children:"\u66f4\u591a\u5173\u4e8e Alfred \u7684\u4f7f\u7528\u6559\u7a0b"}),"\n",(0,o.jsx)(l.p,{children:"\u7f51\u7edc\u4e0a\u5df2\u7ecf\u6709\u5927\u91cf\u7684 \u89c6\u9891\u548c\u6587\u672c\u7684\u4f7f\u7528\u6559\u7a0b\u4e86\uff0c\u6240\u4ee5\u6211\u8fd9\u91cc\u76f4\u63a5\u5f15\u7528\u6211\u5b66\u4e60\u65f6\u4f7f\u7528\u7684\u6559\u7a0b"}),"\n",(0,o.jsx)(l.h2,{id:"\u89c6\u9891\u6559\u7a0b",children:"\u89c6\u9891\u6559\u7a0b"}),"\n",(0,o.jsx)("iframe",{width:"640",height:"360",src:"//player.bilibili.com/player.html?aid=894481262&bvid=BV1GP4y1g7HJ&cid=700510300&page=1",scrolling:"no",frameborder:"no",framespacing:"0",allowfullscreen:"true"}),"\n",(0,o.jsx)(l.h2,{id:"\u6587\u672c\u6559\u7a0b",children:"\u6587\u672c\u6559\u7a0b"}),"\n",(0,o.jsx)(l.p,{children:(0,o.jsx)(l.a,{href:"https://ihtcboy.com/2020/02/09/2020-02-09_%E7%A8%8B%E5%BA%8F%E5%91%98%E7%9A%84macOS%E7%B3%BB%E5%88%97%EF%BC%9A%E9%AB%98%E6%95%88Alfred%E8%BF%9B%E9%98%B6/",children:"\u7a0b\u5e8f\u5458\u7684 macOS \u7cfb\u5217\uff1a\u9ad8\u6548 Alfred \u8fdb\u9636"})}),"\n",(0,o.jsx)(l.p,{children:"\u540c\u65f6\uff0c\u4e5f\u63a8\u8350\u4e0b\u8fd9\u4f4d\u4f18\u79c0\u535a\u4e3b\uff0c\u5982\u679c\u5173\u6ce8 iOS \u5f00\u53d1\uff0c\u53ef\u4ee5\u5173\u6ce8\u4ed6\u66f4\u65b0\u7684\u5185\u5bb9"})]})}function d(e={}){const{wrapper:l}={...(0,n.M)(),...e.components};return l?(0,o.jsx)(l,{...e,children:(0,o.jsx)(w,{...e})}):w(e)}},4552:(e,l,r)=>{r.d(l,{I:()=>i,M:()=>a});var o=r(11504);const n={},t=o.createContext(n);function a(e){const l=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(t.Provider,{value:l},e.children)}}}]);