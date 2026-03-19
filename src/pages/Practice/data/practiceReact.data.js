const buildTaskGroups = (tasks, extraVariantsById = {}) => {
  return tasks.map(({ id, ...task }) => ({
    id,
    variants: [
      {
        variantId: `${id}-base`,
        ...task,
      },
      ...(extraVariantsById[id] || []),
    ],
  }));
};

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

const practiceReactLevel1ExtraVariants = {
  1: [
    {
      variantId: "1-hard-1",
      question: "Що таке React component у функціональному підході?",
      options: [
        "Функція або клас, що повертає UI",
        "CSS-модуль",
        "HTML-атрибут",
        "Тип даних",
      ],
      answer: "Функція або клас, що повертає UI",
      explanation:
        "React component — це одиниця UI, зазвичай функція або клас, що повертає JSX.",
    },
  ],

  2: [
    {
      variantId: "2-hard-1",
      question: "Який хук використовується для збереження значення між рендерами?",
      options: ["useEffect", "useState", "useMemo", "useId"],
      answer: "useState",
      explanation:
        "useState дозволяє зберігати локальний стан між рендерами компонента.",
    },
  ],

  3: [
    {
      variantId: "3-hard-1",
      question: "Що таке props у React-компоненті?",
      options: [
        "Внутрішній state",
        "Дані, передані ззовні в компонент",
        "Методи життєвого циклу",
        "Список ефектів",
      ],
      answer: "Дані, передані ззовні в компонент",
      explanation:
        "Props — це вхідні дані компонента, які передає батьківський компонент.",
    },
  ],

  4: [
    {
      variantId: "4-hard-1",
      question: "Який хук використовують для запитів, таймерів і підписок?",
      options: ["useRef", "useMemo", "useEffect", "useState"],
      answer: "useEffect",
      explanation:
        "useEffect потрібен для побічних ефектів.",
    },
  ],

  5: [
    {
      variantId: "5-hard-1",
      question: "Що потрібно додавати в елементи списку під час render через map?",
      options: ["className", "id", "key", "name"],
      answer: "key",
      explanation:
        "key допомагає React правильно відстежувати елементи списку.",
    },
  ],
};

export const practiceReactLevel1TaskGroups = buildTaskGroups(
  practiceReactLevel1Tasks,
  practiceReactLevel1ExtraVariants
);

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

const practiceReactLevel2ExtraVariants = {
  1: [
    {
      variantId: "1-hard-1",
      question: "Доповни код так, щоб створити state для тексту.",
      code: `const [text, setText] = ____ ("");`,
      answer: "useState",
      explanation:
        "Для створення локального state використовується useState.",
    },
  ],

  2: [
    {
      variantId: "2-hard-1",
      question: "Доповни код так, щоб викликати функцію при кліку.",
      code: `<div ____={handleClick}>Open</div>`,
      answer: "onClick",
      explanation:
        "У React подія кліку задається через onClick.",
    },
  ],

  3: [
    {
      variantId: "3-hard-1",
      question: "Доповни код так, щоб відрендерити масив карток.",
      code: `{cards.____((card) => <Card key={card.id} title={card.title} />)}`,
      answer: "map",
      explanation:
        "Для рендеру списків у React найчастіше використовують map.",
    },
  ],

  5: [
    {
      variantId: "5-hard-1",
      question: "Доповни код так, щоб input оновлював state value.",
      code: `<input value={value} ____={(e) => setValue(e.target.value)} />`,
      answer: "onChange",
      explanation:
        "Контрольований input змінює state через onChange.",
    },
  ],

  6: [
    {
      variantId: "6-hard-1",
      question: "Доповни код так, щоб useEffect запускався після кожної зміни count.",
      code: `useEffect(() => {
  console.log(count);
}, ____);`,
      answer: "[count]",
      explanation:
        "Якщо в dependency array є count, ефект запускається після змін count.",
    },
  ],
};

export const practiceReactLevel2TaskGroups = buildTaskGroups(
  practiceReactLevel2Tasks,
  practiceReactLevel2ExtraVariants
);

