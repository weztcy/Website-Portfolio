import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

import navLinksData from "./navLinksData";
import useScrollSpy from "./useScrollSpy";


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  const sectionIds = navLinksData.map(
    (item) => item.id
  );


  const activeSection = useScrollSpy(sectionIds);


  return (

    <motion.nav

      initial={{
        y: -80,
      }}

      animate={{
        y: 0,
      }}

      transition={{
        duration: 0.5,
      }}


      className="
        fixed
        top-0
        left-0
        z-50
        w-full

        border-b
        border-slate-200/40

        bg-white/80
        backdrop-blur-xl

        transition-colors
        duration-300

        dark:border-white/10
        dark:bg-slate-900/70
      "

    >


      <div

        className="
          mx-auto

          flex
          max-w-7xl

          items-center
          justify-between

          px-6
          py-4

          sm:px-8

          lg:px-10
        "

      >


        {/* Logo */}

        <Logo />



        {/* Right Section */}

        <div

          className="
    flex
    items-center

    gap-4
    sm:gap-6
  "

        >


          {/* Desktop Navigation */}

          <div className="hidden lg:block">

            <NavigationMenu

              activeSection={activeSection}

            />

          </div>



          {/* Mobile Menu Button */}


{/* Theme Button */}

          <ThemeToggle />

          <button

            onClick={() => setMenuOpen(!menuOpen)}

            className="
              flex
              items-center
              justify-center

              lg:hidden
            "

            aria-label="Toggle menu"

          >

            {
              menuOpen ? (

                <X

                  size={26}

                  className="
                    text-slate-900
                    dark:text-white
                  "

                />

              ) : (

                <Menu

                  size={26}

                  className="
                    text-slate-900
                    dark:text-white
                  "

                />

              )

            }

          </button>




          



        </div>


      </div>




      {/* Mobile Dropdown Menu */}

      <MobileMenu

        menuOpen={menuOpen}

        setMenuOpen={setMenuOpen}

      />


    </motion.nav>


  );

}