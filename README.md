# Bitácora Isidora Álvarez

## Portafolio 

En mi portafolio veras los trabajos que he hecho durante la carrera de Diseño Industrial y, a través de ellos, cuenta cómo he ido creciendo como diseñadora.

Siempre me ha gustado fabricar cosas con las manos. en mi primer año de carrera empece trabajando en lo conceptual como llevar a cambo ideas mezclar conceptos poco a poco empece a meterme en el trabajo manual, ya en mi segundo año empece fuerte con el trabajo en  madera, armando sillas, bancas y objetos que se pueden tocar y usar, como la Chair Ele, la Banca estructural, el Banquito zapatero y Mimus Thenca, una tenca chilena que mueve las alas al jalar de su tirador. en mi tercer año me encontré con la electrónica y descubrí lo entretenido que es hacer sonar algo que una misma construyó, como el Sin-te o la Tostadora inestable. Y en estos ultimos meses llegué a la web, donde aprendí que lo digital también se puede sentir, con proyectos como Multirealidades y Contrapresión.

Cada trabajo me enseñó algo y me llevó al siguiente. Este portafolio es mi forma de mostrar ese camino, lo que me gusta y lo que me mueve a diseñar, que al final es crear cosas que se usan y se habitan.

---

## 1. Links

| | Link |
|---|---|
| Figma | [Portafolio-Isidora-Alvarez](https://www.figma.com/design/ADbrbFWVOeJkBakvKcFPj6/Portafolio-Isidora-Alvarez) |
| Sitio en GitHub Pages | [isidoraalvarez.github.io/portafolio](https://isidoraalvarez.github.io/portafolio/) |
| Repositorio | [github.com/isidoraalvarez/portafolio](https://github.com/isidoraalvarez/portafolio) |

**Páginas del sitio.** El sitio tiene dos páginas HTML enlazadas con la barra de navegación.

| Página | Contenido |
|---|---|
| `index.html` | Portada con el titular dinámico, mi avatar y una foto mía de fondo. Desde ahí se entra a los trabajos, una lista de los 12 proyectos (Sin-te, Tostadora inestable, Multirealidades, Traductor de bits, Contrapresión, Diseño Abierto, Banquito zapatero, Chair Ele, Banca estructural, Mimus Thenca, Comedero para Mascotas y Lámpara) con filtros y la ficha de cada uno, y al contacto |
| `sobre-mi.html` | Sobre mí, herramientas, trayectoria y contacto |

La página está hecha con HTML, CSS y JavaScript. Las dos páginas comparten el diseño (`style.css`) y las animaciones (`script.js`). Las fotos están en la carpeta [imagenes](imagenes/) y los videos en [videos portafolio](videos%20portafolio/).

### **Tipografías.** El sitio usa cuatro tipografías, todas de Google Fonts con licencia SIL Open Font License 1.1.

| Tipografía | Dónde la uso |
|---|---|
| [Dancing Script](https://fonts.google.com/specimen/Dancing+Script) (700) | Títulos grandes en cursiva pixelada ("hola, diseño para lo que se *usa / habita*", "trabajos", el nombre de cada proyecto, "sobre mí y contacto" y "contacto"). La convierto en píxeles cuadrados con código, y el texto real queda en la página para los lectores de pantalla |
| [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans) | Logo, botones, número de cada trabajo en el índice, herramientas de software y enlaces del contacto |
| [DM Mono](https://fonts.google.com/specimen/DM+Mono) | Menú, reloj, etiquetas y categorías. Dentro de cada proyecto es la única tipografía (ficha, descripción, créditos y botones) |
| [DM Sans](https://fonts.google.com/specimen/DM+Sans) | Textos de lectura, como la presentación de la portada, la bio y la trayectoria |
| <img width="537" height="760" alt="image" src="https://github.com/user-attachments/assets/bc996875-3d3f-4ee0-898a-648fa1536eeb" /> |

### **Paleta.** Fondo blanco con tonos de azul, celeste y beige, a partir de una paleta de referencia que me gustó. Le da más blanco y aire a la página.

| Color | Hex | Dónde lo uso |
|---|---|---|
| Azul petróleo | `#567C8D` | Títulos en cursiva pixelada, etiquetas, trama de las fotos y el árbol pixelado |
| Azul marino | `#2F4156` | Textos y botón principal |
| Celeste | `#C8D9E6` | Manchas del fondo, líneas y hover del índice |
| Beige | `#F5EFEB` | Paneles y pie de página |
| Blanco | `#FFFFFF` | Fondo de la página |
| <img width="1007" height="80" alt="image" src="https://github.com/user-attachments/assets/fbd164ea-adf8-4ed3-a5fd-512df1b7dc7a" /> |

---

## 2. Registro por avance

### Avance 1 (9 de noviembre)

 **Qué presenté.**
- Para esta entrega presente la primera versión que tenía, que seguía una estética de estampillas con una paleta de colores grises y azules, la página era solo una y todo se veía de corrido, las estampillas estaban en 3 columnas y la pagina se alargaba mucho.

| versión 1 | versión 1 |
|---|---|
| <img width="530" height="632" alt="image" src="https://github.com/user-attachments/assets/27fd91c6-9a0b-4086-97a9-eb2772a9d48b" /> | <img width="327" height="461" alt="image" src="https://github.com/user-attachments/assets/40b46df2-7a01-42b2-aa62-6c3c729d76d2" /> |

- **Comentarios recibidos.**
  - Mover la sección "Sobre mí" al final de la página.
  - Asegurar que el diseño y los componentes se mantuvieran al exportar la página como PDF.
- **Qué cambié después.**
  - Moví "Sobre mí" al final. Ahora el sitio parte con la portada, sigue directo con los trabajos y cierra con "Sobre mí" y el contacto. Así quien visita ve primero los proyectos y conoce a la autora después.
  - **No apliqué** la sugerencia del PDF. El encargo pide un sitio interactivo publicado en GitHub Pages, y un PDF no puede mostrar las ventanas que se arrastran, el titular que cambia de palabra ni las transiciones. Preferí dedicar el tiempo a que la experiencia funcione bien en desktop y en mobile.
  - Hice una **versión 2** con una estética más Y2K, con ventanas flotantes con barra de título, un dock para navegar y etiquetas redondeadas. Mantuve las estampillas de los proyectos en una sola fila con scroll horizontal.

### Avance 2 (16 de noviembre)

**Qué presenté.**
- Para esta entrega presente la una 3era versión que tenía, habia mantenido la  estética de estampillas con una paleta de colores con mas azules y el gris paso a segundo plano, la página seguia siendo solo una, se veía de corrido, las estampillas las modifique y las hice en una sola columna y para ver los trabajos se deslizaba a la derecha como un carrusel. ninguna de estas versiones lograva sentir mi escencia en ella

| versión 2 | versión 2 |
|---|---|
| <img width="1135" height="682" alt="image" src="https://github.com/user-attachments/assets/a7f98316-7e55-4c6e-965f-22995c56146a" />  | <img width="1137" height="678" alt="image" src="https://github.com/user-attachments/assets/b6af84a9-bfc1-4744-9f0d-56631c13e1c4" /> |
  

  
- **Comentarios recibidos.**
  - Hacer que las imágenes se adapten al tamaño del marco.
  - Poner los créditos de los colaboradores con quienes hice cada trabajo.
- **Qué cambié después.**
  - **Imágenes adaptadas al marco.** Algunas fotos no calzaban con su marco, quedaban franjas grises a los lados o el objeto se veía corrido. Ahora la foto principal de cada proyecto se muestra completa en su propia proporción, y en las fotos de proceso el panel abierto toma exactamente la forma de cada foto, sin márgenes y sin recortar el objeto.
  - **Créditos de colaboradores.** En la ficha de cada proyecto agregué el apartado de créditos con el nombre y el GitHub de mis compañeras, Camila ([github.com/Estrabismx](https://github.com/Estrabismx)) y Dayana ([github.com/dayanapanitrur](https://github.com/dayanapanitrur)). También acredité a Felipe Roa como creador del proyecto original de Multirealidades y a Ann Demeulemeester como autora del diseño original de la Chair Ele, que repliqué. En los proyectos que hice sola el apartado no aparece.
    
### Después del Avance 2 

Después del Avance 2, además de aplicar las correcciones, decidí cambiar mi diseño porque sentía que no me representaba. Busqué una estética más mía, con pixel art, fotos que saqué yo y una paleta de azules, y estos son los cambios que fui haciendo.

- Cambié las estampillas por un **índice de trabajos** con vista previa por píxeles, porque con 12 proyectos las estampillas saturaban la pantalla.
- Ordené los trabajos por **categoría** (electrónica, web y diseño de objetos) y por año.
- Cada proyecto se abre en una ventana con las fotos de proceso primero y debajo la ficha (año, tipo y materiales o recursos utilizados), la descripción, los créditos y el video.
- Agregué mi **avatar en pixel art** en la portada y un **cursor de corazón** pixelado.
- Cambié la paleta a una de azules, con el azul rey como protagonista.
- Separé **Sobre mí en su propia página** (`sobre-mi.html`), con herramientas, trayectoria y contacto, para que el sitio tenga dos páginas enlazadas.
- Integré un componente de la librería **Shaders.com** (DotGrid, dentro del filtro Pixelate), una grilla de cuadrados que titila detrás del titular. Usé Pixelate para que los puntos fueran cuadrados, igual que el resto de la estética pixel.
- Cambié la estética a una más editorial, tipo afiche, a partir de nuevas referencias (fotos con trama de puntos, tonos lavanda y celeste lavados, collage). Saqué las ventanas tipo sistema operativo y dejé paneles planos y translúcidos.
- Los títulos ahora van en una **cursiva pixelada**, inspirada en la estética de píxeles, que va con mis gustos. Uso la fuente Dancing Script (Google Fonts, licencia OFL) y la convierto en píxeles cuadrados con código. Primero probé con Sacramento, pero era tan fina que al pixelarla no se leía. El texto real sigue estando en la página para los lectores de pantalla.
- En la portada agregué un **collage de fotos de mis trabajos en trama de píxeles cuadrados** (Sin-te, Chair Ele y Lámpara), generado con código a partir de las fotos.
- Cambié la **paleta** a tonos de azul, celeste, beige y blanco, con más blanco en la página.
- El fondo de la portada es una **foto mía de una playa, pixelada y con un filtro de los colores de mi paleta** (azul marino en las sombras, azul petróleo en los tonos medios, y celeste y beige en las partes claras), con opacidad baja para que acompañe sin competir con el texto. La pixela el componente Pixelate de Shaders.com (y la misma versión pixelada en CSS si el navegador no tiene WebGPU). Dejé solo la foto, el titular y el personaje, y saqué el collage, el árbol y la grilla para que la imagen se distinga. Antes probé dibujar la foto con letras (ASCII), pero no se reconocía.
- El fondo de la sección de trabajos ahora es una **foto mía de un tronco**, con un filtro de los colores de la paleta y opacidad baja, en vez del fondo de cuadritos.
- Agregué dos fotos nuevas y un segundo video a la **Tostadora inestable**. La ficha ahora puede mostrar más de un video.
- Agrandé la **barra de navegación**. Los links ahora son botones con borde, para que se note que hay que entrar a cada sección, y en el celular quedan visibles en una segunda fila.
- Ordené el sitio como el portafolio de mi compañero Nicolás Miranda. Al entrar se ve **solo la portada**, y los trabajos aparecen al apretar "ver trabajos" o "trabajos" en el menú, como si fueran otra página.
- La lista de trabajos ahora muestra **solo el nombre de cada proyecto, y al pasar el cursor la fila se abre y aparece su foto**, con el nombre en una banda blanca abajo. Es una adaptación a JavaScript sin React del componente **Skiper 53 · HoverExpand_002** de Skiper UI (autor Gurvinder Singh, [skiper-ui.com/v1/skiper53](https://skiper-ui.com/v1/skiper53)), que pide atribución en su versión gratuita. En el celular, el primer toque abre la fila y el segundo entra al proyecto.
- Probé dejar el título "trabajos" fijo arriba con la lista pasando por debajo (referente effepinnastudio.com), pero tapaba los trabajos y lo saqué.
- Agregué **filtros por categoría** sobre la lista de trabajos (todo, electrónica, web y diseño de objetos), inspirada en cómo organiza su portafolio mi compañero Nicolás Miranda.
- Saqué el **cursor de corazón** y agregué el plano del Banquito zapatero a sus fotos de proceso.
- Le di **más detalle y sombras al personaje** (cejas, nariz, labios en dos tonos, mejillas, gargantilla, brillo en el pelo y pliegues en el pantalón).
- Actualicé el Figma con el diseño editorial. Está ordenado según el proceso, en cinco páginas (Boceto, Wireframes, UI Kit, Desktop y Mobile). El boceto es digital y a mano alzada, y los wireframes están en grises y baja fidelidad, con notas de la interacción. El UI kit muestra juntas las cuatro tipografías y la cursiva normal al lado de su versión pixelada. Tiene las variables de color, los estilos de texto y, en su propia mesa de trabajo, los componentes con estados (botón primario y secundario, link de menú, fila del índice, enlace del pie y botón cerrar), todos con auto layout. El prototipo muestra inicio, sobre mí y la ficha de un proyecto en desktop y mobile, con hover en botones y links y navegación entre pantallas.
  
                                                          **VERSIÓN ACTUAL**

| Foto 1 | Foto 2 |
|---|---|
| <img width="823" height="723" alt="image" src="https://github.com/user-attachments/assets/63f069b3-47ec-4840-8a6b-c2e124f2c3b6" /> | <img width="370" height="662" alt="image" src="https://github.com/user-attachments/assets/45c1100c-fec8-4b39-a272-f69d5c533b49" /> |
| Foto 3 | Foto 4 |
| <img width="1890" height="866" alt="image" src="https://github.com/user-attachments/assets/c07b150d-62a6-44c3-a28a-b3f997cf8f27" /> |<img width="1903" height="868" alt="image" src="https://github.com/user-attachments/assets/78881c81-9fc0-48c6-9e1e-2ef4515f5a65" /> |
| Foto 5 | Foto 6 |
| <img width="1903" height="866" alt="image" src="https://github.com/user-attachments/assets/0b0af37f-a1f3-4b36-a94d-01f924b5787a" /> | <img width="1880" height="858" alt="image" src="https://github.com/user-attachments/assets/48f97778-eaef-4c50-b6ab-1d405041aac6" /> |

---

## 3. Uso de IA

**Herramientas.** Claude, para programar la página y para armar en Figma la interactividad de cómo se ven los trabajos.

Usé IA en dos partes.

- **Programación.** Con Claude escribí y ajusté el HTML, CSS y JavaScript de la página según mis instrucciones.
- **Figma.** Para armar la interactividad del prototipo, en cómo se ven y se abren los trabajos.

Las decisiones de diseño fueron mías. Qué proyectos mostrar, los referentes, la paleta, la estética, qué se quedaba y qué se descartaba, y cada corrección pedida después de revisar el resultado.

| Etapa | Qué le pedí | Qué me entregó | Qué decidí yo |
|---|---|---|---|
| Avatar pixel art <img width="220" height="537" alt="image" src="https://github.com/user-attachments/assets/15c69e48-91fe-4dc6-ba75-903ab6c47214" /> | Que me ayudara a crear mi avatar en pixel art a partir de mis fotos y a animarlo | Mi avatar dibujado en una grilla de píxeles, que respira, parpadea, mira hacia el cursor y saluda | Elegí las referencias y le pedí más detalle y sombras en la cara, el pelo y la ropa |
| Página web | Escribir el HTML, CSS y JavaScript del portafolio según mis instrucciones | El código de la página | Revisé cada versión y pedí las correcciones |
| Portada y secciones | Que al entrar se vea solo la portada y que trabajos y Sobre mí se abran con sus botones | Las secciones que se abren como páginas | Elegí esta organización, inspirada en el portafolio de mi compañero |
| Fondos | Usar mis fotos de la playa y del tronco de fondo, con un filtro de mi paleta y opacidad baja | La playa pixelada en la portada y el tronco en trabajos | Elegí las fotos, la paleta y qué tan suaves se veían |
| Lista de trabajos <img width="1180" height="767" alt="image" src="https://github.com/user-attachments/assets/c307643e-706f-4208-9139-76acece8f68a" /> | Adaptar el componente Skiper 53 para que al pasar el cursor por el nombre aparezca la foto | La lista que se abre con la foto y los filtros por categoría | Pedí que mostrara solo el nombre y la foto al pasar el cursor |
| Fichas de los trabajos | Ordenar las fotos, descripciones y créditos de cada trabajo | Fichas con fotos de proceso, descripción, créditos y video | Escribí y corregí las descripciones, elegí las fotos y a quién acreditar |
| Figma <img width="1151" height="492" alt="image" src="https://github.com/user-attachments/assets/fe112749-925a-4530-94cc-1699a496200e" /> | Armar la interactividad del prototipo | Prototipo con hover y navegación entre pantallas | Revisé que se viera igual que la página |
| README | Ordenar y redactar este README | Estructura y redacción base | Revisé y cambié los textos para que sonaran a mí |

### Creación del personaje

- **Prompt 1.** "Quiero crear un personaje que me represente para la portada de mi portafolio. Te paso dos fotos mías para que tome mi pelo largo negro, mi cara y mi ropa, una polera negra de malla y jeans anchos oscuros. Quiero que sea animado, que respire, parpadee, salude y apunte a mis trabajos."
- **Prompt 2.** "No me convence el estilo de caricatura. Hazlo en pixel art, que se parezca a mí, con un contorno oscuro como en las referencias de personajes pixel art que te mando."
- **Prompt 3.** "Mejora más mi personaje, siento que se ve un poquito feito." Elegí que tuviera más detalle y sombras.
- **Qué me entregó.** Un avatar en pixel art dibujado con código, que respira, parpadea, mira hacia el cursor, saluda y habla, y después una versión con más detalle (cejas, nariz, labios en dos tonos, gargantilla, brillo en el pelo y pliegues en el pantalón).
- **Qué ajusté y por qué.**
  - Pasé de la caricatura al pixel art porque calzaba mejor con la letra pixelada.
  - Mantuve mi ropa real en el avatar para que se pareciera a mí.
 
<img width="222" height="520" alt="image" src="https://github.com/user-attachments/assets/861ccd90-67c8-4fa6-a2bc-9cae6e90b56e" />


### Transiciones de las imágenes en la descripción de cada proyecto

- **Prompt 1.** "En la ficha de cada proyecto quiero que las fotos de proceso se vean como un acordeón. Al pasar el mouse o hacer clic, la foto elegida se abre a color y las demás quedan angostas y en gris, con una transición suave."
- **Prompt 2.** "Cuando abro un proyecto desde la lista, quiero que la ventana crezca desde la fila donde hice clic, en vez de aparecer de golpe."
- **Prompt 3.** "Las fotos de proceso no pueden tener márgenes ni cortarse. Haz que la foto abierta se vea completa, ocupando todo su panel."
- **Qué me entregó.** El acordeón de fotos con la transición de apertura, la ventana que crece desde la fila del índice y un ajuste para que el panel abierto tome la proporción de cada foto.
- **Qué ajusté y por qué.**
  - Pedí que la foto principal de cada proyecto fuera la primera del acordeón y que no se repitiera en el proceso.
  - Pedí que no quedaran márgenes en ningún trabajo, porque las franjas oscuras hacían ver las fotos más chicas.
  - Pedí quitar la etiqueta "proceso de diseño y fabricación" para que las imágenes tuvieran más protagonismo.
  - 
<img width="1181" height="777" alt="image" src="https://github.com/user-attachments/assets/dee44b14-6450-4309-8782-a1df1fbc2a23" />

### Lista de trabajos que muestra la foto

- **Prompt.** "Para la sección de trabajos quiero que aplique el código que te doy… quiero que sea el nombre del proyecto, pases el cursor y te salga la foto del proyecto." Le pasé el componente Skiper 53 de Skiper UI.
- **Qué me entregó.** La lista donde cada trabajo muestra su nombre y, al pasar el cursor, se abre y aparece su foto, hecha sin React para que funcione en mi página.
- **Qué ajusté y por qué.** Pedí que no se vieran las fotos de los trabajos hasta pasar el cursor, para que la lista quedara limpia. 

---

## 4. Problemas y soluciones

| Problema | Causa | Solución |
|---|---|---|
| El link de GitHub Pages mostraba una página en blanco con el README | Pages publicó primero el repositorio solo con el README, antes de subir `index.html` | Subí `index.html` a la raíz y esperé el ✔ verde de Pages |
| Después de subir cambios seguía viendo la versión antigua | El navegador guarda los archivos un tiempo (caché) | Recargué con Ctrl + F5 o abrí la página en una ventana privada |
| Las imágenes salían cortadas o con franjas | La imagen se estiraba más que su marco y el panel tenía un ancho fijo | La foto principal usa su propia proporción y en el acordeón el panel abierto toma la forma de cada foto |
| La imagen grande desapareció de todos los proyectos | Una regla ocultaba la portada si también estaba en la lista de proceso | La portada va primero en el acordeón y se salta en la lista de proceso |
| El título "trabajos" se cortaba en el celular | El tamaño de letra era fijo y más ancho que la pantalla | El tamaño se calcula según el ancho de la pantalla |
| GitHub no dejaba subir la carpeta `imagenes` | El navegador acepta máximo 100 archivos por subida | Saqué los videos a su propia carpeta para que `imagenes` quedara bajo 100 archivos |
| "Commit failed, the file is too large" | Los videos juntos pesaban demasiado para una sola subida | Subí los videos en tandas, en la carpeta `videos portafolio/` |
| El GIF de la Lámpara no se veía en la página publicada | El archivo no estaba subido a GitHub | Subirlo a `videos portafolio/trabajo-lampara/`, y si un video no carga la sección se oculta |
| El sitio tenía una sola página | Sobre mí era una sección dentro de `index.html` | Lo separé en `sobre-mi.html`, enlazada desde la navegación |
| VS Code mostraba "1 problem" en `style.css` | `-webkit-line-clamp` sin su propiedad estándar | Agregué `line-clamp` |
| La cursiva pixelada no se leía bien | Sacramento es una letra muy fina y al engrosarla para pixelarla se tapaban letras como la "a" y la "o" | Comparé varias cursivas convertidas en píxeles y elegí Dancing Script, que tiene trazo propio y se lee sin engrosarla |
| La "j" de "trabajos" se cortaba | El alto de cada título era fijo y no alcanzaba para las letras con cola | El código mide el alto real del texto antes de pixelarlo |
| Se cargaba una tipografía que ya no se usaba | Instrument Serif quedó en el enlace de Google Fonts después del cambio de estética | La saqué del enlace para que la página cargue más rápido |

---

## 5. Aprendizajes del semestre

Este semestre aprendí que diseñar una interfaz se parece más a prototipar un objeto de lo que pensaba. En el pañol puedo probar, corregir y volver a cortar, y con el código pasó lo mismo, cada versión del portafolio fue un prototipo que tuve que mirar, usar y corregir. Pasar de Figma al código me obligó a pensar en cosas que en el diseño estático no aparecen, como qué pasa en el celular, cuánto demora en cargar una imagen o cómo se mueve un elemento cuando alguien lo toca.

Con Multirealidades me di cuenta de que una misma cámara puede entender cosas muy distintas según cómo se programe, y que la tecnología nos deja ver información que nosotros solos no podríamos descifrar. Con Traductor de bits me quedé con la pregunta de hasta dónde se puede traducir un formato a otro, y con Contrapresión me di cuenta de que el teléfono, que usamos todos los días casi sin pensarlo, puede ser mucho más que una pantalla, y que diseñar cómo se controla algo también es diseñar cómo se siente usarlo.

Documentar mis trabajos en una página web me hizo ordenar mi proceso. Elegir qué fotos mostrar, en qué orden y cómo describirlo me ayudó a entender qué es lo importante de cada pieza.

---

## 6. Recursos y referentes visuales

### Imágenes de proceso

Las fotos de proceso de cada trabajo están en la carpeta [imagenes](imagenes/), con una carpeta por trabajo, y los videos en [videos portafolio](videos%20portafolio/). En la página se ven dentro de la ficha de cada proyecto. El proceso de diseño del portafolio (boceto, wireframes, UI kit y prototipo) está en el [Figma](https://www.figma.com/design/ADbrbFWVOeJkBakvKcFPj6/Portafolio-Isidora-Alvarez).

### Referentes de diseño

| Referente | Link | Qué tomé |
|---|---|---|
| Bill Guo | [billguo.me](https://billguo.me) | Proyectos como colección, jerarquía tipográfica (primera etapa) |
| Cindy Ly | [cindyly.design](https://www.cindyly.design/) | Navegación lúdica tipo escritorio y elementos arrastrables (primera etapa) |
| Feather Computer | [feather.computer](https://feather.computer/) | Contenido ordenado como archivos en un escritorio (primera etapa) |
| Nicolás Miranda (compañero) | [nicolas-miranda1312.github.io](https://nicolas-miranda1312.github.io/) | La organización del portafolio, con la portada primero y cada sección aparte, y los filtros de los trabajos |
| Effepinna Studio (Fabio Pinna) | [effepinnastudio.com](https://effepinnastudio.com) | Un personaje propio como presentación |


### Librerías de componentes y recursos web

| Recurso | Link | Uso en el portafolio |
|---|---|---|
| Aceternity UI | [ui.aceternity.com](https://ui.aceternity.com) | Inspiración, rastro de píxeles que sigue al cursor |
| Bencho | [bencho.dev](https://bencho.dev) | Inspiración, acordeón de fotos de proceso |
| Skiper UI | [skiper-ui.com](https://skiper-ui.com) | **Adaptado.** La lista de trabajos que se abre con la foto (Skiper 53) e inspiración para el acordeón de fotos |
| Motion Primitives | [motion-primitives.com](https://motion-primitives.com) | Inspiración, desenfoque del titular y transiciones |
| Shaders | [shaders.com](https://shaders.com) | **Integrado.** Componentes Pixelate e ImageTexture en el fondo de la portada (licencia MIT) |
| 21st.dev | [21st.dev/community/components](https://21st.dev/community/components) | Consulta |
| save.design | [save.design/explore](https://save.design/explore) | Consulta de referentes |
| Designeer | [designeer.xyz](https://designeer.xyz) | Consulta de referentes |
| mesh3d | [mesh3d.gallery](https://mesh3d.gallery) | Consulta de referentes |
| Google Fonts | [fonts.google.com](https://fonts.google.com) | Tipografías |

---

## 7. Reflexión sobre la creación de mi portafolio

Crear un portafolio que tenga mi esencia fue más difícil de lo que pensé. No se trata solo de ordenar trabajos y elegir colores, sino de mirarme hacia adentro y preguntarme qué es lo que de verdad me gusta, qué me representa y qué quiero mostrar. En el camino probé muchas estéticas, paletas y formas de presentarme, y en cada cambio tuve que revisar si eso era realmente yo o solo algo que se veía bien.

Lo más complicado fue pensar en cómo me iban a ver los demás. Quería que quien entrara pudiera conocer quién soy y viera a una persona confiable, capaz de lograr buenas cosas. Eso es aún más difícil, porque en cierta parte no es fácil creerse el cuento de que eres buena en lo que haces. Mostrar mis proyectos, contar cómo los hice y poner mi nombre en ellos me obligó a mirar mi trabajo con otros ojos y a reconocer lo que he logrado.

Al final, el portafolio también terminó siendo un ejercicio personal. Me ayudó a ordenar lo que he hecho, a entender hacia dónde quiero ir y a confiar un poco más en lo que sé hacer.
