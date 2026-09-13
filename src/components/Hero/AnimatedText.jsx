import { useEffect, useState } from "react";

const words = [
  "Data Analyst",
  "Web Developer",
  "Machine Learning Enthusiast",
  "UI/UX Designer",
];

export default function AnimatedText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const currentWord = words[wordIndex];

    let speed = 100;

    if (phase === "deleting") {
      speed = 50;
    }

    if (phase === "holding") {
      speed = 1500;
    }

    const timer = setTimeout(() => {
      /* =========================================
         TYPING
      ========================================= */

      if (phase === "typing") {
        const next = currentWord.slice(
          0,
          displayText.length + 1
        );

        setDisplayText(next);

        if (next === currentWord) {
          setPhase("holding");
        }
      }

      /* =========================================
         HOLDING
      ========================================= */

      else if (phase === "holding") {
        setPhase("deleting");
      }

      /* =========================================
         DELETING
      ========================================= */

      else if (phase === "deleting") {
        const next = currentWord.slice(
          0,
          Math.max(0, displayText.length - 1)
        );

        setDisplayText(next);

        if (next === "") {
          setWordIndex(
            (prev) => (prev + 1) % words.length
          );

          setPhase("typing");
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, phase, wordIndex]);

  return (
    <div
      className="
        mt-6
        flex
        min-h-[2.25rem]
        items-center

        lg:min-h-[2.5rem]
      "
    >
      {/* =========================================
          TYPING TEXT
      ========================================= */}

      <h2
        className="
          text-2xl
          font-semibold

          text-slate-700

          lg:text-3xl

          dark:text-slate-300
        "
      >
        {displayText}
      </h2>

      {/* =========================================
          CURSOR
      ========================================= */}

      <span
        aria-hidden="true"
        className="
          ml-1

          inline-block

          animate-[cursor-blink_0.8s_step-end_infinite]

          text-3xl
          font-bold
          leading-none

          text-blue-500

          motion-reduce:animate-none
        "
      >
        |
      </span>
    </div>
  );
}