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
          <div className="h-auto flex flex-col w-full sm:w-[126px] sm:justify-center mx-[5px] align-middle">
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
            <p className="text-[16px] text-gray-400">Enter program using initals of up, down, left, right. Eg. "uuull" for 3 ups and 2 left</p>
            <div className="flex mt-[5px]">
            <Input type="email" ref={inputRef} className="h-[30px] w-[45vw] sm:w-[25vw] border-r-0 rounded-r-none"/>
            <Button type="submit" variant="outline" onClick={run}  className="h-[30px]  hover:bg-black hover:border hover:border-input text-black hover:text-white"><h4>Enter</h4></Button>
            </div>
          </div>
        </section>
      
        <h2 className='text-[26px] md:text-[30px] mt-[20px]'>Programmable Movement</h2>
        <h3 className=" mb-[15px]">Front End | University Coursework | 2023</h3>
        <p className="text-[16px]">This is a Javascript program that allows user to move and program the block around that leaves a trail behind. This project is then integrated into this website by adjusting javascript into typescript rules</p>
        <div className="flex justify-center">
          <Button variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white"><h4>View more</h4></Button>
        </div>
        </>
    )
}






