import React from "react";

export const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link || "#"} // Add 'link' to your projectsList.js
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 bg-white border border-border 
                 rounded-lg shadow-sm
                 hover:shadow-md hover:border-gray-300 
                 transition-all duration-300"
    >
      <h3 className="text-base font-bold text-text-primary mb-1">
        {project.title}
      </h3>
      <p className="text-sm text-text-secondary h-16">
        {project.description.substring(0, 75)}...
      </p>

      {/* Tech tags for the project card */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.tech.slice(0, 2).map((tech) => (
          <span
            key={tech}
            className="bg-tag text-text-secondary text-xs font-medium px-2 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
};
