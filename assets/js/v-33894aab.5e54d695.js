"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[35201],{83650:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(66252).uE)('<p>本案例展示了 Mr.Hope 个人编写的 screen 相关的 Vuex 模块。</p><h2 id="sreen-ts" tabindex="-1"><a class="header-anchor" href="#sreen-ts" aria-hidden="true">#</a> Sreen.ts</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../state&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SWState</span> <span class="token punctuation">{</span>\n  status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// service-worker 状态</span>\n  error<span class="token operator">?</span><span class="token operator">:</span> Error<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> swState<span class="token operator">:</span> SWState <span class="token operator">=</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> swModule<span class="token operator">:</span> Module<span class="token operator">&lt;</span>SWState<span class="token punctuation">,</span> BaseState<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  state<span class="token operator">:</span> swState<span class="token punctuation">,</span>\n  mutations<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/**\n     * <span class="token keyword">@description</span>: 设置 Service Worker 状态\n     *\n     * <span class="token keyword">@param</span> <span class="token parameter">state</span> swState\n     * <span class="token keyword">@param</span> <span class="token parameter">status</span> ServiceWorker状态\n     */</span>\n    <span class="token function">swState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> SWState<span class="token punctuation">,</span> status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n      state<span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token doc-comment comment">/**\n     * <span class="token keyword">@description</span>: 设置 Service Worker 错误\n     *\n     * <span class="token keyword">@param</span> <span class="token parameter">state</span> imagestate\n     * <span class="token keyword">@param</span> <span class="token parameter">error</span> 遇到的错误\n     */</span>\n    <span class="token function">swError</span><span class="token punctuation">(</span>state<span class="token operator">:</span> SWState<span class="token punctuation">,</span> error<span class="token operator">:</span> Error<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n      state<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">;</span>\n      state<span class="token punctuation">.</span>error <span class="token operator">=</span> error<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> swModule<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>本文件包含了完整的一份 state、数个 mutation 和一个 action。</p>',4),t={},p=(0,a(83744).Z)(t,[["render",function(n,s){return e}]])},35750:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-33894aab",path:"/code/vue/vuex/demo.html",title:"模块案例",lang:"zh-CN",frontmatter:{title:"模块案例",icon:"discover",category:["Vue"],tag:["Vuex","Demo"],summary:"本案例展示了 Mr.Hope 个人编写的 screen 相关的 Vuex 模块。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/vue/vuex/demo.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"模块案例"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"Vuex"}],["meta",{property:"article:tag",content:"Demo"}]]},excerpt:"<p>本案例展示了 Mr.Hope 个人编写的 screen 相关的 Vuex 模块。</p>\n",headers:[{level:2,title:"Sreen.ts",slug:"sreen-ts",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3}]},readingTime:{minutes:.43,words:129},filePathRelative:"code/vue/vuex/demo.md"}}}]);