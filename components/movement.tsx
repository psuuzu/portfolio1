"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { useRef, useState } from "react";

export default function Movement() {
    const parentElement = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [dotx, setDotx] = useState(50);
    const [doty, setDoty] = useState(50);
    const [inputValue, setinputValue] = useState("")

    function up() {
      if(parentElement.current){
        if(doty>0){
            setDoty(doty - 2)
        }
        const newDot = document.createElement("div");
        newDot.className = "turtle";
        newDot.style.left = dotx +"%";
        newDot.style.top = (doty - 2) +"%";
        parentElement.current.appendChild(newDot)
      }
    }

    function down() {
        if(parentElement.current){
          if(doty<98){
              setDoty(doty + 2)
          }
          const newDot = document.createElement("div");
          newDot.className = "turtle";
          newDot.style.left = dotx +"%";
          newDot.style.top = (doty + 2) +"%";
          parentElement.current.appendChild(newDot)
        }
      }
    function left() {
    if(parentElement.current){
        if(dotx>0){
            setDotx(dotx - 2)
        }
        const newDot = document.createElement("div");
        newDot.className = "turtle";
        newDot.style.left = (dotx - 2) +"%";
        newDot.style.top = doty +"%";
        parentElement.current.appendChild(newDot)
    }
    }

    function right() {
        if(parentElement.current){
          if(dotx<98){
              setDotx(dotx + 2)
          }
          const newDot = document.createElement("div");
          newDot.className = "turtle";
          newDot.style.left = (dotx + 2) +"%";
          newDot.style.top = doty +"%";
          parentElement.current.appendChild(newDot)
        }
      }

    function run(){
      if(parentElement.current){
        const userInputValue = inputRef.current?.value.toLowerCase()|| "";
        let currentX = dotx;
        let currentY = doty;

        for (let i=0; i < userInputValue.length; i++){
          if(userInputValue[i] == "u"){
              if(currentY>0){
                  currentY = currentY - 2
              }
              const newDot = document.createElement("div");
              newDot.className = "turtle";
              newDot.style.left = currentX +"%";
              newDot.style.top = (currentY) +"%";
              parentElement.current.appendChild(newDot)
          }
          if(userInputValue[i] == "d"){
            if(currentY<98){
              currentY = currentY + 2
            }
          const newDot = document.createElement("div");
          newDot.className = "turtle";
          newDot.style.left = currentX +"%";
          newDot.style.top = (currentY) +"%";
          parentElement.current.appendChild(newDot)
          }
          if(userInputValue[i] == "l"){
            if(currentX>0){
              currentX = currentX - 2
          }
          const newDot = document.createElement("div");
          newDot.className = "turtle";
          newDot.style.left = (currentX) +"%";
          newDot.style.top = currentY +"%";
          parentElement.current.appendChild(newDot)
          }
          if(userInputValue[i] == "r"){
            if(currentX<98){
              currentX = currentX + 2
          }
          const newDot = document.createElement("div");
          newDot.className = "turtle";
          newDot.style.left = (currentX) +"%";
          newDot.style.top = currentY +"%";
          parentElement.current.appendChild(newDot)
          }
        }
        setDoty(currentY)
        setDotx(currentX)
      }
    }

    return(
        <>
        
        <section className="flex justify-center mt-[40px]">
            <div ref={parentElement} className="w-[70vw] sm:w-[50vw] md:w-[35vw] h-[70vw] sm:h-[50vw] md:h-[35vw] border-[2px] border-gray-500 relative">
                <div className ="turtle"></div>  
            </div> 
        </section>
        <section className="sm:flex justify-center mt-[10px]">
          <div className="h-auto w-auto flex flex-col w-[126px] sm:justify-center mx-[5px] align-middle">
            <div className="flex justify-center">
              <Button onClick={up} variant="outline" className=" w-[40px]"> ↑ </Button>
            </div>
            <div className="flex justify-center">
              <Button onClick={left} variant="outline" className=" w-[40px] m-[2px]"> ←</Button>
              <Button onClick={down} variant="outline" className=" w-[40px] m-[2px]"> ↓</Button>
              <Button onClick={right} variant="outline" className=" w-[40px] m-[2px]"> →</Button>
            </div>
          </div>
          <div className="flex sm:w-[35vw] items-center space-x-2 flex-col mx-[10px] ">
            <p className="text-[12px] sm:text-[14px] md:text-[16px] text-gray-400">Enter program here using "udlr"</p>
            <div className="flex mt-[5px]">
            <Input type="email" ref={inputRef} className="h-[30px] w-[45vw] sm:w-[25vw] border-r-0 rounded-r-none"/>
            <Button type="submit" variant="outline" onClick={run}  className="h-[30px]"><p className="text-[12px] sm:text-[14px] md:text-[16px]">Enter</p></Button>
            </div>
          </div>
        </section>
      
        <h2 className='text-[18px] sm:text-[20px] md:text-[30px] mt-[20px]'>Programmable Movement</h2>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-500 mb-[15px]">Front End | University Coursework</p>
        <p className="text-[12px] sm:text-[14px] md:text-[16px]">some descriptionf</p>
        <div className="flex justify-center">
          <Button variant="outline" className="my-[25px]"><p className="text-[12px] sm:text-[14px] md:text-[16px]">view more</p></Button>
        </div>
        </>
    )
}






