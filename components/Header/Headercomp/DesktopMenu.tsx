import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link as ReactScrollLink } from "react-scroll";
import { Briefcase, FileUser, Grid, Mail } from "lucide-react";

export default function DesktopMenu(props: { finishedLoading: boolean }) {
  return (
    <div className="font-mono md:flex hidden flex-row items-center space-x-12 text-base">
      {[
        {
          id: "aboutSection",
          label: "About",
          icon: <FileUser />,
          delay: 9.4,
          offset: -100,
        },
        {
          id: "WhereIhaveWorkedSection",
          label: "Experience",
          icon: <Briefcase />,
          delay: 9.7,
          offset: -300,
        },
        {
          id: "SomethingIveBuiltSection",
          label: "Work",
          icon: <Grid />,
          delay: 9.8,
          offset: -100,
        },
        {
          id: "GetInTouchSection",
          label: "Contact",
          icon: <Mail />,
          delay: 10,
          offset: -100,
        },
      ].map((item) => (
        <motion.div
          key={item.id}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: props.finishedLoading ? 0 : 1.2,
            delay: props.finishedLoading ? 0 : item.delay,
          }}
          className="text-AAsecondary"
        >
          <ReactScrollLink
            to={item.id}
            spy
            smooth
            offset={item.offset}
            duration={200}
            className="group cursor-pointer flex items-center space-x-2"
          >
            {/* Icon */}
            {/* <span className="text-AAsecondary text-lg group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </span> */}

            {/* Label */}
            <span
              className="
              text-white
              relative
              font-medium
              transition-all duration-300
              group-hover:text-AAsecondary
              group-hover:-translate-y-0.5
            "
            >
              {item.label}
              <span
                className="
                absolute left-0 -bottom-1
                h-[1.5px] w-0
                bg-AAsecondary
                transition-all duration-300
                group-hover:w-full
              "
              />
            </span>
          </ReactScrollLink>
        </motion.div>
      ))}

      {/* Resume Button */}
      <a href="/resume.pdf" target="_blank" rel="noreferrer">
        <motion.button
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: props.finishedLoading ? 0 : 1.2,
            delay: props.finishedLoading ? 0 : 10.2,
          }}
          className="
          ml-6
          relative overflow-hidden
          border border-AAsecondary
          text-AAsecondary
          px-5 py-2.5
          rounded-md
          text-base
          tracking-wide
          transition-all duration-300
          hover:text-[#0b2f1d]
          hover:shadow-[0_0_12px_rgba(79,209,165,0.4)]
          group
        "
        >
          <span
            className="
            absolute inset-0
            bg-AAsecondary
            translate-y-full
            group-hover:translate-y-0
            transition-transform duration-300
          "
          />
          <span className="relative z-10">Resume</span>
        </motion.button>
      </a>
    </div>
  );
}
