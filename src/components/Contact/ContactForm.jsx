import { useRef, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

import {
  User,
  Mail,
  FileText,
  MessageSquare,
  Send,
  LoaderCircle,
} from "lucide-react";





export default function ContactForm() {


  const form = useRef();



  const [loading,setLoading] = useState(false);

  const [status,setStatus] = useState("");





  const sendEmail = async (e)=>{


    e.preventDefault();



    setLoading(true);

    setStatus("");





    try{


      await emailjs.sendForm(

        "YOUR_SERVICE_ID",

        "YOUR_TEMPLATE_ID",

        form.current,

        "YOUR_PUBLIC_KEY"

      );





      setStatus(
        "Message sent successfully!"
      );



      form.current.reset();





    }catch(error){


      console.error(error);



      setStatus(
        "Failed to send message. Please try again."
      );


    }



    finally{


      setLoading(false);


    }



  };







  const inputClass = `

    w-full

    rounded-2xl

    border

    border-slate-200

    bg-white/70

    px-5

    py-4

    text-slate-900

    outline-none

    transition-all

    duration-300


    placeholder:text-slate-400


    focus:border-blue-500

    focus:ring-4

    focus:ring-blue-500/20


    dark:border-slate-700

    dark:bg-slate-900/60

    dark:text-white

    dark:placeholder:text-slate-500

  `;









  return (


    <motion.form



      ref={form}



      onSubmit={sendEmail}



      initial={{

        opacity:0,

        y:50,

      }}



      whileInView={{

        opacity:1,

        y:0,

      }}



      viewport={{

        once:true,

        amount:0.2,

      }}



      transition={{

        duration:0.7,

      }}



      className="

        group

        relative

        overflow-hidden


        rounded-3xl


        border


        border-slate-200


        bg-white/70


        p-8


        shadow-xl


        backdrop-blur-xl


        transition-all


        duration-300



        hover:shadow-2xl


        hover:shadow-blue-500/20



        dark:border-slate-800


        dark:bg-slate-900/60



        md:p-10

      "

    >







      {/* Hover Glow */}



      <div


        className="

          absolute

          inset-0

          opacity-0

          transition-opacity

          duration-500

          group-hover:opacity-100

          bg-gradient-to-br

          from-blue-500/5

          via-transparent

          to-cyan-500/10

        "

      />











      <div className="relative z-10 space-y-6">







        {/* Name */}



        <InputField

          icon={User}

          name="name"

          placeholder="Your name"

          type="text"

        />











        {/* Email */}



        <InputField

          icon={Mail}

          name="email"

          placeholder="Your email"

          type="email"

        />











        {/* Subject */}



        <InputField

          icon={FileText}

          name="subject"

          placeholder="Subject"

          type="text"

        />











        {/* Message */}



        <div className="relative">



          <MessageSquare

            size={20}

            className="

              absolute

              left-5

              top-5

              text-slate-400

            "

          />





          <textarea



            name="message"



            rows="5"



            required



            placeholder="Your message"



            className={`

              ${inputClass}

              resize-none

              pl-14

            `}

          />



        </div>












        {/* Button */}



        <motion.button



          whileHover={{

            y:-3,

            scale:1.02,

          }}



          whileTap={{

            scale:0.97,

          }}



          disabled={loading}



          className="

            flex

            w-full

            items-center

            justify-center

            gap-3


            rounded-2xl


            bg-gradient-to-r


            from-blue-600


            to-cyan-500


            px-6


            py-4


            font-bold


            text-white


            shadow-lg


            shadow-blue-500/30


            transition-all


            disabled:cursor-not-allowed


            disabled:opacity-70

          "

        >





          {

            loading

            ?

            <>

              <LoaderCircle

                size={22}

                className="animate-spin"

              />

              Sending...

            </>


            :

            <>

              Send Message

              <Send size={20}/>

            </>

          }



        </motion.button>









        {/* Status */}



        {
          status && (


            <motion.p


              initial={{

                opacity:0,

                y:10,

              }}


              animate={{

                opacity:1,

                y:0,

              }}



              className="

                text-center

                text-sm

                font-medium

                text-blue-600

                dark:text-cyan-300

              "

            >

              {status}

            </motion.p>


          )
        }






      </div>







    </motion.form>


  );

}









function InputField({

  icon:Icon,

  name,

  placeholder,

  type,

}){


  return (

    <div className="relative">


      <Icon

        size={20}

        className="

          absolute

          left-5

          top-1/2

          -translate-y-1/2

          text-slate-400

        "

      />



      <input


        name={name}


        type={type}


        required


        placeholder={placeholder}


        className="

          w-full

          rounded-2xl

          border

          border-slate-200

          bg-white/70

          px-5

          py-4

          pl-14

          text-slate-900

          outline-none

          transition-all

          duration-300


          placeholder:text-slate-400


          focus:border-blue-500

          focus:ring-4

          focus:ring-blue-500/20


          dark:border-slate-700

          dark:bg-slate-900/60

          dark:text-white


          dark:placeholder:text-slate-500

        "

      />


    </div>

  );

}