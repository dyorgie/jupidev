import React from "react";
import "../styles/Footer.css";

// Import Icons
import { IoMdLink } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { MdChevronRight } from "react-icons/md";

const Footer = () => {
  return (
    <section className="info-footer">
      <div className="footer-grid">
        {/* --- Column 1: Social Links --- */}
        <div className="footer-column">
          <h3 className="column-heading">
            <IoMdLink /> Social Links
          </h3>
          
          <a
            href="https://www.linkedin.com/in/jmlagmay/"
            className="info-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
            <div className="card-text-content">
              <span className="card-title">LinkedIn</span>
              <span className="card-subtitle">@jmlagmay</span>
            </div>
          </a>
          
          <a
            href="https://github.com/dyorgie"
            className="info-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <div className="card-text-content">
              <span className="card-title">GitHub</span>
              <span className="card-subtitle">@dyorgie</span>
            </div>
          </a>
        </div>

        {/* --- Column 2: Contact --- */}
        <div className="footer-column">
          {/* INVISIBLE SPACER: Mirrors the left heading perfectly */}
          <h3 className="column-heading" style={{ visibility: "hidden" }}>
            <IoMdLink /> Social Links
          </h3>
          
          <a href="mailto:lagmay.jethro113@gmail.com" className="info-card">
            <HiOutlineMail />
            <div className="card-text-content">
              <span className="card-title">Email</span>
              <span className="card-subtitle">lagmay.jethro113@gmail.com</span>
            </div>
          </a>
          
          <a href="#" className="info-card">
            <BsChatDots />
            <div className="card-text-content">
              <span className="card-title">Let's Talk</span>
              <span className="card-subtitle">Schedule a Call</span>
            </div>
            {/* Pushes the chevron icon to the far right edge */}
            <MdChevronRight style={{ marginLeft: "auto" }} /> 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;