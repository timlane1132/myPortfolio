import "../styles/projects.css";
import { motion } from "framer-motion";
import { useState } from "react";
import projectsDone from "../../public/data.js";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Projects</h2>

      <div className="projects-container">
        {projectsDone.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <motion.img
              src={project.image}
              alt={project.title}
              whileHover={{
                boxShadow: "0px 5px 15px rgba(151, 151, 151, 0.3)",
                y: -2,
              }}
              transition={{ duration: 0.3 }}
            />

            <div className="tech-tags">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
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
    </motion.section>
  );
};

export default Projects;
