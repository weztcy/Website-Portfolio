import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { CalendarDays, Award } from "lucide-react";

// ===============================
// CONFIG DELAY
// ===============================

const GPA_COUNT_DELAY = 0;

// ===============================
// COUNT UP
// ===============================

function CountUp({ end, duration = 1200, trigger = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (trigger === 0) {
      return;
    }

    let animationFrame;
    let startTime = null;

    setCount(0);

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const ease = 1 - Math.pow(1 - progress, 3);

      setCount(end * ease);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [trigger, end, duration]);

  return count.toFixed(2);
}

// ===============================
// EDUCATION CARD
// ===============================

export default function EducationCard({ data }) {
  const cardRef = useRef(null);

  const isInView = useInView(cardRef, {
    once: true,
    amount: 0.2,
  });

  const gpaStarted = useRef(false);

  const [gpaTrigger, setGpaTrigger] = useState(0);

  // ===============================
  // FIRST VIEWPORT TRIGGER
  // ===============================

  const startGPAAnimation = () => {
    if (!isInView || gpaStarted.current) {
      return;
    }

    gpaStarted.current = true;

    setTimeout(() => {
      setGpaTrigger(Date.now());
    }, GPA_COUNT_DELAY);
  };

  // ===============================
  // HOVER TRIGGER
  // ===============================

  const replayGPA = () => {
    setGpaTrigger(Date.now());
  };

  return (
    <motion.div
      ref={cardRef}
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
      onAnimationComplete={startGPAAnimation}
      onMouseEnter={replayGPA}
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
      {/* Glow */}

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

      {/* HEADER */}

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
        {/* UNIVERSITY */}

        <div>
          <div
            className="
              flex

              items-center

              gap-5
            "
          >
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

                bg-slate-100

                shadow-md
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

            <div>
              <h3
                className="
                  text-2xl

                  font-bold

                  text-slate-900

                  dark:text-white
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
          "
        >
          <Award size={32} />

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
              <CountUp end={Number(data.gpa)} trigger={gpaTrigger} />
            </p>
          </div>
        </motion.div>
      </div>

      {/* PERIOD */}

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

      {/* ACTIVITIES */}

      <ul
        className="
          relative

          z-10

          mt-6

          space-y-3
        "
      >
        {data.activities.map((activity, index) => (
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

            <span>{activity}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
