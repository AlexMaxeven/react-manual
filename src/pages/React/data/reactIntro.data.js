const reactIntroSections = [
    {
      id: "what-is-react",
      title: "Що таке React",
      blocks: [
        {
          type: "text",
          content:
            "React — це JavaScript бібліотека для створення користувацьких інтерфейсів. Вона дозволяє будувати UI з незалежних і повторно використовуваних компонентів.",
        },
        {
          type: "text",
          content:
            "React використовується для побудови SPA, панелей керування, інтерактивних веб-додатків і великих фронтенд-проєктів.",
        },
        {
          type: "tip",
          label: "Порада",
          content:
            "Сприймай React не як набір окремих хуків, а як систему: компоненти + props + state + render cycle.",
        },
      ],
    },
  
    {
      id: "jsx",
      title: "JSX",
      blocks: [
        {
          type: "text",
          content:
            "JSX (JavaScript XML) — це синтаксис, який дозволяє писати HTML-подібний код всередині JavaScript.",
        },
        {
          type: "text",
          content:
            "JSX використовується для опису UI. Він робить код більш читабельним і наочно показує, що саме буде відображено на екрані.",
        },
        {
          type: "subtitle",
          content: "Приклад JSX",
        },
        {
          type: "code",
          content: `const element = <h1>Hello React</h1>;`,
        },
        {
          type: "subtitle",
          content: "Що відбувається всередині",
        },
        {
          type: "text",
          content:
            "JSX не є HTML. Під час компіляції він перетворюється у виклики React.createElement().",
        },
        {
          type: "code",
          content: `const element = React.createElement(
    "h1",
    null,
    "Hello React"
  );`,
        },
        {
          type: "warning",
          label: "Важливо",
          content:
            "JSX тільки виглядає як HTML, але насправді це JavaScript-синтаксис, який збирається у звичайний JS-код.",
        },
      ],
    },
  
    {
      id: "jsx-rules",
      title: "JSX Rules",
      blocks: [
        {
          type: "text",
          content: "У JSX є кілька базових правил, які треба запам’ятати з самого початку.",
        },
        {
          type: "list",
          items: [
            "JSX повинен мати один кореневий елемент",
            "Усі теги потрібно закривати",
            "JavaScript вирази вставляються через фігурні дужки",
            "Атрибути пишуться у camelCase",
          ],
        },
        {
          type: "code",
          content: `const element = (
    <div className="card">
      <h2>Hello</h2>
      <p>{user.name}</p>
    </div>
  );`,
        },
        {
          type: "tip",
          label: "Порада",
          content:
            "Якщо потрібно повернути кілька елементів без зайвого div, використовуй Fragment: <>...</>.",
        },
      ],
    },
  
    {
      id: "jsx-vs-html",
      title: "JSX vs HTML",
      blocks: [
        {
          type: "text",
          content:
            "JSX схожий на HTML, але має важливі відмінності, бо працює всередині JavaScript.",
        },
        {
          type: "list",
          items: [
            "class → className",
            "for → htmlFor",
            "style передається як об’єкт",
            "Події пишуться у camelCase, наприклад onClick",
            "Усі теги потрібно закривати",
          ],
        },
        {
          type: "code",
          content: `<button className="btn" onClick={handleClick}>
    Click
  </button>`,
        },
      ],
    },
  
    {
      id: "props",
      title: "Props",
      blocks: [
        {
          type: "text",
          content:
            "Props — це спосіб передавати дані від батьківського компонента до дочірнього.",
        },
        {
          type: "subtitle",
          content: "Приклад передачі props",
        },
        {
          type: "code",
          content: `<User name="Alex" age={25} />`,
        },
        {
          type: "subtitle",
          content: "Отримання props як об’єкта",
        },
        {
          type: "code",
          content: `const User = (props) => {
    return <h2>{props.name}</h2>;
  };`,
        },
        {
          type: "subtitle",
          content: "Деструктуризація props",
        },
        {
          type: "code",
          content: `const User = ({ name, age }) => {
    return <h2>{name} - {age}</h2>;
  };`,
        },
        {
          type: "tip",
          label: "Порада",
          content:
            "У більшості випадків у React зручніше одразу деструктуризувати props у параметрах компонента.",
        },
      ],
    },
  
    {
      id: "children",
      title: "Children",
      blocks: [
        {
          type: "text",
          content:
            "children — це спеціальний prop, який містить JSX, переданий між відкриваючим і закриваючим тегами компонента.",
        },
        {
          type: "code",
          content: `<Card>
    <h2>Title</h2>
    <p>Description</p>
  </Card>`,
        },
        {
          type: "text",
          content: "Компонент отримує children так:",
        },
        {
          type: "code",
          content: `const Card = ({ children }) => {
    return <div>{children}</div>;
  };`,
        },
        {
          type: "tip",
          label: "Ідея",
          content:
            "children робить компоненти гнучкими: ти можеш передавати всередину будь-який JSX, а не тільки простий текст.",
        },
      ],
    },
  
    {
      id: "components",
      title: "Components",
      blocks: [
        {
          type: "text",
          content:
            "Компоненти — це основа React. Кожен компонент є функцією, яка повертає JSX.",
        },
        {
          type: "code",
          content: `const Welcome = () => {
    return <h1>Hello</h1>;
  };`,
        },
        {
          type: "text",
          content:
            "З компонентів будують увесь інтерфейс: кнопки, форми, картки, секції, цілі сторінки.",
        },
        {
          type: "warning",
          label: "Увага",
          content:
            "Назви React-компонентів повинні починатися з великої літери, інакше React буде сприймати їх як звичайні HTML-теги.",
        },
      ],
    },
  ];

export default reactIntroSections;