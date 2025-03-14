import { useForm, ValidationError } from "@formspree/react";
import { FaLinkedin } from "react-icons/fa";
import "./ContactForm.css";

const ContactForm = ({ onSuccess }) => {
  const [state, handleSubmit] = useForm("xldjdred");

  const handleFormSubmit = async (e) => {
    await handleSubmit(e);
    if (state.succeeded) {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="contact-form">
      <label>
        Nom :
        <input type="text" name="name" required />
      </label>

      <label>
        Email :
        <input type="email" name="email" required />
      </label>

      <label>
        Message :
        <textarea name="message" required />
      </label>

      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>
      <div className="linkedin-container">
        <a
          href="https://www.linkedin.com/in/votreprofil"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <FaLinkedin className="linkedin-icon" />
        </a>
      </div>

      {/* Gestion des erreurs */}
      <ValidationError field="name" prefix="Nom" errors={state.errors} />
      <ValidationError field="email" prefix="Email" errors={state.errors} />
      <ValidationError field="message" prefix="Message" errors={state.errors} />
    </form>
  );
};

export default ContactForm;
