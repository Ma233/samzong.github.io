"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[70772],{6453:(e,n,p)=>{p.r(n),p.d(n,{assets:()=>m,contentTitle:()=>t,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=p(17624),i=p(4552);const l={title:"\u5982\u4f55\u5728 CentOS 6 \u5b89\u88c5\u66f4\u9ad8\u7248\u672c\u7684 PHP",tags:["CentOS"],date:new Date("2016-04-01T14:57:45.000Z")},t=void 0,a={permalink:"/2016/04/01/ru-he-zai-centos-6-an-zhuang-geng-gao-ban-ben-de-php",source:"@site/blog/2016-04-01-ru-he-zai-centos-6-an-zhuang-geng-gao-ban-ben-de-php.md",title:"\u5982\u4f55\u5728 CentOS 6 \u5b89\u88c5\u66f4\u9ad8\u7248\u672c\u7684 PHP",description:"CentOS 6 \u9ed8\u8ba4\u5b89\u88c5\u7684 PHP \u7248\u672c\u662f 5.3\uff0c\u4f46\u73b0\u5728\u5f88\u591a\u5e94\u7528\u5bf9\u4e8e LAMP \u4e2d\uff0cPHP \u7684\u7248\u672c\u6700\u4f4e 5.4\uff0c\u6240\u4ee5\u672c\u7bc7\u6587\u7ae0\u7684\u4e3b\u8981\u5185\u5bb9\u662f\uff0c\u5982\u4f55\u5347\u7ea7 PHP5.3 \u5230 5.4 \u4ee5\u53ca\u66f4\u9ad8\u7248\u672c",date:"2016-04-01T14:57:45.000Z",formattedDate:"April 1, 2016",tags:[{label:"CentOS",permalink:"/tags/cent-os"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u5982\u4f55\u5728 CentOS 6 \u5b89\u88c5\u66f4\u9ad8\u7248\u672c\u7684 PHP",tags:["CentOS"],date:"2016-04-01T14:57:45.000Z"},unlisted:!1,prevItem:{title:"MacTips \u89e3\u51b3 oh-my-zsh \u5728 Terminal \u4e0b\u6253\u5f00\u7f13\u6162",permalink:"/2016/04/08/mac-2-jie-jue-oh-my-zsh-zai-zhong-duan-xia-da-kai-huan-man"},nextItem:{title:"MySQL \u6570\u636e\u5e93\u4f7f\u7528\u57fa\u7840",permalink:"/2016/03/29/mysql-4-mysql-shu-ju-ku-ji-chu"}},m={authorsImageUrls:[]},s=[{value:"\u5b9e\u9a8c\u73af\u5883\uff1aCentOS 6.4",id:"\u5b9e\u9a8c\u73af\u5883centos-64",level:2},{value:"\u5b89\u88c5 Remi \u6e90",id:"\u5b89\u88c5-remi-\u6e90",level:3},{value:"2. \u6211\u4eec\u770b\u4e0b Remi \u7684\u7684 yum \u914d\u7f6e\u6587\u4ef6",id:"2-\u6211\u4eec\u770b\u4e0b-remi-\u7684\u7684-yum-\u914d\u7f6e\u6587\u4ef6",level:4},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:4},{value:"php 5.5 \u548c php5.6",id:"php-55-\u548c-php56",level:4},{value:"5. php 7",id:"5-php-7",level:4}];function o(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"CentOS 6 \u9ed8\u8ba4\u5b89\u88c5\u7684 PHP \u7248\u672c\u662f 5.3\uff0c\u4f46\u73b0\u5728\u5f88\u591a\u5e94\u7528\u5bf9\u4e8e LAMP \u4e2d\uff0cPHP \u7684\u7248\u672c\u6700\u4f4e 5.4\uff0c\u6240\u4ee5\u672c\u7bc7\u6587\u7ae0\u7684\u4e3b\u8981\u5185\u5bb9\u662f\uff0c\u5982\u4f55\u5347\u7ea7 PHP5.3 \u5230 5.4 \u4ee5\u53ca\u66f4\u9ad8\u7248\u672c"}),"\n",(0,r.jsx)(n.h2,{id:"\u5b9e\u9a8c\u73af\u5883centos-64",children:"\u5b9e\u9a8c\u73af\u5883\uff1aCentOS 6.4"}),"\n",(0,r.jsx)(n.p,{children:"\u89e3\u51b3\u529e\u6cd5\u662f\u91c7\u7528\u4e86 remi \u6e90\u4ed3\u5e93\u5df2\u7ecf\u9002\u914d\u7684\u76f8\u5e94 php \u7248\u672c"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u7ecf\u8fc7\u6d4b\u8bd5\uff0c\u8be5\u5347\u7ea7\u529e\u6cd5\u540c\u6837\u9002\u7528\u76ee\u524d CentOS 6.x \u6240\u6709\u7248\u672c"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5b89\u88c5-remi-\u6e90",children:"\u5b89\u88c5 Remi \u6e90"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u56e0\u4e3aremi\u4f9d\u8d56epel\u6e90\u4ed3\u5e93\uff0c\u6240\u6709\u6211\u4eec\u8981\u5148\u5b89\u88c5\u5b83\u3002\n[root@visionet8 ~]# yum install -y epel-release\n\n[root@visionet8 ~]# wget http://rpms.famillecollet.com/enterprise/remi-release-6.rpm\n[root@visionet8 ~]# rpm -Uvh remi-release-6.rpm\n"})}),"\n",(0,r.jsx)(n.h4,{id:"2-\u6211\u4eec\u770b\u4e0b-remi-\u7684\u7684-yum-\u914d\u7f6e\u6587\u4ef6",children:"2. \u6211\u4eec\u770b\u4e0b Remi \u7684\u7684 yum \u914d\u7f6e\u6587\u4ef6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Repository: http://rpms.remirepo.net/\n# Blog:       http://blog.remirepo.net/\n# Forum:      http://forum.remirepo.net/\n\n[remi]\nname=Remi\'s RPM repository for Enterprise Linux 6 - $basearch\nbaseurl=http://rpms.remirepo.net/enterprise/6/remi/$basearch/\n#mirrorlist=http://rpms.remirepo.net/enterprise/6/remi/mirror\nenabled=1\ngpgcheck=0\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-remi\n\n[remi-php55]\nname=Remi\'s PHP 5.5 RPM repository for Enterprise Linux 6 - $basearch\n#baseurl=http://rpms.remirepo.net/enterprise/6/php55/$basearch/\nmirrorlist=http://rpms.remirepo.net/enterprise/6/php55/mirror\n# NOTICE: common dependencies are in "remi-safe"\nenabled=0\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-remi\n\n[remi-php56]\nname=Remi\'s PHP 5.6 RPM repository for Enterprise Linux 6 - $basearch\n#baseurl=http://rpms.remirepo.net/enterprise/6/php56/$basearch/\nmirrorlist=http://rpms.remirepo.net/enterprise/6/php56/mirror\n# NOTICE: common dependencies are in "remi-safe"\nenabled=0\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-remi\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u7ecf\u8fc7\u6d4b\u8bd5\uff0c\u542f\u7528 remi \u6e90\u4e4b\u540e\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b php \u7248\u672c\u4e3a 5.4\uff0c\u8fd9\u65f6\u6211\u4eec\u53ea\u9700\u8981\u5347\u7ea7 php \u5373\u53ef\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[root@visionet8 html]# yum update -y php*\nFailed to set locale, defaulting to C\nLoaded plugins: fastestmirror, refresh-packagekit, security\nLoading mirror speeds from cached hostfile\n * base: mirrors.163.com\n * epel: mirrors.ustc.edu.cn\n * extras: mirrors.aliyun.com\n * remi-safe: mirrors.tuna.tsinghua.edu.cn\n * updates: mirrors.cn99.com\nremi                                                                               | 2.9 kB     00:00\nremi/primary_db                                                                    | 1.6 MB     00:05\nSetting up Update Process\nResolving Dependencies\n--\x3e Running transaction check\n---\x3e Package php.x86_64 0:5.3.3-48.el6_8 will be updated\n---\x3e Package php.x86_64 0:5.4.45-12.el6.remi will be an update\n---\x3e Package php-cli.x86_64 0:5.3.3-48.el6_8 will be updated\n---\x3e Package php-cli.x86_64 0:5.4.45-12.el6.remi will be an update\n---\x3e Package php-common.x86_64 0:5.3.3-48.el6_8 will be updated\n---\x3e Package php-common.x86_64 0:5.4.45-12.el6.remi will be an update\n---\x3e Package php-gd.x86_64 0:5.3.3-48.el6_8 will be updated\n---\x3e Package php-gd.x86_64 0:5.4.45-12.el6.remi will be an update\n--\x3e Processing Dependency: libt1.so.5()(64bit) for package: php-gd-5.4.45-12.el6.remi.x86_64\n---\x3e Package php-mcrypt.x86_64 0:5.3.3-4.el6 will be updated\n---\x3e Package php-mcrypt.x86_64 0:5.4.45-12.el6.remi will be an update\n---\x3e Package php-mysql.x86_64 0:5.3.3-48.el6_8 will be updated\n---\x3e Package php-mysql.x86_64 0:5.4.45-12.el6.remi will be an update\n---\x3e Package php-pdo.x86_64 0:5.3.3-48.el6_8 will be updated\n---\x3e Package php-pdo.x86_64 0:5.4.45-12.el6.remi will be an update\n--\x3e Running transaction check\n---\x3e Package t1lib.x86_64 0:5.1.2-6.el6_2.1 will be installed\n--\x3e Finished Dependency Resolution\n\nDependencies Resolved\n\n==========================================================================================================\n Package                  Arch                 Version                           Repository          Size\n==========================================================================================================\nUpdating:\n php                      x86_64               5.4.45-12.el6.remi                remi               2.8 M\n php-cli                  x86_64               5.4.45-12.el6.remi                remi               4.1 M\n php-common               x86_64               5.4.45-12.el6.remi                remi               968 k\n php-gd                   x86_64               5.4.45-12.el6.remi                remi               152 k\n php-mcrypt               x86_64               5.4.45-12.el6.remi                remi                60 k\n php-mysql                x86_64               5.4.45-12.el6.remi                remi               145 k\n php-pdo                  x86_64               5.4.45-12.el6.remi                remi               129 k\nInstalling for dependencies:\n t1lib                    x86_64               5.1.2-6.el6_2.1                   base               160 k\n\nTransaction Summary\n==========================================================================================================\nInstall       1 Package(s)\nUpgrade       7 Package(s)\n\nTotal download size: 8.5 M\nDownloading Packages:\n(1/8): php-5.4.45-12.el6.remi.x86_64.rpm                                           | 2.8 MB     00:07\n(2/8): php-cli-5.4.45-12.el6.remi.x86_64.rpm                                       | 4.1 MB     00:06\n(3/8): php-common-5.4.45-12.el6.remi.x86_64.rpm                                    | 968 kB     00:02\n(4/8): php-gd-5.4.45-12.el6.remi.x86_64.rpm                                        | 152 kB     00:01\n(5/8): php-mcrypt-5.4.45-12.el6.remi.x86_64.rpm                                    |  60 kB     00:00\n(6/8): php-mysql-5.4.45-12.el6.remi.x86_64.rpm                                     | 145 kB     00:00\n(7/8): php-pdo-5.4.45-12.el6.remi.x86_64.rpm                                       | 129 kB     00:01\n(8/8): t1lib-5.1.2-6.el6_2.1.x86_64.rpm                                            | 160 kB     00:00\n----------------------------------------------------------------------------------------------------------\nTotal                                                                     338 kB/s | 8.5 MB     00:25\nRunning rpm_check_debug\nRunning Transaction Test\nTransaction Test Succeeded\nRunning Transaction\nWarning: RPMDB altered outside of yum.\n  Updating   : php-common-5.4.45-12.el6.remi.x86_64                                                  1/15\n  Updating   : php-cli-5.4.45-12.el6.remi.x86_64                                                     2/15\n  Updating   : php-pdo-5.4.45-12.el6.remi.x86_64                                                     3/15\n  Installing : t1lib-5.1.2-6.el6_2.1.x86_64                                                          4/15\n  Updating   : php-gd-5.4.45-12.el6.remi.x86_64                                                      5/15\n  Updating   : php-mysql-5.4.45-12.el6.remi.x86_64                                                   6/15\n  Updating   : php-5.4.45-12.el6.remi.x86_64                                                         7/15\n  Updating   : php-mcrypt-5.4.45-12.el6.remi.x86_64                                                  8/15\n  Cleanup    : php-5.3.3-48.el6_8.x86_64                                                             9/15\n  Cleanup    : php-mysql-5.3.3-48.el6_8.x86_64                                                      10/15\n  Cleanup    : php-pdo-5.3.3-48.el6_8.x86_64                                                        11/15\n  Cleanup    : php-cli-5.3.3-48.el6_8.x86_64                                                        12/15\n  Cleanup    : php-gd-5.3.3-48.el6_8.x86_64                                                         13/15\n  Cleanup    : php-mcrypt-5.3.3-4.el6.x86_64                                                        14/15\n  Cleanup    : php-common-5.3.3-48.el6_8.x86_64                                                     15/15\n  Verifying  : php-mcrypt-5.4.45-12.el6.remi.x86_64                                                  1/15\n  Verifying  : t1lib-5.1.2-6.el6_2.1.x86_64                                                          2/15\n  Verifying  : php-common-5.4.45-12.el6.remi.x86_64                                                  3/15\n  Verifying  : php-gd-5.4.45-12.el6.remi.x86_64                                                      4/15\n  Verifying  : php-cli-5.4.45-12.el6.remi.x86_64                                                     5/15\n  Verifying  : php-pdo-5.4.45-12.el6.remi.x86_64                                                     6/15\n  Verifying  : php-mysql-5.4.45-12.el6.remi.x86_64                                                   7/15\n  Verifying  : php-5.4.45-12.el6.remi.x86_64                                                         8/15\n  Verifying  : php-5.3.3-48.el6_8.x86_64                                                             9/15\n  Verifying  : php-gd-5.3.3-48.el6_8.x86_64                                                         10/15\n  Verifying  : php-cli-5.3.3-48.el6_8.x86_64                                                        11/15\n  Verifying  : php-pdo-5.3.3-48.el6_8.x86_64                                                        12/15\n  Verifying  : php-common-5.3.3-48.el6_8.x86_64                                                     13/15\n  Verifying  : php-mysql-5.3.3-48.el6_8.x86_64                                                      14/15\n  Verifying  : php-mcrypt-5.3.3-4.el6.x86_64                                                        15/15\n\nDependency Installed:\n  t1lib.x86_64 0:5.1.2-6.el6_2.1\n\nUpdated:\n  php.x86_64 0:5.4.45-12.el6.remi                      php-cli.x86_64 0:5.4.45-12.el6.remi\n  php-common.x86_64 0:5.4.45-12.el6.remi               php-gd.x86_64 0:5.4.45-12.el6.remi\n  php-mcrypt.x86_64 0:5.4.45-12.el6.remi               php-mysql.x86_64 0:5.4.45-12.el6.remi\n  php-pdo.x86_64 0:5.4.45-12.el6.remi\n\nComplete!\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u6d4b\u8bd5",children:"\u6d4b\u8bd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[root@visionet8 html]# php -v\nPHP 5.4.45 (cli) (built: Sep 19 2016 15:31:07)\nCopyright (c) 1997-2014 The PHP Group\nZend Engine v2.4.0, Copyright (c) 1998-2014 Zend Technologies\n"})}),"\n",(0,r.jsx)(n.h4,{id:"php-55-\u548c-php56",children:"php 5.5 \u548c php5.6"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u82e5\u8981\u5347\u7ea7\u5230 5.5 \u6216 5.6\uff0c\u6839\u636e remi \u6e90\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5c06 php5.5 \u7684 enable \u53c2\u6570\u8bbe\u7f6e\u4e3a 1\uff0c\u5e76\u5c06\u9ed8\u8ba4 enable \u4fee\u6539\u4e3a 0\uff0c\u7136\u540e",(0,r.jsx)(n.code,{children:"yum update php*"}),"\u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"5-php-7",children:"5. php 7"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\u53d1\u73b0\uff0c\u5728\u5b89\u88c5 remi \u6e90\u4e4b\u540e\uff0c\u5728",(0,r.jsx)(n.code,{children:"/etc/yum.repos.d"}),"\u9664\u4e86",(0,r.jsx)(n.code,{children:"remi.repo"}),"\u4e4b\u5916\uff0c\u8fd8\u6709",(0,r.jsx)(n.code,{children:"remi-php70.repo"}),"\u548c",(0,r.jsx)(n.code,{children:"remi-php71.repo"}),"\uff0c\u6d4b\u8bd5\u4e0b\uff0c\u5982\u679c\u8981\u5347\u7ea7\u5230 php7\uff0c\u53ef\u4ee5\u6253\u5f00\u76f8\u5e94\u6e90\u4ed3\u5e93\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4e4b\u540e\u5347\u7ea7\u5373\u53ef\u3002\n",(0,r.jsx)(n.strong,{children:"\u4ee5\u4e0a\u529f\u80fd\u5728\u5347\u7ea7\u65f6\uff0c\u8981\u8003\u8651\u5176\u4ed6\u7ec4\u4ef6\u7684\u7248\u672c\u517c\u5bb9\u6027\uff0c\u4e0d\u8981\u76f2\u76ee\u5347\u7ea7\u3002"})]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},4552:(e,n,p)=>{p.d(n,{I:()=>a,M:()=>t});var r=p(11504);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);