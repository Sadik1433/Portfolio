import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const icons = [
  {
    id: 1,
    icons: <FaInstagram size={35} />,
    name: "Instagram",
    bg: "#E42F2F",
    link: "https://www.instagram.com/?__pwa=1",
    color: "#F0F0F0",
  },
  {
    id: 2,
    icons: <FaGithub size={35} />,
    name: "GitHub",
    bg: "#0b0b05",
    link: "https://github.com/sadik1433",
    color: "#F0F0F0",
  },
  {
    id: 3,
    icons: <FaWhatsapp size={35} />,
    name: "WhatsApp",
    bg: "#077F37",
    link: "https://wa.me/7799023364",
    color: "#F0F0F0",
  },
  {
    id: 4,
    icons: <FaLinkedinIn size={35} />,
    name: "LinkedIn",
    bg: "#4060F1",
    link: "https://www.linkedin.com/in/sadik1433",
    color: "#F0F0F0",
  },
];

const Icons = () => {
  return (
    <div className="h-30 flex  justify-center  gap-5 flex-wrap md:gap-16 ">
      {icons.map((e, i) => {
        return (
          <div className="relative top-5 md:top-15 group" key={i}>
            <button
              style={{
                backgroundColor: e.bg,
                color: e.color,
                boxShadow: `0px 0px 12px ${e.name === "GitHub" ? "var(--color-primary)" : e.bg}`,
              }}
              className="border-transparent p-2 rounded-[30px] cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <a href={e.link} target="_self" rel="noopener noreferrer">
                {e.icons}
              </a>
            </button>
            <div className="absolute top-[-50px] left-[-20px] translate-y-[-20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
              <p
                style={{
                  backgroundColor: e.bg,
                  color: e.color,
                }}
                className=" text-center min-w-[100px] text-[0.9rem] font-bold rounded-xl px-3 py-2"
              >
                
                {e.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Icons;
