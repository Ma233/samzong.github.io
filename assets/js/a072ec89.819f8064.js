"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[82351],{10727:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>t});var r=n(85893),l=n(11151);const c={title:"Redash for Docker \u90e8\u7f72",tags:["Tools"]},i=void 0,o={permalink:"/2022/10/22/redash-for-docker-bu-shu",source:"@site/blog/2022-10-22-redash-for-docker-bu-shu.md",title:"Redash for Docker \u90e8\u7f72",description:"\u6697\u5751\u5f88\u591a",date:"2022-10-22T00:00:00.000Z",formattedDate:"October 22, 2022",tags:[{label:"Tools",permalink:"/tags/tools"}],readingTime:2.71,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Redash for Docker \u90e8\u7f72",tags:["Tools"]},unlisted:!1,prevItem:{title:"JWT \u5185\u7f6e\u7684\u65b9\u5f0f",permalink:"/2022/10/18/jwt-nei-zhi-de-fang-shi"},nextItem:{title:"Panads fill NaN value to Zero",permalink:"/2022/11/10/panads-fill-nan-value-to-zero"}},d={authorsImageUrls:[]},t=[{value:"\u90e8\u7f72\u8fc7\u7a0b",id:"\u90e8\u7f72\u8fc7\u7a0b",level:2},{value:"\u542f\u52a8\u7684\u670d\u52a1\u4ecb\u7ecd",id:"\u542f\u52a8\u7684\u670d\u52a1\u4ecb\u7ecd",level:2},{value:"\u7248\u672c\u5347\u7ea7",id:"\u7248\u672c\u5347\u7ea7",level:2},{value:"\u89e3\u51b3 ES \u7684 HTTPS \u95ee\u9898",id:"\u89e3\u51b3-es-\u7684-https-\u95ee\u9898",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u6697\u5751\u5f88\u591a"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u90e8\u7f72\u8fc7\u7a0b",children:"\u90e8\u7f72\u8fc7\u7a0b"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"\u9700\u8981\u81ea\u884c\u7ef4\u62a4\u4e00\u4e2a env \u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-text",children:"REDASH_COOKIE_SECRET=a07cca441ab9f28b66c589f3118e0de48469b1bc6a5036eade7badbed305d96e\nPOSTGRES_HOST_AUTH_METHOD=trust\nREDASH_REDIS_URL=redis://redis:6379/0\nREDASH_DATABASE_URL=postgresql://postgres\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9700\u8981\u521b\u5efa\u4e00\u4e2a postgres-data \u5e76\u914d\u7f6e docker-compose.yml \u7684\u8def\u5f84\uff0c\u6570\u636e\u5e93\u6301\u4e45\u5316"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9700\u8981\u7ed9 postgres \u5bb9\u5668\u589e\u52a0 sudo \u547d\u4ee4"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"apk add sudo"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9700\u8981\u624b\u5de5\u8fdb\u5165\u5230 postgresql \u5bb9\u5668\u5185\u521b\u5efa role \u548c database"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"createuser -U postgres redash"}),"\n",(0,r.jsx)(s.li,{children:"createdb -U postgres redash"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u6267\u884c\u6570\u636e\u5e93\u521d\u59cb\u5316\u52a8\u4f5c"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"docker-compose run --rm server create_db"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u7136\u540e\u91cd\u542f redash \u5168\u90e8\u670d\u52a1\u5373\u53ef docker-compose down \u540e\u91cd\u542f"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"postgresql \u5728\u6267\u884c psql \u547d\u4ee4\u65f6\uff0c\u9ed8\u8ba4\u4f1a\u8bfb\u53d6\u5f53\u524d\u7cfb\u7edf\u7528\u6237\u4f5c\u4e3a\u6267\u884c role\uff1b\u4f46 psql \u9ed8\u8ba4\u7528\u6237\u662f postgres"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://redash.io/help/open-source/setup",children:"https://redash.io/help/open-source/setup"}),"\n",(0,r.jsx)(s.a,{href:"https://redash.io/help/open-source/dev-guide/docker",children:"https://redash.io/help/open-source/dev-guide/docker"}),"\n",(0,r.jsx)(s.a,{href:"https://docs.victoriametrics.com/url-examples.html#apiv1exportcsv",children:"https://docs.victoriametrics.com/url-examples.html#apiv1exportcsv"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.a,{href:"https://mp.weixin.qq.com/s?src=11&timestamp=1660629444&ver=3985&signature=verv70veamW*Ez2Sgc8e89yMJGwANIOzz4lfwbezyVV3wpWNT2d9SnGrDecUOwrbTJBR2o-Ax6ZS4Fpu2UxfX7Sy9xsk1LCXfY1wNr42ucl3tFePfJ7c536c8z*L-HOy&new=1",children:["https://mp.weixin.qq.com/s?src=11&timestamp=1660629444&ver=3985&signature=verv70veamW",(0,r.jsx)(s.em,{children:"Ez2Sgc8e89yMJGwANIOzz4lfwbezyVV3wpWNT2d9SnGrDecUOwrbTJBR2o-Ax6ZS4Fpu2UxfX7Sy9xsk1LCXfY1wNr42ucl3tFePfJ7c536c8z"}),"L-HOy&new=1"]})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://mp.weixin.qq.com/s?src=11&timestamp=1660682601&ver=3986&signature=h8m0RzEX3qWsKcUo6Ee3azdsnzLQqUf3N8FdLhyWNa52U4vAvlbEaBFUCrTZnh54tT-YS2mODfkp-6Hemmzt3n*hzGHlEmXP-HO5830W0Fzmn4MMfnsOPBKLrcjaiU0h&new=1",children:"https://mp.weixin.qq.com/s?src=11&timestamp=1660682601&ver=3986&signature=h8m0RzEX3qWsKcUo6Ee3azdsnzLQqUf3N8FdLhyWNa52U4vAvlbEaBFUCrTZnh54tT-YS2mODfkp-6Hemmzt3n*hzGHlEmXP-HO5830W0Fzmn4MMfnsOPBKLrcjaiU0h&new=1"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["redash env \u914d\u7f6e\uff1a",(0,r.jsx)(s.a,{href:"https://redash.io/help/open-source/admin-guide/env-vars-settings",children:"https://redash.io/help/open-source/admin-guide/env-vars-settings"})]}),"\n",(0,r.jsxs)(s.li,{children:["postgres \u6743\u9650\u95ee\u9898 ",(0,r.jsx)(s.a,{href:"https://stackoverflow.com/a/25051632/5067657",children:"https://stackoverflow.com/a/25051632/5067657"})]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://techoverflow.net/2021/05/07/how-to-fix-alpine-linux-ash-sudo-not-found/",children:"https://techoverflow.net/2021/05/07/how-to-fix-alpine-linux-ash-sudo-not-found/"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://discuss.redash.io/t/error-99-connecting-to-localhost-6379-cannot-assign-requested-address/9716/7",children:"https://discuss.redash.io/t/error-99-connecting-to-localhost-6379-cannot-assign-requested-address/9716/7"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u542f\u52a8\u7684\u670d\u52a1\u4ecb\u7ecd",children:"\u542f\u52a8\u7684\u670d\u52a1\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"v10-redashio_adhoc_worker_1     # \u6267\u884c\u67e5\u8be2\u4efb\u52a1\u7684 worker"}),"\n",(0,r.jsx)(s.li,{children:"v10-redashio_postgres_1       # \u6570\u636e\u5e93"}),"\n",(0,r.jsx)(s.li,{children:"v10-redashio_redis_1        # \u7f13\u5b58"}),"\n",(0,r.jsx)(s.li,{children:"v10-redashio_scheduled_worker_1   # \u6267\u884c\u8ba1\u5212\u4efb\u52a1\u7684 worker"}),"\n",(0,r.jsx)(s.li,{children:"v10-redashio_scheduler_1      # \u8ba1\u5212\u4efb\u52a1\u7ba1\u7406 server"}),"\n",(0,r.jsx)(s.li,{children:"v10-redashio_server_1        # \u4e3b\u4f53 server"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u4ee5\u4e0a\u4e3b\u8981\u4f1a\u8bbe\u8ba1\u5230 3 \u4e2a\u955c\u50cf\uff0credis\u3001pgsql\u3001redash\uff0c\u5176\u4e2d\u6838\u5fc3\u662f redash\uff0c\u6240\u4ee5\u5173\u6ce8\u955c\u50cf\u7248\u672c\u4e5f\u662f\u8fd9\u4e2a"}),"\n",(0,r.jsx)(s.h2,{id:"\u7248\u672c\u5347\u7ea7",children:"\u7248\u672c\u5347\u7ea7"}),"\n",(0,r.jsx)(s.p,{children:"redash \u7684\u7248\u672c\u5347\u7ea7\u8f83\u4e3a\u65b9\u4fbf\uff0c\u66f4\u6362 server \u7684\u955c\u50cf\uff1b\u7136\u540e\u5347\u7ea7\u6570\u636e\u5e93\u5373\u53ef\u3002"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u6d4b\u8bd5\u8fc7\u4ece v8 \u5347\u7ea7\u5230 v10 , \u548c v9 \u5347\u7ea7\u5230 v10\uff0c\u90fd\u662f ok \u7684\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5173\u95ed Redash \u670d\u52a1","\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"docker-compose stop server scheduler scheduled_worker adhoc_worker"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\u66f4\u65b0 docker-compose.yml","\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"\u57fa\u672c\u4e0a\u8fd9\u4e00\u6b65\uff0c\u53ea\u9700\u8981\u66f4\u65b0 redash \u7684\u955c\u50cf\u7248\u672c\u5373\u53ef"}),"\n",(0,r.jsxs)(s.li,{children:["\u7136\u540e\u6267\u884c ",(0,r.jsx)(s.code,{children:"docker-compose pull"})," \u62c9\u53d6\u65b0\u955c\u50cf\u7248\u672c"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\u6267\u884c\u6570\u636e\u5e93\u5347\u7ea7","\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"docker-compose run --rm server manage db upgrade"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\u542f\u52a8\u5168\u90e8\u670d\u52a1\u5373\u53ef","\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"docker-compse up -d"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u89e3\u51b3-es-\u7684-https-\u95ee\u9898",children:"\u89e3\u51b3 ES \u7684 HTTPS \u95ee\u9898"}),"\n",(0,r.jsxs)(s.p,{children:["\u7531\u4e8e\u6211\u4eec\u7684 es \u5730\u5740\u8bbf\u95ee\u5730\u5740\u91c7\u7528 https\uff0c\u4f46\u4e3a\u81ea\u7b7e\u8bc1\u4e66\uff0c\u6240\u4ee5\u5728 request \u4e4b\u4e2d\u4f1a\u6709\u4e9b\u95ee\u9898\uff0c\u6240\u4ee5\u6211\u5728\u8fd9\u91cc\u66f4\u65b0\u4e86 elasticsearch \u7684\u63d2\u4ef6\uff0c\u7136\u540e\u5c06\u5176\u4e0a\u4f20\u5230\u6211\u4e2a\u4eba\u7684 docker hub.\n",(0,r.jsx)(s.a,{href:"https://hub.docker.com/r/samzong/redash",children:"https://hub.docker.com/r/samzong/redash"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u5e26\u6765\u7684\u95ee\u9898\uff0c\u9875\u9762\u4e0a\u65e0\u6cd5\u9009\u62e9\u5230 Elasticsearch \u4f5c\u4e3a\u6570\u636e\u6e90\uff0c\u6ca1\u65f6\u95f4\u53bb\u7814\u7a76\u4e86"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u770b\u4e86\u4e0b\u8fd8\u662f\u53ef\u4ee5\u4f7f\u7528 redash \u7684 API \u53bb\u521b\u5efa\u7684 ",(0,r.jsx)(s.code,{children:"/api/data_sources"}),":"]}),"\n",(0,r.jsx)(s.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "options": {\n    "basic_auth_password": "-----",\n    "basic_auth_user": "elastic",\n    "server": "https://10.6.51.101:31001/",\n    "skip_tls_verification": true\n  },\n  "type": "elasticsearch",\n  "name": "test-es"\n}\n'})}),"\n",(0,r.jsx)(s.p,{children:"\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u5c31\u53ef\u4ee5\u5728\u9875\u9762\u4e0a\u66f4\u65b0\u4e86\u3002"})]})}function a(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>i});var r=n(67294);const l={},c=r.createContext(l);function i(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);