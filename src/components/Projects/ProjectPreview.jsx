import { motion } from "motion/react";

import {
  ExternalLink,
} from "lucide-react";



export default function ProjectPreview({
  project,
  onOpen,
}) {


  const Icon = project.icon;



  return (

    <motion.div


      whileHover={{

        scale:1.03,

      }}



      transition={{

        duration:0.35,

      }}



      onClick={() => {

        if(onOpen){

          onOpen(project);

        }

      }}



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







      {/* Project Image */}


      <img


        src={project.image}


        alt={project.title}



        className="
          h-full

          w-full

          object-cover



          transition-transform



          duration-500



          group-hover:scale-110
        "


      />









      {/* Hover Overlay */}



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



          {/* <div

            className="
              rounded-full

              bg-white/20

              p-4

              backdrop-blur-md
            "

          >

            <ExternalLink

              size={28}

            />

          </div> */}





          {/* <span

            className="
              text-sm

              font-semibold

              tracking-wide
            "

          >

            View Project

          </span> */}




        </motion.div>




      </div>












      {/* Project Icon */}



      {/* <div


        className="
          absolute


          right-4


          top-4



          flex



          h-11



          w-11



          items-center



          justify-center



          rounded-xl



          bg-white/80



          text-blue-600



          shadow-lg



          backdrop-blur-md



          dark:bg-slate-900/80



          dark:text-cyan-400
        "


      >

        <Icon size={23}/>


      </div> */}









    </motion.div>


  );

}