import { useState } from "react";
import { motion } from "motion/react";

import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";


// import BackgroundPattern from "./BackgroundPattern";
import BackgroundPattern from "../About/BackgroundPattern";

import ProjectCard from "./ProjectCard";


import {
  projects,
} from "./ProjectsData";



export default function Projects() {


  const [showAll, setShowAll] = useState(false);



  const displayedProjects = showAll

    ? projects

    : projects.slice(0,3);





  return (

    <section

      id="projects"

      className="
        relative

        overflow-hidden


        py-24




        lg:py-32
      "

    >





      {/* Background */}

      <BackgroundPattern />








      <div

        className="
          relative

          z-10

          mx-auto

          max-w-7xl

          px-6

          sm:px-8

          lg:px-10
        "

      >









        {/* Header */}


        <motion.div



          initial={{

            opacity:0,

            y:40,

          }}



          whileInView={{

            opacity:1,

            y:0,

          }}



          viewport={{

            once:true,

          }}



          transition={{

            duration:0.7,

          }}



          className="
            mb-16

            text-center
          "

        >





          <p

            className="
              text-sm

              font-semibold

              uppercase

              tracking-[0.35em]

              text-blue-500
            "

          >

            Portfolio Showcase

          </p>







          <h2

            className="
              mt-5


              text-4xl


              font-black



              text-slate-900



              dark:text-white



              md:text-5xl
            "

          >

            My Projects

          </h2>







          <p

            className="
              mx-auto

              mt-5


              max-w-xl



              text-lg



              leading-8



              text-slate-600



              dark:text-slate-400
            "

          >

            A collection of projects I have developed
            using various technologies, frameworks,
            and problem-solving approaches.


          </p>





        </motion.div>












        {/* Project Cards */}



        <div

          className="
            grid


            grid-cols-1


            gap-8



            md:grid-cols-2



            xl:grid-cols-3
          "

        >



          {
            displayedProjects.map(
              (project,index)=>(


                <ProjectCard


                  key={project.id}


                  project={project}


                  index={index}


                />


              )
            )
          }



        </div>












        {/* Show More Button */}



        {
          projects.length > 3 && (



            <motion.div


              initial={{

                opacity:0,

                y:20,

              }}



              whileInView={{

                opacity:1,

                y:0,

              }}



              viewport={{

                once:true,

              }}



              className="
                mt-14


                flex


                justify-center
              "

            >




              <button


                onClick={()=>

                  setShowAll(!showAll)

                }



                className="
                  group

                  flex

                  items-center

                  gap-3


                  rounded-full



                  bg-blue-600



                  px-8



                  py-3.5



                  font-semibold



                  text-white



                  shadow-lg



                  transition-all



                  duration-300



                  hover:-translate-y-1



                  hover:bg-blue-700



                  hover:shadow-blue-500/40
                "


              >



                {
                  showAll

                  ? "Show Less"

                  : "Show More"
                }





                {
                  showAll

                  ? (

                    <ChevronUp size={20}/>

                  )


                  : (

                    <ChevronDown size={20}/>

                  )

                }



              </button>





            </motion.div>


          )
        }







      </div>





    </section>

  );

}