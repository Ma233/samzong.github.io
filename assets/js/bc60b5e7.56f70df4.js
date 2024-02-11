"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[83280],{77976:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var s=t(17624),o=t(4552);const r={title:"Pyenv Python \u7248\u672c\u7ba1\u7406",toc:!0,authors:["samzong"],tags:["Python"],date:new Date("2022-03-27T21:18:00.000Z")},c=void 0,i={permalink:"/2022/03/27/python-duo-ban-ben-guan-li-gong-ju",source:"@site/blog/2022-03-27-python-duo-ban-ben-guan-li-gong-ju.md",title:"Pyenv Python \u7248\u672c\u7ba1\u7406",description:"to_url//pyenv.run/",date:"2022-03-27T21:18:00.000Z",formattedDate:"March 27, 2022",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:2.87,hasTruncateMarker:!1,authors:[{name:"Samzong Lu",title:"Product Designer",url:"https://github.com/SAMZONG",email:"samzong.lu@gmail.com",imageURL:"https://github.com/SAMZONG.png",key:"samzong"}],frontMatter:{title:"Pyenv Python \u7248\u672c\u7ba1\u7406",toc:!0,authors:["samzong"],tags:["Python"],date:"2022-03-27T21:18:00.000Z"},unlisted:!1,prevItem:{title:"2022 \u65b0\u7684\u76ee\u6807",permalink:"/2022/03/11/xin-de-mu-biao"},nextItem:{title:"Poetry \u4f7f\u7528\u7b14\u8bb0",permalink:"/2022/03/27/poetry-shi-yong-bi-ji"}},a={authorsImageUrls:[void 0]},h=[{value:"\u5b89\u88c5 <code>pyenv</code>",id:"\u5b89\u88c5-pyenv",level:2},{value:"\u4f7f\u7528 <code>pyenv</code> \u5b89\u88c5\u7279\u5b9a\u7248\u672c\u7684 python",id:"\u4f7f\u7528-pyenv-\u5b89\u88c5\u7279\u5b9a\u7248\u672c\u7684-python",level:2}];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",img:"img",p:"p",pre:"pre",...(0,o.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["to_url : ",(0,s.jsx)(e.a,{href:"http://pyenv.run/",children:"http://pyenv.run/"}),"\ngithub offical site ",(0,s.jsx)(e.a,{href:"https://github.com/pyenv/pyenv",children:"https://github.com/pyenv/pyenv"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5728 MacOS \u7684\u4f7f\u7528\u65b9\u5f0f\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"brew install pyenv\n"})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528 pyenv \u8fd8\u662f\u633a\u65b9\u4fbf\u7684\uff0c\u4f46\u662f\u5728 Linux \u4e91\u670d\u52a1\u5668\u4e0a\u914d\u7f6e\u7f51\u7edc\u7684\u8bdd\u5c31\u6bd4\u8f83\u9ebb\u70e6\u4e86\uff0c\u6bd4\u5982\u6211\u5728\u7528\u7684\u963f\u91cc\u4e91 ECS\uff0c\u4e2d\u95f4\u6709\u4e9b\u66f2\u6298\uff0c\u6240\u4ee5\u7f16\u5199\u4e0b\u6587\u6863\u8bb0\u5f55\u4e0b\u6765\uff0c\u4ee5\u9632\u540e\u7eed\u4f7f\u7528\u9047\u5230\u95ee\u9898"}),"\n",(0,s.jsxs)(e.h2,{id:"\u5b89\u88c5-pyenv",children:["\u5b89\u88c5 ",(0,s.jsx)(e.code,{children:"pyenv"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u5b98\u65b9\u63a8\u8350\ncurl https://pyenv.run | bash\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4e00\u4e2a\u7b80\u5355\u7684\u547d\u4ee4\u5c31\u597d\u4e86\uff0c\u5b89\u88c5\u540e pyenv \u6587\u4ef6 \u4f1a\u5728\u4f60\u7684 ",(0,s.jsx)(e.code,{children:"$HOME/.pyenv"})," \uff0c\u53ef\u4ee5\u5c1d\u8bd5\u770b\u4e0b\u811a\u672c\u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u8fd9\u91cc\u7b80\u5355\u8d34\u51fa\u6765\u4e86\uff1b\u53ef\u4ee5\u770b\u5230\u5b9e\u9645\u6267\u884c\u7684\u811a\u672c\u6587\u4ef6\u662f\u4e0b\u9762\u8fd9\u4e2a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u5efa\u8bae\u770b\u4e0b\u811a\u672c\ncurl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash\n\n# \u4e0b\u8f7d\u811a\u672c\u6587\u4ef6\nwget https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer -O ~/pyenv-installer\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u7684\u670d\u52a1\u5668\u73af\u5883\u6bd4\u8f83\u60b2\u50ac\uff0c\u8bbf\u95ee GitHub \u4e5f\u662f\u6bd4\u8f83\u9ebb\u70e6\uff0c\u90a3\u4e48\u53ef\u4ee5\u770b\u4e0b\u8fd9\u4e2a\u7f51\u7ad9 \xa0",(0,s.jsx)(e.a,{href:"https://gitclone.com/",children:"https://gitclone.com/"})," \uff1b\u53ea\u9700\u8981\u5bf9 ",(0,s.jsx)(e.code,{children:"pyenv-installer"})," \u8fdb\u884c\u7b80\u5355\u7684\u4fee\u6539\u5c31\u53ef\u4ee5\u5b9e\u73b0\u52a0\u901f\u4e0b\u8f7d\u4e86"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'# ......\nif [ -n "${USE_GIT_URI}" ]; then\n  GITHUB="git://github.com"\nelse\n  GITHUB="https://gitclone.com/github.com"\nfi\n\n# .....\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5148\u901a\u8fc7\uff0c",(0,s.jsx)(e.code,{children:"wget"})," \u4e0b\u8f7d\u811a\u672c\u6587\u4ef6\uff0c\u7136\u540e\u5bf9\u811a\u672c\u4e2d\u7684 ",(0,s.jsx)(e.code,{children:"github.com"})," \u7684\u57df\u540d\u8fdb\u884c\u4e0b\u4fee\u6539\uff0c\u6211\u8bd5\u4e86\u4e0b\u4fee\u6539",(0,s.jsx)(e.code,{children:"https"}),"\u5c31\u884c\u4e86\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u98de\u5feb\u7684\u4e0b\u8f7d\u4e86"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6700\u540e\uff0c\u5c06 ",(0,s.jsx)(e.code,{children:"pyenv"})," \u7684\u521d\u59cb\u5316\u589e\u52a0\u5230\u7cfb\u7edf\u7684\u73af\u5883\u53d8\u91cf\u4e2d"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"echo 'export PATH=\"$HOME/.pyenv/bin:$PATH\"' >> ~/.bashrc\necho 'eval \"$(pyenv init -)\"' >> ~/.bashrc\necho 'eval \"$(pyenv virtualenv-init -)\"'  >> ~/.bashrc\n"})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.h2,{id:"\u4f7f\u7528-pyenv-\u5b89\u88c5\u7279\u5b9a\u7248\u672c\u7684-python",children:["\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"pyenv"})," \u5b89\u88c5\u7279\u5b9a\u7248\u672c\u7684 python"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u7f51\u7edc\u597d\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"pyenv install 3.9.6"})," \u5b89\u88c5\u5bf9\u5e94\u7684\u7248\u672c\u4e86\uff0c\u4f46\u662f\u56e0\u4e3a\u7f51\u7edc\u7684\u95ee\u9898\uff0c\u4f60\u4f1a\u53d1\u73b0\u4e00\u76f4\u5728\u4e0b\u8f7d Python \u5305\u8fd9\u4e00\u6b65\uff0c\u95ee\u9898\u5c31\u662f ",(0,s.jsx)(e.a,{href:"http://www.python.org/ftp",children:"www.python.org/ftp"})," \u7f51\u7edc\u7684\u8bbf\u95ee\u95ee\u9898"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1630846711398-96703bab-2e76-4f74-8b6d-1dfa212d39b1.jpeg?x-oss-process=image/resize,w_960,m_lfit",alt:"image"})}),"\n",(0,s.jsxs)(e.p,{children:["\u9047\u5230\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u5c1d\u8bd5 \u5148\u4e0b\u8f7d\u5bf9\u5e94\u7248\u672c\u7684\u5b89\u88c5\u5305\uff1b\u53ef\u4ee5\u4f7f\u7528\u56fd\u5185\u7684\u955c\u50cf\u7ad9\u8fdb\u884c\u4e0b\u8f7d\uff0c\u6216\u8005\u5728\u7f51\u7edc\u8bbf\u95ee\u6b63\u5e38\u7684\u5730\u65b9\u8fdb\u884c\u4e0b\u8f7d\u5305\uff0c\u7136\u540e\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e2d\uff0c\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528 \u6dd8\u5b9d\u7684\u955c\u50cf\u7ad9\uff0c\u628a\u57df\u540d\u4e2d ",(0,s.jsx)(e.a,{href:"https://www.python.org/ftp",children:"https://www.python.org/ftp"})," \u66ff\u6362\u4e3a ",(0,s.jsx)(e.a,{href:"https://npm.taobao.org/mirrors/",children:"https://npm.taobao.org/mirrors/"})," \uff0c\u4e0b\u8f7d\u5230\u6307\u5b9a\u7684\u76ee\u5f55"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# v = \u4f60\u60f3\u8981\u5b89\u88c5\u7684python\u7248\u672c\uff0c\u6bd4\u5982 3.8.6\nexport v=3.8.6;  mkdir -p ~/.pyenv/sources/$v; wget https://npm.taobao.org/mirrors/python/$v/Python-$v.tar.xz -P ~/.pyenv/sources/$v; pyenv install $v -k\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1630846711423-9636d877-a9a2-4c9e-8cac-f82aaa3ff5b6.jpeg?x-oss-process=image/resize,w_960,m_lfit",alt:"image"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728 pyenv \u547d\u4ee4\u7684\u6700\u540e\u589e\u52a0\u4e00\u4e2a -k \xa0\u4f1a\u5728\u5b89\u88c5\u65f6\uff0c\u4f18\u5148\u68c0\u6d4b\u672c\u5730\u7684\u6587\u4ef6"}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,o.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},4552:(n,e,t)=>{t.d(e,{I:()=>i,M:()=>c});var s=t(11504);const o={},r=s.createContext(o);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);