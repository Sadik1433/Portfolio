import { useState } from 'react';
import { services } from './data.js';
import {
  FiBriefcase,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp,
  FiGlobe,
  FiMonitor,
  FiServer,
  FiEdit3,
  FiDatabase,
  FiHeadphones,
  FiStar,
  FiExternalLink
} from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Service = () => {
  const [expandedServiceId, setExpandedServiceId] = useState();

  const handleAccordionToggle = (id) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  const getServiceColorClass = (index) => {
    switch (index) {
      case 0: return 'text-blue-500';
      case 1: return 'text-green-500';
      case 2: return 'text-yellow-500';
      case 3: return 'text-pink-500';
      case 4: return 'text-cyan-500';
      case 5: return 'text-purple-500';
      default: return 'text-indigo-500';
    }
  };

  const getDotColor = (index) => {
    switch (index) {
      case 0: return 'bg-blue-500';
      case 1: return 'bg-green-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-pink-500';
      case 4: return 'bg-cyan-500';
      case 5: return 'bg-purple-500';
      default: return 'bg-indigo-500';
    }
  };

  const getServiceRightIcon = (iconName, colorClass) => {
    const size = "text-lg sm:text-xl shrink-0";
    switch (iconName) {
      case 'globe':
        return <FiGlobe className={`${size} ${colorClass}`} />;
      case 'laptop':
        return <FiMonitor className={`${size} ${colorClass}`} />;
      case 'server':
        return <FiServer className={`${size} ${colorClass}`} />;
      case 'pencil':
        return <FiEdit3 className={`${size} ${colorClass}`} />;
      case 'database':
        return <FiDatabase className={`${size} ${colorClass}`} />;
      case 'support':
        return <FiHeadphones className={`${size} ${colorClass}`} />;
      default:
        return <FiBriefcase className={`${size} ${colorClass}`} />;
    }
  };

  const getTechBadgeStyle = (tech) => {
    const t = tech.toLowerCase();
    if (t.includes('react')) return 'border-cyan-500/30 text-cyan-400 bg-cyan-950/10';
    if (t.includes('javascript') || t === 'js') return 'border-yellow-500/30 text-yellow-400 bg-yellow-950/10';
    if (t.includes('css') || t.includes('bootstrap')) return 'border-blue-500/30 text-blue-400 bg-blue-950/10';
    if (t.includes('html')) return 'border-orange-500/30 text-orange-400 bg-orange-950/10';
    if (t.includes('tailwind')) return 'border-teal-500/30 text-teal-400 bg-teal-950/10';
    if (t.includes('git')) return 'border-red-500/30 text-red-400 bg-red-950/10';
    if (t.includes('figma')) return 'border-pink-500/30 text-pink-400 bg-pink-950/10';
    if (t.includes('node') || t.includes('spring')) return 'border-green-500/30 text-green-400 bg-green-950/10';
    return 'border-indigo-500/30 text-indigo-400 bg-indigo-950/10';
  };

  return (
    <section id="service" className="w-full min-h-screen py-10 px-4 md:px-6 lg:px-12 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
        
        {/* Left Sidebar Card */}
        <aside
          className="w-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-2xl p-6 flex flex-col gap-6 shadow-2xl shadow-[var(--color-card-shadow)]"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[var(--color-text-body)] text-3xl font-extrabold flex items-center gap-3">
              <FiBriefcase className="text-[var(--color-primary)]" />
              Services
            </h1>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-2 font-normal">
              I build modern, responsive and scalable web solutions that help businesses grow and stand out in the digital world.
            </p>
          </div>

          <div className="border-t border-[var(--color-card-border)]"></div>

          {/* Services Offered list */}
          <div>
            <h3 className="text-[var(--color-text-body)] font-semibold text-xs mb-3 uppercase tracking-wider">
              Services Offered
            </h3>
            <ul className="flex flex-col gap-3 text-[var(--color-text-muted)] text-xs font-normal">
              {services.map((service, idx) => (
                <li key={service.id} className="flex items-center justify-between hover:text-[var(--color-text-body)] transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${getDotColor(idx)}`}></span>
                    <span>{service.name}</span>
                  </div>
                  <span className={`font-bold ${getServiceColorClass(idx)}`}>
                    0{service.id}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[var(--color-card-border)]"></div>

          {/* Why Work With Me? checklist */}
          <div>
            <h3 className="text-[var(--color-text-body)] font-semibold text-xs mb-3 uppercase tracking-wider">
              Why Work With Me?
            </h3>
            <div className="flex flex-col gap-2.5 text-[var(--color-text-muted)] text-xs font-normal">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[var(--color-primary)] text-sm shrink-0" />
                <span>Clean & Maintainable Code</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[var(--color-primary)] text-sm shrink-0" />
                <span>Responsive & User Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[var(--color-primary)] text-sm shrink-0" />
                <span>Scalable & Secure Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[var(--color-primary)] text-sm shrink-0" />
                <span>On-time Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[var(--color-primary)] text-sm shrink-0" />
                <span>Support & Maintenance</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Section containing dropdown services list */}
        <main
          className="w-full flex flex-col gap-6"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          {/* Section Header */}
          <div className="flex flex-col gap-1 mb-2">
            <h1 className="text-[var(--color-text-body)] text-3xl font-extrabold flex items-center gap-3">
              <FiBriefcase className="text-[var(--color-primary)]" />
              Services
            </h1>
            <p className="text-[var(--color-text-muted)] text-sm font-medium">Here are the services I provide to help you build better digital products.</p>
          </div>

          {/* Services Dropdown List */}
          <div className="flex flex-col gap-4">
            {services.map((service, idx) => {
              const isExpanded = expandedServiceId === service.id;
              const colorClass = getServiceColorClass(idx);

              return (
                <div
                  key={service.id}
                  className={`bg-[var(--color-card-bg)] border rounded-xl overflow-hidden transition-all duration-300 project-accordion-border ${
                    isExpanded ? 'border-[var(--color-primary)]/40 shadow-xl shadow-[var(--color-card-shadow)]' : 'border-[var(--color-card-border)]'
                  }`}
                >
                  {/* Accordion Trigger/Header */}
                  <button
                    onClick={() => handleAccordionToggle(service.id)}
                    className="w-full py-4 px-6 flex items-center justify-between text-left cursor-pointer hover:bg-[var(--color-link-bg)]/40 transition-colors border-none outline-none focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      {isExpanded ? (
                        <FiChevronUp className="text-[var(--color-primary)] text-lg transition-transform duration-300" />
                      ) : (
                        <FiChevronDown className="text-[var(--color-text-muted)] text-lg transition-transform duration-300" />
                      )}

                      <div className="flex items-center gap-3">
                        <span className={`font-bold text-sm sm:text-base ${colorClass}`}>
                          0{service.id}
                        </span>
                        <span className="text-[var(--color-text-body)] font-semibold text-base sm:text-lg tracking-wide hover:text-[var(--color-primary)] transition-colors">
                          {service.name}
                        </span>
                      </div>
                    </div>

                    {/* Right-Side Badges / Icon */}
                    <div className="flex items-center gap-3">
                      {service.badge === "Popular" && (
                        <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-[9px] font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider shadow-lg shadow-purple-600/20">
                          <FiStar className="fill-current w-2.5 h-2.5" /> Popular
                        </span>
                      )}
                      
                      {!isExpanded && getServiceRightIcon(service.iconName, colorClass)}
                    </div>
                  </button>

                  {/* Dropdown Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-[1000px] border-t border-[var(--color-card-border)]' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 flex flex-col gap-6">
                      {/* Summary Description */}
                      <p className="text-[var(--color-text-muted)] text-sm leading-relaxed font-normal">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* What You Get checklist */}
                        <div className="flex flex-col gap-2">
                          <h4 className="text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider mb-2">What You Get</h4>
                          <div className="flex flex-col gap-2 text-[var(--color-text-muted)] text-xs">
                            {service.whatYouGet.map((item, i) => (
                              <div key={i} className="flex items-center gap-2.5 font-normal">
                                <FiCheckCircle className="text-[var(--color-primary)] text-sm shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies & Links */}
                        <div className="flex flex-col gap-4">
                          {/* Technologies */}
                          <div>
                            <h4 className="text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider mb-2">Technologies I Use</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className={`border text-[10px] font-semibold px-3 py-1 rounded-lg transition-all duration-300 hover:scale-105 ${getTechBadgeStyle(tech)}`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Links section */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                            <a
                              href={service.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-[var(--color-link-bg)] border border-[var(--color-link-border)] hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/5 transition-all duration-300 group"
                            >
                              <div className="flex items-center gap-3">
                                <FiGlobe className="text-[var(--color-primary)] text-xl group-hover:scale-110 transition-transform" />
                                <div className="flex flex-col">
                                  <span className="text-[var(--color-text-body)] text-xs font-bold leading-none mb-1">Live Demo</span>
                                  <span className="text-[var(--color-primary)]/80 text-[10px] truncate max-w-[120px] font-normal">
                                    {service.link.replace(/^https?:\/\//, '')}
                                  </span>
                                </div>
                              </div>
                              <FiExternalLink className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text-body)] transition-colors" />
                            </a>

                            <a
                              href={service.git}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-[var(--color-link-bg)] border border-[var(--color-link-border)] hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/5 transition-all duration-300 group"
                            >
                              <div className="flex items-center gap-3">
                                <FaGithub className="text-[var(--color-primary)] text-xl group-hover:scale-110 transition-transform" />
                                <div className="flex flex-col">
                                  <span className="text-[var(--color-text-body)] text-xs font-bold leading-none mb-1">GitHub Repo</span>
                                  <span className="text-[var(--color-primary)]/80 text-[10px] truncate max-w-[120px] font-normal">
                                    {service.git.replace(/^https?:\/\/(www\.)?github\.com\//, 'github.com/')}
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
                </div>
              );
            })}
          </div>
        </main>

      </div>
    </section>
  );
};

export default Service;
