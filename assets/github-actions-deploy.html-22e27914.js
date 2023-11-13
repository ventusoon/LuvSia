import{_ as d,a as c,b as r,c as u}from"./4-8d3c8c2c.js";import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as m,c as v,f as b,a as n,b as e,d as s,w as t,e as o}from"./app-6609e86b.js";const g={},h=n("blockquote",null,[n("p",null,[n("em",null,[n("strong",null,"使用GitHub Actions自动部署前端到服务器")])])],-1),k=n("h2",{id:"github-actions介绍及原理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github-actions介绍及原理","aria-hidden":"true"},"#"),e(" GitHub Actions介绍及原理")],-1),_=n("strong",null,"GitHub Actions",-1),y=n("strong",null,"GitHub Action",-1),x={href:"https://docs.github.com/zh/actions",target:"_blank",rel:"noopener noreferrer"},E=n("li",null,[n("p",null,[e("通过文档可以看出 "),n("strong",null,"GitHub Action"),e(" 其强大的代码管理、运行部署、测试推送等一体化自动发布部署功能，省去了大量的重复性工作。由于通过ssh客户端连接到服务器，直接进行前端部署，需要安装各种各样的依赖，很大程度上降低了服务器运行效率，且不易对代码进行修正。")])],-1),f=n("strong",null,"GitHub Action",-1),A=n("details",null,[n("summary",null," GitHub Action 成功示图 "),n("figure",null,[n("img",{src:d,alt:"GitHub Action成功界面",tabindex:"0",loading:"lazy"}),n("figcaption",null,"GitHub Action成功界面")])],-1),R=n("strong",null,"GitHub Action",-1),S=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>name: luvsia-hugo-blog-autodeploy <span class="token comment"># 工作流程名称，自行命名</span>

on:
  push: <span class="token comment"># 什么时候请求触发</span>
    branches:
      - main  <span class="token comment"># 作用分支，这里是main，也可是master</span>
  pull_request:

