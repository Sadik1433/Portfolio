import Navbar from "./component/Navbar/index.jsx";
import LandingPage from "./component/LandingPage/index.jsx";
import ProjectContainer from "./component/ProjectContainer/index.jsx";
import SkillContainer from "./component/SkillContainer/index.jsx";
import Contact from "./component/Contact/index.jsx";
import Footer from "./component/Footer/index.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <LandingPage />
        <SkillContainer />
        <ProjectContainer />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
