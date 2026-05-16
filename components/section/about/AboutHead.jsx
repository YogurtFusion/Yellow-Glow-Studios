import React from "react";

const AboutHead = () => {
  return (
    <header className=" flex items-center md:justify-center gap-4 md:gap-6 lg:gap-8 sm:mt-4 mt-24  md:p-12 w-full h-full max-w-3xl mx-auto text-center flex-col">
      <h1 className="text-3xl md:text-4xl lg:text-6xl tracking-tight font-semibold w-full max-w-xs md:max-w-full text-balance ">
        We craft digital experiences with editorial precision and artisanal
        intent.
      </h1>
      <p className=" max-w-md w-full md:max-w-full leading-relaxed tracking-wide text-pretty opacity-80 ">
        Yellow Glow Studios is a multidisciplinary design practice focused on
        quiet luxury, deliberate spacing and typography-driven interfaces.
      </p>
    </header>
  );
};

export default AboutHead;
