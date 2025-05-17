import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Project = (props) => {
  const { blog } = props;
  const { projectName, profileImage, link } = blog;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100, y: 0 }}
        whileInView={{ opacity: 10, x: 0, y: 10 }} // exact location
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <li className="max-w-80 shadow-lg shadow-blue-300 rounded-2xl md:w-100">
          <div className="card-body flex flex-col justify-center">
            <div className="text-xl">
              <h1 className="text-center text-2xl text-cyan-500 mask-radial-from-stone-50 font-bold underline md:text-4xl">
                {projectName}
              </h1>
              <h2 className=" text-cyan-300 font-bold md:text-2xl ">
                Name:-{" "}
                <span className="text-lg text-blue-400 md:text-xl ">
                  {projectName}{" "}
                </span>
              </h2>
              <p className="text-left text-cyan-300 font-bold md:text-2xl">
                Lang:-{" "}
                <span className="text-lg text-blue-400 md:text-3xl">
                  {blog.lang1}{" "}
                </span>
              </p>
              <span className="text-right font-bold text-blue-400 md:text-xl">
                {blog.lang2},{blog.lang3}
                {blog.lang4}
              </span>
            </div>
            <div className="">
              <button className="btn btn-primary w-20">
                <a href={link}>Open</a>
              </button>
            </div>
          </div>
        </li>
      </motion.div>
    </AnimatePresence>
  );
};
export default Project;
