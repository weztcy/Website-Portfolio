import { motion } from "motion/react";

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { Mail } from "lucide-react";


const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/yohanes-dimas",
    color:
      "hover:text-blue-600 hover:border-blue-500 hover:bg-blue-500/10",
  },

  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/weztcy",
    color:
      "hover:text-slate-900 dark:hover:text-white hover:border-slate-500 hover:bg-slate-500/10",
  },

  {
    name: "Email",
    icon: Mail,
    url:
      "https://mail.google.com/mail/?view=cm&fs=1&to=yohanesdimaspratama@gmail.com",
    color:
      "hover:text-red-500 hover:border-red-400 hover:bg-red-500/10",
  },

  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url:
      "https://wa.me/6281337272669?text=Halo%20Yohanes%20Dimas%20Pratama,%20saya%20baru%20melihat%20website%20portfolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut.",
    color:
      "hover:text-green-500 hover:border-green-400 hover:bg-green-500/10",
  },

  // {
  //   name: "Instagram",
  //   icon: FaInstagram,
  //   url:
  //     "https://instagram.com/yodimpra_",
  //   color:
  //     "hover:text-pink-500 hover:border-pink-400 hover:bg-pink-500/10",
  // },
];



export default function SocialLinks() {

  return (

    <motion.div

      initial={{
        opacity:0,
        y:20
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        delay:0.6,
        duration:0.6
      }}

      className="
        mt-6
        flex
        items-center
        gap-3
      "
    >


      {
        socialLinks.map((item,index)=>{


          const Icon = item.icon;


          return (

            <motion.a

              key={item.name}

              href={item.url}

              target="_blank"

              rel="noopener noreferrer"

              initial={{
                opacity:0,
                scale:0.8
              }}

              animate={{
                opacity:1,
                scale:1
              }}

              transition={{
                delay:0.7 + index * 0.1
              }}

              whileHover={{
                y:-5,
                scale:1.12
              }}

              whileTap={{
                scale:0.9
              }}

              className={`
                group
                relative

                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-xl

                border

                border-slate-300
                dark:border-slate-700

                bg-white/50
                dark:bg-slate-900/50

                text-slate-600
                dark:text-slate-400

                backdrop-blur-md

                transition-all
                duration-300

                ${item.color}
              `}

            >

              <Icon size={20}/>


              {/* Tooltip */}

              <span
                className="
                  pointer-events-none

                  absolute

                  -top-10

                  scale-0

                  rounded-lg

                  bg-slate-900

                  px-3
                  py-1

                  text-xs

                  font-medium

                  text-white

                  opacity-0

                  transition-all

                  duration-300

                  group-hover:scale-100

                  group-hover:opacity-100
                "
              >
                {item.name}
              </span>


            </motion.a>

          );

        })
      }


    </motion.div>

  );
}