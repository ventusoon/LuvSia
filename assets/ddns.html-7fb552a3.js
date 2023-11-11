const e=JSON.parse('{"key":"v-d46b396a","path":"/code/ddns.html","title":"記錄使用ddns實現內網穿透遠程訪問內網設備","lang":"zh-TW","frontmatter":{"icon":"pen-to-square","title":"記錄使用ddns實現內網穿透遠程訪問內網設備","date":"2023-03-27T13:22:22.000Z","author":["Ven2s"],"tag":["DDNS","家庭網路"],"category":["Home Network Layout"],"description":"Using DDNS and Port forwarding to achieve remote access to devices on an internal network 前言 最近迷上了AI画图软件 stable-diffusion-webui ，由于它对 GPU 的依赖很大，我只能使用家里的电脑来炼丹（也就一张6年前的1060😥），奈何又在外地上班，只能走进了我一直望而却步的动态域名解析服务，来实现远程控制家中电脑，以及其他网络设备的目的。","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://luvsia.com/zh/code/ddns.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://luvsia.com/en/code/ddns.html"}],["meta",{"property":"og:url","content":"https://luvsia.com/code/ddns.html"}],["meta",{"property":"og:site_name","content":"風至萬始蘇"}],["meta",{"property":"og:title","content":"記錄使用ddns實現內網穿透遠程訪問內網設備"}],["meta",{"property":"og:description","content":"Using DDNS and Port forwarding to achieve remote access to devices on an internal network 前言 最近迷上了AI画图软件 stable-diffusion-webui ，由于它对 GPU 的依赖很大，我只能使用家里的电脑来炼丹（也就一张6年前的1060😥），奈何又在外地上班，只能走进了我一直望而却步的动态域名解析服务，来实现远程控制家中电脑，以及其他网络设备的目的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-11T21:21:10.000Z"}],["meta",{"property":"article:author","content":"Ven2s"}],["meta",{"property":"article:tag","content":"DDNS"}],["meta",{"property":"article:tag","content":"家庭網路"}],["meta",{"property":"article:published_time","content":"2023-03-27T13:22:22.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-11T21:21:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"記錄使用ddns實現內網穿透遠程訪問內網設備\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-27T13:22:22.000Z\\",\\"dateModified\\":\\"2023-11-11T21:21:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ven2s\\"}]}"]]},"headers":[{"level":2,"title":"开工","slug":"开工","link":"#开工","children":[]},{"level":2,"title":"正式开始","slug":"正式开始","link":"#正式开始","children":[]},{"level":2,"title":"抽时间，再把如何有效的进行端口转发记录下来，以防我这个狗脑子又忘了","slug":"抽时间-再把如何有效的进行端口转发记录下来-以防我这个狗脑子又忘了","link":"#抽时间-再把如何有效的进行端口转发记录下来-以防我这个狗脑子又忘了","children":[]}],"git":{"createdTime":1698620985000,"updatedTime":1699737670000,"contributors":[{"name":"ventusoon","email":"sia@ik.me","commits":7}]},"readingTime":{"minutes":3.79,"words":1136},"filePathRelative":"code/ddns.md","localizedDate":"2023年3月27日","excerpt":"<blockquote>\\n<p><em><strong>Using DDNS and Port forwarding to achieve remote access to devices on an internal network</strong></em></p>\\n</blockquote>\\n<h1> 前言</h1>\\n<ul>\\n<li><strong>最近迷上了AI画图软件 <em><code>stable-diffusion-webui</code></em> ，由于它对 <em><code>GPU</code></em> 的依赖很大，我只能使用家里的电脑来炼丹（也就一张6年前的1060😥），奈何又在外地上班，只能走进了我一直望而却步的动态域名解析服务，来实现远程控制家中电脑，以及其他网络设备的目的。</strong></li>\\n</ul>\\n","autoDesc":true}');export{e as data};
