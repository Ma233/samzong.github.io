"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[51882],{20351:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>r,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=l(85893),t=l(11151);const a={title:"bypy \u767e\u5ea6\u7f51\u76d8 Python \u5ba2\u6237\u7aef",tags:["Python"],authors:["samzong"],toc:"true",date:new Date("2017-06-02T12:00:00.000Z")},o=void 0,i={permalink:"/2017/06/02/bai-du-wang-pan-python-ke-hu-duan",source:"@site/blog/2017-06-02-bai-du-wang-pan-python-ke-hu-duan.md",title:"bypy \u767e\u5ea6\u7f51\u76d8 Python \u5ba2\u6237\u7aef",description:"\u6700\u8fd1\u5728 GitHub \u4e0a\u53d1\u73b0\u4e00\u4e2a\u6709\u8da3\u7684\u9879\u76ee\uff0c\u767e\u5ea6\u7f51\u76d8 Python \u5ba2\u6237\u7aef(bypy)\uff0c\u4e3b\u8981\u4f7f\u7528\u5728 Linux \u547d\u4ee4\u884c\u4e0b\uff0c\u8fd9\u6837\u5f88\u5927\u7684\u4e00\u4e2a\u597d\u5904\u662f\u53ef\u4ee5\u5229\u7528\u5230\u767e\u5ea6\u4e91\u76d8 2TB \u7684\u5b58\u50a8\u7a7a\u95f4 (\u5982\u679c\u4f60\u662f\u4f1a\u5458\u6709 6TB)\uff1b\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u670d\u52a1\u5668\u4e0a\uff0c\u5229\u7528\u81ea\u52a8\u5316\u811a\u672c\u5b9e\u73b0\u4e00\u4e9b\u6570\u636e\u6587\u4ef6\u3001\u65e5\u5fd7\u6587\u4ef6\u7b49\u7b49\u5907\u4efd\u64cd\u4f5c\uff0c\u540c\u65f6\u4e5f\u63d0\u4f9b\u4e30\u5bcc\u7684\u6587\u4ef6\u5217\u8868\u3001\u4e0a\u4f20\u3001\u4e0b\u8f7d\u3001\u5bf9\u6bd4\u3001\u540c\u6b65\u4ee5\u53ca\u6279\u91cf\u64cd\u4f5c\u7b49\u3002",date:"2017-06-02T12:00:00.000Z",formattedDate:"June 2, 2017",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:7.755,hasTruncateMarker:!1,authors:[{name:"Samzong Lu",title:"Product Designer",url:"https://github.com/SAMZONG",email:"samzong.lu@gmail.com",imageURL:"https://github.com/SAMZONG.png",key:"samzong"}],frontMatter:{title:"bypy \u767e\u5ea6\u7f51\u76d8 Python \u5ba2\u6237\u7aef",tags:["Python"],authors:["samzong"],toc:"true",date:"2017-06-02T12:00:00.000Z"},unlisted:!1,prevItem:{title:"\u4e1c\u5e73\u56fd\u5bb6\u68ee\u6797\u516c\u56ed",permalink:"/2017/08/04/dong-ping-guo-jia-sen-lin-gong-yuan"},nextItem:{title:"Jmeter \u4f7f\u7528 BlazeMeter \u4e3a Jmeter \u5f55\u5236\u811a\u672c",permalink:"/2017/08/12/blazemeter-recoding-jmx"}},d={authorsImageUrls:[void 0]},c=[{value:"\u5b9e\u9a8c\u76ee\u7684",id:"\u5b9e\u9a8c\u76ee\u7684",level:2},{value:"\u73af\u5883\u4f9d\u8d56",id:"\u73af\u5883\u4f9d\u8d56",level:2},{value:"Python \u73af\u5883",id:"python-\u73af\u5883",level:2},{value:"Install Python 2.7",id:"install-python-27",level:3},{value:"Can not use Yum ?",id:"can-not-use-yum-",level:3},{value:"\u5b89\u88c5<code>bypy</code>",id:"\u5b89\u88c5bypy",level:2},{value:"Install Setuptools &amp; requests",id:"install-setuptools--requests",level:3},{value:"Clone &amp;  Install",id:"clone---install",level:3},{value:"\u57fa\u672c\u64cd\u4f5c",id:"\u57fa\u672c\u64cd\u4f5c",level:3},{value:"\u6388\u6743",id:"\u6388\u6743",level:4},{value:"\u5e38\u7528\u64cd\u4f5c",id:"\u5e38\u7528\u64cd\u4f5c",level:4},{value:"\u67e5\u770b",id:"\u67e5\u770b",level:4},{value:"\u521b\u5efa\u6587\u4ef6\u5939",id:"\u521b\u5efa\u6587\u4ef6\u5939",level:4},{value:"\u4e0a\u4f20",id:"\u4e0a\u4f20",level:4},{value:"\u672c\u5730\u540c\u6b65\u5230\u767e\u5ea6\u7f51\u76d8",id:"\u672c\u5730\u540c\u6b65\u5230\u767e\u5ea6\u7f51\u76d8",level:4},{value:"\u641c\u7d22",id:"\u641c\u7d22",level:4},{value:"\u6bd4\u8f83\u672c\u5730\u4e0e\u767e\u5ea6\u7f51\u76d8",id:"\u6bd4\u8f83\u672c\u5730\u4e0e\u767e\u5ea6\u7f51\u76d8",level:4},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:4},{value:"\u6570\u636e\u5e93\u5907\u4efd\u81ea\u52a8\u4e0a\u4f20\u5230\u767e\u5ea6\u7f51\u76d8",id:"\u6570\u636e\u5e93\u5907\u4efd\u81ea\u52a8\u4e0a\u4f20\u5230\u767e\u5ea6\u7f51\u76d8",level:2},{value:"\u6dfb\u52a0\u8ba1\u5212\u4efb\u52a1",id:"\u6dfb\u52a0\u8ba1\u5212\u4efb\u52a1",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["\u6700\u8fd1\u5728 GitHub \u4e0a\u53d1\u73b0\u4e00\u4e2a\u6709\u8da3\u7684\u9879\u76ee\uff0c",(0,s.jsx)(e.a,{href:"https://github.com/houtianze/bypy",children:"\u767e\u5ea6\u7f51\u76d8 Python \u5ba2\u6237\u7aef"}),"(bypy)\uff0c\u4e3b\u8981\u4f7f\u7528\u5728 Linux \u547d\u4ee4\u884c\u4e0b\uff0c\u8fd9\u6837\u5f88\u5927\u7684\u4e00\u4e2a\u597d\u5904\u662f\u53ef\u4ee5\u5229\u7528\u5230\u767e\u5ea6\u4e91\u76d8 2TB \u7684\u5b58\u50a8\u7a7a\u95f4 (\u5982\u679c\u4f60\u662f\u4f1a\u5458\u6709 6TB)\uff1b\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u670d\u52a1\u5668\u4e0a\uff0c\u5229\u7528\u81ea\u52a8\u5316\u811a\u672c\u5b9e\u73b0\u4e00\u4e9b\u6570\u636e\u6587\u4ef6\u3001\u65e5\u5fd7\u6587\u4ef6\u7b49\u7b49\u5907\u4efd\u64cd\u4f5c\uff0c\u540c\u65f6\u4e5f\u63d0\u4f9b\u4e30\u5bcc\u7684\u6587\u4ef6\u5217\u8868\u3001\u4e0a\u4f20\u3001\u4e0b\u8f7d\u3001\u5bf9\u6bd4\u3001\u540c\u6b65\u4ee5\u53ca\u6279\u91cf\u64cd\u4f5c\u7b49\u3002"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u867d\u7136\u767e\u5ea6\u7f51\u76d8 Python \u5ba2\u6237\u7aef\u63d0\u4f9b\u5f88\u5927\u7684\u4fbf\u5229\uff0c\u4f46\u662f\u6211\u5f3a\u70c8\u4e0d\u5efa\u8bae\u5c06\u4e00\u4e9b\u91cd\u8981\u6570\u636e\u653e\u5230\u767e\u5ea6\u4e91\u76d8"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5b9e\u9a8c\u76ee\u7684",children:"\u5b9e\u9a8c\u76ee\u7684"}),"\n",(0,s.jsx)(e.p,{children:"\u6570\u636e\u5e93\u5907\u4efd\u6587\u4ef6\u81ea\u52a8\u4e0a\u4f20\u5230\u767e\u5ea6\u7f51\u76d8"}),"\n",(0,s.jsx)(e.h2,{id:"\u73af\u5883\u4f9d\u8d56",children:"\u73af\u5883\u4f9d\u8d56"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Python 2.7 or 3.0 \u4ee5\u4e0a"}),"\n",(0,s.jsx)(e.li,{children:"Encoding UTF-8"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"python-\u73af\u5883",children:"Python \u73af\u5883"}),"\n",(0,s.jsxs)(e.p,{children:["\u9996\u5148\u4f7f\u7528",(0,s.jsx)(e.code,{children:"python -V"}),"\u68c0\u67e5\u4f60\u7684 Python \u7248\u672c\uff0c\u5982\u679c\u4f60\u7684\u7248\u672c\u662f 2.7 \u6216\u4ee5\u4e0a\uff0c\u90a3\u4e48\u5c31\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u64cd\u4f5c\uff0c\u53ef\u4ee5\u76f4\u63a5\u5b89\u88c5 bypy\uff0c\u4f46\u662f\u5982\u679c\u4f60\u50cf\u6211\u4e00\u6837\u591a\u6570\u662f CentOS 6.x \u90a3\u4e48\u5c31\u9700\u8981\u5148\u5347\u7ea7 Python \u7248\u672c\u3002\u6211\u8fd9\u91cc\u662f\u5c06 Python \u5347\u7ea7\u5230 2.7\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"install-python-27",children:"Install Python 2.7"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"# Check current Python version\n\u279c  ~ python -V\nPython 2.6.6\n\n# Download python 2.7.13 or new packge.\n\u279c  ~ wget http://www.python.org/ftp/python/2.7.13/Python-2.7.13.tar.xz\n\n# Extract and change in\n\u279c  ~ tar xf Python-2.7.13.tar.xz\n\u279c  ~ cd Python-2.7.13\n\n# Run the configure:\n\u279c  Python-2.7.13 ./configure --prefix=/usr/local\n\n# Compile and install it:\n\u279c  Python-2.7.13 make && make altinstall\n\n# Check Python Version\n\u279c  Python-2.7.13 python2.7 -V\nPython 2.7.13\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u867d\u7136 Python2.7 \u5df2\u7ecf\u5b89\u88c5\u6210\u529f\u4e86\uff0c\u4f46\u662f\u9ed8\u8ba4\u7684 Python \u4ecd\u7136\u662f 2.6 \u7248\u672c\uff0c\u6240\u4ee5\u6211\u4eec\u8981\u66ff\u6362\u9ed8\u8ba4 Python \u547d\u4ee4\u6307\u5230 2.7"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"# Update bin python to python2.7\n\u279c  ~ ll /usr/bin/python /usr/local/bin/python2.7\n\u279c  ~ ll /usr/bin/python-config /usr/local/bin/python2.7-config\n\u279c  ~ python -V\nPython 2.7.13\n"})}),"\n",(0,s.jsx)(e.h3,{id:"can-not-use-yum-",children:"Can not use Yum ?"}),"\n",(0,s.jsxs)(e.p,{children:["\u56e0\u4e3a",(0,s.jsx)(e.code,{children:"yum"}),"\u5fc5\u987b\u8981\u4f7f\u7528 Python2.6\uff0c\u6240\u4ee5\u5f53\u5347\u7ea7\u6210\u529f\u4e4b\u540e\uff0c\u53d1\u73b0 yum \u65e0\u6cd5\u4f7f\u7528\uff0c\u8fd9\u65f6\u6211\u4eec\u8981\u7a0d\u5fae\u4fee\u6539\u4e0b\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:'\u279c  ~ which-command yum\n/usr/bin/yum\n\n#Update frist line "#!/usr/bin/python" to "#!/usr/bin/python2.6"\n\u279c  ~ vim /usr/bin/yum\n'})}),"\n",(0,s.jsxs)(e.h2,{id:"\u5b89\u88c5bypy",children:["\u5b89\u88c5",(0,s.jsx)(e.code,{children:"bypy"})]}),"\n",(0,s.jsx)(e.h3,{id:"install-setuptools--requests",children:"Install Setuptools & requests"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"\u279c  ~ wget --no-check-certificate https://pypi.python.org/packages/source/s/setuptools/setuptools-1.4.2.tar.gz\ntar xf setuptools-1.4.2.tar.gz\n\u279c  ~ python setup.py install\n\n\u279c  ~ pip2.7 install requests\n"})}),"\n",(0,s.jsx)(e.h3,{id:"clone---install",children:"Clone &  Install"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"\u279c  ~ git clone https://github.com/houtianze/bypy.git\n\u279c  ~ cd bypy\n\u279c  bypy git:(master) python setup.py install\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u5b89\u88c5\u5931\u8d25\uff0c\u6ce8\u610f\u770b\u62a5\u9519\uff0c\u662f\u5426\u7f3a\u5c11 Python \u4f9d\u8d56\u5305\uff0c\u6216\u8005\u7248\u672c\u4e0d\u5bf9"}),"\n",(0,s.jsx)(e.h3,{id:"\u57fa\u672c\u64cd\u4f5c",children:"\u57fa\u672c\u64cd\u4f5c"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6210\u529f\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u4ee5\u4e0b\u9700\u8981\u6ce8\u610f\uff1a"}),"\n",(0,s.jsx)(e.h4,{id:"\u6388\u6743",children:"\u6388\u6743"}),"\n",(0,s.jsxs)(e.p,{children:["\u9996\u6b21\u5b89\u88c5\u4e4b\u540e\uff0c\u9700\u8981\u8fdb\u884c\u6388\u6743\uff0c\u53ea\u9700\u8981\u8fd0\u884c\u4efb\u4f55\u4e00\u4e2a\u547d\u4ee4\u90fd\u53ef\u4ee5\uff0c\u4f8b\u5982",(0,s.jsx)(e.code,{children:"bypy info"}),"\uff0c\u7136\u540e\u6839\u636e\u63d0\u793a\uff0c\u6253\u5f00\u7f51\u9875\u767b\u5f55\u4f60\u7684\u767e\u5ea6\u7f51\u76d8\u8d26\u53f7\uff0c\u53d6\u5f97\u6388\u6743\u7801\uff0c\u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://img.samzong.me/202307191531228.png?imageView2/3/w/400/interlace/1/q/50",alt:"image"})}),"\n",(0,s.jsx)(e.p,{children:"\u590d\u5236\u4e0a\u56fe\u4e2d\u7684\u94fe\u63a5\u5230\u4f60\u7684\u6d4f\u89c8\u5668\u4e2d\uff0c\u6253\u5f00\u53ef\u4ee5\u770b\u5230\u767e\u5ea6 API \u6388\u6743\u9875\u9762\uff0c\u5982\u4e0b\u56fe\uff0c\u5c06\u6388\u6743\u7801\u7c98\u8d34\u5230\u547d\u4ee4\u884c\uff0c\u7136\u540e\u56de\u8f66\u7b49\u5f85\u9a8c\u8bc1\u901a\u8fc7\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://img.samzong.me/202307191531229.png?imageView2/3/w/400/interlace/1/q/50",alt:"image"})}),"\n",(0,s.jsx)(e.p,{children:"\u7136\u540e\u518d\u6b21\u8fd0\u884c\u547d\u4ee4\u65f6\uff0c\u5c31\u4e0d\u9700\u8981\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u4e86"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"[root@localhost bypy]# bypy info\nQuota: 6.103TB\nUsed: 180.074GB\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f60\u53ef\u4ee5\u770b\u5230\u6211\u7684\u767e\u5ea6\u7f51\u76d8\u6709 6.103TB \u7684\u7a7a\u95f4\uff0c\u5df2\u7ecf\u4f7f\u7528\u4e86 180.074GB"}),"\n",(0,s.jsx)(e.h4,{id:"\u5e38\u7528\u64cd\u4f5c",children:"\u5e38\u7528\u64cd\u4f5c"}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u4e8e\u767e\u5ea6 PCS API \u6743\u9650\u9650\u5236\uff0c\u7a0b\u5e8f\u53ea\u80fd\u5b58\u53d6\u767e\u5ea6\u4e91\u7aef/apps/bypy \u76ee\u5f55\u4e0b\u9762\u7684\u6587\u4ef6\u548c\u76ee\u5f55\u3002\u901a\u8fc7\u4ee5\u4e0b\u94fe\u63a5\u53ef\u4ee5\u6253\u5f00\u4f60\u7684 bypy \u9ed8\u8ba4\u8def\u5f84\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pan.baidu.com/disk/home#list/vmode=list&path=%2Fapps%2Fbypy",children:"https://pan.baidu.com/disk/home#list/vmode=list&path=%2Fapps%2Fbypy"})}),"\n",(0,s.jsx)(e.h4,{id:"\u67e5\u770b",children:"\u67e5\u770b"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u5728\u767e\u5ea6\u7f51\u76d8\u5185\u589e\u52a0\u4e86\u4e00\u4e2a v6 \u7684\u6587\u4ef6\u5939\uff0c\u5bf9\u5e94\u6211\u670d\u52a1\u5668\u540d\u79f0\uff0c\u8fd9\u662f\u6211\u5728\u670d\u52a1\u5668\u5185\u5229\u7528\u547d\u4ee4\u5373\u53ef\u770b\u5230\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"[root@localhost bypy]# bypy list\n/apps/bypy ($t $f $s $m $d):\nD v6 0 2017-06-02, 10:28:41\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u521b\u5efa\u6587\u4ef6\u5939",children:"\u521b\u5efa\u6587\u4ef6\u5939"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"[root@localhost ~]# bypy mkdir v6/bypy\n[root@localhost ~]# bypy list v6\n/apps/bypy/v6 ($t $f $s $m $d):\nD bypy 0 2017-06-02, 10:35:53\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u4e0a\u4f20",children:"\u4e0a\u4f20"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"[root@localhost ~]# bypy upload bypy.tgz\n[root@localhost ~]# bypy list\n/apps/bypy ($t $f $s $m $d):\nD v6 0 2017-06-02, 10:28:41\nD v6_1 0 2017-06-02, 10:34:52\nF bypy.tgz 2867963 2017-06-02, 10:37:30 aa4160cdbf2f4eca9baf0fcd395241fe\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u672c\u5730\u540c\u6b65\u5230\u767e\u5ea6\u7f51\u76d8",children:"\u672c\u5730\u540c\u6b65\u5230\u767e\u5ea6\u7f51\u76d8"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528",(0,s.jsx)(e.code,{children:"syncup"}),"\u53c2\u6570\u5c06\u672c\u5730\u76ee\u5f55\u6587\u4ef6\u540c\u6b65\u5230\u767e\u5ea6\u7f51\u76d8"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"[root@localhost ~]# bypy syncup ./bypy v6/bypy\n[root@localhost ~]# bypy list v6/bypy\n/apps/bypy/v6/bypy ($t $f $s $m $d):\nD .git 0 2017-06-02, 10:45:31\nD baidudoc 0 2017-06-02, 10:44:50\nD build 0 2017-06-02, 10:45:11\nD bypy 0 2017-06-02, 10:45:54\nD bypy.egg-info 0 2017-06-02, 10:45:00\nD dist 0 2017-06-02, 10:44:54\nD update 0 2017-06-02, 10:45:08\nF .editorconfig 277 2017-06-02, 10:45:08 d9f71b00f908626ae68da571ca47cbe2\nF .gitignore 484 2017-06-02, 10:45:00 833d8511a69044a1f1c6e0fe4b3c3117\nF .travis.yml 628 2017-06-02, 10:44:58 9f377251309ced0a55548c18896ebd7a\nF CONTRIBUTING.md 683 2017-06-02, 10:44:52 f5e8a568937039e5853613ff0fe296ee\nF genrst.py 129 2017-06-02, 10:45:30 4565eddf226c2e8bed73d2c30dfae9f3\nF HISTORY.md 2542 2017-06-02, 10:45:11 16605670a55a3dd9768d4c862543eac4\nF HISTORY.rst 2639 2017-06-02, 10:44:57 7215fbd0a3be667fd7f9fda14f06c1a9\nF LICENSE 1078 2017-06-02, 10:44:59 ebd1a0c53ea3046f505b995629faf8fb\nF MANIFEST.in 116 2017-06-02, 10:44:50 c98e18e65329b318f13abd031a4397c4\nF README.md 6276 2017-06-02, 10:46:15 d4b88fd543d93c6b63863d28f5c4e716\nF release.sh 1795 2017-06-02, 10:45:53 c086eb283e9554bbcd23daf0888e2819\nF requirements.txt 42 2017-06-02, 10:44:54 28b314f2f2d2ed79957a7a7e6d3f7c17\nF setup.cfg 70 2017-06-02, 10:45:11 b23579970dcedbcaeaaa00636d601335\nF setup.py 2377 2017-06-02, 10:44:58 34d63d5143ab02d3db7808321a7f9df4\n[root@localhost ~]# bypy syncup ./bypy v6/bypy\n[root@localhost ~]#\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u641c\u7d22",children:"\u641c\u7d22"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"bypy"})," \u540c\u6837\u652f\u6301\u641c\u7d22\uff0c\u6839\u636e\u6587\u4ef6\u540d\u68c0\u7d22\uff0c\u81ea\u52a8\u9012\u5f52\u6240\u6709\u76ee\u5f55"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"[root@localhost ~]# bypy search release.sh\nFound:\nF /apps/bypy/v6/bypy/release.sh 1795 2017-06-02, 10:45:53 2017-06-02, 10:45:53 c086eb283e9554bbcd23daf0888e2819\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u6bd4\u8f83\u672c\u5730\u4e0e\u767e\u5ea6\u7f51\u76d8",children:"\u6bd4\u8f83\u672c\u5730\u4e0e\u767e\u5ea6\u7f51\u76d8"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"# \u5148\u5220\u9664\u672c\u5730\u4e00\u4e2a\u6587\u4ef6\n[root@localhost ~]# rm ./bypy/release.sh\n\n# \u5bf9\u6bd4\n[root@localhost ~]# bypy compare v6/bypy ./bypy\n==== Same files ===\nF - MANIFEST.in\n... omit ...\nF - bypy/monkey.py\nF - README.md\n==== Different files ===\n==== Local only ====\n==== Remote only ====\nF - release.sh\n\nStatistics:\n--------------------------------\nSame: 131\nDifferent: 0\nLocal only: 0\nRemote only: 1\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u4ee5\u4e0a\u53ef\u4ee5\u770b\u5230\uff0c\u76f8\u540c\u6587\u4ef6 131\uff0c\u8fdc\u7a0b\u76ee\u5f55\u591a\u4e86\u4e00\u4e2a\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u5176\u4ed6",children:"\u5176\u4ed6"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"bypy"}),"\u652f\u6301\u7684\u64cd\u4f5c\u5f88\u591a\uff0c\u4f7f\u7528",(0,s.jsx)(e.code,{children:"bypy help"}),"\u5373\u53ef\u4ee5\u770b\u5230\uff0c\u82e5\u8981\u8c03\u8bd5\uff0c\u4f7f\u7528\u4ee5\u4e0b\u53c2\u6570\u53ef\u4ee5\u6253\u5f00\u5bf9\u5e94\u8c03\u8bd5\u4fe1\u606f\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u8fd0\u884c\u65f6\u6dfb\u52a0",(0,s.jsx)(e.code,{children:"-v"}),"\u53c2\u6570\uff0c\u4f1a\u663e\u793a\u8fdb\u5ea6\u8be6\u60c5\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u8fd0\u884c\u65f6\u6dfb\u52a0",(0,s.jsx)(e.code,{children:"-d"}),"\uff0c\u4f1a\u663e\u793a\u4e00\u4e9b\u8c03\u8bd5\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u8fd0\u884c\u65f6\u6dfb\u52a0",(0,s.jsx)(e.code,{children:"-ddd"}),"\uff0c\u8fd8\u4f1a\u4f1a\u663e\u793a HTTP \u901a\u8baf\u4fe1\u606f\uff08",(0,s.jsx)(e.strong,{children:"\u8b66\u544a\uff1a\u975e\u5e38\u591a"}),"\uff09"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6570\u636e\u5e93\u5907\u4efd\u81ea\u52a8\u4e0a\u4f20\u5230\u767e\u5ea6\u7f51\u76d8",children:"\u6570\u636e\u5e93\u5907\u4efd\u81ea\u52a8\u4e0a\u4f20\u5230\u767e\u5ea6\u7f51\u76d8"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e4b\u524d\u4e5f\u5199\u8fc7\u5f88\u591a\u5173\u4e8e Mysql \u5907\u4efd\u7684\u6587\u7ae0\uff0c\u5982\u679c\u8981\u8be6\u7ec6\u67e5\u770b\uff0c\u8bf7\u6253\u5f00\u4ee5\u4e0b\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://samzong.me/categories/MySQL/",children:"\u5206\u7c7b MySQL"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'# create back script.\n[root@localhost ~]# touch mysql_back.sh\n\n# add executable permissions\n[root@localhost ~]# chmod +x mysql_back.sh\n\n[root@localhost ~]# vim mysql_back.sh\n#!/bin/bash\n#  \n# backup mysqldump file to baidu yunPan\n# filepath: /usr/local/bin/mysql_back.sh\n# Author: samzong\n#\n\nfunction upload_file(){\n        TIME=`date "+%Y%m%d%H%M%S"`\n        folder="/mysqlbak"\n        filename="db_$TIME.sql"\n        filePath=$folder/$filename\n\n        if [ ! -f $filePath ]; then\n                echo "[ERROR]["`date +%Y-%m-%d\' \'%H:%M:%S`"] $folder/$filename not found."\n        else\n                echo "[INFO]["`date +%Y-%m-%d\' \'%H:%M:%S`"] $folder/$filename has been found. Start uploading ......"\n                bypy upload "$filePath" "v6/mysql_backup/$filename"\n                echo "[INFO]["`date +%Y-%m-%d\' \'%H:%M:%S`"] Uploading end."\n        fi\n}\n\n#  set TIME variable\nTIME=`date "+%Y%m%d%H%M%S"`\n\n# backup db ghost to /mysqlbak/\nmysqldump --single-transaction -h localhost -u ghost_backuser -pbackupPass ghost  > /mysqlbak/db_$TIME.sql\n\n# tar sql file\ntar czvf /mysqlbak/ghost_$TIME.sql.tgz /mysqlbak/ghost_$TIME.sql --remove-files\n\n# upload sql file to baidu yunPan.\nupload_file;\n\n# send mial to admin\'mial\nif [ $? -eq 0 ]; then\n    echo "ghost SQL dump is successfully. At time: `date` " | mail -s ghost-dump-successfully  samzong.lu@gmail.com\nelse\n    echo " Error Error ghost SQL dump is Error. At time: `date` " | mail -s ghost-dump-error samzong.lu@gmail.com\nfi\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u6dfb\u52a0\u8ba1\u5212\u4efb\u52a1",children:"\u6dfb\u52a0\u8ba1\u5212\u4efb\u52a1"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:" ~ crontab -e\n00 00 * * * sh /usr/local/bin/mysql_back.sh\n"})})]})}function r(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},11151:(n,e,l)=>{l.d(e,{Z:()=>i,a:()=>o});var s=l(67294);const t={},a=s.createContext(t);function o(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);