import React from "react";
import "../styles/Experience.css";
import { MdOutlineWorkOutline } from "react-icons/md"; // Icon for "Experience"

const experienceData = [
  {
    role: "Mass Media Ministry Head",
    company: "Kadang Dominiko",
    year: "2023",
  },
  {
    role: "BS Computer Science",
    company: "CIIT College of Arts and Technology",
    year: "2022",
  },
  {
    role: "Software Developer",
    company: "Felta Multimedia Inc.",
    year: "2022",
  },
  {
    role: "Technical-Vocational-Livelihood Strand - Software Development",
    company: "iACADEMY",
    year: "2020",
  },
  {
    role: "Hello World!",
    company: "Wrote my first line of code",
    year: "2017",
  },
];

const Experience = () => {
  return (
    <section className="content-card experience-section">
      <h2 className="card-heading">
        <MdOutlineWorkOutline /> Experience
      </h2>

      <ul className="timeline">
        {experienceData.map((item, index) => (
          <li key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
            </div>
            <span className="timeline-year">{item.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
