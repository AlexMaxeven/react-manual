import styles from "../components/PracticeTemplate/PracticeTemplate.module.css";

const FinishCard = ({
    title,
    text,
    result,
    total,
    primaryText,
    primaryAction,
    secondaryText,
    secondaryAction,
    }) => {
    return (
        <article className={styles.finishCard}>
        <h2 className={styles.finishTitle}>{title}</h2>

        <p className={styles.finishText}>{text}</p>

        <div className={styles.finishScore}>
            Result: {result} / {total}
        </div>

        <div className={styles.actions}>
            <button
            type="button"
            onClick={primaryAction}
            className={styles.actionButton}
            >
            {primaryText}
            </button>

            <button
            type="button"
            onClick={secondaryAction}
            className={styles.actionButtonSecondary}
            >
            {secondaryText}
            </button>
        </div>
        </article>
    );
};

export default FinishCard;