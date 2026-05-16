import React from "react";

const Data = [
    {
        no: "01",
        title: "End-to-end",
        para: "From initial brand strategy to final pixel execution, we handle every touchpoint. This cohesive approach ensures your narrative remains unbroken across all   platforms.",
    },
    {
        no: "02",
        title: "Small team",
        para: "We remain intentionally small. You work directly with the principals, avoiding the dilution of vision that often occurs in larger agency structures.",
    },
    {
        no: "03",
        title: "Long-term partners",
        para: "We seek relationships, not transactions. We invest deeply in our clients' success, acting as strategic design partners for years, not just months.",
    },
];
const AboutValue = () => {
  return (
    <section className="max-w-7xl mx-auto pb-4" >
      {/* wrap */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between items-center">
        {Data.map((item) => (
          <div key={item.no} className=" max-w-xs mx-auto flex flex-col gap-2 md:gap-4 ">
            <span className="font-semibold text-[#745C00] text-xs tracking-widest leading-tight md:mb-4">
              {item.no}
            </span>
            <h2 className="text-[#1A1C19] text-xl font-semibold leading-snug  ">
              {item.title}
            </h2>
            <p className="text-[#4D4636] text-base leading-relaxed text-pretty ">
              {item.para}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutValue;
