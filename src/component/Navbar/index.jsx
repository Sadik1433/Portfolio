import "./index.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { GiAngelOutfit } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar-container">
      <div>
        <h1 className="logo">
          <GiAngelOutfit size={35}/>
        </h1>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          className="list-btn"
        >
          <li>Home</li>
        </Link>

        <Link
          to="skill"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          className="list-btn"
        >
          <li>Skill</li>
        </Link>
        <Link
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          className="list-btn"
        >
          <li>Project</li>
        </Link>

        <Link
          to="service"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          className="list-btn"
        >
          Services
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          className="list-btn"
        >
          <li> Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
