"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[25416],{1248:(r,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var e=a(17624),n=a(4552);const s={title:"Linux \u4e2d\u7684\u4e09\u4e2a\u7279\u6b8a\u6743\u9650",tags:["Linux"],date:new Date("2016-03-29T07:50:36.000Z")},o=void 0,u={permalink:"/2016/03/29/linux-zhong-de-san-ge-te-shu-quan-xian",source:"@site/blog/2016-03-29-linux-zhong-de-san-ge-te-shu-quan-xian.md",title:"Linux \u4e2d\u7684\u4e09\u4e2a\u7279\u6b8a\u6743\u9650",description:"\u6743\u9650\u4ecb\u7ecd",date:"2016-03-29T07:50:36.000Z",formattedDate:"March 29, 2016",tags:[{label:"Linux",permalink:"/tags/linux"}],readingTime:2.375,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Linux \u4e2d\u7684\u4e09\u4e2a\u7279\u6b8a\u6743\u9650",tags:["Linux"],date:"2016-03-29T07:50:36.000Z"},unlisted:!1,prevItem:{title:"CentOS \u4f7f\u7528 createrepo \u642d\u5efa\u672c\u5730\u6e90",permalink:"/2016/03/29/centos-6-1-shi-yong-createrepo-da-jian-ben-di-yuan"},nextItem:{title:"MySQL \u6570\u636e\u5e93\u4f7f\u7528\u57fa\u7840",permalink:"/2016/03/29/mysql-4-mysql-shu-ju-ku-ji-chu"}},l={authorsImageUrls:[]},d=[{value:"\u6743\u9650\u4ecb\u7ecd",id:"\u6743\u9650\u4ecb\u7ecd",level:2}];function i(r){const t={code:"code",h2:"h2",pre:"pre",...(0,n.M)(),...r.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h2,{id:"\u6743\u9650\u4ecb\u7ecd",children:"\u6743\u9650\u4ecb\u7ecd"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:"Linux\u4e2d\u9664\u4e86\u666e\u901a\u6743\u9650\u4e4b\u5916\uff0c\u8fd8\u6709\u4e09\u4e2a\u7279\u6b8a\u6743\u9650\u3002\nSUID:\uff1a\u4ee5\u6587\u4ef6\u7684\u6240\u5c5e\u7528\u6237\u6267\u884c\uff0c\u800c\u975e\u6267\u884c\u6587\u4ef6\u7684\u7528\u6237\uff0c\u591a\u7528\u4e8e\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u8bbe\u7f6esuid\u540e\uff0c\u5728\u6743\u9650\u4f4d\u4e2d\uff0c\u6240\u5c5e\u7528\u6237\u7684  \u6700\u540e\u4e00\u4e2a\u6743\n\u9650\u4e3a\u53d8\u4e3as\uff0c\u6dfb\u52a0SUID\u6743\u9650\u53ef\u7528\u201c+s\u201d\u8868\u793a\u3002\n\u4f8b\u5982\uff1apasswd\n[adam@ultraera  ~]$  which  passwd\n/usr/bin/passwd\n[adam@ultraera  ~]$  ls  -l  /usr/bin/passwd\n-rwsr-xr-x.  1  root  root  25980  Feb  22  2012  /usr/bin/passwd\n[adam@ultraera  ~]$\nSGID\uff1a\u4e3b\u8981\u9488\u5bf9\u6587\u4ef6\u5939\uff0c\u5728\u8bbe\u7f6e\u4e86SGID\u7684\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4efb\u4f55\u65b0\u6587\u4ef6\u90fd\u7ee7\u627f\u8be5\u6587\u4ef6\u7684\u6240\u5c5e\u7ec4\uff0c\u8bbe\u7f6esgid\u540e\uff0c\u5728\u6743\u9650\u4f4d\u4e2d\uff0c\u6240\u5c5e\n\u7ec4\u7684\u6700\u540e\u4e00\u4e2a\u6743\u9650\u4f4d\u53d8\u4e3as\uff0c\u6dfb\u52a0SGID\u6743\u9650\u53ef\u7528\u201c+s\u201d\u8868\u793a\u3002\n\u4f8b\u5982\uff1a\n[adam@ultraera  ~]$  mkdir  ultraera\n[adam@ultraera  ~]$  ls  -l\ntotal  4\ndrwxrwxr-x  2  adam  adam  4096  Nov  27  21:09  ultraera\n[adam@ultraera  ~]$  chmod  g+s  ultraera/\n[adam@ultraera  ~]$  ls  -l\ntotal  4\ndrwxrwsr-x  2  adam  adam  4096  Nov  27  21:09  ultraera\n[adam@ultraera  ~]$  su\nPassword:\n[root@ultraera  adam]#  mkdir  -p  ultraera/test\n[root@ultraera  adam]#  ls  -l  ultraera/\ntotal  4\ndrwxr-sr-x  2  root  adam  4096  Nov  27  21:09  test\n[root@ultraera  adam]#\nsticky\uff1a\u9488\u5bf9\u6587\u4ef6\u5939\uff0c\u5bf9\u76ee\u5f55\u62e5\u6709\u5199\u6743\u9650\u7684\u7528\u6237\uff0c\u4ec5\u53ef\u4ee5\u5220\u9664\u5176\u6240\u62e5\u6709\u7684\u6587\u4ef6\uff0c\u65e0\u6cd5\u5220\u9664\u5176\u4ed6\u7528\u6237\u6240\u62e5\u6709\u7684\u6587\u4ef6\uff0c\u8bbe\u7f6e\u4e86sticky\n\u4e4b\u540e\uff0c\u5728\u6743\u9650\u4f4d\uff0cother\u7684\u6700\u540e\u4e00\u4e2a\u6743\u9650\u4f4d\u53d8\u4e3at,\u6dfb\u52a0SGID\u6743\u9650\u53ef\u7528\u201c+t\u201d\u8868\u793a\u3002\n\u4f8b\u5982\uff1a\n[root@ultraera  tmp]#  mkdir  ultraera\n[root@ultraera  tmp]#  chmod  a=rwx,o+t  ultraera/\n[root@ultraera  tmp]#  ls  -ld  ultraera/\ndrwxrwxrwt  2  root  root  4096  Nov  27  21:29  ultraera/\n[root@ultraera  tmp]#  useradd  user1\n[root@ultraera  tmp]#  useradd  user2\n[root@ultraera  tmp]#  su  user1\n[user1@ultraera  tmp]$  touch  ./ultraera/test\n[user1@ultraera  tmp]$  ls  -l  ultraera/\ntotal  0\n-rw-rw-r--  1  user1  user1  0  Nov  27  21:31  test\n[user1@ultraera  tmp]$  exit\nexit\n[root@ultraera  tmp]#  su  user2\n[user2@ultraera  tmp]$  rm  -f  ./ultraera/test\nrm:  cannot  remove  `./ultraera/test':  Operation  not  permitted\n[user2@ultraera  tmp]$\n\n\n\u540c\u6837\u4f7f\u7528chmod\u6765\u8bbe\u5b9a\u7279\u6b8a\u6743\u9650\uff0c\u4e0e\u666e\u901a\u6743\u9650\u4e00\u6837\uff0c\u7279\u6b8a\u6743\u9650\u4e5f\u53ef\u4ee5\u7528\u6570\u5b57\u8868\u793a\uff1a\nsuid  \uff1a  4\nsgid  \uff1a  2\nsticky \uff1a  1\nchmod  4644  filename #\u8bbe\u7f6e\u6587\u4ef6suid\u6743\u9650\nchmod  2755  flodername #\u8bbe\u7f6e\u6587\u4ef6\u5939sgid\u6743\u9650\nchmod  1755  flodername #\u8bbe\u7f6e\u6587\u4ef6\u5939sticky\u6743\u9650\n\n"})})]})}function m(r={}){const{wrapper:t}={...(0,n.M)(),...r.components};return t?(0,e.jsx)(t,{...r,children:(0,e.jsx)(i,{...r})}):i(r)}},4552:(r,t,a)=>{a.d(t,{I:()=>u,M:()=>o});var e=a(11504);const n={},s=e.createContext(n);function o(r){const t=e.useContext(s);return e.useMemo((function(){return"function"==typeof r?r(t):{...t,...r}}),[t,r])}function u(r){let t;return t=r.disableParentContext?"function"==typeof r.components?r.components(n):r.components||n:o(r.components),e.createElement(s.Provider,{value:t},r.children)}}}]);