# lowk3y english

Сайт для изучения американского английского: карточки слов со ссылками на Oxford Learner's Dictionaries, история слов, мини-тест, раздел IELTS / SAT / TOEFL, грамматика по разделам и план занятий под ваше время.

Сборка не нужна: это обычные HTML, CSS и JavaScript.

## Структура

```
index.html            главная
pages/
  cards.html          карточки слов
  history.html        история: выученные и запомненные
  quiz.html           мини-тест
  exams.html          IELTS, SAT, TOEFL
  grammar.html        грамматика (разделы открываются как grammar.html#tenses)
  plan.html           план занятий
css/
  style.css           все стили
js/
  common.js           тема, хранилище слов, меню
  home.js             слово дня
  cards.js            логика карточек
  history.js          история слов
  quiz.js             мини-тест
  exams.js            разминка по экзаменам
  grammar.js          вывод разделов грамматики
  plan.js             план занятий
  data/
    words.js              слова для карточек
    quiz-questions.js     вопросы мини-теста
    exam-questions.js     вопросы разминки
    grammar-sections.js   разделы грамматики
```

## Как добавить слово или вопрос

Откройте нужный файл в папке `js/data/` и допишите новую строку по образцу соседних. Например, в `words.js`:

```js
{ en: "grab", ru: "схватить, перекусить", ex: "Let's grab lunch downtown.", lvl: "A2" },
```

## Как выложить на GitHub Pages

1. Создайте на GitHub репозиторий, например `lowk3y-english`.
2. Нажмите **Add file → Upload files** и перетащите внутрь **содержимое** папки: `index.html`, `README.md` и папки `pages`, `css`, `js`. Затем **Commit changes**.
3. Откройте **Settings → Pages**. В разделе **Build and deployment** выберите **Deploy from a branch**, ветку `main` и папку `/ (root)`. Нажмите **Save**.
4. Через минуту-две сайт откроется по адресу `https://ВАШ-НИК.github.io/lowk3y-english/`.

Выученные слова, свои слова, тема и выбранный план сохраняются в браузере посетителя.
