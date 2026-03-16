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

  export const practiceJavaScriptLevel3Tasks = [
    {
      id: 1,
      question: "Напиши функцію sum, яка повертає суму двох чисел.",
      starterCode: `function sum(a, b) {
    
  }`,
      requiredParts: ["function sum", "return a + b"],
      explanation: "Функція має приймати два аргументи і повертати їх суму.",
    },
    {
      id: 2,
      question: "Напиши функцію multiply, яка повертає добуток двох чисел.",
      starterCode: `function multiply(a, b) {
    
  }`,
      requiredParts: ["function multiply", "return a * b"],
      explanation: "Функція має повертати результат множення a і b.",
    },
    {
      id: 3,
      question: "Напиши функцію getArrayLength, яка повертає довжину масиву.",
      starterCode: `function getArrayLength(arr) {
    
  }`,
      requiredParts: ["function getArrayLength", "return arr.length"],
      explanation: "Для довжини масиву використовується властивість length.",
    },
    {
      id: 4,
      question: "Напиши функцію getFirstItem, яка повертає перший елемент масиву.",
      starterCode: `function getFirstItem(arr) {
    
  }`,
      requiredParts: ["function getFirstItem", "return arr[0]"],
      explanation: "Перший елемент масиву знаходиться за індексом 0.",
    },
    {
      id: 5,
      question: "Напиши функцію toUpper, яка переводить рядок у верхній регістр.",
      starterCode: `function toUpper(text) {
    
  }`,
      requiredParts: ["function toUpper", "return text.toUpperCase()"],
      explanation: "Метод toUpperCase повертає рядок у верхньому регістрі.",
    },
    {
      id: 6,
      question: "Напиши функцію isGreaterThanTen, яка повертає true, якщо число більше 10.",
      starterCode: `function isGreaterThanTen(num) {
    
  }`,
      requiredParts: ["function isGreaterThanTen", "return num > 10"],
      explanation: "Потрібно повернути результат порівняння num > 10.",
    },
    {
      id: 7,
      question: "Напиши функцію addItem, яка додає елемент у кінець масиву.",
      starterCode: `function addItem(arr, item) {
    
  }`,
      requiredParts: ["function addItem", "arr.push(item)", "return arr"],
      explanation: "Можна використати push, а потім повернути оновлений масив.",
    },
    {
      id: 8,
      question: "Напиши функцію doubleNumbers, яка повертає новий масив з подвоєними числами.",
      starterCode: `function doubleNumbers(arr) {
    
  }`,
      requiredParts: ["function doubleNumbers", "arr.map", "item * 2"],
      explanation: "Для цього найзручніше використати map.",
    },
    {
      id: 9,
      question: "Напиши функцію getEvenNumbers, яка повертає тільки парні числа.",
      starterCode: `function getEvenNumbers(arr) {
    
  }`,
      requiredParts: ["function getEvenNumbers", "arr.filter", "item % 2 === 0"],
      explanation: "Для відбору елементів за умовою використовується filter.",
    },
    {
      id: 10,
      question: "Напиши функцію getTotal, яка повертає суму всіх чисел у масиві.",
      starterCode: `function getTotal(arr) {
    
  }`,
      requiredParts: ["function getTotal", "arr.reduce", "acc + item"],
      explanation: "Для підрахунку суми масиву зручно використати reduce.",
    },
  ];