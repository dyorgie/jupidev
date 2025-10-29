// src/components/Hero.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen min-h-[700px] flex flex-col justify-center p-6"
    >
      <div className="container mx-auto max-w-5xl">
        {/* The large serif heading */}
        <h1 className="font-serif text-6xl md:text-8xl font-medium text-primary mb-6">
          Jethro Lagmay
        </h1>
        {/* The sans-serif subtitle */}
        <p className="font-sans text-xl md:text-2xl text-secondary max-w-3xl mb-10">
          A passionate developer building applications for the web.
          {/* Add your personal mission statement here */}
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/your-username" // Change this
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/your-username" // Change this
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
