import UseTheme from "./useTheme";

const ThemeToggle = () => {
    const { theme, toggleTheme } = UseTheme();

    return (
        <button onClick={toggleTheme}>
        {theme === "dark" ? "🌙" : "☀️"}
        </button>
    );
}

export default ThemeToggle;