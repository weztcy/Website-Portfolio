import { motion } from "motion/react";

import AboutContent from "./AboutContent";
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



        {/* Main About */}

        <div
          className="
            grid

            items-stretch

            gap-14

            lg:grid-cols-[1.25fr_0.75fr]

            lg:gap-20
          "
        >

          {/* Left Content */}

          <AboutContent />



          {/* Right Quick Info */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              flex

              h-full

              w-full

              items-center
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