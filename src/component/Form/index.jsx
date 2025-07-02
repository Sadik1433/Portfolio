import { motion } from "framer-motion";
import "./index.css";

function Form() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }} 
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
    >
      <div className="form-container">
        <form className="form" id="form-container">
            <h1 className="contact-header">Contact Me!</h1>         
            <input type="text" className="input-field"  name="email" id="email" placeholder="Email"/>
            <input type="text" className="input-field"  name="phone" id="phone" placeholder="Phone"/>
            <textarea  rows="5"  className="text-area" placeholder="Type here...."/>
            <button className="submit-btn">Submit</button>
        </form>
      </div>
    </motion.div>
  );
}

export default Form;
