"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavBtn from "../../ui/NavBtn";

const navLinks = [
  {
    id: "ID1",
    title: "home",
    link: "/",
  },
  {
    id: "ID2",
    title: "our work",
    link: "/projects",
  },
  {
    id: "ID3",
    title: "services",
    link: "/#services",
  },
  {
    id: "ID4",
    title: "About us ",
    link: "/about",
  },
  {
    id: "ID5",
    title: "contact us",
    link: "/contact",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative h-full w-full">
      <div className="   fixed top-6 left-1/2 -translate-x-1/2  z-10 backdrop-blur-md shadow-sm rounded-full h-16 md:max-w-6xl max-w-xl w-[90vw] lg:w-full mx-auto flex justify-between items-center px-4 md:px-6 border border-border-light bg-nav-bg  ">
        {/* logo */}
        <Link href={"/"} className=" group flex  items-center gap-3 ">
          <div className=" flex items-center justify-center text-xs font-serif w-9 h-9 rounded-full border border-neutral-900 group-hover:scale-105 transition-transform  ">
            YG
          </div>
          {/* logo-text */}
          <span className="  font-light  tracking-tight md:flex lg:block flex-col text-sm md:text-lg leading-tight">
            Yellow Glow <span className="">Studios</span>
          </span>
        </Link>
        <button className="">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

     

      <nav className=" relative ">
        <div className="">
          <Link href={"/"} className=" group flex  items-center gap-3 ">
          <div className=" flex items-center justify-center text-xs font-serif w-9 h-9 rounded-full border border-neutral-900 group-hover:scale-105 transition-transform  ">
            YG
          </div>
          {/* logo-text */}
          <span className="  font-light  tracking-tight md:flex lg:block flex-col text-sm md:text-lg leading-tight">
            Yellow Glow <span className="">Studios</span>
          </span>
        </Link>
        </div>
        <ul className=" absolute flex items-center justify-between flex-col gap-4  z-10 bg-surface  w-screen h-screen  ">
          {navLinks.map((item) => (
            <li className="relative group" key={item.id}>
              <Link
                href={item.link}
                className="inline-block text-sm font-medium text-neutral-900 capitalize pb-1 "
              >
                {item.title}
              </Link>
              <span className="absolute bg-black  group-hover:scale-100 opacity-0 group-hover:opacity-100 origin-left scale-0  left-0 duration-500 transition-all h-px w-full bottom-1"></span>
            </li>
          ))}
          <div>
            <NavBtn />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
