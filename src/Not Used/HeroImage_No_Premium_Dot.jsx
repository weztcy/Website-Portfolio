import { motion } from "motion/react";
import profile from "../../assets/images/profile.png";

/* =========================================================
   HERO IMAGE
========================================================= */

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        flex
        items-center
        justify-center
        overflow-visible
      "
    >
      {/* ===================================================
          MAIN BACK GLOW
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.65,
        }}
        animate={{
          opacity: [0.3, 0.58, 0.3],
          scale: [0.95, 1.12, 0.95],
        }}
        transition={{
          opacity: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },

          scale: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          z-0

          h-48
          w-48

          rounded-full

          bg-blue-500

          blur-[70px]

          md:h-[420px]
          md:w-[420px]
          md:blur-[95px]
        "
      />

      {/* ===================================================
          OUTER ORBIT
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.65,
          rotate: -80,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 360,
        }}
        transition={{
          opacity: {
            duration: 1,
            delay: 0.2,
          },

          scale: {
            duration: 1.2,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          },

          rotate: {
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="
          absolute
          z-[1]

          h-[220px]
          w-[220px]

          rounded-full

          border
          border-dashed
          border-blue-400/40

          md:h-[470px]
          md:w-[470px]
          md:border-2
        "
      />

      {/* ===================================================
          SECOND ORBIT
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: -360,
        }}
        transition={{
          opacity: {
            duration: 1,
            delay: 0.35,
          },

          scale: {
            duration: 1.3,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          },

          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="
          absolute
          z-[1]

          h-[240px]
          w-[240px]

          rounded-full

          border
          border-cyan-400/20

          md:h-[500px]
          md:w-[500px]
        "
      />

      {/* ===================================================
          TECH ORBIT
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: [1, 1.025, 1],
          rotate: 360,
        }}
        transition={{
          opacity: {
            duration: 1,
            delay: 0.45,
          },

          scale: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },

          rotate: {
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="
          absolute
          z-[1]

          h-[185px]
          w-[185px]

          rounded-full

          border
          border-blue-500/20

          md:h-[385px]
          md:w-[385px]
        "
      >
        {/* Orbit Dot */}
        <motion.div
          className="
            absolute

            left-1/2
            top-[-3px]

            h-2
            w-2

            -translate-x-1/2

            rounded-full

            bg-blue-400

            shadow-[0_0_14px_rgba(59,130,246,0.9)]

            md:h-3
            md:w-3
          "
        />
      </motion.div>

      {/* ===================================================
          FLOATING GEOMETRY - LEFT TOP
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
          rotate: -90,
        }}
        animate={{
          opacity: 1,
          scale: 1,

          y: [0, -10, 0],
          x: [0, 5, 0],

          rotate: [45, 90, 45],
        }}
        transition={{
          opacity: {
            duration: 0.7,
            delay: 0.75,
          },

          scale: {
            duration: 0.7,
            delay: 0.75,
          },

          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },

          x: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },

          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute

          left-2
          top-2

          z-[3]

          h-5
          w-5

          border
          border-blue-500/50

          bg-blue-500/10

          backdrop-blur-sm

          md:-left-3
          md:top-10
          md:h-9
          md:w-9
        "
      />

      {/* ===================================================
          FLOATING GEOMETRY - RIGHT
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,

          y: [0, 12, 0],

          rotate: [0, 180, 360],
        }}
        transition={{
          opacity: {
            duration: 0.7,
            delay: 0.9,
          },

          scale: {
            duration: 0.7,
            delay: 0.9,
          },

          y: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },

          rotate: {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="
          absolute

          right-1
          top-14

          z-[3]

          h-4
          w-4

          border
          border-cyan-400/50

          bg-cyan-400/10

          md:-right-6
          md:top-24
          md:h-8
          md:w-8
        "
      />

      {/* ===================================================
          FLOATING GEOMETRY - LEFT BOTTOM
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,

          y: [0, 10, 0],

          rotate: [45, -45, 45],
        }}
        transition={{
          opacity: {
            duration: 0.7,
            delay: 1,
          },

          scale: {
            duration: 0.7,
            delay: 1,
          },

          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },

          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute

          bottom-10
          left-3

          z-[3]

          h-4
          w-4

          border
          border-violet-500/40

          bg-violet-500/10

          md:bottom-20
          md:-left-8
          md:h-7
          md:w-7
        "
      />

      {/* ===================================================
          PHOTO CONTAINER
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.72,
          y: 35,
          filter: "blur(12px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0],
          filter: "blur(0px)",
        }}
        whileHover={{
          scale: 1.03,
        }}
        transition={{
          opacity: {
            duration: 0.9,
            delay: 0.15,
          },

          scale: {
            duration: 1,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          },

          filter: {
            duration: 0.9,
            delay: 0.15,
          },

          y: {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          relative
          z-10
        "
      >
        {/* Glass Circle */}
        <div
          className="
            relative

            overflow-hidden

            rounded-full

            border
            border-blue-400/25

            bg-transparent

            p-1.5

            shadow-2xl

            md:p-2

            dark:border-blue-400/20
          "
        >
          {/* Photo */}
          <motion.img
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.1,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            src={profile}
            alt="Yohanes Dimas Pratama"
            className="
              relative
              z-10

              h-48
              w-48

              rounded-full

              object-cover

              md:h-[420px]
              md:w-[420px]
            "
          />

        </div>

        {/* =================================================
            AVAILABLE BADGE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            x: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,

            x: 0,

            y: [0, -5, 0],
          }}
          transition={{
            opacity: {
              duration: 0.6,
              delay: 1,
            },

            scale: {
              duration: 0.6,
              delay: 1,
              ease: [0.16, 1, 0.3, 1],
            },

            x: {
              duration: 0.6,
              delay: 1,
            },

            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            absolute

            -right-3
            top-4

            z-30

            whitespace-nowrap

            rounded-full

            bg-green-600

            px-3
            py-1.5

            text-[10px]
            font-semibold
            text-white

            shadow-xl

            md:-right-2
            md:top-6
            md:px-4
            md:py-2
            md:text-sm
          "
        >
          Available for Work
        </motion.div>

        {/* =================================================
            EXPERIENCE CARD
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            x: -25,
            y: 15,
          }}
          animate={{
            opacity: 1,
            scale: 1,

            x: [0, 5, 0],

            y: 0,
          }}
          transition={{
            opacity: {
              duration: 0.65,
              delay: 1.1,
            },

            scale: {
              duration: 0.65,
              delay: 1.1,
              ease: [0.16, 1, 0.3, 1],
            },

            x: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            },

            y: {
              duration: 0.65,
              delay: 1.1,
            },
          }}
          className="
            absolute

            -left-5
            bottom-5

            z-30

            rounded-xl

            border
            border-white/20

            bg-white/70

            px-3
            py-2

            shadow-xl

            backdrop-blur-xl

            dark:bg-slate-900/70

            md:-left-8
            md:bottom-10
            md:rounded-2xl
            md:px-5
            md:py-3
          "
        >
          <h3
            className="
              text-lg
              font-bold
              text-blue-500

              md:text-2xl
            "
          >
            1+
          </h3>

          <p
            className="
              whitespace-nowrap

              text-[10px]
              text-slate-700

              dark:text-slate-300

              md:text-sm
            "
          >
            Years Experience
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}