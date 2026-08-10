import { motion } from "motion/react";

import {
  ExternalLink,
} from "lucide-react";


export default function PublicationCard({
  publication,
  index,
}) {
  const JournalIcon = publication.icon;


  function openPublication() {
    window.open(
      publication.link,
      "_blank",
      "noopener,noreferrer"
    );
  }


  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}

      whileInView={{
        opacity: 1,
        x: 0,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}

      whileHover={{
        y: -8,
      }}

      onClick={openPublication}

      className="
        group
        relative
        cursor-pointer
        rounded-3xl
        border
        border-slate-200
        bg-white/70
        p-6
        shadow-lg
        backdrop-blur-xl
        transition-all
        duration-300

        hover:border-blue-400/50
        hover:shadow-2xl
        hover:shadow-blue-500/20

        sm:p-8

        dark:border-slate-800
        dark:bg-slate-900/60
      "
    >

      {/* External Link */}

      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.15,
        }}

        className="
          absolute
          right-5
          top-6

          flex
          h-10
          w-10

          items-center
          justify-center

          rounded-xl

          bg-blue-500/10

          text-blue-600

          transition-all

          sm:right-8
          sm:top-1/2
          sm:h-12
          sm:w-12
          sm:-translate-y-1/2
          sm:rounded-2xl

          dark:text-cyan-400
        "
      >
        <ExternalLink
          size={22}
          className="
            sm:h-[25px]
            sm:w-[25px]
          "
        />
      </motion.div>



      {/* Top Row : Year + Author */}

      <div
        className="
          flex
          flex-wrap
          items-center
          gap-2
          pr-12

          sm:gap-3
          sm:pr-16
        "
      >

        {/* Year */}

        <span
          className="
            rounded-xl
            bg-blue-100
            px-3
            py-1.5

            text-xs
            font-bold

            text-blue-700

            sm:px-4
            sm:py-2
            sm:text-sm

            dark:bg-blue-500/20
            dark:text-cyan-300
          "
        >
          {publication.year}
        </span>


        {/* Author Badge */}

        <span
          className="
            rounded-xl

            bg-gradient-to-r
            from-violet-100
            to-blue-100

            px-3
            py-1.5

            text-xs
            font-bold

            text-violet-700

            sm:px-4
            sm:py-2
            sm:text-sm

            dark:from-violet-500/20
            dark:to-blue-500/20
            dark:text-cyan-300
          "
        >
          {publication.authorRole}
        </span>

      </div>



      {/* Title */}

      <h3
        className="
          mt-5

          max-w-full

          text-lg

          font-black
          leading-snug

          text-slate-900

          transition-all
          duration-300

          group-hover:bg-gradient-to-r
          group-hover:from-blue-600
          group-hover:to-cyan-500
          group-hover:bg-clip-text
          group-hover:text-transparent

          sm:mt-6
          sm:max-w-[85%]
          sm:text-2xl
          sm:leading-snug

          dark:text-white
        "
      >
        {publication.title}
      </h3>



      {/* Publisher Information */}

      <div
        className="
          mt-6

          flex
          items-start
          gap-3

          sm:mt-7
          sm:gap-4
        "
      >

        {/* Icon */}

        <div
          className="
            flex
            h-10
            w-10
            shrink-0

            items-center
            justify-center

            rounded-xl

            bg-gradient-to-br
            from-blue-500
            to-cyan-500

            text-white

            shadow-md

            sm:h-12
            sm:w-12
            sm:rounded-2xl
          "
        >
          <JournalIcon
            size={21}
            className="
              sm:h-6
              sm:w-6
            "
          />
        </div>



        {/* Publisher Text */}

        <div
          className="
            min-w-0
          "
        >

          <p
            className="
              text-sm
              font-semibold

              text-slate-800

              sm:text-base

              dark:text-slate-200
            "
          >
            {publication.publisher}
          </p>


          <p
            className="
              mt-1

              text-xs

              text-slate-500

              sm:text-sm

              dark:text-slate-400
            "
          >
            {publication.accreditation}
          </p>

        </div>

      </div>

    </motion.div>
  );
}