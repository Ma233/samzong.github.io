"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[66372],{76548:(s,n,e)=>{e.r(n),e.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var t=e(17624),o=e(4552);const l={title:"HowTo Mount OSS Bucket On ECS",tags:["Aliyun","Tools"],date:new Date("2016-12-20T06:17:08.000Z")},i=void 0,c={permalink:"/2016/12/20/HowTo-Mount-OSS-Bucket-On-ECS",source:"@site/blog/2016-12-20-HowTo-Mount-OSS-Bucket-On-ECS.md",title:"HowTo Mount OSS Bucket On ECS",description:"From \u963f\u91cc\u4e91\u5b98\u65b9 Github",date:"2016-12-20T06:17:08.000Z",formattedDate:"2016\u5e7412\u670820\u65e5",tags:[{label:"Aliyun",permalink:"/tags/aliyun"},{label:"Tools",permalink:"/tags/tools"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Mount OSS Bucket On ECS",tags:["Aliyun","Tools"],date:"2016-12-20T06:17:08.000Z"},unlisted:!1,prevItem:{title:"\u6211\u7684 2017",permalink:"/2017/01/01/wo-de-2017"},nextItem:{title:"\u4e0a\u6d77\u5929\u51b7\u4e86",permalink:"/2016/12/17/shang-hai-tian-leng-le"}},a={authorsImageUrls:[]},r=[{value:"1.Download &amp; Install",id:"1download--install",level:2},{value:"2. OSS &amp; Bucket",id:"2-oss--bucket",level:2},{value:"3. Mount &amp; Uasge",id:"3-mount--uasge",level:2},{value:"4. Debug &amp; FAQ",id:"4-debug--faq",level:2},{value:"5. About",id:"5-about",level:2}];function u(s){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["From ",(0,t.jsx)(n.a,{href:"https://github.com/aliyun/ossfs",children:"\u963f\u91cc\u4e91\u5b98\u65b9 Github"}),"\nDemo: CentOS 6.8 on ECS"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"ossfs \u662f\u901a\u8fc7\u78c1\u76d8\u6302\u8f7d\u7684\u5f62\u5f0f\uff0c\u5c06 oss \u5b58\u50a8\u6302\u8f7d\u5230 linux\u3001\u7c7b unix \u7b49\u64cd\u4f5c\u7cfb\u7edf\uff0c\u800c\u4e14\u4e0d\u4ec5\u4ec5\u53ef\u4ee5\u6302\u8f7d\u963f\u91cc\u4e91\u5185\u7684 ECS \u4e0a\uff0c\u7406\u8bba\u4e0a\u6240\u6709\u7f51\u7edc\u80fd\u5230\u8fbe oss \u7684\u90fd\u53ef\u4ee5\u6302\u8f7d\uff0c\u4f46\u8fd8\u662f\u8981\u4ee5\u5b9e\u9645\u95ee\u9898\u4e3a\u51c6\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"1download--install",children:"1.Download & Install"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/aliyun/ossfs/releases",children:"\u5b98\u65b9\u7248\u672c\u53d1\u5e03\u9875\u9762"}),"\uff0c\u8bf7\u6839\u636e\u4f60\u7684\u7cfb\u7edf\u7c7b\u578b\u8fdb\u884c\u9009\u62e9\uff0c\u6211\u8fd9\u6f14\u793a\u7684\u73af\u5883\u662f CentOS 6.8\uff1bossfs \u76ee\u524d\u6700\u65b0\u7684\u7248\u672c\u662f v1.79.9\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u5f53\u65f6\u7248\u672c\u8fdb\u884c\u9009\u62e9\uff0c\u5efa\u8bae\u9009\u62e9\u6700\u65b0\u7248\u672c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u8bf7\u5148\u5c06\u5305\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e0a\n sudo yum localinstall ossfs_1.79.9_centos6.5_x86_64.rpm\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f\u4f7f\u7528 localinstall\uff0c\u56e0\u4e3a\u5728\u5b89\u88c5\u8fc7\u7a0b\uff0cyum \u53ef\u4ee5\u5f88\u597d\u7684\u89e3\u51b3\u4f9d\u8d56\u5173\u7cfb\uff0c\u4f1a\u8282\u7701\u6211\u4eec\u5f88\u591a\u65f6\u95f4"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"2-oss--bucket",children:"2. OSS & Bucket"}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981\u83b7\u53d6\u4ee5\u4e0b\u4fe1\u606f\uff0c\u5728\u540e\u9762\u6211\u4eec\u90fd\u4f1a\u7528\u5230\u7684\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Bucket \u540d\u79f0\n",(0,t.jsx)(n.img,{src:"https://img.samzong.me/202307191530335.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Access Key ID"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Access Key Secret"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://img.samzong.me/202307191530336.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image"}),"\n",(0,t.jsx)(n.img,{src:"https://img.samzong.me/202307191530337.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Location\uff0c\u8fd9\u9700\u8981\u6ce8\u610f\u70b9\uff0c\u4e0d\u8981\u52a0\u4e0a Bucket \u7684\u540d\u5b57\uff0c\u533a\u57df\u5bf9\u5e94\u8868\u5982\u4e0b\uff0c\u6ce8\u610f\u4f60\u7684 Bucket \u6240\u5728\u533a\u57df\uff1a"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u8bbe\u7f6ebucket/access key/id\u7684\u4fe1\u606f\uff0c\u5c06\u5176\u5b58\u653e\u5728/etc/passwd-ossfs \u6587\u4ef6\u4e2d\n# \u6ce8\u610f\u8fd9\u4e2a\u6587\u4ef6\u7684\u6743\u9650\u5fc5\u987b\u6b63\u786e\u8bbe\u7f6e\uff0c\u5efa\u8bae\u8bbe\u4e3a 640\n\nsudo echo my-bucket:my-access-key-id:my-access-key-secret > /etc/passwd-ossfs\nsudo chmod 640 /etc/passwd-ossfs\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"3-mount--uasge",children:"3. Mount & Uasge"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06 oss bucket mount \u5230\u6307\u5b9a\u76ee\u5f55\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u6211\u78b0\u5230\u5b89\u88c5\u540e\u627e\u4e0d\u5230 ossfs \u547d\u4ee4\uff0c\u67e5\u770b\u4e0b\u56e0\u4e3a ossfs \u6ca1\u6709 x \u6743\u9650\uff0c\u76ee\u5f55\u8def\u5f84\u4e3a/usr/local/bin\uff0c\u5982\u679c\u60a8\u4e5f\u78b0\u5230\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u589e\u52a0 x \u6743\u9650\u540e\u518d\u6d4b\u8bd5\nsudo ossfs my-bucket /mnt/ossdir -ourl=http://oss-location.aliyuncs.com\n\n# \u5982\u679c\u4f7f\u7528 ossfs \u7684\u673a\u5668\u662f\u963f\u91cc\u4e91 ECS\uff0c\u53ef\u4ee5\u4f7f\u7528\u5185\u7f51\u57df\u540d\u6765\u907f\u514d\u6d41\u91cf\u6536\u8d39\u548c \u63d0\u9ad8\u901f\u5ea6\n\nsudo ossfs my-bucket /tmp/ossfs -ourl=[http://oss-location-internal.aliyuncs.com](http://oss-location-internal.aliyuncs.com)\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u78c1\u76d8\u7a7a\u95f4\u8fbe\u5230\u4e0a\u767e T\uff1a\n",(0,t.jsx)(n.img,{src:"https://img.samzong.me/202307191530338.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image"})]}),"\n",(0,t.jsx)(n.p,{children:"umount\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u6ce8\u610f\u7528\u6237\u8eab\u4efd\n\numount /tmp/ossfs # root user\nsudo fusermount -u /tmp/ossfs # non-root user\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"4-debug--faq",children:"4. Debug & FAQ"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u9047\u5230\u9519\u8bef\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u8bd5\u7740\u6253\u5f00 Debug \u65e5\u5fd7\u4fe1\u606f\uff0c\u7136\u540e\u5206\u6790\u95ee\u9898\u539f\u56e0\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u4f7f\u7528 -o dbglevel=debug -f -d \u53c2\u6570\u6253\u5370\u65e5\u5fd7\u4fe1\u606f\n\nsudo ossfs my-bucket /tmp/ossfs -ourl=[http://oss-location-internal.aliyuncs.com](http://oss-location-internal.aliyuncs.com) -o dbglevel=debug -f -d > /mnt/ossfs.log 2>&1\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u66f4\u591a\u7684\u95ee\u9898\uff0c\u8bf7\u79fb\u6b65\u67e5\u770b",(0,t.jsx)(n.a,{href:"https://github.com/aliyun/ossfs/wiki/FAQ",children:"\u5b98\u65b9\u7684 FAQ \u6587\u6863"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"5-about",children:"5. About"}),"\n",(0,t.jsx)(n.p,{children:"ossfs \u63d0\u4f9b\u7684\u529f\u80fd\u548c\u6027\u80fd\u548c\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u76f8\u6bd4\uff0c\u5177\u6709\u4e00\u4e9b\u5c40\u9650\u6027\u3002\u5177\u4f53\u5305\u62ec\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u968f\u673a\u6216\u8005\u8ffd\u52a0\u5199\u6587\u4ef6\u4f1a\u5bfc\u81f4\u6574\u4e2a\u6587\u4ef6\u7684\u91cd\u5199\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5143\u6570\u636e\u64cd\u4f5c\uff0c\u4f8b\u5982 list directory\uff0c\u6027\u80fd\u8f83\u5dee\uff0c\u56e0\u4e3a\u9700\u8981\u8fdc\u7a0b\u8bbf\u95ee oss \u670d\u52a1\u5668\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u6587\u4ef6/\u6587\u4ef6\u5939\u7684rename\u64cd\u4f5c\u4e0d\u662f\u539f\u5b50\u7684\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u591a\u4e2a\u5ba2\u6237\u7aef\u6302\u8f7d\u540c\u4e00\u4e2a oss bucket \u65f6\uff0c\u4f9d\u8d56\u7528\u6237\u81ea\u884c\u534f\u8c03\u5404\u4e2a\u5ba2\u6237\u7aef\u7684\u884c\u4e3a\u3002\u4f8b\u5982\u907f\u514d\u591a\u4e2a\u5ba2\u6237\u7aef\u5199\u540c\u4e00\u4e2a\u6587\u4ef6\u7b49\u7b49\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4e0d\u652f\u6301 hard link\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4e0d\u9002\u5408\u7528\u5728\u9ad8\u5e76\u53d1\u8bfb/\u5199\u7684\u573a\u666f\uff0c\u8fd9\u6837\u4f1a\u8ba9\u7cfb\u7edf\u7684load\u5347\u9ad8"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u53e6\u5916\uff0cossfs \u7684\u7a33\u5b9a\u6027\u5f88\u5927\u4e00\u90e8\u5206\u4f9d\u8d56\u4e8e\u7f51\u7edc\u73af\u5883\uff0c\u5efa\u8bae\u7684\u4f7f\u7528\u573a\u666f\u66f4\u591a\u662f\u4f5c\u4e3a\u4e34\u65f6\u6570\u636e\u8fc1\u79fb\u6216\u5b9a\u671f\u5907\u4efd\uff0c\u867d\u7136 ossfs \u6302\u8f7d\u5230\u7cfb\u7edf\u4e2d\u4f1a\u6709\u7740\u51e0\u767e TB \u7684\u7a7a\u95f4\uff0c\u4f46\u662f\u7a33\u5b9a\u6027\u5e76\u4e0d\u9ad8\u3002"}),"\n"]})]})}function d(s={}){const{wrapper:n}={...(0,o.M)(),...s.components};return n?(0,t.jsx)(n,{...s,children:(0,t.jsx)(u,{...s})}):u(s)}},4552:(s,n,e)=>{e.d(n,{I:()=>c,M:()=>i});var t=e(11504);const o={},l=t.createContext(o);function i(s){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof s?s(n):{...n,...s}}),[n,s])}function c(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(o):s.components||o:i(s.components),t.createElement(l.Provider,{value:n},s.children)}}}]);