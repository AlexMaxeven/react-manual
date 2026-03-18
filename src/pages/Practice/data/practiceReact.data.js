export const practiceReactIntro = {
    title: "Practice React",
    description:
    "Тут зібрана практика по React у 3 рівнях: базові тестові питання, доповнення коду та написання власного коду.",
};

export const practiceReactLevels = [
    { id: "level-1", label: "Level 1" },
    { id: "level-2", label: "Level 2" },
    { id: "level-3", label: "Level 3" },
];

export const practiceReactLevel1Tasks = [
    {
    id: 1,
    question: "Що таке React component?",
    options: [
        "CSS-клас",
        "Повторно використовувана частина UI",
        "Тип змінної",
        "HTML-атрибут",
    ],
    answer: "Повторно використовувана частина UI",
    explanation:
        "React component — це незалежна, повторно використовувана частина інтерфейсу.",
    },
    {
    id: 2,
    question: "Який хук використовується для локального state?",
    options: ["useEffect", "useState", "useMemo", "useRef"],
    answer: "useState",
    explanation:
        "useState використовується для створення локального стану в компоненті.",
    },
    {
    id: 3,
    question: "Що таке props у React?",
    options: [
        "Локальний state",
        "Дані, які передаються в компонент",
        "CSS-стилі",
        "Вбудовані методи масиву",
    ],
    answer: "Дані, які передаються в компонент",
    explanation:
        "Props — це дані, які компонент отримує від батьківського компонента.",
    },
    {
    id: 4,
    question: "Який хук використовується для побічних ефектів?",
    options: ["useState", "useEffect", "useContext", "useId"],
    answer: "useEffect",
    explanation:
        "useEffect використовується для побічних ефектів: запитів, таймерів, підписок тощо.",
    },
    {
    id: 5,
    question: "Що потрібно додавати в списках при render через map?",
    options: ["id", "ref", "key", "name"],
    answer: "key",
    explanation:
        "key потрібен React для коректного відстеження елементів у списку.",
    },
    {
    id: 6,
    question: "Що таке controlled input?",
    options: [
        "Input без value",
        "Input, який повністю керується через React state",
        "Input без onChange",
        "Input тільки для numbers",
    ],
    answer: "Input, який повністю керується через React state",
    explanation:
        "Controlled input має value із state і змінюється через onChange.",
    },
    {
    id: 7,
    question: "Що зазвичай повертає React component?",
    options: ["Масив чисел", "JSX", "Promise", "Boolean"],
    answer: "JSX",
    explanation:
        "React component зазвичай повертає JSX-розмітку для відображення UI.",
    },
    {
    id: 8,
    question: "Що таке lifting state up?",
    options: [
        "Видалення state",
        "Перенесення state в батьківський компонент",
        "Перенесення CSS в окремий файл",
        "Оптимізація з useMemo",
    ],
    answer: "Перенесення state в батьківський компонент",
    explanation:
        "Lifting state up — це підйом спільного state в найближчий спільний батьківський компонент.",
    },
    {
    id: 9,
    question: "Який атрибут використовується для обробки кліку в React?",
    options: ["onclick", "on-click", "onClick", "click"],
    answer: "onClick",
    explanation:
        "У React використовується camelCase-синтаксис, тому правильний варіант — onClick.",
    },
    {
    id: 10,
    question: "Що використовується для умовного рендеру в JSX?",
    options: ["if, ternary, &&", "while", "switch тільки", "for loop"],
    answer: "if, ternary, &&",
    explanation:
        "У React часто використовують if, тернарний оператор і && для умовного рендеру.",
    },
];

