import "./index.css";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

function SkillIcon() {
  return (
    <div className="skills-container ">
      <div className="icon container1">
        <TiHtml5 size={60}/>
        <span className="icon-name">HTML</span>
      </div>
      <div className="icon container2">
        <IoLogoCss3 size={60}/>
        <span className="icon-name">CSS</span>
      </div>
      <div className="icon container3">
        <FaJs size={60}/>
        <span className="icon-name">Javascript</span>
      </div>
      <div className="icon container4">
        <FaReact size={60}/>
        <span className="icon-name">Java</span>
      </div>
      <div className="icon container5">
        <FaPython                  size={60}/>
        <span className="icon-name">Java</span>
      </div>
      <div className="icon container6">
        <FaJava size={60}/>
        <span className="icon-name">Java</span>
      </div>
      <div className="icon container7">
        <SiSpringboot size={60}/>
        <span className="icon-name">Java</span>
      </div>
     
    </div>
  );
}

export default SkillIcon;
