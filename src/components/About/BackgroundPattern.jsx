import { motion } from "motion/react";

export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* ===================================== */}
      {/* Base Background */}
      {/* ===================================== */}

      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />

      {/* ===================================== */}
      {/* Aurora Gradient */}
      {/* ===================================== */}

      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [-30, 30, -30],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-0
          top-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-500/20
          blur-[140px]
        "
      />

      <motion.div
        animate={{
          x: [60, -60, 60],
          y: [40, -40, 40],
          scale: [1.05, 0.9, 1.05],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-0
          top-24
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/20
          blur-[150px]
        "
      />

      <motion.div
        animate={{
          y: [0, -40, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          left-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/20
          blur-[120px]
        "
      />

      {/* ===================================== */}
      {/* Dot Pattern */}
      {/* ===================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-20
          dark:opacity-10
          [background-image:radial-gradient(circle,#94a3b8_1px,transparent_1px)]
          [background-size:28px_28px]
        "
      />

      {/* ===================================== */}
      {/* Floating Shape 1 */}
      {/* ===================================== */}

      <motion.div
        animate={{
          rotate: [0, 360],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-20
          top-36
          h-20
          w-20
          rounded-3xl
          border
          border-blue-400/20
          backdrop-blur-sm
        "
      />

      {/* ===================================== */}
      {/* Floating Shape 2 */}
      {/* ===================================== */}

      <motion.div
        animate={{
          rotate: [360, 0],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          bottom-28
          right-20
          h-28
          w-28
          rounded-full
          border
          border-cyan-400/20
        "
      />

      {/* ===================================== */}
      {/* Floating Shape 3 */}
      {/* ===================================== */}

      <motion.div
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-1/4
          top-20
          h-12
          w-12
          rotate-45
          border
          border-violet-400/30
        "
      />

      {/* ===================================== */}
      {/* Gradient Overlay */}
      {/* ===================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-slate-100/50
          dark:to-slate-900/60
        "
      />
    </div>
  );
}