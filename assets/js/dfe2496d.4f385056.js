"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[63226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"HowTo Install LNMP on CentOS 6.x",tags:["LNMP"],date:new Date("2016-11-28T10:33:09.000Z")},s=void 0,l={permalink:"/2016/11/28/HowTo-Install-LNMP-on-CentOS-6-x",source:"@site/blog/2016-11-28-HowTo-Install-LNMP-on-CentOS-6-x.md",title:"HowTo Install LNMP on CentOS 6.x",description:'egrep -v "^ #|^$"     \u53bb\u9664\u6240\u6709\u4ee5#\u53f7\u5f00\u5934\u7684\u6587\u4ef6',date:"2016-11-28T10:33:09.000Z",formattedDate:"2016\u5e7411\u670828\u65e5",tags:[{label:"LNMP",permalink:"/tags/lnmp"}],readingTime:3.203333333333333,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Install LNMP on CentOS 6.x",tags:["LNMP"],date:"2016-11-28T10:33:09.000Z"},prevItem:{title:"Tomcat java.lang.OutOfMemoryError",permalink:"/2016/11/29/Tomcat-1-java-lang-OutOfMemoryError"},nextItem:{title:"\u4e16\u754c\u4e0a\u6700\u6ca1\u7528\u7684\u4e1c\u897f",permalink:"/2016/11/27/\u4e16\u754c\u4e0a\u6700\u6ca1\u7528\u7684\u4e1c\u897f"}},i={authorsImageUrls:[]},p=[{value:"Demo system",id:"demo-system",level:4},{value:"Install httpd",id:"install-httpd",level:4},{value:"Configure httpd . Replace the server name to you own one",id:"configure-httpd--replace-the-server-name-to-you-own-one",level:4},{value:"create a HTML test page",id:"create-a-html-test-page",level:4},{value:"Install PHP",id:"install-php",level:4},{value:"create a php test page",id:"create-a-php-test-page",level:4},{value:"Install MySQL",id:"install-mysql",level:4},{value:"Initial settings for MySQL",id:"initial-settings-for-mysql",level:4}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'egrep -v "^ ',(0,a.kt)("em",{parentName:"p"},"#|^"),'$"     \u53bb\u9664\u6240\u6709\u4ee5#\u53f7\u5f00\u5934\u7684\u6587\u4ef6')),(0,a.kt)("h4",{id:"demo-system"},"Demo system"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[Alex@Test01 ~]$ uname -a\nLinux Test01 2.6.32-504.el6.x86_64 #1 SMP Wed Oct 15 04:27:16 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux\n[Alex@Test01 ~]$ ip addr | grep eth0\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000\n    inet 10.0.2.128/24 brd 10.0.2.255 scope global eth0\n")),(0,a.kt)("h4",{id:"install-httpd"},"Install httpd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[Alex@Test01 yum.repos.d]$ sudo yum install -y httpd\n[Alex@Test01 ~]$ rpm -qa | grep httpd\nhttpd-2.2.15-39.el6.centos.x86_64\nhttpd-tools-2.2.15-39.el6.centos.x86_64\n\n# remove welcome page\n[Alex@Test01 yum.repos.d]$ sudo rm -f /etc/httpd/conf.d/welcome.conf\n# remove default error page\n[Alex@Test01 yum.repos.d]$ sudo rm -f /var/www/error/noindex.html\n")),(0,a.kt)("h4",{id:"configure-httpd--replace-the-server-name-to-you-own-one"},"Configure httpd . Replace the server name to you own one"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[Alex@Test01 ~]# sudo vi /etc/httpd/conf/httpd.conf\n# line 44: change\n ServerTokens Prod\n# line 76: change to ON\n KeepAlive On\n# line 262: Admin's address\n ServerAdmin luchuanjia@msn.com\n# line 338: change\n AllowOverride All\n# line 276: change to your server's name\n ServerName www.ultraera.org:80\n# line 402: add file name that it can access only with directory's name\n DirectoryIndex index.html index.htm\n# line 536: change\n ServerSignature Off\n# line 759: comment out\n# AddDefaultCharset UTF-8\n[Alex@Test01 ~]# sudo /etc/init.d/httpd start\n Starting httpd:[  OK  ]\n[Alex@Test01 ~]# sudo chkconfig httpd on     # set httpd start with system.\n")),(0,a.kt)("h4",{id:"create-a-html-test-page"},"create a HTML test page"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[Alex@Test01 ~]# sudo vi /var/www/html/index.html\nit's ok.\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://s3.51cto.com/wyfs02/M00/70/DE/wKioL1XAUfuQoFfwAACC5LJWQgg039.jpg",alt:"image"})),(0,a.kt)("h4",{id:"install-php"},"Install PHP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[Alex@Test01 ~]$ sudo yum install -y php php-mbstring php-pear\n[Alex@Test01 ~]$ rpm -qa | grep php\nphp-common-5.3.3-46.el6_6.x86_64\nphp-5.3.3-46.el6_6.x86_64\nphp-mbstring-5.3.3-46.el6_6.x86_64\nphp-cli-5.3.3-46.el6_6.x86_64\nphp-pear-1.9.4-4.el6.noarch\n\n[Alex@Test01 ~]$ sudo vi /etc/httpd/conf/httpd.conf\n# line 402 add file name that it can access only with directory\'s name\n  DirectoryIndex index.html index.htm index.php\n[Alex@Test01 ~]$ sudo vi /etc/php.ini\n# line 946 set your timezone\ndate.timezone = "Asia/Shanghai"\n[Alex@Test01 ~]$ sudo /etc/init.d/httpd restart\n Stopping httpd:[  OK  ]\n Starting httpd:[  OK  ]\n')),(0,a.kt)("h4",{id:"create-a-php-test-page"},"create a php test page"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[Alex@Test01 ~]# sudo vi /var/www/html/index.php\n\n<?php\n    phpinfo();\n?>\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://s3.51cto.com/wyfs02/M02/70/DE/wKioL1XAUguwJCl2AARE16t4hyw682.jpg",alt:"image"})),(0,a.kt)("h4",{id:"install-mysql"},"Install MySQL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[Alex@Test01 ~]$ sudo -y install mysql-server\n[Alex@Test01 ~]$ rpm -qa | grep mysql-server\nmysql-server-5.1.73-5.el6_6.x86_64\n\n[Alex@Test01 ~]$ sudo vi /etc/my.cnf\n[mysqld]\ndatadir=/var/lib/mysql\nsocket=/var/lib/mysql/mysql.sock\nuser=mysql\n# Disabling symbolic-links is recommended to prevent assorted security risks\nsymbolic-links=0\n# add\ncharacter-set-server=utf8\n\n[Alex@Test01 ~]$ sudo /etc/rc.d/init.d/mysqld start\n\nInitializing MySQL database:  WARNING: The host 'www.ultraera.org' could not be looked up with resolveip.\nThis probably means that your libc libraries are not 100 % compatible\nwith this binary MySQL version. The MySQL daemon, mysqld, should work\nnormally with the exception that host name resolving will not work.\nThis means that you should use IP addresses instead of hostnames\nwhen specifying MySQL privileges !\nInstalling MySQL system tables...\nOK\nFilling help tables...\nOK\n...\n...\n...\nYou can test the MySQL daemon with mysql-test-run.pl\ncd /usr/mysql-test ; perl mysql-test-run.pl\n\nPlease report any problems with the /usr/bin/mysqlbug script!\n\n                                              [  OK  ]\nStarting mysqld:                      [  OK  ]\n[Alex@Test01 ~]$ sudo chkconfig mysqld on\n")),(0,a.kt)("h4",{id:"initial-settings-for-mysql"},"Initial settings for MySQL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@www ~]#mysql_secure_installation\nNOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MySQL\n      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!\n\nIn order to log into MySQL to secure it, we'll need the current\npassword for the root user.  If you've just installed MySQL, and\nyou haven't set the root password yet, the password will be blank,\nso you should just press enter here.\n\n# Enter\n Enter current password for root (enter for none):\nOK, successfully used password, moving on...\n\nSetting the root password ensures that nobody can log into the MySQL\nroot user without the proper authorisation.\n\n# set root password\n Set root password? [Y/n]y\n New password:    # input any password\n Re-enter new password:\nPassword updated successfully!\nReloading privilege tables..\n ... Success!\n\nBy default, a MySQL installation has an anonymous user, allowing anyone\nto log into MySQL without having to have a user account created for\nthem.  This is intended only for testing, and to make the installation\ngo a bit smoother.  You should remove them before moving into a\nproduction environment.\n\n# remove anonymous users\n Remove anonymous users? [Y/n]y\n\n ... Success!\n\nNormally, root should only be allowed to connect from 'localhost'.  This\nensures that someone cannot guess at the root password from the network.\n\n# disallow root login remotely\n Disallow root login remotely? [Y/n]y\n\n ... Success!\n\nBy default, MySQL comes with a database named 'test' that anyone can\naccess.  This is also intended only for testing, and should be removed\nbefore moving into a production environment.\n\n# remove test database\n Remove test database and access to it? [Y/n]y\n\n - Dropping test database...\n ... Success!\n - Removing privileges on test database...\n ... Success!\n\nReloading the privilege tables will ensure that all changes made so far\nwill take effect immediately.\n\n# reload privilege tables\n Reload privilege tables now? [Y/n]y\n\n ... Success!\n\nCleaning up...\n\nAll done!  If you've completed all of the above steps, your MySQL\ninstallation should now be secure.\n\nThanks for using MySQL!\n\n# try to connect with root\n [root@www ~]#mysql -u root -p\n Enter password:# MySQL root password\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 10\nServer version: 5.1.73 Source distribution\n\nCopyright (c) 2000, 2013, Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\n# display user list\n mysql>select user,host,password from mysql.user;\n+------+-----------+-------------------------------------------+\n| user | host      | password                                  |\n+------+-----------+-------------------------------------------+\n| root | localhost | ***************************************** |\n| root | 127.0.0.1 | ***************************************** |\n+------+-----------+-------------------------------------------+\n2 rows in set (0.00 sec)\n\n# display database list\n mysql>show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n+--------------------+\n2 rows in set (0.00 sec)\nmysql>exit\nBye\n")))}m.isMDXComponent=!0}}]);