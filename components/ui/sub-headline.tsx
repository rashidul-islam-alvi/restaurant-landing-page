import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

interface SubHeadlineProps {
  className?: string;
  subText: string;
}

const SubHeadline = ({ className, subText }: SubHeadlineProps) => {
  return <p className={cn("text-3xl text-cream-base", className)}>{subText}</p>;
};

export default SubHeadline;
