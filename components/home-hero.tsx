import React from "react";
import Headline from "./ui/haedline";
import NextImage from "./ui/custom-image-component";
import SubHeadline from "./ui/sub-headline";

const Hero = () => {
  return (
    <div className="flex justify-between px-10 py-10">
      <div className="w-1/2">
        <Headline
          headerText="SAUCE MADE WITH LOVE IN KANSAS CITY"
          className="text-[12.25rem] leading-[12.25rem]"
        />

        <SubHeadline subText="SINCE 1970… SOMETHING." className="text-6xl" />
      </div>

      <div className="w-1/2 flex justify-end">
        <NextImage
          path="/hero.png"
          alt="hero_image"
          className="w-[800px] h-[900px]"
        />
      </div>
    </div>
  );
};

export default Hero;
