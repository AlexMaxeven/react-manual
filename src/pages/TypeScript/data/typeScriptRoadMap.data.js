export const typeScriptRoadmapSections = [
    {
    id: "typescript-basics",
    title: "Базові типи",
    blocks: [
        {
        type: "text",
        content:
            "Почати варто з базових типів TypeScript. Вони дозволяють описувати типи змінних, параметрів функцій та результатів.",
        },
        {
        type: "list",
        items: [
            "string",
            "number",
            "boolean",
            "array",
            "tuple",
            "enum",
            "any",
            "unknown",
            "void",
            "never",
        ],
        },
        {
        type: "tip",
        label: "Фокус",
        content:
            "Навчися правильно типізувати змінні, функції та масиви — це основа TypeScript.",
        },
    ],
    },

    {
    id: "objects-and-types",
    title: "Об’єкти і типізація",
    blocks: [
        {
        type: "text",
        content:
            "Після базових типів важливо зрозуміти, як TypeScript описує структуру об’єктів.",
        },
        {
        type: "list",
        items: [
            "type alias",
            "interface",
            "optional properties",
            "readonly properties",
            "nested objects",
        ],
        },
    ],
    },

    {
    id: "functions",
    title: "Типізація функцій",
    blocks: [
        {
        type: "text",
        content:
            "TypeScript дозволяє строго типізувати параметри функцій і значення, які вони повертають.",
        },
        {
        type: "list",
        items: [
            "типи параметрів",
            "тип повернення функції",
            "optional parameters",
            "default parameters",
            "function overload",
        ],
        },
    ],
    },

    {
    id: "generics",
    title: "Generics",
    blocks: [
        {
        type: "text",
        content:
            "Generics дозволяють створювати універсальні функції, типи та компоненти, які працюють з різними типами даних.",
        },
        {
        type: "list",
        items: [
            "generic functions",
            "generic interfaces",
            "generic type aliases",
            "multiple generic parameters",
            "constraints (extends)",
            "keyof + generics",
        ],
        },
    ],
    },

    {
    id: "utility-types",
    title: "Utility types",
    blocks: [
        {
        type: "text",
        content:
            "TypeScript має набір вбудованих утилітних типів, які допомагають швидко змінювати структуру існуючих типів.",
        },
        {
        type: "list",
        items: [
            "Partial",
            "Required",
            "Readonly",
            "Pick",
            "Omit",
            "Record",
            "ReturnType",
        ],
        },
    ],
    },

    {
    id: "type-narrowing",
    title: "Type narrowing",
    blocks: [
        {
        type: "text",
        content:
            "Type narrowing дозволяє звузити тип змінної під час виконання коду.",
        },
        {
        type: "list",
        items: [
            "typeof",
            "instanceof",
            "in operator",
            "type guards",
            "discriminated unions",
        ],
        },
    ],
    },

    {
    id: "working-with-api",
    title: "Робота з API",
    blocks: [
        {
        type: "text",
        content:
            "У фронтенд-розробці TypeScript часто використовують для типізації даних, отриманих із серверу.",
        },
        {
        type: "list",
        items: [
            "типізація API response",
            "типізація fetch / axios",
            "Promise<T>",
            "error handling",
        ],
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "Навчися описувати API responses через interface або type.",
        },
    ],
    },

    {
    id: "typescript-in-react",
    title: "TypeScript у React",
    blocks: [
        {
        type: "text",
        content:
            "У React TypeScript використовується для типізації props, state, hooks та API.",
        },
        {
        type: "list",
        items: [
            "типізація props",
            "React.FC vs function components",
            "типізація useState",
            "типізація useRef",
            "типізація custom hooks",
            "generic components",
        ],
        },
    ],
    },

    {
    id: "ts-config",
    title: "Конфігурація TypeScript",
    blocks: [
        {
        type: "text",
        content:
            "Файл tsconfig.json визначає, як саме компілюється TypeScript і які правила перевірки використовуються.",
        },
        {
        type: "list",
        items: [
            "strict mode",
            "target",
            "module",
            "paths aliases",
            "skipLibCheck",
            "noImplicitAny",
        ],
        },
    ],
    },

    {
    id: "final-goal",
    title: "Кінцева мета",
    blocks: [
        {
        type: "text",
        content:
            "Мета вивчення TypeScript — не просто писати типи, а створювати більш безпечний і передбачуваний код.",
        },
        {
        type: "list",
        items: [
            "типізувати всі дані у проекті",
            "працювати з generics",
            "розуміти utility types",
            "типізувати API",
            "використовувати TypeScript у React",
        ],
        },
        {
        type: "tip",
        label: "Головна ідея",
        content:
            "TypeScript — це інструмент, який допомагає уникати помилок ще до запуску коду.",
        },
    ],
    },
];