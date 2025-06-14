import { IoIosPerson } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";

function Form() {
  return (
    <motion.div
      initial={{ opacity: 20, x: -100 }} //right to left
      whileInView={{ opacity: 1, x: 1, y: 10 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
    >
      <div className="min-w-50 min-h-30 shadow-lg shadow-cyan-500 rounded-2xl md:w-80">
        <div className="flex flex-col justify-center items-center rounded-xl gap-5 p-5">
          <h1 className="p-2 text-2xl mask-radial-from-stone-50 border-b-2 border-white pb-3">
            Get In Touch
          </h1>
          <div className="flex flex-wrap gap-2">
            <IoIosPerson size={40} className="text-teal-300" />
            <input
              type="text"
              placeholder="Name"
              className="w-50 border-b-2 outline-0 text-teal-300 pr-3 ml-3"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <MdCall size={40} className="text-teal-300" />
            <input
              type="text"
              placeholder="123456"
              className="w-50 border-b-2 outline-0 text-teal-300 pr-3 ml-3"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <MdOutlineMail size={40} className="text-teal-300" />
            <input
              type="text"
              placeholder="@gmail.com"
              className="w-50 border-b-2 outline-0 text-teal-300 pr-3 ml-3"
            />
          </div>

          <button className="btn btn-primary btn-soft mt-3">Submit</button>
        </div>
      </div>
    </motion.div>
  );
}

export default Form;
