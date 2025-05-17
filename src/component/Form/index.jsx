import { IoIosPerson } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";

function Form() {
  return (
    <motion.div
      initial={{ opacity: 20, x: -100 }} //right to left
      whileInView={{ opacity: 1, x:1, y:10 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
    >
      <div className= "min-w-80 min-h-30 shadow-lg shadow-amber-50 rounded-2xl md:20">
        <div className="flex flex-col justify-center items-center rounded-xl p-5">
          <h1 className="p-2 text-2xl mask-radial-from-stone-50 border-b-2 border-white pb-3">Get In Touch</h1>
          <div className="flex flex-row  pl-2 pt-3">
            <IoIosPerson size={40} className="text-teal-300" />
            <input
              type="text"
              placeholder="Name"
              className="w-50 border-b-2 outline-0 text-teal-300 pr-3 ml-3"
            />
          </div>
          <div className="flex flex-row  pl-2">
            <MdCall size={40} className="text-teal-300" />
            <input
              type="text"
              placeholder="123456"
              className="w-50 border-b-2 outline-0 text-teal-300 pr-3 ml-3"
            />
          </div>
          <div className="flex flex-row  pl-2">
            <MdOutlineMail size={40} className="text-teal-300" />
            <input
              type="text"
              placeholder="@gmail.com"
              className="w-50 border-b-2 outline-0 text-teal-300 pr-3 ml-3"
            />
          </div>
          <div className="flex flex-row  pl-2 mt-3">
            <FaHandPointRight size={40} className="text-teal-300" />
            <textarea
              rows={5}
              cols={25}
              placeholder="Your Message...."
              className="p-2 border-2 border-teal-300 ml-3 outline-0"
            />
          </div>
          <button className="btn btn-primary btn-soft mt-3">Submit</button>
        </div>
      </div>
    </motion.div>
  );
}

export default Form;
