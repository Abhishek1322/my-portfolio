import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";

interface ItechnolabsProps {
  url?: string;
}

const Itechnolabs: React.FC<ItechnolabsProps> = ({
  url = "https://itechnolabs.ca/",
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
            @ Itechnolabs Inc.
          </a>
        </h3>
        <span className="font-mono text-sm text-muted-foreground">
          Apr 2023 – Apr 2025
        </span>
      </div>
      <ul className="space-y-3">
        {[
          "Worked on multiple client-facing projects, contributing to the development of responsive and scalable user interfaces.",
          "Integrated third-party APIs and payment gateways",
          "Actively participated in requirement analysis, feature implementation, and UI optimization to enhance user experience.",
          "Strengthened client communication and project ownership skills by delivering solutions aligned with business requirements and deadlines.",
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

export default Itechnolabs;
