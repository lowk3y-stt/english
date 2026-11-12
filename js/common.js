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
  LK.allWords = function () {
    return (LK.WORDS || []).concat(LK.state.custom.map(function (c) {
      return { en: c.en, ru: c.ru, ex: c.ex || "", ipa: "", lvl: "Свои" };
    }));
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
      applyTheme(next);
      try { localStorage.setItem("wbw-theme", next); } catch (e) {}
    });
  }

  /* подсветка текущей страницы в меню */
  var page = document.body.getAttribute("data-page");
  document.querySelectorAll("nav a").forEach(function (a) {
    if (a.getAttribute("data-nav") === page) a.setAttribute("aria-current", "page");
  });
})();
