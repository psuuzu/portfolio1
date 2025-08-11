'use client';
import React, { useEffect, useState } from "react";

const flickerPattern = [
  [0, 1, 0, 1], // Rectangle 1: flicker twice
  [0, 1, 0, 1, 0, 1], // Rectangle 2: flicker three times
  [0, 1, 0, 1, 1], // Rectangle 3: flicker with a double white at end
];

export default function Page() {
  const [visible, setVisible] = useState([0, 0, 0]);

  useEffect(() => {
    // Flicker logic for each rectangle
    flickerPattern.forEach((pattern, idx) => {
      let time = 0;
      pattern.forEach((val, i) => {
        setTimeout(() => {
          setVisible((prev) => {
            const next = [...prev];
            next[idx] = val;
            return next;
          });
        }, time);
        // Each flicker is a bit different in speed
        time += 80 + idx * 40 + Math.floor(Math.random() * 30);
      });
    });
  }, []);

  return (
    <div className=" bg-black flex justify-center">
      <div className="mt-[60px] flex w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-[620px] sm:h-[90vh] justify-between">
        <div
          className={`w-[31%] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px]  transition-colors duration-75 ${visible[0] ? "bg-white" : "bg-black"}`}
        />
        <div
          className={`w-[31%] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] transition-colors duration-75 ${visible[1] ? "bg-white" : "bg-black"}`}
        />
        <div
          className={`w-[31%] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] transition-colors duration-75 ${visible[2] ? "bg-white" : "bg-black"}`}
        />
      </div>
    </div>
  );
}

