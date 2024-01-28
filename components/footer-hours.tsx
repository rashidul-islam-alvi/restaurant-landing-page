import React from "react";
import SubHeadline from "./ui/sub-headline";

const OurHours = () => {
  return (
    <div className="flex flex-col gap-5">
      <SubHeadline subText="OUR HOURS" className="uppercase text-4xl" />
      <div className="flex flex-col gap-2 font-sans">
        <p className="text-cream-base text-lg italic">
          Restaurant open 10:45am - 3pm or sellout
        </p>
        <p className="text-cream-base text-lg italic">
          Thursday, Friday, and Saturday each week
        </p>
        <p className="text-cream-base text-lg italic">
          No online orders or call-ins available
        </p>
        <p className="text-cream-base text-lg italic">
          SAUCE CAN STILL BE ORDERED THROUGH THE WEBSITE.
        </p>
      </div>
    </div>
  );
};

export default OurHours;
