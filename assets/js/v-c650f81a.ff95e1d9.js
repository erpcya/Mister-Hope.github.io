"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[816],{94440:(e,s,n)=>{n.r(s),n.d(s,{default:()=>o});var t=n(68152);const i=[(0,t.IL)('<p>Sometimes it might be convenient to call an Adempiere process from your code. This is how you do it:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Create instance parameters. I e the parameters you want to send to the process.\nProcessInfoParameter pi1 = new ProcessInfoParameter(&quot;AD_Client_ID&quot;, clientId,&quot;&quot;,&quot;&quot;,&quot;&quot;);\nProcessInfoParameter pi2 = new ProcessInfoParameter(&quot;AD_Org_ID&quot;, orgId, &quot;&quot;,&quot;&quot;,&quot;&quot;);\n\n// Create a process info instance. This is a composite class containing the parameters.\nProcessInfo pi = new ProcessInfo(&quot;&quot;, 0,0,0);\npi.setParameter(new ProcessInfoParameter[] {pi1, pi2, pi3});\n\n// Lookup process in the AD, in this case by value\nMProcess pr = new Query(Env.getCtx(), MProcess.Table_Name, &quot;value=?&quot;, null)\n                        .setParameters(new Object[]{&quot;MyProcess&quot;})\n                        .first();\nif (pr==null) {\n      log.warn(&quot;Process &quot; + pr.getName() + &quot; does not exist. &quot;);\n      return false;\n}\n\n// Create an instance of the actual process class.\nMyProcess process = new MyProcess();\n\n// Create process instance (mainly for logging/sync purpose)\nMPInstance mpi = new MPInstance(Env.getCtx(), 0, null);\nmpi.setAD_Process_ID(pr.get_ID()); \nmpi.setRecord_ID(0);\nmpi.save();\n\n// Connect the process to the process instance.\npi.setAD_PInstance_ID(mpi.get_ID());\n\nlog.info(&quot;Starting process &quot; + pr.getName());\nboolean result = process.startProcess(ctx, pi, null);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2)],r={},o=(0,n(42272).c)(r,[["render",function(e,s){return(0,t.Wz)(),(0,t.An)("div",null,i)}]])},46699:(e,s,n)=>{n.r(s),n.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-c650f81a","path":"/community/wiki/developers-guide/calling-a-process-from-code.html","title":"Calling a Process from Code","lang":"en-US","frontmatter":{"title":"Calling a Process from Code","category":"Community","star":9,"sticky":9,"tag":["Wiki","Developer\'s Guide"],"article":false,"description":"Sometimes it might be convenient to call an Adempiere process from your code. This is how you do it: // Create instance parameters. I e the parameters you want to send to the process. ProcessInfoParameter pi1 = new ProcessInfoParameter(\\"AD_Client_ID\\", clientId,\\"\\",\\"\\",\\"\\"); ProcessInfoParameter pi2 = new ProcessInfoParameter(\\"AD_Org_ID\\", orgId, \\"\\",\\"\\",\\"\\"); // Create a process info instance. This is a composite class containing the parameters. ProcessInfo pi = new ProcessInfo(\\"\\", 0,0,0); pi.setParameter(new ProcessInfoParameter[] {pi1, pi2, pi3}); // Lookup process in the AD, in this case by value MProcess pr = new Query(Env.getCtx(), MProcess.Table_Name, \\"value=?\\", null) .setParameters(new Object[]{\\"MyProcess\\"}) .first(); if (pr==null) { log.warn(\\"Process \\" + pr.getName() + \\" does not exist. \\"); return false; } // Create an instance of the actual process class. MyProcess process = new MyProcess(); // Create process instance (mainly for logging/sync purpose) MPInstance mpi = new MPInstance(Env.getCtx(), 0, null); mpi.setAD_Process_ID(pr.get_ID()); mpi.setRecord_ID(0); mpi.save(); // Connect the process to the process instance. pi.setAD_PInstance_ID(mpi.get_ID()); log.info(\\"Starting process \\" + pr.getName()); boolean result = process.startProcess(ctx, pi, null);","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/developers-guide/calling-a-process-from-code.html"}],["meta",{"property":"og:title","content":"Calling a Process from Code"}],["meta",{"property":"og:description","content":"Sometimes it might be convenient to call an Adempiere process from your code. This is how you do it: // Create instance parameters. I e the parameters you want to send to the process. ProcessInfoParameter pi1 = new ProcessInfoParameter(\\"AD_Client_ID\\", clientId,\\"\\",\\"\\",\\"\\"); ProcessInfoParameter pi2 = new ProcessInfoParameter(\\"AD_Org_ID\\", orgId, \\"\\",\\"\\",\\"\\"); // Create a process info instance. This is a composite class containing the parameters. ProcessInfo pi = new ProcessInfo(\\"\\", 0,0,0); pi.setParameter(new ProcessInfoParameter[] {pi1, pi2, pi3}); // Lookup process in the AD, in this case by value MProcess pr = new Query(Env.getCtx(), MProcess.Table_Name, \\"value=?\\", null) .setParameters(new Object[]{\\"MyProcess\\"}) .first(); if (pr==null) { log.warn(\\"Process \\" + pr.getName() + \\" does not exist. \\"); return false; } // Create an instance of the actual process class. MyProcess process = new MyProcess(); // Create process instance (mainly for logging/sync purpose) MPInstance mpi = new MPInstance(Env.getCtx(), 0, null); mpi.setAD_Process_ID(pr.get_ID()); mpi.setRecord_ID(0); mpi.save(); // Connect the process to the process instance. pi.setAD_PInstance_ID(mpi.get_ID()); log.info(\\"Starting process \\" + pr.getName()); boolean result = process.startProcess(ctx, pi, null);"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-25T14:41:16.000Z"}],["meta",{"property":"article:author","content":"ADempiere"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Developer\'s Guide"}],["meta",{"property":"article:modified_time","content":"2023-08-25T14:41:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Calling a Process from Code\\",\\"description\\":\\"Sometimes it might be convenient to call an Adempiere process from your code. This is how you do it: // Create instance parameters. I e the parameters you want to send to the process. ProcessInfoParameter pi1 = new ProcessInfoParameter(\\\\\\"AD_Client_ID\\\\\\", clientId,\\\\\\"\\\\\\",\\\\\\"\\\\\\",\\\\\\"\\\\\\"); ProcessInfoParameter pi2 = new ProcessInfoParameter(\\\\\\"AD_Org_ID\\\\\\", orgId, \\\\\\"\\\\\\",\\\\\\"\\\\\\",\\\\\\"\\\\\\"); // Create a process info instance. This is a composite class containing the parameters. ProcessInfo pi = new ProcessInfo(\\\\\\"\\\\\\", 0,0,0); pi.setParameter(new ProcessInfoParameter[] {pi1, pi2, pi3}); // Lookup process in the AD, in this case by value MProcess pr = new Query(Env.getCtx(), MProcess.Table_Name, \\\\\\"value=?\\\\\\", null) .setParameters(new Object[]{\\\\\\"MyProcess\\\\\\"}) .first(); if (pr==null) { log.warn(\\\\\\"Process \\\\\\" + pr.getName() + \\\\\\" does not exist. \\\\\\"); return false; } // Create an instance of the actual process class. MyProcess process = new MyProcess(); // Create process instance (mainly for logging/sync purpose) MPInstance mpi = new MPInstance(Env.getCtx(), 0, null); mpi.setAD_Process_ID(pr.get_ID()); mpi.setRecord_ID(0); mpi.save(); // Connect the process to the process instance. pi.setAD_PInstance_ID(mpi.get_ID()); log.info(\\\\\\"Starting process \\\\\\" + pr.getName()); boolean result = process.startProcess(ctx, pi, null);\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/rss.xml","title":" RSS Feed"}]]},"headers":[],"git":{"createdTime":1692974476000,"updatedTime":1692974476000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.6,"words":180},"filePathRelative":"community/wiki/developers-guide/calling-a-process-from-code.md","localizedDate":"August 25, 2023","excerpt":"<p>Sometimes it might be convenient to call an Adempiere process from your code. This is how you do it:</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>// Create instance parameters. I e the parameters you want to send to the process.\\nProcessInfoParameter pi1 = new ProcessInfoParameter(\\"AD_Client_ID\\", clientId,\\"\\",\\"\\",\\"\\");\\nProcessInfoParameter pi2 = new ProcessInfoParameter(\\"AD_Org_ID\\", orgId, \\"\\",\\"\\",\\"\\");\\n\\n// Create a process info instance. This is a composite class containing the parameters.\\nProcessInfo pi = new ProcessInfo(\\"\\", 0,0,0);\\npi.setParameter(new ProcessInfoParameter[] {pi1, pi2, pi3});\\n\\n// Lookup process in the AD, in this case by value\\nMProcess pr = new Query(Env.getCtx(), MProcess.Table_Name, \\"value=?\\", null)\\n                        .setParameters(new Object[]{\\"MyProcess\\"})\\n                        .first();\\nif (pr==null) {\\n      log.warn(\\"Process \\" + pr.getName() + \\" does not exist. \\");\\n      return false;\\n}\\n\\n// Create an instance of the actual process class.\\nMyProcess process = new MyProcess();\\n\\n// Create process instance (mainly for logging/sync purpose)\\nMPInstance mpi = new MPInstance(Env.getCtx(), 0, null);\\nmpi.setAD_Process_ID(pr.get_ID()); \\nmpi.setRecord_ID(0);\\nmpi.save();\\n\\n// Connect the process to the process instance.\\npi.setAD_PInstance_ID(mpi.get_ID());\\n\\nlog.info(\\"Starting process \\" + pr.getName());\\nboolean result = process.startProcess(ctx, pi, null);\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);