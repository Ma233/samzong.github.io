"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[44736],{74806:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=s(85893),n=s(11151);const a={title:"HowTo Install PostgreSQL 9.5 on CentOS 6.x",tags:["PostgreSQL"],date:new Date("2016-10-20T07:25:37.000Z")},l=void 0,o={permalink:"/2016/10/20/HowTo-Install-PostgreSQL-9-5-on-CentOS-6-x",source:"@site/blog/2016-10-20-HowTo-Install-PostgreSQL-9-5-on-CentOS-6-x.md",title:"HowTo Install PostgreSQL 9.5 on CentOS 6.x",description:"CentOS 6",date:"2016-10-20T07:25:37.000Z",formattedDate:"October 20, 2016",tags:[{label:"PostgreSQL",permalink:"/tags/postgre-sql"}],readingTime:.905,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Install PostgreSQL 9.5 on CentOS 6.x",tags:["PostgreSQL"],date:"2016-10-20T07:25:37.000Z"},unlisted:!1,prevItem:{title:"\u5fae\u535a\u968f\u7b14",permalink:"/2016/10/14/xie-de-wei-bo"},nextItem:{title:"SSH LINUX Security Settings",permalink:"/2016/10/29/SSH-LINUX-Security-Settings"}},i={authorsImageUrls:[]},c=[{value:"CentOS 6",id:"centos-6",level:2},{value:"1. Install PostgreSQL repository and the PostgreSQL server by running the following",id:"1-install-postgresql-repository-and-the-postgresql-server-by-running-the-following",level:3},{value:"2. Create the PostgreSQL database cluster",id:"2-create-the-postgresql-database-cluster",level:3},{value:"3. Enable automatic PostgreSQL server startup",id:"3-enable-automatic-postgresql-server-startup",level:3},{value:"4. Start the PostgreSQL server",id:"4-start-the-postgresql-server",level:3},{value:"CentOS 7",id:"centos-7",level:2},{value:"Install PostgreSQL repository and the PostgreSQL server by running the following",id:"install-postgresql-repository-and-the-postgresql-server-by-running-the-following",level:3},{value:"Create the PostgreSQL database cluster",id:"create-the-postgresql-database-cluster",level:3},{value:"Enable automatic PostgreSQL server startup",id:"enable-automatic-postgresql-server-startup",level:3},{value:"Start the PostgreSQL server",id:"start-the-postgresql-server",level:3},{value:"Configurations for CentOS",id:"configurations-for-centos",level:2},{value:"Change authentication to md5",id:"change-authentication-to-md5",level:3},{value:"Change METHOD to md5",id:"change-method-to-md5",level:3},{value:"3. Restart PostgreSQL",id:"3-restart-postgresql",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"centos-6",children:"CentOS 6"}),"\n",(0,r.jsx)(t.h3,{id:"1-install-postgresql-repository-and-the-postgresql-server-by-running-the-following",children:"1. Install PostgreSQL repository and the PostgreSQL server by running the following"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo yum install https://download.postgresql.org/pub/repos/yum/9.5/redhat/rhel-6-x86_64/pgdg-centos95-9.5-2.noarch.rpm\n\nsudo yum install postgresql95-serve\n"})}),"\n",(0,r.jsx)(t.h3,{id:"2-create-the-postgresql-database-cluster",children:"2. Create the PostgreSQL database cluster"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sduo service postgresql-9.5 initdb\n"})}),"\n",(0,r.jsx)(t.h3,{id:"3-enable-automatic-postgresql-server-startup",children:"3. Enable automatic PostgreSQL server startup"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo chkconfig postgresql-9.5 on\n"})}),"\n",(0,r.jsx)(t.h3,{id:"4-start-the-postgresql-server",children:"4. Start the PostgreSQL server"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo service postgresql-9.5 start\n"})}),"\n",(0,r.jsx)(t.h2,{id:"centos-7",children:"CentOS 7"}),"\n",(0,r.jsx)(t.h3,{id:"install-postgresql-repository-and-the-postgresql-server-by-running-the-following",children:"Install PostgreSQL repository and the PostgreSQL server by running the following"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo yum install https://download.postgresql.org/pub/repos/yum/9.5 /redhat/rhel-7-x86_64/pgdg-centos95-9.5-2.noarch.rpm\n\nsudo yum install postgresql95-serve\n"})}),"\n",(0,r.jsx)(t.h3,{id:"create-the-postgresql-database-cluster",children:"Create the PostgreSQL database cluster"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo /usr/pgsql-9.5/bin/postgresql95-setup initdb\n"})}),"\n",(0,r.jsx)(t.h3,{id:"enable-automatic-postgresql-server-startup",children:"Enable automatic PostgreSQL server startup"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo systemctl enable postgresql-9.5\n"})}),"\n",(0,r.jsx)(t.h3,{id:"start-the-postgresql-server",children:"Start the PostgreSQL server"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo systemctl start postgresql-9.5\n"})}),"\n",(0,r.jsx)(t.h2,{id:"configurations-for-centos",children:"Configurations for CentOS"}),"\n",(0,r.jsx)(t.p,{children:"When installing in CentOs env. you will also need to make the following configurations."}),"\n",(0,r.jsx)(t.h3,{id:"change-authentication-to-md5",children:"Change authentication to md5"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo vi /var/lib/pgsql/9.5/data/pg_hba.conf\n"})}),"\n",(0,r.jsx)(t.h3,{id:"change-method-to-md5",children:"Change METHOD to md5"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# IPv4 local connections:\nhost    all             all             127.0.0.1/32            md5\n\n# IPv6 local connections:\nhost    all             all             ::1/128                 md5\n"})}),"\n",(0,r.jsx)(t.h3,{id:"3-restart-postgresql",children:"3. Restart PostgreSQL"})]})}function g(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>l});var r=s(67294);const n={},a=r.createContext(n);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);