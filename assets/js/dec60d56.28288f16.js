"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[39838],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>b});var l=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},s=Object.keys(e);for(l=0;l<s.length;l++)t=s[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)t=s[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var r=l.createContext({}),d=function(e){var a=l.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},m=function(e){var a=d(e.components);return l.createElement(r.Provider,{value:a},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},c=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(t),c=n,b=u["".concat(r,".").concat(c)]||u[c]||i[c]||s;return t?l.createElement(b,p(p({ref:a},m),{},{components:t})):l.createElement(b,p({ref:a},m))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,p=new Array(s);p[0]=c;var o={};for(var r in a)hasOwnProperty.call(a,r)&&(o[r]=a[r]);o.originalType=e,o[u]="string"==typeof e?e:n,p[1]=o;for(var d=2;d<s;d++)p[d]=t[d];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},67659:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>p,default:()=>i,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var l=t(87462),n=(t(67294),t(3905));const s={title:"mysqldump \u5e38\u7528\u53c2\u6570",tags:["MySQL"],date:new Date("2016-05-05T04:30:11.000Z")},p=void 0,o={permalink:"/2016/05/05/mysql-3-mysqldump-chang-yong-can-shu",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2016-05-05-mysql-3-mysqldump-chang-yong-can-shu.md",source:"@site/blog/2016-05-05-mysql-3-mysqldump-chang-yong-can-shu.md",title:"mysqldump \u5e38\u7528\u53c2\u6570",description:"\u5e38\u7528\u7684 mysqldump \u547d\u4ee4\u7ec4\u5408\u3002",date:"2016-05-05T04:30:11.000Z",formattedDate:"2016\u5e745\u67085\u65e5",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],readingTime:3.9033333333333333,hasTruncateMarker:!1,authors:[],frontMatter:{title:"mysqldump \u5e38\u7528\u53c2\u6570",tags:["MySQL"],date:"2016-05-05T04:30:11.000Z"},prevItem:{title:"CentOS \u4fee\u6539\u7cfb\u7edf\u4e3b\u673a\u540d",permalink:"/2016/05/05/centos-7-1-xiu-gai-xi-tong-zhu-ji-ming"},nextItem:{title:"HowTo Install Python 2.7.8 on CentOS 6.x",permalink:"/2016/05/04/HowTo-Install-Python-2-7-8-on-CentOS-6-x"}},r={authorsImageUrls:[]},d=[{value:"\u5907\u4efd\u6570\u636e\u5e93",id:"\u5907\u4efd\u6570\u636e\u5e93",level:2},{value:"\u5907\u4efd\u6240\u6709\u5e93\u5230\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6",id:"\u5907\u4efd\u6240\u6709\u5e93\u5230\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6",level:2},{value:"1. \u5bfc\u51fa\u7ed3\u6784\u4e0d\u5bfc\u51fa\u6570\u636e",id:"1-\u5bfc\u51fa\u7ed3\u6784\u4e0d\u5bfc\u51fa\u6570\u636e",level:3},{value:"2. \u5bfc\u51fa\u6570\u636e\u4e0d\u5bfc\u51fa\u7ed3\u6784",id:"2-\u5bfc\u51fa\u6570\u636e\u4e0d\u5bfc\u51fa\u7ed3\u6784",level:3},{value:"3. \u5bfc\u51fa\u6570\u636e\u548c\u8868\u7ed3\u6784",id:"3-\u5bfc\u51fa\u6570\u636e\u548c\u8868\u7ed3\u6784",level:3},{value:"4. \u5bfc\u51fa\u7279\u5b9a\u8868\u7684\u7ed3\u6784",id:"4-\u5bfc\u51fa\u7279\u5b9a\u8868\u7684\u7ed3\u6784",level:3},{value:"\u5bfc\u5165\u6570\u636e",id:"\u5bfc\u5165\u6570\u636e",level:2},{value:"mysqldump \u53c2\u6570\u8be6\u89e3",id:"mysqldump-\u53c2\u6570\u8be6\u89e3",level:2}],m={toc:d},u="wrapper";function i(e){let{components:a,...t}=e;return(0,n.kt)(u,(0,l.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5e38\u7528\u7684 mysqldump \u547d\u4ee4\u7ec4\u5408\u3002"),(0,n.kt)("h2",{id:"\u5907\u4efd\u6570\u636e\u5e93"},"\u5907\u4efd\u6570\u636e\u5e93"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump db_name > bak_name.sql\nmysqldump -A -u [dbuser] -p db_name > bak_name.sql\nmysqldump -d -A --add-drop-table -uroot -p >xxx.sql\n")),(0,n.kt)("h2",{id:"\u5907\u4efd\u6240\u6709\u5e93\u5230\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6"},"\u5907\u4efd\u6240\u6709\u5e93\u5230\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -e 'show databases' | sed -n '2,$p' | xargs -I DB 'mysqldump DB > DB.sql'\n")),(0,n.kt)("h3",{id:"1-\u5bfc\u51fa\u7ed3\u6784\u4e0d\u5bfc\u51fa\u6570\u636e"},"1. \u5bfc\u51fa\u7ed3\u6784\u4e0d\u5bfc\u51fa\u6570\u636e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump\u3000--opt\u3000-d\u3000db_name\u3000-u\u3000root\u3000-p\u3000>\u3000xxx.sql\n")),(0,n.kt)("h3",{id:"2-\u5bfc\u51fa\u6570\u636e\u4e0d\u5bfc\u51fa\u7ed3\u6784"},"2. \u5bfc\u51fa\u6570\u636e\u4e0d\u5bfc\u51fa\u7ed3\u6784"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump\u3000-t\u3000db_name\u3000-uroot\u3000-p\u3000>\u3000xxx.sql\n")),(0,n.kt)("h3",{id:"3-\u5bfc\u51fa\u6570\u636e\u548c\u8868\u7ed3\u6784"},"3. \u5bfc\u51fa\u6570\u636e\u548c\u8868\u7ed3\u6784"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump\u3000db_name\u3000-uroot\u3000-p\u3000>\u3000xxx.sql\n")),(0,n.kt)("h3",{id:"4-\u5bfc\u51fa\u7279\u5b9a\u8868\u7684\u7ed3\u6784"},"4. \u5bfc\u51fa\u7279\u5b9a\u8868\u7684\u7ed3\u6784"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump\u3000-uroot\u3000-p\u3000-B\u3000db_name\u3000--table\u3000tb_name\u3000>\u3000xxx.sql\n")),(0,n.kt)("h2",{id:"\u5bfc\u5165\u6570\u636e"},"\u5bfc\u5165\u6570\u636e"),(0,n.kt)("p",null," \u56e0\u4e3a mysqldump \u5bfc\u51fa\u7684\u662f\u5b8c\u6574\u7684 SQL \u8bed\u53e5\uff0c\u6240\u4ee5\u7528 mysql \u5ba2\u6237\u7a0b\u5e8f\u5f88\u5bb9\u6613\u5c31\u80fd\u628a\u6570\u636e\u5bfc\u5165\u4e86\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u db_user -p db_name  < xxx.sql\nmysql> source /path/xxx.sql\n")),(0,n.kt)("h2",{id:"mysqldump-\u53c2\u6570\u8be6\u89e3"},"mysqldump \u53c2\u6570\u8be6\u89e3"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013all-databases , -A"),"\n\u5bfc\u51fa\u5168\u90e8\u6570\u636e\u5e93\nmysqldump -uroot -p \u2013all-databases"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013all-tablespaces , -Y"),"\n\u5bfc\u51fa\u5168\u90e8\u8868\u7a7a\u95f4\nmysqldump -uroot -p \u2013all-databases \u2013all-tablespaces"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013no-tablespaces , -y"),"\n\u4e0d\u5bfc\u51fa\u4efb\u4f55\u8868\u7a7a\u95f4\u4fe1\u606f\nmysqldump -uroot -p \u2013all-databases \u2013no-tablespaces"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013add-drop-database"),"\n\u6bcf\u4e2a\u6570\u636e\u5e93\u521b\u5efa\u4e4b\u524d\u6dfb\u52a0 drop \u6570\u636e\u5e93\u8bed\u53e5\nmysqldump -uroot -p \u2013all-databases \u2013add-drop-database"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013add-drop-table"),"\n\u6bcf\u4e2a\u6570\u636e\u8868\u521b\u5efa\u4e4b\u524d\u6dfb\u52a0 drop \u6570\u636e\u8868\u8bed\u53e5\u3002(\u9ed8\u8ba4\u4e3a\u6253\u5f00\u72b6\u6001\uff0c\u4f7f\u7528\u2013skip-add-drop-table \u53d6\u6d88\u9009\u9879)\nmysqldump -uroot -p \u2013all-databases (\u9ed8\u8ba4\u6dfb\u52a0 drop \u8bed\u53e5)\nmysqldump -uroot -p \u2013all-databases \u2013skip-add-drop-table (\u53d6\u6d88 drop \u8bed\u53e5)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013add-locks"),"\n\u5728\u6bcf\u4e2a\u8868\u5bfc\u51fa\u4e4b\u524d\u589e\u52a0 LOCK TABLES \u5e76\u4e14\u4e4b\u540e UNLOCK TABLE\u3002(\u9ed8\u8ba4\u4e3a\u6253\u5f00\u72b6\u6001\uff0c\u4f7f\u7528\u2013skip-add-locks \u53d6\u6d88\u9009\u9879)\nmysqldump -uroot -p \u2013all-databases(\u9ed8\u8ba4\u6dfb\u52a0 LOCK \u8bed\u53e5)\nmysqldump -uroot -p \u2013all-databases \u2013skip-add-locks (\u53d6\u6d88 LOCK \u8bed\u53e5)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013comments"),'\n\u9644\u52a0\u6ce8\u91ca\u4fe1\u606f\u3002\n\u9ed8\u8ba4\u4e3a\u6253\u5f00\uff0c\u53ef\u4ee5\u7528\u2013skip-comments \u53d6\u6d88 mysqldump -uroot -p \u2013all-databases (\u9ed8\u8ba4\u8bb0\u5f55\u6ce8\u91ca)mysqldump -uroot -p \u2013all-databases "code"\nskip-comments (\u53d6\u6d88\u6ce8\u91ca)'),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013compact"),"\n\u5bfc\u51fa\u66f4\u5c11\u7684\u8f93\u51fa\u4fe1\u606f (\u7528\u4e8e\u8c03\u8bd5),\u53bb\u6389\u6ce8\u91ca\u548c\u5934\u5c3e\u7b49\u7ed3\u6784\uff0c\u53ef\u4ee5\u4f7f\u7528\u9009\u9879\uff1a\u2013skip-add-drop-table \u2013skip-add-locks \u2013skip-comments \u2013skip-disable-keys\nmysqldump -uroot -p \u2013all-databases \u2013compact"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013complete-insert, -c"),"\n\u4f7f\u7528\u5b8c\u6574\u7684 insert \u8bed\u53e5 (\u5305\u542b\u5217\u540d\u79f0)\u3002\u8fd9\u4e48\u505a\u80fd\u63d0\u9ad8\u63d2\u5165\u6548\u7387\uff0c\u4f46\u662f\u53ef\u80fd\u4f1a\u53d7\u5230 max_allowed_packet \u53c2\u6570\u7684\u5f71\u54cd\u800c\u5bfc\u81f4\u63d2\u5165\u5931\u8d25\u3002\nmysqldump -uroot -p \u2013all-databases \u2013complete-insert"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013compress, -C"),"\n\u5728\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u542f\u7528\u538b\u7f29\u4f20\u9012\u6240\u6709\u4fe1\u606f\nmysqldump -uroot -p \u2013all-databases \u2013compress"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013databases, -B"),"\n\u5bfc\u51fa\u51e0\u4e2a\u6570\u636e\u5e93\u3002\u53c2\u6570\u540e\u9762\u6240\u6709\u540d\u5b57\u53c2\u91cf\u90fd\u88ab\u770b\u4f5c\u6570\u636e\u5e93\u540d\u3002\nmysqldump -uroot -p \u2013databases test mysql"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013debug"),'\n\u8f93\u51fa debug \u4fe1\u606f\uff0c\u7528\u4e8e\u8c03\u8bd5\u3002\n\u9ed8\u8ba4\u503c\u4e3a\uff1ad:t:o,/tmp/mysqldump.trace\nmysqldump -uroot -p \u2013all-databases \u2013debug\nmysqldump -uroot -p \u2013all-databases \u2013debug="d:t:o,/tmp/debug.trace"'),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013debug-info"),"\n\u8f93\u51fa\u8c03\u8bd5\u4fe1\u606f\u5e76\u9000\u51fa\nmysqldump -uroot -p \u2013all-databases \u2013debug-info"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013default-character-set"),"\n\u8bbe\u7f6e\u9ed8\u8ba4\u5b57\u7b26\u96c6\uff0c\u9ed8\u8ba4\u503c\u4e3a utf8\nmysqldump -uroot -p \u2013all-databases \u2013default-character-set=latin1"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013delayed-insert"),"\n\u91c7\u7528\u5ef6\u65f6\u63d2\u5165\u65b9\u5f0f\uff08INSERT DELAYED\uff09\u5bfc\u51fa\u6570\u636e\nmysqldump -uroot -p \u2013all-databases \u2013delayed-insert"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013events, -E"),"\n\u5bfc\u51fa\u4e8b\u4ef6\nmysqldump -uroot -p \u2013all-databases \u2013events"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013flush-logs"),"\n\u5f00\u59cb\u5bfc\u51fa\u4e4b\u524d\u5237\u65b0\u65e5\u5fd7\n\u8bf7\u6ce8\u610f\uff1a\u5047\u5982\u4e00\u6b21\u5bfc\u51fa\u591a\u4e2a\u6570\u636e\u5e93 (\u4f7f\u7528\u9009\u9879\u2013databases \u6216\u8005\u2013all-databases)\uff0c\u5c06\u4f1a\u9010\u4e2a\u6570\u636e\u5e93\u5237\u65b0\u65e5\u5fd7\u3002\u9664\u4f7f\u7528\u2013lock-all-tables \u6216\u8005\u2013master-data \u5916\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u65e5\u5fd7\u5c06\u4f1a\u88ab\u5237\u65b0\u4e00\u6b21\uff0c\u76f8\u5e94\u7684\u6240\u4ee5\u8868\u540c\u65f6\u88ab\u9501\u5b9a\u3002\u56e0\u6b64\uff0c\u5982\u679c\u6253\u7b97\u540c\u65f6\u5bfc\u51fa\u548c\u5237\u65b0\u65e5\u5fd7\u5e94\u8be5\u4f7f\u7528\u2013lock-all-tables \u6216\u8005\u2013master-data \u548c\u2013flush-logs.\nmysqldump -uroot -p \u2013all-databases \u2013flush-logs"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013flush-privileges"),"\n\u5728\u5bfc\u51fa mysql \u6570\u636e\u5e93\u4e4b\u540e\uff0c\u53d1\u51fa\u4e00\u6761 FLUSH PRIVILEGES \u8bed\u53e5\u3002\u4e3a\u4e86\u6b63\u786e\u6062\u590d\uff0c\u8be5\u9009\u9879\u5e94\u8be5\u7528\u4e8e\u5bfc\u51fa mysql \u6570\u636e\u5e93\u548c\u4f9d\u8d56 mysql \u6570\u636e\u5e93\u6570\u636e\u7684\u4efb\u4f55\u65f6\u5019\u3002\nmysqldump -uroot -p \u2013all-databases \u2013flush-privileges"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013force"),"\n\u5728\u5bfc\u51fa\u8fc7\u7a0b\u4e2d\u5ffd\u7565\u51fa\u73b0\u7684 SQL \u9519\u8bef\nmysqldump -uroot -p \u2013all-databases \u2013force"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013host, -h"),"\n\u9700\u8981\u5bfc\u51fa\u7684\u4e3b\u673a\u4fe1\u606f\nmysqldump -uroot -p \u2013host=localhost \u2013all-databases"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013ignore-table")),(0,n.kt)("p",null,"\u4e0d\u5bfc\u51fa\u6307\u5b9a\u8868\u3002\n\u6307\u5b9a\u5ffd\u7565\u591a\u4e2a\u8868\u65f6\uff0c\u9700\u8981\u91cd\u590d\u591a\u6b21\uff0c\u6bcf\u6b21\u4e00\u4e2a\u8868\u3002\u6bcf\u4e2a\u8868\u5fc5\u987b\u540c\u65f6\u6307\u5b9a\u6570\u636e\u5e93\u548c\u8868\u540d\u3002\n\u4f8b\u5982\uff1a\u2013ignore-table=database.table1 \u2013ignore-table=database.table2 \u2026\u2026\nmysqldump -uroot -p \u2013host=localhost \u2013all-databases \u2013ignore-table=mysql.user"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013lock-all-tables, -x"),"\n\u63d0\u4ea4\u8bf7\u6c42\u9501\u5b9a\u6240\u6709\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\uff0c\u4ee5\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002\n\u8fd9\u662f\u4e00\u4e2a\u5168\u5c40\u8bfb\u9501\uff0c\u5e76\u4e14\u81ea\u52a8\u5173\u95ed\u2013single-transaction \u548c\u2013lock-tables \u9009\u9879\u3002\nmysqldump -uroot -p \u2013host=localhost \u2013all-databases \u2013lock-all-tables"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013lock-tables, -l"),"\n\u5f00\u59cb\u5bfc\u51fa\u524d\uff0c\u9501\u5b9a\u6240\u6709\u8868\u3002\n\u7528 READ LOCAL \u9501\u5b9a\u8868\u4ee5\u5141\u8bb8 MyISAM \u8868\u5e76\u884c\u63d2\u5165\u3002\u5bf9\u4e8e\u652f\u6301\u4e8b\u52a1\u7684\u8868\u4f8b\u5982 InnoDB \u548c BDB\uff0c\u2013single-transaction \u662f\u4e00\u4e2a\u66f4\u597d\u7684\u9009\u62e9\uff0c\u56e0\u4e3a\u5b83\u6839\u672c\u4e0d\u9700\u8981\u9501\u5b9a\u8868\u3002\n\u8bf7\u6ce8\u610f\u5f53\u5bfc\u51fa\u591a\u4e2a\u6570\u636e\u5e93\u65f6\uff0c\u2013lock-tables \u5206\u522b\u4e3a\u6bcf\u4e2a\u6570\u636e\u5e93\u9501\u5b9a\u8868\u3002\u56e0\u6b64\uff0c\u8be5\u9009\u9879\u4e0d\u80fd\u4fdd\u8bc1\u5bfc\u51fa\u6587\u4ef6\u4e2d\u7684\u8868\u5728\u6570\u636e\u5e93\u4e4b\u95f4\u7684\u903b\u8f91\u4e00\u81f4\u6027\u3002\u4e0d\u540c\u6570\u636e\u5e93\u8868\u7684\u5bfc\u51fa\u72b6\u6001\u53ef\u4ee5\u5b8c\u5168\u4e0d\u540c\u3002\nmysqldump -uroot -p \u2013host=localhost \u2013all-databases \u2013lock-tables"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013no-create-db, -n"),"\n\u53ea\u5bfc\u51fa\u6570\u636e\uff0c\u800c\u4e0d\u6dfb\u52a0 CREATE DATABASE \u8bed\u53e5\u3002\nmysqldump -uroot -p \u2013host=localhost \u2013all-databases \u2013no-create-db"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013no-create-info,-t"),"\n\u53ea\u5bfc\u51fa\u6570\u636e\uff0c\u800c\u4e0d\u6dfb\u52a0 CREATE TABLE \u8bed\u53e5\nmysqldump -uroot -p \u2013host=localhost \u2013all-databases \u2013no-create-info"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013no-data, -d"),"\n\u4e0d\u5bfc\u51fa\u4efb\u4f55\u6570\u636e\uff0c\u53ea\u5bfc\u51fa\u6570\u636e\u5e93\u8868\u7ed3\u6784\nmysqldump -uroot -p \u2013host=localhost \u2013all-databases \u2013no-data"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013password, -p"),"\n\u8fde\u63a5\u6570\u636e\u5e93\u5bc6\u7801"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013port, -P"),"\n\u8fde\u63a5\u6570\u636e\u5e93\u7aef\u53e3\u53f7"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2013user, -u"),"\n\u6307\u5b9a\u8fde\u63a5\u7684\u7528\u6237\u540d\u3002"))}i.isMDXComponent=!0}}]);