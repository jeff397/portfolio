import projectsData from "../../Data/projects.json";
import "./projects.css";

function Projects() {
  return (
    <section id="projects">
      <p className="section-title">Mes projets</p>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
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
    </section>
  );
}

export default Projects;
