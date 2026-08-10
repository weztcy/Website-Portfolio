import { motion } from "motion/react";

export default function AboutHeading() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -60,
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
    >
      {/* Badge */}
      <motion.div
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
          delay: 0.1,
        }}
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-blue-500/20
          bg-blue-500/10
          px-4
          py-2
          text-sm
          font-semibold
          tracking-wide
          text-blue-500
        "
      >
        About Me
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.2,
        }}
        className="
          mt-6

          text-[22px]
          font-black
          leading-[1.15]

          text-slate-900
          dark:text-white

          sm:text-4xl
          sm:leading-tight

          lg:text-5xl
        "
      >
        Building Digital Solutions
        <br />

        <span
          className="
            bg-gradient-to-r
            from-blue-500
            via-cyan-400
            to-violet-500

            bg-clip-text
            text-transparent
          "
        >
          Through Data, Technology, and Creativity
        </span>
      </motion.h2>
    </motion.div>
  );
}