import { motion } from "motion/react";
import { MapPin, CalendarDays } from "lucide-react";

export default function ExperienceCard({ data }) {
  return (
    <motion.div
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

        bg-white/70

        p-8

        shadow-lg

        backdrop-blur-xl

        transition-all
        duration-300

        hover:border-blue-500/40

        hover:shadow-2xl
        hover:shadow-blue-500/20

        dark:border-slate-800
        dark:bg-slate-900/60
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
          from-blue-500/10
          via-transparent
          to-violet-500/10
        "
      />

      {/* Company Header */}
      <div
        className="
          relative
          z-10

          flex
          flex-col

          gap-5

          sm:flex-row
          sm:items-center
        "
      >
        {/* Company Logo */}
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 3,
          }}
          className="
            flex

            h-20
            w-20

            shrink-0

            items-center
            justify-center

            overflow-hidden

            rounded-2xl

            border
            border-slate-200

            bg-white

            shadow-md

            dark:border-slate-700
            dark:bg-slate-800
          "
        >
          <img
            src={data.logo}
            alt={data.company}
            className="
              h-full
              w-full
              object-cover
            "
          />
        </motion.div>

        {/* Company Information */}
        <div className="flex-1">
          {/* Company Name */}
          <h3
            className="
              text-2xl
              font-bold

              text-slate-900

              dark:text-white
            "
          >
            {data.company}
          </h3>

          {/* Position & Duration */}
          <div
            className="
              mt-3

              flex
              flex-col

              gap-2

              text-lg

              text-slate-500

              dark:text-slate-400

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* Position */}
            <span
              className="
                font-semibold
                text-blue-500
              "
            >
              {data.position}
            </span>

            {/* Duration */}
            <span
              className="
                flex
                items-center

                gap-2

                text-sm
                sm:text-lg

                text-slate-500

                dark:text-slate-400
              "
            >
              <CalendarDays
                size={15}
                className="text-blue-500"
              />

              {data.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Location */}
      <div
        className="
          relative
          z-10

          mt-6

          flex
          items-center

          gap-2

          text-sm

          text-slate-500

          dark:text-slate-400
        "
      >
        <MapPin
          size={18}
          className="text-blue-500"
        />

        {data.location}
      </div>

      {/* Responsibilities */}
      <ul
        className="
          relative
          z-10

          mt-6

          space-y-3
        "
      >
        {data.responsibilities.map((item, index) => (
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

            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}