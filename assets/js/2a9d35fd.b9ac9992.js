"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[11093],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",E={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(s,".").concat(d)]||u[d]||E[d]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var m={};for(var s in n)hasOwnProperty.call(n,s)&&(m[s]=n[s]);m.originalType=e,m[u]="string"==typeof e?e:a,i[1]=m;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>E,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"\u5feb\u901f\u4e86\u89e3 MySQL \u65f6\u95f4\u8303\u56f4\u53c2\u6570",tags:[]},i=void 0,m={permalink:"/2021/04/18/kuai-su-liao-jie-mysql-shi-jian-fan-wei-can-shu",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2021-04-18-kuai-su-liao-jie-mysql-shi-jian-fan-wei-can-shu.md",source:"@site/blog/2021-04-18-kuai-su-liao-jie-mysql-shi-jian-fan-wei-can-shu.md",title:"\u5feb\u901f\u4e86\u89e3 MySQL \u65f6\u95f4\u8303\u56f4\u53c2\u6570",description:"\u67e5\u8be2 30 \u5929",date:"2021-04-18T00:00:00.000Z",formattedDate:"2021\u5e744\u670818\u65e5",tags:[],readingTime:1.3566666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u5feb\u901f\u4e86\u89e3 MySQL \u65f6\u95f4\u8303\u56f4\u53c2\u6570",tags:[]},prevItem:{title:"Mac \u5982\u4f55\u5feb\u901f\u5f55\u5236 GiF \u5c0f\u89c6\u9891",permalink:"/2021/06/12/mac-ru-he-kuai-su-lu-zhi-gif-xiao-shi-pin"},nextItem:{title:"HQL/SQL\u65f6\u95f4\u5904\u7406",permalink:"/2021/04/16/hql-sql-shi-jian-chu-li"}},s={authorsImageUrls:[]},c=[{value:"\u67e5\u8be2 30 \u5929",id:"\u67e5\u8be2-30-\u5929",level:2}],l={toc:c},u="wrapper";function E(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u67e5\u8be2-30-\u5929"},"\u67e5\u8be2 30 \u5929"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u67e5\u8be2 30 \u5929\nselect DATE_SUB(CURDATE(), INTERVAL 30 DAY) frm table;\n\n\n\u4eca\u5929\n\nselect * from \u8868\u540d where to_days(\u65f6\u95f4\u5b57\u6bb5\u540d) = to_days(now());\n\n\u6628\u5929\n\nSELECT * FROM \u8868\u540d WHERE TO_DAYS( NOW( ) ) - TO_DAYS( \u65f6\u95f4\u5b57\u6bb5\u540d) <= 1\n\n7\u5929\n\nSELECT * FROM \u8868\u540d where DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= date(\u65f6\u95f4\u5b57\u6bb5\u540d)\n\n\u8fd130\u5929\n\nSELECT * FROM \u8868\u540d where DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= date(\u65f6\u95f4\u5b57\u6bb5\u540d)\n\n\u672c\u6708\n\nSELECT * FROM \u8868\u540d WHERE DATE_FORMAT( \u65f6\u95f4\u5b57\u6bb5\u540d, '%Y%m' ) = DATE_FORMAT( CURDATE( ) , '%Y%m' )\n\n\u4e0a\u4e00\u6708\n\nSELECT * FROM \u8868\u540d WHERE PERIOD_DIFF( date_format( now( ) , '%Y%m' ) , date_format( \u65f6\u95f4\u5b57\u6bb5\u540d, '%Y%m' ) ) =1\n\n \n\n#\u67e5\u8be2\u672c\u5b63\u5ea6\u6570\u636e\nselect * from `ht_invoice_information` where QUARTER(create_date)=QUARTER(now());\n#\u67e5\u8be2\u4e0a\u5b63\u5ea6\u6570\u636e\nselect * from `ht_invoice_information` where QUARTER(create_date)=QUARTER(DATE_SUB(now(),interval 1 QUARTER));\n#\u67e5\u8be2\u672c\u5e74\u6570\u636e\nselect * from `ht_invoice_information` where YEAR(create_date)=YEAR(NOW());\n#\u67e5\u8be2\u4e0a\u5e74\u6570\u636e\nselect * from `ht_invoice_information` where year(create_date)=year(date_sub(now(),interval 1 year));\n\n \n\n\u67e5\u8be2\u5f53\u524d\u8fd9\u5468\u7684\u6570\u636e \nSELECT name,submittime FROM enterprise WHERE YEARWEEK(date_format(submittime,'%Y-%m-%d')) = YEARWEEK(now());\n\n\u67e5\u8be2\u4e0a\u5468\u7684\u6570\u636e\nSELECT name,submittime FROM enterprise WHERE YEARWEEK(date_format(submittime,'%Y-%m-%d')) = YEARWEEK(now())-1;\n\n\u67e5\u8be2\u5f53\u524d\u6708\u4efd\u7684\u6570\u636e\nselect name,submittime from enterprise   where date_format(submittime,'%Y-%m')=date_format(now(),'%Y-%m')\n\n\u67e5\u8be2\u8ddd\u79bb\u5f53\u524d\u73b0\u57286\u4e2a\u6708\u7684\u6570\u636e\nselect name,submittime from enterprise where submittime between date_sub(now(),interval 6 month) and now();\n\n\u67e5\u8be2\u4e0a\u4e2a\u6708\u7684\u6570\u636e\nselect name,submittime from enterprise   where date_format(submittime,'%Y-%m')=date_format(DATE_SUB(curdate(), INTERVAL 1 MONTH),'%Y-%m')\n\nselect * from ` user ` where DATE_FORMAT(pudate, ' %Y%m ' ) = DATE_FORMAT(CURDATE(), ' %Y%m ' ) ;\n\nselect * from user where WEEKOFYEAR(FROM_UNIXTIME(pudate,'%y-%m-%d')) = WEEKOFYEAR(now())\n\nselect * \nfrom user \nwhere MONTH (FROM_UNIXTIME(pudate, ' %y-%m-%d ' )) = MONTH (now())\n\nselect * \nfrom [ user ] \nwhere YEAR (FROM_UNIXTIME(pudate, ' %y-%m-%d ' )) = YEAR (now())\nand MONTH (FROM_UNIXTIME(pudate, ' %y-%m-%d ' )) = MONTH (now())\n\nselect * \nfrom [ user ] \nwhere pudate between \u4e0a\u6708\u6700\u540e\u4e00\u5929\nand \u4e0b\u6708\u7b2c\u4e00\u5929\n\nwhere   date(regdate)   =   curdate();\n\nselect   *   from   test   where   year(regdate)=year(now())   and   month(regdate)=month(now())   and   day(regdate)=day(now())\n\nSELECT date( c_instime ) ,curdate( )\nFROM `t_score`\nWHERE 1\nLIMIT 0 , 30\n")))}E.isMDXComponent=!0}}]);