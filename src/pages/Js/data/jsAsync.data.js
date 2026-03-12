export const jsAsyncSections = [
    {
    id: "what-is-async",
    title: "Що таке асинхронність",
    blocks: [
        {
        type: "text",
        content:
            "Асинхронність у JavaScript дозволяє виконувати довгі операції без блокування основного потоку. Це означає, що сторінка не зависає, поки чекає відповідь від сервера, таймер або іншу зовнішню дію.",
        },
        {
        type: "text",
        content:
            "Без асинхронності інтерфейс міг би зависати під час кожного запиту до API або довгого обчислення.",
        },
        {
        type: "tip",
        label: "Ідея",
        content:
            "Асинхронність потрібна, щоб JavaScript міг чекати результат і при цьому не зупиняти роботу інтерфейсу.",
        },
    ],
    },

    {
    id: "sync-vs-async",
    title: "Синхронний і асинхронний код",
    blocks: [
        {
        type: "text",
        content:
            "Синхронний код виконується рядок за рядком. Асинхронний код дозволяє відкласти частину роботи і повернутися до неї пізніше.",
        },
        {
        type: "subtitle",
        content: "Синхронний приклад",
        },
        {
        type: "code",
        content: `console.log("1");
console.log("2");
console.log("3");`,
        },
        {
        type: "subtitle",
        content: "Асинхронний приклад",
        },
        {
        type: "code",
        content: `console.log("1");

setTimeout(() => {
    console.log("2");
}, 1000);

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
        type: "warning",
        label: "Важливо",
        content:
            "Асинхронна функція не виконується одразу в тому місці, де вона написана. Вона ставиться в чергу і виконується пізніше.",
        },
    ],
    },

    {
    id: "setTimeout",
    title: "setTimeout",
    blocks: [
        {
        type: "text",
        content:
            "setTimeout — це базовий приклад асинхронної операції. Він дозволяє виконати функцію через певний час.",
        },
        {
        type: "code",
        content: `setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);`,
        },
        {
        type: "text",
        content:
            "Число 2000 означає 2000 мілісекунд, тобто 2 секунди.",
        },
    ],
    },

    {
    id: "callbacks",
    title: "Callbacks",
    blocks: [
        {
        type: "text",
        content:
            "Callback — це функція, яку передають в іншу функцію, щоб викликати її пізніше.",
        },
        {
        type: "code",
        content: `function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

greet("Alex", () => {
    console.log("Callback executed");
});`,
        },
        {
        type: "text",
        content:
            "Callbacks часто використовувалися раніше для асинхронного коду, але у великих ланцюжках вони роблять код менш читабельним.",
        },
        {
        type: "warning",
        label: "Увага",
        content:
            "Вкладені callbacks можуть швидко перетворити код на callback hell — складну вкладену структуру, яку важко підтримувати.",
        },
    ],
    },

    {
    id: "promises",
    title: "Promises",
    blocks: [
        {
        type: "text",
        content:
            "Promise — це об’єкт, який представляє майбутній результат асинхронної операції.",
        },
        {
        type: "list",
        items: [
            "pending — очікування",
            "fulfilled — успішне виконання",
            "rejected — помилка",
        ],
        },
        {
        type: "code",
        content: `const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Done");
    }, 1000);
});`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Promise дозволяє описати, що робити після успішного завершення або після помилки.",
        },
    ],
    },

    {
    id: "then-catch-finally",
    title: "then, catch, finally",
    blocks: [
        {
        type: "text",
        content:
            "Методи then, catch і finally використовуються для роботи з Promise.",
        },
        {
        type: "code",
        content: `fetch("/api/users")
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    })
    .catch((error) => {
    console.error(error);
    })
    .finally(() => {
    console.log("Request finished");
    });`,
        },
        {
        type: "list",
        items: [
            "then — виконується при успіху",
            "catch — виконується при помилці",
            "finally — виконується завжди",
        ],
        },
    ],
    },

    {
    id: "async-await",
    title: "async / await",
    blocks: [
        {
        type: "text",
        content:
            "async / await — це сучасний і більш зручний спосіб працювати з асинхронним кодом. Він робить його схожим на звичайний синхронний код.",
        },
        {
        type: "code",
        content: `async function loadUsers() {
    const response = await fetch("/api/users");
    const data = await response.json();

    return data;
}`,
        },
        {
        type: "text",
        content:
            "Ключове слово async робить функцію асинхронною, а await змушує чекати результат Promise.",
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "У сучасному фронтенді async / await використовують набагато частіше, ніж then/catch chains.",
        },
    ],
    },

    {
    id: "try-catch",
    title: "try / catch",
    blocks: [
        {
        type: "text",
        content:
            "При роботі з async / await помилки зазвичай обробляють через try / catch.",
        },
        {
        type: "code",
        content: `async function loadUsers() {
    try {
    const response = await fetch("/api/users");
    const data = await response.json();

    console.log(data);
    } catch (error) {
    console.error("Request failed:", error);
    }
}`,
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "Без try / catch помилки в async коді можуть залишитися необробленими і викликати неочікувану поведінку.",
        },
    ],
    },

    {
    id: "fetch-api",
    title: "Fetch API",
    blocks: [
        {
        type: "text",
        content:
            "Fetch API використовується для відправки HTTP-запитів із браузера. Це один із найпоширеніших інструментів у фронтенді.",
        },
        {
        type: "subtitle",
        content: "GET-запит",
        },
        {
        type: "code",
        content: `const response = await fetch("/api/users");
