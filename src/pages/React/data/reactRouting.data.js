export const reactRoutingSections = [
    {
    id: "what-is-routing",
    title: "Що таке routing",
    blocks: [
        {
        type: "text",
        content:
            "Routing у React відповідає за перемикання між сторінками без повного перезавантаження браузера. Це одна з основ SPA-додатків.",
        },
        {
        type: "text",
        content:
            "Замість того щоб браузер щоразу завантажував нову HTML-сторінку, React просто змінює потрібний компонент залежно від URL.",
        },
        {
        type: "tip",
        label: "Ідея",
        content:
            "Routing у React — це відображення URL на певний компонент або layout.",
        },
    ],
    },

    {
    id: "react-router-dom",
    title: "react-router-dom",
    blocks: [
        {
        type: "text",
        content:
            "Найпоширеніша бібліотека для маршрутизації у React — react-router-dom. Саме вона дозволяє будувати сторінки, вкладені маршрути, layout-компоненти та навігацію.",
        },
        {
        type: "code",
        content: `npm install react-router-dom`,
        },
        {
        type: "text",
        content:
            "У більшості сучасних React-проєктів саме ця бібліотека використовується для routing.",
        },
    ],
    },

    {
    id: "browser-router",
    title: "BrowserRouter",
    blocks: [
        {
        type: "text",
        content:
            "Щоб маршрути почали працювати, додаток потрібно обгорнути в BrowserRouter. Він слухає зміну адреси у браузері і показує потрібний компонент.",
        },
        {
        type: "code",
        content: `import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);`,
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "Без BrowserRouter компоненти Route, Routes, NavLink та Outlet не будуть працювати.",
        },
    ],
    },

    {
    id: "routes-and-route",
    title: "Routes і Route",
    blocks: [
        {
        type: "text",
        content:
            "Компонент Routes містить список маршрутів, а Route описує, який компонент треба показати для конкретного шляху.",
        },
        {
        type: "code",
        content: `import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
    return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
    </Routes>
    );
}`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Routes — це контейнер для маршрутів, а Route — окремий опис сторінки.",
        },
    ],
    },

    {
    id: "navlink-and-link",
    title: "Link і NavLink",
    blocks: [
        {
        type: "text",
        content:
            "Для переходу між сторінками в React Router використовують Link або NavLink. Вони працюють як посилання, але без повного перезавантаження сторінки.",
        },
        {
        type: "subtitle",
        content: "Link",
        },
        {
        type: "code",
        content: `import { Link } from "react-router-dom";

<Link to="/about">About</Link>`,
        },
        {
        type: "subtitle",
        content: "NavLink",
        },
        {
        type: "code",
        content: `import { NavLink } from "react-router-dom";

<NavLink to="/about">About</NavLink>`,
        },
        {
        type: "text",
        content:
            "NavLink відрізняється тим, що може автоматично визначати активний маршрут і давати інший клас або стиль.",
        },
        {
        type: "code",
        content: `<NavLink
    to="/about"
    className={({ isActive }) => (isActive ? "active" : "")}
>
    About
</NavLink>`,
        },
    ],
    },

    {
    id: "nested-routes",
    title: "Вкладені маршрути",
    blocks: [
        {
        type: "text",
        content:
            "У реальних проєктах часто бувають вкладені сторінки. Наприклад, є загальний layout для розділу і декілька внутрішніх сторінок.",
        },
        {
        type: "code",
        content: `import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import OverviewPage from "./pages/OverviewPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
    return (
    <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="settings" element={<SettingsPage />} />
        </Route>
    </Routes>
    );
}`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Тут сторінки Overview і Settings рендеряться всередині DashboardLayout.",
        },
    ],
    },

    {
    id: "outlet",
    title: "Outlet",
    blocks: [
        {
        type: "text",
        content:
            "Outlet — це місце в layout-компоненті, де буде рендеритися дочірній маршрут.",
        },
        {
        type: "code",
        content: `import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
    <div>
        <h1>Dashboard</h1>
        <Outlet />
    </div>
    );
};

export default DashboardLayout;`,
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "Якщо у layout-компоненті немає Outlet, вкладені сторінки не будуть показуватись.",
        },
    ],
    },

    {
    id: "layout-routing",
    title: "Layout routing",
    blocks: [
        {
        type: "text",
        content:
            "Layout routing — це підхід, коли кілька сторінок мають спільну структуру: header, sidebar, навігацію, контейнер або footer.",
        },
        {
        type: "text",
        content:
            "У твоєму мануалі саме це і використовується: є layout для секції React, окремий layout для TypeScript і внутрішні сторінки через Outlet.",
        },
        {
        type: "code",
        content: `const TypeScriptManualLayout = () => {
    return (
    <div>
        <ManualNav title="TYPESCRIPT" />
        <Outlet />
    </div>
    );
};`,
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "Layout routing дуже зручний, коли однакове меню або оболонка мають використовуватися на кількох сторінках.",
        },
    ],
    },

    {
    id: "index-route",
    title: "Index route",
    blocks: [
        {
        type: "text",
        content:
            "Index route використовується для головної сторінки вкладеного маршруту. Він показується тоді, коли шлях батьківського маршруту відкритий без додаткової вкладеності.",
        },
        {
        type: "code",
        content: `<Route path="/react" element={<ReactManualLayout />}>
    <Route index element={<ReactOverviewPage />} />
    <Route path="basics" element={<ReactBasicsPage />} />
    <Route path="hooks" element={<ReactHooksPage />} />
</Route>`,
        },
        {
        type: "text",
        content:
            "У цьому прикладі при переході на /react відкриється саме ReactOverviewPage.",
        },
    ],
    },

    {
    id: "relative-paths",
    title: "Відносні шляхи",
    blocks: [
        {
        type: "text",
        content:
            "У вкладених маршрутах дочірні шляхи зазвичай пишуться відносно батьківського маршруту.",
        },
        {
        type: "code",
        content: `<Route path="/typescript" element={<TypeScriptManualLayout />}>
    <Route index element={<TypeScriptOverviewPage />} />
    <Route path="types" element={<TypeScriptTypesPage />} />
    <Route path="interfaces" element={<TypeScriptInterfacesPage />} />
</Route>`,
        },
        {
        type: "tip",
        label: "Пояснення",
        content:
            "Тут шлях interfaces насправді означає /typescript/interfaces.",
        },
    ],
    },

    {
    id: "programmatic-navigation",
    title: "Програмна навігація через useNavigate",
    blocks: [
        {
        type: "text",
        content:
            "Іноді потрібно перейти на іншу сторінку не через клік по Link, а програмно — наприклад, після submit форми або авторизації. Для цього використовують useNavigate.",
        },
        {
        type: "code",
        content: `import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
    navigate("/dashboard");
    };

    return <button onClick={handleLogin}>Login</button>;
};`,
        },
        {
        type: "tip",
        label: "Практика",
        content:
            "useNavigate часто використовують після form submit, login, logout або переходу на детальну сторінку.",
        },
    ],
    },

    {
    id: "route-params",
    title: "Параметри маршруту",
    blocks: [
        {
        type: "text",
        content:
            "Якщо сторінка залежить від ID або іншого параметра, у шляху можна використовувати route params.",
        },
        {
        type: "code",
        content: `<Route path="/users/:id" element={<UserPage />} />`,
        },
        {
        type: "code",
        content: `import { useParams } from "react-router-dom";

const UserPage = () => {
    const { id } = useParams();

    return <div>User ID: {id}</div>;
};`,
        },
        {
        type: "warning",
        label: "Важливо",
        content:
            "useParams повертає параметри з URL. Це зручно для сторінок деталей, профілів, товарів або постів.",
        },
    ],
    },

    {
    id: "routing-best-practices",
    title: "Практичні поради",
    blocks: [
        {
        type: "list",
        items: [
            "Використовуй layout-компоненти для спільної структури сторінок",
            "Для активних пунктів меню використовуй NavLink",
            "Не забувай про Outlet у вкладених маршрутах",
            "Для головної сторінки секції використовуй index route",
            "Для переходів після дій користувача використовуй useNavigate",
        ],
        },
        {
        type: "tip",
        label: "Головна думка",
        content:
            "Хороший routing робить структуру додатка зрозумілою: є URL, є layout, є сторінка, і між ними чіткий зв’язок.",
        },
    ],
    },
];