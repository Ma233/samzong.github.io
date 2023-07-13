"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[44024],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>E});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(r),d=a,E=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return r?n.createElement(E,o(o({ref:t},u),{},{components:r})):n.createElement(E,o({ref:t},u))}));function E(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95519:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u6bcf\u65e5\u5907\u4efd MySQL \u5355\u8868\u6570\u636e",tags:["MySQL"],date:new Date("2017-01-15T08:12:55.000Z")},o=void 0,i={permalink:"/2017/01/15/\u6bcf\u65e5\u5907\u4efdMySQL\u5355\u8868\u6570\u636e",source:"@site/blog/2017-01-15-\u6bcf\u65e5\u5907\u4efdMySQL\u5355\u8868\u6570\u636e.md",title:"\u6bcf\u65e5\u5907\u4efd MySQL \u5355\u8868\u6570\u636e",description:"\u6700\u8fd1\u6108\u8fd1\u5e74\u5e95\uff0c\u5ba2\u6237\u4e1a\u52a1\u6d89\u53ca\u5bf9\u8d26\u64cd\u4f5c\uff0c\u6240\u4ee5\u540c\u4e8b\u63d0\u51fa\u9700\u6c42\u9700\u8981\u5355\u72ec\u5907\u4efd\u67d0\u5f20\u8868\u6570\u636e\uff0c\u5e76\u4e14\u6bcf\u65e5\u5907\u4efd\uff1b\u601d\u8003\u4e4b\u540e\u89e3\u51b3\u529e\u6cd5\u5982\u4e0b\uff1a",date:"2017-01-15T08:12:55.000Z",formattedDate:"2017\u5e741\u670815\u65e5",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],readingTime:1.2233333333333334,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u6bcf\u65e5\u5907\u4efd MySQL \u5355\u8868\u6570\u636e",tags:["MySQL"],date:"2017-01-15T08:12:55.000Z"},prevItem:{title:"HowTo Monitor Tomcat HeadMemory for Zabbix",permalink:"/2017/01/18/HowTo-Monitor-Tomcat-Head-Memory-for-Zabbix"},nextItem:{title:"\u751f\u6d3b\u5728\u522b\u5904",permalink:"/2017/01/10/\u751f\u6d3b\u5728\u522b\u5904"}},p={authorsImageUrls:[]},m=[{value:"1. mysqldump \u5bfc\u51fa\u4f46\u5f20\u8868\u7684\u8868\u7ed3\u6784\u53ca\u6570\u636e",id:"1-mysqldump-\u5bfc\u51fa\u4f46\u5f20\u8868\u7684\u8868\u7ed3\u6784\u53ca\u6570\u636e",level:4},{value:"2. \u65b0\u589e\u6570\u636e\u5e93\uff0c\u4e13\u505a\u4e34\u65f6\u6bcf\u65e5\u6570\u636e\u5907\u4efd\u5e93",id:"2-\u65b0\u589e\u6570\u636e\u5e93\u4e13\u505a\u4e34\u65f6\u6bcf\u65e5\u6570\u636e\u5907\u4efd\u5e93",level:4},{value:"3. \u5bfc\u5165\u8be5\u8868\u6570\u636e\u5230\u65b0\u589e\u6570\u636e\u5e93\u5185",id:"3-\u5bfc\u5165\u8be5\u8868\u6570\u636e\u5230\u65b0\u589e\u6570\u636e\u5e93\u5185",level:4},{value:"4 . \u91cd\u547d\u540d\u5bfc\u5165\u7684\u8868\u540d",id:"4--\u91cd\u547d\u540d\u5bfc\u5165\u7684\u8868\u540d",level:4},{value:"5. \u7f16\u5199\u811a\u672c",id:"5-\u7f16\u5199\u811a\u672c",level:4},{value:"6. \u6dfb\u52a0\u5230 Linux \u8ba1\u5212\u4efb\u52a1",id:"6-\u6dfb\u52a0\u5230-linux-\u8ba1\u5212\u4efb\u52a1",level:4}],u={toc:m},c="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6700\u8fd1\u6108\u8fd1\u5e74\u5e95\uff0c\u5ba2\u6237\u4e1a\u52a1\u6d89\u53ca\u5bf9\u8d26\u64cd\u4f5c\uff0c\u6240\u4ee5\u540c\u4e8b\u63d0\u51fa\u9700\u6c42\u9700\u8981\u5355\u72ec\u5907\u4efd\u67d0\u5f20\u8868\u6570\u636e\uff0c\u5e76\u4e14\u6bcf\u65e5\u5907\u4efd\uff1b\u601d\u8003\u4e4b\u540e\u89e3\u51b3\u529e\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"mysqldump \u5bfc\u51fa\u5355\u5f20\u8868\u7684\u8868\u7ed3\u6784\u53ca\u6570\u636e"),(0,a.kt)("li",{parentName:"ol"},"\u65b0\u589e\u6570\u636e\u5e93\uff0c\u4e13\u505a\u4e34\u65f6\u6bcf\u65e5\u6570\u636e\u5907\u4efd\u5e93"),(0,a.kt)("li",{parentName:"ol"},"\u5bfc\u5165\u8be5\u8868\u6570\u636e\u5230\u65b0\u589e\u6570\u636e\u5e93\u5185"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u547d\u540d\u5bfc\u5165\u7684\u8868\u540d\uff08\u9884\u9632\u8ba1\u5212\u4efb\u52a1\u4e0b\u6b21\u5bfc\u5165\u65f6\u6570\u636e\u8986\u76d6\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u7f16\u5199\u811a\u672c\uff0c\u6dfb\u52a0 Linux \u8ba1\u5212\u4efb\u52a1")),(0,a.kt)("h4",{id:"1-mysqldump-\u5bfc\u51fa\u4f46\u5f20\u8868\u7684\u8868\u7ed3\u6784\u53ca\u6570\u636e"},"1. mysqldump \u5bfc\u51fa\u4f46\u5f20\u8868\u7684\u8868\u7ed3\u6784\u53ca\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysqldump -h dbServer -PdbServerPort -u db_user -p -d dbName tbName > tbName.sql\n")),(0,a.kt)("h4",{id:"2-\u65b0\u589e\u6570\u636e\u5e93\u4e13\u505a\u4e34\u65f6\u6bcf\u65e5\u6570\u636e\u5907\u4efd\u5e93"},"2. \u65b0\u589e\u6570\u636e\u5e93\uff0c\u4e13\u505a\u4e34\u65f6\u6bcf\u65e5\u6570\u636e\u5907\u4efd\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# loginTo your DBserver\nmysql> create database bakdbName character set utf8;\n")),(0,a.kt)("h4",{id:"3-\u5bfc\u5165\u8be5\u8868\u6570\u636e\u5230\u65b0\u589e\u6570\u636e\u5e93\u5185"},"3. \u5bfc\u5165\u8be5\u8868\u6570\u636e\u5230\u65b0\u589e\u6570\u636e\u5e93\u5185"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql -h dbServer -P dbServerPort -u db_user -p bakdbName < tbName.sql\n")),(0,a.kt)("h4",{id:"4--\u91cd\u547d\u540d\u5bfc\u5165\u7684\u8868\u540d"},"4 . \u91cd\u547d\u540d\u5bfc\u5165\u7684\u8868\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mysql -u db_user -p -e "rename table bakdbName.tbName to bakdbName.tbName_$DATE"\n')),(0,a.kt)("h4",{id:"5-\u7f16\u5199\u811a\u672c"},"5. \u7f16\u5199\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[root@testServer01 ~]# cat /usr/local/bin/bakTable.sh\n#!/bin/bash\n\n#Create by SAMZONG\n\nDATE=`date +%Y%m%d`\nTMPDIR=/tmp/baksql\n\n# modify your DB configure\nDBSERVER1=localhost\nDBSERVER1_PORT=3306\nDBSERVER1_USER=root\nDBSERVER1_PASSWORD=password\nMASTER_DBNAME=zabbix\nMASTER_TBNAME=users\n\nDBSERVER2=localhost\nDBSERVER2_PORT=3306\nDBSERVER2_USER=root\nDBSERVER2_PASSWORD=password\nBAKDBNAME=z3\n\n# creat tmp folder\nif [ ! -d $TMPDIR ]; then\n mkdir $TMPDIR\nfi\n\n# dump tbName\nmysqldump -h $DBSERVER1 -P $DBSERVER1_PORT -u $DBSERVER1_USER -p"$DBSERVER1_PASSWORD" -d $MASTER_DBNAME  $MASTER_TBNAME > $TMPDIR/$MASTER_TBNAME.sql\n\n\n# insert tbNAME to bakdbName\nif [ $? -eq 0  ]; then\n mysql -h $DBSERVER2 -P $DBSERVER2_PORT -u $DBSERVER2_USER -p"$DBSERVER2_PASSWORD" $BAKDBNAME < $TMPDIR/$MASTER_TBNAME.sql\n\n if [ $? -eq 0 ]; then\n  # rename tbName\n  mysql -h $DBSERVER2 -P $DBSERVER2_PORT -u $DBSERVER2_USER -p"$DBSERVER2_PASSWORD" -e "rename table "$BAKDBNAME"."$MASTER_TBNAME" to "$BAKDBNAME"."$MASTER_TBNAME"_"$DATE";"\n fi\n\nfi\n')),(0,a.kt)("h4",{id:"6-\u6dfb\u52a0\u5230-linux-\u8ba1\u5212\u4efb\u52a1"},"6. \u6dfb\u52a0\u5230 Linux \u8ba1\u5212\u4efb\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"00 00 * * * /usr/local/bin/bakTable.sh\n")))}s.isMDXComponent=!0}}]);