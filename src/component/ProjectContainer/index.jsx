import Project from "../Project";
import "./index.css";

const blogsdata = [
  {
    id: 1,
    projectName: "Tic-Tac-Toe",
    lang: "Html, css, JavaScript",
    purpose: "Practice DOM manipulation and game logic",
  },
  {
    id: 2,
    projectName: "EmojiGame",
    lang: "Html, css, JavaScript, react",
    purpose: "Learn array manipulation and dynamic rendering",
  },
  {
    id: 3,
    projectName: "Job Search",
    lang: "Html, css, JavaScript, react",
    purpose: "Build a responsive layout mimicking real-world apps",
  },
  {
    id: 4,
    projectName: "Todolist",
    lang: "Html, css, JavaScript",
    purpose: "Understand data persistence and user interaction",
  },
];

const ProjectContainer = () => {
  return (
    <section id="project">
      <div className="project-container">
        <h1 className="project-head">Projects</h1>
        <div className="project-description">
          <p className="descr-para">
            A showcase of interactive and responsive web applications built
            using React, JavaScript, and modern UI practices. These projects
            reflect my ability to build clean interfaces and dynamic user
            experiences.
          </p>
        </div>
        <ul className="project-display-container">
          {blogsdata.map((each) => (
            <Project blog={each} key={each.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectContainer;
