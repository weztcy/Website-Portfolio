import { motion } from "motion/react";

import {
  softSkills,
} from "./SkillsData";

import SoftSkillCard from "./SoftSkillCard";

export default function SoftSkills() {
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

        {/* 
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.3em]
            text-blue-500
          "
        >
          Personal Strength
        </p>
        */}

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
          Soft Skills
        </h3>

        {/*
        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-slate-600
            dark:text-slate-400
          "
        >
          Professional qualities that help me
          communicate, collaborate, and solve problems
          effectively.
        </p>
        */}

      </motion.div>

      {/* Soft Skill List */}
      <div
        className="
          mx-auto
          w-full
          max-w-3xl

          flex
          flex-wrap

          justify-start
          sm:justify-center

          gap-5
        "
      >
        {softSkills.map((skill) => (
          <SoftSkillCard
            key={skill.id}
            skill={skill}
          />
        ))}
      </div>

    </div>
  );
}