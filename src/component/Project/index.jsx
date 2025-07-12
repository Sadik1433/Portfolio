import "./index.css";
import { FaGamepad, FaSmile, FaBriefcase, FaTasks } from "react-icons/fa";

const icons = {
  "Tic-Tac-Toe": <FaGamepad className="icon" />,
  EmojiGame: <FaSmile className="icon" />,
  "Job Search": <FaBriefcase className="icon" />,
  Todolist: <FaTasks className="icon" />,
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
