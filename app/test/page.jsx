import React from "react";
import { Compare } from "@/components/ui/compare";

export default function CompareDemo() {
  return (
    <div className="">
      <Compare
        firstImage="images/dsc.gif"
        secondImage="images/newdsc.png"
        firstImageClassName="object-cover "
        secondImageClassname="object-cover"
        className="w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]"
        slideMode="hover"
      />
    </div>
  );
}
