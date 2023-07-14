"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[26938],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),i=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=i(t),u=r,g=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=t(87462),r=(t(67294),t(3905));const o={title:"CentOS 7 Configure DNS Server",tags:["CentOS"]},l=void 0,s={permalink:"/2014/07/22/CentOS7_Configure_BIND_DNS_Server",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2014-07-22-CentOS7_Configure_BIND_DNS_Server.md",source:"@site/blog/2014-07-22-CentOS7_Configure_BIND_DNS_Server.md",title:"CentOS 7 Configure DNS Server",description:"\u4eca\u5929\u4ecb\u7ecd\u4e0b\u5982\u4f55\u5728 CentOS 7 \u4e0b\u90e8\u7f72 DNS Server\uff0c\u6d4b\u8bd5\u73af\u5883\u4e2d\u670d\u52a1\u7aef\u642d\u5efa\u5728\u4e86 CentOS 7\uff0c\u5ba2\u6237\u7aef\u5206\u522b\u5728 Windows \u548c Linux \u5b9e\u73b0\u6d4b\u8bd5\u3002",date:"2014-07-22T00:00:00.000Z",formattedDate:"2014\u5e747\u670822\u65e5",tags:[{label:"CentOS",permalink:"/tags/cent-os"}],readingTime:2.0733333333333333,hasTruncateMarker:!1,authors:[],frontMatter:{title:"CentOS 7 Configure DNS Server",tags:["CentOS"]},prevItem:{title:"\u5199\u7684\u7b2c\u4e00\u4e2a\u524d\u7aef\u9875\u9762",permalink:"/2015/02/23/\u5199\u7684\u7b2c\u4e00\u4e2a\u524d\u7aef\u9875\u9762"},nextItem:{title:"\u6211\u662f\u4e00\u4e2a\u6700\u4e0d\u4f1a\u5199\u6807\u9898\u7684\u4eba",permalink:"/2014/03/27/\u6211\u662f\u4e00\u4e2a\u6700\u4e0d\u4f1a\u5199\u6807\u9898\u7684\u4eba"}},c={authorsImageUrls:[]},i=[{value:"DNS \u670d\u52a1\u4ecb\u7ecd",id:"dns-\u670d\u52a1\u4ecb\u7ecd",level:4},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:4},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:4},{value:"\u7f16\u8f91 samzong.local.zone \u914d\u7f6e\u6587\u4ef6",id:"\u7f16\u8f91-samzonglocalzone-\u914d\u7f6e\u6587\u4ef6",level:4},{value:"\u5ba2\u6237\u7aef\u9a8c\u8bc1",id:"\u5ba2\u6237\u7aef\u9a8c\u8bc1",level:4},{value:"\u4f7f\u7528 rndc \u7ba1\u7406 DNS \u89e3\u6790\u8bb0\u5f55",id:"\u4f7f\u7528-rndc-\u7ba1\u7406-dns-\u89e3\u6790\u8bb0\u5f55",level:4}],d={toc:i},m="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4eca\u5929\u4ecb\u7ecd\u4e0b\u5982\u4f55\u5728 CentOS 7 \u4e0b\u90e8\u7f72 DNS Server\uff0c\u6d4b\u8bd5\u73af\u5883\u4e2d\u670d\u52a1\u7aef\u642d\u5efa\u5728\u4e86 CentOS 7\uff0c\u5ba2\u6237\u7aef\u5206\u522b\u5728 Windows \u548c Linux \u5b9e\u73b0\u6d4b\u8bd5\u3002"),(0,r.kt)("p",null,"\u56e0\u4e3a\u76ee\u7684\u662f\u8ba9\u81ea\u5efa DNS \u670d\u52a1\u5668\u89e3\u6790\u516c\u53f8\u5185\u90e8\u7684\u81ea\u5b9a\u4e49\u57df\u540d\uff0c\u6240\u4ee5\u5f53\u5ba2\u6237\u7aef\u9700\u8981\u8bbf\u95ee\u5916\u7f51\u57df\u540d\u65f6\uff0cDNS \u670d\u52a1\u5668\u4f1a\u5c06\u89e3\u6790\u8bf7\u6c42\u8f6c\u53d1\u7ed9 ISP \u7684 DNS \u670d\u52a1\u5668\uff0c\u5e76\u4f1a\u5c06\u89e3\u6790\u7ed3\u679c\u7f13\u5b58\uff0c\u5e76\u4e14\u53ea\u5bf9\u5185\u7f51\u4e3b\u673a\u7684\u89e3\u6790\u8bf7\u6c42\u8fdb\u884c\u8f6c\u53d1\uff0c\u800c\u4e0d\u4f1a\u5bf9\u516c\u7f51\u7684\u4e3b\u673a\u89e3\u6790\u8bf7\u6c42\u8fdb\u884c\u8f6c\u53d1\u3002"),(0,r.kt)("h4",{id:"dns-\u670d\u52a1\u4ecb\u7ecd"},"DNS \u670d\u52a1\u4ecb\u7ecd"),(0,r.kt)("p",null,"DNS \u670d\u52a1\u7531 BIND \u63d0\u4f9b\uff0c\u542f\u52a8\u540e\u670d\u52a1\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"named"),"\uff0c\u7ba1\u7406\u5de5\u5177\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"rndc"),"\uff0cdebug \u5de5\u5177\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"dig"),"\uff0c\u4e3b\u8981\u914d\u7f6e\u6587\u4ef6\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/named.conf"),"\u3002"),(0,r.kt)("h4",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,"\u63a8\u8350\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"bind-chroot"),"\u6765\u5b89\u88c5\uff0c\u63d0\u9ad8\u670d\u52a1\u7684\u5b89\u5168\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  ~ yum install -y bind-chroot\n")),(0,r.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u542f\u52a8",(0,r.kt)("inlineCode",{parentName:"p"},"named-chroot"),"\u670d\u52a1\uff0c\u5e76\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  ~ systemctl enable named-chroot.service\nCreated symlink from /etc/systemd/system/multi-user.target.wants/named-chroot.service to /usr/lib/systemd/system/named-chroot.service.\n\u279c  ~ systemctl start named-chroot.service\n\u279c  ~ netstat -ntlp | grep 53\ntcp        0      0 127.0.0.1:53            0.0.0.0:*               LISTEN      4515/named\ntcp        0      0 127.0.0.1:953           0.0.0.0:*               LISTEN      4515/named\n")),(0,r.kt)("h4",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u9996\u5148\u5907\u4efd DNS \u670d\u52a1\u7aef\u7684\u4e3b\u914d\u7f6e\u6587\u4ef6\uff0c\u7136\u540e\u4fee\u6539\u5176\u4e2d\u7684\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c  ~ cp /etc/named.conf /etc/named.conf.bak\n\u279c  ~ vim /etc/named.conf\n\noptions {\n        listen-on port 53 { any; };\n        listen-on-v6 port 53 { ::1; };\n        directory       "/var/named";\n        dump-file       "/var/named/data/cache_dump.db";\n        statistics-file "/var/named/data/named_stats.txt";\n        memstatistics-file "/var/named/data/named_mem_stats.txt";\n        \n        allow-query     { 192.168.16.0/24; 192.168.0.0/23; };\n        recursion yes;\n        allow-recursion { 192.168.16.0/24; 192.168.0.0/23; };\n        \n        forward first;\n        forwarders { 202.96.209.133; 114.114.114.114; };\n        \n        dnssec-enable no;\n        dnssec-validation no;\n        dnssec-lookaside no;\n\n        bindkeys-file "/etc/named.iscdlv.key";\n        managed-keys-directory "/var/named/dynamic";\n\n        pid-file "/run/named/named.pid";\n        session-keyfile "/run/named/session.key";\n};\n\nlogging {\n        channel default_debug {\n                file "data/named.run";\n                severity dynamic;\n        };\n};\n\nzone "." IN {\n        type hint;\n        file "named.ca";\n};\n\n// \u65b0\u589e\u4e00\u4e2asamzong.local\u57df\u540d.\nzone "samzong.local" IN {\n    type master;\n    file "samzong.local.zone";\n};\n\ninclude "/etc/named.rfc1912.zones";\ninclude "/etc/named.root.key";\n')),(0,r.kt)("h4",{id:"\u7f16\u8f91-samzonglocalzone-\u914d\u7f6e\u6587\u4ef6"},"\u7f16\u8f91 samzong.local.zone \u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u9996\u5148\u521b\u5efa samzong.local.zone \u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  ~ cd /var/named\n\u279c  named touch samzong.local.zone;\n")),(0,r.kt)("p",null,"\u7136\u540e\u7f16\u8f91\u6587\u4ef6\u5185\u5bb9\u65b0\u589e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$TTL 86400\n@ IN SOA @ root.samzong.local. (\n    2016042112 ;Serial\n    3600 ;Refresh\n    1800 ;Retry\n    604800 ;Expire\n    43200 ;Minimum TTL\n)\n\n        NS  @\n        A       10.0.2.6\nwww     A       192.168.16.100\na   IN  CNAME   www.baidu.com.\nb       A       192.168.16.101\n")),(0,r.kt)("p",null,"\u7f16\u8f91\u5b8c\u6210\u4e4b\u540e\uff0c\u91cd\u65b0\u542f\u52a8 named-chroot \u8ba9\u670d\u52a1\u751f\u6548\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  named systemctl restart named-chroot.service\n")),(0,r.kt)("h4",{id:"\u5ba2\u6237\u7aef\u9a8c\u8bc1"},"\u5ba2\u6237\u7aef\u9a8c\u8bc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  named nslookup www.samzong.local\nServer:  192.168.16.6\nAddress: 192.168.16.6#53\n\nName: www.samzong.local\nAddress: 192.168.16.100\n")),(0,r.kt)("h4",{id:"\u4f7f\u7528-rndc-\u7ba1\u7406-dns-\u89e3\u6790\u8bb0\u5f55"},"\u4f7f\u7528 rndc \u7ba1\u7406 DNS \u89e3\u6790\u8bb0\u5f55"),(0,r.kt)("p",null,"rndc \u5e38\u7528\u6307\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"status          \u663e\u793abind\u670d\u52a1\u5668\u7684\u5de5\u4f5c\u72b6\u6001\nreload          \u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\u548c\u533a\u57df\u6587\u4ef6\nreload zone     \u91cd\u65b0\u52a0\u8f7d\u6307\u5b9a\u7684zone\nreconfig        \u91cd\u65b0\u8bfb\u53d6\u914d\u5236\u95f4\u5e76\u52a0\u8f7d\u65b0\u589e\u7684zone\nquerylog        \u5173\u95ed\u6216\u5f00\u542f\u67e5\u8be2\u65e5\u5fd7\ndumpdb          \u5c06\u9ad8\u901f\u7f13\u5b58\u8f6c\u5b58\u5230\u6587\u4ef6,named.conf \u6709\u6307\u5b9a\u6587\u4ef6\u4f4d\u7f6e\nfreeze          \u6682\u505c\u66f4\u65b0\u6240\u6709zone\u72b6\u6001\n")))}p.isMDXComponent=!0}}]);