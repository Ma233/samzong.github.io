"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[22710],{6648:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var a=s(17624),t=s(4552);const r={title:"CentOS \u4fee\u6539\u7cfb\u7edf\u4e3b\u673a\u540d",tags:["CentOS"],date:new Date("2016-05-05T05:41:39.000Z")},l=void 0,c={permalink:"/2015/08/12/HowTo-Automatic-EasyBackup-MysqlDB",source:"@site/blog/2015-08-12-HowTo-Automatic-EasyBackup-MysqlDB.md",title:"CentOS \u4fee\u6539\u7cfb\u7edf\u4e3b\u673a\u540d",description:"CentOS 7 \u4fee\u6539\u4e3b\u673a\u540d",date:"2016-05-05T05:41:39.000Z",formattedDate:"May 5, 2016",tags:[{label:"CentOS",permalink:"/tags/cent-os"}],readingTime:8.365,hasTruncateMarker:!1,authors:[],frontMatter:{title:"CentOS \u4fee\u6539\u7cfb\u7edf\u4e3b\u673a\u540d",tags:["CentOS"],date:"2016-05-05T05:41:39.000Z"},unlisted:!1,prevItem:{title:"CentOS \u4fee\u6539\u7cfb\u7edf\u4e3b\u673a\u540d",permalink:"/2016/05/05/centos-7-1-xiu-gai-xi-tong-zhu-ji-ming"},nextItem:{title:"CentOS \u7cfb\u7edf\u670d\u52a1\u7ba1\u7406\u65b9\u5f0f",permalink:"/2016/05/05/centos-7-2-xi-tong-fu-wu-guan-li-fang-shi"}},o={authorsImageUrls:[]},i=[{value:"CentOS 7 \u4fee\u6539\u4e3b\u673a\u540d",id:"centos-7-\u4fee\u6539\u4e3b\u673a\u540d",level:2},{value:"\u65b9\u6cd5 1: <code>hostname \u4e3b\u673a\u540d</code>",id:"\u65b9\u6cd5-1-hostname-\u4e3b\u673a\u540d",level:3},{value:"\u65b9\u6cd5 2: <code>hostnamectl set-hostname &lt;\u4e3b\u673a\u540d&gt;</code>",id:"\u65b9\u6cd5-2-hostnamectl-set-hostname-\u4e3b\u673a\u540d",level:3},{value:"\u6d4b\u8bd5\u5907\u4efd\u547d\u4ee4",id:"\u6d4b\u8bd5\u5907\u4efd\u547d\u4ee4",level:4},{value:"\u5b89\u88c5\u547d\u4ee4\u884c\u90ae\u4ef6\u5de5\u5177 mailx",id:"\u5b89\u88c5\u547d\u4ee4\u884c\u90ae\u4ef6\u5de5\u5177-mailx",level:4},{value:"\u5b89\u88c5\u8ba1\u5212\u4efb\u52a1\u5de5\u5177 Crontab",id:"\u5b89\u88c5\u8ba1\u5212\u4efb\u52a1\u5de5\u5177-crontab",level:4},{value:"\u7f16\u5199\u5907\u4efd\u811a\u672c",id:"\u7f16\u5199\u5907\u4efd\u811a\u672c",level:4},{value:"\u6dfb\u52a0\u8ba1\u5212\u4efb\u52a1",id:"\u6dfb\u52a0\u8ba1\u5212\u4efb\u52a1",level:4}];function d(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"centos-7-\u4fee\u6539\u4e3b\u673a\u540d",children:"CentOS 7 \u4fee\u6539\u4e3b\u673a\u540d"}),"\n",(0,a.jsxs)(e.h3,{id:"\u65b9\u6cd5-1-hostname-\u4e3b\u673a\u540d",children:["\u65b9\u6cd5 1: ",(0,a.jsx)(e.code,{children:"hostname \u4e3b\u673a\u540d"})]}),"\n",(0,a.jsx)(e.p,{children:"\u8fd9\u79cd\u65b9\u5f0f\uff0c\u53ea\u80fd\u4fee\u6539\u4e34\u65f6\u7684\u4e3b\u673a\u540d\uff0c\u5f53\u91cd\u542f\u673a\u5668\u540e\uff0c\u4e3b\u673a\u540d\u79f0\u53c8\u53d8\u56de\u6765\u4e86\u3002"}),"\n",(0,a.jsxs)(e.h3,{id:"\u65b9\u6cd5-2-hostnamectl-set-hostname-\u4e3b\u673a\u540d",children:["\u65b9\u6cd5 2: ",(0,a.jsx)(e.code,{children:"hostnamectl set-hostname <\u4e3b\u673a\u540d>"})]}),"\n",(0,a.jsxs)(e.p,{children:["\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u4fee\u6539\uff0c\u53ef\u4ee5\u6c38\u4e45\u6027\u7684\u4fee\u6539\u4e3b\u673a\u540d\u79f0\uff01\n",(0,a.jsx)(e.img,{src:"https://img.samzong.me/202307191528329.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image"})]}),"\n",(0,a.jsx)(e.p,{children:"\u6240\u4ee5\u6211\u4eec\u7684\u6b65\u9aa4\u5e94\u8be5\uff1a"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"\u6d4b\u8bd5\u5907\u4efd\u547d\u4ee4\u662f\u5426\u53ef\u4ee5\u6b63\u5e38\u6267\u884c"}),"\n",(0,a.jsx)(e.li,{children:"\u5b89\u88c5\u6d4b\u8bd5\u547d\u4ee4\u884c\u90ae\u4ef6\u5de5\u5177 mailx"}),"\n",(0,a.jsx)(e.li,{children:"\u5b89\u88c5\u8ba1\u5212\u4efb\u52a1\u5de5\u5177 Crontab"}),"\n",(0,a.jsx)(e.li,{children:"\u7f16\u5199\u5907\u4efd\u811a\u672c"}),"\n",(0,a.jsx)(e.li,{children:"\u6dfb\u52a0\u8ba1\u5212\u4efb\u52a1"}),"\n"]}),"\n",(0,a.jsx)(e.h4,{id:"\u6d4b\u8bd5\u5907\u4efd\u547d\u4ee4",children:"\u6d4b\u8bd5\u5907\u4efd\u547d\u4ee4"}),"\n",(0,a.jsx)(e.p,{children:"\u9996\u5148\u4f60\u8981\u83b7\u5f97\u4f60\u8981\u5907\u4efd\u7684\u6570\u636e\u5e93\u5bf9\u5e94\u7684 select \u6743\u9650\uff0c\u4ec5\u9700\u8981 select \u6743\u9650\u5373\u53ef\uff0cmysql \u5728\u7ba1\u7406\u65b9\u9762\uff0c\u5e94\u8be5\u575a\u6301\u53ea\u8d4b\u4e88\u5fc5\u987b\u6743\u9650\u7684\u539f\u5219\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-mysql",children:"mysql> grant select on ghost.* to 'ghost_backuser'@'localhost' identified by 'backupPass';\nQuery OK, 0 rows affected (0.00 sec)\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u56e0\u4e3a\u6211\u53ea\u5728\u672c\u5730\u6267\u884c\u5907\u4efd\u64cd\u4f5c\uff0c\u6240\u4ee5\u6211\u53ea\u8d4b\u4e88\u4e86",(0,a.jsx)(e.code,{children:"localhost"}),"\u7684\u6743\u9650\uff0c\u4f60\u7684\u6743\u9650\u5e94\u8be5\u8981\u662f\u6267\u884c\u5907\u4efd\u5de5\u4f5c\u7684\u670d\u52a1\u5668\u4e3b\u673a\u4fe1\u606f\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-mysql",children:"# \u521b\u5efa\u4ec5\u6388\u6743\u672c\u5730\u8bbf\u95ee\u7684\u7528\u6237\nmysql> create user dbackuser@'localhost';\n# \u521b\u5efa\u6388\u6743\u6240\u6709\u6765\u6e90\u5730\u5740\u7684\u7528\u6237\nmysql> create user dbackuser@'%';\n# \u521b\u5efa\u4ec5\u6388\u6743\u4ece\u7279\u5b9aIP\u7684\u7528\u6237\nmysql> create user dbackuser@'192.168.0.230';\n# \u521b\u5efa\u4ec5\u6388\u6743\u4ece\u7279\u5b9aIP\u6bb5\u8bbf\u95ee\u7684\u7528\u6237\nmysql> create user dbackuser@'192.168.0.0/23';\n# \u521b\u5efa\u4ec5\u6388\u6743\u4ece\u7279\u5b9a\u57df\u540d\u6765\u8bbf\u95ee\u7684\u7528\u6237\nmysql> create user dbackuser@'samzong.me';\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u597d\u4e86\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u6d4b\u8bd5\u5bf9\u5e94\u7528\u6237\u662f\u5426\u6709\u6743\u9650\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-mysql",children:"\u279c  ~ mysql -u ghost_backuser -pbackupPass\nWarning: Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 7\nServer version: 5.6.35 MySQL Community Server (GPL)\n\nCopyright (c) 2000, 2016, Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| ghost              |\n+--------------------+\n2 rows in set (0.00 sec)\n\nmysql> use ghost;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n\nDatabase changed\n\nmysql> select name from users;\n+------+\n| name |\n+------+\n| ALEX |\n+------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u6d4b\u8bd5",(0,a.jsx)(e.code,{children:"mysqldump"}),"\u5907\u4efd\u547d\u4ee4\uff0c\u6ce8\u610f mysqldump \u5907\u4efd\u4f1a\u9501\u8868\uff0c\u4f46\u5bf9\u4e8e\u6b63\u5728\u5de5\u4f5c\u7684\u6570\u636e\u5e93\uff0c\u9501\u8868\u4f1a\u5f71\u54cd\u5230\u6b63\u5e38\u4e1a\u52a1\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,a.jsx)(e.code,{children:"--single-transaction"}),"\u53c2\u6570\uff0c\u4e0d\u9501\u8868\u5907\u4efd\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"\u279c  ~ mysqldump -u ghost_backuser -pbackupPass ghost > ghost.bak.sql\nWarning: Using a password on the command line interface can be insecure.\nmysqldump: Got error: 1044: Access denied for user 'ghost_backuser'@'localhost' to database 'ghost' when using LOCK TABLES\n\u279c  ~ mysqldump -u ghost_backuser -pbackupPass --single-transaction ghost > ghost.bak.sql\nWarning: Using a password on the command line interface can be insecure.\n\u279c  ~ ls -lh\ntotal 780K\n-rw-r--r-- 1 root   root  780K May 17 16:24 ghost.bak.sql\n\u279c  ~\n"})}),"\n",(0,a.jsx)(e.h4,{id:"\u5b89\u88c5\u547d\u4ee4\u884c\u90ae\u4ef6\u5de5\u5177-mailx",children:"\u5b89\u88c5\u547d\u4ee4\u884c\u90ae\u4ef6\u5de5\u5177 mailx"}),"\n",(0,a.jsx)(e.p,{children:"\u5b89\u88c5 mailx \u5728CentOS/RehHat:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"\u279c  ~ yum install -y mailx\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u6d4b\u8bd5\u53d1\u9001\u90ae\u4ef6\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'\u279c  ~ echo "test" | mail -s "this a test email" samzong.lu@gmail.com\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://img.samzong.me/202307191528331.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image"})}),"\n",(0,a.jsx)(e.h4,{id:"\u5b89\u88c5\u8ba1\u5212\u4efb\u52a1\u5de5\u5177-crontab",children:"\u5b89\u88c5\u8ba1\u5212\u4efb\u52a1\u5de5\u5177 Crontab"}),"\n",(0,a.jsx)(e.p,{children:"crontab \u547d\u4ee4\u5e38\u89c1\u4e8e Unix \u548c\u7c7b Unix \u7684\u64cd\u4f5c\u7cfb\u7edf\u4e4b\u4e2d\uff0c\u7528\u4e8e\u8bbe\u7f6e\u5468\u671f\u6027\u88ab\u6267\u884c\u7684\u6307\u4ee4\u3002\u8be5\u547d\u4ee4\u4ece\u6807\u51c6\u8f93\u5165\u8bbe\u5907\u8bfb\u53d6\u6307\u4ee4\uff0c\u5e76\u5c06\u5176\u5b58\u653e\u4e8e\u201ccrontab\u201d\u6587\u4ef6\u4e2d\u3002\u901a\u5e38\uff0ccrontab \u50a8\u5b58\u7684\u6307\u4ee4\u88ab\u5b88\u62a4\u8fdb\u7a0b\u6fc0\u6d3b\uff0ccrond \u5e38\u5e38\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u6bcf\u4e00\u5206\u949f\u68c0\u67e5\u662f\u5426\u6709\u9884\u5b9a\u7684\u4f5c\u4e1a\u9700\u8981\u6267\u884c\u3002\u8fd9\u7c7b\u4f5c\u4e1a\u4e00\u822c\u79f0\u4e3a cron jobs\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"\u279c  ~ yum install vixie-cron\n\u279c  ~ yum install crontabs\n"})}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"vixie-cron \u8f6f\u4ef6\u5305\u662f cron \u7684\u4e3b\u7a0b\u5e8f\uff1b"}),"\n",(0,a.jsx)(e.p,{children:"crontabs \u8f6f\u4ef6\u5305\u662f\u7528\u6765\u5b89\u88c5\u3001\u5378\u88c5\u3001\u6216\u5217\u4e3e\u7528\u6765\u9a71\u52a8 cron \u5b88\u62a4\u8fdb\u7a0b\u7684\u8868\u683c\u7684\u7a0b\u5e8f\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u542f\u52a8 crond \u5e76\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"\u279c  ~ service crond start\nStarting crond:                                            [  OK  ]\n\u279c  ~ chkconfig crond on\n"})}),"\n",(0,a.jsx)(e.p,{children:"crontab \u57fa\u7840\u547d\u4ee4\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"\u8bed\u3000\u3000\u6cd5\uff1acrontab [-u <\u7528\u6237\u540d\u79f0>][\u914d\u7f6e\u6587\u4ef6] \u6216 crontab [-u <\u7528\u6237\u540d\u79f0>][-elr]\n\n\u8865\u5145\u8bf4\u660e\uff1acron\u662f\u4e00\u4e2a\u5e38\u9a7b\u670d\u52a1\uff0c\u5b83\u63d0\u4f9b\u8ba1\u65f6\u5668\u7684\u529f\u80fd\uff0c\u8ba9\u7528\u6237\u5728\u7279\u5b9a\u7684\u65f6\u95f4\u5f97\u4ee5\u6267\u884c\u9884\u8bbe\u7684\u6307\u4ee4\u6216\u7a0b\u5e8f\u3002\u53ea\u8981\u7528\u6237\u4f1a\u7f16\u8f91\u8ba1\u65f6\u5668\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u8ba1\u65f6\u5668\u7684\u529f\u80fd\u3002\n\n\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\uff1aMinute Hour Day Month DayOFWeek Command\n\n\u53c2\u3000\u3000\u6570\uff1a\n-e \u3000\u7f16\u8f91\u8be5\u7528\u6237\u7684\u8ba1\u65f6\u5668\u8bbe\u7f6e\u3002\n-l \u3000\u5217\u51fa\u8be5\u7528\u6237\u7684\u8ba1\u65f6\u5668\u8bbe\u7f6e\u3002\n-r \u3000\u5220\u9664\u8be5\u7528\u6237\u7684\u8ba1\u65f6\u5668\u8bbe\u7f6e\u3002\n-u<\u7528\u6237\u540d\u79f0> \u3000\u6307\u5b9a\u8981\u8bbe\u5b9a\u8ba1\u65f6\u5668\u7684\u7528\u6237\u540d\u79f0\u3002\n"})}),"\n",(0,a.jsx)(e.p,{children:"crontab \u914d\u7f6e\u7684\u57fa\u672c\u683c\u5f0f\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"*     * \u3000 *\u3000  *\u3000  *\u3000\u3000command\n\u5206\u3000  \u65f6\u3000 \u65e5\u3000 \u6708\u3000 \u5468\u3000  \u547d\u4ee4\n\n \u7b2c1\u5217\u8868\u793a\u5206\u949f1\uff5e59 \u6bcf\u5206\u949f\u7528*\u6216\u8005 */1\u8868\u793a\n \u7b2c2\u5217\u8868\u793a\u5c0f\u65f61\uff5e23\uff080\u8868\u793a0\u70b9\uff09\n \u7b2c3\u5217\u8868\u793a\u65e5\u671f1\uff5e31\n \u7b2c4\u5217\u8868\u793a\u6708\u4efd1\uff5e12\n \u7b2c5\u5217\u6807\u8bc6\u53f7\u661f\u671f0\uff5e6\uff080\u8868\u793a\u661f\u671f\u5929\uff09\n \u7b2c6\u5217\u8981\u8fd0\u884c\u7684\u547d\u4ee4\n"})}),"\n",(0,a.jsx)(e.p,{children:"crontab \u7684\u4e00\u4e9b\u4f8b\u5b50\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"#\u6bcf\u665a\u768421:30 \u91cd\u542fapache\n30 21 * * * /usr/local/etc/rc.d/lighttpd restart\n\n#\u6bcf\u67081\u300110\u300122\u65e5\u76844 : 45\u91cd\u542fapache\n45 4 1,10,22 * * /usr/local/etc/rc.d/lighttpd restart\n\n#\u6bcf\u5468\u516d\u3001\u5468\u65e5\u76841 : 10\u91cd\u542fapache\n10 1 * * 6,0 /usr/local/etc/rc.d/lighttpd restart\n\n#\u6bcf\u592918 : 00\u81f323 : 00\u4e4b\u95f4\u6bcf\u969430\u5206\u949f\u91cd\u542fapache\n0,30 18-23 * * * /usr/local/etc/rc.d/lighttpd restart\n\n#\u6bcf\u661f\u671f\u516d\u768411 : 00 pm\u91cd\u542fapache\n0 23 * * 6 /usr/local/etc/rc.d/lighttpd restart\n\n#\u665a\u4e0a11\u70b9\u5230\u65e9\u4e0a7\u70b9\u4e4b\u95f4\uff0c\u6bcf\u9694\u4e00\u5c0f\u65f6\u91cd\u542fapache\n* 23-7/1 * * * /usr/local/etc/rc.d/lighttpd restart\n\n#\u6bcf\u4e00\u5c0f\u65f6\u91cd\u542fapache\n* */1 * * * /usr/local/etc/rc.d/lighttpd restart\n\n#\u6bcf\u6708\u76844\u53f7\u4e0e\u6bcf\u5468\u4e00\u5230\u5468\u4e09\u768411\u70b9\u91cd\u542fapache\n0 11 4 * mon-wed /usr/local/etc/rc.d/lighttpd restart\n\n#\u4e00\u6708\u4e00\u53f7\u76844\u70b9\u91cd\u542fapache\n0 4 1 jan * /usr/local/etc/rc.d/lighttpd restart\n\n#\u6bcf\u534a\u5c0f\u65f6\u540c\u6b65\u4e00\u4e0b\u65f6\u95f4\n*/30 * * * * /usr/sbin/ntpdate 210.72.145.44\n"})}),"\n",(0,a.jsx)(e.h4,{id:"\u7f16\u5199\u5907\u4efd\u811a\u672c",children:"\u7f16\u5199\u5907\u4efd\u811a\u672c"}),"\n",(0,a.jsx)(e.p,{children:"\u597d\u4e86\uff0c\u4ee5\u4e0a\u6211\u4eec\u6d4b\u8bd5\u9700\u8981\u7528\u5230\u7684\u5404\u4e2a\u6a21\u5757\uff0c\u4e0b\u9762\u6211\u4eec\u8981\u7f16\u5199\u5907\u4efd\u811a\u672c\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'#!/bin/bash\n#  mysqldump scripts.\n# filepath: /usr/local/bin/ghost_sqldump.sh\n# Author: samzong\n\n#  set TIME variable\nTIME=`date "+%Y%m%d%H%M%S"`\n\n# backup db ghost to /mysqlbak/\nmysqldump --single-transaction -h localhost -u ghost_backuser -pbackupPass ghost  > /mysqlbak/ghost_$TIME.sql\n\n# tar sql files.\ntar czvf /mysqlbak/ghost_$TIME.sql.tgz /mysqlbak/ghost_$TIME.sql --remove-files\n\n# remove over 7 days sql files.\nfind /mysqlbak/ -mtime +7 -exec rm -f {} \\;\n\n# send mial to admin\'mial\nif [ $? -eq 0 ]\nthen\n echo "ghost SQL dump is successfully. At time: `date` " | mail -s ghost-dump-successfully  samzong.lu@gmail.com\nelse\n echo " Error Error ghost SQL dump is Error. At time: `date` " | mail -s ghost-dump-error samzong.lu@gmail.com\nfi\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u6ce8\u610f\u811a\u672c\u4e2d\u7684\u4ee5\u4e0b\u5185\u5bb9\u8981\u6839\u636e\u4f60\u7684\u5b9e\u9645\u60c5\u51b5\u4fee\u6539\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:'-h " "  \u8fd9\u662f\u6570\u636e\u5e93\u6240\u5728\u7684\u4e3b\u673a'}),"\n",(0,a.jsx)(e.li,{children:'-u " "       \u8fd9\u662f\u6570\u636e\u5e93\u53ef\u5907\u4efd\u7684\u7528\u6237\u540d'}),"\n",(0,a.jsx)(e.li,{children:'-p" "        \u5907\u4efd\u7528\u6237\u7684\u5bc6\u7801'}),"\n"]}),"\n",(0,a.jsx)(e.h4,{id:"\u6dfb\u52a0\u8ba1\u5212\u4efb\u52a1",children:"\u6dfb\u52a0\u8ba1\u5212\u4efb\u52a1"}),"\n",(0,a.jsx)(e.p,{children:"\u7ecf\u8fc7\u4ee5\u4e0a\u6d4b\u8bd5\uff0c\u5df2\u7ecf\u5f88\u597d\u7684\u5b8c\u6210\u5907\u4efd\u811a\u672c\uff0c\u63a5\u4e0b\u6765\u5c06\u811a\u672c\u6dfb\u52a0\u5230 crontab \u5185\uff0c\u5e76\u8bbe\u7f6e\u81ea\u52a8\u6267\u884c\u7684\u65f6\u95f4\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"\u279c  ~ crontab -e\n00 00 * * * sh /usr/local/bin/ghost_sqldump.sh\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u91cd\u542f crontab \u670d\u52a1\uff0c\u5e76\u786e\u8ba4 crontab \u5df2\u7ecf\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"\u279c  ~ service crond restart\nStopping crond:                                            [  OK  ]\nStarting crond:                                            [  OK  ]\n\u279c  ~ chkconfig --list | grep crond\ncrond           0:off 1:off 2:on 3:on 4:on 5:on 6:off\n"})})]})}function h(n={}){const{wrapper:e}={...(0,t.M)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},4552:(n,e,s)=>{s.d(e,{I:()=>c,M:()=>l});var a=s(11504);const t={},r=a.createContext(t);function l(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);