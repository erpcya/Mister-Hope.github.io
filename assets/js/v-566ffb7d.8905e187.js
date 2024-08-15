"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8364],{39892:(e,i,n)=>{n.r(i),n.d(i,{default:()=>v});var a=n(68152);const s=(0,a.IL)('<h2 id="minutes" tabindex="-1"><a class="header-anchor" href="#minutes" aria-hidden="true">#</a> Minutes</h2><p><strong>General</strong></p><ul><li><strong>Moderator:</strong> Steven Sackett</li><li><strong>Secretary:</strong> Mario Calderon</li><li><strong>Participants:</strong> Mike McKay, Mario Calderon, Suman Ravuri, Victor Perez</li><li><strong>Date / Time:</strong> Tuesday, February 11th 2014 / 12:00h - 13:34h GMT</li><li><strong>The meeting closed after 1 hour 34 mins</strong></li></ul><p><strong>Agenda</strong></p><ol><li><strong>Minutes of Previous Meeting</strong></li><li><strong>Actions taken by RM</strong></li><li><strong>Actions to be taken</strong></li><li><strong>Misc</strong></li><li><strong>Next meeting</strong></li></ol><p><strong>Minutes of Previous Meeting</strong></p>',6),t={href:"http://www.adempiere.com/FT/TT_meeting_minutes_February_04th_2014",target:"_blank",rel:"noopener noreferrer"},r=(0,a.IL)("<p><strong>Actions taken by RM</strong></p><ul><li>Merging Susanne&#39;s Cost Engine changes, but there were some discrepancies.</li></ul><p><strong>Actions to be taken:</strong></p><ul><li>Suman will revert Susanne&#39;s Cost Engine changes. She will be asked to reedit her changes with the newest CE version. Then the changes will be merged.</li></ul><p><strong>Misc:</strong></p><ul><li>Servers are installed and ready for testing.</li><li>Jenkins server supposedly runs.</li><li>Mike needs the Jenkins process working. He also needs the seed to incorporate the original version of generation of the Sahi IDs.</li><li>Victor will write tests for his features.</li></ul><p><strong>Missing:</strong></p><ul><li>Test cases only need to be simple text of what the user would do and what results to expect.</li><li>They would have the following major sections: <ul><li>Setup - what data needs to be in place for the test to work</li><li>User actions - what does the user do. e.g., Open the order window, create a new POS order, assign it to Joe Block. Move to the line tab, add a new line for Oak tree. Move back to the Order tab. Complete the order.</li><li>Test: what to test - e.g., Check the order is completed. Check total prices and tax. Check existence of invoice, test existence of shipment. Check zoom across functions.</li></ul></li></ul><p><strong>Community Test:</strong></p>",9),l={href:"http://www.adempiere.com/Release_380LTS_Community_Test",target:"_blank",rel:"noopener noreferrer"},d=(0,a.QD)("li",null,"Document the test results in the test page (ideal: with an integration to Jira) or",-1),o={href:"https://adempiere.atlassian.net/issues/?jql=project%20%3D%20ADEMPIERE",target:"_blank",rel:"noopener noreferrer"},u=(0,a.IL)('<p><strong>Next Meeting:</strong></p><ul><li><strong>Date / Time:</strong> Tuesday, February 18th 2014 / 12:00h GMT</li></ul><h2 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> Log</h2><p>Following is the meeting log - time is in GMT -6</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Monday, 10 February 2014\n[21:45:33] Mario Calderón: http://www.adempiere.com/FT/TT_meeting_minutes_February_04th_2014\n[21:46:01] Victor Perez Juarez: Hola Mario\n[21:46:09] Yamel Senih: Hola Mario\n[21:46:11] Yamel Senih: Hola Victor\n[21:46:29] Victor Perez Juarez: hola Yamel\n[21:46:49] Mario Calderón: hola Yamel\n[21:47:07] Yamel Senih: Como estan?\n[21:47:33] Mario Calderón: aqui,preparandolas minutas para mañana\n[21:47:49] Mario Calderón: a ver si al fin podemos arrancar a realizar las pruebas\n[21:48:13] Yamel Senih: que bueno\n[22:56:11] suman ravuri: Hi Victor\n[22:56:16] suman ravuri: can we fix the build issue?\n[22:57:41] Victor Perez Juarez: Hi Suman\n[22:57:48] Victor Perez Juarez: I send a email\n[22:57:56] Victor Perez Juarez: do you receipt\nTuesday, 11 February 2014\n[06:01:49] Mario Calderón: hello everybody\n[06:01:57] suman ravuri: Hi Mario\n[06:02:03] suman ravuri: Good Morning\n[06:02:37] Michael McKay: Morning.\n[06:04:26] Steven Sackett (Adaxa): Hi All..\n[06:05:07] Victor Perez Juarez: Hi\n[06:05:36] Steven Sackett (Adaxa): are we ready to start?\n[06:06:35] suman ravuri: yes\n[06:06:59] Steven Sackett (Adaxa): the summary minutes of the previous meeting are....\n[06:07:01] Steven Sackett (Adaxa): FT/TT meeting minutes February 04th 2014\n\nMinutes\n\n\n\nGeneral\n\nModerator: Mike McKay (de facto)\n\nSecretary: Mario Calderon\n\nParticipants: Mike McKay, Mario Calderon, Suman Ravuri, Colin Rooney\n\nDate / Time: Tuesday, February 04th 2014 / 12:00h - 13:07h GMT\n\nThe meeting closed after 1 hour 07 mins\n\nAgenda\n\nMinutes of Previous Meeting\n\nActions taken by RM\n\nActions to be taken\n\nMisc\n\nNext meeting\n\nMinutes of Previous Meeting\n\nhttp://www.adempiere.com/FT/TT_meeting_minutes_January_28th_2014\n\nActions taken by RM\n\nActions to be taken\n\nMario will contact Tobi to support helping with Jirs,Jenkins, etc.\n\nSuman will configure Jenkins, Nexus on Paul Aviles&#39; servers\n\nMisc\n\nJenkins, Nexus and HG are installed on Paul Aviles&#39; servers.\n\ndemo1.adempiere.us\n\nhttp://nexus.adempiere.us/index.html#welcome\n\nhttp://hg.adempiere.us/\n\nSteps to get the instances running:\n\nGain access to the server (Suman and his team)\n\nConfigure Jenkins, Nexus and HG to be able to nightly load changes, build the code and update the database. (Suman and team)\n\nConfigure Sahi (Mike - in parallel with tests)\n\nConfigure a method to track test progress - keep in simple so we can register test volunteers, capture bugs and fixes as we go. (Need to setup Jira and mail list - need a test team lead (Mike - may need help from Tobi admin on Jira)\n\nCommunicate with the community on the process - whats been changed, what needs to be tested, how to communicate results, where to sign-up to help etc... (Mike and others)\n\nKick-off the tests (Target Feb)\n\nTest cycles (all)\n\nPrepare the official release once the testing is complete - final quality checks and repository clean up - Victor did this last time. (Suman/Victor following acceptance of tests)\n\nLaunch the release (Mid April?). Start planning for the next one.\n\nNext meeting\n\nDate / Time: Tuesday, February 11th 2014 / 12:00h GMT\n[06:07:25] Mario Calderón: same roles?\n[06:07:56] Steven Sackett (Adaxa): unless other candidates want to put their hands up?\n[06:08:23] Steven Sackett (Adaxa): anyone want to be moderator? please!\n[06:09:18] Steven Sackett (Adaxa): what tasks were scheduled for the week and what has been achieved?\n[06:09:43] Steven Sackett (Adaxa): Suman, can you give us an update?\n[06:10:37] suman ravuri: Steve, we have an issue with build\n[06:11:00] suman ravuri: struggling solve this with existing tools I have\n[06:11:38] Steven Sackett (Adaxa): what is nature of problem?\n[06:11:43] suman ravuri: Documented in https://adempiere.atlassian.net/browse/ADEMPIERE-250\n[06:12:03] suman ravuri: issue beacuse of two repositories\n[06:12:54] Victor Perez Juarez: Of merge cost was incorrect\n[06:13:27] Mario Calderón: now solved?\n[06:13:37] suman ravuri: not yet\n[06:13:39] Victor Perez Juarez: It cause duplicate classes\n[06:14:11] suman ravuri: we had long conversation with Victor and decided to take help from Susanne\n[06:15:14] suman ravuri: Mike, did you get a chance to look at jira issue\n[06:15:54] Victor Perez Juarez: Susanne&#39;s changes are of a Cost engine versión old\n[06:16:10] Michael McKay: Sorry - which issue - the one above or settingup test cases?\n[06:16:22] suman ravuri: [5:42:41 PM] suman ravuri: https://adempiere.atlassian.net/browse/ADEMPIERE-250\n\n\n\n&lt;&lt;&lt; \n[06:16:56] Michael McKay: Just read it.  I haven&#39;t looked at the code yet.\n[06:17:32] Victor Perez Juarez: Suman tried use of versión of Sussanne but not is right\n[06:18:38] suman ravuri:  I integrared the code what ever I received, last time I received on December 3rd\n[06:18:54] suman ravuri: I am yet to receive another update\n[06:19:05] Mario Calderón: so susanne will be contacted and issue solved\n[06:19:08] suman ravuri: I am fine to integrate quickly with latest code\n[06:19:29] suman ravuri: but not able to solve multi repo issue\n[06:19:38] Victor Perez Juarez: Only should take of changes , I know that susanne have comenta mark in yor code , so that merge should be manuality compare file by file\n[06:20:35] Mario Calderón: Ok\n[06:21:27] Steven Sackett (Adaxa): Hi Victor can you explain a little more\n[06:22:44] Victor Perez Juarez: Then suman copy clases in path that susanne had but it change in cost engine branch\n[06:23:03] Victor Perez Juarez: For example of package\n[06:24:35] Victor Perez Juarez: In cost engine branch i make of necessary change to integrate with 380 branch and it was ok\n[06:24:35] Steven Sackett (Adaxa): so what needs to be the next steps?\n[06:25:04] Mario Calderón: As victor told me, susanne made her changes on old versions of costing engine files, and  the code was deployed as a different package.\n[06:25:31] Mario Calderón: But now this is known, and how to be tackled\n[06:26:00] Victor Perez Juarez: i use org.adempiere.engine vs org.adempiere.engines\n[06:26:34] Victor Perez Juarez: And i remove this from libero and move to core\n[06:26:57] Mario Calderón: Best would be that victor talks to susanne and they construct the files to be merged. Then suman cqn do the merge\n[06:27:23] Victor Perez Juarez: But as Sussanne change are old suman replicate old structure\n[06:28:30] suman ravuri: Here is the plan I can think of\n[06:28:53] suman ravuri: 1.Share latest costing changes to us, we will integrate\n[06:29:32] suman ravuri: 2. For sub repo issue, we will revert the changes and Victor would help us to fix this\n[06:29:34] Victor Perez Juarez: Suban and me think that is more easy may be that susanne include your changes form a repisitory update\n[06:29:57] Victor Perez Juarez: She know that change introduce\n[06:30:32] suman ravuri: can Susanne fix sub repo changes?\n[06:30:36] Mario Calderón: Ok\n[06:31:08] suman ravuri: I mean costing depends of manufacturing which is in altogether different repo\n[06:31:36] Mario Calderón: I will tell her to contact you both after this meeting\n[06:31:42] Victor Perez Juarez: Suman you should revert útil 2110 revisión\n[06:31:57] Mario Calderón: Steven, can we move on?\n[06:32:13] Steven Sackett (Adaxa): sure\n[06:32:26] Victor Perez Juarez: Because of repository is ok in 2109\n[06:32:35] Victor Perez Juarez: I sent a email\n[06:32:51] Steven Sackett (Adaxa): Test servers?\n[06:33:10] Steven Sackett (Adaxa): available yet for people to start testing?\n[06:33:56] Victor Perez Juarez: Yes Paul finish\n[06:34:02] suman ravuri: the issue we discussed is show stopper to come up with test instances\n[06:34:08] Victor Perez Juarez: Oracle and pg\n[06:34:39] Victor Perez Juarez: Only are of code to finish install\n[06:35:43] Steven Sackett (Adaxa): Victor, how do I access a test instance?\n[06:35:53] Yamel Senih: Hi All\n[06:36:31] Mario Calderón: Is jenkins configured and Does jenkins run?\n[06:36:54] Mario Calderón: Hi yamel, nice to meet you here\n[06:36:58] Victor Perez Juarez: When code is ready Paul execute a script that generate new dB seed\n[06:37:20] Victor Perez Juarez: And deployment adempiere\n[06:37:36] Steven Sackett (Adaxa): so no test instance till the code problem Suman is talking about is fixed?\n[06:37:36] Mario Calderón: Mike sent an email about sahi also....\n[06:38:00] Victor Perez Juarez: I made of change necessary to release a new versión and commit\n[06:38:40] Victor Perez Juarez: But was here when detect issue with merge\n[06:38:58] Michael McKay: I&#39;m ready to start but need the jenkins process working.  Also need the seed to incorporate the original version of generation of the sahi IDs.\n[06:39:47] Michael McKay: Also haven&#39;t heard from Tobi on Jira and using the test cases there.\n[06:39:56] Victor Perez Juarez: Yes Mike\n[06:40:10] Victor Perez Juarez: I have this changes and other\n[06:40:21] Victor Perez Juarez: To test\n[06:40:58] Victor Perez Juarez: In social with timeout of a test\n[06:41:16] Victor Perez Juarez: It can get timeout\n[06:41:43] Mario Calderón: I wrote -yesterday very, very late - karsten if he could wrap up what has been done and what is missin about the wiki test page\n[06:41:52] Victor Perez Juarez: But i am wait that code is ok to integrate this changes\n[06:42:14] Mario Calderón: When he answers, i will inform you\n[06:43:01] Victor Perez Juarez: I know Paul have of jenkins server ready\n[06:43:13] Victor Perez Juarez: You can ask he\n[06:43:25] Michael McKay: I can deal with timeouts once the instance is up and running.  Other things I need are test cases for the new modules and features.\n[06:43:50] Michael McKay: I can help build the automated tests around these.\n[06:43:59] Victor Perez Juarez: Exacly\n[06:45:15] Michael McKay: I have or can generate the tests for everything I&#39;ve committed.  Can I ask everyone else to send me the test cases for their code?  It will speed things up a lot.\n[06:47:58] Mario Calderón: Ok\n[06:48:25] Mario Calderón: So, what is missing now?\n[06:50:58] Michael McKay: Test cases only need to be simple text of what the user would do and what results to expect.  They would have the following major sections:\n\n* Setup - what data needs to be in place for the test to work\n\n* User actions - what does the user do.  ie. Open the order window, create a new POS order, assign it to Joe Block.  Move to the line tab, add a new line for Oak tree.  Move back to the Order tab.  Complete the order.\n\n* Test: what to test - ie. Check the order is completed.  Check total prices and tax.  Check existence of invoice, test existence of shipment. Check zoom across functions.\n[06:51:55] Steven Sackett (Adaxa): @Mike, thanks for making that clear for me..\n[06:52:42] suman ravuri: @Mike, we prepared test documents for most of the features we integrated\n[06:53:12] suman ravuri: We covered all basic scenarios\n[06:53:16] Michael McKay: Are they in Jira?\n[06:53:19] suman ravuri: yes\n[06:53:24] suman ravuri: they are in Jira\n[06:54:08] Michael McKay: Good.  I&#39;ll have a look and try to develop SAHI tests around them.\n[06:55:25] Steven Sackett (Adaxa): the setup/user actions/test scenario for something like Mfg Light wlll be quite extensive.. I s that what is expected?  does anything exist yet?\n[06:55:40] Victor Perez Juarez: Mike exist this script in wiki\n[06:55:44] Steven Sackett (Adaxa): @Suman?\n[06:56:02] Victor Perez Juarez: Let me send URL\n[06:56:07] Steven Sackett (Adaxa): we did not write any test cases like that\n[06:56:35] Mario Calderón: SOrry for coming back to this issue, but Iwant to make sure we agree on this. Wrapping up the costing engine issue, summan will revert all changes, merges, etc so the code is again ready to take up susanne&#39;s changes. Victor and susanne will work together so her changes are quicly implemented and readey to be merged.\n[06:57:05] suman ravuri: For ML I need  to verify once, but for other features we have detailed documents like create user, add sales order et...\n[06:57:50] Michael McKay: @Victor - for the main functional tests, yes.  But not for the new features and modules.\n[06:58:53] Steven Sackett (Adaxa): Mario&#39;s question seems to be the most critical thing, can Suman and Victor confirm their agreement to get this work done. I assume Mario will ask Susanne soon..\n[06:59:05] suman ravuri: Yes I will revert the changes\n[06:59:14] suman ravuri: and let Victor and team know\n[06:59:39] Steven Sackett (Adaxa): what is the timeframe to get this finished please..\n[07:00:19] suman ravuri: By 11AM IST tomorrow, I will revert\n[07:00:53] Steven Sackett (Adaxa): thanks .. @Victor, what time might you need for extra work?\n[07:04:24] Steven Sackett (Adaxa): anyone have more to add?\n[07:05:41] Steven Sackett (Adaxa): thanks .. I assume we meet next week, hopefully with the above tasks completed.. bye\n[07:07:09] Mario Calderón: The test page\n[07:08:11] Michael McKay: Before we write too much - I&#39;d like to get Jira setup to coordinate the test activity.\n[07:08:30] Michael McKay: But - I can help with the test page if Karsten doesn&#39;t have time.\n[07:08:47] Mario Calderón: Here are missing the integration with jira, the easy explanations to use it\n[07:09:02] Mario Calderón: Ok....\n[07:09:12] Michael McKay: Have to leave for a few minutes ...\n[07:10:36] Mario Calderón: Anything else?\n[07:16:15] Mario Calderón: If not, please write here comments etc. I will consider them in the minutes\n[07:16:50] Victor Perez Juarez: not fro me Mario\n[07:17:22] Mario Calderón: Suman?\n[07:19:17] Victor Perez Juarez: Mike\n[07:19:29] Victor Perez Juarez: here are the test page\n[07:19:32] Victor Perez Juarez: http://www.adempiere.com/Functional_Tests\n[07:19:42] Victor Perez Juarez: we need complete for new functionality\n[07:22:41] Michael McKay: Yes.  In the sahi tests, I&#39;ve been using that list to generate the main functional tests.  There is lots to do and I wouldn&#39;t consider attempting all of it for the 380 release - just the relevant changes.  I&#39;ll keep adding to the main functional tests as we go.\n[07:24:14] Victor Perez Juarez: but is important have\n[07:24:50] Victor Perez Juarez: this way can have regression test\n[07:25:10] Victor Perez Juarez: and know if some was broke\n[07:26:50] Michael McKay: Agreed -  it is just a question of time/resources to cover the whole list.  Is there a way to focus the effort on critical sections?\n[07:28:03] Michael McKay: For those interested in helping out with the sahi test development, I&#39;ve added more details here: http://www.adempiere.com/ADempiere_Testing_with_Sahi\n\n\n\nIts not finished yet. When it is, it should be clear how to go about developing an automated test.\n[07:28:09] Victor Perez Juarez: I will write for my new features\n[07:28:14] Michael McKay: Thanks.\n[07:28:18] Victor Perez Juarez: other should be same\n[07:29:08] Mario Calderón: ok\n[07:29:15] Mario Calderón: are we finished?\n[07:29:31] Victor Perez Juarez: yes from me\n[07:29:49] Michael McKay: Nothing else from me.  Thanks.\n[07:34:12] Mario Calderón: Bye\n[08:58:29] Mario Calderón: hi, here Karsten&#39;s report about test page: \n\n\n\nKarsten created the Test page under: http://www.adempiere.com/Release_380LTS_Community_Test .\n\n\n\nIn Karsten&#39;s opinion there are two possibilities: \n\n1.- to document in this page the test results in the test page (ideal: with an integration to Jira)or \n\n\n\n2.- to use the Jira buglist under https://adempiere.atlassian.net/issues/?jql=project%20%3D%20ADEMPIERE , with an introduction to Jira&#39;s usage in the wiki test page.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),c={},v=(0,n(42272).c)(c,[["render",function(e,i){const n=(0,a.E1)("ExternalLinkIcon");return(0,a.Wz)(),(0,a.An)("div",null,[s,(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.QD)("a",t,[(0,a.mY)("Previous Meeting Minutes - February 04th 2014"),(0,a.K2)(n)])])]),r,(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.mY)("Karsten created the Test page under: "),(0,a.QD)("a",l,[(0,a.mY)("Release_380LTS_Community_Test"),(0,a.K2)(n)]),(0,a.mY)(".")]),(0,a.QD)("li",null,[(0,a.mY)("In Karsten's opinion there are two possibilities: "),(0,a.QD)("ul",null,[d,(0,a.QD)("li",null,[(0,a.mY)("Use the Jira buglist under "),(0,a.QD)("a",o,[(0,a.mY)("ADEMPIERE Jira"),(0,a.K2)(n)]),(0,a.mY)(", with an introduction to Jira's usage in the wiki test page.")])])])]),u])}]])},20413:(e,i,n)=>{n.r(i),n.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-566ffb7d","path":"/community/wiki/meetings/FT-2014/FT-20140211.html","title":"FT/TT meeting minutes February 11th 2014","lang":"en-US","frontmatter":{"title":"FT/TT meeting minutes February 11th 2014","category":"Community","star":9,"sticky":9,"tag":["Wiki","Meetings"],"article":false,"description":"Minutes General Moderator: Steven Sackett Secretary: Mario Calderon Participants: Mike McKay, Mario Calderon, Suman Ravuri, Victor Perez Date / Time: Tuesday, February 11th 2014 / 12:00h - 13:34h GMT The meeting closed after 1 hour 34 mins","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/meetings/FT-2014/FT-20140211.html"}],["meta",{"property":"og:title","content":"FT/TT meeting minutes February 11th 2014"}],["meta",{"property":"og:description","content":"Minutes General Moderator: Steven Sackett Secretary: Mario Calderon Participants: Mike McKay, Mario Calderon, Suman Ravuri, Victor Perez Date / Time: Tuesday, February 11th 2014 / 12:00h - 13:34h GMT The meeting closed after 1 hour 34 mins"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-29T22:51:16.000Z"}],["meta",{"property":"article:author","content":"ADempiere"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Meetings"}],["meta",{"property":"article:modified_time","content":"2023-08-29T22:51:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"FT/TT meeting minutes February 11th 2014\\",\\"description\\":\\"Minutes General Moderator: Steven Sackett Secretary: Mario Calderon Participants: Mike McKay, Mario Calderon, Suman Ravuri, Victor Perez Date / Time: Tuesday, February 11th 2014 / 12:00h - 13:34h GMT The meeting closed after 1 hour 34 mins\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"Minutes","slug":"minutes","link":"#minutes","children":[]},{"level":2,"title":"Log","slug":"log","link":"#log","children":[]}],"git":{"createdTime":1693349476000,"updatedTime":1693349476000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":10.41,"words":3124},"filePathRelative":"community/wiki/meetings/FT-2014/FT-20140211.md","localizedDate":"August 29, 2023","excerpt":"<h2> Minutes</h2>\\n<p><strong>General</strong></p>\\n<ul>\\n<li><strong>Moderator:</strong> Steven Sackett</li>\\n<li><strong>Secretary:</strong> Mario Calderon</li>\\n<li><strong>Participants:</strong> Mike McKay, Mario Calderon, Suman Ravuri, Victor Perez</li>\\n<li><strong>Date / Time:</strong> Tuesday, February 11th 2014 / 12:00h - 13:34h GMT</li>\\n<li><strong>The meeting closed after 1 hour 34 mins</strong></li>\\n</ul>","autoDesc":true}')}}]);