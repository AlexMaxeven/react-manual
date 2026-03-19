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

export const practiceJavaScriptIntro = {
    title: "Practice JavaScript",
    description:
      "Тут зібрана практика по JavaScript у 3 рівнях: базові тестові питання, доповнення коду та написання власного коду.",
  };
  
  export const practiceJavaScriptLevels = [
    { id: "level-1", label: "Level 1" },
    { id: "level-2", label: "Level 2" },
    { id: "level-3", label: "Level 3" },
  ];
  
  export const practiceJavaScriptLevel1Tasks = [
    {
      id: 1,
      question: "Що повертає typeof null?",
      options: ["null", "object", "undefined", "number"],
      answer: "object",
      explanation:
        "Це історична особливість JavaScript: typeof null повертає 'object'.",
    },
    {
      id: 2,
      question: "Який метод масиву створює новий масив після перетворення кожного елемента?",
      options: ["filter", "forEach", "map", "find"],
      answer: "map",
      explanation:
        "Метод map проходить по кожному елементу та повертає новий масив.",
    },
    {
      id: 3,
      question: "Який оператор перевіряє і значення, і тип?",
      options: ["==", "=", "===", "!="],
      answer: "===",
      explanation:
        "Оператор === виконує строгу перевірку без приведення типів.",
    },
    {
      id: 4,
      question: "Що краще використовувати за замовчуванням, якщо змінну не треба перевизначати?",
      options: ["var", "let", "const", "static"],
      answer: "const",
      explanation:
        "const використовують за замовчуванням, якщо змінну не потрібно перевизначати.",
    },
    {
      id: 5,
      question: "Який метод масиву повертає тільки ті елементи, які пройшли умову?",
      options: ["map", "reduce", "filter", "some"],
      answer: "filter",
      explanation:
        "filter повертає новий масив лише з тими елементами, які відповідають умові.",
    },
    {
      id: 6,
      question: "Що поверне Array.isArray([])?",
      options: ["false", "true", "undefined", "array"],
      answer: "true",
      explanation:
        "Array.isArray([]) повертає true, бо це масив.",
    },
    {
      id: 7,
      question: "Що завжди повертає async function?",
      options: ["Об'єкт", "Масив", "Promise", "undefined"],
      answer: "Promise",
      explanation:
        "Будь-яка async function завжди повертає Promise.",
    },
    {
      id: 8,
      question: "Що таке closure?",
      options: [
        "Функція, яка завжди повертає число",
        "Функція разом із зовнішнім лексичним оточенням",
        "Метод для масивів",
        "Тип даних у JavaScript",
      ],
      answer: "Функція разом із зовнішнім лексичним оточенням",
      explanation:
        "Closure — це функція, яка має доступ до змінних із зовнішньої області видимості.",
    },
    {
      id: 9,
      question: "Який метод нічого не повертає як новий масив, а просто перебирає елементи?",
      options: ["map", "filter", "forEach", "find"],
      answer: "forEach",
      explanation:
        "forEach просто виконує callback для кожного елемента і не створює новий масив.",
    },
    {
      id: 10,
      question: "Що таке event loop?",
      options: [
        "Цикл for у JavaScript",
        "Механізм, який керує виконанням асинхронних задач",
        "Метод масиву",
        "Спосіб створення об'єктів",
      ],
      answer: "Механізм, який керує виконанням асинхронних задач",
      explanation:
        "Event loop координує виконання call stack, microtasks і macrotasks.",
    },
  ];

  const practiceJavaScriptLevel1ExtraVariants = {
    1: [
      {
        variantId: "1-hard-1",
        question: "Що повертає typeof NaN?",
        options: ["NaN", "number", "undefined", "object"],
        answer: "number",
        explanation:
          "У JavaScript NaN має тип number, хоча означає 'Not a Number'.",
      },
      {
        variantId: "1-hard-2",
        question: "Що поверне вираз typeof undefined?",
        options: ["null", "undefined", "object", "string"],
        answer: "undefined",
        explanation:
          "typeof undefined повертає рядок 'undefined'.",
      },
    ],
  
    2: [
      {
        variantId: "2-hard-1",
        question: "Який метод масиву повертає новий масив тієї ж довжини після обробки кожного елемента?",
        options: ["find", "map", "some", "reduce"],
        answer: "map",
        explanation:
          "map створює новий масив, застосовуючи callback до кожного елемента.",
      },
      {
        variantId: "2-hard-2",
        question: "Який метод найкраще підходить, якщо треба перетворити кожен елемент масиву?",
        options: ["filter", "forEach", "map", "includes"],
        answer: "map",
        explanation:
          "Для трансформації кожного елемента використовується map.",
      },
    ],
  
    3: [
      {
        variantId: "3-hard-1",
        question: "Який оператор не виконує приведення типів?",
        options: ["==", "===", "!=", "<="],
        answer: "===",
        explanation:
          "=== виконує строгу перевірку без приведення типів.",
      },
    ],
  
    4: [
      {
        variantId: "4-hard-1",
        question: "Що краще використовувати, якщо значення змінної не буде переприсвоюватись?",
        options: ["var", "const", "let", "define"],
        answer: "const",
        explanation:
          "За замовчуванням краще використовувати const.",
      },
    ],
  
    5: [
      {
        variantId: "5-hard-1",
        question: "Який метод повертає новий масив лише з елементами, що задовольняють умову?",
        options: ["filter", "map", "reduce", "every"],
        answer: "filter",
        explanation:
          "filter залишає тільки ті елементи, які пройшли перевірку.",
      },
    ],
  };

  export const practiceJavaScriptLevel1TaskGroups = buildTaskGroups(
    practiceJavaScriptLevel1Tasks,
    practiceJavaScriptLevel1ExtraVariants
  );

  export const practiceJavaScriptLevel2Tasks = [
    {
      id: 1,
      question: "Доповни код так, щоб створився новий масив із подвоєними значеннями.",
      code: `const numbers = [1, 2, 3];
  
  const doubled = numbers.____((item) => item * 2);`,
      answer: "map",
      explanation:
        "Метод map проходить по кожному елементу та повертає новий масив.",
    },
    {
      id: 2,
      question: "Доповни код так, щоб залишилися тільки числа більші за 10.",
      code: `const numbers = [4, 12, 18, 3];
  
  const filtered = numbers.____((item) => item > 10);`,
      answer: "filter",
      explanation:
        "Метод filter повертає новий масив лише з тими елементами, які проходять умову.",
    },
    {
      id: 3,
      question: "Доповни код так, щоб у консоль вивівся текст.",
      code: `console.____("Hello JavaScript");`,
      answer: "log",
      explanation:
        "Для виводу в консоль використовується метод console.log().",
    },
    {
      id: 4,
      question: "Доповни код так, щоб рядок став у верхньому регістрі.",
      code: `const text = "hello";
  
  const result = text.____();`,
      answer: "toUpperCase",
      explanation:
        "Метод toUpperCase повертає новий рядок у верхньому регістрі.",
    },
    {
      id: 5,
      question: "Доповни код так, щоб додати елемент у кінець масиву.",
      code: `const numbers = [1, 2, 3];
  
  numbers.____(4);`,
      answer: "push",
      explanation:
        "Метод push додає один або кілька елементів у кінець масиву.",
    },
    {
      id: 6,
      question: "Доповни код так, щоб перевірити, що value строго дорівнює 10.",
      code: `if (value ____ 10) {
    console.log("equal");
  }`,
      answer: "===",
      explanation:
        "Оператор === перевіряє і тип, і значення без приведення типів.",
    },
    {
      id: 7,
      question: "Доповни код так, щоб створити Promise.",
      code: `const promise = new ____((resolve) => {
    resolve("done");
  });`,
      answer: "Promise",
      explanation:
        "Promise створюється через new Promise(...).",
    },
    {
      id: 8,
      question: "Доповни код так, щоб повернути суму в reduce.",
      code: `const numbers = [1, 2, 3];
  
  const total = numbers.reduce((acc, item) => {
    return acc ____ item;
  }, 0);`,
      answer: "+",
      explanation:
        "Щоб накопичувати суму, потрібно додавати поточний елемент до acc.",
    },
    {
      id: 9,
      question: "Доповни код так, щоб отримати довжину масиву.",
      code: `const numbers = [1, 2, 3, 4];
  
  console.log(numbers.____);`,
      answer: "length",
      explanation:
        "Властивість length повертає кількість елементів у масиві.",
    },
    {
      id: 10,
      question: "Доповни код так, щоб функція стала асинхронною.",
      code: `____ function loadData() {
    return "done";
  }`,
      answer: "async",
      explanation:
        "Ключове слово async робить функцію асинхронною і вона повертає Promise.",
    },
  ];

  const practiceJavaScriptLevel2ExtraVariants = {
    1: [
      {
        variantId: "1-hard-1",
        question: "Доповни код так, щоб створився новий масив із квадратами чисел.",
        code: `const numbers = [1, 2, 3];
  
  const squared = numbers.____((item) => item ** 2);`,
        answer: "map",
        explanation:
          "map використовується для створення нового масиву після трансформації елементів.",
      },
      {
        variantId: "1-hard-2",
        question: "Доповни код так, щоб перетворити масив рядків у масив їх довжин.",
        code: `const words = ["js", "react", "ts"];
  
  const lengths = words.____((item) => item.length);`,
        answer: "map",
        explanation:
          "map дозволяє перетворити кожен елемент масиву в нове значення.",
      },
    ],
  
    2: [
      {
        variantId: "2-hard-1",
        question: "Доповни код так, щоб залишились тільки парні числа.",
        code: `const numbers = [1, 2, 3, 4, 5, 6];
  
  const result = numbers.____((item) => item % 2 === 0);`,
        answer: "filter",
        explanation:
          "filter залишає лише ті елементи, що відповідають умові.",
      },
    ],
  
    3: [
      {
        variantId: "3-hard-1",
        question: "Доповни код так, щоб у консоль вивівся об'єкт user.",
        code: `const user = { name: "Alex" };
  
  console.____(user);`,
        answer: "log",
        explanation:
          "Для виводу в консоль використовується console.log().",
      },
    ],
  
    4: [
      {
        variantId: "4-hard-1",
        question: "Доповни код так, щоб рядок став у нижньому регістрі.",
        code: `const text = "HELLO";
  
  const result = text.____();`,
        answer: "toLowerCase",
        explanation:
          "toLowerCase повертає рядок у нижньому регістрі.",
      },
    ],
  
    8: [
      {
        variantId: "8-hard-1",
        question: "Доповни код так, щоб reduce накопичував добуток чисел.",
        code: `const numbers = [2, 3, 4];
  
  const total = numbers.reduce((acc, item) => {
    return acc ____ item;
  }, 1);`,
        answer: "*",
        explanation:
          "Щоб накопичувати добуток, треба множити acc на item.",
      },
    ],
  };

  export const practiceJavaScriptLevel2TaskGroups = buildTaskGroups(
    practiceJavaScriptLevel2Tasks,
    practiceJavaScriptLevel2ExtraVariants
  );

  export const practiceJavaScriptLevel3Tasks = [
    {
      id: 1,
      question: "Доповни функцію додавання.",
      template: `function sum(a, b) {
    return ___ + ___;
  }`,
      blanks: [
        {
          id: "b1",
          correct: "a",
          options: ["a", "b", "sum"],
        },
        {
          id: "b2",
          correct: "b",
          options: ["a", "b", "result"],
        },
      ],
      explanation: "Функція має повертати суму a + b.",
    },
    {
      id: 2,
      question: "Доповни функцію множення.",
      template: `function multiply(a, b) {
    return ___ * ___;
  }`,
      blanks: [
        {
          id: "b1",
          correct: "a",
          options: ["a", "b", "value"],
        },
        {
          id: "b2",
          correct: "b",
          options: ["a", "b", "result"],
        },
      ],
      explanation: "Функція має повертати результат множення a * b.",
    },
    {
      id: 3,
      question: "Доповни функцію, яка повертає довжину масиву.",
      template: `function getArrayLength(arr) {
    return arr.___;
  }`,
      blanks: [
        {
          id: "b1",
          correct: "length",
          options: ["length", "size", "count"],
        },
      ],
      explanation: "Для отримання довжини масиву використовується властивість length.",
    },
    {
      id: 4,
      question: "Доповни функцію, яка повертає перший елемент масиву.",
      template: `function getFirstItem(arr) {
    return arr[___];
  }`,
      blanks: [
        {
          id: "b1",
          correct: "0",
          options: ["0", "1", "length"],
        },
      ],
      explanation: "Перший елемент масиву знаходиться за індексом 0.",
    },
    {
      id: 5,
      question: "Доповни функцію, яка переводить рядок у верхній регістр.",
      template: `function toUpper(text) {
    return text.___();
  }`,
      blanks: [
        {
          id: "b1",
          correct: "toUpperCase",
          options: ["toUpperCase", "toLowerCase", "trim"],
        },
      ],
      explanation: "Метод toUpperCase повертає рядок у верхньому регістрі.",
    },
    {
      id: 6,
      question: "Доповни функцію, яка перевіряє чи число більше 10.",
      template: `function isGreaterThanTen(num) {
    return num ___ 10;
  }`,
      blanks: [
        {
          id: "b1",
          correct: ">",
          options: [">", "<", "==="],
        },
      ],
      explanation: "Потрібно повернути результат порівняння num > 10.",
    },
    {
      id: 7,
      question: "Доповни функцію, яка додає елемент у кінець масиву.",
      template: `function addItem(arr, item) {
    arr.___(item);
    return ___;
  }`,
      blanks: [
        {
          id: "b1",
          correct: "push",
          options: ["push", "pop", "map"],
        },
        {
          id: "b2",
          correct: "arr",
          options: ["arr", "item", "push"],
        },
      ],
      explanation: "Елемент додається через push, після чого повертається arr.",
    },
    {
      id: 8,
      question: "Доповни функцію, яка подвоює всі числа масиву.",
      template: `function doubleNumbers(arr) {
    return arr.___((item) => item * ___);
  }`,
      blanks: [
        {
          id: "b1",
          correct: "map",
          options: ["map", "filter", "find"],
        },
        {
          id: "b2",
          correct: "2",
          options: ["2", "1", "0"],
        },
      ],
      explanation: "Для перетворення кожного елемента використовується map.",
    },
    {
      id: 9,
      question: "Доповни функцію, яка повертає тільки парні числа.",
      template: `function getEvenNumbers(arr) {
    return arr.___((item) => item % 2 === ___);
  }`,
      blanks: [
        {
          id: "b1",
          correct: "filter",
          options: ["filter", "map", "reduce"],
        },
        {
          id: "b2",
          correct: "0",
          options: ["0", "1", "2"],
        },
      ],
      explanation: "Для відбору елементів за умовою використовується filter.",
    },
    {
      id: 10,
      question: "Доповни функцію, яка знаходить суму елементів масиву.",
      template: `function getTotal(arr) {
    return arr.___((acc, item) => acc + item, ___);
  }`,
      blanks: [
        {
          id: "b1",
          correct: "reduce",
          options: ["reduce", "map", "filter"],
        },
        {
          id: "b2",
          correct: "0",
          options: ["0", "1", "[]"],
        },
      ],
      explanation: "Для підрахунку суми масиву зручно використовувати reduce.",
    },
  ];

  const practiceJavaScriptLevel3ExtraVariants = {
    1: [
      {
        variantId: "1-hard-1",
        question: "Доповни функцію віднімання.",
        template: `function subtract(a, b) {
    return ___ - ___;
  }`,
        blanks: [
          {
            id: "b1",
            correct: "a",
            options: ["a", "b", "subtract"],
          },
          {
            id: "b2",
            correct: "b",
            options: ["a", "b", "result"],
          },
        ],
        explanation:
          "Функція має повертати результат a - b.",
      },
    ],
  
    3: [
      {
        variantId: "3-hard-1",
        question: "Доповни функцію, яка повертає довжину рядка.",
        template: `function getTextLength(text) {
    return text.___;
  }`,
        blanks: [
          {
            id: "b1",
            correct: "length",
            options: ["length", "size", "count"],
          },
        ],
        explanation:
          "Для рядків також використовується властивість length.",
      },
    ],
  
    4: [
      {
        variantId: "4-hard-1",
        question: "Доповни функцію, яка повертає останній елемент масиву.",
        template: `function getLastItem(arr) {
    return arr[arr.length - ___];
  }`,
        blanks: [
          {
            id: "b1",
            correct: "1",
            options: ["0", "1", "2"],
          },
        ],
        explanation:
          "Останній елемент масиву — це arr[arr.length - 1].",
      },
    ],
  
    8: [
      {
        variantId: "8-hard-1",
        question: "Доповни функцію, яка збільшує кожне число масиву на 1.",
        template: `function increaseNumbers(arr) {
    return arr.___((item) => item + ___);
  }`,
        blanks: [
          {
            id: "b1",
            correct: "map",
            options: ["map", "filter", "find"],
          },
          {
            id: "b2",
            correct: "1",
            options: ["1", "2", "0"],
          },
        ],
        explanation:
          "map використовується для зміни кожного елемента масиву.",
      },
    ],
  
    10: [
      {
        variantId: "10-hard-1",
        question: "Доповни функцію, яка знаходить найбільше число в масиві.",
        template: `function getMax(arr) {
    return arr.___((acc, item) => item > acc ? item : acc, ___);
  }`,
        blanks: [
          {
            id: "b1",
            correct: "reduce",
            options: ["reduce", "map", "filter"],
          },
          {
            id: "b2",
            correct: "arr[0]",
            options: ["0", "arr[0]", "[]"],
          },
        ],
        explanation:
          "reduce можна використати для пошуку максимального значення.",
      },
    ],
  };

  export const practiceJavaScriptLevel3TaskGroups = buildTaskGroups(
    practiceJavaScriptLevel3Tasks,
    practiceJavaScriptLevel3ExtraVariants
  );