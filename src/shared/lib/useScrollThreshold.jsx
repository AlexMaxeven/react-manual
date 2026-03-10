import { useEffect, useState } from "react";

export default function useScrollThreshold(threshold = 300) {
const [isPassed, setIsPassed] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        setIsPassed(window.scrollY > threshold);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return isPassed;
}