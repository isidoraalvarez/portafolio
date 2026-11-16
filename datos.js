/* =========================================================
   datos.js — fuente única de los proyectos
   ---------------------------------------------------------
   Lo usan index.html (estampillas) y proyecto.html (detalle).
   Para editar un proyecto, cambia solo este archivo.

   id          → se usa en la URL: proyecto.html?p=<id>
   cod / anio  → cabecera de la estampilla
   tipo        → línea en mayúsculas bajo el título
   cats        → filtros: mobiliario · prototipos · electronica · web
   portada     → imagen de la estampilla (la primera de "fotos" si falta)
   ajuste      → "cover" (llena el cuadro) o "contain" (se ve entera)
   fotos       → galería del detalle (rutas dentro de /imagenes)
   texto       → descripción del detalle ([…] = por escribir)
   ========================================================= */

window.PROYECTOS = [
  {
    id: "sin-te",
    titulo: "Sin-Te",
    cod: "E03",
    anio: "2026",
    tipo: "sintetizador modular / electrónica",
    cats: ["electronica", "prototipos"],
    portada: "sin_tes.jpeg",
    ajuste: "cover",
    fotos: ["sin_tes.jpeg", "sin_te.jpeg", "sintes.jpeg", "sintess.jpeg", "sinte.jpeg", "sinte2.jpeg"],
    materiales: "acrílico, impresión 3D, PCB, madera",
    texto: "[descripción del proyecto · por escribir]"
  },
  {
    id: "tostadora",
    titulo: "Tostadora inestable",
    cod: "E04",
    anio: "2026",
    tipo: "sintetizador / electrónica",
    cats: ["electronica", "prototipos"],
    portada: "tostadora.jpeg",
    ajuste: "cover",
    fotos: ["tostadora.jpeg"],
    materiales: "cartón, electrónica",
    texto: "[descripción del proyecto · por escribir]"
  },
  {
    id: "silla",
    titulo: "Silla",
    cod: "M01",
    anio: "2025",
    tipo: "mobiliario",
    cats: ["mobiliario"],
    portada: "silla.jpeg",
    ajuste: "cover",
    fotos: ["silla.jpeg"],
    materiales: "madera",
    texto: "[descripción del proyecto · por escribir]"
  },
  {
    id: "banca",
    titulo: "Banca",
    cod: "M02",
    anio: "2025",
    tipo: "mobiliario",
    cats: ["mobiliario"],
    portada: "banca.jpeg",
    ajuste: "cover",
    fotos: ["banca.jpeg", "banca2.jpeg", "plano_banca.jpeg"],
    materiales: "madera",
    texto: "[descripción del proyecto · por escribir]"
  },
  {
    id: "banco-zapatero",
    titulo: "Banco zapatero",
    cod: "M03",
    anio: "2025", // por confirmar
    tipo: "mobiliario / prototipo",
    cats: ["mobiliario", "prototipos"],
    portada: "banco_zapatero.jpeg",
    ajuste: "cover",
    fotos: ["banco_zapatero.jpeg", "banco_zapatero2.jpeg", "banco_zapatero3.jpeg"],
    materiales: "madera",
    texto: "[descripción del proyecto · por escribir]"
  },
  {
    id: "ave",
    titulo: "Ave",
    cod: "O01",
    anio: "2025", // por confirmar
    tipo: "madera / objeto",
    cats: ["prototipos"],
    portada: "ave.jpeg",
    ajuste: "cover",
    fotos: ["ave.jpeg", "ave2.jpeg", "ave3.jpeg", "ave4.jpeg"],
    materiales: "madera",
    texto: "[descripción del proyecto · por escribir]"
  },
  {
    id: "comedero",
    titulo: "Comedero",
    cod: "O02",
    anio: "2025", // por confirmar
    tipo: "objeto / madera",
    cats: ["prototipos"],
    portada: "comedero.jpeg",
    ajuste: "cover",
    fotos: ["comedero.jpeg", "comedero2.jpeg", "comedero3.jpeg", "comedero4.jpeg"],
    materiales: "madera",
    texto: "[descripción del proyecto · por escribir]"
  },
  {
    id: "lampara",
    titulo: "Lámpara",
    cod: "O03",
    anio: "2025", // por confirmar
    tipo: "iluminación / objeto",
    cats: ["prototipos"],
    portada: "lampara.jpeg",
    ajuste: "cover",
    fotos: ["lampara.jpeg", "lampara2.jpeg", "lampara3.jpeg", "lampara4.jpeg"],
    materiales: "[materiales]",
    texto: "[descripción del proyecto · por escribir]"
  },
  {
    id: "multirealidades",
    titulo: "Multirealidades",
    cod: "E02",
    anio: "2026",
    tipo: "web",
    cats: ["web"],
    portada: "multirealidades.png",
    ajuste: "contain",
    fotos: ["multirealidades.png"],
    materiales: "HTML, CSS, JS",
    texto: "[descripción del proyecto · por escribir]"
  },
  {
    id: "contrapresion",
    titulo: "tacto: contrapresión",
    cod: "T05",
    anio: "2026",
    tipo: "web",
    cats: ["web"],
    portada: "contrapresion.png",
    ajuste: "contain",
    fotos: ["contrapresion.png"],
    materiales: "HTML, CSS, JS",
    texto: "[descripción del proyecto · por escribir]"
  },
  {
    id: "wii",
    titulo: "escuchar la imagen: wii",
    cod: "T06",
    anio: "2026",
    tipo: "web",
    cats: ["web"],
    portada: "wii.png",
    ajuste: "contain",
    fotos: ["wii.png"],
    materiales: "HTML, CSS, JS",
    texto: "[descripción del proyecto · por escribir]"
  },
  {
    id: "wisin-yandel",
    titulo: "gestos: wisin & yandel",
    cod: "E01",
    anio: "2026",
    tipo: "web",
    cats: ["web"],
    portada: "", // sin imagen todavía → se muestra un recuadro gris
    ajuste: "contain",
    fotos: [],
    materiales: "HTML, CSS, JS",
    texto: "[descripción del proyecto · por escribir]"
  }
];

/* Carpeta donde están todas las fotos */
window.RUTA_IMAGENES = "imagenes/";
