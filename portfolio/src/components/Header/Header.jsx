import "./header.css";
import logo from "../../../public/images/github.png";

function Header() {
  return (
    <header>
      <a href="https://github.com/jeff397?tab=repositories">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <nav className="nav-links">
        <a href="#hero">Accueil</a>
        <a href="#about">Présentation</a>
        <a href="#projects">Projets</a>
        <a href="/CV.pdf" download>
          Télécharger CV
        </a>
        <a href="#">Français</a>
      </nav>
    </header>
  );
}

export default Header;
