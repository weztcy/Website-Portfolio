import { motion } from "motion/react";

import { softSkills } from "./SkillsData";
import SoftSkillCard from "./SoftSkillCard";

export default function SoftSkills() {
  return (
    <div className="w-full">
      {/* =========================
          SECTION HEADER
      ========================== */}
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
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          mb-12
          text-center
        "
      >
        {/* Section Label */}
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

        {/* Title */}
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

        {/* Description */}
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

      {/* =========================
          SOFT SKILLS LIST
      ========================== */}
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-3xl

          flex-col
          items-stretch
          gap-5

          sm:flex-row
          sm:flex-wrap
          sm:items-center
          sm:justify-center

          [&>*]:!w-full
          sm:[&>*]:!w-auto
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