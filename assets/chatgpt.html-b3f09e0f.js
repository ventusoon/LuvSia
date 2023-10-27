import{_ as l,a as t,b as c}from"./3-47e785b4.js";import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as p,a as n,d as s,b as e,f as i}from"./app-2133029a.js";const u={},m=n("blockquote",null,[n("p",null,[n("em",null,[n("strong",null,"3 Steps Build Your Own ChatGPT Web")])])],-1),h={href:"https://baike.baidu.com/item/ChatGPT/62446358?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},v=n("em",null,"ChatGPT",-1),b=n("em",null,"Chat Generative Pre-trained Transformer",-1),_=n("li",null,[n("p",null,"ChatGPT是人工智能技术驱动的自然语言处理工具，它能够通过理解和学习人类的语言来进行对话，还能根据聊天的上下文进行互动，真正像人类一样来聊天交流，甚至能完成撰写邮件、视频脚本、文案、翻译、代码，写论文等任务。")],-1),k={id:"chatgpt-web",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#chatgpt-web","aria-hidden":"true"},"#",-1),f={href:"https://github.com/ventusoon/chatgpt-web",target:"_blank",rel:"noopener noreferrer"},P=n("em",null,"ChatGPT-Web",-1),T=i('<ul><li>支持双模型，提供了两种非官方 <code>ChatGPT API</code> 方法</li></ul><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><table><thead><tr><th>方式</th><th>免费？</th><th>可靠性</th><th>质量</th></tr></thead><tbody><tr><td><code>ChatGPTAPI(gpt-3.5-turbo-0301)</code></td><td>否</td><td>可靠</td><td>相对较笨</td></tr><tr><td><code>ChatGPTUnofficialProxyAPI(网页 accessToken)</code></td><td>是</td><td>相对不可靠</td><td>聪明</td></tr></tbody></table><ul><li>对比：</li></ul>',4),C={href:"https://platform.openai.com/",title:"API获取",target:"_blank",rel:"noopener noreferrer"},x=n("em",null,"ChatGPTAPI(gpt-3.5-turbo-0301)",-1),A=n("em",null,"gpt-3.5-turbo-0301",-1),I=n("em",null,"OpenAI",-1),O=n("em",null,"API",-1),E=n("em",null,"ChatGPT",-1),G={href:"https://chat.openai.com/api/auth/session",title:"AccessToken获取",target:"_blank",rel:"noopener noreferrer"},S=n("em",null,"ChatGPTUnofficialProxyAPI",-1),y=n("em",null,"ChatGPT",-1),N=n("em",null,"API",-1),R=n("em",null,"Cloudflare",-1),Y=n("em",null,"ChatGPT",-1),w=i(`<h2 id="感谢原作者chanzhaoyu的辛苦付出" tabindex="-1"><a class="header-anchor" href="#感谢原作者chanzhaoyu的辛苦付出" aria-hidden="true">#</a> 感谢原作者<em>Chanzhaoyu</em>的辛苦付出</h2><h2 id="搭建步骤" tabindex="-1"><a class="header-anchor" href="#搭建步骤" aria-hidden="true">#</a> 搭建步骤</h2><h3 id="一、安装-docker-及-docker-compose" tabindex="-1"><a class="header-anchor" href="#一、安装-docker-及-docker-compose" aria-hidden="true">#</a> 一、安装 <em>Docker</em> 及 <em>Docker-compose</em></h3><ul><li>安装 <em>Docker</em></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#更新、安装必备软件</span>

<span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span> <span class="token function">nano</span>

<span class="token comment">#安装docker：</span>

<span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://get.docker.com/ <span class="token operator">|</span> <span class="token function">sh</span>


<span class="token comment">#开机自动启动</span>

systemctl start <span class="token function">docker</span>

systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装 <em>Docker-compose</em></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/v2.17.3/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、安装-chatgpt-web" tabindex="-1"><a class="header-anchor" href="#二、安装-chatgpt-web" aria-hidden="true">#</a> 二、安装 <em>ChatGPT-Web</em></h3><ul><li>创建目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/docker_data/chatgpt
<span class="token builtin class-name">cd</span> /data/docker_data/chatgpt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建 <em>docker-compose.yml</em> 文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nano</span> docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在文件中填入以下内容，然后 <em>Ctrl+X</em> 保存，按 <em>Y</em> 退出</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&#39;3&#39;</span>

services:
  app:
    image: luvsia/chatgpt-web <span class="token comment"># 总是使用 latest ,更新时重新 pull 该 tag 镜像即可</span>
    ports:
      - <span class="token number">3002</span>:3002
    environment:
      <span class="token comment"># 二选一</span>
      OPENAI_API_KEY: 
      <span class="token comment"># 二选一</span>
      OPENAI_ACCESS_TOKEN: 
      <span class="token comment"># API接口地址，可选，设置 OPENAI_API_KEY 时可用</span>
      OPENAI_API_BASE_URL:
      <span class="token comment"># API模型，可选，设置 OPENAI_API_KEY 时可用</span>
      OPENAI_API_MODEL:
      <span class="token comment"># 反向代理，可选</span>
      API_REVERSE_PROXY:
      <span class="token comment"># 访问权限密钥，可选</span>
      AUTH_SECRET_KEY:
      <span class="token comment"># 超时，单位毫秒，可选</span>
      TIMEOUT_MS: <span class="token number">100000</span>
      <span class="token comment"># Socks代理，可选，和 SOCKS_PROXY_PORT 一起时生效</span>
      SOCKS_PROXY_HOST:
      <span class="token comment"># Socks代理端口，可选，和 SOCKS_PROXY_HOST 一起时生效</span>
      SOCKS_PROXY_PORT:

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建完成后，运行</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>然后就可以通过 IP:3002 来访问 <em>ChatGPT</em></li></ul><h3 id="三、反代-chatgpt-并使用打字机效果" tabindex="-1"><a class="header-anchor" href="#三、反代-chatgpt-并使用打字机效果" aria-hidden="true">#</a> 三、反代 <em>ChatGPT</em> 并使用打字机效果</h3><ul><li>宝塔面板中新建网站chat.example.com并注册证书、开启HTTPS</li></ul><figure><img src="`+l+'" alt="ChatGPT" tabindex="0" loading="lazy"><figcaption>ChatGPT</figcaption></figure><ul><li>反向代理</li></ul><figure><img src="'+t+`" alt="ChatGPT" tabindex="0" loading="lazy"><figcaption>ChatGPT</figcaption></figure><ul><li>修改反向代理配置文件，实现打字机效果</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#设置反向代理参数以支持流式输出</span>
proxy_buffering off<span class="token punctuation">;</span>
chunked_transfer_encoding on<span class="token punctuation">;</span>
tcp_nopush on<span class="token punctuation">;</span>
tcp_nodelay on<span class="token punctuation">;</span>
keepalive_timeout <span class="token number">65</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="ChatGPT" tabindex="0" loading="lazy"><figcaption>ChatGPT</figcaption></figure><h1 id="大功告成-enjoy" tabindex="-1"><a class="header-anchor" href="#大功告成-enjoy" aria-hidden="true">#</a> 大功告成，<em>Enjoy</em></h1>',26);function K(z,L){const a=d("ExternalLinkIcon");return r(),p("div",null,[m,n("ul",null,[n("li",null,[n("p",null,[n("a",h,[v,s(a)]),e("（全名："),b,e("），美国OpenAI研发的聊天机器人程序，于2022年11月30日发布。")])]),_]),n("h1",k,[g,e(),n("a",f,[P,s(a)])]),T,n("ol",null,[n("li",null,[n("a",C,[x,s(a)]),e(" 使用 "),A,e(" 通过官方 "),I,e(" 补全 "),O,e(" 模拟 "),E,e(" （最稳健的方法，但它不是免费的，并且没有使用针对聊天进行微调的模型）")]),n("li",null,[n("a",G,[S,s(a)]),e(" 使用非官方代理服务器访问 "),y,e(" 的后端 "),N,e("，绕过 "),R,e("（使用真实的的 "),Y,e("，非常轻量级，但依赖于第三方服务器，并且有速率限制）")])]),w])}const U=o(u,[["render",K],["__file","chatgpt.html.vue"]]);export{U as default};
