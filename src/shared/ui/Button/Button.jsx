import styles from './Button.module.css';

export default function Button({
    children,
    variant = "primary", // primary | ghost
    type = "button",
    ...props
}) {
    const cls = variant === "ghost" ? styles.ghost : styles.primary;

    return (
    <button className={`${styles.base} ${cls}`} type={type} {...props}>
        {children}
    </button>
    );
}