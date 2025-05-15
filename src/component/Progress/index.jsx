import React from "react";
import { motion } from "framer-motion";

function Progress() {
  return (
    <motion.div
       initial={{ opacity: 20, x: 150 }} //right to left
        whileInView={{ opacity: 1, x: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
    >
      <div className="flex flex-col justify-center items-center mt-5 p-4 gap-3">
        <div className="flex flex-row  gap-1.5">
          <p className="w-20 text-lg ">Java</p>
          <progress
            className="progress progress-info w-70 h-3"
            value={70}
            max="100"
          ></progress>
        </div>
        <div className="flex flex-row items-center gap-1.5">
          <p className="w-20 text-lg ">Python</p>
          <progress
            className="progress progress-info w-70 h-3"
            value={70}
            max="100"
          ></progress>
        </div>
        <div className="flex flex-row items-center gap-1.5">
          <p className="w-20  text-lg ">HTML</p>
          <progress
            className="progress progress-info w-70 h-3"
            value={99}
            max="100"
          ></progress>
        </div>
        <div className="flex flex-row items-center gap-1.5">
          <p className="w-20 text-lg ">CSS</p>
          <progress
            className="progress progress-info w-70 h-3"
            value={95}
            max="100"
          ></progress>
        </div>
        <div className="flex flex-row items-center gap-1.5">
          <p className="w-20 text-lg ">React</p>
          <progress
            className="progress progress-info w-70 h-3"
            value={90}
            max="100"
          ></progress>
        </div>
        <div className="flex flex-row items-center gap-1.5">
          <p className="w-20 text-lg ">SQl</p>
          <progress
            className="progress progress-info w-70 h-3"
            value={95}
            max="100"
          ></progress>
        </div>
        
        <div className="flex flex-row items-center gap-1.5">
          <p className="w-20 text-lg ">MongoBD</p>
          <progress
            className="progress progress-info w-70 h-3"
            value={9}
            max="100"
          ></progress>
        </div>
      </div>
    </motion.div>
  );
}

export default Progress;
