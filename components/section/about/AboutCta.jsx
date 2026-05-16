import Image from "next/image";
import React from "react";
import CtaImg from "@/assets/img/about-cta.png";
import AboutBtn from "@/components/ui/AboutBtn";

const AboutCta = () => {
  return (
    <section>
      <div className="relative flex items-center justify-center min-h-[60vh] md:min-h-[75vh] p-4 overflow-hidden rounded-lg ">
        <Image
          className="object-cover"
          src={CtaImg}
          alt="Cta image"
          fill
          priority
          sizes="(max-width:768) 100vw, 100vw "
        />
        <div className="relative flex flex-col items-center justify-center gap-1 md:gap-4  bg-[#FAFAF5]/90 max-w-md mx-auto p-6 md:p-8 backdrop-blur-sm rounded-lg shrink-0 text-center ">
          <h2 className="text-xl text-[#1A1C19] tracking-wider font-semibold leading-snug">
            Selected Works
          </h2>
          <p className=" w-full text-center text-[#4D4636] text-base tracking-wide leading-relaxed">
            Explore our archive of recent commissions and studio projects.
          </p>
          <div className="mt-2 ">
            <AboutBtn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCta;
