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
    <header className="relative h-full w-full z-50">
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2  z-50 backdrop-blur-md shadow-sm rounded-full h-16 md:max-w-6xl max-w-xl w-[90vw] lg:w-full mx-auto  justify-between items-center px-4 md:px-6 border border-border-light bg-nav-bg ${isOpen ? "hidden" : "flex"}`}
      >
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
        <button className="" onClick={() => setIsOpen(true)}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      
        <div
          className={`fixed inset-0 bg-black/40 blur-md z-40 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-opacity duration-500`
      
        }
        onClick={()=>setIsOpen(false)}
        />
      
      <nav
        className={` fixed right-0 top-0 p-8  bg-surface shadow-2xl  w-[80vw] md:w-96 h-screen flex flex-col  gap-8 z-50 transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"} `}
      >
        <div className="flex justify-end mb-12">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <ul className="  flex flex-col items-start gap-8 pl-8 ">
          {navLinks.map((item) => (
            <li className="relative group w-fit  " key={item.id}>
              <Link
                href={item.link}
                className="inline-block text-2xl font-medium text-neutral-900 capitalize pb-1 "
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
              <span className="absolute bg-black  group-hover:scale-x-100 opacity-0 group-hover:opacity-100 origin-left scale-x-0  left-0 duration-500 transition-all h-px w-full bottom-1"></span>
            </li>
          ))}

          <NavBtn />
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
