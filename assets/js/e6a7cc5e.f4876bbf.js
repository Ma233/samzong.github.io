"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[3640],{21884:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=s(17624),l=s(4552);const i={title:"\u5229\u7528 Linux \u8ba1\u5212\u4efb\u52a1\u5b9a\u65f6\u540c\u6b65 MySQL",tags:["MySQL"],date:new Date("2016-03-24T08:03:32.000Z")},t=void 0,a={permalink:"/2016/03/24/mysql-6-li-yong-linux-ji-hua-ren-wu-ding-shi-tong-bu-mysql",source:"@site/blog/2016-03-24-mysql-6-li-yong-linux-ji-hua-ren-wu-ding-shi-tong-bu-mysql.md",title:"\u5229\u7528 Linux \u8ba1\u5212\u4efb\u52a1\u5b9a\u65f6\u540c\u6b65 MySQL",description:"\u8bf4\u4e0b\u5b9e\u9645\u9879\u76ee\u573a\u666f\uff0c\u516c\u53f8\u4e00\u4e2a\u5e94\u7528\u5df2\u90e8\u7f72\u4e3b\u4ece\u6570\u636e\u5e93\uff0c\u4e1a\u52a1\u4e5f\u6b63\u5f0f\u4e0a\u7ebf\uff1b\u73b0\u5728\u5ba2\u6237\u516c\u53f8\u9886\u5bfc\u5e0c\u671b\u53ef\u4ee5\u770b\u5230\u6bcf\u5929\u7684\u4e1a\u52a1\u6570\u636e\u62a5\u8868\uff0c\u672c\u8bbe\u5b9a\u76f4\u63a5\u5230\u4ece\u5e93\u62ff\u6570\u636e\uff0c\u7136\u540e\u8fdb\u884c\u6570\u636e\u5904\u7406\uff0c\u751f\u6210\u62a5\u8868\uff0c\u4f46\u662f Java \u540c\u4e8b\u63d0\u51fa\u9700\u6c42\u65b0\u589e\u7528\u6237\u548c\u6743\u9650\u8868\uff0c\u8fd9\u6837\u4e00\u6765\uff0c\u5982\u679c\u76f4\u63a5\u4f7f\u7528\u751f\u4ea7\u5e93\u7684\u8868\u4f1a\u5bfc\u81f4\u540e\u53f0\u7cfb\u7edf\u7ba1\u7406\u4eba\u5458\u4e0e\u9886\u5bfc\u7684\u8d26\u6237\u548c\u6743\u9650\u6df7\u6dc6\uff0c\u7ecf\u8fc7\u8ba8\u8bba\u51b3\u5b9a\uff0c\u6309\u7167\u751f\u4ea7\u5e93\u7684\u8868\u7ed3\u6784\u65b0\u589e\u7279\u6b8a\u7528\u6237\u8868\u548c\u6743\u9650\u8868\uff1b\u8fd9\u6837\u64cd\u4f5c\u5b9e\u9645\u662f\u53ef\u4ee5\u5728\u4ece\u5e93\u4e0a\u65b0\u589e\u8868\u5355\uff0c\u4e14\u4e0d\u5f71\u54cd\u4e3b\u4ece\u5e93\u4e4b\u95f4\u7684\u6570\u636e\u540c\u6b65\uff0c\u4f46\u662f\u4ece\u5b89\u5168\u6027\u7684\u8003\u8651\uff0c\u65b0\u589e\u8868\u5355\u8bbe\u8ba1\u9700\u8981\u7ed9\u7528\u6237 Insert \u6743\u9650\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u4ece\u5e93\u53ea\u6709\u5229\u7528\u4e3b\u5e93\u540c\u6b65\u5199\u5165\u6570\u636e\uff0c\u5219\u53ea\u80fd\u7ed9\u5176\u4ed6\u7528\u6237 select \u6743\u9650\u3002",date:"2016-03-24T08:03:32.000Z",formattedDate:"March 24, 2016",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u5229\u7528 Linux \u8ba1\u5212\u4efb\u52a1\u5b9a\u65f6\u540c\u6b65 MySQL",tags:["MySQL"],date:"2016-03-24T08:03:32.000Z"},unlisted:!1,prevItem:{title:"\u5728 CentOS \u4e2d\u914d\u7f6e SFTP \u73af\u5883",permalink:"/2016/03/24/zai-centos-zhong-pei-zhi-sftp-huan-jing"},nextItem:{title:"Linux \u7b14\u8bd5\u8bd5\u9898",permalink:"/2016/03/23/linux-bi-shi-shi-ti"}},o={authorsImageUrls:[]},c=[{value:"1. \u6d4b\u8bd5\u73af\u5883",id:"1-\u6d4b\u8bd5\u73af\u5883",level:3},{value:"2. \u5229\u7528 mysqldump \u5bfc\u51fa sql \u6587\u4ef6",id:"2-\u5229\u7528-mysqldump-\u5bfc\u51fa-sql-\u6587\u4ef6",level:3},{value:"3. \u4f7f\u7528 mysql \u6062\u590d sql \u6587\u4ef6\u5230\u6570\u636e\u5e93\u4e2d",id:"3-\u4f7f\u7528-mysql-\u6062\u590d-sql-\u6587\u4ef6\u5230\u6570\u636e\u5e93\u4e2d",level:3},{value:"4. \u7f16\u5199\u811a\u672c",id:"4-\u7f16\u5199\u811a\u672c",level:3},{value:"5. \u589e\u52a0\u90ae\u4ef6\u901a\u77e5\u529f\u80fd",id:"5-\u589e\u52a0\u90ae\u4ef6\u901a\u77e5\u529f\u80fd",level:3},{value:"6. \u8ba1\u5212\u4efb\u52a1 crontab",id:"6-\u8ba1\u5212\u4efb\u52a1-crontab",level:3},{value:"6.1 \u5b89\u88c5 crontab",id:"61-\u5b89\u88c5-crontab",level:4},{value:"7. \u6dfb\u52a0\u8ba1\u5212\u4efb\u52a1",id:"7-\u6dfb\u52a0\u8ba1\u5212\u4efb\u52a1",level:3}];function d(n){const e={code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u8bf4\u4e0b\u5b9e\u9645\u9879\u76ee\u573a\u666f\uff0c\u516c\u53f8\u4e00\u4e2a\u5e94\u7528\u5df2\u90e8\u7f72\u4e3b\u4ece\u6570\u636e\u5e93\uff0c\u4e1a\u52a1\u4e5f\u6b63\u5f0f\u4e0a\u7ebf\uff1b\u73b0\u5728\u5ba2\u6237\u516c\u53f8\u9886\u5bfc\u5e0c\u671b\u53ef\u4ee5\u770b\u5230\u6bcf\u5929\u7684\u4e1a\u52a1\u6570\u636e\u62a5\u8868\uff0c\u672c\u8bbe\u5b9a\u76f4\u63a5\u5230\u4ece\u5e93\u62ff\u6570\u636e\uff0c\u7136\u540e\u8fdb\u884c\u6570\u636e\u5904\u7406\uff0c\u751f\u6210\u62a5\u8868\uff0c\u4f46\u662f Java \u540c\u4e8b\u63d0\u51fa\u9700\u6c42\u65b0\u589e\u7528\u6237\u548c\u6743\u9650\u8868\uff0c\u8fd9\u6837\u4e00\u6765\uff0c\u5982\u679c\u76f4\u63a5\u4f7f\u7528\u751f\u4ea7\u5e93\u7684\u8868\u4f1a\u5bfc\u81f4\u540e\u53f0\u7cfb\u7edf\u7ba1\u7406\u4eba\u5458\u4e0e\u9886\u5bfc\u7684\u8d26\u6237\u548c\u6743\u9650\u6df7\u6dc6\uff0c\u7ecf\u8fc7\u8ba8\u8bba\u51b3\u5b9a\uff0c\u6309\u7167\u751f\u4ea7\u5e93\u7684\u8868\u7ed3\u6784\u65b0\u589e\u7279\u6b8a\u7528\u6237\u8868\u548c\u6743\u9650\u8868\uff1b\u8fd9\u6837\u64cd\u4f5c\u5b9e\u9645\u662f\u53ef\u4ee5\u5728\u4ece\u5e93\u4e0a\u65b0\u589e\u8868\u5355\uff0c\u4e14\u4e0d\u5f71\u54cd\u4e3b\u4ece\u5e93\u4e4b\u95f4\u7684\u6570\u636e\u540c\u6b65\uff0c\u4f46\u662f\u4ece\u5b89\u5168\u6027\u7684\u8003\u8651\uff0c\u65b0\u589e\u8868\u5355\u8bbe\u8ba1\u9700\u8981\u7ed9\u7528\u6237 Insert \u6743\u9650\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u4ece\u5e93\u53ea\u6709\u5229\u7528\u4e3b\u5e93\u540c\u6b65\u5199\u5165\u6570\u636e\uff0c\u5219\u53ea\u80fd\u7ed9\u5176\u4ed6\u7528\u6237 select \u6743\u9650\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u6700\u7ec8\u51b3\u5b9a\uff0c\u56e0\u4e3a\u62a5\u8868\u7cfb\u7edf\u7684\u4f7f\u7528\u7387\u4f4e\uff0c\u76f4\u63a5\u5728\u62a5\u8868\u7cfb\u7edf\u7684\u670d\u52a1\u5668\u5b89\u88c5\u672c\u5730 mysql \u6570\u636e\u5e93\uff0c\u901a\u8fc7\u8ba1\u5212\u4efb\u52a1\u5b9a\u65f6\u5230\u4ece\u5e93\u4e0a\u540c\u6b65\u6570\u636e\u3002"})}),"\n",(0,r.jsx)(e.h3,{id:"1-\u6d4b\u8bd5\u73af\u5883",children:"1. \u6d4b\u8bd5\u73af\u5883"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"MacBook Pro 15' i7 16GB"}),"\n",(0,r.jsx)(e.li,{children:"VMware Fushion 8 Pro"}),"\n",(0,r.jsx)(e.li,{children:"MySQL Version 5.6"}),"\n",(0,r.jsx)(e.li,{children:"CentOS Linux 6.x"}),"\n",(0,r.jsx)(e.li,{children:"slave Server : 172.16.102.129"}),"\n",(0,r.jsx)(e.li,{children:"local Server : 172.167.102.133"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"2-\u5229\u7528-mysqldump-\u5bfc\u51fa-sql-\u6587\u4ef6",children:"2. \u5229\u7528 mysqldump \u5bfc\u51fa sql \u6587\u4ef6"}),"\n",(0,r.jsx)(e.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cmysqldump \u65f6\u4f1a\u9501\u8868\uff0c\u9700\u8981\u7ed9 mysqldump \u4f20\u9012\u201c--single-transaction\u201d\u53c2\u6570\uff0c\u53ef\u4ee5\u4f7f\u5f97 mysqldump \u65f6\u4e0d\u9501\u8868\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"/usr/bin/mysqldump -h 172.168.102.129 -u dbuser -pdbuser --single-transaction slave > slave.sql\n"})}),"\n",(0,r.jsx)(e.h3,{id:"3-\u4f7f\u7528-mysql-\u6062\u590d-sql-\u6587\u4ef6\u5230\u6570\u636e\u5e93\u4e2d",children:"3. \u4f7f\u7528 mysql \u6062\u590d sql \u6587\u4ef6\u5230\u6570\u636e\u5e93\u4e2d"}),"\n",(0,r.jsx)(e.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u8be5 local server \u7684 slave \u5e93\u4e2d\u6709\u6570\u636e\u8868\uff0c\u5f53\u8868\u540d\u4e0e slave server \u7684\u8868\u540d\u76f8\u540c\u65f6\uff0c\u6570\u636e\u8868\u5185\u7684\u6570\u636e\u4f1a\u88ab\u8986\u76d6\uff1b\u5982\u679c local server \u7684\u8868\u5728 slave.sql \u4e2d\u4e0d\u5b58\u5728\uff0c\u5219\u4e0d\u53d7\u5f71\u54cd\uff0c\u6b63\u662f\u5229\u7528\u8fd9\u4e2a\u7279\u6027\u89e3\u51b3\u7528\u6237\u9700\u6c42\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"/usr/bin/mysql -u dbuser -pdbuser report < /home/.mysql/slave.sql\n"})}),"\n",(0,r.jsx)(e.h3,{id:"4-\u7f16\u5199\u811a\u672c",children:"4. \u7f16\u5199\u811a\u672c"}),"\n",(0,r.jsx)(e.p,{children:"\u9996\u5148\u5728\u672c\u5730\u67d0\u4e00\u4f4d\u7f6e\u4f5c\u4e3a\u4e34\u65f6 sql \u5b58\u50a8\u5730\u5740\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"[root@report ~]# mkdir /home/.mysql     # \u8fd9\u4e2a\u76ee\u5f55\u53ef\u4ee5\u81ea\u5b9a\u4e49\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u811a\u672c 1\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'#!/bin/bash\n\nTIME=`date "+%Y%m%d%H"`\n\nrm -rf /home/.mysql/*\n\n/usr/bin/mysqldump -h 172.168.102.129 -u dbuser -pdbuser --single-transaction slave > /home/.mysql/slave_$TIME.sql\n\n/usr/bin/mysql -u dbuser -pdbuser report < /home/.mysql/slave_$TIME.sql\n\n'})}),"\n",(0,r.jsx)(e.h3,{id:"5-\u589e\u52a0\u90ae\u4ef6\u901a\u77e5\u529f\u80fd",children:"5. \u589e\u52a0\u90ae\u4ef6\u901a\u77e5\u529f\u80fd"}),"\n",(0,r.jsx)(e.p,{children:"\u56e0\u4e3a\u524d\u671f\u540c\u4e8b\u9700\u8981\u5f97\u77e5\u5907\u4efd\u7684\u6267\u884c\u7ed3\u679c\uff0c\u6240\u4ee5\u5e0c\u671b\u6570\u636e\u540c\u6b65\u6210\u529f\u540e\u83b7\u5f97\u90ae\u4ef6\u63d0\u9192\uff0c\u8fd9\u91cc\u4f7f\u7528 sendmail \u5b9e\u73b0\uff0c\u5728 CentOS \u91cc\u9884\u88c5\u662f\u6ca1\u6709\u5b89\u88c5 sendmail\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5b89\u88c5 sendmail \u670d\u52a1\uff0c\u53e6\u5916\u4e00\u4e2a\u5b89\u88c5\u547d\u4ee4\u884c\u90ae\u4ef6\u5de5\u5177 mailx\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"[root@report ~]# yum install -y sendmail mailx\n\n......\n\n[root@report ~]# service sendmail start\nStarting sendmail:                                         [  OK  ]\nStarting sm-client:                                        [  OK  ]\n[root@report ~]# chkconfig sendmail on\n\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5b8c\u6574\u811a\u672c\uff1areport_sync.sh\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'#!/bin/bash\n\nTIME=`date "+%Y%m%d%H"`\n\nrm -rf /home/.mysql/*\n\n/usr/bin/mysqldump -h 172.168.102.129 -u dbuser -pdbuser --single-transaction slave > /home/.mysql/slave_$TIME.sql\n\n/usr/bin/mysql -u dbuser -pdbuser report < /home/.mysql/slave_$TIME.sql\n\n# send mail to adminuser\nif [ $? -eq 0 ]\nthen\n        echo "report SQL sync is successfully. At time: `date` " | mail -s report-sync-successfully  hello@abc.cn\nelse\n        echo " Error Error report SQL sync is Error. At time: `date` " | mail -s report-sync-error  hello@abc.cn\nfi\n\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u67e5\u770b\u4e0b\u90ae\u4ef6\u901a\u77e5\uff1a\n",(0,r.jsx)(e.img,{src:"http://blog.ultraera.org:80/content/images/2016/03/24/p01.jpg",alt:"image"})]}),"\n",(0,r.jsx)(e.h3,{id:"6-\u8ba1\u5212\u4efb\u52a1-crontab",children:"6. \u8ba1\u5212\u4efb\u52a1 crontab"}),"\n",(0,r.jsx)(e.p,{children:"\u548c\u540c\u4e8b\u53ca\u5ba2\u6237\u6c9f\u901a\uff0c\u786e\u8ba4\u6bcf\u5929 1\u30015\u30019\u300113\u300117\u300121 \u6574\u65f6\u5230\u4ece\u5e93\u62c9\u53bb\u6570\u636e\uff0cLinux \u9009\u62e9\u4f7f\u7528 crontab \u505a\u8ba1\u5212\u4efb\u52a1\uff0ccrontab \u547d\u4ee4\u5e38\u89c1\u4e8e Unix \u548c\u7c7b Unix \u7684\u64cd\u4f5c\u7cfb\u7edf\u4e4b\u4e2d\uff0c\u7528\u4e8e\u8bbe\u7f6e\u5468\u671f\u6027\u88ab\u6267\u884c\u7684\u6307\u4ee4\u3002\u8be5\u547d\u4ee4\u4ece\u6807\u51c6\u8f93\u5165\u8bbe\u5907\u8bfb\u53d6\u6307\u4ee4\uff0c\u5e76\u5c06\u5176\u5b58\u653e\u4e8e\u201ccrontab\u201d\u6587\u4ef6\u4e2d\u3002\u901a\u5e38\uff0ccrontab \u50a8\u5b58\u7684\u6307\u4ee4\u88ab\u5b88\u62a4\u8fdb\u7a0b\u6fc0\u6d3b\uff0ccrond \u5e38\u5e38\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u6bcf\u4e00\u5206\u949f\u68c0\u67e5\u662f\u5426\u6709\u9884\u5b9a\u7684\u4f5c\u4e1a\u9700\u8981\u6267\u884c\u3002\u8fd9\u7c7b\u4f5c\u4e1a\u4e00\u822c\u79f0\u4e3a cron jobs\u3002"}),"\n",(0,r.jsx)(e.h4,{id:"61-\u5b89\u88c5-crontab",children:"6.1 \u5b89\u88c5 crontab"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"[root@report ~]# yum install -y vixie-cron\n[root@report ~]# yum install -y crontabs\n\n\u8bf4\u660e\uff1a\nvixie-cron\u8f6f\u4ef6\u5305\u662fcron\u7684\u4e3b\u7a0b\u5e8f\uff1b\ncrontabs\u8f6f\u4ef6\u5305\u662f\u7528\u6765\u5b89\u88c5\u3001\u5378\u88c5\u3001\u6216\u5217\u4e3e\u7528\u6765\u9a71\u52a8 crond \u5b88\u62a4\u8fdb\u7a0b\u7684\u8868\u683c\u7684\u7a0b\u5e8f\u3002\n\ncron \u662flinux\u7684\u5185\u7f6e\u670d\u52a1\uff0c\u4f46\u5b83\u4e0d\u81ea\u52a8\u8d77\u6765\uff0c\u53ef\u4ee5\u7528\u4ee5\u4e0b\u7684\u65b9\u6cd5\u542f\u52a8\u3001\u5173\u95ed\u8fd9\u4e2a\u670d\u52a1\uff1a\n/sbin/service crond start #\u542f\u52a8\u670d\u52a1\n/sbin/service crond stop #\u5173\u95ed\u670d\u52a1\n/sbin/service crond restart #\u91cd\u542f\u670d\u52a1\n/sbin/service crond reload #\u91cd\u65b0\u8f7d\u5165\u914d\u7f6e\n\n\u8bbe\u7f6ecrond\u5f00\u673a\u81ea\u542f\u52a8\n[root@report ~]# chkconfig crond on\n\n"})}),"\n",(0,r.jsx)(e.h3,{id:"7-\u6dfb\u52a0\u8ba1\u5212\u4efb\u52a1",children:"7. \u6dfb\u52a0\u8ba1\u5212\u4efb\u52a1"}),"\n",(0,r.jsx)(e.p,{children:"\u5c06\u811a\u672c report_sync.sh \u4fdd\u5b58\u5230/usr/bin\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"[root@report ~]# mv report_sync.sh /usr/bin\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u589e\u52a0\u8ba1\u5212\u4efb\u52a1\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"[root@report ~]# crontab -e\n\n# add this word.\n* 1-21/4  * * * /usr/bin/report_sync.sh\n\n# \u8868\u793a\u5728\u6bcf\u5929\u76841-21\u65f6\u95f4\u5185\uff0c\u6bcf4\u5c0f\u65f6\u6267\u884c\u4e00\u4e2a\u811a\u672c\n\n"})})]})}function h(n={}){const{wrapper:e}={...(0,l.M)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},4552:(n,e,s)=>{s.d(e,{I:()=>a,M:()=>t});var r=s(11504);const l={},i=r.createContext(l);function t(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);