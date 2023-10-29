import{_ as l,a as o,b as i,c as d,d as a,e as g,f as c,g as h,h as _,i as y,j as x,k as p,l as m,m as u}from"./Python-d31beb86.js";import{_ as b}from"./plugin-vue_export-helper-c27b6911.js";import{r as f,o as w,c as S,a as t,b as e,d as r,f as s}from"./app-bdf45122.js";const D={},k=s('<blockquote><p><em><strong>Hackintosh Reboot Plan</strong></em></p></blockquote><h2 id="闲话-回忆与现在" tabindex="-1"><a class="header-anchor" href="#闲话-回忆与现在" aria-hidden="true">#</a> 闲话 回忆与现在</h2><ul><li><p>从大学接触黑苹果开始，算起来已经有了<strong>8、9</strong>年的时光了，想起那会的“废寝忘食”，真是让人觉得虚度光阴、浪费精力。也许也是从那时候开始，养成了爱折腾的习惯。</p></li><li><p>之前家里闲置的笔记本被我拿来做软路由，最开始只是在 <em>pve</em> 上跑 <em>openWRT</em> ，满足一些魔法需求，刚好最近又在搞内网穿透，这台单网口、传输速率低得吓人的设备实在无法满足现在愈来愈强的需求。</p></li><li><p>故此，本意是在网上选购一台性价比较高的软路由，选着选着不知道怎就看到了一台十分合心意的小主机，实在按捺不住折腾的心情，就对老婆先斩后奏买了下来（幸得老婆宽厚，又加上我整天闹着要 <em>NAS</em> ，对比之下，这台小主机的价格还是让她允了下来）</p></li><li><p>刚好因工作原因经常奔波两地，加上最近频繁地码字建站，用这台小主机组一台黑苹果，重温下精美的 <em>MacOS</em> ，既能在家里和单位用，也能提高码字的效率，办公、开发两不误。</p></li></ul><h2 id="主机及配置" tabindex="-1"><a class="header-anchor" href="#主机及配置" aria-hidden="true">#</a> 主机及配置</h2><ul><li><p>在网上看了很多视频和教程，左挑右选，最终选择了惠普的 <em>800-G4-DM</em> 准系统主机，外加 <em>I5 8500T</em> 的8代 <em>cpu</em>。基本配置如下：</p></li><li><p>||主机|<em>惠普 HP EliteDesk 800 G4 DM</em>||<br> |:---😐:---😐:---😐:---😐<br> ||<strong>主板</strong>|惠普Q370|||<br> || <strong>CPU</strong> |酷睿 i5 8500T ||<br> || <strong>显卡</strong> |集成 Intel UHD Graphics 630||<br> || <strong>内存</strong> |DDR4 2400MHz 三星16GB（2X8GB）||<br> ||<strong>无线网卡</strong>|博通 BCM94352Z 无线/蓝牙网卡|||<br> ||<strong>固态硬盘</strong>|台电 256G SSD （加装2T SATA SSD）|||<br> ||<strong>OpenCore</strong>|0.9.1|||<br> ||<strong>MacOS</strong>|Ventura 13.3.1 (22E261)|||</p></li></ul><p align="center"><img height="435" src="'+o+'"></p><ul><li>完美主义的黑苹果完美度：</li></ul><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;"></th><th style="text-align:center;">状态</th><th style="text-align:center;">完美</th><th style="text-align:center;"></th></tr></thead><tbody><tr><td style="text-align:center;"><strong>CPU</strong></td><td style="text-align:center;"><strong>睿频</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">✔︎</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"><strong>VDA 解码器</strong></td><td style="text-align:center;">完全支持</td><td style="text-align:center;">✔︎</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><strong>IGPU</strong></td><td style="text-align:center;"><strong>硬件加速（QE/CI）</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">✔︎</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"><strong>Metal支持</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">✔︎</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><strong>USB</strong></td><td style="text-align:center;"><strong>定制/完整识别</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">✔︎</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><strong>网卡</strong></td><td style="text-align:center;"><strong>内建</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">✔︎</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><strong>WIFI</strong></td><td style="text-align:center;"><strong>免驱</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">✔︎</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><strong>蓝牙</strong></td><td style="text-align:center;"><strong>全功能</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">✘</td><td style="text-align:center;">Hackintool无法识别，使用正常（又不是不能用.jpg）</td></tr><tr><td style="text-align:center;"><strong>AirDrop</strong></td><td style="text-align:center;"><strong>全功能</strong></td><td style="text-align:center;">No</td><td style="text-align:center;">✘</td><td style="text-align:center;">仅支持从iOS端投送到Mac</td></tr><tr><td style="text-align:center;"><strong>核显输出</strong></td><td style="text-align:center;"><strong>定制/全功能</strong></td><td style="text-align:center;">No</td><td style="text-align:center;">✘</td><td style="text-align:center;">截编时只完美一个“DP-HDMI”，其余两个输出口等有测试显示器再折腾</td></tr><tr><td style="text-align:center;"><strong>声音</strong></td><td style="text-align:center;"><strong>全功能</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">✔︎</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><strong>序列号</strong></td><td style="text-align:center;"><strong>有效没有被用过的序列号</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">✔︎</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><strong>iMessage</strong></td><td style="text-align:center;"><strong>全功能</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">✔︎</td><td style="text-align:center;">解放手机 <em>Get</em></td></tr><tr><td style="text-align:center;"><strong>随航</strong></td><td style="text-align:center;"><strong>功能</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">✔︎</td><td style="text-align:center;">新功能真爽，iOS和 macOS无缝衔接</td></tr><tr><td style="text-align:center;"><strong>HiDPi</strong></td><td style="text-align:center;"><strong>开启</strong></td><td style="text-align:center;">No</td><td style="text-align:center;">✘</td><td style="text-align:center;">能开，显示器物理分辨率太低，再开启HiDPi的分辨率更低，就很难受（有了4K显示器再说吧）</td></tr><tr><td style="text-align:center;"><strong>睡眠</strong></td><td style="text-align:center;"><strong>开启</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">✔︎</td><td style="text-align:center;">随睡随醒</td></tr></tbody></table><ul><li><p>系统图鉴</p></li><li><img width="800" src="'+i+'"></li></ul><details><summary> View More Screenshots </summary><p><img src="'+d+'" alt="1" loading="lazy"><br><img src="'+a+'" alt="1" loading="lazy"></p></details>',10),M={href:"https://www.hacktiny.com/posts/2740.html",target:"_blank",rel:"noopener noreferrer"},P=s('<figure><img src="'+g+'" alt="1" tabindex="0" loading="lazy"><figcaption>图鉴</figcaption></figure><details><summary> View More Screenshots </summary><img width="435" src="'+c+'"><img width="435" src="'+h+'"><img width="435" src="'+_+'"><img width="435" src="'+y+'"><img width="435" src="'+x+'"><img width="435" src="'+p+'"><img width="435" src="'+m+'"><img width="435" src="'+u+'"></details><h2 id="工具及配参" tabindex="-1"><a class="header-anchor" href="#工具及配参" aria-hidden="true">#</a> 工具及配参</h2>',3),O={href:"https://sumingyd.github.io/OpenCore-Install-Guide/",target:"_blank",rel:"noopener noreferrer"},I=t("em",null,"opencore",-1),T=t("h3",{id:"所需工具",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#所需工具","aria-hidden":"true"},"#"),e(" 所需工具")],-1),C=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"名称"),t("th",{style:{"text-align":"center"}},"用途"),t("th",{style:{"text-align":"center"}},"下载")])],-1),G=t("td",{style:{"text-align":"center"}},"SSDTTime",-1),Y=t("td",{style:{"text-align":"center"}},"获取DSDT、SSDT",-1),B={style:{"text-align":"center"}},H={href:"https://github.com/corpnewt/SSDTTime",target:"_blank",rel:"noopener noreferrer"},A=t("td",{style:{"text-align":"center"}},"ACPICA",-1),N=t("td",{style:{"text-align":"center"}},"编译和反编译DSDT",-1),V={style:{"text-align":"center"}},z={href:"https://acpica.org/downloads/binary-tools",target:"_blank",rel:"noopener noreferrer"},E=t("td",{style:{"text-align":"center"}},"OpenCorePkg",-1),U=t("td",{style:{"text-align":"center"}},"OpenCore引导加载程序",-1),v={style:{"text-align":"center"}},R={href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"},j=t("td",{style:{"text-align":"center"}},"ProperTree",-1),q=t("td",{style:{"text-align":"center"}},"跨平台GUIPlist编辑器",-1),L={style:{"text-align":"center"}},Q={href:"https://github.com/corpnewt/ProperTree",target:"_blank",rel:"noopener noreferrer"},W=t("td",{style:{"text-align":"center"}},"gibMacOS",-1),Z=t("td",{style:{"text-align":"center"}},"MacOS恢复镜像下载工具",-1),F={style:{"text-align":"center"}},K={href:"https://github.com/corpnewt/gibMacOS",target:"_blank",rel:"noopener noreferrer"},X=t("td",{style:{"text-align":"center"}},"GenSMBIOS",-1),J=t("td",{style:{"text-align":"center"}},"生成SMBIOS",-1),$={style:{"text-align":"center"}},tt={href:"https://github.com/corpnewt/GenSMBIOS",target:"_blank",rel:"noopener noreferrer"},et=t("h3",{id:"环境搭建",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#环境搭建","aria-hidden":"true"},"#"),e(" 环境搭建")],-1),nt={href:"https://www.7-zip.org/a/7z2201-x64.exe",target:"_blank",rel:"noopener noreferrer"},rt=t("em",null,"7-Zip windows",-1),st={href:"https://www.python.org/ftp/python/3.11.3/python-3.11.3-amd64.exe",target:"_blank",rel:"noopener noreferrer"},lt=t("em",null,"Python windows",-1),ot=t("em",null,"Add to Path",-1),it=t("em",null,"Python",-1),dt=t("figure",null,[t("img",{src:l,alt:"2",tabindex:"0",loading:"lazy"}),t("figcaption",null,"Python")],-1);function at(gt,ct){const n=f("ExternalLinkIcon");return w(),S("div",null,[k,t("ul",null,[t("li",null,[t("a",M,[e("主机图鉴"),r(n)])])]),P,t("ul",null,[t("li",null,[e("全部参考"),t("a",O,[I,e(" 中文安装指南"),r(n)]),e(" 进行操作和配置参数")])]),T,t("table",null,[C,t("tbody",null,[t("tr",null,[G,Y,t("td",B,[t("a",H,[e("Download"),r(n)])])]),t("tr",null,[A,N,t("td",V,[t("a",z,[e("Download"),r(n)])])]),t("tr",null,[E,U,t("td",v,[t("a",R,[e("Download"),r(n)])])]),t("tr",null,[j,q,t("td",L,[t("a",Q,[e("Download"),r(n)])])]),t("tr",null,[W,Z,t("td",F,[t("a",K,[e("Download"),r(n)])])]),t("tr",null,[X,J,t("td",$,[t("a",tt,[e("Download"),r(n)])])])])]),et,t("ul",null,[t("li",null,[t("p",null,[e("下载"),t("a",nt,[rt,e(),r(n)]),e("版本并安装。")])]),t("li",null,[t("p",null,[e("下载"),t("a",st,[lt,e(),r(n)]),e("最新版并安装，注意要选择 "),ot,e(" ，将 "),it,e(" 添加到系统环境。")]),dt])])])}const xt=b(D,[["render",at],["__file","Hackintosh.html.vue"]]);export{xt as default};
