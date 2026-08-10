import { motion } from "motion/react";
import {
  Download,
  Mail,
  MessageCircle,
} from "lucide-react";

const MotionButton = motion.a;

export default function HeroButtons() {
  const whatsappLink =
    "https://wa.me/6281337272669?text=Halo%20Yohanes%20Dimas%20Pratama,%20saya%20baru%20melihat%20website%20portfolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.6,
      }}
      className="
        mt-10
        flex
        flex-col
        gap-4

        lg:flex-row
        lg:items-center
      "
    >
      {/* Hire Me */}

      <MotionButton
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.05,
          y: -4,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="
          group
          flex
          h-14
          items-center
          justify-center
          gap-2
          whitespace-nowrap

          rounded-xl
          bg-blue-600
          px-6

          font-semibold
          text-white

          shadow-lg
          transition-all
          duration-300

          hover:bg-blue-700
          hover:shadow-blue-500/40
        "
      >
        <MessageCircle
          size={20}
          className="transition-transform duration-300 group-hover:rotate-12"
        />

        Hire Me Now
      </MotionButton>

      {/* Contact */}

      <MotionButton
        href="#contact"
        whileHover={{
          scale: 1.05,
          y: -4,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="
          group
          flex
          h-14
          items-center
          justify-center
          gap-2
          whitespace-nowrap

          rounded-xl
          border
          border-blue-500

          px-6

          font-semibold
          text-blue-500

          transition-all
          duration-300

          hover:bg-blue-500
          hover:text-white
        "
      >
        <Mail
          size={20}
          className="transition-transform duration-300 group-hover:-rotate-12"
        />

        Get In Touch
      </MotionButton>

      {/* Download */}

      <MotionButton
        href="/cv.pdf"
        download
        whileHover={{
          scale: 1.05,
          y: -4,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="
          group
          flex
          h-14
          items-center
          justify-center
          gap-2
          whitespace-nowrap

          rounded-xl
          bg-slate-900

          px-6

          font-semibold
          text-white

          transition-all
          duration-300

          hover:bg-slate-800

          dark:bg-white
          dark:text-slate-900
        "
      >
        <Download
          size={20}
          className="transition-transform duration-300 group-hover:translate-y-1"
        />

        Download CV
      </MotionButton>
    </motion.div>
  );
}