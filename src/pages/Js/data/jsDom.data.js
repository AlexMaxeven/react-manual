export const jsDomSections = [
    {
    id: "what-is-dom",
    title: "Що таке DOM",
    blocks: [
        {
        type: "text",
        content:
            "DOM (Document Object Model) — це структура HTML-документа у вигляді дерева об'єктів, з яким JavaScript може взаємодіяти.",
        },
        {
        type: "text",
        content:
            "Кожен HTML-елемент стає об'єктом, який можна знайти, змінити або видалити через JavaScript.",
        },
        {
        type: "code",
        content: `<div id="app">
    <h1>Hello</h1>
</div>`,
        },
        {
        type: "tip",
        label: "Ідея",
        content:
            "DOM — це те, як браузер представляє HTML сторінку всередині JavaScript.",
        },
    ],
    },

    {
    id: "dom-tree",
    title: "DOM дерево",
    blocks: [
        {
        type: "text",
        content:
            "HTML документ представляється у вигляді дерева. Кожен елемент має батьківський елемент і може мати дочірні.",
        },
        {
        type: "code",
        content: `<body>
    <div>
    <h1>Title</h1>
    <p>Text</p>
    </div>
</body>`,
        },
        {
        type: "text",
        content:
            "У цьому прикладі body є батьком div, а div є батьком для h1 і p.",
        },
    ],
    },

    {
    id: "selecting-elements",
    title: "Пошук елементів",
    blocks: [
        {
        type: "text",
        content:
            "Щоб змінити DOM, спочатку потрібно знайти потрібний елемент.",
        },
        {
        type: "subtitle",
        content: "getElementById",
        },
        {
        type: "code",
        content: `const element = document.getElementById("title");`,
        },
        {
        type: "subtitle",
        content: "querySelector",
        },
        {
        type: "code",
        content: `const element = document.querySelector(".card");`,
        },
        {
        type: "subtitle",
        content: "querySelectorAll",
        },
        {
        type: "code",
        content: `const items = document.querySelectorAll(".item");`,
        },
        {
        type: "tip",
        label: "Порада",
        content:
            "У сучасному JavaScript найчастіше використовують querySelector і querySelectorAll.",
        },
    ],
    },

    {
    id: "changing-content",
    title: "Зміна контенту",
    blocks: [
        {
        type: "text",
        content:
            "Після того як елемент знайдений, його можна змінити.",
        },
        {
        type: "code",
        content: `const title = document.querySelector("h1");

title.textContent = "New title";`,
        },
        {
        type: "subtitle",
        content: "HTML всередині",
        },
        {
        type: "code",
        content: `element.innerHTML = "<strong>Hello</strong>";`,
        },
        {
        type: "warning",
        label: "Увага",
        content:
            "innerHTML може бути небезпечним, якщо вставляти дані користувача.",
        },
    ],
    },

    {
    id: "changing-attributes",
    title: "Атрибути елементів",
    blocks: [
        {
        type: "text",
        content:
            "JavaScript може змінювати HTML атрибути.",
        },
        {
        type: "code",
        content: `const img = document.querySelector("img");

img.src = "image.jpg";
img.alt = "Example image";`,
        },
        {
        type: "code",
        content: `element.setAttribute("data-id", "123");`,
        },
    ],
    },

    {
    id: "classes",
    title: "Робота з класами",
    blocks: [
        {
        type: "text",
        content:
            "Класи часто використовують для стилів або станів UI.",
        },
        {
        type: "code",
        content: `element.classList.add("active");`,
        },
        {
        type: "code",
        content: `element.classList.remove("active");`,
        },
        {
        type: "code",
        content: `element.classList.toggle("active");`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "classList — найзручніший спосіб працювати з класами.",
        },
    ],
    },

    {
    id: "creating-elements",
    title: "Створення елементів",
    blocks: [
        {
        type: "text",
        content:
            "JavaScript може створювати нові DOM-елементи.",
        },
        {
        type: "code",
        content: `const div = document.createElement("div");

div.textContent = "Hello";

document.body.appendChild(div);`,
        },
        {
        type: "text",
        content:
            "Це дозволяє динамічно створювати інтерфейс.",
        },
    ],
    },

    {
    id: "events",
    title: "Події",
    blocks: [
        {
        type: "text",
        content:
            "Події дозволяють реагувати на дії користувача.",
        },
        {
        type: "code",
        content: `const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Clicked");
});`,
        },
        {
        type: "list",
        items: [
            "click",
            "input",
            "change",
            "submit",
            "keydown",
        ],
        },
    ],
    },

    {
    id: "event-object",
    title: "Event object",
    blocks: [
        {
        type: "text",
        content:
            "Кожна подія передає спеціальний об'єкт event з інформацією.",
        },
        {
        type: "code",
        content: `button.addEventListener("click", (event) => {
    console.log(event.target);
});`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "event.target — це елемент, який викликав подію.",
        },
    ],
    },

    {
    id: "dom-performance",
    title: "Продуктивність DOM",
    blocks: [
        {
        type: "text",
        content:
            "Часті зміни DOM можуть бути повільними, бо браузеру потрібно перераховувати layout і перерисовувати сторінку.",
        },
        {
        type: "list",
        items: [
            "уникати зайвих змін DOM",
            "групувати зміни",
            "використовувати DocumentFragment",
        ],
        },
    ],
    },

    {
    id: "virtual-dom",
    title: "Virtual DOM у React",
    blocks: [
        {
        type: "text",
        content:
            "React використовує Virtual DOM — копію DOM у пам'яті. React порівнює старий і новий стан і змінює лише потрібні частини реального DOM.",
        },
        {
        type: "text",
        content:
            "Це робить оновлення інтерфейсу швидшим і передбачуванішим.",
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "Саме тому у React майже ніколи не потрібно змінювати DOM напряму.",
        },
    ],
    },

    {
    id: "dom-in-react",
    title: "DOM у React",
    blocks: [
        {
        type: "text",
        content:
            "У React DOM зазвичай змінюється через state або props.",
        },
        {
        type: "code",
        content: `const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
    {count}
</button>`,
        },
        {
        type: "text",
        content:
            "React сам вирішує, як оновити DOM після зміни state.",
        },
    ],
    },

    {
    id: "refs",
    title: "Refs",
    blocks: [
        {
        type: "text",
        content:
            "Іноді потрібно отримати доступ до реального DOM-елемента. Для цього в React використовують refs.",
        },
        {
        type: "code",
        content: `const inputRef = useRef(null);

<input ref={inputRef} />`,
        },
        {
        type: "code",
        content: `inputRef.current.focus();`,
        },
        {
        type: "warning",
        label: "Увага",
        content:
            "Refs потрібно використовувати тільки тоді, коли це справді необхідно.",
        },
    ],
    },
];