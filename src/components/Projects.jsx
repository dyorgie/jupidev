import React from "react";
import { Card } from "./Card";
import { ProjectCard } from "./ProjectCard"; // The inner card
import { HiOutlineSparkles } from "react-icons/hi";
import { projectData } from "../projectsList"; // Your project data

export const Projects = () => {
  return (
    <Card title="Recent Projects" icon={<HiOutlineSparkles />} cta="View All">
      {/* Responsive grid: 1 col on mobile, 2 cols on tablet+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectData.slice(0, 4).map(
          (
            project,
            index // Show first 4 projects
          ) => (
            <ProjectCard key={index} project={project} />
          )
        )}
      </div>
    </Card>
  );
};
