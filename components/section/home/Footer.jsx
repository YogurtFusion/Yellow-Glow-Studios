import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#F3F2EF] border-t border-neutral-300 pt-10 md:pt-20 pb-10 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full border border-black flex justify-center items-center">
                YG
              </div>
              <span className="font-medium text-lg">Yellow Glow Studios</span>
            </div>
            <p className="text-neutral-600 leading-relaxed text-sm max-w-sm w-full">
              A full-stack web studio crafting digital experiences with
              precision and purpose.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-6">
              Navigation
            </h3>
            <ul className="space-y-4 text-neutral-800 ">
              <li className="hover:text-black transition-colors">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-black transition-colors">
                <Link href={"/projects"}>Projects</Link>
              </li>
              <li className="hover:text-black transition-colors">
                <Link href={"#services"}>Services</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider  text-neutral-500 mb-6">
              Services
            </h3>
            <ul className="space-y-4 text-neutral-800">
              <li className=" hover:text-black transition-colors">
                <Link href={"#services"}>UI/UX Design</Link>
              </li>
              <li className=" hover:text-black transition-colors">
                <Link href={"#services"}>Web Development</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-6">
              Get in Touch
            </h3>
            <a
              href="mailto:yellowglowstudios@gmail.com?subject=Website%20project%20inquiry&body=Hi%20Yellow%20Glow%20Studios,%0D%0A%0D%0AI’m%20interested%20in%20a%20website%20for%20my%20business.%0D%0A%0D%0AHere%20are%20a%20few%20quick%20details:%0D%0A•%20Business%20type:%0D%0A•%20Timeline:%0D%0A•%20Budget%20range%20(optional):%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0AThanks,"
              className="text-neutral-800 border-b border-neutral-300 pb-1 hover:border-black transition-colors"
            >
              yellowglowstudios@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-neutral-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 ">
          <p>&copy; 2026 Yellow Glow Studios. All rights reserved</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              className="hover:text-black transition-colors underline decoration-neutral-300"
              href={"https://linkedin.com/in/aniketattech"}
            >
              LinkedIn
            </Link>
            <Link
              className="hover:text-black transition-colors underline decoration-neutral-300"
              href={"https://www.instagram.com/yellowglowstdio/"}
            >
              Instagram
            </Link>
            <Link
              className="hover:text-black transition-colors underline decoration-neutral-300"
              href={"https://x.com/AniketAtTech"}
            >
              X
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
