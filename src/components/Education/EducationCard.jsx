import { motion } from "motion/react";
import { useEffect, useState } from "react";

import {
  CalendarDays,
  Award,
} from "lucide-react";

function CountUp({
  end,
  duration = 1200,
  trigger = 0,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame;
    let startTime = null;

    setCount(0);

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // smooth easing
      const ease =
        1 - Math.pow(1 - progress, 3);

      setCount(end * ease);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [
    end,
    duration,
    trigger,
  ]);

  return count.toFixed(2);
}

export default function EducationCard({ data }) {
  const [gpaTrigger, setGpaTrigger] =
    useState(0);

  const replayGPA = () => {
    setGpaTrigger(
      (prev) => prev + 1
    );
  };

  return (
    <motion.div
      onMouseEnter={replayGPA}

      initial={{
        opacity: 0,
        y: 50,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.7,
      }}

      whileHover={{
        y: -8,
      }}

      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white/90
        p-8
        shadow-lg
        backdrop-blur-xl
        transition-all
        duration-300

        hover:border-blue-500/40
        hover:shadow-2xl
        hover:shadow-blue-500/20

        dark:border-slate-800
        dark:bg-slate-900/80
      "
    >

      {/* Hover Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500

          group-hover:opacity-100

          bg-gradient-to-br
          from-blue-400/10
          via-transparent
          to-violet-400/10

          dark:from-blue-500/10
          dark:to-violet-500/10
        "
      />

      {/* Header */}

      <div
        className="
          relative
          z-10

          flex
          flex-col
          gap-8

          lg:flex-row
          lg:items-start
          lg:justify-between
        "
      >

        {/* University Information */}

        <div>

          {/* MOBILE */}

          <div
            className="
              lg:hidden
            "
          >

            {/* Row 1: Logo + Institution */}

            <div
              className="
                flex
                items-center
                gap-5
              "
            >

              {/* Logo */}

              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}

                className="
                  flex
                  h-20
                  w-20
                  shrink-0

                  items-center
                  justify-center

                  overflow-hidden

                  rounded-full

                  border
                  border-slate-200

                  bg-slate-100

                  shadow-md

                  dark:border-slate-700
                  dark:bg-slate-800
                "
              >
                <img
                  src={data.logo}
                  alt={data.institution}

                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </motion.div>

              {/* Institution */}

              <h3
                className="
                  text-lg
                  font-bold

                  text-slate-900

                  dark:text-white

                  md:text-2xl
                "
              >
                {data.institution}
              </h3>

            </div>

            {/* Row 2: Major */}

            <p
              className="
                mt-4

                text-sm

                font-bold

                text-blue-500
              "
            >
              {data.major}
            </p>

          </div>


          {/* DESKTOP */}

          <div
            className="
              hidden
              items-center
              gap-5

              lg:flex
            "
          >

            {/* Logo */}

            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}

              className="
                flex
                h-20
                w-20
                shrink-0

                items-center
                justify-center

                overflow-hidden

                rounded-full

                border
                border-slate-200

                bg-slate-100

                shadow-md

                dark:border-slate-700
                dark:bg-slate-800
              "
            >
              <img
                src={data.logo}
                alt={data.institution}

                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </motion.div>

            {/* Name */}

            <div>

              <h3
                className="
                  text-xl
                  font-bold

                  text-slate-900

                  dark:text-white

                  md:text-2xl
                "
              >
                {data.institution}
              </h3>

              <p
                className="
                  mt-2

                  text-base

                  font-bold

                  text-blue-500
                "
              >
                {data.major}
              </p>

            </div>

          </div>

        </div>

        {/* GPA */}

        <motion.div
          whileHover={{
            scale: 1.08,
          }}

          className="
            flex

            items-center

            gap-4

            rounded-2xl

            bg-gradient-to-r

            from-blue-500

            to-cyan-500

            px-6

            py-4

            text-white

            shadow-lg

            shadow-blue-500/30
          "
        >

          <Award
            size={32}
          />

          <div>

            <p
              className="
                text-xs

                uppercase

                tracking-widest

                text-white/80
              "
            >
              GPA Score
            </p>

            <p
              className="
                text-3xl

                font-black

                leading-none
              "
            >
              <CountUp
                end={
                  Number(data.gpa)
                }

                trigger={
                  gpaTrigger
                }
              />
            </p>

          </div>

        </motion.div>

      </div>

      {/* Period */}

      <div
        className="
          relative

          z-10

          mt-6

          flex

          items-center

          gap-2

          text-sm

          text-slate-600

          dark:text-slate-400
        "
      >
        <CalendarDays
          size={18}

          className="
            text-blue-500
          "
        />

        {data.period}
      </div>

      {/* Activities */}

      <ul
        className="
          relative

          z-10

          mt-6

          space-y-3
        "
      >
        {
          data.activities.map(
            (
              activity,
              index
            ) => (
              <motion.li
                key={index}

                initial={{
                  opacity: 0,
                  x: -15,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: index * 0.1,
                }}

                className="
                  flex

                  gap-3

                  text-slate-600

                  dark:text-slate-300
                "
              >

                <span
                  className="
                    mt-2

                    h-2

                    w-2

                    shrink-0

                    rounded-full

                    bg-blue-500
                  "
                />

                <span>
                  {activity}
                </span>

              </motion.li>
            )
          )
        }
      </ul>

    </motion.div>
  );
}