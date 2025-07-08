import React from "react";
import "./offresPack.css";

const offres = [
  {
    title: "💼 Site Vitrine Clé en Main",
    price: "1 100 € HT",
    description:
      "Idéal pour indépendants, artisans et petites entreprises souhaitant une présence professionnelle en ligne.",
    inclus: [
      "5 pages (Accueil, À propos, Services, Contact, etc.)",
      "Design responsive et moderne",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "2 retouches incluses + support 15 jours",
    ],
    delai: "7 à 14 jours",
  },
  {
    title: "🛠️ Offre Personnalisée",
    price: "Sur devis",
    description:
      "Un site 100% sur mesure selon vos besoins, votre contenu et vos objectifs spécifiques.",
    inclus: [
      "Pages & fonctionnalités illimitées",
      "Accompagnement stratégique",
      "Développement spécifique (blog, carte, agenda, etc.)",
      "Intégration API ou outils externes",
      "Design unique ou sur maquette fournie",
    ],
    delai: "À définir selon projet",
  },
  {
    title: "🛒 Site Commercial / Boutique",
    price: "à partir de 1 800 € HT",
    description:
      "Vendez vos produits ou services en ligne via un site e-commerce complet et professionnel.",
    inclus: [
      "Catalogue produits (jusqu’à 50 articles)",
      "Paiement en ligne (Stripe, PayPal…)",
      "Gestion de commandes et stocks",
      "SEO & sécurité renforcés",
      "Formation à la prise en main incluse",
    ],
    delai: "10 à 20 jours",
  },
  {
    title: "🛡️ Forfait Maintenance Mensuel",
    price: "à partir de 49 € HT/mois",
    description:
      "Gardez un site sécurisé, à jour et fonctionnel sans vous en soucier.",
    inclus: [
      "Mises à jour techniques & sécurité",
      "Sauvegardes régulières",
      "Corrections mineures (1h incluse)",
      "Assistance par mail sous 48h",
      "Vérification des formulaires et liens",
    ],
    delai: "Engagement mensuel ou annuel",
  },
];

const OffresPack = () => {
  return (
    <section className="offres-section" id="offres">
      <div className="offres-container">
        <h2 className="offres-title">🚀 Mes Offres Web</h2>
        <p className="offres-subtitle">
          Des solutions adaptées à vos besoins et à votre budget
        </p>
        <div className="offres-grid">
          {offres.map((offre, index) => (
            <div className="offre-card" key={index}>
              <h3>{offre.title}</h3>
              <p className="offre-price">{offre.price}</p>
              <p className="offre-desc">{offre.description}</p>
              <ul>
                {offre.inclus.map((item, i) => (
                  <li key={i}>✅ {item}</li>
                ))}
              </ul>
              <p className="offre-delai">⏱️ Délai : {offre.delai}</p>
              <a href="#contact" className="offre-btn">
                Demander un devis
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffresPack;
