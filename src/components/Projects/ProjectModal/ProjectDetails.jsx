import { motion } from "motion/react";
import { CalendarDays } from "lucide-react";

export default function ProjectDetails({
  project,
  hasMultipleImages,
}) {
  return (
    <div
      className="
        relative

        flex
        flex-col

        bg-white

        dark:bg-slate-900

        lg:max-h-[85vh]
      "
    >
      <div
        className="
          flex-1

          overflow-y-auto

          p-5

          sm:p-7
          md:p-8
          lg:p-9
        "
      >
        {/* ---------------------------------------------
            BADGE
        ---------------------------------------------- */}

        <span
          className="
            inline-flex

            items-center

            rounded-full

            bg-blue-50

            px-3
            py-1.5

            text-xs

            font-bold

            uppercase

            tracking-[0.18em]

            text-blue-600

            dark:bg-blue-500/10
            dark:text-blue-400
          "
        >
          Project Detail
        </span>


        {/* ---------------------------------------------
            TITLE
        ---------------------------------------------- */}

        <h2
          className="
            mt-5

            pr-10

            text-xl

            font-black

            leading-tight

            text-slate-900

            dark:text-white

            sm:text-lg

            lg:pr-0
          "
        >
          {project.title}
        </h2>


        {/* ---------------------------------------------
            META INFORMATION
        ---------------------------------------------- */}

        <div
          className="
            mt-7

            space-y-3
          "
        >
          {/* Date */}

          <div
            className="
              flex

              items-start

              gap-3
            "
          >
            <div
              className="
                flex

                h-10
                w-10

                shrink-0

                items-center
                justify-center

                rounded-xl

                bg-cyan-50

                text-cyan-600

                dark:bg-cyan-500/10
                dark:text-cyan-400
              "
            >
              <CalendarDays
                size={19}
              />
            </div>


            <div>
              <p
                className="
                  text-xs

                  font-semibold

                  uppercase

                  tracking-wider

                  text-slate-400
                "
              >
                Completed
              </p>

              <p
                className="
                  mt-1

                  font-semibold

                  text-slate-700

                  dark:text-slate-200
                "
              >
                {project.date}
              </p>
            </div>
          </div>
        </div>


        {/* ---------------------------------------------
            DIVIDER
        ---------------------------------------------- */}

        <div
          className="
            my-8

            h-px

            bg-slate-200

            dark:bg-slate-800
          "
        />


        {/* =================================================
            ABOUT PROJECT
        ================================================== */}

        {project
          .detailDescription
          ?.length > 0 && (
          <>
            <h3
              className="
                text-lg

                font-bold

                text-slate-900

                dark:text-white
              "
            >
              About Project
            </h3>


            <div
              className="
                mt-5

                space-y-4
              "
            >
              {project.detailDescription.map(
                (
                  paragraph,
                  index
                ) => (
                  <motion.p
                    key={`${project.id}-description-${index}`}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration:
                        0.3,

                      delay:
                        index *
                        0.05,
                    }}
                    className="
                      text-sm

                      leading-7

                      text-slate-600

                      dark:text-slate-300
                    "
                  >
                    {paragraph}
                  </motion.p>
                )
              )}
            </div>
          </>
        )}


        {/* ---------------------------------------------
            DIVIDER
        ---------------------------------------------- */}

        {project
          .detailDescription
          ?.length > 0 &&
          project
            .technologies
            ?.length > 0 && (
            <div
              className="
                my-8

                h-px

                bg-slate-200

                dark:bg-slate-800
              "
            />
          )}


        {/* =================================================
            TECHNOLOGIES
        ================================================== */}

        {project
          .technologies
          ?.length > 0 && (
          <>
            <h3
              className="
                text-lg

                font-bold

                text-slate-900

                dark:text-white
              "
            >
              Technologies
            </h3>


            <div
              className="
                mt-5

                flex
                flex-wrap

                gap-2.5
              "
            >
              {project.technologies.map(
                (
                  technology,
                  index
                ) => (
                  <motion.span
                    key={`${technology.name}-${index}`}
                    initial={{
                      opacity: 0,
                      scale:
                        0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration:
                        0.25,

                      delay:
                        index *
                        0.05,
                    }}
                    className={`
                      inline-flex

                      items-center

                      rounded-full

                      px-3.5
                      py-2

                      text-xs

                      font-semibold

                      ${technology.color}
                    `}
                  >
                    {
                      technology.name
                    }
                  </motion.span>
                )
              )}
            </div>
          </>
        )}
      </div>


      {/* =================================================
          MOBILE IMAGE INFORMATION
      ================================================== */}

      {hasMultipleImages && (
        <div
          className="
            border-t
            border-slate-200

            px-5
            py-4

            text-center

            text-xs

            text-slate-400

            dark:border-slate-800

            lg:hidden
          "
        >
          Use the arrows to navigate
          through the project images.
        </div>
      )}
    </div>
  );
}
