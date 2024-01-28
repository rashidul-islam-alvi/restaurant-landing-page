import React from "react";
import SubHeadline from "./ui/sub-headline";

const Media = () => {
  return (
    <div className="flex flex-col gap-5">
      <SubHeadline subText="Media Inqueries" className="uppercase text-4xl" />
      <div className="flex flex-col gap-2 font-sans">
        <p className="text-cream-base text-lg italic">rashidul537@gmai.com</p>
        <p className="text-cream-base text-lg italic">
          Made by Md. Rashidul Islam
        </p>
      </div>
    </div>
  );
};

export default Media;
