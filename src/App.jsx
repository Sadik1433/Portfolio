import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Service from "./components/Service";
import Contact from "./components/Contact";
import "./App.css";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, //   Animation duration (ms)
      once: false, // Animate only once
      offset: 100, // Start animation 100px before element enters viewport
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Hero />
        <Skills />
        <Project />
        <Service />
        <Contact />
        <ScrollTop />
        <Footer />
      </div>
    </>
  );
};

export default App;
