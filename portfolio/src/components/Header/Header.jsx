import "./header.css";
import logo from "../../assets/images/Logo.png";

function Header() {
  return (
    <header>
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
  );
}

export default Header;
