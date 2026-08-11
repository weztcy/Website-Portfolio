import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  useEffect,
  useState,
} from "react";

import { X } from "lucide-react";

import ProjectImageViewer from "./ProjectImageViewer";
import ProjectDetails from "./ProjectDetails";

export default function ProjectModal({
  project,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [imageError, setImageError] =
    useState(false);


  /*
  |--------------------------------------------------------------------------
  | PROJECT IMAGES
  |--------------------------------------------------------------------------
  */

  const images =
    project?.images || [];


  const totalImages =
    images.length;


  const hasMultipleImages =
    totalImages > 1;


  const currentImage =
    images[currentIndex];


  const hasCurrentImage =
    Boolean(currentImage) &&
    !imageError;


  /*
  |--------------------------------------------------------------------------
  | RESET SLIDER
  |--------------------------------------------------------------------------
  |
  | Ketika membuka project yang berbeda,
  | slider selalu kembali ke gambar pertama.
  |
  */

  useEffect(() => {
    setCurrentIndex(0);
    setImageError(false);
  }, [project]);


  /*
  |--------------------------------------------------------------------------
  | RESET IMAGE ERROR
  |--------------------------------------------------------------------------
  |
  | Ketika berpindah gambar, status error
  | dikembalikan ke kondisi awal.
  |
  */

  useEffect(() => {
    setImageError(false);
  }, [currentIndex]);


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
  | KEYBOARD CONTROL
  |--------------------------------------------------------------------------
  |
  | Escape      → close modal
  | ArrowLeft   → previous image
  | ArrowRight  → next image
  |
  */

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (
        event.key === "ArrowLeft" &&
        hasMultipleImages
      ) {
        handlePrevious();
      }

      if (
        event.key === "ArrowRight" &&
        hasMultipleImages
      ) {
        handleNext();
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
    project,
    hasMultipleImages,
    totalImages,
    onClose,
  ]);


  /*
  |--------------------------------------------------------------------------
  | LOCK BODY SCROLL
  |--------------------------------------------------------------------------
  |
  | Saat modal terbuka, halaman di belakang
  | tidak dapat di-scroll.
  |
  */

  useEffect(() => {
    if (!project) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";


    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [project]);


  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[999]

            flex
            items-center
            justify-center

            overflow-y-auto

            bg-slate-950/75

            p-3

            backdrop-blur-md

            sm:p-5
            md:p-6
          "
        >
          {/* =====================================================
              MODAL CONTAINER
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              y: 30,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            onClick={(event) =>
              event.stopPropagation()
            }
            className="
              relative

              my-auto

              w-full
              max-w-6xl

              overflow-hidden

              rounded-2xl

              border
              border-white/20

              bg-white

              shadow-2xl
              shadow-black/30

              dark:border-slate-700/70
              dark:bg-slate-900

              sm:rounded-3xl

              lg:max-h-[90vh]
            "
          >
            {/* =====================================================
                CLOSE BUTTON
            ====================================================== */}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project modal"
              className="
                absolute

                right-3
                top-3

                z-50

                flex

                h-10
                w-10

                items-center
                justify-center

                rounded-full

                border
                border-white/20

                bg-slate-950/70

                text-white

                shadow-lg

                backdrop-blur-md

                transition-all
                duration-300

                hover:scale-105
                hover:bg-red-500

                focus:outline-none
                focus:ring-2
                focus:ring-white/60

                sm:right-4
                sm:top-4

                sm:h-11
                sm:w-11
              "
            >
              <X size={21} />
            </button>


            {/* =====================================================
                RESPONSIVE CONTENT
            ====================================================== */}

            <div
              className="
                grid

                grid-cols-1

                lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)]
              "
            >
              <ProjectImageViewer
                project={project}
                images={images}
                totalImages={totalImages}
                hasMultipleImages={hasMultipleImages}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                currentImage={currentImage}
                hasCurrentImage={hasCurrentImage}
                setImageError={setImageError}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
              />

              <ProjectDetails
                project={project}
                hasMultipleImages={hasMultipleImages}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
