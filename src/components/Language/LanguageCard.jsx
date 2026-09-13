import { useState } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
} from "motion/react";

export default function LanguageCard({
  language,
  index,
}) {
  const Icon = language.icon;

  const [progressKey, setProgressKey] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  // Nilai animasi percentage
  const percentageValue = useMotionValue(0);

  // Bulatkan hasilnya menjadi integer
  const roundedPercentage = useTransform(
    percentageValue,
    (latest) => Math.round(latest)
  );

  // Jalankan ulang progress + count up
  const restartAnimation = (withDelay = false) => {
    // Restart progress bar
    setProgressKey((prev) => prev + 1);

    // Restart angka dari 0
    percentageValue.set(0);

    animate(
      percentageValue,
      language.percentage,
      {
        duration: 1,
        delay: withDelay ? index * 0.2 : 0,
        ease: "easeOut",
      }
    );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}

      /* Pertama kali masuk viewport */
      onViewportEnter={() => {
        if (!hasEntered) {
          setHasEntered(true);
          restartAnimation(true);
        }
      }}

      /* Ulangi ketika hover */
      onHoverStart={() => {
        if (hasEntered) {
          restartAnimation(false);
        }
      }}

      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
        group
        relative
        w-full
        sm:w-[350px]
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white/70
        p-6
        sm:p-8
        shadow-lg
        backdrop-blur-xl
        transition-all
        duration-300

        hover:border-blue-400/50
        hover:shadow-2xl
        hover:shadow-blue-500/20

        dark:border-slate-800
        dark:bg-slate-900/60
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-blue-500/5
          via-transparent
          to-cyan-500/10
        "
      />

      {/* =========================
          ICON + LANGUAGE + LEVEL
      ========================== */}
      <div
        className="
          relative
          flex
          items-center
          gap-4
          sm:block
        "
      >
        {/* Icon */}
        <div
          className={`
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-r
            ${language.color}
            text-white
            shadow-lg

            sm:h-16
            sm:w-16
          `}
        >
          <Icon
            size={30}
            className="sm:w-8 sm:h-8"
          />
        </div>

        {/* Language + Level */}
        <div className="min-w-0 sm:mt-6">
          <h3
            className="
              text-xl
              font-black
              text-slate-900
              dark:text-white
              sm:text-2xl
            "
          >
            {language.language}
          </h3>

          <div
            className="
              mt-2
              inline-flex
              rounded-xl
              bg-blue-100
              px-3
              py-1.5
              text-sm
              font-bold
              text-blue-700

              sm:mt-3
              sm:px-4
              sm:py-2

              dark:bg-blue-500/20
              dark:text-cyan-300
            "
          >
            {language.level}
          </div>
        </div>
      </div>

      {/* =========================
          PROGRESS
      ========================== */}
      <div className="relative mt-7">
        <div
          className="
            mb-2
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            Proficiency
          </span>

          {/* Animated Percentage */}
          <span
            className="
              flex
              items-center
              text-sm
              font-bold
              text-slate-700
              dark:text-slate-200
            "
          >
            <motion.span>
              {roundedPercentage}
            </motion.span>

            <span>%</span>
          </span>
        </div>

        {/* Progress Background */}
        <div
          className="
            h-3
            overflow-hidden
            rounded-full
            bg-slate-200
            dark:bg-slate-800
          "
        >
          {/* Animated Progress */}
          <motion.div
            key={progressKey}
            initial={{
              width: 0,
            }}
            animate={{
              width: `${language.percentage}%`,
            }}
            transition={{
              duration: 1,

              // Delay hanya pada animasi pertama
              delay:
                progressKey === 1
                  ? index * 0.2
                  : 0,

              ease: "easeOut",
            }}
            className={`
              h-full
              rounded-full
              bg-gradient-to-r
              ${language.color}
            `}
          />
        </div>
      </div>

      {/* Description */}
      <p
        className="
          relative
          mt-5
          text-sm
          text-slate-500
          dark:text-slate-400
        "
      >
        {language.description}
      </p>
    </motion.div>
  );
}