"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[50332],{39489:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=e(85893),o=e(11151);const a={title:"HowTo Install CloudStack 4.8 on CentOS 6.x",tags:["CloudStack"],date:new Date("2016-05-18T02:38:59.000Z")},c=void 0,r={permalink:"/2016/05/18/HowTo-Install-CloudStack-4-8-on-CentOS-6-x",source:"@site/blog/2016-05-18-HowTo-Install-CloudStack-4-8-on-CentOS-6-x.md",title:"HowTo Install CloudStack 4.8 on CentOS 6.x",description:"",date:"2016-05-18T02:38:59.000Z",formattedDate:"May 18, 2016",tags:[{label:"CloudStack",permalink:"/tags/cloud-stack"}],readingTime:1.885,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Install CloudStack 4.8 on CentOS 6.x",tags:["CloudStack"],date:"2016-05-18T02:38:59.000Z"},unlisted:!1,prevItem:{title:"OpenStak \u4ecb\u7ecd",permalink:"/2016/05/15/openstak-jie-shao"},nextItem:{title:"HowTo Monitoring MySQL server for Zabbix",permalink:"/2016/05/20/HowTo-Monitoring-MySQL-server-for-Zabbix"}},i={authorsImageUrls:[]},l=[];function p(t){const n={code:"code",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\n# Install  CloudStack.sh\n\n# setting static ip in : /etc/sysconfig/network-scripts/ifcfg-eth0\n\n# Check Service\n\n# Install\n\n# hostname --fqdn\n\n# service network restart\n\n# trun off selinux in : /etc/selinux/config\n#SELinux=disabed\n\n# trun off iptables.\nservice iptables stop\nservice ip6tables stop\n\nchkconfig iptables off\nchkconfig ip6tables off\n\n#NTP\nyum install -y ntp\nchkconfig ntpd on\nservice ntpd start\n\n# adding cloudstack repos\n[cloudstack]\nname=cloudstack\nbaseurl=http://cloudstack.apt-get.eu/centos/6/4.5/\nenabled=1\ngpgcheck=0\n\n#NFS\nyum install -y nfs-utils\n\n# /etc/exports\n/secondary *(rw,async,no_root_squash,no_subtree_check)\n/primary *(rw,async,no_root_squash,no_subtree_check)\n# add top to /etc/sysconfig/nfs\nLOCKD_TCPPORT=32803\nLOCKD_UDPPORT=32769\nMOUNTD_PORT=892\nRQUOTAD_PORT=875\nSTATD_PORT=662\nSTATD_OUTGOING_PORT=2020\n# add iptable rules to /etc/sysconfig/iptables\n-A INPUT -s 172.16.10.0/24 -m state --state NEW -p udp --dport 111 -j ACCEPT\n-A INPUT -s 172.16.10.0/24 -m state --state NEW -p tcp --dport 111 -j ACCEPT\n-A INPUT -s 172.16.10.0/24 -m state --state NEW -p tcp --dport 2049 -j ACCEPT\n-A INPUT -s 172.16.10.0/24 -m state --state NEW -p tcp --dport 32803 -j ACCEPT\n-A INPUT -s 172.16.10.0/24 -m state --state NEW -p udp --dport 32769 -j ACCEPT\n-A INPUT -s 172.16.10.0/24 -m state --state NEW -p tcp --dport 892 -j ACCEPT\n-A INPUT -s 172.16.10.0/24 -m state --state NEW -p udp --dport 892 -j ACCEPT\n-A INPUT -s 172.16.10.0/24 -m state --state NEW -p tcp --dport 875 -j ACCEPT\n-A INPUT -s 172.16.10.0/24 -m state --state NEW -p udp --dport 875 -j ACCEPT\n-A INPUT -s 172.16.10.0/24 -m state --state NEW -p tcp --dport 662 -j ACCEPT\n-A INPUT -s 172.16.10.0/24 -m state --state NEW -p udp --dport 662 -j ACCEPT\n# service iptables restart\nservice rpcbind start\nservice nfs start\nchkconfig rpcbind on\nchkconfig nfs on\n\n# MySQL server\nyum install -y mysql-server\n# adding configure file in /etc/my.cnf : [mysqld]\ninnodb_rollback_on_timeout=1\ninnodb_lock_wait_timeout=600\nmax_connections=350\nlog-bin=mysql-bin\nbinlog-format = \'ROW\'\n\nservice mysqld start\nchkconfig mysqld on\nmysql_secure_installation  # remeber the root pass.\n\n# Cloudstack-management\nyum -y install cloudstack-management\ncloudstack-setup-databases cloud:[password]@localhost --deploy-as=root:[password]\ncloudstack-setup-management\n\n#System Template Setup\n/usr/share/cloudstack-common/scripts/storage/secondary/cloud-install-sys-tmplt -m /secondary -u http://cloudstack.apt-get.eu/systemvm/4.6/systemvm64template-4.6.0-kvm.qcow2.bz2 -h kvm -F\n\n\n# Install kvm\nyum -y install cloudstack-agent\n\n# qemu configuration : /etc/libvirt/qemu.conf\nvnc_listen=0.0.0.0\n# Libvirt Configuration : /etc/libvirt/libvirtd.conf\nlisten_tls = 0\nlisten_tcp = 1\ntcp_port = "16059"\nauth_tcp = "none"\nmdns_adv = 0\n#  /etc/sysconfig/libvirtd\nLIBVIRTD_ARGS="--listen"\n\nservice libvirtd restart\n\nlsmod | grep kvm:\nkvm_intel              55496  0\nkvm                   337772  1 kvm_intel\n\n\n##### UI Setting ####\nhttp://[ip]:8080/client\n\n\n'})})}function d(t={}){const{wrapper:n}={...(0,o.a)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(p,{...t})}):p(t)}},11151:(t,n,e)=>{e.d(n,{Z:()=>r,a:()=>c});var s=e(67294);const o={},a=s.createContext(o);function c(t){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:c(t.components),s.createElement(a.Provider,{value:n},t.children)}}}]);