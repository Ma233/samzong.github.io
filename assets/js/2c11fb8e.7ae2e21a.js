"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[2276],{58036:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var t=s(17624),i=s(4552);const l={title:"GitHub Pages \u7684\u5999\u7528",tags:["Github"],date:new Date("2022-04-22T17:23:00.000Z")},r=void 0,c={permalink:"/2022/04/22/github-pages-de-miao-yong",source:"@site/blog/2022-04-22-github-pages-de-miao-yong.md",title:"GitHub Pages \u7684\u5999\u7528",description:"\u672c\u6765\u662f\u60f3\u597d\u597d\u5de5\u4f5c\u7684",date:"2022-04-22T17:23:00.000Z",formattedDate:"2022\u5e744\u670822\u65e5",tags:[{label:"Github",permalink:"/tags/github"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"GitHub Pages \u7684\u5999\u7528",tags:["Github"],date:"2022-04-22T17:23:00.000Z"},unlisted:!1,prevItem:{title:"kubernetes \u5b66\u4e60\u4e4b\u8def",permalink:"/2022/04/24/kubernetes-xue-xi-zhi-lu"},nextItem:{title:"Kubernetes \u90e8\u7f72\u9519\u8bef\u89e3\u51b3\u6c47\u603b",permalink:"/2022/04/21/kubernetes-bu-shu-cuo-wu-jie-jue-hui-zong"}},h={authorsImageUrls:[]},a=[{value:"\u672c\u6765\u662f\u60f3\u597d\u597d\u5de5\u4f5c\u7684",id:"\u672c\u6765\u662f\u60f3\u597d\u597d\u5de5\u4f5c\u7684",level:2},{value:"\u4e00\u5206\u949f\u5feb\u901f\u642d\u5efa\u7f51\u7ad9",id:"\u4e00\u5206\u949f\u5feb\u901f\u642d\u5efa\u7f51\u7ad9",level:2},{value:"\u7b80\u5355\u7684\u914d\u7f6e",id:"\u7b80\u5355\u7684\u914d\u7f6e",level:2},{value:"\u9ad8\u7ea7\u529f\u80fd\uff1a\u7ed3\u5408 GitHub issue \u7684\u8bc4\u8bba\u529f\u80fd",id:"\u9ad8\u7ea7\u529f\u80fd\u7ed3\u5408-github-issue-\u7684\u8bc4\u8bba\u529f\u80fd",level:2},{value:"End",id:"end",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u672c\u6765\u662f\u60f3\u597d\u597d\u5de5\u4f5c\u7684",children:"\u672c\u6765\u662f\u60f3\u597d\u597d\u5de5\u4f5c\u7684"}),"\n",(0,t.jsxs)(n.p,{children:["\u6700\u8fd1\u6362\u4e86\u65b0\u5de5\u4f5c\uff08\u540e\u9762\u627e\u4e2a\u65f6\u95f4\u597d\u597d\u8bf4\u8bf4\uff09\uff0c\u5927\u91cf\u63a5\u89e6 k8s & docker\uff0c\u5f00\u59cb\u5199\u4e86\u6bd4\u8f83\u591a\u7684 yaml \u548c Dockerfile\uff1b\u6563\u843d\u5728\u7535\u8111\u4e0a\u7684\u8bdd\uff0c\u8fd8\u662f\u5f88\u4e0d\u65b9\u4fbf\uff0c\u6709\u4e2a\u4ed3\u5e93\u7ba1\u7406\u8d77\u6765\u7684\u8bdd\uff0c\u5c31\u4f1a\u5f88\u65b9\u4fbf\u4e86\uff0c\u4e8e\u662f\u6709\u4e86\u8fd9\u4e2a\u9879\u76ee ",(0,t.jsx)(n.a,{href:"https://github.com/SAMZONG/k8s-yaml",children:"samzong/k8s-yaml"})]}),"\n",(0,t.jsx)(n.p,{children:"k8s-yaml \u4e00\u5f00\u59cb\u7684\u5b9a\u4e49\u5c31\u662f public\uff0c\u5e0c\u671b\u7ed9\u66f4\u591a\u5176\u4ed6\u7684\u4eba\u63d0\u4f9b\u5e2e\u52a9\uff0c\u7d22\u6027\u5c31\u518d\u589e\u52a0\u4e86\u4e00\u4e2a\u7f51\u9875\u5427"}),"\n",(0,t.jsx)(n.h2,{id:"\u4e00\u5206\u949f\u5feb\u901f\u642d\u5efa\u7f51\u7ad9",children:"\u4e00\u5206\u949f\u5feb\u901f\u642d\u5efa\u7f51\u7ad9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'git branch gh-pages\necho "## Hello gh-pages" > index.md\ngit push origin gh-pages\n'})}),"\n",(0,t.jsx)(n.p,{children:"eeen.... \u8fd9\u6837\u5c31 ok\uff01"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"gh-pages"})," \u662f\u6bcf\u4e2a GitHub \u4ed3\u5e93\u7684\u9ed8\u8ba4 github pages \u5206\u652f\uff0c\u5f53\u4f60\u521b\u5efa\u8fd9\u4e2a\u5206\u652f\u5e76\u63a8\u52a8\u5230 GitHub \u65f6\uff0c\u4f1a\u81ea\u52a8\u89e6\u53d1 Pages \u7684\u6784\u5efa\u4efb\u52a1\uff0c\u5927\u7ea6 30s \u5de6\u53f3\uff0c\u4f60\u5c31\u4f1a\u5f97\u5230\u4e00\u4e2a\u7f51\u7ad9"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://github_username",children:"http://github_username"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u7b80\u5355\u7684\u914d\u7f6e",children:"\u7b80\u5355\u7684\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/X4tbDt.png?x-oss-process=image/resize,w_960,m_lfit",alt:"X4tbDt"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u56fe\u7b80\u5355\u6307\u5f15\u4e86\u5982\u4f55\u6253\u5f00 GitHub Pages \u7684\u914d\u7f6e\u8def\u5f84\uff0c\u4e0b\u9762\u5bf9\u4e3b\u8981\u7684\u51e0\u4e2a\u6a21\u5757\u8fdb\u884c\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Source  - \u6307\u5b9a\u7684 \u4ee5\u90a3\u4e2a\u5206\u652f\u4f5c\u4e3a built \u6e90\u548c\u6587\u4ef6\u5939\uff0c\u9ed8\u8ba4\u662f gh-pages, \u5efa\u8bae\u4e0d\u52a8\uff0c\u7edf\u4e00\u8ba4\u77e5"}),"\n",(0,t.jsx)(n.li,{children:"Theme Chooser - \u9009\u62e9\u5bf9\u5e94\u7684\u535a\u5ba2\u4e3b\u9898\uff0c\u5927\u6982\u6709 10 \u4e2a\uff0c\u90fd\u6bd4\u8f83\u666e\u901a\uff0c\u6839\u636e\u81ea\u5df1\u559c\u597d\u6765\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u8fd9\u91cc\u4e0d\u5c55\u5f00 (Google Jekyll themes \u4e00\u5927\u5806"}),"\n",(0,t.jsxs)(n.li,{children:["Custom Domain - \u53ef\u4ee5\u6307\u5b9a\u9ed8\u8ba4\u7684\u7279\u5b9a\u7684\u57df\u540d\uff0c\u9700\u8981\u914d\u7f6e ",(0,t.jsx)(n.code,{children:"/CNAME"}),"\uff0c\u9700\u8981\u548c\u8fd9\u91cc\u7684\u57df\u540d\u4e00\u81f4\uff0c\u540c\u65f6\u57df\u540d\u89e3\u6790\u9700\u8981\u914d\u7f6e\u597d CNAME"]}),"\n",(0,t.jsx)(n.li,{children:"Enforce HTTPS - \u542f\u7528 HTTPS\uff0c\u9ed8\u8ba4\u4e0d\u542f\u52a8\uff0c\u5efa\u8bae\u542f\u7528"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["CNAME \u914d\u7f6e\uff0c\u5c06\u6307\u5b9a\u7684\u57df\u540d\u6307\u5411\u5230 ",(0,t.jsx)(n.code,{children:"[github_username].github.io"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7ecf\u8fc7\u7b80\u5355\u7684\u914d\u7f6e\uff0c\u8fd9\u4e2a\u4ed3\u5e93\u7684\u7f51\u7ad9\uff0c\u5df2\u7ecf\u5b8c\u6210\u4e86\u4f60\u60f3\u8981\u7684\uff1b\u5728 ",(0,t.jsx)(n.code,{children:"index.md"})," \u5185\u4fee\u6539\u4e3a\u4f60\u60f3\u8981\u7684\u5185\u5bb9\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9ad8\u7ea7\u529f\u80fd\u7ed3\u5408-github-issue-\u7684\u8bc4\u8bba\u529f\u80fd",children:"\u9ad8\u7ea7\u529f\u80fd\uff1a\u7ed3\u5408 GitHub issue \u7684\u8bc4\u8bba\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u91c7\u7528\u7684 \u8bc4\u8bba\u7ec4\u4ef6\u662f ",(0,t.jsx)(n.a,{href:"https://utteranc.es/",children:"utterances"}),", \u63d0\u4f9b\u8f7b\u91cf\u7ea7\u7684\u535a\u5ba2\u8bc4\u8bba\u529f\u80fd\uff0c\u5e76\u4e14\u8bc4\u8bba\u662f\u76f4\u63a5\u521b\u5efa GitHub issue\uff0c\u65b9\u4fbf\u7ba1\u7406"]}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u91cc\u4e0d\u8d58\u8ff0\u5b89\u88c5\u7ec6\u8282\u7684\uff0c\u6bd4\u8f83\u7b80\u5355\uff0c\u76f4\u63a5\u53bb\u770b\u4e0b\u9762\u51e0\u4e2a\u7f51\u7ad9\u5373\u53ef"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://utteranc.es/",children:"https://utteranc.es/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://roife.github.io/2021/02/12/use-utterances-for-comment/",children:"https://roife.github.io/2021/02/12/use-utterances-for-comment/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.evanlin.com/jekyll-remove-disqus/",children:"https://www.evanlin.com/jekyll-remove-disqus/"})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f\u9700\u8981\u589e\u52a0\u7684\u6587\u4ef6"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"mkdir _layouts\nwget https://raw.githubusercontent.com/SAMZONG/k8s-yaml/gh-pages/_layouts/post.html -o _layouts/post.html\n"})}),"\n",(0,t.jsx)(n.p,{children:"index.md \u589e\u52a0 layout \u53c2\u6570\uff0c\u8ffd\u52a0\u5728\u6700\u9876\u90e8"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"---\n---\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'git add _layouts/post.html\ngit add index.md\n\ngit commit -m "add comment module with utterances"\ngit push origin gh-pages\n'})}),"\n",(0,t.jsx)(n.h2,{id:"end",children:"End"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0a\u5c31\u662f\u5168\u90e8\u7684\u90e8\u7f72\u5185\u5bb9\u4e86\uff0c\u53ef\u4ee5\u53bb\u770b\u4e0b\u6211\u7684\u7f51\u7ad9\u548c\u9879\u76ee"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://k8s-yaml.samzong.me",children:"https://k8s-yaml.samzong.me"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f60\u89c9\u5f97\u559c\u6b22\uff0c\u6c42 fork\uff0c\u6c42 star"})]})}function d(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>r});var t=s(11504);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);