import React from "react";
import "../styles/TechStack.css";
import { HiOutlineChip } from "react-icons/hi"; // Icon for "Tech Stack"
import { MdChevronRight } from "react-icons/md";

const TechStack = () => {
  // You can later make this data dynamic
  const tech = {
    languages: ["Python", "SQL", "JavaScript", "TypeScript"],
    dataanalytics: ["Pandas", "Power BI", "Microsoft Excel", "Data Visualization"],
    frontend: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
    backend: ["Node.js", "Supabase", "Firebase"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Firestore"],
    tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Postman", "Trello", "Slack", "Notion"],
  };

  return (
    <section className="content-card tech-stack-section">
      <div className="card-header-split">
        <h2 className="card-heading">
          <HiOutlineChip /> Tech Stack
        </h2>
      </div>

      <div className="stack-group">
        <h3>Languages</h3>
        <div className="tech-tags">
          {tech.languages.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="stack-group">
        <h3>Data Analytics</h3>
        <div className="tech-tags">
          {tech.dataanalytics.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
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
        <h3>Databases</h3>
        <div className="tech-tags">
          {tech.databases.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="stack-group">
        <h3>Tools</h3>
        <div className="tech-tags">
          {tech.tools.map((tag) => (
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
