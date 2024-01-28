import { cn } from "@/lib/utils";
import React from "react";

interface HeadlineProps {
  className?: string;
  headerText: string;
}

const Headline = ({ className, headerText }: HeadlineProps) => {
  return (
    <h2 className={cn("text-9xl text-cream-base", className)}>{headerText}</h2>
  );
};

export default Headline;
