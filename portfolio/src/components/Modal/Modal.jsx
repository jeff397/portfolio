import "./modal.css";

function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="modal-buttons">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Voir le projet
            </a>
          )}
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Voir le code
            </a>
          )}
        </div>
        <div className="technology-icons">
          {project.technologies.map((tech) => (
            <img
              key={tech.name}
              src={tech.icon}
              alt={tech.name}
              className="tech-icon"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
