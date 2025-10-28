import React from "react";
// import { Card } from './Card'; // Removed this import to fix the error
// import { HiOutlineUser } from 'react-icons/hi'; // Removed this import to fix the error

export const About = () => {
  return (
    // Inlined 'Card' component structure
    <section className="bg-card border border-border rounded-xl shadow-sm">
      {/* Inlined Card Header */}
      <div className="flex items-center justify-between p-5 sm:p-6 border-b border-border">
        <div className="flex items-center gap-3">
          {/* Icon was here, removed for now to fix build */}
          <h2 className="text-lg font-bold text-text-primary">About</h2>
        </div>
      </div>

      {/* Inlined Card Body */}
      <div className="p-5 sm:p-6">
        <div className="space-y-4 text-text-secondary text-base">
          <p>
            Hello! I'm Jethro. I'm a full-stack developer specializing in React,
            Firebase, and NodeJS. I'm passionate about building modern web
            applications that solve real-world problems.
          </p>
          <p>
            My goal is to leverage technology to create efficient and scalable
            solutions, from community projects like animal rescue platforms to
            robust digital tools for businesses.
          </p>
        </div>
      </div>
    </section>
  );
};
