"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[39612],{93040:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(17624),i=t(4552);const s={title:"HowTo Install piwik with nginx on centos 6.x",tags:["Tools","Piwik"],date:new Date("2016-04-27T16:00:44.000Z")},r=void 0,a={permalink:"/2016/04/27/HowTo-Install-piwik-with-nginx-on-centos-6-x",source:"@site/blog/2016-04-27-HowTo-Install-piwik-with-nginx-on-centos-6-x.md",title:"HowTo Install piwik with nginx on centos 6.x",description:"This is my nginx config",date:"2016-04-27T16:00:44.000Z",formattedDate:"April 27, 2016",tags:[{label:"Tools",permalink:"/tags/tools"},{label:"Piwik",permalink:"/tags/piwik"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Install piwik with nginx on centos 6.x",tags:["Tools","Piwik"],date:"2016-04-27T16:00:44.000Z"},unlisted:!1,prevItem:{title:"HowTo Add Piwik Tracking to Ghost",permalink:"/2016/04/27/HowTo-Add-Piwik-Tracking-to-Ghost"},nextItem:{title:"\u4f7f\u7528 SoureceTree \u7ba1\u7406\u4f60\u7684 git \u9879\u76ee",permalink:"/2016/04/20/shi-yong-sourecetree-guan-li-ni-de-git-xiang-mu"}},l={authorsImageUrls:[]},c=[{value:"This is my nginx config",id:"this-is-my-nginx-config",level:3}];function p(n){const e={code:"code",h3:"h3",pre:"pre",...(0,i.M)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h3,{id:"this-is-my-nginx-config",children:"This is my nginx config"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-conf",children:"server {\n listen blog.ultraera.org:80;\n server_name blog.ultraera.org;\n\n location / {\n  proxy_set_header X-Real-IP $remote_addr;\n  proxy_set_header Host $http_host;\n  proxy_pass   http://127.0.0.1:2368;\n }\n}\n\nserver {\n listen piwik.ultraera.org:80;\n server_name piwik.ultraera.org;\n\n location / {\n  proxy_set_header X-Real-IP $remote_addr;\n  proxy_set_header Host $http_host;\n  proxy_pass   http://127.0.0.1:2080;\n }\n}\n\n"})})]})}function g(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},4552:(n,e,t)=>{t.d(e,{I:()=>a,M:()=>r});var o=t(11504);const i={},s=o.createContext(i);function r(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);