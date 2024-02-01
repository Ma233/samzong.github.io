"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[98223],{16626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=t(85893),r=t(11151);const o={title:"\u521b\u5efa\u548c\u4f7f\u7528 Azure Redis Cache",tags:["Azure"],date:new Date("2016-05-12T06:12:02.000Z")},s=void 0,c={permalink:"/2016/05/12/azure-4-chuang-jian-he-shi-yong-azure-redis-cache",source:"@site/blog/2016-05-12-azure-4-chuang-jian-he-shi-yong-azure-redis-cache.md",title:"\u521b\u5efa\u548c\u4f7f\u7528 Azure Redis Cache",description:"\u6211\u4eec\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\uff0c\u8fd0\u884c PowerShell\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u5b9e\u73b0\u521b\u5efa Standard \u7c7b\u578b\uff0c\u5927\u5c0f\u4e3a 13GB \u7684 Redis Cache",date:"2016-05-12T06:12:02.000Z",formattedDate:"May 12, 2016",tags:[{label:"Azure",permalink:"/tags/azure"}],readingTime:.61,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u521b\u5efa\u548c\u4f7f\u7528 Azure Redis Cache",tags:["Azure"],date:"2016-05-12T06:12:02.000Z"},unlisted:!1,prevItem:{title:"HowTo Install Fabric on CentOS 7.x",permalink:"/2016/05/05/HowTo-Install-Fabric-on-CentOS-7-x"},nextItem:{title:"OpenStak \u4ecb\u7ecd",permalink:"/2016/05/15/openstak-jie-shao"}},u={authorsImageUrls:[]},i=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u6211\u4eec\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\uff0c\u8fd0\u884c PowerShell\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u5b9e\u73b0\u521b\u5efa Standard \u7c7b\u578b\uff0c\u5927\u5c0f\u4e3a 13GB \u7684 Redis Cache"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"#\u5f39\u51fa\u754c\u9762\u8f93\u5165\u7528\u6237\u540d\u5bc6\u7801\nAdd-AzureAccount -Environment AzureChinaCloud\n\n#\u8bbe\u7f6e\u5f53\u524d\u8ba2\u9605\u540d\u79f0\nSelect-AzureSubscription '[SubscriptionName]' \u2013Current\n\nSwitch-AzureMode -name AzureResourceManager\n\n#\u5728\u4e2d\u56fd\u4e1c\u90e8\u6570\u636e\u4e2d\u5fc3\uff0c\u521b\u5efa\u65b0\u7684\u8d44\u6e90\u7ec4\nNew-AzureResourceGroup -name [YourResourceGroupName] -Location 'China East'\n\n#\u5728\u4e2d\u56fd\u4e1c\u90e8\u6570\u636e\u4e2d\u5fc3\uff0c\u7533\u8bf713GB\u7684Redis Cache\uff0c\u7c7b\u578b\u4e3aStandard\uff0c\u6709SLA\u4fdd\u8bc1\nNew-AzureRedisCache -ResourceGroupName [YourResourceGroupName] -Name [RedisCacheName] -Location 'China East' -sku 'Standard' -Size '13GB'\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var a=t(67294);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);