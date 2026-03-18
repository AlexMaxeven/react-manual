import styles from "../components/PracticeTemplate/PracticeTemplate.module.css";

const Progress = ({ current, total, score }) => {
  const progressPercent = ((current + 1) / total) * 100;

  return (
    <>
      <div className={styles.progressHeader}>
        <span className={styles.progressText}>
          Task {current + 1} / {total}
        </span>

        <span className={styles.progressText}>
          Score: {score} / {total}
        </span>
      </div>

      <div className={styles.progressBar}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </>
  );
};

export default Progress;