export const practiceReactLevel3Tasks = [
  {
    id: 1,
    question: "Доповни компонент кнопки.",
    template: `function Button() {
  return <button>___</button>;
}`,
    blanks: [
      {
        id: "b1",
        correct: "Click me",
        options: ["Click me", "Button", "Submit"],
      },
    ],
    explanation: "Компонент має повернути текст усередині button.",
  },
  {
    id: 2,
    question: "Доповни useState.",
    template: `const [count, setCount] = ___(0);`,
    blanks: [
      {
        id: "b1",
        correct: "useState",
        options: ["useState", "useEffect", "useRef"],
      },
    ],
    explanation: "Для локального state у React використовується useState.",
  },
  {
    id: 3,
    question: "Доповни props у компоненті.",
    template: `function User(props) {
  return <p>{props.___}</p>;
}`,
    blanks: [
      {
        id: "b1",
        correct: "name",
        options: ["name", "title", "value"],
      },
    ],
    explanation: "Щоб вивести props.name, треба звернутись до name.",
  },
  {
    id: 4,
    question: "Доповни обробник кліку.",
    template: `<button ___={handleClick}>Open</button>`,
    blanks: [
      {
        id: "b1",
        correct: "onClick",
        options: ["onClick", "onclick", "onChange"],
      },
    ],
    explanation: "У React використовується onClick.",
  },
  {
    id: 5,
    question: "Доповни умовний рендер.",
    template: `{isOpen && <___ />}`,
    blanks: [
      {
        id: "b1",
        correct: "Modal",
        options: ["Modal", "Input", "Form"],
      },
    ],
    explanation: "Через && можна умовно рендерити Modal.",
  },
  {
    id: 6,
    question: "Доповни key у списку.",
    template: `{items.map((item) => <li ___={item.id}>{item.name}</li>)}`,
    blanks: [
      {
        id: "b1",
        correct: "key",
        options: ["key", "id", "name"],
      },
    ],
    explanation: "У списках React потребує key.",
  },
  {
    id: 7,
    question: "Доповни controlled input.",
    template: `<input value={text} ___={(e) => setText(e.target.value)} />`,
    blanks: [
      {
        id: "b1",
        correct: "onChange",
        options: ["onChange", "onClick", "onInput"],
      },
    ],
    explanation: "Контрольований input використовує onChange.",
  },
  {
    id: 8,
    question: "Доповни JSX return.",
    template: `function App() {
  ___ <h1>Hello</h1>;
}`,
    blanks: [
      {
        id: "b1",
        correct: "return",
        options: ["return", "render", "console.log"],
      },
    ],
    explanation: "Компонент має повертати JSX через return.",
  },
  {
    id: 9,
    question: "Доповни map у JSX.",
    template: `{users.___((user) => <p key={user.id}>{user.name}</p>)}`,
    blanks: [
      {
        id: "b1",
        correct: "map",
        options: ["map", "filter", "find"],
      },
    ],
    explanation: "Для рендеру списків у JSX використовують map.",
  },
  {
    id: 10,
    question: "Доповни useEffect.",
    template: `___(() => {
  console.log("mounted");
}, []);`,
    blanks: [
      {
        id: "b1",
        correct: "useEffect",
        options: ["useEffect", "useState", "useMemo"],
      },
    ],
    explanation: "useEffect виконує побічні ефекти.",
  },
];

const practiceReactLevel3ExtraVariants = {
  1: [
    {
      variantId: "1-hard-1",
      question: "Доповни компонент заголовка.",
      template: `function Title() {
  return <h1>___</h1>;
}`,
      blanks: [
        {
          id: "b1",
          correct: "React",
          options: ["React", "JSX", "Component"],
        },
      ],
      explanation: "Компонент має повернути текст React усередині h1.",
    },
  ],
  2: [
    {
      variantId: "2-hard-1",
      question: "Доповни useState для булевого значення.",
      template: `const [isOpen, setIsOpen] = ___(false);`,
      blanks: [
        {
          id: "b1",
          correct: "useState",
          options: ["useState", "useEffect", "useRef"],
        },
      ],
      explanation: "Для булевого state також використовується useState.",
    },
  ],
  5: [
    {
      variantId: "5-hard-1",
      question: "Доповни умовний рендер loading.",
      template: `{isLoading && <___ />}`,
      blanks: [
        {
          id: "b1",
          correct: "Spinner",
          options: ["Spinner", "Modal", "List"],
        },
      ],
      explanation: "Часто через && показують Spinner під час завантаження.",
    },
  ],
};

export const practiceReactLevel3TaskGroups = buildTaskGroups(
  practiceReactLevel3Tasks,
  practiceReactLevel3ExtraVariants
);