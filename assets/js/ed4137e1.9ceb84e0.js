"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[51716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",E={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),s=a,d=c["".concat(m,".").concat(s)]||c[s]||E[s]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>E,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"MySQL \u7d22\u5f15\u521b\u5efa\u3001\u5220\u9664\u548c\u67e5\u770b",tags:["MySQL"],date:new Date("2017-02-09T18:29:50.000Z")},o=void 0,i={permalink:"/2017/02/09/MySQL-8-\u7d22\u5f15\u521b\u5efa\u3001\u5220\u9664\u548c\u67e5\u770b",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2017-02-09-MySQL-8-\u7d22\u5f15\u521b\u5efa\u3001\u5220\u9664\u548c\u67e5\u770b.md",source:"@site/blog/2017-02-09-MySQL-8-\u7d22\u5f15\u521b\u5efa\u3001\u5220\u9664\u548c\u67e5\u770b.md",title:"MySQL \u7d22\u5f15\u521b\u5efa\u3001\u5220\u9664\u548c\u67e5\u770b",description:"1. \u7d22\u5f15\u7684\u4f5c\u7528",date:"2017-02-09T18:29:50.000Z",formattedDate:"2017\u5e742\u67089\u65e5",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],readingTime:2.89,hasTruncateMarker:!1,authors:[],frontMatter:{title:"MySQL \u7d22\u5f15\u521b\u5efa\u3001\u5220\u9664\u548c\u67e5\u770b",tags:["MySQL"],date:"2017-02-09T18:29:50.000Z"},prevItem:{title:"HowTo Automatic Updates CENTOS/RHEL Using YUM",permalink:"/2017/02/19/HowTo-Automatic-Updates-CENTOS-RHEL-Using-YUM"},nextItem:{title:"HowTo Monitor Tomcat HeadMemory for Zabbix",permalink:"/2017/01/18/HowTo-Monitor-Tomcat-Head-Memory-for-Zabbix"}},m={authorsImageUrls:[]},p=[{value:"<strong>1. \u7d22\u5f15\u7684\u4f5c\u7528</strong>",id:"1-\u7d22\u5f15\u7684\u4f5c\u7528",level:4},{value:"<strong>2. \u521b\u5efa\u7d22\u5f15</strong>",id:"2-\u521b\u5efa\u7d22\u5f15",level:4},{value:"2.1 ALTER TABLE",id:"21-alter-table",level:6},{value:"2.2 CREATE INDEX",id:"22-create-index",level:6},{value:"<strong>3. \u7d22\u5f15\u7c7b\u578b</strong>",id:"3-\u7d22\u5f15\u7c7b\u578b",level:4},{value:"<strong>4. \u5220\u9664\u7d22\u5f15</strong>",id:"4-\u5220\u9664\u7d22\u5f15",level:4},{value:"<strong>5. \u67e5\u770b\u7d22\u5f15</strong>",id:"5-\u67e5\u770b\u7d22\u5f15",level:4}],u={toc:p},c="wrapper";function E(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"1-\u7d22\u5f15\u7684\u4f5c\u7528"},(0,a.kt)("strong",{parentName:"h4"},"1. \u7d22\u5f15\u7684\u4f5c\u7528")),(0,a.kt)("p",null,"   \u5728\u7d22\u5f15\u5217\u4e0a\uff0c\u6570\u636e\u5e93\u5229\u7528\u5404\u79cd\u5404\u6837\u7684\u5feb\u901f\u5b9a\u4f4d\u6280\u672f\uff0c\u80fd\u591f\u5927\u5927\u7684\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\uff0c\u7279\u522b\u662f\u5f53\u6570\u636e\u91cf\u975e\u5e38\u5927\u548c\u67e5\u8be2\u8bbe\u8ba1\u5230\u591a\u4e2a\u8868\u65f6\uff0c\u7d22\u5f15\u7684\u5229\u7528\u80fd\u591f\u5c06\u6548\u7387\u63d0\u9ad8\u6210\u5343\u4e0a\u4e07\u500d\uff0c\u5f53\u7136\u8981\u5408\u7406\u7684\u5229\u7528\u7d22\u5f15\u3002"),(0,a.kt)("h4",{id:"2-\u521b\u5efa\u7d22\u5f15"},(0,a.kt)("strong",{parentName:"h4"},"2. \u521b\u5efa\u7d22\u5f15")),(0,a.kt)("p",null,"\u200b \u5728\u6267\u884c CREATE TABLE \u65f6\u53ef\u4ee5\u521b\u5efa\u7d22\u5f15\uff0c\u4e5f\u53ef\u4ee5\u5728\u4e4b\u540e\u5355\u72ec\u4f7f\u7528 CREATE INDEX \u6216 ALTER TABLE \u6765\u4e3a\u8868\u589e\u52a0\u7d22\u5f15\u3002"),(0,a.kt)("h6",{id:"21-alter-table"},"2.1 ALTER TABLE"),(0,a.kt)("p",null,"\u200b ALTER TABLE \u7528\u6765\u521b\u5efa\u666e\u901a\u7d22\u5f15\u3001UNIQUE \u7d22\u5f15\u6216 PRIMARY KEY \u7d22\u5f15\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ALTER TABLE tb_name ADD INDEX index_Name (column_list);\nALTER TABLE tb_name ADD UNIQUE (column_list);\nALTER TABLE tb_name ADD PRIMARY KEY (column_list);\n")),(0,a.kt)("p",null,"\u200b tb_name \u662f\u8981\u589e\u52a0\u7d22\u5f15\u7684\u8868\u540d\uff0ccolumn_list \u662f\u8981\u589e\u52a0\u7d22\u5f15\u7684\u5217\uff0c\u591a\u5217\u7528\u9017\u53f7\u9694\u5f00\uff0cindex_Name \u662f\u53ef\u9009\uff0c\u7f3a\u7701\u4e3a\u7b2c\u4e00\u4e2a\u7d22\u5f15\u5217\u8d4b\u540d\u79f0\uff0cALTER TABLE \u5141\u8bb8\u5728\u5355\u4e2a\u8bed\u53e5\u4e2d\u66f4\u6539\u591a\u4e2a\u8868\uff0c\u56e0\u6b64\u53ef\u4ee5\u4e5f\u53ef\u4ee5\u540c\u65f6\u521b\u5efa\u591a\u4e2a\u7d22\u5f15\u3002"),(0,a.kt)("h6",{id:"22-create-index"},"2.2 CREATE INDEX"),(0,a.kt)("p",null,"\u200b CREATE INDEX \u53ef\u5bf9\u8868\u589e\u52a0\u666e\u901a\u7d22\u5f15\u6216\u8005 UNIQUE \u7d22\u5f15\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE INDEX index_Name ON tb_name(column_list);\nCREATE UNIQUE INDEX index_Name ON tb_name(column_list);\n")),(0,a.kt)("p",null,"\u200b tb_name\u3001index_Name \u548c column_list \u5177\u6709 ALTER TABLE \u8bed\u53e5\u4e2d\u76f8\u540c\u7684\u542b\u4e49\uff0c\u7d22\u5f15\u540d\u79f0\u4e0d\u53ef\u81ea\u5b9a\u4e49\uff0c\u4e5f\u4e0d\u80fd\u521b\u5efa PRIMARY KEY\u3002"),(0,a.kt)("h4",{id:"3-\u7d22\u5f15\u7c7b\u578b"},(0,a.kt)("strong",{parentName:"h4"},"3. \u7d22\u5f15\u7c7b\u578b")),(0,a.kt)("p",null,"\u200b \u5728\u521b\u5efa\u7d22\u5f15\u65f6\uff0c\u53ef\u4ee5\u89c4\u5b9a\u7d22\u5f15\u80fd\u5426\u5305\u542b\u91cd\u590d\u7684\u503c\uff0c\u5982\u679c\u4e0d\u5305\u542b\uff0c\u5219\u7d22\u5f15\u5e94\u8be5\u4e3a PRIMARY KEY \u6216 UNIQUE \u7d22\u5f15\uff0c\u5bf9\u4e8e\u5355\u5217\u552f\u4e00\u7d22\u5f15\uff0c\u8fd9\u80fd\u4fdd\u8bc1\u5355\u5217\u4e0d\u5305\u542b\u91cd\u590d\u7684\u503c\uff0c\u5bf9\u4e8e\u591a\u5217\u552f\u4e00\u7d22\u5f15\uff0c\u4fdd\u8bc1\u591a\u503c\u7684\u7ec4\u5408\u4e0d\u91cd\u590d\u3002"),(0,a.kt)("p",null,"\u200b PRIMAY KEY \u7d22\u5f15\u4e0e UNIQUE \u7d22\u5f15\u975e\u5e38\u7c7b\u4f3c\uff0c\u5b9e\u9645\u4e0a PRIMAY KEY \u7d22\u5f15\u4ec5\u662f\u4e00\u4e2a\u5177\u6709\u540d\u79f0 PRIMAY \u7684 UNIQUE \u7d22\u5f15\uff0c\u8fd9\u8868\u793a\u4e00\u4e2a\u8868\u53ea\u80fd\u5305\u542b\u4e00\u4e2a PRIMAY KEY \u7d22\u5f15\uff0c\u56e0\u4e3a\u4e00\u4e2a\u8868\u4e2d\u4e0d\u53ef\u80fd\u5177\u6709\u4e24\u4e2a\u540c\u540d\u7684\u7d22\u5f15\u3002"),(0,a.kt)("h4",{id:"4-\u5220\u9664\u7d22\u5f15"},(0,a.kt)("strong",{parentName:"h4"},"4. \u5220\u9664\u7d22\u5f15")),(0,a.kt)("p",null,"\u200b \u53ef\u4ee5\u4f7f\u7528 ALTER TABLE \u6216 DROP INDEX \u8bed\u53e5\u6765\u5220\u9664\u7d22\u5f15\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DROP INDEX index_Name On tb_name;\nALTER TABLE tb_Name DROP TABLE index_Name;\nALTER TABLE tb_Name DROP PRIMAY KEY;\n")),(0,a.kt)("p",null,"\u200b \u7b2c\u4e00\u6761\u548c\u7b2c\u4e8c\u6761\u4f5c\u7528\u662f\u4e00\u6837\u7684\uff0c\u5220\u9664 tb_Name \u4e2d index_Name \u7d22\u5f15\uff1b\u7b2c\u4e09\u6761\u4ec5\u9002\u7528\u4e8e\u5220\u9664 PRIMAY KEY \u65f6\uff0c\u56e0\u4e3a\u4e00\u4e2a\u53ea\u53ef\u80fd\u6709\u4e00\u4e2a PRIMAY KEY \u7d22\u5f15\u3002"),(0,a.kt)("p",null,"\u200b \u53e6\u5916\uff0c\u5982\u679c\u5728\u8868\u4e2d\u5220\u9664\u4e86\u67d0\u5217\uff0c\u5219\u7d22\u5f15\u4f1a\u53d7\u5230\u5f71\u54cd\uff0c\u5bf9\u4e8e\u591a\u5217\u7ec4\u5408\u7684\u7d22\u5f15\uff0c\u5982\u679c\u5220\u9664\u5176\u4e2d\u67d0\u5217\uff0c\u5219\u8be5\u5217\u4e5f\u4f1a\u5728\u7d22\u5f15\u4e2d\u5220\u9664\uff0c\u5982\u679c\u5220\u9664\u6240\u6709\u5217\uff0c\u5219\u8be5\u7d22\u5f15\u4e5f\u4f1a\u88ab\u5220\u9664\u3002"),(0,a.kt)("h4",{id:"5-\u67e5\u770b\u7d22\u5f15"},(0,a.kt)("strong",{parentName:"h4"},"5. \u67e5\u770b\u7d22\u5f15")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> show index from tb_name;\nmysql> show keys from tb_name;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Table : \u8868\u540d"),(0,a.kt)("li",{parentName:"ul"},"Non_unique\uff1a\u5982\u679c\u7d22\u5f15\u4e0d\u80fd\u5305\u542b\u91cd\u590d\u503c\u4e3a 0\uff0c\u5982\u679c\u53ef\u4ee5\u4e3a 1"),(0,a.kt)("li",{parentName:"ul"},"Key_name\uff1a\u7d22\u5f15\u7684\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"Seq_in_index\uff1a\u7d22\u5f15\u4e2d\u5217\u7684\u5e8f\u53f7\uff0c\u4ece 1 \u5f00\u59cb"),(0,a.kt)("li",{parentName:"ul"},"Column_name\uff1a\u5217\u7684\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"Collation\uff1a\u5217\u4ee5\u4ec0\u4e48\u65b9\u5f0f\u5b58\u50a8\u5728\u7d22\u5f15\u4e2d\uff0c\u5728 MySQL \u4e2d\u6709\u503c\u2018A\u2019(\u5347\u5e8f) \u548c NULL(\u65e0\u5206\u7c7b)"),(0,a.kt)("li",{parentName:"ul"},"Cardinality\uff1a\u7d22\u5f15\u4e2d\u552f\u4e00\u503c\u7684\u6570\u91cf\u4f30\u8ba1\u503c\uff0c\u901a\u8fc7\u8fd0\u884c ANALYZE TABLE \u6216\u8005 myisamchk -a \u53ef\u4ee5\u66f4\u65b0\uff0c\u57fa\u6570\u6839\u636e\u88ab\u5b58\u50a8\u7684\u6574\u6570\u7684\u7edf\u8ba1\u6570\u636e\u6765\u8ba1\u6570\uff0c\u6240\u4ee5\uff0c\u5373\u4f7f\u5bf9\u4e8e\u5c0f\u578b\u8868\uff0c\u8be5\u503c\u4e5f\u6ca1\u6709\u5fc5\u8981\u662f\u7cbe\u786e\u7684\uff0c\u57fa\u6570\u8d8a\u5927\uff0c\u5f53\u8fdb\u884c\u8054\u5408\u65f6\uff0cMySQL \u4f7f\u7528\u8be5\u7d22\u5f15\u7684\u673a\u4f1a\u5c31\u8d8a\u5927\u3002"),(0,a.kt)("li",{parentName:"ul"},"Sub_part\uff1a\u5982\u679c\u5217\u53ea\u662f\u88ab\u90e8\u5206\u7f16\u5165\uff0c\u5219\u4e3a\u7f16\u5165\u7d22\u5f15\u7684\u5b57\u7b26\u6570\u76ee\uff0c\u5982\u679c\u6574\u5217\u88ab\u7f16\u5165\u7d22\u5f15\uff0c\u5219\u4e3a NULL"),(0,a.kt)("li",{parentName:"ul"},"Packed\uff1a\u5173\u952e\u5b57\u5982\u4f55\u88ab\u538b\u7f29\uff0c\u6ca1\u6709\u538b\u7f29\u4e3a NULL"),(0,a.kt)("li",{parentName:"ul"},"Null\uff1a\u5982\u679c\u5217\u542b\u6709 NULL \u4e3a YES\uff0c\u5982\u679c\u6ca1\u6709\u5219\u4e3a NO"),(0,a.kt)("li",{parentName:"ul"},"Index_type\uff1a\u7528\u8fc7\u7684\u7d22\u5f15\u65b9\u6cd5\uff0cBTREE\uff0cFULLTEXT\uff0cHASH\uff0cRTREE"),(0,a.kt)("li",{parentName:"ul"},"Comment\uff1a\u5907\u6ce8")))}E.isMDXComponent=!0}}]);