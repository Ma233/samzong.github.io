"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[46987],{39668:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var t=r(17624),a=r(4552);const l={title:"HowTo Install NextCloud",tags:["Tools"],date:new Date("2017-02-27T14:57:00.000Z")},o=void 0,s={permalink:"/en/2017/02/27/HowTo-Install-NextCloud",source:"@site/blog/2017-02-27-HowTo-Install-NextCloud.md",title:"HowTo Install NextCloud",description:"\u968f\u7740\u6700\u8fd1\u4e00\u4e2a\u4e91\u76d8\u5382\u5bb6\u4e0d\u518d\u63d0\u4f9b\u4e2a\u4eba\u670d\u52a1\uff0c\u6216\u8005\u5f00\u59cb\u5404\u79cd\u6536\u8d39\u9650\u901f\uff0c\u81ea\u5df1\u5b58\u653e\u5728\u7b2c\u4e09\u65b9\u4e91\u76d8\u5382\u5546\u7684\u6570\u636e\u88ab\u76d7\u53d6\uff0c\u6570\u636e\u7684\u5b89\u5168\u6027\u548c\u6570\u636e\u7684\u7a33\u5b9a\u6027\u90fd\u5f97\u4e0d\u5230\u4fdd\u8bc1\uff0c\u800c\u4e14\u968f\u7740\u667a\u80fd\u7ec8\u7aef\u7684\u666e\u53ca\uff0c\u6211\u4e5f\u6709\u4e00\u4e9b\u66f4\u52a0\u9ad8\u8d28\u91cf\u7684\u56fe\u7247\u6587\u4ef6\u9700\u8981\u5927\u91cf\u50a8\u5b58\uff0c\u6240\u4ee5\u6211\u60f3\u5230\u4e86\u81ea\u5efa\u5b58\u50a8\u670d\u52a1\u7684\u65b9\u5f0f\uff0c\u5728\u7504\u522b\u4e86 OwnCloud\uff0cSeafiles \u548c NextCloud\uff0c\u6700\u540e\u9009\u62e9\u4e86 NextCloud \u4f5c\u4e3a\u81ea\u5df1\u4eca\u540e\u6570\u636e\u5b58\u50a8\u8282\u70b9\uff0cNextCloud \u6e90\u81ea OwnCloud\uff0c\u4f46\u662f\u8fd1\u4e9b\u5e74\u6765 OwnCloud \u7684\u53d1\u5c55\u8fdb\u5ea6\u51e0\u4e4e\u505c\u6ede\uff0c\u591a\u6570\u5f00\u53d1\u8005\u4e5f\u8f6c\u6218 NextCloud\uff0c\u5f53\u7136 NextCloud \u4e5f\u7ee7\u627f\u4e86\u642d\u5efa\u7b80\u5355\uff0c\u4f9d\u8d56\u4e8e PHP \u73af\u5883\u7684\u7279\u6027\u3002",date:"2017-02-27T14:57:00.000Z",formattedDate:"February 27, 2017",tags:[{label:"Tools",permalink:"/en/tags/tools"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Install NextCloud",tags:["Tools"],date:"2017-02-27T14:57:00.000Z"},unlisted:!1,prevItem:{title:"MacTips \u4f7f\u7528\u547d\u4ee4\u5173\u95ed\u548c\u542f\u52a8 AirPort",permalink:"/en/2017/02/27/mactips-shi-yong-ming-ling-guan-bi-he-qi-dong-airport"},nextItem:{title:"HowTo Install Redmine",permalink:"/en/2017/02/22/HowTo-Install-Redmine"}},i={authorsImageUrls:[]},d=[{value:"\u8fd0\u884c\u73af\u5883",id:"\u8fd0\u884c\u73af\u5883",level:2},{value:"\u642d\u5efa LNMP \u73af\u5883",id:"\u642d\u5efa-lnmp-\u73af\u5883",level:2},{value:"\u8f6f\u4ef6\u7248\u672c",id:"\u8f6f\u4ef6\u7248\u672c",level:3},{value:"\u57fa\u7840\u73af\u5883\u5b89\u88c5",id:"\u57fa\u7840\u73af\u5883\u5b89\u88c5",level:3},{value:"Install LNMP",id:"install-lnmp",level:3},{value:"\u4e0b\u8f7d NextCloud",id:"\u4e0b\u8f7d-nextcloud",level:3},{value:"\u914d\u7f6e Nginx \u548c php-fpm",id:"\u914d\u7f6e-nginx-\u548c-php-fpm",level:3},{value:"\u6587\u4ef6\u6743\u9650\u8c03\u6574",id:"\u6587\u4ef6\u6743\u9650\u8c03\u6574",level:3},{value:"\u521b\u5efa MySQL \u6570\u636e\u5e93",id:"\u521b\u5efa-mysql-\u6570\u636e\u5e93",level:3},{value:"\u521d\u59cb\u5316 NextCloud",id:"\u521d\u59cb\u5316-nextcloud",level:2},{value:"Other",id:"other",level:2},{value:"\u4fee\u6539\u9ed8\u8ba4 data \u76ee\u5f55",id:"\u4fee\u6539\u9ed8\u8ba4-data-\u76ee\u5f55",level:3},{value:"\u65e0\u6cd5\u767b\u9646\u5230\u4e2a\u4eba\u7528\u6237\u754c\u9762",id:"\u65e0\u6cd5\u767b\u9646\u5230\u4e2a\u4eba\u7528\u6237\u754c\u9762",level:3},{value:"\u589e\u52a0 redis \u7ec4\u4ef6\uff0c\u63d0\u9ad8\u6027\u80fd",id:"\u589e\u52a0-redis-\u7ec4\u4ef6\u63d0\u9ad8\u6027\u80fd",level:3},{value:"SSL \u8bc1\u4e66",id:"ssl-\u8bc1\u4e66",level:3},{value:"\u4f7f\u7528\u73b0\u72b6",id:"\u4f7f\u7528\u73b0\u72b6",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u968f\u7740\u6700\u8fd1\u4e00\u4e2a\u4e91\u76d8\u5382\u5bb6\u4e0d\u518d\u63d0\u4f9b\u4e2a\u4eba\u670d\u52a1\uff0c\u6216\u8005\u5f00\u59cb\u5404\u79cd\u6536\u8d39\u9650\u901f\uff0c\u81ea\u5df1\u5b58\u653e\u5728\u7b2c\u4e09\u65b9\u4e91\u76d8\u5382\u5546\u7684\u6570\u636e\u88ab\u76d7\u53d6\uff0c\u6570\u636e\u7684\u5b89\u5168\u6027\u548c\u6570\u636e\u7684\u7a33\u5b9a\u6027\u90fd\u5f97\u4e0d\u5230\u4fdd\u8bc1\uff0c\u800c\u4e14\u968f\u7740\u667a\u80fd\u7ec8\u7aef\u7684\u666e\u53ca\uff0c\u6211\u4e5f\u6709\u4e00\u4e9b\u66f4\u52a0\u9ad8\u8d28\u91cf\u7684\u56fe\u7247\u6587\u4ef6\u9700\u8981\u5927\u91cf\u50a8\u5b58\uff0c\u6240\u4ee5\u6211\u60f3\u5230\u4e86\u81ea\u5efa\u5b58\u50a8\u670d\u52a1\u7684\u65b9\u5f0f\uff0c\u5728\u7504\u522b\u4e86 OwnCloud\uff0cSeafiles \u548c NextCloud\uff0c\u6700\u540e\u9009\u62e9\u4e86 NextCloud \u4f5c\u4e3a\u81ea\u5df1\u4eca\u540e\u6570\u636e\u5b58\u50a8\u8282\u70b9\uff0cNextCloud \u6e90\u81ea OwnCloud\uff0c\u4f46\u662f\u8fd1\u4e9b\u5e74\u6765 OwnCloud \u7684\u53d1\u5c55\u8fdb\u5ea6\u51e0\u4e4e\u505c\u6ede\uff0c\u591a\u6570\u5f00\u53d1\u8005\u4e5f\u8f6c\u6218 NextCloud\uff0c\u5f53\u7136 NextCloud \u4e5f\u7ee7\u627f\u4e86\u642d\u5efa\u7b80\u5355\uff0c\u4f9d\u8d56\u4e8e PHP \u73af\u5883\u7684\u7279\u6027\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd0\u884c\u73af\u5883",children:"\u8fd0\u884c\u73af\u5883"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u963f\u91cc\u4e91 ECS CentOS 6.x"}),"\n",(0,t.jsx)(n.li,{children:"\u514d\u8d39 SSL \u8bc1\u4e66 (\u817e\u8baf\u4e91\u7533\u8bf7)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u642d\u5efa-lnmp-\u73af\u5883",children:"\u642d\u5efa LNMP \u73af\u5883"}),"\n",(0,t.jsx)(n.h3,{id:"\u8f6f\u4ef6\u7248\u672c",children:"\u8f6f\u4ef6\u7248\u672c"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["PHP 5.6.30   ",(0,t.jsx)(n.a,{href:"https://samzong.me/php54-centos6/",children:"\u5b89\u88c5\u6559\u7a0b"})]}),"\n",(0,t.jsxs)(n.li,{children:["MySQL 5.6.35  ",(0,t.jsx)(n.a,{href:"https://samzong.me/how-to-install-mysql-5-6-on-centos/",children:"\u5b89\u88c5\u6559\u7a0b"})]}),"\n",(0,t.jsx)(n.li,{children:"Nginx 1.10.2"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u57fa\u7840\u73af\u5883\u5b89\u88c5",children:"\u57fa\u7840\u73af\u5883\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[root@ultraera ~]# yum update -y\n[root@ultraera ~]# yum groupinstall -y "Base"\n[root@ultraera ~]# yum groupinstall -y "Development tools"\n\n# Install epel\n[root@ultraera ~]# yum install -y epel-release\n\n# Install remi\n[root@ultraera ~]# yum install http://rpms.famillecollet.com/enterprise/remi-release-6.rpm\n\n# Install mysql-community\n[root@ultraera ~]# yum install http://repo.mysql.com/yum/mysql-5.6-community/el/6/x86_64/mysql-community-release-el6-7.noarch.rpm\n'})}),"\n",(0,t.jsx)(n.h3,{id:"install-lnmp",children:"Install LNMP"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Install MySQL\n[root@ultraera ~]# yum --enablerepo=mysql-community install -y mysql-server mysql-libs mysql-devel\n[root@ultraera ~]# service mysqld start\n[root@ultraera ~]# mysql_secure_installation\n[root@ultraera ~]# chkconfig mysqld on\n\n# Install Nginx\n[root@ultraera ~]# yum --enablerepo=epel install -y nginx\n[root@ultraera ~]# service nginx start\n[root@ultraera ~]# chkconfig nginx on\n\n# Install PHP and php-fpm\n[root@ultraera ~]# yum --enablerepo=remi-php56 install php php-fpm php-mysql php-gd php-xml php-redis php-libs php-devel php-zlib\n[root@ultraera ~]# service php-fpm start\n[root@ultraera ~]# chkconfig php-fpm on\n[root@ultraera ~]# service nginx restart\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e0b\u8f7d-nextcloud",children:"\u4e0b\u8f7d NextCloud"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@ultraera ~]# wget https://download.nextcloud.com/server/releases/nextcloud-11.0.1.tar.bz2\n[root@ultraera ~]# tar xf nextcloud-11.0.1.tar.bz2\n[root@ultraera ~]# mv nextcloud-11.0.1 /opt/nextcloud\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u914d\u7f6e-nginx-\u548c-php-fpm",children:"\u914d\u7f6e Nginx \u548c php-fpm"}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u4e3a php-fpm \u9ed8\u8ba4\u8fd0\u884c\u7684\u7528\u6237\u8eab\u4efd\u662f apache\uff0c\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528\u7684\u73af\u5883\u662f nginx\uff0c\u6240\u6709\u8981\u4fee\u6539 php-fpm \u914d\u7f6e\u6587\u4ef6\u7684\u7528\u6237\u548c\u7ec4\uff0c\u6ce8\u610f\u4e0d\u8981\u4e3a\u4e86\u7701\u4e8b\u76f4\u63a5\u6539\u4e3a root\uff0c\u8fd9\u5728 php-fpm \u4e2d\u662f\u4e0d\u5141\u8bb8\u7684"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@ultraera ~]# vim /etc/php-fpm.d/www.conf\nuser=nginx\ngroup=nginx\n[root@ultraera ~]# service php-fpm restart\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u4e3a NextCloud \u9ed8\u8ba4\u662f\u4ee5 Apache \u7684\u8eab\u4efd\u8fd0\u884c\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5355\u72ec\u914d\u7f6e NextCloud \u7684 Nginx \u914d\u7f6e\u6587\u4ef6\uff0c\u4ee5\u4e0b\u914d\u7f6e\u6587\u4ef6\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u62ff\u53bb\u7528\uff0c\u6ce8\u610f\u5728\u6587\u4ef6\u4e2d\u8bf4\u660e\u4e86\uff0c\u9700\u8981\u4fee\u6539\u7684\u5730\u65b9\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[root@ultraera ~]# vim /etc/nginx/conf.d/nextcloud.conf\n upstream php-handler {\n   # \u8fd9\u91cc\u662f\u4f60php-fpm\u7684\u670d\u52a1\u7aef\u53e3\uff0c\u9ed8\u8ba4\u662f9000\n    server 127.0.0.1:9000;\n    #server unix:/var/run/php5-fpm.sock;\n}\n\nserver {\n   # \u4f60\u7684\u57df\u540d\n    listen pan.ultraera.org:80;\n    server_name pan.ultraera.org;\n    # enforce https\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    # \u4f60\u7684\u57df\u540d\n    listen pan.ultraera.org:443 ssl;\n    server_name pan.ultraera.org;\n\n   # \u4ee5\u4e0b\u662f\u4f60\u7684ssl\u8bc1\u4e66\u6587\u4ef6\u5b58\u653e\u8def\u5f84\n    ssl_certificate /etc/nginx/ssl/1_pan.ultraera.org_bundle.crt;\n    ssl_certificate_key /etc/nginx/ssl/2_pan.ultraera.org.key;\n\n    # Add headers to serve security related headers\n    # Before enabling Strict-Transport-Security headers please read into this\n    # topic first.\n    # add_header Strict-Transport-Security "max-age=15768000;\n    # includeSubDomains; preload;";\n    add_header X-Content-Type-Options nosniff;\n    add_header X-Frame-Options "SAMEORIGIN";\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Robots-Tag none;\n    add_header X-Download-Options noopen;\n    add_header X-Permitted-Cross-Domain-Policies none;\n add_header Strict-Transport-Security "max-age=15552000; includeSubdomains; ";\n\n    # \u8bbe\u5b9a\u4f60\u7684NextCloud\u7684\u6839\u76ee\u5f55\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u4fee\u6539\n    root /opt/nextcloud/;\n\n    location = /robots.txt {\n        allow all;\n        log_not_found off;\n        access_log off;\n    }\n\n    # The following 2 rules are only needed for the user_webfinger app.\n    # Uncomment it if you\'re planning to use this app.\n    #rewrite ^/.well-known/host-meta /public.php?service=host-meta last;\n    #rewrite ^/.well-known/host-meta.json /public.php?service=host-meta-json\n    # last;\n\n    location = /.well-known/carddav {\n      return 301 $scheme://$host/remote.php/dav;\n    }\n    location = /.well-known/caldav {\n      return 301 $scheme://$host/remote.php/dav;\n    }\n\n    # set max upload size\n    client_max_body_size 512M;\n    fastcgi_buffers 64 4K;\n\n    # Disable gzip to avoid the removal of the ETag header\n    gzip off;\n\n    # Uncomment if your server is build with the ngx_pagespeed module\n    # This module is currently not supported.\n    #pagespeed off;\n\n    error_page 403 /core/templates/403.php;\n    error_page 404 /core/templates/404.php;\n\n    location / {\n        rewrite ^ /index.php$uri;\n   }\n\n    location ~ ^/(?:build|tests|config|lib|3rdparty|templates|data)/ {\n        deny all;\n    }\n    location ~ ^/(?:\\.|autotest|occ|issue|indie|db_|console) {\n        deny all;\n    }\n\n    location ~ ^/(?:index|remote|public|cron|core/ajax/update|status|ocs/v[12]|updater/.+|ocs-provider/.+|core/templates/40[34])\\.php(?:$|/) {\n        include fastcgi_params;\n        fastcgi_split_path_info ^(.+\\.php)(/.*)$;\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param PATH_INFO $fastcgi_path_info;\n        fastcgi_param HTTPS on;\n        #Avoid sending the security headers twice\n        fastcgi_param modHeadersAvailable true;\n        fastcgi_param front_controller_active true;\n        fastcgi_pass php-handler;\n        fastcgi_intercept_errors on;\n        fastcgi_request_buffering off;\n    }\n\n    location ~ ^/(?:updater|ocs-provider)(?:$|/) {\n        try_files $uri/ =404;\n        index index.php;\n    }\n\n    # Adding the cache control header for js and css files\n    # Make sure it is BELOW the PHP block\n    location ~* \\.(?:css|js|woff|svg|gif)$ {\n        try_files $uri /index.php$uri$is_args$args;\n        add_header Cache-Control "public, max-age=7200";\n        # Add headers to serve security related headers (It is intended to\n        # have those duplicated to the ones above)\n        # Before enabling Strict-Transport-Security headers please read into\n        # this topic first.\n        # add_header Strict-Transport-Security "max-age=15768000;\n        #  includeSubDomains; preload;";\n        add_header X-Content-Type-Options nosniff;\n        add_header X-Frame-Options "SAMEORIGIN";\n        add_header X-XSS-Protection "1; mode=block";\n        add_header X-Robots-Tag none;\n        add_header X-Download-Options noopen;\n        add_header X-Permitted-Cross-Domain-Policies none;\n        # Optional: Don\'t log access to assets\n        access_log off;\n    }\n\n    location ~* \\.(?:png|html|ttf|ico|jpg|jpeg)$ {\n        try_files $uri /index.php$uri$is_args$args;\n        # Optional: Don\'t log access to other assets\n        access_log off;\n    }\n}\n[root@ultraera ~]# service nginx restart\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u6587\u4ef6\u6743\u9650\u8c03\u6574",children:"\u6587\u4ef6\u6743\u9650\u8c03\u6574"}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u4e3a NextCloud \u8fd0\u884c\u662f\u4ee5 nginx \u7a0b\u5e8f\uff0c\u6ce8\u610f\u4fee\u6539\u76ee\u5f55\u6240\u5c5e\u7528\u6237\u548c\u7ec4\u4e3a nginx"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@ultraera ~]# chown -R nginx:nginx /opt/nextcloud\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u521b\u5efa-mysql-\u6570\u636e\u5e93",children:"\u521b\u5efa MySQL \u6570\u636e\u5e93"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mysql> CREATE DATABASE nextcloud CHARACTER SET UTF-8;\nmysql> GRANT ALL PRIVILEGES ON nextcloud.* TO 'nextcloud'@'localhost' IDENTIFIED BY 'your_password';\nmysql> FLUSH PRIVILEGES;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u521d\u59cb\u5316-nextcloud",children:"\u521d\u59cb\u5316 NextCloud"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6d4f\u89c8\u5668\u6253\u5f00\u4f60\u5728 nginx \u4e2d\u914d\u7f6e\u7684\u57df\u540d\uff0cNextCloud \u521d\u59cb\u5316\u975e\u5e38\u7b80\u5355\uff0c\u8bbe\u5b9a\u4e00\u4e2a\u7ba1\u7406\u5458\u8d26\u6237\u548c\u5bc6\u7801\uff0c\u7136\u540e\u8bbe\u5b9a\u6570\u636e\u5e93\u5373\u53ef\uff0c\u6309\u7167\u6211\u4eec\u4e0a\u4e00\u6b65\u9488\u5bf9 MySQL \u7684\u8bbe\u5b9a\uff0c\u4f60\u4f1a\u975e\u5e38\u6e05\u695a\u5730\u77e5\u9053\u4f60\u7684\u6570\u636e\u5e93\u4fe1\u606f\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.samzong.me/202307191530733.png?imageView2/3/w/400/interlace/1/q/50",alt:"image"})}),"\n",(0,t.jsx)(n.p,{children:"\u767b\u5f55\u4e4b\u540e\u7684\u754c\u9762\u662f\u8fd9\u6837\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.samzong.me/202307191530734.png?imageView2/3/w/400/interlace/1/q/50",alt:"image"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u5728\u767b\u5f55\u4e4b\u540e\uff0c\u5728\u4f60\u7684\u53f3\u4e0a\u89d2\u70b9\u51fb\u5934\u50cf\u9009\u62e9 Admin \u8fdb\u5165\u7ba1\u7406\u754c\u9762\u67e5\u770b\u548c\u4fee\u6539\u4f60\u7684\u670d\u52a1\u5668\u8bbe\u7f6e\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e0a\u65b9\u770b\u5230\u4f60\u7684\u670d\u52a1\u5668\u73b0\u6709\u54ea\u4e9b\u95ee\u9898\uff0c\u4f1a\u6709\u5bf9\u5e94\u6587\u6863\u63d0\u9192\u4f60\u5982\u4f55\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.samzong.me/202307191530735.png?imageView2/3/w/400/interlace/1/q/50",alt:"image"})}),"\n",(0,t.jsx)(n.h2,{id:"other",children:"Other"}),"\n",(0,t.jsx)(n.h3,{id:"\u4fee\u6539\u9ed8\u8ba4-data-\u76ee\u5f55",children:"\u4fee\u6539\u9ed8\u8ba4 data \u76ee\u5f55"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6211\u4eec\u9996\u6b21\u6253\u5f00 NextCloud \u7f51\u9875\u65f6\uff0c\u9700\u8981\u6211\u4eec\u8bbe\u5b9a datadir \u76ee\u5f55\uff0c\u8fd9\u91cc\u6709\u4e2a\u9ed8\u8ba4\u76ee\u5f55\u5728 nextcloud \u9879\u76ee\u5305\uff0c\u8fd9\u5176\u5b9e\u662f\u4e0d\u5b89\u5168\u7684\uff0c\u6211\u4eec\u6700\u540e\u5c06\u76ee\u5f55\u8def\u5f84\u4fee\u6539\u4e3a\u5176\u4ed6\u4f4d\u7f6e\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@ultraera ~]# mkdir /nextcloud_files/\n[root@ultraera ~]# chown -R nginx:nginx /nextcloud_files/\n\n# \u4fee\u6539datadirectory\u7684\u8def\u5f84\n[root@ultraera ~]# vim /opt/nextcloud/config/config.php\ndatadirectory' => '/nextcloud/data\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u65e0\u6cd5\u767b\u9646\u5230\u4e2a\u4eba\u7528\u6237\u754c\u9762",children:"\u65e0\u6cd5\u767b\u9646\u5230\u4e2a\u4eba\u7528\u6237\u754c\u9762"}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u5728\u5b89\u88c5\u65f6\u78b0\u5230\u8fd9\u4e2a\u95ee\u9898\uff0c\u6298\u817e\u4e86\u5f88\u4e45\u624d\u89e3\u51b3\uff0c\u56e0\u4e3a\u6211\u4eec\u662f\u4f7f\u7528 nginx \u7a0b\u5e8f\uff0c\u4f46\u662f php-fpm \u9ed8\u8ba4\u7528\u6237\u8eab\u4efd\u4e3a apache\uff0c\u6240\u4ee5",(0,t.jsx)(n.code,{children:"/var/lib/php/session"}),"\u76ee\u5f55\u7684\u6240\u5c5e\u7528\u6237\u548c\u7ec4\u90fd\u662f apache\uff0c\u5bfc\u81f4\u6211\u4eec\u6ca1\u6709\u6743\u9650\u53bb\u5199\u5165 session\uff0c\u6240\u4ee5\u65e0\u6cd5\u767b\u5165\u7cfb\u7edf\uff0c\u62a5\u9519\u4fe1\u606f\u53ef\u4ee5\u5728 NextCloud \u7684 log \u6587\u4ef6\u4e0b\u770b\u5230\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[root@ultraera ~]# tail -n 1 /usr/nextcloud/data/nextcloud.log\n{"reqId":"NNnIwMCCPDMQtzZW5Ndc","remoteAddr":"180.166.66.226","app":"PHP","message":"session_write_close(): Failed to write session data (files). Please verify that the current setting of session.save_path is correct (\\/var\\/lib\\/php\\/session) at \\/usr\\/nextcloud\\/lib\\/private\\/Session\\/Internal.php#104","level":3,"time":"2017-02-24T10:46:13+00:00","method":"POST","url":"\\/index.php","user":"samzong","version":"11.0.0.10"}\n\n# \u4fee\u6539/var/lib/php/\u7684\u5c5e\u7ec4\u4e3anginx\u5373\u53ef\n[root@ultraera ~]# chgrp -R nginx /var/lib/php\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u589e\u52a0-redis-\u7ec4\u4ef6\u63d0\u9ad8\u6027\u80fd",children:"\u589e\u52a0 redis \u7ec4\u4ef6\uff0c\u63d0\u9ad8\u6027\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u5173\u4e8e\u5982\u4f55\u5b89\u88c5 redis \u6211\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\u4e5f\u6709\u8bb2\u5230\uff0c\u5927\u5bb6\u53ef\u4ee5\u53bb\u770b\u4e0b ",(0,t.jsx)(n.a,{href:"https://samzong.me/redis01/",children:"\u5b89\u88c5\u6559\u7a0b"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@ultraera ~]# yum --enablerepo=remi install -y redis\n\n# \u589e\u52a0php\u7684redis\u63d2\u4ef6\n[root@ultraera ~]# yum --enablerepo=remi-php56 install php-redis\n\n# \u914d\u7f6e\u6587\u4ef6\u589e\u52a0redis\n  'memcache.local' => '\\\\OC\\\\Memcache\\\\Redis',\n  'memcache.locking' => '\\\\OC\\\\Memcache\\\\Redis',\n  'redis' =>\n   array (\n    'host' => 'localhost',\n    'port' => 6379,\n   )\n\n# \u91cd\u542f\u4ee4\u670d\u52a1\u751f\u6548\n[root@ultraera ~]# service php-fpm restart\n[root@ultraera ~]# service nginx restart\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u7684 NextCloud \u914d\u7f6e\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"<?php\n$CONFIG = array (\n  'memcache.local' => '\\\\OC\\\\Memcache\\\\Redis',\n  'memcache.locking' => '\\\\OC\\\\Memcache\\\\Redis',\n  'redis' =>\n  array (\n    'host' => 'localhost',\n    'port' => 6379,\n  ),\n  'enable_previews' => false,\n  'instanceid' => 'ockhup01dxbf',\n  'passwordsalt' => 'TlJgWGrE0N7vOrRfZkOojwdYh/BixL',\n  'secret' => '/IQh0LioZp5eYFQJhicY7n324Q80WQUYOzWL+8OcxcXVw3Ef',\n  'trusted_domains' =>\n  array (\n    0 => 'pan.ultraera.org',\n  ),\n  'datadirectory' => '/nextcloud',\n  'overwrite.cli.url' => 'https://pan.ultraera.org',\n  'dbtype' => 'mysql',\n  'version' => '11.0.0.10',\n  'dbname' => 'nextcloud',\n  'dbhost' => 'localhost',\n  'dbport' => '',\n  'dbtableprefix' => 'oc_',\n  'dbuser' => 'nextcloud',\n  'dbpassword' => 'nextcloud',\n  'logtimezone' => 'CST',\n  'installed' => true,\n  'mail_from_address' => 'luchuanjia',\n  'mail_smtpmode' => 'php',\n  'mail_domain' => 'msn.com',\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"ssl-\u8bc1\u4e66",children:"SSL \u8bc1\u4e66"}),"\n",(0,t.jsx)(n.p,{children:"\u73b0\u56fd\u5185\u63d0\u4f9b\u514d\u8d39\u7684 SSL \u8bc1\u4e66\u7684\u670d\u52a1\u5546\u5f88\u591a\uff0c\u4f5c\u4e3a\u4e2a\u4eba\u7ad9\u70b9\uff0c\u514d\u8d39 SSL \u8bc1\u4e66\u662f\u4e2a\u633a\u4e0d\u9519\u7684\u9009\u62e9\uff0c\u6211\u5728\u4e4b\u524d nginx \u914d\u7f6e\u65f6\u5c06 ssl \u7684\u914d\u7f6e\u65b9\u5f0f\u5199\u5728\u4e86\u914d\u7f6e\u6587\u4ef6\u4e2d\u4e86\uff0c\u6ce8\u610f\u5982\u679c\u4e0d\u542f\u7528 ssl \u65f6\uff0c\u4e0d\u8981\u542f\u7528 https \u7684\u865a\u62df\u4e3b\u673a\uff0c\u5f53\u7136\u4f60\u53ef\u4ee5\u81ea\u5df1\u751f\u6210\u4e00\u4e2a ssl \u8bc1\u4e66\u6765\u63d0\u4f9b\u670d\u52a1\uff0c\u4f46\u8fd9\u6837\u5728\u522b\u4eba\u8bbf\u95ee\u4f60\u7684\u7f51\u7ad9\u65f6\uff0c\u4f1a\u4e0d\u63d0\u793a\u4e0d\u53d7\u4fe1\u4efb\u7684\u8bc1\u4e66\uff0c\u5177\u4f53\u5982\u4f55\u83b7\u53d6\u7684\u8bc1\u4e66\u7684\u65b9\u5f0f\uff0c\u56e0\u5404\u4e2a\u5382\u5bb6\u65b9\u5f0f\u6709\u4e9b\u533a\u522b\uff0c\u8fd9\u91cc\u5c31\u4e0d\u8d58\u8ff0\uff0c\u53ef\u4ee5\u8054\u7cfb\u5bf9\u5e94\u7684\u5382\u5546\u7684\u6280\u672f\u4eba\u5458\u54a8\u8be2\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u73b0\u72b6",children:"\u4f7f\u7528\u73b0\u72b6"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5c06\u670d\u52a1\u642d\u5efa\u5b8c\u6210\u4e4b\u540e\uff0c\u5bf9\u4e8e\u5b58\u50a8\u7684\u6587\u4ef6\u52a0\u5bc6\uff0c\u73b0\u5728\u901a\u8fc7 jobs\uff0c\u6bcf\u65e5\u51cc\u6668\u5c06\u6587\u4ef6\u63a8\u9001\u5230 oss \u5185\uff0c\u4fdd\u5b58 2 \u5929\u7684\u6570\u636e\uff0c\u907f\u514d\u56e0\u4e3a\u670d\u52a1\u5668\u5b95\u673a\u5bfc\u81f4\u6587\u4ef6\u4e22\u5931\uff1b\u4f7f\u7528\u7aef\uff0c\u81ea\u5df1\u7684\u7535\u8111\u548c\u624b\u673a\uff0c\u8fd8\u6709\u5bb6\u4eba\u7684\u624b\u673a\uff0c\u90fd\u5b89\u88c5\u4e86\u5e94\u7528\uff0c\u540e\u53f0\u81ea\u52a8\u5c06\u62cd\u7167\u56fe\u7247\u7b49\u81ea\u52a8\u4e0a\u4f20\u5230\u4e91\u76d8\uff0c\u4f7f\u7528\u8d77\u6765\u76ee\u524d\u5f88\u7a33\u5b9a\uff0c\u53ea\u662f iOS \u5e94\u7528\u662f\u6536\u8d39\u7684\uff0c\u56e0\u4e3a NextCloud \u6e90\u4e8e OwnCloud\uff0c\u5982\u679c\u4f60\u4e4b\u524d\u8d2d\u4e70\u4e86 OwnCloud \u7684 App \u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u5f53\u7136 NextCloud \u4e5f\u6709\u5f88\u591a\u5176\u4ed6\u529f\u80fd\uff0c\u53ef\u4ee5\u6839\u636e\u4f60\u7684\u5b9e\u9645\u9700\u6c42\u53d1\u6398\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>s,M:()=>o});var t=r(11504);const a={},l=t.createContext(a);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);