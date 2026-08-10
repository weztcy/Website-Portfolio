import { motion } from "motion/react";

import {
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

const quickInfo = [
  {
    icon: MapPin,
    title: "Based In",
    value: "Semarang, Jawa Tengah, Indonesia",
    iconColor: "text-blue-500",
    glow: "hover:shadow-blue-500/20",
  },
  {
    icon: GraduationCap,
    title: "Education",
    value: "Dian Nuswantoro University",
    iconColor: "text-violet-500",
    glow: "hover:shadow-violet-500/20",
  },
  {
    icon: BriefcaseBusiness,
    title: "Status",
    value: "Open To Work",
    iconColor: "text-emerald-500",
    glow: "hover:shadow-emerald-500/20",
  },
];

export default function QuickInfo() {
  return (
    <div
      className="
        grid
        w-full
        grid-cols-1
        gap-4

        sm:grid-cols-2
        sm:gap-5

        lg:grid-cols-1
      "
    >
      {quickInfo.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className={`
              group
              relative
              w-full
              overflow-hidden

              rounded-2xl
              border
              border-slate-200

              bg-white/70

              p-4
              sm:rounded-3xl
              sm:p-6

              shadow-lg
              backdrop-blur-xl

              transition-all
              duration-300

              hover:border-blue-500/30
              hover:shadow-2xl

              ${item.glow}

              dark:border-slate-800
              dark:bg-slate-900/60
            `}
          >
            {/* Hover Glow */}
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

            {/* 
              MOBILE:
              Icon + title sejajar

              TABLET / DESKTOP:
              Icon di atas, title di bawah
            */}
            <div
              className="
                relative
                z-10

                mb-3

                flex
                items-center
                gap-3

                sm:mb-0
                sm:block
              "
            >
              {/* Icon Container */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0

                  items-center
                  justify-center

                  rounded-xl

                  bg-slate-100

                  transition-all
                  duration-300

                  group-hover:scale-110
                  group-hover:rotate-6

                  sm:mb-5
                  sm:h-16
                  sm:w-16
                  sm:rounded-2xl

                  dark:bg-slate-800
                "
              >
                <Icon
                  size={26}
                  className={`
                    ${item.iconColor}

                    sm:h-[30px]
                    sm:w-[30px]
                  `}
                />
              </div>

              {/* Title */}
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-widest

                  text-slate-500

                  sm:text-sm
                  sm:font-medium

                  dark:text-slate-400
                "
              >
                {item.title}
              </p>
            </div>

            {/* Value */}
            <h3
              className="
                relative
                z-10

                text-base
                font-bold
                leading-snug

                text-slate-900

                sm:mt-2
                sm:text-xl

                dark:text-white
              "
            >
              {item.value}
            </h3>
          </motion.div>
        );
      })}
    </div>
  );
}