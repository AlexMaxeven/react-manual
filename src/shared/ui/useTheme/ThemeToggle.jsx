import UseTheme from "./UseTheme";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = UseTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.themeToggle} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
      aria-label="Toggle theme"
      title="Toggle theme"
      type="button"
    >
      <span className={styles.icon}>
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
};

export default ThemeToggle;