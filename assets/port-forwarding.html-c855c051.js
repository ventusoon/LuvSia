const e=JSON.parse('{"key":"v-14489725","path":"/en/code/port-forwarding.html","title":"記錄“複雜”的家庭內網端口轉發","lang":"en-US","frontmatter":{"icon":"pen-to-square","title":"記錄“複雜”的家庭內網端口轉發","date":"2023-03-29T02:23:52.000Z","author":["Ven2s"],"tag":["Port forwarding","Network"],"category":["Home Network Layout"],"description":"Internal network port forwarding 前言 在进行好上篇文章的所有操作后，通过远程 ping 域名，是可以 ping 通家里的 IPv4 地址的，但不知为何，通过域名+端口进行远程访问，是失败的，这说明很有可能是端口没有映射成功，于是我又 ping 了下端口，果然，状态显示是关闭了的。 😏 来到主路由上的设置，可以看到这是我对 openWRT 这个设备进行了端口映射，以及设置为 DMZ 主机。网上很多人说只要设置了 DMZ 主机，是可以不用设置端口映射的，经我测试，我这里的设备是行不通的，所以我依然进行了端口映射到 openWRT 。 其实在设置 openWRT 为端口映射的设备之前，我一直映射的是台式主机的内网地址。我的思路是，既然要在电脑上使用 stable-diffusion-webui ，那我肯定只需要映射外网端口到电脑主机的内网端口就行了，事实证明，由于我家里网络的复杂程度，这种思路是完全错误的，这也是导致了我频繁映射失败，而无法访问内网的直接原因，因为我跳过了电脑主机网关是 openWRT 这一情况。所以当我把映射设备改成 openWRT 后，一下就成功了。（当然， openWRT 上也必须要对端口进行映射，映射到电脑主机的内网地址） 综上，因为我自己大脑宕机，花了超过24个小时的时间来研究内网穿透，实际上就是一个小小的思路上的错误而导致的，这也是为什么我给标题的“复杂”二字加了引号。 😏 😏","head":[["link",{"rel":"alternate","hreflang":"zh-tw","href":"https://luvsia.com/code/port-forwarding.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://luvsia.com/zh/code/port-forwarding.html"}],["meta",{"property":"og:url","content":"https://luvsia.com/en/code/port-forwarding.html"}],["meta",{"property":"og:site_name","content":"SpringVen2s"}],["meta",{"property":"og:title","content":"記錄“複雜”的家庭內網端口轉發"}],["meta",{"property":"og:description","content":"Internal network port forwarding 前言 在进行好上篇文章的所有操作后，通过远程 ping 域名，是可以 ping 通家里的 IPv4 地址的，但不知为何，通过域名+端口进行远程访问，是失败的，这说明很有可能是端口没有映射成功，于是我又 ping 了下端口，果然，状态显示是关闭了的。 😏 来到主路由上的设置，可以看到这是我对 openWRT 这个设备进行了端口映射，以及设置为 DMZ 主机。网上很多人说只要设置了 DMZ 主机，是可以不用设置端口映射的，经我测试，我这里的设备是行不通的，所以我依然进行了端口映射到 openWRT 。 其实在设置 openWRT 为端口映射的设备之前，我一直映射的是台式主机的内网地址。我的思路是，既然要在电脑上使用 stable-diffusion-webui ，那我肯定只需要映射外网端口到电脑主机的内网端口就行了，事实证明，由于我家里网络的复杂程度，这种思路是完全错误的，这也是导致了我频繁映射失败，而无法访问内网的直接原因，因为我跳过了电脑主机网关是 openWRT 这一情况。所以当我把映射设备改成 openWRT 后，一下就成功了。（当然， openWRT 上也必须要对端口进行映射，映射到电脑主机的内网地址） 综上，因为我自己大脑宕机，花了超过24个小时的时间来研究内网穿透，实际上就是一个小小的思路上的错误而导致的，这也是为什么我给标题的“复杂”二字加了引号。 😏 😏"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-TW"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-11T18:29:50.000Z"}],["meta",{"property":"article:author","content":"Ven2s"}],["meta",{"property":"article:tag","content":"Port forwarding"}],["meta",{"property":"article:tag","content":"Network"}],["meta",{"property":"article:published_time","content":"2023-03-29T02:23:52.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-11T18:29:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"記錄“複雜”的家庭內網端口轉發\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-29T02:23:52.000Z\\",\\"dateModified\\":\\"2023-11-11T18:29:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ven2s\\"}]}"]]},"headers":[],"git":{"createdTime":1698956907000,"updatedTime":1699727390000,"contributors":[{"name":"ventusoon","email":"sia@ik.me","commits":4}]},"readingTime":{"minutes":2.92,"words":877},"filePathRelative":"en/code/port-forwarding.md","localizedDate":"March 29, 2023","excerpt":"<blockquote>\\n<p><em><strong>Internal network port forwarding</strong></em></p>\\n</blockquote>\\n<h1> 前言</h1>\\n<ul>\\n<li>\\n<p><strong>在进行好<a href=\\"/posts/ddns/\\" target=\\"blank\\">上篇</a>文章的所有操作后，通过远程 <em><code>ping</code></em> 域名，是可以 <em><code>ping</code></em> 通家里的 <em><code>IPv4</code></em> 地址的，但不知为何，通过域名+端口进行远程访问，是失败的，这说明很有可能是端口没有映射成功，于是我又 <a href=\\"https://tool.chinaz.com/port\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><em><code>ping</code></em></a> 了下端口，果然，状态显示是关闭了的。</strong></p>\\n<figure><img src=\\"/images/port-forwarding/1.png\\" alt=\\"1\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>😏</figcaption></figure>\\n</li>\\n<li>\\n<p><strong>来到主路由上的设置，可以看到这是我对 <em><code>openWRT</code></em> 这个设备进行了端口映射，以及设置为 <em><code>DMZ</code></em> 主机。网上很多人说只要设置了 <em><code>DMZ</code></em> 主机，是可以不用设置端口映射的，经我测试，我这里的设备是行不通的，所以我依然进行了端口映射到 <em><code>openWRT</code></em> 。</strong></p>\\n</li>\\n<li>\\n<p><strong>其实在设置 <em><code>openWRT</code></em> 为端口映射的设备之前，我一直映射的是台式主机的内网地址。我的思路是，既然要在电脑上使用 <em><code>stable-diffusion-webui</code></em> ，那我肯定只需要映射外网端口到电脑主机的内网端口就行了，事实证明，由于我家里网络的复杂程度，这种思路是完全错误的，这也是导致了我频繁映射失败，而无法访问内网的直接原因，因为我跳过了电脑主机网关是 <em><code>openWRT</code></em> 这一情况。所以当我把映射设备改成 <em><code>openWRT</code></em> 后，一下就成功了。（当然， <em><code>openWRT</code></em> 上也必须要对端口进行映射，映射到电脑主机的内网地址）</strong></p>\\n</li>\\n<li>\\n<p><strong>综上，因为我自己大脑宕机，花了超过24个小时的时间来研究内网穿透，实际上就是一个小小的思路上的错误而导致的，这也是为什么我给标题的“复杂”二字加了引号。</strong></p>\\n<figure><img src=\\"/images/port-forwarding/2.png\\" alt=\\"2\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>😏</figcaption></figure>\\n<figure><img src=\\"/images/port-forwarding/3.png\\" alt=\\"2\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>😏</figcaption></figure>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
