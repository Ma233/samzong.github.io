"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[71540],{6616:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var s=n(17624),o=n(4552);const l={title:"Apollo \u5982\u4f55\u5b9e\u73b0\u914d\u7f6e\u70ed\u53d1\u5e03",tags:["Microservice"]},c=void 0,r={permalink:"/2022/01/03/apollo-ru-he-shi-xian-pei-zhi-re-fa-bu",source:"@site/blog/2022-01-03-apollo-ru-he-shi-xian-pei-zhi-re-fa-bu.md",title:"Apollo \u5982\u4f55\u5b9e\u73b0\u914d\u7f6e\u70ed\u53d1\u5e03",description:"\u914d\u7f6e\u4e2d\u5fc3\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4f53\u7cfb\u4e2d\u662f\u975e\u5e38\u91cd\u8981\u7684\u57fa\u7840\u8bbe\u65bd\u670d\u52a1\uff0c\u627f\u62c5\u7740\u5206\u5e03\u5f0f\u914d\u7f6e\u96c6\u4e2d\u7ba1\u7406\u3001\u914d\u7f6e\u70ed\u53d1\u5e03\u4ee5\u53ca\u5ba1\u8ba1\u7b49\u91cd\u8981\u7684\u804c\u8d23\u3002\u672c\u6587\u4e3b\u8981\u63a2\u8ba8 Apollo \u914d\u7f6e\u4e2d\u5fc3\u7684\u914d\u7f6e\u70ed\u53d1\u5e03\u7279\u6027\u5982\u4f55\u5b9e\u73b0\u3002",date:"2022-01-03T00:00:00.000Z",formattedDate:"January 3, 2022",tags:[{label:"Microservice",permalink:"/tags/microservice"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Apollo \u5982\u4f55\u5b9e\u73b0\u914d\u7f6e\u70ed\u53d1\u5e03",tags:["Microservice"]},unlisted:!1,prevItem:{title:"MySQL Case WHEN",permalink:"/2022/01/04/mysql-case-when"},nextItem:{title:"get current timestamp",permalink:"/2022/01/03/get-current-timestamp"}},t={authorsImageUrls:[]},a=[{value:"Apollo \u5ba2\u6237\u7aef\u83b7\u53d6\u914d\u7f6e\u4fe1\u606f",id:"apollo-\u5ba2\u6237\u7aef\u83b7\u53d6\u914d\u7f6e\u4fe1\u606f",level:3}];function p(e){const i={h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"\u914d\u7f6e\u4e2d\u5fc3\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4f53\u7cfb\u4e2d\u662f\u975e\u5e38\u91cd\u8981\u7684\u57fa\u7840\u8bbe\u65bd\u670d\u52a1\uff0c\u627f\u62c5\u7740\u5206\u5e03\u5f0f\u914d\u7f6e\u96c6\u4e2d\u7ba1\u7406\u3001\u914d\u7f6e\u70ed\u53d1\u5e03\u4ee5\u53ca\u5ba1\u8ba1\u7b49\u91cd\u8981\u7684\u804c\u8d23\u3002\u672c\u6587\u4e3b\u8981\u63a2\u8ba8 Apollo \u914d\u7f6e\u4e2d\u5fc3\u7684\u914d\u7f6e\u70ed\u53d1\u5e03\u7279\u6027\u5982\u4f55\u5b9e\u73b0\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1641235647447-4020ae67-bd11-4fde-bd75-930cd6bec2de.jpeg?x-oss-process=image/resize,w_960,m_lfit",alt:"image"})}),"\n",(0,s.jsx)(i.p,{children:"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u914d\u7f6e\u53d1\u5e03\u7684\u4e3b\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\uff081\uff09\u7528\u6237\u901a\u8fc7 Portal \u5411 AdminService \u53d1\u5e03\u914d\u7f6e\u4fe1\u606f\uff1b"}),"\n",(0,s.jsx)(i.li,{children:"\uff082\uff09AdminService \u5728\u914d\u7f6e\u53d1\u5e03\u540e\u4f1a\u5f80 ReleaseMessage \u8868\u63d2\u5165\u4e00\u6761\u6d88\u606f\u8bb0\u5f55\uff1b"}),"\n",(0,s.jsx)(i.li,{children:"\uff083\uff09ConfigService \u4e2d\u5305\u542b\u4e86\u4e00\u4e2a\u5b9a\u65f6\u7ebf\u7a0b\uff0c\u8be5\u5b9a\u65f6\u7ebf\u7a0b\u6bcf\u79d2\u626b\u63cf\u4e00\u6b21 ReleaseMessage \u8868\uff0c\u68c0\u67e5\u8868\u4e2d\u662f\u5426\u6709\u65b0\u7684\u6d88\u606f\u8bb0\u5f55\uff1b"}),"\n",(0,s.jsx)(i.li,{children:"\uff084\uff09\u5982\u679c\u5b58\u5728\u914d\u7f6e\u66f4\u65b0\uff0cConfigService \u5c31\u4f1a\u901a\u77e5\u6240\u6709\u7684\u6d88\u606f\u76d1\u542c\u5668\uff1b"}),"\n",(0,s.jsx)(i.li,{children:"\uff085\uff09\u901a\u77e5 Controller \u4f1a\u6839\u636e\u53d1\u5e03\u7684\u914d\u7f6e\u4fe1\u606f\u901a\u77e5\u5bf9\u5e94\u7684\u5ba2\u6237\u7aef\uff1b"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1641235647465-f12e26b4-9ab7-496d-8a0a-227b36142f00.jpeg?x-oss-process=image/resize,w_960,m_lfit",alt:"image"})}),"\n",(0,s.jsx)(i.p,{children:"\u8fd9\u91cc\u7684\u914d\u7f6e\u66f4\u65b0\u63a8\u9001\u5176\u5b9e\u5e76\u4e0d\u662f\u771f\u6b63\u8fdb\u884c\u4fe1\u606f\u63a8\u9001\uff0c\u800c\u662f\u901a\u8fc7\u957f\u8f6e\u8be2\u6765\u5b9e\u73b0\u914d\u7f6e\u7684\u66f4\u65b0\u3002\u5b9e\u9645\u4e0a\u5e76\u4e0d\u662f\u914d\u7f6e\u7684\u66f4\u65b0\u63a8\u9001\uff0c\u800c\u662f\u914d\u7f6e\u66f4\u65b0\u901a\u77e5\u7684\u63a8\u9001\uff0c\u5ba2\u6237\u7aef\u62ff\u5230\u901a\u77e5\u540e\u9700\u8981\u8fdb\u4e00\u6b65\u83b7\u53d6\u5177\u4f53\u7684\u53d8\u5316\u7684\u914d\u7f6e\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u957f\u8f6e\u8be2\n\uff081\uff09\u5982\u679c\u4f7f\u7528 Push \u65b9\u5f0f\u63a8\u9001\u6570\u636e\u4f1a\u6709\u4ec0\u4e48\u95ee\u9898\uff1f"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1641235647464-e43d03b0-0814-4f71-b730-fae9a30058d3.jpeg?x-oss-process=image/resize,w_960,m_lfit",alt:"image"})}),"\n",(0,s.jsx)(i.p,{children:"\u670d\u52a1\u7aef\u9700\u8981\u4e0e\u5ba2\u6237\u7aef\u5efa\u7acb\u957f\u8fde\u63a5\uff0c\u670d\u52a1\u7aef\u6709\u6570\u636e\u66f4\u65b0\u7684\u65f6\u5019\u53ef\u4ee5\u8fdb\u884c\u6570\u636e\u63a8\u9001\uff0c\u6570\u636e\u66f4\u65b0\u6bd4\u8f83\u53ca\u65f6\u3002\u4f46\u662f\u670d\u52a1\u7aef\u65e0\u6cd5\u611f\u77e5\u5ba2\u6237\u7aef\u7684\u5904\u7406\u80fd\u529b\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u6570\u636e\u79ef\u538b\u3002\u53e6\u5916\u96c6\u7fa4\u60c5\u51b5\u4e0b\u90e8\u5206\u8282\u70b9\u4e0d\u5728\u7ebf\u4f1a\u901a\u77e5\u5931\u8d25\uff0c\u7b49\u5ba2\u6237\u7aef\u53c8\u5728\u7ebf\u540e\u9700\u8981\u8fdb\u884c\u8865\u507f\u63a8\u9001\uff0c\u8282\u70b9\u8fd8\u6709\u53ef\u80fd\u5b58\u5728\u6269\u5bb9\u7b49\u5404\u79cd\u60c5\u51b5\u3002\u5bf9\u4e8e\u914d\u7f6e\u4e2d\u5fc3\u8fd9\u79cd\u4e1a\u52a1\u573a\u666f\u6765\u8bf4\uff0c\u901a\u8fc7 Push \u65b9\u5f0f\u5b9e\u73b0\u6570\u636e\u63a8\u52a8\u663e\u5f97\u590d\u6742\u4e86\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\uff082\uff09\u5982\u679c\u4f7f\u7528 Pull \u65b9\u5f0f\u62c9\u53d6\u6570\u636e\u4f1a\u6709\u4ec0\u4e48\u95ee\u9898\uff1f"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1641235647430-bb402569-7dfe-4001-9084-286881bb78b7.jpeg?x-oss-process=image/resize,w_960,m_lfit",alt:"image"})}),"\n",(0,s.jsx)(i.p,{children:"Pull \u6a21\u5f0f\u4e3b\u8981\u662f\u901a\u8fc7\u5ba2\u6237\u7aef\u4e3b\u52a8\u5411\u914d\u7f6e\u4e2d\u5fc3\u8fdb\u884c\u6570\u636e\u8bf7\u6c42\uff0c\u62c9\u53d6\u5bf9\u5e94\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u7531\u4e8e\u662f\u5ba2\u6237\u7aef\u4e3b\u52a8\u62c9\u53d6\uff0c\u56e0\u6b64\u4e0d\u4f1a\u51fa\u73b0\u6570\u636e\u5806\u79ef\u7684\u95ee\u9898\u3002\u4f46\u662f\u6570\u636e\u5982\u4f55\u53bb\u62c9\uff0c\u4ec0\u4e48\u65f6\u95f4\u53bb\u62c9\uff0c\u62c9\u7684\u9891\u7387\u5982\u4f55\u63a7\u5236\uff0c\u8fd9\u4e9b\u90fd\u662f\u95ee\u9898\u3002\u5982\u679c\u9891\u7387\u8fc7\u9ad8\uff0c\u800c\u914d\u7f6e\u5e76\u672a\u66f4\u65b0\uff0c\u90a3\u4e48\u5c31\u4f1a\u5bf9\u670d\u52a1\u7aef\u9020\u6210\u4e0d\u5fc5\u8981\u7684\u8fde\u63a5\u538b\u529b\u3002\u5982\u679c\u9891\u7387\u8fc7\u4f4e\uff0c\u90a3\u4e48\u914d\u7f6e\u66f4\u65b0\u5c31\u4f1a\u5b58\u5728\u5ef6\u65f6\u7684\u95ee\u9898\u3002\u56e0\u6b64\u540c\u6837\u4e0d\u9002\u5408\u914d\u7f6e\u4e2d\u5fc3\u7684\u4e1a\u52a1\u573a\u666f\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\uff083\uff09\u957f\u8f6e\u8be2"}),"\n",(0,s.jsx)(i.p,{children:"\u5ba2\u6237\u7aef\u5411\u914d\u7f6e\u4e2d\u5fc3\u8fdb\u884c\u8bf7\u6c42\uff0c\u914d\u7f6e\u4e2d\u5fc3\u4e0d\u4f1a\u7acb\u5373\u8fd4\u56de\u54cd\u5e94\uff0c\u800c\u662f\u4f1a hold \u4f4f\u8fd9\u4e2a\u8bf7\u6c42\u76f4\u5230\u6307\u5b9a\u65f6\u95f4\u8d85\u65f6\u540e\u8fdb\u884c\u8fd4\u56de\u3002\u5982\u679c\u6ca1\u6709\u914d\u7f6e\u53d8\u66f4\uff0c\u5219\u8fd4\u56de Http \u72b6\u6001\u7801 304 \u7ed9\u5ba2\u6237\u7aef\u3002\u8d85\u65f6\u8fd4\u56de\u540e\uff0c\u5ba2\u6237\u7aef\u5c06\u518d\u6b21\u53d1\u8d77\u8bf7\u6c42\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5982\u679c\u5b58\u5728\u914d\u7f6e\u53d8\u66f4\uff0c\u5c06\u8fd4\u56de\u5bf9\u5e94\u7684 namespace \u4fe1\u606f\uff0c\u5ba2\u6237\u7aef\u6839\u636e namespace \u4fe1\u606f\u83b7\u53d6\u5bf9\u5e94\u7684\u914d\u7f6e\u4fe1\u606f\u3002\n\u53e6\u5916\u4e3a\u4e86\u4fdd\u8bc1\u914d\u7f6e\u7684\u6709\u6548\u6027\uff0c\u5ba2\u6237\u7aef\u4e5f\u4f1a\u5b9a\u65f6\u8bf7\u6c42\u914d\u7f6e\u4fe1\u606f\uff0c\u9632\u6b62\u914d\u7f6e\u66f4\u65b0\u53ef\u80fd\u51fa\u73b0\u7684\u5f02\u5e38\u60c5\u51b5\uff0c\u662f\u4e00\u79cd\u6570\u636e\u4fdd\u8bc1\u7684\u515c\u5e95 fallback \u673a\u5236\u3002\u53e6\u5916\u5f53\u83b7\u53d6\u5230\u914d\u7f6e\u540e\uff0c\u4f1a\u540c\u6b65\u5230\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u4e2d\u3002\u8fd9\u6837\u5373\u4fbf\u5ba2\u6237\u7aef\u4e0e\u914d\u7f6e\u4e2d\u5fc3\u65e0\u6cd5\u901a\u4fe1\uff0c\u5ba2\u6237\u7aef\u4e5f\u53ef\u4ee5\u4ece\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u4e2d\u83b7\u53d6\u914d\u7f6e\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u90a3\u4e48\u95ee\u9898\u6765\u4e86\uff0c\u4e3a\u4ec0\u4e48\u4e0d\u76f4\u63a5\u5728\u957f\u8f6e\u8be2\u7684\u54cd\u5e94\u4e2d\u76f4\u63a5\u56de\u590d\u914d\u7f6e\u4fe1\u606f\u5462\uff1f\u4e3b\u8981\u662f\u7531\u4e8e\u672c\u8eab\u5df2\u7ecf\u5b58\u5728\u4e86\u5b9a\u65f6\u62c9\u53d6\u914d\u7f6e\u7684\u6b65\u9aa4\uff0c\u90a3\u4e48\u4e3a\u4e86\u4fdd\u8bc1\u5355\u4e00\u539f\u5219\u4ee5\u53ca\u4ee3\u7801\u4e0a\u7684\u7b80\u6d01\u4ee5\u53ca\u590d\u7528\u3002\u6240\u4ee5\u901a\u8fc7\u8fd9\u79cd\u83b7\u53d6\u914d\u7f6e\u66f4\u65b0\u540e\u518d\u8fdb\u884c\u6570\u636e\u62c9\u53d6\u7684\u65b9\u5f0f\u3002"}),"\n",(0,s.jsx)(i.h3,{id:"apollo-\u5ba2\u6237\u7aef\u83b7\u53d6\u914d\u7f6e\u4fe1\u606f",children:"Apollo \u5ba2\u6237\u7aef\u83b7\u53d6\u914d\u7f6e\u4fe1\u606f"}),"\n",(0,s.jsx)(i.p,{children:"\u6211\u4eec\u4e00\u8d77\u770b\u4e0b\u5ba2\u6237\u7aef\u5982\u4f55\u5de5\u4f5c\u6d41\u7a0b\uff0c\u5982\u4e0b\u56fe\uff1a"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1641235647471-53df92c4-4efc-424b-83a4-c99c9d103a47.jpeg?x-oss-process=image/resize,w_960,m_lfit",alt:"image"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\uff081\uff09ConfigServiceLocator\uff1a\u4e3b\u8981\u8d1f\u8d23\u5411 Eruka \u6ce8\u518c\u4e2d\u5fc3\u83b7\u53d6 ConfigService \u5730\u5740\u5217\u8868\u4fe1\u606f\uff1b"}),"\n",(0,s.jsx)(i.li,{children:"\uff082\uff09RemoteConfigLongPollService\uff1a\u4ece ConfigServiceLocator \u83b7\u53d6\u5230\u5730\u5740\u5217\u8868\u4fe1\u606f\u540e\uff0c\u901a\u8fc7\u957f\u8f6e\u8be2\u7684\u65b9\u5f0f\u83b7\u53d6\u914d\u7f6e\u53d8\u66f4\u4fe1\u606f\uff1b"}),"\n",(0,s.jsx)(i.li,{children:"\uff083\uff09RemoteConfigReposity\uff1a\u4ece ConfigService \u83b7\u53d6\u53d8\u66f4\u7684\u914d\u7f6e\u6570\u636e\uff1b"}),"\n",(0,s.jsx)(i.li,{children:"\uff084\uff09LocalFileConfigReposity\uff1a\u628a\u914d\u7f6e\u6570\u636e\u56fa\u5316\u5230\u672c\u5730\uff0c\u540c\u65f6\u4f5c\u4e3a\u672c\u5730\u914d\u7f6e\u6570\u636e\u7684\u6765\u6e90\uff1b"}),"\n",(0,s.jsx)(i.li,{children:"\uff085\uff09DefaultConfig\uff1a\u4e3b\u8981\u548c\u4e1a\u52a1\u65b9\u8fdb\u884c\u4ea4\u4e92\uff0c\u63d0\u4f9b\u914d\u7f6e\u83b7\u53d6\u65b9\u6cd5\uff0c\u540c\u65f6\u53ef\u4ee5\u6ce8\u518c\u914d\u7f6e\u53d8\u66f4\u4e8b\u4ef6\u3002"}),"\n"]})]})}function m(e={}){const{wrapper:i}={...(0,o.M)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},4552:(e,i,n)=>{n.d(i,{I:()=>r,M:()=>c});var s=n(11504);const o={},l=s.createContext(o);function c(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);