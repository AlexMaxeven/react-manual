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