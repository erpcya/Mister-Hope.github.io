"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8116],{81476:(e,i,n)=>{n.r(i),n.d(i,{default:()=>p});var a=n(68152);const t=(0,a.IL)('<h2 id="minutes" tabindex="-1"><a class="header-anchor" href="#minutes" aria-hidden="true">#</a> Minutes</h2><p><strong>General</strong></p><ul><li><strong>Moderator:</strong> Mike McKay (de facto)</li><li><strong>Secretary:</strong> Mario Calderon</li><li><strong>Participants:</strong> Mike McKay, Mario Calderon, Suman Ravuri, Colin Rooney</li><li><strong>Date / Time:</strong> Tuesday, February 04th 2014 / 12:00h - 13:07h GMT</li><li><strong>The meeting closed after 1 hour 07 mins</strong></li></ul><p><strong>Agenda</strong></p><ol><li><strong>Minutes of Previous Meeting</strong></li><li><strong>Actions taken by RM</strong></li><li><strong>Actions to be taken</strong></li><li><strong>Misc</strong></li><li><strong>Next meeting</strong></li></ol><p><strong>Minutes of Previous Meeting</strong></p>',6),r={href:"http://www.adempiere.com/FT/TT_meeting_minutes_January_28th_2014",target:"_blank",rel:"noopener noreferrer"},s=(0,a.QD)("p",null,[(0,a.QD)("strong",null,"Actions taken by RM")],-1),l=(0,a.QD)("p",null,[(0,a.QD)("strong",null,"Actions to be taken:")],-1),o=(0,a.QD)("ul",null,[(0,a.QD)("li",null,"Mario will contact Tobi to support helping with Jira, Jenkins, etc."),(0,a.QD)("li",null,"Suman will configure Jenkins, Nexus on Paul Aviles' servers")],-1),d=(0,a.QD)("p",null,[(0,a.QD)("strong",null,"Misc:")],-1),c=(0,a.QD)("li",null,"Jenkins, Nexus, and HG are installed on Paul Aviles' servers.",-1),u=(0,a.QD)("li",null,"demo1.adempiere.us",-1),m={href:"http://nexus.adempiere.us/index.html#welcome",target:"_blank",rel:"noopener noreferrer"},h={href:"http://hg.adempiere.us/",target:"_blank",rel:"noopener noreferrer"},v=(0,a.IL)("<li>Steps to get the instances running: <ol><li>Gain access to the server (Suman and his team)</li><li>Configure Jenkins, Nexus, and HG to nightly load changes, build the code, and update the database (Suman and team)</li><li>Configure Sahi (Mike - in parallel with tests)</li><li>Configure a method to track test progress - keep it simple for test volunteers, bug capture, and fixes (Need to setup Jira and mail list - need a test team lead, possibly Mike with Tobi&#39;s admin help on Jira)</li><li>Communicate with the community on the process, changes, testing needs, reporting results, and sign-up to help (Mike and others)</li><li>Kick-off the tests (Target Feb)</li><li>Test cycles (all)</li><li>Prepare the official release once testing is complete - final quality checks and repository clean up (Suman/Victor following acceptance of tests)</li><li>Launch the release (Mid April?). Start planning for the next one.</li></ol></li>",1),b=(0,a.IL)('<p><strong>Next Meeting:</strong></p><ul><li><strong>Date / Time:</strong> Tuesday, February 11th 2014 / 12:00h GMT</li></ul><h2 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> Log</h2><p>Following is the meeting log - time is in GMT -6</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Monday, 3 February 2014\n[15:58:57] * John Agudelo left the chat (Unsubscribed).\nTuesday, 4 February 2014\n[05:59:28] Mario Calderón: http://www.adempiere.com/Http://www.adempiere.com/FT/TT_meeting_minutes_January_28th_2014\n[06:01:25] Michael McKay: Morning/Evening all.  Steve won&#39;t be joining us today.\n[06:02:23] Mario Calderón: hi\n[06:02:34] Michael McKay: Hi Mario,  How are things?\n[06:02:38] Mario Calderón: good morning Mike\n[06:03:50] Mario Calderón: we have a project now in Nicaragua\n[06:04:04] Michael McKay: Congratulations!\n[06:04:21] Mario Calderón: how&#39;s the weather in Canada?\n[06:04:41] suman ravuri: Hi Mario, Congratulations\n[06:04:49] Mario Calderón: hi Suman thanks\n[06:04:56] suman ravuri: Hi Mike, Good morning\n[06:05:32] Michael McKay: Wonderful this week.  Was really cold for a while -15 degree or more but now its -5.  Winterlude has started and I&#39;ve been skating on the canal every day.\n[06:06:01] Mario Calderón: this must be a great experience\n[06:06:16] Michael McKay: Morning Suman.  Did you manage to connect with Paul over the test servers?\n[06:06:49] Michael McKay: @Mario - it is fun.  You must visit sometime.\n[06:06:50] Mario Calderón: the only and most important item right now are the instances\n[06:07:18] suman ravuri: Mike,  not yet\n[06:09:43] Michael McKay: OK - how can we move this along.  I&#39;ve got access but no experience with all the services that are installed: Jenkins, Nexus and HG\n[06:10:07] Michael McKay: Is there something that I can do to help here?\n[06:10:24] suman ravuri: services are already there\n[06:10:31] suman ravuri: we don&#39;t need to install\n[06:10:40] Mario Calderón: where are the machines ? at WT?\n[06:10:48] Michael McKay: Understand - its the configurations.\n[06:11:02] Michael McKay: demo1.adempiere.us\n[06:11:38] Michael McKay: http://nexus.adempiere.us/index.html#welcome\n[06:12:04] Michael McKay: http://hg.adempiere.us/\n[06:12:17] suman ravuri: @Mike, I will get keys tomorrow and we will be able to access it by wednesday\n[06:12:26] Michael McKay: http://jenkins.adempiere.us/login?from=%2F\n[06:13:22] Mario Calderón: I can ask Tobi from Metas to help us. He was the one in the past who prepared and configured the instances.\n[06:14:42] Michael McKay: OK.  We need to move this along and get started on the community testing as soon as possible.   I&#39;ll have the SAHI code moved to the adempiere_test_suite and will figure out how to run it from Jenkins as part of the nightly build process.\n[06:15:46] Michael McKay: Mario - is there anything else we can do today?\n[06:15:52] Mario Calderón: what would be the concrete steps?\n[06:16:10] Mario Calderón: should I ask Tobi?\n[06:16:15] Victor Perez Juarez: Hi\n[06:16:17] Michael McKay: steps for what specifically?\n[06:16:34] Mario Calderón: @Mike: to get the instances running\n[06:16:40] Mario Calderón: hi Victor\n[06:17:17] Michael McKay: Steps: (please correct me if I&#39;m wrong or you can add improvements)\n[06:17:35] Michael McKay: 1.  Gain access to the server (Suman and his team)\n[06:18:52] Michael McKay: 2. Configure Jenkins, Nexus and HG to be able to nightly load changes, build the code and update the database.  Run the server then run Sahi main functional tests and any other tests.  Generate any reports.\n[06:19:48] Michael McKay: 3. Configure a method to track test progress - keep in simple so we can register test volunteers, capture bugs and fixes as we go.\n[06:20:40] Michael McKay: 4. Communicate with the community on the process - whats been changed, what needs to be tested, how to communicate results, where to sign-up to help etc...\n[06:21:38] Michael McKay: 5. Prepare the official release once the testing is complete - final quality checks and repository clean up - Victor did this last time.\n[06:22:04] Michael McKay: 6. Launch the release. Start planning for the next one.\n[06:22:42] Mario Calderón: any observations to Mike&#39;s list? Suman, Victor?\n[06:23:13] suman ravuri: it covered all aspects\n[06:23:28] Victor Perez Juarez: What will be procedure to report a bug ?\n[06:24:12] Victor Perez Juarez: Who need solve ?\n[06:24:45] Michael McKay: Good question - we had talked about using Jira as we are using it to report bugs.  An-e-mail list might work as well if the team is able to keep jira up-to-date.\n[06:24:54] Michael McKay: Any other ideas?\n[06:25:49] Michael McKay: We&#39;d also mentioned contributors were primarily responsible for bugs in their own contributions but anyone with the desire could help with fixes.\n[06:26:06] Victor Perez Juarez: For example i saw that a new column was add with auto complete but of name is wrong\n[06:27:54] Michael McKay: I suspect we will have lots of small items like that to deal with.  Does that need a seperate report or a simple fix/commit?\n[06:28:02] Victor Perez Juarez: Is necessary change code and migration script , i seed that was add for metas contribution\n[06:28:06] Michael McKay: With comments of course.\n[06:28:40] Mario Calderón: I&#39;d say simple fix\n[06:29:05] Victor Perez Juarez: Jira is ok for me\n[06:29:15] Michael McKay: Key question then.  Do all the contributors have resources to support testing and any major fixes.\n[06:29:17] Mario Calderón: if these are the steps, who will take them?\n[06:29:25] suman ravuri: +1 for Jira\n[06:30:24] Victor Perez Juarez: 1 contact to original contributor to fix\n[06:30:28] Michael McKay: We need to gather a test team with a a group responsible for capturing the bugs and commiting the fixes.  Suman would be the gate keeper, integrating as the fixes are added.  Would that work?\n[06:31:12] Michael McKay: Similar to how the 380rc was built but on a much faster cycle.\n[06:32:23] Victor Perez Juarez: 2 if contributor answare nice if not then RM need found a fix or remove contribution\n[06:33:38] Victor Perez Juarez: ?\n[06:33:49] Michael McKay: @mario - &quot;who will take them?&quot; are you asking for the larger process or testing in particular?\n[06:34:38] Victor Perez Juarez: Who and how is describe a test ?\n[06:36:16] Mario Calderón: @Mike: I meant the steps you wrote, and &quot;who of us&quot; will be in charge of them\n[06:37:23] Mario Calderón: @all: do you think it is a goog idea to get Tobi involved? I think he would be of great help....\n[06:37:56] Michael McKay: Steps: (please correct me if I&#39;m wrong or you can add improvements)\n\n1.  Gain access to the server (Suman and his team by Wednesday 5 Feb)\n\n\n\n2.  a. Configure Jenkins, Nexus and HG to be able to nightly load changes, build the code and update the database.  (Suman and team by 5 Feb)\n\n2. b. Configure Sahi (Mike - in parallel with tests - 9 Feb)\n\n\n\n3. Configure a method to track test progress - keep in simple so we can register test volunteers, capture bugs and fixes as we go.  (Need to setup Jira and mail list - need a test team lead (Mike - may need help from Tobi admin on Jira)\n\n\n\n4. Communicate with the community on the process - whats been changed, what needs to be tested, how to communicate results, where to sign-up to help etc... (Mike and others)\n\n\n\n4a Kick-off the tests (Target Feb 10th)\n\n\n\n4b Test cycles (all)\n\n\n\n5. Prepare the official release once the testing is complete - final quality checks and repository clean up - Victor did this last time.  (Suman/Victor following acceptance of tests)\n\n\n\n6. Launch the release (Mid April?). Start planning for the next one.\n[06:38:27] Victor Perez Juarez: 1, is necessary créate a descripción of test in wiki or knowlegment in adempiere.io , it allow créate of step to replicate with sahi and other hand créate data example información\n[06:41:57] Victor Perez Juarez: What do you think ? My idea is use of liferay knowlegment and a future replace sf forum\n[06:45:20] Mario Calderón: I think the timetable Mike suggest is OK\n[06:45:40] Mario Calderón: do we all agree?\n[06:45:44] Michael McKay: Going to have to leave.  If you can agree on the key leaders and dates, we can start to generate communications and build some buzz.\n[06:46:16] Mario Calderón: +1 rom my side\n\nI will write a letter to Tobi cc to you inviting him to join\n[06:46:33] Victor Perez Juarez: Good new Paul enable me server access , si today i can test\n[06:46:44] Michael McKay: If Tobi is the admin on jira - I wasnt&#39; sure.\n[06:47:10] Michael McKay: Buy everyone.  Have a great day.\n[06:48:24] Mario Calderón: bye Mike\n[06:48:24] Victor Perez Juarez: Ok i am agree with dates\n[06:48:38] Mario Calderón: @Victor: uderstand\n[06:48:53] Mario Calderón: so you must only find Paul\n[06:49:13] suman ravuri: bye\n[06:49:33] Victor Perez Juarez: I wll créate of descripción test for my contributions\n[06:53:32] Mario Calderón: @Suman: it is OK with Mike&#39;s timetable?\n[06:54:26] Mario Calderón: Victor will start working on that\n[06:54:36] Mario Calderón: from my side, we can finish\n[06:54:40] Yamel Senih: hi all\n[06:54:49] Mario Calderón: hi Yamel\n[06:55:06] suman ravuri: Mario, getiting all jobs in place by 5th appears little risky to me\n[06:57:56] Mario Calderón: understand\n\nwhen would it be?\n[06:59:22] suman ravuri: can I get back to you by tomorrow\n[06:59:57] Mario Calderón: ok\n[07:00:34] Mario Calderón: then, this would be it\n\nI hope we manage to get the instances running\n[07:00:48] Mario Calderón: bye Suman, Victor\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),g={},p=(0,n(42272).c)(g,[["render",function(e,i){const n=(0,a.E1)("ExternalLinkIcon");return(0,a.Wz)(),(0,a.An)("div",null,[t,(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.QD)("a",r,[(0,a.mY)("Previous Meeting Minutes - January 28th 2014"),(0,a.K2)(n)])])]),s,l,o,d,(0,a.QD)("ul",null,[c,(0,a.QD)("li",null,[(0,a.mY)("Instances and links: "),(0,a.QD)("ul",null,[u,(0,a.QD)("li",null,[(0,a.QD)("a",m,[(0,a.mY)("Nexus"),(0,a.K2)(n)])]),(0,a.QD)("li",null,[(0,a.QD)("a",h,[(0,a.mY)("HG"),(0,a.K2)(n)])])])]),v]),b])}]])},19716:(e,i,n)=>{n.r(i),n.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-26a84a19","path":"/community/wiki/meetings/FT-2014/FT-20140204.html","title":"FT/TT meeting minutes February 04th 2014","lang":"en-US","frontmatter":{"title":"FT/TT meeting minutes February 04th 2014","category":"Community","star":9,"sticky":9,"tag":["Wiki","Meetings"],"article":false,"description":"Minutes General Moderator: Mike McKay (de facto) Secretary: Mario Calderon Participants: Mike McKay, Mario Calderon, Suman Ravuri, Colin Rooney Date / Time: Tuesday, February 04th 2014 / 12:00h - 13:07h GMT The meeting closed after 1 hour 07 mins","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/meetings/FT-2014/FT-20140204.html"}],["meta",{"property":"og:title","content":"FT/TT meeting minutes February 04th 2014"}],["meta",{"property":"og:description","content":"Minutes General Moderator: Mike McKay (de facto) Secretary: Mario Calderon Participants: Mike McKay, Mario Calderon, Suman Ravuri, Colin Rooney Date / Time: Tuesday, February 04th 2014 / 12:00h - 13:07h GMT The meeting closed after 1 hour 07 mins"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-29T22:51:16.000Z"}],["meta",{"property":"article:author","content":"ADempiere"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Meetings"}],["meta",{"property":"article:modified_time","content":"2023-08-29T22:51:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"FT/TT meeting minutes February 04th 2014\\",\\"description\\":\\"Minutes General Moderator: Mike McKay (de facto) Secretary: Mario Calderon Participants: Mike McKay, Mario Calderon, Suman Ravuri, Colin Rooney Date / Time: Tuesday, February 04th 2014 / 12:00h - 13:07h GMT The meeting closed after 1 hour 07 mins\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"Minutes","slug":"minutes","link":"#minutes","children":[]},{"level":2,"title":"Log","slug":"log","link":"#log","children":[]}],"git":{"createdTime":1693349476000,"updatedTime":1693349476000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.65,"words":1996},"filePathRelative":"community/wiki/meetings/FT-2014/FT-20140204.md","localizedDate":"August 29, 2023","excerpt":"<h2> Minutes</h2>\\n<p><strong>General</strong></p>\\n<ul>\\n<li><strong>Moderator:</strong> Mike McKay (de facto)</li>\\n<li><strong>Secretary:</strong> Mario Calderon</li>\\n<li><strong>Participants:</strong> Mike McKay, Mario Calderon, Suman Ravuri, Colin Rooney</li>\\n<li><strong>Date / Time:</strong> Tuesday, February 04th 2014 / 12:00h - 13:07h GMT</li>\\n<li><strong>The meeting closed after 1 hour 07 mins</strong></li>\\n</ul>","autoDesc":true}')}}]);