/* Общий код для всех страниц: хранилище слов, тема, подсветка меню.
   Подключается первым. Остальные файлы берут всё нужное из window.LK. */
(function () {
  var LK = (window.LK = window.LK || {});

  /* ссылки на Oxford Learner's Dictionaries */
  LK.OX = "https://www.oxfordlearnersdictionaries.com/search/american_english/?q=";
  LK.OX_HOME = "https://www.oxfordlearnersdictionaries.com/";

  /* хранилище: выученные, запомненные и свои слова живут в браузере */
  var STORE = "lk3y-words-v2";
  LK.state = { learned: {}, remembered: {}, custom: [] };
  try {
    var raw = localStorage.getItem(STORE);
    if (raw) {
      var parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        LK.state.learned = parsed.learned || {};
        LK.state.remembered = parsed.remembered || {};
        LK.state.custom = Array.isArray(parsed.custom) ? parsed.custom : [];
      }
    }
  } catch (e) {}
  LK.save = function () {
    try { localStorage.setItem(STORE, JSON.stringify(LK.state)); } catch (e) {}
  };
  /* слова: сначала подборка с транскрипцией и примерами, затем списки по уровням из words-a1.js ... words-c1.js */
  LK.LEVELS = ["A1", "A2", "B1", "B2", "C1"];
  var merged = null;
  function buildBase() {
    var list = [], seen = {};
    (LK.WORDS || []).forEach(function (w) {
      var k = w.en.toLowerCase();
      if (!seen[k]) { seen[k] = 1; list.push(w); }
    });
    LK.LEVELS.forEach(function (lvl) {
      var txt = (LK.BULK && LK.BULK[lvl]) || "";
      txt.split("\n").forEach(function (line) {
        var i = line.indexOf("|");
        if (i < 1) return;
        var en = line.slice(0, i).trim(), ru = line.slice(i + 1).trim();
        var k = en.toLowerCase();
        if (!en || !ru || seen[k]) return;
        seen[k] = 1;
        list.push({ en: en, ru: ru, ex: "", ipa: "", lvl: lvl });
      });
    });
    return list;
  }
  LK.baseWords = function () { if (!merged) merged = buildBase(); return merged; };
  var allCache = null, allCacheKey = -1;
  LK.allWords = function () {
    /* список пересобирается только когда добавлено своё слово */
    if (allCache && allCacheKey === LK.state.custom.length) return allCache;
    var have = {};
    LK.baseWords().forEach(function (w) { have[w.en.toLowerCase()] = 1; });
    allCache = LK.baseWords().concat(LK.state.custom.filter(function (c) { return !have[c.en.toLowerCase()]; }).map(function (c) {
      return { en: c.en, ru: c.ru, ex: c.ex || "", ipa: "", lvl: "Свои" };
    }));
    allCacheKey = LK.state.custom.length;
    return allCache;
  };

  /* случайная выборка заданий: новые вопросы идут первыми, примерно каждый седьмой может повториться */
  LK.shuffle = function (a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };
  LK.drawQuestions = function (key, pool, n) {
    var store = "lk3y-seen-" + key, seenMap = {};
    try { seenMap = JSON.parse(localStorage.getItem(store) || "{}") || {}; } catch (e) {}
    var fresh = LK.shuffle(pool.filter(function (q) { return !seenMap[q.id]; }));
    var old = LK.shuffle(pool.filter(function (q) { return seenMap[q.id]; }));
    var out = [], REPEAT = 0.15;
    while (out.length < Math.min(n, pool.length)) {
      var useOld = old.length && (!fresh.length || Math.random() < REPEAT);
      out.push(useOld ? old.shift() : fresh.shift());
    }
    if (!fresh.length) seenMap = {};
    out.forEach(function (q) { seenMap[q.id] = 1; });
    try { localStorage.setItem(store, JSON.stringify(seenMap)); } catch (e) {}
    return LK.shuffle(out);
  };
  /* разбор строк банка заданий в объекты */
  LK.parseBank = function (prefix, text, passages) {
    var out = [];
    text.split("\n").forEach(function (line, idx) {
      var p = line.split("|");
      var hasPass = passages !== undefined;
      var off = hasPass ? 1 : 0;
      if (p.length < 4 + off) return;
      var opts = p[1 + off].split(";");
      out.push({
        id: prefix + idx,
        p: hasPass && p[0] ? (passages[p[0]] || "") : "",
        q: p[off],
        o: opts,
        a: Number(p[2 + off]) - 1,
        e: p.slice(3 + off).join("|")
      });
    });
    return out;
  };

  /* тема: по умолчанию тёмная, светлую можно включить, выбор запоминается */
  var root = document.documentElement;
  var tbtn = document.getElementById("theme");
  var cur = root.getAttribute("data-theme") === "light" ? "light" : "dark";
  try { if (localStorage.getItem("wbw-theme") === "light") cur = "light"; } catch (e) {}
  function applyTheme(t) {
    cur = t;
    root.setAttribute("data-theme", t);
    if (tbtn) tbtn.textContent = t === "dark" ? "Светлая тема" : "Тёмная тема";
  }
  applyTheme(cur);
  if (tbtn) {
    tbtn.addEventListener("click", function () {
      var next = cur === "dark" ? "light" : "dark";
      /* плавное перетекание цветов при смене темы, где браузер это умеет */
      var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (document.startViewTransition && !calm) document.startViewTransition(function () { applyTheme(next); });
      else applyTheme(next);
      try { localStorage.setItem("wbw-theme", next); } catch (e) {}
    });
  }

  /* подсветка текущей страницы в меню */
  var page = document.body.getAttribute("data-page");
  document.querySelectorAll("nav a").forEach(function (a) {
    if (a.getAttribute("data-nav") === page) a.setAttribute("aria-current", "page");
  });
})();
