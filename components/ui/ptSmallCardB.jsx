import React from "react";
import Image from "next/image";

const cardData = [
  {
    title: "Verve",
    desc: "Digital Product",
  },
];
const ProjectSmallCardBottom = () => {
  return (
    <div className="flex flex-col relative ">
      {cardData.map((data, index) => (
        <div key={index} className=" flex flex-col w-full">
          <div className="bg-[#E8E7E3] relative w-full flex items-center justify-center overflow-hidden aspect-square md:aspect-video  ">
        <span className="font-serif italic text-3xl text-[#92918F] ">
            Verve
          </span>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-medium text-neutral-900 ">{data.title} </h3>
            <p className="text-sm text-neutral-600 ">{data.desc} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSmallCardBottom;
