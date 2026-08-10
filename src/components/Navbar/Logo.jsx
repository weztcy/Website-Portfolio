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


        bg-gradient-to-r

        from-blue-600

        via-cyan-500

        to-violet-500


        bg-clip-text

        text-transparent
      "
    >
      Dimas
    </motion.a>
  );
}
