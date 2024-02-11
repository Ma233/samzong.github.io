"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[99292],{82956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(17624),s=t(4552);const i={title:"kubernetes \u5b66\u4e60\u4e4b\u8def",tags:["Kubernetes"]},o=void 0,a={permalink:"/2022/04/24/kubernetes-xue-xi-zhi-lu",source:"@site/blog/2022-04-24-kubernetes-xue-xi-zhi-lu.md",title:"kubernetes \u5b66\u4e60\u4e4b\u8def",description:"\u57fa\u7840\u73af\u5883",date:"2022-04-24T00:00:00.000Z",formattedDate:"April 24, 2022",tags:[{label:"Kubernetes",permalink:"/tags/kubernetes"}],readingTime:6.42,hasTruncateMarker:!1,authors:[],frontMatter:{title:"kubernetes \u5b66\u4e60\u4e4b\u8def",tags:["Kubernetes"]},unlisted:!1,prevItem:{title:"GitHub Pages \u7684\u5999\u7528",permalink:"/2022/04/22/github-pages-de-miao-yong"},nextItem:{title:"\u6dd8\u5b9d Python SDK \u4f18\u5316\u652f\u6301 Python3",permalink:"/2022/05/03/tao-bao-python-sdk-you-hua-zhi-chi-python3"}},c={authorsImageUrls:[]},l=[{value:"\u57fa\u7840\u73af\u5883",id:"\u57fa\u7840\u73af\u5883",level:2},{value:"ubuntu \u5b89\u88c5\u66ff\u6362\u7cfb\u7edf\u6e90",id:"ubuntu-\u5b89\u88c5\u66ff\u6362\u7cfb\u7edf\u6e90",level:3},{value:"ubuntu \u57fa\u7840\u7cfb\u7edf\u4f18\u5316",id:"ubuntu-\u57fa\u7840\u7cfb\u7edf\u4f18\u5316",level:3},{value:"Kubernetes \u955c\u50cf\u6e90\u66ff\u6362",id:"kubernetes-\u955c\u50cf\u6e90\u66ff\u6362",level:3},{value:"docker \u5b89\u88c5\u53ca\u6e90\u66ff\u6362",id:"docker-\u5b89\u88c5\u53ca\u6e90\u66ff\u6362",level:3},{value:"Kubernetes \u90e8\u7f72\u673a\u5668",id:"kubernetes-\u90e8\u7f72\u673a\u5668",level:2},{value:"Kubernetes \u4ece k8s.gcr.io \u4ed3\u5e93\u62c9\u53d6\u955c\u50cf\u5931\u8d25",id:"kubernetes-\u4ece-k8sgcrio-\u4ed3\u5e93\u62c9\u53d6\u955c\u50cf\u5931\u8d25",level:3},{value:"kubeadm \u521d\u59cb\u5316 k8s \u73af\u5883",id:"kubeadm-\u521d\u59cb\u5316-k8s-\u73af\u5883",level:3},{value:"k8s \u7cfb\u7edf\u4f18\u5316",id:"k8s-\u7cfb\u7edf\u4f18\u5316",level:2}];function u(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57fa\u7840\u73af\u5883",children:"\u57fa\u7840\u73af\u5883"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"MacOS M1"}),"\n",(0,r.jsx)(n.li,{children:"Paralles Desktop 17"}),"\n",(0,r.jsx)(n.li,{children:"Ubuntu 20.04.4"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ubuntu-\u5b89\u88c5\u66ff\u6362\u7cfb\u7edf\u6e90",children:"ubuntu \u5b89\u88c5\u66ff\u6362\u7cfb\u7edf\u6e90"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u9ed8\u8ba4\u6ce8\u91ca\u4e86\u6e90\u7801\u4ed3\u5e93\uff0c\u5982\u6709\u9700\u8981\u53ef\u81ea\u884c\u53d6\u6d88\u6ce8\u91ca\ndeb https://mirrors.aliyun.com/ubuntu-ports/ xenial main restricted universe multiverse\n# deb-src https://mirrors.aliyun.com/ubuntu-ports/ xenial main main restricted universe multiverse\ndeb https://mirrors.aliyun.com/ubuntu-ports/ xenial-updates main restricted universe multiverse\n# deb-src https://mirrors.aliyun.com/ubuntu-ports/ xenial-updates main restricted universe multiverse\ndeb https://mirrors.aliyun.com/ubuntu-ports/ xenial-backports main restricted universe multiverse\n# deb-src https://mirrors.aliyun.com/ubuntu-ports/ xenial-backports main restricted universe multiverse\ndeb https://mirrors.aliyun.com/ubuntu-ports/ xenial-security main restricted universe multiverse\n# deb-src https://mirrors.aliyun.com/ubuntu-ports/ xenial-security main restricted universe multiverse\n"})}),"\n",(0,r.jsx)(n.h3,{id:"ubuntu-\u57fa\u7840\u7cfb\u7edf\u4f18\u5316",children:"ubuntu \u57fa\u7840\u7cfb\u7edf\u4f18\u5316"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u65f6\u533a\u95ee\u9898\u5904\u7406"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u8c03\u6574\u4e3a\u4e3a\u5317\u4eac\u65f6\u533a\nsudo cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\n\n# \u589e\u52a0\u65f6\u95f4\u81ea\u52a8\u540c\u6b65\nsudo crontab -e\n*/15 * * * * /usr/sbin/ntpdate 1.cn.pool.ntp.org  >/dev/null 2>&1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"kubernetes-\u955c\u50cf\u6e90\u66ff\u6362",children:"Kubernetes \u955c\u50cf\u6e90\u66ff\u6362"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"apt-get update && apt-get install -y apt-transport-https\ncurl https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | apt-key add - \ncat <<EOF >/etc/apt/sources.list.d/kubernetes.list\ndeb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main\nEOF\napt-get update\napt-get install -y kubelet kubeadm kubectl\n"})}),"\n",(0,r.jsx)(n.h3,{id:"docker-\u5b89\u88c5\u53ca\u6e90\u66ff\u6362",children:"docker \u5b89\u88c5\u53ca\u6e90\u66ff\u6362"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'# step 1: \u5b89\u88c5\u5fc5\u8981\u7684\u4e00\u4e9b\u7cfb\u7edf\u5de5\u5177\nsudo apt-get update\nsudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common\n\n# step 2: \u5b89\u88c5GPG\u8bc1\u4e66\ncurl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -\n\n# Step 3: \u5199\u5165\u8f6f\u4ef6\u6e90\u4fe1\u606f\nsudo add-apt-repository "deb http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"\n\n# Step 4: \u66f4\u65b0\u5e76\u5b89\u88c5 Docker-CE\nsudo apt-get -y update\nsudo apt-get -y install docker-ce docker-ce-cli containerd.io\n'})}),"\n",(0,r.jsx)(n.p,{children:"docker \u7684\u5b89\u88c5\u6e90\u914d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'cat <<EOF > /etc/docker/daemon.json\n{\n  "registry-mirrors": [\n    "https://hub-mirror.c.163.com",\n    "https://mirror.baidubce.com"\n  ],\n  "exec-opts": ["native.cgroupdriver=systemd"]\n}\nEOF\n\nsystemctl daemon-reload\nsystemctl restart docker\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"docker cgroupdriver \u5728\u591a\u4e2a node \u548c master \u4e4b\u95f4\u4e0d\u4e00\u81f4\uff0c\u4f1a\u5bfc\u81f4 node join \u5931\u8d25"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"kubernetes-\u90e8\u7f72\u673a\u5668",children:"Kubernetes \u90e8\u7f72\u673a\u5668"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["4 \u6838 4G 3 \u53f0","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["10.211.55.7 ",(0,r.jsx)(n.strong,{children:"master1"})]}),"\n",(0,r.jsx)(n.li,{children:"10.211.55.9 node1"}),"\n",(0,r.jsx)(n.li,{children:"10.211.55.10 node2"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# This is the network config written by 'subiquity'\nnetwork:\n  ethernets:\n    enp0s5:\n      addresses: [10.211.55.10/24]\n      dhcp4: no\n      gateway4: 10.211.55.1\n      nameservers:\n      addresses: [114.114.114.114]\n  version: 2\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u9632\u6b62\u591a\u53f0\u673a\u5668\u4e4b\u95f4\u7684 DHCP IP \u51b2\u7a81\uff0c\u5168\u90e8\u9650\u5b9a\u9759\u6001 IP\n< \u91c7\u7528\u7684\u662f Parallels Desktop Clone pvm \u7684\u65b9\u5f0f \u4ea7\u751f\u7684\u591a\u53f0\u673a\u5668"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"kubernetes-\u4ece-k8sgcrio-\u4ed3\u5e93\u62c9\u53d6\u955c\u50cf\u5931\u8d25",children:"Kubernetes \u4ece k8s.gcr.io \u4ed3\u5e93\u62c9\u53d6\u955c\u50cf\u5931\u8d25"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u662f\u56e0\u4e3a k8s \u90e8\u7f72\u662f\u5728 google \u81ea\u5bb6\u7684\u6240\u4ee5... \uff0c\u597d\u5728\u56fd\u5185\u57fa\u672c\u90fd\u6709\u5bf9\u5e94\u7684\u955c\u50cf\u4ed3\u5e93\uff0c\u8fd9\u91cc\u4ee5 \u963f\u91cc\u4e91\u4e3a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"root@master1:~# kubeadm config images list\nk8s.gcr.io/kube-apiserver:v1.23.5\nk8s.gcr.io/kube-controller-manager:v1.23.5\nk8s.gcr.io/kube-scheduler:v1.23.5\nk8s.gcr.io/kube-proxy:v1.23.5\nk8s.gcr.io/pause:3.6\nk8s.gcr.io/etcd:3.5.1-0\nk8s.gcr.io/coredns/coredns:v1.8.6\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 docker pull \u5206\u5e03\u62c9\u53d6\u8fd9\u4e9b image\uff0c\u5c06 ",(0,r.jsx)(n.code,{children:"k8s.gcr.io"})," \u66ff\u6362\u4e3a ",(0,r.jsx)(n.code,{children:"registry.aliyuncs.com/google_containers/"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u539f\u4e3a\ndocker pull k8s.gcr.io/kube-apiserver:v1.23.5\n# \u6539\u4e3a\ndocker pull registry.aliyuncs.com/google_containers/kube-apiserver:v1.23.5\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\uff0c\u4f9d\u6b21\u5c06\u6240\u6709\u9700\u8981\u7684 image \u90fd\u62c9\u53d6\u4e0b\u6765\uff0c\u4f7f\u7528 docker image list \u67e5\u770b\u62c9\u53d6\u7684\u955c\u50cf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"root@master1:~# docker image ls\nREPOSITORY                                                        TAG       IMAGE ID       CREATED        SIZE\nregistry.aliyuncs.com/google_containers/kube-apiserver            v1.23.5   dc83c48dbe3b   5 weeks ago    132MB\nregistry.aliyuncs.com/google_containers/kube-controller-manager   v1.23.5   de8edc9077c1   5 weeks ago    122MB\nregistry.aliyuncs.com/google_containers/kube-scheduler            v1.23.5   48609f8bab08   5 weeks ago    53MB\nregistry.aliyuncs.com/google_containers/kube-proxy                v1.23.5   48d3a9e595bc   5 weeks ago    109MB\nregistry.aliyuncs.com/google_containers/etcd                      3.5.1-0   1040f7790951   5 months ago   132MB\nregistry.aliyuncs.com/google_containers/coredns                   v1.8.6    edaa71f2aee8   6 months ago   46.8MB\nregistry.aliyuncs.com/google_containers/pause                     3.6       7d46a07936af   7 months ago   484kB\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e kubeadm \u8ba4\u7684\u662f ",(0,r.jsx)(n.code,{children:"k8s.gcr.io"}),"\uff0c\u6240\u4ee5\u8fd8\u9700\u6539\u56de\u53bb Tag\uff0c\u4fee\u6539\u65b9\u5f0f\u91c7\u7528 docker tag \u7684\u65b9\u5f0f\u5904\u7406"]}),"\n",(0,r.jsx)(n.h3,{id:"kubeadm-\u521d\u59cb\u5316-k8s-\u73af\u5883",children:"kubeadm \u521d\u59cb\u5316 k8s \u73af\u5883"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'root@master1:~# kubeadm init --kubernetes-version=v1.23.5 --pod-network-cidr=10.244.0.0/16\n[init] Using Kubernetes version: v1.23.5\n[preflight] Running pre-flight checks\n[preflight] Pulling images required for setting up a Kubernetes cluster\n[preflight] This might take a minute or two, depending on the speed of your internet connection\n[preflight] You can also perform this action in beforehand using \'kubeadm config images pull\'\n[certs] Using certificateDir folder "/etc/kubernetes/pki"\n[certs] Generating "ca" certificate and key\n[certs] Generating "apiserver" certificate and key\n[certs] apiserver serving cert is signed for DNS names [kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local master1] and IPs [10.96.0.1 10.211.55.7]\n[certs] Generating "apiserver-kubelet-client" certificate and key\n[certs] Generating "front-proxy-ca" certificate and key\n[certs] Generating "front-proxy-client" certificate and key\n[certs] Generating "etcd/ca" certificate and key\n[certs] Generating "etcd/server" certificate and key\n[certs] etcd/server serving cert is signed for DNS names [localhost master1] and IPs [10.211.55.7 127.0.0.1 ::1]\n[certs] Generating "etcd/peer" certificate and key\n[certs] etcd/peer serving cert is signed for DNS names [localhost master1] and IPs [10.211.55.7 127.0.0.1 ::1]\n[certs] Generating "etcd/healthcheck-client" certificate and key\n[certs] Generating "apiserver-etcd-client" certificate and key\n[certs] Generating "sa" key and public key\n[kubeconfig] Using kubeconfig folder "/etc/kubernetes"\n[kubeconfig] Writing "admin.conf" kubeconfig file\n[kubeconfig] Writing "kubelet.conf" kubeconfig file\n[kubeconfig] Writing "controller-manager.conf" kubeconfig file\n[kubeconfig] Writing "scheduler.conf" kubeconfig file\n[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"\n[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"\n[kubelet-start] Starting the kubelet\n[control-plane] Using manifest folder "/etc/kubernetes/manifests"\n[control-plane] Creating static Pod manifest for "kube-apiserver"\n[control-plane] Creating static Pod manifest for "kube-controller-manager"\n[control-plane] Creating static Pod manifest for "kube-scheduler"\n[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"\n[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests". This can take up to 4m0s\n[apiclient] All control plane components are healthy after 4.511137 seconds\n[upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace\n[kubelet] Creating a ConfigMap "kubelet-config-1.23" in namespace kube-system with the configuration for the kubelets in the cluster\nNOTE: The "kubelet-config-1.23" naming of the kubelet ConfigMap is deprecated. Once the UnversionedKubeletConfigMap feature gate graduates to Beta the default name will become just "kubelet-config". Kubeadm upgrade will handle this transition transparently.\n[upload-certs] Skipping phase. Please see --upload-certs\n[mark-control-plane] Marking the node master1 as control-plane by adding the labels: [node-role.kubernetes.io/master(deprecated) node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]\n[mark-control-plane] Marking the node master1 as control-plane by adding the taints [node-role.kubernetes.io/master:NoSchedule]\n[bootstrap-token] Using token: k2qw1l.lpnjzo138zfynmb1\n[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles\n[bootstrap-token] configured RBAC rules to allow Node Bootstrap tokens to get nodes\n[bootstrap-token] configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials\n[bootstrap-token] configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token\n[bootstrap-token] configured RBAC rules to allow certificate rotation for all node client certificates in the cluster\n[bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace\n[kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key\n[addons] Applied essential addon: CoreDNS\n[addons] Applied essential addon: kube-proxy\n\nYour Kubernetes control-plane has initialized successfully!\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n\nAlternatively, if you are the root user, you can run:\n\n  export KUBECONFIG=/etc/kubernetes/admin.conf\n\nYou should now deploy a pod network to the cluster.\nRun "kubectl apply -f [podnetwork].yaml" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nThen you can join any number of worker nodes by running the following on each as root:\n\nkubeadm join 10.211.55.7:6443 --token k2qw1l.lpnjzo138zfynmb1 \\\n --discovery-token-ca-cert-hash sha256:974a7569ca2d243dc907ca121adbdba9407ae462ea72791342ccf2048ee46b31\n'})}),"\n",(0,r.jsx)(n.h2,{id:"k8s-\u7cfb\u7edf\u4f18\u5316",children:"k8s \u7cfb\u7edf\u4f18\u5316"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u589e\u52a0\u5230\u6587\u4ef6\u6700\u540e\uff0c\u8fdb\u884c\u7cfb\u7edf\u5c42\u7ea7\u4f18\u5316\n\nnet.ipv4.ip_forward = 1\nvm.swappiness = 1\nnet.bridge.bridge-nf-call-arptables = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.ipv4.ip_local_reserved_ports = 30000-32767\nvm.max_map_count = 262144\nfs.inotify.max_user_instances = 524288\nkernel.pid_max = 65535\n"})}),"\n",(0,r.jsx)(n.p,{children:"Kubesphere registry \u4ed3\u5e93\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"registry.cn-beijing.aliyuncs.com/kubesphereio/"})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>o});var r=t(11504);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);