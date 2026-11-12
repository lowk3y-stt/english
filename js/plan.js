/* План занятий: расписание пересчитывается под минуты в день и дни в неделю. */
(function () {
  var ACT = {
    words: { n: "Слова", d: function (m) { return "Карточки: " + Math.max(3, Math.round(m / 3)) + " новых слов и повтор вчерашних."; } },
    listen: { n: "Слушание", d: function () { return "Подкаст или видео на американском английском. Повторите вслух 5–10 фраз."; } },
    grammar: { n: "Грамматика", d: function () { return "Один раздел или правило из «Грамматики» и несколько своих примеров."; } },
    write: { n: "Письмо", d: function (m) { return "Напишите " + Math.max(3, Math.round(m / 3)) + " предложений о своём дне."; } },
    speak: { n: "Речь", d: function () { return "Говорите вслух: пересказ дня или разговор с партнёром."; } },
    test: { n: "Тест", d: function () { return "Мини-тест или разминка по экзамену, затем разбор ошибок."; } },
    watch: { n: "Сериал", d: function () { return "Американский сериал без русских субтитров. Выпишите 5 выражений."; } },
    review: { n: "Повторение", d: function () { return "Откройте историю и повторите запомненные слова."; } }
  };
  var W = { words: 3, listen: 3, grammar: 3, write: 2, speak: 2, test: 2, watch: 4, review: 1 };
  var PLAN = {
    3: [["Пн", ["words", "grammar"]], ["Ср", ["listen", "speak"]], ["Пт", ["test", "write"]]],
    5: [["Пн", ["words", "grammar"]], ["Вт", ["listen", "speak"]], ["Ср", ["write", "words"]], ["Чт", ["grammar", "test"]], ["Пт", ["watch", "review"]]],
    7: [["Пн", ["words", "grammar"]], ["Вт", ["listen", "speak"]], ["Ср", ["grammar", "write"]], ["Чт", ["words", "review"]], ["Пт", ["test", "write"]], ["Сб", ["watch", "words"]], ["Вс", ["speak", "listen"]]]
  };
  var HINT_M = {
    15: "Минимум, который работает, если заниматься регулярно.",
    30: "Хороший ритм для стабильного прогресса.",
    60: "Интенсивный режим. Занятие можно разбить на два подхода.",
    120: "Максимальная нагрузка. Разбейте занятие на два подхода и делайте перерывы."
  };
  var HINT_D = {
    3: "Три дня в неделю: не делайте между занятиями пауз длиннее двух дней.",
    5: "Пять дней в неделю: выходные остаются на отдых.",
    7: "Каждый день: так проще выработать привычку."
  };
  var planMin = 30, planDays = 5;
  try {
    var pp = JSON.parse(localStorage.getItem("lk3y-plan") || "null");
    if (pp && [15, 30, 60, 120].indexOf(pp.m) >= 0 && [3, 5, 7].indexOf(pp.d) >= 0) { planMin = pp.m; planDays = pp.d; }
  } catch (e) {}

  function fmtMin(m) {
    if (m < 60) return m + " мин";
    var h = Math.floor(m / 60), r = m % 60;
    return r ? h + " ч " + r + " мин" : h + " ч";
  }
  /* если занятие длиннее 30 минут, делим время между двумя видами работы */
  function splitMin(total, keys) {
    if (total < 30 || keys.length < 2) return [[keys[0], total]];
    var w0 = W[keys[0]], w1 = W[keys[1]];
    var a = Math.round(total * w0 / (w0 + w1) / 5) * 5;
    return [[keys[0], a], [keys[1], total - a]];
  }

  var weekEl = document.getElementById("week");
  var planChips = document.querySelectorAll("#plan .chip");
  function render() {
    planChips.forEach(function (c) {
      var m = c.getAttribute("data-min"), d = c.getAttribute("data-days");
      var on = m ? Number(m) === planMin : Number(d) === planDays;
      c.setAttribute("aria-pressed", on ? "true" : "false");
    });
    var total = planMin * planDays;
    document.getElementById("plan-total").textContent = "В неделю: " + fmtMin(total) + " · в месяц около " + Math.round(total * 4.3 / 60) + " ч";
    document.getElementById("plan-hint").textContent = HINT_M[planMin] + " " + HINT_D[planDays];
    weekEl.innerHTML = "";
    PLAN[planDays].forEach(function (day, i) {
      var box = document.createElement("div");
      box.className = "day glass float" + (i % 4 ? " d" + (i % 4) : "");
      var b = document.createElement("b"); b.textContent = day[0]; box.appendChild(b);
      var ul = document.createElement("ul"); ul.className = "acts";
      splitMin(planMin, day[1]).forEach(function (pair) {
        var a = ACT[pair[0]];
        var li = document.createElement("li");
        var s = document.createElement("strong"); s.textContent = a.n;
        var t = document.createElement("span"); t.className = "tm"; t.textContent = fmtMin(pair[1]);
        var p = document.createElement("p"); p.className = "ad"; p.textContent = a.d(pair[1]);
        li.appendChild(s); li.appendChild(t); li.appendChild(p); ul.appendChild(li);
      });
      box.appendChild(ul);
      weekEl.appendChild(box);
    });
  }
  planChips.forEach(function (c) {
    c.addEventListener("click", function () {
      var m = c.getAttribute("data-min"), d = c.getAttribute("data-days");
      if (m) planMin = Number(m); else planDays = Number(d);
      try { localStorage.setItem("lk3y-plan", JSON.stringify({ m: planMin, d: planDays })); } catch (e) {}
      render();
    });
  });
  render();
})();
