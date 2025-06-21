import { BiLogoInstagram } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import './index.css'

const SocialMedia = () => {
  return (
    <ul className="social-container">
      <li className="icon-content">
        <a
          href="https://linkedin.com/"
          aria-label="LinkedIn"
          data-social="linkedin"
        >
          <div className="filled"></div>
          <FaLinkedin className="icons"/>
        </a>
        <div className="tooltip">LinkedIn</div>
      </li>
      <li className="icon-content">
        <a
          href="https://www.github.com/"
          aria-label="GitHub"
          data-social="github"
        >
          <div className="filled"></div>
          <FaGithub className="icons"/>
        </a>
        <div className="tooltip">GitHub</div>
      </li>
      <li className="icon-content">
        <a
          href="https://www.instagram.com/"
          aria-label="Instagram"
          data-social="instagram"
        >
          <div className="filled"></div>
            <BiLogoInstagram className="icons"/>
        </a>
        <div className="tooltip">Instagram</div>
      </li>
      <li className="icon-content">
        <a
          href="https://youtube.com/"
          aria-label="Youtube"
          data-social="youtube"
        >
          <div className="filled"></div>
          <FaYoutube className="icons" />
        </a>
        <div className="tooltip">Youtube</div>
      </li>
    </ul>
  );
};
export default SocialMedia