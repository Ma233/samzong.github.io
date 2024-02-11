"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[95296],{96304:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(17624),o=s(4552);const r={title:"HowTo Reset Azure VM Linux Password",tags:["CentOS"],date:new Date("2016-07-10T11:21:47.000Z")},i=void 0,a={permalink:"/2016/07/10/HowTo-Reset-Azure-VM-Linux-Password",source:"@site/blog/2016-07-10-HowTo-Reset-Azure-VM-Linux-Password.md",title:"HowTo Reset Azure VM Linux Password",description:"Setup1: \u8fd9\u79cd\u65b9\u6cd5\u4ec5\u9002\u7528\u4e8e\u5df2\u5b58\u5728\u7684\u7528\u6237\uff0c\u4e5f\u5c31\u662f\u8bf4$Username \u662f\u4e4b\u524d\u521b\u5efa\u8fc7\u7684\u7528\u6237\uff0c\u5426\u5219\u4e0d\u9002\u7528",date:"2016-07-10T11:21:47.000Z",formattedDate:"July 10, 2016",tags:[{label:"CentOS",permalink:"/tags/cent-os"}],readingTime:1.265,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Reset Azure VM Linux Password",tags:["CentOS"],date:"2016-07-10T11:21:47.000Z"},unlisted:!1,prevItem:{title:"HowTo Install Docker on CentOS 6.x",permalink:"/2016/07/07/HowTo-Install-Docker-on-CentOS-6-x"},nextItem:{title:"HowTo Play Pokemon GO in China",permalink:"/2016/07/24/HowTo-Play-Pokemon-GO-in-China"}},l={authorsImageUrls:[]},c=[{value:"1. \u6307\u5b9a\u865a\u62df\u673a",id:"1-\u6307\u5b9a\u865a\u62df\u673a",level:3},{value:"2. \u8f93\u5165\u60a8\u5f53\u524d\u7684\u7528\u6237\u540d\u548c\u65b0\u5bc6\u7801",id:"2-\u8f93\u5165\u60a8\u5f53\u524d\u7684\u7528\u6237\u540d\u548c\u65b0\u5bc6\u7801",level:3},{value:"\u5f00\u59cb\u6267\u884c",id:"\u5f00\u59cb\u6267\u884c",level:3},{value:"\u6307\u5b9a\u865a\u62df\u673a",id:"\u6307\u5b9a\u865a\u62df\u673a",level:3},{value:"2. \u5f00\u59cb\u6267\u884c",id:"2-\u5f00\u59cb\u6267\u884c",level:3}];function u(e){const n={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Setup1: \u8fd9\u79cd\u65b9\u6cd5\u4ec5\u9002\u7528\u4e8e\u5df2\u5b58\u5728\u7684\u7528\u6237\uff0c\u4e5f\u5c31\u662f\u8bf4$Username \u662f\u4e4b\u524d\u521b\u5efa\u8fc7\u7684\u7528\u6237\uff0c\u5426\u5219\u4e0d\u9002\u7528"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"1-\u6307\u5b9a\u865a\u62df\u673a",children:"1. \u6307\u5b9a\u865a\u62df\u673a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:"$vm = Get-AzureVM -ServiceName '\u4e91\u670d\u52a1\u540d\u79f0' -Name '\u865a\u62df\u673a\u540d\u79f0'\n$vm.GetInstance().ProvisionGuestAgent = $true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-\u8f93\u5165\u60a8\u5f53\u524d\u7684\u7528\u6237\u540d\u548c\u65b0\u5bc6\u7801",children:"2. \u8f93\u5165\u60a8\u5f53\u524d\u7684\u7528\u6237\u540d\u548c\u65b0\u5bc6\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:'$UserName = "\u6307\u5b9a\u7528\u6237\u540d"\n$Password = "\u6307\u5b9a\u5bc6\u7801"\n\n$PrivateConfig = \'{"username":"\'+ $UserName + \'", "password":"\' +  $Password + \'"}\'\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u5f00\u59cb\u6267\u884c",children:"\u5f00\u59cb\u6267\u884c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:"$ExtensionName = 'VMAccessForLinux'\n$Publisher = 'Microsoft.OSTCExtensions'\n$Version =  '1.0'\n\nSet-AzureVMExtension -ExtensionName $ExtensionName -VM  $vm -Publisher $Publisher -Version $Version -PrivateConfiguration $PrivateConfig | Update-AzureVM\n\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Setup2: \u5982\u679c\u662f\u7531\u4e8e\u9519\u8bef\u4fee\u6539\u4e86 SSH \u7684\u914d\u7f6e\u6587\u4ef6\u5bfc\u81f4\u65e0\u6cd5\u767b\u5f55\uff0c\u4f8b\u5982\u5728\u767b\u5f55\u65f6\u62a5\u9519\uff1aThis service allows sftp connections only.Connection to vm closed.\u8fd9\u662f\u56e0\u4e3a\u9519\u8bef\u914d\u7f6e\u4e86 sftp \u5bfc\u81f4\u7684\uff0c\u90a3\u78b0\u5230\u8fd9\u79cd\u95ee\u9898\u9700\u8981\u505a\u7684\u662f\u91cd\u7f6e ssh \u670d\u52a1\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u6307\u5b9a\u865a\u62df\u673a",children:"\u6307\u5b9a\u865a\u62df\u673a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:"$vm = Get-AzureVM -ServiceName 'MyServiceName' -Name 'MyVMName'\n$PrivateConfig = '{\"reset_ssh\":\"True\"}''\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-\u5f00\u59cb\u6267\u884c",children:"2. \u5f00\u59cb\u6267\u884c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:"$ExtensionName = 'VMAccessForLinux'\n$Publisher = 'Microsoft.OSTCExtensions'\n$Version =  '1.0'\n\nSet-AzureVMExtension -ExtensionName $ExtensionName -VM  $vm -Publisher $Publisher -Version $Version -PrivateConfiguration $PrivateConfig | Update-AzureVM\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>i});var t=s(11504);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);