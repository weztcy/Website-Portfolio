import { motion } from "motion/react";
import AboutDescriptionData from "./AboutDescriptionData";

export default function AboutDescription() {
  return (
    <>
      {AboutDescriptionData.map((item, index) => (
        <motion.p
          key={item.id}
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
          transition={{
            delay: 0.35 + index * 0.15,
          }}
          className={`
            ${index === 0 ? "mt-8" : "mt-5"}
            text-lg
            leading-8
            text-slate-600
            dark:text-slate-400
          `}
        >
          {item.description}
        </motion.p>
      ))}
    </>
  );
}