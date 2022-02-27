"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[29729],{13345:(n,a,e)=>{e.r(a),e.d(a,{default:()=>l});const s=(0,e(66252).uE)('<h1 id="uniq" tabindex="-1"><a class="header-anchor" href="#uniq" aria-hidden="true">#</a> uniq</h1><p><code>uniq</code> 用于过滤掉重复的行，该命令只对排序后的文件有效。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>a\na\nb\na\nb\nc\nd\nc\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>对该文件进行排序后，再过滤掉重复的行。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span>\na\nb\nc\nd\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p><code>-c</code> 参数会显示每行一共出现了多少次。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span> -c\n    <span class="token number">3</span> a\n    <span class="token number">2</span> b\n    <span class="token number">2</span> c\n    <span class="token number">1</span> d\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',9),r={},l=(0,e(83744).Z)(r,[["render",function(n,a){return s}]])},11518:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-5d7f4d48",path:"/linux/bash/archives/commands/uniq.html",title:"uniq",lang:"zh-CN",frontmatter:{summary:"uniq uniq 用于过滤掉重复的行，该命令只对排序后的文件有效。 下面是 example.txt 文件的内容。 对该文件进行排序后，再过滤掉重复的行。 参数 -c 参数会显示每行一共出现了多少次。",head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/bash/archives/commands/uniq.html"}],["meta",{property:"og:title",content:"uniq"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:"",headers:[{level:2,title:"参数",slug:"参数",children:[]}],git:{createdTime:1591204114e3,updatedTime:1611730734e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:2}]},readingTime:{minutes:.33,words:98},filePathRelative:"linux/bash/archives/commands/uniq.md"}}}]);