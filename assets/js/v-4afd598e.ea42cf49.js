"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4572],{89032:(e,a,r)=>{r.r(a),r.d(a,{default:()=>i});var d=r(68152);const s=[(0,d.IL)('<h2 id="como-hacer-una-copia-de-seguridad-y-restaurar-la-base-de-datos-de-adempiere" tabindex="-1"><a class="header-anchor" href="#como-hacer-una-copia-de-seguridad-y-restaurar-la-base-de-datos-de-adempiere" aria-hidden="true">#</a> Cómo hacer una copia de seguridad y restaurar la Base de Datos de ADempiere</h2><h3 id="realizar-una-copia-de-seguridad-de-los-datos" tabindex="-1"><a class="header-anchor" href="#realizar-una-copia-de-seguridad-de-los-datos" aria-hidden="true">#</a> Realizar una Copia de Seguridad de los Datos</h3><p>La base de datos de ADempiere se puede respaldar fácilmente utilizando el script RUN_DBExport.(sh/bat) que se encuentra en ADEMPIERE_HOME/utils/. La base de datos se puede respaldar en cualquier momento sin detener el servidor de la base de datos.</p><p>El script RUN_DBExport provocará que la base de datos se exporte a un archivo llamado Exp.dmp en el directorio ADEMPIERE_HOME/data y se comprimirá en Exp.jar. El script también llamará a myDBcopy.(sh/bat) en ADEMPIERE_HOME/utils/, el cual se puede modificar para copiar el archivo Exp.jar a una ubicación externa u otro medio.</p><p>Si modificas myDBcopy, guarda una copia del archivo en otro lugar por si se sobrescribe durante una actualización de software.</p><p>Se recomienda tener una tarea programada regularmente que ejecute RUN_DBExport para asegurar la seguridad de tus datos.</p><h2 id="recovering-from-a-backup" tabindex="-1"><a class="header-anchor" href="#recovering-from-a-backup" aria-hidden="true">#</a> Recovering from a Backup</h2><h2 id="recuperacion-desde-una-copia-de-seguridad" tabindex="-1"><a class="header-anchor" href="#recuperacion-desde-una-copia-de-seguridad" aria-hidden="true">#</a> Recuperación desde una Copia de Seguridad</h2><p>Para recuperar una copia de seguridad, copia el archivo de respaldo Exp.jar en el directorio ADEMPIERE_HOME/data. En una terminal, ejecuta el comando java para expandir el archivo jar.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jar <span class="token parameter variable">-xvf</span> Exp.jar\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Cuando el archivo Exp.dat esté disponible, ejecuta RUN_DBRestore.(sh/bat) desde el directorio ADEMPIERE_HOME/utils. Esto restaurará la base de datos desde la copia de seguridad, sobrescribiendo cualquier dato en la base de datos de ADempiere.</p>',11)],t={},i=(0,r(42272).c)(t,[["render",function(e,a){return(0,d.Wz)(),(0,d.An)("div",null,s)}]])},23204:(e,a,r)=>{r.r(a),r.d(a,{data:()=>d});const d=JSON.parse('{"key":"v-4afd598e","path":"/es/docs/system-administration/database-backup-and-restore.html","title":"Respaldo y Restauración de la Base de Datos","lang":"es-ES","frontmatter":{"title":"Respaldo y Restauración de la Base de Datos","category":"Documentación","star":9,"sticky":9,"article":false,"author":"Jesús Albujas","description":"Cómo hacer una copia de seguridad y restaurar la Base de Datos de ADempiere Realizar una Copia de Seguridad de los Datos La base de datos de ADempiere se puede respaldar fácilmente utilizando el script RUN_DBExport.(sh/bat) que se encuentra en ADEMPIERE_HOME/utils/. La base de datos se puede respaldar en cualquier momento sin detener el servidor de la base de datos.","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://github.com/adempiere/adempiere-site.github.io/docs/system-administration/database-backup-and-restore.html"}],["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/es/docs/system-administration/database-backup-and-restore.html"}],["meta",{"property":"og:title","content":"Respaldo y Restauración de la Base de Datos"}],["meta",{"property":"og:description","content":"Cómo hacer una copia de seguridad y restaurar la Base de Datos de ADempiere Realizar una Copia de Seguridad de los Datos La base de datos de ADempiere se puede respaldar fácilmente utilizando el script RUN_DBExport.(sh/bat) que se encuentra en ADEMPIERE_HOME/utils/. La base de datos se puede respaldar en cualquier momento sin detener el servidor de la base de datos."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-26T20:09:37.000Z"}],["meta",{"property":"article:author","content":"Jesús Albujas"}],["meta",{"property":"article:modified_time","content":"2023-12-26T20:09:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Respaldo y Restauración de la Base de Datos\\",\\"description\\":\\"Cómo hacer una copia de seguridad y restaurar la Base de Datos de ADempiere Realizar una Copia de Seguridad de los Datos La base de datos de ADempiere se puede respaldar fácilmente utilizando el script RUN_DBExport.(sh/bat) que se encuentra en ADEMPIERE_HOME/utils/. La base de datos se puede respaldar en cualquier momento sin detener el servidor de la base de datos.\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/es/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/es/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/es/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"Cómo hacer una copia de seguridad y restaurar la Base de Datos de ADempiere","slug":"como-hacer-una-copia-de-seguridad-y-restaurar-la-base-de-datos-de-adempiere","link":"#como-hacer-una-copia-de-seguridad-y-restaurar-la-base-de-datos-de-adempiere","children":[{"level":3,"title":"Realizar una Copia de Seguridad de los Datos","slug":"realizar-una-copia-de-seguridad-de-los-datos","link":"#realizar-una-copia-de-seguridad-de-los-datos","children":[]}]},{"level":2,"title":"Recovering from a Backup","slug":"recovering-from-a-backup","link":"#recovering-from-a-backup","children":[]},{"level":2,"title":"Recuperación desde una Copia de Seguridad","slug":"recuperacion-desde-una-copia-de-seguridad","link":"#recuperacion-desde-una-copia-de-seguridad","children":[]}],"git":{"createdTime":1703621377000,"updatedTime":1703621377000,"contributors":[{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.82,"words":245},"filePathRelative":"es/docs/system-administration/database-backup-and-restore.md","localizedDate":"26 de diciembre de 2023","excerpt":"<h2> Cómo hacer una copia de seguridad y restaurar la Base de Datos de ADempiere</h2>\\n<h3> Realizar una Copia de Seguridad de los Datos</h3>\\n<p>La base de datos de ADempiere se puede respaldar fácilmente utilizando el script RUN_DBExport.(sh/bat) que se encuentra en ADEMPIERE_HOME/utils/. La base de datos se puede respaldar en cualquier momento sin detener el servidor de la base de datos.</p>","autoDesc":true}')}}]);