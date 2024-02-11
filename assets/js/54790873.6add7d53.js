"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[72372],{32496:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var a=s(17624),r=s(4552);const d={title:"CentOS 7 Configure DNS Server",tags:["CentOS"]},t=void 0,c={permalink:"/2014/07/22/centos7-configure-bind-dns-server",source:"@site/blog/2014-07-22-centos7-configure-bind-dns-server.md",title:"CentOS 7 Configure DNS Server",description:"\u4eca\u5929\u4ecb\u7ecd\u4e0b\u5982\u4f55\u5728 CentOS 7 \u4e0b\u90e8\u7f72 DNS Server\uff0c\u6d4b\u8bd5\u73af\u5883\u4e2d\u670d\u52a1\u7aef\u642d\u5efa\u5728\u4e86 CentOS 7\uff0c\u5ba2\u6237\u7aef\u5206\u522b\u5728 Windows \u548c Linux \u5b9e\u73b0\u6d4b\u8bd5\u3002",date:"2014-07-22T00:00:00.000Z",formattedDate:"July 22, 2014",tags:[{label:"CentOS",permalink:"/tags/cent-os"}],readingTime:3.11,hasTruncateMarker:!1,authors:[],frontMatter:{title:"CentOS 7 Configure DNS Server",tags:["CentOS"]},unlisted:!1,prevItem:{title:"\u6211\u662f\u4e00\u4e2a\u6700\u4e0d\u4f1a\u5199\u6807\u9898\u7684\u4eba",permalink:"/2014/03/27/wo-shi-yi-ge-zui-bu-hui-xie-biao-ti-de-ren"},nextItem:{title:"\u5199\u7684\u7b2c\u4e00\u4e2a\u524d\u7aef\u9875\u9762",permalink:"/2015/02/23/xie-de-di-yi-ge-qian-duan-ye-mian"}},o={authorsImageUrls:[]},l=[{value:"DNS \u670d\u52a1\u4ecb\u7ecd",id:"dns-\u670d\u52a1\u4ecb\u7ecd",level:4},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:4},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:4},{value:"\u7f16\u8f91 samzong.local.zone \u914d\u7f6e\u6587\u4ef6",id:"\u7f16\u8f91-samzonglocalzone-\u914d\u7f6e\u6587\u4ef6",level:4},{value:"\u5ba2\u6237\u7aef\u9a8c\u8bc1",id:"\u5ba2\u6237\u7aef\u9a8c\u8bc1",level:4},{value:"\u4f7f\u7528 rndc \u7ba1\u7406 DNS \u89e3\u6790\u8bb0\u5f55",id:"\u4f7f\u7528-rndc-\u7ba1\u7406-dns-\u89e3\u6790\u8bb0\u5f55",level:4}];function i(n){const e={code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"\u4eca\u5929\u4ecb\u7ecd\u4e0b\u5982\u4f55\u5728 CentOS 7 \u4e0b\u90e8\u7f72 DNS Server\uff0c\u6d4b\u8bd5\u73af\u5883\u4e2d\u670d\u52a1\u7aef\u642d\u5efa\u5728\u4e86 CentOS 7\uff0c\u5ba2\u6237\u7aef\u5206\u522b\u5728 Windows \u548c Linux \u5b9e\u73b0\u6d4b\u8bd5\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u56e0\u4e3a\u76ee\u7684\u662f\u8ba9\u81ea\u5efa DNS \u670d\u52a1\u5668\u89e3\u6790\u516c\u53f8\u5185\u90e8\u7684\u81ea\u5b9a\u4e49\u57df\u540d\uff0c\u6240\u4ee5\u5f53\u5ba2\u6237\u7aef\u9700\u8981\u8bbf\u95ee\u5916\u7f51\u57df\u540d\u65f6\uff0cDNS \u670d\u52a1\u5668\u4f1a\u5c06\u89e3\u6790\u8bf7\u6c42\u8f6c\u53d1\u7ed9 ISP \u7684 DNS \u670d\u52a1\u5668\uff0c\u5e76\u4f1a\u5c06\u89e3\u6790\u7ed3\u679c\u7f13\u5b58\uff0c\u5e76\u4e14\u53ea\u5bf9\u5185\u7f51\u4e3b\u673a\u7684\u89e3\u6790\u8bf7\u6c42\u8fdb\u884c\u8f6c\u53d1\uff0c\u800c\u4e0d\u4f1a\u5bf9\u516c\u7f51\u7684\u4e3b\u673a\u89e3\u6790\u8bf7\u6c42\u8fdb\u884c\u8f6c\u53d1\u3002"}),"\n",(0,a.jsx)(e.h4,{id:"dns-\u670d\u52a1\u4ecb\u7ecd",children:"DNS \u670d\u52a1\u4ecb\u7ecd"}),"\n",(0,a.jsxs)(e.p,{children:["DNS \u670d\u52a1\u7531 BIND \u63d0\u4f9b\uff0c\u542f\u52a8\u540e\u670d\u52a1\u540d\u4e3a",(0,a.jsx)(e.code,{children:"named"}),"\uff0c\u7ba1\u7406\u5de5\u5177\u4e3a",(0,a.jsx)(e.code,{children:"rndc"}),"\uff0cdebug \u5de5\u5177\u4e3a",(0,a.jsx)(e.code,{children:"dig"}),"\uff0c\u4e3b\u8981\u914d\u7f6e\u6587\u4ef6\u5728",(0,a.jsx)(e.code,{children:"/etc/named.conf"}),"\u3002"]}),"\n",(0,a.jsx)(e.h4,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,a.jsxs)(e.p,{children:["\u63a8\u8350\u9009\u62e9",(0,a.jsx)(e.code,{children:"bind-chroot"}),"\u6765\u5b89\u88c5\uff0c\u63d0\u9ad8\u670d\u52a1\u7684\u5b89\u5168\u6027\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"\u279c  ~ yum install -y bind-chroot\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u542f\u52a8",(0,a.jsx)(e.code,{children:"named-chroot"}),"\u670d\u52a1\uff0c\u5e76\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"\u279c  ~ systemctl enable named-chroot.service\nCreated symlink from /etc/systemd/system/multi-user.target.wants/named-chroot.service to /usr/lib/systemd/system/named-chroot.service.\n\u279c  ~ systemctl start named-chroot.service\n\u279c  ~ netstat -ntlp | grep 53\ntcp        0      0 127.0.0.1:53            0.0.0.0:*               LISTEN      4515/named\ntcp        0      0 127.0.0.1:953           0.0.0.0:*               LISTEN      4515/named\n"})}),"\n",(0,a.jsx)(e.h4,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,a.jsx)(e.p,{children:"\u9996\u5148\u5907\u4efd DNS \u670d\u52a1\u7aef\u7684\u4e3b\u914d\u7f6e\u6587\u4ef6\uff0c\u7136\u540e\u4fee\u6539\u5176\u4e2d\u7684\u5185\u5bb9\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'\u279c  ~ cp /etc/named.conf /etc/named.conf.bak\n\u279c  ~ vim /etc/named.conf\n\noptions {\n        listen-on port 53 { any; };\n        listen-on-v6 port 53 { ::1; };\n        directory       "/var/named";\n        dump-file       "/var/named/data/cache_dump.db";\n        statistics-file "/var/named/data/named_stats.txt";\n        memstatistics-file "/var/named/data/named_mem_stats.txt";\n        \n        allow-query     { 192.168.16.0/24; 192.168.0.0/23; };\n        recursion yes;\n        allow-recursion { 192.168.16.0/24; 192.168.0.0/23; };\n        \n        forward first;\n        forwarders { 202.96.209.133; 114.114.114.114; };\n        \n        dnssec-enable no;\n        dnssec-validation no;\n        dnssec-lookaside no;\n\n        bindkeys-file "/etc/named.iscdlv.key";\n        managed-keys-directory "/var/named/dynamic";\n\n        pid-file "/run/named/named.pid";\n        session-keyfile "/run/named/session.key";\n};\n\nlogging {\n        channel default_debug {\n                file "data/named.run";\n                severity dynamic;\n        };\n};\n\nzone "." IN {\n        type hint;\n        file "named.ca";\n};\n\n// \u65b0\u589e\u4e00\u4e2asamzong.local\u57df\u540d.\nzone "samzong.local" IN {\n    type master;\n    file "samzong.local.zone";\n};\n\ninclude "/etc/named.rfc1912.zones";\ninclude "/etc/named.root.key";\n'})}),"\n",(0,a.jsx)(e.h4,{id:"\u7f16\u8f91-samzonglocalzone-\u914d\u7f6e\u6587\u4ef6",children:"\u7f16\u8f91 samzong.local.zone \u914d\u7f6e\u6587\u4ef6"}),"\n",(0,a.jsx)(e.p,{children:"\u9996\u5148\u521b\u5efa samzong.local.zone \u6587\u4ef6\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"\u279c  ~ cd /var/named\n\u279c  named touch samzong.local.zone;\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u7136\u540e\u7f16\u8f91\u6587\u4ef6\u5185\u5bb9\u65b0\u589e\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"$TTL 86400\n@ IN SOA @ root.samzong.local. (\n    2016042112 ;Serial\n    3600 ;Refresh\n    1800 ;Retry\n    604800 ;Expire\n    43200 ;Minimum TTL\n)\n\n        NS  @\n        A       10.0.2.6\nwww     A       192.168.16.100\na   IN  CNAME   www.baidu.com.\nb       A       192.168.16.101\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u7f16\u8f91\u5b8c\u6210\u4e4b\u540e\uff0c\u91cd\u65b0\u542f\u52a8 named-chroot \u8ba9\u670d\u52a1\u751f\u6548\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"\u279c  named systemctl restart named-chroot.service\n"})}),"\n",(0,a.jsx)(e.h4,{id:"\u5ba2\u6237\u7aef\u9a8c\u8bc1",children:"\u5ba2\u6237\u7aef\u9a8c\u8bc1"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"\u279c  named nslookup www.samzong.local\nServer:  192.168.16.6\nAddress: 192.168.16.6#53\n\nName: www.samzong.local\nAddress: 192.168.16.100\n"})}),"\n",(0,a.jsx)(e.h4,{id:"\u4f7f\u7528-rndc-\u7ba1\u7406-dns-\u89e3\u6790\u8bb0\u5f55",children:"\u4f7f\u7528 rndc \u7ba1\u7406 DNS \u89e3\u6790\u8bb0\u5f55"}),"\n",(0,a.jsx)(e.p,{children:"rndc \u5e38\u7528\u6307\u4ee4\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"status          \u663e\u793abind\u670d\u52a1\u5668\u7684\u5de5\u4f5c\u72b6\u6001\nreload          \u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\u548c\u533a\u57df\u6587\u4ef6\nreload zone     \u91cd\u65b0\u52a0\u8f7d\u6307\u5b9a\u7684zone\nreconfig        \u91cd\u65b0\u8bfb\u53d6\u914d\u5236\u95f4\u5e76\u52a0\u8f7d\u65b0\u589e\u7684zone\nquerylog        \u5173\u95ed\u6216\u5f00\u542f\u67e5\u8be2\u65e5\u5fd7\ndumpdb          \u5c06\u9ad8\u901f\u7f13\u5b58\u8f6c\u5b58\u5230\u6587\u4ef6,named.conf \u6709\u6307\u5b9a\u6587\u4ef6\u4f4d\u7f6e\nfreeze          \u6682\u505c\u66f4\u65b0\u6240\u6709zone\u72b6\u6001\n"})})]})}function m(n={}){const{wrapper:e}={...(0,r.M)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(i,{...n})}):i(n)}},4552:(n,e,s)=>{s.d(e,{I:()=>c,M:()=>t});var a=s(11504);const r={},d=a.createContext(r);function t(n){const e=a.useContext(d);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),a.createElement(d.Provider,{value:e},n.children)}}}]);