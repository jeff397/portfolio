import "./hero.css";
import "./../../Styles/keyframes.css";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-background">
        <div className="hero-content">
          <h1 className="hero-title">
            Delmotte
            <br />
            Jean-François
          </h1>
          <h2 className="hero-subtitle">Développeur web/intégrateur web</h2>
        </div>
        <div className="hero-buttons">
          <a
            href="https://github.com/jeff397?tab=repositories"
            className="github-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a href="#contact">
            <button className="contact-button">Contactez moi</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
