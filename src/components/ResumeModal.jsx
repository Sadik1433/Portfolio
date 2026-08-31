import { useState, useRef, useEffect } from "react";
import resumeData from '../components/assets/resumeData'
import { IoClose } from "react-icons/io5";
import { IoMdCloudDownload } from "react-icons/io";
import { FaPhoneAlt , FaLinkedinIn ,FaFileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";

const Icon = {
  close: (p) => (
    <IoClose size={25}/>
  ),
  download: (p) => (

    <IoMdCloudDownload size={25} />
  ),
  mail: (p) => (
    <MdEmail size={25}/>
  ),
  phone: (p) => (
    <FaPhoneAlt size={25}/>
  ),
  linkedin: (p) => (
    <FaLinkedinIn size={25} />
  ),
  github: (p) => (
    <FaGithub size={25} />
  ),
  externalLink: (p) => (
    <HiOutlineExternalLink size={25} />
  ),
  file: (p) => (
   <FaFileAlt  size={25}/>
  ),
};

export default function ResumeModal({ open: openProp, setOpen: setOpenProp, triggerRef: triggerRefProp } = {}) {
  // Whether this component was handed its state from a parent, or is
  // managing its own — decides whether we render the built-in button below.
  const isControlledExternally = openProp !== undefined && setOpenProp !== undefined;

  // Fallback state/ref used only when the component isn't controlled from
  // outside. If props were passed in, these are simply unused.
  const [internalOpen, setInternalOpen] = useState(false);
  const internalTriggerRef = useRef(null);

  const open = isControlledExternally ? openProp : internalOpen;
  const setOpen = isControlledExternally ? setOpenProp : setInternalOpen;
  const triggerRef = triggerRefProp || internalTriggerRef;

  useEffect(() => {
    if (!open) return;

    // Let people close the popup by pressing Escape.
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);

    // Stop the page behind the modal from scrolling while it's open.
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, setOpen]);

  const closeModal = () => {
    setOpen(false);
    // Send focus back to whichever button opened the modal.
    triggerRef.current?.focus();
  };

  return (
    <>
      {/* --------------------------------------------------------------- */}
      {/* The modal itself — only rendered while `open` is true            */}
      {/* --------------------------------------------------------------- */}
      {open && (
        // This full-screen layer sits behind the card and dims the page.
        // Clicking it (but not the card inside it) closes the modal.
        <div
          className="modal-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          {/* The card */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-title"
            tabIndex={-1}
            className="modal-pop-in relative top-10 flex max-h-[85vh] w-full max-w-4xl flex-col rounded-2xl border border-indigo-500 bg-gradient-to-b from-slate-900 to-black shadow-2xl shadow-indigo-500/20"
          >
            {/* ----- Header: avatar, name, title, close button ----- */}
            <div className="flex items-center justify-between p-6 pb-4">
              <div className="flex items-center gap-4">

                <div>
                  <h2 id="resume-title" className="text-lg font-semibold text-white">
                    {resumeData.name}
                  </h2>
                  <p className="text-sm text-indigo-300">{resumeData.title}</p>
                </div>
              </div>

              <button
                onClick={closeModal}
                aria-label="Close resume"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-800 text-indigo-300 transition hover:bg-indigo-900 hover:text-white"
              >
                <Icon.close className="h-4 w-4" />
              </button>
            </div>

            {/* ----- Contact info row ----- */}
            <div className="flex flex-wrap gap-2 border-b border-indigo-900 px-6 pb-5">
              <ContactChip icon={Icon.mail} label={resumeData.email} />
              <ContactChip icon={Icon.phone} label={resumeData.phone} />
              <ContactChip icon={Icon.linkedin} label={resumeData.linkedin} />
              <ContactChip icon={Icon.github} label={resumeData.github} />
            </div>

            {/* ----- Scrollable content area ----- */}
            <div className="scroll-thin overflow-y-auto p-6">
              {/* Education */}
              <Section title="Education">
                <div className="flex flex-col gap-5">
                  {resumeData.education.map((item) => (
                    <div key={item.school} className="flex justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-indigo-100">{item.school}</p>
                        <p className="mt-1 text-sm text-indigo-300">{item.detail}</p>
                      </div>
                      <span className="whitespace-nowrap text-xs text-indigo-400">{item.period}</span>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Skills */}
              <Section title="Skills">
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(resumeData.skills).map(([group, items]) => (
                    <div key={group}>
                      <p className="mb-2 text-xs font-semibold text-indigo-400">{group}</p>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-indigo-800 bg-indigo-950 px-2 py-1 text-xs text-indigo-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Projects */}
              <Section title="Projects">
                <div className="flex flex-col gap-4">
                  {resumeData.projects.map((project) => (
                    <div
                      key={project.name}
                      className="rounded-xl border border-indigo-900 bg-indigo-950/40 p-4 transition hover:border-indigo-600"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-semibold text-white">{project.name}</p>
                        <a
                          href={`https://${project.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-indigo-300 hover:text-indigo-100"
                        >
                          {project.link}
                          <Icon.externalLink className="h-3 w-3" />
                        </a>
                      </div>

                      <p className="mt-1 text-sm text-indigo-300">{project.tagline}</p>

                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-indigo-200">
                        {project.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-indigo-800 px-2 py-1 text-xs text-indigo-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            {/* ----- Footer with the download button ----- */}
            <div className="flex justify-end border-t border-indigo-900 p-2">
              <a
                href={resumeData.pdfPath}
                download
                className="flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                <Icon.download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}

      {/*
        A few things Tailwind's default utility classes can't do on their
        own (custom entrance animations and a slim scrollbar), so we add a
        tiny plain-CSS block for just those. Everything else above is
        Tailwind classes.
      */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .modal-fade-in { animation: fadeIn 0.15s ease-out; }
        .modal-pop-in { animation: popIn 0.2s ease-out; }
        .scroll-thin::-webkit-scrollbar { width: 8px; }
        .scroll-thin::-webkit-scrollbar-track { background: transparent; }
        .scroll-thin::-webkit-scrollbar-thumb { background: #4338ca; border-radius: 999px; }
      `}</style>
    </>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h3 className="mb-3 border-b border-indigo-900 pb-2 text-base font-semibold text-indigo-200">
        {title}
      </h3>
      {children}
    </section>
  );
}

function ContactChip({ icon: IconComponent, label }) {
  return (
    <span className="flex items-center gap-2 rounded-full border border-indigo-900 bg-indigo-950/60 px-3 py-1.5 text-xs text-indigo-300">
      <IconComponent className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}