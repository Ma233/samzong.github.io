"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[43188],{49348:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var t=s(17624),l=s(4552);const i={title:"beautiful soup 4 \u4f7f\u7528\u6280\u5de7",tags:["Python"]},o=void 0,r={permalink:"/2020/11/05/beautiful-soup-4-shi-yong-ji-qiao",source:"@site/blog/2020-11-05-beautiful-soup-4-shi-yong-ji-qiao.md",title:"beautiful soup 4 \u4f7f\u7528\u6280\u5de7",description:"Code",date:"2020-11-05T00:00:00.000Z",formattedDate:"November 5, 2020",tags:[{label:"Python",permalink:"/tags/python"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"beautiful soup 4 \u4f7f\u7528\u6280\u5de7",tags:["Python"]},unlisted:!1,prevItem:{title:"join \u4e0e format \u4e0d\u540c\u7684\u7528\u6cd5",permalink:"/2020/11/06/join-yu-format-bu-tong-de-yong-fa"},nextItem:{title:"python3 setup.py --help-commands",permalink:"/2020/11/04/python3-setup.py-help-commands"}},c={authorsImageUrls:[]},a=[{value:"Code",id:"code",level:2},{value:"<code>select</code>\xa0\u8fd4\u56de\u7684\u662f\u4e00\u4e2a <code>list</code>",id:"select\u8fd4\u56de\u7684\u662f\u4e00\u4e2a-list",level:2},{value:"\u6253\u5370 HTML Tag \u5185\u7684\u6587\u672c",id:"\u6253\u5370-html-tag-\u5185\u7684\u6587\u672c",level:2}];function u(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# import module\n\nfrom bs4 import BeautifulSoup\n\n# with requests.request\nsoup = BeautifulSoup(res.content, 'lxml')\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"select"})," \u4f7f\u7528\u6280\u5de7"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# \u67e5\u8be2\u67d0\u4e00\u4e2a\u7279\u5b9a\u7684 HTML Tag \u7684\u65b9\u6cd5\nsoup.select("a")\n\n# \u67e5\u8be2\u67d0\u4e2a\u7279\u5b9a\u7684 class \u7684\u65b9\u6cd5\nsoup.select(class="class_name")\n\n# \u67e5\u8be2\u67d0\u4e2a\u7279\u5b9a\u7684 id \u7684\u65b9\u6cd5\uff0c\u67e5\u8be2\u6761\u4ef6\u524d\u52a0\u4e0a#\nsoup.select("#id_name")\n\n# \u901a\u8fc7\u4f7f\u7528\u7c7b\u540d\u6765\u8fdb\u884c\u67e5\u627e\uff0c\u67e5\u8be2\u6761\u4ef6\u524d\u52a0\u4e0a\u3002\nsoup.select(".class_name")\n\n\n--- \u7ec4\u5408\u6761\u4ef6\u67e5\u8be2\uff0c\u7528\u4e8e\u7f29\u5c0f\u8303\u56f4 ---\n\n# \u4ec5\u5728 Head \u5185\u67e5\u8be2 p \u6807\u7b7e\nsoup.select("head p")\n\n# \u4ec5\u5728 body \u4e2d\u7684 h6 \u6807\u7b7e\u4e2d\u67e5\u627e a \u6807\u7b7e\nsoup.select("body h6 a")\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<div class="top-nav">\n    <ul>\n        ...\n        <li class="cur"><span>\u7f51\u9875</span></li>\n        href="http://zhihu.sogou.com/" uigs-id="nav_zhihu" id="zhihu">\u77e5\u4e4e`</li>\n        <li><a onclick="st(this,\'40030500\',\'pic\')" href="http://pic.sogou.com" uigs-id="nav_pic" id="pic">\u56fe\u7247`</li>\n        ...\n    </ul>\n</div>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"li = bs.select('.top-nav ul li')\nprint(\"result len is\", len(li))\nfor tag in li:\n    print(tag)\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"select\u8fd4\u56de\u7684\u662f\u4e00\u4e2a-list",children:[(0,t.jsx)(n.code,{children:"select"}),"\xa0\u8fd4\u56de\u7684\u662f\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"list"})]}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u8fc7\u4e0b\u6807\uff0c\u53ef\u4ee5\u83b7\u53d6\u5230\u5bf9\u5e94\u7684\u5185\u5bb9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'for user in list:\n print(user)=<a title="\u90ed\u5927\u4fa0" user-id="1802863164" class="J_card" href="/member/1802863164">\u90ed\u5927\u4fa0`\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u6bd4\u5982\u8981\u6253\u5370\u51fa\u4e0a\u8ff0\u7684 user-id\uff0c\u53ef\u4ee5\u4f7f\u7528  ",(0,t.jsx)(n.code,{children:"print(user['user-id'])"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u6bd4\u5982\u8981\u6253\u5370\u51fa\u4e0a\u8ff0\u7684 title\uff0c\u53ef\u4ee5\u4f7f\u7528  ",(0,t.jsx)(n.code,{children:"print(user['title'])"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6253\u5370-html-tag-\u5185\u7684\u6587\u672c",children:"\u6253\u5370 HTML Tag \u5185\u7684\u6587\u672c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# .string   \u5728\u83b7\u53d6\u5230\u7684 tag \u540e\u9762\u589e\u52a0\n\nfor user in list:\n print(user)=<a title="\u90ed\u5927\u4fa0" user-id="1802863164" class="J_card" href="/member/1802863164">\u90ed\u5927\u4fa0`\n\n    print(user.string)\n'})})]})}function d(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>o});var t=s(11504);const l={},i=t.createContext(l);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);