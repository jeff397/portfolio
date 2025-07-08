import { useState } from "react";
import projectsData from "../../Data/projects.json";
import Modal from "../Modal/Modal";
import "./projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h2 className="projects-title">Mes projets</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => openModal(project)}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <h3 className="project-title">{project.title}</h3>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}

export default Projects;
