import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  ArrowUp,
} from "lucide-react";





export default function BackToTop() {


  const [visible, setVisible] = useState(false);





  useEffect(() => {


    const handleScroll = () => {


      if (window.scrollY > 500) {

        setVisible(true);

      } else {

        setVisible(false);

      }


    };



    window.addEventListener(
      "scroll",
      handleScroll
    );



    return () =>

      window.removeEventListener(
        "scroll",
        handleScroll
      );


  }, []);









  const scrollToTop = () => {


    window.scrollTo({

      top:0,

      behavior:"smooth",

    });


  };







  return (


    <AnimatePresence>


      {
        visible && (


          <motion.button


            initial={{

              opacity:0,

              y:40,

              scale:0.8,

            }}



            animate={{

              opacity:1,

              y:0,

              scale:1,

            }}



            exit={{

              opacity:0,

              y:40,

              scale:0.8,

            }}



            whileHover={{

              y:-6,

              scale:1.1,

            }}



            whileTap={{

              scale:0.9,

            }}



            onClick={scrollToTop}



            aria-label="Back to top"



            className="
              fixed

              bottom-8

              right-8

              z-50


              flex

              h-12

              w-12

              items-center

              justify-center



              rounded-full



              bg-gradient-to-r

              from-blue-600

              to-cyan-500



              text-white



              shadow-xl



              shadow-blue-500/30



              transition-all



              duration-300



              hover:shadow-blue-500/60



              dark:from-blue-500

              dark:to-cyan-400
            "

          >



            <ArrowUp

              size={22}

              strokeWidth={2.5}

            />



          </motion.button>


        )
      }


    </AnimatePresence>


  );

}