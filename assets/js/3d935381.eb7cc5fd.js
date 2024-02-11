"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[89304],{73532:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(17624),r=t(4552);const s={title:"HowTo Monitoring MySQL server for Zabbix",tags:["MySQL"],date:new Date("2016-05-20T07:24:58.000Z")},i=void 0,o={permalink:"/2016/05/20/HowTo-Monitoring-MySQL-server-for-Zabbix",source:"@site/blog/2016-05-20-HowTo-Monitoring-MySQL-server-for-Zabbix.md",title:"HowTo Monitoring MySQL server for Zabbix",description:"\u5b89\u88c5\u63d2\u4ef6\u5305",date:"2016-05-20T07:24:58.000Z",formattedDate:"May 20, 2016",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],readingTime:1.195,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Monitoring MySQL server for Zabbix",tags:["MySQL"],date:"2016-05-20T07:24:58.000Z"},unlisted:!1,prevItem:{title:"HowTo Install CloudStack 4.8 on CentOS 6.x",permalink:"/2016/05/18/HowTo-Install-CloudStack-4-8-on-CentOS-6-x"},nextItem:{title:"Azure CLI Import AcountInfo",permalink:"/2016/05/24/Azure-3-HowTo-Use-Azure-CLI-on-Mac"}},l={authorsImageUrls:[]},c=[{value:"\u5b89\u88c5\u63d2\u4ef6\u5305",id:"\u5b89\u88c5\u63d2\u4ef6\u5305",level:2},{value:"\u5bfc\u5165\u6a21\u677f",id:"\u5bfc\u5165\u6a21\u677f",level:2},{value:"\u5b89\u88c5 Agent",id:"\u5b89\u88c5-agent",level:2},{value:"Mysql \u65b0\u5efa\u7528\u6237",id:"mysql-\u65b0\u5efa\u7528\u6237",level:2},{value:"\u914d\u7f6e Percona \u63d2\u4ef6",id:"\u914d\u7f6e-percona-\u63d2\u4ef6",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2}];function p(e){const n={code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u5b89\u88c5\u63d2\u4ef6\u5305",children:"\u5b89\u88c5\u63d2\u4ef6\u5305"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yum install http://www.percona.com/downloads/percona-release/redhat/0.1-3/percona-release-0.1-3.noarch.rpm -y\nyum install percona-zabbix-templates.noarch -y\nyum install php* -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5bfc\u5165\u6a21\u677f",children:"\u5bfc\u5165\u6a21\u677f"}),"\n",(0,a.jsx)(n.p,{children:"\u628a/var/lib/zabbix/percona/templates/zabbix_agent_template_percona_mysql_server_ht_2.0.9-sver1.1.6.xml \u6587\u4ef6\u62f7\u8d1d\u51fa\u6765\uff0c\u901a\u8fc7 Zabbix \u7684\u76d1\u63a7\u9875\u9762\u5bfc\u5165\uff1a\nConfigurationTemplatesImport(\u5728\u53f3\u4e0a\u89d2)\n\u9009\u62e9\u5bfc\u51fa\u7684\u6a21\u677f\u6587\u4ef6\uff0c\u70b9\u51fb Import \u5b8c\u6210\u5bfc\u5165"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://img.samzong.me/202307191530289.png?imageView2/3/w/400/interlace/1/q/50",alt:"image"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5b89\u88c5-agent",children:"\u5b89\u88c5 Agent"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rpm -ivh http://repo.zabbix.com/zabbix/2.4/rhel/6/x86_64/zabbix-release-2.4-1.el6.noarch.rpm\nyum install zabbix-agent\nvim /etc/zabbix/zabbix-agentd.conf\n#\u914d\u7f6e\u76d1\u63a7\u670d\u52a1\u5668\u5730\u5740\nServer=192.168.1.15\n#\u5bfc\u5165\u914d\u7f6e\u6587\u4ef6\ncp /var/lib/zabbix/percona/templates/userparameter_percona_mysql.conf /etc/zabbix/zabbix_agentd.d/\n#\u91cd\u542fagent\nservice zabbix-agent restart\n\n"})}),"\n",(0,a.jsx)(n.h2,{id:"mysql-\u65b0\u5efa\u7528\u6237",children:"Mysql \u65b0\u5efa\u7528\u6237"}),"\n",(0,a.jsxs)(n.p,{children:["\u767b\u9646 Mysql \u6570\u636e\u5e93\uff0c\u65b0\u5efa\u4e00\u4e2a\u672c\u5730\u7684\u53ea\u6709\u67e5\u8be2\u6743\u9650\u7684 mysql \u7528\u6237\ngrant select on ",(0,a.jsx)(n.em,{children:"."})," to 'percona'@'localhost' identified by 'percona';\nflush tables;"]}),"\n",(0,a.jsx)(n.h2,{id:"\u914d\u7f6e-percona-\u63d2\u4ef6",children:"\u914d\u7f6e Percona \u63d2\u4ef6"}),"\n",(0,a.jsx)(n.p,{children:"\u4fee\u6539\u63d2\u4ef6\u4f7f\u7528\u7684 mysql \u7528\u6237\u540d\u5bc6\u7801\nsed -i s/cactiuser/percona/g /var/lib/zabbix/percona/scripts/ss_get_mysql_stats.php"}),"\n",(0,a.jsx)(n.h2,{id:"\u6d4b\u8bd5",children:"\u6d4b\u8bd5"}),"\n",(0,a.jsxs)(n.p,{children:["\u6d4b\u8bd5\u662f\u5426\u53ef\u4ee5\u83b7\u53d6\u5230\u503c\ncd /var/lib/zabbix/percona/scripts/\n./get_mysql_stats_wrapper.sh gg\n\u5982\u679c\u83b7\u53d6\u5230\u503c\uff0c\u5219\u8bf4\u660e\u914d\u7f6e\u6210\u529f\n",(0,a.jsx)(n.img,{src:"https://img.samzong.me/202307191530290.png?imageView2/3/w/400/interlace/1/q/50",alt:"image"})]}),"\n",(0,a.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u6267\u884c\u5b8c\u811a\u672c\u540e\uff0c\u8bf7\u624b\u52a8\u5220\u9664/tmp/\u6587\u4ef6\u5939\u4e0b\u751f\u6210\u7684*-mysql_cacti_stats.txt \u6587\u4ef6\uff0c\u7136\u540e\u8ba9\u7a0b\u5e8f\u81ea\u5df1\u8c03\u7528\u521b\u5efa\u65b0\u6587\u4ef6\u3002"})]})}function m(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>i});var a=t(11504);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);