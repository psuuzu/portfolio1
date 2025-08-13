'use client'
import React, { useState, useEffect } from "react";
import Line from "@/components/line";
import Social from "@/components/ui/social";
import { motion } from "motion/react"

export default function Page(){

    return(
        <>
        <section className="h-auto sm:h-[100vh] w-[100vw] flex flex-col justify-center items-center mt-[50px] sm:mt-0">
            <div className="flex flex-col sm:flex-row items-center sm:justify-center h-[auto] sm:h-[34vw] lg:h-[20vw]">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay:0.5}}
                  >
                    <div className="w-[80vw] sm:w-[42vw] lg:w-[30vw] flex-col hidden sm:block">
                        <h1 className='text-[40px] md:text-[50px] pr-1'>Paul Su</h1>
                        <p className="mt-[20px]  pr-[10px]">I’m a UX designer with a background in visual arts, passionate about creating intuitive solutions that are visually appealing and backed by research and testing. Beyond UX design, I am expanding my front end development skills in react to bring my designs to life</p>
                        <p className="hidden pr-[10px] mt-[16px]"> in my free time (if i get any) I enjoy doing visual arts, playing music, and surfing.</p>
                    </div>
                  </motion.div>
                  {/* mobile title */}
                  <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay:0.5}}
                  >
                    <div className="w-[80vw] sm:w-[42vw] lg:w-[30vw] flex-col block sm:hidden">
                        <h1 className='text-[40px] md:text-[50px] pr-1'>Paul Su</h1>
                    </div>
                  </motion.div>
                  <motion.div
                  initial={{ opacity: 1, x: "-15vw" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay:0.5 }}
                  >
                    <div className="w-[80vw] sm:w-[42vw] lg:w-[30vw] h-[70vw] sm:h-[34vw] lg:h-[20vw] rounded-xl overflow-hidden hidden sm:block">
                        <img src="/images/surf.jpg" alt="surf pic" className="h-full w-full object-cover scale-150"/>
                    </div>
                  </motion.div>
                  {/* mobile image */}
                  <motion.div
                  initial={{ opacity: 1, y: "15vh" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay:0 }}
                  >
                  <div className="w-[80vw] sm:w-[42vw] lg:w-[30vw] h-[70vw] sm:h-[34vw] lg:h-[20vw] rounded-xl overflow-hidden sm:hidden">
                        <img src="/images/surf.jpg" alt="surf pic" className="h-full w-full object-cover scale-150"/>
                  </div>
                  </motion.div>
            </div>
            
            <div className="hidden sm:block">
                <Line></Line>
                <motion.div
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay:0.5 }}
            >
                <div className="w-[80vw] sm:w-[84vw] lg:w-[60vw] flex flex-col sm:flex-row sm:justify-between items-center mt-[40px]">
                    <div className="flex flex-row items-center mb-[5px] sm:m-0">
                        <h2 className='text-[20px] md:text-[24px]'>Contacts</h2>
                        <p className="ml-[20px]">psuuzu@gmail.com</p>
                    </div>
                    <Social></Social>
                </div>
                </motion.div> 
            </div> 
           
            {/* mobile content */}
            <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay:0.5}}
                  >
              <div className="w-[80vw] sm:w-[84vw] lg:w-[60vw] flex-col justify-center items-center block sm:hidden">
                <div className="w-[80vw]">
                  <p className="mt-[20px] ">I’m a UX designer with a background in visual arts, passionate about creating intuitive solutions that are visually appealing and backed by research and testing. Beyond UX design, I am expanding my front end development skills in react to bring my designs to life</p>
                  <p className="mt-[16px]"> in my free time (if i get any) I enjoy doing visual arts, playing music, and surfing.</p>
                </div>
                <Line></Line>
                    <div className="flex flex-row items-center justify-center my-[10px]">
                        <h2 className='text-[20px] md:text-[24px]'>Contacts</h2>
                        <p className="ml-[20px]">psuuzu@gmail.com</p>
                    </div>
                <div className="flex justify-center">
                  <Social></Social>
                </div>
              </div>
            </motion.div>
              
            
            <div className="mt-[80px] sm:hidden"></div>
        </section>

        </>
    )
}