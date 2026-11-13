/* Задания разминки по IELTS, SAT и TOEFL. Все тексты и вопросы написаны для этого сайта и не взяты из официальных тестов.
   Одна строка: id текста (можно пусто)|вопрос|вариант 1;вариант 2;вариант 3|номер верного (с единицы)|объяснение
   Тексты лежат в LK.PASSAGES, на них ссылается id в начале строки. */
window.LK = window.LK || {};
LK.PASSAGES = {
  bees: "Urban beekeeping has grown in many cities over the past decade. Supporters say rooftop hives help pollinate city parks, while some ecologists warn that too many managed hives can compete with wild bees for flowers.",
  sleep: "Researchers at a university in Ohio asked 200 students to keep sleep diaries for a month. Those who slept at least seven hours a night reported better concentration in morning classes. However, the study did not measure exam results, so the researchers say it is too early to claim that more sleep leads to higher grades.",
  library: "The city library extended its opening hours last spring. It now opens until 10 p.m. on weekdays, and a survey showed that visits by people aged 18 to 25 rose by a third. Library staff believe the change helped students who share crowded apartments and need a quiet place to study.",
  tea: "Tea was first drunk in China, and by the seventeenth century it had reached Europe through merchants. Britain imported huge quantities, and in the nineteenth century tea plantations were established in India to reduce dependence on Chinese supplies.",
  coral: "Coral reefs cover less than one percent of the ocean floor, yet they support roughly a quarter of all marine species. Rising water temperatures cause corals to expel the algae that give them colour and food, a process called bleaching. Scientists are testing heat-tolerant coral varieties, though they stress that cutting emissions remains essential.",
  bike: "A mid-sized city introduced a bicycle-sharing scheme with 500 bikes. Within a year, the number of daily trips grew to 6,000. Local shop owners reported that more customers arrived on foot or by bike, but some residents complained that bikes were left blocking pavements.",
  glass: "Glassmaking began in Mesopotamia about 4,000 years ago, but blown glass appeared only around the first century BC in the Roman Empire. Blowing allowed craftsmen to make thin, light vessels quickly, which made glass affordable for ordinary households for the first time.",
  owl: "Barn owls hunt almost entirely by sound. Their facial discs funnel noise toward ears that sit at slightly different heights on the skull, which lets them locate a mouse in total darkness. Because their feathers have soft edges, their flight is nearly silent, so prey rarely hears them coming.",
  roman: "The Roman road network spanned about 80,000 kilometres at its height. Roads were built in layers of stone, gravel and sand, with a curved surface so that rainwater ran off the sides. Many of these routes are still used today, and some modern highways follow their paths.",
  remote: "Since 2020, remote work has become common in the technology industry. A survey of 1,200 employees found that 62 percent preferred to work from home at least three days a week. Managers, however, worried about spontaneous collaboration, which usually happens in shared offices.",
  fish: "In the 1990s, cod stocks in the North Atlantic collapsed after decades of overfishing. Governments imposed strict quotas, and in some areas the populations have begun to recover. Yet fishermen argue that the quotas were introduced too late and that coastal communities paid the price."
};
LK.EXAM_BANK = {
ielts: { name: "IELTS", lines: `bees|True, False or Not Given: Supporters say rooftop hives help pollinate plants in city parks.|True;False;Not Given|1|Это прямо сказано в тексте: сторонники считают, что ульи на крышах помогают опылению. Ответ True.
bees|True, False or Not Given: Rooftop hives produce more honey than hives in the countryside.|True;False;Not Given|3|О количестве мёда в тексте ничего нет. Когда информации нет совсем, ответ Not Given.
bees|True, False or Not Given: Ecologists say managed hives never affect wild bees.|True;False;Not Given|2|Экологи как раз предупреждают, что ульи могут конкурировать с дикими пчёлами. Текст противоречит утверждению: False.
sleep|True, False or Not Given: The study measured the exam results of the students.|True;False;Not Given|2|В тексте сказано, что исследование не измеряло результаты экзаменов. Это прямо противоречит утверждению: False.
sleep|True, False or Not Given: The students who slept more reported better concentration.|True;False;Not Given|1|Именно это сообщили студенты, спавшие не менее семи часов. Ответ True.
sleep|True, False or Not Given: The study lasted for one year.|True;False;Not Given|2|Исследование шло месяц, значит утверждение неверно: False.
library|True, False or Not Given: The library now opens until 10 p.m. on weekends.|True;False;Not Given|3|В тексте речь про будни (weekdays), про выходные ничего не сказано. Ответ Not Given.
library|True, False or Not Given: Visits by young adults increased.|True;False;Not Given|1|Посещения людей от 18 до 25 лет выросли на треть. Ответ True.
tea|True, False or Not Given: Tea reached Europe in the seventeenth century.|True;False;Not Given|1|В тексте сказано, что к XVII веку чай добрался до Европы. Это подтверждает утверждение.
tea|True, False or Not Given: Indian tea was cheaper than Chinese tea.|True;False;Not Given|3|Про цену в тексте нет ничего, плантации в Индии создали, чтобы снизить зависимость. Ответ Not Given.
coral|True, False or Not Given: Coral reefs support about a quarter of marine species.|True;False;Not Given|1|В тексте: roughly a quarter. Ответ True.
coral|True, False or Not Given: Scientists say heat-tolerant corals make emission cuts unnecessary.|True;False;Not Given|2|Учёные подчёркивают, что сокращение выбросов остаётся необходимым. Утверждение противоречит тексту: False.
bike|True, False or Not Given: The scheme started with 500 bicycles.|True;False;Not Given|1|В тексте названо ровно 500 велосипедов. Ответ True.
bike|True, False or Not Given: Every shop owner supported the scheme.|True;False;Not Given|3|Сказано только, что некоторые владельцы заметили больше покупателей, но про поддержку всех ничего нет. Ответ Not Given.
glass|Matching: Which invention made glass cheaper for ordinary households?|Mesopotamian furnaces;Glass blowing;Roman roads|2|Согласно тексту, выдувание позволило делать стекло быстро и дёшево.
owl|Sentence completion: Barn owls locate prey mainly by ___.|sight;sound;smell|2|В тексте: they hunt almost entirely by sound.
owl|Why can barn owls fly almost silently?|Their feathers have soft edges;They fly very high;They only hunt at dawn|1|Мягкие края перьев делают полёт почти бесшумным.
roman|Which is the main purpose of the curved surface of Roman roads?|To make roads look better;To let rainwater run off;To slow down chariots|2|Выпуклая поверхность позволяла стекать дождевой воде.
remote|Which concern did managers express?|Higher costs;Less spontaneous collaboration;Fewer applicants|2|Менеджеры беспокоились о спонтанном сотрудничестве.
fish|What happened to cod stocks in the 1990s?|They doubled;They collapsed;They did not change|2|Запасы трески рухнули из-за перелова.
|Choose the closest meaning. The council decided to curb noise from nightclubs.|increase;reduce;ignore|2|Curb значит ограничивать, сдерживать.
|Choose the word closest in meaning to "scarce".|rare;large;cheap|1|Scarce значит дефицитный, редкий.
|Choose the word closest in meaning to "reluctant".|eager;unwilling;strict|2|Reluctant значит неохотный, нежелающий.
|Choose the correct form. The number of tourists ___ increased this year.|have;has;are|2|Подлежащее the number требует единственного числа: has.
|Complete: Despite ___ hard, he failed the test.|study;studying;studied|2|После despite нужна форма на -ing или существительное.` },
sat: { name: "SAT", lines: `|Which choice completes the sentence correctly? The committee ___ its decision yesterday.|announced;announce;have announced|1|Yesterday требует Past Simple. Committee как единое целое идёт с единственным числом.
|Which choice completes the sentence correctly? Neither of the candidates ___ prepared.|were;was;are|2|Neither of здесь требует глагола в единственном числе.
|Which choice completes the sentence correctly? The museum, along with its gardens, ___ open to the public.|is;are;were|1|Along with не меняет число подлежащего, оно единственное: is.
|Which choice is correct? The students, ___ had studied all night, felt confident.|which;who;whose|2|Who относится к людям.
|Which choice is correct? She enjoys hiking, swimming, and ___.|to bike;biking;bike|2|В перечислении нужна параллельная форма: все слова на -ing.
|Which choice is correct? The data ___ that sales rose sharply.|suggest;suggests;is suggesting|1|В формальном академическом стиле data чаще идёт во множественном числе.
|Which choice is correct? Because the road was icy, ___.|the drivers slowed down;slowed down was the drivers;drivers slowing|1|Нужно полное главное предложение.
|Which choice is correct? Its/It's: "___ important to read the question carefully."|Its;It's;Its'|2|It's это it is.
|Which choice is correct? He has lived in Denver ___ 2015.|for;since;during|2|Since указывает на начальную точку.
|In context, "meticulous" most nearly means ___.|careless;careful and precise;loud|2|Meticulous значит скрупулёзный.
|In context, "undermine" most nearly means ___.|weaken;support;repair|1|Undermine значит подрывать, ослаблять.
|In context, "ambiguous" most nearly means ___.|clear;open to more than one meaning;famous|2|Ambiguous значит неоднозначный.
|In context, "mitigate" most nearly means ___.|worsen;make less severe;ignore|2|Mitigate значит смягчать.
|In context, "pragmatic" most nearly means ___.|practical;theoretical;emotional|1|Pragmatic значит практичный.
owl|Which choice best states the main idea of the text?|Owls hunt mainly by sound and fly quietly;Owls are bigger than other birds;Owls avoid mice|1|Главная идея: охота на слух и тихий полёт.
roman|Which choice best describes the structure of Roman roads?|A single layer of sand;Layers of stone, gravel and sand with a curved top;A paved surface of metal|2|В тексте подробно описаны слои и изгиб поверхности.
glass|According to the text, what changed in the first century BC?|Glass was invented;Glass blowing appeared;Glass became illegal|2|Выдувное стекло появилось примерно в I веке до н. э.
coral|According to the text, what causes coral bleaching?|Rising water temperatures;Fishing;Too much light|1|Повышение температуры воды заставляет кораллы терять водоросли.
|If 3x + 5 = 20, what is the value of x?|3;5;15|2|3x = 15, значит x = 5.
|If 2(x - 4) = 10, what is x?|7;9;14|2|x - 4 = 5, значит x = 9.
|A shirt costs $40 and is on sale for 25% off. What is the sale price?|$10;$30;$35|2|25% от 40 это 10, значит цена 30.
|What is 15% of 200?|15;30;45|2|0,15 · 200 = 30.
|The line y = 2x + 1 passes through which point?|(1, 3);(2, 4);(0, 2)|1|При x = 1 получаем y = 3.
|If a rectangle has length 8 and width 5, what is its perimeter?|13;26;40|2|P = 2(8 + 5) = 26.
|The average of 4, 8 and 12 is ___.|6;8;10|2|Сумма 24, делим на 3: 8.` },
toefl: { name: "TOEFL", lines: `library|According to the passage, why did the library extend its hours?|To attract tourists;To help students who need a quiet place;To save money|2|В тексте сказано, что часы помогли студентам из тесных квартир.
library|The word "crowded" in the passage is closest in meaning to ___.|empty;full of people;modern|2|Crowded значит переполненный.
sleep|What can be inferred about the Ohio study?|It proves that sleep improves grades;It cannot prove that sleep improves grades;It was a study of teachers|2|Авторы сами говорят, что делать вывод об оценках рано.
sleep|The word "concentration" in the passage is closest in meaning to ___.|attention;speed;memory|1|Concentration значит сосредоточенность, внимание.
bike|According to the passage, what was one complaint about the bike scheme?|Bikes were too expensive;Bikes blocked pavements;Bikes were slow|2|Жители жаловались, что велосипеды мешают на тротуарах.
bike|What is the main purpose of the passage?|To describe the effects of a bike-sharing scheme;To advertise bikes;To explain how to ride|1|Текст описывает последствия запуска системы.
tea|According to the passage, how did tea reach Europe?|Through merchants;Through soldiers;Through farmers|1|Чай привезли торговцы.
tea|Why were tea plantations established in India?|To reduce dependence on Chinese supplies;To sell coffee;To build railways|1|Британцы хотели снизить зависимость от Китая.
fish|According to the passage, what did fishermen argue?|Quotas were introduced too late;Quotas were too small;Cod was not valuable|1|Рыбаки считали, что квоты ввели слишком поздно.
fish|The word "recover" in the passage is closest in meaning to ___.|decline;grow back;disappear|2|Recover значит восстанавливаться.
remote|What did the survey of 1,200 employees find?|Most preferred working from home several days a week;Most wanted to quit;Most preferred open offices|1|62 процента хотели работать из дома минимум три дня.
remote|The word "spontaneous" in the passage is closest in meaning to ___.|planned;unplanned and natural;expensive|2|Spontaneous значит непринуждённый, не заранее запланированный.
coral|What is mentioned as a threat to coral reefs?|Rising water temperatures;Underwater cables;Tourism only|1|В тексте это повышение температуры воды.
coral|The author mentions emissions in order to ___.|stress that scientific fixes are not enough;criticize scientists;describe tourism|1|Автор подчёркивает, что сокращение выбросов по-прежнему важно.
|Complete the sentence: The professor asked the students ___ the article before class.|read;to read;reading|2|Ask someone to do something.
|Complete the sentence: Hardly ___ the room when the phone rang.|he had entered;had he entered;he entered|2|После hardly в начале предложения идёт инверсия.
|Complete the sentence: The more you practice, ___ you become.|the better;better;the best|1|Конструкция the more... the better.
|Choose the best word. The new policy will ___ the number of accidents.|reduce;rise;repeat|1|Reduce значит сокращать.
|Choose the best word. The scientist's findings were ___ by further experiments.|confirmed;confusing;cancelled|1|Confirmed значит подтверждены.
|Choose the best word. The company plans to ___ its operations to Asia.|expand;expend;expect|1|Expand значит расширять.
|Choose the sentence with correct grammar.|She suggested to go home.;She suggested going home.;She suggested go home.|2|После suggest используется -ing или that-clause.
|Choose the sentence with correct grammar.|Despite of the rain, we went out.;Despite the rain, we went out.;Although the rain, we went out.|2|Despite без of.
|Choose the best word. His explanation was so ___ that everyone understood immediately.|vague;lucid;obscure|2|Lucid значит ясный.
|Choose the sentence with correct grammar.|The book which I told you about it is here.;The book which I told you about is here.;The book what I told you about is here.|2|Относительное местоимение заменяет дополнение, повторять it не нужно.` }
};
