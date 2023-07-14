"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[61496],{3905:(e,r,l)=>{l.d(r,{Zo:()=>y,kt:()=>h});var t=l(67294);function n(e,r,l){return r in e?Object.defineProperty(e,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[r]=l,e}function s(e,r){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),l.push.apply(l,t)}return l}function o(e){for(var r=1;r<arguments.length;r++){var l=null!=arguments[r]?arguments[r]:{};r%2?s(Object(l),!0).forEach((function(r){n(e,r,l[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(l,r))}))}return e}function a(e,r){if(null==e)return{};var l,t,n=function(e,r){if(null==e)return{};var l,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)l=s[t],r.indexOf(l)>=0||(n[l]=e[l]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)l=s[t],r.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var m=t.createContext({}),i=function(e){var r=t.useContext(m),l=r;return e&&(l="function"==typeof e?e(r):o(o({},r),e)),l},y=function(e){var r=i(e.components);return t.createElement(m.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var l=e.components,n=e.mdxType,s=e.originalType,m=e.parentName,y=a(e,["components","mdxType","originalType","parentName"]),u=i(l),c=n,h=u["".concat(m,".").concat(c)]||u[c]||p[c]||s;return l?t.createElement(h,o(o({ref:r},y),{},{components:l})):t.createElement(h,o({ref:r},y))}));function h(e,r){var l=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=l.length,o=new Array(s);o[0]=c;var a={};for(var m in r)hasOwnProperty.call(r,m)&&(a[m]=r[m]);a.originalType=e,a[u]="string"==typeof e?e:n,o[1]=a;for(var i=2;i<s;i++)o[i]=l[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,l)}c.displayName="MDXCreateElement"},7100:(e,r,l)=>{l.r(r),l.d(r,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var t=l(87462),n=(l(67294),l(3905));const s={title:"HowTo Install MySQL 5.5/6/7 on RHEL/CentOS 5/6/7",tags:["MySQL"],date:new Date("2016-07-07T05:35:32.000Z")},o=void 0,a={permalink:"/2016/07/07/HowTo-Install-MySQL-5-5-6-7-on-RHEL-CentOS-5-6-7",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2016-07-07-HowTo-Install-MySQL-5-5-6-7-on-RHEL-CentOS-5-6-7.md",source:"@site/blog/2016-07-07-HowTo-Install-MySQL-5-5-6-7-on-RHEL-CentOS-5-6-7.md",title:"HowTo Install MySQL 5.5/6/7 on RHEL/CentOS 5/6/7",description:"Install Mysql 5.5 on RHEL/CentOS 5/6/7",date:"2016-07-07T05:35:32.000Z",formattedDate:"2016\u5e747\u67087\u65e5",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],readingTime:2.3733333333333335,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Install MySQL 5.5/6/7 on RHEL/CentOS 5/6/7",tags:["MySQL"],date:"2016-07-07T05:35:32.000Z"},prevItem:{title:"HowTo Install Docker on CentOS 6.x",permalink:"/2016/07/07/HowTo-Install-Docker-on-CentOS-6-x"},nextItem:{title:"HowTo Use Remi Install Redis",permalink:"/2016/07/07/HowTo-Use-Remi-Install-Redis"}},m={authorsImageUrls:[]},i=[{value:"Install Mysql 5.5 on RHEL/CentOS 5/6/7",id:"install-mysql-55-on-rhelcentos-567",level:2},{value:"1. Use Repository",id:"1-use-repository",level:3},{value:"mysql-server-5.5.repo for CentOS/RHEL 5.x",id:"mysql-server-55repo-for-centosrhel-5x",level:4},{value:"* Only Install MySQL 5.5 On CentOS 5.x",id:"-only-install-mysql-55-on-centos-5x",level:4},{value:"mysql-server-5.5.repo for CentOS/RHEL 6.x",id:"mysql-server-55repo-for-centosrhel-6x",level:4},{value:"mysql-server-5.5.repo for CentOS/RHEL 7.x",id:"mysql-server-55repo-for-centosrhel-7x",level:4},{value:"2. Install MySQL Server 5.5",id:"2-install-mysql-server-55",level:3},{value:"3. Service Configure",id:"3-service-configure",level:3},{value:"Install Mysql 5.6 on RHEL/CentOS 5/6/7",id:"install-mysql-56-on-rhelcentos-567",level:2},{value:"Use Repository",id:"use-repository",level:3},{value:"mysql-server-5.6.repo for CentOS/RHEL 5.x",id:"mysql-server-56repo-for-centosrhel-5x",level:4},{value:"mysql-server-5.6.repo for CentOS/RHEL 6.x",id:"mysql-server-56repo-for-centosrhel-6x",level:4},{value:"mysql-server-5.6.repo for CentOS/RHEL 7.x",id:"mysql-server-56repo-for-centosrhel-7x",level:4},{value:"Install MySQL Server 5.6",id:"install-mysql-server-56",level:3},{value:"Service Configure",id:"service-configure",level:3},{value:"Install Mysql 5.7 on RHEL/CentOS 5/6/7",id:"install-mysql-57-on-rhelcentos-567",level:2},{value:"Use Repository 5.7",id:"use-repository-57",level:3},{value:"mysql-server-5.7.repo for CentOS/RHEL 5.x",id:"mysql-server-57repo-for-centosrhel-5x",level:4},{value:"mysql-server-5.7.repo for CentOS/RHEL 6.x",id:"mysql-server-57repo-for-centosrhel-6x",level:4},{value:"mysql-server-5.7.repo for CentOS/RHEL 7.x",id:"mysql-server-57repo-for-centosrhel-7x",level:4},{value:"2. Install MySQL Server 5.7",id:"2-install-mysql-server-57",level:3},{value:"3. Service Configure*",id:"3-service-configure-1",level:3}],y={toc:i},u="wrapper";function p(e){let{components:r,...l}=e;return(0,n.kt)(u,(0,t.Z)({},y,l,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"install-mysql-55-on-rhelcentos-567"},"Install Mysql 5.5 on RHEL/CentOS 5/6/7"),(0,n.kt)("h3",{id:"1-use-repository"},"1. Use Repository"),(0,n.kt)("p",null,"First, to set up the yum repository, install the mysql\uff0dcommunity-server 5.5 RPM based on your CentOS/RHEL release:"),(0,n.kt)("hr",null),(0,n.kt)("h4",{id:"mysql-server-55repo-for-centosrhel-5x"},"mysql-server-5.5.repo for CentOS/RHEL 5.x"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rpm -Uvh http://mirror.webtatic.com/yum/el5/latest.rpm\n")),(0,n.kt)("h4",{id:"-only-install-mysql-55-on-centos-5x"},"* Only Install MySQL 5.5 On CentOS 5.x"),(0,n.kt)("p",null,"If you already have MySql client or server installed (rpm -q mysql mysql-server), then you can upgrade using the following method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install mysql.`uname -i` yum-plugin-replace\nyum replace mysql --replace-with mysql55w\n")),(0,n.kt)("p",null,"\u201cyum install mysql\u201d is only there to make sure yum-plugin-replace can resolve dependencies correctly if only mysql-server was installed.\nOtherwise, to install MySql client and server, then run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install mysql55w mysql55w-server\n")),(0,n.kt)("hr",null),(0,n.kt)("h4",{id:"mysql-server-55repo-for-centosrhel-6x"},"mysql-server-5.5.repo for CentOS/RHEL 6.x"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.5-community/el/6/x86_64/mysql-community-release-el6-5.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.5-community/el/6/i386/mysql-community-release-el6-5.noarch.rpm\n")),(0,n.kt)("h4",{id:"mysql-server-55repo-for-centosrhel-7x"},"mysql-server-5.5.repo for CentOS/RHEL 7.x"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.5-community/el/7/x86_64/mysql-community-release-el7-5.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.5-community/el/7/i386/mysql-community-release-el7-5.noarch.rpm\n")),(0,n.kt)("h3",{id:"2-install-mysql-server-55"},"2. Install MySQL Server 5.5"),(0,n.kt)("p",null,"If you already have MySql client or server installed (rpm -q mysql mysql-server), then you must uninstall using the following method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# It's RHEL/CentOS 6/7\nyum remove -y mysql-server\nyum remove -y mysql*\n")),(0,n.kt)("p",null,"If you don't have mysql-server was installed.\nOtherwise, to install MySql client and server, then run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y mysql-community-server\n")),(0,n.kt)("h3",{id:"3-service-configure"},"3. Service Configure"),(0,n.kt)("p",null,"You should upgrade existing tables before setting the server to become a production machine, which can be done by starting the server and running the mysql_upgrade script (this may take time depending on the size of the database)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"service mysqld start\n")),(0,n.kt)("p",null,'This will issue a password prompt for the user. If you don\'t have a root user password, remove the "-p"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mysql_secure_installation\n")),(0,n.kt)("h2",{id:"install-mysql-56-on-rhelcentos-567"},"Install Mysql 5.6 on RHEL/CentOS 5/6/7"),(0,n.kt)("h3",{id:"use-repository"},"Use Repository"),(0,n.kt)("p",null,"First, to set up the yum repository, install the mysql\uff0dcommunity-server 5.6 RPM based on your CentOS/RHEL release:"),(0,n.kt)("h4",{id:"mysql-server-56repo-for-centosrhel-5x"},"mysql-server-5.6.repo for CentOS/RHEL 5.x"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.6-community/el/5/x86_64/mysql-community-release-el5-5.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.6-community/el/5/i386/mysql-community-release-el5-5.noarch.rpm\n")),(0,n.kt)("h4",{id:"mysql-server-56repo-for-centosrhel-6x"},"mysql-server-5.6.repo for CentOS/RHEL 6.x"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.6-community/el/6/x86_64/mysql-community-release-el6-5.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.6-community/el/6/i386/mysql-community-release-el6-5.noarch.rpm\n")),(0,n.kt)("h4",{id:"mysql-server-56repo-for-centosrhel-7x"},"mysql-server-5.6.repo for CentOS/RHEL 7.x"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.6-community/el/7/x86_64/mysql-community-release-el7-5.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.6-community/el/7/i386/mysql-community-release-el7-5.noarch.rpm\n")),(0,n.kt)("h3",{id:"install-mysql-server-56"},"Install MySQL Server 5.6"),(0,n.kt)("p",null,"If you already have MySql client or server installed (rpm -q mysql mysql-server), then you must uninstall using the following method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum remove -y mysql-server\nyum remove -y mysql*\n")),(0,n.kt)("p",null,"If you don't have mysql-server was installed.\nOtherwise, to install MySql client and server, then run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y mysql-community-server\n")),(0,n.kt)("h3",{id:"service-configure"},"Service Configure"),(0,n.kt)("p",null,"You should upgrade existing tables before setting the server to become a production machine, which can be done by starting the server and running the mysql_upgrade script (this may take time depending on the size of the database)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"service mysqld start\n")),(0,n.kt)("p",null,'This will issue a password prompt for the user. If you don\'t have a root user password, remove the "-p"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mysql_secure_installation\n")),(0,n.kt)("h2",{id:"install-mysql-57-on-rhelcentos-567"},"Install Mysql 5.7 on RHEL/CentOS 5/6/7"),(0,n.kt)("h3",{id:"use-repository-57"},"Use Repository 5.7"),(0,n.kt)("p",null,"First, to set up the yum repository, install the mysql\uff0dcommunity-server 5.7 RPM based on your CentOS/RHEL release:"),(0,n.kt)("h4",{id:"mysql-server-57repo-for-centosrhel-5x"},"mysql-server-5.7.repo for CentOS/RHEL 5.x"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.7-community/el/5/x86_64/mysql-community-release-el5-7.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.7-community/el/5/i386/mysql-community-release-el5-7.noarch.rpm\n")),(0,n.kt)("h4",{id:"mysql-server-57repo-for-centosrhel-6x"},"mysql-server-5.7.repo for CentOS/RHEL 6.x"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.7-community/el/6/x86_64/mysql-community-release-el6-7.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.7-community/el/6/i386/mysql-community-release-el6-7.noarch.rpm\n")),(0,n.kt)("h4",{id:"mysql-server-57repo-for-centosrhel-7x"},"mysql-server-5.7.repo for CentOS/RHEL 7.x"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# For x86_64\nyum install http://repo.mysql.com/yum/mysql-5.7-community/el/7/x86_64/mysql-community-release-el7-7.noarch.rpm\n\n# For i386\nyum install http://repo.mysql.com/yum/mysql-5.7-community/el/7/i386/mysql-community-release-el7-7.noarch.rpm\n")),(0,n.kt)("h3",{id:"2-install-mysql-server-57"},"2. Install MySQL Server 5.7"),(0,n.kt)("p",null,"If you already have MySql client or server installed (rpm -q mysql mysql-server), then you must uninstall using the following method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum remove -y mysql-server\nyum remove -y mysql*\n")),(0,n.kt)("p",null,"If you don't have mysql-server was installed.\nOtherwise, to install MySql client and server, then run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y mysql-community-server\n")),(0,n.kt)("h3",{id:"3-service-configure-1"},"3. Service Configure*"),(0,n.kt)("p",null,"You should upgrade existing tables before setting the server to become a production machine, which can be done by starting the server and running the mysql_upgrade script (this may take time depending on the size of the database)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"service mysqld start\n")),(0,n.kt)("p",null,'This will issue a password prompt for the user. If you don\'t have a root user password, remove the "-p"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mysql_secure_installation\n")))}p.isMDXComponent=!0}}]);