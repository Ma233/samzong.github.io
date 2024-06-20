"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[68424],{53600:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>i,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var o=t(17624),s=t(4552);const c={title:"Manage Tomcat Service Use Shell Script",tags:["Linux"],date:new Date("2016-07-27T02:18:24.000Z")},a=void 0,m={permalink:"/2016/07/27/Manage-Tomcat-Service-Use-Shell-Script",source:"@site/blog/2016-07-27-Manage-Tomcat-Service-Use-Shell-Script.md",title:"Manage Tomcat Service Use Shell Script",description:"Tomcat \u9879\u76ee\u7ba1\u7406\u4ea4\u4e92\u5f0f\u811a\u672c",date:"2016-07-27T02:18:24.000Z",formattedDate:"July 27, 2016",tags:[{label:"Linux",permalink:"/tags/linux"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Manage Tomcat Service Use Shell Script",tags:["Linux"],date:"2016-07-27T02:18:24.000Z"},unlisted:!1,prevItem:{title:"Yum \u4e2d$releasever \u548c$basearch \u7684\u53d6\u503c",permalink:"/2016/07/27/yum-zhong-releasever-he-basearch-de-qu-zhi"},nextItem:{title:"HowTo Play Pokemon GO in China",permalink:"/2016/07/24/HowTo-Play-Pokemon-GO-in-China"}},r={authorsImageUrls:[]},h=[{value:"Tomcat \u9879\u76ee\u7ba1\u7406\u4ea4\u4e92\u5f0f\u811a\u672c",id:"tomcat-\u9879\u76ee\u7ba1\u7406\u4ea4\u4e92\u5f0f\u811a\u672c",level:4}];function p(n){const e={code:"code",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,s.M)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h4,{id:"tomcat-\u9879\u76ee\u7ba1\u7406\u4ea4\u4e92\u5f0f\u811a\u672c",children:"Tomcat \u9879\u76ee\u7ba1\u7406\u4ea4\u4e92\u5f0f\u811a\u672c"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Install pssh"}),"\n",(0,o.jsx)(e.li,{children:"Use Key Login Server Hosts"}),"\n",(0,o.jsx)(e.li,{children:"~/.ssh/config \u914d\u7f6e\u4f7f\u7528 host \u540d\u767b\u5f55\u670d\u52a1"}),"\n",(0,o.jsx)(e.li,{children:"\u6307\u5b9a Server Group Files \u5b58\u653e\u4f4d\u7f6e"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'#!/bin/bash\n\n# Author Alex LU\n# Date 2016-07-20\n# Version 1.0\n\n# HostFile\nHostDIR=~/.ssh/host/\n\n# war\u5305\u4e0a\u4f20\u5230\u8be5\u76ee\u5f55\n# /warfolder\n\n:\'\njobs_select (){\n    STRING=``cat $vmname | grep group\n    if [ -z "$STRING" ]\n    then\n        job_tomcat\n    else\n        job2_tomcat\n    fi\n}\n\'\n\nfunction HOST()\n{\n    echo ""\n    echo "############ Host List ###############"\n    echo "ckgroup:ck01,ck02,ck03,ck04"\n    echo "sjgroup:sj01,sj02,sj03,sj04"\n    echo "ddgroup:dd01,dd02,dd03,dd04"\n    echo "htgroup:ht01,ht02"\n    echo "othergroup:report,tg"\n    echo "######################################"\n    echo ""\n    echo " Tips: \u5982\u679c\u8981\u9009\u62e9ck01\uff0c\u5219\u8f93\u5165ck01\u5373\u53ef\uff0c\u5982\u679c\u8f93\u5165ck\u7ec4\uff0c\u8f93\u5165ckgroup\u5373\u53ef,\u5982\u679c\u8981\u9000\u51fa\u5f53\u524d\u811a\u672c\u8f93\u5165exit"\n    echo " Tips: \u9000\u56de\u4e0a\u4e00\u6b65\u8bf7\u8f93\u5165back"\n    read -p "\u8bf7\u8f93\u5165\u4f60\u7684\u9009\u62e9:" vmname\n\n    case "$vmname" in\n        ck01|ck02|ck03|ck04|sj01|sj02|sj03|sj04|dd01|dd02|dd03|dd04|report|tg|ht01|ht02)\n            job_tomcat $vmname\n            ;;\n        ckgroup|sjgroup|htgroup|ddgroup|othergroup)\n            job2_tomcat $vmname\n            ;;\n        exit)\n            exit 0;\n            ;;\n        back)\n            clear\n            echo ""\n            echo "Tips: \u6b22\u8fce\u4f7f\u7528Tomcat\u9879\u76ee\u670d\u52a1\u7ba1\u7406\u5de5\u5177,\u60a8\u9700\u8981\u9884\u5148\u5b89\u88c5pssh\u5de5\u5177\uff0c\u4ee5\u53ca\u914d\u7f6e\u597dssh\u514d\u5bc6\u767b\u5f55\u5230\u670d\u52a1\u5668"\n            main\n            ;;\n        *)\n            echo "\u8bf7\u8f93\u5165\u7684\u9009\u62e9!"\n            HOST\n            ;;\n    esac\n}\n\nfunction job_tomcat ()\n{\n    echo ""\n    echo "############ \u52a8\u4f5c ###############"\n    echo "  1. \u67e5\u770b\u5f53\u524dtomcat7\u72b6\u6001"\n    echo "  2. \u5173\u95edtomcat7"\n    echo "  3. \u542f\u52a8tomcat7"\n    echo "  4. \u91cd\u542ftomcat7"\n    echo "  5. \u83b7\u53d6\u6700\u8fd1200\u884c\u65e5\u5fd7"\n    echo "  6. \u91cd\u65b0\u9009\u62e9\u4e3b\u673a"\n    echo "  7. \u56de\u5230\u9876\u5c42\u76ee\u5f55"\n    echo ""\n    echo "#################################"\n\n    read -p "\u8bf7\u8f93\u5165\u4f60\u7684\u9009\u62e9:" service_tomcat\n\n    case $service_tomcat in\n        1)\n        pssh -H $vmname -i "ps aux | grep tomcat"\n        job_tomcat\n        ;;\n        2)\n        pssh -H $vmname -i "service tomcat7 stop"\n        # tips\uff1a \u4e0b\u9762grep\u7684\u5b57\u7b26\u4e32\u8981\u548c\u4f60\u7684tomcat\u9879\u76ee\u540d\u79f0\u5951\u5408\n        pssh -H $vmname -i "ps aux | grep tomcat7 | awk \'{print $2}\' | xargs kill -9 "\n        # tips: \u4e0b\u9762\u7528\u5230\u7684\u8def\u5f84\u4e3a\u7edd\u5bf9\u8def\u5f84\uff0c\u8bf7\u66f4\u6539\u4e3a\u81ea\u5df1tomcat\u7684\u76ee\u5f55\uff0c\u4e5f\u53ef\u4ee5\u5728\u524d\u9762\u589e\u52a0\u81ea\u5b9a\u4e49\u53d8\u91cf\n        pssh -H $vmname -i "rm -rf /tomcat7/work/*"\n        pssh -H $vmname -i "rm -rf /tomcat7/logs/*"\n        pssh -H $vmname -i "rm -rf /tomcat7/temp/*"\n        job_tomcat\n        ;;\n        3)\n        pssh -H $vmname -i "service tomcat7 start"\n        job_tomcat\n        ;;\n        4)\n        pssh -H $vmname -i "service tomcat7 stop"\n        # tips\uff1a \u4e0b\u9762grep\u7684\u5b57\u7b26\u4e32\u8981\u548c\u4f60\u7684tomcat\u9879\u76ee\u540d\u79f0\u5951\u5408\n        pssh -H $vmname -i "ps aux | grep tomcat7 | awk \'{print $2}\' | xargs kill -9 "\n        # tips: \u4e0b\u9762\u7528\u5230\u7684\u8def\u5f84\u4e3a\u7edd\u5bf9\u8def\u5f84\uff0c\u8bf7\u66f4\u6539\u4e3a\u81ea\u5df1tomcat\u7684\u76ee\u5f55\uff0c\u4e5f\u53ef\u4ee5\u5728\u524d\u9762\u589e\u52a0\u81ea\u5b9a\u4e49\u53d8\u91cf\n        pssh -H $vmname -i "rm -rf /tomcat7/work/*"\n        pssh -H $vmname -i "rm -rf /tomcat7/logs/*"\n        pssh -H $vmname -i "rm -rf /tomcat7/temp/*"\n        sleep 1\n        pssh -H $vmname -i "service tomcat7 start"\n        job_tomcat\n        ;;\n        5)\n        pssh -H $vmname -i "tail -n 200 /tomcat7/logs/catalina.out"\n        job_tomcat\n        ;;\n        6)\n        echo ""\n        HOST\n        ;;\n        7)\n        clear\n        echo ""\n        echo "Tips: \u6b22\u8fce\u4f7f\u7528Tomcat\u9879\u76ee\u670d\u52a1\u7ba1\u7406\u5de5\u5177,\u60a8\u9700\u8981\u9884\u5148\u5b89\u88c5pssh\u5de5\u5177\uff0c\u4ee5\u53ca\u914d\u7f6e\u597dssh\u514d\u5bc6\u767b\u5f55\u5230\u670d\u52a1\u5668"\n        main\n        ;;\n        *)\n        echo "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u9009\u9879\uff01"\n        job_tomcat\n        ;;\n    esac\n}\n\nfunction job2_tomcat ()\n{\n    echo ""\n    echo "############ \u52a8\u4f5c ###############"\n    echo "  1. \u67e5\u770b\u5f53\u524dtomcat7\u72b6\u6001"\n    echo "  2. \u5173\u95edtomcat7"\n    echo "  3. \u542f\u52a8tomcat7"\n    echo "  4. \u91cd\u542ftomcat7"\n    echo "  5. \u83b7\u53d6\u6700\u8fd1200\u884c\u65e5\u5fd7"\n    echo "  6. \u91cd\u65b0\u9009\u62e9\u4e3b\u673a"\n    echo "  7. \u56de\u5230\u9876\u5c42\u76ee\u5f55"\n    echo ""\n    echo "################################"\n\n    read -p "\u8bf7\u8f93\u5165\u4f60\u7684\u9009\u62e9:" service_tomcat\n\n    case $service_tomcat in\n        1)\n        pssh -h $HostDIR/$vmname -i "ps aux | grep tomcat"\n        job2_tomcat\n        ;;\n        2)\n        pssh -h $HostDIR/$vmname -i "service tomcat7 stop"\n        # tips\uff1a \u4e0b\u9762grep\u7684\u5b57\u7b26\u4e32\u8981\u548c\u4f60\u7684tomcat\u9879\u76ee\u540d\u79f0\u5951\u5408\n        pssh -h $HostDIR/$vmname -i "ps aux | grep tomcat7 | awk \'{print $2}\' | xargs kill -9 "\n        # tips: \u4e0b\u9762\u7528\u5230\u7684\u8def\u5f84\u4e3a\u7edd\u5bf9\u8def\u5f84\uff0c\u8bf7\u66f4\u6539\u4e3a\u81ea\u5df1tomcat\u7684\u76ee\u5f55\uff0c\u4e5f\u53ef\u4ee5\u5728\u524d\u9762\u589e\u52a0\u81ea\u5b9a\u4e49\u53d8\u91cf\n        pssh -h $HostDIR/$vmname -i "rm -rf /tomcat7/work/*"\n        pssh -h $HostDIR/$vmname -i "rm -rf /tomcat7/logs/*"\n        pssh -h $HostDIR/$vmname -i "rm -rf /tomcat7/temp/*"\n        job2_tomcat\n        ;;\n        3)\n        pssh -h $HostDIR/$vmname -i "service tomcat7 start"\n        job2_tomcat\n        ;;\n        4)\n        pssh -h $HostDIR/$vmname -i "service tomcat7 stop"\n        # tips\uff1a \u4e0b\u9762grep\u7684\u5b57\u7b26\u4e32\u8981\u548c\u4f60\u7684tomcat\u9879\u76ee\u540d\u79f0\u5951\u5408\n        pssh -h $HostDIR/$vmname -i "ps aux | grep tomcat7 | awk \'{print $2}\' | xargs kill -9 "\n        # tips: \u4e0b\u9762\u7528\u5230\u7684\u8def\u5f84\u4e3a\u7edd\u5bf9\u8def\u5f84\uff0c\u8bf7\u66f4\u6539\u4e3a\u81ea\u5df1tomcat\u7684\u76ee\u5f55\uff0c\u4e5f\u53ef\u4ee5\u5728\u524d\u9762\u589e\u52a0\u81ea\u5b9a\u4e49\u53d8\u91cf\n        pssh -h $HostDIR/$vmname -i "rm -rf /tomcat7/work/*"\n        pssh -h $HostDIR/$vmname -i "rm -rf /tomcat7/logs/*"\n        pssh -h $HostDIR/$vmname -i "rm -rf /tomcat7/temp/*"\n        sleep 1\n        pssh -h $HostDIR/$vmname -i "service tomcat7 start"\n        job2_tomcat\n        ;;\n        5)\n        pssh -h $HostDIR/$vmname -i "tail -n 200 /tomcat7/logs/catalina.out"\n        job2_tomcat\n        ;;\n        6)\n        echo ""\n        HOST\n        ;;\n        7)\n        clear\n        echo ""\n        echo "Tips: \u6b22\u8fce\u4f7f\u7528Tomcat\u9879\u76ee\u670d\u52a1\u7ba1\u7406\u5de5\u5177,\u60a8\u9700\u8981\u9884\u5148\u5b89\u88c5pssh\u5de5\u5177\uff0c\u4ee5\u53ca\u914d\u7f6e\u597dssh\u514d\u5bc6\u767b\u5f55\u5230\u670d\u52a1\u5668"\n        main\n        ;;\n        *)\n        echo "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u9009\u9879\uff01"\n        job_tomcat\n        ;;\n    esac\n}\n\nfunction HOST2()\n{\n    echo ""\n    echo "############ Host List ###############"\n    echo "ckgroup:ck01,ck02,ck03,ck04"\n    echo "sjgroup:sj01,sj02,sj03,sj04"\n    echo "ddgroup:dd01,dd02,dd03,dd04"\n    echo "htgroup:ht01,ht02"\n    echo "othergroup:report,tg"\n    echo "######################################"\n    echo ""\n# \u786e\u8ba4\u662f\u5426\u6240\u6709\u9879\u76ee\u5305\u53d1\u5e03\u540e\u7acb\u5373\u542f\u52a8\n    echo -e "\\033[7m \u66f4\u65b0\u8ba2\u5355\u670d\u52a1\u5668\u7684war\u5305\u65f6\uff0c\u4f1a\u81ea\u52a8\u542f\u52a8tomcat\u7a0b\u5e8f\uff0c\u4e3a\u4e86\u91ca\u653ewar\u5305\uff0c\u4fee\u6539order.no\uff0c\u8bf7\u8bbe\u7f6ewar\u5305\u5185order.no\uff1d0 ,\u5176\u5b83\u670d\u52a1\u5668tomcat\u4e0d\u4f1a\u81ea\u542f\u52a8\uff0c\u8bf7\u4f7f\u7528\u547d\u4ee4\u64cd\u4f5c \\033[0m"\n    echo " Tips: \u5982\u679c\u8981\u9009\u62e9ck01\uff0c\u5219\u8f93\u5165ck01\u5373\u53ef\uff0c\u5982\u679c\u8f93\u5165ck\u7ec4\uff0c\u8f93\u5165ckgroup\u5373\u53ef,\u5982\u679c\u8981\u9000\u51fa\u5f53\u524d\u811a\u672c\u8f93\u5165exit"\n    echo " Tips: \u9000\u56de\u4e0a\u4e00\u6b65\u8bf7\u8f93\u5165back"\n    read -p "\u8bf7\u8f93\u5165\u4f60\u7684\u9009\u62e9:" vmname\n    case "$vmname" in\n        ck01|ck02|ck03|ck04|sj01|sj02|sj03|sj04|dd01|dd02|dd03|dd04|report|tg|ht01|ht02)\n            read -p "\u8bf7\u8f93\u5165war\u5305\u7684\u540d\u79f0,\u4f8b\u5982:dzcx_ck.war :" warname\n            pscp_tomcat $vmname $warname\n            ;;\n        ckgroup|sjgroup|htgroup|othergroup)\n            read -p "\u8bf7\u8f93\u5165war\u5305\u7684\u540d\u79f0,\u4f8b\u5982:dzcx_ck.war :" warname\n            pscp2_tomcat $vmname $warname\n            ;;\n        ddgroup)\n            read -p "\u8bf7\u8f93\u5165war\u5305\u7684\u540d\u79f0,\u4f8b\u5982:dzcx_ck.war :" warname\n            pscp3_tomcat $vmname $warname\n            ;;\n        exit)\n            exit 0;\n            ;;\n        back)\n            clear\n            echo ""\n            echo "Tips: \u6b22\u8fce\u4f7f\u7528Tomcat\u9879\u76ee\u670d\u52a1\u7ba1\u7406\u5de5\u5177,\u60a8\u9700\u8981\u9884\u5148\u5b89\u88c5pssh\u5de5\u5177\uff0c\u4ee5\u53ca\u914d\u7f6e\u597dssh\u514d\u5bc6\u767b\u5f55\u5230\u670d\u52a1\u5668"\n            main\n            ;;\n        *)\n            echo "\u8bf7\u8f93\u5165\u7684\u9009\u62e9!"\n            HOST\n            ;;\n    esac\n}\n\nfunction pscp_tomcat ()\n{\n    # single host\n    pscp.pssh -H $vmname /warfolder/"$warname" /tomcat7/webapps/\n    HOST2\n}\n\nfunction pscp2_tomcat ()\n{\n    # group\n    pscp.pssh -h $HostDIR/$vmname /warfolder/"$warname" /tomcat7/webapps/\n    HOST2\n}\n\nfunction pscp3_tomcat ()\n{\n    # group dd \u56e0\u4e3a\u8ba2\u5355\u9700\u8981\u4fee\u6539\u670d\u52a1\u5668\u7f16\u53f7\n    pscp.pssh -h $HostDIR/$vmname /warfolder/"$warname" /tomcat7/webapps/\n    pssh -h $vmname -i "service tomcat7 start"\n    sleep 10\n    pssh -H dd02 "sed -i \'s/order.no=0/order.no=1/g\' /tomcat7/webapps/dzcx_socket/WEB-INF/classes/base.properties"\n    pssh -H dd03 "sed -i \'s/order.no=0/order.no=2/g\' /tomcat7/webapps/dzcx_socket/WEB-INF/classes/base.properties"\n    pssh -H dd04 "sed -i \'s/order.no=0/order.no=3/g\' /tomcat7/webapps/dzcx_socket/WEB-INF/classes/base.properties"\n    HOST2\n}\n\nfunction main ()\n{\necho ""\necho "######################################"\necho ""\necho "#  1. \u66f4\u65b0war\u5305"\necho "#  2. \u7ba1\u7406tomcat7"\necho "#  3. \u7ba1\u7406mysql"\necho "#  4. \u7ba1\u7406redis"\necho "#  5. \u540c\u6b65\u670d\u52a1\u5668\u65f6\u95f4"\necho "#  6. \u6e05\u7406\u5f53\u524d\u5c4f\u5e55"\necho "#  7. \u9000\u51fa"\necho ""\necho "######################################"\n\nread -p "\u8bf7\u8f93\u5165\u4f60\u7684\u9009\u62e9:" num\n\ncase "$num" in\n    1)\n        HOST2\n        ;;\n    2)\n        HOST\n        ;;\n    3)\n        echo "\u8be5\u529f\u80fd\u6682\u672a\u5f00\u653e"\n        ;;\n    4)\n        echo "\u8be5\u529f\u80fd\u6682\u672a\u5f00\u653e"\n        ;;\n    5)\n        pssh -h $HostDIR/allhost -i "service ntpd restart"\n        ;;\n    6)\n        clear\n        echo ""\n        echo "Tips: \u6b22\u8fce\u4f7f\u7528Tomcat\u9879\u76ee\u670d\u52a1\u7ba1\u7406\u5de5\u5177,\u60a8\u9700\u8981\u9884\u5148\u5b89\u88c5pssh\u5de5\u5177\uff0c\u4ee5\u53ca\u914d\u7f6e\u597dssh\u514d\u5bc6\u767b\u5f55\u5230\u670d\u52a1\u5668"\n        main\n        ;;\n    7)\n        exit 0\n        ;;\n    *)\n        echo "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u6570\u503c\uff01"\n        main\n    ;;\nesac\n\n}\n\n# --------------------------------- main -------------------------------------------------\n\nclear\n\necho ""\necho "Tips: \u6b22\u8fce\u4f7f\u7528Tomcat\u9879\u76ee\u670d\u52a1\u7ba1\u7406\u5de5\u5177,\u60a8\u9700\u8981\u9884\u5148\u5b89\u88c5pssh\u5de5\u5177\uff0c\u4ee5\u53ca\u914d\u7f6e\u597dssh\u514d\u5bc6\u767b\u5f55\u5230\u670d\u52a1\u5668"\ncommand -v pssh > /dev/null 2>&1\n\nif [ $? -eq 0 ]\nthen\n    main\nelse\n    echo -e "\\033[07m"\n    echo -e "\u7cfb\u7edf\u68c0\u6d4b\u5230\u60a8\u8fd8\u6ca1\u5b89\u88c5pssh\uff0c\u8bf7\u9884\u5148\u5b89\u88c5pssh"\n    echo "yum install -y epel-release"\n    echo "yum install -y pssh"\n    echo "\u5b89\u88c5\u6210\u529f\u8bf7\u91cd\u65b0\u8fd0\u884c\u6b64\u811a\u672c"\n    echo -e "\\033[0m"\n\nfi\n\n\n'})})]})}function i(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},4552:(n,e,t)=>{t.d(e,{I:()=>m,M:()=>a});var o=t(11504);const s={},c=o.createContext(s);function a(n){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function m(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);