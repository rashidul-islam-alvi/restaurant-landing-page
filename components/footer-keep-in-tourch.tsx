import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import SubHeadline from "./ui/sub-headline";

const KeepInTouch = () => {
  return (
    <div className="flex flex-col gap-5">
      <SubHeadline subText="Keep in touch" className="uppercase text-4xl" />
      <div className="flex gap-5">
        <FaFacebook className="text-cream-base text-5xl" />
        <FaInstagram className="text-cream-base text-5xl" />
        <FaTwitter className="text-cream-base text-5xl" />
      </div>
    </div>
  );
};

export default KeepInTouch;
