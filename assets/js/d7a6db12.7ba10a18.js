"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[38924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(g,l(l({ref:t},u),{},{components:n})):o.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"Awesome Hexo Plugin",date:new Date("2022-03-27T21:45:17.000Z"),tags:["Hexo"],categories:["Blog"]},l=void 0,s={permalink:"/2022/03/27/awesome-hexo-plugins",editUrl:"https://github.com/samzong/samzong.me/edit/main/blog/2022-03-27-awesome-hexo-plugins.md",source:"@site/blog/2022-03-27-awesome-hexo-plugins.md",title:"Awesome Hexo Plugin",description:"About my blog use hexo plugin",date:"2022-03-27T21:45:17.000Z",formattedDate:"2022\u5e743\u670827\u65e5",tags:[{label:"Hexo",permalink:"/tags/hexo"}],readingTime:1.6066666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Awesome Hexo Plugin",date:"2022-03-27T21:45:17.000Z",tags:["Hexo"],categories:["Blog"]},prevItem:{title:"Javascript Tips",permalink:"/2022/03/28/Javascript-Tips"},nextItem:{title:"Poetry \u4f7f\u7528\u7b14\u8bb0",permalink:"/2022/03/27/Poetry-\u4f7f\u7528\u7b14\u8bb0"}},i={authorsImageUrls:[]},p=[{value:"hexo-hide-posts",id:"hexo-hide-posts",level:2},{value:"Installation",id:"installation",level:3},{value:"Config",id:"config",level:3},{value:"hexo-generator-restful",id:"hexo-generator-restful",level:2},{value:"Install",id:"install",level:3},{value:"Config Plugin",id:"config-plugin",level:3},{value:"Get Hexo Config",id:"get-hexo-config",level:3},{value:"Get Posts",id:"get-posts",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"About my blog use hexo plugin"),(0,a.kt)("h2",{id:"hexo-hide-posts"},"hexo-hide-posts"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/prinsss/hexo-hide-posts"},"hexo-hide-posts")," is A plugin to hide specific posts from your Hexo blog and make them only accessible by links"),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install hexo-hide-posts --save\n")),(0,a.kt)("p",null,"Usage"),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden: true")," to the ",(0,a.kt)("a",{parentName:"p",href:"https://hexo.io/docs/front-matter"},"front-matter")," of posts which you want to hide."),(0,a.kt)("p",null,"e.g. Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"source/_posts/lorem-ipsum.md"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"---\ntitle: 'Lorem Ipsum'\ndate: '2019/8/10 11:45:14'\nhidden: true\n---\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\n")),(0,a.kt)("p",null,"This post will not be shown anywhere, but you can still access it by ",(0,a.kt)("inlineCode",{parentName:"p"},"https://hexo.test/lorem-ipsum/"),". (If you want to completely prevent a post from rendering, just set it as a ",(0,a.kt)("a",{parentName:"p",href:"https://hexo.io/docs/writing.html#Drafts"},"draft"),".)"),(0,a.kt)("p",null,"To get a list of hidden posts, you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"hexo hidden:list")," from command line."),(0,a.kt)("p",null,"For developers, ",(0,a.kt)("inlineCode",{parentName:"p"},"all_posts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden_posts")," added to ",(0,a.kt)("a",{parentName:"p",href:"https://hexo.io/api/locals"},"Local Variables")," may be useful."),(0,a.kt)("h3",{id:"config"},"Config"),(0,a.kt)("p",null,"In your site's ",(0,a.kt)("inlineCode",{parentName:"p"},"_config.yml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'# hexo-hide-posts\nhide_posts:\n  enable: true\n  # Change the filter name to fit your need\n  filter: hidden\n  # Generators which you want to expose all posts (include hidden ones) to.\n  # Common generators: index, tag, category, archive, sitemap, feed, etc.\n  public_generators: []\n  # Add "noindex" meta tag to prevent hidden posts from being indexed by search engines\n  noindex: true\n')),(0,a.kt)("h2",{id:"hexo-generator-restful"},"hexo-generator-restful"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/yscoder/hexo-generator-restful"},"hexo-generator-restful")," is generate restful json data for Hexo plugins."),(0,a.kt)("h3",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install hexo-generator-restful --save\n")),(0,a.kt)("h3",{id:"config-plugin"},"Config Plugin"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u9ed8\u8ba4\u914d\u7f6e\uff0c\u5c5e\u6027\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," \u8868\u793a\u4e0d\u751f\u6210\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"restful:\n  # site \u53ef\u914d\u7f6e\u4e3a\u6570\u7ec4\u9009\u62e9\u6027\u751f\u6210\u67d0\u4e9b\u5c5e\u6027\n  # site: ['title', 'subtitle', 'description', 'author', 'since', email', 'favicon', 'avatar']\n  site: true        # hexo.config mix theme.config\n  posts_size: 10    # \u6587\u7ae0\u5217\u8868\u5206\u9875\uff0c0 \u8868\u793a\u4e0d\u5206\u9875\n  posts_props:      # \u6587\u7ae0\u5217\u8868\u9879\u7684\u9700\u8981\u751f\u6210\u7684\u5c5e\u6027\n    title: true\n    slug: true\n    date: true\n    updated: true\n    comments: true\n    path: true\n    excerpt: false\n    cover: true      # \u5c01\u9762\u56fe\uff0c\u53d6\u6587\u7ae0\u7b2c\u4e00\u5f20\u56fe\u7247\n    content: false\n    keywords: false\n    categories: true\n    tag: true\n  categories: true         # \u5206\u7c7b\u6570\u636e\n  use_category_slug: false # Use slug for filename of category data\n  tag: true               # \u6807\u7b7e\u6570\u636e\n  use_tag_slug: false      # Use slug for filename of tag data\n  post: true               # \u6587\u7ae0\u6570\u636e\n  pages: false             # \u989d\u5916\u7684 Hexo \u9875\u9762\u6570\u636e\uff0c\u5982 About\n")),(0,a.kt)("h3",{id:"get-hexo-config"},"Get Hexo Config"),(0,a.kt)("p",null,"\u83b7\u53d6\u6240\u6709 Hexo \u914d\u7f6e\uff08\u7ad9\u70b9\u914d\u7f6e\u548c\u4e3b\u9898\u914d\u7f6e\uff09\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Request")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-request"},"GET /api/site.json\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Response")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://samzong.me/api/site.json"},"/api/site.json")),(0,a.kt)("h3",{id:"get-posts"},"Get Posts"),(0,a.kt)("p",null,"\u5982\u679c\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"posts_size: 0")," \u5219\u4e0d\u5206\u9875\uff0c\u4ee5\u4e0b\u8bf7\u6c42\u4f1a\u83b7\u53d6\u5168\u90e8\u6587\u7ae0\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Request")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-request"},"GET /api/posts.json\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Response")),(0,a.kt)("p",null,"\u793a\u4f8b\u4e3a\u5206\u9875\u914d\u7f6e\u4e0b\u7684\u6570\u636e\uff0c\u4f1a\u5305\u542b\u5206\u9875\u5c5e\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"total"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"pageSize"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"pageCount"),"\uff0c\u4e0d\u5206\u9875\u7684\u6570\u636e\u4e0d\u5305\u542b\u8fd9\u4e09\u9879\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://samzong.me/api/posts.json"},"/api/posts.json")))}m.isMDXComponent=!0}}]);