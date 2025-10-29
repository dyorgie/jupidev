import React from "react";
import "../styles/Footer.css";

// Import Icons
import { IoIosPeople } from "react-icons/io";
import { IoMdLink } from "react-icons/io";
import { HiOutlineSpeakerphone, HiOutlineMail } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { MdChevronRight } from "react-icons/md";

const Footer = () => {
  return (
    <section className="info-footer">
      <div className="footer-grid">
        {/* --- Column 2: Social Links --- */}
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
            <FaLinkedinIn /> <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/dyorgie"
            className="info-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/bobongbanana/"
            className="info-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> <span>Instagram</span>
          </a>
        </div>
        {/* --- Column 4: Contact --- */}

        <div className="footer-column">
          <a href="mailto:lagmay.jethro113@gmail.com" className="info-card">
            <HiOutlineMail />
            <div>
              <span className="card-title">Email</span>
              <span className="card-subtitle">lagmay.jethro113@gmail.com</span>
            </div>
          </a>
          <a href="#" className="info-card">
            <BsChatDots />
            <div>
              <span className="card-title">Let's Talk</span>
              <span className="card-subtitle">Schedule a Call</span>
            </div>
            <MdChevronRight />
          </a>
          <a
            href="https://discord.gg/uPekWkD5Hx"
            target="_blank"
            rel="noopener noreferrer"
            className="info-card"
          >
            <IoIosPeople />
            <div>
              <span className="card-title">Community</span>
              <span className="card-subtitle">Join Discussion</span>
            </div>
            <MdChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
