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

      <main>
        <Hero />
        <About />
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
    </>
  );
}