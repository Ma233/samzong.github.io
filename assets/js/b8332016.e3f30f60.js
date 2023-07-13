"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[8333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=c(n),d=a,y=l["".concat(i,".").concat(d)]||l[d]||u[d]||p;return n?r.createElement(y,o(o({ref:t},m),{},{components:n})):r.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const p={title:"python \u5b8c\u6210\u6296\u5e97 API \u6388\u6743",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/oxz7e6"},o=void 0,s={permalink:"/2020/12/08/python \u5b8c\u6210\u6296\u5e97API\u6388\u6743",source:"@site/blog/2020-12-08-python \u5b8c\u6210\u6296\u5e97API\u6388\u6743.md",title:"python \u5b8c\u6210\u6296\u5e97 API \u6388\u6743",description:"",date:"2020-12-08T00:00:00.000Z",formattedDate:"2020\u5e7412\u67088\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:.61,hasTruncateMarker:!1,authors:[],frontMatter:{title:"python \u5b8c\u6210\u6296\u5e97 API \u6388\u6743",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/oxz7e6"},prevItem:{title:"covert timestamp2datetime",permalink:"/2020/12/09/covert timestamp2datetime"},nextItem:{title:"python3 str \u53bb\u9664\u7279\u5b9a\u5185\u5bb9",permalink:"/2020/12/03/python3 str \u53bb\u9664\u7279\u5b9a\u5185\u5bb9"}},i={authorsImageUrls:[]},c=[],m={toc:c},l="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import hashlib\nimport requests\nimport time\nfrom datetime import datetime\n\n# \u66ff\u6362 app_key, app_secret\napp_key = "1122233333444555"\napp_secret = "beddee55a0-reerw2452ff4-5deeweec2d7faf1"\n\ncurrent_time = lambda: int(round(time.time()))\ntimestamp = str(datetime.fromtimestamp(current_time()))\nparam_json = "{\\"page\\":\\"0\\",\\"size\\":\\"10\\"}"\nmethod = "product.list"\nv = "2"\n\n\ndef access_token(app_key, app_secret):\n    url = "https://openapi-fxg.jinritemai.com/oauth2/access_token?app_id=" + app_key + "&app_secret=" + app_secret + "&grant_type=authorization_self"\n    req = requests.get(url)\n\n    return req.json()[\'data\'][\'access_token\']\n\n\ndef sign(app_key, app_secret, timestamp):\n    # \u8bf7\u6309\u7167\u987a\u5e8f\u62fc\u88c5 app_secret,app_key,method,param_json,timestamp,v,app_secret\n    str = app_secret + "app_key" + app_key + "method" + method + "param_json" + param_json + "timestamp" + timestamp + "v" + v + app_secret\n\n    # sha256\n    code = hashlib.sha256(str.encode()).hexdigest()\n\n    # md5\n    # code = hashlib.md5(str.encode()).hexdigest()\n\n    return code\n\n\ndef testItem(app_key, app_secret):\n    url = "https://openapi-fxg.jinritemai.com/product/list"\n    token = access_token(app_key, app_secret)\n    sign_code = sign(app_key, app_secret, timestamp)\n\n    params = {\n        "method": method,\n        "app_key": app_key,\n        "access_token": token,\n        "param_json": param_json,\n        "timestamp": timestamp,\n        "v": v,\n        "sign": sign_code,\n        "sign_method": "hmac-sha256"  # \u5982\u679c sign \u7b97\u6cd5\u7c7b\u578b\u662f md5, \u8fd9\u91cc\u9700\u8981\u8f93\u5165 md5\n    }\n\n    req = requests.get(url=url, params=params)\n\n    return req.status_code\n\n\nif __name__ == \'__main__\':\n    print("access_token: \'{}\'".format(access_token(app_key, app_secret)))\n    print("sign: \'{}\'".format(sign(app_key, app_secret, timestamp)))\n    print("sign test status: \'{}\'".format(testItem(app_key, app_secret)))\n\n')))}u.isMDXComponent=!0}}]);