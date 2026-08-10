import { motion } from "motion/react";
import { useEffect, useState } from "react";


const words = [
  "Data Analyst",
  "Web Developer",
  "Machine Learning Enthusiast",
  "UI/UX Designer",
];


export default function AnimatedText() {

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState("typing");



  useEffect(() => {

    const currentWord = words[wordIndex];


    let speed = 50;


    if (phase === "deleting") {
      speed = 25;
    }


    if (phase === "holding") {
      speed = 1500;
    }



    const timer = setTimeout(() => {



      // ======================
      // Typing
      // ======================

      if (phase === "typing") {


        const next =
          currentWord.slice(
            0,
            displayText.length + 1
          );


        setDisplayText(next);



        if (next === currentWord) {

          setPhase("holding");

        }

      }



      // ======================
      // Holding
      // ======================

      else if (phase === "holding") {


        setPhase("deleting");


      }



      // ======================
      // Deleting
      // ======================

      else if (phase === "deleting") {


        const next =
          currentWord.slice(
            0,
            displayText.length - 1
          );


        setDisplayText(next);



        if (next === "") {


          setWordIndex(
            (prev)=>
              (prev + 1) % words.length
          );


          setPhase("typing");


        }


      }



    }, speed);



    return () => clearTimeout(timer);



  }, [
    displayText,
    phase,
    wordIndex
  ]);



  return (

    <div className="mt-6 flex items-center">

      <motion.h2
        animate={{
          opacity:1
        }}

        className="
          text-2xl
          font-semibold

          text-slate-700
          dark:text-slate-300

          lg:text-3xl
        "
      >
        {displayText}
      </motion.h2>


      <motion.span
        animate={{
          opacity:[1,0,1]
        }}

        transition={{
          duration:.8,
          repeat:Infinity
        }}

        className="
          ml-1
          text-3xl
          font-bold
          text-blue-500
        "
      >
        |
      </motion.span>

    </div>

  );
}