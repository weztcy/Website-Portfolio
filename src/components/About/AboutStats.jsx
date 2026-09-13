import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

import {
  BriefcaseBusiness,
  FolderGit2,
  FileBadge2,
  GraduationCap,
} from "lucide-react";


const stats = [
  {
    icon: BriefcaseBusiness,
    value: 1,
    suffix: "+",
    title: "Years Experience",
    target: "experience",
    color: "from-blue-500 to-cyan-500",
  },

  {
    icon: FolderGit2,
    value: 20,
    suffix: "+",
    title: "Projects Completed",
    target: "projects",
    color: "from-violet-500 to-fuchsia-500",
  },

  {
    icon: FileBadge2,
    value: 10,
    suffix: "+",
    title: "Certifications",
    target: "certification",
    color: "from-emerald-500 to-lime-500",
  },

  {
    icon: GraduationCap,
    value: 3.7,
    suffix: "",
    title: "GPA",
    target: "education",
    color: "from-orange-500 to-yellow-500",
  },
];



// =============================
// COUNT UP COMPONENT
// =============================

function CountUp({
  end,
  duration = 1200,
  decimals = 0,
  trigger,
}) {

  const [count, setCount] = useState(0);


  useEffect(() => {


    if (trigger === 0) {
      return;
    }


    let frame;
    let startTime = null;


    setCount(0);



    const animate = (time) => {


      if (!startTime) {
        startTime = time;
      }



      const progress = Math.min(
        (time - startTime) / duration,
        1
      );



      const ease =
        1 - Math.pow(1 - progress, 3);



      setCount(
        end * ease
      );



      if (progress < 1) {


        frame =
          requestAnimationFrame(
            animate
          );


      } else {


        setCount(end);


      }


    };



    frame =
      requestAnimationFrame(
        animate
      );



    return () => {

      cancelAnimationFrame(frame);

    };


  }, [
    trigger,
    end,
    duration
  ]);




  return decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count);

}







// =============================
// STAT CARD
// =============================

function StatCard({
  item,
  index,
}) {


  const cardRef = useRef(null);


  const countStarted = useRef(false);



  const [countTrigger, setCountTrigger] =
    useState(0);



  const isInView = useInView(
    cardRef,
    {
      once:true,
      amount:0.3,
    }
  );



  // trigger setelah card selesai muncul

  const handleCardAnimationComplete = () => {


    if (
      !isInView ||
      countStarted.current
    ) {
      return;
    }



    countStarted.current = true;



    setTimeout(() => {


      setCountTrigger(
        Date.now()
      );


    },0);


  };





  // trigger ketika hover

  const handleMouseEnter = () => {


    setCountTrigger(
      Date.now()
    );


  };





  const Icon = item.icon;





  const handleClick = () => {


    const target =
      document.getElementById(
        item.target
      );


    if (!target) {
      return;
    }



    const navbarOffset = 90;



    const position =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;



    window.scrollTo({

      top: position,

      behavior:"smooth",

    });


  };






  return (


    <motion.div


      ref={cardRef}



      initial={{
        opacity:0,
        y:40,
      }}



      animate={
        isInView
        ?
        {
          opacity:1,
          y:0,
        }
        :
        {}
      }



      transition={{
        delay:index * 0.15,
        duration:0.6,
      }}



      onAnimationComplete={
        handleCardAnimationComplete
      }



      whileHover={{
        y:-8,
        scale:1.02,
      }}



      onMouseEnter={
        handleMouseEnter
      }



      onClick={
        handleClick
      }



      role="button"

      tabIndex={0}



      onKeyDown={(e)=>{


        if(
          e.key === "Enter" ||
          e.key === " "
        ){

          e.preventDefault();

          handleClick();

        }


      }}



      className="
        group
        relative
        cursor-pointer
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


        hover:border-blue-500/40

        hover:shadow-2xl

        hover:shadow-blue-500/20


        sm:p-8


        dark:border-slate-800

        dark:bg-slate-900/60
      "

    >





      {/* Glow */}

      <div

        className="
          pointer-events-none

          absolute

          inset-0


          bg-gradient-to-br

          from-blue-500/5

          via-transparent

          to-cyan-500/10


          opacity-0


          transition-opacity


          duration-500


          group-hover:opacity-100
        "

      />






      <div

        className="
          relative
          z-10

          flex

          items-center

          gap-5


          sm:flex-col

          sm:items-start

          sm:gap-0
        "

      >





        {/* ICON */}

        <motion.div


          whileHover={{
            scale:1.08,
            rotate:4,
          }}



          className={`
            flex

            h-14

            w-14

            shrink-0

            items-center

            justify-center


            rounded-2xl


            bg-gradient-to-r

            ${item.color}


            text-white


            shadow-lg


            sm:mb-6

            sm:h-16

            sm:w-16
          `}


        >


          <Icon
            className="
              h-7
              w-7
            "
          />


        </motion.div>







        {/* CONTENT */}

        <div
          className="
            flex-1

            sm:w-full
          "
        >


          <h3

            className="
              text-3xl

              font-black

              leading-none


              text-slate-900


              sm:text-4xl


              dark:text-white
            "

          >


            <CountUp

              end={
                item.value
              }


              duration={
                1200
              }


              decimals={
                item.title === "GPA"
                ? 2
                : 0
              }


              trigger={
                countTrigger
              }

            />


            {
              item.suffix
            }


          </h3>





          <p

            className="
              mt-2

              text-sm

              font-medium


              text-slate-500


              dark:text-slate-400
            "

          >

            {
              item.title
            }

          </p>


        </div>



      </div>




    </motion.div>


  );

}







// =============================
// MAIN COMPONENT
// =============================

export default function AboutStats(){


  return (

    <div

      className="
        mt-12

        grid

        grid-cols-1

        gap-4


        sm:mt-20

        sm:grid-cols-2

        sm:gap-6


        xl:grid-cols-4
      "

    >

      {
        stats.map(
          (
            item,
            index
          ) => (

            <StatCard

              key={
                item.title
              }


              item={
                item
              }


              index={
                index
              }

            />

          )
        )
      }


    </div>

  );

}