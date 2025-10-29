import React from "react";
import { HiOutlineSparkles } from "react-icons/hi"; // Icon for hobbies

// 1. Import About.css to re-use the paragraph styles
import "../styles/About.css";

const BeyondCoding = () => {
  return (
    <section className="content-card">
      <h2 className="card-heading">
        <HiOutlineSparkles /> Beyond Coding
      </h2>

      {/* 2. Re-use the "about-content" class from About.jsx */}
      <div className="about-content">
        {/* 3. Add your text as a paragraph */}
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
