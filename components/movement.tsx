"use client";
import { Input } from "./ui/input";
import { InputWithButton } from "./ui/inputwb";
import { Button } from "./ui/button";

import { useRef, useState } from "react";

export default function Movement() {
    const parentElement = useRef(null);
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
        const userInputValue = inputRef.current?.value.toLowerCase();
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
            <div ref={parentElement} className="w-[70vw] sm:w-[50vw] md:w-[35vw] h-[70vw] sm:h-[50vw] md:h-[35vw] border-[1px] border-white-1 relative">
                <div className ="turtle"></div>  
            </div> 
        </section>
        <div className="h-auto">
          <button onClick={left} className="h-[100px] border-[1px]"> left</button>
          <button onClick={up}> up</button>
          <button onClick={down}> down</button>
          <button onClick={right}> right</button>
        </div>

        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Enter program here" ref={inputRef}/>
          <Button type="submit" variant="outline" onClick={run}>enter</Button>
        </div>
        <h2 className='text-[18px] sm:text-[20px] md:text-[30px] mt-[20px]'>Programmable Movement</h2>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-500 mb-[15px]">Front End | University Coursework</p>
        </>
    )
}






