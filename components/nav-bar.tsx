"use client";

import React, { useState } from "react";
import ShadowButton from "./ui/shadow-button";
import { BsCart2 } from "react-icons/bs";
import Logo from "./logo";
import Link from "next/link";
import { useParams } from "next/navigation";

const Navbar = () => {
  const [activeId, setActiveId] = useState("0");

  const navItemsData = [
    { id: "1", title: "Shop", href: "/shop" },
    { id: "2", title: "Menu", href: "/menu" },
    { id: "3", title: "Our Roots", href: "/roots" },
    { id: "4", title: "Visit", href: "/visit" },
    { id: "5", title: "Press", href: "/press" },
  ];

  const navItems = navItemsData.map((item) => (
    <li
      key={item.id}
      className={`text-3xl tracking-wider ${
        item.id === activeId ? "border-b-2" : "border-b-0"
      } `}
      onClick={() => setActiveId(item.id)}
    >
      <Link href={`${item.href}`}>{item.title}</Link>
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
