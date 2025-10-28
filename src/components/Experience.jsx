import React from "react";
import { Card } from "./Card";
import { HiOutlineBriefcase } from "react-icons/hi";

// This is a single item in the timeline
const ExperienceItem = ({ title, company, date, isLast = false }) => {
  return (
    <li className="flex gap-4">
      {/* --- The Gutter (Dot and Line) --- */}
      <div className="flex flex-col items-center">
        {/* The Dot */}
        <div className="flex-shrink-0 w-4 h-4 mt-1 bg-border rounded-full" />
        {/* The Line (don't show on last item) */}
        {!isLast && <div className="w-px flex-grow bg-border" />}
      </div>

      {/* --- The Content --- */}
      <div className="flex-1 pb-8">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-medium text-text-primary">{title}</h3>
            <p className="text-sm text-text-secondary">{company}</p>
          </div>
          <span className="text-xs text-text-secondary whitespace-nowrap pt-1">
            {date}
          </span>
        </div>
      </div>
    </li>
  );
};

// The main Experience card component
export const Experience = ({ data = [] }) => {
  return (
    <Card title="Experience" icon={<HiOutlineBriefcase />}>
      <ul>
        {data.map((item, index) => (
          <ExperienceItem
            key={index}
            title={item.title}
            company={item.company}
            date={item.date}
            isLast={index === data.length - 1}
          />
        ))}
      </ul>
    </Card>
  );
};
