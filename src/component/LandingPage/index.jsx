import "./index.css";
import SocialMedia from "../SocialMedia";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Image from "../Image";

function LandingPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: -20, y: -150 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
      >
        <section id="home">
          <div className="mainContainer flex flex-row  h-screen w-auto ">
            <div className="max-w-3/4 flex flex-col justify-center items-start">
              <div className="flex flex-col justify-center items-center p-5">
                <h1 className="text-white text-3xl text-left font-light mr-90">Hi, I am</h1>
                <span className="name text-5xl text-center mask-linear-from-stone-100 mr-40 font-serif italic">
                  Sadik
                </span>
                <br />
                <p className="text-center text-2xl">
                  I'm a passionate Web Developer with expertise in React, Java,
                  python. I love building intuitive and efficient solutions that
                  make a difference.
                </p>
                <div className="flex flex-col justify-center text-white h-40">
                  <SocialMedia />
                </div>
                <div>
                  <button className="btn btn-outline btn-secondary w-52">
                    Resume
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/4 flex flex-col justify-center items-center text-xl">
              <Image />
            </div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}

export default LandingPage;
