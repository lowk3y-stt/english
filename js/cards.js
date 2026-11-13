/* Карточки (колода) и история слов на одной странице. */
(function () {
  var LK = window.LK, st = LK.state;
  var level = "all", order = "level", queue = [], flipped = false, cur = null, shown = 0;
  var card = document.getElementById("card");
  var count = document.getElementById("count");
  var oxLink = document.getElementById("ox");

  /* ---------- колода ---------- */
  function candidates() {
    var list = LK.allWords().filter(function (x) {
      return !st.learned[x.en] && (level === "all" || x.lvl === level);
    });
    if (order === "mix") return LK.shuffle(list);
    /* по уровням: от A1 к C1, внутри уровня случайно, свои слова в конец */
    var rank = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4 };
    var groups = [[], [], [], [], [], []];
    list.forEach(function (w) { groups[rank[w.lvl] === undefined ? 5 : rank[w.lvl]].push(w); });
    return groups.reduce(function (acc, g) { return acc.concat(LK.shuffle(g)); }, []);
  }
  function nextCard() {
    if (!queue.length) queue = candidates();
    cur = queue.length ? queue.shift() : null;
    flipped = false;
    if (cur) shown++;
    renderCard();
  }
  function stats() {
    var all = LK.allWords();
    return "Выучено " + Object.keys(st.learned).length + " из " + all.length;
  }
  function renderCard() {
    if (!cur) {
      card.innerHTML = '<div class="big">Колода пуста</div><div class="sub">Все слова этого уровня выучены. Выберите другой уровень или верните слова на вкладке «История».</div>';
      oxLink.hidden = true;
      count.textContent = stats();
      return;
    }
    oxLink.hidden = false;
    oxLink.href = LK.OX + encodeURIComponent(cur.en);
    if (!flipped) {
      card.innerHTML = '<div class="lvl"></div><div class="big"></div><div class="sub"></div><div class="hint">Нажмите, чтобы перевернуть</div>';
      card.querySelector(".big").textContent = cur.en;
      card.querySelector(".sub").textContent = cur.ipa || "";
    } else {
      card.innerHTML = '<div class="lvl"></div><div class="big"></div><div class="sub"></div>';
      card.querySelector(".big").textContent = cur.ru;
      card.querySelector(".sub").textContent = cur.ex || "";
    }
    card.querySelector(".lvl").textContent = cur.lvl;
    count.textContent = stats();
  }

  card.addEventListener("click", function () { if (!cur) return; flipped = !flipped; renderCard(); });
  document.getElementById("again").addEventListener("click", function () {
    if (!cur) return;
    var pos = Math.min(queue.length, 3 + Math.floor(Math.random() * 4));
    queue.splice(pos, 0, cur);
    nextCard();
  });
  document.getElementById("rem").addEventListener("click", function () {
    if (!cur) return;
    var prev = st.remembered[cur.en];
    st.remembered[cur.en] = { ru: cur.ru, lvl: cur.lvl, ts: Date.now(), n: prev && prev.n ? prev.n + 1 : 1 };
    LK.save();
    nextCard();
  });
  document.getElementById("know").addEventListener("click", function () {
    if (!cur) return;
    st.learned[cur.en] = { ru: cur.ru, lvl: cur.lvl, ts: Date.now() };
    delete st.remembered[cur.en];
    LK.save();
    nextCard();
  });

  function bindChips(selector, attr, apply) {
    var chips = document.querySelectorAll(selector);
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        chips.forEach(function (o) { o.setAttribute("aria-pressed", o === c ? "true" : "false"); });
        apply(c.getAttribute(attr));
      });
    });
  }
  bindChips("#pane-deck .chip[data-lvl]", "data-lvl", function (v) { level = v; queue = []; nextCard(); });
  bindChips("#pane-deck .chip[data-order]", "data-order", function (v) { order = v; queue = []; nextCard(); });

  /* свои слова */
  var cwEn = document.getElementById("cw-en"), cwRu = document.getElementById("cw-ru"), cwMsg = document.getElementById("cw-msg");
  document.getElementById("addw").addEventListener("submit", function (e) {
    e.preventDefault();
    var en = cwEn.value.trim(), ru = cwRu.value.trim();
    if (!en || !ru) { cwMsg.textContent = "Заполните слово и перевод."; return; }
    var dup = LK.allWords().some(function (x) { return x.en.toLowerCase() === en.toLowerCase(); });
    if (dup) { cwMsg.textContent = "Такое слово уже есть в колоде."; return; }
    st.custom.push({ en: en, ru: ru });
    LK.save();
    queue.unshift({ en: en, ru: ru, ex: "", ipa: "", lvl: "Свои" });
    cwEn.value = ""; cwRu.value = "";
    cwMsg.textContent = "Добавлено. Это слово будет следующим.";
    if (!cur) nextCard();
  });

  var oxq = document.getElementById("ox-q"), oxgo = document.getElementById("ox-go");
  oxq.addEventListener("input", function () {
    var v = oxq.value.trim();
    oxgo.href = v ? LK.OX + encodeURIComponent(v) : LK.OX_HOME;
  });

  /* ---------- история ---------- */
  var hTab = "learned";
  var hList = document.getElementById("hist-list"), hStats = document.getElementById("hist-stats");
  var hChips = document.querySelectorAll("#pane-history .chip");

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
      act.appendChild(mkBtn("Вернуть в колоду", "mini", function () { delete st.learned[en]; LK.save(); queue = []; renderHist(); }));
    } else {
      act.appendChild(mkBtn("Выучил", "mini ok", function () {
        st.learned[en] = { ru: info.ru, lvl: info.lvl, ts: Date.now() };
        delete st.remembered[en]; LK.save(); renderHist();
      }));
      act.appendChild(mkBtn("Убрать", "mini", function () { delete st.remembered[en]; LK.save(); renderHist(); }));
    }
    row.appendChild(main); row.appendChild(act);
    return row;
  }
  function renderHist() {
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
    keys.slice(0, 300).forEach(function (k) { hList.appendChild(histRow(k, src[k], hTab)); });
    if (keys.length > 300) {
      var more = document.createElement("div"); more.className = "empty";
      more.textContent = "Показаны последние 300 из " + keys.length + ".";
      hList.appendChild(more);
    }
  }
  hChips.forEach(function (c) {
    c.addEventListener("click", function () { hTab = c.getAttribute("data-h"); renderHist(); });
  });
  var clr = document.getElementById("hist-clear"), clrArmed = false, clrTimer = null;
  clr.addEventListener("click", function () {
    if (!clrArmed) {
      clrArmed = true; clr.textContent = "Точно очистить?";
      clrTimer = setTimeout(function () { clrArmed = false; clr.textContent = "Очистить историю"; }, 4000);
      return;
    }
    clearTimeout(clrTimer); clrArmed = false; clr.textContent = "Очистить историю";
    st.learned = {}; st.remembered = {}; LK.save(); queue = []; renderHist(); nextCard();
  });

  /* ---------- вкладки Карточки / История ---------- */
  var paneDeck = document.getElementById("pane-deck"), paneHist = document.getElementById("pane-history");
  var tabs = document.querySelectorAll("#cards [data-tab]");
  function showTab(name) {
    var h = name === "history";
    paneDeck.hidden = h; paneHist.hidden = !h;
    tabs.forEach(function (t) { t.setAttribute("aria-pressed", t.getAttribute("data-tab") === name ? "true" : "false"); });
    if (h) renderHist(); else { queue = []; nextCard(); }
    try { history.replaceState(null, "", h ? "#history" : location.pathname + location.search); } catch (e) {}
  }
  tabs.forEach(function (t) { t.addEventListener("click", function () { showTab(t.getAttribute("data-tab")); }); });

  nextCard();
  if (location.hash === "#history") showTab("history");
})();
