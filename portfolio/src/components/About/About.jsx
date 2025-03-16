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
        <h3>À propos de moi</h3>
        <p>
          Afin de me reconvertir professionnellementn j'ai décidé de spécialiser
          dans le développement web. Après avoir travaillé dans un autre
          domaine, j'ai décidé de me réorienter vers un métier qui me passionne
          : la création de sites web et d'applications. Afin d'acquérir les
          compétences nécessaires, j'ai suivi une formation complète sur
          OpenClassrooms, une plateforme de qualité qui m'a permis de maîtriser
          les technologies modernes du développement web, notamment React, HTML,
          CSS, JavaScript, ainsi que les principes de conception d'interface
          utilisateur. Grâce à cette formation, j'ai développé une solide base
          technique et une compréhension approfondie des bonnes pratiques en
          développement. Bien que je n'aie pas encore d'expérience
          professionnelle dans le domaine, mon parcours d'apprentissage m'a
          permis de réaliser plusieurs projets personnels où j'ai appliqué mes
          compétences pour créer des sites web interactifs et responsive. Je
          suis motivé, curieux et toujours prêt à relever de nouveaux défis.
          Aujourd'hui, je cherche à mettre mes compétences en pratique et à
          travailler dans un environnement stimulant, où je pourrais continuer à
          apprendre et à contribuer à des projets passionnants. Mon objectif est
          de devenir un développeur web compétent et de construire une carrière
          durable dans ce domaine.
        </p>
      </div>
    </section>
  );
}

export default About;
