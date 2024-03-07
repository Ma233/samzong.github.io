"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[97616],{12144:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>g});var o=e(17624),a=e(4552);const s={title:"dingtalk orgBot sign generate",tags:["Python"]},i=void 0,r={permalink:"/2021/02/09/dingtalk-orgbot-sign-generate",source:"@site/blog/2021-02-09-dingtalk-orgbot-sign-generate.md",title:"dingtalk orgBot sign generate",description:"\u9700\u8981\u4f7f\u7528\u5230 hmac \u4ee5\u53ca time \u5e93",date:"2021-02-09T00:00:00.000Z",formattedDate:"2021\u5e742\u67089\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"dingtalk orgBot sign generate",tags:["Python"]},unlisted:!1,prevItem:{title:"requests post data \u65f6\u5bf9 json \u9700\u8981\u7279\u6b8a\u6ce8\u610f",permalink:"/2021/02/15/requests-post-data-shi-dui-json-xu-yao-te-shu-zhu-yi"},nextItem:{title:"python django \u7f16\u5199\u516c\u5171\u6a21\u5757\u5728 app \u4e2d\u5f15\u7528",permalink:"/2021/02/07/python-django-bian-xie-gong-gong-mo-kuai-zai-app-zhong-yin-yong"}},c={authorsImageUrls:[]},g=[];function p(n){const t={code:"code",p:"p",pre:"pre",...(0,a.M)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"\u9700\u8981\u4f7f\u7528\u5230 hmac \u4ee5\u53ca time \u5e93"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"#/usr/bin/env python3\n# -*- coding: UTF-8 -*-\n\n\nimport hmac\nimport hashlib\nimport base64\nimport time\n\ntimestamp = lambda: int(round(time.time() * 1000))\n\ntimestamp = ''\n\napp_secret = 'BvuHQ-bTB2PiChlyCD3rgdNgHfMSYb0m4iQ_T1mEmG8ImBPQ1DSN3qwRU2-GblxR'\napp_secret_enc = app_secret.encode('utf-8')\nstring_to_sign = '{}\\n{}'.format(timestamp, app_secret)\nstring_to_sign_enc = string_to_sign.encode('utf-8')\nhmac_code = hmac.new(app_secret_enc, string_to_sign_enc, digestmod=hashlib.sha256).digest()\nsign = base64.b64encode(hmac_code).decode('utf-8')\n\nprint(sign)\n\n"})})]})}function m(n={}){const{wrapper:t}={...(0,a.M)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},4552:(n,t,e)=>{e.d(t,{I:()=>r,M:()=>i});var o=e(11504);const a={},s=o.createContext(a);function i(n){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),o.createElement(s.Provider,{value:t},n.children)}}}]);