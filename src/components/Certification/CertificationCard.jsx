import { useState } from "react";
import { motion } from "motion/react";

import {
  CalendarDays,
} from "lucide-react";

import CertificatePreview from "./CertificatePreview";


export default function CertificationCard({
  certificate,
  index,
  onOpen,
}) {

  const [isHovered, setIsHovered] =
    useState(false);


  /*
  |--------------------------------------------------------------------------
  | OPEN CERTIFICATE
  |--------------------------------------------------------------------------
  */

  const handleOpen = () => {

    if (!certificate) return;

    onOpen(certificate);

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

      aria-label={`View certificate: ${certificate.title}`}

      className="
        group

        relative

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
          CERTIFICATE PREVIEW
      ========================================================== */}

      <CertificatePreview

        certificate={certificate}

        isHovered={isHovered}

        onOpen={onOpen}

      />


      {/* =========================================================
          BOTTOM CONTENT
      ========================================================== */}

      <div

        className="
          mt-6
        "

      >


        {/* =======================================================
            ORGANIZATION
        ======================================================== */}

        <span

          className="
            inline-flex

            max-w-full

            items-center

            rounded-full

            bg-gradient-to-r

            from-blue-500

            to-cyan-500

            px-4

            py-1.5

            text-xs

            font-semibold

            text-white

            shadow-md
          "

        >

          <span
            className="
              truncate
            "
          >

            {certificate.organization}

          </span>

        </span>


        {/* =======================================================
            TITLE
        ======================================================== */}

        <h3

          className="
            mt-4

            line-clamp-2

            text-lg

            font-bold

            text-slate-900

            transition-all

            duration-300

            group-hover:text-blue-600

            dark:text-white

            dark:group-hover:text-cyan-400
          "

        >

          {certificate.title}

        </h3>


        {/* =======================================================
            DATE
        ======================================================== */}

        <div

          className="
            mt-5

            flex

            items-center

            justify-end

            gap-2

            text-sm

            text-slate-500

            dark:text-slate-400
          "

        >

          <CalendarDays
            size={17}
            className="
              shrink-0
            "
          />

          <span
            className="
              whitespace-nowrap
            "
          >

            {certificate.date}

          </span>

        </div>


      </div>


      {/* =========================================================
          DECORATIVE HOVER GLOW
      ========================================================== */}

      <div

        className="
          pointer-events-none

          absolute

          -bottom-20

          -right-20

          h-40

          w-40

          rounded-full

          bg-blue-500/10

          opacity-0

          blur-3xl

          transition-opacity

          duration-500

          group-hover:opacity-100
        "

      />


    </motion.div>

  );

}