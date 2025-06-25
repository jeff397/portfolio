import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <span className="logo-last-name">Delmotte</span>
        <span className="logo-first-name">Jean-François</span>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#hero" className="nav-button" onClick={closeMenu}>
          Accueil
        </a>
        <a href="#about" className="nav-button" onClick={closeMenu}>
          Présentation
        </a>
        <a href="#skills" className="nav-button" onClick={closeMenu}>
          Compétences
        </a>
        <a href="#projects" className="nav-button" onClick={closeMenu}>
          Projets
        </a>
        <a href="#Services" className="nav-button" onClick={closeMenu}>
          Mes services
        </a>
        <a href="#contact" className="nav-button" onClick={closeMenu}>
          Contact
        </a>
        <Link
          to="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
          onClick={closeMenu}
        >
          console.log("Header vraiment modifié");
          <FaDownload className="download-icon" /> Mon CV
        </Link>
      </nav>
    </header>
  );
}

export default Header;
