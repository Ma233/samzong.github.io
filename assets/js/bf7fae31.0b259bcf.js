"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[15398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(n),p=l,g=u["".concat(s,".").concat(p)]||u[p]||c[p]||o;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},35384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(87462),l=(n(67294),n(3905));const o={title:"HowTo Install Redmine",tags:["Tools"],date:new Date("2017-02-22T12:30:36.000Z")},a=void 0,i={permalink:"/2017/02/22/HowTo-Install-Redmine",source:"@site/blog/2017-02-22-HowTo-Install-Redmine.md",title:"HowTo Install Redmine",description:"Runtime environment",date:"2017-02-22T12:30:36.000Z",formattedDate:"February 22, 2017",tags:[{label:"Tools",permalink:"/tags/tools"}],readingTime:3.715,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Install Redmine",tags:["Tools"],date:"2017-02-22T12:30:36.000Z"},prevItem:{title:"HowTo Upgrade Your Ghost Version",permalink:"/2017/02/20/HowTo-Upgrade-Your-Ghost-Version"},nextItem:{title:"HowTo Install NextCloud",permalink:"/2017/02/27/HowTo-Install-NextCloud"}},s={authorsImageUrls:[]},m=[{value:"Runtime environment",id:"runtime-environment",level:4},{value:"\u5b89\u88c5 rvm",id:"\u5b89\u88c5-rvm",level:4},{value:"\u5bfc\u5165\u516c\u94a5",id:"\u5bfc\u5165\u516c\u94a5",level:5},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:5},{value:"\u52a0\u8f7d rvm \u73af\u5883\u5e76\u5b89\u88c5\u57fa\u7840\u4f9d\u8d56\u5305",id:"\u52a0\u8f7d-rvm-\u73af\u5883\u5e76\u5b89\u88c5\u57fa\u7840\u4f9d\u8d56\u5305",level:5},{value:"\u5b89\u88c5 ruby",id:"\u5b89\u88c5-ruby",level:4},{value:"\u5b89\u88c5 rails",id:"\u5b89\u88c5-rails",level:4},{value:"\u66f4\u6362 gem \u6e90",id:"\u66f4\u6362-gem-\u6e90",level:5},{value:"\u5b89\u88c5",id:"\u5b89\u88c5-1",level:5},{value:"\u5b89\u88c5 MySQL",id:"\u5b89\u88c5-mysql",level:4},{value:"\u5b89\u88c5 redmine",id:"\u5b89\u88c5-redmine",level:4},{value:"\u4e0b\u8f7d Redmine 3.3.2",id:"\u4e0b\u8f7d-redmine-332",level:5},{value:"\u5b89\u88c5\u7ba1\u7406 ruby \u7684\u5305\u7ba1\u7406\u5de5\u5177 bundler",id:"\u5b89\u88c5\u7ba1\u7406-ruby-\u7684\u5305\u7ba1\u7406\u5de5\u5177-bundler",level:5},{value:"\u5b89\u88c5 redmine \u8fd0\u884c\u6240\u9700\u8981\u7684\u4f9d\u8d56\u5305",id:"\u5b89\u88c5-redmine-\u8fd0\u884c\u6240\u9700\u8981\u7684\u4f9d\u8d56\u5305",level:5},{value:"\u4e3a rails \u751f\u4ea7 cookies \u79d8\u94a5",id:"\u4e3a-rails-\u751f\u4ea7-cookies-\u79d8\u94a5",level:5},{value:"\u521b\u5efa redmine \u7684\u6570\u636e\u5e93",id:"\u521b\u5efa-redmine-\u7684\u6570\u636e\u5e93",level:5},{value:"\u4fee\u6539 redmine \u7684 database.yml",id:"\u4fee\u6539-redmine-\u7684-databaseyml",level:5},{value:"\u521b\u5efa\u6570\u636e\u5e93\u7ed3\u6784",id:"\u521b\u5efa\u6570\u636e\u5e93\u7ed3\u6784",level:5},{value:"\u751f\u4ea7\u7f3a\u7701\u6570\u636e",id:"\u751f\u4ea7\u7f3a\u7701\u6570\u636e",level:5},{value:"\u6d4b\u8bd5\u662f\u5426\u5b89\u88c5\u6210\u529f",id:"\u6d4b\u8bd5\u662f\u5426\u5b89\u88c5\u6210\u529f",level:5},{value:"\u914d\u7f6e Redmine \u5728 Nginx \u4e0a\u8fd0\u884c",id:"\u914d\u7f6e-redmine-\u5728-nginx-\u4e0a\u8fd0\u884c",level:4},{value:"\u91c7\u7528 Passenger \u63d0\u4f9b\u811a\u672c\u5b89\u88c5",id:"\u91c7\u7528-passenger-\u63d0\u4f9b\u811a\u672c\u5b89\u88c5",level:5},{value:"\u91c7\u7528\u91cd\u65b0\u7f16\u8bd1 Nginx \u589e\u52a0 Passenger \u6a21\u5757",id:"\u91c7\u7528\u91cd\u65b0\u7f16\u8bd1-nginx-\u589e\u52a0-passenger-\u6a21\u5757",level:5},{value:"\u589e\u52a0 HTTP \u6a21\u5757\u5185\u4ee5\u4e0b\u914d\u7f6e",id:"\u589e\u52a0-http-\u6a21\u5757\u5185\u4ee5\u4e0b\u914d\u7f6e",level:5},{value:"\u914d\u7f6e nginx.conf \u4fee\u6539 server \u6a21\u5757\u4e2d location \u7684\u914d\u7f6e",id:"\u914d\u7f6e-nginxconf-\u4fee\u6539-server-\u6a21\u5757\u4e2d-location-\u7684\u914d\u7f6e",level:5},{value:"\u542f\u52a8 Nginx",id:"\u542f\u52a8-nginx",level:5},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:4},{value:"7.1 Could not find gem &#39;mysql2 (~&gt; 0.3.11)&#39; in any of the gem sources listed in your Gemfile",id:"71-could-not-find-gem-mysql2--0311-in-any-of-the-gem-sources-listed-in-your-gemfile",level:5},{value:"7.2 curl-tools",id:"72-curl-tools",level:5}],d={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"runtime-environment"},"Runtime environment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CentOS 6.x"),(0,l.kt)("li",{parentName:"ul"},"Redmine 3.3.2"),(0,l.kt)("li",{parentName:"ul"},"Ruby 2.2.6"),(0,l.kt)("li",{parentName:"ul"},"rails 4.2"),(0,l.kt)("li",{parentName:"ul"},"MySQL 5.1"),(0,l.kt)("li",{parentName:"ul"},"Nginx 1.10")),(0,l.kt)("h4",{id:"\u5b89\u88c5-rvm"},"\u5b89\u88c5 rvm"),(0,l.kt)("h5",{id:"\u5bfc\u5165\u516c\u94a5"},"\u5bfc\u5165\u516c\u94a5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost ~]# curl -sSL https://rvm.io/mpapis.asc | gpg --import\n")),(0,l.kt)("h5",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost ~]# curl -L https://get.rvm.io | bash -s stable\n")),(0,l.kt)("h5",{id:"\u52a0\u8f7d-rvm-\u73af\u5883\u5e76\u5b89\u88c5\u57fa\u7840\u4f9d\u8d56\u5305"},"\u52a0\u8f7d rvm \u73af\u5883\u5e76\u5b89\u88c5\u57fa\u7840\u4f9d\u8d56\u5305"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost ~]# source /etc/profile.d/rvm.sh\n[root@localhost ~]# rvm requirements\n")),(0,l.kt)("h4",{id:"\u5b89\u88c5-ruby"},"\u5b89\u88c5 ruby"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost ~]# rvm install 2.2.6\n...\n[root@localhost ~]# rvm use 2.2.6 --default\n")),(0,l.kt)("h4",{id:"\u5b89\u88c5-rails"},"\u5b89\u88c5 rails"),(0,l.kt)("h5",{id:"\u66f4\u6362-gem-\u6e90"},"\u66f4\u6362 gem \u6e90"),(0,l.kt)("p",null,"\u9ed8\u8ba4 gem \u7684\u6e90\u7ad9\u70b9\u662f",(0,l.kt)("a",{parentName:"p",href:"https://rubygems.org"},"https://rubygems.org")," \u7531\u4e8e\u56fd\u5185\u7684\u7f51\u7edc\u539f\u56e0\u5bfc\u81f4\u65e0\u6cd5\u8fde\u63a5\uff0c\u6240\u4ee5\u5bfc\u81f4\u65e0\u6cd5\u4f7f\u7528 gem \u5b89\u88c5\uff0c\u8fd9\u91cc\u6362\u6210\u56fd\u5185\u6dd8\u5b9d\u7684 gem \u955c\u50cf\u7ad9\u70b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost ~]# gem sources -l\n*** CURRENT SOURCES ***\n\nhttps://rubygems.org/\n[root@localhost ~]# gem sources --remove https://rubygems.org/\n[root@localhost ~]# gem sources -a https://ruby.taobao.org/\n[root@localhost ~]# gem sources -l\n*** CURRENT SOURCES ***\n\nhttps://ruby.taobao.org/\n")),(0,l.kt)("h5",{id:"\u5b89\u88c5-1"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost ~]# gem install rails -v=4.2\n")),(0,l.kt)("h4",{id:"\u5b89\u88c5-mysql"},"\u5b89\u88c5 MySQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost ~]# yum install -y mysql-server mysql-libs mysql-devel mysql\n[root@localhost ~]# service mysqld start\n[root@localhost ~]# mysql_secure_installation\n")),(0,l.kt)("h4",{id:"\u5b89\u88c5-redmine"},"\u5b89\u88c5 redmine"),(0,l.kt)("h5",{id:"\u4e0b\u8f7d-redmine-332"},"\u4e0b\u8f7d Redmine 3.3.2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost ~]# wget http://www.redmine.org/releases/redmine-3.3.2.tar.gz\n[root@localhost ~]# tar xf redmine-3.3.2.tar.gz\n[root@localhost ~]# mv redmine-3.3.2 /opt\n")),(0,l.kt)("h5",{id:"\u5b89\u88c5\u7ba1\u7406-ruby-\u7684\u5305\u7ba1\u7406\u5de5\u5177-bundler"},"\u5b89\u88c5\u7ba1\u7406 ruby \u7684\u5305\u7ba1\u7406\u5de5\u5177 bundler"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u6ce8\u610f\uff0c\u4e00\u5b9a\u8981\u5728redmine\u76ee\u5f55\u4e0b\u64cd\u4f5c\n[root@localhost ~]# cd /opt/redmine-3.3.2\n[root@localhost redmine-3.3.2]# gem install bundler\n")),(0,l.kt)("h5",{id:"\u5b89\u88c5-redmine-\u8fd0\u884c\u6240\u9700\u8981\u7684\u4f9d\u8d56\u5305"},"\u5b89\u88c5 redmine \u8fd0\u884c\u6240\u9700\u8981\u7684\u4f9d\u8d56\u5305"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost redmine-3.3.2]# bundle install --without development test rmagick\n")),(0,l.kt)("h5",{id:"\u4e3a-rails-\u751f\u4ea7-cookies-\u79d8\u94a5"},"\u4e3a rails \u751f\u4ea7 cookies \u79d8\u94a5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost redmine-3.3.2]# rake generate_secret_token\n")),(0,l.kt)("h5",{id:"\u521b\u5efa-redmine-\u7684\u6570\u636e\u5e93"},"\u521b\u5efa redmine \u7684\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> create database redmine character set utf8;\nmysql> grant all privileges on redmine.* to 'redmine'@'localhost' identified by 'redmine_pass';\n")),(0,l.kt)("h5",{id:"\u4fee\u6539-redmine-\u7684-databaseyml"},"\u4fee\u6539 redmine \u7684 database.yml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[root@localhost redmine-3.3.2]# cp config/database.yml.example config/database.yml\n[root@localhost redmine-3.3.2]# vim config/database.yml\nproduction:\n  adapter: mysql2\n  database: redmine\n  host: localhost\n  username: redmine\n  password: "redmine_pass"\n  encoding: utf8\n')),(0,l.kt)("h5",{id:"\u521b\u5efa\u6570\u636e\u5e93\u7ed3\u6784"},"\u521b\u5efa\u6570\u636e\u5e93\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost redmine-3.3.2]# RAILS_ENV=production bundle exec rake db:migrate\n")),(0,l.kt)("h5",{id:"\u751f\u4ea7\u7f3a\u7701\u6570\u636e"},"\u751f\u4ea7\u7f3a\u7701\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost redmine-3.3.2]# RAILS_ENV=production bundle exec rake redmine:load_default_data\n# \u9009\u62e9\u9ed8\u8ba4\u8bed\u8a00\uff0c\u4e4b\u540e\u53ef\u66f4\u6539\uff0c\u521d\u59cb\u4e3aen\n")),(0,l.kt)("h5",{id:"\u6d4b\u8bd5\u662f\u5426\u5b89\u88c5\u6210\u529f"},"\u6d4b\u8bd5\u662f\u5426\u5b89\u88c5\u6210\u529f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost redmine-3.3.2]# bundle exec rails server webrick -e production -b 0.0.0.0\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u8fd0\u884c 3000 \u7aef\u53e3\uff0c\u9ed8\u8ba4\u7ba1\u7406\u5458 admin/admin")),(0,l.kt)("h4",{id:"\u914d\u7f6e-redmine-\u5728-nginx-\u4e0a\u8fd0\u884c"},"\u914d\u7f6e Redmine \u5728 Nginx \u4e0a\u8fd0\u884c"),(0,l.kt)("p",null,"Redmine \u5e38\u7528\u7684\u89e3\u51b3\u529e\u6cd5\u662f\u4f7f\u7528 passenger+nginx\uff0c\u4f46\u662f Nginx \u4e0d\u652f\u6301\u88c5\u8f7d\u6a21\u5757\uff0c\u6240\u4ee5\u9700\u8981\u91cd\u65b0\u7f16\u8bd1\u5b89\u88c5 Nginx\uff0c\u5b89\u88c5 Nginx \u7684 Passenger \u6709\u4e24\u79cd\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u91c7\u7528 Passenger \u63d0\u4f9b\u7684\u811a\u672c\u8fdb\u884c\u5b89\u88c5\uff0c\u9002\u5408\u65b0\u73af\u5883"),(0,l.kt)("li",{parentName:"ul"},"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5 Nginx \u589e\u52a0 Passenger \u6a21\u5757\uff0c\u9002\u5408\u5df2\u5b58\u5728 Nginx \u73af\u5883")),(0,l.kt)("h5",{id:"\u91c7\u7528-passenger-\u63d0\u4f9b\u811a\u672c\u5b89\u88c5"},"\u91c7\u7528 Passenger \u63d0\u4f9b\u811a\u672c\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost redmine-3.3.2]# gem install passenger\n[root@localhost redmine-3.3.2]# passenger-install-nginx-module --auto --prefix=/opt/nginx\n")),(0,l.kt)("h5",{id:"\u91c7\u7528\u91cd\u65b0\u7f16\u8bd1-nginx-\u589e\u52a0-passenger-\u6a21\u5757"},"\u91c7\u7528\u91cd\u65b0\u7f16\u8bd1 Nginx \u589e\u52a0 Passenger \u6a21\u5757"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u83b7\u53d6passenger\u7684\u5b89\u88c5\u8def\u5f84\n[root@localhost ~]# passenger-config --root\n/usr/local/rvm/gems/ruby-2.2.6/gems/passenger-5.1.2\n\n# \u91cd\u65b0\u7f16\u8bd1Nginx\u5e76\u6dfb\u52a0\u6a21\u5757\n[root@localhost ~]# wget http://nginx.org/download/nginx-1.10.3.tar.gz\n[root@localhost ~]# tar xf nginx-1.10.3.tar.gz\n[root@localhost ~]# cd nginx-1.10.3\n[root@localhost nginx-1.10.3]# ./configure ... -add-module=/usr/local/rvm/gems/ruby-2.2.6/gems/passenger-5.1.2\n")),(0,l.kt)("h5",{id:"\u589e\u52a0-http-\u6a21\u5757\u5185\u4ee5\u4e0b\u914d\u7f6e"},"\u589e\u52a0 HTTP \u6a21\u5757\u5185\u4ee5\u4e0b\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"passenger_root /usr/local/rvm/gems/ruby-2.2.6/gems/passenger-5.1.2\n")),(0,l.kt)("h5",{id:"\u914d\u7f6e-nginxconf-\u4fee\u6539-server-\u6a21\u5757\u4e2d-location-\u7684\u914d\u7f6e"},"\u914d\u7f6e nginx.conf \u4fee\u6539 server \u6a21\u5757\u4e2d location \u7684\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# ...\nserver {\n  # ...\n  passenger_enabled on;\n  location / {\n    root /opt/redmine-3.3.2/public;\n    index index.html index.htm;\n  }\n}\n# ...\n")),(0,l.kt)("h5",{id:"\u542f\u52a8-nginx"},"\u542f\u52a8 Nginx"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost ~]# /root/nginx-1.10.3/sbin/nginx -c /root/nginx-1.10.3/conf/nginx.conf\n")),(0,l.kt)("h4",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,l.kt)("p",null,"\u5230\u8fd9\u91cc\uff0c\u6240\u6709\u7684\u5b89\u88c5\u90fd\u5b8c\u6210\u4e86\uff0c\u8fc7\u7a0b\u4e2d\u6211\u9047\u5230\u8fd9\u4e9b\u95ee\u9898\uff0c\u4f60\u4e5f\u6ce8\u610f\u4e0b\uff1a"),(0,l.kt)("h5",{id:"71-could-not-find-gem-mysql2--0311-in-any-of-the-gem-sources-listed-in-your-gemfile"},"7.1 Could not find gem 'mysql2 (~> 0.3.11)' in any of the gem sources listed in your Gemfile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost redmine-3.3.2]# rm -f Gemfile.lock\n[root@localhost redmine-3.3.2]# bundle install\n")),(0,l.kt)("h5",{id:"72-curl-tools"},"7.2 curl-tools"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yum install libcurl-devel\n")))}c.isMDXComponent=!0}}]);