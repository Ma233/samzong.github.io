"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[97468],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>v});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,v=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return n?t.createElement(v,l(l({ref:r},u),{},{components:n})):t.createElement(v,l({ref:r},u))}));function v(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1949:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const o={title:"HowTo Install KVM Manage Server webvirtmgr",tags:["KVM"],date:new Date("2016-07-27T17:34:01.000Z")},l=void 0,i={permalink:"/2016/07/27/HowTo-Install-KVM-Manage-Server-webvirtmgr",source:"@site/blog/2016-07-27-HowTo-Install-KVM-Manage-Server-webvirtmgr.md",title:"HowTo Install KVM Manage Server webvirtmgr",description:"\u751f\u4ea7\u73af\u5883\u7684 KVM \u5bbf\u4e3b\u673a\u8d8a\u6765\u8d8a\u591a\uff0c\u9700\u8981\u5bf9\u5bbf\u4e3b\u673a\u7684\u72b6\u6001\u8fdb\u884c\u8c03\u63a7\u3002\u8fd9\u91cc\u7528 webvirtmgr \u8fdb\u884c\u7ba1\u7406\u3002\u56fe\u5f62\u5316\u7684 WEB\uff0c\u8ba9\u4eba\u80fd\u66f4\u65b9\u4fbf\u7684\u67e5\u770b kvm \u5bbf\u4e3b\u673a\u7684\u60c5\u51b5\u548c\u64cd\u4f5c\u3002",date:"2016-07-27T17:34:01.000Z",formattedDate:"July 27, 2016",tags:[{label:"KVM",permalink:"/tags/kvm"}],readingTime:2.215,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Install KVM Manage Server webvirtmgr",tags:["KVM"],date:"2016-07-27T17:34:01.000Z"},prevItem:{title:"Yum \u4e2d$releasever \u548c$basearch \u7684\u53d6\u503c",permalink:"/2016/07/27/yum-zhong-releasever-he-basearch-de-qu-zhi"},nextItem:{title:"HowTo Trun Off IPv6 in CentOS 6.x",permalink:"/2016/07/29/HowTo-Trun-Off-IPv6-in-CentOS-6-x"}},s={authorsImageUrls:[]},c=[{value:"Install",id:"install",level:3},{value:"\u5b89\u88c5\u652f\u6301\u7684\u8f6f\u4ef6\u6e90",id:"\u5b89\u88c5\u652f\u6301\u7684\u8f6f\u4ef6\u6e90",level:4},{value:"\u5b89\u88c5\u76f8\u5173\u8f6f\u4ef6",id:"\u5b89\u88c5\u76f8\u5173\u8f6f\u4ef6",level:4},{value:"\u4ece git-hub \u4e2d\u4e0b\u8f7d\u76f8\u5173\u7684 webvirtmgr \u4ee3\u7801",id:"\u4ece-git-hub-\u4e2d\u4e0b\u8f7d\u76f8\u5173\u7684-webvirtmgr-\u4ee3\u7801",level:4},{value:"\u5b89\u88c5 webvirtmgr",id:"\u5b89\u88c5-webvirtmgr",level:4},{value:"\u5b89\u88c5\u6570\u636e\u5e93",id:"\u5b89\u88c5\u6570\u636e\u5e93",level:4},{value:"\u5bf9 django \u8fdb\u884c\u73af\u5883\u914d\u7f6e",id:"\u5bf9-django-\u8fdb\u884c\u73af\u5883\u914d\u7f6e",level:4},{value:"\u62f7\u8d1d web \u5230 \u76f8\u5173\u76ee\u5f55",id:"\u62f7\u8d1d-web-\u5230-\u76f8\u5173\u76ee\u5f55",level:4},{value:"\u8bbe\u7f6e ssh",id:"\u8bbe\u7f6e-ssh",level:4},{value:"\u7f16\u8f91 nginx \u914d\u7f6e\u6587\u4ef6",id:"\u7f16\u8f91-nginx-\u914d\u7f6e\u6587\u4ef6",level:4},{value:"\u542f\u52a8 nginx",id:"\u542f\u52a8-nginx",level:4},{value:"\u4fee\u6539\u9632\u706b\u5899\u89c4\u5219 ( \u5982\u679c\u5173\u95ed selinux\uff0c\u6b64\u6b65\u53ef\u7701\u7565)",id:"\u4fee\u6539\u9632\u706b\u5899\u89c4\u5219--\u5982\u679c\u5173\u95ed-selinux\u6b64\u6b65\u53ef\u7701\u7565",level:4},{value:"\u8bbe\u7f6e supervisor",id:"\u8bbe\u7f6e-supervisor",level:4},{value:"\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8",id:"\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8",level:4},{value:"\u542f\u52a8\u8fdb\u7a0b",id:"\u542f\u52a8\u8fdb\u7a0b",level:4},{value:"\u8bbf\u95ee",id:"\u8bbf\u95ee",level:4}],u={toc:c},p="wrapper";function g(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u751f\u4ea7\u73af\u5883\u7684 KVM \u5bbf\u4e3b\u673a\u8d8a\u6765\u8d8a\u591a\uff0c\u9700\u8981\u5bf9\u5bbf\u4e3b\u673a\u7684\u72b6\u6001\u8fdb\u884c\u8c03\u63a7\u3002\u8fd9\u91cc\u7528 webvirtmgr \u8fdb\u884c\u7ba1\u7406\u3002\u56fe\u5f62\u5316\u7684 WEB\uff0c\u8ba9\u4eba\u80fd\u66f4\u65b9\u4fbf\u7684\u67e5\u770b kvm \u5bbf\u4e3b\u673a\u7684\u60c5\u51b5\u548c\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("a",{parentName:"em",href:"https://github.com/retspen/webvirtmgr"},"GitHub Project.")))),(0,a.kt)("h3",{id:"install"},"Install"),(0,a.kt)("h4",{id:"\u5b89\u88c5\u652f\u6301\u7684\u8f6f\u4ef6\u6e90"},"\u5b89\u88c5\u652f\u6301\u7684\u8f6f\u4ef6\u6e90"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y epel-release\n")),(0,a.kt)("h4",{id:"\u5b89\u88c5\u76f8\u5173\u8f6f\u4ef6"},"\u5b89\u88c5\u76f8\u5173\u8f6f\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum -y install git python-pip libvirt-python libxml2-python python-websockify supervisor nginx\n")),(0,a.kt)("h4",{id:"\u4ece-git-hub-\u4e2d\u4e0b\u8f7d\u76f8\u5173\u7684-webvirtmgr-\u4ee3\u7801"},"\u4ece git-hub \u4e2d\u4e0b\u8f7d\u76f8\u5173\u7684 webvirtmgr \u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /usr/local/src/\ngit clone git://github.com/retspen/webvirtmgr.git\n")),(0,a.kt)("h4",{id:"\u5b89\u88c5-webvirtmgr"},"\u5b89\u88c5 webvirtmgr"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd webvirtmgr/\npip install -r requirements.txt\n")),(0,a.kt)("h4",{id:"\u5b89\u88c5\u6570\u636e\u5e93"},"\u5b89\u88c5\u6570\u636e\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install python-sqlite2\n")),(0,a.kt)("h4",{id:"\u5bf9-django-\u8fdb\u884c\u73af\u5883\u914d\u7f6e"},"\u5bf9 django \u8fdb\u884c\u73af\u5883\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./manage.py syncdb\n\nYou just installed Django's auth system, which means you don't have any superusers defined.\nWould you like to create one now? (yes/no): yes\nUsername (leave blank to use 'root'): admin\nEmail address: luchuanjia@msn.com\nPassword:*********\nPassword (again):*********\n\n./manage.py collectstatic #\u751f\u6210\u914d\u7f6e\u6587\u4ef6\n./manage.py createsuperuser #\u6dfb\u52a0\u7ba1\u7406\u5458\u8d26\u53f7\n")),(0,a.kt)("h4",{id:"\u62f7\u8d1d-web-\u5230-\u76f8\u5173\u76ee\u5f55"},"\u62f7\u8d1d web \u5230 \u76f8\u5173\u76ee\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ..\nrm -rf /var/www\nmkdir -pv /var/www\ncp -Rv webvirtmgr /var/www/webvirtmgr\n")),(0,a.kt)("h4",{id:"\u8bbe\u7f6e-ssh"},"\u8bbe\u7f6e ssh"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen\nssh-copy-id 192.168.2.32\nssh 192.168.2.32 -L localhost:8000:localhost:8000 -L localhost:6080:localhost:6080\n")),(0,a.kt)("h4",{id:"\u7f16\u8f91-nginx-\u914d\u7f6e\u6587\u4ef6"},"\u7f16\u8f91 nginx \u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.bak\nvim /etc/nginx/conf.d/webvirtmgr.conf  #\u6dfb\u52a0\u4e0b\u9762\u5185\u5bb9\u5230\u6587\u4ef6\u4e2d\n\nserver {\n    listen 80 default_server;\n\n    server_name $hostname;\n    #access_log /var/log/nginx/webvirtmgr_access_log;\n\n    location /static/ {\n        root /var/www/webvirtmgr/webvirtmgr; # or /srv instead of /var\n        expires max;\n    }\n\n    location / {\n        proxy_pass http://127.0.0.1:8000;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-for $proxy_add_x_forwarded_for;\n        proxy_set_header Host $host:$server_port;\n        proxy_set_header X-Forwarded-Proto $remote_addr;\n        proxy_connect_timeout 600;\n        proxy_read_timeout 600;\n        proxy_send_timeout 600;\n        client_max_body_size 1024M; # Set higher depending on your needs\n    }\n}\n")),(0,a.kt)("h4",{id:"\u542f\u52a8-nginx"},"\u542f\u52a8 nginx"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"service nginx start\n")),(0,a.kt)("h4",{id:"\u4fee\u6539\u9632\u706b\u5899\u89c4\u5219--\u5982\u679c\u5173\u95ed-selinux\u6b64\u6b65\u53ef\u7701\u7565"},"\u4fee\u6539\u9632\u706b\u5899\u89c4\u5219 ( \u5982\u679c\u5173\u95ed selinux\uff0c\u6b64\u6b65\u53ef\u7701\u7565)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/sbin/setsebool httpd_can_network_connect true\n")),(0,a.kt)("h4",{id:"\u8bbe\u7f6e-supervisor"},"\u8bbe\u7f6e supervisor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'chown -R nginx:nginx /var/www/webvirtmgr\nvim /etc/supervisord.conf #\u5728\u6587\u4ef6\u672b\u5c3e\u6dfb\u52a0\n\n[program:webvirtmgr]\ncommand=/usr/bin/python /var/www/webvirtmgr/manage.py run_gunicorn -c /var/www/webvirtmgr/conf/gunicorn.conf.py\ndirectory=/var/www/webvirtmgr\nautostart=true\nautorestart=true\nlogfile=/var/log/supervisor/webvirtmgr.log\nlog_stderr=true\nuser=nginx\n\n[program:webvirtmgr-console]\ncommand=/usr/bin/python /var/www/webvirtmgr/console/webvirtmgr-console\ndirectory=/var/www/webvirtmgr\nautostart=true\nautorestart=true\nstdout_logfile=/var/log/supervisor/webvirtmgr-console.log\nredirect_stderr=true\nuser=nginx\n\n\u4fee\u6539/var/www/webvirtmgr/conf/gunicorn.conf.py\nbind = "0:8000"\n')),(0,a.kt)("h4",{id:"\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8"},"\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chkconfig supervisord on\nchkconfig nginx on\nvim /etc/rc.local\n      /usr/sbin/setsebool httpd_can_network_connect true\n")),(0,a.kt)("h4",{id:"\u542f\u52a8\u8fdb\u7a0b"},"\u542f\u52a8\u8fdb\u7a0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"service nginx start\nservice supervisord start\n")),(0,a.kt)("h4",{id:"\u8bbf\u95ee"},"\u8bbf\u95ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"http://$server_ip/login/\n")))}g.isMDXComponent=!0}}]);