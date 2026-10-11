/**
 * Style Guide v2 — page behavior
 * Replaces legacy js/style-guide.js on the v2 review copy.
 * Optional elements are guarded; the root page remains untouched.
 */
(function () {
  "use strict";
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
    } else callback();
  }
  ready(function () {
    var preview = document.getElementById("font-sample");
    [
      ["refluxblu", "frame refluxblu-white"],
      ["cuulblu", "frame cuulblu-refluxblu"],
      ["wurmgrey", "frame wurmgrey-refluxblu"],
      ["drkgable", "frame drkgable-white"]
    ].forEach(function (choice) {
      var trigger = document.getElementById(choice[0]);
      if (!trigger || !preview) return;
      trigger.addEventListener("click", function () { preview.className = choice[1]; });
    });
    var addButton = document.getElementById("add");
    if (addButton) addButton.addEventListener("click", function () {
      var point = document.querySelector(".push");
      if (!point || !point.parentNode) return;
      var heading = document.createElement("h2");
      heading.textContent = "Added Content";
      var paragraph = document.createElement("p");
      paragraph.textContent = "This is a demonstration of inserting content before a known insertion point.";
      point.parentNode.insertBefore(heading, point);
      point.parentNode.insertBefore(paragraph, point);
    });
    // Bootstrap 3 scroll-spy is initialized once. Verify after any framework migration.
    if (window.jQuery && window.jQuery.fn && window.jQuery.fn.scrollspy) {
      window.jQuery("body").scrollspy({ target: "#sidebar", offset: 220 });
    }
    var monitor = document.getElementById("monitor");
    function updateMonitor() { if (monitor) monitor.textContent = String(window.innerWidth); }
    updateMonitor();
    window.addEventListener("resize", updateMonitor, { passive: true });
    var backToTop = document.getElementById("back-to-top");
    function updateBackToTop() {
      if (backToTop) backToTop.style.display = window.scrollY > 200 ? "block" : "none";
    }
    updateBackToTop();
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    // No sticky-header behavior is bound until a real #myHeader component is defined.
  });
})();
