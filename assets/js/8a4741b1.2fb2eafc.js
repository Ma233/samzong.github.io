"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[34135],{30068:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var a=t(85893),o=t(11151);const c={title:"learn sqlalchemy",tags:["Python"]},r=void 0,s={permalink:"/2020/12/13/learn-sqlalchemy",source:"@site/blog/2020-12-13-learn-sqlalchemy.md",title:"learn sqlalchemy",description:"",date:"2020-12-13T00:00:00.000Z",formattedDate:"December 13, 2020",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:.22,hasTruncateMarker:!1,authors:[],frontMatter:{title:"learn sqlalchemy",tags:["Python"]},unlisted:!1,prevItem:{title:"covert timestamp2datetime",permalink:"/2020/12/09/covert-timestamp2datetime"},nextItem:{title:"Mac \u8c03\u6574 Launchpad \u56fe\u6807\u5927\u5c0f",permalink:"/2020/12/25/mac-tiao-zheng-launchpad-tu-biao-da-xiao"}},l={authorsImageUrls:[]},i=[];function m(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# python3 on Mac\n\npip3 install sqlalchemy mysqclient\n\n# CentOS\nyum install MySQL-python\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import sqlalchemy\nimport MySQLdb\n\nfrom sqlalchemy import create_engine, MetaData\n\ndef connect_db ():\n # connect db:\n engine = create_engine("mysql://user:pass@localhost/db", echo = True)\n\n    meta = MetaData()\n    conn = engine.connect()\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(67294);const o={},c=a.createContext(o);function r(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);