"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[76261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"pprint beautiful json format",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/sqoykk"},i=void 0,c={permalink:"/2021/02/15/pprint beautiful json format",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2021-02-15-pprint beautiful json format.md",source:"@site/blog/2021-02-15-pprint beautiful json format.md",title:"pprint beautiful json format",description:"",date:"2021-02-15T00:00:00.000Z",formattedDate:"2021\u5e742\u670815\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:.5066666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"pprint beautiful json format",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/sqoykk"},prevItem:{title:"macOs Terminal \u4e09\u5251\u5ba2",permalink:"/2021/02/15/macOs Terminal \u4e09\u5251\u5ba2"},nextItem:{title:"python3 traceback",permalink:"/2021/02/15/python3 traceback"}},p={authorsImageUrls:[]},l=[],u={toc:l},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import pprint\n\npp = pprint.PrettyPrinter(indent=2)\npp.pprint(res.json())\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{   'data': [   {   '_serializer': 'v2.book',\n                    'content_updated_at': '2020-10-21T05:17:01.890Z',\n                    'created_at': '2020-10-20T15:37:45.000Z',\n                    'creator_id': 343806,\n                    'description': '\u9644\u4ef6\u548c\u6709\u8da3\u7684\u4e1c\u897f',\n                    'id': 1906752,\n                    'items_count': 1,\n                    'likes_count': 0,\n                    'name': '\u8d44\u6e90\u5e93',\n                    'namespace': 'samzonglu/mgg8fc',\n                    'public': 0,\n                    'slug': 'mgg8fc',\n                    'type': 'Resource',\n                    'updated_at': '2020-10-21T05:17:01.000Z',\n                    'user': {   '_serializer': 'v2.user',\n                                'avatar_url': 'https://cdn.nlark.com/yuque/0/2020/png/343806/1603164657666-avatar/86b58a0e-7e5a-49ed-b28f-25a11b64c920.png',\n                                'created_at': '2019-05-11T09:04:37.000Z',\n                                'description': '\u8bfb\u53f2\u4ee5\u660e\u5fd7',\n                                'followers_count': 0,\n                                'following_count': 14,\n                                'id': 343806,\n                                'login': 'samzonglu',\n                                'name': 'samzong.lu',\n                                'type': 'User',\n                                'updated_at': '2020-10-20T23:51:02.000Z'},\n                    'user_id': 343806,\n                    'watches_count': 1},\n                {   '_serializer': 'v2.book',\n                    'content_updated_at': '2020-10-20T06:31:42.400Z',\n                    'created_at': '2020-10-14T02:11:09.000Z',\n                    'creator_id': 343806,\n                    'description': 'Python3',\n                    'id': 1880166,\n                    'items_count': 2,\n                    'likes_count': 0,\n                    'name': '\u5b66\u4e60\u7b14\u8bb0',\n                    'namespace': 'samzonglu/nbasax',\n                    'public': 0,\n                    'slug': 'nbasax',\n                    'type': 'Book',\n                    'updated_at': '2020-10-21T07:05:07.000Z',\n                    'user': {   '_serializer': 'v2.user',\n                                'avatar_url': 'https://cdn.nlark.com/yuque/0/2020/png/343806/1603164657666-avatar/86b58a0e-7e5a-49ed-b28f-25a11b64c920.png',\n                                'created_at': '2019-05-11T09:04:37.000Z',\n                                'description': '\u8bfb\u53f2\u4ee5\u660e\u5fd7',\n                                'followers_count': 0,\n                                'following_count': 14,\n                                'id': 343806,\n                                'login': 'samzonglu',\n                                'name': 'samzong.lu',\n                                'type': 'User',\n                                'updated_at': '2020-10-20T23:51:02.000Z'},\n                    'user_id': 343806,\n                    'watches_count': 1}]}\n")))}m.isMDXComponent=!0}}]);