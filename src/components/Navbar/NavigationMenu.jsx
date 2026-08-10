import { motion } from "motion/react";

import navLinksData from "./navLinksData";



export default function NavigationMenu({
  activeSection,
}) {


  return (

    <nav>


      <ul


        className="
          flex

          items-center

          gap-4

          xl:gap-6
        "


      >


        {
          navLinksData.map((item) => (


            <li

              key={item.id}

            >



              <a


                href={`#${item.id}`}


                className={`

                  group

                  relative

                  whitespace-nowrap

                  font-medium


                  transition-colors


                  duration-300



                  ${
                    activeSection === item.id

                    ? "text-blue-500 dark:text-cyan-400"

                    : "text-slate-700 dark:text-gray-300"
                  }

                `}


              >



                {item.label}






                {/* Active / Hover Indicator */}


                <motion.span


                  initial={false}


                  animate={{


                    width:

                      activeSection === item.id

                      ? "100%"

                      : "0%",


                  }}



                  transition={{

                    duration:0.3,

                  }}



                  className="
                    absolute

                    -bottom-2

                    left-0

                    h-[2px]


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


    </nav>

  );

}