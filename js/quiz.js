/* Мини-тест: вопросы лежат в js/data/quiz-questions.js. */
(function () {
  var QUIZ = window.LK.QUIZ;
  var qi = 0, score = 0, answered = false;
  var qtext = document.getElementById("qtext"), qopts = document.getElementById("qopts"),
      qexp = document.getElementById("qexp"), qnum = document.getElementById("qnum"),
      qnext = document.getElementById("qnext"), qscore = document.getElementById("qscore"),
      qbar = document.getElementById("qbar");

  function showQ() {
    answered = false;
    if (qi >= QUIZ.length) {
      qnum.textContent = "Готово";
      qtext.textContent = "Результат: " + score + " из " + QUIZ.length;
      qopts.innerHTML = "";
      qexp.textContent = score === QUIZ.length ? "Отлично, без единой ошибки." : "Перечитайте правила в разделе грамматики и попробуйте ещё раз.";
      qnext.textContent = "Пройти заново"; qnext.hidden = false;
      qbar.style.width = "100%"; qscore.textContent = "";
      return;
    }
    var item = QUIZ[qi];
    qnum.textContent = "Вопрос " + (qi + 1) + " из " + QUIZ.length;
    qtext.textContent = item.q;
    qexp.textContent = "";
    qnext.hidden = true;
    qbar.style.width = (qi / QUIZ.length * 100) + "%";
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
    var item = QUIZ[qi];
    qopts.querySelectorAll(".opt").forEach(function (b, j) {
      b.disabled = true;
      if (j === item.a) b.classList.add("right");
      else if (j === i) b.classList.add("wrong");
    });
    if (i === item.a) score++;
    qexp.textContent = (i === item.a ? "Верно. " : "Не совсем. ") + item.e;
    qscore.textContent = "Верно: " + score;
    qnext.textContent = qi === QUIZ.length - 1 ? "Показать результат" : "Дальше";
    qnext.hidden = false;
  }
  qnext.addEventListener("click", function () {
    if (qi >= QUIZ.length) { qi = 0; score = 0; } else { qi++; }
    showQ();
  });
  showQ();
})();
