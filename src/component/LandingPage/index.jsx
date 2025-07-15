import avatar from "../Assets/avatar.png";
import "./index.css";
import SocialMedia from "../SocialMedia";

function LandingPage() {
  return (
    <section id="home">
      <div className="landing-container" data-aos="fade-right">
        <div className="bio-container">
          <div className="text-container">
            <h1 className="name-head">
              Hi, I am
              <br />
              <span className="typewriter">Sadik</span>
            </h1>
            <p className="para-text">
              I'm a passionate Web Developer with expertise in React, Java,
              python. I love building intuitive and efficient solutions that
              make a difference.
            </p>
            <div className="social-icon-container">
              <SocialMedia />
            </div>
            <div className="btn-container">
              <button className="resume-btn">Resume</button>
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
