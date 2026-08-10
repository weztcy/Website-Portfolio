import { motion } from "motion/react";
import {
  Code2,
  Palette,
  Database,
  BrainCircuit,
} from "lucide-react";

const highlights = [
  {
    icon: Database,
    text: "Data Analyst",
  },
  {
    icon: BrainCircuit,
    text: "Machine Learning",
  },
  {
    icon: Code2,
    text: "Frontend Developer",
  },
  {
    icon: Palette,
    text: "UI/UX Designer",
  },
];

export default function AboutContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      {/* Badge */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.1,
        }}
        className="
          inline-flex
          items-center

          rounded-full

          border
          border-blue-500/20

          bg-blue-500/10

          px-4
          py-2

          text-sm
          font-semibold

          tracking-wide

          text-blue-500
        "
      >
        About Me
      </motion.div>


      {/* Heading */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.2,
        }}
        className="
          mt-6

          text-4xl

          font-black

          leading-tight

          text-slate-900

          dark:text-white

          lg:text-5xl
        "
      >
        Building Digital Solutions
        <br />

        <span
          className="
            bg-gradient-to-r
            from-blue-500
            via-cyan-400
            to-violet-500

            bg-clip-text

            text-transparent
          "
        >
          With Creativity & Technology
        </span>
      </motion.h2>


      {/* Description 1 */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.35,
        }}
        className="
          mt-8

          text-lg

          leading-8

          text-slate-600

          dark:text-slate-400
        "
      >
        Sarjana Teknik Informatika dari Universitas Dian Nuswantoro dengan sertifikasi sebagai Data Analyst dari MySkill dan Web Developer dari BNSP, serta memiliki keahlian dalam Machine Learning, dan UI/UX Design. Terampil dalam Microsoft Office, terutama Microsoft Excel, untuk analisis dan visualisasi data.
      </motion.p>


      {/* Description 2 */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.5,
        }}
        className="
          mt-5

          text-lg

          leading-8

          text-slate-600

          dark:text-slate-400
        "
      >
         Mampu bekerja secara independen maupun bekerja sama dalam tim, dengan kemampuan komunikasi, pemecahan masalah, serta manajemen waktu yang baik. Berorientasi pada detail, efisiensi, dan kualitas kerja. Berkomitmen untuk terus belajar dan berkembang dalam lingkungan profesional.
      </motion.p>


      {/* Skill Highlight */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.65,
        }}
        className="
          mt-10

          grid

          gap-4

          sm:grid-cols-2
        "
      >
        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.text}
              whileHover={{
                x: 5,
              }}
              className="
                flex
                items-center
                gap-3

                rounded-xl

                border

                border-slate-200

                bg-white/50

                px-4
                py-3

                backdrop-blur

                dark:border-slate-800

                dark:bg-slate-900/50
              "
            >
              <Icon
                size={22}
                className="
                  text-blue-500
                "
              />

              <span
                className="
                  font-medium

                  text-slate-700

                  dark:text-slate-300
                "
              >
                {item.text}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}