export const typeScriptSections = [
    {
      id: "what-is-typescript",
      title: "Що таке TypeScript",
      blocks: [
        {
          type: "text",
          content:
            "TypeScript — це надбудова над JavaScript, яка додає статичну типізацію. Це означає, що типи змінних, функцій і об’єктів перевіряються ще під час розробки.",
        },
        {
          type: "text",
          content:
            "TypeScript компілюється у звичайний JavaScript, тому код у підсумку може виконуватися у будь-якому браузері або середовищі Node.js.",
        },
        {
          type: "tip",
          label: "Пояснення",
          content:
            "TypeScript не замінює JavaScript — він лише додає перевірку типів та кращу підтримку великих проєктів.",
        },
      ],
    },
  
    {
      id: "why-typescript",
      title: "Навіщо потрібен TypeScript",
      blocks: [
        {
          type: "text",
          content:
            "У великих проєктах JavaScript може ставати складним для підтримки. TypeScript допомагає уникати помилок завдяки перевірці типів і кращій структурі коду.",
        },
        {
          type: "list",
          items: [
            "перевірка типів під час розробки",
            "менше runtime помилок",
            "краща підтримка у редакторах (autocomplete)",
            "зручніше працювати з великими кодовими базами",
          ],
        },
        {
          type: "warning",
          label: "Важливо",
          content:
            "TypeScript не працює напряму у браузері. Спочатку код компілюється у JavaScript.",
        },
      ],
    },
  
    {
      id: "typescript-vs-javascript",
      title: "TypeScript vs JavaScript",
      blocks: [
        {
          type: "text",
          content:
            "TypeScript дуже схожий на JavaScript, але дозволяє вказувати типи для змінних, функцій і об’єктів.",
        },
        {
          type: "subtitle",
          content: "JavaScript",
        },
        {
          type: "code",
          content: `function sum(a, b) {
    return a + b;
  }`,
        },
        {
          type: "subtitle",
          content: "TypeScript",
        },
        {
          type: "code",
          content: `function sum(a: number, b: number): number {
    return a + b;
  }`,
        },
        {
          type: "tip",
          label: "Пояснення",
          content:
            "TypeScript дозволяє одразу побачити помилки, якщо передати функції неправильний тип даних.",
        },
      ],
    },
  
    {
      id: "basic-types",
      title: "Базові типи",
      blocks: [
        {
          type: "text",
          content:
            "TypeScript має набір базових типів, які використовуються для опису даних у програмі.",
        },
        {
          type: "list",
          items: [
            "string — текстові значення",
            "number — числа",
            "boolean — true / false",
            "array — масиви",
            "object — об’єкти",
            "any — будь-який тип",
            "unknown — безпечніший варіант any",
          ],
        },
        {
          type: "code",
          content: `let name: string = "Alex";
  let age: number = 25;
  let isAdmin: boolean = false;`,
        },
      ],
    },
  
    {
      id: "interfaces",
      title: "Interfaces",
      blocks: [
        {
          type: "text",
          content:
            "Interfaces дозволяють описувати структуру об’єктів. Це дуже корисно для роботи з даними з API або складними об’єктами.",
        },
        {
          type: "code",
          content: `interface User {
    id: number;
    name: string;
    email: string;
  }`,
        },
        {
          type: "code",
          content: `const user: User = {
    id: 1,
    name: "Alex",
    email: "alex@example.com",
  };`,
        },
        {
          type: "tip",
          label: "Пояснення",
          content:
            "Interfaces часто використовують для опису відповіді API або props у React компонентах.",
        },
      ],
    },
  
    {
      id: "typescript-and-react",
      title: "TypeScript і React",
      blocks: [
        {
          type: "text",
          content:
            "TypeScript широко використовується разом з React. Він допомагає описувати props, state і структуру даних, що передаються між компонентами.",
        },
        {
          type: "subtitle",
          content: "Приклад props з TypeScript",
        },
        {
          type: "code",
          content: `type UserProps = {
    name: string;
    age: number;
  };
  
  const User = ({ name, age }: UserProps) => {
    return <div>{name} - {age}</div>;
  };`,
        },
        {
          type: "warning",
          label: "Важливо",
          content:
            "TypeScript не змінює принципи React — він лише додає типи, щоб зробити код більш передбачуваним.",
        },
      ],
    },
  
    {
      id: "why-typescript-after-js",
      title: "Чому TypeScript вивчають після JavaScript",
      blocks: [
        {
          type: "text",
          content:
            "TypeScript побудований на основі JavaScript. Тому перед тим як активно використовувати TypeScript, потрібно добре розуміти JavaScript.",
        },
        {
          type: "list",
          items: [
            "TypeScript використовує синтаксис JavaScript",
            "усі JavaScript-функції працюють у TypeScript",
            "TypeScript лише додає систему типів",
          ],
        },
        {
          type: "tip",
          label: "Порада",
          content:
            "Найкращий підхід — спочатку добре освоїти JavaScript, а потім додати TypeScript для більш надійної розробки.",
        },
      ],
    },
  ];