"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[37236],{94932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var l=t(17624),s=t(4552);const i={title:"MySQL \u6e05\u7a7a\u8868\u547d\u4ee4\u4e4b\uff1atruncate \u4e0e delete \u533a\u522b",tags:["MySQL"],date:new Date("2016-11-10T02:53:13.000Z")},r=void 0,a={permalink:"/en/2016/11/10/mysql-5-qing-kong-biao-ming-ling-zhi-truncate-yu-delete-qu-bie",source:"@site/blog/2016-11-10-mysql-5-qing-kong-biao-ming-ling-zhi-truncate-yu-delete-qu-bie.md",title:"MySQL \u6e05\u7a7a\u8868\u547d\u4ee4\u4e4b\uff1atruncate \u4e0e delete \u533a\u522b",description:"\u5728\u5b9e\u9645\u5de5\u4f5c\u4e2d\uff0c\u6709\u65f6\u6211\u4eec\u4f1a\u60f3\u8981\u53bb\u6e05\u7a7a\u4e00\u5f20\u8868\u7684\u6240\u6709\u6570\u636e\uff0c\u5e38\u7528\u7684\u547d\u4ee4\u6709 delete \u548c truncate \u8fd9\u4e24\u4e2a\u547d\u4ee4\u3002",date:"2016-11-10T02:53:13.000Z",formattedDate:"November 10, 2016",tags:[{label:"MySQL",permalink:"/en/tags/my-sql"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"MySQL \u6e05\u7a7a\u8868\u547d\u4ee4\u4e4b\uff1atruncate \u4e0e delete \u533a\u522b",tags:["MySQL"],date:"2016-11-10T02:53:13.000Z"},unlisted:!1,prevItem:{title:"Denyhosts \u589e\u52a0\u670d\u52a1\u5668 SSH \u9ed1\u540d\u5355\u673a\u5236",permalink:"/en/2016/11/23/denyhosts-zeng-jia-fu-wu-qi-ssh-hei-ming-dan-ji-zhi"},nextItem:{title:"SSH LINUX Security Settings",permalink:"/en/2016/10/29/SSH-LINUX-Security-Settings"}},d={authorsImageUrls:[]},c=[{value:"1. delete",id:"1-delete",level:3},{value:"2. truncate",id:"2-truncate",level:3},{value:"3. \u91ca\u653e\u8868\u7a7a\u95f4",id:"3-\u91ca\u653e\u8868\u7a7a\u95f4",level:3},{value:"4. innodb_file_per_table",id:"4-innodb_file_per_table",level:3},{value:"4.1 \u4fee\u6539 mysql \u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6",id:"41-\u4fee\u6539-mysql-\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6",level:4},{value:"4.2 \u67e5\u770b\u4fee\u6539\u7ed3\u679c",id:"42-\u67e5\u770b\u4fee\u6539\u7ed3\u679c",level:4}];function o(e){const n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u5728\u5b9e\u9645\u5de5\u4f5c\u4e2d\uff0c\u6709\u65f6\u6211\u4eec\u4f1a\u60f3\u8981\u53bb\u6e05\u7a7a\u4e00\u5f20\u8868\u7684\u6240\u6709\u6570\u636e\uff0c\u5e38\u7528\u7684\u547d\u4ee4\u6709 delete \u548c truncate \u8fd9\u4e24\u4e2a\u547d\u4ee4\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"1-delete",children:"1. delete"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u5f88\u591a\u60c5\u51b5\uff0c\u6211\u4eec\u5bf9\u4e8e delete \u7684\u5e94\u7528\u66f4\u591a\uff0c\u56e0\u4e3a\u5b83\u652f\u6301\u66f4\u591a\u7684\u5339\u914d\u6a21\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 where \u6761\u4ef6\u8bed\u53e5\uff0c\u6e05\u7406\u4e00\u4e9b\u7279\u5b9a\u7684\u6570\u636e\uff0c\u5173\u4e8e delete \u7684\u64cd\u4f5c\uff0c\u8fd9\u91cc\u4e0d\u505a\u8fc7\u591a\u89e3\u91ca\uff0c\u6709\u7a7a\u5c31\u4e13\u95e8\u5199\u5199 delete \u7684\u4f7f\u7528\u548c\u539f\u7406\u3002delete \u5728\u6e05\u7a7a\u8868\u65f6\uff0c\u5982\u679c\u8868\u5185\u6709\u81ea\u589e ID \u7684\u8bbe\u5b9a\uff0c\u90a3\u4e48\u5728 delete \u6e05\u7a7a\u4e4b\u540e\uff0c\u518d\u63d2\u5165\u6570\u636e\u65f6\uff0c\u81ea\u589e ID \u4e0d\u4f1a\u4ece 1 \u5f00\u59cb\uff0c\u9ed8\u8ba4\u4f1a\u7ee7\u7eed\u589e\u52a0; \u9664\u975e\u6211\u4eec\u4f7f\u7528 OPTIMIZE TABLE\uff0c\u91cd\u7f6e\u8868\u5c5e\u6027\uff1b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> delete from piwik_tmp;\nQuery OK, 0 rows affected (0.00 sec)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"2-truncate",children:"2. truncate"}),"\n",(0,l.jsx)(n.p,{children:"truncate \u5728\u6e05\u7a7a\u8868\u65f6\uff0c\u4f1a\u540c\u65f6\u5c06\u81ea\u589e ID \u91cd\u7f6e\uff0c\u518d\u63d2\u5165\u65b0\u6570\u636e\u65f6\u4f1a\u4ece 1 \u5f00\u59cb\uff0c\u800c\u4e14 truncate \u5728\u6e05\u7a7a\u8868\u65f6\uff0c\u4e0d\u5173\u5fc3\u8868\u7684\u884c\u6570\uff0c\u6240\u4ee5\u6267\u884c\u6548\u7387\u4f1a\u9ad8\u4e8e delete\uff1b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> truncate table piwik_tmp;\nQuery OK, 0 rows affected (0.01 sec)\n\n"})}),"\n",(0,l.jsx)(n.h3,{id:"3-\u91ca\u653e\u8868\u7a7a\u95f4",children:"3. \u91ca\u653e\u8868\u7a7a\u95f4"}),"\n",(0,l.jsx)(n.p,{children:"\u4f46\u662f\u5728 truncate \u6e05\u7a7a\u8868\u6570\u636e\u65f6\uff0cmyisam \u7684\u8868\u548c innodb \u7684\u8868\u5728\u4f7f\u7528\u4e0a\u6709\u4e00\u5b9a\u7684\u533a\u522b\uff1bmyisam \u8868\u4f1a\u6e05\u7a7a\u6240\u6709\u6570\u636e\uff0c\u5e76\u91ca\u653e\u8868\u7a7a\u95f4\uff0c\u5373\u786c\u76d8\u7a7a\u95f4\u4f1a\u5f97\u5230\u91ca\u653e\u3002innodb \u8868\u4e5f\u4f1a\u6e05\u7a7a\u6240\u6709\u6570\u636e\uff0c\u4f46\u4e0d\u91ca\u653e\u8868\u7a7a\u95f4\u3002Innodb \u6570\u636e\u5e93\u5bf9\u4e8e\u5df2\u7ecf\u5220\u9664\u7684\u6570\u636e\u53ea\u662f\u6807\u8bb0\u4e3a\u5220\u9664\uff0c\u5e76\u4e0d\u771f\u6b63\u91ca\u653e\u6240\u5360\u7528\u7684\u78c1\u76d8\u7a7a\u95f4\uff0c\u8fd9\u5c31\u5bfc\u81f4 InnoDB \u6570\u636e\u5e93\u6587\u4ef6\u4e0d\u65ad\u589e\u957f\u3002\u5982\u679c\u60f3\u5f7b\u5e95\u91ca\u653e\u8fd9\u4e9b\u5df2\u7ecf\u5220\u9664\u7684\u6570\u636e\uff0c\u9700\u8981\u628a\u6570\u636e\u5e93\u5bfc\u51fa\uff0c\u5220\u9664 InnoDB \u6570\u636e\u5e93\u6587\u4ef6\uff0c\u7136\u540e\u518d\u5bfc\u5165\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"# \u5907\u4efd\u6570\u636e\u5e93\uff1a\nmysqldump -u -p --quick --force --all-databases > mysqldump.sql\n\n# \u505c\u6b62\u6570\u636e\u5e93\nservice mysqld stop\n\n# \u5220\u9664\u8fd9\u4e9b\u5927\u6587\u4ef6\nrm /usr/local/mysql/var/ibdata1\nrm /usr/local/mysql/var/ib_logfile*\n\n# \u624b\u52a8\u5220\u9664\u9664Mysql\u4e4b\u5916\u6240\u6709\u6570\u636e\u5e93\u6587\u4ef6\u5939\uff0c\u7136\u540e\u542f\u52a8\u6570\u636e\u5e93\nservice mysqld start\n\n# \u8fd8\u539f\u6570\u636e\nmysql -uroot -proot < mysqldump.sql\n"})}),"\n",(0,l.jsx)(n.h3,{id:"4-innodb_file_per_table",children:"4. innodb_file_per_table"}),"\n",(0,l.jsx)(n.p,{children:"\u8fd8\u6709\u4e00\u79cd\u65b9\u5f0f\u662f\u5728\u521b\u5efa\u6570\u636e\u5e93\u7684\u65f6\u5019\u8bbe\u7f6e innodb_file_per_table\uff0c\u8fd9\u6837 InnoDB \u4f1a\u5bf9\u6bcf\u4e2a\u8868\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u6587\u4ef6\uff0c\u7136\u540e\u53ea\u9700\u8981\u8fd0\u884c OPTIMIZE TABLE \u547d\u4ee4\u5c31\u53ef\u4ee5\u91ca\u653e\u6240\u6709\u5df2\u7ecf\u5220\u9664\u7684\u78c1\u76d8\u7a7a\u95f4\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"41-\u4fee\u6539-mysql-\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6",children:"4.1 \u4fee\u6539 mysql \u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsx)(n.p,{children:"\u7f16\u8f91 my.ini \u6216 my.cnf \u5728 innodb \u6bb5\u4e2d\u52a0\u5165 innodb_file_per_table=1 # 1 \u4e3a\u542f\u7528\uff0c0 \u4e3a\u7981\u7528"}),"\n",(0,l.jsx)(n.h4,{id:"42-\u67e5\u770b\u4fee\u6539\u7ed3\u679c",children:"4.2 \u67e5\u770b\u4fee\u6539\u7ed3\u679c"}),"\n",(0,l.jsx)(n.p,{children:"\u901a\u8fc7 mysql \u8bed\u53e5\u53ef\u4ee5\u67e5\u770b\u8be5\u53d8\u91cf\u7684\u503c\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> show variables like '%per_table%';\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var l=t(11504);const s={},i=l.createContext(s);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);