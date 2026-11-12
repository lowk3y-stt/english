/* Главная: слово дня. Оно одно и то же в течение календарного дня. */
(function () {
  var W = window.LK && window.LK.WORDS;
  if (!W || !W.length) return;
  var d = new Date();
  var seed = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate();
  var w = W[seed % W.length];
  document.getElementById("wotd-word").textContent = w.en;
  document.getElementById("wotd-ipa").textContent = w.ipa || "";
  document.getElementById("wotd-tr").textContent = w.ru;
  document.getElementById("wotd-ex").textContent = w.ex || "";
})();
