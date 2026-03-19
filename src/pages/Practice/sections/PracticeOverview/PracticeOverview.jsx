import { NavLink } from "react-router-dom";
import styles from "./PracticeOverview.module.css";
import {
  practiceOverviewIntro,
  practiceOverviewCards,
  practiceOverviewSteps,
  practiceOverviewMeta,
} from "@/pages/Practice/data/practiceOverview.data";


const getPracticeProgress = (storageKey, totalTasks) => {
  try {
    const raw = localStorage.getItem(storageKey);

    if (!raw) {
      return {
        solved: 0,
        total: totalTasks,
        isStarted: false,
      };
    }

    const parsed = JSON.parse(raw);

    const solved =
      (parsed?.level1?.correctAnswers || 0) +
      (parsed?.level2?.correctAnswers || 0) +
      (parsed?.level3?.correctAnswers || 0);

    const isStarted =
      solved > 0 ||
      parsed?.level1?.index > 0 ||
      parsed?.level2?.index > 0 ||
      parsed?.level3?.index > 0;

    return {
      solved,
      total: totalTasks,
      isStarted,
    };
  } catch {
    return {
      solved: 0,
      total: totalTasks,
      isStarted: false,
    };
  }
};

const Overview = () => {
  return (
    <section className={styles.root}>
      <header className={styles.hero}>
        <h1 className={styles.title}>{practiceOverviewIntro.title}</h1>
        <p className={styles.text}>{practiceOverviewIntro.description}</p>
      </header>
      <div className={styles.metaRow}>
        {practiceOverviewMeta.map((item) => (
          <span key={item} className={styles.metaBadge}>
            {item}
          </span>
        ))}
      </div>

      <div className={styles.grid}>
        {practiceOverviewCards.map((item) => {

          const progress = getPracticeProgress(item.storageKey, item.totalTasks);
        return (
          <article key={item.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.cardText}>{item.description}</p>

            <div className={styles.cardProgress}>
              {progress.isStarted ? (
                <>
                  <span className={styles.cardProgressLabel}>Progress</span>
                  <span className={styles.cardProgressValue}>
                    {progress.solved} / {progress.total}
                  </span>
                </>
              ) : (
                <span className={styles.cardProgressEmpty}>Not started</span>
              )}
            </div>

            <NavLink to={item.to} className={styles.cardLink}>
              {progress.isStarted ? "Continue practice" : item.buttonText}
            </NavLink>
          </article>
        );
      })}
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