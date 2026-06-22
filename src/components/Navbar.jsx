import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
// react icons
import { CiMenuFries } from "react-icons/ci";

const sections = ["hero", "skill", "project", "service", "contact"];

const ResponsiveNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="sticky top-0 flex items-center  w-full  dark:bg-slate-900 bg-white  px-[20px] py-[18px] z-1000">
      {/* nav links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
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

      <div className="items-center gap-[10px] flex">
        <CiMenuFries
          className="text-[1.8rem] dark:text-[#abc2d3] mr-1 text-[#424242]c cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      <aside
        className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} md:hidden bg-white p-4 text-center absolute top-[65px] dark:bg-slate-700 right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
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
