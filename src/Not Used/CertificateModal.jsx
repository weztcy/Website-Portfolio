import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  useEffect,
  useState,
} from "react";

import {
  X,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Building2,
  CheckCircle2,
  ImageIcon,
} from "lucide-react";

export default function CertificateModal({
  certificate,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  /*
  |--------------------------------------------------------------------------
  | CERTIFICATE IMAGES
  |--------------------------------------------------------------------------
  */

  const images =
    certificate?.images || [];

  const totalImages =
    images.length;

  const hasMultipleImages =
    totalImages > 1;

  /*
  |--------------------------------------------------------------------------
  | RESET SLIDER
  |--------------------------------------------------------------------------
  |
  | Ketika membuka sertifikat yang berbeda,
  | slider selalu kembali ke gambar pertama.
  |
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
  | KEYBOARD CONTROL
  |--------------------------------------------------------------------------
  |
  | Escape      → close modal
  | ArrowLeft   → previous image
  | ArrowRight  → next image
  |
  */

  useEffect(() => {
    if (!certificate) return;

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
    certificate,
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
    if (!certificate) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [certificate]);

  return (
    <AnimatePresence>
      {certificate && (
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
              aria-label="Close certificate modal"
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
              {/* =================================================
                  LEFT / TOP
                  CERTIFICATE IMAGE
              ================================================== */}

              <div
                className="
                  relative

                  flex

                  min-h-[280px]

                  items-center
                  justify-center

                  overflow-hidden

                  bg-slate-100

                  dark:bg-slate-950

                  sm:min-h-[400px]

                  md:min-h-[500px]

                  lg:h-[85vh]
                  lg:max-h-[780px]
                  lg:min-h-[600px]
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
                  <AnimatePresence
                    mode="wait"
                  >
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
                        src={
                          images[
                            currentIndex
                          ]
                        }
                        alt={`${certificate.title} - Page ${
                          currentIndex + 1
                        }`}
                        className="
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
                      Certificate image
                      unavailable.
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
                      onClick={
                        handlePrevious
                      }
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
                      <ChevronLeft
                        size={24}
                      />
                    </button>

                    {/* Next */}

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
                      <ChevronRight
                        size={24}
                      />
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
                          (
                            _image,
                            index
                          ) => (
                            <button
                              key={
                                index
                              }
                              type="button"
                              onClick={() =>
                                setCurrentIndex(
                                  index
                                )
                              }
                              aria-label={`Go to page ${
                                index +
                                1
                              }`}
                              className={`
                                h-2
                                rounded-full

                                transition-all
                                duration-300

                                ${
                                  currentIndex ===
                                  index
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
                        {currentIndex +
                          1}
                        /{totalImages}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* =================================================
                  RIGHT / BOTTOM
                  CERTIFICATE DETAILS
              ================================================== */}

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
                    Certification Detail
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

                      sm:text-xl

                      lg:pr-0
                    "
                  >
                    {certificate.title}
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
                    {/* Organization */}

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

                          bg-blue-50

                          text-blue-600

                          dark:bg-blue-500/10
                          dark:text-blue-400
                        "
                      >
                        <Building2
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
                          Organization
                        </p>

                        <p
                          className="
                            mt-1

                            font-semibold

                            text-slate-700

                            dark:text-slate-200
                          "
                        >
                          {
                            certificate.organization
                          }
                        </p>
                      </div>
                    </div>

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
                          Issued
                        </p>

                        <p
                          className="
                            mt-1

                            font-semibold

                            text-slate-700

                            dark:text-slate-200
                          "
                        >
                          {
                            certificate.date
                          }
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

                  {/* ---------------------------------------------
                      DETAIL LABEL
                  ---------------------------------------------- */}

                  {certificate.detailLabel && (
                    <h3
                      className="
                        text-lg

                        font-bold

                        text-slate-900

                        dark:text-white
                      "
                    >
                      {
                        certificate.detailLabel
                      }
                    </h3>
                  )}

                  {/* ---------------------------------------------
                      DETAILS
                  ---------------------------------------------- */}

                  {certificate.details
                    ?.length > 0 && (
                    <ul
                      className="
                        mt-5

                        space-y-3
                      "
                    >
                      {certificate.details.map(
                        (
                          detail,
                          index
                        ) => (
                          <motion.li
                            key={`${detail}-${index}`}
                            initial={{
                              opacity: 0,
                              x: 10,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              duration:
                                0.3,
                              delay:
                                index *
                                0.05,
                            }}
                            className="
                              flex

                              items-start

                              gap-3

                              rounded-xl

                              border
                              border-slate-200

                              bg-slate-50

                              p-3.5

                              text-sm

                              leading-6

                              text-slate-600

                              dark:border-slate-800
                              dark:bg-slate-800/50
                              dark:text-slate-300
                            "
                          >
                            <CheckCircle2
                              size={18}
                              className="
                                mt-0.5
                                shrink-0

                                text-blue-500
                              "
                            />

                            <span>
                              {detail}
                            </span>
                          </motion.li>
                        )
                      )}
                    </ul>
                  )}
                </div>

                {/* =================================================
                    MOBILE PAGE INFORMATION
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
                    Use the arrows or
                    swipe through the
                    certificate pages.
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}