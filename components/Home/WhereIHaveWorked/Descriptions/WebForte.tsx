import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";

interface WebForteProps {
  url?: string;
}

const WebForte: React.FC<WebForteProps> = ({
  url = "https://web-forte.com/",
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
            @ Web Forte Technologies
          </a>
        </h3>
        <span className="font-mono text-sm text-muted-foreground">
          Jan 2023 - Present
        </span>
      </div>
      <ul className="space-y-3">
        {[
          "Currently working as a Frontend Developer, handling both UI/UX design and frontend functionality for web applications.",
          "Responsible for translating design requirements into responsive, user-friendly interfaces with a strong focus on usability and performance.",
          "Implemented responsive designs and optimized application performance",
          "Mentored junior developers and conducted code reviews",
          "Implemented frontend logic and integrated backend services using Supabase for authentication, database management, and real-time data handling.",
          "Collaborating with team members to develop scalable features, optimize application performance, and ßßensure smooth user experiences.",
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

export default WebForte;
