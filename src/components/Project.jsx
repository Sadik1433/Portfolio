const projects = [
  {
    id: 1,
    name: "Portfolio",
    link: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    git: "",
    languages: ["React", "TailwindCSS", "JavaScript", "Java"],
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
const animate = [
  "fade-right",
  "fade-left",
  "fade-up",
  "fade-down"
];

const Project = () => {
  return (
    <section id="project">
      <div className="relative py-4 lg:h-screen z-10 px-3">
        <h1 className="text-2xl font-bold md:text-xl md:mb-[30px] lg:text-3xl text-[var(--color-primary)] [text-shadow:2px_2px_3px_var(--shadow)]">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              index={project.id}
              className="min-h-[250px] px-4 py-4  rounded-lg shadow-[0px_0px_10px_var(--shadow)]  cursor-pointer  hover:shadow-[0px_0px_5px_var(--shadow)]  transition-shadow duration-500 transition-transform duration-500 hover:scale-102"
              data-aos={animate[index % animate.length]}
            >
              <h2 className="text-lg font-semibold text-center  text-[var(--color-primary)] shadow-[0px_0px_2px_var(--shadow)]  px-2 py-1 rounded-lg">
                {project.name}
              </h2>
              <p className="mt-3 py-2 text-[var(--color-text-body)] text-pretty">
                {project.description}
              </p>  
              <div className="absolute bottom-15 flex flex-wrap p-2 gap-2">
                {project.languages.map((language, index) => (
                  <span
                    key={index}
                    className="text-center text-[var(--color-accent)] shadow-[0px_0px_2px_var(--shadow)] bg-transparent shadow-[0px_0px_1px_var(--shadow)] semi-bold px-3 py-2 rounded-lg text-sm  hover:bg-[var(--shadow)]  hover:text-white hover:shadow-lg transition-shadow duration-500 transition-transform duration-500 hover:scale-105 "
                  >
                    {language}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-2 flex  space-x-6  gap-4 px-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-[50px] py-2 rounded-lg shadow-[0px_0px_2px_var(--shadow)] hover:bg-[var(--color-info)] hover:text-white hover:shadow-lg transition-shadow duration-500 transition-transform duration-500 hover:scale-105 ">
                    Demo
                  </button>
                </a>
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <button className="px-[50px] py-2 rounded-lg  shadow-[0px_0px_2px_var(--shadow)]  hover:bg-[var(--color-success)] hover:text-white">
                    GitHub
                  </button>
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
