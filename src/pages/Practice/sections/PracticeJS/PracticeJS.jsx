import { useMemo, useState, useEffect, useRef } from "react";
import styles from "./PracticeJS.module.css";

import {
practiceJavaScriptIntro,
practiceJavaScriptLevels,
practiceJavaScriptLevel1Tasks,
practiceJavaScriptLevel2Tasks,
practiceJavaScriptLevel3Tasks,
} from "@/pages/Practice/data/practiceJS.data";

const normalize = (value) => value.trim().toLowerCase();

const PracticeJS = () => {

    const [activeLevel, setActiveLevel] = useState("level-1");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [isLevelFinished, setIsLevelFinished] = useState(false);

    const [level2Index, setLevel2Index] = useState(0);
    const [level2Value, setLevel2Value] = useState("");
    const [level2Checked, setLevel2Checked] = useState(false);
    const [level2CorrectAnswers, setLevel2CorrectAnswers] = useState(0);
    const [isLevel2Finished, setIsLevel2Finished] = useState(false);

    const [level2IsCorrect, setLevel2IsCorrect] = useState(false);

    const [level3Index, setLevel3Index] = useState(0);
    const [level3Value, setLevel3Value] = useState("");
    const [level3Checked, setLevel3Checked] = useState(false);
    const [level3CorrectAnswers, setLevel3CorrectAnswers] = useState(0);
    const [isLevel3Finished, setIsLevel3Finished] = useState(false);
    const [level3IsCorrect, setLevel3IsCorrect] = useState(false);

    const level3ResultRef = useRef(null);

    const level2ResultRef = useRef(null);

    const resultRef = useRef(null);

    const currentTask = practiceJavaScriptLevel1Tasks[currentIndex];

    const isLastTask = currentIndex === practiceJavaScriptLevel1Tasks.length - 1;

    const currentLevel2Task = practiceJavaScriptLevel2Tasks[level2Index];
    const isLastLevel2Task =
  level2Index === practiceJavaScriptLevel2Tasks.length - 1;

  const currentLevel3Task = practiceJavaScriptLevel3Tasks[level3Index];
const isLastLevel3Task =
  level3Index === practiceJavaScriptLevel3Tasks.length - 1;

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

    useEffect(() => {
        if (level2Checked && level2ResultRef.current) {
          level2ResultRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      }, [level2Checked]);

      useEffect(() => {
        if (level3Checked && level3ResultRef.current) {
          level3ResultRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      }, [level3Checked]);

      const handleLevelChange = (levelId) => {
        setActiveLevel(levelId);
        resetLevelState();
        resetLevel2State();
        resetLevel3State();
      };

    const resetLevelState = () => {
        setCurrentIndex(0);
        setSelectedAnswer("");
        setIsChecked(false);
        setCorrectAnswers(0);
        setIsLevelFinished(false);
      };

      const resetLevel2State = () => {
        setLevel2Index(0);
        setLevel2Value("");
        setLevel2Checked(false);
        setLevel2CorrectAnswers(0);
        setIsLevel2Finished(false);
        setLevel2IsCorrect(false);
      };

      const resetLevel3State = () => {
        setLevel3Index(0);
        setLevel3Value("");
        setLevel3Checked(false);
        setLevel3CorrectAnswers(0);
        setIsLevel3Finished(false);
        setLevel3IsCorrect(false);
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
        resetLevel2State();
      };

      const handleLevel2Check = () => {
        const preparedValue = level2Value.trim();
      
        if (!preparedValue || level2Checked) return;
      
        const answerIsCorrect =
          normalize(preparedValue) === normalize(currentLevel2Task.answer);
      
        setLevel2IsCorrect(answerIsCorrect);
      
        if (answerIsCorrect) {
          setLevel2CorrectAnswers((prev) => prev + 1);
        }
      
        setLevel2Checked(true);
      };
      
      const handleLevel2Next = () => {
        if (isLastLevel2Task) return;
      
        setLevel2Index((prev) => prev + 1);
        setLevel2Value("");
        setLevel2Checked(false);
        setLevel2IsCorrect(false);
      };
      
      const handleLevel2Finish = () => {
        setIsLevel2Finished(true);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      
      const handleLevel2Restart = () => {
        resetLevel2State();
      };
      
      const handleGoToLevel3 = () => {
        setActiveLevel("level-3");
        resetLevel2State();
        resetLevel3State();
      };

      const handleLevel3Check = () => {
        const preparedValue = level3Value.trim();
      
        if (!preparedValue || level3Checked) return;
      
        const answerIsCorrect = currentLevel3Task.requiredParts.every((part) =>
          preparedValue.includes(part)
        );
      
        setLevel3IsCorrect(answerIsCorrect);
      
        if (answerIsCorrect) {
          setLevel3CorrectAnswers((prev) => prev + 1);
        }
      
        setLevel3Checked(true);
      };
      
      const handleLevel3Next = () => {
        if (isLastLevel3Task) return;
      
        setLevel3Index((prev) => prev + 1);
        setLevel3Value("");
        setLevel3Checked(false);
        setLevel3IsCorrect(false);
      };
      
      const handleLevel3Finish = () => {
        setIsLevel3Finished(true);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      
      const handleLevel3Restart = () => {
        resetLevel3State();
      };
      
      const handleRestartAll = () => {
        setActiveLevel("level-1");
        resetLevelState();
        resetLevel2State();
        resetLevel3State();
      };

    const progressPercent =
        ((currentIndex + 1) / practiceJavaScriptLevel1Tasks.length) * 100;

    const contentAnimationKey = `${activeLevel}-${currentIndex}-${level2Index}-${level3Index}-${isLevelFinished}-${isLevel2Finished}-${isLevel3Finished}`;

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

        <div key={contentAnimationKey} className={styles.fadeContent}>
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

            {activeLevel === "level-2" && !isLevel2Finished && (
            <div className={styles.quiz}>
                <div className={styles.progressHeader}>
                <span className={styles.progressText}>
                    Task {level2Index + 1} / {practiceJavaScriptLevel2Tasks.length}
                </span>

                <span className={styles.progressText}>
                    Score: {level2CorrectAnswers} / {practiceJavaScriptLevel2Tasks.length}
                </span>
                </div>

                <div className={styles.progressBar}>
                <div
                    className={styles.progressBarFill}
                    style={{
                    width: `${
                        ((level2Index + 1) / practiceJavaScriptLevel2Tasks.length) * 100
                    }%`,
                    }}
                />
                </div>

                <article className={styles.card}>
                <h2 className={styles.cardTitle}>Level 2 — Complete the Code</h2>
                <p className={styles.question}>{currentLevel2Task.question}</p>

                <pre className={styles.codeBlock}>
                    <code>{currentLevel2Task.code}</code>
                </pre>

                <div className={styles.inputWrap}>
                    <label htmlFor="level2-answer" className={styles.inputLabel}>
                    Your answer
                    </label>

                    <input
                        id="level2-answer"
                        type="text"
                        value={level2Value}
                        onChange={(e) => {
                            if (level2Checked) return;
                            setLevel2Value(e.target.value);
                        }}
                        placeholder="Type missing part..."
                        className={styles.input}
                        autoComplete="off"
                        spellCheck={false}
                    />
                </div>

                <div className={styles.actions}>
                    <button
                    type="button"
                    onClick={handleLevel2Check}
                    className={styles.actionButton}
                    disabled={!level2Value.trim() || level2Checked}
                    >
                    Check answer
                    </button>

                    {!isLastLevel2Task ? (
                    <button
                        type="button"
                        onClick={handleLevel2Next}
                        className={`${styles.actionButtonSecondary} ${
                        level2Checked ? styles.actionButtonPulse : ""
                        }`}
                        disabled={!level2Checked}
                    >
                        Next task
                    </button>
                    ) : (
                    <button
                        type="button"
                        onClick={handleLevel2Finish}
                        className={`${styles.actionButtonSecondary} ${
                        level2Checked ? styles.actionButtonPulse : ""
                        }`}
                        disabled={!level2Checked}
                    >
                        Finish level
                    </button>
                    )}
                </div>

                {level2Checked && (
                    <div ref={level2ResultRef} className={styles.feedbackBlock}>
                    <div
                        className={`${styles.result} ${
                            level2IsCorrect ? styles.resultSuccess : styles.resultError
                        }`}
                    >
                        {level2IsCorrect ? "Correct ✅" : "Incorrect ❌"}
                    </div>

                    <div className={styles.explanation}>
                        <strong>Explanation:</strong> {currentLevel2Task.explanation}
                    </div>

                    {!level2IsCorrect && (
                        <div className={styles.answer}>
                            <strong>Correct answer:</strong> {currentLevel2Task.answer}
                        </div>
                    )}
                    </div>
                )}
                </article>
            </div>
            )}

            {activeLevel === "level-2" && isLevel2Finished && (
            <article className={styles.finishCard}>
                <h2 className={styles.finishTitle}>Level 2 completed</h2>

                <p className={styles.finishText}>
                Ти завершив рівень Complete the Code у JavaScript practice.
                </p>

                <div className={styles.finishScore}>
                Result: {level2CorrectAnswers} / {practiceJavaScriptLevel2Tasks.length}
                </div>

                <div className={styles.actions}>
                <button
                    type="button"
                    onClick={handleLevel2Restart}
                    className={styles.actionButton}
                >
                    Restart level
                </button>

                <button
                    type="button"
                    onClick={handleGoToLevel3}
                    className={styles.actionButtonSecondary}
                >
                    Go to Level 3
                </button>
                </div>
            </article>
            )}

            {activeLevel === "level-3" && !isLevel3Finished && (
            <div className={styles.quiz}>
                <div className={styles.progressHeader}>
                <span className={styles.progressText}>
                    Task {level3Index + 1} / {practiceJavaScriptLevel3Tasks.length}
                </span>

                <span className={styles.progressText}>
                    Score: {level3CorrectAnswers} / {practiceJavaScriptLevel3Tasks.length}
                </span>
                </div>

                <div className={styles.progressBar}>
                <div
                    className={styles.progressBarFill}
                    style={{
                    width: `${
                        ((level3Index + 1) / practiceJavaScriptLevel3Tasks.length) * 100
                    }%`,
                    }}
                />
                </div>

                <article className={styles.card}>
                <h2 className={styles.cardTitle}>Level 3 — Write the Code</h2>
                <p className={styles.question}>{currentLevel3Task.question}</p>

                <div className={styles.inputWrap}>
                    <label htmlFor="level3-answer" className={styles.inputLabel}>
                    Your code
                    </label>

                    <textarea
                    id="level3-answer"
                    value={level3Value}
                    onChange={(e) => {
                        if (level3Checked) return;
                        setLevel3Value(e.target.value);
                    }}
                    placeholder="Write your code here..."
                    className={styles.textarea}
                    spellCheck={false}
                    />
                </div>

                <div className={styles.actions}>
                    <button
                    type="button"
                    onClick={handleLevel3Check}
                    className={styles.actionButton}
                    disabled={!level3Value.trim() || level3Checked}
                    >
                    Check answer
                    </button>

                    {!isLastLevel3Task ? (
                    <button
                        type="button"
                        onClick={handleLevel3Next}
                        className={`${styles.actionButtonSecondary} ${
                        level3Checked ? styles.actionButtonPulse : ""
                        }`}
                        disabled={!level3Checked}
                    >
                        Next task
                    </button>
                    ) : (
                    <button
                        type="button"
                        onClick={handleLevel3Finish}
                        className={`${styles.actionButtonSecondary} ${
                        level3Checked ? styles.actionButtonPulse : ""
                        }`}
                        disabled={!level3Checked}
                    >
                        Finish level
                    </button>
                    )}
                </div>

                {level3Checked && (
                    <div ref={level3ResultRef} className={styles.feedbackBlock}>
                    <div
                        className={`${styles.result} ${
                        level3IsCorrect ? styles.resultSuccess : styles.resultError
                        }`}
                    >
                        {level3IsCorrect ? "Correct ✅" : "Incorrect ❌"}
                    </div>

                    <div className={styles.explanation}>
                        <strong>Explanation:</strong> {currentLevel3Task.explanation}
                    </div>

                    {!level3IsCorrect && (
                        <div className={styles.answer}>
                        <strong>Expected parts:</strong>{" "}
                        {currentLevel3Task.requiredParts.join(", ")}
                        </div>
                    )}
                    </div>
                )}
                </article>
            </div>
            )}

            {activeLevel === "level-3" && isLevel3Finished && (
            <article className={styles.finishCard}>
                <h2 className={styles.finishTitle}>JavaScript Practice completed</h2>

                <p className={styles.finishText}>
                Ти завершив усі 3 рівні JavaScript practice.
                </p>

                <div className={styles.finishScore}>
                Result: {level3CorrectAnswers} / {practiceJavaScriptLevel3Tasks.length}
                </div>

                <div className={styles.actions}>
                <button
                    type="button"
                    onClick={handleLevel3Restart}
                    className={styles.actionButton}
                >
                    Restart level
                </button>

                <button
                    type="button"
                    onClick={handleRestartAll}
                    className={styles.actionButtonSecondary}
                >
                    Restart all practice
                </button>
                </div>
            </article>
            )}
        </div>
        

        </section>
    );
};

export default PracticeJS;