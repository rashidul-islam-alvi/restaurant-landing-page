import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface ShadowButtonProps {
  className?: string;
  buttonText: string;
  buttonHref?: string;
}

const ShadowButton = ({
  className,
  buttonText,
  buttonHref = "/",
}: ShadowButtonProps) => {
  return (
    <Link href={buttonHref}>
      <button
        className={cn(
          "px-10 py-5 text-2xl tracking-widest text-red-tomato rounded-full  bg-cream-base  uppercase   transition duration-200 shadow ",
          className
        )}
      >
        {buttonText}
      </button>
    </Link>
  );
};

export default ShadowButton;
