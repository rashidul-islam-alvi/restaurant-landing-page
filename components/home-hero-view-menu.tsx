import React from "react";
import NextImage from "./ui/custom-image-component";
import Headline from "./ui/haedline";
import SubHeadline from "./ui/sub-headline";
import ShadowButton from "./ui/shadow-button";
import { Bebas_Neue } from "next/font/google";

const bebes_neue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const ViewMenu = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 flex flex-col px-10 justify-center gap-5">
        <Headline headerText="STOP BY OUR RESTAURANT" />
        <SubHeadline
          className={`text-2xl tracking-wider ${bebes_neue.className} `}
          subText="From housemade sausages to racks of ribs, we love to feed our Kansas City community. So come join the party… and come hungry!"
        />
        <ShadowButton buttonText="View our menu" />
      </div>
      <div className="w-1/2">
        <NextImage
          path="/steak.jpg"
          alt="hero_steak"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ViewMenu;
