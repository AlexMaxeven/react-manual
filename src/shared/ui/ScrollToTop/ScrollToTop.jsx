import { useState, useEffect } from "react";
import styles from './ScrollToTop.module.css';

const ScrollToTopButton = () => {
const [visible, setVisible] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    if (!visible) return null;

    return (
        <button className={styles.scrollTopBtn} onClick={scrollTop}>
        ↑
        </button>
    );
};

export default ScrollToTopButton;