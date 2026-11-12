/* Вопросы разминки по IELTS, SAT и TOEFL. */
window.LK = window.LK || {};
(function (LK) {
  var BEES = "Urban beekeeping has grown in many cities over the past decade. Supporters say rooftop hives help pollinate city parks, while some ecologists warn that too many managed hives can compete with wild bees for flowers.";
  LK.EXAMS = {
    ielts: { name: "IELTS", qs: [
      { p: BEES, q: "True, False or Not Given: Supporters say rooftop hives help pollinate plants in city parks.", o: ["True", "False", "Not Given"], a: 0, e: "Это прямо сказано в тексте: сторонники считают, что ульи на крышах помогают опылению. Ответ True." },
      { p: BEES, q: "True, False or Not Given: Rooftop hives produce more honey than hives in the countryside.", o: ["True", "False", "Not Given"], a: 2, e: "О количестве мёда в тексте ничего нет. Когда информации нет совсем, ответ Not Given." },
      { p: BEES, q: "True, False or Not Given: Ecologists say managed hives never affect wild bees.", o: ["True", "False", "Not Given"], a: 1, e: "Экологи как раз предупреждают, что ульи могут конкурировать с дикими пчёлами. Текст противоречит утверждению: False." },
      { q: "Choose the closest meaning. The council decided to curb noise from nightclubs.", o: ["increase", "restrict", "measure"], a: 1, e: "Curb значит «ограничивать, сдерживать», то есть restrict." },
      { q: "Writing Task 1. The number of visitors ___ sharply between 2015 and 2020.", o: ["rise", "rose", "is rising"], a: 1, e: "Период в прошлом закончился, поэтому нужен Past Simple: rose." }
    ] },
    sat: { name: "SAT", qs: [
      { q: "The experiment failed twice; ___ the team kept going.", o: ["nevertheless,", "therefore,", "for instance,"], a: 0, e: "Вторая часть идёт наперекор первой, поэтому нужен переход с уступительным смыслом: nevertheless." },
      { p: "Though the critic's tone was often caustic, her analysis of the film was careful and fair.", q: "As used in the text, caustic most nearly means", o: ["harshly critical", "cheerful", "hesitant"], a: 0, e: "Слово though показывает контраст с «careful and fair». Значит, тон был резким: harshly critical." },
      { q: "The collection of rare coins ___ displayed on the second floor.", o: ["is", "are", "were"], a: 0, e: "Подлежащее здесь collection (единственное число), а не coins. Поэтому is." },
      { q: "The committee announced ___ decision on Friday.", o: ["it's", "its", "their's"], a: 1, e: "Нужно притяжательное местоимение its. It's всегда значит it is или it has." },
      { p: "Researchers found that students who slept eight hours scored higher on memory tests than those who slept five. The finding does not prove that sleep alone caused the difference.", q: "What is the main function of the second sentence?", o: ["It warns against reading too much into the result", "It contradicts the first sentence", "It gives an example of the result"], a: 0, e: "Второй фрагмент не отменяет результат, а напоминает, что связь не доказывает причину." }
    ] },
    toefl: { name: "TOEFL", qs: [
      { p: "Glaciers move slowly, but over thousands of years they carve deep valleys into mountains.", q: "The word carve in the passage is closest in meaning to", o: ["cut", "climb", "cover"], a: 0, e: "Глетчеры прорезают долины в горах. Ближе всего по смыслу cut." },
      { p: "Each autumn, monarch butterflies travel thousands of kilometers to warmer regions. No single butterfly makes the round trip; it takes several generations.", q: "What can be inferred from the passage?", o: ["The butterflies that return in spring are descendants of those that left", "Every monarch completes the whole round trip", "Monarchs avoid warm regions"], a: 0, e: "Ни одна бабочка не проходит весь круг, поэтому обратно возвращаются уже их потомки." },
      { p: "Octopuses have three hearts: two pump blood to the gills, and one pumps it to the rest of the body.", q: "According to the passage, how many hearts send blood to the gills?", o: ["One", "Two", "Three"], a: 1, e: "В тексте прямо сказано: two pump blood to the gills." },
      { q: "The professor asked us to ___ our ideas with evidence.", o: ["reject", "support", "avoid"], a: 1, e: "Идеи подкрепляют доказательствами, поэтому support." },
      { q: "Which sentence best expresses the essential meaning? Although the experiment was small, its results were hard to ignore.", o: ["Because the experiment was small, nobody noticed the results.", "The results were important even though the experiment was small.", "The experiment was large, so the results were hard to ignore."], a: 1, e: "Although задаёт контраст: эксперимент небольшой, но результаты значимые." }
    ] }
  };
})(window.LK);
