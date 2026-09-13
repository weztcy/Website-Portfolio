import { motion, AnimatePresence } from "motion/react";

import navLinksData from "./navLinksData";


export default function MobileMenu({
  menuOpen,
  setMenuOpen,
}) {


  return (

    <AnimatePresence>


      {
        menuOpen && (


          <motion.div


            initial={{
              opacity: 0,
              y: -15,
            }}


            animate={{
              opacity: 1,
              y: 0,
            }}


            exit={{
              opacity: 0,
              y: -15,
            }}


            transition={{
              duration: 0.2,
            }}


            className="
              absolute
              top-full
              left-0

              w-full

              border-t
              border-slate-200

              bg-white

              shadow-lg

              dark:border-white/10
              dark:bg-slate-900

              lg:hidden
            "

          >


            {
              navLinksData.map((item) => (

                <a


                  key={item.id}


                  href={`#${item.id}`}


                  onClick={() => setMenuOpen(false)}


                  className="
                    block

                    border-b
                    border-slate-200

                    px-6
                    py-4

                    font-medium

                    text-slate-700

                    transition-all
                    duration-300

                    hover:bg-slate-100
                    hover:text-blue-500


                    dark:border-white/10

                    dark:text-gray-300

                    dark:hover:bg-slate-800

                    dark:hover:text-cyan-400
                  "

                >

                  {item.label}


                </a>


              ))
            }


          </motion.div>


        )
      }


    </AnimatePresence>

  );

}