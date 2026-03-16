import { useEffect, useRef, useState } from "react";

const normalize = (value) => value.trim().toLowerCase();

const usePracticeLevel = ({ tasks, mode = "exact", getExpectedParts }) => {
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState("");
    const [checked, setChecked] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const resultRef = useRef(null);

    const currentTask = tasks[index];
    const isLastTask = index === tasks.length - 1;

    useEffect(() => {
        if (checked && resultRef.current) {
        resultRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
        });
        }
    }, [checked]);

    const reset = () => {
        setIndex(0);
        setValue("");
        setChecked(false);
        setCorrectAnswers(0);
        setIsFinished(false);
        setIsCorrect(false);
    };

    const checkAnswer = () => {
        const preparedValue = value.trim();

        if (!preparedValue || checked) return;

        let answerIsCorrect = false;

        if (mode === "exact") {
        answerIsCorrect =
            normalize(preparedValue) === normalize(currentTask.answer);
        }

        if (mode === "includes") {
        const expectedParts = getExpectedParts
            ? getExpectedParts(currentTask)
            : [];

        answerIsCorrect = expectedParts.every((part) =>
            preparedValue.includes(part)
        );
        }

        setIsCorrect(answerIsCorrect);

        if (answerIsCorrect) {
        setCorrectAnswers((prev) => prev + 1);
        }

        setChecked(true);
    };

    const next = () => {
        if (isLastTask) return;

        setIndex((prev) => prev + 1);
        setValue("");
        setChecked(false);
        setIsCorrect(false);
    };

    const finish = () => {
        setIsFinished(true);
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return {
        index,
        value,
        checked,
        correctAnswers,
        isFinished,
        isCorrect,
        resultRef,
        currentTask,
        isLastTask,
        setValue,
        checkAnswer,
        next,
        finish,
        reset,
    };
};

export default usePracticeLevel;