'use client'
import { useState } from 'react';
import Line from "@/components/line";
import { Button } from "@/components/ui/button";
import { button } from 'framer-motion/client';


export default function Test() {
  const [sboriginal, setSboriginal] = useState(false);
  let starbreak = "/images/creative/sb.jpg"
  let buttontext = "View Original"

  function switchImage(){
    setSboriginal(!sboriginal)
  }

  if(sboriginal==true){
    buttontext = "View Edited"
    starbreak = "/images/creative/sbo.jpg"
  }

  if(sboriginal==false){
    buttontext = "View Original"
    starbreak = "/images/creative/sb.jpg"
  }


  return (
    <section className='flex items-center flex-col'>
        <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto z-40 bg-black'> 
          <div className="my-[80px] flex-col flex items-center">
            <h1 className='text-[40px] md:text-[50px] '>Creative Works</h1>
            <p className="text-[16px] mt-[10px]">I love to explore different mediums</p>
          </div> 
          
          
          <img src="/images/creative/gameb.jpg" alt="Game poster" className="rounded-xl"/>
          <h2 className='text-[26px] md:text-[30px] mt-[20px]'>First To The Moon</h2>
          <h3 className="mb-[15px]"> Game Design  </h3>
          <p className="text-[16px]">
            Selected to present as game designer at the Cybernetic Futures Showcase, Melbourne Design Week 2025. Designed game concept and mechanics; conducted playtesting and iterated based on user feedback to refine gameplay
          </p>
          <div className="flex justify-center mt-[25px]">
                <a href="https://showcase.technologiesforartisticresearch.com.au/#G15" target="_blank" className="flex justify-center">
                    <Button variant="outline" className=" hover:bg-black hover:border hover:border-input text-black hover:text-white"><h4>View More</h4></Button>
                </a> 
            </div>
          <Line></Line>
          <img src={starbreak} alt="Starbreak Sprite Manipulation" className="mt-[40px] rounded-xl"/>
          <div className='flex justify-between items-center w-full mt-[20px]'>
            <h2 className='text-[26px] md:text-[30px]'>Starbreak</h2>
            <h4 onClick={switchImage} className='cursor-pointer'>{buttontext}</h4>
          </div>
          <h3 className="mb-[15px]"> Game Sprite Manipulation </h3>
          <p className="text-[16px]">
            Extracted sprite sheets from game files. Tested and mapped sprite areas to in game interactions. Edited and manipulated sprites to create new visual experience.
          </p>
           <div className="flex justify-center mt-[25px]">
                <a href="https://imgur.com/gallery/starbreak-eschaton-sprites-JA3hlDL#/t/starbreak" target="_blank" className="flex justify-center">
                    <Button variant="outline" className=" hover:bg-black hover:border hover:border-input text-black hover:text-white"><h4>Sprite Sheet</h4></Button>
                </a> 
            </div>
          <Line></Line>
        </div>
        
        <div className='h-[100vh]'></div>
      </section>
  );
}
