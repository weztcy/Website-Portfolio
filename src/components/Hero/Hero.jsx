import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import BackgroundEffects from "./BackgroundEffects";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        transition-colors
        duration-300
        dark:bg-slate-950
      "
    >
      {/* Background */}
      <BackgroundEffects />

      {/* Main Container */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          pt-28
          pb-16

          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-20

            lg:grid-cols-2
          "
        >
          {/* Left */}
          <HeroContent />

          {/* Right */}
<div
  className="
    hidden
    lg:block
  "
>
  <HeroImage />
</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-1
          lg:bottom-8
          left-1/2
          z-20
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-slate-500
          transition-colors
          hover:text-blue-500
          dark:text-slate-400
        "
      >
        <span className="text-sm tracking-[0.25em] uppercase">
          Scroll
        </span>

        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}