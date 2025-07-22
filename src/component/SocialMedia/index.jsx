import { BsInstagram } from "react-icons/bs";
import "./index.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div>
      <ul className="wrapper">
        <li className="icon linkedin">
          <span className="tooltip">LinkedIn</span>
          <FaLinkedin className="app-icon" />
        </li>
        <li className="icon Github">
          <span className="tooltip">Github</span>
          <FaGithub className="app-icon" />
        </li>
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <BsInstagram className="app-icon"/>
        </li>
        <li className="icon whatsapp">
          <span className="tooltip">WhatsApp</span>
          <FaWhatsapp className="app-icon"/>
        </li>

      </ul>
    </div>
  );
};

export default SocialMedia;
