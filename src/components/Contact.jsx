// src/components/Contact.jsx
import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-serif text-4xl text-primary font-semibold mb-6">
          Get In Touch
        </h2>
        <p className="font-sans text-xl text-secondary mb-8 max-w-xl mx-auto">
          I'm always open to discussing new projects or opportunities. Feel free
          to send me an email.
        </p>
        <a
          href="mailto:your.email@example.com" // Change this
          className="font-sans text-lg font-medium text-dark bg-primary hover:bg-secondary px-8 py-3 rounded-md transition-colors duration-300"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};
