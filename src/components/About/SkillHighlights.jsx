import { motion } from "motion/react";

import {
  Code2,
  Palette,
  Database,
  BrainCircuit,
} from "lucide-react";

const highlights = [
  {
    icon: Database,
    text: "Data Analyst",
  },
  {
    icon: BrainCircuit,
    text: "Machine Learning",
  },
  {
    icon: Code2,
    text: "Web Developer",
  },
  {
    icon: Palette,
    text: "UI/UX Designer",
  },
];

export default function SkillHighlights() {
  return (
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
        delay: 0.65,
      }}
      className="
        mt-10
        grid
        gap-4
        sm:grid-cols-2
      "
    >
      {highlights.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.text}
            whileHover={{
              x: 5,
            }}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-slate-200
              bg-white/50
              px-4
              py-3
              backdrop-blur
              dark:border-slate-800
              dark:bg-slate-900/50
            "
          >
            <Icon
              size={22}
              className="text-blue-500"
            />

            <span
              className="
                font-medium
                text-slate-700
                dark:text-slate-300
              "
            >
              {item.text}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}