import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Service from "./components/Service";
import Contact from "./components/Contact";
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
        <Hero />
        <Skills />
        <Project />
        <Service />
        <Contact />
    </>
  );
};

export default App;
