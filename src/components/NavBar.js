import React from "react";
import logo from "../assets/streakLOGO.png";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "DashBoard",
    title: "DashBoard",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "tools",
    title: "Tools",
  },
];

const Navbar = () => {
  return (
    <nav className="sm:flex hidden w-full bg-[#050129] py-5 px-10 justify-between items-center border-b-2 border-[#323232]">
      <img className="w-36 h-12" src={logo} alt="logo" />
      <ul className="list-none flex justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white/50 ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`/${nav.links}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
