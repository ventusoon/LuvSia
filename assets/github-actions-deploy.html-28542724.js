import{_ as d,a as c,b as r,c as u}from"./4-8d3c8c2c.js";import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as m,c as v,f as b,a as n,b as e,d as s,w as t,e as o}from"./app-a5167a73.js";const g={},h=n("blockquote",null,[n("p",null,[n("em",null,[n("strong",null,"使用GitHub Actions自動部署前端到伺服器")])])],-1),k=n("h2",{id:"github-actions介紹及原理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github-actions介紹及原理","aria-hidden":"true"},"#"),e(" GitHub Actions介紹及原理")],-1),_={href:"https://docs.github.com/zh/actions",target:"_blank",rel:"noopener noreferrer"},y=n("li",null,[n("p",null,"通過文檔可以看出GitHub Action具有強大的代碼管理、運行部署、測試推送等一體化自動發布部署功能，省去了大量的重複性工作。由於通過ssh客戶端連接到伺服器，直接進行前端部署，需要安裝各種依賴，很大程度上降低了伺服器運行效率，且不易對代碼進行修正。")],-1),x=n("details",null,[n("summary",null," GitHub Action成功示圖 "),n("figure",null,[n("img",{src:d,alt:"GitHub Action成功界面",tabindex:"0",loading:"lazy"}),n("figcaption",null,"GitHub Action成功界面")])],-1),E=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>name: luvsia-hugo-blog-autodeploy <span class="token comment"># 工作流程名稱，自行命名</span>

on:
  push: <span class="token comment"># 什麼時候請求觸發</span>
    branches:
      - main  <span class="token comment"># 作用分支，這裡是main，也可是master</span>
  pull_request:

