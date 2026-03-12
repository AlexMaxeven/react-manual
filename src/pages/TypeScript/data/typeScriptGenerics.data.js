export const typeScriptGenericsSections = [
    {
    id: "what-are-generics",
    title: "Що таке generics",
    blocks: [
        {
        type: "text",
        content:
            "Generics у TypeScript дозволяють писати універсальний код, який працює з різними типами даних без втрати типізації.",
        },
        {
        type: "text",
        content:
            "Простіше кажучи, generic дає змогу передати тип як параметр. Завдяки цьому одна функція або структура може працювати і з рядками, і з числами, і з об’єктами, але TypeScript все одно буде знати точний тип.",
        },
        {
        type: "tip",
        label: "Ідея",
        content:
            "Generics потрібні тоді, коли логіка однакова, але тип даних може бути різним.",
        },
    ],
    },

    {
    id: "generic-function",
    title: "Generic функція",
    blocks: [
        {
        type: "text",
        content:
            "Найпростіший приклад generics — функція, яка повертає те саме значення, яке отримала.",
        },
        {
        type: "code",
        content: `function identity<T>(value: T): T {
    return value;
}`,
        },
        {
        type: "code",
        content: `const first = identity<string>("Hello");
const second = identity<number>(123);`,
        },
        {
        type: "text",
        content:
            "Тут T — це умовне ім’я типу. Під час виклику функції TypeScript підставляє конкретний тип замість T.",
        },
    ],
    },

    {
    id: "generic-type-inference",
    title: "Type inference у generics",
    blocks: [
        {
        type: "text",
        content:
            "У багатьох випадках TypeScript сам може зрозуміти, який тип потрібно підставити, тому явно писати його не обов’язково.",
        },
        {
        type: "code",
        content: `function identity<T>(value: T): T {
    return value;
}

const name = identity("Alex");
const age = identity(25);`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "У цьому прикладі TypeScript сам визначить, що name має тип string, а age — number.",
        },
    ],
    },

    {
    id: "generic-arrays",
    title: "Generics з масивами",
    blocks: [
        {
        type: "text",
        content:
            "Generics часто використовують для роботи з масивами, коли потрібно зберегти тип елементів.",
        },
        {
        type: "code",
        content: `function getFirstItem<T>(items: T[]): T | undefined {
    return items[0];
}`,
        },
        {
        type: "code",
        content: `const firstNumber = getFirstItem([10, 20, 30]);
const firstUser = getFirstItem([
    { id: 1, name: "Alex" },
    { id: 2, name: "John" },
]);`,
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "Generic дозволяє повернути саме той тип, який лежить у масиві, а не просто any.",
        },
    ],
    },

    {
    id: "generic-interfaces",
    title: "Generic interfaces",
    blocks: [
        {
        type: "text",
        content:
            "Interfaces теж можуть бути generic. Це корисно, коли структура однакова, але дані всередині можуть бути різних типів.",
        },
        {
        type: "code",
        content: `interface ApiResponse<T> {
    data: T;
    success: boolean;
}`,
        },
        {
        type: "code",
        content: `interface User {
    id: number;
    name: string;
}

const response: ApiResponse<User> = {
    data: {
    id: 1,
    name: "Alex",
    },
    success: true,
};`,
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "Це дуже популярний сценарій для типізації відповідей API.",
        },
    ],
    },

    {
    id: "generic-type-alias",
    title: "Generic type alias",
    blocks: [
        {
        type: "text",
        content:
            "Type alias також може бути generic. Це працює схоже до interface, але часто зручніше для коротших або комбінованих типів.",
        },
        {
        type: "code",
        content: `type ApiResponse<T> = {
    data: T;
    success: boolean;
};`,
        },
        {
        type: "code",
        content: `type User = {
    id: number;
    name: string;
};

const result: ApiResponse<User[]> = {
    data: [
    { id: 1, name: "Alex" },
    { id: 2, name: "John" },
    ],
    success: true,
};`,
        },
    ],
    },

    {
    id: "multiple-generic-params",
    title: "Кілька generic параметрів",
    blocks: [
        {
        type: "text",
        content:
            "У generic може бути не один, а кілька параметрів типу. Це корисно, коли потрібно працювати з двома або більше різними типами одночасно.",
        },
        {
        type: "code",
        content: `function pair<K, V>(key: K, value: V) {
    return { key, value };
}`,
        },
        {
        type: "code",
        content: `const item = pair<string, number>("age", 25);`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Тут K відповідає за тип key, а V — за тип value.",
        },
    ],
    },

    {
    id: "generic-constraints",
    title: "Обмеження generic (extends)",
    blocks: [
        {
        type: "text",
        content:
            "Іноді generic не повинен приймати будь-який тип. У такому випадку додають обмеження через extends.",
        },
        {
        type: "code",
        content: `function logLength<T extends { length: number }>(value: T): void {
    console.log(value.length);
}`,
        },
        {
        type: "code",
        content: `logLength("Hello");
logLength([1, 2, 3]);
logLength({ length: 10 });`,
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "Ця функція не прийме число, бо number не має властивості length.",
        },
    ],
    },

    {
    id: "keyof-with-generics",
    title: "keyof з generics",
    blocks: [
        {
        type: "text",
        content:
            "Generics часто комбінують з keyof, щоб безпечно працювати з ключами об’єктів.",
        },
        {
        type: "code",
        content: `function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}`,
        },
        {
        type: "code",
        content: `const user = {
    name: "Alex",
    age: 25,
};

const name = getValue(user, "name");
const age = getValue(user, "age");`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "TypeScript не дозволить передати ключ, якого немає в об’єкті. Це дуже корисно для безпечної роботи з динамічними полями.",
        },
    ],
    },

    {
    id: "generics-in-react",
    title: "Generics у React",
    blocks: [
        {
        type: "text",
        content:
            "У React generics зустрічаються при типізації reusable-компонентів, хуків, таблиць, списків та форм.",
        },
        {
        type: "code",
        content: `type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
    return <div>{items.map(renderItem)}</div>;
}`,
        },
        {
        type: "text",
        content:
            "Такий компонент можна використовувати з різними типами даних, і при цьому props залишаються строго типізованими.",
        },
    ],
    },

    {
    id: "generics-for-api",
    title: "Generics для API",
    blocks: [
        {
        type: "text",
        content:
            "Один із найкорисніших сценаріїв — reusable-функція для API, яка може повертати різні типи даних.",
        },
        {
        type: "code",
        content: `async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
}`,
        },
        {
        type: "code",
        content: `type User = {
    id: number;
    name: string;
};

const users = await fetchData<User[]>("/api/users");`,
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "Такий підхід дуже популярний у фронтенді: одна функція запиту і різні типи відповіді.",
        },
    ],
    },

    {
    id: "when-to-use-generics",
    title: "Коли варто використовувати generics",
    blocks: [
        {
        type: "list",
        items: [
            "коли одна логіка повинна працювати з різними типами",
            "коли потрібно зберегти точний тип вхідних і вихідних даних",
            "коли робиш reusable utility-функції",
            "коли типізуєш API response, таблиці, списки, хуки або форми",
        ],
        },
        {
        type: "warning",
        label: "Увага",
        content:
            "Не варто додавати generics просто 'бо так складніше і крутіше'. Якщо тип і так очевидний і не перевикористовується, generic може тільки ускладнити код.",
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
            "Починай з простих generic функцій",
            "Не використовуй generics там, де достатньо звичайного типу",
            "Поєднуй generics з interface, type, keyof і extends",
            "Для reusable API та компонентів generics дуже корисні",
            "Слідкуй, щоб generic робив код гнучкішим, а не заплутанішим",
        ],
        },
        {
        type: "tip",
        label: "Головна думка",
        content:
            "Generics — це спосіб зробити код одночасно гнучким і типізованим. Це одна з найсильніших можливостей TypeScript.",
        },
    ],
    },
];