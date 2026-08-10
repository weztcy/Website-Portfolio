import { motion } from "motion/react";

import SocialMedia from "../Hero/SocialLinks";



export default function Footer() {


  return (

    <footer


      className="
        relative

        overflow-hidden


        border-t


        border-slate-200


        bg-slate-50


        py-8



        dark:border-slate-800


        dark:bg-slate-950

      "


    >






      <div


        className="
          mx-auto

          flex

          max-w-7xl

          flex-col


          items-center


          justify-between


          gap-6


          px-6



          md:flex-row


          sm:px-8


          lg:px-10
        "


      >







        {/* Portfolio Name & Copyright */}



        <motion.div



          initial={{

            opacity:0,

            x:-30,

          }}



          whileInView={{

            opacity:1,

            x:0,

          }}



          viewport={{

            once:true,

          }}



          transition={{

            duration:0.6,

          }}



          className="
            text-center

            md:text-left
          "


        >





          <h3


            className="
              text-xl

              font-black

              bg-gradient-to-r

              from-blue-600

              via-cyan-500

              to-violet-500


              bg-clip-text

              text-transparent
            "


          >


            Portfolio


          </h3>







          <p


            className="
              mt-2

              text-sm


              text-slate-500


              dark:text-slate-400
            "


          >


            © {new Date().getFullYear()} Yohanes Dimas Pratama.

            <br />

            All rights reserved.


          </p>






        </motion.div>













        {/* Social Media */}



        <motion.div



          initial={{

            opacity:0,

            x:30,

          }}



          whileInView={{

            opacity:1,

            x:0,

          }}



          viewport={{

            once:true,

          }}



          transition={{

            duration:0.6,

          }}



          className="
            flex

            justify-center
          "


        >



          <SocialMedia />


        </motion.div>







      </div>







    </footer>


  );

}