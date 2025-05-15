import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Project = (props) => {
  const { blog } = props;
  const { projectName, profileImage, link } = blog;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100, y: 10 }}
        whileInView={{ opacity: 10, x: -10, y: 10 }} // exact location
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <li className=" w-100  relative top-0 shadow-lg shadow-blue-300">
          <div className="card card-side shadow-sm">
            <figure className="w-40">
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie"
                className="h-60"
              />
            </figure>
            <div className="card-body">
              <div>
                <h1 className="text-2xl text-center text-red-500 font-bold underline ">
                  Details
                </h1>
                <h2 className="text-xl  text-cyan-300">
                  Name:-{" "}
                  <span className="text-lg text-blue-400">{projectName} </span>
                </h2>
                <p className="text-xl text-left text-cyan-300">
                  Languges:-{" "}
                  <span className="text-lg text-blue-400">{blog.lang1} </span>
                </p>
                <span className="text-right text-blue-400">
                  {blog.lang2},{blog.lang3}
                  {blog.lang4}
                </span>
              </div>
              <div className="card-actions absolute bottom-2 right-10.5 pt-3">
                <button className="btn btn-primary w-30">
                  <a href={link}>Open</a>
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
