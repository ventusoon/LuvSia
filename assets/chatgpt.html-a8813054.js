import{_ as i,a as t,b as o}from"./3-47e785b4.js";import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as p,a as n,d as s,b as e,f as u,e as l}from"./app-00f8493d.js";const m={},h=n("blockquote",null,[n("p",null,[n("em",null,[n("strong",null,"3步搭建你自己的 ChatGPT Web")])])],-1),v={href:"https://baike.baidu.com/item/ChatGPT/62446358?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},b=n("em",null,"ChatGPT",-1),_=n("em",null,"Chat Generative Pre-trained Transformer",-1),k=n("li",null,[n("p",null,"ChatGPT是由人工智能技术驱动的自然语言处理工具，能够通过理解和学习人类语言进行对话。它还可以根据聊天上下文进行互动，真正像人类一样聊天交流，甚至能够完成撰写邮件、视频脚本、文案、翻译、代码编写、写论文等任务。")],-1),g={id:"chatgpt-web",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#chatgpt-web","aria-hidden":"true"},"#",-1),P={href:"https://github.com/ventusoon/chatgpt-web",target:"_blank",rel:"noopener noreferrer"},T=n("em",null,"ChatGPT-Web",-1),C=l('<ul><li>支持双模型，提供了两种非官方 <code>ChatGPT API</code> 方法</li></ul><h3 id="介紹" tabindex="-1"><a class="header-anchor" href="#介紹" aria-hidden="true">#</a> 介紹</h3><table><thead><tr><th>方式</th><th>免費？</th><th>可靠性</th><th>質量</th></tr></thead><tbody><tr><td><code>ChatGPTAPI(gpt-3.5-turbo-0301)</code></td><td>否</td><td>可靠</td><td>相對較笨</td></tr><tr><td><code>ChatGPTUnofficialProxyAPI(網頁 accessToken)</code></td><td>是</td><td>相對不可靠</td><td>聰明</td></tr></tbody></table><ul><li>對比：</li></ul>',4),x={href:"https://platform.openai.com/",title:"API獲取",target:"_blank",rel:"noopener noreferrer"},A=n("em",null,"ChatGPTAPI(gpt-3.5-turbo-0301)",-1),I=n("em",null,"gpt-3.5-turbo-0301",-1),E=n("em",null,"OpenAI",-1),O=n("em",null,"API",-1),G=n("em",null,"ChatGPT",-1),S={href:"https://chat.openai.com/api/auth/session",title:"AccessToken獲取",target:"_blank",rel:"noopener noreferrer"},y=n("em",null,"ChatGPTUnofficialProxyAPI",-1),N=n("em",null,"ChatGPT",-1),R=n("em",null,"API",-1),Y=n("em",null,"Cloudflare",-1),K=n("em",null,"ChatGPT",-1),w=l(`<ul><li>感謝原作者<em>Chanzhaoyu</em>的辛苦付出</li></ul><h2 id="搭建步驟" tabindex="-1"><a class="header-anchor" href="#搭建步驟" aria-hidden="true">#</a> 搭建步驟</h2><h3 id="一、安裝-docker-及-docker-compose" tabindex="-1"><a class="header-anchor" href="#一、安裝-docker-及-docker-compose" aria-hidden="true">#</a> 一、安裝 <em>Docker</em> 及 <em>Docker-compose</em></h3><ul><li>安裝 <em>Docker</em></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#更新、安裝必備軟體</span>

<span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span> <span class="token function">nano</span>

<span class="token comment">#安裝docker：</span>

<span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://get.docker.com/ <span class="token operator">|</span> <span class="token function">sh</span>


<span class="token comment">#開機自動啟動</span>

systemctl start <span class="token function">docker</span>

systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安裝 <em>Docker-compose</em></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/v2.17.3/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、安裝-chatgpt-web" tabindex="-1"><a class="header-anchor" href="#二、安裝-chatgpt-web" aria-hidden="true">#</a> 二、安裝 <em>ChatGPT-Web</em></h3><ul><li>創建目錄</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/docker_data/chatgpt
<span class="token builtin class-name">cd</span> /data/docker_data/chatgpt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>創建 <em>docker-compose.yml</em> 文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nano</span> docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在文件中填入以下內容，然後 <em>Ctrl+X</em> 保存，按 <em>Y</em> 退出</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&#39;3&#39;</span>

services:
  app:
    image: luvsia/chatgpt-web <span class="token comment"># 總是使用 latest ,更新時重新 pull 該 tag 鏡像即可</span>
    ports:
      - <span class="token number">3002</span>:3002
    environment:
      <span class="token comment"># 選擇一個</span>
      OPENAI_API_KEY: 
      <span class="token comment"># 選擇一個</span>
      OPENAI_ACCESS_TOKEN: 
      <span class="token comment"># API接口地址，可選，設置 OPENAI_API_KEY 時可用</span>
      OPENAI_API_BASE_URL:
      <span class="token comment"># API模型，可選，設置 OPENAI_API_KEY 時可用</span>
      OPENAI_API_MODEL:
      <span class="token comment"># 反向代理，可選</span>
      API_REVERSE_PROXY:
      <span class="token comment"># 訪問權限密鑰，可選</span>
      AUTH_SECRET_KEY:
      <span class="token comment"># 超時，單位毫秒，可選</span>
      TIMEOUT_MS: <span class="token number">100000</span>
      <span class="token comment"># Socks代理，可選，和 SOCKS_PROXY_PORT 一起時生效</span>
      SOCKS_PROXY_HOST:
      <span class="token comment"># Socks代理端口，可選，和 SOCKS_PROXY_HOST 一起時生效</span>
      SOCKS_PROXY_PORT:

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>創建完成後，運行</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>然後就可以通過 IP:3002 來訪問 <em>ChatGPT</em></li></ul><h3 id="三、反向代理-chatgpt-並使用打字機效果" tabindex="-1"><a class="header-anchor" href="#三、反向代理-chatgpt-並使用打字機效果" aria-hidden="true">#</a> 三、反向代理 <em>ChatGPT</em> 並使用打字機效果</h3>`,18),L={href:"http://chat.example.com",target:"_blank",rel:"noopener noreferrer"},V=l('<figure><img src="'+i+'" alt="ChatGPT" tabindex="0" loading="lazy"><figcaption>ChatGPT</figcaption></figure><ul><li>反向代理</li></ul><figure><img src="'+t+`" alt="ChatGPT" tabindex="0" loading="lazy"><figcaption>ChatGPT</figcaption></figure><ul><li>修改反向代理配置文件，實現打字機效果</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#設置反向代理參數以支持流式輸出</span>
proxy_buffering off<span class="token punctuation">;</span>
chunked_transfer_encoding on<span class="token punctuation">;</span>
tcp_nopush on<span class="token punctuation">;</span>
tcp_nodelay on<span class="token punctuation">;</span>
keepalive_timeout <span class="token number">65</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="ChatGPT" tabindex="0" loading="lazy"><figcaption>ChatGPT</figcaption></figure><h2 id="大功告成-enjoy" tabindex="-1"><a class="header-anchor" href="#大功告成-enjoy" aria-hidden="true">#</a> 大功告成，<em>Enjoy</em></h2>',7);function X(D,U){const a=d("ExternalLinkIcon");return r(),p("div",null,[h,n("ul",null,[n("li",null,[n("p",null,[n("a",v,[b,s(a)]),e("（全名："),_,e("），是美国OpenAI研发的聊天机器人程序，于2022年11月30日发布。")])]),k]),u(" more "),n("h2",g,[f,e(),n("a",P,[T,s(a)])]),C,n("ol",null,[n("li",null,[n("a",x,[A,s(a)]),e(" 使用 "),I,e(" 通過官方 "),E,e(" 補全 "),O,e(" 模擬 "),G,e(" （最穩健的方法，但它不是免費的，並且沒有使用針對聊天進行微調的模型）")]),n("li",null,[n("a",S,[y,s(a)]),e(" 使用非官方代理服務器訪問 "),N,e(" 的後端 "),R,e("，繞過 "),Y,e("（使用真實的的 "),K,e("，非常輕量級，但依賴於第三方服務器，並且有速率限制）")])]),w,n("ul",null,[n("li",null,[e("在寶塔面板中新建網站 "),n("a",L,[e("chat.example.com"),s(a)]),e(" 並註冊證書、啟用HTTPS")])]),V])}const j=c(m,[["render",X],["__file","chatgpt.html.vue"]]);export{j as default};
