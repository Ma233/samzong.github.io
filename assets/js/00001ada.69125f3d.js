"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[12583],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>h});var o=t(67294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,c=function(e,n){if(null==e)return{};var t,o,c={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var d=o.createContext({}),l=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},i=function(e){var n=l(e.components);return o.createElement(d.Provider,{value:n},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,c=e.mdxType,s=e.originalType,d=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),p=l(t),u=c,h=p["".concat(d,".").concat(u)]||p[u]||k[u]||s;return t?o.createElement(h,a(a({ref:n},i),{},{components:t})):o.createElement(h,a({ref:n},i))}));function h(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var s=t.length,a=new Array(s);a[0]=u;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r[p]="string"==typeof e?e:c,a[1]=r;for(var l=2;l<s;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>k,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=t(87462),c=(t(67294),t(3905));const s={title:"HowTo Use Docker create a Tomcat Project",tags:["Docker"],date:new Date("2016-08-02T15:44:20.000Z")},a=void 0,r={permalink:"/2016/08/02/HowTo-Use-Docker-create-a-Tomcat-Project",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2016-08-02-HowTo-Use-Docker-create-a-Tomcat-Project.md",source:"@site/blog/2016-08-02-HowTo-Use-Docker-create-a-Tomcat-Project.md",title:"HowTo Use Docker create a Tomcat Project",description:"1. \u5b89\u88c5 CentOS 7.x",date:"2016-08-02T15:44:20.000Z",formattedDate:"2016\u5e748\u67082\u65e5",tags:[{label:"Docker",permalink:"/tags/docker"}],readingTime:3.796666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Use Docker create a Tomcat Project",tags:["Docker"],date:"2016-08-02T15:44:20.000Z"},prevItem:{title:"HowTo Install Openfire  on CentOS",permalink:"/2016/08/02/HowTo-Install-Openfire-on-CentOS"},nextItem:{title:"\u4f60\u597d\uff0c\u516b\u6708",permalink:"/2016/08/01/ni-hao-ba-yue"}},d={authorsImageUrls:[]},l=[{value:"1. \u5b89\u88c5 CentOS 7.x",id:"1-\u5b89\u88c5-centos-7x",level:2},{value:"2. \u5b89\u88c5 docker",id:"2-\u5b89\u88c5-docker",level:2},{value:"3. \u57fa\u7840 docker \u547d\u4ee4",id:"3-\u57fa\u7840-docker-\u547d\u4ee4",level:2},{value:"4. \u8fd0\u884c\u4e00\u4e2a docker \u955c\u50cf",id:"4-\u8fd0\u884c\u4e00\u4e2a-docker-\u955c\u50cf",level:2},{value:"\u8fdb\u5165\u4ea4\u4e92\u5f0f\u7a0b\u5e8f",id:"\u8fdb\u5165\u4ea4\u4e92\u5f0f\u7a0b\u5e8f",level:3},{value:"5. \u7f16\u8f91 Dockerfile",id:"5-\u7f16\u8f91-dockerfile",level:2},{value:"6. \u751f\u6210\u81ea\u5b9a\u4e49 docker \u955c\u50cf",id:"6-\u751f\u6210\u81ea\u5b9a\u4e49-docker-\u955c\u50cf",level:2},{value:"7. ssh \u767b\u9646\u5230 docker \u5bb9\u5668\u5185\uff0c\u90e8\u7f72\u9879\u76ee\u73af\u5883",id:"7-ssh-\u767b\u9646\u5230-docker-\u5bb9\u5668\u5185\u90e8\u7f72\u9879\u76ee\u73af\u5883",level:2},{value:"8. \u63a8\u9001 centos:centos6-tomcat \u5230\u79c1\u6709 docker \u4ed3\u5e93",id:"8-\u63a8\u9001-centoscentos6-tomcat-\u5230\u79c1\u6709-docker-\u4ed3\u5e93",level:2}],i={toc:l},p="wrapper";function k(e){let{components:n,...t}=e;return(0,c.kt)(p,(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"1-\u5b89\u88c5-centos-7x"},"1. \u5b89\u88c5 CentOS 7.x"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\u7565\u3002\n")),(0,c.kt)("h2",{id:"2-\u5b89\u88c5-docker"},"2. \u5b89\u88c5 docker"),(0,c.kt)("p",null,"\u8be6\u89c1\uff1a ",(0,c.kt)("a",{parentName:"p",href:"https://samzong.me/2016/07/07/HowTo-Install-Docker-on-CentOS-6-x/"},"How to Install Docker on CentOS 6.x")),(0,c.kt)("h2",{id:"3-\u57fa\u7840-docker-\u547d\u4ee4"},"3. \u57fa\u7840 docker \u547d\u4ee4"),(0,c.kt)("p",null,"\u83b7\u53d6 centos6 docker \u955c\u50cf"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"root@docker ~ docker pull centos6\nUsing default tag: latest\nlatest: Pulling from library/centos:centos6\n\n43db9dbdcb30: Downloading 41.14 MB/49.33 MB\n43db9dbdcb30: Pull complete\n2dc64e8f8d4f: Pull complete\n670a583e1b50: Pull complete\n183b0bfcd10e: Pull complete\nDigest: sha256:c6674c44c6439673bf56536c1a15916639c47ea04c3d6296c5df938add67b54b\nStatus: Downloaded newer image for centso:centos6\n")),(0,c.kt)("p",null,"\u67e5\u770b\u5f53\u524d\u670d\u52a1\u5668\u4e0a\u7684 docker \u955c\u50cf"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"[root@docker ~]# docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\ncentos6-visionet    latest              aeed37612ecb        6 hours ago         1.916 GB\ncentos              centos6             a3c09d36ab4a        2 days ago          194.6 MB\nregistry            latest              c6c14b3960bd        3 days ago          33.28 MB\n")),(0,c.kt)("p",null,"\u67e5\u627e docker \u955c\u50cf"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"[root@docker ~]# docker search centos:centos6\nNAME                                     DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED\nimagine10255/centos6-lnmp-php56          centos6-lnmp-php56                              10                   [OK]\nlemonbar/centos6-ssh                     Installed openssh-server on centos6, defau...   7                    [OK]\nsergeyzh/centos6-nginx                                                                   2                    [OK]\nguyton/centos6                           From official centos6 container with full ...   2                    [OK]\npaijp/centos6-apache-php-sqlite2         php5.3.3 with sqlite2 and apache on CentOS...   1                    [OK]\nedrans/centos6                                                                           1                    [OK]\nmohri1219/centos6.7-ruby2.2.2-mysql5.6   centos6.7-ruby2.2.2-mysql5.6                    1                    [OK]\n")),(0,c.kt)("p",null,"\u5220\u9664 centos6 docker \u955c\u50cf"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"[root@docker ~]# docker rmi IMAGES_NAME\n[root@docker ~]# docker rmi centos:centos6\n")),(0,c.kt)("p",null,"\u62a5\u9519\u5982\u4e0b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},'Error response from daemon: conflict: unable to remove repository reference "centos" (must force) - container 705a30cbc002 is using its referenced image 42118e3df429\n')),(0,c.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u4e4b\u95f4\u7684\u8fd0\u884c\u7684\u8fdb\u7a0b\u6ca1\u6709\u6e05\u695a\u5bfc\u81f4\u8be5 images \u6b63\u5728\u4f7f\u7528\u4e2d\uff0c\u4f7f\u7528\u4e00\u4e0b\u547d\u4ee4\u67e5\u770b\u5360\u6709\u7684\u8fdb\u7a0b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'[root@docker ~]# docker ps -a \uff03 \u67e5\u770b\u6240\u6709\u7684docker\u8fdb\u7a0b\nCONTAINER ID        IMAGE               COMMAND               CREATED             STATUS                     PORTS               NAMES\n705a30cbc002        centos:centos6              "/bin/bash"           6 minutes ago       Exited (0) 6 minutes ago                       centos6\n[root@docker ~]# docker rm 705a30cbc002\n705a30cbc002\n[root@docker ~]# docker rmi centos:centos6\nUntagged: centos:centos6\nDeleted: sha256:42118e3df429f09ca581a9deb3df274601930e428e452f7e4e9f1833c56a100a\nDeleted: sha256:d72d0199021776e77ac14a764a3decd156e9f6f18b37e25b867b0f1ca42fb3d9\nDeleted: sha256:fb178c6cea1453d089ce033b96eba0efdb42274138e042517ea2d5ea7bb51665\nDeleted: sha256:8945af30572845a904adce2aeaf73402c842d86e99e8f10688b25cb27834110b\nDeleted: sha256:ea9f151abb7e06353e73172dad421235611d4f6d0560ec95db26e0dc240642c1\n')),(0,c.kt)("h2",{id:"4-\u8fd0\u884c\u4e00\u4e2a-docker-\u955c\u50cf"},"4. \u8fd0\u884c\u4e00\u4e2a docker \u955c\u50cf"),(0,c.kt)("h3",{id:"\u8fdb\u5165\u4ea4\u4e92\u5f0f\u7a0b\u5e8f"},"\u8fdb\u5165\u4ea4\u4e92\u5f0f\u7a0b\u5e8f"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"[root@docker ~]# docker run  -it centos:centos6 /bin/bash\n[root@c1d190f95562 /]# cat /etc/redhat-release\nCentOS release 6.8 (Final)\n\n# Install openssh-server and httpd\n\nroot@d8c122dbe09d:/# yum install -y openssh-sever httpd\nroot@d8c122dbe09d:/# exit\n\n# \u6ce8\u610f\u5f53\u4f60\u6267\u884c exit\uff0c\u4ece\u5bb9\u5668\u4e4b\u4e2d\u9000\u51fa\u65f6\uff0c\u5bb9\u5668\u4e5f\u4f1a\u968f\u7740\u5173\u95ed\uff0c\u8fd9\u65f6\u5982\u679c\u8fd8\u7ee7\u7eed\u6267\u884c\u4e0a\u6761\u547d\u4ee4\n\n# \u4f60\u4f1a\u53d1\u73b0\u4e4b\u524d\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u88ab\u8fd8\u539f\uff0c\u56e0\u4e3a\u76f8\u5bf9\u4e8e docker\uff0c\u53c8\u662f\u65b0\u5f00\u4e86\u4e00\u4e2a\u8fdb\u7a0b\n\n# \u5728 exit \u9000\u51fa\u4e4b\u540e\uff0c\u4f7f\u7528\u4e00\u4e0b\u547d\u4ee4\u67e5\u770b\u4e0a\u6b21\u63d0\u4ea4\uff0c\u7136\u540e commit \u4fee\u6539\uff0c\u4fbf\u53ef\u4fdd\u5b58\u4e4b\u524d\u7684\u4fee\u6539\n\n[root@docker ~]# docker ps -l\n[root@docker ~]# docker commit c1d190f95562 centos:centos6-httpd\nsha256:77eb12e36c7bbe9ef874555b1873019022b5258740aa731627e2cd6fa749c325\n[root@docker ~]# docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\ncentos              centos6-httpd       77eb12e36c7b        3 seconds ago       290.3 MB\ncentos6-visionet    latest              aeed37612ecb        6 hours ago         1.916 GB\ncentos              centos6             a3c09d36ab4a        2 days ago          194.6 MB\nregistry            latest              c6c14b3960bd        3 days ago          33.28 MB\n")),(0,c.kt)("h2",{id:"5-\u7f16\u8f91-dockerfile"},"5. \u7f16\u8f91 Dockerfile"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-conf"},'# dockfile \u7684\u7b2c\u4e00\u884c\u4e00\u5b9a\u662f FROM\uff0c\u6307\u5b9a\u4e86\u7236\u955c\u50cf\n\nFROM centos:centos6\n\n# RUN \u6307\u7684\u662f\u8fd0\u884c\u7684\u547d\u4ee4\n\nRUN yum install -y epel-release\nRUN yum install -y bash-completion\nRUN yum install -y openssh-server openssh-client sudo\nRUN sed -i \'s/UsePAM yes/UsePAM no/g\' /etc/ssh/sshd_config\nRUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\n\n# \u589e\u52a0\u4e00\u4e2a\u7528\u6237\uff0c\u5e76\u8d4b\u4e88 sudo \u6743\u9650\n\nRUN useradd visionet\nRUN echo "visionet:visionet" | chpasswd\nRUN echo "visionet   ALL=(ALL)       ALL" >> /etc/sudoers\n\n\uff03 \u6ce8\u610f\uff0c\u5982\u679c\u6ca1\u6709\u6267\u884c\u4e00\u4e0b\u4e24\u4e2a\u547d\u4ee4\uff0csshd \u662f\u65e0\u6cd5\u8fdc\u7a0b\u767b\u9646\u7684\nRUN ssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key\nRUN ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key\n\n\uff03 EXPOSE 22\uff0c\u5c06 22 \u7aef\u53e3\u66b4\u9732\u51fa\u6765\uff0c\u65b9\u4fbf ssh \u8fdc\u7a0b\u8fde\u63a5\nRUN mkdir /var/run/sshd\nEXPOSE 22\n\uff03 CMD \u4e3a\u7cfb\u7edf\u5185\u90e8\u6267\u884c\u547d\u4ee4\nCMD ["/usr/sbin/sshd", "-D"]\n')),(0,c.kt)("h2",{id:"6-\u751f\u6210\u81ea\u5b9a\u4e49-docker-\u955c\u50cf"},"6. \u751f\u6210\u81ea\u5b9a\u4e49 docker \u955c\u50cf"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'# build \u7f16\u8bd1\u955c\u50cf\n\n[root@docker ~]# docker build -f dockerfile3 -t centos:centos6-ssh .\nSending build context to Docker daemon 44.54 kB\nStep 1 : FROM centos:centos6\n ---\x3e a3c09d36ab4a\nStep 2 : RUN yum install -y epel-release\n ---\x3e Using cache\n ---\x3e 04d81f280a63\nStep 3 : RUN yum install -y bash-completion\n ---\x3e Using cache\n ---\x3e 5ca26894dc9d\nStep 4 : RUN yum install -y openssh-server openssh-client sudo\n ---\x3e Using cache\n ---\x3e 42278450311e\nStep 5 : RUN sed -i \'s/UsePAM yes/UsePAM no/g\' /etc/ssh/sshd_config\n ---\x3e Using cache\n ---\x3e db35bef562a2\nStep 6 : RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\n ---\x3e Using cache\n ---\x3e dc9f2b82e198\nStep 7 : RUN useradd visionet\n ---\x3e Using cache\n ---\x3e 06c574a51755\nStep 8 : RUN echo "visionet:visionet" | chpasswd\n ---\x3e Using cache\n ---\x3e 03412f053d04\nStep 9 : RUN echo "visionet   ALL=(ALL)       ALL" >> /etc/sudoers\n ---\x3e Using cache\n ---\x3e bf8476812a62\nStep 10 : RUN ssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key\n ---\x3e Using cache\n ---\x3e 2314cce75171\nStep 11 : RUN ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key\n ---\x3e Using cache\n ---\x3e 99304cd9ac15\nStep 12 : RUN mkdir /var/run/sshd\n ---\x3e Using cache\n ---\x3e f87283751553\nStep 13 : EXPOSE 22\n ---\x3e Using cache\n ---\x3e 56c41202dcb9\nStep 14 : CMD /usr/sbin/sshd -D\n ---\x3e Using cache\n ---\x3e d6dccb483fa6\nSuccessfully built d6dccb483fa6\n[root@docker ~]# docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\ncentos              centos6-ssh         d6dccb483fa6        2 minutes ago         363 MB\ncentos              centos6-httpd       77eb12e36c7b        6 minutes ago       290.3 MB\ncentos6-visionet    latest              aeed37612ecb        6 hours ago         1.916 GB\ncentos              centos6             a3c09d36ab4a        2 days ago          194.6 MB\nregistry            latest              c6c14b3960bd        3 days ago          33.28 MB\n\n# \u540e\u53f0\u8fd0\u884c docker \u5bb9\u5668\uff0c\u5e76\u6307\u5b9a nat \u7aef\u53e3\u8f6c\u53d1\n\n[root@docker ~]# docker run -d -p 2222:22 -P --name=sshd centos:centos6-ssh\nb4211f7a304d9e34b72b510230be2c7a76b276886b488f08f3e12896a4d3c172\n\n')),(0,c.kt)("h2",{id:"7-ssh-\u767b\u9646\u5230-docker-\u5bb9\u5668\u5185\u90e8\u7f72\u9879\u76ee\u73af\u5883"},"7. ssh \u767b\u9646\u5230 docker \u5bb9\u5668\u5185\uff0c\u90e8\u7f72\u9879\u76ee\u73af\u5883"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'# inspect \u67e5\u770b docker \u5bb9\u5668 IP \u5730\u5740\n\n[root@docker ~]# docker inspect sshd | grep IPAddress\n[root@docker ~]# ssh visionet@172.17.0.2\nvisionet@172.17.0.2\'s password:\n[visionet@b4211f7a304d ~]$\n\n# Install mysql\n\n# Install tomcat server\n\n[visionet@b4211f7a304d ~]$ exit\n[root@docker ~]# docker stop sshd\nsshd\n[root@docker ~]# docker ps -l\nCONTAINER ID        IMAGE                COMMAND               CREATED             STATUS                       PORTS               NAMES\nb4211f7a304d        centos:centos6-ssh   "/usr/sbin/sshd -D"   6 minutes ago       Exited (255) 3 seconds ago                       sshd\n[root@docker ~]# docker commit b4211f7a304d centos:centos6-tomcat\nsha256:b4f114d5484822d9a3ddf1100b76b460985ba5e5d31e936570e8d7dbd8df282c\n[root@docker ~]# docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\ncentos              centos6-tomcat      b4f114d54848        4 seconds ago       363.1 MB\ncentos              centos6-httpd       77eb12e36c7b        15 minutes ago      290.3 MB\ncentos6-visionet    latest              aeed37612ecb        7 hours ago         1.916 GB\ncentos              centos6-ssh         d6dccb483fa6        9 hours ago         363 MB\ncentos              centos6             a3c09d36ab4a        2 days ago          194.6 MB\nregistry            latest              c6c14b3960bd        3 days ago          33.28 MB\n')),(0,c.kt)("h2",{id:"8-\u63a8\u9001-centoscentos6-tomcat-\u5230\u79c1\u6709-docker-\u4ed3\u5e93"},"8. \u63a8\u9001 centos:centos6-tomcat \u5230\u79c1\u6709 docker \u4ed3\u5e93"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"docker push")))}k.isMDXComponent=!0}}]);