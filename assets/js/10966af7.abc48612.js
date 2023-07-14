"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[17087],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,g=d["".concat(o,".").concat(p)]||d[p]||u[p]||i;return t?r.createElement(g,s(s({ref:n},m),{},{components:t})):r.createElement(g,s({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},87851:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={title:"Howto Install Redmine on Ubuntu 16.04",tags:[]},s=void 0,l={permalink:"/2017/12/02/Howto-Install-Redmine-on-Ubuntu-16.04",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2017-12-02-Howto-Install-Redmine-on-Ubuntu-16.04.md",source:"@site/blog/2017-12-02-Howto-Install-Redmine-on-Ubuntu-16.04.md",title:"Howto Install Redmine on Ubuntu 16.04",description:"",date:"2017-12-02T00:00:00.000Z",formattedDate:"2017\u5e7412\u67082\u65e5",tags:[],readingTime:.7733333333333333,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Howto Install Redmine on Ubuntu 16.04",tags:[]},prevItem:{title:"Git \u4f7f\u7528\u89c4\u8303\u6d41\u7a0b",permalink:"/2018/01/09/git-shi-yong-gui-fan-liu-cheng"},nextItem:{title:"HowTo Use SSR Service on Mac",permalink:"/2017/11/15/Howto-use-ssr-on-mac"}},o={authorsImageUrls:[]},c=[],m={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# base\napt install mysql-server libmysqlclient-dev git-core subversion imagemagick libmagickwand-dev libcurl4-openssl-dev \napt install build-essential mysql-server ruby ruby-dev libmysqlclient-dev imagemagick libmagickwand-dev\n# install mysql\nsystemctl enable mysql.service\nsystemctl start mysql.service\ncreate database redmine character set utf8;\ngrant all privileges on redmine.* to redmine@'localhost' identified by 'redmine';\nflush privileges;\n# Install ruby\ngpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3\ncurl -sSL https://get.rvm.io | bash -s stable\nsource /etc/profile.d/rvm.sh\nrvm requirements\nrvm install 2.4.1\nrvm use 2.4.1 --default\n# install passenger and nginx \ngem install passenger --no-ri --no-rdoc\npassenger-install-nginx-module\n# 1. auto install nginx.\ncurl https://raw.githubusercontent.com/makevoid/nginx-passenger-ubuntu/master/nginx/nginx.service > /lib/systemd/system/nginx.service\nsystemctl daemon-reload\nsystemctl enable nginx\nvim /opt/nginx/conf/nginx.conf # \u6ce8\u9500 location / {} \u7684\u914d\u7f6e\nserver {\n  listen  80;\n  server_name [your_server_domain_name] # redmine.com;\n  root /var/data/redmine/public;\n  passenger_enabled on;\n  client_max_body_size      10m; # Max attachemnt size\n}\n\nsystemctl start nginx\n# install redmine\nmkdir /var/data\ncd /var/data\nsvn co http://svn.redmine.org/redmine/branches/3.4-stable redmine\ncd /var/data/redmine\ncp -pR /var/data/redmine/config/database.yml.example /var/data/redmine/config/database.yml\nvim config/database.yml  # set redmine db user and password\n# Install Plugins\ncd /var/data/redmine\ngem install bundler --no-ri --no-rdoc\nbundle install\n# configure redmine\ncd /var/data/redmine\nmkdir public/plugin_assets\nchown -R www-data:www-data files log tmp public/plugin_assets config.ru\nchmod -R 755 files log tmp public/plugin_assets\n# input database and base file.\nRAILS_ENV=production bundle exec rake db:migrate\nRAILS_ENV=production bundle exec rake redmine:load_default_data\nbundle exec rake generate_secret_token\n# restart nginx, install ok.\nsystemctl restart nginx\n# restart redmine\ntouch /var/data/redmine/tmp/restart.txt\n# configure email service\nvim /var/data/redmine/config/configuration.yml\n")))}u.isMDXComponent=!0}}]);