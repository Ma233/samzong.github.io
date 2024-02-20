"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[88140],{94204:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>t});var l=s(17624),o=s(4552);const c={title:"jq \u547d\u4ee4\u884c Json \u5904\u7406\u795e\u5668",toc:!0,tags:["Mac"]},a=void 0,r={permalink:"/2022/07/22/jq-ming-ling-xing-json-chu-li-shen-qi",source:"@site/blog/2022-07-22-jq-ming-ling-xing-json-chu-li-shen-qi.md",title:"jq \u547d\u4ee4\u884c Json \u5904\u7406\u795e\u5668",description:"- https://mozillazg.com/2018/01/jq-use-examples-cookbook.htm-",date:"2022-07-22T00:00:00.000Z",formattedDate:"July 22, 2022",tags:[{label:"Mac",permalink:"/tags/mac"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"jq \u547d\u4ee4\u884c Json \u5904\u7406\u795e\u5668",toc:!0,tags:["Mac"]},unlisted:!1,prevItem:{title:"Contour\u548cEnvoy\u6307\u6807\u4ecb\u7ecd",permalink:"/2022/07/22/contour-envoy-zhi-biao"},nextItem:{title:"\u5fae\u670d\u52a1\u5f15\u64ce\u7f51\u5173\u80fd\u529b\u4ecb\u7ecd",permalink:"/2022/07/21/wei-fu-wu-yin-qing-wang-guan-neng-li-jie-shao"}},i={authorsImageUrls:[]},t=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.a,{href:"https://mozillazg.com/2018/01/jq-use-examples-cookbook.html",children:"https://mozillazg.com/2018/01/jq-use-examples-cookbook.htm"}),"-"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["jq \u547d\u4ee4\u65e5\u5e38\u7ec3\u4e60 ",(0,l.jsx)(e.a,{href:"https://jqplay.org/s/KhRuUFCP2h",children:"https://jqplay.org/s/KhRuUFCP2h"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u4e00\u4e2a\u7075\u6d3b\u7684\u8f7b\u91cf\u7ea7\u547d\u4ee4\u884c JSON \u5904\u7406\u5668"}),"\n",(0,l.jsx)(e.h2,{id:"\u8bf4\u660e",children:"\u8bf4\u660e"}),"\n",(0,l.jsxs)(e.p,{children:["jq \u662f stedolan \u5f00\u53d1\u7684\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u548c\u7075\u6d3b\u7684\u547d\u4ee4\u884c JSON \u5904\u7406\u5668\uff0c\u6e90\u7801\u8bf7\u53c2\u8003 ",(0,l.jsx)(e.a,{href:"https://github.com/stedolan/jq",children:"jq \u9879\u76ee\u4e3b\u9875"})," \u3002jq \u7528\u4e8e\u5904\u7406 JSON \u8f93\u5165\uff0c\u5c06\u7ed9\u5b9a\u8fc7\u6ee4\u5668\u5e94\u7528\u4e8e\u5176 JSON \u6587\u672c\u8f93\u5165\u5e76\u5728\u6807\u51c6\u8f93\u51fa\u4e0a\u5c06\u8fc7\u6ee4\u5668\u7684\u7ed3\u679c\u751f\u6210\u4e3a JSON\uff1b\u6700\u7b80\u5355\u7684\u8fc7\u6ee4\u5668\u662f",(0,l.jsx)(e.code,{children:"."}),"\uff0c\u5b83\u5c06 jq \u7684\u8f93\u5165\u672a\u7ecf\u4fee\u6539\u5730\u590d\u5236\u5230\u5176\u8f93\u51fa\u4e2d\uff08\u683c\u5f0f\u8bbe\u7f6e\u9664\u5916\uff09\uff1b\u8bf7\u6ce8\u610f\uff0cjq \u5f53\u524d\u4ec5\u652f\u6301 64 \u4f4d\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570\uff08IEEE754\uff09\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"# Debian\u7cfb\uff0c\u5982 Ubuntu\nsudo apt-get install jq\n\n# RedHat\u7cfb, \u5982 CentOS\nyum install jq\n\n# MacOS\nbrew install jq\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"jq [options] <jq filter> [file...]\njq [options] --args <jq filter> [strings...]\njq [options] --jsonargs <jq filter> [JSON_TEXTS...]\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9009\u9879",children:"\u9009\u9879"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"-c               \u7d27\u51d1\u800c\u4e0d\u662f\u6f02\u4eae\u7684\u8f93\u51fa;\n-n               \u4f7f\u7528`null`\u4f5c\u4e3a\u5355\u4e2a\u8f93\u5165\u503c;\n-e               \u6839\u636e\u8f93\u51fa\u8bbe\u7f6e\u9000\u51fa\u72b6\u6001\u4ee3\u7801;\n-s               \u5c06\u6240\u6709\u8f93\u5165\u8bfb\u53d6\uff08\u5438\u53d6\uff09\u5230\u6570\u7ec4\u4e2d\uff1b\u5e94\u7528\u8fc7\u6ee4\u5668;\n-r               \u8f93\u51fa\u539f\u59cb\u5b57\u7b26\u4e32\uff0c\u800c\u4e0d\u662fJSON\u6587\u672c;\n-R               \u8bfb\u53d6\u539f\u59cb\u5b57\u7b26\u4e32\uff0c\u800c\u4e0d\u662fJSON\u6587\u672c;\n-C               \u4e3aJSON\u7740\u8272;\n-M               \u5355\u8272\uff08\u4e0d\u8981\u4e3aJSON\u7740\u8272\uff09;\n-S               \u5728\u8f93\u51fa\u4e0a\u6392\u5e8f\u5bf9\u8c61\u7684\u952e;\n--tab            \u4f7f\u7528\u5236\u8868\u7b26\u8fdb\u884c\u7f29\u8fdb;\n--arg a v        \u5c06\u53d8\u91cf$a\u8bbe\u7f6e\u4e3avalue<v>;\n--argjson a v    \u5c06\u53d8\u91cf$a\u8bbe\u7f6e\u4e3aJSON value<v>;\n--slurpfile a f  \u5c06\u53d8\u91cf$a\u8bbe\u7f6e\u4e3a\u4ece<f>\u8bfb\u53d6\u7684JSON\u6587\u672c\u6570\u7ec4;\n--rawfile a f    \u5c06\u53d8\u91cf$a\u8bbe\u7f6e\u4e3a\u5305\u542b<f>\u5185\u5bb9\u7684\u5b57\u7b26\u4e32;\n--args           \u5176\u4f59\u53c2\u6570\u662f\u5b57\u7b26\u4e32\u53c2\u6570\uff0c\u800c\u4e0d\u662f\u6587\u4ef6;\n--jsonargs       \u5176\u4f59\u7684\u53c2\u6570\u662fJSON\u53c2\u6570\uff0c\u800c\u4e0d\u662f\u6587\u4ef6;\n--               \u7ec8\u6b62\u53c2\u6570\u5904\u7406;\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u4f8b\u5b50",children:"\u4f8b\u5b50"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"."}),": \u4ee5\u6f02\u4eae\u7684\u65b9\u5f0f\u8f93\u51fa"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'$ echo \'{ "foo": { "bar": { "baz": 123 } } }\' | jq \'.\'\n{\n  "foo": {\n    "bar": {\n      "baz": 123\n    }\n  }\n}\n'})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:".foo, .foo.bar, .foo?"}),": \u83b7\u53d6\u4e00\u4e2a\u952e\u7684\u503c"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'$ echo \'{"foo": 42, "bar": "less interesting data"}\' | jq \'.foo\'\n42\n'})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:".[], .[]?, .[2], .[10:15]"}),": \u6570\u7ec4\u8fd0\u7b97"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'$ echo \'[{"name":"JSON", "good":true}, {"name":"XML", "good":false}]\' | jq \'.[1]\'\n{\n  "name": "XML",\n  "good": false\n}\n'})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"[], {}"}),": \u6784\u9020\u4e00\u4e2a\u6570\u7ec4/\u5bf9\u8c61"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'$ echo \'{"user":"stedolan","titles":["JQ Primer", "More JQ"]}\' | jq \'{user, title: .titles[]}\'\n{\n  "user": "stedolan",\n  "title": "JQ Primer"\n}\n{\n  "user": "stedolan",\n  "title": "More JQ"\n}\n'})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"length"}),": \u8ba1\u7b97\u4e00\u4e2a\u503c\u7684\u957f\u5ea6"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ echo '[[1,2], \"string\", {\"a\":2}, null]' | jq '.[] | length'                                  \n2\n6\n1\n0\n"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"keys"}),": \u53d6\u51fa\u6570\u7ec4\u4e2d\u7684\u952e"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'$ echo \'{"abc": 1, "abcd": 2, "Foo": 3}\' | jq \'keys\'                                        \n[\n  "Foo",\n  "abc",\n  "abcd"\n]\n'})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:","}),": \u4f7f\u7528\u591a\u4e2a\u8fc7\u6ee4\u5668"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'$ echo \'{ "foo": 42, "bar": "something else", "baz": true}\' | jq \'.foo, .bar\' \n42\n"something else"\n'})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"|"}),": \u901a\u8fc7\u7ba1\u9053\u5c06\u4e00\u4e2a\u8fc7\u6ee4\u5668\u7684\u8f93\u51fa\u5f53\u505a\u4e0b\u4e00\u4e2a\u8fc7\u6ee4\u5668\u7684\u8f93\u5165"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'$ echo \'[{"name":"JSON", "good":true}, {"name":"XML", "good":false}]\' | jq \'.[] | .name\'                                                 \n"JSON"\n"XML"\n'})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"select(foo)"}),": \u5982\u679c foo \u8fd4\u56de true\uff0c\u5219\u8f93\u5165\u4fdd\u6301\u4e0d\u53d8"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ echo '[1,5,3,0,7]' | jq 'map(select(. >= 2))'                                                    \n[\n  5,\n  3,\n  7\n]\n"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"map(foo)"}),": \u6bcf\u4e2a\u8f93\u5165\u8c03\u7528\u8fc7\u6ee4\u5668"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ echo '[1,2,3]' | jq 'map(.+1)'\n[\n  2,\n  3,\n  4\n]\n"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"if-then-else-end"}),": \u6761\u4ef6\u5224\u65ad"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:' $ echo \'2\' | jq \'if . == 0 then "zero" elif . == 1 then "one" else "many" end\'\n"many"\n'})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"\\(foo)"}),": \u5728\u5b57\u7b26\u4e32\u4e2d\u63d2\u5165\u503c\u5e76\u8fdb\u884c\u8fd0\u7b97"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ echo '42' | jq '\"The input was \\(.), which is one less than \\(.+1)\"'          \n\"The input was 42, which is one less than 43\"\n"})})]})}function d(n={}){const{wrapper:e}={...(0,o.M)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},4552:(n,e,s)=>{s.d(e,{I:()=>r,M:()=>a});var l=s(11504);const o={},c=l.createContext(o);function a(n){const e=l.useContext(c);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);