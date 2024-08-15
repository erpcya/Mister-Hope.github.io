"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9383],{30028:(e,a,n)=>{n.r(a),n.d(a,{default:()=>d});var t=n(68152);const s=(0,t.QD)("p",null,"Download JDK 8",-1),l={href:"https://www.mediafire.com/file/lp1mstbccgt15j7/jdk8.zip/file",target:"_blank",rel:"noopener noreferrer"},i=(0,t.QD)("li",null,[(0,t.QD)("p",null,"Once the file is downloaded, navigate to the file location and unzip it using the following command:")],-1),o=(0,t.IL)('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">unzip</span> jdk8.zip\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Switch to superuser (it will prompt for the password):</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Move the <strong>jdk8</strong> folder to <strong>/usr/local/</strong>:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mv</span> jdk8 /usr/local/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Grant permissions to the <strong>jdk8</strong> directory:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /usr/local/jdk8\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Set the environment variable to point to the jdk8 directory:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/jdk8\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Update the repositories</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or alternatively:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Install JDK 8</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> openjdk-8-jdk\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>To check the version</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>If the correct Java version is not in use, use the alternatives command to change it:</li></ul><p>i. Register the location where the JDK 8 directory was moved:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> update-alternatives <span class="token parameter variable">--install</span> /usr/bin/java <span class="token function">java</span> /usr/local/jdk8/bin/java <span class="token number">1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ii. Change the path:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> update-alternatives <span class="token parameter variable">--set</span> <span class="token function">java</span> /usr/local/jdk8/bin/java\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Installation Completed!</p>',23),r={},d=(0,n(42272).c)(r,[["render",function(e,a){const n=(0,t.E1)("ExternalLinkIcon");return(0,t.Wz)(),(0,t.An)("div",null,[(0,t.QD)("ol",null,[(0,t.QD)("li",null,[s,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.mY)("Go to the following "),(0,t.QD)("a",l,[(0,t.mY)("link"),(0,t.K2)(n)]),(0,t.mY)(".")])])]),i]),o])}]])},7220:(e,a,n)=>{n.r(a),n.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-6f674e3c","path":"/product/how-to-install/installing-jdk8.html","title":"How to Install JDK 8","lang":"en-US","frontmatter":{"title":"How to Install JDK 8","icon":"fa-brands fa-java","star":9,"sticky":9,"tag":["Product","ADempiere","Software"],"article":false,"author":"Jesús Albujas","description":"Download JDK 8 Go to the following link. Once the file is downloaded, navigate to the file location and unzip it using the following command:","head":[["link",{"rel":"alternate","hreflang":"es-es","href":"https://github.com/adempiere/adempiere-site.github.io/es/product/how-to-install/installing-jdk8.html"}],["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/product/how-to-install/installing-jdk8.html"}],["meta",{"property":"og:title","content":"How to Install JDK 8"}],["meta",{"property":"og:description","content":"Download JDK 8 Go to the following link. Once the file is downloaded, navigate to the file location and unzip it using the following command:"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-08-15T12:18:56.000Z"}],["meta",{"property":"article:author","content":"Jesús Albujas"}],["meta",{"property":"article:tag","content":"Product"}],["meta",{"property":"article:tag","content":"ADempiere"}],["meta",{"property":"article:tag","content":"Software"}],["meta",{"property":"article:modified_time","content":"2024-08-15T12:18:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"How to Install JDK 8\\",\\"description\\":\\"Download JDK 8 Go to the following link. Once the file is downloaded, navigate to the file location and unzip it using the following command:\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/rss.xml","title":" RSS Feed"}]]},"headers":[],"git":{"createdTime":1702993345000,"updatedTime":1723724336000,"contributors":[{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1},{"name":"Jesús Albujas","email":"134967453+jesusalbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.62,"words":186},"filePathRelative":"product/how-to-install/installing-jdk8.md","localizedDate":"December 19, 2023","excerpt":"<ol>\\n<li>\\n<p>Download JDK 8</p>\\n<ul>\\n<li>Go to the following <a href=\\"https://www.mediafire.com/file/lp1mstbccgt15j7/jdk8.zip/file\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">link</a>.</li>\\n</ul>\\n</li>\\n<li>\\n<p>Once the file is downloaded, navigate to the file location and unzip it using the following command:</p>\\n</li>\\n</ol>","autoDesc":true}')}}]);