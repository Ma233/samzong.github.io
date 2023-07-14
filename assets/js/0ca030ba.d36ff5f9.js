"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[24670],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>h});var n=s(67294);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,n,o=function(e,t){if(null==e)return{};var s,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var s=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(s),f=o,h=m["".concat(i,".").concat(f)]||m[f]||p[f]||r;return s?n.createElement(h,a(a({ref:t},c),{},{components:s})):n.createElement(h,a({ref:t},c))}));function h(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=s.length,a=new Array(r);a[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=s[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,s)}f.displayName="MDXCreateElement"},6780:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=s(87462),o=(s(67294),s(3905));const r={title:"HowTo Use Fuse-sshfs to Mount Remote Filesystems",tags:["SSH"],date:new Date("2016-07-05T01:58:03.000Z")},a=void 0,l={permalink:"/2016/07/05/HowTo-Use-Fuse-sshfs-to-Mount-Remote-Filesystems",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2016-07-05-HowTo-Use-Fuse-sshfs-to-Mount-Remote-Filesystems.md",source:"@site/blog/2016-07-05-HowTo-Use-Fuse-sshfs-to-Mount-Remote-Filesystems.md",title:"HowTo Use Fuse-sshfs to Mount Remote Filesystems",description:"\u4f20\u7edf\u6211\u4eec\u670d\u52a1\u5668\u4e4b\u95f4\u6587\u4ef6\u5171\u4eab\u7684\u65b9\u5f0f\u6709\u91c7\u7528 NFS\u3001Samba \u7b49\u7b49\uff0c\u4f46\u662f\u5728\u6211\u770b\u6765\u914d\u7f6e\u90fd\u6709\u4e00\u5b9a\u7684\u590d\u6742\u6027\uff0c\u5f53\u7136\u590d\u6742\u4e5f\u6709\u5b83\u4eec\u7684\u4f18\u52bf\uff0c\u8fd9\u91cc\u63a8\u8350\u4e00\u4e2a\u4f9d\u8d56\u4e8e SSH \u7684\u6587\u4ef6\u5171\u4eab\u5de5\u5177\uff0cFuse-sshfs\u3002",date:"2016-07-05T01:58:03.000Z",formattedDate:"2016\u5e747\u67085\u65e5",tags:[{label:"SSH",permalink:"/tags/ssh"}],readingTime:2.08,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Use Fuse-sshfs to Mount Remote Filesystems",tags:["SSH"],date:"2016-07-05T01:58:03.000Z"},prevItem:{title:"HowTo Use Remi Install Redis",permalink:"/2016/07/07/HowTo-Use-Remi-Install-Redis"},nextItem:{title:"MySQL \u5e38\u7528\u914d\u7f6e\u4f18\u5316",permalink:"/2016/06/16/mysql-1-chang-yong-you-hua"}},i={authorsImageUrls:[]},u=[{value:"Install fuse-sshfs",id:"install-fuse-sshfs",level:2},{value:"\u6302\u8f7d\u8fdc\u7a0b ssh \u6587\u4ef6\u7cfb\u7edf",id:"\u6302\u8f7d\u8fdc\u7a0b-ssh-\u6587\u4ef6\u7cfb\u7edf",level:2},{value:"\u5378\u8f7d\u8fdc\u7a0b ssh \u6587\u4ef6\u7cfb\u7edf",id:"\u5378\u8f7d\u8fdc\u7a0b-ssh-\u6587\u4ef6\u7cfb\u7edf",level:2},{value:"\u5e38\u7528\u53c2\u6570",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\xa0\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u9644 1",id:"\u9644-1",level:2}],c={toc:u},m="wrapper";function p(e){let{components:t,...s}=e;return(0,o.kt)(m,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f20\u7edf\u6211\u4eec\u670d\u52a1\u5668\u4e4b\u95f4\u6587\u4ef6\u5171\u4eab\u7684\u65b9\u5f0f\u6709\u91c7\u7528 NFS\u3001Samba \u7b49\u7b49\uff0c\u4f46\u662f\u5728\u6211\u770b\u6765\u914d\u7f6e\u90fd\u6709\u4e00\u5b9a\u7684\u590d\u6742\u6027\uff0c\u5f53\u7136\u590d\u6742\u4e5f\u6709\u5b83\u4eec\u7684\u4f18\u52bf\uff0c\u8fd9\u91cc\u63a8\u8350\u4e00\u4e2a\u4f9d\u8d56\u4e8e SSH \u7684\u6587\u4ef6\u5171\u4eab\u5de5\u5177\uff0cFuse-sshfs\u3002\nSSH \u662f\u4e00\u4e2a\u5f3a\u5927\u4e14\u5b89\u5168\u7684\u5de5\u5177\uff0c\u6211\u4eec\u9664\u4e86\u53ef\u4ee5\u7528\u5b83\u6765\u8fdc\u7a0b\u7ba1\u7406\u4e3b\u673a\u5916\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5b83\u5efa\u7acb SSH tunnel \u4f5c Proxy \u7528\uff0c\u8fdc\u7a0b\u4f20\u8f93\u6587\u4ef6\u7b49\u7b49\u3002\u800c\u8fd9\u91cc\u6211\u60f3\u8981\u4ecb\u7ecd\u53e6\u5916\u4e00\u4e2a\u529f\u80fd\uff0c\u90a3\u5c31\u662f\u7ed3\u5408 sshfs \u8fd9\u4e2a\u5de5\u5177\u53ef\u4ee5\u628a\u8fdc\u7a0b\u4e3b\u673a\u7684\u6587\u4ef6\u7cfb\u7edf\u6620\u5c04\u5230\u672c\u5730\u4e3b\u673a\u4e0a\uff0c\u900f\u8fc7 SSH \u628a\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d\u5230\u672c\u673a\u4e0a\uff0c\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u4e0d\u5fc5\u4f7f\u7528 scp \u5de5\u5177\u5c31\u53ef\u4ee5\u505a\u5230\u76f4\u63a5\u590d\u5236\u53ca\u5220\u9664\u8fdc\u7a0b\u4e3b\u673a\u7684\u6587\u4ef6\u4e86\uff0c\u5c31\u50cf\u64cd\u4f5c\u672c\u5730\u78c1\u76d8\u4e00\u6837\u65b9\u4fbf\u3002\nsshfs \u662f\u57fa\u4e8e FUSE \u6784\u5efa\u7684 SSH \u6587\u4ef6\u7cfb\u7edf\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u901a\u8fc7\u5b83\u8fdc\u7a0b\u4e3b\u673a\u7684\u914d\u7f6e\u65e0\u9700\u4f5c\u4efb\u4f55\u6539\u53d8\uff0c\u5c31\u53ef\u4ee5\u900f\u8fc7 SSH \u534f\u8bae\u6765\u6302\u8f7d\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u4e86\uff0c\u975e\u5e38\u65b9\u4fbf\u53ca\u5b89\u5168\u3002"),(0,o.kt)("h2",{id:"install-fuse-sshfs"},"Install fuse-sshfs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[cent@localhost ~]$ sudo yum install -y epel-relese\n[cent@localhost ~]$ sudo yum --enablerepo=epel install -y fuse-sshfs\n")),(0,o.kt)("h2",{id:"\u6302\u8f7d\u8fdc\u7a0b-ssh-\u6587\u4ef6\u7cfb\u7edf"},"\u6302\u8f7d\u8fdc\u7a0b ssh \u6587\u4ef6\u7cfb\u7edf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[cent@localhost ~]$ mkdir ./mnt\n[cent@localhost ~]$ sshfs root@192.168.16.230:/home/ ./mnt\nroot@192.168.16.230's password:\n[cent@localhost ~]$ mount\nroot@192.168.16.230:/home/ on /home/cent/mnt type fuse.sshfs (rw,nosuid,nodev,user=cent)\n")),(0,o.kt)("h2",{id:"\u5378\u8f7d\u8fdc\u7a0b-ssh-\u6587\u4ef6\u7cfb\u7edf"},"\u5378\u8f7d\u8fdc\u7a0b ssh \u6587\u4ef6\u7cfb\u7edf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[cent@localhost ~]$ fusermount -u ./mnt\n")),(0,o.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"-C \u538b\u7f29\uff0c\u6216\u8005-o compression=yes\n-o reconnect \u81ea\u52a8\u91cd\u8fde\n-o transform_symlinks \u8868\u793a\u8f6c\u6362\u7edd\u5bf9\u94fe\u63a5\u7b26\u53f7\u4e3a\u76f8\u5bf9\u94fe\u63a5\u7b26\u53f7\n-o follow_symlinks \u6cbf\u7528\u670d\u52a1\u5668\u4e0a\u7684\u94fe\u63a5\u7b26\u53f7\n-o cache=yes\n-o allow_other \u8fd9\u4e2a\u53c2\u6570\u6700\u91cd\u8981\uff0c\u5fc5\u987b\u5199\uff0c\u5426\u5219\u4efb\u4f55\u6587\u4ef6\u90fd\u662fPermission Deny\n")),(0,o.kt)("h2",{id:"\u7f3a\u70b9"},"\xa0\u7f3a\u70b9"),(0,o.kt)("p",null,"\u5f53\u7136 sshfs \u4e5f\u4e0d\u5c3d\u662f\u4f18\u70b9\uff0c\u4f8b\u5982\u8fdc\u7a0b\u4e3b\u673a\u5931\u53bb\u54cd\u5e94\u540e\u672c\u5730\u6302\u8f7d\u70b9\u5361\u6b7b\u5e76\u5f71\u54cd\u672c\u5730\u7cfb\u7edf\u4f7f\u7528\uff0c\u9700\u8981\u624b\u5de5\u627e\u51fa sshfs \u8fdb\u7a0b\u5e76\u6740\u6b7b\uff0c\u56e0\u7f51\u901f\u95ee\u9898\u9020\u6210\u64cd\u4f5c\u54cd\u5e94\u7f13\u6162\u7b49\u7b49\uff0c\u4e0d\u8fc7\u4e00\u822c\u5728\u7a33\u5b9a\u5feb\u901f\u7684\u7f51\u7edc\u4e2d\u4e0d\u592a\u4f1a\u9047\u4e0a\uff0c\u5bf9\u6bd4\u5176\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u8fd8\u662f\u53ef\u4ee5\u63a5\u53d7\u7684\uff0c\u6b63\u6240\u8c13\u6687\u4e0d\u63a9\u745c\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6240\u4ee5 sshfs \u9002\u5408\u5185\u90e8\u7f51\u7edc\u6bd4\u8f83\u7a33\u5b9a\u7684\u5730\u65b9"),(0,o.kt)("li",{parentName:"ol"},"\u914d\u5408 ssh \u514d\u5bc6\u767b\u5f55\u4f7f\u7528\u4f1a\u66f4\u597d\u54e6"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u770b\u5230\u7684\u662f sshfs \u9ed8\u8ba4\u6302\u8f7d\u662f rw \u7684\u6743\u9650\uff0c\u4f46\u662f\u901a\u8fc7 sshfs --help \u53ef\u4ee5\u770b\u5230\u6709\u975e\u5e38\u8be6\u5c3d\u7684\u53c2\u6570\u914d\u7f6e\u53ef\u4ee5\u9009\u62e9\uff0c\u5927\u5bb6\u53ef\u4ee5\u4ed4\u7ec6\u7814\u7a76\u4e0b\u3002")),(0,o.kt)("h2",{id:"\u9644-1"},"\u9644 1"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://igikorn.com/sshfs-windows-8/"},"Link")," \u5728 windows \u4e0b\u53ef\u4ee5\u4f7f\u7528 sshfs."))}p.isMDXComponent=!0}}]);