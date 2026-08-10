import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

import useTheme from "../../hooks/useTheme";



export default function ThemeToggle() {


  const { darkMode, setDarkMode } = useTheme();





  return (


    <motion.button


      onClick={() => setDarkMode(!darkMode)}


      whileHover={{
        scale:1.1,
      }}


      whileTap={{
        scale:0.95,
      }}



      className="
        flex

        h-11

        w-11

        items-center

        justify-center


        rounded-full


        bg-slate-200


        transition-colors


        duration-300



        dark:bg-slate-800
      "


      aria-label="Toggle Theme"


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



    </motion.button>


  );

}