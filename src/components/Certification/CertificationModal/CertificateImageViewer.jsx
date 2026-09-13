import {
  AnimatePresence,
  motion,
} from "motion/react";
import {
  useEffect,
  useState,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";

export default function CertificateImageViewer({
  certificate,
}) {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const images = certificate?.images || [];
  const totalImages = images.length;

  const hasMultipleImages =
    totalImages > 1;

  /*
  |--------------------------------------------------------------------------
  | RESET SLIDER
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    setCurrentIndex(0);
  }, [certificate]);

  /*
  |--------------------------------------------------------------------------
  | PREVIOUS IMAGE
  |--------------------------------------------------------------------------
  */

  const handlePrevious = () => {
    if (!hasMultipleImages) return;

    setCurrentIndex((previousIndex) =>
      previousIndex === 0
        ? totalImages - 1
        : previousIndex - 1
    );
  };

  /*
  |--------------------------------------------------------------------------
  | NEXT IMAGE
  |--------------------------------------------------------------------------
  */

  const handleNext = () => {
    if (!hasMultipleImages) return;

    setCurrentIndex((previousIndex) =>
      previousIndex === totalImages - 1
        ? 0
        : previousIndex + 1
    );
  };

  /*
  |--------------------------------------------------------------------------
  | KEYBOARD SLIDER CONTROL
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (
      !certificate ||
      !hasMultipleImages
    ) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        setCurrentIndex(
          (previousIndex) =>
            previousIndex === 0
              ? totalImages - 1
              : previousIndex - 1
        );
      }

      if (event.key === "ArrowRight") {
        setCurrentIndex(
          (previousIndex) =>
            previousIndex ===
            totalImages - 1
              ? 0
              : previousIndex + 1
        );
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    certificate,
    hasMultipleImages,
    totalImages,
  ]);

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
      {/* BACKGROUND DECORATION */}
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

      {/* IMAGE VIEWER */}
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
            <img
              src={images[currentIndex]}
              alt={`${certificate.title} - Page ${
                currentIndex + 1
              }`}
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
              draggable="false"
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        /* EMPTY STATE */
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

          <p className="text-sm font-medium">
            Certificate image unavailable.
          </p>
        </div>
      )}

      {/* SLIDER CONTROLS */}
      {hasMultipleImages && (
        <>
          {/* PREVIOUS BUTTON */}
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous certificate page"
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

              sm:left-4
              sm:h-12
              sm:w-12
            "
          >
            <ChevronLeft size={24} />
          </button>

          {/* NEXT BUTTON */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next certificate page"
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

              sm:right-4
              sm:h-12
              sm:w-12
            "
          >
            <ChevronRight size={24} />
          </button>

          {/* PAGINATION */}
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
            {/* DOTS */}
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
                    aria-label={`Go to page ${
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

            {/* PAGE COUNTER */}
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