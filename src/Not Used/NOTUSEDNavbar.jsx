import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Menu, X } from "lucide-react";

import useTheme from "../hooks/useTheme";



const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Certification", id: "certification" },
  { label: "Publication", id: "publication" },
  { label: "Projects", id: "projects" },
  { label: "Language", id: "language" },
  { label: "Contact", id: "contact" },
];





export default function Navbar() {


  const [menuOpen, setMenuOpen] = useState(false);


  const { darkMode, setDarkMode } = useTheme();





  return (


    <motion.nav


      initial={{
        y:-80,
      }}


      animate={{
        y:0,
      }}


      transition={{
        duration:0.5,
      }}


      className="
        fixed

        top-0

        left-0

        z-50

        w-full


        border-b

        border-slate-200/40


        bg-white/80


        backdrop-blur-xl


        transition-colors


        duration-300



        dark:border-white/10


        dark:bg-slate-900/70
      "


    >







      <div


        className="
          mx-auto

          flex

          max-w-7xl

          items-center

          justify-between

          px-6

          py-4


          sm:px-8

          lg:px-10
        "


      >







        {/* Logo */}



        <a


          href="#home"


          className="
            text-2xl

            font-bold

            tracking-wide


            bg-gradient-to-r

            from-blue-600

            via-cyan-500

            to-violet-500


            bg-clip-text

            text-transparent
          "


        >


          Dimas Pratama


        </a>









        {/* Desktop Menu */}



        <ul


          className="
            hidden

            items-center

            gap-7

            lg:flex
          "


        >


          {
            navLinks.map((item)=>(


              <li

                key={item.id}

                className="relative"

              >


                <a


                  href={`#${item.id}`}


                  className="
                    group

                    relative

                    font-medium


                    text-slate-700


                    transition-colors


                    duration-300



                    hover:text-blue-500



                    dark:text-gray-300



                    dark:hover:text-cyan-400
                  "


                >


                  {item.label}





                  <span


                    className="
                      absolute

                      -bottom-2

                      left-0

                      h-[2px]

                      w-0


                      bg-gradient-to-r

                      from-blue-500

                      to-cyan-400


                      transition-all

                      duration-300


                      group-hover:w-full
                    "


                  />



                </a>


              </li>


            ))
          }


        </ul>









        <div


          className="
            flex

            items-center

            gap-3
          "


        >









          {/* Theme Button */}



          <button


            onClick={() => setDarkMode(!darkMode)}


            className="
              flex

              h-11

              w-11

              items-center

              justify-center


              rounded-full


              bg-slate-200


              transition-all


              duration-300


              hover:scale-110



              dark:bg-slate-800
            "


          >


            {
              darkMode ? (


                <Sun

                  size={20}

                  className="
                    text-yellow-400
                  "

                />


              ) : (


                <Moon

                  size={20}

                  className="
                    text-slate-700
                  "

                />


              )
            }


          </button>









          {/* Mobile Button */}



          <button


            onClick={() => setMenuOpen(!menuOpen)}


            className="
              lg:hidden
            "


          >


            {
              menuOpen ? (


                <X

                  size={26}

                  className="
                    text-slate-900

                    dark:text-white
                  "

                />


              ) : (


                <Menu

                  size={26}

                  className="
                    text-slate-900

                    dark:text-white
                  "

                />


              )
            }


          </button>








        </div>






      </div>









      {/* Mobile Menu */}



      <AnimatePresence>


        {
          menuOpen && (


            <motion.div


              initial={{
                opacity:0,

                y:-15,
              }}


              animate={{
                opacity:1,

                y:0,
              }}


              exit={{
                opacity:0,

                y:-15,
              }}


              transition={{
                duration:0.2,
              }}



              className="
                border-t


                border-slate-200


                bg-white


                dark:border-white/10


                dark:bg-slate-900


                lg:hidden
              "


            >




              {
                navLinks.map((item)=>(


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







    </motion.nav>


  );

}