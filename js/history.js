/* История слов: выученные и запомненные. */
(function () {
  var LK = window.LK, st = LK.state;
  var hTab = "learned";
  var hList = document.getElementById("hist-list"), hStats = document.getElementById("hist-stats");
  var hChips = document.querySelectorAll("#history .chip");

  function fmtDate(ts) {
    try { return new Date(ts).toLocaleDateString("ru-RU", { day: "numeric", month: "long" }); } catch (e) { return ""; }
  }
  function mkBtn(label, cls, fn) {
    var b = document.createElement("button");
    b.type = "button"; b.className = cls; b.textContent = label;
    b.addEventListener("click", fn);
    return b;
  }
  function histRow(en, info, kind) {
    var row = document.createElement("div"); row.className = "hrow";
    var main = document.createElement("div"); main.className = "hmain";
    var w = document.createElement("b"); w.textContent = en;
    var tr = document.createElement("span"); tr.textContent = info.ru || "";
    var meta = document.createElement("small");
    var bits = [fmtDate(info.ts)];
    if (kind === "remembered" && info.n > 1) bits.push("повторов: " + info.n);
    if (info.lvl) bits.push(info.lvl);
    meta.textContent = bits.filter(Boolean).join(" · ");
    main.appendChild(w); main.appendChild(tr); main.appendChild(meta);
    var act = document.createElement("div"); act.className = "hact";
    var ox = document.createElement("a");
    ox.className = "btn ghost sm"; ox.href = LK.OX + encodeURIComponent(en); ox.target = "_blank"; ox.rel = "noopener noreferrer"; ox.textContent = "Oxford ↗";
    act.appendChild(ox);
    if (kind === "learned") {
      act.appendChild(mkBtn("Вернуть в колоду", "mini", function () { delete st.learned[en]; LK.save(); render(); }));
    } else {
      act.appendChild(mkBtn("Выучил", "mini ok", function () {
        st.learned[en] = { ru: info.ru, lvl: info.lvl, ts: Date.now() };
        delete st.remembered[en]; LK.save(); render();
      }));
      act.appendChild(mkBtn("Убрать", "mini", function () { delete st.remembered[en]; LK.save(); render(); }));
    }
    row.appendChild(main); row.appendChild(act);
    return row;
  }
  function render() {
    var L = Object.keys(st.learned), R = Object.keys(st.remembered);
    hChips.forEach(function (c) {
      var k = c.getAttribute("data-h");
      c.textContent = (k === "learned" ? "Выученные (" + L.length + ")" : "Запомненные (" + R.length + ")");
      c.setAttribute("aria-pressed", k === hTab ? "true" : "false");
    });
    var all = LK.allWords();
    var inDeck = all.filter(function (x) { return !st.learned[x.en]; }).length;
    hStats.textContent = "В колоде: " + inDeck + " · всего слов: " + all.length;
    var src = hTab === "learned" ? st.learned : st.remembered;
    var keys = Object.keys(src).sort(function (a, b) { return (src[b].ts || 0) - (src[a].ts || 0); });
    hList.innerHTML = "";
    if (!keys.length) {
      var e = document.createElement("div"); e.className = "empty";
      e.textContent = hTab === "learned" ? "Пока пусто. Нажмите «Выучил» на карточке, и слово появится здесь." : "Пока пусто. Нажмите «Запомнил» на карточке, и слово появится здесь.";
      hList.appendChild(e);
      return;
    }
    keys.forEach(function (k) { hList.appendChild(histRow(k, src[k], hTab)); });
  }
  hChips.forEach(function (c) {
    c.addEventListener("click", function () { hTab = c.getAttribute("data-h"); render(); });
  });

  /* очистка с подтверждением второй кнопкой, без всплывающих окон */
  var clr = document.getElementById("hist-clear"), clrArmed = false, clrTimer = null;
  clr.addEventListener("click", function () {
    if (!clrArmed) {
      clrArmed = true; clr.textContent = "Точно очистить?";
      clrTimer = setTimeout(function () { clrArmed = false; clr.textContent = "Очистить историю"; }, 4000);
      return;
    }
    clearTimeout(clrTimer); clrArmed = false; clr.textContent = "Очистить историю";
    st.learned = {}; st.remembered = {}; LK.save(); render();
  });

  render();
})();
