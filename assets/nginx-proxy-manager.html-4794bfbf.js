const e=JSON.parse('{"key":"v-0a098e32","path":"/code/nginx-proxy-manager.html","title":"用NPM部署靜態網頁","lang":"zh-TW","frontmatter":{"icon":"simple-icons:nginxproxymanager","title":"用NPM部署靜態網頁","date":"2023-04-09T17:45:48.000Z","author":["Ven2s"],"tag":["伺服器","前端"],"category":["Code"],"description":"Deploying Static Web Pages with Nginx Proxy Manager 搭建的 web 服务因使用了 宝塔面板 抽风不能 CDN ，导致访问失败，一气之下重装了系统，重新搭建了所有 web，并使用 Nginx Proxy Manager 管理 web 服务。 某些 web 服务需要在 Nginx Proxy Manager 的目录下构建，故在此记录下部署静态网页的流程备忘。","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://luvsia.com/zh/code/nginx-proxy-manager.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://luvsia.com/en/code/nginx-proxy-manager.html"}],["meta",{"property":"og:url","content":"https://luvsia.com/code/nginx-proxy-manager.html"}],["meta",{"property":"og:site_name","content":"風至萬始蘇"}],["meta",{"property":"og:title","content":"用NPM部署靜態網頁"}],["meta",{"property":"og:description","content":"Deploying Static Web Pages with Nginx Proxy Manager 搭建的 web 服务因使用了 宝塔面板 抽风不能 CDN ，导致访问失败，一气之下重装了系统，重新搭建了所有 web，并使用 Nginx Proxy Manager 管理 web 服务。 某些 web 服务需要在 Nginx Proxy Manager 的目录下构建，故在此记录下部署静态网页的流程备忘。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-11T18:55:57.000Z"}],["meta",{"property":"article:author","content":"Ven2s"}],["meta",{"property":"article:tag","content":"伺服器"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:published_time","content":"2023-04-09T17:45:48.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-11T18:55:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用NPM部署靜態網頁\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-09T17:45:48.000Z\\",\\"dateModified\\":\\"2023-11-11T18:55:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ven2s\\"}]}"]]},"headers":[{"level":2,"title":"搭建步骤","slug":"搭建步骤","link":"#搭建步骤","children":[{"level":3,"title":"一、安装 Docker 及 Docker-compose","slug":"一、安装-docker-及-docker-compose","link":"#一、安装-docker-及-docker-compose","children":[]},{"level":3,"title":"二、安装 Nginx Proxy Manager 中文版","slug":"二、安装-nginx-proxy-manager-中文版","link":"#二、安装-nginx-proxy-manager-中文版","children":[]},{"level":3,"title":"三、创建静态网站目录，添加内容并反代","slug":"三、创建静态网站目录-添加内容并反代","link":"#三、创建静态网站目录-添加内容并反代","children":[]}]},{"level":2,"title":"大功告成","slug":"大功告成","link":"#大功告成","children":[]}],"git":{"createdTime":1698620985000,"updatedTime":1699728957000,"contributors":[{"name":"ventusoon","email":"sia@ik.me","commits":6}]},"readingTime":{"minutes":1.6,"words":480},"filePathRelative":"code/nginx-proxy-manager.md","localizedDate":"2023年4月9日","excerpt":"<blockquote>\\n<p><em><strong>Deploying Static Web Pages with Nginx Proxy Manager</strong></em></p>\\n</blockquote>\\n<ul>\\n<li>\\n<p>搭建的 <em>web</em> 服务因使用了 <em><strong><s>宝塔面板</s></strong></em> 抽风不能 <em>CDN</em> ，导致访问失败，一气之下重装了系统，重新搭建了所有 <em>web</em>，并使用 <em>Nginx Proxy Manager</em> 管理 <em>web</em> 服务。</p>\\n</li>\\n<li>\\n<p>某些 <em>web</em> 服务需要在 <em>Nginx Proxy Manager</em> 的目录下构建，故在此记录下部署静态网页的流程备忘。</p>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
