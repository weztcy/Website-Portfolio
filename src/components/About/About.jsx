import { motion } from "motion/react";

import AboutHeading from "./AboutHeading";
import AboutDescription from "./AboutDescription";
import SkillHighlights from "./SkillHighlights";
import QuickInfo from "./QuickInfo";
import AboutStats from "./AboutStats";
import BackgroundPattern from "./BackgroundPattern";

export default function About() {
  return (
    <section
      id="about"
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
            Introduction
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
            Get To Know Me Better
          </h2>
        </motion.div>

        {/* Main About Content */}
        <div
          className="
            grid
            grid-cols-1
            gap-14

            md:grid-cols-[1.15fr_0.85fr]
            md:items-stretch
            md:gap-10

            lg:grid-cols-[1.25fr_0.75fr]
            lg:gap-20
          "
        >
          {/* Left Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              w-full
              self-start
            "
          >
            {/* Heading */}
            <AboutHeading />

            {/* Description */}
            <AboutDescription />

            {/* Skill Highlights */}
            <SkillHighlights />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              flex
              w-full
              items-center
              justify-center

              md:h-full
              md:self-stretch
            "
          >
            <QuickInfo />
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-24
            h-px
            w-full
            origin-center
            bg-gradient-to-r
            from-transparent
            via-slate-300
            to-transparent
            dark:via-slate-700
          "
        />

        {/* Stats */}
        <AboutStats />
      </div>
    </section>
  );
}