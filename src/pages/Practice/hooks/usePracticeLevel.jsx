import { useEffect, useRef, useState } from "react";

const normalize = (value) => value.trim().toLowerCase();

const usePracticeLevel = ({ 
    tasks, 
    mode = "exact", 
    getExpectedParts,
    initialState, 
}) => {
    const [index, setIndex] = useState(initialState?.index ?? 0);
    const [value, setValue] = useState(initialState?.value ?? "");
    const [values, setValues] = useState(initialState?.values ?? {});
    const [checked, setChecked] = useState(initialState?.checked ?? false);
    const [correctAnswers, setCorrectAnswers] = useState(initialState?.correctAnswers ?? 0);
    const [isFinished, setIsFinished] = useState(initialState?.isFinished ?? false);
    const [isCorrect, setIsCorrect] = useState(initialState?.isCorrect ?? false);

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
        setValues({});
        setChecked(false);
        setCorrectAnswers(0);
        setIsFinished(false);
        setIsCorrect(false);
    };

    const setBlankValue = (blankId, blankValue) => {
        if (checked) return;

        setValues((prev) => ({
        ...prev,
        [blankId]: blankValue,
        }));
    };

    const clearBlankValue = (blankId) => {
        if (checked) return;

        setValues((prev) => ({
        ...prev,
        [blankId]: "",
        }));
    };

    const fillNextBlank = (optionValue) => {
        if (checked || !currentTask?.blanks?.length) return;

        const nextBlank = currentTask.blanks.find((blank) => !values[blank.id]);

        if (!nextBlank) return;

        setValues((prev) => ({
        ...prev,
        [nextBlank.id]: optionValue,
        }));
    };

    const checkAnswer = () => {
        if (checked) return;

        let answerIsCorrect = false;

        if (mode === "exact") {
        const preparedValue = value.trim();

        if (!preparedValue) return;

        answerIsCorrect =
            normalize(preparedValue) === normalize(currentTask.answer);
        }

        if (mode === "includes") {
        const expectedParts = getExpectedParts ? getExpectedParts(currentTask) : [];
        const preparedValue = value.trim();

        if (!preparedValue) return;

        answerIsCorrect = expectedParts.every((part) =>
            preparedValue.includes(part)
        );
        }

        if (mode === "blanks") {
        if (!currentTask?.blanks?.length) return;

        answerIsCorrect = currentTask.blanks.every(
            (blank) => values[blank.id] === blank.correct
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
        setValues({});
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
        values,
        checked,
        correctAnswers,
        isFinished,
        isCorrect,
        resultRef,
        currentTask,
        isLastTask,
        setValue,
        setBlankValue,
        clearBlankValue,
        fillNextBlank,
        checkAnswer,
        next,
        finish,
        reset,
        stateSnapshot: {
            index,
            value,
            values,
            checked,
            correctAnswers,
            isFinished,
            isCorrect,
        }
    };
};

export default usePracticeLevel;