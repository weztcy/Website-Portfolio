import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

import {
  X,
  FileText,
} from "lucide-react";



export default function CertificateModal({
  certificate,
  onClose,
}) {



  useEffect(() => {

    const handleEscape = (event) => {

      if (event.key === "Escape") {
        onClose();
      }

    };


    document.addEventListener(
      "keydown",
      handleEscape
    );


    return () => {

      document.removeEventListener(
        "keydown",
        handleEscape
      );

    };


  }, [onClose]);






  return (

    <AnimatePresence>


      {certificate && (


        <motion.div

          initial={{
            opacity:0,
          }}


          animate={{
            opacity:1,
          }}


          exit={{
            opacity:0,
          }}


          onClick={onClose}


          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-slate-950/70
            p-6
            backdrop-blur-md
          "

        >




          <motion.div


            initial={{
              opacity:0,
              scale:0.9,
              y:30,
            }}



            animate={{
              opacity:1,
              scale:1,
              y:0,
            }}



            exit={{
              opacity:0,
              scale:0.9,
              y:30,
            }}



            transition={{
              duration:0.3,
            }}



            onClick={(e)=>e.stopPropagation()}



            className="
              relative
              max-h-[85vh]
              w-full
              max-w-5xl
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-2xl
              dark:bg-slate-900
            "

          >






            {/* Close */}

            <button

              onClick={onClose}


              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-black/60
                text-white
                backdrop-blur-md
                transition
                hover:scale-110
                hover:bg-red-500
              "

            >

              <X size={22}/>

            </button>








            {/* Content */}


            {
              certificate.type === "image" ? (


                <img

                  src={certificate.file}

                  alt={certificate.title}


                  className="
                    max-h-[85vh]
                    w-full
                    object-contain
                  "

                />


              ) : (


                <iframe

                  src={certificate.file}

                  title={certificate.title}


                  className="
                    h-[85vh]
                    w-full
                  "

                />


              )

            }









            {/* Footer */}

            <div

              className="
                absolute
                bottom-0
                left-0
                right-0
                bg-gradient-to-t
                from-black/80
                to-transparent
                p-6
                text-white
              "

            >

              <div

                className="
                  flex
                  items-center
                  gap-3
                "

              >

                <FileText size={20}/>


                <p className="font-semibold">

                  {certificate.title}

                </p>


              </div>


            </div>





          </motion.div>



        </motion.div>


      )}



    </AnimatePresence>

  );

}