import "./index.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { GiFeatheredWing } from "react-icons/gi";
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <span >
          <GiFeatheredWing className="logo" />
        </span>
        <span className="logo-text">Sadik</span> 
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
          onClick={handleLinkClick}
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
          onClick={handleLinkClick}
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
          onClick={handleLinkClick}
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
          onClick={handleLinkClick}
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
          onClick={handleLinkClick}
          activeClass="active"
          className="list-btn"
        >
          <li> Contact</li>
        </Link>

        <button onClick={toggleTheme} className="toggle-theme">
         {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
