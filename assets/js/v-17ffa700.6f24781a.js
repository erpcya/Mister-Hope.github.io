"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6206],{32645:(e,a,l)=>{l.r(a),l.d(a,{default:()=>v});var i=l(78e3);const t=(0,i.uE)('<h2 id="what-is-a-callout" tabindex="-1"><a class="header-anchor" href="#what-is-a-callout" aria-hidden="true">#</a> What is a Callout?</h2><p>Callout is a coding mechanism to modify the content of a display field in a <a href="a">Window</a>. This display field need to be attached to a Column in AD <a href="a">Table</a>. You can write your logic in Java Classes (need a server restart in this case), or you use a JSR223 <a href="a">Script Callout</a>.</p><p>In <a href="a">Table and Column</a> window, under Column tab, you will find the Callout field which will call the Callout class whenever the field undergoes input activity. Callout can change the values of other fields in the same Window in scope or in use at that time.</p><p>A Callout is a java method which gets executed when the field in an ADempiere window tab gets focus and onChange activity. A Callout class (extending CalloutEngine) will group such methods into a single file, usually under a document name i.e. CalloutOrder.java. A Callout is defined in the Table &amp; Column window, under a column tab, where you may specify a list of fully qualified methods (separated by &quot;;&quot;).</p><h2 id="how-to-create-a-callout" tabindex="-1"><a class="header-anchor" href="#how-to-create-a-callout" aria-hidden="true">#</a> How to create a callout</h2><h2 id="steps-to-create-a-callout" tabindex="-1"><a class="header-anchor" href="#steps-to-create-a-callout" aria-hidden="true">#</a> Steps to create a callout</h2><p>To write a callout you have to do the following things:</p><ol><li>Write the callout function</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package org.adempiere.callout; \n\nimport java.util.Properties; \n\nimport org.compiere.model.CalloutEngine; \nimport org.compiere.model.GridField; \nimport org.compiere.model.GridTab; \nimport org.compiere.util.AdempiereSystemError; \nimport org.compiere.util.Env; \n\npublic class SimpleCallout extends CalloutEngine { \n\npublic String test(Properties ctx, int windowNo, GridTab mTab, GridField mField, \n Object value) throws AdempiereSystemError { \n\n  // First get value\n  Price = ((BigDecimal)mTab.getValue(&quot;Price&quot;));\n  \n  // do some calculations\n   BigDecimal Total = Qty.multiply(Price);\n       \n  // Set value back to column field\n  mTab.setValue(&quot;Total&quot;, Total);\n  \n  return &quot;this is a return string&quot;; \n } \n} \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The full qualified name of the method is org.adempiere.callout.SimpleCallout.test - you will need this in the next step.</p><ol start="2"><li><p>Login as system administrator and open the &#39;Table&amp;Column&#39; window. Navigate to the table and column to which you want to add your callout by typing the full qualified method name into the &#39;Callout&#39; field. (You can add more than one callout if you seperate them with &#39;;&#39;)</p></li><li><p>Create a jar file with your callout classes and rename it to customization.jar. Copy this customization.jar into the Adempiere/lib folder of your ADempiere installation and rerun the RUN_setup.bat/sh. Restart the ADempiere server and install the new client (or restart the client with Java WebStart).</p></li><li><p>Test your callout by navigating to the field where you added the callout and change it&#39;s value.</p></li></ol><h2 id="what-is-available-inside-callout" tabindex="-1"><a class="header-anchor" href="#what-is-available-inside-callout" aria-hidden="true">#</a> What is available inside Callout</h2><p>You can have callout functions with 5 parameters (like in the example above) or 6 parameters. The last parameter is the old value.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public String callout (Properties ctx, String method, int WindowNo,\n   GridTab mTab, GridField mField, Object value, Object oldValue);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>the WindowNo will inform the system which window is referred to. This we can understand as when the callout happens, we were in a window screen. So when the callout finishes its job, the result update will appear in the same window. MTab concerns the Tab (that is linked to a table &amp; field context) that is in focus. You can hover your mouse pointer over any word and see the highlights. If you press the Ctrl key while you hover over them, and click, you may really dial in – to the class that handles the objects.</p><h2 id="how-to-get-existing-value" tabindex="-1"><a class="header-anchor" href="#how-to-get-existing-value" aria-hidden="true">#</a> How to get existing value</h2><p>This is easily achieved as shown in the example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Qty = (BigDecimal)mTab.getValue(&quot;Qty&quot;);\n  Price = ((BigDecimal)mTab.getValue(&quot;Price&quot;));\n  BigDecimal Total = Qty.multiply(Price);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The getValue pattern basically obtain the value from the Window field in scope.</p><h2 id="how-to-change-value" tabindex="-1"><a class="header-anchor" href="#how-to-change-value" aria-hidden="true">#</a> How to change value</h2><p>The setValue will then place a new value into the Window Field. The Total field changes as you put in a new value into either Qty or Price.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  mTab.setValue(&quot;Total&quot;, Total);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See also</h2>',23),n=(0,i._)("li",null,[(0,i._)("a",{href:"a"},"Script_Callout")],-1),o=(0,i.Uk)("The old famous "),s={href:"http://compiere.red1.org/Callout.zip",target:"_blank",rel:"noopener noreferrer"},r=(0,i.Uk)("Callout.pdf"),d=(0,i.Uk)("."),u=(0,i.uE)('<h2 id="callout-en-espanol" tabindex="-1"><a class="header-anchor" href="#callout-en-espanol" aria-hidden="true">#</a> Callout en Español</h2><p>Crear un callout sencillo:</p><p>Por Victor Cappugi. Venezuela</p><p>1ero. Que es un callout. Un callout en adempiere no es mas que una forma de alterar los valores de los campos en las ventanas por medio de cálculos directos o asignaciones, como ejemplo realizar la suma de dos campos. Se advierte que no se use Callout como métodos de validación de Datos, ya que ésto se hace por el diccionario. Consiste en un método que se ejecuta en adempiere cuando un campo de una ventana es modificado</p><p>Forma de Generar un callout.</p><ol><li>se debe escribir en Java con su IDE favorito, la estructura del Callout. Las partes básicas serán.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> package org.adempiere.callout;  //un paquete que puede ser creado o incluir el callout en org.compiere.model\n import java.util.Properties;\n import org.compiere.model.CalloutEngine;   //notese que pertenecen al paquete \n import org.compiere.model.GridField;      // org.compiere.model, si crea el callout en este \n import org.compiere.model.GridTab;    // paquete, estos import no son necesarios.  \n import org.compiere.util.AdempiereSystemError;  \n public class CalloutXX extends CalloutEngine () { //extension de la clase CalloutEngine el nombre Calloutxx puede ser cambiado por el \n nombre de su callout (siga los estandares)\n public void metodo1 ( Properties ctx, int WindowNo,GridTab mTab,GridField mField,Object value)     \n {-------\n ------}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Funcionalidad:</p><ul><li>Use getValue() y setValue() para obtener y colocar valores de los campos</li><li>Ejecute consultas de sql con la siguiente estructura:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> String sql= &quot;Select pa.amount from &quot;\n +&quot;c_paymentallocate pa where&quot;\n +&quot;C_Invoice_ID=?&quot;; //el signo ? se sustituira despues con una variable\n PreparedStatement pstmt = null;   //Variable de preparacion de Recordset\n ResultSet rs = null;              //Recordser donde se guardara el resultado\n try      //Todo dentro de un try para capturar posibles errores\n {\n   pstmt = DB.prepareStatement(sql, null); //prepara la ejecucion del query\n   pstmt.setInt(1, S_ResourceAssignment_ID);//Sustituye el ? por la variable. ojo si hay mas de una es\n  //secuencial, es decir el segundo ? es 2 y asi sucesivamente\n  rs = pstmt.executeQuery();  //Ejecuta el query y lo coloca en rs\n  if (rs.next())    //next o registro\n  {\n    M_Product_ID = rs.getInt (1);  //almacena en variable el 1er campo. Es secuencial  \n  }\n   }\n  catch (SQLException e)\n   {\n    log.log(Level.SEVERE, &quot;Tax&quot;, e); //envia al log el error\n    }\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Otra forma de generar consultas SQL por Jose Prince. Venezuela:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>BigDecimal idResource = (BigDecimal) mTab.getValue(I_ProductPlanning.COLUMNNAME_ResourceForm_ID); //Aqui se extrae el ID de una ventana\n String sql = &quot;SELECT porcEficiencia FROM ResourceForm WHERE ResourceForm_ID=?&quot;; //La condición en la sentencia es el ID que se extrajo anteriormente\n BigDecimal porcEficiencia = DB.getSQLValueBDEx(null, sql,idResource); //Esta linea ejecuta la consulta y se le pasa la variable con el ID\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Instalación del Callout</p><ol><li>Genere el archivo jar con su paquete o clase (acordarse de las dependencias, tener las importaciones correctas)</li><li>el archivo .jar debe tener nombre: customization.jar</li><li>colocar el archivo customization.jar en la carpeta lib de su ADEMPIERE_HOME (servidor)</li><li>Correr el RUN_setup o RUN_Silentsetup</li><li>Abrir el Sistema como System Admnistrator</li><li>Ir a Tabla y Columna y buscar la tabla y el campo al cual se le quiere colocar el callout (por facilidad vaya a Ventana, Pestaña y Campo, busque la ventana, seleccione la pestaña y el campo y con el botón derecho acérquese a la tabla, ésto le permitirá asegurarse de que es la ventana correcta)</li><li>en el campo seleccionado ir al recuadro de Llamada (callout) y colocar la ruta lógica, es decir org.adempiere.callout.Calloutprb.test por ejemplo si se creó un paquete llamado adempiere.callout y dentro tiene una clase llamada Calloutprb y un método llamado test.</li><li>Almacene y ejecute el sistema como Usuario, abra la ventana y pruebe modificando el campo</li></ol><h2 id="see-also-1" tabindex="-1"><a class="header-anchor" href="#see-also-1" aria-hidden="true">#</a> See Also</h2>',15),c=(0,i.Uk)("Callout Code"),m=(0,i.Uk)(" that details each Callout functions and location"),p={},v=(0,l(13860).Z)(p,[["render",function(e,a){const l=(0,i.up)("ExternalLinkIcon"),p=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[t,(0,i._)("ul",null,[n,(0,i._)("li",null,[o,(0,i._)("a",s,[r,(0,i.Wm)(l)]),d])]),u,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Wm)(p,{to:"/community/wiki/developers-guide/callout-code.html"},{default:(0,i.w5)((()=>[c])),_:1}),m])])])}]])},31976:(e,a,l)=>{l.r(a),l.d(a,{data:()=>i});const i=JSON.parse('{"key":"v-17ffa700","path":"/community/wiki/developers-guide/callout.html","title":"Callout","lang":"en-US","frontmatter":{"title":"Callout","category":["Community"],"star":9,"sticky":9,"tag":["Wiki","Developer\'s Guide"],"article":false,"summary":"What is a Callout? Callout is a coding mechanism to modify the content of a display field in a Window. This display field need to be attached to a Column in AD Table. You can write","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/developers-guide/callout.html"}],["meta",{"property":"og:title","content":"Callout"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-21T19:56:54.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Developer\'s Guide"}],["meta",{"property":"article:modified_time","content":"2023-08-21T19:56:54.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"What is a Callout?","slug":"what-is-a-callout","children":[]},{"level":2,"title":"How to create a callout","slug":"how-to-create-a-callout","children":[]},{"level":2,"title":"Steps to create a callout","slug":"steps-to-create-a-callout","children":[]},{"level":2,"title":"What is available inside Callout","slug":"what-is-available-inside-callout","children":[]},{"level":2,"title":"How to get existing value","slug":"how-to-get-existing-value","children":[]},{"level":2,"title":"How to change value","slug":"how-to-change-value","children":[]},{"level":2,"title":"See also","slug":"see-also","children":[]},{"level":2,"title":"Callout en Español","slug":"callout-en-espanol","children":[]},{"level":2,"title":"See Also","slug":"see-also-1","children":[]}],"git":{"createdTime":1692647814000,"updatedTime":1692647814000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.99,"words":1197},"filePathRelative":"community/wiki/developers-guide/callout.md","localizedDate":"August 21, 2023"}')}}]);