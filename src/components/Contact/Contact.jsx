import { motion } from "motion/react";

import { Mail, Sparkles } from "lucide-react";

// import BackgroundPattern from "./BackgroundPattern";
import BackgroundPattern from "../About/BackgroundPattern";

import ContactForm from "./ContactForm";



export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="
          relative

          overflow-hidden


          py-24




          lg:py-32
        "
      >
        {/* Background */}

        <BackgroundPattern />

        <div
          className="
            relative

            z-10

            mx-auto

            max-w-7xl

            px-6

            sm:px-8

            lg:px-10
          "
        >
          {/* Header */}

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
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mb-14

              text-center
            "
          >
            <div
              className="
                mb-5

                flex

                justify-center
              "
            >
              <div
                className="
                  flex

                  items-center

                  gap-2


                  rounded-full


                  bg-blue-100


                  px-5


                  py-2


                  text-sm


                  font-semibold


                  text-blue-700



                  dark:bg-blue-500/20



                  dark:text-cyan-300
                "
              >
                <Sparkles size={16} />
                Let's Connect
              </div>
            </div>

            <h2
              className="
                text-4xl


                font-black


                text-slate-900



                dark:text-white



                md:text-5xl
              "
            >
              Contact Me
            </h2>

            <p
              className="
                mx-auto

                mt-5

                max-w-xl


                text-lg


                leading-8


                text-slate-600



                dark:text-slate-400
              "
            >
              Have a project, collaboration opportunity, or just want to say
              hello? Feel free to send me a message.
            </p>
          </motion.div>

          {/* Contact Form */}

          <div
            className="
w-full
  max-w-[450px]
  mx-auto
            "
          >
            <ContactForm />
          </div>

          {/* Email Info */}

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
              delay: 0.3,
            }}
            className="
              mt-12


              flex


              justify-center
            "
          >
            <div
              className="
                flex

                items-center

                gap-3


                rounded-2xl


                border


                border-slate-200


                bg-white/60


                px-6


                py-4


                text-slate-600


                shadow-md


                backdrop-blur-xl



                dark:border-slate-800



                dark:bg-slate-900/50



                dark:text-slate-300
              "
            >
              <Mail
                size={22}
                className="
                  text-blue-500
                "
              />

              <span>Available for opportunities and collaborations</span>
            </div>
          </motion.div>
        </div>
      </section>


    </>
  );
}
