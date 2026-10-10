
'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/nav";


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

        useEffect(() => {
            if (dscvideoReady) {
                window.scrollTo(0, 0);
            }
        }, [dscvideoReady]);

    return(
    <>
        <Navbar/>
        <div className={`w-[100vw] h-[100vh] bg-black text-white flex items-center justify-center  ${dscvideoReady ? "hidden" : "block"}`}>
            <h2 className='!text-[30px]'>Loading...</h2>
        </div>

        <div className={`${dscvideoReady ? "block" : "hidden"}`}>
            <section className="h-[660px] sm:h-[100vh] relative">
                <video src="/videos/newdsc.mp4" autoPlay muted loop className="object-cover h-full w-full object-[75%_center] absolute" onCanPlay={() => setVideoReady(true)}/>
                <div className="w-full h-full flex flex-col absolute items-start justify-center lg:ml-[10%] lg:w-auto z-20 px-[15px] " >
                    <h2 className='text-[34px] sm:text-[38px] sm:w-[400px] '>The Leading Data Science Club at The University of Melbourne</h2>
                    <p className="mt-[20px] !text-white">Website Redesign</p>
                </div>
                <div className="w-full h-full bg-black opacity-50 z-10 lg:hidden"></div>
            </section>
            <section className='flex justify-center bg-[#1e1e1e]'>
                <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>
                    <p className="!text-[20px] mt-[60px] !text-white">
                        The club's brand guidelines, called for a modern, technical identity that reflected DSCubed's position as the leading data science club. The existing website fell short
                    </p>
                    <p className="mt-[20px]">
                        Led website analysis, ideation, committee presentation, and feedback collection. Collaborated with a team of designers to develop wireframes and prototypes.
                    </p>

                    <section className="flex flex-col sm:flex-row mt-[60px]">
                        <h2 className='!text-[30px]'>
                            Problem
                        </h2>
                        <div className="h-auto mx-[18px]">            
                            <ul className="list-disc pl-[10px] space-y-[20px]">
                                <li>
                                    <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Brand Misalignment</h2>
                                    <p>
                                        generic AI-generated imagery had no visual connection to the club, undermining the credibility the brief was meant to establish. 
                                    </p>
                                </li>
                                <li>
                                    <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Diluted Messaging</h2>
                                    <p>
                                        key information was buried under repetitive filler content, weakening the brief's goal of communicating value clearly to prospective members. 
                                    </p>
                                </li>     
                                <li>
                                    <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Inconsistent Execution</h2>
                                    <p>layout and styling varied across sections with no unifying system, leaving the site feeling improvised rather than intentional.</p>
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
                                    <p>Replaced the hero banner with an interactive tool, built by the committee, that lets users explore semantic connections of words.</p>
                                </li>
                                <li>
                                <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Brand Alignment</h2>
                                    <p>Rebuilt the layout, styling, and colour palette against the committee's brief, creating a cohesive visual system.</p>
                                </li>     
                                <li>
                                    <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Information restructuring</h2>
                                    <p>Removed filler and merged overlapping sections so the club's core message surfaces immediately.</p>
                                </li>
                            </ul>
                        </div>     
                    </section>
                    <h2 className='!text-[30px] mt-[60px]'>Ideation</h2>
                    <p className="mt-[10px]">
                        I conducted an analysis of the existing website to identify usability, visual and content issues by conducting a heuristic evaluation against the brief along with a competitor scan of established club sites. Then developed a prioritized list of improvements.
                    </p>
                    <img src="images/dsc/olddsc.png" alt="old website" className="w-full object-contain mt-[10px]"/>
                    <p className="mt-[10px]">
                        The website’s visual style did not reflect the brand, while dense and repetitive content made it difficult to communicate the club’s purpose clearly. The use of AI images did not support its respective content.
                    </p>
                    <p className="mt-[16px]">
                        Along with replacing the pixel grid with a visualizer, I recommended updating the colour theme and styling across the website, replacing AI images with relevant media, and restructuring content into shorter, more concise sections centered around the club’s benefits. 
                    </p>
                    
                    <h2 className='!text-[30px] mt-[60px]'>Process</h2>
                    <p className="mt-[10px]">
                        Working from a list of functional requirements, the team mapped the site's entire Information architecture and redesigned a scalable user flow to accommodate expanding initiatives like projects and competition pages.                     
                    </p>
                    <p className="mt-[16px]">
                        As a team, we produced multiple mid-fidelity wireframes, each exploring different design directions and approaches to the brief. One direction leaned towards an interactive experience with animations and moving elements, another kept a structured, static layout.                   
                    </p>
                    <p className="mt-[16px]">
                        Wireframes were presented to the club committee to collect feedback. The responses were used to weigh trade-offs between sections and features across different approaches, informing final adjustments.                    
                    </p>
                    <p className="mt-[16px]">
                        Between the interactive and structured directions, the committee favored a conservative layout throughout the rest of the site since the hero section already carried the interactive weight through the visualizer. On-load animations were encouraged as a middle ground.
                    </p>
                    <h2 className='!text-[30px] mt-[60px]'>Prototype</h2>
                    <img src="images/dsc/dscproto.png" alt="website prototype" className=""/>
                    <p>View more on website (link below)</p>
                    <h2 className='!text-[30px] mt-[60px]'>Results</h2>
                    <p className="mt-[10px]">
                        Through the visualizer embedding, a refined structure, and a cohesive style, the new design presents a more engaging experience with a clearer purpose. Members were seen exploring the visualizer, engaging with the homepage more. The redesign launched alongside a wider committee push across marketing, events, and industry outreach, and signups rose by 100+ the following semester.                
                    </p>
                    <div className="flex mt-[60px] items-center">
                        <h2 className='!text-[30px]'>Links:</h2>
                        <div className="flex h-auto mx-[10px]">  
                            <a href="https://www.dscubed.org.au/" target="_blank" className="flex justify-center mx-[10px]">
                                <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-[#1e1e1e] hover:text-white "><h4>Club Website</h4></Button>
                            </a>                      
                        </div>
                    </div>
                    <h2 className='!text-[30px] mt-[60px]'>Other Webpage projects</h2>
                    <div className="flex-col flex justify-center items-center w-full bg-[#1e1e1e]">
                        <a href="https://www.dscubed.org.au/projects" target="_blank" className="w-[80%] mt-[30px]">
                            <img src="images/dsc/project.png" alt="Projects page" />
                        </a>
                        <a href="https://www.dscubed.org.au/competitions" target="_blank" className="w-[80%] mt-[30px]">
                            <img src="images/dsc/competition.png" alt="competition page"/>
                        </a>
                        <a href="https://www.dscubed.org.au/committee-2025" target="_blank" className="w-[80%] mt-[30px]">
                            <img src="images/dsc/committee.png" alt="Committee page" />
                        </a>
                    </div>
                    <div className="mt-[80px]"></div>
                </div>
            </section>   
        </div>
    </>
    )
}