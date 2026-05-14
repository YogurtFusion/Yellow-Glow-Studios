import React from "react";
const servicesData = [
  {
    title: "Design",
    description: "UI/UX design for websites and digital products.",
  },
  {
    title: "Development",
    description:
      "Frontend & Backend development using modern frameworks, focused on performance and maintainability.",
  },
];

const Services = () => {
  return (
    <section
      className="w-full max-w-336 mx-auto p-12 flex flex-col gap-20"
      id="services"
    >
      <div className="project-head grid grid-cols-1 md:grid-cols-2 gap-10 items-end pb-6   border-b border-[#DBDAD6]  ">
        <div className="flex flex-col gap-3 ">
          <p
            className=" uppercase tracking-widest "
            style={{
              fontSize: "var(--fs-sub-head)",
              color: "var(--c-sub-head) ",
            }}
          >
            What We Do
          </p>
          <h1
            className=""
            style={{
              color: "var(--c-h1) ",
              fontSize: "var(--fs-head)",
              lineHeight: "var(--lh-h1)",
              letterSpacing: "var(--ls-p) ",
            }}
          >
            OUR <br /> SERVICES
          </h1>
        </div>
        <div
          className="md:max-w-md"
          style={{
            fontSize: "var(--fs-sub-head)",
            lineHeight: "var(--lh-p)",
            letterSpacing: "var(--ls-p)",
            color: "var(--c-p)",
          }}
        >
          <p className="">
            {/* <p className="text-base "> */}
            We combine strategic thinking with meticulous craft to create
            digital experiences that look beautiful and deliver results.
          </p>
        </div>
      </div>
      <div className="Services-body  flex flex-col">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="group py-8   border-b border-[#DBDAD6] grid grid-cols-1 md:grid-cols-2 gap-4 items-center "
          >
            <h2
              className="font-light w-full"
              style={{
                fontSize: "var(--fs-h2)",
                letterSpacing: "var(--ls-h2) ",
                lineHeight: "var(--lh-h2)",
                color: "var(--c-h2)",
              }}
            >
              {service.title}
            </h2>

            <p
              className="w-full"
              style={{
                fontSize: "var(--fs-p)",
                letterSpacing: "var(--ls-p)",
                lineHeight: "var(--lh-p) ",
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
