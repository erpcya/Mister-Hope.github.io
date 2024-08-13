"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8961],{30816:(e,a,n)=>{n.r(a),n.d(a,{default:()=>W});var s=n(68152);const t=(0,s.IL)('<p>A Script Callout (also known as Callout) is a mechanism that allows developers and advanced users to customize and extend the system&#39;s functionality.</p><p>A Script Callout is a piece of code that executes in response to a specific event in ADempiere, such as:</p><ul><li>When saving a record</li><li>When validating a field</li><li>When processing a document</li><li>When performing a specific action in a window</li></ul><p>Script Callouts are a powerful way to customize ADempiere without the need to modify the system&#39;s source code, making it easier to implement specific user requirements.</p><h2 id="variables-and-parameters" tabindex="-1"><a class="header-anchor" href="#variables-and-parameters" aria-hidden="true">#</a> Variables and Parameters</h2><p>Within the script, you can use:</p><ul><li>Window context variables start with the prefix <code>W_</code>.</li><li>Login context variables start with the prefix <code>G_</code>.</li><li>Parameters for callouts start with the prefix <code>A_</code>: <ul><li><code>A_WindowNo</code>: The number of the window from which the callout is invoked.</li><li><code>A_Tab</code>: The current tab.</li><li><code>A_Field</code>: The field being interacted with.</li><li><code>A_Value</code>: The current value of the field.</li><li><code>A_OldValue</code>: The previous value of the field.</li><li><code>A_Ctx</code>: The current context of the callout.</li></ul></li></ul><h2 id="scripting-languages-and-syntax" tabindex="-1"><a class="header-anchor" href="#scripting-languages-and-syntax" aria-hidden="true">#</a> Scripting Languages and Syntax</h2>',8),l={href:"https://groovy-lang.org/index.html",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.jython.org/",target:"_blank",rel:"noopener noreferrer"},i={href:"https://beanshell.github.io/manual/contents.html",target:"_blank",rel:"noopener noreferrer"},r=(0,s.IL)('<p>When creating the rule, you must set the <strong>Code</strong> field as follows, depending on the language you are using:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>beanshell:YourCalloutName\ngroovy:YourCalloutName\njython:YourCalloutName\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To call a script from a Callout, use the following example syntax:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@script:beanshell:YourCalloutName\n@script:groovy:YourCalloutName\n@script:jython:YourCalloutName\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Set the Event Type to Callout and the Rule Type to JSR 223 Scripting APIs.</li></ul><h2 id="create-rule" tabindex="-1"><a class="header-anchor" href="#create-rule" aria-hidden="true">#</a> Create Rule</h2><p>For this example, we will create a &quot;Hello World&quot; that will be printed to the console.</p><p><img src="/assets/img/community/developers-guide/CreateRule.png" alt="Create a Rule"></p><p>Format provided for copy and paste:</p><ul><li>Code: <code>beanshell:HelloWorld</code></li><li>Name: <code>HelloWorldInCallout</code></li><li>Event Type: <code>Callout</code></li><li>Rule Type: <code>JSR 223 Scripting APIs</code></li><li>Script:</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World ADempiere&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nresult <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configure-callout-from-table-and-column" tabindex="-1"><a class="header-anchor" href="#configure-callout-from-table-and-column" aria-hidden="true">#</a> Configure Callout from <code>Table and Column</code></h2><p>To call the callout, go to the <strong>Table and Column</strong> window, find the desired table, go to the <strong>Column</strong> tab, and fill in the <strong>Callout</strong> field at the end.</p><p>For this example, the callout will be placed in the <strong>A_Asset</strong> table (Fixed Asset), in the <strong>M_Product_ID</strong> column (Product).</p><p><img src="/assets/img/community/developers-guide/CalloutInColumn.png" alt="Callout In Column"></p>',15),p={class:"hint-container note"},c=(0,s.QD)("p",{class:"hint-container-title"},"Note",-1),u=(0,s.QD)("strong",null,"Callout",-1),d={href:"https://www.adempiere.io/community/wiki/developers-guide/script-callout.html#lenguajes-de-scripting",target:"_blank",rel:"noopener noreferrer"},m=(0,s.QD)("p",null,[(0,s.mY)("This Callout will be triggered when a product is selected in the "),(0,s.QD)("strong",null,"Fixed Assets"),(0,s.mY)(" window:")],-1),h=(0,s.QD)("p",null,[(0,s.QD)("img",{src:"/assets/img/community/developers-guide/SelectProductInAsset.png",alt:"Product in Asset"})],-1),g=(0,s.QD)("p",null,'In the console, we will see our "Hello World"',-1),v=(0,s.QD)("p",null,[(0,s.QD)("img",{src:"/assets/img/community/developers-guide/HelloWorld.png",alt:"Hello World"})],-1),k=(0,s.QD)("strong",null,"Callout",-1),f=(0,s.QD)("strong",null,"Rules",-1),b=(0,s.QD)("strong",null,"Event Type",-1),w=(0,s.IL)('<h2 id="variable-result" tabindex="-1"><a class="header-anchor" href="#variable-result" aria-hidden="true">#</a> Variable Result</h2><p>The <strong>result</strong> variable must be assigned within the Callout context to define the message or result that will be returned after executing the Callout logic. This variable is used to indicate error messages, warnings, or information that should be displayed to the user.</p><p>The line <code>result = &quot;&quot;;</code> in the script:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World ADempiere&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nresult <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Is assigning an empty value to <strong>result</strong>. This means that no error or warning message is being returned to the user. If you need to return a specific message, you should assign it to result as shown:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>result <span class="token operator">=</span> <span class="token string">&quot;Custom message for the user&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>When the Callout is triggered, it shows the message:</p><p><img src="/assets/img/community/developers-guide/CustomMessage.png" alt="Message to the User"></p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><ul><li>When selecting a <strong>Product</strong> in the <strong>Fixed Asset</strong> window, the content of the <strong>Code</strong> field in the <strong>Product</strong> window should be automatically copied to the <strong>Code</strong> field in the <strong>Fixed Asset</strong> window.</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>compiere<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">DB</span></span><span class="token punctuation">;</span>\n<span class="token class-name">String</span> value <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n<span class="token class-name">String</span> productType<span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">A_Tab</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">&quot;M_Product_ID&quot;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> productId <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token class-name">A_Tab</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">&quot;M_Product_ID&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;SELECT Value FROM M_Product WHERE M_Product_ID = ?&quot;</span><span class="token punctuation">;</span>\n    value <span class="token operator">=</span> <span class="token constant">DB</span><span class="token punctuation">.</span><span class="token function">getSQLValueString</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> sql<span class="token punctuation">,</span> productId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> value <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">A_Tab</span><span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">&quot;Value&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nresult <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><video width="640" height="360" controls><source src="/assets/img/community/developers-guide/CalloutInProduct.mp4" type="video/mp4"></video><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',13),y=(0,s.QD)("li",null,[(0,s.QD)("a",{href:"a"},"Script ModelValidatorLogin")],-1),C=(0,s.QD)("li",null,[(0,s.QD)("a",{href:"script-modelvalidator"},"Script ModelValidator")],-1),x=(0,s.QD)("li",null,[(0,s.QD)("a",{href:"a"},"Rule Engine Implementation")],-1),D={href:"http://scripting.dev.java.net/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://wiki.adempiere.net/ZH/Case-Study-01-Journal-31",target:"_blank",rel:"noopener noreferrer"},A={},W=(0,n(42272).c)(A,[["render",function(e,a){const n=(0,s.E1)("ExternalLinkIcon"),A=(0,s.E1)("RouterLink");return(0,s.Wz)(),(0,s.An)("div",null,[t,(0,s.QD)("p",null,[(0,s.mY)("ADempiere now supports JARs for working with "),(0,s.QD)("a",l,[(0,s.mY)("Groovy"),(0,s.K2)(n)]),(0,s.mY)(", "),(0,s.QD)("a",o,[(0,s.mY)("Jython"),(0,s.K2)(n)]),(0,s.mY)(", and "),(0,s.QD)("a",i,[(0,s.mY)("Beanshell"),(0,s.K2)(n)]),(0,s.mY)(".")]),r,(0,s.QD)("div",p,[c,(0,s.QD)("p",null,[(0,s.mY)("To call the "),u,(0,s.mY)(", follow the structure previously explained in "),(0,s.QD)("a",d,[(0,s.mY)("Scripting Languages and Syntax"),(0,s.K2)(n)]),(0,s.mY)(".")])]),m,h,g,v,(0,s.QD)("ul",null,[(0,s.QD)("li",null,[(0,s.mY)("This "),k,(0,s.mY)(" can also be called from the "),(0,s.K2)(A,{to:"/community/wiki/developers-guide/script-process.html"},{default:(0,s.Ql)((()=>[(0,s.mY)("Report and Processes")])),_:1}),(0,s.mY)(" window. Just remember to set in the "),f,(0,s.mY)(" window which "),b,(0,s.mY)(" you are using to call this Rule Script.")])]),w,(0,s.QD)("ul",null,[(0,s.QD)("li",null,[(0,s.K2)(A,{to:"/community/wiki/developers-guide/script-process.html"},{default:(0,s.Ql)((()=>[(0,s.mY)("Script Process")])),_:1}),(0,s.mY)(" for event rule example from a Report & Process window.")]),y,C,x,(0,s.QD)("li",null,[(0,s.QD)("a",D,[(0,s.mY)("Java Scripting"),(0,s.K2)(n)])]),(0,s.QD)("li",null,[(0,s.K2)(A,{to:"/community/wiki/developers-guide/callout.html"},{default:(0,s.Ql)((()=>[(0,s.mY)("Callout")])),_:1})]),(0,s.QD)("li",null,[(0,s.QD)("a",S,[(0,s.mY)("Rule Engine / Script Callout / Script Process"),(0,s.K2)(n)]),(0,s.mY)(" - Chinese")])])])}]])},65920:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s=JSON.parse('{"key":"v-bcfd1298","path":"/community/wiki/developers-guide/script-callout.html","title":"Script Callout","lang":"en-US","frontmatter":{"title":"Script Callout","category":"Community","star":9,"sticky":9,"tag":["Wiki","Developer\'s Guide"],"article":false,"description":"A Script Callout (also known as Callout) is a mechanism that allows developers and advanced users to customize and extend the system\'s functionality. A Script Callout is a piece of code that executes in response to a specific event in ADempiere, such as: When saving a record When validating a field When processing a document When performing a specific action in a window","head":[["link",{"rel":"alternate","hreflang":"es-es","href":"https://github.com/adempiere/adempiere-site.github.io/es/community/wiki/developers-guide/script-callout.html"}],["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/developers-guide/script-callout.html"}],["meta",{"property":"og:title","content":"Script Callout"}],["meta",{"property":"og:description","content":"A Script Callout (also known as Callout) is a mechanism that allows developers and advanced users to customize and extend the system\'s functionality. A Script Callout is a piece of code that executes in response to a specific event in ADempiere, such as: When saving a record When validating a field When processing a document When performing a specific action in a window"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-08-13T16:43:15.000Z"}],["meta",{"property":"article:author","content":"ADempiere"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Developer\'s Guide"}],["meta",{"property":"article:modified_time","content":"2024-08-13T16:43:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Script Callout\\",\\"description\\":\\"A Script Callout (also known as Callout) is a mechanism that allows developers and advanced users to customize and extend the system\'s functionality. A Script Callout is a piece of code that executes in response to a specific event in ADempiere, such as: When saving a record When validating a field When processing a document When performing a specific action in a window\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"Variables and Parameters","slug":"variables-and-parameters","link":"#variables-and-parameters","children":[]},{"level":2,"title":"Scripting Languages and Syntax","slug":"scripting-languages-and-syntax","link":"#scripting-languages-and-syntax","children":[]},{"level":2,"title":"Create Rule","slug":"create-rule","link":"#create-rule","children":[]},{"level":2,"title":"Configure Callout from Table and Column","slug":"configure-callout-from-table-and-column","link":"#configure-callout-from-table-and-column","children":[]},{"level":2,"title":"Variable Result","slug":"variable-result","link":"#variable-result","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"git":{"createdTime":1692974476000,"updatedTime":1723567395000,"contributors":[{"name":"Jesús Albujas","email":"134967453+jesusalbujas@users.noreply.github.com","commits":1},{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.39,"words":717},"filePathRelative":"community/wiki/developers-guide/script-callout.md","localizedDate":"August 25, 2023","excerpt":"<p>A Script Callout (also known as Callout) is a mechanism that allows developers and advanced users to customize and extend the system\'s functionality.</p>\\n<p>A Script Callout is a piece of code that executes in response to a specific event in ADempiere, such as:</p>\\n<ul>\\n<li>When saving a record</li>\\n<li>When validating a field</li>\\n<li>When processing a document</li>\\n<li>When performing a specific action in a window</li>\\n</ul>","autoDesc":true}')}}]);