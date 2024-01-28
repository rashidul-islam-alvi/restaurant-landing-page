import React from "react";
import NextImage from "./ui/custom-image-component";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <NextImage
      path="/logo.png"
      alt="logo"
      className={cn("h-32 w-32  ", className)}
    />
  );
};

export default Logo;
