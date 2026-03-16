import styles from "@/pages/Practice/sections/PracticeJS/PracticeJS.module.css";

const FeedBack = ({
    resultRef,
    isCorrect,
    explanation,
    answerLabel = "Correct answer:",
    answerValue,
    }) => {
    return (
        <div ref={resultRef} className={styles.feedbackBlock}>
        <div
            className={`${styles.result} ${
            isCorrect ? styles.resultSuccess : styles.resultError
            }`}
        >
            {isCorrect ? "Correct ✅" : "Incorrect ❌"}
        </div>

        <div className={styles.explanation}>
            <strong>Explanation:</strong> {explanation}
        </div>

        {!isCorrect && answerValue && (
            <div className={styles.answer}>
            <strong>{answerLabel}</strong> {answerValue}
            </div>
        )}
        </div>
    );
};

export default FeedBack;