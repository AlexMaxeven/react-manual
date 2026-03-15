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