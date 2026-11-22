/* Portafolio Isidora Álvarez 2026 */

(function () {
  "use strict";

  /* ===== 0. PROYECTOS ===== */
  var RUTA = "imagenes/";

  var DAYANA = { nombre: "Dayana Pañitrur", rol: "colaboración", github: "https://github.com/dayanapanitrur" };
  var CAMILA = { nombre: "Camila Ramirez", rol: "colaboración", github: "https://github.com/Estrabismx" };
  var FELIPE = { nombre: "Felipe Roa", rol: "creador", github: "https://github.com/fefeliperoar" };
  var ANN = { nombre: "Ann Demeulemeester", rol: "diseño original" };
  var JIAMIN = { nombre: "Jiamin Huang", rol: "colaboración", github: "https://github.com/jiamin-huang-wu" };
  var BLOQUES = ["[qué problema aborda · por escribir]", "[cómo lo desarrollé · por escribir]", "[qué resultó · por escribir]"];

  /* cada trabajo tiene su carpeta en imagenes/: una foto de portada y el resto en proceso */
  var PROYECTOS = [
    {
      id: "multirealidades", categoria: "web", titulo: "Multirealidades", cod: "E02", anio: "2026", tipo: "multirealidades.sys / web", materiales: "HTML, CSS, JS, OpenCV.js, MediaPipe, Three.js",
      carpeta: "trabajo-multirealidades", portada: "multirealidades.png", foco: "50% 50%", proceso: [],
      creditos: [FELIPE, DAYANA], notaCreditos: "Proyecto original de Felipe Roa. Nosotras hicimos nuestra propia versión.",
      repo: "https://github.com/isidoraalvarez/Multirealidades", pages: "https://isidoraalvarez.github.io/Multirealidades/", video: "videos portafolio/trabajo-multirealidades/multi.mp4", bloques: BLOQUES,
      descripcion: [["qué es", "Es una página web de arte y tecnología con estética retro de sistemas operativos de los años 2000 (Y2K / Windows XP). El proyecto explora cómo la presencia y el movimiento del cuerpo humano pueden alterar, distorsionar o construir la realidad digital a través de la cámara web."], ["cómo funciona", "El sistema consta de una pantalla, una cámara web y tres sistemas interactivos que operan de manera simultánea. OpenCV detecta el movimiento y la quietud (si el usuario se queda quieto, la imagen se distorsiona como una alucinación), MediaPipe reconoce las manos y los gestos, y Three.js integra un modelo 3D hecho en Blender que se escala y desplaza con los dedos."], ["reflexión", "Multirealidades presenta tres sistemas que utilizan un mismo medio para recibir información, la cámara, pero la interpretan de tres maneras completamente distintas. Cada uno capta elementos que los demás omiten, datos que nosotros no lograríamos descifrar, pero que esta interfaz nos permite visualizar."]]
    },
    {
      id: "traductor-de-bits", categoria: "web", titulo: "Traductor de bits", cod: "T06", anio: "2026", tipo: "oír la luz / web", materiales: "HTML, CSS, JS, MediaPipe, MIDI",
      carpeta: "trabajo-trauctordebits", portada: "wii.png", foco: "50% 50%", proceso: [], creditos: [CAMILA],
      repo: "https://github.com/isidoraalvarez/traductor-de-bits", pages: "https://isidoraalvarez.github.io/traductor-de-bits/", video: "videos portafolio/trabajo-trauctordebits/traductor.mp4", bloques: BLOQUES,
      descripcion: [["qué es", "Una página web que permite subir cualquier fotografía para traducirla en audio en tiempo real. La plataforma escanea los píxeles de la imagen y, según su brillo, color y distribución, genera sonidos. Las zonas más oscuras producen frecuencias graves y las más iluminadas, notas agudas. El sonido generado se puede descargar y volver a subir para que la página cree una imagen a partir de ese sonido, y así sucesivamente, traduciendo de un formato a otro una y otra vez."], ["cómo funciona", "La imagen se divide en columnas y un cursor las recorre de lado a lado. Con MediaPipe el usuario mueve el cursor con la mano frente a la cámara, y con un controlador MIDI puede manipular en tiempo real el ritmo, la velocidad, el eco y el tipo de onda (senoidal, triangular, cuadrada o diente de sierra). La estética toma los menús de la consola Nintendo Wii."], ["reflexión", "En el mundo digital todo está construido a partir del bit, la mínima expresión de información. A partir de esto nos preguntamos si es posible traducir un formato a otro, convertir los bits de una imagen en sonido y viceversa. ¿Cuál es el límite para aplicar este concepto?"]]
    },
    {
      id: "contrapresion", categoria: "web", titulo: "Contrapresión", cod: "E04", anio: "2026", tipo: "web / tacto", materiales: "HTML, CSS, JS, MQTT",
      carpeta: "trabajo-contrapresion", portada: "contrapresion.png", foco: "50% 50%", proceso: [], creditos: [DAYANA],
      repo: "https://github.com/isidoraalvarez/contrapresion", pages: "https://isidoraalvarez.github.io/contrapresion/", video: "videos portafolio/trabajo-contrapresion/contrapresion.mp4", bloques: BLOQUES,
      descripcion: [["qué es", "Contrapresión es un juego situado en la web que ocupa el teléfono como mando para controlar ciertas funciones dentro de este. Se juega con 2 a 4 teléfonos y una pantalla compartida, conectados por MQTT. No se puede jugar de a una persona, porque siempre tiene que haber un POC y al menos un ciudadano."], ["concepto", "Una historia que transcurre en Chile, desde el estallido social del 18 de octubre de 2019 hasta la actualidad. Tres personajes corren por la Alameda perseguidos por un carro lanzaaguas del POC (Policía del Orden de Chile, una institución ficticia) por haber mandado un meme burlándose del gobierno. Es una mirada tragicómica a lo absurdo de pasar de una revuelta por mejores condiciones de vida a ser perseguidos por una broma."], ["cómo se juega", "Los puestos se sortean al entrar. Siempre hay un jugador que maneja el carro lanzaaguas del POC y de uno a tres ciudadanos que avanzan juntos por la Alameda. El POC sopla sobre el micrófono y, entre más fuerte, mayor es la fuerza del agua, que desenfoca la pantalla compartida. Los ciudadanos apoyan dos dedos sobre el teléfono para levantar un escudo, y solo los tres juntos detienen el chorro. Esa es la contrapresión."]]
    },
    {
      id: "banquito-zapatero", categoria: "objetos", titulo: "Banquito zapatero", cod: "M03", anio: "2025", tipo: "fabricación manual", materiales: "pino cepillado 2x2 y 2x1, esponja D30, cuerina, tornillos, perfiles de fierro, impresión 3D",
      origen: "Solemne 2",
      carpeta: "trabajo-bancozapatero", portada: "banco_zapatero3.jpeg", foco: "50% 50%",
      proceso: ["banco-plano.png", "banco_zapatero.jpeg", "banco_zapatero2.jpeg", "banco-a.jpeg", "banco-b.jpeg", "banco-c.jpeg", "banco-d.jpeg", "banco-e.jpeg", "banco-f.jpeg"],
      creditos: [DAYANA],
      repo: "", pages: "", video: "", bloques: BLOQUES,
      descripcion: [["qué es", "Un banco de entrada que también guarda zapatos. Tiene un asiento acolchado para sentarse a calzarse y dos niveles de estantes, el de arriba para zapatos bajos y el de abajo, más alto, para botas."], ["proceso", "La estructura es de pino y las patas se fijan con tornillos de 3\". Los estantes son listones de 2x1 que se apoyan en un rebaje del travesaño, separados 40 mm para que los zapatos ventilen. El cojín es de esponja D30 forrada en cuerina, con un cierre abajo para sacarlo y limpiarlo."], ["mejora", "En una segunda versión le agregamos un perchero de tubos de fierro que se puede subir y bajar a tres alturas con un seguro de botón. Una pieza impresa en 3D une el perfil cuadrado con el perfil circular."]]
    },
    {
      id: "sin-te", categoria: "electronica", titulo: "Sin-te", cod: "E03", anio: "2026", tipo: "sintetizador modular / electrónica", materiales: "acrílico, impresión 3D, PCB, madera",
      destacado: "Expuesto en INÉDITO Universitario · Design Week México 2026, en la selección de la Escuela de Diseño UDP",
      destacadoLink: "https://www.instagram.com/p/DeecHSEESYF/",
      carpeta: "trabajo-sintetizador", portada: "sin_tes.jpeg", foco: "50% 50%",
      proceso: ["sintes.jpeg", "sintess.jpeg", "sinte.jpeg", "sinte2.jpeg", "sinte-a.jpeg", "sinte-b.jpeg", "sinte-c.jpeg", "sinte-d.jpeg", "sinte-e.jpeg", "sinte-f.jpeg", "sinte-g.jpeg", "sinte-h.jpeg", "sinte-i.jpeg", "sinte-j.jpeg", "sinte-k.jpeg"],
      creditos: [CAMILA, DAYANA],
      repo: "", pages: "", video: "videos portafolio/trabajo-sintetizador/sinte-a.mp4", bloques: BLOQUES,
      descripcion: [["qué es", "Un sintetizador modular que hicimos en el taller de máquinas electrónicas, donde exploramos el mundo del sonido. La Escuela de Diseño UDP lo seleccionó para exponerse en INÉDITO Universitario, en Design Week México 2026."], ["proceso", "Lo desarrollamos por etapas. Primero armamos un sintetizador funcional con chips integrados, protoboard y cableado. Después lo modelamos en KiCad, con esquemáticos, PCB y lista de materiales. Por último lo fabricamos con PCB, soldadura, carcasa y montaje de componentes."], ["resultado", "El examen del taller fue un concierto tocado con el sintetizador."]]
    },
    {
      id: "tostadora", categoria: "electronica", titulo: "Tostadora inestable", cod: "E05", anio: "2026", tipo: "sintetizador / electrónica", materiales: "cartón, electrónica",
      carpeta: "trabajo-tostadorainestable", portada: "tostadora.jpeg", foco: "50% 50%",
      proceso: ["tostadora-h.jpeg", "tostadora-g.jpeg", "tostadora-a.jpeg", "tostadora-b.jpeg", "tostadora-c.jpeg", "tostadora-d.jpeg", "tostadora-e.jpeg", "tostadora-f.jpeg"],
      creditos: [CAMILA, DAYANA],
      repo: "", pages: "", video: ["videos portafolio/trabajo-tostadorainestable/tostadora.mp4", "videos portafolio/trabajo-tostadorainestable/tostadora-2.mp4"], bloques: BLOQUES
    },
    {
      id: "Chair-ele", categoria: "objetos", titulo: "Chair Ele", cod: "M01", anio: "2025", tipo: "fabricación manual", materiales: "madera de pino, tierra roja, esmalte sintético blanco, cola fría",
      herramientas: "AutoCAD, Rhino 8", tiempo: "8 semanas", origen: "Máquinas y Procesos 2025-1",
      carpeta: "trabajo-silla", portada: "silla.jpeg", foco: "50% 50%",
      proceso: ["silla-a.jpeg", "silla-b.jpeg", "silla-d.jpeg", "silla-f.jpeg", "silla-g.jpeg", "silla-g.jpg", "silla-h.jpeg"],
      creditos: [ANN], notaCreditos: "Réplica de una silla diseñada por Ann Demeulemeester. El diseño original le pertenece a ella.",
      repo: "", pages: "", video: "videos portafolio/trabajo-silla/silla.mp4", bloques: BLOQUES,
      descripcion: [["qué es", "Una recreación de la Élé Chair de Ann Demeulemeester que hice a partir de fotografías. Hice dos versiones, una pintada de blanco y otra pigmentada con tierra roja."], ["proceso", "Primero reconstruí la geometría de la silla desde las fotos, con sus medidas y proporciones, y armé plantillas para cortar las piezas. Después corté la madera, la uní con encajes de carpintería, la lijé y le di el acabado."], ["objetivo y desafío", "El objetivo era identificar formas y medidas a partir de una fotografía. El desafío fue hacer los encajes de carpintería."]]
    },
    {
      id: "Banca-estructural", categoria: "objetos", titulo: "Banca estructural", cod: "M02", anio: "2025", tipo: "fabricación manual", materiales: "junquillos de 19 x 19 mm, clavos de 1 1/4\" y 1 3/4\", cola fría",
      herramientas: "AutoCAD, Rhino 8", tiempo: "2 semanas", origen: "Taller Colectivo 2025-2",
      carpeta: "trabajo-banca", portada: "banca.jpeg", foco: "50% 50%",
      proceso: ["banca2.jpeg", "plano_banca.jpeg", "banca-a.jpeg", "banca-b.jpeg", "banca-d.jpeg", "banca-e.jpeg", "banca-f.jpeg", "banca-g.jpeg", "banca-i.jpeg", "banca-j.png"],
      creditos: [CAMILA, DAYANA, JIAMIN],
      repo: "", pages: "", video: "", bloques: BLOQUES,
      descripcion: [["qué es", "Un ejercicio para entender cómo trabajan las fuerzas en una estructura. El encargo pedía una banca de al menos 150 cm de largo, 40 cm de ancho y 42 cm de alto, hecha solo con 12 junquillos de 19 mm."], ["proceso", "Después de varias pruebas llegamos a una estructura reticulada. Esa trama nos permitió ahorrar material, simplificar las uniones y que la banca resistiera hasta 300 kg."], ["objetivo y desafío", "El objetivo era reconocer cómo se reparten las cargas en una estructura. El desafío fue construirla en poco tiempo y con muy poco material."]]
    },
    {
      id: "Mimus-Thenca", categoria: "objetos", titulo: "Mimus Thenca", cod: "O01", anio: "2025", tipo: "fabricación manual y digital", materiales: "madera de pino, filamento PLA, chapa de pino de 0,5 mm, terciado de eucalipto de 3 mm, cola fría",
      herramientas: "AutoCAD, Rhino 8, corte láser, impresión 3D", tiempo: "5 semanas", origen: "Taller Colectivo 2025-2",
      carpeta: "trabajo-ave", portada: "ave.jpeg", foco: "50% 50%",
      proceso: ["ave2.jpeg", "ave3.jpeg", "ave4.jpeg", "ave-a.jpeg", "ave-b.jpeg", "ave-d.jpeg"],
      creditos: [CAMILA, DAYANA, JIAMIN],
      repo: "", pages: "", video: "videos portafolio/trabajo-ave/tirador.mp4", bloques: BLOQUES,
      descripcion: [["qué es", "Un modelo educativo de la tenca chilena, hecho en colaboración entre la Facultad de Arquitectura, Arte y Diseño de la UDP y Parquemet, la red de parques metropolitanos, para enseñar sobre aves nativas. Cuelga y, al tirar de un cordel, mueve las alas."], ["proceso", "Partimos investigando a la tenca para entender su forma y cómo mueve las alas. Después prototipamos las piezas y el mecanismo. Lo hicimos modular para que, si una pieza falla, se pueda cambiar sin desarmar todo el modelo."], ["objetivo y desafío", "El objetivo era crear un elemento educativo para Parquemet. El desafío fue representar a la tenca de forma fiel."]]
    },
    {
      id: "Comedero-para-Mascotas", categoria: "objetos", titulo: "Comedero para Mascotas", cod: "O02", anio: "2025", tipo: "fabricación digital y manual", materiales: "piezas impresas en 3D, acero al carbono de 3 mm, imanes",
      herramientas: "Inventor", tiempo: "3 semanas", origen: "Fabricación Digital",
      carpeta: "trabajo-comedero", portada: "comedero3.jpeg", foco: "50% 50%",
      proceso: ["comedero4.jpeg", "comedero2.jpeg", "comedero.jpeg", "comedero5.jpeg"],
      creditos: [],
      repo: "", pages: "", video: "", bloques: BLOQUES,
      descripcion: [["qué es", "Un comedero que diseñé para resolver un problema de mi casa. Tengo dos perras de distinto tamaño y, con un comedero común, una tenía que agacharse más que la otra, lo que la hacía comer incómoda y atorarse."], ["proceso", "Hice una base de acero y soportes para los platos impresos en 3D, que se fijan a la base con imanes. Así cada plato se puede poner a la altura de cada perra, inclinarse para que coman mejor y ubicarse en distintas posiciones según el espacio."], ["objetivo y desafío", "El objetivo era que cada mascota comiera a la altura que le acomoda. El desafío fue que el sistema funcionara bien y se adaptara al espacio disponible."]]
    },
    {
      id: "lampara", categoria: "objetos", titulo: "Lámpara", cod: "O03", anio: "2025", tipo: "fabricación manual", materiales: "madera de pino 2x4\", tornillos de 1 1/2\" y 2 1/4\", cola fría",
      herramientas: "AutoCAD, Rhino 8", tiempo: "3 semanas", origen: "Taller Colectivo 2025-2",
      carpeta: "trabajo-lampara", portada: "lampara.jpeg", foco: "50% 50%",
      proceso: ["lampara2.jpeg", "lampara3.jpeg", "lampara4.jpeg", "lampara-a.jpeg", "lampara-b.jpeg", "lampara-c.jpeg", "lampara-d.jpeg", "lampara-e.jpeg", "lampara-f.png"],
      creditos: [CAMILA, DAYANA, JIAMIN],
      repo: "", pages: "", video: "videos portafolio/trabajo-lampara/lampara.gif", bloques: BLOQUES,
      descripcion: [["qué es", "Una lámpara pensada como ejercicio conceptual para cambiar el ambiente de un espacio. Al subir la pantalla la luz se abre y el lugar se vuelve más social. Al bajarla la luz se recoge y el espacio se siente más íntimo."], ["proceso", "Diseñamos un mecanismo de poleas y contrapesos para que la pantalla suba y baje con suavidad y se quede fija a la altura que uno elija. La estructura es de madera de pino unida con tornillos y cola fría."], ["objetivo y desafío", "El objetivo era crear una luminaria que influyera en el ambiente de un espacio. El desafío fue lograr un sistema móvil."]]
    }
  ];

  /* orden: por categoría y, dentro de cada una, del año más reciente al más antiguo */
  var CATEGORIAS = [["electronica", "electrónica"], ["web", "web"], ["objetos", "diseño de objetos"]];
  function ordenCategoria(c) { for (var i = 0; i < CATEGORIAS.length; i++) if (CATEGORIAS[i][0] === c) return i; return 99; }
  PROYECTOS.forEach(function (p, i) { p.orden = i; });
  PROYECTOS.sort(function (a, b) {
    return (ordenCategoria(a.categoria) - ordenCategoria(b.categoria)) || (+b.anio - +a.anio) || (a.orden - b.orden);
  });

  function rutaFoto(p, archivo) { return RUTA + p.carpeta + "/" + archivo; }


  /* ===== 1. Utilidades ===== */
  var reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var punteroFino = window.matchMedia("(pointer: fine)").matches;

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(txt) {
    return String(txt).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function dosDigitos(n) { return String(n).padStart(2, "0"); }
  function foco(p) { return ' style="object-position:' + esc(p.foco || "50% 50%") + '"'; }
  function esLink(v) { return /^https?:\/\//.test(v || ""); }
  function barraWin(titulo, botones) {
    return '<div class="tb"><span class="tb__titulo">' + esc(titulo) + "</span>" +
           (botones === false ? "" : '<span class="tb__botones" aria-hidden="true"><i></i><i></i><i></i></span>') + "</div>";
  }


  /* ===== 2. Personaje pixel art ===== */
  var NS_SVG = "http://www.w3.org/2000/svg";
  var C = {
    o: "#16121A",
    H: "#121318", h: "#2B3340", h2: "#46505E",
    S: "#E7B48F", s: "#C98E6A",
    E: "#24160F", W: "#F6F1E8", L: "#9A4A4A", B: "#D9A07F",
    T: "#1C2027", t: "#343B47",
    J: "#2E343C", j: "#434C57", jd: "#22272D",
    K: "#141414", k: "#D9D3C3", pulsera: "#B4CFF2"
  };

  /* lienzo de píxeles: se dibuja en una grilla y se exporta como SVG */
  function Lienzo(w, h) { this.w = w; this.h = h; this.c = new Array(w * h).fill(null); }
  Lienzo.prototype.set = function (x, y, col) {
    x = Math.floor(x); y = Math.floor(y);
    if (x >= 0 && y >= 0 && x < this.w && y < this.h) this.c[y * this.w + x] = col;
  };
  Lienzo.prototype.rect = function (x, y, w, h, col) {
    for (var j = 0; j < h; j++) for (var i = 0; i < w; i++) this.set(x + i, y + j, typeof col === "function" ? col(x + i, y + j) : col);
  };
  Lienzo.prototype.fila = function (y, x0, x1, col) { this.rect(x0, y, x1 - x0 + 1, 1, col); };
  Lienzo.prototype.poly = function (pts, col) {
    for (var y = 0; y < this.h; y++) {
      for (var x = 0; x < this.w; x++) {
        var px = x + .5, py = y + .5, dentro = false;
        for (var i = 0, j = pts.length - 1; i < pts.length; j = i++) {
          var a = pts[i], b = pts[j];
          if ((a[1] > py) !== (b[1] > py) && px < (b[0] - a[0]) * (py - a[1]) / (b[1] - a[1]) + a[0]) dentro = !dentro;
        }
        if (dentro) this.set(x, y, typeof col === "function" ? col(x, y) : col);
      }
    }
  };
  Lienzo.prototype.linea = function (x0, y0, x1, y1, grosor, col) {
    var pasos = Math.ceil(Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) * 2) + 1;
    for (var k = 0; k <= pasos; k++) {
      var t = k / pasos;
      this.rect(Math.round(x0 + (x1 - x0) * t), Math.round(y0 + (y1 - y0) * t), grosor, grosor, col);
    }
  };
  Lienzo.prototype.g = function (clase, contorno) {
    var w = this.w, h = this.h, c = this.c.slice();
    if (contorno) {
      for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) {
        if (this.c[y * w + x]) continue;
        var vecino = (x > 0 && this.c[y * w + x - 1]) || (x < w - 1 && this.c[y * w + x + 1]) ||
                     (y > 0 && this.c[(y - 1) * w + x]) || (y < h - 1 && this.c[(y + 1) * w + x]);
        if (vecino) c[y * w + x] = C.o;
      }
    }
    var html = "";
    for (var yy = 0; yy < h; yy++) {
      var xx = 0;
      while (xx < w) {
        var col = c[yy * w + xx];
        if (!col) { xx++; continue; }
        var ini = xx;
        while (xx < w && c[yy * w + xx] === col) xx++;
        html += '<rect x="' + ini + '" y="' + yy + '" width="' + (xx - ini) + '" height="1.02" fill="' + col + '"/>';
      }
    }
    return '<g class="' + clase + '">' + html + "</g>";
  }

  function malla(x, y) { return (x % 2 === 0 && y % 2 === 1) ? C.t : C.T; }

  /* avatar de pie (36 × 76) */
  function svgAvatar() {
    var W = 36, H = 76;
    function L() { return new Lienzo(W, H); }

    var atras = L();
    atras.fila(2, 12, 23, C.H); atras.fila(3, 10, 25, C.H); atras.fila(4, 9, 26, C.H);
    atras.rect(8, 5, 20, 34, C.H);
    atras.fila(39, 8, 12, C.H); atras.fila(39, 23, 27, C.H); atras.fila(40, 9, 11, C.H); atras.fila(40, 24, 26, C.H);
    atras.rect(10, 9, 1, 28, C.h); atras.rect(25, 9, 1, 28, C.h);

    var torso = L();
    torso.rect(15, 20, 6, 4, C.S); torso.fila(20, 15, 20, C.s);
    torso.fila(23, 11, 24, C.T);
    torso.rect(10, 24, 16, 13, malla);
    torso.rect(8, 24, 3, 4, C.T); torso.rect(25, 24, 3, 4, C.T);
    torso.fila(23, 15, 20, C.S); torso.fila(24, 16, 19, C.S); torso.fila(25, 17, 18, C.S);
    torso.rect(12, 37, 12, 2, C.S); torso.fila(37, 12, 23, C.s);

    var cabeza = L();
    cabeza.fila(6, 13, 22, C.S);
    cabeza.rect(12, 7, 12, 10, C.S);
    cabeza.fila(17, 13, 22, C.S); cabeza.fila(18, 13, 22, C.S); cabeza.fila(19, 14, 21, C.S); cabeza.fila(20, 15, 20, C.S);
    cabeza.rect(11, 11, 1, 3, C.S); cabeza.rect(24, 11, 1, 3, C.S);
    cabeza.fila(4, 10, 25, C.H);
    cabeza.fila(5, 10, 16, C.H); cabeza.fila(5, 19, 25, C.H); cabeza.rect(17, 5, 2, 1, C.S);
    cabeza.fila(6, 10, 14, C.H); cabeza.fila(6, 21, 25, C.H);
    cabeza.rect(10, 7, 3, 27, C.H); cabeza.rect(23, 7, 3, 27, C.H);
    cabeza.fila(34, 10, 11, C.H); cabeza.fila(34, 24, 25, C.H);
    cabeza.rect(11, 9, 1, 22, C.h); cabeza.rect(24, 9, 1, 22, C.h);
    cabeza.fila(3, 14, 16, C.h2); cabeza.fila(3, 19, 21, C.h2);
    cabeza.fila(10, 13, 15, C.H); cabeza.fila(10, 20, 22, C.H);
    cabeza.fila(11, 13, 15, C.E); cabeza.fila(11, 20, 22, C.E);
    cabeza.rect(13, 12, 3, 2, C.W); cabeza.rect(20, 12, 3, 2, C.W);
    cabeza.set(17, 15, C.s); cabeza.set(18, 15, C.s);
    cabeza.rect(13, 15, 2, 1, C.B); cabeza.rect(21, 15, 2, 1, C.B);
    cabeza.fila(17, 16, 19, C.L);

    /* detalle y sombras del rostro y el pelo (la luz viene desde la derecha) */
    var rostro = L();
    rostro.fila(7, 13, 22, C.s);                                   /* sombra del flequillo sobre la frente */
    rostro.set(13, 8, C.s); rostro.rect(13, 14, 1, 4, C.s); rostro.set(13, 18, C.s); rostro.set(14, 19, C.s); /* lado en sombra y mandíbula */
    rostro.fila(10, 13, 15, C.S); rostro.fila(10, 20, 22, C.S);    /* limpia las cejas gruesas */
    rostro.fila(9, 14, 15, C.h); rostro.set(13, 10, C.h);          /* ceja izquierda, fina y arqueada */
    rostro.fila(9, 20, 21, C.h); rostro.set(22, 10, C.h);          /* ceja derecha */
    rostro.fila(11, 12, 15, C.H); rostro.fila(11, 20, 23, C.H);    /* línea de pestañas con un pequeño delineado */
    rostro.set(15, 14, C.s); rostro.set(20, 14, C.s);              /* sombra bajo los ojos */
    rostro.set(17, 13, C.s); rostro.set(17, 14, C.s); rostro.set(17, 15, C.s); rostro.set(18, 15, "#B97A58"); /* nariz */
    rostro.fila(17, 16, 19, "#7E3A3F"); rostro.fila(18, 17, 18, "#B3575A"); /* labios en dos tonos */
    rostro.rect(13, 15, 2, 1, "#E0957C"); rostro.rect(21, 15, 2, 1, "#E0957C"); /* mejillas */
    rostro.set(22, 8, "#F1C9A8"); rostro.set(22, 9, "#F1C9A8"); rostro.set(22, 16, "#F1C9A8"); /* luz en pómulo y frente */
    /* brillo y mechones del pelo */
    rostro.fila(4, 19, 23, C.h); rostro.fila(3, 20, 21, "#5E6979");
    [12, 15, 18, 21, 24, 27, 30].forEach(function (y) { rostro.set(24, y, C.h2); rostro.set(11, y + 1, C.h); });
    rostro.rect(10, 20, 1, 12, "#1B1E25"); rostro.rect(25, 20, 1, 12, C.h);

    var pupilasA = L(); pupilasA.rect(13, 12, 2, 2, C.E); pupilasA.rect(20, 12, 2, 2, C.E); pupilasA.set(13, 12, C.W); pupilasA.set(20, 12, C.W);
    var pupilasB = L(); pupilasB.rect(14, 12, 2, 2, C.E); pupilasB.rect(21, 12, 2, 2, C.E); pupilasB.set(14, 12, C.W); pupilasB.set(21, 12, C.W);
    var parpado = L(); parpado.rect(13, 12, 3, 1, C.S); parpado.rect(20, 12, 3, 1, C.S); parpado.fila(13, 13, 15, C.E); parpado.fila(13, 20, 22, C.E);
    var boca = L(); boca.rect(16, 17, 4, 2, "#6E2630"); boca.fila(17, 16, 19, C.L);

    /* sombras del cuello y la polera */
    var torsoDet = L();
    torsoDet.rect(15, 21, 1, 2, C.s); torsoDet.fila(21, 15, 20, "#141414"); torsoDet.set(18, 22, "#B4CFF2"); /* gargantilla con dije */
    torsoDet.rect(10, 26, 1, 11, "#15181E"); torsoDet.rect(11, 30, 1, 7, "#15181E");   /* lado en sombra */
    torsoDet.fila(24, 21, 24, "#4A5261"); torsoDet.fila(25, 23, 24, "#4A5261");        /* luz en el hombro */
    torsoDet.fila(36, 11, 24, "#15181E");                                              /* sombra en la cintura */

    var abajo = L();
    abajo.fila(39, 11, 24, C.jd); abajo.fila(40, 11, 24, C.J);
    abajo.rect(10, 41, 16, 6, C.J);
    abajo.fila(41, 12, 14, C.j); abajo.fila(41, 21, 23, C.j);
    for (var y = 47; y <= 71; y++) {
      var ab = Math.floor((y - 47) / 9);
      abajo.fila(y, 9 - ab, 16, C.J); abajo.fila(y, 19, 26 + ab, C.J);
      if (y < 70) { abajo.set(11, y, C.j); abajo.set(12, y, C.j); abajo.set(23, y, C.j); abajo.set(24, y, C.j); }
    }
    abajo.fila(70, 7, 16, C.jd); abajo.fila(71, 7, 16, C.jd); abajo.fila(70, 19, 28, C.jd); abajo.fila(71, 19, 28, C.jd);
    [[14, 55], [21, 58], [13, 63], [22, 64]].forEach(function (p) { abajo.set(p[0], p[1], C.jd); abajo.set(p[0] + 1, p[1] + 1, C.jd); });
    abajo.fila(72, 8, 15, C.K); abajo.fila(73, 7, 15, C.K); abajo.fila(74, 7, 14, C.K);
    abajo.fila(72, 20, 27, C.K); abajo.fila(73, 20, 28, C.K); abajo.fila(74, 21, 28, C.K);
    abajo.fila(74, 9, 12, C.k); abajo.fila(74, 23, 26, C.k);
    /* pliegues y sombras del pantalón ancho y brillo de las zapatillas */
    abajo.fila(40, 11, 24, "#3A414B"); abajo.set(17, 40, "#9AA3AE");                   /* pretina con botón */
    abajo.rect(17, 43, 2, 4, C.jd);                                                       /* sombra de la entrepierna */
    for (var yy = 47; yy <= 69; yy++) {
      var ab2 = Math.floor((yy - 47) / 9);
      abajo.set(16, yy, C.jd); abajo.set(19, yy, C.jd);                                   /* cara interna en sombra */
      abajo.set(9 - ab2, yy, C.jd);                                                       /* borde exterior izquierdo */
      if (yy % 5 === 0) { abajo.set(25 + ab2, yy, "#59636F"); }                           /* luz en el borde derecho */
    }
    abajo.fila(72, 9, 10, "#3A3A3A"); abajo.fila(72, 21, 22, "#3A3A3A");

    var brazoIzq = L();
    brazoIzq.rect(8, 28, 2, 11, C.S); brazoIzq.rect(8, 28, 1, 11, C.s); brazoIzq.rect(9, 39, 2, 3, C.S);

    var brazoDer = L();
    brazoDer.rect(26, 28, 2, 16, C.S); brazoDer.rect(27, 28, 1, 16, C.s);
    brazoDer.rect(26, 44, 3, 3, C.S); brazoDer.set(26, 46, C.s); brazoDer.set(28, 46, C.s);
    brazoDer.rect(26, 42, 2, 1, C.pulsera);

    function brazoArriba(dx) {
      var b = L();
      b.linea(26, 27, 28 + dx, 16, 2, C.S);
      b.rect(27 + dx, 12, 3, 4, C.S);
      b.set(27 + dx, 11, C.S); b.set(28 + dx, 11, C.S); b.set(29 + dx, 11, C.S);
      b.rect(27 + dx, 18, 2, 1, C.pulsera);
      return b;
    }
    var apunta = L();
    apunta.rect(26, 28, 7, 2, C.S); apunta.rect(26, 29, 7, 1, C.s);
    apunta.rect(32, 27, 2, 3, C.S); apunta.rect(34, 28, 2, 1, C.S);
    apunta.rect(29, 28, 1, 2, C.pulsera);

    return '<svg class="pixel" viewBox="0 0 ' + W + " " + H + '" shape-rendering="crispEdges" aria-hidden="true">' +
      '<g class="pixel__respira">' + atras.g("pixel__atras", true) + torso.g("pixel__torso", true) + torsoDet.g("pixel__detalle", false) + "</g>" +
      abajo.g("pixel__piernas", true) +
      '<g class="pixel__respira">' +
        cabeza.g("pixel__cabeza", true) + rostro.g("pixel__rostro", false) +
        pupilasA.g("pixel__pupilas pixel__pupilas--izq", false) + pupilasB.g("pixel__pupilas pixel__pupilas--der", false) +
        parpado.g("pixel__parpado", false) + boca.g("pixel__boca", false) +
        brazoIzq.g("pixel__brazoIzq", true) +
        brazoDer.g("pixel__brazo pixel__brazo--abajo", true) +
        brazoArriba(0).g("pixel__brazo pixel__brazo--saludoA", true) +
        brazoArriba(1).g("pixel__brazo pixel__brazo--saludoB", true) +
        apunta.g("pixel__brazo pixel__brazo--apunta", true) +
      "</g></svg>";
  }

  /* sentada frente al computador, escribiendo (72 × 58) */
  function svgEscritorio() {
    var W = 72, H = 58;
    function L() { return new Lienzo(W, H); }

    /* pelo de atrás y cuerpo */
    var atras = L();
    atras.fila(3, 47, 57, C.H); atras.rect(44, 4, 17, 6, C.H);
    atras.rect(54, 10, 8, 30, C.H); atras.rect(58, 12, 1, 24, C.h);

    var cuerpo = L();
    cuerpo.rect(49, 19, 4, 5, C.S); cuerpo.fila(19, 49, 52, C.s);
    cuerpo.fila(23, 44, 56, C.T);
    cuerpo.rect(42, 24, 18, 16, malla);
    cuerpo.fila(24, 48, 52, C.S); cuerpo.fila(25, 49, 51, C.S);

    /* cabeza de tres cuartos, mirando la pantalla */
    var cabeza = L();
    cabeza.fila(7, 46, 55, C.S); cabeza.rect(45, 8, 11, 10, C.S);
    cabeza.fila(18, 46, 54, C.S); cabeza.fila(19, 47, 53, C.S); cabeza.fila(20, 48, 52, C.S);
    cabeza.fila(4, 46, 57, C.H); cabeza.fila(5, 45, 58, C.H); cabeza.fila(6, 44, 59, C.H);
    cabeza.fila(7, 44, 45, C.H); cabeza.fila(7, 51, 59, C.H); cabeza.fila(8, 53, 59, C.H); cabeza.fila(9, 55, 59, C.H);
    cabeza.rect(43, 7, 2, 17, C.H);
    cabeza.rect(56, 9, 4, 30, C.H); cabeza.rect(57, 11, 1, 24, C.h);
    cabeza.fila(4, 49, 52, C.h2); cabeza.fila(5, 53, 55, C.h);
    cabeza.fila(11, 46, 48, C.H); cabeza.fila(11, 51, 53, C.H);
    cabeza.rect(46, 12, 3, 2, C.W); cabeza.rect(51, 12, 3, 2, C.W);
    cabeza.rect(46, 12, 2, 2, C.E); cabeza.rect(51, 12, 2, 2, C.E);
    cabeza.set(49, 15, C.s); cabeza.set(45, 16, C.s);
    cabeza.fila(17, 47, 49, C.L);

    var parpado = L();
    parpado.rect(46, 12, 3, 2, C.S); parpado.rect(51, 12, 3, 2, C.S);
    parpado.fila(13, 46, 48, C.E); parpado.fila(13, 51, 53, C.E);

    /* mesa de madera en diagonal */
    var mesa = L();
    mesa.rect(3, 41, 2, 13, "#4E3B2E");
    mesa.rect(16, 48, 3, 10, "#5A4535"); mesa.rect(66, 48, 3, 10, "#5A4535");
    mesa.poly([[2, 37], [16, 44], [16, 48], [2, 41]], "#5E4838");
    mesa.poly([[2, 37], [54, 37], [70, 44], [16, 44]], "#8A6F57");
    mesa.fila(37, 3, 53, "#A08670");
    mesa.poly([[16, 44], [70, 44], [70, 48], [16, 48]], "#6A5240");

    /* monitor */
    var monitor = L();
    monitor.poly([[15, 35], [30, 35], [32, 39], [13, 39]], "#3A414A");
    monitor.rect(20, 31, 5, 4, "#2B3138");
    monitor.rect(7, 10, 31, 22, "#2B3138");
    monitor.rect(9, 12, 27, 18, "#161B21");
    monitor.set(22, 30, "#4A84C6");

    var codigo = "";
    var lineas = [[0, 4, 7], [2, 3, 9], [4, 6, 5], [4, 5, 8], [2, 7, 4], [0, 3, 6]];
    var colores = [["#4A84C6", "#B4CFF2"], ["#84AEE2", "#EEF3FB"], ["#4A84C6", "#84AEE2"], ["#B4CFF2", "#4A84C6"], ["#84AEE2", "#B4CFF2"], ["#4A84C6", "#EEF3FB"]];
    var margen = L();
    for (var k = 0; k < lineas.length; k++) {
      var y = 14 + k * 2, x = 12 + lineas[k][0];
      margen.set(10, y, "#164A96");
      var l = L();
      l.fila(y, x, x + lineas[k][1] - 1, colores[k][0]);
      l.fila(y, x + lineas[k][1] + 1, Math.min(34, x + lineas[k][1] + lineas[k][2]), colores[k][1]);
      codigo += l.g("codigo codigo--" + k, false);
    }

    /* teclado negro sobre la mesa */
    var teclado = L();
    teclado.poly([[14, 39], [37, 39], [41, 43], [18, 43]], function (x, y) { return (x % 2 === 0 && y % 2 === 0) ? "#3A414A" : "#20252B"; });

    /* brazos: dos cuadros que se alternan */
    function brazos(d) {
      var b = L();
      b.linea(44, 25, 40, 31, 3, C.T);
      b.linea(40, 33, 27, 39 - d, 2, C.S);
      b.rect(23, 39 - d, 4, 2, C.S); b.set(23, 40 - d, C.s);
      b.linea(56, 26, 53, 34, 3, C.T);
      b.linea(52, 36, 38, 41 + d, 2, C.S);
      b.rect(34, 40 + d, 4, 2, C.S); b.set(34, 41 + d, C.s);
      b.rect(41, 40, 2, 1, C.pulsera);
      return b;
    }

    return '<svg class="escena" viewBox="0 0 ' + W + " " + H + '" shape-rendering="crispEdges" aria-hidden="true">' +
      atras.g("escena__pelo", true) +
      cuerpo.g("escena__cuerpo", true) +
      '<g class="escena__cabeza">' + cabeza.g("escena__cara", true) + parpado.g("escena__parpado", false) + "</g>" +
      mesa.g("escena__mesa", true) +
      monitor.g("escena__monitor", true) +
      margen.g("escena__margen", false) +
      codigo +
      '<rect class="escena__cursor" x="12" y="26" width="2" height="1" fill="#EEF3FB"/>' +
      teclado.g("escena__teclado", true) +
      brazos(0).g("escena__brazos escena__brazos--a", true) +
      brazos(1).g("escena__brazos escena__brazos--b", true) +
      "</svg>";
  }

  /* controlador del avatar: poses por cuadros */
  function crearAvatar(contenedor, opciones) {
    contenedor.innerHTML = svgAvatar();
    var svg = $("svg", contenedor);
    var globo = opciones.globo, timerGlobo = null, timerOla = null, ocupado = false;

    function pose(nombre) {
      svg.classList.remove("saluda", "apunta", "habla");
      clearInterval(timerOla);
      if (nombre === "saludo") {
        svg.classList.add("saluda");
        var a = true;
        timerOla = setInterval(function () { a = !a; svg.classList.toggle("ola-b", !a); }, 220);
      }
      if (nombre === "apuntar") svg.classList.add("apunta");
      if (nombre === "hablar") svg.classList.add("saluda");
    }

    function decir(texto, ms) {
      if (!globo) return;
      globo.textContent = texto;
      globo.classList.add("visible");
      var n = 0;
      var boca = setInterval(function () { svg.classList.toggle("habla", n++ % 2 === 0); }, 140);
      clearTimeout(timerGlobo);
      timerGlobo = setTimeout(function () { globo.classList.remove("visible"); clearInterval(boca); svg.classList.remove("habla"); }, ms || 2200);
    }

    function accion(nombre, texto, ms) {
      if (ocupado) return false;
      ocupado = true;
      pose(nombre);
      if (texto) decir(texto, ms);
      setTimeout(function () { pose("reposo"); svg.classList.remove("ola-b"); ocupado = false; }, ms || 2000);
      return true;
    }

    (function parpadear() {
      setTimeout(function () {
        svg.classList.add("parpadea");
        setTimeout(function () { svg.classList.remove("parpadea"); parpadear(); }, 140);
      }, 2400 + Math.random() * 2600);
    })();

    if (punteroFino) {
      window.addEventListener("pointermove", function (e) {
        var r = svg.getBoundingClientRect();
        svg.classList.toggle("mira-der", e.clientX > r.left + r.width / 2);
      }, { passive: true });
    }

    return {
      svg: svg,
      decir: decir,
      accion: accion,
      ocupado: function () { return ocupado; },
      saludar: function (texto) { return accion("saludo", texto || "¡hola!", 1900); }
    };
  }

  function personajes() {
    var cont = $("[data-personaje]");
    if (cont) {
      var yo = crearAvatar(cont, { globo: $("[data-globo]") });
      var frases = [
        ["saludo", "¡hola! soy isidora"],
        ["hablar", "diseño objetos… y también web"],
        ["apuntar", "mis trabajos están acá →"]
      ];
      var n = 0;
      function interactuar() { var f = frases[n++ % frases.length]; yo.accion(f[0], f[1], 2000); }
      cont.addEventListener("click", interactuar);
      cont.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); interactuar(); } });
      setTimeout(function () { yo.saludar("¡hola!"); }, 900);

      var ultimoSaludo = 0;
      if (punteroFino) {
        window.addEventListener("pointermove", function (e) {
          var r = yo.svg.getBoundingClientRect();
          var cerca = e.clientX > r.left - 60 && e.clientX < r.right + 60 && e.clientY > r.top - 40 && e.clientY < r.top + r.height * .4;
          if (cerca && Date.now() - ultimoSaludo > 7000) { ultimoSaludo = Date.now(); yo.saludar("¡hola!"); }
        }, { passive: true });
      }

      /* apunta a la ventanita trabajos y la hace saltar */
      var win = $("[data-ventana-toon]");
      if (win && !reducirMovimiento) {
        function mostrarVentana() {
          if (yo.accion("apuntar", "¡ábrela!", 1800)) {
            win.classList.remove("salta"); void win.offsetWidth; win.classList.add("salta");
          }
        }
        setTimeout(mostrarVentana, 3600);
        setInterval(function () { if (!document.hidden) mostrarVentana(); }, 12000);
        win.addEventListener("pointerenter", mostrarVentana);
      }

      var portada = $("#inicio"), yaApunto = false;
      window.addEventListener("scroll", function () {
        var r = portada.getBoundingClientRect();
        var avance = -r.top / r.height;
        if (avance > .22 && avance < .8 && !yaApunto) { yaApunto = yo.accion("apuntar", "¡por acá! ↓", 1800); }
        if (avance < .05) yaApunto = false;
      }, { passive: true });
    }

    /* escena de About Me */
    var escritorio = $("[data-escritorio]");
    if (escritorio) escritorio.innerHTML = svgEscritorio();

    /* versión mini que acompaña el recorrido */
    var guia = $("[data-guia]");
    if (!guia) return;
    var mini = crearAvatar($(".guia__sprite", guia), { globo: $("[data-guia-globo]") });
    var textos = { trabajos: "mis trabajos ✦", "sobre-mi": "esta soy yo", contacto: "¡escríbeme!" };
    var ultima = null;
    var inicio = $("#inicio");

    function revisar() {
      var fuera = inicio && inicio.getBoundingClientRect().bottom < window.innerHeight * 0.3;
      guia.classList.toggle("visible", !!fuera);
      var activa = document.body.dataset.seccion || null;
      if (fuera && activa && activa !== ultima && textos[activa]) {
        mini.accion(activa === "trabajos" ? "apuntar" : "saludo", textos[activa], 1800);
        ultima = activa;
      }
    }
    window.addEventListener("scroll", function () { requestAnimationFrame(revisar); }, { passive: true });
    $(".guia__boton", guia).addEventListener("click", function () {
      mini.saludar("¡arriba!");
      setTimeout(function () { window.scrollTo({ top: 0, behavior: reducirMovimiento ? "auto" : "smooth" }); }, 400);
    });
    revisar();
  }



  /* ===== 2c. Títulos en cursiva pixelada (Dancing Script convertida en píxeles cuadrados) ===== */
  var FUENTE_PUNTOS = '700 {t}px "Dancing Script"';
  function fuentePuntos(tam) { return FUENTE_PUNTOS.replace("{t}", tam); }
  var puntosListos = false;

  function puntear(el) {
    if (!puntosListos || !el) return;
    var texto = el.getAttribute("data-texto");
    if (texto === null) {
      texto = el.textContent.replace(/\s+/g, " ").trim();
      el.setAttribute("data-texto", texto);
    }
    texto += el.getAttribute("data-sufijo") || "";
    var fs = parseFloat(getComputedStyle(el).fontSize) || 40;
    var tam = fs * 1.05;
    var lienzo = puntear.lienzo || (puntear.lienzo = document.createElement("canvas"));
    var cx = lienzo.getContext("2d", { willReadFrequently: true });
    cx.font = fuentePuntos(tam);
    /* se mide el alto real de las letras para que no se corten colas como la de la "j" */
    var m = cx.measureText(texto);
    var sube = Math.ceil(Math.max(m.actualBoundingBoxAscent || 0, tam * 0.75));
    var baja = Math.ceil(Math.max(m.actualBoundingBoxDescent || 0, tam * 0.1));
    var margen = Math.ceil(tam * 0.08);
    var ancho = Math.ceil(m.width + tam * 0.3);
    var alto = sube + baja + margen * 2;
    lienzo.width = ancho;
    lienzo.height = alto;
    cx.font = fuentePuntos(tam);
    cx.fillStyle = "#000";
    cx.fillText(texto, tam * 0.1, margen + sube);
    var datos = cx.getImageData(0, 0, ancho, alto).data;

    var paso = Math.max(2, Math.min(tam * 0.045, 2.2 + tam * 0.02)), lado = paso * 0.88;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var salida = document.createElement("canvas");
    salida.width = Math.ceil(ancho * dpr);
    salida.height = Math.ceil(alto * dpr);
    var sx = salida.getContext("2d");
    sx.scale(dpr, dpr);
    sx.fillStyle = "#000";
    for (var y = paso / 2; y < alto; y += paso) {
      for (var x = paso / 2; x < ancho; x += paso) {
        var px = Math.round(x), py = Math.round(y);
        if (px < ancho && py < alto && datos[(py * ancho + px) * 4 + 3] > 110) sx.fillRect(x - lado / 2, y - lado / 2, lado, lado);
      }
    }
    var url = "url(" + salida.toDataURL() + ")";
    el.innerHTML = '<span class="puntos" aria-hidden="true"></span><span class="solo-lector"></span>';
    var sp = el.firstChild;
    sp.style.width = ancho + "px";
    sp.style.aspectRatio = ancho + " / " + alto;
    sp.style.webkitMaskImage = url;
    sp.style.maskImage = url;
    el.lastChild.textContent = texto;
    el.classList.add("punteado");
  }

  function puntearTodo(raiz) { $$("[data-puntos]", raiz || document).forEach(puntear); }

  function iniciarPuntos() {
    if (!document.fonts || !document.fonts.load) return;
    document.fonts.load(fuentePuntos(40)).then(function (f) {
      if (!f || !f.length) return;
      puntosListos = true;
      puntearTodo(document);
    });
    var t = null;
    window.addEventListener("resize", function () {
      clearTimeout(t);
      t = setTimeout(function () { puntearTodo(document); }, 200);
    });
  }


  /* ===== 2d. Fotos en trama de puntos para el collage de la portada ===== */
  /* si el navegador no deja leer los píxeles (por ejemplo al abrir el archivo directo, sin servidor),
     la foto se dibuja igual, cortada en cuadritos y teñida de azul */
  function tramaSinLeer(ctx, img, w, h, paso, color) {
    var esc = Math.max(w / img.naturalWidth, h / img.naturalHeight);
    var iw = img.naturalWidth * esc, ih = img.naturalHeight * esc;
    ctx.save();
    ctx.filter = "grayscale(1) contrast(1.3)";
    ctx.drawImage(img, (w - iw) / 2, (h - ih) / 2, iw, ih);
    ctx.filter = "none";
    ctx.globalCompositeOperation = "screen";
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "destination-in";
    ctx.beginPath();
    for (var y = 0; y < h; y += paso) for (var x = 0; x < w; x += paso) ctx.rect(x + 0.6, y + 0.6, paso - 1.2, paso - 1.2);
    ctx.fill();
    ctx.restore();
  }

  function trama() {
    $$("[data-trama]").forEach(function (cv) {
      var img = new Image();
      img.onload = function () { dibujar(); window.addEventListener("resize", dibujar); };
      img.src = cv.getAttribute("data-trama");
      function dibujar() {
        var w = cv.clientWidth, h = cv.clientHeight;
        if (!w || !h) return;
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        cv.width = Math.round(w * dpr);
        cv.height = Math.round(h * dpr);
        var ctx = cv.getContext("2d");
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        var paso = 5, cols = Math.ceil(w / paso), filas = Math.ceil(h / paso);
        var tmp = document.createElement("canvas");
        tmp.width = cols; tmp.height = filas;
        var t = tmp.getContext("2d", { willReadFrequently: true });
        var esc = Math.max(cols / img.naturalWidth, filas / img.naturalHeight);
        var iw = img.naturalWidth * esc, ih = img.naturalHeight * esc;
        t.drawImage(img, (cols - iw) / 2, (filas - ih) / 2, iw, ih);
        var d;
        try { d = t.getImageData(0, 0, cols, filas).data; }
        catch (e) { tramaSinLeer(ctx, img, w, h, paso, getComputedStyle(cv).color || "#567C8D"); return; }
        ctx.fillStyle = getComputedStyle(cv).color || "#567C8D";
        for (var j = 0; j < filas; j++) for (var i = 0; i < cols; i++) {
          var k = (j * cols + i) * 4;
          var lum = (0.299 * d[k] + 0.587 * d[k + 1] + 0.114 * d[k + 2]) / 255;
          var lado = Math.pow(1 - lum, 1.6) * paso * 0.95;
          if (lado > 0.7) ctx.fillRect(i * paso + (paso - lado) / 2, j * paso + (paso - lado) / 2, lado, lado);
        }
      }
    });
  }

  /* ===== 2b. Follaje en trama de puntos ===== */
  function semilla(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function follaje() {
    var NS = "http://www.w3.org/2000/svg";
    $$("[data-follaje]").forEach(function (caja, n) {
      var med = (caja.dataset.follaje || "48x32").split("x");
      var cols = +med[0], filas = +med[1], R = 6;
      var azar = semilla(11 + n * 37);
      var cv = document.createElement("canvas");
      cv.width = cols * R; cv.height = filas * R;
      var c = cv.getContext("2d");
      var W = cv.width, H = cv.height;
      c.fillStyle = c.strokeStyle = "#000";
      c.lineCap = "round";

      function hojas(x, y, t) {
        for (var i = 0; i < 6; i++) {
          c.globalAlpha = .3 + azar() * .5;
          c.beginPath();
          c.arc(x + (azar() - .5) * t, y + (azar() - .5) * t, 2 + azar() * t * .35, 0, 7);
          c.fill();
        }
        c.globalAlpha = 1;
      }
      function rama(x, y, ang, largo, grosor, nivel) {
        var x2 = x + Math.cos(ang) * largo, y2 = y + Math.sin(ang) * largo;
        c.lineWidth = grosor;
        c.beginPath(); c.moveTo(x, y); c.lineTo(x2, y2); c.stroke();
        if (nivel === 0 || largo < 6) { hojas(x2, y2, largo); return; }
        var hijos = 2 + (azar() < .35 ? 1 : 0);
        for (var i = 0; i < hijos; i++) {
          rama(x2, y2, ang + (azar() - .5) * 1.3, largo * (.66 + azar() * .16), Math.max(1, grosor * .68), nivel - 1);
        }
        if (nivel < 3 && azar() < .5) hojas(x2, y2, largo * .6);
      }

      if (cols / filas > 1.8) rama(-6, H * .75, -.32, W * .26, H * .05, 6);
      else rama(W * (.35 + azar() * .3), H + 4, -Math.PI / 2 + (azar() - .5) * .5, H * .3, W * .035, 6);

      var datos = c.getImageData(0, 0, W, H).data;
      var svg = document.createElementNS(NS, "svg");
      svg.setAttribute("viewBox", "0 0 " + cols * 4 + " " + filas * 4);
      svg.setAttribute("preserveAspectRatio", "xMidYMax slice");
      var frag = document.createDocumentFragment();
      for (var fy = 0; fy < filas; fy++) {
        for (var fx = 0; fx < cols; fx++) {
          var suma = 0, cuenta = 0;
          for (var j = 0; j < R; j += 2) for (var i = 0; i < R; i += 2) {
            suma += datos[((fy * R + j) * W + fx * R + i) * 4 + 3]; cuenta++;
          }
          var d = suma / cuenta / 255 + (azar() - .5) * .08;
          var r = Math.min(1.9, d * 2.2);
          if (r < .35) continue;
          /* cuadrados, no círculos: el follaje sigue la grilla pixel */
          var p = document.createElementNS(NS, "rect");
          p.setAttribute("x", (fx * 4 + 2 - r).toFixed(2)); p.setAttribute("y", (fy * 4 + 2 - r).toFixed(2));
          p.setAttribute("width", (r * 2).toFixed(2)); p.setAttribute("height", (r * 2).toFixed(2));
          frag.appendChild(p);
        }
      }
      svg.appendChild(frag);
      caja.appendChild(svg);
    });
  }

  /* ===== 3. Rastro de píxeles ===== */
  function rastro() {
    var canvas = $("#rastro");
    if (!canvas || !punteroFino || reducirMovimiento) { if (canvas) canvas.remove(); return; }
    var ctx = canvas.getContext("2d");
    var TAM = 14, celdas = [], dpr = Math.min(window.devicePixelRatio || 1, 2);
    var colores = ["#2F4156", "#567C8D", "#C8D9E6", "#F5EFEB"];

    function medir() {
      canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    medir();
    window.addEventListener("resize", medir);

    var ultimo = null;
    window.addEventListener("pointermove", function (e) {
      if (document.documentElement.classList.contains("con-modal")) return;
      var x = Math.floor(e.clientX / TAM) * TAM, y = Math.floor(e.clientY / TAM) * TAM;
      var clave = x + ":" + y;
      if (clave === ultimo) return;
      ultimo = clave;
      celdas.push({ x: x, y: y, vida: 1, c: colores[(Math.random() * colores.length) | 0] });
      if (Math.random() < .35) celdas.push({ x: x + (Math.random() < .5 ? -TAM : TAM), y: y + (Math.random() < .5 ? -TAM : TAM), vida: .7, c: colores[0] });
      if (celdas.length > 90) celdas.splice(0, celdas.length - 90);
    }, { passive: true });

    (function dibujar() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (var i = celdas.length - 1; i >= 0; i--) {
        var c = celdas[i];
        c.vida -= 0.025;
        if (c.vida <= 0) { celdas.splice(i, 1); continue; }
        ctx.globalAlpha = c.vida * 0.55;
        ctx.fillStyle = c.c;
        ctx.fillRect(c.x + 1, c.y + 1, TAM - 2, TAM - 2);
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(dibujar);
    })();
  }


  /* ===== 4. Reloj ===== */
  function reloj() {
    var els = $$("[data-reloj]");
    if (!els.length) return;
    var fmt = new Intl.DateTimeFormat("es-CL", {
      weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    });
    function tick() {
      var ahora = new Date();
      els.forEach(function (el) {
        el.textContent = fmt.format(ahora).replace(/\./g, "").replace(",", " ·");
        el.setAttribute("datetime", ahora.toISOString());
      });
    }
    tick();
    setInterval(tick, 30000);
  }


  /* ===== 5. Titular dinámico ===== */
  function titular() {
    var caja = $(".palabra-caja");
    if (!caja) return;
    var palabra = $(".palabra", caja);
    var lista = (caja.dataset.palabras || "toca").split(",");
    var i = 0, timer = null, ocupado = false;

    function siguiente() {
      if (ocupado) return;
      ocupado = true;
      i = (i + 1) % lista.length;
      var anchoActual = caja.getBoundingClientRect().width;
      caja.style.width = anchoActual + "px";
      palabra.classList.add("sale");

      setTimeout(function () {
        palabra.setAttribute("data-texto", lista[i]);
        palabra.textContent = lista[i];
        puntear(palabra);
        caja.style.width = "auto";
        var anchoNuevo = caja.getBoundingClientRect().width;
        caja.style.width = anchoActual + "px";
        void caja.offsetWidth;
        caja.style.width = anchoNuevo + "px";
        palabra.classList.remove("sale");
        palabra.classList.add("entra");
        void palabra.offsetWidth;
        palabra.classList.remove("entra");
        ocupado = false;
      }, reducirMovimiento ? 0 : 380);
    }

    function detener() { if (timer) clearInterval(timer); timer = null; }
    function iniciar() { detener(); timer = setInterval(siguiente, 1800); }

    caja.addEventListener("click", function () { siguiente(); iniciar(); });
    document.addEventListener("visibilitychange", function () { if (document.hidden) detener(); else iniciar(); });
    window.addEventListener("resize", function () { caja.style.width = "auto"; });
    iniciar();
  }


  /* ===== 6. Ventanas arrastrables ===== */
  var zTop = 10;

  function hacerArrastrable(win) {
    var barra = $(".tb", win);
    if (!barra || win.dataset.arrastreListo) return;
    win.dataset.arrastreListo = "1";
    var x = 0, y = 0, inicioX = 0, inicioY = 0, limites = null, activo = false;

    function aplicar() { win.style.translate = x + "px " + y + "px"; }

    barra.addEventListener("pointerdown", function (e) {
      if (e.button !== 0 || e.target.closest("button, a")) return;
      e.preventDefault();
      activo = true;
      barra.setPointerCapture(e.pointerId);
      inicioX = e.clientX - x;
      inicioY = e.clientY - y;
      var r = win.getBoundingClientRect();
      limites = {
        minX: x - r.left - r.width + 80,
        maxX: x + (window.innerWidth - r.right) + r.width - 80,
        minY: y - r.top + 40
      };
      win.classList.add("arrastrando");
      win.style.zIndex = ++zTop;
    });
    barra.addEventListener("pointermove", function (e) {
      if (!activo) return;
      x = Math.min(limites.maxX, Math.max(limites.minX, e.clientX - inicioX));
      y = Math.max(limites.minY, e.clientY - inicioY);
      aplicar();
    });
    function soltar(e) {
      if (!activo) return;
      activo = false;
      win.classList.remove("arrastrando");
      if (barra.hasPointerCapture(e.pointerId)) barra.releasePointerCapture(e.pointerId);
    }
    barra.addEventListener("pointerup", soltar);
    barra.addEventListener("pointercancel", soltar);
    barra.addEventListener("dblclick", function () { x = 0; y = 0; aplicar(); });
  }

  function ventanas() { $$("[data-arrastrable]").forEach(hacerArrastrable); }

  /* sticker que se arrastra libremente por la pantalla */
  function stickers() {
    $$("[data-sticker]").forEach(function (el) {
      var x = 0, y = 0, inicioX = 0, inicioY = 0, lim = null, activo = false;
      function aplicar() { el.style.translate = x + "px " + y + "px"; }

      el.addEventListener("pointerdown", function (e) {
        if (e.button !== 0) return;
        e.preventDefault();
        activo = true;
        el.setPointerCapture(e.pointerId);
        inicioX = e.clientX - x;
        inicioY = e.clientY - y;
        var r = el.getBoundingClientRect();
        lim = {
          minX: x - r.left, maxX: x + (window.innerWidth - r.right),
          minY: y - r.top + 40, maxY: y + (window.innerHeight - r.bottom)
        };
        el.classList.add("arrastrando");
      });
      el.addEventListener("pointermove", function (e) {
        if (!activo) return;
        x = Math.min(lim.maxX, Math.max(lim.minX, e.clientX - inicioX));
        y = Math.min(lim.maxY, Math.max(lim.minY, e.clientY - inicioY));
        aplicar();
      });
      function soltar(e) {
        if (!activo) return;
        activo = false;
        el.classList.remove("arrastrando");
        if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
      }
      el.addEventListener("pointerup", soltar);
      el.addEventListener("pointercancel", soltar);
      el.addEventListener("dblclick", function () { x = 0; y = 0; aplicar(); });
    });
  }


  /* ===== 7. Índice de trabajos ===== */
  var filaOrigen = null;

  function indice() {
    var lista = $("#indice");
    if (!lista) return;
    /* lista que se expande al pasar el cursor y muestra la foto del trabajo
       (adaptado de Skiper 53 · HoverExpand_002 de Skiper UI, por Gurvinder Singh) */
    lista.innerHTML = PROYECTOS.map(function (p, i) {
      var cat = CATEGORIAS[ordenCategoria(p.categoria)];
      return '<li class="indice__item" data-categoria="' + p.categoria + '">' +
        '<a class="indice__fila" href="#proyecto/' + p.id + '" data-id="' + p.id + '">' +
          (p.portada ? '<img class="indice__foto" src="' + esc(rutaFoto(p, p.portada)) + '" alt="" loading="lazy" decoding="async"' + foco(p) + ">" : "") +
          '<span class="indice__velo" aria-hidden="true"></span>' +
          '<span class="indice__cab">' +
            '<span class="indice__num mono">' + dosDigitos(i + 1) + "</span>" +
            '<span class="indice__titulo" data-puntos>' + esc(p.titulo) + "</span>" +
            '<span class="indice__tipo mono">' + esc(cat ? cat[1] : p.categoria) + "</span>" +
            '<span class="indice__anio mono">' + esc(p.anio) + "</span>" +
            '<span class="indice__abrir mono" aria-hidden="true">abrir ↗</span>' +
          "</span>" +
        "</a></li>";
    }).join("");

    $$("[data-total]").forEach(function (el) { el.textContent = PROYECTOS.length; });
    puntearTodo(lista);

    lista.addEventListener("click", function (e) {
      var a = e.target.closest(".indice__fila");
      if (a) filaOrigen = a;
    });

    expandir(lista);
    filtros(lista);
  }

  /* la fila que tocas o sobre la que pasas el cursor se abre y muestra la foto;
     en pantallas táctiles el primer toque la abre y el segundo entra al proyecto */
  function expandir(lista) {
    var activa = null;
    function abrir(fila) {
      if (activa === fila) return;
      if (activa) activa.classList.remove("activo");
      activa = fila;
      if (fila) fila.classList.add("activo");
    }
    lista.addEventListener("pointerover", function (e) {
      if (e.pointerType === "touch") return;
      var f = e.target.closest(".indice__fila");
      if (f) abrir(f);
    });
    lista.addEventListener("focusin", function (e) {
      var f = e.target.closest(".indice__fila");
      if (f) abrir(f);
    });
    lista.addEventListener("click", function (e) {
      var f = e.target.closest(".indice__fila");
      if (f && f !== activa) { e.preventDefault(); abrir(f); }
    }, true);
  }

  /* filtros por categoría sobre la lista */
  function filtros(lista) {
    var grupo = $("[data-filtros]");
    if (!grupo) return;
    grupo.addEventListener("click", function (e) {
      var b = e.target.closest("[data-filtro]");
      if (!b) return;
      var f = b.getAttribute("data-filtro");
      $$("[data-filtro]", grupo).forEach(function (x) {
        x.classList.toggle("activo", x === b);
        x.setAttribute("aria-pressed", x === b ? "true" : "false");
      });
      $$(".indice__item", lista).forEach(function (li) {
        li.hidden = f !== "todo" && li.getAttribute("data-categoria") !== f;
      });
    });
  }

  /* vista previa que se arma por píxeles al pasar el mouse */
  function vistaPrevia(lista) {
    var caja = $("[data-preview]");
    if (!caja || !punteroFino) return;
    var canvas = $("canvas", caja);
    var ctx = canvas.getContext("2d");
    var cache = {}, actual = null, paso = 0, raf = null;
    var NIVELES = [6, 12, 24, 48, 96, 0];

    function cargar(src, listo) {
      if (cache[src]) { if (cache[src].complete) listo(cache[src]); else cache[src].addEventListener("load", function () { listo(cache[src]); }); return; }
      var img = new Image();
      img.onload = function () { listo(img); };
      img.src = src;
      cache[src] = img;
    }

    function pintar(img) {
      var W = canvas.width, H = canvas.height;
      var esc2 = Math.max(W / img.naturalWidth, H / img.naturalHeight);
      var w = img.naturalWidth * esc2, h = img.naturalHeight * esc2;
      var n = NIVELES[Math.min(paso, NIVELES.length - 1)];
      ctx.imageSmoothingEnabled = n === 0;
      if (n === 0) { ctx.drawImage(img, (W - w) / 2, (H - h) / 2, w, h); return; }
      var cols = n, filas = Math.round(n * H / W);
      var tmp = pintar.tmp || (pintar.tmp = document.createElement("canvas"));
      tmp.width = cols; tmp.height = filas;
      var t = tmp.getContext("2d");
      t.imageSmoothingEnabled = true;
      t.drawImage(img, (cols - w * cols / W) / 2, (filas - h * filas / H) / 2, w * cols / W, h * filas / H);
      ctx.drawImage(tmp, 0, 0, W, H);
    }

    /* la vista previa queda fija en la esquina derecha para no tapar los nombres */
    function animar() {
      if (actual && actual.img && paso < NIVELES.length) { pintar(actual.img); paso++; }
      raf = requestAnimationFrame(animar);
    }

    $$(".indice__fila", lista).forEach(function (fila) {
      var p = PROYECTOS.filter(function (q) { return q.id === fila.dataset.id; })[0];
      fila.addEventListener("pointerenter", function () {
        actual = { id: p.id, img: null };
        paso = 0;
        caja.classList.add("visible");
        if (!raf) raf = requestAnimationFrame(animar);
        if (!p.portada) {
          ctx.fillStyle = "#567C8D"; ctx.fillRect(0, 0, canvas.width, canvas.height);
          return;
        }
        var este = actual;
        cargar(rutaFoto(p, p.portada), function (img) { if (actual === este) { este.img = img; paso = 0; } });
      });
    });
    function ocultar() {
      caja.classList.remove("visible");
      actual = null;
      cancelAnimationFrame(raf); raf = null;
    }
    lista.addEventListener("pointerleave", ocultar);
    lista.addEventListener("click", ocultar);
    window.addEventListener("scroll", ocultar, { passive: true });
  }


  /* ===== 8. Detalle de proyecto ===== */
  function botonEnlace(valor, texto) {
    if (!valor || !esLink(valor)) return "";
    return esLink(valor)
      ? '<a class="btn btn--secundario" href="' + esc(valor) + '" target="_blank" rel="noopener">' + esc(texto) + " ↗</a>"
      : '<span class="btn btn--secundario btn--deshabilitado" title="por completar">' + esc(texto) + " · " + esc(valor) + "</span>";
  }

  function marcoVideo(v) {
    if (Array.isArray(v)) return v.map(marcoVideo).join("");   /* un proyecto puede tener más de un video */
    if (!v) return "";
    var yt = (v.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{6,})/) || [])[1];
    var vimeo = (v.match(/vimeo\.com\/(\d+)/) || [])[1];
    var dentro;
    if (yt) dentro = '<iframe src="https://www.youtube-nocookie.com/embed/' + yt + '" title="video del proyecto" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>';
    else if (vimeo) dentro = '<iframe src="https://player.vimeo.com/video/' + vimeo + '" title="video del proyecto" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>';
    else if (/\.(mp4|webm)$/i.test(v)) dentro = '<video src="' + esc(encodeURI(v)) + '#t=0.1" controls playsinline preload="metadata" onerror="var s=this.closest(\'.detalle__seccion\'); if (s) s.remove();"></video>';
    else if (/\.gif$/i.test(v)) dentro = '<img class="video__gif" src="' + esc(encodeURI(v)) + '" alt="animación del proyecto" onerror="var s=this.closest(\'.detalle__seccion\'); if (s) s.remove();">';
    else dentro = '<span class="mono">' + esc(v) + "</span>";
    return '<section class="detalle__seccion"><p class="etiqueta">video de funcionamiento</p>' +
           '<article class="win win--interna">' + barraWin("video.mp4") + '<div class="video__marco">' + dentro + "</div></article></section>";
  }

  function acordeon(p) {
    var fotos = (p.portada ? [p.portada] : []).concat((p.proceso || []).filter(function (f) { return f !== p.portada; }));
    var vacio = !fotos.length;
    if (vacio) fotos = [null, null, null, null];
    var total = dosDigitos(fotos.length);
    return '<section class="detalle__seccion">' +
      '<div class="acordeon' + (vacio ? " acordeon--vacio" : "") + (fotos.length > 8 ? " acordeon--muchos" : "") + '" data-acordeon>' +
      fotos.map(function (f, i) {
        var n = dosDigitos(i + 1);
        return '<button type="button" class="acordeon__panel' + (i === 0 ? " activo" : "") + '" aria-label="proceso ' + n + " de " + total + '">' +
          (f ? '<img src="' + esc(rutaFoto(p, f)) + '" alt="' + esc(p.titulo) + ", proceso " + n + '" decoding="async" draggable="false">'
             : '<span class="acordeon__vacio mono">[boceto / croquis ' + n + "]</span>") +
          '<span class="acordeon__num mono">' + n + " / " + total + "</span>" +
        "</button>";
      }).join("") +
      "</div></section>";
  }

  function detalle() {
    var capa = $("#detalle");
    if (!capa) return;
    var cuerpo = $("[data-d-cuerpo]", capa);
    var archivo = $("[data-d-archivo]", capa);
    var win = $(".win--detalle", capa);
    var focoPrevio = null, timerCierre = null;

    function buscar(id) {
      for (var i = 0; i < PROYECTOS.length; i++) if (PROYECTOS[i].id === id) return i;
      return -1;
    }

    function pintar(indiceP) {
      var p = PROYECTOS[indiceP];
      var ant = PROYECTOS[(indiceP - 1 + PROYECTOS.length) % PROYECTOS.length];
      var sig = PROYECTOS[(indiceP + 1) % PROYECTOS.length];
      var etiquetas = ["problema", "proceso", "resultado"];
      var esWeb = p.categoria === "web";

      var creditos = "";
      if (p.creditos && p.creditos.length) {
        creditos = '<section class="detalle__seccion creditos"><p class="etiqueta">créditos</p>' +
          (p.notaCreditos ? '<p class="cuerpo-s creditos__nota">' + esc(p.notaCreditos) + "</p>" : "") +
          '<ul class="creditos__lista">' +
          p.creditos.map(function (c) {
            var enlace = esLink(c.github)
              ? '<span class="creditos__sep" aria-hidden="true">—</span><a class="creditos__link" href="' + esc(c.github) + '" target="_blank" rel="noopener">' + esc(c.github.replace(/^https?:\/\//, "")) + "</a>"
              : "";
            return '<li class="creditos__fila"><span class="mono">' + esc(c.rol || "créditos") + '</span><span class="creditos__nombre">' + esc(c.nombre) +
                   "</span>" + enlace + "</li>";
          }).join("") + "</ul></section>";
      }

      archivo.textContent = p.titulo;
      cuerpo.innerHTML =
        '<header class="detalle__cab">' +
          '<h2 class="detalle__titulo" id="detalle-titulo" data-puntos>' + esc(p.titulo) + "</h2>" +
          (p.destacado ? '<p class="detalle__destacado">' + esc(p.destacado) +
            (esLink(p.destacadoLink) ? ' <a href="' + esc(p.destacadoLink) + '" target="_blank" rel="noopener">ver publicación ↗</a>' : "") + "</p>" : "") +
        "</header>" +
        acordeon(p) +
        /* ficha del proyecto: va debajo de las imágenes */
        '<section class="detalle__seccion detalle__ficha">' +
          '<div class="metadatos">' +
            [["año", p.anio], ["tipo", p.tipo], ["tiempo de desarrollo", p.tiempo], ["origen", p.origen], [esWeb ? "recursos utilizados" : "materiales", p.materiales], ["herramientas", p.herramientas]].filter(function (m, i) {
              return i < 2 || i === 4 || m[1];
            }).map(function (m) {
              return '<div class="meta"><span class="mono">' + esc(m[0]) + '</span><span class="meta__valor">' + esc(m[1] || "—") + "</span></div>";
            }).join("") +
          "</div>" +
          '<div class="enlaces">' + botonEnlace(p.repo, "repositorio GitHub") + botonEnlace(p.pages, "ver experiencia") + "</div>" +
        "</section>" +
        '<section class="detalle__seccion"><p class="etiqueta">descripción</p><div class="bloques">' +
          (p.descripcion || p.bloques.map(function (b, i) { return [etiquetas[i], b]; })).map(function (d) {
            return '<div class="bloque"><p class="bloque__etq">' + esc(d[0]) + '</p><p class="cuerpo-s">' + esc(d[1]) + "</p></div>";
          }).join("") +
        "</div></section>" +
        creditos +
        marcoVideo(p.video) +
        '<nav class="detalle__nav" aria-label="Otros proyectos">' +
          '<a class="btn btn--secundario" href="#proyecto/' + ant.id + '">← ' + esc(ant.titulo) + "</a>" +
          '<a class="btn btn--secundario" href="#proyecto/' + sig.id + '">' + esc(sig.titulo) + " →</a>" +
        "</nav>";
      cuerpo.scrollTop = 0;
      puntearTodo(cuerpo);
      medirFotos();
    }

    /* cada panel guarda la proporción de su foto para abrirse sin márgenes */
    function medirFotos() {
      $$("[data-acordeon]", cuerpo).forEach(function (grupo) {
        grupo.style.setProperty("--n", $$(".acordeon__panel", grupo).length);
      });
      $$(".acordeon__panel img", cuerpo).forEach(function (img) {
        function medir() {
          if (img.naturalWidth) img.parentNode.style.setProperty("--ratio", (img.naturalWidth / img.naturalHeight).toFixed(4));
        }
        if (img.complete) medir(); else img.addEventListener("load", medir);
      });
    }

    function expandirDesde(origen) {
      var r1 = origen.getBoundingClientRect();
      win.style.transition = "none";
      capa.classList.add("abierto");
      win.style.transform = "none";
      var r2 = win.getBoundingClientRect();
      win.style.transformOrigin = "0 0";
      win.style.transform = "translate(" + (r1.left - r2.left) + "px," + (r1.top - r2.top) + "px) scale(" + (r1.width / r2.width) + "," + (r1.height / r2.height) + ")";
      win.style.opacity = "1";
      win.style.filter = "none";
      void win.offsetWidth;
      win.style.transition = "transform .55s cubic-bezier(.2, .8, .2, 1)";
      win.style.transform = "none";
      setTimeout(function () { win.style.cssText = ""; }, 600);
    }

    function abrir(i) {
      clearTimeout(timerCierre);
      pintar(i);
      if (capa.hidden) {
        focoPrevio = document.activeElement;
        capa.hidden = false;
        document.documentElement.classList.add("con-modal");
        var origen = filaOrigen && filaOrigen.dataset.id === PROYECTOS[i].id ? filaOrigen : null;
        if (origen && !reducirMovimiento) expandirDesde(origen);
        else { void capa.offsetWidth; capa.classList.add("abierto"); }
      }
      filaOrigen = null;
      $(".tb__cerrar", capa).focus({ preventScroll: true });
    }

    function cerrar() {
      if (capa.hidden) return;
      capa.classList.remove("abierto");
      document.documentElement.classList.remove("con-modal");
      timerCierre = setTimeout(function () { capa.hidden = true; cuerpo.innerHTML = ""; }, reducirMovimiento ? 0 : 400);
      if (focoPrevio && focoPrevio.focus) focoPrevio.focus({ preventScroll: true });
    }

    function segunDireccion() {
      var m = location.hash.match(/^#proyecto\/(.+)$/);
      var i = m ? buscar(decodeURIComponent(m[1])) : -1;
      if (i !== -1) abrir(i); else cerrar();
    }

    function salir() { history.replaceState(null, "", "#trabajos"); cerrar(); }

    window.addEventListener("hashchange", segunDireccion);
    $$("[data-cerrar]", capa).forEach(function (el) { el.addEventListener("click", salir); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !capa.hidden) salir(); });

    // acordeón: el panel elegido se abre
    function activar(panel) {
      var grupo = panel.closest("[data-acordeon]");
      $$(".acordeon__panel", grupo).forEach(function (b) { b.classList.toggle("activo", b === panel); });
    }
    cuerpo.addEventListener("click", function (e) {
      var panel = e.target.closest(".acordeon__panel");
      if (panel) activar(panel);
    });
    if (punteroFino) {
      cuerpo.addEventListener("pointerover", function (e) {
        var panel = e.target.closest(".acordeon__panel");
        if (panel) activar(panel);
      });
    }

    segunDireccion();
  }


  /* ===== 9. Contacto ===== */
  function copiarTexto(txt) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(txt);
    return new Promise(function (ok, mal) {
      var area = document.createElement("textarea");
      area.value = txt;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try { document.execCommand("copy") ? ok() : mal(); } catch (err) { mal(err); }
      area.remove();
    });
  }

  function contacto() {
    $$("[data-copiar]").forEach(function (btn) {
      var original = btn.textContent;
      var timer = null;
      btn.addEventListener("click", function () {
        copiarTexto(btn.dataset.copiar).then(function () {
          btn.textContent = "copiado ✓";
          btn.classList.add("copiado");
        }, function () {
          btn.textContent = "no se pudo";
        }).then(function () {
          clearTimeout(timer);
          timer = setTimeout(function () { btn.textContent = original; btn.classList.remove("copiado"); }, 1500);
        });
      });
    });
  }


  /* ===== 9b. Vistas: primero la portada; los trabajos (y Sobre mí, si está en la misma página)
     se muestran al apretar sus botones, como páginas separadas ===== */
  function vistas() {
    var portada = $(".portada"), trabajos = $("#trabajos");
    if (!portada || !trabajos) return;
    var sobre = $("#sobre-mi.seccion");
    function elegir() {
      var h = location.hash.slice(1);
      if (h === "trabajos" || h.indexOf("proyecto/") === 0) return "trabajos";
      if (h === "sobre-mi" && sobre) return "sobre-mi";
      if (h === "contacto") return document.body.dataset.vista || "inicio";
      return "inicio";
    }
    function aplicar(primera) {
      var antes = document.body.dataset.vista;
      var v = elegir();
      document.body.dataset.vista = v;
      if (antes !== v) {
        var seccion = v === "trabajos" ? trabajos : v === "sobre-mi" ? sobre : portada;
        puntearTodo(seccion);
        $$(".revelar", seccion).forEach(function (el) { el.classList.add("visible"); });
        if (!primera && location.hash.indexOf("#proyecto/") !== 0) window.scrollTo(0, 0);
      }
    }
    window.addEventListener("hashchange", function () { aplicar(false); });
    aplicar(true);
  }

  /* ===== 10. Sección activa ===== */
  function seccionActiva() {
    var secciones = ["contacto", "sobre-mi", "trabajos"]
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    if (!secciones.length) return;
    var enlaces = $$("[data-seccion]");
    var pendiente = false;

    function calcular() {
      pendiente = false;
      var centro = window.innerHeight * 0.5;
      var activa = null;
      for (var i = 0; i < secciones.length; i++) {
        var r = secciones[i].getBoundingClientRect();
        if (r.top <= centro && r.bottom >= centro) { activa = secciones[i].id; break; }
      }
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 4) activa = "contacto";
      document.body.dataset.seccion = activa || "";
      enlaces.forEach(function (a) { a.classList.toggle("activo", a.dataset.seccion === activa); });
    }

    window.addEventListener("scroll", function () {
      if (!pendiente) { pendiente = true; requestAnimationFrame(calcular); }
    }, { passive: true });
    window.addEventListener("resize", calcular);
    calcular();
  }


  /* ===== 11. Revelar ===== */
  function revelar() {
    var items = $$(".revelar");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) { items.forEach(function (el) { el.classList.add("visible"); }); return; }
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    items.forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 60 + "ms"; io.observe(el); });
  }


  /* ===== 11. Fondo de la portada: mi foto pixelada =====
     Uso el filtro Pixelate de Shaders.com (MIT) sobre la foto. Si el navegador no tiene WebGPU,
     se ve igual la versión pixelada que pone el CSS (imagenes/ui/fondo-portada-pixel.png). */
  function shaderPortada() {
    var lienzo = document.getElementById("shader-portada");
    if (!lienzo) return;
    /* abierto como archivo (sin servidor) el shader no puede cargar la foto: queda la versión del CSS */
    if (location.protocol === "file:" || !navigator.gpu) { lienzo.remove(); return; }
    var url = new URL("imagenes/ui/fondo-portada-tinte.jpg", location.href).href;
    /* primero se confirma que la foto existe; si no, queda la versión del CSS */
    var prueba = new Image();
    prueba.onerror = function () { lienzo.remove(); };
    prueba.onload = function () { iniciar(); };
    prueba.src = url;
    function iniciar() {
    import("https://cdn.jsdelivr.net/npm/shaders@4.0.7/dist/js/bundle.js").then(function (shaders) {
      lienzo.classList.add("shader-foto");
      return Promise.resolve(shaders.createShader(lienzo, {
        components: [
          {
            type: "Pixelate",
            props: { scale: 160, gap: 0, roundness: 0 },
            children: [
              /* la foto ya viene teñida con la paleta (navy, teal, sky blue y beige) */
              { type: "ImageTexture", props: { url: url, objectFit: "cover" } }
            ]
          }
        ]
      })).then(function () { lienzo.parentNode.classList.add("con-shader"); });
    }).catch(function () {
      lienzo.remove();
    });
    }
  }


  /* ===== 12. Inicio ===== */
  document.documentElement.classList.add("js");
  follaje();
  shaderPortada();
  iniciarPuntos();
  trama();
  reloj();
  titular();
  vistas();
  indice();
  detalle();
  seccionActiva();
  personajes();
  rastro();
  ventanas();
  stickers();
  contacto();
  revelar();
})();
