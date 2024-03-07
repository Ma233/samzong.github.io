"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[89802],{82872:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=l(17624),n=l(4552);const o={title:"HowTo Install MySQL 5.5/6/7 on RHEL/CentOS 5/6/7",tags:["MySQL"],date:new Date("2016-07-07T05:35:32.000Z")},t=void 0,i={permalink:"/2016/07/07/HowTo-Install-MySQL-5-5-6-7-on-RHEL-CentOS-5-6-7",source:"@site/blog/2016-07-07-HowTo-Install-MySQL-5-5-6-7-on-RHEL-CentOS-5-6-7.md",title:"HowTo Install MySQL 5.5/6/7 on RHEL/CentOS 5/6/7",description:"Install Mysql 5.5 on RHEL/CentOS 5/6/7",date:"2016-07-07T05:35:32.000Z",formattedDate:"2016\u5e747\u67087\u65e5",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Install MySQL 5.5/6/7 on RHEL/CentOS 5/6/7",tags:["MySQL"],date:"2016-07-07T05:35:32.000Z"},unlisted:!1,prevItem:{title:"HowTo Install Docker on CentOS 6.x",permalink:"/2016/07/07/HowTo-Install-Docker-on-CentOS-6-x"},nextItem:{title:"HowTo Use Remi Install Redis",permalink:"/2016/07/07/HowTo-Use-Remi-Install-Redis"}},a={authorsImageUrls:[]},m=[{value:"Install Mysql 5.5 on RHEL/CentOS 5/6/7",id:"install-mysql-55-on-rhelcentos-567",level:2},{value:"1. Use Repository",id:"1-use-repository",level:3},{value:"mysql-server-5.5.repo for CentOS/RHEL 5.x",id:"mysql-server-55repo-for-centosrhel-5x",level:4},{value:"* Only Install MySQL 5.5 On CentOS 5.x",id:"-only-install-mysql-55-on-centos-5x",level:4},{value:"mysql-server-5.5.repo for CentOS/RHEL 6.x",id:"mysql-server-55repo-for-centosrhel-6x",level:4},{value:"mysql-server-5.5.repo for CentOS/RHEL 7.x",id:"mysql-server-55repo-for-centosrhel-7x",level:4},{value:"2. Install MySQL Server 5.5",id:"2-install-mysql-server-55",level:3},{value:"3. Service Configure",id:"3-service-configure",level:3},{value:"Install Mysql 5.6 on RHEL/CentOS 5/6/7",id:"install-mysql-56-on-rhelcentos-567",level:2},{value:"Use Repository",id:"use-repository",level:3},{value:"mysql-server-5.6.repo for CentOS/RHEL 5.x",id:"mysql-server-56repo-for-centosrhel-5x",level:4},{value:"mysql-server-5.6.repo for CentOS/RHEL 6.x",id:"mysql-server-56repo-for-centosrhel-6x",level:4},{value:"mysql-server-5.6.repo for CentOS/RHEL 7.x",id:"mysql-server-56repo-for-centosrhel-7x",level:4},{value:"Install MySQL Server 5.6",id:"install-mysql-server-56",level:3},{value:"Service Configure",id:"service-configure",level:3},{value:"Install Mysql 5.7 on RHEL/CentOS 5/6/7",id:"install-mysql-57-on-rhelcentos-567",level:2},{value:"Use Repository 5.7",id:"use-repository-57",level:3},{value:"mysql-server-5.7.repo for CentOS/RHEL 5.x",id:"mysql-server-57repo-for-centosrhel-5x",level:4},{value:"mysql-server-5.7.repo for CentOS/RHEL 6.x",id:"mysql-server-57repo-for-centosrhel-6x",level:4},{value:"mysql-server-5.7.repo for CentOS/RHEL 7.x",id:"mysql-server-57repo-for-centosrhel-7x",level:4},{value:"2. Install MySQL Server 5.7",id:"2-install-mysql-server-57",level:3},{value:"3. Service Configure*",id:"3-service-configure-1",level:3}];function c(e){const s={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"install-mysql-55-on-rhelcentos-567",children:"Install Mysql 5.5 on RHEL/CentOS 5/6/7"}),"\n",(0,r.jsx)(s.h3,{id:"1-use-repository",children:"1. Use Repository"}),"\n",(0,r.jsx)(s.p,{children:"First, to set up the yum repository, install the mysql\uff0dcommunity-server 5.5 RPM based on your CentOS/RHEL release:"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h4,{id:"mysql-server-55repo-for-centosrhel-5x",children:"mysql-server-5.5.repo for CentOS/RHEL 5.x"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"rpm -Uvh http://mirror.webtatic.com/yum/el5/latest.rpm\n"})}),"\n",(0,r.jsx)(s.h4,{id:"-only-install-mysql-55-on-centos-5x",children:"* Only Install MySQL 5.5 On CentOS 5.x"}),"\n",(0,r.jsx)(s.p,{children:"If you already have MySql client or server installed (rpm -q mysql mysql-server), then you can upgrade using the following method:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"yum install mysql.`uname -i` yum-plugin-replace\nyum replace mysql --replace-with mysql55w\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u201cyum install mysql\u201d is only there to make sure yum-plugin-replace can resolve dependencies correctly if only mysql-server was installed.\nOtherwise, to install MySql client and server, then run:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"yum install mysql55w mysql55w-server\n"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h4,{id:"mysql-server-55repo-for-centosrhel-6x",children:"mysql-server-5.5.repo for CentOS/RHEL 6.x"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.5-community/el/6/x86_64/mysql-community-release-el6-5.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.5-community/el/6/i386/mysql-community-release-el6-5.noarch.rpm\n"})}),"\n",(0,r.jsx)(s.h4,{id:"mysql-server-55repo-for-centosrhel-7x",children:"mysql-server-5.5.repo for CentOS/RHEL 7.x"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.5-community/el/7/x86_64/mysql-community-release-el7-5.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.5-community/el/7/i386/mysql-community-release-el7-5.noarch.rpm\n"})}),"\n",(0,r.jsx)(s.h3,{id:"2-install-mysql-server-55",children:"2. Install MySQL Server 5.5"}),"\n",(0,r.jsx)(s.p,{children:"If you already have MySql client or server installed (rpm -q mysql mysql-server), then you must uninstall using the following method:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# It's RHEL/CentOS 6/7\nyum remove -y mysql-server\nyum remove -y mysql*\n"})}),"\n",(0,r.jsx)(s.p,{children:"If you don't have mysql-server was installed.\nOtherwise, to install MySql client and server, then run:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"yum install -y mysql-community-server\n"})}),"\n",(0,r.jsx)(s.h3,{id:"3-service-configure",children:"3. Service Configure"}),"\n",(0,r.jsx)(s.p,{children:"You should upgrade existing tables before setting the server to become a production machine, which can be done by starting the server and running the mysql_upgrade script (this may take time depending on the size of the database)."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"service mysqld start\n"})}),"\n",(0,r.jsx)(s.p,{children:'This will issue a password prompt for the user. If you don\'t have a root user password, remove the "-p"'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"mysql_secure_installation\n"})}),"\n",(0,r.jsx)(s.h2,{id:"install-mysql-56-on-rhelcentos-567",children:"Install Mysql 5.6 on RHEL/CentOS 5/6/7"}),"\n",(0,r.jsx)(s.h3,{id:"use-repository",children:"Use Repository"}),"\n",(0,r.jsx)(s.p,{children:"First, to set up the yum repository, install the mysql\uff0dcommunity-server 5.6 RPM based on your CentOS/RHEL release:"}),"\n",(0,r.jsx)(s.h4,{id:"mysql-server-56repo-for-centosrhel-5x",children:"mysql-server-5.6.repo for CentOS/RHEL 5.x"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.6-community/el/5/x86_64/mysql-community-release-el5-5.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.6-community/el/5/i386/mysql-community-release-el5-5.noarch.rpm\n"})}),"\n",(0,r.jsx)(s.h4,{id:"mysql-server-56repo-for-centosrhel-6x",children:"mysql-server-5.6.repo for CentOS/RHEL 6.x"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.6-community/el/6/x86_64/mysql-community-release-el6-5.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.6-community/el/6/i386/mysql-community-release-el6-5.noarch.rpm\n"})}),"\n",(0,r.jsx)(s.h4,{id:"mysql-server-56repo-for-centosrhel-7x",children:"mysql-server-5.6.repo for CentOS/RHEL 7.x"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.6-community/el/7/x86_64/mysql-community-release-el7-5.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.6-community/el/7/i386/mysql-community-release-el7-5.noarch.rpm\n"})}),"\n",(0,r.jsx)(s.h3,{id:"install-mysql-server-56",children:"Install MySQL Server 5.6"}),"\n",(0,r.jsx)(s.p,{children:"If you already have MySql client or server installed (rpm -q mysql mysql-server), then you must uninstall using the following method:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"yum remove -y mysql-server\nyum remove -y mysql*\n"})}),"\n",(0,r.jsx)(s.p,{children:"If you don't have mysql-server was installed.\nOtherwise, to install MySql client and server, then run:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"yum install -y mysql-community-server\n"})}),"\n",(0,r.jsx)(s.h3,{id:"service-configure",children:"Service Configure"}),"\n",(0,r.jsx)(s.p,{children:"You should upgrade existing tables before setting the server to become a production machine, which can be done by starting the server and running the mysql_upgrade script (this may take time depending on the size of the database)."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"service mysqld start\n"})}),"\n",(0,r.jsx)(s.p,{children:'This will issue a password prompt for the user. If you don\'t have a root user password, remove the "-p"'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"mysql_secure_installation\n"})}),"\n",(0,r.jsx)(s.h2,{id:"install-mysql-57-on-rhelcentos-567",children:"Install Mysql 5.7 on RHEL/CentOS 5/6/7"}),"\n",(0,r.jsx)(s.h3,{id:"use-repository-57",children:"Use Repository 5.7"}),"\n",(0,r.jsx)(s.p,{children:"First, to set up the yum repository, install the mysql\uff0dcommunity-server 5.7 RPM based on your CentOS/RHEL release:"}),"\n",(0,r.jsx)(s.h4,{id:"mysql-server-57repo-for-centosrhel-5x",children:"mysql-server-5.7.repo for CentOS/RHEL 5.x"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.7-community/el/5/x86_64/mysql-community-release-el5-7.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.7-community/el/5/i386/mysql-community-release-el5-7.noarch.rpm\n"})}),"\n",(0,r.jsx)(s.h4,{id:"mysql-server-57repo-for-centosrhel-6x",children:"mysql-server-5.7.repo for CentOS/RHEL 6.x"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.7-community/el/6/x86_64/mysql-community-release-el6-7.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.7-community/el/6/i386/mysql-community-release-el6-7.noarch.rpm\n"})}),"\n",(0,r.jsx)(s.h4,{id:"mysql-server-57repo-for-centosrhel-7x",children:"mysql-server-5.7.repo for CentOS/RHEL 7.x"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.7-community/el/7/x86_64/mysql-community-release-el7-7.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.7-community/el/7/i386/mysql-community-release-el7-7.noarch.rpm\n"})}),"\n",(0,r.jsx)(s.h3,{id:"2-install-mysql-server-57",children:"2. Install MySQL Server 5.7"}),"\n",(0,r.jsx)(s.p,{children:"If you already have MySql client or server installed (rpm -q mysql mysql-server), then you must uninstall using the following method:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"yum remove -y mysql-server\nyum remove -y mysql*\n"})}),"\n",(0,r.jsx)(s.p,{children:"If you don't have mysql-server was installed.\nOtherwise, to install MySql client and server, then run:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"yum install -y mysql-community-server\n"})}),"\n",(0,r.jsx)(s.h3,{id:"3-service-configure-1",children:"3. Service Configure*"}),"\n",(0,r.jsx)(s.p,{children:"You should upgrade existing tables before setting the server to become a production machine, which can be done by starting the server and running the mysql_upgrade script (this may take time depending on the size of the database)."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"service mysqld start\n"})}),"\n",(0,r.jsx)(s.p,{children:'This will issue a password prompt for the user. If you don\'t have a root user password, remove the "-p"'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"mysql_secure_installation\n"})})]})}function y(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,s,l)=>{l.d(s,{I:()=>i,M:()=>t});var r=l(11504);const n={},o=r.createContext(n);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);