import { motion } from "motion/react";
import { useMemo } from "react";



const shapes = [

  {
    size:"h-72 w-72",
    position:"-top-20 -left-20",
    color:"bg-blue-400/20 dark:bg-blue-500/20",
  },

  {
    size:"h-96 w-96",
    position:"top-32 -right-32",
    color:"bg-cyan-400/20 dark:bg-cyan-500/15",
  },

  {
    size:"h-64 w-64",
    position:"bottom-20 left-20",
    color:"bg-violet-400/20 dark:bg-violet-500/15",
  },

];





function generateDots(count){

  return Array.from(
    {
      length:count,
    },

    (_,index)=>({

      id:index,

      top:
        Math.random()*100,

      left:
        Math.random()*100,

      delay:
        Math.random()*4,

    })

  );

}







export default function BackgroundPattern(){



  const dots = useMemo(
    ()=>generateDots(35),
    []
  );





  return (

    <div

      className="
        absolute

        inset-0

        -z-10

        overflow-hidden

        pointer-events-none
      "

    >









      {/* Base Background */}



      <div

        className="
          absolute

          inset-0

          bg-slate-50

          dark:bg-slate-950
        "

      />













      {/* Animated Mesh Gradient */}



      <motion.div



        animate={{

          x:[

            "-10%",

            "10%",

            "-10%",

          ],



          y:[

            "0%",

            "-8%",

            "0%",

          ],



          scale:[

            1,

            1.2,

            1,

          ],


        }}



        transition={{

          duration:25,

          repeat:Infinity,

          ease:"easeInOut",

        }}



        className="
          absolute


          inset-[-30%]



          blur-[140px]



          opacity-50



          dark:opacity-35



          bg-gradient-to-br



          from-blue-400/40



          via-cyan-300/30



          to-violet-500/40



          dark:from-blue-600/30



          dark:via-cyan-500/20



          dark:to-violet-600/30
        "

      />












      {/* Floating Abstract Shapes */}



      {
        shapes.map(

          (shape,index)=>(


            <motion.div



              key={index}



              animate={{

                x:[

                  0,

                  50,

                  0,

                ],



                y:[

                  0,

                  -40,

                  0,

                ],



                rotate:[

                  0,

                  15,

                  0,

                ],



                scale:[

                  1,

                  1.15,

                  1,

                ],


              }}



              transition={{

                duration:

                  18 + index * 4,


                repeat:Infinity,


                ease:"easeInOut",

              }}



              className={`
                absolute


                ${shape.size}


                ${shape.position}



                rounded-full



                blur-3xl



                ${shape.color}
              `}

            />



          )

        )
      }












      {/* Communication Waves */}



      <motion.div



        animate={{

          rotate:[

            0,

            360,

          ],


        }}



        transition={{

          duration:80,

          repeat:Infinity,

          ease:"linear",

        }}



        className="
          absolute


          -right-52


          top-20



          h-[550px]


          w-[550px]



          rounded-full



          border



          border-blue-400/20



          dark:border-cyan-400/20
        "

      />






      <motion.div



        animate={{

          rotate:[

            360,

            0,

          ],


        }}



        transition={{

          duration:100,

          repeat:Infinity,

          ease:"linear",

        }}



        className="
          absolute


          -right-32


          top-44



          h-[380px]


          w-[380px]



          rounded-full



          border



          border-violet-400/20



          dark:border-violet-500/20
        "

      />













      {/* Floating Connection Dots */}



      {
        dots.map((dot)=>(


          <motion.span



            key={dot.id}



            animate={{

              opacity:[

                0.2,

                0.8,

                0.2,

              ],



              scale:[

                1,

                1.5,

                1,

              ],



              y:[

                0,

                -20,

                0,

              ],


            }}



            transition={{

              duration:

                5 + dot.id % 5,


              repeat:Infinity,


              delay:

                dot.delay,


              ease:"easeInOut",

            }}



            style={{

              top:`${dot.top}%`,

              left:`${dot.left}%`,

            }}



            className="
              absolute


              h-2


              w-2



              rounded-full



              bg-blue-400/60



              shadow-[0_0_20px_rgba(59,130,246,0.7)]



              dark:bg-cyan-400/60
            "

          />


        ))
      }













      {/* Abstract Grid */}



      <div



        className="
          absolute


          inset-0



          opacity-[0.12]



          dark:opacity-[0.07]



          [background-image:linear-gradient(45deg,#94a3b8_1px,transparent_1px),linear-gradient(-45deg,#94a3b8_1px,transparent_1px)]



          [background-size:70px_70px]
        "

      />













      {/* Bottom Fade */}



      <div



        className="
          absolute


          inset-0



          bg-gradient-to-b



          from-transparent



          via-transparent



          to-slate-100/80



          dark:to-slate-950/90
        "

      />




    </div>

  );

}