import { motion } from "motion/react";


const floatingCards = [
  {
    size: "h-44 w-64",
    position: "top-[15%] left-[8%]",
    rotate: "-rotate-12",
    delay: 0,
  },

  {
    size: "h-52 w-72",
    position: "top-[20%] right-[10%]",
    rotate: "rotate-12",
    delay: 2,
  },

  {
    size: "h-40 w-60",
    position: "bottom-[15%] left-[20%]",
    rotate: "rotate-6",
    delay: 1,
  },

  {
    size: "h-48 w-64",
    position: "bottom-[12%] right-[18%]",
    rotate: "-rotate-6",
    delay: 3,
  },
];



export default function BackgroundPattern() {


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







      {/* Animated Gradient Beam */}

      <motion.div

        animate={{

          x:[
            "-20%",
            "20%",
            "-20%",
          ],


          y:[
            "0%",
            "15%",
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


          inset-[-20%]


          blur-[140px]


          opacity-50


          dark:opacity-30



          bg-gradient-to-br


          from-blue-300/40


          via-cyan-300/30


          to-violet-400/40



          dark:from-blue-600/30


          dark:via-cyan-500/20


          dark:to-violet-600/30
        "

      />









      {/* Floating Glass Certificate Shapes */}

      {
        floatingCards.map(
          (item,index)=>(


            <motion.div

              key={index}



              animate={{

                y:[
                  0,
                  -35,
                  0,
                ],


                rotate:[
                  0,
                  8,
                  0,
                ],


                opacity:[
                  0.25,
                  0.55,
                  0.25,
                ],

              }}



              transition={{

                duration:
                  10 + index * 2,


                repeat:Infinity,


                delay:item.delay,


                ease:"easeInOut",

              }}



              className={`
                absolute


                ${item.position}


                ${item.size}


                ${item.rotate}



                rounded-3xl



                border


                border-blue-300/30



                bg-white/20



                backdrop-blur-xl



                shadow-xl



                dark:border-blue-500/20



                dark:bg-blue-500/10
              `}

            />


          )
        )
      }









      {/* Perspective Grid */}

      <div

        className="
          absolute


          inset-0



          opacity-[0.12]



          dark:opacity-[0.08]



          [background-image:linear-gradient(rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.3)_1px,transparent_1px)]



          [background-size:45px_45px]



          [transform:perspective(700px)_rotateX(60deg)]



          origin-center
        "

      />









      {/* Floating Light Orbs */}

      <motion.div

        animate={{

          x:[
            0,
            80,
            0,
          ],


          y:[
            0,
            -60,
            0,
          ],


          scale:[
            1,
            1.2,
            1,
          ],

        }}



        transition={{

          duration:18,

          repeat:Infinity,

          ease:"easeInOut",

        }}



        className="
          absolute


          right-[-120px]


          top-32



          h-[420px]


          w-[420px]



          rounded-full



          bg-cyan-300/20



          blur-[140px]



          dark:bg-cyan-500/10
        "

      />








      <motion.div

        animate={{

          x:[
            0,
            -60,
            0,
          ],


          y:[
            0,
            40,
            0,
          ],


          scale:[
            1,
            1.15,
            1,
          ],

        }}



        transition={{

          duration:22,

          repeat:Infinity,

          ease:"easeInOut",

        }}



        className="
          absolute


          left-[-100px]


          bottom-20



          h-[350px]


          w-[350px]



          rounded-full



          bg-violet-300/20



          blur-[150px]



          dark:bg-violet-500/10
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