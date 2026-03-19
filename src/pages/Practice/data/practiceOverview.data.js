export const practiceOverviewIntro = {
    title: "Practice Overview",
    description:
    "Тут зібрана практика по JavaScript, React і TypeScript у форматі коротких завдань. Ти читаєш умову, пишеш відповідь, перевіряєш себе і переходиш до наступного завдання.",
};

export const practiceOverviewCards = [
    {
      id: "javascript",
      title: "JavaScript",
      description:
        "Практичні завдання по основах JavaScript: типи даних, масиви, методи, async, event loop, closures та інше.",
      to: "/practice/js",
      buttonText: "Open practice",
      storageKey: "practice-js-progress",
      totalTasks: 30,
    },
    {
      id: "react",
      title: "React",
      description:
        "Практика по React: components, props, state, hooks, rendering, forms, lists, effects і логіка інтерфейсів.",
      to: "/practice/react",
      buttonText: "Open practice",
      storageKey: "practice-react-progress",
      totalTasks: 30,
    },
    {
      id: "typescript",
      title: "TypeScript",
      description:
        "Завдання по TypeScript: типи, interfaces, type aliases, unions, generics, props typing та інше.",
      to: "/practice/typescript",
      buttonText: "Open practice",
      storageKey: "practice-typescript-progress",
      totalTasks: 30,
    },
  ];

export const practiceOverviewSteps = [
    {
    id: 1,
    number: "01",
    text: "Обираєш розділ: JavaScript, React або TypeScript.",
    },
    {
    id: 2,
    number: "02",
    text: "Читаєш завдання і вводиш свою відповідь.",
    },
    {
    id: 3,
    number: "03",
    text: "Натискаєш перевірку, дивишся пояснення і рухаєшся далі.",
    },
];

export const practiceOverviewMeta = [
    "3 topics",
    "3 levels",
    "Progress saves automatically",
];
