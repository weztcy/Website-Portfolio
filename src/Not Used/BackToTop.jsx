import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(32);

  useEffect(() => {
    const handleScroll = () => {
      // =========================
      // Show / Hide Button
      // =========================
      setVisible(window.scrollY > 500);

      // =========================
      // Detect Footer
      // =========================
      const footer = document.querySelector("footer");

      if (!footer) {
        setBottomOffset(32);
        return;
      }

      const footerRect = footer.getBoundingClientRect();

      // Jarak default tombol dari bawah
      const defaultBottom = 32;

      // Jarak tombol dengan bagian atas footer
      const footerGap = -7;

      // Jika footer mulai masuk viewport
      if (footerRect.top < window.innerHeight) {
        const overlap =
          window.innerHeight - footerRect.top;

        setBottomOffset(
          defaultBottom + overlap + footerGap
        );
      } else {
        setBottomOffset(defaultBottom);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 40,
            scale: 0.8,
          }}
          whileHover={{
            y: -6,
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            bottom: `${bottomOffset}px`,
          }}
          className="
            fixed

            right-8

            z-50

            flex

            h-12
            w-12

            items-center
            justify-center

            rounded-full

            bg-gradient-to-r
            from-blue-600
            to-cyan-500

            text-white

            shadow-xl
            shadow-blue-500/30

            transition-shadow
            duration-300

            hover:shadow-blue-500/60

            dark:from-blue-500
            dark:to-cyan-400
          "
        >
          <ArrowUp
            size={22}
            strokeWidth={2.5}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}