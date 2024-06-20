"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[12e3],{37228:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(17624),o=s(4552);const r={title:"SSH LINUX Security Settings",tags:["Linux"],date:new Date("2016-10-29T06:23:59.000Z")},i=void 0,a={permalink:"/2016/10/29/SSH-LINUX-Security-Settings",source:"@site/blog/2016-10-29-SSH-LINUX-Security-Settings.md",title:"SSH LINUX Security Settings",description:"SSH \u914d\u7f6e\u5b89\u5168\u63a7\u5236\u9650\u5236\u767b\u5f55",date:"2016-10-29T06:23:59.000Z",formattedDate:"October 29, 2016",tags:[{label:"Linux",permalink:"/tags/linux"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"SSH LINUX Security Settings",tags:["Linux"],date:"2016-10-29T06:23:59.000Z"},unlisted:!1,prevItem:{title:"MySQL \u6e05\u7a7a\u8868\u547d\u4ee4\u4e4b\uff1atruncate \u4e0e delete \u533a\u522b",permalink:"/2016/11/10/mysql-5-qing-kong-biao-ming-ling-zhi-truncate-yu-delete-qu-bie"},nextItem:{title:"HowTo Install PostgreSQL 9.5 on CentOS 6.x",permalink:"/2016/10/20/HowTo-Install-PostgreSQL-9-5-on-CentOS-6-x"}},l={authorsImageUrls:[]},c=[{value:"<strong>SSH \u914d\u7f6e\u5b89\u5168\u63a7\u5236\u9650\u5236\u767b\u5f55</strong>",id:"ssh-\u914d\u7f6e\u5b89\u5168\u63a7\u5236\u9650\u5236\u767b\u5f55",level:2},{value:"1. \u53ea\u5141\u8bb8\u67d0\u4e2a IP \u767b\u5f55\uff0c\u62d2\u7edd\u5176\u4ed6\u6240\u6709 IP",id:"1-\u53ea\u5141\u8bb8\u67d0\u4e2a-ip-\u767b\u5f55\u62d2\u7edd\u5176\u4ed6\u6240\u6709-ip",level:3},{value:"2. \u7981\u6b62\u67d0\u4e2a\u7528\u6237\u901a\u8fc7 ssh \u767b\u5f55",id:"2-\u7981\u6b62\u67d0\u4e2a\u7528\u6237\u901a\u8fc7-ssh-\u767b\u5f55",level:2},{value:"3. \u8bbe\u5b9a\u767b\u5f55\u9ed1\u540d\u5355",id:"3-\u8bbe\u5b9a\u767b\u5f55\u9ed1\u540d\u5355",level:2},{value:"4. sshd_config \u914d\u7f6e",id:"4-sshd_config-\u914d\u7f6e",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"ssh-\u914d\u7f6e\u5b89\u5168\u63a7\u5236\u9650\u5236\u767b\u5f55",children:(0,t.jsx)(n.strong,{children:"SSH \u914d\u7f6e\u5b89\u5168\u63a7\u5236\u9650\u5236\u767b\u5f55"})}),"\n",(0,t.jsx)(n.h3,{id:"1-\u53ea\u5141\u8bb8\u67d0\u4e2a-ip-\u767b\u5f55\u62d2\u7edd\u5176\u4ed6\u6240\u6709-ip",children:"1. \u53ea\u5141\u8bb8\u67d0\u4e2a IP \u767b\u5f55\uff0c\u62d2\u7edd\u5176\u4ed6\u6240\u6709 IP"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 /etc/hosts.allow \u589e\u52a0\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sshd: 1.2.3.4\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728 /etc/hosts.deny \u589e\u808c\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sshd: ALL\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7528 iptables \u4e5f\u884c\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"iptables -A INPUT -p tcp --dport 22 -j DROP\niptables -A INPUT -p tcp --dport 22 -s 1.2.3.4 -j ACCEPT\n"})}),"\n",(0,t.jsx)(n.h2,{id:"2-\u7981\u6b62\u67d0\u4e2a\u7528\u6237\u901a\u8fc7-ssh-\u767b\u5f55",children:"2. \u7981\u6b62\u67d0\u4e2a\u7528\u6237\u901a\u8fc7 ssh \u767b\u5f55"}),"\n",(0,t.jsx)(n.p,{children:"\u5728/etc/ssh/sshd_conf\u6dfb\u52a0"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"AllowUsers \u7528\u6237\u540d\n\u6216\u8005\nAllowGroups \u7ec4\u540d\n\u6216\u8005\nDenyUsers \u7528\u6237\u540d\n"})}),"\n",(0,t.jsx)(n.h2,{id:"3-\u8bbe\u5b9a\u767b\u5f55\u9ed1\u540d\u5355",children:"3. \u8bbe\u5b9a\u767b\u5f55\u9ed1\u540d\u5355"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@6 ~]# vim /etc/pam.d/sshd\nauth required /lib/security/pam_listfile.so item=user sense=deny file=/etc/sshd_user_deny_list onerr=succeed\n# \u6240\u6709/etc/sshd_user_deny_list\u91cc\u9762\u7684\u7528\u6237\u88ab\u62d2\u7eddssh\u767b\u5f55\n"})}),"\n",(0,t.jsx)(n.h2,{id:"4-sshd_config-\u914d\u7f6e",children:"4. sshd_config \u914d\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u5173\u4e8e SSH Server \u7684\u6574\u4f53\u8bbe\u5b9a\uff0c\u5305\u542b\u4f7f\u7528\u7684 port \u5566\uff0c\u4ee5\u53ca\u4f7f\u7528\u7684\u5bc6\u7801\u6f14\u7b97\u65b9\u5f0f\nPort 22\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000# SSH \u9884\u8bbe\u4f7f\u7528 22 \u8fd9\u4e2a port\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u591a\u7684 port \uff01\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u4ea6\u5373\u91cd\u590d\u4f7f\u7528 port \u8fd9\u4e2a\u8bbe\u5b9a\u9879\u76ee\u5373\u53ef\uff01\nProtocol 2,1\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u9009\u62e9\u7684 SSH \u534f\u8bae\u7248\u672c\uff0c\u53ef\u4ee5\u662f 1 \u4e5f\u53ef\u4ee5\u662f 2 \uff0c\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u5982\u679c\u8981\u540c\u65f6\u652f\u6301\u4e24\u8005\uff0c\u5c31\u5fc5\u987b\u8981\u4f7f\u7528 2,1 \u8fd9\u4e2a\u5206\u9694\u4e86\uff01\n#ListenAddress 0.0.0.0\u3000\u3000 # \u76d1\u542c\u7684\u4e3b\u673a\u9002\u914d\u5361\uff01\u4e3e\u4e2a\u4f8b\u5b50\u6765\u8bf4\uff0c\u5982\u679c\u60a8\u6709\u4e24\u4e2a IP\uff0c\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u5206\u522b\u662f 192.168.0.100 \u53ca 192.168.2.20 \uff0c\u90a3\u4e48\u53ea\u60f3\u8981\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u5f00\u653e 192.168.0.100 \u65f6\uff0c\u5c31\u53ef\u4ee5\u5199\u5982\u540c\u4e0b\u9762\u7684\u6837\u5f0f\uff1a\nListenAddress 192.168.0.100          # \u53ea\u76d1\u542c\u6765\u81ea 192.168.0.100 \u8fd9\u4e2a IP \u7684SSH\u8054\u673a\u3002\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u5982\u679c\u4e0d\u4f7f\u7528\u8bbe\u5b9a\u7684\u8bdd\uff0c\u5219\u9884\u8bbe\u6240\u6709\u63a5\u53e3\u5747\u63a5\u53d7 SSH\nPidFile /var/run/sshd.pid\u3000\u3000\u3000\u3000\u3000\u3000# \u53ef\u4ee5\u653e\u7f6e SSHD \u8fd9\u4e2a PID \u7684\u6863\u6848\uff01\u5de6\u5217\u4e3a\u9ed8\u8ba4\u503c\nLoginGraceTime 600\u3000\u3000\u3000\u3000 # \u5f53\u4f7f\u7528\u8005\u8fde\u4e0a SSH server \u4e4b\u540e\uff0c\u4f1a\u51fa\u73b0\u8f93\u5165\u5bc6\u7801\u7684\u753b\u9762\uff0c\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u5728\u8be5\u753b\u9762\u4e2d\uff0c\u5728\u591a\u4e45\u65f6\u95f4\u5185\u6ca1\u6709\u6210\u529f\u8fde\u4e0a SSH server \uff0c\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u5c31\u65ad\u7ebf\uff01\u65f6\u95f4\u4e3a\u79d2\uff01\nCompression yes\u3000\u3000\u3000\u3000\u3000\u3000# \u662f\u5426\u53ef\u4ee5\u4f7f\u7528\u538b\u7f29\u6307\u4ee4\uff1f\u5f53\u7136\u53ef\u4ee5\u5570\uff01\n\n# \u8bf4\u660e\u4e3b\u673a\u7684 Private Key \u653e\u7f6e\u7684\u6863\u6848\uff0c\u9884\u8bbe\u4f7f\u7528\u4e0b\u9762\u7684\u6863\u6848\u5373\u53ef\uff01\nHostKey /etc/ssh/ssh_host_key\u3000\u3000\u3000\u3000# SSH version 1 \u4f7f\u7528\u7684\u79c1\u94a5\nHostKey /etc/ssh/ssh_host_rsa_key\u3000\u3000# SSH version 2 \u4f7f\u7528\u7684 RSA \u79c1\u94a5\nHostKey /etc/ssh/ssh_host_dsa_key\u3000\u3000# SSH version 2 \u4f7f\u7528\u7684 DSA \u79c1\u94a5\n# \u5173\u4e8e version 1 \u7684\u4e00\u4e9b\u8bbe\u5b9a\uff01\nKeyRegenerationInterval 3600\u3000 \u3000\u3000\u3000# \u7531\u524d\u9762\u8054\u673a\u7684\u8bf4\u660e\u53ef\u4ee5\u77e5\u9053\uff0c version 1 \u4f1a\u4f7f\u7528\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # server \u7684 Public Key \uff0c\u90a3\u4e48\u5982\u679c\u8fd9\u4e2a Public\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # Key \u88ab\u5077\u7684\u8bdd\uff0c\u5c82\u4e0d\u5b8c\u86cb\uff1f\u6240\u4ee5\u9700\u8981\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u6765\u91cd\u65b0\u5efa\u7acb\u4e00\u6b21\uff01\u8fd9\u91cc\u7684\u65f6\u95f4\u4e3a\u79d2\uff01\nServerKeyBits 768 \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u6ca1\u9519\uff01\u8fd9\u4e2a\u5c31\u662f Server key \u7684\u957f\u5ea6\uff01\n\n# \u5173\u4e8e\u767b\u5f55\u6587\u4ef6\u7684\u8baf\u606f\u6570\u636e\u653e\u7f6e\u4e0e daemon \u7684\u540d\u79f0\uff01\nSyslogFacility AUTH\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000# \u5f53\u6709\u4eba\u4f7f\u7528 SSH \u767b\u5165\u7cfb\u7edf\u7684\u65f6\u5019\uff0cSSH\u4f1a\u8bb0\u5f55\u8d44\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u8baf\uff0c\u8fd9\u4e2a\u4fe1\u606f\u8981\u8bb0\u5f55\u5728\u4ec0\u4e48 daemon name \u5e95\u4e0b\uff1f\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u9884\u8bbe\u662f\u4ee5 AUTH \u6765\u8bbe\u5b9a\u7684\uff0c\u5373\u662f /var/log/secure\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u91cc\u9762\uff01\u4ec0\u4e48\uff1f\u5fd8\u8bb0\u4e86\uff01\u56de\u5230 Linux \u57fa\u7840\u53bb\u7ffb\u4e00\u4e0b\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u5176\u5b83\u53ef\u7528\u7684 daemon name \u4e3a\uff1aDAEMON,USER,AUTH,\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # LOCAL0,LOCAL1,LOCAL2,LOCAL3,LOCAL4,LOCAL5,\nLogLevel INFO\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000# \u767b\u5f55\u8bb0\u5f55\u7684\u7b49\u7ea7\uff01\u563f\u563f\uff01\u4efb\u4f55\u8baf\u606f\uff01\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u540c\u6837\u7684\uff0c\u5fd8\u8bb0\u4e86\u5c31\u56de\u53bb\u53c2\u8003\uff01\n\n# \u767b\u5165\u8bbe\u5b9a\u90e8\u5206\nPermitRootLogin no\u3000\u3000 \u3000\u3000# \u662f\u5426\u5141\u8bb8 root \u767b\u5165\uff01\u9884\u8bbe\u662f\u5141\u8bb8\u7684\uff0c\u4f46\u662f\u5efa\u8bae\u8bbe\u5b9a\u6210 no\uff01\nUserLogin no\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u5728 SSH \u5e95\u4e0b\u672c\u6765\u5c31\u4e0d\u63a5\u53d7 login \u8fd9\u4e2a\u7a0b\u5e8f\u7684\u767b\u5165\uff01\nStrictModes yes\u3000\u3000\u3000\u3000\u3000\u3000# \u5f53\u4f7f\u7528\u8005\u7684 host key \u6539\u53d8\u4e4b\u540e\uff0cServer \u5c31\u4e0d\u63a5\u53d7\u8054\u673a\uff0c\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u53ef\u4ee5\u62b5\u6321\u90e8\u5206\u7684\u6728\u9a6c\u7a0b\u5e8f\uff01\n#RSAAuthentication yes\u3000\u3000 # \u662f\u5426\u4f7f\u7528\u7eaf\u7684 RSA \u8ba4\u8bc1\uff01\uff1f\u4ec5\u9488\u5bf9 version 1 \uff01\nPubkeyAuthentication yes\u3000 # \u662f\u5426\u5141\u8bb8 Public Key \uff1f\u5f53\u7136\u5141\u8bb8\u5566\uff01\u53ea\u6709 version 2\nAuthorizedKeysFile      .ssh/authorized_keys\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u4e0a\u9762\u8fd9\u4e2a\u5728\u8bbe\u5b9a\u82e5\u8981\u4f7f\u7528\u4e0d\u9700\u8981\u5bc6\u7801\u767b\u5165\u7684\u8d26\u53f7\u65f6\uff0c\u90a3\u4e48\u90a3\u4e2a\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u8d26\u53f7\u7684\u5b58\u653e\u6863\u6848\u6240\u5728\u6863\u540d\uff01\nAllowusers root@222.XX.XX.XX. #\u8bbe\u7f6e\u5141\u8bb8root\u5e10\u53f7\u53ea\u80fd\u4ee5222.XX.XX.XX\u8fd9\u4e2aIP\u8fdb\u884cssh\u8fde\u63a5\n\n# \u8ba4\u8bc1\u90e8\u5206\nRhostsAuthentication no\u3000\u3000# \u672c\u673a\u7cfb\u7edf\u4e0d\u6b62\u4f7f\u7528 .rhosts \uff0c\u56e0\u4e3a\u4ec5\u4f7f\u7528 .rhosts \u592a\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u4e0d\u5b89\u5168\u4e86\uff0c\u6240\u4ee5\u8fd9\u91cc\u4e00\u5b9a\u8981\u8bbe\u5b9a\u4e3a no \uff01\nIgnoreRhosts yes\u3000\u3000\u3000\u3000\u3000 # \u662f\u5426\u53d6\u6d88\u4f7f\u7528 ~/.ssh/.rhosts \u6765\u505a\u4e3a\u8ba4\u8bc1\uff01\u5f53\u7136\u662f\uff01\nRhostsRSAAuthentication no # \u8fd9\u4e2a\u9009\u9879\u662f\u4e13\u95e8\u7ed9 version 1 \u7528\u7684\uff0c\u4f7f\u7528 rhosts \u6863\u6848\u5728\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # /etc/hosts.equiv\u914d\u5408 RSA \u6f14\u7b97\u65b9\u5f0f\u6765\u8fdb\u884c\u8ba4\u8bc1\uff01\u4e0d\u8981\u4f7f\u7528\nHostbasedAuthentication no # \u8fd9\u4e2a\u9879\u76ee\u4e0e\u4e0a\u9762\u7684\u9879\u76ee\u7c7b\u4f3c\uff0c\u4e0d\u8fc7\u662f\u7ed9 version 2 \u4f7f\u7528\u7684\uff01\nIgnoreUserKnownHosts no\u3000\u3000# \u662f\u5426\u5ffd\u7565\u5bb6\u76ee\u5f55\u5185\u7684 ~/.ssh/known_hosts \u8fd9\u4e2a\u6863\u6848\u6240\u8bb0\u5f55\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u7684\u4e3b\u673a\u5185\u5bb9\uff1f\u5f53\u7136\u4e0d\u8981\u5ffd\u7565\uff0c\u6240\u4ee5\u8fd9\u91cc\u5c31\u662f no \u5566\uff01\nPasswordAuthentication yes # \u5bc6\u7801\u9a8c\u8bc1\u5f53\u7136\u662f\u9700\u8981\u7684\uff01\u6240\u4ee5\u8fd9\u91cc\u5199 yes \u5570\uff01\nPermitEmptyPasswords no\u3000\u3000# \u82e5\u4e0a\u9762\u90a3\u4e00\u9879\u5982\u679c\u8bbe\u5b9a\u4e3a yes \u7684\u8bdd\uff0c\u8fd9\u4e00\u9879\u5c31\u6700\u597d\u8bbe\u5b9a\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u4e3a no \uff0c\u8fd9\u4e2a\u9879\u76ee\u5728\u662f\u5426\u5141\u8bb8\u4ee5\u7a7a\u7684\u5bc6\u7801\u767b\u5165\uff01\u5f53\u7136\u4e0d\u8bb8\uff01\nChallengeResponseAuthentication yes  # \u6311\u6218\u4efb\u4f55\u7684\u5bc6\u7801\u8ba4\u8bc1\uff01\u6240\u4ee5\uff0c\u4efb\u4f55 login.conf\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u89c4\u5b9a\u7684\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u5747\u53ef\u9002\u7528\uff01\n#PAMAuthenticationViaKbdInt yes      # \u662f\u5426\u542f\u7528\u5176\u5b83\u7684 PAM \u6a21\u5757\uff01\u542f\u7528\u8fd9\u4e2a\u6a21\u5757\u5c06\u4f1a\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u5bfc\u81f4 PasswordAuthentication \u8bbe\u5b9a\u5931\u6548\uff01\n\n# \u4e0e Kerberos \u6709\u5173\u7684\u53c2\u6570\u8bbe\u5b9a\uff01\u56e0\u4e3a\u6211\u4eec\u6ca1\u6709 Kerberos \u4e3b\u673a\uff0c\u6240\u4ee5\u5e95\u4e0b\u4e0d\u7528\u8bbe\u5b9a\uff01\n#KerberosAuthentication no\n#KerberosOrLocalPasswd yes\n#KerberosTicketCleanup yes\n#KerberosTgtPassing no\n\u3000\n# \u5e95\u4e0b\u662f\u6709\u5173\u5728 X-Window \u5e95\u4e0b\u4f7f\u7528\u7684\u76f8\u5173\u8bbe\u5b9a\uff01\nX11Forwarding yes\n#X11DisplayOffset 10\n#X11UseLocalhost yes\n# \u767b\u5165\u540e\u7684\u9879\u76ee\uff1a\nPrintMotd no              # \u767b\u5165\u540e\u662f\u5426\u663e\u793a\u51fa\u4e00\u4e9b\u4fe1\u606f\u5462\uff1f\u4f8b\u5982\u4e0a\u6b21\u767b\u5165\u7684\u65f6\u95f4\u3001\u5730\u70b9\u7b49\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000# \u7b49\uff0c\u9884\u8bbe\u662f yes \uff0c\u4f46\u662f\uff0c\u5982\u679c\u4e3a\u4e86\u5b89\u5168\uff0c\u53ef\u4ee5\u8003\u8651\u6539\u4e3a no \uff01\nPrintLastLog yes\u3000\u3000\u3000\u3000\u3000# \u663e\u793a\u4e0a\u6b21\u767b\u5165\u7684\u4fe1\u606f\uff01\u53ef\u4ee5\u554a\uff01\u9884\u8bbe\u4e5f\u662f yes \uff01\nKeepAlive yes\u3000\u3000\u3000\u3000\u3000\u3000 # \u4e00\u822c\u800c\u8a00\uff0c\u5982\u679c\u8bbe\u5b9a\u8fd9\u9879\u76ee\u7684\u8bdd\uff0c\u90a3\u4e48 SSH Server \u4f1a\u4f20\u9001\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000# KeepAlive \u7684\u8baf\u606f\u7ed9 Client \u7aef\uff0c\u4ee5\u786e\u4fdd\u4e24\u8005\u7684\u8054\u673a\u6b63\u5e38\uff01\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000# \u5728\u8fd9\u4e2a\u60c5\u51b5\u4e0b\uff0c\u4efb\u4f55\u4e00\u7aef\u6b7b\u6389\u540e\uff0c SSH \u53ef\u4ee5\u7acb\u523b\u77e5\u9053\uff01\u800c\u4e0d\u4f1a\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000# \u6709\u50f5\u5c38\u7a0b\u5e8f\u7684\u53d1\u751f\uff01\nUsePrivilegeSeparation yes # \u4f7f\u7528\u8005\u7684\u6743\u9650\u8bbe\u5b9a\u9879\u76ee\uff01\u5c31\u8bbe\u5b9a\u4e3a yes \u5427\uff01\nMaxStartups 10\u3000\u3000\u3000\u3000\u3000\u3000# \u540c\u65f6\u5141\u8bb8\u51e0\u4e2a\u5c1a\u672a\u767b\u5165\u7684\u8054\u673a\u753b\u9762\uff1f\u5f53\u6211\u4eec\u8fde\u4e0a SSH \uff0c\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000# \u4f46\u662f\u5c1a\u672a\u8f93\u5165\u5bc6\u7801\u65f6\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u662f\u6211\u4eec\u6240\u8c13\u7684\u8054\u673a\u753b\u9762\u5566\uff01\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000# \u5728\u8fd9\u4e2a\u8054\u673a\u753b\u9762\u4e2d\uff0c\u4e3a\u4e86\u4fdd\u62a4\u4e3b\u673a\uff0c\u6240\u4ee5\u9700\u8981\u8bbe\u5b9a\u6700\u5927\u503c\uff0c\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000# \u9884\u8bbe\u6700\u591a\u5341\u4e2a\u8054\u673a\u753b\u9762\uff0c\u800c\u5df2\u7ecf\u5efa\u7acb\u8054\u673a\u7684\u4e0d\u8ba1\u7b97\u5728\u8fd9\u5341\u4e2a\u5f53\u4e2d\n\n# \u5173\u4e8e\u4f7f\u7528\u8005\u62b5\u6321\u7684\u8bbe\u5b9a\u9879\u76ee\uff1a\nDenyUsers *\u3000\u3000\u3000\u3000\u3000\u3000\u3000 # \u8bbe\u5b9a\u53d7\u62b5\u6321\u7684\u4f7f\u7528\u8005\u540d\u79f0\uff0c\u5982\u679c\u662f\u5168\u90e8\u7684\u4f7f\u7528\u8005\uff0c\u90a3\u5c31\u662f\u5168\u90e8\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000# \u6321\u5427\uff01\u82e5\u662f\u90e8\u5206\u4f7f\u7528\u8005\uff0c\u53ef\u4ee5\u5c06\u8be5\u8d26\u53f7\u586b\u5165\uff01\u4f8b\u5982\u4e0b\u5217\uff01\nDenyUsers test\nDenyGroups test\u3000\u3000\u3000\u3000\u3000 # \u4e0e DenyUsers \u76f8\u540c\uff01\u4ec5\u62b5\u6321\u51e0\u4e2a\u7fa4\u7ec4\u800c\u5df2\uff01\n\n# \u5173\u4e8e SFTP \u670d\u52a1\u7684\u8bbe\u5b9a\u9879\u76ee\uff01\nSubsystem       sftp    /usr/lib/ssh/sftp-server\n\u5982\u679c\u4e0d\u613f\u610f\u5f00\u653e SFTP \u7684\u8bdd\uff0c\u5c06\u8fd9\u4e00\u884c\u6279\u6ce8\u6389\u5373\u53ef\uff01\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>i});var t=s(11504);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);