import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {
   const [navOpen, setNavOpen] = useState(false);
  
    const toggleNav = () => {
      setNavOpen(!navOpen);
    };
  
  return (
    <nav className="border-b-1 border-blue-50 shadow-m sticky top-0 left-0 z-10">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <div className="ml-5">
            <Link to="home">
              <span className="text-4xl mask-radial-from-stone-50 ">Sadik</span>
            </Link>
          </div>
        </div>
        <ul className="hidden md:flex space-x-6">
          {["home", "skill", "project", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active"
                className="cursor-pointer btn bg-base-100 shadow-md shadow-red-100 w-20"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden z-10 cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center bg-blue-100 shadow-md py-4 space-y-4">
          {["home", "skill", "project","contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                className="cursor-pointer text-lg text-blue-900 bg-red-400 p-2 border-0 rounded-2xl font-bold gap-5"
                onClick={toggleNav}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