const data = await response.json();`,
        },
        {
        type: "subtitle",
        content: "POST-запит",
        },
        {
        type: "code",
        content: `await fetch("/api/users", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
    name: "Alex",
    }),
});`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Fetch повертає Promise, тому його зазвичай використовують з await або then.",
        },
    ],
    },

    {
    id: "response-json",
    title: "Робота з JSON-відповіддю",
    blocks: [
        {
        type: "text",
        content:
            "Дані з API часто приходять у форматі JSON. Щоб перетворити відповідь у JavaScript-об’єкт, потрібно викликати response.json().",
        },
        {
        type: "code",
        content: `const response = await fetch("/api/users");
const data = await response.json();

console.log(data);`,
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "response.json() теж є асинхронною операцією, тому її теж потрібно await.",
        },
    ],
    },

    {
    id: "loading-error-success",
    title: "Loading, Error, Success",
    blocks: [
        {
        type: "text",
        content:
            "У реальному фронтенді асинхронні запити майже завжди мають три основні стани: завантаження, успіх і помилка.",
        },
        {
        type: "list",
        items: [
            "loading — поки чекаємо відповідь",
            "success — дані успішно отримано",
            "error — сталася помилка",
        ],
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "У React ці стани зазвичай зберігають у state і показують різний UI залежно від результату запиту.",
        },
    ],
    },

    {
    id: "promise-all",
    title: "Promise.all",
    blocks: [
        {
        type: "text",
        content:
            "Promise.all дозволяє чекати кілька асинхронних операцій одночасно.",
        },
        {
        type: "code",
        content: `const [users, posts] = await Promise.all([
    fetch("/api/users").then((res) => res.json()),
    fetch("/api/posts").then((res) => res.json()),
]);`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Це корисно, коли потрібно одночасно завантажити кілька незалежних наборів даних.",
        },
    ],
    },

    {
    id: "event-loop-basics",
    title: "Event Loop",
    blocks: [
        {
        type: "text",
        content:
            "JavaScript виконується в одному потоці, але може працювати з асинхронними операціями завдяки Event Loop.",
        },
        {
        type: "text",
        content:
            "Коли асинхронна операція завершується, її callback або Promise handler ставиться в чергу, а Event Loop вирішує, коли його виконати.",
        },
        {
        type: "code",
        content: `console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");`,
        },
        {
        type: "subtitle",
        content: "Результат",
        },
        {
        type: "code",
        content: `Start
End
Timeout`,
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "Навіть setTimeout з 0 мс не виконується миттєво. Спочатку завершується синхронний код.",
        },
    ],
    },

    {
    id: "async-in-react",
    title: "Асинхронність у React",
    blocks: [
        {
        type: "text",
        content:
            "У React асинхронність найчастіше використовується для завантаження даних з API, form submit, авторизації, пошуку, фільтрації та інших дій користувача.",
        },
        {
        type: "code",
        content: `useEffect(() => {
    const loadUsers = async () => {
    try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
    } catch (error) {
        console.error(error);
    }
    };

    loadUsers();
}, []);`,
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "Для React дуже важливо розуміти async / await, fetch, помилки запитів і стани loading / error / success.",
        },
    ],
    },

    {
    id: "best-practices",
    title: "Практичні поради",
    blocks: [
        {
        type: "list",
        items: [
            "Для сучасного коду використовуй async / await",
            "Обробляй помилки через try / catch",
            "Пам’ятай про loading / error / success стани",
            "Використовуй Promise.all для паралельних незалежних запитів",
            "Не забувай, що response.json() теж асинхронний",
        ],
        },
        {
        type: "tip",
        label: "Головна думка",
        content:
            "Асинхронність — це не окрема рідкісна тема, а щоденна база для фронтенд-розробки.",
        },
    ],
    },
];