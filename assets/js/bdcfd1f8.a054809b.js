"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[86097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),i=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||h[m]||a;return n?o.createElement(g,s(s({ref:t},c),{},{components:n})):o.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=n(87462),r=(n(67294),n(3905));const a={title:"\u5728 Linux \u7ec8\u7aef\u4f7f\u7528 SSR \u670d\u52a1\u5b9e\u73b0\u79d1\u5b66\u4e0a\u7f51",tags:["VPN"]},s=void 0,l={permalink:"/2017/03/23/zai-linux-zhong-duan-shi-yong-ssr-fu-wu-shi-xian-ke-xue-shang-wang",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2017-03-23-zai-linux-zhong-duan-shi-yong-ssr-fu-wu-shi-xian-ke-xue-shang-wang.md",source:"@site/blog/2017-03-23-zai-linux-zhong-duan-shi-yong-ssr-fu-wu-shi-xian-ke-xue-shang-wang.md",title:"\u5728 Linux \u7ec8\u7aef\u4f7f\u7528 SSR \u670d\u52a1\u5b9e\u73b0\u79d1\u5b66\u4e0a\u7f51",description:"\u6628\u5929\u5728\u7fa4\u5185\u770b\u5230\u6709\u670b\u53cb\u5728\u8be2\u95ee\u5982\u4f55\u5728 Linux \u7ec8\u7aef\u5185\u4f7f\u7528 SSR \u6765\u5b9e\u73b0\u79d1\u5b66\u4e0a\u7f51\uff0c\u6240\u4ee5\u62bd\u7a7a\u7814\u7a76\u4e86\u4e0b\u5728 Linux \u4e2d\u5982\u4f55\u4f7f\u7528\uff0c\u672c\u6587\u53c2\u8003\u4e86Otokaze \u548c Django \u4e24\u4f4d\u7684\u535a\u5ba2\uff0c\u6587\u7ae0\u94fe\u63a5\u5728\u535a\u6587\u6700\u540e\uff1bSSR \u670d\u52a1\u63d0\u4f9b\u5546\u4f9d\u7136\u91c7\u7528\u4e86ssGlobal\uff0c\u5728 Google \u7684\u8fc7\u7a0b\u4e2d\uff0c\u627e\u4e86\u4e0d\u5c11\u89e3\u51b3\u65b9\u6848\uff0c\u8fd9\u91cc\u4ec5\u505a\u4e00\u79cd\u7b80\u5355\u6574\u7406\uff0c\u5b9e\u9a8c\u64cd\u4f5c\u7cfb\u7edf\u6709 CentOS 7.4 & Ubuntu 16.04.3\u3002",date:"2017-03-23T00:00:00.000Z",formattedDate:"2017\u5e743\u670823\u65e5",tags:[{label:"VPN",permalink:"/tags/vpn"}],readingTime:3.6533333333333333,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u5728 Linux \u7ec8\u7aef\u4f7f\u7528 SSR \u670d\u52a1\u5b9e\u73b0\u79d1\u5b66\u4e0a\u7f51",tags:["VPN"]},prevItem:{title:"HowTo set Tomcat 7 automatic startup with CentOS 7",permalink:"/2017/04/05/HowTo-set-Tomcat-7-automatic-startup-with-CentOS-7"},nextItem:{title:"HowTo install Zoomdata",permalink:"/2017/03/06/HowTo-install-Zoomdata"}},p={authorsImageUrls:[]},i=[{value:"ssr \u4ee3\u7406\u670d\u52a1",id:"ssr-\u4ee3\u7406\u670d\u52a1",level:2},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"\u5b89\u88c5\u914d\u7f6e",id:"\u5b89\u88c5\u914d\u7f6e",level:3},{value:"\u542f\u52a8/\u5173\u95ed",id:"\u542f\u52a8\u5173\u95ed",level:3},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:3},{value:"Privoxy \u914d\u7f6e",id:"privoxy-\u914d\u7f6e",level:2},{value:"CentOS 7.4",id:"centos-74",level:3},{value:"Ubuntu 16.04",id:"ubuntu-1604",level:3},{value:"\u5168\u5c40\u6a21\u5f0f",id:"\u5168\u5c40\u6a21\u5f0f",level:3},{value:"PAC \u6a21\u5f0f",id:"pac-\u6a21\u5f0f",level:3},{value:"proxy \u73af\u5883\u53d8\u91cf",id:"proxy-\u73af\u5883\u53d8\u91cf",level:3},{value:"\u4ee3\u7406\u6d4b\u8bd5",id:"\u4ee3\u7406\u6d4b\u8bd5",level:2},{value:"\u7ba1\u7406\u811a\u672c",id:"\u7ba1\u7406\u811a\u672c",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:i},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6628\u5929\u5728\u7fa4\u5185\u770b\u5230\u6709\u670b\u53cb\u5728\u8be2\u95ee\u5982\u4f55\u5728 Linux \u7ec8\u7aef\u5185\u4f7f\u7528 SSR \u6765\u5b9e\u73b0\u79d1\u5b66\u4e0a\u7f51\uff0c\u6240\u4ee5\u62bd\u7a7a\u7814\u7a76\u4e86\u4e0b\u5728 Linux \u4e2d\u5982\u4f55\u4f7f\u7528\uff0c\u672c\u6587\u53c2\u8003\u4e86",(0,r.kt)("a",{parentName:"p",href:"https://www.zfl9.com/"},"Otokaze")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://www.djangoz.com"},"Django")," \u4e24\u4f4d\u7684\u535a\u5ba2\uff0c\u6587\u7ae0\u94fe\u63a5\u5728\u535a\u6587\u6700\u540e\uff1bSSR \u670d\u52a1\u63d0\u4f9b\u5546\u4f9d\u7136\u91c7\u7528\u4e86",(0,r.kt)("a",{parentName:"p",href:"http://ssglobal.co/wp"},"ssGlobal"),"\uff0c\u5728 Google \u7684\u8fc7\u7a0b\u4e2d\uff0c\u627e\u4e86\u4e0d\u5c11\u89e3\u51b3\u65b9\u6848\uff0c\u8fd9\u91cc\u4ec5\u505a\u4e00\u79cd\u7b80\u5355\u6574\u7406\uff0c\u5b9e\u9a8c\u64cd\u4f5c\u7cfb\u7edf\u6709 CentOS 7.4 & Ubuntu 16.04.3\u3002"),(0,r.kt)("h2",{id:"ssr-\u4ee3\u7406\u670d\u52a1"},"ssr \u4ee3\u7406\u670d\u52a1"),(0,r.kt)("h3",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9700\u8981\u672c\u5730git \u73af\u5883\nyum install -y git\ngit clone https://github.com/SAMZONG/gfwlist2privoxy.git\ncd gfwlist2privoxy/\nmv ssr /usr/local/bin\nchmod +x /usr/local/bin/ssr\n")),(0,r.kt)("h3",{id:"\u5b89\u88c5\u914d\u7f6e"},"\u5b89\u88c5\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[root@localhost ~]# ssr install\nCloning into \'/usr/local/share/shadowsocksr\'...\nremote: Counting objects: 5490, done.\nremote: Total 5490 (delta 0), reused 0 (delta 0), pack-reused 5490\nReceiving objects: 100% (5490/5490), 1.71 MiB | 410.00 KiB/s, done.\nResolving deltas: 100% (3799/3799), done.\n\n[root@localhost ~]# ssr config   # \u914d\u7f6e\u6587\u4ef6\u8def\u5f84 /usr/local/share/shadowsocksr/config.json\n{\n    "server": "0..0.0.0", // ssr\u670d\u52a1\u5668ip\n    "server_ipv6": "::",\n    "server_port": 8080, // ssr\u670d\u52a1\u5668\u7aef\u53e3\n    "local_address": "127.0.0.1",\n    "local_port": 1080,\n\n    "password": "123456",  // \u5bf9\u5e94password\n    "method": "none",   // \u8fd9\u91cc\u5bf9\u5e94SSGlobal\u914d\u7f6e\u4e2d\u7684Encryption\n    "protocol": "auth_chain_a",  //\u5bf9\u5e94protocl\n    "protocol_param": "",\n    "obfs": "http_simple",  //\u5bf9\u5e94obfs\n    "obfs_param": "hello.world", //\u5bf9\u5e94obfs_param\n    "speed_limit_per_con": 0,\n    "speed_limit_per_user": 0,\n\n    "additional_ports" : {}, // only works under multi-user mode\n    "additional_ports_only" : false, // only works under multi-user mode\n    "timeout": 120,\n    "udp_timeout": 60,\n    "dns_ipv6": false,\n    "connect_verbose_info": 0,\n    "redirect": "",\n    "fast_open": false\n}\n')),(0,r.kt)("h3",{id:"\u542f\u52a8\u5173\u95ed"},"\u542f\u52a8/\u5173\u95ed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssr start\nssr stop \n")),(0,r.kt)("h3",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssr uninstall # \u8fd9\u91cc\u64cd\u4f5c\u4f1a\u5220\u9664/usr/local/share/shadowsocksr\n")),(0,r.kt)("p",null,"\u4ee5\u4e0a\uff0c\u672c\u5730\u76d1\u542c\u670d\u52a1\u5df2\u7ecf\u914d\u7f6e\u5b8c\u6210\u4e86\uff0c\u5728\u586b\u5199\u7684\u8fc7\u7a0b\u4e2d\uff0c\u8981\u6ce8\u610f\u4f60\u7684\u672c\u5730\u76d1\u542c\u5730\u5740\u548c\u76d1\u542c\u7aef\u53e3\uff0c\u9ed8\u8ba4\u662f 127.0.0.1:1080\uff0c\u5982\u679c\u4f60\u4fee\u6539\u4e86\u8bbe\u7f6e\uff0c\u90a3\u4e48\u5728\u540e\u7eed\u914d\u7f6e\u4e2d\u4e5f\u8981\u914d\u5408\u4fee\u6539\u3002"),(0,r.kt)("h2",{id:"privoxy-\u914d\u7f6e"},"Privoxy \u914d\u7f6e"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u5b89\u88c5 privoxy"),(0,r.kt)("h3",{id:"centos-74"},"CentOS 7.4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y epel-release\nyum install -y privoxy\n")),(0,r.kt)("h3",{id:"ubuntu-1604"},"Ubuntu 16.04"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install -y privoxy\n")),(0,r.kt)("h3",{id:"\u5168\u5c40\u6a21\u5f0f"},"\u5168\u5c40\u6a21\u5f0f"),(0,r.kt)("p",null,"\u4ee3\u7406\u6a21\u5f0f\u540c\u5176\u4ed6\u5e73\u53f0\u4e0a\u65b9\u5f0f\uff0c\u5c06\u6240\u6709 http/https \u8bf7\u6c42\u8d70\u4ee3\u7406\u670d\u52a1\uff0c\u5982\u679c\u9700\u8981\u5168\u5c40\u4ee3\u7406\u7684\u8bdd\u6309\u7167\u5982\u4e0b\u64cd\u4f5c\u5373\u53ef\uff0c\u5982\u679c\u8981\u4f7f\u7528 PAC \u6a21\u5f0f\uff0c\u8bf7\u8df3\u8fc7\u6b64\u90e8\u5206\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6dfb\u52a0\u672c\u5730ssr\u670d\u52a1\u5230\u914d\u7f6e\u6587\u4ef6\necho 'forward-socks5 / 127.0.0.1:1080 .' >> /etc/privoxy/config\n\n# Privoxy \u9ed8\u8ba4\u76d1\u542c\u7aef\u53e3\u662f\u662f8118\nexport http_proxy=http://127.0.0.1:8118\nexport https_proxy=http://127.0.0.1:8118\nexport no_proxy=localhost\n\n# \u542f\u52a8\u670d\u52a1\nsystemctl start privoxy.service\n")),(0,r.kt)("h3",{id:"pac-\u6a21\u5f0f"},"PAC \u6a21\u5f0f"),(0,r.kt)("p",null,"\u4f7f\u7528 GFWList \u662f\u7531 AutoProxy \u5b98\u65b9\u7ef4\u62a4\uff0c\u7531\u4f17\u591a\u7f51\u6c11\u6536\u96c6\u6574\u7406\u7684\u4e00\u4e2a\u4e2d\u56fd\u5927\u9646\u9632\u706b\u957f\u57ce\u7684\u5c4f\u853d\u5217\u8868\uff0c\u8fd9\u91cc\u611f\u8c22",(0,r.kt)("a",{parentName:"p",href:"https://www.zfl9.com/"},"@Otokaze")," \u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u8f6c\u6362 shell \u81ea\u52a8\u8f6c\u6362\u811a\u672c\uff0c\u4e3a\u4e86\u65b9\u4fbf\u4fee\u6539\uff0c\u6211 fork \u4e86\u8fd9\u4e2a\u9879\u76ee\uff0c\u5c06\u8fd9\u7bc7\u6559\u7a0b\u6240\u7528\u5230\u7684\u8d44\u6e90\u8fdb\u884c\u4e86\u6c47\u603b\uff0c\u4f60\u53ef\u4ee5\u5728\u6700\u5f00\u59cb",(0,r.kt)("inlineCode",{parentName:"p"},"git clone"),"\u7684\u76ee\u5f55\u4e2d\u627e\u5230\u6267\u884c\u811a\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@localhost ~]# cd gfwlist2privoxy/\n[root@localhost gfwlist2privoxy]# ls\ngfw.action  gfwlist2privoxy  README.md  ssr\n[root@localhost gfwlist2privoxy]# bash gfwlist2privoxy\nproxy(socks5): 127.0.0.1:1080  # \u6ce8\u610f\uff0c\u5982\u679c\u4f60\u4fee\u6539\u4e86ssr\u672c\u5730\u76d1\u542c\u7aef\u53e3\u662f\u9700\u8981\u8bbe\u7f6e\u5bf9\u5e94\u7684\n{+forward-override{forward-socks5 127.0.0.1:1080 .}}\n\n=================================================================\n\n\"cp -af /root/gfwlist2privoxy/gfw.action /etc/privoxy/\"\n\n[root@localhost ~]# cp -af gfw.action /etc/privoxy/\n[root@localhost ~]# echo 'actionsfile gfw.action' >> /etc/privoxy/config\n\n# Privoxy \u9ed8\u8ba4\u76d1\u542c\u7aef\u53e3\u662f\u662f8118\nexport http_proxy=http://127.0.0.1:8118\nexport https_proxy=http://127.0.0.1:8118\nexport no_proxy=localhost\n\n# \u542f\u52a8\u670d\u52a1\nsystemctl start privoxy.service\n")),(0,r.kt)("h3",{id:"proxy-\u73af\u5883\u53d8\u91cf"},"proxy \u73af\u5883\u53d8\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# privoxy\u9ed8\u8ba4\u76d1\u542c\u7aef\u53e3\u4e3a8118\nexport http_proxy=http://127.0.0.1:8118\nexport https_proxy=http://127.0.0.1:8118\nexport no_proxy=localhost\n\n# no_proxy\u662f\u4e0d\u7ecf\u8fc7privoxy\u4ee3\u7406\u7684\u5730\u5740\n# \u53ea\u80fd\u586b\u5199\u5177\u4f53\u7684ip\u3001\u57df\u540d\u540e\u7f00\uff0c\u591a\u4e2a\u6761\u76ee\u4e4b\u95f4\u4f7f\u7528','\u9017\u53f7\u9694\u5f00\n# \u6bd4\u5982: export no_proxy=\"localhost, 192.168.1.1, ip.cn, chinaz.com\"\n# \u8bbf\u95ee localhost\u3001192.168.1.1\u3001ip.cn\u3001*.ip.cn\u3001chinaz.com\u3001*.chinaz.com \u5c06\u4e0d\u4f7f\u7528\u4ee3\u7406\n")),(0,r.kt)("h2",{id:"\u4ee3\u7406\u6d4b\u8bd5"},"\u4ee3\u7406\u6d4b\u8bd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8bbf\u95ee\u5404\u5927\u7f51\u7ad9\uff0c\u5982\u679c\u90fd\u6709\u7f51\u9875\u6e90\u7801\u8f93\u51fa\u8bf4\u660e\u4ee3\u7406\u6ca1\u95ee\u9898\ncurl -sL www.baidu.com\ncurl -sL www.google.com\ncurl -sL www.google.com.hk\ncurl -sL www.google.co.jp\ncurl -sL www.youtube.com\ncurl -sL mail.google.com\ncurl -sL facebook.com\ncurl -sL twitter.com\ncurl -sL www.wikipedia.org\n\n# \u83b7\u53d6\u5f53\u524d IP \u5730\u5740\n# \u5982\u679c\u4f7f\u7528 privoxy \u5168\u5c40\u6a21\u5f0f\uff0c\u5219\u5e94\u8be5\u663e\u793a ss \u670d\u52a1\u5668\u7684 IP\n# \u5982\u679c\u4f7f\u7528 privoxy gfwlist\u6a21\u5f0f\uff0c\u5219\u5e94\u8be5\u663e\u793a\u672c\u5730\u516c\u7f51 IP\ncurl -sL ip.chinaz.com/getip.aspx\n")),(0,r.kt)("h3",{id:"\u7ba1\u7406\u811a\u672c"},"\u7ba1\u7406\u811a\u672c"),(0,r.kt)("p",null,"\u5728\u4ee5\u4e0a\u90e8\u7f72\u64cd\u4f5c\u5b8c\u6210\u540e\uff0c\u5e94\u8be5\u5df2\u7ecf\u53ef\u4ee5\u6b63\u5e38\u79d1\u5b66\u4e0a\u7f51\u4e86\uff0c\u4f46\u662f\u5982\u679c\u9700\u8981\u8fdb\u884c\u7ba1\u7406\u65f6\uff0c\u9700\u8981\u5206\u522b\u7ba1\u7406 ssr \u548c privoxy\uff0c\u4e3a\u4e86\u65b9\u4fbf\u7ba1\u7406\uff0c\u8fd9\u91cc\u5199\u4e86\u4e00\u4e2a shell \u811a\u672c\u65b9\u4fbf\u7ba1\u7406\uff1assr_manager"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n# Author Samzong.lu\n\ncase $1 in\n start)\n  ssr start &> /var/log/ssr-local.log\n  systemctl start privoxy.service\n  export http_proxy=http://127.0.0.1:8118\n  export https_proxy=http://127.0.0.1:8118\n  export no_proxy="localhost, ip.cn, chinaz.com"\n  ;;\n stop)\n  unset http_proxy https_proxy no_proxy\n  systemctl stop privoxy.service\n  ssr stop &> /var/log/ssr-log.log\n  ;;\n autostart)\n  echo "ssr start" >> /etc/rc.local\n  systemctl enable privoxy.service\n  echo "http_proxy=http://127.0.0.1:8118" >> /etc/bashrc\n  echo "https_proxy=http://127.0.0.1:8118" >> /etc/bashrc\n  echo "no_proxy=\'localhost, ip.cn, chinaz.com\'" >> /etc/bashrc\n  ;;\n *)\n  echo "usage: source $0 start|stop|autostart"\n  exit 1\n  ;;\nesac\n')),(0,r.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mv gfwlist2privoxy/ssr_manager /usr/local/bin\nchmod +x ssr_manager\n\n# \u542f\u52a8\u670d\u52a1\nssr_manager start\n\n# \u5173\u95ed\u670d\u52a1\nssr_manager stop \n\n# \u6dfb\u52a0\u5f00\u673a\u81ea\u542f\u52a8\nssr_manager autostart\n")),(0,r.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.zfl9.com/ss-local.html"},"https://www.zfl9.com/ss-local.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.djangoz.com/2017/08/16/linux_setup_ssr/"},"https://www.djangoz.com/2017/08/16/linux_setup_ssr/"))))}h.isMDXComponent=!0}}]);