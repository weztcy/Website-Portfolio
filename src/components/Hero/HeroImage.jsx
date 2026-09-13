import profile from "../../assets/hero/profile.png";

/* =========================================================
   HERO IMAGE
========================================================= */

export default function HeroImage() {
  return (
    <>
      {/* =====================================================
          COMPONENT ANIMATIONS
          Semua nama class/keyframe diprefix "hero-image-"
          agar tidak bentrok dengan CSS komponen lain.
      ===================================================== */}
      <style>{`
        /* ===================================================
           ROOT ENTRANCE
        =================================================== */

        @keyframes hero-image-root-enter {
          from {
            opacity: 0;
            transform: translate3d(80px, 0, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .hero-image-root {
          animation:
            hero-image-root-enter
            0.9s
            cubic-bezier(0.16, 1, 0.3, 1)
            both;
        }


        /* ===================================================
           GENERIC ENTRANCE
        =================================================== */

        @keyframes hero-image-fade-in {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes hero-image-scale-065-in {
          from {
            transform: scale(0.65);
          }

          to {
            transform: scale(1);
          }
        }

        @keyframes hero-image-scale-070-in {
          from {
            transform: scale(0.7);
          }

          to {
            transform: scale(1);
          }
        }


        /* ===================================================
           MAIN GLOW
        =================================================== */

        @keyframes hero-image-glow-enter {
          from {
            opacity: 0;
            transform: scale(0.65);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes hero-image-glow-pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.95);
          }

          50% {
            opacity: 0.58;
            transform: scale(1.12);
          }
        }

        .hero-image-glow-enter {
          animation:
            hero-image-glow-enter
            0.9s
            cubic-bezier(0.16, 1, 0.3, 1)
            both;
        }

        .hero-image-glow-pulse {
          animation:
            hero-image-glow-pulse
            5s
            ease-in-out
            infinite;

          will-change: transform, opacity;
          backface-visibility: hidden;
        }


        /* ===================================================
           OUTER ORBIT
        =================================================== */

        .hero-image-outer-orbit-enter {
          animation:
            hero-image-fade-in
            1s
            ease-out
            0.2s
            both,

            hero-image-scale-065-in
            1.2s
            cubic-bezier(0.16, 1, 0.3, 1)
            0.2s
            both;
        }

        @keyframes hero-image-outer-orbit-spin {
          from {
            transform: rotate(-80deg);
          }

          to {
            /*
             * -80 -> 280 = tepat 360deg.
             * Secara visual sama, tetapi tidak ada snap
             * saat loop kembali ke awal.
             */
            transform: rotate(280deg);
          }
        }

        .hero-image-outer-orbit-spin {
          animation:
            hero-image-outer-orbit-spin
            22s
            linear
            infinite;

          will-change: transform;
          backface-visibility: hidden;
        }


        /* ===================================================
           SECOND ORBIT
        =================================================== */

        .hero-image-second-orbit-enter {
          animation:
            hero-image-fade-in
            1s
            ease-out
            0.35s
            both,

            hero-image-scale-070-in
            1.3s
            cubic-bezier(0.16, 1, 0.3, 1)
            0.35s
            both;
        }

        @keyframes hero-image-second-orbit-spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(-360deg);
          }
        }

        .hero-image-second-orbit-spin {
          animation:
            hero-image-second-orbit-spin
            30s
            linear
            infinite;

          will-change: transform;
          backface-visibility: hidden;
        }


        /* ===================================================
           TECH ORBIT
        =================================================== */

        .hero-image-tech-orbit-enter {
          animation:
            hero-image-fade-in
            1s
            ease-out
            0.45s
            both,

            hero-image-scale-070-in
            1.3s
            cubic-bezier(0.16, 1, 0.3, 1)
            0.45s
            both;
        }

        @keyframes hero-image-tech-pulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.025);
          }
        }

        .hero-image-tech-pulse {
          animation:
            hero-image-tech-pulse
            5s
            ease-in-out
            infinite;

          will-change: transform;
          backface-visibility: hidden;
        }

        @keyframes hero-image-tech-spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .hero-image-tech-spin {
          animation:
            hero-image-tech-spin
            16s
            linear
            infinite;

          will-change: transform;
          backface-visibility: hidden;
        }


        /* ===================================================
           FLOATING GEOMETRY — LEFT TOP
        =================================================== */

        @keyframes hero-image-geometry-left-top-enter {
          from {
            opacity: 0;

            /*
             * Child dimulai dari rotate(45deg).
             * -135 + 45 = -90deg, sama dengan initial Motion.
             */
            transform:
              scale(0)
              rotate(-135deg);
          }

          to {
            opacity: 1;
            transform:
              scale(1)
              rotate(0deg);
          }
        }

        .hero-image-geometry-left-top-enter {
          animation:
            hero-image-geometry-left-top-enter
            0.7s
            ease-out
            0.75s
            both;
        }

        @keyframes hero-image-geometry-left-top-float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(5px, -10px, 0);
          }
        }

        .hero-image-geometry-left-top-float {
          animation:
            hero-image-geometry-left-top-float
            5s
            ease-in-out
            infinite;

          will-change: transform;
          backface-visibility: hidden;
        }

        @keyframes hero-image-geometry-left-top-rotate {
          0%,
          100% {
            transform: rotate(45deg);
          }

          50% {
            transform: rotate(90deg);
          }
        }

        .hero-image-geometry-left-top-rotate {
          animation:
            hero-image-geometry-left-top-rotate
            7s
            ease-in-out
            infinite;

          will-change: transform;
          backface-visibility: hidden;
        }


        /* ===================================================
           FLOATING GEOMETRY — RIGHT
        =================================================== */

        @keyframes hero-image-geometry-right-enter {
          from {
            opacity: 0;
            transform: scale(0);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .hero-image-geometry-right-enter {
          animation:
            hero-image-geometry-right-enter
            0.7s
            ease-out
            0.9s
            both;
        }

        @keyframes hero-image-geometry-right-float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, 12px, 0);
          }
        }

        .hero-image-geometry-right-float {
          animation:
            hero-image-geometry-right-float
            7s
            ease-in-out
            infinite;

          will-change: transform;
          backface-visibility: hidden;
        }

        @keyframes hero-image-geometry-right-rotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .hero-image-geometry-right-rotate {
          animation:
            hero-image-geometry-right-rotate
            10s
            linear
            infinite;

          will-change: transform;
          backface-visibility: hidden;
        }


        /* ===================================================
           FLOATING GEOMETRY — LEFT BOTTOM
        =================================================== */

        @keyframes hero-image-geometry-left-bottom-enter {
          from {
            opacity: 0;
            transform: scale(0);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .hero-image-geometry-left-bottom-enter {
          animation:
            hero-image-geometry-left-bottom-enter
            0.7s
            ease-out
            1s
            both;
        }

        @keyframes hero-image-geometry-left-bottom-float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, 10px, 0);
          }
        }

        .hero-image-geometry-left-bottom-float {
          animation:
            hero-image-geometry-left-bottom-float
            6s
            ease-in-out
            infinite;

          will-change: transform;
          backface-visibility: hidden;
        }

        @keyframes hero-image-geometry-left-bottom-rotate {
          0%,
          100% {
            transform: rotate(45deg);
          }

          50% {
            transform: rotate(-45deg);
          }
        }

        .hero-image-geometry-left-bottom-rotate {
          animation:
            hero-image-geometry-left-bottom-rotate
            8s
            ease-in-out
            infinite;

          will-change: transform;
          backface-visibility: hidden;
        }


        /* ===================================================
           PHOTO CONTAINER ENTRANCE
        =================================================== */

        @keyframes hero-image-photo-entrance {
          from {
            opacity: 0;
            transform: translate3d(0, 35px, 0);
            filter: blur(12px);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0);
          }
        }

        .hero-image-photo-entrance {
          /*
           * filter hanya digunakan sekali saat entrance.
           * Tidak ada filter animation yang berjalan terus.
           */
          animation:
            hero-image-photo-entrance
            0.9s
            cubic-bezier(0.16, 1, 0.3, 1)
            0.15s
            both;
        }

        @keyframes hero-image-photo-scale-enter {
          from {
            transform: scale(0.72);
          }

          to {
            transform: scale(1);
          }
        }

        .hero-image-photo-scale-enter {
          animation:
            hero-image-photo-scale-enter
            1s
            cubic-bezier(0.16, 1, 0.3, 1)
            0.15s
            both;
        }

        @keyframes hero-image-photo-float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -8px, 0);
          }
        }

        .hero-image-photo-float {
          animation:
            hero-image-photo-float
            4.5s
            ease-in-out
            infinite;

          will-change: transform;
          backface-visibility: hidden;
        }


        /* ===================================================
           PHOTO HOVER
        =================================================== */

        .hero-image-photo-hover {
          transform: scale(1);

          transition:
            transform
            300ms
            cubic-bezier(0.16, 1, 0.3, 1);

          transform-origin: center;
        }

        @media (hover: hover) {
          .hero-image-photo-hover:hover {
            transform: scale(1.03);
          }
        }


        /* ===================================================
           PHOTO IMAGE ENTRANCE
        =================================================== */

        @keyframes hero-image-photo-image-enter {
          from {
            opacity: 0;
            transform: scale(1.08);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .hero-image-photo-image-enter {
          animation:
            hero-image-photo-image-enter
            1.1s
            cubic-bezier(0.16, 1, 0.3, 1)
            0.35s
            both;
        }


        /* ===================================================
           AVAILABLE BADGE
        =================================================== */

        @keyframes hero-image-badge-enter {
          from {
            opacity: 0;

            transform:
              translate3d(20px, 0, 0)
              scale(0.7);
          }

          to {
            opacity: 1;

            transform:
              translate3d(0, 0, 0)
              scale(1);
          }
        }

        .hero-image-badge-enter {
          animation:
            hero-image-badge-enter
            0.6s
            cubic-bezier(0.16, 1, 0.3, 1)
            1s
            both;
        }

        @keyframes hero-image-badge-float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -5px, 0);
          }
        }

        .hero-image-badge-float {
          animation:
            hero-image-badge-float
            2.5s
            ease-in-out
            infinite;

          will-change: transform;
          backface-visibility: hidden;
        }


        /* ===================================================
           EXPERIENCE CARD
        =================================================== */

        @keyframes hero-image-experience-enter {
          from {
            opacity: 0;

            transform:
              translate3d(-25px, 15px, 0)
              scale(0.8);
          }

          to {
            opacity: 1;

            transform:
              translate3d(0, 0, 0)
              scale(1);
          }
        }

        .hero-image-experience-enter {
          animation:
            hero-image-experience-enter
            0.65s
            cubic-bezier(0.16, 1, 0.3, 1)
            1.1s
            both;
        }

        @keyframes hero-image-experience-float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(5px, 0, 0);
          }
        }

        .hero-image-experience-float {
          animation:
            hero-image-experience-float
            3.5s
            ease-in-out
            infinite;

          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>

      {/* ===================================================
          ROOT
      =================================================== */}

      <div
        className="
          hero-image-root
          relative
          flex
          items-center
          justify-center
          overflow-visible
        "
      >
        {/* =================================================
            MAIN BACK GLOW
        ================================================= */}

        <div
          className="
            hero-image-glow-enter
            absolute
            z-0
            h-48
            w-48
            md:h-[420px]
            md:w-[420px]
          "
          aria-hidden="true"
        >
          <div
            className="
              hero-image-glow-pulse
              h-full
              w-full
              rounded-full
              bg-blue-500
              blur-[70px]
              md:blur-[95px]
            "
          />
        </div>

        {/* =================================================
            OUTER ORBIT
        ================================================= */}

        <div
          className="
            hero-image-outer-orbit-enter
            absolute
            z-[1]
            h-[220px]
            w-[220px]
            md:h-[470px]
            md:w-[470px]
          "
          aria-hidden="true"
        >
          <div
            className="
              hero-image-outer-orbit-spin
              h-full
              w-full
              rounded-full
              border
              border-dashed
              border-blue-400/40
              md:border-2
            "
          />
        </div>

        {/* =================================================
            SECOND ORBIT
        ================================================= */}

        <div
          className="
            hero-image-second-orbit-enter
            absolute
            z-[1]
            h-[240px]
            w-[240px]
            md:h-[500px]
            md:w-[500px]
          "
          aria-hidden="true"
        >
          <div
            className="
              hero-image-second-orbit-spin
              h-full
              w-full
              rounded-full
              border
              border-cyan-400/20
            "
          />
        </div>

        {/* =================================================
            TECH ORBIT
        ================================================= */}

        <div
          className="
            hero-image-tech-orbit-enter
            absolute
            z-[1]
            h-[185px]
            w-[185px]
            md:h-[385px]
            md:w-[385px]
          "
          aria-hidden="true"
        >
          {/* Pulse wrapper */}
          <div
            className="
              hero-image-tech-pulse
              h-full
              w-full
            "
          >
            {/* Rotation wrapper */}
            <div
              className="
                hero-image-tech-spin
                relative
                h-full
                w-full
                rounded-full
                border
                border-blue-500/20
              "
            >
              {/* Orbit Dot */}
              <div
                className="
                  absolute
                  left-1/2
                  top-[-3px]
                  h-2
                  w-2
                  -translate-x-1/2
                  rounded-full
                  bg-blue-400
                  shadow-[0_0_14px_rgba(59,130,246,0.9)]
                  md:h-3
                  md:w-3
                "
              />
            </div>
          </div>
        </div>

        {/* =================================================
            FLOATING GEOMETRY — LEFT TOP
        ================================================= */}

        <div
          className="
            hero-image-geometry-left-top-enter
            absolute
            left-2
            top-2
            z-[3]
            h-5
            w-5
            md:-left-3
            md:top-10
            md:h-9
            md:w-9
          "
          aria-hidden="true"
        >
          {/* X / Y floating */}
          <div
            className="
              hero-image-geometry-left-top-float
              h-full
              w-full
            "
          >
            {/* Rotation */}
            <div
              className="
                hero-image-geometry-left-top-rotate
                h-full
                w-full
                border
                border-blue-500/50
                bg-blue-500/10
                backdrop-blur-sm
              "
            />
          </div>
        </div>

        {/* =================================================
            FLOATING GEOMETRY — RIGHT
        ================================================= */}

        <div
          className="
            hero-image-geometry-right-enter
            absolute
            right-1
            top-14
            z-[3]
            h-4
            w-4
            md:-right-6
            md:top-24
            md:h-8
            md:w-8
          "
          aria-hidden="true"
        >
          {/* Vertical floating */}
          <div
            className="
              hero-image-geometry-right-float
              h-full
              w-full
            "
          >
            {/* Rotation */}
            <div
              className="
                hero-image-geometry-right-rotate
                h-full
                w-full
                border
                border-cyan-400/50
                bg-cyan-400/10
              "
            />
          </div>
        </div>

        {/* =================================================
            FLOATING GEOMETRY — LEFT BOTTOM
        ================================================= */}

        <div
          className="
            hero-image-geometry-left-bottom-enter
            absolute
            bottom-10
            left-3
            z-[3]
            h-4
            w-4
            md:bottom-20
            md:-left-8
            md:h-7
            md:w-7
          "
          aria-hidden="true"
        >
          {/* Vertical floating */}
          <div
            className="
              hero-image-geometry-left-bottom-float
              h-full
              w-full
            "
          >
            {/* Rotation */}
            <div
              className="
                hero-image-geometry-left-bottom-rotate
                h-full
                w-full
                border
                border-violet-500/40
                bg-violet-500/10
              "
            />
          </div>
        </div>

        {/* =================================================
            PHOTO CONTAINER
        ================================================= */}

        <div
          className="
            hero-image-photo-entrance
            relative
            z-10
          "
        >
          {/* Entrance scale dipisah dari translate/opacity */}
          <div className="hero-image-photo-scale-enter relative">
            {/* Continuous floating */}
            <div className="hero-image-photo-float relative">
              {/* Hover scale */}
              <div className="hero-image-photo-hover relative">
                {/* =========================================
                    GLASS CIRCLE
                ========================================= */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-full
                    border
                    border-blue-400/25
                    bg-transparent
                    p-1.5
                    shadow-2xl
                    md:p-2
                    dark:border-blue-400/20
                  "
                >
                  {/* Photo */}
                  <img
                    src={profile}
                    alt="Yohanes Dimas Pratama"
                    draggable={false}
                    className="
                      hero-image-photo-image-enter
                      relative
                      z-10
                      h-48
                      w-48
                      rounded-full
                      object-cover
                      md:h-[420px]
                      md:w-[420px]
                    "
                  />
                </div>

                {/* =========================================
                    AVAILABLE BADGE
                ========================================= */}

                <div
                  className="
                    hero-image-badge-enter
                    absolute
                    -right-3
                    top-4
                    z-30
                    md:-right-2
                    md:top-6
                  "
                >
                  <div
                    className="
                      hero-image-badge-float
                      whitespace-nowrap
                      rounded-full
                      bg-green-600
                      px-3
                      py-1.5
                      text-[10px]
                      font-semibold
                      text-white
                      shadow-xl
                      md:px-4
                      md:py-2
                      md:text-sm
                    "
                  >
                    Available for Work
                  </div>
                </div>

                {/* =========================================
                    EXPERIENCE CARD
                ========================================= */}

                <div
                  className="
                    hero-image-experience-enter
                    absolute
                    -left-5
                    bottom-5
                    z-30
                    md:-left-8
                    md:bottom-10
                  "
                >
                  <div
                    className="
                      hero-image-experience-float
                      rounded-xl
                      border
                      border-white/20
                      bg-white/70
                      px-3
                      py-2
                      shadow-xl
                      backdrop-blur-xl
                      dark:bg-slate-900/70
                      md:rounded-2xl
                      md:px-5
                      md:py-3
                    "
                  >
                    <h3
                      className="
                        text-lg
                        font-bold
                        text-blue-500
                        md:text-2xl
                      "
                    >
                      1+
                    </h3>

                    <p
                      className="
                        whitespace-nowrap
                        text-[10px]
                        text-slate-700
                        dark:text-slate-300
                        md:text-sm
                      "
                    >
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}