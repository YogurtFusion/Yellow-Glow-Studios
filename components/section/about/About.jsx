import React from "react";
import AboutHead from "./AboutHead";
import Philosophy from "./Philosophy";
import AboutValue from "./AboutValue";

const About = () => {
  return (
    <section className="about-bg min-h-screen w-full flex flex-col justify-center ">
      {/* wrap */}
      <div className=" px-6 py-8 md:p-12 lg:p-24  w-full">
        {/* head */}
        <AboutHead/>

        <Philosophy/>
        <AboutValue/>
      </div>
    </section>
  );
};

export default About;
