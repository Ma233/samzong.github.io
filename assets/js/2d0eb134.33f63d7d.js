"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[47072],{83796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var a=n(17624),s=n(4552);const p={title:"python \u5b8c\u6210\u6296\u5e97 API \u6388\u6743",tags:["Python"]},r=void 0,o={permalink:"/2020/12/08/python-wan-cheng-dou-dian-api-shou-quan",source:"@site/blog/2020-12-08-python-wan-cheng-dou-dian-api-shou-quan.md",title:"python \u5b8c\u6210\u6296\u5e97 API \u6388\u6743",description:"",date:"2020-12-08T00:00:00.000Z",formattedDate:"December 8, 2020",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:.915,hasTruncateMarker:!1,authors:[],frontMatter:{title:"python \u5b8c\u6210\u6296\u5e97 API \u6388\u6743",tags:["Python"]},unlisted:!1,prevItem:{title:"python3 str \u53bb\u9664\u7279\u5b9a\u5185\u5bb9",permalink:"/2020/12/03/python3-str-qu-chu-te-ding-nei-rong"},nextItem:{title:"covert timestamp2datetime",permalink:"/2020/12/09/covert-timestamp2datetime"}},i={authorsImageUrls:[]},m=[];function c(e){const t={code:"code",pre:"pre",...(0,s.M)(),...e.components};return(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import hashlib\nimport requests\nimport time\nfrom datetime import datetime\n\n# \u66ff\u6362 app_key, app_secret\napp_key = "1122233333444555"\napp_secret = "beddee55a0-reerw2452ff4-5deeweec2d7faf1"\n\ncurrent_time = lambda: int(round(time.time()))\ntimestamp = str(datetime.fromtimestamp(current_time()))\nparam_json = "{\\"page\\":\\"0\\",\\"size\\":\\"10\\"}"\nmethod = "product.list"\nv = "2"\n\n\ndef access_token(app_key, app_secret):\n    url = "https://openapi-fxg.jinritemai.com/oauth2/access_token?app_id=" + app_key + "&app_secret=" + app_secret + "&grant_type=authorization_self"\n    req = requests.get(url)\n\n    return req.json()[\'data\'][\'access_token\']\n\n\ndef sign(app_key, app_secret, timestamp):\n    # \u8bf7\u6309\u7167\u987a\u5e8f\u62fc\u88c5 app_secret,app_key,method,param_json,timestamp,v,app_secret\n    str = app_secret + "app_key" + app_key + "method" + method + "param_json" + param_json + "timestamp" + timestamp + "v" + v + app_secret\n\n    # sha256\n    code = hashlib.sha256(str.encode()).hexdigest()\n\n    # md5\n    # code = hashlib.md5(str.encode()).hexdigest()\n\n    return code\n\n\ndef testItem(app_key, app_secret):\n    url = "https://openapi-fxg.jinritemai.com/product/list"\n    token = access_token(app_key, app_secret)\n    sign_code = sign(app_key, app_secret, timestamp)\n\n    params = {\n        "method": method,\n        "app_key": app_key,\n        "access_token": token,\n        "param_json": param_json,\n        "timestamp": timestamp,\n        "v": v,\n        "sign": sign_code,\n        "sign_method": "hmac-sha256"  # \u5982\u679c sign \u7b97\u6cd5\u7c7b\u578b\u662f md5, \u8fd9\u91cc\u9700\u8981\u8f93\u5165 md5\n    }\n\n    req = requests.get(url=url, params=params)\n\n    return req.status_code\n\n\nif __name__ == \'__main__\':\n    print("access_token: \'{}\'".format(access_token(app_key, app_secret)))\n    print("sign: \'{}\'".format(sign(app_key, app_secret, timestamp)))\n    print("sign test status: \'{}\'".format(testItem(app_key, app_secret)))\n\n'})})}function d(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>r});var a=n(11504);const s={},p=a.createContext(s);function r(e){const t=a.useContext(p);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(p.Provider,{value:t},e.children)}}}]);