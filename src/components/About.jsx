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
          I'm a full-stack software engineer specializing in developing
          solutions with JavaScript, Python, and PHP. I work on projects
          including building modern web applications, mobile apps, search engine
          optimization, digital marketing, and making code tutorials.
        </p>
        <p>
          I've helped startups and MSMEs grow and streamline their processes
          through software solutions. I've also built a community of over
          200,000 developers sharing knowledge and mentorship.
        </p>
        <p>
          Lately, I've been diving deeper into the world of artificial
          intelligence, focusing on integrating AI tools and techniques into
          modern applications. My work now includes developing AI-powered
          solutions, creating intelligent applications, and leveraging
          generative AI to optimize development workflows and deliver
          cutting-edge technology.
        </p>
      </div>
    </section>
  );
};

export default About;
