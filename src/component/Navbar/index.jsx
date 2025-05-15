
import { Link } from "react-scroll";

function Navbar() {
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
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-4">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="active"
              className=" btn bg-base-100  shadow-md shadow-red-100 w-20"
            >
              Home
            </Link>
            <Link
              to="skill"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="btn bg-base-100 shadow-md shadow-red-100 w-20"
            >
              Skills
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active"
              className="btn bg-base-100 shadow-md shadow-red-100 w-20"
            >
              Projects
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active"
              className="btn bg-base-100 shadow-md shadow-red-100 w-20"
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
