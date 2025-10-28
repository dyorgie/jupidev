import React from "react";
import "../styles/TechStack.css";
import { HiOutlineChip } from "react-icons/hi"; // Icon for "Tech Stack"
import { MdChevronRight } from "react-icons/md";

const TechStack = () => {
  // You can later make this data dynamic
  const tech = {
    frontend: ["JavaScript", "React", "Vue.js", "Tailwind CSS"],
    backend: ["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB"],
    projectmanagement: ["Jira", "Trello", "Notion", "Slack"],
  };

  return (
    <section className="content-card tech-stack-section">
      <div className="card-header-split">
        <h2 className="card-heading">
          <HiOutlineChip /> Tech Stack
        </h2>
      </div>

      <div className="stack-group">
        <h3>Frontend</h3>
        <div className="tech-tags">
          {tech.frontend.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="stack-group">
        <h3>Backend</h3>
        <div className="tech-tags">
          {tech.backend.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="stack-group">
        <h3>Project Management</h3>
        <div className="tech-tags">
          {tech.projectmanagement.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
