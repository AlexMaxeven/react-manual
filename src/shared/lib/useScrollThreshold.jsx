import { useEffect, useState } from "react";

export default function useScrollThreshold(threshold = 300) {
  const [isPassed, setIsPassed] = useState(() => window.scrollY > threshold);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const nextValue = window.scrollY > threshold;

      setIsPassed((prevValue) => {
        return prevValue === nextValue ? prevValue : nextValue;
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isPassed;
}