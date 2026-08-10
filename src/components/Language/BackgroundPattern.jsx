import { motion } from "motion/react";
import { useMemo } from "react";



function generateLines(count){

  return Array.from(
    { length: count },
    (_, index) => ({

      id:index,

      top:
        Math.random() * 100,

      left:
        Math.random() * 100,

      width:
        120 + Math.random() * 220,

      rotate:
        Math.random() * 360,

      delay:
        Math.random() * 3,

    })
  );

}







const nodes = [

  {
    top:"20%",
    left:"18%",
  },

  {
    top:"35%",
    left:"75%",
  },

  {
    top:"65%",
    left:"30%",
  },

  {
    top:"72%",
    left:"80%",
  },

  {
    top:"45%",
    left:"50%",
  },

];









export default function BackgroundPattern(){


  const lines = useMemo(
    ()=>generateLines(12),
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









      {/* Global Gradient */}



      <motion.div


        animate={{

          x:[

            "-10%",

            "15%",

            "-10%"

          ],


          y:[

            "0%",

            "-8%",

            "0%"

          ],


          scale:[

            1,

            1.15,

            1

          ]

        }}



        transition={{

          duration:25,

          repeat:Infinity,

          ease:"easeInOut"

        }}



        className="
          absolute

          inset-[-25%]

          blur-[150px]


          opacity-50


          dark:opacity-35


          bg-gradient-to-br


          from-blue-400/40


          via-cyan-300/30


          to-violet-400/40



          dark:from-blue-600/30


          dark:via-cyan-500/20


          dark:to-violet-600/30
        "

      />












      {/* Communication Lines */}



      {
        lines.map((line)=>(


          <motion.div


            key={line.id}



            animate={{

              opacity:[

                0.1,

                0.5,

                0.1

              ],


              scaleX:[

                1,

                1.15,

                1

              ]

            }}



            transition={{

              duration:

                5 + line.id * 0.3,


              repeat:Infinity,


              delay:

                line.delay,


              ease:"easeInOut"

            }}



            style={{

              top:`${line.top}%`,

              left:`${line.left}%`,

              width:`${line.width}px`,

              rotate:`${line.rotate}deg`

            }}



            className="
              absolute

              h-px


              origin-left


              bg-gradient-to-r


              from-transparent


              via-blue-400/40


              to-transparent



              dark:via-cyan-400/40
            "

          />


        ))

      }













      {/* Network Nodes */}



      {
        nodes.map((node,index)=>(



          <motion.div


            key={index}



            animate={{

              y:[

                0,

                -25,

                0

              ],


              scale:[

                1,

                1.3,

                1

              ],


              opacity:[

                0.3,

                0.8,

                0.3

              ]

            }}



            transition={{

              duration:

                5 + index,


              repeat:Infinity,


              delay:

                index * 0.5,


              ease:"easeInOut"

            }}



            style={{

              top:node.top,

              left:node.left

            }}



            className="
              absolute


              h-5


              w-5


              rounded-full



              bg-blue-400/70



              shadow-[0_0_30px_rgba(59,130,246,0.6)]



              dark:bg-cyan-400/70
            "

          />



        ))
      }














      {/* Globe Circle */}



      <motion.div


        animate={{

          rotate:[

            0,

            360

          ]

        }}



        transition={{

          duration:70,

          repeat:Infinity,

          ease:"linear"

        }}



        className="
          absolute


          -right-48


          top-20



          h-[500px]


          w-[500px]



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

            0

          ]

        }}



        transition={{

          duration:90,

          repeat:Infinity,

          ease:"linear"

        }}



        className="
          absolute


          -right-28


          top-44



          h-[350px]


          w-[350px]



          rounded-full



          border



          border-violet-400/20



          dark:border-violet-500/20
        "

      />












      {/* Small Communication Dots */}



      <div


        className="
          absolute


          inset-0



          opacity-20



          dark:opacity-10



          [background-image:radial-gradient(circle,#94a3b8_1px,transparent_1px)]



          [background-size:35px_35px]
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



          to-slate-100/70



          dark:to-slate-950/80
        "

      />




    </div>

  );

}