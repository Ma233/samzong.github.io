"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[68608],{72220:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=s(17624),t=s(4552);const l={title:"Metabase \u4e0a\u624b - \u4f7f\u7528 Jar \u8fd0\u884c",tags:["Tools"],date:new Date("2022-04-16T02:40:00.000Z")},i=void 0,r={permalink:"/2022/04/16/metabase-shang-shou-shi-yong-jar",source:"@site/blog/2022-04-16-metabase-shang-shou-shi-yong-jar.md",title:"Metabase \u4e0a\u624b - \u4f7f\u7528 Jar \u8fd0\u884c",description:"Metabase Documentation",date:"2022-04-16T02:40:00.000Z",formattedDate:"2022\u5e744\u670816\u65e5",tags:[{label:"Tools",permalink:"/tags/tools"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Metabase \u4e0a\u624b - \u4f7f\u7528 Jar \u8fd0\u884c",tags:["Tools"],date:"2022-04-16T02:40:00.000Z"},unlisted:!1,prevItem:{title:"python Request install pip error",permalink:"/2022/04/17/python-request-install-pip-error"},nextItem:{title:"SQL \u5bf9\u65f6\u95f4\u6574\u70b9\u7684\u5904\u7406",permalink:"/2022/04/15/sql-dui-shi-jian-zheng-dian-de-chu-li"}},o={authorsImageUrls:[]},c=[{value:"Metabase Documentation",id:"metabase-documentation",level:2},{value:"Installation",id:"installation",level:2},{value:"\u68c0\u67e5 Java \u73af\u5883",id:"\u68c0\u67e5-java-\u73af\u5883",level:3},{value:"\u83b7\u53d6 Metabase \u7684 Jar \u5305",id:"\u83b7\u53d6-metabase-\u7684-jar-\u5305",level:3},{value:"\u542f\u52a8 Metabase",id:"\u542f\u52a8-metabase",level:3},{value:"\u4ee5\u540e\u53f0\u65b9\u5f0f\u8fd0\u884c Metabase",id:"\u4ee5\u540e\u53f0\u65b9\u5f0f\u8fd0\u884c-metabase",level:3},{value:"Configuration",id:"configuration",level:2},{value:"\u914d\u7f6e Metabase \u7684\u6570\u636e\u5e93",id:"\u914d\u7f6e-metabase-\u7684\u6570\u636e\u5e93",level:3},{value:"\u914d\u7f6e Metabase \u7684 Nginx",id:"\u914d\u7f6e-metabase-\u7684-nginx",level:3},{value:"\u914d\u7f6e Metabase \u7684 ClickHouse \u63d2\u4ef6",id:"\u914d\u7f6e-metabase-\u7684-clickhouse-\u63d2\u4ef6",level:3},{value:"Tips",id:"tips",level:2},{value:"1. \u5982\u4f55\u91cd\u542f Metabase ?",id:"1-\u5982\u4f55\u91cd\u542f-metabase-",level:3}];function d(e){const a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"metabase-documentation",children:"Metabase Documentation"}),"\n",(0,n.jsx)(a.p,{children:"\u8fd9\u91cc\u4e3b\u8981\u662f metabase \u7684\u90e8\u7f72\u548c\u4f7f\u7528\u65b9\u6cd5\uff0c\u4ee5\u53ca\u76f8\u5173\u7684\u7ec4\u4ef6\u7684\u4f7f\u7528\u65b9\u6cd5\u3002"}),"\n",(0,n.jsx)(a.p,{children:"\u6211\u6b63\u5728\u6253\u9020\u4e00\u4e2a\u4e2d\u6587\u73af\u5883\u4e0b Metabase \u4ea4\u4e92\u7684\u793e\u7fa4\uff0c\u5982\u679c\u4f60\u6709\u4efb\u4f55\u5173\u4e8e Metabase \u7684\u95ee\u9898\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\uff1a"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:["Metabase \u4e2d\u6587\u4ea4\u6d41 ",(0,n.jsx)(a.strong,{children:(0,n.jsx)(a.a,{href:"https://t.me/metabase_zh",children:"https://t.me/metabase_zh"})})]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(a.p,{children:"Metabase \u7684\u5b89\u88c5\u65b9\u5f0f\u6709\u4e09\u79cd\uff1a"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\u4ee5 Jar \u5305\u7684\u5f62\u5f0f\uff0c\u5728\u672c\u5730\u8fd0\u884c\uff0c\u53ea\u9700\u8981\u7b80\u5355\u7684\u6b65\u9aa4\u5373\u53ef ",(0,n.jsx)(a.strong,{children:"(\u672c\u6587)"})]}),"\n",(0,n.jsx)(a.li,{children:"\u4ee5 Docker \u5bb9\u5668\u7684\u5f62\u5f0f\uff0c\u90e8\u7f72\u5230\u670d\u52a1\u5668\u4e0a"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"\u4ee5 Jar \u7684\u65b9\u5f0f\u6765\u8fd0\u884c\u76f8\u5bf9\u7b80\u5355\uff0c\u5bf9\u73af\u5883\u4f9d\u8d56\u4e5f\u662f\u6bd4\u8f83\u5c11\uff0c\u53ea\u8981\u7684\u7535\u8111\u4e0a\u6709 JDK \u5c31\u53ef\u4ee5\u4e86\u3002"}),"\n",(0,n.jsx)(a.h3,{id:"\u68c0\u67e5-java-\u73af\u5883",children:"\u68c0\u67e5 Java \u73af\u5883"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'java -version\n\n=> java version "1.8.0_311"\n=> Java(TM) SE Runtime Environment (build 1.8.0_311-b11)\n=> Java HotSpot(TM) 64-Bit Server VM (build 25.311-b11, mixed mode)\n'})}),"\n",(0,n.jsx)(a.p,{children:"Metabase \u8981\u6c42 Java 8 \u53ca\u4ee5\u4e0a\uff0c\u5982\u679c\u4f60\u7684\u73af\u5883\u4e0d\u652f\u6301\uff0c\u8bf7\u5148\u5347\u7ea7"}),"\n",(0,n.jsx)(a.h3,{id:"\u83b7\u53d6-metabase-\u7684-jar-\u5305",children:"\u83b7\u53d6 Metabase \u7684 Jar \u5305"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://metabase.com/start/jar.html",children:"https://metabase.com/start/jar.html"})}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"\u901a\u8fc7\u4e0a\u65b9\u8fd9\u4e2a\u94fe\u63a5\uff0c\u53ef\u4ee5\u5f88\u5feb\u7684\u83b7\u53d6\u5230 Metabase \u7684\u6700\u65b0\u7248\u672c\u7684 Jar \u5305"}),"\n",(0,n.jsx)(a.h3,{id:"\u542f\u52a8-metabase",children:"\u542f\u52a8 Metabase"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"java -jar metabase.jar\n"})}),"\n",(0,n.jsx)(a.p,{children:"\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684\u547d\u4ee4\uff0c\u5c31\u53ef\u4ee5\u542f\u52a8 Metabase \u4e86\uff0c\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u81ea\u52a8\u68c0\u67e5\u73af\u5883\uff0c\u5982\u679c\u73af\u5883\u6ca1\u95ee\u9898\uff0c\u5c31\u4f1a\u81ea\u52a8\u542f\u52a8 Metabase \u4e86\u3002"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"\u751f\u4ea7\u73af\u5883\u7684 MetaBase \u8def\u5f84\u662f /data/product/metabase/"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"\u6210\u529f\u542f\u52a8\u540e\uff0cMetabase \u4f1a\u8fd0\u884c\u5728 3000 \u7aef\u53e3"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"})}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"\u4ee5\u540e\u53f0\u65b9\u5f0f\u8fd0\u884c-metabase",children:"\u4ee5\u540e\u53f0\u65b9\u5f0f\u8fd0\u884c Metabase"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"nohup java -jar metabase.jar > metabase.log 2>&1 &\n"})}),"\n",(0,n.jsx)(a.p,{children:"\u65e5\u5fd7\u6587\u4ef6\u4f1a\u4fdd\u5b58\u5728\u672c\u5730\u7684 metabase.log \u6587\u4ef6\u4e2d\uff0c\u5982\u679c\u4f60\u60f3\u67e5\u770b Metabase \u7684\u65e5\u5fd7\uff0c\u53ef\u4ee5\u4f7f\u7528 tail -f metabase.log \u6765\u67e5\u770b\u3002"}),"\n",(0,n.jsx)(a.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(a.h3,{id:"\u914d\u7f6e-metabase-\u7684\u6570\u636e\u5e93",children:"\u914d\u7f6e Metabase \u7684\u6570\u636e\u5e93"}),"\n",(0,n.jsxs)(a.p,{children:["Metabase \u9ed8\u8ba4\u7684\u91c7\u7528\u7684\u662f H2 \u7684\u4f5c\u4e3a\u6570\u636e\u5e93\u5b58\u50a8\uff0c\u4f1a\u5b58\u653e\u5728\u7a0b\u5e8f\u8fd0\u884c\u76ee\u5f55\u4e0b\u7684 ",(0,n.jsx)(a.code,{children:"data"})," \u76ee\u5f55\u4e0b\uff1b\u4f46\u5bf9\u4e8e\u5728\u6b63\u5f0f\u73af\u5883\u4e2d\u542f\u7528 Metabase\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 MySQL \u6765\u4f5c\u4e3a\u6570\u636e\u5e93\u5b58\u50a8\u3002"]}),"\n",(0,n.jsx)(a.p,{children:"\u800c\u6307\u5b9a Metabase \u7684\u6570\u636e\u5e93\u914d\u7f6e\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u52a0\u8f7d\u5230\u7cfb\u7edf\u7684\u9ed8\u8ba4\u73af\u5883\u4e2d\uff1a"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'\nvim ~/.bashrc\n\n# update metabase config at .bashrc\nexport MB_DB_TYPE=mysql\nexport MB_DB_DBNAME=metabase\nexport MB_DB_PORT=3306\nexport MB_DB_USER=\nexport MB_DB_PASS=\nexport MB_DB_HOST=\nexport MB_DB_CONNECTION_URI="mysql://MB_DB_HOST:MB_DB_PORT/MB_DB_DBNAME?user=MB_DB_USER&password=MB_DB_PASS"\nexport JAVA_TIMEZONE=Asia/Shanghai\n'})}),"\n",(0,n.jsx)(a.h3,{id:"\u914d\u7f6e-metabase-\u7684-nginx",children:"\u914d\u7f6e Metabase \u7684 Nginx"}),"\n",(0,n.jsx)(a.p,{children:"\u901a\u8fc7\u914d\u7f6e Metabase \u7684 Nginx\uff0c\u53ef\u4ee5\u8ba9 Metabase \u5728\u7f51\u7ad9\u4e0a\u8fd0\u884c\uff0c\u8fd9\u6837\u53ef\u4ee5\u5f00\u653e\u5916\u90e8\u670d\u52a1\u7ed9\u4f7f\u7528\u8005"}),"\n",(0,n.jsx)(a.p,{children:"\u5bf9 Nginx \u7684\u914d\u7f6e\uff0c\u6bd4\u8f83\u7b80\u5355\uff0c\u53ef\u4ee5\u53c2\u8003\u8fd9\u4e2a\u6587\u6863\uff1a"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"server {\n listen 443 ssl;\n server_name example.com;\n root /var/www/example.com/public;\n\n # reverse proxy\n location /mb/ {\n  proxy_pass http://127.0.0.1:3000;\n  proxy_set_header Host $Host;\n }\n}\n"})}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"overseas-metabase \u7684 \u914d\u7f6e\u6587\u4ef6\u653e\u5728 /etc/nginx/config.d/leyan.core \u4e0b\uff0c\u5728 80.conf \u5185 \u5f15\u7528"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"\u914d\u7f6e-metabase-\u7684-clickhouse-\u63d2\u4ef6",children:"\u914d\u7f6e Metabase \u7684 ClickHouse \u63d2\u4ef6"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:["Metabase \u5b98\u65b9\u652f\u6301\u6570\u636e\u5e93 ",(0,n.jsx)(a.a,{href:"https://www.metabase.com/docs/latest/administration-guide/01-managing-databases.html#officially-supported-databases",children:"https://www.metabase.com/docs/latest/administration-guide/01-managing-databases.html#officially-supported-databases"})]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Metabase \u9ed8\u8ba4\u652f\u6301\u975e\u5e38\u4e30\u5bcc\u6570\u636e\u5e93\u9a71\u52a8\uff0c\u8fd9\u4e9b\u90fd\u4f1a\u9884\u7f6e\u5728 Jar \u5185\uff0c\u4f8b\u5982 MySQL\u3001Oracle\u3001SQL Server\uff1b\u4f46\u662f ClickHouse \u4e0d\u5728\u5176\u4e2d\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u72ec\u7acb\u8fdb\u884c\u5b89\u88c5\u3002"}),"\n",(0,n.jsxs)(a.p,{children:["ClickHouse \u9a71\u52a8\uff1a",(0,n.jsx)(a.a,{href:"https://github.com/enqueue/metabase-clickhouse-driver#readme",children:"https://github.com/enqueue/metabase-clickhouse-driver#readme"}),"="]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\u4e0b\u8f7d ",(0,n.jsx)(a.strong,{children:"\u5408\u9002\u7684"})," \u9a71\u52a8\u7248\u672c\uff0c\u653e\u5728 Metabase \u7684\u76ee\u5f55\u4e0b\u7684 plugin \u6587\u4ef6\u5939\u4e0b"]}),"\n",(0,n.jsx)(a.li,{children:"\u91cd\u65b0\u542f\u52a8 Metabase \u5373\u53ef"}),"\n",(0,n.jsx)(a.li,{children:"\u5728 Metabase \u7684\u6570\u636e\u5e93\u7ba1\u7406\u4e2d\u65b0\u589e\u6570\u636e\u5e93\uff0c\u9009\u62e9\u7c7b\u578b\u4e3a ClickHouse"}),"\n"]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:["\u66f4\u591a\u4e09\u65b9\u9a71\u52a8\uff1a",(0,n.jsx)(a.a,{href:"https://www.metabase.com/docs/latest/developers-guide-drivers.html#how-to-use-a-community-built-driver",children:"https://www.metabase.com/docs/latest/developers-guide-drivers.html#how-to-use-a-community-built-driver"})]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"tips",children:"Tips"}),"\n",(0,n.jsx)(a.h3,{id:"1-\u5982\u4f55\u91cd\u542f-metabase-",children:"1. \u5982\u4f55\u91cd\u542f Metabase ?"}),"\n",(0,n.jsx)(a.p,{children:"\u76f4\u63a5\u6740\u6389\u8fdb\u7a0b\u5373\u53ef\uff0c\u5982\u679c\u4e3a\u4e86\u4ee5\u540e\u65b9\u4fbf\uff0c\u53ef\u4ee5\u5c06\u4e0b\u8ff0\u547d\u4ee4\u4fdd\u5b58\u4e3a stop.sh \u653e\u5728\u76ee\u5f55\u4e0b\uff0c\u540e\u7eed\u76f4\u63a5\u6267\u884c"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"APP_NAME=\"metabase\"\n\nps aux | grep python | grep ${APP_NAME} | awk '{print $2}' | xargs kill -9\n"})})]})}function h(e={}){const{wrapper:a}={...(0,t.M)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,a,s)=>{s.d(a,{I:()=>r,M:()=>i});var n=s(11504);const t={},l=n.createContext(t);function i(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);