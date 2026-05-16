import Image from "next/image";
import React from "react";
import studioImg from "@/assets/img/studio.png";
const Philosophy = () => {
  return (
    <section className=" w-full px-4 py-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      <div className=" aspect-4/5 relative w-full  max-w-md overflow-hidden rounded-lg ">
        <Image
          className=" object-cover "
          src={studioImg}
          alt="studio image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 33vw "
        />
      </div>

      <div className=" flex flex-col justify-center items-center w-full ">
        <h2 className=" font-semibold text-2xl text-stone-900 leading-snug text-left w-full max-w-sm  ">
          Our Philosophy
        </h2>
        <p className=" text-stone-800 max-w-sm text-pretty leading-normal text-base">
          We believe in the power of negative space. In a world of visual noise,
          restraint is a luxury. Our approach marries the tactile sensibility of
          print design with the fluid constraints of digital environments.
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
