import React from "react";
import HeroButton from "../../ui/HeroButton";
const Hero = () => {
  return (
    <section
      className="hero min-h-screen w-full flex items-center justify-center md:pt-0 pt-24  "
      id="hero"
    >
      <div className=" max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="hero-head grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-0 items-end">
          <div className="md:col-span-7 flex flex-col">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] ">
              <span className="block text-[#1E1E1E]">YELLOW </span>
              <span className="block text-[#E6C35A]">GLOW </span>
              <span className="block text-[#1e1e1ecc]">STUDIOS</span>
            </h1>
          </div>
          {/* hero body */}
          <div className=" md:col-span-5 flex flex-col md:items-start md:pl-8  space-y-8">
            <p className=" text-xl md:text-2xl text-neutral-800  leading-relaxed font-medium max-w-md text-halo ">
              Websites for small brands, restaurants and cafés that turn
              visitors into customers.
            </p>
            <div className="hero-btn w-fit ">
              <HeroButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
