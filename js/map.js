/* Карта вузов США: Leaflet + список с фильтрами. Данные в js/data/universities.js. */
(function () {
  var LK = window.LK;
  var COLORS = { "Лига плюща": "#e0414b", "Топ-вуз": "#f08a3c", "Технический": "#3fa7ff", "Свободные искусства": "#9b7bff", "Флагман штата": "#3fcf8e", "Другой": "#9aa7bd" };
  var rows = LK.UNIS.split("\n").map(function (l) {
    var p = l.split("|");
    return { name: p[0], city: p[1], st: p[2], lat: +p[3], lon: +p[4], type: p[5], cat: p[6], econ: p[7] === "э" };
  }).filter(function (u) { return u.name && !isNaN(u.lat); });

  var q = document.getElementById("u-q"), sSt = document.getElementById("u-state"), sType = document.getElementById("u-type"),
      sCat = document.getElementById("u-cat"), cEcon = document.getElementById("u-econ"),
      list = document.getElementById("u-list"), cnt = document.getElementById("u-count");
  Array.from(new Set(rows.map(function (u) { return u.st; }))).sort().forEach(function (s) {
    var o = document.createElement("option"); o.textContent = s; sSt.appendChild(o);
  });

  var map = null, layer = null, hasMap = typeof window.L !== "undefined";
  if (hasMap) {
    map = L.map("usmap", { scrollWheelZoom: false }).setView([39.5, -98.35], 4);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "&copy; OpenStreetMap" }).addTo(map);
    layer = L.layerGroup().addTo(map);
    map.on("focus", function () { map.scrollWheelZoom.enable(); });
    map.on("blur", function () { map.scrollWheelZoom.disable(); });
  } else {
    document.getElementById("map-fallback").hidden = false;
    document.getElementById("usmap").hidden = true;
  }

  /* избранное хранится в браузере по названию вуза */
  var FAV_KEY = "lk3y-fav-unis", favs = {};
  try { favs = JSON.parse(localStorage.getItem(FAV_KEY) || "{}") || {}; } catch (e) {}
  function saveFavs() { try { localStorage.setItem(FAV_KEY, JSON.stringify(favs)); } catch (e) {} }
  var cFav = document.getElementById("u-fav"), favLabel = document.getElementById("u-fav-l");
  var markers = {}, stars = {};
  function favCount() { return Object.keys(favs).length; }
  function styleMarker(u, m) {
    var f = !!favs[u.name];
    m.setStyle({ radius: f ? 9 : 6, weight: f ? 3 : 1.5, color: f ? "#ffd24a" : "#fff" });
  }
  function toggleFav(u, i) {
    if (favs[u.name]) delete favs[u.name]; else favs[u.name] = 1;
    saveFavs();
    if (cFav.checked) { render(); return; }
    favLabel.textContent = "★ Избранное (" + favCount() + ")";
    if (stars[i]) { var on = !!favs[u.name]; stars[i].textContent = on ? "★" : "☆"; stars[i].setAttribute("aria-pressed", on ? "true" : "false"); }
    if (map && markers[i]) styleMarker(u, markers[i]);
  }
  function popupNode(u, i) {
    var d = document.createElement("div");
    var b = document.createElement("b"); b.textContent = u.name; d.appendChild(b);
    var s = document.createElement("div"); s.textContent = u.city + ", " + u.st + " · " + u.type + " · " + u.cat + (u.econ ? " · экономика" : ""); d.appendChild(s);
    var a = document.createElement("a"); a.href = "https://www.google.com/search?q=" + encodeURIComponent(u.name + " admissions"); a.target = "_blank"; a.rel = "noopener noreferrer"; a.textContent = "Поиск сайта вуза ↗";
    d.appendChild(a);
    var fb = document.createElement("button"); fb.type = "button"; fb.className = "pop-fav";
    fb.textContent = favs[u.name] ? "★ В избранном" : "☆ В избранное";
    fb.addEventListener("click", function () { toggleFav(u, i); fb.textContent = favs[u.name] ? "★ В избранном" : "☆ В избранное"; });
    d.appendChild(document.createElement("br")); d.appendChild(fb);
    return d;
  }
  function filtered() {
    var t = q.value.trim().toLowerCase();
    return rows.filter(function (u) {
      return (!t || (u.name + " " + u.city).toLowerCase().indexOf(t) >= 0) &&
        (!sSt.value || u.st === sSt.value) && (!sType.value || u.type === sType.value) &&
        (!sCat.value || u.cat === sCat.value) && (!cEcon.checked || u.econ) && (!cFav.checked || favs[u.name]);
    });
  }
  function render() {
    var f = filtered();
    cnt.textContent = "Найдено: " + f.length + " из " + rows.length;
    list.innerHTML = "";
    if (layer) layer.clearLayers();
    markers = {}; stars = {};
    favLabel.textContent = "★ Избранное (" + favCount() + ")";
    f.forEach(function (u, i) {
      var wrap = document.createElement("div"); wrap.className = "uni-row";
      var row = document.createElement("button");
      row.type = "button"; row.className = "uni";
      var star = document.createElement("button");
      star.type = "button"; star.className = "star"; star.setAttribute("aria-label", "Избранное: " + u.name);
      star.textContent = favs[u.name] ? "★" : "☆"; star.setAttribute("aria-pressed", favs[u.name] ? "true" : "false");
      star.addEventListener("click", function () { toggleFav(u, i); });
      stars[i] = star;
      var dot = document.createElement("i"); dot.style.background = COLORS[u.cat] || COLORS["Другой"];
      var main = document.createElement("span");
      var b = document.createElement("b"); b.textContent = u.name;
      var s = document.createElement("small"); s.textContent = u.city + ", " + u.st + " · " + u.type + " · " + u.cat + (u.econ ? " · экономика" : "");
      main.appendChild(b); main.appendChild(s);
      row.appendChild(dot); row.appendChild(main);
      row.addEventListener("click", function () {
        if (map && markers[i]) { map.flyTo([u.lat, u.lon], 9, { duration: 0.8 }); markers[i].openPopup(); document.getElementById("usmap").scrollIntoView({ block: "nearest" }); }
      });
      wrap.appendChild(row); wrap.appendChild(star);
      list.appendChild(wrap);
      if (layer) {
        var m = L.circleMarker([u.lat, u.lon], { radius: 6, color: "#fff", weight: 1.5, fillColor: COLORS[u.cat] || COLORS["Другой"], fillOpacity: 0.9 });
        m.bindPopup(popupNode(u, i));
        m.addTo(layer);
        markers[i] = m;
        styleMarker(u, m);
      }
    });
    if (!f.length) {
      var e = document.createElement("div"); e.className = "empty"; e.textContent = cFav.checked && !favCount() ? "В избранном пока пусто. Нажмите ☆ рядом с вузом." : "Ничего не найдено. Измените фильтры.";
      list.appendChild(e);
    }
    if (map && f.length && f.length < rows.length) {
      var b2 = L.latLngBounds(f.map(function (u) { return [u.lat, u.lon]; }));
      map.fitBounds(b2.pad(0.15), { maxZoom: 9 });
    } else if (map) { map.setView([39.5, -98.35], 4); }
  }
  [q, sSt, sType, sCat, cEcon, cFav].forEach(function (el) { el.addEventListener(el === q ? "input" : "change", render); });
  render();
})();
