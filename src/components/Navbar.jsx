import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";

const sections = ["hero", "skill", "project", "service", "contact"];

const ResponsiveNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="sticky top-0   w-full bg-[var(--bg-color)] px-[40px] py-[18px] z-1000 border-b-1">
      <ul className="gap-20 text-[1rem]  md:flex hidden md:justify-end px-4">
        {sections.map((e) => {
          return (
            <ScrollLink
              to={e}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-[var(--color-primary)] text-2xl  border-b-3  "
            >
              <li className="w-15 text-center bg-transparent  text-xl text-bold before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px]  hover:text-[var(--color-primary)] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                {e}
              </li>
            </ScrollLink>
          );
        })}
      </ul>

      <div className="w-screen flex justify-end  gap-[10px]">
        <CiMenuFries
          className="text-[1.8rem] dark:text-[#abc2d3] mr-1 text-[#424242]c cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      <aside
        className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[0px] opacity-0 z-[-1]"} md:hidden bg-white p-4 text-center absolute top-[65px] dark:bg-slate-700 right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
          {sections.map((e) => {
            return (
              <ScrollLink
                to={e}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="!text-[var(--heading-color)] border-b-2 border-[var(--heading-color)]"
                className="cursor-pointer hover:text-[var(--heading-color)] transition-colors py-1"
              >
                <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                  {e}
                </li>
              </ScrollLink>
            );
          })}
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
