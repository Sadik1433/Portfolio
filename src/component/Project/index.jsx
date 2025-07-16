import "./index.css";
import { FaGamepad, FaSmile, FaBriefcase, FaTasks } from "react-icons/fa";

const icons = {
  "Tic-Tac-Toe": <FaGamepad className="project-icons" />,
  EmojiGame: <FaSmile className="project-icons" />,
  "Job Search": <FaBriefcase className="project-icons" />,
  Todolist: <FaTasks className="project-icons" />,
};

const Project = ({ title, description }) => {
  return (
    <div className="project-card" data-aos="fade-down">
      <div className="project-icon">
        <span>{icons[title]}</span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <button>Open</button>
    </div>
  );
};

export default Project;
