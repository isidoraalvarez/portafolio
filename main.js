/* =========================================================
   main.js — interacciones compartidas (index.html y proyecto.html)
   ---------------------------------------------------------
   Script clásico (sin módulos) para que funcione también
   abriendo el archivo con doble clic (file://).

   Módulos:
   1. reloj ............ hora en la barra de menú
   2. titular .......... palabra que rota (toca/usa/habita/sostiene)
   3. ventanas ......... arrastrar ventanas con pointer events
   4. estampillas ...... render + filtros + scroll horizontal + progreso
   5. pieza ............ ventana "pieza-interactiva" con "ver otra"
   6. contacto ......... copiar al portapapeles
   7. seccionActiva .... marca dock y menú según la sección visible
   8. revelar .......... aparición suave al hacer scroll
   9. transiciones ..... fundido al cambiar de página
   ========================================================= */

(function () {
  "use strict";

  var PROYECTOS = window.PROYECTOS || [];
  var RUTA = window.RUTA_IMAGENES || "imagenes/";
  var reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Utilidades */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(txt) {
    return String(txt).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* -------------------------------------------------------
     1. Reloj (barra de menú)
     ------------------------------------------------------- */
  function reloj() {
    var el = $("[data-reloj]");
    if (!el) return;
    var fmt = new Intl.DateTimeFormat("es-CL", {
      weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    });
    function tick() {
      var ahora = new Date();
      el.textContent = fmt.format(ahora).replace(/\./g, "").replace(",", " ·");
      el.setAttribute("datetime", ahora.toISOString());
    }
    tick();
    setInterval(tick, 30000);
  }

  /* -------------------------------------------------------
     2. Titular dinámico
     Cambia cada 1,8 s con blur + fade (sin cajas de fondo).
     Clic en la palabra = siguiente. Se pausa con la pestaña oculta.
     ------------------------------------------------------- */
  function titular() {
    var caja = $(".palabra-caja");
    if (!caja) return;
    var palabra = $(".palabra", caja);
    var lista = (caja.dataset.palabras || "toca").split(",");
    var i = 0;
    var INTERVALO = 1800;
    var SALIDA = 380;
    var timer = null;
    var ocupado = false;

    function siguiente() {
      if (ocupado) return;
      ocupado = true;
      i = (i + 1) % lista.length;

      var anchoActual = caja.getBoundingClientRect().width;
      caja.style.width = anchoActual + "px";
      palabra.classList.add("sale");

      setTimeout(function () {
        // cambia el texto y mide el ancho nuevo
        palabra.textContent = lista[i];
        caja.style.width = "auto";
        var anchoNuevo = caja.getBoundingClientRect().width;
        caja.style.width = anchoActual + "px";
        void caja.offsetWidth;                     // fuerza reflow
        caja.style.width = anchoNuevo + "px";

        // entra desde arriba con blur
        palabra.classList.remove("sale");
        palabra.classList.add("entra");
        void palabra.offsetWidth;
        palabra.classList.remove("entra");
        ocupado = false;
      }, reducirMovimiento ? 0 : SALIDA);
    }

    function iniciar() { detener(); timer = setInterval(siguiente, INTERVALO); }
    function detener() { if (timer) clearInterval(timer); timer = null; }

    caja.addEventListener("click", function () { siguiente(); iniciar(); });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) detener(); else iniciar();
    });
    // si cambia el tamaño de la fuente (clamp), soltar el ancho fijo
    window.addEventListener("resize", function () { caja.style.width = "auto"; });

    iniciar();
  }

  /* -------------------------------------------------------
     3. Ventanas arrastrables (drag & drop con pointer events)
     Se arrastran desde la barra .tb. Doble clic = vuelve a su sitio.
     Funciona con mouse, lápiz y touch.
     ------------------------------------------------------- */
  var zTop = 10;

  function hacerArrastrable(win) {
    var barra = $(".tb", win);
    if (!barra || win.dataset.arrastreListo) return;
    win.dataset.arrastreListo = "1";

    var x = 0, y = 0;                 // desplazamiento acumulado
    var inicioX = 0, inicioY = 0;
    var limites = null;
    var activo = false;

    function aplicar() { win.style.translate = x + "px " + y + "px"; }

    barra.addEventListener("pointerdown", function (e) {
      if (e.button !== 0 || e.target.closest("button, a")) return;
      e.preventDefault();
      activo = true;
      barra.setPointerCapture(e.pointerId);

      inicioX = e.clientX - x;
      inicioY = e.clientY - y;

      // límites: deja al menos 80 px de la ventana dentro de la pantalla
      var r = win.getBoundingClientRect();
      var alto = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--alto-header")) || 58;
      limites = {
        minX: x - r.left - r.width + 80,
        maxX: x + (window.innerWidth - r.right) + r.width - 80,
        minY: y - r.top + alto
      };

      win.classList.remove("volviendo");
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

    barra.addEventListener("dblclick", function () {
      x = 0; y = 0;
      win.classList.add("volviendo");
      aplicar();
    });

    // cualquier clic en la ventana la trae al frente
    win.addEventListener("pointerdown", function () { win.style.zIndex = ++zTop; });
  }

  function ventanas() {
    $$("[data-arrastrable]").forEach(hacerArrastrable);
  }

  /* -------------------------------------------------------
     4. Estampillas: render, filtros, scroll horizontal, progreso
     ------------------------------------------------------- */
  function crearEstampilla(p) {
    var a = document.createElement("a");
    a.className = "sx";
    a.href = "proyecto.html?p=" + encodeURIComponent(p.id);
    a.dataset.cats = p.cats.join(" ");
    a.setAttribute("aria-label", p.titulo + " — " + p.tipo + ", " + p.anio);

    var imagen = p.portada
      ? '<div class="sx__img' + (p.ajuste === "contain" ? " sx__img--contain" : "") + '">' +
          '<img src="' + RUTA + esc(p.portada) + '" alt="" loading="lazy" decoding="async" draggable="false">' +
        "</div>"
      : '<div class="sx__img sx__img--vacia"><span class="mono">[imagen por definir]</span></div>';

    a.innerHTML =
      '<div class="sx__papel">' +
        '<div class="sx__cab"><span>' + esc(p.cod) + "</span><span>" + esc(p.anio) + "</span></div>" +
        imagen +
        '<div class="sx__pie">' +
          '<div class="sx__textos">' +
            '<h3 class="sx__titulo">' + esc(p.titulo) + "</h3>" +
            '<p class="sx__tipo">' + esc(p.tipo) + "</p>" +
          "</div>" +
          '<span class="sx__flecha" aria-hidden="true"></span>' +
        "</div>" +
      "</div>";
    return a;
  }

  function estampillas() {
    var srow = $("#srow");
    if (!srow) return;

    var frag = document.createDocumentFragment();
    PROYECTOS.forEach(function (p) { frag.appendChild(crearEstampilla(p)); });
    srow.appendChild(frag);

    var total = $("[data-total]");
    if (total) total.textContent = PROYECTOS.length;

    /* --- barra de progreso --- */
    var avance = $("[data-progreso]");
    var pendiente = false;
    function actualizarProgreso() {
      pendiente = false;
      if (!avance) return;
      var max = srow.scrollWidth;
      var visto = (srow.scrollLeft + srow.clientWidth) / (max || 1);
      avance.style.width = Math.min(100, visto * 100) + "%";
    }
    function pedirProgreso() {
      if (!pendiente) { pendiente = true; requestAnimationFrame(actualizarProgreso); }
    }
    srow.addEventListener("scroll", pedirProgreso, { passive: true });
    window.addEventListener("resize", pedirProgreso);
    window.addEventListener("load", pedirProgreso);
    actualizarProgreso();

    /* --- rueda del mouse: vertical → horizontal mientras queda fila --- */
    srow.addEventListener("wheel", function (e) {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;   // trackpad horizontal: nativo
      var max = srow.scrollWidth - srow.clientWidth;
      var puede = (e.deltaY > 0 && srow.scrollLeft < max - 1) || (e.deltaY < 0 && srow.scrollLeft > 0);
      if (!puede) return;                                       // en los extremos, sigue el scroll de la página
      e.preventDefault();
      srow.scrollLeft += e.deltaY;
    }, { passive: false });

    /* --- arrastrar con el mouse (touch usa el scroll nativo) --- */
    var abajo = false, movio = false, x0 = 0, scroll0 = 0, idPuntero = null;

    srow.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      abajo = true; movio = false;
      x0 = e.clientX; scroll0 = srow.scrollLeft; idPuntero = e.pointerId;
    });
    srow.addEventListener("pointermove", function (e) {
      if (!abajo) return;
      var dx = e.clientX - x0;
      if (!movio && Math.abs(dx) > 6) {
        movio = true;
        srow.classList.add("arrastrando");
        srow.setPointerCapture(idPuntero);
      }
      if (movio) srow.scrollLeft = scroll0 - dx;
    });
    function soltar() {
      if (!abajo) return;
      abajo = false;
      srow.classList.remove("arrastrando");
      if (idPuntero !== null && srow.hasPointerCapture(idPuntero)) srow.releasePointerCapture(idPuntero);
    }
    srow.addEventListener("pointerup", soltar);
    srow.addEventListener("pointercancel", soltar);
    srow.addEventListener("lostpointercapture", soltar);

    // si hubo arrastre, el clic no abre el proyecto
    srow.addEventListener("click", function (e) {
      if (movio) { e.preventDefault(); e.stopPropagation(); movio = false; }
    }, true);
    srow.addEventListener("dragstart", function (e) { e.preventDefault(); });

    /* --- filtros --- */
    var botones = $$("[data-filtro]");
    var timerFiltro = null;

    botones.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filtro = btn.dataset.filtro;
        botones.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });

        var tarjetas = $$(".sx", srow);
        // 1) salen las que no corresponden
        tarjetas.forEach(function (t) {
          var ok = filtro === "todos" || t.dataset.cats.split(" ").indexOf(filtro) !== -1;
          t.classList.toggle("fuera", !ok);
          t.dataset.ok = ok ? "1" : "0";
        });

        clearTimeout(timerFiltro);
        timerFiltro = setTimeout(function () {
          // 2) se ocultan y entran las que sí
          tarjetas.forEach(function (t) {
            var ok = t.dataset.ok === "1";
            t.classList.toggle("oculta", !ok);
            if (ok) t.classList.add("fuera");
          });
          srow.scrollTo({ left: 0, behavior: "auto" });
          requestAnimationFrame(function () {
            tarjetas.forEach(function (t) { if (t.dataset.ok === "1") t.classList.remove("fuera"); });
            pedirProgreso();
          });
        }, reducirMovimiento ? 0 : 260);
      });
    });
  }

  /* -------------------------------------------------------
     5. Pieza interactiva (portada) — "ver otra ↻"
     ------------------------------------------------------- */
  function pieza() {
    var img = $("[data-pieza-img]");
    if (!img) return;
    var caja = img.closest(".pieza");
    var enlace = $("[data-pieza-enlace]");
    var etiqueta = $("[data-pieza-etiqueta]");
    var titulo = $("[data-pieza-titulo]");
    var boton = $("[data-pieza-otra]");

    var lista = PROYECTOS.filter(function (p) { return p.portada; });
    if (!lista.length) return;
    var actual = -1;

    function mostrar(indice) {
      actual = indice;
      var p = lista[indice];
      img.classList.remove("lista");

      setTimeout(function () {
        var nueva = new Image();
        nueva.onload = function () {
          img.src = nueva.src;
          img.style.objectFit = p.ajuste === "contain" ? "contain" : "cover";
          img.alt = p.titulo;
          caja.classList.add("con-imagen");
          img.classList.add("lista");
        };
        nueva.src = RUTA + p.portada;
        enlace.href = "proyecto.html?p=" + encodeURIComponent(p.id);
        enlace.setAttribute("aria-label", "ver proyecto " + p.titulo);
        etiqueta.textContent = "[" + p.titulo + " · " + p.anio + "]";
        titulo.textContent = "pieza-interactiva — " + p.portada;
      }, img.src ? 250 : 0);
    }

    function aleatoria() {
      var n;
      do { n = Math.floor(Math.random() * lista.length); } while (lista.length > 1 && n === actual);
      return n;
    }

    boton.addEventListener("click", function () { mostrar(aleatoria()); });
    mostrar(aleatoria());
  }

  /* -------------------------------------------------------
     6. Copiar contacto (vuelve a "copiar" tras 1,5 s)
     ------------------------------------------------------- */
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
          timer = setTimeout(function () {
            btn.textContent = original;
            btn.classList.remove("copiado");
          }, 1500);
        });
      });
    });
  }

  /* -------------------------------------------------------
     7. Sección activa (dock + menú)
     ------------------------------------------------------- */
  function seccionActiva() {
    var ids = ["contacto", "sobre-mi", "trabajos"];          // de más específico a más general
    var secciones = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
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
      // al final de la página, contacto
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 4) activa = "contacto";
      enlaces.forEach(function (a) { a.classList.toggle("activo", a.dataset.seccion === activa); });
    }

    window.addEventListener("scroll", function () {
      if (!pendiente) { pendiente = true; requestAnimationFrame(calcular); }
    }, { passive: true });
    window.addEventListener("resize", calcular);
    calcular();
  }

  /* -------------------------------------------------------
     8. Revelar al hacer scroll
     ------------------------------------------------------- */
  function revelar() {
    var items = $$(".revelar");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 60 + "ms";
      io.observe(el);
    });
  }

  /* -------------------------------------------------------
     9. Transiciones entre páginas (fundido + blur)
     ------------------------------------------------------- */
  function transiciones() {
    document.addEventListener("click", function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest("a[href]");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;

      var destino = new URL(a.href, location.href);
      var mismaPagina = destino.pathname === location.pathname && destino.search === location.search;
      if (mismaPagina || destino.protocol !== location.protocol || destino.host !== location.host) return;
      if (!/\.html$|\/$/.test(destino.pathname)) return;

      e.preventDefault();
      if (reducirMovimiento) { location.href = destino.href; return; }
      document.documentElement.classList.add("saliendo");
      setTimeout(function () { location.href = destino.href; }, 280);
    });

    // al volver con el botón "atrás" (bfcache) quitar el fundido
    window.addEventListener("pageshow", function () {
      document.documentElement.classList.remove("saliendo");
    });
  }

  /* -------------------------------------------------------
     Inicio
     ------------------------------------------------------- */
  document.documentElement.classList.add("js");
  reloj();
  titular();
  estampillas();
  pieza();
  ventanas();
  contacto();
  seccionActiva();
  revelar();
  transiciones();

  // expone lo necesario para proyecto.js
  window.Portafolio = { hacerArrastrable: hacerArrastrable, esc: esc };
})();
