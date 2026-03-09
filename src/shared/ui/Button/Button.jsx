import styles from "./Button.module.css";

export default function Button({
    children,
    variant = "primary",
    type = "button",
    className = "",
    ...props
    }) {
    const cls = variant === "ghost" ? styles.ghost : styles.primary;

    return (
        <button
        className={`${styles.base} ${cls} ${className}`}
        type={type}
        {...props}
        >
        {children}
        </button>
    );
}