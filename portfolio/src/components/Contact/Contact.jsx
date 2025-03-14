import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./Contact.css";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="contact-section">
      <h2>Contactez-moi</h2>

      {isSubmitted ? (
        <p className="success-message" onClick={() => setIsSubmitted(false)}>
          Merci pour votre message ! <br />
          (Cliquez ici pour fermer)
        </p>
      ) : (
        <div className="contact-container">
          <div className="contact-text">
            <p>
              Vous pouvez me contacter via ce formulaire ou directement sur mon
              LinkedIn.
            </p>
          </div>
          <ContactForm onSuccess={() => setIsSubmitted(true)} />
        </div>
      )}
    </section>
  );
};

export default Contact;
