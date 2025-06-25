// src/components/Services.jsx

import React from "react";
import "./services.css";

const services = [
  {
    title: "Création de site web",
    description:
      "Sites vitrine, landing pages ou portfolios adaptés aux indépendants et petites structures.",
  },
  {
    title: "Référencement (SEO)",
    description:
      "Optimisation du contenu, structure et vitesse pour mieux vous positionner sur Google.",
  },
  {
    title: "Maintenance",
    description:
      "Mises à jour régulières, corrections de bugs, sauvegardes et suivi technique.",
  },
  {
    title: "Intégration Figma",
    description:
      "Intégration fidèle de vos maquettes Figma, responsive et performante.",
  },
];

function Services() {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Mes services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card-modern">
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
