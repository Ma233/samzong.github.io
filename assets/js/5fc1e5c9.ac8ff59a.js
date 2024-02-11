"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[37704],{23592:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=o(17624),n=o(4552);const s={title:"HowTo Add Piwik Tracking to Ghost",tags:["Tools","Piwik"],date:new Date("2016-04-27T16:51:58.000Z")},r=void 0,a={permalink:"/2016/04/27/HowTo-Add-Piwik-Tracking-to-Ghost",source:"@site/blog/2016-04-27-HowTo-Add-Piwik-Tracking-to-Ghost.md",title:"HowTo Add Piwik Tracking to Ghost",description:"This is what about piwik on wiki. goto",date:"2016-04-27T16:51:58.000Z",formattedDate:"April 27, 2016",tags:[{label:"Tools",permalink:"/tags/tools"},{label:"Piwik",permalink:"/tags/piwik"}],readingTime:1.815,hasTruncateMarker:!1,authors:[],frontMatter:{title:"HowTo Add Piwik Tracking to Ghost",tags:["Tools","Piwik"],date:"2016-04-27T16:51:58.000Z"},unlisted:!1,prevItem:{title:"HowTo Install piwik with nginx on centos 6.x",permalink:"/2016/04/27/HowTo-Install-piwik-with-nginx-on-centos-6-x"},nextItem:{title:"HowTo Install Python 2.7.8 on CentOS 6.x",permalink:"/2016/05/04/HowTo-Install-Python-2-7-8-on-CentOS-6-x"}},h={authorsImageUrls:[]},l=[{value:"Step 1 - Getting your Piwik Tracking code",id:"step-1---getting-your-piwik-tracking-code",level:2},{value:"Step 2 - Adding Piwik Tracking Code To Ghost Theme File",id:"step-2---adding-piwik-tracking-code-to-ghost-theme-file",level:2},{value:"Step 3 - Restart Ghost",id:"step-3---restart-ghost",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This is what about piwik on wiki. ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Piwik",children:"goto"})]}),"\n",(0,i.jsx)(t.h2,{id:"step-1---getting-your-piwik-tracking-code",children:"Step 1 - Getting your Piwik Tracking code"}),"\n",(0,i.jsx)(t.p,{children:"The first step to having Piwik tracking your Ghost blog will be to add a new website in Piwik, if you are unfamiliar with this process you can checkout the Piwik documention on Managing Websites. With your Ghost blog added into Piwik you will end up with tracking code that will look similar to the following:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"\x3c!-- Piwik --\x3e\n<script type=\"text/javascript\">\n    var _paq = _paq || [];\n    (function(){ var u=((\"https:\" == document.location.protocol) ? \"https://{$PIWIK_URL}/\" : \"http://{$PIWIK_URL}/\");\n    _paq.push(['setSiteId', {$IDSITE}]);\n    _paq.push(['setTrackerUrl', u+'piwik.php']);\n    _paq.push(['trackPageView']);\n    _paq.push(['enableLinkTracking']);\n    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript'; g.defer=true; g.async=true; g.src=u+'piwik.js';\n    s.parentNode.insertBefore(g,s); })();\n<\/script>\n\x3c!-- End Piwik Code --\x3e\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Where ",(0,i.jsx)(t.code,{children:"$PIWIK_URL"})," will be the domain name you have setup for Piwik."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-2---adding-piwik-tracking-code-to-ghost-theme-file",children:"Step 2 - Adding Piwik Tracking Code To Ghost Theme File"}),"\n",(0,i.jsxs)(t.p,{children:["Piwik recommends that you add the tracking code right above the ",(0,i.jsx)(t.code,{children:"&#60;/body&#62;"})," tag, which you can find in your Ghost's ",(0,i.jsx)(t.code,{children:"default.hbs"})," theme file. You will find the ",(0,i.jsx)(t.code,{children:"default.hbs"})," file in ",(0,i.jsx)(t.code,{children:"/path/to/ghost/content/themes/your-theme/default.hbs"}),"\nHow you add the tracking code to your ",(0,i.jsx)(t.code,{children:"default.hbs"})," will depend on if you are editing the file on your local computer or directly on the server. If you are editing your theme locally you can edit this file in any text editor and when you are finished upload this file to your server. Otherwise if you are editing this file directly on the server you can use the command line editor, ",(0,i.jsx)(t.code,{children:"vim"}),", to add the tracking code."]}),"\n",(0,i.jsx)(t.h2,{id:"step-3---restart-ghost",children:"Step 3 - Restart Ghost"}),"\n",(0,i.jsxs)(t.p,{children:["For the changes in your theme to take effect you will need to restart Ghost. Restarting Ghost will load up a fresh copy of your theme files, with your Piwik tracking code. How you restart Ghost depends on how you started Ghost. If you followed our ",(0,i.jsx)(t.a,{href:"https://www.howtoinstallghost.com/how-to-start-ghost-with-forever/",children:"https://www.howtoinstallghost.com/how-to-start-ghost-with-forever/"})," Keep Ghost Running with forever",(0,i.jsx)(t.code,{children:", then you can restart Ghost with"})," forever restart ghost`.\nWithin a few moments you will start to see data coming in for your Ghost blog!\nIf you have any questions about setting this up or run into any issues please leave us a comment below and we will do what we can to help."]})]})}function d(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,t,o)=>{o.d(t,{I:()=>a,M:()=>r});var i=o(11504);const n={},s=i.createContext(n);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);