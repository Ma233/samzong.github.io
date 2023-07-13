"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[80769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,y=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},31816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"join \u4e0e format \u4e0d\u540c\u7684\u7528\u6cd5",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/wbt7rr"},i=void 0,c={permalink:"/2020/11/06/join \u4e0e format \u4e0d\u540c\u7684\u7528\u6cd5",source:"@site/blog/2020-11-06-join \u4e0e format \u4e0d\u540c\u7684\u7528\u6cd5.md",title:"join \u4e0e format \u4e0d\u540c\u7684\u7528\u6cd5",description:"\u5f53\u7136\u8fd8\u6709 %s\xa0\uff0c\u4f46\u66f4\u63a8\u8350\u4f7f\u7528 format\uff0c\u4efb\u4f55\u5728\u8bbe\u8ba1\u5230\u5b57\u7b26\u66ff\u6362\u7684\u90fd\u53ef\u4f7f\u7528\u5230",date:"2020-11-06T00:00:00.000Z",formattedDate:"2020\u5e7411\u67086\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:.30666666666666664,hasTruncateMarker:!1,authors:[],frontMatter:{title:"join \u4e0e format \u4e0d\u540c\u7684\u7528\u6cd5",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/wbt7rr"},prevItem:{title:"Django \u4fee\u6539 modules \u65f6\u51fa\u9519",permalink:"/2020/11/06/Django \u4fee\u6539modules\u65f6\u51fa\u9519"},nextItem:{title:"beautiful soup 4 \u4f7f\u7528\u6280\u5de7",permalink:"/2020/11/05/beautiful soup 4 \u4f7f\u7528\u6280\u5de7"}},l={authorsImageUrls:[]},p=[],s={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Join\nprint("and".join(["Jack", "Tom"]))\n> Jack and Tom\n\nprint("and".join(["Jack", "Tom", "Jessica"]))\n> Jack and Tom and Jessica\n\n# Format\nprint("\u4f60\u548c{}".Format("\u6211"))\n> \u4f60\u548c\u6211\n\nprint("{}\u4f60\u548c".Format("\u6211"))\n>\u6211\u4f60\u548c\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5f53\u7136\u8fd8\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"%s"),"\xa0\uff0c\u4f46\u66f4\u63a8\u8350\u4f7f\u7528 format\uff0c\u4efb\u4f55\u5728\u8bbe\u8ba1\u5230\u5b57\u7b26\u66ff\u6362\u7684\u90fd\u53ef\u4f7f\u7528\u5230")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'with open("{}_name.txt".format(api), "a+") as f:\n    f.write("{}, {}\\n".format(uid["user-id"], uid.string))\n    f.close()\n    \nstring_to_sign = \'{}\\n{}\'.format(timestamp, app_secret)\n\nmsg = "You get a new version. {}\\nThe download link : {}\\n".format(get_version, get_url)\n')))}u.isMDXComponent=!0}}]);