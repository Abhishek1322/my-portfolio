import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import WebForte from "./Descriptions/WebForte";
import Itechnolabs from "./Descriptions/Itechnolabs";
import Studio45 from "./Descriptions/Studio45";
import ArrowIcon from "../../Icons/ArrowIcon";

const COMPANIES = [
  {
    id: "WebForte",
    name: "Web Forte",
    fullName: "Web Forte Technologies",
    logo: "/web_forte.webp",
    url: "https://webforte.in",
  },
  {
    id: "Itechnolabs",
    name: "Itechnolabs",
    fullName: "Itechnolabs Inc.",
    logo: "/Logo-itechnolabs.png",
    url: "https://itechnolabs.ca",
  },
  {
    id: "Studio45",
    name: "Studio45",
    fullName: "Studio45 Creations",
    logo: "/studio45-logo.png",
    url: "https://studio45.in",
  },
];

const DESCRIPTION_MAP: Record<string, React.ComponentType> = {
  WebForte: WebForte,
  Itechnolabs: Itechnolabs,
  Studio45: Studio45,
};

interface CompaniesBarProps {
  descriptionJob: string;
  setDescriptionJob: (job: string) => void;
}

const CompaniesBar = ({
  descriptionJob,
  setDescriptionJob,
}: CompaniesBarProps) => {
  const activeIndex = COMPANIES.findIndex(
    (company) => company.id === descriptionJob
  );

  return (
    <div className="flex flex-col md:flex-row w-full lg:w-auto overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0">
      {/* Left vertical bar - Desktop */}
      <div className="hidden md:block relative md:h-auto md:w-0.5 rounded-full bg-border">
        <motion.div
          animate={{ y: activeIndex * 64 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute w-0.5 h-16 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary))]"
        />
      </div>

      {/* Company Buttons */}
      <div className="flex flex-row md:flex-col">
        {COMPANIES.map((company) => (
          <button
            key={company.id}
            onClick={() => setDescriptionJob(company.id)}
            className={`group font-mono text-xs sm:text-sm py-4 px-4 md:px-6 min-w-[140px] sm:min-w-[160px] md:min-w-[180px] text-left transition-all duration-300 flex items-center gap-3 ${
              descriptionJob === company.id
                ? "bg-secondary/80 text-primary"
                : "text-muted-foreground hover:bg-secondary/40 hover:text-primary"
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-white p-1.5 flex items-center justify-center overflow-hidden shadow-sm">
              <img
                src={company.logo}
                alt={company.name}
                className={`w-full h-full object-contain transition-all duration-300 ${
                  descriptionJob === company.id
                    ? "opacity-100"
                    : "opacity-60 group-hover:opacity-100"
                }`}
              />
            </div>
            <span className="truncate">{company.name}</span>
          </button>
        ))}
      </div>

      {/* Mobile horizontal bar */}
      <div className="md:hidden h-0.5 bg-border mt-0 relative">
        <motion.div
          animate={{ x: activeIndex * 140 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="h-0.5 w-[140px] sm:w-[160px] bg-primary absolute top-0 shadow-[0_0_10px_hsl(var(--primary))]"
        />
      </div>
    </div>
  );
};

const WhereIHaveWorked = () => {
  const [descriptionJob, setDescriptionJob] = React.useState("WebForte");

  const DescriptionComponent = DESCRIPTION_MAP[descriptionJob];
  const activeCompany = COMPANIES.find((c) => c.id === descriptionJob);

  return (
    <section className="flex flex-col items-center justify-center py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl space-y-10 md:space-y-12"
      >
        {/* Section Title */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1">
            <ArrowIcon className="h-4 md:h-5 w-4 md:w-5 text-primary" />
            <span className="text-primary font-mono text-sm md:text-base">
              02.
            </span>
          </div>
          <h2 className="text-foreground font-display font-semibold text-xl md:text-2xl lg:text-3xl whitespace-nowrap">
            Where I've Worked
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        {/* Content: Tabs + Description */}
        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12">
          <CompaniesBar
            descriptionJob={descriptionJob}
            setDescriptionJob={setDescriptionJob}
          />
          <div className="mt-6 md:mt-0 flex-1 relative min-h-[280px]">
            {/* Company Logo Watermark */}
            {activeCompany && (
              <motion.div
                key={activeCompany.id + "-watermark"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.03, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute right-0 top-0 w-32 h-32 md:w-40 md:h-40 pointer-events-none"
              >
                <img
                  src={activeCompany.logo}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
            )}

            {/* <AnimatePresence mode="wait"> */}
            {DescriptionComponent && (
              <motion.div
                key={descriptionJob}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {DescriptionComponent && <DescriptionComponent />}
              </motion.div>
            )}
            {/* </AnimatePresence> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhereIHaveWorked;
