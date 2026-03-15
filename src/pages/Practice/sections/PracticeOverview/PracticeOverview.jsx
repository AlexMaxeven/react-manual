import { NavLink } from "react-router-dom";
import styles from "./PracticeOverview.module.css";
import {
  practiceOverviewIntro,
  practiceOverviewCards,
  practiceOverviewSteps,
} from "@/pages/Practice/data/practiceOverview.data";

const Overview = () => {
  return (
    <section className={styles.root}>
      <header className={styles.hero}>
        <h1 className={styles.title}>{practiceOverviewIntro.title}</h1>
        <p className={styles.text}>{practiceOverviewIntro.description}</p>
      </header>

      <div className={styles.grid}>
        {practiceOverviewCards.map((item) => (
          <article key={item.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.cardText}>{item.description}</p>

            <NavLink to={item.to} className={styles.cardLink}>
              {item.buttonText}
            </NavLink>
          </article>
        ))}
      </div>

      <section className={styles.infoBlock}>
        <h2 className={styles.infoTitle}>Як це працює</h2>

        <div className={styles.infoList}>
          {practiceOverviewSteps.map((step) => (
            <div key={step.id} className={styles.infoItem}>
              <span className={styles.infoNumber}>{step.number}</span>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Overview;