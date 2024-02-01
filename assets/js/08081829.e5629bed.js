"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[68499],{82540:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var l=t(85893),r=t(11151);const i={title:"Use Script Install LNMP",tags:["Linux"],date:new Date("2016-08-13T06:12:43.000Z")},c=void 0,s={permalink:"/2016/08/13/Script-Install-LNMP",source:"@site/blog/2016-08-13-Script-Install-LNMP.md",title:"Use Script Install LNMP",description:"",date:"2016-08-13T06:12:43.000Z",formattedDate:"August 13, 2016",tags:[{label:"Linux",permalink:"/tags/linux"}],readingTime:1.855,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Use Script Install LNMP",tags:["Linux"],date:"2016-08-13T06:12:43.000Z"},unlisted:!1,prevItem:{title:"HowTo Setup MariaDB Galera Cluster 10 On CentOS 6.x",permalink:"/2016/08/04/HowTo-Setup-MariaDB-Galera-Cluster-10-On-CentOS-6-x"},nextItem:{title:"\u4e8c\u5341\u56db\u5c81",permalink:"/2016/08/19/er-shi-si-sui"}},o={authorsImageUrls:[]},a=[];function p(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'#!/bin/bash\n\n#\n\nif [[ $1 == "uninstall" ]];then\n echo "starting backup data..."\n mkdir -p /www/backup\n service mysqld stop\n service nginxd stop\n service httpd stop\n service wdapache stop\n service pureftpd stop\n tar zcvf /www/backup/mysqldatdbk.tar.gz /www/wdlinux/mysql/var\n tar zcvf /www/backup/ngconfbk.tar.gz /www/wdlinux/nginx/conf\n tar zcvf /www/backup/apconfbk.tar.gz /www/wdlinux/apache/conf\n rpm -e lanmp_wdcp --nodeps\n rm -fr /www/wdlinux\n echo\n echo " lanmp,wdcp remove is OK"\n echo\n exit 0\nfi\n\necho "Turn off selinux..."\nsetenforce 0\nsed -i \'s/SELINUX=enforcing/SELINUX=disabled/g\' /etc/selinux/config\nsed -i \'s/^exclude=/#exclude=/g\' /etc/yum.conf\nyum install -y gcc gcc-c++ make autoconf libtool-ltdl-devel gd-devel freetype-devel libxml2-devel libjpeg-devel libpng-devel openssl-devel curl-devel patch libmcrypt-devel libmhash-devel ncurses-devel sudo bzip2 iptables sendmail iptables unzip\n\n#echo "Check the network..."\n#ping -c 2 113.105.167.1\n#if [[ $? != 0 ]];then\n# echo\n# echo "network err"\n# exit 1\n#fi\nping -c 3 dl.wdlinux.cn\nif [[ $? == 2 ]];then\n echo\n echo "dns error"\n exit 1\nfi\n\nif [[ ! -d /www/wdlinux ]];then\n echo\n echo "rpm remove..."\n rpm -e php --nodeps\n rpm -e httpd --nodeps\n rpm -e mysql-server --nodeps\n rpm -e mysql --nodeps\nfi\n\necho "yum update..."\nyum install -y make autoconf sudo wget libtool-ltdl-devel gd-devel freetype-devel libxml2-devel libjpeg-devel libpng-devel openssl-devel curl-devel patch libmcrypt-devel libmhash-devel ncurses-devel iptables\n\narch=i386\nAurl="http://dl.wdlinux.cn:5180/rpms"\nif [[ `uname -m` == "x86_64" ]];then\n arch="x86_64"\nfi\n\nfunction in_finsh {\n        echo\n        echo "          configuration ,lamp or lnmp,wdcp install is finshed"\n        echo "          visit http://ip"\n        echo "          wdcp visit http://ip:8080"\n        echo "          more infomation please visit http://www.wdlinux.cn"\n        echo\n}\n\nfunction in_check {\n        if [[ $1 == 1 ]];then\n                echo\n                echo "============  $2 install error  ============="\n                echo\n                exit 1\n        else\n                echo\n                echo "============  $2 install OK  =============="\n                echo\n                echo\n        fi\n}\n\ngrep -E \'wdOS 1|5\\.\' /etc/redhat-release > /dev/null 2>&1\nv1=$?\ngrep -E \'wdOS 2|6\\.\' /etc/redhat-release > /dev/null 2>&1\nv2=$?\nif [ $v1 == 0 ];then\n RF="lanmp_wdcp-2-5.$arch.rpm";\nelif [ $v2 == 0 ];then\n RF="lanmp_wdcp-2-5.el6.$arch.rpm";\n if [ $arch == "x86_64" ];then\n  wget -c http://dl.wdlinux.cn:5180/soft/rpmforge-release-0.5.2-2.el6.rf.x86_64.rpm\n  rpm -ivh rpmforge-release-0.5.2-2.el6.rf.x86_64.rpm\n else\n  wget -c http://dl.wdlinux.cn:5180/soft/rpmforge-release-0.5.2-2.el6.rf.i686.rpm\n  rpm -ivh rpmforge-release-0.5.2-2.el6.rf.i686.rpm\n fi\n yum install -y mhash-devel libmcrypt-devel\nelse\n echo\n echo "The current system does not support"\n echo\n exit\nfi\nwget -c http://dl.wdlinux.cn:5180/rpms/$RF\nrpm -ivh $RF --nodeps\nI_F=$?\nif [ $I_F == 0 ];then\n echo\nfi\nin_check $I_F lanmp_wdcp\n\nrm -f wdcp_v*\nwget -c http://down.wdlinux.cn/down/wdcp_v2.5.tar.gz > /dev/null 2>&1\ntar zxvf wdcp_v2.5.tar.gz -C / > /dev/null 2>&1\n\nin_finsh\n\n'})})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>c});var l=t(67294);const r={},i=l.createContext(r);function c(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);