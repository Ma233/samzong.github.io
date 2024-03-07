"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[39712],{79008:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(17624),o=n(4552);const r={title:"HowTo set Tomcat 7 automatic startup with CentOS 7",tags:["Tomcat"],date:new Date("2017-04-05T15:21:03.000Z")},c=void 0,s={permalink:"/en/2017/04/05/HowTo-set-Tomcat-7-automatic-startup-with-CentOS-7",source:"@site/blog/2017-04-05-HowTo-set-Tomcat-7-automatic-startup-with-CentOS-7.md",title:"HowTo set Tomcat 7 automatic startup with CentOS 7",description:"\u56e0 CentOS7 \u4e0e 6 \u5728\u7cfb\u7edf\u4e0a\uff0c\u53d8\u5316\u8f83\u5927\uff0c\u6240\u4ee5\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\u8bb2\u5230\u7684\u4f7f\u7528 Tomcat7 \u5f00\u673a\u81ea\u542f\u52a8\u7684\u65b9\u5f0f\u5728 CentOS7 \u662f\u662f\u65e0\u6cd5\u4f7f\u7528\u7684\uff0c\u6240\u4ee5\u8fd9\u7bc7\u6587\u7ae0\u7684\u76ee\u7684\u662f\u5982\u4f55\u5728 CentOS7 \u4e0a\u5c06 Tomcat7 \u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8\u3002",date:"2017-04-05T15:21:03.000Z",formattedDate:"April 5, 2017",tags:[{label:"Tomcat",permalink:"/en/tags/tomcat"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo set Tomcat 7 automatic startup with CentOS 7",tags:["Tomcat"],date:"2017-04-05T15:21:03.000Z"},unlisted:!1,prevItem:{title:"\u5173\u4e8e\u8003\u8bd5",permalink:"/en/2017/04/11/guan-yu-kao-shi"},nextItem:{title:"\u5728 Linux \u7ec8\u7aef\u4f7f\u7528 SSR \u670d\u52a1\u5b9e\u73b0\u79d1\u5b66\u4e0a\u7f51",permalink:"/en/2017/03/23/zai-linux-zhong-duan-shi-yong-ssr-fu-wu-shi-xian-ke-xue-shang-wang"}},i={authorsImageUrls:[]},l=[{value:"\u5b89\u88c5 JAVA \u73af\u5883",id:"\u5b89\u88c5-java-\u73af\u5883",level:2},{value:"\u5b89\u88c5 Tomcat7",id:"\u5b89\u88c5-tomcat7",level:2},{value:"\u521b\u5efa\u5f00\u673a\u81ea\u542f\u52a8\u811a\u672c",id:"\u521b\u5efa\u5f00\u673a\u81ea\u542f\u52a8\u811a\u672c",level:2},{value:"\u542f\u52a8 Tomcat7",id:"\u542f\u52a8-tomcat7",level:2}];function m(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.M)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"\u56e0 CentOS7 \u4e0e 6 \u5728\u7cfb\u7edf\u4e0a\uff0c\u53d8\u5316\u8f83\u5927\uff0c\u6240\u4ee5\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\u8bb2\u5230\u7684\u4f7f\u7528 Tomcat7 \u5f00\u673a\u81ea\u542f\u52a8\u7684\u65b9\u5f0f\u5728 CentOS7 \u662f\u662f\u65e0\u6cd5\u4f7f\u7528\u7684\uff0c\u6240\u4ee5\u8fd9\u7bc7\u6587\u7ae0\u7684\u76ee\u7684\u662f\u5982\u4f55\u5728 CentOS7 \u4e0a\u5c06 Tomcat7 \u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u5b89\u88c5-java-\u73af\u5883",children:"\u5b89\u88c5 JAVA \u73af\u5883"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'\n[root@7 ~]# curl -LO -H "Cookie: oraclelicense=accept-securebackup-cookie" \\\n"http://download.oracle.com/otn-pub/java/jdk/7u75-b13/jdk-7u75-linux-x64.rpm"\n\n[root@7 ~]# rpm -Uvh jdk-7u75-linux-x64.rpm\nPreparing...                ####################### [100%]\n   1:jdk                    ####################### [100%]\nUnpacking JAR files...\n        rt.jar...\n        jsse.jar...\n        charsets.jar...\n        tools.jar...\n        localedata.jar...\n        jfxrt.jar...\n\n[root@7 ~]# vi /etc/profile\n# add follows to the end\nexport JAVA_HOME=/usr/java/default\nexport PATH=$PATH:$JAVA_HOME/bin\nexport CLASSPATH=.:$JAVA_HOME/jre/lib:$JAVA_HOME/lib:$JAVA_HOME/lib/tools.jar\n[root@7 ~]# source /etc/profile\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u5b89\u88c5-tomcat7",children:"\u5b89\u88c5 Tomcat7"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"\n[root@7 ~]# wget http://ftp.riken.jp/net/apache/tomcat/tomcat-7/v7.0.77/bin/apache-tomcat-7.0.77.tar.gz\n[root@7 ~]# tar zxvf apache-tomcat-7.0.77.tar.gz\n[root@7 ~]# mv apache-tomcat-7.0.77 /usr/tomcat7\n[root@7 ~]# useradd -M -d /usr/tomcat7 tomcat7\n[root@7 ~]# chown -R tomcat7. /usr/tomcat7\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u521b\u5efa\u5f00\u673a\u81ea\u542f\u52a8\u811a\u672c",children:"\u521b\u5efa\u5f00\u673a\u81ea\u542f\u52a8\u811a\u672c"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"[root@7 ~]# cat /usr/lib/systemd/system/tomcat7.service\n# create new\n [Unit]\nDescription=Apache Tomcat 7\nAfter=network.target\n\n[Service]\nType=oneshot\nExecStart=/usr/tomcat7/bin/startup.sh\nExecStop=/usr/tomcat7/bin/shutdown.sh\nRemainAfterExit=yes\nUser=tomcat7\nGroup=tomcat7\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u542f\u52a8-tomcat7",children:"\u542f\u52a8 Tomcat7"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"[root@7 ~]# systemctl start tomcat7.service\n[root@7 ~]# systemctl enable tomcat7.service\n"})})]})}function u(t={}){const{wrapper:e}={...(0,o.M)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(m,{...t})}):m(t)}},4552:(t,e,n)=>{n.d(e,{I:()=>s,M:()=>c});var a=n(11504);const o={},r=a.createContext(o);function c(t){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:c(t.components),a.createElement(r.Provider,{value:e},t.children)}}}]);