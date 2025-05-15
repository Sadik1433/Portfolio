import { IoIosPerson } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
function Form() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }} //right to left
      whileInView={{ opacity: 1, x: 100 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1.5 }}
    >
      <div className= "w-120 flex justify-center shadow-lg p-3">
        <div className="flex flex-col  gap-5">
          <h1 className="text-center text-3xl mask-radial-from-stone-50 border-2 border-white p-2 rounded-full">Get In Touch</h1>
          <div className="flex flex-row  pl-2">
            <IoIosPerson size={40} className="text-teal-300" />
            <input
              type="text"
              placeholder="Name"
              className="w-80 border-b-2 outline-0 text-teal-300 pr-3 ml-3"
            />
          </div>
          <div className="flex flex-row  pl-2">
            <MdCall size={40} className="text-teal-300" />
            <input
              type="text"
              placeholder="123456"
              className="w-80 border-b-2 outline-0 text-teal-300 pr-3 ml-3"
            />
          </div>
          <div className="flex flex-row  pl-2">
            <MdOutlineMail size={40} className="text-teal-300" />
            <input
              type="text"
              placeholder="@gmail.com"
              className="w-80 border-b-2 outline-0 text-teal-300 pr-3 ml-3"
            />
          </div>
          <div className="flex flex-row justify-center">
            <FaHandPointRight size={40} className="text-teal-300" />
            <textarea
              rows={5}
              cols={35}
              placeholder="Your Message...."
              className="p-2 border-2 border-teal-300 ml-3 outline-0"
            />
          </div>
          <button className="btn btn-primary btn-soft">Submit</button>
        </div>
      </div>
    </motion.div>
  );
}

export default Form;
