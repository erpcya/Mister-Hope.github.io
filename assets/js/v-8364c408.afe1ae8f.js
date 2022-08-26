"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9977],{1348:(e,a,o)=>{o.r(a),o.d(a,{default:()=>ye});var r=o(8e3);const i=(0,r._)("p",null,"Antes de empezar a hablar de modularidad, me gustaría describir el camino para definir la arquitectura más adecuada para un software como ADempiere.",-1),n=(0,r._)("p",null,"Durante los últimos años he estado leyendo y analizando los diferentes enfoques y arquitecturas para el desarrollo de software y al mismo tiempo descifrar cuál sería la mejor para ADempiere.",-1),t=(0,r.Uk)("Como todos sabemos muy bien, el diseño de nuestro programa se basa en una combinación de dos capas "),l={href:"http://en.wikipedia.org/wiki/Cliente",target:"_blank",rel:"noopener noreferrer"},s=(0,r.Uk)("Cliente/servido"),c=(0,r.Uk)(" (1) Swing, que en los años noventa del el siglo pasado fue uno de los que mejor se adoptó porque utilizó la red y las PC de manera que el servidor principal se liberó de la carga pesada al dejar ciertas tareas en el cliente. El objetivo principal era que el núcleo del software se ejecutara en un servidor central mientras los clientes se conectaban a él para acceder a los datos y realizar la lógica comercial localmente."),d=(0,r._)("p",null,"Irónicamente, creo que han regresado a donde comenzaron originalmente, ya que había un mainframe con terminales tontas que solo mostraban datos a los usuarios sin ningún tipo de procesamiento de datos complejo.",-1),u=(0,r._)("p",null,"No estuve presente en la época en que se necesitaba una bata blanca para acceder a grandes centros de datos formados por varios IBM 390 o Systems 36 con cientos de terminales (ATM). Pero hoy, el contexto es de alguna manera similar a estos tiempos pasados: hay grandes centros de datos -que por cierto han ayudado a reducir costos- con servidores alquilados a los que se accede de manera virtual por un par de cientos de dólares al mes (Amazon, Google Cloud, Heroku, por nombrar algunos). La principal diferencia ahora es que las aplicaciones tienen que dar servicio a miles o incluso millones de usuarios, la capacidad de poder escalar horizontalmente es un requisito habitual hoy en día; este nuevo contexto exige que las aplicaciones se diseñen de manera diferente ya que los requisitos son totalmente diferentes.",-1),p=(0,r._)("p",null,"El acceso a estos servidores se realiza mediante gadgets que, aunque no son totalmente tontos, ejecutan aplicaciones cliente que se ejecutan en un navegador web cuya única tarea es interpretar java script o código HTML, donde el valor más alto es la estandarización e integración de múltiples sistemas operativos y plataformas. .",-1),m=(0,r._)("p",null,"En la próxima década, el enfoque principal fue el desarrollo de aplicaciones basadas en el paradigma del controlador de vista modelo [MVC] (http://en.wikipedia.org/wiki/Model) (2), que permitía la separación de código.",-1),g=(0,r._)("p",null,"La capa del modelo permite el acceso y actualización de datos, en su mayoría guardados en una base de datos relacional. Por otro lado, permite trabajar con mapeo objeto-relacional (ORM) que consiste en una abstracción en la base de datos y persistencia, reemplazando el uso de sentencias SQL dependiendo de la implementación de un motor implementado en cada base de datos. La capa de vista separa el código para la visualización y la interacción del usuario a través de una interfaz de usuario, que se implementa de acuerdo con el dispositivo de acceso.",-1),f=(0,r._)("p",null,"La capa de controlador se encarga de vincular la capa de vista con el modelo de datos e implementa el código que responde a las acciones necesarias.",-1),h=(0,r._)("p",null,"Cuando analizamos el código de ADempiere en retrospectiva, podemos ver el transcurso del tiempo y la evolución que sufrió. Se pasó del cliente/servidor original basado en Java swing con acceso directo a la base de datos a través de sentencias SQL puras al actual ORM propio combinado con SQL para acceder a los datos y la aplicación MVC basada en el cliente web AJAX.",-1),b=(0,r._)("p",null,"Aunque la tecnología ha avanzado, nuestro modelo de dominio ha persistido; por eso podemos inferir que el activo más importante de ADempiere es el Diccionario de Aplicaciones que preserva el modelo de dominio y la lógica de negocio.",-1),k=(0,r.Uk)("Gracias a que ADempiere fue redactado y desarrollado sobre una Arquitectura Dirigida por Modelos "),_={href:"http://en.wikipedia.org/wiki/Model-driven_architecture",target:"_blank",rel:"noopener noreferrer"},D=(0,r.Uk)("MDA"),v=(0,r.Uk)(" (3), el modelo de dominio está protegido de obsolescencia por el Diccionario de Aplicaciones"),y=(0,r._)("p",null,"Como persona voluntaria, responsable de la futura arquitectura de la querida ADempiere, adoptaremos el enfoque DDD como línea principal de desarrollo.",-1),w=(0,r.Uk)("Ahora: ¿qué es un desarrollo de software guiado por el "),q={href:"http://en.wikipedia.org/wiki/Domain-driven_design",target:"_blank",rel:"noopener noreferrer"},U=(0,r.Uk)("DDD de Diseño Impulsado por Dominio"),A=(0,r.Uk)("(4)?"),j=(0,r._)("p",null,[(0,r._)("strong",null,"DDD"),(0,r.Uk)(" es un enfoque para desarrollar software con requisitos complejos y que tiene un vínculo profundo con un modelo que define el núcleo de la lógica comercial que se está desarrollando. Los mandamientos más importantes para desarrollar y mantener un modelo de dominio son:")],-1),x=(0,r._)("ul",null,[(0,r._)("li",null,"Situar el foco principal del proyecto en el core y la lógica de negocio del dominio."),(0,r._)("li",null,"Todos los diseños complejos se basan en un modelo de dominio."),(0,r._)("li",null,"Iniciar una colaboración creativa entre técnicos y expertos en modelos de dominio para definir iterativamente un modelo que aborde los problemas particulares del dominio.")],-1),z=(0,r.Uk)("El "),C={href:"http://domainlanguage.com/ddd/patterns/DDD_Reference_2011-01-31.pdf",target:"_blank",rel:"noopener noreferrer"},E=(0,r.Uk)("Domain Driven Design"),L=(0,r.Uk)(" (5) no es una tecnología ni una metodología. Es un conjunto de patrones para la construcción de aplicaciones comerciales a partir del modelo de dominio, que proporciona una estructura útil, práctica y con una terminología consistente para la toma de decisiones en el curso del diseño de software."),M=(0,r.uE)("<p><strong>Dominio:</strong> una esfera de conocimiento (ontología), influencia o actividad. El área donde un usuario aplica un programa es el dominio del software. <strong>Modelo:</strong> un conjunto de abstracciones que describen secciones de un dominio seleccionado que se pueden usar para resolver problemas o tareas relacionadas con ese dominio. <strong>Lenguaje ubicuo:</strong> un lenguaje estructurado en el contexto de un modelo de dominio y utilizado por todos los miembros del equipo para interconectar todas las actividades del equipo. <strong>Contexto:</strong> el escenario en el que una palabra o declaración define su significado. Una visión puramente técnica para el desarrollo de software podría ser la migración a una aplicación de múltiples capas (capa de persistencia, capa de datos de acceso, capa de servicio y capa de presentación). <strong>DDD</strong> no está en conflicto con ninguna tecnología o patrón de diseño, por ejemplo [Inyección de dependencia DI] (http://en.wikipedia.org/wiki/Dependency_injection) (6),</p><p>pero sin cambios hay una premisa muy importante ¡El modelo de dominio debe permanecer aislado de las capas externas! ya que cualquier cambio tecnológico no debería afectar mi core business.</p><p><strong>Premisa importante:</strong></p><ul><li>¡El modelo debe mantenerse aislado de las capas externas! La razón: ningún cambio tecnológico debe afectar al núcleo del negocio.</li><li>Cada capa es un círculo concéntrico que define un área de software; mientras se mueve desde el centro hacia los niveles exteriores, el software evoluciona. Los círculos exteriores son mecanismos, mientras que los círculos interiores son las condiciones.</li><li>La regla más importante para esta arquitectura es la regla de dependencia.</li><li>Como regla general, las dependencias dentro del código fuente solo pueden apuntar hacia el centro. Nada en un círculo interior puede saber nada en un círculo exterior. Además, cualquier nombre declarado en un círculo exterior no puede ser mencionado por el código de un círculo interior. Esto incluye llamadas a funciones, clases, variables o cualquier otra entidad de software.</li><li>Por la misma razón, los formatos de datos utilizados en un círculo exterior no pueden ser utilizados por un círculo interior, especialmente si estos formatos se generan en un ORM desde un círculo exterior. Nuestra intención es que nada de un círculo exterior afecte a los círculos interiores.</li><li>Así, para la interacción entre círculos o capas es primordial establecer una API que permita la comunicación entre capas internas y externas mediante adaptadores o mensajes.</li></ul>",4),S=(0,r.Uk)("Hay algunas arquitecturas basadas en esta vista; son similares y difieren en algunos puntos, pero coinciden en la importancia de un modelo de dominio "),W={href:"http://alistair.cockburn.us/Hexagonal+architecture",target:"_blank",rel:"noopener noreferrer"},R=(0,r.Uk)("Arquitectura hexagonal"),P=(0,r.Uk)(" (7), [Arquitectura cebolla](http:// www.infoq.com/news/2014/10/ddd-onion-architecture) (8), [La arquitectura limpia] (http://blog.8thlight.com/uncle-bob/2012/08/13/the- arquitectura limpia.html) (9)."),T=(0,r._)("p",null,"Como la forma de definir cómo construiremos el software alrededor de ADempiere es crucial, adoptaremos la arquitectura limpia/Onion, donde el enfoque principal es mantener limpio el modelo de dominio interactuando con las capas externas por medio de contratos (API o interfaces) que permiten separar convenientemente el modelo de dominio de las implementaciones (API o contrato). Esto permitirá una evolución ordenada evitando la obsolescencia tecnológica.",-1),I=(0,r.Uk)("Por otro lado, definiremos un "),O={href:"http://en.wikipedia.org/wiki/Domain-specific_language",target:"_blank",rel:"noopener noreferrer"},V=(0,r.Uk)("DSL de Lenguaje Específico de Dominio"),H=(0,r.Uk)(" (10) para ADempiere enfocado al negocio, que permita construir nuestro lenguaje ubicuo y delimitando claramente los contextos. Esto ayuda a un desarrollo más natural de la lógica empresarial. Como se dijo antes, toda decisión tiene que ser autorizada por los beneficios a obtener; avanzar hacia DDD nos permitirá obtener los siguientes beneficios:"),Z=(0,r.uE)("<p><strong>Los beneficios:</strong></p><ul><li>Código desacoplado</li><li>Reducir el código de espagueti</li><li>Servicios transversales independientes del modelo de dominio (Log, Transacciones, Seguridad).</li><li>Código fácil de mantener</li><li>Software adaptable a cambios</li><li>Diseño basado en componentes</li><li>Contextos delimitados por el proceso de negocio</li><li>Construir nuestros propios conjuntos de prueba (funcional, integración, prueba de regresión)</li><li>Mejor manejo de dependencias y modularidad.</li><li>Crear un DSL (lenguaje específico del dominio) (9) para la empresa</li><li>Compilación de Adempiere como un sistema reactivo (11) (Responsive, Resilient, Elastic, Message Driver)</li><li>Una aplicación diseñada para las exigencias de hoy</li></ul><p>Es importante que los desarrolladores interesados ​​en participar en este gran proyecto se familiaricen con los conceptos y la terminología.</p><p>En los próximos meses y semanas seguiré escribiendo más artículos con ejemplos concretos que permitan la discusión.</p><p>Víctor Pérez Un fundador de ADempiere victor.perez@e-evolution.com</p><p>Referencias:</p>",6),N=(0,r.Uk)("(1) "),B={href:"http://en.wikipedia.org/wiki/Client%E2%80%93server_model",target:"_blank",rel:"noopener noreferrer"},F=(0,r.Uk)("http://en.wikipedia.org/wiki/Client–server_model"),J=(0,r.Uk)("(2) "),Q={href:"http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller",target:"_blank",rel:"noopener noreferrer"},G=(0,r.Uk)("http://en.wikipedia.org/wiki/Model–view–controller"),X=(0,r.Uk)("(3) "),Y={href:"http://en.wikipedia.org/wiki/Model-driven_architecture",target:"_blank",rel:"noopener noreferrer"},K=(0,r.Uk)("http://en.wikipedia.org/wiki/Model-driven_architecture"),$=(0,r.Uk)("(4) "),ee={href:"http://en.wikipedia.org/wiki/Domain-driven_design",target:"_blank",rel:"noopener noreferrer"},ae=(0,r.Uk)("http://en.wikipedia.org/wiki/Domain-driven_design"),oe=(0,r.Uk)("(5) "),re={href:"http://domainlanguage.com/ddd/patterns/DDD_Reference_2011-01-31.pdf",target:"_blank",rel:"noopener noreferrer"},ie=(0,r.Uk)("http://domainlanguage.com/ddd/patterns/DDD_Reference_2011-01-31.pdf"),ne=(0,r.Uk)("(6) "),te={href:"http://en.wikipedia.org/wiki/Dependency_injection",target:"_blank",rel:"noopener noreferrer"},le=(0,r.Uk)("http://en.wikipedia.org/wiki/Dependency_injection"),se=(0,r.Uk)("(7) "),ce={href:"http://alistair.cockburn.us/Hexagonal+architecture",target:"_blank",rel:"noopener noreferrer"},de=(0,r.Uk)("http://alistair.cockburn.us/Hexagonal+architecture"),ue=(0,r.Uk)("(8) "),pe={href:"http://www.infoq.com/news/2014/10/ddd-onion-architecture",target:"_blank",rel:"noopener noreferrer"},me=(0,r.Uk)("http://www.infoq.com/news/2014/10/ddd-onion-architecture"),ge=(0,r._)("li",null,"(9) [http://blog.8thlight.com/uncle-bob/2012/08/13/the-clean-architecture.html](http://blog.8thlight.com/uncle-bob/2012/ 13/08/la-arquitectura-limpia.html)",-1),fe=(0,r.Uk)("(10) "),he={href:"http://en.wikipedia.org/wiki/Domain-specific_language",target:"_blank",rel:"noopener noreferrer"},be=(0,r.Uk)("http://en.wikipedia.org/wiki/Domain-specific_language"),ke=(0,r.Uk)("(11) "),_e={href:"http://www.reactivemanifesto.org",target:"_blank",rel:"noopener noreferrer"},De=(0,r.Uk)("http://www.reactivemanifesto.org"),ve={},ye=(0,o(3860).Z)(ve,[["render",function(e,a){const o=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[i,n,(0,r._)("p",null,[t,(0,r._)("a",l,[s,(0,r.Wm)(o)]),c]),d,u,p,m,g,f,h,b,(0,r._)("p",null,[k,(0,r._)("a",_,[D,(0,r.Wm)(o)]),v]),y,(0,r._)("p",null,[(0,r._)("strong",null,[w,(0,r._)("a",q,[U,(0,r.Wm)(o)]),A])]),j,x,(0,r._)("p",null,[z,(0,r._)("a",C,[E,(0,r.Wm)(o)]),L]),M,(0,r._)("p",null,[S,(0,r._)("a",W,[R,(0,r.Wm)(o)]),P]),T,(0,r._)("p",null,[I,(0,r._)("a",O,[V,(0,r.Wm)(o)]),H]),Z,(0,r._)("ul",null,[(0,r._)("li",null,[N,(0,r._)("a",B,[F,(0,r.Wm)(o)])]),(0,r._)("li",null,[J,(0,r._)("a",Q,[G,(0,r.Wm)(o)])]),(0,r._)("li",null,[X,(0,r._)("a",Y,[K,(0,r.Wm)(o)])]),(0,r._)("li",null,[$,(0,r._)("a",ee,[ae,(0,r.Wm)(o)])]),(0,r._)("li",null,[oe,(0,r._)("a",re,[ie,(0,r.Wm)(o)])]),(0,r._)("li",null,[ne,(0,r._)("a",te,[le,(0,r.Wm)(o)])]),(0,r._)("li",null,[se,(0,r._)("a",ce,[de,(0,r.Wm)(o)])]),(0,r._)("li",null,[ue,(0,r._)("a",pe,[me,(0,r.Wm)(o)])]),ge,(0,r._)("li",null,[fe,(0,r._)("a",he,[be,(0,r.Wm)(o)])]),(0,r._)("li",null,[ke,(0,r._)("a",_e,[De,(0,r.Wm)(o)])])])])}]])},4534:(e,a,o)=>{o.r(a),o.d(a,{data:()=>r});const r=JSON.parse('{"key":"v-8364c408","path":"/es/about/articles/2015-06-22-the-future-of-adempiere-as-a-ddd-reactive-system.html","title":"The Future Of ADempiere as a DDD reactive system","lang":"es-ES","frontmatter":{"title":"The Future Of ADempiere as a DDD reactive system","category":["Articulos"],"star":9,"sticky":9,"tag":["ADempiere","Announcement","Blog","DDD","Reactive System"],"author":"Victor Pérez","date":"2015-06-22T00:00:00.000Z","summary":"Antes de empezar a hablar de modularidad, me gustaría describir el camino para definir la arquitectura más adecuada para un software como ADempiere. Durante los últimos años he est","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/es/about/articles/2015-06-22-the-future-of-adempiere-as-a-ddd-reactive-system.html"}],["meta",{"property":"og:site_name","content":"Página Oficial de ADempiere"}],["meta",{"property":"og:title","content":"The Future Of ADempiere as a DDD reactive system"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-26T17:49:37.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:author","content":"Victor Pérez"}],["meta",{"property":"article:tag","content":"ADempiere"}],["meta",{"property":"article:tag","content":"Announcement"}],["meta",{"property":"article:tag","content":"Blog"}],["meta",{"property":"article:tag","content":"DDD"}],["meta",{"property":"article:tag","content":"Reactive System"}],["meta",{"property":"article:published_time","content":"2015-06-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-26T17:49:37.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1658272016000,"updatedTime":1661536177000,"contributors":[{"name":"RamiroV13","email":"89487449+RamiroV13@users.noreply.github.com","commits":2},{"name":"Yamel Senih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":5.71,"words":1712},"filePathRelative":"es/about/articles/2015-06-22-the-future-of-adempiere-as-a-ddd-reactive-system.md","localizedDate":"22 de junio de 2015"}')}}]);