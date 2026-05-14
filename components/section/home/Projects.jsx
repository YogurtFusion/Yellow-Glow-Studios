import React from "react";
import SectionBtn from "../../ui/SectionBtn";
import ProjectLargeCard from "../../ui/PtLargeCard";
import ProjectSmallCardTop from "../../ui/ptSmallCardT";
import ProjectSmallCardBottom from "../../ui/ptSmallCardB";

const Projects = () => {
  return (
    <section
      className="md:p-12 w-full max-w-7xl mx-auto  px-4 py-24 bg-neutral-100"
      id="project"
    >
      <div className="project-head flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-16 gap-6  ">
        <div className="flex flex-col gap-3 ">
          <p className="text-sm md:text-base text-neutral-600 font-medium uppercase tracking-wider">
            Selected work
          </p>
          <h2 className="text-4xl md:text-6xl text-neutral-900 tracking-tight leading-[1.1]  ">
            <span className="block">Projects we're</span>
            <span className="block">proud of</span>
          </h2>
        </div>
        <div className="w-full md:w-auto flex justify-start md:justify-end">
          <SectionBtn />
        </div>
      </div>
      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <div className="w-full">
          <ProjectLargeCard />
        </div>

        <div className="right-col flex flex-col gap-8 h-full ">
          <ProjectSmallCardTop />

          <ProjectSmallCardBottom />
        </div>
      </div>
    </section>
  );
};

export default Projects;
