import React from "react";
import { HiOutlineSparkles } from "react-icons/hi"; // Icon for hobbies

import "../styles/About.css";

const BeyondCoding = () => {
  return (
    <section className="content-card">
      <h2 className="card-heading">
        <HiOutlineSparkles /> Beyond Coding
      </h2>

      <div className="about-content">
        <p>
          Outside of coding, I work as a photographer and the media head for our
          church ministry. I also enjoy cooking, watching films, and learning
          about new technologies.
        </p>
      </div>
    </section>
  );
};

export default BeyondCoding;
