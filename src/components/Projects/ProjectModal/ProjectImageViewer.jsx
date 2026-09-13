import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";

export default function ProjectImageViewer({
  project,
  images,
  totalImages,
  hasMultipleImages,
  currentIndex,
  setCurrentIndex,
  currentImage,
  hasCurrentImage,
  setImageError,
  handlePrevious,
  handleNext,
}) {
  return (
    <div
      className="
        relative

        flex

        min-h-[280px]
        w-full

        items-center
        justify-center

        overflow-hidden

        bg-slate-100

        dark:bg-slate-950

        sm:min-h-[400px]

        md:min-h-[500px]

        lg:h-[85vh]
        lg:min-h-0
        lg:max-h-[85vh]
      "
    >
      {/* Decorative Background */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-gradient-to-br

          from-blue-500/5
          via-transparent
          to-cyan-500/5
        "
      />

      {/* -----------------------------------------------
          IMAGE
      ------------------------------------------------ */}

      {totalImages > 0 ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              flex

              h-full
              min-h-0
              w-full

              items-center
              justify-center

              p-4

              sm:p-6

              md:p-8

              lg:p-10
            "
          >
            {hasCurrentImage ? (
              <img
                src={currentImage}
                alt={`${project.title} - Image ${
                  currentIndex + 1
                }`}
                draggable="false"
                onError={() =>
                  setImageError(true)
                }
                className="
                  block

                  max-h-full
                  max-w-full

                  select-none

                  rounded-xl

                  object-contain

                  shadow-xl
                  shadow-slate-950/10

                  sm:rounded-2xl

                  dark:shadow-black/30
                "
              />
            ) : (
              <div
                className="
                  flex
                  flex-col

                  items-center
                  justify-center

                  gap-3

                  p-10

                  text-center

                  text-slate-400
                "
              >
                <ImageIcon
                  size={48}
                  strokeWidth={1.5}
                />

                <p
                  className="
                    text-sm
                    font-medium
                  "
                >
                  Project image unavailable.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      ) : (
        /* -----------------------------------------------
            EMPTY IMAGE
        ------------------------------------------------ */

        <div
          className="
            flex
            flex-col

            items-center
            justify-center

            gap-3

            p-10

            text-center

            text-slate-400
          "
        >
          <ImageIcon
            size={48}
            strokeWidth={1.5}
          />

          <p
            className="
              text-sm
              font-medium
            "
          >
            Project image unavailable.
          </p>
        </div>
      )}

      {/* =================================================
          SLIDER CONTROLS
      ================================================== */}

      {hasMultipleImages && (
        <>
          {/* Previous */}

          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous project image"
            className="
              absolute

              left-2
              top-1/2

              z-20

              flex

              h-10
              w-10

              -translate-y-1/2

              items-center
              justify-center

              rounded-full

              border
              border-white/30

              bg-slate-950/60

              text-white

              shadow-lg

              backdrop-blur-md

              transition-all
              duration-300

              hover:scale-110
              hover:bg-blue-600

              focus:outline-none
              focus:ring-2
              focus:ring-white/60

              sm:left-4

              sm:h-12
              sm:w-12
            "
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next */}

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next project image"
            className="
              absolute

              right-2
              top-1/2

              z-20

              flex

              h-10
              w-10

              -translate-y-1/2

              items-center
              justify-center

              rounded-full

              border
              border-white/30

              bg-slate-950/60

              text-white

              shadow-lg

              backdrop-blur-md

              transition-all
              duration-300

              hover:scale-110
              hover:bg-blue-600

              focus:outline-none
              focus:ring-2
              focus:ring-white/60

              sm:right-4

              sm:h-12
              sm:w-12
            "
          >
            <ChevronRight size={24} />
          </button>

          {/* -----------------------------------------------
              PAGE INDICATOR
          ------------------------------------------------ */}

          <div
            className="
              absolute

              bottom-3
              left-1/2

              z-20

              flex

              -translate-x-1/2

              items-center

              gap-2

              rounded-full

              border
              border-white/20

              bg-slate-950/65

              px-3
              py-2

              shadow-lg

              backdrop-blur-md

              sm:bottom-4
            "
          >
            {/* Dots */}

            <div
              className="
                flex
                items-center
                gap-1.5
              "
            >
              {images.map(
                (_image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      setCurrentIndex(index)
                    }
                    aria-label={`Go to image ${
                      index + 1
                    }`}
                    className={`
                      h-2

                      rounded-full

                      transition-all
                      duration-300

                      ${
                        currentIndex === index
                          ? "w-6 bg-white"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }
                    `}
                  />
                )
              )}
            </div>

            {/* Counter */}

            <span
              className="
                ml-1

                text-xs

                font-semibold

                tabular-nums

                text-white
              "
            >
              {currentIndex + 1}/
              {totalImages}
            </span>
          </div>
        </>
      )}
    </div>
  );
}