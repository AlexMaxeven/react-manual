export const typeScriptInterfacesSections = [
    {
    id: "what-is-interface",
    title: "Що таке interface",
    blocks: [
        {
        type: "text",
        content:
            "Interface у TypeScript використовується для опису форми об’єкта. Він допомагає задати, які саме поля повинен мати об’єкт і яких типів мають бути ці поля.",
        },
        {
        type: "text",
        content:
            "Interfaces часто використовують для типізації даних з API, props у React-компонентах, конфігурацій та складних структур даних.",
        },
        {
        type: "code",
        content: `interface User {
    id: number;
    name: string;
    email: string;
}`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Якщо коротко: interface — це контракт для об’єкта. Він описує, що саме в цьому об’єкті повинно бути.",
        },
    ],
    },

    {
    id: "basic-object-typing",
    title: "Типізація об’єктів через interface",
    blocks: [
        {
        type: "text",
        content:
            "Після створення interface його можна використовувати як тип для змінних, параметрів функцій або результатів.",
        },
        {
        type: "code",
        content: `interface User {
    id: number;
    name: string;
    email: string;
}

const user: User = {
    id: 1,
    name: "Alex",
    email: "alex@example.com",
};`,
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "Якщо в об’єкті не вистачає обов’язкового поля або тип поля неправильний, TypeScript покаже помилку.",
        },
    ],
    },

    {
    id: "optional-properties",
    title: "Optional properties",
    blocks: [
        {
        type: "text",
        content:
            "Деякі поля можуть бути необов’язковими. Для цього після назви властивості ставлять знак ?.",
        },
        {
        type: "code",
        content: `interface User {
    id: number;
    name: string;
    age?: number;
}`,
        },
        {
        type: "code",
        content: `const firstUser: User = {
    id: 1,
    name: "Alex",
};

const secondUser: User = {
    id: 2,
    name: "John",
    age: 30,
};`,
        },
        {
        type: "tip",
        label: "Порада",
        content:
            "Необов’язкові поля дуже часто зустрічаються у відповідях API, коли частина даних може бути відсутньою.",
        },
    ],
    },

    {
    id: "readonly-properties",
    title: "Readonly properties",
    blocks: [
        {
        type: "text",
        content:
            "Властивості можна зробити доступними тільки для читання через readonly. Після створення об’єкта змінити таке поле вже не вийде.",
        },
        {
        type: "code",
        content: `interface User {
    readonly id: number;
    name: string;
}

const user: User = {
    id: 1,
    name: "Alex",
};

// user.id = 2; // помилка`,
        },
        {
        type: "warning",
        label: "Увага",
        content:
            "Readonly не робить весь об’єкт повністю незмінним магічно, але забороняє змінювати конкретні поля через цей тип.",
        },
    ],
    },

    {
    id: "interface-in-functions",
    title: "Interface у функціях",
    blocks: [
        {
        type: "text",
        content:
            "Interface часто використовують для параметрів функцій. Це зручно, коли функція приймає об’єкт із певною структурою.",
        },
        {
        type: "code",
        content: `interface User {
    name: string;
    age: number;
}

function printUser(user: User): void {
    console.log(user.name, user.age);
}`,
        },
        {
        type: "code",
        content: `printUser({
    name: "Alex",
    age: 25,
});`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Такий підхід робить функції більш передбачуваними: одразу видно, які дані вони очікують.",
        },
    ],
    },

    {
    id: "interface-for-api",
    title: "Interface для API",
    blocks: [
        {
        type: "text",
        content:
            "Один з найпоширеніших сценаріїв — опис відповіді API через interface. Це допомагає безпечніше працювати з серверними даними.",
        },
        {
        type: "code",
        content: `interface User {
    id: number;
    name: string;
    email: string;
}

interface UsersResponse {
    data: User[];
    total: number;
}`,
        },
        {
        type: "code",
        content: `const loadUsers = async (): Promise<UsersResponse> => {
    const response = await fetch("/api/users");
    return response.json();
};`,
        },
        {
        type: "tip",
        label: "Порада",
        content:
            "Якщо ти типізуєш відповідь API, редактор краще підказує поля, а помилок при роботі з даними стає менше.",
        },
    ],
    },

    {
    id: "interface-extends",
    title: "Extends",
    blocks: [
        {
        type: "text",
        content:
            "Interface може наслідувати інший interface через extends. Це зручно, коли є базова структура і потрібно її розширити.",
        },
        {
        type: "code",
        content: `interface Person {
    name: string;
    email: string;
}

interface Admin extends Person {
    role: string;
    permissions: string[];
}`,
        },
        {
        type: "code",
        content: `const admin: Admin = {
    name: "Alex",
    email: "alex@example.com",
    role: "superadmin",
    permissions: ["read", "write", "delete"],
};`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Extends допомагає не дублювати однакові поля і будувати більш чисту структуру типів.",
        },
    ],
    },

    {
    id: "interface-vs-type",
    title: "Interface vs Type",
    blocks: [
        {
        type: "text",
        content:
            "І interface, і type можуть описувати структуру об’єкта. У багатьох простих випадках вони схожі, але мають різні сценарії використання.",
        },
        {
        type: "subtitle",
        content: "Interface",
        },
        {
        type: "code",
        content: `interface User {
    name: string;
    age: number;
}`,
        },
        {
        type: "subtitle",
        content: "Type",
        },
        {
        type: "code",
        content: `type User = {
    name: string;
    age: number;
};`,
        },
        {
        type: "list",
        items: [
            "interface зручно використовувати для об’єктів і класів",
            "type гнучкіший для union, intersection та складних комбінацій типів",
            "у React-проєктах використовують і те, і те",
        ],
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "Для опису об’єктів, props і API response interface часто виглядає дуже природно. Для union type або складних комбінацій зручніше type.",
        },
    ],
    },

    {
    id: "interface-in-react",
    title: "Interface у React",
    blocks: [
        {
        type: "text",
        content:
            "У React interface часто використовують для типізації props. Це дозволяє чітко описати, які дані очікує компонент.",
        },
        {
        type: "code",
        content: `interface UserCardProps {
    name: string;
    age: number;
    isOnline?: boolean;
}

const UserCard = ({ name, age, isOnline }: UserCardProps) => {
    return (
    <div>
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
    );
};`,
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "Коли props типізовані, компонент стає зрозумілішим і безпечнішим: складніше передати неправильні дані.",
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
            "Використовуй interface для опису об’єктів, props і API response",
            "Додавай optional поля тільки там, де вони справді можуть бути відсутні",
            "Використовуй readonly для полів, які не повинні змінюватись",
            "Не створюй занадто великі interface без потреби — краще ділити на менші",
            "Якщо структура стає дуже складною, подумай чи не краще використати type",
        ],
        },
        {
        type: "tip",
        label: "Головна думка",
        content:
            "Interface потрібен не просто для синтаксису. Його задача — зробити структуру даних зрозумілою, передбачуваною і безпечнішою в роботі.",
        },
    ],
    },
];