import React from "react";
import CtaBtn from "../../ui/CtaBtn";

const CTA = () => {
  return (
    <section
      className=" w-full px-6 py-32 md:p-24 bg-[#FDFCF8] border-t border-neutral-200 "
      id="cta"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start gap-12 md:gap-16 ">
        <div className="flex flex-col gap-6 ">
          <div className="flex  items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <p className="text-sm font-medium  text-neutral-400 tracking-wider uppercase">
              Ready to start?
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9] text-[#121212] ">
            LET'S BUILD SOMETHING <br /> GREAT.{" "}
          </h1>
        </div>

        <p className=" text-xl md:text-2xl text-neutral-700 leading-relaxed max-w-2xl ">
          Tell us about your project. <br className="hidden md:block" /> We'll
          get back to you within 24 hours.
        </p>
        <CtaBtn />
      </div>
    </section>
  );
};

export default CTA;
