import React from "react";
import Image from "next/image";
const cardData = [
  {
    title: "Oakwood",
    desc: "E-commerce",
  },
];
const ProjectSmallCardTop = () => {
  return (
    <div className="flex flex-col flex-1">
     {cardData.map((data, index) =>(

       <div className=" flex flex-col w-full" key={index}>
        <div className=" relative bg-[#E8E7E3] flex-1 w-full flex items-center justify-center min-h-[20rem] overflow-hidden  ">
        
          <span className="font-serif italic text-3xl text-[#92918F] ">
            Oakwood
          </span>
        </div>
        <div className="mt-3">
          <h3 className="text-lg lg:text-4xl font-medium text-[#666] ">{data.title} </h3>
          <p className="text-sm text-neutral-600 "> {data.desc} </p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ProjectSmallCardTop;
