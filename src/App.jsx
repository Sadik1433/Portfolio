import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import Navbar from "./component/Navbar/index.jsx";
import Home from "./component/Home/index.jsx";
import ProjectContainer from "./component/ProjectContainer/index.jsx";
import SkillContainer from "./component/SkillContainer/index.jsx";
import Footer from "./component/Footer/index.jsx";
import Services from "./component/Services/index.jsx";
import ContactForm from "./component/ContactForm/index.jsx";

function App() {
 
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="app-container"> 
        <Home />
        <SkillContainer />
        <ProjectContainer />
        <Services />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
