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
          I am an aspiring Full-Stack Software Engineer with a strong passion
          for creating innovative and impactful digital solutions using modern
          web technologies. My current work involves developing progressive web
          applications, designing scalable web solutions, and managing digital
          marketing and project workflows to ensure seamless and user-centered
          outcomes. Through these projects, I have gained hands-on experience in
          both front-end and back-end development, as well as a deep
          appreciation for building systems that are efficient, accessible, and
          adaptable to real-world needs.
        </p>
        <p>
          Beyond web development, I am eager to deepen my knowledge in
          Artificial Intelligence (AI) and explore how intelligent systems can
          be integrated into applications to enhance automation,
          personalization, and data-driven decision-making. I am continuously
          learning and experimenting with new technologies, with the goal of
          becoming a versatile developer capable of bridging the gap between
          software engineering and AI innovation.
        </p>
      </div>
    </section>
  );
};

export default About;
