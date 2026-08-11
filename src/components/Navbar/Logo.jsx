import { motion } from "motion/react";

export default function Logo() {
  return (
    <motion.a
      href="#home"
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        scale: 1.05,
      }}
      className="
        text-2xl
        font-bold
        tracking-wide
      "
    >
      {/* Dimas */}
      <span
        className="
          text-blue-500

          dark:text-white
        "
      >
        Dimas
      </span>

      {/* Dot */}
      <span
        className="
          text-black

          dark:text-blue-400
        "
      >
        .
      </span>
    </motion.a>
  );
}