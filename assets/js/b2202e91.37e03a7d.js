"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[56078],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"01 \u5feb\u901f\u4e86\u89e3\u8fde\u63a5\u6570\u636e\u5e93",tags:[]},o=void 0,i={permalink:"/2021/09/24/kuai-su-liao-jie-lian-jie-shu-ju-ku",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2021-09-24-kuai-su-liao-jie-lian-jie-shu-ju-ku.md",source:"@site/blog/2021-09-24-kuai-su-liao-jie-lian-jie-shu-ju-ku.md",title:"01 \u5feb\u901f\u4e86\u89e3\u8fde\u63a5\u6570\u636e\u5e93",description:"SQLAlchemy \u662f ORM \u6846\u67b6\uff0c\u76ee\u524d\u4e3b\u6d41\u4e14\u6bd4\u8f83\u901a\u7528\uff0c\u5728\u7a0b\u5e8f\u4e2d\u7528\u6765\u5904\u7406\u6570\u636e\u5e93\u76f8\u5173\u7684\u80fd\u529b\uff0c\u672c\u6587\u662f\u7528\u4e8e\u5b66\u4e60\u548c\u7406\u89e3 SQLAlchemy \u7684\u8bb0\u5f55\uff0c\u4e3b\u8981\u4f7f\u7528\u7684\u7f16\u7a0b\u8bed\u8a00\u662f Python",date:"2021-09-24T00:00:00.000Z",formattedDate:"2021\u5e749\u670824\u65e5",tags:[],readingTime:.88,hasTruncateMarker:!1,authors:[],frontMatter:{title:"01 \u5feb\u901f\u4e86\u89e3\u8fde\u63a5\u6570\u636e\u5e93",tags:[]},prevItem:{title:"MacOS 10.15 \u5f00\u542f HiDPI",permalink:"/2021/10/12/macos-10.15-kai-qi-hidpi"},nextItem:{title:"node nvm",permalink:"/2021/09/24/node-nvm"}},c={authorsImageUrls:[]},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u7b80\u5355\u7684\u67e5\u8be2",id:"\u7b80\u5355\u7684\u67e5\u8be2",level:2},{value:"\u5bf9\u4e8e\u67e5\u8be2\u7ed3\u679c\u7684\u8bf4\u660e",id:"\u5bf9\u4e8e\u67e5\u8be2\u7ed3\u679c\u7684\u8bf4\u660e",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SQLAlchemy \u662f ORM \u6846\u67b6\uff0c\u76ee\u524d\u4e3b\u6d41\u4e14\u6bd4\u8f83\u901a\u7528\uff0c\u5728\u7a0b\u5e8f\u4e2d\u7528\u6765\u5904\u7406\u6570\u636e\u5e93\u76f8\u5173\u7684\u80fd\u529b\uff0c\u672c\u6587\u662f\u7528\u4e8e\u5b66\u4e60\u548c\u7406\u89e3 SQLAlchemy \u7684\u8bb0\u5f55\uff0c\u4e3b\u8981\u4f7f\u7528\u7684\u7f16\u7a0b\u8bed\u8a00\u662f Python"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Python3 AND MySQL 5.6")),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u76ee\u524d\u8f83\u4e3a\u573a\u666f\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u662f MySQL\uff0c\u8fd9\u91cc\u4ecb\u7ecd \u5728 Python \u4e2d\u5b89\u88c5\u548c MySQL \u7684\u94fe\u63a5\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install sqlalchemy pymysql\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5feb\u901f\u8fde\u63a5\u6570\u636e\u5e93")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# easy script.\n\nfrom sqlalchemy import create_engine\nfrom sqlalchemy impory text\n\nengine = create_engine('mysql+pymysql://root:pass@localhost/dbName')\n\nconn = engine.connect()\n\nsql = text(\"select version();\")\n\ndata = sql.fetchall()\n\nfor d in data:\n    print(d)\n")),(0,a.kt)("h2",{id:"\u7b80\u5355\u7684\u67e5\u8be2"},"\u7b80\u5355\u7684\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from sqlalchemy impory text\n\nsql = text(\"select * from userTable where create_date>=:start_time AND login_cnt=:times\")\n# start_time \u5f00\u59cb\u65f6\u95f4\n# times \u767b\u5f55\u6b21\u6570\n\n# sql \u6267\u884c\u65f6\u52a8\u6001\u5165\u53c2\n\nstart_time,times = '2021-06-01 00:00:00', 3\n\nres = conn.execute(s, create_date = start_time.pydatetime(), loign_cnt=times)\n")),(0,a.kt)("h2",{id:"\u5bf9\u4e8e\u67e5\u8be2\u7ed3\u679c\u7684\u8bf4\u660e"},"\u5bf9\u4e8e\u67e5\u8be2\u7ed3\u679c\u7684\u8bf4\u660e"),(0,a.kt)("p",null,"\u83b7\u53d6\u6240\u6709\u7684\u67e5\u8be2\u7ed3\u679c\uff0c\u8fd4\u56de\u7684\u6570\u636e\u4e3a tuple \u7684\u5217\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"data = res.fetachAll()")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528 pandas \u5c06\u67e5\u8be2\u7ed3\u679c\u4fdd\u5b58\u5230 csv \u4e2d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\ndf = pd.DataFrame(data, columns=['user_id',],)  # data \u662f\u8981\u5199\u5165\u7684\u6570\u636e\uff0ccolumns \u662f\u5217\u5934\uff0cList\n\n\ndf.to_csv('~/export_filepath.csv', index=False)\n")))}m.isMDXComponent=!0}}]);