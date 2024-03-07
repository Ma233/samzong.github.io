"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[12964],{11664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(17624),s=n(4552);const a={title:"Tomcat \u5229\u7528 JDK \u81ea\u8eab keytool \u5b9e\u73b0 HTTPS",tags:["Java"],date:new Date("2016-12-03T18:41:13.000Z")},r=void 0,c={permalink:"/en/2016/12/03/tomcat-2-li-yong-jdk-zi-shen-keytool-shi-xian-https",source:"@site/blog/2016-12-03-tomcat-2-li-yong-jdk-zi-shen-keytool-shi-xian-https.md",title:"Tomcat \u5229\u7528 JDK \u81ea\u8eab keytool \u5b9e\u73b0 HTTPS",description:"\u56e0\u4e3a\u4e00\u4e2a\u5076\u7136\u673a\u4f1a\uff0c\u60f3\u628a\u81ea\u5df1\u7684 webserver \u901a\u8fc7 https \u52a0\u5bc6\u8bbf\u95ee\uff0c\u8fd9\u91cc\u5c31\u91c7\u7528 JDK \u81ea\u5e26\u7684 keytool \u5de5\u5177\u5b9e\u73b0\uff0ctomcat \u5b98\u65b9\u4e5f\u63a8\u8350\u8fd9\u79cd\u65b9\u5f0f\uff0c\u82f1\u6587\u597d\u7684\u540c\u5b66\u8d70\u8fd9\u91cc\uff1a\u5b98\u65b9\u914d\u7f6e",date:"2016-12-03T18:41:13.000Z",formattedDate:"December 3, 2016",tags:[{label:"Java",permalink:"/en/tags/java"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Tomcat \u5229\u7528 JDK \u81ea\u8eab keytool \u5b9e\u73b0 HTTPS",tags:["Java"],date:"2016-12-03T18:41:13.000Z"},unlisted:!1,prevItem:{title:"HowTo Reset MySQL Root Password",permalink:"/en/2016/12/04/HowTo-Reset-MySQL-Root-Password"},nextItem:{title:"AWS Use s3cmd \u547d\u4ee4\u884c\u7ba1\u7406 S3 \u5b58\u50a8",permalink:"/en/2016/11/30/aws-use-s3cmd-ming-ling-xing-guan-li-s3-cun-chu"}},i={authorsImageUrls:[]},l=[{value:"\u751f\u6210 keystore",id:"\u751f\u6210-keystore",level:2},{value:"2. \u5907\u4efd$tomcatdir/conf/server.xml",id:"2-\u5907\u4efdtomcatdirconfserverxml",level:2},{value:"3. \u4fee\u6539 server.xml",id:"3-\u4fee\u6539-serverxml",level:2},{value:"a. \u6ce8\u91ca\u4ee5\u4e0b\uff1a\uff08tomcat \u6ce8\u91ca\u7528\uff1a<code>&lt;\\!\\-\\- XXXX \\-\\-\\&gt;</code> \uff09,\u5982\u4f55\u4e5f\u60f3\u4fdd\u7559 http \u8bbf\u95ee\uff0c\u53ef\u4ee5\u4e0d\u6ce8\u91ca",id:"a-\u6ce8\u91ca\u4ee5\u4e0btomcat-\u6ce8\u91ca\u7528---xxxx----\u5982\u4f55\u4e5f\u60f3\u4fdd\u7559-http-\u8bbf\u95ee\u53ef\u4ee5\u4e0d\u6ce8\u91ca",level:3},{value:"b. \u53d6\u6d88\u4e0b\u9762\u6ce8\u91ca",id:"b-\u53d6\u6d88\u4e0b\u9762\u6ce8\u91ca",level:3},{value:"c. \u589e\u52a0 keystoreFile \u548c keystorePass",id:"c-\u589e\u52a0-keystorefile-\u548c-keystorepass",level:3},{value:"4. \u91cd\u542f tomcat",id:"4-\u91cd\u542f-tomcat",level:2}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u56e0\u4e3a\u4e00\u4e2a\u5076\u7136\u673a\u4f1a\uff0c\u60f3\u628a\u81ea\u5df1\u7684 webserver \u901a\u8fc7 https \u52a0\u5bc6\u8bbf\u95ee\uff0c\u8fd9\u91cc\u5c31\u91c7\u7528 JDK \u81ea\u5e26\u7684 keytool \u5de5\u5177\u5b9e\u73b0\uff0ctomcat \u5b98\u65b9\u4e5f\u63a8\u8350\u8fd9\u79cd\u65b9\u5f0f\uff0c\u82f1\u6587\u597d\u7684\u540c\u5b66\u8d70\u8fd9\u91cc\uff1a",(0,o.jsx)(t.a,{href:"https://tomcat.apache.org/tomcat-7.0-doc/ssl-howto.html",children:"\u5b98\u65b9\u914d\u7f6e"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"demo: CentOS 6.6 & Tomcat 7 & JDK 1.7"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"\u751f\u6210-keystore",children:"\u751f\u6210 keystore"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"[root@test conf]# keytool -genkey -v -alias tomcat -keyalg RSA -keystore mykeystore\nEnter keystore password:              #\u8bbe\u7f6e\u5bc6\u7801\nRe-enter new password:                #\u91cd\u590d\u4e00\u6b21\nWhat is your first and last name?\n  [Unknown]:  Alex Lu                #\u968f\u4fbf\u586b\nWhat is the name of your organizational unit?\n  [Unknown]:  visionet                #\u968f\u4fbf\u586b\nWhat is the name of your organization?\n  [Unknown]:  visionet                #\u968f\u4fbf\u586b\nWhat is the name of your City or Locality?\n  [Unknown]:  SH                #\u968f\u4fbf\u586b\nWhat is the name of your State or Province?\n  [Unknown]:  SH                #\u968f\u4fbf\u586b\nWhat is the two-letter country code for this unit?\n  [Unknown]:  ZH                #\u968f\u4fbf\u586b\nIs CN=Alex Lu, OU=visionet, O=visionet, L=SH, ST=SH, C=ZH correct?\n  [no]:  Y                    #\u8fd9\u91cc\u8981Y\uff0c\u786e\u8ba4\u524d\u9762\u4fe1\u606f\u3002\n\nGenerating 2,048 bit RSA key pair and self-signed certificate (SHA256withRSA) with a validity of 90 days\n    for: CN=Alex Lu, OU=visionet, O=visionet, L=SH, ST=SH, C=ZH\nEnter key password for <tomcat>\n    (RETURN if same as keystore password):        #\u9ed8\u8ba4\u56de\u8f66\u5373\u53ef\uff0c\u4e0d\u9700\u8981\u8bbe\u7f6e\u592a\u591a\u5bc6\u7801\n[Storing mykeystore]\n[root@test conf]# ls\nCatalina  catalina.policy  catalina.properties  context.xml  logging.properties  mykeystore  server.xml  tomcat-users.xml  web.xml\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"\u6ce8\u610f\uff1a-keystore \u662f\u7528\u6765\u6307\u5b9a keystore \u4fdd\u5b58\u4f4d\u7f6e\uff0c\u5982\u679c\u4e0d\u52a0\u53c2\u6570\u9ed8\u8ba4\u4fdd\u5b58\u7684\u5f53\u524d\u7528\u6237\u5bb6\u76ee\u5f55\u4e3a~/.keystore\n-validity \u53ef\u4ee5\u7528\u6765\u6307\u5b9a\u8bc1\u4e66\u6709\u6548\u671f\uff0c\u5355\u4f4d\u4e3a\u5929\uff0c\u7f3a\u7701\u503c\u4e3a 90 \u5929\u3002"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"2-\u5907\u4efdtomcatdirconfserverxml",children:"2. \u5907\u4efd$tomcatdir/conf/server.xml"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cp $tomcatdir/conf/server.xml $tomcatdir/conf/server.xml\n"})}),"\n",(0,o.jsx)(t.h2,{id:"3-\u4fee\u6539-serverxml",children:"3. \u4fee\u6539 server.xml"}),"\n",(0,o.jsxs)(t.h3,{id:"a-\u6ce8\u91ca\u4ee5\u4e0btomcat-\u6ce8\u91ca\u7528---xxxx----\u5982\u4f55\u4e5f\u60f3\u4fdd\u7559-http-\u8bbf\u95ee\u53ef\u4ee5\u4e0d\u6ce8\u91ca",children:["a. \u6ce8\u91ca\u4ee5\u4e0b\uff1a\uff08tomcat \u6ce8\u91ca\u7528\uff1a",(0,o.jsx)(t.code,{children:"<\\!\\-\\- XXXX \\-\\-\\>"})," \uff09,\u5982\u4f55\u4e5f\u60f3\u4fdd\u7559 http \u8bbf\u95ee\uff0c\u53ef\u4ee5\u4e0d\u6ce8\u91ca"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'\x3c!--\n<Connector executor="tomcatThreadPool"\n                port="80" protocol="HTTP/1.1"\n                connectionTimeout="20000"\n                redirectPort="8443" />\n--\x3e\n'})}),"\n",(0,o.jsx)(t.h3,{id:"b-\u53d6\u6d88\u4e0b\u9762\u6ce8\u91ca",children:"b. \u53d6\u6d88\u4e0b\u9762\u6ce8\u91ca"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<Connector port="443" protocol="HTTP/1.1" SSLEnabled="true"\n                maxThreads="150" scheme="https" secure="true"\n                clientAuth="false" sslProtocol="TLS" />\n'})}),"\n",(0,o.jsx)(t.h3,{id:"c-\u589e\u52a0-keystorefile-\u548c-keystorepass",children:"c. \u589e\u52a0 keystoreFile \u548c keystorePass"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<Connector port="443" protocol="HTTP/1.1" SSLEnabled="true"\n               maxThreads="150" scheme="https" secure="true"\n               clientAuth="false" sslProtocol="TLS"\n               keystoreFile="conf/mykeystore" keystorePass="123456"/>\n'})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"keystoreFile=\u8ddf keystore \u6587\u4ef6\u4f4d\u7f6e\nkeystorePass=\u8ddf\u5f53\u65f6 keytool \u547d\u4ee4\u6267\u884c\u65f6\u8f93\u5165\u7684\u5bc6\u7801"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"4-\u91cd\u542f-tomcat",children:"4. \u91cd\u542f tomcat"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'[root@test conf]# ../bin/catalina.sh stop && ../bin/catalina.sh start\nUsing CATALINA_BASE:   /home/pms/apache-tomcat-6.0.44\nUsing CATALINA_HOME:   /home/pms/apache-tomcat-6.0.44\nUsing CATALINA_TMPDIR: /home/pms/apache-tomcat-6.0.44/temp\nUsing JRE_HOME:        /home/pms/jdk1.7.0_65\nUsing CLASSPATH:       /home/pms/apache-tomcat-6.0.44/bin/bootstrap.jar\nUsing CATALINA_BASE:   /home/pms/apache-tomcat-6.0.44\nUsing CATALINA_HOME:   /home/pms/apache-tomcat-6.0.44\nUsing CATALINA_TMPDIR: /home/pms/apache-tomcat-6.0.44/temp\nUsing JRE_HOME:        /home/pms/jdk1.7.0_65\nUsing CLASSPATH:       /home/pms/apache-tomcat-6.0.44/bin/bootstrap.jar\n[root@test conf]# netstat -ntlup | grep -e "80\\|443"\ntcp        0      0 0.0.0.0:80         0.0.0.0:*          LISTEN      21960/java\ntcp        0      0 0.0.0.0:443        0.0.0.0:*          LISTEN      21960/java\ntcp        0      0 127.0.0.1:8005     0.0.0.0:*          LISTEN      21960/java\ntcp        0      0 0.0.0.0:8009       0.0.0.0:*          LISTEN      21960/java\n[root@test conf]#\n'})}),"\n",(0,o.jsx)(t.p,{children:"OK !"})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>r});var o=n(11504);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);