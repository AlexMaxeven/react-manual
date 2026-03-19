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

export const practiceTypeScriptIntro = {
    title: "Practice TypeScript",
    description:
    "Практика TypeScript: типи, інтерфейси, функції та базова типізація.",
};

export const practiceTypeScriptLevels = [
    { id: "level-1", label: "Level 1" },
    { id: "level-2", label: "Level 2" },
    { id: "level-3", label: "Level 3" },
];

export const practiceTypeScriptLevel1Tasks = [
    {
    id: 1,
    question: "Що таке TypeScript?",
    options: [
        "Мова стилів",
        "Надбудова над JavaScript з типізацією",
        "Фреймворк",
        "База даних",
    ],
    answer: "Надбудова над JavaScript з типізацією",
    explanation:
        "TypeScript — це надбудова над JavaScript, яка додає статичну типізацію.",
    },
    {
    id: 2,
    question: "Який тип означає рядок?",
    options: ["number", "boolean", "string", "any"],
    answer: "string",
    explanation: "string — це тип для текстових значень.",
    },
    {
    id: 3,
    question: "Який тип означає число?",
    options: ["string", "number", "boolean", "void"],
    answer: "number",
    explanation: "number використовується для чисел.",
    },
    {
    id: 4,
    question: "Що означає тип boolean?",
    options: ["рядок", "число", "true/false", "масив"],
    answer: "true/false",
    explanation: "boolean має лише два значення: true або false.",
    },
    {
    id: 5,
    question: "Що означає тип any?",
    options: [
        "строгий тип",
        "будь-який тип",
        "тільки number",
        "тільки string",
    ],
    answer: "будь-який тип",
    explanation:
        "any дозволяє використовувати будь-який тип, але зменшує користь TypeScript.",
    },
    {
    id: 6,
    question: "Що таке interface?",
    options: [
        "функція",
        "опис структури об'єкта",
        "цикл",
        "тип змінної",
    ],
    answer: "опис структури об'єкта",
    explanation:
        "interface використовується для опису структури об'єкта.",
    },
    {
    id: 7,
    question: "Що означає тип void?",
    options: [
        "повертає string",
        "нічого не повертає",
        "повертає number",
        "повертає boolean",
    ],
    answer: "нічого не повертає",
    explanation:
        "void означає, що функція нічого не повертає.",
    },
    {
    id: 8,
    question: "Як описати масив чисел?",
    options: ["number[]", "array", "numbers", "list"],
    answer: "number[]",
    explanation: "number[] — стандартний запис масиву чисел.",
    },
    {
    id: 9,
    question: "Що таке union type?",
    options: [
        "один тип",
        "кілька можливих типів",
        "масив",
        "інтерфейс",
    ],
    answer: "кілька можливих типів",
    explanation:
        "Union дозволяє змінній мати кілька можливих типів.",
    },
    {
    id: 10,
    question: "Який оператор використовується для типізації?",
    options: ["=", ":", "::", "=>"],
    answer: ":",
    explanation: "У TypeScript тип задається через двокрапку (:).",
    },
];

const practiceTypeScriptLevel1ExtraVariants = {
  1: [
    {
      variantId: "1-hard-1",
      question: "Що додає TypeScript до JavaScript?",
      options: [
        "Серверний рендер",
        "Статичну типізацію",
        "CSS-модулі",
        "HTML-шаблони",
      ],
      answer: "Статичну типізацію",
      explanation:
        "Головна перевага TypeScript — статична типізація поверх JavaScript.",
    },
  ],

  2: [
    {
      variantId: "2-hard-1",
      question: "Який тип використовується для текстових значень у TypeScript?",
      options: ["number", "string", "boolean", "void"],
      answer: "string",
      explanation:
        "Тип string використовується для рядків.",
    },
  ],

  3: [
    {
      variantId: "3-hard-1",
      question: "Який тип підходить для 10, 25, 100?",
      options: ["string", "number", "boolean", "unknown"],
      answer: "number",
      explanation:
        "Усі числові значення в TypeScript мають тип number.",
    },
  ],

  4: [
    {
      variantId: "4-hard-1",
      question: "Що описує тип boolean?",
      options: ["Текст", "Числа", "true або false", "Масиви"],
      answer: "true або false",
      explanation:
        "boolean використовується для логічних значень.",
    },
  ],

  6: [
    {
      variantId: "6-hard-1",
      question: "Для чого у TypeScript використовується interface?",
      options: [
        "Для створення циклів",
        "Для опису структури об'єкта",
        "Для стилізації компонентів",
        "Для перетворення масивів",
      ],
      answer: "Для опису структури об'єкта",
      explanation:
        "interface описує форму об'єкта: його поля та типи.",
    },
  ],
};

