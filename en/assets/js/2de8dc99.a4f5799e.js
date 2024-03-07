"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[63116],{93284:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>g,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var d=e(17624),l=e(4552);const s={title:"HowTo Install MongoDB  on CentOS 6.x",tags:["MongoDB"],date:new Date("2016-03-27T05:55:28.000Z")},r=void 0,i={permalink:"/en/2016/03/27/HowTo-Install-MongoDB-on-CentOS-6-x",source:"@site/blog/2016-03-27-HowTo-Install-MongoDB-on-CentOS-6-x.md",title:"HowTo Install MongoDB  on CentOS 6.x",description:"1. Overiew",date:"2016-03-27T05:55:28.000Z",formattedDate:"March 27, 2016",tags:[{label:"MongoDB",permalink:"/en/tags/mongo-db"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Install MongoDB  on CentOS 6.x",tags:["MongoDB"],date:"2016-03-27T05:55:28.000Z"},unlisted:!1,prevItem:{title:"CentOS \u4f7f\u7528 createrepo \u642d\u5efa\u672c\u5730\u6e90",permalink:"/en/2016/03/29/centos-6-1-shi-yong-createrepo-da-jian-ben-di-yuan"},nextItem:{title:"\u5728 CentOS \u4e2d\u914d\u7f6e SFTP \u73af\u5883",permalink:"/en/2016/03/24/zai-centos-zhong-pei-zhi-sftp-huan-jing"}},g={authorsImageUrls:[]},a=[{value:"1. Overiew",id:"1-overiew",level:2},{value:"2. Packages",id:"2-packages",level:2},{value:"3. \u6dfb\u52a0\u76f8\u5bf9\u5e94\u7248\u672c\u7684 Mongodb repo file",id:"3-\u6dfb\u52a0\u76f8\u5bf9\u5e94\u7248\u672c\u7684-mongodb-repo-file",level:2},{value:"3.1 Mongodb 2.6 + OS x64",id:"31-mongodb-26--os-x64",level:3},{value:"3.2 Mongodb 2.6 + OS i686",id:"32-mongodb-26--os-i686",level:3},{value:"3.3 Mongodb 3.2  + OS x64",id:"33-mongodb-32---os-x64",level:3},{value:"3.4 Mongodb 3.2  + OS i686",id:"34-mongodb-32---os-i686",level:3},{value:"4. Install MongoDB",id:"4-install-mongodb",level:2},{value:"5. Run MongoDB",id:"5-run-mongodb",level:2},{value:"5.1 \u914d\u7f6e SELinux",id:"51-\u914d\u7f6e-selinux",level:3},{value:"5.2 Start MongoDB",id:"52-start-mongodb",level:3},{value:"5.3 \u68c0\u67e5 MongoDB \u65e5\u5fd7\u6587\u4ef6\u9a8c\u8bc1\u670d\u52a1\u6b63\u5e38\u542f\u52a8\uff0c /var/log/mongodb/mongodb.log",id:"53-\u68c0\u67e5-mongodb-\u65e5\u5fd7\u6587\u4ef6\u9a8c\u8bc1\u670d\u52a1\u6b63\u5e38\u542f\u52a8-varlogmongodbmongodblog",level:3},{value:"5.4 \u8bbe\u7f6e MongoDB \u5f00\u673a\u81ea\u542f\u52a8",id:"54-\u8bbe\u7f6e-mongodb-\u5f00\u673a\u81ea\u542f\u52a8",level:3},{value:"5.5 \u8bbe\u7f6e MongoDB \u5141\u8bb8\u5176\u4ed6\u670d\u52a1\u5668\u8bbf\u95ee",id:"55-\u8bbe\u7f6e-mongodb-\u5141\u8bb8\u5176\u4ed6\u670d\u52a1\u5668\u8bbf\u95ee",level:3},{value:"6. Use MongoDB",id:"6-use-mongodb",level:2},{value:"6.1 \u68c0\u67e5 mongodb \u72b6\u6001",id:"61-\u68c0\u67e5-mongodb-\u72b6\u6001",level:3},{value:"6.2 mongodb \u81ea\u5e26\u68c0\u6d4b\u5de5\u5177",id:"62-mongodb-\u81ea\u5e26\u68c0\u6d4b\u5de5\u5177",level:3},{value:"6.3 \u8fdb\u5165 mongodb \u547d\u4ee4\u884c\u6a21\u5f0f",id:"63-\u8fdb\u5165-mongodb-\u547d\u4ee4\u884c\u6a21\u5f0f",level:3},{value:"7. Uninstall MongoDB",id:"7-uninstall-mongodb",level:2},{value:"7.1 \u5173\u95ed mongodb",id:"71-\u5173\u95ed-mongodb",level:3},{value:"7.2 \u5378\u8f7d mongodb \u8f6f\u4ef6\u5305",id:"72-\u5378\u8f7d-mongodb-\u8f6f\u4ef6\u5305",level:3},{value:"7.3 \u5220\u9664 mongodb \u6587\u4ef6\uff1a\u6570\u636e\u5e93\u6587\u4ef6\u548c\u65e5\u5fd7\u6587\u4ef6",id:"73-\u5220\u9664-mongodb-\u6587\u4ef6\u6570\u636e\u5e93\u6587\u4ef6\u548c\u65e5\u5fd7\u6587\u4ef6",level:3},{value:"8. FAQ",id:"8-faq",level:2}];function t(n){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.M)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.h2,{id:"1-overiew",children:"1. Overiew"}),"\n",(0,d.jsx)(o.p,{children:"\u5728 CentOS Linux \u4e2d\u5b89\u88c5\u8f6f\u4ef6\u7684\u65b9\u5f0f\u6709\u5f88\u591a\u79cd\uff0c\u6211\u4f1a\u5728\u540e\u7eed\u7684\u6587\u7ae0\u4e2d\u6574\u7406\u7ed9\u5927\u5bb6\uff0c\u6211\u6bd4\u8f83\u559c\u6b22\u7684\u65b9\u5f0f\u662f\u5c3d\u91cf\u7528 Yum \u5b89\u88c5\uff0c\u4e0d\u7528\u81ea\u5df1\u52a8\u624b\u53bb\u89e3\u51b3\u8f6f\u4ef6\u5305\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u201c\u80fd Yum \u5c31 Yum\uff0c\u4e0d\u80fd Yum \u60f3\u7740\u6cd5 Yum\u3002\u201d  -- \u8fd9\u662f\u6211\u9075\u5faa\u7684\u771f\u7406\uff1b\u4eca\u5929\u7ed9\u5927\u5bb6\u6574\u7406\u7684\u5c31\u662f\u5982\u4f55\u4f7f\u7528 Yum \u6765\u5b89\u88c5 Mongodb\uff0c\u5728\u672c\u6587\u4e2d\u4f1a\u7ed9\u51fa\u5728 32 \u4f4d\u4e0e 64 \u4f4d\u7cfb\u7edf\u7684\u533a\u522b\uff0c\u4ee5\u53ca Mongodb \u7684\u7248\u672c\uff0c\u672c\u6587\u9002\u7528\u4e8e CentOS 6/7 \u7684 Linux \u53d1\u884c\u7248\u672c\uff0c\u6240\u4ee5\u540c\u6837\u9002\u7528\u4e8e\u7ea2\u5e3d\u4f53\u7cfb\u7684 OS\uff0c\u5982 RedHat Enterprise Linux 6/7\u3001Fedora\u3002"}),"\n",(0,d.jsx)(o.h2,{id:"2-packages",children:"2. Packages"}),"\n",(0,d.jsx)(o.p,{children:"\u4e1a\u5185\u5e38\u7528\u7684 Mongodb \u7684 Yum \u4ed3\u5e93\u6709 Mongodb-org \u4e0e Mongodb-10gen ,\u8fd9\u91cc\u63d0\u4f9b\u7684 Mongodb-org \u7684 repository \u4ed3\u5e93\uff0c\u652f\u6301\u4ee5\u4e0b\u8f6f\u4ef6\u5305\u5217\u8868\uff1a"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["\n",(0,d.jsx)(o.p,{children:"2.1 mongodb-org"}),"\n",(0,d.jsx)(o.p,{children:"\u8fd9\u4e2a\u662f\u6e90\u6570\u636e\u5305\uff0c\u4e3b\u8981\u662f\u7528\u6765\u7ec4\u7ec7\u81ea\u52a8\u5b89\u88c5\u4e0b\u9762\u7684 4 \u4e2a\u8f6f\u4ef6\u5305\u3002"}),"\n"]}),"\n",(0,d.jsxs)(o.li,{children:["\n",(0,d.jsx)(o.p,{children:"2.2 mongodb-org-sever"}),"\n",(0,d.jsx)(o.p,{children:"\u8fd9\u4e2a Mongodb Server \u7aef\uff0c\u5305\u542b\u4e86\u76f8\u5173\u7684\u914d\u7f6e\u548c\u521d\u59cb\u5316\u811a\u672c\u3002"}),"\n"]}),"\n",(0,d.jsxs)(o.li,{children:["\n",(0,d.jsx)(o.p,{children:"2.3 mongodb-org-mongos"}),"\n",(0,d.jsx)(o.p,{children:"\u8fd9\u4e2a\u662f Mongodb \u7684\u5b88\u62a4\u8fdb\u7a0b\u3002"}),"\n"]}),"\n",(0,d.jsxs)(o.li,{children:["\n",(0,d.jsx)(o.p,{children:"2.4 mongodb-org-shell"}),"\n",(0,d.jsx)(o.p,{children:"\u8fd9\u4e2a\u662f mongodb \u7684 shell \u73af\u5883\u3002"}),"\n"]}),"\n",(0,d.jsxs)(o.li,{children:["\n",(0,d.jsx)(o.p,{children:"2.5 mongodb-org-tools"}),"\n",(0,d.jsx)(o.p,{children:"\u8fd9\u4e2a\u5305\u91cc\u5305\u542b\u4e86\u4e0b\u5217 mongodb \u7684\u5de5\u5177\uff1amongoimport bsondump, mongodump, mongoexport, mongofiles, mongooplog, mongoperf, mongorestore, mongostat, and mongotop\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(o.h2,{id:"3-\u6dfb\u52a0\u76f8\u5bf9\u5e94\u7248\u672c\u7684-mongodb-repo-file",children:"3. \u6dfb\u52a0\u76f8\u5bf9\u5e94\u7248\u672c\u7684 Mongodb repo file"}),"\n",(0,d.jsx)(o.h3,{id:"31-mongodb-26--os-x64",children:"3.1 Mongodb 2.6 + OS x64"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# vim /etc/yum.repos.d/mongodb-org-2.6.repo\n\n[mongodb-org-2.6]\nname=MongoDB 2.6 Repository\nbaseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/\ngpgcheck=0\nenabled=1\n\n"})}),"\n",(0,d.jsx)(o.h3,{id:"32-mongodb-26--os-i686",children:"3.2 Mongodb 2.6 + OS i686"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# vim /etc/yum.repos.d/mongodb-org-2.6.repo\n\n[mongodb-org-2.6]\nname=MongoDB 2.6 Repository\nbaseurl=http://downloads-distro.mongodb.org/repo/redhat/os/i686/\ngpgcheck=0\nenabled=1\n\n"})}),"\n",(0,d.jsx)(o.h3,{id:"33-mongodb-32---os-x64",children:"3.3 Mongodb 3.2  + OS x64"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# vim /etc/yum.repos.d/mongodb-org-3.2.repo\n\n[mongodb-org-3.2]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.2/x86_64/\ngpgcheck=0\nenabled=1\n\n"})}),"\n",(0,d.jsx)(o.h3,{id:"34-mongodb-32---os-i686",children:"3.4 Mongodb 3.2  + OS i686"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# vim /etc/yum.repos.d/mongodb-org-3.2.repo\n\n[mongodb-org-3.2]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.2/i686/\ngpgcheck=0\nenabled=1\n\n"})}),"\n",(0,d.jsx)(o.h2,{id:"4-install-mongodb",children:"4. Install MongoDB"}),"\n",(0,d.jsx)(o.p,{children:"\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Mongodb\uff0c\u5b89\u88c5\u90fd\u65b9\u5f0f\u4e00\u6837\uff0c\u8bf7\u6ce8\u610f\u5b89\u88c5\u76f8\u5bf9\u5e94\u7684\u6e90\u4fdd\u8bc1\u6b63\u786e\u5b89\u88c5 Mongodb\uff0c\u8bf7\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# yum clean all\n[root@vm02 ~]# yum makecache\n[root@vm02 ~]# yum install mongodb-org\n\n"})}),"\n",(0,d.jsx)(o.h2,{id:"5-run-mongodb",children:"5. Run MongoDB"}),"\n",(0,d.jsx)(o.h3,{id:"51-\u914d\u7f6e-selinux",children:"5.1 \u914d\u7f6e SELinux"}),"\n",(0,d.jsx)(o.p,{children:"SELinux \u9ed8\u8ba4\u4e3a\u5f00\u542f\u72b6\u6001\uff0c\u4f1a\u5bfc\u81f4\u6211\u4eec\u7684 Mongodb \u65e0\u6cd5\u4f7f\u7528\uff0c\u89e3\u51b3\u65b9\u5f0f\u6709\u4e24\u79cd\uff1a"}),"\n",(0,d.jsxs)(o.ol,{children:["\n",(0,d.jsx)(o.li,{children:(0,d.jsx)(o.a,{href:"http://blog.ultraera.org/centos6-x-base-settings/",children:"\u5173\u95ed SELinux"})}),"\n",(0,d.jsx)(o.li,{children:"\u6dfb\u52a0 Mongodb \u901a\u8fc7 SELinux \u8bbe\u5b9a\uff0c\u6307\u4ee4\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"semanage port -a -t mongod_port_t -p tcp 27017\n\n"})}),"\n",(0,d.jsxs)(o.blockquote,{children:["\n",(0,d.jsx)(o.p,{children:"Tips: \u5728 CentOS 7\uff0cSELinux \u4f1a\u9650\u5b9a\u4f60\u53bb\u4fee\u6539 Mongodb \u7684 data \u76ee\u5f55\u53ca lib \u76ee\u5f55\u3002"}),"\n"]}),"\n",(0,d.jsx)(o.h3,{id:"52-start-mongodb",children:"5.2 Start MongoDB"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# sudo service mongod start\nStarting mongod:                                           [  OK  ]\n[root@vm02 ~]#\n\n"})}),"\n",(0,d.jsx)(o.h3,{id:"53-\u68c0\u67e5-mongodb-\u65e5\u5fd7\u6587\u4ef6\u9a8c\u8bc1\u670d\u52a1\u6b63\u5e38\u542f\u52a8-varlogmongodbmongodblog",children:"5.3 \u68c0\u67e5 MongoDB \u65e5\u5fd7\u6587\u4ef6\u9a8c\u8bc1\u670d\u52a1\u6b63\u5e38\u542f\u52a8\uff0c /var/log/mongodb/mongodb.log"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# cat /var/log/mongodb/mongod.log  # \u770b\u5230\u5982\u4e0b\u5185\u5bb9\u8868\u793amongodb\u542f\u52a8\u6210\u529f\u4e86\u3002\n2016-03-24T04:09:28.582+0800 I NETWORK  [initandlisten] waiting for connections on port 27017\n\n"})}),"\n",(0,d.jsx)(o.h3,{id:"54-\u8bbe\u7f6e-mongodb-\u5f00\u673a\u81ea\u542f\u52a8",children:"5.4 \u8bbe\u7f6e MongoDB \u5f00\u673a\u81ea\u542f\u52a8"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# chkconfig mongod on\n\n"})}),"\n",(0,d.jsx)(o.h3,{id:"55-\u8bbe\u7f6e-mongodb-\u5141\u8bb8\u5176\u4ed6\u670d\u52a1\u5668\u8bbf\u95ee",children:"5.5 \u8bbe\u7f6e MongoDB \u5141\u8bb8\u5176\u4ed6\u670d\u52a1\u5668\u8bbf\u95ee"}),"\n",(0,d.jsx)(o.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cmongodb \u53ea\u76d1\u542c 127.0.0.1\uff0c\u4f46\u662f\u5b9e\u9645\u751f\u4ea7\u73af\u5883\u4e2d\u53ef\u80fd\u9700\u8981\u5176\u4ed6\u670d\u52a1\u5668\u8bbf\u95ee\uff0c\u6240\u4ee5\u8fd9\u91cc\u6dfb\u52a0\u76d1\u542c\u5176\u4ed6\u7f51\u7edc\u7aef\u53e3\uff0c\u4fee\u6539 mongodb \u7684\u914d\u7f6e\u6587\u4ef6\uff1a/etc/mongodb.conf"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# vim /etc/mongodb.conf\n\n# line 29 \u589e\u52a0\u4e00\u884c\uff1a\n    bindIp: 172.16.102.129\n\n# \u6ce8\u610f\u4e0d\u8981\u628a1270.0.1 \u53bb\u9664\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u672c\u5730\u65e0\u6cd5\u4f7f\u7528MongoDB .\n\n"})}),"\n",(0,d.jsx)(o.h2,{id:"6-use-mongodb",children:"6. Use MongoDB"}),"\n",(0,d.jsx)(o.h3,{id:"61-\u68c0\u67e5-mongodb-\u72b6\u6001",children:"6.1 \u68c0\u67e5 mongodb \u72b6\u6001"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# service mongod status\nmongod (pid 6502) is running...\n[root@vm02 ~]#\n\n"})}),"\n",(0,d.jsx)(o.h3,{id:"62-mongodb-\u81ea\u5e26\u68c0\u6d4b\u5de5\u5177",children:"6.2 mongodb \u81ea\u5e26\u68c0\u6d4b\u5de5\u5177"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# mongostat\ninsert query update delete getmore command % dirty % used flushes  vsize   res qr|qw ar|aw netIn netOut conn                      time\n    *0    *0     *0     *0       0     1|0     0.0    0.0       0 388.0M 68.0M   0|0   0|0   79b    18k    1 2016-03-24T04:25:09+08:00\n    *0    *0     *0     *0       0     1|0     0.0    0.0       0 388.0M 68.0M   0|0   0|0   79b    18k    1 2016-03-24T04:25:10+08:00\n    *0    *0     *0     *0       0     1|0     0.0    0.0       0 388.0M 68.0M   0|0   0|0   79b    18k    1 2016-03-24T04:25:11+08:00\n\n"})}),"\n",(0,d.jsx)(o.h3,{id:"63-\u8fdb\u5165-mongodb-\u547d\u4ee4\u884c\u6a21\u5f0f",children:"6.3 \u8fdb\u5165 mongodb \u547d\u4ee4\u884c\u6a21\u5f0f"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# mongo\nMongoDB shell version: 3.2.4\nconnecting to: test\nServer has startup warnings:\n2016-03-24T04:09:28.577+0800 I CONTROL  [initandlisten]\n2016-03-24T04:09:28.577+0800 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/enabled is 'always'.\n2016-03-24T04:09:28.577+0800 I CONTROL  [initandlisten] **        We suggest setting it to 'never'\n2016-03-24T04:09:28.577+0800 I CONTROL  [initandlisten]\n2016-03-24T04:09:28.577+0800 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/defrag is 'always'.\n2016-03-24T04:09:28.577+0800 I CONTROL  [initandlisten] **        We suggest setting it to 'never'\n2016-03-24T04:09:28.577+0800 I CONTROL  [initandlisten]\n2016-03-24T04:09:28.577+0800 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. rlimits set to 1024 processes, 64000 files. Number of processes should be at least 32000 : 0.5 times number of files.\n2016-03-24T04:09:28.577+0800 I CONTROL  [initandlisten]\n>\n\n"})}),"\n",(0,d.jsx)(o.h2,{id:"7-uninstall-mongodb",children:"7. Uninstall MongoDB"}),"\n",(0,d.jsx)(o.h3,{id:"71-\u5173\u95ed-mongodb",children:"7.1 \u5173\u95ed mongodb"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# service mongod stop\n\n"})}),"\n",(0,d.jsx)(o.h3,{id:"72-\u5378\u8f7d-mongodb-\u8f6f\u4ef6\u5305",children:"7.2 \u5378\u8f7d mongodb \u8f6f\u4ef6\u5305"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# yum erase $(rpm -qa | grep mongodb-org)\n\n"})}),"\n",(0,d.jsx)(o.h3,{id:"73-\u5220\u9664-mongodb-\u6587\u4ef6\u6570\u636e\u5e93\u6587\u4ef6\u548c\u65e5\u5fd7\u6587\u4ef6",children:"7.3 \u5220\u9664 mongodb \u6587\u4ef6\uff1a\u6570\u636e\u5e93\u6587\u4ef6\u548c\u65e5\u5fd7\u6587\u4ef6"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"[root@vm02 ~]# rm -rf /var/log/mongodb\n[root@vm02 ~]# rm -rf /var/lib/mongo\n\n"})}),"\n",(0,d.jsx)(o.h2,{id:"8-faq",children:"8. FAQ"}),"\n",(0,d.jsx)(o.p,{children:"Q : Mongodb \u5360\u7528 99%CPU \u5e76\u4e14\u67e5\u8be2\u901f\u5ea6\u5f88\u6162\uff1f"}),"\n",(0,d.jsx)(o.p,{children:"A : \u6570\u636e\u5e93\u9700\u8981\u9996\u5148\u5efa\u7acb\u7d22\u5f15\uff0c\u7c7b\u4f3c\u56fe\u4e66\u7684\u76ee\u5f55\u6587\u4ef6\uff0c\u5426\u5219\u5f53\u4f60\u5728\u6570\u636e\u5e93\u5185\u67e5\u627e\u6570\u636e\u7684\u65f6\u5019\uff0c\u5c31\u7c7b\u4f3c\u4e8e\u5728\u6574\u672c\u5b57\u5178\u4e00\u9875\u9875\u7ffb\u67e5\u4e00\u4e2a\u5b57\u5982\u6b64\u3002"})]})}function m(n={}){const{wrapper:o}={...(0,l.M)(),...n.components};return o?(0,d.jsx)(o,{...n,children:(0,d.jsx)(t,{...n})}):t(n)}},4552:(n,o,e)=>{e.d(o,{I:()=>i,M:()=>r});var d=e(11504);const l={},s=d.createContext(l);function r(n){const o=d.useContext(s);return d.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function i(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),d.createElement(s.Provider,{value:o},n.children)}}}]);