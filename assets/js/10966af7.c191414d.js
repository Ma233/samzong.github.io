"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[25820],{67012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(17624),s=t(4552);const r={title:"Howto Install Redmine on Ubuntu 16.04",tags:["Tools"]},i=void 0,l={permalink:"/2017/12/02/Howto-Install-Redmine-on-Ubuntu-16.04",source:"@site/blog/2017-12-02-Howto-Install-Redmine-on-Ubuntu-16.04.md",title:"Howto Install Redmine on Ubuntu 16.04",description:"",date:"2017-12-02T00:00:00.000Z",formattedDate:"December 2, 2017",tags:[{label:"Tools",permalink:"/tags/tools"}],readingTime:1.16,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Howto Install Redmine on Ubuntu 16.04",tags:["Tools"]},unlisted:!1,prevItem:{title:"HowTo Use SSR Service on Mac",permalink:"/2017/11/15/Howto-use-ssr-on-mac"},nextItem:{title:"Git \u4f7f\u7528\u89c4\u8303\u6d41\u7a0b",permalink:"/2018/01/09/git-shi-yong-gui-fan-liu-cheng"}},o={authorsImageUrls:[]},d=[];function m(e){const n={code:"code",pre:"pre",...(0,s.M)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# base\napt install mysql-server libmysqlclient-dev git-core subversion imagemagick libmagickwand-dev libcurl4-openssl-dev \napt install build-essential mysql-server ruby ruby-dev libmysqlclient-dev imagemagick libmagickwand-dev\n# install mysql\nsystemctl enable mysql.service\nsystemctl start mysql.service\ncreate database redmine character set utf8;\ngrant all privileges on redmine.* to redmine@'localhost' identified by 'redmine';\nflush privileges;\n# Install ruby\ngpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3\ncurl -sSL https://get.rvm.io | bash -s stable\nsource /etc/profile.d/rvm.sh\nrvm requirements\nrvm install 2.4.1\nrvm use 2.4.1 --default\n# install passenger and nginx \ngem install passenger --no-ri --no-rdoc\npassenger-install-nginx-module\n# 1. auto install nginx.\ncurl https://raw.githubusercontent.com/makevoid/nginx-passenger-ubuntu/master/nginx/nginx.service > /lib/systemd/system/nginx.service\nsystemctl daemon-reload\nsystemctl enable nginx\nvim /opt/nginx/conf/nginx.conf # \u6ce8\u9500 location / {} \u7684\u914d\u7f6e\nserver {\n  listen  80;\n  server_name [your_server_domain_name] # redmine.com;\n  root /var/data/redmine/public;\n  passenger_enabled on;\n  client_max_body_size      10m; # Max attachemnt size\n}\n\nsystemctl start nginx\n# install redmine\nmkdir /var/data\ncd /var/data\nsvn co http://svn.redmine.org/redmine/branches/3.4-stable redmine\ncd /var/data/redmine\ncp -pR /var/data/redmine/config/database.yml.example /var/data/redmine/config/database.yml\nvim config/database.yml  # set redmine db user and password\n# Install Plugins\ncd /var/data/redmine\ngem install bundler --no-ri --no-rdoc\nbundle install\n# configure redmine\ncd /var/data/redmine\nmkdir public/plugin_assets\nchown -R www-data:www-data files log tmp public/plugin_assets config.ru\nchmod -R 755 files log tmp public/plugin_assets\n# input database and base file.\nRAILS_ENV=production bundle exec rake db:migrate\nRAILS_ENV=production bundle exec rake redmine:load_default_data\nbundle exec rake generate_secret_token\n# restart nginx, install ok.\nsystemctl restart nginx\n# restart redmine\ntouch /var/data/redmine/tmp/restart.txt\n# configure email service\nvim /var/data/redmine/config/configuration.yml\n"})})}function c(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>i});var a=t(11504);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);