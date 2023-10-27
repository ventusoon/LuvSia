import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as t,c,a as e,b as a,d as r,f as n}from"./app-a79373b4.js";const o={},l={id:"sub-web-modify前端搭建",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#sub-web-modify前端搭建","aria-hidden":"true"},"#",-1),v={href:"https://github.com/youshandefeiyang/sub-web-modify",target:"_blank",rel:"noopener noreferrer"},p={href:"https://sub.luvsia.com",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/CareyWang/sub-web",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/youshandefeiyang/sub-web-api",target:"_blank",rel:"noopener noreferrer"},m=n(`<h2 id="更新系统并安装-node-与-yarn" tabindex="-1"><a class="header-anchor" href="#更新系统并安装-node-与-yarn" aria-hidden="true">#</a> 更新系统并安装 Node 与 Yarn</h2><p>依次运行下面四行代码，若是 CentOS 系统，请自行替换下面前两行命令中的 <strong><code>apt</code></strong> 为 <strong><code>yum</code></strong></p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>apt update -y
apt install -y curl wget sudo nodejs git
apt install npm
npm install -g yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令执行完毕以后，请运行下面的代码查询 Node 与 Yarn 是否安装成功，若是成功会返回版本号。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>node -v
yarn --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载并安装-sub-web-modify" tabindex="-1"><a class="header-anchor" href="#下载并安装-sub-web-modify" aria-hidden="true">#</a> 下载并安装 sub-web-modify</h2><p>拉取 <strong><code>sub-web-modify</code></strong> 程序，并进入 <strong><code>sub-web-modify</code></strong> 文件夹</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>git clone https://github.com/youshandefeiyang/sub-web-modify.git
cd sub-web-modify
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目目录中安装构建依赖项，构建的过程稍微有点长</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 webpack 运行 Web 客户端以进行本地开发。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>yarn serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>出现下图则表示前端调试模式启动成功</p><figure><img src="https://raw.githubusercontent.com/ventusoon/LuvSia/gh-pages/images/buildSUB/yarn-success.png" alt="yarn-success" tabindex="0" loading="lazy"><figcaption>yarn-success</figcaption></figure>`,14),g={id:"这时-我们浏览器访问-http-服务器ip-8080-应该可以进行前端-sub-web-modify-的预览了",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#这时-我们浏览器访问-http-服务器ip-8080-应该可以进行前端-sub-web-modify-的预览了","aria-hidden":"true"},"#",-1),S={href:"http://xn--ip-fr5c86lx7z:8080/",target:"_blank",rel:"noopener noreferrer"},y=n(`<h4 id="记住8082端口的防火墙和安全组要开放" tabindex="-1"><a class="header-anchor" href="#记住8082端口的防火墙和安全组要开放" aria-hidden="true">#</a> <em>记住8082端口的防火墙和安全组要开放</em></h4><h2 id="修改默认后端地址并增加远程规则" tabindex="-1"><a class="header-anchor" href="#修改默认后端地址并增加远程规则" aria-hidden="true">#</a> 修改默认后端地址并增加远程规则</h2><p>找到 VPS /root/sub-web-modify/src/views/Subconverter.vue 文件用编辑器打开</p><p>找到 backendOptions:将你解析好的后端地址输入进去。域名为你刚才准备的后端域名，要将http改成https，并且增加/sub?的后缀。（这样选项下面就会出现自己的后端地址）</p><p>如果不想用后端作者默认提供的转换那可以把 const defaultBackend = 也改成你自己的域名记得加上 &quot;&quot;。</p><p>找到 remoteConfig: [ 后回车将喜欢的规则复制进去即可。</p><h2 id="配置完毕后打包网站" tabindex="-1"><a class="header-anchor" href="#配置完毕后打包网站" aria-hidden="true">#</a> 配置完毕后打包网站</h2><p>配置完毕以后，程序会自动更新，再次刷新前端网页，会出现刚才添加的相关规则。</p><p>经过上面的修改默认后端地址和原程配置的规则就修改好了。</p><p>至此，我们的前端调试完毕，我们现在需要打包，生成一个发布目录并将他发布了。</p><p>首先停止调试程序，CTRL+C ，退出当前调试，然后执行下面的命令进行打包：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>yarn build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行以下打包命令，在 /root/sub-web-modify 下面会生成一个 dist 目录，这个目录即为网页的发布目录。</p><p>将这个目录的里面的文件复制到你站点的根目录即可。</p><h2 id="一键搭建前端" tabindex="-1"><a class="header-anchor" href="#一键搭建前端" aria-hidden="true">#</a> 一键搭建前端</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>cd /root &amp;&amp; git clone https://github.com/youshandefeiyang/sub-web-modify.git &amp;&amp; chmod -R 755 sub-web-modify &amp;&amp; cd sub-web-modify &amp;&amp; yarn install &amp;&amp; yarn build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="发布前端" tabindex="-1"><a class="header-anchor" href="#发布前端" aria-hidden="true">#</a> 发布前端</h2><p>没有安装宝塔的去宝塔官网看教程安装.</p><p>在宝塔面板中点击增加站点分别将前端站点增加上去，并配置好ssl证书。</p><p>将 /root/sub-web/dist文件夹内的所有文件复制到前端站点的根目录下即可。</p><p>访问该网站，前端就部署好了。</p>`,21),_={id:"subconverter后端搭建",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#subconverter后端搭建","aria-hidden":"true"},"#",-1),J={href:"https://github.com/tindy2013/subconverter",target:"_blank",rel:"noopener noreferrer"},w=n(`<h2 id="新建后端站点并进行反向代理" tabindex="-1"><a class="header-anchor" href="#新建后端站点并进行反向代理" aria-hidden="true">#</a> 新建后端站点并进行反向代理</h2><p>在宝塔面板中新建后端的站点，同样配置好ssl并将设置站点的反向代理到25500。</p><p>点击新建好的后端网站的网站名在弹出来的消息盒子中点击反向代理添加发现代理。</p><p>反向代理配置方法方法如图：</p><figure><img src="https://raw.githubusercontent.com/ventusoon/LuvSia/gh-pages/images/buildSUB/buildSUB.png" alt="反代" tabindex="0" loading="lazy"><figcaption>反代</figcaption></figure><p>设置完毕后我们开始安装后端</p><h2 id="搭建后端程序" tabindex="-1"><a class="header-anchor" href="#搭建后端程序" aria-hidden="true">#</a> 搭建后端程序</h2><h3 id="这里我们可以用两种方法搭建后端程序-第一种是用二进制文件搭建-第二种为使用docker搭建。我个人比较推荐docker配置简单一行命令即可搞定" tabindex="-1"><a class="header-anchor" href="#这里我们可以用两种方法搭建后端程序-第一种是用二进制文件搭建-第二种为使用docker搭建。我个人比较推荐docker配置简单一行命令即可搞定" aria-hidden="true">#</a> 这里我们可以用两种方法搭建后端程序，第一种是用二进制文件搭建，第二种为使用Docker搭建。我个人比较推荐Docker配置简单一行命令即可搞定</h3><h4 id="方法一-二进制文件搭建" tabindex="-1"><a class="header-anchor" href="#方法一-二进制文件搭建" aria-hidden="true">#</a> 方法一 二进制文件搭建</h4><h5 id="下载并解压-subconverter-二进制文件" tabindex="-1"><a class="header-anchor" href="#下载并解压-subconverter-二进制文件" aria-hidden="true">#</a> 下载并解压 subconverter 二进制文件</h5><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>cd /root
wget https://github.com/tindy2013/subconverter/releases/download/v0.7.2/subconverter_linux64.tar.gz
tar -zxvf subconverter_linux64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完成以后-在-root-文件夹下会多出一个-subconverter-的文件夹-这个就是我们的后端程序" tabindex="-1"><a class="header-anchor" href="#完成以后-在-root-文件夹下会多出一个-subconverter-的文件夹-这个就是我们的后端程序" aria-hidden="true">#</a> <em>完成以后，在 /root 文件夹下会多出一个 subconverter 的文件夹，这个就是我们的后端程序</em></h3><h5 id="修改配置文件参数" tabindex="-1"><a class="header-anchor" href="#修改配置文件参数" aria-hidden="true">#</a> 修改配置文件参数</h5><p>现在我们需要修改后端配置文件中的一些参数</p><p>找到VPS文件 /root/subconverter/pref.ini ，找到如下参数进行修改</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>api_access_token=123123dfsdsdfsdfsdf            #随意设置自己知道就行
managed_config_prefix=https://sub.yourdomin.com  #设置成我们刚刚解析的后端域名
listen=127.0.0.1                                #这里改成 127.0.0.1 进行反代
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="创建服务进程并启动" tabindex="-1"><a class="header-anchor" href="#创建服务进程并启动" aria-hidden="true">#</a> 创建服务进程并启动</h5><p>接下来我们需要创建一个服务，让VPS每次重启或是开机自动运行后端程序</p><p>找到VPS目录 /etc/systemd/system，创建一个名为 sub.service 的文件</p><p>打开文件，贴入以下内容，保存。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>[Unit]
Description=A API For Subscription Convert
After=network.target
 
[Service]
Type=simple
ExecStart=/root/subconverter/subconverter
WorkingDirectory=/root/subconverter
Restart=always
RestartSec=10
 
[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="检查运行状态以及设置开机自启" tabindex="-1"><a class="header-anchor" href="#检查运行状态以及设置开机自启" aria-hidden="true">#</a> 检查运行状态以及设置开机自启</h5><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>systemctl daemon-reload
systemctl start sub
systemctl enable sub
systemctl status sub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="到这里-后端也就搭建完毕了-我们现在可以在浏览器里面访问我们的后端了-访问后端域名后端搭建成功" tabindex="-1"><a class="header-anchor" href="#到这里-后端也就搭建完毕了-我们现在可以在浏览器里面访问我们的后端了-访问后端域名后端搭建成功" aria-hidden="true">#</a> <em>到这里，后端也就搭建完毕了，我们现在可以在浏览器里面访问我们的后端了，访问后端域名后端搭建成功！</em></h3><h4 id="方法二-docker容器搭建" tabindex="-1"><a class="header-anchor" href="#方法二-docker容器搭建" aria-hidden="true">#</a> 方法二 Docker容器搭建</h4><p>如果服务器安装了Docker可以使用命令：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>docker run -d --restart=always -p 25500:25500 tindy2013/subconverter:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后再用下面的命令确认一下状态</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>curl http://localhost:25500/version
curl http://localhost:25500/version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果输出当前 subconverter 容器版本几位搭建成功。</p>`,30);function k(B,C){const i=d("ExternalLinkIcon");return t(),c("div",null,[e("blockquote",null,[e("h1",l,[u,a(),e("a",v,[a("Sub-Web-Modify前端搭建"),r(i)])])]),e("p",null,[e("a",p,[a("本项目"),r(i)]),a("基于"),e("a",h,[a("CareyWang/sub-web"),r(i)]),a("，重制CSS样式，解决大部分布局细节问题，增加“暗黑模式”，默认自动切换亮/暗模式（点击“太阳/月亮”图标可手动切换），增加“高级功能”点击显示/隐藏，添加短链接选择/自定义功能，增加近百条远程配置，新增"),e("a",b,[a("sub-web聚合API"),r(i)]),a("，增加上传自定义远程配置/JS进阶排序节点/JS进阶筛选节点等功能！")]),m,e("h4",g,[f,a(" 这时，我们浏览器访问 "),e("a",S,[a("http://服务器ip:8080/"),r(i)]),a(" 应该可以进行前端 sub-web-modify 的预览了")]),y,e("h1",_,[x,a(),e("a",J,[a("SubConverter后端搭建"),r(i)])]),w])}const D=s(o,[["render",k],["__file","buildSUB.html.vue"]]);export{D as default};
