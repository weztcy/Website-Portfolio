import { motion } from "motion/react";
import profile from "../../assets/images/profile.png";

/* =========================================================
   PREMIUM DOT DATA
   10 x 10 square dots
========================================================= */

const DOTS = Array.from({ length: 100 }, (_, index) => {
  const row = Math.floor(index / 10);
  const col = index % 10;

  const centerX = 4.5;
  const centerY = 4.5;

  const distance = Math.sqrt(
    Math.pow(col - centerX, 2) +
    Math.pow(row - centerY, 2)
  );

  return {
    id: index,
    row,
    col,
    distance,

    // dibuat deterministic agar tidak berubah setiap render
    delay: ((index * 7) % 20) * 0.06,

    duration: 2.8 + ((index * 11) % 15) * 0.1,

    x:
      ((index * 13) % 3) === 0
        ? 3
        : ((index * 13) % 3) === 1
        ? -3
        : 0,

    y:
      ((index * 17) % 3) === 0
        ? -4
        : ((index * 17) % 3) === 1
        ? 4
        : 0,
  };
});

/* =========================================================
   PREMIUM DOT PATTERN
========================================================= */

function PremiumDotPattern() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-[2]
        overflow-hidden
        rounded-full
      "
    >
      {/* ===============================================
          DEEP BACKGROUND
      =============================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          inset-0
          rounded-full

          bg-gradient-to-br
          from-blue-500/10
          via-transparent
          to-cyan-400/10

          dark:from-blue-500/10
          dark:to-cyan-400/5
        "
      />

      {/* ===============================================
          SUBTLE TECH GRID
      =============================================== */}

      <motion.div
        // initial={{
        //   opacity: 0,
        //   scale: 0.9,
        //   rotate: -3,
        // }}
        // animate={{
        //   opacity: 1,
        //   scale: 1,
        //   rotate: 0,
        // }}
        // transition={{
        //   duration: 1.3,
        //   delay: 0.25,
        //   ease: [0.16, 1, 0.3, 1],
        // }}
        // className="
        //   absolute
        //   inset-[7%]
        //   rounded-full
        //   opacity-30
        // "
        // style={{
        //   backgroundImage: `
        //     linear-gradient(
        //       rgba(59, 130, 246, 0.18) 1px,
        //       transparent 1px
        //     ),
        //     linear-gradient(
        //       90deg,
        //       rgba(59, 130, 246, 0.18) 1px,
        //       transparent 1px
        //     )
        //   `,
        //   backgroundSize: "34px 34px",

        //   maskImage:
        //     "radial-gradient(circle, black 10%, rgba(0,0,0,.9) 52%, transparent 82%)",

        //   WebkitMaskImage:
        //     "radial-gradient(circle, black 10%, rgba(0,0,0,.9) 52%, transparent 82%)",
        // }}
      />

      {/* ===============================================
          SQUARE DOT FIELD
      =============================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.82,
          rotate: -4,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1.25,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          inset-[9%]

          grid
          grid-cols-10
          grid-rows-10

          place-items-center
        "
        style={{
          maskImage:
            "radial-gradient(circle, black 12%, black 55%, rgba(0,0,0,.55) 72%, transparent 91%)",

          WebkitMaskImage:
            "radial-gradient(circle, black 12%, black 55%, rgba(0,0,0,.55) 72%, transparent 91%)",
        }}
      >
        {DOTS.map((dot) => (
          <motion.span
            key={dot.id}
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -45,
            }}
            animate={{
              opacity: [
                0.08,
                0.22,
                0.8,
                0.28,
                0.65,
                0.12,
              ],

              scale: [
                0.45,
                0.75,
                1.15,
                0.7,
                1,
                0.5,
              ],

              rotate: [
                0,
                20,
                45,
                20,
                0,
              ],

              x: [
                0,
                dot.x,
                -dot.x / 2,
                0,
              ],

              y: [
                0,
                dot.y,
                -dot.y / 2,
                0,
              ],
            }}
            transition={{
              opacity: {
                duration: dot.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: dot.delay,
              },

              scale: {
                duration: dot.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: dot.delay,
              },

              rotate: {
                duration: dot.duration + 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: dot.delay,
              },

              x: {
                duration: dot.duration + 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: dot.delay,
              },

              y: {
                duration: dot.duration + 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: dot.delay,
              },
            }}
            className="
              block

              h-[4px]
              w-[4px]

              rounded-[1px]

              bg-blue-500/80

              shadow-[0_0_7px_rgba(59,130,246,0.55)]

              md:h-[6px]
              md:w-[6px]

              dark:bg-blue-400/80
            "
          />
        ))}
      </motion.div>

      {/* ===============================================
          RADIAL ENERGY PULSE 1
      =============================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.4,
        }}
        animate={{
          opacity: [0, 0.35, 0],
          scale: [0.45, 1.15, 1.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.8,
        }}
        className="
          absolute

          left-1/2
          top-1/2

          h-[55%]
          w-[55%]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          border
          border-blue-400/40
        "
      />

      {/* ===============================================
          RADIAL ENERGY PULSE 2
      =============================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.3,
        }}
        animate={{
          opacity: [0, 0.22, 0],
          scale: [0.3, 1, 1.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 2.2,
        }}
        className="
          absolute

          left-1/2
          top-1/2

          h-[68%]
          w-[68%]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          border
          border-cyan-400/30
        "
      />

      {/* ===============================================
          PREMIUM SCANNER LIGHT
      =============================================== */}

      <motion.div
        initial={{
          x: "-160%",
          opacity: 0,
        }}
        animate={{
          x: ["-160%", "160%"],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut",
          delay: 1.4,
        }}
        className="
          absolute

          -top-[15%]
          bottom-[-15%]

          left-0

          w-[28%]

          rotate-[18deg]

          bg-gradient-to-r
          from-transparent
          via-blue-300/20
          to-transparent

          blur-xl
        "
      />

      {/* ===============================================
          CENTER LIGHT
      =============================================== */}

      <motion.div
        animate={{
          opacity: [0.2, 0.42, 0.2],
          scale: [0.9, 1.08, 0.9],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          left-1/2
          top-1/2

          h-[50%]
          w-[50%]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-blue-400/20

          blur-[45px]
        "
      />

      {/* ===============================================
          EDGE FADE
      =============================================== */}

      <div
        className="
          absolute
          inset-0
          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, transparent 45%, rgba(59,130,246,0.025) 65%, rgba(15,23,42,0.08) 100%)",
        }}
      />
    </div>
  );
}

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
          {/* Premium animated background */}
          <PremiumDotPattern />

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