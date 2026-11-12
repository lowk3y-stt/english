/* Карточки: бесконечная колода, ссылки на Oxford, свои слова. */
(function () {
  var LK = window.LK, st = LK.state;
  var level = "all", queue = [], flipped = false, cur = null, shown = 0;
  var card = document.getElementById("card");
  var count = document.getElementById("count");
  var oxLink = document.getElementById("ox");

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function candidates() {
    return LK.allWords().filter(function (x) {
      return !st.learned[x.en] && (level === "all" || x.lvl === level);
    });
  }
  function nextCard() {
    if (!queue.length) queue = shuffle(candidates());
    cur = queue.length ? queue.shift() : null;
    flipped = false;
    if (cur) shown++;
    renderCard();
  }
  function renderCard() {
    var learnedN = Object.keys(st.learned).length;
    if (!cur) {
      card.innerHTML = '<div class="big">Колода пуста</div><div class="sub">Все слова этого уровня выучены. Выберите другой уровень или верните слова из истории.</div>';
      oxLink.hidden = true;
      count.textContent = "Выучено: " + learnedN;
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
    count.textContent = "Показано: " + shown + " · выучено: " + learnedN;
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

  var chips = document.querySelectorAll("#cards .chip");
  chips.forEach(function (c) {
    c.addEventListener("click", function () {
      chips.forEach(function (o) { o.setAttribute("aria-pressed", o === c ? "true" : "false"); });
      level = c.getAttribute("data-lvl");
      queue = [];
      nextCard();
    });
  });

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

  /* ссылка поиска в Oxford следует за полем ввода */
  var oxq = document.getElementById("ox-q"), oxgo = document.getElementById("ox-go");
  oxq.addEventListener("input", function () {
    var v = oxq.value.trim();
    oxgo.href = v ? LK.OX + encodeURIComponent(v) : LK.OX_HOME;
  });

  nextCard();
})();
