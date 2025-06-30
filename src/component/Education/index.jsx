import { motion } from "framer-motion";

import { AnimatePresence } from "framer-motion";
import "./index.css";

const educationData = [
  {
    id: 1,
    degree: "B.com Computers App.." ,
    institution: "XYZ University, Chennai",
    year: "2021 - 2023",
  },
  {
    id: 2,
    degree: "Higher Secondary (HSC)"  ,
    institution: "ABC Matriculation School",
    year: "2019 - 2021",
  },
  {
    id: 3,
    degree: "Secondary School (SSLC)",
    institution: "ABC Matriculation School",
    year: "2017 - 2018",
  },
];

const Education = () => {
  return (
      <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
      <div className="education">
        <h1 className="edu-head">Education</h1>
        {educationData.map((each, i) => (
          <li key={i} className="list-degree">
            <h4 className="course-name">{each.degree}</h4>
            <p className="clg-name">{each.institution}</p>
            <span className="year">{each.year}</span>
          </li>
        ))}
      </div>      
      </motion.div>
    </AnimatePresence>
  );
};

export default Education;
