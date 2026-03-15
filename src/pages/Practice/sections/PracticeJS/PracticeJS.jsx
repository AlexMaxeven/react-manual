import { useMemo, useState } from "react";
import { useEffect, useRef} from "react";
import styles from "./PracticeJS.module.css";
import {
practiceJavaScriptIntro,
practiceJavaScriptLevels,
practiceJavaScriptLevel1Tasks,
} from "@/pages/Practice/data/practiceJS.data";

const normalize = (value) => value.trim().toLowerCase();

const PracticeJS = () => {
//   const resultRef = useRef(null);

    const [activeLevel, setActiveLevel] = useState("level-1");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [isLevelFinished, setIsLevelFinished] = useState(false);

    const resultRef = useRef(null);

    const currentTask = practiceJavaScriptLevel1Tasks[currentIndex];

    const isLastTask = currentIndex === practiceJavaScriptLevel1Tasks.length - 1;

    const isCorrect = useMemo(() => {
        if (!isChecked || !selectedAnswer) return false;

        return normalize(selectedAnswer) === normalize(currentTask.answer);
    }, [isChecked, selectedAnswer, currentTask]);

    useEffect(() => {
        if (isChecked && resultRef.current) {
            resultRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            });
        }
    }, [isChecked]);

    const handleLevelChange = (levelId) => {
        setActiveLevel(levelId);
        resetLevelState();
      };

    const resetLevelState = () => {
        setCurrentIndex(0);
        setSelectedAnswer("");
        setIsChecked(false);
        setCorrectAnswers(0);
        setIsLevelFinished(false);
      };

    const handleCheck = () => {
        if (!selectedAnswer || isChecked) return;
      
        const answerIsCorrect =
          normalize(selectedAnswer) === normalize(currentTask.answer);
      
        if (answerIsCorrect) {
          setCorrectAnswers((prev) => prev + 1);
        }
      
        setIsChecked(true);
    };

    const handleNext = () => {
        if (isLastTask) return;
      
        setCurrentIndex((prev) => prev + 1);
        setSelectedAnswer("");
        setIsChecked(false);
    };

    const handleFinishLevel = () => {
        setIsLevelFinished(true);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      
      const handleRestart = () => {
        resetLevelState();
      };
      
      const handleGoToLevel2 = () => {
        setActiveLevel("level-2");
        resetLevelState();
      };

    const progressPercent =
        ((currentIndex + 1) / practiceJavaScriptLevel1Tasks.length) * 100;

        useEffect(() => {
            if (isChecked && resultRef.current) {
            resultRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
            }
        }, [isChecked]);

    return (
        <section className={styles.root}>
        <header className={styles.hero}>
            <h1 className={styles.title}>{practiceJavaScriptIntro.title}</h1>
            <p className={styles.description}>{practiceJavaScriptIntro.description}</p>
        </header>

        <div className={styles.levels}>
            {practiceJavaScriptLevels.map((level) => (
            <button
                key={level.id}
                type="button"
                onClick={() => handleLevelChange(level.id)}
                className={`${styles.levelButton} ${
                activeLevel === level.id ? styles.levelButtonActive : ""
                }`}
            >
                {level.label}
            </button>
            ))}
        </div>

        {activeLevel === "level-1" && !isLevelFinished && (
            <div className={styles.quiz}>
            <div className={styles.progressHeader}>
                <span className={styles.progressText}>
                    Task {currentIndex + 1} / {practiceJavaScriptLevel1Tasks.length}
                </span>

                <span className={styles.progressText}>
                    Score: {correctAnswers} / {practiceJavaScriptLevel1Tasks.length}
                </span>
            </div>

            <div className={styles.progressBar}>
                <div
                className={styles.progressBarFill}
                style={{ width: `${progressPercent}%` }}
                />
            </div>

            <article className={styles.card}>
                <h2 className={styles.cardTitle}>Level 1 — Basics Quiz</h2>
                <p className={styles.question}>{currentTask.question}</p>

                <div className={styles.options}>
                {currentTask.options.map((option) => {
                    const isSelected = selectedAnswer === option;

                    return (
                    <button
                        key={option}
                        type="button"
                        onClick={() => {
                        if (isChecked) return;
                        setSelectedAnswer(option);
                        }}
                        className={`${styles.option} ${
                        isSelected ? styles.optionSelected : ""
                        }`}
                    >
                        {option}
                    </button>
                    );
                })}
                </div>

                <div className={styles.actions}>
                <button
                    type="button"
                    onClick={handleCheck}
                    className={styles.actionButton}
                    disabled={!selectedAnswer || isChecked}
                >
                    Check answer
                </button>

                {!isLastTask ? (
                    <button
                        type="button"
                        onClick={handleNext}
                        className={`${styles.actionButtonSecondary} ${
                        isChecked ? styles.actionButtonPulse : ""
                        }`}
                        disabled={!isChecked}
                    >
                        Next task
                    </button>
                    ) : (
                    <button
                        type="button"
                        onClick={handleFinishLevel}
                        className={`${styles.actionButtonSecondary} ${
                        isChecked ? styles.actionButtonPulse : ""
                        }`}
                        disabled={!isChecked}
                    >
                        Finish level
                    </button>
                )}
                </div>

                {isChecked && (
                    <div ref={resultRef} className={styles.feedbackBlock}>
                        <div
                        className={`${styles.result} ${
                            isCorrect ? styles.resultSuccess : styles.resultError
                        }`}
                        >
                        {isCorrect ? "Correct ✅" : "Incorrect ❌"}
                        </div>

                        <div className={styles.explanation}>
                        <strong>Explanation:</strong> {currentTask.explanation}
                        </div>

                        {!isCorrect && (
                        <div className={styles.answer}>
                            <strong>Correct answer:</strong> {currentTask.answer}
                        </div>
                        )}
                    </div>
                )}
            </article>
            </div>
        )}

        {activeLevel === "level-1" && isLevelFinished && (
        <article className={styles.finishCard}>
            <h2 className={styles.finishTitle}>Level 1 completed</h2>

            <p className={styles.finishText}>
            Ти завершив базовий рівень JavaScript practice.
            </p>

            <div className={styles.finishScore}>
            Result: {correctAnswers} / {practiceJavaScriptLevel1Tasks.length}
            </div>

            <div className={styles.actions}>
            <button
                type="button"
                onClick={handleRestart}
                className={styles.actionButton}
            >
                Restart level
            </button>

            <button
                type="button"
                onClick={handleGoToLevel2}
                className={styles.actionButtonSecondary}
            >
                Go to Level 2
            </button>
            </div>
        </article>
        )}

        {activeLevel === "level-2" && (
            <article className={styles.placeholder}>
            <h2 className={styles.placeholderTitle}>Level 2 — Complete the Code</h2>
            <p className={styles.placeholderText}>
                Тут буде рівень, де потрібно доповнювати код, щоб він працював правильно.
            </p>
            </article>
        )}

        {activeLevel === "level-3" && (
            <article className={styles.placeholder}>
            <h2 className={styles.placeholderTitle}>Level 3 — Write the Code</h2>
            <p className={styles.placeholderText}>
                Тут буде рівень, де потрібно самостійно писати код і проходити перевірку.
            </p>
            </article>
        )}
        </section>
    );
};

export default PracticeJS;