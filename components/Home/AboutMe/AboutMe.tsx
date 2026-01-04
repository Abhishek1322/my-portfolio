import React from "react";
import Img from "../../../components/smallComp/image/Img"; // Assuming this path is correct for your project
import ArrowIcon from "../../../components/Icons/ArrowIcon"; // Assuming this path is correct for your project
import { forwardRef } from "react";
import {
  Atom,
  Layout,
  Code2,
  Braces,
  FileCode2,
  Paintbrush,
  Layers,
  Palette,
  Box,
  Database,
  Flame,
  GitBranch,
  Github,
  Cloud,
} from "lucide-react";

interface AboutMeProps {
  // Define any props you might pass to AboutMe here
  // For example: profileImageUrl?: string;
}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  const techWithIcons = [
    [
      { name: "React.js", icon: Atom },
      { name: "Next.js", icon: Layout },
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: Braces },
      { name: "Html", icon: FileCode2 },
      { name: "Css", icon: Paintbrush },
      { name: "Scss", icon: Layers },
      { name: "Tailwind CSS", icon: Palette },
    ],
    [
      { name: "BootStrap", icon: Box },
      { name: "MUI", icon: Layers },
      { name: "Ant Design", icon: Palette },
      { name: "Supabase", icon: Database },
      { name: "Firebase", icon: Flame },
      { name: "Git", icon: GitBranch },
      { name: "Git Hub", icon: Github },
      { name: "Bitbucket", icon: Cloud },
    ],
  ];

  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary"
    >
      {/* 0.1 About Me Title */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Paragraphs & Image */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <div className="font-Header text-gray-400 text-justify">
              Hey there! I&apos;m Abhishek Kumar, a passionate{" "}
              <span className="text-AAsecondary">Frontend Developer</span> with{" "}
              <span className="text-AAsecondary">3+ years of experience</span>{" "}
              building modern, user-centric web applications. My journey with
              technology started early—driven by curiosity and a love for
              building things with code—and has grown into a career focused on
              crafting high-quality digital experiences.
            </div>

            <div className="font-Header text-gray-400 text-justify">
              I specialize in creating{" "}
              <span className="text-AAsecondary">performant</span>,{" "}
              <span className="text-AAsecondary">accessible</span>, and{" "}
              <span className="text-AAsecondary">visually polished</span>{" "}
              interfaces using{" "}
              <span className="text-AAsecondary">React.js</span>,{" "}
              <span className="text-AAsecondary">Next.js</span>, and other
              modern frontend technologies. With a strong eye for design and a
              deep appreciation for seamless user experiences, I enjoy
              translating ideas into scalable, maintainable solutions that
              deliver real value.
            </div>

            <div className="font-Header text-gray-400 text-justify">
              I thrive in dynamic environments where I can solve meaningful
              problems, continuously learn, and push the boundaries of modern
              web development. Whether it&apos;s refining user interactions or
              exploring new tools and patterns, I&apos;m always excited to take
              on new challenges and grow as a developer.
            </div>

            <div className="font-Header tracking-wide text-gray-400 pt-2 pb-1 text-justify">
              Here&apos;s what I&apos;m usually working with these days:
            </div>

            {/* Technologies List */}
            <div className="font-Header tracking-wide flex flex-row space-x-12 md:space-x-16 justify-center lg:justify-start">
              {techWithIcons.map((techGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-col space-y-4 sm:text-base text-sm"
                >
                  {techGroup.map((tech, techIndex) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={techIndex}
                        className="flex flex-row items-center space-x-3 group"
                      >
                        <Icon className="h-4 w-4 text-AAsecondary group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Image Section (Desktop and Tablet) */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>

          {/* Image Section (Mobile) */}
          <div className="relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full bg-AAsecondary opacity-10 md:opacity-60 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
});
AboutMe.displayName = "AboutMe";
export default AboutMe; // Changed to a const for functional component definition with type
