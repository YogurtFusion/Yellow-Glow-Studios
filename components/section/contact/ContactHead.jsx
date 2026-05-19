import React from "react";
import contactHero from "@/assets/img/contact-hero.png";
import Image from "next/image";

const ContactHead = () => {
  return (
    <div className="p-6  lg:px-8 flex flex-col   gap-12" >
      <div className="py-8 md:py-0">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold leading-normal tracking-tight">
          Let&apos;s Connect
        </h1>
        <p className="text-neutral-800 font-medium text-base text-pretty leading-relaxed max-w-sm">
          We thrive on collaborations with visionaries who value the
          intersection of art and strategy. Reach out to start a conversation
          about your next project.
        </p>
      </div>
      <div className="relative  max-w-[90vw] w-full mx-auto h-full md:hidden  aspect-square">
        <Image
          src={contactHero}
          className="object-cover md:hidden "
          alt="Contact hero Image"
          fill={true}
          sizes="(max-width: 768px) 100vw,0vw "
        />
      </div>
      <div className="h-px bg-neutral-300 w-full max-w-sm" />
      <div className="  flex flex-col gap-8  px-2 md:px-0">
        <div className="flex flex-col gap-2 ">
          <span className=" text-sm">Direct Inquiries</span>
          <a
            href="mailto:yellowglowstudios@gmail.com?subject=Website%20project%20inquiry&body=Hi%20Yellow%20Glow%20Studios,%0D%0A%0D%0AI’m%20interested%20in%20a%20website%20for%20my%20business.%0D%0A%0D%0AHere%20are%20a%20few%20quick%20details:%0D%0A•%20Business%20type:%0D%0A•%20Timeline:%0D%0A•%20Budget%20range%20(optional):%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0AThanks,"
            className="text-neutral-800  transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="pb-1 border-b border-neutral-300  hover:border-black active:border-black">
              yellowglowstudios@gmail.com
            </span>
          </a>
        </div>
        <div className="uppercase font-semibold tracking-widest text-xs flex gap-4">
          <a
            href={"https://www.instagram.com/yellowglowstdio/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Instagram</span>
          </a>
          <a
            href={"https://linkedin.com/in/aniketattech"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Linkedin</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactHead;
