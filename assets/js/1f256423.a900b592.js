"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[92147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(n),y=o,d=s["".concat(i,".").concat(y)]||s[y]||p[y]||a;return n?r.createElement(d,c(c({ref:t},m),{},{components:n})):r.createElement(d,c({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},11200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"HowTo Automatic Updates CENTOS/RHEL Using YUM",tags:["CentOS"],date:new Date("2017-02-19T09:56:42.000Z")},c=void 0,l={permalink:"/2017/02/19/HowTo-Automatic-Updates-CENTOS-RHEL-Using-YUM",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2017-02-19-HowTo-Automatic-Updates-CENTOS-RHEL-Using-YUM.md",source:"@site/blog/2017-02-19-HowTo-Automatic-Updates-CENTOS-RHEL-Using-YUM.md",title:"HowTo Automatic Updates CENTOS/RHEL Using YUM",description:"\u5927\u5bb6\u82e5\u5de5\u4f5c\u9047\u5230\u9700\u8981\u7ba1\u7406\u7684 Linux \u96c6\u7fa4\u673a\u5668\u8f83\u591a\u65f6\uff0c\u540c\u65f6\u6211\u4eec\u77e5\u9053\u7cfb\u7edf\u7684\u5b89\u5168\u66f4\u65b0\u8865\u4e01\u7ef4\u62a4\u8fd9\u4e9b\u975e\u5e38\u91cd\u8981\uff0c\u65e0\u8bba\u4f60\u5728\u5b89\u88c5\u65f6\u4f18\u5316\u7ef4\u62a4\u505a\u7684\u518d\u597d\uff0c\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u5982\u679c\u4e0d\u53bb\u66f4\u65b0\u7684\u8bdd\uff0c\u7cfb\u7edf\u65e9\u665a\u90fd\u4f1a\u4e0d\u5b89\u5168\uff0c\u6240\u4ee5\u5b9a\u671f\u66f4\u65b0\u6211\u4eec\u7684\u7cfb\u7edf\u8865\u4e01\u662f\u4e00\u4e2a\u8fd0\u7ef4\u4eba\u5458\u7684\u57fa\u672c\u5de5\u4f5c\u5185\u5bb9",date:"2017-02-19T09:56:42.000Z",formattedDate:"2017\u5e742\u670819\u65e5",tags:[{label:"CentOS",permalink:"/tags/cent-os"}],readingTime:.9166666666666666,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Automatic Updates CENTOS/RHEL Using YUM",tags:["CentOS"],date:"2017-02-19T09:56:42.000Z"},prevItem:{title:"HowTo Upgrade Your Ghost Version",permalink:"/2017/02/20/HowTo-Upgrade-Your-Ghost-Version"},nextItem:{title:"MySQL \u7d22\u5f15\u521b\u5efa\u3001\u5220\u9664\u548c\u67e5\u770b",permalink:"/2017/02/09/mysql-8-suo-yin-chuang-jian-shan-chu-he-cha-kan"}},i={authorsImageUrls:[]},u=[{value:"Install yum-cron",id:"install-yum-cron",level:3},{value:"Configure \u201c/etc/sysconfig/yum-cron\u201d",id:"configure-etcsysconfigyum-cron",level:3},{value:"1. \u5bf9\u4e8e\u4e0d\u9700\u8981\u66f4\u65b0\u7684\u53ef\u4ee5\u5ffd\u7565\u6389",id:"1-\u5bf9\u4e8e\u4e0d\u9700\u8981\u66f4\u65b0\u7684\u53ef\u4ee5\u5ffd\u7565\u6389",level:5},{value:"2. \u8bbe\u7f6e\u7ba1\u7406\u5458\u90ae\u7bb1",id:"2-\u8bbe\u7f6e\u7ba1\u7406\u5458\u90ae\u7bb1",level:5},{value:"3. \u4e0d\u81ea\u52a8\u5b89\u88c5\uff0c\u4ec5\u68c0\u67e5\uff0c\u901a\u77e5\u7ba1\u7406\u90ae\u7bb1",id:"3-\u4e0d\u81ea\u52a8\u5b89\u88c5\u4ec5\u68c0\u67e5\u901a\u77e5\u7ba1\u7406\u90ae\u7bb1",level:5},{value:"4. \u4e0d\u81ea\u52a8\u5b89\u88c5\uff0c\u4ec5\u4e0b\u8f7d",id:"4-\u4e0d\u81ea\u52a8\u5b89\u88c5\u4ec5\u4e0b\u8f7d",level:5},{value:"Automatic Starting yum-cron",id:"automatic-starting-yum-cron",level:3}],m={toc:u},s="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5927\u5bb6\u82e5\u5de5\u4f5c\u9047\u5230\u9700\u8981\u7ba1\u7406\u7684 Linux \u96c6\u7fa4\u673a\u5668\u8f83\u591a\u65f6\uff0c\u540c\u65f6\u6211\u4eec\u77e5\u9053\u7cfb\u7edf\u7684\u5b89\u5168\u66f4\u65b0\u8865\u4e01\u7ef4\u62a4\u8fd9\u4e9b\u975e\u5e38\u91cd\u8981\uff0c\u65e0\u8bba\u4f60\u5728\u5b89\u88c5\u65f6\u4f18\u5316\u7ef4\u62a4\u505a\u7684\u518d\u597d\uff0c\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u5982\u679c\u4e0d\u53bb\u66f4\u65b0\u7684\u8bdd\uff0c\u7cfb\u7edf\u65e9\u665a\u90fd\u4f1a\u4e0d\u5b89\u5168\uff0c\u6240\u4ee5\u5b9a\u671f\u66f4\u65b0\u6211\u4eec\u7684\u7cfb\u7edf\u8865\u4e01\u662f\u4e00\u4e2a\u8fd0\u7ef4\u4eba\u5458\u7684\u57fa\u672c\u5de5\u4f5c\u5185\u5bb9"),(0,o.kt)("h3",{id:"install-yum-cron"},"Install yum-cron"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y yum-cron\n")),(0,o.kt)("p",null,"\u56e0\u4e3a\u6211\u7684\u670d\u52a1\u5668\u7cfb\u7edf\u591a\u4e3a CentOS 6\uff0c6 \u7684\u914d\u7f6e\u6587\u4ef6\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/yum-cron"),"\uff0c\u4f60\u53ef\u4ee5\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rpm -ql yum-cron\n/etc/cron.daily/0yum.cron\n/etc/rc.d/init.d/yum-cron\n/etc/sysconfig/yum-cron\n/etc/yum/yum-daily.yum\n/etc/yum/yum-weekly.yum\n/usr/share/doc/yum-cron-3.2.29\n/usr/share/doc/yum-cron-3.2.29/COPYING\n/usr/share/man/man8/yum-cron.8.gz\n")),(0,o.kt)("h3",{id:"configure-etcsysconfigyum-cron"},"Configure \u201c/etc/sysconfig/yum-cron\u201d"),(0,o.kt)("p",null,"yum-cron \u7684\u9ed8\u8ba4\u8bbe\u7f6e\u662f\u4f1a\u5728\u6bcf\u5929\u81ea\u52a8\u68c0\u67e5\u548c\u5b89\u88c5\u7cfb\u7edf\u66f4\u65b0\u5305\uff0c\u5728\u5b89\u88c5\u5b8c\u6210\u540e\u6709\u4e9b\u914d\u7f6e\u9700\u8981\u6ce8\u610f\u4e0b\uff1a"),(0,o.kt)("h5",{id:"1-\u5bf9\u4e8e\u4e0d\u9700\u8981\u66f4\u65b0\u7684\u53ef\u4ee5\u5ffd\u7565\u6389"},"1. \u5bf9\u4e8e\u4e0d\u9700\u8981\u66f4\u65b0\u7684\u53ef\u4ee5\u5ffd\u7565\u6389"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"YUM_PARAMETER=\"--exclude='kernel*' --exclude='php*'\"\n")),(0,o.kt)("h5",{id:"2-\u8bbe\u7f6e\u7ba1\u7406\u5458\u90ae\u7bb1"},"2. \u8bbe\u7f6e\u7ba1\u7406\u5458\u90ae\u7bb1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'MAILTO="luchuanjia@msn.com"\n')),(0,o.kt)("h5",{id:"3-\u4e0d\u81ea\u52a8\u5b89\u88c5\u4ec5\u68c0\u67e5\u901a\u77e5\u7ba1\u7406\u90ae\u7bb1"},"3. \u4e0d\u81ea\u52a8\u5b89\u88c5\uff0c\u4ec5\u68c0\u67e5\uff0c\u901a\u77e5\u7ba1\u7406\u90ae\u7bb1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CHECK_ONLY=yes\n")),(0,o.kt)("h5",{id:"4-\u4e0d\u81ea\u52a8\u5b89\u88c5\u4ec5\u4e0b\u8f7d"},"4. \u4e0d\u81ea\u52a8\u5b89\u88c5\uff0c\u4ec5\u4e0b\u8f7d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DOWNLOAD_ONLY=yes\n")),(0,o.kt)("h3",{id:"automatic-starting-yum-cron"},"Automatic Starting yum-cron"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"chkconfig yum-cron on\n")))}p.isMDXComponent=!0}}]);