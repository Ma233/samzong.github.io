"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[44276],{26856:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(17624),o=t(4552);const s={title:"\u6dd8\u5b9d Python SDK \u4f18\u5316\u652f\u6301 Python3",tags:["Python"]},l=void 0,r={permalink:"/2022/05/03/tao-bao-python-sdk-you-hua-zhi-chi-python3",source:"@site/blog/2022-05-03-tao-bao-python-sdk-you-hua-zhi-chi-python3.md",title:"\u6dd8\u5b9d Python SDK \u4f18\u5316\u652f\u6301 Python3",description:"\u6dd8\u5b9d\u5f00\u653e\u5e73\u53f0\u7684 SDK\uff0cPython \u7684 SDK \u662f\u5728 2012 \u5e74\uff0c\u4ec5\u652f\u6301 Python2.7 \u53ca\u4ee5\u4e0a\uff0c\u4f46\u4e0d\u652f\u6301 Python3\uff1b\u4e8c\u73b0\u5728\u662f 2102 \u5e74\u4e86\uff0c\u50cf\u6211\u8fd9\u6837\u7684\u65b0\u624b\u90fd\u662f\u76f4\u63a5\u4ece Python3 \u5f00\u59cb\u7684\uff0c",date:"2022-05-03T00:00:00.000Z",formattedDate:"2022\u5e745\u67083\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u6dd8\u5b9d Python SDK \u4f18\u5316\u652f\u6301 Python3",tags:["Python"]},unlisted:!1,prevItem:{title:"youtube-dl \u4e0b\u8f7d YouTube \u89c6\u9891",permalink:"/2022/05/03/youtube-dl-xia-zai-youtube-shi-pin"},nextItem:{title:"kubernetes \u5b66\u4e60\u4e4b\u8def",permalink:"/2022/04/24/kubernetes-xue-xi-zhi-lu"}},c={authorsImageUrls:[]},d=[{value:"1. Python3 int \u66ff\u4ee3\u4e86 long",id:"1-python3-int-\u66ff\u4ee3\u4e86-long",level:4},{value:"2. \u7528 items \u66ff\u4ee3 iteritems",id:"2-\u7528-items-\u66ff\u4ee3-iteritems",level:4},{value:"3. \u67e5\u9605\u8d44\u6599\uff0c\u53d1\u73b0\u6709\u4eba\u8bf4\u5230 dict methods dict.keys(), dict.items() and dict.values() return\u201cviews\u201dinstead of lists.\u8fd9\u6837\u5c31\u663e\u800c\u6613\u89c1\u77e5\u9053\u600e\u4e48\u6539\u4e86",id:"3-\u67e5\u9605\u8d44\u6599\u53d1\u73b0\u6709\u4eba\u8bf4\u5230-dict-methods-dictkeys-dictitems-and-dictvalues-returnviewsinstead-of-lists\u8fd9\u6837\u5c31\u663e\u800c\u6613\u89c1\u77e5\u9053\u600e\u4e48\u6539\u4e86",level:4},{value:"4. \u82f1\u6587\u610f\u601d\u5f88\u660e\u786e\uff0cunicode \u5bf9\u8c61\u5728\u54c8\u5e0c\u4e4b\u524d\u5fc5\u987b\u8fdb\u884c\u7f16\u7801\u8f6c\u6362\uff0c\u60f3\u8d77\u4e4b\u524d\u53c8\u770b\u5230\u8fc7\u4e2d\u6587\u5b57\u7b26\u5728 python \u4e2d\u662f\u4ee5 unicode \u5b58\u5728\u7684\uff0c\u6240\u4ee5",id:"4-\u82f1\u6587\u610f\u601d\u5f88\u660e\u786eunicode-\u5bf9\u8c61\u5728\u54c8\u5e0c\u4e4b\u524d\u5fc5\u987b\u8fdb\u884c\u7f16\u7801\u8f6c\u6362\u60f3\u8d77\u4e4b\u524d\u53c8\u770b\u5230\u8fc7\u4e2d\u6587\u5b57\u7b26\u5728-python-\u4e2d\u662f\u4ee5-unicode-\u5b58\u5728\u7684\u6240\u4ee5",level:4},{value:"5. \u8fd9\u662f\u82b1\u8d39\u65f6\u95f4\u6700\u957f\u7684\u4e00\u4e2a\u9519\u8bef\u3002\u9996\u5148\uff0c\u76f4\u63a5\u770b\u6700\u540e\uff0c\u9519\u8bef\u5728 soket.py \u91cc\uff0c\u5fc3\u51c9\u4e86\u534a\u622a\uff0c\u96be\u9053\u8fd9\u91cc\u7684\u8c03\u7528\u90fd\u4e0d\u4e00\u6837\u4e86\uff0c\u518d\u7f51\u4e0a\u770b\u53c8\u662f python 3.X \u7684 http \u6a21\u5757\uff0c\u53bb\u767e\u5ea6\u4e86\u534a\u5929\u4e5f\u6ca1\u6709\u53d1\u73b0\u7c7b\u4f3c\u7684\u9519\u8bef\uff0c\u53ea\u80fd\u81ea\u5df1\u786c\u7740\u5934\u76ae\u53bb\u770b\u6a21\u5757\uff0c\u529f\u592b\u4e0d\u8d1f\u6709\u5fc3\u4eba\uff0c\u5176\u5b9e\u4e5f\u5f88\u7b80\u5355\uff0c\u5728\u7c7b HTTPConnection \u7684\u521d\u59cb\u5316\u51fd\u6570\u662f\u8fd9\u6837\u5b9a\u4e49\u7684",id:"5-\u8fd9\u662f\u82b1\u8d39\u65f6\u95f4\u6700\u957f\u7684\u4e00\u4e2a\u9519\u8bef\u9996\u5148\u76f4\u63a5\u770b\u6700\u540e\u9519\u8bef\u5728-soketpy-\u91cc\u5fc3\u51c9\u4e86\u534a\u622a\u96be\u9053\u8fd9\u91cc\u7684\u8c03\u7528\u90fd\u4e0d\u4e00\u6837\u4e86\u518d\u7f51\u4e0a\u770b\u53c8\u662f-python-3x-\u7684-http-\u6a21\u5757\u53bb\u767e\u5ea6\u4e86\u534a\u5929\u4e5f\u6ca1\u6709\u53d1\u73b0\u7c7b\u4f3c\u7684\u9519\u8bef\u53ea\u80fd\u81ea\u5df1\u786c\u7740\u5934\u76ae\u53bb\u770b\u6a21\u5757\u529f\u592b\u4e0d\u8d1f\u6709\u5fc3\u4eba\u5176\u5b9e\u4e5f\u5f88\u7b80\u5355\u5728\u7c7b-httpconnection-\u7684\u521d\u59cb\u5316\u51fd\u6570\u662f\u8fd9\u6837\u5b9a\u4e49\u7684",level:4},{value:"6. \u5b98\u65b9\u6587\u6863\u662f\u8fd9\u6837\u89e3\u91ca\u7684\uff1aurllib has been split up in Python 3. The urllib.urlencode() function is now urllib.parse.urlencode(), and the urllib.urlopen() function is now urllib.request.urlopen()",id:"6-\u5b98\u65b9\u6587\u6863\u662f\u8fd9\u6837\u89e3\u91ca\u7684urllib-has-been-split-up-in-python-3-the-urlliburlencode-function-is-now-urllibparseurlencode-and-the-urlliburlopen-function-is-now-urllibrequesturlopen",level:4},{value:"7. \u8fd9\u4e2a\u9519\u8bef\u662f\u5728 API \u8c03\u7528\u51fa\u5f02\u5e38\u7684\u65f6\u5019\u66b4\u9732\u51fa\u6765\u7684\u3002\u539f\u56e0\u524d\u9762\u5df2\u7ecf\u63d0\u5230\u4e86\uff0c\u7a0d\u5fae\u67e5\u4e86\u4e0b\u66ff\u4ee3\u7684\u65b9\u6cd5",id:"7-\u8fd9\u4e2a\u9519\u8bef\u662f\u5728-api-\u8c03\u7528\u51fa\u5f02\u5e38\u7684\u65f6\u5019\u66b4\u9732\u51fa\u6765\u7684\u539f\u56e0\u524d\u9762\u5df2\u7ecf\u63d0\u5230\u4e86\u7a0d\u5fae\u67e5\u4e86\u4e0b\u66ff\u4ee3\u7684\u65b9\u6cd5",level:4},{value:"8. \u5728 if \u9700\u8981\u4f7f\u7528\u53cd\u5411\u65f6\uff0c\u5e94\u8be5\u662f != \uff0c\u800c\u4e0d\u662f\u4f7f\u7528 \xa0is not\uff1b\u8fd9\u4e2a\u4e5f\u662f PyCharm \u7ed9\u7684\u5efa\u8bae\uff0c\u6240\u4ee5\u5728\u4f7f\u7528\u65f6\uff0c\u6240\u4ee5\u7b80\u5355\u8c03\u6574\u4e0b\u5c31\u597d\u4e86",id:"8-\u5728-if-\u9700\u8981\u4f7f\u7528\u53cd\u5411\u65f6\u5e94\u8be5\u662f--\u800c\u4e0d\u662f\u4f7f\u7528-is-not\u8fd9\u4e2a\u4e5f\u662f-pycharm-\u7ed9\u7684\u5efa\u8bae\u6240\u4ee5\u5728\u4f7f\u7528\u65f6\u6240\u4ee5\u7b80\u5355\u8c03\u6574\u4e0b\u5c31\u597d\u4e86",level:4}];function h(e){const n={blockquote:"blockquote",code:"code",h4:"h4",p:"p",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u6dd8\u5b9d\u5f00\u653e\u5e73\u53f0\u7684 SDK\uff0cPython \u7684 SDK \u662f\u5728 2012 \u5e74\uff0c\u4ec5\u652f\u6301 Python2.7 \u53ca\u4ee5\u4e0a\uff0c\u4f46\u4e0d\u652f\u6301 Python3\uff1b\u4e8c\u73b0\u5728\u662f 2102 \u5e74\u4e86\uff0c\u50cf\u6211\u8fd9\u6837\u7684\u65b0\u624b\u90fd\u662f\u76f4\u63a5\u4ece Python3 \u5f00\u59cb\u7684\uff0c"}),"\n",(0,i.jsx)(n.h4,{id:"1-python3-int-\u66ff\u4ee3\u4e86-long",children:"1. Python3 int \u66ff\u4ee3\u4e86 long"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"P_TIMESTAMP: str(int(time.time() * 1000))"})}),"\n",(0,i.jsx)(n.h4,{id:"2-\u7528-items-\u66ff\u4ee3-iteritems",children:"2. \u7528 items \u66ff\u4ee3 iteritems"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"for key, value in application_parameter.items():"})}),"\n",(0,i.jsx)(n.h4,{id:"3-\u67e5\u9605\u8d44\u6599\u53d1\u73b0\u6709\u4eba\u8bf4\u5230-dict-methods-dictkeys-dictitems-and-dictvalues-returnviewsinstead-of-lists\u8fd9\u6837\u5c31\u663e\u800c\u6613\u89c1\u77e5\u9053\u600e\u4e48\u6539\u4e86",children:"3. \u67e5\u9605\u8d44\u6599\uff0c\u53d1\u73b0\u6709\u4eba\u8bf4\u5230 dict methods dict.keys(), dict.items() and dict.values() return\u201cviews\u201dinstead of lists.\u8fd9\u6837\u5c31\u663e\u800c\u6613\u89c1\u77e5\u9053\u600e\u4e48\u6539\u4e86"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"keys = sorted(keys)"})}),"\n",(0,i.jsx)(n.h4,{id:"4-\u82f1\u6587\u610f\u601d\u5f88\u660e\u786eunicode-\u5bf9\u8c61\u5728\u54c8\u5e0c\u4e4b\u524d\u5fc5\u987b\u8fdb\u884c\u7f16\u7801\u8f6c\u6362\u60f3\u8d77\u4e4b\u524d\u53c8\u770b\u5230\u8fc7\u4e2d\u6587\u5b57\u7b26\u5728-python-\u4e2d\u662f\u4ee5-unicode-\u5b58\u5728\u7684\u6240\u4ee5",children:"4. \u82f1\u6587\u610f\u601d\u5f88\u660e\u786e\uff0cunicode \u5bf9\u8c61\u5728\u54c8\u5e0c\u4e4b\u524d\u5fc5\u987b\u8fdb\u884c\u7f16\u7801\u8f6c\u6362\uff0c\u60f3\u8d77\u4e4b\u524d\u53c8\u770b\u5230\u8fc7\u4e2d\u6587\u5b57\u7b26\u5728 python \u4e2d\u662f\u4ee5 unicode \u5b58\u5728\u7684\uff0c\u6240\u4ee5"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'sign = hashlib.md5(parameters.encode("utf-8")).hexdigest().upper()'})}),"\n",(0,i.jsx)(n.h4,{id:"5-\u8fd9\u662f\u82b1\u8d39\u65f6\u95f4\u6700\u957f\u7684\u4e00\u4e2a\u9519\u8bef\u9996\u5148\u76f4\u63a5\u770b\u6700\u540e\u9519\u8bef\u5728-soketpy-\u91cc\u5fc3\u51c9\u4e86\u534a\u622a\u96be\u9053\u8fd9\u91cc\u7684\u8c03\u7528\u90fd\u4e0d\u4e00\u6837\u4e86\u518d\u7f51\u4e0a\u770b\u53c8\u662f-python-3x-\u7684-http-\u6a21\u5757\u53bb\u767e\u5ea6\u4e86\u534a\u5929\u4e5f\u6ca1\u6709\u53d1\u73b0\u7c7b\u4f3c\u7684\u9519\u8bef\u53ea\u80fd\u81ea\u5df1\u786c\u7740\u5934\u76ae\u53bb\u770b\u6a21\u5757\u529f\u592b\u4e0d\u8d1f\u6709\u5fc3\u4eba\u5176\u5b9e\u4e5f\u5f88\u7b80\u5355\u5728\u7c7b-httpconnection-\u7684\u521d\u59cb\u5316\u51fd\u6570\u662f\u8fd9\u6837\u5b9a\u4e49\u7684",children:"5. \u8fd9\u662f\u82b1\u8d39\u65f6\u95f4\u6700\u957f\u7684\u4e00\u4e2a\u9519\u8bef\u3002\u9996\u5148\uff0c\u76f4\u63a5\u770b\u6700\u540e\uff0c\u9519\u8bef\u5728 soket.py \u91cc\uff0c\u5fc3\u51c9\u4e86\u534a\u622a\uff0c\u96be\u9053\u8fd9\u91cc\u7684\u8c03\u7528\u90fd\u4e0d\u4e00\u6837\u4e86\uff0c\u518d\u7f51\u4e0a\u770b\u53c8\u662f python 3.X \u7684 http \u6a21\u5757\uff0c\u53bb\u767e\u5ea6\u4e86\u534a\u5929\u4e5f\u6ca1\u6709\u53d1\u73b0\u7c7b\u4f3c\u7684\u9519\u8bef\uff0c\u53ea\u80fd\u81ea\u5df1\u786c\u7740\u5934\u76ae\u53bb\u770b\u6a21\u5757\uff0c\u529f\u592b\u4e0d\u8d1f\u6709\u5fc3\u4eba\uff0c\u5176\u5b9e\u4e5f\u5f88\u7b80\u5355\uff0c\u5728\u7c7b HTTPConnection \u7684\u521d\u59cb\u5316\u51fd\u6570\u662f\u8fd9\u6837\u5b9a\u4e49\u7684"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"connection = httplib.HTTPConnection(self.__domain, self.__port, timeout)"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6bd4\u8f83\u4e0b\u53c2\u6570\u53d1\u73b0\uff0cpython 2 \u6bd4 3 \u591a\u4e86\u4e00\u4e2a\u53c2\u6570\uff0c\u53bb\u6389\u5373\u53ef\uff0c\u8fd9\u4e2a\u9519\u8bef\u4e3b\u8981\u662f\u662f\u62a5\u9519\u7684\u5730\u65b9\u548c\u4fee\u6539\u7684\u5730\u65b9\u4e0d\u5728\u4e00\u8d77\uff0c\u6240\u4ee5\u5f88\u96be\u63d2\u51fa\u539f\u56e0\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"6-\u5b98\u65b9\u6587\u6863\u662f\u8fd9\u6837\u89e3\u91ca\u7684urllib-has-been-split-up-in-python-3-the-urlliburlencode-function-is-now-urllibparseurlencode-and-the-urlliburlopen-function-is-now-urllibrequesturlopen",children:"6. \u5b98\u65b9\u6587\u6863\u662f\u8fd9\u6837\u89e3\u91ca\u7684\uff1aurllib has been split up in Python 3. The urllib.urlencode() function is now urllib.parse.urlencode(), and the urllib.urlopen() function is now urllib.request.urlopen()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'url = N_REST + "?" + urllib.parse.urlencode(sys_parameters)'})}),"\n",(0,i.jsx)(n.h4,{id:"7-\u8fd9\u4e2a\u9519\u8bef\u662f\u5728-api-\u8c03\u7528\u51fa\u5f02\u5e38\u7684\u65f6\u5019\u66b4\u9732\u51fa\u6765\u7684\u539f\u56e0\u524d\u9762\u5df2\u7ecf\u63d0\u5230\u4e86\u7a0d\u5fae\u67e5\u4e86\u4e0b\u66ff\u4ee3\u7684\u65b9\u6cd5",children:"7. \u8fd9\u4e2a\u9519\u8bef\u662f\u5728 API \u8c03\u7528\u51fa\u5f02\u5e38\u7684\u65f6\u5019\u66b4\u9732\u51fa\u6765\u7684\u3002\u539f\u56e0\u524d\u9762\u5df2\u7ecf\u63d0\u5230\u4e86\uff0c\u7a0d\u5fae\u67e5\u4e86\u4e0b\u66ff\u4ee3\u7684\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'if "error_response" in jsonobj:'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'if P_CODE in jsonobj["error_response"]:'})}),"\n",(0,i.jsx)(n.h4,{id:"8-\u5728-if-\u9700\u8981\u4f7f\u7528\u53cd\u5411\u65f6\u5e94\u8be5\u662f--\u800c\u4e0d\u662f\u4f7f\u7528-is-not\u8fd9\u4e2a\u4e5f\u662f-pycharm-\u7ed9\u7684\u5efa\u8bae\u6240\u4ee5\u5728\u4f7f\u7528\u65f6\u6240\u4ee5\u7b80\u5355\u8c03\u6574\u4e0b\u5c31\u597d\u4e86",children:"8. \u5728 if \u9700\u8981\u4f7f\u7528\u53cd\u5411\u65f6\uff0c\u5e94\u8be5\u662f != \uff0c\u800c\u4e0d\u662f\u4f7f\u7528 \xa0is not\uff1b\u8fd9\u4e2a\u4e5f\u662f PyCharm \u7ed9\u7684\u5efa\u8bae\uff0c\u6240\u4ee5\u5728\u4f7f\u7528\u65f6\uff0c\u6240\u4ee5\u7b80\u5355\u8c03\u6574\u4e0b\u5c31\u597d\u4e86"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"if response.status != 200:"})}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0a\u8c03\u6574\u4e4b\u540e\uff0c\u57fa\u672c\u5c31\u53ef\u4ee5\u6b63\u5e38\u8dd1\u8d77\u6765\u4e86\uff0c\u57fa\u672c\u662f\u53ef\u4ee5\u652f\u6301 Python3 \u7684\u4f7f\u7528\uff0c\u6211\u8bd5\u8fc7\u4e86 Python3.6-3.9\uff0c\u90fd\u662f OK \u7684\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>l});var i=t(11504);const o={},s=i.createContext(o);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);