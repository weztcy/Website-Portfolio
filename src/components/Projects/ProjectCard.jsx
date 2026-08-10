import { motion } from "motion/react";

import {
  CalendarDays,
} from "lucide-react";


import ProjectPreview from "./ProjectPreview";



export default function ProjectCard({

  project,

  index,

  onOpen,

}) {


  const Icon = project.icon;



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









      {/* Project Preview */}


      <ProjectPreview

        project={project}

        onOpen={onOpen}

      />









      {/* Content */}



      <div

        className="
          mt-6
        "

      >







        {/* Row 1 Icon + Date */}


        <div

          className="
            flex

            items-center

            justify-between
          "

        >



          {/* Project Icon */}


          <div

            className="
              flex

              h-10

              w-10

              items-center

              justify-center


              rounded-xl



              bg-gradient-to-br



              from-blue-500



              to-cyan-500



              text-white



              shadow-md
            "

          >

            <Icon size={21}/>


          </div>









          {/* Date */}


          <div

            className="
              flex

              items-center

              gap-2


              text-sm


              text-slate-500



              dark:text-slate-400
            "

          >

            <CalendarDays size={16}/>


            <span>

              {project.date}

            </span>


          </div>



        </div>









        {/* Title */}


        <h3

          className="
            mt-5


            text-xl


            font-black



            text-slate-900



            transition-all



            duration-300



            group-hover:bg-gradient-to-r



            group-hover:from-blue-600



            group-hover:to-cyan-500



            group-hover:bg-clip-text



            group-hover:text-transparent



            dark:text-white
          "

        >

          {project.title}


        </h3>









        {/* Description */}


        <p

          className="
            mt-3


            line-clamp-4



            text-sm



            leading-7



            text-slate-600



            dark:text-slate-400
          "

        >

          {project.description}


        </p>









        {/* Technologies */}


        <div

          className="
            mt-6


            flex


            flex-wrap


            gap-2
          "

        >



          {
            project.technologies.map(
              (tech)=>(


                <span


                  key={tech.name}



                  className={`
                    rounded-full

                    px-3

                    py-1.5

                    text-xs

                    font-semibold

                    ${tech.color}
                  `}



                >

                  {tech.name}


                </span>


              )
            )
          }




        </div>








      </div>






    </motion.div>

  );

}