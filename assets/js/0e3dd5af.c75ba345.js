"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[53144],{78464:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=e(17624),r=e(4552);const o={title:"HowTo Install a Tomcat Server 7",tags:["Tomcat"],date:new Date("2016-09-19T10:25:53.000Z")},s=void 0,c={permalink:"/2016/09/19/HowTo-Install-a-Tomcat-Server-7",source:"@site/blog/2016-09-19-HowTo-Install-a-Tomcat-Server-7.md",title:"HowTo Install a Tomcat Server 7",description:"\u672c\u6587\u4ef6\u662f\u91c7\u7528\u7684\u6a21\u677f\u662f CentOS 6\uff0c\u540c\u6837\u9002\u7528\u4e8e CentOS \u7cfb\u5217\u5176\u4ed6\u53d1\u884c\u7248\u672c\u3002",date:"2016-09-19T10:25:53.000Z",formattedDate:"September 19, 2016",tags:[{label:"Tomcat",permalink:"/tags/tomcat"}],readingTime:2.965,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Install a Tomcat Server 7",tags:["Tomcat"],date:"2016-09-19T10:25:53.000Z"},unlisted:!1,prevItem:{title:"\u4e8c\u5341\u56db\u5c81",permalink:"/2016/08/19/er-shi-si-sui"},nextItem:{title:"\u751f\u8005\u5b64\u72ec",permalink:"/2016/09/20/sheng-zhe-gu-du"}},i={authorsImageUrls:[]},l=[{value:"1. \u6d4b\u8bd5\u73af\u5883",id:"1-\u6d4b\u8bd5\u73af\u5883",level:4},{value:"2. Install Java SE Development Kit 7 (JDK7)",id:"2-install-java-se-development-kit-7-jdk7",level:4},{value:"3. Build Java Environment",id:"3-build-java-environment",level:4},{value:"4. Download Tomcat7",id:"4-download-tomcat7",level:4},{value:"5. create a script , use service manage tomcat7",id:"5-create-a-script--use-service-manage-tomcat7",level:4},{value:"6. Add tomcat7 to system service",id:"6-add-tomcat7-to-system-service",level:4},{value:"7. \u6253\u5f00\u6d4f\u89c8\u5668\u6d4b\u8bd5 Tomcat Server \u642d\u5efa\u5b8c\u6210\uff0c\u9ed8\u8ba4\u9875\u9762\u5982\u4e0b",id:"7-\u6253\u5f00\u6d4f\u89c8\u5668\u6d4b\u8bd5-tomcat-server-\u642d\u5efa\u5b8c\u6210\u9ed8\u8ba4\u9875\u9762\u5982\u4e0b",level:4},{value:"8. \u4f7f\u7528 curl \u6d4b\u8bd5",id:"8-\u4f7f\u7528-curl-\u6d4b\u8bd5",level:4},{value:"9. Tomcat \u6587\u4ef6\u6811",id:"9-tomcat-\u6587\u4ef6\u6811",level:4}];function m(t){const a={a:"a",code:"code",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"\u672c\u6587\u4ef6\u662f\u91c7\u7528\u7684\u6a21\u677f\u662f CentOS 6\uff0c\u540c\u6837\u9002\u7528\u4e8e CentOS \u7cfb\u5217\u5176\u4ed6\u53d1\u884c\u7248\u672c\u3002"}),"\n",(0,n.jsx)(a.h4,{id:"1-\u6d4b\u8bd5\u73af\u5883",children:"1. \u6d4b\u8bd5\u73af\u5883"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["VMware Fushion 8 Pro # windows Use ",(0,n.jsx)(a.a,{href:"https://www.virtualbox.org/wiki/Downloads",children:"VirtualBox"})]}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"http://mirrors.aliyun.com/centos/6.8/isos/x86_64/CentOS-6.8-x86_64-minimal.iso",children:"CentOS-6.8-x86_64-minimal.iso"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html",children:"JDK 7"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"http://ftp.riken.jp/net/apache/tomcat/tomcat-7/",children:"Tomcat 7"})}),"\n"]}),"\n",(0,n.jsx)(a.h4,{id:"2-install-java-se-development-kit-7-jdk7",children:"2. Install Java SE Development Kit 7 (JDK7)"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'[root@ultraera ~]# curl -LO -H "Cookie: oraclelicense=accept-securebackup-cookie" \\\n"http://download.oracle.com/otn-pub/java/jdk/7u75-b13/jdk-7u75-linux-x64.rpm"\n[root@ultraera ~]# rpm -Uvh jdk-7u75-linux-x64.rpm\nPreparing...                ########################################### [100%]\n   1:jdk                    ########################################### [100%]\nUnpacking JAR files...\n        rt.jar...\n        jsse.jar...\n        charsets.jar...\n        tools.jar...\n        localedata.jar...\n        jfxrt.jar...\n'})}),"\n",(0,n.jsx)(a.h4,{id:"3-build-java-environment",children:"3. Build Java Environment"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'[root@ultraera ~]# vi /etc/profile\n# add follows to the end\nexport JAVA_HOME=/usr/java/default\nexport PATH=$PATH:$JAVA_HOME/bin\nexport CLASSPATH=.:$JAVA_HOME/jre/lib:$JAVA_HOME/lib:$JAVA_HOME/lib/tools.jar\n[root@ultraera ~]# source /etc/profile\n[root@ultraera ~]# java -version\njava version "1.7.0_75"\nJava(TM) SE Runtime Environment (build 1.7.0_75-b13)\nJava HotSpot(TM) 64-Bit Server VM (build 24.75-b04, mixed mode)\n'})}),"\n",(0,n.jsx)(a.h4,{id:"4-download-tomcat7",children:"4. Download Tomcat7"}),"\n",(0,n.jsxs)(a.p,{children:["Make sure the latest one and download it from the site below.\n=\u300b ",(0,n.jsx)(a.a,{href:"http://ftp.riken.jp/net/apache/tomcat/tomcat-7/",children:"http://ftp.riken.jp/net/apache/tomcat/tomcat-7/"})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"[root@ultraera ~]# wget http://ftp.riken.jp/net/apache/tomcat/tomcat-7/v7.0.70/bin/apache-tomcat-7.0.70.tar.gz\n[root@ultraera ~]# tar zxvf apache-tomcat-7.0.70.tar.gz\n[root@ultraera ~]# mv apache-tomcat-7.0.70 /usr/tomcat7\n[root@ultraera ~]# useradd -M -d /usr/tomcat7 tomcat7\n[root@ultraera ~]# chown -R tomcat7. /usr/tomcat7\n"})}),"\n",(0,n.jsx)(a.h4,{id:"5-create-a-script--use-service-manage-tomcat7",children:"5. create a script , use service manage tomcat7"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'[root@ultraera ~]# cat /etc/rc.d/init.d/tomcat7\n #!/bin/bash\n\n# Tomcat7: Start/Stop Tomcat 7\n#\n# chkconfig: - 90 10\n# description: Tomcat is a Java application Server.\n\n. /etc/init.d/functions\n. /etc/sysconfig/network\n\nCATALINA_HOME=/usr/tomcat7\nTOMCAT_USER=tomcat7\n\nLOCKFILE=/var/lock/subsys/tomcat7\n\nRETVAL=0\nstart(){\n    echo "Starting Tomcat7: "\n    su - $TOMCAT_USER -c "$CATALINA_HOME/bin/startup.sh"\n    RETVAL=$?\n    echo\n    [ $RETVAL -eq 0 ] && touch $LOCKFILE\n    return $RETVAL\n}\n\nstop(){\n    echo "Shutting down Tomcat7: "\n    $CATALINA_HOME/bin/shutdown.sh\n    RETVAL=$?\n    echo\n    [ $RETVAL -eq 0 ] && rm -f $LOCKFILE\n    return $RETVAL\n}\n\ncase "$1" in\n    start)\n        start\n        ;;\n    stop)\n        stop\n        ;;\n    restart)\n        stop\n        start\n        ;;\n    *)\n        echo $"Usage: $0 {start|stop|restart}"\n        exit 1\n        ;;\nesac\nexit $?\n'})}),"\n",(0,n.jsx)(a.h4,{id:"6-add-tomcat7-to-system-service",children:"6. Add tomcat7 to system service"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"[root@ultraera ~]# chmod 755 /etc/rc.d/init.d/tomcat7\n[root@ultraera ~]# /etc/rc.d/init.d/tomcat7 start\nStarting Tomcat7:\nUsing CATALINA_BASE:   /usr/tomcat7\nUsing CATALINA_HOME:   /usr/tomcat7\nUsing CATALINA_TMPDIR: /usr/tomcat7/temp\nUsing JRE_HOME:        /usr/java/default\nUsing CLASSPATH:       /usr/tomcat7/bin/bootstrap.jar:/usr/tomcat7/bin/tomcat-juli.jar\nTomcat started.\n[root@ultraera ~]# netstat -ntlp | grep java\ntcp        0      0 ::ffff:127.0.0.1:8005       :::*                        LISTEN      6326/java\ntcp        0      0 :::8009                     :::*                        LISTEN      6326/java\ntcp        0      0 :::8080                    :::*                        LISTEN      6326/java\n[root@ultraera ~]# ps axu | grep java\ntomcat7       6326  8.3 85.6 5229768 2910176 ?     Sl   Aug22 3216:38 /usr/bin/java -Djava.util.logging.config.file=/usr/tomcat7/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -server -Djava.endorsed.dirs=/usr/tomcat7/endorsed -classpath /usr/tomcat7/bin/bootstrap.jar:/usr/tomcat7/bin/tomcat-juli.jar -Dcatalina.base=/usr/tomcat7 -Dcatalina.home=/usr/tomcat7 -Djava.io.tmpdir=/usr/tomcat7/temp org.apache.catalina.startup.Bootstrap start\n[root@ultraera ~]# chkconfig --add tomcat7\n[root@ultraera ~]# chkconfig tomcat7 on\n"})}),"\n",(0,n.jsx)(a.h4,{id:"7-\u6253\u5f00\u6d4f\u89c8\u5668\u6d4b\u8bd5-tomcat-server-\u642d\u5efa\u5b8c\u6210\u9ed8\u8ba4\u9875\u9762\u5982\u4e0b",children:"7. \u6253\u5f00\u6d4f\u89c8\u5668\u6d4b\u8bd5 Tomcat Server \u642d\u5efa\u5b8c\u6210\uff0c\u9ed8\u8ba4\u9875\u9762\u5982\u4e0b"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://img.samzong.me/202307191530811.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image"})}),"\n",(0,n.jsx)(a.h4,{id:"8-\u4f7f\u7528-curl-\u6d4b\u8bd5",children:"8. \u4f7f\u7528 curl \u6d4b\u8bd5"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"[root@ultraera ~]# curl -I http://localhost:8080\nHTTP/1.1 200 OK\nServer: Apache-Coyote/1.1\nContent-Type: text/html;charset=ISO-8859-1\nTransfer-Encoding: chunked\nDate: Sun, 18 Sep 2016 11:14:06 GMT\n"})}),"\n",(0,n.jsx)(a.h4,{id:"9-tomcat-\u6587\u4ef6\u6811",children:"9. Tomcat \u6587\u4ef6\u6811"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"[root@ultraera /usr/tomcat7]# tree\n.\n\u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u251c\u2500\u2500 bootstrap.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 catalina.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 catalina.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 catalina-tasks.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 commons-daemon.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 commons-daemon-native.tar.gz\n\u2502\xa0\xa0 \u251c\u2500\u2500 configtest.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 configtest.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 daemon.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 digest.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 digest.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 setclasspath.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 setclasspath.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 shutdown.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 shutdown.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 startup.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 startup.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 tomcat-juli.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 tomcat-native.tar.gz\n\u2502\xa0\xa0 \u251c\u2500\u2500 tool-wrapper.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 tool-wrapper.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 version.bat\n\u2502\xa0\xa0 \u2514\u2500\u2500 version.sh\n\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 catalina.policy\n\u2502\xa0\xa0 \u251c\u2500\u2500 catalina.properties\n\u2502\xa0\xa0 \u251c\u2500\u2500 context.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 logging.properties\n\u2502\xa0\xa0 \u251c\u2500\u2500 server.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 tomcat-users.xml\n\u2502\xa0\xa0 \u2514\u2500\u2500 web.xml\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 logs\n\u2502\xa0\xa0 \u251c\u2500\u2500 catalina.2016-09-18.log\n\u2502\xa0\xa0 \u251c\u2500\u2500 catalina.out\n\u2502\xa0\xa0 \u251c\u2500\u2500 host-manager.2016-09-18.log\n\u2502\xa0\xa0 \u251c\u2500\u2500 localhost.2016-09-18.log\n\u2502\xa0\xa0 \u2514\u2500\u2500 manager.2016-09-18.log\n\u251c\u2500\u2500 NOTICE\n\u251c\u2500\u2500 RELEASE-NOTES\n\u251c\u2500\u2500 RUNNING.txt\n\u251c\u2500\u2500 temp\n\u251c\u2500\u2500 webapps\n\u2502\xa0\xa0 \u2514\u2500\u2500 ROOT\n\u2514\u2500\u2500 work\n"})})]})}function d(t={}){const{wrapper:a}={...(0,r.M)(),...t.components};return a?(0,n.jsx)(a,{...t,children:(0,n.jsx)(m,{...t})}):m(t)}},4552:(t,a,e)=>{e.d(a,{I:()=>c,M:()=>s});var n=e(11504);const r={},o=n.createContext(r);function s(t){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(a):{...a,...t}}),[a,t])}function c(t){let a;return a=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),n.createElement(o.Provider,{value:a},t.children)}}}]);