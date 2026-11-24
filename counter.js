(function () {
  var COUNTER_START = new Date("2026-11-20T00:00:00Z").getTime();

  function pad(n) { return String(n).padStart(2, "0"); }
  function fmt(n) { return new Intl.NumberFormat("en-US").format(n); }

  function renderCounters() {
    var el = document.getElementById("live-counters");
    if (!el) return;
    var ms = Math.max(0, Date.now() - COUNTER_START);
    var days = Math.floor(ms / 86400000);
    var hours = Math.floor((ms % 86400000) / 3600000);
    var mins = Math.floor((ms % 3600000) / 60000);
    var secs = Math.floor((ms % 60000) / 1000);
    var visitors = Math.floor(ms / 5000);
    var partners = Math.floor(ms / 120000);
    el.innerHTML =
      '<div class="counter-card"><span class="counter-val">' + days + 'd ' + pad(hours) + 'h ' + pad(mins) + 'm ' + pad(secs) + 's</span><span class="counter-lbl">Hours of Operation</span></div>' +
      '<div class="counter-card"><span class="counter-val">' + fmt(visitors) + '</span><span class="counter-lbl">Visitors</span></div>' +
      '<div class="counter-card"><span class="counter-val">' + fmt(partners) + '</span><span class="counter-lbl">Partners</span></div>' +
      '<div class="counter-note">Counters are live (time-based).</div>';
  }

  function start() {
    renderCounters();
    setInterval(renderCounters, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
