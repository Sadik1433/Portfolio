import "./index.css";
import { FaJava } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

function SkillIcon() {
  return (
    <div className="relative top-10 flex flex-col justify-center items-center skills-container ">
      <div className="flex flex-row justify-center items-center icon container1   border-2 rounded-2xl">
        <FaJava size={30} />
      </div>
      <div className="flex flex-row justify-center items-center icon container2    border-2 rounded-2xl">
        <TiHtml5 size={30} />
      </div>
      <div className="flex flex-row justify-center items-center icon container3    border-2 rounded-2xl">
        <FaCss3Alt size={30} />
      </div>
      <div className="flex flex-row justify-center items-center icon container4   border-2 rounded-2xl">
        <SiMysql size={30} />
      </div>
      <div className="flex flex-row justify-center items-center icon container5    border-2 rounded-2xl">
        <FaNodeJs size={30} />
      </div>
      <div className="flex flex-row justify-center items-center icon container6    border-2 rounded-2xl">
        <FaPython size={30} />
      </div>
      <div className="flex flex-row justify-center items-center icon container7   border-2 rounded-2xl">
        <FaReact size={30} />
      </div>
    </div>
  );
}

export default SkillIcon;
