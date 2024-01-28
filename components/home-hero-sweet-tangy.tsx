import React from "react";
import NextImage from "./ui/custom-image-component";
import Headline from "./ui/haedline";
import SubHeadline from "./ui/sub-headline";
import { Bebas_Neue } from "next/font/google";
import ShadowButton from "./ui/shadow-button";

const bebes_neue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const HeroSweetTangy = () => {
  return (
    <div className="min-h-screen bg-cream-base flex">
      <div className="w-1/2">
        <NextImage
          path="/sweet.png"
          alt="her_sweet_tangy"
          className="w-full h-full"
        />
      </div>
      <div className="w-1/2 px-10 flex flex-col justify-center  gap-5">
        <Headline
          headerText="THE MAGIC OF JONES BBQ IN YOUR HOME"
          className="text-red-tomato"
        />

        <SubHeadline
          className={`text-zinc-800  ${bebes_neue.className}`}
          subText="The Jones family has made their sauce from scratch daily for over 50 years. For the first time ever, you can bring that flavor to a grill near you."
        />

        <ShadowButton
          buttonText="Shop our sauces"
          className="text-cream-base bg-red-tomato"
        />
      </div>
    </div>
  );
};

export default HeroSweetTangy;
