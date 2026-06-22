import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const icons = [
  {
    id: 1,
    icons: <FaInstagram size={35} />,
    name: "Instagram",
    bg: "#e42f2f",
    color:"#f0f0f0"
  },
  {
    id: 2,
    icons: <FaGithub size={35} />,
    name: "Github",
    bg: "#646462",
    color: "#f0f0f0",
  },
  {
    id: 3,
    icons: <FaWhatsapp size={35} />,
    name: "WhatsApp",
    bg: "#077f37",
    color: "#f0f0f0",
  },
  {
    id: 4,
    icons: <FaLinkedinIn size={35} />,
    name: "LinkedIn",
    bg: "#4060f1",
    color: "#f0f0f0",
  },
];

const Icons = () => {
  return (
    <div className="flex items-center gap-10   flex-wrap md:gap-16 mt-8">
      {icons.map((e) => {
        return (
          <div className="relative top-16 group">
            <button
              style={{
                backgroundColor: e.bg,
                color: e.color,
              }}
              className="border-transparent p-2 rounded-[30px]"
            >
              {e.icons}
            </button>
            <div className="absolute top-[-50px] left-[-20px] translate-y-[-20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
              <p
                style={{
                  backgroundColor: e.bg,
                  color: e.color,
                }}
                className="min-w-[100px] text-[0.9rem]  rounded px-3 py-2"
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
