export const reactBasicsSections = [
    {
    id: "components-and-ui",
    title: "Компоненти та UI",
    blocks: [
        {
        type: "text",
        content:
            "React будує інтерфейс із компонентів. Компонент — це окрема частина UI, яку можна перевикористовувати в різних місцях додатка.",
        },
        {
        type: "text",
        content:
            "Компонентом може бути кнопка, форма, картка товару, header, sidebar або навіть ціла сторінка.",
        },
        {
        type: "code",
        content: `const Welcome = () => {
    return <h1>Hello React</h1>;
};`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Головна ідея React — розбити великий інтерфейс на маленькі незалежні частини.",
        },
    ],
    },

    {
    id: "functional-components",
    title: "Функціональні компоненти",
    blocks: [
        {
        type: "text",
        content:
            "У сучасному React найчастіше використовують функціональні компоненти. Це звичайні JavaScript-функції, які повертають JSX.",
        },
        {
        type: "code",
        content: `function Header() {
    return <header>My App</header>;
}`,
        },
        {
        type: "code",
        content: `const Header = () => {
    return <header>My App</header>;
};`,
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "Назва компонента повинна починатися з великої літери. Інакше React сприйматиме його як HTML-тег.",
        },
    ],
    },

    {
    id: "jsx-basics",
    title: "JSX Basics",
    blocks: [
        {
        type: "text",
        content:
            "JSX — це синтаксис, який дозволяє писати HTML-подібну розмітку всередині JavaScript. Саме через JSX у React описують інтерфейс.",
        },
        {
        type: "code",
        content: `const element = <h1>Hello React</h1>;`,
        },
        {
        type: "list",
        items: [
            "JSX має повертати один кореневий елемент",
            "Усі теги потрібно закривати",
            "JavaScript вирази вставляються через { }",
            "class у JSX пишеться як className",
        ],
        },
        {
        type: "tip",
        label: "Порада",
        content:
            "JSX не є HTML. Це синтаксис, який під час збірки перетворюється на звичайний JavaScript.",
        },
    ],
    },

    {
    id: "props-basics",
    title: "Props",
    blocks: [
        {
        type: "text",
        content:
            "Props — це спосіб передавати дані від батьківського компонента до дочірнього. Вони працюють як параметри функції.",
        },
        {
        type: "code",
        content: `<User name="Alex" age={25} />`,
        },
        {
        type: "code",
        content: `const User = ({ name, age }) => {
    return <h2>{name} - {age}</h2>;
};`,
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "Props доступні лише для читання. Дочірній компонент не повинен змінювати їх напряму.",
        },
    ],
    },

    {
    id: "children-prop",
    title: "Children",
    blocks: [
        {
        type: "text",
        content:
            "children — це спеціальний prop, який містить те, що передається між відкриваючим і закриваючим тегами компонента.",
        },
        {
        type: "code",
        content: `<Card>
    <h2>Title</h2>
    <p>Description</p>
</Card>`,
        },
        {
        type: "code",
        content: `const Card = ({ children }) => {
    return <div>{children}</div>;
};`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Children робить компоненти більш гнучкими, бо дозволяє вкладати в них будь-який JSX.",
        },
    ],
    },

    {
    id: "rendering-lists",
    title: "Рендеринг списків",
    blocks: [
        {
        type: "text",
        content:
            "У React дуже часто потрібно показувати списки даних: користувачів, товарів, карток, постів. Для цього зазвичай використовують метод map().",
        },
        {
        type: "code",
        content: `const users = ["Alex", "John", "Kate"];

const UserList = () => {
    return (
    <ul>
        {users.map((user) => (
        <li key={user}>{user}</li>
        ))}
    </ul>
    );
};`,
        },
        {
        type: "warning",
        label: "Увага",
        content:
            "Кожен елемент списку повинен мати унікальний key. Це потрібно React для правильного оновлення DOM.",
        },
    ],
    },

    {
    id: "conditional-rendering",
    title: "Умовний рендеринг",
    blocks: [
        {
        type: "text",
        content:
            "React дозволяє показувати або приховувати частини інтерфейсу залежно від умов.",
        },
        {
        type: "subtitle",
        content: "Через if",
        },
        {
        type: "code",
        content: `if (!isLoggedIn) {
    return <p>Please log in</p>;
}

return <h1>Welcome</h1>;`,
        },
        {
        type: "subtitle",
        content: "Через ternary operator",
        },
        {
        type: "code",
        content: `{isLoggedIn ? <p>Welcome</p> : <p>Please log in</p>}`,
        },
        {
        type: "subtitle",
        content: "Через &&",
        },
        {
        type: "code",
        content: `{isAdmin && <button>Delete</button>}`,
        },
    ],
    },

    {
    id: "events-in-react",
    title: "Події у React",
    blocks: [
        {
        type: "text",
        content:
            "У React можна обробляти події користувача: кліки, введення в input, submit форми, hover та інші взаємодії.",
        },
        {
        type: "code",
        content: `const Button = () => {
    const handleClick = () => {
    console.log("Clicked");
    };

    return <button onClick={handleClick}>Click me</button>;
};`,
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "У React події передаються як функції. Не треба викликати їх одразу в JSX, якщо цього не потрібно.",
        },
    ],
    },

    {
    id: "state-basics",
    title: "State",
    blocks: [
        {
        type: "text",
        content:
            "State — це дані, які належать самому компоненту і можуть змінюватися під час роботи додатка.",
        },
        {
        type: "text",
        content:
            "Коли state змінюється, React перерендерює компонент і оновлює інтерфейс.",
        },
        {
        type: "code",
        content: `import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
    <button onClick={() => setCount(count + 1)}>
        {count}
    </button>
    );
};`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Props приходять ззовні, а state живе всередині компонента. Це одна з базових ідей React.",
        },
    ],
    },

    {
    id: "one-way-data-flow",
    title: "One-way Data Flow",
    blocks: [
        {
        type: "text",
        content:
            "У React дані зазвичай рухаються зверху вниз: від батьківського компонента до дочірнього через props.",
        },
        {
        type: "text",
        content:
            "Такий підхід робить структуру додатка більш передбачуваною і спрощує розуміння того, звідки беруться дані.",
        },
        {
        type: "tip",
        label: "Головна ідея",
        content:
            "Спочатку подумай, де повинні жити дані, а потім передавай їх униз через props.",
        },
    ],
    },

    {
    id: "react-thinking",
    title: "Як мислити в React",
    blocks: [
        {
        type: "text",
        content:
            "Щоб комфортно працювати з React, важливо мислити не сторінками, а компонентами, даними і станом.",
        },
        {
        type: "list",
        items: [
            "розбивати UI на невеликі компоненти",
            "передавати дані через props",
            "зберігати змінні дані у state",
            "описувати інтерфейс як функцію від даних",
            "не змінювати дані напряму без потреби",
        ],
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "React простіше зрозуміти, якщо сприймати його не як набір окремих хуків, а як систему: компоненти + props + state + render.",
        },
    ],
    },
];