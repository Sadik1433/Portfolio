import "./index.css";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

const skills = [
  {
    title: "Java",
    icon: <FaJava className="skill-icon" />,
    description:
      "Strong OOP concepts, data structures, and backend development using Java.",
  },
  {
    title: "Python",
    icon: <FaPython className="skill-icon" />,
    description:
      "Experienced in scripting, automation, and data handling with Python.",
  },
  {
    title: "JavaScript",
    icon: <FaJsSquare className="skill-icon" />,
    description:
      "Dynamic frontend interactivity and logic using modern JavaScript ES6+.",
  },
  {
    title: "SQL",
    icon: <FaDatabase className="skill-icon" />,
    description:
      "Proficient in writing queries, joins, and database management with SQL.",
  },
  {
    title: "HTML & CSS",
    icon: <FaHtml5 className="skill-icon" />,
    description:
      "Building structured, semantic web pages and responsive UIs with custom styling.",
  },
  {
    title: "React",
    icon: <FaReact className="skill-icon" />,
    description:
      "Component-based development with hooks, routing, state management.",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs className="skill-icon" />,
    description:
      "Server-side programming, RESTful APIs, and backend services using Node.js.",
  },
  {
  title: 'Spring Boot',
  icon: <FaJava className="skill-icon" />,
  description: 'Robust backend development using Spring Boot for creating scalable RESTful APIs.',
}

];

const SkillsBlog = () => {
  return (
    <section className="skills-section" data-aos="fade-up-right">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon-container">
              <span>{skill.icon}</span>
              <h3>{skill.title}</h3>
            </div>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsBlog;
