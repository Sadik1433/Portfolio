import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { FaMoon, FaSun } from "react-icons/fa";

const sections = ["hero", "skill", "project", "service", "contact"];

const ResponsiveNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-[var(--bg-color)] py-[18px] z-[1000] shadow-[0px_0px_10px_var(--color-primary)]">
      <ul className="gap-20 text-[1rem] md:flex hidden md:justify-end px-4">
        {sections.map((e, i) => {
          return (
            <ScrollLink
              key={i}
              to={e}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-[var(--color-primary)] text-2xl  border-b-3  "
            >
              <li className="w-15 text-center bg-transparent text-[var(--text-color)]  text-xl text-bold before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px]  hover:text-[var(--color-primary)] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                {e}
              </li>
            </ScrollLink>
          );
        })}
        <button
          onClick={toggleTheme}
          className="toggle-theme text-[var(--heading-colr)]"
        >
          {theme === "light" ? <FaMoon size={25} /> : <FaSun size={25} />}
        </button>
      </ul>

      <div className="w-full flex justify-end px-4 gap-[10px]">
        <CiMenuFries
          className="text-[1.8rem]  mr-1 text-[#424242] cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>
      <aside
        className={` ${mobileSidebarOpen ? "translate-y-0 opacity-100 z-20 pointer-events-auto" : "translate-y-[-10px] opacity-0 z-[-1] pointer-events-none"} md:hidden p-4 text-center absolute top-[65px]  right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-[20px] text-[1rem] text-[var(--color-text-body)] flex flex-col ">
          {sections.map((e, i) => {
            return (
              <ScrollLink
                key={i}
                to={e}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="!text-[var(--heading-color)] border-b-2 border-[var(--heading-color)]"
                className="cursor-pointer hover:text-[var(--heading-color)] transition-colors py-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                  {e}
                </li>
              </ScrollLink>
            );
          })}
          <button
          onClick={toggleTheme}
          className="toggle-theme text-[var(--heading-colr)]"
        >
          {theme === "light" ? <FaMoon size={25} /> : <FaSun size={25} />}
        </button>
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
