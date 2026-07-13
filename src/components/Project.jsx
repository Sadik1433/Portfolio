import { useState } from 'react';
import { projects } from './assets/data.js'
import ProjectImage from './ProjectImage.jsx';

import {
  FaJava,
  FaPython,
  FaDatabase,
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaShoppingCart,
  FaGraduationCap,
  FaCloud,
  FaWallet,
  FaComments,
  FaRegFileAlt,
  FaTasks,
  FaGamepad
} from 'react-icons/fa';
import {
  SiSpringboot,
  // SiVisualstudiocode, 
  SiIntellijidea
} from 'react-icons/si';
import {
  FiBriefcase,
  FiFolder,
  FiChevronDown,
  FiChevronUp,
  FiCode,
  FiSliders,
  FiExternalLink,
  FiStar,
  FiGlobe,
  FiCheckCircle
} from 'react-icons/fi';

const Project = () => {
  const [expandedProjectId, setExpandedProjectId] = useState();

  const completedProjects = projects.filter(p => p.status === 'completed');
  const pendingProjects = projects.filter(p => p.status === 'pending');
  const completionRate = projects.length > 0 ? Math.round((completedProjects.length / projects.length) * 100) : 0;

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'globe':
        return <FiGlobe className="text-lg" />;
      case 'graduation-cap':
        return <FaGraduationCap className="text-lg" />;
      case 'shopping-cart':
        return <FaShoppingCart className="text-lg" />;
      case 'cloud':
        return <FaCloud className="text-lg" />;
      case 'wallet':
        return <FaWallet className="text-lg" />;
      case 'chat':
        return <FaComments className="text-lg" />;
      case 'blog':
        return <FaRegFileAlt className="text-lg" />;
      case 'tasks':
        return <FaTasks className="text-lg" />;
      case 'game':
        return <FaGamepad className="text-lg" />;
      default:
        return <FiFolder className="text-lg" />;
    }
  };

  const getTechBadgeStyle = (tech) => {
    const t = tech.toLowerCase();
    if (t.includes('react')) return 'border-cyan-500/30 text-cyan-400 bg-cyan-950/10';
    if (t.includes('javascript') || t === 'js') return 'border-yellow-500/30 text-yellow-400 bg-yellow-950/10';
    if (t.includes('tailwind')) return 'border-teal-500/30 text-teal-400 bg-teal-950/10';
    if (t.includes('emailjs')) return 'border-pink-500/30 text-pink-400 bg-pink-950/10';
    if (t.includes('aos')) return 'border-emerald-500/30 text-emerald-400 bg-emerald-950/10';
    if (t.includes('framer')) return 'border-rose-500/30 text-rose-400 bg-rose-950/15';
    if (t.includes('java')) return 'border-red-500/30 text-red-400 bg-red-950/10';
    if (t.includes('spring')) return 'border-green-500/30 text-green-400 bg-green-950/10';
    if (t.includes('mysql') || t.includes('sql') || t.includes('database')) return 'border-blue-500/30 text-blue-400 bg-blue-950/10';
    if (t.includes('mongo')) return 'border-green-600/30 text-green-500 bg-green-950/10';
    if (t.includes('node')) return 'border-lime-500/30 text-lime-400 bg-lime-950/10';
    if (t.includes('express')) return 'border-slate-400/30 text-slate-300 bg-slate-900/10';
    if (t.includes('redux')) return 'border-purple-600/30 text-purple-500 bg-purple-950/10';
    if (t.includes('stripe')) return 'border-indigo-500/30 text-indigo-400 bg-indigo-950/10';
    if (t.includes('socket')) return 'border-violet-500/30 text-violet-400 bg-violet-950/10';
    return 'border-indigo-500/30 text-indigo-400 bg-indigo-950/10';
  };

  const handleAccordionToggle = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="project" className="w-full min-h-screen py-10 px-4 md:px-6 lg:px-12 flex items-center justify-center">
      <div className="w-full  grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
        <aside
          className="w-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-2xl p-6 flex flex-col gap-6 shadow-2xl shadow-[var(--color-card-shadow)]"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="flex flex-col gap-1 mb-2">
            <h1 className="text-[var(--color-text-body)] text-3xl font-extrabold flex items-center gap-3">
              <FiBriefcase className="text-[var(--color-primary)]" />
              Projects
            </h1>
            <p className="text-[var(--color-text-muted)] text-sm font-medium">Here are some of my recent projects</p>
          </div>

          <div className="border-t border-[var(--color-card-border)]"></div>

          <div className="flex flex-col gap-4 p-4 bg-[var(--color-link-bg)] border border-[var(--color-card-border)] rounded-xl">
            <div className="flex items-center justify-between">
              <h4 className="text-[var(--color-text-body)] font-bold text-xs uppercase tracking-wider">Progress</h4>
              <span className="text-xs font-bold text-[var(--color-primary)]">{completionRate}% Done</span>
            </div>

            <div className="w-full bg-[var(--color-card-border)] h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] h-full rounded-full transition-all duration-500"
                style={{ width: `${completionRate}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center mt-1">
              <div className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg">
                <span className="block text-lg font-extrabold text-[var(--color-success)]">{completedProjects.length}</span>
                <span className="text-[9px] text-[var(--color-text-muted)] uppercase font-semibold">Completed</span>
              </div>
              <div className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg">
                <span className="block text-lg font-extrabold text-[var(--color-text-highlight)]">{pendingProjects.length}</span>
                <span className="text-[9px] text-[var(--color-text-muted)] uppercase font-semibold">Pending</span>
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--color-card-border)]"></div>

          <div>
            <h3 className="flex items-center gap-2 text-[var(--color-text-body)] font-semibold text-xs mb-3 uppercase tracking-wider">
              <FiCode className="text-[var(--color-primary)] text-sm" />
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-3 text-[var(--color-text-muted)] text-xs">
              <span className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
                <FaJava className="text-red-500 text-base" /> Java
              </span>
              <span className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
                <FaJs className="text-yellow-500 text-base" /> JavaScript
              </span>
              <span className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
                <FaPython className="text-yellow-400 text-base" /> Python
              </span>
              <span className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
                <FaReact className="text-cyan-400 text-base animate-spin-slow" /> React
              </span>
              <span className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
                <FaDatabase className="text-blue-400 text-base" /> SQL
              </span>
              <span className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
                <SiSpringboot className="text-green-500 text-base" /> Spring
              </span>
            </div>
          </div>

          <div className="border-t border-[var(--color-card-border)]"></div>

          <div>
            <h3 className="flex items-center gap-2 text-[var(--color-text-body)] font-semibold text-xs mb-3 uppercase tracking-wider">
              <FiSliders className="text-[var(--color-primary)] text-sm" />
              Tools
            </h3>
            <div className="grid grid-cols-2 gap-3 text-[var(--color-text-muted)] text-xs">
              <span className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
                <FaGitAlt className="text-orange-500 text-base" /> Git
              </span>
              <span className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
                <FaGithub className="text-[var(--color-text-body)] text-base" /> GitHub
              </span>
              <span className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
                <FaGithub className="text-blue-500 text-base" /> VS Code
              </span>
              <span className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
                <SiIntellijidea className="text-red-500 text-base" /> IntelliJ IDEA
              </span>
            </div>
          </div>
        </aside>

        {/* Right Section containing dropdown projects list */}
        <main
          className="w-full flex flex-col gap-6"
          data-aos="fade-left"
          data-aos-duration="800"
        >

          {/* Projects Dropdown List */}
          <div className="flex flex-col gap-4">
            {projects.map((project) => {
              const isExpanded = expandedProjectId === project.id;

              return (
                <div
                  key={project.id}
                  className={`bg-[var(--color-card-bg)] border rounded-xl overflow-hidden transition-all duration-300 project-accordion-border ${isExpanded ? 'border-[var(--color-primary)]/40 shadow-xl shadow-[var(--color-card-shadow)]' : 'border-[var(--color-card-border)]'
                    }`}
                >
                  {/* Accordion Trigger/Header */}
                  <button
                    onClick={() => handleAccordionToggle(project.id)}
                    className="w-full py-4 px-6 flex items-center justify-between text-left cursor-pointer hover:bg-[var(--color-link-bg)]/40 transition-colors border-none outline-none focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      {isExpanded ? (
                        <FiChevronUp className="text-[var(--color-primary)] text-lg transition-transform duration-300" />
                      ) : (
                        <FiChevronDown className="text-[var(--color-text-muted)] text-lg transition-transform duration-300" />
                      )}

                      <div className="flex items-center gap-2.5 text-[var(--color-text-muted)]">
                        {getCategoryIcon(project.categoryIcon)}
                        <span className="text-[var(--color-text-body)] font-semibold text-base sm:text-lg tracking-wide hover:text-[var(--color-primary)] transition-colors">
                          {project.name}
                        </span>
                      </div>
                    </div>

                    {/* Right-Side Tag Badge & Status Badge */}
                    <div className="flex items-center gap-2">
                      {project.status === "completed" ? (
                        <span className="border border-green-500/30 text-green-500 text-[9px] font-bold px-2 py-0.5 rounded bg-green-500/10 uppercase tracking-wide">
                          Completed
                        </span>
                      ) : (
                        <span className="border border-amber-500/30 text-amber-500 text-[9px] font-bold px-2 py-0.5 rounded bg-amber-500/10 uppercase tracking-wide">
                          Pending
                        </span>
                      )}

                      {project.badge === "Featured" ? (
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[9px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 uppercase tracking-wider shadow-lg shadow-pink-600/20">
                          <FiStar className="fill-current w-3 h-3" /> Featured
                        </span>
                      ) : (
                        <span className="border border-[var(--color-card-border)] text-[var(--color-primary)] text-[9px] font-semibold px-2.5 py-0.5 rounded-full bg-[var(--color-link-bg)]">
                          {project.badge}
                        </span>
                      )}
                    </div>
                  </button>

                  {/* Dropdown Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1200px] border-t border-[var(--color-card-border)]' : 'max-h-0'
                      }`}
                  >
                    <div className="p-6 grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr] gap-6 items-start">

                      <div className="w-full flex flex-col gap-2">
                        <ProjectImage projectId={project.id} images={project.images} />
                      </div>  

                      <div className="flex flex-col gap-6">
                        <div>
                          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed font-normal">
                            {project.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.languages.map((tech, i) => (
                              <span
                                key={i}
                                className={`border text-[10px] font-semibold px-3 py-1 rounded-lg transition-all duration-300 hover:scale-105 ${getTechBadgeStyle(tech)}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Features checklist */}
                        <div>
                          <h4 className="text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider mb-2.5">Key Features</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[var(--color-text-muted)] text-xs">
                            {project.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2.5 font-normal">
                                <FiCheckCircle className="text-[var(--color-primary)] text-sm shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Links section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 bg-[var(--color-link-bg)] border border-[var(--color-link-border)] hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/5 transition-all duration-300 group"
                          >
                            <div className="flex items-center gap-3">
                              <FiGlobe className="text-[var(--color-primary)] text-xl group-hover:scale-110 transition-transform" />
                              <div className="flex flex-col">
                                <span className="text-[var(--color-text-body)] text-xs font-bold leading-none mb-1">Live Demo</span>
                                <span className="text-[var(--color-primary)]/80 text-[10px] truncate max-w-[150px] font-normal">
                                  {project.link.replace(/^https?:\/\//, '')}
                                </span>
                              </div>
                            </div>
                            <FiExternalLink className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text-body)] transition-colors" />
                          </a>

                          <a
                            href={project.git}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 bg-[var(--color-link-bg)] border border-[var(--color-link-border)] hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/5 transition-all duration-300 group"
                          >
                            <div className="flex items-center gap-3">
                              <FaGithub className="text-[var(--color-primary)] text-xl group-hover:scale-110 transition-transform" />
                              <div className="flex flex-col">
                                <span className="text-[var(--color-text-body)] text-xs font-bold leading-none mb-1">GitHub Repo</span>
                                <span className="text-[var(--color-primary)]/80 text-[10px] truncate max-w-[150px] font-normal">
                                  {project.git.replace(/^https?:\/\/(www\.)?github\.com\//, 'github.com/')}
                                </span>
                              </div>
                            </div>
                            <FiExternalLink className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text-body)] transition-colors" />
                          </a>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>

      </div>
    </section>
  );
};

export default Project;
