import React from "react";
import Link from "next/link";
import NavBtn from "../../ui/NavBtn";

const Navbar = () => {
  return (
    <nav className="   fixed top-6 left-1/2 -translate-x-1/2  z-50 backdrop-blur-md shadow-sm rounded-full h-16 md:max-w-6xl max-w-xl w-[90vw] lg:w-full mx-auto flex justify-between items-center px-4 md:px-6 border border-neutral-200 ">
      {/* logo */}
      <Link href={"/"} className=" group flex  items-center gap-3 ">
        <div className=" flex items-center justify-center text-xs font-serif w-9 h-9 rounded-full border border-neutral-900 group-hover:scale-105 transition-transform  ">
           YG
        </div>
        {/* logo-text */}
        <span className="  font-light  tracking-tight hidden md:block text-lg ">
          Yellow Glow Studios
        </span>
      </Link>
      <ul className=" hidden md:flex items-center justify-between gap-8  text-sm font-medium text-neutral-600 ">
        <li>
          <Link href={"/"} className="hover:text-black transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/projects"} className="hover:text-black transition-colors">
            Live Sites
          </Link>
        </li>
        <li>
          <Link
            href={"/#services"}
            className="hover:text-black transition-colors"
          >
            Services
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href={"/about"} className="hover:text-black transition-colors">
            About Us
          </Link>
        </li> 
        <li className="hidden md:block">
          <Link href={"/contact"} className="hover:text-black transition-colors">
            contact Us
          </Link>
        </li> 
       
         
     
      </ul>
      <div>
      <NavBtn />
      </div>
    </nav>
  );
};

export default Navbar;
