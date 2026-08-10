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
  return (
    <>
      <div
        className="
          h-screen
          overflow-y-auto
          scroll-smooth
          scroll-pt-10
          [overscroll-behavior-y:contain]
        "
      >
        <main>
          <section>
            <Hero />
          </section>

          <section>
            <About />
          </section>

          <section>
            <Experience />
          </section>

          <section>
            <Education />
          </section>

          <section>
            <Skills />
          </section>

          <section>
            <Certification />
          </section>

          <section>
            <Publication />
          </section>

          <section>
            <Projects />
          </section>

          <section>
            <Language />
          </section>

          <section>
            <Contact />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}