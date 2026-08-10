import { motion } from "motion/react";


const polygons = [
  {
    size: "h-44 w-44",
    position: "top-20 left-[10%]",
    rotate: "rotate-12",
    delay: 0,
  },

  {
    size: "h-64 w-64",
    position: "-top-10 right-[8%]",
    rotate: "-rotate-12",
    delay: 1.5,
  },

  {
    size: "h-36 w-36",
    position: "bottom-24 left-[35%]",
    rotate: "rotate-45",
    delay: 2,
  },

  {
    size: "h-52 w-52",
    position: "bottom-10 right-[20%]",
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





      {/* Animated Mesh Gradient */}

      <motion.div

        animate={{
          backgroundPosition:[
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],

          scale:[
            1,
            1.15,
            1,
          ],
        }}


        transition={{
          duration:30,

          repeat:Infinity,

          ease:"easeInOut",
        }}


        className="
          absolute

          inset-[-20%]

          blur-[130px]

          opacity-50

          dark:opacity-30


          bg-[length:300%_300%]


          bg-gradient-to-br

          from-blue-300/40

          via-cyan-300/30

          to-violet-300/40



          dark:from-blue-600/30

          dark:via-cyan-500/20

          dark:to-violet-600/30
        "
      />







      {/* Floating Polygon */}

      {
        polygons.map(
          (polygon,index)=>(

            <motion.div

              key={index}


              animate={{

                y:[
                  0,
                  -40,
                  0,
                ],

                rotate:[
                  0,
                  20,
                  0,
                ],

                scale:[
                  1,
                  1.1,
                  1,
                ],

              }}


              transition={{

                duration:
                  12 + index * 2,

                repeat:
                  Infinity,

                delay:
                  polygon.delay,

                ease:
                  "easeInOut",

              }}


              className={`
                absolute

                ${polygon.position}

                ${polygon.size}

                ${polygon.rotate}


                rounded-[3rem]

                border


                border-blue-300/20


                bg-blue-400/5


                backdrop-blur-xl



                dark:border-blue-500/20

                dark:bg-blue-500/10
              `}
            />

          )
        )
      }







      {/* Abstract Lines */}

      <motion.div

        animate={{
          x:[
            -100,
            100,
            -100,
          ],

          rotate:[
            0,
            10,
            0,
          ],
        }}


        transition={{

          duration:25,

          repeat:Infinity,

          ease:"easeInOut",

        }}


        className="
          absolute


          left-1/2

          top-1/3


          h-[500px]

          w-[900px]


          -translate-x-1/2


          rounded-full


          border


          border-cyan-300/20


          dark:border-cyan-500/10
        "
      />







      {/* Dot Matrix */}

      <div

        className="
          absolute

          inset-0


          opacity-[0.15]


          dark:opacity-[0.08]


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