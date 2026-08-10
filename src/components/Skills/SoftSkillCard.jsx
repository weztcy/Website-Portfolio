import { motion } from "motion/react";


export default function SoftSkillCard({ skill }) {

  const Icon = skill.icon;


  return (

    <motion.div

      initial={{
        opacity:0,
        y:30,
        scale:0.95,
      }}


      whileInView={{
        opacity:1,
        y:0,
        scale:1,
      }}


      viewport={{
        once:true,
        amount:0.3,
      }}


      whileHover={{
        y:-6,
        scale:1.05,
      }}


      transition={{
        duration:0.5,
      }}



      className="
        group

        inline-flex

        w-fit

        items-center

        gap-3


        rounded-2xl


        border


        border-slate-200


        bg-white/90


        px-6

        py-4


        shadow-md


        backdrop-blur-xl


        transition-all


        duration-300



        hover:border-blue-400/50


        hover:shadow-xl


        hover:shadow-blue-500/20



        dark:border-slate-800


        dark:bg-slate-900/80
      "

    >



      {/* Icon */}

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


          transition-transform


          duration-300


          group-hover:rotate-12
        "

      >

        <Icon
          size={20}
        />


      </div>






      {/* Skill Name */}

      <span

        className="
          whitespace-nowrap


          text-base


          font-semibold


          text-slate-700


          dark:text-slate-200
        "

      >

        {skill.name}

      </span>




    </motion.div>

  );

}