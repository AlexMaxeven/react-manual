import styles from './BurgerButton.module.css';

const BurgerButton = ({ isOpen, onClick }) => {

    return (
        <button
            type="button"
            className={styles.btn}
            onClick={onClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
        >
            <span 
                className={`${styles.line} ${isOpen ? styles.lineTopOpen : ''}`}
            />
            <span 
                className={`${styles.line} ${isOpen ? styles.lineMidOpen : ''}`}
            />
            <span 
                className={`${styles.line} ${isOpen ? styles.lineBotOpen : ''}`}
            />
        </button>
    )
}

export default BurgerButton;