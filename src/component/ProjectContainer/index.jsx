import Project from "../Project";
import "./index.css";

const projectData = [
  {
    title: "Tic-Tac-Toe",
    description: "Practice DOM manipulation and game logic.",
  },
  {
    title: "EmojiGame",
    description: "Learn array manipulation and dynamic rendering.",
  },
  {
    title: "Job Search",
    description: "Build a responsive layout mimicking real-world apps.",
  },
  {
    title: "Todolist",
    description: "Understand data persistence and user interaction.",
  },
];

const ProjectContainer = () => {
  return (
    <section className="projects-section" id="project" >
      <h2>Projects</h2>
      <div className="project-para-container">
        <p className="project-para">
          A showcase of interactive and responsive web applications built using
          React, JavaScript, and modern UI practices. These projects reflect my
          ability to build clean interfaces and dynamic user experiences.
        </p>
      </div>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectContainer;
