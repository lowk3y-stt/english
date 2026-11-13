/* Задания мини-тестов по темам.
   Одна строка: вопрос|вариант 1;вариант 2;вариант 3|номер верного (с единицы)|объяснение
   Чтобы добавить задание, допишите строку в конец нужной темы. Чтобы добавить тему, добавьте запись в LK.QUIZ_TOPICS и банк с тем же id. */
window.LK = window.LK || {};
LK.QUIZ_TOPICS = [
  { id: "tenses", name: "Времена", desc: "Present, Past, Future, Perfect" },
  { id: "articles", name: "Артикли", desc: "a, an, the и отсутствие артикля" },
  { id: "prepositions", name: "Предлоги", desc: "in, on, at, to, for и другие" },
  { id: "phrasal", name: "Фразовые глаголы", desc: "get up, look for, give up" },
  { id: "idioms", name: "Идиомы", desc: "Устойчивые выражения" },
  { id: "usuk", name: "США и Британия", desc: "Американские и британские слова" },
  { id: "modals", name: "Модальные глаголы", desc: "can, must, should, might" },
  { id: "conditionals", name: "Условные", desc: "If-предложения" },
  { id: "passive", name: "Страдательный залог", desc: "Passive и косвенная речь" },
  { id: "quantifiers", name: "Количество", desc: "much, many, few, little, some, any" },
  { id: "confusing", name: "Похожие слова", desc: "Слова, которые путают" },
  { id: "wordform", name: "Словообразование", desc: "Приставки и суффиксы" }
];
LK.QUIZ_BANK = {
tenses: `She ___ to work every day by bus.|go;goes;is going|2|Привычка в Present Simple, а с she глагол получает окончание -es.
I ___ my keys. Can you help me look?|lost;have lost;was losing|2|Результат важен сейчас: ключей до сих пор нет. Это Present Perfect.
I ___ TV when you called me.|watched;was watching;have watched|2|Действие шло в момент другого события. Нужен Past Continuous.
They ___ in Boston since 2019.|live;lived;have lived|3|Since и действие, которое длится до сих пор, дают Present Perfect.
Look at those clouds. It ___ rain.|will;is going to;rains|2|Прогноз по видимым признакам выражается через be going to.
I ___ him yesterday.|saw;have seen;see|1|Yesterday указывает на конкретное прошлое, нужен Past Simple.
By next June, she ___ her degree.|finishes;will have finished;is finishing|2|К моменту в будущем действие завершится: Future Perfect.
What ___ you ___ at 8 p.m. last night?|did / do;were / doing;have / done|2|Процесс в конкретный момент прошлого: Past Continuous.
He ___ here for two hours when the bus finally came.|waited;had been waiting;has waited|2|Длительное действие до другого момента в прошлом: Past Perfect Continuous.
We ___ to the beach tomorrow. I already bought the tickets.|go;are going;went|2|Запланированное действие с уже сделанными приготовлениями: Present Continuous или be going to.
She ___ coffee. She prefers tea.|doesn't drink;isn't drinking;didn't drink|1|Постоянное предпочтение выражается в Present Simple.
I ___ you as soon as I get there.|will call;call;am calling|1|В главной части уместно will, а после as soon as глагол стоит в Present Simple.
How long ___ you ___ English?|do / study;have / studied;did / study|2|Вопрос How long про период до сих пор: Present Perfect.
The train ___ at 6:15 tomorrow morning.|leaves;is leaving;left|1|Расписание транспорта обычно выражается через Present Simple.
When I was a kid, we ___ to the lake every summer.|used to go;were used to go;use to go|1|Повторяющееся действие в прошлом, которого больше нет: used to + глагол.
I ___ never ___ sushi before last week.|have / eaten;had / eaten;did / eat|2|Опыт до момента в прошлом (last week) требует Past Perfect.`,
articles: `He is ___ honest man.|a;an;the|2|Слово honest начинается с гласного звука, поэтому an.
___ sun rises in the east.|A;The;(без артикля)|2|Единственный в своём роде объект, как the sun, требует the.
She plays ___ piano very well.|a;the;(без артикля)|2|С названиями музыкальных инструментов, на которых играют, ставят the.
I have ___ umbrella in my bag.|a;an;the|2|Umbrella начинается с гласного звука: an.
We had ___ lunch at noon.|a;the;(без артикля)|3|Названия приёмов пищи обычно идут без артикля.
My brother is ___ university student.|a;an;the|1|Слово university начинается со звука /j/, то есть согласного, поэтому a.
Can you close ___ window, please?|a;the;(без артикля)|2|Собеседники знают, о каком окне речь, поэтому the.
___ life is not always easy.|A;The;(без артикля)|3|Когда говорим о жизни вообще, артикль не нужен.
He goes to ___ school by bike.|a;the;(без артикля)|3|Если речь о самой функции школы (учится), артикль не нужен.
She is ___ best student in our class.|a;the;(без артикля)|2|С превосходной степенью всегда the.
I saw ___ movie last night. ___ movie was great.|A / A;A / The;The / A|2|Первый раз упоминаем: a, второй раз тот же объект: the.
They live in ___ United States.|a;the;(без артикля)|2|Названия стран во множественном числе или с union, states, kingdom имеют the.
___ Mount Everest is the highest mountain on Earth.|The;A;(без артикля)|3|Перед названиями отдельных гор артикль не ставят.
It took me ___ hour to get there.|a;an;the|2|Hour начинается с гласного звука, так как h не читается: an.
My dad works as ___ engineer.|a;an;the|2|Перед названием профессии ставят неопределённый артикль. Engineer начинается с гласного: an.`,
prepositions: `I'll see you ___ Monday.|in;on;at|2|С днями недели используется on.
She was born ___ 1998.|on;at;in|3|С годами используется in.
The meeting starts ___ 9 a.m.|in;on;at|3|С точным временем используется at.
He is afraid ___ spiders.|of;from;with|1|Прилагательное afraid требует предлога of.
We arrived ___ the airport an hour early.|in;at;to|2|Для аэропорта как пункта прибытия употребляют at.
I'm interested ___ photography.|in;on;at|1|Устойчивое сочетание: interested in.
She is good ___ math.|in;at;on|2|Сочетание good at означает быть хорошим в чём-то.
He lives ___ New York.|at;on;in|3|Для городов используется in.
Please sit ___ the chair next to me.|in;on;at|2|Сидеть на стуле: on the chair (в кресле: in an armchair).
I've been waiting ___ an hour.|since;for;during|2|For используется с периодом времени, since с точкой начала.
The book is ___ the table.|in;on;at|2|Предмет на поверхности: on.
We go to the beach ___ summer.|at;on;in|3|С временами года используется in.
He didn't come ___ he was sick.|because;because of;due|1|После because идёт предложение, а because of требует существительного.
She is married ___ a doctor.|with;to;for|2|Устойчивое сочетание: married to.
I'm looking forward ___ seeing you.|to;for;at|1|Look forward to + -ing.`,
phrasal: `I need to ___ my glasses. I can't find them.|look for;look after;look up|1|Look for означает искать.
Please ___ your shoes when you enter.|take off;take on;take out|1|Take off значит снимать одежду или обувь.
She decided to ___ smoking.|give up;give in;give out|1|Give up значит бросить, отказаться.
I'll ___ you at the station at six.|pick up;pick out;pick on|1|Pick up здесь значит забрать кого-то.
Can you ___ the music? It's too loud.|turn down;turn off the;turn on|1|Turn down значит сделать тише.
We ran ___ milk, so I went to the store.|out of;away from;up with|1|Run out of значит закончиться.
He grew ___ in a small town.|up;on;out|1|Grow up значит вырасти.
I can't ___ this word. What does it mean?|figure out;work on;find in|1|Figure out значит разобраться, понять.
They had to ___ the trip because of the storm.|call off;call on;call up|1|Call off значит отменить.
Hurry ___, we're going to be late!|up;on;in|1|Hurry up значит поторопись.
She takes ___ her mother. They look alike.|after;on;over|1|Take after означает быть похожим на родителя.
I ran ___ an old friend at the mall.|into;over;out|1|Run into значит случайно встретить.
Let's ___ the plan before we start.|go over;go on;go off|1|Go over значит просмотреть, повторить.
He ___ up with a great idea.|came;went;took|1|Come up with значит придумать.
The meeting was put ___ until Friday.|off;out;away|1|Put off значит отложить.
Please fill ___ this form.|out;up to;down|1|Fill out значит заполнить бланк (в США). Fill in тоже верно.`,
idioms: `"It's raining cats and dogs" means it's raining ___.|a little;very hard;at night|2|Идиома означает очень сильный дождь.
"Break a leg!" is a way to say ___.|good luck;be careful;goodbye|1|Так желают удачи перед выступлением.
"To spill the beans" means to ___.|cook dinner;reveal a secret;make a mess|2|Spill the beans значит выдать секрет.
"Piece of cake" means something is ___.|delicious;very easy;expensive|2|Piece of cake значит проще простого.
"Under the weather" means feeling ___.|cold;sick;happy|2|Under the weather значит неважно себя чувствовать.
"Hit the books" means to ___.|study hard;fight;buy books|1|Hit the books значит усердно учиться.
"Once in a blue moon" means ___.|every night;very rarely;at midnight|2|Once in a blue moon значит очень редко.
"To cost an arm and a leg" means ___.|to be dangerous;to be very expensive;to be painful|2|Стоить целое состояние.
"Let the cat out of the bag" means to ___.|free a pet;reveal a secret by accident;lose something|2|Случайно проговориться.
"Call it a day" means to ___.|stop working;start early;take a day off|1|Call it a day значит закончить на сегодня.
"The ball is in your court" means ___.|you play tennis;it's your turn to act;you lost|2|Теперь ваш ход, решение за вами.
"To be on the fence" means to be ___.|angry;undecided;lost|2|Не определиться между вариантами.
"Bite the bullet" means to ___.|face something difficult bravely;eat fast;get angry|1|Стиснуть зубы и сделать неприятное.
"Kill two birds with one stone" means to ___.|hunt;solve two problems with one action;be cruel|2|Убить двух зайцев.
"Cut corners" means to ___.|cut paper;do something cheaply and carelessly;turn left|2|Делать на скорую руку, экономя усилия.
"Get cold feet" means to ___.|be freezing;become nervous before doing something;walk fast|2|Испугаться перед важным шагом.`,
usuk: `In the US, you take the ___ to get to the 5th floor.|lift;elevator;escalator|2|Американцы говорят elevator. Lift звучит по-британски.
Americans call the British "flat" an ___.|apartment;appartment;house|1|В США квартира это apartment.
In American English, "football" usually means ___.|soccer;American football;rugby|2|В США football это американский футбол, а soccer это европейский.
Americans say ___ for the British "autumn".|spring;fall;winter|2|Fall это американское название осени.
The American word for "trousers" is ___.|pants;shorts;skirts|1|В США trousers чаще называют pants.
A British "biscuit" is an American ___.|cookie;cake;candy|1|Британское biscuit это американское cookie.
The American word for the British "petrol" is ___.|fuel;gas;oil|2|В США бензин называют gas (gasoline).
The American word for "rubbish" is ___.|trash;waste;litter|1|В США мусор чаще называют trash или garbage.
A British "lorry" is an American ___.|truck;van;bus|1|Грузовик в США это truck.
In the US, "chips" are called ___.|fries;crisps;snacks|1|Жареную картошку американцы называют fries, а chips это то, что в Британии crisps.
The American word for "queue" is ___.|line;row;group|1|Очередь в США это line.
A British "holiday" (vacation) is called ___ in the US.|vacation;trip;travel|1|Отпуск американцы называют vacation.
In the US, "mom" is what Brits call ___.|mum;mam;mother|1|Британское mum это американское mom.
Americans write the date as ___.|day/month/year;month/day/year;year/day/month|2|В США сначала месяц, потом день.
The American word for "pavement" (где ходят пешеходы) is ___.|sidewalk;road;path|1|Тротуар в США это sidewalk.`,
modals: `You ___ wear a seat belt. It's the law.|must;might;can|1|Must выражает обязательность и закон.
___ I open the window? It's hot.|Should;May;Must|2|May I... это вежливая просьба о разрешении.
She ___ be at home. Her light is on.|can;must;should to|2|Must выражает уверенное предположение.
You ___ see a doctor. You look pale.|should;could not;must not|1|Should это совет.
He ___ swim when he was four.|can;could;may|2|Could выражает умение в прошлом.
You ___ park here. It's forbidden.|don't have to;must not;needn't to|2|Must not запрещает действие.
You ___ bring a gift. It's optional.|mustn't;don't have to;can't|2|Don't have to значит что это не обязательно.
It ___ rain later, so take an umbrella.|might;must;shall|1|Might выражает возможность.
___ you help me with my bag, please?|Could;Must;Ought|1|Could you...? это вежливая просьба.
I ___ have locked the door. I don't remember.|might not;must not;can't to|1|Might not have выражает предположение о прошлом.
He ___ have left already. His car is gone.|must;should to;might to|1|Must have + V3 это вывод о прошлом.
You ___ to eat more vegetables.|ought;must;would|1|Ought to значит следует.
We ___ hurry. The movie starts in ten minutes.|had better;ought;may|1|Had better это сильный совет с угрозой последствий.
___ we meet at noon?|Shall;Must;Can to|1|Shall we...? это предложение сделать что-то вместе.`,
conditionals: `If it rains tomorrow, we ___ at home.|stay;will stay;would stay|2|Реальное условие в будущем: If + Present Simple, will + глагол.
If I ___ you, I would take that job.|am;were;will be|2|Нереальное условие в настоящем: If + Past Simple, would + глагол. С I, he, she часто were.
If she had studied, she ___ the exam.|would pass;would have passed;will pass|2|Нереальное прошлое: If + Past Perfect, would have + V3.
If you heat ice, it ___.|melts;will melt;would melt|1|Закон природы: Zero Conditional, оба глагола в Present Simple.
I wish I ___ more free time.|have;had;will have|2|После wish о нереальном настоящем идёт Past Simple.
___ you need help, call me.|If;Should;Unless|2|Should в начале предложения заменяет if в формальном стиле.
Unless you hurry, you ___ the bus.|will miss;would miss;miss|1|Unless значит if not. Условие реальное, значит will.
If I won the lottery, I ___ a big house.|will buy;would buy;would have bought|2|Нереальное настоящее: would + глагол.
I wish I ___ to the party last night.|went;had gone;would go|2|Сожаление о прошлом: wish + Past Perfect.
If he ___ harder, he would be a better player.|practiced;practices;will practice|1|Нереальное настоящее: If + Past Simple.
What would you do if you ___ lost?|get;got;will get|2|После would в главной части в придаточном Past Simple.
If I ___ known, I would have told you.|have;had;would|2|Нереальное прошлое: If + Past Perfect.
As long as you ___ careful, you'll be fine.|are;will be;would be|1|После as long as (если только) идёт Present Simple.
If only I ___ speak French!|can;could;will|2|If only + could выражает сожаление о нереальном умении.
She would be here by now if she ___ the bus.|didn't miss;hadn't missed;wouldn't miss|2|Смешанное условное: прошлое условие, результат в настоящем.`,
passive: `The window ___ by a boy yesterday.|broke;was broken;has broken|2|Действие совершили над окном: Past Simple Passive, was + V3.
English ___ all over the world.|speaks;is spoken;speaking|2|Present Simple Passive: is/are + V3.
The report ___ by Friday.|will be finished;will finish;finishes|1|Будущее в пассиве: will be + V3.
She said she ___ tired.|is;was;were|2|В косвенной речи после said в прошедшем времени настоящее сдвигается в прошедшее.
He asked me where I ___.|live;lived;do live|2|В косвенном вопросе нет инверсии и время сдвигается назад.
The house ___ right now.|is painting;is being painted;paints|2|Процесс в настоящем в пассиве: is being + V3.
The letter ___ yet.|wasn't sent;hasn't been sent;doesn't send|2|Present Perfect Passive: has/have been + V3.
"I will call you." → He said he ___ me.|will call;would call;called|2|Will в косвенной речи становится would.
"Don't touch it!" → She told me ___ it.|not touch;not to touch;don't touch|2|Отрицательное требование в косвенной речи: not to + глагол.
This cake ___ by my grandmother.|was made;made;has make|1|Пассив: was + V3.
The thief ___ by the police last night.|was caught;caught;is catching|1|Past Simple Passive.
"Where is the station?" → She asked ___.|where was the station;where the station was;where is the station|2|В косвенном вопросе порядок слов прямой.
Dinner ___ when we arrived.|was being cooked;cooked;was cook|1|Процесс в прошлом в пассиве: was being + V3.
She told us that she ___ the film the day before.|saw;had seen;has seen|2|Past Simple в косвенной речи сдвигается в Past Perfect.
The rules ___ be followed by everyone.|must;must to;must be|3|Модальный глагол в пассиве: must be + V3.`,
quantifiers: `How ___ time do we have left?|many;much;a few|2|Time неисчисляемое, поэтому much.
How ___ people came to the party?|much;many;little|2|People считаются, поэтому many.
There isn't ___ milk in the fridge.|some;any;a few|2|В отрицании используется any.
I'd like ___ water, please.|some;any;many|1|В просьбах и предложениях используется some.
We have ___ time. Let's hurry.|few;little;a few|2|Little (почти нет) используется с неисчисляемыми.
She has ___ friends, so she feels lonely.|few;a little;much|1|Few (почти нет) используется со считаемыми.
I have ___ questions. Can I ask?|a few;a little;much|1|A few значит несколько, а это нейтрально-положительно.
There's ___ sugar left. Just enough for one cup.|a little;a few;many|1|A little значит немного с неисчисляемыми.
___ of the students passed the exam. Nobody failed.|All;None;Every|1|All of the students значит все студенты.
Do you have ___ brothers or sisters?|some;any;much|2|В вопросах чаще any.
He drinks ___ coffee. Maybe six cups a day.|a lot of;a few;many|1|A lot of подходит и для неисчисляемых, и для считаемых.
There are too ___ cars on the road today.|much;many;little|2|Cars считаются: too many.
I don't have ___ money with me.|many;much;few|2|Money неисчисляемое: much.
___ student has to bring a pen.|All;Each;Both|2|Each идёт с единственным числом.
Neither of the answers ___ correct.|is;are;were|1|После neither of глагол чаще стоит в единственном числе.`,
confusing: `I need some ___ about the course.|advices;advice;an advice|2|Advice неисчисляемое существительное.
Can I ___ your pen?|lend;borrow;loan to|2|Borrow значит брать взаймы, lend значит давать взаймы.
The ___ of the story was surprising.|ending;end up;endly|1|Ending значит концовка.
I'm ___ to the music right now.|hearing;listening;listen|2|Listening значит слушать внимательно, hearing просто слышать.
She is ___ than her sister.|more tall;taller;most tall|2|Короткие прилагательные образуют степень с -er.
Please ___ me the salt.|say;tell;pass|3|Pass значит передать.
He ___ a mistake in the test.|did;made;took|2|Устойчивое сочетание: make a mistake.
We need to ___ a decision soon.|do;make;take|2|Make a decision значит принять решение.
She is ___ on the phone.|speaking;saying;telling|1|Speak значит разговаривать, say и tell требуют дополнения.
The movie was really ___.|bored;boring;bore|2|Boring описывает то, что скучно. Bored значит скучающий.
It's ___ cold today. Bring a jacket.|quiet;quite;quit|2|Quite значит довольно.
What's the ___ between these two words?|difference;different;differ|1|Difference это существительное.
Can you ___ me how to get there?|say;tell;talk|2|Tell someone something: сказать кому-то.
I ___ my wallet at home.|forgot;left;lost|2|Left значит оставил (в каком-то месте). С местом используем leave.
The weather ___ my mood.|effects;affects;effect|2|Affect это глагол (влиять), effect существительное.`,
wordform: `Add the right prefix: ___possible (not possible)|un;im;dis|2|Перед p и m используется приставка im-.
Add the right prefix: ___honest (not honest)|un;im;dis|3|С honest используется dis-.
She is a good ___ (sing).|singer;singing;sang|1|Суффикс -er образует названия людей по действию.
His ___ (happy) was obvious.|happiness;happily;happy|1|Суффикс -ness образует существительные.
She answered ___ (polite).|polite;politely;politeness|2|Наречие образуется суффиксом -ly.
The company wants to ___ (large) its office.|enlarge;largen;largely|1|Приставка en- образует глагол.
This is the most ___ (create) idea I've heard.|creation;creative;creatively|2|Нужно прилагательное: creative.
He showed great ___ (courage).|courageous;courage;courageously|2|После great нужно существительное.
The movie was very ___ (disappoint).|disappointing;disappointed;disappointment|1|Disappointing описывает то, что разочаровывает.
We need a ___ (solve) to this problem.|solution;solving;solved|1|Solution это существительное от solve.
Wearing a seat belt is ___ (necessary) in a car.|necessary;necessity;necessarily|1|После is нужно прилагательное.
He is very ___ (care). He never makes mistakes.|careful;careless;carefully|1|Суффикс -ful значит полный чего-то, careful значит осторожный.
The ___ (assist) helped me find the book.|assistant;assist;assistance|1|Assistant это человек, который помогает.
She spoke ___ (clear).|clear;clearly;clarity|2|Наречие от clear: clearly.`
};
