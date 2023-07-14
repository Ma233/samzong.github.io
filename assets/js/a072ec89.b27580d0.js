"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[82351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(r),d=n,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66442:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={title:"Redash for Docker \u90e8\u7f72",tags:["Tools"]},l=void 0,s={permalink:"/2022/10/22/redash-for-docker-bu-shu",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2022-10-22-redash-for-docker-bu-shu.md",source:"@site/blog/2022-10-22-redash-for-docker-bu-shu.md",title:"Redash for Docker \u90e8\u7f72",description:"\u6697\u5751\u5f88\u591a",date:"2022-10-22T00:00:00.000Z",formattedDate:"2022\u5e7410\u670822\u65e5",tags:[{label:"Tools",permalink:"/tags/tools"}],readingTime:1.8066666666666666,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Redash for Docker \u90e8\u7f72",tags:["Tools"]},prevItem:{title:"Panads fill NaN value to Zero",permalink:"/2022/11/10/panads-fill-nan-value-to-zero"},nextItem:{title:"JWT \u5185\u7f6e\u7684\u65b9\u5f0f",permalink:"/2022/10/18/jwt-nei-zhi-de-fang-shi"}},p={authorsImageUrls:[]},i=[{value:"\u90e8\u7f72\u8fc7\u7a0b",id:"\u90e8\u7f72\u8fc7\u7a0b",level:2},{value:"\u542f\u52a8\u7684\u670d\u52a1\u4ecb\u7ecd",id:"\u542f\u52a8\u7684\u670d\u52a1\u4ecb\u7ecd",level:2},{value:"\u7248\u672c\u5347\u7ea7",id:"\u7248\u672c\u5347\u7ea7",level:2},{value:"\u89e3\u51b3 ES \u7684 HTTPS \u95ee\u9898",id:"\u89e3\u51b3-es-\u7684-https-\u95ee\u9898",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],c={toc:i},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6697\u5751\u5f88\u591a")),(0,n.kt)("h2",{id:"\u90e8\u7f72\u8fc7\u7a0b"},"\u90e8\u7f72\u8fc7\u7a0b"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u9700\u8981\u81ea\u884c\u7ef4\u62a4\u4e00\u4e2a env \u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"REDASH_COOKIE_SECRET=a07cca441ab9f28b66c589f3118e0de48469b1bc6a5036eade7badbed305d96e\nPOSTGRES_HOST_AUTH_METHOD=trust\nREDASH_REDIS_URL=redis://redis:6379/0\nREDASH_DATABASE_URL=postgresql://postgres\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9700\u8981\u521b\u5efa\u4e00\u4e2a postgres-data \u5e76\u914d\u7f6e docker-compose.yml \u7684\u8def\u5f84\uff0c\u6570\u636e\u5e93\u6301\u4e45\u5316")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9700\u8981\u7ed9 postgres \u5bb9\u5668\u589e\u52a0 sudo \u547d\u4ee4"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"apk add sudo"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9700\u8981\u624b\u5de5\u8fdb\u5165\u5230 postgresql \u5bb9\u5668\u5185\u521b\u5efa role \u548c database"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"createuser -U postgres redash"),(0,n.kt)("li",{parentName:"ul"},"createdb -U postgres redash"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c\u6570\u636e\u5e93\u521d\u59cb\u5316\u52a8\u4f5c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"docker-compose run --rm server create","_","db")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7136\u540e\u91cd\u542f redash \u5168\u90e8\u670d\u52a1\u5373\u53ef docker-compose down \u540e\u91cd\u542f"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"postgresql \u5728\u6267\u884c psql \u547d\u4ee4\u65f6\uff0c\u9ed8\u8ba4\u4f1a\u8bfb\u53d6\u5f53\u524d\u7cfb\u7edf\u7528\u6237\u4f5c\u4e3a\u6267\u884c role\uff1b\u4f46 psql \u9ed8\u8ba4\u7528\u6237\u662f postgres")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://redash.io/help/open-source/setup"},"https://redash.io/help/open-source/setup"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://redash.io/help/open-source/dev-guide/docker"},"https://redash.io/help/open-source/dev-guide/docker"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.victoriametrics.com/url-examples.html#apiv1exportcsv"},"https://docs.victoriametrics.com/url-examples.html#apiv1exportcsv")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s?src=11%5C&timestamp=1660629444%5C&ver=3985%5C&signature=verv70veamW*Ez2Sgc8e89yMJGwANIOzz4lfwbezyVV3wpWNT2d9SnGrDecUOwrbTJBR2o-Ax6ZS4Fpu2UxfX7Sy9xsk1LCXfY1wNr42ucl3tFePfJ7c536c8z*L-HOy%5C&new=1"},"https://mp.weixin.qq.com/s?src=11\\","\xd7","tamp=1660629444\\&ver=3985\\&signature=verv70veamW",(0,n.kt)("em",{parentName:"a"},"Ez2Sgc8e89yMJGwANIOzz4lfwbezyVV3wpWNT2d9SnGrDecUOwrbTJBR2o-Ax6ZS4Fpu2UxfX7Sy9xsk1LCXfY1wNr42ucl3tFePfJ7c536c8z"),"L-HOy\\&new=1")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s?src=11&timestamp=1660682601&ver=3986&signature=h8m0RzEX3qWsKcUo6Ee3azdsnzLQqUf3N8FdLhyWNa52U4vAvlbEaBFUCrTZnh54tT-YS2mODfkp-6Hemmzt3n*hzGHlEmXP-HO5830W0Fzmn4MMfnsOPBKLrcjaiU0h&new=1"},"https://mp.weixin.qq.com/s?src=11","\xd7","tamp=1660682601&ver=3986&signature=h8m0RzEX3qWsKcUo6Ee3azdsnzLQqUf3N8FdLhyWNa52U4vAvlbEaBFUCrTZnh54tT-YS2mODfkp-6Hemmzt3n*hzGHlEmXP-HO5830W0Fzmn4MMfnsOPBKLrcjaiU0h&new=1")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"redash env \u914d\u7f6e\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://redash.io/help/open-source/admin-guide/env-vars-settings"},"https://redash.io/help/open-source/admin-guide/env-vars-settings")),(0,n.kt)("li",{parentName:"ul"},"postgres \u6743\u9650\u95ee\u9898 ",(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/25051632/5067657"},"https://stackoverflow.com/a/25051632/5067657")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://techoverflow.net/2021/05/07/how-to-fix-alpine-linux-ash-sudo-not-found/"},"https://techoverflow.net/2021/05/07/how-to-fix-alpine-linux-ash-sudo-not-found/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discuss.redash.io/t/error-99-connecting-to-localhost-6379-cannot-assign-requested-address/9716/7"},"https://discuss.redash.io/t/error-99-connecting-to-localhost-6379-cannot-assign-requested-address/9716/7"))),(0,n.kt)("h2",{id:"\u542f\u52a8\u7684\u670d\u52a1\u4ecb\u7ecd"},"\u542f\u52a8\u7684\u670d\u52a1\u4ecb\u7ecd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"v10-redashio_adhoc_worker_1     # \u6267\u884c\u67e5\u8be2\u4efb\u52a1\u7684 worker"),(0,n.kt)("li",{parentName:"ul"},"v10-redashio_postgres_1       # \u6570\u636e\u5e93"),(0,n.kt)("li",{parentName:"ul"},"v10-redashio_redis_1        # \u7f13\u5b58"),(0,n.kt)("li",{parentName:"ul"},"v10-redashio_scheduled_worker_1   # \u6267\u884c\u8ba1\u5212\u4efb\u52a1\u7684 worker"),(0,n.kt)("li",{parentName:"ul"},"v10-redashio_scheduler_1      # \u8ba1\u5212\u4efb\u52a1\u7ba1\u7406 server"),(0,n.kt)("li",{parentName:"ul"},"v10-redashio_server_1        # \u4e3b\u4f53 server")),(0,n.kt)("p",null,"\u4ee5\u4e0a\u4e3b\u8981\u4f1a\u8bbe\u8ba1\u5230 3 \u4e2a\u955c\u50cf\uff0credis\u3001pgsql\u3001redash\uff0c\u5176\u4e2d\u6838\u5fc3\u662f redash\uff0c\u6240\u4ee5\u5173\u6ce8\u955c\u50cf\u7248\u672c\u4e5f\u662f\u8fd9\u4e2a"),(0,n.kt)("h2",{id:"\u7248\u672c\u5347\u7ea7"},"\u7248\u672c\u5347\u7ea7"),(0,n.kt)("p",null,"redash \u7684\u7248\u672c\u5347\u7ea7\u8f83\u4e3a\u65b9\u4fbf\uff0c\u66f4\u6362 server \u7684\u955c\u50cf\uff1b\u7136\u540e\u5347\u7ea7\u6570\u636e\u5e93\u5373\u53ef\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6d4b\u8bd5\u8fc7\u4ece v8 \u5347\u7ea7\u5230 v10 , \u548c v9 \u5347\u7ea7\u5230 v10\uff0c\u90fd\u662f ok \u7684\u3002")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5173\u95ed Redash \u670d\u52a1",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose stop server scheduler scheduled_worker adhoc_worker")))),(0,n.kt)("li",{parentName:"ol"},"\u66f4\u65b0 docker-compose.yml",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u57fa\u672c\u4e0a\u8fd9\u4e00\u6b65\uff0c\u53ea\u9700\u8981\u66f4\u65b0 redash \u7684\u955c\u50cf\u7248\u672c\u5373\u53ef"),(0,n.kt)("li",{parentName:"ol"},"\u7136\u540e\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose pull")," \u62c9\u53d6\u65b0\u955c\u50cf\u7248\u672c"))),(0,n.kt)("li",{parentName:"ol"},"\u6267\u884c\u6570\u636e\u5e93\u5347\u7ea7",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose run --rm server manage db upgrade")))),(0,n.kt)("li",{parentName:"ol"},"\u542f\u52a8\u5168\u90e8\u670d\u52a1\u5373\u53ef",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"docker-compse up -d"))))),(0,n.kt)("h2",{id:"\u89e3\u51b3-es-\u7684-https-\u95ee\u9898"},"\u89e3\u51b3 ES \u7684 HTTPS \u95ee\u9898"),(0,n.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u7684 es \u5730\u5740\u8bbf\u95ee\u5730\u5740\u91c7\u7528 https\uff0c\u4f46\u4e3a\u81ea\u7b7e\u8bc1\u4e66\uff0c\u6240\u4ee5\u5728 request \u4e4b\u4e2d\u4f1a\u6709\u4e9b\u95ee\u9898\uff0c\u6240\u4ee5\u6211\u5728\u8fd9\u91cc\u66f4\u65b0\u4e86 elasticsearch \u7684\u63d2\u4ef6\uff0c\u7136\u540e\u5c06\u5176\u4e0a\u4f20\u5230\u6211\u4e2a\u4eba\u7684 docker hub.\n",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/samzong/redash"},"https://hub.docker.com/r/samzong/redash")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5e26\u6765\u7684\u95ee\u9898\uff0c\u9875\u9762\u4e0a\u65e0\u6cd5\u9009\u62e9\u5230 Elasticsearch \u4f5c\u4e3a\u6570\u636e\u6e90\uff0c\u6ca1\u65f6\u95f4\u53bb\u7814\u7a76\u4e86")),(0,n.kt)("p",null,"\u770b\u4e86\u4e0b\u8fd8\u662f\u53ef\u4ee5\u4f7f\u7528 redash \u7684 API \u53bb\u521b\u5efa\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"/api/data_sources"),":"),(0,n.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "options": {\n    "basic_auth_password": "-----",\n    "basic_auth_user": "elastic",\n    "server": "https://10.6.51.101:31001/",\n    "skip_tls_verification": true\n  },\n  "type": "elasticsearch",\n  "name": "test-es"\n}\n')),(0,n.kt)("p",null,"\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u5c31\u53ef\u4ee5\u5728\u9875\u9762\u4e0a\u66f4\u65b0\u4e86\u3002"))}u.isMDXComponent=!0}}]);