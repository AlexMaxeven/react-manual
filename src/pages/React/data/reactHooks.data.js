export const reactHooksSections = [
    {
    id: "what-are-hooks",
    title: "Що таке Hooks",
    blocks: [
        {
        type: "text",
        content:
            "Hooks — це функції React, які дозволяють використовувати state, lifecycle та інші можливості React у функціональних компонентах.",
        },
        {
        type: "text",
        content:
            "До появи hooks більшість складної логіки в React писали через класові компоненти. Hooks дозволили працювати тільки з функціями.",
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
        label: "Головна ідея",
        content:
            "Hooks дозволяють використовувати можливості React без класових компонентів.",
        },
    ],
    },

    {
    id: "rules-of-hooks",
    title: "Правила Hooks",
    blocks: [
        {
        type: "text",
        content:
            "Hooks мають кілька важливих правил. Якщо їх порушити, React може працювати неправильно.",
        },
        {
        type: "list",
        items: [
            "Hooks потрібно викликати тільки на верхньому рівні компонента",
            "Не можна викликати hooks всередині умов або циклів",
            "Hooks можна використовувати тільки у React компонентах або custom hooks",
        ],
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "React покладається на порядок виклику hooks. Тому їх не можна викликати умовно.",
        },
    ],
    },

    {
    id: "useState",
    title: "useState",
    blocks: [
        {
        type: "text",
        content:
            "useState використовується для зберігання змінних даних у компоненті.",
        },
        {
        type: "code",
        content: `const [count, setCount] = useState(0);`,
        },
        {
        type: "code",
        content: `const Counter = () => {
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
            "useState повертає масив: поточне значення і функцію для його зміни.",
        },
    ],
    },

    {
    id: "useEffect",
    title: "useEffect",
    blocks: [
        {
        type: "text",
        content:
            "useEffect використовується для побічних ефектів: запитів до API, підписок, роботи з DOM або таймерів.",
        },
        {
        type: "code",
        content: `useEffect(() => {
    console.log("Component mounted");
}, []);`,
        },
        {
        type: "text",
        content:
            "Другий параметр — dependency array. Він визначає, коли ефект має виконуватися.",
        },
        {
        type: "list",
        items: [
            "[] — виконується один раз при монтуванні",
            "[value] — виконується коли value змінюється",
            "без масиву — виконується після кожного рендера",
        ],
        },
    ],
    },

    {
    id: "useRef",
    title: "useRef",
    blocks: [
        {
        type: "text",
        content:
            "useRef дозволяє зберігати значення між рендерами або отримати доступ до DOM елемента.",
        },
        {
        type: "code",
        content: `const inputRef = useRef(null);`,
        },
        {
        type: "code",
        content: `const InputFocus = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
    inputRef.current.focus();
    };

    return (
    <>
        <input ref={inputRef} />
        <button onClick={focusInput}>Focus</button>
    </>
    );
};`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "useRef не викликає перерендер компоненту при зміні значення.",
        },
    ],
    },

    {
    id: "useMemo",
    title: "useMemo",
    blocks: [
        {
        type: "text",
        content:
            "useMemo використовується для оптимізації. Він запам’ятовує результат обчислення, щоб не виконувати його заново при кожному рендері.",
        },
        {
        type: "code",
        content: `const value = useMemo(() => {
    return expensiveCalculation(data);
}, [data]);`,
        },
        {
        type: "warning",
        label: "Увага",
        content:
            "useMemo потрібен тільки тоді, коли обчислення справді важке.",
        },
    ],
    },

    {
    id: "useCallback",
    title: "useCallback",
    blocks: [
        {
        type: "text",
        content:
            "useCallback використовується для мемоізації функцій. Це допомагає уникнути зайвих перерендерів дочірніх компонентів.",
        },
        {
        type: "code",
        content: `const handleClick = useCallback(() => {
    console.log("Clicked");
}, []);`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "useCallback працює схоже до useMemo, але для функцій.",
        },
    ],
    },

    {
    id: "custom-hooks",
    title: "Custom Hooks",
    blocks: [
        {
        type: "text",
        content:
            "Custom hooks дозволяють винести повторювану логіку в окрему функцію.",
        },
        {
        type: "code",
        content: `function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}`,
        },
        {
        type: "text",
        content:
            "Custom hooks повинні починатися з префіксу use.",
        },
    ],
    },

    {
    id: "common-hooks",
    title: "Hooks які використовують найчастіше",
    blocks: [
        {
        type: "list",
        items: [
            "useState",
            "useEffect",
            "useRef",
            "useMemo",
            "useCallback",
            "useContext",
        ],
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "У більшості React-проєктів основна логіка будується навколо useState, useEffect та useRef.",
        },
    ],
    },

    {
    id: "thinking-in-hooks",
    title: "Як мислити через Hooks",
    blocks: [
        {
        type: "text",
        content:
            "Hooks дозволяють будувати компоненти як комбінацію маленьких функцій для керування станом і поведінкою.",
        },
        {
        type: "list",
        items: [
            "зберігай дані у useState",
            "побічні ефекти обробляй у useEffect",
            "DOM доступ через useRef",
            "повторювану логіку винось у custom hooks",
        ],
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "Не потрібно намагатися оптимізувати все через useMemo або useCallback. Спочатку пиши простий код.",
        },
    ],
    },
];