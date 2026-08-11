import {
  AnimatePresence,
  motion,
} from "motion/react";
import { useEffect } from "react";
import { X } from "lucide-react";

import CertificateImageViewer from "./CertificateImageViewer";
import CertificateDetails from "./CertificateDetails";

export default function CertificateModal({
  certificate,
  onClose,
}) {
  /*
  |--------------------------------------------------------------------------
  | ESCAPE TO CLOSE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
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
  }, [certificate, onClose]);

  /*
  |--------------------------------------------------------------------------
  | LOCK BODY SCROLL
  |--------------------------------------------------------------------------
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
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

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)]
              "
            >
              <CertificateImageViewer
                certificate={certificate}
              />

              <CertificateDetails
                certificate={certificate}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
