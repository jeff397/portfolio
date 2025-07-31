import { useEffect, useState } from "react";
import "./about.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <section id="about">
      <div className={`about-content ${isVisible ? "rotate" : ""}`}>
        <h2>À propos de moi</h2>
        <p>
          Je m'appelle <strong>Jean-François Delmotte</strong> et je suis un{" "}
          <strong>développeur web freelance</strong> basé à <strong>Rue</strong>{" "}
          dans <strong>les Hauts-de-France</strong>, spécialisé dans la{" "}
          <strong>création de sites web modernes et responsives</strong> avec
          les technologies
          <strong> React, JavaScript, HTML et CSS</strong>.
        </p>

        <p>
          Après une reconversion professionnelle, j'ai suivi une formation
          complète sur OpenClassrooms, qui m’a permis d'acquérir les compétences
          nécessaires pour concevoir des interfaces performantes, accessibles et
          adaptées à tous les supports.
        </p>

        <p>
          J’ai réalisé plusieurs projets personnels qui m’ont permis d'appliquer
          mes connaissances en développement web, en respectant les bonnes
          pratiques de performance, de responsive design et de référencement.
        </p>

        <p>
          Aujourd’hui, je propose mes services de{" "}
          <strong>développement web</strong> aux
          <strong> indépendants, petites entreprises, artisans</strong> ou{" "}
          <strong>coachs</strong> qui souhaitent avoir une présence en ligne
          professionnelle.
        </p>

        <p>
          👉 <strong>Contactez-moi</strong> si vous avez un projet de site
          internet ou souhaitez améliorer votre visibilité en ligne !
        </p>
      </div>
    </section>
  );
}

export default About;
