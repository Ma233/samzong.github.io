"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[35944],{74008:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>m,toc:()=>i});var o=n(17624),a=n(4552);const r={title:"python flask form",tags:["Python"]},s=void 0,m={permalink:"/2022/01/03/python-flask-form",source:"@site/blog/2022-01-03-python-flask-form.md",title:"python flask form",description:"",date:"2022-01-03T00:00:00.000Z",formattedDate:"2022\u5e741\u67083\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"python flask form",tags:["Python"]},unlisted:!1,prevItem:{title:"get current timestamp",permalink:"/2022/01/03/get-current-timestamp"},nextItem:{title:"Github \u4f7f\u7528 SSH \u62c9\u53d6\u4ee3\u7801\u52a0\u901f",permalink:"/2021/11/29/git-zhong-duan-clone-jia-su"}},c={authorsImageUrls:[]},i=[];function l(t){const e={code:"code",pre:"pre",...(0,a.M)(),...t.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"form_data = request.form  # \u83b7\u53d6\u8868\u5355\u4e2d\u7684\u63d0\u4ea4\u7684\u6570\u636e\uff0c\u8fd9\u4e2a\u662f\u5b9a\u4e49\u4e86\u4e00\u4e2a post \u63a5\u53e3\uff0c\u5165\u53c2\u4f1a\u653e\u5728 form_data \u8fd9\u91cc\u63a5\u53e3\u53ef\u4ee5\u5728 Google Chrome DevTools \u4e2d\u7684 Doc\nargs_data = request.args # \u83b7\u53d6\u7684\u662f url \u4e2d\u7684\u53c2\u6570 tips: ?method=12312&token=123121 > \u8fd9\u91cc\u83b7\u53d6\u5230\u7684\u662f\u4e00\u4e2a List\njson_data = request.get_json() # \u83b7\u53d6\u7684\u662f\u4ece `POST` \u6536\u5230\u7684\u5bf9\u5e94 json\uff0c\u8fd9\u91cc\u7684\u63a5\u53e3\u6587\u6863\u4f1a\u653e\u5728 Google Chrome DevTools \u4e2d\u7684 XHR\n\n\ndef func(method int):   # \u8fd9\u91cc\u662f\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\u7684\u5165\u53c2\u65f6\uff0c\u6307\u5b9a\u4e86\u5bf9\u5e94\u7684\u7c7b\u578b\n\n\napp.api_add('/api/intface/<name>/<json>', method=['GET', 'POST'])\n\n- <name> \u6307\u8fd9\u91cc\u7684\u52a8\u6001\u5185\u5bb9\u4f1a\u5f53\u505a\u52a8\u6001\u503c\u4f20\u7ed9 name, json\u540c\u7406\n- method \u5b9a\u4e49\u7684\u662f\u63a5\u53e3\u652f\u6301\u7684\u8bf7\u6c42\u65b9\u5f0f\n\n\n# python flask request \u6ce8\u610f\u7ba1\u7406 \u53c2\u6570\u7684\u751f\u6548\u65f6\u673a\uff0c\u5176\u4e2d\u6709\u4e2a `g` \u53ef\u4ee5\u5173\u6ce8\u4e0b\uff0c\u5177\u4f53\u53ef\u4ee5\u591a\u4e86\u89e3\u70b9\u4ecb\u7ecd\n"})})}function p(t={}){const{wrapper:e}={...(0,a.M)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},4552:(t,e,n)=>{n.d(e,{I:()=>m,M:()=>s});var o=n(11504);const a={},r=o.createContext(a);function s(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function m(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);