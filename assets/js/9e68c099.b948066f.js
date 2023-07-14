"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[75394],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(r),f=a,g=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69222:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={title:"autoscraper \u722c\u866b \u6240\u89c1\u5373\u6240\u5f97",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/hx1txz"},l=void 0,c={permalink:"/2020/11/16/autoscraper \u722c\u866b \u6240\u89c1\u5373\u6240\u5f97",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2020-11-16-autoscraper \u722c\u866b \u6240\u89c1\u5373\u6240\u5f97.md",source:"@site/blog/2020-11-16-autoscraper \u722c\u866b \u6240\u89c1\u5373\u6240\u5f97.md",title:"autoscraper \u722c\u866b \u6240\u89c1\u5373\u6240\u5f97",description:"\u4e00\u5206\u949f\u4e0a\u624b",date:"2020-11-16T00:00:00.000Z",formattedDate:"2020\u5e7411\u670816\u65e5",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:.38,hasTruncateMarker:!1,authors:[],frontMatter:{title:"autoscraper \u722c\u866b \u6240\u89c1\u5373\u6240\u5f97",tags:["Python"],categories:["Python"],url:"https://www.yuque.com/samzong/code/hx1txz"},prevItem:{title:"python re \u6b63\u5219\u8868\u8fbe\u5f0f",permalink:"/2020/11/17/python re\u6b63\u5219\u8868\u8fbe\u5f0f"},nextItem:{title:"Django \u521d\u59cb\u5316 project",permalink:"/2020/11/09/Django \u521d\u59cb\u5316project"}},p={authorsImageUrls:[]},i=[{value:"\u4e00\u5206\u949f\u4e0a\u624b",id:"\u4e00\u5206\u949f\u4e0a\u624b",level:2},{value:"\u66f4\u591a\u4f7f\u7528\u6280\u5de7",id:"\u66f4\u591a\u4f7f\u7528\u6280\u5de7",level:2}],s={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Install\n\n$ pip3 install autoscraper\n")),(0,a.kt)("h2",{id:"\u4e00\u5206\u949f\u4e0a\u624b"},"\u4e00\u5206\u949f\u4e0a\u624b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from autoscraper import AutoScraper\n\nurl = 'https://stackoverflow.com/questions/2081586/web-scraping-with-python'\n\n# We can add one or multiple candidates here.\n# You can also put urls here to retrieve urls.\nwanted_list = [\"How to call an external command?\"]\n\nscraper = AutoScraper()\nresult = scraper.build(url, wanted_list)\nprint(result)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"url \u662f\u4f60\u9700\u8981\u722c\u53d6\u7684\u7f51\u9875"),(0,a.kt)("li",{parentName:"ul"},"wanted","_","list \u662f\u4e00\u4e2a list\uff0c\u5176\u4e2d\u6709\u4f60\u9700\u8981\u7684\u5143\u7d20\u76ee\u6807\uff0c\u6ce8\u610f\u4f1a\u722c\u53d6\u76f8\u540c tag \u548c\u8303\u56f4\u7684\u6570\u636e")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://ipic-typora-samzong.oss-cn-qingdao.aliyuncs.com//uPic/1605241399644-c035e6f7-8096-438b-806d-7a9da7bee65f.png?x-oss-process=image/resize,w_960,m_lfit",alt:"image.png"})),(0,a.kt)("h2",{id:"\u66f4\u591a\u4f7f\u7528\u6280\u5de7"},"\u66f4\u591a\u4f7f\u7528\u6280\u5de7"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bf7\u5173\u6ce8 Github \u4ed3\u5e93\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alirezamika/autoscraper"},"https://github.com/alirezamika/autoscraper"))))}m.isMDXComponent=!0}}]);