import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Jean-François Delmotte - Tous droits réservés</p>
      <div className="social-links">
        <a
          href="https://github.com/jeff397"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="social-icon" />
        </a>
        <a
          href="https://linkedin.com/in/jean-francois-delmotte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
