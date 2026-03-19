import { useState, useMemo, useEffect } from "react";
import styles from "./PracticeTemplate.module.css";

import Progress from "@/pages/Practice/components/Progress";
import FeedBack from "@/pages/Practice/components/FeedBack";
import FinishCard from "@/pages/Practice/components/FinishCard";
import usePracticeLevel from "@/pages/Practice/hooks/usePracticeLevel";

const PracticeTemplate = ({
    intro,
    levels,
    level1Tasks,
    level2Tasks,
    level3Tasks,
    storageKey,   
    level1Title,
    level2Title,
    level3Title,
    level1FinishTitle,
    level2FinishTitle,
    level3FinishTitle,
    level1FinishText,
    level2FinishText,
    level3FinishText,
    }) => {

        const savedState = useMemo(() => {
            if (!storageKey) return null;
          
            try {
              const raw = localStorage.getItem(storageKey);
              return raw ? JSON.parse(raw) : null;
            } catch {
              return null;
            }
          }, [storageKey]);

    const [activeLevel, setActiveLevel] = useState(savedState?.activeLevel ?? "level-1");

    const level1 = usePracticeLevel({
        tasks: level1Tasks,
        mode: "exact",
        initialState: savedState?.level1 ?? null,
    });

    const level2 = usePracticeLevel({
        tasks: level2Tasks,
        mode: "exact",
        initialState: savedState?.level2 ?? null,
    });

    const level3 = usePracticeLevel({
        tasks: level3Tasks,
        mode: "blanks",
        initialState: savedState?.level3 ?? null,
    });

    const resetLevels = (...items) => {
        items.forEach((level) => level.reset());
    };

    const handleLevelChange = (levelId) => {
      setActiveLevel(levelId);
    };
    
    const handleGoToLevel2 = () => {
        setActiveLevel("level-2");
    };
    
    const handleGoToLevel3 = () => {
        setActiveLevel("level-3");
    };

    const handleRestartAll = () => {
        setActiveLevel("level-1");
        resetLevels(level1, level2, level3);
    };

    const handleClearSavedProgress = () => {
        if (storageKey) {
          localStorage.removeItem(storageKey);
        }
      
        setActiveLevel("level-1");
        resetLevels(level1, level2, level3);
      };

    useEffect(() => {
        if (!storageKey) return;
      
        const payload = {
          activeLevel,
          level1: level1.stateSnapshot,
          level2: level2.stateSnapshot,
          level3: level3.stateSnapshot,
        };
      
        localStorage.setItem(storageKey, JSON.stringify(payload));
      }, [
        storageKey,
        activeLevel,
        level1.stateSnapshot,
        level2.stateSnapshot,
        level3.stateSnapshot,
      ]);

      const renderTemplateWithBlanks = (task, level) => {
        const parts = task.template.split("___");
      
        return parts.map((part, index) => {
          const blank = task.blanks[index];
          const blankValue = blank ? level.values[blank.id] : "";
      
          let blankStateClass = styles.blankEmpty;
      
          if (blank && blankValue) {
            blankStateClass = styles.blankFilled;
          }
      
          if (blank && level.checked) {
            blankStateClass =
              blankValue === blank.correct
                ? styles.blankCorrect
                : styles.blankWrong;
          }
      
          return (
            <span key={index}>
              {part}
      
              {blank && (
                <button
                  type="button"
                  onClick={() => level.clearBlankValue(blank.id)}
                  disabled={level.checked}
                  className={`${styles.blankButton} ${blankStateClass}`}
                >
                  {blankValue || "___"}
                </button>
              )}
            </span>
          );
        });
      };

    const contentAnimationKey = `${activeLevel}-${level1.index}-${level2.index}-${level3.index}-${level1.isFinished}-${level2.isFinished}-${level3.isFinished}`;

    const renderLevel1 = () => {
        if (level1.isFinished) {
        return (
            <FinishCard
            title={level1FinishTitle}
            text={level1FinishText}
            result={level1.correctAnswers}
            total={level1Tasks.length}
            primaryText="Restart level"
            primaryAction={level1.reset}
            secondaryText="Go to Level 2"
            secondaryAction={handleGoToLevel2}
            />
        );
        }

        return (
        <div className={styles.quiz}>
            <Progress
            current={level1.index}
            total={level1Tasks.length}
            score={level1.correctAnswers}
            />

            <article className={styles.card}>
            <h2 className={styles.cardTitle}>{level1Title}</h2>
            <p className={styles.question}>{level1.currentTask.question}</p>

            <div className={styles.options}>
            {level1.currentTask.options.map((option) => {
              const isSelected = level1.value === option;
              const isCorrectOption = option === level1.currentTask.answer;

              let optionStateClass = "";

              if (!level1.checked && isSelected) {
                optionStateClass = styles.optionSelected;
              }

              if (level1.checked && isCorrectOption) {
                optionStateClass = styles.optionCorrect;
              }

              if (level1.checked && isSelected && !isCorrectOption) {
                optionStateClass = styles.optionWrong;
              }

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    if (level1.checked) return;
                    level1.setValue(option);
                  }}
                  className={`${styles.option} ${optionStateClass}`}
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
                    disabled={!level1.checked}
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
    };

    const renderLevel2 = () => {
        if (level2.isFinished) {
        return (
            <FinishCard
            title={level2FinishTitle}
            text={level2FinishText}
            result={level2.correctAnswers}
            total={level2Tasks.length}
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
            total={level2Tasks.length}
            score={level2.correctAnswers}
            />

            <article className={styles.card}>
            <h2 className={styles.cardTitle}>{level2Title}</h2>
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
                  className={`${styles.input} ${
                    level2.checked
                      ? level2.isCorrect
                        ? styles.inputCorrect
                        : styles.inputWrong
                      : ""
                  }`}
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
                >
                Check answer
                </button>

                {!level2.isLastTask ? (
                <button
                    type="button"
                    onClick={level2.next}
                    className={`${styles.actionButtonSecondary} ${
                    level2.checked ? styles.actionButtonPulse : ""
                    }`}
                    disabled={!level2.checked}
                >
                    Next task
                </button>
                ) : (
                <button
                    type="button"
                    onClick={level2.finish}
                    className={`${styles.actionButtonSecondary} ${
                    level2.checked ? styles.actionButtonPulse : ""
                    }`}
                    disabled={!level2.checked}
                >
                    Finish level
                </button>
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
    };

    const renderLevel3 = () => {
        if (level3.isFinished) {
          return (
            <FinishCard
              title={level3FinishTitle}
              text={level3FinishText}
              result={level3.correctAnswers}
              total={level3Tasks.length}
              primaryText="Restart level"
              primaryAction={level3.reset}
              secondaryText="Restart all practice"
              secondaryAction={handleRestartAll}
            />
          );
        }
      
        const allBlanksFilled =
          level3.currentTask?.blanks?.length > 0 &&
          level3.currentTask.blanks.every((blank) => level3.values[blank.id]);
      
        const flatOptions = [
          ...new Set(level3.currentTask.blanks.flatMap((blank) => blank.options)),
        ];
      
        return (
          <div className={styles.quiz}>
            <Progress
              current={level3.index}
              total={level3Tasks.length}
              score={level3.correctAnswers}
            />
      
            <article className={styles.card}>
              <h2 className={styles.cardTitle}>{level3Title}</h2>
              <p className={styles.question}>{level3.currentTask.question}</p>
      
              <pre className={styles.codeBlock}>
                <code>{renderTemplateWithBlanks(level3.currentTask, level3)}</code>
              </pre>
      
              <div className={styles.optionsPanel}>
                <p className={styles.optionsLabel}>Choose values:</p>
      
                <div className={styles.optionsChips}>
                {flatOptions.map((option) => {
                    const isUsed = Object.values(level3.values).includes(option);

                    return (
                        <button
                        key={option}
                        type="button"
                        onClick={() => level3.fillNextBlank(option)}
                        disabled={level3.checked}
                        className={`${styles.optionChip} ${
                            isUsed ? styles.optionChipUsed : ""
                        }`}
                        >
                        {option}
                        </button>
                    );
                })}
                </div>
              </div>
      
              <div className={styles.actions}>
                <button
                  type="button"
                  onClick={level3.checkAnswer}
                  className={styles.actionButton}
                  disabled={!allBlanksFilled || level3.checked}
                >
                  Check answer
                </button>
      
                {!level3.isLastTask ? (
                  <button
                    type="button"
                    onClick={level3.next}
                    className={`${styles.actionButtonSecondary} ${
                      level3.checked ? styles.actionButtonPulse : ""
                    }`}
                    disabled={!level3.checked}
                  >
                    Next task
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={level3.finish}
                    className={`${styles.actionButtonSecondary} ${
                      level3.checked ? styles.actionButtonPulse : ""
                    }`}
                    disabled={!level3.checked}
                  >
                    Finish level
                  </button>
                )}
              </div>
      
              {level3.checked && (
                <FeedBack
                  resultRef={level3.resultRef}
                  isCorrect={level3.isCorrect}
                  explanation={level3.currentTask.explanation}
                  answerLabel="Correct answers:"
                  answerValue={level3.currentTask.blanks
                    .map((blank) => blank.correct)
                    .join(", ")}
                />
              )}
            </article>
          </div>
        );
      };

    return (
        <section className={styles.root}>
        <header className={styles.hero}>
            <h1 className={styles.title}>{intro.title}</h1>
            <p className={styles.description}>{intro.description}</p>
        </header>

        <div className={styles.levels}>
            {levels.map((level) => (
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

        <div className={styles.utilityRow}>
          <p className={styles.savedHint}>Progress saved automatically</p>

          <button
            type="button"
            onClick={handleClearSavedProgress}
            className={styles.resetProgressButton}
          >
            Reset saved progress
          </button>
        </div>

        <div key={contentAnimationKey} className={styles.fadeContent}>
            
            {activeLevel === "level-1" && renderLevel1()}
            {activeLevel === "level-2" && renderLevel2()}
            {activeLevel === "level-3" && renderLevel3()}
        </div>
        </section>
    );
};

export default PracticeTemplate;