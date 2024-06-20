"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[77688],{44992:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=s(17624),o=s(4552);const i={title:"Awesome Hexo Plugin",date:new Date("2022-03-27T21:45:17.000Z"),tags:["Blog"]},l=void 0,r={permalink:"/2022/03/27/awesome-hexo-plugins",source:"@site/blog/2022-03-27-awesome-hexo-plugins.md",title:"Awesome Hexo Plugin",description:"About my blog use hexo plugin",date:"2022-03-27T21:45:17.000Z",formattedDate:"March 27, 2022",tags:[{label:"Blog",permalink:"/tags/blog"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Awesome Hexo Plugin",date:"2022-03-27T21:45:17.000Z",tags:["Blog"]},unlisted:!1,prevItem:{title:"Javascript Tips",permalink:"/2022/03/28/Javascript-Tips"},nextItem:{title:"Poetry \u4f7f\u7528\u7b14\u8bb0",permalink:"/2022/03/27/poetry-shi-yong-bi-ji"}},a={authorsImageUrls:[]},d=[{value:"hexo-hide-posts",id:"hexo-hide-posts",level:2},{value:"Installation",id:"installation",level:3},{value:"Config",id:"config",level:3},{value:"hexo-generator-restful",id:"hexo-generator-restful",level:2},{value:"Install",id:"install",level:3},{value:"Config Plugin",id:"config-plugin",level:3},{value:"Get Hexo Config",id:"get-hexo-config",level:3},{value:"Get Posts",id:"get-posts",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"About my blog use hexo plugin"}),"\n",(0,t.jsx)(n.h2,{id:"hexo-hide-posts",children:"hexo-hide-posts"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/prinsss/hexo-hide-posts",children:"hexo-hide-posts"})," is A plugin to hide specific posts from your Hexo blog and make them only accessible by links"]}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install hexo-hide-posts --save\n"})}),"\n",(0,t.jsx)(n.p,{children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"hidden: true"})," to the ",(0,t.jsx)(n.a,{href:"https://hexo.io/docs/front-matter",children:"front-matter"})," of posts which you want to hide."]}),"\n",(0,t.jsxs)(n.p,{children:["e.g. Edit ",(0,t.jsx)(n.code,{children:"source/_posts/lorem-ipsum.md"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"---\ntitle: 'Lorem Ipsum'\ndate: '2019/8/10 11:45:14'\nhidden: true\n---\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This post will not be shown anywhere, but you can still access it by ",(0,t.jsx)(n.code,{children:"https://hexo.test/lorem-ipsum/"}),". (If you want to completely prevent a post from rendering, just set it as a ",(0,t.jsx)(n.a,{href:"https://hexo.io/docs/writing.html#Drafts",children:"draft"}),".)"]}),"\n",(0,t.jsxs)(n.p,{children:["To get a list of hidden posts, you can run ",(0,t.jsx)(n.code,{children:"hexo hidden:list"})," from command line."]}),"\n",(0,t.jsxs)(n.p,{children:["For developers, ",(0,t.jsx)(n.code,{children:"all_posts"})," and ",(0,t.jsx)(n.code,{children:"hidden_posts"})," added to ",(0,t.jsx)(n.a,{href:"https://hexo.io/api/locals",children:"Local Variables"})," may be useful."]}),"\n",(0,t.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,t.jsxs)(n.p,{children:["In your site's ",(0,t.jsx)(n.code,{children:"_config.yml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# hexo-hide-posts\nhide_posts:\n  enable: true\n  # Change the filter name to fit your need\n  filter: hidden\n  # Generators which you want to expose all posts (include hidden ones) to.\n  # Common generators: index, tag, category, archive, sitemap, feed, etc.\n  public_generators: []\n  # Add "noindex" meta tag to prevent hidden posts from being indexed by search engines\n  noindex: true\n'})}),"\n",(0,t.jsx)(n.h2,{id:"hexo-generator-restful",children:"hexo-generator-restful"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/yscoder/hexo-generator-restful",children:"hexo-generator-restful"})," is generate restful json data for Hexo plugins."]}),"\n",(0,t.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install hexo-generator-restful --save\n"})}),"\n",(0,t.jsx)(n.h3,{id:"config-plugin",children:"Config Plugin"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0b\u4e3a\u9ed8\u8ba4\u914d\u7f6e\uff0c\u5c5e\u6027\u503c\u4e3a ",(0,t.jsx)(n.code,{children:"false"})," \u8868\u793a\u4e0d\u751f\u6210\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"restful:\n  # site \u53ef\u914d\u7f6e\u4e3a\u6570\u7ec4\u9009\u62e9\u6027\u751f\u6210\u67d0\u4e9b\u5c5e\u6027\n  # site: ['title', 'subtitle', 'description', 'author', 'since', email', 'favicon', 'avatar']\n  site: true        # hexo.config mix theme.config\n  posts_size: 10    # \u6587\u7ae0\u5217\u8868\u5206\u9875\uff0c0 \u8868\u793a\u4e0d\u5206\u9875\n  posts_props:      # \u6587\u7ae0\u5217\u8868\u9879\u7684\u9700\u8981\u751f\u6210\u7684\u5c5e\u6027\n    title: true\n    slug: true\n    date: true\n        comments: true\n    path: true\n    excerpt: false\n    cover: true      # \u5c01\u9762\u56fe\uff0c\u53d6\u6587\u7ae0\u7b2c\u4e00\u5f20\u56fe\u7247\n    content: false\n    keywords: false\n        tag: true\n    use_category_slug: false # Use slug for filename of category data\n  tag: true               # \u6807\u7b7e\u6570\u636e\n  use_tag_slug: false      # Use slug for filename of tag data\n  post: true               # \u6587\u7ae0\u6570\u636e\n  pages: false             # \u989d\u5916\u7684 Hexo \u9875\u9762\u6570\u636e\uff0c\u5982 About\n"})}),"\n",(0,t.jsx)(n.h3,{id:"get-hexo-config",children:"Get Hexo Config"}),"\n",(0,t.jsx)(n.p,{children:"\u83b7\u53d6\u6240\u6709 Hexo \u914d\u7f6e\uff08\u7ad9\u70b9\u914d\u7f6e\u548c\u4e3b\u9898\u914d\u7f6e\uff09\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Request"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-request",children:"GET /api/site.json\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Response"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://samzong.me/api/site.json",children:"/api/site.json"})}),"\n",(0,t.jsx)(n.h3,{id:"get-posts",children:"Get Posts"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u914d\u7f6e ",(0,t.jsx)(n.code,{children:"posts_size: 0"})," \u5219\u4e0d\u5206\u9875\uff0c\u4ee5\u4e0b\u8bf7\u6c42\u4f1a\u83b7\u53d6\u5168\u90e8\u6587\u7ae0\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Request"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-request",children:"GET /api/posts.json\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Response"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e3a\u5206\u9875\u914d\u7f6e\u4e0b\u7684\u6570\u636e\uff0c\u4f1a\u5305\u542b\u5206\u9875\u5c5e\u6027 ",(0,t.jsx)(n.code,{children:"total"}),"\u3001",(0,t.jsx)(n.code,{children:"pageSize"}),"\u3001",(0,t.jsx)(n.code,{children:"pageCount"}),"\uff0c\u4e0d\u5206\u9875\u7684\u6570\u636e\u4e0d\u5305\u542b\u8fd9\u4e09\u9879\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://samzong.me/api/posts.json",children:"/api/posts.json"})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>l});var t=s(11504);const o={},i=t.createContext(o);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);