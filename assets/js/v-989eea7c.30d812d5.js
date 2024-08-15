"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3408],{72068:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var i=t(68152);const l=(0,i.IL)('<h2 id="what-is-a-model-validator" tabindex="-1"><a class="header-anchor" href="#what-is-a-model-validator" aria-hidden="true">#</a> What is a model validator?</h2><p>A model validator is java class that implements org.compiere.model.ModelValidator. It has two important (callback)methods (modelChange and docValidate) which are called on model change events and document events. The model validator register itself for certain ADempiere tables or documents to react on model changes (data changed, added or deleted) or document actions like complete, void etc. SaveProperties, Login, FactValidate, LoadPreferences are other methods in the ModelValidator interface.</p><h2 id="model-classes-vs-validators" tabindex="-1"><a class="header-anchor" href="#model-classes-vs-validators" aria-hidden="true">#</a> Model Classes vs Validators</h2><p>Use Model Validators on standard tables. Use Model Class for your custom tables. For example, If you need to change or enhance the business logic of an order(e.g. check if the selected shipping type is available for the selected destination) you shouldn&#39;t do it in the standard MClass MOrder. If you do so, you need to merge your customized MOrder-Class by hand everytime you upgrade ADempiere. If you use your own validator class for this the upgrade will be much easier.</p><ul><li>Don&#39;t customize Adempiere model classes – implement triggers for official tables in Model Validator</li><li>Use model classes (or Model Validator if preferred) for your customized tables</li><li>Don&#39;t generate X_ classes for official Adempiere tables – use general getter and setter from PO for custom columns</li></ul><h2 id="modelvalidator-and-methods" tabindex="-1"><a class="header-anchor" href="#modelvalidator-and-methods" aria-hidden="true">#</a> ModelValidator and Methods</h2><h3 id="model-change-events" tabindex="-1"><a class="header-anchor" href="#model-change-events" aria-hidden="true">#</a> Model change events</h3><p>Model Change events occur every time when data of an ADempiere db table is changed. There are events for data insertion (TYPE_BEFORE_NEW/TYPE_AFTER_NEW), change of data (TYPE_BEFORE_CHANGE/TYPE_AFTER_CHANGE) and deletion (TYPE_BEFORE_DELETE/TYPE_AFTER_DELETE).</p><h3 id="document-events" tabindex="-1"><a class="header-anchor" href="#document-events" aria-hidden="true">#</a> Document events</h3><p>Document events occur on the change of the document status. So you have BEFORE/AFTER CLOSE/REACTIVATE/ REVERSECORRECT/REVERSEACCRUAL/COMPLETE/PREPARE/VOID/POST</p><h3 id="login-event" tabindex="-1"><a class="header-anchor" href="#login-event" aria-hidden="true">#</a> Login Event</h3><p>It&#39;s called when a user log into Adempiere - you can log or restrict users to log in according to business rules.</p><h3 id="factsvalidate-event" tabindex="-1"><a class="header-anchor" href="#factsvalidate-event" aria-hidden="true">#</a> FactsValidate Event</h3><p>It&#39;s called when posting a document (accounting). You can change the facts being posted (similar to calling BEFORE_POST document event.</p><h3 id="loadpreferences-event" tabindex="-1"><a class="header-anchor" href="#loadpreferences-event" aria-hidden="true">#</a> LoadPreferences Event</h3><p>It&#39;s called after the adempiere preferences are loaded - useful to add context variables or things after log in.</p><h3 id="saveproperties-event" tabindex="-1"><a class="header-anchor" href="#saveproperties-event" aria-hidden="true">#</a> SaveProperties Event</h3><p>It&#39;s called when a user is saving properties - useful to restrict changes on properties file (Tools -&gt; Preferences).</p><h2 id="steps-to-create-and-register-a-model-validator" tabindex="-1"><a class="header-anchor" href="#steps-to-create-and-register-a-model-validator" aria-hidden="true">#</a> Steps to create and register a model validator</h2><ol><li><p>Create your own validator class which implements the interface org.compiere.model.ModelValidator</p><ul><li>Register the table/document in the <code>initialize()</code> method.</li><li>Make sure to implement the <code>getAD_Client_ID</code> method, as otherwise the Model Validator won&#39;t work.</li></ul></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> /**\n  * Get Client to be monitored\n  * @return AD_Client_ID client\n  */\n public int getAD_Client_ID()\n {\n  return m_AD_Client_ID;\n } // getAD_Client_ID\n\n\n public void initialize (ModelValidationEngine engine, MClient client)\n {\n  // This line must come before registering the model changes\n  //client = null for global validator\n  if (client != null) { \n   m_AD_Client_ID = client.getAD_Client_ID();\n  }\n\n  [...]\n  \n  // register for model change on C_Order\n  engine.addModelChange(MOrder.Table_Name, this);\n  // register for document events on MOrder \n  engine.addDocValidate(MOrder.Table_Name, this);\n \n } // initialize\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Put your code into <code>modelChange()</code> for model change events and into <code>docValidate()</code> for document events.</li><li>You have to check the parameters <code>po</code> for the table name (<code>po.get_TableName()</code>) - if you registered more than one table/document - and timing/type to react on the right events.</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public String modelChange (PO po, int type) throws Exception\n{\n   // we want to validate the order before the deletion\n   if (po.get_TableName().equals(&quot;C_Order&quot;) &amp;&amp; type == TYPE_BEFORE_DELETE)\n   {\n      MOrder order = (MOrder)po;\n      // put your code here\n   }\n   return null;\n} // modelChange\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public String docValidate (PO po, int timing)\n{\n   if (timing == TIMING_BEFORE_COMPLETE) {\n      if (po.get_TableName().equals(MOrder.Table_Name))\n      {\n          //put your code here\n          //it is executed every time an order is about to complete\n      }\n   }\n   return null;\n} // docValidate\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Register your validator in ADempiere. Login as System Administrator and open the &#39;Client&#39; window. Here you have to enter you validator class (full qualified name) into the ModelValidationClasses field. Separate validators by &quot;;&quot; if you have multiple validators</li></ol>',25),o={href:"https://wiki.adempiere.net/User:Tbayen",target:"_blank",rel:"noopener noreferrer"},n=(0,i.IL)('<ol start="3"><li><p><a href="a">Create a jar file</a> with your validator class and rename it to customization.jar.</p></li><li><p>Or jar the class directly for example:</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jar cvf customization.jar MyValidatorThailand.class\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>Copy this customization.jar into the Adempiere/lib folder of your ADempiere installation and rerun the RUN_setup.bat/sh. Restart the ADempiere server and install the new client (or restart the client with Java WebStart).</li></ol><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See also:</h2>',4),d=(0,i.IL)('<li>Take a look at <a href="a">compiere.model.MyValidator</a> or <a href="a">MyValidatorThailand</a> for source code samples.</li><li><a href="a">Extensions Friendly Proposal</a></li><li><a href="a">LCO Validator</a> for a code example.</li><li><a href="a">Script ModelValidator</a> to achieve similar functionality without stopping the Server!</li><li><a href="a">How To Create Customization.jar</a>.</li>',5),r={href:"http://www.javaworld.com/javaworld/jw-01-2008/jw-01-jpa1.html?page=4",target:"_blank",rel:"noopener noreferrer"},s={},c=(0,t(42272).c)(s,[["render",function(e,a){const t=(0,i.E1)("ExternalLinkIcon");return(0,i.Wz)(),(0,i.An)("div",null,[l,(0,i.QD)("p",null,[(0,i.mY)("You can also register a validator with a client admin account. This validator will only belong to this client's objects. --"),(0,i.QD)("a",o,[(0,i.mY)("Tbayen"),(0,i.K2)(t)]),(0,i.mY)(" 17:51, 11 January 2012 (UTC)")]),n,(0,i.QD)("ul",null,[d,(0,i.QD)("li",null,[(0,i.QD)("a",r,[(0,i.mY)("Java JPA"),(0,i.K2)(t)]),(0,i.mY)(" seems to have 'callbacks' that can replace the hooks we are using.")])])])}]])},29784:(e,a,t)=>{t.r(a),t.d(a,{data:()=>i});const i=JSON.parse('{"key":"v-989eea7c","path":"/community/wiki/developers-guide/model-validator.html","title":"Model Validator","lang":"en-US","frontmatter":{"title":"Model Validator","category":"Community","star":9,"sticky":9,"tag":["Wiki","Developer\'s Guide"],"article":false,"description":"What is a model validator? A model validator is java class that implements org.compiere.model.ModelValidator. It has two important (callback)methods (modelChange and docValidate) which are called on model change events and document events. The model validator register itself for certain ADempiere tables or documents to react on model changes (data changed, added or deleted) or document actions like complete, void etc. SaveProperties, Login, FactValidate, LoadPreferences are other methods in the ModelValidator interface.","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/developers-guide/model-validator.html"}],["meta",{"property":"og:title","content":"Model Validator"}],["meta",{"property":"og:description","content":"What is a model validator? A model validator is java class that implements org.compiere.model.ModelValidator. It has two important (callback)methods (modelChange and docValidate) which are called on model change events and document events. The model validator register itself for certain ADempiere tables or documents to react on model changes (data changed, added or deleted) or document actions like complete, void etc. SaveProperties, Login, FactValidate, LoadPreferences are other methods in the ModelValidator interface."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-21T19:56:54.000Z"}],["meta",{"property":"article:author","content":"ADempiere"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Developer\'s Guide"}],["meta",{"property":"article:modified_time","content":"2023-08-21T19:56:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Model Validator\\",\\"description\\":\\"What is a model validator? A model validator is java class that implements org.compiere.model.ModelValidator. It has two important (callback)methods (modelChange and docValidate) which are called on model change events and document events. The model validator register itself for certain ADempiere tables or documents to react on model changes (data changed, added or deleted) or document actions like complete, void etc. SaveProperties, Login, FactValidate, LoadPreferences are other methods in the ModelValidator interface.\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"What is a model validator?","slug":"what-is-a-model-validator","link":"#what-is-a-model-validator","children":[]},{"level":2,"title":"Model Classes vs Validators","slug":"model-classes-vs-validators","link":"#model-classes-vs-validators","children":[]},{"level":2,"title":"ModelValidator and Methods","slug":"modelvalidator-and-methods","link":"#modelvalidator-and-methods","children":[{"level":3,"title":"Model change events","slug":"model-change-events","link":"#model-change-events","children":[]},{"level":3,"title":"Document events","slug":"document-events","link":"#document-events","children":[]},{"level":3,"title":"Login Event","slug":"login-event","link":"#login-event","children":[]},{"level":3,"title":"FactsValidate Event","slug":"factsvalidate-event","link":"#factsvalidate-event","children":[]},{"level":3,"title":"LoadPreferences Event","slug":"loadpreferences-event","link":"#loadpreferences-event","children":[]},{"level":3,"title":"SaveProperties Event","slug":"saveproperties-event","link":"#saveproperties-event","children":[]}]},{"level":2,"title":"Steps to create and register a model validator","slug":"steps-to-create-and-register-a-model-validator","link":"#steps-to-create-and-register-a-model-validator","children":[]},{"level":2,"title":"See also:","slug":"see-also","link":"#see-also","children":[]}],"git":{"createdTime":1692647814000,"updatedTime":1692647814000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.6,"words":780},"filePathRelative":"community/wiki/developers-guide/model-validator.md","localizedDate":"August 21, 2023","excerpt":"<h2> What is a model validator?</h2>\\n<p>A model validator is java class that implements org.compiere.model.ModelValidator. It has two important (callback)methods (modelChange and docValidate) which are called on model change events and document events. The model validator register itself for certain ADempiere tables or documents to react on model changes (data changed, added or deleted) or document actions like complete, void etc. SaveProperties, Login, FactValidate, LoadPreferences are other methods in the ModelValidator interface.</p>","autoDesc":true}')}}]);