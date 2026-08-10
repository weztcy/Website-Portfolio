import { useState } from "react";
import { motion } from "motion/react";

import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import BackgroundPattern from "../About/BackgroundPattern";

import LanguageCard from "./LanguageCard";

import {
  languages,
} from "./LanguageData";

export default function Language() {
  const [showAll, setShowAll] = useState(false);

  const displayedLanguages = showAll
    ? languages
    : languages.slice(0, 3);

  return (
    <section
      id="language"
      className="
        relative

        min-h-[100dvh]

        flex
        flex-col
        justify-center

        overflow-hidden

        py-24
        lg:py-32
      "
    >
      {/* Background */}
      <BackgroundPattern />

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-7xl

          px-6
          sm:px-8
          lg:px-10
        "
      >
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-14
            text-center
          "
        >
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.35em]
              text-blue-500
            "
          >
            Communication Skills
          </p>

          <h2
            className="
              mt-5

              text-4xl
              font-black

              text-slate-900
              dark:text-white

              md:text-5xl
            "
          >
            Language Proficiency
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl

              text-lg
              leading-8

              text-slate-600
              dark:text-slate-400
            "
          >
            Languages I use for communication,
            collaboration, and professional activities.
          </p>
        </motion.div>

        {/* Language Cards */}
        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-8
          "
        >
          {displayedLanguages.map(
            (language, index) => (
              <LanguageCard
                key={language.id}
                language={language}
                index={index}
              />
            )
          )}
        </div>

        {/* Show More Button */}
        {languages.length > 3 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-14
              flex
              justify-center
            "
          >
            <button
              onClick={() =>
                setShowAll(!showAll)
              }
              className="
                flex
                items-center
                gap-3

                rounded-full

                bg-blue-600

                px-8
                py-3.5

                font-semibold
                text-white

                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-blue-700
                hover:shadow-blue-500/40
              "
            >
              {showAll
                ? "Show Less"
                : "Show More"}

              {showAll ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}