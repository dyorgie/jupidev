import React from "react";
import { Card } from "./Card";
import { HiOutlineChip } from "react-icons/hi";

// A simple component for styling the tech tags
const TechTag = ({ children }) => (
  <span className="bg-tag text-text-primary text-sm font-medium px-3 py-1.5 rounded-lg">
    {children}
  </span>
);

export const TechStack = () => {
  return (
    <Card title="Tech Stack" icon={<HiOutlineChip />} cta="View All">
      <div className="space-y-6">
        <div>
          <h3 className="text-base font-semibold text-text-primary mb-3">
            Frontend
          </h3>
          <div className="flex flex-wrap gap-2">
            <TechTag>React</TechTag>
            <TechTag>Vite</TechTag>
            <TechTag>Tailwind CSS</TechTag>
            <TechTag>JavaScript</TechTag>
            <TechTag>HTML</TechTag>
            <TechTag>CSS</TechTag>
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold text-text-primary mb-3">
            Backend
          </h3>
          <div className="flex flex-wrap gap-2">
            <TechTag>NodeJS</TechTag>
            <TechTag>Firebase</TechTag>
            <TechTag>PHP</TechTag>
            <TechTag>MySQL</TechTag>
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold text-text-primary mb-3">
            Other
          </h3>
          <div className="flex flex-wrap gap-2">
            <TechTag>PowerBI</TechTag>
            <TechTag>Git</TechTag>
            <TechTag>Kotlin</TechTag>
          </div>
        </div>
      </div>
    </Card>
  );
};
