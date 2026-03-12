export const jsFundamentalsSections = [
    {
    id: "variables",
    title: "Змінні: let, const, var",
    blocks: [
        {
        type: "text",
        content:
            "У JavaScript змінні створюються через let, const або var. У сучасному коді зазвичай використовують let і const.",
        },
        {
        type: "code",
        content: `let count = 10;
const name = "Alex";`,
        },
        {
        type: "list",
        items: [
            "const — значення не можна переприсвоїти",
            "let — значення можна змінювати",
            "var — старий спосіб, краще не використовувати",
        ],
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "const забороняє змінювати саме посилання на значення, але не обов'язково сам об'єкт.",
        },
    ],
    },

    {
    id: "data-types",
    title: "Типи даних",
    blocks: [
        {
        type: "text",
        content:
            "JavaScript має кілька базових типів даних, які використовуються майже у всіх програмах.",
        },
        {
        type: "list",
        items: [
            "string",
            "number",
            "boolean",
            "null",
            "undefined",
            "object",
            "array",
        ],
        },
        {
        type: "code",
        content: `const name = "Alex";
const age = 25;
const isAdmin = true;
const user = { id: 1 };
const list = [1, 2, 3];`,
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
            "Функції — це основний спосіб організувати логіку в JavaScript.",
        },
        {
        type: "subtitle",
        content: "Function declaration",
        },
        {
        type: "code",
        content: `function sum(a, b) {
    return a + b;
}`,
        },
        {
        type: "subtitle",
        content: "Arrow function",
        },
        {
        type: "code",
        content: `const sum = (a, b) => {
    return a + b;
};`,
        },
        {
        type: "tip",
        label: "Порада",
        content:
            "У сучасному JavaScript і React частіше використовують arrow functions.",
        },
    ],
    },

    {
    id: "objects",
    title: "Об’єкти",
    blocks: [
        {
        type: "text",
        content:
            "Об’єкти дозволяють зберігати дані у вигляді пар ключ-значення.",
        },
        {
        type: "code",
        content: `const user = {
    name: "Alex",
    age: 25,
};`,
        },
        {
        type: "code",
        content: `console.log(user.name);`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Об’єкти дуже часто використовуються для опису даних, які приходять з API.",
        },
    ],
    },

    {
    id: "arrays",
    title: "Масиви",
    blocks: [
        {
        type: "text",
        content:
            "Масиви використовуються для зберігання списків даних.",
        },
        {
        type: "code",
        content: `const users = ["Alex", "John", "Kate"];`,
        },
        {
        type: "subtitle",
        content: "Основні методи",
        },
        {
        type: "list",
        items: [
            "map",
            "filter",
            "find",
            "forEach",
            "reduce",
        ],
        },
        {
        type: "code",
        content: `const numbers = [1,2,3];

const doubled = numbers.map(n => n * 2);`,
        },
    ],
    },

    {
    id: "destructuring",
    title: "Destructuring",
    blocks: [
        {
        type: "text",
        content:
            "Destructuring дозволяє зручно витягувати значення з об’єктів або масивів.",
        },
        {
        type: "subtitle",
        content: "Object destructuring",
        },
        {
        type: "code",
        content: `const user = { name: "Alex", age: 25 };

const { name, age } = user;`,
        },
        {
        type: "subtitle",
        content: "Array destructuring",
        },
        {
        type: "code",
        content: `const [first, second] = [10, 20];`,
        },
    ],
    },

    {
    id: "spread-operator",
    title: "Spread оператор",
    blocks: [
        {
        type: "text",
        content:
            "Spread оператор (...) дозволяє копіювати або об’єднувати об’єкти та масиви.",
        },
        {
        type: "code",
        content: `const user = { name: "Alex", age: 25 };

const updatedUser = {
    ...user,
    age: 26,
};`,
        },
        {
        type: "code",
        content: `const arr = [1,2];
const newArr = [...arr, 3];`,
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "Spread дуже часто використовується в React для оновлення state.",
        },
    ],
    },

    {
    id: "modules",
    title: "Модулі",
    blocks: [
        {
        type: "text",
        content:
            "JavaScript модулі дозволяють розбивати код на окремі файли.",
        },
        {
        type: "subtitle",
        content: "Export",
        },
        {
        type: "code",
        content: `export const sum = (a,b) => a + b;`,
        },
        {
        type: "subtitle",
        content: "Import",
        },
        {
        type: "code",
        content: `import { sum } from "./math";`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Модулі дозволяють організовувати структуру проєкту.",
        },
    ],
    },

    {
    id: "immutability",
    title: "Immutability",
    blocks: [
        {
        type: "text",
        content:
            "У сучасному фронтенді важливо не змінювати дані напряму, а створювати нові об’єкти або масиви.",
        },
        {
        type: "code",
        content: `const arr = [1,2,3];

const newArr = [...arr, 4];`,
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "Прямі зміни даних можуть призвести до проблем у React state.",
        },
    ],
    },

    {
    id: "thinking-in-js",
    title: "Як мислити в JavaScript",
    blocks: [
        {
        type: "text",
        content:
            "JavaScript — це мова, де більшість логіки будується навколо функцій, об’єктів і масивів.",
        },
        {
        type: "list",
        items: [
            "розбивай логіку на функції",
            "працюй з масивами через map/filter",
            "використовуй destructuring",
            "уникай мутації даних",
        ],
        },
        {
        type: "tip",
        label: "Головна ідея",
        content:
            "Хороший JavaScript код простий, читабельний і розбитий на маленькі функції.",
        },
    ],
    },
];