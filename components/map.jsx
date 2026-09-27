import { Button } from "./ui/button"
import * as motion from "motion/react-client"
import React from "react";

export default function Map({ project, setProject, showSecondDiv , setShowSecondDiv}){
    return(
     
        <div className="flex flex-1 justify-center w-[95vw] h-full">
            <div className="h-full w-[70px] hidden sm:block">
                <div onClick={()=> {setProject("none"); setShowSecondDiv(false);}} className="cursor-pointer">
                    <p className="py-[10px] mr-[20px]"> ← Back</p>
                </div>
            </div>
            <section className="flex flex-col h-full">
                <div className="h-full sm:hidden">
                    <div onClick={()=> {setProject("none"); setShowSecondDiv(false);}}>
                        <p className="mb-[3vh]"> ← Back</p>
                    </div>
                </div>
                
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-row"> 
             
                <div onClick={()=> setProject("ux")} className="px-[10px] cursor-pointer">
                    <div className="flex items-center">
                        <h2 className="text-[26px]">Route</h2>
                        <div className="bg-white rounded-sm px-[5px] mx-[5px]">
                            <h2 className="text-[22px] !text-black">01</h2>
                        </div>
                        <p className="!text-[20px] ml-[5px]">UX/UI Work</p>
                    </div>
                    <p className="!text-[#838383] mt-[2px]">Problem --------- Product</p>
                </div>
              
                </motion.div>
                
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                > 
                
                <div className="mt-[8vh] px-[10px] cursor-pointer" onClick={()=> setProject("create")}>
                    <div className="flex items-center">
                        <h2 className="text-[26px]">Route</h2>
                        <div className="bg-white rounded-sm px-[5px] mx-[5px]">
                            <h2 className="text-[22px] !text-black">02</h2>
                        </div>
                        <p className="!text-[20px] ml-[5px]">Playground</p>
                    </div>
                    <p className="!text-[#838383] mt-[2px]">Concept -------- Creation</p>
                </div>  
                </motion.div>
                
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                > 
                <div className="mt-[8vh] px-[10px] cursor-pointer" onClick={()=> setProject("about")}>
                    <div className="flex items-center">
                        <h2 className="text-[26px]">Route</h2>
                        <div className="bg-white rounded-sm px-[5px] mx-[5px]">
                            <h2 className="text-[22px] !text-black">03</h2>
                        </div>
                        <p className="!text-[20px] ml-[5px]">About Me</p>
                    </div>
                    <p className="!text-[#838383] mt-[2px]">Background --- Direction</p>
                </div>
                </motion.div>
            </section>
            <div className="w-[70px]  hidden sm:block">
                
            </div>
            
        </div>           
    )
}