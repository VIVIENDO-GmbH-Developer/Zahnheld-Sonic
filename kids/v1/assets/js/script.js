/* Ralph & Doug — cinematic motion layer (vanilla JS, one rAF loop)
   Smooth wheel scroll, hero pin/scrub, full-bleed scale, pinned statement,
   parallax, scroll-reactive marquee, scroll reveals. Honors reduced-motion.
   (Hero media is a placeholder div in this concept build — autoplay is guarded.) */
(function () {
  "use strict";

  var mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var reduceMotion = mqReduce.matches;
  var isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  var doc = document.documentElement;
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var map = function (x, a, b, c, d) { return clamp((x - a) / (b - a), 0, 1) * (d - c) + c; };

  /* ---- Hero media (placeholder div here; real <video> in production) ---- */
  var heroMedia = document.querySelector("[data-hero-media]");
  if (heroMedia && typeof heroMedia.play === "function") {
    var tryPlay = function () { var p = heroMedia.play(); if (p && p.catch) p.catch(function () {}); };
    heroMedia.addEventListener("canplay", tryPlay, { once: true });
    tryPlay();
    var resume = function () { tryPlay(); window.removeEventListener("pointerdown", resume); window.removeEventListener("keydown", resume); };
    window.addEventListener("pointerdown", resume);
    window.addEventListener("keydown", resume);
  }

  /* ---- Cinematic page loader ----
     "ZAHNHELD KIDS präsentiert." fades in, then the wordmark draws itself ONE LETTER
     AT A TIME (strictly sequential): each glyph's outline inks in via stroke-dasharray
     and its fill floods just behind the pen, and the next letter only starts once the
     current one is drawn. When the word is written the loader dissolves into the hero
     (same cobalt, same wordmark, same spot). Reveal sets `is-loaded`, triggering the
     existing hero entrance. */
  var loader = document.querySelector("[data-loader]");
  var reveal = function () { doc.classList.add("is-loaded"); };

  if (loader && !reduceMotion) {
    var svg = loader.querySelector("[data-loader-svg]");
    var glyphs = [];
    try {
      if (svg) {
        glyphs = Array.prototype.slice.call(svg.querySelectorAll("path")).map(function (p) {
          var box = p.getBBox();
          return { el: p, x: box.x, cy: box.y + box.height / 2, len: p.getTotalLength() };
        });
        /* Reading order: cluster into rows by vertical gaps (robust to letters of
           differing heights), then left-to-right within each row, top rows first. */
        glyphs.sort(function (a, b) { return a.cy - b.cy; });
        var rows = [], cur = null, prevCy = null;
        glyphs.forEach(function (g) {
          if (cur === null || (g.cy - prevCy) > 30) { cur = []; rows.push(cur); }
          cur.push(g); prevCy = g.cy;
        });
        glyphs = [];
        rows.forEach(function (r) { r.sort(function (a, b) { return a.x - b.x; }); glyphs = glyphs.concat(r); });
        glyphs.forEach(function (g) {
          g.el.style.strokeDasharray = g.len + "px";
          g.el.style.strokeDashoffset = g.len + "px";
          g.el.style.fillOpacity = "0";
        });
      }
    } catch (e) { glyphs = []; }

    var loaderDone = false;
    var t0 = null, raf = null;
    doc.classList.add("is-loading");
    try { window.scrollTo(0, 0); } catch (e2) {}

    var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };
    var paintAll = function (full) {
      glyphs.forEach(function (g) {
        g.el.style.strokeDashoffset = full ? "0px" : g.len + "px";
        g.el.style.fillOpacity = full ? "1" : "0";
      });
    };

    /* Timeline (ms): kicker in -> hold -> strictly sequential per-letter draw -> settle.
       SLOT >= STROKE_MS so a letter's outline finishes before the next one begins. */
    var N = glyphs.length;
    var STROKE_MS = 140, FILL_MS = 100, FILL_LEAD = 55, SLOT = 150;
    var DRAW_DUR = (N > 0 ? (N - 1) * SLOT : 0) + STROKE_MS + FILL_MS;
    var T_KICK = 200, DRAW_START = 1100, SETTLE = 420;
    var revealAt = DRAW_START + DRAW_DUR + SETTLE;

    var cleanup = function () {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("wheel", skip);
    };
    var finish = function () {
      if (loaderDone) return; loaderDone = true;
      cleanup();
      paintAll(true);
      /* Seat the hero in its final state instantly so the loader dissolves into an
         identical composition (same cobalt, same wordmark, same spot) — avoids the
         opacity dip you'd get from crossfading against the hero's delayed entrance. */
      [".hero__kicker", "[data-hero-wordmark]", ".hero__season"].forEach(function (sel) {
        var el = document.querySelector(sel);
        if (!el) return;
        el.style.transition = "none";
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      reveal();
      loader.classList.add("is-revealed");
      doc.classList.remove("is-loading");
      window.setTimeout(function () { if (loader) loader.style.display = "none"; }, 900);
    };
    var skip = function () { if (loaderDone) return; finish(); };

    var step = function (ts) {
      if (t0 === null) t0 = ts;
      var t = ts - t0;
      if (t >= T_KICK) loader.classList.add("is-kicked");
      var td = t - DRAW_START;
      for (var i = 0; i < N; i++) {
        var g = glyphs[i];
        var sStart = i * SLOT;
        var sp = clamp((td - sStart) / STROKE_MS, 0, 1);
        g.el.style.strokeDashoffset = (g.len * (1 - easeOut(sp))) + "px";
        var fp = clamp((td - (sStart + STROKE_MS - FILL_LEAD)) / FILL_MS, 0, 1);
        g.el.style.fillOpacity = fp.toFixed(3);
      }
      if (t >= revealAt) { finish(); return; }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    /* Skip the intro on the first user interaction. */
    window.addEventListener("pointerdown", skip);
    window.addEventListener("keydown", skip);
    window.addEventListener("wheel", skip, { passive: true });

    /* Hard safety: never let the loader trap the page. */
    window.setTimeout(finish, 7000);
  } else {
    if (loader) loader.style.display = "none";
    reveal();
  }

  /* ---- Scroll reveals with stagger ---- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  revealEls.forEach(function (el) {
    var parent = el.parentElement;
    if (parent && parent.hasAttribute("data-stagger")) {
      var sibs = Array.prototype.slice.call(parent.children).filter(function (c) { return c.classList.contains("reveal"); });
      var idx = sibs.indexOf(el);
      if (idx > 0) el.style.setProperty("--reveal-delay", (idx * 95) + "ms");
    }
  });
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---- References ---- */
  var nav = document.getElementById("nav");
  var heroSection = document.querySelector("[data-hero]");
  var heroStage = document.querySelector(".hero__stage");
  var heroWordmark = document.querySelector("[data-hero-wordmark]");
  var heroOverlay = document.querySelector("[data-hero-layer]");
  var heroKicker = document.querySelector(".hero__kicker");
  var heroSeason = document.querySelector(".hero__season");
  var heroCue = document.querySelector(".hero__scrollcue");
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  var scaleEls = Array.prototype.slice.call(document.querySelectorAll("[data-scale]"));
  var pinEls = Array.prototype.slice.call(document.querySelectorAll("[data-pin]")).map(function (s) { return { section: s, inner: s.firstElementChild }; });

  function inView(rect, vh, pad) { return rect.bottom > -pad && rect.top < vh + pad; }
  function centreProgress(rect, vh) { return (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2); }

  function applyScrollFx() {
    var vh = window.innerHeight;
    var y = window.scrollY;
    nav.classList.toggle("is-solid", y > (heroSection ? heroSection.offsetHeight * 0.55 : 400));
    if (reduceMotion) return;

    /* Unified intro+hero (same pinned intro+hero behavior): starts on the cobalt
       stage with the big wordmark; the video OPENS from the bottom behind it,
       then CLOSES from the bottom and the wordmark is eaten at the rising edge. */
    if (heroSection && heroMedia) {
      var hr = heroSection.getBoundingClientRect();
      var range = Math.max(1, heroSection.offsetHeight - vh);
      var p = clamp(-hr.top / range, 0, 1);
      // Entry: the video opens from the bottom up behind the wordmark. After it is
      // full, the section simply unpins and scrolls on normally (no close clip) —
      // video, wordmark and the credits below all scroll up at the same rate.
      var op = clamp(p / 0.40, 0, 1);
      heroMedia.style.clipPath = "inset(" + ((1 - op) * 100).toFixed(2) + "% 0 0 0)";
      heroMedia.style.transform = "none";
      if (heroWordmark) { heroWordmark.style.transform = "none"; heroWordmark.style.opacity = ""; }
      if (heroCue) heroCue.style.opacity = p > 0.06 ? "0" : "";
    }

    scaleEls.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (!inView(r, vh, 80)) return;
      var sp = clamp((centreProgress(r, vh) + 1) / 2, 0, 1);
      el.style.transform = "scale(" + (1.025 + sp * 0.085).toFixed(4) + ")";
    });

    parallaxEls.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (!inView(r, vh, 80)) return;
      el.style.transform = "translate3d(0," + (centreProgress(r, vh) * 10).toFixed(2) + "%,0)";
    });

    pinEls.forEach(function (pin) {
      if (!pin.inner) return;
      var r = pin.section.getBoundingClientRect();
      var q = clamp(-r.top / Math.max(1, r.height - vh), 0, 1);
      var op = q < 0.2 ? q / 0.2 : (q > 0.8 ? (1 - q) / 0.2 : 1);
      pin.inner.style.opacity = clamp(op, 0, 1).toFixed(3);
      pin.inner.style.transform = "scale(" + (0.955 + q * 0.06).toFixed(4) + ")";
    });
  }

  /* ---- Marquee ---- */
  var marquee = document.querySelector(".marquee__track");
  var marqueeW = 0, marqueeX = 0;
  if (marquee && !reduceMotion) {
    marquee.style.animation = "none";
    var measure = function () { marqueeW = marquee.scrollWidth / 2 || 1; };
    measure();
    window.addEventListener("resize", measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  }

  /* ---- Master rAF loop ---- */
  var smooth = !isTouch && !reduceMotion;
  var target = window.scrollY;
  var running = false;
  var prevY = window.scrollY;
  var vel = 0;
  var maxScroll = function () { return doc.scrollHeight - window.innerHeight; };

  if (smooth) {
    window.addEventListener("wheel", function (e) {
      if (e.ctrlKey) return;
      e.preventDefault();
      if (!running) { target = window.scrollY; running = true; }
      target = clamp(target + e.deltaY, 0, maxScroll());
    }, { passive: false });
  }
  window.addEventListener("resize", function () { target = clamp(target, 0, maxScroll()); });
  window.__rdScrollTo = function (y) { running = false; window.scrollTo(0, clamp(y, 0, maxScroll())); };

  function frame() {
    if (smooth && running) {
      var cur = window.scrollY;
      var next = lerp(cur, target, 0.13);
      if (Math.abs(target - next) < 0.4) { next = target; running = false; }
      window.scrollTo(0, next);
    }
    var y = window.scrollY;
    vel = y - prevY; prevY = y;
    applyScrollFx();
    if (marquee && !reduceMotion && marqueeW) {
      marqueeX -= 0.9 + Math.min(60, Math.abs(vel)) * 0.25;
      while (marqueeX <= -marqueeW) marqueeX += marqueeW;
      marquee.style.transform = "translate3d(" + marqueeX.toFixed(2) + "px,0,0)";
    }
    requestAnimationFrame(frame);
  }
  applyScrollFx();
  requestAnimationFrame(frame);
})();
