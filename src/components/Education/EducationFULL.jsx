import { useState } from "react";
import { motion } from "motion/react";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import EducationCard from "./EducationCard";
import educationData from "./EducationData";
import BackgroundPattern from "../About/BackgroundPattern";

export default function Education() {
  const [showAll, setShowAll] = useState(false);

  const displayedEducation = showAll
    ? educationData
    : educationData.slice(0, 3);

  return (
    <section
      id="education"
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
            y: 30,
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
            mb-16
            text-center
          "
        >
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-blue-500
            "
          >
            Academic Journey
          </p>

          <h2
            className="
              mt-4

              text-4xl
              font-black

              text-slate-900
              dark:text-white

              md:text-5xl
            "
          >
            Education
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl

              text-lg
              leading-8

              text-slate-600
              dark:text-slate-400
            "
          >
            My academic background and learning journey
            that shaped my technical skills and knowledge.
          </p>
        </motion.div>

        {/* Education List */}
        <div className="space-y-8">
          {displayedEducation.map((education) => (
            <EducationCard
              key={education.id}
              data={education}
            />
          ))}
        </div>

        {/* Show More Button */}
        {educationData.length > 3 && (
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
              mt-12
              flex
              justify-center
            "
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                flex
                items-center
                gap-3

                rounded-xl

                bg-blue-600

                px-7
                py-3.5

                font-semibold
                text-white

                shadow-lg
                shadow-blue-500/30

                transition-all
                duration-300

                hover:bg-blue-700
              "
            >
              {showAll ? "Show Less" : "Show More"}

              {showAll ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}