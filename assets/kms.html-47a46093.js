import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as i,c as o,a as t,b as d,d as r,f as a}from"./app-4fb14dc6.js";const l={},h=a(`<blockquote><p><em><strong>KMS Server Installation and Deployment Tutorial</strong></em></p></blockquote><h2 id="关于脚本" tabindex="-1"><a class="header-anchor" href="#关于脚本" aria-hidden="true">#</a> 关于脚本</h2><ul><li><em>KMS</em> 服务安装完成后会加入开机自启动。</li><li>默认记录日志，其日志位于 /var/log/vlmcsd.log。</li></ul><h2 id="开始部署" tabindex="-1"><a class="header-anchor" href="#开始部署" aria-hidden="true">#</a> 开始部署</h2><ul><li>使用 <em>root</em> 用户登录，运行以下命令：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> --no-check-certificate https://github.com/teddysun/across/raw/master/kms.sh <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> +x kms.sh <span class="token operator">&amp;&amp;</span> ./kms.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装完成后，输入以下命令查看端口号 1688 的监听情况</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-nxtlp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">1688</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回值类似于如下这样就表示 <em>OK</em> 了：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcp    <span class="token number">0</span>    <span class="token number">0</span> <span class="token number">0.0</span>.0.0:1688   <span class="token number">0.0</span>.0.0:*   LISTEN   <span class="token number">3200</span>/vlmcsd         
tcp    <span class="token number">0</span>    <span class="token number">0</span> :::1688        :::*        LISTEN   <span class="token number">3200</span>/vlmcsd 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>本脚本安装完成后，会将 <em>KMS</em> 服务加入开机自启动。</li></ul><h2 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令" aria-hidden="true">#</a> 其他命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>启动：/etc/init.d/kms start
停止：/etc/init.d/kms stop
重启：/etc/init.d/kms restart
状态：/etc/init.d/kms status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="卸载方法" tabindex="-1"><a class="header-anchor" href="#卸载方法" aria-hidden="true">#</a> 卸载方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./kms.sh uninstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="激活步骤" tabindex="-1"><a class="header-anchor" href="#激活步骤" aria-hidden="true">#</a> 激活步骤</h2><ul><li>使用管理员权限运行 <em>cmd</em> 查看系统版本，命令如下：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wmic os get caption
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用管理员权限运行 cmd 安装从上面列表得到的 key，命令如下：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>slmgr /ipk xxxxx-xxxxx-xxxxx-xxxxx-xxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用管理员权限运行 cmd 将 KMS 服务器地址设置为你自己的 IP 或 域名，后面最好再加上端口号（:1688），命令如下：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>slmgr /skms Your IP or Domain:1688
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>注意：本脚本所做的工作就是此步骤。当你的 KMS 服务出于启动状态，那么此处就可以设置为你自己的 KMS 服务器地址。<br> 使用管理员权限运行 cmd 手动激活系统，命令如下：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>slmgr /ato
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>关于 Office 的激活，要求必须是 VOL 版本，否则无法激活。<br> 找到你的 Office 安装目录，32 位默认一般为 C:\\Program Files (x86)\\Microsoft Office\\Office16<br> 64 位默认一般为 C:\\Program Files\\Microsoft Office\\Office16<br> Office16 是 Office 2016，Office15 就是 Office 2013，Office14 就是 Office 2010。<br> 打开以上所说的目录，应该有个 OSPP.VBS 文件。<br> 使用管理员权限运行 cmd 进入 Office 目录，命令如下：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token string">&quot;C:\\Program Files (x86)\\Microsoft Office\\Office16&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用管理员权限运行 cmd 注册 KMS 服务器地址：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cscript ospp.vbs /sethst:Your IP or Domain
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用管理员权限运行 cmd 手动激活 Office，命令如下：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cscript ospp.vbs /act
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="主要步骤" tabindex="-1"><a class="header-anchor" href="#主要步骤" aria-hidden="true">#</a> 主要步骤</h3><ol><li>设置服务 <code>slmgr -skms Your IP or Domain</code></li><li>安装密钥 <code>slmgr -ipk 版本对应秘钥</code></li><li>激活系统 <code>slmgr -ato</code></li></ol><h3 id="可用服务" tabindex="-1"><a class="header-anchor" href="#可用服务" aria-hidden="true">#</a> 可用服务</h3><ul><li><code>Your IP or Domain</code> 维护 <strong>CNAME</strong> 指向有效的服务</li></ul><ul><li><code>telnet Your IP or Domain 1688</code> 测试服务是否可用</li><li><code>tcping Your IP or Domain 1688</code></li></ul><h3 id="密钥" tabindex="-1"><a class="header-anchor" href="#密钥" aria-hidden="true">#</a> 密钥</h3>`,36),c={href:"https://learn.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/MicrosoftDocs/windowsserverdocs/blob/main/WindowsServerDocs/get-started/kms-client-activation-keys.md",target:"_blank",rel:"noopener noreferrer"},v=a('<h3 id="windows-server-ltsc-版本" tabindex="-1"><a class="header-anchor" href="#windows-server-ltsc-版本" aria-hidden="true">#</a> Windows Server（LTSC 版本）</h3><h4 id="windows-server-2022" tabindex="-1"><a class="header-anchor" href="#windows-server-2022" aria-hidden="true">#</a> Windows Server 2022</h4><table><thead><tr><th>操作系统版本</th><th>KMS 客户端安装密钥</th></tr></thead><tbody><tr><td>Windows Server 2022 Datacenter</td><td>WX4NM-KYWYW-QJJR4-XV3QB-6VM33</td></tr><tr><td>Windows Server 2022 Datacenter Azure Edition</td><td>NTBV8-9K7Q8-V27C6-M2BTV-KHMXV</td></tr><tr><td>Windows Server 2022 Standard</td><td>VDYBN-27WPP-V4HQT-9VMD4-VMK7H</td></tr></tbody></table><h4 id="windows-server-2019" tabindex="-1"><a class="header-anchor" href="#windows-server-2019" aria-hidden="true">#</a> Windows Server 2019</h4><table><thead><tr><th>操作系统版本</th><th>KMS 客户端安装密钥</th></tr></thead><tbody><tr><td>Windows Server 2019 Datacenter</td><td>WMDGN-G9PQG-XVVXX-R3X43-63DFG</td></tr><tr><td>Windows Server 2019 Standard</td><td>N69G4-B89J2-4G8F4-WWYCC-J464C</td></tr><tr><td>Windows Server 2019 Essentials</td><td>WVDHN-86M7X-466P6-VHXV7-YY726</td></tr></tbody></table><h4 id="windows-server-2016" tabindex="-1"><a class="header-anchor" href="#windows-server-2016" aria-hidden="true">#</a> Windows Server 2016</h4><table><thead><tr><th>操作系统版本</th><th>KMS 客户端安装密钥</th></tr></thead><tbody><tr><td>Windows Server 2016 Datacenter</td><td>CB7KF-BWN84-R7R2Y-793K2-8XDDG</td></tr><tr><td>Windows Server 2016 Standard</td><td>WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY</td></tr><tr><td>Windows Server 2016 Essentials</td><td>JCKRF-N37P4-C2D82-9YXRT-4M63B</td></tr></tbody></table><h3 id="windows-server-半年频道版本" tabindex="-1"><a class="header-anchor" href="#windows-server-半年频道版本" aria-hidden="true">#</a> Windows Server (半年频道版本)</h3><h4 id="windows-server-版本-20h2、2004、1909、1903-和-1809" tabindex="-1"><a class="header-anchor" href="#windows-server-版本-20h2、2004、1909、1903-和-1809" aria-hidden="true">#</a> Windows Server 版本 20H2、2004、1909、1903 和 1809</h4><table><thead><tr><th>操作系统版本</th><th>KMS 客户端安装密钥</th></tr></thead><tbody><tr><td>Windows Server Datacenter</td><td>6NMRW-2C8FM-D24W7-TQWMY-CWH2D</td></tr><tr><td>Windows Server Standard</td><td>N2KJX-J94YW-TQVFB-DG9YT-724CC</td></tr></tbody></table><h3 id="windows-11-和-windows-10-半年频道版本" tabindex="-1"><a class="header-anchor" href="#windows-11-和-windows-10-半年频道版本" aria-hidden="true">#</a> Windows 11 和 Windows 10 (半年频道版本)</h3><table><thead><tr><th>操作系统版本</th><th>KMS 客户端安装密钥</th></tr></thead><tbody><tr><td>Windows 10/11 专业版</td><td>W269N-WFGWX-YVC9B-4J6C9-T83GX</td></tr><tr><td>Windows 10/11 专业版 N</td><td>MH37W-N47XK-V7XM9-C7227-GCQG9</td></tr><tr><td>Windows 10/11 专业工作站</td><td>NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J</td></tr><tr><td>Windows 10/11 专业工作站 N</td><td>9FNHH-K3HBT-3W4TD-6383H-6XYWF</td></tr><tr><td>Windows 10/11 专业教育版</td><td>6TP4R-GNPTD-KYYHQ-7B7DP-J447Y</td></tr><tr><td>Windows 10/11 专业教育版 N</td><td>YVWGF-BXNMC-HTQYQ-CPQ99-66QFC</td></tr><tr><td>Windows 10/11 教育版</td><td>NW6C2-QMPVW-D7KKK-3GKT6-VCFB2</td></tr><tr><td>Windows 10/11 教育版 N</td><td>2WH4N-8QGBV-H22JP-CT43Q-MDWWJ</td></tr><tr><td>Windows 10/11 企业版</td><td>NPPR9-FWDCX-D2C8J-H872K-2YT43</td></tr><tr><td>Windows 10/11 企业版 N</td><td>DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4</td></tr><tr><td>Windows 10/11 企业版 G</td><td>YYVX9-NTFWV-6MDM3-9PT4T-4M68B</td></tr><tr><td>Windows 10/11 企业版 G N</td><td>44RPN-FTY23-9VTTB-MP9BX-T84FV</td></tr></tbody></table><h3 id="windows-10-ltsc-ltsb-版本" tabindex="-1"><a class="header-anchor" href="#windows-10-ltsc-ltsb-版本" aria-hidden="true">#</a> Windows 10 (LTSC/LTSB 版本)</h3><h4 id="windows-10-ltsc-2019" tabindex="-1"><a class="header-anchor" href="#windows-10-ltsc-2019" aria-hidden="true">#</a> Windows 10 LTSC 2019</h4><table><thead><tr><th>操作系统版本</th><th>KMS 客户端安装密钥</th></tr></thead><tbody><tr><td>Windows 10 企业版 LTSC 2019</td><td>M7XTQ-FN8P6-TTKYV-9D4CC-J462D</td></tr><tr><td>Windows 10 企业版 N LTSC 2019</td><td>92NFX-8DJQP-P6BBQ-THF9C-7CG2H</td></tr></tbody></table><h4 id="windows-10-ltsb-2016" tabindex="-1"><a class="header-anchor" href="#windows-10-ltsb-2016" aria-hidden="true">#</a> Windows 10 LTSB 2016</h4><table><thead><tr><th>操作系统版本</th><th>KMS 客户端安装密钥</th></tr></thead><tbody><tr><td>Windows 10 企业版 LTSB 2016</td><td>DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ</td></tr><tr><td>Windows 10 企业版 N LTSB 2016</td><td>QFFDN-GRT3P-VKWWX-X7T3R-8B639</td></tr></tbody></table><h4 id="windows-10-ltsb-2015" tabindex="-1"><a class="header-anchor" href="#windows-10-ltsb-2015" aria-hidden="true">#</a> Windows 10 LTSB 2015</h4><table><thead><tr><th>操作系统版本</th><th>KMS 客户端安装密钥</th></tr></thead><tbody><tr><td>Windows 10 企业版 2015 LTSB</td><td>WNMTR-4C88C-JK8YV-HQ7T2-76DF9</td></tr><tr><td>Windows 10 企业版 2015 LTSB N</td><td>2F77B-TNFGY-69QQF-B8YKP-D69TJ</td></tr></tbody></table><h3 id="早期版本的-windows-server" tabindex="-1"><a class="header-anchor" href="#早期版本的-windows-server" aria-hidden="true">#</a> 早期版本的 Windows Server</h3><h4 id="windows-server-版本-1803" tabindex="-1"><a class="header-anchor" href="#windows-server-版本-1803" aria-hidden="true">#</a> Windows Server 版本 1803</h4><table><thead><tr><th>操作系统版本</th><th>KMS 客户端安装密钥</th></tr></thead><tbody><tr><td>Windows Server Datacenter</td><td>2HXDN-KRXHB-GPYC7-YCKFJ-7FVDG</td></tr><tr><td>Windows Server Standard</td><td>PTXN8-JFHJM-4WC78-MPCBR-9W4KR</td></tr></tbody></table><h4 id="windows-server-版本-1709" tabindex="-1"><a class="header-anchor" href="#windows-server-版本-1709" aria-hidden="true">#</a> Windows Server 版本 1709</h4><table><thead><tr><th>操作系统版本</th><th>KMS 客户端安装密钥</th></tr></thead><tbody><tr><td>Windows Server Datacenter</td><td>6Y6KB-N82V8-D8CQV-23MJW-BWTG6</td></tr><tr><td>Windows Server Standard</td><td>DPCNP-XQFKJ-BJF7R-FRC8D-GF6G4</td></tr></tbody></table><h4 id="windows-server-2012-r2" tabindex="-1"><a class="header-anchor" href="#windows-server-2012-r2" aria-hidden="true">#</a> Windows Server 2012 R2</h4><table><thead><tr><th>操作系统版本</th><th>KMS 客户端安装密钥</th></tr></thead><tbody><tr><td>Windows Server 2012 R2 Server Standard</td><td>D2N9P-3P6X9-2R39C-7RTCD-MDVJX</td></tr><tr><td>WindowsServer 2012 R2 Datacenter</td><td>W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9</td></tr><tr><td>WindowsServer 2012 R2 Essentials</td><td>KNC87-3J2TX-XB4WP-VCPJV-M4FWM</td></tr></tbody></table><h4 id="windows-server-2012" tabindex="-1"><a class="header-anchor" href="#windows-server-2012" aria-hidden="true">#</a> Windows Server 2012</h4><table><thead><tr><th>操作系统版本</th><th>KMS 客户端安装密钥</th></tr></thead><tbody><tr><td>Windows Server 2012</td><td>BN3D2-R7TKB-3YPBD-8DRP2-27GG4</td></tr><tr><td>Windows Server 2012 N</td><td>8N2M2-HWPGY-7PGT9-HGDD8-GVGGY</td></tr><tr><td>Windows Server 2012 单语言版</td><td>2WN2H-YGCQR-KFX6K-CD6TF-84YXQ</td></tr><tr><td>Windows Server 2012 特定国家/地区版</td><td>4K36P-JN4VD-GDC6V-KDT89-DYFKP</td></tr><tr><td>Windows Server 2012 Server Standard</td><td>XC9B7-NBPP2-83J2H-RHMBY-92BT4</td></tr><tr><td>Windows Server 2012 MultiPoint Standard</td><td>HM7DN-YVMH3-46JC3-XYTG7-CYQJJ</td></tr><tr><td>Windows Server 2012 MultiPoint Premium</td><td>XNH6W-2V9GX-RGJ4K-Y8X6F-QGJ2G</td></tr><tr><td>Windows Server 2012 Datacenter</td><td>48HP8-DN98B-MYWDG-T2DCC-8W83P</td></tr></tbody></table><h4 id="windows-server-2008-r2" tabindex="-1"><a class="header-anchor" href="#windows-server-2008-r2" aria-hidden="true">#</a> Windows Server 2008 R2</h4><table><thead><tr><th>操作系统版本</th><th>KMS 客户端安装密钥</th></tr></thead><tbody><tr><td>Windows Server 2008 R2 Web 版</td><td>6TPJF-RBVHG-WBW2R-86QPH-6RTM4</td></tr><tr><td>Windows Server 2008 R2 HPC 版</td><td>TT8MH-CG224-D3D7Q-498W2-9QCTX</td></tr><tr><td>WindowsServer 2008 R2 Standard</td><td>YC6KT-GKW9T-YTKYR-T4X34-R7VHC</td></tr><tr><td>WindowsServer 2008 R2 企业版</td><td>489J6-VHDMP-X63PK-3K798-CPX3Y</td></tr><tr><td>WindowsServer 2008 R2 Datacenter</td><td>74YFP-3QFB3-KQT8W-PMXWJ-7M648</td></tr><tr><td>面向基于 Itanium 系统的 Windows Server 2008 R2</td><td>GT63C-RJFQ3-4GMB6-BRFB9-CB83V</td></tr></tbody></table><h4 id="windows-server-2008" tabindex="-1"><a class="header-anchor" href="#windows-server-2008" aria-hidden="true">#</a> Windows Server 2008</h4><table><thead><tr><th>操作系统版本</th><th>KMS 客户端安装密钥</th></tr></thead><tbody><tr><td>Windows Web Server 2008</td><td>WYR28-R7TFJ-3X2YQ-YCY4H-M249D</td></tr><tr><td>Windows Server 2008 Standard</td><td>TM24T-X9RMF-VWXK6-X8JC9-BFGM2</td></tr><tr><td>不带 Hyper-V 的 Windows Server 2008 Standard</td><td>W7VD6-7JFBR-RX26B-YKQ3Y-6FFFJ</td></tr><tr><td>Windows Server 2008 企业版</td><td>YQGMW-MPWTJ-34KDK-48M3W-X4Q6V</td></tr><tr><td>不带 Hyper-V 的 Windows Server 2008 企业版</td><td>39BXF-X8Q23-P2WWT-38T2F-G3FPG</td></tr><tr><td>Windows Server 2008 HPC</td><td>RCTX3-KWVHP-BR6TB-RB6DM-6X7HP</td></tr><tr><td>Windows Server 2008 Datacenter</td><td>7M67G-PC374-GR742-YH8V4-TCBY3</td></tr><tr><td>不带 Hyper-V 的 Windows Server 2008 Datacenter</td><td>22XQ2-VRXRG-P8D42-K34TD-G3QQC</td></tr><tr><td>面向基于 Itanium 系统的 Windows Server 2008</td><td>4DWFP-JF3DJ-B7DTH-78FJB-PDRHK</td></tr></tbody></table>',32);function u(w,m){const e=n("ExternalLinkIcon");return i(),o("div",null,[h,t("p",null,[t("a",c,[d("https://learn.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys"),r(e)])]),t("p",null,[t("a",b,[d("kms-client-activation-keys.md"),r(e)])]),v])}const p=s(l,[["render",u],["__file","kms.html.vue"]]);export{p as default};
