import { useRef } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Certification from "./components/Certification/Certification";
import Publication from "./components/Publication/Publication";
import Projects from "./components/Projects/Projects";
import Language from "./components/Language/Language";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  const scrollContainerRef = useRef(null);
  const aboutRef = useRef(null);
  const isScrollingRef = useRef(false);

  const handleHeroWheel = (e) => {
    // Hanya tangkap scroll KE BAWAH
    if (e.deltaY <= 0) return;

    if (isScrollingRef.current) return;

    e.preventDefault();

    const container = scrollContainerRef.current;
    const about = aboutRef.current;

    if (!container || !about) return;

    isScrollingRef.current = true;

    container.scrollTo({
      top: about.offsetTop,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 700);
  };

  return (
    <>
      <div
        ref={scrollContainerRef}
        className="
          h-screen
          overflow-y-auto
          scroll-smooth
          [overscroll-behavior-y:contain]
        "
      >
        <main>
          {/* =========================
              HERO
          ========================== */}
          <section onWheel={handleHeroWheel}>
            <Hero />
          </section>

          {/* =========================
              ABOUT
              NORMAL SCROLL
          ========================== */}
          <section ref={aboutRef}>
            <About />
          </section>

          {/* =========================
              SEMUA NORMAL SCROLL
          ========================== */}
          <Experience />

          <Education />

          <Skills />

          <Certification />

          <Publication />

          <Projects />

          <Language />

          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}