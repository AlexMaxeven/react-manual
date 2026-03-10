import Button from "../Button/Button";
import styles from "./ScrollToTop.module.css";
import useScrollThreshold from "@/shared/lib/useScrollThreshold";

export default function ScrollToTop() {
  const isVisible = useScrollThreshold(300);

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