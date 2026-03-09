const jsOverviewSections = [
    {
      id: "what-is-javascript",
      title: "Що таке JavaScript",
      blocks: [
        {
          type: "text",
          content:
            "JavaScript — це мова програмування, яка використовується для створення інтерактивних веб-інтерфейсів. Саме вона відповідає за поведінку сторінки: кліки, анімації, перевірку форм, оновлення даних без перезавантаження та взаємодію з сервером.",
        },
        {
          type: "text",
          content:
            "Спочатку JavaScript працював тільки у браузері, але сьогодні він використовується також на сервері через Node.js, у мобільних застосунках, десктопних програмах та інструментах збірки.",
        },
        {
          type: "tip",
          label: "Порада",
          content:
            "Сприймай JavaScript не просто як мову для сайту, а як основу сучасного фронтенду: логіка, дані, API, події та інтерактивність.",
        },
      ],
    },
  
    {
      id: "where-javascript-is-used",
      title: "Де використовується JavaScript",
      blocks: [
        {
          type: "text",
          content:
            "JavaScript використовується майже у всіх сучасних веб-додатках. Він дозволяє сторінці реагувати на дії користувача, отримувати дані із сервера та оновлювати інтерфейс без повного перезавантаження.",
        },
        {
          type: "list",
          items: [
            "Frontend розробка у браузері",
            "SPA-додатки (Single Page Application)",
            "Робота з HTTP API та JSON",
            "Асинхронні запити до сервера",
            "Node.js на сервері",
            "Інтерактивні форми, таблиці, дашборди",
          ],
        },
        {
          type: "warning",
          label: "Важливо",
          content:
            "Якщо ти вивчаєш React, то JavaScript потрібно знати добре, бо React не замінює JS — він повністю на ньому побудований.",
        },
      ],
    },
  
    {
      id: "javascript-in-browser",
      title: "JavaScript у браузері",
      blocks: [
        {
          type: "text",
          content:
            "У браузері JavaScript має доступ до DOM — структури HTML-документа. Завдяки цьому він може змінювати текст, стилі, класи, атрибути та реагувати на події користувача.",
        },
        {
          type: "subtitle",
          content: "Приклад зміни тексту на сторінці",
        },
        {
          type: "code",
          content: `const title = document.querySelector("h1");
  title.textContent = "Hello JavaScript";`,
        },
        {
          type: "subtitle",
          content: "Приклад обробки кліку",
        },
        {
          type: "code",
          content: `const button = document.querySelector("button");
  
  button.addEventListener("click", () => {
    console.log("Button clicked");
  });`,
        },
        {
          type: "tip",
          label: "Пояснення",
          content:
            "У чистому JavaScript ти працюєш напряму з DOM. У React це робиться через компоненти та стан, але базова логіка все одно залишається JavaScript-логікою.",
        },
      ],
    },
  
    {
      id: "javascript-and-spa",
      title: "JavaScript і SPA",
      blocks: [
        {
          type: "text",
          content:
            "SPA (Single Page Application) — це застосунок, у якому сторінка не перезавантажується повністю при переходах або оновленні даних. Замість цього JavaScript динамічно змінює потрібні частини інтерфейсу.",
        },
        {
          type: "text",
          content:
            "У SPA JavaScript відповідає за маршрутизацію, роботу з API, зміну стану додатку та оновлення UI. Саме тому знання JavaScript є базою для роботи з React.",
        },
        {
          type: "tip",
          label: "Приклад",
          content:
            "Коли ти відкриваєш список користувачів, натискаєш на картку і бачиш деталі без повного перезавантаження сторінки — це типова поведінка SPA.",
        },
      ],
    },
  
    {
      id: "dynamic-typing",
      title: "Динамічна типізація",
      blocks: [
        {
          type: "text",
          content:
            "JavaScript є мовою з динамічною типізацією. Це означає, що тип значення визначається під час виконання програми, а одна і та сама змінна може зберігати різні типи даних.",
        },
        {
          type: "code",
          content: `let value = 10;
  value = "hello";
  value = true;`,
        },
        {
          type: "text",
          content:
            "Це робить JavaScript гнучким, але водночас підвищує ризик помилок, якщо не контролювати типи уважно.",
        },
        {
          type: "warning",
          label: "Увага",
          content:
            "Саме через динамічну типізацію у великих проєктах часто використовують TypeScript, який додає статичну перевірку типів.",
        },
      ],
    },
  
    {
      id: "primitive-and-reference-types",
      title: "Примітиви та об’єкти",
      blocks: [
        {
          type: "text",
          content:
            "У JavaScript є примітивні типи та посилальні типи. Це важливо розуміти, бо від цього залежить, як копіюються та змінюються значення.",
        },
        {
          type: "list",
          items: [
            "Примітиви: string, number, boolean, null, undefined, bigint, symbol",
            "Посилальні типи: object, array, function",
          ],
        },
        {
          type: "subtitle",
          content: "Примітив копіюється за значенням",
        },
        {
          type: "code",
          content: `let a = 5;
  let b = a;
  
  b = 10;
  
  console.log(a); // 5
  console.log(b); // 10`,
        },
        {
          type: "subtitle",
          content: "Об’єкт копіюється за посиланням",
        },
        {
          type: "code",
          content: `const user1 = { name: "Alex" };
  const user2 = user1;
  
  user2.name = "John";
  
  console.log(user1.name); // John`,
        },
        {
          type: "tip",
          label: "Порада",
          content:
            "Для React це дуже важливо: масиви й об’єкти не можна бездумно мутувати, бо це ламає передбачуваність стану.",
        },
      ],
    },
  
    {
      id: "variables",
      title: "Змінні: var, let, const",
      blocks: [
        {
          type: "text",
          content:
            "Для оголошення змінних у JavaScript використовують var, let і const. У сучасному коді майже завжди використовують let та const.",
        },
        {
          type: "list",
          items: [
            "var — застарілий спосіб, має функціональну область видимості",
            "let — змінна, значення якої можна змінювати",
            "const — константа, яку не можна перевизначити",
          ],
        },
        {
          type: "code",
          content: `let count = 0;
  count = 1;
  
  const appName = "Manual";
  // appName = "New Manual"; // помилка`,
        },
        {
          type: "warning",
          label: "Важливо",
          content:
            "const не означає, що об’єкт усередині стає повністю незмінним. Це означає лише те, що змінну не можна перенаправити на інше значення.",
        },
      ],
    },
  
    {
      id: "functions",
      title: "Функції",
      blocks: [
        {
          type: "text",
          content:
            "Функції — це один з найважливіших елементів JavaScript. Вони дозволяють винести логіку в окремий блок, перевикористовувати код і передавати поведінку як значення.",
        },
        {
          type: "subtitle",
          content: "Звичайна функція",
        },
        {
          type: "code",
          content: `function greet(name) {
    return "Hello, " + name;
  }`,
        },
        {
          type: "subtitle",
          content: "Стрілкова функція",
        },
        {
          type: "code",
          content: `const greet = (name) => {
    return "Hello, " + name;
  };`,
        },
        {
          type: "subtitle",
          content: "Короткий запис",
        },
        {
          type: "code",
          content: `const greet = (name) => "Hello, " + name;`,
        },
        {
          type: "tip",
          label: "Пояснення",
          content:
            "У React ти майже всюди працюєш із функціями: компоненти, обробники подій, callbacks, map, filter, useEffect, useMemo — усе це зав’язано на функціональному мисленні.",
        },
      ],
    },
  
    {
      id: "arrays-and-objects",
      title: "Масиви та об’єкти",
      blocks: [
        {
          type: "text",
          content:
            "Масиви та об’єкти — базові структури даних у JavaScript. Масиви використовуються для списків, а об’єкти — для зберігання пов’язаних властивостей.",
        },
        {
          type: "subtitle",
          content: "Масив",
        },
        {
          type: "code",
          content: `const users = ["Alex", "John", "Kate"];`,
        },
        {
          type: "subtitle",
          content: "Об’єкт",
        },
        {
          type: "code",
          content: `const user = {
    name: "Alex",
    age: 25,
    isAdmin: false,
  };`,
        },
        {
          type: "subtitle",
          content: "Доступ до властивостей",
        },
        {
          type: "code",
          content: `console.log(user.name);
  console.log(user["age"]);`,
        },
        {
          type: "tip",
          label: "Порада",
          content:
            "На фронтенді ти постійно працюєш з масивами даних від API та об’єктами конфігурації, користувачів, форм і state.",
        },
      ],
    },
  
    {
      id: "destructuring",
      title: "Деструктуризація",
      blocks: [
        {
          type: "text",
          content:
            "Деструктуризація дозволяє зручно витягувати значення з масивів та об’єктів у змінні. Це дуже популярний синтаксис у сучасному JavaScript і React.",
        },
        {
          type: "subtitle",
          content: "Деструктуризація об’єкта",
        },
        {
          type: "code",
          content: `const user = {
    name: "Alex",
    age: 25,
  };
  
  const { name, age } = user;`,
        },
        {
          type: "subtitle",
          content: "Деструктуризація масиву",
        },
        {
          type: "code",
          content: `const colors = ["red", "green", "blue"];
  
  const [first, second] = colors;`,
        },
        {
          type: "tip",
          label: "Пояснення",
          content:
            "У React деструктуризація використовується постійно: props, state, дані з API, параметри функцій, результати хуків.",
        },
      ],
    },
  
    {
      id: "spread-and-rest",
      title: "Spread і Rest",
      blocks: [
        {
          type: "text",
          content:
            "Оператор ... у JavaScript використовується у двох популярних сценаріях: spread для розгортання значень і rest для збору кількох значень у масив або об’єкт.",
        },
        {
          type: "subtitle",
          content: "Spread для копіювання масиву",
        },
        {
          type: "code",
          content: `const numbers = [1, 2, 3];
  const copy = [...numbers];`,
        },
        {
          type: "subtitle",
          content: "Spread для копіювання об’єкта",
        },
        {
          type: "code",
          content: `const user = { name: "Alex", age: 25 };
  const updatedUser = { ...user, age: 26 };`,
        },
        {
          type: "subtitle",
          content: "Rest у параметрах функції",
        },
        {
          type: "code",
          content: `const sum = (...args) => {
    return args.reduce((acc, item) => acc + item, 0);
  };`,
        },
        {
          type: "warning",
          label: "Важливо",
          content:
            "Spread часто використовують для створення нових об’єктів і масивів без мутації старих значень. Для React це одна з базових навичок.",
        },
      ],
    },
  
    {
      id: "asynchronous-javascript",
      title: "Асинхронність у JavaScript",
      blocks: [
        {
          type: "text",
          content:
            "Асинхронність дозволяє JavaScript виконувати довгі операції, наприклад запити до сервера, без блокування інтерфейсу. Це одна з ключових тем для фронтенд-розробника.",
        },
        {
          type: "list",
          items: [
            "Callbacks",
            "Promises",
            "async / await",
            "fetch API",
            "Обробка помилок через try / catch",
          ],
        },
        {
          type: "subtitle",
          content: "Приклад async / await",
        },
        {
          type: "code",
          content: `async function getUsers() {
    const response = await fetch("/api/users");
    const data = await response.json();
  
    return data;
  }`,
        },
        {
          type: "warning",
          label: "Важливо",
          content:
            "Асинхронність — це не окрема тема десь збоку. У реальній роботі вона присутня майже всюди: API, форми, авторизація, файли, таблиці, WebSocket, завантаження сторінок.",
        },
      ],
    },
  
    {
      id: "event-loop",
      title: "Event Loop",
      blocks: [
        {
          type: "text",
          content:
            "JavaScript виконується в одному основному потоці, але завдяки Event Loop може працювати з асинхронними подіями, не зупиняючи весь інтерфейс.",
        },
        {
          type: "text",
          content:
            "Коли асинхронна операція завершується, її callback або promise handler потрапляє в чергу, а Event Loop вирішує, коли саме її виконати.",
        },
        {
          type: "subtitle",
          content: "Простий приклад",
        },
        {
          type: "code",
          content: `console.log("1");
  
  setTimeout(() => {
    console.log("2");
  }, 0);
  
  console.log("3");`,
        },
        {
          type: "subtitle",
          content: "Результат",
        },
        {
          type: "code",
          content: `1
  3
  2`,
        },
        {
          type: "tip",
          label: "Пояснення",
          content:
            "Навіть якщо setTimeout має 0 мс, його callback не виконується миттєво. Спочатку завершиться поточний синхронний код.",
        },
      ],
    },
  
    {
      id: "javascript-and-api",
      title: "JavaScript і API",
      blocks: [
        {
          type: "text",
          content:
            "Одна з головних задач JavaScript на фронтенді — отримувати та відправляти дані на сервер. Найчастіше це робиться через HTTP API, яке повертає JSON.",
        },
        {
          type: "subtitle",
          content: "Приклад запиту",
        },
        {
          type: "code",
          content: `fetch("/api/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });`,
        },
        {
          type: "subtitle",
          content: "Той самий приклад через async / await",
        },
        {
          type: "code",
          content: `const loadUsers = async () => {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
  
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };`,
        },
        {
          type: "tip",
          label: "Порада",
          content:
            "Для вакансій frontend developer теми API, JSON, async/await, помилки запитів і обробка відповіді сервера — це база, яку питають дуже часто.",
        },
      ],
    },
  
    {
      id: "why-javascript-before-react",
      title: "Чому спочатку JavaScript, а потім React",
      blocks: [
        {
          type: "text",
          content:
            "React не замінює JavaScript. Навпаки, React вимагає хорошого розуміння JavaScript: функцій, масивів, об’єктів, асинхронності, області видимості, деструктуризації та іммутабельності.",
        },
        {
          type: "list",
          items: [
            "JS потрібен для роботи з даними",
            "JS потрібен для рендеру списків",
            "JS потрібен для обробки подій",
            "JS потрібен для API запитів",
            "JS потрібен для логіки компонентів",
          ],
        },
        {
          type: "warning",
          label: "Важливо",
          content:
            "Якщо JavaScript плаває, то React теж буде даватися важко. Тому відновити базу JS перед TypeScript і React — дуже правильне рішення.",
        },
      ],
    },
  ];

  export default jsOverviewSections;