"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[35693],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={title:"\u6dd8\u5b9d Python SDK \u4f18\u5316\u652f\u6301 Python3",toc:!0,authors:["samzong"],tags:["Python"],date:new Date("2022-04-14T10:43:00.000Z")},i=void 0,l={permalink:"/2022/04/14/tao-bao-python-sdk-you-hua-zhi-chi-python3",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2022-04-14-tao-bao-python-sdk-you-hua-zhi-chi-python3.md",source:"@site/blog/2022-04-14-tao-bao-python-sdk-you-hua-zhi-chi-python3.md",title:"\u6dd8\u5b9d Python SDK \u4f18\u5316\u652f\u6301 Python3",description:"\u6dd8\u5b9d\u5f00\u653e\u5e73\u53f0\u7684 SDK\uff0cPython \u7684 SDK \u662f\u5728 2012 \u5e74\uff0c\u4ec5\u652f\u6301 Python2.7 \u53ca\u4ee5\u4e0a\uff0c\u4f46\u4e0d\u652f\u6301 Python3\uff1b\u4e8c\u73b0\u5728\u662f 2102 \u5e74\u4e86\uff0c\u50cf\u6211\u8fd9\u6837\u7684\u65b0\u624b\u90fd\u662f\u76f4\u63a5\u4ece Python3 \u5f00\u59cb\u7684",date:"2022-04-14T10:43:00.000Z",formattedDate:"2022\u5e744\u670814\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:3.53,hasTruncateMarker:!1,authors:[{name:"Samzong Lu",title:"Product Designer",url:"https://github.com/SAMZONG",email:"samzong.lu@gmail.com",imageURL:"https://github.com/SAMZONG.png",key:"samzong"}],frontMatter:{title:"\u6dd8\u5b9d Python SDK \u4f18\u5316\u652f\u6301 Python3",toc:!0,authors:["samzong"],tags:["Python"],date:"2022-04-14T10:43:00.000Z"},prevItem:{title:"SQL \u5bf9\u65f6\u95f4\u6574\u70b9\u7684\u5904\u7406",permalink:"/2022/04/15/sql-dui-shi-jian-zheng-dian-de-chu-li"},nextItem:{title:"Python Pip \u56fd\u5185\u52a0\u901f",permalink:"/2022/04/14/python-pip-guo-nei-jia-su"}},p={authorsImageUrls:[void 0]},s=[{value:"Install &amp; Usage",id:"install--usage",level:2},{value:"\u6301\u7eed\u8865\u5145 SDK \u80fd\u529b",id:"\u6301\u7eed\u8865\u5145-sdk-\u80fd\u529b",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u9002\u914d\u90e8\u5206\u4ecb\u7ecd",id:"\u9002\u914d\u90e8\u5206\u4ecb\u7ecd",level:2},{value:"1. Python3 int \u66ff\u4ee3\u4e86 long",id:"1-python3-int-\u66ff\u4ee3\u4e86-long",level:3},{value:"2. \u7528 items \u66ff\u4ee3 iteritems",id:"2-\u7528-items-\u66ff\u4ee3-iteritems",level:3},{value:"3. dict \u65b9\u6cd5\u4f18\u5316",id:"3-dict-\u65b9\u6cd5\u4f18\u5316",level:3},{value:"4. unicode \u5bf9\u8c61\u9700\u8981\u7f16\u7801",id:"4-unicode-\u5bf9\u8c61\u9700\u8981\u7f16\u7801",level:3},{value:"5. soket.py HttpConnection",id:"5-soketpy-httpconnection",level:3},{value:"6. urllib \u65b9\u6cd5\u5347\u7ea7",id:"6-urllib-\u65b9\u6cd5\u5347\u7ea7",level:3},{value:"7. jsonobj \u5f02\u5e38\u629b\u51fa",id:"7-jsonobj-\u5f02\u5e38\u629b\u51fa",level:3},{value:"8. is not \u4fee\u6539\u4e3a !=",id:"8-is-not-\u4fee\u6539\u4e3a-",level:3},{value:"pypi HowTo",id:"pypi-howto",level:2}],u={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6dd8\u5b9d\u5f00\u653e\u5e73\u53f0\u7684 SDK\uff0cPython \u7684 SDK \u662f\u5728 2012 \u5e74\uff0c\u4ec5\u652f\u6301 Python2.7 \u53ca\u4ee5\u4e0a\uff0c\u4f46\u4e0d\u652f\u6301 Python3\uff1b\u4e8c\u73b0\u5728\u662f 2102 \u5e74\u4e86\uff0c\u50cf\u6211\u8fd9\u6837\u7684\u65b0\u624b\u90fd\u662f\u76f4\u63a5\u4ece Python3 \u5f00\u59cb\u7684"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6211\u5df2\u7ecf\u628a\u8fd9\u4e2a\u9879\u76ee\u5f00\u653e\u5728 GitHub ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/SAMZONG/taobao-openapi"},"https://github.com/SAMZONG/taobao-openapi")),(0,a.kt)("li",{parentName:"ul"},"\u540c\u65f6\u653e\u5728\u4e86 Python pypi \u8f6f\u4ef6\u4ed3\u5e93 ",(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/taobao-openapi/"},"https://pypi.org/project/taobao-openapi/"))),(0,a.kt)("h2",{id:"install--usage"},"Install & Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install taobao-openapi\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\nimport taobao-openapi as tbapi\n\n")),(0,a.kt)("h2",{id:"\u6301\u7eed\u8865\u5145-sdk-\u80fd\u529b"},"\u6301\u7eed\u8865\u5145 SDK \u80fd\u529b"),(0,a.kt)("p",null,"\u6dd8\u5b9d\u5f00\u653e\u5e73\u53f0\u540e\u53f0\u4e0b\u8f7d\u83b7\u53d6\u5230\u7684 SDK \u6587\u4ef6\uff0c\u4f1a\u6839\u636e\u5e94\u7528\u7684\u6743\u9650\u751f\u4ea7\u5bf9\u5e94\u7684 SDK \u5305\uff0c\u6240\u4ee5\u4f60\u53ef\u80fd\u83b7\u53d6\u5230\u7684\u662f\u51e0\u5341\u4e2a\u6216\u8005\u4e0a\u767e\u4e2a"),(0,a.kt)("p",null,"NOTE: ",(0,a.kt)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u6709\u5176\u4ed6\u7684 SDK \u6ca1\u6709\u5728\u6587\u6863\u4e2d\u627e\u5230\uff0c\u53ef\u4ee5\u53cd\u9988\u7ed9\u6211\u6216\u8005\u63d0 ",(0,a.kt)("inlineCode",{parentName:"strong"},"Pull requests"),"\uff0c\u5927\u5bb6\u4e00\u8d77\u6269\u5145 SDK")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"v1.0.6 fix \u6587\u6863\u9519\u8bef"),(0,a.kt)("li",{parentName:"ul"},"v1.0.4 \u589e\u52a0\u66f4\u591a\u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"v1.0.3 \u589e\u52a0\u66f4\u591a\u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"v1.0.2 \u6dfb\u52a0 Wdt QimenCloud-openapi"),(0,a.kt)("li",{parentName:"ul"},"v1.0.1 \u9002\u914d taobao-openapi")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u8bf4\u660e"},"\u4f7f\u7528\u8bf4\u660e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python3"},'\nimport top.api\nimport json\n\napp_key = \napp_secret = \nsession_key = \n\ndef trade_rates_get_request():\n req = top.api.TraderatesGetRequest()\n req.set_app_info(top.appinfo(app_key, app_secret))\n \n req.fields = "tid,oid,role,nick,result,created,rated_nick,item_title,item_price,content,reply,num_iid"\n req.rate_type = "get"\n req.role = "buyer"\n \n try:\n  resp = req.getResponse(session_key)\n except Exception as e:\n  print(e)\n\n\nif __name__ == \'__main__\':\n result = trade_rates_get_request()\n print(result)\n\n')),(0,a.kt)("h2",{id:"\u9002\u914d\u90e8\u5206\u4ecb\u7ecd"},"\u9002\u914d\u90e8\u5206\u4ecb\u7ecd"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u4e3a\u4e86\u7701\u65f6\u95f4\uff0c\u57fa\u672c\u5f15\u7528\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/starryhwj/article/details/103026402"},"https://blog.csdn.net/starryhwj/article/details/103026402")," \u8865\u5145\u4e86 8\n\u540c\u65f6\u611f\u8c22 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ymj4023"},"@ymj4023"))),(0,a.kt)("h3",{id:"1-python3-int-\u66ff\u4ee3\u4e86-long"},"1. Python3 int \u66ff\u4ee3\u4e86 long"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python3"},"FROM: str(long(time.time() * 1000))\n\nTO: P_TIMESTAMP: str(int(time.time() * 1000))\n")),(0,a.kt)("h3",{id:"2-\u7528-items-\u66ff\u4ee3-iteritems"},"2. \u7528 items \u66ff\u4ee3 iteritems"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python3"},"FROM: for key, value in application_parameter.iteritems():\n\nTO: for key, value in application_parameter.items():\n")),(0,a.kt)("h3",{id:"3-dict-\u65b9\u6cd5\u4f18\u5316"},"3. dict \u65b9\u6cd5\u4f18\u5316"),(0,a.kt)("p",null,"\u67e5\u9605\u8d44\u6599\uff0c\u53d1\u73b0\u6709\u4eba\u8bf4\u5230 dict methods dict.keys(), dict.items() and dict.values() return\u201cviews\u201dinstead of lists.\u8fd9\u6837\u5c31\u663e\u800c\u6613\u89c1\u77e5\u9053\u600e\u4e48\u6539\u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python3"},"FROM: keys = keys.sort()\n\nTO: keys = sorted(keys)\n")),(0,a.kt)("h3",{id:"4-unicode-\u5bf9\u8c61\u9700\u8981\u7f16\u7801"},"4. unicode \u5bf9\u8c61\u9700\u8981\u7f16\u7801"),(0,a.kt)("p",null,"\u82f1\u6587\u610f\u601d\u5f88\u660e\u786e\uff0cunicode \u5bf9\u8c61\u5728\u54c8\u5e0c\u4e4b\u524d\u5fc5\u987b\u8fdb\u884c\u7f16\u7801\u8f6c\u6362\uff0c\u60f3\u8d77\u4e4b\u524d\u53c8\u770b\u5230\u8fc7\u4e2d\u6587\u5b57\u7b26\u5728 python \u4e2d\u662f\u4ee5 unicode \u5b58\u5728\u7684\uff0c\u6240\u4ee5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python3"},'FROM: sign = hashlib.md5(parameters)).hexdigest().upper()\n\nTO: sign = hashlib.md5(parameters.encode("utf-8")).hexdigest().upper()\n')),(0,a.kt)("h3",{id:"5-soketpy-httpconnection"},"5. soket.py HttpConnection"),(0,a.kt)("p",null,"\u8fd9\u662f\u82b1\u8d39\u65f6\u95f4\u6700\u957f\u7684\u4e00\u4e2a\u9519\u8bef\u3002\u9996\u5148\uff0c\u76f4\u63a5\u770b\u6700\u540e\uff0c\u9519\u8bef\u5728 soket.py \u91cc\uff0c\u5fc3\u51c9\u4e86\u534a\u622a\uff0c\u96be\u9053\u8fd9\u91cc\u7684\u8c03\u7528\u90fd\u4e0d\u4e00\u6837\u4e86\uff0c\u518d\u7f51\u4e0a\u770b\u53c8\u662f python 3.X \u7684 http \u6a21\u5757\uff0c\u53bb\u767e\u5ea6\u4e86\u534a\u5929\u4e5f\u6ca1\u6709\u53d1\u73b0\u7c7b\u4f3c\u7684\u9519\u8bef\uff0c\u53ea\u80fd\u81ea\u5df1\u786c\u7740\u5934\u76ae\u53bb\u770b\u6a21\u5757\uff0c\u529f\u592b\u4e0d\u8d1f\u6709\u5fc3\u4eba\uff0c\u5176\u5b9e\u4e5f\u5f88\u7b80\u5355\uff0c\u5728\u7c7b HTTPConnection \u7684\u521d\u59cb\u5316\u51fd\u6570\u662f\u8fd9\u6837\u5b9a\u4e49\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python3"},"FROM: connection = httplib.HTTPConnection(self.__domain, self.__port, False, timeout)\n\nTO: connection = httplib.HTTPConnection(self.__domain, self.__port, timeout)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6bd4\u8f83\u4e0b\u53c2\u6570\u53d1\u73b0\uff0cpython 2 \u6bd4 3 \u591a\u4e86\u4e00\u4e2a\u53c2\u6570\uff0c\u53bb\u6389\u5373\u53ef\uff0c\u8fd9\u4e2a\u9519\u8bef\u4e3b\u8981\u662f\u662f\u62a5\u9519\u7684\u5730\u65b9\u548c\u4fee\u6539\u7684\u5730\u65b9\u4e0d\u5728\u4e00\u8d77\uff0c\u6240\u4ee5\u5f88\u96be\u63d2\u51fa\u539f\u56e0\u3002")),(0,a.kt)("h3",{id:"6-urllib-\u65b9\u6cd5\u5347\u7ea7"},"6. urllib \u65b9\u6cd5\u5347\u7ea7"),(0,a.kt)("p",null,"\u5b98\u65b9\u6587\u6863\u662f\u8fd9\u6837\u89e3\u91ca\u7684\uff1aurllib has been split up in Python 3. The urllib.urlencode() function is now urllib.parse.urlencode(), and the urllib.urlopen() function is now urllib.request.urlopen()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python3"},'FROM: url = N_REST + "?" + urllib.parse.urlencode(sys_parameters)\n\nTO: url = N_REST + "?" + urllib.urlencode(sys_parameters)\n')),(0,a.kt)("h3",{id:"7-jsonobj-\u5f02\u5e38\u629b\u51fa"},"7. jsonobj \u5f02\u5e38\u629b\u51fa"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u662f\u5728 API \u8c03\u7528\u51fa\u5f02\u5e38\u7684\u65f6\u5019\u66b4\u9732\u51fa\u6765\u7684\u3002\u539f\u56e0\u524d\u9762\u5df2\u7ecf\u63d0\u5230\u4e86\uff0c\u7a0d\u5fae\u67e5\u4e86\u4e0b\u66ff\u4ee3\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python3"},'if "error_response" in jsonobj:\n\nif P_CODE in jsonobj["error_response"]:\n')),(0,a.kt)("h3",{id:"8-is-not-\u4fee\u6539\u4e3a-"},"8. is not \u4fee\u6539\u4e3a !="),(0,a.kt)("p",null,"\u5728 if \u9700\u8981\u4f7f\u7528\u53cd\u5411\u65f6\uff0c\u5e94\u8be5\u662f != \uff0c\u800c\u4e0d\u662f\u4f7f\u7528  is not\uff1b\u8fd9\u4e2a\u4e5f\u662f PyCharm \u7ed9\u7684\u5efa\u8bae\uff0c\u6240\u4ee5\u5728\u4f7f\u7528\u65f6\uff0c\u6240\u4ee5\u7b80\u5355\u8c03\u6574\u4e0b\u5c31\u597d\u4e86"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python3"},"FROM: if respone.status is not 200:\n\nTO: if response.status != 200:\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u4ee5\u4e0a\u8c03\u6574\u4e4b\u540e\uff0c\u57fa\u672c\u5c31\u53ef\u4ee5\u6b63\u5e38\u8dd1\u8d77\u6765\u4e86\uff0c\u57fa\u672c\u662f\u53ef\u4ee5\u652f\u6301 Python3 \u7684\u4f7f\u7528\uff0c\u6211\u8bd5\u8fc7\u4e86 Python3.6-3.9\uff0c\u90fd\u662f OK \u7684\u3002"),(0,a.kt)("h2",{id:"pypi-howto"},"pypi HowTo"),(0,a.kt)("p",null,"\u628a\u4f60\u7684\u5e93\u4e0a\u4f20\u5230 pypi \u4e4b\u524d\uff0c\u4e3b\u8981\u4f9d\u8d56\u7684\u662f setup.py\uff0c\u4e0b\u65b9\u662f\u5bf9\u5e94\u7684 demo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6253\u5305 python3 steup.py sdist"),(0,a.kt)("li",{parentName:"ul"},"twine upload dist/*")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u9700\u8981\u5148\u5b89\u88c5 setuptools twine")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python3"},"# /usr/bin/env python3\n# -*- coding: utf-8 -*-\n\nimport setuptools\nfrom distutils.core import setup\nimport codecs\nimport os\nimport sys\n\ntry:\n from setuptools import setup, find_packages\nexcept:\n from distutils import setup\n\nwith open('README.md', 'r', encoding=\"utf-8\") as fp:\n readme = fp.read()\n\nVERSION = \"1.0.0\"\nLICENSE = \"MIT\"\n\nsetup(\n name='taobao-openapi',\n version=VERSION,\n description=(\n  '\u96c6\u5408\u4e86\u6dd8\u5b9d\u5f00\u653e\u5e73\u53f0\u7684\u5546\u94fa OPEN API\uff0c\u5e76\u9002\u914d\u4e86 Python3'\n ),\n long_description=readme,\n long_description_content_type='text/markdown',\n author='samzong.lu',\n author_email='samzong.lu@gmail.com',\n maintainer='samzong.lu',\n maintainer_email='samzong.lu@gmail.com',\n license=LICENSE,\n packages=find_packages(),\n platforms=[\"all\"],\n url='https://github.com/SAMZONG/taobao-sdk-python3',\n install_requires=[\n  \"requests\"\n  ],\n classifiers=[\n  'Development Status :: 4 - Beta',\n  'Operating System :: OS Independent',\n  'Intended Audience :: Developers',\n  'License :: OSI Approved :: BSD License',\n  'Programming Language :: Python',\n  'Programming Language :: Python :: Implementation',\n  'Programming Language :: Python :: 3',\n  'Programming Language :: Python :: 3.4',\n  'Programming Language :: Python :: 3.5',\n  'Programming Language :: Python :: 3.6',\n  'Programming Language :: Python :: 3.7',\n  'Programming Language :: Python :: 3.8',\n  'Programming Language :: Python :: 3.9',\n  'Topic :: Software Development :: Libraries'\n  ],\n )\n")))}c.isMDXComponent=!0}}]);