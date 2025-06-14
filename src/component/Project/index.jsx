import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const Project = ({ blog }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { projectName, link, lang, purpose, desc2, description, color } = blog;
  const cardStyle = {
    backgroundImage: `url(${blog.profileImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontSize: "20px",
    color: `${color}`,
  };
  const fontStyle = {
    color: `${color}`,
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -120, y: 0 }}
        whileInView={{ opacity: 10, x: 10, y: 10 }} // exact location
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <li
          style={cardStyle}
          className="min-w-60 sm:w-50 min-h-40 shadow-lg shadow-blue-300 rounded-2xl md:w-80 "
        >
          <div className="card-body flex flex-col justify-center">
            <div className="project-card">
              <h1 className="text-2xl font-bold text-center text-orange-600 ">
                {projectName}
              </h1>
              <hr />
              {showDetails && (
                <div className="flex flex-col justify-center items-center text-[14px] font-bold">
                  <p> {description}</p>
                  <ul style={fontStyle}>
                    <li>👉{desc2}</li>
                    <li>👉{lang}</li>
                    <li>👉{purpose}</li>
                  </ul>
                </div>
              )}

              <div className="flex justify-between  mt-6">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="btn btn-primary w-20 "
                >
                  {showDetails ? "Hide " : "More"}
                </button>

                <button className="btn btn-primary w-20" >
                    Open
                </button>
              </div>
            </div>
          </div>
        </li>
      </motion.div>
    </AnimatePresence>
  );
};
export default Project;
