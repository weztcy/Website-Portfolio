import { motion } from "motion/react";


export default function TechnicalSkillCard({
  category,
}) {


  const CategoryIcon = category.icon;



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
      }}



      whileHover={{
        y:-10,
      }}



      className="
        group

        relative

        overflow-hidden


        rounded-3xl


        border


        border-slate-200


        bg-white/90


        p-7


        shadow-lg


        backdrop-blur-xl


        transition-all


        duration-300



        hover:border-blue-500/40


        hover:shadow-2xl


        hover:shadow-blue-500/20



        dark:border-slate-800


        dark:bg-slate-900/80
      "

    >





      {/* Hover Glow */}

      <div

        className="
          pointer-events-none

          absolute

          inset-0


          opacity-0


          transition-opacity


          duration-500


          group-hover:opacity-100



          bg-gradient-to-br


          from-blue-400/10


          via-transparent


          to-violet-400/10



          dark:from-blue-500/10


          dark:to-violet-500/10
        "

      />







      {/* Category Header */}

      <div

        className="
          relative

          z-10
        "

      >



        {/* Icon */}


        <motion.div

          whileHover={{
            rotate:10,
            scale:1.1,
          }}


          className="
            flex

            h-14

            w-14


            items-center

            justify-center



            rounded-2xl



            bg-gradient-to-br


            from-blue-500


            to-cyan-500



            text-white



            shadow-lg
          "

        >

          <CategoryIcon
            size={28}
          />

        </motion.div>







        {/* Category Name */}


        <h4

          className="
            mt-6


            text-xl


            font-black


            text-slate-900



            dark:text-white
          "

        >

          <span
            className="
              bg-gradient-to-r

              from-blue-500

              to-cyan-500


              bg-clip-text


              text-transparent
            "
          >

            {category.title}

          </span>


        </h4>


      </div>







      {/* Skill List */}


      <div

        className="
          relative

          z-10


          mt-7


          flex


          flex-wrap


          gap-3
        "

      >



        {
          category.skills.map(
            (skill,index)=>{


              const SkillIcon =
                skill.icon;


              return (

                <motion.div


                  key={index}



                  whileHover={{
                    scale:1.05,
                  }}



                  className="
                    flex

                    items-center


                    gap-2


                    rounded-xl



                    border


                    border-slate-200


                    bg-slate-100



                    px-3


                    py-2



                    text-sm



                    font-medium



                    text-slate-700



                    transition-all



                    duration-300



                    hover:border-blue-400



                    hover:bg-blue-50





                    dark:border-slate-700


                    dark:bg-slate-800


                    dark:text-slate-300



                    dark:hover:bg-slate-700
                  "

                >


                  {
                    SkillIcon ? (

                      <SkillIcon
                        size={15}
                      />

                    ) : (

                      <span
                        className="
                          h-2

                          w-2

                          rounded-full

                          bg-blue-500
                        "
                      />

                    )
                  }



                  {skill.name}



                </motion.div>

              );

            }
          )
        }


      </div>




    </motion.div>

  );

}