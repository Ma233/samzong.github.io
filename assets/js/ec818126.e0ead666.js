"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[58806],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(t),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={title:"pprint beautiful json format",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/sqoykk"},c=void 0,i={permalink:"/2021/02/15/pprint beautiful json format",source:"@site/blog/2021-02-15-pprint beautiful json format.md",title:"pprint beautiful json format",description:"",date:"2021-02-15T00:00:00.000Z",formattedDate:"2021\u5e742\u670815\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:.5066666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"pprint beautiful json format",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/sqoykk"},prevItem:{title:"macOs Terminal \u4e09\u5251\u5ba2",permalink:"/2021/02/15/macOs Terminal \u4e09\u5251\u5ba2"},nextItem:{title:"python3 traceback",permalink:"/2021/02/15/python3 traceback"}},p={authorsImageUrls:[]},l=[],u={toc:l},s="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import pprint\n\npp = pprint.PrettyPrinter(indent=2)\npp.pprint(res.json())\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{   'data': [   {   '_serializer': 'v2.book',\n                    'content_updated_at': '2020-10-21T05:17:01.890Z',\n                    'created_at': '2020-10-20T15:37:45.000Z',\n                    'creator_id': 343806,\n                    'description': '\u9644\u4ef6\u548c\u6709\u8da3\u7684\u4e1c\u897f',\n                    'id': 1906752,\n                    'items_count': 1,\n                    'likes_count': 0,\n                    'name': '\u8d44\u6e90\u5e93',\n                    'namespace': 'samzonglu/mgg8fc',\n                    'public': 0,\n                    'slug': 'mgg8fc',\n                    'type': 'Resource',\n                    'updated_at': '2020-10-21T05:17:01.000Z',\n                    'user': {   '_serializer': 'v2.user',\n                                'avatar_url': 'https://cdn.nlark.com/yuque/0/2020/png/343806/1603164657666-avatar/86b58a0e-7e5a-49ed-b28f-25a11b64c920.png',\n                                'created_at': '2019-05-11T09:04:37.000Z',\n                                'description': '\u8bfb\u53f2\u4ee5\u660e\u5fd7',\n                                'followers_count': 0,\n                                'following_count': 14,\n                                'id': 343806,\n                                'login': 'samzonglu',\n                                'name': 'samzong.lu',\n                                'type': 'User',\n                                'updated_at': '2020-10-20T23:51:02.000Z'},\n                    'user_id': 343806,\n                    'watches_count': 1},\n                {   '_serializer': 'v2.book',\n                    'content_updated_at': '2020-10-20T06:31:42.400Z',\n                    'created_at': '2020-10-14T02:11:09.000Z',\n                    'creator_id': 343806,\n                    'description': 'Python3',\n                    'id': 1880166,\n                    'items_count': 2,\n                    'likes_count': 0,\n                    'name': '\u5b66\u4e60\u7b14\u8bb0',\n                    'namespace': 'samzonglu/nbasax',\n                    'public': 0,\n                    'slug': 'nbasax',\n                    'type': 'Book',\n                    'updated_at': '2020-10-21T07:05:07.000Z',\n                    'user': {   '_serializer': 'v2.user',\n                                'avatar_url': 'https://cdn.nlark.com/yuque/0/2020/png/343806/1603164657666-avatar/86b58a0e-7e5a-49ed-b28f-25a11b64c920.png',\n                                'created_at': '2019-05-11T09:04:37.000Z',\n                                'description': '\u8bfb\u53f2\u4ee5\u660e\u5fd7',\n                                'followers_count': 0,\n                                'following_count': 14,\n                                'id': 343806,\n                                'login': 'samzonglu',\n                                'name': 'samzong.lu',\n                                'type': 'User',\n                                'updated_at': '2020-10-20T23:51:02.000Z'},\n                    'user_id': 343806,\n                    'watches_count': 1}]}\n")))}m.isMDXComponent=!0}}]);