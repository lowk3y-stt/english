/* Мини-тесты по темам: 10 случайных вопросов из банка выбранной темы.
   Банк лежит в js/data/quiz-questions.js. */
(function () {
  var LK = window.LK, TOPICS = LK.QUIZ_TOPICS, BANK = LK.QUIZ_BANK, N = 10;
  var topicsEl = document.getElementById("quiz-topics"), box = document.getElementById("quiz-box");
  var qtopic = document.getElementById("qtopic"), qtext = document.getElementById("qtext"), qopts = document.getElementById("qopts"),
      qexp = document.getElementById("qexp"), qnum = document.getElementById("qnum"), qnext = document.getElementById("qnext"),
      qscore = document.getElementById("qscore"), qbar = document.getElementById("qbar");
  var topic = null, set = [], qi = 0, score = 0, answered = false;

  function pool(id) {
    if (id === "mix") {
      return TOPICS.reduce(function (acc, t) { return acc.concat(LK.parseBank(t.id + ":", BANK[t.id])); }, []);
    }
    return LK.parseBank(id + ":", BANK[id]);
  }
  function mixName(id) { return id === "mix" ? "Все темы вперемешку" : TOPICS.filter(function (t) { return t.id === id; })[0].name; }

  function buildTopics() {
    var all = TOPICS.concat([{ id: "mix", name: "Все темы вперемешку", desc: "Случайные вопросы из всех тем" }]);
    all.forEach(function (t) {
      var count = t.id === "mix" ? TOPICS.reduce(function (s, x) { return s + BANK[x.id].split("\n").length; }, 0) : BANK[t.id].split("\n").length;
      var b = document.createElement("button");
      b.type = "button"; b.className = "topic glass" + (t.id === "mix" ? " mix" : "");
      b.setAttribute("data-topic", t.id);
      var n = document.createElement("b"); n.textContent = t.name;
      var d = document.createElement("span"); d.textContent = t.desc;
      var c = document.createElement("small"); c.textContent = count + " заданий";
      b.appendChild(n); b.appendChild(d); b.appendChild(c);
      b.addEventListener("click", function () { start(t.id); });
      topicsEl.appendChild(b);
    });
  }
  function start(id) {
    topic = id;
    set = LK.drawQuestions("quiz-" + id, pool(id), N);
    qi = 0; score = 0;
    topicsEl.hidden = true; box.hidden = false;
    qtopic.textContent = "Тема: " + mixName(id);
    showQ();
    box.scrollIntoView({ block: "nearest" });
  }
  function showQ() {
    answered = false;
    if (qi >= set.length) {
      qnum.textContent = "Готово";
      qtext.textContent = "Результат: " + score + " из " + set.length;
      qopts.innerHTML = "";
      qexp.textContent = score === set.length ? "Отлично, без единой ошибки." : "Перечитайте правила в разделе грамматики и пройдите тему ещё раз: вопросы будут другие.";
      qnext.textContent = "Ещё 10 вопросов"; qnext.hidden = false;
      qbar.style.width = "100%"; qscore.textContent = "";
      return;
    }
    var item = set[qi];
    qnum.textContent = "Вопрос " + (qi + 1) + " из " + set.length;
    qtext.textContent = item.q;
    qexp.textContent = "";
    qnext.hidden = true;
    qbar.style.width = (qi / set.length * 100) + "%";
    qscore.textContent = "Верно: " + score;
    qopts.innerHTML = "";
    item.o.forEach(function (text, i) {
      var b = document.createElement("button");
      b.className = "opt"; b.type = "button"; b.textContent = text;
      b.addEventListener("click", function () { pick(i); });
      qopts.appendChild(b);
    });
  }
  function pick(i) {
    if (answered) return;
    answered = true;
    var item = set[qi];
    qopts.querySelectorAll(".opt").forEach(function (b, j) {
      b.disabled = true;
      if (j === item.a) b.classList.add("right");
      else if (j === i) b.classList.add("wrong");
    });
    if (i === item.a) score++;
    qexp.textContent = (i === item.a ? "Верно. " : "Не совсем. ") + item.e;
    qscore.textContent = "Верно: " + score;
    qnext.textContent = qi === set.length - 1 ? "Показать результат" : "Дальше";
    qnext.hidden = false;
  }
  qnext.addEventListener("click", function () {
    if (qi >= set.length) { start(topic); return; }
    qi++; showQ();
  });
  document.getElementById("qchange").addEventListener("click", function () {
    box.hidden = true; topicsEl.hidden = false;
  });
  buildTopics();
})();
