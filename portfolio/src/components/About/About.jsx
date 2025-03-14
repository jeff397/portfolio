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
          Je suis un développeur web passionné par la création d'interfaces
          modernes et interactives...
        </p>
      </div>
    </section>
  );
}

export default About;
