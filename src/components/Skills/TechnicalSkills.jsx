import { motion } from "motion/react";

import { technicalSkills } from "./SkillsData";

import TechnicalSkillCard from "./TechnicalSkillCard";

export default function TechnicalSkills() {
  return (
    <div>
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
          mb-12

          text-center
        "
      >
        {/* <p

          className="
            text-sm

            font-semibold

            uppercase


            tracking-[0.3em]


            text-blue-500
          "

        >

          Technical Expertise

        </p> */}

        <h3
          className="
            mt-4

            text-3xl


            font-black



            text-slate-900



            dark:text-white



            md:text-4xl
          "
        >
          Technical Skills
        </h3>

        {/* <p

          className="
            mx-auto


            mt-4



            max-w-2xl



            text-slate-600



            dark:text-slate-400
          "

        >

          Technologies, tools, and frameworks that I use
          to build applications, analyze data, and create
          digital solutions.

        </p> */}
      </motion.div>

      {/* Technical Skill Cards */}

      <div
        className="
          grid


          grid-cols-1


          gap-8



          md:grid-cols-2



          xl:grid-cols-3
        "
      >
        {technicalSkills.map((category) => (
          <TechnicalSkillCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
