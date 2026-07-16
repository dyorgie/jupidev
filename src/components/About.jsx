import React from "react";
import "../styles/About.css";
import { FaRegUser } from "react-icons/fa"; // Icon for "About"

const About = () => {
  return (
    <section className="content-card about-section">
      <h2 className="card-heading">
        <FaRegUser /> About
      </h2>
      <div className="about-content">
        <p>
          I am an aspiring Data Engineer with a strong passion for transforming data into meaningful insights and building reliable, scalable data solutions that drive informed decision-making. My background in full-stack software development and quality assurance has provided me with hands-on experience in designing and developing web applications, testing software for quality and reliability, and creating user-centered digital solutions. These experiences have given me a solid understanding of the complete software development lifecycle and the importance of building systems that are efficient, maintainable, and impactful.
        </p>
        <p>
          Beyond software development, I am continuously expanding my expertise in data engineering, data analytics, and data science, with a growing interest in Artificial Intelligence (AI) and machine learning. I enjoy learning new technologies and exploring how data and intelligent systems can be leveraged to solve real-world problems, improve automation, and support data-driven innovation. My goal is to become a versatile technology professional who bridges software engineering, data, and AI to develop solutions that create meaningful value for businesses and communities.
        </p>
      </div>
    </section>
  );
};

export default About;
