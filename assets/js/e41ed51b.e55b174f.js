"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[88591],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),g=i,f=u["".concat(c,".").concat(g)]||u[g]||m[g]||a;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},55685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const a={title:"python3 str \u53bb\u9664\u7279\u5b9a\u5185\u5bb9",tags:[]},o=void 0,p={permalink:"/2020/12/03/python3-str-qu-chu-te-ding-nei-rong",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2020-12-03-python3-str-qu-chu-te-ding-nei-rong.md",source:"@site/blog/2020-12-03-python3-str-qu-chu-te-ding-nei-rong.md",title:"python3 str \u53bb\u9664\u7279\u5b9a\u5185\u5bb9",description:"\u7ec4\u5408\u4f7f\u7528\u63d0\u51fa\u5927\u5199\u5b57\u6bcd",date:"2020-12-03T00:00:00.000Z",formattedDate:"2020\u5e7412\u67083\u65e5",tags:[],readingTime:.9366666666666666,hasTruncateMarker:!1,authors:[],frontMatter:{title:"python3 str \u53bb\u9664\u7279\u5b9a\u5185\u5bb9",tags:[]},prevItem:{title:"python \u5b8c\u6210\u6296\u5e97 API \u6388\u6743",permalink:"/2020/12/08/python-wan-cheng-dou-dian-api-shou-quan"},nextItem:{title:"Check You App readyOnAppleSilicon",permalink:"/2020/11/24/Check-You-Favorites-App-Is-Ready-Apple-Silicon"}},c={authorsImageUrls:[]},s=[{value:"\u7ec4\u5408\u4f7f\u7528\u63d0\u51fa\u5927\u5199\u5b57\u6bcd",id:"\u7ec4\u5408\u4f7f\u7528\u63d0\u51fa\u5927\u5199\u5b57\u6bcd",level:3}],l={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import string\n\nwhitespace \u2013 \u5305\u542b\u6240\u6709\u7a7a\u767d\u7684\u5b57\u7b26\u4e32\nascii_lowercase \u2013 \u5305\u542b\u6240\u6709\u5c0f\u5199\u5b57\u6bcd\u7684\u5b57\u7b26\u4e32\nascii_uppercase \u2013 \u4e00\u4e2a\u5305\u542b\u6240\u6709ASCII\u5927\u5199\u5b57\u6bcd\u7684\u5b57\u7b26\u4e32\nascii_letters \u2013 \u5305\u542b\u6240\u6709ASCII\u5b57\u6bcd\u7684\u5b57\u7b26\u4e32\ndigits \u2013 \u5305\u542b\u6240\u6709\u5341\u8fdb\u5236\u4f4d\u6570\u7684\u5b57\u7b26\u4e32\nhexdigits \u2013 \u5305\u542b\u6240\u6709 \u5341\u516d\u8fdb\u5236\u6570\u5b57\u7684\u5b57\u7b26\u4e32\noctdigits \u2013 \u5305\u542b\u6240\u6709\u516b\u8fdb\u5236\u6570\u5b57\u7684\u5b57\u7b26\u4e32\npunctuation \u2013 \u5305\u542b\u6240\u6709\u6807\u70b9\u5b57\u7b26\u7684\u5b57\u7b26\u4e32\nprintable \u2013 \u5305\u542b\u6240\u6709\u53ef\u6253\u5370\u7684\u5b57\u7b26\u7684\u5b57\u7b26\u4e32\n\n\nprint(string.digits)  # \u8f93\u51fa\u5305\u542b\u6570\u5b57 0~9 \u7684\u5b57\u7b26\u4e32\nprint(string.ascii_letters)  # \u5305\u542b\u6240\u6709\u5b57\u6bcd (\u5927\u5199\u6216\u5c0f\u5199) \u7684\u5b57\u7b26\u4e32\nprint(string.ascii_lowercase)  # \u5305\u542b\u6240\u6709\u5c0f\u5199\u5b57\u6bcd\u7684\u5b57\u7b26\u4e32\nprint(string.ascii_uppercase)  # \u5305\u542b\u6240\u6709\u5927\u5199\u5b57\u6bcd\u7684\u5b57\u7b26\u4e32\n##############\n0123456789\nabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\nABCDEFGHIJKLMNOPQRSTUVWXYZ\n\n\nprint([chr(i) for i in range(65, 91)])  # \u6240\u6709\u5927\u5199\u5b57\u6bcd\nprint([chr(i) for i in range(97, 123)])  # \u6240\u6709\u5c0f\u5199\u5b57\u6bcd\nprint([chr(i) for i in range(48, 58)])   # \u6240\u6709\u6570\u5b57\n\n\nimport random\ndef get_code():\n    source = list('0123456789')\n    for i in range(97, 123):\n        source.append(chr(i))\n    print(''.join(random.sample(source, 4)))\n")),(0,i.kt)("h3",{id:"\u7ec4\u5408\u4f7f\u7528\u63d0\u51fa\u5927\u5199\u5b57\u6bcd"},"\u7ec4\u5408\u4f7f\u7528\u63d0\u51fa\u5927\u5199\u5b57\u6bcd"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import string\n\na = 'XQX \u5927\u5bb6\u597d'\n \nprint(a.strip(string.ascii_uppercase)) # \u5229\u7528 string.uppercase \u4ee3\u8868\u5927\u5199\u5b57\u6bcd\n")))}m.isMDXComponent=!0}}]);