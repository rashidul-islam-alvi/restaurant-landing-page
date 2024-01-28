import React from "react";
import SubHeadline from "./ui/sub-headline";
import Headline from "./ui/haedline";
import ShadowButton from "./ui/shadow-button";

const NewsLetter = () => {
  return (
    <div className="bg-[url('/fire-banner.png')] min-h-screen  bg-no-repeat flex flex-col bg-fixed justify-center items-center">
      <Headline headerText="STAY IN THE KNOW" className="text-[12rem]" />
      <SubHeadline
        subText="Enter your email address to receive news and updates from Jones Bar-B-Q."
        className="text-xl"
      />

      <form action="" className="flex flex-col mt-10 gap-5 items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-10 py-5 rounded-full bg-cream-base text-zinc-800 outline-none w-[500px]"
        />
        <ShadowButton buttonText="Subscribe" className="h-14 py-0" />
      </form>
    </div>
  );
};

export default NewsLetter;
