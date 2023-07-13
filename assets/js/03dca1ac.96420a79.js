"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[24713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,y=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?l.createElement(y,r(r({ref:t},u),{},{components:n})):l.createElement(y,r({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var l=n(87462),a=(n(67294),n(3905));const o={title:"HowTo Install Python 2.7.8 on CentOS 6.x",tags:["Python","CentOS"],date:new Date("2016-05-04T11:04:19.000Z")},r=void 0,i={permalink:"/2016/05/04/HowTo-Install-Python-2-7-8-on-CentOS-6-x",source:"@site/blog/2016-05-04-HowTo-Install-Python-2-7-8-on-CentOS-6-x.md",title:"HowTo Install Python 2.7.8 on CentOS 6.x",description:"CentOS 6.5 still come with Python 2.6 and I need 2.7, below a simple tutorial how to achieve this with no pain and not messing with installed Python.",date:"2016-05-04T11:04:19.000Z",formattedDate:"2016\u5e745\u67084\u65e5",tags:[{label:"Python",permalink:"/tags/python"},{label:"CentOS",permalink:"/tags/cent-os"}],readingTime:.7633333333333333,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Install Python 2.7.8 on CentOS 6.x",tags:["Python","CentOS"],date:"2016-05-04T11:04:19.000Z"},prevItem:{title:"mysqldump \u5e38\u7528\u53c2\u6570",permalink:"/2016/05/05/MySQL-3-mysqldump\u5e38\u7528\u53c2\u6570"},nextItem:{title:"HowTo Add Piwik Tracking to Ghost",permalink:"/2016/04/27/HowTo-Add-Piwik-Tracking-to-Ghost"}},s={authorsImageUrls:[]},p=[{value:"Installing Python 2.7.8 from source",id:"installing-python-278-from-source",level:2},{value:"Installation process",id:"installation-process",level:2},{value:"Installing pip and virtualenv",id:"installing-pip-and-virtualenv",level:2},{value:"Install setuptools",id:"install-setuptools",level:3},{value:"Install pip",id:"install-pip",level:3},{value:"And finally virtualenv",id:"and-finally-virtualenv",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"CentOS 6.5 still come with Python 2.6 and I need 2.7, below a simple tutorial how to achieve this with no pain and not messing with installed Python."),(0,a.kt)("p",null,"Update CentOS and install development tools"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum -y update\nyum groupinstall -y 'development tools'\n")),(0,a.kt)("p",null,"Also you need the packages below to enable SSL, bz2, zlib for Python and some utils:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y zlib-devel bzip2-devel openssl-devel xz-libs wget\n")),(0,a.kt)("h2",{id:"installing-python-278-from-source"},"Installing Python 2.7.8 from source"),(0,a.kt)("p",null,"Download Python and extract it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://www.python.org/ftp/python/2.7.8/Python-2.7.8.tar.xz\nxz -d Python-2.7.8.tar.xz\ntar -xvf Python-2.7.8.tar\n")),(0,a.kt)("h2",{id:"installation-process"},"Installation process"),(0,a.kt)("p",null,"Since we already installed all the dependencies we are ready to go:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Enter the directory:\ncd Python-2.7.8\n\n# Run the configure:\n./configure --prefix=/usr/local\n\n# compile and install it:\nmake\nmake altinstall\n\n# Checking Python version:\n[root@nicetry ~]# python2.7 -V\nPython 2.7.8\n")),(0,a.kt)("p",null,"If you need set ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," variable check the line below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export PATH="/usr/local/bin:$PATH"\n')),(0,a.kt)("h2",{id:"installing-pip-and-virtualenv"},"Installing pip and virtualenv"),(0,a.kt)("p",null,"Now we have Python installed, but something is missing isn't? Yes! We need pip and virtualenv."),(0,a.kt)("h3",{id:"install-setuptools"},"Install setuptools"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget --no-check-certificate https://pypi.python.org/packages/source/s/setuptools/setuptools-1.4.2.tar.gz\n\n# Extract the files:\ntar -xvf setuptools-1.4.2.tar.gz\ncd setuptools-1.4.2\n\n# Install setuptools using the Python 2.7.8:\npython2.7 setup.py install\n")),(0,a.kt)("h3",{id:"install-pip"},"Install pip"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/pypa/pip/master/contrib/get-pip.py | python2.7 -\n")),(0,a.kt)("h3",{id:"and-finally-virtualenv"},"And finally virtualenv"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip2.7 install virtualenv\n")),(0,a.kt)("p",null,"And that's all, we have Python 2.7.8 installed on CentOS."))}d.isMDXComponent=!0}}]);