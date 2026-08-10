import { motion } from "motion/react";


const shapes = [
  {
    size: "h-40 w-40",
    position: "-top-20 left-20",
    delay: 0,
  },
  {
    size: "h-52 w-52",
    position: "top-1/3 -right-24",
    delay: 1.5,
  },
  {
    size: "h-32 w-32",
    position: "bottom-24 left-1/4",
    delay: 2.5,
  },
];


export default function BackgroundPattern() {

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


      {/* Base Background */}

      <div
        className="
          absolute

          inset-0

          bg-slate-50

          dark:bg-slate-950
        "
      />



      {/* Main Geometry Glow */}

      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}

        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}

        className="
          absolute

          -top-40

          left-1/2

          h-[600px]

          w-[600px]

          -translate-x-1/2

          rounded-[35%]

          bg-gradient-to-br

          from-blue-400/20

          via-cyan-300/10

          to-violet-400/20

          blur-[120px]

          dark:from-blue-600/20

          dark:via-cyan-500/10

          dark:to-violet-600/20
        "
      />



      {/* Floating Geometric Shapes */}

      {
        shapes.map((shape, index) => (

          <motion.div
            key={index}

            animate={{
              y: [0, -30, 0],
              rotate: [0, 45, 90],
              scale: [1, 1.1, 1],
            }}

            transition={{
              duration: 12 + index * 3,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}

            className={`
              absolute

              ${shape.position}

              ${shape.size}

              rounded-[2rem]

              border

              border-blue-300/20

              bg-blue-400/5

              backdrop-blur-xl


              dark:border-blue-400/10

              dark:bg-blue-500/5
            `}
          />

        ))
      }



      {/* Hexagon Pattern */}

      <div
        className="
          absolute

          inset-0

          opacity-[0.12]

          dark:opacity-[0.08]

          bg-[linear-gradient(30deg,#94a3b8_12%,transparent_12.5%,transparent_87%,#94a3b8_87.5%,#94a3b8),linear-gradient(150deg,#94a3b8_12%,transparent_12.5%,transparent_87%,#94a3b8_87.5%,#94a3b8)]

          bg-[size:70px_120px]
        "
      />



      {/* Orbit Lines */}

      <motion.div
        animate={{
          rotate: [0, 360],
        }}

        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}

        className="
          absolute

          left-1/2

          top-1/2

          h-[700px]

          w-[700px]

          -translate-x-1/2

          -translate-y-1/2

          rounded-full

          border

          border-blue-300/20

          dark:border-blue-500/10
        "
      />



      {/* Bottom Gradient */}

      <div
        className="
          absolute

          inset-0

          bg-gradient-to-b

          from-transparent

          via-transparent

          to-slate-100/60

          dark:to-slate-950/70
        "
      />

    </div>
  );
}