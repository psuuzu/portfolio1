
'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

//this page adds a loading page since the video takes some time to load
//the loading page is an illusion made by hiding and showing elements based on the state
//state changes depending on video load
//state name must be different for different pages as storing session would cause trouble if it were the same
export default function Dsc(){
     const [dscvideoReady, setVideoReady] = useState(false);

        //load the saved value on render
        useEffect(() => {
        const storedVid = sessionStorage.getItem("dscvideoReady");
        setVideoReady(storedVid);
        }, []);

        // Store to sessionStorage on change
        useEffect(() => {
        sessionStorage.setItem("dscvideoReady", dscvideoReady);
        }, [dscvideoReady]);

    return(
    <>
        <div className={`w-[100vw] h-[100vh] bg-black text-white flex items-center justify-center  ${dscvideoReady ? "hidden" : "block"}`}>
            <h2 className='!text-[30px]'>Loading...</h2>
        </div>

        <div className={`${dscvideoReady ? "block" : "hidden"}`}>
            <section className="h-[620px] sm:h-[100vh] relative">
                <video src="/videos/newdsc.mp4" autoPlay muted loop className="object-cover h-full object-[75%_center] absolute" onCanPlay={() => setVideoReady(true)}/>
                <div className="w-full h-full flex flex-col absolute items-start justify-center lg:ml-[10%] lg:w-auto z-20 px-[15px] " >
                    <h2 className='text-[34px] sm:text-[38px] sm:w-[400px] '>The Leading Data Science Club at The University of Melbourne</h2>
                    <p className="mt-[20px] !text-white">Website Redesign</p>
                </div>
                <div className="w-full h-full bg-black opacity-50 z-10 lg:hidden"></div>
            </section>
            <section className='flex justify-center bg-[#1e1e1e]'>
                <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>
                    <p className="!text-[20px] mt-[60px] !text-white">
                        This website rebrand project aimed to improve the club’s online presence by removing distracting content, highlighting key information and aligning the design with the club’s identity. 
                    </p>
                    <p className="mt-[20px]">
                        Led website analysis, and ideation, presented concepts to the club committee, and gathered feedback. I also collaborated with team members to develop wireframes and build prototypes.
                    </p>

                    <section className="flex flex-col sm:flex-row mt-[60px]">
                        <h2 className='!text-[30px]'>
                            Problem
                        </h2>
                        <div className="h-auto mx-[18px]">            
                            <ul className="list-disc pl-[10px] space-y-[20px]">
                                <li>
                                    <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Generic AI generated images</h2>
                                    <p>Current website uses irrelevant AI generated images that does not contribute to enhancing user understanding</p>
                                </li>
                                <li>
                                    <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Unorganized information</h2>
                                    <p>There are irrelevant information that distracts users from key sections</p>
                                </li>     
                                <li>
                                    <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Bland design</h2>
                                    <p>The club’s brand image is not represented through the current website</p>
                                </li>
                            </ul> 
                        </div>
                    </section>
                    <section className="flex flex-col sm:flex-row mt-[60px]">
                        <h2 className='!text-[30px]'>
                            Solution
                        </h2>
                        <div className="h-auto mx-[18px]">
                            <ul className="list-disc pl-[10px] space-y-[20px]">
                                <li>
                                    <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Visualizer embedding</h2>
                                    <p>This interactive tool lets users explore how words relate to each other using high-dimensional embeddings, projected into 3D space</p>
                                </li>
                                <li>
                                <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Aesthetic redesign</h2>
                                    <p>Redesigned layout, style and colour palette to better fit club's brand image</p>
                                </li>     
                                <li>
                                    <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Information restructuring</h2>
                                    <p>removing fillers and merging similar sections makes information more cohesive and impactful</p>
                                </li>
                            </ul>
                        </div>     
                    </section>
                    <h2 className='!text-[30px] mt-[60px]'>Ideation</h2>
                    <h2 className='!text-[30px] mt-[60px]'>Wireframing</h2>
                    <h2 className='!text-[30px] mt-[60px]'>Prototype</h2>
                    <div className="flex mt-[60px] items-center">
                        <h2 className='!text-[30px]'>Links:</h2>
                        <div className="flex h-auto mx-[10px]">  
                            <a href="https://www.dscubed.org.au/" target="_blank" className="flex justify-center mx-[10px]">
                                <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-[#1e1e1e] hover:text-white "><h4>Club Website</h4></Button>
                            </a>                      
                        </div>
                    </div>
                    <div className="mt-[80px]"></div>
                </div>
            </section>
        </div>
    </>
    )
}