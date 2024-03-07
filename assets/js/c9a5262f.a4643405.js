"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[87816],{6492:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var s=t(17624),a=t(4552);const o={title:"ClickHouse \u5e38\u7528\u51fd\u6570\u4f7f\u7528",tags:["Tools"]},r=void 0,c={permalink:"/2022/01/20/clickhouse-chang-yong-han-shu-shi-yong",source:"@site/blog/2022-01-20-clickhouse-chang-yong-han-shu-shi-yong.md",title:"ClickHouse \u5e38\u7528\u51fd\u6570\u4f7f\u7528",description:"1. \u8c03\u6574\u65f6\u533a",date:"2022-01-20T00:00:00.000Z",formattedDate:"2022\u5e741\u670820\u65e5",tags:[{label:"Tools",permalink:"/tags/tools"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"ClickHouse \u5e38\u7528\u51fd\u6570\u4f7f\u7528",tags:["Tools"]},unlisted:!1,prevItem:{title:"Python3 \u6587\u672c\u5904\u7406",permalink:"/2022/01/21/python3-wen-ben-chu-li-strip-split"},nextItem:{title:"MySQL Case WHEN",permalink:"/2022/01/04/mysql-case-when"}},l={authorsImageUrls:[]},i=[{value:"1. \u8c03\u6574\u65f6\u533a",id:"1-\u8c03\u6574\u65f6\u533a",level:2},{value:"2. \u63d0\u524d Json \u4e2d\u7684\u5b57\u7b26\u4e32",id:"2-\u63d0\u524d-json-\u4e2d\u7684\u5b57\u7b26\u4e32",level:2},{value:"3. \u5224\u65ad\u5b57\u6bb5\u4e0d\u4e3a\u7a7a",id:"3-\u5224\u65ad\u5b57\u6bb5\u4e0d\u4e3a\u7a7a",level:2}];function p(e){const n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"1-\u8c03\u6574\u65f6\u533a",children:"1. \u8c03\u6574\u65f6\u533a"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u4e8e\u8c03\u6574\u65f6\u533a\u4e3a\u67e5\u8be2\u8005\u7684\u65f6\u533a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- clickhouse\ntoString(toDateTime(event_time), 'Asia/Shanghai') AS event_time\n\n-- mysql howto\nSELECT  CONVERT_TZ('2020-04-06 02:00:00','UTC','Asia/Hong_Kong') as event_time\n"})}),"\n",(0,s.jsx)(n.h2,{id:"2-\u63d0\u524d-json-\u4e2d\u7684\u5b57\u7b26\u4e32",children:"2. \u63d0\u524d Json \u4e2d\u7684\u5b57\u7b26\u4e32"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"JSONExtractRaw"}),"\u5bf9\u591a\u5c42 Json \u7ed3\u6784\u7684\u6570\u636e\u8fdb\u884c ",(0,s.jsx)(n.code,{children:"\u7cbe\u51c6\u63d0\u53d6"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- clickhouse\nJSONExtractRaw(_data,'properties') as properties,\nJSONExtractRaw(JSONExtractRaw(_data,'properties'),'app_env') as app_env\n\n-- mysql howto\njson_extract(_data,'$.properties') as properties,\njson_extract(json_extract(_data,'$.properties'),'$.app_env') as app_env\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u63d0\u53d6\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u5254\u9664\u53cc\u5f15\u53f7 ",(0,s.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- clickhouse\nJSONExtractString(JSONExtractRaw(_data,'app_env')) as app_env\n\n-- mysql\njson_unquote(json_extract(_data,'$.app_env')) as app_env\n"})}),"\n",(0,s.jsx)(n.h2,{id:"3-\u5224\u65ad\u5b57\u6bb5\u4e0d\u4e3a\u7a7a",children:"3. \u5224\u65ad\u5b57\u6bb5\u4e0d\u4e3a\u7a7a"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u5728 where \u6761\u4ef6\u4e2d\uff0c\u5224\u65ad\u5b57\u6bb5 \u4e3a\u7a7a\u6216\u8005\u4e0d\u4e3a\u7a7a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"where\n 1=1\n and notEmpty(client_version)  --\u4e0d\u4e3a\u7a7a\n  and empty(app_version) --\u4e3a\u7a7a\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>r});var s=t(11504);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);