"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[30960],{90824:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=i(17624),s=i(4552);const r={title:"JWT \u5185\u7f6e\u7684\u65b9\u5f0f",tags:["Microservice"]},l=void 0,c={permalink:"/2022/10/18/jwt-nei-zhi-de-fang-shi",source:"@site/blog/2022-10-18-jwt-nei-zhi-de-fang-shi.md",title:"JWT \u5185\u7f6e\u7684\u65b9\u5f0f",description:"- \u652f\u6301\u4e3a API \u542f\u7528 jwt token \u89e3\u7801\u7684\u80fd\u529b ,  \u8bfb\u53d6\u7f51\u5173\u7684 jwt key",date:"2022-10-18T00:00:00.000Z",formattedDate:"2022\u5e7410\u670818\u65e5",tags:[{label:"Microservice",permalink:"/tags/microservice"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"JWT \u5185\u7f6e\u7684\u65b9\u5f0f",tags:["Microservice"]},unlisted:!1,prevItem:{title:"Redash for Docker \u90e8\u7f72",permalink:"/2022/10/22/redash-for-docker-bu-shu"},nextItem:{title:"\u5527\u5527\u590d\u5527\u5527",permalink:"/2022/10/06/ji-ji-fu-ji-ji"}},o={authorsImageUrls:[]},a=[{value:"\u8fed\u4ee3\u7684\u65b9\u5411",id:"\u8fed\u4ee3\u7684\u65b9\u5411",level:3}];function d(e){const n={h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u652f\u6301\u4e3a API \u542f\u7528 jwt token \u89e3\u7801\u7684\u80fd\u529b ,  \u8bfb\u53d6\u7f51\u5173\u7684 jwt key","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u8bfb\u53d6\u8bf7\u6c42 Header \u4e2d\u7684 Authorization"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u9700\u8981\u652f\u6301\u4e3a\u7f51\u5173\u914d\u7f6e\u591a jwt key , and \u52a0\u5bc6\u957f\u5ea6 ?","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u89e3\u5bc6\u7684\u6027\u80fd\u95ee\u9898"}),"\n",(0,t.jsx)(n.li,{children:"expire_time \u8fc7\u671f\u65f6\u95f4\u7684\u914d\u7f6e"}),"\n",(0,t.jsx)(n.li,{children:"\u89e3\u5bc6\u540e\u7684\u53c2\u6570\u4f20\u9012"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1666060887030-ff0a6f09-9bf0-44d5-a92b-dc36fc9b7d47.png?x-oss-process=image/resize,w_960,m_lfit",alt:"image.png"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8fed\u4ee3\u7684\u65b9\u5411",children:"\u8fed\u4ee3\u7684\u65b9\u5411"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u91c7\u7528\u5916\u7f6e\u7684 Jwt server \u8ba4\u8bc1\u670d\u52a1","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u914d\u7f6e jwt server url"}),"\n",(0,t.jsx)(n.li,{children:"respone \u89e3\u5bc6\u540e\u7684  json \u5185\u5bb9\uff1b\u8fdb\u884c\u53c2\u6570\u4f20\u9012"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u91c7\u7528\u6258\u7ba1\u7684 Jwt server \u6765\u8fdb\u884c\u6258\u7ba1","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u914d\u7f6e jwt key (\u652f\u6301\u81ea\u52a8\u751f\u6210)"}),"\n",(0,t.jsx)(n.li,{children:"expire_time"}),"\n",(0,t.jsx)(n.li,{children:"\u52a0\u5bc6\u957f\u5ea6"}),"\n",(0,t.jsxs)(n.li,{children:["\u81ea\u52a8\u914d\u7f6e\u53c2\u6570\u4f20\u9012","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5168\u90e8\u4f20\u9012"}),"\n",(0,t.jsx)(n.li,{children:"\u5168\u90e8\u4f20\u9012 (not token)"}),"\n",(0,t.jsx)(n.li,{children:"\u767d\u540d\u5355\u4f20\u9012"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>c,M:()=>l});var t=i(11504);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);