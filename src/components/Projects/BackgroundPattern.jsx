import { motion } from "motion/react";
import { useMemo } from "react";



const nodes = [
  {
    top:"15%",
    left:"12%",
  },

  {
    top:"30%",
    left:"75%",
  },

  {
    top:"60%",
    left:"20%",
  },

  {
    top:"72%",
    left:"82%",
  },

  {
    top:"45%",
    left:"50%",
  },

];





function generateLines(){

  return Array.from(
    {length:8},
    (_,index)=>({

      id:index,

      top:
        Math.random()*100,

      left:
        Math.random()*100,


      width:
        120 + Math.random()*180,


      rotate:
        Math.random()*360,

    })
  );

}





export default function BackgroundPattern(){


  const lines = useMemo(
    ()=>generateLines(),
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










      {/* Main Digital Gradient */}



      <motion.div


        animate={{

          x:[
            "-10%",
            "15%",
            "-10%",
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

          duration:24,

          repeat:Infinity,

          ease:"easeInOut",

        }}



        className="
          absolute


          inset-[-25%]


          blur-[130px]



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












      {/* Animated Circuit Lines */}



      {
        lines.map((line)=>(


          <motion.div


            key={line.id}


            animate={{

              opacity:[
                0.1,
                0.5,
                0.1,
              ],


              scaleX:[
                1,
                1.2,
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



              via-blue-400/50



              to-transparent



              dark:via-cyan-400/40
            "

          />


        ))

      }













      {/* Floating Nodes */}



      {
        nodes.map((node,index)=>(



          <motion.div


            key={index}


            animate={{

              y:[
                0,
                -30,
                0,
              ],


              scale:[
                1,
                1.3,
                1,
              ],


              opacity:[
                0.3,
                0.8,
                0.3,
              ],

            }}



            transition={{

              duration:
                5 + index,


              repeat:Infinity,


              delay:index * 0.5,


              ease:"easeInOut",

            }}



            className="
              absolute


              h-4


              w-4



              rounded-full



              bg-cyan-400/70



              shadow-[0_0_20px_rgba(34,211,238,0.7)]



              dark:bg-blue-400/70
            "



            style={{

              top:node.top,

              left:node.left,

            }}

          />


        ))

      }












      {/* Abstract Grid */}



      <div

        className="
          absolute


          inset-0



          opacity-[0.15]



          dark:opacity-[0.08]



          [background-image:linear-gradient(90deg,#94a3b8_1px,transparent_1px),linear-gradient(#94a3b8_1px,transparent_1px)]



          [background-size:60px_60px]
        "

      />












      {/* Floating Glass Shapes */}



      <motion.div


        animate={{

          rotate:[
            0,
            360,
          ],


        }}



        transition={{

          duration:50,

          repeat:Infinity,

          ease:"linear",

        }}



        className="
          absolute


          -right-40


          top-20



          h-[420px]


          w-[420px]



          rounded-[40%]



          border



          border-blue-400/20



          bg-blue-400/5



          blur-sm



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

          duration:60,

          repeat:Infinity,

          ease:"linear",

        }}



        className="
          absolute


          -left-40


          bottom-10



          h-[350px]


          w-[350px]



          rounded-[35%]



          border



          border-violet-400/20



          bg-violet-400/5



          dark:border-violet-500/20
        "

      />













      {/* Bottom Gradient Fade */}



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