export const practiceReactLevel2Tasks = [
    {
    id: 1,
    question: "Доповни код так, щоб створити локальний state.",
    code: `const [count, setCount] = ____ (0);`,
    answer: "useState",
    explanation:
        "Для створення локального state у React використовується useState.",
    },
    {
    id: 2,
    question: "Доповни код так, щоб обробити клік по кнопці.",
    code: `<button ____={handleClick}>Click</button>`,
    answer: "onClick",
    explanation:
        "Для обробки кліку в React використовується подія onClick.",
    },
    {
    id: 3,
    question: "Доповни код так, щоб пройтись по масиву і відрендерити елементи.",
    code: `{items.____((item) => <li key={item.id}>{item.name}</li>)}`,
    answer: "map",
    explanation:
        "Для рендеру списків у React зазвичай використовують map.",
    },
    {
    id: 4,
    question: "Доповни код так, щоб передати props name в компонент.",
    code: `<User ____="Alex" />`,
    answer: "name",
    explanation:
        "Щоб передати prop, потрібно вказати його назву як атрибут.",
    },
    {
    id: 5,
    question: "Доповни код так, щоб контрольований input оновлював state.",
    code: `<input value={text} ____={(e) => setText(e.target.value)} />`,
    answer: "onChange",
    explanation:
        "Controlled input у React оновлює state через onChange.",
    },
    {
    id: 6,
    question: "Доповни код так, щоб хук useEffect запускався один раз після mount.",
    code: `useEffect(() => {
    console.log("mounted");
}, ____);`,
    answer: "[]",
    explanation:
        "Порожній dependency array означає запуск ефекту один раз після mount.",
    },
    {
    id: 7,
    question: "Доповни код так, щоб відрендерити значення з props.",
    code: `function User(props) {
    return <p>{props.____}</p>;
}`,
    answer: "name",
    explanation:
        "Якщо передається props.name, то звертатись треба через props.name.",
    },
    {
    id: 8,
    question: "Доповни код так, щоб умовно показати компонент.",
    code: `{isOpen && <____ />}`,
    answer: "Modal",
    explanation:
        "Через && можна умовно рендерити компонент, наприклад Modal.",
    },
    {
    id: 9,
    question: "Доповни код так, щоб повернути JSX із компонента.",
    code: `function App() {
    ____ <h1>Hello</h1>;
}`,
    answer: "return",
    explanation:
        "React component має повертати JSX через return.",
    },
    {
    id: 10,
    question: "Доповни код так, щоб задати key у списку.",
    code: `{items.map((item) => <li ____={item.id}>{item.name}</li>)}`,
    answer: "key",
    explanation:
        "У списках React вимагає key для стабільного ререндеру.",
    },
];

export const practiceReactLevel3Tasks = [
    {
    id: 1,
    question: "Напиши React component Counter, який рендерить заголовок Counter.",
    requiredParts: ["function Counter", "return", "<h1>Counter</h1>"],
    explanation:
        "Компонент має бути функцією і повертати JSX із заголовком Counter.",
    },
    {
    id: 2,
    question: "Напиши component Greeting, який приймає props і рендерить props.name.",
    requiredParts: ["function Greeting", "props", "props.name", "return"],
    explanation:
        "Компонент має отримувати props і відображати props.name у JSX.",
    },
    {
    id: 3,
    question: "Напиши component Button, який рендерить кнопку з текстом Click.",
    requiredParts: ["function Button", "return", "<button>", "Click"],
    explanation:
        "Компонент має повертати JSX із кнопкою і текстом Click.",
    },
    {
    id: 4,
    question: "Напиши component Title, який рендерить h2 з текстом React.",
    requiredParts: ["function Title", "return", "<h2>", "React"],
    explanation:
        "Компонент має повертати JSX із заголовком h2 і текстом React.",
    },
    {
    id: 5,
    question: "Напиши component InputField, який рендерить input.",
    requiredParts: ["function InputField", "return", "<input"],
    explanation:
        "Компонент має повертати JSX із полем input.",
    },
    {
    id: 6,
    question: "Напиши component App, який рендерить компонент Header.",
    requiredParts: ["function App", "return", "<Header />"],
    explanation:
        "Компонент App має повертати JSX, усередині якого рендериться Header.",
    },
    {
    id: 7,
    question: "Напиши component List, який рендерить ul.",
    requiredParts: ["function List", "return", "<ul>"],
    explanation:
        "Компонент має повертати JSX із тегом ul.",
    },
    {
    id: 8,
    question: "Напиши component Card, який рендерить div з текстом Card.",
    requiredParts: ["function Card", "return", "<div>", "Card"],
    explanation:
        "Компонент має повертати JSX із div і текстом Card.",
    },
    {
    id: 9,
    question: "Напиши component Loader, який умовно рендерить p з текстом Loading.",
    requiredParts: ["function Loader", "return", "Loading"],
    explanation:
        "Компонент має повертати JSX, у якому є текст Loading.",
    },
    {
    id: 10,
    question: "Напиши component Message, який рендерить абзац з текстом Hello React.",
    requiredParts: ["function Message", "return", "<p>", "Hello React"],
    explanation:
        "Компонент має бути функцією і повертати JSX із абзацом Hello React.",
    },
];