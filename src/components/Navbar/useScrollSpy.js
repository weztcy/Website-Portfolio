import { useEffect, useState } from "react";


export default function useScrollSpy(sectionIds) {


  const [activeSection, setActiveSection] = useState("home");



  useEffect(() => {


    const sections = sectionIds

      .map((id) => document.getElementById(id))

      .filter(Boolean);




    if (!sections.length) return;





    const observer = new IntersectionObserver(


      (entries) => {


        const visibleSections = entries

          .filter((entry) => entry.isIntersecting)

          .sort(

            (a, b) =>

              b.intersectionRatio -

              a.intersectionRatio

          );



        if (visibleSections.length > 0) {


          setActiveSection(

            visibleSections[0].target.id

          );


        }


      },


      {


        threshold: [

          0.1,

          0.25,

          0.5,

          0.75,

        ],



        rootMargin:

          "-100px 0px -40% 0px",

      }


    );






    sections.forEach((section) => {


      observer.observe(section);


    });






    return () => {


      sections.forEach((section) => {


        observer.unobserve(section);


      });


    };



  }, [sectionIds]);




  return activeSection;


}