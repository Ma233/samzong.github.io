"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[77144],{64:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>r,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var t=s(17624),c=s(4552);const l={title:"AWS Use s3cmd \u547d\u4ee4\u884c\u7ba1\u7406 S3 \u5b58\u50a8",tags:["Tools","AWS"],date:new Date("2016-11-30T23:45:54.000Z")},i=void 0,a={permalink:"/2016/11/30/aws-use-s3cmd-ming-ling-xing-guan-li-s3-cun-chu",source:"@site/blog/2016-11-30-aws-use-s3cmd-ming-ling-xing-guan-li-s3-cun-chu.md",title:"AWS Use s3cmd \u547d\u4ee4\u884c\u7ba1\u7406 S3 \u5b58\u50a8",description:"S3 \u662f AWS \u516c\u6709\u4e91\u670d\u52a1\u63d0\u4f9b\u7684\u4e91\u5b58\u50a8\u670d\u52a1\uff0c\u63d0\u4f9b\u6d77\u91cf\u6570\u636e\u5b58\u50a8\u670d\u52a1\uff0c\u540c\u65f6\u57fa\u4e8e AWS S3 \u63d0\u4f9b\u7684\u4e00\u7cfb\u5217\u7f51\u7edc\u670d\u52a1\u63a5\u53e3\uff0c\u4e5f\u6709\u5927\u91cf\u5df2\u7ecf\u5f00\u53d1\u5b8c\u6210\u7684\u5de5\u5177\u4f9b\u6211\u4eec\u4f7f\u7528\uff0c\u4ee5\u5229\u7528\u8d77 AWS \u5e9e\u5927\u7684\u5b58\u50a8\u8d44\u6e90\uff0c\u8fd9\u7bc7\u6587\u7ae0\u7684\u76ee\u5f55\u9009\u53d6\u4e86\u5176\u4e2d\u4e00\u4e2a\u7528 Linux \u547d\u4ee4\u884c\u5de5\u5177s3cmd\u6765\u7ba1\u7406 AWS S3 \u4e91\u5b58\u50a8\u5176\u4e2d\u7684\u6570\u636e\u3002",date:"2016-11-30T23:45:54.000Z",formattedDate:"2016\u5e7411\u670830\u65e5",tags:[{label:"Tools",permalink:"/tags/tools"},{label:"AWS",permalink:"/tags/aws"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"AWS Use s3cmd \u547d\u4ee4\u884c\u7ba1\u7406 S3 \u5b58\u50a8",tags:["Tools","AWS"],date:"2016-11-30T23:45:54.000Z"},unlisted:!1,prevItem:{title:"Tomcat \u5229\u7528 JDK \u81ea\u8eab keytool \u5b9e\u73b0 HTTPS",permalink:"/2016/12/03/tomcat-2-li-yong-jdk-zi-shen-keytool-shi-xian-https"},nextItem:{title:"Tomcat java.lang.OutOfMemoryError",permalink:"/2016/11/29/Tomcat-1-java-lang-OutOfMemoryError"}},d={authorsImageUrls:[]},o=[{value:"<strong>Install s3cmd</strong>",id:"install-s3cmd",level:2},{value:"1. \u65e0\u8bba\u662f Denbian \u7cfb\u8fd8\u662f Rehat \u7cfb\u5217\uff0c\u8f6f\u4ef6\u4ed3\u5e93\u5185\u5df2\u7ecf\u52a0\u5165\u4e86 s3cmd",id:"1-\u65e0\u8bba\u662f-denbian-\u7cfb\u8fd8\u662f-rehat-\u7cfb\u5217\u8f6f\u4ef6\u4ed3\u5e93\u5185\u5df2\u7ecf\u52a0\u5165\u4e86-s3cmd",level:3},{value:"2. \u5982\u679c\u60a8\u7684\u7cfb\u7edf\u6bd4\u8f83\u7279\u6b8a\uff0c\u8f6f\u4ef6\u4ed3\u5e93\u5185\u627e\u4e0d\u5230 s3cmd\uff0c\u8fd8\u6709 s3cmd \u7684 Github \u4e0a\u53bb\u83b7\u53d6\u76f8\u5173\u5b89\u88c5\u4fe1\u606f\uff1a\u94fe\u63a5",id:"2-\u5982\u679c\u60a8\u7684\u7cfb\u7edf\u6bd4\u8f83\u7279\u6b8a\u8f6f\u4ef6\u4ed3\u5e93\u5185\u627e\u4e0d\u5230-s3cmd\u8fd8\u6709-s3cmd-\u7684-github-\u4e0a\u53bb\u83b7\u53d6\u76f8\u5173\u5b89\u88c5\u4fe1\u606f\u94fe\u63a5",level:3},{value:"<strong>Configure s3cmd</strong>",id:"configure-s3cmd",level:2},{value:"1. \u7b2c\u4e00\u6b21\u8fd0\u884c s3cmd \u9700\u8981\u9996\u5148\u9884\u914d\u7f6e\u76f8\u5173 s3 \u4fe1\u606f",id:"1-\u7b2c\u4e00\u6b21\u8fd0\u884c-s3cmd-\u9700\u8981\u9996\u5148\u9884\u914d\u7f6e\u76f8\u5173-s3-\u4fe1\u606f",level:3},{value:"2. China \u4e0e Global \u7684\u533a\u522b",id:"2-china-\u4e0e-global-\u7684\u533a\u522b",level:3},{value:"3. \u4fdd\u5b58\u914d\u7f6e\u6587\u4ef6\uff0c\u7136\u540e\u7528\u547d\u4ee4\u6d4b\u8bd5\u4e00\u4e0b\uff0c\u786e\u8ba4 s3cmd \u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c",id:"3-\u4fdd\u5b58\u914d\u7f6e\u6587\u4ef6\u7136\u540e\u7528\u547d\u4ee4\u6d4b\u8bd5\u4e00\u4e0b\u786e\u8ba4-s3cmd-\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c",level:3},{value:"<strong>s3cmd \u7684\u57fa\u672c\u4f7f\u7528</strong>",id:"s3cmd-\u7684\u57fa\u672c\u4f7f\u7528",level:2},{value:"1. \u67e5\u770b\u5f53\u524d\u8d26\u6237\u4e0b\u6240\u6709\u73b0\u6709\u7684\u6876 (bucket)",id:"1-\u67e5\u770b\u5f53\u524d\u8d26\u6237\u4e0b\u6240\u6709\u73b0\u6709\u7684\u6876-bucket",level:3},{value:"2. \u521b\u5efa\u65b0\u7684 bucket",id:"2-\u521b\u5efa\u65b0\u7684-bucket",level:3},{value:"3. \u4e0a\u4f20\u6587\u4ef6\u5230 bucket",id:"3-\u4e0a\u4f20\u6587\u4ef6\u5230-bucket",level:3},{value:"4. \u4e0b\u8f7d bucket \u5185\u7684\u6587\u4ef6",id:"4-\u4e0b\u8f7d-bucket-\u5185\u7684\u6587\u4ef6",level:3},{value:"5. \u5220\u9664 bucket \u5185\u7684\u6587\u4ef6",id:"5-\u5220\u9664-bucket-\u5185\u7684\u6587\u4ef6",level:3},{value:"6. \u83b7\u53d6\u5f53\u524d bucket \u4fe1\u606f",id:"6-\u83b7\u53d6\u5f53\u524d-bucket-\u4fe1\u606f",level:3},{value:"7. \u4e0a\u4f20\u6587\u4ef6\u5230 bucket \u65f6\u52a0\u5bc6",id:"7-\u4e0a\u4f20\u6587\u4ef6\u5230-bucket-\u65f6\u52a0\u5bc6",level:3},{value:"8. \u67e5\u770b bucket \u4f7f\u7528\u60c5\u51b5",id:"8-\u67e5\u770b-bucket-\u4f7f\u7528\u60c5\u51b5",level:3},{value:"9. \u5220\u9664\u4e00\u4e2a bucket",id:"9-\u5220\u9664\u4e00\u4e2a-bucket",level:3},{value:"<em>Other</em>",id:"other",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["S3 \u662f AWS \u516c\u6709\u4e91\u670d\u52a1\u63d0\u4f9b\u7684\u4e91\u5b58\u50a8\u670d\u52a1\uff0c\u63d0\u4f9b\u6d77\u91cf\u6570\u636e\u5b58\u50a8\u670d\u52a1\uff0c\u540c\u65f6\u57fa\u4e8e AWS S3 \u63d0\u4f9b\u7684\u4e00\u7cfb\u5217\u7f51\u7edc\u670d\u52a1\u63a5\u53e3\uff0c\u4e5f\u6709\u5927\u91cf\u5df2\u7ecf\u5f00\u53d1\u5b8c\u6210\u7684\u5de5\u5177\u4f9b\u6211\u4eec\u4f7f\u7528\uff0c\u4ee5\u5229\u7528\u8d77 AWS \u5e9e\u5927\u7684\u5b58\u50a8\u8d44\u6e90\uff0c\u8fd9\u7bc7\u6587\u7ae0\u7684\u76ee\u5f55\u9009\u53d6\u4e86\u5176\u4e2d\u4e00\u4e2a\u7528 Linux \u547d\u4ee4\u884c\u5de5\u5177",(0,t.jsx)(n.a,{href:"http://s3tools.org",children:"s3cmd"}),"\u6765\u7ba1\u7406 AWS S3 \u4e91\u5b58\u50a8\u5176\u4e2d\u7684\u6570\u636e\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"s3cmd \u662f\u975e\u5e38\u4f18\u79c0\u7684 S3 \u547d\u4ee4\u884c\u7ba1\u7406\u5de5\u5177\uff0c\u7528 python \u7f16\u5199\uff0c\u652f\u6301 python 2.6 & 2.7\uff0c\u4f46\u662f\u5c1a\u4e0d\u652f\u6301 python3\uff0c\u4f46\u662f\u76ee\u524d\u7edd\u5927\u591a\u6570\u7684 Linux \u53d1\u884c\u7248\u9ed8\u8ba4\u90fd\u662f python2.x \u7cfb\u5217\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Demo CentOS 6.x"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install-s3cmd",children:(0,t.jsx)(n.strong,{children:"Install s3cmd"})}),"\n",(0,t.jsx)(n.h3,{id:"1-\u65e0\u8bba\u662f-denbian-\u7cfb\u8fd8\u662f-rehat-\u7cfb\u5217\u8f6f\u4ef6\u4ed3\u5e93\u5185\u5df2\u7ecf\u52a0\u5165\u4e86-s3cmd",children:"1. \u65e0\u8bba\u662f Denbian \u7cfb\u8fd8\u662f Rehat \u7cfb\u5217\uff0c\u8f6f\u4ef6\u4ed3\u5e93\u5185\u5df2\u7ecf\u52a0\u5165\u4e86 s3cmd"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# 1.1 Ubuntu & Debian\n$ sudo apt-get install -y s3cmd\n\n# 1.2 RHEL & CentOS\n$ sudo yum install s3cmd\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"2-\u5982\u679c\u60a8\u7684\u7cfb\u7edf\u6bd4\u8f83\u7279\u6b8a\u8f6f\u4ef6\u4ed3\u5e93\u5185\u627e\u4e0d\u5230-s3cmd\u8fd8\u6709-s3cmd-\u7684-github-\u4e0a\u53bb\u83b7\u53d6\u76f8\u5173\u5b89\u88c5\u4fe1\u606f\u94fe\u63a5",children:["2. \u5982\u679c\u60a8\u7684\u7cfb\u7edf\u6bd4\u8f83\u7279\u6b8a\uff0c\u8f6f\u4ef6\u4ed3\u5e93\u5185\u627e\u4e0d\u5230 s3cmd\uff0c\u8fd8\u6709 s3cmd \u7684 Github \u4e0a\u53bb\u83b7\u53d6\u76f8\u5173\u5b89\u88c5\u4fe1\u606f\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/s3tools/s3cmd",children:"\u94fe\u63a5"})]}),"\n",(0,t.jsx)(n.h2,{id:"configure-s3cmd",children:(0,t.jsx)(n.strong,{children:"Configure s3cmd"})}),"\n",(0,t.jsx)(n.h3,{id:"1-\u7b2c\u4e00\u6b21\u8fd0\u884c-s3cmd-\u9700\u8981\u9996\u5148\u9884\u914d\u7f6e\u76f8\u5173-s3-\u4fe1\u606f",children:"1. \u7b2c\u4e00\u6b21\u8fd0\u884c s3cmd \u9700\u8981\u9996\u5148\u9884\u914d\u7f6e\u76f8\u5173 s3 \u4fe1\u606f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"s3cmd --configure\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5b83\u4f1a\u95ee\u4f60\u4e00\u7cfb\u5217\u95ee\u9898\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AWS S3 \u4e2d IAM \u8d26\u6237\u7684 Access Key \u4ee5\u53ca Secret Key (\u5efa\u8bae\u5355\u72ec\u521b\u5efa IAM)"}),"\n",(0,t.jsx)(n.li,{children:"\u5bf9 AWS S3 \u53cc\u5411\u4f20\u8f93\u7684\u52a0\u5bc6\u5bc6\u7801\uff08\u81ea\u884c\u8bbe\u5b9a\u4e0d\u8981\u5fd8\u8bb0\uff09"}),"\n",(0,t.jsx)(n.li,{children:"\u4e3a\u52a0\u5bc6\u6570\u636e\u8bbe\u5b9a GPG \u7a0b\u5e8f\u7684\u8def\u5f84\uff08\u9ed8\u8ba4\u5373\u53ef\uff09"}),"\n",(0,t.jsx)(n.li,{children:"\u662f\u5426\u4f7f\u7528 https \u534f\u8bae\uff08\u9ed8\u8ba4\u5373\u53ef\uff09"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u4e0d\u662f https \u534f\u8bae\uff0c\u9700\u8981\u8bbe\u5b9a\u540d\u5b57\u548c\u7aef\u53e3\n\u914d\u7f6e\u5b8c\u6210\u4e4b\u540e\uff0c\u914d\u7f6e\u4fe1\u606f\u4ee5\u666e\u901a\u6587\u672c\u4fdd\u5b58\u5728~/.s3cfg"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-china-\u4e0e-global-\u7684\u533a\u522b",children:"2. China \u4e0e Global \u7684\u533a\u522b"}),"\n",(0,t.jsx)(n.p,{children:"\u7b14\u8005\u5728\u7b2c\u4e00\u6b21\u8fd0\u884c\u65f6\uff0c\u59cb\u7ec8\u65e0\u6cd5\u6dfb\u52a0\u6210\u529f\uff0c\u62a5\u9519\u4fe1\u606f\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" ERROR: Test failed: 403 (InvalidAccessKeyId): The AWS Accecc Key Id you provided does not exist in our records.\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8d77\u521d\u4ee5\u4e3a\u662f Access Key \u4e0d\u5bf9\uff0c\u5728\u7ecf\u8fc7\u591a\u6b21\u6d4b\u8bd5\u4e4b\u540e\uff0c\u624d\u53d1\u73b0\u95ee\u9898\uff0c\u8fd9\u662f\u56e0\u4e3a s3cmd \u5185\u7f6e s3 \u7684 Domain \u4e3a Global \u7684\u4fe1\u606f\uff0c\u800c\u4e2d\u56fd\u4e0e Global \u662f\u72ec\u7acb\u5b58\u5728\u7684\u6240\u4ee5\u67e5\u627e\u4e0d\u5230\u6211\u4eec\u7684 Access Key\u3002\u6240\u4ee5\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u7684 Global AWS \u90a3\u4e48\u4e0a\u9762\u4e00\u6b65\u5e94\u8be5\u5df2\u7ecf\u914d\u7f6e\u597d\u4e86\u4f60\u7684 s3cmd\uff0c\u5982\u679c\u4f60\u662f AWS China \u7684\u7528\u6237\uff0c\u90a3\u4e48\u4f60\u8981\u505a\u4ee5\u4e0b\u64cd\u4f5c\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5728 Retry configuration? [Y/n]\u9009\u62e9\u201cn\u201d"}),"\n",(0,t.jsx)(n.li,{children:"Save settings? [y/N] \u9009\u62e9\u201cy\u201d"}),"\n",(0,t.jsx)(n.li,{children:"\u4fdd\u5b58\u8bbe\u7f6e\u4e4b\u540e\uff0c\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6\uff08~/.s3cfg ) \u4fee\u6539\u5176\u4e2d\u7684\u5982\u4e0b\u5b57\u6bb5\uff0c\u5e76\u5c06\u5176\u4e2d%(bucket)s \u7528\u60a8\u5b9e\u9645\u7684\u67d0\u4e00\u4e2a\u5b58\u50a8\u6876\u540d\u5b57\u4ee3\u66ff\u6389"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bucket_location = %(location)\nhost_base = s3.cn-north-1.amazonaws.com.cn\nhost_bucket = %(bucket)s.s3.cn-north-1.amazonaws.com.cn\nwebsite_endpoint = http://%(bucket)s.s3-website-%(location)s.amazonaws.com.cn/\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u4f60\u7684\u5b58\u50a8\u6876\u7684\u540d\u5b57\u4e3a s3chinatest: \u5730\u57df\u4e3a\u5317\u4eac\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bucket_location = cn-north-1\nhost_base = s3.cn-north-1.amazonaws.com.cn\nhost_bucket = s3chinatest.s3.cn-north-1.amazonaws.com.cn\nwebsite_endpoint = http://s3chinatest.s3-website.amazonaws.com.cn/\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3-\u4fdd\u5b58\u914d\u7f6e\u6587\u4ef6\u7136\u540e\u7528\u547d\u4ee4\u6d4b\u8bd5\u4e00\u4e0b\u786e\u8ba4-s3cmd-\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c",children:"3. \u4fdd\u5b58\u914d\u7f6e\u6587\u4ef6\uff0c\u7136\u540e\u7528\u547d\u4ee4\u6d4b\u8bd5\u4e00\u4e0b\uff0c\u786e\u8ba4 s3cmd \u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ s3cmd ls\n2016-11-18 22:30 s3://s3chinatest\n2016-10-29 00:14 s3://bucket2\n"})}),"\n",(0,t.jsx)(n.h2,{id:"s3cmd-\u7684\u57fa\u672c\u4f7f\u7528",children:(0,t.jsx)(n.strong,{children:"s3cmd \u7684\u57fa\u672c\u4f7f\u7528"})}),"\n",(0,t.jsx)(n.h3,{id:"1-\u67e5\u770b\u5f53\u524d\u8d26\u6237\u4e0b\u6240\u6709\u73b0\u6709\u7684\u6876-bucket",children:"1. \u67e5\u770b\u5f53\u524d\u8d26\u6237\u4e0b\u6240\u6709\u73b0\u6709\u7684\u6876 (bucket)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ s3cmd ls\n2016-11-18 22:30 s3://s3chinatest\n2016-10-29 00:14 s3://bucket2\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-\u521b\u5efa\u65b0\u7684-bucket",children:"2. \u521b\u5efa\u65b0\u7684 bucket"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ s3cmd mb s3://s3chinatest2\n\nBucket \u2019s3://s3chinatest2/\u2019 created\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3-\u4e0a\u4f20\u6587\u4ef6\u5230-bucket",children:"3. \u4e0a\u4f20\u6587\u4ef6\u5230 bucket"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ s3cmd put file1.txt file2.txt file3.txt s3://s3chinatest2\nupload: 'file1.txt' -> 's3://s3chinatest2/file1.txt'  [1 of 3]\n 2432 of 2432   100% in    0s    43.27 kB/s  done\nupload: 'file2.txt' -> 's3://s3chinatest2/file2.txt'  [2 of 3]\n 2432 of 2432   100% in    0s    59.83 kB/s  done\nupload: 'file3.txt' -> 's3://s3chinatest2/file3.txt'  [3 of 3]\n 2432 of 2432   100% in    0s    58.93 kB/s  done\n\n $ s3cmd ls s3://s3chinatest2\n 2016-11-18 15:11      2432   s3://s3chinatest2/file1.txt\n2016-11-18 15:11      2432   s3://s3chinatest2/file2.txt\n2016-11-18 15:11      2432   s3://s3chinatest2/file3.txt\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u4f20\u7684\u6587\u4ef6\u9ed8\u8ba4\u8bbf\u95ee\u6743\u9650\u4e3a\u79c1\u6709 (private)\uff0c\u53ea\u80fd\u7528\u6237\u81ea\u5df1\u53ef\u4ee5\u8bbf\u95ee\uff0c\u4f7f\u7528\u6b63\u786e\u7684\u8bbf\u95ee\u548c\u5b89\u5168\u5bc6\u7801\u5373\u53ef\u3002\n\u5982\u679c\u8981\u4e0a\u4f20\u516c\u5f00\u8bbf\u95ee\u6743\u9650\u7684\u6587\u4ef6\uff0c\u9700\u8981\u6dfb\u52a0 --acl-public \u53c2\u6570\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ s3cmd put  --acl-public file4.txt s3://s3chinatest2\nupload: 'file4.txt' -> 's3://s3chinatest2/file1.txt'  [1 of 1]\n 2432 of 2432   100% in    0s    43.27 kB/s  done\n"})}),"\n",(0,t.jsx)(n.h3,{id:"4-\u4e0b\u8f7d-bucket-\u5185\u7684\u6587\u4ef6",children:"4. \u4e0b\u8f7d bucket \u5185\u7684\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ s3cmd get s3://s3chinatest2/file1.txt\ndownload: 's3://s3chinatest2/file1.txt' -> './file1.txt'  [1 of 1]\n 2432 of 2432   100% in    0s    27.65 kB/s  done\n\n # \u652f\u6301 \" * \"\u5339\u914d\u4efb\u610f\u5b57\u7b26\n $ s3cmd get s3://s3chinatest2/file*.txt\ndownload: 's3://s3chinatest2/file1.txt' -> './file1.txt'  [1 of 3]\n 2432 of 2432   100% in    0s    48.11 kB/s  done\ndownload: 's3://s3chinatest2/file2.txt' -> './file2.txt'  [2 of 3]\n 2432 of 2432   100% in    0s    84.76 kB/s  done\ndownload: 's3://s3chinatest2/file3.txt' -> './file3.txt'  [3 of 3]\n 2432 of 2432   100% in    0s    75.28 kB/s  done\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f\u82e5\u5f53\u524d\u76ee\u5f55\u6709\u76f8\u540c\u6587\u4ef6\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528--skip-existing \u53c2\u6570\u8df3\u8fc7\u8fd9\u4e9b\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"5-\u5220\u9664-bucket-\u5185\u7684\u6587\u4ef6",children:"5. \u5220\u9664 bucket \u5185\u7684\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# del \u4e0e rm \u90fd\u53ef\u4ee5\u4f7f\u7528.\n$ s3cmd del s3://s3chinatest2/file1.txt\ndelete: 's3://s3chinatest2/file1.txt'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"6-\u83b7\u53d6\u5f53\u524d-bucket-\u4fe1\u606f",children:"6. \u83b7\u53d6\u5f53\u524d bucket \u4fe1\u606f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# bucket\u7684\u5b58\u50a8\u4f4d\u7f6e\u53ca\u8bbf\u95ee\u6743\u9650\u8bbe\u7f6e\ns3cmd info s3://s3chinatest2\ns3://s3chinatest2/ (bucket):\n   Location:  cn-north-1\n   Payer:     BucketOwner\n   Expiration Rule: none\n   policy:    none\n   cors:      none\n   ACL:       2fe63da8137b85d9868d240869945287b285a58b5d7e07e21ac813b486dcabea: FULL_CONTROL\n"})}),"\n",(0,t.jsx)(n.h3,{id:"7-\u4e0a\u4f20\u6587\u4ef6\u5230-bucket-\u65f6\u52a0\u5bc6",children:"7. \u4e0a\u4f20\u6587\u4ef6\u5230 bucket \u65f6\u52a0\u5bc6"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u7528 s3cmd \u4e0b\u8f7d\u4e00\u4e2a\u52a0\u5bc6\u8fc7\u7684\u6587\u4ef6\u65f6\uff0c\u5b83\u4f1a\u81ea\u52a8\u68c0\u6d4b\u52a0\u5bc6\u5e76\u5728\u4e0b\u8f7d\u8fc7\u7a0b\u89e3\u5bc6\uff0c\u56e0\u6b64\u4e0b\u8f7d\u548c\u8bbf\u95ee\u52a0\u5bc6\u6587\u4ef6\u65f6\uff0c\u5c31\u50cf\u901a\u5e38\u6240\u505a\u7684\u4e00\u6837"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ s3cmd -e put t_result.java s3://s3chinatest2\nupload: '/tmp/tmpfile-S9lUXERAEUdnNaz5zHba' -> 's3://s3chinatest2/t_result.java'  [1 of 1]\n 3355 of 3355   100% in    0s    39.25 kB/s  done\n"})}),"\n",(0,t.jsx)(n.h3,{id:"8-\u67e5\u770b-bucket-\u4f7f\u7528\u60c5\u51b5",children:"8. \u67e5\u770b bucket \u4f7f\u7528\u60c5\u51b5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ s3cmd du s3://s3chinatest2\n8219     3 objects s3://s3chinatest2/\n"})}),"\n",(0,t.jsx)(n.h3,{id:"9-\u5220\u9664\u4e00\u4e2a-bucket",children:"9. \u5220\u9664\u4e00\u4e2a bucket"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ s3cmd rb s3://s3chinatest2\nERROR: S3 error: 409 (BucketNotEmpty): The bucket you tried to delete is not empty\n# \u9ed8\u8ba4\u4e0d\u80fd\u5220\u9664\u975e\u7a7a\u7684bucket\uff0c\u6240\u4ee5\u8981\u5148\u6e05\u7a7a\u5b58\u50a8\u6876\u5185\u6570\u636e\n\n$ s3cmd rm s3://s3chinatest2/*\ndelete: 's3://s3chinatest2/file2.txt'\ndelete: 's3://s3chinatest2/file3.txt'\ndelete: 's3://s3chinatest2/t_result.java'\n\n$ s3cmd rb s3://s3chinatest2\nBucket 's3://s3chinatest2/' removed\n"})}),"\n",(0,t.jsx)(n.h2,{id:"other",children:(0,t.jsx)(n.em,{children:"Other"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5173\u4e8e s3cmd \u8fd8\u6709\u975e\u5e38\u591a\u7684\u529f\u80fd\uff0c\u8fd9\u91cc\u53ea\u662f\u5217\u4e3e\u7b80\u5355\u7684\u4e00\u90e8\u5206\uff0c\u6709\u5174\u8da3\u7684\u540c\u5b66\uff0c\u53ef\u4ee5\u4f7f\u7528 man s3cmd \u67e5\u770b\u8be6\u7ec6\u7684\u5e2e\u52a9\u6587\u6863\u3002"}),"\n",(0,t.jsx)(n.li,{children:"s3cmd \u9002\u7528\u7684\u573a\u666f\u4e3b\u8981\u5229\u7528\u811a\u672c\u505a cron \u4efb\u52a1\uff0c\u4f8b\u5982\u5b9a\u65f6\u5907\u4efd\uff0c\u7136\u540e\u63a8\u9001\u5230 s3\uff0c\u964d\u4f4e\u6210\u672c\uff0c\u6301\u4e45\u4fdd\u5b58\u3002"}),"\n",(0,t.jsx)(n.li,{children:"Windows \u5e73\u53f0\u4e5f\u652f\u6301 s3cmd \u54e6\uff0c\u6709\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u53bb\u7814\u7a76\u4e0b\u3002"}),"\n"]})]})}function r(e={}){const{wrapper:n}={...(0,c.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>i});var t=s(11504);const c={},l=t.createContext(c);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);