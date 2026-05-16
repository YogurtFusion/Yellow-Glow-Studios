import React from "react";
import AboutBtn from "../../ui/AboutBtn";
const approachData = [
  {
    week: "week 01",
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business goals, user needs, and technical constraints.",
  },
  {
    week: "week 02",
    title: "Design & Prototyping",
    description:
      "We design, test, and refine until the solution feels right and works seamlessly",
  },
  {
    week: "week 03",
    title: "Build & Launch",
    description:
      "We build with clean code, deploy with confidence, and support you beyond launch.",
  },
];
const About = () => {
  return (
    <section
      className=" w-full bg-[#FDFCF8] text-[#121212] py-20 px-6  border-b border-neutral-200 "
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto ">
        <div className="left relative flex flex-col justify-between gap-12 lg:pr-16 lg:py-8 lg:border-r border-neutral-200 ">
          <div className="flex flex-col gap-8 lg:sticky lg:top-10">
            <span className="uppercase tracking-[0.2em] text-sm text-neutral-500 font-medium ">
              Who are we
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight ">
            We’re a focused web studio built on clarity, execution & <span className="text-neutral-400">restraint</span>
            </h2>
            <div className="flex flex-col gap-6 max-w-md text-neutral-600 text-lg leading-relaxed">
              <p>
                Every project is handled directly, end to end — with no layers, no handoffs, and full attention.
              </p>
            </div>
            <div className="pt-4">
              <AboutBtn />
            </div>
          </div>
        </div>

        <div className=" abt-right lg:pl-16 lg:py-8 mt-12 lg:mt-0 flex flex-col  ">
          <div className="right-head flex flex-col gap-8 mb-16">
            <span className="uppercase tracking-[0.2em] text-sm text-neutral-500 font-medium ">
              Our Approach
            </span>

            <h3 className=" text-2xl md:text-3xl font-normal leading-snug text-neutral-800">
              We start with strategy, move through design, and finish with
              flawless execution. No handoffs, no miscommunication
            </h3>
          </div>
          {approachData.map((about, index) => (
            <div
              key={index}
              className="right-body group flex flex-col gap-4 border-t border-neutral-200 pt-8 transition-colors  duration-300 hover:border-neutral-900"
            >
              <span className="uppercase tracking-widest text-xs text-neutral-400 group-hover:text-black transition-colors">
                {about.week}{" "}
              </span>
              <div className="flex flex-col  md:justify-between md:flex-row  md:gap-8">
                <h4 className="text-neutral-900  text-xl font-medium  w-full md:w-1/3 ">
                  {about.title}
                </h4>
                <p className="text-neutral-600 leading-relaxed w-full md:w-2/3">
                  {about.description}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;