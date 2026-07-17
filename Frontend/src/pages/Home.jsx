
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import LeetCode from "../components/LeetCode";
import GitHub from "../components/GitHub";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


import BackToTop from "../components/BackToTop";

const Home = () => {
  return (
    <div
      className="
        min-h-screen
        bg-white
        text-slate-900
        transition-colors
        duration-300
        dark:bg-slate-950
        dark:text-white
      "
    >
      <Navbar />

      <Hero />

      <Skills />

      <LeetCode />

    
      <Projects/>


      <GitHub/>

      <Contact/>

      <Footer />

      <BackToTop />

    </div>
  );
};

export default Home;