import ProjectsCards from "@/components/ui/ProjectsCards";
import React from "react";
import CtaSection from "@/components/section/projects/ProjectCta";
import ProjectCta from "@/components/section/projects/ProjectCta";

const processData = [
  {
    title: "End-to-end",
    desc: "Strategy to code. We handle every layer so nothing gets lost in translation.",
  },
  {
    title: "Small team, full focus",
    desc: "We take on 2-3 projects at a time. Each one gets our undivided attention.",
  },
  {
    title: "Long-term partners",
    desc: "Most clients come back. We design for growth, not just launch day.",
  },
];

const ProjectPage = () => {
  return (
    <main className="bg-projects-gradient min-h-screen pt-32 pb-10 px-6 ">
      <div className="max-w-7xl m-auto">
        {/* head 😶‍🌫️😶‍🌫️ */}
        <div className="mb-24">
          <span className=" text-sm text-neutral-500 mb-2 block ">
            Selected works
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-neutral-900 mb-6">
            Projects we're proud of.
          </h1>
          <p className="text-xs md:text-sm text-neutral-500 leading-relaxedtext-neutral-600 max-w-2xl leading-relaxed">
            A small selection of recent work. Each project reflects our
            approach: clear thinking, careful craft, and lasting partnerships.
          </p>
        </div>

        {/* Grid 🍀🍀 */}
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-12 border-t border-neutral-200 pt-12 mb-32">
          {processData.map((data, index) => (
            <div key={index}>
              <h3 className="font-bold text-sm mb-2"> {data.title} </h3>
              <p className="text-xs md:text-[14px] text-neutral-500 leading-relaxed max-w-2xs">
                {data.desc}
              </p>
            </div>
          ))}
          <div></div>
        </div>

        <ProjectsCards />
        
      </div>
        <ProjectCta />
    </main>
  );
};

export default ProjectPage;
