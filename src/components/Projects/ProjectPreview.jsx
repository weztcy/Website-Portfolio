import {
  useEffect,
  useState,
} from "react";

import {
  motion,
} from "motion/react";

import {
  Maximize2,
} from "lucide-react";


export default function ProjectPreview({
  project,
  isHovered,
}) {
  const [imageError, setImageError] =
    useState(false);


  const previewImage =
    project?.images?.[0];


  const hasPreviewImage =
    Boolean(previewImage) &&
    !imageError;


  /*
  |--------------------------------------------------------------------------
  | RESET IMAGE ERROR
  |--------------------------------------------------------------------------
  |
  | Ketika project berubah, status error gambar
  | dikembalikan ke kondisi awal.
  |
  */

  useEffect(() => {
    setImageError(false);
  }, [previewImage]);


  return (
    <motion.div
      animate={{
        scale: isHovered ? 1.03 : 1,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="
        group

        relative

        aspect-[16/10]

        overflow-hidden

        rounded-2xl

        bg-slate-100

        shadow-lg

        dark:bg-slate-800
      "
    >
      {/* =========================================================
          PROJECT IMAGE
      ========================================================== */}

      {hasPreviewImage ? (
        <img
          src={previewImage}
          alt={project.title}
          loading="lazy"
          draggable="false"
          onError={() =>
            setImageError(true)
          }
          className="
            h-full
            w-full

            select-none

            object-cover

            transition-transform
            duration-500
            ease-out

            group-hover:scale-105
          "
        />
      ) : (
        /* =====================================================
            IMAGE FALLBACK
        ====================================================== */

        <div
          className="
            flex

            h-full
            w-full

            flex-col

            items-center
            justify-center

            gap-3

            bg-gradient-to-br
            from-slate-100
            to-slate-200

            px-5

            text-center

            text-slate-400

            dark:from-slate-800
            dark:to-slate-900
            dark:text-slate-500
          "
        >
          <div>
            <p
              className="
                text-sm

                font-semibold

                text-slate-500

                dark:text-slate-400
              "
            >
              Project Preview
            </p>

            <p
              className="
                mt-1

                text-xs

                text-slate-400

                dark:text-slate-500
              "
            >
              Image unavailable
            </p>
          </div>
        </div>
      )}


      {/* =========================================================
          IMAGE GRADIENT
      ========================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-gradient-to-t

          from-slate-950/20
          via-transparent
          to-transparent
        "
      />


      {/* =========================================================
          HOVER OVERLAY
      ========================================================== */}

      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          pointer-events-none

          absolute
          inset-0

          z-10

          flex

          items-center
          justify-center

          bg-slate-950/60

          backdrop-blur-[2px]
        "
      >
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 18,
            scale: isHovered ? 1 : 0.9,
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 22,
          }}
          className="
            flex

            flex-col

            items-center

            gap-3

            text-white
          "
        >
          {/* View Details Icon */}

          <div
            className="
              flex

              h-14
              w-14

              items-center
              justify-center

              rounded-full

              border
              border-white/20

              bg-white/15

              shadow-xl

              backdrop-blur-md

              transition-transform
              duration-300

              group-hover:scale-105
            "
          >
            <Maximize2
              size={25}
            />
          </div>


          {/* View Details Text */}

          <span
            className="
              text-sm

              font-semibold

              tracking-wide
            "
          >
            View Details
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}