export const practiceTypeScriptLevel1TaskGroups = buildTaskGroups(
  practiceTypeScriptLevel1Tasks,
  practiceTypeScriptLevel1ExtraVariants
);

export const practiceTypeScriptLevel2Tasks = [
    {
    id: 1,
    question: "Доповни код типом string.",
    code: `let name: ____ = "Alex";`,
    answer: "string",
    explanation: "Тип для рядків — string.",
    },
    {
    id: 2,
    question: "Доповни код типом number.",
    code: `let age: ____ = 25;`,
    answer: "number",
    explanation: "Тип для чисел — number.",
    },
    {
    id: 3,
    question: "Доповни код типом boolean.",
    code: `let isActive: ____ = true;`,
    answer: "boolean",
    explanation: "boolean — це true або false.",
    },
    {
    id: 4,
    question: "Доповни код масивом чисел.",
    code: `let list: ____ = [1, 2, 3];`,
    answer: "number[]",
    explanation: "Масив чисел записується як number[].",
    },
    {
    id: 5,
    question: "Доповни код union типом.",
    code: `let id: string ____ number;`,
    answer: "|",
    explanation: "Union тип використовує оператор |.",
    },
    {
    id: 6,
    question: "Доповни код функції.",
    code: `function log(): ____ {
    console.log("hi");
}`,
    answer: "void",
    explanation: "void означає, що функція нічого не повертає.",
    },
    {
    id: 7,
    question: "Доповни код інтерфейсу.",
    code: `interface User {
    name: ____;
}`,
    answer: "string",
    explanation: "Тип поля name — string.",
    },
    {
    id: 8,
    question: "Доповни код any.",
    code: `let data: ____;`,
    answer: "any",
    explanation: "any дозволяє будь-який тип.",
    },
    {
    id: 9,
    question: "Доповни код функції.",
    code: `function sum(a: number, b: number): ____ {
    return a + b;
}`,
    answer: "number",
    explanation: "Функція повертає number.",
    },
    {
    id: 10,
    question: "Доповни код типом boolean.",
    code: `let isDone: ____ = false;`,
    answer: "boolean",
    explanation: "boolean — true або false.",
    },
];

const practiceTypeScriptLevel2ExtraVariants = {
  1: [
    {
      variantId: "1-hard-1",
      question: "Доповни код типом string.",
      code: `const title: ____ = "Manual";`,
      answer: "string",
      explanation:
        "Для тексту в TypeScript використовується тип string.",
    },
  ],

  2: [
    {
      variantId: "2-hard-1",
      question: "Доповни код типом number.",
      code: `const total: ____ = 100;`,
      answer: "number",
      explanation:
        "Числові значення мають тип number.",
    },
  ],

  4: [
    {
      variantId: "4-hard-1",
      question: "Доповни код масивом рядків.",
      code: `let names: ____ = ["Alex", "John"];`,
      answer: "string[]",
      explanation:
        "Масив рядків записується як string[].",
    },
  ],

  5: [
    {
      variantId: "5-hard-1",
      question: "Доповни код union типом.",
      code: `let value: number ____ string;`,
      answer: "|",
      explanation:
        "Union type використовує оператор |.",
    },
  ],

  7: [
    {
      variantId: "7-hard-1",
      question: "Доповни код інтерфейсу для віку.",
      code: `interface User {
  age: ____;
}`,
      answer: "number",
      explanation:
        "Поле age має тип number.",
    },
  ],

  9: [
    {
      variantId: "9-hard-1",
      question: "Доповни код функції, яка повертає string.",
      code: `function getName(): ____ {
  return "Alex";
}`,
      answer: "string",
      explanation:
        "Функція повертає рядок, отже return type — string.",
    },
  ],
};

export const practiceTypeScriptLevel2TaskGroups = buildTaskGroups(
  practiceTypeScriptLevel2Tasks,
  practiceTypeScriptLevel2ExtraVariants
);

