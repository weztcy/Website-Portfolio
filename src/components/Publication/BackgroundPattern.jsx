import { motion } from "motion/react";
import { useMemo } from "react";



const nodes = [

  {
    top:"18%",
    left:"15%",
  },


  {
    top:"35%",
    left:"80%",
  },


  {
    top:"65%",
    left:"25%",
  },


  {
    top:"75%",
    left:"70%",
  },


  {
    top:"45%",
    left:"50%",
  },

];







function generateConnections(){

  return Array.from(
    {
      length:10,
    },

    (_,index)=>({

      id:index,

      top:
        Math.random()*100,


      left:
        Math.random()*100,


      width:
        100 + Math.random()*220,


      rotate:
        Math.random()*360,


    })

  );

}









export default function BackgroundPattern(){


  const connections = useMemo(
    ()=>generateConnections(),
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







      {/* Base */}


      <div

        className="
          absolute

          inset-0

          bg-slate-50

          dark:bg-slate-950
        "

      />









      {/* Academic Gradient */}



      <motion.div


        animate={{

          x:[

            "-15%",

            "15%",

            "-15%",

          ],



          y:[

            "0%",

            "-10%",

            "0%",

          ],



          scale:[

            1,

            1.15,

            1,

          ],


        }}



        transition={{

          duration:28,

          repeat:Infinity,

          ease:"easeInOut",

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












      {/* Scientific Connection Lines */}



      {
        connections.map((line)=>(


          <motion.div


            key={line.id}



            animate={{

              opacity:[

                0.15,

                0.5,

                0.15,

              ],


              scaleX:[

                1,

                1.15,

                1,

              ],


            }}



            transition={{

              duration:

                5 + line.id,


              repeat:Infinity,


              ease:"easeInOut",

            }}



            style={{

              top:`${line.top}%`,


              left:`${line.left}%`,


              width:`${line.width}px`,


              rotate:`${line.rotate}deg`,


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












      {/* Research Nodes */}



      {
        nodes.map(
          (node,index)=>(



            <motion.div


              key={index}



              animate={{

                scale:[

                  1,

                  1.4,

                  1,

                ],


                opacity:[

                  0.3,

                  0.8,

                  0.3,

                ],


                y:[

                  0,

                  -25,

                  0,

                ],


              }}



              transition={{

                duration:

                  6 + index,


                repeat:Infinity,


                delay:

                  index * 0.5,


                ease:"easeInOut",

              }}



              style={{

                top:node.top,

                left:node.left,

              }}



              className="
                absolute


                flex


                h-5


                w-5



                items-center



                justify-center



                rounded-full



                bg-blue-400/70



                shadow-[0_0_25px_rgba(59,130,246,0.6)]



                dark:bg-cyan-400/70
              "

            >


              <span

                className="
                  h-2

                  w-2

                  rounded-full

                  bg-white/80
                "

              />


            </motion.div>



          )
        )
      }













      {/* Mathematical Circles */}



      <motion.div


        animate={{

          rotate:[

            0,

            360,

          ],

        }}



        transition={{

          duration:60,

          repeat:Infinity,

          ease:"linear",

        }}



        className="
          absolute


          -right-48


          top-20



          h-[420px]


          w-[420px]



          rounded-full



          border



          border-blue-400/20



          dark:border-cyan-500/20
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

          duration:70,

          repeat:Infinity,

          ease:"linear",

        }}



        className="
          absolute


          -left-40


          bottom-10



          h-[320px]


          w-[320px]



          rounded-full



          border



          border-violet-400/20



          dark:border-violet-500/20
        "

      />













      {/* Scientific Grid */}



      <div


        className="
          absolute


          inset-0



          opacity-[0.12]



          dark:opacity-[0.07]



          [background-image:linear-gradient(90deg,#94a3b8_1px,transparent_1px),linear-gradient(#94a3b8_1px,transparent_1px)]



          [background-size:55px_55px]
        "

      />












      {/* Fade */}



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