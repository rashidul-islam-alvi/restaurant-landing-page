import React from "react";
import SubHeadline from "./ui/sub-headline";

const VisitUs = () => {
  return (
    <div className="flex flex-col gap-5">
      <SubHeadline subText="Visit Us" className="uppercase text-4xl" />
      <div className="flex flex-col gap-2 font-sans">
        <p className="text-cream-base text-lg italic">
          6706 Kaw Drive Kansas City, KS 66111
        </p>
        <p className="text-cream-base text-lg italic">Question ? call</p>
        <p className="text-cream-base text-lg italic">816-541-8270</p>
        <p className="text-cream-base text-lg italic">855-752-7227</p>
      </div>
    </div>
  );
};

export default VisitUs;
