import { motion } from "framer-motion";
import avatar from "../Assets/avatar.png";
import "./index.css";

function Image() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }} //right to left
      whileInView={{ opacity: 10, x: 0}}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1.5 }}
    >
    <div className="image">
      <img src={avatar} alt="profile" className="profile-image" />
    </div>
   </motion.div>
  );
}
// 
export default Image;
