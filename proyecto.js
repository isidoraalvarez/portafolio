/* =========================================================
   proyecto.js — vista de detalle (proyecto.html?p=<id>)
   Arma la página con los datos de js/datos.js.
   Debe cargarse ANTES de main.js (main.js activa el arrastre
   de las ventanas que se crean aquí).
   ========================================================= */

(function () {
  "use strict";

  var PROYECTOS = window.PROYECTOS || [];
  var RUTA = window.RUTA_IMAGENES || "imagenes/";
  var main = document.getElementById("detalle");
  if (!main) return;

  function esc(txt) {
    return String(txt).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function tb(titulo) {
    return '<div class="tb"><span class="tb__puntos"><i></i><i></i><i></i></span>' +
           '<span class="tb__titulo">' + esc(titulo) + "</span></div>";
  }
  function fila(etq, valor) {
    return '<div class="contacto"><span class="contacto__etq">' + esc(etq) +
           '</span><span class="contacto__valor">' + esc(valor) + "</span></div>";
  }

  var id = new URLSearchParams(location.search).get("p");
  var indice = PROYECTOS.findIndex(function (p) { return p.id === id; });

  /* Proyecto no encontrado */
  if (indice === -1) {
    main.insertAdjacentHTML("beforeend",
      '<div class="detalle__cab"><p class="etiqueta">Nº404</p>' +
      '<h1 class="detalle__titulo">proyecto no encontrado</h1>' +
      '<div class="botones"><a class="btn btn--primario" href="index.html#trabajos">ver todos los trabajos →</a></div></div>');
    return;
  }

  var p = PROYECTOS[indice];
  var anterior = PROYECTOS[(indice - 1 + PROYECTOS.length) % PROYECTOS.length];
  var siguiente = PROYECTOS[(indice + 1) % PROYECTOS.length];
  var numero = String(indice + 1).padStart(2, "0");
  var fotos = p.fotos && p.fotos.length ? p.fotos : (p.portada ? [p.portada] : []);
  var portada = p.portada || fotos[0];

  document.title = p.titulo + " — Isidora Álvarez";

  /* Imagen principal */
  var hero = portada
    ? '<div class="visor"><img src="' + RUTA + esc(portada) + '" alt="' + esc(p.titulo) + '" data-ampliar="' + esc(portada) + '"></div>'
    : '<div class="visor visor--vacio"><span class="mono">[imagen por definir]</span></div>';

  /* Galería: cada foto es una ventana arrastrable */
  var galeria = "";
  if (fotos.length > 1) {
    galeria =
      '<section class="galeria">' +
        '<p class="etiqueta revelar">Nº' + numero + ".1 — galería · " + fotos.length + " fotos</p>" +
        '<div class="galeria__grid">' +
          fotos.map(function (f, i) {
            return '<article class="ventana revelar" data-arrastrable>' +
                     tb("foto-" + String(i + 1).padStart(2, "0") + ".jpeg") +
                     '<div class="galeria__foto"><img src="' + RUTA + esc(f) + '" alt="' + esc(p.titulo) + ", foto " + (i + 1) +
                     '" loading="lazy" decoding="async" draggable="false" data-ampliar="' + esc(f) + '"></div>' +
                   "</article>";
          }).join("") +
        "</div>" +
      "</section>";
  }

  /* Proceso — bocetos y croquis (Figma: proyecto.html › 109:943)
     Lee p.bocetos (lista de archivos en /imagenes) desde datos.js.
     Si el proyecto aún no tiene bocetos, muestra 4 ventanas
     marcadoras como en el Figma. */
  var bocetos = p.bocetos && p.bocetos.length ? p.bocetos : [null, null, null, null];
  var proceso =
    '<section class="proceso">' +
      '<p class="etiqueta">proceso — bocetos y croquis</p>' +
      '<div class="proceso__fila" tabindex="0" aria-label="Bocetos y croquis (desliza horizontalmente)">' +
        bocetos.map(function (b, i) {
          var n = String(i + 1).padStart(2, "0");
          var visual = b
            ? '<img src="' + RUTA + esc(b) + '" alt="' + esc(p.titulo) + ", boceto " + n +
              '" loading="lazy" decoding="async" draggable="false" data-ampliar="' + esc(b) + '">'
            : '<span class="proceso__etiqueta">[boceto / croquis ' + n + "]</span>";
          return '<article class="ventana proceso__boceto">' +
                   tb("boceto-" + n + ".jpg") +
                   '<div class="proceso__visual">' + visual + "</div>" +
                 "</article>";
        }).join("") +
      "</div>" +
    "</section>";

  main.insertAdjacentHTML("beforeend",
    '<div class="detalle__cab">' +
      '<p class="etiqueta">Nº' + numero + " — " + esc(p.tipo) + "</p>" +
      '<h1 class="detalle__titulo">' + esc(p.titulo) + "</h1>" +
    "</div>" +

    '<div class="detalle__grid">' +
      '<figure class="ventana detalle__hero" data-arrastrable>' + tb(portada || p.id) + hero + "</figure>" +

      '<aside class="detalle__lado">' +
        '<article class="ventana revelar" data-arrastrable>' + tb("ficha — " + p.cod) +
          '<div class="ventana__cuerpo ventana__cuerpo--filas">' +
            fila("código", p.cod) +
            fila("año", p.anio) +
            fila("tipo", p.tipo) +
            fila("materiales", p.materiales || "—") +
          "</div>" +
        "</article>" +

        '<article class="ventana revelar" data-arrastrable>' + tb("descripcion.txt") +
          '<div class="ventana__cuerpo"><p class="detalle__texto">' + esc(p.texto || "") + "</p></div>" +
        "</article>" +

        '<nav class="detalle__nav revelar" aria-label="Otros proyectos">' +
          '<a class="btn btn--secundario" href="proyecto.html?p=' + encodeURIComponent(anterior.id) + '">← ' + esc(anterior.titulo) + "</a>" +
          '<a class="btn btn--primario" href="proyecto.html?p=' + encodeURIComponent(siguiente.id) + '">' + esc(siguiente.titulo) + " →</a>" +
        "</nav>" +
      "</aside>" +
    "</div>" +
    galeria +
    proceso
  );

  /* -------- Visor ampliado (lightbox) -------- */
  var lb = document.getElementById("lightbox");
  var lbImg = lb.querySelector("[data-lb-img]");
  var lbTitulo = lb.querySelector("[data-lb-titulo]");
  var lbCerrar = lb.querySelector("[data-lb-cerrar]");
  var ultimoFoco = null;

  function abrir(archivo) {
    ultimoFoco = document.activeElement;
    lbImg.src = RUTA + archivo;
    lbImg.alt = p.titulo;
    lbTitulo.textContent = archivo;
    lb.hidden = false;
    requestAnimationFrame(function () { lb.classList.add("abierto"); });
    lbCerrar.focus();
  }
  function cerrar() {
    lb.classList.remove("abierto");
    setTimeout(function () { lb.hidden = true; }, 300);
    if (ultimoFoco) ultimoFoco.focus();
  }

  // un clic (sin arrastre) sobre una foto la amplía
  var down = null;
  main.addEventListener("pointerdown", function (e) { down = { x: e.clientX, y: e.clientY }; });
  main.addEventListener("click", function (e) {
    var img = e.target.closest("[data-ampliar]");
    if (!img) return;
    if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 6) return;
    abrir(img.dataset.ampliar);
  });

  lbCerrar.addEventListener("click", cerrar);
  lb.addEventListener("click", function (e) { if (e.target === lb) cerrar(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") cerrar();
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      var i = fotos.indexOf(lbTitulo.textContent);
      var n = (i + (e.key === "ArrowRight" ? 1 : -1) + fotos.length) % fotos.length;
      if (fotos[n]) { lbImg.src = RUTA + fotos[n]; lbTitulo.textContent = fotos[n]; }
    }
  });
})();
