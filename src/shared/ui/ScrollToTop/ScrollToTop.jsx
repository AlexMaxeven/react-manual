import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    if (!isVisible) return null;

    return (
        <div className={styles.wrapper}>
        <Button
            onClick={handleScrollToTop}
            className={styles.scrollButton}
            aria-label="Scroll to top"
        >
            ↑
        </Button>
        </div>
    );
}