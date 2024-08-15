"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4064],{77784:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var r=i(68152);const a=(0,r.IL)('<h2 id="pre-requisite-utilities" tabindex="-1"><a class="header-anchor" href="#pre-requisite-utilities" aria-hidden="true">#</a> Pre-requisite Utilities</h2><p>Before continuing, ensure you have installed a suitable database (i.e. Oracle 10g, Oracle 10gXE, PostgreSQL, MySQL) and that the database server is running. See <a href="a">Database Server Installation &amp; Setup</a>.</p><h2 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> Start</h2><p>The ADempiere software contains all the components necessary to create a stand alone application server. For a fresh install, follow the instructions for your operating system in Installing ADempiere Manually but ignore the installation of the database, which you have already done, and return here when you are first requested to RUN_Setup.bat/sh.</p><h2 id="setting-up-the-adempiere-server" tabindex="-1"><a class="header-anchor" href="#setting-up-the-adempiere-server" aria-hidden="true">#</a> Setting Up The ADempiere Server</h2><p>The Application Server is configured by a utility RUN_Setup.(sh/bat) found in the ADEMPIERE_HOME directory. This utility launches a tool where the configuration settings can be set and tested. Once everything passes the tests, the configuration is saved and the software repackages itself with the new settings. You can then launch the Application Server.</p><p>You can rerun this utility as many times as you like until everything is correct.</p><div class="hint-container info"><p class="hint-container-title">Note:</p><p>In case you are changing settings on an existing Application Server, make sure that the Application Server is shut down before you start. Otherwise you will get port errors during the testing. You can shut down the Application server by running the script RUN_Server2Stop.(sh/bat) from ADEMPIERE_HOME/utils or by stopping the &quot;service&quot;.</p></div><p>In a command shell with administrative privileges, run the script <strong>RUN_Setup</strong>, located in the ADEMPIERE_HOME directory. The ADempiere Server Setup window should appear as shown below:</p><p><img src="/assets/img/community/gettin-started/IS_ServerSetup.png" alt="Is-Serversetup"></p><p>The Setup window opens and loads its values from the file AdempiereEnv.properties. It looks for this file in the ADEMPIERE_HOME directory. If the environment variable ADEMPIERE_HOME is not set or is null, it will look in the directory defined in the system property &quot;user.dir&quot;.</p><div class="hint-container info"><p class="hint-container-title">Note:</p><p>The setup process creates a file named Adempiere.properties. This is the main configuration file for your Client. You can copy this file and pass it as a variable when you start ADempiere using the command line interface parameter -DPropertyFile=AdempiereProduction.properties If you create several files you can easily switch between development, test and production environments, for example.</p></div><h2 id="setup-fields" tabindex="-1"><a class="header-anchor" href="#setup-fields" aria-hidden="true">#</a> Setup Fields</h2><p>Fill in the setup window fields as follows:</p><ul><li><p>Java</p><ul><li>Java Home: select the SDK Java Home location (e.g. C:\\jdk1.5.0_05). This should be the same as the JAVA_HOME environment variable.</li><li>Java VM: the Java Virtual Engine Vendor (Default= Sun).</li></ul></li><li><p>Adempiere</p><ul><li>ADempiere Home: is the base directory where the distribution files are located (e.g. C:\\Adempiere). This should be the same a the ADEMPIERE_HOME environment variable.</li><li>KeyStore Password: ADempiere requires a SSL certificate. It automatically creates a certificate in the key store $ADEMPIERE_HOME/keystore/myKeystore with the keystore password entered. The self certified certificate created has the alias adempiere and uses the same password as the keystore. You can replace the certificate used with the Java &quot;keytool&quot; (see Java tool documentation).</li></ul></li><li><p>Application Server</p><ul><li>Application Server: is the name, URL or IP of your server PC (Don&#39;t use localhost). The Application Server defaults to the server currently running the program. - Avoid using IP addresses - use the DNS name of the server.</li><li>Web Port: The web port that the Application Server will listen on. Access to the application server will be through a URL similar to http://myApplicationServer:webport (http://appserver:8088). Please keep in mind that, under Linux/Unix, ports under 1000 need root privileges. If you use Apache as a front end, you may need to use ports like 8080 or 8088 - basically, find a free port. The default ports is 80</li><li>SSL: The secure socket layer port. The default is 443. If that is not available try another value such as 4443 or 8443.</li><li>JNP Port: The Java Name Provider and Remote Method Invocation(RMI) port. The Default ports are 1099 (1098).</li></ul></li><li><p>Database Server</p><ul><li>Database Server: The Database Server defaults to the server currently running the program. Avoid using IP addresses - use the DNS name of the server. Localhost can be used only if the database server is running on the same machine as the Application Server and client software. For Oracle, the Service names are discovered. You can overwrite the entries if they are not correct.</li><li>Database Name: <ul><li>PosgreSQL: PostgreSQL database name</li><li>Oracle: SID/Service name. Oracle 10g/11g default: orcl, OracleXE default: xe</li></ul></li></ul></li><li><p>Database Type: select the database you have installed (i.e. Oracle 10g, Oracle 10gXE, PostgreSQL).</p></li><li><p>Database Port: select the port for connect to database.(i.e. Oracle use 1521 as standard port, PostgreSQL 5432, etc.)</p></li><li><p>System Password: - Oracle: Password for the system user. - PostgreSQL: Password for the postgres user.</p><ul><li>Database User: The application database user name, default is adempiere.</li><li>Database Password: The application database password, default is adempiere.</li></ul></li><li><p>Mail Server</p></li></ul><p>A mail server is required to send requests. The mail server here is used as the default but is optional - the Setup tool will finish successfully without a fully functioning mail server. You maintain the mail server connection in the Application on a Client basis from the <strong><code>{{#if: |{{{2}}}|Client }}</code></strong> Window. If you don&#39;t want to enter or don&#39;t have an SMTP server, just enter a valid server. If the server exists, but does not provide POP3, SMTP or IMAP, the setup will finish successfully. If the server is invalid, then the setup test will fail.</p><div class="hint-container info"><p class="hint-container-title">Note:</p><p>The software only needs a method to send email. There is no ability to read email in the application.</p></div><h2 id="testing-the-setup" tabindex="-1"><a class="header-anchor" href="#testing-the-setup" aria-hidden="true">#</a> Testing the Setup</h2><p>After you fill the Setup fields, press the Test button to verify them. As the test progresses, you will see the boxes checked (√). Only if all the parameters are verified will you will not be able to save them. If an entry cannot be verified, a pop-up window stating the error will be displayed. Fix it and test again.</p><p>By example, the Application Server name is wrong, then you will see a message such as:</p><p>When all the tests pass (you can see the boxes checked: √ ): Only if all the parameters are verified will you will not be able to save them. If an entry cannot be verified, a pop-up window stating the error will be displayed. Fix it and test again.</p><p>By example, the Application Server name is wrong, then you will see a message such as:</p><p><img src="/assets/img/community/gettin-started/IS_ServerSetupError.png" alt="Is-server-setup-error"></p><p>When all the tests pass (you can see the boxes checked: √ ):</p><p><img src="/assets/img/community/gettin-started/IS_ServerSetupOK.png" alt="Is-server-setup-ok"></p><ul><li>press the Save button. This will save the settings to the AdempiereEnv.properties file in the ADEMPIERE_HOME directory.</li><li>After you accept the license, you will see the dialog:</li></ul><p><img src="/assets/img/community/gettin-started/IS_EnvironmentSaved.png" alt="IsEnvironment-Saved"></p><ul><li>Press the OK button to continue and take a look into the log. Make sure that you see the BUILD SUCCESSFUL and Done, such as:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> [echo] AppsDeployment= C:\\Adempiere\\jboss\\server\\adempiere\\deploy\n     [copy] Copying 1 file to C:\\Adempiere\\jboss\\server\\adempiere\\deploy\n     [copy] Copying 1 file to C:\\Adempiere\\jboss\\server\\adempiere\\deploy\n     [copy] Copying 1 file to C:\\Adempiere\\jboss\\server\\adempiere\\deploy\n     [copy] Copying 1 file to C:\\Adempiere\\jboss\\server\\adempiere\\deploy\n\n setupTomcat:\n\n setupDeploy:\n     [echo] AppsDeployment= C:\\Adempiere\\jboss\\server\\adempiere\\deploy\n\n setup:\n \nBUILD SUCCESSFUL\nTotal time: 2 minutes 22 seconds\n\n*** 2006-12-28 14:15:35.53 Adempiere Log (CLogConsole) ***\nErrorLevel = 0\n===================================\nSetup Client Environment\n===================================\nSET ADEMPIERE_HOME=C:\\Adempiere\nSET JAVA_HOME=c:\\Archivos de programa\\Java\\jdk1.5.0_05\nPath is OK = c:\\Archivos de programa\\Java\\jdk1.5.0_05\\bin;C:\\Archivos de programa\\Java\\jdk1.5.0_05\\\nbin;C:\\oraclexe\\app\\oracle\\product\\10.2.0\\server\\bin;%SystemRoot%\\system32;%SystemRoot%;\n%SystemRoot%\\System32\\Wbem\nCreated Shortcut Adempiere.lnk\nCreated Shortcut Adempiere Web Site.url\nDone\n.\nFor problems, check log file in base directory\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If something is wrong, you can repeat this step anytime until everything is correct.</p><p>Once the setup is complete, you can move on to <a href="a">Initialize the ADempiere Database</a>.</p><h2 id="common-issues" tabindex="-1"><a class="header-anchor" href="#common-issues" aria-hidden="true">#</a> Common Issues</h2><ul><li>Application Server * Database Server is the name, URL or IP of your server PC.\\</li><li>JNP Port = 1099 error means that a previous service is running. Kill it. Also, since this is the first port that is tested, it could also mean that you have a mismatch between your host name (in the hosts file) and your actual IP address. Fix it in &quot;/etc/hosts&quot; (linux)</li><li>Database Port = 1521 error can be solved by restarting DB machine.</li><li>System &amp; Database Passwords are those defined when you setup your Database.</li><li>Mail Server is optional. RUN_Setup can still finish without it.</li></ul><h3 id="java-home-error" tabindex="-1"><a class="header-anchor" href="#java-home-error" aria-hidden="true">#</a> Java Home Error</h3><p>If you receive the following message:</p><p><img src="/assets/img/community/gettin-started/IS_JAVA_HOME_ERROR.png" alt="IS_JAVA_HOME"></p><p>You should check your java environment variables. Check that the JAVA_HOME system environment variable points to the correct directory.</p><h3 id="web-port-error" tabindex="-1"><a class="header-anchor" href="#web-port-error" aria-hidden="true">#</a> Web Port Error</h3><p>If you receive the following message from the installer:</p><p><img src="/assets/img/community/gettin-started/Adempiereerror1.png" alt="ADempiere-error1"></p><p>it is likely that you have some other web server running or, if your are using Linux, you need the appropriate privileges.</p><p>The default ports are: 80 for http connections and 443 for SSL connections. This message means that the user is not allowed to use the port, likely because it is already used by another application. Change the port to something else. WebPort 8088 and SSL 4443 are recommended. If you are using Linux, remember that ports under 1000 need root privileges. If you are using Oracle database, port 8080 might be used.</p><h3 id="jnp-port-1099-error" tabindex="-1"><a class="header-anchor" href="#jnp-port-1099-error" aria-hidden="true">#</a> JNP Port 1099 Error</h3><p>Another possible error is Server Setup Error Error JNP Port (Not correct: JNP Port = 1099) OK</p><p>The JNP Port = 1099 error can be caused by another process which is already attached to that TCP port. Take a look what process is using this port and so you can take steps to stop it. It can also be caused by a mismatch between your IP address and the entry in your hosts file. See /etc/hosts(linux) or %SystemRoot%/system32/drivers/etc/hosts(windows).</p><div class="hint-container info"><p class="hint-container-title">Note:</p><p>To find the IP address of your server try the following in a command script:</p><ul><li>Linux /sbin/ifconfig</li><li>Windows IPCONFIG</li></ul></div><h3 id="jnp-name-not-found-exception" tabindex="-1"><a class="header-anchor" href="#jnp-name-not-found-exception" aria-hidden="true">#</a> JNP Name Not Found Exception</h3><p>This error is usually related to a DNS problem. It is possible to complete the setup using IP addresses when installing with PostgreSQL. Make sure you have a working DNS environment or add an entry in /etc/hosts(linux) or %SystemRoot%/system32/drivers/etc/hosts(windows).</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',49),s=(0,r.QD)("li",null,[(0,r.QD)("a",{href:"a"},"Initialize the ADempiere Database"),(0,r.mY)(" is the next thing after Install Server.")],-1),n=(0,r.QD)("li",null,[(0,r.QD)("a",{href:"a"},"Initial Client Setup"),(0,r.mY)(" is the starting business setup within ADempiere.")],-1),o=(0,r.QD)("li",null,[(0,r.QD)("a",{href:"a"},"Tutorials"),(0,r.mY)(" on many things from basic to advanced.")],-1),l={},p=(0,i(42272).c)(l,[["render",function(e,t){const i=(0,r.E1)("RouterLink");return(0,r.Wz)(),(0,r.An)("div",null,[(0,r.QD)("p",null,[(0,r.mY)("This page is directed at System Administrators who need to install the ADempiere Application Server in a network environment where the database server could be running on a separate network server and the clients run on remote computers. For simple installations where application server, database server and client are all on the same machine, see "),(0,r.K2)(i,{to:"/community/wiki/user-guide/"},{default:(0,r.Ql)((()=>[(0,r.mY)("Getting Started")])),_:1}),(0,r.mY)(".")]),a,(0,r.QD)("ul",null,[s,(0,r.QD)("li",null,[(0,r.K2)(i,{to:"/community/wiki/user-guide/launching-the-adempiere-application.html"},{default:(0,r.Ql)((()=>[(0,r.mY)("Launching the ADempiere Application")])),_:1}),(0,r.mY)(" to perform the Client-Server client install which is the next thing to do after completing the Database setup.")]),n,(0,r.QD)("li",null,[(0,r.K2)(i,{to:"/community/wiki/user-guide/"},{default:(0,r.Ql)((()=>[(0,r.mY)("Getting Started")])),_:1}),(0,r.mY)(" Tutorial on how to setup and configure ADempiere for single computer operation (database, application and client all on the same machine).")]),o])])}]])},6899:(e,t,i)=>{i.r(t),i.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-49c99377","path":"/community/wiki/user-guide/application-server-installation-setup.html","title":"Application Server Installation & Setup","lang":"en-US","frontmatter":{"title":"Application Server Installation & Setup","category":"Community","star":9,"sticky":9,"tag":["Wiki","User Guide"],"article":false,"description":"This page is directed at System Administrators who need to install the ADempiere Application Server in a network environment where the database server could be running on a separate network server and the clients run on remote computers. For simple installations where application server, database server and client are all on the same machine, see Getting Started.","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/user-guide/application-server-installation-setup.html"}],["meta",{"property":"og:title","content":"Application Server Installation & Setup"}],["meta",{"property":"og:description","content":"This page is directed at System Administrators who need to install the ADempiere Application Server in a network environment where the database server could be running on a separate network server and the clients run on remote computers. For simple installations where application server, database server and client are all on the same machine, see Getting Started."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-12T15:44:58.000Z"}],["meta",{"property":"article:author","content":"ADempiere"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"User Guide"}],["meta",{"property":"article:modified_time","content":"2023-09-12T15:44:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Application Server Installation & Setup\\",\\"description\\":\\"This page is directed at System Administrators who need to install the ADempiere Application Server in a network environment where the database server could be running on a separate network server and the clients run on remote computers. For simple installations where application server, database server and client are all on the same machine, see Getting Started.\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"Pre-requisite Utilities","slug":"pre-requisite-utilities","link":"#pre-requisite-utilities","children":[]},{"level":2,"title":"Start","slug":"start","link":"#start","children":[]},{"level":2,"title":"Setting Up The ADempiere Server","slug":"setting-up-the-adempiere-server","link":"#setting-up-the-adempiere-server","children":[]},{"level":2,"title":"Setup Fields","slug":"setup-fields","link":"#setup-fields","children":[]},{"level":2,"title":"Testing the Setup","slug":"testing-the-setup","link":"#testing-the-setup","children":[]},{"level":2,"title":"Common Issues","slug":"common-issues","link":"#common-issues","children":[{"level":3,"title":"Java Home Error","slug":"java-home-error","link":"#java-home-error","children":[]},{"level":3,"title":"Web Port Error","slug":"web-port-error","link":"#web-port-error","children":[]},{"level":3,"title":"JNP Port 1099 Error","slug":"jnp-port-1099-error","link":"#jnp-port-1099-error","children":[]},{"level":3,"title":"JNP Name Not Found Exception","slug":"jnp-name-not-found-exception","link":"#jnp-name-not-found-exception","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"git":{"createdTime":1694533498000,"updatedTime":1694533498000,"contributors":[{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.17,"words":1851},"filePathRelative":"community/wiki/user-guide/application-server-installation-setup.md","localizedDate":"September 12, 2023","excerpt":"<p>This page is directed at System Administrators who need to install the ADempiere Application Server in a network environment where the database server could be running on a separate network server and the clients run on remote computers. For simple installations where application server, database server and client are all on the same machine, see <a href=\\"/community/wiki/user-guide/\\" target=\\"blank\\">Getting Started</a>.</p>","autoDesc":true}')}}]);