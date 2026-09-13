import { useEffect, useState } from "react";

const GRID_SIZE = 64;

/* =========================================================
   RANDOM GRID POSITION
========================================================= */

function getRandomGridPosition(size) {
  if (typeof window === "undefined") {
    return {
      x: 0,
      y: 0,
    };
  }

  const maxX = Math.max(0, window.innerWidth - size);
  const maxY = Math.max(0, window.innerHeight - size);

  const columns = Math.max(
    0,
    Math.floor(maxX / GRID_SIZE)
  );

  const rows = Math.max(
    0,
    Math.floor(maxY / GRID_SIZE)
  );

  return {
    x:
      Math.floor(Math.random() * (columns + 1)) *
      GRID_SIZE,

    y:
      Math.floor(Math.random() * (rows + 1)) *
      GRID_SIZE,
  };
}


/* =========================================================
   FLOATING RANDOM SQUARE
========================================================= */

function FloatingSquare({
  size = 64,
  delay = 0,
  interval = 5000,
  className = "",
}) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let startTimer;
    let fadeTimer;
    let revealTimer;
    let intervalTimer;

    /* =====================================
       REDUCED MOTION
    ===================================== */

    if (reducedMotion) {
      setPosition(getRandomGridPosition(size));
      setVisible(true);

      return;
    }

    /* =====================================
       MOVE TO RANDOM GRID
    ===================================== */

    const relocate = () => {
      /*
       * Fade out terlebih dahulu.
       * Kotak berpindah saat invisible.
       */

      setVisible(false);

      clearTimeout(fadeTimer);
      clearTimeout(revealTimer);

      fadeTimer = window.setTimeout(() => {
        setPosition(
          getRandomGridPosition(size)
        );

        /*
         * Sedikit delay supaya browser
         * menerapkan posisi baru dahulu.
         */

        revealTimer = window.setTimeout(() => {
          setVisible(true);
        }, 80);

      }, 450);
    };

    /* =====================================
       INITIAL APPEAR
    ===================================== */

    startTimer = window.setTimeout(() => {
      setPosition(
        getRandomGridPosition(size)
      );

      revealTimer = window.setTimeout(() => {
        setVisible(true);
      }, 80);

      intervalTimer = window.setInterval(
        relocate,
        interval
      );

    }, delay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(fadeTimer);
      clearTimeout(revealTimer);

      clearInterval(intervalTimer);
    };

  }, [delay, interval, size]);

  return (
    <div
      style={{
        width: size,
        height: size,

        transform: `translate3d(
          ${position.x}px,
          ${position.y}px,
          0
        )`,

        opacity: visible ? 1 : 0,
      }}
      className={`
        absolute
        left-0
        top-0

        rounded-[3px]

        border

        transition-opacity
        duration-500
        ease-out

        transform-gpu

        [will-change:transform,opacity]

        ${className}
      `}
    />
  );
}


/* =========================================================
   BACKGROUND EFFECTS
========================================================= */

