"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[99540],{4796:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>E});var r=t(17624),a=t(4552);const o={title:"\u5feb\u901f\u4e86\u89e3 MySQL \u65f6\u95f4\u8303\u56f4\u53c2\u6570",tags:["MySQL"]},i=void 0,m={permalink:"/2021/04/18/kuai-su-liao-jie-mysql-shi-jian-fan-wei-can-shu",source:"@site/blog/2021-04-18-kuai-su-liao-jie-mysql-shi-jian-fan-wei-can-shu.md",title:"\u5feb\u901f\u4e86\u89e3 MySQL \u65f6\u95f4\u8303\u56f4\u53c2\u6570",description:"\u67e5\u8be2 30 \u5929",date:"2021-04-18T00:00:00.000Z",formattedDate:"April 18, 2021",tags:[{label:"MySQL",permalink:"/tags/my-sql"}],readingTime:2.035,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u5feb\u901f\u4e86\u89e3 MySQL \u65f6\u95f4\u8303\u56f4\u53c2\u6570",tags:["MySQL"]},unlisted:!1,prevItem:{title:"HQL/SQL\u65f6\u95f4\u5904\u7406",permalink:"/2021/04/16/hql-sql-shi-jian-chu-li"},nextItem:{title:"Mac \u5982\u4f55\u5feb\u901f\u5f55\u5236 GiF \u5c0f\u89c6\u9891",permalink:"/2021/06/12/mac-ru-he-kuai-su-lu-zhi-gif-xiao-shi-pin"}},s={authorsImageUrls:[]},E=[{value:"\u67e5\u8be2 30 \u5929",id:"\u67e5\u8be2-30-\u5929",level:2}];function c(e){const n={code:"code",h2:"h2",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u67e5\u8be2-30-\u5929",children:"\u67e5\u8be2 30 \u5929"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- \u67e5\u8be2 30 \u5929\nselect DATE_SUB(CURDATE(), INTERVAL 30 DAY) frm table;\n\n\n\u4eca\u5929\n\nselect * from \u8868\u540d where to_days(\u65f6\u95f4\u5b57\u6bb5\u540d) = to_days(now());\n\n\u6628\u5929\n\nSELECT * FROM \u8868\u540d WHERE TO_DAYS( NOW( ) ) - TO_DAYS( \u65f6\u95f4\u5b57\u6bb5\u540d) <= 1\n\n7\u5929\n\nSELECT * FROM \u8868\u540d where DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= date(\u65f6\u95f4\u5b57\u6bb5\u540d)\n\n\u8fd130\u5929\n\nSELECT * FROM \u8868\u540d where DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= date(\u65f6\u95f4\u5b57\u6bb5\u540d)\n\n\u672c\u6708\n\nSELECT * FROM \u8868\u540d WHERE DATE_FORMAT( \u65f6\u95f4\u5b57\u6bb5\u540d, '%Y%m' ) = DATE_FORMAT( CURDATE( ) , '%Y%m' )\n\n\u4e0a\u4e00\u6708\n\nSELECT * FROM \u8868\u540d WHERE PERIOD_DIFF( date_format( now( ) , '%Y%m' ) , date_format( \u65f6\u95f4\u5b57\u6bb5\u540d, '%Y%m' ) ) =1\n\n \n\n#\u67e5\u8be2\u672c\u5b63\u5ea6\u6570\u636e\nselect * from `ht_invoice_information` where QUARTER(create_date)=QUARTER(now());\n#\u67e5\u8be2\u4e0a\u5b63\u5ea6\u6570\u636e\nselect * from `ht_invoice_information` where QUARTER(create_date)=QUARTER(DATE_SUB(now(),interval 1 QUARTER));\n#\u67e5\u8be2\u672c\u5e74\u6570\u636e\nselect * from `ht_invoice_information` where YEAR(create_date)=YEAR(NOW());\n#\u67e5\u8be2\u4e0a\u5e74\u6570\u636e\nselect * from `ht_invoice_information` where year(create_date)=year(date_sub(now(),interval 1 year));\n\n \n\n\u67e5\u8be2\u5f53\u524d\u8fd9\u5468\u7684\u6570\u636e \nSELECT name,submittime FROM enterprise WHERE YEARWEEK(date_format(submittime,'%Y-%m-%d')) = YEARWEEK(now());\n\n\u67e5\u8be2\u4e0a\u5468\u7684\u6570\u636e\nSELECT name,submittime FROM enterprise WHERE YEARWEEK(date_format(submittime,'%Y-%m-%d')) = YEARWEEK(now())-1;\n\n\u67e5\u8be2\u5f53\u524d\u6708\u4efd\u7684\u6570\u636e\nselect name,submittime from enterprise   where date_format(submittime,'%Y-%m')=date_format(now(),'%Y-%m')\n\n\u67e5\u8be2\u8ddd\u79bb\u5f53\u524d\u73b0\u57286\u4e2a\u6708\u7684\u6570\u636e\nselect name,submittime from enterprise where submittime between date_sub(now(),interval 6 month) and now();\n\n\u67e5\u8be2\u4e0a\u4e2a\u6708\u7684\u6570\u636e\nselect name,submittime from enterprise   where date_format(submittime,'%Y-%m')=date_format(DATE_SUB(curdate(), INTERVAL 1 MONTH),'%Y-%m')\n\nselect * from ` user ` where DATE_FORMAT(pudate, ' %Y%m ' ) = DATE_FORMAT(CURDATE(), ' %Y%m ' ) ;\n\nselect * from user where WEEKOFYEAR(FROM_UNIXTIME(pudate,'%y-%m-%d')) = WEEKOFYEAR(now())\n\nselect * \nfrom user \nwhere MONTH (FROM_UNIXTIME(pudate, ' %y-%m-%d ' )) = MONTH (now())\n\nselect * \nfrom [ user ] \nwhere YEAR (FROM_UNIXTIME(pudate, ' %y-%m-%d ' )) = YEAR (now())\nand MONTH (FROM_UNIXTIME(pudate, ' %y-%m-%d ' )) = MONTH (now())\n\nselect * \nfrom [ user ] \nwhere pudate between \u4e0a\u6708\u6700\u540e\u4e00\u5929\nand \u4e0b\u6708\u7b2c\u4e00\u5929\n\nwhere   date(regdate)   =   curdate();\n\nselect   *   from   test   where   year(regdate)=year(now())   and   month(regdate)=month(now())   and   day(regdate)=day(now())\n\nSELECT date( c_instime ) ,curdate( )\nFROM `t_score`\nWHERE 1\nLIMIT 0 , 30\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>m,M:()=>i});var r=t(11504);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);