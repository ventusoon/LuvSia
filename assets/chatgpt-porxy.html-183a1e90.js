import{_ as l}from"./1-2e05d854.js";import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c,a as e,b as n,d as s,f as i}from"./app-31e6d5d9.js";const d={},p=e("blockquote",null,[e("p",null,[e("em",null,[e("strong",null,"Build ChatGPT Reverse Proxy")])])],-1),u=e("em",null,"ChatGPT-Web",-1),m={href:"https://github.com/linweiyuan/go-chatgpt-api",target:"_blank",rel:"noopener noreferrer"},v=e("img",{src:"https://img.shields.io/badge/github-go--chatgpt--api-pink",alt:"",loading:"lazy"},null,-1),h=i(`<h2 id="搭建步骤" tabindex="-1"><a class="header-anchor" href="#搭建步骤" aria-hidden="true">#</a> 搭建步骤</h2><h3 id="一、安装-docker-及-docker-compose" tabindex="-1"><a class="header-anchor" href="#一、安装-docker-及-docker-compose" aria-hidden="true">#</a> 一、安装 <em>Docker</em> 及 <em>Docker-compose</em></h3><ul><li>安装 <em>Docker</em></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#更新、安装必备软件</span>

<span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span> <span class="token function">nano</span>

<span class="token comment">#安装docker：</span>

<span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://get.docker.com/ <span class="token operator">|</span> <span class="token function">sh</span>


<span class="token comment">#开机自动启动</span>

systemctl start <span class="token function">docker</span>

systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装 <em>Docker-compose</em></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/v2.22.0/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),b={id:"二、安装-go-chatgpt-api",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#二、安装-go-chatgpt-api","aria-hidden":"true"},"#",-1),k={href:"https://github.com/linweiyuan/go-chatgpt-api",target:"_blank",rel:"noopener noreferrer"},_=e("em",null,"go-chatgpt-api",-1),f=i(`<ul><li>创建目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/docker_data/go-chatgpt-api
<span class="token builtin class-name">cd</span> /data/docker_data/go-chatgpt-api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建 <em>docker-compose.yml</em> 文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nano</span> docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在文件中填入以下内容，然后 <em>Ctrl+X</em> 保存，按 <em>Y</em> 退出</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3&quot;</span>
services:
  go-chatgpt-api:
    container_name: go-chatgpt-api
    image: linweiyuan/go-chatgpt-api
    ports:
      - <span class="token number">8080</span>:8080  <span class="token comment"># 容器端口映射到宿主机8080端口；宿主机监听端口可按需改为其它端口</span>
    environment:
      - <span class="token assign-left variable">GIN_MODE</span><span class="token operator">=</span>release
      - <span class="token assign-left variable">CHATGPT_PROXY_SERVER</span><span class="token operator">=</span>http://chatgpt-proxy-server:9515
      <span class="token comment">#- NETWORK_PROXY_SERVER=http://host:port     # NETWORK_PROXY_SERVER：科学上网代理地址，例如：http://10.0.5.10:7890</span>
      <span class="token comment">#- NETWORK_PROXY_SERVER=socks5://host:port   # NETWORK_PROXY_SERVER：科学上网代理地址</span>
    depends_on:
      - chatgpt-proxy-server
    restart: unless-stopped

  chatgpt-proxy-server:
    container_name: chatgpt-proxy-server
    image: linweiyuan/chatgpt-proxy-server
    restart: unless-stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建完成后，运行</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>检查运行的容器；确保容器状态为UP</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>检测容器映射到宿主机的监听端口是否监听</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ss -tnlp<span class="token operator">|</span><span class="token function">grep</span> <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="三、使用自建反代" tabindex="-1"><a class="header-anchor" href="#三、使用自建反代" aria-hidden="true">#</a> 三、使用自建反代</h3>`,13),x={href:"http://ip:8080/conversation",target:"_blank",rel:"noopener noreferrer"},y=e("em",null,"ip",-1),R=e("em",null,"nginx",-1),E=e("em",null,"ip",-1),P={href:"https://example.com/conversation",target:"_blank",rel:"noopener noreferrer"},O=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 反向代理，可选</span>
    API_REVERSE_PROXY: https://example.com/conversation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>现在我们访问chatgpt-web，查看是否可以正常使用，注意确保 <em>chatgpt-proxy-server</em> 运行正常， <em>go-chatgpt-api</em> 需要初始化启动需要耐心等待</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看容器日志是否运行正常</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> chatgpt-proxy-server
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> go-chatgpt-api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完工" tabindex="-1"><a class="header-anchor" href="#完工" aria-hidden="true">#</a> 完工</h2><figure><img src="`+l+'" alt="1" tabindex="0" loading="lazy"><figcaption>😏</figcaption></figure>',5),T={id:"本教程来源",tabindex:"-1"},V=e("a",{class:"header-anchor",href:"#本教程来源","aria-hidden":"true"},"#",-1),N={href:"https://github.com/dqzboy/ChatGPT-Porxy",target:"_blank",rel:"noopener noreferrer"},S=e("img",{src:"https://img.shields.io/badge/github-dqzboy/ChatGPT--Porxy-lemonchiffon",alt:"",loading:"lazy"},null,-1);function q(w,C){const a=o("ExternalLinkIcon");return r(),c("div",null,[p,e("ul",null,[e("li",null,[u,n(" 项目的免费代理挂了，故此，选择本项目 "),e("a",m,[v,s(a)]),n(" 来解决代理问题。")])]),h,e("h3",b,[g,n(" 二、安装 "),e("a",k,[_,n(),s(a)])]),f,e("ul",null,[e("li",null,[n("使用access token模式，并使用我们自建的代理地址进行访问；自建IP的访问地址为 "),e("em",null,[e("a",x,[n("http://ip:8080/conversation"),s(a)])]),n(" ；如果不想让 "),y,n(" 暴露，可以用 "),R,n(" 再反代 "),E,n(" +端口， "),e("em",null,[e("a",P,[n("https://example.com/conversation"),s(a)])]),n(" 。")])]),O,e("h2",T,[V,n(" 本教程来源："),e("a",N,[S,s(a)])])])}const z=t(d,[["render",q],["__file","chatgpt-porxy.html.vue"]]);export{z as default};
