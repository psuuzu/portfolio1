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
             
                <div onClick={()=> setProject("ux")} className="px-[10px]">
                    <div className="flex items-center">
                        <h2 className="text-[26px]">Route</h2>
                        <div className="bg-white rounded-sm px-[5px] mx-[5px]">
                            <h2 className="text-[22px] !text-black">01</h2>
                        </div>
                        <p className="!text-[20px] ml-[5px]">UX/UI Design</p>
                    </div>
                    <p className="!text-[#838383] mt-[2px]">Ideas -------- Prototype</p>
                    {/* <img src="/images/route1.p  ng" className="w-[90vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw] h-auto max-w-[300px] mb-[5px]"/>                                    */}
                </div>
              
                </motion.div>
                
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                > 
                
                <div className="mt-[8vh] px-[10px]" onClick={()=> setProject("ui")}>
                    <div className="flex items-center">
                        <h2 className="text-[26px]">Route</h2>
                        <div className="bg-white rounded-sm px-[5px] mx-[5px]">
                            <h2 className="text-[22px] !text-black">02</h2>
                        </div>
                        <p className="!text-[20px] ml-[5px]">Front-End</p>
                    </div>
                    <p className="!text-[#838383] mt-[2px]">Design -------- Interactive Product</p>
                    {/* <img src="/images/route2.png" className="w-[90vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw] h-auto max-w-[300px] mb-[5px]"/> */}
                </div>  
                </motion.div>
                
                <div className="mt-[8vh] opacity-60 px-[10px]">
                    <div className="flex items-center">
                        <h2 className="text-[26px]">Route</h2>
                        <div className="bg-white rounded-sm px-[5px] mx-[5px]">
                            <h2 className="text-[22px] !text-black">03</h2>
                        </div>
                        <p className="!text-[20px] ml-[5px]">Creative Works</p>
                    </div>
                    <p className="mt-[2px]">(Under Construction)</p>
                    {/* image and button goes here         */}
                </div>
            </section>
            <div className="w-[70px]  hidden sm:block"></div>
            
        </div>           
    )
}