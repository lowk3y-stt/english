/* Разминка по экзаменам: сначала выбираем ответ, потом подтверждаем кнопкой.
   Банк заданий лежит в js/data/exam-questions.js, каждый раз выбираются 10 случайных. */
(function () {
  var LK = window.LK, N = 10;
  var EXAMS = {};
  Object.keys(LK.EXAM_BANK).forEach(function (k) {
    EXAMS[k] = { name: LK.EXAM_BANK[k].name, all: LK.parseBank("e" + k + ":", LK.EXAM_BANK[k].lines, LK.PASSAGES), qs: [] };
  });
  function draw(k) { EXAMS[k].qs = LK.drawQuestions("exam-" + k, EXAMS[k].all, N); }
  var ekey = "ielts", ei = 0, escore = 0, eans = false, esel = -1;
  draw(ekey);
  var ePass = document.getElementById("epassage"), eText = document.getElementById("etext"),
      eOpts = document.getElementById("eopts"), eExp = document.getElementById("eexp"),
      eNum = document.getElementById("enum"), eNext = document.getElementById("enext"),
      eScore = document.getElementById("escore"), eBar = document.getElementById("ebar"),
      eConfirm = document.getElementById("econfirm");

  function showE() {
    eans = false;
    esel = -1;
    var set = EXAMS[ekey];
    if (ei >= set.qs.length) {
      eConfirm.hidden = true;
      eNum.textContent = set.name + " · готово";
      ePass.hidden = true;
      eText.textContent = "Результат: " + escore + " из " + set.qs.length;
      eOpts.innerHTML = "";
      eExp.textContent = escore === set.qs.length ? "Отличный результат, ошибок нет." : "Разберите объяснения к ошибкам и пройдите набор ещё раз: вопросы будут другие.";
      eNext.textContent = "Ещё 10 заданий"; eNext.hidden = false;
      eBar.style.width = "100%"; eScore.textContent = "";
      return;
    }
    var item = set.qs[ei];
    eNum.textContent = set.name + " · вопрос " + (ei + 1) + " из " + set.qs.length;
    if (item.p) { ePass.textContent = item.p; ePass.hidden = false; } else { ePass.hidden = true; }
    eText.textContent = item.q;
    eExp.textContent = "";
    eNext.hidden = true;
    eConfirm.hidden = false;
    eConfirm.disabled = true;
    eBar.style.width = (ei / set.qs.length * 100) + "%";
    eScore.textContent = "Верно: " + escore;
    eOpts.innerHTML = "";
    item.o.forEach(function (text, i) {
      var b = document.createElement("button");
      b.className = "opt"; b.type = "button"; b.textContent = text;
      b.addEventListener("click", function () { selectE(i); });
      eOpts.appendChild(b);
    });
  }
  function selectE(i) {
    if (eans) return;
    esel = i;
    eOpts.querySelectorAll(".opt").forEach(function (b, j) {
      b.classList.toggle("sel", j === i);
      b.setAttribute("aria-pressed", j === i ? "true" : "false");
    });
    eConfirm.disabled = false;
  }
  function pickE() {
    if (eans || esel < 0) return;
    var i = esel;
    eans = true;
    var set = EXAMS[ekey], item = set.qs[ei];
    eConfirm.hidden = true;
    eOpts.querySelectorAll(".opt").forEach(function (b, j) {
      b.disabled = true;
      b.classList.remove("sel");
      if (j === item.a) b.classList.add("right");
      else if (j === i) b.classList.add("wrong");
    });
    if (i === item.a) escore++;
    eExp.textContent = (i === item.a ? "Верно. " : "Не совсем. ") + item.e;
    eScore.textContent = "Верно: " + escore;
    eNext.textContent = ei === set.qs.length - 1 ? "Показать результат" : "Дальше";
    eNext.hidden = false;
  }
  eConfirm.addEventListener("click", pickE);
  eNext.addEventListener("click", function () {
    if (ei >= EXAMS[ekey].qs.length) { ei = 0; escore = 0; draw(ekey); } else { ei++; }
    showE();
  });
  var echips = document.querySelectorAll("#exams .chip");
  echips.forEach(function (c) {
    c.addEventListener("click", function () {
      echips.forEach(function (o) { o.setAttribute("aria-pressed", o === c ? "true" : "false"); });
      ekey = c.getAttribute("data-exam"); ei = 0; escore = 0; draw(ekey); showE();
    });
  });
  showE();
})();
