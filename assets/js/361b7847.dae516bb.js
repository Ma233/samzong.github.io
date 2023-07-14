"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[35254],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>p});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),i=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(t),y=r,p=c["".concat(u,".").concat(y)]||c[y]||d[y]||l;return t?a.createElement(p,s(s({ref:n},m),{},{components:t})):a.createElement(p,s({ref:n},m))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=y;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},83742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=t(87462),r=(t(67294),t(3905));const l={title:"MySQL \u6570\u636e\u5e93\u4f7f\u7528\u57fa\u7840",tags:["MySQL"],date:new Date("2016-03-29T08:22:14.000Z")},s=void 0,o={permalink:"/2016/03/29/mysql-4-mysql-shu-ju-ku-ji-chu",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2016-03-29-mysql-4-mysql-shu-ju-ku-ji-chu.md",source:"@site/blog/2016-03-29-mysql-4-mysql-shu-ju-ku-ji-chu.md",title:"MySQL \u6570\u636e\u5e93\u4f7f\u7528\u57fa\u7840",description:"1. \u6d4b\u8bd5\u73af\u5883",date:"2016-03-29T08:22:14.000Z",formattedDate:"2016\u5e743\u670829\u65e5",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],readingTime:3.316666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"MySQL \u6570\u636e\u5e93\u4f7f\u7528\u57fa\u7840",tags:["MySQL"],date:"2016-03-29T08:22:14.000Z"},prevItem:{title:"\u5982\u4f55\u5728 CentOS 6 \u5b89\u88c5\u66f4\u9ad8\u7248\u672c\u7684 PHP",permalink:"/2016/04/01/ru-he-zai-centos-6-an-zhuang-geng-gao-ban-ben-de-php"},nextItem:{title:"Linux \u4e2d\u7684\u4e09\u4e2a\u7279\u6b8a\u6743\u9650",permalink:"/2016/03/29/linux-zhong-de-san-ge-te-shu-quan-xian"}},u={authorsImageUrls:[]},i=[{value:"1. \u6d4b\u8bd5\u73af\u5883",id:"1-\u6d4b\u8bd5\u73af\u5883",level:2},{value:"2. \u5b9e\u9a8c\u6b65\u9aa4",id:"2-\u5b9e\u9a8c\u6b65\u9aa4",level:2},{value:"2.1\xa0\u5b89\u88c5 mysql",id:"21\u5b89\u88c5-mysql",level:3},{value:"2.2 \u542f\u52a8 mysql\uff0c\u5e76\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8",id:"22-\u542f\u52a8-mysql\u5e76\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8",level:3},{value:"2.3 \u76f8\u5173\u914d\u7f6e",id:"23-\u76f8\u5173\u914d\u7f6e",level:3},{value:"2.4 mysql \u521d\u59cb\u5316\u53ca\u767b\u5f55",id:"24-mysql-\u521d\u59cb\u5316\u53ca\u767b\u5f55",level:3},{value:"2.5 \u521b\u5efa\u3001\u67e5\u770b\u53ca\u5220\u9664\u5f53\u524d\u6570\u636e\u5e93",id:"25-\u521b\u5efa\u67e5\u770b\u53ca\u5220\u9664\u5f53\u524d\u6570\u636e\u5e93",level:3},{value:"2.6 \u521b\u5efa\u3001\u67e5\u770b\u53ca\u5220\u9664\u5f53\u524d\u8868\u683c",id:"26-\u521b\u5efa\u67e5\u770b\u53ca\u5220\u9664\u5f53\u524d\u8868\u683c",level:3},{value:"2.7 \u4fee\u6539\u8868\u683c\u4fe1\u606f",id:"27-\u4fee\u6539\u8868\u683c\u4fe1\u606f",level:3},{value:"2.8 \u5411\u8868\u683c\u4e2d\u63d2\u5165\u6570\u636e",id:"28-\u5411\u8868\u683c\u4e2d\u63d2\u5165\u6570\u636e",level:3},{value:"2.10 where \u8fd0\u7b97\u7b26\uff1a\u6761\u4ef6\u5224\u65ad\u67e5\u8be2\uff0c\u67e5\u8be2\u4f7f\u7528\u65b9\u6cd5\uff1awhere\xa0\xa0\u5217\xa0\xa0\u8fd0\u7b97\u7b26\xa0\xa0\u503c",id:"210-where-\u8fd0\u7b97\u7b26\u6761\u4ef6\u5224\u65ad\u67e5\u8be2\u67e5\u8be2\u4f7f\u7528\u65b9\u6cd5where\u5217\u8fd0\u7b97\u7b26\u503c",level:3},{value:"2.11 \u5220\u9664\u8868\u683c\u4e2d\u7684\u4e00\u6761\u8bb0\u5f55\uff08\u540c\u6837\u53ef\u4ee5\u5339\u914d where \u8fd0\u7b97\u7b26\uff09",id:"211-\u5220\u9664\u8868\u683c\u4e2d\u7684\u4e00\u6761\u8bb0\u5f55\u540c\u6837\u53ef\u4ee5\u5339\u914d-where-\u8fd0\u7b97\u7b26",level:3},{value:"2.12 \u66f4\u65b0\u8868\u4e2d\u7684\u4e00\u4e2a\u6570\u636e",id:"212-\u66f4\u65b0\u8868\u4e2d\u7684\u4e00\u4e2a\u6570\u636e",level:3},{value:"2.13 MySQL \u589e\u52a0\u5220\u9664\u4e00\u4e2a\u7528\u6237",id:"213-mysql-\u589e\u52a0\u5220\u9664\u4e00\u4e2a\u7528\u6237",level:3},{value:"2.14 \u7ed9\u7528\u6237\u6dfb\u52a0\u3001\u5220\u9664\u6743\u9650",id:"214-\u7ed9\u7528\u6237\u6dfb\u52a0\u5220\u9664\u6743\u9650",level:3},{value:"2.15 \u4f7f\u7528 mysqldump \u8fdb\u884c\u6570\u636e\u5e93\u5907\u4efd",id:"215-\u4f7f\u7528-mysqldump-\u8fdb\u884c\u6570\u636e\u5e93\u5907\u4efd",level:3}],m={toc:i},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u6d4b\u8bd5\u73af\u5883"},"1. \u6d4b\u8bd5\u73af\u5883"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MacBook Pro 15' i7 16GB"),(0,r.kt)("li",{parentName:"ul"},"VMware Fushion 8 Pro"),(0,r.kt)("li",{parentName:"ul"},"MySQL Version 5.1"),(0,r.kt)("li",{parentName:"ul"},"CentOS Linux 6.x")),(0,r.kt)("h2",{id:"2-\u5b9e\u9a8c\u6b65\u9aa4"},"2. \u5b9e\u9a8c\u6b65\u9aa4"),(0,r.kt)("h3",{id:"21\u5b89\u88c5-mysql"},"2.1\xa0\u5b89\u88c5 mysql"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@ultraera\xa0\xa0~]#\xa0\xa0yum\xa0\xa0install\xa0\xa0mysql\xa0\xa0mysql-server\xa0\xa0mysql-devel\n\n")),(0,r.kt)("h3",{id:"22-\u542f\u52a8-mysql\u5e76\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8"},"2.2 \u542f\u52a8 mysql\uff0c\u5e76\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@ultraera\xa0\xa0~]#\xa0\xa0service\xa0\xa0mysqld\xa0\xa0start\n[root@ultraera\xa0\xa0~]#  chkconfig\xa0\xa0mysqld\xa0\xa0on\n[root@ultraera\xa0\xa0~]#\xa0\xa0chkconfig\xa0\xa0--list\xa0\xa0|\xa0\xa0grep\xa0\xa0mysqld\nmysqld 0:off\xa0\xa01:off\xa0\xa02:on\xa0\xa03:on\xa0\xa04:on\xa0\xa05:on\xa0\xa06:off\n\n")),(0,r.kt)("h3",{id:"23-\u76f8\u5173\u914d\u7f6e"},"2.3 \u76f8\u5173\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/my.cnf\xa0\xa0       mysql\u914d\u7f6e\u6587\u4ef6\n/var/lib/mysql\xa0\xa0    mysql\u6570\u636e\u5e93\u6587\u4ef6\nport:3306\xa0\xa0         mysql\u9ed8\u8ba4\u7aef\u53e3\n\n# Tips : MySQL\xa0\u7edd\u5927\u5bf9\u6570\u8bed\u53e5\u90fd\u662f\u4ee5\u5206\u53f7\u7ed3\u5c3e\uff0c\u6ce8\u610f\u662f\u82f1\u6587\u6a21\u5f0f\u4e0b\u7684\u5206\u53f7\u3002\u5b57\u7b26\u548c\u5b57\u7b26\u4e32\u7528\xa0''\xa0\u5f15\u8d77\uff1b\n")),(0,r.kt)("h3",{id:"24-mysql-\u521d\u59cb\u5316\u53ca\u767b\u5f55"},"2.4 mysql \u521d\u59cb\u5316\u53ca\u767b\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@ultraera ~]# mysql_secure_installation\n\nNOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MySQL\n      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!\n\nIn order to log into MySQL to secure it, we'll need the current\npassword for the root user.  If you've just installed MySQL, and\nyou haven't set the root password yet, the password will be blank,\nso you should just press enter here.\n\nEnter current password for root (enter for none):        # \u9996\u6b21\u767b\u9646\u9ed8\u8ba4\u4e3a\u7a7a\n\nSetting the root password ensures that nobody can log into the MySQL\nroot user without the proper authorisation.\n\nYou already have a root password set, so you can safely answer 'n'.\n\nSet the root password? [Y/n] y            # \u8bbe\u7f6eroot\u7528\u6237\u5bc6\u7801\nNew password:\nRe-enter new password:\nPassword updated successfully!\nReloading privilege tables..\n ... Success!\n\n\nBy default, a MySQL installation has an anonymous user, allowing anyone\nto log into MySQL without having to have a user account created for\nthem.  This is intended only for testing, and to make the installation\ngo a bit smoother.  You should remove them before moving into a\nproduction environment.\n\nRemove anonymous users? [Y/n] y        # \u5220\u9664\u533f\u540d\u7528\u6237\n ... Success!\n\nNormally, root should only be allowed to connect from 'localhost'.  This\nensures that someone cannot guess at the root password from the network.\n\nDisallow root login remotely? [Y/n] y        # \u5173\u95edroot\u8fdc\u7a0b\u767b\u9646\n ... Success!\n\nBy default, MySQL comes with a database named 'test' that anyone can\naccess.  This is also intended only for testing, and should be removed\nbefore moving into a production environment.\n\nRemove test database and access to it? [Y/n] y    # \u5220\u9664 test \u6570\u636e\u5e93\n - Dropping test database...\nERROR 1008 (HY000) at line 1: Can't drop database 'test'; database doesn't exist\n ... Failed!  Not critical, keep moving...\n - Removing privileges on test database...\n ... Success!\n\nReloading the privilege tables will ensure that all changes made so far\nwill take effect immediately.\n\nReload privilege tables now? [Y/n] y    # \u4fdd\u5b58\u8fd9\u4e9b\u8bbe\u7f6e\n ... Success!\n\n\nAll done!  If you've completed all of the above steps, your MySQL\ninstallation should now be secure.\n\nThanks for using MySQL!\n\nCleaning up...\n[root@ultraera ~]#\n\n[root@ultraera\xa0\xa0~]#\xa0\n[root@ultraera\xa0\xa0~]#\xa0mysql\xa0\xa0-u\xa0\xa0root\xa0\xa0-p\xa0\xa0'123456'\n[root@ultraera\xa0\xa0~]#\xa0mysql\xa0\xa0-u\xa0\xa0root\xa0\xa0-p\xa0\xa0-h\xa0\xa0localhost \u201c-h\u201d\xa0\u6307\u5b9a\u670d\u52a1\u5668\u5730\u5740\n")),(0,r.kt)("h3",{id:"25-\u521b\u5efa\u67e5\u770b\u53ca\u5220\u9664\u5f53\u524d\u6570\u636e\u5e93"},"2.5 \u521b\u5efa\u3001\u67e5\u770b\u53ca\u5220\u9664\u5f53\u524d\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql>\xa0\xa0CREATE\xa0\xa0DATABASE\xa0\xa0ultraera;\nQuery\xa0\xa0OK,\xa0\xa01\xa0\xa0row\xa0\xa0affected\xa0\xa0(0.00\xa0\xa0sec)\nmysql>\xa0\xa0SHOW\xa0\xa0DATABASES;\n+--------------------+\n|\xa0\xa0Database |\n+--------------------+\n|\xa0\xa0information_schema\xa0\xa0|\n|\xa0\xa0mysql |\n|\xa0\xa0test |\n|\xa0\xa0ultraera |\n+--------------------+\n4\xa0\xa0rows\xa0\xa0in\xa0\xa0set\xa0\xa0(0.00\xa0\xa0sec)\nmysql>\xa0\xa0DROP\xa0\xa0DATABASE\xa0\xa0ultraera;\nQuery\xa0\xa0OK,\xa0\xa00\xa0\xa0rows\xa0\xa0affected\xa0\xa0(0.00\xa0\xa0sec)\n\n")),(0,r.kt)("h3",{id:"26-\u521b\u5efa\u67e5\u770b\u53ca\u5220\u9664\u5f53\u524d\u8868\u683c"},"2.6 \u521b\u5efa\u3001\u67e5\u770b\u53ca\u5220\u9664\u5f53\u524d\u8868\u683c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"#\u521b\u5efa\u8868\u683c\u4e4b\u524d\u8981\u5148\u9009\u62e9\u6570\u636e\u5e93\nmysql>\xa0\xa0use\xa0\xa0ultraera;\nDatabase\xa0\xa0changed\nmysql>\xa0\xa0CREATE\xa0\xa0TABLE\xa0\xa0ultraera( #create\xa0\u521b\u5efa\u8868\u683c\uff0c\u81f3\u5c111\u5217\n->\xa0\xa0id\xa0\xa0int\xa0\xa0NOT\xa0\xa0NULL, #NOT\xa0\xa0NULL \u4e0d\u4e3a\u7a7a,int\xa0\u6574\u578b\n->\xa0\xa0name\xa0\xa0char(20)\xa0\xa0NOT\xa0\xa0NULL, #char()\xa0\u5b57\u7b26\u578b\xa0\xa0,()\u5185\u5b9a\u4e49\u5b57\u7b26\u957f\u5ea6\n->\xa0\xa0age\xa0\xa0int\xa0\xa0NOT\xa0\xa0NULL\n->\xa0\xa0);\nQuery\xa0\xa0OK,\xa0\xa00\xa0\xa0rows\xa0\xa0affected\xa0\xa0(0.01\xa0\xa0sec)\nmysql>\xa0\xa0DESC\xa0\xa0ultraera;\n+-------+----------+------+-----+---------+----------------+\n|\xa0\xa0Field\xa0\xa0|\xa0\xa0Type |\xa0\xa0Null\xa0\xa0|\xa0\xa0Key\xa0\xa0|\xa0\xa0Default\xa0\xa0|\xa0\xa0Extra |\n+-------+----------+------+-----+---------+----------------+\n|\xa0\xa0id |\xa0\xa0int(11)\xa0\xa0|\xa0\xa0NO\xa0\xa0| |\xa0\xa0NULL | |\n|\xa0\xa0name\xa0\xa0|\xa0\xa0char(20)\xa0\xa0|\xa0\xa0NO\xa0\xa0| |\xa0\xa0NULL | |\n|\xa0\xa0age |\xa0\xa0int(11)\xa0\xa0|\xa0\xa0NO\xa0\xa0| |\xa0\xa0NULL | |\n+-------+----------+------+-----+---------+----------------+\n3\xa0\xa0rows\xa0\xa0in\xa0\xa0set\xa0\xa0(0.00\xa0\xa0sec)\nmysql>\xa0\xa0DROP\xa0\xa0TABLE\xa0\xa0ultraera\xa0\xa0;\nQuery\xa0\xa0OK,\xa0\xa00\xa0\xa0rows\xa0\xa0affected\xa0\xa0(0.00\xa0\xa0sec)\n\n")),(0,r.kt)("h3",{id:"27-\u4fee\u6539\u8868\u683c\u4fe1\u606f"},"2.7 \u4fee\u6539\u8868\u683c\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"a.\u91cd\u547d\u540d\u8868\u683c\nmysql>\xa0\xa0alter\xa0\xa0table\xa0\xa0ultraera\xa0\xa0rename\xa0\xa0ultraera_org;\nb.\u65b0\u589e\u5217\nalter\xa0\xa0table\xa0\xa0ultraera\xa0\xa0add\xa0\xa0address\xa0\xa0varchar(200);\nc.\u5220\u9664\u5217\nmysql>\xa0\xa0alter\xa0\xa0table\xa0\xa0ultraera\xa0\xa0drop\xa0\xa0column\xa0\xa0address;\nd.\u4fee\u6539\u4e00\u4e2a\u5217\u7684\u6570\u636e\u7c7b\u578b\nmysql>\xa0\xa0alter\xa0\xa0table\xa0\xa0ultraera\xa0\xa0modify\xa0\xa0name\xa0\xa0varchar(200);\ne.\u91cd\u547d\u540d\u4e00\u4e2a\u5217\nmysql>\xa0\xa0alter\xa0\xa0table\xa0\xa0ultraera\xa0\xa0change\xa0\xa0column\xa0\xa0NAME\xa0\xa0name\xa0\xa0varchar(200);\n")),(0,r.kt)("h3",{id:"28-\u5411\u8868\u683c\u4e2d\u63d2\u5165\u6570\u636e"},"2.8 \u5411\u8868\u683c\u4e2d\u63d2\u5165\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"a.\xa0\xa0\u5168\u5c40\u63d2\u5165\nmysql>\xa0\xa0insert\xa0\xa0into\xa0\xa0ultraera\xa0\xa0values(1,'name',18);\nb.\xa0\xa0\u6839\u636e\u5217\u63d2\u5165\nmysql>\xa0\xa0insert\xa0\xa0into\xa0\xa0ultraera(id,name,age)\xa0\xa0values(2,'john',19);\n### 2.9 \u67e5\u770b\u8868\u683c\u4e2d\u7684\u6570\u636e\uff1a\nmysql>\xa0\xa0select\xa0\xa0*\xa0\xa0from\xa0\xa0ultraera; #\xa0\xa0*\u5339\u914d\u6240\u6709\u5217\uff0c\u4e5f\u53ef\u4ee5\u53ea\u67e5\u8be2\u5355\u4e2a\u5217\uff0c\nmysql>\xa0\xa0select\xa0\xa0name\xa0\xa0from\xa0\xa0ultraera;\n\n")),(0,r.kt)("h3",{id:"210-where-\u8fd0\u7b97\u7b26\u6761\u4ef6\u5224\u65ad\u67e5\u8be2\u67e5\u8be2\u4f7f\u7528\u65b9\u6cd5where\u5217\u8fd0\u7b97\u7b26\u503c"},"2.10 where \u8fd0\u7b97\u7b26\uff1a\u6761\u4ef6\u5224\u65ad\u67e5\u8be2\uff0c\u67e5\u8be2\u4f7f\u7528\u65b9\u6cd5\uff1awhere\xa0\xa0\u5217\xa0\xa0\u8fd0\u7b97\u7b26\xa0\xa0\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"where\u652f\u6301\u7684\u8fd0\u7b97\u7b26\uff1a=\u7b49\u4e8e\uff1b>\u5927\u4e8e\uff1b<\u5c0f\u4e8e\uff1b<>\u4e0d\u7b49\u4e8e\uff1b>=\u5927\u4e8e\u7b49\u4e8e\uff1b<=\u5c0f\u4e8e\u7b49\u4e8e\uff1bBETWEEN\u5728\u67d0\u8303\u56f4\u4e4b\u5185\uff1b\nmysql>\xa0select\xa0*\xa0from\xa0ultraera\xa0where\xa0id>1;\nmysql>\xa0select\xa0*\xa0from\xa0ultraera\xa0where\xa0id=2;\nmysql>\xa0select\xa0*\xa0from\xa0ultraera\xa0where\xa0id>=1;\nmysql>\xa0select\xa0*\xa0from\xa0ultraera\xa0where\xa0id<1;\nmysql>\xa0select\xa0*\xa0from\xa0ultraera\xa0where\xa0id<=1;\nmysql>\xa0select\xa0*\xa0from\xa0ultraera\xa0where\xa0id\xa0\xa0between\xa0\xa01\xa0\xa0and\xa0\xa04;\n\n")),(0,r.kt)("h3",{id:"211-\u5220\u9664\u8868\u683c\u4e2d\u7684\u4e00\u6761\u8bb0\u5f55\u540c\u6837\u53ef\u4ee5\u5339\u914d-where-\u8fd0\u7b97\u7b26"},"2.11 \u5220\u9664\u8868\u683c\u4e2d\u7684\u4e00\u6761\u8bb0\u5f55\uff08\u540c\u6837\u53ef\u4ee5\u5339\u914d where \u8fd0\u7b97\u7b26\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql>\xa0\xa0delete\xa0\xa0from\xa0\xa0ultraera\xa0\xa0where\xa0\xa0id\xa0\xa0=\xa0\xa04;\nmysql>\xa0\xa0delete\xa0\xa0*\xa0\xa0from\xa0\xa0ultraera\xa0\uff1b #\u6e05\u7a7a\u4e00\u4e2a\u8868\u683c\u7684\u6570\u636e\uff1b\n\n")),(0,r.kt)("h3",{id:"212-\u66f4\u65b0\u8868\u4e2d\u7684\u4e00\u4e2a\u6570\u636e"},"2.12 \u66f4\u65b0\u8868\u4e2d\u7684\u4e00\u4e2a\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql>\xa0\xa0update\xa0\xa0ultraera\xa0\xa0set\xa0\xa0age=30\xa0\xa0where\xa0\xa0id=3;\n\n")),(0,r.kt)("h3",{id:"213-mysql-\u589e\u52a0\u5220\u9664\u4e00\u4e2a\u7528\u6237"},"2.13 MySQL \u589e\u52a0\u5220\u9664\u4e00\u4e2a\u7528\u6237"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql>\xa0\xa0create\xa0\xa0user\xa0\xa0user1\xa0\xa0identified\xa0\xa0by\xa0\xa0'123456'; #user1\uff0c\u5bc6\u7801123456\uff0c\u65b0\u7528\u6237\u6ca1\u6709\u6743\u9650\uff0c\u65e0\u6cd5\u767b\u5f55\u6570\u636e\u5e93\nmysql>\xa0\xa0drop\xa0\xa0user\xa0\xa0user1; #\u5220\u9664\u7528\u6237user1\n\n")),(0,r.kt)("h3",{id:"214-\u7ed9\u7528\u6237\u6dfb\u52a0\u5220\u9664\u6743\u9650"},"2.14 \u7ed9\u7528\u6237\u6dfb\u52a0\u3001\u5220\u9664\u6743\u9650"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql>\xa0\xa0grant\xa0\xa0all\xa0\xa0privileges\xa0\xa0on\xa0\xa0*.*\xa0\xa0to\xa0\xa0'user1'@'localhost'\xa0\xa0identified\xa0\xa0by\xa0\xa0'123456';\nmysql>\xa0\xa0revoke\xa0\xa0all\xa0\xa0privileges\xa0\xa0from\xa0\xa0user1;\n\n")),(0,r.kt)("h3",{id:"215-\u4f7f\u7528-mysqldump-\u8fdb\u884c\u6570\u636e\u5e93\u5907\u4efd"},"2.15 \u4f7f\u7528 mysqldump \u8fdb\u884c\u6570\u636e\u5e93\u5907\u4efd"),(0,r.kt)("p",null,"\u6570\u636e\u5e93\u91cd\u547d\u540d\uff1amysql \u4e0d\u80fd\u76f4\u63a5\u5bf9\u6570\u636e\u5e93\u91cd\u547d\u540d\uff0c\u6240\u4ee5\u5982\u679c\u60f3\u8981\u91cd\u540d\u6570\u636e\u5e93\u7684\u8bdd\uff0c\u8981\u5148\u5bfc\u51fa\uff0c\u63a5\u7740\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u5e93\uff0c\u7136\u540e\u5c06\u5bfc\u51fa\u7684 sql \u6587\u4ef6\u518d\u5bfc\u5165\u5230\u65b0\u7684\u6570\u636e\u5e93\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[adam@ultraera\xa0\xa0~]$\xa0\xa0mysqldump\xa0\xa0-u\xa0\xa0root\xa0\xa0-p\xa0\xa0ultraera\xa0\xa0>\xa0\xa0ultraera.sql     #\u5907\u4efd\n[adam@ultraera\xa0\xa0~]$\xa0\xa0mysql\xa0\xa0-u\xa0\xa0root\xa0\xa0-p\xa0\xa0new_ultraera\xa0\xa0<\xa0\xa0ultraera.sql     #\u6062\u590d\u5230\u6307\u5b9a\u6570\u636e\u5e93\n\n")))}d.isMDXComponent=!0}}]);