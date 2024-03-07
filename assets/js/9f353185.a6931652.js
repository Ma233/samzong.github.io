"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[224],{23120:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(17624),s=t(4552);const i={title:"Creating DataFrame using list",tags:["Python"]},o=void 0,r={permalink:"/2021/11/17/creating-dataframe-using-list",source:"@site/blog/2021-11-17-creating-dataframe-using-list.md",title:"Creating DataFrame using list",description:"image.png",date:"2021-11-17T00:00:00.000Z",formattedDate:"2021\u5e7411\u670817\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Creating DataFrame using list",tags:["Python"]},unlisted:!1,prevItem:{title:"\u9489\u9489\u5185\u7f51\u7a7f\u900f\u5de5\u5177",permalink:"/2021/11/19/ding-ding-nei-wang-chuan-tou-gong-ju"},nextItem:{title:"\u4f7f\u7528\u9489\u9489\u4e09\u65b9\u6388\u6743\u767b\u5f55",permalink:"/2021/11/17/shi-yong-ding-ding-san-fang-shou-quan-deng-lu"}},c={authorsImageUrls:[]},l=[];function m(n){const e={code:"code",img:"img",p:"p",pre:"pre",...(0,s.M)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import pandas as pd\n  \n# list of strings\nlst = ['Geeks', 'For', 'Geeks', 'is', \n            'portal', 'for', 'Geeks']\n  \n# Calling DataFrame constructor on list\ndf = pd.DataFrame(lst)\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1639326317905-b923391a-6135-482f-8b43-9a67e1f6245f.png?x-oss-process=image/resize,w_960,m_lfit",alt:"image.png"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# import pandas as pd\nimport pandas as pd\n\n# list of strings\nlst = ['Geeks', 'For', 'Geeks', 'is', 'portal', 'for', 'Geeks']\n\n# Calling DataFrame constructor on list\n# with indices and columns specified\ndf = pd.DataFrame(lst, index =['a', 'b', 'c', 'd', 'e', 'f', 'g'],\n           columns =['Names'])\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1639326330330-97380b9c-a674-479c-a4f4-074ef3128aa3.png?x-oss-process=image/resize,w_960,m_lfit",alt:"image.png"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Creating DataFrame using multi-dimensional list\n\nimport pandas as pd\n \n# List1\nlst = [['tom', 25], ['krish', 30],\n ['nick', 26], ['juli', 22]]\n \ndf = pd.DataFrame(lst, columns =['Name', 'Age'])\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1639326375589-cd58c20f-3dde-4eeb-a097-19dd3bf3376a.png?x-oss-process=image/resize,w_960,m_lfit",alt:"image.png"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Using multi-dimensional list with column name and dtype specified.\nimport pandas as pd\n \n# List1\nlst = [['tom', 'reacher', 25], ['krish', 'pete', 30],\n ['nick', 'wilson', 26], ['juli', 'williams', 22]]\n \ndf = pd.DataFrame(lst, columns =['FName', 'LName', 'Age'], dtype = float)\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(m,{...n})}):m(n)}},4552:(n,e,t)=>{t.d(e,{I:()=>r,M:()=>o});var a=t(11504);const s={},i=a.createContext(s);function o(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);