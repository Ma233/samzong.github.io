"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[73470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(r),y=o,d=m["".concat(c,".").concat(y)]||m[y]||u[y]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},73556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={title:"HowTo Reset MySQL Root Password",tags:["MySQL"],date:new Date("2016-12-04T09:57:23.000Z")},l=void 0,s={permalink:"/2016/12/04/HowTo-Reset-MySQL-Root-Password",source:"@site/blog/2016-12-04-HowTo-Reset-MySQL-Root-Password.md",title:"HowTo Reset MySQL Root Password",description:"1. \u5904\u7406\u7684\u72b6\u6001",date:"2016-12-04T09:57:23.000Z",formattedDate:"2016\u5e7412\u67084\u65e5",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],readingTime:1.25,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Reset MySQL Root Password",tags:["MySQL"],date:"2016-12-04T09:57:23.000Z"},prevItem:{title:"HowTo Install Python3 on CentOS 6.x",permalink:"/2016/12/08/HowTo-Install-Python3-on-CentOS-6-x"},nextItem:{title:"Tomcat \u5229\u7528 JDK \u81ea\u8eab keytool \u5b9e\u73b0 HTTPS",permalink:"/2016/12/03/Tomcat-2-\u5229\u7528JDK\u81ea\u8eabkeytool\u5b9e\u73b0HTTPS"}},c={authorsImageUrls:[]},i=[{value:"1. \u5904\u7406\u7684\u72b6\u6001",id:"1-\u5904\u7406\u7684\u72b6\u6001",level:4},{value:"2. \u91cd\u7f6e\u5bc6\u7801",id:"2-\u91cd\u7f6e\u5bc6\u7801",level:4}],p={toc:i},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"1-\u5904\u7406\u7684\u72b6\u6001"},"1. \u5904\u7406\u7684\u72b6\u6001"),(0,o.kt)("p",null," \u9996\u5148\u786e\u8ba4\u670d\u52a1\u5668\u51fa\u4e8e\u5b89\u5168\u7684\u72b6\u6001\uff0c\u4e5f\u5c31\u662f\u6ca1\u6709\u4eba\u80fd\u591f\u4efb\u610f\u5730\u8fde\u63a5 MySQL \u6570\u636e\u5e93\u3002\n\u56e0\u4e3a\u5728\u91cd\u65b0\u8bbe\u7f6e MySQL \u7684 root \u5bc6\u7801\u7684\u671f\u95f4\uff0cMySQL \u6570\u636e\u5e93\u5b8c\u5168\u51fa\u4e8e\u6ca1\u6709\u5bc6\u7801\u4fdd\u62a4\u7684\n\u72b6\u6001\u4e0b\uff0c\u5176\u4ed6\u7684\u7528\u6237\u4e5f\u53ef\u4ee5\u4efb\u610f\u5730\u767b\u5f55\u548c\u4fee\u6539 MySQL \u7684\u4fe1\u606f\u3002\u53ef\u4ee5\u91c7\u7528\u5c06 MySQL \u5bf9\n\u5916\u7684\u7aef\u53e3\u5c01\u95ed\uff0c\u5e76\u4e14\u505c\u6b62 Apache \u4ee5\u53ca\u6240\u6709\u7684\u7528\u6237\u8fdb\u7a0b\u7684\u65b9\u6cd5\u5b9e\u73b0\u670d\u52a1\u5668\u7684\u51c6\u5b89\u5168\n\u72b6\u6001\u3002\u6700\u5b89\u5168\u7684\u72b6\u6001\u662f\u5230\u670d\u52a1\u5668\u7684 Console \u4e0a\u9762\u64cd\u4f5c\uff0c\u5e76\u4e14\u62d4\u6389\u7f51\u7ebf\u3002"),(0,o.kt)("h4",{id:"2-\u91cd\u7f6e\u5bc6\u7801"},"2. \u91cd\u7f6e\u5bc6\u7801"),(0,o.kt)("p",null,"\u4fee\u6539 mysql \u914d\u7f6e\u6587\u4ef6\uff0c\u589e\u52a0 skip-grant-tables"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@demo ~]# vim /etc/my.cnf\n[mysqld]\nskip-grant-tables\n")),(0,o.kt)("p",null,"\u91cd\u542f mysqld"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@demo ~]# service mysqld restart\nStopping mysqld:                                           [  OK  ]\nStarting mysqld:                                           [  OK  ]\n")),(0,o.kt)("p",null,"\u767b\u5f55 mysql\uff0c\u5e76\u4fee\u6539 root \u5bc6\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@demo ~]# mysql -u root\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 3\nServer version: 5.5.53 MySQL Community Server (GPL)\n\nCopyright (c) 2000, 2016, Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> use mysql\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n\nDatabase changed\nmysql> update user set password=password('new-pass') where user='root';\nQuery OK, 5 rows affected (0.00 sec)\nRows matched: 5  Changed: 5  Warnings: 0\n")),(0,o.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u53bb\u9664 skip-grant-tables\uff0c\u5e76\u91cd\u542f\u670d\u52a1\u5668\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@demo ~]# vim /etc/my.cnf\n[root@demo ~]# service mysqld restart\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u65b0\u5bc6\u7801\u767b\u5f55\u5230 mysql"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@demo ~]# mysql -h localhost -u root -p\n")))}u.isMDXComponent=!0}}]);