export const practiceTypeScriptLevel3Tasks = [
    {
      id: 1,
      question: "Доповни оголошення змінної age типу number.",
      template: `let age: ___ = 25;`,
      blanks: [
        {
          id: "b1",
          correct: "number",
          options: ["number", "string", "boolean"],
        },
      ],
      explanation: "Змінна age має тип number.",
    },
    {
      id: 2,
      question: "Доповни оголошення змінної name типу string.",
      template: `let name: ___ = "Alex";`,
      blanks: [
        {
          id: "b1",
          correct: "string",
          options: ["string", "number", "boolean"],
        },
      ],
      explanation: "Для тексту використовується тип string.",
    },
    {
      id: 3,
      question: "Доповни функцію, яка нічого не повертає.",
      template: `function logMessage(): ___ {
    console.log("Hello");
  }`,
      blanks: [
        {
          id: "b1",
          correct: "void",
          options: ["void", "string", "number"],
        },
      ],
      explanation: "Якщо функція нічого не повертає, використовується void.",
    },
    {
      id: 4,
      question: "Доповни тип масиву чисел.",
      template: `let list: ___ = [1, 2, 3];`,
      blanks: [
        {
          id: "b1",
          correct: "number[]",
          options: ["number[]", "string[]", "Array"],
        },
      ],
      explanation: "Масив чисел записується як number[].",
    },
    {
      id: 5,
      question: "Доповни interface User.",
      template: `interface User {
    name: ___;
  }`,
      blanks: [
        {
          id: "b1",
          correct: "string",
          options: ["string", "number", "boolean"],
        },
      ],
      explanation: "Поле name в interface User має тип string.",
    },
    {
      id: 6,
      question: "Доповни union type.",
      template: `let id: string ___ number;`,
      blanks: [
        {
          id: "b1",
          correct: "|",
          options: ["|", "&", ":"],
        },
      ],
      explanation: "Union type використовує оператор |.",
    },
    {
      id: 7,
      question: "Доповни змінну з типом boolean.",
      template: `let isActive: ___ = true;`,
      blanks: [
        {
          id: "b1",
          correct: "boolean",
          options: ["boolean", "string", "number"],
        },
      ],
      explanation: "Тип для true/false — boolean.",
    },
    {
      id: 8,
      question: "Доповни змінну з типом any.",
      template: `let data: ___;`,
      blanks: [
        {
          id: "b1",
          correct: "any",
          options: ["any", "unknown", "void"],
        },
      ],
      explanation: "Тип any дозволяє будь-яке значення.",
    },
    {
      id: 9,
      question: "Доповни функцію sum.",
      template: `function sum(a: number, b: number): ___ {
    return a + b;
  }`,
      blanks: [
        {
          id: "b1",
          correct: "number",
          options: ["number", "string", "void"],
        },
      ],
      explanation: "Функція sum повертає число, тому тип return — number.",
    },
    {
      id: 10,
      question: "Доповни змінну id з union типом.",
      template: `let id: ___ | ___ = 10;`,
      blanks: [
        {
          id: "b1",
          correct: "string",
          options: ["string", "boolean", "void"],
        },
        {
          id: "b2",
          correct: "number",
          options: ["number", "any", "null"],
        },
      ],
      explanation: "Union type дозволяє id бути string або number.",
    },
  ];

  const practiceTypeScriptLevel3ExtraVariants = {
    1: [
      {
        variantId: "1-hard-1",
        question: "Доповни оголошення змінної price типу number.",
        template: `let price: ___ = 199;`,
        blanks: [
          {
            id: "b1",
            correct: "number",
            options: ["number", "string", "boolean"],
          },
        ],
        explanation:
          "Числові змінні мають тип number.",
      },
    ],
  
    2: [
      {
        variantId: "2-hard-1",
        question: "Доповни оголошення змінної title типу string.",
        template: `let title: ___ = "TypeScript";`,
        blanks: [
          {
            id: "b1",
            correct: "string",
            options: ["string", "number", "boolean"],
          },
        ],
        explanation:
          "Для текстових значень використовується string.",
      },
    ],
  
    4: [
      {
        variantId: "4-hard-1",
        question: "Доповни тип масиву рядків.",
        template: `let names: ___ = ["Alex", "John"];`,
        blanks: [
          {
            id: "b1",
            correct: "string[]",
            options: ["string[]", "number[]", "Array"],
          },
        ],
        explanation:
          "Масив рядків записується як string[].",
      },
    ],
  
    5: [
      {
        variantId: "5-hard-1",
        question: "Доповни interface Product.",
        template: `interface Product {
    price: ___;
  }`,
        blanks: [
          {
            id: "b1",
            correct: "number",
            options: ["number", "string", "boolean"],
          },
        ],
        explanation:
          "Поле price має тип number.",
      },
    ],
  
    6: [
      {
        variantId: "6-hard-1",
        question: "Доповни union type для id.",
        template: `let id: number ___ string;`,
        blanks: [
          {
            id: "b1",
            correct: "|",
            options: ["|", "&", ":"],
          },
        ],
        explanation:
          "Union type будується через оператор |.",
      },
    ],
  
    9: [
      {
        variantId: "9-hard-1",
        question: "Доповни функцію getAge.",
        template: `function getAge(): ___ {
    return 25;
  }`,
        blanks: [
          {
            id: "b1",
            correct: "number",
            options: ["number", "string", "void"],
          },
        ],
        explanation:
          "Функція повертає число, тому тип — number.",
      },
    ],
  };
  
  export const practiceTypeScriptLevel3TaskGroups = buildTaskGroups(
    practiceTypeScriptLevel3Tasks,
    practiceTypeScriptLevel3ExtraVariants
  );