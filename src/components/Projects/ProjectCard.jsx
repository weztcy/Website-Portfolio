import {
  useState,
} from "react";

import {
  motion,
} from "motion/react";

import {
  CalendarDays,
} from "lucide-react";

import ProjectPreview from "./ProjectPreview";


export default function ProjectCard({
  project,
  index,
  onOpen,
}) {
  const [isHovered, setIsHovered] =
    useState(false);


  const Icon =
    project.icon;


  /*
  |--------------------------------------------------------------------------
  | OPEN PROJECT
  |--------------------------------------------------------------------------
  */

  const handleOpen = () => {
    if (!project) return;

    onOpen(project);
  };


  /*
  |--------------------------------------------------------------------------
  | KEYBOARD ACCESSIBILITY
  |--------------------------------------------------------------------------
  */

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();

      handleOpen();
    }
  };


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
        duration: 0.6,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      whileHover={{
  y: -10,

  transition: {
    duration: 0.5,
    delay: 0,
    ease: "easeOut",
  },
}}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onFocus={() => {
        setIsHovered(true);
      }}
      onBlur={() => {
        setIsHovered(false);
      }}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View project: ${project.title}`}
      className="
        group

        cursor-pointer

        overflow-hidden

        rounded-3xl

        border
        border-slate-200

        bg-white/70

        p-5

        shadow-lg

        backdrop-blur-xl

        outline-none

        transition-all
        duration-300

        hover:border-blue-400/50

        hover:shadow-2xl
        hover:shadow-blue-500/20

        focus-visible:ring-2
        focus-visible:ring-blue-500
        focus-visible:ring-offset-2

        dark:border-slate-800

        dark:bg-slate-900/60

        dark:focus-visible:ring-offset-slate-950
      "
    >
      {/* =========================================================
          PROJECT PREVIEW
      ========================================================== */}

      <ProjectPreview
        project={project}
        isHovered={isHovered}
      />


      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div
        className="
          mt-6
        "
      >
        {/* =======================================================
            ROW 1
            ICON + DATE
        ======================================================== */}

        <div
          className="
            flex

            items-center

            justify-between
          "
        >
          {/* Project Icon */}

          <div
            className="
              flex

              h-10
              w-10

              items-center
              justify-center

              rounded-xl

              bg-gradient-to-br

              from-blue-500
              to-cyan-500

              text-white

              shadow-md
            "
          >
            <Icon size={21} />
          </div>


          {/* Date */}

          <div
            className="
              flex

              items-center

              gap-2

              text-sm

              text-slate-500

              dark:text-slate-400
            "
          >
            <CalendarDays
              size={16}
            />

            <span>
              {project.date}
            </span>
          </div>
        </div>


        {/* =======================================================
            TITLE
        ======================================================== */}

        <h3
          className="
            mt-5

            text-lg

            font-black

            text-slate-900

            transition-all
            duration-300

            group-hover:bg-gradient-to-r

            group-hover:from-blue-600
            group-hover:to-cyan-500

            group-hover:bg-clip-text

            group-hover:text-transparent

            dark:text-white
          "
        >
          {project.title}
        </h3>


        {/* =======================================================
            SHORT DESCRIPTION
        ======================================================== */}

        <p
          className="
            mt-3

            line-clamp-4

            text-sm

            leading-7

            text-slate-600

            dark:text-slate-400
          "
        >
          {project.shortDescription}
        </p>


        {/* =======================================================
            TECHNOLOGIES
        ======================================================== */}

        {project.technologies
          ?.length > 0 && (
          <div
            className="
              mt-6

              flex

              flex-wrap

              gap-2
            "
          >
            {project.technologies.map(
              (tech) => (
                <span
                  key={tech.name}
                  className={`
                    rounded-full

                    px-3
                    py-1.5

                    text-xs

                    font-semibold

                    ${tech.color}
                  `}
                >
                  {tech.name}
                </span>
              )
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}