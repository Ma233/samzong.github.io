"use strict";(self.webpackChunksamzong_me=self.webpackChunksamzong_me||[]).push([[91314],{64844:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>i,toc:()=>r});var a=o(17624),t=o(4552);const s={title:"CentOS \u589e\u52a0\u65b0\u786c\u76d8\u7ed9\u6839\u6587\u4ef6\u7cfb\u7edf\u6269\u5bb9",tags:["CentOS"],date:new Date("2017-04-18T17:48:57.000Z")},l=void 0,i={permalink:"/2017/04/18/centos-zeng-jia-xin-ying-pan-gei-gen-wen-jian-xi-tong-kuo-rong",source:"@site/blog/2017-04-18-centos-zeng-jia-xin-ying-pan-gei-gen-wen-jian-xi-tong-kuo-rong.md",title:"CentOS \u589e\u52a0\u65b0\u786c\u76d8\u7ed9\u6839\u6587\u4ef6\u7cfb\u7edf\u6269\u5bb9",description:"\u7531\u4e8e\u521a\u5f00\u59cb\u505a\u78c1\u76d8\u7a7a\u95f4\u89c4\u5212\u65f6\uff0c\u5931\u8bef\u7ed9\u6839\u5206\u533a\u5206\u914d\u78c1\u76d8\u8f83\u5c0f\uff0c\u5bfc\u81f4\u540e\u7eed\u5b9e\u9a8c\u73af\u5883\u65e0\u6cd5\u8fdb\u884c\uff0c\u6240\u4ee5\u5728\u7ecf\u8fc7\u7814\u7a76\u540e\uff0c\u51b3\u5b9a\u5c1d\u8bd5\u589e\u52a0\u6839\u5206\u533a\u7684\u78c1\u76d8\u7a7a\u95f4\uff0c\u6ce8\u610f\u8fd9\u4ec5\u9002\u7528\u4e8e\u521b\u5efa\u5728 LVM \u4e0a\u7684\u6587\u4ef6\u7cfb\u7edf\u3002",date:"2017-04-18T17:48:57.000Z",formattedDate:"April 18, 2017",tags:[{label:"CentOS",permalink:"/tags/cent-os"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"CentOS \u589e\u52a0\u65b0\u786c\u76d8\u7ed9\u6839\u6587\u4ef6\u7cfb\u7edf\u6269\u5bb9",tags:["CentOS"],date:"2017-04-18T17:48:57.000Z"},unlisted:!1,prevItem:{title:"Wannacry \u8815\u866b\u75c5\u6bd2\u4e8b\u4ef6\u53ca\u4fee\u590d\u65b9\u6848",permalink:"/2017/05/15/wannacry-ru-chong-bing-du-shi-jian-ji-xiu-fu-fang-an"},nextItem:{title:"HowTo Install GitLab",permalink:"/2017/04/13/HowTo-Install-GitLab"}},d={authorsImageUrls:[]},r=[{value:"\u5b9e\u9a8c\u73af\u5883",id:"\u5b9e\u9a8c\u73af\u5883",level:2},{value:"\u589e\u52a0\u4e00\u5757\u7269\u7406\u78c1\u76d8",id:"\u589e\u52a0\u4e00\u5757\u7269\u7406\u78c1\u76d8",level:2},{value:"\u683c\u5f0f\u5316\u78c1\u76d8\u5e76\u52a0\u5165\u5230 VGroup \u7ec4\u5185",id:"\u683c\u5f0f\u5316\u78c1\u76d8\u5e76\u52a0\u5165\u5230-vgroup-\u7ec4\u5185",level:2},{value:"\u67e5\u770b\u5f53\u524d<code>pvdisplay</code>\u78c1\u76d8\u5217\u8868\uff0c\u5c06<code>/dev/sdb</code>\u521b\u5efa pv \u5757",id:"\u67e5\u770b\u5f53\u524dpvdisplay\u78c1\u76d8\u5217\u8868\u5c06devsdb\u521b\u5efa-pv-\u5757",level:3},{value:"\u67e5\u770b\u5f53\u524d<code>vgdisplay</code>VGroup \u7ec4\uff0c\u5c06<code>/dev/sdb</code>\u52a0\u5165\u6839\u76ee\u5f55\u6240\u5728 VGroup",id:"\u67e5\u770b\u5f53\u524dvgdisplayvgroup-\u7ec4\u5c06devsdb\u52a0\u5165\u6839\u76ee\u5f55\u6240\u5728-vgroup",level:3},{value:"\u67e5\u770b<code>lvdisplay</code>\u6839\u5377\u7684\u540d\u79f0\uff0c\u5c06\u78c1\u76d8\u52a0\u5165\u6839\u5377\u7684 LV",id:"\u67e5\u770blvdisplay\u6839\u5377\u7684\u540d\u79f0\u5c06\u78c1\u76d8\u52a0\u5165\u6839\u5377\u7684-lv",level:3},{value:"\u66f4\u65b0\u78c1\u76d8\u5206\u533a\u8868",id:"\u66f4\u65b0\u78c1\u76d8\u5206\u533a\u8868",level:2},{value:"\u4f7f\u7528<code>resize2fs</code>\u5237\u65b0\u6839\u5377\u4fe1\u606f",id:"\u4f7f\u7528resize2fs\u5237\u65b0\u6839\u5377\u4fe1\u606f",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u7531\u4e8e\u521a\u5f00\u59cb\u505a\u78c1\u76d8\u7a7a\u95f4\u89c4\u5212\u65f6\uff0c\u5931\u8bef\u7ed9\u6839\u5206\u533a\u5206\u914d\u78c1\u76d8\u8f83\u5c0f\uff0c\u5bfc\u81f4\u540e\u7eed\u5b9e\u9a8c\u73af\u5883\u65e0\u6cd5\u8fdb\u884c\uff0c\u6240\u4ee5\u5728\u7ecf\u8fc7\u7814\u7a76\u540e\uff0c\u51b3\u5b9a\u5c1d\u8bd5\u589e\u52a0\u6839\u5206\u533a\u7684\u78c1\u76d8\u7a7a\u95f4\uff0c\u6ce8\u610f\u8fd9\u4ec5\u9002\u7528\u4e8e\u521b\u5efa\u5728 LVM \u4e0a\u7684\u6587\u4ef6\u7cfb\u7edf\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u5b9e\u9a8c\u73af\u5883",children:"\u5b9e\u9a8c\u73af\u5883"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Parallels Desktop 12"}),"\n",(0,a.jsx)(n.li,{children:"CentOS 6.9"}),"\n",(0,a.jsx)(n.li,{children:"\u6839\u5206\u533a\u7a7a\u95f4 6.5GB"}),"\n",(0,a.jsx)(n.li,{children:"\u5df2\u4f7f\u7528 5.8GB"}),"\n",(0,a.jsx)(n.li,{children:"\u9884\u8ba1 \u589e\u52a0 12G \u78c1\u76d8\u7a7a\u95f4"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u589e\u52a0\u4e00\u5757\u7269\u7406\u78c1\u76d8",children:"\u589e\u52a0\u4e00\u5757\u7269\u7406\u78c1\u76d8"}),"\n",(0,a.jsxs)(n.p,{children:["Parallels Desktop \u4e0d\u80fd\u5728\u7ebf\u589e\u52a0\u78c1\u76d8\uff0c\u6240\u4ee5\u8981\u5148\u5c06 VM \u5173\u95ed\uff0c\u7136\u540e\u6dfb\u52a0\uff1a\n",(0,a.jsx)(n.img,{src:"https://img.samzong.me/202307191530998.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image"}),"\n\u589e\u52a0 12G \u7684\u78c1\u76d8\n",(0,a.jsx)(n.img,{src:"https://img.samzong.me/202307191530999.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u7136\u540e\u542f\u52a8 VM\uff0c\u8fd9\u65f6\u53ef\u4ee5\u901a\u8fc7",(0,a.jsx)(n.code,{children:"fdisk -l"}),"\u67e5\u770b\u5f53\u524d\u5df2\u7ecf\u589e\u52a0\u4e86\u4e00\u5757 12G \u7684\u78c1\u76d8"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://img.samzong.me/202307191530000.jpg?imageView2/3/w/400/interlace/1/q/50",alt:"image"})}),"\n",(0,a.jsx)(n.h2,{id:"\u683c\u5f0f\u5316\u78c1\u76d8\u5e76\u52a0\u5165\u5230-vgroup-\u7ec4\u5185",children:"\u683c\u5f0f\u5316\u78c1\u76d8\u5e76\u52a0\u5165\u5230 VGroup \u7ec4\u5185"}),"\n",(0,a.jsxs)(n.h3,{id:"\u67e5\u770b\u5f53\u524dpvdisplay\u78c1\u76d8\u5217\u8868\u5c06devsdb\u521b\u5efa-pv-\u5757",children:["\u67e5\u770b\u5f53\u524d",(0,a.jsx)(n.code,{children:"pvdisplay"}),"\u78c1\u76d8\u5217\u8868\uff0c\u5c06",(0,a.jsx)(n.code,{children:"/dev/sdb"}),"\u521b\u5efa pv \u5757"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'[root@centos ~]# pvdisplay\n  --- Physical volume ---\n  PV Name               /dev/sda2\n  VG Name               vg_hadoop01\n  PV Size               7.51 GiB / not usable 3.00 MiB\n  Allocatable           yes (but full)\n  PE Size               4.00 MiB\n  Total PE              1922\n  Free PE               0\n  Allocated PE          1922\n  PV UUID               MUCrDa-eJpZ-EXwE-YwwM-S2Az-p2m7-K9q3Fo\n\n[root@centos ~]# pvcreate /dev/sdb\n  Physical volume "/dev/sdb" successfully created\n[root@centos ~]# pvdisplay\n  --- Physical volume ---\n  PV Name               /dev/sda2\n  VG Name               vg_hadoop01\n  PV Size               7.51 GiB / not usable 3.00 MiB\n  Allocatable           yes (but full)\n  PE Size               4.00 MiB\n  Total PE              1922\n  Free PE               0\n  Allocated PE          1922\n  PV UUID               MUCrDa-eJpZ-EXwE-YwwM-S2Az-p2m7-K9q3Fo\n\n  --- Physical volume ---\n  PV Name               /dev/sdb\n  VG Name               vg_hadoop01\n  PV Size               12.00 GiB / not usable 4.00 MiB\n  Allocatable           yes\n  PE Size               4.00 MiB\n  Total PE              3071\n  Free PE               3071\n  Allocated PE          0\n  PV UUID               XTpaBR-512W-vQIV-fwwz-So7L-ZCa3-yjDccQ\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"\u67e5\u770b\u5f53\u524dvgdisplayvgroup-\u7ec4\u5c06devsdb\u52a0\u5165\u6839\u76ee\u5f55\u6240\u5728-vgroup",children:["\u67e5\u770b\u5f53\u524d",(0,a.jsx)(n.code,{children:"vgdisplay"}),"VGroup \u7ec4\uff0c\u5c06",(0,a.jsx)(n.code,{children:"/dev/sdb"}),"\u52a0\u5165\u6839\u76ee\u5f55\u6240\u5728 VGroup"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'[root@centos ~]# vgdisplay\n  --- Volume group ---\n  VG Name               vg_hadoop01\n  System ID\n  Format                lvm2\n  Metadata Areas        1\n  Metadata Sequence No  3\n  VG Access             read/write\n  VG Status             resizable\n  MAX LV                0\n  Cur LV                2\n  Open LV               2\n  Max PV                0\n  Cur PV                1\n  Act PV                1\n  VG Size               7.51 GiB\n  PE Size               4.00 MiB\n  Total PE              1922\n  Alloc PE / Size       1922 / 7.51 GiB\n  Free  PE / Size       0 / 0\n  VG UUID               szQ4fH-Sr1Z-V6c2-KVMp-ZUik-oUDP-rU8dQS\n\n[root@centos ~]# vgextend vg_hadoop01 /dev/sdb\n  Volume group "vg_hadoop01" successfully extended\n[root@centos ~]# vgdisplay\n  --- Volume group ---\n  VG Name               vg_hadoop01\n  System ID\n  Format                lvm2\n  Metadata Areas        2\n  Metadata Sequence No  4\n  VG Access             read/write\n  VG Status             resizable\n  MAX LV                0\n  Cur LV                2\n  Open LV               2\n  Max PV                0\n  Cur PV                2\n  Act PV                2\n  VG Size               19.50 GiB\n  PE Size               4.00 MiB\n  Total PE              4993\n  Alloc PE / Size       1922 / 7.51 GiB\n  Free  PE / Size       3071 / 12.00 GiB\n  VG UUID               szQ4fH-Sr1Z-V6c2-KVMp-ZUik-oUDP-rU8dQS\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"\u67e5\u770blvdisplay\u6839\u5377\u7684\u540d\u79f0\u5c06\u78c1\u76d8\u52a0\u5165\u6839\u5377\u7684-lv",children:["\u67e5\u770b",(0,a.jsx)(n.code,{children:"lvdisplay"}),"\u6839\u5377\u7684\u540d\u79f0\uff0c\u5c06\u78c1\u76d8\u52a0\u5165\u6839\u5377\u7684 LV"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# lvdisplay\n  --- Logical volume ---\n  LV Path                /dev/vg_hadoop01/lv_root\n  LV Name                lv_root\n  VG Name                vg_hadoop01\n  LV UUID                tJDetu-Theq-BQ5g-3ZFe-Gan7-1SSv-OHeYrH\n  LV Write Access        read/write\n  LV Creation host, time hadoop01, 2017-04-18 07:09:58 +0800\n  LV Status              available\n  # open                 1\n  LV Size                6.71 GiB\n  Current LE             1718\n  Segments               1\n  Allocation             inherit\n  Read ahead sectors     auto\n  - currently set to     256\n  Block device           253:0\n\n  --- Logical volume ---\n  LV Path                /dev/vg_hadoop01/lv_swap\n  LV Name                lv_swap\n  VG Name                vg_hadoop01\n  LV UUID                D4K7I6-tPO0-HMbC-VWkR-2HV4-WjAe-M82wYq\n  LV Write Access        read/write\n  LV Creation host, time hadoop01, 2017-04-18 07:09:59 +0800\n  LV Status              available\n  # open                 1\n  LV Size                816.00 MiB\n  Current LE             204\n  Segments               1\n  Allocation             inherit\n  Read ahead sectors     auto\n  - currently set to     256\n  Block device           253:1\n\n[root@centos ~]# lvextend -l +100%FREE /dev/vg_hadoop01/lv_root\n  Size of logical volume vg_hadoop01/lv_root changed from 6.71 GiB (1718 extents) to 18.71 GiB (4789 extents).\n  Logical volume lv_root successfully resized.\n[root@centos ~]# lvdisplay\n  --- Logical volume ---\n  LV Path                /dev/vg_hadoop01/lv_root\n  LV Name                lv_root\n  VG Name                vg_hadoop01\n  LV UUID                tJDetu-Theq-BQ5g-3ZFe-Gan7-1SSv-OHeYrH\n  LV Write Access        read/write\n  LV Creation host, time hadoop01, 2017-04-18 07:09:58 +0800\n  LV Status              available\n  # open                 1\n  LV Size                18.71 GiB\n  Current LE             4789\n  Segments               2\n  Allocation             inherit\n  Read ahead sectors     auto\n  - currently set to     256\n  Block device           253:0\n\n  --- Logical volume ---\n  LV Path                /dev/vg_hadoop01/lv_swap\n  LV Name                lv_swap\n  VG Name                vg_hadoop01\n  LV UUID                D4K7I6-tPO0-HMbC-VWkR-2HV4-WjAe-M82wYq\n  LV Write Access        read/write\n  LV Creation host, time hadoop01, 2017-04-18 07:09:59 +0800\n  LV Status              available\n  # open                 1\n  LV Size                816.00 MiB\n  Current LE             204\n  Segments               1\n  Allocation             inherit\n  Read ahead sectors     auto\n  - currently set to     256\n  Block device           253:1\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u66f4\u65b0\u78c1\u76d8\u5206\u533a\u8868",children:"\u66f4\u65b0\u78c1\u76d8\u5206\u533a\u8868"}),"\n",(0,a.jsxs)(n.p,{children:["\u5f53\u4f60\u589e\u52a0\u5b8c\u6210\u4e4b\u540e\uff0c\u8fd9\u65f6\u4f7f\u7528",(0,a.jsx)(n.code,{children:"df -h"}),"\u67e5\u770b\u7684\u78c1\u76d8\u7a7a\u95f4\u4ecd\u7136\u6ca1\u6709\u53d8\u5316\uff0c\u56e0\u4e3a\u6211\u4eec\u8fd8\u9700\u8981\u5c06\u6839\u5377\u7684\u5206\u533a\u8868\u5237\u65b0\u3002"]}),"\n",(0,a.jsxs)(n.h3,{id:"\u4f7f\u7528resize2fs\u5237\u65b0\u6839\u5377\u4fe1\u606f",children:["\u4f7f\u7528",(0,a.jsx)(n.code,{children:"resize2fs"}),"\u5237\u65b0\u6839\u5377\u4fe1\u606f"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# resize2fs /dev/vg_hadoop01/lv_root\nresize2fs 1.41.12 (17-May-2010)\nFilesystem at /dev/vg_hadoop01/lv_root is mounted on /; on-line resizing required\nold desc_blocks = 1, new_desc_blocks = 2\nPerforming an on-line resize of /dev/vg_hadoop01/lv_root to 4903936 (4k) blocks.\nThe filesystem on /dev/vg_hadoop01/lv_root is now 4903936 blocks long.\n\n[root@centos ~]# df -h\nFilesystem            Size  Used Avail Use% Mounted on\n/dev/mapper/vg_hadoop01-lv_root\n                       19G  5.8G   12G  33% /\ntmpfs                 244M     0  244M   0% /dev/shm\n/dev/sda1             477M   52M  400M  12% /boot\n"})})]})}function v(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},4552:(e,n,o)=>{o.d(n,{I:()=>i,M:()=>l});var a=o(11504);const t={},s=a.createContext(t);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);