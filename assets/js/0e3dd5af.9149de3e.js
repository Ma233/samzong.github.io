"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[58076],{3905:(t,a,e)=>{e.d(a,{Zo:()=>m,kt:()=>v});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),i=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):c(c({},a),t)),e},m=function(t){var a=i(t.components);return n.createElement(s.Provider,{value:a},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),p=i(e),d=r,v=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return e?n.createElement(v,c(c({ref:a},m),{},{components:e})):n.createElement(v,c({ref:a},m))}));function v(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var o=e.length,c=new Array(o);c[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=t,l[p]="string"==typeof t?t:r,c[1]=l;for(var i=2;i<o;i++)c[i]=e[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,e)}d.displayName="MDXCreateElement"},21505:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=e(87462),r=(e(67294),e(3905));const o={title:"HowTo Install a Tomcat Server 7",tags:["Tomcat"],date:new Date("2016-09-19T10:25:53.000Z")},c=void 0,l={permalink:"/2016/09/19/HowTo-Install-a-Tomcat-Server-7",source:"@site/blog/2016-09-19-HowTo-Install-a-Tomcat-Server-7.md",title:"HowTo Install a Tomcat Server 7",description:"\u672c\u6587\u4ef6\u662f\u91c7\u7528\u7684\u6a21\u677f\u662f CentOS 6\uff0c\u540c\u6837\u9002\u7528\u4e8e CentOS \u7cfb\u5217\u5176\u4ed6\u53d1\u884c\u7248\u672c\u3002",date:"2016-09-19T10:25:53.000Z",formattedDate:"2016\u5e749\u670819\u65e5",tags:[{label:"Tomcat",permalink:"/tags/tomcat"}],readingTime:1.9766666666666666,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Install a Tomcat Server 7",tags:["Tomcat"],date:"2016-09-19T10:25:53.000Z"},prevItem:{title:"\u751f\u8005\u5b64\u72ec",permalink:"/2016/09/20/\u751f\u8005\u5b64\u72ec"},nextItem:{title:"\u4e8c\u5341\u56db\u5c81",permalink:"/2016/08/19/\u4e8c\u5341\u56db\u5c81"}},s={authorsImageUrls:[]},i=[{value:"1. \u6d4b\u8bd5\u73af\u5883",id:"1-\u6d4b\u8bd5\u73af\u5883",level:4},{value:"2. Install Java SE Development Kit 7 (JDK7)",id:"2-install-java-se-development-kit-7-jdk7",level:4},{value:"3. Build Java Environment",id:"3-build-java-environment",level:4},{value:"4. Download Tomcat7",id:"4-download-tomcat7",level:4},{value:"5. create a script , use service manage tomcat7",id:"5-create-a-script--use-service-manage-tomcat7",level:4},{value:"6. Add tomcat7 to system service",id:"6-add-tomcat7-to-system-service",level:4},{value:"7. \u6253\u5f00\u6d4f\u89c8\u5668\u6d4b\u8bd5 Tomcat Server \u642d\u5efa\u5b8c\u6210\uff0c\u9ed8\u8ba4\u9875\u9762\u5982\u4e0b",id:"7-\u6253\u5f00\u6d4f\u89c8\u5668\u6d4b\u8bd5-tomcat-server-\u642d\u5efa\u5b8c\u6210\u9ed8\u8ba4\u9875\u9762\u5982\u4e0b",level:4},{value:"8. \u4f7f\u7528 curl \u6d4b\u8bd5",id:"8-\u4f7f\u7528-curl-\u6d4b\u8bd5",level:4},{value:"9. Tomcat \u6587\u4ef6\u6811",id:"9-tomcat-\u6587\u4ef6\u6811",level:4}],m={toc:i},p="wrapper";function u(t){let{components:a,...e}=t;return(0,r.kt)(p,(0,n.Z)({},m,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4ef6\u662f\u91c7\u7528\u7684\u6a21\u677f\u662f CentOS 6\uff0c\u540c\u6837\u9002\u7528\u4e8e CentOS \u7cfb\u5217\u5176\u4ed6\u53d1\u884c\u7248\u672c\u3002"),(0,r.kt)("h4",{id:"1-\u6d4b\u8bd5\u73af\u5883"},"1. \u6d4b\u8bd5\u73af\u5883"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VMware Fushion 8 Pro # windows Use ",(0,r.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/wiki/Downloads"},"VirtualBox")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://mirrors.aliyun.com/centos/6.8/isos/x86_64/CentOS-6.8-x86_64-minimal.iso"},"CentOS-6.8-x86_64-minimal.iso")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html"},"JDK 7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://ftp.riken.jp/net/apache/tomcat/tomcat-7/"},"Tomcat 7"))),(0,r.kt)("h4",{id:"2-install-java-se-development-kit-7-jdk7"},"2. Install Java SE Development Kit 7 (JDK7)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[root@ultraera ~]# curl -LO -H "Cookie: oraclelicense=accept-securebackup-cookie" \\\n"http://download.oracle.com/otn-pub/java/jdk/7u75-b13/jdk-7u75-linux-x64.rpm"\n[root@ultraera ~]# rpm -Uvh jdk-7u75-linux-x64.rpm\nPreparing...                ########################################### [100%]\n   1:jdk                    ########################################### [100%]\nUnpacking JAR files...\n        rt.jar...\n        jsse.jar...\n        charsets.jar...\n        tools.jar...\n        localedata.jar...\n        jfxrt.jar...\n')),(0,r.kt)("h4",{id:"3-build-java-environment"},"3. Build Java Environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[root@ultraera ~]# vi /etc/profile\n# add follows to the end\nexport JAVA_HOME=/usr/java/default\nexport PATH=$PATH:$JAVA_HOME/bin\nexport CLASSPATH=.:$JAVA_HOME/jre/lib:$JAVA_HOME/lib:$JAVA_HOME/lib/tools.jar\n[root@ultraera ~]# source /etc/profile\n[root@ultraera ~]# java -version\njava version "1.7.0_75"\nJava(TM) SE Runtime Environment (build 1.7.0_75-b13)\nJava HotSpot(TM) 64-Bit Server VM (build 24.75-b04, mixed mode)\n')),(0,r.kt)("h4",{id:"4-download-tomcat7"},"4. Download Tomcat7"),(0,r.kt)("p",null,"Make sure the latest one and download it from the site below.\n=\u300b ",(0,r.kt)("a",{parentName:"p",href:"http://ftp.riken.jp/net/apache/tomcat/tomcat-7/"},"http://ftp.riken.jp/net/apache/tomcat/tomcat-7/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@ultraera ~]# wget http://ftp.riken.jp/net/apache/tomcat/tomcat-7/v7.0.70/bin/apache-tomcat-7.0.70.tar.gz\n[root@ultraera ~]# tar zxvf apache-tomcat-7.0.70.tar.gz\n[root@ultraera ~]# mv apache-tomcat-7.0.70 /usr/tomcat7\n[root@ultraera ~]# useradd -M -d /usr/tomcat7 tomcat7\n[root@ultraera ~]# chown -R tomcat7. /usr/tomcat7\n")),(0,r.kt)("h4",{id:"5-create-a-script--use-service-manage-tomcat7"},"5. create a script , use service manage tomcat7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[root@ultraera ~]# cat /etc/rc.d/init.d/tomcat7\n #!/bin/bash\n\n# Tomcat7: Start/Stop Tomcat 7\n#\n# chkconfig: - 90 10\n# description: Tomcat is a Java application Server.\n\n. /etc/init.d/functions\n. /etc/sysconfig/network\n\nCATALINA_HOME=/usr/tomcat7\nTOMCAT_USER=tomcat7\n\nLOCKFILE=/var/lock/subsys/tomcat7\n\nRETVAL=0\nstart(){\n    echo "Starting Tomcat7: "\n    su - $TOMCAT_USER -c "$CATALINA_HOME/bin/startup.sh"\n    RETVAL=$?\n    echo\n    [ $RETVAL -eq 0 ] && touch $LOCKFILE\n    return $RETVAL\n}\n\nstop(){\n    echo "Shutting down Tomcat7: "\n    $CATALINA_HOME/bin/shutdown.sh\n    RETVAL=$?\n    echo\n    [ $RETVAL -eq 0 ] && rm -f $LOCKFILE\n    return $RETVAL\n}\n\ncase "$1" in\n    start)\n        start\n        ;;\n    stop)\n        stop\n        ;;\n    restart)\n        stop\n        start\n        ;;\n    *)\n        echo $"Usage: $0 {start|stop|restart}"\n        exit 1\n        ;;\nesac\nexit $?\n')),(0,r.kt)("h4",{id:"6-add-tomcat7-to-system-service"},"6. Add tomcat7 to system service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@ultraera ~]# chmod 755 /etc/rc.d/init.d/tomcat7\n[root@ultraera ~]# /etc/rc.d/init.d/tomcat7 start\nStarting Tomcat7:\nUsing CATALINA_BASE:   /usr/tomcat7\nUsing CATALINA_HOME:   /usr/tomcat7\nUsing CATALINA_TMPDIR: /usr/tomcat7/temp\nUsing JRE_HOME:        /usr/java/default\nUsing CLASSPATH:       /usr/tomcat7/bin/bootstrap.jar:/usr/tomcat7/bin/tomcat-juli.jar\nTomcat started.\n[root@ultraera ~]# netstat -ntlp | grep java\ntcp        0      0 ::ffff:127.0.0.1:8005       :::*                        LISTEN      6326/java\ntcp        0      0 :::8009                     :::*                        LISTEN      6326/java\ntcp        0      0 :::8080                    :::*                        LISTEN      6326/java\n[root@ultraera ~]# ps axu | grep java\ntomcat7       6326  8.3 85.6 5229768 2910176 ?     Sl   Aug22 3216:38 /usr/bin/java -Djava.util.logging.config.file=/usr/tomcat7/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -server -Djava.endorsed.dirs=/usr/tomcat7/endorsed -classpath /usr/tomcat7/bin/bootstrap.jar:/usr/tomcat7/bin/tomcat-juli.jar -Dcatalina.base=/usr/tomcat7 -Dcatalina.home=/usr/tomcat7 -Djava.io.tmpdir=/usr/tomcat7/temp org.apache.catalina.startup.Bootstrap start\n[root@ultraera ~]# chkconfig --add tomcat7\n[root@ultraera ~]# chkconfig tomcat7 on\n")),(0,r.kt)("h4",{id:"7-\u6253\u5f00\u6d4f\u89c8\u5668\u6d4b\u8bd5-tomcat-server-\u642d\u5efa\u5b8c\u6210\u9ed8\u8ba4\u9875\u9762\u5982\u4e0b"},"7. \u6253\u5f00\u6d4f\u89c8\u5668\u6d4b\u8bd5 Tomcat Server \u642d\u5efa\u5b8c\u6210\uff0c\u9ed8\u8ba4\u9875\u9762\u5982\u4e0b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://samzong.oss-cn-shenzhen.aliyuncs.com/2016/09/tomcat7.jpg",alt:"image"})),(0,r.kt)("h4",{id:"8-\u4f7f\u7528-curl-\u6d4b\u8bd5"},"8. \u4f7f\u7528 curl \u6d4b\u8bd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@ultraera ~]# curl -I http://localhost:8080\nHTTP/1.1 200 OK\nServer: Apache-Coyote/1.1\nContent-Type: text/html;charset=ISO-8859-1\nTransfer-Encoding: chunked\nDate: Sun, 18 Sep 2016 11:14:06 GMT\n")),(0,r.kt)("h4",{id:"9-tomcat-\u6587\u4ef6\u6811"},"9. Tomcat \u6587\u4ef6\u6811"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@ultraera /usr/tomcat7]# tree\n.\n\u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u251c\u2500\u2500 bootstrap.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 catalina.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 catalina.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 catalina-tasks.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 commons-daemon.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 commons-daemon-native.tar.gz\n\u2502\xa0\xa0 \u251c\u2500\u2500 configtest.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 configtest.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 daemon.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 digest.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 digest.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 setclasspath.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 setclasspath.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 shutdown.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 shutdown.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 startup.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 startup.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 tomcat-juli.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 tomcat-native.tar.gz\n\u2502\xa0\xa0 \u251c\u2500\u2500 tool-wrapper.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 tool-wrapper.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 version.bat\n\u2502\xa0\xa0 \u2514\u2500\u2500 version.sh\n\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 catalina.policy\n\u2502\xa0\xa0 \u251c\u2500\u2500 catalina.properties\n\u2502\xa0\xa0 \u251c\u2500\u2500 context.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 logging.properties\n\u2502\xa0\xa0 \u251c\u2500\u2500 server.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 tomcat-users.xml\n\u2502\xa0\xa0 \u2514\u2500\u2500 web.xml\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 logs\n\u2502\xa0\xa0 \u251c\u2500\u2500 catalina.2016-09-18.log\n\u2502\xa0\xa0 \u251c\u2500\u2500 catalina.out\n\u2502\xa0\xa0 \u251c\u2500\u2500 host-manager.2016-09-18.log\n\u2502\xa0\xa0 \u251c\u2500\u2500 localhost.2016-09-18.log\n\u2502\xa0\xa0 \u2514\u2500\u2500 manager.2016-09-18.log\n\u251c\u2500\u2500 NOTICE\n\u251c\u2500\u2500 RELEASE-NOTES\n\u251c\u2500\u2500 RUNNING.txt\n\u251c\u2500\u2500 temp\n\u251c\u2500\u2500 webapps\n\u2502\xa0\xa0 \u2514\u2500\u2500 ROOT\n\u2514\u2500\u2500 work\n")))}u.isMDXComponent=!0}}]);