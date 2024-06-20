"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[30720],{90553:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var s=r(17624),a=r(4552);const o={title:"HowTo Setup MariaDB Galera Cluster 10 On CentOS 6.x",tags:["MariaDB"],date:new Date("2016-08-04T13:14:15.000Z")},l=void 0,t={permalink:"/2016/08/04/HowTo-Setup-MariaDB-Galera-Cluster-10-On-CentOS-6-x",source:"@site/blog/2016-08-04-HowTo-Setup-MariaDB-Galera-Cluster-10-On-CentOS-6-x.md",title:"HowTo Setup MariaDB Galera Cluster 10 On CentOS 6.x",description:"\u4ecb\u7ecd",date:"2016-08-04T13:14:15.000Z",formattedDate:"August 4, 2016",tags:[{label:"MariaDB",permalink:"/tags/maria-db"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Setup MariaDB Galera Cluster 10 On CentOS 6.x",tags:["MariaDB"],date:"2016-08-04T13:14:15.000Z"},unlisted:!1,prevItem:{title:"Use Script Install LNMP",permalink:"/2016/08/13/Script-Install-LNMP"},nextItem:{title:"HowTo Install Openfire  on CentOS",permalink:"/2016/08/02/HowTo-Install-Openfire-on-CentOS"}},i={authorsImageUrls:[]},d=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u5b9e\u9a8c\u73af\u5883",id:"\u5b9e\u9a8c\u73af\u5883",level:2},{value:"\u73af\u5883\u68c0\u6d4b",id:"\u73af\u5883\u68c0\u6d4b",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"1. \u5728\u6240\u6709\u8282\u70b9\u7f16\u8f91/etc/hosts",id:"1-\u5728\u6240\u6709\u8282\u70b9\u7f16\u8f91etchosts",level:3},{value:"2. \u5728\u6240\u6709 node \u4e0a\u5b89\u88c5 MariaDB Galera",id:"2-\u5728\u6240\u6709-node-\u4e0a\u5b89\u88c5-mariadb-galera",level:3},{value:"3. \u5728\u5176\u4e2d\u4e00\u4e2a\u8282\u70b9\u4e0a\u7f16\u8f91/etc/my.cnf.d/server.cnf \u914d\u7f6e\u6587\u4ef6",id:"3-\u5728\u5176\u4e2d\u4e00\u4e2a\u8282\u70b9\u4e0a\u7f16\u8f91etcmycnfdservercnf-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"4. \u5728\u5176\u5b83\u8282\u70b9\u4e0a\u7f16\u8f91/etc/my.cnf.d/server.cnf \u914d\u7f6e\u6587\u4ef6",id:"4-\u5728\u5176\u5b83\u8282\u70b9\u4e0a\u7f16\u8f91etcmycnfdservercnf-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"node5",id:"node5",level:3},{value:"node6",id:"node6",level:3},{value:"\u767b\u9646\u5404\u4e2a\u8282\u70b9\u6570\u636e\u5e93\u68c0\u67e5\u914d\u7f6e\u662f\u5426\u6210\u529f",id:"\u767b\u9646\u5404\u4e2a\u8282\u70b9\u6570\u636e\u5e93\u68c0\u67e5\u914d\u7f6e\u662f\u5426\u6210\u529f",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.p,{children:"MariaDB Galera Cluster \u662f\u4e00\u5957\u5728 MySQL InnoDB \u5b58\u50a8\u5f15\u64ce\u4e0a\u9762\u5b9e\u73b0 multi-master \u53ca\u6570\u636e\u5b9e\u65f6\u540c\u6b65\u7684\u7cfb\u7edf\u67b6\u6784\uff0c\u4e1a\u52a1\u5c42\u9762\u65e0\u9700\u505a\u8bfb\u5199\u5206\u79bb\u5de5\u4f5c\uff0c\u6570\u636e\u5e93\u8bfb\u5199\u538b\u529b\u90fd\u80fd\u6309\u7167\u65e2\u5b9a\u7684\u89c4\u5219\u5206\u53d1\u5230 \u5404\u4e2a\u8282\u70b9\u4e0a\u53bb\u3002\u5728\u6570\u636e\u65b9\u9762\u5b8c\u5168\u517c\u5bb9 MariaDB \u548c MySQL\u3002\u4f7f\u7528 MariaDB Galera \u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5feb\u901f\u7684\u642d\u5efa\u51fa\u9ad8\u53ef\u7528\u7684\u6570\u636e\u5e93 Cluster\uff0c\u4e0d\u662f\u4e3b\u5907\u6a21\u5f0f\uff0c\u800c\u662f\u53cc\u6d3b\u6a21\u5f0f\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u6ca1\u6709\u4e3b\u8282\u70b9\u548c\u5907\u4efd\u8282\u70b9\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u53ef\u4ee5\u770b\u505a\u662f\u4e3b\u8282\u70b9\uff0c\u90fd\u53ef\u4ee5\u8fdb\u884c\u8bfb\u5199\uff0c\u7531 Galera \u6765\u5b9e\u73b0\u5e95\u5c42\u7684\u6570\u636e\u540c\u6b65\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u771f\u6b63\u7684\u591a\u4e3b\u67b6\u6784\uff0c\u4efb\u4f55\u8282\u70b9\u90fd\u53ef\u4ee5\u8fdb\u884c\u8bfb\u5199"}),"\n",(0,s.jsx)(n.li,{children:"\u540c\u6b65\u590d\u5236\uff0c\u5404\u8282\u70b9\u95f4\u65e0\u5ef6\u8fdf\u4e14\u8282\u70b9\u5b95\u673a\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u4e22\u5931"}),"\n",(0,s.jsx)(n.li,{children:"\u7d27\u5bc6\u8026\u5408\uff0c\u6240\u6709\u8282\u70b9\u5747\u4fdd\u6301\u76f8\u540c\u72b6\u6001"}),"\n",(0,s.jsx)(n.li,{children:"\u81ea\u52a8\u8282\u70b9\u914d\u7f6e\uff0c\u65e0\u9700\u624b\u5de5\u5907\u4efd\u5f53\u524d\u6570\u636e\u5e93\u5e76\u62f7\u8d1d\u81f3\u65b0\u8282\u70b9"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b9e\u9a8c\u73af\u5883",children:"\u5b9e\u9a8c\u73af\u5883"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cluster node4 IP address 172.16.102.168"}),"\n",(0,s.jsx)(n.li,{children:"Cluster node5 IP address 172.16.102.165"}),"\n",(0,s.jsx)(n.li,{children:"Cluster node6 IP address 172.16.102.164"}),"\n",(0,s.jsx)(n.li,{children:"setenforce 0. sed -i 's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config"}),"\n",(0,s.jsx)(n.li,{children:"/etc/init.d/iptables stop;chkconfig iptables off"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 vmware \u6d4b\u8bd5\u9700\u6ce8\u610f\uff1a\u514b\u9686\u673a\u5668\u9700\u8981\u5220\u9664 ",(0,s.jsx)(n.code,{children:"/etc/udev/rules.d/70-persistent-net.rules"})," \u4ee5\u53ca",(0,s.jsx)(n.code,{children:"/etc/sysconfig/network-scripts/ifcfg-eth0"}),"\u4e2d\u7684\u7f51\u5361 mac \u5730\u5740\u9009\u9879\uff0c\u4e0d\u7136\u7f51\u5361\u8d77\u4e0d\u6765"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u73af\u5883\u68c0\u6d4b",children:"\u73af\u5883\u68c0\u6d4b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u68c0\u67e5 iptables \u72b6\u6001\uff1a/etc/init.d/iptables status;chkconfig --list | grep iptables"}),"\n",(0,s.jsx)(n.li,{children:"\u68c0\u67e5 selinux \u72b6\u6001\uff1agetenforce"}),"\n",(0,s.jsx)(n.li,{children:"\u68c0\u67e5 openssh-client \u5305\u662f\u5426\u5b89\u88c5\uff1a\u7cfb\u7edf\u4e2d\u662f\u5426\u6709 ssh \u547d\u4ee4"}),"\n",(0,s.jsx)(n.li,{children:"\u68c0\u67e5\u662f\u5426\u7cfb\u7edf\u4e2d\u542b\u6709 mysql \u76f8\u5173\u7684\u5305\uff1arpm -qa | grep mysql\uff0c\u6709\u7684\u8bdd\u90fd\u9700\u8981\u5378\u8f7d\u6389"}),"\n",(0,s.jsxs)(n.li,{children:["\u68c0\u67e5\u7f51\u7edc\u662f\u5426\u901a\u7545\uff1a",(0,s.jsx)(n.code,{children:"ping www.baidu.com"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(n.h3,{id:"1-\u5728\u6240\u6709\u8282\u70b9\u7f16\u8f91etchosts",children:"1. \u5728\u6240\u6709\u8282\u70b9\u7f16\u8f91/etc/hosts"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[root@node4 ~]# vi /etc/hosts\n\n127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4\n::1         localhost localhost.localdomain localhost6 localhost6.localdomain6\n\n# add follows\n172.16.102.164 node6\n172.16.102.165 node5\n172.16.102.168 node4\n\n[root@node4 ~]#\n\n# \u4f9d\u6b21\u5728node5\u548cnode6\u4e0a\u7f16\u8f91/etc/hosts\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-\u5728\u6240\u6709-node-\u4e0a\u5b89\u88c5-mariadb-galera",children:"2. \u5728\u6240\u6709 node \u4e0a\u5b89\u88c5 MariaDB Galera"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[root@node4 ~]# vi /etc/yum.repos.d/mariadb.repo\n # MariaDB 10.0 CentOS repository list\n# http://mariadb.org/mariadb/repositories/\n[mariadb]\nname = MariaDB\nbaseurl = http://yum.mariadb.org/10.0/centos6-amd64\ngpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB\ngpgcheck=1\nenabled=0\n\n[root@node4 ~]# yum --enablerepo=mariadb -y install MariaDB-Galera-server\n\n# \u4f9d\u6b21\u5728node5\u548cnode6\u4e0a\u5b89\u88c5 MariaDB-Galera-server\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u4e0d\u8981\u542f\u52a8 mysql"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-\u5728\u5176\u4e2d\u4e00\u4e2a\u8282\u70b9\u4e0a\u7f16\u8f91etcmycnfdservercnf-\u914d\u7f6e\u6587\u4ef6",children:"3. \u5728\u5176\u4e2d\u4e00\u4e2a\u8282\u70b9\u4e0a\u7f16\u8f91/etc/my.cnf.d/server.cnf \u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'[root@node4 ~]# vi /etc/my.cnf.d/server.cnf\n# 19 \u884c\uff0c\u53d6\u6d88\u4e0b\u9762\u7684\u6ce8\u91ca\uff0c\u5e76\u4fee\u6539\u4e3a\u9700\u6c42\n[galera]\nwsrep_provider=/usr/lib64/galera/libgalera_smm.so\n# \u6307\u5b9a\u8282\u70b9\u5730\u5740\uff0c\u8fd9\u91cc\u4e5f\u53ef\u4ee5\u4f7f\u7528ip,\u5982\u679c\u6ca1\u505a\u5b89\u88c51\uff0c\u53ef\u4ee5\u76f4\u63a5\u628acluster\u7684ip\u5199\u5728\u8fd9\u91cc\u3002\nwsrep_cluster_address="gcomm://node4,node5,node6"\nbinlog_format=row\ndefault_storage_engine=InnoDB\ninnodb_autoinc_lock_mode=2\nbind-address=0.0.0.0\n\n# add follows\n# cluster name\nwsrep_cluster_name="Visionet_MariaDB_Cluster"\n# replication provider\nwsrep_sst_method=rsync\n# own IP address\nwsrep_node_address="172.16.102.168"\nwsrep_node_name="node4"\n\n# \u542f\u52a8\u6570\u636e\u5e93\n[root@node4 ~]# /etc/rc.d/init.d/mysql bootstrap\nStarting MySQL. SUCCESS!\n\n# \u521d\u59cb\u5316\u4f60\u7684\u6570\u636e\u5e93\n[root@node4 ~]# mysql_secure_installation\n'})}),"\n",(0,s.jsx)(n.h3,{id:"4-\u5728\u5176\u5b83\u8282\u70b9\u4e0a\u7f16\u8f91etcmycnfdservercnf-\u914d\u7f6e\u6587\u4ef6",children:"4. \u5728\u5176\u5b83\u8282\u70b9\u4e0a\u7f16\u8f91/etc/my.cnf.d/server.cnf \u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[root@node4 ~]# vim /etc/my.cnf.d/server.cnf\n"})}),"\n",(0,s.jsx)(n.h3,{id:"node5",children:"node5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'[root@node5 ~]# vi /etc/my.cnf.d/server.cnf\n# 19 \u884c\uff0c\u53d6\u6d88\u4e0b\u9762\u7684\u6ce8\u91ca\uff0c\u5e76\u4fee\u6539\u4e3a\u9700\u6c42\n[galera]\nwsrep_provider=/usr/lib64/galera/libgalera_smm.so\n# \u6307\u5b9a\u8282\u70b9\u5730\u5740\uff0c\u8fd9\u91cc\u4e5f\u53ef\u4ee5\u4f7f\u7528ip,\u5982\u679c\u6ca1\u505a\u5b89\u88c51\uff0c\u53ef\u4ee5\u76f4\u63a5\u628acluster\u7684ip\u5199\u5728\u8fd9\u91cc\u3002\nwsrep_cluster_address="gcomm://node4,node5,node6"\nbinlog_format=row\ndefault_storage_engine=InnoDB\ninnodb_autoinc_lock_mode=2\nbind-address=0.0.0.0\n\n# add follows\n# cluster name\nwsrep_cluster_name="Visionet_MariaDB_Cluster"\n# replication provider\nwsrep_sst_method=rsync\n\n# \u4ee5\u4e0b\u5185\u5bb9\u6ce8\u610f\uff0c\u6ce8\u610f\u5e94\u8bbe\u7f6e\u4e3a\u5f53\u524d\u670d\u52a1\u5668\u4fe1\u606f\nwsrep_node_address="172.16.102.165"\nwsrep_node_name="node5"\n\n# \u542f\u52a8\u6570\u636e\u5e93\n[root@node5 ~]# /etc/rc.d/init.d/mysql start\nStarting MySQL...SST in progress, setting sleep higher. SUCCESS!\n'})}),"\n",(0,s.jsx)(n.h3,{id:"node6",children:"node6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'[root@node6 ~]# vi /etc/my.cnf.d/server.cnf\n# 19 \u884c\uff0c\u53d6\u6d88\u4e0b\u9762\u7684\u6ce8\u91ca\uff0c\u5e76\u4fee\u6539\u4e3a\u9700\u6c42\n[galera]\nwsrep_provider=/usr/lib64/galera/libgalera_smm.so\n# \u6307\u5b9a\u8282\u70b9\u5730\u5740\uff0c\u8fd9\u91cc\u4e5f\u53ef\u4ee5\u4f7f\u7528ip,\u5982\u679c\u6ca1\u505a\u5b89\u88c51\uff0c\u53ef\u4ee5\u76f4\u63a5\u628acluster\u7684ip\u5199\u5728\u8fd9\u91cc\u3002\nwsrep_cluster_address="gcomm://node4,node5,node6"\nbinlog_format=row\ndefault_storage_engine=InnoDB\ninnodb_autoinc_lock_mode=2\nbind-address=0.0.0.0\n\n# add follows\n# cluster name\nwsrep_cluster_name="Visionet_MariaDB_Cluster"\n# replication provider\nwsrep_sst_method=rsync\n\n# \u4ee5\u4e0b\u5185\u5bb9\u6ce8\u610f\uff0c\u6ce8\u610f\u5e94\u8bbe\u7f6e\u4e3a\u5f53\u524d\u670d\u52a1\u5668\u4fe1\u606f\nwsrep_node_address="172.16.102.164"\nwsrep_node_name="node6"\n\n# \u542f\u52a8\u6570\u636e\u5e93\n[root@node6 ~]# /etc/rc.d/init.d/mysql start\nStarting MySQL...SST in progress, setting sleep higher. SUCCESS!\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u53ea\u9700\u8981\u521d\u59cb\u5316\u7b2c\u4e00\u4e2a\u8282\u70b9\u670d\u52a1\u5668\u7684\u6570\u636e\u5e93\uff0c\u5176\u4ed6\u6570\u636e\u7684\u914d\u7f6e\u6587\u4ef6\u4f1a\u81ea\u52a8\u540c\u6b65\uff0c\u6240\u4ee5\u4f60\u7ed9 node4 \u8bbe\u7f6e\u7684 root \u53ef\u4ee5\u5728 node5 \u548c node6 \u76f4\u63a5\u4f7f\u7528\uff0c\u5f53\u7136\u8fd9\u662f\u5b89\u88c5\u6b63\u786e\u7684\u524d\u63d0\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u767b\u9646\u5404\u4e2a\u8282\u70b9\u6570\u636e\u5e93\u68c0\u67e5\u914d\u7f6e\u662f\u5426\u6210\u529f",children:"\u767b\u9646\u5404\u4e2a\u8282\u70b9\u6570\u636e\u5e93\u68c0\u67e5\u914d\u7f6e\u662f\u5426\u6210\u529f"}),"\n",(0,s.jsx)(n.p,{children:"server.cnf \u7684\u914d\u7f6e\u5982\u679c\u6ca1\u6709\u95ee\u9898\uff0c\u90a3\u4e48 wsrep_local_state_comment \u7684\u72b6\u6001\u5e94\u8be5\u662f Synced\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[root@node4 ~]# mysql -u root -p\nEnter password:\nWelcome to the MariaDB monitor.  Commands end with ; or \\g.\nYour MariaDB connection id is 15\nServer version: 10.0.26-MariaDB-wsrep MariaDB Server, wsrep_25.13.raf7f02e\n\nCopyright (c) 2000, 2016, Oracle, MariaDB Corporation Ab and others.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nMariaDB [(none)]> show status like 'wsrep_local_state_comment';\n+---------------------------+--------+\n| Variable_name             | Value  |\n+---------------------------+--------+\n| wsrep_local_state_comment | Synced |\n+---------------------------+--------+\n1 row in set (0.01 sec)\n\nMariaDB [(none)]>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,s.jsx)(n.p,{children:"MariaDB Galera \u6ca1\u6709\u4e3b\u8282\u70b9\u548c\u5907\u4efd\u8282\u70b9\uff0c\u914d\u7f6e\u6210\u529f\u4e4b\u540e\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u4e00\u4e2a node \u8282\u70b9\u4e0a\u64cd\u4f5c\u4f1a\u81ea\u52a8\u540c\u6b65\u5230\u5176\u4ed6\u8282\u70b9\uff0c\u4efb\u4f55\u4e00\u4e2a\u8282\u70b9\u5b95\u673a\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6\u8282\u70b9\u7684\u6570\u636e\u548c\u7a33\u5b9a\u6027\uff0c\u914d\u7f6e HAProxy \u8bbe\u7f6e VIP \u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\uff0c\u63d0\u9ad8\u670d\u52a1\u7684\u9ad8\u53ef\u7528\u6027\uff0c\u53e6\u5916\uff0c\u5f53\u5b95\u673a\u8282\u70b9\u4e0a\u7ebf\u4e4b\u540e\uff0c\u4e8b\u52a1\u4f1a\u81ea\u52a8\u540c\u6b65\u4e0d\u4e22\u5931\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>t,M:()=>l});var s=r(11504);const a={},o=s.createContext(a);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);