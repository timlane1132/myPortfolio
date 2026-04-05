import "../styles/projects.css";
import { motion } from "framer-motion";
import { useState } from "react";
import projectsDone from "../../public/data.js";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projectsDone.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-tags">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.preview} alt="" />

            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>

            <div className="modal-links">
              <a href={selectedProject.live} target="_blank">
                Live
              </a>
              <a href={selectedProject.github} target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
