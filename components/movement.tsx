"use client";

import { useRef, useState } from "react";

export default function Movement() {
    const parentElement = useRef(null);
    const [dotx, setDotx] = useState(50);
    const [doty, setDoty] = useState(50);

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


    return(
        <>
        
        <section className="flex justify-center mt-[40px]">
            <div ref={parentElement} className="w-[70vw] sm:w-[50vw] md:w-[35vw] h-[70vw] sm:h-[50vw] md:h-[35vw] border-[1px] border-white-1 relative">
                <div className ="turtle"></div>  
            </div> 
        </section>
        <h2 className='text-[18px] sm:text-[20px] md:text-[30px] mt-[40px]'>Programmable Movement</h2>

        <button onClick={up}> up</button>
        <button onClick={down}> down</button>
        <button onClick={left}> left</button>
        <button onClick={right}> right</button>
        </>

    )
}






