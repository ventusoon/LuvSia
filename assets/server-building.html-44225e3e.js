const e=JSON.parse('{"key":"v-e2a540b8","path":"/code/server-building.html","title":"从零开始的服务器搭建纪实","lang":"zh-TW","frontmatter":{"icon":"0","title":"从零开始的服务器搭建纪实","date":"2022-01-19T15:58:22.000Z","category":["建站"],"author":"Ventus","summary":"hello world","tag":["Server"],"description":"LuvSia Server Building 目录 准备工作 搭建思路 开始搭建 宝塔面板 X-UI Alist Transmission 1.Docker安装 2-1.普通安装 2-2.transmission web control Rclone Live-torrent Cloudflare WARP 后记 感谢","head":[["meta",{"property":"og:url","content":"https://luvsia.com/code/server-building.html"}],["meta",{"property":"og:site_name","content":"風至萬始蘇"}],["meta",{"property":"og:title","content":"从零开始的服务器搭建纪实"}],["meta",{"property":"og:description","content":"LuvSia Server Building 目录 准备工作 搭建思路 开始搭建 宝塔面板 X-UI Alist Transmission 1.Docker安装 2-1.普通安装 2-2.transmission web control Rclone Live-torrent Cloudflare WARP 后记 感谢"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-10-30T00:12:28.000Z"}],["meta",{"property":"article:author","content":"Ventus"}],["meta",{"property":"article:tag","content":"Server"}],["meta",{"property":"article:published_time","content":"2022-01-19T15:58:22.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-30T00:12:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从零开始的服务器搭建纪实\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-19T15:58:22.000Z\\",\\"dateModified\\":\\"2023-10-30T00:12:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ventus\\"}]}"]]},"headers":[{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[]},{"level":2,"title":"搭建思路","slug":"搭建思路","link":"#搭建思路","children":[]},{"level":2,"title":"开始搭建","slug":"开始搭建","link":"#开始搭建","children":[{"level":3,"title":"宝塔面板","slug":"宝塔面板","link":"#宝塔面板","children":[]},{"level":3,"title":"X-UI","slug":"x-ui","link":"#x-ui","children":[]},{"level":3,"title":"Alist","slug":"alist","link":"#alist","children":[]},{"level":3,"title":"Transmission","slug":"transmission","link":"#transmission","children":[]},{"level":3,"title":"Rclone","slug":"rclone","link":"#rclone","children":[]},{"level":3,"title":"Live-torrent","slug":"live-torrent","link":"#live-torrent","children":[]},{"level":3,"title":"Cloudflare WARP","slug":"cloudflare-warp","link":"#cloudflare-warp","children":[]}]},{"level":2,"title":"后记","slug":"后记","link":"#后记","children":[]},{"level":2,"title":"感谢","slug":"感谢","link":"#感谢","children":[]}],"git":{"createdTime":1698620985000,"updatedTime":1698624748000,"contributors":[{"name":"ventusoon","email":"sia@ik.me","commits":2}]},"readingTime":{"minutes":5.71,"words":1714},"filePathRelative":"code/server-building.md","localizedDate":"2022年1月19日","excerpt":"<p><em><strong>LuvSia</strong></em></p>\\n<p><em><strong>Server Building</strong></em></p>\\n<!--more-->\\n<ul>\\n<li><strong>目录</strong>\\n<ul>\\n<li><a href=\\"#%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C\\">准备工作</a></li>\\n<li><a href=\\"#%E6%90%AD%E5%BB%BA%E6%80%9D%E8%B7%AF\\">搭建思路</a></li>\\n<li><a href=\\"#%E5%BC%80%E5%A7%8B%E6%90%AD%E5%BB%BA\\">开始搭建</a>\\n<ul>\\n<li><a href=\\"#%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF\\">宝塔面板</a></li>\\n<li><a href=\\"#x-ui\\">X-UI</a></li>\\n<li><a href=\\"#alist\\">Alist</a></li>\\n<li><a href=\\"#transmission\\">Transmission</a>\\n<ul>\\n<li><a href=\\"#1docker%E5%AE%89%E8%A3%85\\">1.Docker安装</a></li>\\n<li><a href=\\"#2-1%E6%99%AE%E9%80%9A%E5%AE%89%E8%A3%85\\">2-1.普通安装</a></li>\\n<li><a href=\\"#2-2transmission-web-control\\">2-2.transmission web control</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#rclone\\">Rclone</a></li>\\n<li><a href=\\"#live-torrent\\">Live-torrent</a></li>\\n<li><a href=\\"#cloudflare-warp\\">Cloudflare WARP</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E5%90%8E%E8%AE%B0\\">后记</a></li>\\n<li><a href=\\"#%E6%84%9F%E8%B0%A2\\">感谢</a></li>\\n</ul>","autoDesc":true}');export{e as data};