jobs: <span class="token comment"># 將工作流文件中運行的所有任務分組在一起</span>
  deploy:
    runs-on: ubuntu-latest
    concurrency:
      group: <span class="token variable">\${{ github.workflow }</span><span class="token punctuation">}</span>-<span class="token variable">\${{ github.ref }</span><span class="token punctuation">}</span>
    steps:
      - uses: actions/checkout@v2
        with:               <span class="token comment"># 如果你安裝主題時用的是git submodule add</span>
          submodules: <span class="token boolean">true</span>  <span class="token comment"># 那麼這三行不必註釋掉，這一行填寫 true</span>
          fetch-depth: <span class="token number">0</span>    <span class="token comment"># Fetch all history for .GitInfo and .Lastmod</span>

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: <span class="token string">&#39;latest&#39;</span>  <span class="token comment"># 獲取最新版本的hugo</span>
          extended: <span class="token boolean">true</span>          <span class="token comment"># 如果你使用的不是extended版本的hugo，將true改為false</span>

      - name: Build
        run: hugo   <span class="token comment"># 使用hugo構建靜態網頁</span>

      - name: Deploy to github
        uses: peaceiris/actions-gh-pages@v3
        if: <span class="token variable">\${{ github.ref == &#39;refs<span class="token operator">/</span>heads<span class="token operator">/</span>main&#39; }</span><span class="token punctuation">}</span>  <span class="token comment"># 注意填寫main或者master</span>
        with:
          personal_token: <span class="token variable">\${{ secrets.PERSONAL_TOKEN }</span><span class="token punctuation">}</span> <span class="token comment"># 如果secret取了其他名稱，將PERSONAL_TOKEN替換掉</span>
          external_repository: ventusoon/LuvSia <span class="token comment"># 填寫遠程 public 倉庫 </span>
          publish_dir: ./public
          cname: luvsia.com        <span class="token comment"># 填寫自定義域名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>按照示例分析，可以得出簡單的GitHub Actions步驟圖如下</li></ul><blockquote><p>Action</p><blockquote><p>1️⃣作用條件</p><blockquote><p>時間節點</p><p>分支</p></blockquote><p>2️⃣工作任務</p><blockquote><p>運行環境</p><p>步驟一</p><p>步驟二</p><p>步驟 N</p><p>直接發布到伺服器/本地/托管頁面</p></blockquote></blockquote></blockquote><h2 id="實戰演練" tabindex="-1"><a class="header-anchor" href="#實戰演練" aria-hidden="true">#</a> 實戰演練</h2><ul><li><p>因為要部署到伺服器端，所以要了解連接到伺服器的方式，這裡選擇ssh連接，網上有很多教程也用了sftp連接，都可以。</p></li><li><p>GitHub Actions部署文件通常以 <code>xxx.yml</code> 命名，路徑為項目根目錄下 <code>/.github/workflows/xxx.yml</code> 。</p></li><li><p>在GitHub頁面下編輯 <code>xxx.yml</code> ，可以發現右側的應用商城中有很多特色Actions，因為是ssh連接，在這裡選擇評分較高的 <code>ssh-deploy</code> 應用，並使用最新版。</p></li></ul><details><summary> ssh-deploy 應用 </summary><figure><img src="`+c+'" alt="ssh-deploy" tabindex="0" loading="lazy"><figcaption>ssh-deploy</figcaption></figure></details>',6),f={href:"https://github.com/easingthemes/ssh-deploy",target:"_blank",rel:"noopener noreferrer"},A=n("img",{src:"https://img.shields.io/badge/GitHubAction-easingthemes/ssh--deploy-cyan?logo=github",alt:"ssh-deploy",loading:"lazy"},null,-1),R=o(`<table><thead><tr><th style="text-align:center;">配置名稱</th><th style="text-align:center;">用途</th><th style="text-align:center;">示例</th></tr></thead><tbody><tr><td style="text-align:center;">SSH_PRIVATE_KEY</td><td style="text-align:center;">SSH密鑰</td><td style="text-align:center;"><code>密鑰應使用PEM格式生成</code></td></tr><tr><td style="text-align:center;">REMOTE_HOST</td><td style="text-align:center;">遠程主機</td><td style="text-align:center;"><code>10.10.10.10</code></td></tr><tr><td style="text-align:center;">REMOTE_USER</td><td style="text-align:center;">用戶</td><td style="text-align:center;"><code>root</code></td></tr><tr><td style="text-align:center;">REMOTE_PORT</td><td style="text-align:center;">端口</td><td style="text-align:center;"><code>默認22</code></td></tr><tr><td style="text-align:center;">SOURCE</td><td style="text-align:center;">源，需要部署的內容</td><td style="text-align:center;"><code>/dist</code></td></tr><tr><td style="text-align:center;">TARGET</td><td style="text-align:center;">對象，要部署的路徑</td><td style="text-align:center;"><code>/data/docker_data/npm/data/sub.ven2s.cn/</code></td></tr><tr><td style="text-align:center;">ARGS</td><td style="text-align:center;">傳遞給rsync（同步時）的參數</td><td style="text-align:center;"><code>-avz --delete</code></td></tr><tr><td style="text-align:center;">SSH_CMD_ARGS</td><td style="text-align:center;">一組ssh參數，它們必須以-o為前綴，用逗號分隔</td><td style="text-align:center;"><code>-o SomeArgument=no，-o SomeOtherArgument=5</code></td></tr><tr><td style="text-align:center;">EXCLUDE</td><td style="text-align:center;">要排除的路徑，用逗號分隔</td><td style="text-align:center;"><code>/dist/, /node_modules/</code></td></tr><tr><td style="text-align:center;">SCRIPT_BEFORE</td><td style="text-align:center;">在同步之前在主機上運行的腳本</td><td style="text-align:center;"><code>mkdir -p /data/docker_data/npm/data/sub.ven2s.cn</code></td></tr><tr><td style="text-align:center;">SCRIPT_AFTER</td><td style="text-align:center;">在同步之後在主機上運行的腳本</td><td style="text-align:center;"><code>reboot</code></td></tr></tbody></table><ul><li>做好以上前期工作，現在可以開始操作了。</li></ul><h3 id="在伺服器端配置密鑰" tabindex="-1"><a class="header-anchor" href="#在伺服器端配置密鑰" aria-hidden="true">#</a> 在伺服器端配置密鑰</h3><ul><li>在 <code>root</code> 目錄下，輸入以下命令：</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>ssh<span class="token operator">-</span>keygen <span class="token operator">-</span>m PEM <span class="token operator">-</span>t rsa <span class="token operator">-</span>b <span class="token number">4096</span>

# 生成密鑰文件，連續按下兩次回車。
# 請注意：您不應該為您生成的私鑰設置密碼（將其保留為空）。因為 rsync ssh（用於部署）不支持將私鑰密碼作為命令行參數輸入。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>此時，在 <code>/root/.ssh/</code> 下生成了私鑰文件 <code>id_dsa</code> 、公鑰文件 <code>id_dsa.pub</code> ，根據公鑰文件生成<code>authorized_keys</code> ，並給以上三個文件分別設置權限。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cat <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>id_rsa<span class="token punctuation">.</span>pub <span class="token operator">&gt;&gt;</span> <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>chmod <span class="token number">600</span> <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>chmod <span class="token number">600</span> <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>id_rsa<span class="token punctuation">.</span>pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>chmod <span class="token number">600</span> <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>此時，客觀上伺服器端的工作就完成了。如果連接中遇到各種錯誤提示，請自行 <strong>goggle</strong> ，這裡就不贅述了。</li></ul><h3 id="項目中設置倉庫密鑰" tabindex="-1"><a class="header-anchor" href="#項目中設置倉庫密鑰" aria-hidden="true">#</a> 項目中設置倉庫密鑰</h3><ul><li>說來真是坑，最開始把<strong>倉庫密鑰</strong>錯填到<strong>代碼空間機密</strong>中，一直連接不上，我還以為是伺服器的問題，前天甚至弄恍惚了，不小心 <code>rm -rf /</code> 了......</li></ul><details><summary> 倉庫機密在GitHub項目中設置的位置 </summary><figure><img src="`+r+`" alt="3" tabindex="0" loading="lazy"><figcaption>3</figcaption></figure></details><ul><li>在伺服器中 <code>cat</code> 密鑰，將所有內容複制到上圖的 <strong>SSH_PRIVATE_KEY</strong> 中，並填入伺服器IP到 <strong>REMOTE_HOST</strong> ，填入 <code>root</code> 到 <strong>REMOTE_USER</strong>。（或者直接在yml文件中填入 <strong>&quot;root&quot;</strong> ）</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>cat <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>REMOTE_USER<span class="token operator">:</span> <span class="token string">&quot;root&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="發布部署文件到遠端" tabindex="-1"><a class="header-anchor" href="#發布部署文件到遠端" aria-hidden="true">#</a> 發布部署文件到遠端</h3><ul><li>我把自動發布nginx-proxy-manager靜態頁面的文件po在下面，請根據自身的運行環境和依賴進行修改配置即可。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 當前工作流的名稱</span>
name: sub-web-deploy
on:
  push:
    branches:
      - master

jobs: <span class="token comment"># 構建的任務，一個工作流有多個構建任務，</span>
  build-and-deploy:
    runs-on: ubuntu-latest <span class="token comment"># 在什麼伺服器上面執行這些任務，這裡使用最新版本的ubuntu</span>
    
    steps: <span class="token comment"># 構建任務的步驟，一個任務可分為多個步驟</span>
      <span class="token comment"># 切換分支</span>
      - name: Checkout
        uses: actions/checkout@v4
      <span class="token comment"># 步驟2 給當前伺服器安裝node</span>
      - name: use <span class="token function">node</span>
        uses: actions/setup-node@v3.8.1
        with:
          node-version: <span class="token number">18</span>
          cache: <span class="token string">&quot;yarn&quot;</span>
      <span class="token comment"># 步驟3 下載項目依賴    </span>
      - name: <span class="token function">install</span>
        run: <span class="token function">yarn</span> <span class="token function">install</span>
      <span class="token comment"># 步驟4 打包node項目</span>
      - name: build
        run: <span class="token function">yarn</span> build
      <span class="token comment"># 步驟5 部署項目到伺服器</span>
      - name: <span class="token function">ssh</span> deploy
        uses: easingthemes/ssh-deploy@v4.1.10
        with:
      <span class="token comment"># Private key part of an SSH key pair</span>
          SSH_PRIVATE_KEY: <span class="token variable">\${{ secrets.SSH_PRIVATE_KEY }</span><span class="token punctuation">}</span>
      <span class="token comment"># Remote host</span>
          REMOTE_HOST: <span class="token variable">\${{ secrets.REMOTE_HOST }</span><span class="token punctuation">}</span>
      <span class="token comment"># Remote user</span>
          REMOTE_USER: <span class="token variable">\${{ secrets.REMOTE_USER }</span><span class="token punctuation">}</span>
      <span class="token comment"># Source directory, path relative to \`$GITHUB_WORKSPACE\` root, eg: \`dist/\`</span>
          SOURCE: <span class="token string">&quot;/dist/&quot;</span>
      <span class="token comment"># Script to run on host machine before rsync</span>
          SCRIPT_BEFORE: <span class="token string">&quot;mkdir -p /data/docker_data/npm/data/sub.ven2s.cn&quot;</span>
      <span class="token comment"># Target directory</span>
          TARGET: <span class="token string">&quot;/data/docker_data/npm/data/sub.ven2s.cn/&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如果喜歡請分享此頁面-如有疑問請留言" tabindex="-1"><a class="header-anchor" href="#如果喜歡請分享此頁面-如有疑問請留言" aria-hidden="true">#</a> 如果喜歡請分享此頁面，如有疑問請留言</h2><figure><img src="`+u+'" alt="4" tabindex="0" loading="lazy"><figcaption>4</figcaption></figure>',23);function S(H,T){const a=l("RouterLink"),i=l("ExternalLinkIcon");return m(),v("div",null,[h,b(" more "),k,n("ul",null,[n("li",null,[n("p",null,[e("接觸GitHub Actions也有一段時間了，目前此博客正是使用GitHub Action "),s(a,{to:"/hello-world/#%E8%87%AA%E5%8B%95%E9%83%A8%E7%BD%B2%E5%88%B0%E5%85%AC%E9%96%8B%E5%80%89%E5%BA%AB"},{default:t(()=>[e("自動部署到GitHub托管")]),_:1}),e("的。今天我將詳細記錄將前端頁面成功部署到伺服器的操作方法，順便分享一些我自己的理解。在有空的時候再進一步完善（下班時間開始😭）。")])]),n("li",null,[n("p",null,[n("a",_,[e("GitHub Actions官方文檔"),s(i)]),e("：GitHub Actions允許您在GitHub存儲庫中自動化、自定義和執行軟件開發工作流。您可以發現、創建並共享操作以執行您喜歡的任何作業（包括CI/CD），並將操作合併到完全自定義的工作流中。")])]),y,n("li",null,[n("p",null,[e("本教程是在"),s(a,{to:"/nginx-proxy-manager/"},{default:t(()=>[e("《用Nginx Proxy Manager部署靜態網頁》")]),_:1}),e("基礎上延伸出的思路，省去了安裝node環境和各種依賴的步驟，直接在GitHub Action中部署前端。每次在本地對後端文件進行修正後，直接將前端發布到伺服器。起到一勞永逸的效果。")])])]),x,n("ul",null,[n("li",null,[e("示例分析，以"),s(a,{to:"/hello-world/#%E8%87%AA%E5%8B%95%E9%83%A8%E7%BD%B2%E5%88%B0GitHub%E6%89%98%E7%AE%A1"},{default:t(()=>[e("自動部署到GitHub托管")]),_:1}),e("為例，分析GitHub Action工作流程如下：")])]),E,n("ul",null,[n("li",null,[e("在 "),n("a",f,[A,s(i)]),e(" 專案中的 README 中，可以看到其主要配置名稱及用途如下。")])]),R])}const B=p(g,[["render",S],["__file","github-actions-deploy.html.vue"]]);export{B as default};
