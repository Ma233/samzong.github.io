"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[11466],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85826:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={title:"HowTo Install Openfire  on CentOS",tags:["Openfire"],date:new Date("2016-08-02T16:04:48.000Z")},l=void 0,i={permalink:"/2016/08/02/HowTo-Install-Openfire-on-CentOS",source:"@site/blog/2016-08-02-HowTo-Install-Openfire-on-CentOS.md",title:"HowTo Install Openfire  on CentOS",description:"Install Centos 6.x x86_64",date:"2016-08-02T16:04:48.000Z",formattedDate:"2016\u5e748\u67082\u65e5",tags:[{label:"Openfire",permalink:"/tags/openfire"}],readingTime:1.1466666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Install Openfire  on CentOS",tags:["Openfire"],date:"2016-08-02T16:04:48.000Z"},prevItem:{title:"HowTo Setup MariaDB Galera Cluster 10 On CentOS 6.x",permalink:"/2016/08/04/HowTo-Setup-MariaDB-Galera-Cluster-10-On-CentOS-6-x"},nextItem:{title:"HowTo Use Docker create a Tomcat Project",permalink:"/2016/08/02/HowTo-Use-Docker-create-a-Tomcat-Project"}},p={authorsImageUrls:[]},s=[{value:"Install Centos 6.x x86_64",id:"install-centos-6x-x86_64",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56\u8f6f\u4ef6",id:"\u5b89\u88c5\u4f9d\u8d56\u8f6f\u4ef6",level:2},{value:"\u4e0b\u8f7d openfire 3.8 \u5230\u672c\u5730",id:"\u4e0b\u8f7d-openfire-38-\u5230\u672c\u5730",level:3},{value:"\u5b89\u88c5 openfire 3.8",id:"\u5b89\u88c5-openfire-38",level:3},{value:"\u8bbe\u7f6e\u670d\u52a1\u5f00\u542f\u81ea\u542f\u52a8",id:"\u8bbe\u7f6e\u670d\u52a1\u5f00\u542f\u81ea\u542f\u52a8",level:3},{value:"Yum Install mysql-server",id:"yum-install-mysql-server",level:3},{value:"\u521b\u5efa openfire \u6570\u636e\u5e93",id:"\u521b\u5efa-openfire-\u6570\u636e\u5e93",level:2},{value:"\u542f\u52a8 openfire",id:"\u542f\u52a8-openfire",level:3},{value:"\u4e4b\u540e\u7684\u521d\u59cb\u5316\u6b65\u9aa4\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u64cd\u4f5c\uff0c\u6ce8\u610f\u8bbe\u5b9a\u6570\u636e\u5e93\u5730\u5740\u7528\u6237\u540d\u548c\u5bc6\u7801\u65f6\u4e0d\u8981\u51fa\u9519",id:"\u4e4b\u540e\u7684\u521d\u59cb\u5316\u6b65\u9aa4\u8bf7\u6839\u636e\u5b9e\u9645\u64cd\u4f5c\u6ce8\u610f\u8bbe\u5b9a\u6570\u636e\u5e93\u5730\u5740\u7528\u6237\u540d\u548c\u5bc6\u7801\u65f6\u4e0d\u8981\u51fa\u9519",level:2},{value:"FAQ",id:"faq",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-centos-6x-x86_64"},"Install Centos 6.x x86_64"),(0,a.kt)("p",null,"  ",(0,a.kt)("em",{parentName:"p"},"\u7565.")),(0,a.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56\u8f6f\u4ef6"},"\u5b89\u88c5\u4f9d\u8d56\u8f6f\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum -y install wget java glibc.i686\n")),(0,a.kt)("h3",{id:"\u4e0b\u8f7d-openfire-38-\u5230\u672c\u5730"},"\u4e0b\u8f7d openfire 3.8 \u5230\u672c\u5730"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://download.igniterealtime.org/openfire/openfire-3.8.1-1.i386.rpm\n")),(0,a.kt)("h3",{id:"\u5b89\u88c5-openfire-38"},"\u5b89\u88c5 openfire 3.8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum -y install ./openfire*rpm\n")),(0,a.kt)("h3",{id:"\u8bbe\u7f6e\u670d\u52a1\u5f00\u542f\u81ea\u542f\u52a8"},"\u8bbe\u7f6e\u670d\u52a1\u5f00\u542f\u81ea\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chkconfig openfire on\n\n")),(0,a.kt)("h3",{id:"yum-install-mysql-server"},"Yum Install mysql-server"),(0,a.kt)("p",null,"\u8be6\u89c1\uff1a ",(0,a.kt)("a",{parentName:"p",href:"http://blog.ultraera.org/how-to-install-mysql-5-6-on-centos/"},"How to Install MySQL 5.5/6/7 on RHEL/CentOS 5/6/7")),(0,a.kt)("h2",{id:"\u521b\u5efa-openfire-\u6570\u636e\u5e93"},"\u521b\u5efa openfire \u6570\u636e\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u root -p\n\ncreate database openfire character set utf8;\ngrant all privileges on openfire.* to 'openfire'@'127.0.0.1' identified by 'openfire' with grant option;\n")),(0,a.kt)("h3",{id:"\u542f\u52a8-openfire"},"\u542f\u52a8 openfire"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"http://Host:9090\n")),(0,a.kt)("h2",{id:"\u4e4b\u540e\u7684\u521d\u59cb\u5316\u6b65\u9aa4\u8bf7\u6839\u636e\u5b9e\u9645\u64cd\u4f5c\u6ce8\u610f\u8bbe\u5b9a\u6570\u636e\u5e93\u5730\u5740\u7528\u6237\u540d\u548c\u5bc6\u7801\u65f6\u4e0d\u8981\u51fa\u9519"},"\u4e4b\u540e\u7684\u521d\u59cb\u5316\u6b65\u9aa4\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u64cd\u4f5c\uff0c\u6ce8\u610f\u8bbe\u5b9a\u6570\u636e\u5e93\u5730\u5740\u7528\u6237\u540d\u548c\u5bc6\u7801\u65f6\u4e0d\u8981\u51fa\u9519"),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("p",null,"openfire \u5b89\u88c5\u5b8c\u6bd5\u540e\u65e0\u6cd5\u767b\u5f55\u63a7\u5236\u53f0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u62a5\u9519\uff1aLogin failed:make sure your username and password are correct and that you\u2019re an admin or moderator\n\n\u89e3\u51b3\u65b9\u6848\u5982\u4e0b\uff1a\n1.\u4f7f\u7528Mysql\u67e5\u770b\u5de5\u5177\u8fdb\u5165\u6570\u636e\u5e93\uff0c\u8fdb\u5165\u8868\u201cofuser\u201d\uff0c\u5c06\u8be5\u8868\u6e05\u7a7a\uff0c\u7136\u540e\u6267\u884c\u8be5SQL\nINSERT INTO ofUser (username, plainPassword, name, email, creationDate, modificationDate)\n    VALUES ('admin', 'admin', 'Administrator', 'admin@example.com', '0', '0');\n\n2.\u5173\u95edopenfire\u670d\u52a1\uff0c\u5c31\u662f\u4ece\u5176\u63a7\u5236\u53f0stop\u7136\u540e\u518dstart\uff0c\u518d\u7528\u7528\u6237\u540d\uff1aadmin,\u5bc6\u7801\uff1aadmin\u767b\u5f55\u5373\u53ef\n")),(0,a.kt)("p",null,"openfire \u8fdb\u7a0b\u65e0\u6cd5\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\u62a5\u9519\uff1anohup: failed to run command `/opt/openfire/jre/bin/java\': No such file or directory\n\n\u89e3\u51b3\u65b9\u6848\u5982\u4e0b\uff1a\n\u7ecf\u68c0\u67e5\u662f\u7531\u4e8eopenfire\u672a\u80fd\u6b63\u786e\u8bc6\u522bjre\u73af\u5883\u53d8\u91cf\u5bfc\u81f4\uff0c\u5b89\u88c5\u65f6\u81ea\u5e26\u7684jre\u662f32\u4f4d\uff0c\u4f46\u64cd\u4f5c\u7cfb\u7edf\u5374\u662f64\u4f4d\u64cd\u4f5c\u5e73\u53f0\u3002\n\uff0c\u6545\u5728/etc/init.d/openfire\u7684\u542f\u52a8\u811a\u672c\u4fee\u6539\uff0c\nJAVA_HOME="/usr/lib/jvm/jre-$VERSION.x86_64"\n')))}m.isMDXComponent=!0}}]);