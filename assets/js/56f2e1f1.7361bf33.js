"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[32769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,y=u["".concat(c,".").concat(g)]||u[g]||m[g]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Django \u4fee\u6539 modules \u65f6\u51fa\u9519",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/emzcai"},i=void 0,l={permalink:"/2020/11/06/Django \u4fee\u6539modules\u65f6\u51fa\u9519",source:"@site/blog/2020-11-06-Django \u4fee\u6539modules\u65f6\u51fa\u9519.md",title:"Django \u4fee\u6539 modules \u65f6\u51fa\u9519",description:"django.db.utils.IntegrityError: NOT NULL constraint failed",date:"2020-11-06T00:00:00.000Z",formattedDate:"2020\u5e7411\u67086\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:.2833333333333333,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Django \u4fee\u6539 modules \u65f6\u51fa\u9519",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/emzcai"},prevItem:{title:"Django \u521d\u59cb\u5316 project",permalink:"/2020/11/09/Django \u521d\u59cb\u5316project"},nextItem:{title:"join \u4e0e format \u4e0d\u540c\u7684\u7528\u6cd5",permalink:"/2020/11/06/join \u4e0e format \u4e0d\u540c\u7684\u7528\u6cd5"}},c={authorsImageUrls:[]},s=[{value:"django.db.utils.IntegrityError: NOT NULL constraint failed",id:"djangodbutilsintegrityerror-not-null-constraint-failed",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"djangodbutilsintegrityerror-not-null-constraint-failed"},"django.db.utils.IntegrityError: NOT NULL constraint failed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"> python3 manage.py migrate \n\u9519\u8bef\uff1adjango.db.utils.IntegrityError: NOT NULL constraint failed\n\n# \u5728\u6267\u884c migrate \u9047\u5230\u4e86\u4ee5\u4e0a\u9519\u8bef\uff0c\u4f46\u5b9e\u9645\u4e0a\u5df2\u7ecf\u628a\u9519\u8bef\u6dfb\u52a0\u7684\u5b57\u6bb5\u7ed9\u79fb\u9664\u540e\u91cd\u65b0 makemigrations\n\n# \u89e3\u51b3\u529e\u6cd5\n\n\u5220\u9664 migrations \u4e2d\u5bf9\u5e94\u751f\u6210\u7684 `0006` \u6587\u4ef6\n\n\u7136\u540e\uff0c\u518d\u6b21\u8fd0\u884c2\u4e2a\u547d\u4ee4\n\npython3 manage.py makemigrations\npython3 manage.py migrate\n")))}m.isMDXComponent=!0}}]);