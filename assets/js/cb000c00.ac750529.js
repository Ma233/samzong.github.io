"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[43560],{98576:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(17624),s=t(4552);const o={title:"Django \u521d\u59cb\u5316 project",tags:["Python"]},r=void 0,l={permalink:"/2020/11/09/django-chu-shi-hua-project",source:"@site/blog/2020-11-09-django-chu-shi-hua-project.md",title:"Django \u521d\u59cb\u5316 project",description:"\u9879\u76ee\u521d\u59cb\u5316",date:"2020-11-09T00:00:00.000Z",formattedDate:"November 9, 2020",tags:[{label:"Python",permalink:"/tags/python"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Django \u521d\u59cb\u5316 project",tags:["Python"]},unlisted:!1,prevItem:{title:"autoscraper \u722c\u866b \u6240\u89c1\u5373\u6240\u5f97",permalink:"/2020/11/16/autoscraper-pa-chong-suo-jian-ji-suo-de"},nextItem:{title:"Django \u4fee\u6539 modules \u65f6\u51fa\u9519",permalink:"/2020/11/06/django-xiu-gai-modules-shi-chu-cuo"}},i={authorsImageUrls:[]},c=[{value:"\u9879\u76ee\u521d\u59cb\u5316",id:"\u9879\u76ee\u521d\u59cb\u5316",level:3},{value:"\u5e38\u89c1\u9879\u76ee\u914d\u7f6e",id:"\u5e38\u89c1\u9879\u76ee\u914d\u7f6e",level:3},{value:"\u5bfc\u51fa\u9879\u76ee\u7684\u4f9d\u8d56\u5e93",id:"\u5bfc\u51fa\u9879\u76ee\u7684\u4f9d\u8d56\u5e93",level:3},{value:"modules \u53d8\u66f4\u540e\uff0c\u9700\u8981\u540c\u6b65\u53d8\u66f4\u6570\u636e\u5e93\u8868",id:"modules-\u53d8\u66f4\u540e\u9700\u8981\u540c\u6b65\u53d8\u66f4\u6570\u636e\u5e93\u8868",level:3}];function p(n){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.M)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"# \u521d\u59cb\u5316 mysite \u9879\u76ee\n\ndjango-admin startproject mysite\n\n\n- manage.py\n- mysite\n  - settings.py\n  - urls.py\n  - wsgi.py\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u9879\u76ee\u521d\u59cb\u5316",children:"\u9879\u76ee\u521d\u59cb\u5316"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"python3 manage.py --help # \u7528\u4e8e\u7ba1\u7406\u9879\u76ee\u4ee5\u53ca\u670d\u52a1\npython3 manage.py runserver  # \u542f\u52a8\u670d\u52a1\npython3 manage.py startapp 'blog'  # \u7528\u4e8e\u5728\u9879\u76ee\u4e0b\u521b\u5efa\u4e00\u4e2aapp\n\n\n# \u65b0\u9879\u76ee\u521d\u59cb\u5316\u6b65\u9aa4\n\ndjango-admin startproject mysite  # \u521b\u5efa\u9879\u76ee\ncd mysite\npython3 manage.py migrate  # \u521d\u59cb\u5316\u6570\u636e\u5e93\npython3 manage.py createsuperuser  # \u521b\u5efa\u8d85\u7ea7\u7ba1\u7406\u5458\u8d26\u53f7\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u5e38\u89c1\u9879\u76ee\u914d\u7f6e",children:"\u5e38\u89c1\u9879\u76ee\u914d\u7f6e"}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"settings.py"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# \u5207\u6362\u6570\u636e\u5e93\u4e3a MySQL , Default = sqlite\n\nDATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.mysql',\n        'NAME': 'mysite',\n        'USER': 'root',\n        'PASSWORD': 'luchuanjia',\n        'HOST': '127.0.0.1',\n        'PORT': '3306',\n    }\n}\n\n# ! \u9700\u8981\u5b89\u88c5\u63d2\u4ef6 pip install mysql\n\n---\n\n# \u4fee\u6539\u9879\u76ee\u65f6\u533a\nTIME_ZONE = 'Asia/Shanghai'  # Default UTC\n\n# \u4fee\u6539\u8bed\u8a00\nLANGUAGE_CODE = 'zh-Hans'  # \u7b80\u4f53\u4e2d\u6587\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u5bfc\u51fa\u9879\u76ee\u7684\u4f9d\u8d56\u5e93",children:"\u5bfc\u51fa\u9879\u76ee\u7684\u4f9d\u8d56\u5e93"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"pip freeze > requirements.txt   # \u5c06\u76ee\u524d\u865a\u62df\u73af\u5883\u7684 \u4f9d\u8d56\u5e93\uff0c\u5bfc\u51fa\u5230\u6587\u4ef6\u4e2d\n\npip install -r requirements.txt # \u4ece requirements.txt \u4e2d\u8bfb\u53d6\u4f9d\u8d56\u5e93\uff0c\u5e76\u8fdb\u884c\u5b89\u88c5\n"})}),"\n",(0,a.jsx)(e.h3,{id:"modules-\u53d8\u66f4\u540e\u9700\u8981\u540c\u6b65\u53d8\u66f4\u6570\u636e\u5e93\u8868",children:"modules \u53d8\u66f4\u540e\uff0c\u9700\u8981\u540c\u6b65\u53d8\u66f4\u6570\u636e\u5e93\u8868"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# \u4fee\u6539 module.py \u540e\uff0c\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5c06\u53d8\u66f4\u540c\u6b65\u5230\u6570\u636e\u5e93\uff0c\u5426\u5219\u4e0d\u751f\u6548\npython3 manage.py makemigrations\npython3 manage.py migrate\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},4552:(n,e,t)=>{t.d(e,{I:()=>l,M:()=>r});var a=t(11504);const s={},o=a.createContext(s);function r(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);