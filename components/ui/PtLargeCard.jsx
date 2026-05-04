import React from "react";
import Image from "next/image";

const cardData = [
  {
    title: "Lumina",
    desc: "Brand & Web",
  },
];

const ProjectLargeCard = () => {
  return (
    <div className="flex flex-col  ">
      {cardData.map((data, index) => (
        <div key={index} className="flex flex-col w-full">
          <div className=" bg-[#D9CFA6] relative w-full aspect-4/5 flex flex-1  items-center justify-center md:max-h-160 md:h-full  group  overflow-hidden">
            <span className="font-serif italic text-3xl text-[#B1A988] "> {data.title}  </span>
            
          </div>
          <div className="mt-3">
            <h3 className=" text-lg lg:text-4xl font-medium text-[#666] ">{data.title} </h3>
            <p className="text-sm text-neutral-600 ">{data.desc} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectLargeCard;
