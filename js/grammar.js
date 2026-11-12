/* Грамматика: разделы лежат в js/data/grammar-sections.js.
   Выбранный раздел хранится в адресе страницы, например grammar.html#word-formation. */
(function () {
  var GRAM = window.LK.GRAM;
  var gtabs = document.getElementById("gtabs"), gbody = document.getElementById("gbody");

  GRAM.forEach(function (sec) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "chip"; b.setAttribute("data-g", sec.id); b.setAttribute("aria-pressed", "false");
    b.textContent = sec.name;
    b.addEventListener("click", function () { location.hash = sec.id; });
    gtabs.appendChild(b);
  });

  function selected() {
    var h = (location.hash || "").replace("#", "");
    return GRAM.filter(function (s) { return s.id === h; })[0] || GRAM[0];
  }
  function render() {
    var sec = selected();
    gtabs.querySelectorAll(".chip").forEach(function (c) {
      c.setAttribute("aria-pressed", c.getAttribute("data-g") === sec.id ? "true" : "false");
    });
    gbody.innerHTML = "";
    var intro = document.createElement("p"); intro.className = "gintro"; intro.textContent = sec.intro; gbody.appendChild(intro);
    var grid = document.createElement("div"); grid.className = "tips";
    sec.items.forEach(function (it) {
      var d = document.createElement("div"); d.className = "tip gcard glass";
      var h = document.createElement("h3"); h.textContent = it.h; d.appendChild(h);
      var p = document.createElement("p"); p.textContent = it.p; d.appendChild(p);
      if (it.f) { var f = document.createElement("code"); f.className = "formula"; f.textContent = it.f; d.appendChild(f); }
      if (it.ex && it.ex.length) {
        var ul = document.createElement("ul");
        it.ex.forEach(function (x) { var li = document.createElement("li"); li.textContent = x; ul.appendChild(li); });
        d.appendChild(ul);
      }
      if (it.s) {
        var s = document.createElement("div"); s.className = "sig";
        var sb = document.createElement("b"); sb.textContent = "Маркеры: ";
        s.appendChild(sb); s.appendChild(document.createTextNode(it.s)); d.appendChild(s);
      }
      grid.appendChild(d);
    });
    gbody.appendChild(grid);
  }
  window.addEventListener("hashchange", render);
  render();
})();
