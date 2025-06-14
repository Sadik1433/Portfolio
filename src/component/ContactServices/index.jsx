import { motion } from "framer-motion";
import SocialMedia from "../SocialMedia";

function ContactService() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }} //right to left
      whileInView={{ opacity: 1, x: 10, y:10}}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
    >
      <div className="min-w-100   flex flex-col justify-center items-center shadow-lg rounded-2xl  md:min-w-100 p-10">
        <div className="flex flex-row text-xl">
          <div className="w-50 flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div className="flex flex-col ">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
        </div>
        <div className="mt-10">
          <h6 className="text-center footer-title">Social</h6>
          <div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactService;
