import "./header.css";
import logo from "../../assets/images/Logo.png";

function Header() {
  return (
    <header>
      <nav className="nav-menu">
        <a href="./">
          <img src={logo} alt="Logo" />
        </a>
        <a href="#presentation" className="nav-link">
          Présentation
        </a>
        <a href="#projets" className="nav-link">
          Projets
        </a>
        <a href="#contact" className="nav-link">
          Me contacter
        </a>
        <a href="/CV.pdf" download className="nav-link">
          Télécharger CV
        </a>
        <a href="#" className="nav-link">
          Français
        </a>
      </nav>
    </header>
  );
}

export default Header;
