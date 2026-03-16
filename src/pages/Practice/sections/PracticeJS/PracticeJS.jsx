import { useState } from "react";
import styles from "./PracticeJS.module.css";

import {
    practiceJavaScriptIntro,
    practiceJavaScriptLevels,
    practiceJavaScriptLevel1Tasks,
    practiceJavaScriptLevel2Tasks,
    practiceJavaScriptLevel3Tasks,
} from "@/pages/Practice/data/practiceJS.data";

import Progress from "@/pages/Practice/components/Progress";
import FeedBack from "@/pages/Practice/components/FeedBack";
import FinishCard from "@/pages/Practice/components/FinishCard";

import usePracticeLevel from "@/pages/Practice/hooks/usePracticeLevel";

const PracticeJS = () => {

    const [activeLevel, setActiveLevel] = useState("level-1");

    const level1 = usePracticeLevel({
        tasks: practiceJavaScriptLevel1Tasks,
        mode: "exact",
    });
      
    const level2 = usePracticeLevel({
        tasks: practiceJavaScriptLevel2Tasks,
        mode: "exact",
    });
    
    const level3 = usePracticeLevel({
        tasks: practiceJavaScriptLevel3Tasks,
        mode: "includes",
        getExpectedParts: (task) => task.requiredParts,
    });

    const levels = {
        "level-1": level1,
        "level-2": level2,
        "level-3": level3,
    };

    const currentLevel = levels[activeLevel];

    const resetLevels = (...levels) => {
        levels.forEach(level => level.reset());
    }

    const handleLevelChange = (levelId) => {
        setActiveLevel(levelId);
        resetLevels(level1, level2, level3);
    };

    const handleGoToLevel2 = () => {
        setActiveLevel("level-2");
        resetLevels(level1, level2);
    };

    const handleGoToLevel3 = () => {
        setActiveLevel("level-3");
        resetLevels(level2, level3);
    };

    const handleRestartAll = () => {
        setActiveLevel("level-1");
        resetLevels(level1, level2, level3);
    };

    const renderLevel1 = () => {
        if(level1.isFinished) {
            return (
                <FinishCard
                    title="Level 1 completed"
                    text="Ти завершив базовий рівень JavaScript practice."
                    result={level1.correctAnswers}
                    total={practiceJavaScriptLevel1Tasks.length}
                    primaryText="Restart level"
                    primaryAction={level1.reset}
                    secondaryText="Go to Level 2"
                    secondaryAction={handleGoToLevel2}
                />
        )}

        return(
            <div className={styles.quiz}>
                <Progress
                    current={level1.index}
                    total={practiceJavaScriptLevel1Tasks.length}
                    score={level1.correctAnswers}
                />
                
                <article className={styles.card}>
                    <h2 className={styles.cardTitle}>Level 1 — Basics Quiz</h2>
                    <p className={styles.question}>{level1.currentTask.question}</p>

                    <div className={styles.options}>
                        {level1.currentTask.options.map((option) => {
                            const isSelected = level1.value === option;

                            return (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => {
                                        if (level1.checked) return;
                                        level1.setValue(option);
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
                            onClick={level1.checkAnswer}
                            className={styles.actionButton}
                            disabled={!level1.value || level1.checked}
                        >   
                            Check answer
                        </button>

                        {!level1.isLastTask ? (
                            <button
                                type="button"
                                onClick={level1.next}
                                className={`${styles.actionButtonSecondary} ${
                                    level1.checked ? styles.actionButtonPulse : ""
                                }`}
                                disabled={!level1.checked}
                            >
                                Next task
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={level1.finish}
                                className={`${styles.actionButtonSecondary} ${
                                    level1.checked ? styles.actionButtonPulse : ""
                                }`}
                            >
                                Finish level
                            </button>
                        )}
                    </div>

                    {level1.checked && (
                        <FeedBack
                            resultRef={level1.resultRef}
                            isCorrect={level1.isCorrect}
                            explanation={level1.currentTask.explanation}
                            answerValue={level1.currentTask.answer}
                        />
                    )}
                </article>
            </div>
        );
    }

    const renderLevel2 = () => {
        if(level2.isFinished) {
            return (
                <FinishCard
                    title="Level 2 completed"
                    text="Ти завершив рівень Complete the Code у JavaScript practice."
                    result={level2.correctAnswers}
                    total={practiceJavaScriptLevel2Tasks.length}
                    primaryText="Restart level"
                    primaryAction={level2.reset}
                    secondaryText="Go to Level 3"
                    secondaryAction={handleGoToLevel3}
                />
            );
        }

        return (
            <div className={styles.quiz}>
                <Progress
                    current={level2.index}
                    total={practiceJavaScriptLevel2Tasks.length}
                    score={level2.correctAnswers}
                />

                <article className={styles.card}>
                    <h2 className={styles.cardTitle}>Level 2 — Complete the Code</h2>
                    <p className={styles.question}>{level2.currentTask.question}</p>

                    <pre className={styles.codeBlock}>
                        <code>{level2.currentTask.code}</code>
                    </pre>

                    <div className={styles.inputWrap}>
                        <label htmlFor="level2-answer" className={styles.inputLabel}>
                            Your answer
                        </label>

                        <input
                            id="level2-answer"
                            type="text"
                            value={level2.value}
                            onChange={(e) => {
                                if (level2.checked) return;
                                level2.setValue(e.target.value);
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
                            onClick={level2.checkAnswer}
                            className={styles.actionButton}
                            disabled={!level2.value.trim() || level2.checked}
                        >Check answer</button>

                        {!level2.isLastTask ? (
                            <button
                                type="button"
                                onClick={level2.next}
                                className={`${styles.actionButtonSecondary} ${
                                    level2.checked ? styles.actionButtonPulse : ""
                                }`}
                            >Next task</button>
                        ) : (
                            <button
                                type="button"
                                onClick={level2.finish}
                                className={`${styles.actionButtonSecondary} ${
                                    level2.checked ? styles.actionButtonPulse : ""
                                }`}
                            >Finish level</button>
                        )}
                    </div>

                    {level2.checked && (
                        <FeedBack
                            resultRef={level2.resultRef}
                            isCorrect={level2.isCorrect}
                            explanation={level2.currentTask.explanation}
                            answerValue={level2.currentTask.answer}
                        />
                    )}
                </article>
            </div>
        );
    }

    const renderLevel3 = () => {
        if(level3.isFinished) {
            return (
                <FinishCard
                    title="Level 3 completed"
                    text="Ти завершив рівень Write the Code у JavaScript practice."
                    result={level3.correctAnswers}
                    total={practiceJavaScriptLevel3Tasks.length}
                    primaryText="Restart level"
                    primaryAction={level3.reset}
                    secondaryText="Restart all practice"
                    secondaryAction={handleRestartAll}
                />
            );
        }

        return (
            <div className={styles.quiz}>
                <Progress
                    current={level3.index}
                    total={practiceJavaScriptLevel3Tasks.length}
                    score={level3.correctAnswers}
                />

                <article className={styles.card}>
                    <h2 className={styles.cardTitle}>Level 3 — Write the Code</h2>
                    <p className={styles.question}>{level3.currentTask.question}</p>

                    <div className={styles.inputWrap}>
                        <label htmlFor="level3-answer" className={styles.inputLabel}>
                            Your code
                        </label>

                        <textarea
                            id="level3-answer"
                            className={styles.textarea}
                            value={level3.value}
                            onChange={(e) => {
                                if (level3.checked) return;
                                level3.setValue(e.target.value);
                            }}
                        />
                    </div>

                    <div className={styles.actions}>
                        <button
                            type="button"
                            onClick={level3.checkAnswer}
                            className={styles.actionButton}
                            disabled={!level3.value.trim() || level3.checked}
                        >Check answer</button>

                        {!level3.isLastTask ? (
                            <button
                                type="button"
                                onClick={level3.next}
                                className={`${styles.actionButtonSecondary} ${
                                    level3.checked ? styles.actionButtonPulse : ""
                                }`}
                            >Next task</button>
                        ) : (
                            <button
                                type="button"
                                onClick={level3.finish}
                                className={`${styles.actionButtonSecondary} ${
                                    level3.checked ? styles.actionButtonPulse : ""
                                }`}
                            >Finish level</button>
                        )}
                    </div>

                    {level3.checked && (
                        <FeedBack
                            resultRef={level3.resultRef}
                            isCorrect={level3.isCorrect}
                            explanation={level3.currentTask.explanation}
                            answerLabel="Expected parts:"
                            answerValue={level3.currentTask.requiredParts.join(", ")}
                        />
                    )}
                </article>
            </div>
        )
    }

    const contentAnimationKey = `${activeLevel}-${currentLevel.index}-${currentLevel.isFinished}`;

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

                {activeLevel === "level-1" &&  renderLevel1()}
                {activeLevel === "level-2" &&  renderLevel2()}
                {activeLevel === "level-3" &&  renderLevel3()}

            </div>
        

        </section>
    );
};

export default PracticeJS;