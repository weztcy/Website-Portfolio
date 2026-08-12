import { motion } from "motion/react";
import { useEffect, useState } from "react";

import {
  BriefcaseBusiness,
  FolderGit2,
  FileBadge2,
  GraduationCap,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: 1,
    suffix: "+",
    title: "Years Experience",
    target: "experience",
    color: "from-blue-500 to-cyan-500",
  },

  {
    icon: FolderGit2,
    value: 15,
    suffix: "+",
    title: "Projects Completed",
    target: "projects",
    color: "from-violet-500 to-fuchsia-500",
  },

  {
    icon: FileBadge2,
    value: 10,
    suffix: "+",
    title: "Certifications",
    target: "certification",
    color: "from-emerald-500 to-lime-500",
  },

  {
    icon: GraduationCap,
    value: 3.7,
    suffix: "",
    title: "GPA",
    target: "education",
    color: "from-orange-500 to-yellow-500",
  },
];

function CountUp({ end, duration = 1200, decimals = 0, trigger = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame;
    let startTime = null;

    setCount(0);

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(end * easedProgress);

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
  }, [end, duration, trigger]);

  return decimals > 0 ? count.toFixed(decimals) : Math.floor(count);
}

function StatCard({ item, index }) {
  const [countTrigger, setCountTrigger] = useState(0);

  const Icon = item.icon;

  const handleMouseEnter = () => {
    setCountTrigger((prev) => prev + 1);
  };

  const handleClick = () => {
    const targetSection = document.getElementById(item.target);

    if (!targetSection) {
      return;
    }

    const navbarOffset = 90;

    const targetPosition =
      targetSection.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      className="
        group

        relative

        cursor-pointer

        overflow-hidden

        rounded-3xl

        border

        border-slate-200

        bg-white/70

        p-5

        shadow-lg

        backdrop-blur-xl

        transition-all

        duration-300

        hover:border-blue-500/40

        hover:shadow-2xl

        hover:shadow-blue-500/20

        focus:outline-none

        focus:ring-2

        focus:ring-blue-500/50

        sm:p-8

        dark:border-slate-800

        dark:bg-slate-900/60
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none

          absolute

          inset-0

          bg-gradient-to-br

          from-blue-500/5

          via-transparent

          to-cyan-500/10

          opacity-0

          transition-opacity

          duration-500

          group-hover:opacity-100
        "
      />

      {/* Content */}

      <div
        className="
          relative

          z-10

          flex

          items-center

          gap-5

          sm:flex-col

          sm:items-start

          sm:gap-0
        "
      >
        {/* Icon */}

        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 4,
          }}
          className={`
            flex

            h-14

            w-14

            shrink-0

            items-center

            justify-center

            rounded-2xl

            bg-gradient-to-r

            ${item.color}

            text-white

            shadow-lg

            sm:mb-6

            sm:h-16

            sm:w-16
          `}
        >
          <Icon
            className="
              h-[28px]

              w-[28px]

              sm:h-[30px]

              sm:w-[30px]
            "
          />
        </motion.div>

        {/* Number + Title */}

        <div
          className="
            min-w-0

            flex-1

            sm:w-full
          "
        >
          {/* Number */}

          <h3
            className="
              text-3xl

              font-black

              leading-none

              text-slate-900

              sm:text-4xl

              dark:text-white
            "
          >
            <CountUp
              end={item.value}
              duration={1200}
              decimals={item.title === "GPA" ? 2 : 0}
              trigger={countTrigger}
            />

            {item.suffix}
          </h3>

          {/* Title */}

          <p
            className="
              mt-1.5

              text-sm

              font-medium

              text-slate-500

              sm:mt-3

              sm:text-base

              dark:text-slate-400
            "
          >
            {item.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutStats() {
  return (
    <div
      className="
        mt-12

        grid

        grid-cols-1

        gap-4

        sm:mt-20

        sm:grid-cols-2

        sm:gap-6

        xl:grid-cols-4
      "
    >
      {stats.map((item, index) => (
        <StatCard key={item.title} item={item} index={index} />
      ))}
    </div>
  );
}
