"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[68499],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,a=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=l,f=d["".concat(a,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(f,c(c({ref:n},s),{},{components:t})):r.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o[d]="string"==typeof e?e:l,c[1]=o;for(var p=2;p<i;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},47951:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(87462),l=(t(67294),t(3905));const i={title:"Use Script Install LNMP",tags:["Shell"],date:new Date("2016-08-13T06:12:43.000Z")},c=void 0,o={permalink:"/2016/08/13/Script-Install-LNMP",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2016-08-13-Script-Install-LNMP.md",source:"@site/blog/2016-08-13-Script-Install-LNMP.md",title:"Use Script Install LNMP",description:"",date:"2016-08-13T06:12:43.000Z",formattedDate:"2016\u5e748\u670813\u65e5",tags:[{label:"Shell",permalink:"/tags/shell"}],readingTime:1.2366666666666666,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Use Script Install LNMP",tags:["Shell"],date:"2016-08-13T06:12:43.000Z"},prevItem:{title:"\u4e8c\u5341\u56db\u5c81",permalink:"/2016/08/19/er-shi-si-sui"},nextItem:{title:"HowTo Setup MariaDB Galera Cluster 10 On CentOS 6.x",permalink:"/2016/08/04/HowTo-Setup-MariaDB-Galera-Cluster-10-On-CentOS-6-x"}},a={authorsImageUrls:[]},p=[],s={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\n#\n\nif [[ $1 == "uninstall" ]];then\n echo "starting backup data..."\n mkdir -p /www/backup\n service mysqld stop\n service nginxd stop\n service httpd stop\n service wdapache stop\n service pureftpd stop\n tar zcvf /www/backup/mysqldatdbk.tar.gz /www/wdlinux/mysql/var\n tar zcvf /www/backup/ngconfbk.tar.gz /www/wdlinux/nginx/conf\n tar zcvf /www/backup/apconfbk.tar.gz /www/wdlinux/apache/conf\n rpm -e lanmp_wdcp --nodeps\n rm -fr /www/wdlinux\n echo\n echo " lanmp,wdcp remove is OK"\n echo\n exit 0\nfi\n\necho "Turn off selinux..."\nsetenforce 0\nsed -i \'s/SELINUX=enforcing/SELINUX=disabled/g\' /etc/selinux/config\nsed -i \'s/^exclude=/#exclude=/g\' /etc/yum.conf\nyum install -y gcc gcc-c++ make autoconf libtool-ltdl-devel gd-devel freetype-devel libxml2-devel libjpeg-devel libpng-devel openssl-devel curl-devel patch libmcrypt-devel libmhash-devel ncurses-devel sudo bzip2 iptables sendmail iptables unzip\n\n#echo "Check the network..."\n#ping -c 2 113.105.167.1\n#if [[ $? != 0 ]];then\n# echo\n# echo "network err"\n# exit 1\n#fi\nping -c 3 dl.wdlinux.cn\nif [[ $? == 2 ]];then\n echo\n echo "dns error"\n exit 1\nfi\n\nif [[ ! -d /www/wdlinux ]];then\n echo\n echo "rpm remove..."\n rpm -e php --nodeps\n rpm -e httpd --nodeps\n rpm -e mysql-server --nodeps\n rpm -e mysql --nodeps\nfi\n\necho "yum update..."\nyum install -y make autoconf sudo wget libtool-ltdl-devel gd-devel freetype-devel libxml2-devel libjpeg-devel libpng-devel openssl-devel curl-devel patch libmcrypt-devel libmhash-devel ncurses-devel iptables\n\narch=i386\nAurl="http://dl.wdlinux.cn:5180/rpms"\nif [[ `uname -m` == "x86_64" ]];then\n arch="x86_64"\nfi\n\nfunction in_finsh {\n        echo\n        echo "          configuration ,lamp or lnmp,wdcp install is finshed"\n        echo "          visit http://ip"\n        echo "          wdcp visit http://ip:8080"\n        echo "          more infomation please visit http://www.wdlinux.cn"\n        echo\n}\n\nfunction in_check {\n        if [[ $1 == 1 ]];then\n                echo\n                echo "============  $2 install error  ============="\n                echo\n                exit 1\n        else\n                echo\n                echo "============  $2 install OK  =============="\n                echo\n                echo\n        fi\n}\n\ngrep -E \'wdOS 1|5\\.\' /etc/redhat-release > /dev/null 2>&1\nv1=$?\ngrep -E \'wdOS 2|6\\.\' /etc/redhat-release > /dev/null 2>&1\nv2=$?\nif [ $v1 == 0 ];then\n RF="lanmp_wdcp-2-5.$arch.rpm";\nelif [ $v2 == 0 ];then\n RF="lanmp_wdcp-2-5.el6.$arch.rpm";\n if [ $arch == "x86_64" ];then\n  wget -c http://dl.wdlinux.cn:5180/soft/rpmforge-release-0.5.2-2.el6.rf.x86_64.rpm\n  rpm -ivh rpmforge-release-0.5.2-2.el6.rf.x86_64.rpm\n else\n  wget -c http://dl.wdlinux.cn:5180/soft/rpmforge-release-0.5.2-2.el6.rf.i686.rpm\n  rpm -ivh rpmforge-release-0.5.2-2.el6.rf.i686.rpm\n fi\n yum install -y mhash-devel libmcrypt-devel\nelse\n echo\n echo "The current system does not support"\n echo\n exit\nfi\nwget -c http://dl.wdlinux.cn:5180/rpms/$RF\nrpm -ivh $RF --nodeps\nI_F=$?\nif [ $I_F == 0 ];then\n echo\nfi\nin_check $I_F lanmp_wdcp\n\nrm -f wdcp_v*\nwget -c http://down.wdlinux.cn/down/wdcp_v2.5.tar.gz > /dev/null 2>&1\ntar zxvf wdcp_v2.5.tar.gz -C / > /dev/null 2>&1\n\nin_finsh\n\n')))}m.isMDXComponent=!0}}]);