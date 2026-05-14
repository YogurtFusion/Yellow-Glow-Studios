import Link from "next/link";
import React from "react";

const ProjectCta = () => {
  return (
    <section
      className=" mt-24  py-20 border-t border-neutral-200 bg-[#E4E2DD] mb-0! "
      id="projectCta"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-sm text-neutral-500 font-medium mb-6 block tracking-tight">
          What's next?
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6 tracking-tight">
          Have a project in mind?
        </h2>
        <p className="text-lg  text-neutral-600 mb-10 max-w-lg mx-auto leading-relaxed">
          We're always interested in hearing about new challenges. Let's start a
          conversation.
        </p>

        <a
          href="mailto:yellowglowstudios@gmail.com?subject=Website%20project%20inquiry&body=Hi%20Yellow%20Glow%20Studios,%0D%0A%0D%0AI’m%20interested%20in%20a%20website%20for%20my%20business.%0D%0A%0D%0AHere%20are%20a%20few%20quick%20details:%0D%0A•%20Business%20type:%0D%0A•%20Timeline:%0D%0A•%20Budget%20range%20(optional):%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0AThanks,"
          className="group inline-flex  items-center gap-3 bg-neutral-900 text-neutral-50 px-8 py-4 rounded-sm hover:bg-black transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl "
        >
          <span className="text-sm font-bold tracking-wide">Get in touch</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ProjectCta;
