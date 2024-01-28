import React from "react";
import NextImage from "./ui/custom-image-component";
import SubHeadline from "./ui/sub-headline";

const Featured = () => {
  const featuredItemImages = [
    { id: "1", imgUrl: "/eater.png", imgAlt: "eater" },
    { id: "2", imgUrl: "/feast.png", imgAlt: "feast" },
    { id: "3", imgUrl: "/refinery.png", imgAlt: "refinery" },
    { id: "4", imgUrl: "/vanity.png", imgAlt: "vanity" },
    { id: "5", imgUrl: "/womansday.png", imgAlt: "womansday" },
    { id: "6", imgUrl: "/wsj.png", imgAlt: "wsj" },
  ];

  const feturedItems = featuredItemImages.map((item) => (
    <NextImage
      path={item.imgUrl}
      alt={item.imgAlt}
      key={item.id}
      className="w-60 h-24"
    />
  ));

  return (
    <div className="bg-white flex items-center flex-col h-60 justify-center">
      <div>
        <SubHeadline
          subText="Featured In"
          className="uppercase text-red-tomato text-2xl"
        />
      </div>
      <div className=" flex justify-between w-full px-10 ">{feturedItems}</div>
    </div>
  );
};

export default Featured;
