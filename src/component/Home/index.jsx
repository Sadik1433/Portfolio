import avatar from "../Assets/avatar.png";
import { FaDownload } from "react-icons/fa";
import "./index.css";
import SocialMedia from "../SocialMedia";

function LandingPage() {
  
  return (
    <section id="home">
      <div className="landing-container" data-aos="fade-right">
        <div className="bio-container">
          <div className="text-container">
            <p className="name-head">
              Hi, I am
              <br />
              <span className="profile-name">S.Sadik</span>
            </p>
            <p className="para-text">
              I'm a passionate Web Developer with expertise in React, Java,
              python. I love building intuitive and efficient solutions that
              make a difference.
            </p>
            <div className="social-icon-container">
              <SocialMedia />
            </div>
            <div className="btn-container">
             <a href="/Sadik_Resume.pdf" download="Sadik_Resume.pdf" >
              <button className="resume-btn">
           Resume  <FaDownload className="resume-icon"/>
              </button>
        </a> 
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={avatar} alt="image" data-aos="fade" />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
