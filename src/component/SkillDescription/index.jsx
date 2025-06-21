import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import './index.css'

function SkillDescription() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: -0, x: -10 }}
        whileInView={{ opacity: 1, x: 10 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className="description-container">
          <h1 className="about-head">
            About Me
          </h1>
          <p className="desc-para">
            Hello! I'm a passionate and enthusiastic
            <strong> Web Developer </strong> with a strong foundation in  
            <strong>
                  HTML, CSS, JavaScript, Python,Java,Sql,MangoDB, React.
            </strong>
            Even though I’m at the beginning of my professional journey, I’ve
            already built several personal projects that reflect my love for
            clean, functional, and user-centered solutions.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SkillDescription;
