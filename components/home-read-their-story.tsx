import React from "react";
import Headline from "./ui/haedline";
import SubHeadline from "./ui/sub-headline";
import NextImage from "./ui/custom-image-component";
import ShadowButton from "./ui/shadow-button";

const ReadTheirStory = () => {
  return (
    <div className="px-10  bg-cream-base py-20 flex flex-col gap-20">
      <div className="flex flex-col justify-center items-center w-full text-center gap-5 ">
        <Headline
          headerText="“THE BEST ATTITUDE IS GRATITUDE”"
          className="text-red-tomato text-[10rem] leading-[11rem]"
        />
        <SubHeadline
          subText="- The Jones Sister"
          className="text-red-tomato uppercase text-5xl"
        />
      </div>

      <div className="flex h-screen ">
        <div className="w-1/2 h-full flex items-end">
          <NextImage
            path="/story1.jpg"
            alt="hero_jones"
            className="w-[80%] h-[80%]"
          />
        </div>
        <div className="w-1/2 flex flex-col  gap-20">
          <NextImage
            path="/story2.jpg"
            alt="hero_jones"
            className="w-full h-[60%]"
          />

          <div className="flex flex-col gap-5">
            <SubHeadline
              className={`text-zinc-800 text-2xl  font-thin `}
              subText="For sisters Deborah “Little” and Mary “Shorty” Jones, barbeque is a way of life. When they were little girls, their father, Leavy B. Jones Sr., set them up on milk crates to look over the pit at the very first Jones Bar-B-Q restaurant."
            />

            <ShadowButton
              buttonText="Read Their Story"
              className="bg-red-tomato text-cream-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadTheirStory;
