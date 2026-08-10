import { useMemo } from "react";
import { motion } from "motion/react";


const particles = [
  {
    size: "h-2 w-2",
    position: "top-[18%] left-[12%]",
    delay: 0,
  },
  {
    size: "h-3 w-3",
    position: "top-[40%] right-[18%]",
    delay: 1,
  },
  {
    size: "h-2 w-2",
    position: "bottom-[28%] left-[25%]",
    delay: 2,
  },
  {
    size: "h-4 w-4",
    position: "bottom-[18%] right-[28%]",
    delay: 1.5,
  },
  {
    size: "h-2 w-2",
    position: "top-[65%] right-[42%]",
    delay: 0.8,
  },
];



function generateStars(count, sizeClass, glowClass) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 4,
    sizeClass,
    glowClass,
  }));
}



function StarLayer({ stars }) {
  return (
    <>
      {stars.map((star) => (
        <motion.span
          key={star.id}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
          className={`
            absolute
            rounded-full

            bg-slate-400
            dark:bg-white

            ${star.sizeClass}
            ${star.glowClass}
          `}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
        />
      ))}
    </>
  );
}



export default function BackgroundPattern() {


  const smallStars = useMemo(
    () =>
      generateStars(
        140,
        "h-[1.5px] w-[1.5px]",
        ""
      ),
    []
  );


  const mediumStars = useMemo(
    () =>
      generateStars(
        70,
        "h-[2px] w-[2px]",
        "shadow-[0_0_3px_1px_rgba(255,255,255,0.4)]"
      ),
    []
  );


  const largeStars = useMemo(
    () =>
      generateStars(
        40,
        "h-[3px] w-[3px]",
        "shadow-[0_0_5px_2px_rgba(255,255,255,0.5)]"
      ),
    []
  );



  return (
    <div
      className="
        absolute
        inset-0
        -z-10
        overflow-hidden
        pointer-events-none
      "
    >


      {/* ============================= */}
      {/* Base Background */}
      {/* ============================= */}

      <div
        className="
          absolute
          inset-0

          bg-slate-50
          dark:bg-slate-950
        "
      />



      {/* ============================= */}
      {/* Animated Abstract Gradient */}
      {/* ============================= */}

      <motion.div
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],

          scale: [
            1,
            1.15,
            1,
          ],

          rotate: [
            0,
            5,
            0,
          ],
        }}

        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute

          inset-[-25%]

          opacity-40
          dark:opacity-30

          blur-[120px]

          bg-[length:300%_300%]

          bg-gradient-to-br

          from-blue-400/40
          via-cyan-300/30
          via-violet-300/15
          to-blue-500/40


          dark:from-blue-600/35
          dark:via-cyan-500/20
          dark:via-violet-500/10
          dark:to-blue-700/35
        "
      />



      {/* ============================= */}
      {/* Main Blue Aurora */}
      {/* ============================= */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
          rotate: [0, 15, 0],
        }}

        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute

          -left-48
          top-10

          h-[550px]
          w-[550px]

          rounded-full

          bg-blue-300/20
          dark:bg-blue-500/15

          blur-[150px]
        "
      />



      {/* ============================= */}
      {/* Cyan Ambient Glow */}
      {/* ============================= */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}

        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute

          right-[-120px]
          top-44

          h-[520px]
          w-[520px]

          rounded-full

          bg-cyan-300/15
          dark:bg-cyan-400/10

          blur-[160px]
        "
      />



      {/* ============================= */}
      {/* Soft Violet Accent */}
      {/* ============================= */}

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 35, 0],
          scale: [1, 1.12, 1],
        }}

        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute

          -right-40
          bottom-20

          h-[420px]
          w-[420px]

          rounded-full

          bg-violet-300/10
          dark:bg-violet-500/10

          blur-[170px]
        "
      />



      {/* ============================= */}
      {/* Stars */}
      {/* ============================= */}

      <StarLayer stars={smallStars} />
      <StarLayer stars={mediumStars} />
      <StarLayer stars={largeStars} />



      {/* ============================= */}
      {/* Floating Particles */}
      {/* ============================= */}

      {
        particles.map((particle, index) => (

          <motion.span
            key={index}

            animate={{
              y: [0, -35, 0],
              opacity: [0.2, 0.75, 0.2],
              scale: [1, 1.25, 1],
            }}

            transition={{
              duration: 5 + index,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}

            className={`
              absolute

              ${particle.position}
              ${particle.size}

              rounded-full

              bg-cyan-300/40
              dark:bg-blue-400/50

              blur-md
            `}
          />

        ))
      }



      {/* ============================= */}
      {/* Dot Texture */}
      {/* ============================= */}

      <div
        className="
          absolute
          inset-0

          opacity-15
          dark:opacity-10

          [background-image:radial-gradient(circle,#94a3b8_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />



      {/* ============================= */}
      {/* Gradient Overlay */}
      {/* ============================= */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-transparent
          via-transparent

          to-slate-100/50
          dark:to-slate-950/70
        "
      />



    </div>
  );
}