const projects = [
  {
    id: 1,
    name: "Portfolio",
    link: "",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    git: "",
    languages: ["React", "TailwindCSS", "JavaScript"],
  },
  {
    id: 2,
    name: "TodoApp",
    link: "",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    git: "",
    languages: ["React", "TailwindCSS", "JavaScript"],
  },
  {
    id: 3,
    name: "JobbyApp",
    link: "",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    git: "",
    languages: ["React", "TailwindCSS", "JavaScript"],
  },
  {
    id: 4,
    name: "JobbyApp",
    link: "",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    git: "",
    languages: ["React", "TailwindCSS", "JavaScript"],
  },
];

const Project = () => {
  return (
    <section id="project">
      <div className="relative py-3 lg:h-screen z-10 px-3">
        <h1 className="text-lg  font-bold md:text-xl lg:3xl text-[var(--color-primary)] underline">
          Projects :-
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-transparent shadow-lg shadow-cyan-500/50 inset-shadow-2xs  rounded-lg shadow-md  cursor-pointer hover:shadow-lg transition-shadow duration-500 transition-transform duration-500 hover:scale-105"
            >
              <h2 className="text-lg font-semibold text-[var(--color-primary)]">
                {project.name}
              </h2>
              <p className="mt-2 text-[var(--color-text-heading)]">
                {project.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.languages.map((language, index) => (
                  <span
                    key={index}
                    className="text-[var(--color-accent)] bg-transparent border-1 semi-bold px-3 py-2 rounded-full text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex space-x-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-info btn-sm text-white">Demo</button>
                </a>
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-success btn-sm text-white">GitHub</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
