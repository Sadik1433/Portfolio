import { motion } from "framer-motion";

function Progress() {
  return (
    <motion.div
       initial={{ opacity: 20, x: 150 }} //right to left
        whileInView={{ opacity: 1, x: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
    >
      <div className="flex flex-col  mt-5 p-4 gap-2">
        <div className="flex flex-row text-lg gap-1.5">
          <p className="w-20 ">Java</p>
          <progress
            className="progress progress-info w-60 h-3  md:w-70"
            value={70}
            max="100"
          ></progress>
        </div>
        <div className="flex flex-row items-center gap-1.5">
          <p className="w-20 ">Python</p>
          <progress
            className="progress progress-info w-60 h-3  md:w-70"
            value={70}
            max="100"
          ></progress>
        </div>
        <div className="flex flex-row items-center gap-1.5">
          <p className="w-20">HTML</p>
          <progress
            className="progress progress-info w-60 h-3  md:w-70"
            value={99}
            max="100"
          ></progress>
        </div>
        <div className="flex flex-row items-center gap-1.5">
          <p className="w-20 ">CSS</p>
          <progress
            className="progress progress-info w-60 h-3  md:w-70"
            value={95}
            max="100"
          ></progress>
        </div>
        <div className="flex flex-row items-center gap-1.5">
          <p className="w-20">React</p>
          <progress
            className="progress progress-info w-60 h-3  md:w-70"
            value={90}
            max="100"
          ></progress>
        </div>
        <div className="flex flex-row items-center gap-1.5">
          <p className="w-20">SQl</p>
          <progress
            className="progress progress-info w-60 h-3 md:w-70"
            value={95}
            max="100"
          ></progress>
        </div>
        
        <div className="flex flex-row items-center gap-1.5">
          <p className="w-20">MongoBD</p>
          <progress
            className="progress progress-info w-60 h-3 md:w-70"
            value={9}
            max="100"
          ></progress>
        </div>
      </div>
    </motion.div>
  );
}

export default Progress;
