export const jsRoadmapSections = [
    {
    id: "javascript-foundation",
    title: "База JavaScript",
    blocks: [
        {
        type: "text",
        content:
            "Перший етап — зрозуміти базові принципи JavaScript. Це фундамент, на якому будується вся подальша робота у фронтенді.",
        },
        {
        type: "list",
        items: [
            "змінні (let, const)",
            "типи даних",
            "оператори",
            "умови (if / switch)",
            "цикли",
            "функції",
        ],
        },
        {
        type: "tip",
        label: "Фокус",
        content:
            "На цьому етапі важливо зрозуміти синтаксис і логіку мови.",
        },
    ],
    },

    {
    id: "working-with-data",
    title: "Робота з даними",
    blocks: [
        {
        type: "text",
        content:
            "У реальному фронтенді майже вся логіка будується навколо роботи з масивами та об'єктами.",
        },
        {
        type: "list",
        items: [
            "об'єкти",
            "масиви",
            "map",
            "filter",
            "find",
            "reduce",
            "destructuring",
            "spread оператор",
        ],
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "Вміння працювати з масивами і об'єктами — один з найважливіших навиків у JavaScript.",
        },
    ],
    },

    {
    id: "functions-and-scope",
    title: "Функції та scope",
    blocks: [
        {
        type: "text",
        content:
            "JavaScript багато в чому побудований навколо функцій. Розуміння scope і функцій дуже важливе.",
        },
        {
        type: "list",
        items: [
            "function declaration",
            "arrow functions",
            "scope",
            "closure",
            "this",
        ],
        },
    ],
    },

    {
    id: "modules-and-structure",
    title: "Модулі і структура коду",
    blocks: [
        {
        type: "text",
        content:
            "Коли код стає більшим, важливо вміти розбивати його на модулі.",
        },
        {
        type: "list",
        items: [
            "export / import",
            "структура файлів",
            "розділення логіки",
            "організація модулів",
        ],
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "Модулі дозволяють створювати чисту структуру проєкту.",
        },
    ],
    },

    {
    id: "async-javascript",
    title: "Асинхронний JavaScript",
    blocks: [
        {
        type: "text",
        content:
            "Асинхронність — одна з найважливіших тем для сучасного фронтенду.",
        },
        {
        type: "list",
        items: [
            "callbacks",
            "promises",
            "then / catch",
            "async / await",
            "fetch API",
            "робота з API",
        ],
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "Практично всі фронтенд-додатки працюють з API, тому асинхронний код використовується постійно.",
        },
    ],
    },

    {
    id: "dom-manipulation",
    title: "DOM",
    blocks: [
        {
        type: "text",
        content:
            "JavaScript у браузері працює з DOM — структурою HTML сторінки.",
        },
        {
        type: "list",
        items: [
            "DOM tree",
            "querySelector",
            "зміна елементів",
            "події (events)",
            "робота з формами",
        ],
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "Розуміння DOM допомагає краще зрозуміти, як працює React.",
        },
    ],
    },

    {
    id: "modern-javascript",
    title: "Сучасний JavaScript",
    blocks: [
        {
        type: "text",
        content:
            "Сучасний JavaScript (ES6+) значно покращив мову і зробив код простішим.",
        },
        {
        type: "list",
        items: [
            "arrow functions",
            "destructuring",
            "spread / rest",
            "optional chaining",
            "nullish coalescing",
            "modules",
        ],
        },
    ],
    },

    {
    id: "error-handling",
    title: "Обробка помилок",
    blocks: [
        {
        type: "text",
        content:
            "Надійний код повинен правильно обробляти помилки.",
        },
        {
        type: "list",
        items: [
            "try / catch",
            "обробка помилок у Promise",
            "обробка помилок API",
        ],
        },
    ],
    },

    {
    id: "performance",
    title: "Продуктивність",
    blocks: [
        {
        type: "text",
        content:
            "Коли додаток стає більшим, важливо думати про продуктивність.",
        },
        {
        type: "list",
        items: [
            "уникати зайвих операцій",
            "мінімізувати DOM зміни",
            "робота з великими масивами",
        ],
        },
    ],
    },

    {
    id: "javascript-for-react",
    title: "JavaScript для React",
    blocks: [
        {
        type: "text",
        content:
            "Щоб комфортно працювати з React, потрібно добре знати кілька ключових можливостей JavaScript.",
        },
        {
        type: "list",
        items: [
            "arrow functions",
            "map / filter",
            "destructuring",
            "spread оператор",
            "modules",
            "async / await",
        ],
        },
        {
        type: "tip",
        label: "Головна думка",
        content:
            "React — це просто бібліотека над JavaScript, тому сильний JavaScript значно спрощує роботу з React.",
        },
    ],
    },

    {
    id: "next-step",
    title: "Наступний крок",
    blocks: [
        {
        type: "text",
        content:
            "Після впевненого JavaScript логічний наступний крок — перейти до TypeScript і React.",
        },
        {
        type: "list",
        items: [
            "TypeScript",
            "React",
            "робота з API",
            "архітектура фронтенд-проєктів",
        ],
        },
        {
        type: "tip",
        label: "Підсумок",
        content:
            "JavaScript — це фундамент. React, TypeScript та інші інструменти лише розширюють його можливості.",
        },
    ],
    },
];