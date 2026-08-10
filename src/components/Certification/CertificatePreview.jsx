import { motion } from "motion/react";

import {
  FileBadge2,
  Maximize2,
} from "lucide-react";



export default function CertificatePreview({
  certificate,
  onOpen,
}) {


  return (

    <motion.div

      whileHover={{
        scale:1.03,
      }}


      transition={{
        duration:0.35,
      }}



      onClick={() => onOpen(certificate)}



      className="
        group

        relative

        aspect-[16/10]

        cursor-pointer

        overflow-hidden

        rounded-2xl

        bg-slate-200

        shadow-lg

        dark:bg-slate-800
      "

    >





      {/* Certificate File */}


      {
        certificate.type === "image" ? (


          <img

            src={certificate.file}

            alt={certificate.title}


            className="
              h-full

              w-full

              object-cover

              transition-transform

              duration-500

              group-hover:scale-110
            "

          />


        ) : (


          <iframe

            src={certificate.file}


            title={certificate.title}


            className="
              pointer-events-none

              h-full

              w-full

              bg-white
            "

          />


        )
      }








      {/* Dark Overlay Hover */}


      <div

        className="
          absolute

          inset-0


          flex


          items-center


          justify-center



          bg-slate-950/0



          transition-all


          duration-500



          group-hover:bg-slate-950/60
        "

      >



        <motion.div

          initial={{
            opacity:0,
            y:20,
          }}


          whileHover={{
            opacity:1,
            y:0,
          }}


          className="
            flex

            flex-col

            items-center

            gap-3

            text-white
          "

        >



          <div

            className="
              rounded-full

              bg-white/20

              p-4

              backdrop-blur-md
            "

          >

            <Maximize2 size={28}/>


          </div>





          <span

            className="
              text-sm

              font-semibold

              tracking-wide
            "

          >

            View Full Size

          </span>



        </motion.div>



      </div>









      {/* Certificate Icon */}


      <div

        className="
          absolute

          right-4

          top-4


          flex


          h-10


          w-10


          items-center


          justify-center



          rounded-xl



          bg-white/80



          text-blue-600



          shadow-lg



          backdrop-blur-md



          dark:bg-slate-900/80



          dark:text-blue-400
        "

      >

        <FileBadge2 size={22}/>


      </div>





    </motion.div>

  );

}