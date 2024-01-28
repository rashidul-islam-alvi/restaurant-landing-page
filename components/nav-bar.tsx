import React from "react";
import NextImage from "./ui/custom-image-component";
import ShadowButton from "./ui/shadow-button";
import { BsCart2 } from "react-icons/bs";
import Logo from "./logo";

const Navbar = () => {
  const navItemsData = [
    { id: "1", title: "Shop" },
    { id: "2", title: "Menu" },
    { id: "3", title: "Our Roots" },
    { id: "4", title: "Visit" },
    { id: "5", title: "Press" },
  ];

  const navItems = navItemsData.map((item) => (
    <li key={item.id} className="text-3xl tracking-wider border-b-2">
      <a href={`#${item.id}`}>{item.title}</a>
    </li>
  ));

  return (
    <div className="bg-red-tomato h-40 w-full flex justify-between items-center px-10">
      <div>
        <Logo />
      </div>

      <ul className="flex text-cream-base gap-10 items-center">{navItems}</ul>

      <div className="flex items-center gap-10">
        <div className="flex  items-center gap-2">
          <BsCart2 className="w-10 h-10 text-cream-base" />
          <span className="text-3xl  text-cream-base ">0</span>
        </div>
        <ShadowButton buttonText="Shop Now" />
      </div>
    </div>
  );
};

export default Navbar;
