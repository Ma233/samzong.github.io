"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[84444],{47100:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=t(17624),o=t(4552);const s={title:"\u6dd8\u5b9d Python SDK \u4f18\u5316\u652f\u6301 Python3",toc:!0,tags:["Python"],date:new Date("2022-04-14T10:43:00.000Z")},r=void 0,l={permalink:"/2022/04/14/tao-bao-python-sdk-you-hua-zhi-chi-python3",source:"@site/blog/2022-04-14-tao-bao-python-sdk-you-hua-zhi-chi-python3.md",title:"\u6dd8\u5b9d Python SDK \u4f18\u5316\u652f\u6301 Python3",description:"\u6dd8\u5b9d\u5f00\u653e\u5e73\u53f0\u7684 SDK\uff0cPython \u7684 SDK \u662f\u5728 2012 \u5e74\uff0c\u4ec5\u652f\u6301 Python2.7 \u53ca\u4ee5\u4e0a\uff0c\u4f46\u4e0d\u652f\u6301 Python3\uff1b\u4e8c\u73b0\u5728\u662f 2102 \u5e74\u4e86\uff0c\u50cf\u6211\u8fd9\u6837\u7684\u65b0\u624b\u90fd\u662f\u76f4\u63a5\u4ece Python3 \u5f00\u59cb\u7684",date:"2022-04-14T10:43:00.000Z",formattedDate:"2022\u5e744\u670814\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u6dd8\u5b9d Python SDK \u4f18\u5316\u652f\u6301 Python3",toc:!0,tags:["Python"],date:"2022-04-14T10:43:00.000Z"},unlisted:!1,prevItem:{title:"SQL \u5bf9\u65f6\u95f4\u6574\u70b9\u7684\u5904\u7406",permalink:"/2022/04/15/sql-dui-shi-jian-zheng-dian-de-chu-li"},nextItem:{title:"Python Pip \u56fd\u5185\u52a0\u901f",permalink:"/2022/04/14/python-pip-guo-nei-jia-su"}},a={authorsImageUrls:[]},p=[{value:"Install &amp; Usage",id:"install--usage",level:2},{value:"\u6301\u7eed\u8865\u5145 SDK \u80fd\u529b",id:"\u6301\u7eed\u8865\u5145-sdk-\u80fd\u529b",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u9002\u914d\u90e8\u5206\u4ecb\u7ecd",id:"\u9002\u914d\u90e8\u5206\u4ecb\u7ecd",level:2},{value:"1. Python3 int \u66ff\u4ee3\u4e86 long",id:"1-python3-int-\u66ff\u4ee3\u4e86-long",level:3},{value:"2. \u7528 items \u66ff\u4ee3 iteritems",id:"2-\u7528-items-\u66ff\u4ee3-iteritems",level:3},{value:"3. dict \u65b9\u6cd5\u4f18\u5316",id:"3-dict-\u65b9\u6cd5\u4f18\u5316",level:3},{value:"4. unicode \u5bf9\u8c61\u9700\u8981\u7f16\u7801",id:"4-unicode-\u5bf9\u8c61\u9700\u8981\u7f16\u7801",level:3},{value:"5. soket.py HttpConnection",id:"5-soketpy-httpconnection",level:3},{value:"6. urllib \u65b9\u6cd5\u5347\u7ea7",id:"6-urllib-\u65b9\u6cd5\u5347\u7ea7",level:3},{value:"7. jsonobj \u5f02\u5e38\u629b\u51fa",id:"7-jsonobj-\u5f02\u5e38\u629b\u51fa",level:3},{value:"8. is not \u4fee\u6539\u4e3a !=",id:"8-is-not-\u4fee\u6539\u4e3a-",level:3},{value:"pypi HowTo",id:"pypi-howto",level:2}];function c(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"\u6dd8\u5b9d\u5f00\u653e\u5e73\u53f0\u7684 SDK\uff0cPython \u7684 SDK \u662f\u5728 2012 \u5e74\uff0c\u4ec5\u652f\u6301 Python2.7 \u53ca\u4ee5\u4e0a\uff0c\u4f46\u4e0d\u652f\u6301 Python3\uff1b\u4e8c\u73b0\u5728\u662f 2102 \u5e74\u4e86\uff0c\u50cf\u6211\u8fd9\u6837\u7684\u65b0\u624b\u90fd\u662f\u76f4\u63a5\u4ece Python3 \u5f00\u59cb\u7684"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u6211\u5df2\u7ecf\u628a\u8fd9\u4e2a\u9879\u76ee\u5f00\u653e\u5728 GitHub ",(0,i.jsx)(e.a,{href:"https://github.com/SAMZONG/taobao-openapi",children:"https://github.com/SAMZONG/taobao-openapi"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u540c\u65f6\u653e\u5728\u4e86 Python pypi \u8f6f\u4ef6\u4ed3\u5e93 ",(0,i.jsx)(e.a,{href:"https://pypi.org/project/taobao-openapi/",children:"https://pypi.org/project/taobao-openapi/"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"install--usage",children:"Install & Usage"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"pip install taobao-openapi\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"\nimport taobao-openapi as tbapi\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6301\u7eed\u8865\u5145-sdk-\u80fd\u529b",children:"\u6301\u7eed\u8865\u5145 SDK \u80fd\u529b"}),"\n",(0,i.jsx)(e.p,{children:"\u6dd8\u5b9d\u5f00\u653e\u5e73\u53f0\u540e\u53f0\u4e0b\u8f7d\u83b7\u53d6\u5230\u7684 SDK \u6587\u4ef6\uff0c\u4f1a\u6839\u636e\u5e94\u7528\u7684\u6743\u9650\u751f\u4ea7\u5bf9\u5e94\u7684 SDK \u5305\uff0c\u6240\u4ee5\u4f60\u53ef\u80fd\u83b7\u53d6\u5230\u7684\u662f\u51e0\u5341\u4e2a\u6216\u8005\u4e0a\u767e\u4e2a"}),"\n",(0,i.jsxs)(e.p,{children:["NOTE: ",(0,i.jsxs)(e.strong,{children:["\u5982\u679c\u4f60\u6709\u5176\u4ed6\u7684 SDK \u6ca1\u6709\u5728\u6587\u6863\u4e2d\u627e\u5230\uff0c\u53ef\u4ee5\u53cd\u9988\u7ed9\u6211\u6216\u8005\u63d0 ",(0,i.jsx)(e.code,{children:"Pull requests"}),"\uff0c\u5927\u5bb6\u4e00\u8d77\u6269\u5145 SDK"]})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"v1.0.6 fix \u6587\u6863\u9519\u8bef"}),"\n",(0,i.jsx)(e.li,{children:"v1.0.4 \u589e\u52a0\u66f4\u591a\u63a5\u53e3"}),"\n",(0,i.jsx)(e.li,{children:"v1.0.3 \u589e\u52a0\u66f4\u591a\u63a5\u53e3"}),"\n",(0,i.jsx)(e.li,{children:"v1.0.2 \u6dfb\u52a0 Wdt QimenCloud-openapi"}),"\n",(0,i.jsx)(e.li,{children:"v1.0.1 \u9002\u914d taobao-openapi"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python3",children:'\nimport top.api\nimport json\n\napp_key = \napp_secret = \nsession_key = \n\ndef trade_rates_get_request():\n req = top.api.TraderatesGetRequest()\n req.set_app_info(top.appinfo(app_key, app_secret))\n \n req.fields = "tid,oid,role,nick,result,created,rated_nick,item_title,item_price,content,reply,num_iid"\n req.rate_type = "get"\n req.role = "buyer"\n \n try:\n  resp = req.getResponse(session_key)\n except Exception as e:\n  print(e)\n\n\nif __name__ == \'__main__\':\n result = trade_rates_get_request()\n print(result)\n\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u9002\u914d\u90e8\u5206\u4ecb\u7ecd",children:"\u9002\u914d\u90e8\u5206\u4ecb\u7ecd"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u4ee5\u4e0b\u4e3a\u4e86\u7701\u65f6\u95f4\uff0c\u57fa\u672c\u5f15\u7528\u4e86 ",(0,i.jsx)(e.a,{href:"https://blog.csdn.net/starryhwj/article/details/103026402",children:"https://blog.csdn.net/starryhwj/article/details/103026402"})," \u8865\u5145\u4e86 8\n\u540c\u65f6\u611f\u8c22 ",(0,i.jsx)(e.a,{href:"https://github.com/ymj4023",children:"@ymj4023"})]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"1-python3-int-\u66ff\u4ee3\u4e86-long",children:"1. Python3 int \u66ff\u4ee3\u4e86 long"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python3",children:"FROM: str(long(time.time() * 1000))\n\nTO: P_TIMESTAMP: str(int(time.time() * 1000))\n"})}),"\n",(0,i.jsx)(e.h3,{id:"2-\u7528-items-\u66ff\u4ee3-iteritems",children:"2. \u7528 items \u66ff\u4ee3 iteritems"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python3",children:"FROM: for key, value in application_parameter.iteritems():\n\nTO: for key, value in application_parameter.items():\n"})}),"\n",(0,i.jsx)(e.h3,{id:"3-dict-\u65b9\u6cd5\u4f18\u5316",children:"3. dict \u65b9\u6cd5\u4f18\u5316"}),"\n",(0,i.jsx)(e.p,{children:"\u67e5\u9605\u8d44\u6599\uff0c\u53d1\u73b0\u6709\u4eba\u8bf4\u5230 dict methods dict.keys(), dict.items() and dict.values() return\u201cviews\u201dinstead of lists.\u8fd9\u6837\u5c31\u663e\u800c\u6613\u89c1\u77e5\u9053\u600e\u4e48\u6539\u4e86\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python3",children:"FROM: keys = keys.sort()\n\nTO: keys = sorted(keys)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"4-unicode-\u5bf9\u8c61\u9700\u8981\u7f16\u7801",children:"4. unicode \u5bf9\u8c61\u9700\u8981\u7f16\u7801"}),"\n",(0,i.jsx)(e.p,{children:"\u82f1\u6587\u610f\u601d\u5f88\u660e\u786e\uff0cunicode \u5bf9\u8c61\u5728\u54c8\u5e0c\u4e4b\u524d\u5fc5\u987b\u8fdb\u884c\u7f16\u7801\u8f6c\u6362\uff0c\u60f3\u8d77\u4e4b\u524d\u53c8\u770b\u5230\u8fc7\u4e2d\u6587\u5b57\u7b26\u5728 python \u4e2d\u662f\u4ee5 unicode \u5b58\u5728\u7684\uff0c\u6240\u4ee5\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python3",children:'FROM: sign = hashlib.md5(parameters)).hexdigest().upper()\n\nTO: sign = hashlib.md5(parameters.encode("utf-8")).hexdigest().upper()\n'})}),"\n",(0,i.jsx)(e.h3,{id:"5-soketpy-httpconnection",children:"5. soket.py HttpConnection"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u662f\u82b1\u8d39\u65f6\u95f4\u6700\u957f\u7684\u4e00\u4e2a\u9519\u8bef\u3002\u9996\u5148\uff0c\u76f4\u63a5\u770b\u6700\u540e\uff0c\u9519\u8bef\u5728 soket.py \u91cc\uff0c\u5fc3\u51c9\u4e86\u534a\u622a\uff0c\u96be\u9053\u8fd9\u91cc\u7684\u8c03\u7528\u90fd\u4e0d\u4e00\u6837\u4e86\uff0c\u518d\u7f51\u4e0a\u770b\u53c8\u662f python 3.X \u7684 http \u6a21\u5757\uff0c\u53bb\u767e\u5ea6\u4e86\u534a\u5929\u4e5f\u6ca1\u6709\u53d1\u73b0\u7c7b\u4f3c\u7684\u9519\u8bef\uff0c\u53ea\u80fd\u81ea\u5df1\u786c\u7740\u5934\u76ae\u53bb\u770b\u6a21\u5757\uff0c\u529f\u592b\u4e0d\u8d1f\u6709\u5fc3\u4eba\uff0c\u5176\u5b9e\u4e5f\u5f88\u7b80\u5355\uff0c\u5728\u7c7b HTTPConnection \u7684\u521d\u59cb\u5316\u51fd\u6570\u662f\u8fd9\u6837\u5b9a\u4e49\u7684\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python3",children:"FROM: connection = httplib.HTTPConnection(self.__domain, self.__port, False, timeout)\n\nTO: connection = httplib.HTTPConnection(self.__domain, self.__port, timeout)\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6bd4\u8f83\u4e0b\u53c2\u6570\u53d1\u73b0\uff0cpython 2 \u6bd4 3 \u591a\u4e86\u4e00\u4e2a\u53c2\u6570\uff0c\u53bb\u6389\u5373\u53ef\uff0c\u8fd9\u4e2a\u9519\u8bef\u4e3b\u8981\u662f\u662f\u62a5\u9519\u7684\u5730\u65b9\u548c\u4fee\u6539\u7684\u5730\u65b9\u4e0d\u5728\u4e00\u8d77\uff0c\u6240\u4ee5\u5f88\u96be\u63d2\u51fa\u539f\u56e0\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"6-urllib-\u65b9\u6cd5\u5347\u7ea7",children:"6. urllib \u65b9\u6cd5\u5347\u7ea7"}),"\n",(0,i.jsx)(e.p,{children:"\u5b98\u65b9\u6587\u6863\u662f\u8fd9\u6837\u89e3\u91ca\u7684\uff1aurllib has been split up in Python 3. The urllib.urlencode() function is now urllib.parse.urlencode(), and the urllib.urlopen() function is now urllib.request.urlopen()"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python3",children:'FROM: url = N_REST + "?" + urllib.parse.urlencode(sys_parameters)\n\nTO: url = N_REST + "?" + urllib.urlencode(sys_parameters)\n'})}),"\n",(0,i.jsx)(e.h3,{id:"7-jsonobj-\u5f02\u5e38\u629b\u51fa",children:"7. jsonobj \u5f02\u5e38\u629b\u51fa"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u4e2a\u9519\u8bef\u662f\u5728 API \u8c03\u7528\u51fa\u5f02\u5e38\u7684\u65f6\u5019\u66b4\u9732\u51fa\u6765\u7684\u3002\u539f\u56e0\u524d\u9762\u5df2\u7ecf\u63d0\u5230\u4e86\uff0c\u7a0d\u5fae\u67e5\u4e86\u4e0b\u66ff\u4ee3\u7684\u65b9\u6cd5\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python3",children:'if "error_response" in jsonobj:\n\nif P_CODE in jsonobj["error_response"]:\n'})}),"\n",(0,i.jsx)(e.h3,{id:"8-is-not-\u4fee\u6539\u4e3a-",children:"8. is not \u4fee\u6539\u4e3a !="}),"\n",(0,i.jsx)(e.p,{children:"\u5728 if \u9700\u8981\u4f7f\u7528\u53cd\u5411\u65f6\uff0c\u5e94\u8be5\u662f != \uff0c\u800c\u4e0d\u662f\u4f7f\u7528  is not\uff1b\u8fd9\u4e2a\u4e5f\u662f PyCharm \u7ed9\u7684\u5efa\u8bae\uff0c\u6240\u4ee5\u5728\u4f7f\u7528\u65f6\uff0c\u6240\u4ee5\u7b80\u5355\u8c03\u6574\u4e0b\u5c31\u597d\u4e86"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python3",children:"FROM: if respone.status is not 200:\n\nTO: if response.status != 200:\n"})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0a\u8c03\u6574\u4e4b\u540e\uff0c\u57fa\u672c\u5c31\u53ef\u4ee5\u6b63\u5e38\u8dd1\u8d77\u6765\u4e86\uff0c\u57fa\u672c\u662f\u53ef\u4ee5\u652f\u6301 Python3 \u7684\u4f7f\u7528\uff0c\u6211\u8bd5\u8fc7\u4e86 Python3.6-3.9\uff0c\u90fd\u662f OK \u7684\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"pypi-howto",children:"pypi HowTo"}),"\n",(0,i.jsx)(e.p,{children:"\u628a\u4f60\u7684\u5e93\u4e0a\u4f20\u5230 pypi \u4e4b\u524d\uff0c\u4e3b\u8981\u4f9d\u8d56\u7684\u662f setup.py\uff0c\u4e0b\u65b9\u662f\u5bf9\u5e94\u7684 demo"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6253\u5305 python3 steup.py sdist"}),"\n",(0,i.jsx)(e.li,{children:"twine upload dist/*"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u9700\u8981\u5148\u5b89\u88c5 setuptools twine"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python3",children:"# /usr/bin/env python3\n# -*- coding: utf-8 -*-\n\nimport setuptools\nfrom distutils.core import setup\nimport codecs\nimport os\nimport sys\n\ntry:\n from setuptools import setup, find_packages\nexcept:\n from distutils import setup\n\nwith open('README.md', 'r', encoding=\"utf-8\") as fp:\n readme = fp.read()\n\nVERSION = \"1.0.0\"\nLICENSE = \"MIT\"\n\nsetup(\n name='taobao-openapi',\n version=VERSION,\n description=(\n  '\u96c6\u5408\u4e86\u6dd8\u5b9d\u5f00\u653e\u5e73\u53f0\u7684\u5546\u94fa OPEN API\uff0c\u5e76\u9002\u914d\u4e86 Python3'\n ),\n long_description=readme,\n long_description_content_type='text/markdown',\n author='samzong.lu',\n author_email='samzong.lu@gmail.com',\n maintainer='samzong.lu',\n maintainer_email='samzong.lu@gmail.com',\n license=LICENSE,\n packages=find_packages(),\n platforms=[\"all\"],\n url='https://github.com/SAMZONG/taobao-sdk-python3',\n install_requires=[\n  \"requests\"\n  ],\n classifiers=[\n  'Development Status :: 4 - Beta',\n  'Operating System :: OS Independent',\n  'Intended Audience :: Developers',\n  'License :: OSI Approved :: BSD License',\n  'Programming Language :: Python',\n  'Programming Language :: Python :: Implementation',\n  'Programming Language :: Python :: 3',\n  'Programming Language :: Python :: 3.4',\n  'Programming Language :: Python :: 3.5',\n  'Programming Language :: Python :: 3.6',\n  'Programming Language :: Python :: 3.7',\n  'Programming Language :: Python :: 3.8',\n  'Programming Language :: Python :: 3.9',\n  'Topic :: Software Development :: Libraries'\n  ],\n )\n"})})]})}function d(n={}){const{wrapper:e}={...(0,o.M)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},4552:(n,e,t)=>{t.d(e,{I:()=>l,M:()=>r});var i=t(11504);const o={},s=i.createContext(o);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);