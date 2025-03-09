import { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/images/Logo.png";
import githubLogo from "../../assets/images/github.png";
import { FaBars } from "react-icons/fa";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`nav-menu ${isScrolled ? "hidden" : ""}`}>
        <a href="./">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <nav className="nav-links">
          <a href="#presentation">Présentation</a>
          <a href="#projets">Projets</a>
          <a href="/CV.pdf" download>
            Télécharger CV
          </a>
          <a href="#">Français</a>
        </nav>
      </header>
      <header
        className={`nav-menu scrolled ${isScrolled ? "visible" : "hidden"}`}
      >
        <a
          href="https://github.com/jeff397?tab=repositories"
          className="github-logo"
        >
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a href="./" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <div className="dropdown">
          <FaBars className="menu-icon" />
          <div className="dropdown-content">
            <a href="#presentation">Présentation</a>
            <a href="#projets">Projets</a>
            <a href="/CV.pdf" download>
              Télécharger CV
            </a>
            <a href="#">Français</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
