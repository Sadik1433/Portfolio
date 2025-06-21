import SocialMedia from "../SocialMedia";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Image from "../Image";
import './index.css'

function LandingPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity:0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
      >
        <section id="home">
          <div className="landing-container">
            <div className="image-container">
              <Image />
            </div>
            <div className="container-1">
                <div className="text-container">
                  <h1 className="name-head">Hi, I am   
                  <br/>
                  <span className="name-text">
                    Sadik
                  </span>
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
                  <button className="resume-btn">
                    Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}

export default LandingPage;
