"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[645],{30114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>i});var s=t(85893),a=t(11151);const l={title:"\u5feb\u901f\u4e86\u89e3\u8fde\u63a5\u6570\u636e\u5e93",tags:["Python"]},o=void 0,r={permalink:"/2021/09/24/kuai-su-liao-jie-lian-jie-shu-ju-ku",source:"@site/blog/2021-09-24-kuai-su-liao-jie-lian-jie-shu-ju-ku.md",title:"\u5feb\u901f\u4e86\u89e3\u8fde\u63a5\u6570\u636e\u5e93",description:"SQLAlchemy \u662f ORM \u6846\u67b6\uff0c\u76ee\u524d\u4e3b\u6d41\u4e14\u6bd4\u8f83\u901a\u7528\uff0c\u5728\u7a0b\u5e8f\u4e2d\u7528\u6765\u5904\u7406\u6570\u636e\u5e93\u76f8\u5173\u7684\u80fd\u529b\uff0c\u672c\u6587\u662f\u7528\u4e8e\u5b66\u4e60\u548c\u7406\u89e3 SQLAlchemy \u7684\u8bb0\u5f55\uff0c\u4e3b\u8981\u4f7f\u7528\u7684\u7f16\u7a0b\u8bed\u8a00\u662f Python",date:"2021-09-24T00:00:00.000Z",formattedDate:"September 24, 2021",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:1.32,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u5feb\u901f\u4e86\u89e3\u8fde\u63a5\u6570\u636e\u5e93",tags:["Python"]},unlisted:!1,prevItem:{title:"node nvm",permalink:"/2021/09/24/node-nvm"},nextItem:{title:"Python Version Manage `pyenv`",permalink:"/2021/10/19/python-version-manage-pyenv"}},c={authorsImageUrls:[]},i=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u7b80\u5355\u7684\u67e5\u8be2",id:"\u7b80\u5355\u7684\u67e5\u8be2",level:2},{value:"\u5bf9\u4e8e\u67e5\u8be2\u7ed3\u679c\u7684\u8bf4\u660e",id:"\u5bf9\u4e8e\u67e5\u8be2\u7ed3\u679c\u7684\u8bf4\u660e",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"SQLAlchemy \u662f ORM \u6846\u67b6\uff0c\u76ee\u524d\u4e3b\u6d41\u4e14\u6bd4\u8f83\u901a\u7528\uff0c\u5728\u7a0b\u5e8f\u4e2d\u7528\u6765\u5904\u7406\u6570\u636e\u5e93\u76f8\u5173\u7684\u80fd\u529b\uff0c\u672c\u6587\u662f\u7528\u4e8e\u5b66\u4e60\u548c\u7406\u89e3 SQLAlchemy \u7684\u8bb0\u5f55\uff0c\u4e3b\u8981\u4f7f\u7528\u7684\u7f16\u7a0b\u8bed\u8a00\u662f Python"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Python3 AND MySQL 5.6"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(n.p,{children:"\u76ee\u524d\u8f83\u4e3a\u573a\u666f\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u662f MySQL\uff0c\u8fd9\u91cc\u4ecb\u7ecd \u5728 Python \u4e2d\u5b89\u88c5\u548c MySQL \u7684\u94fe\u63a5\u65b9\u5f0f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip3 install sqlalchemy pymysql\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5feb\u901f\u8fde\u63a5\u6570\u636e\u5e93"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# easy script.\n\nfrom sqlalchemy import create_engine\nfrom sqlalchemy impory text\n\nengine = create_engine('mysql+pymysql://root:pass@localhost/dbName')\n\nconn = engine.connect()\n\nsql = text(\"select version();\")\n\ndata = sql.fetchall()\n\nfor d in data:\n    print(d)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7b80\u5355\u7684\u67e5\u8be2",children:"\u7b80\u5355\u7684\u67e5\u8be2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from sqlalchemy impory text\n\nsql = text(\"select * from userTable where create_date>=:start_time AND login_cnt=:times\")\n# start_time \u5f00\u59cb\u65f6\u95f4\n# times \u767b\u5f55\u6b21\u6570\n\n# sql \u6267\u884c\u65f6\u52a8\u6001\u5165\u53c2\n\nstart_time,times = '2021-06-01 00:00:00', 3\n\nres = conn.execute(s, create_date = start_time.pydatetime(), loign_cnt=times)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5bf9\u4e8e\u67e5\u8be2\u7ed3\u679c\u7684\u8bf4\u660e",children:"\u5bf9\u4e8e\u67e5\u8be2\u7ed3\u679c\u7684\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:["\u83b7\u53d6\u6240\u6709\u7684\u67e5\u8be2\u7ed3\u679c\uff0c\u8fd4\u56de\u7684\u6570\u636e\u4e3a tuple \u7684\u5217\u8868 ",(0,s.jsx)(n.code,{children:"data = res.fetachAll()"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528 pandas \u5c06\u67e5\u8be2\u7ed3\u679c\u4fdd\u5b58\u5230 csv \u4e2d"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import pandas as pd\n\ndf = pd.DataFrame(data, columns=['user_id',],)  # data \u662f\u8981\u5199\u5165\u7684\u6570\u636e\uff0ccolumns \u662f\u5217\u5934\uff0cList\n\n\ndf.to_csv('~/export_filepath.csv', index=False)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const a={},l=s.createContext(a);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);