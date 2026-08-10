import { motion } from "motion/react";

// import BackgroundPattern from "./BackgroundPattern";
import BackgroundPattern from "../About/BackgroundPattern";

import SoftSkills from "./SoftSkills";

import TechnicalSkills from "./TechnicalSkills";

export default function Skills() {
  return (
    <section
      id="skills"
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
        {/* Main Header */}

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
            duration: 0.8,
          }}
          className="
            mb-20

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
            My Abilities
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
            Skills & Expertise
          </h2>

          <p
            className="
              mx-auto


              mt-6


              max-w-xl



              text-lg


              leading-8



              text-slate-600



              dark:text-slate-400
            "
          >
            A combination of interpersonal abilities and technical knowledge
            that I continuously improve to create effective digital solutions.
          </p>
        </motion.div>

        {/* Soft Skills */}

        <SoftSkills />

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
          }}
          className="
            my-20


            h-px



            origin-left



            bg-gradient-to-r



            from-transparent



            via-blue-400



            to-transparent
          "
        />

        {/* Technical Skills */}

        <TechnicalSkills />
      </div>
    </section>
  );
}
