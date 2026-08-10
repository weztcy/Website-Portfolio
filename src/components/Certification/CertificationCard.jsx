import { motion } from "motion/react";

import {
  CalendarDays,
} from "lucide-react";


import CertificatePreview from "./CertificatePreview";



export default function CertificationCard({
  certificate,
  index,
  onOpen,
}) {


  return (

    <motion.div


      initial={{
        opacity:0,
        y:50,
      }}



      whileInView={{
        opacity:1,
        y:0,
      }}



      viewport={{
        once:true,
        amount:0.2,
      }}



      transition={{
        duration:0.6,
        delay:index * 0.12,
      }}



      whileHover={{
        y:-10,
      }}



      className="
        group

        overflow-hidden

        rounded-3xl

        border

        border-slate-200

        bg-white/70

        p-5

        shadow-lg

        backdrop-blur-xl


        transition-all

        duration-300


        hover:border-blue-400/50

        hover:shadow-2xl

        hover:shadow-blue-500/20


        dark:border-slate-800

        dark:bg-slate-900/60
      "

    >








      {/* Certificate Preview */}

      <CertificatePreview

        certificate={certificate}

        onOpen={onOpen}

      />









      {/* Bottom Content */}


      <div

        className="
          mt-6
        "

      >







        {/* Organization */}


        <span

          className="
            inline-flex

            items-center

            rounded-full

            bg-gradient-to-r

            from-blue-500

            to-cyan-500

            px-4

            py-1.5

            text-xs

            font-semibold

            text-white

            shadow-md
          "

        >

          {certificate.organization}

        </span>









        {/* Title */}


        <h3

          className="
            mt-4

            line-clamp-2

            text-lg

            font-bold

            text-slate-900


            transition-all

            duration-300


            group-hover:text-blue-600


            dark:text-white


            dark:group-hover:text-cyan-400
          "

        >

          {certificate.title}

        </h3>









        {/* Date */}


        <div

          className="
            mt-5

            flex

            items-center

            justify-end

            gap-2

            text-sm

            text-slate-500


            dark:text-slate-400
          "

        >

          <CalendarDays size={17}/>


          <span>

            {certificate.date}

          </span>


        </div>





      </div>







    </motion.div>

  );

}