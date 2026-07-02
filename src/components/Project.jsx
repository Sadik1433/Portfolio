import {projects} from './data.js'
import { animate } from './data.js';


const Project = () => {
  return (
    <section id="project">
      <div className="relative py-4 lg:min-h-screen z-10 px-3">
        <h1 className="text-2xl font-bold md:text-xl md:mb-[30px] lg:text-3xl text-[var(--color-primary)] [text-shadow:2px_2px_3px_var(--shadow)]">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-5 min-h-[250px] rounded-lg shadow-[0px_0px_10px_var(--shadow)] cursor-pointer hover:shadow-[0px_0px_5px_var(--shadow)] transition-shadow duration-500 transition-transform duration-500 hover:scale-102"
              data-aos={animate[index % animate.length]}
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-center text-[var(--color-primary)] shadow-[0px_0px_2px_var(--shadow)] px-2 py-1 rounded-lg">
                  {project.name}
                </h2>
                <p className="mt-3 py-2 text-md text-[var(--color-text-body)] text-pretty">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-auto pt-4">
                <div className="flex flex-wrap p-1 gap-2 justify-center">
                  {project.languages.map((language, i) => (
                    <span
                      key={i}
                      className="text-center text-sm text-[var(--color-accent)] shadow-[0px_0px_2px_var(--shadow)] bg-transparent semi-bold px-3 py-1.5 rounded-lg hover:bg-[var(--shadow)] hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {language}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 max-w-[150px]"
                  >
                    <button className="w-full py-2 rounded-lg shadow-[0px_0px_2px_var(--shadow)] hover:bg-[var(--color-info)] hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer">
                      Demo
                    </button>
                  </a>
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 max-w-[150px]"
                  >
                    <button className="w-full py-2 rounded-lg shadow-[0px_0px_2px_var(--shadow)] hover:bg-[var(--color-success)] hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
