import SocialMedia from "../SocialMedia";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Image from "../Image";

function LandingPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity:10, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
      >
        <section id="home">
          <div className="min-h-screen flex flex-col mainContainer  md:flex-row ">
            <div className="order-1 flex flex-row justify-center md:order-2 min-w-1/3">
              <Image />
            </div>
            <div className="order-2 text-xl md:order-1 flex flex-col justify-center ">
              <div className="text-white text-center">
                <div className="text-2xl text-center md:text-4xl">
                  <h1 className="text-left pl-20 md:text-center">Hi, I am</h1>
                  <span className="ml-25 text-cyan-500 md:text-center ">
                    Sadik
                  </span>
                </div>
                <p className="text-2xl text-center md:text-3xl">
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
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}

export default LandingPage;
