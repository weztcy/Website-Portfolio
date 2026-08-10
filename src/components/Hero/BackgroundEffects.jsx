import { motion } from "motion/react";

export default function BackgroundEffects() {
  return (
    <>
      {/* ================================= */}
      {/* Animated Grid */}
      {/* ================================= */}

      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-[0.05]
          dark:opacity-[0.08]
          bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* ================================= */}
      {/* Left Glow */}
      {/* ================================= */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-32
          top-20
          -z-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-500
          blur-[140px]
        "
      />

      {/* ================================= */}
      {/* Right Glow */}
      {/* ================================= */}

      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-32
          bottom-0
          -z-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-400
          blur-[160px]
        "
      />

      {/* ================================= */}
      {/* Purple Glow */}
      {/* ================================= */}

      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/3
          -z-10
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-violet-500
          blur-[130px]
        "
      />

      {/* ================================= */}
      {/* Gradient Blur */}
      {/* ================================= */}

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-br
          from-blue-500/5
          via-transparent
          to-cyan-400/5
          dark:from-blue-500/10
          dark:to-cyan-500/10
        "
      />
    </>
  );
}