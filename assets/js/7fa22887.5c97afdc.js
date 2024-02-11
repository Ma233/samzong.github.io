"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[44352],{29860:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var r=t(17624),s=t(4552);const o={title:"HowTo Trun Off IPv6 in CentOS 6.x",tags:["CentOS"],date:new Date("2016-07-29T07:26:19.000Z")},l=void 0,a={permalink:"/2016/07/29/HowTo-Trun-Off-IPv6-in-CentOS-6-x",source:"@site/blog/2016-07-29-HowTo-Trun-Off-IPv6-in-CentOS-6-x.md",title:"HowTo Trun Off IPv6 in CentOS 6.x",description:"1. CentOS 6.x",date:"2016-07-29T07:26:19.000Z",formattedDate:"July 29, 2016",tags:[{label:"CentOS",permalink:"/tags/cent-os"}],readingTime:2.165,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Trun Off IPv6 in CentOS 6.x",tags:["CentOS"],date:"2016-07-29T07:26:19.000Z"},unlisted:!1,prevItem:{title:"HowTo Install KVM Manage Server webvirtmgr",permalink:"/2016/07/27/HowTo-Install-KVM-Manage-Server-webvirtmgr"},nextItem:{title:"\u4f60\u597d\uff0c\u516b\u6708",permalink:"/2016/08/01/ni-hao-ba-yue"}},c={authorsImageUrls:[]},i=[{value:"1. CentOS 6.x",id:"1-centos-6x",level:2},{value:"2. CentOS 7.x",id:"2-centos-7x",level:2},{value:"Setup 1. \u4fee\u6539 grub \u6587\u4ef6\uff0c\u5728\u542f\u52a8\u5f15\u5bfc\u65f6\u4e0d\u52a0\u8f7d ipv6",id:"setup-1-\u4fee\u6539-grub-\u6587\u4ef6\u5728\u542f\u52a8\u5f15\u5bfc\u65f6\u4e0d\u52a0\u8f7d-ipv6",level:3},{value:"Setup 2. \u7b2c\u4e8c\u79cd\u65b9\u5f0f",id:"setup-2-\u7b2c\u4e8c\u79cd\u65b9\u5f0f",level:4}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1-centos-6x",children:"1. CentOS 6.x"}),"\n",(0,r.jsx)(n.p,{children:"CentOS 6 \u4e0a\u662f\u9ed8\u8ba4\u6253\u5f00\u4e86 IPv6\uff0c\u4f46\u5176\u5b9e\u5728\u6211\u4eec\u5b9e\u9645\u4f7f\u7528\u4e2d\u5f88\u96be\u7528\u5230\u5b83\uff0c\u6240\u4ee5\u672c\u7bc7\u7684\u5185\u5bb9\u5c31\u662f\u5982\u4f55\u5173\u95ed IPv6\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230 inet6\uff0c\u8bf4\u660e\u8fd8\u6ca1\u5173\u95ed\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[root@ultraera ~]# ifconfig eth0\neth0      Link encap:Ethernet  HWaddr 00:0C:29:3A:F9:6F\n          inet addr:172.16.102.161  Bcast:172.16.102.255  Mask:255.255.255.0\n          inet6 addr: fe80::20c:29ff:fe3a:f96f/64 Scope:Link\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:199 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:122 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000\n          RX bytes:20124 (19.6 KiB)  TX bytes:17182 (16.7 KiB)\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u4fee\u6539/etc/modprobe.d/dist.conf"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[root@ultraera ~]# vi /etc/modprobe.d/dist.conf\n# \u6dfb\u52a0\u4e0b\u9762\u4e24\u884c\u5185\u5bb9\nalias net-pf-10 off\nalias ipv6 off\n# \u4fdd\u5b58\u9000\u51fa\uff0c\u5e76\u4e14\u91cd\u65b0\u542f\u52a8\u7cfb\u7edf\n\n# \u5f00\u673a\u4e0d\u542f\u52a8\n[root@ultraera ~]# chkconfig ip6tables off\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u7cfb\u7edf\u91cd\u542f\u5b8c\u6210\u540e\uff0c\u68c0\u67e5\u662f\u5426\u52a0\u8f7d IPv6"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[root@ultraera ~]# lsmod | grep v6\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u8865\u5145"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4fee\u6539/etc/sysconfig/network\uff0c\u8ffd\u52a0"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"NETWORKING_IPV6=no\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4fee\u6539/etc/hosts\u6587\u4ef6\uff0c\u628aipv6\u7684\u90a3\u53e5\u672c\u5730\u4e3b\u673a\u540d\u89e3\u6790\u7684\u4e5f\u6ce8\u91ca\u6389"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#::1   localhost localhost6 localhost6.localdomain6\n"})}),"\n",(0,r.jsx)(n.h2,{id:"2-centos-7x",children:"2. CentOS 7.x"}),"\n",(0,r.jsx)(n.h3,{id:"setup-1-\u4fee\u6539-grub-\u6587\u4ef6\u5728\u542f\u52a8\u5f15\u5bfc\u65f6\u4e0d\u52a0\u8f7d-ipv6",children:"Setup 1. \u4fee\u6539 grub \u6587\u4ef6\uff0c\u5728\u542f\u52a8\u5f15\u5bfc\u65f6\u4e0d\u52a0\u8f7d ipv6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'[root@ultraera ~]# vim /etc/default/grub\n\n# \u5728GRUB_CMDLINE_LINUX=" " ,\u4e2d\u589e\u52a0\nipv6.disable\uff1d1\n\n# \u91cd\u65b0\u751f\u4ea7\u542f\u52a8\u5f15\u5bfc\u6587\u4ef6\uff0c\u6ce8\u610f\uff0c\u8fd9\u91cc\u91cd\u542f\u7cfb\u7edf\u662f\u6ca1\u7528\u7684\uff0c\u9700\u8981\u624b\u52a8\u91cd\u5efa\u5f15\u5bfc\u6587\u4ef6\n[root@ultraera ~]# grub2-mkconfig -o /boot/grub2/grub.cfg\n[root@ultraera ~]# reboot\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u9a8c\u8bc1\u662f\u5426\u5173\u95ed"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[root@ultraera ~]# lsmod | grep ipv6\n"})}),"\n",(0,r.jsx)(n.h4,{id:"setup-2-\u7b2c\u4e8c\u79cd\u65b9\u5f0f",children:"Setup 2. \u7b2c\u4e8c\u79cd\u65b9\u5f0f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u4fee\u6539/etc/sysctl.conf,\u589e\u52a0\u4ee5\u4e0b\uff1a\nnet.ipv6.conf.all.disable_ipv6 = 1\n\nreboot\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["IPv6 \u662f\u9ed8\u8ba4\u652f\u6301\u7684\uff0c\u6240\u4ee5\u5f53\u4f60\u8981\u91cd\u65b0\u5f00\u8d77 IPv6 \u652f\u6301\u65f6\uff0c\u5c06\u4ee5\u4e0a\u6dfb\u52a0\u7684\u6307\u4ee4\u6ce8\u91ca\u6389\u5373\u53ef\u3002\n",(0,r.jsx)(n.strong,{children:"\u4e4b\u524d\u78b0\u5230\u8fc7\u5b89\u88c5\u67d0\u4e9b\u670d\u52a1\u65f6\uff0c\u4e0d\u80fd\u542f\u52a8\uff0c\u540e\u6765\u68c0\u67e5\u539f\u56e0\u662f\u56e0\u4e3a\u5173\u95ed ipv6 \u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u5728\u8fd9\u4e9b\u670d\u52a1\u7684 conf \u6587\u4ef6\uff0c\u6307\u5b9a\u4e86\u7c7b\u4f3c\u76d1\u542c ipv6\uff0c\u56e0\u4e3a\u5173\u95ed\u4e86 ipv6 \u5bfc\u81f4\u670d\u52a1\u65e0\u6cd5\u542f\u52a8\uff0c\u5c06\u5176\u5173\u95ed\u5373\u53ef\u3002"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>l});var r=t(11504);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);