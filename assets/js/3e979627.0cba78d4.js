"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[70596],{19484:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>h,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=s(17624),n=s(4552);const r={title:"HowTo Upgrade Your Ghost Version",tags:["Ghost"],date:new Date("2017-02-20T14:39:15.000Z")},h=void 0,i={permalink:"/2017/02/20/HowTo-Upgrade-Your-Ghost-Version",source:"@site/blog/2017-02-20-HowTo-Upgrade-Your-Ghost-Version.md",title:"HowTo Upgrade Your Ghost Version",description:"1. \u4e0b\u8f7d\u6700\u65b0\u7248\u7684 Ghost",date:"2017-02-20T14:39:15.000Z",formattedDate:"2017\u5e742\u670820\u65e5",tags:[{label:"Ghost",permalink:"/tags/ghost"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Upgrade Your Ghost Version",tags:["Ghost"],date:"2017-02-20T14:39:15.000Z"},unlisted:!1,prevItem:{title:"HowTo Install Redmine",permalink:"/2017/02/22/HowTo-Install-Redmine"},nextItem:{title:"HowTo Automatic Updates CENTOS/RHEL Using YUM",permalink:"/2017/02/19/HowTo-Automatic-Updates-CENTOS-RHEL-Using-YUM"}},l={authorsImageUrls:[]},c=[{value:"1. \u4e0b\u8f7d\u6700\u65b0\u7248\u7684 Ghost",id:"1-\u4e0b\u8f7d\u6700\u65b0\u7248\u7684-ghost",level:4},{value:"2. \u521b\u5efa\u4e34\u65f6\u76ee\u5f55\uff0c\u5e76\u89e3\u538b ghost-latest.zip \u5230\u6b64",id:"2-\u521b\u5efa\u4e34\u65f6\u76ee\u5f55\u5e76\u89e3\u538b-ghost-latestzip-\u5230\u6b64",level:4},{value:"3. \u8fdb\u5165\u5230\u539f ghost \u76ee\u5f55\uff0c\u5220\u9664 core",id:"3-\u8fdb\u5165\u5230\u539f-ghost-\u76ee\u5f55\u5220\u9664-core",level:4},{value:"4.\u8fdb\u5165\u5230\u65b0\u7248\u672c\u7684 ghost \u4e34\u65f6\u76ee\u5f55",id:"4\u8fdb\u5165\u5230\u65b0\u7248\u672c\u7684-ghost-\u4e34\u65f6\u76ee\u5f55",level:4},{value:"5. \u62f7\u8d1d\u6240\u9700\u6587\u4ef6\u5230 ghost \u5347\u7ea7\u76ee\u5f55",id:"5-\u62f7\u8d1d\u6240\u9700\u6587\u4ef6\u5230-ghost-\u5347\u7ea7\u76ee\u5f55",level:4},{value:"6. (\u53ef\u9009) \u5347\u7ea7 casper\uff0cghost \u9ed8\u8ba4\u4e3b\u9898",id:"6-\u53ef\u9009-\u5347\u7ea7-casperghost-\u9ed8\u8ba4\u4e3b\u9898",level:4},{value:"7. \u5207\u6362\u56de\u5230 ghost \u5b89\u88c5\u76ee\u5f55",id:"7-\u5207\u6362\u56de\u5230-ghost-\u5b89\u88c5\u76ee\u5f55",level:4},{value:"8. \u4fee\u6539\u6587\u4ef6\u76ee\u5f55\u6240\u6709\u8005\u548c\u6240\u5c5e\u7ec4\u4e3a ghost",id:"8-\u4fee\u6539\u6587\u4ef6\u76ee\u5f55\u6240\u6709\u8005\u548c\u6240\u5c5e\u7ec4\u4e3a-ghost",level:4},{value:"9. \u91cd\u65b0\u5b89\u88c5\u73af\u5883",id:"9-\u91cd\u65b0\u5b89\u88c5\u73af\u5883",level:4},{value:"10. \u91cd\u542f Ghost",id:"10-\u91cd\u542f-ghost",level:4}];function d(e){const t={code:"code",h4:"h4",pre:"pre",...(0,n.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h4,{id:"1-\u4e0b\u8f7d\u6700\u65b0\u7248\u7684-ghost",children:"1. \u4e0b\u8f7d\u6700\u65b0\u7248\u7684 Ghost"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"curl -LOk https://ghost.org/zip/ghost-latest.zip\n"})}),"\n",(0,o.jsx)(t.h4,{id:"2-\u521b\u5efa\u4e34\u65f6\u76ee\u5f55\u5e76\u89e3\u538b-ghost-latestzip-\u5230\u6b64",children:"2. \u521b\u5efa\u4e34\u65f6\u76ee\u5f55\uff0c\u5e76\u89e3\u538b ghost-latest.zip \u5230\u6b64"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"mkdir /usr/ghost-tmp\nunzip ghost-latest.zip -d /usr/ghost-tmp\n"})}),"\n",(0,o.jsx)(t.h4,{id:"3-\u8fdb\u5165\u5230\u539f-ghost-\u76ee\u5f55\u5220\u9664-core",children:"3. \u8fdb\u5165\u5230\u539f ghost \u76ee\u5f55\uff0c\u5220\u9664 core"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"cd  /usr/ghost\nrm -rf core\n"})}),"\n",(0,o.jsx)(t.h4,{id:"4\u8fdb\u5165\u5230\u65b0\u7248\u672c\u7684-ghost-\u4e34\u65f6\u76ee\u5f55",children:"4.\u8fdb\u5165\u5230\u65b0\u7248\u672c\u7684 ghost \u4e34\u65f6\u76ee\u5f55"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"cd /usr/ghost-tmp\n"})}),"\n",(0,o.jsx)(t.h4,{id:"5-\u62f7\u8d1d\u6240\u9700\u6587\u4ef6\u5230-ghost-\u5347\u7ea7\u76ee\u5f55",children:"5. \u62f7\u8d1d\u6240\u9700\u6587\u4ef6\u5230 ghost \u5347\u7ea7\u76ee\u5f55"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"cp -R core /usr/ghost\ncp index.js *.json /usr/ghost\n"})}),"\n",(0,o.jsx)(t.h4,{id:"6-\u53ef\u9009-\u5347\u7ea7-casperghost-\u9ed8\u8ba4\u4e3b\u9898",children:"6. (\u53ef\u9009) \u5347\u7ea7 casper\uff0cghost \u9ed8\u8ba4\u4e3b\u9898"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"cp -R content/themes/casper /usr/ghost/content/themes/\n"})}),"\n",(0,o.jsx)(t.h4,{id:"7-\u5207\u6362\u56de\u5230-ghost-\u5b89\u88c5\u76ee\u5f55",children:"7. \u5207\u6362\u56de\u5230 ghost \u5b89\u88c5\u76ee\u5f55"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"cd /usr/ghost\n"})}),"\n",(0,o.jsx)(t.h4,{id:"8-\u4fee\u6539\u6587\u4ef6\u76ee\u5f55\u6240\u6709\u8005\u548c\u6240\u5c5e\u7ec4\u4e3a-ghost",children:"8. \u4fee\u6539\u6587\u4ef6\u76ee\u5f55\u6240\u6709\u8005\u548c\u6240\u5c5e\u7ec4\u4e3a ghost"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"chown -R ghost:ghost ./*\n"})}),"\n",(0,o.jsx)(t.h4,{id:"9-\u91cd\u65b0\u5b89\u88c5\u73af\u5883",children:"9. \u91cd\u65b0\u5b89\u88c5\u73af\u5883"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"npm install --production\n"})}),"\n",(0,o.jsx)(t.h4,{id:"10-\u91cd\u542f-ghost",children:"10. \u91cd\u542f Ghost"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"pm2 restart ghost\n"})})]})}function a(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>i,M:()=>h});var o=s(11504);const n={},r=o.createContext(n);function h(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:h(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);