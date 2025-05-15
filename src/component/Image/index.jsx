import React from "react";
import { motion } from "framer-motion";
function Image() {
  return (
    <motion.div
      initial={{ opacity: 20, x: 150 }} //right to left
      whileInView={{ opacity: 1, x: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1.5 }}
    >
      <div className="">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dnarxeess/image/upload/v1746762576/WhatsApp_Image_2025-05-09_at_09.17.29_f04b10ab-removebg-preview_z8tcwl.png"
            alt="profile-image"
            className="img1"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Image;
