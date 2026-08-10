import { motion } from "motion/react";
import {
  Code2,
  Sparkles,
  Zap,
} from "lucide-react";

import profile from "../../assets/images/profile2.png";

export default function AboutImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -80,
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
      className="relative mx-auto flex justify-center"
    >
      {/* ====================================== */}
      {/* Aurora Glow */}
      {/* ====================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-10
          h-[340px]
          w-[340px]
          rounded-full
          bg-gradient-to-r
          from-blue-500
          via-cyan-400
          to-violet-500
          blur-[90px]
        "
      />

      {/* ====================================== */}
      {/* Glass Platform */}
      {/* ====================================== */}

      <div
        className="
          absolute
          bottom-0
          h-12
          w-64
          rounded-full
          bg-white/20
          blur-xl

          dark:bg-white/10
        "
      />

      {/* ====================================== */}
      {/* Floating Photo */}
      {/* ====================================== */}

      <motion.img
        src={profile}
        alt="Yohanes Dimas Pratama"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.04,
        }}
        className="
          relative
          z-10
          h-[430px]
          object-contain
          drop-shadow-[0_30px_50px_rgba(0,0,0,.35)]

          lg:h-[560px]
        "
      />

      {/* ====================================== */}
      {/* Badge 1 */}
      {/* ====================================== */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          left-0
          top-8
          z-20

          flex
          items-center
          gap-2

          rounded-2xl

          border
          border-white/20

          bg-white/70

          px-4
          py-3

          shadow-xl

          backdrop-blur-xl

          dark:bg-slate-900/70
        "
      >
        <Code2 className="text-blue-500" size={20} />

        <span className="font-medium">
          Frontend Developer
        </span>
      </motion.div>

      {/* ====================================== */}
      {/* Badge 2 */}
      {/* ====================================== */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          right-0
          top-40
          z-20

          flex
          items-center
          gap-2

          rounded-2xl

          border
          border-white/20

          bg-white/70

          px-4
          py-3

          shadow-xl

          backdrop-blur-xl

          dark:bg-slate-900/70
        "
      >
        <Sparkles className="text-cyan-500" size={20} />

        <span className="font-medium">
          Creative UI
        </span>
      </motion.div>

      {/* ====================================== */}
      {/* Badge 3 */}
      {/* ====================================== */}

      <motion.div
        animate={{
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          right-8
          z-20

          flex
          items-center
          gap-2

          rounded-2xl

          border
          border-white/20

          bg-white/70

          px-4
          py-3

          shadow-xl

          backdrop-blur-xl

          dark:bg-slate-900/70
        "
      >
        <Zap className="text-yellow-500" size={20} />

        <span className="font-medium">
          Problem Solver
        </span>
      </motion.div>
    </motion.div>
  );
}