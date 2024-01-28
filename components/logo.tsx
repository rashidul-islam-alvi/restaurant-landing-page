import React from "react";
import NextImage from "./ui/custom-image-component";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <NextImage
        path="/logo.png"
        alt="logo"
        className={cn("h-32 w-32  ", className)}
      />
    </Link>
  );
};

export default Logo;
