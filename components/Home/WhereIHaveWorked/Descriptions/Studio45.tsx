import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";

interface Studio45Props {
  url?: string;
}

const Studio45: React.FC<Studio45Props> = ({
  url = "https://studio45creations.com/",
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col">
        <h3 className="text-foreground font-semibold text-lg">
          Frontend Developer{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-4 transition-all"
          >
            @ Studio45 Creations
          </a>
        </h3>
        <span className="font-mono text-sm text-muted-foreground">
          Oct 2022 – Apr 2023
        </span>
      </div>
      <ul className="space-y-3">
        {[
          "Created interactive and responsive web interfaces using modern frameworks",
          "Collaborated with designers to implement pixel-perfect UI components",
          "Took ownership of the complete frontend development lifecycle for multiple projects",
          "Developed reusable component libraries for faster development",
          "Worked closely with cross-functional teams to ensure seamless frontend and backend integration",
          "Delivered standalone projects with a strong focus on performance, usability, and maintainability.",
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <ArrowIcon className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
            <span className="text-muted-foreground text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Studio45;
