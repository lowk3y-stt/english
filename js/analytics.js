/* Счётчик посещений GoatCounter: без cookie, не собирает личные данные.
   Подключается только если в js/config.js указано имя аккаунта. */
(function () {
  var code = window.LK_CONFIG && window.LK_CONFIG.goatcounter;
  if (!code || !/^[a-z0-9-]+$/i.test(code)) return;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", "https://" + code + ".goatcounter.com/count");
  document.head.appendChild(s);

  /* клики по ссылкам на TikTok считаются отдельным событием */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href*="tiktok.com"]');
    if (!a || !window.goatcounter || !window.goatcounter.count) return;
    window.goatcounter.count({ path: "click-tiktok", title: "Клик на TikTok", event: true });
  });
})();
