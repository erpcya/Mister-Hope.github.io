"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1036],{63728:(e,n,i)=>{i.r(n),i.d(n,{default:()=>l});var a=i(68152);const t=(0,a.IL)('<h2 id="minutes" tabindex="-1"><a class="header-anchor" href="#minutes" aria-hidden="true">#</a> Minutes</h2><p><strong>General</strong></p><ul><li>Moderator: Steven Sackett</li><li>Secretary: Mario Calderon</li><li>Participants: Steven Sackett, Victor Perez, Mario Calderon, Suman Ravuri</li><li>Date / Time: Tuesday, Dezember 03rd 2013 / 12:00h - 13:07h GMT</li><li>The meeting closed after 1 hour 07 mins</li></ul><p><strong>Agenda</strong></p><ol><li>Minutes of Previous Meeting</li><li>Actions taken by RM</li><li>Actions to be taken</li><li>Misc</li><li>Next meeting</li></ol><p><strong>Minutes of Previous Meeting</strong></p>',6),r={href:"http://www.adempiere.com/FT/TT_meeting_minutes_November_26th_2013",target:"_blank",rel:"noopener noreferrer"},s=(0,a.IL)('<p><strong>Actions taken by RM</strong></p><ul><li>none</li></ul><p><strong>Actions to be taken</strong></p><ul><li>Integrate Manufacturing Lite into Adempiere</li><li>Finish integrating Warehouse Management</li><li>Commit all changes in Cost Engine branch (Victor)</li><li>Susanne will patch her changes on top of Victor&#39;s code</li><li>Steven/Paul will help her on that</li><li>We need an instance for testing once the review phase is finished and the community testing begins. ADeV will be asked to provide one.</li></ul><p><strong>Misc</strong></p><ul><li>Start of community test: to be decided after Friday</li></ul><p><strong>Next meeting</strong></p><ul><li>Tuesday, December 10th 2013 / 12:00h. GMT</li></ul><h2 id="logs" tabindex="-1"><a class="header-anchor" href="#logs" aria-hidden="true">#</a> Logs</h2><p>Following is the meeting log - time is in GMT -6</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Tuesday, 3 December 2013\n[05:59:58] Steven Sackett (Adaxa): Hi..\n[06:00:04] Mario Calderón: good mornig everybody\n[06:00:45] Steven Sackett (Adaxa): hi Mario ..  must be early!\n[06:01:03] suman ravuri: Hi Mario/Steve\n[06:01:12] suman ravuri: Good Morning/Night\n[06:01:16] Steven Sackett (Adaxa): Hi\n[06:01:19] suman ravuri: Evening :)\n[06:01:30] Victor Perez Juarez: Hi\n[06:01:43] Steven Sackett (Adaxa): Hi Victor\n[06:01:54] Steven Sackett (Adaxa): shall we start?\n[06:02:24] Mario Calderón: +1\n[06:02:27] Victor Perez Juarez: Yes for me\n[06:02:32] Mario Calderón: me, Secretary\n[06:02:37] Steven Sackett (Adaxa): any objection to usual roles?\n[06:02:52] Mario Calderón: none\n[06:02:53] Steven Sackett (Adaxa): sorry .. Mario .. go ahead!\n[06:02:57] Victor Perez Juarez: None\n[06:03:17] Steven Sackett (Adaxa): here are the summary minutes from last discussion\n[06:03:20] Steven Sackett (Adaxa): FT/TT meeting minutes November 26th 2013\n\nMinutes\n\n\n\nGeneral\n\nModerator: Steven Sackett\n\nSecretary: Mario Calderon\n\nParticipants: Steven Sackett, Victor Perez, Mario Calderon, Suman Ravuri, Mike McKay, John Agudelo\n\nDate / Time: Tuesday, November 19th 2013 / 12:00h - 13:11h GMT\n\nThe meeting closed after 1 hour 11 mins\n\nAgenda\n\nMinutes of Previous Meeting\n\nActions taken by RM\n\nActions to be taken\n\nMisc\n\nNext meeting\n\nMinutes of Previous Meeting\n\nhttp://www.adempiere.com/FT/TT_meeting_minutes_November_19th_2013\n\nActions taken by RM\n\nMade code changes for Manufacturing Lite integration with Libero Manufacturing and prepared the patch -- Committed changes into feature/ADEMPIERE-216-ManufacturingLite branch\n\nMake periods list in fin. report show only active and list descending integration with ADempiere 380 -- Tested and committed changes into release/380rc1\n\nCommitted the following issues changes into release/380rc1:\n\nCombined Aging revalued payments ( payment schedule issue is fixed )\n\nFixed Null Pointer Exception of Document No range look-up (Task ADEMPIERE-233)\n\nNullpointer Exception issue on product selection in Component included Tab of Product window\n\nDelete Entities in Client is not allowing to clear the Table drop down\n\nNull Pointer Exception on Currency selection in Payment window\n\nMisc\n\nCost Engine\n\nSusanne has tested a lot and has mede several changes on actual CE\n\nVictor will commit his newest changes\n\nSusanne will send the files with her changes\n\nSteven and Paul will help on it\n\nActions to be taken\n\n--\n\nNext meeting\n\nTuesday, December 02nd 2013 / 12:00h. GMT\n[06:03:41] Steven Sackett (Adaxa): 3 action items only I think\n[06:04:07] Steven Sackett (Adaxa): Suman .. can you update us for the weeks activities please\n[06:05:25] suman ravuri: This week I do not have update\n[06:06:24] suman ravuri: waiting for ML review feedback to make further changes\n[06:06:39] Steven Sackett (Adaxa): lets start with ML...\n[06:06:57] Victor Perez Juarez: I have some patches that need include for 2pack\n[06:07:34] Steven Sackett (Adaxa): are these available to Suman now?\n[06:07:47] Victor Perez Juarez: And have of migration for some functionality of hr\n[06:08:10] Steven Sackett (Adaxa): lets leave HR .. want to close out ML\n[06:08:23] Victor Perez Juarez: Of pach i will commit\n[06:08:52] Steven Sackett (Adaxa): Can you say when that might be done?\n[06:09:37] suman ravuri: @Victor, did you get a chance to review code?\n[06:09:42] Victor Perez Juarez: I can call for revisión this week Steven\n[06:09:46] suman ravuri: if yes any comments\n[06:09:52] suman ravuri: ?\n[06:10:05] Victor Perez Juarez: So Mario and Enrique can check ML\n[06:11:34] Steven Sackett (Adaxa): I guess we are inyour hands Victor... it just seems that this one is taking a long time.. are you sure you have time to do it this week?\n[06:11:37] Victor Perez Juarez: I can make revision code not is issue forme but we need more funcional review and a good integration with libero\n[06:12:32] Victor Perez Juarez: Mario and Enrique know libero then i think that should review ML too\n[06:12:33] Steven Sackett (Adaxa): it would be nice to have good integration with Libero but at the moment its just more important to get it finished and out for testing\n[06:14:05] Steven Sackett (Adaxa): I would like to suggest that what Victor can add or fix this week goes in and after that we ask Suman to finish what he can and put out for testing.\n[06:14:28] Steven Sackett (Adaxa): for/against?\n[06:14:32] Mario Calderón: +1 with me\n[06:14:36] Victor Perez Juarez: @Stven i can review of code and can answer for me , i will try call to Mario And Enrique or other that are interest\n[06:14:39] Steven Sackett (Adaxa): +1 with me\n[06:15:28] Steven Sackett (Adaxa): Suman, can you  work to this plan?\n[06:15:41] suman ravuri: @Victor, kindly let me know time\n[06:15:44] suman ravuri: I can join\n[06:15:59] Victor Perez Juarez: suman and me can\n[06:15:59] suman ravuri: @Steve, I am fine with this plan\n[06:16:27] Steven Sackett (Adaxa): Next item was Warehouse Management ....\n[06:16:51] Steven Sackett (Adaxa): Victor, I understand you may have committed the code for this already?\n[06:17:01] Victor Perez Juarez: Mario have you time to reviw ml as functional criterial\n[06:17:02] Steven Sackett (Adaxa): and that it has been tested by Mario and others?\n[06:17:34] Mario Calderón: please remebmer, we are reviewing\n[06:17:41] Mario Calderón: testing is the next phase\n[06:17:52] Victor Perez Juarez: Yes WM was include from some weeks\n[06:18:18] Steven Sackett (Adaxa): Suman, is WM available yet in a test instance?\n[06:18:55] suman ravuri: give me few minutes\n[06:19:13] suman ravuri: I am looking at report when I brought instance last time\n[06:19:22] suman ravuri: brought up\n[06:19:30] Victor Perez Juarez: i think that we need Setup for new instante\n[06:20:06] Steven Sackett (Adaxa): @Victor, I dont understand .. can you explain for me.\n[06:20:22] Victor Perez Juarez: Is need valid importat subject\n[06:20:39] Steven Sackett (Adaxa): ?\n[06:21:09] suman ravuri: @Steve, instance does not have WM\n[06:21:16] Victor Perez Juarez: For example we need upade All views that are in XML and sql migration\n[06:21:26] suman ravuri: I can have that isntance ready today\n[06:21:30] suman ravuri: I will send an update\n[06:21:42] Steven Sackett (Adaxa): that sounds good.\n[06:22:09] Steven Sackett (Adaxa): Mario, Victor, is there some user doc ... save me going to look :-)\n[06:22:11] Victor Perez Juarez: Need validare that not exist migration script with in correct ids\n[06:23:17] Steven Sackett (Adaxa): how is that to be done .. too technical for me.\n[06:23:20] Victor Perez Juarez: We need create of constraints for news tablea or warranties that is ok\n[06:23:38] suman ravuri: do you havr list of table for which we need to do?\n[06:23:50] suman ravuri: or we need to investigate and find?\n[06:24:20] Victor Perez Juarez: Is simple exist a script that make work for we\n[06:24:59] Victor Perez Juarez: But now only work in oracle and generate for oracle and pg\n[06:25:26] Victor Perez Juarez: I can send but need of oracle instance\n[06:25:34] Steven Sackett (Adaxa): who needs to do this?\n[06:25:52] Victor Perez Juarez: Only oracle instance\n[06:27:35] Victor Perez Juarez: And can send of steps for suman\n[06:27:56] suman ravuri: Thanks Victor\n[06:28:01] suman ravuri: Share steps to me\n[06:28:06] Victor Perez Juarez: We have a oracle instance for generate of constraints ?\n[06:28:27] suman ravuri: I will make the changes and let you know\n[06:28:31] Victor Perez Juarez: Yes I can\n[06:29:41] Mario Calderón: move on Steve?\n[06:30:01] Steven Sackett (Adaxa): so it is clear who is doing each task and when?\n[06:30:19] Steven Sackett (Adaxa): Suman?\n[06:30:51] suman ravuri: One minute\n[06:31:02] suman ravuri: I will share plan\n[06:32:06] Victor Perez Juarez: Also we nubes update 2pack functionality with new change of app dictonary\n[06:32:34] Victor Perez Juarez: For ie range and zoom in window\n[06:33:20] suman ravuri:  Deploy VM into new  instance\n\n If no errors not an issue, if yes note down issues\n\n Victor will send mail with changes to be done and how to make change\n\n Appply changes in oracle and use login in oracle to generate for postgres\n[06:34:05] suman ravuri: Appply changes in oracle and use oracle scripts to generate for postgres\n[06:34:34] Steven Sackett (Adaxa): @Victor, that is correct?\n[06:34:46] Victor Perez Juarez: I made for smart browse and viwews\n[06:35:25] Victor Perez Juarez: Yes need a dB instance\n[06:36:45] Steven Sackett (Adaxa): @Victor, you will send mail with changes to Suman and he does the rest?\n[06:39:09] Victor Perez Juarez: Yes I can indicate Where can get\n[06:39:48] Steven Sackett (Adaxa): thanks\n[06:40:02] Victor Perez Juarez: But suman should make 2pack functionality for new features\n[06:40:57] suman ravuri: Does this mean I need to generate 2 pack for new features?\n[06:41:08] Steven Sackett (Adaxa): I dont understand .. I thought the code changes were committed and tested by Mario so I dont undersatnd what the new features are?\n[06:41:33] Steven Sackett (Adaxa): if the code is committed wont the new features already be in it?\n[06:42:14] Victor Perez Juarez: Yes should can generate a 2pack with range and zoom features\n[06:42:46] Victor Perez Juarez: Do you add range feature in table ?\n[06:43:24] Victor Perez Juarez: Suman ,\n[06:43:31] Victor Perez Juarez: ?\n[06:43:50] Mario Calderón: can we move on? I think for Steven is getting quite late\n[06:44:30] suman ravuri: @Victor, I will generate 2 pack for date range feature\n[06:44:34] suman ravuri: is the correct?\n[06:44:39] suman ravuri: is that correct?\n[06:45:14] Victor Perez Juarez: And if i now generate a new table 2pack export this in XML ?\n[06:45:33] suman ravuri: ok\n[06:46:11] Victor Perez Juarez: Is need add this in handler\n[06:46:12] suman ravuri: action item to Suman: Generate 2pack in XML format and commit in repository for date range feature\n[06:46:33] Steven Sackett (Adaxa): This message has been removed.\n[06:47:01] Victor Perez Juarez: I explaint to Mario and he send indicación do you agree ?\n[06:47:36] Steven Sackett (Adaxa): @Victor, is that a question for Suman?\n[06:47:59] Victor Perez Juarez: Suman would send me of jasper repor human resource\n[06:48:28] Victor Perez Juarez: Need migrare to standard adempiere and need know of design of report\n[06:48:40] Steven Sackett (Adaxa): Please Victor, let us finish the items that are in 380 scope\n[06:48:54] Steven Sackett (Adaxa): are we finished with WM?\n[06:49:31] Steven Sackett (Adaxa): Cost Engine?..............\n[06:49:54] Steven Sackett (Adaxa): @Suman, what do you need to add the cost engine changes?\n[06:51:36] Victor Perez Juarez: Steven again WM was integrate weeks back\n[06:51:37] suman ravuri: I can integrate it provided I have code and db cahnges are available\n[06:51:41] Victor Perez Juarez: Is ready\n[06:52:23] Steven Sackett (Adaxa): Last week it was planned that Victor would discuss with Susanne the changes she has made.  Has that now happened?\n[06:53:26] Steven Sackett (Adaxa): @Victor, Cost Engine is ready?\n[06:57:18] Steven Sackett (Adaxa): earlier today Susanne sent me code and a database for the cost engin changes that she had worked on.  I passed on to Suman.\n[06:57:55] Steven Sackett (Adaxa): Is this sufficient for us to add the changes to 380 for multiple people to test or are there other issues?\n[06:58:33] Steven Sackett (Adaxa): @Suman .. your thoughts please..\n[06:58:56] Victor Perez Juarez: Today commit mi last change for CE next susanne can integrate your changes\n[07:00:25] suman ravuri: @Steve, at high level those are suffienet to get started with integration\n[07:01:17] Steven Sackett (Adaxa): ok .. shal we leave it at that?\n[07:02:06] Steven Sackett (Adaxa): @Victor, I think you asked about having an adempiere related domain to use for testing?\n[07:03:05] Victor Perez Juarez: Yes\n[07:03:08] suman ravuri: I need few details, I can take that input offline with Victor, Susanne and Steve\n[07:03:36] Steven Sackett (Adaxa): ok..\n[07:04:18] Steven Sackett (Adaxa): Victor, we are sitting on the adempiere.com.au domain .. just holding it for ADeV .. would that be useful for testing?\n[07:04:31] Victor Perez Juarez: I commit my changes and noticie by email so susanne can integrate your new change\n[07:05:00] Victor Perez Juarez: Yes we would\n[07:05:43] Steven Sackett (Adaxa): we can talk offline about what is needed to use it\n[07:06:12] Victor Perez Juarez: If you send me of ips and dns o can deployment i have resource that give Paul\n[07:06:13] Steven Sackett (Adaxa): Any other matters people want to raise about 380?\n[07:07:32] Mario Calderón: not from me\n[07:08:01] Steven Sackett (Adaxa): ok .. let&#39;s stop then .. Victor, Suman? ok\n[07:08:15] Victor Perez Juarez: Nop\n[07:08:38] suman ravuri: Tentative date for release?\n[07:08:51] Steven Sackett (Adaxa): oops .. Can we set the release date as by this Friday if we now have what is needed?\n[07:08:58] suman ravuri: sorry to start testing?\n[07:09:15] Victor Perez Juarez: Yes for me\n[07:09:21] Steven Sackett (Adaxa): +1\n[07:09:40] Mario Calderón: +1\n[07:09:45] suman ravuri: Friday we should have instance ready to start testiing with all features\n[07:09:48] suman ravuri: +1\n[07:10:00] Steven Sackett (Adaxa): great!\n[07:10:11] Steven Sackett (Adaxa): bye all....\n[07:10:20] Mario Calderón: bye to all! good day, evenig, night\n[07:10:27] suman ravuri: bye\n[07:10:33] Victor Perez Juarez: Bye\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11),d={},l=(0,i(42272).c)(d,[["render",function(e,n){const i=(0,a.E1)("ExternalLinkIcon");return(0,a.Wz)(),(0,a.An)("div",null,[t,(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.QD)("a",r,[(0,a.mY)("Previous Meeting Minutes"),(0,a.K2)(i)])])]),s])}]])},41624:(e,n,i)=>{i.r(n),i.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-005c8d3d","path":"/community/wiki/meetings/FT-2013/FT-20131203.html","title":"FT/TT meeting minutes December 03rd 2013","lang":"en-US","frontmatter":{"title":"FT/TT meeting minutes December 03rd 2013","category":"Community","star":9,"sticky":9,"tag":["Wiki","Meetings"],"article":false,"description":"Minutes General Moderator: Steven Sackett Secretary: Mario Calderon Participants: Steven Sackett, Victor Perez, Mario Calderon, Suman Ravuri Date / Time: Tuesday, Dezember 03rd 2013 / 12:00h - 13:07h GMT The meeting closed after 1 hour 07 mins","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/meetings/FT-2013/FT-20131203.html"}],["meta",{"property":"og:title","content":"FT/TT meeting minutes December 03rd 2013"}],["meta",{"property":"og:description","content":"Minutes General Moderator: Steven Sackett Secretary: Mario Calderon Participants: Steven Sackett, Victor Perez, Mario Calderon, Suman Ravuri Date / Time: Tuesday, Dezember 03rd 2013 / 12:00h - 13:07h GMT The meeting closed after 1 hour 07 mins"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-29T22:51:16.000Z"}],["meta",{"property":"article:author","content":"ADempiere"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Meetings"}],["meta",{"property":"article:modified_time","content":"2023-08-29T22:51:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"FT/TT meeting minutes December 03rd 2013\\",\\"description\\":\\"Minutes General Moderator: Steven Sackett Secretary: Mario Calderon Participants: Steven Sackett, Victor Perez, Mario Calderon, Suman Ravuri Date / Time: Tuesday, Dezember 03rd 2013 / 12:00h - 13:07h GMT The meeting closed after 1 hour 07 mins\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"Minutes","slug":"minutes","link":"#minutes","children":[]},{"level":2,"title":"Logs","slug":"logs","link":"#logs","children":[]}],"git":{"createdTime":1693349476000,"updatedTime":1693349476000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.74,"words":2623},"filePathRelative":"community/wiki/meetings/FT-2013/FT-20131203.md","localizedDate":"August 29, 2023","excerpt":"<h2> Minutes</h2>\\n<p><strong>General</strong></p>\\n<ul>\\n<li>Moderator: Steven Sackett</li>\\n<li>Secretary: Mario Calderon</li>\\n<li>Participants: Steven Sackett, Victor Perez, Mario Calderon, Suman Ravuri</li>\\n<li>Date / Time: Tuesday, Dezember 03rd 2013 / 12:00h - 13:07h GMT</li>\\n<li>The meeting closed after 1 hour 07 mins</li>\\n</ul>","autoDesc":true}')}}]);