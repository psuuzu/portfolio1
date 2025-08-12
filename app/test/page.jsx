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
    <section>
    <div className="relative bg-black flex justify-center mt-[60px]">
      <div className="flex w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] justify-between relative z-10">
        <div className="relative w-[31%] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <div className={`w-full h-full ${visible[0] ? "visible" : "invisible"} relative z-10`}>
            <div className="absolute bottom-5"><h1 className=" lg:text-[10vw] md:text-[12vw] sm:text-[14vw] text-[18vw]">Paul</h1></div>
            <img src="/images/surfbio.jpg" alt="banner" className="h-full object-cover object-left" />
          </div>
        </div>
        <div className="relative w-[31%] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <div className={`w-full h-full ${visible[1] ? "visible" : "invisible"} relative z-10`}>
            <div className="absolute bottom-5"><h1 className="lg:text-[10vw] md:text-[12vw] sm:text-[14vw] text-[18vw]">Su</h1></div>
            <img src="/images/surfbio.jpg" alt="banner" className="h-full object-cover object-center" />
          </div>
        </div>
        <div className="relative w-[31%] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <div className={`w-full h-full ${visible[2] ? "visible" : "invisible"} relative z-10`}>
            <img src="/images/surfbio.jpg" alt="banner" className="h-full object-cover object-right" />
          </div>
        </div>
      </div>
    </div>
    <div className="justify-center flex w-full">
       <div className="flex-row w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]">
        <p className="mt-[24px]">I’m a UX designer with a background in visual arts, passionate about creating intuitive solutions that are visually appealing and backed by research and testing. Beyond UX design, I am expanding my front end development skills in react to bring my designs to life</p>  
        <p className="mt-[16px]"> in my free time (if i get any) I enjoy doing visual arts, playing music, and surfing.</p>

      </div>
    </div>
     
    
    </section>
    
  );
}
