"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[91736],{12988:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var i=l(17624),s=l(4552);const r={title:"CentOS \u521d\u59cb\u5b89\u88c5\u57fa\u672c\u4f18\u5316\u64cd\u4f5c",tags:["CentOS"],date:new Date("2016-03-19T05:54:23.000Z")},a=void 0,t={permalink:"/2016/03/19/centos-6-2-chu-shi-an-zhuang-ji-ben-you-hua-cao-zuo",source:"@site/blog/2016-03-19-centos-6-2-chu-shi-an-zhuang-ji-ben-you-hua-cao-zuo.md",title:"CentOS \u521d\u59cb\u5b89\u88c5\u57fa\u672c\u4f18\u5316\u64cd\u4f5c",description:"CentOS 6.x \u521d\u59cb\u5b89\u88c5\u57fa\u672c\u4f18\u5316\u64cd\u4f5c",date:"2016-03-19T05:54:23.000Z",formattedDate:"2016\u5e743\u670819\u65e5",tags:[{label:"CentOS",permalink:"/tags/cent-os"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"CentOS \u521d\u59cb\u5b89\u88c5\u57fa\u672c\u4f18\u5316\u64cd\u4f5c",tags:["CentOS"],date:"2016-03-19T05:54:23.000Z"},unlisted:!1,prevItem:{title:"MySQL \u5f00\u542f\u6162\u65e5\u5fd7\u4f18\u5316",permalink:"/2016/03/22/mysql-2-kai-qi-man-ri-zhi-you-hua"},nextItem:{title:"\u7406\u89e3 Linux \u7684\u786c\u94fe\u63a5\u4e0e\u8f6f\u94fe\u63a5",permalink:"/2016/03/18/li-jie-linux-de-ying-lian-jie-yu-ruan-lian-jie"}},o={authorsImageUrls:[]},c=[{value:"CentOS 6.x \u521d\u59cb\u5b89\u88c5\u57fa\u672c\u4f18\u5316\u64cd\u4f5c",id:"centos-6x-\u521d\u59cb\u5b89\u88c5\u57fa\u672c\u4f18\u5316\u64cd\u4f5c",level:2},{value:"1. \u6d4b\u8bd5\u73af\u5883",id:"1-\u6d4b\u8bd5\u73af\u5883",level:3},{value:"2. \u9ed8\u8ba4\u7f51\u5361\u5f00\u673a\u672a\u8bbe\u5b9a\u81ea\u542f\u52a8",id:"2-\u9ed8\u8ba4\u7f51\u5361\u5f00\u673a\u672a\u8bbe\u5b9a\u81ea\u542f\u52a8",level:3},{value:"3. \u589e\u52a0\u7b2c\u4e09\u65b9 Yum \u6e90",id:"3-\u589e\u52a0\u7b2c\u4e09\u65b9-yum-\u6e90",level:3},{value:"a. \u56e0\u4e3a\u6211\u4eec\u4f7f\u7528\u7684\u662f minimal \u7248\u672c\u7684 ISO \u5b89\u88c5\uff0c\u6240\u4ee5\u7cfb\u7edf\u9ed8\u8ba4\u6ca1\u6709 wget\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u7528 yum \u5b89\u88c5\uff1a[wget \u662f Linux \u5e38\u7528\u7684\u547d\u4ee4\u884c\u4e0b\u8f7d\u5de5\u5177]",id:"a-\u56e0\u4e3a\u6211\u4eec\u4f7f\u7528\u7684\u662f-minimal-\u7248\u672c\u7684-iso-\u5b89\u88c5\u6240\u4ee5\u7cfb\u7edf\u9ed8\u8ba4\u6ca1\u6709-wget\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u7528-yum-\u5b89\u88c5wget-\u662f-linux-\u5e38\u7528\u7684\u547d\u4ee4\u884c\u4e0b\u8f7d\u5de5\u5177",level:4},{value:"b. \u4e0b\u8f7d\u5e76\u5b89\u88c5 epel \u6e90",id:"b-\u4e0b\u8f7d\u5e76\u5b89\u88c5-epel-\u6e90",level:4},{value:"4. \u5b89\u88c5 vim\uff1aLinux \u4f7f\u7528\u6700\u5e7f\u6cdb\u7684\u6587\u4ef6\u7f16\u8f91\u5de5\u5177",id:"4-\u5b89\u88c5-vimlinux-\u4f7f\u7528\u6700\u5e7f\u6cdb\u7684\u6587\u4ef6\u7f16\u8f91\u5de5\u5177",level:3},{value:"4. \u5173\u95ed SELinux",id:"4-\u5173\u95ed-selinux",level:3},{value:"5",id:"5",level:3},{value:"6",id:"6",level:3},{value:"7",id:"7",level:3},{value:"8",id:"8",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"centos-6x-\u521d\u59cb\u5b89\u88c5\u57fa\u672c\u4f18\u5316\u64cd\u4f5c",children:"CentOS 6.x \u521d\u59cb\u5b89\u88c5\u57fa\u672c\u4f18\u5316\u64cd\u4f5c"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u6587\u4ef6\u662f\u91c7\u7528\u7684\u6a21\u677f\u662f centos 6.x\uff0c\u76f8\u8f83\u4e8e centos 5.x \u4e0e centos 7.x \u7cfb\u5217\u6709\u4e9b\u533a\u522b\uff0c\u4e0d\u80fd\u4e00\u6982\u800c\u8bba\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"1-\u6d4b\u8bd5\u73af\u5883",children:"1. \u6d4b\u8bd5\u73af\u5883"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MacBook Pro 15-inch i7 8GB"}),"\n",(0,i.jsx)(n.li,{children:"VMware Fushion 8 Pro"}),"\n",(0,i.jsx)(n.li,{children:"CentOS-6.7-x86_64-minimal.iso"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-\u9ed8\u8ba4\u7f51\u5361\u5f00\u673a\u672a\u8bbe\u5b9a\u81ea\u542f\u52a8",children:"2. \u9ed8\u8ba4\u7f51\u5361\u5f00\u673a\u672a\u8bbe\u5b9a\u81ea\u542f\u52a8"}),"\n",(0,i.jsx)(n.p,{children:"\u5f88\u591a\u521d\u5b66\u8005\uff0c\u5728\u5b89\u88c5\u7cfb\u7edf\u7684\u65f6\u5019\uff0c\u78b0\u5230\u7684\u7b2c\u4e00\u4e2a\u95ee\u9898\u5c31\u662f\u4e0d\u80fd\u4e0a\u7f51\uff0c\u6240\u4ee5\u6709\u4e9b\u540c\u5b66\u5c31\u62c5\u5fc3\u662f\u4e0d\u662f\u9700\u8981\u53bb\u5b89\u88c5\u7f51\u5361\u9a71\u52a8\uff0c\u5176\u5b9e\u8fd9\u6837\u60f3\u5c31\u628a\u95ee\u9898\u590d\u6742\u5316\u4e86\uff0c\u5982\u679c\u4f60\u5728\u5b9e\u4f53\u673a\u5b89\u88c5 Linux \u7684\u7cfb\u7edf\u65f6\uff0c\u53ef\u80fd\u4f1a\u78b0\u5230\u7f51\u5361\u9a71\u52a8\u4e0d\u4e0a\u5bfc\u81f4\u65e0\u6cd5\u4e0a\u7f51\u7684\u95ee\u9898\uff0c\u8fd9\u4e2a\u65f6\u5019\u662f\u9700\u8981\u81ea\u884c\u5b89\u88c5\u9a71\u52a8\u7684\uff0c\u4f46\u662f\u6211\u4eec\u4f7f\u7528\u7684 VMware \u7684\u4e00\u6b3e\u865a\u62df\u5316\u5de5\u5177\uff0c\u6240\u4ee5\u7f51\u5361\u9a71\u52a8\u57fa\u672c\u5c31\u4e0d\u7528\u8003\u8651\uff0c\u539f\u56e0\u662f\u56e0\u4e3a\u6211\u4eec\u6ca1\u6709\u628a\u7f51\u5361\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8\uff0c\u4e0b\u9762\u8bb2\u5982\u4f55\u5f00\u542f\u7f51\u5361\uff0c\u5e76\u8bbe\u5b9a\u4e3a\u5f00\u673a\u81ea\u542f\u52a8\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[root@vm02 ~]# ifup eth0\n\nDetermining IP information for eth0... done.\n[root@vm02 ~]# \n[root@vm02 ~]# ifconfig eth0\neth0      Link encap:Ethernet  HWaddr 00:0C:29:B9:60:D8\n          inet addr:172.16.102.129  Bcast:172.16.102.255  Mask:255.255.255.0\n          inet6 addr: fe80::20c:29ff:feb9:60d8/64 Scope:Link\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:127 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:85 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000\n          RX bytes:14010 (13.6 KiB)  TX bytes:11410 (11.1 KiB)\n          \n[root@vm02 ~]# vi /etc/sysconfig/network-scripts/ifcfg-eth0\n DEVICE=eth0\n HWADDR=00:0C:29:B9:60:D8\n TYPE=Ethernet\n UUID=7ad636ff-78d9-4afa-9886-706b1de236a8\n ONBOOT=no   // \u9ed8\u8ba4\u662fno\uff0c\u4fee\u6539\u4e3ayes\n NM_CONTROLLED=yes\n BOOTPROTO=dhcp\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-\u589e\u52a0\u7b2c\u4e09\u65b9-yum-\u6e90",children:"3. \u589e\u52a0\u7b2c\u4e09\u65b9 Yum \u6e90"}),"\n",(0,i.jsx)(n.p,{children:"CentOS \u7cfb\u7edf\u5185\u7f6e\u7684\u5b98\u65b9\u6e90\u8f6f\u4ef6\u66f4\u65b0\u8f83\u6162\uff0c\u800c\u4e14\u7f3a\u5c11\u4e00\u4e9b\u5e38\u7528\u8f6f\u4ef6\u5305\uff0c\u5efa\u8bae\u5b89\u88c5 epel \u6e90\uff0cEPEL \u662f Extra Packages for Enterprise Linux \u7684\u7f29\u5199\uff08EPEL\uff09\uff0c\u662f\u7528\u4e8e Fedora-based Red Hat Enterprise Linux (RHEL) \u7684\u4e00\u4e2a\u9ad8\u8d28\u91cf\u8f6f\u4ef6\u6e90\uff0c\u6240\u4ee5\u540c\u65f6\u4e5f\u9002\u7528\u4e8e CentOS \u6216\u8005 Scientific Linux \u7b49\u53d1\u884c\u7248\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"a-\u56e0\u4e3a\u6211\u4eec\u4f7f\u7528\u7684\u662f-minimal-\u7248\u672c\u7684-iso-\u5b89\u88c5\u6240\u4ee5\u7cfb\u7edf\u9ed8\u8ba4\u6ca1\u6709-wget\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u7528-yum-\u5b89\u88c5wget-\u662f-linux-\u5e38\u7528\u7684\u547d\u4ee4\u884c\u4e0b\u8f7d\u5de5\u5177",children:"a. \u56e0\u4e3a\u6211\u4eec\u4f7f\u7528\u7684\u662f minimal \u7248\u672c\u7684 ISO \u5b89\u88c5\uff0c\u6240\u4ee5\u7cfb\u7edf\u9ed8\u8ba4\u6ca1\u6709 wget\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u7528 yum \u5b89\u88c5\uff1a[wget \u662f Linux \u5e38\u7528\u7684\u547d\u4ee4\u884c\u4e0b\u8f7d\u5de5\u5177]"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[root@vm02 ~]# yum install -y wget\nLoaded plugins: fastestmirror\nSetting up Install Process\nbase                                                     | 3.7 kB     00:00\nbase/primary_db                                          | 4.6 MB     00:32\nextras                                                   | 3.4 kB     00:00\nextras/primary_db                                        |  34 kB     00:00\nupdates                                                  | 3.4 kB     00:00\nupdates/primary_db                                       | 4.0 MB     01:05\nResolving Dependencies\n--\x3e Running transaction check\n---\x3e Package wget.x86_64 0:1.12-5.el6_6.1 will be installed\n--\x3e Finished Dependency Resolution\n\nDependencies Resolved\n\n================================================================================\n Package        Arch             Version                   Repository      Size\n================================================================================\nInstalling:\n wget           x86_64           1.12-5.el6_6.1            base           483 k\n\nTransaction Summary\n================================================================================\nInstall       1 Package(s)\n\nTotal download size: 483 k\nInstalled size: 1.8 M\nDownloading Packages:\nwget-1.12-5.el6_6.1.x86_64.rpm                           | 483 kB     00:01\nwarning: rpmts_HdrFromFdno: Header V3 RSA/SHA1 Signature, key ID c105b9de: NOKEY\nRetrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6\nImporting GPG key 0xC105B9DE:\n Userid : CentOS-6 Key (CentOS 6 Official Signing Key) <centos-6-key@centos.org>\n Package: centos-release-6-7.el6.centos.12.3.x86_64 (@anaconda-CentOS-201508042137.x86_64/6.7)\n From   : /etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6\nRunning rpm_check_debug\nRunning Transaction Test\nTransaction Test Succeeded\nRunning Transaction\n  Installing : wget-1.12-5.el6_6.1.x86_64                                   1/1\n  Verifying  : wget-1.12-5.el6_6.1.x86_64                                   1/1\n\nInstalled:\n  wget.x86_64 0:1.12-5.el6_6.1\n\nComplete!\n[root@vm02 ~]#\n"})}),"\n",(0,i.jsx)(n.h4,{id:"b-\u4e0b\u8f7d\u5e76\u5b89\u88c5-epel-\u6e90",children:"b. \u4e0b\u8f7d\u5e76\u5b89\u88c5 epel \u6e90"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0d\u540c CentOS \u7248\u672c\u7684 epel \u4e0b\u8f7d\u5730\u5740\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CentOS 5 : ",(0,i.jsx)(n.a,{href:"https://dl.fedoraproject.org/pub/epel/epel-release-latest-5.noarch.rpm",children:"https://dl.fedoraproject.org/pub/epel/epel-release-latest-5.noarch.rpm"})]}),"\n",(0,i.jsxs)(n.li,{children:["CentOS 6 : ",(0,i.jsx)(n.a,{href:"https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm",children:"https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm"})]}),"\n",(0,i.jsxs)(n.li,{children:["CentOS 7 : ",(0,i.jsx)(n.a,{href:"https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm",children:"https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u6b21\u8bd5\u9a8c\u7528\u5230\u7684 CentOS 6 \u6240\u4ee5\u6211\u4eec\u4e0b\u8f7d epel-release-latest-6.noarch.rpm"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[root@vm02 ~]# wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm\n--2016-03-18 11:47:17--  https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm\nResolving dl.fedoraproject.org... 209.132.181.26, 209.132.181.23, 209.132.181.24, ...\nConnecting to dl.fedoraproject.org|209.132.181.26|:443... connected.\nHTTP request sent, awaiting response... 200 OK\nLength: 14540 (14K) [application/x-rpm]\nSaving to: \u201cepel-release-latest-6.noarch.rpm\u201d\n\n100%[======================================>] 14,540      69.5K/s   in 0.2s\n\n2016-03-18 11:47:25 (69.5 KB/s) - \u201cepel-release-latest-6.noarch.rpm\u201d saved [14540/14540]\n\n[root@vm02 ~]# ls\nanaconda-ks.cfg                   install.log\nepel-release-latest-6.noarch.rpm  install.log.syslog\n"})}),"\n",(0,i.jsx)(n.h3,{id:"4-\u5b89\u88c5-vimlinux-\u4f7f\u7528\u6700\u5e7f\u6cdb\u7684\u6587\u4ef6\u7f16\u8f91\u5de5\u5177",children:"4. \u5b89\u88c5 vim\uff1aLinux \u4f7f\u7528\u6700\u5e7f\u6cdb\u7684\u6587\u4ef6\u7f16\u8f91\u5de5\u5177"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0e\u6211\u4eec\u957f\u4e45\u4f7f\u7528 Win \u73af\u5883\u4e0d\u540c\u7684\u662f\uff0c\u5728 Linux \u4e4b\u4e2d\uff0c\u6211\u4eec\u63a5\u89e6\u6700\u591a\u7684\u662f command line\uff0c\u6240\u4ee5\u719f\u7ec3\u4e00\u6b3e\u547d\u4ee4\u884c\u4e0b\u7684\u6587\u672c\u7f16\u8f91\u5de5\u5177\u662f\u4e00\u9879\u5fc5\u5907\u6280\u80fd\uff0c\u6211\u8fd9\u91cc\u63a8\u8350\u5927\u5bb6\uff1avim\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[root@vm02 ~]# yum install -y vim\nLoaded plugins: fastestmirror\nSetting up Install Process\nDetermining fastest mirrors\n * base: mirrors.aliyun.com\n * extras: mirrors.aliyun.com\n * updates: mirrors.aliyun.com\nResolving Dependencies\n--\x3e Running transaction check\n---\x3e Package vim-enhanced.x86_64 2:7.4.629-5.el6 will be installed\n--\x3e Processing Dependency: vim-common = 2:7.4.629-5.el6 for package: 2:vim-enhanced-7.4.629-5.el6.x86_64\n--\x3e Processing Dependency: perl(:MODULE_COMPAT_5.10.1) for package: 2:vim-enhanced-7.4.629-5.el6.x86_64\n--\x3e Processing Dependency: libperl.so()(64bit) for package: 2:vim-enhanced-7.4.629-5.el6.x86_64\n--\x3e Processing Dependency: libgpm.so.2()(64bit) for package: 2:vim-enhanced-7.4.629-5.el6.x86_64\n--\x3e Running transaction check\n---\x3e Package gpm-libs.x86_64 0:1.20.6-12.el6 will be installed\n---\x3e Package perl.x86_64 4:5.10.1-141.el6_7.1 will be installed\n--\x3e Processing Dependency: perl(version) for package: 4:perl-5.10.1-141.el6_7.1.x86_64\n--\x3e Processing Dependency: perl(Pod::Simple) for package: 4:perl-5.10.1-141.el6_7.1.x86_64\n--\x3e Processing Dependency: perl(Module::Pluggable) for package: 4:perl-5.10.1-141.el6_7.1.x86_64\n---\x3e Package perl-libs.x86_64 4:5.10.1-141.el6_7.1 will be installed\n---\x3e Package vim-common.x86_64 2:7.4.629-5.el6 will be installed\n--\x3e Processing Dependency: vim-filesystem for package: 2:vim-common-7.4.629-5.el6.x86_64\n--\x3e Running transaction check\n---\x3e Package perl-Module-Pluggable.x86_64 1:3.90-141.el6_7.1 will be installed\n---\x3e Package perl-Pod-Simple.x86_64 1:3.13-141.el6_7.1 will be installed\n--\x3e Processing Dependency: perl(Pod::Escapes) >= 1.04 for package: 1:perl-Pod-Simple-3.13-141.el6_7.1.x86_64\n---\x3e Package perl-version.x86_64 3:0.77-141.el6_7.1 will be installed\n---\x3e Package vim-filesystem.x86_64 2:7.4.629-5.el6 will be installed\n--\x3e Running transaction check\n---\x3e Package perl-Pod-Escapes.x86_64 1:1.04-141.el6_7.1 will be installed\n--\x3e Finished Dependency Resolution\n\nDependencies Resolved\n\n=============================================================================================================================================================================\n Package                                          Arch                              Version                                         Repository                          Size\n=============================================================================================================================================================================\nInstalling:\n vim-enhanced                                     x86_64                            2:7.4.629-5.el6                                 base                               1.0 M\nInstalling for dependencies:\n gpm-libs                                         x86_64                            1.20.6-12.el6                                   base                                28 k\n perl                                             x86_64                            4:5.10.1-141.el6_7.1                            updates                             10 M\n perl-Module-Pluggable                            x86_64                            1:3.90-141.el6_7.1                              updates                             40 k\n perl-Pod-Escapes                                 x86_64                            1:1.04-141.el6_7.1                              updates                             33 k\n perl-Pod-Simple                                  x86_64                            1:3.13-141.el6_7.1                              updates                            213 k\n perl-libs                                        x86_64                            4:5.10.1-141.el6_7.1                            updates                            579 k\n perl-version                                     x86_64                            3:0.77-141.el6_7.1                              updates                             52 k\n vim-common                                       x86_64                            2:7.4.629-5.el6                                 base                               6.7 M\n vim-filesystem                                   x86_64                            2:7.4.629-5.el6                                 base                                15 k\n\nTransaction Summary\n=============================================================================================================================================================================\nInstall      10 Package(s)\n\nTotal download size: 19 M\nInstalled size: 59 M\nDownloading Packages:\n(1/10): gpm-libs-1.20.6-12.el6.x86_64.rpm                                                                                                             |  28 kB     00:00\n(2/10): perl-5.10.1-141.el6_7.1.x86_64.rpm                                                                                                            |  10 MB     00:10\n(3/10): perl-Module-Pluggable-3.90-141.el6_7.1.x86_64.rpm                                                                                             |  40 kB     00:00\n(4/10): perl-Pod-Escapes-1.04-141.el6_7.1.x86_64.rpm                                                                                                  |  33 kB     00:00\n(5/10): perl-Pod-Simple-3.13-141.el6_7.1.x86_64.rpm                                                                                                   | 213 kB     00:00\n(6/10): perl-libs-5.10.1-141.el6_7.1.x86_64.rpm                                                                                                       | 579 kB     00:00\n(7/10): perl-version-0.77-141.el6_7.1.x86_64.rpm                                                                                                      |  52 kB     00:00\n(8/10): vim-common-7.4.629-5.el6.x86_64.rpm                                                                                                           | 6.7 MB     00:07\n(9/10): vim-enhanced-7.4.629-5.el6.x86_64.rpm                                                                                                         | 1.0 MB     00:01\n(10/10): vim-filesystem-7.4.629-5.el6.x86_64.rpm                                                                                                      |  15 kB     00:00\n-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------\nTotal                                                                                                                                        980 kB/s |  19 MB     00:19\nRunning rpm_check_debug\nRunning Transaction Test\nTransaction Test Succeeded\nRunning Transaction\n  Installing : 1:perl-Pod-Escapes-1.04-141.el6_7.1.x86_64                                                                                                               1/10\n  Installing : 1:perl-Module-Pluggable-3.90-141.el6_7.1.x86_64                                                                                                          2/10\n  Installing : 3:perl-version-0.77-141.el6_7.1.x86_64                                                                                                                   3/10\n  Installing : 4:perl-libs-5.10.1-141.el6_7.1.x86_64                                                                                                                    4/10\n  Installing : 1:perl-Pod-Simple-3.13-141.el6_7.1.x86_64                                                                                                                5/10\n  Installing : 4:perl-5.10.1-141.el6_7.1.x86_64                                                                                                                         6/10\n  Installing : 2:vim-filesystem-7.4.629-5.el6.x86_64                                                                                                                    7/10\n  Installing : 2:vim-common-7.4.629-5.el6.x86_64                                                                                                                        8/10\n  Installing : gpm-libs-1.20.6-12.el6.x86_64                                                                                                                            9/10\n  Installing : 2:vim-enhanced-7.4.629-5.el6.x86_64                                                                                                                     10/10\n  Verifying  : 1:perl-Pod-Simple-3.13-141.el6_7.1.x86_64                                                                                                                1/10\n  Verifying  : 1:perl-Pod-Escapes-1.04-141.el6_7.1.x86_64                                                                                                               2/10\n  Verifying  : gpm-libs-1.20.6-12.el6.x86_64                                                                                                                            3/10\n  Verifying  : 2:vim-enhanced-7.4.629-5.el6.x86_64                                                                                                                      4/10\n  Verifying  : 2:vim-filesystem-7.4.629-5.el6.x86_64                                                                                                                    5/10\n  Verifying  : 1:perl-Module-Pluggable-3.90-141.el6_7.1.x86_64                                                                                                          6/10\n  Verifying  : 2:vim-common-7.4.629-5.el6.x86_64                                                                                                                        7/10\n  Verifying  : 3:perl-version-0.77-141.el6_7.1.x86_64                                                                                                                   8/10\n  Verifying  : 4:perl-libs-5.10.1-141.el6_7.1.x86_64                                                                                                                    9/10\n  Verifying  : 4:perl-5.10.1-141.el6_7.1.x86_64                                                                                                                        10/10\n\nInstalled:\n  vim-enhanced.x86_64 2:7.4.629-5.el6\n\nDependency Installed:\n  gpm-libs.x86_64 0:1.20.6-12.el6           perl.x86_64 4:5.10.1-141.el6_7.1      perl-Module-Pluggable.x86_64 1:3.90-141.el6_7.1 perl-Pod-Escapes.x86_64 1:1.04-141.el6_7.1\n  perl-Pod-Simple.x86_64 1:3.13-141.el6_7.1 perl-libs.x86_64 4:5.10.1-141.el6_7.1 perl-version.x86_64 3:0.77-141.el6_7.1          vim-common.x86_64 2:7.4.629-5.el6\n  vim-filesystem.x86_64 2:7.4.629-5.el6\n\nComplete!\n[root@vm02 ~]#\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"4-\u5173\u95ed-selinux",children:"4. \u5173\u95ed SELinux"}),"\n",(0,i.jsx)(n.p,{children:"SELinux \u4e3b\u8981\u7531\u7f8e\u56fd\u56fd\u5bb6\u5b89\u5168\u5c40\u5f00\u53d1\uff0c\u5e76\u4e8e 2000 \u5e74 12 \u6708 22 \u65e5\u53d1\u884c\u7ed9\u5f00\u653e\u6e90\u4ee3\u7801\u7684\u5f00\u53d1\u793e\u533a\u3002SELinux \u65e8\u5728\u52a0\u5f3a\u8bbf\u95ee\u63a7\u5236\u67b6\u6784\u4ee5\u5bf9\u4ed8\u5165\u4fb5\u7684\u5a01\u80c1\u6216\u4efb\u4f55\u4f01\u56fe\u7565\u8fc7\u5b89\u5168\u67b6\u6784\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u4e14\u4ece 2.6 \u7248\u7684 Linux \u6838\u5fc3\u5c31\u5f00\u59cb\u96c6\u6210 SELinux\uff1b\u4f46\u662f SELinux \u4e25\u683c\u7684\u6743\u9650\u63a7\u5236\u5bf9\u4e8e\u521d\u5b66\u8005\u6765\u8bf4\u5e76\u4e0d\u662f\u975e\u5e38\u5fc5\u8981\uff0c\u6240\u4ee5\u6211\u4eec\u5efa\u8bae\u5173\u95ed SELinux\uff0c[\u5176\u5b9e\u7531\u4e8e SELinux \u7684\u590d\u6742\u6027\uff0c\u5f88\u591a\u8fd0\u7ef4\u4eba\u5458\u90fd\u662f\u9009\u62e9\u5173\u95ed\u5b83\uff0c\u719f\u6089\u963f\u91cc\u4e91 ECS \u7684\u540c\u5b66\u53ef\u80fd\u77e5\u9053\uff0c\u5b83\u662f\u9ed8\u8ba4\u5173\u95ed SELinux \u7684\uff0c\u4f46\u662f\u6211\u4eec\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u5173\u95ed SELinux\u3002]"}),"\n",(0,i.jsx)(n.p,{children:"SELinux \u7684\u914d\u7f6e\u6587\u4ef6\u4e3b\u8981\u7531\u4e24\u4e2a\uff1a/etc/sysconfig/selinux\u3001 /etc/selinux/config\uff0c\u5176\u5b9e\u7b2c\u4e00\u4e2a\u662f\u7b2c\u4e8c\u4e2a\u8def\u5f84\u7684\u8f6f\u94fe\u63a5\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[root@vm02 ~]# vim /etc/selinux/config\n# This file controls the state of SELinux on the system.\n# SELINUX= can take one of these three values:\n#     enforcing - SELinux security policy is enforced.\n#     permissive - SELinux prints warnings instead of enforcing.\n#     disabled - No SELinux policy is loaded.\nSELINUX=enforcing\n# SELINUXTYPE= can take one of these two values:\n#     targeted - Targeted processes are protected,\n#     mls - Multi Level Security protection.\nSELINUXTYPE=targeted\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"SELinux \u7684\u72b6\u6001\u6a21\u5f0f\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"enforcing : \u5f3a\u5236\u542f\u7528 SELinux"}),"\n",(0,i.jsx)(n.li,{children:"permissive : \u53ea\u663e\u793a\u8b66\u544a\u8baf\u606f\u4ee5\u66ff\u4ee3\u5f3a\u5236\u542f\u7528 SELinux"}),"\n",(0,i.jsx)(n.li,{children:"disabled : \u505c\u7528 SELinux"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Tips: SELinux \u7684\u53c2\u6570\u53ea\u80fd\u5728\u91cd\u542f\u540e\u751f\u6548\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"SELinux \u5e38\u7528\u7684\u4e24\u4e2a\u547d\u4ee4\uff1agetenforce setenforce :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"getenforce \u83b7\u5f97 SELinux \u5f53\u524d\u7684\u72b6\u6001\uff0c\u8fd4\u56de\u503c\u4e3a\u5982\u4e0a\u4e09\u79cd\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"setenforce \u4e34\u65f6\u6539\u53d8 SELinux \u7684\u72b6\u6001\uff0c\u53c2\u6570\u4e3a\u5e03\u5c14\u503c\uff0c0 \u662f\u5173\u95ed\uff0c1 \u662f\u5f00\u542f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Tips: \u72b6\u6001\u5df2\u7ecf\u4e3a disabled \u65f6\uff0c\u65e0\u6cd5\u4f7f\u7528 setenforce 1 \u542f\u7528\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"5",children:"5"}),"\n",(0,i.jsx)(n.h3,{id:"6",children:"6"}),"\n",(0,i.jsx)(n.h3,{id:"7",children:"7"}),"\n",(0,i.jsx)(n.h3,{id:"8",children:"8"})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},4552:(e,n,l)=>{l.d(n,{I:()=>t,M:()=>a});var i=l(11504);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);