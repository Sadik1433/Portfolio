import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function SkillDescription() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: -10, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className="min-h-70 p-3">
          <h1 className="text-3xl text-center indent-10 text-blue-700 font-bold mask-linear-from-stone-100  mb-3">
            About Me!
          </h1>
          <p className="text-center md:text-xl">
            Hello! I'm a passionate and enthusiastic{" "}
            <strong>Web Developer </strong> with a strong foundation in
            <strong className="text-blue-200">
              HTML, CSS, JavaScript, Python,Java,Sql,MangoDB, React .
            </strong>
            <br />
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
