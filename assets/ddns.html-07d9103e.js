const e=JSON.parse('{"key":"v-d46b396a","path":"/code/ddns.html","title":"Cloudflare + DDNS-GO + RDP","lang":"zh-TW","frontmatter":{"title":"Cloudflare + DDNS-GO + RDP","date":"2023-03-27T13:22:22.000Z","author":"Ven2s","summary":"***记录使用ddns实现内网穿透远程访问内网设备***","tag":["DDNS","network"],"description":"Using DDNS and Port forwarding to achieve remote access to devices on an internal network 前言 最近迷上了AI画图软件 stable-diffusion-webui ，由于它对 GPU 的依赖很大，我只能使用家里的电脑来炼丹（也就一张6年前的1060😥），奈何又在外地上班，只能走进了我一直望而却步的动态域名解析服务，来实现远程控制家中电脑，以及其他网络设备的目的。 写本篇教程（备忘录），一是彰显成就感，二是带给大家一些思路，让有相同需求的朋友少走弯路（毕竟我找了很多教程都没有说清楚DDNS到底是个什么，又要怎么使用）。 DDNS（全名：Dynamic Domain Name Server），动态域名服务，说人话就是将家中内网的动态 ipv4 地址映射到一个固定的域名解析服务上。 Cloudflare 全球知名的DNS服务商。 DDNS-GO 超好用的DDNS解析服务工具。感谢作者大大解决了我最关键的问题。 公网 IP 不得不说电信的服务水平，半天时间真就给我开通了，这里就不说这玩意儿怎么用了，接触网络的人基本都知道，虽然现在有很多办法可以绕过公网 IP 来访问内网，但是通过我的测试，用了很多的远程连接服务和内网穿透工具，还是最原始的办法性价比更高，体验更是一流。 可以看到这里的延迟十分之低","head":[["meta",{"property":"og:url","content":"https://luvsia.com/code/ddns.html"}],["meta",{"property":"og:site_name","content":"風至萬始蘇"}],["meta",{"property":"og:title","content":"Cloudflare + DDNS-GO + RDP"}],["meta",{"property":"og:description","content":"Using DDNS and Port forwarding to achieve remote access to devices on an internal network 前言 最近迷上了AI画图软件 stable-diffusion-webui ，由于它对 GPU 的依赖很大，我只能使用家里的电脑来炼丹（也就一张6年前的1060😥），奈何又在外地上班，只能走进了我一直望而却步的动态域名解析服务，来实现远程控制家中电脑，以及其他网络设备的目的。 写本篇教程（备忘录），一是彰显成就感，二是带给大家一些思路，让有相同需求的朋友少走弯路（毕竟我找了很多教程都没有说清楚DDNS到底是个什么，又要怎么使用）。 DDNS（全名：Dynamic Domain Name Server），动态域名服务，说人话就是将家中内网的动态 ipv4 地址映射到一个固定的域名解析服务上。 Cloudflare 全球知名的DNS服务商。 DDNS-GO 超好用的DDNS解析服务工具。感谢作者大大解决了我最关键的问题。 公网 IP 不得不说电信的服务水平，半天时间真就给我开通了，这里就不说这玩意儿怎么用了，接触网络的人基本都知道，虽然现在有很多办法可以绕过公网 IP 来访问内网，但是通过我的测试，用了很多的远程连接服务和内网穿透工具，还是最原始的办法性价比更高，体验更是一流。 可以看到这里的延迟十分之低"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-10-29T23:09:45.000Z"}],["meta",{"property":"article:author","content":"Ven2s"}],["meta",{"property":"article:tag","content":"DDNS"}],["meta",{"property":"article:tag","content":"network"}],["meta",{"property":"article:published_time","content":"2023-03-27T13:22:22.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-29T23:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cloudflare + DDNS-GO + RDP\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-27T13:22:22.000Z\\",\\"dateModified\\":\\"2023-10-29T23:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ven2s\\"}]}"]]},"headers":[{"level":2,"title":"开工","slug":"开工","link":"#开工","children":[]},{"level":2,"title":"正式开始","slug":"正式开始","link":"#正式开始","children":[]},{"level":2,"title":"抽时间，再把如何有效的进行端口转发记录下来，以防我这个狗脑子又忘了","slug":"抽时间-再把如何有效的进行端口转发记录下来-以防我这个狗脑子又忘了","link":"#抽时间-再把如何有效的进行端口转发记录下来-以防我这个狗脑子又忘了","children":[]}],"git":{"createdTime":1698620985000,"updatedTime":1698620985000,"contributors":[{"name":"ventusoon","email":"sia@ik.me","commits":1}]},"readingTime":{"minutes":3.76,"words":1129},"filePathRelative":"code/ddns.md","localizedDate":"2023年3月27日","excerpt":"<blockquote>\\n<p><em><strong>Using DDNS and Port forwarding to achieve remote access to devices on an internal network</strong></em></p>\\n</blockquote>\\n<h1> 前言</h1>\\n<ul>\\n<li>\\n<p><strong>最近迷上了AI画图软件 <em><code>stable-diffusion-webui</code></em> ，由于它对 <em><code>GPU</code></em> 的依赖很大，我只能使用家里的电脑来炼丹（也就一张6年前的1060😥），奈何又在外地上班，只能走进了我一直望而却步的动态域名解析服务，来实现远程控制家中电脑，以及其他网络设备的目的。</strong></p>\\n<p><img src=\\"/images/DDNS/Z.jpg\\" alt=\\"Z\\" title=\\":smirk:\\" loading=\\"lazy\\"><br>\\n<img src=\\"/images/DDNS/B.jpg\\" alt=\\"D\\" title=\\":smirk:\\" loading=\\"lazy\\"><br>\\n<img src=\\"/images/DDNS/0.jpg\\" alt=\\"B\\" title=\\":smirk:\\" loading=\\"lazy\\"></p>\\n</li>\\n<li>\\n<p><strong>写本篇教程（备忘录），一是彰显成就感，二是带给大家一些思路，让有相同需求的朋友少走弯路（毕竟我找了很多教程都没有说清楚DDNS到底是个什么，又要怎么使用）。</strong></p>\\n</li>\\n<li>\\n<p><a href=\\"https://baike.baidu.com/item/ddns/670146\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><em>DDNS</em></a>（全名：<em>Dynamic Domain Name Server</em>），动态域名服务，说人话就是将家中内网的动态 <code>ipv4</code> 地址映射到一个固定的域名解析服务上。</p>\\n</li>\\n<li>\\n<p><a href=\\"https://www.cloudflare.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><em>Cloudflare</em></a> 全球知名的DNS服务商。</p>\\n</li>\\n<li>\\n<p><a href=\\"https://github.com/jeessy2/ddns-go\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><em>DDNS-GO</em></a> 超好用的DDNS解析服务工具。感谢作者大大解决了我最关键的问题。</p>\\n</li>\\n<li>\\n<p><a href=\\"https://baike.baidu.com/item/%E5%85%AC%E7%BD%91IP\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">公网 <em>IP</em></a> 不得不说电信的服务水平，半天时间真就给我开通了，这里就不说这玩意儿怎么用了，接触网络的人基本都知道，虽然现在有很多办法可以绕过公网 <em><code>IP</code></em> 来访问内网，但是通过我的测试，用了很多的远程连接服务和内网穿透工具，还是最原始的办法性价比更高，体验更是一流。</p>\\n<figure><img src=\\"/images/DDNS/1.png\\" alt=\\"RDP\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>可以看到这里的延迟十分之低</figcaption></figure>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
