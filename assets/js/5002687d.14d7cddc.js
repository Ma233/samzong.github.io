"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[1512],{37772:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(17624),t=n(4552);const i={title:"MySQL \u5f00\u542f\u6162\u65e5\u5fd7\u4f18\u5316",tags:["MySQL"],date:new Date("2016-03-22T15:16:26.000Z")},o=void 0,r={permalink:"/2016/03/22/mysql-2-kai-qi-man-ri-zhi-you-hua",source:"@site/blog/2016-03-22-mysql-2-kai-qi-man-ri-zhi-you-hua.md",title:"MySQL \u5f00\u542f\u6162\u65e5\u5fd7\u4f18\u5316",description:"\u5de5\u6b32\u5584\u5176\u4e8b\uff0c\u5fc5\u5148\u5229\u5176\u5668 -- mysql \u5f00\u542f\u6162\u65e5\u5fd7\u4f18\u5316",date:"2016-03-22T15:16:26.000Z",formattedDate:"2016\u5e743\u670822\u65e5",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"MySQL \u5f00\u542f\u6162\u65e5\u5fd7\u4f18\u5316",tags:["MySQL"],date:"2016-03-22T15:16:26.000Z"},unlisted:!1,prevItem:{title:"Linux \u7b14\u8bd5\u8bd5\u9898",permalink:"/2016/03/23/linux-bi-shi-shi-ti"},nextItem:{title:"CentOS \u521d\u59cb\u5b89\u88c5\u57fa\u672c\u4f18\u5316\u64cd\u4f5c",permalink:"/2016/03/19/centos-6-2-chu-shi-an-zhuang-ji-ben-you-hua-cao-zuo"}},a={authorsImageUrls:[]},c=[{value:"\u5de5\u6b32\u5584\u5176\u4e8b\uff0c\u5fc5\u5148\u5229\u5176\u5668 -- mysql \u5f00\u542f\u6162\u65e5\u5fd7\u4f18\u5316",id:"\u5de5\u6b32\u5584\u5176\u4e8b\u5fc5\u5148\u5229\u5176\u5668----mysql-\u5f00\u542f\u6162\u65e5\u5fd7\u4f18\u5316",level:2},{value:"\u6162\u67e5\u8be2\u65e5\u5fd7",id:"\u6162\u67e5\u8be2\u65e5\u5fd7",level:3},{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",level:3},{value:"\u4fdd\u6301\u6162\u67e5\u8be2\u65e5\u5fd7\u5230\u8868\u4e2d",id:"\u4fdd\u6301\u6162\u67e5\u8be2\u65e5\u5fd7\u5230\u8868\u4e2d",level:3},{value:"\u6162\u67e5\u8be2\u65e5\u5fd7\u5206\u6790",id:"\u6162\u67e5\u8be2\u65e5\u5fd7\u5206\u6790",level:3},{value:"pt-query-digest",id:"pt-query-digest",level:3}];function d(e){const l={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h2,{id:"\u5de5\u6b32\u5584\u5176\u4e8b\u5fc5\u5148\u5229\u5176\u5668----mysql-\u5f00\u542f\u6162\u65e5\u5fd7\u4f18\u5316",children:"\u5de5\u6b32\u5584\u5176\u4e8b\uff0c\u5fc5\u5148\u5229\u5176\u5668 -- mysql \u5f00\u542f\u6162\u65e5\u5fd7\u4f18\u5316"}),"\n",(0,s.jsx)(l.h3,{id:"\u6162\u67e5\u8be2\u65e5\u5fd7",children:"\u6162\u67e5\u8be2\u65e5\u5fd7"}),"\n",(0,s.jsx)(l.p,{children:"\u987e\u540d\u601d\u4e49\u5c31\u662f\u8bb0\u5f55\u67e5\u8be2\u6bd4\u8f83\u6162\u5f97\u65e5\u5fd7\u3002"}),"\n",(0,s.jsx)(l.h3,{id:"\u6d4b\u8bd5\u73af\u5883",children:"\u6d4b\u8bd5\u73af\u5883"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"mysql-server 5.6"}),"\n",(0,s.jsx)(l.li,{children:"CentOS 6.5"}),"\n",(0,s.jsx)(l.li,{children:"VMware Fushion 8 pro"}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"\u9996\u5148\uff0c\u7b2c\u4e00\u90e8\u67e5\u770b\u662f\u5426\u5df2\u7ecf\u5f00\u542f\u6162\u67e5\u8be2\u65e5\u5fd7\uff1a"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"mysql> show variables like '%slow%';\n+---------------------+---------------------------------+\n| Variable_name       | Value                           |\n+---------------------+---------------------------------+\n| log_slow_queries    | OFF                             |\n| slow_launch_time    | 2                               |\n| slow_query_log      | OFF                             |\n| slow_query_log_file | /var/run/mysqld/mysqld-slow.log |\n+---------------------+---------------------------------+\n4 rows in set (0.00 sec)\n\nmysql>\n"})}),"\n",(0,s.jsx)(l.p,{children:"\u6253\u5f00\u6162\u67e5\u8be2\u65e5\u5fd7\u3002\u4fee\u6539 MySQL \u7684\u914d\u7f6e\u6587\u4ef6 my.cnf \u4e00\u822c\u662f\u5728/etc \u76ee\u5f55\u4e0b\u9762\uff0c\u52a0\u4e0a\u4e0b\u9762\u4e09\u884c\u914d\u7f6e\u540e\u91cd\u542f MySQL\u3002"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"slow_query_log = ON\nslow_launch_time = 2\nslow_query_log_file = /usr/local/mysql/data/slow_query.log\n\n"})}),"\n",(0,s.jsx)(l.p,{children:"slow_launch_time \u53ea\u80fd\u7cbe\u786e\u5230\u79d2\uff0c\u5982\u679c\u9700\u8981\u66f4\u7cbe\u786e\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u7b2c\u4e09\u65b9\u7684\u5de5\u5177\u6bd4\u5982\u540e\u9762\u4ecb\u7ecd\u7684 pt-query-digest"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"mysql> show variables like '%slow%';\n+---------------------------+--------------------------------------+\n| Variable_name             | Value                                |\n+---------------------------+--------------------------------------+\n| log_slow_admin_statements | OFF                                  |\n| log_slow_slave_statements | OFF                                  |\n| slow_launch_time          | 2                                    |\n| slow_query_log            | ON                                   |\n| slow_query_log_file       | /usr/local/mysql/data/slow_query.log |\n+---------------------------+--------------------------------------+\n5 rows in set (0.00 sec)\n\nmysql>\n"})}),"\n",(0,s.jsxs)(l.blockquote,{children:["\n",(0,s.jsx)(l.p,{children:"Tips: \u6211\u8fd9\u91cc\u7528\u7684MySQL\u7248\u672c\u662f5.6\uff0c\u4e0d\u540c\u7248\u672c\u7684MySQL\u5f00\u542f\u6162\u67e5\u8be2\u7684\u914d\u7f6e\u662f\u4e0d\u540c\u7684\uff0c\u6bd4\u59825.6\u4e4b\u524d\u7684\u67d0\u4e9b\u7248\u672c\u662flong_query_time, long_query_time\u548clog-slow-queries\u3002\u53ef\u4ee5\u5148\u5728\u7ec8\u7aef\u6267\u884cshow variables like '%slow%';\u67e5\u770b\u4e0b\u5f53\u524d\u7248\u672c\u5177\u4f53\u914d\u7f6e\u662f\u4ec0\u4e48\u3002"}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"\u4e5f\u53ef\u4ee5\u5728\u7ec8\u7aef\u4e2d\u901a\u8fc7\u8bbe\u7f6e\u5168\u5c40\u53d8\u91cf\u6765\u6253\u5f00\u6162\u67e5\u8be2\u65e5\u5fd7\uff1a"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"set @@global.slow_query_log = ON;\n"})}),"\n",(0,s.jsx)(l.h3,{id:"\u4fdd\u6301\u6162\u67e5\u8be2\u65e5\u5fd7\u5230\u8868\u4e2d",children:"\u4fdd\u6301\u6162\u67e5\u8be2\u65e5\u5fd7\u5230\u8868\u4e2d"}),"\n",(0,s.jsx)(l.p,{children:"MySQL \u652f\u6301\u5c06\u6162\u67e5\u8be2\u65e5\u5fd7\u4fdd\u5b58\u5230 mysql.slow_log \u8fd9\u5f20\u8868\u4e2d\u3002\u901a\u8fc7@@global.log_output \u53ef\u4ee5\u8bbe\u7f6e\u9ed8\u8ba4\u4e3a TABLE\uff0cFILE \u548c TABLE \u53ea\u80fd\u540c\u65f6\u4f7f\u7528\u4e00\u4e2a\u3002"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"mysql> select @@global.log_output;\n+---------------------+\n| @@global.log_output |\n+---------------------+\n| FILE                |\n+---------------------+\n1 row in set (0.00 sec)\n\nmysql>\n"})}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"set @@global.log_output='TABLE';\n"})}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"mysql> show create table mysql.slow_log;\n+----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n| Table    | Create Table                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |\n+----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n| slow_log | CREATE TABLE `slow_log` (\n  `start_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n  `user_host` mediumtext NOT NULL,\n  `query_time` time NOT NULL,\n  `lock_time` time NOT NULL,\n  `rows_sent` int(11) NOT NULL,\n  `rows_examined` int(11) NOT NULL,\n  `db` varchar(512) NOT NULL,\n  `last_insert_id` int(11) NOT NULL,\n  `insert_id` int(11) NOT NULL,\n  `server_id` int(10) unsigned NOT NULL,\n  `sql_text` mediumtext NOT NULL,\n  `thread_id` bigint(21) unsigned NOT NULL\n) ENGINE=CSV DEFAULT CHARSET=utf8 COMMENT='Slow log' |\n+----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n1 row in set (0.00 sec)\n\nmysql>\n"})}),"\n",(0,s.jsx)(l.p,{children:"\u6211\u4eec\u53ef\u4ee5\u7528\u4e0b\u5217\u8bed\u53e5\u7528\u6765\u6a21\u4eff\u6162\u67e5\u8be2\uff1b"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"select sleep(10);\n"})}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"mysql> select * from mysql.slow_Log\n    -> ;\nERROR 1146 (42S02): Table 'mysql.slow_Log' doesn't exist\nmysql> select *  from mysql.slow_log;\n+---------------------+---------------------------+------------+-----------+-----------+---------------+----+----------------+-----------+-----------+------------------+-----------+\n| start_time          | user_host                 | query_time | lock_time | rows_sent | rows_examined | db | last_insert_id | insert_id | server_id | sql_text         | thread_id |\n+---------------------+---------------------------+------------+-----------+-----------+---------------+----+----------------+-----------+-----------+------------------+-----------+\n| 2016-03-21 23:07:15 | root[root] @ localhost [] | 00:00:10   | 00:00:00  |         1 |             0 |    |              0 |         0 |         0 | select sleep(10) |         2 |\n+---------------------+---------------------------+------------+-----------+-----------+---------------+----+----------------+-----------+-----------+------------------+-----------+\n1 row in set (0.01 sec)\n\nmysql>\n"})}),"\n",(0,s.jsx)(l.h3,{id:"\u6162\u67e5\u8be2\u65e5\u5fd7\u5206\u6790",children:"\u6162\u67e5\u8be2\u65e5\u5fd7\u5206\u6790"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u53ef\u4ee5\u4f7f\u7528 MySQL \u81ea\u5e26\u7684 mysqldumpslow \u5de5\u5177\u3002\u4f7f\u7528\u5f88\u7b80\u5355\uff0c\u53ef\u4ee5\u8ddf-help \u6765\u67e5\u770b\u5177\u4f53\u7684\u7528\u6cd5\u3002"}),"\n"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:'# -s\uff1a\u6392\u5e8f\u65b9\u5f0f\u3002c , t , l , r \u8868\u793a\u8bb0\u5f55\u6b21\u6570\u3001\u65f6\u95f4\u3001\u67e5\u8be2\u65f6\u95f4\u7684\u591a\u5c11\u3001\u8fd4\u56de\u7684\u8bb0\u5f55\u6570\u6392\u5e8f\uff1b\n# ac , at , al , ar \u8868\u793a\u76f8\u5e94\u7684\u5012\u53d9\uff1b # -t\uff1a\u8fd4\u56de\u524d\u9762\u591a\u5c11\u6761\u7684\u6570\u636e\uff1b\n# -g\uff1a\u5305\u542b\u4ec0\u4e48\uff0c\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u7684\uff1b mysqldumpslow -s r -t 10 /slowquery.log\n#slow\u8bb0\u5f55\u6700\u591a\u768410\u4e2a\u8bed\u53e5 mysqldumpslow -s t -t 10 -g "left join" /slowquery.log\n#\u6309\u7167\u65f6\u95f4\u6392\u5e8f\u524d10\u4e2d\u542b\u6709"left join"\u7684\n'})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u53ef\u4ee5\u5bfc\u5230 mysql.slow_query \u8868\u4e2d\uff0c\u7136\u540e\u901a\u8fc7 sql \u8bed\u53e5\u8fdb\u884c\u5206\u6790\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5de5\u5177\uff0c\u4e0b\u9762\u4f1a\u6709\u4ecb\u7ecd\u3002"}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"pt-query-digest",children:"pt-query-digest"}),"\n",(0,s.jsx)(l.p,{children:"pt-query-digest \u53ef\u4ee5\u4ece\u666e\u901a MySQL \u65e5\u5fd7\uff0c\u6162\u67e5\u8be2\u65e5\u5fd7\u4ee5\u53ca\u4e8c\u8fdb\u5236\u65e5\u5fd7\u4e2d\u5206\u6790\u67e5\u8be2\uff0c\u751a\u81f3\u53ef\u4ee5\u4ece SHOW PROCESSLIST \u548c MySQL \u534f\u8bae\u7684 tcpdump \u4e2d\u8fdb\u884c\u5206\u6790\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u6587\u4ef6\uff0c\u5b83\u4ece\u6807\u51c6\u8f93\u5165\u6d41\uff08STDIN\uff09\u4e2d\u8bfb\u53d6\u6570\u636e\u3002\n\u6700\u7b80\u5355\u5730\u7528\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"pt-query-digest slow.logs\n"})})]})}function u(e={}){const{wrapper:l}={...(0,t.M)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,l,n)=>{n.d(l,{I:()=>r,M:()=>o});var s=n(11504);const t={},i=s.createContext(t);function o(e){const l=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:l},e.children)}}}]);