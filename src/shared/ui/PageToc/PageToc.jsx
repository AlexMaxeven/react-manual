import { useState } from "react";
import styles from "./PageToc.module.css";

const PageToc = ({ title = "На цій сторінці", items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={styles.toc}>
      <button
        type="button"
        className={styles.tocTrigger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
          ▾
        </span>
      </button>

      <div className={`${styles.tocContent} ${isOpen ? styles.tocContentOpen : ""}`}>
        <nav className={styles.tocNav}>
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={styles.tocLink}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default PageToc;