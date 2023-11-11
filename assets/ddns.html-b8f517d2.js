import{_ as s,a as i,b as r,c as l,d,e as c,f as u,g as m,h,i as g}from"./10-baa5194e.js";import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as f,o as _,c as y,d as v,a as e,e as n,b as o,f as a}from"./app-5572de41.js";const b={},w=a('<blockquote><p><em><strong>Using DDNS and Port Forwarding to achieve remote access to devices on an internal network</strong></em></p></blockquote><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><ul><li><strong>Recently, I got into an AI drawing software called <em><code>stable-diffusion-webui</code></em>. Due to its heavy reliance on <em><code>GPU</code></em>, I could only use my home computer for this purpose (which has a 6-year-old GTX 1060😥). However, as I work remotely, I decided to explore the realm of Dynamic Domain Name System (DDNS) to achieve remote control of my home computer and other network devices.</strong></li></ul>',3),D=e("pre",null,[e("code",null,`![Z](/images/DDNS/Z.jpg ":smirk:")
![D](/images/DDNS/B.jpg ":smirk:")
![B](/images/DDNS/0.jpg ":smirk:")
`)],-1),k=e("li",null,[e("p",null,[e("strong",null,"This tutorial (memo) serves two purposes: to showcase achievements and to provide guidance for others with similar needs. Many tutorials I found didn't explain DDNS clearly or how to use it.")])],-1),I={href:"https://en.wikipedia.org/wiki/Dynamic_DNS",target:"_blank",rel:"noopener noreferrer"},N=e("em",null,"DDNS",-1),S=e("em",null,"IPv4",-1),x={href:"https://www.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},P=e("em",null,"Cloudflare",-1),C={href:"https://github.com/jeessy2/ddns-go",target:"_blank",rel:"noopener noreferrer"},A=e("em",null,"DDNS-GO",-1),G={href:"https://en.wikipedia.org/wiki/IP_address",target:"_blank",rel:"noopener noreferrer"},O=e("em",null,[e("code",null,"IP")],-1),z=e("em",null,[e("code",null,"IP")],-1),T=e("figure",null,[e("img",{src:s,alt:"RDP",tabindex:"0",loading:"lazy"}),e("figcaption",null,"You can see the latency here is very low")],-1),B=a('<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><ul><li><p><strong>Before we begin, let me briefly explain my home network layout. There is a weak current box with a fiber optic modem in bridge mode, a main router responsible for dialing, a <em><code>K2P</code></em> router in the bedroom in <em><code>AP</code></em> mode, an old laptop acting as a secondary router (secondary route), which is installed with <em><code>PVE</code></em>, <em><code>PVE</code></em> uses <em><code>openWRT</code></em>, and a desktop computer. I forgot to draw it on <em><code>visio</code></em>.</strong></p><figure><img src="'+u+'" alt="Network Layout" tabindex="0" loading="lazy"><figcaption>Network Layout Diagram</figcaption></figure></li><li><p><strong>Don&#39;t ask me why I don&#39;t use <em><code>DHCP</code></em> on <em><code>openWRT</code></em>. I tried many times but couldn&#39;t connect to the internet. It might be because the network port is bound to the <em><code>MAC</code></em> address. I don&#39;t know how to unbind it. So, I can only bind the <em><code>MAC</code></em> of my computer on the main router to connect to the internet. (Maybe it&#39;s not the reason; even binding the <em><code>WAN</code></em> port address on <em><code>openWRT</code></em> doesn&#39;t allow me to connect to the internet.) My home network environment is really too complicated😥</strong></p></li></ul><h2 id="let-s-begin" tabindex="-1"><a class="header-anchor" href="#let-s-begin" aria-hidden="true">#</a> Let&#39;s Begin</h2>',3),E={href:"https://github.com/jeessy2/ddns-go/releases",target:"_blank",rel:"noopener noreferrer"},M=e("em",null,[e("code",null,"DDNS-GO")],-1),V=a(`<p>Installation</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>ddns-go.exe <span class="token parameter variable">-s</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Uninstall</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>ddns-go.exe <span class="token parameter variable">-s</span> uninstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="DDNS-GO" tabindex="0" loading="lazy"><figcaption>DDNS-GO</figcaption></figure>',5),R=e("li",null,[e("p",null,[e("strong",null,[o("After installation, you can see the "),e("em",null,[e("code",null,"ddns-go")]),o(" service in the services, and set it to start automatically.")])]),e("figure",null,[e("img",{src:i,alt:"DDNS-GO Service",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Enable DDNS-GO service")])],-1),j={href:"http://127.0.0.1:9876",target:"_blank",rel:"noopener noreferrer"},L=e("em",null,[e("code",null,"http://127.0.0.1:9876")],-1),W=e("em",null,[e("code",null,"ddns-go")],-1),F=e("figure",null,[e("img",{src:r,alt:"DDNS-GO Configuration 1",tabindex:"0",loading:"lazy"}),e("figcaption",null,"DDNS-GO Page")],-1),U=a('<li><p><strong>Go to <em><code>cloudflare</code></em> and get the <em><code>API</code></em> token, which is the <em><code>Token</code></em> in the image below. Pay attention to selecting all regions for zone resources.</strong></p><p><img src="'+h+'" alt="Cloudflare Configuration 1" title="Cloudflare Configuration" loading="lazy"><br><img src="'+g+'" alt="Cloudflare Configuration 2" title="Make sure to select all regions" loading="lazy"></p></li>',1),q=e("em",null,[e("code",null,"DDNS-GO")],-1),H=e("em",null,[e("code",null,"IPv4")],-1),Z=e("em",null,[e("code",null,"IPv6")],-1),K=e("em",null,[e("code",null,"IPv6")],-1),X={href:"https://cf-ns.com/cdn-cgi/trace",target:"_blank",rel:"noopener noreferrer"},Y=e("em",null,[e("code",null,"IP")],-1),J=e("p",null,[e("img",{src:l,alt:"DDNS-GO Configuration 2",title:"IPv4",loading:"lazy"}),e("br"),e("img",{src:d,alt:"DDNS-GO Configuration 3",title:"IPv6",loading:"lazy"}),e("br"),e("img",{src:c,alt:"DDNS-GO Configuration 4",title:"Select whether to connect externally and set the access account password",loading:"lazy"})],-1),Q=e("li",null,[e("p",null,[e("strong",null,[o("After clicking saveOnce saved successfully, you will see the A record (IPv4 address) or AAAA record (IPv6 address) that you have resolved on Cloudflare in your domain's DNS service, and you can also see the successful resolution prompt in "),e("em",null,[e("code",null,"ddns-go")]),o(".")])])],-1),$=e("li",null,[e("p",null,[e("strong",null,"At this point, you have finally successfully resolved your dynamic IP. Set up port forwarding services on the main router and secondary router, and you can access your home devices anytime, anywhere.")])],-1),ee=e("h2",{id:"take-some-time-to-record-how-to-effectively-forward-ports-to-prevent-me-from-forgetting-again",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#take-some-time-to-record-how-to-effectively-forward-ports-to-prevent-me-from-forgetting-again","aria-hidden":"true"},"#"),o(" Take some time to record how to effectively forward ports to prevent me from forgetting again")],-1);function oe(te,ne){const t=f("ExternalLinkIcon");return _(),y("div",null,[w,v(" more "),D,e("ul",null,[k,e("li",null,[e("p",null,[e("a",I,[N,n(t)]),o(" (Dynamic Domain Name System) is a service that maps the dynamic "),S,o(" address of a home network to a fixed domain name resolution service.")])]),e("li",null,[e("p",null,[e("a",x,[P,n(t)]),o(" is a globally renowned DNS service provider.")])]),e("li",null,[e("p",null,[e("a",C,[A,n(t)]),o(" is an excellent DDNS resolution service tool. Many thanks to the author for solving my crucial problem.")])]),e("li",null,[e("p",null,[e("a",G,[o("Public IP"),n(t)]),o(" - I must say, the service level of the telecom company is impressive. They provided me with a public "),O,o(" within half a day. Although there are many ways to bypass the public "),z,o(" for accessing the internal network, through my testing, using more advanced methods like remote connection services and tunneling tools, the most straightforward method still offers the best cost-effectiveness and user experience.")]),T])]),B,e("ul",null,[e("li",null,[e("strong",null,[o("Download "),e("a",E,[M,n(t)]),o(" to your local machine and unzip it. Then, use administrator privileges to navigate to the root directory.")])])]),V,e("ul",null,[R,e("li",null,[e("p",null,[e("strong",null,[o("Open "),e("a",j,[L,n(t)]),o(", you can see that "),W,o(" supports many dynamic resolution service providers as shown below.")])]),F]),U,e("li",null,[e("p",null,[e("strong",null,[o("Return to "),q,o(" as shown in the image below. Configure it as shown below. If you have a public network, only select "),H,o(". If you don't have a public network, select "),Z,o(" (I have both, so I selected both; you can do the same without any issues). Enter your domain name after the hostname. For information on how to obtain "),K,o(", I'll do a detailed tutorial next time. (I recommend a handy "),e("a",X,[o("CF domestic API"),n(t)]),o(" that can accurately obtain your local "),Y,o(" address, regardless of whether you use a scientific Internet access tool).")])]),J]),Q,$]),ee])}const re=p(b,[["render",oe],["__file","ddns.html.vue"]]);export{re as default};
