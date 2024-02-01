"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[86214],{51435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(85893),s=n(11151);const i={title:"Kubernetes \u90e8\u7f72\u9519\u8bef\u89e3\u51b3\u6c47\u603b",tags:["Kubernetes"]},l=void 0,o={permalink:"/2022/04/21/kubernetes-bu-shu-cuo-wu-jie-jue-hui-zong",source:"@site/blog/2022-04-21-kubernetes-bu-shu-cuo-wu-jie-jue-hui-zong.md",title:"Kubernetes \u90e8\u7f72\u9519\u8bef\u89e3\u51b3\u6c47\u603b",description:"1. kubeadm init\u5931\u8d25\uff0c\u63d0\u793a kubelet \u542f\u52a8\u5931\u8d25\u6216 \u4e0d\u5065\u5eb7",date:"2022-04-21T00:00:00.000Z",formattedDate:"April 21, 2022",tags:[{label:"Kubernetes",permalink:"/tags/kubernetes"}],readingTime:3.145,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Kubernetes \u90e8\u7f72\u9519\u8bef\u89e3\u51b3\u6c47\u603b",tags:["Kubernetes"]},unlisted:!1,prevItem:{title:"\u9700\u8981\u4e86\u89e3\u7684 K8s \u53d1\u884c\u7248\u672c",permalink:"/2022/04/19/xu-yao-liao-jie-de-jing-pin"},nextItem:{title:"GitHub Pages \u7684\u5999\u7528",permalink:"/2022/04/22/github-pages-de-miao-yong"}},a={authorsImageUrls:[]},u=[{value:"1. <code>kubeadm init</code>\u5931\u8d25\uff0c\u63d0\u793a kubelet \u542f\u52a8\u5931\u8d25\u6216 \u4e0d\u5065\u5eb7",id:"1-kubeadm-init\u5931\u8d25\u63d0\u793a-kubelet-\u542f\u52a8\u5931\u8d25\u6216-\u4e0d\u5065\u5eb7",level:3},{value:"1. \u591a\u6b21\u4f7f\u7528 <code>kubeadm init</code>\u65f6\u62a5\u9519\uff0c\u63d0\u793a\u6587\u4ef6\u5df2\u5b58\u5728\uff0c\u7aef\u53e3\u88ab\u5360\u7528",id:"1-\u591a\u6b21\u4f7f\u7528-kubeadm-init\u65f6\u62a5\u9519\u63d0\u793a\u6587\u4ef6\u5df2\u5b58\u5728\u7aef\u53e3\u88ab\u5360\u7528",level:3},{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",level:4}];function c(e){const t={blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h3,{id:"1-kubeadm-init\u5931\u8d25\u63d0\u793a-kubelet-\u542f\u52a8\u5931\u8d25\u6216-\u4e0d\u5065\u5eb7",children:["1. ",(0,r.jsx)(t.code,{children:"kubeadm init"}),"\u5931\u8d25\uff0c\u63d0\u793a kubelet \u542f\u52a8\u5931\u8d25\u6216 \u4e0d\u5065\u5eb7"]}),"\n",(0,r.jsx)(t.p,{children:"\u89e3\u51b3\u601d\u8def\uff1a"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"systemctl status kubelet \u67e5\u770b\u5f53\u524d\u72b6\u6001"}),"\n",(0,r.jsx)(t.li,{children:"\u901a\u8fc7 journalctl -xeu kubelet \u67e5\u770b \u542f\u52a8\u65f6\u7684\u9519\u8bef\u539f\u56e0\uff0c\u5f97\u5230\u9519\u8bef\u539f\u56e0\u5982\u4e0b"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'root@master1:~# journalctl -xeu kubelet\n-- Subject: A stop job for unit kubelet.service has finished\n-- Defined-By: systemd\n-- Support: http://www.ubuntu.com/support\n--\n-- A stop job for unit kubelet.service has finished.\n--\n-- The job identifier is 33099 and the job result is done.\nApr 21 00:55:30 master1 systemd[1]: Started kubelet: The Kubernetes Node Agent.\n-- Subject: A start job for unit kubelet.service has finished successfully\n-- Defined-By: systemd\n-- Support: http://www.ubuntu.com/support\n--\n-- A start job for unit kubelet.service has finished successfully.\n--\n-- The job identifier is 33099.\nApr 21 00:55:30 master1 kubelet[13732]: Flag --network-plugin has been deprecated, will be removed along with dockershim.\nApr 21 00:55:30 master1 kubelet[13732]: Flag --network-plugin has been deprecated, will be removed along with dockershim.\nApr 21 00:55:30 master1 kubelet[13732]: I0421 00:55:30.937042   13732 server.go:446] "Kubelet version" kubeletVersion="v1.23.5"\nApr 21 00:55:30 master1 kubelet[13732]: I0421 00:55:30.937252   13732 server.go:874] "Client rotation is on, will bootstrap in background"\nApr 21 00:55:30 master1 kubelet[13732]: I0421 00:55:30.938245   13732 certificate_store.go:130] Loading cert/key pair from "/var/lib/kubelet/pki/kubelet-client-curr>\nApr 21 00:55:30 master1 kubelet[13732]: I0421 00:55:30.938707   13732 dynamic_cafile_content.go:156] "Starting controller" name="client-ca-bundle::/etc/kubernetes/p>\nApr 21 00:55:30 master1 kubelet[13732]: W0421 00:55:30.971257   13732 machine.go:65] Cannot read vendor id correctly, set empty.\nApr 21 00:55:30 master1 kubelet[13732]: I0421 00:55:30.971823   13732 server.go:693] "--cgroups-per-qos enabled, but --cgroup-root was not specified.  defaulting to>\nApr 21 00:55:30 master1 kubelet[13732]: E0421 00:55:30.971921   13732 server.go:302] "Failed to run kubelet" err="failed to run Kubelet: running with swap on is not>\nApr 21 00:55:30 master1 systemd[1]: kubelet.service: Main process exited, code=exited, status=1/FAILURE\n-- Subject: Unit process exited\n-- Defined-By: systemd\n-- Support: http://www.ubuntu.com/support\n--\n-- An ExecStart= process belonging to unit kubelet.service has exited.\n--\n-- The process\' exit code is \'exited\' and its exit status is 1.\n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u95ee\u9898\u539f\u56e0\uff1a\u6ce8\u610f\u770b ",(0,r.jsx)(t.code,{children:'**"Failed to run kubelet"** \u540e\u9762\u7684 err\u539f\u56e0 : err=**"failed to run Kubelet: running with swap on is not>**'})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u8fd9\u91cc\u662f\u56e0\u4e3a \u4e3b\u673a\u4e0a\u7684 swap \u8fd8\u662f\u6253\u5f00\u7684\uff0c\u6240\u4ee5\u5bfc\u81f4 kubelet \u542f\u52a8\u5931\u8d25\uff1b\u539f\u56e0\u662f\uff1a\u5728 Kubernetes 1.22 \u4e4b\u524d\uff0c\u8282\u70b9\u4e0d\u652f\u6301\u4f7f\u7528\u865a\u62df\u5185\u5b58\uff0c\u5982\u679c\u5728\u8282\u70b9\u4e0a\u68c0\u6d4b\u5230\u865a\u62df\u5185\u5b58\uff0ckubelet \u5c06\u9ed8\u8ba4\u65e0\u6cd5\u542f\u52a8\u3002"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u77e5\u8bc6\u6269\u5c55"}),"\n"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u4ec0\u4e48\u662f swap memory\uff1f\u4e00\u822c\u79f0\u4e3a\u865a\u62df\u5185\u5b58\uff0c\u865a\u62df\u5185\u5b58\u7684\u4f5c\u7528\u662f"}),"\n"]}),"\n",(0,r.jsxs)(t.h3,{id:"1-\u591a\u6b21\u4f7f\u7528-kubeadm-init\u65f6\u62a5\u9519\u63d0\u793a\u6587\u4ef6\u5df2\u5b58\u5728\u7aef\u53e3\u88ab\u5360\u7528",children:["1. \u591a\u6b21\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"kubeadm init"}),"\u65f6\u62a5\u9519\uff0c\u63d0\u793a\u6587\u4ef6\u5df2\u5b58\u5728\uff0c\u7aef\u53e3\u88ab\u5360\u7528"]}),"\n",(0,r.jsx)(t.p,{children:"\u9519\u8bef\u539f\u56e0\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"root@master1:~# kubeadm init\n[init] Using Kubernetes version: v1.23.5\n[preflight] Running pre-flight checks\nerror execution phase preflight: [preflight] Some fatal errors occurred:\n [ERROR Port-6443]: Port 6443 is in use\n [ERROR Port-10259]: Port 10259 is in use\n [ERROR Port-10257]: Port 10257 is in use\n [ERROR FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml]: /etc/kubernetes/manifests/kube-apiserver.yaml already exists\n [ERROR FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml]: /etc/kubernetes/manifests/kube-controller-manager.yaml already exists\n [ERROR FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml]: /etc/kubernetes/manifests/kube-scheduler.yaml already exists\n [ERROR FileAvailable--etc-kubernetes-manifests-etcd.yaml]: /etc/kubernetes/manifests/etcd.yaml already exists\n [ERROR Port-10250]: Port 10250 is in use\n [ERROR Port-2379]: Port 2379 is in use\n [ERROR Port-2380]: Port 2380 is in use\n [ERROR DirAvailable--var-lib-etcd]: /var/lib/etcd is not empty\n[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`\nTo see the stack trace of this error execute with --v=5 or higher\n"})}),"\n",(0,r.jsx)(t.h4,{id:"\u89e3\u51b3\u65b9\u6cd5",children:"\u89e3\u51b3\u65b9\u6cd5"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u9700\u8981\u5c06\u4e4b\u524d\u4ea7\u751f\u7684\u6587\u4ef6\u8fdb\u884c\u6e05\u695a\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u547d\u4ee4"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"kubeadm reset\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var r=n(67294);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);