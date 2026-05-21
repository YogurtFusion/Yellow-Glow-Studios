import React from "react";
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

const Navbar = () => {
  return (
    <nav className="   fixed top-6 left-1/2 -translate-x-1/2  z-50 backdrop-blur-md shadow-sm rounded-full h-16 md:max-w-6xl max-w-xl w-[90vw] lg:w-full mx-auto flex justify-between items-center px-4 md:px-6 border border-neutral-200 ">
      {/* logo */}
      <Link href={"/"} className=" group flex  items-center gap-3 ">
        <div className=" flex items-center justify-center text-xs font-serif w-9 h-9 rounded-full border border-neutral-900 group-hover:scale-105 transition-transform  ">
          YG
        </div>
        {/* logo-text */}
        <span className="  font-light  tracking-tight flex text-sm md:text-lg leading-tight  flex-col">
          Yellow Glow <span className="lg:hidden ">Studios</span>
        </span>
      </Link>
      <ul className=" hidden md:flex items-center justify-between gap-4 lg:gap-8">
        {navLinks.map((item) => (
          <li className="relative group" key={item.id}>
            <Link
              href={item.link}
              className="inline-block text-xs lg:text-sm font-medium text-neutral-900 capitalize pb-1"
            >
              {item.title}
            </Link>
            <span className="absolute bg-black  group-hover:scale-100 opacity-0 group-hover:opacity-100 origin-left scale-0  left-0 duration-500 transition-all h-px w-full bottom-1"></span>
          </li>
        ))}
      </ul>
      <div>
        <NavBtn />
      </div>
    </nav>
  );
};

export default Navbar;
