export const typeScriptTypesSections = [
    {
      id: "basic-types",
      title: "Базові типи",
      blocks: [
        {
          type: "text",
          content:
            "У TypeScript можна явно вказувати типи для змінних, параметрів функцій і результатів. Це допомагає уникати багатьох помилок ще до запуску коду.",
        },
        {
          type: "list",
          items: [
            "string — рядки",
            "number — числа",
            "boolean — true / false",
            "null — порожнє значення",
            "undefined — значення не задано",
          ],
        },
        {
          type: "code",
          content: `let userName: string = "Alex";
  let age: number = 25;
  let isOnline: boolean = true;`,
        },
        {
          type: "tip",
          label: "Порада",
          content:
            "У простих випадках TypeScript сам може вивести тип, але для функцій, props і складних структур краще вказувати його явно.",
        },
      ],
    },
  
    {
      id: "arrays",
      title: "Типи масивів",
      blocks: [
        {
          type: "text",
          content:
            "У TypeScript масиви також типізуються. Це означає, що ти одразу задаєш, які елементи можуть у них зберігатися.",
        },
        {
          type: "subtitle",
          content: "Масив рядків",
        },
        {
          type: "code",
          content: `const names: string[] = ["Alex", "John", "Kate"];`,
        },
        {
          type: "subtitle",
          content: "Масив чисел",
        },
        {
          type: "code",
          content: `const numbers: number[] = [1, 2, 3, 4];`,
        },
        {
          type: "subtitle",
          content: "Інший запис",
        },
        {
          type: "code",
          content: `const ids: Array<number> = [101, 102, 103];`,
        },
        {
          type: "warning",
          label: "Важливо",
          content:
            "Якщо масив має тип string[], то додати number вже не вийде — TypeScript покаже помилку.",
        },
      ],
    },
  
    {
      id: "objects",
      title: "Типи об’єктів",
      blocks: [
        {
          type: "text",
          content:
            "Об’єкти у TypeScript можна описувати прямо в типі або винести у type чи interface. Це дуже важливо для роботи з API, формами та props.",
        },
        {
          type: "code",
          content: `const user: {
    name: string;
    age: number;
    isAdmin: boolean;
  } = {
    name: "Alex",
    age: 25,
    isAdmin: false,
  };`,
        },
        {
          type: "tip",
          label: "Пояснення",
          content:
            "Для простих прикладів можна описати тип прямо в об’єкті, але в реальних проєктах краще використовувати type або interface.",
        },
      ],
    },
  
    {
      id: "function-types",
      title: "Типи у функціях",
      blocks: [
        {
          type: "text",
          content:
            "TypeScript дозволяє вказати типи параметрів функції та тип значення, яке вона повертає. Це одна з найкорисніших можливостей у щоденній роботі.",
        },
        {
          type: "code",
          content: `function sum(a: number, b: number): number {
    return a + b;
  }`,
        },
        {
          type: "code",
          content: `const greet = (name: string): string => {
    return "Hello, " + name;
  };`,
        },
        {
          type: "warning",
          label: "Увага",
          content:
            "Якщо функція повинна повернути number, а повертає string — TypeScript одразу покаже проблему.",
        },
      ],
    },
  
    {
      id: "union-types",
      title: "Union Types",
      blocks: [
        {
          type: "text",
          content:
            "Union type дозволяє змінній або параметру мати кілька можливих типів. Це зручно, коли значення може приходити в різних форматах.",
        },
        {
          type: "code",
          content: `let id: string | number;
  
  id = 101;
  id = "user-101";`,
        },
        {
          type: "code",
          content: `const printId = (id: string | number) => {
    console.log(id);
  };`,
        },
        {
          type: "tip",
          label: "Пояснення",
          content:
            "Union types дуже часто використовуються у фронтенді, особливо при роботі з API, формами та умовною логікою.",
        },
      ],
    },
  
    {
      id: "literal-types",
      title: "Literal Types",
      blocks: [
        {
          type: "text",
          content:
            "Literal types дозволяють обмежити значення не просто типом string або number, а конкретними допустимими значеннями.",
        },
        {
          type: "code",
          content: `let theme: "light" | "dark";
  
  theme = "light";
  theme = "dark";`,
        },
        {
          type: "code",
          content: `type Status = "idle" | "loading" | "success" | "error";`,
        },
        {
          type: "tip",
          label: "Порада",
          content:
            "Це дуже зручно для статусів завантаження, ролей користувача, теми інтерфейсу та інших контрольованих значень.",
        },
      ],
    },
  
    {
      id: "optional-properties",
      title: "Optional Properties",
      blocks: [
        {
          type: "text",
          content:
            "У TypeScript властивість об’єкта можна зробити необов’язковою за допомогою знака ?. Це означає, що вона може бути, а може і не бути.",
        },
        {
          type: "code",
          content: `type User = {
    name: string;
    age?: number;
  };`,
        },
        {
          type: "code",
          content: `const user1: User = { name: "Alex" };
  const user2: User = { name: "John", age: 30 };`,
        },
        {
          type: "warning",
          label: "Важливо",
          content:
            "Необов’язкові поля дуже часто зустрічаються у відповідях API, де частина даних може бути відсутньою.",
        },
      ],
    },
  
    {
      id: "any-and-unknown",
      title: "any та unknown",
      blocks: [
        {
          type: "text",
          content:
            "Тип any вимикає перевірку типів. Це іноді зручно, але небезпечно, бо ти фактично втрачаєш переваги TypeScript.",
        },
        {
          type: "code",
          content: `let value: any = "hello";
  value = 123;
  value = true;`,
        },
        {
          type: "text",
          content:
            "Тип unknown теж означає 'невідомий тип', але він безпечніший: перед використанням потрібно перевірити, що саме лежить у змінній.",
        },
        {
          type: "code",
          content: `let data: unknown = "hello";
  
  if (typeof data === "string") {
    console.log(data.toUpperCase());
  }`,
        },
        {
          type: "warning",
          label: "Увага",
          content:
            "Краще використовувати unknown замість any там, де тип ще не відомий. any варто залишати тільки як крайній варіант.",
        },
      ],
    },
  
    {
      id: "type-alias",
      title: "Type Alias",
      blocks: [
        {
          type: "text",
          content:
            "Type alias дозволяє винести тип у окрему змінну типу. Це робить код чистішим і зручнішим для повторного використання.",
        },
        {
          type: "code",
          content: `type User = {
    id: number;
    name: string;
    email: string;
  };`,
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
          label: "Порада",
          content:
            "Type alias дуже часто використовують у React для props, API response, form data та різних конфігурацій.",
        },
      ],
    },
  
    {
      id: "type-inference",
      title: "Type Inference",
      blocks: [
        {
          type: "text",
          content:
            "TypeScript часто може сам зрозуміти тип значення без явного запису. Це називається type inference.",
        },
        {
          type: "code",
          content: `let title = "Manual";
  let count = 10;
  let isActive = true;`,
        },
        {
          type: "text",
          content:
            "У цьому прикладі TypeScript сам визначить типи як string, number і boolean.",
        },
        {
          type: "tip",
          label: "Пояснення",
          content:
            "Не потрібно писати тип абсолютно скрізь. Головне — вказувати його там, де це реально допомагає: функції, об’єкти, API, props, state.",
        },
      ],
    },
  
    {
      id: "typescript-types-in-react",
      title: "Типи у React",
      blocks: [
        {
          type: "text",
          content:
            "У React типи найчастіше використовують для props, state, подій та даних, що приходять з API.",
        },
        {
          type: "code",
          content: `type ButtonProps = {
    text: string;
    disabled?: boolean;
  };
  
  const Button = ({ text, disabled }: ButtonProps) => {
    return <button disabled={disabled}>{text}</button>;
  };`,
        },
        {
          type: "tip",
          label: "Пояснення",
          content:
            "Коли props типізовані, компонент стає більш передбачуваним, а редактор одразу підказує, що саме потрібно передати.",
        },
      ],
    },
  ];