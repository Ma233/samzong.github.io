"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[35785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||o;return n?l.createElement(d,a(a({ref:t},u),{},{components:n})):l.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}g.displayName="MDXCreateElement"},15774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const o={title:"HowTo Use pt-query-digest",tags:["MySQL"],date:new Date("2016-09-22T15:20:12.000Z")},a=void 0,i={permalink:"/2016/09/22/HowTo-Use-pt-query-digest",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2016-09-22-HowTo-Use-pt-query-digest.md",source:"@site/blog/2016-09-22-HowTo-Use-pt-query-digest.md",title:"HowTo Use pt-query-digest",description:"1. \u7b80\u4ecb",date:"2016-09-22T15:20:12.000Z",formattedDate:"2016\u5e749\u670822\u65e5",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],readingTime:4.863333333333333,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Use pt-query-digest",tags:["MySQL"],date:"2016-09-22T15:20:12.000Z"},prevItem:{title:"\u5fae\u535a\u968f\u7b14",permalink:"/2016/10/14/\u5199\u7684\u5fae\u535a"},nextItem:{title:"\u751f\u8005\u5b64\u72ec",permalink:"/2016/09/20/\u751f\u8005\u5b64\u72ec"}},s={authorsImageUrls:[]},p=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:3},{value:"2. Install Percona Toolkit &amp; pt-query-digest",id:"2-install-percona-toolkit--pt-query-digest",level:3},{value:"3. \u5f00\u542f mysql \u6162\u65e5\u5fd7",id:"3-\u5f00\u542f-mysql-\u6162\u65e5\u5fd7",level:3},{value:"a. \u67e5\u770b\u5f53\u524d\u2018slow_query_log\u2019\u72b6\u6001",id:"a-\u67e5\u770b\u5f53\u524dslow_query_log\u72b6\u6001",level:4},{value:"b. \u542f\u52a8 slow_log, \u914d\u7f6e",id:"b-\u542f\u52a8-slow_log-\u914d\u7f6e",level:4},{value:"4. \u5206\u6790",id:"4-\u5206\u6790",level:3},{value:"a. \u7b80\u5355\u4f7f\u7528\u65b9\u6cd5",id:"a-\u7b80\u5355\u4f7f\u7528\u65b9\u6cd5",level:4},{value:"b. \u4ece tcpdump \u5305\u4e2d\u5206\u6790\uff1a\u901a\u8fc7 tcpdump \u547d\u4ee4\u6293\u53d6\u4e00\u5b9a\u65f6\u95f4\u7f51\u7edc\u6570\u636e\u5305\uff0c\u7136\u540e\u8fdb\u884c\u5206\u6790",id:"b-\u4ece-tcpdump-\u5305\u4e2d\u5206\u6790\u901a\u8fc7-tcpdump-\u547d\u4ee4\u6293\u53d6\u4e00\u5b9a\u65f6\u95f4\u7f51\u7edc\u6570\u636e\u5305\u7136\u540e\u8fdb\u884c\u5206\u6790",level:4},{value:"c. pt-query-digest \u8fd8\u652f\u6301\u5f88\u5bf9\u5176\u4ed6\u7684\u6570\u636e\u5305\u5206\u6790\u5f62\u52bf\uff0c\u4f46\u662f\u6211\u4eec\u4e3b\u8981\u4f7f\u7528\u7684\u8fd8\u662f\u9488\u5bf9\u6162\u65e5\u5fd7\u8fdb\u884c\u5206\u6790",id:"c-pt-query-digest-\u8fd8\u652f\u6301\u5f88\u5bf9\u5176\u4ed6\u7684\u6570\u636e\u5305\u5206\u6790\u5f62\u52bf\u4f46\u662f\u6211\u4eec\u4e3b\u8981\u4f7f\u7528\u7684\u8fd8\u662f\u9488\u5bf9\u6162\u65e5\u5fd7\u8fdb\u884c\u5206\u6790",level:4},{value:"5. \u4f7f\u7528 Anemometer \u5c06 pt-query-digest \u7684 MySQL \u6162\u67e5\u8be2\u53ef\u89c6\u5316",id:"5-\u4f7f\u7528-anemometer-\u5c06-pt-query-digest-\u7684-mysql-\u6162\u67e5\u8be2\u53ef\u89c6\u5316",level:3},{value:"5.1 \u5b89\u88c5",id:"51-\u5b89\u88c5",level:4},{value:"5.2 \u914d\u7f6e",id:"52-\u914d\u7f6e",level:4},{value:"5.3 \u5bfc\u5165",id:"53-\u5bfc\u5165",level:4}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-\u7b80\u4ecb"},"1. \u7b80\u4ecb"),(0,r.kt)("p",null,"\u7d22\u5f15\u53ef\u4ee5\u6211\u4eec\u66f4\u5feb\u901f\u7684\u6267\u884c\u67e5\u8be2\uff0c\u4f46\u662f\u80af\u5b9a\u5b58\u5728\u4e0d\u5408\u7406\u7684\u7d22\u5f15\uff0c\u5982\u679c\u60f3\u627e\u5230\u90a3\u4e9b\u7d22\u5f15\u4e0d\u662f\u5f88\u5408\u9002\u7684\u67e5\u8be2\uff0c\u5e76\u5728\u5b83\u4eec\u6210\u4e3a\u95ee\u9898\u524d\u8fdb\u884c\u4f18\u5316\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 pt-query-digest \u7684\u67e5\u8be2\u5ba1\u67e5\u201creview\u201d\u529f\u80fd\uff0c\u5206\u6790\u5176 EXPLAIN \u51fa\u6765\u7684\u6267\u884c\u8ba1\u5212\u3002"),(0,r.kt)("p",null,"pt-query-digest \u662f\u7528\u4e8e\u5206\u6790 mysql \u6162\u67e5\u8be2\u7684\u4e00\u4e2a\u5de5\u5177\uff0c\u5b83\u53ef\u4ee5\u5206\u6790 binlog\u3001General log\u3001slowlog\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 SHOWPROCESSLIST \u6216\u8005\u901a\u8fc7 tcpdump \u6293\u53d6\u7684 MySQL \u534f\u8bae\u6570\u636e\u6765\u8fdb\u884c\u5206\u6790\u3002\u53ef\u4ee5\u628a\u5206\u6790\u7ed3\u679c\u8f93\u51fa\u5230\u6587\u4ef6\u4e2d\uff0c\u5206\u6790\u8fc7\u7a0b\u662f\u5148\u5bf9\u67e5\u8be2\u8bed\u53e5\u7684\u6761\u4ef6\u8fdb\u884c\u53c2\u6570\u5316\uff0c\u7136\u540e\u5bf9\u53c2\u6570\u5316\u4ee5\u540e\u7684\u67e5\u8be2\u8fdb\u884c\u5206\u7ec4\u7edf\u8ba1\uff0c\u7edf\u8ba1\u51fa\u5404\u67e5\u8be2\u7684\u6267\u884c\u65f6\u95f4\u3001\u6b21\u6570\u3001\u5360\u6bd4\u7b49\uff0c\u53ef\u4ee5\u501f\u52a9\u5206\u6790\u7ed3\u679c\u627e\u51fa\u95ee\u9898\u8fdb\u884c\u4f18\u5316\u3002"),(0,r.kt)("h3",{id:"2-install-percona-toolkit--pt-query-digest"},"2. Install Percona Toolkit & pt-query-digest"),(0,r.kt)("p",null,"percona-toolkit \u662f\u4e00\u7ec4\u9ad8\u7ea7\u547d\u4ee4\u884c\u5de5\u5177\u7684\u96c6\u5408\uff0c\u7528\u6765\u6267\u884c\u5404\u79cd\u901a\u8fc7\u624b\u5de5\u6267\u884c\u975e\u5e38\u590d\u6742\u548c\u9ebb\u70e6\u7684 mysql \u548c\u7cfb\u7edf\u4efb\u52a1\u3002\u8fd9\u4e9b\u4efb\u52a1\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u68c0\u67e5 master \u548c slave \u6570\u636e\u7684\u4e00\u81f4\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u6548\u5730\u5bf9\u8bb0\u5f55\u8fdb\u884c\u5f52\u6863"),(0,r.kt)("li",{parentName:"ul"},"\u67e5\u627e\u91cd\u590d\u7684\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u670d\u52a1\u5668\u4fe1\u606f\u8fdb\u884c\u6c47\u603b"),(0,r.kt)("li",{parentName:"ul"},"\u5206\u6790\u6765\u81ea\u65e5\u5fd7\u548c tcpdump \u7684\u67e5\u8be2"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u7cfb\u7edf\u51fa\u95ee\u9898\u7684\u65f6\u5019\u6536\u96c6\u91cd\u8981\u7684\u7cfb\u7edf\u4fe1\u606f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@ultrera ~]# wget percona.com/get/percona-toolkit.tar.gz\n--2016-09-22 09:17:00--  http://percona.com/get/percona-toolkit.tar.gz\nResolving percona.com... 74.121.199.234, 74.121.199.234\nConnecting to percona.com|74.121.199.234|:80... connected.\nHTTP request sent, awaiting response... 301 Moved Permanently\nLocation: https://www.percona.com/get/percona-toolkit.tar.gz [following]\n--2016-09-22 09:17:02--  https://www.percona.com/get/percona-toolkit.tar.gz\nResolving www.percona.com... 74.121.199.234, 74.121.199.234\nConnecting to www.percona.com|74.121.199.234|:443... connected.\nHTTP request sent, awaiting response... 302 Found\nLocation: https://www.percona.com/downloads/percona-toolkit/2.2.19/tarball/percona-toolkit-2.2.19.tar.gz [following]\n--2016-09-22 09:17:03--  https://www.percona.com/downloads/percona-toolkit/2.2.19/tarball/percona-toolkit-2.2.19.tar.gz\nReusing existing connection to www.percona.com:443.\nHTTP request sent, awaiting response... 200 OK\nLength: 1425623 (1.4M) [application/x-gzip]\nSaving to: \u201cpercona-toolkit.tar.gz\u201d\n\n100%[=======================>] 1,425,623    766K/s   in 1.8s\n\n2016-09-22 09:17:05 (766 KB/s) - \u201cpercona-toolkit.tar.gz\u201d saved [1425623/1425623]\n\n[root@ultrera ~]# tar xf percona-toolkit.tar.gz\n[root@ultrera ~]# ls\npercona-toolkit-2.2.19  percona-toolkit.tar.gz\n[root@ultrera ~]# cd percona-toolkit-2.2.19\n[root@ultrera percona-toolkit-2.2.19]# perl Makefile.PL\nWarning: prerequisite DBD::mysql 3 not found.\nWriting Makefile for percona-toolkit\n[root@ultrera percona-toolkit-2.2.19]# make\ncp bin/pt-mysql-summary blib/script/pt-mysql-summary\n....\nManifying blib/man1/pt-index-usage.1p\nManifying blib/man1/pt-duplicate-key-checker.1p\nManifying blib/man1/pt-config-diff.1p\nManifying blib/man1/pt-stalk.1p\n[root@ultrera percona-toolkit-2.2.19]# make install\nInstalling /usr/local/share/man/man1/pt-query-digest.1p\n...\nInstalling /usr/local/bin/pt-query-digest\n...\nAppending installation info to /usr/lib64/perl5/perllocal.pod\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd0\u884c\u5de5\u5177\u53ef\u80fd\u4f1a\u9047\u5230\u4e0b\u9762\u7684\u9519\u8bef\uff1aCan't locate Time/HiRes.pm in @INC")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u89e3\u51b3\u529e\u6cd5\uff1a\n[root@ultrera ~]# yum install -y perl-Time-HiRes\n[root@ultrera ~]# pt-query-digest --version\npt-query-digest 2.2.19\n")),(0,r.kt)("h3",{id:"3-\u5f00\u542f-mysql-\u6162\u65e5\u5fd7"},"3. \u5f00\u542f mysql \u6162\u65e5\u5fd7"),(0,r.kt)("h4",{id:"a-\u67e5\u770b\u5f53\u524dslow_query_log\u72b6\u6001"},"a. \u67e5\u770b\u5f53\u524d\u2018slow_query_log\u2019\u72b6\u6001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql> show variables like '%query%';\n+------------------------------+---------------------------------+\n| Variable_name                | Value                           |\n+------------------------------+---------------------------------+\n| binlog_rows_query_log_events | OFF                             |\n| ft_query_expansion_limit     | 20                              |\n| have_query_cache             | YES                             |\n| long_query_time              | 10.000000                       |\n| query_alloc_block_size       | 8192                            |\n| query_cache_limit            | 1048576                         |\n| query_cache_min_res_unit     | 4096                            |\n| query_cache_size             | 1048576                         |\n| query_cache_type             | OFF                             |\n| query_cache_wlock_invalidate | OFF                             |\n| query_prealloc_size          | 8192                            |\n| slow_query_log               | OFF                             |\n| slow_query_log_file          | /var/lib/mysql/ultrera-slow.log |\n+------------------------------+---------------------------------+\n13 rows in set (0.00 sec)\n\nmysql> show variables like 'log_queries_not_using_indexes';\n+-------------------------------+-------+\n| Variable_name                 | Value |\n+-------------------------------+-------+\n| log_queries_not_using_indexes | OFF   |\n+-------------------------------+-------+\n1 row in set (0.00 sec)\n")),(0,r.kt)("h4",{id:"b-\u542f\u52a8-slow_log-\u914d\u7f6e"},"b. \u542f\u52a8 slow_log, \u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8bbe\u5b9a\u8bb0\u5f55\u5927\u4e8e2s\u7684sql\nmysql> set global long_query_time=2;\nQuery OK, 0 rows affected (0.00 sec)\n\n# \u8bbe\u5b9alog\u5b58\u653e\u8def\u5f84\nmysql> set global slow_query_log_file='/tmp/ultraera-slow.log';\nQuery OK, 0 rows affected (0.00 sec)\n\n# \u542f\u7528\u6162\u65e5\u5fd7\nmysql> set global slow_query_log=ON;\nQuery OK, 0 rows affected (0.00 sec)\n\n# \u540c\u65f6\u8bb0\u5f55\u6ca1\u6709\u4f7f\u7528\u7d22\u5f15\u7684sql\nmysql> set global log_queries_not_using_indexes=on;\nQuery OK, 0 rows affected (0.00 sec)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\uff0cslow.log \u589e\u5927\u7684\u975e\u5e38\u5feb\uff0c\u5b9e\u9645\u751f\u4ea7\u4e2d\uff0c\u6ce8\u610f\u4e0d\u8981\u88ab slow.log \u5c06\u78c1\u76d8\u6491\u6ee1\uff0c\u5f71\u54cd\u5230\u6b63\u5e38\u751f\u4ea7\u4f7f\u7528\u3002")),(0,r.kt)("h3",{id:"4-\u5206\u6790"},"4. \u5206\u6790"),(0,r.kt)("p",null,"pt-query-digest \u53ef\u4ee5\u4ece\u666e\u901a MySQL \u65e5\u5fd7\uff0c\u6162\u67e5\u8be2\u65e5\u5fd7\u4ee5\u53ca\u4e8c\u8fdb\u5236\u65e5\u5fd7\u4e2d\u5206\u6790\u67e5\u8be2\uff0c\u751a\u81f3\u53ef\u4ee5\u4ece SHOW PROCESSLIST \u548c MySQL \u534f\u8bae\u7684 tcpdump \u4e2d\u8fdb\u884c\u5206\u6790\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u6587\u4ef6\uff0c\u5b83\u4ece\u6807\u51c6\u8f93\u5165\u6d41\uff08STDIN\uff09\u4e2d\u8bfb\u53d6\u6570\u636e\u3002"),(0,r.kt)("h4",{id:"a-\u7b80\u5355\u4f7f\u7528\u65b9\u6cd5"},"a. \u7b80\u5355\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pt-query-digest slow.logs\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://images.cnitblog.com/blog/288950/201312/14135450-6f7a732598054f7aa311e95cbd4df3b1.png",alt:"image"})),(0,r.kt)("ul",null,"1. Overall \u8fd9\u4e2a\u90e8\u5206\u662f\u4e00\u4e2a\u5927\u81f4\u7684\u6982\u8981\u4fe1\u606f (\u7c7b\u4f3c loadrunner \u7ed9\u51fa\u7684\u6982\u8981\u4fe1\u606f)\uff0c\u901a\u8fc7\u5b83\u53ef\u4ee5\u5bf9\u5f53\u524d MySQL \u7684\u67e5\u8be2\u6027\u80fd\u505a\u4e00\u4e2a\u521d\u6b65\u7684\u8bc4\u4f30\uff0c\u6bd4\u5982\u5404\u4e2a\u6307\u6807\u7684\u6700\u5927\u503c (max)\uff0c\u5e73\u5747\u503c (min)\uff0c95% \u5206\u5e03\u503c\uff0c\u4e2d\u4f4d\u6570 (median)\uff0c\u6807\u51c6\u504f\u5dee (stddev)",(0,r.kt)("li",null,"\u67e5\u8be2\u7684\u6267\u884c\u65f6\u95f4\uff08Exec time\uff09"),(0,r.kt)("li",null,"\u9501\u5360\u7528\u7684\u65f6\u95f4\uff08Lock time\uff09"),(0,r.kt)("li",null,"MySQL \u6267\u884c\u5668\u9700\u8981\u68c0\u67e5\u7684\u884c\u6570\uff08Rows examine\uff09"),(0,r.kt)("li",null,"\u6700\u540e\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684\u884c\u6570\uff08Rows sent\uff09"),(0,r.kt)("li",null,"\u67e5\u8be2\u7684\u5927\u5c0f\u3002")),(0,r.kt)("ul",null,"2. Profile",(0,r.kt)("li",null,"Rank\uff1a\u6574\u4e2a\u5206\u6790\u4e2d\u8be5\u201c\u8bed\u53e5\u201d\u7684\u6392\u540d\uff0c\u4e00\u822c\u4e5f\u5c31\u662f\u6027\u80fd\u6700\u6162\u7684"),(0,r.kt)("li",null,"Query ID\uff1a\u6bcf\u4e2a\u67e5\u8be2\u90fd\u6709\u4e00\u4e2a"),(0,r.kt)("li",null,"Response time\uff1a \u201c\u8bed\u53e5\u201d\u7684\u54cd\u5e94\u65f6\u95f4\u4ee5\u53ca\u6574\u4f53\u5360\u6bd4\u60c5\u51b5\u3002"),(0,r.kt)("li",null,"Calls\uff1a\u201c\u8bed\u53e5\u201d\u7684\u6267\u884c\u6b21\u6570"),(0,r.kt)("li",null,"R/Call\uff1a\u6bcf\u6b21\u6267\u884c\u7684\u5e73\u5747\u54cd\u5e94\u65f6\u95f4\u3002 "),(0,r.kt)("li",null,"V/M")),"##### \u8be6\u7ec6\u4fe1\u606f \u5217\u51fa\u4e0a\u9762 Profile \u4e2d\u6bcf\u4e2a Query ID \u7684\u8be6\u7ec6\u4fe1\u606f",(0,r.kt)("h4",{id:"b-\u4ece-tcpdump-\u5305\u4e2d\u5206\u6790\u901a\u8fc7-tcpdump-\u547d\u4ee4\u6293\u53d6\u4e00\u5b9a\u65f6\u95f4\u7f51\u7edc\u6570\u636e\u5305\u7136\u540e\u8fdb\u884c\u5206\u6790"},"b. \u4ece tcpdump \u5305\u4e2d\u5206\u6790\uff1a\u901a\u8fc7 tcpdump \u547d\u4ee4\u6293\u53d6\u4e00\u5b9a\u65f6\u95f4\u7f51\u7edc\u6570\u636e\u5305\uff0c\u7136\u540e\u8fdb\u884c\u5206\u6790"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pt-query-digest --type tcpdump mysql.tcp.txt\n")),(0,r.kt)("h4",{id:"c-pt-query-digest-\u8fd8\u652f\u6301\u5f88\u5bf9\u5176\u4ed6\u7684\u6570\u636e\u5305\u5206\u6790\u5f62\u52bf\u4f46\u662f\u6211\u4eec\u4e3b\u8981\u4f7f\u7528\u7684\u8fd8\u662f\u9488\u5bf9\u6162\u65e5\u5fd7\u8fdb\u884c\u5206\u6790"},"c. pt-query-digest \u8fd8\u652f\u6301\u5f88\u5bf9\u5176\u4ed6\u7684\u6570\u636e\u5305\u5206\u6790\u5f62\u52bf\uff0c\u4f46\u662f\u6211\u4eec\u4e3b\u8981\u4f7f\u7528\u7684\u8fd8\u662f\u9488\u5bf9\u6162\u65e5\u5fd7\u8fdb\u884c\u5206\u6790"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u7684\u5e2e\u52a9\u6587\u6863\uff0c\u8bf7\u67e5\u770b\u5b98\u65b9\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://www.percona.com/doc/percona-toolkit/2.2/pt-query-digest.html"},"http://www.percona.com/doc/percona-toolkit/2.2/pt-query-digest.html"))),(0,r.kt)("h3",{id:"5-\u4f7f\u7528-anemometer-\u5c06-pt-query-digest-\u7684-mysql-\u6162\u67e5\u8be2\u53ef\u89c6\u5316"},"5. \u4f7f\u7528 Anemometer \u5c06 pt-query-digest \u7684 MySQL \u6162\u67e5\u8be2\u53ef\u89c6\u5316"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u5b89\u88c5 php 5.3 and over"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u9884\u5148\u914d\u7f6e mysql \u6570\u636e\u5e93"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u9884\u5148\u5b89\u88c5\u597d pt-query-digest")),(0,r.kt)("h4",{id:"51-\u5b89\u88c5"},"5.1 \u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@ultrera ~]# git clone https://github.com/box/Anemometer.git anemometer\n\n[root@ultrera ~]# mv anemometer /var/www/html\n[root@ultrera ~]# cd /var/www/html/anemometer/\n[root@ultrera anemometer]# mysql -h localhost -u root -p < mysql56-install.sql\n[root@ultrera anemometer]# mysql -h localhost -u root -p -e \"grant all privileges on slow_query_log.* to 'anemometer'@'%' identified by 'anemometer';\"\n")),(0,r.kt)("h4",{id:"52-\u914d\u7f6e"},"5.2 \u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@ultrera anemometer]# cp conf/sample.config.inc.php conf/config.inc.php\n[root@ultrera anemometer]# vim conf/config.inc.php\n\n# line 48,49 and line 284,285\n\u8bbe\u7f6e\u6570\u636e\u5e93\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801;\n\n[root@ultrera anemometer]# vim conf/config.inc.php\n# line 7,8\n\u8bbe\u7f6e\u6570\u636e\u5e93\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801;\n")),(0,r.kt)("h4",{id:"53-\u5bfc\u5165"},"5.3 \u5bfc\u5165"),(0,r.kt)("p",null,"\u5c06 pt-query-digest \u7684\u5206\u6790\u7ed3\u679c\u5230 anemometer\uff1b"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"pt-query-digest version < 2.2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ pt-query-digest --user=anemometer --password=superSecurePass \\\n                  --review h=db.example.com,D=slow_query_log,t=global_query_review \\\n                  --review-history h=db.example.com,D=slow_query_log,t=global_query_review_history \\\n                  --no-report --limit=0% \\\n                  --filter=" \\$event->{Bytes} = length(\\$event->{arg}) and \\$event->{hostname}=\\"$HOSTNAME\\"" \\\n                  /var/lib/mysql/db.example.com-slow.log\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"pt-query-digest version >= 2.2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pt-query-digest --user=anemometer --password=superSecurePass \\\n                  --review h=db.example.com,D=slow_query_log,t=global_query_review \\\n                  --history h=db.example.com,D=slow_query_log,t=global_query_review_history \\\n                  --no-report --limit=0% \\\n                  --filter=" \\$event->{Bytes} = length(\\$event->{arg}) and \\$event->{hostname}=\\"$HOSTNAME\\"" \\\n                  /var/lib/mysql/db.example.com-slow.log\n\n\nPipeline process 11 (aggregate fingerprint) caused an error: Argument "57A" isn\'t numeric in numeric gt (>) at (eval 40) line 6, <> line 27.\nPipeline process 11 (aggregate fingerprint) caused an error: Argument "57B" isn\'t numeric in numeric gt (>) at (eval 40) line 6, <> line 28.\nPipeline process 11 (aggregate fingerprint) caused an error: Argument "57C" isn\'t numeric in numeric gt (>) at (eval 40) line 6, <> line 29.\n')))}m.isMDXComponent=!0}}]);