jobs: <span class="token comment"># 将工作流文件中运行的所有任务分组在一起</span>
  deploy:
    runs-on: ubuntu-latest
    concurrency:
      group: <span class="token variable">\${{ github.workflow }</span><span class="token punctuation">}</span>-<span class="token variable">\${{ github.ref }</span><span class="token punctuation">}</span>
    steps:
      - uses: actions/checkout@v2
        with:               <span class="token comment"># 如果你安装主题时用的是git submodule add</span>
          submodules: <span class="token boolean">true</span>  <span class="token comment"># 那么这三行不必注释掉，这一行填写 true</span>
          fetch-depth: <span class="token number">0</span>    <span class="token comment"># Fetch all history for .GitInfo and .Lastmod</span>

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: <span class="token string">&#39;latest&#39;</span>  <span class="token comment"># 获取最新版本的hugo</span>
          extended: <span class="token boolean">true</span>          <span class="token comment"># 如果你使用的不是extended版本的hugo，将true改为false</span>

      - name: Build
        run: hugo   <span class="token comment"># 使用hugo构建静态网页</span>

      - name: Deploy to github
        uses: peaceiris/actions-gh-pages@v3
        if: <span class="token variable">\${{ github.ref == &#39;refs<span class="token operator">/</span>heads<span class="token operator">/</span>main&#39; }</span><span class="token punctuation">}</span>  <span class="token comment"># 注意填写main或者master</span>
        with:
          personal_token: <span class="token variable">\${{ secrets.PERSONAL_TOKEN }</span><span class="token punctuation">}</span> <span class="token comment"># 如果secret取了其他名称，将PERSONAL_TOKEN替换掉</span>
          external_repository: ventusoon/LuvSia <span class="token comment"># 填写远程 public 仓库 </span>
          publish_dir: ./public
          cname: luvsia.com        <span class="token comment"># 填写自定义域名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>按照示例分析，可以得出简单的 <strong>GitHub Actions</strong> 步骤图如下</li></ul><blockquote><p>Action</p><blockquote><p>1️⃣作用条件</p><blockquote><p>时间节点</p><p>分支</p></blockquote><p>2️⃣工作任务</p><blockquote><p>运行环境</p><p>步骤一</p><p>步骤二</p><p>步骤 N</p><p>直接发布到服务器/本地/托管页面</p></blockquote></blockquote></blockquote><h2 id="实战演练" tabindex="-1"><a class="header-anchor" href="#实战演练" aria-hidden="true">#</a> 实战演练</h2><ul><li><p>因为要部署到服务器端，所以要了解连接到服务器的方式，这里选择ssh连接，网上有很多教程也用了sftp连接，都可以。</p></li><li><p><strong>GitHub Actions</strong> 部署文件通常以 <code>xxx.yml</code> 命名，路径为项目根目录下 <code>/.github/workflows/xxx.yml</code> 。</p></li><li><p>在 <strong>GitHub</strong> 页面下编辑 <code>xxx.yml</code> ,可以发现右侧的<strong>应用商城</strong>中有很多特色Actions，因为是ssh连接，在这里选择评分较高的 <code>ssh-deploy</code> 应用，并使用最新版。</p></li></ul><details><summary> ssh-deploy 应用 </summary><figure><img src="`+c+'" alt="2" tabindex="0" loading="lazy"><figcaption>2</figcaption></figure></details>',6),H={href:"https://github.com/easingthemes/ssh-deploy",target:"_blank",rel:"noopener noreferrer"},T=n("img",{src:"https://img.shields.io/badge/GitHubAction-easingthemes/ssh--deploy-cyan?logo=github",alt:"ssh-deploy",loading:"lazy"},null,-1),G=o(`<table><thead><tr><th style="text-align:center;">配置名称</th><th style="text-align:center;">用途</th><th style="text-align:center;">示例</th></tr></thead><tbody><tr><td style="text-align:center;">SSH_PRIVATE_KEY</td><td style="text-align:center;">SSH密钥</td><td style="text-align:center;"><code>密钥应使用PEM格式生成</code></td></tr><tr><td style="text-align:center;">REMOTE_HOST</td><td style="text-align:center;">远程主机</td><td style="text-align:center;"><code>10.10.10.10</code></td></tr><tr><td style="text-align:center;">REMOTE_USER</td><td style="text-align:center;">用户</td><td style="text-align:center;"><code>root</code></td></tr><tr><td style="text-align:center;">REMOTE_PORT</td><td style="text-align:center;">端口</td><td style="text-align:center;"><code>默认22</code></td></tr><tr><td style="text-align:center;">SOURCE</td><td style="text-align:center;">源，需要部署的内容</td><td style="text-align:center;"><code>/dist</code></td></tr><tr><td style="text-align:center;">TARGET</td><td style="text-align:center;">对象，要部署的路径</td><td style="text-align:center;"><code>/data/docker_data/npm/data/sub.ven2s.cn/</code></td></tr><tr><td style="text-align:center;">ARGS</td><td style="text-align:center;">传递给rsync（同步时）的参数</td><td style="text-align:center;"><code>-avz --delete</code></td></tr><tr><td style="text-align:center;">SSH_CMD_ARGS</td><td style="text-align:center;">一组ssh参数，它们必须以-o为前缀，用逗号分隔</td><td style="text-align:center;"><code>-o SomeArgument=no，-o SomeOtherArgument=5</code></td></tr><tr><td style="text-align:center;">EXCLUDE</td><td style="text-align:center;">要排除的路径，用逗号分隔</td><td style="text-align:center;"><code>/dist/, /node_modules/</code></td></tr><tr><td style="text-align:center;">SCRIPT_BEFORE</td><td style="text-align:center;">在同步之前在主机上运行的脚本</td><td style="text-align:center;"><code>mkdir -p /data/docker_data/npm/data/sub.ven2s.cn</code></td></tr><tr><td style="text-align:center;">SCRIPT_AFTER</td><td style="text-align:center;">在同步之后在主机上运行的脚本</td><td style="text-align:center;"><code>reboot</code></td></tr></tbody></table><ul><li>做好以上前期工作，现在可以开始操作了</li></ul><h3 id="在服务器端配置密钥" tabindex="-1"><a class="header-anchor" href="#在服务器端配置密钥" aria-hidden="true">#</a> 在服务器端配置密钥</h3><ul><li>在 <code>root</code> 目录下，输入</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>ssh<span class="token operator">-</span>keygen <span class="token operator">-</span>m PEM <span class="token operator">-</span>t rsa <span class="token operator">-</span>b <span class="token number">4096</span>

# 生成密钥文件，连续按下两次回车。
# 请注意：您不应该为您生成的私钥设置密码（将其保留为空）。因为 rsync ssh（用于部署）不支持将私钥密码作为命令行参数输入。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>此时， <code>/root/.ssh/</code> 下生成了私钥文件 <code>id_dsa</code> 、公钥文件<code>id_dsa.pub</code> ，根据公钥文件生成<code>authorized_keys</code> ，并给以上三个文件分别设置权限。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cat <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>id_rsa<span class="token punctuation">.</span>pub <span class="token operator">&gt;&gt;</span> <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>chmod <span class="token number">600</span> <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>chmod <span class="token number">600</span> <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>id_rsa<span class="token punctuation">.</span>pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>chmod <span class="token number">600</span> <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>此时，客观上服务器端的工作就完成了，如果连接中遇到各种错误提示，请自行 <strong>goggle</strong> ，这里就不赘述了。</li></ul><h3 id="项目中设置仓库密钥" tabindex="-1"><a class="header-anchor" href="#项目中设置仓库密钥" aria-hidden="true">#</a> 项目中设置仓库密钥</h3><ul><li>说来真是坑，最开始把<strong>仓库密钥</strong>错填到<strong>代码空间机密</strong>中，一直连接不上，我还以为是服务器的问题，前天甚至弄恍惚了，不小心 <code>rm -rf /</code> 了......</li></ul><details><summary> 仓库机密在GitHub项目中设置的位置 </summary><figure><img src="`+r+`" alt="3" tabindex="0" loading="lazy"><figcaption>3</figcaption></figure></details><ul><li>在服务器中 <code>cat</code> 密钥，将所有内容复制到上图的 <strong>SSH_PRIVATE_KEY</strong> 中，并填入服务器IP到 <strong>REMOTE_HOST</strong> ，填入 <code>root</code> 到 <strong>REMOTE_USER</strong>。（或者直接在yml文件中填入 <strong>&quot;root&quot;</strong> ）</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>cat <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>REMOTE_USER<span class="token operator">:</span> <span class="token string">&quot;root&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="发布部署文件到远端" tabindex="-1"><a class="header-anchor" href="#发布部署文件到远端" aria-hidden="true">#</a> 发布部署文件到远端</h3><ul><li>我把自动发布nginx-proxy-manager静态页面的文件po在下面，请根据自身的运行环境和依赖进行修改配置即可。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前工作流的名称</span>
name: sub-web-deploy
on:
  push:
    branches:
      - master

jobs: <span class="token comment"># 构建的任务，一个工作流有多个构建任务，</span>
  build-and-deploy:
    runs-on: ubuntu-latest <span class="token comment"># 在什么服务器上面执行这些任务，这里使用最新版本的ubuntu</span>
    
    steps: <span class="token comment"># 构建任务的步骤，一个任务可分为多个步骤</span>
      <span class="token comment"># 切换分支</span>
      - name: Checkout
        uses: actions/checkout@v4
      <span class="token comment"># 步骤2 给当前服务器安装node</span>
      - name: use <span class="token function">node</span>
        uses: actions/setup-node@v3.8.1
        with:
          node-version: <span class="token number">18</span>
          cache: <span class="token string">&quot;yarn&quot;</span>
      <span class="token comment"># 步骤3 下载项目依赖    </span>
      - name: <span class="token function">install</span>
        run: <span class="token function">yarn</span> <span class="token function">install</span>
      <span class="token comment"># 步骤4 打包node项目</span>
      - name: build
        run: <span class="token function">yarn</span> build
      <span class="token comment"># 步骤5 部署项目到服务器</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如果喜欢请分享此页面-如有疑问请留言" tabindex="-1"><a class="header-anchor" href="#如果喜欢请分享此页面-如有疑问请留言" aria-hidden="true">#</a> 如果喜欢请分享此页面，如有疑问请留言</h2><figure><img src="`+u+'" alt="4" tabindex="0" loading="lazy"><figcaption>4</figcaption></figure>',23);function O(q,B){const a=l("RouterLink"),i=l("ExternalLinkIcon");return m(),v("div",null,[h,b(" more "),k,n("ul",null,[n("li",null,[n("p",null,[e("接触 "),_,e(" 也有一段时间了，目前此blog就是利用 "),y,e(),s(a,{to:"/hello-world/#%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E5%88%B0%E5%85%AC%E5%BC%80%E4%BB%93%E5%BA%93"},{default:t(()=>[e("自动部署到GitHub托管")]),_:1}),e("的。今天把此次前端页面成功部署到服务器端的操作方法详细记录下来，顺便按自己理解写些心得。抽空再码字完善（下班时间开工😭）。")])]),n("li",null,[n("p",null,[n("a",x,[e("GitHub Actions 官方文档"),s(i)]),e("：在 GitHub Actions 的仓库中自动化、自定义和执行软件开发工作流程。 您可以发现、创建和共享操作以执行您喜欢的任何作业（包括 CI/CD），并将操作合并到完全自定义的工作流程中。")])]),E,n("li",null,[n("p",null,[e("本教程是在"),s(a,{to:"/nginx-proxy-manager/"},{default:t(()=>[e("《用Nginx Proxy Manager部署静态网页》")]),_:1}),e("基础上延伸出的思路，省去了安装node环境和各种依赖的步骤，直接在 "),f,e(" 中部署前端。每次在本地对后端文件进行修正后，直接将前端发布到服务器。起到一劳永逸的效果。")])])]),A,n("ul",null,[n("li",null,[e("示例分析，以"),s(a,{to:"/hello-world/#%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E5%88%B0GitHub%E6%89%98%E7%AE%A1"},{default:t(()=>[e("自动部署到GitHub托管")]),_:1}),e("为例，分析 "),R,e(" 工作流程如下")])]),S,n("ul",null,[n("li",null,[e("在"),n("a",H,[T,s(i)]),e("项目中的 README 中，可以看到其主要配置名称及用途如下。")])]),G])}const w=p(g,[["render",O],["__file","github-actions-deploy.html.vue"]]);export{w as default};
