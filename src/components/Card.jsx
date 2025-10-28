import React from "react";

/**
 * A reusable card component that acts as the "box-like divider".
 * @param {string} title - The title of the section card.
 * @param {React.ReactNode} icon - The icon component (e.g., <HiOutlineUser />).
 * @param {React.ReactNode} children - The content to be displayed inside the card.
 * @param {React.ReactNode} cta - An optional "Call to Action" link (e.g., "View All").
 */
export const Card = ({ title, icon, cta, children }) => {
  return (
    // The main card container with white background, border, and rounding
    <section className="bg-card border border-border rounded-xl shadow-sm">
      {/* Card Header */}
      <div className="flex items-center justify-between p-5 sm:p-6 border-b border-border">
        <div className="flex items-center gap-3">
          {/* Clone the icon and add styling */}
          {React.cloneElement(icon, {
            className: "w-6 h-6 text-text-secondary",
          })}
          <h2 className="text-lg font-bold text-text-primary">{title}</h2>
        </div>
        {/* Optional "Call to Action" link (e.g., "View All") */}
        {cta && (
          <a
            href="#"
            className="text-sm font-medium text-accent hover:underline"
          >
            {cta}
          </a>
        )}
      </div>

      {/* Card Body: The content is passed in here */}
      <div className="p-5 sm:p-6">{children}</div>
    </section>
  );
};
