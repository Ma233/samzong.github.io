"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[33148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,y=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"python flask form",tags:[]},i=void 0,l={permalink:"/2022/01/03/python-flask-form",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2022-01-03-python-flask-form.md",source:"@site/blog/2022-01-03-python-flask-form.md",title:"python flask form",description:"",date:"2022-01-03T00:00:00.000Z",formattedDate:"2022\u5e741\u67083\u65e5",tags:[],readingTime:.6733333333333333,hasTruncateMarker:!1,authors:[],frontMatter:{title:"python flask form",tags:[]},prevItem:{title:"get current timestamp",permalink:"/2022/01/03/get-current-timestamp"},nextItem:{title:"Github \u4f7f\u7528 SSH \u62c9\u53d6\u4ee3\u7801\u52a0\u901f",permalink:"/2021/11/29/git-zhong-duan-clone-jia-su"}},p={authorsImageUrls:[]},c=[],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"form_data = request.form  # \u83b7\u53d6\u8868\u5355\u4e2d\u7684\u63d0\u4ea4\u7684\u6570\u636e\uff0c\u8fd9\u4e2a\u662f\u5b9a\u4e49\u4e86\u4e00\u4e2a post \u63a5\u53e3\uff0c\u5165\u53c2\u4f1a\u653e\u5728 form_data \u8fd9\u91cc\u63a5\u53e3\u53ef\u4ee5\u5728 Google Chrome DevTools \u4e2d\u7684 Doc\nargs_data = request.args # \u83b7\u53d6\u7684\u662f url \u4e2d\u7684\u53c2\u6570 tips: ?method=12312&token=123121 > \u8fd9\u91cc\u83b7\u53d6\u5230\u7684\u662f\u4e00\u4e2a List\njson_data = request.get_json() # \u83b7\u53d6\u7684\u662f\u4ece `POST` \u6536\u5230\u7684\u5bf9\u5e94 json\uff0c\u8fd9\u91cc\u7684\u63a5\u53e3\u6587\u6863\u4f1a\u653e\u5728 Google Chrome DevTools \u4e2d\u7684 XHR\n\n\ndef func(method int):   # \u8fd9\u91cc\u662f\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\u7684\u5165\u53c2\u65f6\uff0c\u6307\u5b9a\u4e86\u5bf9\u5e94\u7684\u7c7b\u578b\n\n\napp.api_add('/api/intface/<name>/<json>', method=['GET', 'POST'])\n\n- <name> \u6307\u8fd9\u91cc\u7684\u52a8\u6001\u5185\u5bb9\u4f1a\u5f53\u505a\u52a8\u6001\u503c\u4f20\u7ed9 name, json\u540c\u7406\n- method \u5b9a\u4e49\u7684\u662f\u63a5\u53e3\u652f\u6301\u7684\u8bf7\u6c42\u65b9\u5f0f\n\n\n# python flask request \u6ce8\u610f\u7ba1\u7406 \u53c2\u6570\u7684\u751f\u6548\u65f6\u673a\uff0c\u5176\u4e2d\u6709\u4e2a `g` \u53ef\u4ee5\u5173\u6ce8\u4e0b\uff0c\u5177\u4f53\u53ef\u4ee5\u591a\u4e86\u89e3\u70b9\u4ecb\u7ecd\n")))}u.isMDXComponent=!0}}]);