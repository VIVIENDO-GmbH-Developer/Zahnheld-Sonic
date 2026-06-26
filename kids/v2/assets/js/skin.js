/* Sketch-skin toggle: switch between the full sketchbook look and the lighter
   variant. Choice persists in localStorage. Default: full. */
(function () {
  "use strict";
  var KEY = "rd-skin";
  var doc = document.documentElement;
  var valid = { full: 1, light: 1 };

  var stored;
  try { stored = localStorage.getItem(KEY); } catch (e) { stored = null; }
  var skin = valid[stored] ? stored : "full";
  doc.setAttribute("data-skin", skin);

  function apply(next) {
    if (!valid[next]) return;
    doc.setAttribute("data-skin", next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
    var btns = document.querySelectorAll(".skin-toggle button");
    Array.prototype.forEach.call(btns, function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-skin") === next ? "true" : "false");
    });
  }

  function wire() {
    var toggle = document.querySelector(".skin-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-skin]");
      if (b) apply(b.getAttribute("data-skin"));
    });
    apply(doc.getAttribute("data-skin"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();
