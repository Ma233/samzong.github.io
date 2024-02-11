"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[54744],{88208:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(17624),t=n(4552);const o={title:"How to install MariaDB 10.1 on CentOS 7.x",tags:["MySQL"]},s=void 0,i={permalink:"/2016/01/22/install-mariadb10-centos7",source:"@site/blog/2016-01-22-install-mariadb10-centos7.md",title:"How to install MariaDB 10.1 on CentOS 7.x",description:"CentOS 7.x \u9ed8\u8ba4\u7684 MariaDB \u7248\u672c\u662f 5.5\uff0c\u4f46\u662f\u5728\u6709\u4e9b\u60c5\u51b5\u6211\u4eec\u9700\u8981\u7528\u5230 10 \u7248\u672c\uff0c\u6ce8\u610f MariaDB \u4e0e MySQL \u7248\u672c\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u4e0b\u9762\u7b80\u5355\u964d\u4e0b\u5982\u4f55\u5feb\u901f\u5b89\u88c5 MariaDB10.1 \u5230 CentOS 7.x.",date:"2016-01-22T00:00:00.000Z",formattedDate:"January 22, 2016",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],readingTime:1.31,hasTruncateMarker:!1,authors:[],frontMatter:{title:"How to install MariaDB 10.1 on CentOS 7.x",tags:["MySQL"]},unlisted:!1,prevItem:{title:"\u4f55\u4f59\u751f\u8bf4\u8981\u611f\u8c22\u8eab\u8fb9\u6240\u6709\u7f8e\u597d\u7684\u4eba",permalink:"/2016/01/15/ru-he-zuo-yi-ge-cheng-shu-de-zi-ji"},nextItem:{title:"HowTo use TortoiseGit for Windows",permalink:"/2016/02/12/HowTo-use-TortoiseGit-for-Windows"}},l={authorsImageUrls:[]},d=[{value:"\u521b\u5efa MariaDB 10.1 \u7684 Yum \u6e90",id:"\u521b\u5efa-mariadb-101-\u7684-yum-\u6e90",level:4},{value:"\u4f7f\u7528 Yum \u5b89\u88c5 MariaDB 10.1 \u5373\u53ef",id:"\u4f7f\u7528-yum-\u5b89\u88c5-mariadb-101-\u5373\u53ef",level:4},{value:"\u542f\u52a8 MariaDB \u5e76\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8",id:"\u542f\u52a8-mariadb-\u5e76\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8",level:4},{value:"\u521d\u59cb\u5316 MariaDB \u8bbe\u7f6e",id:"\u521d\u59cb\u5316-mariadb-\u8bbe\u7f6e",level:4}];function c(e){const a={a:"a",blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"CentOS 7.x \u9ed8\u8ba4\u7684 MariaDB \u7248\u672c\u662f 5.5\uff0c\u4f46\u662f\u5728\u6709\u4e9b\u60c5\u51b5\u6211\u4eec\u9700\u8981\u7528\u5230 10 \u7248\u672c\uff0c\u6ce8\u610f MariaDB \u4e0e MySQL \u7248\u672c\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u4e0b\u9762\u7b80\u5355\u964d\u4e0b\u5982\u4f55\u5feb\u901f\u5b89\u88c5 MariaDB10.1 \u5230 CentOS 7.x."}),"\n",(0,r.jsx)(a.h4,{id:"\u521b\u5efa-mariadb-101-\u7684-yum-\u6e90",children:"\u521b\u5efa MariaDB 10.1 \u7684 Yum \u6e90"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"cat <<EOF | sudo tee -a /etc/yum.repos.d/MariaDB.repo\n# MariaDB 10.1 CentOS repository list\n# http://downloads.mariadb.org/mariadb/repositories/\n[mariadb]\nname = MariaDB\nbaseurl = http://yum.mariadb.org/10.1/centos7-amd64\ngpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB\ngpgcheck=1\nEOF\n"})}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsxs)(a.p,{children:["\u6ce8\u610f MariaDB \u4f1a\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u7248\u672c\u4e0d\u65ad\u66f4\u65b0\uff0c\u4f60\u53ef\u4ee5\u5230",(0,r.jsx)(a.a,{href:"http://downloads.mariadb.org/mariadb",children:"repo \u4ed3\u5e93"}),"\u83b7\u53d6\u5bf9\u5e94\u7248\u672c\u94fe\u63a5"]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"\u4f7f\u7528-yum-\u5b89\u88c5-mariadb-101-\u5373\u53ef",children:"\u4f7f\u7528 Yum \u5b89\u88c5 MariaDB 10.1 \u5373\u53ef"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"sudo yum install MariaDB-server MariaDB-client -y\n"})}),"\n",(0,r.jsx)(a.h4,{id:"\u542f\u52a8-mariadb-\u5e76\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8",children:"\u542f\u52a8 MariaDB \u5e76\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"sudo systemctl start mariadb.service\nsudo systemctl enable mariadb.service\n"})}),"\n",(0,r.jsx)(a.h4,{id:"\u521d\u59cb\u5316-mariadb-\u8bbe\u7f6e",children:"\u521d\u59cb\u5316 MariaDB \u8bbe\u7f6e"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"sudo /usr/bin/mysql_secure_installation\n\n# \u56de\u7b54\u4ee5\u4e0b\u95ee\u9898\uff0c\u8bf7\u8bb0\u4f4f\u4f60\u7684\u6570\u636e\u5e93root\u7528\u6237\u5bc6\u7801:\n\nEnter current password for root (enter for none):  \u56de\u8f66\nSet root password? [Y/n]: Y\nNew password: \u4f60\u8981\u8bbe\u7f6e\u7684\u6570\u636e\u5e93root\u5bc6\u7801\nRe-enter new password: \u4f60\u8981\u8bbe\u7f6e\u7684\u6570\u636e\u5e93root\u5bc6\u7801\nRemove anonymous users? [Y/n]: Y\nDisallow root login remotely? [Y/n]: Y\nRemove test database and access to it? [Y/n]: Y\nReload privilege tables now? [Y/n]: Y\n"})})]})}function m(e={}){const{wrapper:a}={...(0,t.M)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,a,n)=>{n.d(a,{I:()=>i,M:()=>s});var r=n(11504);const t={},o=r.createContext(t);function s(e){const a=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);