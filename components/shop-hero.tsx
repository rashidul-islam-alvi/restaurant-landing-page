import React from "react";
import Headline from "./ui/haedline";
import SubHeadline from "./ui/sub-headline";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const ShopHero = () => {
  return (
    <div className="flex justify-center items-center  ">
      <div className=" w-[70%] text-center flex flex-col gap-5 py-10">
        <Headline
          headerText="WORLD-FAMOUS BBQ SAUCE"
          className="text-[13rem] leading-[13rem] "
        />

        <SubHeadline
          className={`${poppins.className} text-2xl`}
          subText="Want to enjoy the love and delicious flavors of Jones Bar-B-Q in the comfort of your own home? Order a bottle or case of Jones Bar-B-Q Sauce."
        />
        <SubHeadline
          className="text-lg "
          subText="***Unable to fulfill international orders***"
        />
        <SubHeadline
          className=" text-lg "
          subText="Estimated Delivery 7-14 Days"
        />
        <SubHeadline
          className=" text-xl  text-black"
          subText="Due to high demand, Sweet & Tangy not available for 2 to 3 weeks"
        />
      </div>
    </div>
  );
};

export default ShopHero;
