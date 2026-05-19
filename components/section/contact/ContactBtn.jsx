import Link from "next/link";
import React from "react";

const ContactBtn = () => {
  return (
    <a
      href="mailto:yellowglowstudios@gmail.com?subject=Website%20project%20inquiry&body=Hi%20Yellow%20Glow%20Studios,%0D%0A%0D%0AI’m%20interested%20in%20a%20website%20for%20my%20business.%0D%0A%0D%0AHere%20are%20a%20few%20quick%20details:%0D%0A•%20Business%20type:%0D%0A•%20Timeline:%0D%0A•%20Budget%20range%20(optional):%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0AThanks,"
      className="group flex items-center justify-center bg-[#121212] py-2 px-4 w-fit transition-colors duration-300 hover:bg-neutral-900"
    >
      <span className="relative uppercase text-base text-[#F4F4F0] tracking-[0.2em] font-medium">
       Submit
        <span className="absolute bottom-0 left-0 h-[1px] w-full bg-amber-50 origin-left transform scale-x-0 transition-transform duration-300 ease-out will-change-transform group-hover:scale-x-100"></span>
      </span>
    </a>
  );
};

export default ContactBtn;
