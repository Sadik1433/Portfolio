import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function SkillDescription() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: -10, x: -150 }}
        whileInView={{ opacity: 100, x: 10, y: 100 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0">
          <h1 className="text-3xl text-left indent-10 text-blue-700 font-bold mask-linear-from-stone-100 mb-3">About Me!</h1>
          <p className="text-xl text-justify">
            Hello! I'm a passionate and enthusiastic <strong>Web
            Developer </strong> with a strong foundation in
          <strong className="text-blue-200"> HTML, CSS, JavaScript, Python,Java,Sql,MangoDB, React .</strong>
            <br/>
             Even though I’m at the beginning of my
            professional journey, I’ve already built several personal projects
            that reflect my love for clean, functional, and user-centered
            solutions. I enjoy problem-solving, continuous learning, and
            collaborating on exciting tech ideas. I’m currently looking for
            opportunities where I can contribute, grow, and learn from industry
            professionals.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SkillDescription;
