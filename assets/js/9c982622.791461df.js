"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[11501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(n),y=l,k=u["".concat(p,".").concat(y)]||u[y]||i[y]||r;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var m=2;m<r;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},72046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>i,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(87462),l=(n(67294),n(3905));const r={title:"MySQL \u5e38\u7528\u914d\u7f6e\u4f18\u5316",tags:["MySQL"],date:new Date("2016-06-16T02:29:00.000Z")},s=void 0,o={permalink:"/2016/06/16/MySQL-1-\u5e38\u7528\u4f18\u5316",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2016-06-16-MySQL-1-\u5e38\u7528\u4f18\u5316.md",source:"@site/blog/2016-06-16-MySQL-1-\u5e38\u7528\u4f18\u5316.md",title:"MySQL \u5e38\u7528\u914d\u7f6e\u4f18\u5316",description:"\u73af\u5883\uff1aMySQL 5.5 & MySQL 5.6 & RHEL/CentOS 5/6/7",date:"2016-06-16T02:29:00.000Z",formattedDate:"2016\u5e746\u670816\u65e5",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],readingTime:2.716666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"MySQL \u5e38\u7528\u914d\u7f6e\u4f18\u5316",tags:["MySQL"],date:"2016-06-16T02:29:00.000Z"},prevItem:{title:"HowTo Use Fuse-sshfs to Mount Remote Filesystems",permalink:"/2016/07/05/HowTo-Use-Fuse-sshfs-to-Mount-Remote-Filesystems"},nextItem:{title:"\u4f7f\u7528 mosh \u4ee3\u66ff ssh \u8fde\u63a5\u670d\u52a1\u5668",permalink:"/2016/06/16/\u4f7f\u7528mosh\u4ee3\u66ffssh\u8fde\u63a5\u670d\u52a1\u5668"}},p={authorsImageUrls:[]},m=[{value:"1. MySQL \u7cfb\u7edf\u914d\u7f6e\u4f18\u5316",id:"1-mysql-\u7cfb\u7edf\u914d\u7f6e\u4f18\u5316",level:2},{value:"2.  MySQL \u914d\u7f6e\u6587\u4ef6\u4f18\u5316",id:"2--mysql-\u914d\u7f6e\u6587\u4ef6\u4f18\u5316",level:2},{value:"3.  \u7b2c\u4e09\u65b9\u5de5\u5177\u5bf9 mysql \u914d\u7f6e\u8fdb\u884c\u4f18\u5316",id:"3--\u7b2c\u4e09\u65b9\u5de5\u5177\u5bf9-mysql-\u914d\u7f6e\u8fdb\u884c\u4f18\u5316",level:3}],c={toc:m},u="wrapper";function i(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u73af\u5883\uff1aMySQL 5.5 & MySQL 5.6 & RHEL/CentOS 5/6/7"))),(0,l.kt)("h2",{id:"1-mysql-\u7cfb\u7edf\u914d\u7f6e\u4f18\u5316"},"1. MySQL \u7cfb\u7edf\u914d\u7f6e\u4f18\u5316"),(0,l.kt)("p",null,"\u7f51\u7edc\u914d\u7f6e\u65b9\u9762\uff1a\u4fee\u6539/etc/sysctl.conf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u589e\u52a0tcp\u652f\u6301\u7684\u961f\u5217\u6570\nnet.ipv4.tcp_max_syn_backlog = 65535\n# \u51cf\u5c11\u65ad\u5f00\u65f6\n")),(0,l.kt)("p",null,"\u6253\u5f00\u6587\u4ef6\u9650\u5236 \u4fee\u6539/etc/security/limits.conf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u589e\u52a0\uff1a\n* sort nofile 65535\n* hard nofile 65535\n")),(0,l.kt)("h2",{id:"2--mysql-\u914d\u7f6e\u6587\u4ef6\u4f18\u5316"},"2.  MySQL \u914d\u7f6e\u6587\u4ef6\u4f18\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e\uff1a/etc/my.cnf /etc/mysql/my.cnf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c/etc\u4e0b\u6ca1\u6709my.cnf\uff0c\u9700\u8981\u62f7\u8d1d\u4e00\u4efd"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cp /usr/share/mysql/my-medium.cnf /etc/my.cnf\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u6587\u4ef6\u67e5\u627e\u987a\u5e8f\uff1amysql -verbose --help | grep -A 1 'Default options'")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5e38\u7528\u914d\u7f6e\u8bf4\u660e\uff1a"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," innodb_buffer_pool_size\n")),(0,l.kt)("p",null,"\u8bbe\u7f6e mysql \u6570\u636e\u5e93 innodb \u5b58\u50a8\u7f13\u51b2\u6c60\u7684\u5927\u5c0f\uff0c\u5982\u679c\u662f\u72ec\u7acb\u7684 mysql \u670d\u52a1\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a\u7269\u7406\u5185\u5b58\u7684 75\uff05\u5de6\u53f3\uff0c\u5982\u679c\u548c apahce \u7b49\u670d\u52a1\u4e00\u8d77\u8fd0\u884c\u65f6\uff0c\u5219\u6839\u636e\u5b9e\u9645\u9700\u6c42\u8bbe\u5b9a\uff0c\u5c3d\u53ef\u80fd\u5927\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," innodb_buffer_pool_instances\n")),(0,l.kt)("p",null,"\u8fd9\u662f mysql5.5 \u4e2d\u65b0\u589e\u7684\u4e00\u4e2a\u53c2\u6570\uff0c\u7528\u4e8e\u63a7\u5236\u7f13\u51b2\u6c60\u7684\u4e2a\u6570\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ea\u6709 1 \u4e2a\u7f13\u51b2\u6c60\uff0c\u8bbe\u7f6e\u591a\u4e2a\u7f13\u51b2\u6c60\u53ef\u4ee5\u589e\u52a0\u5e76\u53d1\u6027\uff0c\u63d0\u4e8b\u7269\u8fd0\u7b97\u6548\u7387\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," innodb_log_buffer_size\n")),(0,l.kt)("p",null,"\u8bbe\u5b9a\u65e5\u5fd7\u7f13\u51b2\u533a\u7684\u5927\u5c0f\uff0c\u7531\u4e8e\u4f53\u5236\u6700\u957f\u6bcf\u79d2\u5c31\u4f1a\u5237\u65b0\uff0c\u4e0d\u9700\u8981\u592a\u5927\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," innodb_flush_log_at_trx_commit\n")),(0,l.kt)("p",null,"\u5173\u952e\u53c2\u6570\uff0c\u5bf9\u4e8e innodb \u7684 IO \u6548\u7387\u5f71\u54cd\u5f88\u5927\uff0c\u9ed8\u8ba4\u503c\u4e3a 1\uff0c\u53ef\u4ee5\u53d6\u503c 0\uff1a\u4e0d\u81ea\u52a8\u540c\u6b65 log \u5230\u78c1\u76d8\uff0c\u7531 mysql \u6bcf\u79d2\u81ea\u52a8\u6267\u884c\uff0c1\uff1a\u5c06\u6240\u6709\u4e8b\u7269\u76f4\u63a5\u5199\u5230\u78c1\u76d8\uff0c\u53ef\u4ee5\u7528\u5728\u4fdd\u8bc1\u6570\u636e\u7edd\u5bf9\u5b89\u5168\u7684\u5730\u65b9\uff0c\u4f1a\u5f71\u54cd\u6548\u7387\uff0c2\uff1a\u5148\u5c06\u4e8b\u7269\u7eaa\u5f55\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u6709 mysql \u6bcf\u79d2\u7edf\u4e00\u5199\u5165\u78c1\u76d8\uff0c\u5efa\u8bae\u8bbe\u5b9a\u4e3a 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," innodb_read_io_threads;\n innodb_write_io_threadsm;\n")),(0,l.kt)("p",null,"mysql5.5 \u65b0\u589e\u7684\u4e24\u4e2a\u53c2\u6570\uff0c\u51b3\u5b9a\u4e86 Innodb \u8bfb\u5199\u7684 io \u8fdb\u7a0b\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a 4\uff0c\u53ef\u4ee5\u6839\u636e CPU \u7684\u5b9e\u9645\u6027\u80fd\u8bbe\u5b9a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," innodb_file_per_table\n")),(0,l.kt)("p",null,"\u5173\u952e\u53c2\u6570\uff0c\u63a7\u5236 Innodb \u6bcf\u4e00\u4e2a\u8868\u5b9e\u7528\u72ec\u7acb\u7684\u8868\u7a7a\u95f4\uff0c\u9ed8\u8ba4\u4e3a off\uff0c\u4e5f\u5c31\u662f\u6240\u6709\u7684\u8868\u90fd\u4f1a\u5efa\u7acb\u5728\u5171\u4eab\u7a7a\u95f4\uff0c\u4e0d\u5229\u4e8e\u8d44\u6e90\u56de\u6536"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," innodb_stats_on_metadata\n")),(0,l.kt)("p",null,"\u51b3\u5b9a\u4e86 mysql \u5728\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f1a\u5237\u65b0 innodb \u8868\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u53ef\u4ee5\u5173\u95ed\uff0c\u7ba1\u7406\u5458\u9009\u53d6\u65f6\u95f4\u624b\u52a8\u5237\u65b0\u3002\u5b58\u5728\u7684\u76ee\u7684\u4fdd\u8bc1\u4f18\u5316\u5668\u6b63\u786e\u627e\u5230\u7d22\u5f15\u3002"),(0,l.kt)("p",null," mysql \u6700\u5927\u8fde\u63a5\u6570\u9650\u5236"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"max_connections=5000\n")),(0,l.kt)("p",null," \u4e0d\u533a\u5206\u8868\u540d\u79f0\u5927\u5c0f\u5199"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"lower_case_table_names=1\n")),(0,l.kt)("p",null," \u4fee\u6539\u9ed8\u8ba4\u5b57\u7b26\u7f16\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# mysql 5.1\ndefault-character-set=utf8\n\n# mysql 5.5 & mysql 5.6\ncharacter-set-server=utf8\n")),(0,l.kt)("p",null," \u6700\u5927\u9519\u8bef\u64cd\u4f5c\u6b21\u6570 : \u9ed8\u8ba4\u662f 10\uff0c\u5c3d\u91cf\u8c03\u5927\uff0c\u5426\u5219\u5bb9\u6613\u5bfc\u81f4 mysql \u5bf9\u6765\u8bbf\u4e3b\u673a\u9501\u5b9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"max_connect_errors = 10000\n")),(0,l.kt)("p",null," \u8bbe\u7f6e mysql \u65f6\u533a\uff1a\u9ed8\u8ba4 mysql \u4f7f\u7528\u7684\u7cfb\u7edf\u65f6\u533a\uff0c\u5176\u5b9e\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728 mysql \u5185\u8bbe\u5b9a\u65f6\u533a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"default-time_zone = '+8:00'\n")),(0,l.kt)("p",null," \u4ee5\u4e0a\u914d\u7f6e\uff0c\u5982\u4f55\u5728 mysql \u5185\uff0c\u68c0\u6d4b\u662f\u5426\u751f\u6548"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"show variables like '%max_connections%'\nshow variables like '%time_zone%'\nshow variables like '%max_connect_errors%'\nshow variables like '%character-set-server%'\nshow variables like '%lower_case_table_names%'\n")),(0,l.kt)("p",null," \u4fee\u6539/etc/my.cnf\u8fd9\u662f\u9700\u8981\u91cd\u542fmysql\u624d\u80fd\u751f\u6548\uff0c\u4f46\u662f\u5f88\u591a\u65f6\u5019\uff0c\u6211\u4eec\u4e0d\u65b9\u4fbf\u91cd\u542fmysql\uff0c\u8fd9\u65f6\u6211\u4eec\u9700\u8981\u5728mysql\u4e34\u65f6\u4fee\u6539\u914d\u7f6e\uff0c\u6ce8\u610f\u5e76\u4e0d\u662f\u6240\u6709\u9009\u9879\u90fd\u53ef\u4ee5\u5728\u8fd0\u884c\u4e2d\u4fee\u6539\uff0c\u4ee5\u4fee\u6539\u65f6\u533a\u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4fee\u6539\u5168\u5c40\u8bbe\u7f6e\nset global time_zone='+8:00'\n\n# \u4fee\u6539\u5f53\u524d\u4f1a\u8bdd\nset time_zone='+8:00'\n")),(0,l.kt)("h3",{id:"3--\u7b2c\u4e09\u65b9\u5de5\u5177\u5bf9-mysql-\u914d\u7f6e\u8fdb\u884c\u4f18\u5316"},"3.  \u7b2c\u4e09\u65b9\u5de5\u5177\u5bf9 mysql \u914d\u7f6e\u8fdb\u884c\u4f18\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://toolspercona.com"},"http://toolspercona.com"))),(0,l.kt)("p",null,"\u5148\u56de\u7b54\u95ee\u9898\uff0c\u7136\u540e\u6839\u636e\u95ee\u9898\u4f60\u7ed9\u51fa\u7684\u7b54\u6848\uff0c\u7f51\u7ad9\u4f1a\u7ed9\u4f60\u4e00\u4e2a\u53c2\u8003\u914d\u7f6e\u3002"))}i.isMDXComponent=!0}}]);