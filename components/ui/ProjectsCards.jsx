import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Lumina",
    category: "Social Community Platform",
    year: "2025",
    description:
      "A calm, friendly social platform interface focused on clarity, approachability, and everyday interactions — designed to feel lightweight, human, and easy to use..",
    tags: ["Social Experience", "Gamification", "UI Engineering"],
    image: " bg-[#D9CFA6] ",
    text: "text-[#B1A988] hover:text-[#8F886D]",
    link: "/projects",
  },

  {
    id: 2,
    title: "Oakwood",
    category: "Interactive Portfolio",
    year: "2025",
    description:
      "A developer portfolio reimagined as a fully functional desktop OS. This immersive interface blends technical prowess with creative design, showcasing code in its native habitat.",
    tags: ["System Design", "OS Simulation", "Creative Dev"],
    image: "bg-[#E8E7E3]",
    text: "text-[#92918F] hover:text-[#666]",
    link: "/projects",
  },

  {
    id: 3,
    title: "Verve",
    category: "Hospitality & Brand",
    year: "2025",
    description:
      "A warm, atmospheric cafe website concept focused on mood, comfort, and first impressions — translating an interior experience into a digital one..",
    tags: ["Hospitality", "Visual Identity", "UX Design"],
    image: "bg-[#E8E7E3]",
    text: "text-[#92918F] hover:text-[#666]",
    link: "/projects",
  },
];
const ProjectsCards = () => {
  return (
    <div className="flex flex-col gap-32">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col  gap-12 items-center ${
            index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="w-full md:w-1/2 ">
            <div className=" relative aspect-4/3 bg-neutral-200 rounded-sm overflow-hidden">
              <div
                className={`${project.image} absolute inset-0 w-full aspect-4/5 flex flex-1  items-center justify-center md:max-h-160 md:h-full overflow-hidden`}
              />

              <div
                className={` relative flex items-center justify-center w-full h-full text-4xl md:text-5xl lg:text-6xl font-[playfair-display] duration-500 transition-colors ease-out ${project.text} `}
              >
                
                {project.title}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex items-center  gap-2 text-xs font-medium text-neutral-400 mb-6 uppercase tracking-wider">
              <span>{project.category} </span>

              <span>•</span>

              <span>{project.year} </span>
            </div>

            <h2 className="text-4xl  md:text-5xl text-neutral-900 mb-6 font-serif tracking-tight">
              
              {project.title}
            </h2>

            <p className="text-neutral-600  mb-8 leading-relaxed text-base">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className=" px-3 py-1 text-xs  bg-neutral-100 border-neutral-200 font-medium text-neutral-600 pb-1 hover:text-gray-600 transition-colors  rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={project.link}
              className=" relative group/btn text-sm font-medium text-neutral-800  pb-1 hover:text-neutral-900 transition-colors"
            >
              View Project
              <span className=" absolute w-full h-px scale-x-0 group-hover/btn:scale-x-100  left-0 bottom-px bg-neutral-700  origin-left transform transition-all duration-300 ease-out will-change-transform "></span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;
