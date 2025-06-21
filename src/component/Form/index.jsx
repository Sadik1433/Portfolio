import { motion } from "framer-motion";
import "./index.css";

function Form() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }} //right to left
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1.5 }}
    >
      <div className="form-container">
        <form className="form">
            <h1 className="contact-header">Contact Me!</h1>         
            <input type="text" className="input-field" id="email" placeholder="Email"/>
            <input type="text" className="input-field" id="phone" placeholder="Phone"/>
            <textarea  rows="6"  className="text-area" placeholder="Type here...."/>
            <button className="submit-btn">Submit</button>
        </form>
      </div>
    </motion.div>
  );
}

export default Form;
