"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9788],{48984:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});var n=t(68152);const s=(0,n.IL)('<p><em><strong>Hints and tips to maintain the database.</strong></em></p><h2 id="database-tuning" tabindex="-1"><a class="header-anchor" href="#database-tuning" aria-hidden="true">#</a> Database Tuning</h2><p>Databases need regular maintenance to function well. If you do not have a database administrator who can look at this for you, consider contracting one at regular intervals. Read the documentation for your database on tuning the database for performance. For example, see https://community.oracle.com/message/12295510. There are many tactics you can try such as separating separating index, data and blob table spaces.</p><h2 id="hardware-considerations" tabindex="-1"><a class="header-anchor" href="#hardware-considerations" aria-hidden="true">#</a> Hardware Considerations</h2><p>Hardware tuning can get quite technical to ensure the fastest access to data. Seek specific expert advice. Here are a few ideas to look into.</p><p>Check the database server for RAM and make sure you have enough RAM to hold the entire database. The system can have lots of page swapping if you don&#39;t have enough RAM to hold it all.</p><p>Consider using solid state drives as these will also help speedup the database access. Specifically, two solid state drives in RAID 0 config will be much faster than a single drive. However, there is no redundancy and the system will be vulnerable to data corruption. This may be preferable if regular backups to a more secure storage can be performed.</p><h2 id="trim-unused-data" tabindex="-1"><a class="header-anchor" href="#trim-unused-data" aria-hidden="true">#</a> Trim Unused Data</h2><p>There are a few things you can look at quickly. In your database, find the commands to list the top twenty tables by size. Some of these may be temporary or logs of process parameters. You can delete the info you no longer need. When you have the data trimmed down, use the database tools to analyse and vacuum the tables. This will also save space.</p><p>In ADempiere, the following tables, log tables in particular, can be trimmed or emptied of data:</p><ul><li>Temporary tables that start with &quot;T_&quot;</li><li>Import tables that start with &quot;I_&quot;</li><li>Any table called Test</li><li>Tables that start with &quot;AD_PInstance&quot;</li><li>AD_Find</li><li>AD_Error</li><li>AD_Issue</li><li>AD_ChangeLog (old records)</li><li>AD_Session (old records)</li><li>AD_Note (old notes)</li><li>Tables that end in Log</li></ul><p>These tables can easily take up half of the database space. If you need this data, consider a backup to another database. As routine maintenance, consider setting up housekeeping tasks to scrub old data from these tables.</p><p>In the Application, you can limit the amount of data returned by a query if a user opens a window with all records.</p><p>Tables with lots of records can be flagged as &quot;High Volume&quot; so users are presented with a search when the window first opens rather than opening all the records.</p><p>You can also limit the number of records returned by queries in the Role window to prevent returning too many.</p><h2 id="add-indexes" tabindex="-1"><a class="header-anchor" href="#add-indexes" aria-hidden="true">#</a> Add Indexes</h2>',16),o={href:"http://www.dbta.com/Columns/DBA-Corner/Top-10-Steps-to-Building-Useful-Database-Indexes-100498.aspx",target:"_blank",rel:"noopener noreferrer"},i=(0,n.IL)('<div class="hint-container info"><p class="hint-container-title">Note</p><p>Indexes should be built to optimize the access of your SQL queries. To properly create an optimal set of indexes requires a list of the SQL to be used, an estimate of the frequency that each SQL statement will be executed, and the importance of each query. Only then can the delicate balancing act of creating the right indexes to optimize the right queries most of the time be made.</p></div><p>Here are a few examples:</p><ul><li>Big non-transaction tables</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">index</span> <span class="token keyword">with</span> <span class="token punctuation">(</span>AD_Org_ID<span class="token punctuation">,</span> AD_Client_ID<span class="token punctuation">,</span> IsActive<span class="token punctuation">)</span>\n<span class="token keyword">create</span> <span class="token keyword">index</span> <span class="token keyword">with</span> <span class="token punctuation">(</span>UPPER<span class="token punctuation">(</span><span class="token keyword">Value</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">create</span> <span class="token keyword">index</span> <span class="token keyword">with</span> <span class="token punctuation">(</span>UPPER<span class="token punctuation">(</span>Name<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Big transaction tables</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">index</span> <span class="token keyword">with</span> <span class="token punctuation">(</span>AD_Org_ID<span class="token punctuation">,</span> AD_Client_ID<span class="token punctuation">,</span> DocStatus<span class="token punctuation">,</span> Processed<span class="token punctuation">,</span> Posted<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Big AD_ChangeLog</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">index</span> <span class="token keyword">for</span> ad_changelog <span class="token keyword">with</span> <span class="token punctuation">(</span>ad_table_id<span class="token punctuation">,</span> record_id<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',8),r={},l=(0,t(42272).c)(r,[["render",function(e,a){const t=(0,n.E1)("ExternalLinkIcon");return(0,n.Wz)(),(0,n.An)("div",null,[s,(0,n.QD)("p",null,[(0,n.mY)("ADempiere does not apply indexes on database tables by default. Indexes have a cost in the write operation that offsets the speed gained in some read operations. A index strategy is required to ensure the indexes are effective and don't just add to the overhead. Consider the advice of Craig Mullens in the article "),(0,n.QD)("a",o,[(0,n.mY)("Top 10 Steps to Building Useful Database Indexes"),(0,n.K2)(t)])]),i])}]])},54340:(e,a,t)=>{t.r(a),t.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-6c49f3ca","path":"/docs/system-administration/database-maintenance.html","title":"Database Maintenance","lang":"en-US","frontmatter":{"title":"Database Maintenance","category":"Documentation","star":9,"sticky":9,"article":false,"author":"Jesús Albujas","description":"Hints and tips to maintain the database. Database Tuning Databases need regular maintenance to function well. If you do not have a database administrator who can look at this for you, consider contracting one at regular intervals. Read the documentation for your database on tuning the database for performance. For example, see https://community.oracle.com/message/12295510. There are many tactics you can try such as separating separating index, data and blob table spaces.","head":[["link",{"rel":"alternate","hreflang":"es-es","href":"https://github.com/adempiere/adempiere-site.github.io/es/docs/system-administration/database-maintenance.html"}],["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/system-administration/database-maintenance.html"}],["meta",{"property":"og:title","content":"Database Maintenance"}],["meta",{"property":"og:description","content":"Hints and tips to maintain the database. Database Tuning Databases need regular maintenance to function well. If you do not have a database administrator who can look at this for you, consider contracting one at regular intervals. Read the documentation for your database on tuning the database for performance. For example, see https://community.oracle.com/message/12295510. There are many tactics you can try such as separating separating index, data and blob table spaces."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2023-12-26T20:09:37.000Z"}],["meta",{"property":"article:author","content":"Jesús Albujas"}],["meta",{"property":"article:modified_time","content":"2023-12-26T20:09:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Database Maintenance\\",\\"description\\":\\"Hints and tips to maintain the database. Database Tuning Databases need regular maintenance to function well. If you do not have a database administrator who can look at this for you, consider contracting one at regular intervals. Read the documentation for your database on tuning the database for performance. For example, see https://community.oracle.com/message/12295510. There are many tactics you can try such as separating separating index, data and blob table spaces.\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"Database Tuning","slug":"database-tuning","link":"#database-tuning","children":[]},{"level":2,"title":"Hardware Considerations","slug":"hardware-considerations","link":"#hardware-considerations","children":[]},{"level":2,"title":"Trim Unused Data","slug":"trim-unused-data","link":"#trim-unused-data","children":[]},{"level":2,"title":"Add Indexes","slug":"add-indexes","link":"#add-indexes","children":[]}],"git":{"createdTime":1703621377000,"updatedTime":1703621377000,"contributors":[{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.12,"words":637},"filePathRelative":"docs/system-administration/database-maintenance.md","localizedDate":"December 26, 2023","excerpt":"<p><em><strong>Hints and tips to maintain the database.</strong></em></p>\\n<h2> Database Tuning</h2>\\n<p>Databases need regular maintenance to function well. If you do not have a database administrator who can look at this for you, consider contracting one at regular intervals.\\nRead the documentation for your database on tuning the database for performance. For example, see https://community.oracle.com/message/12295510. There are many tactics you can try such as separating separating index, data and blob table spaces.</p>","autoDesc":true}')}}]);