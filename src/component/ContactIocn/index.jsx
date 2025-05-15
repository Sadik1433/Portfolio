import { motion } from "framer-motion";
import SocialMedia from "../SocialMedia";

function ContactIcon() {
  return (
    <motion.div
      initial={{ opacity: 20, x: 150 }} //right to left
      whileInView={{ opacity: 1, x: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1.5 }}
    >
      <div className="h-120 flex flex-col justify-center items-center shadow-lg">
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

export default ContactIcon;
