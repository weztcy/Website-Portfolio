import { motion } from "motion/react";

import AnimatedText from "./AnimatedText";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";
import HeroImage from "./HeroImage";

export default function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -70,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        relative
        z-10
      "
    >
      {/* Greeting */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="
          mb-4
          text-lg
          font-medium
          tracking-wide
          text-blue-500
        "
      >
        👋 Hi, I'm
      </motion.p>

      {/* Name */}

      <motion.h1
        animate={{
          textShadow: [
            "0 0 10px rgba(59,130,246,.3)",
            "0 0 35px rgba(59,130,246,.8)",
            "0 0 10px rgba(59,130,246,.3)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          text-4xl
          font-black
          leading-tight

          text-slate-900
          dark:text-white

          sm:text-5xl
          md:text-6xl
          lg:text-7xl
        "
      >
        {/* Yohanes

<br /> */}
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
          Yohanes Dimas Pratama
        </span>
      </motion.h1>

      <div
        className="
    lg:hidden
    mt-10
    mb-10
  "
      >
        <HeroImage />
      </div>

      {/* Animated Role */}

      <AnimatedText />

      {/* Hero Image */}

      {/* Social Media */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.7,
        }}
        className="
          mt-5
        "
      >
        <SocialLinks />
      </motion.div>

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.9,
        }}
        className="
          mt-8

          max-w-xl

          text-lg

          leading-8

          text-slate-600
          dark:text-slate-400
        "
      >
        Informatics Engineering graduate who focuses on developing
        digital solutions through Data Analytics, Web Development, Machine
        Learning, and UI/UX Design. With a combination of technical skills and
        creative thinking, I aim to build products that are efficient,
        impactful, and meaningful.
      </motion.p>

      {/* Buttons */}

      <HeroButtons />
    </motion.div>
  );
}
