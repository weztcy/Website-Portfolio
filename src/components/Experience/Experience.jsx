import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";

import ExperienceCard from "./ExperienceCard";
import experienceData from "./ExperienceData";
import BackgroundPattern from "../About/BackgroundPattern";

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  // Membalik urutan data tanpa mengubah array asli
  // Data terakhir akan muncul paling atas
  const reversedExperience = [...experienceData].reverse();

  // Default hanya menampilkan 3 experience terbaru
  const displayedExperience = showAll
    ? reversedExperience
    : reversedExperience.slice(0, 3);

  return (
    <section
      id="experience"
      className="
        relative
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
          max-w-7xl
          px-6
          sm:px-8
          lg:px-10
        "
      >
        {/* Section Header */}
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
            Career Journey
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
            Professional Experience
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
            A collection of my professional experiences, projects, and
            contributions throughout my career journey.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-8">
          {displayedExperience.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              data={experience}
              index={index}
            />
          ))}
        </div>

        {/* Show More Button */}
        {experienceData.length > 3 && (
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
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
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