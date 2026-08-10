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
      <Navbar />

      <div
        className="
          h-screen
          overflow-y-auto

          scroll-smooth
          snap-y
          snap-proximity

          scroll-pt-10

          [overscroll-behavior-y:contain]
        "
      >
        <main>
          <section className="snap-start">
            <Hero />
          </section>

          <section className="snap-start">
            <About />
          </section>

          <section className="snap-start">
            <Experience />
          </section>

          <section className="snap-start">
            <Education />
          </section>

          <section className="snap-start">
            <Skills />
          </section>

          <section className="snap-start">
            <Certification />
          </section>

          <section className="snap-start">
            <Publication />
          </section>

          <section className="snap-start">
            <Projects />
          </section>

          <section className="snap-start">
            <Language />
          </section>

          <section className="snap-start">
            <Contact />
          </section>
        </main>

        <footer className="snap-start">
          <Footer />
        </footer>
      </div>
    </>
  );
}
