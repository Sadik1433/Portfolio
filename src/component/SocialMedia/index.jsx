import { BsInstagram } from "react-icons/bs";
import "./index.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div>
      <ul class="wrapper">
        <li class="icon linkedin">
          <span class="tooltip">LinkedIn</span>
          <FaLinkedin className="app-icon" />
        </li>
        <li class="icon Github">
          <span class="tooltip">Github</span>
          <FaGithub className="app-icon" />
        </li>
        <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <BsInstagram className="app-icon"/>
        </li>
        <li class="icon whatsapp">
          <span class="tooltip">WhatsApp</span>
          <FaWhatsapp className="app-icon"/>
        </li>

      </ul>
    </div>
  );
};

export default SocialMedia;
