import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import "./index.css";

const Project = ({ blog }) => {
  const { projectName, lang, purpose } = blog;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -100, y: 0 }}
        whileInView={{ opacity: 10, x: 10, y: 10 }} // exact location
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
      >
        <div className="card">
          <div className="card-details">
            <p className="text-title">{projectName}</p>
            <p className="text-body">{lang}</p>
            <p className="text-body">{purpose}</p>
          </div>
          <button className="card-button">Open</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Project;
