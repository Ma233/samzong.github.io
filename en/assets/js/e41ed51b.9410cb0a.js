"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[90386],{34160:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=t(17624),i=t(4552);const s={title:"python3 str \u53bb\u9664\u7279\u5b9a\u5185\u5bb9",tags:["Python"]},o=void 0,a={permalink:"/en/2020/12/03/python3-str-qu-chu-te-ding-nei-rong",source:"@site/blog/2020-12-03-python3-str-qu-chu-te-ding-nei-rong.md",title:"python3 str \u53bb\u9664\u7279\u5b9a\u5185\u5bb9",description:"\u7ec4\u5408\u4f7f\u7528\u63d0\u51fa\u5927\u5199\u5b57\u6bcd",date:"2020-12-03T00:00:00.000Z",formattedDate:"December 3, 2020",tags:[{label:"Python",permalink:"/en/tags/python"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"python3 str \u53bb\u9664\u7279\u5b9a\u5185\u5bb9",tags:["Python"]},unlisted:!1,prevItem:{title:"python \u5b8c\u6210\u6296\u5e97 API \u6388\u6743",permalink:"/en/2020/12/08/python-wan-cheng-dou-dian-api-shou-quan"},nextItem:{title:"Check You App readyOnAppleSilicon",permalink:"/en/2020/11/24/Check-You-Favorites-App-Is-Ready-Apple-Silicon"}},c={authorsImageUrls:[]},p=[{value:"\u7ec4\u5408\u4f7f\u7528\u63d0\u51fa\u5927\u5199\u5b57\u6bcd",id:"\u7ec4\u5408\u4f7f\u7528\u63d0\u51fa\u5927\u5199\u5b57\u6bcd",level:3}];function l(n){const e={code:"code",h3:"h3",pre:"pre",...(0,i.M)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import string\n\nwhitespace \u2013 \u5305\u542b\u6240\u6709\u7a7a\u767d\u7684\u5b57\u7b26\u4e32\nascii_lowercase \u2013 \u5305\u542b\u6240\u6709\u5c0f\u5199\u5b57\u6bcd\u7684\u5b57\u7b26\u4e32\nascii_uppercase \u2013 \u4e00\u4e2a\u5305\u542b\u6240\u6709ASCII\u5927\u5199\u5b57\u6bcd\u7684\u5b57\u7b26\u4e32\nascii_letters \u2013 \u5305\u542b\u6240\u6709ASCII\u5b57\u6bcd\u7684\u5b57\u7b26\u4e32\ndigits \u2013 \u5305\u542b\u6240\u6709\u5341\u8fdb\u5236\u4f4d\u6570\u7684\u5b57\u7b26\u4e32\nhexdigits \u2013 \u5305\u542b\u6240\u6709 \u5341\u516d\u8fdb\u5236\u6570\u5b57\u7684\u5b57\u7b26\u4e32\noctdigits \u2013 \u5305\u542b\u6240\u6709\u516b\u8fdb\u5236\u6570\u5b57\u7684\u5b57\u7b26\u4e32\npunctuation \u2013 \u5305\u542b\u6240\u6709\u6807\u70b9\u5b57\u7b26\u7684\u5b57\u7b26\u4e32\nprintable \u2013 \u5305\u542b\u6240\u6709\u53ef\u6253\u5370\u7684\u5b57\u7b26\u7684\u5b57\u7b26\u4e32\n\n\nprint(string.digits)  # \u8f93\u51fa\u5305\u542b\u6570\u5b57 0~9 \u7684\u5b57\u7b26\u4e32\nprint(string.ascii_letters)  # \u5305\u542b\u6240\u6709\u5b57\u6bcd (\u5927\u5199\u6216\u5c0f\u5199) \u7684\u5b57\u7b26\u4e32\nprint(string.ascii_lowercase)  # \u5305\u542b\u6240\u6709\u5c0f\u5199\u5b57\u6bcd\u7684\u5b57\u7b26\u4e32\nprint(string.ascii_uppercase)  # \u5305\u542b\u6240\u6709\u5927\u5199\u5b57\u6bcd\u7684\u5b57\u7b26\u4e32\n##############\n0123456789\nabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\nABCDEFGHIJKLMNOPQRSTUVWXYZ\n\n\nprint([chr(i) for i in range(65, 91)])  # \u6240\u6709\u5927\u5199\u5b57\u6bcd\nprint([chr(i) for i in range(97, 123)])  # \u6240\u6709\u5c0f\u5199\u5b57\u6bcd\nprint([chr(i) for i in range(48, 58)])   # \u6240\u6709\u6570\u5b57\n\n\nimport random\ndef get_code():\n    source = list('0123456789')\n    for i in range(97, 123):\n        source.append(chr(i))\n    print(''.join(random.sample(source, 4)))\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u7ec4\u5408\u4f7f\u7528\u63d0\u51fa\u5927\u5199\u5b57\u6bcd",children:"\u7ec4\u5408\u4f7f\u7528\u63d0\u51fa\u5927\u5199\u5b57\u6bcd"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import string\n\na = 'XQX \u5927\u5bb6\u597d'\n \nprint(a.strip(string.ascii_uppercase)) # \u5229\u7528 string.uppercase \u4ee3\u8868\u5927\u5199\u5b57\u6bcd\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},4552:(n,e,t)=>{t.d(e,{I:()=>a,M:()=>o});var r=t(11504);const i={},s=r.createContext(i);function o(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);