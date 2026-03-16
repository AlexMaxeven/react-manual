import { useEffect, useState } from "react";
import styles from "./Home.module.css";

const words = ["JS", "REACT", "TYPESCRIPT", "PRACTICE"];

const Home = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (wordIndex >= words.length) return;

    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (charIndex < currentWord.length) {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setWordIndex((prev) => prev + 1);
        }, 200);
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [charIndex, wordIndex]);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        {text}
        <span className={styles.cursor}>|</span>
      </h1>
    </div>
  );
};

export default Home;