export default function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none

        fixed
        inset-0
        z-0

        overflow-hidden
      "
    >
      {/* =====================================================
          BASE BACKGROUND
      ===================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-slate-50

          dark:bg-[#05070d]
        "
      />


      {/* =====================================================
          PREMIUM GRID
      ===================================================== */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.5]

          bg-[linear-gradient(to_right,rgba(100,116,139,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.10)_1px,transparent_1px)]

          [background-size:64px_64px]

          [mask-image:radial-gradient(ellipse_90%_85%_at_50%_45%,black_15%,rgba(0,0,0,0.8)_60%,transparent_100%)]

          [-webkit-mask-image:radial-gradient(ellipse_90%_85%_at_50%_45%,black_15%,rgba(0,0,0,0.8)_60%,transparent_100%)]

          dark:opacity-[0.3]
        "
      />


      {/* =====================================================
          LARGE GRID
      ===================================================== */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.35]

          bg-[linear-gradient(to_right,rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.08)_1px,transparent_1px)]

          [background-size:256px_256px]

          [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_85%)]

          [-webkit-mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_85%)]

          dark:opacity-[0.2]
        "
      />


      {/* =====================================================
          GRID DOTS
      ===================================================== */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.3]

          bg-[radial-gradient(circle,rgba(59,130,246,0.16)_1px,transparent_1.5px)]

          [background-size:64px_64px]

          [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]

          [-webkit-mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]

          dark:opacity-[0.35]
        "
      />


      {/* =====================================================
          RANDOM SQUARES

          Setiap kotak:
          - muncul
          - fade out
          - berpindah ke grid random
          - fade in kembali
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          z-[1]
        "
      >
        {/* Blue Square */}

        <FloatingSquare
          size={64}
          delay={200}
          interval={4200}
          className="
            border-blue-500/15
            bg-blue-500/[0.035]

            dark:border-blue-400/15
            dark:bg-blue-400/[0.035]
          "
        />


        {/* Cyan Square */}

        <FloatingSquare
          size={64}
          delay={1100}
          interval={5600}
          className="
            border-cyan-500/15
            bg-cyan-500/[0.03]

            dark:border-cyan-400/15
            dark:bg-cyan-400/[0.03]
          "
        />


        {/* Violet Square */}

        <FloatingSquare
          size={64}
          delay={2100}
          interval={4800}
          className="
            border-violet-500/15
            bg-violet-500/[0.03]

            dark:border-violet-400/15
            dark:bg-violet-400/[0.03]
          "
        />


        {/* Large Blue Square */}

        <FloatingSquare
          size={128}
          delay={800}
          interval={7200}
          className="
            border-blue-500/10
            bg-blue-500/[0.018]

            dark:border-blue-400/10
            dark:bg-blue-400/[0.02]
          "
        />


        {/* Large Cyan Square */}

        <FloatingSquare
          size={128}
          delay={3100}
          interval={8300}
          className="
            border-cyan-500/10
            bg-cyan-500/[0.018]

            dark:border-cyan-400/10
            dark:bg-cyan-400/[0.02]
          "
        />


        {/* Small Blue */}

        <FloatingSquare
          size={32}
          delay={1700}
          interval={3900}
          className="
            border-blue-500/20
            bg-blue-500/[0.05]

            dark:border-blue-400/20
            dark:bg-blue-400/[0.05]
          "
        />


        {/* Small Violet */}

        <FloatingSquare
          size={32}
          delay={3700}
          interval={5100}
          className="
            border-violet-500/20
            bg-violet-500/[0.045]

            dark:border-violet-400/20
            dark:bg-violet-400/[0.045]
          "
        />
      </div>


      {/* =====================================================
          TOP AMBIENT GLOW
      ===================================================== */}

      <div
        className="
          absolute

          -top-[20rem]
          left-1/2

          h-[42rem]
          w-[65rem]

          max-w-[120vw]

          -translate-x-1/2

          rounded-full

          bg-blue-500/15

          blur-[130px]

          dark:bg-blue-600/20
        "
      />


      {/* =====================================================
          LEFT BLUE GLOW
      ===================================================== */}

      <div
        className="
          absolute

          -left-48
          top-[10%]

          animate-[ambient-left_14s_ease-in-out_infinite]

          transform-gpu

          [will-change:transform]

          motion-reduce:animate-none
        "
      >
        <div
          className="
            h-[320px]
            w-[320px]

            rounded-full

            bg-blue-500/20

            blur-[100px]

            md:h-[420px]
            md:w-[420px]
            md:blur-[120px]

            dark:bg-blue-500/20
          "
        />
      </div>


      {/* =====================================================
          RIGHT CYAN GLOW
      ===================================================== */}

      <div
        className="
          absolute

          -right-52
          top-[40%]

          animate-[ambient-right_18s_ease-in-out_infinite]

          transform-gpu

          [will-change:transform]

          motion-reduce:animate-none
        "
      >
        <div
          className="
            h-[340px]
            w-[340px]

            rounded-full

            bg-cyan-400/15

            blur-[110px]

            md:h-[440px]
            md:w-[440px]
            md:blur-[130px]

            dark:bg-cyan-500/15
          "
        />
      </div>


      {/* =====================================================
          CENTER VIOLET GLOW
      ===================================================== */}

      <div
        className="
          absolute

          left-1/2
          top-[35%]

          animate-[ambient-center_20s_ease-in-out_infinite]

          transform-gpu

          [will-change:transform]

          motion-reduce:animate-none
        "
      >
        <div
          className="
            h-[260px]
            w-[260px]

            -translate-x-1/2

            rounded-full

            bg-violet-500/10

            blur-[95px]

            md:h-[340px]
            md:w-[340px]
            md:blur-[115px]

            dark:bg-violet-500/12
          "
        />
      </div>


      {/* =====================================================
          BOTTOM GLOW
      ===================================================== */}

      <div
        className="
          absolute

          -bottom-64
          left-[15%]

          h-[34rem]
          w-[34rem]

          rounded-full

          bg-blue-400/10

          blur-[140px]

          dark:bg-blue-600/12
        "
      />


      {/* =====================================================
          GLOBAL LIGHT
      ===================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(59,130,246,0.10),transparent_70%)]

          dark:bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(59,130,246,0.14),transparent_70%)]
        "
      />


      {/* =====================================================
          VIGNETTE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(248,250,252,0.4)_100%)]

          dark:bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,7,13,0.5)_100%)]
        "
      />
    </div>
  );
}