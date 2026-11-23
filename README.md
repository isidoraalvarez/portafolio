# Bitácora Isidora Álvarez

## 1. Links

| | Link |
|---|---|
| Figma | [Portafolio-Isidora-Alvarez](https://www.figma.com/design/ADbrbFWVOeJkBakvKcFPj6/Portafolio-Isidora-Alvarez) |
| Sitio en GitHub Pages | [isidoraalvarez.github.io/portafolio](https://isidoraalvarez.github.io/portafolio/) |
| Repositorio | [github.com/isidoraalvarez/portafolio](https://github.com/isidoraalvarez/portafolio) |

---

## Portafolio 

En mi portafolio verás los trabajos que he hecho durante la carrera de Diseño Industrial y, a través de ellos, cuento cómo he ido creciendo como diseñadora.

Siempre me ha gustado fabricar cosas con las manos. En mi primer año de carrera empecé trabajando en lo conceptual, como llevar a cabo ideas y mezclar conceptos. Poco a poco empecé a meterme en el trabajo manual; ya en mi segundo año empecé fuerte con el trabajo en madera, armando sillas, bancas y objetos que se pueden tocar y usar, como la Chair Ele, la Banca estructural, el Banquito zapatero y Mimus Thenca, una tenca chilena que mueve las alas al jalar de su tirador. En mi tercer año me encontré con la electrónica y descubrí lo entretenido que es hacer sonar algo que una misma construyó, como el Sin-te o la Tostadora inestable. Y en estos últimos meses llegué a la web, donde aprendí que lo digital también se puede sentir, con proyectos como Multirealidades y Contrapresión.

Cada trabajo me enseñó algo y me llevó al siguiente. Este portafolio es mi forma de mostrar ese camino, lo que me gusta y lo que me mueve a diseñar, que al final es crear cosas que se usan y se habitan.

---

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
- Para esta entrega presenté la primera versión que tenía, que seguía una estética de estampillas con una paleta de colores grises y azules. La página era solo una y todo se veía de corrido; las estampillas estaban en 3 columnas y la página se alargaba mucho.

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
- Para esta entrega presenté la tercera versión que tenía. Había mantenido la estética de estampillas con una paleta de colores con más azules y el gris pasó a segundo plano; la página seguía siendo solo una y se veía de corrido, las estampillas las modifiqué y las dejé en una sola columna y para ver los trabajos se deslizaba a la derecha como un carrusel. Ninguna de estas versiones lograba que sintiera mi esencia en ella.

| versión 2 | versión 2 |
|---|---|
| <img width="1135" height="682" alt="image" src="https://github.com/user-attachments/assets/a7f98316-7e55-4c6e-965f-22995c56146a" />  | <img width="1137" height="678" alt="image" src="https://github.com/user-attachments/assets/b6af84a9-bfc1-4744-9f0d-56631c13e1c4" /> |

- **Comentarios recibidos.**
  - Hacer que las imágenes se adapten al tamaño del marco.
  - Poner los créditos de los colaboradores con quienes hice cada trabajo.
- **Qué cambié después.**
  - **Imágenes adaptadas al marco.** Algunas fotos no calzaban con su marco, quedaban franjas grises a los lados o el objeto se veía corrido. Ahora la foto principal de cada proyecto se muestra completa en su propia proporción, y en las fotos de proceso el panel abierto toma exactamente la forma de cada foto, sin márgenes y sin recortar el objeto.
  - **Créditos de colaboradores.** En la ficha de cada proyecto agregué el apartado de créditos con el nombre y el GitHub de mis compañeras. También acredité a Felipe Roa como creador del proyecto original de Multirealidades y a Ann Demeulemeester como autora del diseño original de la Chair Ele, que repliqué. En los proyectos que hice sola el apartado no aparece.

### Después del Avance 2 

Después del Avance 2, además de aplicar las correcciones, decidí cambiar mi diseño porque sentía que no me representaba. Busqué una estética más mía, con pixel art, fotos que saqué yo y una paleta de azules, y estos son los cambios que fui haciendo:

- Cambié las estampillas por un **índice de trabajos** con vista previa por píxeles, porque con 12 proyectos las estampillas saturaban la pantalla.
- Ordené los trabajos por **categoría** (electrónica, web y diseño de objetos) y por año.
- Cada proyecto se abre en una ventana con las fotos de proceso primero y debajo la ficha (año, tipo y materiales o recursos utilizados), la descripción, los créditos y el video.
- Agregué mi **avatar en pixel art** en la portada y un **cursor de corazón** pixelado (con ayuda de la IA).
- Cambié la paleta con más azules de protagonistas.
- Separé **Sobre mí en su propia página** (`sobre-mi.html`), con herramientas, trayectoria y contacto, para que el sitio tenga dos páginas enlazadas.
- Integré un componente de la librería **Shaders.com** (DotGrid, dentro del filtro Pixelate) (con ayuda de la IA), una grilla de cuadrados que titila detrás del titular. Usé Pixelate para que los puntos fueran cuadrados, igual que el resto de la estética pixel.
- Cambié la estética a una más editorial, tipo afiche, a partir de nuevas referencias (fotos con trama de puntos, tonos lavanda y celeste lavados, collage). Saqué las ventanas tipo sistema operativo y dejé paneles planos y translúcidos.
- Los títulos ahora van en una **cursiva pixelada**, inspirada en la estética de píxeles, que va con mis gustos. Uso la fuente Dancing Script (Google Fonts, licencia OFL) y la convierto en píxeles cuadrados con la lógica que programé para los títulos. Primero probé con Sacramento, pero era tan fina que al pixelarla no se leía. El texto real sigue estando en la página para los lectores de pantalla.
- En la portada agregué un **collage de fotos de mis trabajos en trama de píxeles cuadrados** (Sin-te, Chair Ele y Lámpara), generado con un script que programé a partir de las fotos (que al final terminé cambiando).
- El fondo de la portada es una **foto mía de una playa, pixelada y con un filtro de los colores de mi paleta** (azul marino en las sombras, azul petróleo en los tonos medios, y celeste y beige en las partes claras), con opacidad baja para que acompañe sin competir con el texto. La pixela el componente Pixelate de Shaders.com, y programé una versión equivalente en CSS como respaldo si el navegador no soporta WebGPU. Dejé solo la foto, el titular y el personaje, y saqué el collage, el árbol y la grilla para que la imagen se distinga. Antes probé dibujar la foto con letras (ASCII), pero no se reconocía.
- El fondo de la sección de trabajos ahora es una **foto mía de un tronco**, con un filtro de los colores de la paleta y opacidad baja, en vez del fondo de cuadritos.
- Agregué dos fotos nuevas y un segundo video a la **Tostadora inestable**. La ficha ahora puede mostrar más de un video.
- Agrandé la **barra de navegación**. Los links ahora son botones con borde, para que se note que hay que entrar a cada sección, y en el celular quedan visibles en una segunda fila.
- Ordené el sitio como un portafolio por secciones. Al entrar se ve **solo la portada**, y los trabajos aparecen al apretar "ver trabajos" o "trabajos" en el menú, como si fueran otra página.
- Probé dejar el título "trabajos" fijo arriba con la lista pasando por debajo (referente effepinnastudio.com), pero tapaba los trabajos y lo saqué.
-
