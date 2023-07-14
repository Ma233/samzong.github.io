"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[29830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"beautiful soup 4 \u4f7f\u7528\u6280\u5de7",tags:["Python"]},o=void 0,i={permalink:"/2020/11/05/beautiful-soup-4-shi-yong-ji-qiao",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2020-11-05-beautiful-soup-4-shi-yong-ji-qiao.md",source:"@site/blog/2020-11-05-beautiful-soup-4-shi-yong-ji-qiao.md",title:"beautiful soup 4 \u4f7f\u7528\u6280\u5de7",description:"Code",date:"2020-11-05T00:00:00.000Z",formattedDate:"2020\u5e7411\u67085\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:.9633333333333334,hasTruncateMarker:!1,authors:[],frontMatter:{title:"beautiful soup 4 \u4f7f\u7528\u6280\u5de7",tags:["Python"]},prevItem:{title:"join \u4e0e format \u4e0d\u540c\u7684\u7528\u6cd5",permalink:"/2020/11/06/join-yu-format-bu-tong-de-yong-fa"},nextItem:{title:"python3 setup.py --help-commands",permalink:"/2020/11/04/python3-setup.py-help-commands"}},s={authorsImageUrls:[]},p=[{value:"Code",id:"code",level:2},{value:"<code>select</code>\xa0\u8fd4\u56de\u7684\u662f\u4e00\u4e2a <code>list</code>",id:"select\u8fd4\u56de\u7684\u662f\u4e00\u4e2a-list",level:2},{value:"\u6253\u5370 HTML Tag \u5185\u7684\u6587\u672c",id:"\u6253\u5370-html-tag-\u5185\u7684\u6587\u672c",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# import module\n\nfrom bs4 import BeautifulSoup\n\n# with requests.request\nsoup = BeautifulSoup(res.content, 'lxml')\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"select")," \u4f7f\u7528\u6280\u5de7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# \u67e5\u8be2\u67d0\u4e00\u4e2a\u7279\u5b9a\u7684 HTML Tag \u7684\u65b9\u6cd5\nsoup.select("a")\n\n# \u67e5\u8be2\u67d0\u4e2a\u7279\u5b9a\u7684 class \u7684\u65b9\u6cd5\nsoup.select(class="class_name")\n\n# \u67e5\u8be2\u67d0\u4e2a\u7279\u5b9a\u7684 id \u7684\u65b9\u6cd5\uff0c\u67e5\u8be2\u6761\u4ef6\u524d\u52a0\u4e0a#\nsoup.select("#id_name")\n\n# \u901a\u8fc7\u4f7f\u7528\u7c7b\u540d\u6765\u8fdb\u884c\u67e5\u627e\uff0c\u67e5\u8be2\u6761\u4ef6\u524d\u52a0\u4e0a\u3002\nsoup.select(".class_name")\n\n\n--- \u7ec4\u5408\u6761\u4ef6\u67e5\u8be2\uff0c\u7528\u4e8e\u7f29\u5c0f\u8303\u56f4 ---\n\n# \u4ec5\u5728 Head \u5185\u67e5\u8be2 p \u6807\u7b7e\nsoup.select("head p")\n\n# \u4ec5\u5728 body \u4e2d\u7684 h6 \u6807\u7b7e\u4e2d\u67e5\u627e a \u6807\u7b7e\nsoup.select("body h6 a")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="top-nav">\n    <ul>\n        ...\n        <li class="cur"><span>\u7f51\u9875</span></li>\n        href="http://zhihu.sogou.com/" uigs-id="nav_zhihu" id="zhihu">\u77e5\u4e4e`</li>\n        <li><a onclick="st(this,\'40030500\',\'pic\')" href="http://pic.sogou.com" uigs-id="nav_pic" id="pic">\u56fe\u7247`</li>\n        ...\n    </ul>\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"li = bs.select('.top-nav ul li')\nprint(\"result len is\", len(li))\nfor tag in li:\n    print(tag)\n")),(0,a.kt)("h2",{id:"select\u8fd4\u56de\u7684\u662f\u4e00\u4e2a-list"},(0,a.kt)("inlineCode",{parentName:"h2"},"select"),"\xa0\u8fd4\u56de\u7684\u662f\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"h2"},"list")),(0,a.kt)("p",null,"\u901a\u8fc7\u8fc7\u4e0b\u6807\uff0c\u53ef\u4ee5\u83b7\u53d6\u5230\u5bf9\u5e94\u7684\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'for user in list:\n print(user)=<a title="\u90ed\u5927\u4fa0" user-id="1802863164" class="J_card" href="/member/1802863164">\u90ed\u5927\u4fa0`\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bd4\u5982\u8981\u6253\u5370\u51fa\u4e0a\u8ff0\u7684 user-id\uff0c\u53ef\u4ee5\u4f7f\u7528  ",(0,a.kt)("inlineCode",{parentName:"li"},"print(user['user-id'])")),(0,a.kt)("li",{parentName:"ul"},"\u6bd4\u5982\u8981\u6253\u5370\u51fa\u4e0a\u8ff0\u7684 title\uff0c\u53ef\u4ee5\u4f7f\u7528  ",(0,a.kt)("inlineCode",{parentName:"li"},"print(user['title'])"))),(0,a.kt)("h2",{id:"\u6253\u5370-html-tag-\u5185\u7684\u6587\u672c"},"\u6253\u5370 HTML Tag \u5185\u7684\u6587\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# .string   \u5728\u83b7\u53d6\u5230\u7684 tag \u540e\u9762\u589e\u52a0\n\nfor user in list:\n print(user)=<a title="\u90ed\u5927\u4fa0" user-id="1802863164" class="J_card" href="/member/1802863164">\u90ed\u5927\u4fa0`\n\n    print(user.string)\n')))}m.isMDXComponent=!0}}]);