import React from "react";
import "../styles/Projects.css";
import { HiOutlineBriefcase } from "react-icons/hi"; // Icon for Projects

// 1. Import the data from your new file
import projectData from "../projectsList.js"; // Adjust the path ../ if needed

const Projects = () => {
  return (
    <section className="projects-section">
      {/* 1. The Title */}
      <h2 className="projects-heading">
        <HiOutlineBriefcase /> Projects
      </h2>

      {/* 2. The Horizontal Scrolling Gallery */}
      <div className="projects-gallery">
        {/* 3. The data now comes from your import */}
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.imageUrl} alt={project.name} />
            </div>

            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              {/* Re-using the tech tag styles */}
              <div className="tech-tags">
                {project.stack.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
