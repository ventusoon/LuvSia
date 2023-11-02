const t=JSON.parse('{"key":"v-d7b7dc3e","path":"/code/github-actions-deploy.html","title":"利用GitHub Actions自动部署前端到服务器","lang":"zh-TW","frontmatter":{"icon":"code-compare","title":"利用GitHub Actions自动部署前端到服务器","date":"2023-10-17T05:56:43.000Z","author":["Ven2s"],"category":["linux"],"star":true,"sticky":true,"tag":["Server","FrontEnd"],"description":"Automatically deploying the Front End to the server using GitHub Actions GitHub Actions介绍及原理 接触 GitHub Actions 也有一段时间了，目前此blog就是利用 GitHub Action 自动部署到GitHub托管的。今天把此次前端页面成功部署到服务器端的操作方法详细记录下来，顺便按自己理解写些心得。抽空再码字完善（下班时间开工😭）。 GitHub Actions 官方文档：在 GitHub Actions 的仓库中自动化、自定义和执行软件开发工作流程。 您可以发现、创建和共享操作以执行您喜欢的任何作业（包括 CI/CD），并将操作合并到完全自定义的工作流程中。 通过文档可以看出 GitHub Action 其强大的代码管理、运行部署、测试推送等一体化自动发布部署功能，省去了大量的重复性工作。由于通过ssh客户端连接到服务器，直接进行前端部署，需要安装各种各样的依赖，很大程度上降低了服务器运行效率，且不易对代码进行修正。 本教程是在《用Nginx Proxy Manager部署静态网页》基础上延伸出的思路，省去了安装node环境和各种依赖的步骤，直接在 GitHub Action 中部署前端。每次在本地对后端文件进行修正后，直接将前端发布到服务器。起到一劳永逸的效果。","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://luvsia.com/zh/code/github-actions-deploy.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://luvsia.com/en/code/github-actions-deploy.html"}],["meta",{"property":"og:url","content":"https://luvsia.com/code/github-actions-deploy.html"}],["meta",{"property":"og:site_name","content":"風至萬始蘇"}],["meta",{"property":"og:title","content":"利用GitHub Actions自动部署前端到服务器"}],["meta",{"property":"og:description","content":"Automatically deploying the Front End to the server using GitHub Actions GitHub Actions介绍及原理 接触 GitHub Actions 也有一段时间了，目前此blog就是利用 GitHub Action 自动部署到GitHub托管的。今天把此次前端页面成功部署到服务器端的操作方法详细记录下来，顺便按自己理解写些心得。抽空再码字完善（下班时间开工😭）。 GitHub Actions 官方文档：在 GitHub Actions 的仓库中自动化、自定义和执行软件开发工作流程。 您可以发现、创建和共享操作以执行您喜欢的任何作业（包括 CI/CD），并将操作合并到完全自定义的工作流程中。 通过文档可以看出 GitHub Action 其强大的代码管理、运行部署、测试推送等一体化自动发布部署功能，省去了大量的重复性工作。由于通过ssh客户端连接到服务器，直接进行前端部署，需要安装各种各样的依赖，很大程度上降低了服务器运行效率，且不易对代码进行修正。 本教程是在《用Nginx Proxy Manager部署静态网页》基础上延伸出的思路，省去了安装node环境和各种依赖的步骤，直接在 GitHub Action 中部署前端。每次在本地对后端文件进行修正后，直接将前端发布到服务器。起到一劳永逸的效果。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-30T00:12:28.000Z"}],["meta",{"property":"article:author","content":"Ven2s"}],["meta",{"property":"article:tag","content":"Server"}],["meta",{"property":"article:tag","content":"FrontEnd"}],["meta",{"property":"article:published_time","content":"2023-10-17T05:56:43.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-30T00:12:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"利用GitHub Actions自动部署前端到服务器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-17T05:56:43.000Z\\",\\"dateModified\\":\\"2023-10-30T00:12:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ven2s\\"}]}"]]},"headers":[{"level":2,"title":"GitHub Actions介绍及原理","slug":"github-actions介绍及原理","link":"#github-actions介绍及原理","children":[]},{"level":2,"title":"实战演练","slug":"实战演练","link":"#实战演练","children":[{"level":3,"title":"在服务器端配置密钥","slug":"在服务器端配置密钥","link":"#在服务器端配置密钥","children":[]},{"level":3,"title":"项目中设置仓库密钥","slug":"项目中设置仓库密钥","link":"#项目中设置仓库密钥","children":[]},{"level":3,"title":"发布部署文件到远端","slug":"发布部署文件到远端","link":"#发布部署文件到远端","children":[]}]},{"level":2,"title":"如果喜欢请分享此页面，如有疑问请按F5，再进行评论。哈哈","slug":"如果喜欢请分享此页面-如有疑问请按f5-再进行评论。哈哈","link":"#如果喜欢请分享此页面-如有疑问请按f5-再进行评论。哈哈","children":[]}],"git":{"createdTime":1698620985000,"updatedTime":1698624748000,"contributors":[{"name":"ventusoon","email":"sia@ik.me","commits":2}]},"readingTime":{"minutes":5.68,"words":1705},"filePathRelative":"code/github-actions-deploy.md","localizedDate":"2023年10月17日","excerpt":"<blockquote>\\n<p><em><strong>Automatically deploying the Front End to the server using GitHub Actions</strong></em></p>\\n</blockquote>\\n<h2> GitHub Actions介绍及原理</h2>\\n<ul>\\n<li>\\n<p>接触 <strong>GitHub Actions</strong> 也有一段时间了，目前此blog就是利用 <strong>GitHub Action</strong> <a href=\\"/hello-world/#%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E5%88%B0%E5%85%AC%E5%BC%80%E4%BB%93%E5%BA%93\\" target=\\"blank\\">自动部署到GitHub托管</a>的。今天把此次前端页面成功部署到服务器端的操作方法详细记录下来，顺便按自己理解写些心得。抽空再码字完善（下班时间开工😭）。</p>\\n</li>\\n<li>\\n<p><a href=\\"https://docs.github.com/zh/actions\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">GitHub Actions 官方文档</a>：在 GitHub Actions 的仓库中自动化、自定义和执行软件开发工作流程。 您可以发现、创建和共享操作以执行您喜欢的任何作业（包括 CI/CD），并将操作合并到完全自定义的工作流程中。</p>\\n</li>\\n<li>\\n<p>通过文档可以看出 <strong>GitHub Action</strong> 其强大的代码管理、运行部署、测试推送等一体化自动发布部署功能，省去了大量的重复性工作。由于通过ssh客户端连接到服务器，直接进行前端部署，需要安装各种各样的依赖，很大程度上降低了服务器运行效率，且不易对代码进行修正。</p>\\n</li>\\n<li>\\n<p>本教程是在<a href=\\"/nginx-proxy-manager/\\" target=\\"blank\\">《用Nginx Proxy Manager部署静态网页》</a>基础上延伸出的思路，省去了安装node环境和各种依赖的步骤，直接在 <strong>GitHub Action</strong> 中部署前端。每次在本地对后端文件进行修正后，直接将前端发布到服务器。起到一劳永逸的效果。</p>\\n</li>\\n</ul>","autoDesc":true}');export{t as data};
